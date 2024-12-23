// smithy-typescript generated code
import { EndpointParameters as __EndpointParameters, Provider } from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  region?: string | Provider<string>;
  useFipsEndpoint?: boolean | Provider<boolean>;
  useDualstackEndpoint?: boolean | Provider<boolean>;
}

export type ClientResolvedEndpointParameters = ClientInputEndpointParameters & {
  defaultSigningName: string;
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return {
    ...options,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    defaultSigningName: "ecr-public",
  };
};

export const commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
} as const;

export interface EndpointParameters extends __EndpointParameters {
  Region?: string;
  UseFIPS?: boolean;
  UseDualStack?: boolean;
}
