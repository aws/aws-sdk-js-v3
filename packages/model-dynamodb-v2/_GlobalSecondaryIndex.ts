import {_KeySchemaElement, _UnmarshalledKeySchemaElement} from './_KeySchemaElement';
import {_Projection, _UnmarshalledProjection} from './_Projection';
import {_ProvisionedThroughput, _UnmarshalledProvisionedThroughput} from './_ProvisionedThroughput';

/**
 * _GlobalSecondaryIndex shape
 */
export interface _GlobalSecondaryIndex {
    /**
     * _IndexName shape
     */
    IndexName: string;
    
    /**
     * _KeySchema shape
     */
    KeySchema: Array<_KeySchemaElement>|Iterable<_KeySchemaElement>;
    
    /**
     * _Projection shape
     */
    Projection: _Projection;
    
    /**
     * _ProvisionedThroughput shape
     */
    ProvisionedThroughput: _ProvisionedThroughput;
}

export interface _UnmarshalledGlobalSecondaryIndex extends _GlobalSecondaryIndex {
    /**
     * _KeySchema shape
     */
    KeySchema: Array<_UnmarshalledKeySchemaElement>;
    
    /**
     * _Projection shape
     */
    Projection: _UnmarshalledProjection;
    
    /**
     * _ProvisionedThroughput shape
     */
    ProvisionedThroughput: _UnmarshalledProvisionedThroughput;
}