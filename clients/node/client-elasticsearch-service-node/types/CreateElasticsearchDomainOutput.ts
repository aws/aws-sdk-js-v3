import { _UnmarshalledElasticsearchDomainStatus } from "./_ElasticsearchDomainStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.</p>
 */
export interface CreateElasticsearchDomainOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the newly created Elasticsearch domain. </p>
   */
  DomainStatus?: _UnmarshalledElasticsearchDomainStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
