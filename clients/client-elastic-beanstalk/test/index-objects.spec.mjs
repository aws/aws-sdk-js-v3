import {
  AbortEnvironmentUpdate$,
  AbortEnvironmentUpdateCommand,
  AbortEnvironmentUpdateMessage$,
  ActionHistoryStatus,
  ActionStatus,
  ActionType,
  ApplicationDescription$,
  ApplicationDescriptionMessage$,
  ApplicationDescriptionsMessage$,
  ApplicationMetrics$,
  ApplicationResourceLifecycleConfig$,
  ApplicationResourceLifecycleDescriptionMessage$,
  ApplicationVersionDescription$,
  ApplicationVersionDescriptionMessage$,
  ApplicationVersionDescriptionsMessage$,
  ApplicationVersionLifecycleConfig$,
  ApplicationVersionStatus,
  ApplyEnvironmentManagedAction$,
  ApplyEnvironmentManagedActionCommand,
  ApplyEnvironmentManagedActionRequest$,
  ApplyEnvironmentManagedActionResult$,
  AssociateEnvironmentOperationsRole$,
  AssociateEnvironmentOperationsRoleCommand,
  AssociateEnvironmentOperationsRoleMessage$,
  AutoScalingGroup$,
  BuildConfiguration$,
  Builder$,
  CPUUtilization$,
  CheckDNSAvailability$,
  CheckDNSAvailabilityCommand,
  CheckDNSAvailabilityMessage$,
  CheckDNSAvailabilityResultMessage$,
  CodeBuildNotInServiceRegionException,
  CodeBuildNotInServiceRegionException$,
  ComposeEnvironments$,
  ComposeEnvironmentsCommand,
  ComposeEnvironmentsMessage$,
  ComputeType,
  ConfigurationDeploymentStatus,
  ConfigurationOptionDescription$,
  ConfigurationOptionSetting$,
  ConfigurationOptionValueType,
  ConfigurationOptionsDescription$,
  ConfigurationSettingsDescription$,
  ConfigurationSettingsDescriptions$,
  ConfigurationSettingsValidationMessages$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationMessage$,
  CreateApplicationVersion$,
  CreateApplicationVersionCommand,
  CreateApplicationVersionMessage$,
  CreateConfigurationTemplate$,
  CreateConfigurationTemplateCommand,
  CreateConfigurationTemplateMessage$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentMessage$,
  CreatePlatformVersion$,
  CreatePlatformVersionCommand,
  CreatePlatformVersionRequest$,
  CreatePlatformVersionResult$,
  CreateStorageLocation$,
  CreateStorageLocationCommand,
  CreateStorageLocationResultMessage$,
  CustomAmi$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationMessage$,
  DeleteApplicationVersion$,
  DeleteApplicationVersionCommand,
  DeleteApplicationVersionMessage$,
  DeleteConfigurationTemplate$,
  DeleteConfigurationTemplateCommand,
  DeleteConfigurationTemplateMessage$,
  DeleteEnvironmentConfiguration$,
  DeleteEnvironmentConfigurationCommand,
  DeleteEnvironmentConfigurationMessage$,
  DeletePlatformVersion$,
  DeletePlatformVersionCommand,
  DeletePlatformVersionRequest$,
  DeletePlatformVersionResult$,
  Deployment$,
  DescribeAccountAttributes$,
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesResult$,
  DescribeApplicationVersions$,
  DescribeApplicationVersionsCommand,
  DescribeApplicationVersionsMessage$,
  DescribeApplications$,
  DescribeApplicationsCommand,
  DescribeApplicationsMessage$,
  DescribeConfigurationOptions$,
  DescribeConfigurationOptionsCommand,
  DescribeConfigurationOptionsMessage$,
  DescribeConfigurationSettings$,
  DescribeConfigurationSettingsCommand,
  DescribeConfigurationSettingsMessage$,
  DescribeEnvironmentHealth$,
  DescribeEnvironmentHealthCommand,
  DescribeEnvironmentHealthRequest$,
  DescribeEnvironmentHealthResult$,
  DescribeEnvironmentManagedActionHistory$,
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionHistoryRequest$,
  DescribeEnvironmentManagedActionHistoryResult$,
  DescribeEnvironmentManagedActions$,
  DescribeEnvironmentManagedActionsCommand,
  DescribeEnvironmentManagedActionsRequest$,
  DescribeEnvironmentManagedActionsResult$,
  DescribeEnvironmentResources$,
  DescribeEnvironmentResourcesCommand,
  DescribeEnvironmentResourcesMessage$,
  DescribeEnvironments$,
  DescribeEnvironmentsCommand,
  DescribeEnvironmentsMessage$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsMessage$,
  DescribeInstancesHealth$,
  DescribeInstancesHealthCommand,
  DescribeInstancesHealthRequest$,
  DescribeInstancesHealthResult$,
  DescribePlatformVersion$,
  DescribePlatformVersionCommand,
  DescribePlatformVersionRequest$,
  DescribePlatformVersionResult$,
  DisassociateEnvironmentOperationsRole$,
  DisassociateEnvironmentOperationsRoleCommand,
  DisassociateEnvironmentOperationsRoleMessage$,
  ElasticBeanstalk,
  ElasticBeanstalkClient,
  ElasticBeanstalkServiceException,
  ElasticBeanstalkServiceException$,
  ElasticBeanstalkSyntheticServiceException,
  EnvironmentDescription$,
  EnvironmentDescriptionsMessage$,
  EnvironmentHealth,
  EnvironmentHealthAttribute,
  EnvironmentHealthStatus,
  EnvironmentInfoDescription$,
  EnvironmentInfoType,
  EnvironmentLink$,
  EnvironmentResourceDescription$,
  EnvironmentResourceDescriptionsMessage$,
  EnvironmentResourcesDescription$,
  EnvironmentStatus,
  EnvironmentTier$,
  EventDescription$,
  EventDescriptionsMessage$,
  EventSeverity,
  FailureType,
  Instance$,
  InstanceHealthSummary$,
  InstancesHealthAttribute,
  InsufficientPrivilegesException,
  InsufficientPrivilegesException$,
  InvalidRequestException,
  InvalidRequestException$,
  Latency$,
  LaunchConfiguration$,
  LaunchTemplate$,
  ListAvailableSolutionStacks$,
  ListAvailableSolutionStacksCommand,
  ListAvailableSolutionStacksResultMessage$,
  ListPlatformBranches$,
  ListPlatformBranchesCommand,
  ListPlatformBranchesRequest$,
  ListPlatformBranchesResult$,
  ListPlatformVersions$,
  ListPlatformVersionsCommand,
  ListPlatformVersionsRequest$,
  ListPlatformVersionsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceMessage$,
  Listener$,
  LoadBalancer$,
  LoadBalancerDescription$,
  ManagedAction$,
  ManagedActionHistoryItem$,
  ManagedActionInvalidStateException,
  ManagedActionInvalidStateException$,
  MaxAgeRule$,
  MaxCountRule$,
  OperationInProgressException,
  OperationInProgressException$,
  OptionRestrictionRegex$,
  OptionSpecification$,
  PlatformBranchSummary$,
  PlatformDescription$,
  PlatformFilter$,
  PlatformFramework$,
  PlatformProgrammingLanguage$,
  PlatformStatus,
  PlatformSummary$,
  PlatformVersionStillReferencedException,
  PlatformVersionStillReferencedException$,
  Queue$,
  RebuildEnvironment$,
  RebuildEnvironmentCommand,
  RebuildEnvironmentMessage$,
  RequestEnvironmentInfo$,
  RequestEnvironmentInfoCommand,
  RequestEnvironmentInfoMessage$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceQuota$,
  ResourceQuotas$,
  ResourceTagsDescriptionMessage$,
  ResourceTypeNotSupportedException,
  ResourceTypeNotSupportedException$,
  RestartAppServer$,
  RestartAppServerCommand,
  RestartAppServerMessage$,
  RetrieveEnvironmentInfo$,
  RetrieveEnvironmentInfoCommand,
  RetrieveEnvironmentInfoMessage$,
  RetrieveEnvironmentInfoResultMessage$,
  S3Location$,
  S3LocationNotInServiceRegionException,
  S3LocationNotInServiceRegionException$,
  S3SubscriptionRequiredException,
  S3SubscriptionRequiredException$,
  SearchFilter$,
  SingleInstanceHealth$,
  SolutionStackDescription$,
  SourceBuildInformation$,
  SourceBundleDeletionException,
  SourceBundleDeletionException$,
  SourceConfiguration$,
  SourceRepository,
  SourceType,
  StatusCodes$,
  SwapEnvironmentCNAMEs$,
  SwapEnvironmentCNAMEsCommand,
  SwapEnvironmentCNAMEsMessage$,
  SystemStatus$,
  Tag$,
  TerminateEnvironment$,
  TerminateEnvironmentCommand,
  TerminateEnvironmentMessage$,
  TooManyApplicationVersionsException,
  TooManyApplicationVersionsException$,
  TooManyApplicationsException,
  TooManyApplicationsException$,
  TooManyBucketsException,
  TooManyBucketsException$,
  TooManyConfigurationTemplatesException,
  TooManyConfigurationTemplatesException$,
  TooManyEnvironmentsException,
  TooManyEnvironmentsException$,
  TooManyPlatformsException,
  TooManyPlatformsException$,
  TooManyTagsException,
  TooManyTagsException$,
  Trigger$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationMessage$,
  UpdateApplicationResourceLifecycle$,
  UpdateApplicationResourceLifecycleCommand,
  UpdateApplicationResourceLifecycleMessage$,
  UpdateApplicationVersion$,
  UpdateApplicationVersionCommand,
  UpdateApplicationVersionMessage$,
  UpdateConfigurationTemplate$,
  UpdateConfigurationTemplateCommand,
  UpdateConfigurationTemplateMessage$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentMessage$,
  UpdateTagsForResource$,
  UpdateTagsForResourceCommand,
  UpdateTagsForResourceMessage$,
  ValidateConfigurationSettings$,
  ValidateConfigurationSettingsCommand,
  ValidateConfigurationSettingsMessage$,
  ValidationMessage$,
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
assert(typeof AbortEnvironmentUpdate$ === "object");
assert(typeof ApplyEnvironmentManagedActionCommand === "function");
assert(typeof ApplyEnvironmentManagedAction$ === "object");
assert(typeof AssociateEnvironmentOperationsRoleCommand === "function");
assert(typeof AssociateEnvironmentOperationsRole$ === "object");
assert(typeof CheckDNSAvailabilityCommand === "function");
assert(typeof CheckDNSAvailability$ === "object");
assert(typeof ComposeEnvironmentsCommand === "function");
assert(typeof ComposeEnvironments$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateApplicationVersionCommand === "function");
assert(typeof CreateApplicationVersion$ === "object");
assert(typeof CreateConfigurationTemplateCommand === "function");
assert(typeof CreateConfigurationTemplate$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreatePlatformVersionCommand === "function");
assert(typeof CreatePlatformVersion$ === "object");
assert(typeof CreateStorageLocationCommand === "function");
assert(typeof CreateStorageLocation$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteApplicationVersionCommand === "function");
assert(typeof DeleteApplicationVersion$ === "object");
assert(typeof DeleteConfigurationTemplateCommand === "function");
assert(typeof DeleteConfigurationTemplate$ === "object");
assert(typeof DeleteEnvironmentConfigurationCommand === "function");
assert(typeof DeleteEnvironmentConfiguration$ === "object");
assert(typeof DeletePlatformVersionCommand === "function");
assert(typeof DeletePlatformVersion$ === "object");
assert(typeof DescribeAccountAttributesCommand === "function");
assert(typeof DescribeAccountAttributes$ === "object");
assert(typeof DescribeApplicationsCommand === "function");
assert(typeof DescribeApplications$ === "object");
assert(typeof DescribeApplicationVersionsCommand === "function");
assert(typeof DescribeApplicationVersions$ === "object");
assert(typeof DescribeConfigurationOptionsCommand === "function");
assert(typeof DescribeConfigurationOptions$ === "object");
assert(typeof DescribeConfigurationSettingsCommand === "function");
assert(typeof DescribeConfigurationSettings$ === "object");
assert(typeof DescribeEnvironmentHealthCommand === "function");
assert(typeof DescribeEnvironmentHealth$ === "object");
assert(typeof DescribeEnvironmentManagedActionHistoryCommand === "function");
assert(typeof DescribeEnvironmentManagedActionHistory$ === "object");
assert(typeof DescribeEnvironmentManagedActionsCommand === "function");
assert(typeof DescribeEnvironmentManagedActions$ === "object");
assert(typeof DescribeEnvironmentResourcesCommand === "function");
assert(typeof DescribeEnvironmentResources$ === "object");
assert(typeof DescribeEnvironmentsCommand === "function");
assert(typeof DescribeEnvironments$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeInstancesHealthCommand === "function");
assert(typeof DescribeInstancesHealth$ === "object");
assert(typeof DescribePlatformVersionCommand === "function");
assert(typeof DescribePlatformVersion$ === "object");
assert(typeof DisassociateEnvironmentOperationsRoleCommand === "function");
assert(typeof DisassociateEnvironmentOperationsRole$ === "object");
assert(typeof ListAvailableSolutionStacksCommand === "function");
assert(typeof ListAvailableSolutionStacks$ === "object");
assert(typeof ListPlatformBranchesCommand === "function");
assert(typeof ListPlatformBranches$ === "object");
assert(typeof ListPlatformVersionsCommand === "function");
assert(typeof ListPlatformVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RebuildEnvironmentCommand === "function");
assert(typeof RebuildEnvironment$ === "object");
assert(typeof RequestEnvironmentInfoCommand === "function");
assert(typeof RequestEnvironmentInfo$ === "object");
assert(typeof RestartAppServerCommand === "function");
assert(typeof RestartAppServer$ === "object");
assert(typeof RetrieveEnvironmentInfoCommand === "function");
assert(typeof RetrieveEnvironmentInfo$ === "object");
assert(typeof SwapEnvironmentCNAMEsCommand === "function");
assert(typeof SwapEnvironmentCNAMEs$ === "object");
assert(typeof TerminateEnvironmentCommand === "function");
assert(typeof TerminateEnvironment$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateApplicationResourceLifecycleCommand === "function");
assert(typeof UpdateApplicationResourceLifecycle$ === "object");
assert(typeof UpdateApplicationVersionCommand === "function");
assert(typeof UpdateApplicationVersion$ === "object");
assert(typeof UpdateConfigurationTemplateCommand === "function");
assert(typeof UpdateConfigurationTemplate$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateTagsForResourceCommand === "function");
assert(typeof UpdateTagsForResource$ === "object");
assert(typeof ValidateConfigurationSettingsCommand === "function");
assert(typeof ValidateConfigurationSettings$ === "object");
// structural schemas
assert(typeof AbortEnvironmentUpdateMessage$ === "object");
assert(typeof ApplicationDescription$ === "object");
assert(typeof ApplicationDescriptionMessage$ === "object");
assert(typeof ApplicationDescriptionsMessage$ === "object");
assert(typeof ApplicationMetrics$ === "object");
assert(typeof ApplicationResourceLifecycleConfig$ === "object");
assert(typeof ApplicationResourceLifecycleDescriptionMessage$ === "object");
assert(typeof ApplicationVersionDescription$ === "object");
assert(typeof ApplicationVersionDescriptionMessage$ === "object");
assert(typeof ApplicationVersionDescriptionsMessage$ === "object");
assert(typeof ApplicationVersionLifecycleConfig$ === "object");
assert(typeof ApplyEnvironmentManagedActionRequest$ === "object");
assert(typeof ApplyEnvironmentManagedActionResult$ === "object");
assert(typeof AssociateEnvironmentOperationsRoleMessage$ === "object");
assert(typeof AutoScalingGroup$ === "object");
assert(typeof BuildConfiguration$ === "object");
assert(typeof Builder$ === "object");
assert(typeof CheckDNSAvailabilityMessage$ === "object");
assert(typeof CheckDNSAvailabilityResultMessage$ === "object");
assert(typeof ComposeEnvironmentsMessage$ === "object");
assert(typeof ConfigurationOptionDescription$ === "object");
assert(typeof ConfigurationOptionsDescription$ === "object");
assert(typeof ConfigurationOptionSetting$ === "object");
assert(typeof ConfigurationSettingsDescription$ === "object");
assert(typeof ConfigurationSettingsDescriptions$ === "object");
assert(typeof ConfigurationSettingsValidationMessages$ === "object");
assert(typeof CPUUtilization$ === "object");
assert(typeof CreateApplicationMessage$ === "object");
assert(typeof CreateApplicationVersionMessage$ === "object");
assert(typeof CreateConfigurationTemplateMessage$ === "object");
assert(typeof CreateEnvironmentMessage$ === "object");
assert(typeof CreatePlatformVersionRequest$ === "object");
assert(typeof CreatePlatformVersionResult$ === "object");
assert(typeof CreateStorageLocationResultMessage$ === "object");
assert(typeof CustomAmi$ === "object");
assert(typeof DeleteApplicationMessage$ === "object");
assert(typeof DeleteApplicationVersionMessage$ === "object");
assert(typeof DeleteConfigurationTemplateMessage$ === "object");
assert(typeof DeleteEnvironmentConfigurationMessage$ === "object");
assert(typeof DeletePlatformVersionRequest$ === "object");
assert(typeof DeletePlatformVersionResult$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DescribeAccountAttributesResult$ === "object");
assert(typeof DescribeApplicationsMessage$ === "object");
assert(typeof DescribeApplicationVersionsMessage$ === "object");
assert(typeof DescribeConfigurationOptionsMessage$ === "object");
assert(typeof DescribeConfigurationSettingsMessage$ === "object");
assert(typeof DescribeEnvironmentHealthRequest$ === "object");
assert(typeof DescribeEnvironmentHealthResult$ === "object");
assert(typeof DescribeEnvironmentManagedActionHistoryRequest$ === "object");
assert(typeof DescribeEnvironmentManagedActionHistoryResult$ === "object");
assert(typeof DescribeEnvironmentManagedActionsRequest$ === "object");
assert(typeof DescribeEnvironmentManagedActionsResult$ === "object");
assert(typeof DescribeEnvironmentResourcesMessage$ === "object");
assert(typeof DescribeEnvironmentsMessage$ === "object");
assert(typeof DescribeEventsMessage$ === "object");
assert(typeof DescribeInstancesHealthRequest$ === "object");
assert(typeof DescribeInstancesHealthResult$ === "object");
assert(typeof DescribePlatformVersionRequest$ === "object");
assert(typeof DescribePlatformVersionResult$ === "object");
assert(typeof DisassociateEnvironmentOperationsRoleMessage$ === "object");
assert(typeof EnvironmentDescription$ === "object");
assert(typeof EnvironmentDescriptionsMessage$ === "object");
assert(typeof EnvironmentInfoDescription$ === "object");
assert(typeof EnvironmentLink$ === "object");
assert(typeof EnvironmentResourceDescription$ === "object");
assert(typeof EnvironmentResourceDescriptionsMessage$ === "object");
assert(typeof EnvironmentResourcesDescription$ === "object");
assert(typeof EnvironmentTier$ === "object");
assert(typeof EventDescription$ === "object");
assert(typeof EventDescriptionsMessage$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceHealthSummary$ === "object");
assert(typeof Latency$ === "object");
assert(typeof LaunchConfiguration$ === "object");
assert(typeof LaunchTemplate$ === "object");
assert(typeof ListAvailableSolutionStacksResultMessage$ === "object");
assert(typeof Listener$ === "object");
assert(typeof ListPlatformBranchesRequest$ === "object");
assert(typeof ListPlatformBranchesResult$ === "object");
assert(typeof ListPlatformVersionsRequest$ === "object");
assert(typeof ListPlatformVersionsResult$ === "object");
assert(typeof ListTagsForResourceMessage$ === "object");
assert(typeof LoadBalancer$ === "object");
assert(typeof LoadBalancerDescription$ === "object");
assert(typeof ManagedAction$ === "object");
assert(typeof ManagedActionHistoryItem$ === "object");
assert(typeof MaxAgeRule$ === "object");
assert(typeof MaxCountRule$ === "object");
assert(typeof OptionRestrictionRegex$ === "object");
assert(typeof OptionSpecification$ === "object");
assert(typeof PlatformBranchSummary$ === "object");
assert(typeof PlatformDescription$ === "object");
assert(typeof PlatformFilter$ === "object");
assert(typeof PlatformFramework$ === "object");
assert(typeof PlatformProgrammingLanguage$ === "object");
assert(typeof PlatformSummary$ === "object");
assert(typeof Queue$ === "object");
assert(typeof RebuildEnvironmentMessage$ === "object");
assert(typeof RequestEnvironmentInfoMessage$ === "object");
assert(typeof ResourceQuota$ === "object");
assert(typeof ResourceQuotas$ === "object");
assert(typeof ResourceTagsDescriptionMessage$ === "object");
assert(typeof RestartAppServerMessage$ === "object");
assert(typeof RetrieveEnvironmentInfoMessage$ === "object");
assert(typeof RetrieveEnvironmentInfoResultMessage$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SearchFilter$ === "object");
assert(typeof SingleInstanceHealth$ === "object");
assert(typeof SolutionStackDescription$ === "object");
assert(typeof SourceBuildInformation$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof StatusCodes$ === "object");
assert(typeof SwapEnvironmentCNAMEsMessage$ === "object");
assert(typeof SystemStatus$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TerminateEnvironmentMessage$ === "object");
assert(typeof Trigger$ === "object");
assert(typeof UpdateApplicationMessage$ === "object");
assert(typeof UpdateApplicationResourceLifecycleMessage$ === "object");
assert(typeof UpdateApplicationVersionMessage$ === "object");
assert(typeof UpdateConfigurationTemplateMessage$ === "object");
assert(typeof UpdateEnvironmentMessage$ === "object");
assert(typeof UpdateTagsForResourceMessage$ === "object");
assert(typeof ValidateConfigurationSettingsMessage$ === "object");
assert(typeof ValidationMessage$ === "object");
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
assert(typeof CodeBuildNotInServiceRegionException$ === "object");
assert(ElasticBeanstalkServiceException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof ElasticBeanstalkServiceException$ === "object");
assert(InsufficientPrivilegesException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof InsufficientPrivilegesException$ === "object");
assert(InvalidRequestException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ManagedActionInvalidStateException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof ManagedActionInvalidStateException$ === "object");
assert(OperationInProgressException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof OperationInProgressException$ === "object");
assert(PlatformVersionStillReferencedException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof PlatformVersionStillReferencedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceTypeNotSupportedException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof ResourceTypeNotSupportedException$ === "object");
assert(S3LocationNotInServiceRegionException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof S3LocationNotInServiceRegionException$ === "object");
assert(S3SubscriptionRequiredException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof S3SubscriptionRequiredException$ === "object");
assert(SourceBundleDeletionException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof SourceBundleDeletionException$ === "object");
assert(TooManyApplicationsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof TooManyApplicationsException$ === "object");
assert(TooManyApplicationVersionsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof TooManyApplicationVersionsException$ === "object");
assert(TooManyBucketsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof TooManyBucketsException$ === "object");
assert(TooManyConfigurationTemplatesException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof TooManyConfigurationTemplatesException$ === "object");
assert(TooManyEnvironmentsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof TooManyEnvironmentsException$ === "object");
assert(TooManyPlatformsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof TooManyPlatformsException$ === "object");
assert(TooManyTagsException.prototype instanceof ElasticBeanstalkSyntheticServiceException);
assert(typeof TooManyTagsException$ === "object");
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
