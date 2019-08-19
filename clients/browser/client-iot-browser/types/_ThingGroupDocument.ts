/**
 * <p>The thing group search index document.</p>
 */
export interface _ThingGroupDocument {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group attributes.</p>
   */
  attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledThingGroupDocument extends _ThingGroupDocument {
  /**
   * <p>The thing group attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: Array<string>;
}
