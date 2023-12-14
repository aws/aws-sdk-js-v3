/**
 * @internal
 */
export const throwAWSSDKSigningPropertyError = <T>(name: string, property: T | undefined): T | never => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
};
