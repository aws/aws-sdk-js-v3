// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAlarmModelCommand,
  CreateAlarmModelCommandInput,
  CreateAlarmModelCommandOutput,
} from "./commands/CreateAlarmModelCommand";
import {
  CreateDetectorModelCommand,
  CreateDetectorModelCommandInput,
  CreateDetectorModelCommandOutput,
} from "./commands/CreateDetectorModelCommand";
import { CreateInputCommand, CreateInputCommandInput, CreateInputCommandOutput } from "./commands/CreateInputCommand";
import {
  DeleteAlarmModelCommand,
  DeleteAlarmModelCommandInput,
  DeleteAlarmModelCommandOutput,
} from "./commands/DeleteAlarmModelCommand";
import {
  DeleteDetectorModelCommand,
  DeleteDetectorModelCommandInput,
  DeleteDetectorModelCommandOutput,
} from "./commands/DeleteDetectorModelCommand";
import { DeleteInputCommand, DeleteInputCommandInput, DeleteInputCommandOutput } from "./commands/DeleteInputCommand";
import {
  DescribeAlarmModelCommand,
  DescribeAlarmModelCommandInput,
  DescribeAlarmModelCommandOutput,
} from "./commands/DescribeAlarmModelCommand";
import {
  DescribeDetectorModelAnalysisCommand,
  DescribeDetectorModelAnalysisCommandInput,
  DescribeDetectorModelAnalysisCommandOutput,
} from "./commands/DescribeDetectorModelAnalysisCommand";
import {
  DescribeDetectorModelCommand,
  DescribeDetectorModelCommandInput,
  DescribeDetectorModelCommandOutput,
} from "./commands/DescribeDetectorModelCommand";
import {
  DescribeInputCommand,
  DescribeInputCommandInput,
  DescribeInputCommandOutput,
} from "./commands/DescribeInputCommand";
import {
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import {
  GetDetectorModelAnalysisResultsCommand,
  GetDetectorModelAnalysisResultsCommandInput,
  GetDetectorModelAnalysisResultsCommandOutput,
} from "./commands/GetDetectorModelAnalysisResultsCommand";
import {
  ListAlarmModelsCommand,
  ListAlarmModelsCommandInput,
  ListAlarmModelsCommandOutput,
} from "./commands/ListAlarmModelsCommand";
import {
  ListAlarmModelVersionsCommand,
  ListAlarmModelVersionsCommandInput,
  ListAlarmModelVersionsCommandOutput,
} from "./commands/ListAlarmModelVersionsCommand";
import {
  ListDetectorModelsCommand,
  ListDetectorModelsCommandInput,
  ListDetectorModelsCommandOutput,
} from "./commands/ListDetectorModelsCommand";
import {
  ListDetectorModelVersionsCommand,
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput,
} from "./commands/ListDetectorModelVersionsCommand";
import {
  ListInputRoutingsCommand,
  ListInputRoutingsCommandInput,
  ListInputRoutingsCommandOutput,
} from "./commands/ListInputRoutingsCommand";
import { ListInputsCommand, ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutLoggingOptionsCommand,
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
} from "./commands/PutLoggingOptionsCommand";
import {
  StartDetectorModelAnalysisCommand,
  StartDetectorModelAnalysisCommandInput,
  StartDetectorModelAnalysisCommandOutput,
} from "./commands/StartDetectorModelAnalysisCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAlarmModelCommand,
  UpdateAlarmModelCommandInput,
  UpdateAlarmModelCommandOutput,
} from "./commands/UpdateAlarmModelCommand";
import {
  UpdateDetectorModelCommand,
  UpdateDetectorModelCommandInput,
  UpdateDetectorModelCommandOutput,
} from "./commands/UpdateDetectorModelCommand";
import { UpdateInputCommand, UpdateInputCommandInput, UpdateInputCommandOutput } from "./commands/UpdateInputCommand";
import { IoTEventsClient, IoTEventsClientConfig } from "./IoTEventsClient";

const commands = {
  CreateAlarmModelCommand,
  CreateDetectorModelCommand,
  CreateInputCommand,
  DeleteAlarmModelCommand,
  DeleteDetectorModelCommand,
  DeleteInputCommand,
  DescribeAlarmModelCommand,
  DescribeDetectorModelCommand,
  DescribeDetectorModelAnalysisCommand,
  DescribeInputCommand,
  DescribeLoggingOptionsCommand,
  GetDetectorModelAnalysisResultsCommand,
  ListAlarmModelsCommand,
  ListAlarmModelVersionsCommand,
  ListDetectorModelsCommand,
  ListDetectorModelVersionsCommand,
  ListInputRoutingsCommand,
  ListInputsCommand,
  ListTagsForResourceCommand,
  PutLoggingOptionsCommand,
  StartDetectorModelAnalysisCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAlarmModelCommand,
  UpdateDetectorModelCommand,
  UpdateInputCommand,
};

