// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AbortMultipartReadSetUploadCommandInput,
  type AbortMultipartReadSetUploadCommandOutput,
  AbortMultipartReadSetUploadCommand,
} from "./commands/AbortMultipartReadSetUploadCommand";
import {
  type AcceptShareCommandInput,
  type AcceptShareCommandOutput,
  AcceptShareCommand,
} from "./commands/AcceptShareCommand";
import {
  type BatchDeleteReadSetCommandInput,
  type BatchDeleteReadSetCommandOutput,
  BatchDeleteReadSetCommand,
} from "./commands/BatchDeleteReadSetCommand";
import {
  type CancelAnnotationImportJobCommandInput,
  type CancelAnnotationImportJobCommandOutput,
  CancelAnnotationImportJobCommand,
} from "./commands/CancelAnnotationImportJobCommand";
import {
  type CancelRunBatchCommandInput,
  type CancelRunBatchCommandOutput,
  CancelRunBatchCommand,
} from "./commands/CancelRunBatchCommand";
import { type CancelRunCommandInput, type CancelRunCommandOutput, CancelRunCommand } from "./commands/CancelRunCommand";
import {
  type CancelVariantImportJobCommandInput,
  type CancelVariantImportJobCommandOutput,
  CancelVariantImportJobCommand,
} from "./commands/CancelVariantImportJobCommand";
import {
  type CompleteMultipartReadSetUploadCommandInput,
  type CompleteMultipartReadSetUploadCommandOutput,
  CompleteMultipartReadSetUploadCommand,
} from "./commands/CompleteMultipartReadSetUploadCommand";
import {
  type CreateAnnotationStoreCommandInput,
  type CreateAnnotationStoreCommandOutput,
  CreateAnnotationStoreCommand,
} from "./commands/CreateAnnotationStoreCommand";
import {
  type CreateAnnotationStoreVersionCommandInput,
  type CreateAnnotationStoreVersionCommandOutput,
  CreateAnnotationStoreVersionCommand,
} from "./commands/CreateAnnotationStoreVersionCommand";
import {
  type CreateConfigurationCommandInput,
  type CreateConfigurationCommandOutput,
  CreateConfigurationCommand,
} from "./commands/CreateConfigurationCommand";
import {
  type CreateMultipartReadSetUploadCommandInput,
  type CreateMultipartReadSetUploadCommandOutput,
  CreateMultipartReadSetUploadCommand,
} from "./commands/CreateMultipartReadSetUploadCommand";
import {
  type CreateReferenceStoreCommandInput,
  type CreateReferenceStoreCommandOutput,
  CreateReferenceStoreCommand,
} from "./commands/CreateReferenceStoreCommand";
import {
  type CreateRunCacheCommandInput,
  type CreateRunCacheCommandOutput,
  CreateRunCacheCommand,
} from "./commands/CreateRunCacheCommand";
import {
  type CreateRunGroupCommandInput,
  type CreateRunGroupCommandOutput,
  CreateRunGroupCommand,
} from "./commands/CreateRunGroupCommand";
import {
  type CreateSequenceStoreCommandInput,
  type CreateSequenceStoreCommandOutput,
  CreateSequenceStoreCommand,
} from "./commands/CreateSequenceStoreCommand";
import {
  type CreateShareCommandInput,
  type CreateShareCommandOutput,
  CreateShareCommand,
} from "./commands/CreateShareCommand";
import {
  type CreateVariantStoreCommandInput,
  type CreateVariantStoreCommandOutput,
  CreateVariantStoreCommand,
} from "./commands/CreateVariantStoreCommand";
import {
  type CreateWorkflowCommandInput,
  type CreateWorkflowCommandOutput,
  CreateWorkflowCommand,
} from "./commands/CreateWorkflowCommand";
import {
  type CreateWorkflowVersionCommandInput,
  type CreateWorkflowVersionCommandOutput,
  CreateWorkflowVersionCommand,
} from "./commands/CreateWorkflowVersionCommand";
import {
  type DeleteAnnotationStoreCommandInput,
  type DeleteAnnotationStoreCommandOutput,
  DeleteAnnotationStoreCommand,
} from "./commands/DeleteAnnotationStoreCommand";
import {
  type DeleteAnnotationStoreVersionsCommandInput,
  type DeleteAnnotationStoreVersionsCommandOutput,
  DeleteAnnotationStoreVersionsCommand,
} from "./commands/DeleteAnnotationStoreVersionsCommand";
import {
  type DeleteBatchCommandInput,
  type DeleteBatchCommandOutput,
  DeleteBatchCommand,
} from "./commands/DeleteBatchCommand";
import {
  type DeleteConfigurationCommandInput,
  type DeleteConfigurationCommandOutput,
  DeleteConfigurationCommand,
} from "./commands/DeleteConfigurationCommand";
import {
  type DeleteReferenceCommandInput,
  type DeleteReferenceCommandOutput,
  DeleteReferenceCommand,
} from "./commands/DeleteReferenceCommand";
import {
  type DeleteReferenceStoreCommandInput,
  type DeleteReferenceStoreCommandOutput,
  DeleteReferenceStoreCommand,
} from "./commands/DeleteReferenceStoreCommand";
import {
  type DeleteRunBatchCommandInput,
  type DeleteRunBatchCommandOutput,
  DeleteRunBatchCommand,
} from "./commands/DeleteRunBatchCommand";
import {
  type DeleteRunCacheCommandInput,
  type DeleteRunCacheCommandOutput,
  DeleteRunCacheCommand,
} from "./commands/DeleteRunCacheCommand";
import { type DeleteRunCommandInput, type DeleteRunCommandOutput, DeleteRunCommand } from "./commands/DeleteRunCommand";
import {
  type DeleteRunGroupCommandInput,
  type DeleteRunGroupCommandOutput,
  DeleteRunGroupCommand,
} from "./commands/DeleteRunGroupCommand";
import {
  type DeleteS3AccessPolicyCommandInput,
  type DeleteS3AccessPolicyCommandOutput,
  DeleteS3AccessPolicyCommand,
} from "./commands/DeleteS3AccessPolicyCommand";
import {
  type DeleteSequenceStoreCommandInput,
  type DeleteSequenceStoreCommandOutput,
  DeleteSequenceStoreCommand,
} from "./commands/DeleteSequenceStoreCommand";
import {
  type DeleteShareCommandInput,
  type DeleteShareCommandOutput,
  DeleteShareCommand,
} from "./commands/DeleteShareCommand";
import {
  type DeleteVariantStoreCommandInput,
  type DeleteVariantStoreCommandOutput,
  DeleteVariantStoreCommand,
} from "./commands/DeleteVariantStoreCommand";
import {
  type DeleteWorkflowCommandInput,
  type DeleteWorkflowCommandOutput,
  DeleteWorkflowCommand,
} from "./commands/DeleteWorkflowCommand";
import {
  type DeleteWorkflowVersionCommandInput,
  type DeleteWorkflowVersionCommandOutput,
  DeleteWorkflowVersionCommand,
} from "./commands/DeleteWorkflowVersionCommand";
import {
  type GetAnnotationImportJobCommandInput,
  type GetAnnotationImportJobCommandOutput,
  GetAnnotationImportJobCommand,
} from "./commands/GetAnnotationImportJobCommand";
import {
  type GetAnnotationStoreCommandInput,
  type GetAnnotationStoreCommandOutput,
  GetAnnotationStoreCommand,
} from "./commands/GetAnnotationStoreCommand";
import {
  type GetAnnotationStoreVersionCommandInput,
  type GetAnnotationStoreVersionCommandOutput,
  GetAnnotationStoreVersionCommand,
} from "./commands/GetAnnotationStoreVersionCommand";
import { type GetBatchCommandInput, type GetBatchCommandOutput, GetBatchCommand } from "./commands/GetBatchCommand";
import {
  type GetConfigurationCommandInput,
  type GetConfigurationCommandOutput,
  GetConfigurationCommand,
} from "./commands/GetConfigurationCommand";
import {
  type GetReadSetActivationJobCommandInput,
  type GetReadSetActivationJobCommandOutput,
  GetReadSetActivationJobCommand,
} from "./commands/GetReadSetActivationJobCommand";
import {
  type GetReadSetCommandInput,
  type GetReadSetCommandOutput,
  GetReadSetCommand,
} from "./commands/GetReadSetCommand";
import {
  type GetReadSetExportJobCommandInput,
  type GetReadSetExportJobCommandOutput,
  GetReadSetExportJobCommand,
} from "./commands/GetReadSetExportJobCommand";
import {
  type GetReadSetImportJobCommandInput,
  type GetReadSetImportJobCommandOutput,
  GetReadSetImportJobCommand,
} from "./commands/GetReadSetImportJobCommand";
import {
  type GetReadSetMetadataCommandInput,
  type GetReadSetMetadataCommandOutput,
  GetReadSetMetadataCommand,
} from "./commands/GetReadSetMetadataCommand";
import {
  type GetReferenceCommandInput,
  type GetReferenceCommandOutput,
  GetReferenceCommand,
} from "./commands/GetReferenceCommand";
import {
  type GetReferenceImportJobCommandInput,
  type GetReferenceImportJobCommandOutput,
  GetReferenceImportJobCommand,
} from "./commands/GetReferenceImportJobCommand";
import {
  type GetReferenceMetadataCommandInput,
  type GetReferenceMetadataCommandOutput,
  GetReferenceMetadataCommand,
} from "./commands/GetReferenceMetadataCommand";
import {
  type GetReferenceStoreCommandInput,
  type GetReferenceStoreCommandOutput,
  GetReferenceStoreCommand,
} from "./commands/GetReferenceStoreCommand";
import {
  type GetRunCacheCommandInput,
  type GetRunCacheCommandOutput,
  GetRunCacheCommand,
} from "./commands/GetRunCacheCommand";
import { type GetRunCommandInput, type GetRunCommandOutput, GetRunCommand } from "./commands/GetRunCommand";
import {
  type GetRunGroupCommandInput,
  type GetRunGroupCommandOutput,
  GetRunGroupCommand,
} from "./commands/GetRunGroupCommand";
import {
  type GetRunTaskCommandInput,
  type GetRunTaskCommandOutput,
  GetRunTaskCommand,
} from "./commands/GetRunTaskCommand";
import {
  type GetS3AccessPolicyCommandInput,
  type GetS3AccessPolicyCommandOutput,
  GetS3AccessPolicyCommand,
} from "./commands/GetS3AccessPolicyCommand";
import {
  type GetSequenceStoreCommandInput,
  type GetSequenceStoreCommandOutput,
  GetSequenceStoreCommand,
} from "./commands/GetSequenceStoreCommand";
import { type GetShareCommandInput, type GetShareCommandOutput, GetShareCommand } from "./commands/GetShareCommand";
import {
  type GetVariantImportJobCommandInput,
  type GetVariantImportJobCommandOutput,
  GetVariantImportJobCommand,
} from "./commands/GetVariantImportJobCommand";
import {
  type GetVariantStoreCommandInput,
  type GetVariantStoreCommandOutput,
  GetVariantStoreCommand,
} from "./commands/GetVariantStoreCommand";
import {
  type GetWorkflowCommandInput,
  type GetWorkflowCommandOutput,
  GetWorkflowCommand,
} from "./commands/GetWorkflowCommand";
import {
  type GetWorkflowVersionCommandInput,
  type GetWorkflowVersionCommandOutput,
  GetWorkflowVersionCommand,
} from "./commands/GetWorkflowVersionCommand";
import {
  type ListAnnotationImportJobsCommandInput,
  type ListAnnotationImportJobsCommandOutput,
  ListAnnotationImportJobsCommand,
} from "./commands/ListAnnotationImportJobsCommand";
import {
  type ListAnnotationStoresCommandInput,
  type ListAnnotationStoresCommandOutput,
  ListAnnotationStoresCommand,
} from "./commands/ListAnnotationStoresCommand";
import {
  type ListAnnotationStoreVersionsCommandInput,
  type ListAnnotationStoreVersionsCommandOutput,
  ListAnnotationStoreVersionsCommand,
} from "./commands/ListAnnotationStoreVersionsCommand";
import { type ListBatchCommandInput, type ListBatchCommandOutput, ListBatchCommand } from "./commands/ListBatchCommand";
import {
  type ListConfigurationsCommandInput,
  type ListConfigurationsCommandOutput,
  ListConfigurationsCommand,
} from "./commands/ListConfigurationsCommand";
import {
  type ListMultipartReadSetUploadsCommandInput,
  type ListMultipartReadSetUploadsCommandOutput,
  ListMultipartReadSetUploadsCommand,
} from "./commands/ListMultipartReadSetUploadsCommand";
import {
  type ListReadSetActivationJobsCommandInput,
  type ListReadSetActivationJobsCommandOutput,
  ListReadSetActivationJobsCommand,
} from "./commands/ListReadSetActivationJobsCommand";
import {
  type ListReadSetExportJobsCommandInput,
  type ListReadSetExportJobsCommandOutput,
  ListReadSetExportJobsCommand,
} from "./commands/ListReadSetExportJobsCommand";
import {
  type ListReadSetImportJobsCommandInput,
  type ListReadSetImportJobsCommandOutput,
  ListReadSetImportJobsCommand,
} from "./commands/ListReadSetImportJobsCommand";
import {
  type ListReadSetsCommandInput,
  type ListReadSetsCommandOutput,
  ListReadSetsCommand,
} from "./commands/ListReadSetsCommand";
import {
  type ListReadSetUploadPartsCommandInput,
  type ListReadSetUploadPartsCommandOutput,
  ListReadSetUploadPartsCommand,
} from "./commands/ListReadSetUploadPartsCommand";
import {
  type ListReferenceImportJobsCommandInput,
  type ListReferenceImportJobsCommandOutput,
  ListReferenceImportJobsCommand,
} from "./commands/ListReferenceImportJobsCommand";
import {
  type ListReferencesCommandInput,
  type ListReferencesCommandOutput,
  ListReferencesCommand,
} from "./commands/ListReferencesCommand";
import {
  type ListReferenceStoresCommandInput,
  type ListReferenceStoresCommandOutput,
  ListReferenceStoresCommand,
} from "./commands/ListReferenceStoresCommand";
import {
  type ListRunCachesCommandInput,
  type ListRunCachesCommandOutput,
  ListRunCachesCommand,
} from "./commands/ListRunCachesCommand";
import {
  type ListRunGroupsCommandInput,
  type ListRunGroupsCommandOutput,
  ListRunGroupsCommand,
} from "./commands/ListRunGroupsCommand";
import { type ListRunsCommandInput, type ListRunsCommandOutput, ListRunsCommand } from "./commands/ListRunsCommand";
import {
  type ListRunsInBatchCommandInput,
  type ListRunsInBatchCommandOutput,
  ListRunsInBatchCommand,
} from "./commands/ListRunsInBatchCommand";
import {
  type ListRunTasksCommandInput,
  type ListRunTasksCommandOutput,
  ListRunTasksCommand,
} from "./commands/ListRunTasksCommand";
import {
  type ListSequenceStoresCommandInput,
  type ListSequenceStoresCommandOutput,
  ListSequenceStoresCommand,
} from "./commands/ListSequenceStoresCommand";
import {
  type ListSharesCommandInput,
  type ListSharesCommandOutput,
  ListSharesCommand,
} from "./commands/ListSharesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVariantImportJobsCommandInput,
  type ListVariantImportJobsCommandOutput,
  ListVariantImportJobsCommand,
} from "./commands/ListVariantImportJobsCommand";
import {
  type ListVariantStoresCommandInput,
  type ListVariantStoresCommandOutput,
  ListVariantStoresCommand,
} from "./commands/ListVariantStoresCommand";
import {
  type ListWorkflowsCommandInput,
  type ListWorkflowsCommandOutput,
  ListWorkflowsCommand,
} from "./commands/ListWorkflowsCommand";
import {
  type ListWorkflowVersionsCommandInput,
  type ListWorkflowVersionsCommandOutput,
  ListWorkflowVersionsCommand,
} from "./commands/ListWorkflowVersionsCommand";
import {
  type PutS3AccessPolicyCommandInput,
  type PutS3AccessPolicyCommandOutput,
  PutS3AccessPolicyCommand,
} from "./commands/PutS3AccessPolicyCommand";
import {
  type StartAnnotationImportJobCommandInput,
  type StartAnnotationImportJobCommandOutput,
  StartAnnotationImportJobCommand,
} from "./commands/StartAnnotationImportJobCommand";
import {
  type StartReadSetActivationJobCommandInput,
  type StartReadSetActivationJobCommandOutput,
  StartReadSetActivationJobCommand,
} from "./commands/StartReadSetActivationJobCommand";
import {
  type StartReadSetExportJobCommandInput,
  type StartReadSetExportJobCommandOutput,
  StartReadSetExportJobCommand,
} from "./commands/StartReadSetExportJobCommand";
import {
  type StartReadSetImportJobCommandInput,
  type StartReadSetImportJobCommandOutput,
  StartReadSetImportJobCommand,
} from "./commands/StartReadSetImportJobCommand";
import {
  type StartReferenceImportJobCommandInput,
  type StartReferenceImportJobCommandOutput,
  StartReferenceImportJobCommand,
} from "./commands/StartReferenceImportJobCommand";
import {
  type StartRunBatchCommandInput,
  type StartRunBatchCommandOutput,
  StartRunBatchCommand,
} from "./commands/StartRunBatchCommand";
import { type StartRunCommandInput, type StartRunCommandOutput, StartRunCommand } from "./commands/StartRunCommand";
import {
  type StartVariantImportJobCommandInput,
  type StartVariantImportJobCommandOutput,
  StartVariantImportJobCommand,
} from "./commands/StartVariantImportJobCommand";
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
  type UpdateAnnotationStoreCommandInput,
  type UpdateAnnotationStoreCommandOutput,
  UpdateAnnotationStoreCommand,
} from "./commands/UpdateAnnotationStoreCommand";
import {
  type UpdateAnnotationStoreVersionCommandInput,
  type UpdateAnnotationStoreVersionCommandOutput,
  UpdateAnnotationStoreVersionCommand,
} from "./commands/UpdateAnnotationStoreVersionCommand";
import {
  type UpdateRunCacheCommandInput,
  type UpdateRunCacheCommandOutput,
  UpdateRunCacheCommand,
} from "./commands/UpdateRunCacheCommand";
import {
  type UpdateRunGroupCommandInput,
  type UpdateRunGroupCommandOutput,
  UpdateRunGroupCommand,
} from "./commands/UpdateRunGroupCommand";
import {
  type UpdateSequenceStoreCommandInput,
  type UpdateSequenceStoreCommandOutput,
  UpdateSequenceStoreCommand,
} from "./commands/UpdateSequenceStoreCommand";
import {
  type UpdateVariantStoreCommandInput,
  type UpdateVariantStoreCommandOutput,
  UpdateVariantStoreCommand,
} from "./commands/UpdateVariantStoreCommand";
import {
  type UpdateWorkflowCommandInput,
  type UpdateWorkflowCommandOutput,
  UpdateWorkflowCommand,
} from "./commands/UpdateWorkflowCommand";
import {
  type UpdateWorkflowVersionCommandInput,
  type UpdateWorkflowVersionCommandOutput,
  UpdateWorkflowVersionCommand,
} from "./commands/UpdateWorkflowVersionCommand";
import {
  type UploadReadSetPartCommandInput,
  type UploadReadSetPartCommandOutput,
  UploadReadSetPartCommand,
} from "./commands/UploadReadSetPartCommand";
import type { ResourceNotFoundException } from "./models/errors";
import type { OmicsServiceException } from "./models/OmicsServiceException";
import { OmicsClient } from "./OmicsClient";
import { paginateListAnnotationImportJobs } from "./pagination/ListAnnotationImportJobsPaginator";
import { paginateListAnnotationStores } from "./pagination/ListAnnotationStoresPaginator";
import { paginateListAnnotationStoreVersions } from "./pagination/ListAnnotationStoreVersionsPaginator";
import { paginateListBatch } from "./pagination/ListBatchPaginator";
import { paginateListConfigurations } from "./pagination/ListConfigurationsPaginator";
import { paginateListMultipartReadSetUploads } from "./pagination/ListMultipartReadSetUploadsPaginator";
import { paginateListReadSetActivationJobs } from "./pagination/ListReadSetActivationJobsPaginator";
import { paginateListReadSetExportJobs } from "./pagination/ListReadSetExportJobsPaginator";
import { paginateListReadSetImportJobs } from "./pagination/ListReadSetImportJobsPaginator";
import { paginateListReadSets } from "./pagination/ListReadSetsPaginator";
import { paginateListReadSetUploadParts } from "./pagination/ListReadSetUploadPartsPaginator";
import { paginateListReferenceImportJobs } from "./pagination/ListReferenceImportJobsPaginator";
import { paginateListReferences } from "./pagination/ListReferencesPaginator";
import { paginateListReferenceStores } from "./pagination/ListReferenceStoresPaginator";
import { paginateListRunCaches } from "./pagination/ListRunCachesPaginator";
import { paginateListRunGroups } from "./pagination/ListRunGroupsPaginator";
import { paginateListRunsInBatch } from "./pagination/ListRunsInBatchPaginator";
import { paginateListRuns } from "./pagination/ListRunsPaginator";
import { paginateListRunTasks } from "./pagination/ListRunTasksPaginator";
import { paginateListSequenceStores } from "./pagination/ListSequenceStoresPaginator";
import { paginateListShares } from "./pagination/ListSharesPaginator";
import { paginateListVariantImportJobs } from "./pagination/ListVariantImportJobsPaginator";
import { paginateListVariantStores } from "./pagination/ListVariantStoresPaginator";
import { paginateListWorkflows } from "./pagination/ListWorkflowsPaginator";
import { paginateListWorkflowVersions } from "./pagination/ListWorkflowVersionsPaginator";
import { waitUntilAnnotationImportJobCreated } from "./waiters/waitForAnnotationImportJobCreated";
import { waitUntilAnnotationStoreCreated } from "./waiters/waitForAnnotationStoreCreated";
import { waitUntilAnnotationStoreDeleted } from "./waiters/waitForAnnotationStoreDeleted";
import { waitUntilAnnotationStoreVersionCreated } from "./waiters/waitForAnnotationStoreVersionCreated";
import { waitUntilAnnotationStoreVersionDeleted } from "./waiters/waitForAnnotationStoreVersionDeleted";
import { waitUntilReadSetActivationJobCompleted } from "./waiters/waitForReadSetActivationJobCompleted";
import { waitUntilReadSetExportJobCompleted } from "./waiters/waitForReadSetExportJobCompleted";
import { waitUntilReadSetImportJobCompleted } from "./waiters/waitForReadSetImportJobCompleted";
import { waitUntilReferenceImportJobCompleted } from "./waiters/waitForReferenceImportJobCompleted";
import { waitUntilRunCompleted } from "./waiters/waitForRunCompleted";
import { waitUntilRunRunning } from "./waiters/waitForRunRunning";
import { waitUntilTaskCompleted } from "./waiters/waitForTaskCompleted";
import { waitUntilTaskRunning } from "./waiters/waitForTaskRunning";
import { waitUntilVariantImportJobCreated } from "./waiters/waitForVariantImportJobCreated";
import { waitUntilVariantStoreCreated } from "./waiters/waitForVariantStoreCreated";
import { waitUntilVariantStoreDeleted } from "./waiters/waitForVariantStoreDeleted";
import { waitUntilWorkflowActive } from "./waiters/waitForWorkflowActive";
import { waitUntilWorkflowVersionActive } from "./waiters/waitForWorkflowVersionActive";

