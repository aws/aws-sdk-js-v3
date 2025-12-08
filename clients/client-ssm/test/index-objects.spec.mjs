import {
  AccessDeniedException,
  AccessRequestStatus,
  AccessType,
  AddTagsToResourceCommand,
  AlreadyExistsException,
  AssociateOpsItemRelatedItemCommand,
  AssociatedInstances,
  AssociationAlreadyExists,
  AssociationComplianceSeverity,
  AssociationDoesNotExist,
  AssociationExecutionDoesNotExist,
  AssociationExecutionFilterKey,
  AssociationExecutionTargetsFilterKey,
  AssociationFilterKey,
  AssociationFilterOperatorType,
  AssociationLimitExceeded,
  AssociationStatusName,
  AssociationSyncCompliance,
  AssociationVersionLimitExceeded,
  AttachmentHashType,
  AttachmentsSourceKey,
  AutomationDefinitionNotApprovedException,
  AutomationDefinitionNotFoundException,
  AutomationDefinitionVersionNotFoundException,
  AutomationExecutionFilterKey,
  AutomationExecutionLimitExceededException,
  AutomationExecutionNotFoundException,
  AutomationExecutionStatus,
  AutomationStepNotFoundException,
  AutomationSubtype,
  AutomationType,
  CalendarState,
  CancelCommandCommand,
  CancelMaintenanceWindowExecutionCommand,
  CommandFilterKey,
  CommandInvocationStatus,
  CommandPluginStatus,
  CommandStatus,
  ComplianceQueryOperatorType,
  ComplianceSeverity,
  ComplianceStatus,
  ComplianceTypeCountLimitExceededException,
  ComplianceUploadType,
  ConnectionStatus,
  CreateActivationCommand,
  CreateAssociationBatchCommand,
  CreateAssociationCommand,
  CreateDocumentCommand,
  CreateMaintenanceWindowCommand,
  CreateOpsItemCommand,
  CreateOpsMetadataCommand,
  CreatePatchBaselineCommand,
  CreateResourceDataSyncCommand,
  CustomSchemaCountLimitExceededException,
  DeleteActivationCommand,
  DeleteAssociationCommand,
  DeleteDocumentCommand,
  DeleteInventoryCommand,
  DeleteMaintenanceWindowCommand,
  DeleteOpsItemCommand,
  DeleteOpsMetadataCommand,
  DeleteParameterCommand,
  DeleteParametersCommand,
  DeletePatchBaselineCommand,
  DeleteResourceDataSyncCommand,
  DeleteResourcePolicyCommand,
  DeregisterManagedInstanceCommand,
  DeregisterPatchBaselineForPatchGroupCommand,
  DeregisterTargetFromMaintenanceWindowCommand,
  DeregisterTaskFromMaintenanceWindowCommand,
  DescribeActivationsCommand,
  DescribeActivationsFilterKeys,
  DescribeAssociationCommand,
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionsCommand,
  DescribeAutomationExecutionsCommand,
  DescribeAutomationStepExecutionsCommand,
  DescribeAvailablePatchesCommand,
  DescribeDocumentCommand,
  DescribeDocumentPermissionCommand,
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceInformationCommand,
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePatchesCommand,
  DescribeInstancePropertiesCommand,
  DescribeInventoryDeletionsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowTargetsCommand,
  DescribeMaintenanceWindowTasksCommand,
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeOpsItemsCommand,
  DescribeParametersCommand,
  DescribePatchBaselinesCommand,
  DescribePatchGroupStateCommand,
  DescribePatchGroupsCommand,
  DescribePatchPropertiesCommand,
  DescribeSessionsCommand,
  DisassociateOpsItemRelatedItemCommand,
  DocumentAlreadyExists,
  DocumentFilterKey,
  DocumentFormat,
  DocumentHashType,
  DocumentLimitExceeded,
  DocumentMetadataEnum,
  DocumentParameterType,
  DocumentPermissionLimit,
  DocumentPermissionType,
  DocumentReviewAction,
  DocumentReviewCommentType,
  DocumentStatus,
  DocumentType,
  DocumentVersionLimitExceeded,
  DoesNotExistException,
  DuplicateDocumentContent,
  DuplicateDocumentVersionName,
  DuplicateInstanceId,
  ExecutionMode,
  ExecutionPreviewStatus,
  ExternalAlarmState,
  Fault,
  FeatureNotAvailableException,
  GetAccessTokenCommand,
  GetAutomationExecutionCommand,
  GetCalendarStateCommand,
  GetCommandInvocationCommand,
  GetConnectionStatusCommand,
  GetDefaultPatchBaselineCommand,
  GetDeployablePatchSnapshotForInstanceCommand,
  GetDocumentCommand,
  GetExecutionPreviewCommand,
  GetInventoryCommand,
  GetInventorySchemaCommand,
  GetMaintenanceWindowCommand,
  GetMaintenanceWindowExecutionCommand,
  GetMaintenanceWindowExecutionTaskCommand,
  GetMaintenanceWindowExecutionTaskInvocationCommand,
  GetMaintenanceWindowTaskCommand,
  GetOpsItemCommand,
  GetOpsMetadataCommand,
  GetOpsSummaryCommand,
  GetParameterCommand,
  GetParameterHistoryCommand,
  GetParametersByPathCommand,
  GetParametersCommand,
  GetPatchBaselineCommand,
  GetPatchBaselineForPatchGroupCommand,
  GetResourcePoliciesCommand,
  GetServiceSettingCommand,
  HierarchyLevelLimitExceededException,
  HierarchyTypeMismatchException,
  IdempotentParameterMismatch,
  ImpactType,
  IncompatiblePolicyException,
  InstanceInformationFilterKey,
  InstancePatchStateOperatorType,
  InstancePropertyFilterKey,
  InstancePropertyFilterOperator,
  InternalServerError,
  InvalidActivation,
  InvalidActivationId,
  InvalidAggregatorException,
  InvalidAllowedPatternException,
  InvalidAssociation,
  InvalidAssociationVersion,
  InvalidAutomationExecutionParametersException,
  InvalidAutomationSignalException,
  InvalidAutomationStatusUpdateException,
  InvalidCommandId,
  InvalidDeleteInventoryParametersException,
  InvalidDeletionIdException,
  InvalidDocument,
  InvalidDocumentContent,
  InvalidDocumentOperation,
  InvalidDocumentSchemaVersion,
  InvalidDocumentType,
  InvalidDocumentVersion,
  InvalidFilter,
  InvalidFilterKey,
  InvalidFilterOption,
  InvalidFilterValue,
  InvalidInstanceId,
  InvalidInstanceInformationFilterValue,
  InvalidInstancePropertyFilterValue,
  InvalidInventoryGroupException,
  InvalidInventoryItemContextException,
  InvalidInventoryRequestException,
  InvalidItemContentException,
  InvalidKeyId,
  InvalidNextToken,
  InvalidNotificationConfig,
  InvalidOptionException,
  InvalidOutputFolder,
  InvalidOutputLocation,
  InvalidParameters,
  InvalidPermissionType,
  InvalidPluginName,
  InvalidPolicyAttributeException,
  InvalidPolicyTypeException,
  InvalidResourceId,
  InvalidResourceType,
  InvalidResultAttributeException,
  InvalidRole,
  InvalidSchedule,
  InvalidTag,
  InvalidTarget,
  InvalidTargetMaps,
  InvalidTypeNameException,
  InvalidUpdate,
  InventoryAttributeDataType,
  InventoryDeletionStatus,
  InventoryQueryOperatorType,
  InventorySchemaDeleteOption,
  InvocationDoesNotExist,
  ItemContentMismatchException,
  ItemSizeLimitExceededException,
  LabelParameterVersionCommand,
  LastResourceDataSyncStatus,
  ListAssociationVersionsCommand,
  ListAssociationsCommand,
  ListCommandInvocationsCommand,
  ListCommandsCommand,
  ListComplianceItemsCommand,
  ListComplianceSummariesCommand,
  ListDocumentMetadataHistoryCommand,
  ListDocumentVersionsCommand,
  ListDocumentsCommand,
  ListInventoryEntriesCommand,
  ListNodesCommand,
  ListNodesSummaryCommand,
  ListOpsItemEventsCommand,
  ListOpsItemRelatedItemsCommand,
  ListOpsMetadataCommand,
  ListResourceComplianceSummariesCommand,
  ListResourceDataSyncCommand,
  ListTagsForResourceCommand,
  MaintenanceWindowExecutionStatus,
  MaintenanceWindowResourceType,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskType,
  MalformedResourcePolicyDocumentException,
  ManagedStatus,
  MaxDocumentSizeExceeded,
  ModifyDocumentPermissionCommand,
  NoLongerSupportedException,
  NodeAggregatorType,
  NodeAttributeName,
  NodeFilterKey,
  NodeFilterOperatorType,
  NodeTypeName,
  NotificationEvent,
  NotificationType,
  OperatingSystem,
  OpsFilterOperatorType,
  OpsItemAccessDeniedException,
  OpsItemAlreadyExistsException,
  OpsItemConflictException,
  OpsItemDataType,
  OpsItemEventFilterKey,
  OpsItemEventFilterOperator,
  OpsItemFilterKey,
  OpsItemFilterOperator,
  OpsItemInvalidParameterException,
  OpsItemLimitExceededException,
  OpsItemNotFoundException,
  OpsItemRelatedItemAlreadyExistsException,
  OpsItemRelatedItemAssociationNotFoundException,
  OpsItemRelatedItemsFilterKey,
  OpsItemRelatedItemsFilterOperator,
  OpsItemStatus,
  OpsMetadataAlreadyExistsException,
  OpsMetadataInvalidArgumentException,
  OpsMetadataKeyLimitExceededException,
  OpsMetadataLimitExceededException,
  OpsMetadataNotFoundException,
  OpsMetadataTooManyUpdatesException,
  ParameterAlreadyExists,
  ParameterLimitExceeded,
  ParameterMaxVersionLimitExceeded,
  ParameterNotFound,
  ParameterPatternMismatchException,
  ParameterTier,
  ParameterType,
  ParameterVersionLabelLimitExceeded,
  ParameterVersionNotFound,
  ParametersFilterKey,
  PatchAction,
  PatchComplianceDataState,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PatchDeploymentStatus,
  PatchFilterKey,
  PatchOperationType,
  PatchProperty,
  PatchSet,
  PingStatus,
  PlatformType,
  PoliciesLimitExceededException,
  PutComplianceItemsCommand,
  PutInventoryCommand,
  PutParameterCommand,
  PutResourcePolicyCommand,
  RebootOption,
  RegisterDefaultPatchBaselineCommand,
  RegisterPatchBaselineForPatchGroupCommand,
  RegisterTargetWithMaintenanceWindowCommand,
  RegisterTaskWithMaintenanceWindowCommand,
  RemoveTagsFromResourceCommand,
  ResetServiceSettingCommand,
  ResourceDataSyncAlreadyExistsException,
  ResourceDataSyncConflictException,
  ResourceDataSyncCountExceededException,
  ResourceDataSyncInvalidConfigurationException,
  ResourceDataSyncNotFoundException,
  ResourceDataSyncS3Format,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourcePolicyConflictException,
  ResourcePolicyInvalidParameterException,
  ResourcePolicyLimitExceededException,
  ResourcePolicyNotFoundException,
  ResourceType,
  ResourceTypeForTagging,
  ResumeSessionCommand,
  ReviewStatus,
  SSM,
  SSMClient,
  SSMServiceException,
  SendAutomationSignalCommand,
  SendCommandCommand,
  ServiceQuotaExceededException,
  ServiceSettingNotFound,
  SessionFilterKey,
  SessionState,
  SessionStatus,
  SignalType,
  SourceType,
  StartAccessRequestCommand,
  StartAssociationsOnceCommand,
  StartAutomationExecutionCommand,
  StartChangeRequestExecutionCommand,
  StartExecutionPreviewCommand,
  StartSessionCommand,
  StatusUnchanged,
  StepExecutionFilterKey,
  StopAutomationExecutionCommand,
  StopType,
  SubTypeCountLimitExceededException,
  TargetInUseException,
  TargetNotConnected,
  TerminateSessionCommand,
  ThrottlingException,
  TooManyTagsError,
  TooManyUpdates,
  TotalSizeLimitExceededException,
  UnlabelParameterVersionCommand,
  UnsupportedCalendarException,
  UnsupportedFeatureRequiredException,
  UnsupportedInventoryItemContextException,
  UnsupportedInventorySchemaVersionException,
  UnsupportedOperatingSystem,
  UnsupportedOperationException,
  UnsupportedParameterType,
  UnsupportedPlatformType,
  UpdateAssociationCommand,
  UpdateAssociationStatusCommand,
  UpdateDocumentCommand,
  UpdateDocumentDefaultVersionCommand,
  UpdateDocumentMetadataCommand,
  UpdateMaintenanceWindowCommand,
  UpdateMaintenanceWindowTargetCommand,
  UpdateMaintenanceWindowTaskCommand,
  UpdateManagedInstanceRoleCommand,
  UpdateOpsItemCommand,
  UpdateOpsMetadataCommand,
  UpdatePatchBaselineCommand,
  UpdateResourceDataSyncCommand,
  UpdateServiceSettingCommand,
  ValidationException,
  paginateDescribeActivations,
  paginateDescribeAssociationExecutionTargets,
  paginateDescribeAssociationExecutions,
  paginateDescribeAutomationExecutions,
  paginateDescribeAutomationStepExecutions,
  paginateDescribeAvailablePatches,
  paginateDescribeEffectiveInstanceAssociations,
  paginateDescribeEffectivePatchesForPatchBaseline,
  paginateDescribeInstanceAssociationsStatus,
  paginateDescribeInstanceInformation,
  paginateDescribeInstancePatchStates,
  paginateDescribeInstancePatchStatesForPatchGroup,
  paginateDescribeInstancePatches,
  paginateDescribeInstanceProperties,
  paginateDescribeInventoryDeletions,
  paginateDescribeMaintenanceWindowExecutionTaskInvocations,
  paginateDescribeMaintenanceWindowExecutionTasks,
  paginateDescribeMaintenanceWindowExecutions,
  paginateDescribeMaintenanceWindowSchedule,
  paginateDescribeMaintenanceWindowTargets,
  paginateDescribeMaintenanceWindowTasks,
  paginateDescribeMaintenanceWindows,
  paginateDescribeMaintenanceWindowsForTarget,
  paginateDescribeOpsItems,
  paginateDescribeParameters,
  paginateDescribePatchBaselines,
  paginateDescribePatchGroups,
  paginateDescribePatchProperties,
  paginateDescribeSessions,
  paginateGetInventory,
  paginateGetInventorySchema,
  paginateGetOpsSummary,
  paginateGetParameterHistory,
  paginateGetParametersByPath,
  paginateGetResourcePolicies,
  paginateListAssociationVersions,
  paginateListAssociations,
  paginateListCommandInvocations,
  paginateListCommands,
  paginateListComplianceItems,
  paginateListComplianceSummaries,
  paginateListDocumentVersions,
  paginateListDocuments,
  paginateListNodes,
  paginateListNodesSummary,
  paginateListOpsItemEvents,
  paginateListOpsItemRelatedItems,
  paginateListOpsMetadata,
  paginateListResourceComplianceSummaries,
  paginateListResourceDataSync,
  waitForCommandExecuted,
  waitUntilCommandExecuted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMClient === "function");
