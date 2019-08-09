import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLaunchTemplateVersionsInput shape
 */
export interface DescribeLaunchTemplateVersionsInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>One or more versions of the launch template.</p>
   */
  Versions?: Array<string> | Iterable<string>;

  /**
   * <p>The version number after which to describe launch template versions.</p>
   */
  MinVersion?: string;

  /**
   * <p>The version number up to which to describe launch template versions.</p>
   */
  MaxVersion?: string;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. This value can be between 1 and 200.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>create-time</code> - The time the launch template version was created.</p> </li> <li> <p> <code>ebs-optimized</code> - A boolean that indicates whether the instance is optimized for Amazon EBS I/O.</p> </li> <li> <p> <code>iam-instance-profile</code> - The ARN of the IAM instance profile.</p> </li> <li> <p> <code>image-id</code> - The ID of the AMI.</p> </li> <li> <p> <code>instance-type</code> - The instance type.</p> </li> <li> <p> <code>is-default-version</code> - A boolean that indicates whether the launch template version is the default version.</p> </li> <li> <p> <code>kernel-id</code> - The kernel ID.</p> </li> <li> <p> <code>ram-disk-id</code> - The RAM disk ID.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

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
