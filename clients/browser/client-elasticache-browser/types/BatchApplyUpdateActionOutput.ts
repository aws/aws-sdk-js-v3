import { _UnmarshalledProcessedUpdateAction } from "./_ProcessedUpdateAction";
import { _UnmarshalledUnprocessedUpdateAction } from "./_UnprocessedUpdateAction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchApplyUpdateActionOutput shape
 */
export interface BatchApplyUpdateActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Update actions that have been processed successfully</p>
   */
  ProcessedUpdateActions?: Array<_UnmarshalledProcessedUpdateAction>;

  /**
   * <p>Update actions that haven't been processed successfully</p>
   */
  UnprocessedUpdateActions?: Array<_UnmarshalledUnprocessedUpdateAction>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
