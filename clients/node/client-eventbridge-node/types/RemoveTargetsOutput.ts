import { _UnmarshalledRemoveTargetsResultEntry } from "./_RemoveTargetsResultEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveTargetsOutput shape
 */
export interface RemoveTargetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: Array<_UnmarshalledRemoveTargetsResultEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
