import {
  _StackResourceDriftInformationSummary,
  _UnmarshalledStackResourceDriftInformationSummary
} from "./_StackResourceDriftInformationSummary";

/**
 * <p>Contains high-level information about the specified stack resource.</p>
 */
export interface _StackResourceSummary {
  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of the resource.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html"> AWS Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>
   */
  ResourceType: string;

  /**
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date | string | number;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus:
    | "CREATE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "CREATE_COMPLETE"
    | "DELETE_IN_PROGRESS"
    | "DELETE_FAILED"
    | "DELETE_COMPLETE"
    | "DELETE_SKIPPED"
    | "UPDATE_IN_PROGRESS"
    | "UPDATE_FAILED"
    | "UPDATE_COMPLETE"
    | string;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _StackResourceDriftInformationSummary;
}

export interface _UnmarshalledStackResourceSummary
  extends _StackResourceSummary {
  /**
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _UnmarshalledStackResourceDriftInformationSummary;
}
