// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ARCRegionSwitchClient, ARCRegionSwitchClientConfig } from "./ARCRegionSwitchClient";
import {
  ApprovePlanExecutionStepCommand,
  ApprovePlanExecutionStepCommandInput,
  ApprovePlanExecutionStepCommandOutput,
} from "./commands/ApprovePlanExecutionStepCommand";
import {
  CancelPlanExecutionCommand,
  CancelPlanExecutionCommandInput,
  CancelPlanExecutionCommandOutput,
} from "./commands/CancelPlanExecutionCommand";
import { CreatePlanCommand, CreatePlanCommandInput, CreatePlanCommandOutput } from "./commands/CreatePlanCommand";
import { DeletePlanCommand, DeletePlanCommandInput, DeletePlanCommandOutput } from "./commands/DeletePlanCommand";
import { GetPlanCommand, GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import {
  GetPlanEvaluationStatusCommand,
  GetPlanEvaluationStatusCommandInput,
  GetPlanEvaluationStatusCommandOutput,
} from "./commands/GetPlanEvaluationStatusCommand";
import {
  GetPlanExecutionCommand,
  GetPlanExecutionCommandInput,
  GetPlanExecutionCommandOutput,
} from "./commands/GetPlanExecutionCommand";
import {
  GetPlanInRegionCommand,
  GetPlanInRegionCommandInput,
  GetPlanInRegionCommandOutput,
} from "./commands/GetPlanInRegionCommand";
import {
  ListPlanExecutionEventsCommand,
  ListPlanExecutionEventsCommandInput,
  ListPlanExecutionEventsCommandOutput,
} from "./commands/ListPlanExecutionEventsCommand";
import {
  ListPlanExecutionsCommand,
  ListPlanExecutionsCommandInput,
  ListPlanExecutionsCommandOutput,
} from "./commands/ListPlanExecutionsCommand";
import { ListPlansCommand, ListPlansCommandInput, ListPlansCommandOutput } from "./commands/ListPlansCommand";
import {
  ListPlansInRegionCommand,
  ListPlansInRegionCommandInput,
  ListPlansInRegionCommandOutput,
} from "./commands/ListPlansInRegionCommand";
import {
  ListRoute53HealthChecksCommand,
  ListRoute53HealthChecksCommandInput,
  ListRoute53HealthChecksCommandOutput,
} from "./commands/ListRoute53HealthChecksCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartPlanExecutionCommand,
  StartPlanExecutionCommandInput,
  StartPlanExecutionCommandOutput,
} from "./commands/StartPlanExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdatePlanCommand, UpdatePlanCommandInput, UpdatePlanCommandOutput } from "./commands/UpdatePlanCommand";
import {
  UpdatePlanExecutionCommand,
  UpdatePlanExecutionCommandInput,
  UpdatePlanExecutionCommandOutput,
} from "./commands/UpdatePlanExecutionCommand";
import {
  UpdatePlanExecutionStepCommand,
  UpdatePlanExecutionStepCommandInput,
  UpdatePlanExecutionStepCommandOutput,
} from "./commands/UpdatePlanExecutionStepCommand";

const commands = {
  ApprovePlanExecutionStepCommand,
  CancelPlanExecutionCommand,
  CreatePlanCommand,
  DeletePlanCommand,
  GetPlanCommand,
  GetPlanEvaluationStatusCommand,
  GetPlanExecutionCommand,
  GetPlanInRegionCommand,
  ListPlanExecutionEventsCommand,
  ListPlanExecutionsCommand,
  ListPlansCommand,
  ListPlansInRegionCommand,
  ListRoute53HealthChecksCommand,
  ListTagsForResourceCommand,
  StartPlanExecutionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePlanCommand,
  UpdatePlanExecutionCommand,
  UpdatePlanExecutionStepCommand,
};

