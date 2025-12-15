import {
  Alternative$,
  AudioEvent$,
  AudioStream$,
  BadRequestException,
  BadRequestException$,
  CallAnalyticsEntity$,
  CallAnalyticsItem$,
  CallAnalyticsLanguageCode,
  CallAnalyticsLanguageWithScore$,
  CallAnalyticsTranscriptResultStream$,
  CategoryEvent$,
  ChannelDefinition$,
  CharacterOffsets$,
  ClinicalNoteGenerationResult$,
  ClinicalNoteGenerationSettings$,
  ClinicalNoteGenerationStatus,
  ConfigurationEvent$,
  ConflictException,
  ConflictException$,
  ContentIdentificationType,
  ContentRedactionOutput,
  ContentRedactionType,
  Entity$,
  GetMedicalScribeStream$,
  GetMedicalScribeStreamCommand,
  GetMedicalScribeStreamRequest$,
  GetMedicalScribeStreamResponse$,
  InternalFailureException,
  InternalFailureException$,
  IssueDetected$,
  Item$,
  ItemType,
  LanguageCode,
  LanguageWithScore$,
  LimitExceededException,
  LimitExceededException$,
  MediaEncoding,
  MedicalAlternative$,
  MedicalContentIdentificationType,
  MedicalEntity$,
  MedicalItem$,
  MedicalResult$,
  MedicalScribeAudioEvent$,
  MedicalScribeChannelDefinition$,
  MedicalScribeConfigurationEvent$,
  MedicalScribeContext$,
  MedicalScribeEncryptionSettings$,
  MedicalScribeInputStream$,
  MedicalScribeLanguageCode,
  MedicalScribeMediaEncoding,
  MedicalScribeNoteTemplate,
  MedicalScribeParticipantRole,
  MedicalScribePatientContext$,
  MedicalScribePostStreamAnalyticsResult$,
  MedicalScribePostStreamAnalyticsSettings$,
  MedicalScribeResultStream$,
  MedicalScribeSessionControlEvent$,
  MedicalScribeSessionControlEventType,
  MedicalScribeStreamDetails$,
  MedicalScribeStreamStatus,
  MedicalScribeTranscriptEvent$,
  MedicalScribeTranscriptItem$,
  MedicalScribeTranscriptItemType,
  MedicalScribeTranscriptSegment$,
  MedicalScribeVocabularyFilterMethod,
  MedicalTranscript$,
  MedicalTranscriptEvent$,
  MedicalTranscriptResultStream$,
  PartialResultsStability,
  ParticipantRole,
  PointsOfInterest$,
  PostCallAnalyticsSettings$,
  Pronouns,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Result$,
  Sentiment,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  Specialty,
  StartCallAnalyticsStreamTranscription$,
  StartCallAnalyticsStreamTranscriptionCommand,
  StartCallAnalyticsStreamTranscriptionRequest$,
  StartCallAnalyticsStreamTranscriptionResponse$,
  StartMedicalScribeStream$,
  StartMedicalScribeStreamCommand,
  StartMedicalScribeStreamRequest$,
  StartMedicalScribeStreamResponse$,
  StartMedicalStreamTranscription$,
  StartMedicalStreamTranscriptionCommand,
  StartMedicalStreamTranscriptionRequest$,
  StartMedicalStreamTranscriptionResponse$,
  StartStreamTranscription$,
  StartStreamTranscriptionCommand,
  StartStreamTranscriptionRequest$,
  StartStreamTranscriptionResponse$,
  TimestampRange$,
  TranscribeStreaming,
  TranscribeStreamingClient,
  TranscribeStreamingServiceException,
  Transcript$,
  TranscriptEvent$,
  TranscriptResultStream$,
  Type,
  UtteranceEvent$,
  VocabularyFilterMethod,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TranscribeStreamingClient === "function");
