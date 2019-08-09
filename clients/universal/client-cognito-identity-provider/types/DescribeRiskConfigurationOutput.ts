import { _UnmarshalledRiskConfigurationType } from "./_RiskConfigurationType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRiskConfigurationOutput shape
 */
export interface DescribeRiskConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The risk configuration.</p>
   */
  RiskConfiguration: _UnmarshalledRiskConfigurationType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
