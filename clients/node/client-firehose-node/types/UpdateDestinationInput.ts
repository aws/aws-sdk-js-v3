import { _S3DestinationUpdate } from "./_S3DestinationUpdate";
import { _ExtendedS3DestinationUpdate } from "./_ExtendedS3DestinationUpdate";
import { _RedshiftDestinationUpdate } from "./_RedshiftDestinationUpdate";
import { _ElasticsearchDestinationUpdate } from "./_ElasticsearchDestinationUpdate";
import { _SplunkDestinationUpdate } from "./_SplunkDestinationUpdate";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDestinationInput shape
 */
export interface UpdateDestinationInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string;

  /**
   * <p>Obtain this value from the <code>VersionId</code> result of <a>DeliveryStreamDescription</a>. This value is required, and helps the service perform conditional operations. For example, if there is an interleaving update and this value is null, then the update destination fails. After the update is successful, the <code>VersionId</code> value is updated. The service then performs a merge of the old configuration with the new configuration.</p>
   */
  CurrentDeliveryStreamVersionId: string;

  /**
   * <p>The ID of the destination.</p>
   */
  DestinationId: string;

  /**
   * <p>[Deprecated] Describes an update for a destination in Amazon S3.</p>
   */
  S3DestinationUpdate?: _S3DestinationUpdate;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   */
  ExtendedS3DestinationUpdate?: _ExtendedS3DestinationUpdate;

  /**
   * <p>Describes an update for a destination in Amazon Redshift.</p>
   */
  RedshiftDestinationUpdate?: _RedshiftDestinationUpdate;

  /**
   * <p>Describes an update for a destination in Amazon ES.</p>
   */
  ElasticsearchDestinationUpdate?: _ElasticsearchDestinationUpdate;

  /**
   * <p>Describes an update for a destination in Splunk.</p>
   */
  SplunkDestinationUpdate?: _SplunkDestinationUpdate;

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
