import { _UnmarshalledOrganizationalUnit } from "./_OrganizationalUnit";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateOrganizationalUnitOutput shape
 */
export interface UpdateOrganizationalUnitOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains the details about the specified OU, including its new name.</p>
   */
  OrganizationalUnit?: _UnmarshalledOrganizationalUnit;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
