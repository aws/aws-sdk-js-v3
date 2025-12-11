import {
  APISchemaType,
  AccessDeniedException,
  ActionPayloadFieldType,
  ApplicationStatus,
  AssociatePermissionCommand,
  AttachmentStatus,
  AttachmentsControlMode,
  AttributeType,
  AttributeValueOperator,
  AudioExtractionStatus,
  AudioExtractionType,
  AutoSubscriptionStatus,
  BatchDeleteDocumentCommand,
  BatchPutDocumentCommand,
  BrowserExtension,
  CancelSubscriptionCommand,
  ChatCommand,
  ChatMode,
  ChatResponseConfigurationStatus,
  ChatSyncCommand,
  CheckDocumentAccessCommand,
  ConflictException,
  ContentType,
  CreateAnonymousWebExperienceUrlCommand,
  CreateApplicationCommand,
  CreateChatResponseConfigurationCommand,
  CreateDataAccessorCommand,
  CreateDataSourceCommand,
  CreateIndexCommand,
  CreatePluginCommand,
  CreateRetrieverCommand,
  CreateSubscriptionCommand,
  CreateUserCommand,
  CreateWebExperienceCommand,
  CreatorModeControl,
  DataAccessorAuthenticationType,
  DataSourceStatus,
  DataSourceSyncJobStatus,
  DeleteApplicationCommand,
  DeleteAttachmentCommand,
  DeleteChatControlsConfigurationCommand,
  DeleteChatResponseConfigurationCommand,
  DeleteConversationCommand,
  DeleteDataAccessorCommand,
  DeleteDataSourceCommand,
  DeleteGroupCommand,
  DeleteIndexCommand,
  DeletePluginCommand,
  DeleteRetrieverCommand,
  DeleteUserCommand,
  DeleteWebExperienceCommand,
  DisassociatePermissionCommand,
  DocumentAttributeBoostingLevel,
  DocumentContentOperator,
  DocumentEnrichmentConditionOperator,
  DocumentStatus,
  ErrorCode,
  ExternalResourceException,
  GetApplicationCommand,
  GetChatControlsConfigurationCommand,
  GetChatResponseConfigurationCommand,
  GetDataAccessorCommand,
  GetDataSourceCommand,
  GetDocumentContentCommand,
  GetGroupCommand,
  GetIndexCommand,
  GetMediaCommand,
  GetPluginCommand,
  GetPolicyCommand,
  GetRetrieverCommand,
  GetUserCommand,
  GetWebExperienceCommand,
  GroupStatus,
  HallucinationReductionControl,
  IdentityType,
  ImageExtractionStatus,
  IndexStatus,
  IndexType,
  InternalServerException,
  LicenseNotFoundException,
  ListApplicationsCommand,
  ListAttachmentsCommand,
  ListChatResponseConfigurationsCommand,
  ListConversationsCommand,
  ListDataAccessorsCommand,
  ListDataSourceSyncJobsCommand,
  ListDataSourcesCommand,
  ListDocumentsCommand,
  ListGroupsCommand,
  ListIndicesCommand,
  ListMessagesCommand,
  ListPluginActionsCommand,
  ListPluginTypeActionsCommand,
  ListPluginTypeMetadataCommand,
  ListPluginsCommand,
  ListRetrieversCommand,
  ListSubscriptionsCommand,
  ListTagsForResourceCommand,
  ListWebExperiencesCommand,
  MediaTooLargeException,
  MemberRelation,
  MembershipType,
  MessageType,
  MessageUsefulness,
  MessageUsefulnessReason,
  NumberAttributeBoostingType,
  OrchestrationControl,
  OutputFormat,
  PermissionConditionOperator,
  PersonalizationControlMode,
  PluginBuildStatus,
  PluginState,
  PluginType,
  PluginTypeCategory,
  PutFeedbackCommand,
  PutGroupCommand,
  QAppsControlMode,
  QBusiness,
  QBusinessClient,
  QBusinessServiceException,
  ReadAccessType,
  ResourceNotFoundException,
  ResponseConfigurationType,
  ResponseScope,
  RetrieverStatus,
  RetrieverType,
  RuleType,
  ScoreConfidence,
  SearchRelevantContentCommand,
  ServiceQuotaExceededException,
  StartDataSourceSyncJobCommand,
  Status,
  StopDataSourceSyncJobCommand,
  StringAttributeValueBoostingLevel,
  SubscriptionType,
  SystemMessageType,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateChatControlsConfigurationCommand,
  UpdateChatResponseConfigurationCommand,
  UpdateDataAccessorCommand,
  UpdateDataSourceCommand,
  UpdateIndexCommand,
  UpdatePluginCommand,
  UpdateRetrieverCommand,
  UpdateSubscriptionCommand,
  UpdateUserCommand,
  UpdateWebExperienceCommand,
  ValidationException,
  ValidationExceptionReason,
  VideoExtractionStatus,
  VideoExtractionType,
  WebExperienceSamplePromptsControlMode,
  WebExperienceStatus,
  paginateGetChatControlsConfiguration,
  paginateListApplications,
  paginateListAttachments,
  paginateListChatResponseConfigurations,
  paginateListConversations,
  paginateListDataAccessors,
  paginateListDataSourceSyncJobs,
  paginateListDataSources,
  paginateListDocuments,
  paginateListGroups,
  paginateListIndices,
  paginateListMessages,
  paginateListPluginActions,
  paginateListPluginTypeActions,
  paginateListPluginTypeMetadata,
  paginateListPlugins,
  paginateListRetrievers,
  paginateListSubscriptions,
  paginateListWebExperiences,
  paginateSearchRelevantContent,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof QBusinessClient === "function");
