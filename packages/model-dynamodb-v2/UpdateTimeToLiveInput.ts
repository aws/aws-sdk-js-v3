import {_TimeToLiveSpecification} from './_TimeToLiveSpecification';

/**
 * UpdateTimeToLiveInput shape
 */
export interface UpdateTimeToLiveInput {
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _TimeToLiveSpecification shape
     */
    TimeToLiveSpecification: _TimeToLiveSpecification;
}