export interface ARCRegionSwitch {
  /**
   * @see {@link ApprovePlanExecutionStepCommand}
   */
  approvePlanExecutionStep(
    args: ApprovePlanExecutionStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApprovePlanExecutionStepCommandOutput>;
  approvePlanExecutionStep(
    args: ApprovePlanExecutionStepCommandInput,
    cb: (err: any, data?: ApprovePlanExecutionStepCommandOutput) => void
  ): void;
  approvePlanExecutionStep(
    args: ApprovePlanExecutionStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApprovePlanExecutionStepCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelPlanExecutionCommand}
   */
  cancelPlanExecution(
    args: CancelPlanExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelPlanExecutionCommandOutput>;
  cancelPlanExecution(
    args: CancelPlanExecutionCommandInput,
    cb: (err: any, data?: CancelPlanExecutionCommandOutput) => void
  ): void;
  cancelPlanExecution(
    args: CancelPlanExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelPlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlanCommand}
   */
  createPlan(args: CreatePlanCommandInput, options?: __HttpHandlerOptions): Promise<CreatePlanCommandOutput>;
  createPlan(args: CreatePlanCommandInput, cb: (err: any, data?: CreatePlanCommandOutput) => void): void;
  createPlan(
    args: CreatePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlanCommand}
   */
  deletePlan(args: DeletePlanCommandInput, options?: __HttpHandlerOptions): Promise<DeletePlanCommandOutput>;
  deletePlan(args: DeletePlanCommandInput, cb: (err: any, data?: DeletePlanCommandOutput) => void): void;
  deletePlan(
    args: DeletePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlanCommand}
   */
  getPlan(args: GetPlanCommandInput, options?: __HttpHandlerOptions): Promise<GetPlanCommandOutput>;
  getPlan(args: GetPlanCommandInput, cb: (err: any, data?: GetPlanCommandOutput) => void): void;
  getPlan(
    args: GetPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlanEvaluationStatusCommand}
   */
  getPlanEvaluationStatus(
    args: GetPlanEvaluationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlanEvaluationStatusCommandOutput>;
  getPlanEvaluationStatus(
    args: GetPlanEvaluationStatusCommandInput,
    cb: (err: any, data?: GetPlanEvaluationStatusCommandOutput) => void
  ): void;
  getPlanEvaluationStatus(
    args: GetPlanEvaluationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlanEvaluationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlanExecutionCommand}
   */
  getPlanExecution(
    args: GetPlanExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlanExecutionCommandOutput>;
  getPlanExecution(
    args: GetPlanExecutionCommandInput,
    cb: (err: any, data?: GetPlanExecutionCommandOutput) => void
  ): void;
  getPlanExecution(
    args: GetPlanExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlanInRegionCommand}
   */
  getPlanInRegion(
    args: GetPlanInRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlanInRegionCommandOutput>;
  getPlanInRegion(args: GetPlanInRegionCommandInput, cb: (err: any, data?: GetPlanInRegionCommandOutput) => void): void;
  getPlanInRegion(
    args: GetPlanInRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlanInRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlanExecutionEventsCommand}
   */
  listPlanExecutionEvents(
    args: ListPlanExecutionEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlanExecutionEventsCommandOutput>;
  listPlanExecutionEvents(
    args: ListPlanExecutionEventsCommandInput,
    cb: (err: any, data?: ListPlanExecutionEventsCommandOutput) => void
  ): void;
  listPlanExecutionEvents(
    args: ListPlanExecutionEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlanExecutionEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlanExecutionsCommand}
   */
  listPlanExecutions(
    args: ListPlanExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlanExecutionsCommandOutput>;
  listPlanExecutions(
    args: ListPlanExecutionsCommandInput,
    cb: (err: any, data?: ListPlanExecutionsCommandOutput) => void
  ): void;
  listPlanExecutions(
    args: ListPlanExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlanExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlansCommand}
   */
  listPlans(): Promise<ListPlansCommandOutput>;
  listPlans(args: ListPlansCommandInput, options?: __HttpHandlerOptions): Promise<ListPlansCommandOutput>;
  listPlans(args: ListPlansCommandInput, cb: (err: any, data?: ListPlansCommandOutput) => void): void;
  listPlans(
    args: ListPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlansInRegionCommand}
   */
  listPlansInRegion(): Promise<ListPlansInRegionCommandOutput>;
  listPlansInRegion(
    args: ListPlansInRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlansInRegionCommandOutput>;
  listPlansInRegion(
    args: ListPlansInRegionCommandInput,
    cb: (err: any, data?: ListPlansInRegionCommandOutput) => void
  ): void;
  listPlansInRegion(
    args: ListPlansInRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlansInRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoute53HealthChecksCommand}
   */
  listRoute53HealthChecks(
    args: ListRoute53HealthChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoute53HealthChecksCommandOutput>;
  listRoute53HealthChecks(
    args: ListRoute53HealthChecksCommandInput,
    cb: (err: any, data?: ListRoute53HealthChecksCommandOutput) => void
  ): void;
  listRoute53HealthChecks(
    args: ListRoute53HealthChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoute53HealthChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPlanExecutionCommand}
   */
  startPlanExecution(
    args: StartPlanExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPlanExecutionCommandOutput>;
  startPlanExecution(
    args: StartPlanExecutionCommandInput,
    cb: (err: any, data?: StartPlanExecutionCommandOutput) => void
  ): void;
  startPlanExecution(
    args: StartPlanExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlanCommand}
   */
  updatePlan(args: UpdatePlanCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePlanCommandOutput>;
  updatePlan(args: UpdatePlanCommandInput, cb: (err: any, data?: UpdatePlanCommandOutput) => void): void;
  updatePlan(
    args: UpdatePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlanExecutionCommand}
   */
  updatePlanExecution(
    args: UpdatePlanExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePlanExecutionCommandOutput>;
  updatePlanExecution(
    args: UpdatePlanExecutionCommandInput,
    cb: (err: any, data?: UpdatePlanExecutionCommandOutput) => void
  ): void;
  updatePlanExecution(
    args: UpdatePlanExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlanExecutionStepCommand}
   */
  updatePlanExecutionStep(
    args: UpdatePlanExecutionStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePlanExecutionStepCommandOutput>;
  updatePlanExecutionStep(
    args: UpdatePlanExecutionStepCommandInput,
    cb: (err: any, data?: UpdatePlanExecutionStepCommandOutput) => void
  ): void;
  updatePlanExecutionStep(
    args: UpdatePlanExecutionStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlanExecutionStepCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Application Recovery Controller (ARC) Region switch helps you to quickly and reliably shift traffic away from an impaired Amazon Web Services Region to a healthy Region. With Region switch, you can create plans that define the steps to shift traffic for your application from one Amazon Web Services Region to another. You can test your plans in practice mode before using them in a real recovery scenario.</p> <p>Region switch provides a structured approach to multi-Region failover, helping you to meet your recovery time objectives (RTOs) and maintain business continuity during regional disruptions.</p>
 * @public
 */
export class ARCRegionSwitch extends ARCRegionSwitchClient implements ARCRegionSwitch {}
createAggregatedClient(commands, ARCRegionSwitch);
