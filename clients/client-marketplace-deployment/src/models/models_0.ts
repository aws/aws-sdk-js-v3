// smithy-typescript generated code
import type {
  DeliveryOptionType,
  DeploymentConfigurationJobErrorCode,
  DeploymentConfigurationJobStatus,
} from "./enums";

/**
 * @public
 */
export interface GetDeploymentConfigurationRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code> </p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The ID of the AWS Marketplace product, for example <code>prod-1234567890abc</code>.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The delivery option type of the deployment configuration.</p>
   * @public
   */
  deliveryOptionType: DeliveryOptionType | undefined;
}

/**
 * <p>Contains the deployment configuration settings for the Data as a Service delivery option, including the fulfillment URL that AWS Marketplace redirects buyers to after they subscribe.</p>
 * @public
 */
export interface DataAsAServiceConfigurationDetail {
  /**
   * <p>The HTTPS URL that AWS Marketplace redirects buyers to after they subscribe to the product. The value must be a valid URI that uses the HTTPS scheme. Maximum length: 2,048 characters.</p>
   * @public
   */
  fulfillmentUrl: string | undefined;
}

/**
 * <p>The deployment configuration. Exactly one member must be set, and it must match the delivery option type.</p>
 * @public
 */
export type DeploymentConfigurationDetail =
  | DeploymentConfigurationDetail.DataAsAServiceMember
  | DeploymentConfigurationDetail.$UnknownMember;

/**
 * @public
 */
export namespace DeploymentConfigurationDetail {
  /**
   * <p>The deployment configuration settings for the Data as a Service delivery option, including the fulfillment URL that AWS Marketplace redirects buyers to after they subscribe.</p>
   * @public
   */
  export interface DataAsAServiceMember {
    dataAsAService: DataAsAServiceConfigurationDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dataAsAService?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dataAsAService: (value: DataAsAServiceConfigurationDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetDeploymentConfigurationResponse {
  /**
   * <p>The active deployment configuration.</p>
   * @public
   */
  configuration: DeploymentConfigurationDetail | undefined;
}

/**
 * <p>The shape containing the requested deployment parameter name and secretString.</p> <note> <p>To support AWS CloudFormation dynamic references to this resource using Quick Launch, this value must match a parameter defined in the CloudFormation template provided to buyers.</p> </note>
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
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code> </p>
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
   * <p>The deployment parameter targeted to the acceptor of an agreement for which to create the AWS Secrets Manager resource.</p>
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
   * <p>The idempotency token for deployment parameters. A unique identifier for the new version.</p> <note> <p>This field is not required if you're calling using an AWS SDK. Otherwise, a <code>clientToken</code> must be provided with the request.</p> </note>
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
export interface GetDeploymentConfigurationJobRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code> </p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The ID of the AWS Marketplace product, for example <code>prod-1234567890abc</code>.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The delivery option type of the deployment configuration.</p>
   * @public
   */
  deliveryOptionType: DeliveryOptionType | undefined;

  /**
   * <p>The unique identifier of the deployment configuration job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentConfigurationJobResponse {
  /**
   * <p>The unique identifier of the deployment configuration job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The deployment configuration submitted with the job.</p>
   * @public
   */
  configuration: DeploymentConfigurationDetail | undefined;

  /**
   * <p>The status of the deployment configuration job.</p>
   * @public
   */
  status: DeploymentConfigurationJobStatus | undefined;

  /**
   * <p>The date and time when the job was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment configuration. This field is present only when the job status is <code>SUCCEEDED</code>.</p>
   * @public
   */
  configurationArn?: string | undefined;

  /**
   * <p>The date and time when the job reached the <code>SUCCEEDED</code> or <code>FAILED</code> status.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The error code that describes why the job failed. This field is present only when the job status is <code>FAILED</code>.</p>
   * @public
   */
  errorCode?: DeploymentConfigurationJobErrorCode | undefined;

  /**
   * <p>A message that describes why the job failed. This field is present only when the job status is <code>FAILED</code>.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentConfigurationJobsRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code> </p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The ID of the AWS Marketplace product, for example <code>prod-1234567890abc</code>.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The delivery option type of the deployment configuration.</p>
   * @public
   */
  deliveryOptionType: DeliveryOptionType | undefined;

  /**
   * <p>The maximum number of jobs to return in a single page. Valid values are 1 through 100. The default is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. Use the value returned in the previous response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a deployment configuration job, including its identifier, status, configuration, and creation time.</p>
 * @public
 */
export interface DeploymentConfigurationJobSummary {
  /**
   * <p>The unique identifier of the deployment configuration job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The status of the deployment configuration job.</p>
   * @public
   */
  status: DeploymentConfigurationJobStatus | undefined;

  /**
   * <p>The deployment configuration submitted with the job.</p>
   * @public
   */
  configuration: DeploymentConfigurationDetail | undefined;

  /**
   * <p>The date and time when the job was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDeploymentConfigurationJobsResponse {
  /**
   * <p>A list of deployment configuration job summaries, ordered from newest to oldest.</p>
   * @public
   */
  jobs: DeploymentConfigurationJobSummary[] | undefined;

  /**
   * <p>The token for the next page of results. This value is absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to list tags on.</p>
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
export interface StartDeploymentConfigurationJobRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code> </p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The ID of the AWS Marketplace product, for example <code>prod-1234567890abc</code>.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The delivery option type of the deployment configuration.</p>
   * @public
   */
  deliveryOptionType: DeliveryOptionType | undefined;

  /**
   * <p>The deployment configuration to publish.</p>
   * @public
   */
  configuration: DeploymentConfigurationDetail | undefined;

  /**
   * <p>A map of key-value pairs, where each pair represents a tag to apply to the deployment configuration. Only the request that creates the deployment configuration can apply tags. If the deployment configuration already exists, a request that includes one or more tags fails with a <code>ValidationException</code>. To change tags on an existing deployment configuration, use <code>TagResource</code> and <code>UntagResource</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same token and the same input, the service returns the original job instead of starting a new one. If you reuse a token with different input, the request fails with a <code>ConflictException</code>.</p> <note> <p>This field is not required if you're calling using an AWS SDK. Otherwise, a <code>clientToken</code> must be provided with the request.</p> </note>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDeploymentConfigurationJobResponse {
  /**
   * <p>The unique identifier of the deployment configuration job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The deployment configuration submitted with the job.</p>
   * @public
   */
  configuration: DeploymentConfigurationDetail | undefined;

  /**
   * <p>The status of the deployment configuration job. The value is <code>IN_PROGRESS</code>.</p>
   * @public
   */
  status: DeploymentConfigurationJobStatus | undefined;

  /**
   * <p>The date and time when the job was created.</p>
   * @public
   */
  createdAt: Date | undefined;
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
