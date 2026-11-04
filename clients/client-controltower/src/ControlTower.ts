// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateLandingZoneCommandInput,
  type CreateLandingZoneCommandOutput,
  CreateLandingZoneCommand,
} from "./commands/CreateLandingZoneCommand";
import {
  type DeleteLandingZoneCommandInput,
  type DeleteLandingZoneCommandOutput,
  DeleteLandingZoneCommand,
} from "./commands/DeleteLandingZoneCommand";
import {
  type DisableBaselineCommandInput,
  type DisableBaselineCommandOutput,
  DisableBaselineCommand,
} from "./commands/DisableBaselineCommand";
import {
  type DisableControlCommandInput,
  type DisableControlCommandOutput,
  DisableControlCommand,
} from "./commands/DisableControlCommand";
import {
  type EnableBaselineCommandInput,
  type EnableBaselineCommandOutput,
  EnableBaselineCommand,
} from "./commands/EnableBaselineCommand";
import {
  type EnableControlCommandInput,
  type EnableControlCommandOutput,
  EnableControlCommand,
} from "./commands/EnableControlCommand";
import {
  type GetBaselineCommandInput,
  type GetBaselineCommandOutput,
  GetBaselineCommand,
} from "./commands/GetBaselineCommand";
import {
  type GetBaselineOperationCommandInput,
  type GetBaselineOperationCommandOutput,
  GetBaselineOperationCommand,
} from "./commands/GetBaselineOperationCommand";
import {
  type GetControlOperationCommandInput,
  type GetControlOperationCommandOutput,
  GetControlOperationCommand,
} from "./commands/GetControlOperationCommand";
import {
  type GetEnabledBaselineCommandInput,
  type GetEnabledBaselineCommandOutput,
  GetEnabledBaselineCommand,
} from "./commands/GetEnabledBaselineCommand";
import {
  type GetEnabledControlCommandInput,
  type GetEnabledControlCommandOutput,
  GetEnabledControlCommand,
} from "./commands/GetEnabledControlCommand";
import {
  type GetLandingZoneCommandInput,
  type GetLandingZoneCommandOutput,
  GetLandingZoneCommand,
} from "./commands/GetLandingZoneCommand";
import {
  type GetLandingZoneOperationCommandInput,
  type GetLandingZoneOperationCommandOutput,
  GetLandingZoneOperationCommand,
} from "./commands/GetLandingZoneOperationCommand";
import {
  type ListBaselinesCommandInput,
  type ListBaselinesCommandOutput,
  ListBaselinesCommand,
} from "./commands/ListBaselinesCommand";
import {
  type ListControlOperationsCommandInput,
  type ListControlOperationsCommandOutput,
  ListControlOperationsCommand,
} from "./commands/ListControlOperationsCommand";
import {
  type ListEnabledBaselinesCommandInput,
  type ListEnabledBaselinesCommandOutput,
  ListEnabledBaselinesCommand,
} from "./commands/ListEnabledBaselinesCommand";
import {
  type ListEnabledControlsCommandInput,
  type ListEnabledControlsCommandOutput,
  ListEnabledControlsCommand,
} from "./commands/ListEnabledControlsCommand";
import {
  type ListLandingZoneOperationsCommandInput,
  type ListLandingZoneOperationsCommandOutput,
  ListLandingZoneOperationsCommand,
} from "./commands/ListLandingZoneOperationsCommand";
import {
  type ListLandingZonesCommandInput,
  type ListLandingZonesCommandOutput,
  ListLandingZonesCommand,
} from "./commands/ListLandingZonesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ResetEnabledBaselineCommandInput,
  type ResetEnabledBaselineCommandOutput,
  ResetEnabledBaselineCommand,
} from "./commands/ResetEnabledBaselineCommand";
import {
  type ResetEnabledControlCommandInput,
  type ResetEnabledControlCommandOutput,
  ResetEnabledControlCommand,
} from "./commands/ResetEnabledControlCommand";
import {
  type ResetLandingZoneCommandInput,
  type ResetLandingZoneCommandOutput,
  ResetLandingZoneCommand,
} from "./commands/ResetLandingZoneCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateEnabledBaselineCommandInput,
  type UpdateEnabledBaselineCommandOutput,
  UpdateEnabledBaselineCommand,
} from "./commands/UpdateEnabledBaselineCommand";
import {
  type UpdateEnabledControlCommandInput,
  type UpdateEnabledControlCommandOutput,
  UpdateEnabledControlCommand,
} from "./commands/UpdateEnabledControlCommand";
import {
  type UpdateLandingZoneCommandInput,
  type UpdateLandingZoneCommandOutput,
  UpdateLandingZoneCommand,
} from "./commands/UpdateLandingZoneCommand";
import { ControlTowerClient } from "./ControlTowerClient";
import { paginateListBaselines } from "./pagination/ListBaselinesPaginator";
import { paginateListControlOperations } from "./pagination/ListControlOperationsPaginator";
import { paginateListEnabledBaselines } from "./pagination/ListEnabledBaselinesPaginator";
import { paginateListEnabledControls } from "./pagination/ListEnabledControlsPaginator";
import { paginateListLandingZoneOperations } from "./pagination/ListLandingZoneOperationsPaginator";
import { paginateListLandingZones } from "./pagination/ListLandingZonesPaginator";

