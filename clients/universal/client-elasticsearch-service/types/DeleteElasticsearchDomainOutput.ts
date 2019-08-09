import { _UnmarshalledElasticsearchDomainStatus } from "./_ElasticsearchDomainStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.</p>
 */
export interface DeleteElasticsearchDomainOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the Elasticsearch domain being deleted.</p>
   */
  DomainStatus?: _UnmarshalledElasticsearchDomainStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
