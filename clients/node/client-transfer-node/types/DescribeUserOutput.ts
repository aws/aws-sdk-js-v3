import { _UnmarshalledDescribedUser } from "./_DescribedUser";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserOutput shape
 */
export interface DescribeUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A system-assigned unique identifier for an SFTP server that has this user assigned.</p>
   */
  ServerId: string;

  /**
   * <p>An array containing the properties of the user account for the <code>ServerID</code> value that you specified.</p>
   */
  User: _UnmarshalledDescribedUser;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
