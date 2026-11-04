// smithy-typescript generated code
/**
 * The shape containing the requested deployment parameter name and secretString.
 *
 * > **Note:** To support AWS CloudFormation dynamic references to this resource using Quick Launch, this value must match a parameter defined in the CloudFormation templated provided to buyers.
 *
 * @public
 */
export interface DeploymentParameterInput {
  /**
   * The desired name of the deployment parameter. This is the identifier on which deployment parameters are keyed for a given buyer and product. If this name matches an existing deployment parameter, this request will update the existing resource.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The text to encrypt and store in the secret.
   *
   * @public
   */
  secretString: string | undefined;
}

/**
 * @public
 */
export interface PutDeploymentParameterRequest {
  /**
   * The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The product for which AWS Marketplace will save secrets for the buyer’s account.
   *
   * @public
   */
  productId: string | undefined;

  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The deployment parameter targeted to the acceptor of an agreement for which to create the AWS Secret Manager resource.
   *
   * @public
   */
  deploymentParameter: DeploymentParameterInput | undefined;

  /**
   * A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The date when deployment parameters expire and are scheduled for deletion.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * The idempotency token for deployment parameters. A unique identifier for the new version.
   *
   * > **Note:** This field is not required if you're calling using an AWS SDK. Otherwise, a `clientToken` must be provided with the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDeploymentParameterResponse {
  /**
   * The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to create or update.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The unique identifier of the deployment parameter.
   *
   * @public
   */
  deploymentParameterId: string | undefined;

  /**
   * A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to list tags on.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of key-value pairs, where each pair represents a tag present on the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) associated with the resource you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of key-value pairs, where each pair represents a tag present on the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of key names of tags to be removed.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
