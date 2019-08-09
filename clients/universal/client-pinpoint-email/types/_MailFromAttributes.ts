/**
 * <p>A list of attributes that are associated with a MAIL FROM domain.</p>
 */
export interface _MailFromAttributes {
  /**
   * <p>The name of a domain that an email identity uses as a custom MAIL FROM domain.</p>
   */
  MailFromDomain: string;

  /**
   * <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul>
   */
  MailFromDomainStatus:
    | "PENDING"
    | "SUCCESS"
    | "FAILED"
    | "TEMPORARY_FAILURE"
    | string;

  /**
   * <p>The action that Amazon Pinpoint to takes if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
   */
  BehaviorOnMxFailure: "USE_DEFAULT_VALUE" | "REJECT_MESSAGE" | string;
}

export type _UnmarshalledMailFromAttributes = _MailFromAttributes;
