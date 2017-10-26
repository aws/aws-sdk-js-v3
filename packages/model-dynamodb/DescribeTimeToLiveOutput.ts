import {_UnmarshalledTimeToLiveDescription} from './_TimeToLiveDescription';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DescribeTimeToLiveOutput shape
 */
export interface DescribeTimeToLiveOutput {
    /**
     * <p/>
     */
    TimeToLiveDescription?: _UnmarshalledTimeToLiveDescription;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}