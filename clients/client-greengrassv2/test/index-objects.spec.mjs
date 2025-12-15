import {
  AccessDeniedException,
  AccessDeniedException$,
  AssociateClientDeviceWithCoreDeviceEntry$,
  AssociateClientDeviceWithCoreDeviceErrorEntry$,
  AssociateServiceRoleToAccount$,
  AssociateServiceRoleToAccountCommand,
  AssociateServiceRoleToAccountRequest$,
  AssociateServiceRoleToAccountResponse$,
  AssociatedClientDevice$,
  BatchAssociateClientDeviceWithCoreDevice$,
  BatchAssociateClientDeviceWithCoreDeviceCommand,
  BatchAssociateClientDeviceWithCoreDeviceRequest$,
  BatchAssociateClientDeviceWithCoreDeviceResponse$,
  BatchDisassociateClientDeviceFromCoreDevice$,
  BatchDisassociateClientDeviceFromCoreDeviceCommand,
  BatchDisassociateClientDeviceFromCoreDeviceRequest$,
  BatchDisassociateClientDeviceFromCoreDeviceResponse$,
  CancelDeployment$,
  CancelDeploymentCommand,
  CancelDeploymentRequest$,
  CancelDeploymentResponse$,
  CloudComponentState,
  CloudComponentStatus$,
  Component$,
  ComponentCandidate$,
  ComponentConfigurationUpdate$,
  ComponentDependencyRequirement$,
  ComponentDependencyType,
  ComponentDeploymentSpecification$,
  ComponentLatestVersion$,
  ComponentPlatform$,
  ComponentRunWith$,
  ComponentVersionListItem$,
  ComponentVisibilityScope,
  ConflictException,
  ConflictException$,
  ConnectivityInfo$,
  CoreDevice$,
  CoreDeviceStatus,
  CreateComponentVersion$,
  CreateComponentVersionCommand,
  CreateComponentVersionRequest$,
  CreateComponentVersionResponse$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentRequest$,
  CreateDeploymentResponse$,
  DeleteComponent$,
  DeleteComponentCommand,
  DeleteComponentRequest$,
  DeleteCoreDevice$,
  DeleteCoreDeviceCommand,
  DeleteCoreDeviceRequest$,
  DeleteDeployment$,
  DeleteDeploymentCommand,
  DeleteDeploymentRequest$,
  Deployment$,
  DeploymentComponentUpdatePolicy$,
  DeploymentComponentUpdatePolicyAction,
  DeploymentConfigurationValidationPolicy$,
  DeploymentFailureHandlingPolicy,
  DeploymentHistoryFilter,
  DeploymentIoTJobConfiguration$,
  DeploymentPolicies$,
  DeploymentStatus,
  DescribeComponent$,
  DescribeComponentCommand,
  DescribeComponentRequest$,
  DescribeComponentResponse$,
  DisassociateClientDeviceFromCoreDeviceEntry$,
  DisassociateClientDeviceFromCoreDeviceErrorEntry$,
  DisassociateServiceRoleFromAccount$,
  DisassociateServiceRoleFromAccountCommand,
  DisassociateServiceRoleFromAccountRequest$,
  DisassociateServiceRoleFromAccountResponse$,
  EffectiveDeployment$,
  EffectiveDeploymentExecutionStatus,
  EffectiveDeploymentStatusDetails$,
  GetComponent$,
  GetComponentCommand,
  GetComponentRequest$,
  GetComponentResponse$,
  GetComponentVersionArtifact$,
  GetComponentVersionArtifactCommand,
  GetComponentVersionArtifactRequest$,
  GetComponentVersionArtifactResponse$,
  GetConnectivityInfo$,
  GetConnectivityInfoCommand,
  GetConnectivityInfoRequest$,
  GetConnectivityInfoResponse$,
  GetCoreDevice$,
  GetCoreDeviceCommand,
  GetCoreDeviceRequest$,
  GetCoreDeviceResponse$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentRequest$,
  GetDeploymentResponse$,
  GetServiceRoleForAccount$,
  GetServiceRoleForAccountCommand,
  GetServiceRoleForAccountRequest$,
  GetServiceRoleForAccountResponse$,
  GreengrassV2,
  GreengrassV2Client,
  GreengrassV2ServiceException,
  InstalledComponent$,
  InstalledComponentLifecycleState,
  InstalledComponentTopologyFilter,
  InternalServerException,
  InternalServerException$,
  IoTJobAbortAction,
  IoTJobAbortConfig$,
  IoTJobAbortCriteria$,
  IoTJobExecutionFailureType,
  IoTJobExecutionsRolloutConfig$,
  IoTJobExponentialRolloutRate$,
  IoTJobRateIncreaseCriteria$,
  IoTJobTimeoutConfig$,
  IotEndpointType,
  LambdaContainerParams$,
  LambdaDeviceMount$,
  LambdaEventSource$,
  LambdaEventSourceType,
  LambdaExecutionParameters$,
  LambdaFilesystemPermission,
  LambdaFunctionRecipeSource$,
  LambdaInputPayloadEncodingType,
  LambdaIsolationMode,
  LambdaLinuxProcessParams$,
  LambdaVolumeMount$,
  ListClientDevicesAssociatedWithCoreDevice$,
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListClientDevicesAssociatedWithCoreDeviceRequest$,
  ListClientDevicesAssociatedWithCoreDeviceResponse$,
  ListComponentVersions$,
  ListComponentVersionsCommand,
  ListComponentVersionsRequest$,
  ListComponentVersionsResponse$,
  ListComponents$,
  ListComponentsCommand,
  ListComponentsRequest$,
  ListComponentsResponse$,
  ListCoreDevices$,
  ListCoreDevicesCommand,
  ListCoreDevicesRequest$,
  ListCoreDevicesResponse$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsRequest$,
  ListDeploymentsResponse$,
  ListEffectiveDeployments$,
  ListEffectiveDeploymentsCommand,
  ListEffectiveDeploymentsRequest$,
  ListEffectiveDeploymentsResponse$,
  ListInstalledComponents$,
  ListInstalledComponentsCommand,
  ListInstalledComponentsRequest$,
  ListInstalledComponentsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  RecipeOutputFormat,
  RequestAlreadyInProgressException,
  RequestAlreadyInProgressException$,
  ResolveComponentCandidates$,
  ResolveComponentCandidatesCommand,
  ResolveComponentCandidatesRequest$,
  ResolveComponentCandidatesResponse$,
  ResolvedComponentVersion$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3EndpointType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SystemResourceLimits$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConnectivityInfo$,
  UpdateConnectivityInfoCommand,
  UpdateConnectivityInfoRequest$,
  UpdateConnectivityInfoResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VendorGuidance,
  paginateListClientDevicesAssociatedWithCoreDevice,
  paginateListComponentVersions,
  paginateListComponents,
  paginateListCoreDevices,
  paginateListDeployments,
  paginateListEffectiveDeployments,
  paginateListInstalledComponents,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GreengrassV2Client === "function");
