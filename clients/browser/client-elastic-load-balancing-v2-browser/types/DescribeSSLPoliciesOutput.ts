import { _UnmarshalledSslPolicy } from "./_SslPolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSSLPoliciesOutput shape
 */
export interface DescribeSSLPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the policies.</p>
   */
  SslPolicies?: Array<_UnmarshalledSslPolicy>;

  /**
   * <p>If there are additional results, this is the marker for the next set of results. Otherwise, this is null.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
