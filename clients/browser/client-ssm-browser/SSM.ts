import { SSMClient } from "./SSMClient";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { AssociatedInstances } from "./types/AssociatedInstances";
import { AssociationAlreadyExists } from "./types/AssociationAlreadyExists";
import { AssociationDoesNotExist } from "./types/AssociationDoesNotExist";
import { AssociationExecutionDoesNotExist } from "./types/AssociationExecutionDoesNotExist";
import { AssociationLimitExceeded } from "./types/AssociationLimitExceeded";
import { AssociationVersionLimitExceeded } from "./types/AssociationVersionLimitExceeded";
import { AutomationDefinitionNotFoundException } from "./types/AutomationDefinitionNotFoundException";
import { AutomationDefinitionVersionNotFoundException } from "./types/AutomationDefinitionVersionNotFoundException";
import { AutomationExecutionLimitExceededException } from "./types/AutomationExecutionLimitExceededException";
import { AutomationExecutionNotFoundException } from "./types/AutomationExecutionNotFoundException";
import { AutomationStepNotFoundException } from "./types/AutomationStepNotFoundException";
import { CancelCommandInput } from "./types/CancelCommandInput";
import { CancelCommandOutput } from "./types/CancelCommandOutput";
import { CancelMaintenanceWindowExecutionInput } from "./types/CancelMaintenanceWindowExecutionInput";
import { CancelMaintenanceWindowExecutionOutput } from "./types/CancelMaintenanceWindowExecutionOutput";
import { ComplianceTypeCountLimitExceededException } from "./types/ComplianceTypeCountLimitExceededException";
import { CreateActivationInput } from "./types/CreateActivationInput";
import { CreateActivationOutput } from "./types/CreateActivationOutput";
import { CreateAssociationBatchInput } from "./types/CreateAssociationBatchInput";
import { CreateAssociationBatchOutput } from "./types/CreateAssociationBatchOutput";
import { CreateAssociationInput } from "./types/CreateAssociationInput";
import { CreateAssociationOutput } from "./types/CreateAssociationOutput";
import { CreateDocumentInput } from "./types/CreateDocumentInput";
import { CreateDocumentOutput } from "./types/CreateDocumentOutput";
import { CreateMaintenanceWindowInput } from "./types/CreateMaintenanceWindowInput";
import { CreateMaintenanceWindowOutput } from "./types/CreateMaintenanceWindowOutput";
import { CreateOpsItemInput } from "./types/CreateOpsItemInput";
import { CreateOpsItemOutput } from "./types/CreateOpsItemOutput";
import { CreatePatchBaselineInput } from "./types/CreatePatchBaselineInput";
import { CreatePatchBaselineOutput } from "./types/CreatePatchBaselineOutput";
import { CreateResourceDataSyncInput } from "./types/CreateResourceDataSyncInput";
import { CreateResourceDataSyncOutput } from "./types/CreateResourceDataSyncOutput";
import { CustomSchemaCountLimitExceededException } from "./types/CustomSchemaCountLimitExceededException";
import { DeleteActivationInput } from "./types/DeleteActivationInput";
import { DeleteActivationOutput } from "./types/DeleteActivationOutput";
import { DeleteAssociationInput } from "./types/DeleteAssociationInput";
import { DeleteAssociationOutput } from "./types/DeleteAssociationOutput";
import { DeleteDocumentInput } from "./types/DeleteDocumentInput";
import { DeleteDocumentOutput } from "./types/DeleteDocumentOutput";
import { DeleteInventoryInput } from "./types/DeleteInventoryInput";
import { DeleteInventoryOutput } from "./types/DeleteInventoryOutput";
import { DeleteMaintenanceWindowInput } from "./types/DeleteMaintenanceWindowInput";
import { DeleteMaintenanceWindowOutput } from "./types/DeleteMaintenanceWindowOutput";
import { DeleteParameterInput } from "./types/DeleteParameterInput";
import { DeleteParameterOutput } from "./types/DeleteParameterOutput";
import { DeleteParametersInput } from "./types/DeleteParametersInput";
import { DeleteParametersOutput } from "./types/DeleteParametersOutput";
import { DeletePatchBaselineInput } from "./types/DeletePatchBaselineInput";
import { DeletePatchBaselineOutput } from "./types/DeletePatchBaselineOutput";
import { DeleteResourceDataSyncInput } from "./types/DeleteResourceDataSyncInput";
import { DeleteResourceDataSyncOutput } from "./types/DeleteResourceDataSyncOutput";
import { DeregisterManagedInstanceInput } from "./types/DeregisterManagedInstanceInput";
import { DeregisterManagedInstanceOutput } from "./types/DeregisterManagedInstanceOutput";
import { DeregisterPatchBaselineForPatchGroupInput } from "./types/DeregisterPatchBaselineForPatchGroupInput";
import { DeregisterPatchBaselineForPatchGroupOutput } from "./types/DeregisterPatchBaselineForPatchGroupOutput";
import { DeregisterTargetFromMaintenanceWindowInput } from "./types/DeregisterTargetFromMaintenanceWindowInput";
import { DeregisterTargetFromMaintenanceWindowOutput } from "./types/DeregisterTargetFromMaintenanceWindowOutput";
import { DeregisterTaskFromMaintenanceWindowInput } from "./types/DeregisterTaskFromMaintenanceWindowInput";
import { DeregisterTaskFromMaintenanceWindowOutput } from "./types/DeregisterTaskFromMaintenanceWindowOutput";
import { DescribeActivationsInput } from "./types/DescribeActivationsInput";
import { DescribeActivationsOutput } from "./types/DescribeActivationsOutput";
import { DescribeAssociationExecutionTargetsInput } from "./types/DescribeAssociationExecutionTargetsInput";
import { DescribeAssociationExecutionTargetsOutput } from "./types/DescribeAssociationExecutionTargetsOutput";
import { DescribeAssociationExecutionsInput } from "./types/DescribeAssociationExecutionsInput";
import { DescribeAssociationExecutionsOutput } from "./types/DescribeAssociationExecutionsOutput";
import { DescribeAssociationInput } from "./types/DescribeAssociationInput";
import { DescribeAssociationOutput } from "./types/DescribeAssociationOutput";
import { DescribeAutomationExecutionsInput } from "./types/DescribeAutomationExecutionsInput";
import { DescribeAutomationExecutionsOutput } from "./types/DescribeAutomationExecutionsOutput";
import { DescribeAutomationStepExecutionsInput } from "./types/DescribeAutomationStepExecutionsInput";
import { DescribeAutomationStepExecutionsOutput } from "./types/DescribeAutomationStepExecutionsOutput";
import { DescribeAvailablePatchesInput } from "./types/DescribeAvailablePatchesInput";
import { DescribeAvailablePatchesOutput } from "./types/DescribeAvailablePatchesOutput";
import { DescribeDocumentInput } from "./types/DescribeDocumentInput";
import { DescribeDocumentOutput } from "./types/DescribeDocumentOutput";
import { DescribeDocumentPermissionInput } from "./types/DescribeDocumentPermissionInput";
import { DescribeDocumentPermissionOutput } from "./types/DescribeDocumentPermissionOutput";
import { DescribeEffectiveInstanceAssociationsInput } from "./types/DescribeEffectiveInstanceAssociationsInput";
import { DescribeEffectiveInstanceAssociationsOutput } from "./types/DescribeEffectiveInstanceAssociationsOutput";
import { DescribeEffectivePatchesForPatchBaselineInput } from "./types/DescribeEffectivePatchesForPatchBaselineInput";
import { DescribeEffectivePatchesForPatchBaselineOutput } from "./types/DescribeEffectivePatchesForPatchBaselineOutput";
import { DescribeInstanceAssociationsStatusInput } from "./types/DescribeInstanceAssociationsStatusInput";
import { DescribeInstanceAssociationsStatusOutput } from "./types/DescribeInstanceAssociationsStatusOutput";
import { DescribeInstanceInformationInput } from "./types/DescribeInstanceInformationInput";
import { DescribeInstanceInformationOutput } from "./types/DescribeInstanceInformationOutput";
import { DescribeInstancePatchStatesForPatchGroupInput } from "./types/DescribeInstancePatchStatesForPatchGroupInput";
import { DescribeInstancePatchStatesForPatchGroupOutput } from "./types/DescribeInstancePatchStatesForPatchGroupOutput";
import { DescribeInstancePatchStatesInput } from "./types/DescribeInstancePatchStatesInput";
import { DescribeInstancePatchStatesOutput } from "./types/DescribeInstancePatchStatesOutput";
import { DescribeInstancePatchesInput } from "./types/DescribeInstancePatchesInput";
import { DescribeInstancePatchesOutput } from "./types/DescribeInstancePatchesOutput";
import { DescribeInventoryDeletionsInput } from "./types/DescribeInventoryDeletionsInput";
import { DescribeInventoryDeletionsOutput } from "./types/DescribeInventoryDeletionsOutput";
import { DescribeMaintenanceWindowExecutionTaskInvocationsInput } from "./types/DescribeMaintenanceWindowExecutionTaskInvocationsInput";
import { DescribeMaintenanceWindowExecutionTaskInvocationsOutput } from "./types/DescribeMaintenanceWindowExecutionTaskInvocationsOutput";
import { DescribeMaintenanceWindowExecutionTasksInput } from "./types/DescribeMaintenanceWindowExecutionTasksInput";
import { DescribeMaintenanceWindowExecutionTasksOutput } from "./types/DescribeMaintenanceWindowExecutionTasksOutput";
import { DescribeMaintenanceWindowExecutionsInput } from "./types/DescribeMaintenanceWindowExecutionsInput";
import { DescribeMaintenanceWindowExecutionsOutput } from "./types/DescribeMaintenanceWindowExecutionsOutput";
import { DescribeMaintenanceWindowScheduleInput } from "./types/DescribeMaintenanceWindowScheduleInput";
import { DescribeMaintenanceWindowScheduleOutput } from "./types/DescribeMaintenanceWindowScheduleOutput";
import { DescribeMaintenanceWindowTargetsInput } from "./types/DescribeMaintenanceWindowTargetsInput";
import { DescribeMaintenanceWindowTargetsOutput } from "./types/DescribeMaintenanceWindowTargetsOutput";
import { DescribeMaintenanceWindowTasksInput } from "./types/DescribeMaintenanceWindowTasksInput";
import { DescribeMaintenanceWindowTasksOutput } from "./types/DescribeMaintenanceWindowTasksOutput";
import { DescribeMaintenanceWindowsForTargetInput } from "./types/DescribeMaintenanceWindowsForTargetInput";
import { DescribeMaintenanceWindowsForTargetOutput } from "./types/DescribeMaintenanceWindowsForTargetOutput";
import { DescribeMaintenanceWindowsInput } from "./types/DescribeMaintenanceWindowsInput";
import { DescribeMaintenanceWindowsOutput } from "./types/DescribeMaintenanceWindowsOutput";
import { DescribeOpsItemsInput } from "./types/DescribeOpsItemsInput";
import { DescribeOpsItemsOutput } from "./types/DescribeOpsItemsOutput";
import { DescribeParametersInput } from "./types/DescribeParametersInput";
import { DescribeParametersOutput } from "./types/DescribeParametersOutput";
import { DescribePatchBaselinesInput } from "./types/DescribePatchBaselinesInput";
import { DescribePatchBaselinesOutput } from "./types/DescribePatchBaselinesOutput";
import { DescribePatchGroupStateInput } from "./types/DescribePatchGroupStateInput";
import { DescribePatchGroupStateOutput } from "./types/DescribePatchGroupStateOutput";
import { DescribePatchGroupsInput } from "./types/DescribePatchGroupsInput";
import { DescribePatchGroupsOutput } from "./types/DescribePatchGroupsOutput";
import { DescribePatchPropertiesInput } from "./types/DescribePatchPropertiesInput";
import { DescribePatchPropertiesOutput } from "./types/DescribePatchPropertiesOutput";
import { DescribeSessionsInput } from "./types/DescribeSessionsInput";
import { DescribeSessionsOutput } from "./types/DescribeSessionsOutput";
import { DocumentAlreadyExists } from "./types/DocumentAlreadyExists";
import { DocumentLimitExceeded } from "./types/DocumentLimitExceeded";
import { DocumentPermissionLimit } from "./types/DocumentPermissionLimit";
import { DocumentVersionLimitExceeded } from "./types/DocumentVersionLimitExceeded";
import { DoesNotExistException } from "./types/DoesNotExistException";
import { DuplicateDocumentContent } from "./types/DuplicateDocumentContent";
import { DuplicateDocumentVersionName } from "./types/DuplicateDocumentVersionName";
import { DuplicateInstanceId } from "./types/DuplicateInstanceId";
import { FeatureNotAvailableException } from "./types/FeatureNotAvailableException";
import { GetAutomationExecutionInput } from "./types/GetAutomationExecutionInput";
import { GetAutomationExecutionOutput } from "./types/GetAutomationExecutionOutput";
import { GetCommandInvocationInput } from "./types/GetCommandInvocationInput";
import { GetCommandInvocationOutput } from "./types/GetCommandInvocationOutput";
import { GetConnectionStatusInput } from "./types/GetConnectionStatusInput";
import { GetConnectionStatusOutput } from "./types/GetConnectionStatusOutput";
import { GetDefaultPatchBaselineInput } from "./types/GetDefaultPatchBaselineInput";
import { GetDefaultPatchBaselineOutput } from "./types/GetDefaultPatchBaselineOutput";
import { GetDeployablePatchSnapshotForInstanceInput } from "./types/GetDeployablePatchSnapshotForInstanceInput";
import { GetDeployablePatchSnapshotForInstanceOutput } from "./types/GetDeployablePatchSnapshotForInstanceOutput";
import { GetDocumentInput } from "./types/GetDocumentInput";
import { GetDocumentOutput } from "./types/GetDocumentOutput";
import { GetInventoryInput } from "./types/GetInventoryInput";
import { GetInventoryOutput } from "./types/GetInventoryOutput";
import { GetInventorySchemaInput } from "./types/GetInventorySchemaInput";
import { GetInventorySchemaOutput } from "./types/GetInventorySchemaOutput";
import { GetMaintenanceWindowExecutionInput } from "./types/GetMaintenanceWindowExecutionInput";
import { GetMaintenanceWindowExecutionOutput } from "./types/GetMaintenanceWindowExecutionOutput";
import { GetMaintenanceWindowExecutionTaskInput } from "./types/GetMaintenanceWindowExecutionTaskInput";
import { GetMaintenanceWindowExecutionTaskInvocationInput } from "./types/GetMaintenanceWindowExecutionTaskInvocationInput";
import { GetMaintenanceWindowExecutionTaskInvocationOutput } from "./types/GetMaintenanceWindowExecutionTaskInvocationOutput";
import { GetMaintenanceWindowExecutionTaskOutput } from "./types/GetMaintenanceWindowExecutionTaskOutput";
import { GetMaintenanceWindowInput } from "./types/GetMaintenanceWindowInput";
import { GetMaintenanceWindowOutput } from "./types/GetMaintenanceWindowOutput";
import { GetMaintenanceWindowTaskInput } from "./types/GetMaintenanceWindowTaskInput";
import { GetMaintenanceWindowTaskOutput } from "./types/GetMaintenanceWindowTaskOutput";
import { GetOpsItemInput } from "./types/GetOpsItemInput";
import { GetOpsItemOutput } from "./types/GetOpsItemOutput";
import { GetOpsSummaryInput } from "./types/GetOpsSummaryInput";
import { GetOpsSummaryOutput } from "./types/GetOpsSummaryOutput";
import { GetParameterHistoryInput } from "./types/GetParameterHistoryInput";
import { GetParameterHistoryOutput } from "./types/GetParameterHistoryOutput";
import { GetParameterInput } from "./types/GetParameterInput";
import { GetParameterOutput } from "./types/GetParameterOutput";
import { GetParametersByPathInput } from "./types/GetParametersByPathInput";
import { GetParametersByPathOutput } from "./types/GetParametersByPathOutput";
import { GetParametersInput } from "./types/GetParametersInput";
import { GetParametersOutput } from "./types/GetParametersOutput";
import { GetPatchBaselineForPatchGroupInput } from "./types/GetPatchBaselineForPatchGroupInput";
import { GetPatchBaselineForPatchGroupOutput } from "./types/GetPatchBaselineForPatchGroupOutput";
import { GetPatchBaselineInput } from "./types/GetPatchBaselineInput";
import { GetPatchBaselineOutput } from "./types/GetPatchBaselineOutput";
import { GetServiceSettingInput } from "./types/GetServiceSettingInput";
import { GetServiceSettingOutput } from "./types/GetServiceSettingOutput";
import { HierarchyLevelLimitExceededException } from "./types/HierarchyLevelLimitExceededException";
import { HierarchyTypeMismatchException } from "./types/HierarchyTypeMismatchException";
import { IdempotentParameterMismatch } from "./types/IdempotentParameterMismatch";
import { IncompatiblePolicyException } from "./types/IncompatiblePolicyException";
import { InternalServerError } from "./types/InternalServerError";
import { InvalidActivation } from "./types/InvalidActivation";
import { InvalidActivationId } from "./types/InvalidActivationId";
import { InvalidAggregatorException } from "./types/InvalidAggregatorException";
import { InvalidAllowedPatternException } from "./types/InvalidAllowedPatternException";
import { InvalidAssociation } from "./types/InvalidAssociation";
import { InvalidAssociationVersion } from "./types/InvalidAssociationVersion";
import { InvalidAutomationExecutionParametersException } from "./types/InvalidAutomationExecutionParametersException";
import { InvalidAutomationSignalException } from "./types/InvalidAutomationSignalException";
import { InvalidAutomationStatusUpdateException } from "./types/InvalidAutomationStatusUpdateException";
import { InvalidCommandId } from "./types/InvalidCommandId";
import { InvalidDeleteInventoryParametersException } from "./types/InvalidDeleteInventoryParametersException";
import { InvalidDeletionIdException } from "./types/InvalidDeletionIdException";
import { InvalidDocument } from "./types/InvalidDocument";
import { InvalidDocumentContent } from "./types/InvalidDocumentContent";
import { InvalidDocumentOperation } from "./types/InvalidDocumentOperation";
import { InvalidDocumentSchemaVersion } from "./types/InvalidDocumentSchemaVersion";
import { InvalidDocumentVersion } from "./types/InvalidDocumentVersion";
import { InvalidFilter } from "./types/InvalidFilter";
import { InvalidFilterKey } from "./types/InvalidFilterKey";
import { InvalidFilterOption } from "./types/InvalidFilterOption";
import { InvalidFilterValue } from "./types/InvalidFilterValue";
import { InvalidInstanceId } from "./types/InvalidInstanceId";
import { InvalidInstanceInformationFilterValue } from "./types/InvalidInstanceInformationFilterValue";
import { InvalidInventoryGroupException } from "./types/InvalidInventoryGroupException";
import { InvalidInventoryItemContextException } from "./types/InvalidInventoryItemContextException";
import { InvalidInventoryRequestException } from "./types/InvalidInventoryRequestException";
import { InvalidItemContentException } from "./types/InvalidItemContentException";
import { InvalidKeyId } from "./types/InvalidKeyId";
import { InvalidNextToken } from "./types/InvalidNextToken";
import { InvalidNotificationConfig } from "./types/InvalidNotificationConfig";
import { InvalidOptionException } from "./types/InvalidOptionException";
import { InvalidOutputFolder } from "./types/InvalidOutputFolder";
import { InvalidOutputLocation } from "./types/InvalidOutputLocation";
import { InvalidParameters } from "./types/InvalidParameters";
import { InvalidPermissionType } from "./types/InvalidPermissionType";
import { InvalidPluginName } from "./types/InvalidPluginName";
import { InvalidPolicyAttributeException } from "./types/InvalidPolicyAttributeException";
import { InvalidPolicyTypeException } from "./types/InvalidPolicyTypeException";
import { InvalidResourceId } from "./types/InvalidResourceId";
import { InvalidResourceType } from "./types/InvalidResourceType";
import { InvalidResultAttributeException } from "./types/InvalidResultAttributeException";
import { InvalidRole } from "./types/InvalidRole";
import { InvalidSchedule } from "./types/InvalidSchedule";
import { InvalidTarget } from "./types/InvalidTarget";
import { InvalidTypeNameException } from "./types/InvalidTypeNameException";
import { InvalidUpdate } from "./types/InvalidUpdate";
import { InvocationDoesNotExist } from "./types/InvocationDoesNotExist";
import { ItemContentMismatchException } from "./types/ItemContentMismatchException";
import { ItemSizeLimitExceededException } from "./types/ItemSizeLimitExceededException";
import { LabelParameterVersionInput } from "./types/LabelParameterVersionInput";
import { LabelParameterVersionOutput } from "./types/LabelParameterVersionOutput";
import { ListAssociationVersionsInput } from "./types/ListAssociationVersionsInput";
import { ListAssociationVersionsOutput } from "./types/ListAssociationVersionsOutput";
import { ListAssociationsInput } from "./types/ListAssociationsInput";
import { ListAssociationsOutput } from "./types/ListAssociationsOutput";
import { ListCommandInvocationsInput } from "./types/ListCommandInvocationsInput";
import { ListCommandInvocationsOutput } from "./types/ListCommandInvocationsOutput";
import { ListCommandsInput } from "./types/ListCommandsInput";
import { ListCommandsOutput } from "./types/ListCommandsOutput";
import { ListComplianceItemsInput } from "./types/ListComplianceItemsInput";
import { ListComplianceItemsOutput } from "./types/ListComplianceItemsOutput";
import { ListComplianceSummariesInput } from "./types/ListComplianceSummariesInput";
import { ListComplianceSummariesOutput } from "./types/ListComplianceSummariesOutput";
import { ListDocumentVersionsInput } from "./types/ListDocumentVersionsInput";
import { ListDocumentVersionsOutput } from "./types/ListDocumentVersionsOutput";
import { ListDocumentsInput } from "./types/ListDocumentsInput";
import { ListDocumentsOutput } from "./types/ListDocumentsOutput";
import { ListInventoryEntriesInput } from "./types/ListInventoryEntriesInput";
import { ListInventoryEntriesOutput } from "./types/ListInventoryEntriesOutput";
import { ListResourceComplianceSummariesInput } from "./types/ListResourceComplianceSummariesInput";
import { ListResourceComplianceSummariesOutput } from "./types/ListResourceComplianceSummariesOutput";
import { ListResourceDataSyncInput } from "./types/ListResourceDataSyncInput";
import { ListResourceDataSyncOutput } from "./types/ListResourceDataSyncOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MaxDocumentSizeExceeded } from "./types/MaxDocumentSizeExceeded";
import { ModifyDocumentPermissionInput } from "./types/ModifyDocumentPermissionInput";
import { ModifyDocumentPermissionOutput } from "./types/ModifyDocumentPermissionOutput";
import { OpsItemAlreadyExistsException } from "./types/OpsItemAlreadyExistsException";
import { OpsItemInvalidParameterException } from "./types/OpsItemInvalidParameterException";
import { OpsItemLimitExceededException } from "./types/OpsItemLimitExceededException";
import { OpsItemNotFoundException } from "./types/OpsItemNotFoundException";
import { ParameterAlreadyExists } from "./types/ParameterAlreadyExists";
import { ParameterLimitExceeded } from "./types/ParameterLimitExceeded";
import { ParameterMaxVersionLimitExceeded } from "./types/ParameterMaxVersionLimitExceeded";
import { ParameterNotFound } from "./types/ParameterNotFound";
import { ParameterPatternMismatchException } from "./types/ParameterPatternMismatchException";
import { ParameterVersionLabelLimitExceeded } from "./types/ParameterVersionLabelLimitExceeded";
import { ParameterVersionNotFound } from "./types/ParameterVersionNotFound";
import { PoliciesLimitExceededException } from "./types/PoliciesLimitExceededException";
import { PutComplianceItemsInput } from "./types/PutComplianceItemsInput";
import { PutComplianceItemsOutput } from "./types/PutComplianceItemsOutput";
import { PutInventoryInput } from "./types/PutInventoryInput";
import { PutInventoryOutput } from "./types/PutInventoryOutput";
import { PutParameterInput } from "./types/PutParameterInput";
import { PutParameterOutput } from "./types/PutParameterOutput";
import { RegisterDefaultPatchBaselineInput } from "./types/RegisterDefaultPatchBaselineInput";
import { RegisterDefaultPatchBaselineOutput } from "./types/RegisterDefaultPatchBaselineOutput";
import { RegisterPatchBaselineForPatchGroupInput } from "./types/RegisterPatchBaselineForPatchGroupInput";
import { RegisterPatchBaselineForPatchGroupOutput } from "./types/RegisterPatchBaselineForPatchGroupOutput";
import { RegisterTargetWithMaintenanceWindowInput } from "./types/RegisterTargetWithMaintenanceWindowInput";
import { RegisterTargetWithMaintenanceWindowOutput } from "./types/RegisterTargetWithMaintenanceWindowOutput";
import { RegisterTaskWithMaintenanceWindowInput } from "./types/RegisterTaskWithMaintenanceWindowInput";
import { RegisterTaskWithMaintenanceWindowOutput } from "./types/RegisterTaskWithMaintenanceWindowOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ResetServiceSettingInput } from "./types/ResetServiceSettingInput";
import { ResetServiceSettingOutput } from "./types/ResetServiceSettingOutput";
import { ResourceDataSyncAlreadyExistsException } from "./types/ResourceDataSyncAlreadyExistsException";
import { ResourceDataSyncCountExceededException } from "./types/ResourceDataSyncCountExceededException";
import { ResourceDataSyncInvalidConfigurationException } from "./types/ResourceDataSyncInvalidConfigurationException";
import { ResourceDataSyncNotFoundException } from "./types/ResourceDataSyncNotFoundException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceLimitExceededException } from "./types/ResourceLimitExceededException";
import { ResumeSessionInput } from "./types/ResumeSessionInput";
import { ResumeSessionOutput } from "./types/ResumeSessionOutput";
import { SendAutomationSignalInput } from "./types/SendAutomationSignalInput";
import { SendAutomationSignalOutput } from "./types/SendAutomationSignalOutput";
import { SendCommandInput } from "./types/SendCommandInput";
import { SendCommandOutput } from "./types/SendCommandOutput";
import { ServiceSettingNotFound } from "./types/ServiceSettingNotFound";
import { StartAssociationsOnceInput } from "./types/StartAssociationsOnceInput";
import { StartAssociationsOnceOutput } from "./types/StartAssociationsOnceOutput";
import { StartAutomationExecutionInput } from "./types/StartAutomationExecutionInput";
import { StartAutomationExecutionOutput } from "./types/StartAutomationExecutionOutput";
import { StartSessionInput } from "./types/StartSessionInput";
import { StartSessionOutput } from "./types/StartSessionOutput";
import { StatusUnchanged } from "./types/StatusUnchanged";
import { StopAutomationExecutionInput } from "./types/StopAutomationExecutionInput";
import { StopAutomationExecutionOutput } from "./types/StopAutomationExecutionOutput";
import { SubTypeCountLimitExceededException } from "./types/SubTypeCountLimitExceededException";
import { TargetInUseException } from "./types/TargetInUseException";
import { TargetNotConnected } from "./types/TargetNotConnected";
import { TerminateSessionInput } from "./types/TerminateSessionInput";
import { TerminateSessionOutput } from "./types/TerminateSessionOutput";
import { TooManyTagsError } from "./types/TooManyTagsError";
import { TooManyUpdates } from "./types/TooManyUpdates";
import { TotalSizeLimitExceededException } from "./types/TotalSizeLimitExceededException";
import { UnsupportedFeatureRequiredException } from "./types/UnsupportedFeatureRequiredException";
import { UnsupportedInventoryItemContextException } from "./types/UnsupportedInventoryItemContextException";
import { UnsupportedInventorySchemaVersionException } from "./types/UnsupportedInventorySchemaVersionException";
import { UnsupportedOperatingSystem } from "./types/UnsupportedOperatingSystem";
import { UnsupportedParameterType } from "./types/UnsupportedParameterType";
import { UnsupportedPlatformType } from "./types/UnsupportedPlatformType";
import { UpdateAssociationInput } from "./types/UpdateAssociationInput";
import { UpdateAssociationOutput } from "./types/UpdateAssociationOutput";
import { UpdateAssociationStatusInput } from "./types/UpdateAssociationStatusInput";
import { UpdateAssociationStatusOutput } from "./types/UpdateAssociationStatusOutput";
import { UpdateDocumentDefaultVersionInput } from "./types/UpdateDocumentDefaultVersionInput";
import { UpdateDocumentDefaultVersionOutput } from "./types/UpdateDocumentDefaultVersionOutput";
import { UpdateDocumentInput } from "./types/UpdateDocumentInput";
import { UpdateDocumentOutput } from "./types/UpdateDocumentOutput";
import { UpdateMaintenanceWindowInput } from "./types/UpdateMaintenanceWindowInput";
import { UpdateMaintenanceWindowOutput } from "./types/UpdateMaintenanceWindowOutput";
import { UpdateMaintenanceWindowTargetInput } from "./types/UpdateMaintenanceWindowTargetInput";
import { UpdateMaintenanceWindowTargetOutput } from "./types/UpdateMaintenanceWindowTargetOutput";
import { UpdateMaintenanceWindowTaskInput } from "./types/UpdateMaintenanceWindowTaskInput";
import { UpdateMaintenanceWindowTaskOutput } from "./types/UpdateMaintenanceWindowTaskOutput";
import { UpdateManagedInstanceRoleInput } from "./types/UpdateManagedInstanceRoleInput";
import { UpdateManagedInstanceRoleOutput } from "./types/UpdateManagedInstanceRoleOutput";
import { UpdateOpsItemInput } from "./types/UpdateOpsItemInput";
import { UpdateOpsItemOutput } from "./types/UpdateOpsItemOutput";
import { UpdatePatchBaselineInput } from "./types/UpdatePatchBaselineInput";
import { UpdatePatchBaselineOutput } from "./types/UpdatePatchBaselineOutput";
import { UpdateServiceSettingInput } from "./types/UpdateServiceSettingInput";
import { UpdateServiceSettingOutput } from "./types/UpdateServiceSettingOutput";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { CancelCommandCommand } from "./commands/CancelCommandCommand";
import { CancelMaintenanceWindowExecutionCommand } from "./commands/CancelMaintenanceWindowExecutionCommand";
import { CreateActivationCommand } from "./commands/CreateActivationCommand";
import { CreateAssociationBatchCommand } from "./commands/CreateAssociationBatchCommand";
import { CreateAssociationCommand } from "./commands/CreateAssociationCommand";
import { CreateDocumentCommand } from "./commands/CreateDocumentCommand";
import { CreateMaintenanceWindowCommand } from "./commands/CreateMaintenanceWindowCommand";
import { CreateOpsItemCommand } from "./commands/CreateOpsItemCommand";
import { CreatePatchBaselineCommand } from "./commands/CreatePatchBaselineCommand";
import { CreateResourceDataSyncCommand } from "./commands/CreateResourceDataSyncCommand";
import { DeleteActivationCommand } from "./commands/DeleteActivationCommand";
import { DeleteAssociationCommand } from "./commands/DeleteAssociationCommand";
import { DeleteDocumentCommand } from "./commands/DeleteDocumentCommand";
import { DeleteInventoryCommand } from "./commands/DeleteInventoryCommand";
import { DeleteMaintenanceWindowCommand } from "./commands/DeleteMaintenanceWindowCommand";
import { DeleteParameterCommand } from "./commands/DeleteParameterCommand";
import { DeleteParametersCommand } from "./commands/DeleteParametersCommand";
import { DeletePatchBaselineCommand } from "./commands/DeletePatchBaselineCommand";
import { DeleteResourceDataSyncCommand } from "./commands/DeleteResourceDataSyncCommand";
import { DeregisterManagedInstanceCommand } from "./commands/DeregisterManagedInstanceCommand";
import { DeregisterPatchBaselineForPatchGroupCommand } from "./commands/DeregisterPatchBaselineForPatchGroupCommand";
import { DeregisterTargetFromMaintenanceWindowCommand } from "./commands/DeregisterTargetFromMaintenanceWindowCommand";
import { DeregisterTaskFromMaintenanceWindowCommand } from "./commands/DeregisterTaskFromMaintenanceWindowCommand";
import { DescribeActivationsCommand } from "./commands/DescribeActivationsCommand";
import { DescribeAssociationCommand } from "./commands/DescribeAssociationCommand";
import { DescribeAssociationExecutionTargetsCommand } from "./commands/DescribeAssociationExecutionTargetsCommand";
import { DescribeAssociationExecutionsCommand } from "./commands/DescribeAssociationExecutionsCommand";
import { DescribeAutomationExecutionsCommand } from "./commands/DescribeAutomationExecutionsCommand";
import { DescribeAutomationStepExecutionsCommand } from "./commands/DescribeAutomationStepExecutionsCommand";
import { DescribeAvailablePatchesCommand } from "./commands/DescribeAvailablePatchesCommand";
import { DescribeDocumentCommand } from "./commands/DescribeDocumentCommand";
import { DescribeDocumentPermissionCommand } from "./commands/DescribeDocumentPermissionCommand";
import { DescribeEffectiveInstanceAssociationsCommand } from "./commands/DescribeEffectiveInstanceAssociationsCommand";
import { DescribeEffectivePatchesForPatchBaselineCommand } from "./commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { DescribeInstanceAssociationsStatusCommand } from "./commands/DescribeInstanceAssociationsStatusCommand";
import { DescribeInstanceInformationCommand } from "./commands/DescribeInstanceInformationCommand";
import { DescribeInstancePatchStatesCommand } from "./commands/DescribeInstancePatchStatesCommand";
import { DescribeInstancePatchStatesForPatchGroupCommand } from "./commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { DescribeInstancePatchesCommand } from "./commands/DescribeInstancePatchesCommand";
import { DescribeInventoryDeletionsCommand } from "./commands/DescribeInventoryDeletionsCommand";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommand } from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { DescribeMaintenanceWindowExecutionTasksCommand } from "./commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { DescribeMaintenanceWindowExecutionsCommand } from "./commands/DescribeMaintenanceWindowExecutionsCommand";
import { DescribeMaintenanceWindowScheduleCommand } from "./commands/DescribeMaintenanceWindowScheduleCommand";
import { DescribeMaintenanceWindowTargetsCommand } from "./commands/DescribeMaintenanceWindowTargetsCommand";
import { DescribeMaintenanceWindowTasksCommand } from "./commands/DescribeMaintenanceWindowTasksCommand";
import { DescribeMaintenanceWindowsCommand } from "./commands/DescribeMaintenanceWindowsCommand";
import { DescribeMaintenanceWindowsForTargetCommand } from "./commands/DescribeMaintenanceWindowsForTargetCommand";
import { DescribeOpsItemsCommand } from "./commands/DescribeOpsItemsCommand";
import { DescribeParametersCommand } from "./commands/DescribeParametersCommand";
import { DescribePatchBaselinesCommand } from "./commands/DescribePatchBaselinesCommand";
import { DescribePatchGroupStateCommand } from "./commands/DescribePatchGroupStateCommand";
import { DescribePatchGroupsCommand } from "./commands/DescribePatchGroupsCommand";
import { DescribePatchPropertiesCommand } from "./commands/DescribePatchPropertiesCommand";
import { DescribeSessionsCommand } from "./commands/DescribeSessionsCommand";
import { GetAutomationExecutionCommand } from "./commands/GetAutomationExecutionCommand";
import { GetCommandInvocationCommand } from "./commands/GetCommandInvocationCommand";
import { GetConnectionStatusCommand } from "./commands/GetConnectionStatusCommand";
import { GetDefaultPatchBaselineCommand } from "./commands/GetDefaultPatchBaselineCommand";
import { GetDeployablePatchSnapshotForInstanceCommand } from "./commands/GetDeployablePatchSnapshotForInstanceCommand";
import { GetDocumentCommand } from "./commands/GetDocumentCommand";
import { GetInventoryCommand } from "./commands/GetInventoryCommand";
import { GetInventorySchemaCommand } from "./commands/GetInventorySchemaCommand";
import { GetMaintenanceWindowCommand } from "./commands/GetMaintenanceWindowCommand";
import { GetMaintenanceWindowExecutionCommand } from "./commands/GetMaintenanceWindowExecutionCommand";
import { GetMaintenanceWindowExecutionTaskCommand } from "./commands/GetMaintenanceWindowExecutionTaskCommand";
import { GetMaintenanceWindowExecutionTaskInvocationCommand } from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import { GetMaintenanceWindowTaskCommand } from "./commands/GetMaintenanceWindowTaskCommand";
import { GetOpsItemCommand } from "./commands/GetOpsItemCommand";
import { GetOpsSummaryCommand } from "./commands/GetOpsSummaryCommand";
import { GetParameterCommand } from "./commands/GetParameterCommand";
import { GetParameterHistoryCommand } from "./commands/GetParameterHistoryCommand";
import { GetParametersByPathCommand } from "./commands/GetParametersByPathCommand";
import { GetParametersCommand } from "./commands/GetParametersCommand";
import { GetPatchBaselineCommand } from "./commands/GetPatchBaselineCommand";
import { GetPatchBaselineForPatchGroupCommand } from "./commands/GetPatchBaselineForPatchGroupCommand";
import { GetServiceSettingCommand } from "./commands/GetServiceSettingCommand";
import { LabelParameterVersionCommand } from "./commands/LabelParameterVersionCommand";
import { ListAssociationVersionsCommand } from "./commands/ListAssociationVersionsCommand";
import { ListAssociationsCommand } from "./commands/ListAssociationsCommand";
import { ListCommandInvocationsCommand } from "./commands/ListCommandInvocationsCommand";
import { ListCommandsCommand } from "./commands/ListCommandsCommand";
import { ListComplianceItemsCommand } from "./commands/ListComplianceItemsCommand";
import { ListComplianceSummariesCommand } from "./commands/ListComplianceSummariesCommand";
import { ListDocumentVersionsCommand } from "./commands/ListDocumentVersionsCommand";
import { ListDocumentsCommand } from "./commands/ListDocumentsCommand";
import { ListInventoryEntriesCommand } from "./commands/ListInventoryEntriesCommand";
import { ListResourceComplianceSummariesCommand } from "./commands/ListResourceComplianceSummariesCommand";
import { ListResourceDataSyncCommand } from "./commands/ListResourceDataSyncCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ModifyDocumentPermissionCommand } from "./commands/ModifyDocumentPermissionCommand";
import { PutComplianceItemsCommand } from "./commands/PutComplianceItemsCommand";
import { PutInventoryCommand } from "./commands/PutInventoryCommand";
import { PutParameterCommand } from "./commands/PutParameterCommand";
import { RegisterDefaultPatchBaselineCommand } from "./commands/RegisterDefaultPatchBaselineCommand";
import { RegisterPatchBaselineForPatchGroupCommand } from "./commands/RegisterPatchBaselineForPatchGroupCommand";
import { RegisterTargetWithMaintenanceWindowCommand } from "./commands/RegisterTargetWithMaintenanceWindowCommand";
import { RegisterTaskWithMaintenanceWindowCommand } from "./commands/RegisterTaskWithMaintenanceWindowCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { ResetServiceSettingCommand } from "./commands/ResetServiceSettingCommand";
import { ResumeSessionCommand } from "./commands/ResumeSessionCommand";
import { SendAutomationSignalCommand } from "./commands/SendAutomationSignalCommand";
import { SendCommandCommand } from "./commands/SendCommandCommand";
import { StartAssociationsOnceCommand } from "./commands/StartAssociationsOnceCommand";
import { StartAutomationExecutionCommand } from "./commands/StartAutomationExecutionCommand";
import { StartSessionCommand } from "./commands/StartSessionCommand";
import { StopAutomationExecutionCommand } from "./commands/StopAutomationExecutionCommand";
import { TerminateSessionCommand } from "./commands/TerminateSessionCommand";
import { UpdateAssociationCommand } from "./commands/UpdateAssociationCommand";
import { UpdateAssociationStatusCommand } from "./commands/UpdateAssociationStatusCommand";
import { UpdateDocumentCommand } from "./commands/UpdateDocumentCommand";
import { UpdateDocumentDefaultVersionCommand } from "./commands/UpdateDocumentDefaultVersionCommand";
import { UpdateMaintenanceWindowCommand } from "./commands/UpdateMaintenanceWindowCommand";
import { UpdateMaintenanceWindowTargetCommand } from "./commands/UpdateMaintenanceWindowTargetCommand";
import { UpdateMaintenanceWindowTaskCommand } from "./commands/UpdateMaintenanceWindowTaskCommand";
import { UpdateManagedInstanceRoleCommand } from "./commands/UpdateManagedInstanceRoleCommand";
import { UpdateOpsItemCommand } from "./commands/UpdateOpsItemCommand";
import { UpdatePatchBaselineCommand } from "./commands/UpdatePatchBaselineCommand";
import { UpdateServiceSettingCommand } from "./commands/UpdateServiceSettingCommand";

