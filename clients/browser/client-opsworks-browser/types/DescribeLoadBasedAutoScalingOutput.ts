import { _UnmarshalledLoadBasedAutoScalingConfiguration } from "./_LoadBasedAutoScalingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.</p>
 */
export interface DescribeLoadBasedAutoScalingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>LoadBasedAutoScalingConfiguration</code> objects that describe each layer's configuration.</p>
   */
  LoadBasedAutoScalingConfigurations?: Array<
    _UnmarshalledLoadBasedAutoScalingConfiguration
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
