// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AbortMultipartReadSetUploadCommand,
  AbortMultipartReadSetUploadCommandInput,
  AbortMultipartReadSetUploadCommandOutput,
} from "./commands/AbortMultipartReadSetUploadCommand";
import {
  BatchDeleteReadSetCommand,
  BatchDeleteReadSetCommandInput,
  BatchDeleteReadSetCommandOutput,
} from "./commands/BatchDeleteReadSetCommand";
import {
  CancelAnnotationImportJobCommand,
  CancelAnnotationImportJobCommandInput,
  CancelAnnotationImportJobCommandOutput,
} from "./commands/CancelAnnotationImportJobCommand";
import { CancelRunCommand, CancelRunCommandInput, CancelRunCommandOutput } from "./commands/CancelRunCommand";
import {
  CancelVariantImportJobCommand,
  CancelVariantImportJobCommandInput,
  CancelVariantImportJobCommandOutput,
} from "./commands/CancelVariantImportJobCommand";
import {
  CompleteMultipartReadSetUploadCommand,
  CompleteMultipartReadSetUploadCommandInput,
  CompleteMultipartReadSetUploadCommandOutput,
} from "./commands/CompleteMultipartReadSetUploadCommand";
import {
  CreateAnnotationStoreCommand,
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "./commands/CreateAnnotationStoreCommand";
import {
  CreateMultipartReadSetUploadCommand,
  CreateMultipartReadSetUploadCommandInput,
  CreateMultipartReadSetUploadCommandOutput,
} from "./commands/CreateMultipartReadSetUploadCommand";
import {
  CreateReferenceStoreCommand,
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "./commands/CreateReferenceStoreCommand";
import {
  CreateRunGroupCommand,
  CreateRunGroupCommandInput,
  CreateRunGroupCommandOutput,
} from "./commands/CreateRunGroupCommand";
import {
  CreateSequenceStoreCommand,
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "./commands/CreateSequenceStoreCommand";
import {
  CreateVariantStoreCommand,
  CreateVariantStoreCommandInput,
  CreateVariantStoreCommandOutput,
} from "./commands/CreateVariantStoreCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteAnnotationStoreCommand,
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "./commands/DeleteAnnotationStoreCommand";
import {
  DeleteReferenceCommand,
  DeleteReferenceCommandInput,
  DeleteReferenceCommandOutput,
} from "./commands/DeleteReferenceCommand";
import {
  DeleteReferenceStoreCommand,
  DeleteReferenceStoreCommandInput,
  DeleteReferenceStoreCommandOutput,
} from "./commands/DeleteReferenceStoreCommand";
import { DeleteRunCommand, DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import {
  DeleteRunGroupCommand,
  DeleteRunGroupCommandInput,
  DeleteRunGroupCommandOutput,
} from "./commands/DeleteRunGroupCommand";
import {
  DeleteSequenceStoreCommand,
  DeleteSequenceStoreCommandInput,
  DeleteSequenceStoreCommandOutput,
} from "./commands/DeleteSequenceStoreCommand";
import {
  DeleteVariantStoreCommand,
  DeleteVariantStoreCommandInput,
  DeleteVariantStoreCommandOutput,
} from "./commands/DeleteVariantStoreCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  GetAnnotationImportJobCommand,
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "./commands/GetAnnotationImportJobCommand";
import {
  GetAnnotationStoreCommand,
  GetAnnotationStoreCommandInput,
  GetAnnotationStoreCommandOutput,
} from "./commands/GetAnnotationStoreCommand";
import {
  GetReadSetActivationJobCommand,
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
} from "./commands/GetReadSetActivationJobCommand";
import { GetReadSetCommand, GetReadSetCommandInput, GetReadSetCommandOutput } from "./commands/GetReadSetCommand";
import {
  GetReadSetExportJobCommand,
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
} from "./commands/GetReadSetExportJobCommand";
import {
  GetReadSetImportJobCommand,
  GetReadSetImportJobCommandInput,
  GetReadSetImportJobCommandOutput,
} from "./commands/GetReadSetImportJobCommand";
import {
  GetReadSetMetadataCommand,
  GetReadSetMetadataCommandInput,
  GetReadSetMetadataCommandOutput,
} from "./commands/GetReadSetMetadataCommand";
import {
  GetReferenceCommand,
  GetReferenceCommandInput,
  GetReferenceCommandOutput,
} from "./commands/GetReferenceCommand";
import {
  GetReferenceImportJobCommand,
  GetReferenceImportJobCommandInput,
  GetReferenceImportJobCommandOutput,
} from "./commands/GetReferenceImportJobCommand";
import {
  GetReferenceMetadataCommand,
  GetReferenceMetadataCommandInput,
  GetReferenceMetadataCommandOutput,
} from "./commands/GetReferenceMetadataCommand";
import {
  GetReferenceStoreCommand,
  GetReferenceStoreCommandInput,
  GetReferenceStoreCommandOutput,
} from "./commands/GetReferenceStoreCommand";
import { GetRunCommand, GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetRunGroupCommand, GetRunGroupCommandInput, GetRunGroupCommandOutput } from "./commands/GetRunGroupCommand";
import { GetRunTaskCommand, GetRunTaskCommandInput, GetRunTaskCommandOutput } from "./commands/GetRunTaskCommand";
import {
  GetSequenceStoreCommand,
  GetSequenceStoreCommandInput,
  GetSequenceStoreCommandOutput,
} from "./commands/GetSequenceStoreCommand";
import {
  GetVariantImportJobCommand,
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
} from "./commands/GetVariantImportJobCommand";
import {
  GetVariantStoreCommand,
  GetVariantStoreCommandInput,
  GetVariantStoreCommandOutput,
} from "./commands/GetVariantStoreCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  ListAnnotationImportJobsCommand,
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "./commands/ListAnnotationImportJobsCommand";
import {
  ListAnnotationStoresCommand,
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "./commands/ListAnnotationStoresCommand";
import {
  ListMultipartReadSetUploadsCommand,
  ListMultipartReadSetUploadsCommandInput,
  ListMultipartReadSetUploadsCommandOutput,
} from "./commands/ListMultipartReadSetUploadsCommand";
import {
  ListReadSetActivationJobsCommand,
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "./commands/ListReadSetActivationJobsCommand";
import {
  ListReadSetExportJobsCommand,
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "./commands/ListReadSetExportJobsCommand";
import {
  ListReadSetImportJobsCommand,
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "./commands/ListReadSetImportJobsCommand";
import {
  ListReadSetsCommand,
  ListReadSetsCommandInput,
  ListReadSetsCommandOutput,
} from "./commands/ListReadSetsCommand";
import {
  ListReadSetUploadPartsCommand,
  ListReadSetUploadPartsCommandInput,
  ListReadSetUploadPartsCommandOutput,
} from "./commands/ListReadSetUploadPartsCommand";
import {
  ListReferenceImportJobsCommand,
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "./commands/ListReferenceImportJobsCommand";
import {
  ListReferencesCommand,
  ListReferencesCommandInput,
  ListReferencesCommandOutput,
} from "./commands/ListReferencesCommand";
import {
  ListReferenceStoresCommand,
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "./commands/ListReferenceStoresCommand";
import {
  ListRunGroupsCommand,
  ListRunGroupsCommandInput,
  ListRunGroupsCommandOutput,
} from "./commands/ListRunGroupsCommand";
import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import {
  ListRunTasksCommand,
  ListRunTasksCommandInput,
  ListRunTasksCommandOutput,
} from "./commands/ListRunTasksCommand";
import {
  ListSequenceStoresCommand,
  ListSequenceStoresCommandInput,
  ListSequenceStoresCommandOutput,
} from "./commands/ListSequenceStoresCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVariantImportJobsCommand,
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "./commands/ListVariantImportJobsCommand";
import {
  ListVariantStoresCommand,
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput,
} from "./commands/ListVariantStoresCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  StartAnnotationImportJobCommand,
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
} from "./commands/StartAnnotationImportJobCommand";
import {
  StartReadSetActivationJobCommand,
  StartReadSetActivationJobCommandInput,
  StartReadSetActivationJobCommandOutput,
} from "./commands/StartReadSetActivationJobCommand";
import {
  StartReadSetExportJobCommand,
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
} from "./commands/StartReadSetExportJobCommand";
import {
  StartReadSetImportJobCommand,
  StartReadSetImportJobCommandInput,
  StartReadSetImportJobCommandOutput,
} from "./commands/StartReadSetImportJobCommand";
import {
  StartReferenceImportJobCommand,
  StartReferenceImportJobCommandInput,
  StartReferenceImportJobCommandOutput,
} from "./commands/StartReferenceImportJobCommand";
import { StartRunCommand, StartRunCommandInput, StartRunCommandOutput } from "./commands/StartRunCommand";
import {
  StartVariantImportJobCommand,
  StartVariantImportJobCommandInput,
  StartVariantImportJobCommandOutput,
} from "./commands/StartVariantImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnnotationStoreCommand,
  UpdateAnnotationStoreCommandInput,
  UpdateAnnotationStoreCommandOutput,
} from "./commands/UpdateAnnotationStoreCommand";
import {
  UpdateRunGroupCommand,
  UpdateRunGroupCommandInput,
  UpdateRunGroupCommandOutput,
} from "./commands/UpdateRunGroupCommand";
import {
  UpdateVariantStoreCommand,
  UpdateVariantStoreCommandInput,
  UpdateVariantStoreCommandOutput,
} from "./commands/UpdateVariantStoreCommand";
import {
  UpdateWorkflowCommand,
  UpdateWorkflowCommandInput,
  UpdateWorkflowCommandOutput,
} from "./commands/UpdateWorkflowCommand";
import {
  UploadReadSetPartCommand,
  UploadReadSetPartCommandInput,
  UploadReadSetPartCommandOutput,
} from "./commands/UploadReadSetPartCommand";
import { OmicsClient, OmicsClientConfig } from "./OmicsClient";

const commands = {
  AbortMultipartReadSetUploadCommand,
  BatchDeleteReadSetCommand,
  CancelAnnotationImportJobCommand,
  CancelRunCommand,
  CancelVariantImportJobCommand,
  CompleteMultipartReadSetUploadCommand,
  CreateAnnotationStoreCommand,
  CreateMultipartReadSetUploadCommand,
  CreateReferenceStoreCommand,
  CreateRunGroupCommand,
  CreateSequenceStoreCommand,
  CreateVariantStoreCommand,
  CreateWorkflowCommand,
  DeleteAnnotationStoreCommand,
  DeleteReferenceCommand,
  DeleteReferenceStoreCommand,
  DeleteRunCommand,
  DeleteRunGroupCommand,
  DeleteSequenceStoreCommand,
  DeleteVariantStoreCommand,
  DeleteWorkflowCommand,
  GetAnnotationImportJobCommand,
  GetAnnotationStoreCommand,
  GetReadSetCommand,
  GetReadSetActivationJobCommand,
  GetReadSetExportJobCommand,
  GetReadSetImportJobCommand,
  GetReadSetMetadataCommand,
  GetReferenceCommand,
  GetReferenceImportJobCommand,
  GetReferenceMetadataCommand,
  GetReferenceStoreCommand,
  GetRunCommand,
  GetRunGroupCommand,
  GetRunTaskCommand,
  GetSequenceStoreCommand,
  GetVariantImportJobCommand,
  GetVariantStoreCommand,
  GetWorkflowCommand,
  ListAnnotationImportJobsCommand,
  ListAnnotationStoresCommand,
  ListMultipartReadSetUploadsCommand,
  ListReadSetActivationJobsCommand,
  ListReadSetExportJobsCommand,
  ListReadSetImportJobsCommand,
  ListReadSetsCommand,
  ListReadSetUploadPartsCommand,
  ListReferenceImportJobsCommand,
  ListReferencesCommand,
  ListReferenceStoresCommand,
  ListRunGroupsCommand,
  ListRunsCommand,
  ListRunTasksCommand,
  ListSequenceStoresCommand,
  ListTagsForResourceCommand,
  ListVariantImportJobsCommand,
  ListVariantStoresCommand,
  ListWorkflowsCommand,
  StartAnnotationImportJobCommand,
  StartReadSetActivationJobCommand,
  StartReadSetExportJobCommand,
  StartReadSetImportJobCommand,
  StartReferenceImportJobCommand,
  StartRunCommand,
  StartVariantImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAnnotationStoreCommand,
  UpdateRunGroupCommand,
  UpdateVariantStoreCommand,
  UpdateWorkflowCommand,
  UploadReadSetPartCommand,
};

export interface Omics {
  /**
   * @see {@link AbortMultipartReadSetUploadCommand}
   */
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortMultipartReadSetUploadCommandOutput>;
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: AbortMultipartReadSetUploadCommandOutput) => void
  ): void;
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteReadSetCommand}
   */
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteReadSetCommandOutput>;
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAnnotationImportJobCommand}
   */
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAnnotationImportJobCommandOutput>;
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRunCommand}
   */
  cancelRun(args: CancelRunCommandInput, options?: __HttpHandlerOptions): Promise<CancelRunCommandOutput>;
  cancelRun(args: CancelRunCommandInput, cb: (err: any, data?: CancelRunCommandOutput) => void): void;
  cancelRun(
    args: CancelRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelVariantImportJobCommand}
   */
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelVariantImportJobCommandOutput>;
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteMultipartReadSetUploadCommand}
   */
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteMultipartReadSetUploadCommandOutput>;
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: CompleteMultipartReadSetUploadCommandOutput) => void
  ): void;
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnnotationStoreCommand}
   */
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnnotationStoreCommandOutput>;
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultipartReadSetUploadCommand}
   */
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultipartReadSetUploadCommandOutput>;
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: CreateMultipartReadSetUploadCommandOutput) => void
  ): void;
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReferenceStoreCommand}
   */
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReferenceStoreCommandOutput>;
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRunGroupCommand}
   */
  createRunGroup(
    args: CreateRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRunGroupCommandOutput>;
  createRunGroup(args: CreateRunGroupCommandInput, cb: (err: any, data?: CreateRunGroupCommandOutput) => void): void;
  createRunGroup(
    args: CreateRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSequenceStoreCommand}
   */
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSequenceStoreCommandOutput>;
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVariantStoreCommand}
   */
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVariantStoreCommandOutput>;
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(args: CreateWorkflowCommandInput, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnnotationStoreCommand}
   */
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnnotationStoreCommandOutput>;
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReferenceCommand}
   */
  deleteReference(
    args: DeleteReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReferenceCommandOutput>;
  deleteReference(args: DeleteReferenceCommandInput, cb: (err: any, data?: DeleteReferenceCommandOutput) => void): void;
  deleteReference(
    args: DeleteReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReferenceStoreCommand}
   */
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReferenceStoreCommandOutput>;
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunCommand}
   */
  deleteRun(args: DeleteRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRunCommandOutput>;
  deleteRun(args: DeleteRunCommandInput, cb: (err: any, data?: DeleteRunCommandOutput) => void): void;
  deleteRun(
    args: DeleteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunGroupCommand}
   */
  deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRunGroupCommandOutput>;
  deleteRunGroup(args: DeleteRunGroupCommandInput, cb: (err: any, data?: DeleteRunGroupCommandOutput) => void): void;
  deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSequenceStoreCommand}
   */
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSequenceStoreCommandOutput>;
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVariantStoreCommand}
   */
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVariantStoreCommandOutput>;
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationImportJobCommand}
   */
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnnotationImportJobCommandOutput>;
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationStoreCommand}
   */
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnnotationStoreCommandOutput>;
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetCommand}
   */
  getReadSet(args: GetReadSetCommandInput, options?: __HttpHandlerOptions): Promise<GetReadSetCommandOutput>;
  getReadSet(args: GetReadSetCommandInput, cb: (err: any, data?: GetReadSetCommandOutput) => void): void;
  getReadSet(
    args: GetReadSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetActivationJobCommand}
   */
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetActivationJobCommandOutput>;
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetExportJobCommand}
   */
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetExportJobCommandOutput>;
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetImportJobCommand}
   */
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetImportJobCommandOutput>;
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetMetadataCommand}
   */
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetMetadataCommandOutput>;
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceCommand}
   */
  getReference(args: GetReferenceCommandInput, options?: __HttpHandlerOptions): Promise<GetReferenceCommandOutput>;
  getReference(args: GetReferenceCommandInput, cb: (err: any, data?: GetReferenceCommandOutput) => void): void;
  getReference(
    args: GetReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceImportJobCommand}
   */
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceImportJobCommandOutput>;
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceMetadataCommand}
   */
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceMetadataCommandOutput>;
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceStoreCommand}
   */
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceStoreCommandOutput>;
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunCommand}
   */
  getRun(args: GetRunCommandInput, options?: __HttpHandlerOptions): Promise<GetRunCommandOutput>;
  getRun(args: GetRunCommandInput, cb: (err: any, data?: GetRunCommandOutput) => void): void;
  getRun(
    args: GetRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunGroupCommand}
   */
  getRunGroup(args: GetRunGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetRunGroupCommandOutput>;
  getRunGroup(args: GetRunGroupCommandInput, cb: (err: any, data?: GetRunGroupCommandOutput) => void): void;
  getRunGroup(
    args: GetRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunTaskCommand}
   */
  getRunTask(args: GetRunTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetRunTaskCommandOutput>;
  getRunTask(args: GetRunTaskCommandInput, cb: (err: any, data?: GetRunTaskCommandOutput) => void): void;
  getRunTask(
    args: GetRunTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSequenceStoreCommand}
   */
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSequenceStoreCommandOutput>;
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariantImportJobCommand}
   */
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVariantImportJobCommandOutput>;
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariantStoreCommand}
   */
  getVariantStore(
    args: GetVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVariantStoreCommandOutput>;
  getVariantStore(args: GetVariantStoreCommandInput, cb: (err: any, data?: GetVariantStoreCommandOutput) => void): void;
  getVariantStore(
    args: GetVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationImportJobsCommand}
   */
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnnotationImportJobsCommandOutput>;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationStoresCommand}
   */
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnnotationStoresCommandOutput>;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultipartReadSetUploadsCommand}
   */
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultipartReadSetUploadsCommandOutput>;
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    cb: (err: any, data?: ListMultipartReadSetUploadsCommandOutput) => void
  ): void;
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultipartReadSetUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetActivationJobsCommand}
   */
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetActivationJobsCommandOutput>;
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetExportJobsCommand}
   */
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetExportJobsCommandOutput>;
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetImportJobsCommand}
   */
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetImportJobsCommandOutput>;
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetsCommand}
   */
  listReadSets(args: ListReadSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListReadSetsCommandOutput>;
  listReadSets(args: ListReadSetsCommandInput, cb: (err: any, data?: ListReadSetsCommandOutput) => void): void;
  listReadSets(
    args: ListReadSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetUploadPartsCommand}
   */
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetUploadPartsCommandOutput>;
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    cb: (err: any, data?: ListReadSetUploadPartsCommandOutput) => void
  ): void;
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetUploadPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferenceImportJobsCommand}
   */
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferenceImportJobsCommandOutput>;
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferencesCommand}
   */
  listReferences(
    args: ListReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferencesCommandOutput>;
  listReferences(args: ListReferencesCommandInput, cb: (err: any, data?: ListReferencesCommandOutput) => void): void;
  listReferences(
    args: ListReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferenceStoresCommand}
   */
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferenceStoresCommandOutput>;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunGroupsCommand}
   */
  listRunGroups(args: ListRunGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunGroupsCommandOutput>;
  listRunGroups(args: ListRunGroupsCommandInput, cb: (err: any, data?: ListRunGroupsCommandOutput) => void): void;
  listRunGroups(
    args: ListRunGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunsCommand}
   */
  listRuns(args: ListRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunsCommandOutput>;
  listRuns(args: ListRunsCommandInput, cb: (err: any, data?: ListRunsCommandOutput) => void): void;
  listRuns(
    args: ListRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunTasksCommand}
   */
  listRunTasks(args: ListRunTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListRunTasksCommandOutput>;
  listRunTasks(args: ListRunTasksCommandInput, cb: (err: any, data?: ListRunTasksCommandOutput) => void): void;
  listRunTasks(
    args: ListRunTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSequenceStoresCommand}
   */
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSequenceStoresCommandOutput>;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): void;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
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
   * @see {@link ListVariantImportJobsCommand}
   */
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVariantImportJobsCommandOutput>;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVariantStoresCommand}
   */
  listVariantStores(
    args: ListVariantStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVariantStoresCommandOutput>;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAnnotationImportJobCommand}
   */
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAnnotationImportJobCommandOutput>;
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetActivationJobCommand}
   */
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetActivationJobCommandOutput>;
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetExportJobCommand}
   */
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetExportJobCommandOutput>;
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetImportJobCommand}
   */
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetImportJobCommandOutput>;
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReferenceImportJobCommand}
   */
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReferenceImportJobCommandOutput>;
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRunCommand}
   */
  startRun(args: StartRunCommandInput, options?: __HttpHandlerOptions): Promise<StartRunCommandOutput>;
  startRun(args: StartRunCommandInput, cb: (err: any, data?: StartRunCommandOutput) => void): void;
  startRun(
    args: StartRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVariantImportJobCommand}
   */
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVariantImportJobCommandOutput>;
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
  ): void;
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
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
   * @see {@link UpdateAnnotationStoreCommand}
   */
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnnotationStoreCommandOutput>;
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRunGroupCommand}
   */
  updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRunGroupCommandOutput>;
  updateRunGroup(args: UpdateRunGroupCommandInput, cb: (err: any, data?: UpdateRunGroupCommandOutput) => void): void;
  updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVariantStoreCommand}
   */
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVariantStoreCommandOutput>;
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  updateWorkflow(args: UpdateWorkflowCommandInput, cb: (err: any, data?: UpdateWorkflowCommandOutput) => void): void;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadReadSetPartCommand}
   */
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadReadSetPartCommandOutput>;
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    cb: (err: any, data?: UploadReadSetPartCommandOutput) => void
  ): void;
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadReadSetPartCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the <i>Amazon Omics API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/">What is Amazon Omics?</a> in the
 *       <i>Amazon Omics User Guide</i>.</p>
 */
export class Omics extends OmicsClient implements Omics {}
createAggregatedClient(commands, Omics);
