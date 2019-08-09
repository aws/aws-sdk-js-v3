import { _UnmarshalledSegmentsResponse } from "./_SegmentsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSegmentsOutput shape
 */
export interface GetSegmentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   */
  SegmentsResponse: _UnmarshalledSegmentsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
