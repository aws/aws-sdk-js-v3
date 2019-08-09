import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>A description of a single data modification that was performed on an item in a DynamoDB table.</p>
 */
export interface _StreamRecord {
  /**
   * <p>The approximate date and time when the stream record was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  ApproximateCreationDateTime?: Date | string | number;

  /**
   * <p>The primary key attribute(s) for the DynamoDB item that was modified.</p>
   */
  Keys?:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;

  /**
   * <p>The item in the DynamoDB table as it appeared after it was modified.</p>
   */
  NewImage?:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;

  /**
   * <p>The item in the DynamoDB table as it appeared before it was modified.</p>
   */
  OldImage?:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;

  /**
   * <p>The sequence number of the stream record.</p>
   */
  SequenceNumber?: string;

  /**
   * <p>The size of the stream record, in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The type of data from the modified DynamoDB item that was captured in this stream record:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - only the key attributes of the modified item.</p> </li> <li> <p> <code>NEW_IMAGE</code> - the entire item, as it appeared after it was modified.</p> </li> <li> <p> <code>OLD_IMAGE</code> - the entire item, as it appeared before it was modified.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - both the new and the old item images of the item.</p> </li> </ul>
   */
  StreamViewType?:
    | "NEW_IMAGE"
    | "OLD_IMAGE"
    | "NEW_AND_OLD_IMAGES"
    | "KEYS_ONLY"
    | string;
}

export interface _UnmarshalledStreamRecord extends _StreamRecord {
  /**
   * <p>The approximate date and time when the stream record was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  ApproximateCreationDateTime?: Date;

  /**
   * <p>The primary key attribute(s) for the DynamoDB item that was modified.</p>
   */
  Keys?: { [key: string]: _UnmarshalledAttributeValue };

  /**
   * <p>The item in the DynamoDB table as it appeared after it was modified.</p>
   */
  NewImage?: { [key: string]: _UnmarshalledAttributeValue };

  /**
   * <p>The item in the DynamoDB table as it appeared before it was modified.</p>
   */
  OldImage?: { [key: string]: _UnmarshalledAttributeValue };
}
