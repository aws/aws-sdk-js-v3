import {
  AIAgentAssociationConfigurationType,
  AIAgentType,
  AIPromptAPIFormat,
  AIPromptTemplateType,
  AIPromptType,
  AccessDeniedException,
  ActivateMessageTemplateCommand,
  AssistantCapabilityType,
  AssistantStatus,
  AssistantType,
  AssociationType,
  ChannelSubtype,
  ChunkingStrategy,
  ConflictException,
  ContentAssociationType,
  ContentDisposition,
  ContentStatus,
  ConversationStatus,
  ConversationStatusReason,
  CreateAIAgentCommand,
  CreateAIAgentVersionCommand,
  CreateAIGuardrailCommand,
  CreateAIGuardrailVersionCommand,
  CreateAIPromptCommand,
  CreateAIPromptVersionCommand,
  CreateAssistantAssociationCommand,
  CreateAssistantCommand,
  CreateContentAssociationCommand,
  CreateContentCommand,
  CreateKnowledgeBaseCommand,
  CreateMessageTemplateAttachmentCommand,
  CreateMessageTemplateCommand,
  CreateMessageTemplateVersionCommand,
  CreateQuickResponseCommand,
  CreateSessionCommand,
  DeactivateMessageTemplateCommand,
  DeleteAIAgentCommand,
  DeleteAIAgentVersionCommand,
  DeleteAIGuardrailCommand,
  DeleteAIGuardrailVersionCommand,
  DeleteAIPromptCommand,
  DeleteAIPromptVersionCommand,
  DeleteAssistantAssociationCommand,
  DeleteAssistantCommand,
  DeleteContentAssociationCommand,
  DeleteContentCommand,
  DeleteImportJobCommand,
  DeleteKnowledgeBaseCommand,
  DeleteMessageTemplateAttachmentCommand,
  DeleteMessageTemplateCommand,
  DeleteQuickResponseCommand,
  DependencyFailedException,
  ExternalSource,
  FilterField,
  FilterOperator,
  GetAIAgentCommand,
  GetAIGuardrailCommand,
  GetAIPromptCommand,
  GetAssistantAssociationCommand,
  GetAssistantCommand,
  GetContentAssociationCommand,
  GetContentCommand,
  GetContentSummaryCommand,
  GetImportJobCommand,
  GetKnowledgeBaseCommand,
  GetMessageTemplateCommand,
  GetNextMessageCommand,
  GetQuickResponseCommand,
  GetRecommendationsCommand,
  GetSessionCommand,
  GuardrailContentFilterType,
  GuardrailContextualGroundingFilterType,
  GuardrailFilterStrength,
  GuardrailManagedWordsType,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationAction,
  GuardrailTopicType,
  ImportJobStatus,
  ImportJobType,
  KnowledgeBaseSearchType,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  ListAIAgentVersionsCommand,
  ListAIAgentsCommand,
  ListAIGuardrailVersionsCommand,
  ListAIGuardrailsCommand,
  ListAIPromptVersionsCommand,
  ListAIPromptsCommand,
  ListAssistantAssociationsCommand,
  ListAssistantsCommand,
  ListContentAssociationsCommand,
  ListContentsCommand,
  ListImportJobsCommand,
  ListKnowledgeBasesCommand,
  ListMessageTemplateVersionsCommand,
  ListMessageTemplatesCommand,
  ListMessagesCommand,
  ListQuickResponsesCommand,
  ListSpansCommand,
  ListTagsForResourceCommand,
  MessageFilterType,
  MessageTemplateAttributeType,
  MessageTemplateFilterOperator,
  MessageTemplateQueryOperator,
  MessageType,
  NotifyRecommendationsReceivedCommand,
  Order,
  Origin,
  ParsingStrategy,
  Participant,
  PreconditionFailedException,
  Priority,
  PushMessageAction,
  PutFeedbackCommand,
  QConnect,
  QConnectClient,
  QConnectServiceException,
  QueryAssistantCommand,
  QueryConditionComparisonOperator,
  QueryConditionFieldName,
  QueryResultType,
  QuickResponseFilterOperator,
  QuickResponseQueryOperator,
  QuickResponseStatus,
  RecommendationSourceType,
  RecommendationTriggerType,
  RecommendationType,
  ReferenceType,
  Relevance,
  RelevanceLevel,
  RemoveAssistantAIAgentCommand,
  RemoveKnowledgeBaseTemplateUriCommand,
  RenderMessageTemplateCommand,
  RequestTimeoutException,
  ResourceNotFoundException,
  RetrieveCommand,
  SearchContentCommand,
  SearchMessageTemplatesCommand,
  SearchQuickResponsesCommand,
  SearchSessionsCommand,
  SendMessageCommand,
  ServiceQuotaExceededException,
  SessionDataNamespace,
  SourceContentType,
  SpanStatus,
  SpanType,
  StartContentUploadCommand,
  StartImportJobCommand,
  Status,
  SyncStatus,
  TagResourceCommand,
  TargetType,
  ThrottlingException,
  TooManyTagsException,
  ToolOverrideInputValueType,
  ToolType,
  UnauthorizedException,
  UnprocessableContentException,
  UntagResourceCommand,
  UpdateAIAgentCommand,
  UpdateAIGuardrailCommand,
  UpdateAIPromptCommand,
  UpdateAssistantAIAgentCommand,
  UpdateContentCommand,
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateMessageTemplateCommand,
  UpdateMessageTemplateMetadataCommand,
  UpdateQuickResponseCommand,
  UpdateSessionCommand,
  UpdateSessionDataCommand,
  ValidationException,
  VisibilityStatus,
  WebScopeType,
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
assert(typeof CreateAIAgentCommand === "function");
assert(typeof CreateAIAgentVersionCommand === "function");
assert(typeof CreateAIGuardrailCommand === "function");
assert(typeof CreateAIGuardrailVersionCommand === "function");
assert(typeof CreateAIPromptCommand === "function");
assert(typeof CreateAIPromptVersionCommand === "function");
assert(typeof CreateAssistantCommand === "function");
assert(typeof CreateAssistantAssociationCommand === "function");
assert(typeof CreateContentCommand === "function");
assert(typeof CreateContentAssociationCommand === "function");
assert(typeof CreateKnowledgeBaseCommand === "function");
assert(typeof CreateMessageTemplateCommand === "function");
assert(typeof CreateMessageTemplateAttachmentCommand === "function");
assert(typeof CreateMessageTemplateVersionCommand === "function");
assert(typeof CreateQuickResponseCommand === "function");
assert(typeof CreateSessionCommand === "function");
assert(typeof DeactivateMessageTemplateCommand === "function");
assert(typeof DeleteAIAgentCommand === "function");
assert(typeof DeleteAIAgentVersionCommand === "function");
assert(typeof DeleteAIGuardrailCommand === "function");
assert(typeof DeleteAIGuardrailVersionCommand === "function");
assert(typeof DeleteAIPromptCommand === "function");
assert(typeof DeleteAIPromptVersionCommand === "function");
assert(typeof DeleteAssistantCommand === "function");
assert(typeof DeleteAssistantAssociationCommand === "function");
assert(typeof DeleteContentCommand === "function");
assert(typeof DeleteContentAssociationCommand === "function");
assert(typeof DeleteImportJobCommand === "function");
assert(typeof DeleteKnowledgeBaseCommand === "function");
assert(typeof DeleteMessageTemplateCommand === "function");
assert(typeof DeleteMessageTemplateAttachmentCommand === "function");
assert(typeof DeleteQuickResponseCommand === "function");
assert(typeof GetAIAgentCommand === "function");
assert(typeof GetAIGuardrailCommand === "function");
assert(typeof GetAIPromptCommand === "function");
assert(typeof GetAssistantCommand === "function");
assert(typeof GetAssistantAssociationCommand === "function");
assert(typeof GetContentCommand === "function");
assert(typeof GetContentAssociationCommand === "function");
assert(typeof GetContentSummaryCommand === "function");
assert(typeof GetImportJobCommand === "function");
assert(typeof GetKnowledgeBaseCommand === "function");
assert(typeof GetMessageTemplateCommand === "function");
assert(typeof GetNextMessageCommand === "function");
assert(typeof GetQuickResponseCommand === "function");
assert(typeof GetRecommendationsCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof ListAIAgentsCommand === "function");
assert(typeof ListAIAgentVersionsCommand === "function");
assert(typeof ListAIGuardrailsCommand === "function");
assert(typeof ListAIGuardrailVersionsCommand === "function");
assert(typeof ListAIPromptsCommand === "function");
assert(typeof ListAIPromptVersionsCommand === "function");
assert(typeof ListAssistantAssociationsCommand === "function");
assert(typeof ListAssistantsCommand === "function");
assert(typeof ListContentAssociationsCommand === "function");
assert(typeof ListContentsCommand === "function");
assert(typeof ListImportJobsCommand === "function");
assert(typeof ListKnowledgeBasesCommand === "function");
assert(typeof ListMessagesCommand === "function");
assert(typeof ListMessageTemplatesCommand === "function");
assert(typeof ListMessageTemplateVersionsCommand === "function");
assert(typeof ListQuickResponsesCommand === "function");
assert(typeof ListSpansCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof NotifyRecommendationsReceivedCommand === "function");
assert(typeof PutFeedbackCommand === "function");
assert(typeof QueryAssistantCommand === "function");
assert(typeof RemoveAssistantAIAgentCommand === "function");
assert(typeof RemoveKnowledgeBaseTemplateUriCommand === "function");
assert(typeof RenderMessageTemplateCommand === "function");
assert(typeof RetrieveCommand === "function");
assert(typeof SearchContentCommand === "function");
assert(typeof SearchMessageTemplatesCommand === "function");
assert(typeof SearchQuickResponsesCommand === "function");
assert(typeof SearchSessionsCommand === "function");
assert(typeof SendMessageCommand === "function");
assert(typeof StartContentUploadCommand === "function");
assert(typeof StartImportJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAIAgentCommand === "function");
assert(typeof UpdateAIGuardrailCommand === "function");
assert(typeof UpdateAIPromptCommand === "function");
assert(typeof UpdateAssistantAIAgentCommand === "function");
assert(typeof UpdateContentCommand === "function");
assert(typeof UpdateKnowledgeBaseTemplateUriCommand === "function");
assert(typeof UpdateMessageTemplateCommand === "function");
assert(typeof UpdateMessageTemplateMetadataCommand === "function");
assert(typeof UpdateQuickResponseCommand === "function");
assert(typeof UpdateSessionCommand === "function");
assert(typeof UpdateSessionDataCommand === "function");
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
assert(ConflictException.prototype instanceof QConnectServiceException);
assert(DependencyFailedException.prototype instanceof QConnectServiceException);
assert(PreconditionFailedException.prototype instanceof QConnectServiceException);
assert(RequestTimeoutException.prototype instanceof QConnectServiceException);
assert(ResourceNotFoundException.prototype instanceof QConnectServiceException);
assert(ServiceQuotaExceededException.prototype instanceof QConnectServiceException);
assert(ThrottlingException.prototype instanceof QConnectServiceException);
assert(TooManyTagsException.prototype instanceof QConnectServiceException);
assert(UnauthorizedException.prototype instanceof QConnectServiceException);
assert(UnprocessableContentException.prototype instanceof QConnectServiceException);
assert(ValidationException.prototype instanceof QConnectServiceException);
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
