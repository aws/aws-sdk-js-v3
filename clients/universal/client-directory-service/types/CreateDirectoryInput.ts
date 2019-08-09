import { _DirectoryVpcSettings } from "./_DirectoryVpcSettings";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the inputs for the <a>CreateDirectory</a> operation. </p>
 */
export interface CreateDirectoryInput {
  /**
   * <p>The fully qualified name for the directory, such as <code>corp.example.com</code>.</p>
   */
  Name: string;

  /**
   * <p>The short name of the directory, such as <code>CORP</code>.</p>
   */
  ShortName?: string;

  /**
   * <p>The password for the directory administrator. The directory creation process creates a directory administrator account with the user name <code>Administrator</code> and this password.</p>
   */
  Password: string;

  /**
   * <p>A textual description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The size of the directory.</p>
   */
  Size: "Small" | "Large" | string;

  /**
   * <p>A <a>DirectoryVpcSettings</a> object that contains additional information for the operation.</p>
   */
  VpcSettings?: _DirectoryVpcSettings;

  /**
   * <p>The tags to be assigned to the Simple AD directory.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
