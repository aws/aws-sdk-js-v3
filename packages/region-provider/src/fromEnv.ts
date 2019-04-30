import { ProviderError } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export const ENV_REGION = "AWS_REGION";

export interface EnvConfiguration {
  environmentVariableName?: string;
}

export function fromEnv({
  environmentVariableName = ENV_REGION
}: EnvConfiguration = {}): Provider<string> {
  return async () => {
    const envRegion = process.env[environmentVariableName];
    if (envRegion) {
      return envRegion;
    }

    throw new ProviderError(
      `No value defined for the ${environmentVariableName} environment variable`
    );
  };
}
