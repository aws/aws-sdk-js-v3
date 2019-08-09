import { _UnmarshalledTrackingOptions } from "./_TrackingOptions";
import { _UnmarshalledDeliveryOptions } from "./_DeliveryOptions";
import { _UnmarshalledReputationOptions } from "./_ReputationOptions";
import { _UnmarshalledSendingOptions } from "./_SendingOptions";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Information about a configuration set.</p>
 */
export interface GetConfigurationSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>An object that defines the open and click tracking options for emails that you send using the configuration set.</p>
   */
  TrackingOptions?: _UnmarshalledTrackingOptions;

  /**
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.</p>
   */
  DeliveryOptions?: _UnmarshalledDeliveryOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.</p>
   */
  ReputationOptions?: _UnmarshalledReputationOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.</p>
   */
  SendingOptions?: _UnmarshalledSendingOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with the configuration set.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
