import {
  AccessDeniedException,
  AccessDeniedException$,
  AddStreamGroupLocations$,
  AddStreamGroupLocationsCommand,
  AddStreamGroupLocationsInput$,
  AddStreamGroupLocationsOutput$,
  ApplicationStatus,
  ApplicationStatusReason,
  ApplicationSummary$,
  AssociateApplications$,
  AssociateApplicationsCommand,
  AssociateApplicationsInput$,
  AssociateApplicationsOutput$,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationInput$,
  CreateApplicationOutput$,
  CreateStreamGroup$,
  CreateStreamGroupCommand,
  CreateStreamGroupInput$,
  CreateStreamGroupOutput$,
  CreateStreamSessionConnection$,
  CreateStreamSessionConnectionCommand,
  CreateStreamSessionConnectionInput$,
  CreateStreamSessionConnectionOutput$,
  DefaultApplication$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationInput$,
  DeleteStreamGroup$,
  DeleteStreamGroupCommand,
  DeleteStreamGroupInput$,
  DisassociateApplications$,
  DisassociateApplicationsCommand,
  DisassociateApplicationsInput$,
  DisassociateApplicationsOutput$,
  ExportFilesMetadata$,
  ExportFilesStatus,
  ExportStreamSessionFiles$,
  ExportStreamSessionFilesCommand,
  ExportStreamSessionFilesInput$,
  ExportStreamSessionFilesOutput$,
  GameLiftStreams,
  GameLiftStreamsClient,
  GameLiftStreamsServiceException,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationInput$,
  GetApplicationOutput$,
  GetStreamGroup$,
  GetStreamGroupCommand,
  GetStreamGroupInput$,
  GetStreamGroupOutput$,
  GetStreamSession$,
  GetStreamSessionCommand,
  GetStreamSessionInput$,
  GetStreamSessionOutput$,
  InternalServerException,
  InternalServerException$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsInput$,
  ListApplicationsOutput$,
  ListStreamGroups$,
  ListStreamGroupsCommand,
  ListStreamGroupsInput$,
  ListStreamGroupsOutput$,
  ListStreamSessions$,
  ListStreamSessionsByAccount$,
  ListStreamSessionsByAccountCommand,
  ListStreamSessionsByAccountInput$,
  ListStreamSessionsByAccountOutput$,
  ListStreamSessionsCommand,
  ListStreamSessionsInput$,
  ListStreamSessionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LocationConfiguration$,
  LocationState$,
  paginateListApplications,
  paginateListStreamGroups,
  paginateListStreamSessions,
  paginateListStreamSessionsByAccount,
  PerformanceStatsConfiguration$,
  Protocol,
  RemoveStreamGroupLocations$,
  RemoveStreamGroupLocationsCommand,
  RemoveStreamGroupLocationsInput$,
  ReplicationStatus$,
  ReplicationStatusType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuntimeEnvironment$,
  RuntimeEnvironmentType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartStreamSession$,
  StartStreamSessionCommand,
  StartStreamSessionInput$,
  StartStreamSessionOutput$,
  StreamClass,
  StreamGroupLocationStatus,
  StreamGroupStatus,
  StreamGroupStatusReason,
  StreamGroupSummary$,
  StreamSessionStatus,
  StreamSessionStatusReason,
  StreamSessionSummary$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TerminateStreamSession$,
  TerminateStreamSessionCommand,
  TerminateStreamSessionInput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationInput$,
  UpdateApplicationOutput$,
  UpdateStreamGroup$,
  UpdateStreamGroupCommand,
  UpdateStreamGroupInput$,
  UpdateStreamGroupOutput$,
  ValidationException,
  ValidationException$,
  waitForApplicationDeleted,
  waitForApplicationReady,
  waitForStreamGroupActive,
  waitForStreamGroupDeleted,
  waitForStreamSessionActive,
  waitUntilApplicationDeleted,
  waitUntilApplicationReady,
  waitUntilStreamGroupActive,
  waitUntilStreamGroupDeleted,
  waitUntilStreamSessionActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GameLiftStreamsClient === "function");
