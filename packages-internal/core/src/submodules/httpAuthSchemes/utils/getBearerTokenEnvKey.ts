/**
 * Returns an environment variable key base on signing name.
 * @param signingName - The signing name to use in the key
 * @returns The environment variable key in format AWS_BEARER_TOKEN_<SIGNING_NAME>
 */
export const getBearerTokenEnvKey = (signingName: string) =>
  `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`;
