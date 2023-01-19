// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateApprovedOriginCommandInput,
  AssociateApprovedOriginCommandOutput,
} from "../commands/AssociateApprovedOriginCommand";
import { AssociateBotCommandInput, AssociateBotCommandOutput } from "../commands/AssociateBotCommand";
import {
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
} from "../commands/AssociateDefaultVocabularyCommand";
import {
  AssociateInstanceStorageConfigCommandInput,
  AssociateInstanceStorageConfigCommandOutput,
} from "../commands/AssociateInstanceStorageConfigCommand";
import {
  AssociateLambdaFunctionCommandInput,
  AssociateLambdaFunctionCommandOutput,
} from "../commands/AssociateLambdaFunctionCommand";
import { AssociateLexBotCommandInput, AssociateLexBotCommandOutput } from "../commands/AssociateLexBotCommand";
import {
  AssociatePhoneNumberContactFlowCommandInput,
  AssociatePhoneNumberContactFlowCommandOutput,
} from "../commands/AssociatePhoneNumberContactFlowCommand";
import {
  AssociateQueueQuickConnectsCommandInput,
  AssociateQueueQuickConnectsCommandOutput,
} from "../commands/AssociateQueueQuickConnectsCommand";
import {
  AssociateRoutingProfileQueuesCommandInput,
  AssociateRoutingProfileQueuesCommandOutput,
} from "../commands/AssociateRoutingProfileQueuesCommand";
import {
  AssociateSecurityKeyCommandInput,
  AssociateSecurityKeyCommandOutput,
} from "../commands/AssociateSecurityKeyCommand";
import { ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput } from "../commands/ClaimPhoneNumberCommand";
import { CreateAgentStatusCommandInput, CreateAgentStatusCommandOutput } from "../commands/CreateAgentStatusCommand";
import { CreateContactFlowCommandInput, CreateContactFlowCommandOutput } from "../commands/CreateContactFlowCommand";
import {
  CreateContactFlowModuleCommandInput,
  CreateContactFlowModuleCommandOutput,
} from "../commands/CreateContactFlowModuleCommand";
import {
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
} from "../commands/CreateHoursOfOperationCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "../commands/CreateInstanceCommand";
import {
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
} from "../commands/CreateIntegrationAssociationCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "../commands/CreateQueueCommand";
import { CreateQuickConnectCommandInput, CreateQuickConnectCommandOutput } from "../commands/CreateQuickConnectCommand";
import {
  CreateRoutingProfileCommandInput,
  CreateRoutingProfileCommandOutput,
} from "../commands/CreateRoutingProfileCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import {
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "../commands/CreateSecurityProfileCommand";
import { CreateTaskTemplateCommandInput, CreateTaskTemplateCommandOutput } from "../commands/CreateTaskTemplateCommand";
import {
  CreateTrafficDistributionGroupCommandInput,
  CreateTrafficDistributionGroupCommandOutput,
} from "../commands/CreateTrafficDistributionGroupCommand";
import { CreateUseCaseCommandInput, CreateUseCaseCommandOutput } from "../commands/CreateUseCaseCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import {
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
} from "../commands/CreateUserHierarchyGroupCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "../commands/CreateVocabularyCommand";
import { DeleteContactFlowCommandInput, DeleteContactFlowCommandOutput } from "../commands/DeleteContactFlowCommand";
import {
  DeleteContactFlowModuleCommandInput,
  DeleteContactFlowModuleCommandOutput,
} from "../commands/DeleteContactFlowModuleCommand";
import {
  DeleteHoursOfOperationCommandInput,
  DeleteHoursOfOperationCommandOutput,
} from "../commands/DeleteHoursOfOperationCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "../commands/DeleteInstanceCommand";
import {
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
} from "../commands/DeleteIntegrationAssociationCommand";
import { DeleteQuickConnectCommandInput, DeleteQuickConnectCommandOutput } from "../commands/DeleteQuickConnectCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import {
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "../commands/DeleteSecurityProfileCommand";
import { DeleteTaskTemplateCommandInput, DeleteTaskTemplateCommandOutput } from "../commands/DeleteTaskTemplateCommand";
import {
  DeleteTrafficDistributionGroupCommandInput,
  DeleteTrafficDistributionGroupCommandOutput,
} from "../commands/DeleteTrafficDistributionGroupCommand";
import { DeleteUseCaseCommandInput, DeleteUseCaseCommandOutput } from "../commands/DeleteUseCaseCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DeleteUserHierarchyGroupCommandInput,
  DeleteUserHierarchyGroupCommandOutput,
} from "../commands/DeleteUserHierarchyGroupCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "../commands/DeleteVocabularyCommand";
import {
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
} from "../commands/DescribeAgentStatusCommand";
import { DescribeContactCommandInput, DescribeContactCommandOutput } from "../commands/DescribeContactCommand";
import {
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "../commands/DescribeContactFlowCommand";
import {
  DescribeContactFlowModuleCommandInput,
  DescribeContactFlowModuleCommandOutput,
} from "../commands/DescribeContactFlowModuleCommand";
import {
  DescribeHoursOfOperationCommandInput,
  DescribeHoursOfOperationCommandOutput,
} from "../commands/DescribeHoursOfOperationCommand";
import {
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "../commands/DescribeInstanceAttributeCommand";
import { DescribeInstanceCommandInput, DescribeInstanceCommandOutput } from "../commands/DescribeInstanceCommand";
import {
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
} from "../commands/DescribeInstanceStorageConfigCommand";
import {
  DescribePhoneNumberCommandInput,
  DescribePhoneNumberCommandOutput,
} from "../commands/DescribePhoneNumberCommand";
import { DescribeQueueCommandInput, DescribeQueueCommandOutput } from "../commands/DescribeQueueCommand";
import {
  DescribeQuickConnectCommandInput,
  DescribeQuickConnectCommandOutput,
} from "../commands/DescribeQuickConnectCommand";
import {
  DescribeRoutingProfileCommandInput,
  DescribeRoutingProfileCommandOutput,
} from "../commands/DescribeRoutingProfileCommand";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "../commands/DescribeRuleCommand";
import {
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "../commands/DescribeSecurityProfileCommand";
import {
  DescribeTrafficDistributionGroupCommandInput,
  DescribeTrafficDistributionGroupCommandOutput,
} from "../commands/DescribeTrafficDistributionGroupCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import {
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput,
} from "../commands/DescribeUserHierarchyGroupCommand";
import {
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
} from "../commands/DescribeUserHierarchyStructureCommand";
import { DescribeVocabularyCommandInput, DescribeVocabularyCommandOutput } from "../commands/DescribeVocabularyCommand";
import {
  DisassociateApprovedOriginCommandInput,
  DisassociateApprovedOriginCommandOutput,
} from "../commands/DisassociateApprovedOriginCommand";
import { DisassociateBotCommandInput, DisassociateBotCommandOutput } from "../commands/DisassociateBotCommand";
import {
  DisassociateInstanceStorageConfigCommandInput,
  DisassociateInstanceStorageConfigCommandOutput,
} from "../commands/DisassociateInstanceStorageConfigCommand";
import {
  DisassociateLambdaFunctionCommandInput,
  DisassociateLambdaFunctionCommandOutput,
} from "../commands/DisassociateLambdaFunctionCommand";
import { DisassociateLexBotCommandInput, DisassociateLexBotCommandOutput } from "../commands/DisassociateLexBotCommand";
import {
  DisassociatePhoneNumberContactFlowCommandInput,
  DisassociatePhoneNumberContactFlowCommandOutput,
} from "../commands/DisassociatePhoneNumberContactFlowCommand";
import {
  DisassociateQueueQuickConnectsCommandInput,
  DisassociateQueueQuickConnectsCommandOutput,
} from "../commands/DisassociateQueueQuickConnectsCommand";
import {
  DisassociateRoutingProfileQueuesCommandInput,
  DisassociateRoutingProfileQueuesCommandOutput,
} from "../commands/DisassociateRoutingProfileQueuesCommand";
import {
  DisassociateSecurityKeyCommandInput,
  DisassociateSecurityKeyCommandOutput,
} from "../commands/DisassociateSecurityKeyCommand";
import { DismissUserContactCommandInput, DismissUserContactCommandOutput } from "../commands/DismissUserContactCommand";
import {
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput,
} from "../commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "../commands/GetCurrentMetricDataCommand";
import { GetCurrentUserDataCommandInput, GetCurrentUserDataCommandOutput } from "../commands/GetCurrentUserDataCommand";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput } from "../commands/GetFederationTokenCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "../commands/GetMetricDataCommand";
import { GetTaskTemplateCommandInput, GetTaskTemplateCommandOutput } from "../commands/GetTaskTemplateCommand";
import {
  GetTrafficDistributionCommandInput,
  GetTrafficDistributionCommandOutput,
} from "../commands/GetTrafficDistributionCommand";
import { ListAgentStatusesCommandInput, ListAgentStatusesCommandOutput } from "../commands/ListAgentStatusesCommand";
import {
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "../commands/ListApprovedOriginsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import {
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "../commands/ListContactFlowModulesCommand";
import { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "../commands/ListContactFlowsCommand";
import {
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "../commands/ListContactReferencesCommand";
import {
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "../commands/ListDefaultVocabulariesCommand";
import {
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "../commands/ListHoursOfOperationsCommand";
import {
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "../commands/ListInstanceAttributesCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import {
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
} from "../commands/ListInstanceStorageConfigsCommand";
import {
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "../commands/ListIntegrationAssociationsCommand";
import {
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
} from "../commands/ListLambdaFunctionsCommand";
import { ListLexBotsCommandInput, ListLexBotsCommandOutput } from "../commands/ListLexBotsCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "../commands/ListPhoneNumbersCommand";
import { ListPhoneNumbersV2CommandInput, ListPhoneNumbersV2CommandOutput } from "../commands/ListPhoneNumbersV2Command";
import { ListPromptsCommandInput, ListPromptsCommandOutput } from "../commands/ListPromptsCommand";
import {
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "../commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput } from "../commands/ListQuickConnectsCommand";
import {
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
} from "../commands/ListRoutingProfileQueuesCommand";
import {
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "../commands/ListRoutingProfilesCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput } from "../commands/ListSecurityKeysCommand";
import {
  ListSecurityProfilePermissionsCommandInput,
  ListSecurityProfilePermissionsCommandOutput,
} from "../commands/ListSecurityProfilePermissionsCommand";
import {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTaskTemplatesCommandInput, ListTaskTemplatesCommandOutput } from "../commands/ListTaskTemplatesCommand";
import {
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
} from "../commands/ListTrafficDistributionGroupsCommand";
import { ListUseCasesCommandInput, ListUseCasesCommandOutput } from "../commands/ListUseCasesCommand";
import {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "../commands/ListUserHierarchyGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { MonitorContactCommandInput, MonitorContactCommandOutput } from "../commands/MonitorContactCommand";
import { PutUserStatusCommandInput, PutUserStatusCommandOutput } from "../commands/PutUserStatusCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "../commands/ReleasePhoneNumberCommand";
import { ReplicateInstanceCommandInput, ReplicateInstanceCommandOutput } from "../commands/ReplicateInstanceCommand";
import {
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "../commands/ResumeContactRecordingCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import { SearchQueuesCommandInput, SearchQueuesCommandOutput } from "../commands/SearchQueuesCommand";
import {
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "../commands/SearchRoutingProfilesCommand";
import {
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
} from "../commands/SearchSecurityProfilesCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
import { SearchVocabulariesCommandInput, SearchVocabulariesCommandOutput } from "../commands/SearchVocabulariesCommand";
import { StartChatContactCommandInput, StartChatContactCommandOutput } from "../commands/StartChatContactCommand";
import {
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "../commands/StartContactRecordingCommand";
import {
  StartContactStreamingCommandInput,
  StartContactStreamingCommandOutput,
} from "../commands/StartContactStreamingCommand";
import {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "../commands/StartOutboundVoiceContactCommand";
import { StartTaskContactCommandInput, StartTaskContactCommandOutput } from "../commands/StartTaskContactCommand";
import { StopContactCommandInput, StopContactCommandOutput } from "../commands/StopContactCommand";
import {
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
} from "../commands/StopContactRecordingCommand";
import {
  StopContactStreamingCommandInput,
  StopContactStreamingCommandOutput,
} from "../commands/StopContactStreamingCommand";
import {
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "../commands/SuspendContactRecordingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TransferContactCommandInput, TransferContactCommandOutput } from "../commands/TransferContactCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAgentStatusCommandInput, UpdateAgentStatusCommandOutput } from "../commands/UpdateAgentStatusCommand";
import {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "../commands/UpdateContactAttributesCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "../commands/UpdateContactCommand";
import {
  UpdateContactFlowContentCommandInput,
  UpdateContactFlowContentCommandOutput,
} from "../commands/UpdateContactFlowContentCommand";
import {
  UpdateContactFlowMetadataCommandInput,
  UpdateContactFlowMetadataCommandOutput,
} from "../commands/UpdateContactFlowMetadataCommand";
import {
  UpdateContactFlowModuleContentCommandInput,
  UpdateContactFlowModuleContentCommandOutput,
} from "../commands/UpdateContactFlowModuleContentCommand";
import {
  UpdateContactFlowModuleMetadataCommandInput,
  UpdateContactFlowModuleMetadataCommandOutput,
} from "../commands/UpdateContactFlowModuleMetadataCommand";
import {
  UpdateContactFlowNameCommandInput,
  UpdateContactFlowNameCommandOutput,
} from "../commands/UpdateContactFlowNameCommand";
import {
  UpdateContactScheduleCommandInput,
  UpdateContactScheduleCommandOutput,
} from "../commands/UpdateContactScheduleCommand";
import {
  UpdateHoursOfOperationCommandInput,
  UpdateHoursOfOperationCommandOutput,
} from "../commands/UpdateHoursOfOperationCommand";
import {
  UpdateInstanceAttributeCommandInput,
  UpdateInstanceAttributeCommandOutput,
} from "../commands/UpdateInstanceAttributeCommand";
import {
  UpdateInstanceStorageConfigCommandInput,
  UpdateInstanceStorageConfigCommandOutput,
} from "../commands/UpdateInstanceStorageConfigCommand";
import {
  UpdateParticipantRoleConfigCommandInput,
  UpdateParticipantRoleConfigCommandOutput,
} from "../commands/UpdateParticipantRoleConfigCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "../commands/UpdatePhoneNumberCommand";
import {
  UpdateQueueHoursOfOperationCommandInput,
  UpdateQueueHoursOfOperationCommandOutput,
} from "../commands/UpdateQueueHoursOfOperationCommand";
import {
  UpdateQueueMaxContactsCommandInput,
  UpdateQueueMaxContactsCommandOutput,
} from "../commands/UpdateQueueMaxContactsCommand";
import { UpdateQueueNameCommandInput, UpdateQueueNameCommandOutput } from "../commands/UpdateQueueNameCommand";
import {
  UpdateQueueOutboundCallerConfigCommandInput,
  UpdateQueueOutboundCallerConfigCommandOutput,
} from "../commands/UpdateQueueOutboundCallerConfigCommand";
import { UpdateQueueStatusCommandInput, UpdateQueueStatusCommandOutput } from "../commands/UpdateQueueStatusCommand";
import {
  UpdateQuickConnectConfigCommandInput,
  UpdateQuickConnectConfigCommandOutput,
} from "../commands/UpdateQuickConnectConfigCommand";
import {
  UpdateQuickConnectNameCommandInput,
  UpdateQuickConnectNameCommandOutput,
} from "../commands/UpdateQuickConnectNameCommand";
import {
  UpdateRoutingProfileConcurrencyCommandInput,
  UpdateRoutingProfileConcurrencyCommandOutput,
} from "../commands/UpdateRoutingProfileConcurrencyCommand";
import {
  UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
} from "../commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import {
  UpdateRoutingProfileNameCommandInput,
  UpdateRoutingProfileNameCommandOutput,
} from "../commands/UpdateRoutingProfileNameCommand";
import {
  UpdateRoutingProfileQueuesCommandInput,
  UpdateRoutingProfileQueuesCommandOutput,
} from "../commands/UpdateRoutingProfileQueuesCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "../commands/UpdateRuleCommand";
import {
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "../commands/UpdateSecurityProfileCommand";
import { UpdateTaskTemplateCommandInput, UpdateTaskTemplateCommandOutput } from "../commands/UpdateTaskTemplateCommand";
import {
  UpdateTrafficDistributionCommandInput,
  UpdateTrafficDistributionCommandOutput,
} from "../commands/UpdateTrafficDistributionCommand";
import {
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput,
} from "../commands/UpdateUserHierarchyCommand";
import {
  UpdateUserHierarchyGroupNameCommandInput,
  UpdateUserHierarchyGroupNameCommandOutput,
} from "../commands/UpdateUserHierarchyGroupNameCommand";
import {
  UpdateUserHierarchyStructureCommandInput,
  UpdateUserHierarchyStructureCommandOutput,
} from "../commands/UpdateUserHierarchyStructureCommand";
import {
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
} from "../commands/UpdateUserIdentityInfoCommand";
import {
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput,
} from "../commands/UpdateUserPhoneConfigCommand";
import {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "../commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "../commands/UpdateUserSecurityProfilesCommand";
import { ConnectServiceException as __BaseException } from "../models/ConnectServiceException";
import {
  AccessDeniedException,
  ActionSummary,
  AgentContactReference,
  AgentInfo,
  AgentStatus,
  AgentStatusReference,
  AgentStatusSummary,
  AssignContactCategoryActionDefinition,
  AttachmentReference,
  Attribute,
  Channel,
  ClaimedPhoneNumberSummary,
  Contact,
  ContactFilter,
  ContactFlow,
  ContactFlowModule,
  ContactFlowModuleSummary,
  ContactFlowNotPublishedException,
  ContactFlowSummary,
  ContactState,
  Credentials,
  CurrentMetric,
  CurrentMetricData,
  CurrentMetricResult,
  CurrentMetricSortCriteria,
  Dimensions,
  Distribution,
  DuplicateResourceException,
  EncryptionConfig,
  EventBridgeActionDefinition,
  Filters,
  Grouping,
  HierarchyGroup,
  HierarchyGroupSummary,
  HierarchyGroupSummaryReference,
  HierarchyLevel,
  HierarchyPath,
  HierarchyPathReference,
  HierarchyStructure,
  HistoricalMetric,
  HistoricalMetricData,
  HistoricalMetricResult,
  HoursOfOperation,
  HoursOfOperationConfig,
  HoursOfOperationTimeSlice,
  IdempotencyException,
  Instance,
  InstanceStatusReason,
  InstanceStorageConfig,
  InternalServiceException,
  InvalidContactFlowException,
  InvalidContactFlowModuleException,
  InvalidParameterException,
  InvalidRequestException,
  InvisibleFieldInfo,
  KinesisFirehoseConfig,
  KinesisStreamConfig,
  KinesisVideoStreamConfig,
  LexBot,
  LexBotConfig,
  LexV2Bot,
  LimitExceededException,
  MediaConcurrency,
  MonitorCapability,
  NotificationRecipientType,
  OutboundCallerConfig,
  PhoneNumberCountryCode,
  PhoneNumberQuickConnectConfig,
  PhoneNumberStatus,
  PhoneNumberType,
  ProblemDetail,
  PropertyValidationException,
  PropertyValidationExceptionProperty,
  Queue,
  QueueInfo,
  QueueQuickConnectConfig,
  QueueReference,
  QuickConnect,
  QuickConnectConfig,
  ReadOnlyFieldInfo,
  Reference,
  RequiredFieldInfo,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  RoutingProfile,
  RoutingProfileQueueConfig,
  RoutingProfileQueueReference,
  RoutingProfileReference,
  Rule,
  RuleAction,
  RuleTriggerEventSource,
  S3Config,
  SecurityProfile,
  SendNotificationActionDefinition,
  ServiceQuotaExceededException,
  TaskActionDefinition,
  TaskTemplateConstraints,
  TaskTemplateDefaultFieldValue,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateFieldIdentifier,
  TelephonyConfig,
  Threshold,
  ThrottlingException,
  TrafficDistributionGroup,
  User,
  UserData,
  UserDataFilters,
  UserIdentityInfo,
  UserNotFoundException,
  UserPhoneConfig,
  UserQuickConnectConfig,
  UserReference,
  Vocabulary,
} from "../models/models_0";
import {
  AnswerMachineDetectionConfig,
  AvailableNumberSummary,
  ChatMessage,
  ChatParticipantRoleConfig,
  ChatStreamingConfiguration,
  ContactNotFoundException,
  ControlPlaneTagFilter,
  DateReference,
  DefaultVocabulary,
  DestinationNotAllowedException,
  EmailReference,
  HierarchyGroupCondition,
  HierarchyLevelUpdate,
  HierarchyStructureUpdate,
  HoursOfOperationSummary,
  InstanceSummary,
  IntegrationAssociationSummary,
  ListPhoneNumbersSummary,
  NumberReference,
  OutboundContactNotPermittedException,
  ParticipantDetails,
  ParticipantTimerConfiguration,
  ParticipantTimerValue,
  PersistentChat,
  PhoneNumberSummary,
  PromptSummary,
  QueueSearchCriteria,
  QueueSearchFilter,
  QueueSummary,
  QuickConnectSummary,
  ReferenceSummary,
  RoutingProfileQueueConfigSummary,
  RoutingProfileSearchCriteria,
  RoutingProfileSearchFilter,
  RoutingProfileSummary,
  RuleSummary,
  SecurityKey,
  SecurityProfileSearchCriteria,
  SecurityProfileSearchSummary,
  SecurityProfilesSearchFilter,
  SecurityProfileSummary,
  StringCondition,
  StringReference,
  TagCondition,
  TaskTemplateMetadata,
  TrafficDistributionGroupSummary,
  UpdateParticipantRoleConfigChannelInfo,
  UrlReference,
  UseCase,
  UserIdentityInfoLite,
  UserSearchCriteria,
  UserSearchFilter,
  UserSearchSummary,
  UserSummary,
  VocabularySummary,
  VoiceRecordingConfiguration,
} from "../models/models_1";

export const serializeAws_restJson1AssociateApprovedOriginCommand = async (
  input: AssociateApprovedOriginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/approved-origin";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Origin != null && { Origin: input.Origin }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateBotCommand = async (
  input: AssociateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/bot";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LexBot != null && { LexBot: serializeAws_restJson1LexBot(input.LexBot, context) }),
    ...(input.LexV2Bot != null && { LexV2Bot: serializeAws_restJson1LexV2Bot(input.LexV2Bot, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateDefaultVocabularyCommand = async (
  input: AssociateDefaultVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/default-vocabulary/{InstanceId}/{LanguageCode}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LanguageCode",
    () => input.LanguageCode!,
    "{LanguageCode}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.VocabularyId != null && { VocabularyId: input.VocabularyId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateInstanceStorageConfigCommand = async (
  input: AssociateInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/storage-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.StorageConfig != null && {
      StorageConfig: serializeAws_restJson1InstanceStorageConfig(input.StorageConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateLambdaFunctionCommand = async (
  input: AssociateLambdaFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/lambda-function";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FunctionArn != null && { FunctionArn: input.FunctionArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateLexBotCommand = async (
  input: AssociateLexBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/lex-bot";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LexBot != null && { LexBot: serializeAws_restJson1LexBot(input.LexBot, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociatePhoneNumberContactFlowCommand = async (
  input: AssociatePhoneNumberContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/phone-number/{PhoneNumberId}/contact-flow";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateQueueQuickConnectsCommand = async (
  input: AssociateQueueQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/queues/{InstanceId}/{QueueId}/associate-quick-connects";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.QuickConnectIds != null && {
      QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateRoutingProfileQueuesCommand = async (
  input: AssociateRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.QueueConfigs != null && {
      QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateSecurityKeyCommand = async (
  input: AssociateSecurityKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/security-key";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Key != null && { Key: input.Key }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ClaimPhoneNumberCommand = async (
  input: ClaimPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number/claim";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PhoneNumberDescription != null && { PhoneNumberDescription: input.PhoneNumberDescription }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAgentStatusCommand = async (
  input: CreateAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/agent-status/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayOrder != null && { DisplayOrder: input.DisplayOrder }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.State != null && { State: input.State }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateContactFlowCommand = async (
  input: CreateContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact-flows/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateContactFlowModuleCommand = async (
  input: CreateContactFlowModuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact-flow-modules/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateHoursOfOperationCommand = async (
  input: CreateHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/hours-of-operations/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Config != null && { Config: serializeAws_restJson1HoursOfOperationConfigList(input.Config, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.TimeZone != null && { TimeZone: input.TimeZone }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateInstanceCommand = async (
  input: CreateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance";
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.IdentityManagementType != null && { IdentityManagementType: input.IdentityManagementType }),
    ...(input.InboundCallsEnabled != null && { InboundCallsEnabled: input.InboundCallsEnabled }),
    ...(input.InstanceAlias != null && { InstanceAlias: input.InstanceAlias }),
    ...(input.OutboundCallsEnabled != null && { OutboundCallsEnabled: input.OutboundCallsEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateIntegrationAssociationCommand = async (
  input: CreateIntegrationAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/integration-associations";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.IntegrationArn != null && { IntegrationArn: input.IntegrationArn }),
    ...(input.IntegrationType != null && { IntegrationType: input.IntegrationType }),
    ...(input.SourceApplicationName != null && { SourceApplicationName: input.SourceApplicationName }),
    ...(input.SourceApplicationUrl != null && { SourceApplicationUrl: input.SourceApplicationUrl }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/queues/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HoursOfOperationId != null && { HoursOfOperationId: input.HoursOfOperationId }),
    ...(input.MaxContacts != null && { MaxContacts: input.MaxContacts }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutboundCallerConfig != null && {
      OutboundCallerConfig: serializeAws_restJson1OutboundCallerConfig(input.OutboundCallerConfig, context),
    }),
    ...(input.QuickConnectIds != null && {
      QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateQuickConnectCommand = async (
  input: CreateQuickConnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/quick-connects/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QuickConnectConfig != null && {
      QuickConnectConfig: serializeAws_restJson1QuickConnectConfig(input.QuickConnectConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRoutingProfileCommand = async (
  input: CreateRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/routing-profiles/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultOutboundQueueId != null && { DefaultOutboundQueueId: input.DefaultOutboundQueueId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.MediaConcurrencies != null && {
      MediaConcurrencies: serializeAws_restJson1MediaConcurrencies(input.MediaConcurrencies, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QueueConfigs != null && {
      QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Actions != null && { Actions: serializeAws_restJson1RuleActions(input.Actions, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Function != null && { Function: input.Function }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PublishStatus != null && { PublishStatus: input.PublishStatus }),
    ...(input.TriggerEventSource != null && {
      TriggerEventSource: serializeAws_restJson1RuleTriggerEventSource(input.TriggerEventSource, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSecurityProfileCommand = async (
  input: CreateSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/security-profiles/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedAccessControlTags != null && {
      AllowedAccessControlTags: serializeAws_restJson1AllowedAccessControlTags(input.AllowedAccessControlTags, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1PermissionsList(input.Permissions, context),
    }),
    ...(input.SecurityProfileName != null && { SecurityProfileName: input.SecurityProfileName }),
    ...(input.TagRestrictedResources != null && {
      TagRestrictedResources: serializeAws_restJson1TagRestrictedResourceList(input.TagRestrictedResources, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateTaskTemplateCommand = async (
  input: CreateTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/task/template";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Constraints != null && {
      Constraints: serializeAws_restJson1TaskTemplateConstraints(input.Constraints, context),
    }),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Defaults != null && { Defaults: serializeAws_restJson1TaskTemplateDefaults(input.Defaults, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Fields != null && { Fields: serializeAws_restJson1TaskTemplateFields(input.Fields, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Status != null && { Status: input.Status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateTrafficDistributionGroupCommand = async (
  input: CreateTrafficDistributionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/traffic-distribution-group";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateUseCaseCommand = async (
  input: CreateUseCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationAssociationId",
    () => input.IntegrationAssociationId!,
    "{IntegrationAssociationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.UseCaseType != null && { UseCaseType: input.UseCaseType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DirectoryUserId != null && { DirectoryUserId: input.DirectoryUserId }),
    ...(input.HierarchyGroupId != null && { HierarchyGroupId: input.HierarchyGroupId }),
    ...(input.IdentityInfo != null && {
      IdentityInfo: serializeAws_restJson1UserIdentityInfo(input.IdentityInfo, context),
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.PhoneConfig != null && {
      PhoneConfig: serializeAws_restJson1UserPhoneConfig(input.PhoneConfig, context),
    }),
    ...(input.RoutingProfileId != null && { RoutingProfileId: input.RoutingProfileId }),
    ...(input.SecurityProfileIds != null && {
      SecurityProfileIds: serializeAws_restJson1SecurityProfileIds(input.SecurityProfileIds, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Username != null && { Username: input.Username }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateUserHierarchyGroupCommand = async (
  input: CreateUserHierarchyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user-hierarchy-groups/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentGroupId != null && { ParentGroupId: input.ParentGroupId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateVocabularyCommand = async (
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vocabulary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteContactFlowCommand = async (
  input: DeleteContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flows/{InstanceId}/{ContactFlowId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowId",
    () => input.ContactFlowId!,
    "{ContactFlowId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteContactFlowModuleCommand = async (
  input: DeleteContactFlowModuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowModuleId",
    () => input.ContactFlowModuleId!,
    "{ContactFlowModuleId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteHoursOfOperationCommand = async (
  input: DeleteHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/hours-of-operations/{InstanceId}/{HoursOfOperationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HoursOfOperationId",
    () => input.HoursOfOperationId!,
    "{HoursOfOperationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteIntegrationAssociationCommand = async (
  input: DeleteIntegrationAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationAssociationId",
    () => input.IntegrationAssociationId!,
    "{IntegrationAssociationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteQuickConnectCommand = async (
  input: DeleteQuickConnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/quick-connects/{InstanceId}/{QuickConnectId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "QuickConnectId",
    () => input.QuickConnectId!,
    "{QuickConnectId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{InstanceId}/{RuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RuleId", () => input.RuleId!, "{RuleId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteSecurityProfileCommand = async (
  input: DeleteSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/security-profiles/{InstanceId}/{SecurityProfileId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SecurityProfileId",
    () => input.SecurityProfileId!,
    "{SecurityProfileId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteTaskTemplateCommand = async (
  input: DeleteTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/task/template/{TaskTemplateId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TaskTemplateId",
    () => input.TaskTemplateId!,
    "{TaskTemplateId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteTrafficDistributionGroupCommand = async (
  input: DeleteTrafficDistributionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/traffic-distribution-group/{TrafficDistributionGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TrafficDistributionGroupId",
    () => input.TrafficDistributionGroupId!,
    "{TrafficDistributionGroupId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUseCaseCommand = async (
  input: DeleteUseCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationAssociationId",
    () => input.IntegrationAssociationId!,
    "{IntegrationAssociationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "UseCaseId", () => input.UseCaseId!, "{UseCaseId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users/{InstanceId}/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUserHierarchyGroupCommand = async (
  input: DeleteUserHierarchyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HierarchyGroupId",
    () => input.HierarchyGroupId!,
    "{HierarchyGroupId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVocabularyCommand = async (
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/vocabulary-remove/{InstanceId}/{VocabularyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VocabularyId",
    () => input.VocabularyId!,
    "{VocabularyId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAgentStatusCommand = async (
  input: DescribeAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/agent-status/{InstanceId}/{AgentStatusId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AgentStatusId",
    () => input.AgentStatusId!,
    "{AgentStatusId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeContactCommand = async (
  input: DescribeContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contacts/{InstanceId}/{ContactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeContactFlowCommand = async (
  input: DescribeContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flows/{InstanceId}/{ContactFlowId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowId",
    () => input.ContactFlowId!,
    "{ContactFlowId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeContactFlowModuleCommand = async (
  input: DescribeContactFlowModuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowModuleId",
    () => input.ContactFlowModuleId!,
    "{ContactFlowModuleId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeHoursOfOperationCommand = async (
  input: DescribeHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/hours-of-operations/{InstanceId}/{HoursOfOperationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HoursOfOperationId",
    () => input.HoursOfOperationId!,
    "{HoursOfOperationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeInstanceCommand = async (
  input: DescribeInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeInstanceAttributeCommand = async (
  input: DescribeInstanceAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/attribute/{AttributeType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttributeType",
    () => input.AttributeType!,
    "{AttributeType}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeInstanceStorageConfigCommand = async (
  input: DescribeInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/storage-config/{AssociationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssociationId",
    () => input.AssociationId!,
    "{AssociationId}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribePhoneNumberCommand = async (
  input: DescribePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number/{PhoneNumberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeQueueCommand = async (
  input: DescribeQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/queues/{InstanceId}/{QueueId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeQuickConnectCommand = async (
  input: DescribeQuickConnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/quick-connects/{InstanceId}/{QuickConnectId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "QuickConnectId",
    () => input.QuickConnectId!,
    "{QuickConnectId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeRoutingProfileCommand = async (
  input: DescribeRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeRuleCommand = async (
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{InstanceId}/{RuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RuleId", () => input.RuleId!, "{RuleId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeSecurityProfileCommand = async (
  input: DescribeSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/security-profiles/{InstanceId}/{SecurityProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SecurityProfileId",
    () => input.SecurityProfileId!,
    "{SecurityProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeTrafficDistributionGroupCommand = async (
  input: DescribeTrafficDistributionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/traffic-distribution-group/{TrafficDistributionGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TrafficDistributionGroupId",
    () => input.TrafficDistributionGroupId!,
    "{TrafficDistributionGroupId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users/{InstanceId}/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeUserHierarchyGroupCommand = async (
  input: DescribeUserHierarchyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HierarchyGroupId",
    () => input.HierarchyGroupId!,
    "{HierarchyGroupId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeUserHierarchyStructureCommand = async (
  input: DescribeUserHierarchyStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user-hierarchy-structure/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeVocabularyCommand = async (
  input: DescribeVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vocabulary/{InstanceId}/{VocabularyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VocabularyId",
    () => input.VocabularyId!,
    "{VocabularyId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateApprovedOriginCommand = async (
  input: DisassociateApprovedOriginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/approved-origin";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    origin: [, __expectNonNull(input.Origin!, `Origin`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateBotCommand = async (
  input: DisassociateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/bot";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LexBot != null && { LexBot: serializeAws_restJson1LexBot(input.LexBot, context) }),
    ...(input.LexV2Bot != null && { LexV2Bot: serializeAws_restJson1LexV2Bot(input.LexV2Bot, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateInstanceStorageConfigCommand = async (
  input: DisassociateInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/storage-config/{AssociationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssociationId",
    () => input.AssociationId!,
    "{AssociationId}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateLambdaFunctionCommand = async (
  input: DisassociateLambdaFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/lambda-function";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    functionArn: [, __expectNonNull(input.FunctionArn!, `FunctionArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateLexBotCommand = async (
  input: DisassociateLexBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/lex-bot";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    botName: [, __expectNonNull(input.BotName!, `BotName`)],
    lexRegion: [, __expectNonNull(input.LexRegion!, `LexRegion`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociatePhoneNumberContactFlowCommand = async (
  input: DisassociatePhoneNumberContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/phone-number/{PhoneNumberId}/contact-flow";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  const query: any = map({
    instanceId: [, __expectNonNull(input.InstanceId!, `InstanceId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateQueueQuickConnectsCommand = async (
  input: DisassociateQueueQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/queues/{InstanceId}/{QueueId}/disassociate-quick-connects";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.QuickConnectIds != null && {
      QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateRoutingProfileQueuesCommand = async (
  input: DisassociateRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.QueueReferences != null && {
      QueueReferences: serializeAws_restJson1RoutingProfileQueueReferenceList(input.QueueReferences, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateSecurityKeyCommand = async (
  input: DisassociateSecurityKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/security-key/{AssociationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssociationId",
    () => input.AssociationId!,
    "{AssociationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DismissUserContactCommand = async (
  input: DismissUserContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users/{InstanceId}/{UserId}/contact";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetContactAttributesCommand = async (
  input: GetContactAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact/attributes/{InstanceId}/{InitialContactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InitialContactId",
    () => input.InitialContactId!,
    "{InitialContactId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCurrentMetricDataCommand = async (
  input: GetCurrentMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metrics/current/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentMetrics != null && {
      CurrentMetrics: serializeAws_restJson1CurrentMetrics(input.CurrentMetrics, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_restJson1Filters(input.Filters, context) }),
    ...(input.Groupings != null && { Groupings: serializeAws_restJson1Groupings(input.Groupings, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && {
      SortCriteria: serializeAws_restJson1CurrentMetricSortCriteriaMaxOne(input.SortCriteria, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCurrentUserDataCommand = async (
  input: GetCurrentUserDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metrics/userdata/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1UserDataFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFederationTokenCommand = async (
  input: GetFederationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/federate/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMetricDataCommand = async (
  input: GetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metrics/historical/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Filters != null && { Filters: serializeAws_restJson1Filters(input.Filters, context) }),
    ...(input.Groupings != null && { Groupings: serializeAws_restJson1Groupings(input.Groupings, context) }),
    ...(input.HistoricalMetrics != null && {
      HistoricalMetrics: serializeAws_restJson1HistoricalMetrics(input.HistoricalMetrics, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetTaskTemplateCommand = async (
  input: GetTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/task/template/{TaskTemplateId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TaskTemplateId",
    () => input.TaskTemplateId!,
    "{TaskTemplateId}",
    false
  );
  const query: any = map({
    snapshotVersion: [, input.SnapshotVersion!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetTrafficDistributionCommand = async (
  input: GetTrafficDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/traffic-distribution/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListAgentStatusesCommand = async (
  input: ListAgentStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/agent-status/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    AgentStatusTypes: [
      () => input.AgentStatusTypes !== void 0,
      () => (input.AgentStatusTypes! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListApprovedOriginsCommand = async (
  input: ListApprovedOriginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/approved-origins";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListBotsCommand = async (
  input: ListBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/bots";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    lexVersion: [, __expectNonNull(input.LexVersion!, `LexVersion`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListContactFlowModulesCommand = async (
  input: ListContactFlowModulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flow-modules-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    state: [, input.ContactFlowModuleState!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListContactFlowsCommand = async (
  input: ListContactFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact-flows-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    contactFlowTypes: [
      () => input.ContactFlowTypes !== void 0,
      () => (input.ContactFlowTypes! || []).map((_entry) => _entry as any),
    ],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListContactReferencesCommand = async (
  input: ListContactReferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact/references/{InstanceId}/{ContactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ContactId", () => input.ContactId!, "{ContactId}", false);
  const query: any = map({
    referenceTypes: [
      __expectNonNull(input.ReferenceTypes, `ReferenceTypes`) != null,
      () => (input.ReferenceTypes! || []).map((_entry) => _entry as any),
    ],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDefaultVocabulariesCommand = async (
  input: ListDefaultVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/default-vocabulary-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListHoursOfOperationsCommand = async (
  input: ListHoursOfOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/hours-of-operations-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListInstanceAttributesCommand = async (
  input: ListInstanceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/attributes";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListInstanceStorageConfigsCommand = async (
  input: ListInstanceStorageConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/storage-configs";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListIntegrationAssociationsCommand = async (
  input: ListIntegrationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/integration-associations";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    integrationType: [, input.IntegrationType!],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLambdaFunctionsCommand = async (
  input: ListLambdaFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/lambda-functions";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLexBotsCommand = async (
  input: ListLexBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/lex-bots";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListPhoneNumbersCommand = async (
  input: ListPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    phoneNumberTypes: [
      () => input.PhoneNumberTypes !== void 0,
      () => (input.PhoneNumberTypes! || []).map((_entry) => _entry as any),
    ],
    phoneNumberCountryCodes: [
      () => input.PhoneNumberCountryCodes !== void 0,
      () => (input.PhoneNumberCountryCodes! || []).map((_entry) => _entry as any),
    ],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListPhoneNumbersV2Command = async (
  input: ListPhoneNumbersV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number/list";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PhoneNumberCountryCodes != null && {
      PhoneNumberCountryCodes: serializeAws_restJson1PhoneNumberCountryCodes(input.PhoneNumberCountryCodes, context),
    }),
    ...(input.PhoneNumberPrefix != null && { PhoneNumberPrefix: input.PhoneNumberPrefix }),
    ...(input.PhoneNumberTypes != null && {
      PhoneNumberTypes: serializeAws_restJson1PhoneNumberTypes(input.PhoneNumberTypes, context),
    }),
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListPromptsCommand = async (
  input: ListPromptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prompts-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListQueueQuickConnectsCommand = async (
  input: ListQueueQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/queues/{InstanceId}/{QueueId}/quick-connects";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/queues-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    queueTypes: [() => input.QueueTypes !== void 0, () => (input.QueueTypes! || []).map((_entry) => _entry as any)],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListQuickConnectsCommand = async (
  input: ListQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/quick-connects/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    QuickConnectTypes: [
      () => input.QuickConnectTypes !== void 0,
      () => (input.QuickConnectTypes! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRoutingProfileQueuesCommand = async (
  input: ListRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRoutingProfilesCommand = async (
  input: ListRoutingProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/routing-profiles-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    publishStatus: [, input.PublishStatus!],
    eventSourceName: [, input.EventSourceName!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSecurityKeysCommand = async (
  input: ListSecurityKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/security-keys";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSecurityProfilePermissionsCommand = async (
  input: ListSecurityProfilePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/security-profiles-permissions/{InstanceId}/{SecurityProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SecurityProfileId",
    () => input.SecurityProfileId!,
    "{SecurityProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSecurityProfilesCommand = async (
  input: ListSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/security-profiles-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListTaskTemplatesCommand = async (
  input: ListTaskTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/task/template";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    status: [, input.Status!],
    name: [, input.Name!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTrafficDistributionGroupsCommand = async (
  input: ListTrafficDistributionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/traffic-distribution-groups";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    instanceId: [, input.InstanceId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListUseCasesCommand = async (
  input: ListUseCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IntegrationAssociationId",
    () => input.IntegrationAssociationId!,
    "{IntegrationAssociationId}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListUserHierarchyGroupsCommand = async (
  input: ListUserHierarchyGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/user-hierarchy-groups-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MonitorContactCommand = async (
  input: MonitorContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/monitor";
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedMonitorCapabilities != null && {
      AllowedMonitorCapabilities: serializeAws_restJson1AllowedMonitorCapabilities(
        input.AllowedMonitorCapabilities,
        context
      ),
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutUserStatusCommand = async (
  input: PutUserStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users/{InstanceId}/{UserId}/status";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AgentStatusId != null && { AgentStatusId: input.AgentStatusId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ReleasePhoneNumberCommand = async (
  input: ReleasePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number/{PhoneNumberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  const query: any = map({
    clientToken: [, input.ClientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ReplicateInstanceCommand = async (
  input: ReplicateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/{InstanceId}/replicate";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ReplicaAlias != null && { ReplicaAlias: input.ReplicaAlias }),
    ...(input.ReplicaRegion != null && { ReplicaRegion: input.ReplicaRegion }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ResumeContactRecordingCommand = async (
  input: ResumeContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/resume-recording";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InitialContactId != null && { InitialContactId: input.InitialContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchAvailablePhoneNumbersCommand = async (
  input: SearchAvailablePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number/search-available";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PhoneNumberCountryCode != null && { PhoneNumberCountryCode: input.PhoneNumberCountryCode }),
    ...(input.PhoneNumberPrefix != null && { PhoneNumberPrefix: input.PhoneNumberPrefix }),
    ...(input.PhoneNumberType != null && { PhoneNumberType: input.PhoneNumberType }),
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchQueuesCommand = async (
  input: SearchQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/search-queues";
  let body: any;
  body = JSON.stringify({
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SearchCriteria != null && {
      SearchCriteria: serializeAws_restJson1QueueSearchCriteria(input.SearchCriteria, context),
    }),
    ...(input.SearchFilter != null && {
      SearchFilter: serializeAws_restJson1QueueSearchFilter(input.SearchFilter, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchRoutingProfilesCommand = async (
  input: SearchRoutingProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/search-routing-profiles";
  let body: any;
  body = JSON.stringify({
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SearchCriteria != null && {
      SearchCriteria: serializeAws_restJson1RoutingProfileSearchCriteria(input.SearchCriteria, context),
    }),
    ...(input.SearchFilter != null && {
      SearchFilter: serializeAws_restJson1RoutingProfileSearchFilter(input.SearchFilter, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchSecurityProfilesCommand = async (
  input: SearchSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/search-security-profiles";
  let body: any;
  body = JSON.stringify({
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SearchCriteria != null && {
      SearchCriteria: serializeAws_restJson1SecurityProfileSearchCriteria(input.SearchCriteria, context),
    }),
    ...(input.SearchFilter != null && {
      SearchFilter: serializeAws_restJson1SecurityProfilesSearchFilter(input.SearchFilter, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchUsersCommand = async (
  input: SearchUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/search-users";
  let body: any;
  body = JSON.stringify({
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SearchCriteria != null && {
      SearchCriteria: serializeAws_restJson1UserSearchCriteria(input.SearchCriteria, context),
    }),
    ...(input.SearchFilter != null && {
      SearchFilter: serializeAws_restJson1UserSearchFilter(input.SearchFilter, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchVocabulariesCommand = async (
  input: SearchVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vocabulary-summary/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NameStartsWith != null && { NameStartsWith: input.NameStartsWith }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.State != null && { State: input.State }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartChatContactCommand = async (
  input: StartChatContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/chat";
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
    ...(input.ChatDurationInMinutes != null && { ChatDurationInMinutes: input.ChatDurationInMinutes }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.InitialMessage != null && {
      InitialMessage: serializeAws_restJson1ChatMessage(input.InitialMessage, context),
    }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ParticipantDetails != null && {
      ParticipantDetails: serializeAws_restJson1ParticipantDetails(input.ParticipantDetails, context),
    }),
    ...(input.PersistentChat != null && {
      PersistentChat: serializeAws_restJson1PersistentChat(input.PersistentChat, context),
    }),
    ...(input.SupportedMessagingContentTypes != null && {
      SupportedMessagingContentTypes: serializeAws_restJson1SupportedMessagingContentTypes(
        input.SupportedMessagingContentTypes,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartContactRecordingCommand = async (
  input: StartContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/start-recording";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InitialContactId != null && { InitialContactId: input.InitialContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.VoiceRecordingConfiguration != null && {
      VoiceRecordingConfiguration: serializeAws_restJson1VoiceRecordingConfiguration(
        input.VoiceRecordingConfiguration,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartContactStreamingCommand = async (
  input: StartContactStreamingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/start-streaming";
  let body: any;
  body = JSON.stringify({
    ...(input.ChatStreamingConfiguration != null && {
      ChatStreamingConfiguration: serializeAws_restJson1ChatStreamingConfiguration(
        input.ChatStreamingConfiguration,
        context
      ),
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartOutboundVoiceContactCommand = async (
  input: StartOutboundVoiceContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/outbound-voice";
  let body: any;
  body = JSON.stringify({
    ...(input.AnswerMachineDetectionConfig != null && {
      AnswerMachineDetectionConfig: serializeAws_restJson1AnswerMachineDetectionConfig(
        input.AnswerMachineDetectionConfig,
        context
      ),
    }),
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
    ...(input.CampaignId != null && { CampaignId: input.CampaignId }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.DestinationPhoneNumber != null && { DestinationPhoneNumber: input.DestinationPhoneNumber }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.QueueId != null && { QueueId: input.QueueId }),
    ...(input.SourcePhoneNumber != null && { SourcePhoneNumber: input.SourcePhoneNumber }),
    ...(input.TrafficType != null && { TrafficType: input.TrafficType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartTaskContactCommand = async (
  input: StartTaskContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/task";
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PreviousContactId != null && { PreviousContactId: input.PreviousContactId }),
    ...(input.QuickConnectId != null && { QuickConnectId: input.QuickConnectId }),
    ...(input.References != null && { References: serializeAws_restJson1ContactReferences(input.References, context) }),
    ...(input.ScheduledTime != null && { ScheduledTime: Math.round(input.ScheduledTime.getTime() / 1000) }),
    ...(input.TaskTemplateId != null && { TaskTemplateId: input.TaskTemplateId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StopContactCommand = async (
  input: StopContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/stop";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StopContactRecordingCommand = async (
  input: StopContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/stop-recording";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InitialContactId != null && { InitialContactId: input.InitialContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StopContactStreamingCommand = async (
  input: StopContactStreamingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/stop-streaming";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.StreamingId != null && { StreamingId: input.StreamingId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SuspendContactRecordingCommand = async (
  input: SuspendContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/suspend-recording";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InitialContactId != null && { InitialContactId: input.InitialContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TransferContactCommand = async (
  input: TransferContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/transfer";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.QueueId != null && { QueueId: input.QueueId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAgentStatusCommand = async (
  input: UpdateAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/agent-status/{InstanceId}/{AgentStatusId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AgentStatusId",
    () => input.AgentStatusId!,
    "{AgentStatusId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayOrder != null && { DisplayOrder: input.DisplayOrder }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResetOrderNumber != null && { ResetOrderNumber: input.ResetOrderNumber }),
    ...(input.State != null && { State: input.State }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contacts/{InstanceId}/{ContactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.References != null && { References: serializeAws_restJson1ContactReferences(input.References, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactAttributesCommand = async (
  input: UpdateContactAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/attributes";
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
    ...(input.InitialContactId != null && { InitialContactId: input.InitialContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactFlowContentCommand = async (
  input: UpdateContactFlowContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flows/{InstanceId}/{ContactFlowId}/content";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowId",
    () => input.ContactFlowId!,
    "{ContactFlowId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Content != null && { Content: input.Content }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactFlowMetadataCommand = async (
  input: UpdateContactFlowMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flows/{InstanceId}/{ContactFlowId}/metadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowId",
    () => input.ContactFlowId!,
    "{ContactFlowId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ContactFlowState != null && { ContactFlowState: input.ContactFlowState }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactFlowModuleContentCommand = async (
  input: UpdateContactFlowModuleContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowModuleId",
    () => input.ContactFlowModuleId!,
    "{ContactFlowModuleId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Content != null && { Content: input.Content }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactFlowModuleMetadataCommand = async (
  input: UpdateContactFlowModuleMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowModuleId",
    () => input.ContactFlowModuleId!,
    "{ContactFlowModuleId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.State != null && { State: input.State }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactFlowNameCommand = async (
  input: UpdateContactFlowNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact-flows/{InstanceId}/{ContactFlowId}/name";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ContactFlowId",
    () => input.ContactFlowId!,
    "{ContactFlowId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateContactScheduleCommand = async (
  input: UpdateContactScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/schedule";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ScheduledTime != null && { ScheduledTime: Math.round(input.ScheduledTime.getTime() / 1000) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateHoursOfOperationCommand = async (
  input: UpdateHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/hours-of-operations/{InstanceId}/{HoursOfOperationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HoursOfOperationId",
    () => input.HoursOfOperationId!,
    "{HoursOfOperationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Config != null && { Config: serializeAws_restJson1HoursOfOperationConfigList(input.Config, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TimeZone != null && { TimeZone: input.TimeZone }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateInstanceAttributeCommand = async (
  input: UpdateInstanceAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/attribute/{AttributeType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttributeType",
    () => input.AttributeType!,
    "{AttributeType}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Value != null && { Value: input.Value }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateInstanceStorageConfigCommand = async (
  input: UpdateInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/storage-config/{AssociationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssociationId",
    () => input.AssociationId!,
    "{AssociationId}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.StorageConfig != null && {
      StorageConfig: serializeAws_restJson1InstanceStorageConfig(input.StorageConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateParticipantRoleConfigCommand = async (
  input: UpdateParticipantRoleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/contact/participant-role-config/{InstanceId}/{ContactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelConfiguration != null && {
      ChannelConfiguration: serializeAws_restJson1UpdateParticipantRoleConfigChannelInfo(
        input.ChannelConfiguration,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number/{PhoneNumberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateQueueHoursOfOperationCommand = async (
  input: UpdateQueueHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/queues/{InstanceId}/{QueueId}/hours-of-operation";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.HoursOfOperationId != null && { HoursOfOperationId: input.HoursOfOperationId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateQueueMaxContactsCommand = async (
  input: UpdateQueueMaxContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/queues/{InstanceId}/{QueueId}/max-contacts";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MaxContacts != null && { MaxContacts: input.MaxContacts }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateQueueNameCommand = async (
  input: UpdateQueueNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/queues/{InstanceId}/{QueueId}/name";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = async (
  input: UpdateQueueOutboundCallerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/queues/{InstanceId}/{QueueId}/outbound-caller-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.OutboundCallerConfig != null && {
      OutboundCallerConfig: serializeAws_restJson1OutboundCallerConfig(input.OutboundCallerConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateQueueStatusCommand = async (
  input: UpdateQueueStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/queues/{InstanceId}/{QueueId}/status";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Status != null && { Status: input.Status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateQuickConnectConfigCommand = async (
  input: UpdateQuickConnectConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/quick-connects/{InstanceId}/{QuickConnectId}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "QuickConnectId",
    () => input.QuickConnectId!,
    "{QuickConnectId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.QuickConnectConfig != null && {
      QuickConnectConfig: serializeAws_restJson1QuickConnectConfig(input.QuickConnectConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateQuickConnectNameCommand = async (
  input: UpdateQuickConnectNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/quick-connects/{InstanceId}/{QuickConnectId}/name";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "QuickConnectId",
    () => input.QuickConnectId!,
    "{QuickConnectId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = async (
  input: UpdateRoutingProfileConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.MediaConcurrencies != null && {
      MediaConcurrencies: serializeAws_restJson1MediaConcurrencies(input.MediaConcurrencies, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = async (
  input: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultOutboundQueueId != null && { DefaultOutboundQueueId: input.DefaultOutboundQueueId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRoutingProfileNameCommand = async (
  input: UpdateRoutingProfileNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}/name";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRoutingProfileQueuesCommand = async (
  input: UpdateRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RoutingProfileId",
    () => input.RoutingProfileId!,
    "{RoutingProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.QueueConfigs != null && {
      QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{InstanceId}/{RuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "RuleId", () => input.RuleId!, "{RuleId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Actions != null && { Actions: serializeAws_restJson1RuleActions(input.Actions, context) }),
    ...(input.Function != null && { Function: input.Function }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PublishStatus != null && { PublishStatus: input.PublishStatus }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSecurityProfileCommand = async (
  input: UpdateSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/security-profiles/{InstanceId}/{SecurityProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SecurityProfileId",
    () => input.SecurityProfileId!,
    "{SecurityProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedAccessControlTags != null && {
      AllowedAccessControlTags: serializeAws_restJson1AllowedAccessControlTags(input.AllowedAccessControlTags, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1PermissionsList(input.Permissions, context),
    }),
    ...(input.TagRestrictedResources != null && {
      TagRestrictedResources: serializeAws_restJson1TagRestrictedResourceList(input.TagRestrictedResources, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateTaskTemplateCommand = async (
  input: UpdateTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/instance/{InstanceId}/task/template/{TaskTemplateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TaskTemplateId",
    () => input.TaskTemplateId!,
    "{TaskTemplateId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Constraints != null && {
      Constraints: serializeAws_restJson1TaskTemplateConstraints(input.Constraints, context),
    }),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Defaults != null && { Defaults: serializeAws_restJson1TaskTemplateDefaults(input.Defaults, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Fields != null && { Fields: serializeAws_restJson1TaskTemplateFields(input.Fields, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Status != null && { Status: input.Status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateTrafficDistributionCommand = async (
  input: UpdateTrafficDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/traffic-distribution/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.TelephonyConfig != null && {
      TelephonyConfig: serializeAws_restJson1TelephonyConfig(input.TelephonyConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserHierarchyCommand = async (
  input: UpdateUserHierarchyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users/{InstanceId}/{UserId}/hierarchy";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.HierarchyGroupId != null && { HierarchyGroupId: input.HierarchyGroupId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserHierarchyGroupNameCommand = async (
  input: UpdateUserHierarchyGroupNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HierarchyGroupId",
    () => input.HierarchyGroupId!,
    "{HierarchyGroupId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserHierarchyStructureCommand = async (
  input: UpdateUserHierarchyStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user-hierarchy-structure/{InstanceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.HierarchyStructure != null && {
      HierarchyStructure: serializeAws_restJson1HierarchyStructureUpdate(input.HierarchyStructure, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserIdentityInfoCommand = async (
  input: UpdateUserIdentityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/users/{InstanceId}/{UserId}/identity-info";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityInfo != null && {
      IdentityInfo: serializeAws_restJson1UserIdentityInfo(input.IdentityInfo, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserPhoneConfigCommand = async (
  input: UpdateUserPhoneConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users/{InstanceId}/{UserId}/phone-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.PhoneConfig != null && {
      PhoneConfig: serializeAws_restJson1UserPhoneConfig(input.PhoneConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserRoutingProfileCommand = async (
  input: UpdateUserRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/users/{InstanceId}/{UserId}/routing-profile";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.RoutingProfileId != null && { RoutingProfileId: input.RoutingProfileId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserSecurityProfilesCommand = async (
  input: UpdateUserSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/users/{InstanceId}/{UserId}/security-profiles";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.SecurityProfileIds != null && {
      SecurityProfileIds: serializeAws_restJson1SecurityProfileIds(input.SecurityProfileIds, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AssociateApprovedOriginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApprovedOriginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateApprovedOriginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateApprovedOriginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApprovedOriginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateDefaultVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDefaultVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateDefaultVocabularyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateDefaultVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDefaultVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateInstanceStorageConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociationId != null) {
    contents.AssociationId = __expectString(data.AssociationId);
  }
  return contents;
};

const deserializeAws_restJson1AssociateInstanceStorageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateInstanceStorageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateLambdaFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLambdaFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateLambdaFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateLambdaFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLambdaFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateLexBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLexBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateLexBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateLexBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLexBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociatePhoneNumberContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociatePhoneNumberContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociatePhoneNumberContactFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberContactFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateQueueQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateQueueQuickConnectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQueueQuickConnectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateRoutingProfileQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoutingProfileQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateSecurityKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSecurityKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateSecurityKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociationId != null) {
    contents.AssociationId = __expectString(data.AssociationId);
  }
  return contents;
};

const deserializeAws_restJson1AssociateSecurityKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSecurityKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ClaimPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ClaimPhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberArn != null) {
    contents.PhoneNumberArn = __expectString(data.PhoneNumberArn);
  }
  if (data.PhoneNumberId != null) {
    contents.PhoneNumberId = __expectString(data.PhoneNumberId);
  }
  return contents;
};

const deserializeAws_restJson1ClaimPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimPhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await deserializeAws_restJson1IdempotencyExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAgentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AgentStatusARN != null) {
    contents.AgentStatusARN = __expectString(data.AgentStatusARN);
  }
  if (data.AgentStatusId != null) {
    contents.AgentStatusId = __expectString(data.AgentStatusId);
  }
  return contents;
};

const deserializeAws_restJson1CreateAgentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlowArn != null) {
    contents.ContactFlowArn = __expectString(data.ContactFlowArn);
  }
  if (data.ContactFlowId != null) {
    contents.ContactFlowId = __expectString(data.ContactFlowId);
  }
  return contents;
};

const deserializeAws_restJson1CreateContactFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidContactFlowException":
    case "com.amazonaws.connect#InvalidContactFlowException":
      throw await deserializeAws_restJson1InvalidContactFlowExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateContactFlowModuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

const deserializeAws_restJson1CreateContactFlowModuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowModuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await deserializeAws_restJson1IdempotencyExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidContactFlowModuleException":
    case "com.amazonaws.connect#InvalidContactFlowModuleException":
      throw await deserializeAws_restJson1InvalidContactFlowModuleExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HoursOfOperationArn != null) {
    contents.HoursOfOperationArn = __expectString(data.HoursOfOperationArn);
  }
  if (data.HoursOfOperationId != null) {
    contents.HoursOfOperationId = __expectString(data.HoursOfOperationId);
  }
  return contents;
};

const deserializeAws_restJson1CreateHoursOfOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHoursOfOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

const deserializeAws_restJson1CreateInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateIntegrationAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IntegrationAssociationArn != null) {
    contents.IntegrationAssociationArn = __expectString(data.IntegrationAssociationArn);
  }
  if (data.IntegrationAssociationId != null) {
    contents.IntegrationAssociationId = __expectString(data.IntegrationAssociationId);
  }
  return contents;
};

const deserializeAws_restJson1CreateIntegrationAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.QueueArn != null) {
    contents.QueueArn = __expectString(data.QueueArn);
  }
  if (data.QueueId != null) {
    contents.QueueId = __expectString(data.QueueId);
  }
  return contents;
};

const deserializeAws_restJson1CreateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateQuickConnectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.QuickConnectARN != null) {
    contents.QuickConnectARN = __expectString(data.QuickConnectARN);
  }
  if (data.QuickConnectId != null) {
    contents.QuickConnectId = __expectString(data.QuickConnectId);
  }
  return contents;
};

const deserializeAws_restJson1CreateQuickConnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuickConnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRoutingProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RoutingProfileArn != null) {
    contents.RoutingProfileArn = __expectString(data.RoutingProfileArn);
  }
  if (data.RoutingProfileId != null) {
    contents.RoutingProfileId = __expectString(data.RoutingProfileId);
  }
  return contents;
};

const deserializeAws_restJson1CreateRoutingProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoutingProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RuleArn != null) {
    contents.RuleArn = __expectString(data.RuleArn);
  }
  if (data.RuleId != null) {
    contents.RuleId = __expectString(data.RuleId);
  }
  return contents;
};

const deserializeAws_restJson1CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSecurityProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SecurityProfileArn != null) {
    contents.SecurityProfileArn = __expectString(data.SecurityProfileArn);
  }
  if (data.SecurityProfileId != null) {
    contents.SecurityProfileId = __expectString(data.SecurityProfileId);
  }
  return contents;
};

const deserializeAws_restJson1CreateSecurityProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTaskTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

const deserializeAws_restJson1CreateTaskTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "PropertyValidationException":
    case "com.amazonaws.connect#PropertyValidationException":
      throw await deserializeAws_restJson1PropertyValidationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTrafficDistributionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

const deserializeAws_restJson1CreateTrafficDistributionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficDistributionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.connect#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateUseCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUseCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUseCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UseCaseArn != null) {
    contents.UseCaseArn = __expectString(data.UseCaseArn);
  }
  if (data.UseCaseId != null) {
    contents.UseCaseId = __expectString(data.UseCaseId);
  }
  return contents;
};

const deserializeAws_restJson1CreateUseCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUseCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UserArn != null) {
    contents.UserArn = __expectString(data.UserArn);
  }
  if (data.UserId != null) {
    contents.UserId = __expectString(data.UserId);
  }
  return contents;
};

const deserializeAws_restJson1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserHierarchyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HierarchyGroupArn != null) {
    contents.HierarchyGroupArn = __expectString(data.HierarchyGroupArn);
  }
  if (data.HierarchyGroupId != null) {
    contents.HierarchyGroupId = __expectString(data.HierarchyGroupId);
  }
  return contents;
};

const deserializeAws_restJson1CreateUserHierarchyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserHierarchyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVocabularyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.VocabularyArn != null) {
    contents.VocabularyArn = __expectString(data.VocabularyArn);
  }
  if (data.VocabularyId != null) {
    contents.VocabularyId = __expectString(data.VocabularyId);
  }
  return contents;
};

const deserializeAws_restJson1CreateVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteContactFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteContactFlowModuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteContactFlowModuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowModuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteHoursOfOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHoursOfOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteIntegrationAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIntegrationAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteQuickConnectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteQuickConnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuickConnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSecurityProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSecurityProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTaskTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteTaskTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTrafficDistributionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteTrafficDistributionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficDistributionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUseCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUseCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUseCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUseCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUseCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserHierarchyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUserHierarchyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserHierarchyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVocabularyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.VocabularyArn != null) {
    contents.VocabularyArn = __expectString(data.VocabularyArn);
  }
  if (data.VocabularyId != null) {
    contents.VocabularyId = __expectString(data.VocabularyId);
  }
  return contents;
};

const deserializeAws_restJson1DeleteVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAgentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AgentStatus != null) {
    contents.AgentStatus = deserializeAws_restJson1AgentStatus(data.AgentStatus, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAgentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Contact != null) {
    contents.Contact = deserializeAws_restJson1Contact(data.Contact, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlow != null) {
    contents.ContactFlow = deserializeAws_restJson1ContactFlow(data.ContactFlow, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeContactFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContactFlowNotPublishedException":
    case "com.amazonaws.connect#ContactFlowNotPublishedException":
      throw await deserializeAws_restJson1ContactFlowNotPublishedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeContactFlowModuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlowModule != null) {
    contents.ContactFlowModule = deserializeAws_restJson1ContactFlowModule(data.ContactFlowModule, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeContactFlowModuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowModuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HoursOfOperation != null) {
    contents.HoursOfOperation = deserializeAws_restJson1HoursOfOperation(data.HoursOfOperation, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeHoursOfOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHoursOfOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Instance != null) {
    contents.Instance = deserializeAws_restJson1Instance(data.Instance, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeInstanceAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInstanceAttributeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attribute != null) {
    contents.Attribute = deserializeAws_restJson1Attribute(data.Attribute, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeInstanceAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInstanceStorageConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StorageConfig != null) {
    contents.StorageConfig = deserializeAws_restJson1InstanceStorageConfig(data.StorageConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeInstanceStorageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceStorageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ClaimedPhoneNumberSummary != null) {
    contents.ClaimedPhoneNumberSummary = deserializeAws_restJson1ClaimedPhoneNumberSummary(
      data.ClaimedPhoneNumberSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Queue != null) {
    contents.Queue = deserializeAws_restJson1Queue(data.Queue, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeQuickConnectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.QuickConnect != null) {
    contents.QuickConnect = deserializeAws_restJson1QuickConnect(data.QuickConnect, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeQuickConnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuickConnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRoutingProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RoutingProfile != null) {
    contents.RoutingProfile = deserializeAws_restJson1RoutingProfile(data.RoutingProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRoutingProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRoutingProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Rule != null) {
    contents.Rule = deserializeAws_restJson1Rule(data.Rule, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSecurityProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SecurityProfile != null) {
    contents.SecurityProfile = deserializeAws_restJson1SecurityProfile(data.SecurityProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSecurityProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTrafficDistributionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TrafficDistributionGroup != null) {
    contents.TrafficDistributionGroup = deserializeAws_restJson1TrafficDistributionGroup(
      data.TrafficDistributionGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeTrafficDistributionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficDistributionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUserHierarchyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HierarchyGroup != null) {
    contents.HierarchyGroup = deserializeAws_restJson1HierarchyGroup(data.HierarchyGroup, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeUserHierarchyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeUserHierarchyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUserHierarchyStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HierarchyStructure != null) {
    contents.HierarchyStructure = deserializeAws_restJson1HierarchyStructure(data.HierarchyStructure, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeUserHierarchyStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVocabularyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Vocabulary != null) {
    contents.Vocabulary = deserializeAws_restJson1Vocabulary(data.Vocabulary, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateApprovedOriginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApprovedOriginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateApprovedOriginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateApprovedOriginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApprovedOriginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateInstanceStorageConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateInstanceStorageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateInstanceStorageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateLambdaFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLambdaFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateLambdaFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateLambdaFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLambdaFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateLexBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLexBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateLexBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateLexBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLexBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberContactFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateQueueQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateQueueQuickConnectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQueueQuickConnectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateRoutingProfileQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoutingProfileQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateSecurityKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSecurityKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateSecurityKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateSecurityKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSecurityKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DismissUserContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DismissUserContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DismissUserContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DismissUserContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DismissUserContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetContactAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = deserializeAws_restJson1Attributes(data.Attributes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetContactAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetCurrentMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCurrentMetricDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateTotalCount != null) {
    contents.ApproximateTotalCount = __expectLong(data.ApproximateTotalCount);
  }
  if (data.DataSnapshotTime != null) {
    contents.DataSnapshotTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.DataSnapshotTime)));
  }
  if (data.MetricResults != null) {
    contents.MetricResults = deserializeAws_restJson1CurrentMetricResults(data.MetricResults, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetCurrentMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetCurrentUserDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCurrentUserDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateTotalCount != null) {
    contents.ApproximateTotalCount = __expectLong(data.ApproximateTotalCount);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UserDataList != null) {
    contents.UserDataList = deserializeAws_restJson1UserDataList(data.UserDataList, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCurrentUserDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetFederationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFederationTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Credentials != null) {
    contents.Credentials = deserializeAws_restJson1Credentials(data.Credentials, context);
  }
  if (data.SignInUrl != null) {
    contents.SignInUrl = __expectString(data.SignInUrl);
  }
  if (data.UserArn != null) {
    contents.UserArn = __expectString(data.UserArn);
  }
  if (data.UserId != null) {
    contents.UserId = __expectString(data.UserId);
  }
  return contents;
};

const deserializeAws_restJson1GetFederationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.connect#UserNotFoundException":
      throw await deserializeAws_restJson1UserNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMetricDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricResults != null) {
    contents.MetricResults = deserializeAws_restJson1HistoricalMetricResults(data.MetricResults, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTaskTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Constraints != null) {
    contents.Constraints = deserializeAws_restJson1TaskTemplateConstraints(data.Constraints, context);
  }
  if (data.ContactFlowId != null) {
    contents.ContactFlowId = __expectString(data.ContactFlowId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Defaults != null) {
    contents.Defaults = deserializeAws_restJson1TaskTemplateDefaults(data.Defaults, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Fields != null) {
    contents.Fields = deserializeAws_restJson1TaskTemplateFields(data.Fields, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.InstanceId != null) {
    contents.InstanceId = __expectString(data.InstanceId);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTaskTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetTrafficDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTrafficDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.TelephonyConfig != null) {
    contents.TelephonyConfig = deserializeAws_restJson1TelephonyConfig(data.TelephonyConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTrafficDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAgentStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentStatusesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAgentStatusesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AgentStatusSummaryList != null) {
    contents.AgentStatusSummaryList = deserializeAws_restJson1AgentStatusSummaryList(
      data.AgentStatusSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAgentStatusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentStatusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListApprovedOriginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovedOriginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApprovedOriginsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Origins != null) {
    contents.Origins = deserializeAws_restJson1OriginsList(data.Origins, context);
  }
  return contents;
};

const deserializeAws_restJson1ListApprovedOriginsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovedOriginsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LexBots != null) {
    contents.LexBots = deserializeAws_restJson1LexBotConfigList(data.LexBots, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListContactFlowModulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowModulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContactFlowModulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlowModulesSummaryList != null) {
    contents.ContactFlowModulesSummaryList = deserializeAws_restJson1ContactFlowModulesSummaryList(
      data.ContactFlowModulesSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListContactFlowModulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowModulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListContactFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContactFlowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlowSummaryList != null) {
    contents.ContactFlowSummaryList = deserializeAws_restJson1ContactFlowSummaryList(
      data.ContactFlowSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListContactFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListContactReferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactReferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContactReferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReferenceSummaryList != null) {
    contents.ReferenceSummaryList = deserializeAws_restJson1ReferenceSummaryList(data.ReferenceSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListContactReferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactReferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDefaultVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDefaultVocabulariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDefaultVocabulariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DefaultVocabularyList != null) {
    contents.DefaultVocabularyList = deserializeAws_restJson1DefaultVocabularyList(data.DefaultVocabularyList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDefaultVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDefaultVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListHoursOfOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHoursOfOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListHoursOfOperationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HoursOfOperationSummaryList != null) {
    contents.HoursOfOperationSummaryList = deserializeAws_restJson1HoursOfOperationSummaryList(
      data.HoursOfOperationSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListHoursOfOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHoursOfOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListInstanceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInstanceAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = deserializeAws_restJson1AttributesList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInstanceAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceSummaryList != null) {
    contents.InstanceSummaryList = deserializeAws_restJson1InstanceSummaryList(data.InstanceSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListInstanceStorageConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceStorageConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInstanceStorageConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StorageConfigs != null) {
    contents.StorageConfigs = deserializeAws_restJson1InstanceStorageConfigs(data.StorageConfigs, context);
  }
  return contents;
};

const deserializeAws_restJson1ListInstanceStorageConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceStorageConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListIntegrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIntegrationAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IntegrationAssociationSummaryList != null) {
    contents.IntegrationAssociationSummaryList = deserializeAws_restJson1IntegrationAssociationSummaryList(
      data.IntegrationAssociationSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIntegrationAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListLambdaFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLambdaFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLambdaFunctionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LambdaFunctions != null) {
    contents.LambdaFunctions = deserializeAws_restJson1FunctionArnsList(data.LambdaFunctions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLambdaFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLambdaFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListLexBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLexBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LexBots != null) {
    contents.LexBots = deserializeAws_restJson1LexBotsList(data.LexBots, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLexBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPhoneNumbersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PhoneNumberSummaryList != null) {
    contents.PhoneNumberSummaryList = deserializeAws_restJson1PhoneNumberSummaryList(
      data.PhoneNumberSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListPhoneNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListPhoneNumbersV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPhoneNumbersV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ListPhoneNumbersSummaryList != null) {
    contents.ListPhoneNumbersSummaryList = deserializeAws_restJson1ListPhoneNumbersSummaryList(
      data.ListPhoneNumbersSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListPhoneNumbersV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListPromptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPromptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPromptsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PromptSummaryList != null) {
    contents.PromptSummaryList = deserializeAws_restJson1PromptSummaryList(data.PromptSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPromptsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPromptsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListQueueQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QuickConnectSummaryList != null) {
    contents.QuickConnectSummaryList = deserializeAws_restJson1QuickConnectSummaryList(
      data.QuickConnectSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListQueueQuickConnectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueQuickConnectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QueueSummaryList != null) {
    contents.QueueSummaryList = deserializeAws_restJson1QueueSummaryList(data.QueueSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QuickConnectSummaryList != null) {
    contents.QuickConnectSummaryList = deserializeAws_restJson1QuickConnectSummaryList(
      data.QuickConnectSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListQuickConnectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuickConnectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RoutingProfileQueueConfigSummaryList != null) {
    contents.RoutingProfileQueueConfigSummaryList = deserializeAws_restJson1RoutingProfileQueueConfigSummaryList(
      data.RoutingProfileQueueConfigSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRoutingProfileQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfileQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListRoutingProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRoutingProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RoutingProfileSummaryList != null) {
    contents.RoutingProfileSummaryList = deserializeAws_restJson1RoutingProfileSummaryList(
      data.RoutingProfileSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRoutingProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RuleSummaryList != null) {
    contents.RuleSummaryList = deserializeAws_restJson1RuleSummaryList(data.RuleSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSecurityKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSecurityKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SecurityKeys != null) {
    contents.SecurityKeys = deserializeAws_restJson1SecurityKeysList(data.SecurityKeys, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSecurityKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSecurityProfilePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSecurityProfilePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1PermissionsList(data.Permissions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSecurityProfilePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSecurityProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SecurityProfileSummaryList != null) {
    contents.SecurityProfileSummaryList = deserializeAws_restJson1SecurityProfileSummaryList(
      data.SecurityProfileSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSecurityProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTaskTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTaskTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TaskTemplates != null) {
    contents.TaskTemplates = deserializeAws_restJson1TaskTemplateList(data.TaskTemplates, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTaskTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTrafficDistributionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficDistributionGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrafficDistributionGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TrafficDistributionGroupSummaryList != null) {
    contents.TrafficDistributionGroupSummaryList = deserializeAws_restJson1TrafficDistributionGroupSummaryList(
      data.TrafficDistributionGroupSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListTrafficDistributionGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficDistributionGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListUseCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUseCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUseCasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UseCaseSummaryList != null) {
    contents.UseCaseSummaryList = deserializeAws_restJson1UseCaseSummaryList(data.UseCaseSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListUseCasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUseCasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListUserHierarchyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUserHierarchyGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UserHierarchyGroupSummaryList != null) {
    contents.UserHierarchyGroupSummaryList = deserializeAws_restJson1HierarchyGroupSummaryList(
      data.UserHierarchyGroupSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListUserHierarchyGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UserSummaryList != null) {
    contents.UserSummaryList = deserializeAws_restJson1UserSummaryList(data.UserSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1MonitorContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MonitorContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MonitorContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactArn != null) {
    contents.ContactArn = __expectString(data.ContactArn);
  }
  if (data.ContactId != null) {
    contents.ContactId = __expectString(data.ContactId);
  }
  return contents;
};

const deserializeAws_restJson1MonitorContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MonitorContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await deserializeAws_restJson1IdempotencyExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutUserStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutUserStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutUserStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ReleasePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReleasePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ReleasePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await deserializeAws_restJson1IdempotencyExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ReplicateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReplicateInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

const deserializeAws_restJson1ReplicateInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.connect#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ResumeContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResumeContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ResumeContactRecordingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeContactRecordingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchAvailablePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchAvailablePhoneNumbersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailableNumbersList != null) {
    contents.AvailableNumbersList = deserializeAws_restJson1AvailableNumbersList(data.AvailableNumbersList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1SearchAvailablePhoneNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateTotalCount != null) {
    contents.ApproximateTotalCount = __expectLong(data.ApproximateTotalCount);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Queues != null) {
    contents.Queues = deserializeAws_restJson1QueueSearchSummaryList(data.Queues, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchRoutingProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoutingProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchRoutingProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateTotalCount != null) {
    contents.ApproximateTotalCount = __expectLong(data.ApproximateTotalCount);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RoutingProfiles != null) {
    contents.RoutingProfiles = deserializeAws_restJson1RoutingProfileList(data.RoutingProfiles, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchRoutingProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoutingProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchSecurityProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateTotalCount != null) {
    contents.ApproximateTotalCount = __expectLong(data.ApproximateTotalCount);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SecurityProfiles != null) {
    contents.SecurityProfiles = deserializeAws_restJson1SecurityProfilesSearchSummaryList(
      data.SecurityProfiles,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1SearchSecurityProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSecurityProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateTotalCount != null) {
    contents.ApproximateTotalCount = __expectLong(data.ApproximateTotalCount);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Users != null) {
    contents.Users = deserializeAws_restJson1UserSearchSummaryList(data.Users, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchVocabulariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchVocabulariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VocabularySummaryList != null) {
    contents.VocabularySummaryList = deserializeAws_restJson1VocabularySummaryList(data.VocabularySummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartChatContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChatContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartChatContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactId != null) {
    contents.ContactId = __expectString(data.ContactId);
  }
  if (data.ContinuedFromContactId != null) {
    contents.ContinuedFromContactId = __expectString(data.ContinuedFromContactId);
  }
  if (data.ParticipantId != null) {
    contents.ParticipantId = __expectString(data.ParticipantId);
  }
  if (data.ParticipantToken != null) {
    contents.ParticipantToken = __expectString(data.ParticipantToken);
  }
  return contents;
};

const deserializeAws_restJson1StartChatContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChatContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartContactRecordingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactRecordingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartContactStreamingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactStreamingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartContactStreamingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamingId != null) {
    contents.StreamingId = __expectString(data.StreamingId);
  }
  return contents;
};

const deserializeAws_restJson1StartContactStreamingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactStreamingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartOutboundVoiceContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundVoiceContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartOutboundVoiceContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactId != null) {
    contents.ContactId = __expectString(data.ContactId);
  }
  return contents;
};

const deserializeAws_restJson1StartOutboundVoiceContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundVoiceContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DestinationNotAllowedException":
    case "com.amazonaws.connect#DestinationNotAllowedException":
      throw await deserializeAws_restJson1DestinationNotAllowedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "OutboundContactNotPermittedException":
    case "com.amazonaws.connect#OutboundContactNotPermittedException":
      throw await deserializeAws_restJson1OutboundContactNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartTaskContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartTaskContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactId != null) {
    contents.ContactId = __expectString(data.ContactId);
  }
  return contents;
};

const deserializeAws_restJson1StartTaskContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContactNotFoundException":
    case "com.amazonaws.connect#ContactNotFoundException":
      throw await deserializeAws_restJson1ContactNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopContactRecordingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactRecordingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopContactStreamingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactStreamingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopContactStreamingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopContactStreamingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactStreamingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SuspendContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SuspendContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1SuspendContactRecordingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendContactRecordingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TransferContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TransferContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactArn != null) {
    contents.ContactArn = __expectString(data.ContactArn);
  }
  if (data.ContactId != null) {
    contents.ContactId = __expectString(data.ContactId);
  }
  return contents;
};

const deserializeAws_restJson1TransferContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await deserializeAws_restJson1IdempotencyExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAgentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateAgentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactFlowContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactFlowContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactFlowContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidContactFlowException":
    case "com.amazonaws.connect#InvalidContactFlowException":
      throw await deserializeAws_restJson1InvalidContactFlowExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactFlowMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactFlowMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactFlowMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactFlowModuleContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactFlowModuleContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactFlowModuleContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidContactFlowModuleException":
    case "com.amazonaws.connect#InvalidContactFlowModuleException":
      throw await deserializeAws_restJson1InvalidContactFlowModuleExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactFlowModuleMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactFlowModuleMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactFlowModuleMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactFlowNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactFlowNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactFlowNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateContactScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateContactScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateContactScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateHoursOfOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHoursOfOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateInstanceAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInstanceAttributeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateInstanceAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInstanceStorageConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateInstanceStorageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceStorageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateParticipantRoleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParticipantRoleConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateParticipantRoleConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateParticipantRoleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParticipantRoleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberArn != null) {
    contents.PhoneNumberArn = __expectString(data.PhoneNumberArn);
  }
  if (data.PhoneNumberId != null) {
    contents.PhoneNumberId = __expectString(data.PhoneNumberId);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await deserializeAws_restJson1IdempotencyExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateQueueHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQueueHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateQueueHoursOfOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueHoursOfOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateQueueMaxContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueMaxContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQueueMaxContactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateQueueMaxContactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueMaxContactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateQueueNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQueueNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateQueueNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueOutboundCallerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueOutboundCallerConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateQueueStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQueueStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateQueueStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateQuickConnectConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQuickConnectConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateQuickConnectConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateQuickConnectNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQuickConnectNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateQuickConnectNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRoutingProfileNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRoutingProfileNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateRoutingProfileNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateRoutingProfileQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSecurityProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateSecurityProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTaskTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Constraints != null) {
    contents.Constraints = deserializeAws_restJson1TaskTemplateConstraints(data.Constraints, context);
  }
  if (data.ContactFlowId != null) {
    contents.ContactFlowId = __expectString(data.ContactFlowId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Defaults != null) {
    contents.Defaults = deserializeAws_restJson1TaskTemplateDefaults(data.Defaults, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Fields != null) {
    contents.Fields = deserializeAws_restJson1TaskTemplateFields(data.Fields, context);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.InstanceId != null) {
    contents.InstanceId = __expectString(data.InstanceId);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1UpdateTaskTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "PropertyValidationException":
    case "com.amazonaws.connect#PropertyValidationException":
      throw await deserializeAws_restJson1PropertyValidationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateTrafficDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTrafficDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateTrafficDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserHierarchyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserHierarchyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserHierarchyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyGroupNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserHierarchyGroupNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserHierarchyGroupNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyGroupNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserHierarchyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserHierarchyStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserHierarchyStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserIdentityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserIdentityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserIdentityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserIdentityInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserIdentityInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserPhoneConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPhoneConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserPhoneConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserPhoneConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPhoneConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserRoutingProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserRoutingProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserRoutingProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserSecurityProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserSecurityProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSecurityProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ContactFlowNotPublishedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContactFlowNotPublishedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ContactFlowNotPublishedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ContactNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContactNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ContactNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DestinationNotAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DestinationNotAllowedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DestinationNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DuplicateResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateResourceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DuplicateResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IdempotencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IdempotencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidContactFlowExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContactFlowException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.problems != null) {
    contents.problems = deserializeAws_restJson1Problems(data.problems, context);
  }
  const exception = new InvalidContactFlowException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidContactFlowModuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContactFlowModuleException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Problems != null) {
    contents.Problems = deserializeAws_restJson1Problems(data.Problems, context);
  }
  const exception = new InvalidContactFlowModuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1OutboundContactNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutboundContactNotPermittedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new OutboundContactNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PropertyValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PropertyValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.PropertyList != null) {
    contents.PropertyList = deserializeAws_restJson1PropertyValidationExceptionPropertyList(data.PropertyList, context);
  }
  const exception = new PropertyValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UserNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UserNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AgentsMinOneMaxHundred = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AllowedAccessControlTags = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1AllowedMonitorCapabilities = (
  input: (MonitorCapability | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AnswerMachineDetectionConfig = (
  input: AnswerMachineDetectionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwaitAnswerMachinePrompt != null && { AwaitAnswerMachinePrompt: input.AwaitAnswerMachinePrompt }),
    ...(input.EnableAnswerMachineDetection != null && {
      EnableAnswerMachineDetection: input.EnableAnswerMachineDetection,
    }),
  };
};

const serializeAws_restJson1AssignContactCategoryActionDefinition = (
  input: AssignContactCategoryActionDefinition,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1Attributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Channels = (input: (Channel | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ChatMessage = (input: ChatMessage, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
  };
};

const serializeAws_restJson1ChatParticipantRoleConfig = (
  input: ChatParticipantRoleConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParticipantTimerConfigList != null && {
      ParticipantTimerConfigList: serializeAws_restJson1ParticipantTimerConfigList(
        input.ParticipantTimerConfigList,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ChatStreamingConfiguration = (
  input: ChatStreamingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamingEndpointArn != null && { StreamingEndpointArn: input.StreamingEndpointArn }),
  };
};

const serializeAws_restJson1ContactFilter = (input: ContactFilter, context: __SerdeContext): any => {
  return {
    ...(input.ContactStates != null && {
      ContactStates: serializeAws_restJson1ContactStates(input.ContactStates, context),
    }),
  };
};

const serializeAws_restJson1ContactReferences = (input: Record<string, Reference>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Reference(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ContactStates = (input: (ContactState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ControlPlaneTagFilter = (input: ControlPlaneTagFilter, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && {
      AndConditions: serializeAws_restJson1TagAndConditionList(input.AndConditions, context),
    }),
    ...(input.OrConditions != null && {
      OrConditions: serializeAws_restJson1TagOrConditionList(input.OrConditions, context),
    }),
    ...(input.TagCondition != null && {
      TagCondition: serializeAws_restJson1TagCondition(input.TagCondition, context),
    }),
  };
};

const serializeAws_restJson1CurrentMetric = (input: CurrentMetric, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

const serializeAws_restJson1CurrentMetrics = (input: CurrentMetric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CurrentMetric(entry, context);
    });
};

const serializeAws_restJson1CurrentMetricSortCriteria = (
  input: CurrentMetricSortCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.SortByMetric != null && { SortByMetric: input.SortByMetric }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_restJson1CurrentMetricSortCriteriaMaxOne = (
  input: CurrentMetricSortCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CurrentMetricSortCriteria(entry, context);
    });
};

const serializeAws_restJson1Distribution = (input: Distribution, context: __SerdeContext): any => {
  return {
    ...(input.Percentage != null && { Percentage: input.Percentage }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

const serializeAws_restJson1DistributionList = (input: Distribution[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Distribution(entry, context);
    });
};

const serializeAws_restJson1EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_restJson1EventBridgeActionDefinition = (
  input: EventBridgeActionDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1Filters = (input: Filters, context: __SerdeContext): any => {
  return {
    ...(input.Channels != null && { Channels: serializeAws_restJson1Channels(input.Channels, context) }),
    ...(input.Queues != null && { Queues: serializeAws_restJson1Queues(input.Queues, context) }),
    ...(input.RoutingProfiles != null && {
      RoutingProfiles: serializeAws_restJson1RoutingProfiles(input.RoutingProfiles, context),
    }),
  };
};

const serializeAws_restJson1Groupings = (input: (Grouping | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1HierarchyGroupCondition = (
  input: HierarchyGroupCondition,
  context: __SerdeContext
): any => {
  return {
    ...(input.HierarchyGroupMatchType != null && { HierarchyGroupMatchType: input.HierarchyGroupMatchType }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1HierarchyLevelUpdate = (input: HierarchyLevelUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1HierarchyStructureUpdate = (
  input: HierarchyStructureUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.LevelFive != null && { LevelFive: serializeAws_restJson1HierarchyLevelUpdate(input.LevelFive, context) }),
    ...(input.LevelFour != null && { LevelFour: serializeAws_restJson1HierarchyLevelUpdate(input.LevelFour, context) }),
    ...(input.LevelOne != null && { LevelOne: serializeAws_restJson1HierarchyLevelUpdate(input.LevelOne, context) }),
    ...(input.LevelThree != null && {
      LevelThree: serializeAws_restJson1HierarchyLevelUpdate(input.LevelThree, context),
    }),
    ...(input.LevelTwo != null && { LevelTwo: serializeAws_restJson1HierarchyLevelUpdate(input.LevelTwo, context) }),
  };
};

const serializeAws_restJson1HistoricalMetric = (input: HistoricalMetric, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Threshold != null && { Threshold: serializeAws_restJson1Threshold(input.Threshold, context) }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

const serializeAws_restJson1HistoricalMetrics = (input: HistoricalMetric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HistoricalMetric(entry, context);
    });
};

const serializeAws_restJson1HoursOfOperationConfig = (input: HoursOfOperationConfig, context: __SerdeContext): any => {
  return {
    ...(input.Day != null && { Day: input.Day }),
    ...(input.EndTime != null && { EndTime: serializeAws_restJson1HoursOfOperationTimeSlice(input.EndTime, context) }),
    ...(input.StartTime != null && {
      StartTime: serializeAws_restJson1HoursOfOperationTimeSlice(input.StartTime, context),
    }),
  };
};

const serializeAws_restJson1HoursOfOperationConfigList = (
  input: HoursOfOperationConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HoursOfOperationConfig(entry, context);
    });
};

const serializeAws_restJson1HoursOfOperationTimeSlice = (
  input: HoursOfOperationTimeSlice,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hours != null && { Hours: input.Hours }),
    ...(input.Minutes != null && { Minutes: input.Minutes }),
  };
};

const serializeAws_restJson1InstanceStorageConfig = (input: InstanceStorageConfig, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.KinesisFirehoseConfig != null && {
      KinesisFirehoseConfig: serializeAws_restJson1KinesisFirehoseConfig(input.KinesisFirehoseConfig, context),
    }),
    ...(input.KinesisStreamConfig != null && {
      KinesisStreamConfig: serializeAws_restJson1KinesisStreamConfig(input.KinesisStreamConfig, context),
    }),
    ...(input.KinesisVideoStreamConfig != null && {
      KinesisVideoStreamConfig: serializeAws_restJson1KinesisVideoStreamConfig(input.KinesisVideoStreamConfig, context),
    }),
    ...(input.S3Config != null && { S3Config: serializeAws_restJson1S3Config(input.S3Config, context) }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
  };
};

const serializeAws_restJson1InvisibleFieldInfo = (input: InvisibleFieldInfo, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: serializeAws_restJson1TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

const serializeAws_restJson1InvisibleTaskTemplateFields = (
  input: InvisibleFieldInfo[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InvisibleFieldInfo(entry, context);
    });
};

const serializeAws_restJson1KinesisFirehoseConfig = (input: KinesisFirehoseConfig, context: __SerdeContext): any => {
  return {
    ...(input.FirehoseArn != null && { FirehoseArn: input.FirehoseArn }),
  };
};

const serializeAws_restJson1KinesisStreamConfig = (input: KinesisStreamConfig, context: __SerdeContext): any => {
  return {
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

const serializeAws_restJson1KinesisVideoStreamConfig = (
  input: KinesisVideoStreamConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfig != null && {
      EncryptionConfig: serializeAws_restJson1EncryptionConfig(input.EncryptionConfig, context),
    }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
  };
};

const serializeAws_restJson1LexBot = (input: LexBot, context: __SerdeContext): any => {
  return {
    ...(input.LexRegion != null && { LexRegion: input.LexRegion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1LexV2Bot = (input: LexV2Bot, context: __SerdeContext): any => {
  return {
    ...(input.AliasArn != null && { AliasArn: input.AliasArn }),
  };
};

const serializeAws_restJson1MediaConcurrencies = (input: MediaConcurrency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MediaConcurrency(entry, context);
    });
};

const serializeAws_restJson1MediaConcurrency = (input: MediaConcurrency, context: __SerdeContext): any => {
  return {
    ...(input.Channel != null && { Channel: input.Channel }),
    ...(input.Concurrency != null && { Concurrency: input.Concurrency }),
  };
};

const serializeAws_restJson1NotificationRecipientType = (
  input: NotificationRecipientType,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserIds != null && { UserIds: serializeAws_restJson1UserIdList(input.UserIds, context) }),
    ...(input.UserTags != null && { UserTags: serializeAws_restJson1UserTagMap(input.UserTags, context) }),
  };
};

const serializeAws_restJson1OutboundCallerConfig = (input: OutboundCallerConfig, context: __SerdeContext): any => {
  return {
    ...(input.OutboundCallerIdName != null && { OutboundCallerIdName: input.OutboundCallerIdName }),
    ...(input.OutboundCallerIdNumberId != null && { OutboundCallerIdNumberId: input.OutboundCallerIdNumberId }),
    ...(input.OutboundFlowId != null && { OutboundFlowId: input.OutboundFlowId }),
  };
};

const serializeAws_restJson1ParticipantDetails = (input: ParticipantDetails, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
  };
};

const serializeAws_restJson1ParticipantTimerConfigList = (
  input: ParticipantTimerConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ParticipantTimerConfiguration(entry, context);
    });
};

const serializeAws_restJson1ParticipantTimerConfiguration = (
  input: ParticipantTimerConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
    ...(input.TimerType != null && { TimerType: input.TimerType }),
    ...(input.TimerValue != null && {
      TimerValue: serializeAws_restJson1ParticipantTimerValue(input.TimerValue, context),
    }),
  };
};

const serializeAws_restJson1ParticipantTimerValue = (input: ParticipantTimerValue, context: __SerdeContext): any => {
  return ParticipantTimerValue.visit(input, {
    ParticipantTimerAction: (value) => ({ ParticipantTimerAction: value }),
    ParticipantTimerDurationInMinutes: (value) => ({ ParticipantTimerDurationInMinutes: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1PermissionsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1PersistentChat = (input: PersistentChat, context: __SerdeContext): any => {
  return {
    ...(input.RehydrationType != null && { RehydrationType: input.RehydrationType }),
    ...(input.SourceContactId != null && { SourceContactId: input.SourceContactId }),
  };
};

const serializeAws_restJson1PhoneNumberCountryCodes = (
  input: (PhoneNumberCountryCode | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1PhoneNumberQuickConnectConfig = (
  input: PhoneNumberQuickConnectConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
  };
};

const serializeAws_restJson1PhoneNumberTypes = (input: (PhoneNumberType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1QueueQuickConnectConfig = (
  input: QueueQuickConnectConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.QueueId != null && { QueueId: input.QueueId }),
  };
};

const serializeAws_restJson1Queues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1QueueSearchConditionList = (input: QueueSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1QueueSearchCriteria(entry, context);
    });
};

const serializeAws_restJson1QueueSearchCriteria = (input: QueueSearchCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && {
      AndConditions: serializeAws_restJson1QueueSearchConditionList(input.AndConditions, context),
    }),
    ...(input.OrConditions != null && {
      OrConditions: serializeAws_restJson1QueueSearchConditionList(input.OrConditions, context),
    }),
    ...(input.QueueTypeCondition != null && { QueueTypeCondition: input.QueueTypeCondition }),
    ...(input.StringCondition != null && {
      StringCondition: serializeAws_restJson1StringCondition(input.StringCondition, context),
    }),
  };
};

const serializeAws_restJson1QueueSearchFilter = (input: QueueSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.TagFilter != null && {
      TagFilter: serializeAws_restJson1ControlPlaneTagFilter(input.TagFilter, context),
    }),
  };
};

const serializeAws_restJson1QuickConnectConfig = (input: QuickConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.PhoneConfig != null && {
      PhoneConfig: serializeAws_restJson1PhoneNumberQuickConnectConfig(input.PhoneConfig, context),
    }),
    ...(input.QueueConfig != null && {
      QueueConfig: serializeAws_restJson1QueueQuickConnectConfig(input.QueueConfig, context),
    }),
    ...(input.QuickConnectType != null && { QuickConnectType: input.QuickConnectType }),
    ...(input.UserConfig != null && {
      UserConfig: serializeAws_restJson1UserQuickConnectConfig(input.UserConfig, context),
    }),
  };
};

const serializeAws_restJson1QuickConnectsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ReadOnlyFieldInfo = (input: ReadOnlyFieldInfo, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: serializeAws_restJson1TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

const serializeAws_restJson1ReadOnlyTaskTemplateFields = (input: ReadOnlyFieldInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ReadOnlyFieldInfo(entry, context);
    });
};

const serializeAws_restJson1Reference = (input: Reference, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1RequiredFieldInfo = (input: RequiredFieldInfo, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: serializeAws_restJson1TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

const serializeAws_restJson1RequiredTaskTemplateFields = (input: RequiredFieldInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RequiredFieldInfo(entry, context);
    });
};

const serializeAws_restJson1RoutingProfileQueueConfig = (
  input: RoutingProfileQueueConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Delay != null && { Delay: input.Delay }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.QueueReference != null && {
      QueueReference: serializeAws_restJson1RoutingProfileQueueReference(input.QueueReference, context),
    }),
  };
};

const serializeAws_restJson1RoutingProfileQueueConfigList = (
  input: RoutingProfileQueueConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RoutingProfileQueueConfig(entry, context);
    });
};

const serializeAws_restJson1RoutingProfileQueueReference = (
  input: RoutingProfileQueueReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.Channel != null && { Channel: input.Channel }),
    ...(input.QueueId != null && { QueueId: input.QueueId }),
  };
};

const serializeAws_restJson1RoutingProfileQueueReferenceList = (
  input: RoutingProfileQueueReference[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RoutingProfileQueueReference(entry, context);
    });
};

const serializeAws_restJson1RoutingProfiles = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RoutingProfileSearchConditionList = (
  input: RoutingProfileSearchCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RoutingProfileSearchCriteria(entry, context);
    });
};

const serializeAws_restJson1RoutingProfileSearchCriteria = (
  input: RoutingProfileSearchCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.AndConditions != null && {
      AndConditions: serializeAws_restJson1RoutingProfileSearchConditionList(input.AndConditions, context),
    }),
    ...(input.OrConditions != null && {
      OrConditions: serializeAws_restJson1RoutingProfileSearchConditionList(input.OrConditions, context),
    }),
    ...(input.StringCondition != null && {
      StringCondition: serializeAws_restJson1StringCondition(input.StringCondition, context),
    }),
  };
};

const serializeAws_restJson1RoutingProfileSearchFilter = (
  input: RoutingProfileSearchFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.TagFilter != null && {
      TagFilter: serializeAws_restJson1ControlPlaneTagFilter(input.TagFilter, context),
    }),
  };
};

const serializeAws_restJson1RuleAction = (input: RuleAction, context: __SerdeContext): any => {
  return {
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.AssignContactCategoryAction != null && {
      AssignContactCategoryAction: serializeAws_restJson1AssignContactCategoryActionDefinition(
        input.AssignContactCategoryAction,
        context
      ),
    }),
    ...(input.EventBridgeAction != null && {
      EventBridgeAction: serializeAws_restJson1EventBridgeActionDefinition(input.EventBridgeAction, context),
    }),
    ...(input.SendNotificationAction != null && {
      SendNotificationAction: serializeAws_restJson1SendNotificationActionDefinition(
        input.SendNotificationAction,
        context
      ),
    }),
    ...(input.TaskAction != null && {
      TaskAction: serializeAws_restJson1TaskActionDefinition(input.TaskAction, context),
    }),
  };
};

const serializeAws_restJson1RuleActions = (input: RuleAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleAction(entry, context);
    });
};

const serializeAws_restJson1RuleTriggerEventSource = (input: RuleTriggerEventSource, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceName != null && { EventSourceName: input.EventSourceName }),
    ...(input.IntegrationAssociationId != null && { IntegrationAssociationId: input.IntegrationAssociationId }),
  };
};

const serializeAws_restJson1S3Config = (input: S3Config, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.BucketPrefix != null && { BucketPrefix: input.BucketPrefix }),
    ...(input.EncryptionConfig != null && {
      EncryptionConfig: serializeAws_restJson1EncryptionConfig(input.EncryptionConfig, context),
    }),
  };
};

const serializeAws_restJson1SecurityProfileIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SecurityProfileSearchConditionList = (
  input: SecurityProfileSearchCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SecurityProfileSearchCriteria(entry, context);
    });
};

const serializeAws_restJson1SecurityProfileSearchCriteria = (
  input: SecurityProfileSearchCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.AndConditions != null && {
      AndConditions: serializeAws_restJson1SecurityProfileSearchConditionList(input.AndConditions, context),
    }),
    ...(input.OrConditions != null && {
      OrConditions: serializeAws_restJson1SecurityProfileSearchConditionList(input.OrConditions, context),
    }),
    ...(input.StringCondition != null && {
      StringCondition: serializeAws_restJson1StringCondition(input.StringCondition, context),
    }),
  };
};

const serializeAws_restJson1SecurityProfilesSearchFilter = (
  input: SecurityProfilesSearchFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.TagFilter != null && {
      TagFilter: serializeAws_restJson1ControlPlaneTagFilter(input.TagFilter, context),
    }),
  };
};

const serializeAws_restJson1SendNotificationActionDefinition = (
  input: SendNotificationActionDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.DeliveryMethod != null && { DeliveryMethod: input.DeliveryMethod }),
    ...(input.Recipient != null && {
      Recipient: serializeAws_restJson1NotificationRecipientType(input.Recipient, context),
    }),
    ...(input.Subject != null && { Subject: input.Subject }),
  };
};

const serializeAws_restJson1SingleSelectOptions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StringCondition = (input: StringCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonType != null && { ComparisonType: input.ComparisonType }),
    ...(input.FieldName != null && { FieldName: input.FieldName }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1SupportedMessagingContentTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagAndConditionList = (input: TagCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TagCondition(entry, context);
    });
};

const serializeAws_restJson1TagCondition = (input: TagCondition, context: __SerdeContext): any => {
  return {
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValue != null && { TagValue: input.TagValue }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TagOrConditionList = (input: TagCondition[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TagAndConditionList(entry, context);
    });
};

const serializeAws_restJson1TagRestrictedResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TaskActionDefinition = (input: TaskActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.References != null && { References: serializeAws_restJson1ContactReferences(input.References, context) }),
  };
};

const serializeAws_restJson1TaskTemplateConstraints = (
  input: TaskTemplateConstraints,
  context: __SerdeContext
): any => {
  return {
    ...(input.InvisibleFields != null && {
      InvisibleFields: serializeAws_restJson1InvisibleTaskTemplateFields(input.InvisibleFields, context),
    }),
    ...(input.ReadOnlyFields != null && {
      ReadOnlyFields: serializeAws_restJson1ReadOnlyTaskTemplateFields(input.ReadOnlyFields, context),
    }),
    ...(input.RequiredFields != null && {
      RequiredFields: serializeAws_restJson1RequiredTaskTemplateFields(input.RequiredFields, context),
    }),
  };
};

const serializeAws_restJson1TaskTemplateDefaultFieldValue = (
  input: TaskTemplateDefaultFieldValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultValue != null && { DefaultValue: input.DefaultValue }),
    ...(input.Id != null && { Id: serializeAws_restJson1TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

const serializeAws_restJson1TaskTemplateDefaultFieldValueList = (
  input: TaskTemplateDefaultFieldValue[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TaskTemplateDefaultFieldValue(entry, context);
    });
};

const serializeAws_restJson1TaskTemplateDefaults = (input: TaskTemplateDefaults, context: __SerdeContext): any => {
  return {
    ...(input.DefaultFieldValues != null && {
      DefaultFieldValues: serializeAws_restJson1TaskTemplateDefaultFieldValueList(input.DefaultFieldValues, context),
    }),
  };
};

const serializeAws_restJson1TaskTemplateField = (input: TaskTemplateField, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: serializeAws_restJson1TaskTemplateFieldIdentifier(input.Id, context) }),
    ...(input.SingleSelectOptions != null && {
      SingleSelectOptions: serializeAws_restJson1SingleSelectOptions(input.SingleSelectOptions, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1TaskTemplateFieldIdentifier = (
  input: TaskTemplateFieldIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1TaskTemplateFields = (input: TaskTemplateField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TaskTemplateField(entry, context);
    });
};

const serializeAws_restJson1TelephonyConfig = (input: TelephonyConfig, context: __SerdeContext): any => {
  return {
    ...(input.Distributions != null && {
      Distributions: serializeAws_restJson1DistributionList(input.Distributions, context),
    }),
  };
};

const serializeAws_restJson1Threshold = (input: Threshold, context: __SerdeContext): any => {
  return {
    ...(input.Comparison != null && { Comparison: input.Comparison }),
    ...(input.ThresholdValue != null && { ThresholdValue: __serializeFloat(input.ThresholdValue) }),
  };
};

const serializeAws_restJson1UpdateParticipantRoleConfigChannelInfo = (
  input: UpdateParticipantRoleConfigChannelInfo,
  context: __SerdeContext
): any => {
  return UpdateParticipantRoleConfigChannelInfo.visit(input, {
    Chat: (value) => ({ Chat: serializeAws_restJson1ChatParticipantRoleConfig(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1UserDataFilters = (input: UserDataFilters, context: __SerdeContext): any => {
  return {
    ...(input.Agents != null && { Agents: serializeAws_restJson1AgentsMinOneMaxHundred(input.Agents, context) }),
    ...(input.ContactFilter != null && {
      ContactFilter: serializeAws_restJson1ContactFilter(input.ContactFilter, context),
    }),
    ...(input.Queues != null && { Queues: serializeAws_restJson1Queues(input.Queues, context) }),
    ...(input.RoutingProfiles != null && {
      RoutingProfiles: serializeAws_restJson1RoutingProfiles(input.RoutingProfiles, context),
    }),
    ...(input.UserHierarchyGroups != null && {
      UserHierarchyGroups: serializeAws_restJson1UserDataHierarchyGroups(input.UserHierarchyGroups, context),
    }),
  };
};

const serializeAws_restJson1UserDataHierarchyGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1UserIdentityInfo = (input: UserIdentityInfo, context: __SerdeContext): any => {
  return {
    ...(input.Email != null && { Email: input.Email }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.Mobile != null && { Mobile: input.Mobile }),
    ...(input.SecondaryEmail != null && { SecondaryEmail: input.SecondaryEmail }),
  };
};

const serializeAws_restJson1UserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1UserPhoneConfig = (input: UserPhoneConfig, context: __SerdeContext): any => {
  return {
    ...(input.AfterContactWorkTimeLimit != null && { AfterContactWorkTimeLimit: input.AfterContactWorkTimeLimit }),
    ...(input.AutoAccept != null && { AutoAccept: input.AutoAccept }),
    ...(input.DeskPhoneNumber != null && { DeskPhoneNumber: input.DeskPhoneNumber }),
    ...(input.PhoneType != null && { PhoneType: input.PhoneType }),
  };
};

const serializeAws_restJson1UserQuickConnectConfig = (input: UserQuickConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_restJson1UserSearchConditionList = (input: UserSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UserSearchCriteria(entry, context);
    });
};

const serializeAws_restJson1UserSearchCriteria = (input: UserSearchCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && {
      AndConditions: serializeAws_restJson1UserSearchConditionList(input.AndConditions, context),
    }),
    ...(input.HierarchyGroupCondition != null && {
      HierarchyGroupCondition: serializeAws_restJson1HierarchyGroupCondition(input.HierarchyGroupCondition, context),
    }),
    ...(input.OrConditions != null && {
      OrConditions: serializeAws_restJson1UserSearchConditionList(input.OrConditions, context),
    }),
    ...(input.StringCondition != null && {
      StringCondition: serializeAws_restJson1StringCondition(input.StringCondition, context),
    }),
  };
};

const serializeAws_restJson1UserSearchFilter = (input: UserSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.TagFilter != null && {
      TagFilter: serializeAws_restJson1ControlPlaneTagFilter(input.TagFilter, context),
    }),
  };
};

const serializeAws_restJson1UserTagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1VoiceRecordingConfiguration = (
  input: VoiceRecordingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.VoiceRecordingTrack != null && { VoiceRecordingTrack: input.VoiceRecordingTrack }),
  };
};

const deserializeAws_restJson1ActionSummaries = (output: any, context: __SerdeContext): ActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ActionSummary = (output: any, context: __SerdeContext): ActionSummary => {
  return {
    ActionType: __expectString(output.ActionType),
  } as any;
};

const deserializeAws_restJson1AgentContactReference = (output: any, context: __SerdeContext): AgentContactReference => {
  return {
    AgentContactState: __expectString(output.AgentContactState),
    Channel: __expectString(output.Channel),
    ConnectedToAgentTimestamp:
      output.ConnectedToAgentTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConnectedToAgentTimestamp)))
        : undefined,
    ContactId: __expectString(output.ContactId),
    InitiationMethod: __expectString(output.InitiationMethod),
    Queue: output.Queue != null ? deserializeAws_restJson1QueueReference(output.Queue, context) : undefined,
    StateStartTimestamp:
      output.StateStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StateStartTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AgentContactReferenceList = (
  output: any,
  context: __SerdeContext
): AgentContactReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AgentContactReference(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AgentInfo = (output: any, context: __SerdeContext): AgentInfo => {
  return {
    ConnectedToAgentTimestamp:
      output.ConnectedToAgentTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConnectedToAgentTimestamp)))
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1AgentStatus = (output: any, context: __SerdeContext): AgentStatus => {
  return {
    AgentStatusARN: __expectString(output.AgentStatusARN),
    AgentStatusId: __expectString(output.AgentStatusId),
    Description: __expectString(output.Description),
    DisplayOrder: __expectInt32(output.DisplayOrder),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AgentStatusReference = (output: any, context: __SerdeContext): AgentStatusReference => {
  return {
    StatusArn: __expectString(output.StatusArn),
    StatusName: __expectString(output.StatusName),
    StatusStartTimestamp:
      output.StatusStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StatusStartTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AgentStatusSummary = (output: any, context: __SerdeContext): AgentStatusSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AgentStatusSummaryList = (output: any, context: __SerdeContext): AgentStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AgentStatusSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AllowedAccessControlTags = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AssignContactCategoryActionDefinition = (
  output: any,
  context: __SerdeContext
): AssignContactCategoryActionDefinition => {
  return {} as any;
};

const deserializeAws_restJson1AttachmentReference = (output: any, context: __SerdeContext): AttachmentReference => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    AttributeType: __expectString(output.AttributeType),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1Attributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AttributesList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Attribute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AvailableNumbersList = (
  output: any,
  context: __SerdeContext
): AvailableNumberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AvailableNumberSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AvailableNumberSummary = (
  output: any,
  context: __SerdeContext
): AvailableNumberSummary => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberType: __expectString(output.PhoneNumberType),
  } as any;
};

const deserializeAws_restJson1ChannelToCountMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [Channel | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ClaimedPhoneNumberSummary = (
  output: any,
  context: __SerdeContext
): ClaimedPhoneNumberSummary => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberDescription: __expectString(output.PhoneNumberDescription),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    PhoneNumberStatus:
      output.PhoneNumberStatus != null
        ? deserializeAws_restJson1PhoneNumberStatus(output.PhoneNumberStatus, context)
        : undefined,
    PhoneNumberType: __expectString(output.PhoneNumberType),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

const deserializeAws_restJson1Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    AgentInfo: output.AgentInfo != null ? deserializeAws_restJson1AgentInfo(output.AgentInfo, context) : undefined,
    Arn: __expectString(output.Arn),
    Channel: __expectString(output.Channel),
    Description: __expectString(output.Description),
    DisconnectTimestamp:
      output.DisconnectTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisconnectTimestamp)))
        : undefined,
    Id: __expectString(output.Id),
    InitialContactId: __expectString(output.InitialContactId),
    InitiationMethod: __expectString(output.InitiationMethod),
    InitiationTimestamp:
      output.InitiationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InitiationTimestamp)))
        : undefined,
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    PreviousContactId: __expectString(output.PreviousContactId),
    QueueInfo: output.QueueInfo != null ? deserializeAws_restJson1QueueInfo(output.QueueInfo, context) : undefined,
    RelatedContactId: __expectString(output.RelatedContactId),
    ScheduledTimestamp:
      output.ScheduledTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScheduledTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContactFlow = (output: any, context: __SerdeContext): ContactFlow => {
  return {
    Arn: __expectString(output.Arn),
    Content: __expectString(output.Content),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ContactFlowModule = (output: any, context: __SerdeContext): ContactFlowModule => {
  return {
    Arn: __expectString(output.Arn),
    Content: __expectString(output.Content),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ContactFlowModulesSummaryList = (
  output: any,
  context: __SerdeContext
): ContactFlowModuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ContactFlowModuleSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ContactFlowModuleSummary = (
  output: any,
  context: __SerdeContext
): ContactFlowModuleSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ContactFlowSummary = (output: any, context: __SerdeContext): ContactFlowSummary => {
  return {
    Arn: __expectString(output.Arn),
    ContactFlowState: __expectString(output.ContactFlowState),
    ContactFlowType: __expectString(output.ContactFlowType),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ContactFlowSummaryList = (output: any, context: __SerdeContext): ContactFlowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ContactFlowSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ContactReferences = (output: any, context: __SerdeContext): Record<string, Reference> => {
  return Object.entries(output).reduce((acc: Record<string, Reference>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Reference(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Credentials = (output: any, context: __SerdeContext): Credentials => {
  return {
    AccessToken: __expectString(output.AccessToken),
    AccessTokenExpiration:
      output.AccessTokenExpiration != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AccessTokenExpiration)))
        : undefined,
    RefreshToken: __expectString(output.RefreshToken),
    RefreshTokenExpiration:
      output.RefreshTokenExpiration != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RefreshTokenExpiration)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1CurrentMetric = (output: any, context: __SerdeContext): CurrentMetric => {
  return {
    Name: __expectString(output.Name),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_restJson1CurrentMetricData = (output: any, context: __SerdeContext): CurrentMetricData => {
  return {
    Metric: output.Metric != null ? deserializeAws_restJson1CurrentMetric(output.Metric, context) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_restJson1CurrentMetricDataCollections = (
  output: any,
  context: __SerdeContext
): CurrentMetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CurrentMetricData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CurrentMetricResult = (output: any, context: __SerdeContext): CurrentMetricResult => {
  return {
    Collections:
      output.Collections != null
        ? deserializeAws_restJson1CurrentMetricDataCollections(output.Collections, context)
        : undefined,
    Dimensions: output.Dimensions != null ? deserializeAws_restJson1Dimensions(output.Dimensions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CurrentMetricResults = (output: any, context: __SerdeContext): CurrentMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CurrentMetricResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DateReference = (output: any, context: __SerdeContext): DateReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1DefaultVocabulary = (output: any, context: __SerdeContext): DefaultVocabulary => {
  return {
    InstanceId: __expectString(output.InstanceId),
    LanguageCode: __expectString(output.LanguageCode),
    VocabularyId: __expectString(output.VocabularyId),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

const deserializeAws_restJson1DefaultVocabularyList = (output: any, context: __SerdeContext): DefaultVocabulary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DefaultVocabulary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Dimensions = (output: any, context: __SerdeContext): Dimensions => {
  return {
    Channel: __expectString(output.Channel),
    Queue: output.Queue != null ? deserializeAws_restJson1QueueReference(output.Queue, context) : undefined,
    RoutingProfile:
      output.RoutingProfile != null
        ? deserializeAws_restJson1RoutingProfileReference(output.RoutingProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Distribution = (output: any, context: __SerdeContext): Distribution => {
  return {
    Percentage: __expectInt32(output.Percentage),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_restJson1DistributionList = (output: any, context: __SerdeContext): Distribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Distribution(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EmailReference = (output: any, context: __SerdeContext): EmailReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    KeyId: __expectString(output.KeyId),
  } as any;
};

const deserializeAws_restJson1EventBridgeActionDefinition = (
  output: any,
  context: __SerdeContext
): EventBridgeActionDefinition => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1FunctionArnsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1HierarchyGroup = (output: any, context: __SerdeContext): HierarchyGroup => {
  return {
    Arn: __expectString(output.Arn),
    HierarchyPath:
      output.HierarchyPath != null ? deserializeAws_restJson1HierarchyPath(output.HierarchyPath, context) : undefined,
    Id: __expectString(output.Id),
    LevelId: __expectString(output.LevelId),
    Name: __expectString(output.Name),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HierarchyGroupSummary = (output: any, context: __SerdeContext): HierarchyGroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1HierarchyGroupSummaryList = (
  output: any,
  context: __SerdeContext
): HierarchyGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HierarchyGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HierarchyGroupSummaryReference = (
  output: any,
  context: __SerdeContext
): HierarchyGroupSummaryReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1HierarchyLevel = (output: any, context: __SerdeContext): HierarchyLevel => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1HierarchyPath = (output: any, context: __SerdeContext): HierarchyPath => {
  return {
    LevelFive:
      output.LevelFive != null ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelFive, context) : undefined,
    LevelFour:
      output.LevelFour != null ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelFour, context) : undefined,
    LevelOne:
      output.LevelOne != null ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelOne, context) : undefined,
    LevelThree:
      output.LevelThree != null ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelThree, context) : undefined,
    LevelTwo:
      output.LevelTwo != null ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelTwo, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HierarchyPathReference = (
  output: any,
  context: __SerdeContext
): HierarchyPathReference => {
  return {
    LevelFive:
      output.LevelFive != null
        ? deserializeAws_restJson1HierarchyGroupSummaryReference(output.LevelFive, context)
        : undefined,
    LevelFour:
      output.LevelFour != null
        ? deserializeAws_restJson1HierarchyGroupSummaryReference(output.LevelFour, context)
        : undefined,
    LevelOne:
      output.LevelOne != null
        ? deserializeAws_restJson1HierarchyGroupSummaryReference(output.LevelOne, context)
        : undefined,
    LevelThree:
      output.LevelThree != null
        ? deserializeAws_restJson1HierarchyGroupSummaryReference(output.LevelThree, context)
        : undefined,
    LevelTwo:
      output.LevelTwo != null
        ? deserializeAws_restJson1HierarchyGroupSummaryReference(output.LevelTwo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HierarchyStructure = (output: any, context: __SerdeContext): HierarchyStructure => {
  return {
    LevelFive: output.LevelFive != null ? deserializeAws_restJson1HierarchyLevel(output.LevelFive, context) : undefined,
    LevelFour: output.LevelFour != null ? deserializeAws_restJson1HierarchyLevel(output.LevelFour, context) : undefined,
    LevelOne: output.LevelOne != null ? deserializeAws_restJson1HierarchyLevel(output.LevelOne, context) : undefined,
    LevelThree:
      output.LevelThree != null ? deserializeAws_restJson1HierarchyLevel(output.LevelThree, context) : undefined,
    LevelTwo: output.LevelTwo != null ? deserializeAws_restJson1HierarchyLevel(output.LevelTwo, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HistoricalMetric = (output: any, context: __SerdeContext): HistoricalMetric => {
  return {
    Name: __expectString(output.Name),
    Statistic: __expectString(output.Statistic),
    Threshold: output.Threshold != null ? deserializeAws_restJson1Threshold(output.Threshold, context) : undefined,
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_restJson1HistoricalMetricData = (output: any, context: __SerdeContext): HistoricalMetricData => {
  return {
    Metric: output.Metric != null ? deserializeAws_restJson1HistoricalMetric(output.Metric, context) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_restJson1HistoricalMetricDataCollections = (
  output: any,
  context: __SerdeContext
): HistoricalMetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HistoricalMetricData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HistoricalMetricResult = (
  output: any,
  context: __SerdeContext
): HistoricalMetricResult => {
  return {
    Collections:
      output.Collections != null
        ? deserializeAws_restJson1HistoricalMetricDataCollections(output.Collections, context)
        : undefined,
    Dimensions: output.Dimensions != null ? deserializeAws_restJson1Dimensions(output.Dimensions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HistoricalMetricResults = (
  output: any,
  context: __SerdeContext
): HistoricalMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HistoricalMetricResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HoursOfOperation = (output: any, context: __SerdeContext): HoursOfOperation => {
  return {
    Config:
      output.Config != null ? deserializeAws_restJson1HoursOfOperationConfigList(output.Config, context) : undefined,
    Description: __expectString(output.Description),
    HoursOfOperationArn: __expectString(output.HoursOfOperationArn),
    HoursOfOperationId: __expectString(output.HoursOfOperationId),
    Name: __expectString(output.Name),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    TimeZone: __expectString(output.TimeZone),
  } as any;
};

const deserializeAws_restJson1HoursOfOperationConfig = (
  output: any,
  context: __SerdeContext
): HoursOfOperationConfig => {
  return {
    Day: __expectString(output.Day),
    EndTime:
      output.EndTime != null ? deserializeAws_restJson1HoursOfOperationTimeSlice(output.EndTime, context) : undefined,
    StartTime:
      output.StartTime != null
        ? deserializeAws_restJson1HoursOfOperationTimeSlice(output.StartTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HoursOfOperationConfigList = (
  output: any,
  context: __SerdeContext
): HoursOfOperationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HoursOfOperationConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HoursOfOperationSummary = (
  output: any,
  context: __SerdeContext
): HoursOfOperationSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1HoursOfOperationSummaryList = (
  output: any,
  context: __SerdeContext
): HoursOfOperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HoursOfOperationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HoursOfOperationTimeSlice = (
  output: any,
  context: __SerdeContext
): HoursOfOperationTimeSlice => {
  return {
    Hours: __expectInt32(output.Hours),
    Minutes: __expectInt32(output.Minutes),
  } as any;
};

const deserializeAws_restJson1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Id: __expectString(output.Id),
    IdentityManagementType: __expectString(output.IdentityManagementType),
    InboundCallsEnabled: __expectBoolean(output.InboundCallsEnabled),
    InstanceAlias: __expectString(output.InstanceAlias),
    InstanceStatus: __expectString(output.InstanceStatus),
    OutboundCallsEnabled: __expectBoolean(output.OutboundCallsEnabled),
    ServiceRole: __expectString(output.ServiceRole),
    StatusReason:
      output.StatusReason != null
        ? deserializeAws_restJson1InstanceStatusReason(output.StatusReason, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InstanceStatusReason = (output: any, context: __SerdeContext): InstanceStatusReason => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1InstanceStorageConfig = (output: any, context: __SerdeContext): InstanceStorageConfig => {
  return {
    AssociationId: __expectString(output.AssociationId),
    KinesisFirehoseConfig:
      output.KinesisFirehoseConfig != null
        ? deserializeAws_restJson1KinesisFirehoseConfig(output.KinesisFirehoseConfig, context)
        : undefined,
    KinesisStreamConfig:
      output.KinesisStreamConfig != null
        ? deserializeAws_restJson1KinesisStreamConfig(output.KinesisStreamConfig, context)
        : undefined,
    KinesisVideoStreamConfig:
      output.KinesisVideoStreamConfig != null
        ? deserializeAws_restJson1KinesisVideoStreamConfig(output.KinesisVideoStreamConfig, context)
        : undefined,
    S3Config: output.S3Config != null ? deserializeAws_restJson1S3Config(output.S3Config, context) : undefined,
    StorageType: __expectString(output.StorageType),
  } as any;
};

const deserializeAws_restJson1InstanceStorageConfigs = (
  output: any,
  context: __SerdeContext
): InstanceStorageConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceStorageConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Id: __expectString(output.Id),
    IdentityManagementType: __expectString(output.IdentityManagementType),
    InboundCallsEnabled: __expectBoolean(output.InboundCallsEnabled),
    InstanceAlias: __expectString(output.InstanceAlias),
    InstanceStatus: __expectString(output.InstanceStatus),
    OutboundCallsEnabled: __expectBoolean(output.OutboundCallsEnabled),
    ServiceRole: __expectString(output.ServiceRole),
  } as any;
};

const deserializeAws_restJson1InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IntegrationAssociationSummary = (
  output: any,
  context: __SerdeContext
): IntegrationAssociationSummary => {
  return {
    InstanceId: __expectString(output.InstanceId),
    IntegrationArn: __expectString(output.IntegrationArn),
    IntegrationAssociationArn: __expectString(output.IntegrationAssociationArn),
    IntegrationAssociationId: __expectString(output.IntegrationAssociationId),
    IntegrationType: __expectString(output.IntegrationType),
    SourceApplicationName: __expectString(output.SourceApplicationName),
    SourceApplicationUrl: __expectString(output.SourceApplicationUrl),
    SourceType: __expectString(output.SourceType),
  } as any;
};

const deserializeAws_restJson1IntegrationAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): IntegrationAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IntegrationAssociationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InvisibleFieldInfo = (output: any, context: __SerdeContext): InvisibleFieldInfo => {
  return {
    Id: output.Id != null ? deserializeAws_restJson1TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InvisibleTaskTemplateFields = (
  output: any,
  context: __SerdeContext
): InvisibleFieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InvisibleFieldInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1KinesisFirehoseConfig = (output: any, context: __SerdeContext): KinesisFirehoseConfig => {
  return {
    FirehoseArn: __expectString(output.FirehoseArn),
  } as any;
};

const deserializeAws_restJson1KinesisStreamConfig = (output: any, context: __SerdeContext): KinesisStreamConfig => {
  return {
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

const deserializeAws_restJson1KinesisVideoStreamConfig = (
  output: any,
  context: __SerdeContext
): KinesisVideoStreamConfig => {
  return {
    EncryptionConfig:
      output.EncryptionConfig != null
        ? deserializeAws_restJson1EncryptionConfig(output.EncryptionConfig, context)
        : undefined,
    Prefix: __expectString(output.Prefix),
    RetentionPeriodHours: __expectInt32(output.RetentionPeriodHours),
  } as any;
};

const deserializeAws_restJson1LexBot = (output: any, context: __SerdeContext): LexBot => {
  return {
    LexRegion: __expectString(output.LexRegion),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1LexBotConfig = (output: any, context: __SerdeContext): LexBotConfig => {
  return {
    LexBot: output.LexBot != null ? deserializeAws_restJson1LexBot(output.LexBot, context) : undefined,
    LexV2Bot: output.LexV2Bot != null ? deserializeAws_restJson1LexV2Bot(output.LexV2Bot, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LexBotConfigList = (output: any, context: __SerdeContext): LexBotConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LexBotConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LexBotsList = (output: any, context: __SerdeContext): LexBot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LexBot(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LexV2Bot = (output: any, context: __SerdeContext): LexV2Bot => {
  return {
    AliasArn: __expectString(output.AliasArn),
  } as any;
};

const deserializeAws_restJson1ListPhoneNumbersSummary = (
  output: any,
  context: __SerdeContext
): ListPhoneNumbersSummary => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    PhoneNumberType: __expectString(output.PhoneNumberType),
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

const deserializeAws_restJson1ListPhoneNumbersSummaryList = (
  output: any,
  context: __SerdeContext
): ListPhoneNumbersSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListPhoneNumbersSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MediaConcurrencies = (output: any, context: __SerdeContext): MediaConcurrency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaConcurrency(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MediaConcurrency = (output: any, context: __SerdeContext): MediaConcurrency => {
  return {
    Channel: __expectString(output.Channel),
    Concurrency: __expectInt32(output.Concurrency),
  } as any;
};

const deserializeAws_restJson1NotificationRecipientType = (
  output: any,
  context: __SerdeContext
): NotificationRecipientType => {
  return {
    UserIds: output.UserIds != null ? deserializeAws_restJson1UserIdList(output.UserIds, context) : undefined,
    UserTags: output.UserTags != null ? deserializeAws_restJson1UserTagMap(output.UserTags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NumberReference = (output: any, context: __SerdeContext): NumberReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1OriginsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1OutboundCallerConfig = (output: any, context: __SerdeContext): OutboundCallerConfig => {
  return {
    OutboundCallerIdName: __expectString(output.OutboundCallerIdName),
    OutboundCallerIdNumberId: __expectString(output.OutboundCallerIdNumberId),
    OutboundFlowId: __expectString(output.OutboundFlowId),
  } as any;
};

const deserializeAws_restJson1PermissionsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1PhoneNumberQuickConnectConfig = (
  output: any,
  context: __SerdeContext
): PhoneNumberQuickConnectConfig => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
  } as any;
};

const deserializeAws_restJson1PhoneNumberStatus = (output: any, context: __SerdeContext): PhoneNumberStatus => {
  return {
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1PhoneNumberSummary = (output: any, context: __SerdeContext): PhoneNumberSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberType: __expectString(output.PhoneNumberType),
  } as any;
};

const deserializeAws_restJson1PhoneNumberSummaryList = (output: any, context: __SerdeContext): PhoneNumberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhoneNumberSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProblemDetail = (output: any, context: __SerdeContext): ProblemDetail => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1Problems = (output: any, context: __SerdeContext): ProblemDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProblemDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PromptSummary = (output: any, context: __SerdeContext): PromptSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1PromptSummaryList = (output: any, context: __SerdeContext): PromptSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PromptSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PropertyValidationExceptionProperty = (
  output: any,
  context: __SerdeContext
): PropertyValidationExceptionProperty => {
  return {
    Message: __expectString(output.Message),
    PropertyPath: __expectString(output.PropertyPath),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1PropertyValidationExceptionPropertyList = (
  output: any,
  context: __SerdeContext
): PropertyValidationExceptionProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PropertyValidationExceptionProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Queue = (output: any, context: __SerdeContext): Queue => {
  return {
    Description: __expectString(output.Description),
    HoursOfOperationId: __expectString(output.HoursOfOperationId),
    MaxContacts: __expectInt32(output.MaxContacts),
    Name: __expectString(output.Name),
    OutboundCallerConfig:
      output.OutboundCallerConfig != null
        ? deserializeAws_restJson1OutboundCallerConfig(output.OutboundCallerConfig, context)
        : undefined,
    QueueArn: __expectString(output.QueueArn),
    QueueId: __expectString(output.QueueId),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1QueueInfo = (output: any, context: __SerdeContext): QueueInfo => {
  return {
    EnqueueTimestamp:
      output.EnqueueTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnqueueTimestamp)))
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1QueueQuickConnectConfig = (
  output: any,
  context: __SerdeContext
): QueueQuickConnectConfig => {
  return {
    ContactFlowId: __expectString(output.ContactFlowId),
    QueueId: __expectString(output.QueueId),
  } as any;
};

const deserializeAws_restJson1QueueReference = (output: any, context: __SerdeContext): QueueReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1QueueSearchSummaryList = (output: any, context: __SerdeContext): Queue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Queue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1QueueSummary = (output: any, context: __SerdeContext): QueueSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    QueueType: __expectString(output.QueueType),
  } as any;
};

const deserializeAws_restJson1QueueSummaryList = (output: any, context: __SerdeContext): QueueSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1QueueSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1QuickConnect = (output: any, context: __SerdeContext): QuickConnect => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    QuickConnectARN: __expectString(output.QuickConnectARN),
    QuickConnectConfig:
      output.QuickConnectConfig != null
        ? deserializeAws_restJson1QuickConnectConfig(output.QuickConnectConfig, context)
        : undefined,
    QuickConnectId: __expectString(output.QuickConnectId),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1QuickConnectConfig = (output: any, context: __SerdeContext): QuickConnectConfig => {
  return {
    PhoneConfig:
      output.PhoneConfig != null
        ? deserializeAws_restJson1PhoneNumberQuickConnectConfig(output.PhoneConfig, context)
        : undefined,
    QueueConfig:
      output.QueueConfig != null
        ? deserializeAws_restJson1QueueQuickConnectConfig(output.QueueConfig, context)
        : undefined,
    QuickConnectType: __expectString(output.QuickConnectType),
    UserConfig:
      output.UserConfig != null
        ? deserializeAws_restJson1UserQuickConnectConfig(output.UserConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1QuickConnectSummary = (output: any, context: __SerdeContext): QuickConnectSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    QuickConnectType: __expectString(output.QuickConnectType),
  } as any;
};

const deserializeAws_restJson1QuickConnectSummaryList = (
  output: any,
  context: __SerdeContext
): QuickConnectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1QuickConnectSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReadOnlyFieldInfo = (output: any, context: __SerdeContext): ReadOnlyFieldInfo => {
  return {
    Id: output.Id != null ? deserializeAws_restJson1TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ReadOnlyTaskTemplateFields = (
  output: any,
  context: __SerdeContext
): ReadOnlyFieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReadOnlyFieldInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Reference = (output: any, context: __SerdeContext): Reference => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ReferenceSummary = (output: any, context: __SerdeContext): ReferenceSummary => {
  if (output.Attachment != null) {
    return {
      Attachment: deserializeAws_restJson1AttachmentReference(output.Attachment, context),
    };
  }
  if (output.Date != null) {
    return {
      Date: deserializeAws_restJson1DateReference(output.Date, context),
    };
  }
  if (output.Email != null) {
    return {
      Email: deserializeAws_restJson1EmailReference(output.Email, context),
    };
  }
  if (output.Number != null) {
    return {
      Number: deserializeAws_restJson1NumberReference(output.Number, context),
    };
  }
  if (output.String != null) {
    return {
      String: deserializeAws_restJson1StringReference(output.String, context),
    };
  }
  if (output.Url != null) {
    return {
      Url: deserializeAws_restJson1UrlReference(output.Url, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ReferenceSummaryList = (output: any, context: __SerdeContext): ReferenceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReferenceSummary(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1RequiredFieldInfo = (output: any, context: __SerdeContext): RequiredFieldInfo => {
  return {
    Id: output.Id != null ? deserializeAws_restJson1TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RequiredTaskTemplateFields = (
  output: any,
  context: __SerdeContext
): RequiredFieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RequiredFieldInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RoutingProfile = (output: any, context: __SerdeContext): RoutingProfile => {
  return {
    DefaultOutboundQueueId: __expectString(output.DefaultOutboundQueueId),
    Description: __expectString(output.Description),
    InstanceId: __expectString(output.InstanceId),
    MediaConcurrencies:
      output.MediaConcurrencies != null
        ? deserializeAws_restJson1MediaConcurrencies(output.MediaConcurrencies, context)
        : undefined,
    Name: __expectString(output.Name),
    NumberOfAssociatedQueues: __expectLong(output.NumberOfAssociatedQueues),
    NumberOfAssociatedUsers: __expectLong(output.NumberOfAssociatedUsers),
    RoutingProfileArn: __expectString(output.RoutingProfileArn),
    RoutingProfileId: __expectString(output.RoutingProfileId),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RoutingProfileList = (output: any, context: __SerdeContext): RoutingProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RoutingProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RoutingProfileQueueConfigSummary = (
  output: any,
  context: __SerdeContext
): RoutingProfileQueueConfigSummary => {
  return {
    Channel: __expectString(output.Channel),
    Delay: __expectInt32(output.Delay),
    Priority: __expectInt32(output.Priority),
    QueueArn: __expectString(output.QueueArn),
    QueueId: __expectString(output.QueueId),
    QueueName: __expectString(output.QueueName),
  } as any;
};

const deserializeAws_restJson1RoutingProfileQueueConfigSummaryList = (
  output: any,
  context: __SerdeContext
): RoutingProfileQueueConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RoutingProfileQueueConfigSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RoutingProfileReference = (
  output: any,
  context: __SerdeContext
): RoutingProfileReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1RoutingProfileSummary = (output: any, context: __SerdeContext): RoutingProfileSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1RoutingProfileSummaryList = (
  output: any,
  context: __SerdeContext
): RoutingProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RoutingProfileSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Actions: output.Actions != null ? deserializeAws_restJson1RuleActions(output.Actions, context) : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Function: __expectString(output.Function),
    LastUpdatedBy: __expectString(output.LastUpdatedBy),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    PublishStatus: __expectString(output.PublishStatus),
    RuleArn: __expectString(output.RuleArn),
    RuleId: __expectString(output.RuleId),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    TriggerEventSource:
      output.TriggerEventSource != null
        ? deserializeAws_restJson1RuleTriggerEventSource(output.TriggerEventSource, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleAction = (output: any, context: __SerdeContext): RuleAction => {
  return {
    ActionType: __expectString(output.ActionType),
    AssignContactCategoryAction:
      output.AssignContactCategoryAction != null
        ? deserializeAws_restJson1AssignContactCategoryActionDefinition(output.AssignContactCategoryAction, context)
        : undefined,
    EventBridgeAction:
      output.EventBridgeAction != null
        ? deserializeAws_restJson1EventBridgeActionDefinition(output.EventBridgeAction, context)
        : undefined,
    SendNotificationAction:
      output.SendNotificationAction != null
        ? deserializeAws_restJson1SendNotificationActionDefinition(output.SendNotificationAction, context)
        : undefined,
    TaskAction:
      output.TaskAction != null ? deserializeAws_restJson1TaskActionDefinition(output.TaskAction, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuleActions = (output: any, context: __SerdeContext): RuleAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return {
    ActionSummaries:
      output.ActionSummaries != null
        ? deserializeAws_restJson1ActionSummaries(output.ActionSummaries, context)
        : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    EventSourceName: __expectString(output.EventSourceName),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    PublishStatus: __expectString(output.PublishStatus),
    RuleArn: __expectString(output.RuleArn),
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_restJson1RuleSummaryList = (output: any, context: __SerdeContext): RuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleTriggerEventSource = (
  output: any,
  context: __SerdeContext
): RuleTriggerEventSource => {
  return {
    EventSourceName: __expectString(output.EventSourceName),
    IntegrationAssociationId: __expectString(output.IntegrationAssociationId),
  } as any;
};

const deserializeAws_restJson1S3Config = (output: any, context: __SerdeContext): S3Config => {
  return {
    BucketName: __expectString(output.BucketName),
    BucketPrefix: __expectString(output.BucketPrefix),
    EncryptionConfig:
      output.EncryptionConfig != null
        ? deserializeAws_restJson1EncryptionConfig(output.EncryptionConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityKey = (output: any, context: __SerdeContext): SecurityKey => {
  return {
    AssociationId: __expectString(output.AssociationId),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1SecurityKeysList = (output: any, context: __SerdeContext): SecurityKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SecurityKey(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SecurityProfile = (output: any, context: __SerdeContext): SecurityProfile => {
  return {
    AllowedAccessControlTags:
      output.AllowedAccessControlTags != null
        ? deserializeAws_restJson1AllowedAccessControlTags(output.AllowedAccessControlTags, context)
        : undefined,
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    OrganizationResourceId: __expectString(output.OrganizationResourceId),
    SecurityProfileName: __expectString(output.SecurityProfileName),
    TagRestrictedResources:
      output.TagRestrictedResources != null
        ? deserializeAws_restJson1TagRestrictedResourceList(output.TagRestrictedResources, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityProfileIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SecurityProfileSearchSummary = (
  output: any,
  context: __SerdeContext
): SecurityProfileSearchSummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    OrganizationResourceId: __expectString(output.OrganizationResourceId),
    SecurityProfileName: __expectString(output.SecurityProfileName),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityProfilesSearchSummaryList = (
  output: any,
  context: __SerdeContext
): SecurityProfileSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SecurityProfileSearchSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SecurityProfileSummary = (
  output: any,
  context: __SerdeContext
): SecurityProfileSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1SecurityProfileSummaryList = (
  output: any,
  context: __SerdeContext
): SecurityProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SecurityProfileSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SendNotificationActionDefinition = (
  output: any,
  context: __SerdeContext
): SendNotificationActionDefinition => {
  return {
    Content: __expectString(output.Content),
    ContentType: __expectString(output.ContentType),
    DeliveryMethod: __expectString(output.DeliveryMethod),
    Recipient:
      output.Recipient != null
        ? deserializeAws_restJson1NotificationRecipientType(output.Recipient, context)
        : undefined,
    Subject: __expectString(output.Subject),
  } as any;
};

const deserializeAws_restJson1SingleSelectOptions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1StringReference = (output: any, context: __SerdeContext): StringReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TagRestrictedResourceList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1TaskActionDefinition = (output: any, context: __SerdeContext): TaskActionDefinition => {
  return {
    ContactFlowId: __expectString(output.ContactFlowId),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    References:
      output.References != null ? deserializeAws_restJson1ContactReferences(output.References, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TaskTemplateConstraints = (
  output: any,
  context: __SerdeContext
): TaskTemplateConstraints => {
  return {
    InvisibleFields:
      output.InvisibleFields != null
        ? deserializeAws_restJson1InvisibleTaskTemplateFields(output.InvisibleFields, context)
        : undefined,
    ReadOnlyFields:
      output.ReadOnlyFields != null
        ? deserializeAws_restJson1ReadOnlyTaskTemplateFields(output.ReadOnlyFields, context)
        : undefined,
    RequiredFields:
      output.RequiredFields != null
        ? deserializeAws_restJson1RequiredTaskTemplateFields(output.RequiredFields, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TaskTemplateDefaultFieldValue = (
  output: any,
  context: __SerdeContext
): TaskTemplateDefaultFieldValue => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Id: output.Id != null ? deserializeAws_restJson1TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TaskTemplateDefaultFieldValueList = (
  output: any,
  context: __SerdeContext
): TaskTemplateDefaultFieldValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TaskTemplateDefaultFieldValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TaskTemplateDefaults = (output: any, context: __SerdeContext): TaskTemplateDefaults => {
  return {
    DefaultFieldValues:
      output.DefaultFieldValues != null
        ? deserializeAws_restJson1TaskTemplateDefaultFieldValueList(output.DefaultFieldValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TaskTemplateField = (output: any, context: __SerdeContext): TaskTemplateField => {
  return {
    Description: __expectString(output.Description),
    Id: output.Id != null ? deserializeAws_restJson1TaskTemplateFieldIdentifier(output.Id, context) : undefined,
    SingleSelectOptions:
      output.SingleSelectOptions != null
        ? deserializeAws_restJson1SingleSelectOptions(output.SingleSelectOptions, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1TaskTemplateFieldIdentifier = (
  output: any,
  context: __SerdeContext
): TaskTemplateFieldIdentifier => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1TaskTemplateFields = (output: any, context: __SerdeContext): TaskTemplateField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TaskTemplateField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TaskTemplateList = (output: any, context: __SerdeContext): TaskTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TaskTemplateMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TaskTemplateMetadata = (output: any, context: __SerdeContext): TaskTemplateMetadata => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1TelephonyConfig = (output: any, context: __SerdeContext): TelephonyConfig => {
  return {
    Distributions:
      output.Distributions != null
        ? deserializeAws_restJson1DistributionList(output.Distributions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Threshold = (output: any, context: __SerdeContext): Threshold => {
  return {
    Comparison: __expectString(output.Comparison),
    ThresholdValue: __limitedParseDouble(output.ThresholdValue),
  } as any;
};

const deserializeAws_restJson1TrafficDistributionGroup = (
  output: any,
  context: __SerdeContext
): TrafficDistributionGroup => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    InstanceArn: __expectString(output.InstanceArn),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TrafficDistributionGroupSummary = (
  output: any,
  context: __SerdeContext
): TrafficDistributionGroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    InstanceArn: __expectString(output.InstanceArn),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1TrafficDistributionGroupSummaryList = (
  output: any,
  context: __SerdeContext
): TrafficDistributionGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TrafficDistributionGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UrlReference = (output: any, context: __SerdeContext): UrlReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1UseCase = (output: any, context: __SerdeContext): UseCase => {
  return {
    UseCaseArn: __expectString(output.UseCaseArn),
    UseCaseId: __expectString(output.UseCaseId),
    UseCaseType: __expectString(output.UseCaseType),
  } as any;
};

const deserializeAws_restJson1UseCaseSummaryList = (output: any, context: __SerdeContext): UseCase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UseCase(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1User = (output: any, context: __SerdeContext): User => {
  return {
    Arn: __expectString(output.Arn),
    DirectoryUserId: __expectString(output.DirectoryUserId),
    HierarchyGroupId: __expectString(output.HierarchyGroupId),
    Id: __expectString(output.Id),
    IdentityInfo:
      output.IdentityInfo != null ? deserializeAws_restJson1UserIdentityInfo(output.IdentityInfo, context) : undefined,
    PhoneConfig:
      output.PhoneConfig != null ? deserializeAws_restJson1UserPhoneConfig(output.PhoneConfig, context) : undefined,
    RoutingProfileId: __expectString(output.RoutingProfileId),
    SecurityProfileIds:
      output.SecurityProfileIds != null
        ? deserializeAws_restJson1SecurityProfileIds(output.SecurityProfileIds, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_restJson1UserData = (output: any, context: __SerdeContext): UserData => {
  return {
    ActiveSlotsByChannel:
      output.ActiveSlotsByChannel != null
        ? deserializeAws_restJson1ChannelToCountMap(output.ActiveSlotsByChannel, context)
        : undefined,
    AvailableSlotsByChannel:
      output.AvailableSlotsByChannel != null
        ? deserializeAws_restJson1ChannelToCountMap(output.AvailableSlotsByChannel, context)
        : undefined,
    Contacts:
      output.Contacts != null ? deserializeAws_restJson1AgentContactReferenceList(output.Contacts, context) : undefined,
    HierarchyPath:
      output.HierarchyPath != null
        ? deserializeAws_restJson1HierarchyPathReference(output.HierarchyPath, context)
        : undefined,
    MaxSlotsByChannel:
      output.MaxSlotsByChannel != null
        ? deserializeAws_restJson1ChannelToCountMap(output.MaxSlotsByChannel, context)
        : undefined,
    NextStatus: __expectString(output.NextStatus),
    RoutingProfile:
      output.RoutingProfile != null
        ? deserializeAws_restJson1RoutingProfileReference(output.RoutingProfile, context)
        : undefined,
    Status: output.Status != null ? deserializeAws_restJson1AgentStatusReference(output.Status, context) : undefined,
    User: output.User != null ? deserializeAws_restJson1UserReference(output.User, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UserDataList = (output: any, context: __SerdeContext): UserData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserIdentityInfo = (output: any, context: __SerdeContext): UserIdentityInfo => {
  return {
    Email: __expectString(output.Email),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    Mobile: __expectString(output.Mobile),
    SecondaryEmail: __expectString(output.SecondaryEmail),
  } as any;
};

const deserializeAws_restJson1UserIdentityInfoLite = (output: any, context: __SerdeContext): UserIdentityInfoLite => {
  return {
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
  } as any;
};

const deserializeAws_restJson1UserIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1UserPhoneConfig = (output: any, context: __SerdeContext): UserPhoneConfig => {
  return {
    AfterContactWorkTimeLimit: __expectInt32(output.AfterContactWorkTimeLimit),
    AutoAccept: __expectBoolean(output.AutoAccept),
    DeskPhoneNumber: __expectString(output.DeskPhoneNumber),
    PhoneType: __expectString(output.PhoneType),
  } as any;
};

const deserializeAws_restJson1UserQuickConnectConfig = (
  output: any,
  context: __SerdeContext
): UserQuickConnectConfig => {
  return {
    ContactFlowId: __expectString(output.ContactFlowId),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1UserReference = (output: any, context: __SerdeContext): UserReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1UserSearchSummary = (output: any, context: __SerdeContext): UserSearchSummary => {
  return {
    Arn: __expectString(output.Arn),
    DirectoryUserId: __expectString(output.DirectoryUserId),
    HierarchyGroupId: __expectString(output.HierarchyGroupId),
    Id: __expectString(output.Id),
    IdentityInfo:
      output.IdentityInfo != null
        ? deserializeAws_restJson1UserIdentityInfoLite(output.IdentityInfo, context)
        : undefined,
    PhoneConfig:
      output.PhoneConfig != null ? deserializeAws_restJson1UserPhoneConfig(output.PhoneConfig, context) : undefined,
    RoutingProfileId: __expectString(output.RoutingProfileId),
    SecurityProfileIds:
      output.SecurityProfileIds != null
        ? deserializeAws_restJson1SecurityProfileIds(output.SecurityProfileIds, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_restJson1UserSearchSummaryList = (output: any, context: __SerdeContext): UserSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserSearchSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserSummary = (output: any, context: __SerdeContext): UserSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_restJson1UserSummaryList = (output: any, context: __SerdeContext): UserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserTagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Vocabulary = (output: any, context: __SerdeContext): Vocabulary => {
  return {
    Arn: __expectString(output.Arn),
    Content: __expectString(output.Content),
    FailureReason: __expectString(output.FailureReason),
    Id: __expectString(output.Id),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VocabularySummary = (output: any, context: __SerdeContext): VocabularySummary => {
  return {
    Arn: __expectString(output.Arn),
    FailureReason: __expectString(output.FailureReason),
    Id: __expectString(output.Id),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1VocabularySummaryList = (output: any, context: __SerdeContext): VocabularySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VocabularySummary(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
