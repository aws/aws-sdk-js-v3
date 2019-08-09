/**
 * <p>Structure that contains options for your certificate. Currently, you can use this only to specify whether to opt in to or out of certificate transparency logging. Some browsers require that public certificates issued for your domain be recorded in a log. Certificates that are not logged typically generate a browser error. Transparency makes it possible for you to detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>. </p>
 */
export interface _CertificateOptions {
  /**
   * <p>You can opt out of certificate transparency logging by specifying the <code>DISABLED</code> option. Opt in by specifying <code>ENABLED</code>. </p>
   */
  CertificateTransparencyLoggingPreference?: "ENABLED" | "DISABLED" | string;
}

export type _UnmarshalledCertificateOptions = _CertificateOptions;
