import {
  BatchCreateAttendeeCommand,
  BatchUpdateAttendeeCapabilitiesExceptCommand,
  ChimeSDKMeetings,
  ChimeSDKMeetingsClient,
  ChimeSDKMeetingsServiceException,
  ContentResolution,
  CreateAttendeeCommand,
  CreateMeetingCommand,
  CreateMeetingWithAttendeesCommand,
  DeleteAttendeeCommand,
  DeleteMeetingCommand,
  GetAttendeeCommand,
  GetMeetingCommand,
  ListAttendeesCommand,
  ListTagsForResourceCommand,
  MediaCapabilities,
  MediaPlacementNetworkType,
  MeetingFeatureStatus,
  StartMeetingTranscriptionCommand,
  StopMeetingTranscriptionCommand,
  TagResourceCommand,
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
  UntagResourceCommand,
  UpdateAttendeeCapabilitiesCommand,
  VideoResolution,
  paginateListAttendees,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeSDKMeetingsClient === "function")
assert(typeof ChimeSDKMeetings === "function")
// commands
assert(typeof BatchCreateAttendeeCommand === "function")
assert(typeof BatchUpdateAttendeeCapabilitiesExceptCommand === "function")
assert(typeof CreateAttendeeCommand === "function")
assert(typeof CreateMeetingCommand === "function")
assert(typeof CreateMeetingWithAttendeesCommand === "function")
assert(typeof DeleteAttendeeCommand === "function")
assert(typeof DeleteMeetingCommand === "function")
assert(typeof GetAttendeeCommand === "function")
assert(typeof GetMeetingCommand === "function")
assert(typeof ListAttendeesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof StartMeetingTranscriptionCommand === "function")
assert(typeof StopMeetingTranscriptionCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAttendeeCapabilitiesCommand === "function")
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
assert(ChimeSDKMeetingsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAttendees === "function")
console.log(`ChimeSDKMeetings index test passed.`);
