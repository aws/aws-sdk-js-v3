import {
  AccountFilterType,
  AccountGateResult$,
  AccountGateStatus,
  AccountLimit$,
  ActivateOrganizationsAccess$,
  ActivateOrganizationsAccessCommand,
  ActivateOrganizationsAccessInput$,
  ActivateOrganizationsAccessOutput$,
  ActivateType$,
  ActivateTypeCommand,
  ActivateTypeInput$,
  ActivateTypeOutput$,
  AfterValueFrom,
  AlreadyExistsException,
  AlreadyExistsException$,
  Annotation$,
  AnnotationSeverityLevel,
  AnnotationStatus,
  AttributeChangeType,
  AutoDeployment$,
  BatchDescribeTypeConfigurations$,
  BatchDescribeTypeConfigurationsCommand,
  BatchDescribeTypeConfigurationsError$,
  BatchDescribeTypeConfigurationsInput$,
  BatchDescribeTypeConfigurationsOutput$,
  BeaconStackOperationStatus,
  BeforeValueFrom,
  CFNRegistryException,
  CFNRegistryException$,
  CallAs,
  CancelUpdateStack$,
  CancelUpdateStackCommand,
  CancelUpdateStackInput$,
  Capability,
  Category,
  Change$,
  ChangeAction,
  ChangeSetHook$,
  ChangeSetHookResourceTargetDetails$,
  ChangeSetHookTargetDetails$,
  ChangeSetHooksStatus,
  ChangeSetNotFoundException,
  ChangeSetNotFoundException$,
  ChangeSetStatus,
  ChangeSetSummary$,
  ChangeSetType,
  ChangeSource,
  ChangeType,
  CloudFormation,
  CloudFormationClient,
  CloudFormationServiceException,
  ConcurrencyMode,
  ConcurrentResourcesLimitExceededException,
  ConcurrentResourcesLimitExceededException$,
  ContinueUpdateRollback$,
  ContinueUpdateRollbackCommand,
  ContinueUpdateRollbackInput$,
  ContinueUpdateRollbackOutput$,
  CreateChangeSet$,
  CreateChangeSetCommand,
  CreateChangeSetInput$,
  CreateChangeSetOutput$,
  CreateGeneratedTemplate$,
  CreateGeneratedTemplateCommand,
  CreateGeneratedTemplateInput$,
  CreateGeneratedTemplateOutput$,
  CreateStack$,
  CreateStackCommand,
  CreateStackInput$,
  CreateStackInstances$,
  CreateStackInstancesCommand,
  CreateStackInstancesInput$,
  CreateStackInstancesOutput$,
  CreateStackOutput$,
  CreateStackRefactor$,
  CreateStackRefactorCommand,
  CreateStackRefactorInput$,
  CreateStackRefactorOutput$,
  CreateStackSet$,
  CreateStackSetCommand,
  CreateStackSetInput$,
  CreateStackSetOutput$,
  CreatedButModifiedException,
  CreatedButModifiedException$,
  DeactivateOrganizationsAccess$,
  DeactivateOrganizationsAccessCommand,
  DeactivateOrganizationsAccessInput$,
  DeactivateOrganizationsAccessOutput$,
  DeactivateType$,
  DeactivateTypeCommand,
  DeactivateTypeInput$,
  DeactivateTypeOutput$,
  DeleteChangeSet$,
  DeleteChangeSetCommand,
  DeleteChangeSetInput$,
  DeleteChangeSetOutput$,
  DeleteGeneratedTemplate$,
  DeleteGeneratedTemplateCommand,
  DeleteGeneratedTemplateInput$,
  DeleteStack$,
  DeleteStackCommand,
  DeleteStackInput$,
  DeleteStackInstances$,
  DeleteStackInstancesCommand,
  DeleteStackInstancesInput$,
  DeleteStackInstancesOutput$,
  DeleteStackSet$,
  DeleteStackSetCommand,
  DeleteStackSetInput$,
  DeleteStackSetOutput$,
  DeletionMode,
  DeploymentMode,
  DeploymentTargets$,
  DeprecatedStatus,
  DeregisterType$,
  DeregisterTypeCommand,
  DeregisterTypeInput$,
  DeregisterTypeOutput$,
  DescribeAccountLimits$,
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsInput$,
  DescribeAccountLimitsOutput$,
  DescribeChangeSet$,
  DescribeChangeSetCommand,
  DescribeChangeSetHooks$,
  DescribeChangeSetHooksCommand,
  DescribeChangeSetHooksInput$,
  DescribeChangeSetHooksOutput$,
  DescribeChangeSetInput$,
  DescribeChangeSetOutput$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsInput$,
  DescribeEventsOutput$,
  DescribeGeneratedTemplate$,
  DescribeGeneratedTemplateCommand,
  DescribeGeneratedTemplateInput$,
  DescribeGeneratedTemplateOutput$,
  DescribeOrganizationsAccess$,
  DescribeOrganizationsAccessCommand,
  DescribeOrganizationsAccessInput$,
  DescribeOrganizationsAccessOutput$,
  DescribePublisher$,
  DescribePublisherCommand,
  DescribePublisherInput$,
  DescribePublisherOutput$,
  DescribeResourceScan$,
  DescribeResourceScanCommand,
  DescribeResourceScanInput$,
  DescribeResourceScanOutput$,
  DescribeStackDriftDetectionStatus$,
  DescribeStackDriftDetectionStatusCommand,
  DescribeStackDriftDetectionStatusInput$,
  DescribeStackDriftDetectionStatusOutput$,
  DescribeStackEvents$,
  DescribeStackEventsCommand,
  DescribeStackEventsInput$,
  DescribeStackEventsOutput$,
  DescribeStackInstance$,
  DescribeStackInstanceCommand,
  DescribeStackInstanceInput$,
  DescribeStackInstanceOutput$,
  DescribeStackRefactor$,
  DescribeStackRefactorCommand,
  DescribeStackRefactorInput$,
  DescribeStackRefactorOutput$,
  DescribeStackResource$,
  DescribeStackResourceCommand,
  DescribeStackResourceDrifts$,
  DescribeStackResourceDriftsCommand,
  DescribeStackResourceDriftsInput$,
  DescribeStackResourceDriftsOutput$,
  DescribeStackResourceInput$,
  DescribeStackResourceOutput$,
  DescribeStackResources$,
  DescribeStackResourcesCommand,
  DescribeStackResourcesInput$,
  DescribeStackResourcesOutput$,
  DescribeStackSet$,
  DescribeStackSetCommand,
  DescribeStackSetInput$,
  DescribeStackSetOperation$,
  DescribeStackSetOperationCommand,
  DescribeStackSetOperationInput$,
  DescribeStackSetOperationOutput$,
  DescribeStackSetOutput$,
  DescribeStacks$,
  DescribeStacksCommand,
  DescribeStacksInput$,
  DescribeStacksOutput$,
  DescribeType$,
  DescribeTypeCommand,
  DescribeTypeInput$,
  DescribeTypeOutput$,
  DescribeTypeRegistration$,
  DescribeTypeRegistrationCommand,
  DescribeTypeRegistrationInput$,
  DescribeTypeRegistrationOutput$,
  DetailedStatus,
  DetectStackDrift$,
  DetectStackDriftCommand,
  DetectStackDriftInput$,
  DetectStackDriftOutput$,
  DetectStackResourceDrift$,
  DetectStackResourceDriftCommand,
  DetectStackResourceDriftInput$,
  DetectStackResourceDriftOutput$,
  DetectStackSetDrift$,
  DetectStackSetDriftCommand,
  DetectStackSetDriftInput$,
  DetectStackSetDriftOutput$,
  DifferenceType,
  DriftIgnoredReason,
  EstimateTemplateCost$,
  EstimateTemplateCostCommand,
  EstimateTemplateCostInput$,
  EstimateTemplateCostOutput$,
  EvaluationType,
  EventFilter$,
  EventType,
  ExecuteChangeSet$,
  ExecuteChangeSetCommand,
  ExecuteChangeSetInput$,
  ExecuteChangeSetOutput$,
  ExecuteStackRefactor$,
  ExecuteStackRefactorCommand,
  ExecuteStackRefactorInput$,
  ExecutionStatus,
  Export$,
  GeneratedTemplateDeletionPolicy,
  GeneratedTemplateNotFoundException,
  GeneratedTemplateNotFoundException$,
  GeneratedTemplateResourceStatus,
  GeneratedTemplateStatus,
  GeneratedTemplateUpdateReplacePolicy,
  GetGeneratedTemplate$,
  GetGeneratedTemplateCommand,
  GetGeneratedTemplateInput$,
  GetGeneratedTemplateOutput$,
  GetHookResult$,
  GetHookResultCommand,
  GetHookResultInput$,
  GetHookResultOutput$,
  GetStackPolicy$,
  GetStackPolicyCommand,
  GetStackPolicyInput$,
  GetStackPolicyOutput$,
  GetTemplate$,
  GetTemplateCommand,
  GetTemplateInput$,
  GetTemplateOutput$,
  GetTemplateSummary$,
  GetTemplateSummaryCommand,
  GetTemplateSummaryInput$,
  GetTemplateSummaryOutput$,
  HandlerErrorCode,
  HookFailureMode,
  HookInvocationPoint,
  HookResultNotFoundException,
  HookResultNotFoundException$,
  HookResultSummary$,
  HookStatus,
  HookTarget$,
  HookTargetAction,
  HookTargetType,
  IdentityProvider,
  ImportStacksToStackSet$,
  ImportStacksToStackSetCommand,
  ImportStacksToStackSetInput$,
  ImportStacksToStackSetOutput$,
  InsufficientCapabilitiesException,
  InsufficientCapabilitiesException$,
  InvalidChangeSetStatusException,
  InvalidChangeSetStatusException$,
  InvalidOperationException,
  InvalidOperationException$,
  InvalidStateTransitionException,
  InvalidStateTransitionException$,
  LimitExceededException,
  LimitExceededException$,
  ListChangeSets$,
  ListChangeSetsCommand,
  ListChangeSetsInput$,
  ListChangeSetsOutput$,
  ListExports$,
  ListExportsCommand,
  ListExportsInput$,
  ListExportsOutput$,
  ListGeneratedTemplates$,
  ListGeneratedTemplatesCommand,
  ListGeneratedTemplatesInput$,
  ListGeneratedTemplatesOutput$,
  ListHookResults$,
  ListHookResultsCommand,
  ListHookResultsInput$,
  ListHookResultsOutput$,
  ListHookResultsTargetType,
  ListImports$,
  ListImportsCommand,
  ListImportsInput$,
  ListImportsOutput$,
  ListResourceScanRelatedResources$,
  ListResourceScanRelatedResourcesCommand,
  ListResourceScanRelatedResourcesInput$,
  ListResourceScanRelatedResourcesOutput$,
  ListResourceScanResources$,
  ListResourceScanResourcesCommand,
  ListResourceScanResourcesInput$,
  ListResourceScanResourcesOutput$,
  ListResourceScans$,
  ListResourceScansCommand,
  ListResourceScansInput$,
  ListResourceScansOutput$,
  ListStackInstanceResourceDrifts$,
  ListStackInstanceResourceDriftsCommand,
  ListStackInstanceResourceDriftsInput$,
  ListStackInstanceResourceDriftsOutput$,
  ListStackInstances$,
  ListStackInstancesCommand,
  ListStackInstancesInput$,
  ListStackInstancesOutput$,
  ListStackRefactorActions$,
  ListStackRefactorActionsCommand,
  ListStackRefactorActionsInput$,
  ListStackRefactorActionsOutput$,
  ListStackRefactors$,
  ListStackRefactorsCommand,
  ListStackRefactorsInput$,
  ListStackRefactorsOutput$,
  ListStackResources$,
  ListStackResourcesCommand,
  ListStackResourcesInput$,
  ListStackResourcesOutput$,
  ListStackSetAutoDeploymentTargets$,
  ListStackSetAutoDeploymentTargetsCommand,
  ListStackSetAutoDeploymentTargetsInput$,
  ListStackSetAutoDeploymentTargetsOutput$,
  ListStackSetOperationResults$,
  ListStackSetOperationResultsCommand,
  ListStackSetOperationResultsInput$,
  ListStackSetOperationResultsOutput$,
  ListStackSetOperations$,
  ListStackSetOperationsCommand,
  ListStackSetOperationsInput$,
  ListStackSetOperationsOutput$,
  ListStackSets$,
  ListStackSetsCommand,
  ListStackSetsInput$,
  ListStackSetsOutput$,
  ListStacks$,
  ListStacksCommand,
  ListStacksInput$,
  ListStacksOutput$,
  ListTypeRegistrations$,
  ListTypeRegistrationsCommand,
  ListTypeRegistrationsInput$,
  ListTypeRegistrationsOutput$,
  ListTypeVersions$,
  ListTypeVersionsCommand,
  ListTypeVersionsInput$,
  ListTypeVersionsOutput$,
  ListTypes$,
  ListTypesCommand,
  ListTypesInput$,
  ListTypesOutput$,
  LiveResourceDrift$,
  LoggingConfig$,
  ManagedExecution$,
  ModuleInfo$,
  NameAlreadyExistsException,
  NameAlreadyExistsException$,
  OnFailure,
  OnStackFailure,
  OperationEntry$,
  OperationEvent$,
  OperationIdAlreadyExistsException,
  OperationIdAlreadyExistsException$,
  OperationInProgressException,
  OperationInProgressException$,
  OperationNotFoundException,
  OperationNotFoundException$,
  OperationResultFilter$,
  OperationResultFilterName,
  OperationStatus,
  OperationStatusCheckFailedException,
  OperationStatusCheckFailedException$,
  OperationType,
  OrganizationStatus,
  Output$,
  Parameter$,
  ParameterConstraints$,
  ParameterDeclaration$,
  PermissionModels,
  PhysicalResourceIdContextKeyValuePair$,
  PolicyAction,
  PropertyDifference$,
  ProvisioningType,
  PublishType$,
  PublishTypeCommand,
  PublishTypeInput$,
  PublishTypeOutput$,
  PublisherStatus,
  RecordHandlerProgress$,
  RecordHandlerProgressCommand,
  RecordHandlerProgressInput$,
  RecordHandlerProgressOutput$,
  RegionConcurrencyType,
  RegisterPublisher$,
  RegisterPublisherCommand,
  RegisterPublisherInput$,
  RegisterPublisherOutput$,
  RegisterType$,
  RegisterTypeCommand,
  RegisterTypeInput$,
  RegisterTypeOutput$,
  RegistrationStatus,
  RegistryType,
  Replacement,
  RequiredActivatedType$,
  RequiresRecreation,
  ResourceAttribute,
  ResourceChange$,
  ResourceChangeDetail$,
  ResourceDefinition$,
  ResourceDetail$,
  ResourceDriftIgnoredAttribute$,
  ResourceIdentifierSummary$,
  ResourceLocation$,
  ResourceMapping$,
  ResourceScanInProgressException,
  ResourceScanInProgressException$,
  ResourceScanLimitExceededException,
  ResourceScanLimitExceededException$,
  ResourceScanNotFoundException,
  ResourceScanNotFoundException$,
  ResourceScanStatus,
  ResourceScanSummary$,
  ResourceSignalStatus,
  ResourceStatus,
  ResourceTargetDefinition$,
  ResourceToImport$,
  RollbackConfiguration$,
  RollbackStack$,
  RollbackStackCommand,
  RollbackStackInput$,
  RollbackStackOutput$,
  RollbackTrigger$,
  ScanFilter$,
  ScanType,
  ScannedResource$,
  ScannedResourceIdentifier$,
  SetStackPolicy$,
  SetStackPolicyCommand,
  SetStackPolicyInput$,
  SetTypeConfiguration$,
  SetTypeConfigurationCommand,
  SetTypeConfigurationInput$,
  SetTypeConfigurationOutput$,
  SetTypeDefaultVersion$,
  SetTypeDefaultVersionCommand,
  SetTypeDefaultVersionInput$,
  SetTypeDefaultVersionOutput$,
  SignalResource$,
  SignalResourceCommand,
  SignalResourceInput$,
  Stack$,
  StackDefinition$,
  StackDriftDetectionStatus,
  StackDriftInformation$,
  StackDriftInformationSummary$,
  StackDriftStatus,
  StackEvent$,
  StackInstance$,
  StackInstanceComprehensiveStatus$,
  StackInstanceDetailedStatus,
  StackInstanceFilter$,
  StackInstanceFilterName,
  StackInstanceNotFoundException,
  StackInstanceNotFoundException$,
  StackInstanceResourceDriftsSummary$,
  StackInstanceStatus,
  StackInstanceSummary$,
  StackNotFoundException,
  StackNotFoundException$,
  StackRefactorAction$,
  StackRefactorActionEntity,
  StackRefactorActionType,
  StackRefactorDetection,
  StackRefactorExecutionStatus,
  StackRefactorNotFoundException,
  StackRefactorNotFoundException$,
  StackRefactorStatus,
  StackRefactorSummary$,
  StackResource$,
  StackResourceDetail$,
  StackResourceDrift$,
  StackResourceDriftInformation$,
  StackResourceDriftInformationSummary$,
  StackResourceDriftStatus,
  StackResourceSummary$,
  StackSet$,
  StackSetAutoDeploymentTargetSummary$,
  StackSetDriftDetectionDetails$,
  StackSetDriftDetectionStatus,
  StackSetDriftStatus,
  StackSetNotEmptyException,
  StackSetNotEmptyException$,
  StackSetNotFoundException,
  StackSetNotFoundException$,
  StackSetOperation$,
  StackSetOperationAction,
  StackSetOperationPreferences$,
  StackSetOperationResultStatus,
  StackSetOperationResultSummary$,
  StackSetOperationStatus,
  StackSetOperationStatusDetails$,
  StackSetOperationSummary$,
  StackSetStatus,
  StackSetSummary$,
  StackStatus,
  StackSummary$,
  StaleRequestException,
  StaleRequestException$,
  StartResourceScan$,
  StartResourceScanCommand,
  StartResourceScanInput$,
  StartResourceScanOutput$,
  StopStackSetOperation$,
  StopStackSetOperationCommand,
  StopStackSetOperationInput$,
  StopStackSetOperationOutput$,
  Tag$,
  TemplateConfiguration$,
  TemplateFormat,
  TemplateParameter$,
  TemplateProgress$,
  TemplateStage,
  TemplateSummary$,
  TemplateSummaryConfig$,
  TestType$,
  TestTypeCommand,
  TestTypeInput$,
  TestTypeOutput$,
  ThirdPartyType,
  TokenAlreadyExistsException,
  TokenAlreadyExistsException$,
  TypeConfigurationDetails$,
  TypeConfigurationIdentifier$,
  TypeConfigurationNotFoundException,
  TypeConfigurationNotFoundException$,
  TypeFilters$,
  TypeNotFoundException,
  TypeNotFoundException$,
  TypeSummary$,
  TypeTestsStatus,
  TypeVersionSummary$,
  UpdateGeneratedTemplate$,
  UpdateGeneratedTemplateCommand,
  UpdateGeneratedTemplateInput$,
  UpdateGeneratedTemplateOutput$,
  UpdateStack$,
  UpdateStackCommand,
  UpdateStackInput$,
  UpdateStackInstances$,
  UpdateStackInstancesCommand,
  UpdateStackInstancesInput$,
  UpdateStackInstancesOutput$,
  UpdateStackOutput$,
  UpdateStackSet$,
  UpdateStackSetCommand,
  UpdateStackSetInput$,
  UpdateStackSetOutput$,
  UpdateTerminationProtection$,
  UpdateTerminationProtectionCommand,
  UpdateTerminationProtectionInput$,
  UpdateTerminationProtectionOutput$,
  ValidateTemplate$,
  ValidateTemplateCommand,
  ValidateTemplateInput$,
  ValidateTemplateOutput$,
  ValidationStatus,
  VersionBump,
  Visibility,
  WarningDetail$,
  WarningProperty$,
  WarningType,
  Warnings$,
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
assert(typeof CloudFormationClient === "function");
assert(typeof CloudFormation === "function");
// commands
assert(typeof ActivateOrganizationsAccessCommand === "function");
assert(typeof ActivateOrganizationsAccess$ === "object");
assert(typeof ActivateTypeCommand === "function");
assert(typeof ActivateType$ === "object");
assert(typeof BatchDescribeTypeConfigurationsCommand === "function");
assert(typeof BatchDescribeTypeConfigurations$ === "object");
assert(typeof CancelUpdateStackCommand === "function");
assert(typeof CancelUpdateStack$ === "object");
assert(typeof ContinueUpdateRollbackCommand === "function");
assert(typeof ContinueUpdateRollback$ === "object");
assert(typeof CreateChangeSetCommand === "function");
assert(typeof CreateChangeSet$ === "object");
assert(typeof CreateGeneratedTemplateCommand === "function");
assert(typeof CreateGeneratedTemplate$ === "object");
assert(typeof CreateStackCommand === "function");
assert(typeof CreateStack$ === "object");
assert(typeof CreateStackInstancesCommand === "function");
assert(typeof CreateStackInstances$ === "object");
assert(typeof CreateStackRefactorCommand === "function");
assert(typeof CreateStackRefactor$ === "object");
assert(typeof CreateStackSetCommand === "function");
assert(typeof CreateStackSet$ === "object");
assert(typeof DeactivateOrganizationsAccessCommand === "function");
assert(typeof DeactivateOrganizationsAccess$ === "object");
assert(typeof DeactivateTypeCommand === "function");
assert(typeof DeactivateType$ === "object");
assert(typeof DeleteChangeSetCommand === "function");
assert(typeof DeleteChangeSet$ === "object");
assert(typeof DeleteGeneratedTemplateCommand === "function");
assert(typeof DeleteGeneratedTemplate$ === "object");
assert(typeof DeleteStackCommand === "function");
assert(typeof DeleteStack$ === "object");
assert(typeof DeleteStackInstancesCommand === "function");
assert(typeof DeleteStackInstances$ === "object");
assert(typeof DeleteStackSetCommand === "function");
assert(typeof DeleteStackSet$ === "object");
assert(typeof DeregisterTypeCommand === "function");
assert(typeof DeregisterType$ === "object");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeAccountLimits$ === "object");
assert(typeof DescribeChangeSetCommand === "function");
assert(typeof DescribeChangeSet$ === "object");
assert(typeof DescribeChangeSetHooksCommand === "function");
assert(typeof DescribeChangeSetHooks$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeGeneratedTemplateCommand === "function");
assert(typeof DescribeGeneratedTemplate$ === "object");
assert(typeof DescribeOrganizationsAccessCommand === "function");
assert(typeof DescribeOrganizationsAccess$ === "object");
assert(typeof DescribePublisherCommand === "function");
assert(typeof DescribePublisher$ === "object");
assert(typeof DescribeResourceScanCommand === "function");
assert(typeof DescribeResourceScan$ === "object");
assert(typeof DescribeStackDriftDetectionStatusCommand === "function");
assert(typeof DescribeStackDriftDetectionStatus$ === "object");
assert(typeof DescribeStackEventsCommand === "function");
assert(typeof DescribeStackEvents$ === "object");
assert(typeof DescribeStackInstanceCommand === "function");
assert(typeof DescribeStackInstance$ === "object");
assert(typeof DescribeStackRefactorCommand === "function");
assert(typeof DescribeStackRefactor$ === "object");
assert(typeof DescribeStackResourceCommand === "function");
assert(typeof DescribeStackResource$ === "object");
assert(typeof DescribeStackResourceDriftsCommand === "function");
assert(typeof DescribeStackResourceDrifts$ === "object");
assert(typeof DescribeStackResourcesCommand === "function");
assert(typeof DescribeStackResources$ === "object");
assert(typeof DescribeStacksCommand === "function");
assert(typeof DescribeStacks$ === "object");
assert(typeof DescribeStackSetCommand === "function");
assert(typeof DescribeStackSet$ === "object");
assert(typeof DescribeStackSetOperationCommand === "function");
assert(typeof DescribeStackSetOperation$ === "object");
assert(typeof DescribeTypeCommand === "function");
assert(typeof DescribeType$ === "object");
assert(typeof DescribeTypeRegistrationCommand === "function");
assert(typeof DescribeTypeRegistration$ === "object");
assert(typeof DetectStackDriftCommand === "function");
assert(typeof DetectStackDrift$ === "object");
assert(typeof DetectStackResourceDriftCommand === "function");
assert(typeof DetectStackResourceDrift$ === "object");
assert(typeof DetectStackSetDriftCommand === "function");
assert(typeof DetectStackSetDrift$ === "object");
assert(typeof EstimateTemplateCostCommand === "function");
assert(typeof EstimateTemplateCost$ === "object");
assert(typeof ExecuteChangeSetCommand === "function");
assert(typeof ExecuteChangeSet$ === "object");
assert(typeof ExecuteStackRefactorCommand === "function");
assert(typeof ExecuteStackRefactor$ === "object");
assert(typeof GetGeneratedTemplateCommand === "function");
assert(typeof GetGeneratedTemplate$ === "object");
assert(typeof GetHookResultCommand === "function");
assert(typeof GetHookResult$ === "object");
assert(typeof GetStackPolicyCommand === "function");
assert(typeof GetStackPolicy$ === "object");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplate$ === "object");
assert(typeof GetTemplateSummaryCommand === "function");
assert(typeof GetTemplateSummary$ === "object");
assert(typeof ImportStacksToStackSetCommand === "function");
assert(typeof ImportStacksToStackSet$ === "object");
assert(typeof ListChangeSetsCommand === "function");
assert(typeof ListChangeSets$ === "object");
assert(typeof ListExportsCommand === "function");
assert(typeof ListExports$ === "object");
assert(typeof ListGeneratedTemplatesCommand === "function");
assert(typeof ListGeneratedTemplates$ === "object");
assert(typeof ListHookResultsCommand === "function");
assert(typeof ListHookResults$ === "object");
assert(typeof ListImportsCommand === "function");
assert(typeof ListImports$ === "object");
assert(typeof ListResourceScanRelatedResourcesCommand === "function");
assert(typeof ListResourceScanRelatedResources$ === "object");
assert(typeof ListResourceScanResourcesCommand === "function");
assert(typeof ListResourceScanResources$ === "object");
assert(typeof ListResourceScansCommand === "function");
assert(typeof ListResourceScans$ === "object");
assert(typeof ListStackInstanceResourceDriftsCommand === "function");
assert(typeof ListStackInstanceResourceDrifts$ === "object");
assert(typeof ListStackInstancesCommand === "function");
assert(typeof ListStackInstances$ === "object");
assert(typeof ListStackRefactorActionsCommand === "function");
assert(typeof ListStackRefactorActions$ === "object");
assert(typeof ListStackRefactorsCommand === "function");
assert(typeof ListStackRefactors$ === "object");
assert(typeof ListStackResourcesCommand === "function");
assert(typeof ListStackResources$ === "object");
assert(typeof ListStacksCommand === "function");
assert(typeof ListStacks$ === "object");
assert(typeof ListStackSetAutoDeploymentTargetsCommand === "function");
assert(typeof ListStackSetAutoDeploymentTargets$ === "object");
assert(typeof ListStackSetOperationResultsCommand === "function");
assert(typeof ListStackSetOperationResults$ === "object");
assert(typeof ListStackSetOperationsCommand === "function");
assert(typeof ListStackSetOperations$ === "object");
assert(typeof ListStackSetsCommand === "function");
assert(typeof ListStackSets$ === "object");
assert(typeof ListTypeRegistrationsCommand === "function");
assert(typeof ListTypeRegistrations$ === "object");
assert(typeof ListTypesCommand === "function");
assert(typeof ListTypes$ === "object");
assert(typeof ListTypeVersionsCommand === "function");
assert(typeof ListTypeVersions$ === "object");
assert(typeof PublishTypeCommand === "function");
assert(typeof PublishType$ === "object");
assert(typeof RecordHandlerProgressCommand === "function");
assert(typeof RecordHandlerProgress$ === "object");
assert(typeof RegisterPublisherCommand === "function");
assert(typeof RegisterPublisher$ === "object");
assert(typeof RegisterTypeCommand === "function");
assert(typeof RegisterType$ === "object");
assert(typeof RollbackStackCommand === "function");
assert(typeof RollbackStack$ === "object");
assert(typeof SetStackPolicyCommand === "function");
assert(typeof SetStackPolicy$ === "object");
assert(typeof SetTypeConfigurationCommand === "function");
assert(typeof SetTypeConfiguration$ === "object");
assert(typeof SetTypeDefaultVersionCommand === "function");
assert(typeof SetTypeDefaultVersion$ === "object");
assert(typeof SignalResourceCommand === "function");
assert(typeof SignalResource$ === "object");
assert(typeof StartResourceScanCommand === "function");
assert(typeof StartResourceScan$ === "object");
assert(typeof StopStackSetOperationCommand === "function");
assert(typeof StopStackSetOperation$ === "object");
assert(typeof TestTypeCommand === "function");
assert(typeof TestType$ === "object");
assert(typeof UpdateGeneratedTemplateCommand === "function");
assert(typeof UpdateGeneratedTemplate$ === "object");
assert(typeof UpdateStackCommand === "function");
assert(typeof UpdateStack$ === "object");
assert(typeof UpdateStackInstancesCommand === "function");
assert(typeof UpdateStackInstances$ === "object");
assert(typeof UpdateStackSetCommand === "function");
assert(typeof UpdateStackSet$ === "object");
assert(typeof UpdateTerminationProtectionCommand === "function");
assert(typeof UpdateTerminationProtection$ === "object");
assert(typeof ValidateTemplateCommand === "function");
assert(typeof ValidateTemplate$ === "object");
// structural schemas
assert(typeof AccountGateResult$ === "object");
assert(typeof AccountLimit$ === "object");
assert(typeof ActivateOrganizationsAccessInput$ === "object");
assert(typeof ActivateOrganizationsAccessOutput$ === "object");
assert(typeof ActivateTypeInput$ === "object");
assert(typeof ActivateTypeOutput$ === "object");
assert(typeof Annotation$ === "object");
assert(typeof AutoDeployment$ === "object");
assert(typeof BatchDescribeTypeConfigurationsError$ === "object");
assert(typeof BatchDescribeTypeConfigurationsInput$ === "object");
assert(typeof BatchDescribeTypeConfigurationsOutput$ === "object");
assert(typeof CancelUpdateStackInput$ === "object");
assert(typeof Change$ === "object");
assert(typeof ChangeSetHook$ === "object");
assert(typeof ChangeSetHookResourceTargetDetails$ === "object");
assert(typeof ChangeSetHookTargetDetails$ === "object");
assert(typeof ChangeSetSummary$ === "object");
assert(typeof ContinueUpdateRollbackInput$ === "object");
assert(typeof ContinueUpdateRollbackOutput$ === "object");
assert(typeof CreateChangeSetInput$ === "object");
assert(typeof CreateChangeSetOutput$ === "object");
assert(typeof CreateGeneratedTemplateInput$ === "object");
assert(typeof CreateGeneratedTemplateOutput$ === "object");
assert(typeof CreateStackInput$ === "object");
assert(typeof CreateStackInstancesInput$ === "object");
assert(typeof CreateStackInstancesOutput$ === "object");
assert(typeof CreateStackOutput$ === "object");
assert(typeof CreateStackRefactorInput$ === "object");
assert(typeof CreateStackRefactorOutput$ === "object");
assert(typeof CreateStackSetInput$ === "object");
assert(typeof CreateStackSetOutput$ === "object");
assert(typeof DeactivateOrganizationsAccessInput$ === "object");
assert(typeof DeactivateOrganizationsAccessOutput$ === "object");
assert(typeof DeactivateTypeInput$ === "object");
assert(typeof DeactivateTypeOutput$ === "object");
assert(typeof DeleteChangeSetInput$ === "object");
assert(typeof DeleteChangeSetOutput$ === "object");
assert(typeof DeleteGeneratedTemplateInput$ === "object");
assert(typeof DeleteStackInput$ === "object");
assert(typeof DeleteStackInstancesInput$ === "object");
assert(typeof DeleteStackInstancesOutput$ === "object");
assert(typeof DeleteStackSetInput$ === "object");
assert(typeof DeleteStackSetOutput$ === "object");
assert(typeof DeploymentTargets$ === "object");
assert(typeof DeregisterTypeInput$ === "object");
assert(typeof DeregisterTypeOutput$ === "object");
assert(typeof DescribeAccountLimitsInput$ === "object");
assert(typeof DescribeAccountLimitsOutput$ === "object");
assert(typeof DescribeChangeSetHooksInput$ === "object");
assert(typeof DescribeChangeSetHooksOutput$ === "object");
assert(typeof DescribeChangeSetInput$ === "object");
assert(typeof DescribeChangeSetOutput$ === "object");
assert(typeof DescribeEventsInput$ === "object");
assert(typeof DescribeEventsOutput$ === "object");
assert(typeof DescribeGeneratedTemplateInput$ === "object");
assert(typeof DescribeGeneratedTemplateOutput$ === "object");
assert(typeof DescribeOrganizationsAccessInput$ === "object");
assert(typeof DescribeOrganizationsAccessOutput$ === "object");
assert(typeof DescribePublisherInput$ === "object");
assert(typeof DescribePublisherOutput$ === "object");
assert(typeof DescribeResourceScanInput$ === "object");
assert(typeof DescribeResourceScanOutput$ === "object");
assert(typeof DescribeStackDriftDetectionStatusInput$ === "object");
assert(typeof DescribeStackDriftDetectionStatusOutput$ === "object");
assert(typeof DescribeStackEventsInput$ === "object");
assert(typeof DescribeStackEventsOutput$ === "object");
assert(typeof DescribeStackInstanceInput$ === "object");
assert(typeof DescribeStackInstanceOutput$ === "object");
assert(typeof DescribeStackRefactorInput$ === "object");
assert(typeof DescribeStackRefactorOutput$ === "object");
assert(typeof DescribeStackResourceDriftsInput$ === "object");
assert(typeof DescribeStackResourceDriftsOutput$ === "object");
assert(typeof DescribeStackResourceInput$ === "object");
assert(typeof DescribeStackResourceOutput$ === "object");
assert(typeof DescribeStackResourcesInput$ === "object");
assert(typeof DescribeStackResourcesOutput$ === "object");
assert(typeof DescribeStackSetInput$ === "object");
assert(typeof DescribeStackSetOperationInput$ === "object");
assert(typeof DescribeStackSetOperationOutput$ === "object");
assert(typeof DescribeStackSetOutput$ === "object");
assert(typeof DescribeStacksInput$ === "object");
assert(typeof DescribeStacksOutput$ === "object");
assert(typeof DescribeTypeInput$ === "object");
assert(typeof DescribeTypeOutput$ === "object");
assert(typeof DescribeTypeRegistrationInput$ === "object");
assert(typeof DescribeTypeRegistrationOutput$ === "object");
assert(typeof DetectStackDriftInput$ === "object");
assert(typeof DetectStackDriftOutput$ === "object");
assert(typeof DetectStackResourceDriftInput$ === "object");
assert(typeof DetectStackResourceDriftOutput$ === "object");
assert(typeof DetectStackSetDriftInput$ === "object");
assert(typeof DetectStackSetDriftOutput$ === "object");
assert(typeof EstimateTemplateCostInput$ === "object");
assert(typeof EstimateTemplateCostOutput$ === "object");
assert(typeof EventFilter$ === "object");
assert(typeof ExecuteChangeSetInput$ === "object");
assert(typeof ExecuteChangeSetOutput$ === "object");
assert(typeof ExecuteStackRefactorInput$ === "object");
assert(typeof Export$ === "object");
assert(typeof GetGeneratedTemplateInput$ === "object");
assert(typeof GetGeneratedTemplateOutput$ === "object");
assert(typeof GetHookResultInput$ === "object");
assert(typeof GetHookResultOutput$ === "object");
assert(typeof GetStackPolicyInput$ === "object");
assert(typeof GetStackPolicyOutput$ === "object");
assert(typeof GetTemplateInput$ === "object");
assert(typeof GetTemplateOutput$ === "object");
assert(typeof GetTemplateSummaryInput$ === "object");
assert(typeof GetTemplateSummaryOutput$ === "object");
assert(typeof HookResultSummary$ === "object");
assert(typeof HookTarget$ === "object");
assert(typeof ImportStacksToStackSetInput$ === "object");
assert(typeof ImportStacksToStackSetOutput$ === "object");
assert(typeof ListChangeSetsInput$ === "object");
assert(typeof ListChangeSetsOutput$ === "object");
assert(typeof ListExportsInput$ === "object");
assert(typeof ListExportsOutput$ === "object");
assert(typeof ListGeneratedTemplatesInput$ === "object");
assert(typeof ListGeneratedTemplatesOutput$ === "object");
assert(typeof ListHookResultsInput$ === "object");
assert(typeof ListHookResultsOutput$ === "object");
assert(typeof ListImportsInput$ === "object");
assert(typeof ListImportsOutput$ === "object");
assert(typeof ListResourceScanRelatedResourcesInput$ === "object");
assert(typeof ListResourceScanRelatedResourcesOutput$ === "object");
assert(typeof ListResourceScanResourcesInput$ === "object");
assert(typeof ListResourceScanResourcesOutput$ === "object");
assert(typeof ListResourceScansInput$ === "object");
assert(typeof ListResourceScansOutput$ === "object");
assert(typeof ListStackInstanceResourceDriftsInput$ === "object");
assert(typeof ListStackInstanceResourceDriftsOutput$ === "object");
assert(typeof ListStackInstancesInput$ === "object");
assert(typeof ListStackInstancesOutput$ === "object");
assert(typeof ListStackRefactorActionsInput$ === "object");
assert(typeof ListStackRefactorActionsOutput$ === "object");
assert(typeof ListStackRefactorsInput$ === "object");
assert(typeof ListStackRefactorsOutput$ === "object");
assert(typeof ListStackResourcesInput$ === "object");
assert(typeof ListStackResourcesOutput$ === "object");
assert(typeof ListStackSetAutoDeploymentTargetsInput$ === "object");
assert(typeof ListStackSetAutoDeploymentTargetsOutput$ === "object");
assert(typeof ListStackSetOperationResultsInput$ === "object");
assert(typeof ListStackSetOperationResultsOutput$ === "object");
assert(typeof ListStackSetOperationsInput$ === "object");
assert(typeof ListStackSetOperationsOutput$ === "object");
assert(typeof ListStackSetsInput$ === "object");
assert(typeof ListStackSetsOutput$ === "object");
assert(typeof ListStacksInput$ === "object");
assert(typeof ListStacksOutput$ === "object");
assert(typeof ListTypeRegistrationsInput$ === "object");
assert(typeof ListTypeRegistrationsOutput$ === "object");
assert(typeof ListTypesInput$ === "object");
assert(typeof ListTypesOutput$ === "object");
assert(typeof ListTypeVersionsInput$ === "object");
assert(typeof ListTypeVersionsOutput$ === "object");
assert(typeof LiveResourceDrift$ === "object");
assert(typeof LoggingConfig$ === "object");
assert(typeof ManagedExecution$ === "object");
assert(typeof ModuleInfo$ === "object");
assert(typeof OperationEntry$ === "object");
assert(typeof OperationEvent$ === "object");
assert(typeof OperationResultFilter$ === "object");
assert(typeof Output$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterConstraints$ === "object");
assert(typeof ParameterDeclaration$ === "object");
assert(typeof PhysicalResourceIdContextKeyValuePair$ === "object");
assert(typeof PropertyDifference$ === "object");
assert(typeof PublishTypeInput$ === "object");
assert(typeof PublishTypeOutput$ === "object");
assert(typeof RecordHandlerProgressInput$ === "object");
assert(typeof RecordHandlerProgressOutput$ === "object");
assert(typeof RegisterPublisherInput$ === "object");
assert(typeof RegisterPublisherOutput$ === "object");
assert(typeof RegisterTypeInput$ === "object");
assert(typeof RegisterTypeOutput$ === "object");
assert(typeof RequiredActivatedType$ === "object");
assert(typeof ResourceChange$ === "object");
assert(typeof ResourceChangeDetail$ === "object");
assert(typeof ResourceDefinition$ === "object");
assert(typeof ResourceDetail$ === "object");
assert(typeof ResourceDriftIgnoredAttribute$ === "object");
assert(typeof ResourceIdentifierSummary$ === "object");
assert(typeof ResourceLocation$ === "object");
assert(typeof ResourceMapping$ === "object");
assert(typeof ResourceScanSummary$ === "object");
assert(typeof ResourceTargetDefinition$ === "object");
assert(typeof ResourceToImport$ === "object");
assert(typeof RollbackConfiguration$ === "object");
assert(typeof RollbackStackInput$ === "object");
assert(typeof RollbackStackOutput$ === "object");
assert(typeof RollbackTrigger$ === "object");
assert(typeof ScanFilter$ === "object");
assert(typeof ScannedResource$ === "object");
assert(typeof ScannedResourceIdentifier$ === "object");
assert(typeof SetStackPolicyInput$ === "object");
assert(typeof SetTypeConfigurationInput$ === "object");
assert(typeof SetTypeConfigurationOutput$ === "object");
assert(typeof SetTypeDefaultVersionInput$ === "object");
assert(typeof SetTypeDefaultVersionOutput$ === "object");
assert(typeof SignalResourceInput$ === "object");
assert(typeof Stack$ === "object");
assert(typeof StackDefinition$ === "object");
assert(typeof StackDriftInformation$ === "object");
assert(typeof StackDriftInformationSummary$ === "object");
assert(typeof StackEvent$ === "object");
assert(typeof StackInstance$ === "object");
assert(typeof StackInstanceComprehensiveStatus$ === "object");
assert(typeof StackInstanceFilter$ === "object");
assert(typeof StackInstanceResourceDriftsSummary$ === "object");
assert(typeof StackInstanceSummary$ === "object");
assert(typeof StackRefactorAction$ === "object");
assert(typeof StackRefactorSummary$ === "object");
assert(typeof StackResource$ === "object");
assert(typeof StackResourceDetail$ === "object");
assert(typeof StackResourceDrift$ === "object");
assert(typeof StackResourceDriftInformation$ === "object");
assert(typeof StackResourceDriftInformationSummary$ === "object");
assert(typeof StackResourceSummary$ === "object");
assert(typeof StackSet$ === "object");
assert(typeof StackSetAutoDeploymentTargetSummary$ === "object");
assert(typeof StackSetDriftDetectionDetails$ === "object");
assert(typeof StackSetOperation$ === "object");
assert(typeof StackSetOperationPreferences$ === "object");
assert(typeof StackSetOperationResultSummary$ === "object");
assert(typeof StackSetOperationStatusDetails$ === "object");
assert(typeof StackSetOperationSummary$ === "object");
assert(typeof StackSetSummary$ === "object");
assert(typeof StackSummary$ === "object");
assert(typeof StartResourceScanInput$ === "object");
assert(typeof StartResourceScanOutput$ === "object");
assert(typeof StopStackSetOperationInput$ === "object");
assert(typeof StopStackSetOperationOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TemplateConfiguration$ === "object");
assert(typeof TemplateParameter$ === "object");
assert(typeof TemplateProgress$ === "object");
assert(typeof TemplateSummary$ === "object");
assert(typeof TemplateSummaryConfig$ === "object");
assert(typeof TestTypeInput$ === "object");
assert(typeof TestTypeOutput$ === "object");
assert(typeof TypeConfigurationDetails$ === "object");
assert(typeof TypeConfigurationIdentifier$ === "object");
assert(typeof TypeFilters$ === "object");
assert(typeof TypeSummary$ === "object");
assert(typeof TypeVersionSummary$ === "object");
assert(typeof UpdateGeneratedTemplateInput$ === "object");
assert(typeof UpdateGeneratedTemplateOutput$ === "object");
assert(typeof UpdateStackInput$ === "object");
assert(typeof UpdateStackInstancesInput$ === "object");
assert(typeof UpdateStackInstancesOutput$ === "object");
assert(typeof UpdateStackOutput$ === "object");
assert(typeof UpdateStackSetInput$ === "object");
assert(typeof UpdateStackSetOutput$ === "object");
assert(typeof UpdateTerminationProtectionInput$ === "object");
assert(typeof UpdateTerminationProtectionOutput$ === "object");
assert(typeof ValidateTemplateInput$ === "object");
assert(typeof ValidateTemplateOutput$ === "object");
assert(typeof WarningDetail$ === "object");
assert(typeof WarningProperty$ === "object");
assert(typeof Warnings$ === "object");
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
assert(AlreadyExistsException.prototype instanceof CloudFormationServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(CFNRegistryException.prototype instanceof CloudFormationServiceException);
assert(typeof CFNRegistryException$ === "object");
assert(ChangeSetNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof ChangeSetNotFoundException$ === "object");
assert(ConcurrentResourcesLimitExceededException.prototype instanceof CloudFormationServiceException);
assert(typeof ConcurrentResourcesLimitExceededException$ === "object");
assert(CreatedButModifiedException.prototype instanceof CloudFormationServiceException);
assert(typeof CreatedButModifiedException$ === "object");
assert(GeneratedTemplateNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof GeneratedTemplateNotFoundException$ === "object");
assert(HookResultNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof HookResultNotFoundException$ === "object");
assert(InsufficientCapabilitiesException.prototype instanceof CloudFormationServiceException);
assert(typeof InsufficientCapabilitiesException$ === "object");
assert(InvalidChangeSetStatusException.prototype instanceof CloudFormationServiceException);
assert(typeof InvalidChangeSetStatusException$ === "object");
assert(InvalidOperationException.prototype instanceof CloudFormationServiceException);
assert(typeof InvalidOperationException$ === "object");
assert(InvalidStateTransitionException.prototype instanceof CloudFormationServiceException);
assert(typeof InvalidStateTransitionException$ === "object");
assert(LimitExceededException.prototype instanceof CloudFormationServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NameAlreadyExistsException.prototype instanceof CloudFormationServiceException);
assert(typeof NameAlreadyExistsException$ === "object");
assert(OperationIdAlreadyExistsException.prototype instanceof CloudFormationServiceException);
assert(typeof OperationIdAlreadyExistsException$ === "object");
assert(OperationInProgressException.prototype instanceof CloudFormationServiceException);
assert(typeof OperationInProgressException$ === "object");
assert(OperationNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof OperationNotFoundException$ === "object");
assert(OperationStatusCheckFailedException.prototype instanceof CloudFormationServiceException);
assert(typeof OperationStatusCheckFailedException$ === "object");
assert(ResourceScanInProgressException.prototype instanceof CloudFormationServiceException);
assert(typeof ResourceScanInProgressException$ === "object");
assert(ResourceScanLimitExceededException.prototype instanceof CloudFormationServiceException);
assert(typeof ResourceScanLimitExceededException$ === "object");
assert(ResourceScanNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof ResourceScanNotFoundException$ === "object");
assert(StackInstanceNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof StackInstanceNotFoundException$ === "object");
assert(StackNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof StackNotFoundException$ === "object");
assert(StackRefactorNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof StackRefactorNotFoundException$ === "object");
assert(StackSetNotEmptyException.prototype instanceof CloudFormationServiceException);
assert(typeof StackSetNotEmptyException$ === "object");
assert(StackSetNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof StackSetNotFoundException$ === "object");
assert(StaleRequestException.prototype instanceof CloudFormationServiceException);
assert(typeof StaleRequestException$ === "object");
assert(TokenAlreadyExistsException.prototype instanceof CloudFormationServiceException);
assert(typeof TokenAlreadyExistsException$ === "object");
assert(TypeConfigurationNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof TypeConfigurationNotFoundException$ === "object");
assert(TypeNotFoundException.prototype instanceof CloudFormationServiceException);
assert(typeof TypeNotFoundException$ === "object");
assert(CloudFormationServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForChangeSetCreateComplete === "function");
assert(typeof waitForStackCreateComplete === "function");
assert(typeof waitForStackDeleteComplete === "function");
assert(typeof waitForStackExists === "function");
assert(typeof waitForStackImportComplete === "function");
assert(typeof waitForStackRefactorCreateComplete === "function");
assert(typeof waitForStackRefactorExecuteComplete === "function");
assert(typeof waitForStackRollbackComplete === "function");
assert(typeof waitForStackUpdateComplete === "function");
assert(typeof waitForTypeRegistrationComplete === "function");
assert(typeof waitUntilChangeSetCreateComplete === "function");
assert(typeof waitUntilStackCreateComplete === "function");
assert(typeof waitUntilStackDeleteComplete === "function");
assert(typeof waitUntilStackExists === "function");
assert(typeof waitUntilStackImportComplete === "function");
assert(typeof waitUntilStackRefactorCreateComplete === "function");
assert(typeof waitUntilStackRefactorExecuteComplete === "function");
assert(typeof waitUntilStackRollbackComplete === "function");
assert(typeof waitUntilStackUpdateComplete === "function");
assert(typeof waitUntilTypeRegistrationComplete === "function");
// paginators
assert(typeof paginateDescribeAccountLimits === "function");
assert(typeof paginateDescribeChangeSet === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeStackEvents === "function");
assert(typeof paginateDescribeStackResourceDrifts === "function");
assert(typeof paginateDescribeStacks === "function");
assert(typeof paginateListChangeSets === "function");
assert(typeof paginateListExports === "function");
assert(typeof paginateListGeneratedTemplates === "function");
assert(typeof paginateListImports === "function");
assert(typeof paginateListResourceScanRelatedResources === "function");
assert(typeof paginateListResourceScanResources === "function");
assert(typeof paginateListResourceScans === "function");
assert(typeof paginateListStackInstances === "function");
assert(typeof paginateListStackRefactorActions === "function");
assert(typeof paginateListStackRefactors === "function");
assert(typeof paginateListStackResources === "function");
assert(typeof paginateListStackSetOperationResults === "function");
assert(typeof paginateListStackSetOperations === "function");
assert(typeof paginateListStackSets === "function");
assert(typeof paginateListStacks === "function");
assert(typeof paginateListTypeRegistrations === "function");
assert(typeof paginateListTypeVersions === "function");
assert(typeof paginateListTypes === "function");
console.log(`CloudFormation index test passed.`);
