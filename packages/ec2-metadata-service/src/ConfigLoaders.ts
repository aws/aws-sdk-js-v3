import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { Endpoint } from "./Endpoint";
import { EndpointMode } from "./EndpointMode";

/**
 * @internal
 */
export const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
/**
 * @internal
 */
export const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";

/**
 * @internal
 */
export const ENDPOINT_SELECTORS: LoadedConfigSelectors<string | undefined> = {
  environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
  default: Endpoint.IPv4,
};

/**
 * @internal
 */
export const ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
/**
 * @internal
 */
export const CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";

/**
 * @internal
 */
export const ENDPOINT_MODE_SELECTORS: LoadedConfigSelectors<string | undefined> = {
  environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
  default: EndpointMode.IPv4,
};

/**
 * @internal
 */
export const AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
/**
 * @internal
 */
export const PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
/**
 * @internal
 */
export const IMDSv1_DISABLED_SELECTORS: LoadedConfigSelectors<boolean | undefined> = {
  environmentVariableSelector: (env) =>
    env[AWS_EC2_METADATA_V1_DISABLED] ? env[AWS_EC2_METADATA_V1_DISABLED] !== "false" : undefined,
  configFileSelector: (profile) =>
    profile[PROFILE_AWS_EC2_METADATA_V1_DISABLED]
      ? profile[PROFILE_AWS_EC2_METADATA_V1_DISABLED] !== "false"
      : undefined,
  default: false,
};
