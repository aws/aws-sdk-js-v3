// smithy-typescript generated code
import { EndpointParameters as __EndpointParameters, Provider } from "@aws-sdk/types";

export interface ClientInputEndpointParameters {
  region?: string | Provider<string>;
  useDualstackEndpoint?: boolean | Provider<boolean>;
  useFipsEndpoint?: boolean | Provider<boolean>;
  endpoint?: string | Provider<string>;
  useGlobalEndpoint?: boolean | Provider<boolean>;
}

export type ClientResolvedEndpointParameters = ClientInputEndpointParameters & {
  defaultSigningName: string;
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    defaultSigningName: "sts",
  };
};

export interface EndpointParameters extends __EndpointParameters {
  Region?: string;
  UseDualStack?: boolean;
  UseFIPS?: boolean;
  Endpoint?: string;
  UseGlobalEndpoint?: boolean;
}
