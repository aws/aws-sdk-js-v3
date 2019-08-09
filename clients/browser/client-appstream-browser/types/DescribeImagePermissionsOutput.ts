import { _UnmarshalledSharedImagePermissions } from "./_SharedImagePermissions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImagePermissionsOutput shape
 */
export interface DescribeImagePermissionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the private image.</p>
   */
  Name?: string;

  /**
   * <p>The permissions for a private image that you own. </p>
   */
  SharedImagePermissionsList?: Array<_UnmarshalledSharedImagePermissions>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
