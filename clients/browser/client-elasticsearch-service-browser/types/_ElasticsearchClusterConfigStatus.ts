import {
  _ElasticsearchClusterConfig,
  _UnmarshalledElasticsearchClusterConfig
} from "./_ElasticsearchClusterConfig";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p> Specifies the configuration status for the specified Elasticsearch domain.</p>
 */
export interface _ElasticsearchClusterConfigStatus {
  /**
   * <p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>
   */
  Options: _ElasticsearchClusterConfig;

  /**
   * <p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledElasticsearchClusterConfigStatus
  extends _ElasticsearchClusterConfigStatus {
  /**
   * <p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>
   */
  Options: _UnmarshalledElasticsearchClusterConfig;

  /**
   * <p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
