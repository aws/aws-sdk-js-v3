/**
 * <p>Describes an Elasticsearch data source configuration.</p>
 */
export interface _ElasticsearchDataSourceConfig {
  /**
   * <p>The endpoint.</p>
   */
  endpoint: string;

  /**
   * <p>The AWS Region.</p>
   */
  awsRegion: string;
}

export type _UnmarshalledElasticsearchDataSourceConfig = _ElasticsearchDataSourceConfig;
