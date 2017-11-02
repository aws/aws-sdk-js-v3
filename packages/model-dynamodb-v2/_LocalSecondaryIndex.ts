import {_KeySchemaElement, _UnmarshalledKeySchemaElement} from './_KeySchemaElement';
import {_Projection, _UnmarshalledProjection} from './_Projection';

/**
 * _LocalSecondaryIndex shape
 */
export interface _LocalSecondaryIndex {
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
}

export interface _UnmarshalledLocalSecondaryIndex extends _LocalSecondaryIndex {
    /**
     * _KeySchema shape
     */
    KeySchema: Array<_UnmarshalledKeySchemaElement>;
    
    /**
     * _Projection shape
     */
    Projection: _UnmarshalledProjection;
}