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
  useFipsEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  useDualstackEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  accountId?: string | undefined | Provider<string | undefined>;
  accountIdEndpointMode?: string | undefined | Provider<string | undefined>;
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
    defaultSigningName: "events",
  });
};

/**
 * @internal
 */
export const commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  AccountId: { type: "builtInParams", name: "accountId" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
  AccountIdEndpointMode: { type: "builtInParams", name: "accountIdEndpointMode" },
} as const satisfies EndpointParameterInstructions;

/**
 * @internal
 */
export interface EndpointParameters extends __EndpointParameters {
  Region: string;
  Endpoint?: string | undefined;
  UseFIPS?: boolean | undefined;
  UseDualStack?: boolean | undefined;
  AccountId?: string | undefined;
  EventBusArn?: string | undefined;
  AccountIdEndpointMode?: string | undefined;
}
