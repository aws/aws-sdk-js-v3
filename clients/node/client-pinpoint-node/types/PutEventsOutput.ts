import { _UnmarshalledEventsResponse } from "./_EventsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutEventsOutput shape
 */
export interface PutEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about endpoints and the events that they're associated with.</p>
   */
  EventsResponse: _UnmarshalledEventsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
