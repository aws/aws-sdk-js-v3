import { _UnmarshalledBulkEmailDestinationStatus } from "./_BulkEmailDestinationStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendBulkTemplatedEmailOutput shape
 */
export interface SendBulkTemplatedEmailOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique message identifier returned from the <code>SendBulkTemplatedEmail</code> action.</p>
   */
  Status: Array<_UnmarshalledBulkEmailDestinationStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
