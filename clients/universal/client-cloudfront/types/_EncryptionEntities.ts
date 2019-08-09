import {
  _EncryptionEntity,
  _UnmarshalledEncryptionEntity
} from "./_EncryptionEntity";

/**
 * <p>Complex data type for field-level encryption profiles that includes all of the encryption entities. </p>
 */
export interface _EncryptionEntities {
  /**
   * <p>Number of field pattern items in a field-level encryption content type-profile mapping. </p>
   */
  Quantity: number;

  /**
   * <p>An array of field patterns in a field-level encryption content type-profile mapping. </p>
   */
  Items?: Array<_EncryptionEntity> | Iterable<_EncryptionEntity>;
}

export interface _UnmarshalledEncryptionEntities extends _EncryptionEntities {
  /**
   * <p>An array of field patterns in a field-level encryption content type-profile mapping. </p>
   */
  Items?: Array<_UnmarshalledEncryptionEntity>;
}