assert(typeof GreengrassV2 === "function");
// commands
assert(typeof AssociateServiceRoleToAccountCommand === "function");
assert(typeof AssociateServiceRoleToAccount$ === "object");
assert(typeof BatchAssociateClientDeviceWithCoreDeviceCommand === "function");
assert(typeof BatchAssociateClientDeviceWithCoreDevice$ === "object");
assert(typeof BatchDisassociateClientDeviceFromCoreDeviceCommand === "function");
assert(typeof BatchDisassociateClientDeviceFromCoreDevice$ === "object");
assert(typeof CancelDeploymentCommand === "function");
assert(typeof CancelDeployment$ === "object");
assert(typeof CreateComponentVersionCommand === "function");
assert(typeof CreateComponentVersion$ === "object");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteComponent$ === "object");
assert(typeof DeleteCoreDeviceCommand === "function");
assert(typeof DeleteCoreDevice$ === "object");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDeployment$ === "object");
assert(typeof DescribeComponentCommand === "function");
assert(typeof DescribeComponent$ === "object");
assert(typeof DisassociateServiceRoleFromAccountCommand === "function");
assert(typeof DisassociateServiceRoleFromAccount$ === "object");
assert(typeof GetComponentCommand === "function");
assert(typeof GetComponent$ === "object");
assert(typeof GetComponentVersionArtifactCommand === "function");
assert(typeof GetComponentVersionArtifact$ === "object");
assert(typeof GetConnectivityInfoCommand === "function");
assert(typeof GetConnectivityInfo$ === "object");
assert(typeof GetCoreDeviceCommand === "function");
assert(typeof GetCoreDevice$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetServiceRoleForAccountCommand === "function");
assert(typeof GetServiceRoleForAccount$ === "object");
assert(typeof ListClientDevicesAssociatedWithCoreDeviceCommand === "function");
assert(typeof ListClientDevicesAssociatedWithCoreDevice$ === "object");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponents$ === "object");
assert(typeof ListComponentVersionsCommand === "function");
assert(typeof ListComponentVersions$ === "object");
assert(typeof ListCoreDevicesCommand === "function");
assert(typeof ListCoreDevices$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListEffectiveDeploymentsCommand === "function");
assert(typeof ListEffectiveDeployments$ === "object");
assert(typeof ListInstalledComponentsCommand === "function");
assert(typeof ListInstalledComponents$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ResolveComponentCandidatesCommand === "function");
assert(typeof ResolveComponentCandidates$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectivityInfoCommand === "function");
assert(typeof UpdateConnectivityInfo$ === "object");
// structural schemas
assert(typeof AssociateClientDeviceWithCoreDeviceEntry$ === "object");
assert(typeof AssociateClientDeviceWithCoreDeviceErrorEntry$ === "object");
assert(typeof AssociatedClientDevice$ === "object");
assert(typeof AssociateServiceRoleToAccountRequest$ === "object");
assert(typeof AssociateServiceRoleToAccountResponse$ === "object");
assert(typeof BatchAssociateClientDeviceWithCoreDeviceRequest$ === "object");
assert(typeof BatchAssociateClientDeviceWithCoreDeviceResponse$ === "object");
assert(typeof BatchDisassociateClientDeviceFromCoreDeviceRequest$ === "object");
assert(typeof BatchDisassociateClientDeviceFromCoreDeviceResponse$ === "object");
assert(typeof CancelDeploymentRequest$ === "object");
assert(typeof CancelDeploymentResponse$ === "object");
assert(typeof CloudComponentStatus$ === "object");
assert(typeof Component$ === "object");
assert(typeof ComponentCandidate$ === "object");
assert(typeof ComponentConfigurationUpdate$ === "object");
assert(typeof ComponentDependencyRequirement$ === "object");
assert(typeof ComponentDeploymentSpecification$ === "object");
assert(typeof ComponentLatestVersion$ === "object");
assert(typeof ComponentPlatform$ === "object");
assert(typeof ComponentRunWith$ === "object");
assert(typeof ComponentVersionListItem$ === "object");
assert(typeof ConnectivityInfo$ === "object");
assert(typeof CoreDevice$ === "object");
assert(typeof CreateComponentVersionRequest$ === "object");
assert(typeof CreateComponentVersionResponse$ === "object");
assert(typeof CreateDeploymentRequest$ === "object");
assert(typeof CreateDeploymentResponse$ === "object");
assert(typeof DeleteComponentRequest$ === "object");
assert(typeof DeleteCoreDeviceRequest$ === "object");
assert(typeof DeleteDeploymentRequest$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DeploymentComponentUpdatePolicy$ === "object");
assert(typeof DeploymentConfigurationValidationPolicy$ === "object");
assert(typeof DeploymentIoTJobConfiguration$ === "object");
assert(typeof DeploymentPolicies$ === "object");
assert(typeof DescribeComponentRequest$ === "object");
assert(typeof DescribeComponentResponse$ === "object");
assert(typeof DisassociateClientDeviceFromCoreDeviceEntry$ === "object");
assert(typeof DisassociateClientDeviceFromCoreDeviceErrorEntry$ === "object");
assert(typeof DisassociateServiceRoleFromAccountRequest$ === "object");
assert(typeof DisassociateServiceRoleFromAccountResponse$ === "object");
assert(typeof EffectiveDeployment$ === "object");
assert(typeof EffectiveDeploymentStatusDetails$ === "object");
assert(typeof GetComponentRequest$ === "object");
assert(typeof GetComponentResponse$ === "object");
assert(typeof GetComponentVersionArtifactRequest$ === "object");
assert(typeof GetComponentVersionArtifactResponse$ === "object");
assert(typeof GetConnectivityInfoRequest$ === "object");
assert(typeof GetConnectivityInfoResponse$ === "object");
assert(typeof GetCoreDeviceRequest$ === "object");
assert(typeof GetCoreDeviceResponse$ === "object");
assert(typeof GetDeploymentRequest$ === "object");
assert(typeof GetDeploymentResponse$ === "object");
assert(typeof GetServiceRoleForAccountRequest$ === "object");
assert(typeof GetServiceRoleForAccountResponse$ === "object");
assert(typeof InstalledComponent$ === "object");
assert(typeof IoTJobAbortConfig$ === "object");
assert(typeof IoTJobAbortCriteria$ === "object");
assert(typeof IoTJobExecutionsRolloutConfig$ === "object");
assert(typeof IoTJobExponentialRolloutRate$ === "object");
assert(typeof IoTJobRateIncreaseCriteria$ === "object");
assert(typeof IoTJobTimeoutConfig$ === "object");
assert(typeof LambdaContainerParams$ === "object");
assert(typeof LambdaDeviceMount$ === "object");
assert(typeof LambdaEventSource$ === "object");
assert(typeof LambdaExecutionParameters$ === "object");
assert(typeof LambdaFunctionRecipeSource$ === "object");
assert(typeof LambdaLinuxProcessParams$ === "object");
assert(typeof LambdaVolumeMount$ === "object");
assert(typeof ListClientDevicesAssociatedWithCoreDeviceRequest$ === "object");
assert(typeof ListClientDevicesAssociatedWithCoreDeviceResponse$ === "object");
assert(typeof ListComponentsRequest$ === "object");
assert(typeof ListComponentsResponse$ === "object");
assert(typeof ListComponentVersionsRequest$ === "object");
assert(typeof ListComponentVersionsResponse$ === "object");
assert(typeof ListCoreDevicesRequest$ === "object");
assert(typeof ListCoreDevicesResponse$ === "object");
assert(typeof ListDeploymentsRequest$ === "object");
assert(typeof ListDeploymentsResponse$ === "object");
assert(typeof ListEffectiveDeploymentsRequest$ === "object");
assert(typeof ListEffectiveDeploymentsResponse$ === "object");
assert(typeof ListInstalledComponentsRequest$ === "object");
assert(typeof ListInstalledComponentsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ResolveComponentCandidatesRequest$ === "object");
assert(typeof ResolveComponentCandidatesResponse$ === "object");
assert(typeof ResolvedComponentVersion$ === "object");
assert(typeof SystemResourceLimits$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConnectivityInfoRequest$ === "object");
assert(typeof UpdateConnectivityInfoResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof CloudComponentState === "object");
assert(typeof ComponentDependencyType === "object");
assert(typeof ComponentVisibilityScope === "object");
assert(typeof CoreDeviceStatus === "object");
assert(typeof DeploymentComponentUpdatePolicyAction === "object");
assert(typeof DeploymentFailureHandlingPolicy === "object");
assert(typeof DeploymentHistoryFilter === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof EffectiveDeploymentExecutionStatus === "object");
assert(typeof InstalledComponentLifecycleState === "object");
assert(typeof InstalledComponentTopologyFilter === "object");
assert(typeof IotEndpointType === "object");
assert(typeof IoTJobAbortAction === "object");
assert(typeof IoTJobExecutionFailureType === "object");
assert(typeof LambdaEventSourceType === "object");
assert(typeof LambdaFilesystemPermission === "object");
assert(typeof LambdaInputPayloadEncodingType === "object");
assert(typeof LambdaIsolationMode === "object");
assert(typeof RecipeOutputFormat === "object");
assert(typeof S3EndpointType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VendorGuidance === "object");
// errors
assert(AccessDeniedException.prototype instanceof GreengrassV2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof GreengrassV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof GreengrassV2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(RequestAlreadyInProgressException.prototype instanceof GreengrassV2ServiceException);
assert(typeof RequestAlreadyInProgressException$ === "object");
assert(ResourceNotFoundException.prototype instanceof GreengrassV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof GreengrassV2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof GreengrassV2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof GreengrassV2ServiceException);
assert(typeof ValidationException$ === "object");
assert(GreengrassV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListClientDevicesAssociatedWithCoreDevice === "function");
assert(typeof paginateListComponentVersions === "function");
assert(typeof paginateListComponents === "function");
assert(typeof paginateListCoreDevices === "function");
assert(typeof paginateListDeployments === "function");
assert(typeof paginateListEffectiveDeployments === "function");
assert(typeof paginateListInstalledComponents === "function");
console.log(`GreengrassV2 index test passed.`);