assert(typeof GameLiftStreams === "function");
// commands
assert(typeof AddStreamGroupLocationsCommand === "function");
assert(typeof AddStreamGroupLocations$ === "object");
assert(typeof AssociateApplicationsCommand === "function");
assert(typeof AssociateApplications$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateStreamGroupCommand === "function");
assert(typeof CreateStreamGroup$ === "object");
assert(typeof CreateStreamSessionConnectionCommand === "function");
assert(typeof CreateStreamSessionConnection$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteStreamGroupCommand === "function");
assert(typeof DeleteStreamGroup$ === "object");
assert(typeof DisassociateApplicationsCommand === "function");
assert(typeof DisassociateApplications$ === "object");
assert(typeof ExportStreamSessionFilesCommand === "function");
assert(typeof ExportStreamSessionFiles$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetStreamGroupCommand === "function");
assert(typeof GetStreamGroup$ === "object");
assert(typeof GetStreamSessionCommand === "function");
assert(typeof GetStreamSession$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListStreamGroupsCommand === "function");
assert(typeof ListStreamGroups$ === "object");
assert(typeof ListStreamSessionsCommand === "function");
assert(typeof ListStreamSessions$ === "object");
assert(typeof ListStreamSessionsByAccountCommand === "function");
assert(typeof ListStreamSessionsByAccount$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RemoveStreamGroupLocationsCommand === "function");
assert(typeof RemoveStreamGroupLocations$ === "object");
assert(typeof StartStreamSessionCommand === "function");
assert(typeof StartStreamSession$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateStreamSessionCommand === "function");
assert(typeof TerminateStreamSession$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateStreamGroupCommand === "function");
assert(typeof UpdateStreamGroup$ === "object");
// structural schemas
assert(typeof AddStreamGroupLocationsInput$ === "object");
assert(typeof AddStreamGroupLocationsOutput$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof AssociateApplicationsInput$ === "object");
assert(typeof AssociateApplicationsOutput$ === "object");
assert(typeof CreateApplicationInput$ === "object");
assert(typeof CreateApplicationOutput$ === "object");
assert(typeof CreateStreamGroupInput$ === "object");
assert(typeof CreateStreamGroupOutput$ === "object");
assert(typeof CreateStreamSessionConnectionInput$ === "object");
assert(typeof CreateStreamSessionConnectionOutput$ === "object");
assert(typeof DefaultApplication$ === "object");
assert(typeof DeleteApplicationInput$ === "object");
assert(typeof DeleteStreamGroupInput$ === "object");
assert(typeof DisassociateApplicationsInput$ === "object");
assert(typeof DisassociateApplicationsOutput$ === "object");
assert(typeof ExportFilesMetadata$ === "object");
assert(typeof ExportStreamSessionFilesInput$ === "object");
assert(typeof ExportStreamSessionFilesOutput$ === "object");
assert(typeof GetApplicationInput$ === "object");
assert(typeof GetApplicationOutput$ === "object");
assert(typeof GetStreamGroupInput$ === "object");
assert(typeof GetStreamGroupOutput$ === "object");
assert(typeof GetStreamSessionInput$ === "object");
assert(typeof GetStreamSessionOutput$ === "object");
assert(typeof ListApplicationsInput$ === "object");
assert(typeof ListApplicationsOutput$ === "object");
assert(typeof ListStreamGroupsInput$ === "object");
assert(typeof ListStreamGroupsOutput$ === "object");
assert(typeof ListStreamSessionsByAccountInput$ === "object");
assert(typeof ListStreamSessionsByAccountOutput$ === "object");
assert(typeof ListStreamSessionsInput$ === "object");
assert(typeof ListStreamSessionsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LocationConfiguration$ === "object");
assert(typeof LocationState$ === "object");
assert(typeof PerformanceStatsConfiguration$ === "object");
assert(typeof RemoveStreamGroupLocationsInput$ === "object");
assert(typeof ReplicationStatus$ === "object");
assert(typeof RuntimeEnvironment$ === "object");
assert(typeof StartStreamSessionInput$ === "object");
assert(typeof StartStreamSessionOutput$ === "object");
assert(typeof StreamGroupSummary$ === "object");
assert(typeof StreamSessionSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TerminateStreamSessionInput$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationInput$ === "object");
assert(typeof UpdateApplicationOutput$ === "object");
assert(typeof UpdateStreamGroupInput$ === "object");
assert(typeof UpdateStreamGroupOutput$ === "object");
// enums
assert(typeof ApplicationStatus === "object");
assert(typeof ApplicationStatusReason === "object");
assert(typeof ExportFilesStatus === "object");
assert(typeof Protocol === "object");
assert(typeof ReplicationStatusType === "object");
assert(typeof RuntimeEnvironmentType === "object");
assert(typeof StreamClass === "object");
assert(typeof StreamGroupLocationStatus === "object");
assert(typeof StreamGroupStatus === "object");
assert(typeof StreamGroupStatusReason === "object");
assert(typeof StreamSessionStatus === "object");
assert(typeof StreamSessionStatusReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof GameLiftStreamsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof GameLiftStreamsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof GameLiftStreamsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof GameLiftStreamsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof GameLiftStreamsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof GameLiftStreamsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof GameLiftStreamsServiceException);
assert(typeof ValidationException$ === "object");
assert(GameLiftStreamsServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForApplicationDeleted === "function");
assert(typeof waitForApplicationReady === "function");
assert(typeof waitForStreamGroupActive === "function");
assert(typeof waitForStreamGroupDeleted === "function");
assert(typeof waitForStreamSessionActive === "function");
assert(typeof waitUntilApplicationDeleted === "function");
assert(typeof waitUntilApplicationReady === "function");
assert(typeof waitUntilStreamGroupActive === "function");
assert(typeof waitUntilStreamGroupDeleted === "function");
assert(typeof waitUntilStreamSessionActive === "function");
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListStreamGroups === "function");
assert(typeof paginateListStreamSessions === "function");
assert(typeof paginateListStreamSessionsByAccount === "function");
console.log(`GameLiftStreams index test passed.`);
