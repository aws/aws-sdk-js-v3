// smithy-typescript generated code
import type {
  Endpoint,
  EndpointParameterInstructions,
  EndpointParameters as __EndpointParameters,
  EndpointV2,
  Provider,
} from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  region?: string | undefined | Provider<string | undefined>;
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
}

/**
 * @public
 */
export type ClientResolvedEndpointParameters = Omit<ClientInputEndpointParameters, "endpoint"> & {
  defaultSigningName: string;
};

/**
 * @internal
 */
export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return Object.assign(options, {
    defaultSigningName: "agent-registry",
  });
};

/**
 * @internal
 */
export const commonParams = {
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
} as const satisfies EndpointParameterInstructions;

/**
 * @internal
 */
export interface EndpointParameters extends __EndpointParameters {
  Region?: string | undefined;
  Endpoint?: string | undefined;
}
