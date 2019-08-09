/**
 * <p>The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.</p>
 */
export interface _PutItemInput {
  /**
   * <p>The table where the message data will be written.</p>
   */
  tableName: string;
}

export type _UnmarshalledPutItemInput = _PutItemInput;
