import {
  AccessDeniedException,
  AccessDeniedException$,
  AspectRatio$,
  AssociateFeed$,
  AssociateFeedCommand,
  AssociateFeedRequest$,
  AssociateFeedResponse$,
  BedrockApi,
  BedrockFunctionTarget$,
  ChooseOneQuestion$,
  ClippingConfig$,
  ClippingSettings$,
  ClipTrigger$,
  Competitor$,
  ConflictException,
  ConflictException$,
  ContextType,
  ContextualMetadataConfig$,
  ContextualMetadataSettings$,
  CreateDictionary$,
  CreateDictionaryCommand,
  CreateDictionaryRequest$,
  CreateDictionaryResponse$,
  CreateFeed$,
  CreateFeedCommand,
  CreateFeedRequest$,
  CreateFeedResponse$,
  CreateFunction$,
  CreateFunctionCommand,
  CreateFunctionRequest$,
  CreateFunctionResponse$,
  CreateOutput$,
  CreateQuestionSet$,
  CreateQuestionSetCommand,
  CreateQuestionSetRequest$,
  CreateQuestionSetResponse$,
  CreateQuestionSetVersion$,
  CreateQuestionSetVersionCommand,
  CreateQuestionSetVersionRequest$,
  CreateQuestionSetVersionResponse$,
  CreateScheduleAction$,
  CreateScheduleActionCommand,
  CreateScheduleActionRequest$,
  CreateScheduleActionResponse$,
  CroppingConfig$,
  CustomQuestionsConfig$,
  DataSourceConfiguration$,
  DataSourceSport,
  DeleteDictionary$,
  DeleteDictionaryCommand,
  DeleteDictionaryRequest$,
  DeleteDictionaryResponse$,
  DeleteFeed$,
  DeleteFeedCommand,
  DeleteFeedPolicy$,
  DeleteFeedPolicyCommand,
  DeleteFeedPolicyRequest$,
  DeleteFeedRequest$,
  DeleteFeedResponse$,
  DeleteFunction$,
  DeleteFunctionCommand,
  DeleteFunctionRequest$,
  DeleteFunctionResponse$,
  DeleteQuestionSet$,
  DeleteQuestionSetCommand,
  DeleteQuestionSetRequest$,
  DeleteQuestionSetResponse$,
  DeleteQuestionSetVersion$,
  DeleteQuestionSetVersionCommand,
  DeleteQuestionSetVersionRequest$,
  DeleteQuestionSetVersionResponse$,
  DeleteScheduleAction$,
  DeleteScheduleActionCommand,
  DeleteScheduleActionRequest$,
  DeleteScheduleActionResponse$,
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
  EventBridgeDeliveryMode,
  ExportDictionaryEntries$,
  ExportDictionaryEntriesCommand,
  ExportDictionaryEntriesRequest$,
  ExportDictionaryEntriesResponse$,
  ExtendedAnalysisMode,
  FeedAssociation$,
  FeedStatus,
  FeedSummary$,
  FilterName,
  FixedIntervalTrigger$,
  FixedModeScheduleActionStartSettings$,
  FixtureSummary$,
  FrameSamplingMode,
  FrameSamplingStrategy$,
  FrameSettings$,
  FrameSize$,
  FunctionConfig$,
  FunctionStatus,
  FunctionSummary$,
  FunctionTarget$,
  GatewayTimedOutException,
  GatewayTimedOutException$,
  GetDictionary$,
  GetDictionaryCommand,
  GetDictionaryRequest$,
  GetDictionaryResponse$,
  GetFeed$,
  GetFeedCommand,
  GetFeedPolicy$,
  GetFeedPolicyCommand,
  GetFeedPolicyRequest$,
  GetFeedPolicyResponse$,
  GetFeedRequest$,
  GetFeedResponse$,
  GetFixture$,
  GetFixtureCommand,
  GetFixtureRequest$,
  GetFixtureResponse$,
  GetFunction$,
  GetFunctionCommand,
  GetFunctionRequest$,
  GetFunctionResponse$,
  GetOutput$,
  GetQuestionSet$,
  GetQuestionSetCommand,
  GetQuestionSetRequest$,
  GetQuestionSetResponse$,
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
  ListFunctions$,
  ListFunctionsCommand,
  ListFunctionsRequest$,
  ListFunctionsResponse$,
  ListQuestionSets$,
  ListQuestionSetsCommand,
  ListQuestionSetsRequest$,
  ListQuestionSetsResponse$,
  ListQuestionSetVersions$,
  ListQuestionSetVersionsCommand,
  ListQuestionSetVersionsRequest$,
  ListQuestionSetVersionsResponse$,
  ListScheduleActions$,
  ListScheduleActionsCommand,
  ListScheduleActionsRequest$,
  ListScheduleActionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  OutputConfig$,
  OutputStatus,
  paginateListDictionaries,
  paginateListFeeds,
  paginateListFunctions,
  paginateListQuestionSets,
  paginateListQuestionSetVersions,
  paginateListScheduleActions,
  paginateSearchFixtures,
  PassthroughFunctionTarget$,
  ProfanityFilterMode,
  PutFeedPolicy$,
  PutFeedPolicyCommand,
  PutFeedPolicyRequest$,
  PutFeedPolicyResponse$,
  QuestionOption$,
  QuestionSetReference$,
  QuestionSetSummary$,
  QuestionSetVersionSummary$,
  RemoveClippingDataSourceConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SceneTrigger$,
  ScheduleAction$,
  ScheduleActionError$,
  ScheduleActionErrorCode,
  ScheduleActionOperation$,
  ScheduleActionStartConfiguration$,
  ScheduleActionStatus,
  SearchFilter$,
  SearchFixtures$,
  SearchFixturesCommand,
  SearchFixturesRequest$,
  SearchFixturesResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  ShotTrigger$,
  SubtitlingConfig$,
  SubtitlingSettings$,
  SummaryGenerationMode,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TemplateGroup$,
  TooManyRequestException,
  TooManyRequestException$,
  TranscriptionLanguage,
  Trigger$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateClippingDataSourceConfiguration$,
  UpdateDictionary$,
  UpdateDictionaryCommand,
  UpdateDictionaryRequest$,
  UpdateDictionaryResponse$,
  UpdateFeed$,
  UpdateFeedCommand,
  UpdateFeedRequest$,
  UpdateFeedResponse$,
  UpdateFunction$,
  UpdateFunctionCommand,
  UpdateFunctionRequest$,
  UpdateFunctionResponse$,
  UpdateOutput$,
  UpdateOutputStatus$,
  UpdateQuestionSet$,
  UpdateQuestionSetCommand,
  UpdateQuestionSetRequest$,
  UpdateQuestionSetResponse$,
  ValidationException,
  ValidationException$,
  waitForFeedDeleted,
  waitUntilFeedDeleted,
  YesNoPerOptionQuestion$,
  YesNoQuestion$,
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
assert(typeof CreateFunctionCommand === "function");
assert(typeof CreateFunction$ === "object");
assert(typeof CreateQuestionSetCommand === "function");
assert(typeof CreateQuestionSet$ === "object");
assert(typeof CreateQuestionSetVersionCommand === "function");
assert(typeof CreateQuestionSetVersion$ === "object");
assert(typeof CreateScheduleActionCommand === "function");
assert(typeof CreateScheduleAction$ === "object");
assert(typeof DeleteDictionaryCommand === "function");
assert(typeof DeleteDictionary$ === "object");
assert(typeof DeleteFeedCommand === "function");
assert(typeof DeleteFeed$ === "object");
assert(typeof DeleteFeedPolicyCommand === "function");
assert(typeof DeleteFeedPolicy$ === "object");
assert(typeof DeleteFunctionCommand === "function");
assert(typeof DeleteFunction$ === "object");
assert(typeof DeleteQuestionSetCommand === "function");
assert(typeof DeleteQuestionSet$ === "object");
assert(typeof DeleteQuestionSetVersionCommand === "function");
assert(typeof DeleteQuestionSetVersion$ === "object");
assert(typeof DeleteScheduleActionCommand === "function");
assert(typeof DeleteScheduleAction$ === "object");
assert(typeof DisassociateFeedCommand === "function");
assert(typeof DisassociateFeed$ === "object");
assert(typeof ExportDictionaryEntriesCommand === "function");
assert(typeof ExportDictionaryEntries$ === "object");
assert(typeof GetDictionaryCommand === "function");
assert(typeof GetDictionary$ === "object");
assert(typeof GetFeedCommand === "function");
assert(typeof GetFeed$ === "object");
assert(typeof GetFeedPolicyCommand === "function");
assert(typeof GetFeedPolicy$ === "object");
assert(typeof GetFixtureCommand === "function");
assert(typeof GetFixture$ === "object");
assert(typeof GetFunctionCommand === "function");
assert(typeof GetFunction$ === "object");
assert(typeof GetQuestionSetCommand === "function");
assert(typeof GetQuestionSet$ === "object");
assert(typeof ListDictionariesCommand === "function");
assert(typeof ListDictionaries$ === "object");
assert(typeof ListFeedsCommand === "function");
assert(typeof ListFeeds$ === "object");
assert(typeof ListFunctionsCommand === "function");
assert(typeof ListFunctions$ === "object");
assert(typeof ListQuestionSetsCommand === "function");
assert(typeof ListQuestionSets$ === "object");
assert(typeof ListQuestionSetVersionsCommand === "function");
assert(typeof ListQuestionSetVersions$ === "object");
assert(typeof ListScheduleActionsCommand === "function");
assert(typeof ListScheduleActions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutFeedPolicyCommand === "function");
assert(typeof PutFeedPolicy$ === "object");
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
assert(typeof UpdateFunctionCommand === "function");
assert(typeof UpdateFunction$ === "object");
assert(typeof UpdateQuestionSetCommand === "function");
assert(typeof UpdateQuestionSet$ === "object");
// structural schemas
assert(typeof AspectRatio$ === "object");
assert(typeof AssociateFeedRequest$ === "object");
assert(typeof AssociateFeedResponse$ === "object");
assert(typeof BedrockFunctionTarget$ === "object");
assert(typeof ChooseOneQuestion$ === "object");
assert(typeof ClippingConfig$ === "object");
assert(typeof ClippingSettings$ === "object");
assert(typeof ClipTrigger$ === "object");
assert(typeof Competitor$ === "object");
assert(typeof ContextualMetadataConfig$ === "object");
assert(typeof ContextualMetadataSettings$ === "object");
assert(typeof CreateDictionaryRequest$ === "object");
assert(typeof CreateDictionaryResponse$ === "object");
assert(typeof CreateFeedRequest$ === "object");
assert(typeof CreateFeedResponse$ === "object");
assert(typeof CreateFunctionRequest$ === "object");
assert(typeof CreateFunctionResponse$ === "object");
assert(typeof CreateOutput$ === "object");
assert(typeof CreateQuestionSetRequest$ === "object");
assert(typeof CreateQuestionSetResponse$ === "object");
assert(typeof CreateQuestionSetVersionRequest$ === "object");
assert(typeof CreateQuestionSetVersionResponse$ === "object");
assert(typeof CreateScheduleActionRequest$ === "object");
assert(typeof CreateScheduleActionResponse$ === "object");
assert(typeof CroppingConfig$ === "object");
assert(typeof CustomQuestionsConfig$ === "object");
assert(typeof DataSourceConfiguration$ === "object");
assert(typeof DeleteDictionaryRequest$ === "object");
assert(typeof DeleteDictionaryResponse$ === "object");
assert(typeof DeleteFeedPolicyRequest$ === "object");
assert(typeof DeleteFeedRequest$ === "object");
assert(typeof DeleteFeedResponse$ === "object");
assert(typeof DeleteFunctionRequest$ === "object");
assert(typeof DeleteFunctionResponse$ === "object");
assert(typeof DeleteQuestionSetRequest$ === "object");
assert(typeof DeleteQuestionSetResponse$ === "object");
assert(typeof DeleteQuestionSetVersionRequest$ === "object");
assert(typeof DeleteQuestionSetVersionResponse$ === "object");
assert(typeof DeleteScheduleActionRequest$ === "object");
assert(typeof DeleteScheduleActionResponse$ === "object");
assert(typeof DictionarySummary$ === "object");
assert(typeof DisassociateFeedRequest$ === "object");
assert(typeof DisassociateFeedResponse$ === "object");
assert(typeof ExportDictionaryEntriesRequest$ === "object");
assert(typeof ExportDictionaryEntriesResponse$ === "object");
assert(typeof FeedAssociation$ === "object");
assert(typeof FeedSummary$ === "object");
assert(typeof FixedIntervalTrigger$ === "object");
assert(typeof FixedModeScheduleActionStartSettings$ === "object");
assert(typeof FixtureSummary$ === "object");
assert(typeof FrameSamplingStrategy$ === "object");
assert(typeof FrameSettings$ === "object");
assert(typeof FrameSize$ === "object");
assert(typeof FunctionConfig$ === "object");
assert(typeof FunctionSummary$ === "object");
assert(typeof FunctionTarget$ === "object");
assert(typeof GetDictionaryRequest$ === "object");
assert(typeof GetDictionaryResponse$ === "object");
assert(typeof GetFeedPolicyRequest$ === "object");
assert(typeof GetFeedPolicyResponse$ === "object");
assert(typeof GetFeedRequest$ === "object");
assert(typeof GetFeedResponse$ === "object");
assert(typeof GetFixtureRequest$ === "object");
assert(typeof GetFixtureResponse$ === "object");
assert(typeof GetFunctionRequest$ === "object");
assert(typeof GetFunctionResponse$ === "object");
assert(typeof GetOutput$ === "object");
assert(typeof GetQuestionSetRequest$ === "object");
assert(typeof GetQuestionSetResponse$ === "object");
assert(typeof ListDictionariesRequest$ === "object");
assert(typeof ListDictionariesResponse$ === "object");
assert(typeof ListFeedsRequest$ === "object");
assert(typeof ListFeedsResponse$ === "object");
assert(typeof ListFunctionsRequest$ === "object");
assert(typeof ListFunctionsResponse$ === "object");
assert(typeof ListQuestionSetsRequest$ === "object");
assert(typeof ListQuestionSetsResponse$ === "object");
assert(typeof ListQuestionSetVersionsRequest$ === "object");
assert(typeof ListQuestionSetVersionsResponse$ === "object");
assert(typeof ListScheduleActionsRequest$ === "object");
assert(typeof ListScheduleActionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof PassthroughFunctionTarget$ === "object");
assert(typeof PutFeedPolicyRequest$ === "object");
assert(typeof PutFeedPolicyResponse$ === "object");
assert(typeof QuestionOption$ === "object");
assert(typeof QuestionSetReference$ === "object");
assert(typeof QuestionSetSummary$ === "object");
assert(typeof QuestionSetVersionSummary$ === "object");
assert(typeof RemoveClippingDataSourceConfiguration$ === "object");
assert(typeof SceneTrigger$ === "object");
assert(typeof ScheduleAction$ === "object");
assert(typeof ScheduleActionError$ === "object");
assert(typeof ScheduleActionOperation$ === "object");
assert(typeof ScheduleActionStartConfiguration$ === "object");
assert(typeof SearchFilter$ === "object");
assert(typeof SearchFixturesRequest$ === "object");
assert(typeof SearchFixturesResponse$ === "object");
assert(typeof ShotTrigger$ === "object");
assert(typeof SubtitlingConfig$ === "object");
assert(typeof SubtitlingSettings$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TemplateGroup$ === "object");
assert(typeof Trigger$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateClippingDataSourceConfiguration$ === "object");
assert(typeof UpdateDictionaryRequest$ === "object");
assert(typeof UpdateDictionaryResponse$ === "object");
assert(typeof UpdateFeedRequest$ === "object");
assert(typeof UpdateFeedResponse$ === "object");
assert(typeof UpdateFunctionRequest$ === "object");
assert(typeof UpdateFunctionResponse$ === "object");
assert(typeof UpdateOutput$ === "object");
assert(typeof UpdateOutputStatus$ === "object");
assert(typeof UpdateQuestionSetRequest$ === "object");
assert(typeof UpdateQuestionSetResponse$ === "object");
assert(typeof YesNoPerOptionQuestion$ === "object");
assert(typeof YesNoQuestion$ === "object");
// enums
assert(typeof BedrockApi === "object");
assert(typeof ContextType === "object");
assert(typeof DataSourceSport === "object");
assert(typeof DictionaryLanguage === "object");
assert(typeof DictionaryStatus === "object");
assert(typeof EventBridgeDeliveryMode === "object");
assert(typeof ExtendedAnalysisMode === "object");
assert(typeof FeedStatus === "object");
assert(typeof FilterName === "object");
assert(typeof FrameSamplingMode === "object");
assert(typeof FunctionStatus === "object");
assert(typeof OutputStatus === "object");
assert(typeof ProfanityFilterMode === "object");
assert(typeof ScheduleActionErrorCode === "object");
assert(typeof ScheduleActionStatus === "object");
assert(typeof SummaryGenerationMode === "object");
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
assert(typeof paginateListFunctions === "function");
assert(typeof paginateListQuestionSetVersions === "function");
assert(typeof paginateListQuestionSets === "function");
assert(typeof paginateListScheduleActions === "function");
assert(typeof paginateSearchFixtures === "function");
console.log(`ElementalInference index test passed.`);
