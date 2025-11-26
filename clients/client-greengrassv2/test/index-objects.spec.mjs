import {
  AssociateServiceRoleToAccountCommand,
  BatchAssociateClientDeviceWithCoreDeviceCommand,
  BatchDisassociateClientDeviceFromCoreDeviceCommand,
  CancelDeploymentCommand,
  CloudComponentState,
  ComponentDependencyType,
  ComponentVisibilityScope,
  CoreDeviceStatus,
  CreateComponentVersionCommand,
  CreateDeploymentCommand,
  DeleteComponentCommand,
  DeleteCoreDeviceCommand,
  DeleteDeploymentCommand,
  DeploymentComponentUpdatePolicyAction,
  DeploymentFailureHandlingPolicy,
  DeploymentHistoryFilter,
  DeploymentStatus,
  DescribeComponentCommand,
  DisassociateServiceRoleFromAccountCommand,
  EffectiveDeploymentExecutionStatus,
  GetComponentCommand,
  GetComponentVersionArtifactCommand,
  GetConnectivityInfoCommand,
  GetCoreDeviceCommand,
  GetDeploymentCommand,
  GetServiceRoleForAccountCommand,
  GreengrassV2,
  GreengrassV2Client,
  GreengrassV2ServiceException,
  InstalledComponentLifecycleState,
  InstalledComponentTopologyFilter,
  IoTJobAbortAction,
  IoTJobExecutionFailureType,
  IotEndpointType,
  LambdaEventSourceType,
  LambdaFilesystemPermission,
  LambdaInputPayloadEncodingType,
  LambdaIsolationMode,
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListComponentVersionsCommand,
  ListComponentsCommand,
  ListCoreDevicesCommand,
  ListDeploymentsCommand,
  ListEffectiveDeploymentsCommand,
  ListInstalledComponentsCommand,
  ListTagsForResourceCommand,
  RecipeOutputFormat,
  ResolveComponentCandidatesCommand,
  S3EndpointType,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectivityInfoCommand,
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
assert(typeof GreengrassV2Client === "function")
assert(typeof GreengrassV2 === "function")
// commands
assert(typeof AssociateServiceRoleToAccountCommand === "function")
assert(typeof BatchAssociateClientDeviceWithCoreDeviceCommand === "function")
assert(typeof BatchDisassociateClientDeviceFromCoreDeviceCommand === "function")
assert(typeof CancelDeploymentCommand === "function")
assert(typeof CreateComponentVersionCommand === "function")
assert(typeof CreateDeploymentCommand === "function")
assert(typeof DeleteComponentCommand === "function")
assert(typeof DeleteCoreDeviceCommand === "function")
assert(typeof DeleteDeploymentCommand === "function")
assert(typeof DescribeComponentCommand === "function")
assert(typeof DisassociateServiceRoleFromAccountCommand === "function")
assert(typeof GetComponentCommand === "function")
assert(typeof GetComponentVersionArtifactCommand === "function")
assert(typeof GetConnectivityInfoCommand === "function")
assert(typeof GetCoreDeviceCommand === "function")
assert(typeof GetDeploymentCommand === "function")
assert(typeof GetServiceRoleForAccountCommand === "function")
assert(typeof ListClientDevicesAssociatedWithCoreDeviceCommand === "function")
assert(typeof ListComponentsCommand === "function")
assert(typeof ListComponentVersionsCommand === "function")
assert(typeof ListCoreDevicesCommand === "function")
assert(typeof ListDeploymentsCommand === "function")
assert(typeof ListEffectiveDeploymentsCommand === "function")
assert(typeof ListInstalledComponentsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ResolveComponentCandidatesCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateConnectivityInfoCommand === "function")
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
assert(typeof VendorGuidance === "object");
// errors
assert(GreengrassV2ServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListClientDevicesAssociatedWithCoreDevice === "function")
assert(typeof paginateListComponentVersions === "function")
assert(typeof paginateListComponents === "function")
assert(typeof paginateListCoreDevices === "function")
assert(typeof paginateListDeployments === "function")
assert(typeof paginateListEffectiveDeployments === "function")
assert(typeof paginateListInstalledComponents === "function")
console.log(`GreengrassV2 index test passed.`);
