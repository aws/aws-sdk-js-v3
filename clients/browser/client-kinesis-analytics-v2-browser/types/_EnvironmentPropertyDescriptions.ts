import { _PropertyGroup, _UnmarshalledPropertyGroup } from "./_PropertyGroup";

/**
 * <p>Describes the execution properties for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _EnvironmentPropertyDescriptions {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroupDescriptions?: Array<_PropertyGroup> | Iterable<_PropertyGroup>;
}

export interface _UnmarshalledEnvironmentPropertyDescriptions
  extends _EnvironmentPropertyDescriptions {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroupDescriptions?: Array<_UnmarshalledPropertyGroup>;
}