const commands = {
  CreateLandingZoneCommand,
  DeleteLandingZoneCommand,
  DisableBaselineCommand,
  DisableControlCommand,
  EnableBaselineCommand,
  EnableControlCommand,
  GetBaselineCommand,
  GetBaselineOperationCommand,
  GetControlOperationCommand,
  GetEnabledBaselineCommand,
  GetEnabledControlCommand,
  GetLandingZoneCommand,
  GetLandingZoneOperationCommand,
  ListBaselinesCommand,
  ListControlOperationsCommand,
  ListEnabledBaselinesCommand,
  ListEnabledControlsCommand,
  ListLandingZoneOperationsCommand,
  ListLandingZonesCommand,
  ListTagsForResourceCommand,
  ResetEnabledBaselineCommand,
  ResetEnabledControlCommand,
  ResetLandingZoneCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEnabledBaselineCommand,
  UpdateEnabledControlCommand,
  UpdateLandingZoneCommand,
};
const paginators = {
  paginateListBaselines,
  paginateListControlOperations,
  paginateListEnabledBaselines,
  paginateListEnabledControls,
  paginateListLandingZoneOperations,
  paginateListLandingZones,
};

/**
 * @public
 */
export interface ControlTowerRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ControlTower {
  /**
   * @see {@link CreateLandingZoneCommand}
   */
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<CreateLandingZoneCommandOutput>;
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    cb: (err: any, data?: CreateLandingZoneCommandOutput) => void
  ): void;
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: CreateLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLandingZoneCommand}
   */
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<DeleteLandingZoneCommandOutput>;
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    cb: (err: any, data?: DeleteLandingZoneCommandOutput) => void
  ): void;
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: DeleteLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableBaselineCommand}
   */
  disableBaseline(
    args: DisableBaselineCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<DisableBaselineCommandOutput>;
  disableBaseline(
    args: DisableBaselineCommandInput,
    cb: (err: any, data?: DisableBaselineCommandOutput) => void
  ): void;
  disableBaseline(
    args: DisableBaselineCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: DisableBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableControlCommand}
   */
  disableControl(): Promise<DisableControlCommandOutput>;
  disableControl(
    args: DisableControlCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<DisableControlCommandOutput>;
  disableControl(
    args: DisableControlCommandInput,
    cb: (err: any, data?: DisableControlCommandOutput) => void
  ): void;
  disableControl(
    args: DisableControlCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: DisableControlCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableBaselineCommand}
   */
  enableBaseline(
    args: EnableBaselineCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<EnableBaselineCommandOutput>;
  enableBaseline(
    args: EnableBaselineCommandInput,
    cb: (err: any, data?: EnableBaselineCommandOutput) => void
  ): void;
  enableBaseline(
    args: EnableBaselineCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: EnableBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableControlCommand}
   */
  enableControl(
    args: EnableControlCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<EnableControlCommandOutput>;
  enableControl(
    args: EnableControlCommandInput,
    cb: (err: any, data?: EnableControlCommandOutput) => void
  ): void;
  enableControl(
    args: EnableControlCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: EnableControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBaselineCommand}
   */
  getBaseline(
    args: GetBaselineCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<GetBaselineCommandOutput>;
  getBaseline(
    args: GetBaselineCommandInput,
    cb: (err: any, data?: GetBaselineCommandOutput) => void
  ): void;
  getBaseline(
    args: GetBaselineCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: GetBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBaselineOperationCommand}
   */
  getBaselineOperation(
    args: GetBaselineOperationCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<GetBaselineOperationCommandOutput>;
  getBaselineOperation(
    args: GetBaselineOperationCommandInput,
    cb: (err: any, data?: GetBaselineOperationCommandOutput) => void
  ): void;
  getBaselineOperation(
    args: GetBaselineOperationCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: GetBaselineOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetControlOperationCommand}
   */
  getControlOperation(
    args: GetControlOperationCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<GetControlOperationCommandOutput>;
  getControlOperation(
    args: GetControlOperationCommandInput,
    cb: (err: any, data?: GetControlOperationCommandOutput) => void
  ): void;
  getControlOperation(
    args: GetControlOperationCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: GetControlOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnabledBaselineCommand}
   */
  getEnabledBaseline(
    args: GetEnabledBaselineCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<GetEnabledBaselineCommandOutput>;
  getEnabledBaseline(
    args: GetEnabledBaselineCommandInput,
    cb: (err: any, data?: GetEnabledBaselineCommandOutput) => void
  ): void;
  getEnabledBaseline(
    args: GetEnabledBaselineCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: GetEnabledBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnabledControlCommand}
   */
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<GetEnabledControlCommandOutput>;
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    cb: (err: any, data?: GetEnabledControlCommandOutput) => void
  ): void;
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: GetEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLandingZoneCommand}
   */
  getLandingZone(
    args: GetLandingZoneCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<GetLandingZoneCommandOutput>;
  getLandingZone(
    args: GetLandingZoneCommandInput,
    cb: (err: any, data?: GetLandingZoneCommandOutput) => void
  ): void;
  getLandingZone(
    args: GetLandingZoneCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: GetLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLandingZoneOperationCommand}
   */
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<GetLandingZoneOperationCommandOutput>;
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    cb: (err: any, data?: GetLandingZoneOperationCommandOutput) => void
  ): void;
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: GetLandingZoneOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBaselinesCommand}
   */
  listBaselines(): Promise<ListBaselinesCommandOutput>;
  listBaselines(
    args: ListBaselinesCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ListBaselinesCommandOutput>;
  listBaselines(
    args: ListBaselinesCommandInput,
    cb: (err: any, data?: ListBaselinesCommandOutput) => void
  ): void;
  listBaselines(
    args: ListBaselinesCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ListBaselinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlOperationsCommand}
   */
  listControlOperations(): Promise<ListControlOperationsCommandOutput>;
  listControlOperations(
    args: ListControlOperationsCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ListControlOperationsCommandOutput>;
  listControlOperations(
    args: ListControlOperationsCommandInput,
    cb: (err: any, data?: ListControlOperationsCommandOutput) => void
  ): void;
  listControlOperations(
    args: ListControlOperationsCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ListControlOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnabledBaselinesCommand}
   */
  listEnabledBaselines(): Promise<ListEnabledBaselinesCommandOutput>;
  listEnabledBaselines(
    args: ListEnabledBaselinesCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ListEnabledBaselinesCommandOutput>;
  listEnabledBaselines(
    args: ListEnabledBaselinesCommandInput,
    cb: (err: any, data?: ListEnabledBaselinesCommandOutput) => void
  ): void;
  listEnabledBaselines(
    args: ListEnabledBaselinesCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ListEnabledBaselinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnabledControlsCommand}
   */
  listEnabledControls(): Promise<ListEnabledControlsCommandOutput>;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ListEnabledControlsCommandOutput>;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    cb: (err: any, data?: ListEnabledControlsCommandOutput) => void
  ): void;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ListEnabledControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLandingZoneOperationsCommand}
   */
  listLandingZoneOperations(): Promise<ListLandingZoneOperationsCommandOutput>;
  listLandingZoneOperations(
    args: ListLandingZoneOperationsCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ListLandingZoneOperationsCommandOutput>;
  listLandingZoneOperations(
    args: ListLandingZoneOperationsCommandInput,
    cb: (err: any, data?: ListLandingZoneOperationsCommandOutput) => void
  ): void;
  listLandingZoneOperations(
    args: ListLandingZoneOperationsCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ListLandingZoneOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLandingZonesCommand}
   */
  listLandingZones(): Promise<ListLandingZonesCommandOutput>;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ListLandingZonesCommandOutput>;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    cb: (err: any, data?: ListLandingZonesCommandOutput) => void
  ): void;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ListLandingZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetEnabledBaselineCommand}
   */
  resetEnabledBaseline(
    args: ResetEnabledBaselineCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ResetEnabledBaselineCommandOutput>;
  resetEnabledBaseline(
    args: ResetEnabledBaselineCommandInput,
    cb: (err: any, data?: ResetEnabledBaselineCommandOutput) => void
  ): void;
  resetEnabledBaseline(
    args: ResetEnabledBaselineCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ResetEnabledBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetEnabledControlCommand}
   */
  resetEnabledControl(
    args: ResetEnabledControlCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ResetEnabledControlCommandOutput>;
  resetEnabledControl(
    args: ResetEnabledControlCommandInput,
    cb: (err: any, data?: ResetEnabledControlCommandOutput) => void
  ): void;
  resetEnabledControl(
    args: ResetEnabledControlCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ResetEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetLandingZoneCommand}
   */
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<ResetLandingZoneCommandOutput>;
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    cb: (err: any, data?: ResetLandingZoneCommandOutput) => void
  ): void;
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: ResetLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnabledBaselineCommand}
   */
  updateEnabledBaseline(
    args: UpdateEnabledBaselineCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<UpdateEnabledBaselineCommandOutput>;
  updateEnabledBaseline(
    args: UpdateEnabledBaselineCommandInput,
    cb: (err: any, data?: UpdateEnabledBaselineCommandOutput) => void
  ): void;
  updateEnabledBaseline(
    args: UpdateEnabledBaselineCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: UpdateEnabledBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnabledControlCommand}
   */
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<UpdateEnabledControlCommandOutput>;
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    cb: (err: any, data?: UpdateEnabledControlCommandOutput) => void
  ): void;
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: UpdateEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLandingZoneCommand}
   */
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    options?: ControlTowerRequestOptions
  ): Promise<UpdateLandingZoneCommandOutput>;
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    cb: (err: any, data?: UpdateLandingZoneCommandOutput) => void
  ): void;
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    options: ControlTowerRequestOptions,
    cb: (err: any, data?: UpdateLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBaselinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBaselinesCommandOutput}.
   */
  paginateListBaselines(
    args?: ListBaselinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBaselinesCommandOutput>;

  /**
   * @see {@link ListControlOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlOperationsCommandOutput}.
   */
  paginateListControlOperations(
    args?: ListControlOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlOperationsCommandOutput>;

  /**
   * @see {@link ListEnabledBaselinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnabledBaselinesCommandOutput}.
   */
  paginateListEnabledBaselines(
    args?: ListEnabledBaselinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnabledBaselinesCommandOutput>;

  /**
   * @see {@link ListEnabledControlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnabledControlsCommandOutput}.
   */
  paginateListEnabledControls(
    args?: ListEnabledControlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnabledControlsCommandOutput>;

  /**
   * @see {@link ListLandingZoneOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLandingZoneOperationsCommandOutput}.
   */
  paginateListLandingZoneOperations(
    args?: ListLandingZoneOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLandingZoneOperationsCommandOutput>;

  /**
   * @see {@link ListLandingZonesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLandingZonesCommandOutput}.
   */
  paginateListLandingZones(
    args?: ListLandingZonesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLandingZonesCommandOutput>;
}

/**
 * Amazon Web Services Control Tower offers application programming interface (API) operations that support programmatic interaction with these types of resources:
 *
 * - [*Controls*](https://docs.aws.amazon.com/controltower/latest/userguide/controls.html)
 *
 *   - [DisableControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableControl.html)
 *   - [EnableControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html)
 *   - [GetEnabledControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledControl.html)
 *   - [GetControlOperation](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetControlOperation.html)
 *   - [ListControlOperations](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListControlOperations.html)
 *   - [ListEnabledControls](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledControls.html)
 *   - [ResetEnabledControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledControl.html)
 *   - [UpdateEnabledControl](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html)
 * - [*Landing zones*](https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch.html)
 *
 *   - [CreateLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html)
 *   - [DeleteLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_DeleteLandingZone.html)
 *   - [GetLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZone.html)
 *   - [GetLandingZoneOperation](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZoneOperation.html)
 *   - [ListLandingZones](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZones.html)
 *   - [ListLandingZoneOperations](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZoneOperations.html)
 *   - [ResetLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetLandingZone.html)
 *   - [UpdateLandingZone](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateLandingZone.html)
 * - [*Baselines*](https://docs.aws.amazon.com/controltower/latest/userguide/types-of-baselines.html)
 *
 *   - [DisableBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableBaseline.html)
 *   - [EnableBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableBaseline.html)
 *   - [GetBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaseline.html)
 *   - [GetBaselineOperation](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaselineOperation.html)
 *   - [GetEnabledBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledBaseline.html)
 *   - [ListBaselines](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListBaselines.html)
 *   - [ListEnabledBaselines](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledBaselines.html)
 *   - [ResetEnabledBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledBaseline.html)
 *   - [UpdateEnabledBaseline](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledBaseline.html)
 * - [*Tagging*](https://docs.aws.amazon.com/controltower/latest/controlreference/tagging.html)
 *
 *   - [ListTagsForResource](https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListTagsForResource.html)
 *   - [TagResource](https://docs.aws.amazon.com/controltower/latest/APIReference/API_TagResource.html)
 *   - [UntagResource](https://docs.aws.amazon.com/controltower/latest/APIReference/API_UntagResource.html)
 *
 * For more information about these types of resources, see the [*Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html).
 *
 * **About control APIs**
 *
 * These interfaces allow you to apply the Amazon Web Services library of pre-defined *controls* to your organizational units, programmatically. In Amazon Web Services Control Tower, the terms "control" and "guardrail" are synonyms.
 *
 * To call these APIs, you'll need to know:
 *
 * - the `controlIdentifier` for the control--or guardrail--you are targeting.
 * - the ARN associated with the target organizational unit (OU), which we call the `targetIdentifier`.
 * - the ARN associated with a resource that you wish to tag or untag.
 *
 * **To get the `controlIdentifier` for your Amazon Web Services Control Tower control:**
 *
 * The `controlIdentifier` is an ARN that is specified for each control. You can view the `controlIdentifier` in the console on the **Control details** page, as well as in the documentation.
 *
 * **About identifiers for Amazon Web Services Control Tower**
 *
 * The Amazon Web Services Control Tower `controlIdentifier` is unique in each Amazon Web Services Region for each control. You can find the `controlIdentifier` for each Region and control in the [Tables of control metadata](https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html) or the [Control availability by Region tables](https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html) in the *Amazon Web Services Control Tower Controls Reference Guide*.
 *
 * A quick-reference list of control identifers for the Amazon Web Services Control Tower legacy *Strongly recommended* and *Elective* controls is given in [Resource identifiers for APIs and controls](https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html.html) in the [*Amazon Web Services Control Tower Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html). Remember that *Mandatory* controls cannot be added or removed.
 *
 * > **Note:**
 * >
 * > **Some controls have two identifiers**
 * >
 * > - **ARN format for Amazon Web Services Control Tower:** `arn:aws:controltower:\{REGION\}::control/\{CONTROL_TOWER_OPAQUE_ID\}`
 * >
 * >   **Example:**
 * >
 * >   `arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED`
 * > - **ARN format for Amazon Web Services Control Catalog:** `arn:\{PARTITION\}:controlcatalog:::control/\{CONTROL_CATALOG_OPAQUE_ID\}`
 * >
 * > You can find the `\{CONTROL_CATALOG_OPAQUE_ID\}` in the [*Amazon Web Services Control Tower Controls Reference Guide*](https://docs.aws.amazon.com/controltower/latest/controlreference/all-global-identifiers.html), or in the Amazon Web Services Control Tower console, on the **Control details** page.
 * >
 * > The Amazon Web Services Control Tower APIs for enabled controls, such as `GetEnabledControl` and `ListEnabledControls` always return an ARN of the same type given when the control was enabled.
 *
 * **To get the `targetIdentifier`:**
 *
 * The `targetIdentifier` is the ARN for an OU.
 *
 * In the Amazon Web Services Organizations console, you can find the ARN for the OU on the **Organizational unit details** page associated with that OU.
 *
 * > **Note:**
 * >
 * > **OU ARN format:**
 * >
 * > `arn:$\{Partition\}:organizations::$\{MasterAccountId\}:ou/o-$\{OrganizationId\}/ou-$\{OrganizationalUnitId\}`
 *
 * **About landing zone APIs**
 *
 * You can configure and launch an Amazon Web Services Control Tower landing zone with APIs. For an introduction and steps, see [Getting started with Amazon Web Services Control Tower using APIs](https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-apis.html).
 *
 * For an overview of landing zone API operations, see [Amazon Web Services Control Tower supports landing zone APIs](https://docs.aws.amazon.com/controltower/latest/userguide/2023-all.html#landing-zone-apis). The individual API operations for landing zones are detailed in this document, the [API reference manual](https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html), in the "Actions" section.
 *
 * **About baseline APIs**
 *
 * You can apply the `AWSControlTowerBaseline` baseline to an organizational unit (OU) as a way to register the OU with Amazon Web Services Control Tower, programmatically. For a general overview of this capability, see [Amazon Web Services Control Tower supports APIs for OU registration and configuration with baselines](https://docs.aws.amazon.com/controltower/latest/userguide/2024-all.html#baseline-apis).
 *
 * You can call the baseline API operations to view the baselines that Amazon Web Services Control Tower enables for your landing zone, on your behalf, when setting up the landing zone. These baselines are read-only baselines.
 *
 * The individual API operations for baselines are detailed in this document, the [API reference manual](https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html), in the "Actions" section. For usage examples, see [Baseline API input and output examples with CLI](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * **About Amazon Web Services Control Catalog identifiers**
 *
 * - The `EnableControl` and `DisableControl` API operations can be called by specifying either the Amazon Web Services Control Tower identifer or the Amazon Web Services Control Catalog identifier. The API response returns the same type of identifier that you specified when calling the API.
 * - If you use an Amazon Web Services Control Tower identifier to call the `EnableControl` API, and then call `EnableControl` again with an Amazon Web Services Control Catalog identifier, Amazon Web Services Control Tower returns an error message stating that the control is already enabled. Similar behavior applies to the `DisableControl` API operation.
 * - Mandatory controls and the landing-zone-level Region deny control have Amazon Web Services Control Tower identifiers only.
 *
 * **Details and examples**
 *
 * - [Control API input and output examples with CLI](https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html)
 * - [Baseline API input and output examples with CLI](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html)
 * - [Enable controls with CloudFormation](https://docs.aws.amazon.com/controltower/latest/controlreference/enable-controls.html)
 * - [Launch a landing zone with CloudFormation](https://docs.aws.amazon.com/controltower/latest/userguide/lz-apis-cfn-setup.html)
 * - [Control metadata tables (large page)](https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html)
 * - [Control availability by Region tables (large page)](https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html)
 * - [List of identifiers for legacy controls](https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html)
 * - [Controls reference guide](https://docs.aws.amazon.com/controltower/latest/controlreference/controls.html)
 * - [Controls library groupings](https://docs.aws.amazon.com/controltower/latest/controlreference/controls-reference.html)
 * - [Creating Amazon Web Services Control Tower resources with Amazon Web Services CloudFormation](https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html)
 *
 * To view the open source resource repository on GitHub, see [aws-cloudformation/aws-cloudformation-resource-providers-controltower](https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower)
 *
 * **Recording API Requests**
 *
 * Amazon Web Services Control Tower supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the Amazon Web Services Control Tower service received, who made the request and when, and so on. For more about Amazon Web Services Control Tower and its support for CloudTrail, see [Logging Amazon Web Services Control Tower Actions with Amazon Web Services CloudTrail](https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html) in the Amazon Web Services Control Tower User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the Amazon Web Services CloudTrail User Guide.
 *
 * @public
 */
export class ControlTower extends ControlTowerClient implements ControlTower {}
createAggregatedClient(commands, ControlTower, { paginators });
