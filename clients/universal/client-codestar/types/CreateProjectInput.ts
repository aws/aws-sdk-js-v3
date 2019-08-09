import { _Code } from "./_Code";
import { _Toolchain } from "./_Toolchain";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProjectInput shape
 */
export interface CreateProjectInput {
  /**
   * <p>The display name for the project to be created in AWS CodeStar.</p>
   */
  name: string;

  /**
   * <p>The ID of the project to be created in AWS CodeStar.</p>
   */
  id: string;

  /**
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project creation. This token can be used to repeat the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A list of the Code objects submitted with the project request. If this parameter is specified, the request must also include the toolchain parameter.</p>
   */
  sourceCode?: Array<_Code> | Iterable<_Code>;

  /**
   * <p>The name of the toolchain template file submitted with the project request. If this parameter is specified, the request must also include the sourceCode parameter.</p>
   */
  toolchain?: _Toolchain;

  /**
   * <p>The tags created for the project.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

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
