import { _UnmarshalledConfigurationSet } from "./_ConfigurationSet";
import { _UnmarshalledEventDestination } from "./_EventDestination";
import { _UnmarshalledTrackingOptions } from "./_TrackingOptions";
import { _UnmarshalledDeliveryOptions } from "./_DeliveryOptions";
import { _UnmarshalledReputationOptions } from "./_ReputationOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface DescribeConfigurationSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The configuration set object associated with the specified configuration set.</p>
   */
  ConfigurationSet?: _UnmarshalledConfigurationSet;

  /**
   * <p>A list of event destinations associated with the configuration set. </p>
   */
  EventDestinations?: Array<_UnmarshalledEventDestination>;

  /**
   * <p>The name of the custom open and click tracking domain associated with the configuration set.</p>
   */
  TrackingOptions?: _UnmarshalledTrackingOptions;

  /**
   * <p>Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).</p>
   */
  DeliveryOptions?: _UnmarshalledDeliveryOptions;

  /**
   * <p>An object that represents the reputation settings for the configuration set. </p>
   */
  ReputationOptions?: _UnmarshalledReputationOptions;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
