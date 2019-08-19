import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateIdentityProviderInput shape
 */
export interface UpdateIdentityProviderInput {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string;

  /**
   * <p>The identity provider name.</p>
   */
  ProviderName: string;

  /**
   * <p>The identity provider details to be updated, such as <code>MetadataURL</code> and <code>MetadataFile</code>.</p>
   */
  ProviderDetails?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The identity provider attribute mapping to be changed.</p>
   */
  AttributeMapping?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A list of identity provider identifiers.</p>
   */
  IdpIdentifiers?: Array<string> | Iterable<string>;

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