assert(typeof SSM === "function");
// commands
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AssociateOpsItemRelatedItemCommand === "function");
assert(typeof CancelCommandCommand === "function");
assert(typeof CancelMaintenanceWindowExecutionCommand === "function");
assert(typeof CreateActivationCommand === "function");
assert(typeof CreateAssociationCommand === "function");
assert(typeof CreateAssociationBatchCommand === "function");
assert(typeof CreateDocumentCommand === "function");
assert(typeof CreateMaintenanceWindowCommand === "function");
assert(typeof CreateOpsItemCommand === "function");
assert(typeof CreateOpsMetadataCommand === "function");
assert(typeof CreatePatchBaselineCommand === "function");
assert(typeof CreateResourceDataSyncCommand === "function");
assert(typeof DeleteActivationCommand === "function");
assert(typeof DeleteAssociationCommand === "function");
assert(typeof DeleteDocumentCommand === "function");
assert(typeof DeleteInventoryCommand === "function");
assert(typeof DeleteMaintenanceWindowCommand === "function");
assert(typeof DeleteOpsItemCommand === "function");
assert(typeof DeleteOpsMetadataCommand === "function");
assert(typeof DeleteParameterCommand === "function");
assert(typeof DeleteParametersCommand === "function");
assert(typeof DeletePatchBaselineCommand === "function");
assert(typeof DeleteResourceDataSyncCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeregisterManagedInstanceCommand === "function");
assert(typeof DeregisterPatchBaselineForPatchGroupCommand === "function");
assert(typeof DeregisterTargetFromMaintenanceWindowCommand === "function");
assert(typeof DeregisterTaskFromMaintenanceWindowCommand === "function");
assert(typeof DescribeActivationsCommand === "function");
assert(typeof DescribeAssociationCommand === "function");
assert(typeof DescribeAssociationExecutionsCommand === "function");
assert(typeof DescribeAssociationExecutionTargetsCommand === "function");
assert(typeof DescribeAutomationExecutionsCommand === "function");
assert(typeof DescribeAutomationStepExecutionsCommand === "function");
assert(typeof DescribeAvailablePatchesCommand === "function");
assert(typeof DescribeDocumentCommand === "function");
assert(typeof DescribeDocumentPermissionCommand === "function");
assert(typeof DescribeEffectiveInstanceAssociationsCommand === "function");
assert(typeof DescribeEffectivePatchesForPatchBaselineCommand === "function");
assert(typeof DescribeInstanceAssociationsStatusCommand === "function");
assert(typeof DescribeInstanceInformationCommand === "function");
assert(typeof DescribeInstancePatchesCommand === "function");
assert(typeof DescribeInstancePatchStatesCommand === "function");
assert(typeof DescribeInstancePatchStatesForPatchGroupCommand === "function");
assert(typeof DescribeInstancePropertiesCommand === "function");
assert(typeof DescribeInventoryDeletionsCommand === "function");
assert(typeof DescribeMaintenanceWindowExecutionsCommand === "function");
assert(typeof DescribeMaintenanceWindowExecutionTaskInvocationsCommand === "function");
assert(typeof DescribeMaintenanceWindowExecutionTasksCommand === "function");
assert(typeof DescribeMaintenanceWindowsCommand === "function");
assert(typeof DescribeMaintenanceWindowScheduleCommand === "function");
assert(typeof DescribeMaintenanceWindowsForTargetCommand === "function");
assert(typeof DescribeMaintenanceWindowTargetsCommand === "function");
assert(typeof DescribeMaintenanceWindowTasksCommand === "function");
assert(typeof DescribeOpsItemsCommand === "function");
assert(typeof DescribeParametersCommand === "function");
assert(typeof DescribePatchBaselinesCommand === "function");
assert(typeof DescribePatchGroupsCommand === "function");
assert(typeof DescribePatchGroupStateCommand === "function");
assert(typeof DescribePatchPropertiesCommand === "function");
assert(typeof DescribeSessionsCommand === "function");
assert(typeof DisassociateOpsItemRelatedItemCommand === "function");
assert(typeof GetAccessTokenCommand === "function");
assert(typeof GetAutomationExecutionCommand === "function");
assert(typeof GetCalendarStateCommand === "function");
assert(typeof GetCommandInvocationCommand === "function");
assert(typeof GetConnectionStatusCommand === "function");
assert(typeof GetDefaultPatchBaselineCommand === "function");
assert(typeof GetDeployablePatchSnapshotForInstanceCommand === "function");
assert(typeof GetDocumentCommand === "function");
assert(typeof GetExecutionPreviewCommand === "function");
assert(typeof GetInventoryCommand === "function");
assert(typeof GetInventorySchemaCommand === "function");
assert(typeof GetMaintenanceWindowCommand === "function");
assert(typeof GetMaintenanceWindowExecutionCommand === "function");
assert(typeof GetMaintenanceWindowExecutionTaskCommand === "function");
assert(typeof GetMaintenanceWindowExecutionTaskInvocationCommand === "function");
assert(typeof GetMaintenanceWindowTaskCommand === "function");
assert(typeof GetOpsItemCommand === "function");
assert(typeof GetOpsMetadataCommand === "function");
assert(typeof GetOpsSummaryCommand === "function");
assert(typeof GetParameterCommand === "function");
assert(typeof GetParameterHistoryCommand === "function");
assert(typeof GetParametersCommand === "function");
assert(typeof GetParametersByPathCommand === "function");
assert(typeof GetPatchBaselineCommand === "function");
assert(typeof GetPatchBaselineForPatchGroupCommand === "function");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetServiceSettingCommand === "function");
assert(typeof LabelParameterVersionCommand === "function");
assert(typeof ListAssociationsCommand === "function");
assert(typeof ListAssociationVersionsCommand === "function");
assert(typeof ListCommandInvocationsCommand === "function");
assert(typeof ListCommandsCommand === "function");
assert(typeof ListComplianceItemsCommand === "function");
assert(typeof ListComplianceSummariesCommand === "function");
assert(typeof ListDocumentMetadataHistoryCommand === "function");
assert(typeof ListDocumentsCommand === "function");
assert(typeof ListDocumentVersionsCommand === "function");
assert(typeof ListInventoryEntriesCommand === "function");
assert(typeof ListNodesCommand === "function");
assert(typeof ListNodesSummaryCommand === "function");
assert(typeof ListOpsItemEventsCommand === "function");
assert(typeof ListOpsItemRelatedItemsCommand === "function");
assert(typeof ListOpsMetadataCommand === "function");
assert(typeof ListResourceComplianceSummariesCommand === "function");
assert(typeof ListResourceDataSyncCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ModifyDocumentPermissionCommand === "function");
assert(typeof PutComplianceItemsCommand === "function");
assert(typeof PutInventoryCommand === "function");
assert(typeof PutParameterCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RegisterDefaultPatchBaselineCommand === "function");
assert(typeof RegisterPatchBaselineForPatchGroupCommand === "function");
assert(typeof RegisterTargetWithMaintenanceWindowCommand === "function");
assert(typeof RegisterTaskWithMaintenanceWindowCommand === "function");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof ResetServiceSettingCommand === "function");
assert(typeof ResumeSessionCommand === "function");
assert(typeof SendAutomationSignalCommand === "function");
assert(typeof SendCommandCommand === "function");
assert(typeof StartAccessRequestCommand === "function");
assert(typeof StartAssociationsOnceCommand === "function");
assert(typeof StartAutomationExecutionCommand === "function");
assert(typeof StartChangeRequestExecutionCommand === "function");
assert(typeof StartExecutionPreviewCommand === "function");
assert(typeof StartSessionCommand === "function");
assert(typeof StopAutomationExecutionCommand === "function");
assert(typeof TerminateSessionCommand === "function");
assert(typeof UnlabelParameterVersionCommand === "function");
assert(typeof UpdateAssociationCommand === "function");
assert(typeof UpdateAssociationStatusCommand === "function");
assert(typeof UpdateDocumentCommand === "function");
assert(typeof UpdateDocumentDefaultVersionCommand === "function");
assert(typeof UpdateDocumentMetadataCommand === "function");
assert(typeof UpdateMaintenanceWindowCommand === "function");
assert(typeof UpdateMaintenanceWindowTargetCommand === "function");
assert(typeof UpdateMaintenanceWindowTaskCommand === "function");
assert(typeof UpdateManagedInstanceRoleCommand === "function");
assert(typeof UpdateOpsItemCommand === "function");
assert(typeof UpdateOpsMetadataCommand === "function");
assert(typeof UpdatePatchBaselineCommand === "function");
assert(typeof UpdateResourceDataSyncCommand === "function");
assert(typeof UpdateServiceSettingCommand === "function");
// enums
assert(typeof AccessRequestStatus === "object");
assert(typeof AccessType === "object");
assert(typeof AssociationComplianceSeverity === "object");
assert(typeof AssociationExecutionFilterKey === "object");
assert(typeof AssociationExecutionTargetsFilterKey === "object");
assert(typeof AssociationFilterKey === "object");
assert(typeof AssociationFilterOperatorType === "object");
assert(typeof AssociationStatusName === "object");
assert(typeof AssociationSyncCompliance === "object");
assert(typeof AttachmentHashType === "object");
assert(typeof AttachmentsSourceKey === "object");
assert(typeof AutomationExecutionFilterKey === "object");
assert(typeof AutomationExecutionStatus === "object");
assert(typeof AutomationSubtype === "object");
assert(typeof AutomationType === "object");
assert(typeof CalendarState === "object");
assert(typeof CommandFilterKey === "object");
assert(typeof CommandInvocationStatus === "object");
assert(typeof CommandPluginStatus === "object");
assert(typeof CommandStatus === "object");
assert(typeof ComplianceQueryOperatorType === "object");
assert(typeof ComplianceSeverity === "object");
assert(typeof ComplianceStatus === "object");
assert(typeof ComplianceUploadType === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof DescribeActivationsFilterKeys === "object");
assert(typeof DocumentFilterKey === "object");
assert(typeof DocumentFormat === "object");
assert(typeof DocumentHashType === "object");
assert(typeof DocumentMetadataEnum === "object");
assert(typeof DocumentParameterType === "object");
assert(typeof DocumentPermissionType === "object");
assert(typeof DocumentReviewAction === "object");
assert(typeof DocumentReviewCommentType === "object");
assert(typeof DocumentStatus === "object");
assert(typeof DocumentType === "object");
assert(typeof ExecutionMode === "object");
assert(typeof ExecutionPreviewStatus === "object");
assert(typeof ExternalAlarmState === "object");
assert(typeof Fault === "object");
assert(typeof ImpactType === "object");
assert(typeof InstanceInformationFilterKey === "object");
assert(typeof InstancePatchStateOperatorType === "object");
assert(typeof InstancePropertyFilterKey === "object");
assert(typeof InstancePropertyFilterOperator === "object");
assert(typeof InventoryAttributeDataType === "object");
assert(typeof InventoryDeletionStatus === "object");
assert(typeof InventoryQueryOperatorType === "object");
assert(typeof InventorySchemaDeleteOption === "object");
assert(typeof LastResourceDataSyncStatus === "object");
assert(typeof MaintenanceWindowExecutionStatus === "object");
assert(typeof MaintenanceWindowResourceType === "object");
assert(typeof MaintenanceWindowTaskCutoffBehavior === "object");
assert(typeof MaintenanceWindowTaskType === "object");
assert(typeof ManagedStatus === "object");
assert(typeof NodeAggregatorType === "object");
assert(typeof NodeAttributeName === "object");
assert(typeof NodeFilterKey === "object");
assert(typeof NodeFilterOperatorType === "object");
assert(typeof NodeTypeName === "object");
assert(typeof NotificationEvent === "object");
assert(typeof NotificationType === "object");
assert(typeof OperatingSystem === "object");
assert(typeof OpsFilterOperatorType === "object");
assert(typeof OpsItemDataType === "object");
assert(typeof OpsItemEventFilterKey === "object");
assert(typeof OpsItemEventFilterOperator === "object");
assert(typeof OpsItemFilterKey === "object");
assert(typeof OpsItemFilterOperator === "object");
assert(typeof OpsItemRelatedItemsFilterKey === "object");
assert(typeof OpsItemRelatedItemsFilterOperator === "object");
assert(typeof OpsItemStatus === "object");
assert(typeof ParametersFilterKey === "object");
assert(typeof ParameterTier === "object");
assert(typeof ParameterType === "object");
assert(typeof PatchAction === "object");
assert(typeof PatchComplianceDataState === "object");
assert(typeof PatchComplianceLevel === "object");
assert(typeof PatchComplianceStatus === "object");
assert(typeof PatchDeploymentStatus === "object");
assert(typeof PatchFilterKey === "object");
assert(typeof PatchOperationType === "object");
assert(typeof PatchProperty === "object");
assert(typeof PatchSet === "object");
assert(typeof PingStatus === "object");
assert(typeof PlatformType === "object");
assert(typeof RebootOption === "object");
assert(typeof ResourceDataSyncS3Format === "object");
assert(typeof ResourceType === "object");
assert(typeof ResourceTypeForTagging === "object");
assert(typeof ReviewStatus === "object");
assert(typeof SessionFilterKey === "object");
assert(typeof SessionState === "object");
assert(typeof SessionStatus === "object");
assert(typeof SignalType === "object");
assert(typeof SourceType === "object");
assert(typeof StepExecutionFilterKey === "object");
assert(typeof StopType === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSMServiceException);
assert(AlreadyExistsException.prototype instanceof SSMServiceException);
assert(AssociatedInstances.prototype instanceof SSMServiceException);
assert(AssociationAlreadyExists.prototype instanceof SSMServiceException);
assert(AssociationDoesNotExist.prototype instanceof SSMServiceException);
assert(AssociationExecutionDoesNotExist.prototype instanceof SSMServiceException);
assert(AssociationLimitExceeded.prototype instanceof SSMServiceException);
assert(AssociationVersionLimitExceeded.prototype instanceof SSMServiceException);
assert(AutomationDefinitionNotApprovedException.prototype instanceof SSMServiceException);
assert(AutomationDefinitionNotFoundException.prototype instanceof SSMServiceException);
assert(AutomationDefinitionVersionNotFoundException.prototype instanceof SSMServiceException);
assert(AutomationExecutionLimitExceededException.prototype instanceof SSMServiceException);
assert(AutomationExecutionNotFoundException.prototype instanceof SSMServiceException);
assert(AutomationStepNotFoundException.prototype instanceof SSMServiceException);
assert(ComplianceTypeCountLimitExceededException.prototype instanceof SSMServiceException);
assert(CustomSchemaCountLimitExceededException.prototype instanceof SSMServiceException);
assert(DocumentAlreadyExists.prototype instanceof SSMServiceException);
assert(DocumentLimitExceeded.prototype instanceof SSMServiceException);
assert(DocumentPermissionLimit.prototype instanceof SSMServiceException);
assert(DocumentVersionLimitExceeded.prototype instanceof SSMServiceException);
assert(DoesNotExistException.prototype instanceof SSMServiceException);
assert(DuplicateDocumentContent.prototype instanceof SSMServiceException);
assert(DuplicateDocumentVersionName.prototype instanceof SSMServiceException);
assert(DuplicateInstanceId.prototype instanceof SSMServiceException);
assert(FeatureNotAvailableException.prototype instanceof SSMServiceException);
assert(HierarchyLevelLimitExceededException.prototype instanceof SSMServiceException);
assert(HierarchyTypeMismatchException.prototype instanceof SSMServiceException);
assert(IdempotentParameterMismatch.prototype instanceof SSMServiceException);
assert(IncompatiblePolicyException.prototype instanceof SSMServiceException);
assert(InternalServerError.prototype instanceof SSMServiceException);
assert(InvalidActivation.prototype instanceof SSMServiceException);
assert(InvalidActivationId.prototype instanceof SSMServiceException);
assert(InvalidAggregatorException.prototype instanceof SSMServiceException);
assert(InvalidAllowedPatternException.prototype instanceof SSMServiceException);
assert(InvalidAssociation.prototype instanceof SSMServiceException);
assert(InvalidAssociationVersion.prototype instanceof SSMServiceException);
assert(InvalidAutomationExecutionParametersException.prototype instanceof SSMServiceException);
assert(InvalidAutomationSignalException.prototype instanceof SSMServiceException);
assert(InvalidAutomationStatusUpdateException.prototype instanceof SSMServiceException);
assert(InvalidCommandId.prototype instanceof SSMServiceException);
assert(InvalidDeleteInventoryParametersException.prototype instanceof SSMServiceException);
assert(InvalidDeletionIdException.prototype instanceof SSMServiceException);
assert(InvalidDocument.prototype instanceof SSMServiceException);
assert(InvalidDocumentContent.prototype instanceof SSMServiceException);
assert(InvalidDocumentOperation.prototype instanceof SSMServiceException);
assert(InvalidDocumentSchemaVersion.prototype instanceof SSMServiceException);
assert(InvalidDocumentType.prototype instanceof SSMServiceException);
assert(InvalidDocumentVersion.prototype instanceof SSMServiceException);
assert(InvalidFilter.prototype instanceof SSMServiceException);
assert(InvalidFilterKey.prototype instanceof SSMServiceException);
assert(InvalidFilterOption.prototype instanceof SSMServiceException);
assert(InvalidFilterValue.prototype instanceof SSMServiceException);
assert(InvalidInstanceId.prototype instanceof SSMServiceException);
assert(InvalidInstanceInformationFilterValue.prototype instanceof SSMServiceException);
assert(InvalidInstancePropertyFilterValue.prototype instanceof SSMServiceException);
assert(InvalidInventoryGroupException.prototype instanceof SSMServiceException);
assert(InvalidInventoryItemContextException.prototype instanceof SSMServiceException);
assert(InvalidInventoryRequestException.prototype instanceof SSMServiceException);
assert(InvalidItemContentException.prototype instanceof SSMServiceException);
assert(InvalidKeyId.prototype instanceof SSMServiceException);
assert(InvalidNextToken.prototype instanceof SSMServiceException);
assert(InvalidNotificationConfig.prototype instanceof SSMServiceException);
assert(InvalidOptionException.prototype instanceof SSMServiceException);
assert(InvalidOutputFolder.prototype instanceof SSMServiceException);
assert(InvalidOutputLocation.prototype instanceof SSMServiceException);
assert(InvalidParameters.prototype instanceof SSMServiceException);
assert(InvalidPermissionType.prototype instanceof SSMServiceException);
assert(InvalidPluginName.prototype instanceof SSMServiceException);
assert(InvalidPolicyAttributeException.prototype instanceof SSMServiceException);
assert(InvalidPolicyTypeException.prototype instanceof SSMServiceException);
assert(InvalidResourceId.prototype instanceof SSMServiceException);
assert(InvalidResourceType.prototype instanceof SSMServiceException);
assert(InvalidResultAttributeException.prototype instanceof SSMServiceException);
assert(InvalidRole.prototype instanceof SSMServiceException);
assert(InvalidSchedule.prototype instanceof SSMServiceException);
assert(InvalidTag.prototype instanceof SSMServiceException);
assert(InvalidTarget.prototype instanceof SSMServiceException);
assert(InvalidTargetMaps.prototype instanceof SSMServiceException);
assert(InvalidTypeNameException.prototype instanceof SSMServiceException);
assert(InvalidUpdate.prototype instanceof SSMServiceException);
assert(InvocationDoesNotExist.prototype instanceof SSMServiceException);
assert(ItemContentMismatchException.prototype instanceof SSMServiceException);
assert(ItemSizeLimitExceededException.prototype instanceof SSMServiceException);
assert(MalformedResourcePolicyDocumentException.prototype instanceof SSMServiceException);
assert(MaxDocumentSizeExceeded.prototype instanceof SSMServiceException);
assert(NoLongerSupportedException.prototype instanceof SSMServiceException);
assert(OpsItemAccessDeniedException.prototype instanceof SSMServiceException);
assert(OpsItemAlreadyExistsException.prototype instanceof SSMServiceException);
assert(OpsItemConflictException.prototype instanceof SSMServiceException);
assert(OpsItemInvalidParameterException.prototype instanceof SSMServiceException);
assert(OpsItemLimitExceededException.prototype instanceof SSMServiceException);
assert(OpsItemNotFoundException.prototype instanceof SSMServiceException);
assert(OpsItemRelatedItemAlreadyExistsException.prototype instanceof SSMServiceException);
assert(OpsItemRelatedItemAssociationNotFoundException.prototype instanceof SSMServiceException);
assert(OpsMetadataAlreadyExistsException.prototype instanceof SSMServiceException);
assert(OpsMetadataInvalidArgumentException.prototype instanceof SSMServiceException);
assert(OpsMetadataKeyLimitExceededException.prototype instanceof SSMServiceException);
assert(OpsMetadataLimitExceededException.prototype instanceof SSMServiceException);
assert(OpsMetadataNotFoundException.prototype instanceof SSMServiceException);
assert(OpsMetadataTooManyUpdatesException.prototype instanceof SSMServiceException);
assert(ParameterAlreadyExists.prototype instanceof SSMServiceException);
assert(ParameterLimitExceeded.prototype instanceof SSMServiceException);
assert(ParameterMaxVersionLimitExceeded.prototype instanceof SSMServiceException);
assert(ParameterNotFound.prototype instanceof SSMServiceException);
assert(ParameterPatternMismatchException.prototype instanceof SSMServiceException);
assert(ParameterVersionLabelLimitExceeded.prototype instanceof SSMServiceException);
assert(ParameterVersionNotFound.prototype instanceof SSMServiceException);
assert(PoliciesLimitExceededException.prototype instanceof SSMServiceException);
assert(ResourceDataSyncAlreadyExistsException.prototype instanceof SSMServiceException);
assert(ResourceDataSyncConflictException.prototype instanceof SSMServiceException);
assert(ResourceDataSyncCountExceededException.prototype instanceof SSMServiceException);
assert(ResourceDataSyncInvalidConfigurationException.prototype instanceof SSMServiceException);
assert(ResourceDataSyncNotFoundException.prototype instanceof SSMServiceException);
assert(ResourceInUseException.prototype instanceof SSMServiceException);
assert(ResourceLimitExceededException.prototype instanceof SSMServiceException);
assert(ResourceNotFoundException.prototype instanceof SSMServiceException);
assert(ResourcePolicyConflictException.prototype instanceof SSMServiceException);
assert(ResourcePolicyInvalidParameterException.prototype instanceof SSMServiceException);
assert(ResourcePolicyLimitExceededException.prototype instanceof SSMServiceException);
assert(ResourcePolicyNotFoundException.prototype instanceof SSMServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SSMServiceException);
assert(ServiceSettingNotFound.prototype instanceof SSMServiceException);
assert(StatusUnchanged.prototype instanceof SSMServiceException);
assert(SubTypeCountLimitExceededException.prototype instanceof SSMServiceException);
assert(TargetInUseException.prototype instanceof SSMServiceException);
assert(TargetNotConnected.prototype instanceof SSMServiceException);
assert(ThrottlingException.prototype instanceof SSMServiceException);
assert(TooManyTagsError.prototype instanceof SSMServiceException);
assert(TooManyUpdates.prototype instanceof SSMServiceException);
assert(TotalSizeLimitExceededException.prototype instanceof SSMServiceException);
assert(UnsupportedCalendarException.prototype instanceof SSMServiceException);
assert(UnsupportedFeatureRequiredException.prototype instanceof SSMServiceException);
assert(UnsupportedInventoryItemContextException.prototype instanceof SSMServiceException);
assert(UnsupportedInventorySchemaVersionException.prototype instanceof SSMServiceException);
assert(UnsupportedOperatingSystem.prototype instanceof SSMServiceException);
assert(UnsupportedOperationException.prototype instanceof SSMServiceException);
assert(UnsupportedParameterType.prototype instanceof SSMServiceException);
assert(UnsupportedPlatformType.prototype instanceof SSMServiceException);
assert(ValidationException.prototype instanceof SSMServiceException);
assert(SSMServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCommandExecuted === "function");
assert(typeof waitUntilCommandExecuted === "function");
// paginators
assert(typeof paginateDescribeActivations === "function");
assert(typeof paginateDescribeAssociationExecutionTargets === "function");
assert(typeof paginateDescribeAssociationExecutions === "function");
assert(typeof paginateDescribeAutomationExecutions === "function");
assert(typeof paginateDescribeAutomationStepExecutions === "function");
assert(typeof paginateDescribeAvailablePatches === "function");
assert(typeof paginateDescribeEffectiveInstanceAssociations === "function");
assert(typeof paginateDescribeEffectivePatchesForPatchBaseline === "function");
assert(typeof paginateDescribeInstanceAssociationsStatus === "function");
assert(typeof paginateDescribeInstanceInformation === "function");
assert(typeof paginateDescribeInstancePatchStates === "function");
assert(typeof paginateDescribeInstancePatchStatesForPatchGroup === "function");
assert(typeof paginateDescribeInstancePatches === "function");
assert(typeof paginateDescribeInstanceProperties === "function");
assert(typeof paginateDescribeInventoryDeletions === "function");
assert(typeof paginateDescribeMaintenanceWindowExecutionTaskInvocations === "function");
assert(typeof paginateDescribeMaintenanceWindowExecutionTasks === "function");
assert(typeof paginateDescribeMaintenanceWindowExecutions === "function");
assert(typeof paginateDescribeMaintenanceWindowSchedule === "function");
assert(typeof paginateDescribeMaintenanceWindowTargets === "function");
assert(typeof paginateDescribeMaintenanceWindowTasks === "function");
assert(typeof paginateDescribeMaintenanceWindows === "function");
assert(typeof paginateDescribeMaintenanceWindowsForTarget === "function");
assert(typeof paginateDescribeOpsItems === "function");
assert(typeof paginateDescribeParameters === "function");
assert(typeof paginateDescribePatchBaselines === "function");
assert(typeof paginateDescribePatchGroups === "function");
assert(typeof paginateDescribePatchProperties === "function");
assert(typeof paginateDescribeSessions === "function");
assert(typeof paginateGetInventory === "function");
assert(typeof paginateGetInventorySchema === "function");
assert(typeof paginateGetOpsSummary === "function");
assert(typeof paginateGetParameterHistory === "function");
assert(typeof paginateGetParametersByPath === "function");
assert(typeof paginateGetResourcePolicies === "function");
assert(typeof paginateListAssociationVersions === "function");
assert(typeof paginateListAssociations === "function");
assert(typeof paginateListCommandInvocations === "function");
assert(typeof paginateListCommands === "function");
assert(typeof paginateListComplianceItems === "function");
assert(typeof paginateListComplianceSummaries === "function");
assert(typeof paginateListDocumentVersions === "function");
assert(typeof paginateListDocuments === "function");
assert(typeof paginateListNodes === "function");
assert(typeof paginateListNodesSummary === "function");
assert(typeof paginateListOpsItemEvents === "function");
assert(typeof paginateListOpsItemRelatedItems === "function");
assert(typeof paginateListOpsMetadata === "function");
assert(typeof paginateListResourceComplianceSummaries === "function");
assert(typeof paginateListResourceDataSync === "function");
console.log(`SSM index test passed.`);
