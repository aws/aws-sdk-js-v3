import { _UnmarshalledAutoScalingPolicyDescription } from "./_AutoScalingPolicyDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAutoScalingPolicyOutput shape
 */
export interface PutAutoScalingPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>Specifies the ID of the instance group to which the scaling policy is applied.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The automatic scaling policy definition.</p>
   */
  AutoScalingPolicy?: _UnmarshalledAutoScalingPolicyDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
