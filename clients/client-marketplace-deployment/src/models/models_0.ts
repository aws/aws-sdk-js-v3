// smithy-typescript generated code
/**
 * <p>The shape containing the requested deployment parameter name and secretString.</p>
 *          <note>
 *             <p>To support AWS CloudFormation dynamic references to this resource using Quick Launch,
 *         this value must match a parameter defined in the CloudFormation templated provided to
 *         buyers.</p>
 *          </note>
 * @public
 */
export interface DeploymentParameterInput {
  /**
   * <p>The desired name of the deployment parameter. This is the identifier on which deployment parameters are keyed for a given buyer and product. If this name matches an existing deployment parameter, this request will update the existing resource.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The text to encrypt and store in the secret.</p>
   * @public
   */
  secretString: string | undefined;
}

/**
 * @public
 */
export interface PutDeploymentParameterRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The product for which AWS Marketplace will save secrets for the buyer’s account.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The deployment parameter targeted to the acceptor of an agreement for which to create the AWS Secret Manager resource.</p>
   * @public
   */
  deploymentParameter: DeploymentParameterInput | undefined;

  /**
   * <p>A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The date when deployment parameters expire and are scheduled for deletion.</p>
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * <p>The idempotency token for deployment parameters. A unique identifier for the new version.</p>
   *          <note>
   *             <p>This field is not required if you're calling using an AWS SDK. Otherwise, a
   *           <code>clientToken</code> must be provided with the request.</p>
   *          </note>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDeploymentParameterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to create or update.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The unique identifier of the deployment parameter.</p>
   * @public
   */
  deploymentParameterId: string | undefined;

  /**
   * <p>A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to list tags on.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of key-value pairs, where each pair represents a tag present on the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of key-value pairs, where each pair represents a tag present on the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key names of tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
