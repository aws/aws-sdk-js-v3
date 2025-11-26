import {
  AccountFilterType,
  AccountGateStatus,
  ActivateOrganizationsAccessCommand,
  ActivateTypeCommand,
  AfterValueFrom,
  AnnotationSeverityLevel,
  AnnotationStatus,
  AttributeChangeType,
  BatchDescribeTypeConfigurationsCommand,
  BeaconStackOperationStatus,
  BeforeValueFrom,
  CallAs,
  CancelUpdateStackCommand,
  Capability,
  Category,
  ChangeAction,
  ChangeSetHooksStatus,
  ChangeSetStatus,
  ChangeSetType,
  ChangeSource,
  ChangeType,
  CloudFormation,
  CloudFormationClient,
  CloudFormationServiceException,
  ConcurrencyMode,
  ContinueUpdateRollbackCommand,
  CreateChangeSetCommand,
  CreateGeneratedTemplateCommand,
  CreateStackCommand,
  CreateStackInstancesCommand,
  CreateStackRefactorCommand,
  CreateStackSetCommand,
  DeactivateOrganizationsAccessCommand,
  DeactivateTypeCommand,
  DeleteChangeSetCommand,
  DeleteGeneratedTemplateCommand,
  DeleteStackCommand,
  DeleteStackInstancesCommand,
  DeleteStackSetCommand,
  DeletionMode,
  DeploymentMode,
  DeprecatedStatus,
  DeregisterTypeCommand,
  DescribeAccountLimitsCommand,
  DescribeChangeSetCommand,
  DescribeChangeSetHooksCommand,
  DescribeEventsCommand,
  DescribeGeneratedTemplateCommand,
  DescribeOrganizationsAccessCommand,
  DescribePublisherCommand,
  DescribeResourceScanCommand,
  DescribeStackDriftDetectionStatusCommand,
  DescribeStackEventsCommand,
  DescribeStackInstanceCommand,
  DescribeStackRefactorCommand,
  DescribeStackResourceCommand,
  DescribeStackResourceDriftsCommand,
  DescribeStackResourcesCommand,
  DescribeStackSetCommand,
  DescribeStackSetOperationCommand,
  DescribeStacksCommand,
  DescribeTypeCommand,
  DescribeTypeRegistrationCommand,
  DetailedStatus,
  DetectStackDriftCommand,
  DetectStackResourceDriftCommand,
  DetectStackSetDriftCommand,
  DifferenceType,
  DriftIgnoredReason,
  EstimateTemplateCostCommand,
  EvaluationType,
  EventType,
  ExecuteChangeSetCommand,
  ExecuteStackRefactorCommand,
  ExecutionStatus,
  GeneratedTemplateDeletionPolicy,
  GeneratedTemplateResourceStatus,
  GeneratedTemplateStatus,
  GeneratedTemplateUpdateReplacePolicy,
  GetGeneratedTemplateCommand,
  GetHookResultCommand,
  GetStackPolicyCommand,
  GetTemplateCommand,
  GetTemplateSummaryCommand,
  HandlerErrorCode,
  HookFailureMode,
  HookInvocationPoint,
  HookStatus,
  HookTargetAction,
  HookTargetType,
  IdentityProvider,
  ImportStacksToStackSetCommand,
  ListChangeSetsCommand,
  ListExportsCommand,
  ListGeneratedTemplatesCommand,
  ListHookResultsCommand,
  ListHookResultsTargetType,
  ListImportsCommand,
  ListResourceScanRelatedResourcesCommand,
  ListResourceScanResourcesCommand,
  ListResourceScansCommand,
  ListStackInstanceResourceDriftsCommand,
  ListStackInstancesCommand,
  ListStackRefactorActionsCommand,
  ListStackRefactorsCommand,
  ListStackResourcesCommand,
  ListStackSetAutoDeploymentTargetsCommand,
  ListStackSetOperationResultsCommand,
  ListStackSetOperationsCommand,
  ListStackSetsCommand,
  ListStacksCommand,
  ListTypeRegistrationsCommand,
  ListTypeVersionsCommand,
  ListTypesCommand,
  OnFailure,
  OnStackFailure,
  OperationResultFilterName,
  OperationStatus,
  OperationType,
  OrganizationStatus,
  PermissionModels,
  PolicyAction,
  ProvisioningType,
  PublishTypeCommand,
  PublisherStatus,
  RecordHandlerProgressCommand,
  RegionConcurrencyType,
  RegisterPublisherCommand,
  RegisterTypeCommand,
  RegistrationStatus,
  RegistryType,
  Replacement,
  RequiresRecreation,
  ResourceAttribute,
  ResourceScanStatus,
  ResourceSignalStatus,
  ResourceStatus,
  RollbackStackCommand,
  ScanType,
  SetStackPolicyCommand,
  SetTypeConfigurationCommand,
  SetTypeDefaultVersionCommand,
  SignalResourceCommand,
  StackDriftDetectionStatus,
  StackDriftStatus,
  StackInstanceDetailedStatus,
  StackInstanceFilterName,
  StackInstanceStatus,
  StackRefactorActionEntity,
  StackRefactorActionType,
  StackRefactorDetection,
  StackRefactorExecutionStatus,
  StackRefactorStatus,
  StackResourceDriftStatus,
  StackSetDriftDetectionStatus,
  StackSetDriftStatus,
  StackSetOperationAction,
  StackSetOperationResultStatus,
  StackSetOperationStatus,
  StackSetStatus,
  StackStatus,
  StartResourceScanCommand,
  StopStackSetOperationCommand,
  TemplateFormat,
  TemplateStage,
  TestTypeCommand,
  ThirdPartyType,
  TypeTestsStatus,
  UpdateGeneratedTemplateCommand,
  UpdateStackCommand,
  UpdateStackInstancesCommand,
  UpdateStackSetCommand,
  UpdateTerminationProtectionCommand,
  ValidateTemplateCommand,
  ValidationStatus,
  VersionBump,
  Visibility,
  WarningType,
  paginateDescribeAccountLimits,
  paginateDescribeChangeSet,
  paginateDescribeEvents,
  paginateDescribeStackEvents,
  paginateDescribeStackResourceDrifts,
  paginateDescribeStacks,
  paginateListChangeSets,
  paginateListExports,
  paginateListGeneratedTemplates,
  paginateListImports,
  paginateListResourceScanRelatedResources,
  paginateListResourceScanResources,
  paginateListResourceScans,
  paginateListStackInstances,
  paginateListStackRefactorActions,
  paginateListStackRefactors,
  paginateListStackResources,
  paginateListStackSetOperationResults,
  paginateListStackSetOperations,
  paginateListStackSets,
  paginateListStacks,
  paginateListTypeRegistrations,
  paginateListTypeVersions,
  paginateListTypes,
  waitForChangeSetCreateComplete,
  waitForStackCreateComplete,
  waitForStackDeleteComplete,
  waitForStackExists,
  waitForStackImportComplete,
  waitForStackRefactorCreateComplete,
  waitForStackRefactorExecuteComplete,
  waitForStackRollbackComplete,
  waitForStackUpdateComplete,
  waitForTypeRegistrationComplete,
  waitUntilChangeSetCreateComplete,
  waitUntilStackCreateComplete,
  waitUntilStackDeleteComplete,
  waitUntilStackExists,
  waitUntilStackImportComplete,
  waitUntilStackRefactorCreateComplete,
  waitUntilStackRefactorExecuteComplete,
  waitUntilStackRollbackComplete,
  waitUntilStackUpdateComplete,
  waitUntilTypeRegistrationComplete,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudFormationClient === "function")
