/**
 * _EncryptionConfig shape
 */
export interface _EncryptionConfig {
    /**
     * _String shape
     */
    KeyId?: string;

    /**
     * _EncryptionStatus shape
     */
    Status?: 'UPDATING'|'ACTIVE'|string;

    /**
     * _EncryptionType shape
     */
    Type?: 'NONE'|'KMS'|string;
}

export type _UnmarshalledEncryptionConfig = _EncryptionConfig;