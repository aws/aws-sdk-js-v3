/**
 * _Projection shape
 */
export interface _Projection {
    /**
     * _ProjectionType shape
     */
    ProjectionType?: 'ALL'|'KEYS_ONLY'|'INCLUDE'|string;
    
    /**
     * _NonKeyAttributeNameList shape
     */
    NonKeyAttributes?: Array<string>|Iterable<string>;
}

export interface _UnmarshalledProjection extends _Projection {
    /**
     * _NonKeyAttributeNameList shape
     */
    NonKeyAttributes?: Array<string>;
}