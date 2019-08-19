import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAWSOrganizationsAccessStatusOutput shape
 */
export interface GetAWSOrganizationsAccessStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the portfolio share feature.</p>
   */
  AccessStatus?: "ENABLED" | "UNDER_CHANGE" | "DISABLED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
