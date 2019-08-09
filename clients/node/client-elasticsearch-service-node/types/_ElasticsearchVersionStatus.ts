import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p> Status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
 */
export interface _ElasticsearchVersionStatus {
  /**
   * <p> Specifies the Elasticsearch version for the specified Elasticsearch domain.</p>
   */
  Options: string;

  /**
   * <p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledElasticsearchVersionStatus
  extends _ElasticsearchVersionStatus {
  /**
   * <p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
