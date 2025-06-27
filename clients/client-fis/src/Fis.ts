// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateExperimentTemplateCommand,
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
} from "./commands/CreateExperimentTemplateCommand";
import {
  CreateTargetAccountConfigurationCommand,
  CreateTargetAccountConfigurationCommandInput,
  CreateTargetAccountConfigurationCommandOutput,
} from "./commands/CreateTargetAccountConfigurationCommand";
import {
  DeleteExperimentTemplateCommand,
  DeleteExperimentTemplateCommandInput,
  DeleteExperimentTemplateCommandOutput,
} from "./commands/DeleteExperimentTemplateCommand";
import {
  DeleteTargetAccountConfigurationCommand,
  DeleteTargetAccountConfigurationCommandInput,
  DeleteTargetAccountConfigurationCommandOutput,
} from "./commands/DeleteTargetAccountConfigurationCommand";
import { GetActionCommand, GetActionCommandInput, GetActionCommandOutput } from "./commands/GetActionCommand";
import {
  GetExperimentCommand,
  GetExperimentCommandInput,
  GetExperimentCommandOutput,
} from "./commands/GetExperimentCommand";
import {
  GetExperimentTargetAccountConfigurationCommand,
  GetExperimentTargetAccountConfigurationCommandInput,
  GetExperimentTargetAccountConfigurationCommandOutput,
} from "./commands/GetExperimentTargetAccountConfigurationCommand";
import {
  GetExperimentTemplateCommand,
  GetExperimentTemplateCommandInput,
  GetExperimentTemplateCommandOutput,
} from "./commands/GetExperimentTemplateCommand";
import {
  GetSafetyLeverCommand,
  GetSafetyLeverCommandInput,
  GetSafetyLeverCommandOutput,
} from "./commands/GetSafetyLeverCommand";
import {
  GetTargetAccountConfigurationCommand,
  GetTargetAccountConfigurationCommandInput,
  GetTargetAccountConfigurationCommandOutput,
} from "./commands/GetTargetAccountConfigurationCommand";
import {
  GetTargetResourceTypeCommand,
  GetTargetResourceTypeCommandInput,
  GetTargetResourceTypeCommandOutput,
} from "./commands/GetTargetResourceTypeCommand";
import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import {
  ListExperimentResolvedTargetsCommand,
  ListExperimentResolvedTargetsCommandInput,
  ListExperimentResolvedTargetsCommandOutput,
} from "./commands/ListExperimentResolvedTargetsCommand";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "./commands/ListExperimentsCommand";
import {
  ListExperimentTargetAccountConfigurationsCommand,
  ListExperimentTargetAccountConfigurationsCommandInput,
  ListExperimentTargetAccountConfigurationsCommandOutput,
} from "./commands/ListExperimentTargetAccountConfigurationsCommand";
import {
  ListExperimentTemplatesCommand,
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput,
} from "./commands/ListExperimentTemplatesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetAccountConfigurationsCommand,
  ListTargetAccountConfigurationsCommandInput,
  ListTargetAccountConfigurationsCommandOutput,
} from "./commands/ListTargetAccountConfigurationsCommand";
import {
  ListTargetResourceTypesCommand,
  ListTargetResourceTypesCommandInput,
  ListTargetResourceTypesCommandOutput,
} from "./commands/ListTargetResourceTypesCommand";
import {
  StartExperimentCommand,
  StartExperimentCommandInput,
  StartExperimentCommandOutput,
} from "./commands/StartExperimentCommand";
import {
  StopExperimentCommand,
  StopExperimentCommandInput,
  StopExperimentCommandOutput,
} from "./commands/StopExperimentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateExperimentTemplateCommand,
  UpdateExperimentTemplateCommandInput,
  UpdateExperimentTemplateCommandOutput,
} from "./commands/UpdateExperimentTemplateCommand";
import {
  UpdateSafetyLeverStateCommand,
  UpdateSafetyLeverStateCommandInput,
  UpdateSafetyLeverStateCommandOutput,
} from "./commands/UpdateSafetyLeverStateCommand";
import {
  UpdateTargetAccountConfigurationCommand,
  UpdateTargetAccountConfigurationCommandInput,
  UpdateTargetAccountConfigurationCommandOutput,
} from "./commands/UpdateTargetAccountConfigurationCommand";
import { FisClient, FisClientConfig } from "./FisClient";

const commands = {
  CreateExperimentTemplateCommand,
  CreateTargetAccountConfigurationCommand,
  DeleteExperimentTemplateCommand,
  DeleteTargetAccountConfigurationCommand,
  GetActionCommand,
  GetExperimentCommand,
  GetExperimentTargetAccountConfigurationCommand,
  GetExperimentTemplateCommand,
  GetSafetyLeverCommand,
  GetTargetAccountConfigurationCommand,
  GetTargetResourceTypeCommand,
  ListActionsCommand,
  ListExperimentResolvedTargetsCommand,
  ListExperimentsCommand,
  ListExperimentTargetAccountConfigurationsCommand,
  ListExperimentTemplatesCommand,
  ListTagsForResourceCommand,
  ListTargetAccountConfigurationsCommand,
  ListTargetResourceTypesCommand,
  StartExperimentCommand,
  StopExperimentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateExperimentTemplateCommand,
  UpdateSafetyLeverStateCommand,
  UpdateTargetAccountConfigurationCommand,
};

