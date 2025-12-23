// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateLandingZoneCommand,
  CreateLandingZoneCommandInput,
  CreateLandingZoneCommandOutput,
} from "./commands/CreateLandingZoneCommand";
import {
  DeleteLandingZoneCommand,
  DeleteLandingZoneCommandInput,
  DeleteLandingZoneCommandOutput,
} from "./commands/DeleteLandingZoneCommand";
import {
  DisableBaselineCommand,
  DisableBaselineCommandInput,
  DisableBaselineCommandOutput,
} from "./commands/DisableBaselineCommand";
import {
  DisableControlCommand,
  DisableControlCommandInput,
  DisableControlCommandOutput,
} from "./commands/DisableControlCommand";
import {
  EnableBaselineCommand,
  EnableBaselineCommandInput,
  EnableBaselineCommandOutput,
} from "./commands/EnableBaselineCommand";
import {
  EnableControlCommand,
  EnableControlCommandInput,
  EnableControlCommandOutput,
} from "./commands/EnableControlCommand";
import { GetBaselineCommand, GetBaselineCommandInput, GetBaselineCommandOutput } from "./commands/GetBaselineCommand";
import {
  GetBaselineOperationCommand,
  GetBaselineOperationCommandInput,
  GetBaselineOperationCommandOutput,
} from "./commands/GetBaselineOperationCommand";
import {
  GetControlOperationCommand,
  GetControlOperationCommandInput,
  GetControlOperationCommandOutput,
} from "./commands/GetControlOperationCommand";
import {
  GetEnabledBaselineCommand,
  GetEnabledBaselineCommandInput,
  GetEnabledBaselineCommandOutput,
} from "./commands/GetEnabledBaselineCommand";
import {
  GetEnabledControlCommand,
  GetEnabledControlCommandInput,
  GetEnabledControlCommandOutput,
} from "./commands/GetEnabledControlCommand";
import {
  GetLandingZoneCommand,
  GetLandingZoneCommandInput,
  GetLandingZoneCommandOutput,
} from "./commands/GetLandingZoneCommand";
import {
  GetLandingZoneOperationCommand,
  GetLandingZoneOperationCommandInput,
  GetLandingZoneOperationCommandOutput,
} from "./commands/GetLandingZoneOperationCommand";
import {
  ListBaselinesCommand,
  ListBaselinesCommandInput,
  ListBaselinesCommandOutput,
} from "./commands/ListBaselinesCommand";
import {
  ListControlOperationsCommand,
  ListControlOperationsCommandInput,
  ListControlOperationsCommandOutput,
} from "./commands/ListControlOperationsCommand";
import {
  ListEnabledBaselinesCommand,
  ListEnabledBaselinesCommandInput,
  ListEnabledBaselinesCommandOutput,
} from "./commands/ListEnabledBaselinesCommand";
import {
  ListEnabledControlsCommand,
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
} from "./commands/ListEnabledControlsCommand";
import {
  ListLandingZoneOperationsCommand,
  ListLandingZoneOperationsCommandInput,
  ListLandingZoneOperationsCommandOutput,
} from "./commands/ListLandingZoneOperationsCommand";
import {
  ListLandingZonesCommand,
  ListLandingZonesCommandInput,
  ListLandingZonesCommandOutput,
} from "./commands/ListLandingZonesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResetEnabledBaselineCommand,
  ResetEnabledBaselineCommandInput,
  ResetEnabledBaselineCommandOutput,
} from "./commands/ResetEnabledBaselineCommand";
import {
  ResetEnabledControlCommand,
  ResetEnabledControlCommandInput,
  ResetEnabledControlCommandOutput,
} from "./commands/ResetEnabledControlCommand";
import {
  ResetLandingZoneCommand,
  ResetLandingZoneCommandInput,
  ResetLandingZoneCommandOutput,
} from "./commands/ResetLandingZoneCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEnabledBaselineCommand,
  UpdateEnabledBaselineCommandInput,
  UpdateEnabledBaselineCommandOutput,
} from "./commands/UpdateEnabledBaselineCommand";
import {
  UpdateEnabledControlCommand,
  UpdateEnabledControlCommandInput,
  UpdateEnabledControlCommandOutput,
} from "./commands/UpdateEnabledControlCommand";
import {
  UpdateLandingZoneCommand,
  UpdateLandingZoneCommandInput,
  UpdateLandingZoneCommandOutput,
} from "./commands/UpdateLandingZoneCommand";
import { ControlTowerClient } from "./ControlTowerClient";

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

