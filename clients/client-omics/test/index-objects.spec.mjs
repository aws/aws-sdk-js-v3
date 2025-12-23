import {
  AbortMultipartReadSetUpload$,
  AbortMultipartReadSetUploadCommand,
  AbortMultipartReadSetUploadRequest$,
  AbortMultipartReadSetUploadResponse$,
  Accelerators,
  AcceptShare$,
  AcceptShareCommand,
  AcceptShareRequest$,
  AcceptShareResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  ActivateReadSetFilter$,
  ActivateReadSetJobItem$,
  ActivateReadSetSourceItem$,
  AnnotationImportItemDetail$,
  AnnotationImportItemSource$,
  AnnotationImportJobItem$,
  AnnotationStoreItem$,
  AnnotationStoreVersionItem$,
  AnnotationType,
  BatchDeleteReadSet$,
  BatchDeleteReadSetCommand,
  BatchDeleteReadSetRequest$,
  BatchDeleteReadSetResponse$,
  CacheBehavior,
  CancelAnnotationImportJob$,
  CancelAnnotationImportJobCommand,
  CancelAnnotationImportRequest$,
  CancelAnnotationImportResponse$,
  CancelRun$,
  CancelRunCommand,
  CancelRunRequest$,
  CancelVariantImportJob$,
  CancelVariantImportJobCommand,
  CancelVariantImportRequest$,
  CancelVariantImportResponse$,
  CompleteMultipartReadSetUpload$,
  CompleteMultipartReadSetUploadCommand,
  CompleteMultipartReadSetUploadRequest$,
  CompleteMultipartReadSetUploadResponse$,
  CompleteReadSetUploadPartListItem$,
  ConflictException,
  ConflictException$,
  ContainerRegistryMap$,
  CreateAnnotationStore$,
  CreateAnnotationStoreCommand,
  CreateAnnotationStoreRequest$,
  CreateAnnotationStoreResponse$,
  CreateAnnotationStoreVersion$,
  CreateAnnotationStoreVersionCommand,
  CreateAnnotationStoreVersionRequest$,
  CreateAnnotationStoreVersionResponse$,
  CreateMultipartReadSetUpload$,
  CreateMultipartReadSetUploadCommand,
  CreateMultipartReadSetUploadRequest$,
  CreateMultipartReadSetUploadResponse$,
  CreateReferenceStore$,
  CreateReferenceStoreCommand,
  CreateReferenceStoreRequest$,
  CreateReferenceStoreResponse$,
  CreateRunCache$,
  CreateRunCacheCommand,
  CreateRunCacheRequest$,
  CreateRunCacheResponse$,
  CreateRunGroup$,
  CreateRunGroupCommand,
  CreateRunGroupRequest$,
  CreateRunGroupResponse$,
  CreateSequenceStore$,
  CreateSequenceStoreCommand,
  CreateSequenceStoreRequest$,
  CreateSequenceStoreResponse$,
  CreateShare$,
  CreateShareCommand,
  CreateShareRequest$,
  CreateShareResponse$,
  CreateVariantStore$,
  CreateVariantStoreCommand,
  CreateVariantStoreRequest$,
  CreateVariantStoreResponse$,
  CreateWorkflow$,
  CreateWorkflowCommand,
  CreateWorkflowRequest$,
  CreateWorkflowResponse$,
  CreateWorkflowVersion$,
  CreateWorkflowVersionCommand,
  CreateWorkflowVersionRequest$,
  CreateWorkflowVersionResponse$,
  CreationType,
  DefinitionRepository$,
  DefinitionRepositoryDetails$,
  DeleteAnnotationStore$,
  DeleteAnnotationStoreCommand,
  DeleteAnnotationStoreRequest$,
  DeleteAnnotationStoreResponse$,
  DeleteAnnotationStoreVersions$,
  DeleteAnnotationStoreVersionsCommand,
  DeleteAnnotationStoreVersionsRequest$,
  DeleteAnnotationStoreVersionsResponse$,
  DeleteReference$,
  DeleteReferenceCommand,
  DeleteReferenceRequest$,
  DeleteReferenceResponse$,
  DeleteReferenceStore$,
  DeleteReferenceStoreCommand,
  DeleteReferenceStoreRequest$,
  DeleteReferenceStoreResponse$,
  DeleteRun$,
  DeleteRunCache$,
  DeleteRunCacheCommand,
  DeleteRunCacheRequest$,
  DeleteRunCommand,
  DeleteRunGroup$,
  DeleteRunGroupCommand,
  DeleteRunGroupRequest$,
  DeleteRunRequest$,
  DeleteS3AccessPolicy$,
  DeleteS3AccessPolicyCommand,
  DeleteS3AccessPolicyRequest$,
  DeleteS3AccessPolicyResponse$,
  DeleteSequenceStore$,
  DeleteSequenceStoreCommand,
  DeleteSequenceStoreRequest$,
  DeleteSequenceStoreResponse$,
  DeleteShare$,
  DeleteShareCommand,
  DeleteShareRequest$,
  DeleteShareResponse$,
  DeleteVariantStore$,
  DeleteVariantStoreCommand,
  DeleteVariantStoreRequest$,
  DeleteVariantStoreResponse$,
  DeleteWorkflow$,
  DeleteWorkflowCommand,
  DeleteWorkflowRequest$,
  DeleteWorkflowVersion$,
  DeleteWorkflowVersionCommand,
  DeleteWorkflowVersionRequest$,
  EncryptionType,
  ETag$,
  ETagAlgorithm,
  ETagAlgorithmFamily,
  ExportReadSet$,
  ExportReadSetDetail$,
  ExportReadSetFilter$,
  ExportReadSetJobDetail$,
  FileInformation$,
  FileType,
  Filter$,
  FormatOptions$,
  FormatToHeaderKey,
  GetAnnotationImportJob$,
  GetAnnotationImportJobCommand,
  GetAnnotationImportRequest$,
  GetAnnotationImportResponse$,
  GetAnnotationStore$,
  GetAnnotationStoreCommand,
  GetAnnotationStoreRequest$,
  GetAnnotationStoreResponse$,
  GetAnnotationStoreVersion$,
  GetAnnotationStoreVersionCommand,
  GetAnnotationStoreVersionRequest$,
  GetAnnotationStoreVersionResponse$,
  GetReadSet$,
  GetReadSetActivationJob$,
  GetReadSetActivationJobCommand,
  GetReadSetActivationJobRequest$,
  GetReadSetActivationJobResponse$,
  GetReadSetCommand,
  GetReadSetExportJob$,
  GetReadSetExportJobCommand,
  GetReadSetExportJobRequest$,
  GetReadSetExportJobResponse$,
  GetReadSetImportJob$,
  GetReadSetImportJobCommand,
  GetReadSetImportJobRequest$,
  GetReadSetImportJobResponse$,
  GetReadSetMetadata$,
  GetReadSetMetadataCommand,
  GetReadSetMetadataRequest$,
  GetReadSetMetadataResponse$,
  GetReadSetRequest$,
  GetReadSetResponse$,
  GetReference$,
  GetReferenceCommand,
  GetReferenceImportJob$,
  GetReferenceImportJobCommand,
  GetReferenceImportJobRequest$,
  GetReferenceImportJobResponse$,
  GetReferenceMetadata$,
  GetReferenceMetadataCommand,
  GetReferenceMetadataRequest$,
  GetReferenceMetadataResponse$,
  GetReferenceRequest$,
  GetReferenceResponse$,
  GetReferenceStore$,
  GetReferenceStoreCommand,
  GetReferenceStoreRequest$,
  GetReferenceStoreResponse$,
  GetRun$,
  GetRunCache$,
  GetRunCacheCommand,
  GetRunCacheRequest$,
  GetRunCacheResponse$,
  GetRunCommand,
  GetRunGroup$,
  GetRunGroupCommand,
  GetRunGroupRequest$,
  GetRunGroupResponse$,
  GetRunRequest$,
  GetRunResponse$,
  GetRunTask$,
  GetRunTaskCommand,
  GetRunTaskRequest$,
  GetRunTaskResponse$,
  GetS3AccessPolicy$,
  GetS3AccessPolicyCommand,
  GetS3AccessPolicyRequest$,
  GetS3AccessPolicyResponse$,
  GetSequenceStore$,
  GetSequenceStoreCommand,
  GetSequenceStoreRequest$,
  GetSequenceStoreResponse$,
  GetShare$,
  GetShareCommand,
  GetShareRequest$,
  GetShareResponse$,
  GetVariantImportJob$,
  GetVariantImportJobCommand,
  GetVariantImportRequest$,
  GetVariantImportResponse$,
  GetVariantStore$,
  GetVariantStoreCommand,
  GetVariantStoreRequest$,
  GetVariantStoreResponse$,
  GetWorkflow$,
  GetWorkflowCommand,
  GetWorkflowRequest$,
  GetWorkflowResponse$,
  GetWorkflowVersion$,
  GetWorkflowVersionCommand,
  GetWorkflowVersionRequest$,
  GetWorkflowVersionResponse$,
  ImageDetails$,
  ImageMapping$,
  ImportReadSetFilter$,
  ImportReadSetJobItem$,
  ImportReadSetSourceItem$,
  ImportReferenceFilter$,
  ImportReferenceJobItem$,
  ImportReferenceSourceItem$,
  InternalServerException,
  InternalServerException$,
  JobStatus,
  ListAnnotationImportJobs$,
  ListAnnotationImportJobsCommand,
  ListAnnotationImportJobsFilter$,
  ListAnnotationImportJobsRequest$,
  ListAnnotationImportJobsResponse$,
  ListAnnotationStores$,
  ListAnnotationStoresCommand,
  ListAnnotationStoresFilter$,
  ListAnnotationStoresRequest$,
  ListAnnotationStoresResponse$,
  ListAnnotationStoreVersions$,
  ListAnnotationStoreVersionsCommand,
  ListAnnotationStoreVersionsFilter$,
  ListAnnotationStoreVersionsRequest$,
  ListAnnotationStoreVersionsResponse$,
  ListMultipartReadSetUploads$,
  ListMultipartReadSetUploadsCommand,
  ListMultipartReadSetUploadsRequest$,
  ListMultipartReadSetUploadsResponse$,
  ListReadSetActivationJobs$,
  ListReadSetActivationJobsCommand,
  ListReadSetActivationJobsRequest$,
  ListReadSetActivationJobsResponse$,
  ListReadSetExportJobs$,
  ListReadSetExportJobsCommand,
  ListReadSetExportJobsRequest$,
  ListReadSetExportJobsResponse$,
  ListReadSetImportJobs$,
  ListReadSetImportJobsCommand,
  ListReadSetImportJobsRequest$,
  ListReadSetImportJobsResponse$,
  ListReadSets$,
  ListReadSetsCommand,
  ListReadSetsRequest$,
  ListReadSetsResponse$,
  ListReadSetUploadParts$,
  ListReadSetUploadPartsCommand,
  ListReadSetUploadPartsRequest$,
  ListReadSetUploadPartsResponse$,
  ListReferenceImportJobs$,
  ListReferenceImportJobsCommand,
  ListReferenceImportJobsRequest$,
  ListReferenceImportJobsResponse$,
  ListReferences$,
  ListReferencesCommand,
  ListReferencesRequest$,
  ListReferencesResponse$,
  ListReferenceStores$,
  ListReferenceStoresCommand,
  ListReferenceStoresRequest$,
  ListReferenceStoresResponse$,
  ListRunCaches$,
  ListRunCachesCommand,
  ListRunCachesRequest$,
  ListRunCachesResponse$,
  ListRunGroups$,
  ListRunGroupsCommand,
  ListRunGroupsRequest$,
  ListRunGroupsResponse$,
  ListRuns$,
  ListRunsCommand,
  ListRunsRequest$,
  ListRunsResponse$,
  ListRunTasks$,
  ListRunTasksCommand,
  ListRunTasksRequest$,
  ListRunTasksResponse$,
  ListSequenceStores$,
  ListSequenceStoresCommand,
  ListSequenceStoresRequest$,
  ListSequenceStoresResponse$,
  ListShares$,
  ListSharesCommand,
  ListSharesRequest$,
  ListSharesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVariantImportJobs$,
  ListVariantImportJobsCommand,
  ListVariantImportJobsFilter$,
  ListVariantImportJobsRequest$,
  ListVariantImportJobsResponse$,
  ListVariantStores$,
  ListVariantStoresCommand,
  ListVariantStoresFilter$,
  ListVariantStoresRequest$,
  ListVariantStoresResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowsRequest$,
  ListWorkflowsResponse$,
  ListWorkflowVersions$,
  ListWorkflowVersionsCommand,
  ListWorkflowVersionsRequest$,
  ListWorkflowVersionsResponse$,
  MultipartReadSetUploadListItem$,
  NotSupportedOperationException,
  NotSupportedOperationException$,
  Omics,
  OmicsClient,
  OmicsServiceException,
  paginateListAnnotationImportJobs,
  paginateListAnnotationStores,
  paginateListAnnotationStoreVersions,
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
  paginateListRunTasks,
  paginateListSequenceStores,
  paginateListShares,
  paginateListVariantImportJobs,
  paginateListVariantStores,
  paginateListWorkflows,
  paginateListWorkflowVersions,
  PutS3AccessPolicy$,
  PutS3AccessPolicyCommand,
  PutS3AccessPolicyRequest$,
  PutS3AccessPolicyResponse$,
  RangeNotSatisfiableException,
  RangeNotSatisfiableException$,
  ReadOptions$,
  ReadSetActivationJobItemStatus,
  ReadSetActivationJobStatus,
  ReadSetBatchError$,
  ReadSetExportJobItemStatus,
  ReadSetExportJobStatus,
  ReadSetFile,
  ReadSetFiles$,
  ReadSetFilter$,
  ReadSetImportJobItemStatus,
  ReadSetImportJobStatus,
  ReadSetListItem$,
  ReadSetPartSource,
  ReadSetS3Access$,
  ReadSetStatus,
  ReadSetUploadPartListFilter$,
  ReadSetUploadPartListItem$,
  ReferenceCreationType,
  ReferenceFile,
  ReferenceFiles$,
  ReferenceFilter$,
  ReferenceImportJobItemStatus,
  ReferenceImportJobStatus,
  ReferenceItem$,
  ReferenceListItem$,
  ReferenceStatus,
  ReferenceStoreDetail$,
  ReferenceStoreFilter$,
  RegistryMapping$,
  RequestTimeoutException,
  RequestTimeoutException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceOwner,
  RunCacheListItem$,
  RunCacheStatus,
  RunExport,
  RunGroupListItem$,
  RunListItem$,
  RunLogLevel,
  RunLogLocation$,
  RunRetentionMode,
  RunStatus,
  S3AccessConfig$,
  SchemaValueType,
  SequenceInformation$,
  SequenceStoreDetail$,
  SequenceStoreFilter$,
  SequenceStoreS3Access$,
  SequenceStoreStatus,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ShareDetails$,
  ShareResourceType,
  ShareStatus,
  SourceFiles$,
  SourceReference$,
  SourceReferenceType,
  SseConfig$,
  StartAnnotationImportJob$,
  StartAnnotationImportJobCommand,
  StartAnnotationImportRequest$,
  StartAnnotationImportResponse$,
  StartReadSetActivationJob$,
  StartReadSetActivationJobCommand,
  StartReadSetActivationJobRequest$,
  StartReadSetActivationJobResponse$,
  StartReadSetActivationJobSourceItem$,
  StartReadSetExportJob$,
  StartReadSetExportJobCommand,
  StartReadSetExportJobRequest$,
  StartReadSetExportJobResponse$,
  StartReadSetImportJob$,
  StartReadSetImportJobCommand,
  StartReadSetImportJobRequest$,
  StartReadSetImportJobResponse$,
  StartReadSetImportJobSourceItem$,
  StartReferenceImportJob$,
  StartReferenceImportJobCommand,
  StartReferenceImportJobRequest$,
  StartReferenceImportJobResponse$,
  StartReferenceImportJobSourceItem$,
  StartRun$,
  StartRunCommand,
  StartRunRequest$,
  StartRunResponse$,
  StartVariantImportJob$,
  StartVariantImportJobCommand,
  StartVariantImportRequest$,
  StartVariantImportResponse$,
  StorageType,
  StoreFormat,
  StoreOptions$,
  StoreStatus,
  StoreType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskListItem$,
  TaskStatus,
  ThrottlingException,
  ThrottlingException$,
  TsvOptions$,
  TsvStoreOptions$,
  TsvVersionOptions$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAnnotationStore$,
  UpdateAnnotationStoreCommand,
  UpdateAnnotationStoreRequest$,
  UpdateAnnotationStoreResponse$,
  UpdateAnnotationStoreVersion$,
  UpdateAnnotationStoreVersionCommand,
  UpdateAnnotationStoreVersionRequest$,
  UpdateAnnotationStoreVersionResponse$,
  UpdateRunCache$,
  UpdateRunCacheCommand,
  UpdateRunCacheRequest$,
  UpdateRunGroup$,
  UpdateRunGroupCommand,
  UpdateRunGroupRequest$,
  UpdateSequenceStore$,
  UpdateSequenceStoreCommand,
  UpdateSequenceStoreRequest$,
  UpdateSequenceStoreResponse$,
  UpdateVariantStore$,
  UpdateVariantStoreCommand,
  UpdateVariantStoreRequest$,
  UpdateVariantStoreResponse$,
  UpdateWorkflow$,
  UpdateWorkflowCommand,
  UpdateWorkflowRequest$,
  UpdateWorkflowVersion$,
  UpdateWorkflowVersionCommand,
  UpdateWorkflowVersionRequest$,
  UploadReadSetPart$,
  UploadReadSetPartCommand,
  UploadReadSetPartRequest$,
  UploadReadSetPartResponse$,
  ValidationException,
  ValidationException$,
  VariantImportItemDetail$,
  VariantImportItemSource$,
  VariantImportJobItem$,
  VariantStoreItem$,
  VcfOptions$,
  VersionDeleteError$,
  VersionOptions$,
  VersionStatus,
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
  WorkflowEngine,
  WorkflowExport,
  WorkflowListItem$,
  WorkflowParameter$,
  WorkflowStatus,
  WorkflowType,
  WorkflowVersionListItem$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OmicsClient === "function");
