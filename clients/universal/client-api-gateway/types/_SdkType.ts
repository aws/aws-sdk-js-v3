import {
  _SdkConfigurationProperty,
  _UnmarshalledSdkConfigurationProperty
} from "./_SdkConfigurationProperty";

/**
 * <p>A type of SDK that API Gateway can generate.</p>
 */
export interface _SdkType {
  /**
   * <p>The identifier of an <a>SdkType</a> instance.</p>
   */
  id?: string;

  /**
   * <p>The user-friendly name of an <a>SdkType</a> instance.</p>
   */
  friendlyName?: string;

  /**
   * <p>The description of an <a>SdkType</a>.</p>
   */
  description?: string;

  /**
   * <p>A list of configuration properties of an <a>SdkType</a>.</p>
   */
  configurationProperties?:
    | Array<_SdkConfigurationProperty>
    | Iterable<_SdkConfigurationProperty>;
}

export interface _UnmarshalledSdkType extends _SdkType {
  /**
   * <p>A list of configuration properties of an <a>SdkType</a>.</p>
   */
  configurationProperties?: Array<_UnmarshalledSdkConfigurationProperty>;
}
