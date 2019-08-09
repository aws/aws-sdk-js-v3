import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartAssessmentRunInput shape
 */
export interface StartAssessmentRunInput {
  /**
   * <p>The ARN of the assessment template of the assessment run that you want to start.</p>
   */
  assessmentTemplateArn: string;

  /**
   * <p>You can specify the name for the assessment run. The name must be unique for the assessment template whose ARN is used to start the assessment run.</p>
   */
  assessmentRunName?: string;

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
