import { LoadedConfigSelectors } from "@smithy/node-config-provider";
import { SelectorType } from "@smithy/util-config-provider";

/**
 * @internal
 */
export const NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME = "AWS_REQUEST_MIN_COMPRESSION_SIZE_BYTES";

/**
 * @internal
 */
export const NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME = "request_min_compression_size_bytes";

/**
 * ToDo: switch to using numberSelector from @smithy/util-config-provider once available.
 * https://github.com/smithy-lang/smithy-typescript/pull/1126
 */
const numberSelector = (obj: Record<string, string | undefined>, key: string, type: SelectorType) => {
  if (!(key in obj)) return undefined;

  const numberValue = parseInt(obj[key] as string, 10);
  if (Number.isNaN(numberValue)) {
    throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
  }

  return numberValue;
};

/**
 * @internal
 */
export const NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS: LoadedConfigSelectors<number> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) =>
    numberSelector(env, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) =>
    numberSelector(profile, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME, SelectorType.CONFIG),
  default: 10240,
};
