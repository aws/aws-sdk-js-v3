import { _CustomDomainConfigType } from "./_CustomDomainConfigType";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The UpdateUserPoolDomain request input.</p>
 */
export interface UpdateUserPoolDomainInput {
  /**
   * <p>The domain name for the custom domain that hosts the sign-up and sign-in pages for your application. For example: <code>auth.example.com</code>. </p> <p>This string can include only lowercase letters, numbers, and hyphens. Do not use a hyphen for the first or last character. Use periods to separate subdomain names.</p>
   */
  Domain: string;

  /**
   * <p>The ID of the user pool that is associated with the custom domain that you are updating the certificate for.</p>
   */
  UserPoolId: string;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in pages for your application. Use this object to specify an SSL certificate that is managed by ACM.</p>
   */
  CustomDomainConfig: _CustomDomainConfigType;

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
