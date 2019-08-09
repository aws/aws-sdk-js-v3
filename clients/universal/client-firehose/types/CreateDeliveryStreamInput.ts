import { _KinesisStreamSourceConfiguration } from "./_KinesisStreamSourceConfiguration";
import { _S3DestinationConfiguration } from "./_S3DestinationConfiguration";
import { _ExtendedS3DestinationConfiguration } from "./_ExtendedS3DestinationConfiguration";
import { _RedshiftDestinationConfiguration } from "./_RedshiftDestinationConfiguration";
import { _ElasticsearchDestinationConfiguration } from "./_ElasticsearchDestinationConfiguration";
import { _SplunkDestinationConfiguration } from "./_SplunkDestinationConfiguration";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDeliveryStreamInput shape
 */
export interface CreateDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream. This name must be unique per AWS account in the same AWS Region. If the delivery streams are in different accounts or different Regions, you can have multiple delivery streams with the same name.</p>
   */
  DeliveryStreamName: string;

  /**
   * <p>The delivery stream type. This parameter can be one of the following values:</p> <ul> <li> <p> <code>DirectPut</code>: Provider applications access the delivery stream directly.</p> </li> <li> <p> <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data stream as a source.</p> </li> </ul>
   */
  DeliveryStreamType?: "DirectPut" | "KinesisStreamAsSource" | string;

  /**
   * <p>When a Kinesis data stream is used as the source for the delivery stream, a <a>KinesisStreamSourceConfiguration</a> containing the Kinesis data stream Amazon Resource Name (ARN) and the role ARN for the source stream.</p>
   */
  KinesisStreamSourceConfiguration?: _KinesisStreamSourceConfiguration;

  /**
   * <p>[Deprecated] The destination in Amazon S3. You can specify only one destination.</p>
   */
  S3DestinationConfiguration?: _S3DestinationConfiguration;

  /**
   * <p>The destination in Amazon S3. You can specify only one destination.</p>
   */
  ExtendedS3DestinationConfiguration?: _ExtendedS3DestinationConfiguration;

  /**
   * <p>The destination in Amazon Redshift. You can specify only one destination.</p>
   */
  RedshiftDestinationConfiguration?: _RedshiftDestinationConfiguration;

  /**
   * <p>The destination in Amazon ES. You can specify only one destination.</p>
   */
  ElasticsearchDestinationConfiguration?: _ElasticsearchDestinationConfiguration;

  /**
   * <p>The destination in Splunk. You can specify only one destination.</p>
   */
  SplunkDestinationConfiguration?: _SplunkDestinationConfiguration;

  /**
   * <p>A set of tags to assign to the delivery stream. A tag is a key-value pair that you can define and assign to AWS resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the AWS Billing and Cost Management User Guide.</p> <p>You can specify up to 50 tags when creating a delivery stream.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
