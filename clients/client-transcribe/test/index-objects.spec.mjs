import {
  AbsoluteTimeRange$,
  BadRequestException,
  BadRequestException$,
  BaseModelName,
  CallAnalyticsFeature,
  CallAnalyticsJob$,
  CallAnalyticsJobDetails$,
  CallAnalyticsJobSettings$,
  CallAnalyticsJobStatus,
  CallAnalyticsJobSummary$,
  CallAnalyticsSkippedFeature$,
  CallAnalyticsSkippedReasonCode,
  CategoryProperties$,
  ChannelDefinition$,
  ClinicalNoteGenerationSettings$,
  CLMLanguageCode,
  ConflictException,
  ConflictException$,
  ContentRedaction$,
  CreateCallAnalyticsCategory$,
  CreateCallAnalyticsCategoryCommand,
  CreateCallAnalyticsCategoryRequest$,
  CreateCallAnalyticsCategoryResponse$,
  CreateLanguageModel$,
  CreateLanguageModelCommand,
  CreateLanguageModelRequest$,
  CreateLanguageModelResponse$,
  CreateMedicalVocabulary$,
  CreateMedicalVocabularyCommand,
  CreateMedicalVocabularyRequest$,
  CreateMedicalVocabularyResponse$,
  CreateVocabulary$,
  CreateVocabularyCommand,
  CreateVocabularyFilter$,
  CreateVocabularyFilterCommand,
  CreateVocabularyFilterRequest$,
  CreateVocabularyFilterResponse$,
  CreateVocabularyRequest$,
  CreateVocabularyResponse$,
  DeleteCallAnalyticsCategory$,
  DeleteCallAnalyticsCategoryCommand,
  DeleteCallAnalyticsCategoryRequest$,
  DeleteCallAnalyticsCategoryResponse$,
  DeleteCallAnalyticsJob$,
  DeleteCallAnalyticsJobCommand,
  DeleteCallAnalyticsJobRequest$,
  DeleteCallAnalyticsJobResponse$,
  DeleteLanguageModel$,
  DeleteLanguageModelCommand,
  DeleteLanguageModelRequest$,
  DeleteMedicalScribeJob$,
  DeleteMedicalScribeJobCommand,
  DeleteMedicalScribeJobRequest$,
  DeleteMedicalTranscriptionJob$,
  DeleteMedicalTranscriptionJobCommand,
  DeleteMedicalTranscriptionJobRequest$,
  DeleteMedicalVocabulary$,
  DeleteMedicalVocabularyCommand,
  DeleteMedicalVocabularyRequest$,
  DeleteTranscriptionJob$,
  DeleteTranscriptionJobCommand,
  DeleteTranscriptionJobRequest$,
  DeleteVocabulary$,
  DeleteVocabularyCommand,
  DeleteVocabularyFilter$,
  DeleteVocabularyFilterCommand,
  DeleteVocabularyFilterRequest$,
  DeleteVocabularyRequest$,
  DescribeLanguageModel$,
  DescribeLanguageModelCommand,
  DescribeLanguageModelRequest$,
  DescribeLanguageModelResponse$,
  GetCallAnalyticsCategory$,
  GetCallAnalyticsCategoryCommand,
  GetCallAnalyticsCategoryRequest$,
  GetCallAnalyticsCategoryResponse$,
  GetCallAnalyticsJob$,
  GetCallAnalyticsJobCommand,
  GetCallAnalyticsJobRequest$,
  GetCallAnalyticsJobResponse$,
  GetMedicalScribeJob$,
  GetMedicalScribeJobCommand,
  GetMedicalScribeJobRequest$,
  GetMedicalScribeJobResponse$,
  GetMedicalTranscriptionJob$,
  GetMedicalTranscriptionJobCommand,
  GetMedicalTranscriptionJobRequest$,
  GetMedicalTranscriptionJobResponse$,
  GetMedicalVocabulary$,
  GetMedicalVocabularyCommand,
  GetMedicalVocabularyRequest$,
  GetMedicalVocabularyResponse$,
  GetTranscriptionJob$,
  GetTranscriptionJobCommand,
  GetTranscriptionJobRequest$,
  GetTranscriptionJobResponse$,
  GetVocabulary$,
  GetVocabularyCommand,
  GetVocabularyFilter$,
  GetVocabularyFilterCommand,
  GetVocabularyFilterRequest$,
  GetVocabularyFilterResponse$,
  GetVocabularyRequest$,
  GetVocabularyResponse$,
  InputDataConfig$,
  InputType,
  InternalFailureException,
  InternalFailureException$,
  InterruptionFilter$,
  JobExecutionSettings$,
  LanguageCode,
  LanguageCodeItem$,
  LanguageIdSettings$,
  LanguageModel$,
  LimitExceededException,
  LimitExceededException$,
  ListCallAnalyticsCategories$,
  ListCallAnalyticsCategoriesCommand,
  ListCallAnalyticsCategoriesRequest$,
  ListCallAnalyticsCategoriesResponse$,
  ListCallAnalyticsJobs$,
  ListCallAnalyticsJobsCommand,
  ListCallAnalyticsJobsRequest$,
  ListCallAnalyticsJobsResponse$,
  ListLanguageModels$,
  ListLanguageModelsCommand,
  ListLanguageModelsRequest$,
  ListLanguageModelsResponse$,
  ListMedicalScribeJobs$,
  ListMedicalScribeJobsCommand,
  ListMedicalScribeJobsRequest$,
  ListMedicalScribeJobsResponse$,
  ListMedicalTranscriptionJobs$,
  ListMedicalTranscriptionJobsCommand,
  ListMedicalTranscriptionJobsRequest$,
  ListMedicalTranscriptionJobsResponse$,
  ListMedicalVocabularies$,
  ListMedicalVocabulariesCommand,
  ListMedicalVocabulariesRequest$,
  ListMedicalVocabulariesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTranscriptionJobs$,
  ListTranscriptionJobsCommand,
  ListTranscriptionJobsRequest$,
  ListTranscriptionJobsResponse$,
  ListVocabularies$,
  ListVocabulariesCommand,
  ListVocabulariesRequest$,
  ListVocabulariesResponse$,
  ListVocabularyFilters$,
  ListVocabularyFiltersCommand,
  ListVocabularyFiltersRequest$,
  ListVocabularyFiltersResponse$,
  Media$,
  MediaFormat,
  MedicalContentIdentificationType,
  MedicalScribeChannelDefinition$,
  MedicalScribeContext$,
  MedicalScribeJob$,
  MedicalScribeJobStatus,
  MedicalScribeJobSummary$,
  MedicalScribeLanguageCode,
  MedicalScribeNoteTemplate,
  MedicalScribeOutput$,
  MedicalScribeParticipantRole,
  MedicalScribePatientContext$,
  MedicalScribeSettings$,
  MedicalTranscript$,
  MedicalTranscriptionJob$,
  MedicalTranscriptionJobSummary$,
  MedicalTranscriptionSetting$,
  ModelSettings$,
  ModelStatus,
  NonTalkTimeFilter$,
  NotFoundException,
  NotFoundException$,
  OutputLocationType,
  paginateListCallAnalyticsCategories,
  paginateListCallAnalyticsJobs,
  paginateListLanguageModels,
  paginateListMedicalScribeJobs,
  paginateListMedicalTranscriptionJobs,
  paginateListMedicalVocabularies,
  paginateListTranscriptionJobs,
  paginateListVocabularies,
  paginateListVocabularyFilters,
  ParticipantRole,
  PiiEntityType,
  Pronouns,
  RedactionOutput,
  RedactionType,
  RelativeTimeRange$,
  Rule$,
  SentimentFilter$,
  SentimentValue,
  Settings$,
  Specialty,
  StartCallAnalyticsJob$,
  StartCallAnalyticsJobCommand,
  StartCallAnalyticsJobRequest$,
  StartCallAnalyticsJobResponse$,
  StartMedicalScribeJob$,
  StartMedicalScribeJobCommand,
  StartMedicalScribeJobRequest$,
  StartMedicalScribeJobResponse$,
  StartMedicalTranscriptionJob$,
  StartMedicalTranscriptionJobCommand,
  StartMedicalTranscriptionJobRequest$,
  StartMedicalTranscriptionJobResponse$,
  StartTranscriptionJob$,
  StartTranscriptionJobCommand,
  StartTranscriptionJobRequest$,
  StartTranscriptionJobResponse$,
  SubtitleFormat,
  Subtitles$,
  SubtitlesOutput$,
  Summarization$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ToxicityCategory,
  ToxicityDetectionSettings$,
  Transcribe,
  TranscribeClient,
  TranscribeServiceException,
  Transcript$,
  TranscriptFilter$,
  TranscriptFilterType,
  TranscriptionJob$,
  TranscriptionJobStatus,
  TranscriptionJobSummary$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCallAnalyticsCategory$,
  UpdateCallAnalyticsCategoryCommand,
  UpdateCallAnalyticsCategoryRequest$,
  UpdateCallAnalyticsCategoryResponse$,
  UpdateMedicalVocabulary$,
  UpdateMedicalVocabularyCommand,
  UpdateMedicalVocabularyRequest$,
  UpdateMedicalVocabularyResponse$,
  UpdateVocabulary$,
  UpdateVocabularyCommand,
  UpdateVocabularyFilter$,
  UpdateVocabularyFilterCommand,
  UpdateVocabularyFilterRequest$,
  UpdateVocabularyFilterResponse$,
  UpdateVocabularyRequest$,
  UpdateVocabularyResponse$,
  VocabularyFilterInfo$,
  VocabularyFilterMethod,
  VocabularyInfo$,
  VocabularyState,
  waitForCallAnalyticsJobCompleted,
  waitForLanguageModelCompleted,
  waitForMedicalScribeJobCompleted,
  waitForMedicalTranscriptionJobCompleted,
  waitForMedicalVocabularyReady,
  waitForTranscriptionJobCompleted,
  waitForVocabularyReady,
  waitUntilCallAnalyticsJobCompleted,
  waitUntilLanguageModelCompleted,
  waitUntilMedicalScribeJobCompleted,
  waitUntilMedicalTranscriptionJobCompleted,
  waitUntilMedicalVocabularyReady,
  waitUntilTranscriptionJobCompleted,
  waitUntilVocabularyReady,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TranscribeClient === "function");
