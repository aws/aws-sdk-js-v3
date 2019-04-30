/**
 * _RedirectAllRequestsTo shape
 */
export interface _RedirectAllRequestsTo {
  /**
   * <p>Name of the host where requests will be redirected.</p>
   */
  HostName: string;

  /**
   * <p>Protocol to use (http, https) when redirecting requests. The default is the protocol that is used in the original request.</p>
   */
  Protocol?: "http" | "https" | string;
}

export type _UnmarshalledRedirectAllRequestsTo = _RedirectAllRequestsTo;
