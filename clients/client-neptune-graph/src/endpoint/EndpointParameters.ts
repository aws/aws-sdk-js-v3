// smithy-typescript generated code
import type { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  region?: string | undefined | Provider<string | undefined>;
  useFipsEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  useDualstackEndpoint?: boolean | undefined | Provider<boolean | undefined>;
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
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    defaultSigningName: "neptune-graph",
  });
};

/**
 * @internal
 */
export const commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
} as const;

/**
 * @internal
 */
export interface EndpointParameters extends __EndpointParameters {
  Region?: string | undefined;
  UseFIPS?: boolean | undefined;
  UseDualStack?: boolean | undefined;
  Endpoint?: string | undefined;
  ApiType: string;
}
