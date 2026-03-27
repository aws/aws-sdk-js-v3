// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { ARCZonalShiftClient } from "./ARCZonalShiftClient";
import {
  type CancelPracticeRunCommandInput,
  type CancelPracticeRunCommandOutput,
  CancelPracticeRunCommand,
} from "./commands/CancelPracticeRunCommand";
import {
  type CancelZonalShiftCommandInput,
  type CancelZonalShiftCommandOutput,
  CancelZonalShiftCommand,
} from "./commands/CancelZonalShiftCommand";
import {
  type CreatePracticeRunConfigurationCommandInput,
  type CreatePracticeRunConfigurationCommandOutput,
  CreatePracticeRunConfigurationCommand,
} from "./commands/CreatePracticeRunConfigurationCommand";
import {
  type DeletePracticeRunConfigurationCommandInput,
  type DeletePracticeRunConfigurationCommandOutput,
  DeletePracticeRunConfigurationCommand,
} from "./commands/DeletePracticeRunConfigurationCommand";
import {
  type GetAutoshiftObserverNotificationStatusCommandInput,
  type GetAutoshiftObserverNotificationStatusCommandOutput,
  GetAutoshiftObserverNotificationStatusCommand,
} from "./commands/GetAutoshiftObserverNotificationStatusCommand";
import {
  type GetManagedResourceCommandInput,
  type GetManagedResourceCommandOutput,
  GetManagedResourceCommand,
} from "./commands/GetManagedResourceCommand";
import {
  type ListAutoshiftsCommandInput,
  type ListAutoshiftsCommandOutput,
  ListAutoshiftsCommand,
} from "./commands/ListAutoshiftsCommand";
import {
  type ListManagedResourcesCommandInput,
  type ListManagedResourcesCommandOutput,
  ListManagedResourcesCommand,
} from "./commands/ListManagedResourcesCommand";
import {
  type ListZonalShiftsCommandInput,
  type ListZonalShiftsCommandOutput,
  ListZonalShiftsCommand,
} from "./commands/ListZonalShiftsCommand";
import {
  type StartPracticeRunCommandInput,
  type StartPracticeRunCommandOutput,
  StartPracticeRunCommand,
} from "./commands/StartPracticeRunCommand";
import {
  type StartZonalShiftCommandInput,
  type StartZonalShiftCommandOutput,
  StartZonalShiftCommand,
} from "./commands/StartZonalShiftCommand";
import {
  type UpdateAutoshiftObserverNotificationStatusCommandInput,
  type UpdateAutoshiftObserverNotificationStatusCommandOutput,
  UpdateAutoshiftObserverNotificationStatusCommand,
} from "./commands/UpdateAutoshiftObserverNotificationStatusCommand";
import {
  type UpdatePracticeRunConfigurationCommandInput,
  type UpdatePracticeRunConfigurationCommandOutput,
  UpdatePracticeRunConfigurationCommand,
} from "./commands/UpdatePracticeRunConfigurationCommand";
import {
  type UpdateZonalAutoshiftConfigurationCommandInput,
  type UpdateZonalAutoshiftConfigurationCommandOutput,
  UpdateZonalAutoshiftConfigurationCommand,
} from "./commands/UpdateZonalAutoshiftConfigurationCommand";
import {
  type UpdateZonalShiftCommandInput,
  type UpdateZonalShiftCommandOutput,
  UpdateZonalShiftCommand,
} from "./commands/UpdateZonalShiftCommand";
import { paginateListAutoshifts } from "./pagination/ListAutoshiftsPaginator";
import { paginateListManagedResources } from "./pagination/ListManagedResourcesPaginator";
import { paginateListZonalShifts } from "./pagination/ListZonalShiftsPaginator";

const commands = {
  CancelPracticeRunCommand,
  CancelZonalShiftCommand,
  CreatePracticeRunConfigurationCommand,
  DeletePracticeRunConfigurationCommand,
  GetAutoshiftObserverNotificationStatusCommand,
  GetManagedResourceCommand,
  ListAutoshiftsCommand,
  ListManagedResourcesCommand,
  ListZonalShiftsCommand,
  StartPracticeRunCommand,
  StartZonalShiftCommand,
  UpdateAutoshiftObserverNotificationStatusCommand,
  UpdatePracticeRunConfigurationCommand,
  UpdateZonalAutoshiftConfigurationCommand,
  UpdateZonalShiftCommand,
};
const paginators = {
  paginateListAutoshifts,
  paginateListManagedResources,
  paginateListZonalShifts,
};

