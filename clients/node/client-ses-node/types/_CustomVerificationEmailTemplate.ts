/**
 * <p>Contains information about a custom verification email template.</p>
 */
export interface _CustomVerificationEmailTemplate {
  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;
}

export type _UnmarshalledCustomVerificationEmailTemplate = _CustomVerificationEmailTemplate;
