import { _UnmarshalledElasticsearchDomainConfig } from "./_ElasticsearchDomainConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.</p>
 */
export interface UpdateElasticsearchDomainConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the updated Elasticsearch domain. </p>
   */
  DomainConfig: _UnmarshalledElasticsearchDomainConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
