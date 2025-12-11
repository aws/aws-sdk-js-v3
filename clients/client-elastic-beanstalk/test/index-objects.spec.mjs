import {
  AbortEnvironmentUpdateCommand,
  ActionHistoryStatus,
  ActionStatus,
  ActionType,
  ApplicationVersionStatus,
  ApplyEnvironmentManagedActionCommand,
  AssociateEnvironmentOperationsRoleCommand,
  CheckDNSAvailabilityCommand,
  CodeBuildNotInServiceRegionException,
  ComposeEnvironmentsCommand,
  ComputeType,
  ConfigurationDeploymentStatus,
  ConfigurationOptionValueType,
  CreateApplicationCommand,
  CreateApplicationVersionCommand,
  CreateConfigurationTemplateCommand,
  CreateEnvironmentCommand,
  CreatePlatformVersionCommand,
  CreateStorageLocationCommand,
  DeleteApplicationCommand,
  DeleteApplicationVersionCommand,
  DeleteConfigurationTemplateCommand,
  DeleteEnvironmentConfigurationCommand,
  DeletePlatformVersionCommand,
  DescribeAccountAttributesCommand,
  DescribeApplicationVersionsCommand,
  DescribeApplicationsCommand,
  DescribeConfigurationOptionsCommand,
  DescribeConfigurationSettingsCommand,
  DescribeEnvironmentHealthCommand,
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionsCommand,
  DescribeEnvironmentResourcesCommand,
  DescribeEnvironmentsCommand,
  DescribeEventsCommand,
  DescribeInstancesHealthCommand,
  DescribePlatformVersionCommand,
  DisassociateEnvironmentOperationsRoleCommand,
  ElasticBeanstalk,
  ElasticBeanstalkClient,
  ElasticBeanstalkServiceException,
  ElasticBeanstalkSyntheticServiceException,
  EnvironmentHealth,
  EnvironmentHealthAttribute,
  EnvironmentHealthStatus,
  EnvironmentInfoType,
  EnvironmentStatus,
  EventSeverity,
  FailureType,
  InstancesHealthAttribute,
  InsufficientPrivilegesException,
  InvalidRequestException,
  ListAvailableSolutionStacksCommand,
  ListPlatformBranchesCommand,
  ListPlatformVersionsCommand,
  ListTagsForResourceCommand,
  ManagedActionInvalidStateException,
  OperationInProgressException,
  PlatformStatus,
  PlatformVersionStillReferencedException,
  RebuildEnvironmentCommand,
  RequestEnvironmentInfoCommand,
  ResourceNotFoundException,
  ResourceTypeNotSupportedException,
  RestartAppServerCommand,
  RetrieveEnvironmentInfoCommand,
  S3LocationNotInServiceRegionException,
  S3SubscriptionRequiredException,
  SourceBundleDeletionException,
  SourceRepository,
  SourceType,
  SwapEnvironmentCNAMEsCommand,
  TerminateEnvironmentCommand,
  TooManyApplicationVersionsException,
  TooManyApplicationsException,
  TooManyBucketsException,
  TooManyConfigurationTemplatesException,
  TooManyEnvironmentsException,
  TooManyPlatformsException,
  TooManyTagsException,
  UpdateApplicationCommand,
  UpdateApplicationResourceLifecycleCommand,
  UpdateApplicationVersionCommand,
  UpdateConfigurationTemplateCommand,
  UpdateEnvironmentCommand,
  UpdateTagsForResourceCommand,
  ValidateConfigurationSettingsCommand,
  ValidationSeverity,
  paginateDescribeEnvironmentManagedActionHistory,
  paginateDescribeEvents,
  paginateListPlatformBranches,
  paginateListPlatformVersions,
  waitForEnvironmentExists,
  waitForEnvironmentTerminated,
  waitForEnvironmentUpdated,
  waitUntilEnvironmentExists,
  waitUntilEnvironmentTerminated,
  waitUntilEnvironmentUpdated,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElasticBeanstalkClient === "function");
