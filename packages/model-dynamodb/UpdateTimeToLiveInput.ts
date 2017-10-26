import {_TimeToLiveSpecification} from './_TimeToLiveSpecification';

/**
 * <p>Represents the input of an <code>UpdateTimeToLive</code> operation.</p>
 */
export interface UpdateTimeToLiveInput {
    /**
     * <p>The name of the table to be configured.</p>
     */
    TableName: string;
    
    /**
     * <p>Represents the settings used to enable or disable Time to Live for the specified table.</p>
     */
    TimeToLiveSpecification: _TimeToLiveSpecification;
}