import {
  Brevity,
  ConcurrentModificationException,
  ConflictException,
  CreateParallelDataCommand,
  DeleteParallelDataCommand,
  DeleteTerminologyCommand,
  DescribeTextTranslationJobCommand,
  DetectedLanguageLowConfidenceException,
  Directionality,
  DisplayLanguageCode,
  EncryptionKeyType,
  Formality,
  GetParallelDataCommand,
  GetTerminologyCommand,
  ImportTerminologyCommand,
  InternalServerException,
  InvalidFilterException,
  InvalidParameterValueException,
  InvalidRequestException,
  JobStatus,
  LimitExceededException,
  ListLanguagesCommand,
  ListParallelDataCommand,
  ListTagsForResourceCommand,
  ListTerminologiesCommand,
  ListTextTranslationJobsCommand,
  MergeStrategy,
  ParallelDataFormat,
  ParallelDataStatus,
  Profanity,
  ResourceNotFoundException,
  ServiceUnavailableException,
  StartTextTranslationJobCommand,
  StopTextTranslationJobCommand,
  TagResourceCommand,
  TerminologyDataFormat,
  TextSizeLimitExceededException,
  TooManyRequestsException,
  TooManyTagsException,
  Translate,
  TranslateClient,
  TranslateDocumentCommand,
  TranslateServiceException,
  TranslateTextCommand,
  UnsupportedDisplayLanguageCodeException,
  UnsupportedLanguagePairException,
  UntagResourceCommand,
  UpdateParallelDataCommand,
  paginateListLanguages,
  paginateListParallelData,
  paginateListTerminologies,
  paginateListTextTranslationJobs,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TranslateClient === "function");
assert(typeof Translate === "function");
// commands
assert(typeof CreateParallelDataCommand === "function");
assert(typeof DeleteParallelDataCommand === "function");
assert(typeof DeleteTerminologyCommand === "function");
assert(typeof DescribeTextTranslationJobCommand === "function");
assert(typeof GetParallelDataCommand === "function");
assert(typeof GetTerminologyCommand === "function");
assert(typeof ImportTerminologyCommand === "function");
assert(typeof ListLanguagesCommand === "function");
assert(typeof ListParallelDataCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTerminologiesCommand === "function");
assert(typeof ListTextTranslationJobsCommand === "function");
assert(typeof StartTextTranslationJobCommand === "function");
assert(typeof StopTextTranslationJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TranslateDocumentCommand === "function");
assert(typeof TranslateTextCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateParallelDataCommand === "function");
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
assert(ConflictException.prototype instanceof TranslateServiceException);
assert(DetectedLanguageLowConfidenceException.prototype instanceof TranslateServiceException);
assert(InternalServerException.prototype instanceof TranslateServiceException);
assert(InvalidFilterException.prototype instanceof TranslateServiceException);
assert(InvalidParameterValueException.prototype instanceof TranslateServiceException);
assert(InvalidRequestException.prototype instanceof TranslateServiceException);
assert(LimitExceededException.prototype instanceof TranslateServiceException);
assert(ResourceNotFoundException.prototype instanceof TranslateServiceException);
assert(ServiceUnavailableException.prototype instanceof TranslateServiceException);
assert(TextSizeLimitExceededException.prototype instanceof TranslateServiceException);
assert(TooManyRequestsException.prototype instanceof TranslateServiceException);
assert(TooManyTagsException.prototype instanceof TranslateServiceException);
assert(UnsupportedDisplayLanguageCodeException.prototype instanceof TranslateServiceException);
assert(UnsupportedLanguagePairException.prototype instanceof TranslateServiceException);
assert(TranslateServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLanguages === "function");
assert(typeof paginateListParallelData === "function");
assert(typeof paginateListTerminologies === "function");
assert(typeof paginateListTextTranslationJobs === "function");
console.log(`Translate index test passed.`);
