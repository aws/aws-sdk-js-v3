// smithy-typescript generated code
import { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  useFipsEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
  region?: string | undefined | Provider<string | undefined>;
}

export type ClientResolvedEndpointParameters = Omit<ClientInputEndpointParameters, "endpoint"> & {
  defaultSigningName: string;
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return Object.assign(options, {
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "s3vectors",
  });
};

export const commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
} as const;

export interface EndpointParameters extends __EndpointParameters {
  UseFIPS?: boolean | undefined;
  Endpoint?: string | undefined;
  Region?: string | undefined;
}
