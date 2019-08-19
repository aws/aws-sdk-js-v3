import { _UnmarshalledElasticIp } from "./_ElasticIp";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeElasticIps</code> request.</p>
 */
export interface DescribeElasticIpsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An <code>ElasticIps</code> object that describes the specified Elastic IP addresses.</p>
   */
  ElasticIps?: Array<_UnmarshalledElasticIp>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
