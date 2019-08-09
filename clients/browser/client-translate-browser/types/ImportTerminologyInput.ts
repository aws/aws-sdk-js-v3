import { _TerminologyData } from "./_TerminologyData";
import { _EncryptionKey } from "./_EncryptionKey";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportTerminologyInput shape
 */
export interface ImportTerminologyInput {
  /**
   * <p>The name of the custom terminology being imported.</p>
   */
  Name: string;

  /**
   * <p>The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE merge strategy is supported. In this case, the imported terminology will overwrite an existing terminology of the same name.</p>
   */
  MergeStrategy: "OVERWRITE" | string;

  /**
   * <p>The description of the custom terminology being imported.</p>
   */
  Description?: string;

  /**
   * <p>The terminology data for the custom terminology being imported.</p>
   */
  TerminologyData: _TerminologyData;

  /**
   * <p>The encryption key for the custom terminology being imported.</p>
   */
  EncryptionKey?: _EncryptionKey;

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
