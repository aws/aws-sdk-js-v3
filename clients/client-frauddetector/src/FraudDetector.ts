// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchCreateVariableCommandInput,
  type BatchCreateVariableCommandOutput,
  BatchCreateVariableCommand,
} from "./commands/BatchCreateVariableCommand";
import {
  type BatchGetVariableCommandInput,
  type BatchGetVariableCommandOutput,
  BatchGetVariableCommand,
} from "./commands/BatchGetVariableCommand";
import {
  type CancelBatchImportJobCommandInput,
  type CancelBatchImportJobCommandOutput,
  CancelBatchImportJobCommand,
} from "./commands/CancelBatchImportJobCommand";
import {
  type CancelBatchPredictionJobCommandInput,
  type CancelBatchPredictionJobCommandOutput,
  CancelBatchPredictionJobCommand,
} from "./commands/CancelBatchPredictionJobCommand";
import {
  type CreateBatchImportJobCommandInput,
  type CreateBatchImportJobCommandOutput,
  CreateBatchImportJobCommand,
} from "./commands/CreateBatchImportJobCommand";
import {
  type CreateBatchPredictionJobCommandInput,
  type CreateBatchPredictionJobCommandOutput,
  CreateBatchPredictionJobCommand,
} from "./commands/CreateBatchPredictionJobCommand";
import {
  type CreateDetectorVersionCommandInput,
  type CreateDetectorVersionCommandOutput,
  CreateDetectorVersionCommand,
} from "./commands/CreateDetectorVersionCommand";
import {
  type CreateListCommandInput,
  type CreateListCommandOutput,
  CreateListCommand,
} from "./commands/CreateListCommand";
import {
  type CreateModelCommandInput,
  type CreateModelCommandOutput,
  CreateModelCommand,
} from "./commands/CreateModelCommand";
import {
  type CreateModelVersionCommandInput,
  type CreateModelVersionCommandOutput,
  CreateModelVersionCommand,
} from "./commands/CreateModelVersionCommand";
import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type CreateVariableCommandInput,
  type CreateVariableCommandOutput,
  CreateVariableCommand,
} from "./commands/CreateVariableCommand";
import {
  type DeleteBatchImportJobCommandInput,
  type DeleteBatchImportJobCommandOutput,
  DeleteBatchImportJobCommand,
} from "./commands/DeleteBatchImportJobCommand";
import {
  type DeleteBatchPredictionJobCommandInput,
  type DeleteBatchPredictionJobCommandOutput,
  DeleteBatchPredictionJobCommand,
} from "./commands/DeleteBatchPredictionJobCommand";
import {
  type DeleteDetectorCommandInput,
  type DeleteDetectorCommandOutput,
  DeleteDetectorCommand,
} from "./commands/DeleteDetectorCommand";
import {
  type DeleteDetectorVersionCommandInput,
  type DeleteDetectorVersionCommandOutput,
  DeleteDetectorVersionCommand,
} from "./commands/DeleteDetectorVersionCommand";
import {
  type DeleteEntityTypeCommandInput,
  type DeleteEntityTypeCommandOutput,
  DeleteEntityTypeCommand,
} from "./commands/DeleteEntityTypeCommand";
import {
  type DeleteEventCommandInput,
  type DeleteEventCommandOutput,
  DeleteEventCommand,
} from "./commands/DeleteEventCommand";
import {
  type DeleteEventsByEventTypeCommandInput,
  type DeleteEventsByEventTypeCommandOutput,
  DeleteEventsByEventTypeCommand,
} from "./commands/DeleteEventsByEventTypeCommand";
import {
  type DeleteEventTypeCommandInput,
  type DeleteEventTypeCommandOutput,
  DeleteEventTypeCommand,
} from "./commands/DeleteEventTypeCommand";
import {
  type DeleteExternalModelCommandInput,
  type DeleteExternalModelCommandOutput,
  DeleteExternalModelCommand,
} from "./commands/DeleteExternalModelCommand";
import {
  type DeleteLabelCommandInput,
  type DeleteLabelCommandOutput,
  DeleteLabelCommand,
} from "./commands/DeleteLabelCommand";
import {
  type DeleteListCommandInput,
  type DeleteListCommandOutput,
  DeleteListCommand,
} from "./commands/DeleteListCommand";
import {
  type DeleteModelCommandInput,
  type DeleteModelCommandOutput,
  DeleteModelCommand,
} from "./commands/DeleteModelCommand";
import {
  type DeleteModelVersionCommandInput,
  type DeleteModelVersionCommandOutput,
  DeleteModelVersionCommand,
} from "./commands/DeleteModelVersionCommand";
import {
  type DeleteOutcomeCommandInput,
  type DeleteOutcomeCommandOutput,
  DeleteOutcomeCommand,
} from "./commands/DeleteOutcomeCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DeleteVariableCommandInput,
  type DeleteVariableCommandOutput,
  DeleteVariableCommand,
} from "./commands/DeleteVariableCommand";
import {
  type DescribeDetectorCommandInput,
  type DescribeDetectorCommandOutput,
  DescribeDetectorCommand,
} from "./commands/DescribeDetectorCommand";
import {
  type DescribeModelVersionsCommandInput,
  type DescribeModelVersionsCommandOutput,
  DescribeModelVersionsCommand,
} from "./commands/DescribeModelVersionsCommand";
import {
  type GetBatchImportJobsCommandInput,
  type GetBatchImportJobsCommandOutput,
  GetBatchImportJobsCommand,
} from "./commands/GetBatchImportJobsCommand";
import {
  type GetBatchPredictionJobsCommandInput,
  type GetBatchPredictionJobsCommandOutput,
  GetBatchPredictionJobsCommand,
} from "./commands/GetBatchPredictionJobsCommand";
import {
  type GetDeleteEventsByEventTypeStatusCommandInput,
  type GetDeleteEventsByEventTypeStatusCommandOutput,
  GetDeleteEventsByEventTypeStatusCommand,
} from "./commands/GetDeleteEventsByEventTypeStatusCommand";
import {
  type GetDetectorsCommandInput,
  type GetDetectorsCommandOutput,
  GetDetectorsCommand,
} from "./commands/GetDetectorsCommand";
import {
  type GetDetectorVersionCommandInput,
  type GetDetectorVersionCommandOutput,
  GetDetectorVersionCommand,
} from "./commands/GetDetectorVersionCommand";
import {
  type GetEntityTypesCommandInput,
  type GetEntityTypesCommandOutput,
  GetEntityTypesCommand,
} from "./commands/GetEntityTypesCommand";
import { type GetEventCommandInput, type GetEventCommandOutput, GetEventCommand } from "./commands/GetEventCommand";
import {
  type GetEventPredictionCommandInput,
  type GetEventPredictionCommandOutput,
  GetEventPredictionCommand,
} from "./commands/GetEventPredictionCommand";
import {
  type GetEventPredictionMetadataCommandInput,
  type GetEventPredictionMetadataCommandOutput,
  GetEventPredictionMetadataCommand,
} from "./commands/GetEventPredictionMetadataCommand";
import {
  type GetEventTypesCommandInput,
  type GetEventTypesCommandOutput,
  GetEventTypesCommand,
} from "./commands/GetEventTypesCommand";
import {
  type GetExternalModelsCommandInput,
  type GetExternalModelsCommandOutput,
  GetExternalModelsCommand,
} from "./commands/GetExternalModelsCommand";
import {
  type GetKMSEncryptionKeyCommandInput,
  type GetKMSEncryptionKeyCommandOutput,
  GetKMSEncryptionKeyCommand,
} from "./commands/GetKMSEncryptionKeyCommand";
import { type GetLabelsCommandInput, type GetLabelsCommandOutput, GetLabelsCommand } from "./commands/GetLabelsCommand";
import {
  type GetListElementsCommandInput,
  type GetListElementsCommandOutput,
  GetListElementsCommand,
} from "./commands/GetListElementsCommand";
import {
  type GetListsMetadataCommandInput,
  type GetListsMetadataCommandOutput,
  GetListsMetadataCommand,
} from "./commands/GetListsMetadataCommand";
import { type GetModelsCommandInput, type GetModelsCommandOutput, GetModelsCommand } from "./commands/GetModelsCommand";
import {
  type GetModelVersionCommandInput,
  type GetModelVersionCommandOutput,
  GetModelVersionCommand,
} from "./commands/GetModelVersionCommand";
import {
  type GetOutcomesCommandInput,
  type GetOutcomesCommandOutput,
  GetOutcomesCommand,
} from "./commands/GetOutcomesCommand";
import { type GetRulesCommandInput, type GetRulesCommandOutput, GetRulesCommand } from "./commands/GetRulesCommand";
import {
  type GetVariablesCommandInput,
  type GetVariablesCommandOutput,
  GetVariablesCommand,
} from "./commands/GetVariablesCommand";
import {
  type ListEventPredictionsCommandInput,
  type ListEventPredictionsCommandOutput,
  ListEventPredictionsCommand,
} from "./commands/ListEventPredictionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutDetectorCommandInput,
  type PutDetectorCommandOutput,
  PutDetectorCommand,
} from "./commands/PutDetectorCommand";
import {
  type PutEntityTypeCommandInput,
  type PutEntityTypeCommandOutput,
  PutEntityTypeCommand,
} from "./commands/PutEntityTypeCommand";
import {
  type PutEventTypeCommandInput,
  type PutEventTypeCommandOutput,
  PutEventTypeCommand,
} from "./commands/PutEventTypeCommand";
import {
  type PutExternalModelCommandInput,
  type PutExternalModelCommandOutput,
  PutExternalModelCommand,
} from "./commands/PutExternalModelCommand";
import {
  type PutKMSEncryptionKeyCommandInput,
  type PutKMSEncryptionKeyCommandOutput,
  PutKMSEncryptionKeyCommand,
} from "./commands/PutKMSEncryptionKeyCommand";
import { type PutLabelCommandInput, type PutLabelCommandOutput, PutLabelCommand } from "./commands/PutLabelCommand";
import {
  type PutOutcomeCommandInput,
  type PutOutcomeCommandOutput,
  PutOutcomeCommand,
} from "./commands/PutOutcomeCommand";
import { type SendEventCommandInput, type SendEventCommandOutput, SendEventCommand } from "./commands/SendEventCommand";
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
  type UpdateDetectorVersionCommandInput,
  type UpdateDetectorVersionCommandOutput,
  UpdateDetectorVersionCommand,
} from "./commands/UpdateDetectorVersionCommand";
import {
  type UpdateDetectorVersionMetadataCommandInput,
  type UpdateDetectorVersionMetadataCommandOutput,
  UpdateDetectorVersionMetadataCommand,
} from "./commands/UpdateDetectorVersionMetadataCommand";
import {
  type UpdateDetectorVersionStatusCommandInput,
  type UpdateDetectorVersionStatusCommandOutput,
  UpdateDetectorVersionStatusCommand,
} from "./commands/UpdateDetectorVersionStatusCommand";
import {
  type UpdateEventLabelCommandInput,
  type UpdateEventLabelCommandOutput,
  UpdateEventLabelCommand,
} from "./commands/UpdateEventLabelCommand";
import {
  type UpdateListCommandInput,
  type UpdateListCommandOutput,
  UpdateListCommand,
} from "./commands/UpdateListCommand";
import {
  type UpdateModelCommandInput,
  type UpdateModelCommandOutput,
  UpdateModelCommand,
} from "./commands/UpdateModelCommand";
import {
  type UpdateModelVersionCommandInput,
  type UpdateModelVersionCommandOutput,
  UpdateModelVersionCommand,
} from "./commands/UpdateModelVersionCommand";
import {
  type UpdateModelVersionStatusCommandInput,
  type UpdateModelVersionStatusCommandOutput,
  UpdateModelVersionStatusCommand,
} from "./commands/UpdateModelVersionStatusCommand";
import {
  type UpdateRuleMetadataCommandInput,
  type UpdateRuleMetadataCommandOutput,
  UpdateRuleMetadataCommand,
} from "./commands/UpdateRuleMetadataCommand";
import {
  type UpdateRuleVersionCommandInput,
  type UpdateRuleVersionCommandOutput,
  UpdateRuleVersionCommand,
} from "./commands/UpdateRuleVersionCommand";
import {
  type UpdateVariableCommandInput,
  type UpdateVariableCommandOutput,
  UpdateVariableCommand,
} from "./commands/UpdateVariableCommand";
import { FraudDetectorClient } from "./FraudDetectorClient";
import { paginateDescribeModelVersions } from "./pagination/DescribeModelVersionsPaginator";
import { paginateGetBatchImportJobs } from "./pagination/GetBatchImportJobsPaginator";
import { paginateGetBatchPredictionJobs } from "./pagination/GetBatchPredictionJobsPaginator";
import { paginateGetDetectors } from "./pagination/GetDetectorsPaginator";
import { paginateGetEntityTypes } from "./pagination/GetEntityTypesPaginator";
import { paginateGetEventTypes } from "./pagination/GetEventTypesPaginator";
import { paginateGetExternalModels } from "./pagination/GetExternalModelsPaginator";
import { paginateGetLabels } from "./pagination/GetLabelsPaginator";
import { paginateGetListElements } from "./pagination/GetListElementsPaginator";
import { paginateGetListsMetadata } from "./pagination/GetListsMetadataPaginator";
import { paginateGetModels } from "./pagination/GetModelsPaginator";
import { paginateGetOutcomes } from "./pagination/GetOutcomesPaginator";
import { paginateGetRules } from "./pagination/GetRulesPaginator";
import { paginateGetVariables } from "./pagination/GetVariablesPaginator";
import { paginateListEventPredictions } from "./pagination/ListEventPredictionsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";

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
const paginators = {
  paginateDescribeModelVersions,
  paginateGetBatchImportJobs,
  paginateGetBatchPredictionJobs,
  paginateGetDetectors,
  paginateGetEntityTypes,
  paginateGetEventTypes,
  paginateGetExternalModels,
  paginateGetLabels,
  paginateGetListElements,
  paginateGetListsMetadata,
  paginateGetModels,
  paginateGetOutcomes,
  paginateGetRules,
  paginateGetVariables,
  paginateListEventPredictions,
  paginateListTagsForResource,
};

