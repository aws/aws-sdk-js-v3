import { _Predicate } from "./_Predicate";
import { _Action } from "./_Action";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTriggerInput shape
 */
export interface CreateTriggerInput {
  /**
   * <p>The name of the trigger.</p>
   */
  Name: string;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;

  /**
   * <p>The type of the new trigger.</p>
   */
  Type: "SCHEDULED" | "CONDITIONAL" | "ON_DEMAND" | string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p> <p>This field is required when the trigger type is SCHEDULED.</p>
   */
  Schedule?: string;

  /**
   * <p>A predicate to specify when the new trigger should fire.</p> <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
   */
  Predicate?: _Predicate;

  /**
   * <p>The actions initiated by this trigger when it fires.</p>
   */
  Actions: Array<_Action> | Iterable<_Action>;

  /**
   * <p>A description of the new trigger.</p>
   */
  Description?: string;

  /**
   * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code> triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
   */
  StartOnCreation?: boolean;

  /**
   * <p>The tags to use with this trigger. You may use tags to limit access to the trigger. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide. </p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
