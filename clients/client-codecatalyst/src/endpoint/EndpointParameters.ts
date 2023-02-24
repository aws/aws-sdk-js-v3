// smithy-typescript generated code
import { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@aws-sdk/types";

export interface ClientInputEndpointParameters {
  useFipsEndpoint?: boolean | Provider<boolean>;
  region?: string | Provider<string>;
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
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
    defaultSigningName: "codecatalyst",
  };
};

export interface EndpointParameters extends __EndpointParameters {
  UseFIPS?: boolean;
  Region?: string;
  Endpoint?: string;
}
