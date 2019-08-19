import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAdminAccountOutput shape
 */
export interface GetAdminAccountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS account that is set as the AWS Firewall Manager administrator.</p>
   */
  AdminAccount?: string;

  /**
   * <p>The status of the AWS account that you set as the AWS Firewall Manager administrator.</p>
   */
  RoleStatus?:
    | "READY"
    | "CREATING"
    | "PENDING_DELETION"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
