import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Microsoft application patching is only available on EC2 instances and Advanced Instances. To patch Microsoft applications on on-premises servers and VMs, you must enable Advanced Instances. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Using the Advanced-Instances Tier</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface UnsupportedFeatureRequiredException
  extends __ServiceException__<_UnsupportedFeatureRequiredExceptionDetails> {
  name: "UnsupportedFeatureRequiredException";
}

export interface _UnsupportedFeatureRequiredExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
