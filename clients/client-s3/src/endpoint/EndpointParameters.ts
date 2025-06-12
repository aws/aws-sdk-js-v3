// smithy-typescript generated code
import { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  region?: string | Provider<string>;
  useFipsEndpoint?: boolean | Provider<boolean>;
  useDualstackEndpoint?: boolean | Provider<boolean>;
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
  forcePathStyle?: boolean | Provider<boolean>;
  useAccelerateEndpoint?: boolean | Provider<boolean>;
  useGlobalEndpoint?: boolean | Provider<boolean>;
  disableMultiregionAccessPoints?: boolean | Provider<boolean>;
  useArnRegion?: boolean | Provider<boolean>;
  disableS3ExpressSessionAuth?: boolean | Provider<boolean>;
}

export type ClientResolvedEndpointParameters = ClientInputEndpointParameters & {
  defaultSigningName: string;
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  let forcePathStyleDefault = false;
  // Custom endpoints are incompatible with virtual-host-style, unless
  // the endpoint includes "s3." to allow for virtual-host-style testing.
  if (options.endpoint && !options.useAccelerateEndpoint && !options.endpoint.includes("s3.")) {
    forcePathStyleDefault = true;
  }
  return Object.assign(options, {
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    forcePathStyle: options.forcePathStyle ?? forcePathStyleDefault,
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3",
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
  Bucket?: string;
  Region?: string;
  UseFIPS?: boolean;
  UseDualStack?: boolean;
  Endpoint?: string;
  ForcePathStyle?: boolean;
  Accelerate?: boolean;
  UseGlobalEndpoint?: boolean;
  UseObjectLambdaEndpoint?: boolean;
  Key?: string;
  Prefix?: string;
  CopySource?: string;
  DisableAccessPoints?: boolean;
  DisableMultiRegionAccessPoints?: boolean;
  UseArnRegion?: boolean;
  UseS3ExpressControlEndpoint?: boolean;
  DisableS3ExpressSessionAuth?: boolean;
}
