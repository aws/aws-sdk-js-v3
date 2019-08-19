/**
 * <p>A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.</p>
 */
export interface _DelegationSet {
  /**
   * <p>The ID that Amazon Route 53 assigns to a reusable delegation set.</p>
   */
  Id?: string;

  /**
   * <p>The value that you specified for <code>CallerReference</code> when you created the reusable delegation set.</p>
   */
  CallerReference?: string;

  /**
   * <p>A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</p>
   */
  NameServers: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDelegationSet extends _DelegationSet {
  /**
   * <p>A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</p>
   */
  NameServers: Array<string>;
}