export interface Fis {
  /**
   * @see {@link CreateExperimentTemplateCommand}
   */
  createExperimentTemplate(
    args: CreateExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperimentTemplateCommandOutput>;
  createExperimentTemplate(
    args: CreateExperimentTemplateCommandInput,
    cb: (err: any, data?: CreateExperimentTemplateCommandOutput) => void
  ): void;
  createExperimentTemplate(
    args: CreateExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperimentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTargetAccountConfigurationCommand}
   */
  createTargetAccountConfiguration(
    args: CreateTargetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTargetAccountConfigurationCommandOutput>;
  createTargetAccountConfiguration(
    args: CreateTargetAccountConfigurationCommandInput,
    cb: (err: any, data?: CreateTargetAccountConfigurationCommandOutput) => void
  ): void;
  createTargetAccountConfiguration(
    args: CreateTargetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTargetAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExperimentTemplateCommand}
   */
  deleteExperimentTemplate(
    args: DeleteExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperimentTemplateCommandOutput>;
  deleteExperimentTemplate(
    args: DeleteExperimentTemplateCommandInput,
    cb: (err: any, data?: DeleteExperimentTemplateCommandOutput) => void
  ): void;
  deleteExperimentTemplate(
    args: DeleteExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperimentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTargetAccountConfigurationCommand}
   */
  deleteTargetAccountConfiguration(
    args: DeleteTargetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTargetAccountConfigurationCommandOutput>;
  deleteTargetAccountConfiguration(
    args: DeleteTargetAccountConfigurationCommandInput,
    cb: (err: any, data?: DeleteTargetAccountConfigurationCommandOutput) => void
  ): void;
  deleteTargetAccountConfiguration(
    args: DeleteTargetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTargetAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetActionCommand}
   */
  getAction(args: GetActionCommandInput, options?: __HttpHandlerOptions): Promise<GetActionCommandOutput>;
  getAction(args: GetActionCommandInput, cb: (err: any, data?: GetActionCommandOutput) => void): void;
  getAction(
    args: GetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExperimentCommand}
   */
  getExperiment(args: GetExperimentCommandInput, options?: __HttpHandlerOptions): Promise<GetExperimentCommandOutput>;
  getExperiment(args: GetExperimentCommandInput, cb: (err: any, data?: GetExperimentCommandOutput) => void): void;
  getExperiment(
    args: GetExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExperimentTargetAccountConfigurationCommand}
   */
  getExperimentTargetAccountConfiguration(
    args: GetExperimentTargetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentTargetAccountConfigurationCommandOutput>;
  getExperimentTargetAccountConfiguration(
    args: GetExperimentTargetAccountConfigurationCommandInput,
    cb: (err: any, data?: GetExperimentTargetAccountConfigurationCommandOutput) => void
  ): void;
  getExperimentTargetAccountConfiguration(
    args: GetExperimentTargetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentTargetAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExperimentTemplateCommand}
   */
  getExperimentTemplate(
    args: GetExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentTemplateCommandOutput>;
  getExperimentTemplate(
    args: GetExperimentTemplateCommandInput,
    cb: (err: any, data?: GetExperimentTemplateCommandOutput) => void
  ): void;
  getExperimentTemplate(
    args: GetExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSafetyLeverCommand}
   */
  getSafetyLever(
    args: GetSafetyLeverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSafetyLeverCommandOutput>;
  getSafetyLever(args: GetSafetyLeverCommandInput, cb: (err: any, data?: GetSafetyLeverCommandOutput) => void): void;
  getSafetyLever(
    args: GetSafetyLeverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSafetyLeverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTargetAccountConfigurationCommand}
   */
  getTargetAccountConfiguration(
    args: GetTargetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTargetAccountConfigurationCommandOutput>;
  getTargetAccountConfiguration(
    args: GetTargetAccountConfigurationCommandInput,
    cb: (err: any, data?: GetTargetAccountConfigurationCommandOutput) => void
  ): void;
  getTargetAccountConfiguration(
    args: GetTargetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTargetAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTargetResourceTypeCommand}
   */
  getTargetResourceType(
    args: GetTargetResourceTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTargetResourceTypeCommandOutput>;
  getTargetResourceType(
    args: GetTargetResourceTypeCommandInput,
    cb: (err: any, data?: GetTargetResourceTypeCommandOutput) => void
  ): void;
  getTargetResourceType(
    args: GetTargetResourceTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTargetResourceTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionsCommand}
   */
  listActions(): Promise<ListActionsCommandOutput>;
  listActions(args: ListActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionsCommandOutput>;
  listActions(args: ListActionsCommandInput, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
  listActions(
    args: ListActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentResolvedTargetsCommand}
   */
  listExperimentResolvedTargets(
    args: ListExperimentResolvedTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentResolvedTargetsCommandOutput>;
  listExperimentResolvedTargets(
    args: ListExperimentResolvedTargetsCommandInput,
    cb: (err: any, data?: ListExperimentResolvedTargetsCommandOutput) => void
  ): void;
  listExperimentResolvedTargets(
    args: ListExperimentResolvedTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentResolvedTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentsCommand}
   */
  listExperiments(): Promise<ListExperimentsCommandOutput>;
  listExperiments(
    args: ListExperimentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentsCommandOutput>;
  listExperiments(args: ListExperimentsCommandInput, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
  listExperiments(
    args: ListExperimentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentTargetAccountConfigurationsCommand}
   */
  listExperimentTargetAccountConfigurations(
    args: ListExperimentTargetAccountConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentTargetAccountConfigurationsCommandOutput>;
  listExperimentTargetAccountConfigurations(
    args: ListExperimentTargetAccountConfigurationsCommandInput,
    cb: (err: any, data?: ListExperimentTargetAccountConfigurationsCommandOutput) => void
  ): void;
  listExperimentTargetAccountConfigurations(
    args: ListExperimentTargetAccountConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentTargetAccountConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentTemplatesCommand}
   */
  listExperimentTemplates(): Promise<ListExperimentTemplatesCommandOutput>;
  listExperimentTemplates(
    args: ListExperimentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentTemplatesCommandOutput>;
  listExperimentTemplates(
    args: ListExperimentTemplatesCommandInput,
    cb: (err: any, data?: ListExperimentTemplatesCommandOutput) => void
  ): void;
  listExperimentTemplates(
    args: ListExperimentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentTemplatesCommandOutput) => void
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
   * @see {@link ListTargetAccountConfigurationsCommand}
   */
  listTargetAccountConfigurations(
    args: ListTargetAccountConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetAccountConfigurationsCommandOutput>;
  listTargetAccountConfigurations(
    args: ListTargetAccountConfigurationsCommandInput,
    cb: (err: any, data?: ListTargetAccountConfigurationsCommandOutput) => void
  ): void;
  listTargetAccountConfigurations(
    args: ListTargetAccountConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetAccountConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTargetResourceTypesCommand}
   */
  listTargetResourceTypes(): Promise<ListTargetResourceTypesCommandOutput>;
  listTargetResourceTypes(
    args: ListTargetResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetResourceTypesCommandOutput>;
  listTargetResourceTypes(
    args: ListTargetResourceTypesCommandInput,
    cb: (err: any, data?: ListTargetResourceTypesCommandOutput) => void
  ): void;
  listTargetResourceTypes(
    args: ListTargetResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExperimentCommand}
   */
  startExperiment(
    args: StartExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExperimentCommandOutput>;
  startExperiment(args: StartExperimentCommandInput, cb: (err: any, data?: StartExperimentCommandOutput) => void): void;
  startExperiment(
    args: StartExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopExperimentCommand}
   */
  stopExperiment(
    args: StopExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopExperimentCommandOutput>;
  stopExperiment(args: StopExperimentCommandInput, cb: (err: any, data?: StopExperimentCommandOutput) => void): void;
  stopExperiment(
    args: StopExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopExperimentCommandOutput) => void
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
   * @see {@link UpdateExperimentTemplateCommand}
   */
  updateExperimentTemplate(
    args: UpdateExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentTemplateCommandOutput>;
  updateExperimentTemplate(
    args: UpdateExperimentTemplateCommandInput,
    cb: (err: any, data?: UpdateExperimentTemplateCommandOutput) => void
  ): void;
  updateExperimentTemplate(
    args: UpdateExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSafetyLeverStateCommand}
   */
  updateSafetyLeverState(
    args: UpdateSafetyLeverStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSafetyLeverStateCommandOutput>;
  updateSafetyLeverState(
    args: UpdateSafetyLeverStateCommandInput,
    cb: (err: any, data?: UpdateSafetyLeverStateCommandOutput) => void
  ): void;
  updateSafetyLeverState(
    args: UpdateSafetyLeverStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSafetyLeverStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTargetAccountConfigurationCommand}
   */
  updateTargetAccountConfiguration(
    args: UpdateTargetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTargetAccountConfigurationCommandOutput>;
  updateTargetAccountConfiguration(
    args: UpdateTargetAccountConfigurationCommandInput,
    cb: (err: any, data?: UpdateTargetAccountConfigurationCommandOutput) => void
  ): void;
  updateTargetAccountConfiguration(
    args: UpdateTargetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTargetAccountConfigurationCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services Fault Injection Service is a managed service that enables you to perform fault injection
 *            experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Service User Guide</a>.</p>
 * @public
 */
export class Fis extends FisClient implements Fis {}
createAggregatedClient(commands, Fis);
