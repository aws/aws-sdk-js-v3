import {
  AccessDeniedException,
  AccessDeniedException$,
  AspectRatio$,
  AssociateFeed$,
  AssociateFeedCommand,
  AssociateFeedRequest$,
  AssociateFeedResponse$,
  ClippingConfig$,
  Competitor$,
  ConflictException,
  ConflictException$,
  CreateDictionary$,
  CreateDictionaryCommand,
  CreateDictionaryRequest$,
  CreateDictionaryResponse$,
  CreateFeed$,
  CreateFeedCommand,
  CreateFeedRequest$,
  CreateFeedResponse$,
  CreateOutput$,
  CroppingConfig$,
  DataSourceConfiguration$,
  DataSourceSport,
  DeleteDictionary$,
  DeleteDictionaryCommand,
  DeleteDictionaryRequest$,
  DeleteDictionaryResponse$,
  DeleteFeed$,
  DeleteFeedCommand,
  DeleteFeedRequest$,
  DeleteFeedResponse$,
  DictionaryLanguage,
  DictionaryStatus,
  DictionarySummary$,
  DisassociateFeed$,
  DisassociateFeedCommand,
  DisassociateFeedRequest$,
  DisassociateFeedResponse$,
  ElementalInference,
  ElementalInferenceClient,
  ElementalInferenceServiceException,
  ExportDictionaryEntries$,
  ExportDictionaryEntriesCommand,
  ExportDictionaryEntriesRequest$,
  ExportDictionaryEntriesResponse$,
  FeedAssociation$,
  FeedStatus,
  FeedSummary$,
  FilterName,
  FixtureSummary$,
  GatewayTimedOutException,
  GatewayTimedOutException$,
  GetDictionary$,
  GetDictionaryCommand,
  GetDictionaryRequest$,
  GetDictionaryResponse$,
  GetFeed$,
  GetFeedCommand,
  GetFeedRequest$,
  GetFeedResponse$,
  GetOutput$,
  InternalServerErrorException,
  InternalServerErrorException$,
  ListDictionaries$,
  ListDictionariesCommand,
  ListDictionariesRequest$,
  ListDictionariesResponse$,
  ListFeeds$,
  ListFeedsCommand,
  ListFeedsRequest$,
  ListFeedsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  OutputConfig$,
  OutputStatus,
  paginateListDictionaries,
  paginateListFeeds,
  paginateSearchFixtures,
  ProfanityFilterMode,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SearchFilter$,
  SearchFixtures$,
  SearchFixturesCommand,
  SearchFixturesRequest$,
  SearchFixturesResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SubtitlingConfig$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TemplateGroup$,
  TooManyRequestException,
  TooManyRequestException$,
  TranscriptionLanguage,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateDictionary$,
  UpdateDictionaryCommand,
  UpdateDictionaryRequest$,
  UpdateDictionaryResponse$,
  UpdateFeed$,
  UpdateFeedCommand,
  UpdateFeedRequest$,
  UpdateFeedResponse$,
  UpdateOutput$,
  ValidationException,
  ValidationException$,
  waitForFeedDeleted,
  waitUntilFeedDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElementalInferenceClient === "function");
