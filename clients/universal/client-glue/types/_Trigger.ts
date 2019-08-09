import { _Action, _UnmarshalledAction } from "./_Action";
import { _Predicate, _UnmarshalledPredicate } from "./_Predicate";

/**
 * <p>Information about a specific trigger.</p>
 */
export interface _Trigger {
  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Id?: string;

  /**
   * <p>The type of trigger that this is.</p>
   */
  Type?: "SCHEDULED" | "CONDITIONAL" | "ON_DEMAND" | string;

  /**
   * <p>The current state of the trigger.</p>
   */
  State?:
    | "CREATING"
    | "CREATED"
    | "ACTIVATING"
    | "ACTIVATED"
    | "DEACTIVATING"
    | "DEACTIVATED"
    | "DELETING"
    | "UPDATING"
    | string;

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day at 12:15 UTC, you would specify: <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Array<_Action> | Iterable<_Action>;

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: _Predicate;
}

export interface _UnmarshalledTrigger extends _Trigger {
  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Array<_UnmarshalledAction>;

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: _UnmarshalledPredicate;
}
