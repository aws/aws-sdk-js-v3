import { _UnmarshalledServiceActionDetail } from "./_ServiceActionDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateServiceActionOutput shape
 */
export interface UpdateServiceActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the self-service action.</p>
   */
  ServiceActionDetail?: _UnmarshalledServiceActionDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
