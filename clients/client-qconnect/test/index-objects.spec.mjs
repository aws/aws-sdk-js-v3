import {
  AIAgentAssociationConfigurationType,
  AIAgentConfiguration$,
  AIAgentConfigurationData$,
  AIAgentData$,
  AIAgentSummary$,
  AIAgentType,
  AIAgentVersionSummary$,
  AIGuardrailAssessment$,
  AIGuardrailContentPolicyConfig$,
  AIGuardrailContextualGroundingPolicyConfig$,
  AIGuardrailData$,
  AIGuardrailSensitiveInformationPolicyConfig$,
  AIGuardrailSummary$,
  AIGuardrailTopicPolicyConfig$,
  AIGuardrailVersionSummary$,
  AIGuardrailWordPolicyConfig$,
  AIPromptAPIFormat,
  AIPromptData$,
  AIPromptInferenceConfiguration$,
  AIPromptSummary$,
  AIPromptTemplateConfiguration$,
  AIPromptTemplateType,
  AIPromptType,
  AIPromptVersionSummary$,
  AccessDeniedException,
  AccessDeniedException$,
  ActivateMessageTemplate$,
  ActivateMessageTemplateCommand,
  ActivateMessageTemplateRequest$,
  ActivateMessageTemplateResponse$,
  AgentAttributes$,
  AmazonConnectGuideAssociationData$,
  Annotation$,
  AnswerRecommendationAIAgentConfiguration$,
  AppIntegrationsConfiguration$,
  AssistantAssociationData$,
  AssistantAssociationInputData$,
  AssistantAssociationOutputData$,
  AssistantAssociationSummary$,
  AssistantCapabilityConfiguration$,
  AssistantCapabilityType,
  AssistantData$,
  AssistantIntegrationConfiguration$,
  AssistantStatus,
  AssistantSummary$,
  AssistantType,
  AssociationConfiguration$,
  AssociationConfigurationData$,
  AssociationType,
  BedrockFoundationModelConfigurationForParsing$,
  CaseSummarizationAIAgentConfiguration$,
  CaseSummarizationChunkDataDetails$,
  CaseSummarizationInputData$,
  ChannelSubtype,
  ChunkingConfiguration$,
  ChunkingStrategy,
  Citation$,
  CitationSpan$,
  Configuration$,
  ConflictException,
  ConflictException$,
  ConnectConfiguration$,
  ContentAssociationContents$,
  ContentAssociationData$,
  ContentAssociationSummary$,
  ContentAssociationType,
  ContentData$,
  ContentDataDetails$,
  ContentDisposition,
  ContentFeedbackData$,
  ContentReference$,
  ContentStatus,
  ContentSummary$,
  ConversationContext$,
  ConversationState$,
  ConversationStatus,
  ConversationStatusReason,
  CreateAIAgent$,
  CreateAIAgentCommand,
  CreateAIAgentRequest$,
  CreateAIAgentResponse$,
  CreateAIAgentVersion$,
  CreateAIAgentVersionCommand,
  CreateAIAgentVersionRequest$,
  CreateAIAgentVersionResponse$,
  CreateAIGuardrail$,
  CreateAIGuardrailCommand,
  CreateAIGuardrailRequest$,
  CreateAIGuardrailResponse$,
  CreateAIGuardrailVersion$,
  CreateAIGuardrailVersionCommand,
  CreateAIGuardrailVersionRequest$,
  CreateAIGuardrailVersionResponse$,
  CreateAIPrompt$,
  CreateAIPromptCommand,
  CreateAIPromptRequest$,
  CreateAIPromptResponse$,
  CreateAIPromptVersion$,
  CreateAIPromptVersionCommand,
  CreateAIPromptVersionRequest$,
  CreateAIPromptVersionResponse$,
  CreateAssistant$,
  CreateAssistantAssociation$,
  CreateAssistantAssociationCommand,
  CreateAssistantAssociationRequest$,
  CreateAssistantAssociationResponse$,
  CreateAssistantCommand,
  CreateAssistantRequest$,
  CreateAssistantResponse$,
  CreateContent$,
  CreateContentAssociation$,
  CreateContentAssociationCommand,
  CreateContentAssociationRequest$,
  CreateContentAssociationResponse$,
  CreateContentCommand,
  CreateContentRequest$,
  CreateContentResponse$,
  CreateKnowledgeBase$,
  CreateKnowledgeBaseCommand,
  CreateKnowledgeBaseRequest$,
  CreateKnowledgeBaseResponse$,
  CreateMessageTemplate$,
  CreateMessageTemplateAttachment$,
  CreateMessageTemplateAttachmentCommand,
  CreateMessageTemplateAttachmentRequest$,
  CreateMessageTemplateAttachmentResponse$,
  CreateMessageTemplateCommand,
  CreateMessageTemplateRequest$,
  CreateMessageTemplateResponse$,
  CreateMessageTemplateVersion$,
  CreateMessageTemplateVersionCommand,
  CreateMessageTemplateVersionRequest$,
  CreateMessageTemplateVersionResponse$,
  CreateQuickResponse$,
  CreateQuickResponseCommand,
  CreateQuickResponseRequest$,
  CreateQuickResponseResponse$,
  CreateSession$,
  CreateSessionCommand,
  CreateSessionRequest$,
  CreateSessionResponse$,
  CustomerProfileAttributes$,
  DataDetails$,
  DataReference$,
  DataSummary$,
  DeactivateMessageTemplate$,
  DeactivateMessageTemplateCommand,
  DeactivateMessageTemplateRequest$,
  DeactivateMessageTemplateResponse$,
  DeleteAIAgent$,
  DeleteAIAgentCommand,
  DeleteAIAgentRequest$,
  DeleteAIAgentResponse$,
  DeleteAIAgentVersion$,
  DeleteAIAgentVersionCommand,
  DeleteAIAgentVersionRequest$,
  DeleteAIAgentVersionResponse$,
  DeleteAIGuardrail$,
  DeleteAIGuardrailCommand,
  DeleteAIGuardrailRequest$,
  DeleteAIGuardrailResponse$,
  DeleteAIGuardrailVersion$,
  DeleteAIGuardrailVersionCommand,
  DeleteAIGuardrailVersionRequest$,
  DeleteAIGuardrailVersionResponse$,
  DeleteAIPrompt$,
  DeleteAIPromptCommand,
  DeleteAIPromptRequest$,
  DeleteAIPromptResponse$,
  DeleteAIPromptVersion$,
  DeleteAIPromptVersionCommand,
  DeleteAIPromptVersionRequest$,
  DeleteAIPromptVersionResponse$,
  DeleteAssistant$,
  DeleteAssistantAssociation$,
  DeleteAssistantAssociationCommand,
  DeleteAssistantAssociationRequest$,
  DeleteAssistantAssociationResponse$,
  DeleteAssistantCommand,
  DeleteAssistantRequest$,
  DeleteAssistantResponse$,
  DeleteContent$,
  DeleteContentAssociation$,
  DeleteContentAssociationCommand,
  DeleteContentAssociationRequest$,
  DeleteContentAssociationResponse$,
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
  DeleteMessageTemplate$,
  DeleteMessageTemplateAttachment$,
  DeleteMessageTemplateAttachmentCommand,
  DeleteMessageTemplateAttachmentRequest$,
  DeleteMessageTemplateAttachmentResponse$,
  DeleteMessageTemplateCommand,
  DeleteMessageTemplateRequest$,
  DeleteMessageTemplateResponse$,
  DeleteQuickResponse$,
  DeleteQuickResponseCommand,
  DeleteQuickResponseRequest$,
  DeleteQuickResponseResponse$,
  DependencyFailedException,
  DependencyFailedException$,
  Document$,
  DocumentText$,
  EmailGenerativeAnswerAIAgentConfiguration$,
  EmailGenerativeAnswerChunkDataDetails$,
  EmailHeader$,
  EmailMessageTemplateContent$,
  EmailMessageTemplateContentBody$,
  EmailOverviewAIAgentConfiguration$,
  EmailOverviewChunkDataDetails$,
  EmailResponseAIAgentConfiguration$,
  EmailResponseChunkDataDetails$,
  ExtendedMessageTemplateData$,
  ExternalBedrockKnowledgeBaseConfig$,
  ExternalSource,
  ExternalSourceConfiguration$,
  Filter$,
  FilterAttribute$,
  FilterField,
  FilterOperator,
  FixedSizeChunkingConfiguration$,
  GenerativeChunkDataDetails$,
  GenerativeContentFeedbackData$,
  GenerativeDataDetails$,
  GenerativeReference$,
  GetAIAgent$,
  GetAIAgentCommand,
  GetAIAgentRequest$,
  GetAIAgentResponse$,
  GetAIGuardrail$,
  GetAIGuardrailCommand,
  GetAIGuardrailRequest$,
  GetAIGuardrailResponse$,
  GetAIPrompt$,
  GetAIPromptCommand,
  GetAIPromptRequest$,
  GetAIPromptResponse$,
  GetAssistant$,
  GetAssistantAssociation$,
  GetAssistantAssociationCommand,
  GetAssistantAssociationRequest$,
  GetAssistantAssociationResponse$,
  GetAssistantCommand,
  GetAssistantRequest$,
  GetAssistantResponse$,
  GetContent$,
  GetContentAssociation$,
  GetContentAssociationCommand,
  GetContentAssociationRequest$,
  GetContentAssociationResponse$,
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
  GetMessageTemplate$,
  GetMessageTemplateCommand,
  GetMessageTemplateRequest$,
  GetMessageTemplateResponse$,
  GetNextMessage$,
  GetNextMessageCommand,
  GetNextMessageRequest$,
  GetNextMessageResponse$,
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
  GuardrailContentFilterConfig$,
  GuardrailContentFilterType,
  GuardrailContextualGroundingFilterConfig$,
  GuardrailContextualGroundingFilterType,
  GuardrailFilterStrength,
  GuardrailManagedWordsConfig$,
  GuardrailManagedWordsType,
  GuardrailPiiEntityConfig$,
  GuardrailPiiEntityType,
  GuardrailRegexConfig$,
  GuardrailSensitiveInformationAction,
  GuardrailTopicConfig$,
  GuardrailTopicType,
  GuardrailWordConfig$,
  HierarchicalChunkingConfiguration$,
  HierarchicalChunkingLevelConfiguration$,
  Highlight$,
  ImportJobData$,
  ImportJobStatus,
  ImportJobSummary$,
  ImportJobType,
  IntentDetectedDataDetails$,
  IntentInputData$,
  KnowledgeBaseAssociationConfigurationData$,
  KnowledgeBaseAssociationData$,
  KnowledgeBaseData$,
  KnowledgeBaseSearchType,
  KnowledgeBaseStatus,
  KnowledgeBaseSummary$,
  KnowledgeBaseType,
  KnowledgeSource$,
  ListAIAgentVersions$,
  ListAIAgentVersionsCommand,
  ListAIAgentVersionsRequest$,
  ListAIAgentVersionsResponse$,
  ListAIAgents$,
  ListAIAgentsCommand,
  ListAIAgentsRequest$,
  ListAIAgentsResponse$,
  ListAIGuardrailVersions$,
  ListAIGuardrailVersionsCommand,
  ListAIGuardrailVersionsRequest$,
  ListAIGuardrailVersionsResponse$,
  ListAIGuardrails$,
  ListAIGuardrailsCommand,
  ListAIGuardrailsRequest$,
  ListAIGuardrailsResponse$,
  ListAIPromptVersions$,
  ListAIPromptVersionsCommand,
  ListAIPromptVersionsRequest$,
  ListAIPromptVersionsResponse$,
  ListAIPrompts$,
  ListAIPromptsCommand,
  ListAIPromptsRequest$,
  ListAIPromptsResponse$,
  ListAssistantAssociations$,
  ListAssistantAssociationsCommand,
  ListAssistantAssociationsRequest$,
  ListAssistantAssociationsResponse$,
  ListAssistants$,
  ListAssistantsCommand,
  ListAssistantsRequest$,
  ListAssistantsResponse$,
  ListContentAssociations$,
  ListContentAssociationsCommand,
  ListContentAssociationsRequest$,
  ListContentAssociationsResponse$,
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
  ListMessageTemplateVersions$,
  ListMessageTemplateVersionsCommand,
  ListMessageTemplateVersionsRequest$,
  ListMessageTemplateVersionsResponse$,
  ListMessageTemplates$,
  ListMessageTemplatesCommand,
  ListMessageTemplatesRequest$,
  ListMessageTemplatesResponse$,
  ListMessages$,
  ListMessagesCommand,
  ListMessagesRequest$,
  ListMessagesResponse$,
  ListQuickResponses$,
  ListQuickResponsesCommand,
  ListQuickResponsesRequest$,
  ListQuickResponsesResponse$,
  ListSpans$,
  ListSpansCommand,
  ListSpansRequest$,
  ListSpansResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManagedSourceConfiguration$,
  ManualSearchAIAgentConfiguration$,
  MessageConfiguration$,
  MessageData$,
  MessageFilterType,
  MessageInput$,
  MessageOutput$,
  MessageTemplateAttachment$,
  MessageTemplateAttributeType,
  MessageTemplateAttributes$,
  MessageTemplateBodyContentProvider$,
  MessageTemplateContentProvider$,
  MessageTemplateData$,
  MessageTemplateFilterField$,
  MessageTemplateFilterOperator,
  MessageTemplateOrderField$,
  MessageTemplateQueryField$,
  MessageTemplateQueryOperator,
  MessageTemplateSearchExpression$,
  MessageTemplateSearchResultData$,
  MessageTemplateSourceConfiguration$,
  MessageTemplateSourceConfigurationSummary$,
  MessageTemplateSummary$,
  MessageTemplateVersionSummary$,
  MessageType,
  NoteTakingAIAgentConfiguration$,
  NotesChunkDataDetails$,
  NotesDataDetails$,
  NotifyRecommendationsReceived$,
  NotifyRecommendationsReceivedCommand,
  NotifyRecommendationsReceivedError$,
  NotifyRecommendationsReceivedRequest$,
  NotifyRecommendationsReceivedResponse$,
  OrCondition$,
  OrchestrationAIAgentConfiguration$,
  OrchestratorConfigurationEntry$,
  Order,
  Origin,
  ParsingConfiguration$,
  ParsingPrompt$,
  ParsingStrategy,
  Participant,
  PreconditionFailedException,
  PreconditionFailedException$,
  Priority,
  PushADMMessageTemplateContent$,
  PushAPNSMessageTemplateContent$,
  PushBaiduMessageTemplateContent$,
  PushFCMMessageTemplateContent$,
  PushMessageAction,
  PushMessageTemplateContent$,
  PutFeedback$,
  PutFeedbackCommand,
  PutFeedbackRequest$,
  PutFeedbackResponse$,
  QConnect,
  QConnectClient,
  QConnectServiceException,
  QueryAssistant$,
  QueryAssistantCommand,
  QueryAssistantRequest$,
  QueryAssistantResponse$,
  QueryCondition$,
  QueryConditionComparisonOperator,
  QueryConditionFieldName,
  QueryConditionItem$,
  QueryInputData$,
  QueryRecommendationTriggerData$,
  QueryResultType,
  QueryTextInputData$,
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
  RankingData$,
  RecommendationData$,
  RecommendationSourceType,
  RecommendationTrigger$,
  RecommendationTriggerData$,
  RecommendationTriggerType,
  RecommendationType,
  ReferenceType,
  Relevance,
  RelevanceLevel,
  RemoveAssistantAIAgent$,
  RemoveAssistantAIAgentCommand,
  RemoveAssistantAIAgentRequest$,
  RemoveAssistantAIAgentResponse$,
  RemoveKnowledgeBaseTemplateUri$,
  RemoveKnowledgeBaseTemplateUriCommand,
  RemoveKnowledgeBaseTemplateUriRequest$,
  RemoveKnowledgeBaseTemplateUriResponse$,
  RenderMessageTemplate$,
  RenderMessageTemplateCommand,
  RenderMessageTemplateRequest$,
  RenderMessageTemplateResponse$,
  RenderingConfiguration$,
  RequestTimeoutException,
  RequestTimeoutException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResultData$,
  RetrievalConfiguration$,
  RetrievalFilterConfiguration$,
  Retrieve$,
  RetrieveCommand,
  RetrieveRequest$,
  RetrieveResponse$,
  RetrieveResult$,
  RuntimeSessionData$,
  RuntimeSessionDataValue$,
  SMSMessageTemplateContent$,
  SMSMessageTemplateContentBody$,
  SearchContent$,
  SearchContentCommand,
  SearchContentRequest$,
  SearchContentResponse$,
  SearchExpression$,
  SearchMessageTemplates$,
  SearchMessageTemplatesCommand,
  SearchMessageTemplatesRequest$,
  SearchMessageTemplatesResponse$,
  SearchQuickResponses$,
  SearchQuickResponsesCommand,
  SearchQuickResponsesRequest$,
  SearchQuickResponsesResponse$,
  SearchSessions$,
  SearchSessionsCommand,
  SearchSessionsRequest$,
  SearchSessionsResponse$,
  SeedUrl$,
  SelfServiceAIAgentConfiguration$,
  SelfServiceConversationHistory$,
  SemanticChunkingConfiguration$,
  SendMessage$,
  SendMessageCommand,
  SendMessageRequest$,
  SendMessageResponse$,
  ServerSideEncryptionConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionData$,
  SessionDataNamespace,
  SessionIntegrationConfiguration$,
  SessionSummary$,
  SourceConfiguration$,
  SourceContentDataDetails$,
  SourceContentType,
  Span$,
  SpanAttributes$,
  SpanCitation$,
  SpanMessage$,
  SpanMessageValue$,
  SpanStatus,
  SpanTextValue$,
  SpanToolResultValue$,
  SpanToolUseValue$,
  SpanType,
  StartContentUpload$,
  StartContentUploadCommand,
  StartContentUploadRequest$,
  StartContentUploadResponse$,
  StartImportJob$,
  StartImportJobCommand,
  StartImportJobRequest$,
  StartImportJobResponse$,
  Status,
  SuggestedMessageDataDetails$,
  SuggestedMessageReference$,
  SyncStatus,
  SystemAttributes$,
  SystemEndpointAttributes$,
  TagCondition$,
  TagFilter$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetType,
  TextAIPromptInferenceConfiguration$,
  TextData$,
  TextFullAIPromptEditTemplateConfiguration$,
  TextMessage$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  ToolConfiguration$,
  ToolInstruction$,
  ToolOutputConfiguration$,
  ToolOutputFilter$,
  ToolOverrideConstantInputValue$,
  ToolOverrideInputValue$,
  ToolOverrideInputValueConfiguration$,
  ToolOverrideInputValueType,
  ToolType,
  ToolUseResultData$,
  UnauthorizedException,
  UnauthorizedException$,
  UnprocessableContentException,
  UnprocessableContentException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAIAgent$,
  UpdateAIAgentCommand,
  UpdateAIAgentRequest$,
  UpdateAIAgentResponse$,
  UpdateAIGuardrail$,
  UpdateAIGuardrailCommand,
  UpdateAIGuardrailRequest$,
  UpdateAIGuardrailResponse$,
  UpdateAIPrompt$,
  UpdateAIPromptCommand,
  UpdateAIPromptRequest$,
  UpdateAIPromptResponse$,
  UpdateAssistantAIAgent$,
  UpdateAssistantAIAgentCommand,
  UpdateAssistantAIAgentRequest$,
  UpdateAssistantAIAgentResponse$,
  UpdateContent$,
  UpdateContentCommand,
  UpdateContentRequest$,
  UpdateContentResponse$,
  UpdateKnowledgeBaseTemplateUri$,
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateKnowledgeBaseTemplateUriRequest$,
  UpdateKnowledgeBaseTemplateUriResponse$,
  UpdateMessageTemplate$,
  UpdateMessageTemplateCommand,
  UpdateMessageTemplateMetadata$,
  UpdateMessageTemplateMetadataCommand,
  UpdateMessageTemplateMetadataRequest$,
  UpdateMessageTemplateMetadataResponse$,
  UpdateMessageTemplateRequest$,
  UpdateMessageTemplateResponse$,
  UpdateQuickResponse$,
  UpdateQuickResponseCommand,
  UpdateQuickResponseRequest$,
  UpdateQuickResponseResponse$,
  UpdateSession$,
  UpdateSessionCommand,
  UpdateSessionData$,
  UpdateSessionDataCommand,
  UpdateSessionDataRequest$,
  UpdateSessionDataResponse$,
  UpdateSessionRequest$,
  UpdateSessionResponse$,
  UrlConfiguration$,
  UserInteractionConfiguration$,
  ValidationException,
  ValidationException$,
  VectorIngestionConfiguration$,
  VisibilityStatus,
  WebCrawlerConfiguration$,
  WebCrawlerLimits$,
  WebScopeType,
  WhatsAppMessageTemplateContent$,
  WhatsAppMessageTemplateSourceConfiguration$,
  WhatsAppMessageTemplateSourceConfigurationSummary$,
  WhatsAppSourceConfigurationStatus,
  paginateListAIAgentVersions,
  paginateListAIAgents,
  paginateListAIGuardrailVersions,
  paginateListAIGuardrails,
  paginateListAIPromptVersions,
  paginateListAIPrompts,
  paginateListAssistantAssociations,
  paginateListAssistants,
  paginateListContentAssociations,
  paginateListContents,
  paginateListImportJobs,
  paginateListKnowledgeBases,
  paginateListMessageTemplateVersions,
  paginateListMessageTemplates,
  paginateListMessages,
  paginateListQuickResponses,
  paginateListSpans,
  paginateQueryAssistant,
  paginateSearchContent,
  paginateSearchMessageTemplates,
  paginateSearchQuickResponses,
  paginateSearchSessions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof QConnectClient === "function");
