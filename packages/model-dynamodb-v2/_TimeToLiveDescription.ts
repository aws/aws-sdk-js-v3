/**
 * _TimeToLiveDescription shape
 */
export interface _TimeToLiveDescription {
    /**
     * _TimeToLiveStatus shape
     */
    TimeToLiveStatus?: 'ENABLING'|'DISABLING'|'ENABLED'|'DISABLED'|string;
    
    /**
     * _TimeToLiveAttributeName shape
     */
    AttributeName?: string;
}

export type _UnmarshalledTimeToLiveDescription = _TimeToLiveDescription;