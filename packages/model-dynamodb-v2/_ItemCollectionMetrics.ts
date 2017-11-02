import {_AttributeValue, _UnmarshalledAttributeValue} from './_AttributeValue';

/**
 * _ItemCollectionMetrics shape
 */
export interface _ItemCollectionMetrics {
    /**
     * _ItemCollectionKeyAttributeMap shape
     */
    ItemCollectionKey?: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _ItemCollectionSizeEstimateRange shape
     */
    SizeEstimateRangeGB?: Array<number>|Iterable<number>;
}

export interface _UnmarshalledItemCollectionMetrics extends _ItemCollectionMetrics {
    /**
     * _ItemCollectionKeyAttributeMap shape
     */
    ItemCollectionKey?: {[key: string]: _UnmarshalledAttributeValue};
    
    /**
     * _ItemCollectionSizeEstimateRange shape
     */
    SizeEstimateRangeGB?: Array<number>;
}