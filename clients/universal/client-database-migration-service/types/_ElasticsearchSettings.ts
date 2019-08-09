/**
 * <p/>
 */
export interface _ElasticsearchSettings {
  /**
   * <p>The Amazon Resource Name (ARN) used by service to access the IAM role.</p>
   */
  ServiceAccessRoleArn: string;

  /**
   * <p>The endpoint for the Elasticsearch cluster.</p>
   */
  EndpointUri: string;

  /**
   * <p>The maximum percentage of records that can fail to be written before a full load operation stops. </p>
   */
  FullLoadErrorPercentage?: number;

  /**
   * <p>The maximum number of seconds that DMS retries failed API requests to the Elasticsearch cluster.</p>
   */
  ErrorRetryDuration?: number;
}

export type _UnmarshalledElasticsearchSettings = _ElasticsearchSettings;
