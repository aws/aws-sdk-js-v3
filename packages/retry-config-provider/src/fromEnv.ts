import { ProviderError } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export const fromEnv = (envVarName: string): Provider<string> => async () => {
  const envVar = process.env[envVarName];
  if (envVar) {
    return envVar;
  }

  throw new ProviderError(`No value defined for the ${envVarName} environment variable`);
};
