/**
 * _ProvisionedThroughput shape
 */
export interface _ProvisionedThroughput {
    /**
     * _PositiveLongObject shape
     */
    ReadCapacityUnits: number;
    
    /**
     * _PositiveLongObject shape
     */
    WriteCapacityUnits: number;
}

export type _UnmarshalledProvisionedThroughput = _ProvisionedThroughput;