assert(typeof CloudFormation === "function")
// commands
assert(typeof ActivateOrganizationsAccessCommand === "function")
assert(typeof ActivateTypeCommand === "function")
assert(typeof BatchDescribeTypeConfigurationsCommand === "function")
assert(typeof CancelUpdateStackCommand === "function")
assert(typeof ContinueUpdateRollbackCommand === "function")
assert(typeof CreateChangeSetCommand === "function")
assert(typeof CreateGeneratedTemplateCommand === "function")
assert(typeof CreateStackCommand === "function")
assert(typeof CreateStackInstancesCommand === "function")
assert(typeof CreateStackRefactorCommand === "function")
assert(typeof CreateStackSetCommand === "function")
assert(typeof DeactivateOrganizationsAccessCommand === "function")
assert(typeof DeactivateTypeCommand === "function")
assert(typeof DeleteChangeSetCommand === "function")
assert(typeof DeleteGeneratedTemplateCommand === "function")
assert(typeof DeleteStackCommand === "function")
assert(typeof DeleteStackInstancesCommand === "function")
assert(typeof DeleteStackSetCommand === "function")
assert(typeof DeregisterTypeCommand === "function")
assert(typeof DescribeAccountLimitsCommand === "function")
assert(typeof DescribeChangeSetCommand === "function")
assert(typeof DescribeChangeSetHooksCommand === "function")
assert(typeof DescribeEventsCommand === "function")
assert(typeof DescribeGeneratedTemplateCommand === "function")
assert(typeof DescribeOrganizationsAccessCommand === "function")
assert(typeof DescribePublisherCommand === "function")
assert(typeof DescribeResourceScanCommand === "function")
assert(typeof DescribeStackDriftDetectionStatusCommand === "function")
assert(typeof DescribeStackEventsCommand === "function")
assert(typeof DescribeStackInstanceCommand === "function")
assert(typeof DescribeStackRefactorCommand === "function")
assert(typeof DescribeStackResourceCommand === "function")
assert(typeof DescribeStackResourceDriftsCommand === "function")
assert(typeof DescribeStackResourcesCommand === "function")
assert(typeof DescribeStacksCommand === "function")
assert(typeof DescribeStackSetCommand === "function")
assert(typeof DescribeStackSetOperationCommand === "function")
assert(typeof DescribeTypeCommand === "function")
assert(typeof DescribeTypeRegistrationCommand === "function")
assert(typeof DetectStackDriftCommand === "function")
assert(typeof DetectStackResourceDriftCommand === "function")
assert(typeof DetectStackSetDriftCommand === "function")
assert(typeof EstimateTemplateCostCommand === "function")
assert(typeof ExecuteChangeSetCommand === "function")
assert(typeof ExecuteStackRefactorCommand === "function")
assert(typeof GetGeneratedTemplateCommand === "function")
assert(typeof GetHookResultCommand === "function")
assert(typeof GetStackPolicyCommand === "function")
assert(typeof GetTemplateCommand === "function")
assert(typeof GetTemplateSummaryCommand === "function")
assert(typeof ImportStacksToStackSetCommand === "function")
assert(typeof ListChangeSetsCommand === "function")
assert(typeof ListExportsCommand === "function")
assert(typeof ListGeneratedTemplatesCommand === "function")
assert(typeof ListHookResultsCommand === "function")
assert(typeof ListImportsCommand === "function")
assert(typeof ListResourceScanRelatedResourcesCommand === "function")
assert(typeof ListResourceScanResourcesCommand === "function")
assert(typeof ListResourceScansCommand === "function")
assert(typeof ListStackInstanceResourceDriftsCommand === "function")
assert(typeof ListStackInstancesCommand === "function")
assert(typeof ListStackRefactorActionsCommand === "function")
assert(typeof ListStackRefactorsCommand === "function")
assert(typeof ListStackResourcesCommand === "function")
assert(typeof ListStacksCommand === "function")
assert(typeof ListStackSetAutoDeploymentTargetsCommand === "function")
assert(typeof ListStackSetOperationResultsCommand === "function")
assert(typeof ListStackSetOperationsCommand === "function")
assert(typeof ListStackSetsCommand === "function")
assert(typeof ListTypeRegistrationsCommand === "function")
assert(typeof ListTypesCommand === "function")
assert(typeof ListTypeVersionsCommand === "function")
assert(typeof PublishTypeCommand === "function")
assert(typeof RecordHandlerProgressCommand === "function")
assert(typeof RegisterPublisherCommand === "function")
assert(typeof RegisterTypeCommand === "function")
assert(typeof RollbackStackCommand === "function")
assert(typeof SetStackPolicyCommand === "function")
assert(typeof SetTypeConfigurationCommand === "function")
assert(typeof SetTypeDefaultVersionCommand === "function")
assert(typeof SignalResourceCommand === "function")
assert(typeof StartResourceScanCommand === "function")
assert(typeof StopStackSetOperationCommand === "function")
assert(typeof TestTypeCommand === "function")
assert(typeof UpdateGeneratedTemplateCommand === "function")
assert(typeof UpdateStackCommand === "function")
assert(typeof UpdateStackInstancesCommand === "function")
assert(typeof UpdateStackSetCommand === "function")
assert(typeof UpdateTerminationProtectionCommand === "function")
assert(typeof ValidateTemplateCommand === "function")
// enums
assert(typeof AccountFilterType === "object");
assert(typeof AccountGateStatus === "object");
assert(typeof AfterValueFrom === "object");
assert(typeof AnnotationSeverityLevel === "object");
assert(typeof AnnotationStatus === "object");
assert(typeof AttributeChangeType === "object");
assert(typeof BeaconStackOperationStatus === "object");
assert(typeof BeforeValueFrom === "object");
assert(typeof CallAs === "object");
assert(typeof Capability === "object");
assert(typeof Category === "object");
assert(typeof ChangeAction === "object");
assert(typeof ChangeSetHooksStatus === "object");
assert(typeof ChangeSetStatus === "object");
assert(typeof ChangeSetType === "object");
assert(typeof ChangeSource === "object");
assert(typeof ChangeType === "object");
assert(typeof ConcurrencyMode === "object");
assert(typeof DeletionMode === "object");
assert(typeof DeploymentMode === "object");
assert(typeof DeprecatedStatus === "object");
assert(typeof DetailedStatus === "object");
assert(typeof DifferenceType === "object");
assert(typeof DriftIgnoredReason === "object");
assert(typeof EvaluationType === "object");
assert(typeof EventType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof GeneratedTemplateDeletionPolicy === "object");
assert(typeof GeneratedTemplateResourceStatus === "object");
assert(typeof GeneratedTemplateStatus === "object");
assert(typeof GeneratedTemplateUpdateReplacePolicy === "object");
assert(typeof HandlerErrorCode === "object");
assert(typeof HookFailureMode === "object");
assert(typeof HookInvocationPoint === "object");
assert(typeof HookStatus === "object");
assert(typeof HookTargetAction === "object");
assert(typeof HookTargetType === "object");
assert(typeof IdentityProvider === "object");
assert(typeof ListHookResultsTargetType === "object");
assert(typeof OnFailure === "object");
assert(typeof OnStackFailure === "object");
assert(typeof OperationResultFilterName === "object");
assert(typeof OperationStatus === "object");
assert(typeof OperationType === "object");
assert(typeof OrganizationStatus === "object");
assert(typeof PermissionModels === "object");
assert(typeof PolicyAction === "object");
assert(typeof ProvisioningType === "object");
assert(typeof PublisherStatus === "object");
assert(typeof RegionConcurrencyType === "object");
assert(typeof RegistrationStatus === "object");
assert(typeof RegistryType === "object");
assert(typeof Replacement === "object");
assert(typeof RequiresRecreation === "object");
assert(typeof ResourceAttribute === "object");
assert(typeof ResourceScanStatus === "object");
assert(typeof ResourceSignalStatus === "object");
assert(typeof ResourceStatus === "object");
assert(typeof ScanType === "object");
assert(typeof StackDriftDetectionStatus === "object");
assert(typeof StackDriftStatus === "object");
assert(typeof StackInstanceDetailedStatus === "object");
assert(typeof StackInstanceFilterName === "object");
assert(typeof StackInstanceStatus === "object");
assert(typeof StackRefactorActionEntity === "object");
assert(typeof StackRefactorActionType === "object");
assert(typeof StackRefactorDetection === "object");
assert(typeof StackRefactorExecutionStatus === "object");
assert(typeof StackRefactorStatus === "object");
assert(typeof StackResourceDriftStatus === "object");
assert(typeof StackSetDriftDetectionStatus === "object");
assert(typeof StackSetDriftStatus === "object");
assert(typeof StackSetOperationAction === "object");
assert(typeof StackSetOperationResultStatus === "object");
assert(typeof StackSetOperationStatus === "object");
assert(typeof StackSetStatus === "object");
assert(typeof StackStatus === "object");
assert(typeof TemplateFormat === "object");
assert(typeof TemplateStage === "object");
assert(typeof ThirdPartyType === "object");
assert(typeof TypeTestsStatus === "object");
assert(typeof ValidationStatus === "object");
assert(typeof VersionBump === "object");
assert(typeof Visibility === "object");
assert(typeof WarningType === "object");
// errors
assert(CloudFormationServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForChangeSetCreateComplete === "function")
assert(typeof waitForStackCreateComplete === "function")
assert(typeof waitForStackDeleteComplete === "function")
assert(typeof waitForStackExists === "function")
assert(typeof waitForStackImportComplete === "function")
assert(typeof waitForStackRefactorCreateComplete === "function")
assert(typeof waitForStackRefactorExecuteComplete === "function")
assert(typeof waitForStackRollbackComplete === "function")
assert(typeof waitForStackUpdateComplete === "function")
assert(typeof waitForTypeRegistrationComplete === "function")
assert(typeof waitUntilChangeSetCreateComplete === "function")
assert(typeof waitUntilStackCreateComplete === "function")
assert(typeof waitUntilStackDeleteComplete === "function")
assert(typeof waitUntilStackExists === "function")
assert(typeof waitUntilStackImportComplete === "function")
assert(typeof waitUntilStackRefactorCreateComplete === "function")
assert(typeof waitUntilStackRefactorExecuteComplete === "function")
assert(typeof waitUntilStackRollbackComplete === "function")
assert(typeof waitUntilStackUpdateComplete === "function")
assert(typeof waitUntilTypeRegistrationComplete === "function")
// paginators
assert(typeof paginateDescribeAccountLimits === "function")
assert(typeof paginateDescribeChangeSet === "function")
assert(typeof paginateDescribeEvents === "function")
assert(typeof paginateDescribeStackEvents === "function")
assert(typeof paginateDescribeStackResourceDrifts === "function")
assert(typeof paginateDescribeStacks === "function")
assert(typeof paginateListChangeSets === "function")
assert(typeof paginateListExports === "function")
assert(typeof paginateListGeneratedTemplates === "function")
assert(typeof paginateListImports === "function")
assert(typeof paginateListResourceScanRelatedResources === "function")
assert(typeof paginateListResourceScanResources === "function")
assert(typeof paginateListResourceScans === "function")
assert(typeof paginateListStackInstances === "function")
assert(typeof paginateListStackRefactorActions === "function")
assert(typeof paginateListStackRefactors === "function")
assert(typeof paginateListStackResources === "function")
assert(typeof paginateListStackSetOperationResults === "function")
assert(typeof paginateListStackSetOperations === "function")
assert(typeof paginateListStackSets === "function")
assert(typeof paginateListStacks === "function")
assert(typeof paginateListTypeRegistrations === "function")
assert(typeof paginateListTypeVersions === "function")
assert(typeof paginateListTypes === "function")
console.log(`CloudFormation index test passed.`);
