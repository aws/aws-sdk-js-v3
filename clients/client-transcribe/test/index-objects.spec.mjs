import {
  BaseModelName,
  CLMLanguageCode,
  CallAnalyticsFeature,
  CallAnalyticsJobStatus,
  CallAnalyticsSkippedReasonCode,
  CreateCallAnalyticsCategoryCommand,
  CreateLanguageModelCommand,
  CreateMedicalVocabularyCommand,
  CreateVocabularyCommand,
  CreateVocabularyFilterCommand,
  DeleteCallAnalyticsCategoryCommand,
  DeleteCallAnalyticsJobCommand,
  DeleteLanguageModelCommand,
  DeleteMedicalScribeJobCommand,
  DeleteMedicalTranscriptionJobCommand,
  DeleteMedicalVocabularyCommand,
  DeleteTranscriptionJobCommand,
  DeleteVocabularyCommand,
  DeleteVocabularyFilterCommand,
  DescribeLanguageModelCommand,
  GetCallAnalyticsCategoryCommand,
  GetCallAnalyticsJobCommand,
  GetMedicalScribeJobCommand,
  GetMedicalTranscriptionJobCommand,
  GetMedicalVocabularyCommand,
  GetTranscriptionJobCommand,
  GetVocabularyCommand,
  GetVocabularyFilterCommand,
  InputType,
  LanguageCode,
  ListCallAnalyticsCategoriesCommand,
  ListCallAnalyticsJobsCommand,
  ListLanguageModelsCommand,
  ListMedicalScribeJobsCommand,
  ListMedicalTranscriptionJobsCommand,
  ListMedicalVocabulariesCommand,
  ListTagsForResourceCommand,
  ListTranscriptionJobsCommand,
  ListVocabulariesCommand,
  ListVocabularyFiltersCommand,
  MediaFormat,
  MedicalContentIdentificationType,
  MedicalScribeJobStatus,
  MedicalScribeLanguageCode,
  MedicalScribeNoteTemplate,
  MedicalScribeParticipantRole,
  ModelStatus,
  OutputLocationType,
  ParticipantRole,
  PiiEntityType,
  Pronouns,
  RedactionOutput,
  RedactionType,
  SentimentValue,
  Specialty,
  StartCallAnalyticsJobCommand,
  StartMedicalScribeJobCommand,
  StartMedicalTranscriptionJobCommand,
  StartTranscriptionJobCommand,
  SubtitleFormat,
  TagResourceCommand,
  ToxicityCategory,
  Transcribe,
  TranscribeClient,
  TranscribeServiceException,
  TranscriptFilterType,
  TranscriptionJobStatus,
  Type,
  UntagResourceCommand,
  UpdateCallAnalyticsCategoryCommand,
  UpdateMedicalVocabularyCommand,
  UpdateVocabularyCommand,
  UpdateVocabularyFilterCommand,
  VocabularyFilterMethod,
  VocabularyState,
  paginateListCallAnalyticsCategories,
  paginateListCallAnalyticsJobs,
  paginateListLanguageModels,
  paginateListMedicalScribeJobs,
  paginateListMedicalTranscriptionJobs,
  paginateListMedicalVocabularies,
  paginateListTranscriptionJobs,
  paginateListVocabularies,
  paginateListVocabularyFilters,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TranscribeClient === "function")
