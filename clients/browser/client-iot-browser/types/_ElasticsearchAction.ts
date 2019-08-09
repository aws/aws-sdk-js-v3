/**
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p>
 */
export interface _ElasticsearchAction {
  /**
   * <p>The IAM role ARN that has access to Elasticsearch.</p>
   */
  roleArn: string;

  /**
   * <p>The endpoint of your Elasticsearch domain.</p>
   */
  endpoint: string;

  /**
   * <p>The Elasticsearch index where you want to store your data.</p>
   */
  index: string;

  /**
   * <p>The type of document you are storing.</p>
   */
  type: string;

  /**
   * <p>The unique identifier for the document you are storing.</p>
   */
  id: string;
}

export type _UnmarshalledElasticsearchAction = _ElasticsearchAction;
