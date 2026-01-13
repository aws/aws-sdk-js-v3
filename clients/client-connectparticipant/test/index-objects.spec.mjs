import {
  AccessDeniedException,
  AccessDeniedException$,
  ArtifactStatus,
  AttachmentItem$,
  Attendee$,
  AudioFeatures$,
  CancelParticipantAuthentication$,
  CancelParticipantAuthenticationCommand,
  CancelParticipantAuthenticationRequest$,
  CancelParticipantAuthenticationResponse$,
  ChatItemType,
  CompleteAttachmentUpload$,
  CompleteAttachmentUploadCommand,
  CompleteAttachmentUploadRequest$,
  CompleteAttachmentUploadResponse$,
  ConflictException,
  ConflictException$,
  ConnectionCredentials$,
  ConnectionType,
  ConnectParticipant,
  ConnectParticipantClient,
  ConnectParticipantServiceException,
  CreateParticipantConnection$,
  CreateParticipantConnectionCommand,
  CreateParticipantConnectionRequest$,
  CreateParticipantConnectionResponse$,
  DescribeView$,
  DescribeViewCommand,
  DescribeViewRequest$,
  DescribeViewResponse$,
  DisconnectParticipant$,
  DisconnectParticipantCommand,
  DisconnectParticipantRequest$,
  DisconnectParticipantResponse$,
  GetAttachment$,
  GetAttachmentCommand,
  GetAttachmentRequest$,
  GetAttachmentResponse$,
  GetAuthenticationUrl$,
  GetAuthenticationUrlCommand,
  GetAuthenticationUrlRequest$,
  GetAuthenticationUrlResponse$,
  GetTranscript$,
  GetTranscriptCommand,
  GetTranscriptRequest$,
  GetTranscriptResponse$,
  InternalServerException,
  InternalServerException$,
  Item$,
  MeetingFeaturesConfiguration$,
  MeetingFeatureStatus,
  MessageMetadata$,
  MessageProcessingMetadata$,
  MessageProcessingStatus,
  paginateGetTranscript,
  ParticipantRole,
  Receipt$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ScanDirection,
  SendEvent$,
  SendEventCommand,
  SendEventRequest$,
  SendEventResponse$,
  SendMessage$,
  SendMessageCommand,
  SendMessageRequest$,
  SendMessageResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortKey,
  StartAttachmentUpload$,
  StartAttachmentUploadCommand,
  StartAttachmentUploadRequest$,
  StartAttachmentUploadResponse$,
  StartPosition$,
  ThrottlingException,
  ThrottlingException$,
  UploadMetadata$,
  ValidationException,
  ValidationException$,
  View$,
  ViewContent$,
  WebRTCConnection$,
  WebRTCMediaPlacement$,
  WebRTCMeeting$,
  Websocket$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectParticipantClient === "function");
assert(typeof ConnectParticipant === "function");
// commands
assert(typeof CancelParticipantAuthenticationCommand === "function");
assert(typeof CancelParticipantAuthentication$ === "object");
assert(typeof CompleteAttachmentUploadCommand === "function");
assert(typeof CompleteAttachmentUpload$ === "object");
assert(typeof CreateParticipantConnectionCommand === "function");
assert(typeof CreateParticipantConnection$ === "object");
assert(typeof DescribeViewCommand === "function");
assert(typeof DescribeView$ === "object");
assert(typeof DisconnectParticipantCommand === "function");
assert(typeof DisconnectParticipant$ === "object");
assert(typeof GetAttachmentCommand === "function");
assert(typeof GetAttachment$ === "object");
assert(typeof GetAuthenticationUrlCommand === "function");
assert(typeof GetAuthenticationUrl$ === "object");
assert(typeof GetTranscriptCommand === "function");
assert(typeof GetTranscript$ === "object");
assert(typeof SendEventCommand === "function");
assert(typeof SendEvent$ === "object");
assert(typeof SendMessageCommand === "function");
assert(typeof SendMessage$ === "object");
assert(typeof StartAttachmentUploadCommand === "function");
assert(typeof StartAttachmentUpload$ === "object");
// structural schemas
assert(typeof AttachmentItem$ === "object");
assert(typeof Attendee$ === "object");
assert(typeof AudioFeatures$ === "object");
assert(typeof CancelParticipantAuthenticationRequest$ === "object");
assert(typeof CancelParticipantAuthenticationResponse$ === "object");
assert(typeof CompleteAttachmentUploadRequest$ === "object");
assert(typeof CompleteAttachmentUploadResponse$ === "object");
assert(typeof ConnectionCredentials$ === "object");
assert(typeof CreateParticipantConnectionRequest$ === "object");
assert(typeof CreateParticipantConnectionResponse$ === "object");
assert(typeof DescribeViewRequest$ === "object");
assert(typeof DescribeViewResponse$ === "object");
assert(typeof DisconnectParticipantRequest$ === "object");
assert(typeof DisconnectParticipantResponse$ === "object");
assert(typeof GetAttachmentRequest$ === "object");
assert(typeof GetAttachmentResponse$ === "object");
assert(typeof GetAuthenticationUrlRequest$ === "object");
assert(typeof GetAuthenticationUrlResponse$ === "object");
assert(typeof GetTranscriptRequest$ === "object");
assert(typeof GetTranscriptResponse$ === "object");
assert(typeof Item$ === "object");
assert(typeof MeetingFeaturesConfiguration$ === "object");
assert(typeof MessageMetadata$ === "object");
assert(typeof MessageProcessingMetadata$ === "object");
assert(typeof Receipt$ === "object");
assert(typeof SendEventRequest$ === "object");
assert(typeof SendEventResponse$ === "object");
assert(typeof SendMessageRequest$ === "object");
assert(typeof SendMessageResponse$ === "object");
assert(typeof StartAttachmentUploadRequest$ === "object");
assert(typeof StartAttachmentUploadResponse$ === "object");
assert(typeof StartPosition$ === "object");
assert(typeof UploadMetadata$ === "object");
assert(typeof View$ === "object");
assert(typeof ViewContent$ === "object");
assert(typeof WebRTCConnection$ === "object");
assert(typeof WebRTCMediaPlacement$ === "object");
assert(typeof WebRTCMeeting$ === "object");
assert(typeof Websocket$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ConnectParticipantServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ConnectParticipantServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectParticipantServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ConnectParticipantServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectParticipantServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ConnectParticipantServiceException);
assert(typeof ValidationException$ === "object");
assert(ConnectParticipantServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetTranscript === "function");
console.log(`ConnectParticipant index test passed.`);
