// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchCreateVariableCommand,
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput,
} from "./commands/BatchCreateVariableCommand";
import {
  BatchGetVariableCommand,
  BatchGetVariableCommandInput,
  BatchGetVariableCommandOutput,
} from "./commands/BatchGetVariableCommand";
import {
  CancelBatchImportJobCommand,
  CancelBatchImportJobCommandInput,
  CancelBatchImportJobCommandOutput,
} from "./commands/CancelBatchImportJobCommand";
import {
  CancelBatchPredictionJobCommand,
  CancelBatchPredictionJobCommandInput,
  CancelBatchPredictionJobCommandOutput,
} from "./commands/CancelBatchPredictionJobCommand";
import {
  CreateBatchImportJobCommand,
  CreateBatchImportJobCommandInput,
  CreateBatchImportJobCommandOutput,
} from "./commands/CreateBatchImportJobCommand";
import {
  CreateBatchPredictionJobCommand,
  CreateBatchPredictionJobCommandInput,
  CreateBatchPredictionJobCommandOutput,
} from "./commands/CreateBatchPredictionJobCommand";
import {
  CreateDetectorVersionCommand,
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
} from "./commands/CreateDetectorVersionCommand";
import { CreateListCommand, CreateListCommandInput, CreateListCommandOutput } from "./commands/CreateListCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateModelVersionCommand,
  CreateModelVersionCommandInput,
  CreateModelVersionCommandOutput,
} from "./commands/CreateModelVersionCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateVariableCommand,
  CreateVariableCommandInput,
  CreateVariableCommandOutput,
} from "./commands/CreateVariableCommand";
import {
  DeleteBatchImportJobCommand,
  DeleteBatchImportJobCommandInput,
  DeleteBatchImportJobCommandOutput,
} from "./commands/DeleteBatchImportJobCommand";
import {
  DeleteBatchPredictionJobCommand,
  DeleteBatchPredictionJobCommandInput,
  DeleteBatchPredictionJobCommandOutput,
} from "./commands/DeleteBatchPredictionJobCommand";
import {
  DeleteDetectorCommand,
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput,
} from "./commands/DeleteDetectorCommand";
import {
  DeleteDetectorVersionCommand,
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput,
} from "./commands/DeleteDetectorVersionCommand";
import {
  DeleteEntityTypeCommand,
  DeleteEntityTypeCommandInput,
  DeleteEntityTypeCommandOutput,
} from "./commands/DeleteEntityTypeCommand";
import { DeleteEventCommand, DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import {
  DeleteEventsByEventTypeCommand,
  DeleteEventsByEventTypeCommandInput,
  DeleteEventsByEventTypeCommandOutput,
} from "./commands/DeleteEventsByEventTypeCommand";
import {
  DeleteEventTypeCommand,
  DeleteEventTypeCommandInput,
  DeleteEventTypeCommandOutput,
} from "./commands/DeleteEventTypeCommand";
import {
  DeleteExternalModelCommand,
  DeleteExternalModelCommandInput,
  DeleteExternalModelCommandOutput,
} from "./commands/DeleteExternalModelCommand";
import { DeleteLabelCommand, DeleteLabelCommandInput, DeleteLabelCommandOutput } from "./commands/DeleteLabelCommand";
import { DeleteListCommand, DeleteListCommandInput, DeleteListCommandOutput } from "./commands/DeleteListCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteModelVersionCommand,
  DeleteModelVersionCommandInput,
  DeleteModelVersionCommandOutput,
} from "./commands/DeleteModelVersionCommand";
import {
  DeleteOutcomeCommand,
  DeleteOutcomeCommandInput,
  DeleteOutcomeCommandOutput,
} from "./commands/DeleteOutcomeCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteVariableCommand,
  DeleteVariableCommandInput,
  DeleteVariableCommandOutput,
} from "./commands/DeleteVariableCommand";
import {
  DescribeDetectorCommand,
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput,
} from "./commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommand,
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "./commands/DescribeModelVersionsCommand";
import {
  GetBatchImportJobsCommand,
  GetBatchImportJobsCommandInput,
  GetBatchImportJobsCommandOutput,
} from "./commands/GetBatchImportJobsCommand";
import {
  GetBatchPredictionJobsCommand,
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput,
} from "./commands/GetBatchPredictionJobsCommand";
import {
  GetDeleteEventsByEventTypeStatusCommand,
  GetDeleteEventsByEventTypeStatusCommandInput,
  GetDeleteEventsByEventTypeStatusCommandOutput,
} from "./commands/GetDeleteEventsByEventTypeStatusCommand";
import {
  GetDetectorsCommand,
  GetDetectorsCommandInput,
  GetDetectorsCommandOutput,
} from "./commands/GetDetectorsCommand";
import {
  GetDetectorVersionCommand,
  GetDetectorVersionCommandInput,
  GetDetectorVersionCommandOutput,
} from "./commands/GetDetectorVersionCommand";
import {
  GetEntityTypesCommand,
  GetEntityTypesCommandInput,
  GetEntityTypesCommandOutput,
} from "./commands/GetEntityTypesCommand";
import { GetEventCommand, GetEventCommandInput, GetEventCommandOutput } from "./commands/GetEventCommand";
import {
  GetEventPredictionCommand,
  GetEventPredictionCommandInput,
  GetEventPredictionCommandOutput,
} from "./commands/GetEventPredictionCommand";
import {
  GetEventPredictionMetadataCommand,
  GetEventPredictionMetadataCommandInput,
  GetEventPredictionMetadataCommandOutput,
} from "./commands/GetEventPredictionMetadataCommand";
import {
  GetEventTypesCommand,
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput,
} from "./commands/GetEventTypesCommand";
import {
  GetExternalModelsCommand,
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput,
} from "./commands/GetExternalModelsCommand";
import {
  GetKMSEncryptionKeyCommand,
  GetKMSEncryptionKeyCommandInput,
  GetKMSEncryptionKeyCommandOutput,
} from "./commands/GetKMSEncryptionKeyCommand";
import { GetLabelsCommand, GetLabelsCommandInput, GetLabelsCommandOutput } from "./commands/GetLabelsCommand";
import {
  GetListElementsCommand,
  GetListElementsCommandInput,
  GetListElementsCommandOutput,
} from "./commands/GetListElementsCommand";
import {
  GetListsMetadataCommand,
  GetListsMetadataCommandInput,
  GetListsMetadataCommandOutput,
} from "./commands/GetListsMetadataCommand";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import {
  GetModelVersionCommand,
  GetModelVersionCommandInput,
  GetModelVersionCommandOutput,
} from "./commands/GetModelVersionCommand";
import { GetOutcomesCommand, GetOutcomesCommandInput, GetOutcomesCommandOutput } from "./commands/GetOutcomesCommand";
import { GetRulesCommand, GetRulesCommandInput, GetRulesCommandOutput } from "./commands/GetRulesCommand";
import {
  GetVariablesCommand,
  GetVariablesCommandInput,
  GetVariablesCommandOutput,
} from "./commands/GetVariablesCommand";
import {
  ListEventPredictionsCommand,
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput,
} from "./commands/ListEventPredictionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutDetectorCommand, PutDetectorCommandInput, PutDetectorCommandOutput } from "./commands/PutDetectorCommand";
import {
  PutEntityTypeCommand,
  PutEntityTypeCommandInput,
  PutEntityTypeCommandOutput,
} from "./commands/PutEntityTypeCommand";
import {
  PutEventTypeCommand,
  PutEventTypeCommandInput,
  PutEventTypeCommandOutput,
} from "./commands/PutEventTypeCommand";
import {
  PutExternalModelCommand,
  PutExternalModelCommandInput,
  PutExternalModelCommandOutput,
} from "./commands/PutExternalModelCommand";
import {
  PutKMSEncryptionKeyCommand,
  PutKMSEncryptionKeyCommandInput,
  PutKMSEncryptionKeyCommandOutput,
} from "./commands/PutKMSEncryptionKeyCommand";
import { PutLabelCommand, PutLabelCommandInput, PutLabelCommandOutput } from "./commands/PutLabelCommand";
import { PutOutcomeCommand, PutOutcomeCommandInput, PutOutcomeCommandOutput } from "./commands/PutOutcomeCommand";
import { SendEventCommand, SendEventCommandInput, SendEventCommandOutput } from "./commands/SendEventCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDetectorVersionCommand,
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput,
} from "./commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommand,
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput,
} from "./commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommand,
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput,
} from "./commands/UpdateDetectorVersionStatusCommand";
import {
  UpdateEventLabelCommand,
  UpdateEventLabelCommandInput,
  UpdateEventLabelCommandOutput,
} from "./commands/UpdateEventLabelCommand";
import { UpdateListCommand, UpdateListCommandInput, UpdateListCommandOutput } from "./commands/UpdateListCommand";
import { UpdateModelCommand, UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateModelVersionCommand,
  UpdateModelVersionCommandInput,
  UpdateModelVersionCommandOutput,
} from "./commands/UpdateModelVersionCommand";
import {
  UpdateModelVersionStatusCommand,
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
} from "./commands/UpdateModelVersionStatusCommand";
import {
  UpdateRuleMetadataCommand,
  UpdateRuleMetadataCommandInput,
  UpdateRuleMetadataCommandOutput,
} from "./commands/UpdateRuleMetadataCommand";
import {
  UpdateRuleVersionCommand,
  UpdateRuleVersionCommandInput,
  UpdateRuleVersionCommandOutput,
} from "./commands/UpdateRuleVersionCommand";
import {
  UpdateVariableCommand,
  UpdateVariableCommandInput,
  UpdateVariableCommandOutput,
} from "./commands/UpdateVariableCommand";
import { FraudDetectorClient, FraudDetectorClientConfig } from "./FraudDetectorClient";