assert(typeof TranscribeStreaming === "function");
// commands
assert(typeof GetMedicalScribeStreamCommand === "function");
assert(typeof GetMedicalScribeStream$ === "object");
assert(typeof StartCallAnalyticsStreamTranscriptionCommand === "function");
assert(typeof StartCallAnalyticsStreamTranscription$ === "object");
assert(typeof StartMedicalScribeStreamCommand === "function");
assert(typeof StartMedicalScribeStream$ === "object");
assert(typeof StartMedicalStreamTranscriptionCommand === "function");
assert(typeof StartMedicalStreamTranscription$ === "object");
assert(typeof StartStreamTranscriptionCommand === "function");
assert(typeof StartStreamTranscription$ === "object");
// structural schemas
assert(typeof Alternative$ === "object");
assert(typeof AudioEvent$ === "object");
assert(typeof AudioStream$ === "object");
assert(typeof CallAnalyticsEntity$ === "object");
assert(typeof CallAnalyticsItem$ === "object");
assert(typeof CallAnalyticsLanguageWithScore$ === "object");
assert(typeof CallAnalyticsTranscriptResultStream$ === "object");
assert(typeof CategoryEvent$ === "object");
assert(typeof ChannelDefinition$ === "object");
assert(typeof CharacterOffsets$ === "object");
assert(typeof ClinicalNoteGenerationResult$ === "object");
assert(typeof ClinicalNoteGenerationSettings$ === "object");
assert(typeof ConfigurationEvent$ === "object");
assert(typeof Entity$ === "object");
assert(typeof GetMedicalScribeStreamRequest$ === "object");
assert(typeof GetMedicalScribeStreamResponse$ === "object");
assert(typeof IssueDetected$ === "object");
assert(typeof Item$ === "object");
assert(typeof LanguageWithScore$ === "object");
assert(typeof MedicalAlternative$ === "object");
assert(typeof MedicalEntity$ === "object");
assert(typeof MedicalItem$ === "object");
assert(typeof MedicalResult$ === "object");
assert(typeof MedicalScribeAudioEvent$ === "object");
assert(typeof MedicalScribeChannelDefinition$ === "object");
assert(typeof MedicalScribeConfigurationEvent$ === "object");
assert(typeof MedicalScribeContext$ === "object");
assert(typeof MedicalScribeEncryptionSettings$ === "object");
assert(typeof MedicalScribeInputStream$ === "object");
assert(typeof MedicalScribePatientContext$ === "object");
assert(typeof MedicalScribePostStreamAnalyticsResult$ === "object");
assert(typeof MedicalScribePostStreamAnalyticsSettings$ === "object");
assert(typeof MedicalScribeResultStream$ === "object");
assert(typeof MedicalScribeSessionControlEvent$ === "object");
assert(typeof MedicalScribeStreamDetails$ === "object");
assert(typeof MedicalScribeTranscriptEvent$ === "object");
assert(typeof MedicalScribeTranscriptItem$ === "object");
assert(typeof MedicalScribeTranscriptSegment$ === "object");
assert(typeof MedicalTranscript$ === "object");
assert(typeof MedicalTranscriptEvent$ === "object");
assert(typeof MedicalTranscriptResultStream$ === "object");
assert(typeof PointsOfInterest$ === "object");
assert(typeof PostCallAnalyticsSettings$ === "object");
assert(typeof Result$ === "object");
assert(typeof StartCallAnalyticsStreamTranscriptionRequest$ === "object");
assert(typeof StartCallAnalyticsStreamTranscriptionResponse$ === "object");
assert(typeof StartMedicalScribeStreamRequest$ === "object");
assert(typeof StartMedicalScribeStreamResponse$ === "object");
assert(typeof StartMedicalStreamTranscriptionRequest$ === "object");
assert(typeof StartMedicalStreamTranscriptionResponse$ === "object");
assert(typeof StartStreamTranscriptionRequest$ === "object");
assert(typeof StartStreamTranscriptionResponse$ === "object");
assert(typeof TimestampRange$ === "object");
assert(typeof Transcript$ === "object");
assert(typeof TranscriptEvent$ === "object");
assert(typeof TranscriptResultStream$ === "object");
assert(typeof UtteranceEvent$ === "object");
// enums
assert(typeof CallAnalyticsLanguageCode === "object");
assert(typeof ClinicalNoteGenerationStatus === "object");
assert(typeof ContentIdentificationType === "object");
assert(typeof ContentRedactionOutput === "object");
assert(typeof ContentRedactionType === "object");
assert(typeof ItemType === "object");
assert(typeof LanguageCode === "object");
assert(typeof MediaEncoding === "object");
assert(typeof MedicalContentIdentificationType === "object");
assert(typeof MedicalScribeLanguageCode === "object");
assert(typeof MedicalScribeMediaEncoding === "object");
assert(typeof MedicalScribeNoteTemplate === "object");
assert(typeof MedicalScribeParticipantRole === "object");
assert(typeof MedicalScribeSessionControlEventType === "object");
assert(typeof MedicalScribeStreamStatus === "object");
assert(typeof MedicalScribeTranscriptItemType === "object");
assert(typeof MedicalScribeVocabularyFilterMethod === "object");
assert(typeof PartialResultsStability === "object");
assert(typeof ParticipantRole === "object");
assert(typeof Pronouns === "object");
assert(typeof Sentiment === "object");
assert(typeof Specialty === "object");
assert(typeof Type === "object");
assert(typeof VocabularyFilterMethod === "object");
// errors
assert(BadRequestException.prototype instanceof TranscribeStreamingServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof TranscribeStreamingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalFailureException.prototype instanceof TranscribeStreamingServiceException);
assert(typeof InternalFailureException$ === "object");
assert(LimitExceededException.prototype instanceof TranscribeStreamingServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TranscribeStreamingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof TranscribeStreamingServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TranscribeStreamingServiceException.prototype instanceof Error);
console.log(`TranscribeStreaming index test passed.`);
