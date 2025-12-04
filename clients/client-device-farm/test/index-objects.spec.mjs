import {
  ArtifactCategory,
  ArtifactType,
  BillingMethod,
  CreateDevicePoolCommand,
  CreateInstanceProfileCommand,
  CreateNetworkProfileCommand,
  CreateProjectCommand,
  CreateRemoteAccessSessionCommand,
  CreateTestGridProjectCommand,
  CreateTestGridUrlCommand,
  CreateUploadCommand,
  CreateVPCEConfigurationCommand,
  CurrencyCode,
  DeleteDevicePoolCommand,
  DeleteInstanceProfileCommand,
  DeleteNetworkProfileCommand,
  DeleteProjectCommand,
  DeleteRemoteAccessSessionCommand,
  DeleteRunCommand,
  DeleteTestGridProjectCommand,
  DeleteUploadCommand,
  DeleteVPCEConfigurationCommand,
  DeviceAttribute,
  DeviceAvailability,
  DeviceFarm,
  DeviceFarmClient,
  DeviceFarmServiceException,
  DeviceFilterAttribute,
  DeviceFormFactor,
  DevicePlatform,
  DevicePoolType,
  ExecutionResult,
  ExecutionResultCode,
  ExecutionStatus,
  GetAccountSettingsCommand,
  GetDeviceCommand,
  GetDeviceInstanceCommand,
  GetDevicePoolCommand,
  GetDevicePoolCompatibilityCommand,
  GetInstanceProfileCommand,
  GetJobCommand,
  GetNetworkProfileCommand,
  GetOfferingStatusCommand,
  GetProjectCommand,
  GetRemoteAccessSessionCommand,
  GetRunCommand,
  GetSuiteCommand,
  GetTestCommand,
  GetTestGridProjectCommand,
  GetTestGridSessionCommand,
  GetUploadCommand,
  GetVPCEConfigurationCommand,
  InstallToRemoteAccessSessionCommand,
  InstanceStatus,
  InteractionMode,
  ListArtifactsCommand,
  ListDeviceInstancesCommand,
  ListDevicePoolsCommand,
  ListDevicesCommand,
  ListInstanceProfilesCommand,
  ListJobsCommand,
  ListNetworkProfilesCommand,
  ListOfferingPromotionsCommand,
  ListOfferingTransactionsCommand,
  ListOfferingsCommand,
  ListProjectsCommand,
  ListRemoteAccessSessionsCommand,
  ListRunsCommand,
  ListSamplesCommand,
  ListSuitesCommand,
  ListTagsForResourceCommand,
  ListTestGridProjectsCommand,
  ListTestGridSessionActionsCommand,
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionsCommand,
  ListTestsCommand,
  ListUniqueProblemsCommand,
  ListUploadsCommand,
  ListVPCEConfigurationsCommand,
  NetworkProfileType,
  OfferingTransactionType,
  OfferingType,
  PurchaseOfferingCommand,
  RecurringChargeFrequency,
  RenewOfferingCommand,
  RuleOperator,
  SampleType,
  ScheduleRunCommand,
  StopJobCommand,
  StopRemoteAccessSessionCommand,
  StopRunCommand,
  TagResourceCommand,
  TestGridSessionArtifactCategory,
  TestGridSessionArtifactType,
  TestGridSessionStatus,
  TestType,
  UntagResourceCommand,
  UpdateDeviceInstanceCommand,
  UpdateDevicePoolCommand,
  UpdateInstanceProfileCommand,
  UpdateNetworkProfileCommand,
  UpdateProjectCommand,
  UpdateTestGridProjectCommand,
  UpdateUploadCommand,
  UpdateVPCEConfigurationCommand,
  UploadCategory,
  UploadStatus,
  UploadType,
  paginateGetOfferingStatus,
  paginateListArtifacts,
  paginateListDevicePools,
  paginateListDevices,
  paginateListJobs,
  paginateListOfferingTransactions,
  paginateListOfferings,
  paginateListProjects,
  paginateListRuns,
  paginateListSamples,
  paginateListSuites,
  paginateListTestGridProjects,
  paginateListTestGridSessionActions,
  paginateListTestGridSessionArtifacts,
  paginateListTestGridSessions,
  paginateListTests,
  paginateListUniqueProblems,
  paginateListUploads,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DeviceFarmClient === "function");
