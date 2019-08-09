import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSystemTemplateInput shape
 */
export interface GetSystemTemplateInput {
  /**
   * <p>The ID of the system to get. This ID must be in the user's namespace.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code> </p>
   */
  id: string;

  /**
   * <p>The number that specifies the revision of the system to get.</p>
   */
  revisionNumber?: number;

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
