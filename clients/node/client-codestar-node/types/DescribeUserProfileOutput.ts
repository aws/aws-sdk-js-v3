import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserProfileOutput shape
 */
export interface DescribeUserProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn: string;

  /**
   * <p>The display name shown for the user in AWS CodeStar projects. For example, this could be set to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the display name, the first character that appears after the space will be used as the second character in the user initial icon. The initial icon displays a maximum of two characters, so a display name with more than one space (for example "Mary Jane Major") would generate an initial icon using the first character and the first character after the space ("MJ", not "MM").</p>
   */
  displayName?: string;

  /**
   * <p>The email address for the user. Optional.</p>
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user. This SSH public key is associated with the user profile, and can be used in conjunction with the associated private key for access to project resources, such as Amazon EC2 instances, if a project owner grants remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The date and time when the user profile was created in AWS CodeStar, in timestamp format.</p>
   */
  createdTimestamp: Date;

  /**
   * <p>The date and time when the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
