/**
 * <p>The domain name configuration.</p>
 */
export interface _DomainNameConfiguration {
  /**
   * <p>A domain name for the WebSocket API.</p>
   */
  ApiGatewayDomainName?: string;

  /**
   * <p>An AWS-managed certificate that will be used by the edge-optimized endpoint for
   *  this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by the edge-optimized
   *  endpoint for this domain name.</p>
   */
  CertificateName?: string;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for
   *  this domain name was uploaded.</p>
   */
  CertificateUploadDate?: Date | string | number;

  /**
   * <p>The endpoint type.</p>
   */
  EndpointType?: "REGIONAL" | "EDGE" | string;

  /**
   * <p>The Amazon Route 53 Hosted Zone ID of the endpoint.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.</p>
   */
  SecurityPolicy?: "TLS_1_0" | "TLS_1_2" | string;

  /**
   * <p>The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.</p>
   */
  DomainNameStatus?: "AVAILABLE" | "UPDATING" | string;

  /**
   * <p>An optional text message containing detailed information about status of the domain name migration.</p>
   */
  DomainNameStatusMessage?: string;
}

export interface _UnmarshalledDomainNameConfiguration
  extends _DomainNameConfiguration {
  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for
   *  this domain name was uploaded.</p>
   */
  CertificateUploadDate?: Date;
}
