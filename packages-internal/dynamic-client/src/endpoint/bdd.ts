import { BinaryDecisionDiagram } from "@smithy/core/endpoints";

/**
 * The `smithy.rules#endpointBdd` trait as it appears in the Smithy JSON AST.
 *
 * @internal
 */
export interface EndpointBddTrait {
  version: string;
  parameters: Record<string, unknown>;
  conditions: BddConditionObject[];
  results: BddResultObject[];
  root: number;
  nodeCount: number;
  /** Base64-encoded, big-endian `Int32` triples: `[variable, high, low]`. */
  nodes: string;
}

/**
 * A BDD condition in AST (rule-object) form.
 *
 * @internal
 */
export interface BddConditionObject {
  fn: string;
  argv: unknown[];
  assign?: string;
}

/**
 * A BDD result in AST (rule-object) form: either an endpoint rule or an error
 * rule, discriminated by `type`.
 *
 * @internal
 */
export interface BddResultObject {
  type: "endpoint" | "error";
  conditions?: unknown[];
  endpoint?: {
    url: unknown;
    properties?: Record<string, unknown>;
    headers?: Record<string, unknown>;
  };
  error?: unknown;
}

/**
 * The `-1` terminal reference.
 *
 * @internal
 */
const TERMINAL = -1;

/**
 * Builds a runtime {@link BinaryDecisionDiagram} from an AST endpointBdd trait.
 *
 * @param trait - the `smithy.rules#endpointBdd` trait value from the AST.
 *
 * @returns a `BinaryDecisionDiagram` ready for `decideEndpoint`.
 *
 * @internal
 */
export function buildBdd(trait: EndpointBddTrait): BinaryDecisionDiagram {
  const nodes = decodeBddNodes(trait.nodes);
  const conditions = trait.conditions.map(toConditionTuple);
  const results = toResultTuples(trait.results);
  return BinaryDecisionDiagram.from(nodes, trait.root, conditions, results);
}

/**
 * Decodes the base64-encoded node array into a flat `Int32Array` of
 * `[variable, high, low]` triples.
 *
 * @param base64 - the base64-encoded node array.
 *
 * @returns the decoded nodes as a flat `Int32Array`.
 *
 * @internal
 */
export function decodeBddNodes(base64: string): Int32Array {
  const bytes = base64ToBytes(base64);
  if (bytes.length % 4 !== 0) {
    throw new Error(
      `@aws-sdk/dynamic-client - invalid endpointBdd nodes: byte length ${bytes.length} is not a multiple of 4.`
    );
  }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const out = new Int32Array(bytes.length / 4);
  for (let i = 0; i < out.length; i++) {
    // `false` => big-endian.
    out[i] = view.getInt32(i * 4, false);
  }
  return out;
}

/**
 * Maps an AST condition rule object to the positional tuple
 * `[fn, argv]` or `[fn, argv, assign]` that `decideEndpoint` destructures.
 *
 * @internal
 */
export function toConditionTuple(condition: BddConditionObject): [string, unknown[]] | [string, unknown[], string] {
  return condition.assign !== undefined
    ? [condition.fn, condition.argv, condition.assign]
    : [condition.fn, condition.argv];
}

/**
 * Maps the AST result rule objects to the positional result tuples the runtime
 * indexes by BDD result reference.
 *
 * @internal
 */
export function toResultTuples(
  results: BddResultObject[]
): Array<
  | [number]
  | [number, unknown]
  | [unknown, Record<string, unknown>]
  | [unknown, Record<string, unknown>, Record<string, unknown>]
> {
  const tuples: Array<
    | [number]
    | [number, unknown]
    | [unknown, Record<string, unknown>]
    | [unknown, Record<string, unknown>, Record<string, unknown>]
  > = [[TERMINAL]];
  for (const result of results) {
    if (result.type === "error") {
      tuples.push([TERMINAL, result.error]);
      continue;
    }
    const endpoint = result.endpoint;
    if (!endpoint) {
      throw new Error(`@aws-sdk/dynamic-client - endpointBdd result of type "endpoint" is missing an endpoint object.`);
    }
    const properties = endpoint.properties ?? {};
    if (endpoint.headers !== undefined) {
      tuples.push([endpoint.url, properties, endpoint.headers]);
    } else {
      tuples.push([endpoint.url, properties]);
    }
  }
  return tuples;
}

/**
 * Decodes a standard base64 string to bytes without depending on a specific
 * runtime.
 *
 * @internal
 */
function base64ToBytes(base64: string): Uint8Array {
  if (typeof Buffer !== "undefined" && typeof Buffer.from === "function") {
    const buf = Buffer.from(base64, "base64");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
