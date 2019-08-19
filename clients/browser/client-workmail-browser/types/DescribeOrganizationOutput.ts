import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeOrganizationOutput shape
 */
export interface DescribeOrganizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of an organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The alias for an organization.</p>
   */
  Alias?: string;

  /**
   * <p>The state of an organization.</p>
   */
  State?: string;

  /**
   * <p>The identifier for the directory associated with an Amazon WorkMail organization.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The type of directory associated with the WorkMail organization.</p>
   */
  DirectoryType?: string;

  /**
   * <p>The default mail domain associated with the organization.</p>
   */
  DefaultMailDomain?: string;

  /**
   * <p>The date at which the organization became usable in the WorkMail context, in UNIX epoch time format.</p>
   */
  CompletedDate?: Date;

  /**
   * <p>(Optional) The error message indicating if unexpected behavior was encountered with regards to the organization.</p>
   */
  ErrorMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
