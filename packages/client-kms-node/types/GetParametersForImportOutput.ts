import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetParametersForImportOutput shape
 */
export interface GetParametersForImportOutput {
    /**
     * <p>The identifier of the CMK to use in a subsequent <a>ImportKeyMaterial</a> request. This is the same CMK specified in the <code>GetParametersForImport</code> request.</p>
     */
    KeyId?: string;

    /**
     * <p>The import token to send in a subsequent <a>ImportKeyMaterial</a> request.</p>
     */
    ImportToken?: Uint8Array;

    /**
     * <p>The public key to use to encrypt the key material before importing it with <a>ImportKeyMaterial</a>.</p>
     */
    PublicKey?: Uint8Array;

    /**
     * <p>The time at which the import token and public key are no longer valid. After this time, you cannot use them to make an <a>ImportKeyMaterial</a> request and you must send another <code>GetParametersForImport</code> request to get new ones.</p>
     */
    ParametersValidTo?: Date;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
