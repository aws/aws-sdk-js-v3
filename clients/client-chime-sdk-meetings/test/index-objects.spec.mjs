import {
  Attendee$,
  AttendeeCapabilities$,
  AttendeeFeatures$,
  AttendeeIdItem$,
  AudioFeatures$,
  BadRequestException,
  BadRequestException$,
  BatchCreateAttendee$,
  BatchCreateAttendeeCommand,
  BatchCreateAttendeeRequest$,
  BatchCreateAttendeeResponse$,
  BatchUpdateAttendeeCapabilitiesExcept$,
  BatchUpdateAttendeeCapabilitiesExceptCommand,
  BatchUpdateAttendeeCapabilitiesExceptRequest$,
  ChimeSDKMeetings,
  ChimeSDKMeetingsClient,
  ChimeSDKMeetingsServiceException,
  ConflictException,
  ConflictException$,
  ContentFeatures$,
  ContentResolution,
  CreateAttendee$,
  CreateAttendeeCommand,
  CreateAttendeeError$,
  CreateAttendeeRequest$,
  CreateAttendeeRequestItem$,
  CreateAttendeeResponse$,
  CreateMeeting$,
  CreateMeetingCommand,
  CreateMeetingRequest$,
  CreateMeetingResponse$,
  CreateMeetingWithAttendees$,
  CreateMeetingWithAttendeesCommand,
  CreateMeetingWithAttendeesRequest$,
  CreateMeetingWithAttendeesResponse$,
  DeleteAttendee$,
  DeleteAttendeeCommand,
  DeleteAttendeeRequest$,
  DeleteMeeting$,
  DeleteMeetingCommand,
  DeleteMeetingRequest$,
  EngineTranscribeMedicalSettings$,
  EngineTranscribeSettings$,
  ForbiddenException,
  ForbiddenException$,
  GetAttendee$,
  GetAttendeeCommand,
  GetAttendeeRequest$,
  GetAttendeeResponse$,
  GetMeeting$,
  GetMeetingCommand,
  GetMeetingRequest$,
  GetMeetingResponse$,
  LimitExceededException,
  LimitExceededException$,
  ListAttendees$,
  ListAttendeesCommand,
  ListAttendeesRequest$,
  ListAttendeesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MediaCapabilities,
  MediaPlacement$,
  MediaPlacementNetworkType,
  Meeting$,
  MeetingFeaturesConfiguration$,
  MeetingFeatureStatus,
  NotFoundException,
  NotFoundException$,
  NotificationsConfiguration$,
  paginateListAttendees,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceFailureException,
  ServiceFailureException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartMeetingTranscription$,
  StartMeetingTranscriptionCommand,
  StartMeetingTranscriptionRequest$,
  StopMeetingTranscription$,
  StopMeetingTranscriptionCommand,
  StopMeetingTranscriptionRequest$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  TranscribeContentIdentificationType,
  TranscribeContentRedactionType,
  TranscribeLanguageCode,
  TranscribeMedicalContentIdentificationType,
  TranscribeMedicalLanguageCode,
  TranscribeMedicalRegion,
  TranscribeMedicalSpecialty,
  TranscribeMedicalType,
  TranscribePartialResultsStability,
  TranscribeRegion,
  TranscribeVocabularyFilterMethod,
  TranscriptionConfiguration$,
  UnauthorizedException,
  UnauthorizedException$,
  UnprocessableEntityException,
  UnprocessableEntityException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAttendeeCapabilities$,
  UpdateAttendeeCapabilitiesCommand,
  UpdateAttendeeCapabilitiesRequest$,
  UpdateAttendeeCapabilitiesResponse$,
  VideoFeatures$,
  VideoResolution,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeSDKMeetingsClient === "function");
