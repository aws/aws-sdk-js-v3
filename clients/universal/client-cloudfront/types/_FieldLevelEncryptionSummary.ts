import {
  _QueryArgProfileConfig,
  _UnmarshalledQueryArgProfileConfig
} from "./_QueryArgProfileConfig";
import {
  _ContentTypeProfileConfig,
  _UnmarshalledContentTypeProfileConfig
} from "./_ContentTypeProfileConfig";

/**
 * <p>A summary of a field-level encryption item.</p>
 */
export interface _FieldLevelEncryptionSummary {
  /**
   * <p>The unique ID of a field-level encryption item.</p>
   */
  Id: string;

  /**
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>An optional comment about the field-level encryption item.</p>
   */
  Comment?: string;

  /**
   * <p> A summary of a query argument-profile mapping. </p>
   */
  QueryArgProfileConfig?: _QueryArgProfileConfig;

  /**
   * <p> A summary of a content type-profile mapping. </p>
   */
  ContentTypeProfileConfig?: _ContentTypeProfileConfig;
}

export interface _UnmarshalledFieldLevelEncryptionSummary
  extends _FieldLevelEncryptionSummary {
  /**
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p> A summary of a query argument-profile mapping. </p>
   */
  QueryArgProfileConfig?: _UnmarshalledQueryArgProfileConfig;

  /**
   * <p> A summary of a content type-profile mapping. </p>
   */
  ContentTypeProfileConfig?: _UnmarshalledContentTypeProfileConfig;
}
