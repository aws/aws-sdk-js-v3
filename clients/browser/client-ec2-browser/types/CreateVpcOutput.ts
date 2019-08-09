import { _UnmarshalledVpc } from "./_Vpc";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateVpcOutput shape
 */
export interface CreateVpcOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: _UnmarshalledVpc;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
