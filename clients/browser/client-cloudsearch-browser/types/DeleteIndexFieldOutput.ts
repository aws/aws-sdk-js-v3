import { _UnmarshalledIndexFieldStatus } from "./_IndexFieldStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code><a>DeleteIndexField</a></code> request.</p>
 */
export interface DeleteIndexFieldOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the index field being deleted.</p>
   */
  IndexField: _UnmarshalledIndexFieldStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