assert(typeof Transcribe === "function")
// commands
assert(typeof CreateCallAnalyticsCategoryCommand === "function")
assert(typeof CreateLanguageModelCommand === "function")
assert(typeof CreateMedicalVocabularyCommand === "function")
assert(typeof CreateVocabularyCommand === "function")
assert(typeof CreateVocabularyFilterCommand === "function")
assert(typeof DeleteCallAnalyticsCategoryCommand === "function")
assert(typeof DeleteCallAnalyticsJobCommand === "function")
assert(typeof DeleteLanguageModelCommand === "function")
assert(typeof DeleteMedicalScribeJobCommand === "function")
assert(typeof DeleteMedicalTranscriptionJobCommand === "function")
assert(typeof DeleteMedicalVocabularyCommand === "function")
assert(typeof DeleteTranscriptionJobCommand === "function")
assert(typeof DeleteVocabularyCommand === "function")
assert(typeof DeleteVocabularyFilterCommand === "function")
assert(typeof DescribeLanguageModelCommand === "function")
assert(typeof GetCallAnalyticsCategoryCommand === "function")
assert(typeof GetCallAnalyticsJobCommand === "function")
assert(typeof GetMedicalScribeJobCommand === "function")
assert(typeof GetMedicalTranscriptionJobCommand === "function")
assert(typeof GetMedicalVocabularyCommand === "function")
assert(typeof GetTranscriptionJobCommand === "function")
assert(typeof GetVocabularyCommand === "function")
assert(typeof GetVocabularyFilterCommand === "function")
assert(typeof ListCallAnalyticsCategoriesCommand === "function")
assert(typeof ListCallAnalyticsJobsCommand === "function")
assert(typeof ListLanguageModelsCommand === "function")
assert(typeof ListMedicalScribeJobsCommand === "function")
assert(typeof ListMedicalTranscriptionJobsCommand === "function")
assert(typeof ListMedicalVocabulariesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTranscriptionJobsCommand === "function")
assert(typeof ListVocabulariesCommand === "function")
assert(typeof ListVocabularyFiltersCommand === "function")
assert(typeof StartCallAnalyticsJobCommand === "function")
assert(typeof StartMedicalScribeJobCommand === "function")
assert(typeof StartMedicalTranscriptionJobCommand === "function")
assert(typeof StartTranscriptionJobCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCallAnalyticsCategoryCommand === "function")
assert(typeof UpdateMedicalVocabularyCommand === "function")
assert(typeof UpdateVocabularyCommand === "function")
assert(typeof UpdateVocabularyFilterCommand === "function")
// enums
assert(typeof BaseModelName === "object");
assert(typeof CallAnalyticsFeature === "object");
assert(typeof CallAnalyticsJobStatus === "object");
assert(typeof CallAnalyticsSkippedReasonCode === "object");
assert(typeof CLMLanguageCode === "object");
assert(typeof InputType === "object");
assert(typeof LanguageCode === "object");
assert(typeof MediaFormat === "object");
assert(typeof MedicalContentIdentificationType === "object");
assert(typeof MedicalScribeJobStatus === "object");
assert(typeof MedicalScribeLanguageCode === "object");
assert(typeof MedicalScribeNoteTemplate === "object");
assert(typeof MedicalScribeParticipantRole === "object");
assert(typeof ModelStatus === "object");
assert(typeof OutputLocationType === "object");
assert(typeof ParticipantRole === "object");
assert(typeof PiiEntityType === "object");
assert(typeof Pronouns === "object");
assert(typeof RedactionOutput === "object");
assert(typeof RedactionType === "object");
assert(typeof SentimentValue === "object");
assert(typeof Specialty === "object");
assert(typeof SubtitleFormat === "object");
assert(typeof ToxicityCategory === "object");
assert(typeof TranscriptFilterType === "object");
assert(typeof TranscriptionJobStatus === "object");
assert(typeof Type === "object");
assert(typeof VocabularyFilterMethod === "object");
assert(typeof VocabularyState === "object");
// errors
assert(TranscribeServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListCallAnalyticsCategories === "function")
assert(typeof paginateListCallAnalyticsJobs === "function")
assert(typeof paginateListLanguageModels === "function")
assert(typeof paginateListMedicalScribeJobs === "function")
assert(typeof paginateListMedicalTranscriptionJobs === "function")
assert(typeof paginateListMedicalVocabularies === "function")
assert(typeof paginateListTranscriptionJobs === "function")
assert(typeof paginateListVocabularies === "function")
assert(typeof paginateListVocabularyFilters === "function")
console.log(`Transcribe index test passed.`);
