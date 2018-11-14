import {_UnmarshalledTableDescription} from './_TableDescription';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * RestoreTableFromBackupOutput shape
 */
export interface RestoreTableFromBackupOutput {
    /**
     * <p>The description of the table created from an existing backup.</p>
     */
    TableDescription?: _UnmarshalledTableDescription;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
