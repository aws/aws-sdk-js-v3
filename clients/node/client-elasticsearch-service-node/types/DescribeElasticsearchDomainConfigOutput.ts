import { _UnmarshalledElasticsearchDomainConfig } from "./_ElasticsearchDomainConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.</p>
 */
export interface DescribeElasticsearchDomainConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.</p>
   */
  DomainConfig: _UnmarshalledElasticsearchDomainConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