assert(typeof Transcribe === "function");
// commands
assert(typeof CreateCallAnalyticsCategoryCommand === "function");
assert(typeof CreateCallAnalyticsCategory$ === "object");
assert(typeof CreateLanguageModelCommand === "function");
assert(typeof CreateLanguageModel$ === "object");
assert(typeof CreateMedicalVocabularyCommand === "function");
assert(typeof CreateMedicalVocabulary$ === "object");
assert(typeof CreateVocabularyCommand === "function");
assert(typeof CreateVocabulary$ === "object");
assert(typeof CreateVocabularyFilterCommand === "function");
assert(typeof CreateVocabularyFilter$ === "object");
assert(typeof DeleteCallAnalyticsCategoryCommand === "function");
assert(typeof DeleteCallAnalyticsCategory$ === "object");
assert(typeof DeleteCallAnalyticsJobCommand === "function");
assert(typeof DeleteCallAnalyticsJob$ === "object");
assert(typeof DeleteLanguageModelCommand === "function");
assert(typeof DeleteLanguageModel$ === "object");
assert(typeof DeleteMedicalScribeJobCommand === "function");
assert(typeof DeleteMedicalScribeJob$ === "object");
assert(typeof DeleteMedicalTranscriptionJobCommand === "function");
assert(typeof DeleteMedicalTranscriptionJob$ === "object");
assert(typeof DeleteMedicalVocabularyCommand === "function");
assert(typeof DeleteMedicalVocabulary$ === "object");
assert(typeof DeleteTranscriptionJobCommand === "function");
assert(typeof DeleteTranscriptionJob$ === "object");
assert(typeof DeleteVocabularyCommand === "function");
assert(typeof DeleteVocabulary$ === "object");
assert(typeof DeleteVocabularyFilterCommand === "function");
assert(typeof DeleteVocabularyFilter$ === "object");
assert(typeof DescribeLanguageModelCommand === "function");
assert(typeof DescribeLanguageModel$ === "object");
assert(typeof GetCallAnalyticsCategoryCommand === "function");
assert(typeof GetCallAnalyticsCategory$ === "object");
assert(typeof GetCallAnalyticsJobCommand === "function");
assert(typeof GetCallAnalyticsJob$ === "object");
assert(typeof GetMedicalScribeJobCommand === "function");
assert(typeof GetMedicalScribeJob$ === "object");
assert(typeof GetMedicalTranscriptionJobCommand === "function");
assert(typeof GetMedicalTranscriptionJob$ === "object");
assert(typeof GetMedicalVocabularyCommand === "function");
assert(typeof GetMedicalVocabulary$ === "object");
assert(typeof GetTranscriptionJobCommand === "function");
assert(typeof GetTranscriptionJob$ === "object");
assert(typeof GetVocabularyCommand === "function");
assert(typeof GetVocabulary$ === "object");
assert(typeof GetVocabularyFilterCommand === "function");
assert(typeof GetVocabularyFilter$ === "object");
assert(typeof ListCallAnalyticsCategoriesCommand === "function");
assert(typeof ListCallAnalyticsCategories$ === "object");
assert(typeof ListCallAnalyticsJobsCommand === "function");
assert(typeof ListCallAnalyticsJobs$ === "object");
assert(typeof ListLanguageModelsCommand === "function");
assert(typeof ListLanguageModels$ === "object");
assert(typeof ListMedicalScribeJobsCommand === "function");
assert(typeof ListMedicalScribeJobs$ === "object");
assert(typeof ListMedicalTranscriptionJobsCommand === "function");
assert(typeof ListMedicalTranscriptionJobs$ === "object");
assert(typeof ListMedicalVocabulariesCommand === "function");
assert(typeof ListMedicalVocabularies$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTranscriptionJobsCommand === "function");
assert(typeof ListTranscriptionJobs$ === "object");
assert(typeof ListVocabulariesCommand === "function");
assert(typeof ListVocabularies$ === "object");
assert(typeof ListVocabularyFiltersCommand === "function");
assert(typeof ListVocabularyFilters$ === "object");
assert(typeof StartCallAnalyticsJobCommand === "function");
assert(typeof StartCallAnalyticsJob$ === "object");
assert(typeof StartMedicalScribeJobCommand === "function");
assert(typeof StartMedicalScribeJob$ === "object");
assert(typeof StartMedicalTranscriptionJobCommand === "function");
assert(typeof StartMedicalTranscriptionJob$ === "object");
assert(typeof StartTranscriptionJobCommand === "function");
assert(typeof StartTranscriptionJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCallAnalyticsCategoryCommand === "function");
assert(typeof UpdateCallAnalyticsCategory$ === "object");
assert(typeof UpdateMedicalVocabularyCommand === "function");
assert(typeof UpdateMedicalVocabulary$ === "object");
assert(typeof UpdateVocabularyCommand === "function");
assert(typeof UpdateVocabulary$ === "object");
assert(typeof UpdateVocabularyFilterCommand === "function");
assert(typeof UpdateVocabularyFilter$ === "object");
// structural schemas
assert(typeof AbsoluteTimeRange$ === "object");
assert(typeof CallAnalyticsJob$ === "object");
assert(typeof CallAnalyticsJobDetails$ === "object");
assert(typeof CallAnalyticsJobSettings$ === "object");
assert(typeof CallAnalyticsJobSummary$ === "object");
assert(typeof CallAnalyticsSkippedFeature$ === "object");
assert(typeof CategoryProperties$ === "object");
assert(typeof ChannelDefinition$ === "object");
assert(typeof ClinicalNoteGenerationSettings$ === "object");
assert(typeof ContentRedaction$ === "object");
assert(typeof CreateCallAnalyticsCategoryRequest$ === "object");
assert(typeof CreateCallAnalyticsCategoryResponse$ === "object");
assert(typeof CreateLanguageModelRequest$ === "object");
assert(typeof CreateLanguageModelResponse$ === "object");
assert(typeof CreateMedicalVocabularyRequest$ === "object");
assert(typeof CreateMedicalVocabularyResponse$ === "object");
assert(typeof CreateVocabularyFilterRequest$ === "object");
assert(typeof CreateVocabularyFilterResponse$ === "object");
assert(typeof CreateVocabularyRequest$ === "object");
assert(typeof CreateVocabularyResponse$ === "object");
assert(typeof DeleteCallAnalyticsCategoryRequest$ === "object");
assert(typeof DeleteCallAnalyticsCategoryResponse$ === "object");
assert(typeof DeleteCallAnalyticsJobRequest$ === "object");
assert(typeof DeleteCallAnalyticsJobResponse$ === "object");
assert(typeof DeleteLanguageModelRequest$ === "object");
assert(typeof DeleteMedicalScribeJobRequest$ === "object");
assert(typeof DeleteMedicalTranscriptionJobRequest$ === "object");
assert(typeof DeleteMedicalVocabularyRequest$ === "object");
assert(typeof DeleteTranscriptionJobRequest$ === "object");
assert(typeof DeleteVocabularyFilterRequest$ === "object");
assert(typeof DeleteVocabularyRequest$ === "object");
assert(typeof DescribeLanguageModelRequest$ === "object");
assert(typeof DescribeLanguageModelResponse$ === "object");
assert(typeof GetCallAnalyticsCategoryRequest$ === "object");
assert(typeof GetCallAnalyticsCategoryResponse$ === "object");
assert(typeof GetCallAnalyticsJobRequest$ === "object");
assert(typeof GetCallAnalyticsJobResponse$ === "object");
assert(typeof GetMedicalScribeJobRequest$ === "object");
assert(typeof GetMedicalScribeJobResponse$ === "object");
assert(typeof GetMedicalTranscriptionJobRequest$ === "object");
assert(typeof GetMedicalTranscriptionJobResponse$ === "object");
assert(typeof GetMedicalVocabularyRequest$ === "object");
assert(typeof GetMedicalVocabularyResponse$ === "object");
assert(typeof GetTranscriptionJobRequest$ === "object");
assert(typeof GetTranscriptionJobResponse$ === "object");
assert(typeof GetVocabularyFilterRequest$ === "object");
assert(typeof GetVocabularyFilterResponse$ === "object");
assert(typeof GetVocabularyRequest$ === "object");
assert(typeof GetVocabularyResponse$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof InterruptionFilter$ === "object");
assert(typeof JobExecutionSettings$ === "object");
assert(typeof LanguageCodeItem$ === "object");
assert(typeof LanguageIdSettings$ === "object");
assert(typeof LanguageModel$ === "object");
assert(typeof ListCallAnalyticsCategoriesRequest$ === "object");
assert(typeof ListCallAnalyticsCategoriesResponse$ === "object");
assert(typeof ListCallAnalyticsJobsRequest$ === "object");
assert(typeof ListCallAnalyticsJobsResponse$ === "object");
assert(typeof ListLanguageModelsRequest$ === "object");
assert(typeof ListLanguageModelsResponse$ === "object");
assert(typeof ListMedicalScribeJobsRequest$ === "object");
assert(typeof ListMedicalScribeJobsResponse$ === "object");
assert(typeof ListMedicalTranscriptionJobsRequest$ === "object");
assert(typeof ListMedicalTranscriptionJobsResponse$ === "object");
assert(typeof ListMedicalVocabulariesRequest$ === "object");
assert(typeof ListMedicalVocabulariesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTranscriptionJobsRequest$ === "object");
assert(typeof ListTranscriptionJobsResponse$ === "object");
assert(typeof ListVocabulariesRequest$ === "object");
assert(typeof ListVocabulariesResponse$ === "object");
assert(typeof ListVocabularyFiltersRequest$ === "object");
assert(typeof ListVocabularyFiltersResponse$ === "object");
assert(typeof Media$ === "object");
assert(typeof MedicalScribeChannelDefinition$ === "object");
assert(typeof MedicalScribeContext$ === "object");
assert(typeof MedicalScribeJob$ === "object");
assert(typeof MedicalScribeJobSummary$ === "object");
assert(typeof MedicalScribeOutput$ === "object");
assert(typeof MedicalScribePatientContext$ === "object");
assert(typeof MedicalScribeSettings$ === "object");
assert(typeof MedicalTranscript$ === "object");
assert(typeof MedicalTranscriptionJob$ === "object");
assert(typeof MedicalTranscriptionJobSummary$ === "object");
assert(typeof MedicalTranscriptionSetting$ === "object");
assert(typeof ModelSettings$ === "object");
assert(typeof NonTalkTimeFilter$ === "object");
assert(typeof RelativeTimeRange$ === "object");
assert(typeof Rule$ === "object");
assert(typeof SentimentFilter$ === "object");
assert(typeof Settings$ === "object");
assert(typeof StartCallAnalyticsJobRequest$ === "object");
assert(typeof StartCallAnalyticsJobResponse$ === "object");
assert(typeof StartMedicalScribeJobRequest$ === "object");
assert(typeof StartMedicalScribeJobResponse$ === "object");
assert(typeof StartMedicalTranscriptionJobRequest$ === "object");
assert(typeof StartMedicalTranscriptionJobResponse$ === "object");
assert(typeof StartTranscriptionJobRequest$ === "object");
assert(typeof StartTranscriptionJobResponse$ === "object");
assert(typeof Subtitles$ === "object");
assert(typeof SubtitlesOutput$ === "object");
assert(typeof Summarization$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof ToxicityDetectionSettings$ === "object");
assert(typeof Transcript$ === "object");
assert(typeof TranscriptFilter$ === "object");
assert(typeof TranscriptionJob$ === "object");
assert(typeof TranscriptionJobSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCallAnalyticsCategoryRequest$ === "object");
assert(typeof UpdateCallAnalyticsCategoryResponse$ === "object");
assert(typeof UpdateMedicalVocabularyRequest$ === "object");
assert(typeof UpdateMedicalVocabularyResponse$ === "object");
assert(typeof UpdateVocabularyFilterRequest$ === "object");
assert(typeof UpdateVocabularyFilterResponse$ === "object");
assert(typeof UpdateVocabularyRequest$ === "object");
assert(typeof UpdateVocabularyResponse$ === "object");
assert(typeof VocabularyFilterInfo$ === "object");
assert(typeof VocabularyInfo$ === "object");
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
assert(BadRequestException.prototype instanceof TranscribeServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof TranscribeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalFailureException.prototype instanceof TranscribeServiceException);
assert(typeof InternalFailureException$ === "object");
assert(LimitExceededException.prototype instanceof TranscribeServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof TranscribeServiceException);
assert(typeof NotFoundException$ === "object");
assert(TranscribeServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCallAnalyticsJobCompleted === "function");
assert(typeof waitForLanguageModelCompleted === "function");
assert(typeof waitForMedicalScribeJobCompleted === "function");
assert(typeof waitForMedicalTranscriptionJobCompleted === "function");
assert(typeof waitForMedicalVocabularyReady === "function");
assert(typeof waitForTranscriptionJobCompleted === "function");
assert(typeof waitForVocabularyReady === "function");
assert(typeof waitUntilCallAnalyticsJobCompleted === "function");
assert(typeof waitUntilLanguageModelCompleted === "function");
assert(typeof waitUntilMedicalScribeJobCompleted === "function");
assert(typeof waitUntilMedicalTranscriptionJobCompleted === "function");
assert(typeof waitUntilMedicalVocabularyReady === "function");
assert(typeof waitUntilTranscriptionJobCompleted === "function");
assert(typeof waitUntilVocabularyReady === "function");
// paginators
assert(typeof paginateListCallAnalyticsCategories === "function");
assert(typeof paginateListCallAnalyticsJobs === "function");
assert(typeof paginateListLanguageModels === "function");
assert(typeof paginateListMedicalScribeJobs === "function");
assert(typeof paginateListMedicalTranscriptionJobs === "function");
assert(typeof paginateListMedicalVocabularies === "function");
assert(typeof paginateListTranscriptionJobs === "function");
assert(typeof paginateListVocabularies === "function");
assert(typeof paginateListVocabularyFilters === "function");
console.log(`Transcribe index test passed.`);
