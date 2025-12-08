import {
  AccessDeniedException,
  ArtifactStatus,
  CancelParticipantAuthenticationCommand,
  ChatItemType,
  CompleteAttachmentUploadCommand,
  ConflictException,
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
  InternalServerException,
  MeetingFeatureStatus,
  MessageProcessingStatus,
  ParticipantRole,
  ResourceNotFoundException,
  ResourceType,
  ScanDirection,
  SendEventCommand,
  SendMessageCommand,
  ServiceQuotaExceededException,
  SortKey,
  StartAttachmentUploadCommand,
  ThrottlingException,
  ValidationException,
  paginateGetTranscript,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectParticipantClient === "function");
assert(typeof ConnectParticipant === "function");
// commands
assert(typeof CancelParticipantAuthenticationCommand === "function");
assert(typeof CompleteAttachmentUploadCommand === "function");
assert(typeof CreateParticipantConnectionCommand === "function");
assert(typeof DescribeViewCommand === "function");
assert(typeof DisconnectParticipantCommand === "function");
assert(typeof GetAttachmentCommand === "function");
assert(typeof GetAuthenticationUrlCommand === "function");
assert(typeof GetTranscriptCommand === "function");
assert(typeof SendEventCommand === "function");
assert(typeof SendMessageCommand === "function");
assert(typeof StartAttachmentUploadCommand === "function");
// enums
assert(typeof ArtifactStatus === "object");
assert(typeof ChatItemType === "object");
assert(typeof ConnectionType === "object");
assert(typeof MeetingFeatureStatus === "object");
assert(typeof MessageProcessingStatus === "object");
assert(typeof ParticipantRole === "object");
assert(typeof ResourceType === "object");
assert(typeof ScanDirection === "object");
assert(typeof SortKey === "object");
// errors
assert(AccessDeniedException.prototype instanceof ConnectParticipantServiceException);
assert(ConflictException.prototype instanceof ConnectParticipantServiceException);
assert(InternalServerException.prototype instanceof ConnectParticipantServiceException);
assert(ResourceNotFoundException.prototype instanceof ConnectParticipantServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ConnectParticipantServiceException);
assert(ThrottlingException.prototype instanceof ConnectParticipantServiceException);
assert(ValidationException.prototype instanceof ConnectParticipantServiceException);
assert(ConnectParticipantServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetTranscript === "function");
console.log(`ConnectParticipant index test passed.`);
