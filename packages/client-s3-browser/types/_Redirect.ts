/**
 * _Redirect shape
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
     * <p>Protocol to use (http, https) when redirecting requests. The default is the protocol that is used in the original request.</p>
     */
    Protocol?: 'http'|'https'|string;

    /**
     * <p>The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix docs/ (objects in the docs/ folder) to documents/, you can set a condition block with KeyPrefixEquals set to docs/ and in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of the siblings is present. Can be present only if ReplaceKeyWith is not provided.</p>
     */
    ReplaceKeyPrefixWith?: string;

    /**
     * <p>The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the sibling is present. Can be present only if ReplaceKeyPrefixWith is not provided.</p>
     */
    ReplaceKeyWith?: string;
}

export type _UnmarshalledRedirect = _Redirect;