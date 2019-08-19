import { _UnmarshalledElasticsearchDomainStatus } from "./_ElasticsearchDomainStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.</p>
 */
export interface DescribeElasticsearchDomainsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.</p>
   */
  DomainStatusList: Array<_UnmarshalledElasticsearchDomainStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
