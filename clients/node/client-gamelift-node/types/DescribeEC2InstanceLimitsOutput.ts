import { _UnmarshalledEC2InstanceLimit } from "./_EC2InstanceLimit";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeEC2InstanceLimitsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that contains the maximum number of instances for the specified instance type.</p>
   */
  EC2InstanceLimits?: Array<_UnmarshalledEC2InstanceLimit>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