/**
 * @public
 */
export interface FraudDetectorRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface FraudDetector {
  /**
   * @see {@link BatchCreateVariableCommand}
   */
  batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<BatchCreateVariableCommandOutput>;
  batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    cb: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): void;
  batchCreateVariable(
    args: BatchCreateVariableCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: BatchCreateVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetVariableCommand}
   */
  batchGetVariable(
    args: BatchGetVariableCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<BatchGetVariableCommandOutput>;
  batchGetVariable(
    args: BatchGetVariableCommandInput,
    cb: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): void;
  batchGetVariable(
    args: BatchGetVariableCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: BatchGetVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelBatchImportJobCommand}
   */
  cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CancelBatchImportJobCommandOutput>;
  cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    cb: (err: any, data?: CancelBatchImportJobCommandOutput) => void
  ): void;
  cancelBatchImportJob(
    args: CancelBatchImportJobCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CancelBatchImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelBatchPredictionJobCommand}
   */
  cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CancelBatchPredictionJobCommandOutput>;
  cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void
  ): void;
  cancelBatchPredictionJob(
    args: CancelBatchPredictionJobCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CancelBatchPredictionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBatchImportJobCommand}
   */
  createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateBatchImportJobCommandOutput>;
  createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    cb: (err: any, data?: CreateBatchImportJobCommandOutput) => void
  ): void;
  createBatchImportJob(
    args: CreateBatchImportJobCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateBatchImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBatchPredictionJobCommand}
   */
  createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateBatchPredictionJobCommandOutput>;
  createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void
  ): void;
  createBatchPredictionJob(
    args: CreateBatchPredictionJobCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateBatchPredictionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDetectorVersionCommand}
   */
  createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateDetectorVersionCommandOutput>;
  createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): void;
  createDetectorVersion(
    args: CreateDetectorVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateListCommand}
   */
  createList(
    args: CreateListCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateListCommandOutput>;
  createList(
    args: CreateListCommandInput,
    cb: (err: any, data?: CreateListCommandOutput) => void
  ): void;
  createList(
    args: CreateListCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCommand}
   */
  createModel(
    args: CreateModelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateModelCommandOutput>;
  createModel(
    args: CreateModelCommandInput,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  createModel(
    args: CreateModelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelVersionCommand}
   */
  createModelVersion(
    args: CreateModelVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateModelVersionCommandOutput>;
  createModelVersion(
    args: CreateModelVersionCommandInput,
    cb: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): void;
  createModelVersion(
    args: CreateModelVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(
    args: CreateRuleCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  createRule(
    args: CreateRuleCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVariableCommand}
   */
  createVariable(
    args: CreateVariableCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<CreateVariableCommandOutput>;
  createVariable(
    args: CreateVariableCommandInput,
    cb: (err: any, data?: CreateVariableCommandOutput) => void
  ): void;
  createVariable(
    args: CreateVariableCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: CreateVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchImportJobCommand}
   */
  deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteBatchImportJobCommandOutput>;
  deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    cb: (err: any, data?: DeleteBatchImportJobCommandOutput) => void
  ): void;
  deleteBatchImportJob(
    args: DeleteBatchImportJobCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteBatchImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchPredictionJobCommand}
   */
  deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteBatchPredictionJobCommandOutput>;
  deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void
  ): void;
  deleteBatchPredictionJob(
    args: DeleteBatchPredictionJobCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteBatchPredictionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDetectorCommand}
   */
  deleteDetector(
    args: DeleteDetectorCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteDetectorCommandOutput>;
  deleteDetector(
    args: DeleteDetectorCommandInput,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;
  deleteDetector(
    args: DeleteDetectorCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDetectorVersionCommand}
   */
  deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteDetectorVersionCommandOutput>;
  deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): void;
  deleteDetectorVersion(
    args: DeleteDetectorVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEntityTypeCommand}
   */
  deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteEntityTypeCommandOutput>;
  deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void
  ): void;
  deleteEntityType(
    args: DeleteEntityTypeCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventCommand}
   */
  deleteEvent(
    args: DeleteEventCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteEventCommandOutput>;
  deleteEvent(
    args: DeleteEventCommandInput,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;
  deleteEvent(
    args: DeleteEventCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventsByEventTypeCommand}
   */
  deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteEventsByEventTypeCommandOutput>;
  deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    cb: (err: any, data?: DeleteEventsByEventTypeCommandOutput) => void
  ): void;
  deleteEventsByEventType(
    args: DeleteEventsByEventTypeCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteEventsByEventTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventTypeCommand}
   */
  deleteEventType(
    args: DeleteEventTypeCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteEventTypeCommandOutput>;
  deleteEventType(
    args: DeleteEventTypeCommandInput,
    cb: (err: any, data?: DeleteEventTypeCommandOutput) => void
  ): void;
  deleteEventType(
    args: DeleteEventTypeCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteEventTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExternalModelCommand}
   */
  deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteExternalModelCommandOutput>;
  deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    cb: (err: any, data?: DeleteExternalModelCommandOutput) => void
  ): void;
  deleteExternalModel(
    args: DeleteExternalModelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteExternalModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLabelCommand}
   */
  deleteLabel(
    args: DeleteLabelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteLabelCommandOutput>;
  deleteLabel(
    args: DeleteLabelCommandInput,
    cb: (err: any, data?: DeleteLabelCommandOutput) => void
  ): void;
  deleteLabel(
    args: DeleteLabelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteListCommand}
   */
  deleteList(
    args: DeleteListCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteListCommandOutput>;
  deleteList(
    args: DeleteListCommandInput,
    cb: (err: any, data?: DeleteListCommandOutput) => void
  ): void;
  deleteList(
    args: DeleteListCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelCommand}
   */
  deleteModel(
    args: DeleteModelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteModelCommandOutput>;
  deleteModel(
    args: DeleteModelCommandInput,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelVersionCommand}
   */
  deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteModelVersionCommandOutput>;
  deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    cb: (err: any, data?: DeleteModelVersionCommandOutput) => void
  ): void;
  deleteModelVersion(
    args: DeleteModelVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutcomeCommand}
   */
  deleteOutcome(
    args: DeleteOutcomeCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteOutcomeCommandOutput>;
  deleteOutcome(
    args: DeleteOutcomeCommandInput,
    cb: (err: any, data?: DeleteOutcomeCommandOutput) => void
  ): void;
  deleteOutcome(
    args: DeleteOutcomeCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteOutcomeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVariableCommand}
   */
  deleteVariable(
    args: DeleteVariableCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DeleteVariableCommandOutput>;
  deleteVariable(
    args: DeleteVariableCommandInput,
    cb: (err: any, data?: DeleteVariableCommandOutput) => void
  ): void;
  deleteVariable(
    args: DeleteVariableCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DeleteVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDetectorCommand}
   */
  describeDetector(
    args: DescribeDetectorCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DescribeDetectorCommandOutput>;
  describeDetector(
    args: DescribeDetectorCommandInput,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;
  describeDetector(
    args: DescribeDetectorCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelVersionsCommand}
   */
  describeModelVersions(): Promise<DescribeModelVersionsCommandOutput>;
  describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<DescribeModelVersionsCommandOutput>;
  describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): void;
  describeModelVersions(
    args: DescribeModelVersionsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: DescribeModelVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchImportJobsCommand}
   */
  getBatchImportJobs(): Promise<GetBatchImportJobsCommandOutput>;
  getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetBatchImportJobsCommandOutput>;
  getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    cb: (err: any, data?: GetBatchImportJobsCommandOutput) => void
  ): void;
  getBatchImportJobs(
    args: GetBatchImportJobsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetBatchImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchPredictionJobsCommand}
   */
  getBatchPredictionJobs(): Promise<GetBatchPredictionJobsCommandOutput>;
  getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetBatchPredictionJobsCommandOutput>;
  getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void
  ): void;
  getBatchPredictionJobs(
    args: GetBatchPredictionJobsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetBatchPredictionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeleteEventsByEventTypeStatusCommand}
   */
  getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetDeleteEventsByEventTypeStatusCommandOutput>;
  getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    cb: (err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void
  ): void;
  getDeleteEventsByEventTypeStatus(
    args: GetDeleteEventsByEventTypeStatusCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetDeleteEventsByEventTypeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDetectorsCommand}
   */
  getDetectors(): Promise<GetDetectorsCommandOutput>;
  getDetectors(
    args: GetDetectorsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetDetectorsCommandOutput>;
  getDetectors(
    args: GetDetectorsCommandInput,
    cb: (err: any, data?: GetDetectorsCommandOutput) => void
  ): void;
  getDetectors(
    args: GetDetectorsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDetectorVersionCommand}
   */
  getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetDetectorVersionCommandOutput>;
  getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    cb: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): void;
  getDetectorVersion(
    args: GetDetectorVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEntityTypesCommand}
   */
  getEntityTypes(): Promise<GetEntityTypesCommandOutput>;
  getEntityTypes(
    args: GetEntityTypesCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetEntityTypesCommandOutput>;
  getEntityTypes(
    args: GetEntityTypesCommandInput,
    cb: (err: any, data?: GetEntityTypesCommandOutput) => void
  ): void;
  getEntityTypes(
    args: GetEntityTypesCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetEntityTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventCommand}
   */
  getEvent(
    args: GetEventCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetEventCommandOutput>;
  getEvent(
    args: GetEventCommandInput,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;
  getEvent(
    args: GetEventCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventPredictionCommand}
   */
  getEventPrediction(
    args: GetEventPredictionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetEventPredictionCommandOutput>;
  getEventPrediction(
    args: GetEventPredictionCommandInput,
    cb: (err: any, data?: GetEventPredictionCommandOutput) => void
  ): void;
  getEventPrediction(
    args: GetEventPredictionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetEventPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventPredictionMetadataCommand}
   */
  getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetEventPredictionMetadataCommandOutput>;
  getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    cb: (err: any, data?: GetEventPredictionMetadataCommandOutput) => void
  ): void;
  getEventPredictionMetadata(
    args: GetEventPredictionMetadataCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetEventPredictionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventTypesCommand}
   */
  getEventTypes(): Promise<GetEventTypesCommandOutput>;
  getEventTypes(
    args: GetEventTypesCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetEventTypesCommandOutput>;
  getEventTypes(
    args: GetEventTypesCommandInput,
    cb: (err: any, data?: GetEventTypesCommandOutput) => void
  ): void;
  getEventTypes(
    args: GetEventTypesCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetEventTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExternalModelsCommand}
   */
  getExternalModels(): Promise<GetExternalModelsCommandOutput>;
  getExternalModels(
    args: GetExternalModelsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetExternalModelsCommandOutput>;
  getExternalModels(
    args: GetExternalModelsCommandInput,
    cb: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): void;
  getExternalModels(
    args: GetExternalModelsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetExternalModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKMSEncryptionKeyCommand}
   */
  getKMSEncryptionKey(): Promise<GetKMSEncryptionKeyCommandOutput>;
  getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetKMSEncryptionKeyCommandOutput>;
  getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void
  ): void;
  getKMSEncryptionKey(
    args: GetKMSEncryptionKeyCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetKMSEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLabelsCommand}
   */
  getLabels(): Promise<GetLabelsCommandOutput>;
  getLabels(
    args: GetLabelsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetLabelsCommandOutput>;
  getLabels(
    args: GetLabelsCommandInput,
    cb: (err: any, data?: GetLabelsCommandOutput) => void
  ): void;
  getLabels(
    args: GetLabelsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetListElementsCommand}
   */
  getListElements(
    args: GetListElementsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetListElementsCommandOutput>;
  getListElements(
    args: GetListElementsCommandInput,
    cb: (err: any, data?: GetListElementsCommandOutput) => void
  ): void;
  getListElements(
    args: GetListElementsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetListElementsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetListsMetadataCommand}
   */
  getListsMetadata(): Promise<GetListsMetadataCommandOutput>;
  getListsMetadata(
    args: GetListsMetadataCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetListsMetadataCommandOutput>;
  getListsMetadata(
    args: GetListsMetadataCommandInput,
    cb: (err: any, data?: GetListsMetadataCommandOutput) => void
  ): void;
  getListsMetadata(
    args: GetListsMetadataCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetListsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelsCommand}
   */
  getModels(): Promise<GetModelsCommandOutput>;
  getModels(
    args: GetModelsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetModelsCommandOutput>;
  getModels(
    args: GetModelsCommandInput,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  getModels(
    args: GetModelsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelVersionCommand}
   */
  getModelVersion(
    args: GetModelVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetModelVersionCommandOutput>;
  getModelVersion(
    args: GetModelVersionCommandInput,
    cb: (err: any, data?: GetModelVersionCommandOutput) => void
  ): void;
  getModelVersion(
    args: GetModelVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutcomesCommand}
   */
  getOutcomes(): Promise<GetOutcomesCommandOutput>;
  getOutcomes(
    args: GetOutcomesCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetOutcomesCommandOutput>;
  getOutcomes(
    args: GetOutcomesCommandInput,
    cb: (err: any, data?: GetOutcomesCommandOutput) => void
  ): void;
  getOutcomes(
    args: GetOutcomesCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetOutcomesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRulesCommand}
   */
  getRules(
    args: GetRulesCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetRulesCommandOutput>;
  getRules(
    args: GetRulesCommandInput,
    cb: (err: any, data?: GetRulesCommandOutput) => void
  ): void;
  getRules(
    args: GetRulesCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariablesCommand}
   */
  getVariables(): Promise<GetVariablesCommandOutput>;
  getVariables(
    args: GetVariablesCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<GetVariablesCommandOutput>;
  getVariables(
    args: GetVariablesCommandInput,
    cb: (err: any, data?: GetVariablesCommandOutput) => void
  ): void;
  getVariables(
    args: GetVariablesCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: GetVariablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventPredictionsCommand}
   */
  listEventPredictions(): Promise<ListEventPredictionsCommandOutput>;
  listEventPredictions(
    args: ListEventPredictionsCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<ListEventPredictionsCommandOutput>;
  listEventPredictions(
    args: ListEventPredictionsCommandInput,
    cb: (err: any, data?: ListEventPredictionsCommandOutput) => void
  ): void;
  listEventPredictions(
    args: ListEventPredictionsCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: ListEventPredictionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDetectorCommand}
   */
  putDetector(
    args: PutDetectorCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<PutDetectorCommandOutput>;
  putDetector(
    args: PutDetectorCommandInput,
    cb: (err: any, data?: PutDetectorCommandOutput) => void
  ): void;
  putDetector(
    args: PutDetectorCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: PutDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEntityTypeCommand}
   */
  putEntityType(
    args: PutEntityTypeCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<PutEntityTypeCommandOutput>;
  putEntityType(
    args: PutEntityTypeCommandInput,
    cb: (err: any, data?: PutEntityTypeCommandOutput) => void
  ): void;
  putEntityType(
    args: PutEntityTypeCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: PutEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventTypeCommand}
   */
  putEventType(
    args: PutEventTypeCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<PutEventTypeCommandOutput>;
  putEventType(
    args: PutEventTypeCommandInput,
    cb: (err: any, data?: PutEventTypeCommandOutput) => void
  ): void;
  putEventType(
    args: PutEventTypeCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: PutEventTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutExternalModelCommand}
   */
  putExternalModel(
    args: PutExternalModelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<PutExternalModelCommandOutput>;
  putExternalModel(
    args: PutExternalModelCommandInput,
    cb: (err: any, data?: PutExternalModelCommandOutput) => void
  ): void;
  putExternalModel(
    args: PutExternalModelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: PutExternalModelCommandOutput) => void
  ): void;

  /**
   * @see {@link PutKMSEncryptionKeyCommand}
   */
  putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<PutKMSEncryptionKeyCommandOutput>;
  putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void
  ): void;
  putKMSEncryptionKey(
    args: PutKMSEncryptionKeyCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: PutKMSEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLabelCommand}
   */
  putLabel(
    args: PutLabelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<PutLabelCommandOutput>;
  putLabel(
    args: PutLabelCommandInput,
    cb: (err: any, data?: PutLabelCommandOutput) => void
  ): void;
  putLabel(
    args: PutLabelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: PutLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOutcomeCommand}
   */
  putOutcome(
    args: PutOutcomeCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<PutOutcomeCommandOutput>;
  putOutcome(
    args: PutOutcomeCommandInput,
    cb: (err: any, data?: PutOutcomeCommandOutput) => void
  ): void;
  putOutcome(
    args: PutOutcomeCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: PutOutcomeCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEventCommand}
   */
  sendEvent(
    args: SendEventCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<SendEventCommandOutput>;
  sendEvent(
    args: SendEventCommandInput,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;
  sendEvent(
    args: SendEventCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDetectorVersionCommand}
   */
  updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateDetectorVersionCommandOutput>;
  updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): void;
  updateDetectorVersion(
    args: UpdateDetectorVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateDetectorVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDetectorVersionMetadataCommand}
   */
  updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateDetectorVersionMetadataCommandOutput>;
  updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): void;
  updateDetectorVersionMetadata(
    args: UpdateDetectorVersionMetadataCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateDetectorVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDetectorVersionStatusCommand}
   */
  updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateDetectorVersionStatusCommandOutput>;
  updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): void;
  updateDetectorVersionStatus(
    args: UpdateDetectorVersionStatusCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateDetectorVersionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventLabelCommand}
   */
  updateEventLabel(
    args: UpdateEventLabelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateEventLabelCommandOutput>;
  updateEventLabel(
    args: UpdateEventLabelCommandInput,
    cb: (err: any, data?: UpdateEventLabelCommandOutput) => void
  ): void;
  updateEventLabel(
    args: UpdateEventLabelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateEventLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateListCommand}
   */
  updateList(
    args: UpdateListCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateListCommandOutput>;
  updateList(
    args: UpdateListCommandInput,
    cb: (err: any, data?: UpdateListCommandOutput) => void
  ): void;
  updateList(
    args: UpdateListCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelCommand}
   */
  updateModel(
    args: UpdateModelCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateModelCommandOutput>;
  updateModel(
    args: UpdateModelCommandInput,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelVersionCommand}
   */
  updateModelVersion(
    args: UpdateModelVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateModelVersionCommandOutput>;
  updateModelVersion(
    args: UpdateModelVersionCommandInput,
    cb: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): void;
  updateModelVersion(
    args: UpdateModelVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelVersionStatusCommand}
   */
  updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateModelVersionStatusCommandOutput>;
  updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void
  ): void;
  updateModelVersionStatus(
    args: UpdateModelVersionStatusCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateModelVersionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleMetadataCommand}
   */
  updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateRuleMetadataCommandOutput>;
  updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): void;
  updateRuleMetadata(
    args: UpdateRuleMetadataCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateRuleMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleVersionCommand}
   */
  updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateRuleVersionCommandOutput>;
  updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): void;
  updateRuleVersion(
    args: UpdateRuleVersionCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateRuleVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVariableCommand}
   */
  updateVariable(
    args: UpdateVariableCommandInput,
    options?: FraudDetectorRequestOptions
  ): Promise<UpdateVariableCommandOutput>;
  updateVariable(
    args: UpdateVariableCommandInput,
    cb: (err: any, data?: UpdateVariableCommandOutput) => void
  ): void;
  updateVariable(
    args: UpdateVariableCommandInput,
    options: FraudDetectorRequestOptions,
    cb: (err: any, data?: UpdateVariableCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeModelVersionsCommandOutput}.
   */
  paginateDescribeModelVersions(
    args?: DescribeModelVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeModelVersionsCommandOutput>;

  /**
   * @see {@link GetBatchImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetBatchImportJobsCommandOutput}.
   */
  paginateGetBatchImportJobs(
    args?: GetBatchImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetBatchImportJobsCommandOutput>;

  /**
   * @see {@link GetBatchPredictionJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetBatchPredictionJobsCommandOutput}.
   */
  paginateGetBatchPredictionJobs(
    args?: GetBatchPredictionJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetBatchPredictionJobsCommandOutput>;

  /**
   * @see {@link GetDetectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetDetectorsCommandOutput}.
   */
  paginateGetDetectors(
    args?: GetDetectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetDetectorsCommandOutput>;

  /**
   * @see {@link GetEntityTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEntityTypesCommandOutput}.
   */
  paginateGetEntityTypes(
    args?: GetEntityTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEntityTypesCommandOutput>;

  /**
   * @see {@link GetEventTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEventTypesCommandOutput}.
   */
  paginateGetEventTypes(
    args?: GetEventTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEventTypesCommandOutput>;

  /**
   * @see {@link GetExternalModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetExternalModelsCommandOutput}.
   */
  paginateGetExternalModels(
    args?: GetExternalModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetExternalModelsCommandOutput>;

  /**
   * @see {@link GetLabelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetLabelsCommandOutput}.
   */
  paginateGetLabels(
    args?: GetLabelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetLabelsCommandOutput>;

  /**
   * @see {@link GetListElementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetListElementsCommandOutput}.
   */
  paginateGetListElements(
    args: GetListElementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetListElementsCommandOutput>;

  /**
   * @see {@link GetListsMetadataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetListsMetadataCommandOutput}.
   */
  paginateGetListsMetadata(
    args?: GetListsMetadataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetListsMetadataCommandOutput>;

  /**
   * @see {@link GetModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetModelsCommandOutput}.
   */
  paginateGetModels(
    args?: GetModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetModelsCommandOutput>;

  /**
   * @see {@link GetOutcomesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetOutcomesCommandOutput}.
   */
  paginateGetOutcomes(
    args?: GetOutcomesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetOutcomesCommandOutput>;

  /**
   * @see {@link GetRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetRulesCommandOutput}.
   */
  paginateGetRules(
    args: GetRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetRulesCommandOutput>;

  /**
   * @see {@link GetVariablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetVariablesCommandOutput}.
   */
  paginateGetVariables(
    args?: GetVariablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetVariablesCommandOutput>;

  /**
   * @see {@link ListEventPredictionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventPredictionsCommandOutput}.
   */
  paginateListEventPredictions(
    args?: ListEventPredictionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventPredictionsCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;
}

/**
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
 * @public
 */
export class FraudDetector extends FraudDetectorClient implements FraudDetector {}
createAggregatedClient(commands, FraudDetector, { paginators });
