import {
  BadRequestException,
  CallAnalyticsLanguageCode,
  ClinicalNoteGenerationStatus,
  ConflictException,
  ContentIdentificationType,
  ContentRedactionOutput,
  ContentRedactionType,
  GetMedicalScribeStreamCommand,
  InternalFailureException,
  ItemType,
  LanguageCode,
  LimitExceededException,
  MediaEncoding,
  MedicalContentIdentificationType,
  MedicalScribeLanguageCode,
  MedicalScribeMediaEncoding,
  MedicalScribeNoteTemplate,
  MedicalScribeParticipantRole,
  MedicalScribeSessionControlEventType,
  MedicalScribeStreamStatus,
  MedicalScribeTranscriptItemType,
  MedicalScribeVocabularyFilterMethod,
  PartialResultsStability,
  ParticipantRole,
  Pronouns,
  Sentiment,
  ServiceUnavailableException,
  Specialty,
  StartCallAnalyticsStreamTranscriptionCommand,
  StartMedicalScribeStreamCommand,
  StartMedicalStreamTranscriptionCommand,
  StartStreamTranscriptionCommand,
  TranscribeStreaming,
  TranscribeStreamingClient,
  TranscribeStreamingServiceException,
  Type,
  VocabularyFilterMethod,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TranscribeStreamingClient === "function");
assert(typeof TranscribeStreaming === "function");
// commands
assert(typeof GetMedicalScribeStreamCommand === "function");
assert(typeof StartCallAnalyticsStreamTranscriptionCommand === "function");
assert(typeof StartMedicalScribeStreamCommand === "function");
assert(typeof StartMedicalStreamTranscriptionCommand === "function");
assert(typeof StartStreamTranscriptionCommand === "function");
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
assert(ConflictException.prototype instanceof TranscribeStreamingServiceException);
assert(InternalFailureException.prototype instanceof TranscribeStreamingServiceException);
assert(LimitExceededException.prototype instanceof TranscribeStreamingServiceException);
assert(ServiceUnavailableException.prototype instanceof TranscribeStreamingServiceException);
assert(TranscribeStreamingServiceException.prototype instanceof Error);
console.log(`TranscribeStreaming index test passed.`);