assert(typeof ElementalInference === "function");
// commands
assert(typeof AssociateFeedCommand === "function");
assert(typeof AssociateFeed$ === "object");
assert(typeof CreateDictionaryCommand === "function");
assert(typeof CreateDictionary$ === "object");
assert(typeof CreateFeedCommand === "function");
assert(typeof CreateFeed$ === "object");
assert(typeof DeleteDictionaryCommand === "function");
assert(typeof DeleteDictionary$ === "object");
assert(typeof DeleteFeedCommand === "function");
assert(typeof DeleteFeed$ === "object");
assert(typeof DisassociateFeedCommand === "function");
assert(typeof DisassociateFeed$ === "object");
assert(typeof ExportDictionaryEntriesCommand === "function");
assert(typeof ExportDictionaryEntries$ === "object");
assert(typeof GetDictionaryCommand === "function");
assert(typeof GetDictionary$ === "object");
assert(typeof GetFeedCommand === "function");
assert(typeof GetFeed$ === "object");
assert(typeof ListDictionariesCommand === "function");
assert(typeof ListDictionaries$ === "object");
assert(typeof ListFeedsCommand === "function");
assert(typeof ListFeeds$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SearchFixturesCommand === "function");
assert(typeof SearchFixtures$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDictionaryCommand === "function");
assert(typeof UpdateDictionary$ === "object");
assert(typeof UpdateFeedCommand === "function");
assert(typeof UpdateFeed$ === "object");
// structural schemas
assert(typeof AspectRatio$ === "object");
assert(typeof AssociateFeedRequest$ === "object");
assert(typeof AssociateFeedResponse$ === "object");
assert(typeof ClippingConfig$ === "object");
assert(typeof Competitor$ === "object");
assert(typeof CreateDictionaryRequest$ === "object");
assert(typeof CreateDictionaryResponse$ === "object");
assert(typeof CreateFeedRequest$ === "object");
assert(typeof CreateFeedResponse$ === "object");
assert(typeof CreateOutput$ === "object");
assert(typeof CroppingConfig$ === "object");
assert(typeof DataSourceConfiguration$ === "object");
assert(typeof DeleteDictionaryRequest$ === "object");
assert(typeof DeleteDictionaryResponse$ === "object");
assert(typeof DeleteFeedRequest$ === "object");
assert(typeof DeleteFeedResponse$ === "object");
assert(typeof DictionarySummary$ === "object");
assert(typeof DisassociateFeedRequest$ === "object");
assert(typeof DisassociateFeedResponse$ === "object");
assert(typeof ExportDictionaryEntriesRequest$ === "object");
assert(typeof ExportDictionaryEntriesResponse$ === "object");
assert(typeof FeedAssociation$ === "object");
assert(typeof FeedSummary$ === "object");
assert(typeof FixtureSummary$ === "object");
assert(typeof GetDictionaryRequest$ === "object");
assert(typeof GetDictionaryResponse$ === "object");
assert(typeof GetFeedRequest$ === "object");
assert(typeof GetFeedResponse$ === "object");
assert(typeof GetOutput$ === "object");
assert(typeof ListDictionariesRequest$ === "object");
assert(typeof ListDictionariesResponse$ === "object");
assert(typeof ListFeedsRequest$ === "object");
assert(typeof ListFeedsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof SearchFilter$ === "object");
assert(typeof SearchFixturesRequest$ === "object");
assert(typeof SearchFixturesResponse$ === "object");
assert(typeof SubtitlingConfig$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TemplateGroup$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateDictionaryRequest$ === "object");
assert(typeof UpdateDictionaryResponse$ === "object");
assert(typeof UpdateFeedRequest$ === "object");
assert(typeof UpdateFeedResponse$ === "object");
assert(typeof UpdateOutput$ === "object");
// enums
assert(typeof DataSourceSport === "object");
assert(typeof DictionaryLanguage === "object");
assert(typeof DictionaryStatus === "object");
assert(typeof FeedStatus === "object");
assert(typeof FilterName === "object");
assert(typeof OutputStatus === "object");
assert(typeof ProfanityFilterMode === "object");
assert(typeof TranscriptionLanguage === "object");
// errors
assert(AccessDeniedException.prototype instanceof ElementalInferenceServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ConflictException$ === "object");
assert(GatewayTimedOutException.prototype instanceof ElementalInferenceServiceException);
assert(typeof GatewayTimedOutException$ === "object");
assert(InternalServerErrorException.prototype instanceof ElementalInferenceServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestException.prototype instanceof ElementalInferenceServiceException);
assert(typeof TooManyRequestException$ === "object");
assert(ValidationException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ValidationException$ === "object");
assert(ElementalInferenceServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFeedDeleted === "function");
assert(typeof waitUntilFeedDeleted === "function");
// paginators
assert(typeof paginateListDictionaries === "function");
assert(typeof paginateListFeeds === "function");
assert(typeof paginateSearchFixtures === "function");
console.log(`ElementalInference index test passed.`);
