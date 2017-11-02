import {_ProvisionedThroughput, _UnmarshalledProvisionedThroughput} from './_ProvisionedThroughput';

/**
 * _UpdateGlobalSecondaryIndexAction shape
 */
export interface _UpdateGlobalSecondaryIndexAction {
    /**
     * _IndexName shape
     */
    IndexName: string;
    
    /**
     * _ProvisionedThroughput shape
     */
    ProvisionedThroughput: _ProvisionedThroughput;
}

export interface _UnmarshalledUpdateGlobalSecondaryIndexAction extends _UpdateGlobalSecondaryIndexAction {
    /**
     * _ProvisionedThroughput shape
     */
    ProvisionedThroughput: _UnmarshalledProvisionedThroughput;
}