assert(typeof QConnect === "function");
// commands
assert(typeof ActivateMessageTemplateCommand === "function");
assert(typeof ActivateMessageTemplate$ === "object");
assert(typeof CreateAIAgentCommand === "function");
assert(typeof CreateAIAgent$ === "object");
assert(typeof CreateAIAgentVersionCommand === "function");
assert(typeof CreateAIAgentVersion$ === "object");
assert(typeof CreateAIGuardrailCommand === "function");
assert(typeof CreateAIGuardrail$ === "object");
assert(typeof CreateAIGuardrailVersionCommand === "function");
assert(typeof CreateAIGuardrailVersion$ === "object");
assert(typeof CreateAIPromptCommand === "function");
assert(typeof CreateAIPrompt$ === "object");
assert(typeof CreateAIPromptVersionCommand === "function");
assert(typeof CreateAIPromptVersion$ === "object");
assert(typeof CreateAssistantCommand === "function");
assert(typeof CreateAssistant$ === "object");
assert(typeof CreateAssistantAssociationCommand === "function");
assert(typeof CreateAssistantAssociation$ === "object");
assert(typeof CreateContentCommand === "function");
assert(typeof CreateContent$ === "object");
assert(typeof CreateContentAssociationCommand === "function");
assert(typeof CreateContentAssociation$ === "object");
assert(typeof CreateKnowledgeBaseCommand === "function");
assert(typeof CreateKnowledgeBase$ === "object");
assert(typeof CreateMessageTemplateCommand === "function");
assert(typeof CreateMessageTemplate$ === "object");
assert(typeof CreateMessageTemplateAttachmentCommand === "function");
assert(typeof CreateMessageTemplateAttachment$ === "object");
assert(typeof CreateMessageTemplateVersionCommand === "function");
assert(typeof CreateMessageTemplateVersion$ === "object");
assert(typeof CreateQuickResponseCommand === "function");
assert(typeof CreateQuickResponse$ === "object");
assert(typeof CreateSessionCommand === "function");
assert(typeof CreateSession$ === "object");
assert(typeof DeactivateMessageTemplateCommand === "function");
assert(typeof DeactivateMessageTemplate$ === "object");
assert(typeof DeleteAIAgentCommand === "function");
assert(typeof DeleteAIAgent$ === "object");
assert(typeof DeleteAIAgentVersionCommand === "function");
assert(typeof DeleteAIAgentVersion$ === "object");
assert(typeof DeleteAIGuardrailCommand === "function");
assert(typeof DeleteAIGuardrail$ === "object");
assert(typeof DeleteAIGuardrailVersionCommand === "function");
assert(typeof DeleteAIGuardrailVersion$ === "object");
assert(typeof DeleteAIPromptCommand === "function");
assert(typeof DeleteAIPrompt$ === "object");
assert(typeof DeleteAIPromptVersionCommand === "function");
assert(typeof DeleteAIPromptVersion$ === "object");
assert(typeof DeleteAssistantCommand === "function");
assert(typeof DeleteAssistant$ === "object");
assert(typeof DeleteAssistantAssociationCommand === "function");
assert(typeof DeleteAssistantAssociation$ === "object");
assert(typeof DeleteContentCommand === "function");
assert(typeof DeleteContent$ === "object");
assert(typeof DeleteContentAssociationCommand === "function");
assert(typeof DeleteContentAssociation$ === "object");
assert(typeof DeleteImportJobCommand === "function");
assert(typeof DeleteImportJob$ === "object");
assert(typeof DeleteKnowledgeBaseCommand === "function");
assert(typeof DeleteKnowledgeBase$ === "object");
assert(typeof DeleteMessageTemplateCommand === "function");
assert(typeof DeleteMessageTemplate$ === "object");
assert(typeof DeleteMessageTemplateAttachmentCommand === "function");
assert(typeof DeleteMessageTemplateAttachment$ === "object");
assert(typeof DeleteQuickResponseCommand === "function");
assert(typeof DeleteQuickResponse$ === "object");
assert(typeof GetAIAgentCommand === "function");
assert(typeof GetAIAgent$ === "object");
assert(typeof GetAIGuardrailCommand === "function");
assert(typeof GetAIGuardrail$ === "object");
assert(typeof GetAIPromptCommand === "function");
assert(typeof GetAIPrompt$ === "object");
assert(typeof GetAssistantCommand === "function");
assert(typeof GetAssistant$ === "object");
assert(typeof GetAssistantAssociationCommand === "function");
assert(typeof GetAssistantAssociation$ === "object");
assert(typeof GetContentCommand === "function");
assert(typeof GetContent$ === "object");
assert(typeof GetContentAssociationCommand === "function");
assert(typeof GetContentAssociation$ === "object");
assert(typeof GetContentSummaryCommand === "function");
assert(typeof GetContentSummary$ === "object");
assert(typeof GetImportJobCommand === "function");
assert(typeof GetImportJob$ === "object");
assert(typeof GetKnowledgeBaseCommand === "function");
assert(typeof GetKnowledgeBase$ === "object");
assert(typeof GetMessageTemplateCommand === "function");
assert(typeof GetMessageTemplate$ === "object");
assert(typeof GetNextMessageCommand === "function");
assert(typeof GetNextMessage$ === "object");
assert(typeof GetQuickResponseCommand === "function");
assert(typeof GetQuickResponse$ === "object");
assert(typeof GetRecommendationsCommand === "function");
assert(typeof GetRecommendations$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof ListAIAgentsCommand === "function");
assert(typeof ListAIAgents$ === "object");
assert(typeof ListAIAgentVersionsCommand === "function");
assert(typeof ListAIAgentVersions$ === "object");
assert(typeof ListAIGuardrailsCommand === "function");
assert(typeof ListAIGuardrails$ === "object");
assert(typeof ListAIGuardrailVersionsCommand === "function");
assert(typeof ListAIGuardrailVersions$ === "object");
assert(typeof ListAIPromptsCommand === "function");
assert(typeof ListAIPrompts$ === "object");
assert(typeof ListAIPromptVersionsCommand === "function");
assert(typeof ListAIPromptVersions$ === "object");
assert(typeof ListAssistantAssociationsCommand === "function");
assert(typeof ListAssistantAssociations$ === "object");
assert(typeof ListAssistantsCommand === "function");
assert(typeof ListAssistants$ === "object");
assert(typeof ListContentAssociationsCommand === "function");
assert(typeof ListContentAssociations$ === "object");
assert(typeof ListContentsCommand === "function");
assert(typeof ListContents$ === "object");
assert(typeof ListImportJobsCommand === "function");
assert(typeof ListImportJobs$ === "object");
assert(typeof ListKnowledgeBasesCommand === "function");
assert(typeof ListKnowledgeBases$ === "object");
assert(typeof ListMessagesCommand === "function");
assert(typeof ListMessages$ === "object");
assert(typeof ListMessageTemplatesCommand === "function");
assert(typeof ListMessageTemplates$ === "object");
assert(typeof ListMessageTemplateVersionsCommand === "function");
assert(typeof ListMessageTemplateVersions$ === "object");
assert(typeof ListQuickResponsesCommand === "function");
assert(typeof ListQuickResponses$ === "object");
assert(typeof ListSpansCommand === "function");
assert(typeof ListSpans$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof NotifyRecommendationsReceivedCommand === "function");
assert(typeof NotifyRecommendationsReceived$ === "object");
assert(typeof PutFeedbackCommand === "function");
assert(typeof PutFeedback$ === "object");
assert(typeof QueryAssistantCommand === "function");
assert(typeof QueryAssistant$ === "object");
assert(typeof RemoveAssistantAIAgentCommand === "function");
assert(typeof RemoveAssistantAIAgent$ === "object");
assert(typeof RemoveKnowledgeBaseTemplateUriCommand === "function");
assert(typeof RemoveKnowledgeBaseTemplateUri$ === "object");
assert(typeof RenderMessageTemplateCommand === "function");
assert(typeof RenderMessageTemplate$ === "object");
assert(typeof RetrieveCommand === "function");
assert(typeof Retrieve$ === "object");
assert(typeof SearchContentCommand === "function");
assert(typeof SearchContent$ === "object");
assert(typeof SearchMessageTemplatesCommand === "function");
assert(typeof SearchMessageTemplates$ === "object");
assert(typeof SearchQuickResponsesCommand === "function");
assert(typeof SearchQuickResponses$ === "object");
assert(typeof SearchSessionsCommand === "function");
assert(typeof SearchSessions$ === "object");
assert(typeof SendMessageCommand === "function");
assert(typeof SendMessage$ === "object");
assert(typeof StartContentUploadCommand === "function");
assert(typeof StartContentUpload$ === "object");
assert(typeof StartImportJobCommand === "function");
assert(typeof StartImportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAIAgentCommand === "function");
assert(typeof UpdateAIAgent$ === "object");
assert(typeof UpdateAIGuardrailCommand === "function");
assert(typeof UpdateAIGuardrail$ === "object");
assert(typeof UpdateAIPromptCommand === "function");
assert(typeof UpdateAIPrompt$ === "object");
assert(typeof UpdateAssistantAIAgentCommand === "function");
assert(typeof UpdateAssistantAIAgent$ === "object");
assert(typeof UpdateContentCommand === "function");
assert(typeof UpdateContent$ === "object");
assert(typeof UpdateKnowledgeBaseTemplateUriCommand === "function");
assert(typeof UpdateKnowledgeBaseTemplateUri$ === "object");
assert(typeof UpdateMessageTemplateCommand === "function");
assert(typeof UpdateMessageTemplate$ === "object");
assert(typeof UpdateMessageTemplateMetadataCommand === "function");
assert(typeof UpdateMessageTemplateMetadata$ === "object");
assert(typeof UpdateQuickResponseCommand === "function");
assert(typeof UpdateQuickResponse$ === "object");
assert(typeof UpdateSessionCommand === "function");
assert(typeof UpdateSession$ === "object");
assert(typeof UpdateSessionDataCommand === "function");
assert(typeof UpdateSessionData$ === "object");
// structural schemas
assert(typeof ActivateMessageTemplateRequest$ === "object");
assert(typeof ActivateMessageTemplateResponse$ === "object");
assert(typeof AgentAttributes$ === "object");
assert(typeof AIAgentConfiguration$ === "object");
assert(typeof AIAgentConfigurationData$ === "object");
assert(typeof AIAgentData$ === "object");
assert(typeof AIAgentSummary$ === "object");
assert(typeof AIAgentVersionSummary$ === "object");
assert(typeof AIGuardrailAssessment$ === "object");
assert(typeof AIGuardrailContentPolicyConfig$ === "object");
assert(typeof AIGuardrailContextualGroundingPolicyConfig$ === "object");
assert(typeof AIGuardrailData$ === "object");
assert(typeof AIGuardrailSensitiveInformationPolicyConfig$ === "object");
assert(typeof AIGuardrailSummary$ === "object");
assert(typeof AIGuardrailTopicPolicyConfig$ === "object");
assert(typeof AIGuardrailVersionSummary$ === "object");
assert(typeof AIGuardrailWordPolicyConfig$ === "object");
assert(typeof AIPromptData$ === "object");
assert(typeof AIPromptInferenceConfiguration$ === "object");
assert(typeof AIPromptSummary$ === "object");
assert(typeof AIPromptTemplateConfiguration$ === "object");
assert(typeof AIPromptVersionSummary$ === "object");
assert(typeof AmazonConnectGuideAssociationData$ === "object");
assert(typeof Annotation$ === "object");
assert(typeof AnswerRecommendationAIAgentConfiguration$ === "object");
assert(typeof AppIntegrationsConfiguration$ === "object");
assert(typeof AssistantAssociationData$ === "object");
assert(typeof AssistantAssociationInputData$ === "object");
assert(typeof AssistantAssociationOutputData$ === "object");
assert(typeof AssistantAssociationSummary$ === "object");
assert(typeof AssistantCapabilityConfiguration$ === "object");
assert(typeof AssistantData$ === "object");
assert(typeof AssistantIntegrationConfiguration$ === "object");
assert(typeof AssistantSummary$ === "object");
assert(typeof AssociationConfiguration$ === "object");
assert(typeof AssociationConfigurationData$ === "object");
assert(typeof BedrockFoundationModelConfigurationForParsing$ === "object");
assert(typeof CaseSummarizationAIAgentConfiguration$ === "object");
assert(typeof CaseSummarizationChunkDataDetails$ === "object");
assert(typeof CaseSummarizationInputData$ === "object");
assert(typeof ChunkingConfiguration$ === "object");
assert(typeof Citation$ === "object");
assert(typeof CitationSpan$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConnectConfiguration$ === "object");
assert(typeof ContentAssociationContents$ === "object");
assert(typeof ContentAssociationData$ === "object");
assert(typeof ContentAssociationSummary$ === "object");
assert(typeof ContentData$ === "object");
assert(typeof ContentDataDetails$ === "object");
assert(typeof ContentFeedbackData$ === "object");
assert(typeof ContentReference$ === "object");
assert(typeof ContentSummary$ === "object");
assert(typeof ConversationContext$ === "object");
assert(typeof ConversationState$ === "object");
assert(typeof CreateAIAgentRequest$ === "object");
assert(typeof CreateAIAgentResponse$ === "object");
assert(typeof CreateAIAgentVersionRequest$ === "object");
assert(typeof CreateAIAgentVersionResponse$ === "object");
assert(typeof CreateAIGuardrailRequest$ === "object");
assert(typeof CreateAIGuardrailResponse$ === "object");
assert(typeof CreateAIGuardrailVersionRequest$ === "object");
assert(typeof CreateAIGuardrailVersionResponse$ === "object");
assert(typeof CreateAIPromptRequest$ === "object");
assert(typeof CreateAIPromptResponse$ === "object");
assert(typeof CreateAIPromptVersionRequest$ === "object");
assert(typeof CreateAIPromptVersionResponse$ === "object");
assert(typeof CreateAssistantAssociationRequest$ === "object");
assert(typeof CreateAssistantAssociationResponse$ === "object");
assert(typeof CreateAssistantRequest$ === "object");
assert(typeof CreateAssistantResponse$ === "object");
assert(typeof CreateContentAssociationRequest$ === "object");
assert(typeof CreateContentAssociationResponse$ === "object");
assert(typeof CreateContentRequest$ === "object");
assert(typeof CreateContentResponse$ === "object");
assert(typeof CreateKnowledgeBaseRequest$ === "object");
assert(typeof CreateKnowledgeBaseResponse$ === "object");
assert(typeof CreateMessageTemplateAttachmentRequest$ === "object");
assert(typeof CreateMessageTemplateAttachmentResponse$ === "object");
assert(typeof CreateMessageTemplateRequest$ === "object");
assert(typeof CreateMessageTemplateResponse$ === "object");
assert(typeof CreateMessageTemplateVersionRequest$ === "object");
assert(typeof CreateMessageTemplateVersionResponse$ === "object");
assert(typeof CreateQuickResponseRequest$ === "object");
assert(typeof CreateQuickResponseResponse$ === "object");
assert(typeof CreateSessionRequest$ === "object");
assert(typeof CreateSessionResponse$ === "object");
assert(typeof CustomerProfileAttributes$ === "object");
assert(typeof DataDetails$ === "object");
assert(typeof DataReference$ === "object");
assert(typeof DataSummary$ === "object");
assert(typeof DeactivateMessageTemplateRequest$ === "object");
assert(typeof DeactivateMessageTemplateResponse$ === "object");
assert(typeof DeleteAIAgentRequest$ === "object");
assert(typeof DeleteAIAgentResponse$ === "object");
assert(typeof DeleteAIAgentVersionRequest$ === "object");
assert(typeof DeleteAIAgentVersionResponse$ === "object");
assert(typeof DeleteAIGuardrailRequest$ === "object");
assert(typeof DeleteAIGuardrailResponse$ === "object");
assert(typeof DeleteAIGuardrailVersionRequest$ === "object");
assert(typeof DeleteAIGuardrailVersionResponse$ === "object");
assert(typeof DeleteAIPromptRequest$ === "object");
assert(typeof DeleteAIPromptResponse$ === "object");
assert(typeof DeleteAIPromptVersionRequest$ === "object");
assert(typeof DeleteAIPromptVersionResponse$ === "object");
assert(typeof DeleteAssistantAssociationRequest$ === "object");
assert(typeof DeleteAssistantAssociationResponse$ === "object");
assert(typeof DeleteAssistantRequest$ === "object");
assert(typeof DeleteAssistantResponse$ === "object");
assert(typeof DeleteContentAssociationRequest$ === "object");
assert(typeof DeleteContentAssociationResponse$ === "object");
assert(typeof DeleteContentRequest$ === "object");
assert(typeof DeleteContentResponse$ === "object");
assert(typeof DeleteImportJobRequest$ === "object");
assert(typeof DeleteImportJobResponse$ === "object");
assert(typeof DeleteKnowledgeBaseRequest$ === "object");
assert(typeof DeleteKnowledgeBaseResponse$ === "object");
assert(typeof DeleteMessageTemplateAttachmentRequest$ === "object");
assert(typeof DeleteMessageTemplateAttachmentResponse$ === "object");
assert(typeof DeleteMessageTemplateRequest$ === "object");
assert(typeof DeleteMessageTemplateResponse$ === "object");
assert(typeof DeleteQuickResponseRequest$ === "object");
assert(typeof DeleteQuickResponseResponse$ === "object");
assert(typeof Document$ === "object");
assert(typeof DocumentText$ === "object");
assert(typeof EmailGenerativeAnswerAIAgentConfiguration$ === "object");
assert(typeof EmailGenerativeAnswerChunkDataDetails$ === "object");
assert(typeof EmailHeader$ === "object");
assert(typeof EmailMessageTemplateContent$ === "object");
assert(typeof EmailMessageTemplateContentBody$ === "object");
assert(typeof EmailOverviewAIAgentConfiguration$ === "object");
assert(typeof EmailOverviewChunkDataDetails$ === "object");
assert(typeof EmailResponseAIAgentConfiguration$ === "object");
assert(typeof EmailResponseChunkDataDetails$ === "object");
assert(typeof ExtendedMessageTemplateData$ === "object");
assert(typeof ExternalBedrockKnowledgeBaseConfig$ === "object");
assert(typeof ExternalSourceConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterAttribute$ === "object");
assert(typeof FixedSizeChunkingConfiguration$ === "object");
assert(typeof GenerativeChunkDataDetails$ === "object");
assert(typeof GenerativeContentFeedbackData$ === "object");
assert(typeof GenerativeDataDetails$ === "object");
assert(typeof GenerativeReference$ === "object");
assert(typeof GetAIAgentRequest$ === "object");
assert(typeof GetAIAgentResponse$ === "object");
assert(typeof GetAIGuardrailRequest$ === "object");
assert(typeof GetAIGuardrailResponse$ === "object");
assert(typeof GetAIPromptRequest$ === "object");
assert(typeof GetAIPromptResponse$ === "object");
assert(typeof GetAssistantAssociationRequest$ === "object");
assert(typeof GetAssistantAssociationResponse$ === "object");
assert(typeof GetAssistantRequest$ === "object");
assert(typeof GetAssistantResponse$ === "object");
assert(typeof GetContentAssociationRequest$ === "object");
assert(typeof GetContentAssociationResponse$ === "object");
assert(typeof GetContentRequest$ === "object");
assert(typeof GetContentResponse$ === "object");
assert(typeof GetContentSummaryRequest$ === "object");
assert(typeof GetContentSummaryResponse$ === "object");
assert(typeof GetImportJobRequest$ === "object");
assert(typeof GetImportJobResponse$ === "object");
assert(typeof GetKnowledgeBaseRequest$ === "object");
assert(typeof GetKnowledgeBaseResponse$ === "object");
assert(typeof GetMessageTemplateRequest$ === "object");
assert(typeof GetMessageTemplateResponse$ === "object");
assert(typeof GetNextMessageRequest$ === "object");
assert(typeof GetNextMessageResponse$ === "object");
assert(typeof GetQuickResponseRequest$ === "object");
assert(typeof GetQuickResponseResponse$ === "object");
assert(typeof GetRecommendationsRequest$ === "object");
assert(typeof GetRecommendationsResponse$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof GroupingConfiguration$ === "object");
assert(typeof GuardrailContentFilterConfig$ === "object");
assert(typeof GuardrailContextualGroundingFilterConfig$ === "object");
assert(typeof GuardrailManagedWordsConfig$ === "object");
assert(typeof GuardrailPiiEntityConfig$ === "object");
assert(typeof GuardrailRegexConfig$ === "object");
assert(typeof GuardrailTopicConfig$ === "object");
assert(typeof GuardrailWordConfig$ === "object");
assert(typeof HierarchicalChunkingConfiguration$ === "object");
assert(typeof HierarchicalChunkingLevelConfiguration$ === "object");
assert(typeof Highlight$ === "object");
assert(typeof ImportJobData$ === "object");
assert(typeof ImportJobSummary$ === "object");
assert(typeof IntentDetectedDataDetails$ === "object");
assert(typeof IntentInputData$ === "object");
assert(typeof KnowledgeBaseAssociationConfigurationData$ === "object");
assert(typeof KnowledgeBaseAssociationData$ === "object");
assert(typeof KnowledgeBaseData$ === "object");
assert(typeof KnowledgeBaseSummary$ === "object");
assert(typeof KnowledgeSource$ === "object");
assert(typeof ListAIAgentsRequest$ === "object");
assert(typeof ListAIAgentsResponse$ === "object");
assert(typeof ListAIAgentVersionsRequest$ === "object");
assert(typeof ListAIAgentVersionsResponse$ === "object");
assert(typeof ListAIGuardrailsRequest$ === "object");
assert(typeof ListAIGuardrailsResponse$ === "object");
assert(typeof ListAIGuardrailVersionsRequest$ === "object");
assert(typeof ListAIGuardrailVersionsResponse$ === "object");
assert(typeof ListAIPromptsRequest$ === "object");
assert(typeof ListAIPromptsResponse$ === "object");
assert(typeof ListAIPromptVersionsRequest$ === "object");
assert(typeof ListAIPromptVersionsResponse$ === "object");
assert(typeof ListAssistantAssociationsRequest$ === "object");
assert(typeof ListAssistantAssociationsResponse$ === "object");
assert(typeof ListAssistantsRequest$ === "object");
assert(typeof ListAssistantsResponse$ === "object");
assert(typeof ListContentAssociationsRequest$ === "object");
assert(typeof ListContentAssociationsResponse$ === "object");
assert(typeof ListContentsRequest$ === "object");
assert(typeof ListContentsResponse$ === "object");
assert(typeof ListImportJobsRequest$ === "object");
assert(typeof ListImportJobsResponse$ === "object");
assert(typeof ListKnowledgeBasesRequest$ === "object");
assert(typeof ListKnowledgeBasesResponse$ === "object");
assert(typeof ListMessagesRequest$ === "object");
assert(typeof ListMessagesResponse$ === "object");
assert(typeof ListMessageTemplatesRequest$ === "object");
assert(typeof ListMessageTemplatesResponse$ === "object");
assert(typeof ListMessageTemplateVersionsRequest$ === "object");
assert(typeof ListMessageTemplateVersionsResponse$ === "object");
assert(typeof ListQuickResponsesRequest$ === "object");
assert(typeof ListQuickResponsesResponse$ === "object");
assert(typeof ListSpansRequest$ === "object");
assert(typeof ListSpansResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedSourceConfiguration$ === "object");
assert(typeof ManualSearchAIAgentConfiguration$ === "object");
assert(typeof MessageConfiguration$ === "object");
assert(typeof MessageData$ === "object");
assert(typeof MessageInput$ === "object");
assert(typeof MessageOutput$ === "object");
assert(typeof MessageTemplateAttachment$ === "object");
assert(typeof MessageTemplateAttributes$ === "object");
assert(typeof MessageTemplateBodyContentProvider$ === "object");
assert(typeof MessageTemplateContentProvider$ === "object");
assert(typeof MessageTemplateData$ === "object");
assert(typeof MessageTemplateFilterField$ === "object");
assert(typeof MessageTemplateOrderField$ === "object");
assert(typeof MessageTemplateQueryField$ === "object");
assert(typeof MessageTemplateSearchExpression$ === "object");
assert(typeof MessageTemplateSearchResultData$ === "object");
assert(typeof MessageTemplateSourceConfiguration$ === "object");
assert(typeof MessageTemplateSourceConfigurationSummary$ === "object");
assert(typeof MessageTemplateSummary$ === "object");
assert(typeof MessageTemplateVersionSummary$ === "object");
assert(typeof NotesChunkDataDetails$ === "object");
assert(typeof NotesDataDetails$ === "object");
assert(typeof NoteTakingAIAgentConfiguration$ === "object");
assert(typeof NotifyRecommendationsReceivedError$ === "object");
assert(typeof NotifyRecommendationsReceivedRequest$ === "object");
assert(typeof NotifyRecommendationsReceivedResponse$ === "object");
assert(typeof OrchestrationAIAgentConfiguration$ === "object");
assert(typeof OrchestratorConfigurationEntry$ === "object");
assert(typeof OrCondition$ === "object");
assert(typeof ParsingConfiguration$ === "object");
assert(typeof ParsingPrompt$ === "object");
assert(typeof PushADMMessageTemplateContent$ === "object");
assert(typeof PushAPNSMessageTemplateContent$ === "object");
assert(typeof PushBaiduMessageTemplateContent$ === "object");
assert(typeof PushFCMMessageTemplateContent$ === "object");
assert(typeof PushMessageTemplateContent$ === "object");
assert(typeof PutFeedbackRequest$ === "object");
assert(typeof PutFeedbackResponse$ === "object");
assert(typeof QueryAssistantRequest$ === "object");
assert(typeof QueryAssistantResponse$ === "object");
assert(typeof QueryCondition$ === "object");
assert(typeof QueryConditionItem$ === "object");
assert(typeof QueryInputData$ === "object");
assert(typeof QueryRecommendationTriggerData$ === "object");
assert(typeof QueryTextInputData$ === "object");
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
assert(typeof RankingData$ === "object");
assert(typeof RecommendationData$ === "object");
assert(typeof RecommendationTrigger$ === "object");
assert(typeof RecommendationTriggerData$ === "object");
assert(typeof RemoveAssistantAIAgentRequest$ === "object");
assert(typeof RemoveAssistantAIAgentResponse$ === "object");
assert(typeof RemoveKnowledgeBaseTemplateUriRequest$ === "object");
assert(typeof RemoveKnowledgeBaseTemplateUriResponse$ === "object");
assert(typeof RenderingConfiguration$ === "object");
assert(typeof RenderMessageTemplateRequest$ === "object");
assert(typeof RenderMessageTemplateResponse$ === "object");
assert(typeof ResultData$ === "object");
assert(typeof RetrievalConfiguration$ === "object");
assert(typeof RetrievalFilterConfiguration$ === "object");
assert(typeof RetrieveRequest$ === "object");
assert(typeof RetrieveResponse$ === "object");
assert(typeof RetrieveResult$ === "object");
assert(typeof RuntimeSessionData$ === "object");
assert(typeof RuntimeSessionDataValue$ === "object");
assert(typeof SearchContentRequest$ === "object");
assert(typeof SearchContentResponse$ === "object");
assert(typeof SearchExpression$ === "object");
assert(typeof SearchMessageTemplatesRequest$ === "object");
assert(typeof SearchMessageTemplatesResponse$ === "object");
assert(typeof SearchQuickResponsesRequest$ === "object");
assert(typeof SearchQuickResponsesResponse$ === "object");
assert(typeof SearchSessionsRequest$ === "object");
assert(typeof SearchSessionsResponse$ === "object");
assert(typeof SeedUrl$ === "object");
assert(typeof SelfServiceAIAgentConfiguration$ === "object");
assert(typeof SelfServiceConversationHistory$ === "object");
assert(typeof SemanticChunkingConfiguration$ === "object");
assert(typeof SendMessageRequest$ === "object");
assert(typeof SendMessageResponse$ === "object");
assert(typeof ServerSideEncryptionConfiguration$ === "object");
assert(typeof SessionData$ === "object");
assert(typeof SessionIntegrationConfiguration$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof SMSMessageTemplateContent$ === "object");
assert(typeof SMSMessageTemplateContentBody$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof SourceContentDataDetails$ === "object");
assert(typeof Span$ === "object");
assert(typeof SpanAttributes$ === "object");
assert(typeof SpanCitation$ === "object");
assert(typeof SpanMessage$ === "object");
assert(typeof SpanMessageValue$ === "object");
assert(typeof SpanTextValue$ === "object");
assert(typeof SpanToolResultValue$ === "object");
assert(typeof SpanToolUseValue$ === "object");
assert(typeof StartContentUploadRequest$ === "object");
assert(typeof StartContentUploadResponse$ === "object");
assert(typeof StartImportJobRequest$ === "object");
assert(typeof StartImportJobResponse$ === "object");
assert(typeof SuggestedMessageDataDetails$ === "object");
assert(typeof SuggestedMessageReference$ === "object");
assert(typeof SystemAttributes$ === "object");
assert(typeof SystemEndpointAttributes$ === "object");
assert(typeof TagCondition$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TextAIPromptInferenceConfiguration$ === "object");
assert(typeof TextData$ === "object");
assert(typeof TextFullAIPromptEditTemplateConfiguration$ === "object");
assert(typeof TextMessage$ === "object");
assert(typeof ToolConfiguration$ === "object");
assert(typeof ToolInstruction$ === "object");
assert(typeof ToolOutputConfiguration$ === "object");
assert(typeof ToolOutputFilter$ === "object");
assert(typeof ToolOverrideConstantInputValue$ === "object");
assert(typeof ToolOverrideInputValue$ === "object");
assert(typeof ToolOverrideInputValueConfiguration$ === "object");
assert(typeof ToolUseResultData$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAIAgentRequest$ === "object");
assert(typeof UpdateAIAgentResponse$ === "object");
assert(typeof UpdateAIGuardrailRequest$ === "object");
assert(typeof UpdateAIGuardrailResponse$ === "object");
assert(typeof UpdateAIPromptRequest$ === "object");
assert(typeof UpdateAIPromptResponse$ === "object");
assert(typeof UpdateAssistantAIAgentRequest$ === "object");
assert(typeof UpdateAssistantAIAgentResponse$ === "object");
assert(typeof UpdateContentRequest$ === "object");
assert(typeof UpdateContentResponse$ === "object");
assert(typeof UpdateKnowledgeBaseTemplateUriRequest$ === "object");
assert(typeof UpdateKnowledgeBaseTemplateUriResponse$ === "object");
assert(typeof UpdateMessageTemplateMetadataRequest$ === "object");
assert(typeof UpdateMessageTemplateMetadataResponse$ === "object");
assert(typeof UpdateMessageTemplateRequest$ === "object");
assert(typeof UpdateMessageTemplateResponse$ === "object");
assert(typeof UpdateQuickResponseRequest$ === "object");
assert(typeof UpdateQuickResponseResponse$ === "object");
assert(typeof UpdateSessionDataRequest$ === "object");
assert(typeof UpdateSessionDataResponse$ === "object");
assert(typeof UpdateSessionRequest$ === "object");
assert(typeof UpdateSessionResponse$ === "object");
assert(typeof UrlConfiguration$ === "object");
assert(typeof UserInteractionConfiguration$ === "object");
assert(typeof VectorIngestionConfiguration$ === "object");
assert(typeof WebCrawlerConfiguration$ === "object");
assert(typeof WebCrawlerLimits$ === "object");
assert(typeof WhatsAppMessageTemplateContent$ === "object");
assert(typeof WhatsAppMessageTemplateSourceConfiguration$ === "object");
assert(typeof WhatsAppMessageTemplateSourceConfigurationSummary$ === "object");
// enums
assert(typeof AIAgentAssociationConfigurationType === "object");
assert(typeof AIAgentType === "object");
assert(typeof AIPromptAPIFormat === "object");
assert(typeof AIPromptTemplateType === "object");
assert(typeof AIPromptType === "object");
assert(typeof AssistantCapabilityType === "object");
assert(typeof AssistantStatus === "object");
assert(typeof AssistantType === "object");
assert(typeof AssociationType === "object");
assert(typeof ChannelSubtype === "object");
assert(typeof ChunkingStrategy === "object");
assert(typeof ContentAssociationType === "object");
assert(typeof ContentDisposition === "object");
assert(typeof ContentStatus === "object");
assert(typeof ConversationStatus === "object");
assert(typeof ConversationStatusReason === "object");
assert(typeof ExternalSource === "object");
assert(typeof FilterField === "object");
assert(typeof FilterOperator === "object");
assert(typeof GuardrailContentFilterType === "object");
assert(typeof GuardrailContextualGroundingFilterType === "object");
assert(typeof GuardrailFilterStrength === "object");
assert(typeof GuardrailManagedWordsType === "object");
assert(typeof GuardrailPiiEntityType === "object");
assert(typeof GuardrailSensitiveInformationAction === "object");
assert(typeof GuardrailTopicType === "object");
assert(typeof ImportJobStatus === "object");
assert(typeof ImportJobType === "object");
assert(typeof KnowledgeBaseSearchType === "object");
assert(typeof KnowledgeBaseStatus === "object");
assert(typeof KnowledgeBaseType === "object");
assert(typeof MessageFilterType === "object");
assert(typeof MessageTemplateAttributeType === "object");
assert(typeof MessageTemplateFilterOperator === "object");
assert(typeof MessageTemplateQueryOperator === "object");
assert(typeof MessageType === "object");
assert(typeof Order === "object");
assert(typeof Origin === "object");
assert(typeof ParsingStrategy === "object");
assert(typeof Participant === "object");
assert(typeof Priority === "object");
assert(typeof PushMessageAction === "object");
assert(typeof QueryConditionComparisonOperator === "object");
assert(typeof QueryConditionFieldName === "object");
assert(typeof QueryResultType === "object");
assert(typeof QuickResponseFilterOperator === "object");
assert(typeof QuickResponseQueryOperator === "object");
assert(typeof QuickResponseStatus === "object");
assert(typeof RecommendationSourceType === "object");
assert(typeof RecommendationTriggerType === "object");
assert(typeof RecommendationType === "object");
assert(typeof ReferenceType === "object");
assert(typeof Relevance === "object");
assert(typeof RelevanceLevel === "object");
assert(typeof SessionDataNamespace === "object");
assert(typeof SourceContentType === "object");
assert(typeof SpanStatus === "object");
assert(typeof SpanType === "object");
assert(typeof Status === "object");
assert(typeof SyncStatus === "object");
assert(typeof TargetType === "object");
assert(typeof ToolOverrideInputValueType === "object");
assert(typeof ToolType === "object");
assert(typeof VisibilityStatus === "object");
assert(typeof WebScopeType === "object");
assert(typeof WhatsAppSourceConfigurationStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof QConnectServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof QConnectServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyFailedException.prototype instanceof QConnectServiceException);
assert(typeof DependencyFailedException$ === "object");
assert(PreconditionFailedException.prototype instanceof QConnectServiceException);
assert(typeof PreconditionFailedException$ === "object");
assert(RequestTimeoutException.prototype instanceof QConnectServiceException);
assert(typeof RequestTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof QConnectServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof QConnectServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof QConnectServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof QConnectServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnauthorizedException.prototype instanceof QConnectServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(UnprocessableContentException.prototype instanceof QConnectServiceException);
assert(typeof UnprocessableContentException$ === "object");
assert(ValidationException.prototype instanceof QConnectServiceException);
assert(typeof ValidationException$ === "object");
assert(QConnectServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAIAgentVersions === "function");
assert(typeof paginateListAIAgents === "function");
assert(typeof paginateListAIGuardrailVersions === "function");
assert(typeof paginateListAIGuardrails === "function");
assert(typeof paginateListAIPromptVersions === "function");
assert(typeof paginateListAIPrompts === "function");
assert(typeof paginateListAssistantAssociations === "function");
assert(typeof paginateListAssistants === "function");
assert(typeof paginateListContentAssociations === "function");
assert(typeof paginateListContents === "function");
assert(typeof paginateListImportJobs === "function");
assert(typeof paginateListKnowledgeBases === "function");
assert(typeof paginateListMessageTemplateVersions === "function");
assert(typeof paginateListMessageTemplates === "function");
assert(typeof paginateListMessages === "function");
assert(typeof paginateListQuickResponses === "function");
assert(typeof paginateListSpans === "function");
assert(typeof paginateQueryAssistant === "function");
assert(typeof paginateSearchContent === "function");
assert(typeof paginateSearchMessageTemplates === "function");
assert(typeof paginateSearchQuickResponses === "function");
assert(typeof paginateSearchSessions === "function");
console.log(`QConnect index test passed.`);
