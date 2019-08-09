import { _UnmarshalledRecordDetail } from "./_RecordDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TerminateProvisionedProductOutput shape
 */
export interface TerminateProvisionedProductOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the result of this request.</p>
   */
  RecordDetail?: _UnmarshalledRecordDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
