import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserOutput shape
 */
export interface DescribeUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>User</code> object that contains information about the user account and configuration settings.</p>
   */
  User?: _UnmarshalledUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
