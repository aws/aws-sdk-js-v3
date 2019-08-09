import { _PropertyGroup, _UnmarshalledPropertyGroup } from "./_PropertyGroup";

/**
 * <p>Describes execution properties for a Java-based Kinesis Data Analytics application.</p>
 */
export interface _EnvironmentProperties {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroups: Array<_PropertyGroup> | Iterable<_PropertyGroup>;
}

export interface _UnmarshalledEnvironmentProperties
  extends _EnvironmentProperties {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroups: Array<_UnmarshalledPropertyGroup>;
}
