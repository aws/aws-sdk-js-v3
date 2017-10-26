/**
 * <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface _AttributeValue {
    /**
     * <p>An attribute of type String. For example:</p> <p> <code>"S": "Hello"</code> </p>
     */
    S?: string;
    
    /**
     * <p>An attribute of type Number. For example:</p> <p> <code>"N": "123.45"</code> </p> <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
     */
    N?: string;
    
    /**
     * <p>An attribute of type Binary. For example:</p> <p> <code>"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"</code> </p>
     */
    B?: ArrayBuffer|ArrayBufferView|string;
    
    /**
     * <p>An attribute of type String Set. For example:</p> <p> <code>"SS": ["Giraffe", "Hippo" ,"Zebra"]</code> </p>
     */
    SS?: Array<string>|Iterable<string>;
    
    /**
     * <p>An attribute of type Number Set. For example:</p> <p> <code>"NS": ["42.2", "-19", "7.5", "3.14"]</code> </p> <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
     */
    NS?: Array<string>|Iterable<string>;
    
    /**
     * <p>An attribute of type Binary Set. For example:</p> <p> <code>"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]</code> </p>
     */
    BS?: Array<ArrayBuffer|ArrayBufferView|string>|Iterable<ArrayBuffer|ArrayBufferView|string>;
    
    /**
     * <p>An attribute of type Map. For example:</p> <p> <code>"M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}}</code> </p>
     */
    M?: {[key in string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * <p>An attribute of type List. For example:</p> <p> <code>"L": ["Cookies", "Coffee", 3.14159]</code> </p>
     */
    L?: Array<_AttributeValue>|Iterable<_AttributeValue>;
    
    /**
     * <p>An attribute of type Null. For example:</p> <p> <code>"NULL": true</code> </p>
     */
    NULL?: boolean;
    
    /**
     * <p>An attribute of type Boolean. For example:</p> <p> <code>"BOOL": true</code> </p>
     */
    BOOL?: boolean;
}

export interface _UnmarshalledAttributeValue extends _AttributeValue {
    /**
     * <p>An attribute of type Binary. For example:</p> <p> <code>"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"</code> </p>
     */
    B?: Uint8Array;
    
    /**
     * <p>An attribute of type String Set. For example:</p> <p> <code>"SS": ["Giraffe", "Hippo" ,"Zebra"]</code> </p>
     */
    SS?: Array<string>;
    
    /**
     * <p>An attribute of type Number Set. For example:</p> <p> <code>"NS": ["42.2", "-19", "7.5", "3.14"]</code> </p> <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
     */
    NS?: Array<string>;
    
    /**
     * <p>An attribute of type Binary Set. For example:</p> <p> <code>"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]</code> </p>
     */
    BS?: Array<Uint8Array>;
    
    /**
     * <p>An attribute of type Map. For example:</p> <p> <code>"M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}}</code> </p>
     */
    M?: {[key in string]: _UnmarshalledAttributeValue};
    
    /**
     * <p>An attribute of type List. For example:</p> <p> <code>"L": ["Cookies", "Coffee", 3.14159]</code> </p>
     */
    L?: Array<_UnmarshalledAttributeValue>;
}