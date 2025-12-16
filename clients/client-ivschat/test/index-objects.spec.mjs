import {
  AccessDeniedException,
  AccessDeniedException$,
  ChatTokenCapability,
  CloudWatchLogsDestinationConfiguration$,
  ConflictException,
  ConflictException$,
  CreateChatToken$,
  CreateChatTokenCommand,
  CreateChatTokenRequest$,
  CreateChatTokenResponse$,
  CreateLoggingConfiguration$,
  CreateLoggingConfigurationCommand,
  CreateLoggingConfigurationRequest$,
  CreateLoggingConfigurationResponse$,
  CreateLoggingConfigurationState,
  CreateRoom$,
  CreateRoomCommand,
  CreateRoomRequest$,
  CreateRoomResponse$,
  DeleteLoggingConfiguration$,
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationRequest$,
  DeleteMessage$,
  DeleteMessageCommand,
  DeleteMessageRequest$,
  DeleteMessageResponse$,
  DeleteRoom$,
  DeleteRoomCommand,
  DeleteRoomRequest$,
  DestinationConfiguration$,
  DisconnectUser$,
  DisconnectUserCommand,
  DisconnectUserRequest$,
  DisconnectUserResponse$,
  FallbackResult,
  FirehoseDestinationConfiguration$,
  GetLoggingConfiguration$,
  GetLoggingConfigurationCommand,
  GetLoggingConfigurationRequest$,
  GetLoggingConfigurationResponse$,
  GetRoom$,
  GetRoomCommand,
  GetRoomRequest$,
  GetRoomResponse$,
  InternalServerException,
  InternalServerException$,
  Ivschat,
  IvschatClient,
  IvschatServiceException,
  ListLoggingConfigurations$,
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsRequest$,
  ListLoggingConfigurationsResponse$,
  ListRooms$,
  ListRoomsCommand,
  ListRoomsRequest$,
  ListRoomsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoggingConfigurationState,
  LoggingConfigurationSummary$,
  MessageReviewHandler$,
  PendingVerification,
  PendingVerification$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RoomSummary$,
  S3DestinationConfiguration$,
  SendEvent$,
  SendEventCommand,
  SendEventRequest$,
  SendEventResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateLoggingConfiguration$,
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationRequest$,
  UpdateLoggingConfigurationResponse$,
  UpdateLoggingConfigurationState,
  UpdateRoom$,
  UpdateRoomCommand,
  UpdateRoomRequest$,
  UpdateRoomResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListLoggingConfigurations,
  paginateListRooms,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IvschatClient === "function");
assert(typeof Ivschat === "function");
// commands
assert(typeof CreateChatTokenCommand === "function");
assert(typeof CreateChatToken$ === "object");
assert(typeof CreateLoggingConfigurationCommand === "function");
assert(typeof CreateLoggingConfiguration$ === "object");
assert(typeof CreateRoomCommand === "function");
assert(typeof CreateRoom$ === "object");
assert(typeof DeleteLoggingConfigurationCommand === "function");
assert(typeof DeleteLoggingConfiguration$ === "object");
assert(typeof DeleteMessageCommand === "function");
assert(typeof DeleteMessage$ === "object");
assert(typeof DeleteRoomCommand === "function");
assert(typeof DeleteRoom$ === "object");
assert(typeof DisconnectUserCommand === "function");
assert(typeof DisconnectUser$ === "object");
assert(typeof GetLoggingConfigurationCommand === "function");
assert(typeof GetLoggingConfiguration$ === "object");
assert(typeof GetRoomCommand === "function");
assert(typeof GetRoom$ === "object");
assert(typeof ListLoggingConfigurationsCommand === "function");
assert(typeof ListLoggingConfigurations$ === "object");
assert(typeof ListRoomsCommand === "function");
assert(typeof ListRooms$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SendEventCommand === "function");
assert(typeof SendEvent$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateLoggingConfigurationCommand === "function");
assert(typeof UpdateLoggingConfiguration$ === "object");
assert(typeof UpdateRoomCommand === "function");
assert(typeof UpdateRoom$ === "object");
// structural schemas
assert(typeof CloudWatchLogsDestinationConfiguration$ === "object");
assert(typeof CreateChatTokenRequest$ === "object");
assert(typeof CreateChatTokenResponse$ === "object");
assert(typeof CreateLoggingConfigurationRequest$ === "object");
assert(typeof CreateLoggingConfigurationResponse$ === "object");
assert(typeof CreateRoomRequest$ === "object");
assert(typeof CreateRoomResponse$ === "object");
assert(typeof DeleteLoggingConfigurationRequest$ === "object");
assert(typeof DeleteMessageRequest$ === "object");
assert(typeof DeleteMessageResponse$ === "object");
assert(typeof DeleteRoomRequest$ === "object");
assert(typeof DestinationConfiguration$ === "object");
assert(typeof DisconnectUserRequest$ === "object");
assert(typeof DisconnectUserResponse$ === "object");
assert(typeof FirehoseDestinationConfiguration$ === "object");
assert(typeof GetLoggingConfigurationRequest$ === "object");
assert(typeof GetLoggingConfigurationResponse$ === "object");
assert(typeof GetRoomRequest$ === "object");
assert(typeof GetRoomResponse$ === "object");
assert(typeof ListLoggingConfigurationsRequest$ === "object");
assert(typeof ListLoggingConfigurationsResponse$ === "object");
assert(typeof ListRoomsRequest$ === "object");
assert(typeof ListRoomsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoggingConfigurationSummary$ === "object");
assert(typeof MessageReviewHandler$ === "object");
assert(typeof RoomSummary$ === "object");
assert(typeof S3DestinationConfiguration$ === "object");
assert(typeof SendEventRequest$ === "object");
assert(typeof SendEventResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateLoggingConfigurationRequest$ === "object");
assert(typeof UpdateLoggingConfigurationResponse$ === "object");
assert(typeof UpdateRoomRequest$ === "object");
assert(typeof UpdateRoomResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof ChatTokenCapability === "object");
assert(typeof CreateLoggingConfigurationState === "object");
assert(typeof FallbackResult === "object");
assert(typeof LoggingConfigurationState === "object");
assert(typeof ResourceType === "object");
assert(typeof UpdateLoggingConfigurationState === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof IvschatServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof IvschatServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof IvschatServiceException);
assert(typeof InternalServerException$ === "object");
assert(PendingVerification.prototype instanceof IvschatServiceException);
assert(typeof PendingVerification$ === "object");
assert(ResourceNotFoundException.prototype instanceof IvschatServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IvschatServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof IvschatServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof IvschatServiceException);
assert(typeof ValidationException$ === "object");
assert(IvschatServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLoggingConfigurations === "function");
assert(typeof paginateListRooms === "function");
console.log(`Ivschat index test passed.`);
