import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserProfileOutput shape
 */
export interface CreateUserProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the public/private keypair the user can use to access project resources if a project owner allows the user remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The date the user profile was created, in timestamp format.</p>
   */
  createdTimestamp?: Date;

  /**
   * <p>The date the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
