import {
  _RoutingStrategy,
  _UnmarshalledRoutingStrategy
} from "./_RoutingStrategy";

/**
 * <p>Properties describing a fleet alias.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
 */
export interface _Alias {
  /**
   * <p>Unique identifier for an alias; alias IDs are unique within a region.</p>
   */
  AliasId?: string;

  /**
   * <p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Unique identifier for an alias; alias ARNs are unique across all regions.</p>
   */
  AliasArn?: string;

  /**
   * <p>Human-readable description of an alias.</p>
   */
  Description?: string;

  /**
   * <p>Alias configuration for the alias, including routing type and settings.</p>
   */
  RoutingStrategy?: _RoutingStrategy;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>Time stamp indicating when this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  LastUpdatedTime?: Date | string | number;
}

export interface _UnmarshalledAlias extends _Alias {
  /**
   * <p>Alias configuration for the alias, including routing type and settings.</p>
   */
  RoutingStrategy?: _UnmarshalledRoutingStrategy;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  LastUpdatedTime?: Date;
}
