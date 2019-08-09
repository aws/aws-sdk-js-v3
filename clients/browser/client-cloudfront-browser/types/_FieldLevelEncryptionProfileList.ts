import {
  _FieldLevelEncryptionProfileSummary,
  _UnmarshalledFieldLevelEncryptionProfileSummary
} from "./_FieldLevelEncryptionProfileSummary";

/**
 * <p>List of field-level encryption profiles.</p>
 */
export interface _FieldLevelEncryptionProfileList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your profiles where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   */
  MaxItems: number;

  /**
   * <p>The number of field-level encryption profiles.</p>
   */
  Quantity: number;

  /**
   * <p>The field-level encryption profile items.</p>
   */
  Items?:
    | Array<_FieldLevelEncryptionProfileSummary>
    | Iterable<_FieldLevelEncryptionProfileSummary>;
}

export interface _UnmarshalledFieldLevelEncryptionProfileList
  extends _FieldLevelEncryptionProfileList {
  /**
   * <p>The field-level encryption profile items.</p>
   */
  Items?: Array<_UnmarshalledFieldLevelEncryptionProfileSummary>;
}
