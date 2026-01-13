import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessRequestStatus,
  AccessType,
  AccountSharingInfo$,
  Activation$,
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceRequest$,
  AddTagsToResourceResult$,
  Alarm$,
  AlarmConfiguration$,
  AlarmStateInformation$,
  AlreadyExistsException,
  AlreadyExistsException$,
  AssociatedInstances,
  AssociatedInstances$,
  AssociateOpsItemRelatedItem$,
  AssociateOpsItemRelatedItemCommand,
  AssociateOpsItemRelatedItemRequest$,
  AssociateOpsItemRelatedItemResponse$,
  Association$,
  AssociationAlreadyExists,
  AssociationAlreadyExists$,
  AssociationComplianceSeverity,
  AssociationDescription$,
  AssociationDoesNotExist,
  AssociationDoesNotExist$,
  AssociationExecution$,
  AssociationExecutionDoesNotExist,
  AssociationExecutionDoesNotExist$,
  AssociationExecutionFilter$,
  AssociationExecutionFilterKey,
  AssociationExecutionTarget$,
  AssociationExecutionTargetsFilter$,
  AssociationExecutionTargetsFilterKey,
  AssociationFilter$,
  AssociationFilterKey,
  AssociationFilterOperatorType,
  AssociationLimitExceeded,
  AssociationLimitExceeded$,
  AssociationOverview$,
  AssociationStatus$,
  AssociationStatusName,
  AssociationSyncCompliance,
  AssociationVersionInfo$,
  AssociationVersionLimitExceeded,
  AssociationVersionLimitExceeded$,
  AttachmentContent$,
  AttachmentHashType,
  AttachmentInformation$,
  AttachmentsSource$,
  AttachmentsSourceKey,
  AutomationDefinitionNotApprovedException,
  AutomationDefinitionNotApprovedException$,
  AutomationDefinitionNotFoundException,
  AutomationDefinitionNotFoundException$,
  AutomationDefinitionVersionNotFoundException,
  AutomationDefinitionVersionNotFoundException$,
  AutomationExecution$,
  AutomationExecutionFilter$,
  AutomationExecutionFilterKey,
  AutomationExecutionInputs$,
  AutomationExecutionLimitExceededException,
  AutomationExecutionLimitExceededException$,
  AutomationExecutionMetadata$,
  AutomationExecutionNotFoundException,
  AutomationExecutionNotFoundException$,
  AutomationExecutionPreview$,
  AutomationExecutionStatus,
  AutomationStepNotFoundException,
  AutomationStepNotFoundException$,
  AutomationSubtype,
  AutomationType,
  BaselineOverride$,
  CalendarState,
  CancelCommand$,
  CancelCommandCommand,
  CancelCommandRequest$,
  CancelCommandResult$,
  CancelMaintenanceWindowExecution$,
  CancelMaintenanceWindowExecutionCommand,
  CancelMaintenanceWindowExecutionRequest$,
  CancelMaintenanceWindowExecutionResult$,
  CloudWatchOutputConfig$,
  Command$,
  CommandFilter$,
  CommandFilterKey,
  CommandInvocation$,
  CommandInvocationStatus,
  CommandPlugin$,
  CommandPluginStatus,
  CommandStatus,
  ComplianceExecutionSummary$,
  ComplianceItem$,
  ComplianceItemEntry$,
  ComplianceQueryOperatorType,
  ComplianceSeverity,
  ComplianceStatus,
  ComplianceStringFilter$,
  ComplianceSummaryItem$,
  ComplianceTypeCountLimitExceededException,
  ComplianceTypeCountLimitExceededException$,
  ComplianceUploadType,
  CompliantSummary$,
  ConnectionStatus,
  CreateActivation$,
  CreateActivationCommand,
  CreateActivationRequest$,
  CreateActivationResult$,
  CreateAssociation$,
  CreateAssociationBatch$,
  CreateAssociationBatchCommand,
  CreateAssociationBatchRequest$,
  CreateAssociationBatchRequestEntry$,
  CreateAssociationBatchResult$,
  CreateAssociationCommand,
  CreateAssociationRequest$,
  CreateAssociationResult$,
  CreateDocument$,
  CreateDocumentCommand,
  CreateDocumentRequest$,
  CreateDocumentResult$,
  CreateMaintenanceWindow$,
  CreateMaintenanceWindowCommand,
  CreateMaintenanceWindowRequest$,
  CreateMaintenanceWindowResult$,
  CreateOpsItem$,
  CreateOpsItemCommand,
  CreateOpsItemRequest$,
  CreateOpsItemResponse$,
  CreateOpsMetadata$,
  CreateOpsMetadataCommand,
  CreateOpsMetadataRequest$,
  CreateOpsMetadataResult$,
  CreatePatchBaseline$,
  CreatePatchBaselineCommand,
  CreatePatchBaselineRequest$,
  CreatePatchBaselineResult$,
  CreateResourceDataSync$,
  CreateResourceDataSyncCommand,
  CreateResourceDataSyncRequest$,
  CreateResourceDataSyncResult$,
  Credentials$,
  CustomSchemaCountLimitExceededException,
  CustomSchemaCountLimitExceededException$,
  DeleteActivation$,
  DeleteActivationCommand,
  DeleteActivationRequest$,
  DeleteActivationResult$,
  DeleteAssociation$,
  DeleteAssociationCommand,
  DeleteAssociationRequest$,
  DeleteAssociationResult$,
  DeleteDocument$,
  DeleteDocumentCommand,
  DeleteDocumentRequest$,
  DeleteDocumentResult$,
  DeleteInventory$,
  DeleteInventoryCommand,
  DeleteInventoryRequest$,
  DeleteInventoryResult$,
  DeleteMaintenanceWindow$,
  DeleteMaintenanceWindowCommand,
  DeleteMaintenanceWindowRequest$,
  DeleteMaintenanceWindowResult$,
  DeleteOpsItem$,
  DeleteOpsItemCommand,
  DeleteOpsItemRequest$,
  DeleteOpsItemResponse$,
  DeleteOpsMetadata$,
  DeleteOpsMetadataCommand,
  DeleteOpsMetadataRequest$,
  DeleteOpsMetadataResult$,
  DeleteParameter$,
  DeleteParameterCommand,
  DeleteParameterRequest$,
  DeleteParameterResult$,
  DeleteParameters$,
  DeleteParametersCommand,
  DeleteParametersRequest$,
  DeleteParametersResult$,
  DeletePatchBaseline$,
  DeletePatchBaselineCommand,
  DeletePatchBaselineRequest$,
  DeletePatchBaselineResult$,
  DeleteResourceDataSync$,
  DeleteResourceDataSyncCommand,
  DeleteResourceDataSyncRequest$,
  DeleteResourceDataSyncResult$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeregisterManagedInstance$,
  DeregisterManagedInstanceCommand,
  DeregisterManagedInstanceRequest$,
  DeregisterManagedInstanceResult$,
  DeregisterPatchBaselineForPatchGroup$,
  DeregisterPatchBaselineForPatchGroupCommand,
  DeregisterPatchBaselineForPatchGroupRequest$,
  DeregisterPatchBaselineForPatchGroupResult$,
  DeregisterTargetFromMaintenanceWindow$,
  DeregisterTargetFromMaintenanceWindowCommand,
  DeregisterTargetFromMaintenanceWindowRequest$,
  DeregisterTargetFromMaintenanceWindowResult$,
  DeregisterTaskFromMaintenanceWindow$,
  DeregisterTaskFromMaintenanceWindowCommand,
  DeregisterTaskFromMaintenanceWindowRequest$,
  DeregisterTaskFromMaintenanceWindowResult$,
  DescribeActivations$,
  DescribeActivationsCommand,
  DescribeActivationsFilter$,
  DescribeActivationsFilterKeys,
  DescribeActivationsRequest$,
  DescribeActivationsResult$,
  DescribeAssociation$,
  DescribeAssociationCommand,
  DescribeAssociationExecutions$,
  DescribeAssociationExecutionsCommand,
  DescribeAssociationExecutionsRequest$,
  DescribeAssociationExecutionsResult$,
  DescribeAssociationExecutionTargets$,
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionTargetsRequest$,
  DescribeAssociationExecutionTargetsResult$,
  DescribeAssociationRequest$,
  DescribeAssociationResult$,
  DescribeAutomationExecutions$,
  DescribeAutomationExecutionsCommand,
  DescribeAutomationExecutionsRequest$,
  DescribeAutomationExecutionsResult$,
  DescribeAutomationStepExecutions$,
  DescribeAutomationStepExecutionsCommand,
  DescribeAutomationStepExecutionsRequest$,
  DescribeAutomationStepExecutionsResult$,
  DescribeAvailablePatches$,
  DescribeAvailablePatchesCommand,
  DescribeAvailablePatchesRequest$,
  DescribeAvailablePatchesResult$,
  DescribeDocument$,
  DescribeDocumentCommand,
  DescribeDocumentPermission$,
  DescribeDocumentPermissionCommand,
  DescribeDocumentPermissionRequest$,
  DescribeDocumentPermissionResponse$,
  DescribeDocumentRequest$,
  DescribeDocumentResult$,
  DescribeEffectiveInstanceAssociations$,
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectiveInstanceAssociationsRequest$,
  DescribeEffectiveInstanceAssociationsResult$,
  DescribeEffectivePatchesForPatchBaseline$,
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeEffectivePatchesForPatchBaselineRequest$,
  DescribeEffectivePatchesForPatchBaselineResult$,
  DescribeInstanceAssociationsStatus$,
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceAssociationsStatusRequest$,
  DescribeInstanceAssociationsStatusResult$,
  DescribeInstanceInformation$,
  DescribeInstanceInformationCommand,
  DescribeInstanceInformationRequest$,
  DescribeInstanceInformationResult$,
  DescribeInstancePatches$,
  DescribeInstancePatchesCommand,
  DescribeInstancePatchesRequest$,
  DescribeInstancePatchesResult$,
  DescribeInstancePatchStates$,
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesForPatchGroup$,
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePatchStatesForPatchGroupRequest$,
  DescribeInstancePatchStatesForPatchGroupResult$,
  DescribeInstancePatchStatesRequest$,
  DescribeInstancePatchStatesResult$,
  DescribeInstanceProperties$,
  DescribeInstancePropertiesCommand,
  DescribeInstancePropertiesRequest$,
  DescribeInstancePropertiesResult$,
  DescribeInventoryDeletions$,
  DescribeInventoryDeletionsCommand,
  DescribeInventoryDeletionsRequest$,
  DescribeInventoryDeletionsResult$,
  DescribeMaintenanceWindowExecutions$,
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowExecutionsRequest$,
  DescribeMaintenanceWindowExecutionsResult$,
  DescribeMaintenanceWindowExecutionTaskInvocations$,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsRequest$,
  DescribeMaintenanceWindowExecutionTaskInvocationsResult$,
  DescribeMaintenanceWindowExecutionTasks$,
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowExecutionTasksRequest$,
  DescribeMaintenanceWindowExecutionTasksResult$,
  DescribeMaintenanceWindows$,
  DescribeMaintenanceWindowSchedule$,
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowScheduleRequest$,
  DescribeMaintenanceWindowScheduleResult$,
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowsForTarget$,
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeMaintenanceWindowsForTargetRequest$,
  DescribeMaintenanceWindowsForTargetResult$,
  DescribeMaintenanceWindowsRequest$,
  DescribeMaintenanceWindowsResult$,
  DescribeMaintenanceWindowTargets$,
  DescribeMaintenanceWindowTargetsCommand,
  DescribeMaintenanceWindowTargetsRequest$,
  DescribeMaintenanceWindowTargetsResult$,
  DescribeMaintenanceWindowTasks$,
  DescribeMaintenanceWindowTasksCommand,
  DescribeMaintenanceWindowTasksRequest$,
  DescribeMaintenanceWindowTasksResult$,
  DescribeOpsItems$,
  DescribeOpsItemsCommand,
  DescribeOpsItemsRequest$,
  DescribeOpsItemsResponse$,
  DescribeParameters$,
  DescribeParametersCommand,
  DescribeParametersRequest$,
  DescribeParametersResult$,
  DescribePatchBaselines$,
  DescribePatchBaselinesCommand,
  DescribePatchBaselinesRequest$,
  DescribePatchBaselinesResult$,
  DescribePatchGroups$,
  DescribePatchGroupsCommand,
  DescribePatchGroupsRequest$,
  DescribePatchGroupsResult$,
  DescribePatchGroupState$,
  DescribePatchGroupStateCommand,
  DescribePatchGroupStateRequest$,
  DescribePatchGroupStateResult$,
  DescribePatchProperties$,
  DescribePatchPropertiesCommand,
  DescribePatchPropertiesRequest$,
  DescribePatchPropertiesResult$,
  DescribeSessions$,
  DescribeSessionsCommand,
  DescribeSessionsRequest$,
  DescribeSessionsResponse$,
  DisassociateOpsItemRelatedItem$,
  DisassociateOpsItemRelatedItemCommand,
  DisassociateOpsItemRelatedItemRequest$,
  DisassociateOpsItemRelatedItemResponse$,
  DocumentAlreadyExists,
  DocumentAlreadyExists$,
  DocumentDefaultVersionDescription$,
  DocumentDescription$,
  DocumentFilter$,
  DocumentFilterKey,
  DocumentFormat,
  DocumentHashType,
  DocumentIdentifier$,
  DocumentKeyValuesFilter$,
  DocumentLimitExceeded,
  DocumentLimitExceeded$,
  DocumentMetadataEnum,
  DocumentMetadataResponseInfo$,
  DocumentParameter$,
  DocumentParameterType,
  DocumentPermissionLimit,
  DocumentPermissionLimit$,
  DocumentPermissionType,
  DocumentRequires$,
  DocumentReviewAction,
  DocumentReviewCommentSource$,
  DocumentReviewCommentType,
  DocumentReviewerResponseSource$,
  DocumentReviews$,
  DocumentStatus,
  DocumentType,
  DocumentVersionInfo$,
  DocumentVersionLimitExceeded,
  DocumentVersionLimitExceeded$,
  DoesNotExistException,
  DoesNotExistException$,
  DuplicateDocumentContent,
  DuplicateDocumentContent$,
  DuplicateDocumentVersionName,
  DuplicateDocumentVersionName$,
  DuplicateInstanceId,
  DuplicateInstanceId$,
  EffectivePatch$,
  ExecutionInputs$,
  ExecutionMode,
  ExecutionPreview$,
  ExecutionPreviewStatus,
  ExternalAlarmState,
  FailedCreateAssociation$,
  FailureDetails$,
  Fault,
  FeatureNotAvailableException,
  FeatureNotAvailableException$,
  GetAccessToken$,
  GetAccessTokenCommand,
  GetAccessTokenRequest$,
  GetAccessTokenResponse$,
  GetAutomationExecution$,
  GetAutomationExecutionCommand,
  GetAutomationExecutionRequest$,
  GetAutomationExecutionResult$,
  GetCalendarState$,
  GetCalendarStateCommand,
  GetCalendarStateRequest$,
  GetCalendarStateResponse$,
  GetCommandInvocation$,
  GetCommandInvocationCommand,
  GetCommandInvocationRequest$,
  GetCommandInvocationResult$,
  GetConnectionStatus$,
  GetConnectionStatusCommand,
  GetConnectionStatusRequest$,
  GetConnectionStatusResponse$,
  GetDefaultPatchBaseline$,
  GetDefaultPatchBaselineCommand,
  GetDefaultPatchBaselineRequest$,
  GetDefaultPatchBaselineResult$,
  GetDeployablePatchSnapshotForInstance$,
  GetDeployablePatchSnapshotForInstanceCommand,
  GetDeployablePatchSnapshotForInstanceRequest$,
  GetDeployablePatchSnapshotForInstanceResult$,
  GetDocument$,
  GetDocumentCommand,
  GetDocumentRequest$,
  GetDocumentResult$,
  GetExecutionPreview$,
  GetExecutionPreviewCommand,
  GetExecutionPreviewRequest$,
  GetExecutionPreviewResponse$,
  GetInventory$,
  GetInventoryCommand,
  GetInventoryRequest$,
  GetInventoryResult$,
  GetInventorySchema$,
  GetInventorySchemaCommand,
  GetInventorySchemaRequest$,
  GetInventorySchemaResult$,
  GetMaintenanceWindow$,
  GetMaintenanceWindowCommand,
  GetMaintenanceWindowExecution$,
  GetMaintenanceWindowExecutionCommand,
  GetMaintenanceWindowExecutionRequest$,
  GetMaintenanceWindowExecutionResult$,
  GetMaintenanceWindowExecutionTask$,
  GetMaintenanceWindowExecutionTaskCommand,
  GetMaintenanceWindowExecutionTaskInvocation$,
  GetMaintenanceWindowExecutionTaskInvocationCommand,
  GetMaintenanceWindowExecutionTaskInvocationRequest$,
  GetMaintenanceWindowExecutionTaskInvocationResult$,
  GetMaintenanceWindowExecutionTaskRequest$,
  GetMaintenanceWindowExecutionTaskResult$,
  GetMaintenanceWindowRequest$,
  GetMaintenanceWindowResult$,
  GetMaintenanceWindowTask$,
  GetMaintenanceWindowTaskCommand,
  GetMaintenanceWindowTaskRequest$,
  GetMaintenanceWindowTaskResult$,
  GetOpsItem$,
  GetOpsItemCommand,
  GetOpsItemRequest$,
  GetOpsItemResponse$,
  GetOpsMetadata$,
  GetOpsMetadataCommand,
  GetOpsMetadataRequest$,
  GetOpsMetadataResult$,
  GetOpsSummary$,
  GetOpsSummaryCommand,
  GetOpsSummaryRequest$,
  GetOpsSummaryResult$,
  GetParameter$,
  GetParameterCommand,
  GetParameterHistory$,
  GetParameterHistoryCommand,
  GetParameterHistoryRequest$,
  GetParameterHistoryResult$,
  GetParameterRequest$,
  GetParameterResult$,
  GetParameters$,
  GetParametersByPath$,
  GetParametersByPathCommand,
  GetParametersByPathRequest$,
  GetParametersByPathResult$,
  GetParametersCommand,
  GetParametersRequest$,
  GetParametersResult$,
  GetPatchBaseline$,
  GetPatchBaselineCommand,
  GetPatchBaselineForPatchGroup$,
  GetPatchBaselineForPatchGroupCommand,
  GetPatchBaselineForPatchGroupRequest$,
  GetPatchBaselineForPatchGroupResult$,
  GetPatchBaselineRequest$,
  GetPatchBaselineResult$,
  GetResourcePolicies$,
  GetResourcePoliciesCommand,
  GetResourcePoliciesRequest$,
  GetResourcePoliciesResponse$,
  GetResourcePoliciesResponseEntry$,
  GetServiceSetting$,
  GetServiceSettingCommand,
  GetServiceSettingRequest$,
  GetServiceSettingResult$,
  HierarchyLevelLimitExceededException,
  HierarchyLevelLimitExceededException$,
  HierarchyTypeMismatchException,
  HierarchyTypeMismatchException$,
  IdempotentParameterMismatch,
  IdempotentParameterMismatch$,
  ImpactType,
  IncompatiblePolicyException,
  IncompatiblePolicyException$,
  InstanceAggregatedAssociationOverview$,
  InstanceAssociation$,
  InstanceAssociationOutputLocation$,
  InstanceAssociationOutputUrl$,
  InstanceAssociationStatusInfo$,
  InstanceInfo$,
  InstanceInformation$,
  InstanceInformationFilter$,
  InstanceInformationFilterKey,
  InstanceInformationStringFilter$,
  InstancePatchState$,
  InstancePatchStateFilter$,
  InstancePatchStateOperatorType,
  InstanceProperty$,
  InstancePropertyFilter$,
  InstancePropertyFilterKey,
  InstancePropertyFilterOperator,
  InstancePropertyStringFilter$,
  InternalServerError,
  InternalServerError$,
  InvalidActivation,
  InvalidActivation$,
  InvalidActivationId,
  InvalidActivationId$,
  InvalidAggregatorException,
  InvalidAggregatorException$,
  InvalidAllowedPatternException,
  InvalidAllowedPatternException$,
  InvalidAssociation,
  InvalidAssociation$,
  InvalidAssociationVersion,
  InvalidAssociationVersion$,
  InvalidAutomationExecutionParametersException,
  InvalidAutomationExecutionParametersException$,
  InvalidAutomationSignalException,
  InvalidAutomationSignalException$,
  InvalidAutomationStatusUpdateException,
  InvalidAutomationStatusUpdateException$,
  InvalidCommandId,
  InvalidCommandId$,
  InvalidDeleteInventoryParametersException,
  InvalidDeleteInventoryParametersException$,
  InvalidDeletionIdException,
  InvalidDeletionIdException$,
  InvalidDocument,
  InvalidDocument$,
  InvalidDocumentContent,
  InvalidDocumentContent$,
  InvalidDocumentOperation,
  InvalidDocumentOperation$,
  InvalidDocumentSchemaVersion,
  InvalidDocumentSchemaVersion$,
  InvalidDocumentType,
  InvalidDocumentType$,
  InvalidDocumentVersion,
  InvalidDocumentVersion$,
  InvalidFilter,
  InvalidFilter$,
  InvalidFilterKey,
  InvalidFilterKey$,
  InvalidFilterOption,
  InvalidFilterOption$,
  InvalidFilterValue,
  InvalidFilterValue$,
  InvalidInstanceId,
  InvalidInstanceId$,
  InvalidInstanceInformationFilterValue,
  InvalidInstanceInformationFilterValue$,
  InvalidInstancePropertyFilterValue,
  InvalidInstancePropertyFilterValue$,
  InvalidInventoryGroupException,
  InvalidInventoryGroupException$,
  InvalidInventoryItemContextException,
  InvalidInventoryItemContextException$,
  InvalidInventoryRequestException,
  InvalidInventoryRequestException$,
  InvalidItemContentException,
  InvalidItemContentException$,
  InvalidKeyId,
  InvalidKeyId$,
  InvalidNextToken,
  InvalidNextToken$,
  InvalidNotificationConfig,
  InvalidNotificationConfig$,
  InvalidOptionException,
  InvalidOptionException$,
  InvalidOutputFolder,
  InvalidOutputFolder$,
  InvalidOutputLocation,
  InvalidOutputLocation$,
  InvalidParameters,
  InvalidParameters$,
  InvalidPermissionType,
  InvalidPermissionType$,
  InvalidPluginName,
  InvalidPluginName$,
  InvalidPolicyAttributeException,
  InvalidPolicyAttributeException$,
  InvalidPolicyTypeException,
  InvalidPolicyTypeException$,
  InvalidResourceId,
  InvalidResourceId$,
  InvalidResourceType,
  InvalidResourceType$,
  InvalidResultAttributeException,
  InvalidResultAttributeException$,
  InvalidRole,
  InvalidRole$,
  InvalidSchedule,
  InvalidSchedule$,
  InvalidTag,
  InvalidTag$,
  InvalidTarget,
  InvalidTarget$,
  InvalidTargetMaps,
  InvalidTargetMaps$,
  InvalidTypeNameException,
  InvalidTypeNameException$,
  InvalidUpdate,
  InvalidUpdate$,
  InventoryAggregator$,
  InventoryAttributeDataType,
  InventoryDeletionStatus,
  InventoryDeletionStatusItem$,
  InventoryDeletionSummary$,
  InventoryDeletionSummaryItem$,
  InventoryFilter$,
  InventoryGroup$,
  InventoryItem$,
  InventoryItemAttribute$,
  InventoryItemSchema$,
  InventoryQueryOperatorType,
  InventoryResultEntity$,
  InventoryResultItem$,
  InventorySchemaDeleteOption,
  InvocationDoesNotExist,
  InvocationDoesNotExist$,
  ItemContentMismatchException,
  ItemContentMismatchException$,
  ItemSizeLimitExceededException,
  ItemSizeLimitExceededException$,
  LabelParameterVersion$,
  LabelParameterVersionCommand,
  LabelParameterVersionRequest$,
  LabelParameterVersionResult$,
  LastResourceDataSyncStatus,
  ListAssociations$,
  ListAssociationsCommand,
  ListAssociationsRequest$,
  ListAssociationsResult$,
  ListAssociationVersions$,
  ListAssociationVersionsCommand,
  ListAssociationVersionsRequest$,
  ListAssociationVersionsResult$,
  ListCommandInvocations$,
  ListCommandInvocationsCommand,
  ListCommandInvocationsRequest$,
  ListCommandInvocationsResult$,
  ListCommands$,
  ListCommandsCommand,
  ListCommandsRequest$,
  ListCommandsResult$,
  ListComplianceItems$,
  ListComplianceItemsCommand,
  ListComplianceItemsRequest$,
  ListComplianceItemsResult$,
  ListComplianceSummaries$,
  ListComplianceSummariesCommand,
  ListComplianceSummariesRequest$,
  ListComplianceSummariesResult$,
  ListDocumentMetadataHistory$,
  ListDocumentMetadataHistoryCommand,
  ListDocumentMetadataHistoryRequest$,
  ListDocumentMetadataHistoryResponse$,
  ListDocuments$,
  ListDocumentsCommand,
  ListDocumentsRequest$,
  ListDocumentsResult$,
  ListDocumentVersions$,
  ListDocumentVersionsCommand,
  ListDocumentVersionsRequest$,
  ListDocumentVersionsResult$,
  ListInventoryEntries$,
  ListInventoryEntriesCommand,
  ListInventoryEntriesRequest$,
  ListInventoryEntriesResult$,
  ListNodes$,
  ListNodesCommand,
  ListNodesRequest$,
  ListNodesResult$,
  ListNodesSummary$,
  ListNodesSummaryCommand,
  ListNodesSummaryRequest$,
  ListNodesSummaryResult$,
  ListOpsItemEvents$,
  ListOpsItemEventsCommand,
  ListOpsItemEventsRequest$,
  ListOpsItemEventsResponse$,
  ListOpsItemRelatedItems$,
  ListOpsItemRelatedItemsCommand,
  ListOpsItemRelatedItemsRequest$,
  ListOpsItemRelatedItemsResponse$,
  ListOpsMetadata$,
  ListOpsMetadataCommand,
  ListOpsMetadataRequest$,
  ListOpsMetadataResult$,
  ListResourceComplianceSummaries$,
  ListResourceComplianceSummariesCommand,
  ListResourceComplianceSummariesRequest$,
  ListResourceComplianceSummariesResult$,
  ListResourceDataSync$,
  ListResourceDataSyncCommand,
  ListResourceDataSyncRequest$,
  ListResourceDataSyncResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  LoggingInfo$,
  MaintenanceWindowAutomationParameters$,
  MaintenanceWindowExecution$,
  MaintenanceWindowExecutionStatus,
  MaintenanceWindowExecutionTaskIdentity$,
  MaintenanceWindowExecutionTaskInvocationIdentity$,
  MaintenanceWindowFilter$,
  MaintenanceWindowIdentity$,
  MaintenanceWindowIdentityForTarget$,
  MaintenanceWindowLambdaParameters$,
  MaintenanceWindowResourceType,
  MaintenanceWindowRunCommandParameters$,
  MaintenanceWindowStepFunctionsParameters$,
  MaintenanceWindowTarget$,
  MaintenanceWindowTask$,
  MaintenanceWindowTaskCutoffBehavior,
  MaintenanceWindowTaskInvocationParameters$,
  MaintenanceWindowTaskParameterValueExpression$,
  MaintenanceWindowTaskType,
  MalformedResourcePolicyDocumentException,
  MalformedResourcePolicyDocumentException$,
  ManagedStatus,
  MaxDocumentSizeExceeded,
  MaxDocumentSizeExceeded$,
  MetadataValue$,
  ModifyDocumentPermission$,
  ModifyDocumentPermissionCommand,
  ModifyDocumentPermissionRequest$,
  ModifyDocumentPermissionResponse$,
  Node$,
  NodeAggregator$,
  NodeAggregatorType,
  NodeAttributeName,
  NodeFilter$,
  NodeFilterKey,
  NodeFilterOperatorType,
  NodeOwnerInfo$,
  NodeType$,
  NodeTypeName,
  NoLongerSupportedException,
  NoLongerSupportedException$,
  NonCompliantSummary$,
  NotificationConfig$,
  NotificationEvent,
  NotificationType,
  OperatingSystem,
  OpsAggregator$,
  OpsEntity$,
  OpsEntityItem$,
  OpsFilter$,
  OpsFilterOperatorType,
  OpsItem$,
  OpsItemAccessDeniedException,
  OpsItemAccessDeniedException$,
  OpsItemAlreadyExistsException,
  OpsItemAlreadyExistsException$,
  OpsItemConflictException,
  OpsItemConflictException$,
  OpsItemDataType,
  OpsItemDataValue$,
  OpsItemEventFilter$,
  OpsItemEventFilterKey,
  OpsItemEventFilterOperator,
  OpsItemEventSummary$,
  OpsItemFilter$,
  OpsItemFilterKey,
  OpsItemFilterOperator,
  OpsItemIdentity$,
  OpsItemInvalidParameterException,
  OpsItemInvalidParameterException$,
  OpsItemLimitExceededException,
  OpsItemLimitExceededException$,
  OpsItemNotFoundException,
  OpsItemNotFoundException$,
  OpsItemNotification$,
  OpsItemRelatedItemAlreadyExistsException,
  OpsItemRelatedItemAlreadyExistsException$,
  OpsItemRelatedItemAssociationNotFoundException,
  OpsItemRelatedItemAssociationNotFoundException$,
  OpsItemRelatedItemsFilter$,
  OpsItemRelatedItemsFilterKey,
  OpsItemRelatedItemsFilterOperator,
  OpsItemRelatedItemSummary$,
  OpsItemStatus,
  OpsItemSummary$,
  OpsMetadata$,
  OpsMetadataAlreadyExistsException,
  OpsMetadataAlreadyExistsException$,
  OpsMetadataFilter$,
  OpsMetadataInvalidArgumentException,
  OpsMetadataInvalidArgumentException$,
  OpsMetadataKeyLimitExceededException,
  OpsMetadataKeyLimitExceededException$,
  OpsMetadataLimitExceededException,
  OpsMetadataLimitExceededException$,
  OpsMetadataNotFoundException,
  OpsMetadataNotFoundException$,
  OpsMetadataTooManyUpdatesException,
  OpsMetadataTooManyUpdatesException$,
  OpsResultAttribute$,
  OutputSource$,
  paginateDescribeActivations,
  paginateDescribeAssociationExecutions,
  paginateDescribeAssociationExecutionTargets,
  paginateDescribeAutomationExecutions,
  paginateDescribeAutomationStepExecutions,
  paginateDescribeAvailablePatches,
  paginateDescribeEffectiveInstanceAssociations,
  paginateDescribeEffectivePatchesForPatchBaseline,
  paginateDescribeInstanceAssociationsStatus,
  paginateDescribeInstanceInformation,
  paginateDescribeInstancePatches,
  paginateDescribeInstancePatchStates,
  paginateDescribeInstancePatchStatesForPatchGroup,
  paginateDescribeInstanceProperties,
  paginateDescribeInventoryDeletions,
  paginateDescribeMaintenanceWindowExecutions,
  paginateDescribeMaintenanceWindowExecutionTaskInvocations,
  paginateDescribeMaintenanceWindowExecutionTasks,
  paginateDescribeMaintenanceWindows,
  paginateDescribeMaintenanceWindowSchedule,
  paginateDescribeMaintenanceWindowsForTarget,
  paginateDescribeMaintenanceWindowTargets,
  paginateDescribeMaintenanceWindowTasks,
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
  paginateListAssociations,
  paginateListAssociationVersions,
  paginateListCommandInvocations,
  paginateListCommands,
  paginateListComplianceItems,
  paginateListComplianceSummaries,
  paginateListDocuments,
  paginateListDocumentVersions,
  paginateListNodes,
  paginateListNodesSummary,
  paginateListOpsItemEvents,
  paginateListOpsItemRelatedItems,
  paginateListOpsMetadata,
  paginateListResourceComplianceSummaries,
  paginateListResourceDataSync,
  Parameter$,
  ParameterAlreadyExists,
  ParameterAlreadyExists$,
  ParameterHistory$,
  ParameterInlinePolicy$,
  ParameterLimitExceeded,
  ParameterLimitExceeded$,
  ParameterMaxVersionLimitExceeded,
  ParameterMaxVersionLimitExceeded$,
  ParameterMetadata$,
  ParameterNotFound,
  ParameterNotFound$,
  ParameterPatternMismatchException,
  ParameterPatternMismatchException$,
  ParametersFilter$,
  ParametersFilterKey,
  ParameterStringFilter$,
  ParameterTier,
  ParameterType,
  ParameterVersionLabelLimitExceeded,
  ParameterVersionLabelLimitExceeded$,
  ParameterVersionNotFound,
  ParameterVersionNotFound$,
  ParentStepDetails$,
  Patch$,
  PatchAction,
  PatchBaselineIdentity$,
  PatchComplianceData$,
  PatchComplianceDataState,
  PatchComplianceLevel,
  PatchComplianceStatus,
  PatchDeploymentStatus,
  PatchFilter$,
  PatchFilterGroup$,
  PatchFilterKey,
  PatchGroupPatchBaselineMapping$,
  PatchOperationType,
  PatchOrchestratorFilter$,
  PatchProperty,
  PatchRule$,
  PatchRuleGroup$,
  PatchSet,
  PatchSource$,
  PatchStatus$,
  PingStatus,
  PlatformType,
  PoliciesLimitExceededException,
  PoliciesLimitExceededException$,
  ProgressCounters$,
  PutComplianceItems$,
  PutComplianceItemsCommand,
  PutComplianceItemsRequest$,
  PutComplianceItemsResult$,
  PutInventory$,
  PutInventoryCommand,
  PutInventoryRequest$,
  PutInventoryResult$,
  PutParameter$,
  PutParameterCommand,
  PutParameterRequest$,
  PutParameterResult$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RebootOption,
  RegisterDefaultPatchBaseline$,
  RegisterDefaultPatchBaselineCommand,
  RegisterDefaultPatchBaselineRequest$,
  RegisterDefaultPatchBaselineResult$,
  RegisterPatchBaselineForPatchGroup$,
  RegisterPatchBaselineForPatchGroupCommand,
  RegisterPatchBaselineForPatchGroupRequest$,
  RegisterPatchBaselineForPatchGroupResult$,
  RegisterTargetWithMaintenanceWindow$,
  RegisterTargetWithMaintenanceWindowCommand,
  RegisterTargetWithMaintenanceWindowRequest$,
  RegisterTargetWithMaintenanceWindowResult$,
  RegisterTaskWithMaintenanceWindow$,
  RegisterTaskWithMaintenanceWindowCommand,
  RegisterTaskWithMaintenanceWindowRequest$,
  RegisterTaskWithMaintenanceWindowResult$,
  RegistrationMetadataItem$,
  RelatedOpsItem$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceRequest$,
  RemoveTagsFromResourceResult$,
  ResetServiceSetting$,
  ResetServiceSettingCommand,
  ResetServiceSettingRequest$,
  ResetServiceSettingResult$,
  ResolvedTargets$,
  ResourceComplianceSummaryItem$,
  ResourceDataSyncAlreadyExistsException,
  ResourceDataSyncAlreadyExistsException$,
  ResourceDataSyncAwsOrganizationsSource$,
  ResourceDataSyncConflictException,
  ResourceDataSyncConflictException$,
  ResourceDataSyncCountExceededException,
  ResourceDataSyncCountExceededException$,
  ResourceDataSyncDestinationDataSharing$,
  ResourceDataSyncInvalidConfigurationException,
  ResourceDataSyncInvalidConfigurationException$,
  ResourceDataSyncItem$,
  ResourceDataSyncNotFoundException,
  ResourceDataSyncNotFoundException$,
  ResourceDataSyncOrganizationalUnit$,
  ResourceDataSyncS3Destination$,
  ResourceDataSyncS3Format,
  ResourceDataSyncSource$,
  ResourceDataSyncSourceWithState$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicyConflictException,
  ResourcePolicyConflictException$,
  ResourcePolicyInvalidParameterException,
  ResourcePolicyInvalidParameterException$,
  ResourcePolicyLimitExceededException,
  ResourcePolicyLimitExceededException$,
  ResourcePolicyNotFoundException,
  ResourcePolicyNotFoundException$,
  ResourceType,
  ResourceTypeForTagging,
  ResultAttribute$,
  ResumeSession$,
  ResumeSessionCommand,
  ResumeSessionRequest$,
  ResumeSessionResponse$,
  ReviewInformation$,
  ReviewStatus,
  Runbook$,
  S3OutputLocation$,
  S3OutputUrl$,
  ScheduledWindowExecution$,
  SendAutomationSignal$,
  SendAutomationSignalCommand,
  SendAutomationSignalRequest$,
  SendAutomationSignalResult$,
  SendCommand$,
  SendCommandCommand,
  SendCommandRequest$,
  SendCommandResult$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceSetting$,
  ServiceSettingNotFound,
  ServiceSettingNotFound$,
  Session$,
  SessionFilter$,
  SessionFilterKey,
  SessionManagerOutputUrl$,
  SessionState,
  SessionStatus,
  SeveritySummary$,
  SignalType,
  SourceType,
  SSM,
  SSMClient,
  SSMServiceException,
  StartAccessRequest$,
  StartAccessRequestCommand,
  StartAccessRequestRequest$,
  StartAccessRequestResponse$,
  StartAssociationsOnce$,
  StartAssociationsOnceCommand,
  StartAssociationsOnceRequest$,
  StartAssociationsOnceResult$,
  StartAutomationExecution$,
  StartAutomationExecutionCommand,
  StartAutomationExecutionRequest$,
  StartAutomationExecutionResult$,
  StartChangeRequestExecution$,
  StartChangeRequestExecutionCommand,
  StartChangeRequestExecutionRequest$,
  StartChangeRequestExecutionResult$,
  StartExecutionPreview$,
  StartExecutionPreviewCommand,
  StartExecutionPreviewRequest$,
  StartExecutionPreviewResponse$,
  StartSession$,
  StartSessionCommand,
  StartSessionRequest$,
  StartSessionResponse$,
  StatusUnchanged,
  StatusUnchanged$,
  StepExecution$,
  StepExecutionFilter$,
  StepExecutionFilterKey,
  StopAutomationExecution$,
  StopAutomationExecutionCommand,
  StopAutomationExecutionRequest$,
  StopAutomationExecutionResult$,
  StopType,
  SubTypeCountLimitExceededException,
  SubTypeCountLimitExceededException$,
  Tag$,
  Target$,
  TargetInUseException,
  TargetInUseException$,
  TargetLocation$,
  TargetNotConnected,
  TargetNotConnected$,
  TargetPreview$,
  TerminateSession$,
  TerminateSessionCommand,
  TerminateSessionRequest$,
  TerminateSessionResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsError,
  TooManyTagsError$,
  TooManyUpdates,
  TooManyUpdates$,
  TotalSizeLimitExceededException,
  TotalSizeLimitExceededException$,
  UnlabelParameterVersion$,
  UnlabelParameterVersionCommand,
  UnlabelParameterVersionRequest$,
  UnlabelParameterVersionResult$,
  UnsupportedCalendarException,
  UnsupportedCalendarException$,
  UnsupportedFeatureRequiredException,
  UnsupportedFeatureRequiredException$,
  UnsupportedInventoryItemContextException,
  UnsupportedInventoryItemContextException$,
  UnsupportedInventorySchemaVersionException,
  UnsupportedInventorySchemaVersionException$,
  UnsupportedOperatingSystem,
  UnsupportedOperatingSystem$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UnsupportedParameterType,
  UnsupportedParameterType$,
  UnsupportedPlatformType,
  UnsupportedPlatformType$,
  UpdateAssociation$,
  UpdateAssociationCommand,
  UpdateAssociationRequest$,
  UpdateAssociationResult$,
  UpdateAssociationStatus$,
  UpdateAssociationStatusCommand,
  UpdateAssociationStatusRequest$,
  UpdateAssociationStatusResult$,
  UpdateDocument$,
  UpdateDocumentCommand,
  UpdateDocumentDefaultVersion$,
  UpdateDocumentDefaultVersionCommand,
  UpdateDocumentDefaultVersionRequest$,
  UpdateDocumentDefaultVersionResult$,
  UpdateDocumentMetadata$,
  UpdateDocumentMetadataCommand,
  UpdateDocumentMetadataRequest$,
  UpdateDocumentMetadataResponse$,
  UpdateDocumentRequest$,
  UpdateDocumentResult$,
  UpdateMaintenanceWindow$,
  UpdateMaintenanceWindowCommand,
  UpdateMaintenanceWindowRequest$,
  UpdateMaintenanceWindowResult$,
  UpdateMaintenanceWindowTarget$,
  UpdateMaintenanceWindowTargetCommand,
  UpdateMaintenanceWindowTargetRequest$,
  UpdateMaintenanceWindowTargetResult$,
  UpdateMaintenanceWindowTask$,
  UpdateMaintenanceWindowTaskCommand,
  UpdateMaintenanceWindowTaskRequest$,
  UpdateMaintenanceWindowTaskResult$,
  UpdateManagedInstanceRole$,
  UpdateManagedInstanceRoleCommand,
  UpdateManagedInstanceRoleRequest$,
  UpdateManagedInstanceRoleResult$,
  UpdateOpsItem$,
  UpdateOpsItemCommand,
  UpdateOpsItemRequest$,
  UpdateOpsItemResponse$,
  UpdateOpsMetadata$,
  UpdateOpsMetadataCommand,
  UpdateOpsMetadataRequest$,
  UpdateOpsMetadataResult$,
  UpdatePatchBaseline$,
  UpdatePatchBaselineCommand,
  UpdatePatchBaselineRequest$,
  UpdatePatchBaselineResult$,
  UpdateResourceDataSync$,
  UpdateResourceDataSyncCommand,
  UpdateResourceDataSyncRequest$,
  UpdateResourceDataSyncResult$,
  UpdateServiceSetting$,
  UpdateServiceSettingCommand,
  UpdateServiceSettingRequest$,
  UpdateServiceSettingResult$,
  ValidationException,
  ValidationException$,
  waitForCommandExecuted,
  waitUntilCommandExecuted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMClient === "function");
