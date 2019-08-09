import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>Capacity</i> isn't a valid Aurora Serverless DB cluster capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
 */
export interface InvalidDBClusterCapacityFault
  extends __ServiceException__<_InvalidDBClusterCapacityFaultDetails> {
  name: "InvalidDBClusterCapacityFault";
}

export interface _InvalidDBClusterCapacityFaultDetails {}
