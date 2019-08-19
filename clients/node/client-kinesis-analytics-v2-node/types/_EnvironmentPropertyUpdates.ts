import { _PropertyGroup, _UnmarshalledPropertyGroup } from "./_PropertyGroup";

/**
 * <p>Describes updates to the execution property groups for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _EnvironmentPropertyUpdates {
  /**
   * <p>Describes updates to the execution property groups.</p>
   */
  PropertyGroups: Array<_PropertyGroup> | Iterable<_PropertyGroup>;
}

export interface _UnmarshalledEnvironmentPropertyUpdates
  extends _EnvironmentPropertyUpdates {
  /**
   * <p>Describes updates to the execution property groups.</p>
   */
  PropertyGroups: Array<_UnmarshalledPropertyGroup>;
}
