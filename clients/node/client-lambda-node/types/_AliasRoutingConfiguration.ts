/**
 * <p>The alias's <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic shifting</a> configuration.</p>
 */
export interface _AliasRoutingConfiguration {
  /**
   * <p>The name of the second alias, and the percentage of traffic that is routed to it.</p>
   */
  AdditionalVersionWeights?:
    | { [key: string]: number }
    | Iterable<[string, number]>;
}

export interface _UnmarshalledAliasRoutingConfiguration
  extends _AliasRoutingConfiguration {
  /**
   * <p>The name of the second alias, and the percentage of traffic that is routed to it.</p>
   */
  AdditionalVersionWeights?: { [key: string]: number };
}
