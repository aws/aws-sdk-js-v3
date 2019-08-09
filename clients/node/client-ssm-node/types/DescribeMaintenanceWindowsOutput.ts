import { _UnmarshalledMaintenanceWindowIdentity } from "./_MaintenanceWindowIdentity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowsOutput shape
 */
export interface DescribeMaintenanceWindowsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the maintenance windows.</p>
   */
  WindowIdentities?: Array<_UnmarshalledMaintenanceWindowIdentity>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
