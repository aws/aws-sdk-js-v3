import { _DefinitionDocument } from "./_DefinitionDocument";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSystemTemplateInput shape
 */
export interface UpdateSystemTemplateInput {
  /**
   * <p>The ID of the system to be updated.</p> <p>The ID should be in the following format.</p> <p> <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code> </p>
   */
  id: string;

  /**
   * <p>The <code>DefinitionDocument</code> that contains the updated system definition.</p>
   */
  definition: _DefinitionDocument;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p> <p>If no value is specified, the latest version is used by default.</p>
   */
  compatibleNamespaceVersion?: number;

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
