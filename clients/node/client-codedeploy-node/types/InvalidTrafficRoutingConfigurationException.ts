import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The configuration that specifies how traffic is routed during a deployment is invalid.</p>
 */
export interface InvalidTrafficRoutingConfigurationException
  extends __ServiceException__<
    _InvalidTrafficRoutingConfigurationExceptionDetails
  > {
  name: "InvalidTrafficRoutingConfigurationException";
}

export interface _InvalidTrafficRoutingConfigurationExceptionDetails {}
