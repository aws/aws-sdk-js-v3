import { LoadedConfigSelectors } from "@aws-sdk/node-config-provider";
import { Provider } from "@aws-sdk/types/src";

export interface BucketEndpointInputConfig {
  /**
   * Whether the provided endpoint addresses an individual bucket.
   */
  bucketEndpoint?: boolean;
  /**
   * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
   */
  forcePathStyle?: boolean;
  /**
   * Whether to use the S3 Transfer Acceleration endpoint by default
   */
  useAccelerateEndpoint?: boolean;
  /**
   * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
   */
  useDualstackEndpoint?: boolean;
  /**
   * Whether to override the request region with the region inferred from requested resource's ARN. Defaults to false
   */
  useArnRegion?: boolean | Provider<boolean>;
}

export interface BucketEndpointResolvedConfig {
  bucketEndpoint: boolean;
  forcePathStyle: boolean;
  useAccelerateEndpoint: boolean;
  useDualstackEndpoint: boolean;
  useArnRegion: Provider<boolean>;
}

export function resolveBucketEndpointConfig<T>(input: T & BucketEndpointInputConfig): T & BucketEndpointResolvedConfig {
  const {
    bucketEndpoint = false,
    forcePathStyle = false,
    useAccelerateEndpoint = false,
    useDualstackEndpoint = false,
    useArnRegion = false,
  } = input;
  return {
    ...input,
    bucketEndpoint,
    forcePathStyle,
    useAccelerateEndpoint,
    useDualstackEndpoint,
    useArnRegion: typeof useArnRegion === "boolean" ? () => Promise.resolve(useArnRegion) : useArnRegion,
  };
}

export const NODE_USE_ARN_REGION_ENV_NAME = "AWS_S3_USE_ARN_REGION";
export const NODE_USE_ARN_REGION_INI_NAME = "s3_use_arn_region";

/**
 * Config to load useArnRegion from environment variables and shared INI files
 *
 * @api private
 */
export const NODE_USE_ARN_REGION_CONFIG_OPTIONS: LoadedConfigSelectors<boolean> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) => {
    if (!Object.prototype.hasOwnProperty.call(env, NODE_USE_ARN_REGION_ENV_NAME)) return undefined;
    if (env[NODE_USE_ARN_REGION_ENV_NAME] === "true") return true;
    if (env[NODE_USE_ARN_REGION_ENV_NAME] === "false") return false;
    throw new Error(
      `Cannot load env ${NODE_USE_ARN_REGION_ENV_NAME}. Expected "true" or "false", got ${env[NODE_USE_ARN_REGION_ENV_NAME]}.`
    );
  },
  configFileSelector: (profile) => {
    if (!Object.prototype.hasOwnProperty.call(profile, NODE_USE_ARN_REGION_INI_NAME)) return undefined;
    if (profile[NODE_USE_ARN_REGION_INI_NAME] === "true") return true;
    if (profile[NODE_USE_ARN_REGION_INI_NAME] === "false") return false;
    throw new Error(
      `Cannot load shared config entry ${NODE_USE_ARN_REGION_INI_NAME}. Expected "true" or "false", got ${profile[NODE_USE_ARN_REGION_INI_NAME]}.`
    );
  },
  default: false,
};
