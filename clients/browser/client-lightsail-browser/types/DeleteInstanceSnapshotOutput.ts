import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteInstanceSnapshotOutput shape
 */
export interface DeleteInstanceSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the results of your delete instance snapshot request.</p>
   */
  operations?: Array<_UnmarshalledOperation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
