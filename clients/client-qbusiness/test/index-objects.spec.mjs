import {
  APISchema$,
  APISchemaType,
  AccessConfiguration$,
  AccessControl$,
  AccessDeniedException,
  AccessDeniedException$,
  ActionConfiguration$,
  ActionExecution$,
  ActionExecutionEvent$,
  ActionExecutionPayloadField$,
  ActionFilterConfiguration$,
  ActionPayloadFieldType,
  ActionReview$,
  ActionReviewEvent$,
  ActionReviewPayloadField$,
  ActionReviewPayloadFieldAllowedValue$,
  ActionSummary$,
  Application$,
  ApplicationStatus,
  AppliedAttachmentsConfiguration$,
  AppliedCreatorModeConfiguration$,
  AppliedOrchestrationConfiguration$,
  AssociatePermission$,
  AssociatePermissionCommand,
  AssociatePermissionRequest$,
  AssociatePermissionResponse$,
  AssociatedGroup$,
  AssociatedUser$,
  Attachment$,
  AttachmentInput$,
  AttachmentInputEvent$,
  AttachmentOutput$,
  AttachmentStatus,
  AttachmentsConfiguration$,
  AttachmentsControlMode,
  AttributeFilter$,
  AttributeType,
  AttributeValueOperator,
  AudioExtractionConfiguration$,
  AudioExtractionStatus,
  AudioExtractionType,
  AudioSourceDetails$,
  AuthChallengeRequest$,
  AuthChallengeRequestEvent$,
  AuthChallengeResponse$,
  AuthChallengeResponseEvent$,
  AutoSubscriptionConfiguration$,
  AutoSubscriptionStatus,
  BasicAuthConfiguration$,
  BatchDeleteDocument$,
  BatchDeleteDocumentCommand,
  BatchDeleteDocumentRequest$,
  BatchDeleteDocumentResponse$,
  BatchPutDocument$,
  BatchPutDocumentCommand,
  BatchPutDocumentRequest$,
  BatchPutDocumentResponse$,
  BlockedPhrasesConfiguration$,
  BlockedPhrasesConfigurationUpdate$,
  BrowserExtension,
  BrowserExtensionConfiguration$,
  CancelSubscription$,
  CancelSubscriptionCommand,
  CancelSubscriptionRequest$,
  CancelSubscriptionResponse$,
  Chat$,
  ChatCommand,
  ChatInput$,
  ChatInputStream$,
  ChatMode,
  ChatModeConfiguration$,
  ChatOutput$,
  ChatOutputStream$,
  ChatResponseConfiguration$,
  ChatResponseConfigurationDetail$,
  ChatResponseConfigurationStatus,
  ChatSync$,
  ChatSyncCommand,
  ChatSyncInput$,
  ChatSyncOutput$,
  CheckDocumentAccess$,
  CheckDocumentAccessCommand,
  CheckDocumentAccessRequest$,
  CheckDocumentAccessResponse$,
  ConfigurationEvent$,
  ConflictException,
  ConflictException$,
  ContentBlockerRule$,
  ContentRetrievalRule$,
  ContentSource$,
  ContentType,
  Conversation$,
  ConversationSource$,
  CopyFromSource$,
  CreateAnonymousWebExperienceUrl$,
  CreateAnonymousWebExperienceUrlCommand,
  CreateAnonymousWebExperienceUrlRequest$,
  CreateAnonymousWebExperienceUrlResponse$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateChatResponseConfiguration$,
  CreateChatResponseConfigurationCommand,
  CreateChatResponseConfigurationRequest$,
  CreateChatResponseConfigurationResponse$,
  CreateDataAccessor$,
  CreateDataAccessorCommand,
  CreateDataAccessorRequest$,
  CreateDataAccessorResponse$,
  CreateDataSource$,
  CreateDataSourceCommand,
  CreateDataSourceRequest$,
  CreateDataSourceResponse$,
  CreateIndex$,
  CreateIndexCommand,
  CreateIndexRequest$,
  CreateIndexResponse$,
  CreatePlugin$,
  CreatePluginCommand,
  CreatePluginRequest$,
  CreatePluginResponse$,
  CreateRetriever$,
  CreateRetrieverCommand,
  CreateRetrieverRequest$,
  CreateRetrieverResponse$,
  CreateSubscription$,
  CreateSubscriptionCommand,
  CreateSubscriptionRequest$,
  CreateSubscriptionResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  CreateWebExperience$,
  CreateWebExperienceCommand,
  CreateWebExperienceRequest$,
  CreateWebExperienceResponse$,
  CreatorModeConfiguration$,
  CreatorModeControl,
  CustomPluginConfiguration$,
  CustomizationConfiguration$,
  DataAccessor$,
  DataAccessorAuthenticationConfiguration$,
  DataAccessorAuthenticationDetail$,
  DataAccessorAuthenticationType,
  DataAccessorIdcTrustedTokenIssuerConfiguration$,
  DataSource$,
  DataSourceStatus,
  DataSourceSyncJob$,
  DataSourceSyncJobMetrics$,
  DataSourceSyncJobStatus,
  DataSourceVpcConfiguration$,
  DateAttributeBoostingConfiguration$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteAttachment$,
  DeleteAttachmentCommand,
  DeleteAttachmentRequest$,
  DeleteAttachmentResponse$,
  DeleteChatControlsConfiguration$,
  DeleteChatControlsConfigurationCommand,
  DeleteChatControlsConfigurationRequest$,
  DeleteChatControlsConfigurationResponse$,
  DeleteChatResponseConfiguration$,
  DeleteChatResponseConfigurationCommand,
  DeleteChatResponseConfigurationRequest$,
  DeleteChatResponseConfigurationResponse$,
  DeleteConversation$,
  DeleteConversationCommand,
  DeleteConversationRequest$,
  DeleteConversationResponse$,
  DeleteDataAccessor$,
  DeleteDataAccessorCommand,
  DeleteDataAccessorRequest$,
  DeleteDataAccessorResponse$,
  DeleteDataSource$,
  DeleteDataSourceCommand,
  DeleteDataSourceRequest$,
  DeleteDataSourceResponse$,
  DeleteDocument$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupRequest$,
  DeleteGroupResponse$,
  DeleteIndex$,
  DeleteIndexCommand,
  DeleteIndexRequest$,
  DeleteIndexResponse$,
  DeletePlugin$,
  DeletePluginCommand,
  DeletePluginRequest$,
  DeletePluginResponse$,
  DeleteRetriever$,
  DeleteRetrieverCommand,
  DeleteRetrieverRequest$,
  DeleteRetrieverResponse$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResponse$,
  DeleteWebExperience$,
  DeleteWebExperienceCommand,
  DeleteWebExperienceRequest$,
  DeleteWebExperienceResponse$,
  DisassociatePermission$,
  DisassociatePermissionCommand,
  DisassociatePermissionRequest$,
  DisassociatePermissionResponse$,
  Document$,
  DocumentAcl$,
  DocumentAclCondition$,
  DocumentAclGroup$,
  DocumentAclMembership$,
  DocumentAclUser$,
  DocumentAttribute$,
  DocumentAttributeBoostingConfiguration$,
  DocumentAttributeBoostingLevel,
  DocumentAttributeCondition$,
  DocumentAttributeConfiguration$,
  DocumentAttributeTarget$,
  DocumentAttributeValue$,
  DocumentContent$,
  DocumentContentOperator,
  DocumentDetails$,
  DocumentEnrichmentConditionOperator,
  DocumentEnrichmentConfiguration$,
  DocumentStatus,
  EligibleDataSource$,
  EncryptionConfiguration$,
  EndOfInputEvent$,
  ErrorCode,
  ErrorDetail$,
  ExternalResourceException,
  ExternalResourceException$,
  FailedAttachmentEvent$,
  FailedDocument$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetChatControlsConfiguration$,
  GetChatControlsConfigurationCommand,
  GetChatControlsConfigurationRequest$,
  GetChatControlsConfigurationResponse$,
  GetChatResponseConfiguration$,
  GetChatResponseConfigurationCommand,
  GetChatResponseConfigurationRequest$,
  GetChatResponseConfigurationResponse$,
  GetDataAccessor$,
  GetDataAccessorCommand,
  GetDataAccessorRequest$,
  GetDataAccessorResponse$,
  GetDataSource$,
  GetDataSourceCommand,
  GetDataSourceRequest$,
  GetDataSourceResponse$,
  GetDocumentContent$,
  GetDocumentContentCommand,
  GetDocumentContentRequest$,
  GetDocumentContentResponse$,
  GetGroup$,
  GetGroupCommand,
  GetGroupRequest$,
  GetGroupResponse$,
  GetIndex$,
  GetIndexCommand,
  GetIndexRequest$,
  GetIndexResponse$,
  GetMedia$,
  GetMediaCommand,
  GetMediaRequest$,
  GetMediaResponse$,
  GetPlugin$,
  GetPluginCommand,
  GetPluginRequest$,
  GetPluginResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetRetriever$,
  GetRetrieverCommand,
  GetRetrieverRequest$,
  GetRetrieverResponse$,
  GetUser$,
  GetUserCommand,
  GetUserRequest$,
  GetUserResponse$,
  GetWebExperience$,
  GetWebExperienceCommand,
  GetWebExperienceRequest$,
  GetWebExperienceResponse$,
  GroupMembers$,
  GroupStatus,
  GroupStatusDetail$,
  GroupSummary$,
  HallucinationReductionConfiguration$,
  HallucinationReductionControl,
  HookConfiguration$,
  IdcAuthConfiguration$,
  IdentityProviderConfiguration$,
  IdentityType,
  ImageExtractionConfiguration$,
  ImageExtractionStatus,
  ImageSourceDetails$,
  Index$,
  IndexCapacityConfiguration$,
  IndexStatistics$,
  IndexStatus,
  IndexType,
  InlineDocumentEnrichmentConfiguration$,
  InstructionCollection$,
  InternalServerException,
  InternalServerException$,
  KendraIndexConfiguration$,
  LicenseNotFoundException,
  LicenseNotFoundException$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListAttachments$,
  ListAttachmentsCommand,
  ListAttachmentsRequest$,
  ListAttachmentsResponse$,
  ListChatResponseConfigurations$,
  ListChatResponseConfigurationsCommand,
  ListChatResponseConfigurationsRequest$,
  ListChatResponseConfigurationsResponse$,
  ListConversations$,
  ListConversationsCommand,
  ListConversationsRequest$,
  ListConversationsResponse$,
  ListDataAccessors$,
  ListDataAccessorsCommand,
  ListDataAccessorsRequest$,
  ListDataAccessorsResponse$,
  ListDataSourceSyncJobs$,
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsRequest$,
  ListDataSourceSyncJobsResponse$,
  ListDataSources$,
  ListDataSourcesCommand,
  ListDataSourcesRequest$,
  ListDataSourcesResponse$,
  ListDocuments$,
  ListDocumentsCommand,
  ListDocumentsRequest$,
  ListDocumentsResponse$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsRequest$,
  ListGroupsResponse$,
  ListIndices$,
  ListIndicesCommand,
  ListIndicesRequest$,
  ListIndicesResponse$,
  ListMessages$,
  ListMessagesCommand,
  ListMessagesRequest$,
  ListMessagesResponse$,
  ListPluginActions$,
  ListPluginActionsCommand,
  ListPluginActionsRequest$,
  ListPluginActionsResponse$,
  ListPluginTypeActions$,
  ListPluginTypeActionsCommand,
  ListPluginTypeActionsRequest$,
  ListPluginTypeActionsResponse$,
  ListPluginTypeMetadata$,
  ListPluginTypeMetadataCommand,
  ListPluginTypeMetadataRequest$,
  ListPluginTypeMetadataResponse$,
  ListPlugins$,
  ListPluginsCommand,
  ListPluginsRequest$,
  ListPluginsResponse$,
  ListRetrievers$,
  ListRetrieversCommand,
  ListRetrieversRequest$,
  ListRetrieversResponse$,
  ListSubscriptions$,
  ListSubscriptionsCommand,
  ListSubscriptionsRequest$,
  ListSubscriptionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWebExperiences$,
  ListWebExperiencesCommand,
  ListWebExperiencesRequest$,
  ListWebExperiencesResponse$,
  MediaExtractionConfiguration$,
  MediaTooLargeException,
  MediaTooLargeException$,
  MemberGroup$,
  MemberRelation,
  MemberUser$,
  MembershipType,
  Message$,
  MessageType,
  MessageUsefulness,
  MessageUsefulnessFeedback$,
  MessageUsefulnessReason,
  MetadataEvent$,
  NativeIndexConfiguration$,
  NoAuthConfiguration$,
  NumberAttributeBoostingConfiguration$,
  NumberAttributeBoostingType,
  OAuth2ClientCredentialConfiguration$,
  OpenIDConnectProviderConfiguration$,
  OrchestrationConfiguration$,
  OrchestrationControl,
  OutputFormat,
  PermissionCondition$,
  PermissionConditionOperator,
  PersonalizationConfiguration$,
  PersonalizationControlMode,
  Plugin$,
  PluginAuthConfiguration$,
  PluginBuildStatus,
  PluginConfiguration$,
  PluginState,
  PluginType,
  PluginTypeCategory,
  PluginTypeMetadataSummary$,
  Principal$,
  PrincipalGroup$,
  PrincipalUser$,
  PutFeedback$,
  PutFeedbackCommand,
  PutFeedbackRequest$,
  PutGroup$,
  PutGroupCommand,
  PutGroupRequest$,
  PutGroupResponse$,
  QAppsConfiguration$,
  QAppsControlMode,
  QBusiness,
  QBusinessClient,
  QBusinessServiceException,
  QuickSightConfiguration$,
  ReadAccessType,
  RelevantContent$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseConfiguration$,
  ResponseConfigurationType,
  ResponseScope,
  Retriever$,
  RetrieverConfiguration$,
  RetrieverContentSource$,
  RetrieverStatus,
  RetrieverType,
  Rule$,
  RuleConfiguration$,
  RuleType,
  S3$,
  SamlConfiguration$,
  SamlProviderConfiguration$,
  ScoreAttributes$,
  ScoreConfidence,
  SearchRelevantContent$,
  SearchRelevantContentCommand,
  SearchRelevantContentRequest$,
  SearchRelevantContentResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnippetExcerpt$,
  SourceAttribution$,
  SourceDetails$,
  StartDataSourceSyncJob$,
  StartDataSourceSyncJobCommand,
  StartDataSourceSyncJobRequest$,
  StartDataSourceSyncJobResponse$,
  Status,
  StopDataSourceSyncJob$,
  StopDataSourceSyncJobCommand,
  StopDataSourceSyncJobRequest$,
  StopDataSourceSyncJobResponse$,
  StringAttributeBoostingConfiguration$,
  StringAttributeValueBoostingLevel,
  StringListAttributeBoostingConfiguration$,
  Subscription$,
  SubscriptionDetails$,
  SubscriptionPrincipal$,
  SubscriptionType,
  SystemMessageType,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextDocumentStatistics$,
  TextInputEvent$,
  TextOutputEvent$,
  TextSegment$,
  ThrottlingException,
  ThrottlingException$,
  TopicConfiguration$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateChatControlsConfiguration$,
  UpdateChatControlsConfigurationCommand,
  UpdateChatControlsConfigurationRequest$,
  UpdateChatControlsConfigurationResponse$,
  UpdateChatResponseConfiguration$,
  UpdateChatResponseConfigurationCommand,
  UpdateChatResponseConfigurationRequest$,
  UpdateChatResponseConfigurationResponse$,
  UpdateDataAccessor$,
  UpdateDataAccessorCommand,
  UpdateDataAccessorRequest$,
  UpdateDataAccessorResponse$,
  UpdateDataSource$,
  UpdateDataSourceCommand,
  UpdateDataSourceRequest$,
  UpdateDataSourceResponse$,
  UpdateIndex$,
  UpdateIndexCommand,
  UpdateIndexRequest$,
  UpdateIndexResponse$,
  UpdatePlugin$,
  UpdatePluginCommand,
  UpdatePluginRequest$,
  UpdatePluginResponse$,
  UpdateRetriever$,
  UpdateRetrieverCommand,
  UpdateRetrieverRequest$,
  UpdateRetrieverResponse$,
  UpdateSubscription$,
  UpdateSubscriptionCommand,
  UpdateSubscriptionRequest$,
  UpdateSubscriptionResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  UpdateWebExperience$,
  UpdateWebExperienceCommand,
  UpdateWebExperienceRequest$,
  UpdateWebExperienceResponse$,
  UserAlias$,
  UsersAndGroups$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VideoExtractionConfiguration$,
  VideoExtractionStatus,
  VideoExtractionType,
  VideoSourceDetails$,
  WebExperience$,
  WebExperienceAuthConfiguration$,
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
assert(typeof AssociatePermission$ === "object");
assert(typeof BatchDeleteDocumentCommand === "function");
assert(typeof BatchDeleteDocument$ === "object");
assert(typeof BatchPutDocumentCommand === "function");
assert(typeof BatchPutDocument$ === "object");
assert(typeof CancelSubscriptionCommand === "function");
assert(typeof CancelSubscription$ === "object");
assert(typeof ChatCommand === "function");
assert(typeof Chat$ === "object");
assert(typeof ChatSyncCommand === "function");
assert(typeof ChatSync$ === "object");
assert(typeof CheckDocumentAccessCommand === "function");
assert(typeof CheckDocumentAccess$ === "object");
assert(typeof CreateAnonymousWebExperienceUrlCommand === "function");
assert(typeof CreateAnonymousWebExperienceUrl$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateChatResponseConfigurationCommand === "function");
assert(typeof CreateChatResponseConfiguration$ === "object");
assert(typeof CreateDataAccessorCommand === "function");
assert(typeof CreateDataAccessor$ === "object");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateDataSource$ === "object");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateIndex$ === "object");
assert(typeof CreatePluginCommand === "function");
assert(typeof CreatePlugin$ === "object");
assert(typeof CreateRetrieverCommand === "function");
assert(typeof CreateRetriever$ === "object");
assert(typeof CreateSubscriptionCommand === "function");
assert(typeof CreateSubscription$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof CreateWebExperienceCommand === "function");
assert(typeof CreateWebExperience$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteAttachmentCommand === "function");
assert(typeof DeleteAttachment$ === "object");
assert(typeof DeleteChatControlsConfigurationCommand === "function");
assert(typeof DeleteChatControlsConfiguration$ === "object");
assert(typeof DeleteChatResponseConfigurationCommand === "function");
assert(typeof DeleteChatResponseConfiguration$ === "object");
assert(typeof DeleteConversationCommand === "function");
assert(typeof DeleteConversation$ === "object");
assert(typeof DeleteDataAccessorCommand === "function");
assert(typeof DeleteDataAccessor$ === "object");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDataSource$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteIndex$ === "object");
assert(typeof DeletePluginCommand === "function");
assert(typeof DeletePlugin$ === "object");
assert(typeof DeleteRetrieverCommand === "function");
assert(typeof DeleteRetriever$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DeleteWebExperienceCommand === "function");
assert(typeof DeleteWebExperience$ === "object");
assert(typeof DisassociatePermissionCommand === "function");
assert(typeof DisassociatePermission$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetChatControlsConfigurationCommand === "function");
assert(typeof GetChatControlsConfiguration$ === "object");
assert(typeof GetChatResponseConfigurationCommand === "function");
assert(typeof GetChatResponseConfiguration$ === "object");
assert(typeof GetDataAccessorCommand === "function");
assert(typeof GetDataAccessor$ === "object");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDataSource$ === "object");
assert(typeof GetDocumentContentCommand === "function");
assert(typeof GetDocumentContent$ === "object");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroup$ === "object");
assert(typeof GetIndexCommand === "function");
assert(typeof GetIndex$ === "object");
assert(typeof GetMediaCommand === "function");
assert(typeof GetMedia$ === "object");
assert(typeof GetPluginCommand === "function");
assert(typeof GetPlugin$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetRetrieverCommand === "function");
assert(typeof GetRetriever$ === "object");
assert(typeof GetUserCommand === "function");
assert(typeof GetUser$ === "object");
assert(typeof GetWebExperienceCommand === "function");
assert(typeof GetWebExperience$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListAttachmentsCommand === "function");
assert(typeof ListAttachments$ === "object");
assert(typeof ListChatResponseConfigurationsCommand === "function");
assert(typeof ListChatResponseConfigurations$ === "object");
assert(typeof ListConversationsCommand === "function");
assert(typeof ListConversations$ === "object");
assert(typeof ListDataAccessorsCommand === "function");
assert(typeof ListDataAccessors$ === "object");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSources$ === "object");
assert(typeof ListDataSourceSyncJobsCommand === "function");
assert(typeof ListDataSourceSyncJobs$ === "object");
assert(typeof ListDocumentsCommand === "function");
assert(typeof ListDocuments$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListIndicesCommand === "function");
assert(typeof ListIndices$ === "object");
assert(typeof ListMessagesCommand === "function");
assert(typeof ListMessages$ === "object");
assert(typeof ListPluginActionsCommand === "function");
assert(typeof ListPluginActions$ === "object");
assert(typeof ListPluginsCommand === "function");
assert(typeof ListPlugins$ === "object");
assert(typeof ListPluginTypeActionsCommand === "function");
assert(typeof ListPluginTypeActions$ === "object");
assert(typeof ListPluginTypeMetadataCommand === "function");
assert(typeof ListPluginTypeMetadata$ === "object");
assert(typeof ListRetrieversCommand === "function");
assert(typeof ListRetrievers$ === "object");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWebExperiencesCommand === "function");
assert(typeof ListWebExperiences$ === "object");
assert(typeof PutFeedbackCommand === "function");
assert(typeof PutFeedback$ === "object");
assert(typeof PutGroupCommand === "function");
assert(typeof PutGroup$ === "object");
assert(typeof SearchRelevantContentCommand === "function");
assert(typeof SearchRelevantContent$ === "object");
assert(typeof StartDataSourceSyncJobCommand === "function");
assert(typeof StartDataSourceSyncJob$ === "object");
assert(typeof StopDataSourceSyncJobCommand === "function");
assert(typeof StopDataSourceSyncJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateChatControlsConfigurationCommand === "function");
assert(typeof UpdateChatControlsConfiguration$ === "object");
assert(typeof UpdateChatResponseConfigurationCommand === "function");
assert(typeof UpdateChatResponseConfiguration$ === "object");
assert(typeof UpdateDataAccessorCommand === "function");
assert(typeof UpdateDataAccessor$ === "object");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDataSource$ === "object");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdateIndex$ === "object");
assert(typeof UpdatePluginCommand === "function");
assert(typeof UpdatePlugin$ === "object");
assert(typeof UpdateRetrieverCommand === "function");
assert(typeof UpdateRetriever$ === "object");
assert(typeof UpdateSubscriptionCommand === "function");
assert(typeof UpdateSubscription$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
assert(typeof UpdateWebExperienceCommand === "function");
assert(typeof UpdateWebExperience$ === "object");
// structural schemas
assert(typeof AccessConfiguration$ === "object");
assert(typeof AccessControl$ === "object");
assert(typeof ActionConfiguration$ === "object");
assert(typeof ActionExecution$ === "object");
assert(typeof ActionExecutionEvent$ === "object");
assert(typeof ActionExecutionPayloadField$ === "object");
assert(typeof ActionFilterConfiguration$ === "object");
assert(typeof ActionReview$ === "object");
assert(typeof ActionReviewEvent$ === "object");
assert(typeof ActionReviewPayloadField$ === "object");
assert(typeof ActionReviewPayloadFieldAllowedValue$ === "object");
assert(typeof ActionSummary$ === "object");
assert(typeof APISchema$ === "object");
assert(typeof Application$ === "object");
assert(typeof AppliedAttachmentsConfiguration$ === "object");
assert(typeof AppliedCreatorModeConfiguration$ === "object");
assert(typeof AppliedOrchestrationConfiguration$ === "object");
assert(typeof AssociatedGroup$ === "object");
assert(typeof AssociatedUser$ === "object");
assert(typeof AssociatePermissionRequest$ === "object");
assert(typeof AssociatePermissionResponse$ === "object");
assert(typeof Attachment$ === "object");
assert(typeof AttachmentInput$ === "object");
assert(typeof AttachmentInputEvent$ === "object");
assert(typeof AttachmentOutput$ === "object");
assert(typeof AttachmentsConfiguration$ === "object");
assert(typeof AttributeFilter$ === "object");
assert(typeof AudioExtractionConfiguration$ === "object");
assert(typeof AudioSourceDetails$ === "object");
assert(typeof AuthChallengeRequest$ === "object");
assert(typeof AuthChallengeRequestEvent$ === "object");
assert(typeof AuthChallengeResponse$ === "object");
assert(typeof AuthChallengeResponseEvent$ === "object");
assert(typeof AutoSubscriptionConfiguration$ === "object");
assert(typeof BasicAuthConfiguration$ === "object");
assert(typeof BatchDeleteDocumentRequest$ === "object");
assert(typeof BatchDeleteDocumentResponse$ === "object");
assert(typeof BatchPutDocumentRequest$ === "object");
assert(typeof BatchPutDocumentResponse$ === "object");
assert(typeof BlockedPhrasesConfiguration$ === "object");
assert(typeof BlockedPhrasesConfigurationUpdate$ === "object");
assert(typeof BrowserExtensionConfiguration$ === "object");
assert(typeof CancelSubscriptionRequest$ === "object");
assert(typeof CancelSubscriptionResponse$ === "object");
assert(typeof ChatInput$ === "object");
assert(typeof ChatInputStream$ === "object");
assert(typeof ChatModeConfiguration$ === "object");
assert(typeof ChatOutput$ === "object");
assert(typeof ChatOutputStream$ === "object");
assert(typeof ChatResponseConfiguration$ === "object");
assert(typeof ChatResponseConfigurationDetail$ === "object");
assert(typeof ChatSyncInput$ === "object");
assert(typeof ChatSyncOutput$ === "object");
assert(typeof CheckDocumentAccessRequest$ === "object");
assert(typeof CheckDocumentAccessResponse$ === "object");
assert(typeof ConfigurationEvent$ === "object");
assert(typeof ContentBlockerRule$ === "object");
assert(typeof ContentRetrievalRule$ === "object");
assert(typeof ContentSource$ === "object");
assert(typeof Conversation$ === "object");
assert(typeof ConversationSource$ === "object");
assert(typeof CopyFromSource$ === "object");
assert(typeof CreateAnonymousWebExperienceUrlRequest$ === "object");
assert(typeof CreateAnonymousWebExperienceUrlResponse$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateChatResponseConfigurationRequest$ === "object");
assert(typeof CreateChatResponseConfigurationResponse$ === "object");
assert(typeof CreateDataAccessorRequest$ === "object");
assert(typeof CreateDataAccessorResponse$ === "object");
assert(typeof CreateDataSourceRequest$ === "object");
assert(typeof CreateDataSourceResponse$ === "object");
assert(typeof CreateIndexRequest$ === "object");
assert(typeof CreateIndexResponse$ === "object");
assert(typeof CreatePluginRequest$ === "object");
assert(typeof CreatePluginResponse$ === "object");
assert(typeof CreateRetrieverRequest$ === "object");
assert(typeof CreateRetrieverResponse$ === "object");
assert(typeof CreateSubscriptionRequest$ === "object");
assert(typeof CreateSubscriptionResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof CreateWebExperienceRequest$ === "object");
assert(typeof CreateWebExperienceResponse$ === "object");
assert(typeof CreatorModeConfiguration$ === "object");
assert(typeof CustomizationConfiguration$ === "object");
assert(typeof CustomPluginConfiguration$ === "object");
assert(typeof DataAccessor$ === "object");
assert(typeof DataAccessorAuthenticationConfiguration$ === "object");
assert(typeof DataAccessorAuthenticationDetail$ === "object");
assert(typeof DataAccessorIdcTrustedTokenIssuerConfiguration$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DataSourceSyncJob$ === "object");
assert(typeof DataSourceSyncJobMetrics$ === "object");
assert(typeof DataSourceVpcConfiguration$ === "object");
assert(typeof DateAttributeBoostingConfiguration$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteAttachmentRequest$ === "object");
assert(typeof DeleteAttachmentResponse$ === "object");
assert(typeof DeleteChatControlsConfigurationRequest$ === "object");
assert(typeof DeleteChatControlsConfigurationResponse$ === "object");
assert(typeof DeleteChatResponseConfigurationRequest$ === "object");
assert(typeof DeleteChatResponseConfigurationResponse$ === "object");
assert(typeof DeleteConversationRequest$ === "object");
assert(typeof DeleteConversationResponse$ === "object");
assert(typeof DeleteDataAccessorRequest$ === "object");
assert(typeof DeleteDataAccessorResponse$ === "object");
assert(typeof DeleteDataSourceRequest$ === "object");
assert(typeof DeleteDataSourceResponse$ === "object");
assert(typeof DeleteDocument$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteGroupResponse$ === "object");
assert(typeof DeleteIndexRequest$ === "object");
assert(typeof DeleteIndexResponse$ === "object");
assert(typeof DeletePluginRequest$ === "object");
assert(typeof DeletePluginResponse$ === "object");
assert(typeof DeleteRetrieverRequest$ === "object");
assert(typeof DeleteRetrieverResponse$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResponse$ === "object");
assert(typeof DeleteWebExperienceRequest$ === "object");
assert(typeof DeleteWebExperienceResponse$ === "object");
assert(typeof DisassociatePermissionRequest$ === "object");
assert(typeof DisassociatePermissionResponse$ === "object");
assert(typeof Document$ === "object");
assert(typeof DocumentAcl$ === "object");
assert(typeof DocumentAclCondition$ === "object");
assert(typeof DocumentAclGroup$ === "object");
assert(typeof DocumentAclMembership$ === "object");
assert(typeof DocumentAclUser$ === "object");
assert(typeof DocumentAttribute$ === "object");
assert(typeof DocumentAttributeBoostingConfiguration$ === "object");
assert(typeof DocumentAttributeCondition$ === "object");
assert(typeof DocumentAttributeConfiguration$ === "object");
assert(typeof DocumentAttributeTarget$ === "object");
assert(typeof DocumentAttributeValue$ === "object");
assert(typeof DocumentContent$ === "object");
assert(typeof DocumentDetails$ === "object");
assert(typeof DocumentEnrichmentConfiguration$ === "object");
assert(typeof EligibleDataSource$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EndOfInputEvent$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof FailedAttachmentEvent$ === "object");
assert(typeof FailedDocument$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetChatControlsConfigurationRequest$ === "object");
assert(typeof GetChatControlsConfigurationResponse$ === "object");
assert(typeof GetChatResponseConfigurationRequest$ === "object");
assert(typeof GetChatResponseConfigurationResponse$ === "object");
assert(typeof GetDataAccessorRequest$ === "object");
assert(typeof GetDataAccessorResponse$ === "object");
assert(typeof GetDataSourceRequest$ === "object");
assert(typeof GetDataSourceResponse$ === "object");
assert(typeof GetDocumentContentRequest$ === "object");
assert(typeof GetDocumentContentResponse$ === "object");
assert(typeof GetGroupRequest$ === "object");
assert(typeof GetGroupResponse$ === "object");
assert(typeof GetIndexRequest$ === "object");
assert(typeof GetIndexResponse$ === "object");
assert(typeof GetMediaRequest$ === "object");
assert(typeof GetMediaResponse$ === "object");
assert(typeof GetPluginRequest$ === "object");
assert(typeof GetPluginResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetRetrieverRequest$ === "object");
assert(typeof GetRetrieverResponse$ === "object");
assert(typeof GetUserRequest$ === "object");
assert(typeof GetUserResponse$ === "object");
assert(typeof GetWebExperienceRequest$ === "object");
assert(typeof GetWebExperienceResponse$ === "object");
assert(typeof GroupMembers$ === "object");
assert(typeof GroupStatusDetail$ === "object");
assert(typeof GroupSummary$ === "object");
assert(typeof HallucinationReductionConfiguration$ === "object");
assert(typeof HookConfiguration$ === "object");
assert(typeof IdcAuthConfiguration$ === "object");
assert(typeof IdentityProviderConfiguration$ === "object");
assert(typeof ImageExtractionConfiguration$ === "object");
assert(typeof ImageSourceDetails$ === "object");
assert(typeof Index$ === "object");
assert(typeof IndexCapacityConfiguration$ === "object");
assert(typeof IndexStatistics$ === "object");
assert(typeof InlineDocumentEnrichmentConfiguration$ === "object");
assert(typeof InstructionCollection$ === "object");
assert(typeof KendraIndexConfiguration$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListAttachmentsRequest$ === "object");
assert(typeof ListAttachmentsResponse$ === "object");
assert(typeof ListChatResponseConfigurationsRequest$ === "object");
assert(typeof ListChatResponseConfigurationsResponse$ === "object");
assert(typeof ListConversationsRequest$ === "object");
assert(typeof ListConversationsResponse$ === "object");
assert(typeof ListDataAccessorsRequest$ === "object");
assert(typeof ListDataAccessorsResponse$ === "object");
assert(typeof ListDataSourcesRequest$ === "object");
assert(typeof ListDataSourcesResponse$ === "object");
assert(typeof ListDataSourceSyncJobsRequest$ === "object");
assert(typeof ListDataSourceSyncJobsResponse$ === "object");
assert(typeof ListDocumentsRequest$ === "object");
assert(typeof ListDocumentsResponse$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResponse$ === "object");
assert(typeof ListIndicesRequest$ === "object");
assert(typeof ListIndicesResponse$ === "object");
assert(typeof ListMessagesRequest$ === "object");
assert(typeof ListMessagesResponse$ === "object");
assert(typeof ListPluginActionsRequest$ === "object");
assert(typeof ListPluginActionsResponse$ === "object");
assert(typeof ListPluginsRequest$ === "object");
assert(typeof ListPluginsResponse$ === "object");
assert(typeof ListPluginTypeActionsRequest$ === "object");
assert(typeof ListPluginTypeActionsResponse$ === "object");
assert(typeof ListPluginTypeMetadataRequest$ === "object");
assert(typeof ListPluginTypeMetadataResponse$ === "object");
assert(typeof ListRetrieversRequest$ === "object");
assert(typeof ListRetrieversResponse$ === "object");
assert(typeof ListSubscriptionsRequest$ === "object");
assert(typeof ListSubscriptionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWebExperiencesRequest$ === "object");
assert(typeof ListWebExperiencesResponse$ === "object");
assert(typeof MediaExtractionConfiguration$ === "object");
assert(typeof MemberGroup$ === "object");
assert(typeof MemberUser$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageUsefulnessFeedback$ === "object");
assert(typeof MetadataEvent$ === "object");
assert(typeof NativeIndexConfiguration$ === "object");
assert(typeof NoAuthConfiguration$ === "object");
assert(typeof NumberAttributeBoostingConfiguration$ === "object");
assert(typeof OAuth2ClientCredentialConfiguration$ === "object");
assert(typeof OpenIDConnectProviderConfiguration$ === "object");
assert(typeof OrchestrationConfiguration$ === "object");
assert(typeof PermissionCondition$ === "object");
assert(typeof PersonalizationConfiguration$ === "object");
assert(typeof Plugin$ === "object");
assert(typeof PluginAuthConfiguration$ === "object");
assert(typeof PluginConfiguration$ === "object");
assert(typeof PluginTypeMetadataSummary$ === "object");
assert(typeof Principal$ === "object");
assert(typeof PrincipalGroup$ === "object");
assert(typeof PrincipalUser$ === "object");
assert(typeof PutFeedbackRequest$ === "object");
assert(typeof PutGroupRequest$ === "object");
assert(typeof PutGroupResponse$ === "object");
assert(typeof QAppsConfiguration$ === "object");
assert(typeof QuickSightConfiguration$ === "object");
assert(typeof RelevantContent$ === "object");
assert(typeof ResponseConfiguration$ === "object");
assert(typeof Retriever$ === "object");
assert(typeof RetrieverConfiguration$ === "object");
assert(typeof RetrieverContentSource$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleConfiguration$ === "object");
assert(typeof S3$ === "object");
assert(typeof SamlConfiguration$ === "object");
assert(typeof SamlProviderConfiguration$ === "object");
assert(typeof ScoreAttributes$ === "object");
assert(typeof SearchRelevantContentRequest$ === "object");
assert(typeof SearchRelevantContentResponse$ === "object");
assert(typeof SnippetExcerpt$ === "object");
assert(typeof SourceAttribution$ === "object");
assert(typeof SourceDetails$ === "object");
assert(typeof StartDataSourceSyncJobRequest$ === "object");
assert(typeof StartDataSourceSyncJobResponse$ === "object");
assert(typeof StopDataSourceSyncJobRequest$ === "object");
assert(typeof StopDataSourceSyncJobResponse$ === "object");
assert(typeof StringAttributeBoostingConfiguration$ === "object");
assert(typeof StringListAttributeBoostingConfiguration$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof SubscriptionDetails$ === "object");
assert(typeof SubscriptionPrincipal$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TextDocumentStatistics$ === "object");
assert(typeof TextInputEvent$ === "object");
assert(typeof TextOutputEvent$ === "object");
assert(typeof TextSegment$ === "object");
assert(typeof TopicConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateChatControlsConfigurationRequest$ === "object");
assert(typeof UpdateChatControlsConfigurationResponse$ === "object");
assert(typeof UpdateChatResponseConfigurationRequest$ === "object");
assert(typeof UpdateChatResponseConfigurationResponse$ === "object");
assert(typeof UpdateDataAccessorRequest$ === "object");
assert(typeof UpdateDataAccessorResponse$ === "object");
assert(typeof UpdateDataSourceRequest$ === "object");
assert(typeof UpdateDataSourceResponse$ === "object");
assert(typeof UpdateIndexRequest$ === "object");
assert(typeof UpdateIndexResponse$ === "object");
assert(typeof UpdatePluginRequest$ === "object");
assert(typeof UpdatePluginResponse$ === "object");
assert(typeof UpdateRetrieverRequest$ === "object");
assert(typeof UpdateRetrieverResponse$ === "object");
assert(typeof UpdateSubscriptionRequest$ === "object");
assert(typeof UpdateSubscriptionResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof UpdateWebExperienceRequest$ === "object");
assert(typeof UpdateWebExperienceResponse$ === "object");
assert(typeof UserAlias$ === "object");
assert(typeof UsersAndGroups$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VideoExtractionConfiguration$ === "object");
assert(typeof VideoSourceDetails$ === "object");
assert(typeof WebExperience$ === "object");
assert(typeof WebExperienceAuthConfiguration$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof QBusinessServiceException);
assert(typeof ConflictException$ === "object");
assert(ExternalResourceException.prototype instanceof QBusinessServiceException);
assert(typeof ExternalResourceException$ === "object");
assert(InternalServerException.prototype instanceof QBusinessServiceException);
assert(typeof InternalServerException$ === "object");
assert(LicenseNotFoundException.prototype instanceof QBusinessServiceException);
assert(typeof LicenseNotFoundException$ === "object");
assert(MediaTooLargeException.prototype instanceof QBusinessServiceException);
assert(typeof MediaTooLargeException$ === "object");
assert(ResourceNotFoundException.prototype instanceof QBusinessServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof QBusinessServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof QBusinessServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof QBusinessServiceException);
assert(typeof ValidationException$ === "object");
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
