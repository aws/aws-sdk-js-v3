import {
  AccessDeniedException,
  AccessDeniedException$,
  Architecture,
  BuildState,
  Capability,
  Chipset,
  CloudWatchLogging$,
  CodeArtifact$,
  ConflictException,
  ConflictException$,
  CpuConfiguration$,
  CreateMicrovmAuthToken$,
  CreateMicrovmAuthTokenCommand,
  CreateMicrovmAuthTokenRequest$,
  CreateMicrovmAuthTokenResponse$,
  CreateMicrovmImage$,
  CreateMicrovmImageCommand,
  CreateMicrovmImageRequest$,
  CreateMicrovmImageResponse$,
  CreateMicrovmShellAuthToken$,
  CreateMicrovmShellAuthTokenCommand,
  CreateMicrovmShellAuthTokenRequest$,
  CreateMicrovmShellAuthTokenResponse$,
  DeleteMicrovmImage$,
  DeleteMicrovmImageCommand,
  DeleteMicrovmImageInput$,
  DeleteMicrovmImageOutput$,
  DeleteMicrovmImageVersion$,
  DeleteMicrovmImageVersionCommand,
  DeleteMicrovmImageVersionInput$,
  DeleteMicrovmImageVersionOutput$,
  GetMicrovm$,
  GetMicrovmCommand,
  GetMicrovmImage$,
  GetMicrovmImageBuild$,
  GetMicrovmImageBuildCommand,
  GetMicrovmImageBuildInput$,
  GetMicrovmImageBuildOutput$,
  GetMicrovmImageCommand,
  GetMicrovmImageInput$,
  GetMicrovmImageOutput$,
  GetMicrovmImageVersion$,
  GetMicrovmImageVersionCommand,
  GetMicrovmImageVersionInput$,
  GetMicrovmImageVersionOutput$,
  GetMicrovmRequest$,
  GetMicrovmResponse$,
  Hooks$,
  HookState,
  IdlePolicy$,
  InternalServerException,
  InternalServerException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  LambdaMicrovms,
  LambdaMicrovmsClient,
  LambdaMicrovmsServiceException,
  ListManagedMicrovmImages$,
  ListManagedMicrovmImagesCommand,
  ListManagedMicrovmImagesInput$,
  ListManagedMicrovmImagesOutput$,
  ListManagedMicrovmImageVersions$,
  ListManagedMicrovmImageVersionsCommand,
  ListManagedMicrovmImageVersionsInput$,
  ListManagedMicrovmImageVersionsOutput$,
  ListMicrovmImageBuilds$,
  ListMicrovmImageBuildsCommand,
  ListMicrovmImageBuildsInput$,
  ListMicrovmImageBuildsOutput$,
  ListMicrovmImages$,
  ListMicrovmImagesCommand,
  ListMicrovmImagesRequest$,
  ListMicrovmImagesResponse$,
  ListMicrovmImageVersions$,
  ListMicrovmImageVersionsCommand,
  ListMicrovmImageVersionsInput$,
  ListMicrovmImageVersionsOutput$,
  ListMicrovms$,
  ListMicrovmsCommand,
  ListMicrovmsRequest$,
  ListMicrovmsResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  Logging$,
  LoggingDisabled$,
  ManagedMicrovmImageSummary$,
  ManagedMicrovmImageVersion$,
  MicrovmHooks$,
  MicrovmImageBuildSummary$,
  MicrovmImageHooks$,
  MicrovmImageState,
  MicrovmImageSummary$,
  MicrovmImageVersionState,
  MicrovmImageVersionStatus,
  MicrovmImageVersionSummary$,
  MicrovmItem$,
  MicrovmState,
  paginateListManagedMicrovmImages,
  paginateListManagedMicrovmImageVersions,
  paginateListMicrovmImageBuilds,
  paginateListMicrovmImages,
  paginateListMicrovmImageVersions,
  paginateListMicrovms,
  PortRange$,
  PortSpecification$,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Resources$,
  ResumeMicrovm$,
  ResumeMicrovmCommand,
  ResumeMicrovmRequest$,
  ResumeMicrovmResponse$,
  RunMicrovm$,
  RunMicrovmCommand,
  RunMicrovmRequest$,
  RunMicrovmResponse$,
  ServiceException,
  ServiceException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnapshotBuild$,
  SuspendMicrovm$,
  SuspendMicrovmCommand,
  SuspendMicrovmRequest$,
  SuspendMicrovmResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TerminateMicrovm$,
  TerminateMicrovmCommand,
  TerminateMicrovmRequest$,
  TerminateMicrovmResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateMicrovmImage$,
  UpdateMicrovmImageCommand,
  UpdateMicrovmImageRequest$,
  UpdateMicrovmImageResponse$,
  UpdateMicrovmImageVersion$,
  UpdateMicrovmImageVersionCommand,
  UpdateMicrovmImageVersionRequest$,
  UpdateMicrovmImageVersionResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LambdaMicrovmsClient === "function");
