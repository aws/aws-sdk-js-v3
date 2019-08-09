/**
 * <p>Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).</p>
 */
export interface _IdentityMailFromDomainAttributes {
  /**
   * <p>The custom MAIL FROM domain that the identity is configured to use.</p>
   */
  MailFromDomain: string;

  /**
   * <p>The state that indicates whether Amazon SES has successfully read the MX record required for custom MAIL FROM domain setup. If the state is <code>Success</code>, Amazon SES uses the specified custom MAIL FROM domain when the verified identity sends an email. All other states indicate that Amazon SES takes the action described by <code>BehaviorOnMXFailure</code>.</p>
   */
  MailFromDomainStatus:
    | "Pending"
    | "Success"
    | "Failed"
    | "TemporaryFailure"
    | string;

  /**
   * <p>The action that Amazon SES takes if it cannot successfully read the required MX record when you send an email. A value of <code>UseDefaultValue</code> indicates that if Amazon SES cannot read the required MX record, it uses amazonses.com (or a subdomain of that) as the MAIL FROM domain. A value of <code>RejectMessage</code> indicates that if Amazon SES cannot read the required MX record, Amazon SES returns a <code>MailFromDomainNotVerified</code> error and does not send the email.</p> <p>The custom MAIL FROM setup states that result in this behavior are <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>.</p>
   */
  BehaviorOnMXFailure: "UseDefaultValue" | "RejectMessage" | string;
}

export type _UnmarshalledIdentityMailFromDomainAttributes = _IdentityMailFromDomainAttributes;
