import {_UnmarshalledEncryptionConfig} from './_EncryptionConfig';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * PutEncryptionConfigOutput shape
 */
export interface PutEncryptionConfigOutput {
    /**
     * <p>The new encryption configuration.</p>
     */
    EncryptionConfig?: _UnmarshalledEncryptionConfig;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
