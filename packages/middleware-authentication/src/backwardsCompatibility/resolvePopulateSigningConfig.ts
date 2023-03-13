import { AuthenticationInputConfig } from "../configurations";
import { PopulateSigningInputConfig } from "./configurations";

/**
 * TODO(identityandauth)
 */
export const resolvePopulateSigningConfig = <T>(
  input: T & PopulateSigningInputConfig
): T & AuthenticationInputConfig => {
  const identity = input.token || input.credentials;
  // TODO(identityandauth): populate actual signing properties
  const signingProperties = {
    ...input,
  };
  return {
    ...input,
    identity,
    signingProperties,
  };
};
