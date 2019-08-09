import {
  _StackDriftInformationSummary,
  _UnmarshalledStackDriftInformationSummary
} from "./_StackDriftInformationSummary";

/**
 * <p>The StackSummary Data Type</p>
 */
export interface _StackSummary {
  /**
   * <p>Unique stack identifier.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName: string;

  /**
   * <p>The template description of the template used to create the stack.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The time the stack was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</p>
   */
  LastUpdatedTime?: Date | string | number;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date | string | number;

  /**
   * <p>The current status of the stack.</p>
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
   * <p>Success/Failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the the top-level stack to which the nested stack ultimately belongs.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * <p>Summarizes information on whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _StackDriftInformationSummary;
}

export interface _UnmarshalledStackSummary extends _StackSummary {
  /**
   * <p>The time the stack was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack has been updated at least once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>Summarizes information on whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: _UnmarshalledStackDriftInformationSummary;
}
