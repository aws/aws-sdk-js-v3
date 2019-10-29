export const TYPE = "__type";

/**
 * Checks if the given value is a Smithy structure of the given type.
 */
export function isa<T>(o: any, ...ids: string[]): o is T {
  return typeof o === "object" && TYPE in o && ids.indexOf(o[TYPE]) > -1;
}

/**
 * Type that is implemented by all Smithy shapes marked with the
 * error trait.
 */
export interface SmithyException {
  /**
   * The shape ID of the exception.
   */
  readonly __type: string;

  /**
   * Whether the client or server are at fault.
   */
  readonly $fault: "client" | "server";

  /**
   * The name of the error.
   */
  readonly $name: string;

  /**
   * The service that encountered the exception.
   */
  readonly $service?: string;
}

/**
 * Smithy document type values.
 */
export namespace DocumentType {
  export type Value = Scalar | Structure | List;
  export type Scalar = string | number | boolean | null | Uint8Array | Date;
  export type Structure = { [member: string]: Value };
  export interface List extends Array<Value> {}
}
