/**
 * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. </p>
 */
export interface _OriginSslProtocols {
  /**
   * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an HTTPS connection with this origin. </p>
   */
  Quantity: number;

  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.</p>
   */
  Items:
    | Array<"SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2" | string>
    | Iterable<"SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2" | string>;
}

export interface _UnmarshalledOriginSslProtocols extends _OriginSslProtocols {
  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.</p>
   */
  Items: Array<"SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2" | string>;
}
