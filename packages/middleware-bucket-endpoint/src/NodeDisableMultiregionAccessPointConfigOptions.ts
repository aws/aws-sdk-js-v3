import { LoadedConfigSelectors } from "@aws-sdk/node-config-provider";

export const NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME = "AWS_S3_DISABLE_MULTIREGION_ACCESS_POINTS";
export const NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME = "s3_disable_multiregion_access_points";

export const NODE_DISABLE_MULTIREGION_ACCESS_POINT_CONFIG_OPTIONS: LoadedConfigSelectors<boolean> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) => {
    if (!Object.prototype.hasOwnProperty.call(env, NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME)) return undefined;
    if (env[NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME] === "true") return true;
    if (env[NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME] === "false") return false;
    throw new Error(
      `Cannot load env ${NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME}. Expected "true" or "false", got ${env[NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME]}.`
    );
  },
  configFileSelector: (profile) => {
    if (!Object.prototype.hasOwnProperty.call(profile, NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME))
      return undefined;
    if (profile[NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME] === "true") return true;
    if (profile[NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME] === "false") return false;
    throw new Error(
      `Cannot load shared config entry ${NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME}. Expected "true" or "false", got ${profile[NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME]}.`
    );
  },
  default: false,
};
