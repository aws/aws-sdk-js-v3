import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAssessmentTargetInput shape
 */
export interface CreateAssessmentTargetInput {
  /**
   * <p>The user-defined name that identifies the assessment target that you want to create. The name must be unique within the AWS account.</p>
   */
  assessmentTargetName: string;

  /**
   * <p>The ARN that specifies the resource group that is used to create the assessment target. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.</p>
   */
  resourceGroupArn?: string;

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
