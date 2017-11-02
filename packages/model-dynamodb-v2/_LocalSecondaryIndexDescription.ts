import {_KeySchemaElement, _UnmarshalledKeySchemaElement} from './_KeySchemaElement';
import {_Projection, _UnmarshalledProjection} from './_Projection';

/**
 * _LocalSecondaryIndexDescription shape
 */
export interface _LocalSecondaryIndexDescription {
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

export interface _UnmarshalledLocalSecondaryIndexDescription extends _LocalSecondaryIndexDescription {
    /**
     * _KeySchema shape
     */
    KeySchema?: Array<_UnmarshalledKeySchemaElement>;
    
    /**
     * _Projection shape
     */
    Projection?: _UnmarshalledProjection;
}