/**
 * <p>Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.</p>
 */
export interface _Redirect {
  /**
   * <p>The host name to use in the redirect request.</p>
   */
  HostName?: string;

  /**
   * <p>The HTTP redirect code to use on the response. Not required if one of the siblings is present.</p>
   */
  HttpRedirectCode?: string;

  /**
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in the original request.</p>
   */
  Protocol?: "http" | "https" | string;

  /**
   * <p>The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix <code>docs/</code> (objects in the <code>docs/</code> folder) to <code>documents/</code>, you can set a condition block with <code>KeyPrefixEquals</code> set to <code>docs/</code> and in the Redirect set <code>ReplaceKeyPrefixWith</code> to <code>/documents</code>. Not required if one of the siblings is present. Can be present only if <code>ReplaceKeyWith</code> is not provided.</p>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * <p>The specific object key to use in the redirect request. For example, redirect request to <code>error.html</code>. Not required if one of the siblings is present. Can be present only if <code>ReplaceKeyPrefixWith</code> is not provided.</p>
   */
  ReplaceKeyWith?: string;
}

export type _UnmarshalledRedirect = _Redirect;
