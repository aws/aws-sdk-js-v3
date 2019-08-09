/**
 * <p>Represents the DKIM attributes of a verified email address or a domain.</p>
 */
export interface _IdentityDkimAttributes {
  /**
   * <p>Is true if DKIM signing is enabled for email sent from the identity. It's false otherwise. The default value is true.</p>
   */
  DkimEnabled: boolean;

  /**
   * <p>Describes whether Amazon SES has successfully verified the DKIM DNS records (tokens) published in the domain name's DNS. (This only applies to domain identities, not email address identities.)</p>
   */
  DkimVerificationStatus:
    | "Pending"
    | "Success"
    | "Failed"
    | "TemporaryFailure"
    | "NotStarted"
    | string;

  /**
   * <p>A set of character strings that represent the domain's identity. Using these tokens, you need to create DNS CNAME records that point to DKIM public keys that are hosted by Amazon SES. Amazon Web Services eventually detects that you've updated your DNS records. This detection process might take up to 72 hours. After successful detection, Amazon SES is able to DKIM-sign email originating from that domain. (This only applies to domain identities, not email address identities.)</p> <p>For more information about creating DNS records using DKIM tokens, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
   */
  DkimTokens?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledIdentityDkimAttributes
  extends _IdentityDkimAttributes {
  /**
   * <p>A set of character strings that represent the domain's identity. Using these tokens, you need to create DNS CNAME records that point to DKIM public keys that are hosted by Amazon SES. Amazon Web Services eventually detects that you've updated your DNS records. This detection process might take up to 72 hours. After successful detection, Amazon SES is able to DKIM-sign email originating from that domain. (This only applies to domain identities, not email address identities.)</p> <p>For more information about creating DNS records using DKIM tokens, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
   */
  DkimTokens?: Array<string>;
}
