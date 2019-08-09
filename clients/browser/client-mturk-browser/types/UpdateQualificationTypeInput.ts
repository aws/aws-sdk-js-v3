import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateQualificationTypeInput shape
 */
export interface UpdateQualificationTypeInput {
  /**
   * <p>The ID of the Qualification type to update.</p>
   */
  QualificationTypeId: string;

  /**
   * <p>The new description of the Qualification type.</p>
   */
  Description?: string;

  /**
   * <p>The new status of the Qualification type - Active | Inactive</p>
   */
  QualificationTypeStatus?: "Active" | "Inactive" | string;

  /**
   * <p>The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified.</p> <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p> <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>
   */
  Test?: string;

  /**
   * <p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p>
   */
  AnswerKey?: string;

  /**
   * <p>The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.</p>
   */
  TestDurationInSeconds?: number;

  /**
   * <p>The amount of time, in seconds, that Workers must wait after requesting a Qualification of the specified Qualification type before they can retry the Qualification request. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must dispose of the existing retry-enabled Qualification type using DisposeQualificationType and then create a new Qualification type with retries disabled using CreateQualificationType.</p>
   */
  RetryDelayInSeconds?: number;

  /**
   * <p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p> <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>
   */
  AutoGranted?: boolean;

  /**
   * <p>The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.</p>
   */
  AutoGrantedValue?: number;

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
