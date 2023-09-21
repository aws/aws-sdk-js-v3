export * from "./fromCognitoIdentity";
export * from "./fromCognitoIdentityPool";
export {
  fromHttpForBrowser as fromHttp,
  FromHttpOptions,
  HttpProviderCredentials,
} from "@aws-sdk/credential-provider-http";
export * from "./fromTemporaryCredentials";
export * from "./fromWebToken";
