import {
  AccessDeniedException,
  AccessDeniedException$,
  AppIntegrationsConfiguration$,
  AssistantAssociationData$,
  AssistantAssociationInputData$,
  AssistantAssociationOutputData$,
  AssistantAssociationSummary$,
  AssistantData$,
  AssistantIntegrationConfiguration$,
  AssistantStatus,
  AssistantSummary$,
  AssistantType,
  AssociationType,
  Configuration$,
  ConflictException,
  ConflictException$,
  ConnectConfiguration$,
  ContentData$,
  ContentReference$,
  ContentStatus,
  ContentSummary$,
  CreateAssistant$,
  CreateAssistantAssociation$,
  CreateAssistantAssociationCommand,
  CreateAssistantAssociationRequest$,
  CreateAssistantAssociationResponse$,
  CreateAssistantCommand,
  CreateAssistantRequest$,
  CreateAssistantResponse$,
  CreateContent$,
  CreateContentCommand,
  CreateContentRequest$,
  CreateContentResponse$,
  CreateKnowledgeBase$,
  CreateKnowledgeBaseCommand,
  CreateKnowledgeBaseRequest$,
  CreateKnowledgeBaseResponse$,
  CreateQuickResponse$,
  CreateQuickResponseCommand,
  CreateQuickResponseRequest$,
  CreateQuickResponseResponse$,
  CreateSession$,
  CreateSessionCommand,
  CreateSessionRequest$,
  CreateSessionResponse$,
  DeleteAssistant$,
  DeleteAssistantAssociation$,
  DeleteAssistantAssociationCommand,
  DeleteAssistantAssociationRequest$,
  DeleteAssistantAssociationResponse$,
  DeleteAssistantCommand,
  DeleteAssistantRequest$,
  DeleteAssistantResponse$,
  DeleteContent$,
  DeleteContentCommand,
  DeleteContentRequest$,
  DeleteContentResponse$,
  DeleteImportJob$,
  DeleteImportJobCommand,
  DeleteImportJobRequest$,
  DeleteImportJobResponse$,
  DeleteKnowledgeBase$,
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseRequest$,
  DeleteKnowledgeBaseResponse$,
  DeleteQuickResponse$,
  DeleteQuickResponseCommand,
  DeleteQuickResponseRequest$,
  DeleteQuickResponseResponse$,
  Document$,
  DocumentText$,
  ExternalSource,
  ExternalSourceConfiguration$,
  Filter$,
  FilterField,
  FilterOperator,
  GetAssistant$,
  GetAssistantAssociation$,
  GetAssistantAssociationCommand,
  GetAssistantAssociationRequest$,
  GetAssistantAssociationResponse$,
  GetAssistantCommand,
  GetAssistantRequest$,
  GetAssistantResponse$,
  GetContent$,
  GetContentCommand,
  GetContentRequest$,
  GetContentResponse$,
  GetContentSummary$,
  GetContentSummaryCommand,
  GetContentSummaryRequest$,
  GetContentSummaryResponse$,
  GetImportJob$,
  GetImportJobCommand,
  GetImportJobRequest$,
  GetImportJobResponse$,
  GetKnowledgeBase$,
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseRequest$,
  GetKnowledgeBaseResponse$,
  GetQuickResponse$,
  GetQuickResponseCommand,
  GetQuickResponseRequest$,
  GetQuickResponseResponse$,
  GetRecommendations$,
  GetRecommendationsCommand,
  GetRecommendationsRequest$,
  GetRecommendationsResponse$,
  GetSession$,
  GetSessionCommand,
  GetSessionRequest$,
  GetSessionResponse$,
  GroupingConfiguration$,
  Highlight$,
  ImportJobData$,
  ImportJobStatus,
  ImportJobSummary$,
  ImportJobType,
  KnowledgeBaseAssociationData$,
  KnowledgeBaseData$,
  KnowledgeBaseStatus,
  KnowledgeBaseSummary$,
  KnowledgeBaseType,
  ListAssistantAssociations$,
  ListAssistantAssociationsCommand,
  ListAssistantAssociationsRequest$,
  ListAssistantAssociationsResponse$,
  ListAssistants$,
  ListAssistantsCommand,
  ListAssistantsRequest$,
  ListAssistantsResponse$,
  ListContents$,
  ListContentsCommand,
  ListContentsRequest$,
  ListContentsResponse$,
  ListImportJobs$,
  ListImportJobsCommand,
  ListImportJobsRequest$,
  ListImportJobsResponse$,
  ListKnowledgeBases$,
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesRequest$,
  ListKnowledgeBasesResponse$,
  ListQuickResponses$,
  ListQuickResponsesCommand,
  ListQuickResponsesRequest$,
  ListQuickResponsesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotifyRecommendationsReceived$,
  NotifyRecommendationsReceivedCommand,
  NotifyRecommendationsReceivedError$,
  NotifyRecommendationsReceivedRequest$,
  NotifyRecommendationsReceivedResponse$,
  Order,
  paginateListAssistantAssociations,
  paginateListAssistants,
  paginateListContents,
  paginateListImportJobs,
  paginateListKnowledgeBases,
  paginateListQuickResponses,
  paginateQueryAssistant,
  paginateSearchContent,
  paginateSearchQuickResponses,
  paginateSearchSessions,
  PreconditionFailedException,
  PreconditionFailedException$,
  Priority,
  QueryAssistant$,
  QueryAssistantCommand,
  QueryAssistantRequest$,
  QueryAssistantResponse$,
  QueryRecommendationTriggerData$,
  QuickResponseContentProvider$,
  QuickResponseContents$,
  QuickResponseData$,
  QuickResponseDataProvider$,
  QuickResponseFilterField$,
  QuickResponseFilterOperator,
  QuickResponseOrderField$,
  QuickResponseQueryField$,
  QuickResponseQueryOperator,
  QuickResponseSearchExpression$,
  QuickResponseSearchResultData$,
  QuickResponseStatus,
  QuickResponseSummary$,
  RecommendationData$,
  RecommendationSourceType,
  RecommendationTrigger$,
  RecommendationTriggerData$,
  RecommendationTriggerType,
  RecommendationType,
  RelevanceLevel,
  RemoveKnowledgeBaseTemplateUri$,
  RemoveKnowledgeBaseTemplateUriCommand,
  RemoveKnowledgeBaseTemplateUriRequest$,
  RemoveKnowledgeBaseTemplateUriResponse$,
  RenderingConfiguration$,
  RequestTimeoutException,
  RequestTimeoutException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResultData$,
  SearchContent$,
  SearchContentCommand,
  SearchContentRequest$,
  SearchContentResponse$,
  SearchExpression$,
  SearchQuickResponses$,
  SearchQuickResponsesCommand,
  SearchQuickResponsesRequest$,
  SearchQuickResponsesResponse$,
  SearchSessions$,
  SearchSessionsCommand,
  SearchSessionsRequest$,
  SearchSessionsResponse$,
  ServerSideEncryptionConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionData$,
  SessionIntegrationConfiguration$,
  SessionSummary$,
  SourceConfiguration$,
  StartContentUpload$,
  StartContentUploadCommand,
  StartContentUploadRequest$,
  StartContentUploadResponse$,
  StartImportJob$,
  StartImportJobCommand,
  StartImportJobRequest$,
  StartImportJobResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateContent$,
  UpdateContentCommand,
  UpdateContentRequest$,
  UpdateContentResponse$,
  UpdateKnowledgeBaseTemplateUri$,
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateKnowledgeBaseTemplateUriRequest$,
  UpdateKnowledgeBaseTemplateUriResponse$,
  UpdateQuickResponse$,
  UpdateQuickResponseCommand,
  UpdateQuickResponseRequest$,
  UpdateQuickResponseResponse$,
  ValidationException,
  ValidationException$,
  Wisdom,
  WisdomClient,
  WisdomServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WisdomClient === "function");
