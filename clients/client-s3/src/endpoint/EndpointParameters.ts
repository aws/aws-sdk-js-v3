// smithy-typescript generated code
import { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@aws-sdk/types";

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
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3",
  };
};

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
  DisableAccessPoints?: boolean;
  DisableMultiRegionAccessPoints?: boolean;
  UseArnRegion?: boolean;
}
