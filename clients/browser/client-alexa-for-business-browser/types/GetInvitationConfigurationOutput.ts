import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInvitationConfigurationOutput shape
 */
export interface GetInvitationConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName?: string;

  /**
   * <p>The email ID of the organization or individual contact that the enrolled user can use. </p>
   */
  ContactEmail?: string;

  /**
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the invitation.</p>
   */
  PrivateSkillIds?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
