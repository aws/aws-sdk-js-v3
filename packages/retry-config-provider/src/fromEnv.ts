import { ProviderError } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";

export const fromEnv = (): Provider<string> => async () => {
  const envRegion = process.env[ENV_MAX_ATTEMPTS];
  if (envRegion) {
    return envRegion;
  }

  throw new ProviderError(
    `No value defined for the ${ENV_MAX_ATTEMPTS} environment variable`
  );
};
