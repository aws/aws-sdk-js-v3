import {_UnmarshalledTimeToLiveSpecification} from './_TimeToLiveSpecification';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * UpdateTimeToLiveOutput shape
 */
export interface UpdateTimeToLiveOutput {
    /**
     * _TimeToLiveSpecification shape
     */
    TimeToLiveSpecification?: _UnmarshalledTimeToLiveSpecification;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}