const commands = {
  BatchCreateVariableCommand,
  BatchGetVariableCommand,
  CancelBatchImportJobCommand,
  CancelBatchPredictionJobCommand,
  CreateBatchImportJobCommand,
  CreateBatchPredictionJobCommand,
  CreateDetectorVersionCommand,
  CreateListCommand,
  CreateModelCommand,
  CreateModelVersionCommand,
  CreateRuleCommand,
  CreateVariableCommand,
  DeleteBatchImportJobCommand,
  DeleteBatchPredictionJobCommand,
  DeleteDetectorCommand,
  DeleteDetectorVersionCommand,
  DeleteEntityTypeCommand,
  DeleteEventCommand,
  DeleteEventsByEventTypeCommand,
  DeleteEventTypeCommand,
  DeleteExternalModelCommand,
  DeleteLabelCommand,
  DeleteListCommand,
  DeleteModelCommand,
  DeleteModelVersionCommand,
  DeleteOutcomeCommand,
  DeleteRuleCommand,
  DeleteVariableCommand,
  DescribeDetectorCommand,
  DescribeModelVersionsCommand,
  GetBatchImportJobsCommand,
  GetBatchPredictionJobsCommand,
  GetDeleteEventsByEventTypeStatusCommand,
  GetDetectorsCommand,
  GetDetectorVersionCommand,
  GetEntityTypesCommand,
  GetEventCommand,
  GetEventPredictionCommand,
  GetEventPredictionMetadataCommand,
  GetEventTypesCommand,
  GetExternalModelsCommand,
  GetKMSEncryptionKeyCommand,
  GetLabelsCommand,
  GetListElementsCommand,
  GetListsMetadataCommand,
  GetModelsCommand,
  GetModelVersionCommand,
  GetOutcomesCommand,
  GetRulesCommand,
  GetVariablesCommand,
  ListEventPredictionsCommand,
  ListTagsForResourceCommand,
  PutDetectorCommand,
  PutEntityTypeCommand,
  PutEventTypeCommand,
  PutExternalModelCommand,
  PutKMSEncryptionKeyCommand,
  PutLabelCommand,
  PutOutcomeCommand,
  SendEventCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDetectorVersionCommand,
  UpdateDetectorVersionMetadataCommand,
  UpdateDetectorVersionStatusCommand,
  UpdateEventLabelCommand,
  UpdateListCommand,
  UpdateModelCommand,
  UpdateModelVersionCommand,
  UpdateModelVersionStatusCommand,
  UpdateRuleMetadataCommand,
  UpdateRuleVersionCommand,
  UpdateVariableCommand,
};

