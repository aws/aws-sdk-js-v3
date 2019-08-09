import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface DescribeConfigurationSetInput {
  /**
   * <p>The name of the configuration set to describe.</p>
   */
  ConfigurationSetName: string;

  /**
   * <p>A list of configuration set attributes to return.</p>
   */
  ConfigurationSetAttributeNames?:
    | Array<
        | "eventDestinations"
        | "trackingOptions"
        | "deliveryOptions"
        | "reputationOptions"
        | string
      >
    | Iterable<
        | "eventDestinations"
        | "trackingOptions"
        | "deliveryOptions"
        | "reputationOptions"
        | string
      >;

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
