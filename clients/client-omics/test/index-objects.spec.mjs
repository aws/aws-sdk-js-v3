import {
  AbortMultipartReadSetUploadCommand,
  Accelerators,
  AcceptShareCommand,
  AccessDeniedException,
  AnnotationType,
  BatchDeleteReadSetCommand,
  CacheBehavior,
  CancelAnnotationImportJobCommand,
  CancelRunCommand,
  CancelVariantImportJobCommand,
  CompleteMultipartReadSetUploadCommand,
  ConflictException,
  CreateAnnotationStoreCommand,
  CreateAnnotationStoreVersionCommand,
  CreateMultipartReadSetUploadCommand,
  CreateReferenceStoreCommand,
  CreateRunCacheCommand,
  CreateRunGroupCommand,
  CreateSequenceStoreCommand,
  CreateShareCommand,
  CreateVariantStoreCommand,
  CreateWorkflowCommand,
  CreateWorkflowVersionCommand,
  CreationType,
  DeleteAnnotationStoreCommand,
  DeleteAnnotationStoreVersionsCommand,
  DeleteReferenceCommand,
  DeleteReferenceStoreCommand,
  DeleteRunCacheCommand,
  DeleteRunCommand,
  DeleteRunGroupCommand,
  DeleteS3AccessPolicyCommand,
  DeleteSequenceStoreCommand,
  DeleteShareCommand,
  DeleteVariantStoreCommand,
  DeleteWorkflowCommand,
  DeleteWorkflowVersionCommand,
  ETagAlgorithm,
  ETagAlgorithmFamily,
  EncryptionType,
  FileType,
  FormatToHeaderKey,
  GetAnnotationImportJobCommand,
  GetAnnotationStoreCommand,
  GetAnnotationStoreVersionCommand,
  GetReadSetActivationJobCommand,
  GetReadSetCommand,
  GetReadSetExportJobCommand,
  GetReadSetImportJobCommand,
  GetReadSetMetadataCommand,
  GetReferenceCommand,
  GetReferenceImportJobCommand,
  GetReferenceMetadataCommand,
  GetReferenceStoreCommand,
  GetRunCacheCommand,
  GetRunCommand,
  GetRunGroupCommand,
  GetRunTaskCommand,
  GetS3AccessPolicyCommand,
  GetSequenceStoreCommand,
  GetShareCommand,
  GetVariantImportJobCommand,
  GetVariantStoreCommand,
  GetWorkflowCommand,
  GetWorkflowVersionCommand,
  InternalServerException,
  JobStatus,
  ListAnnotationImportJobsCommand,
  ListAnnotationStoreVersionsCommand,
  ListAnnotationStoresCommand,
  ListMultipartReadSetUploadsCommand,
  ListReadSetActivationJobsCommand,
  ListReadSetExportJobsCommand,
  ListReadSetImportJobsCommand,
  ListReadSetUploadPartsCommand,
  ListReadSetsCommand,
  ListReferenceImportJobsCommand,
  ListReferenceStoresCommand,
  ListReferencesCommand,
  ListRunCachesCommand,
  ListRunGroupsCommand,
  ListRunTasksCommand,
  ListRunsCommand,
  ListSequenceStoresCommand,
  ListSharesCommand,
  ListTagsForResourceCommand,
  ListVariantImportJobsCommand,
  ListVariantStoresCommand,
  ListWorkflowVersionsCommand,
  ListWorkflowsCommand,
  NotSupportedOperationException,
  Omics,
  OmicsClient,
  OmicsServiceException,
  PutS3AccessPolicyCommand,
  RangeNotSatisfiableException,
  ReadSetActivationJobItemStatus,
  ReadSetActivationJobStatus,
  ReadSetExportJobItemStatus,
  ReadSetExportJobStatus,
  ReadSetFile,
  ReadSetImportJobItemStatus,
  ReadSetImportJobStatus,
  ReadSetPartSource,
  ReadSetStatus,
  ReferenceCreationType,
  ReferenceFile,
  ReferenceImportJobItemStatus,
  ReferenceImportJobStatus,
  ReferenceStatus,
  RequestTimeoutException,
  ResourceNotFoundException,
  ResourceOwner,
  RunCacheStatus,
  RunExport,
  RunLogLevel,
  RunRetentionMode,
  RunStatus,
  SchemaValueType,
  SequenceStoreStatus,
  ServiceQuotaExceededException,
  ShareResourceType,
  ShareStatus,
  SourceReferenceType,
  StartAnnotationImportJobCommand,
  StartReadSetActivationJobCommand,
  StartReadSetExportJobCommand,
  StartReadSetImportJobCommand,
  StartReferenceImportJobCommand,
  StartRunCommand,
  StartVariantImportJobCommand,
  StorageType,
  StoreFormat,
  StoreStatus,
  StoreType,
  TagResourceCommand,
  TaskStatus,
  ThrottlingException,
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
  ValidationException,
  VersionStatus,
  WorkflowEngine,
  WorkflowExport,
  WorkflowStatus,
  WorkflowType,
  paginateListAnnotationImportJobs,
  paginateListAnnotationStoreVersions,
  paginateListAnnotationStores,
  paginateListMultipartReadSetUploads,
  paginateListReadSetActivationJobs,
  paginateListReadSetExportJobs,
  paginateListReadSetImportJobs,
  paginateListReadSetUploadParts,
  paginateListReadSets,
  paginateListReferenceImportJobs,
  paginateListReferenceStores,
  paginateListReferences,
  paginateListRunCaches,
  paginateListRunGroups,
  paginateListRunTasks,
  paginateListRuns,
  paginateListSequenceStores,
  paginateListShares,
  paginateListVariantImportJobs,
  paginateListVariantStores,
  paginateListWorkflowVersions,
  paginateListWorkflows,
  waitForAnnotationImportJobCreated,
  waitForAnnotationStoreCreated,
  waitForAnnotationStoreDeleted,
  waitForAnnotationStoreVersionCreated,
  waitForAnnotationStoreVersionDeleted,
  waitForReadSetActivationJobCompleted,
  waitForReadSetExportJobCompleted,
  waitForReadSetImportJobCompleted,
  waitForReferenceImportJobCompleted,
  waitForRunCompleted,
  waitForRunRunning,
  waitForTaskCompleted,
  waitForTaskRunning,
  waitForVariantImportJobCreated,
  waitForVariantStoreCreated,
  waitForVariantStoreDeleted,
  waitForWorkflowActive,
  waitForWorkflowVersionActive,
  waitUntilAnnotationImportJobCreated,
  waitUntilAnnotationStoreCreated,
  waitUntilAnnotationStoreDeleted,
  waitUntilAnnotationStoreVersionCreated,
  waitUntilAnnotationStoreVersionDeleted,
  waitUntilReadSetActivationJobCompleted,
  waitUntilReadSetExportJobCompleted,
  waitUntilReadSetImportJobCompleted,
  waitUntilReferenceImportJobCompleted,
  waitUntilRunCompleted,
  waitUntilRunRunning,
  waitUntilTaskCompleted,
  waitUntilTaskRunning,
  waitUntilVariantImportJobCreated,
  waitUntilVariantStoreCreated,
  waitUntilVariantStoreDeleted,
  waitUntilWorkflowActive,
  waitUntilWorkflowVersionActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OmicsClient === "function");
