import { _UnmarshalledDeleteMessageBatchResultEntry } from "./_DeleteMessageBatchResultEntry";
import { _UnmarshalledBatchResultErrorEntry } from "./_BatchResultErrorEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.</p>
 */
export interface DeleteMessageBatchOutput {
  /**
   * <p>A list of <code> <a>DeleteMessageBatchResultEntry</a> </code> items.</p>
   */
  Successful: Array<_UnmarshalledDeleteMessageBatchResultEntry>;

  /**
   * <p>A list of <code> <a>BatchResultErrorEntry</a> </code> items.</p>
   */
  Failed: Array<_UnmarshalledBatchResultErrorEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
