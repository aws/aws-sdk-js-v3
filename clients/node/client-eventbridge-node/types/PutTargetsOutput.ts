import { _UnmarshalledPutTargetsResultEntry } from "./_PutTargetsResultEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutTargetsOutput shape
 */
export interface PutTargetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: Array<_UnmarshalledPutTargetsResultEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
