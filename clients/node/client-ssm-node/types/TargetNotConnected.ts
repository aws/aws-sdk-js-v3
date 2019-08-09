import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified target instance for the session is not fully configured for use with Session Manager. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Getting Started with Session Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface TargetNotConnected
  extends __ServiceException__<_TargetNotConnectedDetails> {
  name: "TargetNotConnected";
}

export interface _TargetNotConnectedDetails {
  /**
   * _String shape
   */
  Message?: string;
}
