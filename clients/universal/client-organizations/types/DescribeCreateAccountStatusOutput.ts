import { _UnmarshalledCreateAccountStatus } from "./_CreateAccountStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCreateAccountStatusOutput shape
 */
export interface DescribeCreateAccountStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains the current status of an account creation request.</p>
   */
  CreateAccountStatus?: _UnmarshalledCreateAccountStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
