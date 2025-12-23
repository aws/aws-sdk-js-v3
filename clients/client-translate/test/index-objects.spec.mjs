import {
  AppliedTerminology$,
  Brevity,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictException,
  ConflictException$,
  CreateParallelData$,
  CreateParallelDataCommand,
  CreateParallelDataRequest$,
  CreateParallelDataResponse$,
  DeleteParallelData$,
  DeleteParallelDataCommand,
  DeleteParallelDataRequest$,
  DeleteParallelDataResponse$,
  DeleteTerminology$,
  DeleteTerminologyCommand,
  DeleteTerminologyRequest$,
  DescribeTextTranslationJob$,
  DescribeTextTranslationJobCommand,
  DescribeTextTranslationJobRequest$,
  DescribeTextTranslationJobResponse$,
  DetectedLanguageLowConfidenceException,
  DetectedLanguageLowConfidenceException$,
  Directionality,
  DisplayLanguageCode,
  Document$,
  EncryptionKey$,
  EncryptionKeyType,
  Formality,
  GetParallelData$,
  GetParallelDataCommand,
  GetParallelDataRequest$,
  GetParallelDataResponse$,
  GetTerminology$,
  GetTerminologyCommand,
  GetTerminologyRequest$,
  GetTerminologyResponse$,
  ImportTerminology$,
  ImportTerminologyCommand,
  ImportTerminologyRequest$,
  ImportTerminologyResponse$,
  InputDataConfig$,
  InternalServerException,
  InternalServerException$,
  InvalidFilterException,
  InvalidFilterException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidRequestException,
  InvalidRequestException$,
  JobDetails$,
  JobStatus,
  Language$,
  LimitExceededException,
  LimitExceededException$,
  ListLanguages$,
  ListLanguagesCommand,
  ListLanguagesRequest$,
  ListLanguagesResponse$,
  ListParallelData$,
  ListParallelDataCommand,
  ListParallelDataRequest$,
  ListParallelDataResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTerminologies$,
  ListTerminologiesCommand,
  ListTerminologiesRequest$,
  ListTerminologiesResponse$,
  ListTextTranslationJobs$,
  ListTextTranslationJobsCommand,
  ListTextTranslationJobsRequest$,
  ListTextTranslationJobsResponse$,
  MergeStrategy,
  OutputDataConfig$,
  paginateListLanguages,
  paginateListParallelData,
  paginateListTerminologies,
  paginateListTextTranslationJobs,
  ParallelDataConfig$,
  ParallelDataDataLocation$,
  ParallelDataFormat,
  ParallelDataProperties$,
  ParallelDataStatus,
  Profanity,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartTextTranslationJob$,
  StartTextTranslationJobCommand,
  StartTextTranslationJobRequest$,
  StartTextTranslationJobResponse$,
  StopTextTranslationJob$,
  StopTextTranslationJobCommand,
  StopTextTranslationJobRequest$,
  StopTextTranslationJobResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Term$,
  TerminologyData$,
  TerminologyDataFormat,
  TerminologyDataLocation$,
  TerminologyProperties$,
  TextSizeLimitExceededException,
  TextSizeLimitExceededException$,
  TextTranslationJobFilter$,
  TextTranslationJobProperties$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TooManyTagsException,
  TooManyTagsException$,
  Translate,
  TranslateClient,
  TranslatedDocument$,
  TranslateDocument$,
  TranslateDocumentCommand,
  TranslateDocumentRequest$,
  TranslateDocumentResponse$,
  TranslateServiceException,
  TranslateText$,
  TranslateTextCommand,
  TranslateTextRequest$,
  TranslateTextResponse$,
  TranslationSettings$,
  UnsupportedDisplayLanguageCodeException,
  UnsupportedDisplayLanguageCodeException$,
  UnsupportedLanguagePairException,
  UnsupportedLanguagePairException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateParallelData$,
  UpdateParallelDataCommand,
  UpdateParallelDataRequest$,
  UpdateParallelDataResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TranslateClient === "function");
