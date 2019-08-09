import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
 */
export interface LimitExceededFault
  extends __ServiceException__<_LimitExceededFaultDetails> {
  name: "LimitExceededFault";
}

export interface _LimitExceededFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
