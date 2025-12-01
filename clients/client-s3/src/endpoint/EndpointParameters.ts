// smithy-typescript generated code
import type { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  clientContextParams?: {
    disableS3ExpressSessionAuth?: boolean | undefined | Provider<boolean | undefined>;
  };
  region?: string | undefined | Provider<string | undefined>;
  useFipsEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  useDualstackEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
  forcePathStyle?: boolean | undefined | Provider<boolean | undefined>;
  useAccelerateEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  useGlobalEndpoint?: boolean | undefined | Provider<boolean | undefined>;
  disableMultiregionAccessPoints?: boolean | undefined | Provider<boolean | undefined>;
  useArnRegion?: boolean | undefined | Provider<boolean | undefined>;
  disableS3ExpressSessionAuth?: boolean | undefined | Provider<boolean | undefined>;
}

export type ClientResolvedEndpointParameters = Omit<
  ClientInputEndpointParameters,
  "endpoint" | "clientContextParams"
> & {
  defaultSigningName: string;
  clientContextParams: {
    disableS3ExpressSessionAuth?: boolean | undefined | Provider<boolean | undefined>;
  };
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return Object.assign(options, {
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    forcePathStyle: options.forcePathStyle ?? false,
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3",
    clientContextParams: options.clientContextParams ?? {},
  });
};

export const commonParams = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
} as const;

export interface EndpointParameters extends __EndpointParameters {
  Bucket?: string | undefined;
  Region?: string | undefined;
  UseFIPS?: boolean | undefined;
  UseDualStack?: boolean | undefined;
  Endpoint?: string | undefined;
  ForcePathStyle?: boolean | undefined;
  Accelerate?: boolean | undefined;
  UseGlobalEndpoint?: boolean | undefined;
  UseObjectLambdaEndpoint?: boolean | undefined;
  Key?: string | undefined;
  Prefix?: string | undefined;
  CopySource?: string | undefined;
  DisableAccessPoints?: boolean | undefined;
  DisableMultiRegionAccessPoints?: boolean | undefined;
  UseArnRegion?: boolean | undefined;
  UseS3ExpressControlEndpoint?: boolean | undefined;
  DisableS3ExpressSessionAuth?: boolean | undefined;
}
