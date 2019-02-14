import {_Capacity, _UnmarshalledCapacity} from './_Capacity';

/**
 * <p>The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface _ConsumedCapacity {
    /**
     * <p>The name of the table that was affected by the operation.</p>
     */
    TableName?: string;

    /**
     * <p>The total number of capacity units consumed by the operation.</p>
     */
    CapacityUnits?: number;

    /**
     * <p>The amount of throughput consumed on the table affected by the operation.</p>
     */
    Table?: _Capacity;

    /**
     * <p>The amount of throughput consumed on each local index affected by the operation.</p>
     */
    LocalSecondaryIndexes?: {[key: string]: _Capacity}|Iterable<[string, _Capacity]>;

    /**
     * <p>The amount of throughput consumed on each global index affected by the operation.</p>
     */
    GlobalSecondaryIndexes?: {[key: string]: _Capacity}|Iterable<[string, _Capacity]>;
}

export interface _UnmarshalledConsumedCapacity extends _ConsumedCapacity {
    /**
     * <p>The amount of throughput consumed on the table affected by the operation.</p>
     */
    Table?: _UnmarshalledCapacity;

    /**
     * <p>The amount of throughput consumed on each local index affected by the operation.</p>
     */
    LocalSecondaryIndexes?: {[key: string]: _UnmarshalledCapacity};

    /**
     * <p>The amount of throughput consumed on each global index affected by the operation.</p>
     */
    GlobalSecondaryIndexes?: {[key: string]: _UnmarshalledCapacity};
}