import { _Target } from "./_Target";
import { _TargetLocation } from "./_TargetLocation";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartAutomationExecutionInput shape
 */
export interface StartAutomationExecutionInput {
  /**
   * <p>The name of the Automation document to use for this execution.</p>
   */
  DocumentName: string;

  /**
   * <p>The version of the Automation document to use for this execution.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>A key-value map of execution parameters, which match the declared parameters in the Automation document.</p>
   */
  Parameters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>User-provided idempotency token. The token must be unique, is case insensitive, enforces the UUID format, and can't be reused.</p>
   */
  ClientToken?: string;

  /**
   * <p>The execution mode of the automation. Valid modes include the following: Auto and Interactive. The default mode is Auto.</p>
   */
  Mode?: "Auto" | "Interactive" | string;

  /**
   * <p>The name of the parameter used as the target resource for the rate-controlled execution. Required if you specify targets.</p>
   */
  TargetParameterName?: string;

  /**
   * <p>A key-value mapping to target resources. Required if you specify TargetParameterName.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>A key-value mapping of document parameters to target resources. Both Targets and TargetMaps cannot be specified together.</p>
   */
  TargetMaps?:
    | Array<
        | { [key: string]: Array<string> | Iterable<string> }
        | Iterable<[string, Array<string> | Iterable<string>]>
      >
    | Iterable<
        | { [key: string]: Array<string> | Iterable<string> }
        | Iterable<[string, Array<string> | Iterable<string>]>
      >;

  /**
   * <p>The maximum number of targets allowed to run this task in parallel. You can specify a number, such as 10, or a percentage, such as 10%. The default value is 10.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The number of errors that are allowed before the system stops running the automation on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops running the automation when the fourth error is received. If you specify 0, then the system stops running the automation on additional targets after the first error result is returned. If you run an automation on 50 resources and set max-errors to 10%, then the system stops running the automation on additional targets when the sixth error is received.</p> <p>Executions that are already running an automation when max-errors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set max-concurrency to 1 so the executions proceed one at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>A location is a combination of AWS Regions and/or AWS accounts where you want to run the Automation. Use this action to start an Automation in multiple Regions and multiple accounts. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation-multiple-accounts-and-regions.html">Executing Automations in Multiple AWS Regions and Accounts</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   */
  TargetLocations?: Array<_TargetLocation> | Iterable<_TargetLocation>;

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