export interface ControlTower {
  /**
   * @see {@link CreateLandingZoneCommand}
   */
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLandingZoneCommandOutput>;
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    cb: (err: any, data?: CreateLandingZoneCommandOutput) => void
  ): void;
  createLandingZone(
    args: CreateLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLandingZoneCommand}
   */
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLandingZoneCommandOutput>;
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    cb: (err: any, data?: DeleteLandingZoneCommandOutput) => void
  ): void;
  deleteLandingZone(
    args: DeleteLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableBaselineCommand}
   */
  disableBaseline(
    args: DisableBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableBaselineCommandOutput>;
  disableBaseline(
    args: DisableBaselineCommandInput,
    cb: (err: any, data?: DisableBaselineCommandOutput) => void
  ): void;
  disableBaseline(
    args: DisableBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableControlCommand}
   */
  disableControl(): Promise<DisableControlCommandOutput>;
  disableControl(
    args: DisableControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableControlCommandOutput>;
  disableControl(
    args: DisableControlCommandInput,
    cb: (err: any, data?: DisableControlCommandOutput) => void
  ): void;
  disableControl(
    args: DisableControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableControlCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableBaselineCommand}
   */
  enableBaseline(
    args: EnableBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableBaselineCommandOutput>;
  enableBaseline(
    args: EnableBaselineCommandInput,
    cb: (err: any, data?: EnableBaselineCommandOutput) => void
  ): void;
  enableBaseline(
    args: EnableBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableControlCommand}
   */
  enableControl(
    args: EnableControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableControlCommandOutput>;
  enableControl(
    args: EnableControlCommandInput,
    cb: (err: any, data?: EnableControlCommandOutput) => void
  ): void;
  enableControl(
    args: EnableControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBaselineCommand}
   */
  getBaseline(
    args: GetBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBaselineCommandOutput>;
  getBaseline(
    args: GetBaselineCommandInput,
    cb: (err: any, data?: GetBaselineCommandOutput) => void
  ): void;
  getBaseline(
    args: GetBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBaselineOperationCommand}
   */
  getBaselineOperation(
    args: GetBaselineOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBaselineOperationCommandOutput>;
  getBaselineOperation(
    args: GetBaselineOperationCommandInput,
    cb: (err: any, data?: GetBaselineOperationCommandOutput) => void
  ): void;
  getBaselineOperation(
    args: GetBaselineOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBaselineOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetControlOperationCommand}
   */
  getControlOperation(
    args: GetControlOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetControlOperationCommandOutput>;
  getControlOperation(
    args: GetControlOperationCommandInput,
    cb: (err: any, data?: GetControlOperationCommandOutput) => void
  ): void;
  getControlOperation(
    args: GetControlOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetControlOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnabledBaselineCommand}
   */
  getEnabledBaseline(
    args: GetEnabledBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnabledBaselineCommandOutput>;
  getEnabledBaseline(
    args: GetEnabledBaselineCommandInput,
    cb: (err: any, data?: GetEnabledBaselineCommandOutput) => void
  ): void;
  getEnabledBaseline(
    args: GetEnabledBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnabledBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnabledControlCommand}
   */
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnabledControlCommandOutput>;
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    cb: (err: any, data?: GetEnabledControlCommandOutput) => void
  ): void;
  getEnabledControl(
    args: GetEnabledControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLandingZoneCommand}
   */
  getLandingZone(
    args: GetLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLandingZoneCommandOutput>;
  getLandingZone(
    args: GetLandingZoneCommandInput,
    cb: (err: any, data?: GetLandingZoneCommandOutput) => void
  ): void;
  getLandingZone(
    args: GetLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLandingZoneOperationCommand}
   */
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLandingZoneOperationCommandOutput>;
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    cb: (err: any, data?: GetLandingZoneOperationCommandOutput) => void
  ): void;
  getLandingZoneOperation(
    args: GetLandingZoneOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLandingZoneOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBaselinesCommand}
   */
  listBaselines(): Promise<ListBaselinesCommandOutput>;
  listBaselines(
    args: ListBaselinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBaselinesCommandOutput>;
  listBaselines(
    args: ListBaselinesCommandInput,
    cb: (err: any, data?: ListBaselinesCommandOutput) => void
  ): void;
  listBaselines(
    args: ListBaselinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBaselinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlOperationsCommand}
   */
  listControlOperations(): Promise<ListControlOperationsCommandOutput>;
  listControlOperations(
    args: ListControlOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlOperationsCommandOutput>;
  listControlOperations(
    args: ListControlOperationsCommandInput,
    cb: (err: any, data?: ListControlOperationsCommandOutput) => void
  ): void;
  listControlOperations(
    args: ListControlOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnabledBaselinesCommand}
   */
  listEnabledBaselines(): Promise<ListEnabledBaselinesCommandOutput>;
  listEnabledBaselines(
    args: ListEnabledBaselinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnabledBaselinesCommandOutput>;
  listEnabledBaselines(
    args: ListEnabledBaselinesCommandInput,
    cb: (err: any, data?: ListEnabledBaselinesCommandOutput) => void
  ): void;
  listEnabledBaselines(
    args: ListEnabledBaselinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnabledBaselinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnabledControlsCommand}
   */
  listEnabledControls(): Promise<ListEnabledControlsCommandOutput>;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnabledControlsCommandOutput>;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    cb: (err: any, data?: ListEnabledControlsCommandOutput) => void
  ): void;
  listEnabledControls(
    args: ListEnabledControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnabledControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLandingZoneOperationsCommand}
   */
  listLandingZoneOperations(): Promise<ListLandingZoneOperationsCommandOutput>;
  listLandingZoneOperations(
    args: ListLandingZoneOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLandingZoneOperationsCommandOutput>;
  listLandingZoneOperations(
    args: ListLandingZoneOperationsCommandInput,
    cb: (err: any, data?: ListLandingZoneOperationsCommandOutput) => void
  ): void;
  listLandingZoneOperations(
    args: ListLandingZoneOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLandingZoneOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLandingZonesCommand}
   */
  listLandingZones(): Promise<ListLandingZonesCommandOutput>;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLandingZonesCommandOutput>;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    cb: (err: any, data?: ListLandingZonesCommandOutput) => void
  ): void;
  listLandingZones(
    args: ListLandingZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLandingZonesCommandOutput) => void
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
   * @see {@link ResetEnabledBaselineCommand}
   */
  resetEnabledBaseline(
    args: ResetEnabledBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetEnabledBaselineCommandOutput>;
  resetEnabledBaseline(
    args: ResetEnabledBaselineCommandInput,
    cb: (err: any, data?: ResetEnabledBaselineCommandOutput) => void
  ): void;
  resetEnabledBaseline(
    args: ResetEnabledBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetEnabledBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetEnabledControlCommand}
   */
  resetEnabledControl(
    args: ResetEnabledControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetEnabledControlCommandOutput>;
  resetEnabledControl(
    args: ResetEnabledControlCommandInput,
    cb: (err: any, data?: ResetEnabledControlCommandOutput) => void
  ): void;
  resetEnabledControl(
    args: ResetEnabledControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetLandingZoneCommand}
   */
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetLandingZoneCommandOutput>;
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    cb: (err: any, data?: ResetLandingZoneCommandOutput) => void
  ): void;
  resetLandingZone(
    args: ResetLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetLandingZoneCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnabledBaselineCommand}
   */
  updateEnabledBaseline(
    args: UpdateEnabledBaselineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnabledBaselineCommandOutput>;
  updateEnabledBaseline(
    args: UpdateEnabledBaselineCommandInput,
    cb: (err: any, data?: UpdateEnabledBaselineCommandOutput) => void
  ): void;
  updateEnabledBaseline(
    args: UpdateEnabledBaselineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnabledBaselineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnabledControlCommand}
   */
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnabledControlCommandOutput>;
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    cb: (err: any, data?: UpdateEnabledControlCommandOutput) => void
  ): void;
  updateEnabledControl(
    args: UpdateEnabledControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnabledControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLandingZoneCommand}
   */
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLandingZoneCommandOutput>;
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    cb: (err: any, data?: UpdateLandingZoneCommandOutput) => void
  ): void;
  updateLandingZone(
    args: UpdateLandingZoneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLandingZoneCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services Control Tower offers application programming interface (API) operations that support programmatic interaction with these types of resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls.html"> <i>Controls</i> </a> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableControl.html">DisableControl</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html">EnableControl</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledControl.html">GetEnabledControl</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetControlOperation.html">GetControlOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListControlOperations.html">ListControlOperations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledControls.html">ListEnabledControls</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledControl.html">ResetEnabledControl</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html">UpdateEnabledControl</a> </p> </li> </ul> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch.html"> <i>Landing zones</i> </a> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html">CreateLandingZone</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_DeleteLandingZone.html">DeleteLandingZone</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZone.html">GetLandingZone</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZoneOperation.html">GetLandingZoneOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZones.html">ListLandingZones</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZoneOperations.html">ListLandingZoneOperations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetLandingZone.html">ResetLandingZone</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateLandingZone.html">UpdateLandingZone</a> </p> </li> </ul> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/types-of-baselines.html"> <i>Baselines</i> </a> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableBaseline.html">DisableBaseline</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableBaseline.html">EnableBaseline</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaseline.html">GetBaseline</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaselineOperation.html">GetBaselineOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledBaseline.html">GetEnabledBaseline</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListBaselines.html">ListBaselines</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledBaselines.html">ListEnabledBaselines</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledBaseline.html">ResetEnabledBaseline</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledBaseline.html">UpdateEnabledBaseline</a> </p> </li> </ul> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/tagging.html"> <i>Tagging</i> </a> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_TagResource.html">TagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UntagResource.html">UntagResource</a> </p> </li> </ul> </li> </ul> <p>For more information about these types of resources, see the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html"> <i>Amazon Web Services Control Tower User Guide</i> </a>.</p> <p> <b>About control APIs</b> </p> <p>These interfaces allow you to apply the Amazon Web Services library of pre-defined <i>controls</i> to your organizational units, programmatically. In Amazon Web Services Control Tower, the terms "control" and "guardrail" are synonyms.</p> <p>To call these APIs, you'll need to know:</p> <ul> <li> <p>the <code>controlIdentifier</code> for the control--or guardrail--you are targeting.</p> </li> <li> <p>the ARN associated with the target organizational unit (OU), which we call the <code>targetIdentifier</code>.</p> </li> <li> <p>the ARN associated with a resource that you wish to tag or untag.</p> </li> </ul> <p> <b>To get the <code>controlIdentifier</code> for your Amazon Web Services Control Tower control:</b> </p> <p>The <code>controlIdentifier</code> is an ARN that is specified for each control. You can view the <code>controlIdentifier</code> in the console on the <b>Control details</b> page, as well as in the documentation.</p> <p> <b>About identifiers for Amazon Web Services Control Tower</b> </p> <p>The Amazon Web Services Control Tower <code>controlIdentifier</code> is unique in each Amazon Web Services Region for each control. You can find the <code>controlIdentifier</code> for each Region and control in the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html">Tables of control metadata</a> or the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html">Control availability by Region tables</a> in the <i>Amazon Web Services Control Tower Controls Reference Guide</i>.</p> <p>A quick-reference list of control identifers for the Amazon Web Services Control Tower legacy <i>Strongly recommended</i> and <i>Elective</i> controls is given in <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html.html">Resource identifiers for APIs and controls</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html"> <i>Amazon Web Services Control Tower Controls Reference Guide</i> </a>. Remember that <i>Mandatory</i> controls cannot be added or removed.</p> <note> <p> <b>Some controls have two identifiers</b> </p> <ul> <li> <p> <b>ARN format for Amazon Web Services Control Tower:</b> <code>arn:aws:controltower:\{REGION\}::control/\{CONTROL_TOWER_OPAQUE_ID\}</code> </p> <p> <b>Example:</b> </p> <p> <code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code> </p> </li> <li> <p> <b>ARN format for Amazon Web Services Control Catalog:</b> <code>arn:\{PARTITION\}:controlcatalog:::control/\{CONTROL_CATALOG_OPAQUE_ID\}</code> </p> </li> </ul> <p>You can find the <code>\{CONTROL_CATALOG_OPAQUE_ID\}</code> in the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/all-global-identifiers.html"> <i>Amazon Web Services Control Tower Controls Reference Guide</i> </a>, or in the Amazon Web Services Control Tower console, on the <b>Control details</b> page.</p> <p>The Amazon Web Services Control Tower APIs for enabled controls, such as <code>GetEnabledControl</code> and <code>ListEnabledControls</code> always return an ARN of the same type given when the control was enabled.</p> </note> <p> <b>To get the <code>targetIdentifier</code>:</b> </p> <p>The <code>targetIdentifier</code> is the ARN for an OU.</p> <p>In the Amazon Web Services Organizations console, you can find the ARN for the OU on the <b>Organizational unit details</b> page associated with that OU.</p> <note> <p> <b>OU ARN format:</b> </p> <p> <code>arn:$\{Partition\}:organizations::$\{MasterAccountId\}:ou/o-$\{OrganizationId\}/ou-$\{OrganizationalUnitId\}</code> </p> </note> <p> <b> About landing zone APIs</b> </p> <p>You can configure and launch an Amazon Web Services Control Tower landing zone with APIs. For an introduction and steps, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-apis.html">Getting started with Amazon Web Services Control Tower using APIs</a>.</p> <p>For an overview of landing zone API operations, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/2023-all.html#landing-zone-apis"> Amazon Web Services Control Tower supports landing zone APIs</a>. The individual API operations for landing zones are detailed in this document, the <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html">API reference manual</a>, in the "Actions" section.</p> <p> <b>About baseline APIs</b> </p> <p>You can apply the <code>AWSControlTowerBaseline</code> baseline to an organizational unit (OU) as a way to register the OU with Amazon Web Services Control Tower, programmatically. For a general overview of this capability, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/2024-all.html#baseline-apis">Amazon Web Services Control Tower supports APIs for OU registration and configuration with baselines</a>.</p> <p>You can call the baseline API operations to view the baselines that Amazon Web Services Control Tower enables for your landing zone, on your behalf, when setting up the landing zone. These baselines are read-only baselines.</p> <p>The individual API operations for baselines are detailed in this document, the <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html">API reference manual</a>, in the "Actions" section. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">Baseline API input and output examples with CLI</a>.</p> <p> <b> About Amazon Web Services Control Catalog identifiers</b> </p> <ul> <li> <p>The <code>EnableControl</code> and <code>DisableControl</code> API operations can be called by specifying either the Amazon Web Services Control Tower identifer or the Amazon Web Services Control Catalog identifier. The API response returns the same type of identifier that you specified when calling the API.</p> </li> <li> <p>If you use an Amazon Web Services Control Tower identifier to call the <code>EnableControl</code> API, and then call <code>EnableControl</code> again with an Amazon Web Services Control Catalog identifier, Amazon Web Services Control Tower returns an error message stating that the control is already enabled. Similar behavior applies to the <code>DisableControl</code> API operation. </p> </li> <li> <p>Mandatory controls and the landing-zone-level Region deny control have Amazon Web Services Control Tower identifiers only.</p> </li> </ul> <p class="title"> <b>Details and examples</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html">Control API input and output examples with CLI</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">Baseline API input and output examples with CLI</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/enable-controls.html">Enable controls with CloudFormation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-apis-cfn-setup.html">Launch a landing zone with CloudFormation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html">Control metadata tables (large page)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html">Control availability by Region tables (large page)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html">List of identifiers for legacy controls</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/controls.html">Controls reference guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/controls-reference.html">Controls library groupings</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating Amazon Web Services Control Tower resources with Amazon Web Services CloudFormation</a> </p> </li> </ul> <p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a> </p> <p> <b>Recording API Requests</b> </p> <p>Amazon Web Services Control Tower supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the Amazon Web Services Control Tower service received, who made the request and when, and so on. For more about Amazon Web Services Control Tower and its support for CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging Amazon Web Services Control Tower Actions with Amazon Web Services CloudTrail</a> in the Amazon Web Services Control Tower User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the Amazon Web Services CloudTrail User Guide.</p>
 * @public
 */
export class ControlTower extends ControlTowerClient implements ControlTower {}
createAggregatedClient(commands, ControlTower);
