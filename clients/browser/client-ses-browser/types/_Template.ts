/**
 * <p>The content of the email, composed of a subject line, an HTML part, and a text-only part.</p>
 */
export interface _Template {
  /**
   * <p>The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.</p>
   */
  TemplateName: string;

  /**
   * <p>The subject line of the email.</p>
   */
  SubjectPart?: string;

  /**
   * <p>The email body that will be visible to recipients whose email clients do not display HTML.</p>
   */
  TextPart?: string;

  /**
   * <p>The HTML body of the email.</p>
   */
  HtmlPart?: string;
}

export type _UnmarshalledTemplate = _Template;
