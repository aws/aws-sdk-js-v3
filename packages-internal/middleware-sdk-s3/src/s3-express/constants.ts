import type { LoadedConfigSelectors } from "@smithy/node-config-provider";
import { booleanSelector, SelectorType } from "@smithy/util-config-provider";

/**
 * @internal
 *
 * @deprecated will be replaced by backend.
 *
 * TODO(s3-express): non-beta value, backend == S3Express.
 */
export const S3_EXPRESS_BUCKET_TYPE = "Directory";

/**
 * @internal
 */
export const S3_EXPRESS_BACKEND = "S3Express";

/**
 * @internal
 */
export const S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";

/**
 * @internal
 */
export const SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";

/**
 * @internal
 */
export const SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

/**
 * @internal
 */
export const NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH";

/**
 * @internal
 */
export const NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = "s3_disable_express_session_auth";

/**
 * @internal
 */
export const NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS: LoadedConfigSelectors<boolean> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) =>
    booleanSelector(env, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) =>
    booleanSelector(profile, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME, SelectorType.CONFIG),
  default: false,
};