assert(typeof QBusiness === "function");
// commands
assert(typeof AssociatePermissionCommand === "function");
assert(typeof BatchDeleteDocumentCommand === "function");
assert(typeof BatchPutDocumentCommand === "function");
assert(typeof CancelSubscriptionCommand === "function");
assert(typeof ChatCommand === "function");
assert(typeof ChatSyncCommand === "function");
assert(typeof CheckDocumentAccessCommand === "function");
assert(typeof CreateAnonymousWebExperienceUrlCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateChatResponseConfigurationCommand === "function");
assert(typeof CreateDataAccessorCommand === "function");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreatePluginCommand === "function");
assert(typeof CreateRetrieverCommand === "function");
assert(typeof CreateSubscriptionCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateWebExperienceCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteAttachmentCommand === "function");
assert(typeof DeleteChatControlsConfigurationCommand === "function");
assert(typeof DeleteChatResponseConfigurationCommand === "function");
assert(typeof DeleteConversationCommand === "function");
assert(typeof DeleteDataAccessorCommand === "function");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeletePluginCommand === "function");
assert(typeof DeleteRetrieverCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteWebExperienceCommand === "function");
assert(typeof DisassociatePermissionCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetChatControlsConfigurationCommand === "function");
assert(typeof GetChatResponseConfigurationCommand === "function");
assert(typeof GetDataAccessorCommand === "function");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDocumentContentCommand === "function");
assert(typeof GetGroupCommand === "function");
assert(typeof GetIndexCommand === "function");
assert(typeof GetMediaCommand === "function");
assert(typeof GetPluginCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetRetrieverCommand === "function");
assert(typeof GetUserCommand === "function");
assert(typeof GetWebExperienceCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListAttachmentsCommand === "function");
assert(typeof ListChatResponseConfigurationsCommand === "function");
assert(typeof ListConversationsCommand === "function");
assert(typeof ListDataAccessorsCommand === "function");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSourceSyncJobsCommand === "function");
assert(typeof ListDocumentsCommand === "function");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListIndicesCommand === "function");
assert(typeof ListMessagesCommand === "function");
assert(typeof ListPluginActionsCommand === "function");
assert(typeof ListPluginsCommand === "function");
assert(typeof ListPluginTypeActionsCommand === "function");
assert(typeof ListPluginTypeMetadataCommand === "function");
assert(typeof ListRetrieversCommand === "function");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWebExperiencesCommand === "function");
assert(typeof PutFeedbackCommand === "function");
assert(typeof PutGroupCommand === "function");
assert(typeof SearchRelevantContentCommand === "function");
assert(typeof StartDataSourceSyncJobCommand === "function");
assert(typeof StopDataSourceSyncJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateChatControlsConfigurationCommand === "function");
assert(typeof UpdateChatResponseConfigurationCommand === "function");
assert(typeof UpdateDataAccessorCommand === "function");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdatePluginCommand === "function");
assert(typeof UpdateRetrieverCommand === "function");
assert(typeof UpdateSubscriptionCommand === "function");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateWebExperienceCommand === "function");
// enums
assert(typeof ActionPayloadFieldType === "object");
assert(typeof APISchemaType === "object");
assert(typeof ApplicationStatus === "object");
assert(typeof AttachmentsControlMode === "object");
assert(typeof AttachmentStatus === "object");
assert(typeof AttributeType === "object");
assert(typeof AttributeValueOperator === "object");
assert(typeof AudioExtractionStatus === "object");
assert(typeof AudioExtractionType === "object");
assert(typeof AutoSubscriptionStatus === "object");
assert(typeof BrowserExtension === "object");
assert(typeof ChatMode === "object");
assert(typeof ChatResponseConfigurationStatus === "object");
assert(typeof ContentType === "object");
assert(typeof CreatorModeControl === "object");
assert(typeof DataAccessorAuthenticationType === "object");
assert(typeof DataSourceStatus === "object");
assert(typeof DataSourceSyncJobStatus === "object");
assert(typeof DocumentAttributeBoostingLevel === "object");
assert(typeof DocumentContentOperator === "object");
assert(typeof DocumentEnrichmentConditionOperator === "object");
assert(typeof DocumentStatus === "object");
assert(typeof ErrorCode === "object");
assert(typeof GroupStatus === "object");
assert(typeof HallucinationReductionControl === "object");
assert(typeof IdentityType === "object");
assert(typeof ImageExtractionStatus === "object");
assert(typeof IndexStatus === "object");
assert(typeof IndexType === "object");
assert(typeof MemberRelation === "object");
assert(typeof MembershipType === "object");
assert(typeof MessageType === "object");
assert(typeof MessageUsefulness === "object");
assert(typeof MessageUsefulnessReason === "object");
assert(typeof NumberAttributeBoostingType === "object");
assert(typeof OrchestrationControl === "object");
assert(typeof OutputFormat === "object");
assert(typeof PermissionConditionOperator === "object");
assert(typeof PersonalizationControlMode === "object");
assert(typeof PluginBuildStatus === "object");
assert(typeof PluginState === "object");
assert(typeof PluginType === "object");
assert(typeof PluginTypeCategory === "object");
assert(typeof QAppsControlMode === "object");
assert(typeof ReadAccessType === "object");
assert(typeof ResponseConfigurationType === "object");
assert(typeof ResponseScope === "object");
assert(typeof RetrieverStatus === "object");
assert(typeof RetrieverType === "object");
assert(typeof RuleType === "object");
assert(typeof ScoreConfidence === "object");
assert(typeof Status === "object");
assert(typeof StringAttributeValueBoostingLevel === "object");
assert(typeof SubscriptionType === "object");
assert(typeof SystemMessageType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VideoExtractionStatus === "object");
assert(typeof VideoExtractionType === "object");
assert(typeof WebExperienceSamplePromptsControlMode === "object");
assert(typeof WebExperienceStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof QBusinessServiceException);
assert(ConflictException.prototype instanceof QBusinessServiceException);
assert(ExternalResourceException.prototype instanceof QBusinessServiceException);
assert(InternalServerException.prototype instanceof QBusinessServiceException);
assert(LicenseNotFoundException.prototype instanceof QBusinessServiceException);
assert(MediaTooLargeException.prototype instanceof QBusinessServiceException);
assert(ResourceNotFoundException.prototype instanceof QBusinessServiceException);
assert(ServiceQuotaExceededException.prototype instanceof QBusinessServiceException);
assert(ThrottlingException.prototype instanceof QBusinessServiceException);
assert(ValidationException.prototype instanceof QBusinessServiceException);
assert(QBusinessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetChatControlsConfiguration === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListAttachments === "function");
assert(typeof paginateListChatResponseConfigurations === "function");
assert(typeof paginateListConversations === "function");
assert(typeof paginateListDataAccessors === "function");
assert(typeof paginateListDataSourceSyncJobs === "function");
assert(typeof paginateListDataSources === "function");
assert(typeof paginateListDocuments === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListIndices === "function");
assert(typeof paginateListMessages === "function");
assert(typeof paginateListPluginActions === "function");
assert(typeof paginateListPluginTypeActions === "function");
assert(typeof paginateListPluginTypeMetadata === "function");
assert(typeof paginateListPlugins === "function");
assert(typeof paginateListRetrievers === "function");
assert(typeof paginateListSubscriptions === "function");
assert(typeof paginateListWebExperiences === "function");
assert(typeof paginateSearchRelevantContent === "function");
console.log(`QBusiness index test passed.`);