export interface ARCZonalShift {
  /**
   * @see {@link CancelPracticeRunCommand}
   */
  cancelPracticeRun(
    args: CancelPracticeRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelPracticeRunCommandOutput>;
  cancelPracticeRun(
    args: CancelPracticeRunCommandInput,
    cb: (err: any, data?: CancelPracticeRunCommandOutput) => void
  ): void;
  cancelPracticeRun(
    args: CancelPracticeRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelPracticeRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelZonalShiftCommand}
   */
  cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelZonalShiftCommandOutput>;
  cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    cb: (err: any, data?: CancelZonalShiftCommandOutput) => void
  ): void;
  cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelZonalShiftCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePracticeRunConfigurationCommand}
   */
  createPracticeRunConfiguration(
    args: CreatePracticeRunConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePracticeRunConfigurationCommandOutput>;
  createPracticeRunConfiguration(
    args: CreatePracticeRunConfigurationCommandInput,
    cb: (err: any, data?: CreatePracticeRunConfigurationCommandOutput) => void
  ): void;
  createPracticeRunConfiguration(
    args: CreatePracticeRunConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePracticeRunConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePracticeRunConfigurationCommand}
   */
  deletePracticeRunConfiguration(
    args: DeletePracticeRunConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePracticeRunConfigurationCommandOutput>;
  deletePracticeRunConfiguration(
    args: DeletePracticeRunConfigurationCommandInput,
    cb: (err: any, data?: DeletePracticeRunConfigurationCommandOutput) => void
  ): void;
  deletePracticeRunConfiguration(
    args: DeletePracticeRunConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePracticeRunConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoshiftObserverNotificationStatusCommand}
   */
  getAutoshiftObserverNotificationStatus(): Promise<GetAutoshiftObserverNotificationStatusCommandOutput>;
  getAutoshiftObserverNotificationStatus(
    args: GetAutoshiftObserverNotificationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoshiftObserverNotificationStatusCommandOutput>;
  getAutoshiftObserverNotificationStatus(
    args: GetAutoshiftObserverNotificationStatusCommandInput,
    cb: (err: any, data?: GetAutoshiftObserverNotificationStatusCommandOutput) => void
  ): void;
  getAutoshiftObserverNotificationStatus(
    args: GetAutoshiftObserverNotificationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoshiftObserverNotificationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedResourceCommand}
   */
  getManagedResource(
    args: GetManagedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedResourceCommandOutput>;
  getManagedResource(
    args: GetManagedResourceCommandInput,
    cb: (err: any, data?: GetManagedResourceCommandOutput) => void
  ): void;
  getManagedResource(
    args: GetManagedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutoshiftsCommand}
   */
  listAutoshifts(): Promise<ListAutoshiftsCommandOutput>;
  listAutoshifts(
    args: ListAutoshiftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutoshiftsCommandOutput>;
  listAutoshifts(
    args: ListAutoshiftsCommandInput,
    cb: (err: any, data?: ListAutoshiftsCommandOutput) => void
  ): void;
  listAutoshifts(
    args: ListAutoshiftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutoshiftsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedResourcesCommand}
   */
  listManagedResources(): Promise<ListManagedResourcesCommandOutput>;
  listManagedResources(
    args: ListManagedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedResourcesCommandOutput>;
  listManagedResources(
    args: ListManagedResourcesCommandInput,
    cb: (err: any, data?: ListManagedResourcesCommandOutput) => void
  ): void;
  listManagedResources(
    args: ListManagedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListZonalShiftsCommand}
   */
  listZonalShifts(): Promise<ListZonalShiftsCommandOutput>;
  listZonalShifts(
    args: ListZonalShiftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListZonalShiftsCommandOutput>;
  listZonalShifts(
    args: ListZonalShiftsCommandInput,
    cb: (err: any, data?: ListZonalShiftsCommandOutput) => void
  ): void;
  listZonalShifts(
    args: ListZonalShiftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListZonalShiftsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPracticeRunCommand}
   */
  startPracticeRun(
    args: StartPracticeRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPracticeRunCommandOutput>;
  startPracticeRun(
    args: StartPracticeRunCommandInput,
    cb: (err: any, data?: StartPracticeRunCommandOutput) => void
  ): void;
  startPracticeRun(
    args: StartPracticeRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPracticeRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartZonalShiftCommand}
   */
  startZonalShift(
    args: StartZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartZonalShiftCommandOutput>;
  startZonalShift(
    args: StartZonalShiftCommandInput,
    cb: (err: any, data?: StartZonalShiftCommandOutput) => void
  ): void;
  startZonalShift(
    args: StartZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartZonalShiftCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAutoshiftObserverNotificationStatusCommand}
   */
  updateAutoshiftObserverNotificationStatus(
    args: UpdateAutoshiftObserverNotificationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutoshiftObserverNotificationStatusCommandOutput>;
  updateAutoshiftObserverNotificationStatus(
    args: UpdateAutoshiftObserverNotificationStatusCommandInput,
    cb: (err: any, data?: UpdateAutoshiftObserverNotificationStatusCommandOutput) => void
  ): void;
  updateAutoshiftObserverNotificationStatus(
    args: UpdateAutoshiftObserverNotificationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutoshiftObserverNotificationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePracticeRunConfigurationCommand}
   */
  updatePracticeRunConfiguration(
    args: UpdatePracticeRunConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePracticeRunConfigurationCommandOutput>;
  updatePracticeRunConfiguration(
    args: UpdatePracticeRunConfigurationCommandInput,
    cb: (err: any, data?: UpdatePracticeRunConfigurationCommandOutput) => void
  ): void;
  updatePracticeRunConfiguration(
    args: UpdatePracticeRunConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePracticeRunConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateZonalAutoshiftConfigurationCommand}
   */
  updateZonalAutoshiftConfiguration(
    args: UpdateZonalAutoshiftConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateZonalAutoshiftConfigurationCommandOutput>;
  updateZonalAutoshiftConfiguration(
    args: UpdateZonalAutoshiftConfigurationCommandInput,
    cb: (err: any, data?: UpdateZonalAutoshiftConfigurationCommandOutput) => void
  ): void;
  updateZonalAutoshiftConfiguration(
    args: UpdateZonalAutoshiftConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateZonalAutoshiftConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateZonalShiftCommand}
   */
  updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateZonalShiftCommandOutput>;
  updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    cb: (err: any, data?: UpdateZonalShiftCommandOutput) => void
  ): void;
  updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateZonalShiftCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutoshiftsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutoshiftsCommandOutput}.
   */
  paginateListAutoshifts(
    args?: ListAutoshiftsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutoshiftsCommandOutput>;

  /**
   * @see {@link ListManagedResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedResourcesCommandOutput}.
   */
  paginateListManagedResources(
    args?: ListManagedResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedResourcesCommandOutput>;

  /**
   * @see {@link ListZonalShiftsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListZonalShiftsCommandOutput}.
   */
  paginateListZonalShifts(
    args?: ListZonalShiftsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListZonalShiftsCommandOutput>;
}

/**
 * <p>Welcome to the API Reference Guide for zonal shift and zonal autoshift in Amazon Application Recovery Controller (ARC).</p> <p>You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to help your application recover quickly from an impairment in an Availability Zone. For example, you can recover your application from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone.</p> <p>You can also configure zonal autoshift for supported load balancer resources. Zonal autoshift is a capability in ARC where you authorize Amazon Web Services to shift away application resource traffic from an Availability Zone during events, on your behalf, to help reduce your time to recovery. Amazon Web Services starts an autoshift when internal telemetry indicates that there is an Availability Zone impairment that could potentially impact customers.</p> <p>For more information about using zonal shift and zonal autoshift, see the <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html">Amazon Application Recovery Controller Developer Guide</a>.</p>
 * @public
 */
export class ARCZonalShift extends ARCZonalShiftClient implements ARCZonalShift {}
createAggregatedClient(commands, ARCZonalShift, { paginators });
