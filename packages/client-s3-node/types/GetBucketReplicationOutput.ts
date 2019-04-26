import {_UnmarshalledReplicationConfiguration} from './_ReplicationConfiguration';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetBucketReplicationOutput shape
 */
export interface GetBucketReplicationOutput {
    /**
     * <p>Container for replication rules. You can add as many as 1,000 rules. Total replication configuration size can be up to 2 MB.</p>
     */
    ReplicationConfiguration?: _UnmarshalledReplicationConfiguration;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
