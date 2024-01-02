import { LoadedConfigSelectors } from "@smithy/node-config-provider";
import { numberSelector, SelectorType } from "@smithy/util-config-provider";

/**
 * @internal
 */
export const NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME = "AWS_REQUEST_MIN_COMPRESSION_SIZE_BYTES";

/**
 * @internal
 */
export const NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME = "request_min_compression_size_bytes";

/**
 * @internal
 */
export const DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES = 10240;

/**
 * @internal
 */
export const NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS: LoadedConfigSelectors<number> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) =>
    numberSelector(env, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) =>
    numberSelector(profile, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME, SelectorType.CONFIG),
  default: DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES,
};
