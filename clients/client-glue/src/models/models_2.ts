import { Action, EventBatchingCondition, Predicate, Trigger, UserDefinedFunctionInput } from "./models_0";

/**
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 */
export interface TriggerUpdate {
  /**
   * <p>Reserved for future use.</p>
   */
  Name?: string;

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

export namespace TriggerUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerUpdate): any => ({
    ...obj,
  });
}

export interface UpdateTriggerRequest {
  /**
   * <p>The name of the trigger to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The new values with which to update the trigger.</p>
   */
  TriggerUpdate: TriggerUpdate | undefined;
}

export namespace UpdateTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTriggerRequest): any => ({
    ...obj,
  });
}

export interface UpdateTriggerResponse {
  /**
   * <p>The resulting trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace UpdateTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTriggerResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

export namespace UpdateUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionResponse {}

export namespace UpdateUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowRequest {
  /**
   * <p>Name of the workflow to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;
}

export namespace UpdateWorkflowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkflowRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowResponse {
  /**
   * <p>The name of the workflow which was specified in input.</p>
   */
  Name?: string;
}

export namespace UpdateWorkflowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkflowResponse): any => ({
    ...obj,
  });
}
