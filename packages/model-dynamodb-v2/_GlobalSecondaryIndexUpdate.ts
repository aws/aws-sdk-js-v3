import {_UpdateGlobalSecondaryIndexAction, _UnmarshalledUpdateGlobalSecondaryIndexAction} from './_UpdateGlobalSecondaryIndexAction';
import {_CreateGlobalSecondaryIndexAction, _UnmarshalledCreateGlobalSecondaryIndexAction} from './_CreateGlobalSecondaryIndexAction';
import {_DeleteGlobalSecondaryIndexAction, _UnmarshalledDeleteGlobalSecondaryIndexAction} from './_DeleteGlobalSecondaryIndexAction';

/**
 * _GlobalSecondaryIndexUpdate shape
 */
export interface _GlobalSecondaryIndexUpdate {
    /**
     * _UpdateGlobalSecondaryIndexAction shape
     */
    Update?: _UpdateGlobalSecondaryIndexAction;
    
    /**
     * _CreateGlobalSecondaryIndexAction shape
     */
    Create?: _CreateGlobalSecondaryIndexAction;
    
    /**
     * _DeleteGlobalSecondaryIndexAction shape
     */
    Delete?: _DeleteGlobalSecondaryIndexAction;
}

export interface _UnmarshalledGlobalSecondaryIndexUpdate extends _GlobalSecondaryIndexUpdate {
    /**
     * _UpdateGlobalSecondaryIndexAction shape
     */
    Update?: _UnmarshalledUpdateGlobalSecondaryIndexAction;
    
    /**
     * _CreateGlobalSecondaryIndexAction shape
     */
    Create?: _UnmarshalledCreateGlobalSecondaryIndexAction;
    
    /**
     * _DeleteGlobalSecondaryIndexAction shape
     */
    Delete?: _UnmarshalledDeleteGlobalSecondaryIndexAction;
}