assert(typeof ChimeSDKMeetings === "function");
// commands
assert(typeof BatchCreateAttendeeCommand === "function");
assert(typeof BatchCreateAttendee$ === "object");
assert(typeof BatchUpdateAttendeeCapabilitiesExceptCommand === "function");
assert(typeof BatchUpdateAttendeeCapabilitiesExcept$ === "object");
assert(typeof CreateAttendeeCommand === "function");
assert(typeof CreateAttendee$ === "object");
assert(typeof CreateMeetingCommand === "function");
assert(typeof CreateMeeting$ === "object");
assert(typeof CreateMeetingWithAttendeesCommand === "function");
assert(typeof CreateMeetingWithAttendees$ === "object");
assert(typeof DeleteAttendeeCommand === "function");
assert(typeof DeleteAttendee$ === "object");
assert(typeof DeleteMeetingCommand === "function");
assert(typeof DeleteMeeting$ === "object");
assert(typeof GetAttendeeCommand === "function");
assert(typeof GetAttendee$ === "object");
assert(typeof GetMeetingCommand === "function");
assert(typeof GetMeeting$ === "object");
assert(typeof ListAttendeesCommand === "function");
assert(typeof ListAttendees$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartMeetingTranscriptionCommand === "function");
assert(typeof StartMeetingTranscription$ === "object");
assert(typeof StopMeetingTranscriptionCommand === "function");
assert(typeof StopMeetingTranscription$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAttendeeCapabilitiesCommand === "function");
assert(typeof UpdateAttendeeCapabilities$ === "object");
// structural schemas
assert(typeof Attendee$ === "object");
assert(typeof AttendeeCapabilities$ === "object");
assert(typeof AttendeeFeatures$ === "object");
assert(typeof AttendeeIdItem$ === "object");
assert(typeof AudioFeatures$ === "object");
assert(typeof BatchCreateAttendeeRequest$ === "object");
assert(typeof BatchCreateAttendeeResponse$ === "object");
assert(typeof BatchUpdateAttendeeCapabilitiesExceptRequest$ === "object");
assert(typeof ContentFeatures$ === "object");
assert(typeof CreateAttendeeError$ === "object");
assert(typeof CreateAttendeeRequest$ === "object");
assert(typeof CreateAttendeeRequestItem$ === "object");
assert(typeof CreateAttendeeResponse$ === "object");
assert(typeof CreateMeetingRequest$ === "object");
assert(typeof CreateMeetingResponse$ === "object");
assert(typeof CreateMeetingWithAttendeesRequest$ === "object");
assert(typeof CreateMeetingWithAttendeesResponse$ === "object");
assert(typeof DeleteAttendeeRequest$ === "object");
assert(typeof DeleteMeetingRequest$ === "object");
assert(typeof EngineTranscribeMedicalSettings$ === "object");
assert(typeof EngineTranscribeSettings$ === "object");
assert(typeof GetAttendeeRequest$ === "object");
assert(typeof GetAttendeeResponse$ === "object");
assert(typeof GetMeetingRequest$ === "object");
assert(typeof GetMeetingResponse$ === "object");
assert(typeof ListAttendeesRequest$ === "object");
assert(typeof ListAttendeesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MediaPlacement$ === "object");
assert(typeof Meeting$ === "object");
assert(typeof MeetingFeaturesConfiguration$ === "object");
assert(typeof NotificationsConfiguration$ === "object");
assert(typeof StartMeetingTranscriptionRequest$ === "object");
assert(typeof StopMeetingTranscriptionRequest$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TranscriptionConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAttendeeCapabilitiesRequest$ === "object");
assert(typeof UpdateAttendeeCapabilitiesResponse$ === "object");
assert(typeof VideoFeatures$ === "object");
// enums
assert(typeof ContentResolution === "object");
assert(typeof MediaCapabilities === "object");
assert(typeof MediaPlacementNetworkType === "object");
assert(typeof MeetingFeatureStatus === "object");
assert(typeof TranscribeContentIdentificationType === "object");
assert(typeof TranscribeContentRedactionType === "object");
assert(typeof TranscribeLanguageCode === "object");
assert(typeof TranscribeMedicalContentIdentificationType === "object");
assert(typeof TranscribeMedicalLanguageCode === "object");
assert(typeof TranscribeMedicalRegion === "object");
assert(typeof TranscribeMedicalSpecialty === "object");
assert(typeof TranscribeMedicalType === "object");
assert(typeof TranscribePartialResultsStability === "object");
assert(typeof TranscribeRegion === "object");
assert(typeof TranscribeVocabularyFilterMethod === "object");
assert(typeof VideoResolution === "object");
// errors
assert(BadRequestException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof ForbiddenException$ === "object");
assert(LimitExceededException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceFailureException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnauthorizedException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(UnprocessableEntityException.prototype instanceof ChimeSDKMeetingsServiceException);
assert(typeof UnprocessableEntityException$ === "object");
assert(ChimeSDKMeetingsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAttendees === "function");
console.log(`ChimeSDKMeetings index test passed.`);
