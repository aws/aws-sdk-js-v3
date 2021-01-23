import { ProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider } from "@aws-sdk/types";

export const ENV_KEY = "AWS_ACCESS_KEY_ID";
export const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
export const ENV_SESSION = "AWS_SESSION_TOKEN";
export const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";

interface EnvVars {
  ENV_KEY: string;
  ENV_SECRET: string;
  ENV_SESSION: string;
  ENV_EXPIRATION: string;
}

const suffixes: EnvVars = {
  ENV_KEY: "_ACCESS_KEY_ID",
  ENV_SECRET: "_SECRET_ACCESS_KEY",
  ENV_SESSION: "_SESSION_TOKEN",
  ENV_EXPIRATION: "_CREDENTIAL_EXPIRATION",
};

function getEnvVarsFromPrefix(prefix: string): EnvVars {
  return Object.entries(suffixes).reduce((processedEnvVars, [key, suffix]) => {
    processedEnvVars[key as keyof EnvVars] = prefix + suffix;
    return processedEnvVars;
  }, {} as EnvVars);
}

export interface FromEnvInit {
  prefix: string;
}

/**
 * Source AWS credentials from known environment variables. If either the
 * `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not
 * set in this process, the provider will return a rejected promise.
 */
export function fromEnv(
  { prefix }: FromEnvInit = {
    prefix: "AWS",
  }
): CredentialProvider {
  return () => {
    const processedEnvVars = getEnvVarsFromPrefix(prefix);
    const accessKeyId: string | undefined = process.env[processedEnvVars.ENV_KEY];
    const secretAccessKey: string | undefined = process.env[processedEnvVars.ENV_SECRET];
    const expiry: string | undefined = process.env[processedEnvVars.ENV_EXPIRATION];
    if (accessKeyId && secretAccessKey) {
      return Promise.resolve({
        accessKeyId,
        secretAccessKey,
        sessionToken: process.env[processedEnvVars.ENV_SESSION],
        expiration: expiry ? new Date(expiry) : undefined,
      });
    }

    return Promise.reject(new ProviderError("Unable to find environment variable credentials."));
  };
}
