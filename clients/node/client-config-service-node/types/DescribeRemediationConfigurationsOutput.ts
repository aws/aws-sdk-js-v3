import { _UnmarshalledRemediationConfiguration } from "./_RemediationConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRemediationConfigurationsOutput shape
 */
export interface DescribeRemediationConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a remediation configuration object.</p>
   */
  RemediationConfigurations?: Array<_UnmarshalledRemediationConfiguration>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
