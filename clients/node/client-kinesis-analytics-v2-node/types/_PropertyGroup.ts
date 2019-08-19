/**
 * <p>Property key-value pairs passed into a Java-based Kinesis Data Analytics application.</p>
 */
export interface _PropertyGroup {
  /**
   * <p>Describes the key of an application execution property key-value pair.</p>
   */
  PropertyGroupId: string;

  /**
   * <p>Describes the value of an application execution property key-value pair.</p>
   */
  PropertyMap: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledPropertyGroup extends _PropertyGroup {
  /**
   * <p>Describes the value of an application execution property key-value pair.</p>
   */
  PropertyMap: { [key: string]: string };
}