const commands = {
  AbortMultipartReadSetUploadCommand,
  AcceptShareCommand,
  BatchDeleteReadSetCommand,
  CancelAnnotationImportJobCommand,
  CancelRunCommand,
  CancelRunBatchCommand,
  CancelVariantImportJobCommand,
  CompleteMultipartReadSetUploadCommand,
  CreateAnnotationStoreCommand,
  CreateAnnotationStoreVersionCommand,
  CreateConfigurationCommand,
  CreateMultipartReadSetUploadCommand,
  CreateReferenceStoreCommand,
  CreateRunCacheCommand,
  CreateRunGroupCommand,
  CreateSequenceStoreCommand,
  CreateShareCommand,
  CreateVariantStoreCommand,
  CreateWorkflowCommand,
  CreateWorkflowVersionCommand,
  DeleteAnnotationStoreCommand,
  DeleteAnnotationStoreVersionsCommand,
  DeleteBatchCommand,
  DeleteConfigurationCommand,
  DeleteReferenceCommand,
  DeleteReferenceStoreCommand,
  DeleteRunCommand,
  DeleteRunBatchCommand,
  DeleteRunCacheCommand,
  DeleteRunGroupCommand,
  DeleteS3AccessPolicyCommand,
  DeleteSequenceStoreCommand,
  DeleteShareCommand,
  DeleteVariantStoreCommand,
  DeleteWorkflowCommand,
  DeleteWorkflowVersionCommand,
  GetAnnotationImportJobCommand,
  GetAnnotationStoreCommand,
  GetAnnotationStoreVersionCommand,
  GetBatchCommand,
  GetConfigurationCommand,
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
  GetRunCacheCommand,
  GetRunGroupCommand,
  GetRunTaskCommand,
  GetS3AccessPolicyCommand,
  GetSequenceStoreCommand,
  GetShareCommand,
  GetVariantImportJobCommand,
  GetVariantStoreCommand,
  GetWorkflowCommand,
  GetWorkflowVersionCommand,
  ListAnnotationImportJobsCommand,
  ListAnnotationStoresCommand,
  ListAnnotationStoreVersionsCommand,
  ListBatchCommand,
  ListConfigurationsCommand,
  ListMultipartReadSetUploadsCommand,
  ListReadSetActivationJobsCommand,
  ListReadSetExportJobsCommand,
  ListReadSetImportJobsCommand,
  ListReadSetsCommand,
  ListReadSetUploadPartsCommand,
  ListReferenceImportJobsCommand,
  ListReferencesCommand,
  ListReferenceStoresCommand,
  ListRunCachesCommand,
  ListRunGroupsCommand,
  ListRunsCommand,
  ListRunsInBatchCommand,
  ListRunTasksCommand,
  ListSequenceStoresCommand,
  ListSharesCommand,
  ListTagsForResourceCommand,
  ListVariantImportJobsCommand,
  ListVariantStoresCommand,
  ListWorkflowsCommand,
  ListWorkflowVersionsCommand,
  PutS3AccessPolicyCommand,
  StartAnnotationImportJobCommand,
  StartReadSetActivationJobCommand,
  StartReadSetExportJobCommand,
  StartReadSetImportJobCommand,
  StartReferenceImportJobCommand,
  StartRunCommand,
  StartRunBatchCommand,
  StartVariantImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAnnotationStoreCommand,
  UpdateAnnotationStoreVersionCommand,
  UpdateRunCacheCommand,
  UpdateRunGroupCommand,
  UpdateSequenceStoreCommand,
  UpdateVariantStoreCommand,
  UpdateWorkflowCommand,
  UpdateWorkflowVersionCommand,
  UploadReadSetPartCommand,
};
const paginators = {
  paginateListAnnotationImportJobs,
  paginateListAnnotationStores,
  paginateListAnnotationStoreVersions,
  paginateListBatch,
  paginateListConfigurations,
  paginateListMultipartReadSetUploads,
  paginateListReadSetActivationJobs,
  paginateListReadSetExportJobs,
  paginateListReadSetImportJobs,
  paginateListReadSets,
  paginateListReadSetUploadParts,
  paginateListReferenceImportJobs,
  paginateListReferences,
  paginateListReferenceStores,
  paginateListRunCaches,
  paginateListRunGroups,
  paginateListRuns,
  paginateListRunsInBatch,
  paginateListRunTasks,
  paginateListSequenceStores,
  paginateListShares,
  paginateListVariantImportJobs,
  paginateListVariantStores,
  paginateListWorkflows,
  paginateListWorkflowVersions,
};
const waiters = {
  waitUntilAnnotationImportJobCreated,
  waitUntilAnnotationStoreCreated,
  waitUntilAnnotationStoreDeleted,
  waitUntilAnnotationStoreVersionCreated,
  waitUntilAnnotationStoreVersionDeleted,
  waitUntilReadSetActivationJobCompleted,
  waitUntilReadSetExportJobCompleted,
  waitUntilReadSetImportJobCompleted,
  waitUntilReferenceImportJobCompleted,
  waitUntilRunRunning,
  waitUntilRunCompleted,
  waitUntilTaskRunning,
  waitUntilTaskCompleted,
  waitUntilVariantImportJobCreated,
  waitUntilVariantStoreCreated,
  waitUntilVariantStoreDeleted,
  waitUntilWorkflowActive,
  waitUntilWorkflowVersionActive,
};

