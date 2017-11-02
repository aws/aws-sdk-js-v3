/**
 * _KeySchemaElement shape
 */
export interface _KeySchemaElement {
    /**
     * _KeySchemaAttributeName shape
     */
    AttributeName: string;
    
    /**
     * _KeyType shape
     */
    KeyType: 'HASH'|'RANGE'|string;
}

export type _UnmarshalledKeySchemaElement = _KeySchemaElement;