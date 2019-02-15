/**
 * <p>Represents an attribute for describing the key schema for the table and indexes.</p>
 */
export interface _AttributeDefinition {
    /**
     * <p>A name for the attribute.</p>
     */
    AttributeName: string;

    /**
     * <p>The data type for the attribute, where:</p> <ul> <li> <p> <code>S</code> - the attribute is of type String</p> </li> <li> <p> <code>N</code> - the attribute is of type Number</p> </li> <li> <p> <code>B</code> - the attribute is of type Binary</p> </li> </ul>
     */
    AttributeType: 'S'|'N'|'B'|string;
}

export type _UnmarshalledAttributeDefinition = _AttributeDefinition;