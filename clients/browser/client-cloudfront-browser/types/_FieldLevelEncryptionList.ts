import {
  _FieldLevelEncryptionSummary,
  _UnmarshalledFieldLevelEncryptionSummary
} from "./_FieldLevelEncryptionSummary";

/**
 * <p>List of field-level encrpytion configurations.</p>
 */
export interface _FieldLevelEncryptionList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your configurations where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of elements you want in the response body. </p>
   */
  MaxItems: number;

  /**
   * <p>The number of field-level encryption items.</p>
   */
  Quantity: number;

  /**
   * <p>An array of field-level encryption items.</p>
   */
  Items?:
    | Array<_FieldLevelEncryptionSummary>
    | Iterable<_FieldLevelEncryptionSummary>;
}

export interface _UnmarshalledFieldLevelEncryptionList
  extends _FieldLevelEncryptionList {
  /**
   * <p>An array of field-level encryption items.</p>
   */
  Items?: Array<_UnmarshalledFieldLevelEncryptionSummary>;
}