/**
 * @public
 */
export interface OmicsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Omics {
  /**
   * @see {@link AbortMultipartReadSetUploadCommand}
   */
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    options?: OmicsRequestOptions
  ): Promise<AbortMultipartReadSetUploadCommandOutput>;
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: AbortMultipartReadSetUploadCommandOutput) => void
  ): void;
  abortMultipartReadSetUpload(
    args: AbortMultipartReadSetUploadCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: AbortMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptShareCommand}
   */
  acceptShare(
    args: AcceptShareCommandInput,
    options?: OmicsRequestOptions
  ): Promise<AcceptShareCommandOutput>;
  acceptShare(
    args: AcceptShareCommandInput,
    cb: (err: any, data?: AcceptShareCommandOutput) => void
  ): void;
  acceptShare(
    args: AcceptShareCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: AcceptShareCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteReadSetCommand}
   */
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options?: OmicsRequestOptions
  ): Promise<BatchDeleteReadSetCommandOutput>;
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;
  batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAnnotationImportJobCommand}
   */
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CancelAnnotationImportJobCommandOutput>;
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;
  cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRunCommand}
   */
  cancelRun(
    args: CancelRunCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CancelRunCommandOutput>;
  cancelRun(
    args: CancelRunCommandInput,
    cb: (err: any, data?: CancelRunCommandOutput) => void
  ): void;
  cancelRun(
    args: CancelRunCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CancelRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRunBatchCommand}
   */
  cancelRunBatch(
    args: CancelRunBatchCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CancelRunBatchCommandOutput>;
  cancelRunBatch(
    args: CancelRunBatchCommandInput,
    cb: (err: any, data?: CancelRunBatchCommandOutput) => void
  ): void;
  cancelRunBatch(
    args: CancelRunBatchCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CancelRunBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelVariantImportJobCommand}
   */
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CancelVariantImportJobCommandOutput>;
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;
  cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteMultipartReadSetUploadCommand}
   */
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CompleteMultipartReadSetUploadCommandOutput>;
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: CompleteMultipartReadSetUploadCommandOutput) => void
  ): void;
  completeMultipartReadSetUpload(
    args: CompleteMultipartReadSetUploadCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CompleteMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnnotationStoreCommand}
   */
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateAnnotationStoreCommandOutput>;
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;
  createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnnotationStoreVersionCommand}
   */
  createAnnotationStoreVersion(
    args: CreateAnnotationStoreVersionCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateAnnotationStoreVersionCommandOutput>;
  createAnnotationStoreVersion(
    args: CreateAnnotationStoreVersionCommandInput,
    cb: (err: any, data?: CreateAnnotationStoreVersionCommandOutput) => void
  ): void;
  createAnnotationStoreVersion(
    args: CreateAnnotationStoreVersionCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateAnnotationStoreVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationCommand}
   */
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateConfigurationCommandOutput>;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultipartReadSetUploadCommand}
   */
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateMultipartReadSetUploadCommandOutput>;
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    cb: (err: any, data?: CreateMultipartReadSetUploadCommandOutput) => void
  ): void;
  createMultipartReadSetUpload(
    args: CreateMultipartReadSetUploadCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateMultipartReadSetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReferenceStoreCommand}
   */
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateReferenceStoreCommandOutput>;
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;
  createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRunCacheCommand}
   */
  createRunCache(
    args: CreateRunCacheCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateRunCacheCommandOutput>;
  createRunCache(
    args: CreateRunCacheCommandInput,
    cb: (err: any, data?: CreateRunCacheCommandOutput) => void
  ): void;
  createRunCache(
    args: CreateRunCacheCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRunGroupCommand}
   */
  createRunGroup(
    args: CreateRunGroupCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateRunGroupCommandOutput>;
  createRunGroup(
    args: CreateRunGroupCommandInput,
    cb: (err: any, data?: CreateRunGroupCommandOutput) => void
  ): void;
  createRunGroup(
    args: CreateRunGroupCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSequenceStoreCommand}
   */
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateSequenceStoreCommandOutput>;
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;
  createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateShareCommand}
   */
  createShare(
    args: CreateShareCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateShareCommandOutput>;
  createShare(
    args: CreateShareCommandInput,
    cb: (err: any, data?: CreateShareCommandOutput) => void
  ): void;
  createShare(
    args: CreateShareCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVariantStoreCommand}
   */
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateVariantStoreCommandOutput>;
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;
  createVariantStore(
    args: CreateVariantStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowVersionCommand}
   */
  createWorkflowVersion(
    args: CreateWorkflowVersionCommandInput,
    options?: OmicsRequestOptions
  ): Promise<CreateWorkflowVersionCommandOutput>;
  createWorkflowVersion(
    args: CreateWorkflowVersionCommandInput,
    cb: (err: any, data?: CreateWorkflowVersionCommandOutput) => void
  ): void;
  createWorkflowVersion(
    args: CreateWorkflowVersionCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: CreateWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnnotationStoreCommand}
   */
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteAnnotationStoreCommandOutput>;
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;
  deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnnotationStoreVersionsCommand}
   */
  deleteAnnotationStoreVersions(
    args: DeleteAnnotationStoreVersionsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteAnnotationStoreVersionsCommandOutput>;
  deleteAnnotationStoreVersions(
    args: DeleteAnnotationStoreVersionsCommandInput,
    cb: (err: any, data?: DeleteAnnotationStoreVersionsCommandOutput) => void
  ): void;
  deleteAnnotationStoreVersions(
    args: DeleteAnnotationStoreVersionsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteAnnotationStoreVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchCommand}
   */
  deleteBatch(
    args: DeleteBatchCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteBatchCommandOutput>;
  deleteBatch(
    args: DeleteBatchCommandInput,
    cb: (err: any, data?: DeleteBatchCommandOutput) => void
  ): void;
  deleteBatch(
    args: DeleteBatchCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationCommand}
   */
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteConfigurationCommandOutput>;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReferenceCommand}
   */
  deleteReference(
    args: DeleteReferenceCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteReferenceCommandOutput>;
  deleteReference(
    args: DeleteReferenceCommandInput,
    cb: (err: any, data?: DeleteReferenceCommandOutput) => void
  ): void;
  deleteReference(
    args: DeleteReferenceCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReferenceStoreCommand}
   */
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteReferenceStoreCommandOutput>;
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;
  deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunCommand}
   */
  deleteRun(
    args: DeleteRunCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteRunCommandOutput>;
  deleteRun(
    args: DeleteRunCommandInput,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;
  deleteRun(
    args: DeleteRunCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunBatchCommand}
   */
  deleteRunBatch(
    args: DeleteRunBatchCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteRunBatchCommandOutput>;
  deleteRunBatch(
    args: DeleteRunBatchCommandInput,
    cb: (err: any, data?: DeleteRunBatchCommandOutput) => void
  ): void;
  deleteRunBatch(
    args: DeleteRunBatchCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteRunBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunCacheCommand}
   */
  deleteRunCache(
    args: DeleteRunCacheCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteRunCacheCommandOutput>;
  deleteRunCache(
    args: DeleteRunCacheCommandInput,
    cb: (err: any, data?: DeleteRunCacheCommandOutput) => void
  ): void;
  deleteRunCache(
    args: DeleteRunCacheCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunGroupCommand}
   */
  deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteRunGroupCommandOutput>;
  deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    cb: (err: any, data?: DeleteRunGroupCommandOutput) => void
  ): void;
  deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteS3AccessPolicyCommand}
   */
  deleteS3AccessPolicy(
    args: DeleteS3AccessPolicyCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteS3AccessPolicyCommandOutput>;
  deleteS3AccessPolicy(
    args: DeleteS3AccessPolicyCommandInput,
    cb: (err: any, data?: DeleteS3AccessPolicyCommandOutput) => void
  ): void;
  deleteS3AccessPolicy(
    args: DeleteS3AccessPolicyCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteS3AccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSequenceStoreCommand}
   */
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteSequenceStoreCommandOutput>;
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;
  deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteShareCommand}
   */
  deleteShare(
    args: DeleteShareCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteShareCommandOutput>;
  deleteShare(
    args: DeleteShareCommandInput,
    cb: (err: any, data?: DeleteShareCommandOutput) => void
  ): void;
  deleteShare(
    args: DeleteShareCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVariantStoreCommand}
   */
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteVariantStoreCommandOutput>;
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;
  deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowVersionCommand}
   */
  deleteWorkflowVersion(
    args: DeleteWorkflowVersionCommandInput,
    options?: OmicsRequestOptions
  ): Promise<DeleteWorkflowVersionCommandOutput>;
  deleteWorkflowVersion(
    args: DeleteWorkflowVersionCommandInput,
    cb: (err: any, data?: DeleteWorkflowVersionCommandOutput) => void
  ): void;
  deleteWorkflowVersion(
    args: DeleteWorkflowVersionCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: DeleteWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationImportJobCommand}
   */
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetAnnotationImportJobCommandOutput>;
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;
  getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationStoreCommand}
   */
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetAnnotationStoreCommandOutput>;
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;
  getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnnotationStoreVersionCommand}
   */
  getAnnotationStoreVersion(
    args: GetAnnotationStoreVersionCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetAnnotationStoreVersionCommandOutput>;
  getAnnotationStoreVersion(
    args: GetAnnotationStoreVersionCommandInput,
    cb: (err: any, data?: GetAnnotationStoreVersionCommandOutput) => void
  ): void;
  getAnnotationStoreVersion(
    args: GetAnnotationStoreVersionCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetAnnotationStoreVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchCommand}
   */
  getBatch(
    args: GetBatchCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetBatchCommandOutput>;
  getBatch(
    args: GetBatchCommandInput,
    cb: (err: any, data?: GetBatchCommandOutput) => void
  ): void;
  getBatch(
    args: GetBatchCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationCommand}
   */
  getConfiguration(
    args: GetConfigurationCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetCommand}
   */
  getReadSet(
    args: GetReadSetCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReadSetCommandOutput>;
  getReadSet(
    args: GetReadSetCommandInput,
    cb: (err: any, data?: GetReadSetCommandOutput) => void
  ): void;
  getReadSet(
    args: GetReadSetCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReadSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetActivationJobCommand}
   */
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReadSetActivationJobCommandOutput>;
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;
  getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetExportJobCommand}
   */
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReadSetExportJobCommandOutput>;
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;
  getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetImportJobCommand}
   */
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReadSetImportJobCommandOutput>;
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;
  getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadSetMetadataCommand}
   */
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReadSetMetadataCommandOutput>;
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;
  getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceCommand}
   */
  getReference(
    args: GetReferenceCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReferenceCommandOutput>;
  getReference(
    args: GetReferenceCommandInput,
    cb: (err: any, data?: GetReferenceCommandOutput) => void
  ): void;
  getReference(
    args: GetReferenceCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceImportJobCommand}
   */
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReferenceImportJobCommandOutput>;
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;
  getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceMetadataCommand}
   */
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReferenceMetadataCommandOutput>;
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;
  getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReferenceStoreCommand}
   */
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetReferenceStoreCommandOutput>;
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;
  getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunCommand}
   */
  getRun(
    args: GetRunCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetRunCommandOutput>;
  getRun(
    args: GetRunCommandInput,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;
  getRun(
    args: GetRunCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunCacheCommand}
   */
  getRunCache(
    args: GetRunCacheCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetRunCacheCommandOutput>;
  getRunCache(
    args: GetRunCacheCommandInput,
    cb: (err: any, data?: GetRunCacheCommandOutput) => void
  ): void;
  getRunCache(
    args: GetRunCacheCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunGroupCommand}
   */
  getRunGroup(
    args: GetRunGroupCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetRunGroupCommandOutput>;
  getRunGroup(
    args: GetRunGroupCommandInput,
    cb: (err: any, data?: GetRunGroupCommandOutput) => void
  ): void;
  getRunGroup(
    args: GetRunGroupCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunTaskCommand}
   */
  getRunTask(
    args: GetRunTaskCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetRunTaskCommandOutput>;
  getRunTask(
    args: GetRunTaskCommandInput,
    cb: (err: any, data?: GetRunTaskCommandOutput) => void
  ): void;
  getRunTask(
    args: GetRunTaskCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetRunTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetS3AccessPolicyCommand}
   */
  getS3AccessPolicy(
    args: GetS3AccessPolicyCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetS3AccessPolicyCommandOutput>;
  getS3AccessPolicy(
    args: GetS3AccessPolicyCommandInput,
    cb: (err: any, data?: GetS3AccessPolicyCommandOutput) => void
  ): void;
  getS3AccessPolicy(
    args: GetS3AccessPolicyCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetS3AccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSequenceStoreCommand}
   */
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetSequenceStoreCommandOutput>;
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;
  getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetShareCommand}
   */
  getShare(
    args: GetShareCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetShareCommandOutput>;
  getShare(
    args: GetShareCommandInput,
    cb: (err: any, data?: GetShareCommandOutput) => void
  ): void;
  getShare(
    args: GetShareCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetShareCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariantImportJobCommand}
   */
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetVariantImportJobCommandOutput>;
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;
  getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVariantStoreCommand}
   */
  getVariantStore(
    args: GetVariantStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetVariantStoreCommandOutput>;
  getVariantStore(
    args: GetVariantStoreCommandInput,
    cb: (err: any, data?: GetVariantStoreCommandOutput) => void
  ): void;
  getVariantStore(
    args: GetVariantStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(
    args: GetWorkflowCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetWorkflowCommandOutput>;
  getWorkflow(
    args: GetWorkflowCommandInput,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowVersionCommand}
   */
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    options?: OmicsRequestOptions
  ): Promise<GetWorkflowVersionCommandOutput>;
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    cb: (err: any, data?: GetWorkflowVersionCommandOutput) => void
  ): void;
  getWorkflowVersion(
    args: GetWorkflowVersionCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: GetWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationImportJobsCommand}
   */
  listAnnotationImportJobs(): Promise<ListAnnotationImportJobsCommandOutput>;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListAnnotationImportJobsCommandOutput>;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;
  listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationStoresCommand}
   */
  listAnnotationStores(): Promise<ListAnnotationStoresCommandOutput>;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListAnnotationStoresCommandOutput>;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;
  listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationStoreVersionsCommand}
   */
  listAnnotationStoreVersions(
    args: ListAnnotationStoreVersionsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListAnnotationStoreVersionsCommandOutput>;
  listAnnotationStoreVersions(
    args: ListAnnotationStoreVersionsCommandInput,
    cb: (err: any, data?: ListAnnotationStoreVersionsCommandOutput) => void
  ): void;
  listAnnotationStoreVersions(
    args: ListAnnotationStoreVersionsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListAnnotationStoreVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBatchCommand}
   */
  listBatch(): Promise<ListBatchCommandOutput>;
  listBatch(
    args: ListBatchCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListBatchCommandOutput>;
  listBatch(
    args: ListBatchCommandInput,
    cb: (err: any, data?: ListBatchCommandOutput) => void
  ): void;
  listBatch(
    args: ListBatchCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultipartReadSetUploadsCommand}
   */
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListMultipartReadSetUploadsCommandOutput>;
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    cb: (err: any, data?: ListMultipartReadSetUploadsCommandOutput) => void
  ): void;
  listMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListMultipartReadSetUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetActivationJobsCommand}
   */
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReadSetActivationJobsCommandOutput>;
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;
  listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetExportJobsCommand}
   */
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReadSetExportJobsCommandOutput>;
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;
  listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetImportJobsCommand}
   */
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReadSetImportJobsCommandOutput>;
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;
  listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetsCommand}
   */
  listReadSets(
    args: ListReadSetsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReadSetsCommandOutput>;
  listReadSets(
    args: ListReadSetsCommandInput,
    cb: (err: any, data?: ListReadSetsCommandOutput) => void
  ): void;
  listReadSets(
    args: ListReadSetsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReadSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadSetUploadPartsCommand}
   */
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReadSetUploadPartsCommandOutput>;
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    cb: (err: any, data?: ListReadSetUploadPartsCommandOutput) => void
  ): void;
  listReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReadSetUploadPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferenceImportJobsCommand}
   */
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReferenceImportJobsCommandOutput>;
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;
  listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferencesCommand}
   */
  listReferences(
    args: ListReferencesCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReferencesCommandOutput>;
  listReferences(
    args: ListReferencesCommandInput,
    cb: (err: any, data?: ListReferencesCommandOutput) => void
  ): void;
  listReferences(
    args: ListReferencesCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReferenceStoresCommand}
   */
  listReferenceStores(): Promise<ListReferenceStoresCommandOutput>;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListReferenceStoresCommandOutput>;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;
  listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunCachesCommand}
   */
  listRunCaches(): Promise<ListRunCachesCommandOutput>;
  listRunCaches(
    args: ListRunCachesCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListRunCachesCommandOutput>;
  listRunCaches(
    args: ListRunCachesCommandInput,
    cb: (err: any, data?: ListRunCachesCommandOutput) => void
  ): void;
  listRunCaches(
    args: ListRunCachesCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListRunCachesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunGroupsCommand}
   */
  listRunGroups(): Promise<ListRunGroupsCommandOutput>;
  listRunGroups(
    args: ListRunGroupsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListRunGroupsCommandOutput>;
  listRunGroups(
    args: ListRunGroupsCommandInput,
    cb: (err: any, data?: ListRunGroupsCommandOutput) => void
  ): void;
  listRunGroups(
    args: ListRunGroupsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListRunGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunsCommand}
   */
  listRuns(): Promise<ListRunsCommandOutput>;
  listRuns(
    args: ListRunsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListRunsCommandOutput>;
  listRuns(
    args: ListRunsCommandInput,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;
  listRuns(
    args: ListRunsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunsInBatchCommand}
   */
  listRunsInBatch(
    args: ListRunsInBatchCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListRunsInBatchCommandOutput>;
  listRunsInBatch(
    args: ListRunsInBatchCommandInput,
    cb: (err: any, data?: ListRunsInBatchCommandOutput) => void
  ): void;
  listRunsInBatch(
    args: ListRunsInBatchCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListRunsInBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunTasksCommand}
   */
  listRunTasks(
    args: ListRunTasksCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListRunTasksCommandOutput>;
  listRunTasks(
    args: ListRunTasksCommandInput,
    cb: (err: any, data?: ListRunTasksCommandOutput) => void
  ): void;
  listRunTasks(
    args: ListRunTasksCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListRunTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSequenceStoresCommand}
   */
  listSequenceStores(): Promise<ListSequenceStoresCommandOutput>;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListSequenceStoresCommandOutput>;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): void;
  listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharesCommand}
   */
  listShares(
    args: ListSharesCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListSharesCommandOutput>;
  listShares(
    args: ListSharesCommandInput,
    cb: (err: any, data?: ListSharesCommandOutput) => void
  ): void;
  listShares(
    args: ListSharesCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVariantImportJobsCommand}
   */
  listVariantImportJobs(): Promise<ListVariantImportJobsCommandOutput>;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListVariantImportJobsCommandOutput>;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;
  listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVariantStoresCommand}
   */
  listVariantStores(): Promise<ListVariantStoresCommandOutput>;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListVariantStoresCommandOutput>;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;
  listVariantStores(
    args: ListVariantStoresCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowVersionsCommand}
   */
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options?: OmicsRequestOptions
  ): Promise<ListWorkflowVersionsCommandOutput>;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutS3AccessPolicyCommand}
   */
  putS3AccessPolicy(
    args: PutS3AccessPolicyCommandInput,
    options?: OmicsRequestOptions
  ): Promise<PutS3AccessPolicyCommandOutput>;
  putS3AccessPolicy(
    args: PutS3AccessPolicyCommandInput,
    cb: (err: any, data?: PutS3AccessPolicyCommandOutput) => void
  ): void;
  putS3AccessPolicy(
    args: PutS3AccessPolicyCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: PutS3AccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAnnotationImportJobCommand}
   */
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartAnnotationImportJobCommandOutput>;
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;
  startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetActivationJobCommand}
   */
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartReadSetActivationJobCommandOutput>;
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;
  startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetExportJobCommand}
   */
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartReadSetExportJobCommandOutput>;
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;
  startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReadSetImportJobCommand}
   */
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartReadSetImportJobCommandOutput>;
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;
  startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReferenceImportJobCommand}
   */
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartReferenceImportJobCommandOutput>;
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;
  startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRunCommand}
   */
  startRun(
    args: StartRunCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartRunCommandOutput>;
  startRun(
    args: StartRunCommandInput,
    cb: (err: any, data?: StartRunCommandOutput) => void
  ): void;
  startRun(
    args: StartRunCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRunBatchCommand}
   */
  startRunBatch(
    args: StartRunBatchCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartRunBatchCommandOutput>;
  startRunBatch(
    args: StartRunBatchCommandInput,
    cb: (err: any, data?: StartRunBatchCommandOutput) => void
  ): void;
  startRunBatch(
    args: StartRunBatchCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartRunBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVariantImportJobCommand}
   */
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options?: OmicsRequestOptions
  ): Promise<StartVariantImportJobCommandOutput>;
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
  ): void;
  startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: OmicsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnnotationStoreCommand}
   */
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateAnnotationStoreCommandOutput>;
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;
  updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnnotationStoreVersionCommand}
   */
  updateAnnotationStoreVersion(
    args: UpdateAnnotationStoreVersionCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateAnnotationStoreVersionCommandOutput>;
  updateAnnotationStoreVersion(
    args: UpdateAnnotationStoreVersionCommandInput,
    cb: (err: any, data?: UpdateAnnotationStoreVersionCommandOutput) => void
  ): void;
  updateAnnotationStoreVersion(
    args: UpdateAnnotationStoreVersionCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateAnnotationStoreVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRunCacheCommand}
   */
  updateRunCache(
    args: UpdateRunCacheCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateRunCacheCommandOutput>;
  updateRunCache(
    args: UpdateRunCacheCommandInput,
    cb: (err: any, data?: UpdateRunCacheCommandOutput) => void
  ): void;
  updateRunCache(
    args: UpdateRunCacheCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateRunCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRunGroupCommand}
   */
  updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateRunGroupCommandOutput>;
  updateRunGroup(
    args: UpdateRunGroupCommandInput,
    cb: (err: any, data?: UpdateRunGroupCommandOutput) => void
  ): void;
  updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateRunGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSequenceStoreCommand}
   */
  updateSequenceStore(
    args: UpdateSequenceStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateSequenceStoreCommandOutput>;
  updateSequenceStore(
    args: UpdateSequenceStoreCommandInput,
    cb: (err: any, data?: UpdateSequenceStoreCommandOutput) => void
  ): void;
  updateSequenceStore(
    args: UpdateSequenceStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateSequenceStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVariantStoreCommand}
   */
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateVariantStoreCommandOutput>;
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;
  updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowVersionCommand}
   */
  updateWorkflowVersion(
    args: UpdateWorkflowVersionCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UpdateWorkflowVersionCommandOutput>;
  updateWorkflowVersion(
    args: UpdateWorkflowVersionCommandInput,
    cb: (err: any, data?: UpdateWorkflowVersionCommandOutput) => void
  ): void;
  updateWorkflowVersion(
    args: UpdateWorkflowVersionCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UpdateWorkflowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadReadSetPartCommand}
   */
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    options?: OmicsRequestOptions
  ): Promise<UploadReadSetPartCommandOutput>;
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    cb: (err: any, data?: UploadReadSetPartCommandOutput) => void
  ): void;
  uploadReadSetPart(
    args: UploadReadSetPartCommandInput,
    options: OmicsRequestOptions,
    cb: (err: any, data?: UploadReadSetPartCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnnotationImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnnotationImportJobsCommandOutput}.
   */
  paginateListAnnotationImportJobs(
    args?: ListAnnotationImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnnotationImportJobsCommandOutput>;

  /**
   * @see {@link ListAnnotationStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnnotationStoresCommandOutput}.
   */
  paginateListAnnotationStores(
    args?: ListAnnotationStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnnotationStoresCommandOutput>;

  /**
   * @see {@link ListAnnotationStoreVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnnotationStoreVersionsCommandOutput}.
   */
  paginateListAnnotationStoreVersions(
    args: ListAnnotationStoreVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnnotationStoreVersionsCommandOutput>;

  /**
   * @see {@link ListBatchCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBatchCommandOutput}.
   */
  paginateListBatch(
    args?: ListBatchCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBatchCommandOutput>;

  /**
   * @see {@link ListConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationsCommandOutput}.
   */
  paginateListConfigurations(
    args?: ListConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationsCommandOutput>;

  /**
   * @see {@link ListMultipartReadSetUploadsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMultipartReadSetUploadsCommandOutput}.
   */
  paginateListMultipartReadSetUploads(
    args: ListMultipartReadSetUploadsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMultipartReadSetUploadsCommandOutput>;

  /**
   * @see {@link ListReadSetActivationJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReadSetActivationJobsCommandOutput}.
   */
  paginateListReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReadSetActivationJobsCommandOutput>;

  /**
   * @see {@link ListReadSetExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReadSetExportJobsCommandOutput}.
   */
  paginateListReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReadSetExportJobsCommandOutput>;

  /**
   * @see {@link ListReadSetImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReadSetImportJobsCommandOutput}.
   */
  paginateListReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReadSetImportJobsCommandOutput>;

  /**
   * @see {@link ListReadSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReadSetsCommandOutput}.
   */
  paginateListReadSets(
    args: ListReadSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReadSetsCommandOutput>;

  /**
   * @see {@link ListReadSetUploadPartsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReadSetUploadPartsCommandOutput}.
   */
  paginateListReadSetUploadParts(
    args: ListReadSetUploadPartsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReadSetUploadPartsCommandOutput>;

  /**
   * @see {@link ListReferenceImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReferenceImportJobsCommandOutput}.
   */
  paginateListReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReferenceImportJobsCommandOutput>;

  /**
   * @see {@link ListReferencesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReferencesCommandOutput}.
   */
  paginateListReferences(
    args: ListReferencesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReferencesCommandOutput>;

  /**
   * @see {@link ListReferenceStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReferenceStoresCommandOutput}.
   */
  paginateListReferenceStores(
    args?: ListReferenceStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReferenceStoresCommandOutput>;

  /**
   * @see {@link ListRunCachesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRunCachesCommandOutput}.
   */
  paginateListRunCaches(
    args?: ListRunCachesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRunCachesCommandOutput>;

  /**
   * @see {@link ListRunGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRunGroupsCommandOutput}.
   */
  paginateListRunGroups(
    args?: ListRunGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRunGroupsCommandOutput>;

  /**
   * @see {@link ListRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRunsCommandOutput}.
   */
  paginateListRuns(
    args?: ListRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRunsCommandOutput>;

  /**
   * @see {@link ListRunsInBatchCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRunsInBatchCommandOutput}.
   */
  paginateListRunsInBatch(
    args: ListRunsInBatchCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRunsInBatchCommandOutput>;

  /**
   * @see {@link ListRunTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRunTasksCommandOutput}.
   */
  paginateListRunTasks(
    args: ListRunTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRunTasksCommandOutput>;

  /**
   * @see {@link ListSequenceStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSequenceStoresCommandOutput}.
   */
  paginateListSequenceStores(
    args?: ListSequenceStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSequenceStoresCommandOutput>;

  /**
   * @see {@link ListSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSharesCommandOutput}.
   */
  paginateListShares(
    args: ListSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSharesCommandOutput>;

  /**
   * @see {@link ListVariantImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVariantImportJobsCommandOutput}.
   */
  paginateListVariantImportJobs(
    args?: ListVariantImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVariantImportJobsCommandOutput>;

  /**
   * @see {@link ListVariantStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVariantStoresCommandOutput}.
   */
  paginateListVariantStores(
    args?: ListVariantStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVariantStoresCommandOutput>;

  /**
   * @see {@link ListWorkflowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowsCommandOutput}.
   */
  paginateListWorkflows(
    args?: ListWorkflowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowsCommandOutput>;

  /**
   * @see {@link ListWorkflowVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowVersionsCommandOutput}.
   */
  paginateListWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowVersionsCommandOutput>;

  /**
   * @see {@link GetAnnotationImportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAnnotationImportJobCreated(
    args: GetAnnotationImportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetAnnotationImportJobCommandOutput>>;

  /**
   * @see {@link GetAnnotationStoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAnnotationStoreCreated(
    args: GetAnnotationStoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetAnnotationStoreCommandOutput>>;

  /**
   * @see {@link GetAnnotationStoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAnnotationStoreDeleted(
    args: GetAnnotationStoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetAnnotationStoreCommandOutput | ResourceNotFoundException>>;

  /**
   * @see {@link GetAnnotationStoreVersionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAnnotationStoreVersionCreated(
    args: GetAnnotationStoreVersionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetAnnotationStoreVersionCommandOutput>>;

  /**
   * @see {@link GetAnnotationStoreVersionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAnnotationStoreVersionDeleted(
    args: GetAnnotationStoreVersionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetAnnotationStoreVersionCommandOutput | ResourceNotFoundException>>;

  /**
   * @see {@link GetReadSetActivationJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilReadSetActivationJobCompleted(
    args: GetReadSetActivationJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetReadSetActivationJobCommandOutput>>;

  /**
   * @see {@link GetReadSetExportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilReadSetExportJobCompleted(
    args: GetReadSetExportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetReadSetExportJobCommandOutput>>;

  /**
   * @see {@link GetReadSetImportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilReadSetImportJobCompleted(
    args: GetReadSetImportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetReadSetImportJobCommandOutput>>;

  /**
   * @see {@link GetReferenceImportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilReferenceImportJobCompleted(
    args: GetReferenceImportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetReferenceImportJobCommandOutput>>;

  /**
   * @see {@link GetRunCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRunRunning(
    args: GetRunCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetRunCommandOutput>>;

  /**
   * @see {@link GetRunCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRunCompleted(
    args: GetRunCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetRunCommandOutput>>;

  /**
   * @see {@link GetRunTaskCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTaskRunning(
    args: GetRunTaskCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetRunTaskCommandOutput>>;

  /**
   * @see {@link GetRunTaskCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilTaskCompleted(
    args: GetRunTaskCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetRunTaskCommandOutput>>;

  /**
   * @see {@link GetVariantImportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilVariantImportJobCreated(
    args: GetVariantImportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetVariantImportJobCommandOutput>>;

  /**
   * @see {@link GetVariantStoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilVariantStoreCreated(
    args: GetVariantStoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetVariantStoreCommandOutput>>;

  /**
   * @see {@link GetVariantStoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilVariantStoreDeleted(
    args: GetVariantStoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetVariantStoreCommandOutput | ResourceNotFoundException>>;

  /**
   * @see {@link GetWorkflowCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWorkflowActive(
    args: GetWorkflowCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetWorkflowCommandOutput>>;

  /**
   * @see {@link GetWorkflowVersionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWorkflowVersionActive(
    args: GetWorkflowVersionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Omics>, "client">
  ): Promise<WaiterResult<GetWorkflowVersionCommandOutput>>;
}

/**
 * <p>Amazon Web Services HealthOmics is a service that helps users such as bioinformaticians, researchers, and scientists to store, query, analyze, and generate insights from genomics and other biological data. It simplifies and accelerates the process of storing and analyzing genomic information for Amazon Web Services.</p> <p>For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/what-is-healthomics.html">What is Amazon Web Services HealthOmics?</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @public
 */
export class Omics extends OmicsClient implements Omics {}
createAggregatedClient(commands, Omics, { paginators, waiters });
