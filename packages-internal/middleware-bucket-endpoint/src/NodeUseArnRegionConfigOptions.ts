import { LoadedConfigSelectors } from "@smithy/node-config-provider";
import { booleanSelector, SelectorType } from "@smithy/util-config-provider";

export const NODE_USE_ARN_REGION_ENV_NAME = "AWS_S3_USE_ARN_REGION";
export const NODE_USE_ARN_REGION_INI_NAME = "s3_use_arn_region";

/**
 * Config to load useArnRegion from environment variables and shared INI files
 *
 * @internal
 */
export const NODE_USE_ARN_REGION_CONFIG_OPTIONS: LoadedConfigSelectors<boolean | undefined> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) =>
    booleanSelector(env, NODE_USE_ARN_REGION_ENV_NAME, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, NODE_USE_ARN_REGION_INI_NAME, SelectorType.CONFIG),
  /**
   * useArnRegion has specific behavior when undefined instead of false.
   * We therefore use undefined as the default value instead of false.
   */
  default: undefined,
};
