import { _RequestLaunchTemplateData } from "./_RequestLaunchTemplateData";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLaunchTemplateVersionInput shape
 */
export interface CreateLaunchTemplateVersionInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p> <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template version on which to base the new version. The new version inherits the same launch parameters as the source version, except for parameters that you specify in LaunchTemplateData.</p>
   */
  SourceVersion?: string;

  /**
   * <p>A description for the version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: _RequestLaunchTemplateData;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
