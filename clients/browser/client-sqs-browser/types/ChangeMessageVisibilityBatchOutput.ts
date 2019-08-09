import { _UnmarshalledChangeMessageVisibilityBatchResultEntry } from "./_ChangeMessageVisibilityBatchResultEntry";
import { _UnmarshalledBatchResultErrorEntry } from "./_BatchResultErrorEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.</p>
 */
export interface ChangeMessageVisibilityBatchOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> items.</p>
   */
  Successful: Array<_UnmarshalledChangeMessageVisibilityBatchResultEntry>;

  /**
   * <p>A list of <code> <a>BatchResultErrorEntry</a> </code> items.</p>
   */
  Failed: Array<_UnmarshalledBatchResultErrorEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
