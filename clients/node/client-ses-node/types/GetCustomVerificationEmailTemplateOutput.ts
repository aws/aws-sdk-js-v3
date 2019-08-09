import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The content of the custom verification email template.</p>
 */
export interface GetCustomVerificationEmailTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
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
   * <p>The content of the custom verification email.</p>
   */
  TemplateContent?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