assert(typeof Translate === "function");
// commands
assert(typeof CreateParallelDataCommand === "function");
assert(typeof CreateParallelData$ === "object");
assert(typeof DeleteParallelDataCommand === "function");
assert(typeof DeleteParallelData$ === "object");
assert(typeof DeleteTerminologyCommand === "function");
assert(typeof DeleteTerminology$ === "object");
assert(typeof DescribeTextTranslationJobCommand === "function");
assert(typeof DescribeTextTranslationJob$ === "object");
assert(typeof GetParallelDataCommand === "function");
assert(typeof GetParallelData$ === "object");
assert(typeof GetTerminologyCommand === "function");
assert(typeof GetTerminology$ === "object");
assert(typeof ImportTerminologyCommand === "function");
assert(typeof ImportTerminology$ === "object");
assert(typeof ListLanguagesCommand === "function");
assert(typeof ListLanguages$ === "object");
assert(typeof ListParallelDataCommand === "function");
assert(typeof ListParallelData$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTerminologiesCommand === "function");
assert(typeof ListTerminologies$ === "object");
assert(typeof ListTextTranslationJobsCommand === "function");
assert(typeof ListTextTranslationJobs$ === "object");
assert(typeof StartTextTranslationJobCommand === "function");
assert(typeof StartTextTranslationJob$ === "object");
assert(typeof StopTextTranslationJobCommand === "function");
assert(typeof StopTextTranslationJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TranslateDocumentCommand === "function");
assert(typeof TranslateDocument$ === "object");
assert(typeof TranslateTextCommand === "function");
assert(typeof TranslateText$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateParallelDataCommand === "function");
assert(typeof UpdateParallelData$ === "object");
// structural schemas
assert(typeof AppliedTerminology$ === "object");
assert(typeof CreateParallelDataRequest$ === "object");
assert(typeof CreateParallelDataResponse$ === "object");
assert(typeof DeleteParallelDataRequest$ === "object");
assert(typeof DeleteParallelDataResponse$ === "object");
assert(typeof DeleteTerminologyRequest$ === "object");
assert(typeof DescribeTextTranslationJobRequest$ === "object");
assert(typeof DescribeTextTranslationJobResponse$ === "object");
assert(typeof Document$ === "object");
assert(typeof EncryptionKey$ === "object");
assert(typeof GetParallelDataRequest$ === "object");
assert(typeof GetParallelDataResponse$ === "object");
assert(typeof GetTerminologyRequest$ === "object");
assert(typeof GetTerminologyResponse$ === "object");
assert(typeof ImportTerminologyRequest$ === "object");
assert(typeof ImportTerminologyResponse$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof JobDetails$ === "object");
assert(typeof Language$ === "object");
assert(typeof ListLanguagesRequest$ === "object");
assert(typeof ListLanguagesResponse$ === "object");
assert(typeof ListParallelDataRequest$ === "object");
assert(typeof ListParallelDataResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTerminologiesRequest$ === "object");
assert(typeof ListTerminologiesResponse$ === "object");
assert(typeof ListTextTranslationJobsRequest$ === "object");
assert(typeof ListTextTranslationJobsResponse$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof ParallelDataConfig$ === "object");
assert(typeof ParallelDataDataLocation$ === "object");
assert(typeof ParallelDataProperties$ === "object");
assert(typeof StartTextTranslationJobRequest$ === "object");
assert(typeof StartTextTranslationJobResponse$ === "object");
assert(typeof StopTextTranslationJobRequest$ === "object");
assert(typeof StopTextTranslationJobResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Term$ === "object");
assert(typeof TerminologyData$ === "object");
assert(typeof TerminologyDataLocation$ === "object");
assert(typeof TerminologyProperties$ === "object");
assert(typeof TextTranslationJobFilter$ === "object");
assert(typeof TextTranslationJobProperties$ === "object");
assert(typeof TranslatedDocument$ === "object");
assert(typeof TranslateDocumentRequest$ === "object");
assert(typeof TranslateDocumentResponse$ === "object");
assert(typeof TranslateTextRequest$ === "object");
assert(typeof TranslateTextResponse$ === "object");
assert(typeof TranslationSettings$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateParallelDataRequest$ === "object");
assert(typeof UpdateParallelDataResponse$ === "object");
// enums
assert(typeof Brevity === "object");
assert(typeof Directionality === "object");
assert(typeof DisplayLanguageCode === "object");
assert(typeof EncryptionKeyType === "object");
assert(typeof Formality === "object");
assert(typeof JobStatus === "object");
assert(typeof MergeStrategy === "object");
assert(typeof ParallelDataFormat === "object");
assert(typeof ParallelDataStatus === "object");
assert(typeof Profanity === "object");
assert(typeof TerminologyDataFormat === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof TranslateServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof TranslateServiceException);
assert(typeof ConflictException$ === "object");
assert(DetectedLanguageLowConfidenceException.prototype instanceof TranslateServiceException);
assert(typeof DetectedLanguageLowConfidenceException$ === "object");
assert(InternalServerException.prototype instanceof TranslateServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidFilterException.prototype instanceof TranslateServiceException);
assert(typeof InvalidFilterException$ === "object");
assert(InvalidParameterValueException.prototype instanceof TranslateServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidRequestException.prototype instanceof TranslateServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof TranslateServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TranslateServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof TranslateServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TextSizeLimitExceededException.prototype instanceof TranslateServiceException);
assert(typeof TextSizeLimitExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof TranslateServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(TooManyTagsException.prototype instanceof TranslateServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnsupportedDisplayLanguageCodeException.prototype instanceof TranslateServiceException);
assert(typeof UnsupportedDisplayLanguageCodeException$ === "object");
assert(UnsupportedLanguagePairException.prototype instanceof TranslateServiceException);
assert(typeof UnsupportedLanguagePairException$ === "object");
assert(TranslateServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLanguages === "function");
assert(typeof paginateListParallelData === "function");
assert(typeof paginateListTerminologies === "function");
assert(typeof paginateListTextTranslationJobs === "function");
console.log(`Translate index test passed.`);
