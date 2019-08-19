/**
 * <p>Routing configuration for a fleet alias.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
 */
export interface _RoutingStrategy {
  /**
   * <p>Type of routing strategy.</p> <p>Possible routing types include the following:</p> <ul> <li> <p> <b>SIMPLE</b> -- The alias resolves to one specific fleet. Use this type when routing to active fleets.</p> </li> <li> <p> <b>TERMINAL</b> -- The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the <a>RoutingStrategy</a> message embedded.</p> </li> </ul>
   */
  Type?: "SIMPLE" | "TERMINAL" | string;

  /**
   * <p>Unique identifier for a fleet that the alias points to.</p>
   */
  FleetId?: string;

  /**
   * <p>Message text to be used with a terminal routing strategy.</p>
   */
  Message?: string;
}

export type _UnmarshalledRoutingStrategy = _RoutingStrategy;
