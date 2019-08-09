import { _Action, _UnmarshalledAction } from "./_Action";
import { _Predicate, _UnmarshalledPredicate } from "./_Predicate";

/**
 * <p>A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.</p>
 */
export interface _TriggerUpdate {
  /**
   * <p>Reserved for future use.</p>
   */
  Name?: string;

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

export interface _UnmarshalledTriggerUpdate extends _TriggerUpdate {
  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Array<_UnmarshalledAction>;

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: _UnmarshalledPredicate;
}
