import { _UnmarshalledRecordDetail } from "./_RecordDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExecuteProvisionedProductServiceActionOutput shape
 */
export interface ExecuteProvisionedProductServiceActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing detailed information about the result of provisioning the product.</p>
   */
  RecordDetail?: _UnmarshalledRecordDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
