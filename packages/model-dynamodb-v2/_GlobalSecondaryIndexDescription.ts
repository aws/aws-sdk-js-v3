import {_KeySchemaElement, _UnmarshalledKeySchemaElement} from './_KeySchemaElement';
import {_Projection, _UnmarshalledProjection} from './_Projection';
import {_ProvisionedThroughputDescription, _UnmarshalledProvisionedThroughputDescription} from './_ProvisionedThroughputDescription';

/**
 * _GlobalSecondaryIndexDescription shape
 */
export interface _GlobalSecondaryIndexDescription {
    /**
     * _IndexName shape
     */
    IndexName?: string;
    
    /**
     * _KeySchema shape
     */
    KeySchema?: Array<_KeySchemaElement>|Iterable<_KeySchemaElement>;
    
    /**
     * _Projection shape
     */
    Projection?: _Projection;
    
    /**
     * _IndexStatus shape
     */
    IndexStatus?: 'CREATING'|'UPDATING'|'DELETING'|'ACTIVE'|string;
    
    /**
     * _Backfilling shape
     */
    Backfilling?: boolean;
    
    /**
     * _ProvisionedThroughputDescription shape
     */
    ProvisionedThroughput?: _ProvisionedThroughputDescription;
    
    /**
     * _Long shape
     */
    IndexSizeBytes?: number;
    
    /**
     * _Long shape
     */
    ItemCount?: number;
    
    /**
     * _String shape
     */
    IndexArn?: string;
}

export interface _UnmarshalledGlobalSecondaryIndexDescription extends _GlobalSecondaryIndexDescription {
    /**
     * _KeySchema shape
     */
    KeySchema?: Array<_UnmarshalledKeySchemaElement>;
    
    /**
     * _Projection shape
     */
    Projection?: _UnmarshalledProjection;
    
    /**
     * _ProvisionedThroughputDescription shape
     */
    ProvisionedThroughput?: _UnmarshalledProvisionedThroughputDescription;
}