assert(typeof DeviceFarm === "function");
// commands
assert(typeof CreateDevicePoolCommand === "function");
assert(typeof CreateInstanceProfileCommand === "function");
assert(typeof CreateNetworkProfileCommand === "function");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateRemoteAccessSessionCommand === "function");
assert(typeof CreateTestGridProjectCommand === "function");
assert(typeof CreateTestGridUrlCommand === "function");
assert(typeof CreateUploadCommand === "function");
assert(typeof CreateVPCEConfigurationCommand === "function");
assert(typeof DeleteDevicePoolCommand === "function");
assert(typeof DeleteInstanceProfileCommand === "function");
assert(typeof DeleteNetworkProfileCommand === "function");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteRemoteAccessSessionCommand === "function");
assert(typeof DeleteRunCommand === "function");
assert(typeof DeleteTestGridProjectCommand === "function");
assert(typeof DeleteUploadCommand === "function");
assert(typeof DeleteVPCEConfigurationCommand === "function");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetDeviceCommand === "function");
assert(typeof GetDeviceInstanceCommand === "function");
assert(typeof GetDevicePoolCommand === "function");
assert(typeof GetDevicePoolCompatibilityCommand === "function");
assert(typeof GetInstanceProfileCommand === "function");
assert(typeof GetJobCommand === "function");
assert(typeof GetNetworkProfileCommand === "function");
assert(typeof GetOfferingStatusCommand === "function");
assert(typeof GetProjectCommand === "function");
assert(typeof GetRemoteAccessSessionCommand === "function");
assert(typeof GetRunCommand === "function");
assert(typeof GetSuiteCommand === "function");
assert(typeof GetTestCommand === "function");
assert(typeof GetTestGridProjectCommand === "function");
assert(typeof GetTestGridSessionCommand === "function");
assert(typeof GetUploadCommand === "function");
assert(typeof GetVPCEConfigurationCommand === "function");
assert(typeof InstallToRemoteAccessSessionCommand === "function");
assert(typeof ListArtifactsCommand === "function");
assert(typeof ListDeviceInstancesCommand === "function");
assert(typeof ListDevicePoolsCommand === "function");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListInstanceProfilesCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListNetworkProfilesCommand === "function");
assert(typeof ListOfferingPromotionsCommand === "function");
assert(typeof ListOfferingsCommand === "function");
assert(typeof ListOfferingTransactionsCommand === "function");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListRemoteAccessSessionsCommand === "function");
assert(typeof ListRunsCommand === "function");
assert(typeof ListSamplesCommand === "function");
assert(typeof ListSuitesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTestGridProjectsCommand === "function");
assert(typeof ListTestGridSessionActionsCommand === "function");
assert(typeof ListTestGridSessionArtifactsCommand === "function");
assert(typeof ListTestGridSessionsCommand === "function");
assert(typeof ListTestsCommand === "function");
assert(typeof ListUniqueProblemsCommand === "function");
assert(typeof ListUploadsCommand === "function");
assert(typeof ListVPCEConfigurationsCommand === "function");
assert(typeof PurchaseOfferingCommand === "function");
assert(typeof RenewOfferingCommand === "function");
assert(typeof ScheduleRunCommand === "function");
assert(typeof StopJobCommand === "function");
assert(typeof StopRemoteAccessSessionCommand === "function");
assert(typeof StopRunCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDeviceInstanceCommand === "function");
assert(typeof UpdateDevicePoolCommand === "function");
assert(typeof UpdateInstanceProfileCommand === "function");
assert(typeof UpdateNetworkProfileCommand === "function");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateTestGridProjectCommand === "function");
assert(typeof UpdateUploadCommand === "function");
assert(typeof UpdateVPCEConfigurationCommand === "function");
// enums
assert(typeof ArtifactCategory === "object");
assert(typeof ArtifactType === "object");
assert(typeof BillingMethod === "object");
assert(typeof CurrencyCode === "object");
assert(typeof DeviceAttribute === "object");
assert(typeof DeviceAvailability === "object");
assert(typeof DeviceFilterAttribute === "object");
assert(typeof DeviceFormFactor === "object");
assert(typeof DevicePlatform === "object");
assert(typeof DevicePoolType === "object");
assert(typeof ExecutionResult === "object");
assert(typeof ExecutionResultCode === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof InstanceStatus === "object");
assert(typeof InteractionMode === "object");
assert(typeof NetworkProfileType === "object");
assert(typeof OfferingTransactionType === "object");
assert(typeof OfferingType === "object");
assert(typeof RecurringChargeFrequency === "object");
assert(typeof RuleOperator === "object");
assert(typeof SampleType === "object");
assert(typeof TestGridSessionArtifactCategory === "object");
assert(typeof TestGridSessionArtifactType === "object");
assert(typeof TestGridSessionStatus === "object");
assert(typeof TestType === "object");
assert(typeof UploadCategory === "object");
assert(typeof UploadStatus === "object");
assert(typeof UploadType === "object");
// errors
assert(DeviceFarmServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetOfferingStatus === "function");
assert(typeof paginateListArtifacts === "function");
assert(typeof paginateListDevicePools === "function");
assert(typeof paginateListDevices === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListOfferingTransactions === "function");
assert(typeof paginateListOfferings === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListRuns === "function");
assert(typeof paginateListSamples === "function");
assert(typeof paginateListSuites === "function");
assert(typeof paginateListTestGridProjects === "function");
assert(typeof paginateListTestGridSessionActions === "function");
assert(typeof paginateListTestGridSessionArtifacts === "function");
assert(typeof paginateListTestGridSessions === "function");
assert(typeof paginateListTests === "function");
assert(typeof paginateListUniqueProblems === "function");
assert(typeof paginateListUploads === "function");
console.log(`DeviceFarm index test passed.`);