assert(typeof Omics === "function");
// commands
assert(typeof AbortMultipartReadSetUploadCommand === "function");
assert(typeof AbortMultipartReadSetUpload$ === "object");
assert(typeof AcceptShareCommand === "function");
assert(typeof AcceptShare$ === "object");
assert(typeof BatchDeleteReadSetCommand === "function");
assert(typeof BatchDeleteReadSet$ === "object");
assert(typeof CancelAnnotationImportJobCommand === "function");
assert(typeof CancelAnnotationImportJob$ === "object");
assert(typeof CancelRunCommand === "function");
assert(typeof CancelRun$ === "object");
assert(typeof CancelVariantImportJobCommand === "function");
assert(typeof CancelVariantImportJob$ === "object");
assert(typeof CompleteMultipartReadSetUploadCommand === "function");
assert(typeof CompleteMultipartReadSetUpload$ === "object");
assert(typeof CreateAnnotationStoreCommand === "function");
assert(typeof CreateAnnotationStore$ === "object");
assert(typeof CreateAnnotationStoreVersionCommand === "function");
assert(typeof CreateAnnotationStoreVersion$ === "object");
assert(typeof CreateMultipartReadSetUploadCommand === "function");
assert(typeof CreateMultipartReadSetUpload$ === "object");
assert(typeof CreateReferenceStoreCommand === "function");
assert(typeof CreateReferenceStore$ === "object");
assert(typeof CreateRunCacheCommand === "function");
assert(typeof CreateRunCache$ === "object");
assert(typeof CreateRunGroupCommand === "function");
assert(typeof CreateRunGroup$ === "object");
assert(typeof CreateSequenceStoreCommand === "function");
assert(typeof CreateSequenceStore$ === "object");
assert(typeof CreateShareCommand === "function");
assert(typeof CreateShare$ === "object");
assert(typeof CreateVariantStoreCommand === "function");
assert(typeof CreateVariantStore$ === "object");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof CreateWorkflow$ === "object");
assert(typeof CreateWorkflowVersionCommand === "function");
assert(typeof CreateWorkflowVersion$ === "object");
assert(typeof DeleteAnnotationStoreCommand === "function");
assert(typeof DeleteAnnotationStore$ === "object");
assert(typeof DeleteAnnotationStoreVersionsCommand === "function");
assert(typeof DeleteAnnotationStoreVersions$ === "object");
assert(typeof DeleteReferenceCommand === "function");
assert(typeof DeleteReference$ === "object");
assert(typeof DeleteReferenceStoreCommand === "function");
assert(typeof DeleteReferenceStore$ === "object");
assert(typeof DeleteRunCommand === "function");
assert(typeof DeleteRun$ === "object");
assert(typeof DeleteRunCacheCommand === "function");
assert(typeof DeleteRunCache$ === "object");
assert(typeof DeleteRunGroupCommand === "function");
assert(typeof DeleteRunGroup$ === "object");
assert(typeof DeleteS3AccessPolicyCommand === "function");
assert(typeof DeleteS3AccessPolicy$ === "object");
assert(typeof DeleteSequenceStoreCommand === "function");
assert(typeof DeleteSequenceStore$ === "object");
assert(typeof DeleteShareCommand === "function");
assert(typeof DeleteShare$ === "object");
assert(typeof DeleteVariantStoreCommand === "function");
assert(typeof DeleteVariantStore$ === "object");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflow$ === "object");
assert(typeof DeleteWorkflowVersionCommand === "function");
assert(typeof DeleteWorkflowVersion$ === "object");
assert(typeof GetAnnotationImportJobCommand === "function");
assert(typeof GetAnnotationImportJob$ === "object");
assert(typeof GetAnnotationStoreCommand === "function");
assert(typeof GetAnnotationStore$ === "object");
assert(typeof GetAnnotationStoreVersionCommand === "function");
assert(typeof GetAnnotationStoreVersion$ === "object");
assert(typeof GetReadSetCommand === "function");
assert(typeof GetReadSet$ === "object");
assert(typeof GetReadSetActivationJobCommand === "function");
assert(typeof GetReadSetActivationJob$ === "object");
assert(typeof GetReadSetExportJobCommand === "function");
assert(typeof GetReadSetExportJob$ === "object");
assert(typeof GetReadSetImportJobCommand === "function");
assert(typeof GetReadSetImportJob$ === "object");
assert(typeof GetReadSetMetadataCommand === "function");
assert(typeof GetReadSetMetadata$ === "object");
assert(typeof GetReferenceCommand === "function");
assert(typeof GetReference$ === "object");
assert(typeof GetReferenceImportJobCommand === "function");
assert(typeof GetReferenceImportJob$ === "object");
assert(typeof GetReferenceMetadataCommand === "function");
assert(typeof GetReferenceMetadata$ === "object");
assert(typeof GetReferenceStoreCommand === "function");
assert(typeof GetReferenceStore$ === "object");
assert(typeof GetRunCommand === "function");
assert(typeof GetRun$ === "object");
assert(typeof GetRunCacheCommand === "function");
assert(typeof GetRunCache$ === "object");
assert(typeof GetRunGroupCommand === "function");
assert(typeof GetRunGroup$ === "object");
assert(typeof GetRunTaskCommand === "function");
assert(typeof GetRunTask$ === "object");
assert(typeof GetS3AccessPolicyCommand === "function");
assert(typeof GetS3AccessPolicy$ === "object");
assert(typeof GetSequenceStoreCommand === "function");
assert(typeof GetSequenceStore$ === "object");
assert(typeof GetShareCommand === "function");
assert(typeof GetShare$ === "object");
assert(typeof GetVariantImportJobCommand === "function");
assert(typeof GetVariantImportJob$ === "object");
assert(typeof GetVariantStoreCommand === "function");
assert(typeof GetVariantStore$ === "object");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflow$ === "object");
assert(typeof GetWorkflowVersionCommand === "function");
assert(typeof GetWorkflowVersion$ === "object");
assert(typeof ListAnnotationImportJobsCommand === "function");
assert(typeof ListAnnotationImportJobs$ === "object");
assert(typeof ListAnnotationStoresCommand === "function");
assert(typeof ListAnnotationStores$ === "object");
assert(typeof ListAnnotationStoreVersionsCommand === "function");
assert(typeof ListAnnotationStoreVersions$ === "object");
assert(typeof ListMultipartReadSetUploadsCommand === "function");
assert(typeof ListMultipartReadSetUploads$ === "object");
assert(typeof ListReadSetActivationJobsCommand === "function");
assert(typeof ListReadSetActivationJobs$ === "object");
assert(typeof ListReadSetExportJobsCommand === "function");
assert(typeof ListReadSetExportJobs$ === "object");
assert(typeof ListReadSetImportJobsCommand === "function");
assert(typeof ListReadSetImportJobs$ === "object");
assert(typeof ListReadSetsCommand === "function");
assert(typeof ListReadSets$ === "object");
assert(typeof ListReadSetUploadPartsCommand === "function");
assert(typeof ListReadSetUploadParts$ === "object");
assert(typeof ListReferenceImportJobsCommand === "function");
assert(typeof ListReferenceImportJobs$ === "object");
assert(typeof ListReferencesCommand === "function");
assert(typeof ListReferences$ === "object");
assert(typeof ListReferenceStoresCommand === "function");
assert(typeof ListReferenceStores$ === "object");
assert(typeof ListRunCachesCommand === "function");
assert(typeof ListRunCaches$ === "object");
assert(typeof ListRunGroupsCommand === "function");
assert(typeof ListRunGroups$ === "object");
assert(typeof ListRunsCommand === "function");
assert(typeof ListRuns$ === "object");
assert(typeof ListRunTasksCommand === "function");
assert(typeof ListRunTasks$ === "object");
assert(typeof ListSequenceStoresCommand === "function");
assert(typeof ListSequenceStores$ === "object");
assert(typeof ListSharesCommand === "function");
assert(typeof ListShares$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVariantImportJobsCommand === "function");
assert(typeof ListVariantImportJobs$ === "object");
assert(typeof ListVariantStoresCommand === "function");
assert(typeof ListVariantStores$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof ListWorkflowVersionsCommand === "function");
assert(typeof ListWorkflowVersions$ === "object");
assert(typeof PutS3AccessPolicyCommand === "function");
assert(typeof PutS3AccessPolicy$ === "object");
assert(typeof StartAnnotationImportJobCommand === "function");
assert(typeof StartAnnotationImportJob$ === "object");
assert(typeof StartReadSetActivationJobCommand === "function");
assert(typeof StartReadSetActivationJob$ === "object");
assert(typeof StartReadSetExportJobCommand === "function");
assert(typeof StartReadSetExportJob$ === "object");
assert(typeof StartReadSetImportJobCommand === "function");
assert(typeof StartReadSetImportJob$ === "object");
assert(typeof StartReferenceImportJobCommand === "function");
assert(typeof StartReferenceImportJob$ === "object");
assert(typeof StartRunCommand === "function");
assert(typeof StartRun$ === "object");
assert(typeof StartVariantImportJobCommand === "function");
assert(typeof StartVariantImportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAnnotationStoreCommand === "function");
assert(typeof UpdateAnnotationStore$ === "object");
assert(typeof UpdateAnnotationStoreVersionCommand === "function");
assert(typeof UpdateAnnotationStoreVersion$ === "object");
assert(typeof UpdateRunCacheCommand === "function");
assert(typeof UpdateRunCache$ === "object");
assert(typeof UpdateRunGroupCommand === "function");
assert(typeof UpdateRunGroup$ === "object");
assert(typeof UpdateSequenceStoreCommand === "function");
assert(typeof UpdateSequenceStore$ === "object");
assert(typeof UpdateVariantStoreCommand === "function");
assert(typeof UpdateVariantStore$ === "object");
assert(typeof UpdateWorkflowCommand === "function");
assert(typeof UpdateWorkflow$ === "object");
assert(typeof UpdateWorkflowVersionCommand === "function");
assert(typeof UpdateWorkflowVersion$ === "object");
assert(typeof UploadReadSetPartCommand === "function");
assert(typeof UploadReadSetPart$ === "object");
// structural schemas
assert(typeof AbortMultipartReadSetUploadRequest$ === "object");
assert(typeof AbortMultipartReadSetUploadResponse$ === "object");
assert(typeof AcceptShareRequest$ === "object");
assert(typeof AcceptShareResponse$ === "object");
assert(typeof ActivateReadSetFilter$ === "object");
assert(typeof ActivateReadSetJobItem$ === "object");
assert(typeof ActivateReadSetSourceItem$ === "object");
assert(typeof AnnotationImportItemDetail$ === "object");
assert(typeof AnnotationImportItemSource$ === "object");
assert(typeof AnnotationImportJobItem$ === "object");
assert(typeof AnnotationStoreItem$ === "object");
assert(typeof AnnotationStoreVersionItem$ === "object");
assert(typeof BatchDeleteReadSetRequest$ === "object");
assert(typeof BatchDeleteReadSetResponse$ === "object");
assert(typeof CancelAnnotationImportRequest$ === "object");
assert(typeof CancelAnnotationImportResponse$ === "object");
assert(typeof CancelRunRequest$ === "object");
assert(typeof CancelVariantImportRequest$ === "object");
assert(typeof CancelVariantImportResponse$ === "object");
assert(typeof CompleteMultipartReadSetUploadRequest$ === "object");
assert(typeof CompleteMultipartReadSetUploadResponse$ === "object");
assert(typeof CompleteReadSetUploadPartListItem$ === "object");
assert(typeof ContainerRegistryMap$ === "object");
assert(typeof CreateAnnotationStoreRequest$ === "object");
assert(typeof CreateAnnotationStoreResponse$ === "object");
assert(typeof CreateAnnotationStoreVersionRequest$ === "object");
assert(typeof CreateAnnotationStoreVersionResponse$ === "object");
assert(typeof CreateMultipartReadSetUploadRequest$ === "object");
assert(typeof CreateMultipartReadSetUploadResponse$ === "object");
assert(typeof CreateReferenceStoreRequest$ === "object");
assert(typeof CreateReferenceStoreResponse$ === "object");
assert(typeof CreateRunCacheRequest$ === "object");
assert(typeof CreateRunCacheResponse$ === "object");
assert(typeof CreateRunGroupRequest$ === "object");
assert(typeof CreateRunGroupResponse$ === "object");
assert(typeof CreateSequenceStoreRequest$ === "object");
assert(typeof CreateSequenceStoreResponse$ === "object");
assert(typeof CreateShareRequest$ === "object");
assert(typeof CreateShareResponse$ === "object");
assert(typeof CreateVariantStoreRequest$ === "object");
assert(typeof CreateVariantStoreResponse$ === "object");
assert(typeof CreateWorkflowRequest$ === "object");
assert(typeof CreateWorkflowResponse$ === "object");
assert(typeof CreateWorkflowVersionRequest$ === "object");
assert(typeof CreateWorkflowVersionResponse$ === "object");
assert(typeof DefinitionRepository$ === "object");
assert(typeof DefinitionRepositoryDetails$ === "object");
assert(typeof DeleteAnnotationStoreRequest$ === "object");
assert(typeof DeleteAnnotationStoreResponse$ === "object");
assert(typeof DeleteAnnotationStoreVersionsRequest$ === "object");
assert(typeof DeleteAnnotationStoreVersionsResponse$ === "object");
assert(typeof DeleteReferenceRequest$ === "object");
assert(typeof DeleteReferenceResponse$ === "object");
assert(typeof DeleteReferenceStoreRequest$ === "object");
assert(typeof DeleteReferenceStoreResponse$ === "object");
assert(typeof DeleteRunCacheRequest$ === "object");
assert(typeof DeleteRunGroupRequest$ === "object");
assert(typeof DeleteRunRequest$ === "object");
assert(typeof DeleteS3AccessPolicyRequest$ === "object");
assert(typeof DeleteS3AccessPolicyResponse$ === "object");
assert(typeof DeleteSequenceStoreRequest$ === "object");
assert(typeof DeleteSequenceStoreResponse$ === "object");
assert(typeof DeleteShareRequest$ === "object");
assert(typeof DeleteShareResponse$ === "object");
assert(typeof DeleteVariantStoreRequest$ === "object");
assert(typeof DeleteVariantStoreResponse$ === "object");
assert(typeof DeleteWorkflowRequest$ === "object");
assert(typeof DeleteWorkflowVersionRequest$ === "object");
assert(typeof ETag$ === "object");
assert(typeof ExportReadSet$ === "object");
assert(typeof ExportReadSetDetail$ === "object");
assert(typeof ExportReadSetFilter$ === "object");
assert(typeof ExportReadSetJobDetail$ === "object");
assert(typeof FileInformation$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FormatOptions$ === "object");
assert(typeof GetAnnotationImportRequest$ === "object");
assert(typeof GetAnnotationImportResponse$ === "object");
assert(typeof GetAnnotationStoreRequest$ === "object");
assert(typeof GetAnnotationStoreResponse$ === "object");
assert(typeof GetAnnotationStoreVersionRequest$ === "object");
assert(typeof GetAnnotationStoreVersionResponse$ === "object");
assert(typeof GetReadSetActivationJobRequest$ === "object");
assert(typeof GetReadSetActivationJobResponse$ === "object");
assert(typeof GetReadSetExportJobRequest$ === "object");
assert(typeof GetReadSetExportJobResponse$ === "object");
assert(typeof GetReadSetImportJobRequest$ === "object");
assert(typeof GetReadSetImportJobResponse$ === "object");
assert(typeof GetReadSetMetadataRequest$ === "object");
assert(typeof GetReadSetMetadataResponse$ === "object");
assert(typeof GetReadSetRequest$ === "object");
assert(typeof GetReadSetResponse$ === "object");
assert(typeof GetReferenceImportJobRequest$ === "object");
assert(typeof GetReferenceImportJobResponse$ === "object");
assert(typeof GetReferenceMetadataRequest$ === "object");
assert(typeof GetReferenceMetadataResponse$ === "object");
assert(typeof GetReferenceRequest$ === "object");
assert(typeof GetReferenceResponse$ === "object");
assert(typeof GetReferenceStoreRequest$ === "object");
assert(typeof GetReferenceStoreResponse$ === "object");
assert(typeof GetRunCacheRequest$ === "object");
assert(typeof GetRunCacheResponse$ === "object");
assert(typeof GetRunGroupRequest$ === "object");
assert(typeof GetRunGroupResponse$ === "object");
assert(typeof GetRunRequest$ === "object");
assert(typeof GetRunResponse$ === "object");
assert(typeof GetRunTaskRequest$ === "object");
assert(typeof GetRunTaskResponse$ === "object");
assert(typeof GetS3AccessPolicyRequest$ === "object");
assert(typeof GetS3AccessPolicyResponse$ === "object");
assert(typeof GetSequenceStoreRequest$ === "object");
assert(typeof GetSequenceStoreResponse$ === "object");
assert(typeof GetShareRequest$ === "object");
assert(typeof GetShareResponse$ === "object");
assert(typeof GetVariantImportRequest$ === "object");
assert(typeof GetVariantImportResponse$ === "object");
assert(typeof GetVariantStoreRequest$ === "object");
assert(typeof GetVariantStoreResponse$ === "object");
assert(typeof GetWorkflowRequest$ === "object");
assert(typeof GetWorkflowResponse$ === "object");
assert(typeof GetWorkflowVersionRequest$ === "object");
assert(typeof GetWorkflowVersionResponse$ === "object");
assert(typeof ImageDetails$ === "object");
assert(typeof ImageMapping$ === "object");
assert(typeof ImportReadSetFilter$ === "object");
assert(typeof ImportReadSetJobItem$ === "object");
assert(typeof ImportReadSetSourceItem$ === "object");
assert(typeof ImportReferenceFilter$ === "object");
assert(typeof ImportReferenceJobItem$ === "object");
assert(typeof ImportReferenceSourceItem$ === "object");
assert(typeof ListAnnotationImportJobsFilter$ === "object");
assert(typeof ListAnnotationImportJobsRequest$ === "object");
assert(typeof ListAnnotationImportJobsResponse$ === "object");
assert(typeof ListAnnotationStoresFilter$ === "object");
assert(typeof ListAnnotationStoresRequest$ === "object");
assert(typeof ListAnnotationStoresResponse$ === "object");
assert(typeof ListAnnotationStoreVersionsFilter$ === "object");
assert(typeof ListAnnotationStoreVersionsRequest$ === "object");
assert(typeof ListAnnotationStoreVersionsResponse$ === "object");
assert(typeof ListMultipartReadSetUploadsRequest$ === "object");
assert(typeof ListMultipartReadSetUploadsResponse$ === "object");
assert(typeof ListReadSetActivationJobsRequest$ === "object");
assert(typeof ListReadSetActivationJobsResponse$ === "object");
assert(typeof ListReadSetExportJobsRequest$ === "object");
assert(typeof ListReadSetExportJobsResponse$ === "object");
assert(typeof ListReadSetImportJobsRequest$ === "object");
assert(typeof ListReadSetImportJobsResponse$ === "object");
assert(typeof ListReadSetsRequest$ === "object");
assert(typeof ListReadSetsResponse$ === "object");
assert(typeof ListReadSetUploadPartsRequest$ === "object");
assert(typeof ListReadSetUploadPartsResponse$ === "object");
assert(typeof ListReferenceImportJobsRequest$ === "object");
assert(typeof ListReferenceImportJobsResponse$ === "object");
assert(typeof ListReferencesRequest$ === "object");
assert(typeof ListReferencesResponse$ === "object");
assert(typeof ListReferenceStoresRequest$ === "object");
assert(typeof ListReferenceStoresResponse$ === "object");
assert(typeof ListRunCachesRequest$ === "object");
assert(typeof ListRunCachesResponse$ === "object");
assert(typeof ListRunGroupsRequest$ === "object");
assert(typeof ListRunGroupsResponse$ === "object");
assert(typeof ListRunsRequest$ === "object");
assert(typeof ListRunsResponse$ === "object");
assert(typeof ListRunTasksRequest$ === "object");
assert(typeof ListRunTasksResponse$ === "object");
assert(typeof ListSequenceStoresRequest$ === "object");
assert(typeof ListSequenceStoresResponse$ === "object");
assert(typeof ListSharesRequest$ === "object");
assert(typeof ListSharesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVariantImportJobsFilter$ === "object");
assert(typeof ListVariantImportJobsRequest$ === "object");
assert(typeof ListVariantImportJobsResponse$ === "object");
assert(typeof ListVariantStoresFilter$ === "object");
assert(typeof ListVariantStoresRequest$ === "object");
assert(typeof ListVariantStoresResponse$ === "object");
assert(typeof ListWorkflowsRequest$ === "object");
assert(typeof ListWorkflowsResponse$ === "object");
assert(typeof ListWorkflowVersionsRequest$ === "object");
assert(typeof ListWorkflowVersionsResponse$ === "object");
assert(typeof MultipartReadSetUploadListItem$ === "object");
assert(typeof PutS3AccessPolicyRequest$ === "object");
assert(typeof PutS3AccessPolicyResponse$ === "object");
assert(typeof ReadOptions$ === "object");
assert(typeof ReadSetBatchError$ === "object");
assert(typeof ReadSetFiles$ === "object");
assert(typeof ReadSetFilter$ === "object");
assert(typeof ReadSetListItem$ === "object");
assert(typeof ReadSetS3Access$ === "object");
assert(typeof ReadSetUploadPartListFilter$ === "object");
assert(typeof ReadSetUploadPartListItem$ === "object");
assert(typeof ReferenceFiles$ === "object");
assert(typeof ReferenceFilter$ === "object");
assert(typeof ReferenceItem$ === "object");
assert(typeof ReferenceListItem$ === "object");
assert(typeof ReferenceStoreDetail$ === "object");
assert(typeof ReferenceStoreFilter$ === "object");
assert(typeof RegistryMapping$ === "object");
assert(typeof RunCacheListItem$ === "object");
assert(typeof RunGroupListItem$ === "object");
assert(typeof RunListItem$ === "object");
assert(typeof RunLogLocation$ === "object");
assert(typeof S3AccessConfig$ === "object");
assert(typeof SequenceInformation$ === "object");
assert(typeof SequenceStoreDetail$ === "object");
assert(typeof SequenceStoreFilter$ === "object");
assert(typeof SequenceStoreS3Access$ === "object");
assert(typeof ShareDetails$ === "object");
assert(typeof SourceFiles$ === "object");
assert(typeof SourceReference$ === "object");
assert(typeof SseConfig$ === "object");
assert(typeof StartAnnotationImportRequest$ === "object");
assert(typeof StartAnnotationImportResponse$ === "object");
assert(typeof StartReadSetActivationJobRequest$ === "object");
assert(typeof StartReadSetActivationJobResponse$ === "object");
assert(typeof StartReadSetActivationJobSourceItem$ === "object");
assert(typeof StartReadSetExportJobRequest$ === "object");
assert(typeof StartReadSetExportJobResponse$ === "object");
assert(typeof StartReadSetImportJobRequest$ === "object");
assert(typeof StartReadSetImportJobResponse$ === "object");
assert(typeof StartReadSetImportJobSourceItem$ === "object");
assert(typeof StartReferenceImportJobRequest$ === "object");
assert(typeof StartReferenceImportJobResponse$ === "object");
assert(typeof StartReferenceImportJobSourceItem$ === "object");
assert(typeof StartRunRequest$ === "object");
assert(typeof StartRunResponse$ === "object");
assert(typeof StartVariantImportRequest$ === "object");
assert(typeof StartVariantImportResponse$ === "object");
assert(typeof StoreOptions$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskListItem$ === "object");
assert(typeof TsvOptions$ === "object");
assert(typeof TsvStoreOptions$ === "object");
assert(typeof TsvVersionOptions$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAnnotationStoreRequest$ === "object");
assert(typeof UpdateAnnotationStoreResponse$ === "object");
assert(typeof UpdateAnnotationStoreVersionRequest$ === "object");
assert(typeof UpdateAnnotationStoreVersionResponse$ === "object");
assert(typeof UpdateRunCacheRequest$ === "object");
assert(typeof UpdateRunGroupRequest$ === "object");
assert(typeof UpdateSequenceStoreRequest$ === "object");
assert(typeof UpdateSequenceStoreResponse$ === "object");
assert(typeof UpdateVariantStoreRequest$ === "object");
assert(typeof UpdateVariantStoreResponse$ === "object");
assert(typeof UpdateWorkflowRequest$ === "object");
assert(typeof UpdateWorkflowVersionRequest$ === "object");
assert(typeof UploadReadSetPartRequest$ === "object");
assert(typeof UploadReadSetPartResponse$ === "object");
assert(typeof VariantImportItemDetail$ === "object");
assert(typeof VariantImportItemSource$ === "object");
assert(typeof VariantImportJobItem$ === "object");
assert(typeof VariantStoreItem$ === "object");
assert(typeof VcfOptions$ === "object");
assert(typeof VersionDeleteError$ === "object");
assert(typeof VersionOptions$ === "object");
assert(typeof WorkflowListItem$ === "object");
assert(typeof WorkflowParameter$ === "object");
assert(typeof WorkflowVersionListItem$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof OmicsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof OmicsServiceException);
assert(typeof InternalServerException$ === "object");
assert(NotSupportedOperationException.prototype instanceof OmicsServiceException);
assert(typeof NotSupportedOperationException$ === "object");
assert(RangeNotSatisfiableException.prototype instanceof OmicsServiceException);
assert(typeof RangeNotSatisfiableException$ === "object");
assert(RequestTimeoutException.prototype instanceof OmicsServiceException);
assert(typeof RequestTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof OmicsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof OmicsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof OmicsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof OmicsServiceException);
assert(typeof ValidationException$ === "object");
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
