/**
 * <p>A configuration property of an SDK type.</p>
 */
export interface _SdkConfigurationProperty {
  /**
   * <p>The name of a an <a>SdkType</a> configuration property.</p>
   */
  name?: string;

  /**
   * <p>The user-friendly name of an <a>SdkType</a> configuration property.</p>
   */
  friendlyName?: string;

  /**
   * <p>The description of an <a>SdkType</a> configuration property.</p>
   */
  description?: string;

  /**
   * <p>A boolean flag of an <a>SdkType</a> configuration property to indicate if the associated SDK configuration property is required (<code>true</code>) or not (<code>false</code>).</p>
   */
  required?: boolean;

  /**
   * <p>The default value of an <a>SdkType</a> configuration property.</p>
   */
  defaultValue?: string;
}

export type _UnmarshalledSdkConfigurationProperty = _SdkConfigurationProperty;