export interface FraudDetector {
  /**
   * @see {@link BatchCreateVariableCommand}
   */
  batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateVariableCommandOutput>;
  batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    cb: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): void;
  batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetVariableCommand}
   */
  batchGetVariable(
    args: BatchGetVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetVariableCommandOutput>;
  batchGetVariable(
    args: BatchGetVariableCommandInput,
    cb: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): void;
  batchGetVariable(
    args: BatchGetVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelBatchImportJobCommand}
   */
  cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBatchImportJobCommandOutput>;
  cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    cb: (err: any, data?: CancelBatchImportJobCommandOutput) => void
  ): void;
  cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBatchImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelBatchPredictionJobCommand}
   */
  cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBatchPredictionJobCommandOutput>;
  cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void
  ): void;
  cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBatchImportJobCommand}
   */
  createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchImportJobCommandOutput>;
  createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    cb: (err: any, data?: CreateBatchImportJobCommandOutput) => void
  ): void;
  createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBatchPredictionJobCommand}
   */
  createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchPredictionJobCommandOutput>;
  createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void
  ): void;
  createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDetectorVersionCommand}
   */
  createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDetectorVersionCommandOutput>;
  createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): void;
  createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateListCommand}
   */
  createList(args: CreateListCommandInput, options?: __HttpHandlerOptions): Promise<CreateListCommandOutput>;
  createList(args: CreateListCommandInput, cb: (err: any, data?: CreateListCommandOutput) => void): void;
  createList(
    args: CreateListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCommand}
   */
  createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelVersionCommand}
   */
  createModelVersion(
    args: CreateModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelVersionCommandOutput>;
  createModelVersion(
    args: CreateModelVersionCommandInput,
    cb: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): void;
  createModelVersion(
    args: CreateModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVariableCommand}
   */
  createVariable(
    args: CreateVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVariableCommandOutput>;
  createVariable(args: CreateVariableCommandInput, cb: (err: any, data?: CreateVariableCommandOutput) => void): void;
  createVariable(
    args: CreateVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchImportJobCommand}
   */
  deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBatchImportJobCommandOutput>;
  deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    cb: (err: any, data?: DeleteBatchImportJobCommandOutput) => void
  ): void;
  deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBatchImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchPredictionJobCommand}
   */
  deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBatchPredictionJobCommandOutput>;
  deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void
  ): void;
  deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDetectorCommand}
   */
  deleteDetector(
    args: DeleteDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorCommandOutput>;
  deleteDetector(args: DeleteDetectorCommandInput, cb: (err: any, data?: DeleteDetectorCommandOutput) => void): void;
  deleteDetector(
    args: DeleteDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDetectorVersionCommand}
   */
  deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorVersionCommandOutput>;
  deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): void;
  deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEntityTypeCommand}
   */
  deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntityTypeCommandOutput>;
  deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void
  ): void;
  deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventCommand}
   */
  deleteEvent(args: DeleteEventCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventCommandOutput>;
  deleteEvent(args: DeleteEventCommandInput, cb: (err: any, data?: DeleteEventCommandOutput) => void): void;
  deleteEvent(
    args: DeleteEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventsByEventTypeCommand}
   */
  deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventsByEventTypeCommandOutput>;
  deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    cb: (err: any, data?: DeleteEventsByEventTypeCommandOutput) => void
  ): void;
  deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventsByEventTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventTypeCommand}
   */
  deleteEventType(
    args: DeleteEventTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventTypeCommandOutput>;
  deleteEventType(args: DeleteEventTypeCommandInput, cb: (err: any, data?: DeleteEventTypeCommandOutput) => void): void;
  deleteEventType(
    args: DeleteEventTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExternalModelCommand}
   */
  deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExternalModelCommandOutput>;
  deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    cb: (err: any, data?: DeleteExternalModelCommandOutput) => void
  ): void;
  deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExternalModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLabelCommand}
   */
  deleteLabel(args: DeleteLabelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLabelCommandOutput>;
  deleteLabel(args: DeleteLabelCommandInput, cb: (err: any, data?: DeleteLabelCommandOutput) => void): void;
  deleteLabel(
    args: DeleteLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteListCommand}
   */
  deleteList(args: DeleteListCommandInput, options?: __HttpHandlerOptions): Promise<DeleteListCommandOutput>;
  deleteList(args: DeleteListCommandInput, cb: (err: any, data?: DeleteListCommandOutput) => void): void;
  deleteList(
    args: DeleteListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelCommand}
   */
  deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelVersionCommand}
   */
  deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelVersionCommandOutput>;
  deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    cb: (err: any, data?: DeleteModelVersionCommandOutput) => void
  ): void;
  deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutcomeCommand}
   */
  deleteOutcome(args: DeleteOutcomeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOutcomeCommandOutput>;
  deleteOutcome(args: DeleteOutcomeCommandInput, cb: (err: any, data?: DeleteOutcomeCommandOutput) => void): void;
  deleteOutcome(
    args: DeleteOutcomeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutcomeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVariableCommand}
   */
  deleteVariable(
    args: DeleteVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVariableCommandOutput>;
  deleteVariable(args: DeleteVariableCommandInput, cb: (err: any, data?: DeleteVariableCommandOutput) => void): void;
  deleteVariable(
    args: DeleteVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDetectorCommand}
   */
  describeDetector(
    args: DescribeDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorCommandOutput>;
  describeDetector(
    args: DescribeDetectorCommandInput,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;
  describeDetector(
    args: DescribeDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelVersionsCommand}
   */
  describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelVersionsCommandOutput>;
  describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): void;
  describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchImportJobsCommand}
   */
  getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchImportJobsCommandOutput>;
  getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    cb: (err: any, data?: GetBatchImportJobsCommandOutput) => void
  ): void;
  getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchPredictionJobsCommand}
   */
  getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchPredictionJobsCommandOutput>;
  getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void
  ): void;
  getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeleteEventsByEventTypeStatusCommand}
   */
  getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeleteEventsByEventTypeStatusCommandOutput>;
  getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    cb: (err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void
  ): void;
  getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDetectorsCommand}
   */
  getDetectors(args: GetDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorsCommandOutput>;
  getDetectors(args: GetDetectorsCommandInput, cb: (err: any, data?: GetDetectorsCommandOutput) => void): void;
  getDetectors(
    args: GetDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDetectorVersionCommand}
   */
  getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDetectorVersionCommandOutput>;
  getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    cb: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): void;
  getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEntityTypesCommand}
   */
  getEntityTypes(
    args: GetEntityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEntityTypesCommandOutput>;
  getEntityTypes(args: GetEntityTypesCommandInput, cb: (err: any, data?: GetEntityTypesCommandOutput) => void): void;
  getEntityTypes(
    args: GetEntityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntityTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventCommand}
   */
  getEvent(args: GetEventCommandInput, options?: __HttpHandlerOptions): Promise<GetEventCommandOutput>;
  getEvent(args: GetEventCommandInput, cb: (err: any, data?: GetEventCommandOutput) => void): void;
  getEvent(
    args: GetEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventPredictionCommand}
   */
  getEventPrediction(
    args: GetEventPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventPredictionCommandOutput>;
  getEventPrediction(
    args: GetEventPredictionCommandInput,
    cb: (err: any, data?: GetEventPredictionCommandOutput) => void
  ): void;
  getEventPrediction(
    args: GetEventPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventPredictionMetadataCommand}
   */
  getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventPredictionMetadataCommandOutput>;
  getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    cb: (err: any, data?: GetEventPredictionMetadataCommandOutput) => void
  ): void;
  getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventPredictionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventTypesCommand}
   */
  getEventTypes(args: GetEventTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetEventTypesCommandOutput>;
  getEventTypes(args: GetEventTypesCommandInput, cb: (err: any, data?: GetEventTypesCommandOutput) => void): void;
  getEventTypes(
    args: GetEventTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExternalModelsCommand}
   */
  getExternalModels(
    args: GetExternalModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExternalModelsCommandOutput>;
  getExternalModels(
    args: GetExternalModelsCommandInput,
    cb: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): void;
  getExternalModels(
    args: GetExternalModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKMSEncryptionKeyCommand}
   */
  getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKMSEncryptionKeyCommandOutput>;
  getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void
  ): void;
  getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLabelsCommand}
   */
  getLabels(args: GetLabelsCommandInput, options?: __HttpHandlerOptions): Promise<GetLabelsCommandOutput>;
  getLabels(args: GetLabelsCommandInput, cb: (err: any, data?: GetLabelsCommandOutput) => void): void;
  getLabels(
    args: GetLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetListElementsCommand}
   */
  getListElements(
    args: GetListElementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetListElementsCommandOutput>;
  getListElements(args: GetListElementsCommandInput, cb: (err: any, data?: GetListElementsCommandOutput) => void): void;
  getListElements(
    args: GetListElementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetListElementsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetListsMetadataCommand}
   */
  getListsMetadata(
    args: GetListsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetListsMetadataCommandOutput>;
  getListsMetadata(
    args: GetListsMetadataCommandInput,
    cb: (err: any, data?: GetListsMetadataCommandOutput) => void
  ): void;
  getListsMetadata(
    args: GetListsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetListsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelsCommand}
   */
  getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
  getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
  getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelVersionCommand}
   */
  getModelVersion(
    args: GetModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelVersionCommandOutput>;
  getModelVersion(args: GetModelVersionCommandInput, cb: (err: any, data?: GetModelVersionCommandOutput) => void): void;
  getModelVersion(
    args: GetModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutcomesCommand}
   */
  getOutcomes(args: GetOutcomesCommandInput, options?: __HttpHandlerOptions): Promise<GetOutcomesCommandOutput>;
  getOutcomes(args: GetOutcomesCommandInput, cb: (err: any, data?: GetOutcomesCommandOutput) => void): void;
  getOutcomes(
    args: GetOutcomesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutcomesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRulesCommand}
   */
  getRules(args: GetRulesCommandInput, options?: __HttpHandlerOptions): Promise<GetRulesCommandOutput>;
  getRules(args: GetRulesCommandInput, cb: (err: any, data?: GetRulesCommandOutput) => void): void;
  getRules(
    args: GetRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariablesCommand}
   */
  getVariables(args: GetVariablesCommandInput, options?: __HttpHandlerOptions): Promise<GetVariablesCommandOutput>;
  getVariables(args: GetVariablesCommandInput, cb: (err: any, data?: GetVariablesCommandOutput) => void): void;
  getVariables(
    args: GetVariablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventPredictionsCommand}
   */
  listEventPredictions(
    args: ListEventPredictionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventPredictionsCommandOutput>;
  listEventPredictions(
    args: ListEventPredictionsCommandInput,
    cb: (err: any, data?: ListEventPredictionsCommandOutput) => void
  ): void;
  listEventPredictions(
    args: ListEventPredictionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventPredictionsCommandOutput) => void
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
   * @see {@link PutDetectorCommand}
   */
  putDetector(args: PutDetectorCommandInput, options?: __HttpHandlerOptions): Promise<PutDetectorCommandOutput>;
  putDetector(args: PutDetectorCommandInput, cb: (err: any, data?: PutDetectorCommandOutput) => void): void;
  putDetector(
    args: PutDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEntityTypeCommand}
   */
  putEntityType(args: PutEntityTypeCommandInput, options?: __HttpHandlerOptions): Promise<PutEntityTypeCommandOutput>;
  putEntityType(args: PutEntityTypeCommandInput, cb: (err: any, data?: PutEntityTypeCommandOutput) => void): void;
  putEntityType(
    args: PutEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventTypeCommand}
   */
  putEventType(args: PutEventTypeCommandInput, options?: __HttpHandlerOptions): Promise<PutEventTypeCommandOutput>;
  putEventType(args: PutEventTypeCommandInput, cb: (err: any, data?: PutEventTypeCommandOutput) => void): void;
  putEventType(
    args: PutEventTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutExternalModelCommand}
   */
  putExternalModel(
    args: PutExternalModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutExternalModelCommandOutput>;
  putExternalModel(
    args: PutExternalModelCommandInput,
    cb: (err: any, data?: PutExternalModelCommandOutput) => void
  ): void;
  putExternalModel(
    args: PutExternalModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutExternalModelCommandOutput) => void
  ): void;

  /**
   * @see {@link PutKMSEncryptionKeyCommand}
   */
  putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutKMSEncryptionKeyCommandOutput>;
  putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void
  ): void;
  putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLabelCommand}
   */
  putLabel(args: PutLabelCommandInput, options?: __HttpHandlerOptions): Promise<PutLabelCommandOutput>;
  putLabel(args: PutLabelCommandInput, cb: (err: any, data?: PutLabelCommandOutput) => void): void;
  putLabel(
    args: PutLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOutcomeCommand}
   */
  putOutcome(args: PutOutcomeCommandInput, options?: __HttpHandlerOptions): Promise<PutOutcomeCommandOutput>;
  putOutcome(args: PutOutcomeCommandInput, cb: (err: any, data?: PutOutcomeCommandOutput) => void): void;
  putOutcome(
    args: PutOutcomeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOutcomeCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEventCommand}
   */
  sendEvent(args: SendEventCommandInput, options?: __HttpHandlerOptions): Promise<SendEventCommandOutput>;
  sendEvent(args: SendEventCommandInput, cb: (err: any, data?: SendEventCommandOutput) => void): void;
  sendEvent(
    args: SendEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEventCommandOutput) => void
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
   * @see {@link UpdateDetectorVersionCommand}
   */
  updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorVersionCommandOutput>;
  updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): void;
  updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDetectorVersionMetadataCommand}
   */
  updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorVersionMetadataCommandOutput>;
  updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): void;
  updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDetectorVersionStatusCommand}
   */
  updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorVersionStatusCommandOutput>;
  updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): void;
  updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventLabelCommand}
   */
  updateEventLabel(
    args: UpdateEventLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventLabelCommandOutput>;
  updateEventLabel(
    args: UpdateEventLabelCommandInput,
    cb: (err: any, data?: UpdateEventLabelCommandOutput) => void
  ): void;
  updateEventLabel(
    args: UpdateEventLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateListCommand}
   */
  updateList(args: UpdateListCommandInput, options?: __HttpHandlerOptions): Promise<UpdateListCommandOutput>;
  updateList(args: UpdateListCommandInput, cb: (err: any, data?: UpdateListCommandOutput) => void): void;
  updateList(
    args: UpdateListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelCommand}
   */
  updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
  updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelVersionCommand}
   */
  updateModelVersion(
    args: UpdateModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelVersionCommandOutput>;
  updateModelVersion(
    args: UpdateModelVersionCommandInput,
    cb: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): void;
  updateModelVersion(
    args: UpdateModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelVersionStatusCommand}
   */
  updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelVersionStatusCommandOutput>;
  updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void
  ): void;
  updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleMetadataCommand}
   */
  updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleMetadataCommandOutput>;
  updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): void;
  updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleVersionCommand}
   */
  updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleVersionCommandOutput>;
  updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): void;
  updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVariableCommand}
   */
  updateVariable(
    args: UpdateVariableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVariableCommandOutput>;
  updateVariable(args: UpdateVariableCommandInput, cb: (err: any, data?: UpdateVariableCommandOutput) => void): void;
  updateVariable(
    args: UpdateVariableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVariableCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
 *          <p>We provide the Query API as well as AWS software development kits (SDK) for Amazon Fraud Detector in Java and Python programming languages.</p>
 *          <p>The Amazon Fraud Detector Query API provides HTTPS requests that use the HTTP verb GET or POST and a Query parameter <code>Action</code>. AWS SDK provides libraries,
 *             sample code, tutorials, and other resources for software developers who prefer to build applications using language-specific APIs instead of submitting a request over
 *             HTTP or HTTPS. These libraries provide basic functions that automatically take care of tasks such as cryptographically signing your requests, retrying requests, and
 *             handling error responses, so that it is easier for you to get started. For more information about the AWS SDKs, go to <a href="https://aws.amazon.com/developer/tools/">Tools to build on AWS</a> page,
 *             scroll down to the <b>SDK</b> section, and choose plus (+) sign to expand the section.
 *             </p>
 */
export class FraudDetector extends FraudDetectorClient implements FraudDetector {}
createAggregatedClient(commands, FraudDetector);
