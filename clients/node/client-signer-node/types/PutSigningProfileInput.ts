import { _SigningMaterial } from "./_SigningMaterial";
import { _SigningPlatformOverrides } from "./_SigningPlatformOverrides";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutSigningProfileInput shape
 */
export interface PutSigningProfileInput {
  /**
   * <p>The name of the signing profile to be created.</p>
   */
  profileName: string;

  /**
   * <p>The AWS Certificate Manager certificate that will be used to sign code with the new signing profile.</p>
   */
  signingMaterial: _SigningMaterial;

  /**
   * <p>The ID of the signing profile to be created.</p>
   */
  platformId: string;

  /**
   * <p>A subfield of <code>platform</code>. This specifies any different configuration options that you want to apply to the chosen platform (such as a different <code>hash-algorithm</code> or <code>signing-algorithm</code>).</p>
   */
  overrides?: _SigningPlatformOverrides;

  /**
   * <p>Map of key-value pairs for signing. These can include any information that you want to use during signing.</p>
   */
  signingParameters?: { [key: string]: string } | Iterable<[string, string]>;

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
