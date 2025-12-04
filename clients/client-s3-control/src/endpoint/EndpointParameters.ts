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
  useArnRegion?: boolean | undefined | Provider<boolean | undefined>;
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
    defaultSigningName: "s3",
  });
};

/**
 * @internal
 */
export const commonParams = {
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
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
  AccountId?: string | undefined;
  RequiresAccountId?: boolean | undefined;
  OutpostId?: string | undefined;
  Bucket?: string | undefined;
  AccessPointName?: string | undefined;
  UseArnRegion?: boolean | undefined;
  ResourceArn?: string | undefined;
  UseS3ExpressControlEndpoint?: boolean | undefined;
}
