import {
  AddStreamGroupLocationsCommand,
  ApplicationStatus,
  ApplicationStatusReason,
  AssociateApplicationsCommand,
  CreateApplicationCommand,
  CreateStreamGroupCommand,
  CreateStreamSessionConnectionCommand,
  DeleteApplicationCommand,
  DeleteStreamGroupCommand,
  DisassociateApplicationsCommand,
  ExportFilesStatus,
  ExportStreamSessionFilesCommand,
  GameLiftStreams,
  GameLiftStreamsClient,
  GameLiftStreamsServiceException,
  GetApplicationCommand,
  GetStreamGroupCommand,
  GetStreamSessionCommand,
  ListApplicationsCommand,
  ListStreamGroupsCommand,
  ListStreamSessionsByAccountCommand,
  ListStreamSessionsCommand,
  ListTagsForResourceCommand,
  Protocol,
  RemoveStreamGroupLocationsCommand,
  ReplicationStatusType,
  RuntimeEnvironmentType,
  StartStreamSessionCommand,
  StreamClass,
  StreamGroupLocationStatus,
  StreamGroupStatus,
  StreamGroupStatusReason,
  StreamSessionStatus,
  StreamSessionStatusReason,
  TagResourceCommand,
  TerminateStreamSessionCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateStreamGroupCommand,
  paginateListApplications,
  paginateListStreamGroups,
  paginateListStreamSessions,
  paginateListStreamSessionsByAccount,
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
assert(typeof AssociateApplicationsCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateStreamGroupCommand === "function");
assert(typeof CreateStreamSessionConnectionCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteStreamGroupCommand === "function");
assert(typeof DisassociateApplicationsCommand === "function");
assert(typeof ExportStreamSessionFilesCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetStreamGroupCommand === "function");
assert(typeof GetStreamSessionCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListStreamGroupsCommand === "function");
assert(typeof ListStreamSessionsCommand === "function");
assert(typeof ListStreamSessionsByAccountCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RemoveStreamGroupLocationsCommand === "function");
assert(typeof StartStreamSessionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TerminateStreamSessionCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateStreamGroupCommand === "function");
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
