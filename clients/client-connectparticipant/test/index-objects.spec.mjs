import {
  ArtifactStatus,
  CancelParticipantAuthenticationCommand,
  ChatItemType,
  CompleteAttachmentUploadCommand,
  ConnectParticipant,
  ConnectParticipantClient,
  ConnectParticipantServiceException,
  ConnectionType,
  CreateParticipantConnectionCommand,
  DescribeViewCommand,
  DisconnectParticipantCommand,
  GetAttachmentCommand,
  GetAuthenticationUrlCommand,
  GetTranscriptCommand,
  MeetingFeatureStatus,
  MessageProcessingStatus,
  ParticipantRole,
  ScanDirection,
  SendEventCommand,
  SendMessageCommand,
  SortKey,
  StartAttachmentUploadCommand,
  paginateGetTranscript,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectParticipantClient === "function")
assert(typeof ConnectParticipant === "function")
// commands
assert(typeof CancelParticipantAuthenticationCommand === "function")
assert(typeof CompleteAttachmentUploadCommand === "function")
assert(typeof CreateParticipantConnectionCommand === "function")
assert(typeof DescribeViewCommand === "function")
assert(typeof DisconnectParticipantCommand === "function")
assert(typeof GetAttachmentCommand === "function")
assert(typeof GetAuthenticationUrlCommand === "function")
assert(typeof GetTranscriptCommand === "function")
assert(typeof SendEventCommand === "function")
assert(typeof SendMessageCommand === "function")
assert(typeof StartAttachmentUploadCommand === "function")
// enums
assert(typeof ArtifactStatus === "object");
assert(typeof ChatItemType === "object");
assert(typeof ConnectionType === "object");
assert(typeof MeetingFeatureStatus === "object");
assert(typeof MessageProcessingStatus === "object");
assert(typeof ParticipantRole === "object");
assert(typeof ScanDirection === "object");
assert(typeof SortKey === "object");
// errors
assert(ConnectParticipantServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetTranscript === "function")
console.log(`ConnectParticipant index test passed.`);
