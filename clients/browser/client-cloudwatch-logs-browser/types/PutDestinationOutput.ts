import { _UnmarshalledDestination } from "./_Destination";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutDestinationOutput shape
 */
export interface PutDestinationOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The destination.</p>
   */
  destination?: _UnmarshalledDestination;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
