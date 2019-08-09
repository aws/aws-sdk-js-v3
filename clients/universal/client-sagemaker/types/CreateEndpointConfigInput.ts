import { _ProductionVariant } from "./_ProductionVariant";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEndpointConfigInput shape
 */
export interface CreateEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration. You specify this name in a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> request. </p>
   */
  EndpointConfigName: string;

  /**
   * <p>An list of <code>ProductionVariant</code> objects, one for each model that you want to host at this endpoint.</p>
   */
  ProductionVariants: Array<_ProductionVariant> | Iterable<_ProductionVariant>;

  /**
   * <p>A list of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i> AWS Billing and Cost Management User Guide</i>. </p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.</p>
   */
  KmsKeyId?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
