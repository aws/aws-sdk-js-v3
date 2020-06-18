import { ProviderError } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export const ENV_REGION = "AWS_REGION";

export const fromEnv = (): Provider<string> => async () => {
  const envRegion = process.env[ENV_REGION];
  if (envRegion) {
    return envRegion;
  }

  throw new ProviderError(
    `No value defined for the ${ENV_REGION} environment variable`
  );
};
