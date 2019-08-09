/**
 * <p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p>
 */
export interface _RedirectActionConfig {
  /**
   * <p>The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.</p>
   */
  Protocol?: string;

  /**
   * <p>The port. You can specify a value from 1 to 65535 or #{port}.</p>
   */
  Port?: string;

  /**
   * <p>The hostname. This component is not percent-encoded. The hostname can contain #{host}.</p>
   */
  Host?: string;

  /**
   * <p>The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.</p>
   */
  Path?: string;

  /**
   * <p>The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.</p>
   */
  Query?: string;

  /**
   * <p>The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).</p>
   */
  StatusCode: "HTTP_301" | "HTTP_302" | string;
}

export type _UnmarshalledRedirectActionConfig = _RedirectActionConfig;
