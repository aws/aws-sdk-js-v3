import {_Capacity, _UnmarshalledCapacity} from './_Capacity';

/**
 * _ConsumedCapacity shape
 */
export interface _ConsumedCapacity {
    /**
     * _TableName shape
     */
    TableName?: string;
    
    /**
     * _ConsumedCapacityUnits shape
     */
    CapacityUnits?: number;
    
    /**
     * _Capacity shape
     */
    Table?: _Capacity;
    
    /**
     * _SecondaryIndexesCapacityMap shape
     */
    LocalSecondaryIndexes?: {[key: string]: _Capacity}|Iterable<[string, _Capacity]>;
    
    /**
     * _SecondaryIndexesCapacityMap shape
     */
    GlobalSecondaryIndexes?: {[key: string]: _Capacity}|Iterable<[string, _Capacity]>;
}

export interface _UnmarshalledConsumedCapacity extends _ConsumedCapacity {
    /**
     * _Capacity shape
     */
    Table?: _UnmarshalledCapacity;
    
    /**
     * _SecondaryIndexesCapacityMap shape
     */
    LocalSecondaryIndexes?: {[key: string]: _UnmarshalledCapacity};
    
    /**
     * _SecondaryIndexesCapacityMap shape
     */
    GlobalSecondaryIndexes?: {[key: string]: _UnmarshalledCapacity};
}