import {
  _GroupNameAndArn,
  _UnmarshalledGroupNameAndArn
} from "./_GroupNameAndArn";

/**
 * <p>Thing group metadata.</p>
 */
export interface _ThingGroupMetadata {
  /**
   * <p>The parent thing group name.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The root parent thing group.</p>
   */
  rootToParentThingGroups?:
    | Array<_GroupNameAndArn>
    | Iterable<_GroupNameAndArn>;

  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledThingGroupMetadata extends _ThingGroupMetadata {
  /**
   * <p>The root parent thing group.</p>
   */
  rootToParentThingGroups?: Array<_UnmarshalledGroupNameAndArn>;

  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   */
  creationDate?: Date;
}
