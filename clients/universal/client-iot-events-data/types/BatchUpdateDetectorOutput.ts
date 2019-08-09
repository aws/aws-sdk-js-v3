import { _UnmarshalledBatchUpdateDetectorErrorEntry } from "./_BatchUpdateDetectorErrorEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchUpdateDetectorOutput shape
 */
export interface BatchUpdateDetectorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of those detector updates that resulted in errors. (If an error is listed here, the specific update did not occur.)</p>
   */
  batchUpdateDetectorErrorEntries?: Array<
    _UnmarshalledBatchUpdateDetectorErrorEntry
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