export interface IoTEvents {
  /**
   * @see {@link CreateAlarmModelCommand}
   */
  createAlarmModel(
    args: CreateAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAlarmModelCommandOutput>;
  createAlarmModel(
    args: CreateAlarmModelCommandInput,
    cb: (err: any, data?: CreateAlarmModelCommandOutput) => void
  ): void;
  createAlarmModel(
    args: CreateAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlarmModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDetectorModelCommand}
   */
  createDetectorModel(
    args: CreateDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDetectorModelCommandOutput>;
  createDetectorModel(
    args: CreateDetectorModelCommandInput,
    cb: (err: any, data?: CreateDetectorModelCommandOutput) => void
  ): void;
  createDetectorModel(
    args: CreateDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDetectorModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInputCommand}
   */
  createInput(args: CreateInputCommandInput, options?: __HttpHandlerOptions): Promise<CreateInputCommandOutput>;
  createInput(args: CreateInputCommandInput, cb: (err: any, data?: CreateInputCommandOutput) => void): void;
  createInput(
    args: CreateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlarmModelCommand}
   */
  deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlarmModelCommandOutput>;
  deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    cb: (err: any, data?: DeleteAlarmModelCommandOutput) => void
  ): void;
  deleteAlarmModel(
    args: DeleteAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlarmModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDetectorModelCommand}
   */
  deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorModelCommandOutput>;
  deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    cb: (err: any, data?: DeleteDetectorModelCommandOutput) => void
  ): void;
  deleteDetectorModel(
    args: DeleteDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInputCommand}
   */
  deleteInput(args: DeleteInputCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInputCommandOutput>;
  deleteInput(args: DeleteInputCommandInput, cb: (err: any, data?: DeleteInputCommandOutput) => void): void;
  deleteInput(
    args: DeleteInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlarmModelCommand}
   */
  describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmModelCommandOutput>;
  describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    cb: (err: any, data?: DescribeAlarmModelCommandOutput) => void
  ): void;
  describeAlarmModel(
    args: DescribeAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDetectorModelCommand}
   */
  describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorModelCommandOutput>;
  describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    cb: (err: any, data?: DescribeDetectorModelCommandOutput) => void
  ): void;
  describeDetectorModel(
    args: DescribeDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDetectorModelAnalysisCommand}
   */
  describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorModelAnalysisCommandOutput>;
  describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    cb: (err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void
  ): void;
  describeDetectorModelAnalysis(
    args: DescribeDetectorModelAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputCommand}
   */
  describeInput(args: DescribeInputCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInputCommandOutput>;
  describeInput(args: DescribeInputCommandInput, cb: (err: any, data?: DescribeInputCommandOutput) => void): void;
  describeInput(
    args: DescribeInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingOptionsCommand}
   */
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingOptionsCommandOutput>;
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDetectorModelAnalysisResultsCommand}
   */
  getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDetectorModelAnalysisResultsCommandOutput>;
  getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    cb: (err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void
  ): void;
  getDetectorModelAnalysisResults(
    args: GetDetectorModelAnalysisResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlarmModelsCommand}
   */
  listAlarmModels(
    args: ListAlarmModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlarmModelsCommandOutput>;
  listAlarmModels(args: ListAlarmModelsCommandInput, cb: (err: any, data?: ListAlarmModelsCommandOutput) => void): void;
  listAlarmModels(
    args: ListAlarmModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlarmModelVersionsCommand}
   */
  listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlarmModelVersionsCommandOutput>;
  listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    cb: (err: any, data?: ListAlarmModelVersionsCommandOutput) => void
  ): void;
  listAlarmModelVersions(
    args: ListAlarmModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmModelVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDetectorModelsCommand}
   */
  listDetectorModels(
    args: ListDetectorModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorModelsCommandOutput>;
  listDetectorModels(
    args: ListDetectorModelsCommandInput,
    cb: (err: any, data?: ListDetectorModelsCommandOutput) => void
  ): void;
  listDetectorModels(
    args: ListDetectorModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDetectorModelVersionsCommand}
   */
  listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorModelVersionsCommandOutput>;
  listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    cb: (err: any, data?: ListDetectorModelVersionsCommandOutput) => void
  ): void;
  listDetectorModelVersions(
    args: ListDetectorModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorModelVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputRoutingsCommand}
   */
  listInputRoutings(
    args: ListInputRoutingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputRoutingsCommandOutput>;
  listInputRoutings(
    args: ListInputRoutingsCommandInput,
    cb: (err: any, data?: ListInputRoutingsCommandOutput) => void
  ): void;
  listInputRoutings(
    args: ListInputRoutingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputRoutingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputsCommand}
   */
  listInputs(args: ListInputsCommandInput, options?: __HttpHandlerOptions): Promise<ListInputsCommandOutput>;
  listInputs(args: ListInputsCommandInput, cb: (err: any, data?: ListInputsCommandOutput) => void): void;
  listInputs(
    args: ListInputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputsCommandOutput) => void
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
   * @see {@link PutLoggingOptionsCommand}
   */
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDetectorModelAnalysisCommand}
   */
  startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDetectorModelAnalysisCommandOutput>;
  startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    cb: (err: any, data?: StartDetectorModelAnalysisCommandOutput) => void
  ): void;
  startDetectorModelAnalysis(
    args: StartDetectorModelAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDetectorModelAnalysisCommandOutput) => void
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
   * @see {@link UpdateAlarmModelCommand}
   */
  updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAlarmModelCommandOutput>;
  updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    cb: (err: any, data?: UpdateAlarmModelCommandOutput) => void
  ): void;
  updateAlarmModel(
    args: UpdateAlarmModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAlarmModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDetectorModelCommand}
   */
  updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorModelCommandOutput>;
  updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    cb: (err: any, data?: UpdateDetectorModelCommandOutput) => void
  ): void;
  updateDetectorModel(
    args: UpdateDetectorModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInputCommand}
   */
  updateInput(args: UpdateInputCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInputCommandOutput>;
  updateInput(args: UpdateInputCommandInput, cb: (err: any, data?: UpdateInputCommandOutput) => void): void;
  updateInput(
    args: UpdateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInputCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use AWS IoT Events API operations to create, read,
 *       update, and delete inputs and detector models, and to list their versions.</p>
 */
export class IoTEvents extends IoTEventsClient implements IoTEvents {}
createAggregatedClient(commands, IoTEvents);
