import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and Constraints for Parameter Names</a> in the <i>AWS Systems Manager User Guide</i>. </p>
 */
export interface HierarchyLevelLimitExceededException
  extends __ServiceException__<_HierarchyLevelLimitExceededExceptionDetails> {
  name: "HierarchyLevelLimitExceededException";
}

export interface _HierarchyLevelLimitExceededExceptionDetails {
  /**
   * <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and Constraints for Parameter Names</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   */
  message?: string;
}
