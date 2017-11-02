import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DescribeLimitsOutput shape
 */
export interface DescribeLimitsOutput {
    /**
     * _PositiveLongObject shape
     */
    AccountMaxReadCapacityUnits?: number;
    
    /**
     * _PositiveLongObject shape
     */
    AccountMaxWriteCapacityUnits?: number;
    
    /**
     * _PositiveLongObject shape
     */
    TableMaxReadCapacityUnits?: number;
    
    /**
     * _PositiveLongObject shape
     */
    TableMaxWriteCapacityUnits?: number;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}