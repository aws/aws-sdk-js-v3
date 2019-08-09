import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to create a custom verification email template.</p>
 */
export interface CreateCustomVerificationEmailTemplateInput {
  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.</p>
   */
  TemplateContent: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</p>
   */
  SuccessRedirectionURL: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</p>
   */
  FailureRedirectionURL: string;

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
