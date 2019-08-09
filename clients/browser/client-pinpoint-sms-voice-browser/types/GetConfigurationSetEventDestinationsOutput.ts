import { _UnmarshalledEventDestination } from "./_EventDestination";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * An object that contains information about an event destination.
 */
export interface GetConfigurationSetEventDestinationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  EventDestinations?: Array<_UnmarshalledEventDestination>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
