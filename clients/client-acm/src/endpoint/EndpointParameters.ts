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
  clientContextParams?: {
    serviceType?: string | undefined | Provider<string | undefined>;
  };
  region?: string | undefined | Provider<string | undefined>;
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
  useFipsEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  useDualstackEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  serviceType?: string | undefined | Provider<string | undefined>;
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
const clientContextParamDefaults = {} as const;

/**
 * @internal
 */
export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return Object.assign(options, {
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    defaultSigningName: "acm",
    clientContextParams: options.clientContextParams ?? {},
  });
};

/**
 * @internal
 */
export const commonParams = {
  ServiceType: { type: "clientContextParams", name: "serviceType" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
} as const satisfies EndpointParameterInstructions;

/**
 * @internal
 */
export interface EndpointParameters extends __EndpointParameters {
  Region: string;
  Endpoint?: string | undefined;
  UseFIPS?: boolean | undefined;
  UseDualStack?: boolean | undefined;
  ServiceType: string;
}
