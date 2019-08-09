import {
  _LaunchTemplateAndOverridesResponse,
  _UnmarshalledLaunchTemplateAndOverridesResponse
} from "./_LaunchTemplateAndOverridesResponse";

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface _DescribeFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. Any parameters that you specify in the Overrides override the same parameters in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: _LaunchTemplateAndOverridesResponse;

  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: "spot" | "on-demand" | string;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that describes why the instance could not be launched. For more information about error messages, see ee <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorMessage?: string;
}

export interface _UnmarshalledDescribeFleetError extends _DescribeFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. Any parameters that you specify in the Overrides override the same parameters in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: _UnmarshalledLaunchTemplateAndOverridesResponse;
}
