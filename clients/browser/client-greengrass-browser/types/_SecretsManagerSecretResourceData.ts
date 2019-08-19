/**
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 */
export interface _SecretsManagerSecretResourceData {
  /**
   * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
   */
  ARN?: string;

  /**
   * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
   */
  AdditionalStagingLabelsToDownload?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSecretsManagerSecretResourceData
  extends _SecretsManagerSecretResourceData {
  /**
   * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
   */
  AdditionalStagingLabelsToDownload?: Array<string>;
}
