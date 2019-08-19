import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStackDriftDetectionStatusOutput shape
 */
export interface DescribeStackDriftDetectionStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the stack.</p>
   */
  StackId: string;

  /**
   * <p>The ID of the drift detection results of this operation. </p> <p>AWS CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of reports AWS CloudFormation retains for any given stack, and for how long, may vary.</p>
   */
  StackDriftDetectionId: string;

  /**
   * <p>Status of the stack's actual configuration compared to its expected configuration. </p> <ul> <li> <p> <code>DRIFTED</code>: The stack differs from its expected template configuration. A stack is considered to have drifted if one or more of its resources have drifted.</p> </li> <li> <p> <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the stack differs from its expected template configuration.</p> </li> <li> <p> <code>IN_SYNC</code>: The stack's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>UNKNOWN</code>: This value is reserved for future use.</p> </li> </ul>
   */
  StackDriftStatus?: "DRIFTED" | "IN_SYNC" | "UNKNOWN" | "NOT_CHECKED" | string;

  /**
   * <p>The status of the stack drift detection operation.</p> <ul> <li> <p> <code>DETECTION_COMPLETE</code>: The stack drift detection operation has successfully completed for all resources in the stack that support drift detection. (Resources that do not currently support stack detection remain unchecked.)</p> <p>If you specified logical resource IDs for AWS CloudFormation to use as a filter for the stack drift detection operation, only the resources with those logical IDs are checked for drift.</p> </li> <li> <p> <code>DETECTION_FAILED</code>: The stack drift detection operation has failed for at least one resource in the stack. Results will be available for resources on which AWS CloudFormation successfully completed drift detection.</p> </li> <li> <p> <code>DETECTION_IN_PROGRESS</code>: The stack drift detection operation is currently in progress.</p> </li> </ul>
   */
  DetectionStatus:
    | "DETECTION_IN_PROGRESS"
    | "DETECTION_FAILED"
    | "DETECTION_COMPLETE"
    | string;

  /**
   * <p>The reason the stack drift detection operation has its current status.</p>
   */
  DetectionStatusReason?: string;

  /**
   * <p>Total number of stack resources that have drifted. This is NULL until the drift detection operation reaches a status of <code>DETECTION_COMPLETE</code>. This value will be 0 for stacks whose drift status is <code>IN_SYNC</code>.</p>
   */
  DriftedStackResourceCount?: number;

  /**
   * <p>Time at which the stack drift detection operation was initiated.</p>
   */
  Timestamp: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
