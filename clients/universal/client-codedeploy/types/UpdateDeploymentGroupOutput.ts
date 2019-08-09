import { _UnmarshalledAutoScalingGroup } from "./_AutoScalingGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of an UpdateDeploymentGroup operation.</p>
 */
export interface UpdateDeploymentGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the output contains no data, and the corresponding deployment group contained at least one Auto Scaling group, AWS CodeDeploy successfully removed all corresponding Auto Scaling lifecycle event hooks from the AWS account. If the output contains data, AWS CodeDeploy could not remove some Auto Scaling lifecycle event hooks from the AWS account.</p>
   */
  hooksNotCleanedUp?: Array<_UnmarshalledAutoScalingGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
