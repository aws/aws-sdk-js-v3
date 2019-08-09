/**
 * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.</p>
 */
export interface _RedirectAllRequestsTo {
  /**
   * <p>Name of the host where requests are redirected.</p>
   */
  HostName: string;

  /**
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in the original request.</p>
   */
  Protocol?: "http" | "https" | string;
}

export type _UnmarshalledRedirectAllRequestsTo = _RedirectAllRequestsTo;
