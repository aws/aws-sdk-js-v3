import {
  _QueryArgProfileConfig,
  _UnmarshalledQueryArgProfileConfig
} from "./_QueryArgProfileConfig";
import {
  _ContentTypeProfileConfig,
  _UnmarshalledContentTypeProfileConfig
} from "./_ContentTypeProfileConfig";

/**
 * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
 */
export interface _FieldLevelEncryptionConfig {
  /**
   * <p>A unique number that ensures the request can't be replayed.</p>
   */
  CallerReference: string;

  /**
   * <p>An optional comment about the configuration.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.</p>
   */
  QueryArgProfileConfig?: _QueryArgProfileConfig;

  /**
   * <p>A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.</p>
   */
  ContentTypeProfileConfig?: _ContentTypeProfileConfig;
}

export interface _UnmarshalledFieldLevelEncryptionConfig
  extends _FieldLevelEncryptionConfig {
  /**
   * <p>A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request.</p>
   */
  QueryArgProfileConfig?: _UnmarshalledQueryArgProfileConfig;

  /**
   * <p>A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use.</p>
   */
  ContentTypeProfileConfig?: _UnmarshalledContentTypeProfileConfig;
}