export class SSM extends SSMClient {
  /**
   * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test.</p> <p>Each resource can have a maximum of 50 tags. </p> <p>We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to Amazon EC2 and are interpreted strictly as a string of characters. </p> <p>For more information about tags, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Amazon EC2 Resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceType} <p>The resource type is not valid. For example, if you are attempting to tag an instance, the instance must be a registered, managed instance.</p>
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {TooManyTagsError} <p>The <code>Targets</code> parameter includes too many tags. Remove one or more tags and try the command again.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToResource(
    args: AddTagsToResourceInput
  ): Promise<AddTagsToResourceOutput>;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb: (err: any, data?: AddTagsToResourceOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb?: (err: any, data?: AddTagsToResourceOutput) => void
  ): Promise<AddTagsToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidCommandId} InvalidCommandId shape
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {DuplicateInstanceId} <p>You cannot specify an instance ID in more than one association.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelCommand(args: CancelCommandInput): Promise<CancelCommandOutput>;
  public cancelCommand(
    args: CancelCommandInput,
    cb: (err: any, data?: CancelCommandOutput) => void
  ): void;
  public cancelCommand(
    args: CancelCommandInput,
    cb?: (err: any, data?: CancelCommandOutput) => void
  ): Promise<CancelCommandOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelCommandCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a maintenance window execution that is already in progress and cancels any tasks in the window that have not already starting running. (Tasks already in progress will continue to completion.)</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionInput
  ): Promise<CancelMaintenanceWindowExecutionOutput>;
  public cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionInput,
    cb: (err: any, data?: CancelMaintenanceWindowExecutionOutput) => void
  ): void;
  public cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionInput,
    cb?: (err: any, data?: CancelMaintenanceWindowExecutionOutput) => void
  ): Promise<CancelMaintenanceWindowExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelMaintenanceWindowExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers your on-premises server or virtual machine with Amazon EC2 so that you can manage these resources using Run Command. An on-premises server or virtual machine that has been registered with EC2 is called a managed instance. For more information about activations, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting Up AWS Systems Manager for Hybrid Environments</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createActivation(
    args: CreateActivationInput
  ): Promise<CreateActivationOutput>;
  public createActivation(
    args: CreateActivationInput,
    cb: (err: any, data?: CreateActivationOutput) => void
  ): void;
  public createActivation(
    args: CreateActivationInput,
    cb?: (err: any, data?: CreateActivationOutput) => void
  ): Promise<CreateActivationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateActivationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified.</p> <p>If you associate a document with an instance that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AssociationAlreadyExists} <p>The specified association already exists.</p>
   *   - {AssociationLimitExceeded} <p>You can have at most 2,000 active associations.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {UnsupportedPlatformType} <p>The document does not support the platform type of the given instance ID(s). For example, you sent an document for a Windows instance to a Linux instance.</p>
   *   - {InvalidOutputLocation} <p>The output location is not valid or does not exist.</p>
   *   - {InvalidParameters} <p>You must specify values for all required parameters in the Systems Manager document. You can only supply values to parameters defined in the Systems Manager document.</p>
   *   - {InvalidTarget} <p>The target is not valid or does not exist. It might not be configured for EC2 Systems Manager or you might not have permission to perform the operation.</p>
   *   - {InvalidSchedule} <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAssociation(
    args: CreateAssociationInput
  ): Promise<CreateAssociationOutput>;
  public createAssociation(
    args: CreateAssociationInput,
    cb: (err: any, data?: CreateAssociationOutput) => void
  ): void;
  public createAssociation(
    args: CreateAssociationInput,
    cb?: (err: any, data?: CreateAssociationOutput) => void
  ): Promise<CreateAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified Systems Manager document with the specified instances or targets.</p> <p>When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified.</p> <p>If you associate a document with an instance that already has an associated document, the system returns the AssociationAlreadyExists exception.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidParameters} <p>You must specify values for all required parameters in the Systems Manager document. You can only supply values to parameters defined in the Systems Manager document.</p>
   *   - {DuplicateInstanceId} <p>You cannot specify an instance ID in more than one association.</p>
   *   - {AssociationLimitExceeded} <p>You can have at most 2,000 active associations.</p>
   *   - {UnsupportedPlatformType} <p>The document does not support the platform type of the given instance ID(s). For example, you sent an document for a Windows instance to a Linux instance.</p>
   *   - {InvalidOutputLocation} <p>The output location is not valid or does not exist.</p>
   *   - {InvalidTarget} <p>The target is not valid or does not exist. It might not be configured for EC2 Systems Manager or you might not have permission to perform the operation.</p>
   *   - {InvalidSchedule} <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAssociationBatch(
    args: CreateAssociationBatchInput
  ): Promise<CreateAssociationBatchOutput>;
  public createAssociationBatch(
    args: CreateAssociationBatchInput,
    cb: (err: any, data?: CreateAssociationBatchOutput) => void
  ): void;
  public createAssociationBatch(
    args: CreateAssociationBatchInput,
    cb?: (err: any, data?: CreateAssociationBatchOutput) => void
  ): Promise<CreateAssociationBatchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAssociationBatchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Systems Manager document.</p> <p>After you create a document, you can use CreateAssociation to associate it with one or more running instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DocumentAlreadyExists} <p>The specified document already exists.</p>
   *   - {MaxDocumentSizeExceeded} <p>The size limit of a document is 64 KB.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocumentContent} <p>The content for the document is not valid.</p>
   *   - {DocumentLimitExceeded} <p>You can have at most 500 active Systems Manager documents.</p>
   *   - {InvalidDocumentSchemaVersion} <p>The version of the document schema is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDocument(
    args: CreateDocumentInput
  ): Promise<CreateDocumentOutput>;
  public createDocument(
    args: CreateDocumentInput,
    cb: (err: any, data?: CreateDocumentOutput) => void
  ): void;
  public createDocument(
    args: CreateDocumentInput,
    cb?: (err: any, data?: CreateDocumentOutput) => void
  ): Promise<CreateDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatch} <p>Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token. </p>
   *   - {ResourceLimitExceededException} <p>Error returned when the caller has exceeded the default resource limits. For example, too many maintenance windows or patch baselines have been created.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMaintenanceWindow(
    args: CreateMaintenanceWindowInput
  ): Promise<CreateMaintenanceWindowOutput>;
  public createMaintenanceWindow(
    args: CreateMaintenanceWindowInput,
    cb: (err: any, data?: CreateMaintenanceWindowOutput) => void
  ): void;
  public createMaintenanceWindow(
    args: CreateMaintenanceWindowInput,
    cb?: (err: any, data?: CreateMaintenanceWindowOutput) => void
  ): Promise<CreateMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {OpsItemAlreadyExistsException} <p>The OpsItem already exists.</p>
   *   - {OpsItemLimitExceededException} <p>The request caused OpsItems to exceed one or more limits. For information about OpsItem limits, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-learn-more.html#OpsCenter-learn-more-limits">What are the resource limits for OpsCenter?</a>.</p>
   *   - {OpsItemInvalidParameterException} <p>A specified parameter argument isn't valid. Verify the available arguments and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createOpsItem(args: CreateOpsItemInput): Promise<CreateOpsItemOutput>;
  public createOpsItem(
    args: CreateOpsItemInput,
    cb: (err: any, data?: CreateOpsItemOutput) => void
  ): void;
  public createOpsItem(
    args: CreateOpsItemInput,
    cb?: (err: any, data?: CreateOpsItemOutput) => void
  ): Promise<CreateOpsItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateOpsItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a patch baseline.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatch} <p>Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token. </p>
   *   - {ResourceLimitExceededException} <p>Error returned when the caller has exceeded the default resource limits. For example, too many maintenance windows or patch baselines have been created.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPatchBaseline(
    args: CreatePatchBaselineInput
  ): Promise<CreatePatchBaselineOutput>;
  public createPatchBaseline(
    args: CreatePatchBaselineInput,
    cb: (err: any, data?: CreatePatchBaselineOutput) => void
  ): void;
  public createPatchBaseline(
    args: CreatePatchBaselineInput,
    cb?: (err: any, data?: CreatePatchBaselineOutput) => void
  ): Promise<CreatePatchBaselineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePatchBaselineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a resource data sync configuration to a single bucket in Amazon S3. This is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data to the Amazon S3 bucket. To check the status of the sync, use the <a>ListResourceDataSync</a>.</p> <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource Data Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ResourceDataSyncCountExceededException} <p>You have exceeded the allowed maximum sync configurations.</p>
   *   - {ResourceDataSyncAlreadyExistsException} <p>A sync configuration with the same name already exists.</p>
   *   - {ResourceDataSyncInvalidConfigurationException} <p>The specified sync configuration is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResourceDataSync(
    args: CreateResourceDataSyncInput
  ): Promise<CreateResourceDataSyncOutput>;
  public createResourceDataSync(
    args: CreateResourceDataSyncInput,
    cb: (err: any, data?: CreateResourceDataSyncOutput) => void
  ): void;
  public createResourceDataSync(
    args: CreateResourceDataSyncInput,
    cb?: (err: any, data?: CreateResourceDataSyncOutput) => void
  ): Promise<CreateResourceDataSyncOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceDataSyncCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidActivationId} <p>The activation ID is not valid. Verify the you entered the correct ActivationId or ActivationCode and try again.</p>
   *   - {InvalidActivation} <p>The activation is not valid. The activation might have been deleted, or the ActivationId and the ActivationCode do not match.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteActivation(
    args: DeleteActivationInput
  ): Promise<DeleteActivationOutput>;
  public deleteActivation(
    args: DeleteActivationInput,
    cb: (err: any, data?: DeleteActivationOutput) => void
  ): void;
  public deleteActivation(
    args: DeleteActivationInput,
    cb?: (err: any, data?: DeleteActivationOutput) => void
  ): Promise<DeleteActivationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteActivationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified Systems Manager document from the specified instance.</p> <p>When you disassociate a document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAssociation(
    args: DeleteAssociationInput
  ): Promise<DeleteAssociationOutput>;
  public deleteAssociation(
    args: DeleteAssociationInput,
    cb: (err: any, data?: DeleteAssociationOutput) => void
  ): void;
  public deleteAssociation(
    args: DeleteAssociationInput,
    cb?: (err: any, data?: DeleteAssociationOutput) => void
  ): Promise<DeleteAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the Systems Manager document and all instance associations to the document.</p> <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all instances that are associated with the document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentOperation} <p>You attempted to delete a document while it is still shared. You must stop sharing the document before you can delete it.</p>
   *   - {AssociatedInstances} <p>You must disassociate a document from all instances before you can delete it.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDocument(
    args: DeleteDocumentInput
  ): Promise<DeleteDocumentOutput>;
  public deleteDocument(
    args: DeleteDocumentInput,
    cb: (err: any, data?: DeleteDocumentOutput) => void
  ): void;
  public deleteDocument(
    args: DeleteDocumentInput,
    cb?: (err: any, data?: DeleteDocumentOutput) => void
  ): Promise<DeleteDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete a custom inventory type, or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidTypeNameException} <p>The parameter type name is not valid.</p>
   *   - {InvalidOptionException} <p>The delete inventory option specified is not valid. Verify the option and try again.</p>
   *   - {InvalidDeleteInventoryParametersException} <p>One or more of the parameters specified for the delete operation is not valid. Verify all parameters and try again.</p>
   *   - {InvalidInventoryRequestException} <p>The request is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInventory(
    args: DeleteInventoryInput
  ): Promise<DeleteInventoryOutput>;
  public deleteInventory(
    args: DeleteInventoryInput,
    cb: (err: any, data?: DeleteInventoryOutput) => void
  ): void;
  public deleteInventory(
    args: DeleteInventoryInput,
    cb?: (err: any, data?: DeleteInventoryOutput) => void
  ): Promise<DeleteInventoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInventoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowInput
  ): Promise<DeleteMaintenanceWindowOutput>;
  public deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowInput,
    cb: (err: any, data?: DeleteMaintenanceWindowOutput) => void
  ): void;
  public deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowInput,
    cb?: (err: any, data?: DeleteMaintenanceWindowOutput) => void
  ): Promise<DeleteMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete a parameter from the system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ParameterNotFound} <p>The parameter could not be found. Verify the name and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteParameter(
    args: DeleteParameterInput
  ): Promise<DeleteParameterOutput>;
  public deleteParameter(
    args: DeleteParameterInput,
    cb: (err: any, data?: DeleteParameterOutput) => void
  ): void;
  public deleteParameter(
    args: DeleteParameterInput,
    cb?: (err: any, data?: DeleteParameterOutput) => void
  ): Promise<DeleteParameterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteParameterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Delete a list of parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteParameters(
    args: DeleteParametersInput
  ): Promise<DeleteParametersOutput>;
  public deleteParameters(
    args: DeleteParametersInput,
    cb: (err: any, data?: DeleteParametersOutput) => void
  ): void;
  public deleteParameters(
    args: DeleteParametersInput,
    cb?: (err: any, data?: DeleteParametersOutput) => void
  ): Promise<DeleteParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a patch baseline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>Error returned if an attempt is made to delete a patch baseline that is registered for a patch group.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePatchBaseline(
    args: DeletePatchBaselineInput
  ): Promise<DeletePatchBaselineOutput>;
  public deletePatchBaseline(
    args: DeletePatchBaselineInput,
    cb: (err: any, data?: DeletePatchBaselineOutput) => void
  ): void;
  public deletePatchBaseline(
    args: DeletePatchBaselineInput,
    cb?: (err: any, data?: DeletePatchBaselineOutput) => void
  ): Promise<DeletePatchBaselineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePatchBaselineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to inventory data on managed instances are no longer synced with the target Amazon S3 bucket. Deleting a sync configuration does not delete data in the target Amazon S3 bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ResourceDataSyncNotFoundException} <p>The specified sync name was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResourceDataSync(
    args: DeleteResourceDataSyncInput
  ): Promise<DeleteResourceDataSyncOutput>;
  public deleteResourceDataSync(
    args: DeleteResourceDataSyncInput,
    cb: (err: any, data?: DeleteResourceDataSyncOutput) => void
  ): void;
  public deleteResourceDataSync(
    args: DeleteResourceDataSyncInput,
    cb?: (err: any, data?: DeleteResourceDataSyncOutput) => void
  ): Promise<DeleteResourceDataSyncOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourceDataSyncCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterManagedInstance(
    args: DeregisterManagedInstanceInput
  ): Promise<DeregisterManagedInstanceOutput>;
  public deregisterManagedInstance(
    args: DeregisterManagedInstanceInput,
    cb: (err: any, data?: DeregisterManagedInstanceOutput) => void
  ): void;
  public deregisterManagedInstance(
    args: DeregisterManagedInstanceInput,
    cb?: (err: any, data?: DeregisterManagedInstanceOutput) => void
  ): Promise<DeregisterManagedInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterManagedInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a patch group from a patch baseline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupInput
  ): Promise<DeregisterPatchBaselineForPatchGroupOutput>;
  public deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupInput,
    cb: (err: any, data?: DeregisterPatchBaselineForPatchGroupOutput) => void
  ): void;
  public deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupInput,
    cb?: (err: any, data?: DeregisterPatchBaselineForPatchGroupOutput) => void
  ): Promise<DeregisterPatchBaselineForPatchGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterPatchBaselineForPatchGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a target from a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {TargetInUseException} <p>You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow operation, but the target is still referenced in a task.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowInput
  ): Promise<DeregisterTargetFromMaintenanceWindowOutput>;
  public deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowInput,
    cb: (err: any, data?: DeregisterTargetFromMaintenanceWindowOutput) => void
  ): void;
  public deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowInput,
    cb?: (err: any, data?: DeregisterTargetFromMaintenanceWindowOutput) => void
  ): Promise<DeregisterTargetFromMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterTargetFromMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a task from a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowInput
  ): Promise<DeregisterTaskFromMaintenanceWindowOutput>;
  public deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowInput,
    cb: (err: any, data?: DeregisterTaskFromMaintenanceWindowOutput) => void
  ): void;
  public deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowInput,
    cb?: (err: any, data?: DeregisterTaskFromMaintenanceWindowOutput) => void
  ): Promise<DeregisterTaskFromMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterTaskFromMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes details about the activation, such as the date and time the activation was created, its expiration date, the IAM role assigned to the instances in the activation, and the number of instances registered by using this activation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeActivations(
    args: DescribeActivationsInput
  ): Promise<DescribeActivationsOutput>;
  public describeActivations(
    args: DescribeActivationsInput,
    cb: (err: any, data?: DescribeActivationsOutput) => void
  ): void;
  public describeActivations(
    args: DescribeActivationsInput,
    cb?: (err: any, data?: DescribeActivationsOutput) => void
  ): Promise<DescribeActivationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeActivationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the association for the specified target or instance. If you created the association by using the <code>Targets</code> parameter, then you must retrieve the association by using the association ID. If you created the association by specifying an instance ID and a Systems Manager document, then you retrieve the association by specifying the document name and the instance ID. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {InvalidAssociationVersion} <p>The version you specified is not valid. Use ListAssociationVersions to view all versions of an association according to the association ID. Or, use the <code>$LATEST</code> parameter to view the latest version of the association.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAssociation(
    args: DescribeAssociationInput
  ): Promise<DescribeAssociationOutput>;
  public describeAssociation(
    args: DescribeAssociationInput,
    cb: (err: any, data?: DescribeAssociationOutput) => void
  ): void;
  public describeAssociation(
    args: DescribeAssociationInput,
    cb?: (err: any, data?: DescribeAssociationOutput) => void
  ): Promise<DescribeAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use this API action to view information about a specific execution of a specific association.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {AssociationExecutionDoesNotExist} <p>The specified execution ID does not exist. Verify the ID number and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsInput
  ): Promise<DescribeAssociationExecutionTargetsOutput>;
  public describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsInput,
    cb: (err: any, data?: DescribeAssociationExecutionTargetsOutput) => void
  ): void;
  public describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsInput,
    cb?: (err: any, data?: DescribeAssociationExecutionTargetsOutput) => void
  ): Promise<DescribeAssociationExecutionTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAssociationExecutionTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use this API action to view all executions for a specific association ID. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAssociationExecutions(
    args: DescribeAssociationExecutionsInput
  ): Promise<DescribeAssociationExecutionsOutput>;
  public describeAssociationExecutions(
    args: DescribeAssociationExecutionsInput,
    cb: (err: any, data?: DescribeAssociationExecutionsOutput) => void
  ): void;
  public describeAssociationExecutions(
    args: DescribeAssociationExecutionsInput,
    cb?: (err: any, data?: DescribeAssociationExecutionsOutput) => void
  ): Promise<DescribeAssociationExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAssociationExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides details about all active and terminated Automation executions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {InvalidFilterValue} <p>The filter value is not valid. Verify the value and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAutomationExecutions(
    args: DescribeAutomationExecutionsInput
  ): Promise<DescribeAutomationExecutionsOutput>;
  public describeAutomationExecutions(
    args: DescribeAutomationExecutionsInput,
    cb: (err: any, data?: DescribeAutomationExecutionsOutput) => void
  ): void;
  public describeAutomationExecutions(
    args: DescribeAutomationExecutionsInput,
    cb?: (err: any, data?: DescribeAutomationExecutionsOutput) => void
  ): Promise<DescribeAutomationExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAutomationExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Information about all active and terminated step executions in an Automation workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AutomationExecutionNotFoundException} <p>There is no automation execution information for the requested automation execution ID.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {InvalidFilterValue} <p>The filter value is not valid. Verify the value and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsInput
  ): Promise<DescribeAutomationStepExecutionsOutput>;
  public describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsInput,
    cb: (err: any, data?: DescribeAutomationStepExecutionsOutput) => void
  ): void;
  public describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsInput,
    cb?: (err: any, data?: DescribeAutomationStepExecutionsOutput) => void
  ): Promise<DescribeAutomationStepExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAutomationStepExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all patches eligible to be included in a patch baseline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAvailablePatches(
    args: DescribeAvailablePatchesInput
  ): Promise<DescribeAvailablePatchesOutput>;
  public describeAvailablePatches(
    args: DescribeAvailablePatchesInput,
    cb: (err: any, data?: DescribeAvailablePatchesOutput) => void
  ): void;
  public describeAvailablePatches(
    args: DescribeAvailablePatchesInput,
    cb?: (err: any, data?: DescribeAvailablePatchesOutput) => void
  ): Promise<DescribeAvailablePatchesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAvailablePatchesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified Systems Manager document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDocument(
    args: DescribeDocumentInput
  ): Promise<DescribeDocumentOutput>;
  public describeDocument(
    args: DescribeDocumentInput,
    cb: (err: any, data?: DescribeDocumentOutput) => void
  ): void;
  public describeDocument(
    args: DescribeDocumentInput,
    cb?: (err: any, data?: DescribeDocumentOutput) => void
  ): Promise<DescribeDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the permissions for a Systems Manager document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's AWS account ID) or publicly (<i>All</i>). </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidPermissionType} <p>The permission type is not supported. <i>Share</i> is the only supported permission type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDocumentPermission(
    args: DescribeDocumentPermissionInput
  ): Promise<DescribeDocumentPermissionOutput>;
  public describeDocumentPermission(
    args: DescribeDocumentPermissionInput,
    cb: (err: any, data?: DescribeDocumentPermissionOutput) => void
  ): void;
  public describeDocumentPermission(
    args: DescribeDocumentPermissionInput,
    cb?: (err: any, data?: DescribeDocumentPermissionOutput) => void
  ): Promise<DescribeDocumentPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDocumentPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>All associations for the instance(s).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsInput
  ): Promise<DescribeEffectiveInstanceAssociationsOutput>;
  public describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsInput,
    cb: (err: any, data?: DescribeEffectiveInstanceAssociationsOutput) => void
  ): void;
  public describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsInput,
    cb?: (err: any, data?: DescribeEffectiveInstanceAssociationsOutput) => void
  ): Promise<DescribeEffectiveInstanceAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEffectiveInstanceAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Note that this API applies only to Windows patch baselines.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {UnsupportedOperatingSystem} <p>The operating systems you specified is not supported, or the operation is not supported for the operating system. Valid operating systems include: Windows, AmazonLinux, RedhatEnterpriseLinux, and Ubuntu.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineInput
  ): Promise<DescribeEffectivePatchesForPatchBaselineOutput>;
  public describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineInput,
    cb: (
      err: any,
      data?: DescribeEffectivePatchesForPatchBaselineOutput
    ) => void
  ): void;
  public describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineInput,
    cb?: (
      err: any,
      data?: DescribeEffectivePatchesForPatchBaselineOutput
    ) => void
  ): Promise<DescribeEffectivePatchesForPatchBaselineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEffectivePatchesForPatchBaselineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The status of the associations for the instance(s).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusInput
  ): Promise<DescribeInstanceAssociationsStatusOutput>;
  public describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusInput,
    cb: (err: any, data?: DescribeInstanceAssociationsStatusOutput) => void
  ): void;
  public describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusInput,
    cb?: (err: any, data?: DescribeInstanceAssociationsStatusOutput) => void
  ): Promise<DescribeInstanceAssociationsStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstanceAssociationsStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your instances. You can use this to get information about instances like the operating system platform, the SSM Agent version (Linux), status etc. If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error. </p> <note> <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM) role assigned to on-premises instances. This call does not return the IAM role for Amazon EC2 instances.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InvalidInstanceInformationFilterValue} <p>The specified filter value is not valid.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstanceInformation(
    args: DescribeInstanceInformationInput
  ): Promise<DescribeInstanceInformationOutput>;
  public describeInstanceInformation(
    args: DescribeInstanceInformationInput,
    cb: (err: any, data?: DescribeInstanceInformationOutput) => void
  ): void;
  public describeInstanceInformation(
    args: DescribeInstanceInformationInput,
    cb?: (err: any, data?: DescribeInstanceInformationOutput) => void
  ): Promise<DescribeInstanceInformationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstanceInformationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the high-level patch state of one or more instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstancePatchStates(
    args: DescribeInstancePatchStatesInput
  ): Promise<DescribeInstancePatchStatesOutput>;
  public describeInstancePatchStates(
    args: DescribeInstancePatchStatesInput,
    cb: (err: any, data?: DescribeInstancePatchStatesOutput) => void
  ): void;
  public describeInstancePatchStates(
    args: DescribeInstancePatchStatesInput,
    cb?: (err: any, data?: DescribeInstancePatchStatesOutput) => void
  ): Promise<DescribeInstancePatchStatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstancePatchStatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the high-level patch state for the instances in the specified patch group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupInput
  ): Promise<DescribeInstancePatchStatesForPatchGroupOutput>;
  public describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupInput,
    cb: (
      err: any,
      data?: DescribeInstancePatchStatesForPatchGroupOutput
    ) => void
  ): void;
  public describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupInput,
    cb?: (
      err: any,
      data?: DescribeInstancePatchStatesForPatchGroupOutput
    ) => void
  ): Promise<DescribeInstancePatchStatesForPatchGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstancePatchStatesForPatchGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the patches on the specified instance and their state relative to the patch baseline being used for the instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstancePatches(
    args: DescribeInstancePatchesInput
  ): Promise<DescribeInstancePatchesOutput>;
  public describeInstancePatches(
    args: DescribeInstancePatchesInput,
    cb: (err: any, data?: DescribeInstancePatchesOutput) => void
  ): void;
  public describeInstancePatches(
    args: DescribeInstancePatchesInput,
    cb?: (err: any, data?: DescribeInstancePatchesOutput) => void
  ): Promise<DescribeInstancePatchesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstancePatchesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a specific delete inventory operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDeletionIdException} <p>The ID specified for the delete operation does not exist or is not valid. Verify the ID and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInventoryDeletions(
    args: DescribeInventoryDeletionsInput
  ): Promise<DescribeInventoryDeletionsOutput>;
  public describeInventoryDeletions(
    args: DescribeInventoryDeletionsInput,
    cb: (err: any, data?: DescribeInventoryDeletionsOutput) => void
  ): void;
  public describeInventoryDeletions(
    args: DescribeInventoryDeletionsInput,
    cb?: (err: any, data?: DescribeInventoryDeletionsOutput) => void
  ): Promise<DescribeInventoryDeletionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInventoryDeletionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsInput
  ): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsOutput>;
  public describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsInput,
    cb: (
      err: any,
      data?: DescribeMaintenanceWindowExecutionTaskInvocationsOutput
    ) => void
  ): void;
  public describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsInput,
    cb?: (
      err: any,
      data?: DescribeMaintenanceWindowExecutionTaskInvocationsOutput
    ) => void
  ): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For a given maintenance window execution, lists the tasks that were run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksInput
  ): Promise<DescribeMaintenanceWindowExecutionTasksOutput>;
  public describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionTasksOutput) => void
  ): void;
  public describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksInput,
    cb?: (
      err: any,
      data?: DescribeMaintenanceWindowExecutionTasksOutput
    ) => void
  ): Promise<DescribeMaintenanceWindowExecutionTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowExecutionTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsInput
  ): Promise<DescribeMaintenanceWindowExecutionsOutput>;
  public describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsInput,
    cb: (err: any, data?: DescribeMaintenanceWindowExecutionsOutput) => void
  ): void;
  public describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsInput,
    cb?: (err: any, data?: DescribeMaintenanceWindowExecutionsOutput) => void
  ): Promise<DescribeMaintenanceWindowExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about upcoming executions of a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleInput
  ): Promise<DescribeMaintenanceWindowScheduleOutput>;
  public describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleInput,
    cb: (err: any, data?: DescribeMaintenanceWindowScheduleOutput) => void
  ): void;
  public describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleInput,
    cb?: (err: any, data?: DescribeMaintenanceWindowScheduleOutput) => void
  ): Promise<DescribeMaintenanceWindowScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the targets registered with the maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsInput
  ): Promise<DescribeMaintenanceWindowTargetsOutput>;
  public describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsInput,
    cb: (err: any, data?: DescribeMaintenanceWindowTargetsOutput) => void
  ): void;
  public describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsInput,
    cb?: (err: any, data?: DescribeMaintenanceWindowTargetsOutput) => void
  ): Promise<DescribeMaintenanceWindowTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tasks in a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksInput
  ): Promise<DescribeMaintenanceWindowTasksOutput>;
  public describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksInput,
    cb: (err: any, data?: DescribeMaintenanceWindowTasksOutput) => void
  ): void;
  public describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksInput,
    cb?: (err: any, data?: DescribeMaintenanceWindowTasksOutput) => void
  ): Promise<DescribeMaintenanceWindowTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the maintenance windows in an AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsInput
  ): Promise<DescribeMaintenanceWindowsOutput>;
  public describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsInput,
    cb: (err: any, data?: DescribeMaintenanceWindowsOutput) => void
  ): void;
  public describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsInput,
    cb?: (err: any, data?: DescribeMaintenanceWindowsOutput) => void
  ): Promise<DescribeMaintenanceWindowsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the maintenance window targets or tasks that an instance is associated with.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetInput
  ): Promise<DescribeMaintenanceWindowsForTargetOutput>;
  public describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetInput,
    cb: (err: any, data?: DescribeMaintenanceWindowsForTargetOutput) => void
  ): void;
  public describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetInput,
    cb?: (err: any, data?: DescribeMaintenanceWindowsForTargetOutput) => void
  ): Promise<DescribeMaintenanceWindowsForTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMaintenanceWindowsForTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Query a set of OpsItems. You must have permission in AWS Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOpsItems(
    args: DescribeOpsItemsInput
  ): Promise<DescribeOpsItemsOutput>;
  public describeOpsItems(
    args: DescribeOpsItemsInput,
    cb: (err: any, data?: DescribeOpsItemsOutput) => void
  ): void;
  public describeOpsItems(
    args: DescribeOpsItemsInput,
    cb?: (err: any, data?: DescribeOpsItemsOutput) => void
  ): Promise<DescribeOpsItemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOpsItemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get information about a parameter.</p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {InvalidFilterOption} <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.</p>
   *   - {InvalidFilterValue} <p>The filter value is not valid. Verify the value and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeParameters(
    args: DescribeParametersInput
  ): Promise<DescribeParametersOutput>;
  public describeParameters(
    args: DescribeParametersInput,
    cb: (err: any, data?: DescribeParametersOutput) => void
  ): void;
  public describeParameters(
    args: DescribeParametersInput,
    cb?: (err: any, data?: DescribeParametersOutput) => void
  ): Promise<DescribeParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the patch baselines in your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePatchBaselines(
    args: DescribePatchBaselinesInput
  ): Promise<DescribePatchBaselinesOutput>;
  public describePatchBaselines(
    args: DescribePatchBaselinesInput,
    cb: (err: any, data?: DescribePatchBaselinesOutput) => void
  ): void;
  public describePatchBaselines(
    args: DescribePatchBaselinesInput,
    cb?: (err: any, data?: DescribePatchBaselinesOutput) => void
  ): Promise<DescribePatchBaselinesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePatchBaselinesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns high-level aggregated patch compliance state for a patch group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePatchGroupState(
    args: DescribePatchGroupStateInput
  ): Promise<DescribePatchGroupStateOutput>;
  public describePatchGroupState(
    args: DescribePatchGroupStateInput,
    cb: (err: any, data?: DescribePatchGroupStateOutput) => void
  ): void;
  public describePatchGroupState(
    args: DescribePatchGroupStateInput,
    cb?: (err: any, data?: DescribePatchGroupStateOutput) => void
  ): Promise<DescribePatchGroupStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePatchGroupStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all patch groups that have been registered with patch baselines.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePatchGroups(
    args: DescribePatchGroupsInput
  ): Promise<DescribePatchGroupsOutput>;
  public describePatchGroups(
    args: DescribePatchGroupsInput,
    cb: (err: any, data?: DescribePatchGroupsOutput) => void
  ): void;
  public describePatchGroups(
    args: DescribePatchGroupsInput,
    cb?: (err: any, data?: DescribePatchGroupsOutput) => void
  ): Promise<DescribePatchGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePatchGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for actions such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p> <p>The following section lists the properties that can be used in filters for each major operating system type:</p> <dl> <dt>WINDOWS</dt> <dd> <p>Valid properties: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY</p> </dd> <dt>AMAZON_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>AMAZON_LINUX_2</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>UBUNTU </dt> <dd> <p>Valid properties: PRODUCT, PRIORITY</p> </dd> <dt>REDHAT_ENTERPRISE_LINUX</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>SUSE</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> <dt>CENTOS</dt> <dd> <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p> </dd> </dl>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePatchProperties(
    args: DescribePatchPropertiesInput
  ): Promise<DescribePatchPropertiesOutput>;
  public describePatchProperties(
    args: DescribePatchPropertiesInput,
    cb: (err: any, data?: DescribePatchPropertiesOutput) => void
  ): void;
  public describePatchProperties(
    args: DescribePatchPropertiesInput,
    cb?: (err: any, data?: DescribePatchPropertiesOutput) => void
  ): Promise<DescribePatchPropertiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePatchPropertiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSessions(
    args: DescribeSessionsInput
  ): Promise<DescribeSessionsOutput>;
  public describeSessions(
    args: DescribeSessionsInput,
    cb: (err: any, data?: DescribeSessionsOutput) => void
  ): void;
  public describeSessions(
    args: DescribeSessionsInput,
    cb?: (err: any, data?: DescribeSessionsOutput) => void
  ): Promise<DescribeSessionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSessionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get detailed information about a particular Automation execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AutomationExecutionNotFoundException} <p>There is no automation execution information for the requested automation execution ID.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAutomationExecution(
    args: GetAutomationExecutionInput
  ): Promise<GetAutomationExecutionOutput>;
  public getAutomationExecution(
    args: GetAutomationExecutionInput,
    cb: (err: any, data?: GetAutomationExecutionOutput) => void
  ): void;
  public getAutomationExecution(
    args: GetAutomationExecutionInput,
    cb?: (err: any, data?: GetAutomationExecutionOutput) => void
  ): Promise<GetAutomationExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAutomationExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about command execution for an invocation or plugin. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidCommandId} InvalidCommandId shape
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidPluginName} <p>The plugin name is not valid.</p>
   *   - {InvocationDoesNotExist} <p>The command ID and instance ID you specified did not match any invocations. Verify the command ID and the instance ID and try again. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCommandInvocation(
    args: GetCommandInvocationInput
  ): Promise<GetCommandInvocationOutput>;
  public getCommandInvocation(
    args: GetCommandInvocationInput,
    cb: (err: any, data?: GetCommandInvocationOutput) => void
  ): void;
  public getCommandInvocation(
    args: GetCommandInvocationInput,
    cb?: (err: any, data?: GetCommandInvocationOutput) => void
  ): Promise<GetCommandInvocationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCommandInvocationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the Session Manager connection status for an instance to determine whether it is connected and ready to receive Session Manager connections.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConnectionStatus(
    args: GetConnectionStatusInput
  ): Promise<GetConnectionStatusOutput>;
  public getConnectionStatus(
    args: GetConnectionStatusInput,
    cb: (err: any, data?: GetConnectionStatusOutput) => void
  ): void;
  public getConnectionStatus(
    args: GetConnectionStatusInput,
    cb?: (err: any, data?: GetConnectionStatusOutput) => void
  ): Promise<GetConnectionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConnectionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p> <p>If you do not specify an operating system value, the default patch baseline for Windows is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineInput
  ): Promise<GetDefaultPatchBaselineOutput>;
  public getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineInput,
    cb: (err: any, data?: GetDefaultPatchBaselineOutput) => void
  ): void;
  public getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineInput,
    cb?: (err: any, data?: GetDefaultPatchBaselineOutput) => void
  ): Promise<GetDefaultPatchBaselineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDefaultPatchBaselineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {UnsupportedOperatingSystem} <p>The operating systems you specified is not supported, or the operation is not supported for the operating system. Valid operating systems include: Windows, AmazonLinux, RedhatEnterpriseLinux, and Ubuntu.</p>
   *   - {UnsupportedFeatureRequiredException} <p>Microsoft application patching is only available on EC2 instances and Advanced Instances. To patch Microsoft applications on on-premises servers and VMs, you must enable Advanced Instances. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Using the Advanced-Instances Tier</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceInput
  ): Promise<GetDeployablePatchSnapshotForInstanceOutput>;
  public getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceInput,
    cb: (err: any, data?: GetDeployablePatchSnapshotForInstanceOutput) => void
  ): void;
  public getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceInput,
    cb?: (err: any, data?: GetDeployablePatchSnapshotForInstanceOutput) => void
  ): Promise<GetDeployablePatchSnapshotForInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeployablePatchSnapshotForInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the contents of the specified Systems Manager document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocument(args: GetDocumentInput): Promise<GetDocumentOutput>;
  public getDocument(
    args: GetDocumentInput,
    cb: (err: any, data?: GetDocumentOutput) => void
  ): void;
  public getDocument(
    args: GetDocumentInput,
    cb?: (err: any, data?: GetDocumentOutput) => void
  ): Promise<GetDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Query inventory information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidInventoryGroupException} <p>The specified inventory group is not valid.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InvalidTypeNameException} <p>The parameter type name is not valid.</p>
   *   - {InvalidAggregatorException} <p>The specified aggregator is not valid for inventory groups. Verify that the aggregator uses a valid inventory type such as <code>AWS:Application</code> or <code>AWS:InstanceInformation</code>.</p>
   *   - {InvalidResultAttributeException} <p>The specified inventory item result attribute is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInventory(args: GetInventoryInput): Promise<GetInventoryOutput>;
  public getInventory(
    args: GetInventoryInput,
    cb: (err: any, data?: GetInventoryOutput) => void
  ): void;
  public getInventory(
    args: GetInventoryInput,
    cb?: (err: any, data?: GetInventoryOutput) => void
  ): Promise<GetInventoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInventoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidTypeNameException} <p>The parameter type name is not valid.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInventorySchema(
    args: GetInventorySchemaInput
  ): Promise<GetInventorySchemaOutput>;
  public getInventorySchema(
    args: GetInventorySchemaInput,
    cb: (err: any, data?: GetInventorySchemaOutput) => void
  ): void;
  public getInventorySchema(
    args: GetInventorySchemaInput,
    cb?: (err: any, data?: GetInventorySchemaOutput) => void
  ): Promise<GetInventorySchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInventorySchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMaintenanceWindow(
    args: GetMaintenanceWindowInput
  ): Promise<GetMaintenanceWindowOutput>;
  public getMaintenanceWindow(
    args: GetMaintenanceWindowInput,
    cb: (err: any, data?: GetMaintenanceWindowOutput) => void
  ): void;
  public getMaintenanceWindow(
    args: GetMaintenanceWindowInput,
    cb?: (err: any, data?: GetMaintenanceWindowOutput) => void
  ): Promise<GetMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details about a specific a maintenance window execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionInput
  ): Promise<GetMaintenanceWindowExecutionOutput>;
  public getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionOutput) => void
  ): void;
  public getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionInput,
    cb?: (err: any, data?: GetMaintenanceWindowExecutionOutput) => void
  ): Promise<GetMaintenanceWindowExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMaintenanceWindowExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the details about a specific task run as part of a maintenance window execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskInput
  ): Promise<GetMaintenanceWindowExecutionTaskOutput>;
  public getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskInput,
    cb: (err: any, data?: GetMaintenanceWindowExecutionTaskOutput) => void
  ): void;
  public getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskInput,
    cb?: (err: any, data?: GetMaintenanceWindowExecutionTaskOutput) => void
  ): Promise<GetMaintenanceWindowExecutionTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMaintenanceWindowExecutionTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a specific task running on a specific target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationInput
  ): Promise<GetMaintenanceWindowExecutionTaskInvocationOutput>;
  public getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationInput,
    cb: (
      err: any,
      data?: GetMaintenanceWindowExecutionTaskInvocationOutput
    ) => void
  ): void;
  public getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationInput,
    cb?: (
      err: any,
      data?: GetMaintenanceWindowExecutionTaskInvocationOutput
    ) => void
  ): Promise<GetMaintenanceWindowExecutionTaskInvocationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tasks in a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskInput
  ): Promise<GetMaintenanceWindowTaskOutput>;
  public getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskInput,
    cb: (err: any, data?: GetMaintenanceWindowTaskOutput) => void
  ): void;
  public getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskInput,
    cb?: (err: any, data?: GetMaintenanceWindowTaskOutput) => void
  ): Promise<GetMaintenanceWindowTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMaintenanceWindowTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity and Access Management (IAM) to view information about an OpsItem. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {OpsItemNotFoundException} <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOpsItem(args: GetOpsItemInput): Promise<GetOpsItemOutput>;
  public getOpsItem(
    args: GetOpsItemInput,
    cb: (err: any, data?: GetOpsItemOutput) => void
  ): void;
  public getOpsItem(
    args: GetOpsItemInput,
    cb?: (err: any, data?: GetOpsItemOutput) => void
  ): Promise<GetOpsItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOpsItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>View a summary of OpsItems based on specified filters and aggregators.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InvalidTypeNameException} <p>The parameter type name is not valid.</p>
   *   - {InvalidAggregatorException} <p>The specified aggregator is not valid for inventory groups. Verify that the aggregator uses a valid inventory type such as <code>AWS:Application</code> or <code>AWS:InstanceInformation</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOpsSummary(args: GetOpsSummaryInput): Promise<GetOpsSummaryOutput>;
  public getOpsSummary(
    args: GetOpsSummaryInput,
    cb: (err: any, data?: GetOpsSummaryOutput) => void
  ): void;
  public getOpsSummary(
    args: GetOpsSummaryInput,
    cb?: (err: any, data?: GetOpsSummaryOutput) => void
  ): Promise<GetOpsSummaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOpsSummaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get information about a parameter by using the parameter name. Don't confuse this API action with the <a>GetParameters</a> API action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidKeyId} <p>The query key ID is not valid.</p>
   *   - {ParameterNotFound} <p>The parameter could not be found. Verify the name and try again.</p>
   *   - {ParameterVersionNotFound} <p>The specified parameter version was not found. Verify the parameter name and version, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getParameter(args: GetParameterInput): Promise<GetParameterOutput>;
  public getParameter(
    args: GetParameterInput,
    cb: (err: any, data?: GetParameterOutput) => void
  ): void;
  public getParameter(
    args: GetParameterInput,
    cb?: (err: any, data?: GetParameterOutput) => void
  ): Promise<GetParameterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetParameterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Query a list of all parameters used by the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ParameterNotFound} <p>The parameter could not be found. Verify the name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InvalidKeyId} <p>The query key ID is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getParameterHistory(
    args: GetParameterHistoryInput
  ): Promise<GetParameterHistoryOutput>;
  public getParameterHistory(
    args: GetParameterHistoryInput,
    cb: (err: any, data?: GetParameterHistoryOutput) => void
  ): void;
  public getParameterHistory(
    args: GetParameterHistoryInput,
    cb?: (err: any, data?: GetParameterHistoryOutput) => void
  ): Promise<GetParameterHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetParameterHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get details of a parameter. Don't confuse this API action with the <a>GetParameter</a> API action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidKeyId} <p>The query key ID is not valid.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getParameters(args: GetParametersInput): Promise<GetParametersOutput>;
  public getParameters(
    args: GetParametersInput,
    cb: (err: any, data?: GetParametersOutput) => void
  ): void;
  public getParameters(
    args: GetParametersInput,
    cb?: (err: any, data?: GetParametersOutput) => void
  ): Promise<GetParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve parameters in a specific hierarchy. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-working.html">Working with Systems Manager Parameters</a> in the <i>AWS Systems Manager User Guide</i>. </p> <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of <code>MaxResults</code>. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a <code>NextToken</code>. You can specify the <code>NextToken</code> in a subsequent call to get the next set of results.</p> <note> <p>This API action doesn't support filtering by tags. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {InvalidFilterOption} <p>The specified filter option is not valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.</p>
   *   - {InvalidFilterValue} <p>The filter value is not valid. Verify the value and try again.</p>
   *   - {InvalidKeyId} <p>The query key ID is not valid.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getParametersByPath(
    args: GetParametersByPathInput
  ): Promise<GetParametersByPathOutput>;
  public getParametersByPath(
    args: GetParametersByPathInput,
    cb: (err: any, data?: GetParametersByPathOutput) => void
  ): void;
  public getParametersByPath(
    args: GetParametersByPathInput,
    cb?: (err: any, data?: GetParametersByPathOutput) => void
  ): Promise<GetParametersByPathOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetParametersByPathCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a patch baseline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPatchBaseline(
    args: GetPatchBaselineInput
  ): Promise<GetPatchBaselineOutput>;
  public getPatchBaseline(
    args: GetPatchBaselineInput,
    cb: (err: any, data?: GetPatchBaselineOutput) => void
  ): void;
  public getPatchBaseline(
    args: GetPatchBaselineInput,
    cb?: (err: any, data?: GetPatchBaselineOutput) => void
  ): Promise<GetPatchBaselineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPatchBaselineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the patch baseline that should be used for the specified patch group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupInput
  ): Promise<GetPatchBaselineForPatchGroupOutput>;
  public getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupInput,
    cb: (err: any, data?: GetPatchBaselineForPatchGroupOutput) => void
  ): void;
  public getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupInput,
    cb?: (err: any, data?: GetPatchBaselineForPatchGroupOutput) => void
  ): Promise<GetPatchBaselineForPatchGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPatchBaselineForPatchGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Query the current service setting for the account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ServiceSettingNotFound} <p>The specified service setting was not found. Either the service name or the setting has not been provisioned by the AWS service team.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceSetting(
    args: GetServiceSettingInput
  ): Promise<GetServiceSettingOutput>;
  public getServiceSetting(
    args: GetServiceSettingInput,
    cb: (err: any, data?: GetServiceSettingOutput) => void
  ): void;
  public getServiceSetting(
    args: GetServiceSettingInput,
    cb?: (err: any, data?: GetServiceSettingOutput) => void
  ): Promise<GetServiceSettingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceSettingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions. </p> <p>Parameter labels have the following requirements and restrictions.</p> <ul> <li> <p>A version of a parameter can have a maximum of 10 labels.</p> </li> <li> <p>You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.</p> </li> <li> <p>You can move a label from one version of a parameter to another.</p> </li> <li> <p>You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.</p> </li> <li> <p>You can't delete a parameter label. If you no longer want to use a parameter label, then you must move it to a different version of a parameter.</p> </li> <li> <p>A label can have a maximum of 100 characters.</p> </li> <li> <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).</p> </li> <li> <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label is not associated with a parameter and the system displays it in the list of InvalidLabels.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {ParameterNotFound} <p>The parameter could not be found. Verify the name and try again.</p>
   *   - {ParameterVersionNotFound} <p>The specified parameter version was not found. Verify the parameter name and version, and try again.</p>
   *   - {ParameterVersionLabelLimitExceeded} <p>A parameter version can have a maximum of ten labels.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public labelParameterVersion(
    args: LabelParameterVersionInput
  ): Promise<LabelParameterVersionOutput>;
  public labelParameterVersion(
    args: LabelParameterVersionInput,
    cb: (err: any, data?: LabelParameterVersionOutput) => void
  ): void;
  public labelParameterVersion(
    args: LabelParameterVersionInput,
    cb?: (err: any, data?: LabelParameterVersionOutput) => void
  ): Promise<LabelParameterVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new LabelParameterVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all versions of an association for a specific association ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssociationVersions(
    args: ListAssociationVersionsInput
  ): Promise<ListAssociationVersionsOutput>;
  public listAssociationVersions(
    args: ListAssociationVersionsInput,
    cb: (err: any, data?: ListAssociationVersionsOutput) => void
  ): void;
  public listAssociationVersions(
    args: ListAssociationVersionsInput,
    cb?: (err: any, data?: ListAssociationVersionsOutput) => void
  ): Promise<ListAssociationVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssociationVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the associations for the specified Systems Manager document or instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssociations(
    args: ListAssociationsInput
  ): Promise<ListAssociationsOutput>;
  public listAssociations(
    args: ListAssociationsInput,
    cb: (err: any, data?: ListAssociationsOutput) => void
  ): void;
  public listAssociations(
    args: ListAssociationsInput,
    cb?: (err: any, data?: ListAssociationsOutput) => void
  ): Promise<ListAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. ListCommandInvocations provide status about command execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidCommandId} InvalidCommandId shape
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCommandInvocations(
    args: ListCommandInvocationsInput
  ): Promise<ListCommandInvocationsOutput>;
  public listCommandInvocations(
    args: ListCommandInvocationsInput,
    cb: (err: any, data?: ListCommandInvocationsOutput) => void
  ): void;
  public listCommandInvocations(
    args: ListCommandInvocationsInput,
    cb?: (err: any, data?: ListCommandInvocationsOutput) => void
  ): Promise<ListCommandInvocationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCommandInvocationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the commands requested by users of the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidCommandId} InvalidCommandId shape
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCommands(args: ListCommandsInput): Promise<ListCommandsOutput>;
  public listCommands(
    args: ListCommandsInput,
    cb: (err: any, data?: ListCommandsOutput) => void
  ): void;
  public listCommands(
    args: ListCommandsInput,
    cb?: (err: any, data?: ListCommandsOutput) => void
  ): Promise<ListCommandsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCommandsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For a specified resource ID, this API action returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceType} <p>The resource type is not valid. For example, if you are attempting to tag an instance, the instance must be a registered, managed instance.</p>
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listComplianceItems(
    args: ListComplianceItemsInput
  ): Promise<ListComplianceItemsOutput>;
  public listComplianceItems(
    args: ListComplianceItemsInput,
    cb: (err: any, data?: ListComplianceItemsOutput) => void
  ): void;
  public listComplianceItems(
    args: ListComplianceItemsInput,
    cb?: (err: any, data?: ListComplianceItemsOutput) => void
  ): Promise<ListComplianceItemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListComplianceItemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listComplianceSummaries(
    args: ListComplianceSummariesInput
  ): Promise<ListComplianceSummariesOutput>;
  public listComplianceSummaries(
    args: ListComplianceSummariesInput,
    cb: (err: any, data?: ListComplianceSummariesOutput) => void
  ): void;
  public listComplianceSummaries(
    args: ListComplianceSummariesInput,
    cb?: (err: any, data?: ListComplianceSummariesOutput) => void
  ): Promise<ListComplianceSummariesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListComplianceSummariesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all versions for a document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDocumentVersions(
    args: ListDocumentVersionsInput
  ): Promise<ListDocumentVersionsOutput>;
  public listDocumentVersions(
    args: ListDocumentVersionsInput,
    cb: (err: any, data?: ListDocumentVersionsOutput) => void
  ): void;
  public listDocumentVersions(
    args: ListDocumentVersionsInput,
    cb?: (err: any, data?: ListDocumentVersionsOutput) => void
  ): Promise<ListDocumentVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDocumentVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your Systems Manager documents.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InvalidFilterKey} <p>The specified key is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDocuments(args: ListDocumentsInput): Promise<ListDocumentsOutput>;
  public listDocuments(
    args: ListDocumentsInput,
    cb: (err: any, data?: ListDocumentsOutput) => void
  ): void;
  public listDocuments(
    args: ListDocumentsInput,
    cb?: (err: any, data?: ListDocumentsOutput) => void
  ): Promise<ListDocumentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDocumentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>A list of inventory items returned by the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidTypeNameException} <p>The parameter type name is not valid.</p>
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInventoryEntries(
    args: ListInventoryEntriesInput
  ): Promise<ListInventoryEntriesOutput>;
  public listInventoryEntries(
    args: ListInventoryEntriesInput,
    cb: (err: any, data?: ListInventoryEntriesOutput) => void
  ): void;
  public listInventoryEntries(
    args: ListInventoryEntriesInput,
    cb?: (err: any, data?: ListInventoryEntriesOutput) => void
  ): Promise<ListInventoryEntriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInventoryEntriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidFilter} <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesInput
  ): Promise<ListResourceComplianceSummariesOutput>;
  public listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesInput,
    cb: (err: any, data?: ListResourceComplianceSummariesOutput) => void
  ): void;
  public listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesInput,
    cb?: (err: any, data?: ListResourceComplianceSummariesOutput) => void
  ): Promise<ListResourceComplianceSummariesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceComplianceSummariesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed.</p> <p>The number of sync configurations might be too large to return using a single call to <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by using the <code>MaxResults</code> parameter. To determine whether there are more sync configurations to list, check the value of <code>NextToken</code> in the output. If there are more sync configurations to list, you can request them by specifying the <code>NextToken</code> returned in the call to the parameter of a subsequent call. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidNextToken} <p>The specified token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceDataSync(
    args: ListResourceDataSyncInput
  ): Promise<ListResourceDataSyncOutput>;
  public listResourceDataSync(
    args: ListResourceDataSyncInput,
    cb: (err: any, data?: ListResourceDataSyncOutput) => void
  ): void;
  public listResourceDataSync(
    args: ListResourceDataSyncInput,
    cb?: (err: any, data?: ListResourceDataSyncOutput) => void
  ): Promise<ListResourceDataSyncOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceDataSyncCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the tags assigned to the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceType} <p>The resource type is not valid. For example, if you are attempting to tag an instance, the instance must be a registered, managed instance.</p>
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Shares a Systems Manager document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify <i>All</i> as the account ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidPermissionType} <p>The permission type is not supported. <i>Share</i> is the only supported permission type.</p>
   *   - {DocumentPermissionLimit} <p>The document cannot be shared with more AWS user accounts. You can share a document with a maximum of 20 accounts. You can publicly share up to five documents. If you need to increase this limit, contact AWS Support.</p>
   *   - {DocumentLimitExceeded} <p>You can have at most 500 active Systems Manager documents.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDocumentPermission(
    args: ModifyDocumentPermissionInput
  ): Promise<ModifyDocumentPermissionOutput>;
  public modifyDocumentPermission(
    args: ModifyDocumentPermissionInput,
    cb: (err: any, data?: ModifyDocumentPermissionOutput) => void
  ): void;
  public modifyDocumentPermission(
    args: ModifyDocumentPermissionInput,
    cb?: (err: any, data?: ModifyDocumentPermissionOutput) => void
  ): Promise<ModifyDocumentPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDocumentPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a compliance type and other compliance details on a designated resource. This action lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.</p> <p>ComplianceType can be one of the following:</p> <ul> <li> <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.</p> </li> <li> <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p> </li> <li> <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to the instance.</p> </li> <li> <p>Id: The patch, association, or custom compliance ID.</p> </li> <li> <p>Title: A title.</p> </li> <li> <p>Status: The status of the compliance item. For example, <code>approved</code> for patches, or <code>Failed</code> for associations.</p> </li> <li> <p>Severity: A patch severity. For example, <code>critical</code>.</p> </li> <li> <p>DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.</p> </li> <li> <p>DocumentVersion: An SSM document version number. For example, 4.</p> </li> <li> <p>Classification: A patch classification. For example, <code>security updates</code>.</p> </li> <li> <p>PatchBaselineId: A patch baseline ID.</p> </li> <li> <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p> </li> <li> <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p> </li> <li> <p>PatchGroup: The name of a patch group.</p> </li> <li> <p>InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidItemContentException} <p>One or more content items is not valid.</p>
   *   - {TotalSizeLimitExceededException} <p>The size of inventory data has exceeded the total size limit for the resource.</p>
   *   - {ItemSizeLimitExceededException} <p>The inventory item size has exceeded the size limit.</p>
   *   - {ComplianceTypeCountLimitExceededException} <p>You specified too many custom compliance types. You can specify a maximum of 10 different types. </p>
   *   - {InvalidResourceType} <p>The resource type is not valid. For example, if you are attempting to tag an instance, the instance must be a registered, managed instance.</p>
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putComplianceItems(
    args: PutComplianceItemsInput
  ): Promise<PutComplianceItemsOutput>;
  public putComplianceItems(
    args: PutComplianceItemsInput,
    cb: (err: any, data?: PutComplianceItemsOutput) => void
  ): void;
  public putComplianceItems(
    args: PutComplianceItemsInput,
    cb?: (err: any, data?: PutComplianceItemsOutput) => void
  ): Promise<PutComplianceItemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutComplianceItemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Bulk update custom inventory items on one more instance. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidTypeNameException} <p>The parameter type name is not valid.</p>
   *   - {InvalidItemContentException} <p>One or more content items is not valid.</p>
   *   - {TotalSizeLimitExceededException} <p>The size of inventory data has exceeded the total size limit for the resource.</p>
   *   - {ItemSizeLimitExceededException} <p>The inventory item size has exceeded the size limit.</p>
   *   - {ItemContentMismatchException} <p>The inventory item has invalid content. </p>
   *   - {CustomSchemaCountLimitExceededException} <p>You have exceeded the limit for custom schemas. Delete one or more custom schemas and try again.</p>
   *   - {UnsupportedInventorySchemaVersionException} <p>Inventory item type schema version has to match supported versions in the service. Check output of GetInventorySchema to see the available schema version for each type.</p>
   *   - {UnsupportedInventoryItemContextException} <p>The <code>Context</code> attribute that you specified for the <code>InventoryItem</code> is not allowed for this inventory type. You can only use the <code>Context</code> attribute with inventory types like <code>AWS:ComplianceItem</code>.</p>
   *   - {InvalidInventoryItemContextException} <p>You specified invalid keys or values in the <code>Context</code> attribute for <code>InventoryItem</code>. Verify the keys and values, and try again.</p>
   *   - {SubTypeCountLimitExceededException} <p>The sub-type count exceeded the limit for the inventory type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putInventory(args: PutInventoryInput): Promise<PutInventoryOutput>;
  public putInventory(
    args: PutInventoryInput,
    cb: (err: any, data?: PutInventoryOutput) => void
  ): void;
  public putInventory(
    args: PutInventoryInput,
    cb?: (err: any, data?: PutInventoryOutput) => void
  ): Promise<PutInventoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutInventoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add a parameter to the system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidKeyId} <p>The query key ID is not valid.</p>
   *   - {ParameterLimitExceeded} <p>You have exceeded the number of parameters for this AWS account. Delete one or more parameters and try again.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {ParameterAlreadyExists} <p>The parameter already exists. You can't create duplicate parameters.</p>
   *   - {HierarchyLevelLimitExceededException} <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and Constraints for Parameter Names</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   *   - {HierarchyTypeMismatchException} <p>Parameter Store does not support changing a parameter type in a hierarchy. For example, you can't change a parameter from a String type to a SecureString type. You must create a new, unique parameter.</p>
   *   - {InvalidAllowedPatternException} <p>The request does not meet the regular expression requirement.</p>
   *   - {ParameterMaxVersionLimitExceeded} <p>The parameter exceeded the maximum number of allowed versions.</p>
   *   - {ParameterPatternMismatchException} <p>The parameter name is not valid.</p>
   *   - {UnsupportedParameterType} <p>The parameter type is not supported.</p>
   *   - {PoliciesLimitExceededException} <p>You specified more than the maximum number of allowed policies for the parameter. The maximum is 10.</p>
   *   - {InvalidPolicyTypeException} <p>The policy type is not supported. Parameter Store supports the following policy types: Expiration, ExpirationNotification, and NoChangeNotification.</p>
   *   - {InvalidPolicyAttributeException} <p>A policy attribute or its value is invalid. </p>
   *   - {IncompatiblePolicyException} <p>There is a conflict in the policies specified for this parameter. You can't, for example, specify two Expiration policies for a parameter. Review your policies, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putParameter(args: PutParameterInput): Promise<PutParameterOutput>;
  public putParameter(
    args: PutParameterInput,
    cb: (err: any, data?: PutParameterOutput) => void
  ): void;
  public putParameter(
    args: PutParameterInput,
    cb?: (err: any, data?: PutParameterOutput) => void
  ): Promise<PutParameterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutParameterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Defines the default patch baseline for the relevant operating system.</p> <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline ARN as the baseline ID value. For example, for CentOS, specify <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of <code>pb-0574b43a65ea646ed</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineInput
  ): Promise<RegisterDefaultPatchBaselineOutput>;
  public registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineInput,
    cb: (err: any, data?: RegisterDefaultPatchBaselineOutput) => void
  ): void;
  public registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineInput,
    cb?: (err: any, data?: RegisterDefaultPatchBaselineOutput) => void
  ): Promise<RegisterDefaultPatchBaselineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterDefaultPatchBaselineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a patch baseline for a patch group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>Error returned if an attempt is made to register a patch group with a patch baseline that is already registered with a different patch baseline.</p>
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {ResourceLimitExceededException} <p>Error returned when the caller has exceeded the default resource limits. For example, too many maintenance windows or patch baselines have been created.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupInput
  ): Promise<RegisterPatchBaselineForPatchGroupOutput>;
  public registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupInput,
    cb: (err: any, data?: RegisterPatchBaselineForPatchGroupOutput) => void
  ): void;
  public registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupInput,
    cb?: (err: any, data?: RegisterPatchBaselineForPatchGroupOutput) => void
  ): Promise<RegisterPatchBaselineForPatchGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterPatchBaselineForPatchGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a target with a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatch} <p>Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token. </p>
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {ResourceLimitExceededException} <p>Error returned when the caller has exceeded the default resource limits. For example, too many maintenance windows or patch baselines have been created.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowInput
  ): Promise<RegisterTargetWithMaintenanceWindowOutput>;
  public registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowInput,
    cb: (err: any, data?: RegisterTargetWithMaintenanceWindowOutput) => void
  ): void;
  public registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowInput,
    cb?: (err: any, data?: RegisterTargetWithMaintenanceWindowOutput) => void
  ): Promise<RegisterTargetWithMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterTargetWithMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a new task to a maintenance window.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {IdempotentParameterMismatch} <p>Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token. </p>
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {ResourceLimitExceededException} <p>Error returned when the caller has exceeded the default resource limits. For example, too many maintenance windows or patch baselines have been created.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {FeatureNotAvailableException} <p>You attempted to register a LAMBDA or STEP_FUNCTIONS task in a region where the corresponding service is not available. </p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowInput
  ): Promise<RegisterTaskWithMaintenanceWindowOutput>;
  public registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowInput,
    cb: (err: any, data?: RegisterTaskWithMaintenanceWindowOutput) => void
  ): void;
  public registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowInput,
    cb?: (err: any, data?: RegisterTaskWithMaintenanceWindowOutput) => void
  ): Promise<RegisterTaskWithMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterTaskWithMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tag keys from the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceType} <p>The resource type is not valid. For example, if you are attempting to tag an instance, the instance must be a registered, managed instance.</p>
   *   - {InvalidResourceId} <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput
  ): Promise<RemoveTagsFromResourceOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb?: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): Promise<RemoveTagsFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Use the <a>UpdateServiceSetting</a> API action to change the default setting. </p> <p>Reset the service setting for the account to the default value as provisioned by the AWS service team. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ServiceSettingNotFound} <p>The specified service setting was not found. Either the service name or the setting has not been provisioned by the AWS service team.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetServiceSetting(
    args: ResetServiceSettingInput
  ): Promise<ResetServiceSettingOutput>;
  public resetServiceSetting(
    args: ResetServiceSettingInput,
    cb: (err: any, data?: ResetServiceSettingOutput) => void
  ): void;
  public resetServiceSetting(
    args: ResetServiceSettingInput,
    cb?: (err: any, data?: ResetServiceSettingOutput) => void
  ): Promise<ResetServiceSettingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetServiceSettingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reconnects a session to an instance after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.</p> <note> <p>This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It is not intended for any other use.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resumeSession(args: ResumeSessionInput): Promise<ResumeSessionOutput>;
  public resumeSession(
    args: ResumeSessionInput,
    cb: (err: any, data?: ResumeSessionOutput) => void
  ): void;
  public resumeSession(
    args: ResumeSessionInput,
    cb?: (err: any, data?: ResumeSessionOutput) => void
  ): Promise<ResumeSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResumeSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends a signal to an Automation execution to change the current behavior or status of the execution. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AutomationExecutionNotFoundException} <p>There is no automation execution information for the requested automation execution ID.</p>
   *   - {AutomationStepNotFoundException} <p>The specified step name and execution ID don't exist. Verify the information and try again.</p>
   *   - {InvalidAutomationSignalException} <p>The signal is not valid for the current Automation execution.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendAutomationSignal(
    args: SendAutomationSignalInput
  ): Promise<SendAutomationSignalOutput>;
  public sendAutomationSignal(
    args: SendAutomationSignalInput,
    cb: (err: any, data?: SendAutomationSignalOutput) => void
  ): void;
  public sendAutomationSignal(
    args: SendAutomationSignalInput,
    cb?: (err: any, data?: SendAutomationSignalOutput) => void
  ): Promise<SendAutomationSignalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendAutomationSignalCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs commands on one or more managed instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateInstanceId} <p>You cannot specify an instance ID in more than one association.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {InvalidOutputFolder} <p>The S3 bucket does not exist.</p>
   *   - {InvalidParameters} <p>You must specify values for all required parameters in the Systems Manager document. You can only supply values to parameters defined in the Systems Manager document.</p>
   *   - {UnsupportedPlatformType} <p>The document does not support the platform type of the given instance ID(s). For example, you sent an document for a Windows instance to a Linux instance.</p>
   *   - {MaxDocumentSizeExceeded} <p>The size limit of a document is 64 KB.</p>
   *   - {InvalidRole} <p>The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about configuring the IAM role for Run Command notifications, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/rc-sns-notifications.html">Configuring Amazon SNS Notifications for Run Command</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *   - {InvalidNotificationConfig} <p>One or more configuration items is not valid. Verify that a valid Amazon Resource Name (ARN) was provided for an Amazon SNS topic.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendCommand(args: SendCommandInput): Promise<SendCommandOutput>;
  public sendCommand(
    args: SendCommandInput,
    cb: (err: any, data?: SendCommandOutput) => void
  ): void;
  public sendCommand(
    args: SendCommandInput,
    cb?: (err: any, data?: SendCommandOutput) => void
  ): Promise<SendCommandOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendCommandCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use this API action to run an association immediately and only one time. This action can be helpful when troubleshooting associations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidAssociation} <p>The association is not valid or does not exist. </p>
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startAssociationsOnce(
    args: StartAssociationsOnceInput
  ): Promise<StartAssociationsOnceOutput>;
  public startAssociationsOnce(
    args: StartAssociationsOnceInput,
    cb: (err: any, data?: StartAssociationsOnceOutput) => void
  ): void;
  public startAssociationsOnce(
    args: StartAssociationsOnceInput,
    cb?: (err: any, data?: StartAssociationsOnceOutput) => void
  ): Promise<StartAssociationsOnceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartAssociationsOnceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates execution of an Automation document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AutomationDefinitionNotFoundException} <p>An Automation document with the specified name could not be found.</p>
   *   - {InvalidAutomationExecutionParametersException} <p>The supplied parameters for invoking the specified Automation document are incorrect. For example, they may not match the set of parameters permitted for the specified Automation document.</p>
   *   - {AutomationExecutionLimitExceededException} <p>The number of simultaneously running Automation executions exceeded the allowable limit.</p>
   *   - {AutomationDefinitionVersionNotFoundException} <p>An Automation document with the specified name and version could not be found.</p>
   *   - {IdempotentParameterMismatch} <p>Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token. </p>
   *   - {InvalidTarget} <p>The target is not valid or does not exist. It might not be configured for EC2 Systems Manager or you might not have permission to perform the operation.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startAutomationExecution(
    args: StartAutomationExecutionInput
  ): Promise<StartAutomationExecutionOutput>;
  public startAutomationExecution(
    args: StartAutomationExecutionInput,
    cb: (err: any, data?: StartAutomationExecutionOutput) => void
  ): void;
  public startAutomationExecution(
    args: StartAutomationExecutionInput,
    cb?: (err: any, data?: StartAutomationExecutionOutput) => void
  ): Promise<StartAutomationExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartAutomationExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.</p> <note> <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"> Install the Session Manager Plugin for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {TargetNotConnected} <p>The specified target instance for the session is not fully configured for use with Session Manager. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Getting Started with Session Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSession(args: StartSessionInput): Promise<StartSessionOutput>;
  public startSession(
    args: StartSessionInput,
    cb: (err: any, data?: StartSessionOutput) => void
  ): void;
  public startSession(
    args: StartSessionInput,
    cb?: (err: any, data?: StartSessionOutput) => void
  ): Promise<StartSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stop an Automation that is currently running.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AutomationExecutionNotFoundException} <p>There is no automation execution information for the requested automation execution ID.</p>
   *   - {InvalidAutomationStatusUpdateException} <p>The specified update status operation is not valid.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopAutomationExecution(
    args: StopAutomationExecutionInput
  ): Promise<StopAutomationExecutionOutput>;
  public stopAutomationExecution(
    args: StopAutomationExecutionInput,
    cb: (err: any, data?: StopAutomationExecutionOutput) => void
  ): void;
  public stopAutomationExecution(
    args: StopAutomationExecutionInput,
    cb?: (err: any, data?: StopAutomationExecutionOutput) => void
  ): Promise<StopAutomationExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopAutomationExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the instance. A terminated session cannot be resumed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateSession(
    args: TerminateSessionInput
  ): Promise<TerminateSessionOutput>;
  public terminateSession(
    args: TerminateSessionInput,
    cb: (err: any, data?: TerminateSessionOutput) => void
  ): void;
  public terminateSession(
    args: TerminateSessionInput,
    cb?: (err: any, data?: TerminateSessionOutput) => void
  ): Promise<TerminateSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon S3 output.</p> <important> <p>When you update an association, the association immediately runs against the specified targets.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidSchedule} <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
   *   - {InvalidParameters} <p>You must specify values for all required parameters in the Systems Manager document. You can only supply values to parameters defined in the Systems Manager document.</p>
   *   - {InvalidOutputLocation} <p>The output location is not valid or does not exist.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {InvalidUpdate} <p>The update is not valid.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidTarget} <p>The target is not valid or does not exist. It might not be configured for EC2 Systems Manager or you might not have permission to perform the operation.</p>
   *   - {InvalidAssociationVersion} <p>The version you specified is not valid. Use ListAssociationVersions to view all versions of an association according to the association ID. Or, use the <code>$LATEST</code> parameter to view the latest version of the association.</p>
   *   - {AssociationVersionLimitExceeded} <p>You have reached the maximum number versions allowed for an association. Each association has a limit of 1,000 versions. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAssociation(
    args: UpdateAssociationInput
  ): Promise<UpdateAssociationOutput>;
  public updateAssociation(
    args: UpdateAssociationInput,
    cb: (err: any, data?: UpdateAssociationOutput) => void
  ): void;
  public updateAssociation(
    args: UpdateAssociationInput,
    cb?: (err: any, data?: UpdateAssociationOutput) => void
  ): Promise<UpdateAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status of the Systems Manager document associated with the specified instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {AssociationDoesNotExist} <p>The specified association does not exist.</p>
   *   - {StatusUnchanged} <p>The updated status is the same as the current status.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAssociationStatus(
    args: UpdateAssociationStatusInput
  ): Promise<UpdateAssociationStatusOutput>;
  public updateAssociationStatus(
    args: UpdateAssociationStatusInput,
    cb: (err: any, data?: UpdateAssociationStatusOutput) => void
  ): void;
  public updateAssociationStatus(
    args: UpdateAssociationStatusInput,
    cb?: (err: any, data?: UpdateAssociationStatusOutput) => void
  ): Promise<UpdateAssociationStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAssociationStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates one or more values for an SSM document.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MaxDocumentSizeExceeded} <p>The size limit of a document is 64 KB.</p>
   *   - {DocumentVersionLimitExceeded} <p>The document has too many versions. Delete one or more document versions and try again.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {DuplicateDocumentContent} <p>The content of the association document matches another document. Change the content of the document and try again.</p>
   *   - {DuplicateDocumentVersionName} <p>The version name has already been used in this document. Specify a different version name, and then try again.</p>
   *   - {InvalidDocumentContent} <p>The content for the document is not valid.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {InvalidDocumentSchemaVersion} <p>The version of the document schema is not supported.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentOperation} <p>You attempted to delete a document while it is still shared. You must stop sharing the document before you can delete it.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDocument(
    args: UpdateDocumentInput
  ): Promise<UpdateDocumentOutput>;
  public updateDocument(
    args: UpdateDocumentInput,
    cb: (err: any, data?: UpdateDocumentOutput) => void
  ): void;
  public updateDocument(
    args: UpdateDocumentInput,
    cb?: (err: any, data?: UpdateDocumentOutput) => void
  ): Promise<UpdateDocumentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDocumentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Set the default version of a document. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {InvalidDocument} <p>The specified document does not exist.</p>
   *   - {InvalidDocumentVersion} <p>The document version is not valid or does not exist.</p>
   *   - {InvalidDocumentSchemaVersion} <p>The version of the document schema is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionInput
  ): Promise<UpdateDocumentDefaultVersionOutput>;
  public updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionInput,
    cb: (err: any, data?: UpdateDocumentDefaultVersionOutput) => void
  ): void;
  public updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionInput,
    cb?: (err: any, data?: UpdateDocumentDefaultVersionOutput) => void
  ): Promise<UpdateDocumentDefaultVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDocumentDefaultVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing maintenance window. Only specified parameters are modified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMaintenanceWindow(
    args: UpdateMaintenanceWindowInput
  ): Promise<UpdateMaintenanceWindowOutput>;
  public updateMaintenanceWindow(
    args: UpdateMaintenanceWindowInput,
    cb: (err: any, data?: UpdateMaintenanceWindowOutput) => void
  ): void;
  public updateMaintenanceWindow(
    args: UpdateMaintenanceWindowInput,
    cb?: (err: any, data?: UpdateMaintenanceWindowOutput) => void
  ): Promise<UpdateMaintenanceWindowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMaintenanceWindowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the target of an existing maintenance window. You can change the following:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Owner</p> </li> <li> <p>IDs for an ID target</p> </li> <li> <p>Tags for a Tag target</p> </li> <li> <p>From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see <a>Target</a>.</p> </li> </ul> <note> <p>If a parameter is null, then the corresponding field is not modified.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetInput
  ): Promise<UpdateMaintenanceWindowTargetOutput>;
  public updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetInput,
    cb: (err: any, data?: UpdateMaintenanceWindowTargetOutput) => void
  ): void;
  public updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetInput,
    cb?: (err: any, data?: UpdateMaintenanceWindowTargetOutput) => void
  ): Promise<UpdateMaintenanceWindowTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMaintenanceWindowTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:</p> <ul> <li> <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.</p> </li> <li> <p>ServiceRoleArn</p> </li> <li> <p>TaskInvocationParameters</p> </li> <li> <p>Priority</p> </li> <li> <p>MaxConcurrency</p> </li> <li> <p>MaxErrors</p> </li> </ul> <p>If a parameter is null, then the corresponding field is not modified. Also, if you set Replace to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this request. Optional fields that aren't specified are set to null.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskInput
  ): Promise<UpdateMaintenanceWindowTaskOutput>;
  public updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskInput,
    cb: (err: any, data?: UpdateMaintenanceWindowTaskOutput) => void
  ): void;
  public updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskInput,
    cb?: (err: any, data?: UpdateMaintenanceWindowTaskOutput) => void
  ): Promise<UpdateMaintenanceWindowTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMaintenanceWindowTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns or changes an Amazon Identity and Access Management (IAM) role for the managed instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInstanceId} <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleInput
  ): Promise<UpdateManagedInstanceRoleOutput>;
  public updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleInput,
    cb: (err: any, data?: UpdateManagedInstanceRoleOutput) => void
  ): void;
  public updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleInput,
    cb?: (err: any, data?: UpdateManagedInstanceRoleOutput) => void
  ): Promise<UpdateManagedInstanceRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateManagedInstanceRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Edit or change an OpsItem. You must have permission in AWS Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their AWS resources. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {OpsItemNotFoundException} <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
   *   - {OpsItemAlreadyExistsException} <p>The OpsItem already exists.</p>
   *   - {OpsItemLimitExceededException} <p>The request caused OpsItems to exceed one or more limits. For information about OpsItem limits, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-learn-more.html#OpsCenter-learn-more-limits">What are the resource limits for OpsCenter?</a>.</p>
   *   - {OpsItemInvalidParameterException} <p>A specified parameter argument isn't valid. Verify the available arguments and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateOpsItem(args: UpdateOpsItemInput): Promise<UpdateOpsItemOutput>;
  public updateOpsItem(
    args: UpdateOpsItemInput,
    cb: (err: any, data?: UpdateOpsItemOutput) => void
  ): void;
  public updateOpsItem(
    args: UpdateOpsItemInput,
    cb?: (err: any, data?: UpdateOpsItemOutput) => void
  ): Promise<UpdateOpsItemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateOpsItemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing patch baseline. Fields not specified in the request are left unchanged.</p> <note> <p>For information about valid key and value pairs in <code>PatchFilters</code> for each supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DoesNotExistException} <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePatchBaseline(
    args: UpdatePatchBaselineInput
  ): Promise<UpdatePatchBaselineOutput>;
  public updatePatchBaseline(
    args: UpdatePatchBaselineInput,
    cb: (err: any, data?: UpdatePatchBaselineOutput) => void
  ): void;
  public updatePatchBaseline(
    args: UpdatePatchBaselineInput,
    cb?: (err: any, data?: UpdatePatchBaselineOutput) => void
  ): Promise<UpdatePatchBaselineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePatchBaselineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an AWS service charges money to the account based on feature or service usage, then the AWS service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>GetServiceSetting</a> API action to view the current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the AWS service team.</p> <p>Update the service setting for the account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ServiceSettingNotFound} <p>The specified service setting was not found. Either the service name or the setting has not been provisioned by the AWS service team.</p>
   *   - {TooManyUpdates} <p>There are concurrent updates for a resource that supports one update at a time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServiceSetting(
    args: UpdateServiceSettingInput
  ): Promise<UpdateServiceSettingOutput>;
  public updateServiceSetting(
    args: UpdateServiceSettingInput,
    cb: (err: any, data?: UpdateServiceSettingOutput) => void
  ): void;
  public updateServiceSetting(
    args: UpdateServiceSettingInput,
    cb?: (err: any, data?: UpdateServiceSettingOutput) => void
  ): Promise<UpdateServiceSettingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServiceSettingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
