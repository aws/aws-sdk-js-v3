import {
  Brevity,
  CreateParallelDataCommand,
  DeleteParallelDataCommand,
  DeleteTerminologyCommand,
  DescribeTextTranslationJobCommand,
  Directionality,
  DisplayLanguageCode,
  EncryptionKeyType,
  Formality,
  GetParallelDataCommand,
  GetTerminologyCommand,
  ImportTerminologyCommand,
  JobStatus,
  ListLanguagesCommand,
  ListParallelDataCommand,
  ListTagsForResourceCommand,
  ListTerminologiesCommand,
  ListTextTranslationJobsCommand,
  MergeStrategy,
  ParallelDataFormat,
  ParallelDataStatus,
  Profanity,
  StartTextTranslationJobCommand,
  StopTextTranslationJobCommand,
  TagResourceCommand,
  TerminologyDataFormat,
  Translate,
  TranslateClient,
  TranslateDocumentCommand,
  TranslateServiceException,
  TranslateTextCommand,
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
assert(TranslateServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLanguages === "function");
assert(typeof paginateListParallelData === "function");
assert(typeof paginateListTerminologies === "function");
assert(typeof paginateListTextTranslationJobs === "function");
console.log(`Translate index test passed.`);
