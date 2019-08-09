import { _Parameter, _UnmarshalledParameter } from "./_Parameter";
import {
  _RollbackConfiguration,
  _UnmarshalledRollbackConfiguration
} from "./_RollbackConfiguration";
import { _Output, _UnmarshalledOutput } from "./_Output";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _StackDriftInformation,
  _UnmarshalledStackDriftInformation
} from "./_StackDriftInformation";

/**
 * <p>The Stack data type.</p>
 */
export interface _Stack {
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName: string;

  /**
   * <p>The unique ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>A user-defined description associated with the stack.</p>
   */
  Description?: string;

  /**
   * <p>A list of <code>Parameter</code> structures.</p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;

  /**
   * <p>The time at which the stack was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date | string | number;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</p>
   */
  LastUpdatedTime?: Date | string | number;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: _RollbackConfiguration;

  /**
   * <p>Current status of the stack.</p>
   */
  StackStatus:
    | "CREATE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "CREATE_COMPLETE"
    | "ROLLBACK_IN_PROGRESS"
    | "ROLLBACK_FAILED"
    | "ROLLBACK_COMPLETE"
    | "DELETE_IN_PROGRESS"
    | "DELETE_FAILED"
    | "DELETE_COMPLETE"
    | "UPDATE_IN_PROGRESS"
    | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"
    | "UPDATE_COMPLETE"
    | "UPDATE_ROLLBACK_IN_PROGRESS"
    | "UPDATE_ROLLBACK_FAILED"
    | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"
    | "UPDATE_ROLLBACK_COMPLETE"
    | "REVIEW_IN_PROGRESS"
    | string;

  /**
   * <p>Success/failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

  /**
   * <p>Boolean to enable or disable rollback on stack creation failures:</p> <ul> <li> <p> <code>true</code>: disable rollback</p> </li> <li> <p> <code>false</code>: enable rollback</p> </li> </ul>
   */
  DisableRollback?: boolean;

  /**
   * <p>SNS topic ARNs to which stack related events are published.</p>
   */
  NotificationARNs?: Array<string> | Iterable<string>;

  /**
   * <p>The amount of time within which stack creation should complete.</p>
   */
  TimeoutInMinutes?: number;

  /**
   * <p>The capabilities allowed in the stack.</p>
   */
  Capabilities?:
    | Array<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | string
      >
    | Iterable<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | string
      >;

  /**
   * <p>A list of output structures.</p>
   */
  Outputs?: Array<_Output> | Iterable<_Output>;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that is associated with the stack. During a stack operation, AWS CloudFormation uses this role's credentials to make calls on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * <p>A list of <code>Tag</code>s that specify information about the stack.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Whether termination protection is enabled for the stack.</p> <p> For <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the the top-level stack to which the nested stack ultimately belongs.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * <p>Information on whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _StackDriftInformation;
}

export interface _UnmarshalledStack extends _Stack {
  /**
   * <p>A list of <code>Parameter</code> structures.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>The time at which the stack was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: _UnmarshalledRollbackConfiguration;

  /**
   * <p>SNS topic ARNs to which stack related events are published.</p>
   */
  NotificationARNs?: Array<string>;

  /**
   * <p>The capabilities allowed in the stack.</p>
   */
  Capabilities?: Array<
    | "CAPABILITY_IAM"
    | "CAPABILITY_NAMED_IAM"
    | "CAPABILITY_AUTO_EXPAND"
    | string
  >;

  /**
   * <p>A list of output structures.</p>
   */
  Outputs?: Array<_UnmarshalledOutput>;

  /**
   * <p>A list of <code>Tag</code>s that specify information about the stack.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Information on whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _UnmarshalledStackDriftInformation;
}
