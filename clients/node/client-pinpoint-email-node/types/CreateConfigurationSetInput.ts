import { _TrackingOptions } from "./_TrackingOptions";
import { _DeliveryOptions } from "./_DeliveryOptions";
import { _ReputationOptions } from "./_ReputationOptions";
import { _SendingOptions } from "./_SendingOptions";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to create a configuration set.</p>
 */
export interface CreateConfigurationSetInput {
  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string;

  /**
   * <p>An object that defines the open and click tracking options for emails that you send using the configuration set.</p>
   */
  TrackingOptions?: _TrackingOptions;

  /**
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.</p>
   */
  DeliveryOptions?: _DeliveryOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.</p>
   */
  ReputationOptions?: _ReputationOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.</p>
   */
  SendingOptions?: _SendingOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) that you want to associate with the configuration set.</p>
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
