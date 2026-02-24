import {
  AccessDeniedException,
  AccessDeniedException$,
  AssociateFeed$,
  AssociateFeedCommand,
  AssociateFeedRequest$,
  AssociateFeedResponse$,
  ClippingConfig$,
  ConflictException,
  ConflictException$,
  CreateFeed$,
  CreateFeedCommand,
  CreateFeedRequest$,
  CreateFeedResponse$,
  CreateOutput$,
  CroppingConfig$,
  DeleteFeed$,
  DeleteFeedCommand,
  DeleteFeedRequest$,
  DeleteFeedResponse$,
  DisassociateFeed$,
  DisassociateFeedCommand,
  DisassociateFeedRequest$,
  DisassociateFeedResponse$,
  ElementalInference,
  ElementalInferenceClient,
  ElementalInferenceServiceException,
  FeedAssociation$,
  FeedStatus,
  FeedSummary$,
  GetFeed$,
  GetFeedCommand,
  GetFeedRequest$,
  GetFeedResponse$,
  GetOutput$,
  InternalServerErrorException,
  InternalServerErrorException$,
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
  paginateListFeeds,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TooManyRequestException,
  TooManyRequestException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
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
assert(typeof CreateFeedCommand === "function");
assert(typeof CreateFeed$ === "object");
assert(typeof DeleteFeedCommand === "function");
assert(typeof DeleteFeed$ === "object");
assert(typeof DisassociateFeedCommand === "function");
assert(typeof DisassociateFeed$ === "object");
assert(typeof GetFeedCommand === "function");
assert(typeof GetFeed$ === "object");
assert(typeof ListFeedsCommand === "function");
assert(typeof ListFeeds$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateFeedCommand === "function");
assert(typeof UpdateFeed$ === "object");
// structural schemas
assert(typeof AssociateFeedRequest$ === "object");
assert(typeof AssociateFeedResponse$ === "object");
assert(typeof ClippingConfig$ === "object");
assert(typeof CreateFeedRequest$ === "object");
assert(typeof CreateFeedResponse$ === "object");
assert(typeof CreateOutput$ === "object");
assert(typeof CroppingConfig$ === "object");
assert(typeof DeleteFeedRequest$ === "object");
assert(typeof DeleteFeedResponse$ === "object");
assert(typeof DisassociateFeedRequest$ === "object");
assert(typeof DisassociateFeedResponse$ === "object");
assert(typeof FeedAssociation$ === "object");
assert(typeof FeedSummary$ === "object");
assert(typeof GetFeedRequest$ === "object");
assert(typeof GetFeedResponse$ === "object");
assert(typeof GetOutput$ === "object");
assert(typeof ListFeedsRequest$ === "object");
assert(typeof ListFeedsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateFeedRequest$ === "object");
assert(typeof UpdateFeedResponse$ === "object");
assert(typeof UpdateOutput$ === "object");
// enums
assert(typeof FeedStatus === "object");
assert(typeof OutputStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ElementalInferenceServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerErrorException.prototype instanceof ElementalInferenceServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyRequestException.prototype instanceof ElementalInferenceServiceException);
assert(typeof TooManyRequestException$ === "object");
assert(ValidationException.prototype instanceof ElementalInferenceServiceException);
assert(typeof ValidationException$ === "object");
assert(ElementalInferenceServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFeedDeleted === "function");
assert(typeof waitUntilFeedDeleted === "function");
// paginators
assert(typeof paginateListFeeds === "function");
console.log(`ElementalInference index test passed.`);
