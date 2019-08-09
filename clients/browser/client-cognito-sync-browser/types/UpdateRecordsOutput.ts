import { _UnmarshalledRecord } from "./_Record";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Returned for a successful UpdateRecordsRequest.
 */
export interface UpdateRecordsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of records that have been updated.
   */
  Records?: Array<_UnmarshalledRecord>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
