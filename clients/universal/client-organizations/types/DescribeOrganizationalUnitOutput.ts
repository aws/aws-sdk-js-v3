import { _UnmarshalledOrganizationalUnit } from "./_OrganizationalUnit";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeOrganizationalUnitOutput shape
 */
export interface DescribeOrganizationalUnitOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the specified OU.</p>
   */
  OrganizationalUnit?: _UnmarshalledOrganizationalUnit;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
