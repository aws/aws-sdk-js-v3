export * from "./fromCognitoIdentity";
export * from "./fromCognitoIdentityPool";
export { fromHttp } from "@aws-sdk/credential-provider-http";
export type { FromHttpOptions, HttpProviderCredentials } from "@aws-sdk/credential-provider-http";
export * from "./fromTemporaryCredentials";
export * from "./fromWebToken";

export const fromContainerMetadata = async () => {
  notAvailable("fromContainerMetadata");
};

export const fromEnv = async () => {
  notAvailable("fromEnv");
};

export const fromIni = async () => {
  notAvailable("fromIni");
};

export const fromInstanceMetadata = async () => {
  notAvailable("fromInstanceMetadata");
};

export const fromNodeProviderChain = async () => {
  notAvailable("fromNodeProviderChain");
};

export const fromProcess = async () => {
  notAvailable("fromProcess");
};

export const fromSSO = async () => {
  notAvailable("fromSSO");
};

export const fromTokenFile = async () => {
  notAvailable("fromTokenFile");
};

/**
 * @internal
 */
const notAvailable = (name: string): never => {
  throw new Error(
    `${name} is not available in the browser mode or similar environment.
See https://www.npmjs.com/package/@aws-sdk/credential-providers for usage.`
  );
};
