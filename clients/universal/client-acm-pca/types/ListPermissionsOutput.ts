import { _UnmarshalledPermission } from "./_Permission";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPermissionsOutput shape
 */
export interface ListPermissionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about each permission assigned by the specified private CA, including the action enabled, the policy provided, and the time of creation.</p>
   */
  Permissions?: Array<_UnmarshalledPermission>;

  /**
   * <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
