/**
 * _AttributeDefinition shape
 */
export interface _AttributeDefinition {
    /**
     * _KeySchemaAttributeName shape
     */
    AttributeName: string;
    
    /**
     * _ScalarAttributeType shape
     */
    AttributeType: 'S'|'N'|'B'|string;
}

export type _UnmarshalledAttributeDefinition = _AttributeDefinition;