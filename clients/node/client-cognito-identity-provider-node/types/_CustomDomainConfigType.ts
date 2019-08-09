/**
 * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.</p>
 */
export interface _CustomDomainConfigType {
  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Certificate Manager SSL certificate. You use this certificate for the subdomain of your custom domain.</p>
   */
  CertificateArn: string;
}

export type _UnmarshalledCustomDomainConfigType = _CustomDomainConfigType;