assert(typeof Wisdom === "function");
// commands
assert(typeof CreateAssistantCommand === "function");
assert(typeof CreateAssistant$ === "object");
assert(typeof CreateAssistantAssociationCommand === "function");
assert(typeof CreateAssistantAssociation$ === "object");
assert(typeof CreateContentCommand === "function");
assert(typeof CreateContent$ === "object");
assert(typeof CreateKnowledgeBaseCommand === "function");
assert(typeof CreateKnowledgeBase$ === "object");
assert(typeof CreateQuickResponseCommand === "function");
assert(typeof CreateQuickResponse$ === "object");
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateSession$ === "object");
assert(typeof DeleteAssistantCommand === "function");
assert(typeof DeleteAssistant$ === "object");
assert(typeof DeleteAssistantAssociationCommand === "function");
assert(typeof DeleteAssistantAssociation$ === "object");
assert(typeof DeleteContentCommand === "function");
assert(typeof DeleteContent$ === "object");
assert(typeof DeleteImportJobCommand === "function");
assert(typeof DeleteImportJob$ === "object");
assert(typeof DeleteKnowledgeBaseCommand === "function");
assert(typeof DeleteKnowledgeBase$ === "object");
assert(typeof DeleteQuickResponseCommand === "function");
assert(typeof DeleteQuickResponse$ === "object");
assert(typeof GetAssistantCommand === "function");
assert(typeof GetAssistant$ === "object");
assert(typeof GetAssistantAssociationCommand === "function");
assert(typeof GetAssistantAssociation$ === "object");
assert(typeof GetContentCommand === "function");
assert(typeof GetContent$ === "object");
assert(typeof GetContentSummaryCommand === "function");
assert(typeof GetContentSummary$ === "object");
assert(typeof GetImportJobCommand === "function");
assert(typeof GetImportJob$ === "object");
assert(typeof GetKnowledgeBaseCommand === "function");
assert(typeof GetKnowledgeBase$ === "object");
assert(typeof GetQuickResponseCommand === "function");
assert(typeof GetQuickResponse$ === "object");
assert(typeof GetRecommendationsCommand === "function");
assert(typeof GetRecommendations$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof ListAssistantAssociationsCommand === "function");
assert(typeof ListAssistantAssociations$ === "object");
assert(typeof ListAssistantsCommand === "function");
assert(typeof ListAssistants$ === "object");
assert(typeof ListContentsCommand === "function");
assert(typeof ListContents$ === "object");
assert(typeof ListImportJobsCommand === "function");
assert(typeof ListImportJobs$ === "object");
assert(typeof ListKnowledgeBasesCommand === "function");
assert(typeof ListKnowledgeBases$ === "object");
assert(typeof ListQuickResponsesCommand === "function");
assert(typeof ListQuickResponses$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof NotifyRecommendationsReceivedCommand === "function");
assert(typeof NotifyRecommendationsReceived$ === "object");
assert(typeof QueryAssistantCommand === "function");
assert(typeof QueryAssistant$ === "object");
assert(typeof RemoveKnowledgeBaseTemplateUriCommand === "function");
assert(typeof RemoveKnowledgeBaseTemplateUri$ === "object");
assert(typeof SearchContentCommand === "function");
assert(typeof SearchContent$ === "object");
assert(typeof SearchQuickResponsesCommand === "function");
assert(typeof SearchQuickResponses$ === "object");
assert(typeof SearchSessionsCommand === "function");
assert(typeof SearchSessions$ === "object");
assert(typeof StartContentUploadCommand === "function");
assert(typeof StartContentUpload$ === "object");
assert(typeof StartImportJobCommand === "function");
assert(typeof StartImportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateContentCommand === "function");
assert(typeof UpdateContent$ === "object");
assert(typeof UpdateKnowledgeBaseTemplateUriCommand === "function");
assert(typeof UpdateKnowledgeBaseTemplateUri$ === "object");
assert(typeof UpdateQuickResponseCommand === "function");
assert(typeof UpdateQuickResponse$ === "object");
// structural schemas
assert(typeof AppIntegrationsConfiguration$ === "object");
assert(typeof AssistantAssociationData$ === "object");
assert(typeof AssistantAssociationInputData$ === "object");
assert(typeof AssistantAssociationOutputData$ === "object");
assert(typeof AssistantAssociationSummary$ === "object");
assert(typeof AssistantData$ === "object");
assert(typeof AssistantIntegrationConfiguration$ === "object");
assert(typeof AssistantSummary$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConnectConfiguration$ === "object");
assert(typeof ContentData$ === "object");
assert(typeof ContentReference$ === "object");
assert(typeof ContentSummary$ === "object");
assert(typeof CreateAssistantAssociationRequest$ === "object");
assert(typeof CreateAssistantAssociationResponse$ === "object");
assert(typeof CreateAssistantRequest$ === "object");
assert(typeof CreateAssistantResponse$ === "object");
assert(typeof CreateContentRequest$ === "object");
assert(typeof CreateContentResponse$ === "object");
assert(typeof CreateKnowledgeBaseRequest$ === "object");
assert(typeof CreateKnowledgeBaseResponse$ === "object");
assert(typeof CreateQuickResponseRequest$ === "object");
assert(typeof CreateQuickResponseResponse$ === "object");
assert(typeof CreateSessionRequest$ === "object");
assert(typeof CreateSessionResponse$ === "object");
assert(typeof DeleteAssistantAssociationRequest$ === "object");
assert(typeof DeleteAssistantAssociationResponse$ === "object");
assert(typeof DeleteAssistantRequest$ === "object");
assert(typeof DeleteAssistantResponse$ === "object");
assert(typeof DeleteContentRequest$ === "object");
assert(typeof DeleteContentResponse$ === "object");
assert(typeof DeleteImportJobRequest$ === "object");
assert(typeof DeleteImportJobResponse$ === "object");
assert(typeof DeleteKnowledgeBaseRequest$ === "object");
assert(typeof DeleteKnowledgeBaseResponse$ === "object");
assert(typeof DeleteQuickResponseRequest$ === "object");
assert(typeof DeleteQuickResponseResponse$ === "object");
assert(typeof Document$ === "object");
assert(typeof DocumentText$ === "object");
assert(typeof ExternalSourceConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetAssistantAssociationRequest$ === "object");
assert(typeof GetAssistantAssociationResponse$ === "object");
assert(typeof GetAssistantRequest$ === "object");
assert(typeof GetAssistantResponse$ === "object");
assert(typeof GetContentRequest$ === "object");
assert(typeof GetContentResponse$ === "object");
assert(typeof GetContentSummaryRequest$ === "object");
assert(typeof GetContentSummaryResponse$ === "object");
assert(typeof GetImportJobRequest$ === "object");
assert(typeof GetImportJobResponse$ === "object");
assert(typeof GetKnowledgeBaseRequest$ === "object");
assert(typeof GetKnowledgeBaseResponse$ === "object");
assert(typeof GetQuickResponseRequest$ === "object");
assert(typeof GetQuickResponseResponse$ === "object");
assert(typeof GetRecommendationsRequest$ === "object");
assert(typeof GetRecommendationsResponse$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof GroupingConfiguration$ === "object");
assert(typeof Highlight$ === "object");
assert(typeof ImportJobData$ === "object");
assert(typeof ImportJobSummary$ === "object");
assert(typeof KnowledgeBaseAssociationData$ === "object");
assert(typeof KnowledgeBaseData$ === "object");
assert(typeof KnowledgeBaseSummary$ === "object");
assert(typeof ListAssistantAssociationsRequest$ === "object");
assert(typeof ListAssistantAssociationsResponse$ === "object");
assert(typeof ListAssistantsRequest$ === "object");
assert(typeof ListAssistantsResponse$ === "object");
assert(typeof ListContentsRequest$ === "object");
assert(typeof ListContentsResponse$ === "object");
assert(typeof ListImportJobsRequest$ === "object");
assert(typeof ListImportJobsResponse$ === "object");
assert(typeof ListKnowledgeBasesRequest$ === "object");
assert(typeof ListKnowledgeBasesResponse$ === "object");
assert(typeof ListQuickResponsesRequest$ === "object");
assert(typeof ListQuickResponsesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NotifyRecommendationsReceivedError$ === "object");
assert(typeof NotifyRecommendationsReceivedRequest$ === "object");
assert(typeof NotifyRecommendationsReceivedResponse$ === "object");
assert(typeof QueryAssistantRequest$ === "object");
assert(typeof QueryAssistantResponse$ === "object");
assert(typeof QueryRecommendationTriggerData$ === "object");
assert(typeof QuickResponseContentProvider$ === "object");
assert(typeof QuickResponseContents$ === "object");
assert(typeof QuickResponseData$ === "object");
assert(typeof QuickResponseDataProvider$ === "object");
assert(typeof QuickResponseFilterField$ === "object");
assert(typeof QuickResponseOrderField$ === "object");
assert(typeof QuickResponseQueryField$ === "object");
assert(typeof QuickResponseSearchExpression$ === "object");
assert(typeof QuickResponseSearchResultData$ === "object");
assert(typeof QuickResponseSummary$ === "object");
assert(typeof RecommendationData$ === "object");
assert(typeof RecommendationTrigger$ === "object");
assert(typeof RecommendationTriggerData$ === "object");
assert(typeof RemoveKnowledgeBaseTemplateUriRequest$ === "object");
assert(typeof RemoveKnowledgeBaseTemplateUriResponse$ === "object");
assert(typeof RenderingConfiguration$ === "object");
assert(typeof ResultData$ === "object");
assert(typeof SearchContentRequest$ === "object");
assert(typeof SearchContentResponse$ === "object");
assert(typeof SearchExpression$ === "object");
assert(typeof SearchQuickResponsesRequest$ === "object");
assert(typeof SearchQuickResponsesResponse$ === "object");
assert(typeof SearchSessionsRequest$ === "object");
assert(typeof SearchSessionsResponse$ === "object");
assert(typeof ServerSideEncryptionConfiguration$ === "object");
assert(typeof SessionData$ === "object");
assert(typeof SessionIntegrationConfiguration$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof StartContentUploadRequest$ === "object");
assert(typeof StartContentUploadResponse$ === "object");
assert(typeof StartImportJobRequest$ === "object");
assert(typeof StartImportJobResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateContentRequest$ === "object");
assert(typeof UpdateContentResponse$ === "object");
assert(typeof UpdateKnowledgeBaseTemplateUriRequest$ === "object");
assert(typeof UpdateKnowledgeBaseTemplateUriResponse$ === "object");
assert(typeof UpdateQuickResponseRequest$ === "object");
assert(typeof UpdateQuickResponseResponse$ === "object");
// enums
assert(typeof AssistantStatus === "object");
assert(typeof AssistantType === "object");
assert(typeof AssociationType === "object");
assert(typeof ContentStatus === "object");
assert(typeof ExternalSource === "object");
assert(typeof FilterField === "object");
assert(typeof FilterOperator === "object");
assert(typeof ImportJobStatus === "object");
assert(typeof ImportJobType === "object");
assert(typeof KnowledgeBaseStatus === "object");
assert(typeof KnowledgeBaseType === "object");
assert(typeof Order === "object");
assert(typeof Priority === "object");
assert(typeof QuickResponseFilterOperator === "object");
assert(typeof QuickResponseQueryOperator === "object");
assert(typeof QuickResponseStatus === "object");
assert(typeof RecommendationSourceType === "object");
assert(typeof RecommendationTriggerType === "object");
assert(typeof RecommendationType === "object");
assert(typeof RelevanceLevel === "object");
// errors
assert(AccessDeniedException.prototype instanceof WisdomServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof WisdomServiceException);
assert(typeof ConflictException$ === "object");
assert(PreconditionFailedException.prototype instanceof WisdomServiceException);
assert(typeof PreconditionFailedException$ === "object");
assert(RequestTimeoutException.prototype instanceof WisdomServiceException);
assert(typeof RequestTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof WisdomServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof WisdomServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyTagsException.prototype instanceof WisdomServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof WisdomServiceException);
assert(typeof ValidationException$ === "object");
assert(WisdomServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAssistantAssociations === "function");
assert(typeof paginateListAssistants === "function");
assert(typeof paginateListContents === "function");
assert(typeof paginateListImportJobs === "function");
assert(typeof paginateListKnowledgeBases === "function");
assert(typeof paginateListQuickResponses === "function");
assert(typeof paginateQueryAssistant === "function");
assert(typeof paginateSearchContent === "function");
assert(typeof paginateSearchQuickResponses === "function");
assert(typeof paginateSearchSessions === "function");
console.log(`Wisdom index test passed.`);
