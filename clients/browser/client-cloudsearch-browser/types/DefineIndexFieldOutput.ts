import { _UnmarshalledIndexFieldStatus } from "./_IndexFieldStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.</p>
 */
export interface DefineIndexFieldOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The value of an <code>IndexField</code> and its current status.</p>
   */
  IndexField: _UnmarshalledIndexFieldStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
