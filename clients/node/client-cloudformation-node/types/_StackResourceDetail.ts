import {
  _StackResourceDriftInformation,
  _UnmarshalledStackResourceDriftInformation
} from "./_StackResourceDriftInformation";

/**
 * <p>Contains detailed information about the specified stack resource.</p>
 */
export interface _StackResourceDetail {
  /**
   * <p>The name associated with the stack.</p>
   */
  StackName?: string;

  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Type of resource. ((For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html"> AWS Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>
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
   * <p>User defined description associated with the resource.</p>
   */
  Description?: string;

  /**
   * <p>The content of the <code>Metadata</code> attribute declared for the resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html">Metadata Attribute</a> in the AWS CloudFormation User Guide.</p>
   */
  Metadata?: string;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _StackResourceDriftInformation;
}

export interface _UnmarshalledStackResourceDetail extends _StackResourceDetail {
  /**
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _UnmarshalledStackResourceDriftInformation;
}
