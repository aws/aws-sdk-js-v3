/**
 * <p>Tags for a configuration item. Tags are metadata that help you categorize IT assets.</p>
 */
export interface _ConfigurationTag {
  /**
   * <p>A type of IT asset to tag.</p>
   */
  configurationType?:
    | "SERVER"
    | "PROCESS"
    | "CONNECTION"
    | "APPLICATION"
    | string;

  /**
   * <p>The configuration ID for the item to tag. You can specify a list of keys and values.</p>
   */
  configurationId?: string;

  /**
   * <p>A type of tag on which to filter. For example, <i>serverType</i>.</p>
   */
  key?: string;

  /**
   * <p>A value on which to filter. For example <i>key = serverType</i> and <i>value = web server</i>.</p>
   */
  value?: string;

  /**
   * <p>The time the configuration tag was created in Coordinated Universal Time (UTC).</p>
   */
  timeOfCreation?: Date | string | number;
}

export interface _UnmarshalledConfigurationTag extends _ConfigurationTag {
  /**
   * <p>The time the configuration tag was created in Coordinated Universal Time (UTC).</p>
   */
  timeOfCreation?: Date;
}
