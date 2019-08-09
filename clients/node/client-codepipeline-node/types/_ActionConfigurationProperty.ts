/**
 * <p>Represents information about an action configuration property.</p>
 */
export interface _ActionConfigurationProperty {
  /**
   * <p>The name of the action configuration property.</p>
   */
  name: string;

  /**
   * <p>Whether the configuration property is a required value.</p>
   */
  required: boolean;

  /**
   * <p>Whether the configuration property is a key.</p>
   */
  key: boolean;

  /**
   * <p>Whether the configuration property is secret. Secrets are hidden from all calls except for <code>GetJobDetails</code>, <code>GetThirdPartyJobDetails</code>, <code>PollForJobs</code>, and <code>PollForThirdPartyJobs</code>.</p> <p>When updating a pipeline, passing * * * * * without changing any other values of the action will preserve the prior value of the secret.</p>
   */
  secret: boolean;

  /**
   * <p>Indicates that the property will be used in conjunction with <code>PollForJobs</code>. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.</p> <p>If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to additional restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.</p>
   */
  queryable?: boolean;

  /**
   * <p>The description of the action configuration property that will be displayed to users.</p>
   */
  description?: string;

  /**
   * <p>The type of the configuration property.</p>
   */
  type?: "String" | "Number" | "Boolean" | string;
}

export type _UnmarshalledActionConfigurationProperty = _ActionConfigurationProperty;
