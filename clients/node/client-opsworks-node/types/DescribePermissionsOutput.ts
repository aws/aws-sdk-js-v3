import { _UnmarshalledPermission } from "./_Permission";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribePermissions</code> request.</p>
 */
export interface DescribePermissionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Permission</code> objects that describe the stack permissions.</p> <ul> <li> <p>If the request object contains only a stack ID, the array contains a <code>Permission</code> object with permissions for each of the stack IAM ARNs.</p> </li> <li> <p>If the request object contains only an IAM ARN, the array contains a <code>Permission</code> object with permissions for each of the user's stack IDs.</p> </li> <li> <p>If the request contains a stack ID and an IAM ARN, the array contains a single <code>Permission</code> object with permissions for the specified stack and IAM ARN.</p> </li> </ul>
   */
  Permissions?: Array<_UnmarshalledPermission>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
