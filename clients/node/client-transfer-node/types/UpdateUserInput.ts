import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateUserInput shape
 */
export interface UpdateUserInput {
  /**
   * <p>The HomeDirectory parameter specifies the landing directory (folder) for a user when they log in to the server using their client. An example would be: <code>/home/<i>username</i> </code>.</p>
   */
  HomeDirectory?: string;

  /**
   * <p>Allows you to supply a scope-down policy for your user so you can use the same AWS Identity and Access Management (IAM) role across multiple users. The policy scopes down users access to portions of your Amazon S3 bucket. Variables you can use inside this policy include <code>${Transfer:UserName}</code>, <code>${Transfer:HomeDirectory}</code>, and <code>${Transfer:HomeBucket}</code>.</p>
   */
  Policy?: string;

  /**
   * <p>The IAM role that controls your user's access to your Amazon S3 bucket. The policies attached to this role will determine the level of access you want to provide your users when transferring files into and out of your Amazon S3 bucket or buckets. The IAM role should also contain a trust relationship that allows the Secure File Transfer Protocol (SFTP) server to access your resources when servicing your SFTP user's transfer requests.</p>
   */
  Role?: string;

  /**
   * <p>A system-assigned unique identifier for an SFTP server instance that the user account is assigned to.</p>
   */
  ServerId: string;

  /**
   * <p>A unique string that identifies a user and is associated with a server as specified by the ServerId. This is the string that will be used by your user when they log in to your SFTP server. This user name is a minimum of 3 and a maximum of 32 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore, and hyphen. The user name can't start with a hyphen.</p>
   */
  UserName: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