assert(typeof ElasticBeanstalk === "function");
// commands
assert(typeof AbortEnvironmentUpdateCommand === "function");
assert(typeof ApplyEnvironmentManagedActionCommand === "function");
assert(typeof AssociateEnvironmentOperationsRoleCommand === "function");
assert(typeof CheckDNSAvailabilityCommand === "function");
assert(typeof ComposeEnvironmentsCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplicationVersionCommand === "function");
assert(typeof CreateConfigurationTemplateCommand === "function");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreatePlatformVersionCommand === "function");
assert(typeof CreateStorageLocationCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplicationVersionCommand === "function");
assert(typeof DeleteConfigurationTemplateCommand === "function");
assert(typeof DeleteEnvironmentConfigurationCommand === "function");
assert(typeof DeletePlatformVersionCommand === "function");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeApplicationsCommand === "function");
assert(typeof DescribeApplicationVersionsCommand === "function");
assert(typeof DescribeConfigurationOptionsCommand === "function");
assert(typeof DescribeConfigurationSettingsCommand === "function");
assert(typeof DescribeEnvironmentHealthCommand === "function");
assert(typeof DescribeEnvironmentManagedActionHistoryCommand === "function");
assert(typeof DescribeEnvironmentManagedActionsCommand === "function");
assert(typeof DescribeEnvironmentResourcesCommand === "function");
assert(typeof DescribeEnvironmentsCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeInstancesHealthCommand === "function");
assert(typeof DescribePlatformVersionCommand === "function");
assert(typeof DisassociateEnvironmentOperationsRoleCommand === "function");
assert(typeof ListAvailableSolutionStacksCommand === "function");
assert(typeof ListPlatformBranchesCommand === "function");
assert(typeof ListPlatformVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RebuildEnvironmentCommand === "function");
assert(typeof RequestEnvironmentInfoCommand === "function");
assert(typeof RestartAppServerCommand === "function");
assert(typeof RetrieveEnvironmentInfoCommand === "function");
assert(typeof SwapEnvironmentCNAMEsCommand === "function");
assert(typeof TerminateEnvironmentCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplicationResourceLifecycleCommand === "function");
assert(typeof UpdateApplicationVersionCommand === "function");
assert(typeof UpdateConfigurationTemplateCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateTagsForResourceCommand === "function");
assert(typeof ValidateConfigurationSettingsCommand === "function");
// enums
assert(typeof ActionHistoryStatus === "object");
assert(typeof ActionStatus === "object");
assert(typeof ActionType === "object");
assert(typeof ApplicationVersionStatus === "object");
assert(typeof ComputeType === "object");
assert(typeof ConfigurationDeploymentStatus === "object");
assert(typeof ConfigurationOptionValueType === "object");
assert(typeof EnvironmentHealth === "object");
assert(typeof EnvironmentHealthAttribute === "object");
assert(typeof EnvironmentHealthStatus === "object");
assert(typeof EnvironmentInfoType === "object");
assert(typeof EnvironmentStatus === "object");
assert(typeof EventSeverity === "object");
assert(typeof FailureType === "object");
assert(typeof InstancesHealthAttribute === "object");
assert(typeof PlatformStatus === "object");
assert(typeof SourceRepository === "object");
assert(typeof SourceType === "object");
assert(typeof ValidationSeverity === "object");
// errors
assert(CodeBuildNotInServiceRegionException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(ElasticBeanstalkServiceException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(InsufficientPrivilegesException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(InvalidRequestException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(ManagedActionInvalidStateException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(OperationInProgressException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(PlatformVersionStillReferencedException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(ResourceNotFoundException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(ResourceTypeNotSupportedException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(S3LocationNotInServiceRegionException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(S3SubscriptionRequiredException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(SourceBundleDeletionException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(TooManyApplicationsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(TooManyApplicationVersionsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(TooManyBucketsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(TooManyConfigurationTemplatesException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(TooManyEnvironmentsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(TooManyPlatformsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(TooManyTagsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(ElasticBeanstalkSyntheticServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForEnvironmentExists === "function");
assert(typeof waitForEnvironmentTerminated === "function");
assert(typeof waitForEnvironmentUpdated === "function");
assert(typeof waitUntilEnvironmentExists === "function");
assert(typeof waitUntilEnvironmentTerminated === "function");
assert(typeof waitUntilEnvironmentUpdated === "function");
// paginators
assert(typeof paginateDescribeEnvironmentManagedActionHistory === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateListPlatformBranches === "function");
assert(typeof paginateListPlatformVersions === "function");
console.log(`ElasticBeanstalk index test passed.`);
