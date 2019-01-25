/**
 * <p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KB or 262,144 bytes).</p>
 */
export interface _MessageAttributeValue {
    /**
     * <p>Strings are Unicode with UTF-8 binary encoding. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">ASCII Printable Characters</a>.</p>
     */
    StringValue?: string;

    /**
     * <p>Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.</p>
     */
    BinaryValue?: ArrayBuffer|ArrayBufferView|string;

    /**
     * <p>Not implemented. Reserved for future use.</p>
     */
    StringListValues?: Array<string>|Iterable<string>;

    /**
     * <p>Not implemented. Reserved for future use.</p>
     */
    BinaryListValues?: Array<ArrayBuffer|ArrayBufferView|string>|Iterable<ArrayBuffer|ArrayBufferView|string>;

    /**
     * <p>Amazon SQS supports the following logical data types: <code>String</code>, <code>Number</code>, and <code>Binary</code>. For the <code>Number</code> data type, you must use <code>StringValue</code>.</p> <p>You can also append custom labels. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html">Amazon SQS Message Attributes</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
     */
    DataType: string;
}

export interface _UnmarshalledMessageAttributeValue extends _MessageAttributeValue {
    /**
     * <p>Binary type attributes can store any binary data, such as compressed data, encrypted data, or images.</p>
     */
    BinaryValue?: Uint8Array;

    /**
     * <p>Not implemented. Reserved for future use.</p>
     */
    StringListValues?: Array<string>;

    /**
     * <p>Not implemented. Reserved for future use.</p>
     */
    BinaryListValues?: Array<Uint8Array>;
}