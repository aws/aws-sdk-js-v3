import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSchemaExtensionInput shape
 */
export interface StartSchemaExtensionInput {
  /**
   * <p>The identifier of the directory for which the schema extension will be applied to.</p>
   */
  DirectoryId: string;

  /**
   * <p>If true, creates a snapshot of the directory before applying the schema extension.</p>
   */
  CreateSnapshotBeforeSchemaExtension: boolean;

  /**
   * <p>The LDIF file represented as a string. To construct the LdifContent string, precede each line as it would be formatted in an ldif file with \n. See the example request below for more details. The file size can be no larger than 1MB.</p>
   */
  LdifContent: string;

  /**
   * <p>A description of the schema extension.</p>
   */
  Description: string;

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
