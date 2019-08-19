import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).</p>
 */
export interface ResourceContentionFault
  extends __ServiceException__<_ResourceContentionFaultDetails> {
  name: "ResourceContentionFault";
}

export interface _ResourceContentionFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
