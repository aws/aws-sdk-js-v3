/**
 * <p>Parameters used when defining a mitigation action that move a set of things to a thing group.</p>
 */
export interface _AddThingsToThingGroupParams {
  /**
   * <p>The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you cannot add a thing to more than one group in the same hierarchy.</p>
   */
  thingGroupNames: Array<string> | Iterable<string>;

  /**
   * <p>Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic things groups.</p>
   */
  overrideDynamicGroups?: boolean;
}

export interface _UnmarshalledAddThingsToThingGroupParams
  extends _AddThingsToThingGroupParams {
  /**
   * <p>The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you cannot add a thing to more than one group in the same hierarchy.</p>
   */
  thingGroupNames: Array<string>;
}
