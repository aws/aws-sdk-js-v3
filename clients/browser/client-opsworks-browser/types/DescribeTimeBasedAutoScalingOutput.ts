import { _UnmarshalledTimeBasedAutoScalingConfiguration } from "./_TimeBasedAutoScalingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.</p>
 */
export interface DescribeTimeBasedAutoScalingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>TimeBasedAutoScalingConfiguration</code> objects that describe the configuration for the specified instances.</p>
   */
  TimeBasedAutoScalingConfigurations?: Array<
    _UnmarshalledTimeBasedAutoScalingConfiguration
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
