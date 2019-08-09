import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The configuration for the blue/green deployment group was provided in an invalid format. For information about deployment configuration format, see <a>CreateDeploymentConfig</a>.</p>
 */
export interface InvalidBlueGreenDeploymentConfigurationException
  extends __ServiceException__<
    _InvalidBlueGreenDeploymentConfigurationExceptionDetails
  > {
  name: "InvalidBlueGreenDeploymentConfigurationException";
}

export interface _InvalidBlueGreenDeploymentConfigurationExceptionDetails {}
