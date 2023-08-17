// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateExperimentTemplateCommand,
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
} from "./commands/CreateExperimentTemplateCommand";
import {
  DeleteExperimentTemplateCommand,
  DeleteExperimentTemplateCommandInput,
  DeleteExperimentTemplateCommandOutput,
} from "./commands/DeleteExperimentTemplateCommand";
import { GetActionCommand, GetActionCommandInput, GetActionCommandOutput } from "./commands/GetActionCommand";
import {
  GetExperimentCommand,
  GetExperimentCommandInput,
  GetExperimentCommandOutput,
} from "./commands/GetExperimentCommand";
import {
  GetExperimentTemplateCommand,
  GetExperimentTemplateCommandInput,
  GetExperimentTemplateCommandOutput,
} from "./commands/GetExperimentTemplateCommand";
import {
  GetTargetResourceTypeCommand,
  GetTargetResourceTypeCommandInput,
  GetTargetResourceTypeCommandOutput,
} from "./commands/GetTargetResourceTypeCommand";
import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "./commands/ListExperimentsCommand";
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
import { FisClient, FisClientConfig } from "./FisClient";

const commands = {
  CreateExperimentTemplateCommand,
  DeleteExperimentTemplateCommand,
  GetActionCommand,
  GetExperimentCommand,
  GetExperimentTemplateCommand,
  GetTargetResourceTypeCommand,
  ListActionsCommand,
  ListExperimentsCommand,
  ListExperimentTemplatesCommand,
  ListTagsForResourceCommand,
  ListTargetResourceTypesCommand,
  StartExperimentCommand,
  StopExperimentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateExperimentTemplateCommand,
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
  listActions(args: ListActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionsCommandOutput>;
  listActions(args: ListActionsCommandInput, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
  listActions(
    args: ListActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentsCommand}
   */
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
   * @see {@link ListExperimentTemplatesCommand}
   */
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
   * @see {@link ListTargetResourceTypesCommand}
   */
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
}

/**
 * @public
 * <p>Fault Injection Simulator is a managed service that enables you to perform fault injection
 *            experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.</p>
 */
export class Fis extends FisClient implements Fis {}
createAggregatedClient(commands, Fis);
