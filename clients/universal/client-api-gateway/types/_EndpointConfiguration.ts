/**
 * <p>The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. </p>
 */
export interface _EndpointConfiguration {
  /**
   * <p>A list of endpoint types of an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>). For an edge-optimized API and its custom domain name, the endpoint type is <code>"EDGE"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.</p>
   */
  types?:
    | Array<"REGIONAL" | "EDGE" | "PRIVATE" | string>
    | Iterable<"REGIONAL" | "EDGE" | "PRIVATE" | string>;
}

export interface _UnmarshalledEndpointConfiguration
  extends _EndpointConfiguration {
  /**
   * <p>A list of endpoint types of an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>). For an edge-optimized API and its custom domain name, the endpoint type is <code>"EDGE"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.</p>
   */
  types?: Array<"REGIONAL" | "EDGE" | "PRIVATE" | string>;
}