assert(typeof LambdaMicrovms === "function");
// commands
assert(typeof CreateMicrovmAuthTokenCommand === "function");
assert(typeof CreateMicrovmAuthToken$ === "object");
assert(typeof CreateMicrovmImageCommand === "function");
assert(typeof CreateMicrovmImage$ === "object");
assert(typeof CreateMicrovmShellAuthTokenCommand === "function");
assert(typeof CreateMicrovmShellAuthToken$ === "object");
assert(typeof DeleteMicrovmImageCommand === "function");
assert(typeof DeleteMicrovmImage$ === "object");
assert(typeof DeleteMicrovmImageVersionCommand === "function");
assert(typeof DeleteMicrovmImageVersion$ === "object");
assert(typeof GetMicrovmCommand === "function");
assert(typeof GetMicrovm$ === "object");
assert(typeof GetMicrovmImageCommand === "function");
assert(typeof GetMicrovmImage$ === "object");
assert(typeof GetMicrovmImageBuildCommand === "function");
assert(typeof GetMicrovmImageBuild$ === "object");
assert(typeof GetMicrovmImageVersionCommand === "function");
assert(typeof GetMicrovmImageVersion$ === "object");
assert(typeof ListManagedMicrovmImagesCommand === "function");
assert(typeof ListManagedMicrovmImages$ === "object");
assert(typeof ListManagedMicrovmImageVersionsCommand === "function");
assert(typeof ListManagedMicrovmImageVersions$ === "object");
assert(typeof ListMicrovmImageBuildsCommand === "function");
assert(typeof ListMicrovmImageBuilds$ === "object");
assert(typeof ListMicrovmImagesCommand === "function");
assert(typeof ListMicrovmImages$ === "object");
assert(typeof ListMicrovmImageVersionsCommand === "function");
assert(typeof ListMicrovmImageVersions$ === "object");
assert(typeof ListMicrovmsCommand === "function");
assert(typeof ListMicrovms$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ResumeMicrovmCommand === "function");
assert(typeof ResumeMicrovm$ === "object");
assert(typeof RunMicrovmCommand === "function");
assert(typeof RunMicrovm$ === "object");
assert(typeof SuspendMicrovmCommand === "function");
assert(typeof SuspendMicrovm$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateMicrovmCommand === "function");
assert(typeof TerminateMicrovm$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMicrovmImageCommand === "function");
assert(typeof UpdateMicrovmImage$ === "object");
assert(typeof UpdateMicrovmImageVersionCommand === "function");
assert(typeof UpdateMicrovmImageVersion$ === "object");
// structural schemas
assert(typeof CloudWatchLogging$ === "object");
assert(typeof CodeArtifact$ === "object");
assert(typeof CpuConfiguration$ === "object");
assert(typeof CreateMicrovmAuthTokenRequest$ === "object");
assert(typeof CreateMicrovmAuthTokenResponse$ === "object");
assert(typeof CreateMicrovmImageRequest$ === "object");
assert(typeof CreateMicrovmImageResponse$ === "object");
assert(typeof CreateMicrovmShellAuthTokenRequest$ === "object");
assert(typeof CreateMicrovmShellAuthTokenResponse$ === "object");
assert(typeof DeleteMicrovmImageInput$ === "object");
assert(typeof DeleteMicrovmImageOutput$ === "object");
assert(typeof DeleteMicrovmImageVersionInput$ === "object");
assert(typeof DeleteMicrovmImageVersionOutput$ === "object");
assert(typeof GetMicrovmImageBuildInput$ === "object");
assert(typeof GetMicrovmImageBuildOutput$ === "object");
assert(typeof GetMicrovmImageInput$ === "object");
assert(typeof GetMicrovmImageOutput$ === "object");
assert(typeof GetMicrovmImageVersionInput$ === "object");
assert(typeof GetMicrovmImageVersionOutput$ === "object");
assert(typeof GetMicrovmRequest$ === "object");
assert(typeof GetMicrovmResponse$ === "object");
assert(typeof Hooks$ === "object");
assert(typeof IdlePolicy$ === "object");
assert(typeof ListManagedMicrovmImagesInput$ === "object");
assert(typeof ListManagedMicrovmImagesOutput$ === "object");
assert(typeof ListManagedMicrovmImageVersionsInput$ === "object");
assert(typeof ListManagedMicrovmImageVersionsOutput$ === "object");
assert(typeof ListMicrovmImageBuildsInput$ === "object");
assert(typeof ListMicrovmImageBuildsOutput$ === "object");
assert(typeof ListMicrovmImagesRequest$ === "object");
assert(typeof ListMicrovmImagesResponse$ === "object");
assert(typeof ListMicrovmImageVersionsInput$ === "object");
assert(typeof ListMicrovmImageVersionsOutput$ === "object");
assert(typeof ListMicrovmsRequest$ === "object");
assert(typeof ListMicrovmsResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof Logging$ === "object");
assert(typeof LoggingDisabled$ === "object");
assert(typeof ManagedMicrovmImageSummary$ === "object");
assert(typeof ManagedMicrovmImageVersion$ === "object");
assert(typeof MicrovmHooks$ === "object");
assert(typeof MicrovmImageBuildSummary$ === "object");
assert(typeof MicrovmImageHooks$ === "object");
assert(typeof MicrovmImageSummary$ === "object");
assert(typeof MicrovmImageVersionSummary$ === "object");
assert(typeof MicrovmItem$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof PortSpecification$ === "object");
assert(typeof Resources$ === "object");
assert(typeof ResumeMicrovmRequest$ === "object");
assert(typeof ResumeMicrovmResponse$ === "object");
assert(typeof RunMicrovmRequest$ === "object");
assert(typeof RunMicrovmResponse$ === "object");
assert(typeof SnapshotBuild$ === "object");
assert(typeof SuspendMicrovmRequest$ === "object");
assert(typeof SuspendMicrovmResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TerminateMicrovmRequest$ === "object");
assert(typeof TerminateMicrovmResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateMicrovmImageRequest$ === "object");
assert(typeof UpdateMicrovmImageResponse$ === "object");
assert(typeof UpdateMicrovmImageVersionRequest$ === "object");
assert(typeof UpdateMicrovmImageVersionResponse$ === "object");
// enums
assert(typeof Architecture === "object");
assert(typeof BuildState === "object");
assert(typeof Capability === "object");
assert(typeof Chipset === "object");
assert(typeof HookState === "object");
assert(typeof MicrovmImageState === "object");
assert(typeof MicrovmImageVersionState === "object");
assert(typeof MicrovmImageVersionStatus === "object");
assert(typeof MicrovmState === "object");
// errors
assert(AccessDeniedException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterValueException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(ResourceConflictException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof ServiceException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyRequestsException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof LambdaMicrovmsServiceException);
assert(typeof ValidationException$ === "object");
assert(LambdaMicrovmsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListManagedMicrovmImageVersions === "function");
assert(typeof paginateListManagedMicrovmImages === "function");
assert(typeof paginateListMicrovmImageBuilds === "function");
assert(typeof paginateListMicrovmImageVersions === "function");
assert(typeof paginateListMicrovmImages === "function");
assert(typeof paginateListMicrovms === "function");
console.log(`LambdaMicrovms index test passed.`);