assert(typeof Omics === "function");
// commands
assert(typeof AbortMultipartReadSetUploadCommand === "function");
assert(typeof AcceptShareCommand === "function");
assert(typeof BatchDeleteReadSetCommand === "function");
assert(typeof CancelAnnotationImportJobCommand === "function");
assert(typeof CancelRunCommand === "function");
assert(typeof CancelVariantImportJobCommand === "function");
assert(typeof CompleteMultipartReadSetUploadCommand === "function");
assert(typeof CreateAnnotationStoreCommand === "function");
assert(typeof CreateAnnotationStoreVersionCommand === "function");
assert(typeof CreateMultipartReadSetUploadCommand === "function");
assert(typeof CreateReferenceStoreCommand === "function");
assert(typeof CreateRunCacheCommand === "function");
assert(typeof CreateRunGroupCommand === "function");
assert(typeof CreateSequenceStoreCommand === "function");
assert(typeof CreateShareCommand === "function");
assert(typeof CreateVariantStoreCommand === "function");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof CreateWorkflowVersionCommand === "function");
assert(typeof DeleteAnnotationStoreCommand === "function");
assert(typeof DeleteAnnotationStoreVersionsCommand === "function");
assert(typeof DeleteReferenceCommand === "function");
assert(typeof DeleteReferenceStoreCommand === "function");
assert(typeof DeleteRunCommand === "function");
assert(typeof DeleteRunCacheCommand === "function");
assert(typeof DeleteRunGroupCommand === "function");
assert(typeof DeleteS3AccessPolicyCommand === "function");
assert(typeof DeleteSequenceStoreCommand === "function");
assert(typeof DeleteShareCommand === "function");
assert(typeof DeleteVariantStoreCommand === "function");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflowVersionCommand === "function");
assert(typeof GetAnnotationImportJobCommand === "function");
assert(typeof GetAnnotationStoreCommand === "function");
assert(typeof GetAnnotationStoreVersionCommand === "function");
assert(typeof GetReadSetCommand === "function");
assert(typeof GetReadSetActivationJobCommand === "function");
assert(typeof GetReadSetExportJobCommand === "function");
assert(typeof GetReadSetImportJobCommand === "function");
assert(typeof GetReadSetMetadataCommand === "function");
assert(typeof GetReferenceCommand === "function");
assert(typeof GetReferenceImportJobCommand === "function");
assert(typeof GetReferenceMetadataCommand === "function");
assert(typeof GetReferenceStoreCommand === "function");
assert(typeof GetRunCommand === "function");
assert(typeof GetRunCacheCommand === "function");
assert(typeof GetRunGroupCommand === "function");
assert(typeof GetRunTaskCommand === "function");
assert(typeof GetS3AccessPolicyCommand === "function");
assert(typeof GetSequenceStoreCommand === "function");
assert(typeof GetShareCommand === "function");
assert(typeof GetVariantImportJobCommand === "function");
assert(typeof GetVariantStoreCommand === "function");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflowVersionCommand === "function");
assert(typeof ListAnnotationImportJobsCommand === "function");
assert(typeof ListAnnotationStoresCommand === "function");
assert(typeof ListAnnotationStoreVersionsCommand === "function");
assert(typeof ListMultipartReadSetUploadsCommand === "function");
assert(typeof ListReadSetActivationJobsCommand === "function");
assert(typeof ListReadSetExportJobsCommand === "function");
assert(typeof ListReadSetImportJobsCommand === "function");
assert(typeof ListReadSetsCommand === "function");
assert(typeof ListReadSetUploadPartsCommand === "function");
assert(typeof ListReferenceImportJobsCommand === "function");
assert(typeof ListReferencesCommand === "function");
assert(typeof ListReferenceStoresCommand === "function");
assert(typeof ListRunCachesCommand === "function");
assert(typeof ListRunGroupsCommand === "function");
assert(typeof ListRunsCommand === "function");
assert(typeof ListRunTasksCommand === "function");
assert(typeof ListSequenceStoresCommand === "function");
assert(typeof ListSharesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVariantImportJobsCommand === "function");
assert(typeof ListVariantStoresCommand === "function");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflowVersionsCommand === "function");
assert(typeof PutS3AccessPolicyCommand === "function");
assert(typeof StartAnnotationImportJobCommand === "function");
assert(typeof StartReadSetActivationJobCommand === "function");
assert(typeof StartReadSetExportJobCommand === "function");
assert(typeof StartReadSetImportJobCommand === "function");
assert(typeof StartReferenceImportJobCommand === "function");
assert(typeof StartRunCommand === "function");
assert(typeof StartVariantImportJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAnnotationStoreCommand === "function");
assert(typeof UpdateAnnotationStoreVersionCommand === "function");
assert(typeof UpdateRunCacheCommand === "function");
assert(typeof UpdateRunGroupCommand === "function");
assert(typeof UpdateSequenceStoreCommand === "function");
assert(typeof UpdateVariantStoreCommand === "function");
assert(typeof UpdateWorkflowCommand === "function");
assert(typeof UpdateWorkflowVersionCommand === "function");
assert(typeof UploadReadSetPartCommand === "function");
// enums
assert(typeof Accelerators === "object");
assert(typeof AnnotationType === "object");
assert(typeof CacheBehavior === "object");
assert(typeof CreationType === "object");
assert(typeof EncryptionType === "object");
assert(typeof ETagAlgorithm === "object");
assert(typeof ETagAlgorithmFamily === "object");
assert(typeof FileType === "object");
assert(typeof FormatToHeaderKey === "object");
assert(typeof JobStatus === "object");
assert(typeof ReadSetActivationJobItemStatus === "object");
assert(typeof ReadSetActivationJobStatus === "object");
assert(typeof ReadSetExportJobItemStatus === "object");
assert(typeof ReadSetExportJobStatus === "object");
assert(typeof ReadSetFile === "object");
assert(typeof ReadSetImportJobItemStatus === "object");
assert(typeof ReadSetImportJobStatus === "object");
assert(typeof ReadSetPartSource === "object");
assert(typeof ReadSetStatus === "object");
assert(typeof ReferenceCreationType === "object");
assert(typeof ReferenceFile === "object");
assert(typeof ReferenceImportJobItemStatus === "object");
assert(typeof ReferenceImportJobStatus === "object");
assert(typeof ReferenceStatus === "object");
assert(typeof ResourceOwner === "object");
assert(typeof RunCacheStatus === "object");
assert(typeof RunExport === "object");
assert(typeof RunLogLevel === "object");
assert(typeof RunRetentionMode === "object");
assert(typeof RunStatus === "object");
assert(typeof SchemaValueType === "object");
assert(typeof SequenceStoreStatus === "object");
assert(typeof ShareResourceType === "object");
assert(typeof ShareStatus === "object");
assert(typeof SourceReferenceType === "object");
assert(typeof StorageType === "object");
assert(typeof StoreFormat === "object");
assert(typeof StoreStatus === "object");
assert(typeof StoreType === "object");
assert(typeof TaskStatus === "object");
assert(typeof VersionStatus === "object");
assert(typeof WorkflowEngine === "object");
assert(typeof WorkflowExport === "object");
assert(typeof WorkflowStatus === "object");
assert(typeof WorkflowType === "object");
// errors
assert(AccessDeniedException.prototype instanceof OmicsServiceException);
assert(ConflictException.prototype instanceof OmicsServiceException);
assert(InternalServerException.prototype instanceof OmicsServiceException);
assert(NotSupportedOperationException.prototype instanceof OmicsServiceException);
assert(RangeNotSatisfiableException.prototype instanceof OmicsServiceException);
assert(RequestTimeoutException.prototype instanceof OmicsServiceException);
assert(ResourceNotFoundException.prototype instanceof OmicsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof OmicsServiceException);
assert(ThrottlingException.prototype instanceof OmicsServiceException);
assert(ValidationException.prototype instanceof OmicsServiceException);
assert(OmicsServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAnnotationImportJobCreated === "function");
assert(typeof waitForAnnotationStoreCreated === "function");
assert(typeof waitForAnnotationStoreDeleted === "function");
assert(typeof waitForAnnotationStoreVersionCreated === "function");
assert(typeof waitForAnnotationStoreVersionDeleted === "function");
assert(typeof waitForReadSetActivationJobCompleted === "function");
assert(typeof waitForReadSetExportJobCompleted === "function");
assert(typeof waitForReadSetImportJobCompleted === "function");
assert(typeof waitForReferenceImportJobCompleted === "function");
assert(typeof waitForRunCompleted === "function");
assert(typeof waitForRunRunning === "function");
assert(typeof waitForTaskCompleted === "function");
assert(typeof waitForTaskRunning === "function");
assert(typeof waitForVariantImportJobCreated === "function");
assert(typeof waitForVariantStoreCreated === "function");
assert(typeof waitForVariantStoreDeleted === "function");
assert(typeof waitForWorkflowActive === "function");
assert(typeof waitForWorkflowVersionActive === "function");
assert(typeof waitUntilAnnotationImportJobCreated === "function");
assert(typeof waitUntilAnnotationStoreCreated === "function");
assert(typeof waitUntilAnnotationStoreDeleted === "function");
assert(typeof waitUntilAnnotationStoreVersionCreated === "function");
assert(typeof waitUntilAnnotationStoreVersionDeleted === "function");
assert(typeof waitUntilReadSetActivationJobCompleted === "function");
assert(typeof waitUntilReadSetExportJobCompleted === "function");
assert(typeof waitUntilReadSetImportJobCompleted === "function");
assert(typeof waitUntilReferenceImportJobCompleted === "function");
assert(typeof waitUntilRunCompleted === "function");
assert(typeof waitUntilRunRunning === "function");
assert(typeof waitUntilTaskCompleted === "function");
assert(typeof waitUntilTaskRunning === "function");
assert(typeof waitUntilVariantImportJobCreated === "function");
assert(typeof waitUntilVariantStoreCreated === "function");
assert(typeof waitUntilVariantStoreDeleted === "function");
assert(typeof waitUntilWorkflowActive === "function");
assert(typeof waitUntilWorkflowVersionActive === "function");
// paginators
assert(typeof paginateListAnnotationImportJobs === "function");
assert(typeof paginateListAnnotationStoreVersions === "function");
assert(typeof paginateListAnnotationStores === "function");
assert(typeof paginateListMultipartReadSetUploads === "function");
assert(typeof paginateListReadSetActivationJobs === "function");
assert(typeof paginateListReadSetExportJobs === "function");
assert(typeof paginateListReadSetImportJobs === "function");
assert(typeof paginateListReadSetUploadParts === "function");
assert(typeof paginateListReadSets === "function");
assert(typeof paginateListReferenceImportJobs === "function");
assert(typeof paginateListReferenceStores === "function");
assert(typeof paginateListReferences === "function");
assert(typeof paginateListRunCaches === "function");
assert(typeof paginateListRunGroups === "function");
assert(typeof paginateListRunTasks === "function");
assert(typeof paginateListRuns === "function");
assert(typeof paginateListSequenceStores === "function");
assert(typeof paginateListShares === "function");
assert(typeof paginateListVariantImportJobs === "function");
assert(typeof paginateListVariantStores === "function");
assert(typeof paginateListWorkflowVersions === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`Omics index test passed.`);