assert(typeof SSM === "function");
// commands
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddTagsToResource$ === "object");
assert(typeof AssociateOpsItemRelatedItemCommand === "function");
assert(typeof AssociateOpsItemRelatedItem$ === "object");
assert(typeof CancelCommandCommand === "function");
assert(typeof CancelCommand$ === "object");
assert(typeof CancelMaintenanceWindowExecutionCommand === "function");
assert(typeof CancelMaintenanceWindowExecution$ === "object");
assert(typeof CreateActivationCommand === "function");
assert(typeof CreateActivation$ === "object");
assert(typeof CreateAssociationCommand === "function");
assert(typeof CreateAssociation$ === "object");
assert(typeof CreateAssociationBatchCommand === "function");
assert(typeof CreateAssociationBatch$ === "object");
assert(typeof CreateDocumentCommand === "function");
assert(typeof CreateDocument$ === "object");
assert(typeof CreateMaintenanceWindowCommand === "function");
assert(typeof CreateMaintenanceWindow$ === "object");
assert(typeof CreateOpsItemCommand === "function");
assert(typeof CreateOpsItem$ === "object");
assert(typeof CreateOpsMetadataCommand === "function");
assert(typeof CreateOpsMetadata$ === "object");
assert(typeof CreatePatchBaselineCommand === "function");
assert(typeof CreatePatchBaseline$ === "object");
assert(typeof CreateResourceDataSyncCommand === "function");
assert(typeof CreateResourceDataSync$ === "object");
assert(typeof DeleteActivationCommand === "function");
assert(typeof DeleteActivation$ === "object");
assert(typeof DeleteAssociationCommand === "function");
assert(typeof DeleteAssociation$ === "object");
assert(typeof DeleteDocumentCommand === "function");
assert(typeof DeleteDocument$ === "object");
assert(typeof DeleteInventoryCommand === "function");
assert(typeof DeleteInventory$ === "object");
assert(typeof DeleteMaintenanceWindowCommand === "function");
assert(typeof DeleteMaintenanceWindow$ === "object");
assert(typeof DeleteOpsItemCommand === "function");
assert(typeof DeleteOpsItem$ === "object");
assert(typeof DeleteOpsMetadataCommand === "function");
assert(typeof DeleteOpsMetadata$ === "object");
assert(typeof DeleteParameterCommand === "function");
assert(typeof DeleteParameter$ === "object");
assert(typeof DeleteParametersCommand === "function");
assert(typeof DeleteParameters$ === "object");
assert(typeof DeletePatchBaselineCommand === "function");
assert(typeof DeletePatchBaseline$ === "object");
assert(typeof DeleteResourceDataSyncCommand === "function");
assert(typeof DeleteResourceDataSync$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeregisterManagedInstanceCommand === "function");
assert(typeof DeregisterManagedInstance$ === "object");
assert(typeof DeregisterPatchBaselineForPatchGroupCommand === "function");
assert(typeof DeregisterPatchBaselineForPatchGroup$ === "object");
assert(typeof DeregisterTargetFromMaintenanceWindowCommand === "function");
assert(typeof DeregisterTargetFromMaintenanceWindow$ === "object");
assert(typeof DeregisterTaskFromMaintenanceWindowCommand === "function");
assert(typeof DeregisterTaskFromMaintenanceWindow$ === "object");
assert(typeof DescribeActivationsCommand === "function");
assert(typeof DescribeActivations$ === "object");
assert(typeof DescribeAssociationCommand === "function");
assert(typeof DescribeAssociation$ === "object");
assert(typeof DescribeAssociationExecutionsCommand === "function");
assert(typeof DescribeAssociationExecutions$ === "object");
assert(typeof DescribeAssociationExecutionTargetsCommand === "function");
assert(typeof DescribeAssociationExecutionTargets$ === "object");
assert(typeof DescribeAutomationExecutionsCommand === "function");
assert(typeof DescribeAutomationExecutions$ === "object");
assert(typeof DescribeAutomationStepExecutionsCommand === "function");
assert(typeof DescribeAutomationStepExecutions$ === "object");
assert(typeof DescribeAvailablePatchesCommand === "function");
assert(typeof DescribeAvailablePatches$ === "object");
assert(typeof DescribeDocumentCommand === "function");
assert(typeof DescribeDocument$ === "object");
assert(typeof DescribeDocumentPermissionCommand === "function");
assert(typeof DescribeDocumentPermission$ === "object");
assert(typeof DescribeEffectiveInstanceAssociationsCommand === "function");
assert(typeof DescribeEffectiveInstanceAssociations$ === "object");
assert(typeof DescribeEffectivePatchesForPatchBaselineCommand === "function");
assert(typeof DescribeEffectivePatchesForPatchBaseline$ === "object");
assert(typeof DescribeInstanceAssociationsStatusCommand === "function");
assert(typeof DescribeInstanceAssociationsStatus$ === "object");
assert(typeof DescribeInstanceInformationCommand === "function");
assert(typeof DescribeInstanceInformation$ === "object");
assert(typeof DescribeInstancePatchesCommand === "function");
assert(typeof DescribeInstancePatches$ === "object");
assert(typeof DescribeInstancePatchStatesCommand === "function");
assert(typeof DescribeInstancePatchStates$ === "object");
assert(typeof DescribeInstancePatchStatesForPatchGroupCommand === "function");
assert(typeof DescribeInstancePatchStatesForPatchGroup$ === "object");
assert(typeof DescribeInstancePropertiesCommand === "function");
assert(typeof DescribeInstanceProperties$ === "object");
assert(typeof DescribeInventoryDeletionsCommand === "function");
assert(typeof DescribeInventoryDeletions$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionsCommand === "function");
assert(typeof DescribeMaintenanceWindowExecutions$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionTaskInvocationsCommand === "function");
assert(typeof DescribeMaintenanceWindowExecutionTaskInvocations$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionTasksCommand === "function");
assert(typeof DescribeMaintenanceWindowExecutionTasks$ === "object");
assert(typeof DescribeMaintenanceWindowsCommand === "function");
assert(typeof DescribeMaintenanceWindows$ === "object");
assert(typeof DescribeMaintenanceWindowScheduleCommand === "function");
assert(typeof DescribeMaintenanceWindowSchedule$ === "object");
assert(typeof DescribeMaintenanceWindowsForTargetCommand === "function");
assert(typeof DescribeMaintenanceWindowsForTarget$ === "object");
assert(typeof DescribeMaintenanceWindowTargetsCommand === "function");
assert(typeof DescribeMaintenanceWindowTargets$ === "object");
assert(typeof DescribeMaintenanceWindowTasksCommand === "function");
assert(typeof DescribeMaintenanceWindowTasks$ === "object");
assert(typeof DescribeOpsItemsCommand === "function");
assert(typeof DescribeOpsItems$ === "object");
assert(typeof DescribeParametersCommand === "function");
assert(typeof DescribeParameters$ === "object");
assert(typeof DescribePatchBaselinesCommand === "function");
assert(typeof DescribePatchBaselines$ === "object");
assert(typeof DescribePatchGroupsCommand === "function");
assert(typeof DescribePatchGroups$ === "object");
assert(typeof DescribePatchGroupStateCommand === "function");
assert(typeof DescribePatchGroupState$ === "object");
assert(typeof DescribePatchPropertiesCommand === "function");
assert(typeof DescribePatchProperties$ === "object");
assert(typeof DescribeSessionsCommand === "function");
assert(typeof DescribeSessions$ === "object");
assert(typeof DisassociateOpsItemRelatedItemCommand === "function");
assert(typeof DisassociateOpsItemRelatedItem$ === "object");
assert(typeof GetAccessTokenCommand === "function");
assert(typeof GetAccessToken$ === "object");
assert(typeof GetAutomationExecutionCommand === "function");
assert(typeof GetAutomationExecution$ === "object");
assert(typeof GetCalendarStateCommand === "function");
assert(typeof GetCalendarState$ === "object");
assert(typeof GetCommandInvocationCommand === "function");
assert(typeof GetCommandInvocation$ === "object");
assert(typeof GetConnectionStatusCommand === "function");
assert(typeof GetConnectionStatus$ === "object");
assert(typeof GetDefaultPatchBaselineCommand === "function");
assert(typeof GetDefaultPatchBaseline$ === "object");
assert(typeof GetDeployablePatchSnapshotForInstanceCommand === "function");
assert(typeof GetDeployablePatchSnapshotForInstance$ === "object");
assert(typeof GetDocumentCommand === "function");
assert(typeof GetDocument$ === "object");
assert(typeof GetExecutionPreviewCommand === "function");
assert(typeof GetExecutionPreview$ === "object");
assert(typeof GetInventoryCommand === "function");
assert(typeof GetInventory$ === "object");
assert(typeof GetInventorySchemaCommand === "function");
assert(typeof GetInventorySchema$ === "object");
assert(typeof GetMaintenanceWindowCommand === "function");
assert(typeof GetMaintenanceWindow$ === "object");
assert(typeof GetMaintenanceWindowExecutionCommand === "function");
assert(typeof GetMaintenanceWindowExecution$ === "object");
assert(typeof GetMaintenanceWindowExecutionTaskCommand === "function");
assert(typeof GetMaintenanceWindowExecutionTask$ === "object");
assert(typeof GetMaintenanceWindowExecutionTaskInvocationCommand === "function");
assert(typeof GetMaintenanceWindowExecutionTaskInvocation$ === "object");
assert(typeof GetMaintenanceWindowTaskCommand === "function");
assert(typeof GetMaintenanceWindowTask$ === "object");
assert(typeof GetOpsItemCommand === "function");
assert(typeof GetOpsItem$ === "object");
assert(typeof GetOpsMetadataCommand === "function");
assert(typeof GetOpsMetadata$ === "object");
assert(typeof GetOpsSummaryCommand === "function");
assert(typeof GetOpsSummary$ === "object");
assert(typeof GetParameterCommand === "function");
assert(typeof GetParameter$ === "object");
assert(typeof GetParameterHistoryCommand === "function");
assert(typeof GetParameterHistory$ === "object");
assert(typeof GetParametersCommand === "function");
assert(typeof GetParameters$ === "object");
assert(typeof GetParametersByPathCommand === "function");
assert(typeof GetParametersByPath$ === "object");
assert(typeof GetPatchBaselineCommand === "function");
assert(typeof GetPatchBaseline$ === "object");
assert(typeof GetPatchBaselineForPatchGroupCommand === "function");
assert(typeof GetPatchBaselineForPatchGroup$ === "object");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetResourcePolicies$ === "object");
assert(typeof GetServiceSettingCommand === "function");
assert(typeof GetServiceSetting$ === "object");
assert(typeof LabelParameterVersionCommand === "function");
assert(typeof LabelParameterVersion$ === "object");
assert(typeof ListAssociationsCommand === "function");
assert(typeof ListAssociations$ === "object");
assert(typeof ListAssociationVersionsCommand === "function");
assert(typeof ListAssociationVersions$ === "object");
assert(typeof ListCommandInvocationsCommand === "function");
assert(typeof ListCommandInvocations$ === "object");
assert(typeof ListCommandsCommand === "function");
assert(typeof ListCommands$ === "object");
assert(typeof ListComplianceItemsCommand === "function");
assert(typeof ListComplianceItems$ === "object");
assert(typeof ListComplianceSummariesCommand === "function");
assert(typeof ListComplianceSummaries$ === "object");
assert(typeof ListDocumentMetadataHistoryCommand === "function");
assert(typeof ListDocumentMetadataHistory$ === "object");
assert(typeof ListDocumentsCommand === "function");
assert(typeof ListDocuments$ === "object");
assert(typeof ListDocumentVersionsCommand === "function");
assert(typeof ListDocumentVersions$ === "object");
assert(typeof ListInventoryEntriesCommand === "function");
assert(typeof ListInventoryEntries$ === "object");
assert(typeof ListNodesCommand === "function");
assert(typeof ListNodes$ === "object");
assert(typeof ListNodesSummaryCommand === "function");
assert(typeof ListNodesSummary$ === "object");
assert(typeof ListOpsItemEventsCommand === "function");
assert(typeof ListOpsItemEvents$ === "object");
assert(typeof ListOpsItemRelatedItemsCommand === "function");
assert(typeof ListOpsItemRelatedItems$ === "object");
assert(typeof ListOpsMetadataCommand === "function");
assert(typeof ListOpsMetadata$ === "object");
assert(typeof ListResourceComplianceSummariesCommand === "function");
assert(typeof ListResourceComplianceSummaries$ === "object");
assert(typeof ListResourceDataSyncCommand === "function");
assert(typeof ListResourceDataSync$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyDocumentPermissionCommand === "function");
assert(typeof ModifyDocumentPermission$ === "object");
assert(typeof PutComplianceItemsCommand === "function");
assert(typeof PutComplianceItems$ === "object");
assert(typeof PutInventoryCommand === "function");
assert(typeof PutInventory$ === "object");
assert(typeof PutParameterCommand === "function");
assert(typeof PutParameter$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RegisterDefaultPatchBaselineCommand === "function");
assert(typeof RegisterDefaultPatchBaseline$ === "object");
assert(typeof RegisterPatchBaselineForPatchGroupCommand === "function");
assert(typeof RegisterPatchBaselineForPatchGroup$ === "object");
assert(typeof RegisterTargetWithMaintenanceWindowCommand === "function");
assert(typeof RegisterTargetWithMaintenanceWindow$ === "object");
assert(typeof RegisterTaskWithMaintenanceWindowCommand === "function");
assert(typeof RegisterTaskWithMaintenanceWindow$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof ResetServiceSettingCommand === "function");
assert(typeof ResetServiceSetting$ === "object");
assert(typeof ResumeSessionCommand === "function");
assert(typeof ResumeSession$ === "object");
assert(typeof SendAutomationSignalCommand === "function");
assert(typeof SendAutomationSignal$ === "object");
assert(typeof SendCommandCommand === "function");
assert(typeof SendCommand$ === "object");
assert(typeof StartAccessRequestCommand === "function");
assert(typeof StartAccessRequest$ === "object");
assert(typeof StartAssociationsOnceCommand === "function");
assert(typeof StartAssociationsOnce$ === "object");
assert(typeof StartAutomationExecutionCommand === "function");
assert(typeof StartAutomationExecution$ === "object");
assert(typeof StartChangeRequestExecutionCommand === "function");
assert(typeof StartChangeRequestExecution$ === "object");
assert(typeof StartExecutionPreviewCommand === "function");
assert(typeof StartExecutionPreview$ === "object");
assert(typeof StartSessionCommand === "function");
assert(typeof StartSession$ === "object");
assert(typeof StopAutomationExecutionCommand === "function");
assert(typeof StopAutomationExecution$ === "object");
assert(typeof TerminateSessionCommand === "function");
assert(typeof TerminateSession$ === "object");
assert(typeof UnlabelParameterVersionCommand === "function");
assert(typeof UnlabelParameterVersion$ === "object");
assert(typeof UpdateAssociationCommand === "function");
assert(typeof UpdateAssociation$ === "object");
assert(typeof UpdateAssociationStatusCommand === "function");
assert(typeof UpdateAssociationStatus$ === "object");
assert(typeof UpdateDocumentCommand === "function");
assert(typeof UpdateDocument$ === "object");
assert(typeof UpdateDocumentDefaultVersionCommand === "function");
assert(typeof UpdateDocumentDefaultVersion$ === "object");
assert(typeof UpdateDocumentMetadataCommand === "function");
assert(typeof UpdateDocumentMetadata$ === "object");
assert(typeof UpdateMaintenanceWindowCommand === "function");
assert(typeof UpdateMaintenanceWindow$ === "object");
assert(typeof UpdateMaintenanceWindowTargetCommand === "function");
assert(typeof UpdateMaintenanceWindowTarget$ === "object");
assert(typeof UpdateMaintenanceWindowTaskCommand === "function");
assert(typeof UpdateMaintenanceWindowTask$ === "object");
assert(typeof UpdateManagedInstanceRoleCommand === "function");
assert(typeof UpdateManagedInstanceRole$ === "object");
assert(typeof UpdateOpsItemCommand === "function");
assert(typeof UpdateOpsItem$ === "object");
assert(typeof UpdateOpsMetadataCommand === "function");
assert(typeof UpdateOpsMetadata$ === "object");
assert(typeof UpdatePatchBaselineCommand === "function");
assert(typeof UpdatePatchBaseline$ === "object");
assert(typeof UpdateResourceDataSyncCommand === "function");
assert(typeof UpdateResourceDataSync$ === "object");
assert(typeof UpdateServiceSettingCommand === "function");
assert(typeof UpdateServiceSetting$ === "object");
// structural schemas
assert(typeof AccountSharingInfo$ === "object");
assert(typeof Activation$ === "object");
assert(typeof AddTagsToResourceRequest$ === "object");
assert(typeof AddTagsToResourceResult$ === "object");
assert(typeof Alarm$ === "object");
assert(typeof AlarmConfiguration$ === "object");
assert(typeof AlarmStateInformation$ === "object");
assert(typeof AssociateOpsItemRelatedItemRequest$ === "object");
assert(typeof AssociateOpsItemRelatedItemResponse$ === "object");
assert(typeof Association$ === "object");
assert(typeof AssociationDescription$ === "object");
assert(typeof AssociationExecution$ === "object");
assert(typeof AssociationExecutionFilter$ === "object");
assert(typeof AssociationExecutionTarget$ === "object");
assert(typeof AssociationExecutionTargetsFilter$ === "object");
assert(typeof AssociationFilter$ === "object");
assert(typeof AssociationOverview$ === "object");
assert(typeof AssociationStatus$ === "object");
assert(typeof AssociationVersionInfo$ === "object");
assert(typeof AttachmentContent$ === "object");
assert(typeof AttachmentInformation$ === "object");
assert(typeof AttachmentsSource$ === "object");
assert(typeof AutomationExecution$ === "object");
assert(typeof AutomationExecutionFilter$ === "object");
assert(typeof AutomationExecutionInputs$ === "object");
assert(typeof AutomationExecutionMetadata$ === "object");
assert(typeof AutomationExecutionPreview$ === "object");
assert(typeof BaselineOverride$ === "object");
assert(typeof CancelCommandRequest$ === "object");
assert(typeof CancelCommandResult$ === "object");
assert(typeof CancelMaintenanceWindowExecutionRequest$ === "object");
assert(typeof CancelMaintenanceWindowExecutionResult$ === "object");
assert(typeof CloudWatchOutputConfig$ === "object");
assert(typeof Command$ === "object");
assert(typeof CommandFilter$ === "object");
assert(typeof CommandInvocation$ === "object");
assert(typeof CommandPlugin$ === "object");
assert(typeof ComplianceExecutionSummary$ === "object");
assert(typeof ComplianceItem$ === "object");
assert(typeof ComplianceItemEntry$ === "object");
assert(typeof ComplianceStringFilter$ === "object");
assert(typeof ComplianceSummaryItem$ === "object");
assert(typeof CompliantSummary$ === "object");
assert(typeof CreateActivationRequest$ === "object");
assert(typeof CreateActivationResult$ === "object");
assert(typeof CreateAssociationBatchRequest$ === "object");
assert(typeof CreateAssociationBatchRequestEntry$ === "object");
assert(typeof CreateAssociationBatchResult$ === "object");
assert(typeof CreateAssociationRequest$ === "object");
assert(typeof CreateAssociationResult$ === "object");
assert(typeof CreateDocumentRequest$ === "object");
assert(typeof CreateDocumentResult$ === "object");
assert(typeof CreateMaintenanceWindowRequest$ === "object");
assert(typeof CreateMaintenanceWindowResult$ === "object");
assert(typeof CreateOpsItemRequest$ === "object");
assert(typeof CreateOpsItemResponse$ === "object");
assert(typeof CreateOpsMetadataRequest$ === "object");
assert(typeof CreateOpsMetadataResult$ === "object");
assert(typeof CreatePatchBaselineRequest$ === "object");
assert(typeof CreatePatchBaselineResult$ === "object");
assert(typeof CreateResourceDataSyncRequest$ === "object");
assert(typeof CreateResourceDataSyncResult$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof DeleteActivationRequest$ === "object");
assert(typeof DeleteActivationResult$ === "object");
assert(typeof DeleteAssociationRequest$ === "object");
assert(typeof DeleteAssociationResult$ === "object");
assert(typeof DeleteDocumentRequest$ === "object");
assert(typeof DeleteDocumentResult$ === "object");
assert(typeof DeleteInventoryRequest$ === "object");
assert(typeof DeleteInventoryResult$ === "object");
assert(typeof DeleteMaintenanceWindowRequest$ === "object");
assert(typeof DeleteMaintenanceWindowResult$ === "object");
assert(typeof DeleteOpsItemRequest$ === "object");
assert(typeof DeleteOpsItemResponse$ === "object");
assert(typeof DeleteOpsMetadataRequest$ === "object");
assert(typeof DeleteOpsMetadataResult$ === "object");
assert(typeof DeleteParameterRequest$ === "object");
assert(typeof DeleteParameterResult$ === "object");
assert(typeof DeleteParametersRequest$ === "object");
assert(typeof DeleteParametersResult$ === "object");
assert(typeof DeletePatchBaselineRequest$ === "object");
assert(typeof DeletePatchBaselineResult$ === "object");
assert(typeof DeleteResourceDataSyncRequest$ === "object");
assert(typeof DeleteResourceDataSyncResult$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeregisterManagedInstanceRequest$ === "object");
assert(typeof DeregisterManagedInstanceResult$ === "object");
assert(typeof DeregisterPatchBaselineForPatchGroupRequest$ === "object");
assert(typeof DeregisterPatchBaselineForPatchGroupResult$ === "object");
assert(typeof DeregisterTargetFromMaintenanceWindowRequest$ === "object");
assert(typeof DeregisterTargetFromMaintenanceWindowResult$ === "object");
assert(typeof DeregisterTaskFromMaintenanceWindowRequest$ === "object");
assert(typeof DeregisterTaskFromMaintenanceWindowResult$ === "object");
assert(typeof DescribeActivationsFilter$ === "object");
assert(typeof DescribeActivationsRequest$ === "object");
assert(typeof DescribeActivationsResult$ === "object");
assert(typeof DescribeAssociationExecutionsRequest$ === "object");
assert(typeof DescribeAssociationExecutionsResult$ === "object");
assert(typeof DescribeAssociationExecutionTargetsRequest$ === "object");
assert(typeof DescribeAssociationExecutionTargetsResult$ === "object");
assert(typeof DescribeAssociationRequest$ === "object");
assert(typeof DescribeAssociationResult$ === "object");
assert(typeof DescribeAutomationExecutionsRequest$ === "object");
assert(typeof DescribeAutomationExecutionsResult$ === "object");
assert(typeof DescribeAutomationStepExecutionsRequest$ === "object");
assert(typeof DescribeAutomationStepExecutionsResult$ === "object");
assert(typeof DescribeAvailablePatchesRequest$ === "object");
assert(typeof DescribeAvailablePatchesResult$ === "object");
assert(typeof DescribeDocumentPermissionRequest$ === "object");
assert(typeof DescribeDocumentPermissionResponse$ === "object");
assert(typeof DescribeDocumentRequest$ === "object");
assert(typeof DescribeDocumentResult$ === "object");
assert(typeof DescribeEffectiveInstanceAssociationsRequest$ === "object");
assert(typeof DescribeEffectiveInstanceAssociationsResult$ === "object");
assert(typeof DescribeEffectivePatchesForPatchBaselineRequest$ === "object");
assert(typeof DescribeEffectivePatchesForPatchBaselineResult$ === "object");
assert(typeof DescribeInstanceAssociationsStatusRequest$ === "object");
assert(typeof DescribeInstanceAssociationsStatusResult$ === "object");
assert(typeof DescribeInstanceInformationRequest$ === "object");
assert(typeof DescribeInstanceInformationResult$ === "object");
assert(typeof DescribeInstancePatchesRequest$ === "object");
assert(typeof DescribeInstancePatchesResult$ === "object");
assert(typeof DescribeInstancePatchStatesForPatchGroupRequest$ === "object");
assert(typeof DescribeInstancePatchStatesForPatchGroupResult$ === "object");
assert(typeof DescribeInstancePatchStatesRequest$ === "object");
assert(typeof DescribeInstancePatchStatesResult$ === "object");
assert(typeof DescribeInstancePropertiesRequest$ === "object");
assert(typeof DescribeInstancePropertiesResult$ === "object");
assert(typeof DescribeInventoryDeletionsRequest$ === "object");
assert(typeof DescribeInventoryDeletionsResult$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionsRequest$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionsResult$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionTaskInvocationsRequest$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionTaskInvocationsResult$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionTasksRequest$ === "object");
assert(typeof DescribeMaintenanceWindowExecutionTasksResult$ === "object");
assert(typeof DescribeMaintenanceWindowScheduleRequest$ === "object");
assert(typeof DescribeMaintenanceWindowScheduleResult$ === "object");
assert(typeof DescribeMaintenanceWindowsForTargetRequest$ === "object");
assert(typeof DescribeMaintenanceWindowsForTargetResult$ === "object");
assert(typeof DescribeMaintenanceWindowsRequest$ === "object");
assert(typeof DescribeMaintenanceWindowsResult$ === "object");
assert(typeof DescribeMaintenanceWindowTargetsRequest$ === "object");
assert(typeof DescribeMaintenanceWindowTargetsResult$ === "object");
assert(typeof DescribeMaintenanceWindowTasksRequest$ === "object");
assert(typeof DescribeMaintenanceWindowTasksResult$ === "object");
assert(typeof DescribeOpsItemsRequest$ === "object");
assert(typeof DescribeOpsItemsResponse$ === "object");
assert(typeof DescribeParametersRequest$ === "object");
assert(typeof DescribeParametersResult$ === "object");
assert(typeof DescribePatchBaselinesRequest$ === "object");
assert(typeof DescribePatchBaselinesResult$ === "object");
assert(typeof DescribePatchGroupsRequest$ === "object");
assert(typeof DescribePatchGroupsResult$ === "object");
assert(typeof DescribePatchGroupStateRequest$ === "object");
assert(typeof DescribePatchGroupStateResult$ === "object");
assert(typeof DescribePatchPropertiesRequest$ === "object");
assert(typeof DescribePatchPropertiesResult$ === "object");
assert(typeof DescribeSessionsRequest$ === "object");
assert(typeof DescribeSessionsResponse$ === "object");
assert(typeof DisassociateOpsItemRelatedItemRequest$ === "object");
assert(typeof DisassociateOpsItemRelatedItemResponse$ === "object");
assert(typeof DocumentDefaultVersionDescription$ === "object");
assert(typeof DocumentDescription$ === "object");
assert(typeof DocumentFilter$ === "object");
assert(typeof DocumentIdentifier$ === "object");
assert(typeof DocumentKeyValuesFilter$ === "object");
assert(typeof DocumentMetadataResponseInfo$ === "object");
assert(typeof DocumentParameter$ === "object");
assert(typeof DocumentRequires$ === "object");
assert(typeof DocumentReviewCommentSource$ === "object");
assert(typeof DocumentReviewerResponseSource$ === "object");
assert(typeof DocumentReviews$ === "object");
assert(typeof DocumentVersionInfo$ === "object");
assert(typeof EffectivePatch$ === "object");
assert(typeof ExecutionInputs$ === "object");
assert(typeof ExecutionPreview$ === "object");
assert(typeof FailedCreateAssociation$ === "object");
assert(typeof FailureDetails$ === "object");
assert(typeof GetAccessTokenRequest$ === "object");
assert(typeof GetAccessTokenResponse$ === "object");
assert(typeof GetAutomationExecutionRequest$ === "object");
assert(typeof GetAutomationExecutionResult$ === "object");
assert(typeof GetCalendarStateRequest$ === "object");
assert(typeof GetCalendarStateResponse$ === "object");
assert(typeof GetCommandInvocationRequest$ === "object");
assert(typeof GetCommandInvocationResult$ === "object");
assert(typeof GetConnectionStatusRequest$ === "object");
assert(typeof GetConnectionStatusResponse$ === "object");
assert(typeof GetDefaultPatchBaselineRequest$ === "object");
assert(typeof GetDefaultPatchBaselineResult$ === "object");
assert(typeof GetDeployablePatchSnapshotForInstanceRequest$ === "object");
assert(typeof GetDeployablePatchSnapshotForInstanceResult$ === "object");
assert(typeof GetDocumentRequest$ === "object");
assert(typeof GetDocumentResult$ === "object");
assert(typeof GetExecutionPreviewRequest$ === "object");
assert(typeof GetExecutionPreviewResponse$ === "object");
assert(typeof GetInventoryRequest$ === "object");
assert(typeof GetInventoryResult$ === "object");
assert(typeof GetInventorySchemaRequest$ === "object");
assert(typeof GetInventorySchemaResult$ === "object");
assert(typeof GetMaintenanceWindowExecutionRequest$ === "object");
assert(typeof GetMaintenanceWindowExecutionResult$ === "object");
assert(typeof GetMaintenanceWindowExecutionTaskInvocationRequest$ === "object");
assert(typeof GetMaintenanceWindowExecutionTaskInvocationResult$ === "object");
assert(typeof GetMaintenanceWindowExecutionTaskRequest$ === "object");
assert(typeof GetMaintenanceWindowExecutionTaskResult$ === "object");
assert(typeof GetMaintenanceWindowRequest$ === "object");
assert(typeof GetMaintenanceWindowResult$ === "object");
assert(typeof GetMaintenanceWindowTaskRequest$ === "object");
assert(typeof GetMaintenanceWindowTaskResult$ === "object");
assert(typeof GetOpsItemRequest$ === "object");
assert(typeof GetOpsItemResponse$ === "object");
assert(typeof GetOpsMetadataRequest$ === "object");
assert(typeof GetOpsMetadataResult$ === "object");
assert(typeof GetOpsSummaryRequest$ === "object");
assert(typeof GetOpsSummaryResult$ === "object");
assert(typeof GetParameterHistoryRequest$ === "object");
assert(typeof GetParameterHistoryResult$ === "object");
assert(typeof GetParameterRequest$ === "object");
assert(typeof GetParameterResult$ === "object");
assert(typeof GetParametersByPathRequest$ === "object");
assert(typeof GetParametersByPathResult$ === "object");
assert(typeof GetParametersRequest$ === "object");
assert(typeof GetParametersResult$ === "object");
assert(typeof GetPatchBaselineForPatchGroupRequest$ === "object");
assert(typeof GetPatchBaselineForPatchGroupResult$ === "object");
assert(typeof GetPatchBaselineRequest$ === "object");
assert(typeof GetPatchBaselineResult$ === "object");
assert(typeof GetResourcePoliciesRequest$ === "object");
assert(typeof GetResourcePoliciesResponse$ === "object");
assert(typeof GetResourcePoliciesResponseEntry$ === "object");
assert(typeof GetServiceSettingRequest$ === "object");
assert(typeof GetServiceSettingResult$ === "object");
assert(typeof InstanceAggregatedAssociationOverview$ === "object");
assert(typeof InstanceAssociation$ === "object");
assert(typeof InstanceAssociationOutputLocation$ === "object");
assert(typeof InstanceAssociationOutputUrl$ === "object");
assert(typeof InstanceAssociationStatusInfo$ === "object");
assert(typeof InstanceInfo$ === "object");
assert(typeof InstanceInformation$ === "object");
assert(typeof InstanceInformationFilter$ === "object");
assert(typeof InstanceInformationStringFilter$ === "object");
assert(typeof InstancePatchState$ === "object");
assert(typeof InstancePatchStateFilter$ === "object");
assert(typeof InstanceProperty$ === "object");
assert(typeof InstancePropertyFilter$ === "object");
assert(typeof InstancePropertyStringFilter$ === "object");
assert(typeof InventoryAggregator$ === "object");
assert(typeof InventoryDeletionStatusItem$ === "object");
assert(typeof InventoryDeletionSummary$ === "object");
assert(typeof InventoryDeletionSummaryItem$ === "object");
assert(typeof InventoryFilter$ === "object");
assert(typeof InventoryGroup$ === "object");
assert(typeof InventoryItem$ === "object");
assert(typeof InventoryItemAttribute$ === "object");
assert(typeof InventoryItemSchema$ === "object");
assert(typeof InventoryResultEntity$ === "object");
assert(typeof InventoryResultItem$ === "object");
assert(typeof LabelParameterVersionRequest$ === "object");
assert(typeof LabelParameterVersionResult$ === "object");
assert(typeof ListAssociationsRequest$ === "object");
assert(typeof ListAssociationsResult$ === "object");
assert(typeof ListAssociationVersionsRequest$ === "object");
assert(typeof ListAssociationVersionsResult$ === "object");
assert(typeof ListCommandInvocationsRequest$ === "object");
assert(typeof ListCommandInvocationsResult$ === "object");
assert(typeof ListCommandsRequest$ === "object");
assert(typeof ListCommandsResult$ === "object");
assert(typeof ListComplianceItemsRequest$ === "object");
assert(typeof ListComplianceItemsResult$ === "object");
assert(typeof ListComplianceSummariesRequest$ === "object");
assert(typeof ListComplianceSummariesResult$ === "object");
assert(typeof ListDocumentMetadataHistoryRequest$ === "object");
assert(typeof ListDocumentMetadataHistoryResponse$ === "object");
assert(typeof ListDocumentsRequest$ === "object");
assert(typeof ListDocumentsResult$ === "object");
assert(typeof ListDocumentVersionsRequest$ === "object");
assert(typeof ListDocumentVersionsResult$ === "object");
assert(typeof ListInventoryEntriesRequest$ === "object");
assert(typeof ListInventoryEntriesResult$ === "object");
assert(typeof ListNodesRequest$ === "object");
assert(typeof ListNodesResult$ === "object");
assert(typeof ListNodesSummaryRequest$ === "object");
assert(typeof ListNodesSummaryResult$ === "object");
assert(typeof ListOpsItemEventsRequest$ === "object");
assert(typeof ListOpsItemEventsResponse$ === "object");
assert(typeof ListOpsItemRelatedItemsRequest$ === "object");
assert(typeof ListOpsItemRelatedItemsResponse$ === "object");
assert(typeof ListOpsMetadataRequest$ === "object");
assert(typeof ListOpsMetadataResult$ === "object");
assert(typeof ListResourceComplianceSummariesRequest$ === "object");
assert(typeof ListResourceComplianceSummariesResult$ === "object");
assert(typeof ListResourceDataSyncRequest$ === "object");
assert(typeof ListResourceDataSyncResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof LoggingInfo$ === "object");
assert(typeof MaintenanceWindowAutomationParameters$ === "object");
assert(typeof MaintenanceWindowExecution$ === "object");
assert(typeof MaintenanceWindowExecutionTaskIdentity$ === "object");
assert(typeof MaintenanceWindowExecutionTaskInvocationIdentity$ === "object");
assert(typeof MaintenanceWindowFilter$ === "object");
assert(typeof MaintenanceWindowIdentity$ === "object");
assert(typeof MaintenanceWindowIdentityForTarget$ === "object");
assert(typeof MaintenanceWindowLambdaParameters$ === "object");
assert(typeof MaintenanceWindowRunCommandParameters$ === "object");
assert(typeof MaintenanceWindowStepFunctionsParameters$ === "object");
assert(typeof MaintenanceWindowTarget$ === "object");
assert(typeof MaintenanceWindowTask$ === "object");
assert(typeof MaintenanceWindowTaskInvocationParameters$ === "object");
assert(typeof MaintenanceWindowTaskParameterValueExpression$ === "object");
assert(typeof MetadataValue$ === "object");
assert(typeof ModifyDocumentPermissionRequest$ === "object");
assert(typeof ModifyDocumentPermissionResponse$ === "object");
assert(typeof Node$ === "object");
assert(typeof NodeAggregator$ === "object");
assert(typeof NodeFilter$ === "object");
assert(typeof NodeOwnerInfo$ === "object");
assert(typeof NodeType$ === "object");
assert(typeof NonCompliantSummary$ === "object");
assert(typeof NotificationConfig$ === "object");
assert(typeof OpsAggregator$ === "object");
assert(typeof OpsEntity$ === "object");
assert(typeof OpsEntityItem$ === "object");
assert(typeof OpsFilter$ === "object");
assert(typeof OpsItem$ === "object");
assert(typeof OpsItemDataValue$ === "object");
assert(typeof OpsItemEventFilter$ === "object");
assert(typeof OpsItemEventSummary$ === "object");
assert(typeof OpsItemFilter$ === "object");
assert(typeof OpsItemIdentity$ === "object");
assert(typeof OpsItemNotification$ === "object");
assert(typeof OpsItemRelatedItemsFilter$ === "object");
assert(typeof OpsItemRelatedItemSummary$ === "object");
assert(typeof OpsItemSummary$ === "object");
assert(typeof OpsMetadata$ === "object");
assert(typeof OpsMetadataFilter$ === "object");
assert(typeof OpsResultAttribute$ === "object");
assert(typeof OutputSource$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterHistory$ === "object");
assert(typeof ParameterInlinePolicy$ === "object");
assert(typeof ParameterMetadata$ === "object");
assert(typeof ParametersFilter$ === "object");
assert(typeof ParameterStringFilter$ === "object");
assert(typeof ParentStepDetails$ === "object");
assert(typeof Patch$ === "object");
assert(typeof PatchBaselineIdentity$ === "object");
assert(typeof PatchComplianceData$ === "object");
assert(typeof PatchFilter$ === "object");
assert(typeof PatchFilterGroup$ === "object");
assert(typeof PatchGroupPatchBaselineMapping$ === "object");
assert(typeof PatchOrchestratorFilter$ === "object");
assert(typeof PatchRule$ === "object");
assert(typeof PatchRuleGroup$ === "object");
assert(typeof PatchSource$ === "object");
assert(typeof PatchStatus$ === "object");
assert(typeof ProgressCounters$ === "object");
assert(typeof PutComplianceItemsRequest$ === "object");
assert(typeof PutComplianceItemsResult$ === "object");
assert(typeof PutInventoryRequest$ === "object");
assert(typeof PutInventoryResult$ === "object");
assert(typeof PutParameterRequest$ === "object");
assert(typeof PutParameterResult$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RegisterDefaultPatchBaselineRequest$ === "object");
assert(typeof RegisterDefaultPatchBaselineResult$ === "object");
assert(typeof RegisterPatchBaselineForPatchGroupRequest$ === "object");
assert(typeof RegisterPatchBaselineForPatchGroupResult$ === "object");
assert(typeof RegisterTargetWithMaintenanceWindowRequest$ === "object");
assert(typeof RegisterTargetWithMaintenanceWindowResult$ === "object");
assert(typeof RegisterTaskWithMaintenanceWindowRequest$ === "object");
assert(typeof RegisterTaskWithMaintenanceWindowResult$ === "object");
assert(typeof RegistrationMetadataItem$ === "object");
assert(typeof RelatedOpsItem$ === "object");
assert(typeof RemoveTagsFromResourceRequest$ === "object");
assert(typeof RemoveTagsFromResourceResult$ === "object");
assert(typeof ResetServiceSettingRequest$ === "object");
assert(typeof ResetServiceSettingResult$ === "object");
assert(typeof ResolvedTargets$ === "object");
assert(typeof ResourceComplianceSummaryItem$ === "object");
assert(typeof ResourceDataSyncAwsOrganizationsSource$ === "object");
assert(typeof ResourceDataSyncDestinationDataSharing$ === "object");
assert(typeof ResourceDataSyncItem$ === "object");
assert(typeof ResourceDataSyncOrganizationalUnit$ === "object");
assert(typeof ResourceDataSyncS3Destination$ === "object");
assert(typeof ResourceDataSyncSource$ === "object");
assert(typeof ResourceDataSyncSourceWithState$ === "object");
assert(typeof ResultAttribute$ === "object");
assert(typeof ResumeSessionRequest$ === "object");
assert(typeof ResumeSessionResponse$ === "object");
assert(typeof ReviewInformation$ === "object");
assert(typeof Runbook$ === "object");
assert(typeof S3OutputLocation$ === "object");
assert(typeof S3OutputUrl$ === "object");
assert(typeof ScheduledWindowExecution$ === "object");
assert(typeof SendAutomationSignalRequest$ === "object");
assert(typeof SendAutomationSignalResult$ === "object");
assert(typeof SendCommandRequest$ === "object");
assert(typeof SendCommandResult$ === "object");
assert(typeof ServiceSetting$ === "object");
assert(typeof Session$ === "object");
assert(typeof SessionFilter$ === "object");
assert(typeof SessionManagerOutputUrl$ === "object");
assert(typeof SeveritySummary$ === "object");
assert(typeof StartAccessRequestRequest$ === "object");
assert(typeof StartAccessRequestResponse$ === "object");
assert(typeof StartAssociationsOnceRequest$ === "object");
assert(typeof StartAssociationsOnceResult$ === "object");
assert(typeof StartAutomationExecutionRequest$ === "object");
assert(typeof StartAutomationExecutionResult$ === "object");
assert(typeof StartChangeRequestExecutionRequest$ === "object");
assert(typeof StartChangeRequestExecutionResult$ === "object");
assert(typeof StartExecutionPreviewRequest$ === "object");
assert(typeof StartExecutionPreviewResponse$ === "object");
assert(typeof StartSessionRequest$ === "object");
assert(typeof StartSessionResponse$ === "object");
assert(typeof StepExecution$ === "object");
assert(typeof StepExecutionFilter$ === "object");
assert(typeof StopAutomationExecutionRequest$ === "object");
assert(typeof StopAutomationExecutionResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof Target$ === "object");
assert(typeof TargetLocation$ === "object");
assert(typeof TargetPreview$ === "object");
assert(typeof TerminateSessionRequest$ === "object");
assert(typeof TerminateSessionResponse$ === "object");
assert(typeof UnlabelParameterVersionRequest$ === "object");
assert(typeof UnlabelParameterVersionResult$ === "object");
assert(typeof UpdateAssociationRequest$ === "object");
assert(typeof UpdateAssociationResult$ === "object");
assert(typeof UpdateAssociationStatusRequest$ === "object");
assert(typeof UpdateAssociationStatusResult$ === "object");
assert(typeof UpdateDocumentDefaultVersionRequest$ === "object");
assert(typeof UpdateDocumentDefaultVersionResult$ === "object");
assert(typeof UpdateDocumentMetadataRequest$ === "object");
assert(typeof UpdateDocumentMetadataResponse$ === "object");
assert(typeof UpdateDocumentRequest$ === "object");
assert(typeof UpdateDocumentResult$ === "object");
assert(typeof UpdateMaintenanceWindowRequest$ === "object");
assert(typeof UpdateMaintenanceWindowResult$ === "object");
assert(typeof UpdateMaintenanceWindowTargetRequest$ === "object");
assert(typeof UpdateMaintenanceWindowTargetResult$ === "object");
assert(typeof UpdateMaintenanceWindowTaskRequest$ === "object");
assert(typeof UpdateMaintenanceWindowTaskResult$ === "object");
assert(typeof UpdateManagedInstanceRoleRequest$ === "object");
assert(typeof UpdateManagedInstanceRoleResult$ === "object");
assert(typeof UpdateOpsItemRequest$ === "object");
assert(typeof UpdateOpsItemResponse$ === "object");
assert(typeof UpdateOpsMetadataRequest$ === "object");
assert(typeof UpdateOpsMetadataResult$ === "object");
assert(typeof UpdatePatchBaselineRequest$ === "object");
assert(typeof UpdatePatchBaselineResult$ === "object");
assert(typeof UpdateResourceDataSyncRequest$ === "object");
assert(typeof UpdateResourceDataSyncResult$ === "object");
assert(typeof UpdateServiceSettingRequest$ === "object");
assert(typeof UpdateServiceSettingResult$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(AlreadyExistsException.prototype instanceof SSMServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(AssociatedInstances.prototype instanceof SSMServiceException);
assert(typeof AssociatedInstances$ === "object");
assert(AssociationAlreadyExists.prototype instanceof SSMServiceException);
assert(typeof AssociationAlreadyExists$ === "object");
assert(AssociationDoesNotExist.prototype instanceof SSMServiceException);
assert(typeof AssociationDoesNotExist$ === "object");
assert(AssociationExecutionDoesNotExist.prototype instanceof SSMServiceException);
assert(typeof AssociationExecutionDoesNotExist$ === "object");
assert(AssociationLimitExceeded.prototype instanceof SSMServiceException);
assert(typeof AssociationLimitExceeded$ === "object");
assert(AssociationVersionLimitExceeded.prototype instanceof SSMServiceException);
assert(typeof AssociationVersionLimitExceeded$ === "object");
assert(AutomationDefinitionNotApprovedException.prototype instanceof SSMServiceException);
assert(typeof AutomationDefinitionNotApprovedException$ === "object");
assert(AutomationDefinitionNotFoundException.prototype instanceof SSMServiceException);
assert(typeof AutomationDefinitionNotFoundException$ === "object");
assert(AutomationDefinitionVersionNotFoundException.prototype instanceof SSMServiceException);
assert(typeof AutomationDefinitionVersionNotFoundException$ === "object");
assert(AutomationExecutionLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof AutomationExecutionLimitExceededException$ === "object");
assert(AutomationExecutionNotFoundException.prototype instanceof SSMServiceException);
assert(typeof AutomationExecutionNotFoundException$ === "object");
assert(AutomationStepNotFoundException.prototype instanceof SSMServiceException);
assert(typeof AutomationStepNotFoundException$ === "object");
assert(ComplianceTypeCountLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof ComplianceTypeCountLimitExceededException$ === "object");
assert(CustomSchemaCountLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof CustomSchemaCountLimitExceededException$ === "object");
assert(DocumentAlreadyExists.prototype instanceof SSMServiceException);
assert(typeof DocumentAlreadyExists$ === "object");
assert(DocumentLimitExceeded.prototype instanceof SSMServiceException);
assert(typeof DocumentLimitExceeded$ === "object");
assert(DocumentPermissionLimit.prototype instanceof SSMServiceException);
assert(typeof DocumentPermissionLimit$ === "object");
assert(DocumentVersionLimitExceeded.prototype instanceof SSMServiceException);
assert(typeof DocumentVersionLimitExceeded$ === "object");
assert(DoesNotExistException.prototype instanceof SSMServiceException);
assert(typeof DoesNotExistException$ === "object");
assert(DuplicateDocumentContent.prototype instanceof SSMServiceException);
assert(typeof DuplicateDocumentContent$ === "object");
assert(DuplicateDocumentVersionName.prototype instanceof SSMServiceException);
assert(typeof DuplicateDocumentVersionName$ === "object");
assert(DuplicateInstanceId.prototype instanceof SSMServiceException);
assert(typeof DuplicateInstanceId$ === "object");
assert(FeatureNotAvailableException.prototype instanceof SSMServiceException);
assert(typeof FeatureNotAvailableException$ === "object");
assert(HierarchyLevelLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof HierarchyLevelLimitExceededException$ === "object");
assert(HierarchyTypeMismatchException.prototype instanceof SSMServiceException);
assert(typeof HierarchyTypeMismatchException$ === "object");
assert(IdempotentParameterMismatch.prototype instanceof SSMServiceException);
assert(typeof IdempotentParameterMismatch$ === "object");
assert(IncompatiblePolicyException.prototype instanceof SSMServiceException);
assert(typeof IncompatiblePolicyException$ === "object");
assert(InternalServerError.prototype instanceof SSMServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidActivation.prototype instanceof SSMServiceException);
assert(typeof InvalidActivation$ === "object");
assert(InvalidActivationId.prototype instanceof SSMServiceException);
assert(typeof InvalidActivationId$ === "object");
assert(InvalidAggregatorException.prototype instanceof SSMServiceException);
assert(typeof InvalidAggregatorException$ === "object");
assert(InvalidAllowedPatternException.prototype instanceof SSMServiceException);
assert(typeof InvalidAllowedPatternException$ === "object");
assert(InvalidAssociation.prototype instanceof SSMServiceException);
assert(typeof InvalidAssociation$ === "object");
assert(InvalidAssociationVersion.prototype instanceof SSMServiceException);
assert(typeof InvalidAssociationVersion$ === "object");
assert(InvalidAutomationExecutionParametersException.prototype instanceof SSMServiceException);
assert(typeof InvalidAutomationExecutionParametersException$ === "object");
assert(InvalidAutomationSignalException.prototype instanceof SSMServiceException);
assert(typeof InvalidAutomationSignalException$ === "object");
assert(InvalidAutomationStatusUpdateException.prototype instanceof SSMServiceException);
assert(typeof InvalidAutomationStatusUpdateException$ === "object");
assert(InvalidCommandId.prototype instanceof SSMServiceException);
assert(typeof InvalidCommandId$ === "object");
assert(InvalidDeleteInventoryParametersException.prototype instanceof SSMServiceException);
assert(typeof InvalidDeleteInventoryParametersException$ === "object");
assert(InvalidDeletionIdException.prototype instanceof SSMServiceException);
assert(typeof InvalidDeletionIdException$ === "object");
assert(InvalidDocument.prototype instanceof SSMServiceException);
assert(typeof InvalidDocument$ === "object");
assert(InvalidDocumentContent.prototype instanceof SSMServiceException);
assert(typeof InvalidDocumentContent$ === "object");
assert(InvalidDocumentOperation.prototype instanceof SSMServiceException);
assert(typeof InvalidDocumentOperation$ === "object");
assert(InvalidDocumentSchemaVersion.prototype instanceof SSMServiceException);
assert(typeof InvalidDocumentSchemaVersion$ === "object");
assert(InvalidDocumentType.prototype instanceof SSMServiceException);
assert(typeof InvalidDocumentType$ === "object");
assert(InvalidDocumentVersion.prototype instanceof SSMServiceException);
assert(typeof InvalidDocumentVersion$ === "object");
assert(InvalidFilter.prototype instanceof SSMServiceException);
assert(typeof InvalidFilter$ === "object");
assert(InvalidFilterKey.prototype instanceof SSMServiceException);
assert(typeof InvalidFilterKey$ === "object");
assert(InvalidFilterOption.prototype instanceof SSMServiceException);
assert(typeof InvalidFilterOption$ === "object");
assert(InvalidFilterValue.prototype instanceof SSMServiceException);
assert(typeof InvalidFilterValue$ === "object");
assert(InvalidInstanceId.prototype instanceof SSMServiceException);
assert(typeof InvalidInstanceId$ === "object");
assert(InvalidInstanceInformationFilterValue.prototype instanceof SSMServiceException);
assert(typeof InvalidInstanceInformationFilterValue$ === "object");
assert(InvalidInstancePropertyFilterValue.prototype instanceof SSMServiceException);
assert(typeof InvalidInstancePropertyFilterValue$ === "object");
assert(InvalidInventoryGroupException.prototype instanceof SSMServiceException);
assert(typeof InvalidInventoryGroupException$ === "object");
assert(InvalidInventoryItemContextException.prototype instanceof SSMServiceException);
assert(typeof InvalidInventoryItemContextException$ === "object");
assert(InvalidInventoryRequestException.prototype instanceof SSMServiceException);
assert(typeof InvalidInventoryRequestException$ === "object");
assert(InvalidItemContentException.prototype instanceof SSMServiceException);
assert(typeof InvalidItemContentException$ === "object");
assert(InvalidKeyId.prototype instanceof SSMServiceException);
assert(typeof InvalidKeyId$ === "object");
assert(InvalidNextToken.prototype instanceof SSMServiceException);
assert(typeof InvalidNextToken$ === "object");
assert(InvalidNotificationConfig.prototype instanceof SSMServiceException);
assert(typeof InvalidNotificationConfig$ === "object");
assert(InvalidOptionException.prototype instanceof SSMServiceException);
assert(typeof InvalidOptionException$ === "object");
assert(InvalidOutputFolder.prototype instanceof SSMServiceException);
assert(typeof InvalidOutputFolder$ === "object");
assert(InvalidOutputLocation.prototype instanceof SSMServiceException);
assert(typeof InvalidOutputLocation$ === "object");
assert(InvalidParameters.prototype instanceof SSMServiceException);
assert(typeof InvalidParameters$ === "object");
assert(InvalidPermissionType.prototype instanceof SSMServiceException);
assert(typeof InvalidPermissionType$ === "object");
assert(InvalidPluginName.prototype instanceof SSMServiceException);
assert(typeof InvalidPluginName$ === "object");
assert(InvalidPolicyAttributeException.prototype instanceof SSMServiceException);
assert(typeof InvalidPolicyAttributeException$ === "object");
assert(InvalidPolicyTypeException.prototype instanceof SSMServiceException);
assert(typeof InvalidPolicyTypeException$ === "object");
assert(InvalidResourceId.prototype instanceof SSMServiceException);
assert(typeof InvalidResourceId$ === "object");
assert(InvalidResourceType.prototype instanceof SSMServiceException);
assert(typeof InvalidResourceType$ === "object");
assert(InvalidResultAttributeException.prototype instanceof SSMServiceException);
assert(typeof InvalidResultAttributeException$ === "object");
assert(InvalidRole.prototype instanceof SSMServiceException);
assert(typeof InvalidRole$ === "object");
assert(InvalidSchedule.prototype instanceof SSMServiceException);
assert(typeof InvalidSchedule$ === "object");
assert(InvalidTag.prototype instanceof SSMServiceException);
assert(typeof InvalidTag$ === "object");
assert(InvalidTarget.prototype instanceof SSMServiceException);
assert(typeof InvalidTarget$ === "object");
assert(InvalidTargetMaps.prototype instanceof SSMServiceException);
assert(typeof InvalidTargetMaps$ === "object");
assert(InvalidTypeNameException.prototype instanceof SSMServiceException);
assert(typeof InvalidTypeNameException$ === "object");
assert(InvalidUpdate.prototype instanceof SSMServiceException);
assert(typeof InvalidUpdate$ === "object");
assert(InvocationDoesNotExist.prototype instanceof SSMServiceException);
assert(typeof InvocationDoesNotExist$ === "object");
assert(ItemContentMismatchException.prototype instanceof SSMServiceException);
assert(typeof ItemContentMismatchException$ === "object");
assert(ItemSizeLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof ItemSizeLimitExceededException$ === "object");
assert(MalformedResourcePolicyDocumentException.prototype instanceof SSMServiceException);
assert(typeof MalformedResourcePolicyDocumentException$ === "object");
assert(MaxDocumentSizeExceeded.prototype instanceof SSMServiceException);
assert(typeof MaxDocumentSizeExceeded$ === "object");
assert(NoLongerSupportedException.prototype instanceof SSMServiceException);
assert(typeof NoLongerSupportedException$ === "object");
assert(OpsItemAccessDeniedException.prototype instanceof SSMServiceException);
assert(typeof OpsItemAccessDeniedException$ === "object");
assert(OpsItemAlreadyExistsException.prototype instanceof SSMServiceException);
assert(typeof OpsItemAlreadyExistsException$ === "object");
assert(OpsItemConflictException.prototype instanceof SSMServiceException);
assert(typeof OpsItemConflictException$ === "object");
assert(OpsItemInvalidParameterException.prototype instanceof SSMServiceException);
assert(typeof OpsItemInvalidParameterException$ === "object");
assert(OpsItemLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof OpsItemLimitExceededException$ === "object");
assert(OpsItemNotFoundException.prototype instanceof SSMServiceException);
assert(typeof OpsItemNotFoundException$ === "object");
assert(OpsItemRelatedItemAlreadyExistsException.prototype instanceof SSMServiceException);
assert(typeof OpsItemRelatedItemAlreadyExistsException$ === "object");
assert(OpsItemRelatedItemAssociationNotFoundException.prototype instanceof SSMServiceException);
assert(typeof OpsItemRelatedItemAssociationNotFoundException$ === "object");
assert(OpsMetadataAlreadyExistsException.prototype instanceof SSMServiceException);
assert(typeof OpsMetadataAlreadyExistsException$ === "object");
assert(OpsMetadataInvalidArgumentException.prototype instanceof SSMServiceException);
assert(typeof OpsMetadataInvalidArgumentException$ === "object");
assert(OpsMetadataKeyLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof OpsMetadataKeyLimitExceededException$ === "object");
assert(OpsMetadataLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof OpsMetadataLimitExceededException$ === "object");
assert(OpsMetadataNotFoundException.prototype instanceof SSMServiceException);
assert(typeof OpsMetadataNotFoundException$ === "object");
assert(OpsMetadataTooManyUpdatesException.prototype instanceof SSMServiceException);
assert(typeof OpsMetadataTooManyUpdatesException$ === "object");
assert(ParameterAlreadyExists.prototype instanceof SSMServiceException);
assert(typeof ParameterAlreadyExists$ === "object");
assert(ParameterLimitExceeded.prototype instanceof SSMServiceException);
assert(typeof ParameterLimitExceeded$ === "object");
assert(ParameterMaxVersionLimitExceeded.prototype instanceof SSMServiceException);
assert(typeof ParameterMaxVersionLimitExceeded$ === "object");
assert(ParameterNotFound.prototype instanceof SSMServiceException);
assert(typeof ParameterNotFound$ === "object");
assert(ParameterPatternMismatchException.prototype instanceof SSMServiceException);
assert(typeof ParameterPatternMismatchException$ === "object");
assert(ParameterVersionLabelLimitExceeded.prototype instanceof SSMServiceException);
assert(typeof ParameterVersionLabelLimitExceeded$ === "object");
assert(ParameterVersionNotFound.prototype instanceof SSMServiceException);
assert(typeof ParameterVersionNotFound$ === "object");
assert(PoliciesLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof PoliciesLimitExceededException$ === "object");
assert(ResourceDataSyncAlreadyExistsException.prototype instanceof SSMServiceException);
assert(typeof ResourceDataSyncAlreadyExistsException$ === "object");
assert(ResourceDataSyncConflictException.prototype instanceof SSMServiceException);
assert(typeof ResourceDataSyncConflictException$ === "object");
assert(ResourceDataSyncCountExceededException.prototype instanceof SSMServiceException);
assert(typeof ResourceDataSyncCountExceededException$ === "object");
assert(ResourceDataSyncInvalidConfigurationException.prototype instanceof SSMServiceException);
assert(typeof ResourceDataSyncInvalidConfigurationException$ === "object");
assert(ResourceDataSyncNotFoundException.prototype instanceof SSMServiceException);
assert(typeof ResourceDataSyncNotFoundException$ === "object");
assert(ResourceInUseException.prototype instanceof SSMServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SSMServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourcePolicyConflictException.prototype instanceof SSMServiceException);
assert(typeof ResourcePolicyConflictException$ === "object");
assert(ResourcePolicyInvalidParameterException.prototype instanceof SSMServiceException);
assert(typeof ResourcePolicyInvalidParameterException$ === "object");
assert(ResourcePolicyLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof ResourcePolicyLimitExceededException$ === "object");
assert(ResourcePolicyNotFoundException.prototype instanceof SSMServiceException);
assert(typeof ResourcePolicyNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SSMServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceSettingNotFound.prototype instanceof SSMServiceException);
assert(typeof ServiceSettingNotFound$ === "object");
assert(StatusUnchanged.prototype instanceof SSMServiceException);
assert(typeof StatusUnchanged$ === "object");
assert(SubTypeCountLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof SubTypeCountLimitExceededException$ === "object");
assert(TargetInUseException.prototype instanceof SSMServiceException);
assert(typeof TargetInUseException$ === "object");
assert(TargetNotConnected.prototype instanceof SSMServiceException);
assert(typeof TargetNotConnected$ === "object");
assert(ThrottlingException.prototype instanceof SSMServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsError.prototype instanceof SSMServiceException);
assert(typeof TooManyTagsError$ === "object");
assert(TooManyUpdates.prototype instanceof SSMServiceException);
assert(typeof TooManyUpdates$ === "object");
assert(TotalSizeLimitExceededException.prototype instanceof SSMServiceException);
assert(typeof TotalSizeLimitExceededException$ === "object");
assert(UnsupportedCalendarException.prototype instanceof SSMServiceException);
assert(typeof UnsupportedCalendarException$ === "object");
assert(UnsupportedFeatureRequiredException.prototype instanceof SSMServiceException);
assert(typeof UnsupportedFeatureRequiredException$ === "object");
assert(UnsupportedInventoryItemContextException.prototype instanceof SSMServiceException);
assert(typeof UnsupportedInventoryItemContextException$ === "object");
assert(UnsupportedInventorySchemaVersionException.prototype instanceof SSMServiceException);
assert(typeof UnsupportedInventorySchemaVersionException$ === "object");
assert(UnsupportedOperatingSystem.prototype instanceof SSMServiceException);
assert(typeof UnsupportedOperatingSystem$ === "object");
assert(UnsupportedOperationException.prototype instanceof SSMServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(UnsupportedParameterType.prototype instanceof SSMServiceException);
assert(typeof UnsupportedParameterType$ === "object");
assert(UnsupportedPlatformType.prototype instanceof SSMServiceException);
assert(typeof UnsupportedPlatformType$ === "object");
assert(ValidationException.prototype instanceof SSMServiceException);
assert(typeof ValidationException$ === "object");
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
