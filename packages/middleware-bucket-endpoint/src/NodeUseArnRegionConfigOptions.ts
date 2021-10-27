import { LoadedConfigSelectors } from "@aws-sdk/node-config-provider";

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
