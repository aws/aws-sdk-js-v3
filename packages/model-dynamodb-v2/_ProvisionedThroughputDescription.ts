/**
 * _ProvisionedThroughputDescription shape
 */
export interface _ProvisionedThroughputDescription {
    /**
     * _Date shape
     */
    LastIncreaseDateTime?: Date|string|number;
    
    /**
     * _Date shape
     */
    LastDecreaseDateTime?: Date|string|number;
    
    /**
     * _PositiveLongObject shape
     */
    NumberOfDecreasesToday?: number;
    
    /**
     * _PositiveLongObject shape
     */
    ReadCapacityUnits?: number;
    
    /**
     * _PositiveLongObject shape
     */
    WriteCapacityUnits?: number;
}

export interface _UnmarshalledProvisionedThroughputDescription extends _ProvisionedThroughputDescription {
    /**
     * _Date shape
     */
    LastIncreaseDateTime?: Date;
    
    /**
     * _Date shape
     */
    LastDecreaseDateTime?: Date;
}