import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ScheduleKeyDeletionOutput shape
 */
export interface ScheduleKeyDeletionOutput {
    /**
     * <p>The unique identifier of the customer master key (CMK) for which deletion is scheduled.</p>
     */
    KeyId?: string;

    /**
     * <p>The date and time after which AWS KMS deletes the customer master key (CMK).</p>
     */
    DeletionDate?: Date;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
