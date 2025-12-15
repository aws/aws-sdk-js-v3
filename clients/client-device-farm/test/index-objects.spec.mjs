import {
  AccountSettings$,
  ArgumentException,
  ArgumentException$,
  Artifact$,
  ArtifactCategory,
  ArtifactType,
  BillingMethod,
  CPU$,
  CannotDeleteException,
  CannotDeleteException$,
  Counters$,
  CreateDevicePool$,
  CreateDevicePoolCommand,
  CreateDevicePoolRequest$,
  CreateDevicePoolResult$,
  CreateInstanceProfile$,
  CreateInstanceProfileCommand,
  CreateInstanceProfileRequest$,
  CreateInstanceProfileResult$,
  CreateNetworkProfile$,
  CreateNetworkProfileCommand,
  CreateNetworkProfileRequest$,
  CreateNetworkProfileResult$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectRequest$,
  CreateProjectResult$,
  CreateRemoteAccessSession$,
  CreateRemoteAccessSessionCommand,
  CreateRemoteAccessSessionConfiguration$,
  CreateRemoteAccessSessionRequest$,
  CreateRemoteAccessSessionResult$,
  CreateTestGridProject$,
  CreateTestGridProjectCommand,
  CreateTestGridProjectRequest$,
  CreateTestGridProjectResult$,
  CreateTestGridUrl$,
  CreateTestGridUrlCommand,
  CreateTestGridUrlRequest$,
  CreateTestGridUrlResult$,
  CreateUpload$,
  CreateUploadCommand,
  CreateUploadRequest$,
  CreateUploadResult$,
  CreateVPCEConfiguration$,
  CreateVPCEConfigurationCommand,
  CreateVPCEConfigurationRequest$,
  CreateVPCEConfigurationResult$,
  CurrencyCode,
  CustomerArtifactPaths$,
  DeleteDevicePool$,
  DeleteDevicePoolCommand,
  DeleteDevicePoolRequest$,
  DeleteDevicePoolResult$,
  DeleteInstanceProfile$,
  DeleteInstanceProfileCommand,
  DeleteInstanceProfileRequest$,
  DeleteInstanceProfileResult$,
  DeleteNetworkProfile$,
  DeleteNetworkProfileCommand,
  DeleteNetworkProfileRequest$,
  DeleteNetworkProfileResult$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectRequest$,
  DeleteProjectResult$,
  DeleteRemoteAccessSession$,
  DeleteRemoteAccessSessionCommand,
  DeleteRemoteAccessSessionRequest$,
  DeleteRemoteAccessSessionResult$,
  DeleteRun$,
  DeleteRunCommand,
  DeleteRunRequest$,
  DeleteRunResult$,
  DeleteTestGridProject$,
  DeleteTestGridProjectCommand,
  DeleteTestGridProjectRequest$,
  DeleteTestGridProjectResult$,
  DeleteUpload$,
  DeleteUploadCommand,
  DeleteUploadRequest$,
  DeleteUploadResult$,
  DeleteVPCEConfiguration$,
  DeleteVPCEConfigurationCommand,
  DeleteVPCEConfigurationRequest$,
  DeleteVPCEConfigurationResult$,
  Device$,
  DeviceAttribute,
  DeviceAvailability,
  DeviceFarm,
  DeviceFarmClient,
  DeviceFarmServiceException,
  DeviceFilter$,
  DeviceFilterAttribute,
  DeviceFormFactor,
  DeviceInstance$,
  DeviceMinutes$,
  DevicePlatform,
  DevicePool$,
  DevicePoolCompatibilityResult$,
  DevicePoolType,
  DeviceProxy$,
  DeviceSelectionConfiguration$,
  DeviceSelectionResult$,
  EnvironmentVariable$,
  ExecutionConfiguration$,
  ExecutionResult,
  ExecutionResultCode,
  ExecutionStatus,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsRequest$,
  GetAccountSettingsResult$,
  GetDevice$,
  GetDeviceCommand,
  GetDeviceInstance$,
  GetDeviceInstanceCommand,
  GetDeviceInstanceRequest$,
  GetDeviceInstanceResult$,
  GetDevicePool$,
  GetDevicePoolCommand,
  GetDevicePoolCompatibility$,
  GetDevicePoolCompatibilityCommand,
  GetDevicePoolCompatibilityRequest$,
  GetDevicePoolCompatibilityResult$,
  GetDevicePoolRequest$,
  GetDevicePoolResult$,
  GetDeviceRequest$,
  GetDeviceResult$,
  GetInstanceProfile$,
  GetInstanceProfileCommand,
  GetInstanceProfileRequest$,
  GetInstanceProfileResult$,
  GetJob$,
  GetJobCommand,
  GetJobRequest$,
  GetJobResult$,
  GetNetworkProfile$,
  GetNetworkProfileCommand,
  GetNetworkProfileRequest$,
  GetNetworkProfileResult$,
  GetOfferingStatus$,
  GetOfferingStatusCommand,
  GetOfferingStatusRequest$,
  GetOfferingStatusResult$,
  GetProject$,
  GetProjectCommand,
  GetProjectRequest$,
  GetProjectResult$,
  GetRemoteAccessSession$,
  GetRemoteAccessSessionCommand,
  GetRemoteAccessSessionRequest$,
  GetRemoteAccessSessionResult$,
  GetRun$,
  GetRunCommand,
  GetRunRequest$,
  GetRunResult$,
  GetSuite$,
  GetSuiteCommand,
  GetSuiteRequest$,
  GetSuiteResult$,
  GetTest$,
  GetTestCommand,
  GetTestGridProject$,
  GetTestGridProjectCommand,
  GetTestGridProjectRequest$,
  GetTestGridProjectResult$,
  GetTestGridSession$,
  GetTestGridSessionCommand,
  GetTestGridSessionRequest$,
  GetTestGridSessionResult$,
  GetTestRequest$,
  GetTestResult$,
  GetUpload$,
  GetUploadCommand,
  GetUploadRequest$,
  GetUploadResult$,
  GetVPCEConfiguration$,
  GetVPCEConfigurationCommand,
  GetVPCEConfigurationRequest$,
  GetVPCEConfigurationResult$,
  IdempotencyException,
  IdempotencyException$,
  IncompatibilityMessage$,
  InstallToRemoteAccessSession$,
  InstallToRemoteAccessSessionCommand,
  InstallToRemoteAccessSessionRequest$,
  InstallToRemoteAccessSessionResult$,
  InstanceProfile$,
  InstanceStatus,
  InteractionMode,
  InternalServiceException,
  InternalServiceException$,
  InvalidOperationException,
  InvalidOperationException$,
  Job$,
  LimitExceededException,
  LimitExceededException$,
  ListArtifacts$,
  ListArtifactsCommand,
  ListArtifactsRequest$,
  ListArtifactsResult$,
  ListDeviceInstances$,
  ListDeviceInstancesCommand,
  ListDeviceInstancesRequest$,
  ListDeviceInstancesResult$,
  ListDevicePools$,
  ListDevicePoolsCommand,
  ListDevicePoolsRequest$,
  ListDevicePoolsResult$,
  ListDevices$,
  ListDevicesCommand,
  ListDevicesRequest$,
  ListDevicesResult$,
  ListInstanceProfiles$,
  ListInstanceProfilesCommand,
  ListInstanceProfilesRequest$,
  ListInstanceProfilesResult$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResult$,
  ListNetworkProfiles$,
  ListNetworkProfilesCommand,
  ListNetworkProfilesRequest$,
  ListNetworkProfilesResult$,
  ListOfferingPromotions$,
  ListOfferingPromotionsCommand,
  ListOfferingPromotionsRequest$,
  ListOfferingPromotionsResult$,
  ListOfferingTransactions$,
  ListOfferingTransactionsCommand,
  ListOfferingTransactionsRequest$,
  ListOfferingTransactionsResult$,
  ListOfferings$,
  ListOfferingsCommand,
  ListOfferingsRequest$,
  ListOfferingsResult$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsRequest$,
  ListProjectsResult$,
  ListRemoteAccessSessions$,
  ListRemoteAccessSessionsCommand,
  ListRemoteAccessSessionsRequest$,
  ListRemoteAccessSessionsResult$,
  ListRuns$,
  ListRunsCommand,
  ListRunsRequest$,
  ListRunsResult$,
  ListSamples$,
  ListSamplesCommand,
  ListSamplesRequest$,
  ListSamplesResult$,
  ListSuites$,
  ListSuitesCommand,
  ListSuitesRequest$,
  ListSuitesResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTestGridProjects$,
  ListTestGridProjectsCommand,
  ListTestGridProjectsRequest$,
  ListTestGridProjectsResult$,
  ListTestGridSessionActions$,
  ListTestGridSessionActionsCommand,
  ListTestGridSessionActionsRequest$,
  ListTestGridSessionActionsResult$,
  ListTestGridSessionArtifacts$,
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionArtifactsRequest$,
  ListTestGridSessionArtifactsResult$,
  ListTestGridSessions$,
  ListTestGridSessionsCommand,
  ListTestGridSessionsRequest$,
  ListTestGridSessionsResult$,
  ListTests$,
  ListTestsCommand,
  ListTestsRequest$,
  ListTestsResult$,
  ListUniqueProblems$,
  ListUniqueProblemsCommand,
  ListUniqueProblemsRequest$,
  ListUniqueProblemsResult$,
  ListUploads$,
  ListUploadsCommand,
  ListUploadsRequest$,
  ListUploadsResult$,
  ListVPCEConfigurations$,
  ListVPCEConfigurationsCommand,
  ListVPCEConfigurationsRequest$,
  ListVPCEConfigurationsResult$,
  Location$,
  MonetaryAmount$,
  NetworkProfile$,
  NetworkProfileType,
  NotEligibleException,
  NotEligibleException$,
  NotFoundException,
  NotFoundException$,
  Offering$,
  OfferingPromotion$,
  OfferingStatus$,
  OfferingTransaction$,
  OfferingTransactionType,
  OfferingType,
  Problem$,
  ProblemDetail$,
  Project$,
  PurchaseOffering$,
  PurchaseOfferingCommand,
  PurchaseOfferingRequest$,
  PurchaseOfferingResult$,
  Radios$,
  RecurringCharge$,
  RecurringChargeFrequency,
  RemoteAccessEndpoints$,
  RemoteAccessSession$,
  RenewOffering$,
  RenewOfferingCommand,
  RenewOfferingRequest$,
  RenewOfferingResult$,
  Resolution$,
  Rule$,
  RuleOperator,
  Run$,
  Sample$,
  SampleType,
  ScheduleRun$,
  ScheduleRunCommand,
  ScheduleRunConfiguration$,
  ScheduleRunRequest$,
  ScheduleRunResult$,
  ScheduleRunTest$,
  ServiceAccountException,
  ServiceAccountException$,
  StopJob$,
  StopJobCommand,
  StopJobRequest$,
  StopJobResult$,
  StopRemoteAccessSession$,
  StopRemoteAccessSessionCommand,
  StopRemoteAccessSessionRequest$,
  StopRemoteAccessSessionResult$,
  StopRun$,
  StopRunCommand,
  StopRunRequest$,
  StopRunResult$,
  Suite$,
  Tag$,
  TagOperationException,
  TagOperationException$,
  TagPolicyException,
  TagPolicyException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Test$,
  TestGridProject$,
  TestGridSession$,
  TestGridSessionAction$,
  TestGridSessionArtifact$,
  TestGridSessionArtifactCategory,
  TestGridSessionArtifactType,
  TestGridSessionStatus,
  TestGridVpcConfig$,
  TestType,
  TooManyTagsException,
  TooManyTagsException$,
  TrialMinutes$,
  UniqueProblem$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDeviceInstance$,
  UpdateDeviceInstanceCommand,
  UpdateDeviceInstanceRequest$,
  UpdateDeviceInstanceResult$,
  UpdateDevicePool$,
  UpdateDevicePoolCommand,
  UpdateDevicePoolRequest$,
  UpdateDevicePoolResult$,
  UpdateInstanceProfile$,
  UpdateInstanceProfileCommand,
  UpdateInstanceProfileRequest$,
  UpdateInstanceProfileResult$,
  UpdateNetworkProfile$,
  UpdateNetworkProfileCommand,
  UpdateNetworkProfileRequest$,
  UpdateNetworkProfileResult$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectRequest$,
  UpdateProjectResult$,
  UpdateTestGridProject$,
  UpdateTestGridProjectCommand,
  UpdateTestGridProjectRequest$,
  UpdateTestGridProjectResult$,
  UpdateUpload$,
  UpdateUploadCommand,
  UpdateUploadRequest$,
  UpdateUploadResult$,
  UpdateVPCEConfiguration$,
  UpdateVPCEConfigurationCommand,
  UpdateVPCEConfigurationRequest$,
  UpdateVPCEConfigurationResult$,
  Upload$,
  UploadCategory,
  UploadStatus,
  UploadType,
  VPCEConfiguration$,
  VpcConfig$,
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
assert(typeof CreateDevicePool$ === "object");
assert(typeof CreateInstanceProfileCommand === "function");
assert(typeof CreateInstanceProfile$ === "object");
assert(typeof CreateNetworkProfileCommand === "function");
assert(typeof CreateNetworkProfile$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateRemoteAccessSessionCommand === "function");
assert(typeof CreateRemoteAccessSession$ === "object");
assert(typeof CreateTestGridProjectCommand === "function");
assert(typeof CreateTestGridProject$ === "object");
assert(typeof CreateTestGridUrlCommand === "function");
assert(typeof CreateTestGridUrl$ === "object");
assert(typeof CreateUploadCommand === "function");
assert(typeof CreateUpload$ === "object");
assert(typeof CreateVPCEConfigurationCommand === "function");
assert(typeof CreateVPCEConfiguration$ === "object");
assert(typeof DeleteDevicePoolCommand === "function");
assert(typeof DeleteDevicePool$ === "object");
assert(typeof DeleteInstanceProfileCommand === "function");
assert(typeof DeleteInstanceProfile$ === "object");
assert(typeof DeleteNetworkProfileCommand === "function");
assert(typeof DeleteNetworkProfile$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteRemoteAccessSessionCommand === "function");
assert(typeof DeleteRemoteAccessSession$ === "object");
assert(typeof DeleteRunCommand === "function");
assert(typeof DeleteRun$ === "object");
assert(typeof DeleteTestGridProjectCommand === "function");
assert(typeof DeleteTestGridProject$ === "object");
assert(typeof DeleteUploadCommand === "function");
assert(typeof DeleteUpload$ === "object");
assert(typeof DeleteVPCEConfigurationCommand === "function");
assert(typeof DeleteVPCEConfiguration$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetDeviceCommand === "function");
assert(typeof GetDevice$ === "object");
assert(typeof GetDeviceInstanceCommand === "function");
assert(typeof GetDeviceInstance$ === "object");
assert(typeof GetDevicePoolCommand === "function");
assert(typeof GetDevicePool$ === "object");
assert(typeof GetDevicePoolCompatibilityCommand === "function");
assert(typeof GetDevicePoolCompatibility$ === "object");
assert(typeof GetInstanceProfileCommand === "function");
assert(typeof GetInstanceProfile$ === "object");
assert(typeof GetJobCommand === "function");
assert(typeof GetJob$ === "object");
assert(typeof GetNetworkProfileCommand === "function");
assert(typeof GetNetworkProfile$ === "object");
assert(typeof GetOfferingStatusCommand === "function");
assert(typeof GetOfferingStatus$ === "object");
assert(typeof GetProjectCommand === "function");
assert(typeof GetProject$ === "object");
assert(typeof GetRemoteAccessSessionCommand === "function");
assert(typeof GetRemoteAccessSession$ === "object");
assert(typeof GetRunCommand === "function");
assert(typeof GetRun$ === "object");
assert(typeof GetSuiteCommand === "function");
assert(typeof GetSuite$ === "object");
assert(typeof GetTestCommand === "function");
assert(typeof GetTest$ === "object");
assert(typeof GetTestGridProjectCommand === "function");
assert(typeof GetTestGridProject$ === "object");
assert(typeof GetTestGridSessionCommand === "function");
assert(typeof GetTestGridSession$ === "object");
assert(typeof GetUploadCommand === "function");
assert(typeof GetUpload$ === "object");
assert(typeof GetVPCEConfigurationCommand === "function");
assert(typeof GetVPCEConfiguration$ === "object");
assert(typeof InstallToRemoteAccessSessionCommand === "function");
assert(typeof InstallToRemoteAccessSession$ === "object");
assert(typeof ListArtifactsCommand === "function");
assert(typeof ListArtifacts$ === "object");
assert(typeof ListDeviceInstancesCommand === "function");
assert(typeof ListDeviceInstances$ === "object");
assert(typeof ListDevicePoolsCommand === "function");
assert(typeof ListDevicePools$ === "object");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListDevices$ === "object");
assert(typeof ListInstanceProfilesCommand === "function");
assert(typeof ListInstanceProfiles$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListNetworkProfilesCommand === "function");
assert(typeof ListNetworkProfiles$ === "object");
assert(typeof ListOfferingPromotionsCommand === "function");
assert(typeof ListOfferingPromotions$ === "object");
assert(typeof ListOfferingsCommand === "function");
assert(typeof ListOfferings$ === "object");
assert(typeof ListOfferingTransactionsCommand === "function");
assert(typeof ListOfferingTransactions$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListRemoteAccessSessionsCommand === "function");
assert(typeof ListRemoteAccessSessions$ === "object");
assert(typeof ListRunsCommand === "function");
assert(typeof ListRuns$ === "object");
assert(typeof ListSamplesCommand === "function");
assert(typeof ListSamples$ === "object");
assert(typeof ListSuitesCommand === "function");
assert(typeof ListSuites$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTestGridProjectsCommand === "function");
assert(typeof ListTestGridProjects$ === "object");
assert(typeof ListTestGridSessionActionsCommand === "function");
assert(typeof ListTestGridSessionActions$ === "object");
assert(typeof ListTestGridSessionArtifactsCommand === "function");
assert(typeof ListTestGridSessionArtifacts$ === "object");
assert(typeof ListTestGridSessionsCommand === "function");
assert(typeof ListTestGridSessions$ === "object");
assert(typeof ListTestsCommand === "function");
assert(typeof ListTests$ === "object");
assert(typeof ListUniqueProblemsCommand === "function");
assert(typeof ListUniqueProblems$ === "object");
assert(typeof ListUploadsCommand === "function");
assert(typeof ListUploads$ === "object");
assert(typeof ListVPCEConfigurationsCommand === "function");
assert(typeof ListVPCEConfigurations$ === "object");
assert(typeof PurchaseOfferingCommand === "function");
assert(typeof PurchaseOffering$ === "object");
assert(typeof RenewOfferingCommand === "function");
assert(typeof RenewOffering$ === "object");
assert(typeof ScheduleRunCommand === "function");
assert(typeof ScheduleRun$ === "object");
assert(typeof StopJobCommand === "function");
assert(typeof StopJob$ === "object");
assert(typeof StopRemoteAccessSessionCommand === "function");
assert(typeof StopRemoteAccessSession$ === "object");
assert(typeof StopRunCommand === "function");
assert(typeof StopRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDeviceInstanceCommand === "function");
assert(typeof UpdateDeviceInstance$ === "object");
assert(typeof UpdateDevicePoolCommand === "function");
assert(typeof UpdateDevicePool$ === "object");
assert(typeof UpdateInstanceProfileCommand === "function");
assert(typeof UpdateInstanceProfile$ === "object");
assert(typeof UpdateNetworkProfileCommand === "function");
assert(typeof UpdateNetworkProfile$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateTestGridProjectCommand === "function");
assert(typeof UpdateTestGridProject$ === "object");
assert(typeof UpdateUploadCommand === "function");
assert(typeof UpdateUpload$ === "object");
assert(typeof UpdateVPCEConfigurationCommand === "function");
assert(typeof UpdateVPCEConfiguration$ === "object");
// structural schemas
assert(typeof AccountSettings$ === "object");
assert(typeof Artifact$ === "object");
assert(typeof Counters$ === "object");
assert(typeof CPU$ === "object");
assert(typeof CreateDevicePoolRequest$ === "object");
assert(typeof CreateDevicePoolResult$ === "object");
assert(typeof CreateInstanceProfileRequest$ === "object");
assert(typeof CreateInstanceProfileResult$ === "object");
assert(typeof CreateNetworkProfileRequest$ === "object");
assert(typeof CreateNetworkProfileResult$ === "object");
assert(typeof CreateProjectRequest$ === "object");
assert(typeof CreateProjectResult$ === "object");
assert(typeof CreateRemoteAccessSessionConfiguration$ === "object");
assert(typeof CreateRemoteAccessSessionRequest$ === "object");
assert(typeof CreateRemoteAccessSessionResult$ === "object");
assert(typeof CreateTestGridProjectRequest$ === "object");
assert(typeof CreateTestGridProjectResult$ === "object");
assert(typeof CreateTestGridUrlRequest$ === "object");
assert(typeof CreateTestGridUrlResult$ === "object");
assert(typeof CreateUploadRequest$ === "object");
assert(typeof CreateUploadResult$ === "object");
assert(typeof CreateVPCEConfigurationRequest$ === "object");
assert(typeof CreateVPCEConfigurationResult$ === "object");
assert(typeof CustomerArtifactPaths$ === "object");
assert(typeof DeleteDevicePoolRequest$ === "object");
assert(typeof DeleteDevicePoolResult$ === "object");
assert(typeof DeleteInstanceProfileRequest$ === "object");
assert(typeof DeleteInstanceProfileResult$ === "object");
assert(typeof DeleteNetworkProfileRequest$ === "object");
assert(typeof DeleteNetworkProfileResult$ === "object");
assert(typeof DeleteProjectRequest$ === "object");
assert(typeof DeleteProjectResult$ === "object");
assert(typeof DeleteRemoteAccessSessionRequest$ === "object");
assert(typeof DeleteRemoteAccessSessionResult$ === "object");
assert(typeof DeleteRunRequest$ === "object");
assert(typeof DeleteRunResult$ === "object");
assert(typeof DeleteTestGridProjectRequest$ === "object");
assert(typeof DeleteTestGridProjectResult$ === "object");
assert(typeof DeleteUploadRequest$ === "object");
assert(typeof DeleteUploadResult$ === "object");
assert(typeof DeleteVPCEConfigurationRequest$ === "object");
assert(typeof DeleteVPCEConfigurationResult$ === "object");
assert(typeof Device$ === "object");
assert(typeof DeviceFilter$ === "object");
assert(typeof DeviceInstance$ === "object");
assert(typeof DeviceMinutes$ === "object");
assert(typeof DevicePool$ === "object");
assert(typeof DevicePoolCompatibilityResult$ === "object");
assert(typeof DeviceProxy$ === "object");
assert(typeof DeviceSelectionConfiguration$ === "object");
assert(typeof DeviceSelectionResult$ === "object");
assert(typeof EnvironmentVariable$ === "object");
assert(typeof ExecutionConfiguration$ === "object");
assert(typeof GetAccountSettingsRequest$ === "object");
assert(typeof GetAccountSettingsResult$ === "object");
assert(typeof GetDeviceInstanceRequest$ === "object");
assert(typeof GetDeviceInstanceResult$ === "object");
assert(typeof GetDevicePoolCompatibilityRequest$ === "object");
assert(typeof GetDevicePoolCompatibilityResult$ === "object");
assert(typeof GetDevicePoolRequest$ === "object");
assert(typeof GetDevicePoolResult$ === "object");
assert(typeof GetDeviceRequest$ === "object");
assert(typeof GetDeviceResult$ === "object");
assert(typeof GetInstanceProfileRequest$ === "object");
assert(typeof GetInstanceProfileResult$ === "object");
assert(typeof GetJobRequest$ === "object");
assert(typeof GetJobResult$ === "object");
assert(typeof GetNetworkProfileRequest$ === "object");
assert(typeof GetNetworkProfileResult$ === "object");
assert(typeof GetOfferingStatusRequest$ === "object");
assert(typeof GetOfferingStatusResult$ === "object");
assert(typeof GetProjectRequest$ === "object");
assert(typeof GetProjectResult$ === "object");
assert(typeof GetRemoteAccessSessionRequest$ === "object");
assert(typeof GetRemoteAccessSessionResult$ === "object");
assert(typeof GetRunRequest$ === "object");
assert(typeof GetRunResult$ === "object");
assert(typeof GetSuiteRequest$ === "object");
assert(typeof GetSuiteResult$ === "object");
assert(typeof GetTestGridProjectRequest$ === "object");
assert(typeof GetTestGridProjectResult$ === "object");
assert(typeof GetTestGridSessionRequest$ === "object");
assert(typeof GetTestGridSessionResult$ === "object");
assert(typeof GetTestRequest$ === "object");
assert(typeof GetTestResult$ === "object");
assert(typeof GetUploadRequest$ === "object");
assert(typeof GetUploadResult$ === "object");
assert(typeof GetVPCEConfigurationRequest$ === "object");
assert(typeof GetVPCEConfigurationResult$ === "object");
assert(typeof IncompatibilityMessage$ === "object");
assert(typeof InstallToRemoteAccessSessionRequest$ === "object");
assert(typeof InstallToRemoteAccessSessionResult$ === "object");
assert(typeof InstanceProfile$ === "object");
assert(typeof Job$ === "object");
assert(typeof ListArtifactsRequest$ === "object");
assert(typeof ListArtifactsResult$ === "object");
assert(typeof ListDeviceInstancesRequest$ === "object");
assert(typeof ListDeviceInstancesResult$ === "object");
assert(typeof ListDevicePoolsRequest$ === "object");
assert(typeof ListDevicePoolsResult$ === "object");
assert(typeof ListDevicesRequest$ === "object");
assert(typeof ListDevicesResult$ === "object");
assert(typeof ListInstanceProfilesRequest$ === "object");
assert(typeof ListInstanceProfilesResult$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResult$ === "object");
assert(typeof ListNetworkProfilesRequest$ === "object");
assert(typeof ListNetworkProfilesResult$ === "object");
assert(typeof ListOfferingPromotionsRequest$ === "object");
assert(typeof ListOfferingPromotionsResult$ === "object");
assert(typeof ListOfferingsRequest$ === "object");
assert(typeof ListOfferingsResult$ === "object");
assert(typeof ListOfferingTransactionsRequest$ === "object");
assert(typeof ListOfferingTransactionsResult$ === "object");
assert(typeof ListProjectsRequest$ === "object");
assert(typeof ListProjectsResult$ === "object");
assert(typeof ListRemoteAccessSessionsRequest$ === "object");
assert(typeof ListRemoteAccessSessionsResult$ === "object");
assert(typeof ListRunsRequest$ === "object");
assert(typeof ListRunsResult$ === "object");
assert(typeof ListSamplesRequest$ === "object");
assert(typeof ListSamplesResult$ === "object");
assert(typeof ListSuitesRequest$ === "object");
assert(typeof ListSuitesResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTestGridProjectsRequest$ === "object");
assert(typeof ListTestGridProjectsResult$ === "object");
assert(typeof ListTestGridSessionActionsRequest$ === "object");
assert(typeof ListTestGridSessionActionsResult$ === "object");
assert(typeof ListTestGridSessionArtifactsRequest$ === "object");
assert(typeof ListTestGridSessionArtifactsResult$ === "object");
assert(typeof ListTestGridSessionsRequest$ === "object");
assert(typeof ListTestGridSessionsResult$ === "object");
assert(typeof ListTestsRequest$ === "object");
assert(typeof ListTestsResult$ === "object");
assert(typeof ListUniqueProblemsRequest$ === "object");
assert(typeof ListUniqueProblemsResult$ === "object");
assert(typeof ListUploadsRequest$ === "object");
assert(typeof ListUploadsResult$ === "object");
assert(typeof ListVPCEConfigurationsRequest$ === "object");
assert(typeof ListVPCEConfigurationsResult$ === "object");
assert(typeof Location$ === "object");
assert(typeof MonetaryAmount$ === "object");
assert(typeof NetworkProfile$ === "object");
assert(typeof Offering$ === "object");
assert(typeof OfferingPromotion$ === "object");
assert(typeof OfferingStatus$ === "object");
assert(typeof OfferingTransaction$ === "object");
assert(typeof Problem$ === "object");
assert(typeof ProblemDetail$ === "object");
assert(typeof Project$ === "object");
assert(typeof PurchaseOfferingRequest$ === "object");
assert(typeof PurchaseOfferingResult$ === "object");
assert(typeof Radios$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof RemoteAccessEndpoints$ === "object");
assert(typeof RemoteAccessSession$ === "object");
assert(typeof RenewOfferingRequest$ === "object");
assert(typeof RenewOfferingResult$ === "object");
assert(typeof Resolution$ === "object");
assert(typeof Rule$ === "object");
assert(typeof Run$ === "object");
assert(typeof Sample$ === "object");
assert(typeof ScheduleRunConfiguration$ === "object");
assert(typeof ScheduleRunRequest$ === "object");
assert(typeof ScheduleRunResult$ === "object");
assert(typeof ScheduleRunTest$ === "object");
assert(typeof StopJobRequest$ === "object");
assert(typeof StopJobResult$ === "object");
assert(typeof StopRemoteAccessSessionRequest$ === "object");
assert(typeof StopRemoteAccessSessionResult$ === "object");
assert(typeof StopRunRequest$ === "object");
assert(typeof StopRunResult$ === "object");
assert(typeof Suite$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Test$ === "object");
assert(typeof TestGridProject$ === "object");
assert(typeof TestGridSession$ === "object");
assert(typeof TestGridSessionAction$ === "object");
assert(typeof TestGridSessionArtifact$ === "object");
assert(typeof TestGridVpcConfig$ === "object");
assert(typeof TrialMinutes$ === "object");
assert(typeof UniqueProblem$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDeviceInstanceRequest$ === "object");
assert(typeof UpdateDeviceInstanceResult$ === "object");
assert(typeof UpdateDevicePoolRequest$ === "object");
assert(typeof UpdateDevicePoolResult$ === "object");
assert(typeof UpdateInstanceProfileRequest$ === "object");
assert(typeof UpdateInstanceProfileResult$ === "object");
assert(typeof UpdateNetworkProfileRequest$ === "object");
assert(typeof UpdateNetworkProfileResult$ === "object");
assert(typeof UpdateProjectRequest$ === "object");
assert(typeof UpdateProjectResult$ === "object");
assert(typeof UpdateTestGridProjectRequest$ === "object");
assert(typeof UpdateTestGridProjectResult$ === "object");
assert(typeof UpdateUploadRequest$ === "object");
assert(typeof UpdateUploadResult$ === "object");
assert(typeof UpdateVPCEConfigurationRequest$ === "object");
assert(typeof UpdateVPCEConfigurationResult$ === "object");
assert(typeof Upload$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof VPCEConfiguration$ === "object");
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
assert(ArgumentException.prototype instanceof DeviceFarmServiceException);
assert(typeof ArgumentException$ === "object");
assert(CannotDeleteException.prototype instanceof DeviceFarmServiceException);
assert(typeof CannotDeleteException$ === "object");
assert(IdempotencyException.prototype instanceof DeviceFarmServiceException);
assert(typeof IdempotencyException$ === "object");
assert(InternalServiceException.prototype instanceof DeviceFarmServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidOperationException.prototype instanceof DeviceFarmServiceException);
assert(typeof InvalidOperationException$ === "object");
assert(LimitExceededException.prototype instanceof DeviceFarmServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotEligibleException.prototype instanceof DeviceFarmServiceException);
assert(typeof NotEligibleException$ === "object");
assert(NotFoundException.prototype instanceof DeviceFarmServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceAccountException.prototype instanceof DeviceFarmServiceException);
assert(typeof ServiceAccountException$ === "object");
assert(TagOperationException.prototype instanceof DeviceFarmServiceException);
assert(typeof TagOperationException$ === "object");
assert(TagPolicyException.prototype instanceof DeviceFarmServiceException);
assert(typeof TagPolicyException$ === "object");
assert(TooManyTagsException.prototype instanceof DeviceFarmServiceException);
assert(typeof TooManyTagsException$ === "object");
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
