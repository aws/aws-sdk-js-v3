import { _StreamRecord, _UnmarshalledStreamRecord } from "./_StreamRecord";
import { _Identity, _UnmarshalledIdentity } from "./_Identity";

/**
 * <p>A description of a unique event within a stream.</p>
 */
export interface _Record {
  /**
   * <p>A globally unique identifier for the event that was recorded in this stream record.</p>
   */
  eventID?: string;

  /**
   * <p>The type of data modification that was performed on the DynamoDB table:</p> <ul> <li> <p> <code>INSERT</code> - a new item was added to the table.</p> </li> <li> <p> <code>MODIFY</code> - one or more of an existing item's attributes were modified.</p> </li> <li> <p> <code>REMOVE</code> - the item was deleted from the table</p> </li> </ul>
   */
  eventName?: "INSERT" | "MODIFY" | "REMOVE" | string;

  /**
   * <p>The version number of the stream record format. This number is updated whenever the structure of <code>Record</code> is modified.</p> <p>Client applications must not assume that <code>eventVersion</code> will remain at a particular value, as this number is subject to change at any time. In general, <code>eventVersion</code> will only increase as the low-level DynamoDB Streams API evolves.</p>
   */
  eventVersion?: string;

  /**
   * <p>The AWS service from which the stream record originated. For DynamoDB Streams, this is <code>aws:dynamodb</code>.</p>
   */
  eventSource?: string;

  /**
   * <p>The region in which the <code>GetRecords</code> request was received.</p>
   */
  awsRegion?: string;

  /**
   * <p>The main body of the stream record, containing all of the DynamoDB-specific fields.</p>
   */
  dynamodb?: _StreamRecord;

  /**
   * <p>Items that are deleted by the Time to Live process after expiration have the following fields: </p> <ul> <li> <p>Records[].userIdentity.type</p> <p>"Service"</p> </li> <li> <p>Records[].userIdentity.principalId</p> <p>"dynamodb.amazonaws.com"</p> </li> </ul>
   */
  userIdentity?: _Identity;
}

export interface _UnmarshalledRecord extends _Record {
  /**
   * <p>The main body of the stream record, containing all of the DynamoDB-specific fields.</p>
   */
  dynamodb?: _UnmarshalledStreamRecord;

  /**
   * <p>Items that are deleted by the Time to Live process after expiration have the following fields: </p> <ul> <li> <p>Records[].userIdentity.type</p> <p>"Service"</p> </li> <li> <p>Records[].userIdentity.principalId</p> <p>"dynamodb.amazonaws.com"</p> </li> </ul>
   */
  userIdentity?: _UnmarshalledIdentity;
}
