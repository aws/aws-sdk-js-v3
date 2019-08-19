import { _UnmarshalledEventDestination } from "./_EventDestination";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Information about an event destination for a configuration set.</p>
 */
export interface GetConfigurationSetEventDestinationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array that includes all of the events destinations that have been configured for the configuration set.</p>
   */
  EventDestinations?: Array<_UnmarshalledEventDestination>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
