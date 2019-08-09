import { _UnmarshalledServiceConfiguration } from "./_ServiceConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcEndpointServiceConfigurationsOutput shape
 */
export interface DescribeVpcEndpointServiceConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about one or more services.</p>
   */
  ServiceConfigurations?: Array<_UnmarshalledServiceConfiguration>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
