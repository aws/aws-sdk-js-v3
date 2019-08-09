/**
 * <p>Specifies an Amazon DynamoDB table to crawl.</p>
 */
export interface _DynamoDBTarget {
  /**
   * <p>The name of the DynamoDB table to crawl.</p>
   */
  Path?: string;
}

export type _UnmarshalledDynamoDBTarget = _DynamoDBTarget;
