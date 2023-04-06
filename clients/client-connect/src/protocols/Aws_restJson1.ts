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
import { GetMetricDataV2CommandInput, GetMetricDataV2CommandOutput } from "../commands/GetMetricDataV2Command";
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
  Attribute,
  Channel,
  ClaimedPhoneNumberSummary,
  Contact,
  ContactFilter,
  ContactFlow,
  ContactFlowModule,
  ContactFlowNotPublishedException,
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
  FilterV2,
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
  MetricDataV2,
  MetricFilterV2,
  MetricResultV2,
  MetricV2,
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
  ThresholdV2,
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
  WisdomInfo,
} from "../models/models_0";
import {
  AnswerMachineDetectionConfig,
  AttachmentReference,
  AvailableNumberSummary,
  ChatMessage,
  ChatParticipantRoleConfig,
  ChatStreamingConfiguration,
  ContactFlowModuleSummary,
  ContactFlowSummary,
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

/**
 * serializeAws_restJson1AssociateApprovedOriginCommand
 */
export const se_AssociateApprovedOriginCommand = async (
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

/**
 * serializeAws_restJson1AssociateBotCommand
 */
export const se_AssociateBotCommand = async (
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
    ...(input.LexBot != null && { LexBot: se_LexBot(input.LexBot, context) }),
    ...(input.LexV2Bot != null && { LexV2Bot: se_LexV2Bot(input.LexV2Bot, context) }),
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

/**
 * serializeAws_restJson1AssociateDefaultVocabularyCommand
 */
export const se_AssociateDefaultVocabularyCommand = async (
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

/**
 * serializeAws_restJson1AssociateInstanceStorageConfigCommand
 */
export const se_AssociateInstanceStorageConfigCommand = async (
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
    ...(input.StorageConfig != null && { StorageConfig: se_InstanceStorageConfig(input.StorageConfig, context) }),
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

/**
 * serializeAws_restJson1AssociateLambdaFunctionCommand
 */
export const se_AssociateLambdaFunctionCommand = async (
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

/**
 * serializeAws_restJson1AssociateLexBotCommand
 */
export const se_AssociateLexBotCommand = async (
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
    ...(input.LexBot != null && { LexBot: se_LexBot(input.LexBot, context) }),
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

/**
 * serializeAws_restJson1AssociatePhoneNumberContactFlowCommand
 */
export const se_AssociatePhoneNumberContactFlowCommand = async (
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

/**
 * serializeAws_restJson1AssociateQueueQuickConnectsCommand
 */
export const se_AssociateQueueQuickConnectsCommand = async (
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
    ...(input.QuickConnectIds != null && { QuickConnectIds: se_QuickConnectsList(input.QuickConnectIds, context) }),
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

/**
 * serializeAws_restJson1AssociateRoutingProfileQueuesCommand
 */
export const se_AssociateRoutingProfileQueuesCommand = async (
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
    ...(input.QueueConfigs != null && { QueueConfigs: se_RoutingProfileQueueConfigList(input.QueueConfigs, context) }),
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

/**
 * serializeAws_restJson1AssociateSecurityKeyCommand
 */
export const se_AssociateSecurityKeyCommand = async (
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

/**
 * serializeAws_restJson1ClaimPhoneNumberCommand
 */
export const se_ClaimPhoneNumberCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateAgentStatusCommand
 */
export const se_CreateAgentStatusCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateContactFlowCommand
 */
export const se_CreateContactFlowCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateContactFlowModuleCommand
 */
export const se_CreateContactFlowModuleCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateHoursOfOperationCommand
 */
export const se_CreateHoursOfOperationCommand = async (
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
    ...(input.Config != null && { Config: se_HoursOfOperationConfigList(input.Config, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateInstanceCommand
 */
export const se_CreateInstanceCommand = async (
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

/**
 * serializeAws_restJson1CreateIntegrationAssociationCommand
 */
export const se_CreateIntegrationAssociationCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateQueueCommand
 */
export const se_CreateQueueCommand = async (
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
      OutboundCallerConfig: se_OutboundCallerConfig(input.OutboundCallerConfig, context),
    }),
    ...(input.QuickConnectIds != null && { QuickConnectIds: se_QuickConnectsList(input.QuickConnectIds, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateQuickConnectCommand
 */
export const se_CreateQuickConnectCommand = async (
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
      QuickConnectConfig: se_QuickConnectConfig(input.QuickConnectConfig, context),
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateRoutingProfileCommand
 */
export const se_CreateRoutingProfileCommand = async (
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
      MediaConcurrencies: se_MediaConcurrencies(input.MediaConcurrencies, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QueueConfigs != null && { QueueConfigs: se_RoutingProfileQueueConfigList(input.QueueConfigs, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
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
    ...(input.Actions != null && { Actions: se_RuleActions(input.Actions, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Function != null && { Function: input.Function }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PublishStatus != null && { PublishStatus: input.PublishStatus }),
    ...(input.TriggerEventSource != null && {
      TriggerEventSource: se_RuleTriggerEventSource(input.TriggerEventSource, context),
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

/**
 * serializeAws_restJson1CreateSecurityProfileCommand
 */
export const se_CreateSecurityProfileCommand = async (
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
      AllowedAccessControlTags: se_AllowedAccessControlTags(input.AllowedAccessControlTags, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Permissions != null && { Permissions: se_PermissionsList(input.Permissions, context) }),
    ...(input.SecurityProfileName != null && { SecurityProfileName: input.SecurityProfileName }),
    ...(input.TagRestrictedResources != null && {
      TagRestrictedResources: se_TagRestrictedResourceList(input.TagRestrictedResources, context),
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateTaskTemplateCommand
 */
export const se_CreateTaskTemplateCommand = async (
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
    ...(input.Constraints != null && { Constraints: se_TaskTemplateConstraints(input.Constraints, context) }),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Defaults != null && { Defaults: se_TaskTemplateDefaults(input.Defaults, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Fields != null && { Fields: se_TaskTemplateFields(input.Fields, context) }),
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

/**
 * serializeAws_restJson1CreateTrafficDistributionGroupCommand
 */
export const se_CreateTrafficDistributionGroupCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateUseCaseCommand
 */
export const se_CreateUseCaseCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
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
    ...(input.IdentityInfo != null && { IdentityInfo: se_UserIdentityInfo(input.IdentityInfo, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.PhoneConfig != null && { PhoneConfig: se_UserPhoneConfig(input.PhoneConfig, context) }),
    ...(input.RoutingProfileId != null && { RoutingProfileId: input.RoutingProfileId }),
    ...(input.SecurityProfileIds != null && {
      SecurityProfileIds: se_SecurityProfileIds(input.SecurityProfileIds, context),
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateUserHierarchyGroupCommand
 */
export const se_CreateUserHierarchyGroupCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateVocabularyCommand
 */
export const se_CreateVocabularyCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1DeleteContactFlowCommand
 */
export const se_DeleteContactFlowCommand = async (
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

/**
 * serializeAws_restJson1DeleteContactFlowModuleCommand
 */
export const se_DeleteContactFlowModuleCommand = async (
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

/**
 * serializeAws_restJson1DeleteHoursOfOperationCommand
 */
export const se_DeleteHoursOfOperationCommand = async (
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

/**
 * serializeAws_restJson1DeleteInstanceCommand
 */
export const se_DeleteInstanceCommand = async (
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

/**
 * serializeAws_restJson1DeleteIntegrationAssociationCommand
 */
export const se_DeleteIntegrationAssociationCommand = async (
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

/**
 * serializeAws_restJson1DeleteQuickConnectCommand
 */
export const se_DeleteQuickConnectCommand = async (
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

/**
 * serializeAws_restJson1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
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

/**
 * serializeAws_restJson1DeleteSecurityProfileCommand
 */
export const se_DeleteSecurityProfileCommand = async (
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

/**
 * serializeAws_restJson1DeleteTaskTemplateCommand
 */
export const se_DeleteTaskTemplateCommand = async (
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

/**
 * serializeAws_restJson1DeleteTrafficDistributionGroupCommand
 */
export const se_DeleteTrafficDistributionGroupCommand = async (
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

/**
 * serializeAws_restJson1DeleteUseCaseCommand
 */
export const se_DeleteUseCaseCommand = async (
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

/**
 * serializeAws_restJson1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
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

/**
 * serializeAws_restJson1DeleteUserHierarchyGroupCommand
 */
export const se_DeleteUserHierarchyGroupCommand = async (
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

/**
 * serializeAws_restJson1DeleteVocabularyCommand
 */
export const se_DeleteVocabularyCommand = async (
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

/**
 * serializeAws_restJson1DescribeAgentStatusCommand
 */
export const se_DescribeAgentStatusCommand = async (
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

/**
 * serializeAws_restJson1DescribeContactCommand
 */
export const se_DescribeContactCommand = async (
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

/**
 * serializeAws_restJson1DescribeContactFlowCommand
 */
export const se_DescribeContactFlowCommand = async (
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

/**
 * serializeAws_restJson1DescribeContactFlowModuleCommand
 */
export const se_DescribeContactFlowModuleCommand = async (
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

/**
 * serializeAws_restJson1DescribeHoursOfOperationCommand
 */
export const se_DescribeHoursOfOperationCommand = async (
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

/**
 * serializeAws_restJson1DescribeInstanceCommand
 */
export const se_DescribeInstanceCommand = async (
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

/**
 * serializeAws_restJson1DescribeInstanceAttributeCommand
 */
export const se_DescribeInstanceAttributeCommand = async (
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

/**
 * serializeAws_restJson1DescribeInstanceStorageConfigCommand
 */
export const se_DescribeInstanceStorageConfigCommand = async (
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

/**
 * serializeAws_restJson1DescribePhoneNumberCommand
 */
export const se_DescribePhoneNumberCommand = async (
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

/**
 * serializeAws_restJson1DescribeQueueCommand
 */
export const se_DescribeQueueCommand = async (
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

/**
 * serializeAws_restJson1DescribeQuickConnectCommand
 */
export const se_DescribeQuickConnectCommand = async (
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

/**
 * serializeAws_restJson1DescribeRoutingProfileCommand
 */
export const se_DescribeRoutingProfileCommand = async (
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

/**
 * serializeAws_restJson1DescribeRuleCommand
 */
export const se_DescribeRuleCommand = async (
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

/**
 * serializeAws_restJson1DescribeSecurityProfileCommand
 */
export const se_DescribeSecurityProfileCommand = async (
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

/**
 * serializeAws_restJson1DescribeTrafficDistributionGroupCommand
 */
export const se_DescribeTrafficDistributionGroupCommand = async (
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

/**
 * serializeAws_restJson1DescribeUserCommand
 */
export const se_DescribeUserCommand = async (
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

/**
 * serializeAws_restJson1DescribeUserHierarchyGroupCommand
 */
export const se_DescribeUserHierarchyGroupCommand = async (
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

/**
 * serializeAws_restJson1DescribeUserHierarchyStructureCommand
 */
export const se_DescribeUserHierarchyStructureCommand = async (
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

/**
 * serializeAws_restJson1DescribeVocabularyCommand
 */
export const se_DescribeVocabularyCommand = async (
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

/**
 * serializeAws_restJson1DisassociateApprovedOriginCommand
 */
export const se_DisassociateApprovedOriginCommand = async (
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

/**
 * serializeAws_restJson1DisassociateBotCommand
 */
export const se_DisassociateBotCommand = async (
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
    ...(input.LexBot != null && { LexBot: se_LexBot(input.LexBot, context) }),
    ...(input.LexV2Bot != null && { LexV2Bot: se_LexV2Bot(input.LexV2Bot, context) }),
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

/**
 * serializeAws_restJson1DisassociateInstanceStorageConfigCommand
 */
export const se_DisassociateInstanceStorageConfigCommand = async (
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

/**
 * serializeAws_restJson1DisassociateLambdaFunctionCommand
 */
export const se_DisassociateLambdaFunctionCommand = async (
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

/**
 * serializeAws_restJson1DisassociateLexBotCommand
 */
export const se_DisassociateLexBotCommand = async (
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

/**
 * serializeAws_restJson1DisassociatePhoneNumberContactFlowCommand
 */
export const se_DisassociatePhoneNumberContactFlowCommand = async (
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

/**
 * serializeAws_restJson1DisassociateQueueQuickConnectsCommand
 */
export const se_DisassociateQueueQuickConnectsCommand = async (
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
    ...(input.QuickConnectIds != null && { QuickConnectIds: se_QuickConnectsList(input.QuickConnectIds, context) }),
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

/**
 * serializeAws_restJson1DisassociateRoutingProfileQueuesCommand
 */
export const se_DisassociateRoutingProfileQueuesCommand = async (
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
      QueueReferences: se_RoutingProfileQueueReferenceList(input.QueueReferences, context),
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

/**
 * serializeAws_restJson1DisassociateSecurityKeyCommand
 */
export const se_DisassociateSecurityKeyCommand = async (
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

/**
 * serializeAws_restJson1DismissUserContactCommand
 */
export const se_DismissUserContactCommand = async (
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

/**
 * serializeAws_restJson1GetContactAttributesCommand
 */
export const se_GetContactAttributesCommand = async (
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

/**
 * serializeAws_restJson1GetCurrentMetricDataCommand
 */
export const se_GetCurrentMetricDataCommand = async (
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
    ...(input.CurrentMetrics != null && { CurrentMetrics: se_CurrentMetrics(input.CurrentMetrics, context) }),
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.Groupings != null && { Groupings: se_Groupings(input.Groupings, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && {
      SortCriteria: se_CurrentMetricSortCriteriaMaxOne(input.SortCriteria, context),
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

/**
 * serializeAws_restJson1GetCurrentUserDataCommand
 */
export const se_GetCurrentUserDataCommand = async (
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
    ...(input.Filters != null && { Filters: se_UserDataFilters(input.Filters, context) }),
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

/**
 * serializeAws_restJson1GetFederationTokenCommand
 */
export const se_GetFederationTokenCommand = async (
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

/**
 * serializeAws_restJson1GetMetricDataCommand
 */
export const se_GetMetricDataCommand = async (
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
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.Groupings != null && { Groupings: se_Groupings(input.Groupings, context) }),
    ...(input.HistoricalMetrics != null && {
      HistoricalMetrics: se_HistoricalMetrics(input.HistoricalMetrics, context),
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

/**
 * serializeAws_restJson1GetMetricDataV2Command
 */
export const se_GetMetricDataV2Command = async (
  input: GetMetricDataV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metrics/data";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Filters != null && { Filters: se_FiltersV2List(input.Filters, context) }),
    ...(input.Groupings != null && { Groupings: se_GroupingsV2(input.Groupings, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metrics != null && { Metrics: se_MetricsV2(input.Metrics, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
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

/**
 * serializeAws_restJson1GetTaskTemplateCommand
 */
export const se_GetTaskTemplateCommand = async (
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

/**
 * serializeAws_restJson1GetTrafficDistributionCommand
 */
export const se_GetTrafficDistributionCommand = async (
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

/**
 * serializeAws_restJson1ListAgentStatusesCommand
 */
export const se_ListAgentStatusesCommand = async (
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

/**
 * serializeAws_restJson1ListApprovedOriginsCommand
 */
export const se_ListApprovedOriginsCommand = async (
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

/**
 * serializeAws_restJson1ListBotsCommand
 */
export const se_ListBotsCommand = async (
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

/**
 * serializeAws_restJson1ListContactFlowModulesCommand
 */
export const se_ListContactFlowModulesCommand = async (
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

/**
 * serializeAws_restJson1ListContactFlowsCommand
 */
export const se_ListContactFlowsCommand = async (
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

/**
 * serializeAws_restJson1ListContactReferencesCommand
 */
export const se_ListContactReferencesCommand = async (
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

/**
 * serializeAws_restJson1ListDefaultVocabulariesCommand
 */
export const se_ListDefaultVocabulariesCommand = async (
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

/**
 * serializeAws_restJson1ListHoursOfOperationsCommand
 */
export const se_ListHoursOfOperationsCommand = async (
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

/**
 * serializeAws_restJson1ListInstanceAttributesCommand
 */
export const se_ListInstanceAttributesCommand = async (
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

/**
 * serializeAws_restJson1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
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

/**
 * serializeAws_restJson1ListInstanceStorageConfigsCommand
 */
export const se_ListInstanceStorageConfigsCommand = async (
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

/**
 * serializeAws_restJson1ListIntegrationAssociationsCommand
 */
export const se_ListIntegrationAssociationsCommand = async (
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

/**
 * serializeAws_restJson1ListLambdaFunctionsCommand
 */
export const se_ListLambdaFunctionsCommand = async (
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

/**
 * serializeAws_restJson1ListLexBotsCommand
 */
export const se_ListLexBotsCommand = async (
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

/**
 * serializeAws_restJson1ListPhoneNumbersCommand
 */
export const se_ListPhoneNumbersCommand = async (
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

/**
 * serializeAws_restJson1ListPhoneNumbersV2Command
 */
export const se_ListPhoneNumbersV2Command = async (
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
      PhoneNumberCountryCodes: se_PhoneNumberCountryCodes(input.PhoneNumberCountryCodes, context),
    }),
    ...(input.PhoneNumberPrefix != null && { PhoneNumberPrefix: input.PhoneNumberPrefix }),
    ...(input.PhoneNumberTypes != null && { PhoneNumberTypes: se_PhoneNumberTypes(input.PhoneNumberTypes, context) }),
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

/**
 * serializeAws_restJson1ListPromptsCommand
 */
export const se_ListPromptsCommand = async (
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

/**
 * serializeAws_restJson1ListQueueQuickConnectsCommand
 */
export const se_ListQueueQuickConnectsCommand = async (
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

/**
 * serializeAws_restJson1ListQueuesCommand
 */
export const se_ListQueuesCommand = async (
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

/**
 * serializeAws_restJson1ListQuickConnectsCommand
 */
export const se_ListQuickConnectsCommand = async (
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

/**
 * serializeAws_restJson1ListRoutingProfileQueuesCommand
 */
export const se_ListRoutingProfileQueuesCommand = async (
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

/**
 * serializeAws_restJson1ListRoutingProfilesCommand
 */
export const se_ListRoutingProfilesCommand = async (
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

/**
 * serializeAws_restJson1ListRulesCommand
 */
export const se_ListRulesCommand = async (
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

/**
 * serializeAws_restJson1ListSecurityKeysCommand
 */
export const se_ListSecurityKeysCommand = async (
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

/**
 * serializeAws_restJson1ListSecurityProfilePermissionsCommand
 */
export const se_ListSecurityProfilePermissionsCommand = async (
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

/**
 * serializeAws_restJson1ListSecurityProfilesCommand
 */
export const se_ListSecurityProfilesCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1ListTaskTemplatesCommand
 */
export const se_ListTaskTemplatesCommand = async (
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

/**
 * serializeAws_restJson1ListTrafficDistributionGroupsCommand
 */
export const se_ListTrafficDistributionGroupsCommand = async (
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

/**
 * serializeAws_restJson1ListUseCasesCommand
 */
export const se_ListUseCasesCommand = async (
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

/**
 * serializeAws_restJson1ListUserHierarchyGroupsCommand
 */
export const se_ListUserHierarchyGroupsCommand = async (
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

/**
 * serializeAws_restJson1ListUsersCommand
 */
export const se_ListUsersCommand = async (
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

/**
 * serializeAws_restJson1MonitorContactCommand
 */
export const se_MonitorContactCommand = async (
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
      AllowedMonitorCapabilities: se_AllowedMonitorCapabilities(input.AllowedMonitorCapabilities, context),
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

/**
 * serializeAws_restJson1PutUserStatusCommand
 */
export const se_PutUserStatusCommand = async (
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

/**
 * serializeAws_restJson1ReleasePhoneNumberCommand
 */
export const se_ReleasePhoneNumberCommand = async (
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

/**
 * serializeAws_restJson1ReplicateInstanceCommand
 */
export const se_ReplicateInstanceCommand = async (
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

/**
 * serializeAws_restJson1ResumeContactRecordingCommand
 */
export const se_ResumeContactRecordingCommand = async (
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

/**
 * serializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const se_SearchAvailablePhoneNumbersCommand = async (
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

/**
 * serializeAws_restJson1SearchQueuesCommand
 */
export const se_SearchQueuesCommand = async (
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
    ...(input.SearchCriteria != null && { SearchCriteria: se_QueueSearchCriteria(input.SearchCriteria, context) }),
    ...(input.SearchFilter != null && { SearchFilter: se_QueueSearchFilter(input.SearchFilter, context) }),
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

/**
 * serializeAws_restJson1SearchRoutingProfilesCommand
 */
export const se_SearchRoutingProfilesCommand = async (
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
      SearchCriteria: se_RoutingProfileSearchCriteria(input.SearchCriteria, context),
    }),
    ...(input.SearchFilter != null && { SearchFilter: se_RoutingProfileSearchFilter(input.SearchFilter, context) }),
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

/**
 * serializeAws_restJson1SearchSecurityProfilesCommand
 */
export const se_SearchSecurityProfilesCommand = async (
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
      SearchCriteria: se_SecurityProfileSearchCriteria(input.SearchCriteria, context),
    }),
    ...(input.SearchFilter != null && { SearchFilter: se_SecurityProfilesSearchFilter(input.SearchFilter, context) }),
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

/**
 * serializeAws_restJson1SearchUsersCommand
 */
export const se_SearchUsersCommand = async (
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
    ...(input.SearchCriteria != null && { SearchCriteria: se_UserSearchCriteria(input.SearchCriteria, context) }),
    ...(input.SearchFilter != null && { SearchFilter: se_UserSearchFilter(input.SearchFilter, context) }),
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

/**
 * serializeAws_restJson1SearchVocabulariesCommand
 */
export const se_SearchVocabulariesCommand = async (
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

/**
 * serializeAws_restJson1StartChatContactCommand
 */
export const se_StartChatContactCommand = async (
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
    ...(input.Attributes != null && { Attributes: se_Attributes(input.Attributes, context) }),
    ...(input.ChatDurationInMinutes != null && { ChatDurationInMinutes: input.ChatDurationInMinutes }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.InitialMessage != null && { InitialMessage: se_ChatMessage(input.InitialMessage, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ParticipantDetails != null && {
      ParticipantDetails: se_ParticipantDetails(input.ParticipantDetails, context),
    }),
    ...(input.PersistentChat != null && { PersistentChat: se_PersistentChat(input.PersistentChat, context) }),
    ...(input.RelatedContactId != null && { RelatedContactId: input.RelatedContactId }),
    ...(input.SupportedMessagingContentTypes != null && {
      SupportedMessagingContentTypes: se_SupportedMessagingContentTypes(input.SupportedMessagingContentTypes, context),
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

/**
 * serializeAws_restJson1StartContactRecordingCommand
 */
export const se_StartContactRecordingCommand = async (
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
      VoiceRecordingConfiguration: se_VoiceRecordingConfiguration(input.VoiceRecordingConfiguration, context),
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

/**
 * serializeAws_restJson1StartContactStreamingCommand
 */
export const se_StartContactStreamingCommand = async (
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
      ChatStreamingConfiguration: se_ChatStreamingConfiguration(input.ChatStreamingConfiguration, context),
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

/**
 * serializeAws_restJson1StartOutboundVoiceContactCommand
 */
export const se_StartOutboundVoiceContactCommand = async (
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
      AnswerMachineDetectionConfig: se_AnswerMachineDetectionConfig(input.AnswerMachineDetectionConfig, context),
    }),
    ...(input.Attributes != null && { Attributes: se_Attributes(input.Attributes, context) }),
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

/**
 * serializeAws_restJson1StartTaskContactCommand
 */
export const se_StartTaskContactCommand = async (
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
    ...(input.Attributes != null && { Attributes: se_Attributes(input.Attributes, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PreviousContactId != null && { PreviousContactId: input.PreviousContactId }),
    ...(input.QuickConnectId != null && { QuickConnectId: input.QuickConnectId }),
    ...(input.References != null && { References: se_ContactReferences(input.References, context) }),
    ...(input.RelatedContactId != null && { RelatedContactId: input.RelatedContactId }),
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

/**
 * serializeAws_restJson1StopContactCommand
 */
export const se_StopContactCommand = async (
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

/**
 * serializeAws_restJson1StopContactRecordingCommand
 */
export const se_StopContactRecordingCommand = async (
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

/**
 * serializeAws_restJson1StopContactStreamingCommand
 */
export const se_StopContactStreamingCommand = async (
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

/**
 * serializeAws_restJson1SuspendContactRecordingCommand
 */
export const se_SuspendContactRecordingCommand = async (
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

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
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
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1TransferContactCommand
 */
export const se_TransferContactCommand = async (
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateAgentStatusCommand
 */
export const se_UpdateAgentStatusCommand = async (
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

/**
 * serializeAws_restJson1UpdateContactCommand
 */
export const se_UpdateContactCommand = async (
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
    ...(input.References != null && { References: se_ContactReferences(input.References, context) }),
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

/**
 * serializeAws_restJson1UpdateContactAttributesCommand
 */
export const se_UpdateContactAttributesCommand = async (
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
    ...(input.Attributes != null && { Attributes: se_Attributes(input.Attributes, context) }),
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

/**
 * serializeAws_restJson1UpdateContactFlowContentCommand
 */
export const se_UpdateContactFlowContentCommand = async (
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

/**
 * serializeAws_restJson1UpdateContactFlowMetadataCommand
 */
export const se_UpdateContactFlowMetadataCommand = async (
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

/**
 * serializeAws_restJson1UpdateContactFlowModuleContentCommand
 */
export const se_UpdateContactFlowModuleContentCommand = async (
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

/**
 * serializeAws_restJson1UpdateContactFlowModuleMetadataCommand
 */
export const se_UpdateContactFlowModuleMetadataCommand = async (
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

/**
 * serializeAws_restJson1UpdateContactFlowNameCommand
 */
export const se_UpdateContactFlowNameCommand = async (
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

/**
 * serializeAws_restJson1UpdateContactScheduleCommand
 */
export const se_UpdateContactScheduleCommand = async (
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

/**
 * serializeAws_restJson1UpdateHoursOfOperationCommand
 */
export const se_UpdateHoursOfOperationCommand = async (
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
    ...(input.Config != null && { Config: se_HoursOfOperationConfigList(input.Config, context) }),
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

/**
 * serializeAws_restJson1UpdateInstanceAttributeCommand
 */
export const se_UpdateInstanceAttributeCommand = async (
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

/**
 * serializeAws_restJson1UpdateInstanceStorageConfigCommand
 */
export const se_UpdateInstanceStorageConfigCommand = async (
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
    ...(input.StorageConfig != null && { StorageConfig: se_InstanceStorageConfig(input.StorageConfig, context) }),
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

/**
 * serializeAws_restJson1UpdateParticipantRoleConfigCommand
 */
export const se_UpdateParticipantRoleConfigCommand = async (
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
      ChannelConfiguration: se_UpdateParticipantRoleConfigChannelInfo(input.ChannelConfiguration, context),
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

/**
 * serializeAws_restJson1UpdatePhoneNumberCommand
 */
export const se_UpdatePhoneNumberCommand = async (
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

/**
 * serializeAws_restJson1UpdateQueueHoursOfOperationCommand
 */
export const se_UpdateQueueHoursOfOperationCommand = async (
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

/**
 * serializeAws_restJson1UpdateQueueMaxContactsCommand
 */
export const se_UpdateQueueMaxContactsCommand = async (
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

/**
 * serializeAws_restJson1UpdateQueueNameCommand
 */
export const se_UpdateQueueNameCommand = async (
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

/**
 * serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand
 */
export const se_UpdateQueueOutboundCallerConfigCommand = async (
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
      OutboundCallerConfig: se_OutboundCallerConfig(input.OutboundCallerConfig, context),
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

/**
 * serializeAws_restJson1UpdateQueueStatusCommand
 */
export const se_UpdateQueueStatusCommand = async (
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

/**
 * serializeAws_restJson1UpdateQuickConnectConfigCommand
 */
export const se_UpdateQuickConnectConfigCommand = async (
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
      QuickConnectConfig: se_QuickConnectConfig(input.QuickConnectConfig, context),
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

/**
 * serializeAws_restJson1UpdateQuickConnectNameCommand
 */
export const se_UpdateQuickConnectNameCommand = async (
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

/**
 * serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand
 */
export const se_UpdateRoutingProfileConcurrencyCommand = async (
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
      MediaConcurrencies: se_MediaConcurrencies(input.MediaConcurrencies, context),
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

/**
 * serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand
 */
export const se_UpdateRoutingProfileDefaultOutboundQueueCommand = async (
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

/**
 * serializeAws_restJson1UpdateRoutingProfileNameCommand
 */
export const se_UpdateRoutingProfileNameCommand = async (
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

/**
 * serializeAws_restJson1UpdateRoutingProfileQueuesCommand
 */
export const se_UpdateRoutingProfileQueuesCommand = async (
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
    ...(input.QueueConfigs != null && { QueueConfigs: se_RoutingProfileQueueConfigList(input.QueueConfigs, context) }),
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

/**
 * serializeAws_restJson1UpdateRuleCommand
 */
export const se_UpdateRuleCommand = async (
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
    ...(input.Actions != null && { Actions: se_RuleActions(input.Actions, context) }),
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

/**
 * serializeAws_restJson1UpdateSecurityProfileCommand
 */
export const se_UpdateSecurityProfileCommand = async (
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
      AllowedAccessControlTags: se_AllowedAccessControlTags(input.AllowedAccessControlTags, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Permissions != null && { Permissions: se_PermissionsList(input.Permissions, context) }),
    ...(input.TagRestrictedResources != null && {
      TagRestrictedResources: se_TagRestrictedResourceList(input.TagRestrictedResources, context),
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

/**
 * serializeAws_restJson1UpdateTaskTemplateCommand
 */
export const se_UpdateTaskTemplateCommand = async (
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
    ...(input.Constraints != null && { Constraints: se_TaskTemplateConstraints(input.Constraints, context) }),
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Defaults != null && { Defaults: se_TaskTemplateDefaults(input.Defaults, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Fields != null && { Fields: se_TaskTemplateFields(input.Fields, context) }),
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

/**
 * serializeAws_restJson1UpdateTrafficDistributionCommand
 */
export const se_UpdateTrafficDistributionCommand = async (
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
    ...(input.TelephonyConfig != null && { TelephonyConfig: se_TelephonyConfig(input.TelephonyConfig, context) }),
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

/**
 * serializeAws_restJson1UpdateUserHierarchyCommand
 */
export const se_UpdateUserHierarchyCommand = async (
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

/**
 * serializeAws_restJson1UpdateUserHierarchyGroupNameCommand
 */
export const se_UpdateUserHierarchyGroupNameCommand = async (
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

/**
 * serializeAws_restJson1UpdateUserHierarchyStructureCommand
 */
export const se_UpdateUserHierarchyStructureCommand = async (
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
      HierarchyStructure: se_HierarchyStructureUpdate(input.HierarchyStructure, context),
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

/**
 * serializeAws_restJson1UpdateUserIdentityInfoCommand
 */
export const se_UpdateUserIdentityInfoCommand = async (
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
    ...(input.IdentityInfo != null && { IdentityInfo: se_UserIdentityInfo(input.IdentityInfo, context) }),
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

/**
 * serializeAws_restJson1UpdateUserPhoneConfigCommand
 */
export const se_UpdateUserPhoneConfigCommand = async (
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
    ...(input.PhoneConfig != null && { PhoneConfig: se_UserPhoneConfig(input.PhoneConfig, context) }),
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

/**
 * serializeAws_restJson1UpdateUserRoutingProfileCommand
 */
export const se_UpdateUserRoutingProfileCommand = async (
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

/**
 * serializeAws_restJson1UpdateUserSecurityProfilesCommand
 */
export const se_UpdateUserSecurityProfilesCommand = async (
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
      SecurityProfileIds: se_SecurityProfileIds(input.SecurityProfileIds, context),
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

/**
 * deserializeAws_restJson1AssociateApprovedOriginCommand
 */
export const de_AssociateApprovedOriginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApprovedOriginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateApprovedOriginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateApprovedOriginCommandError
 */
const de_AssociateApprovedOriginCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateBotCommand
 */
export const de_AssociateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateBotCommandError
 */
const de_AssociateBotCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateDefaultVocabularyCommand
 */
export const de_AssociateDefaultVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDefaultVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateDefaultVocabularyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateDefaultVocabularyCommandError
 */
const de_AssociateDefaultVocabularyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateInstanceStorageConfigCommand
 */
export const de_AssociateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateInstanceStorageConfigCommandError(output, context);
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

/**
 * deserializeAws_restJson1AssociateInstanceStorageConfigCommandError
 */
const de_AssociateInstanceStorageConfigCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateLambdaFunctionCommand
 */
export const de_AssociateLambdaFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLambdaFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateLambdaFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateLambdaFunctionCommandError
 */
const de_AssociateLambdaFunctionCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateLexBotCommand
 */
export const de_AssociateLexBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLexBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateLexBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateLexBotCommandError
 */
const de_AssociateLexBotCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociatePhoneNumberContactFlowCommand
 */
export const de_AssociatePhoneNumberContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociatePhoneNumberContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePhoneNumberContactFlowCommandError
 */
const de_AssociatePhoneNumberContactFlowCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateQueueQuickConnectsCommand
 */
export const de_AssociateQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateQueueQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateQueueQuickConnectsCommandError
 */
const de_AssociateQueueQuickConnectsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateRoutingProfileQueuesCommand
 */
export const de_AssociateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateRoutingProfileQueuesCommandError
 */
const de_AssociateRoutingProfileQueuesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1AssociateSecurityKeyCommand
 */
export const de_AssociateSecurityKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSecurityKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateSecurityKeyCommandError(output, context);
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

/**
 * deserializeAws_restJson1AssociateSecurityKeyCommandError
 */
const de_AssociateSecurityKeyCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ClaimPhoneNumberCommand
 */
export const de_ClaimPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ClaimPhoneNumberCommandError(output, context);
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

/**
 * deserializeAws_restJson1ClaimPhoneNumberCommandError
 */
const de_ClaimPhoneNumberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateAgentStatusCommand
 */
export const de_CreateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAgentStatusCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateAgentStatusCommandError
 */
const de_CreateAgentStatusCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateContactFlowCommand
 */
export const de_CreateContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateContactFlowCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateContactFlowCommandError
 */
const de_CreateContactFlowCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidContactFlowException":
    case "com.amazonaws.connect#InvalidContactFlowException":
      throw await de_InvalidContactFlowExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateContactFlowModuleCommand
 */
export const de_CreateContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateContactFlowModuleCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateContactFlowModuleCommandError
 */
const de_CreateContactFlowModuleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidContactFlowModuleException":
    case "com.amazonaws.connect#InvalidContactFlowModuleException":
      throw await de_InvalidContactFlowModuleExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateHoursOfOperationCommand
 */
export const de_CreateHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateHoursOfOperationCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateHoursOfOperationCommandError
 */
const de_CreateHoursOfOperationCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateInstanceCommand
 */
export const de_CreateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateInstanceCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateInstanceCommandError
 */
const de_CreateInstanceCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateIntegrationAssociationCommand
 */
export const de_CreateIntegrationAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateIntegrationAssociationCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateIntegrationAssociationCommandError
 */
const de_CreateIntegrationAssociationCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateQueueCommand
 */
export const de_CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateQueueCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateQueueCommandError
 */
const de_CreateQueueCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateQuickConnectCommand
 */
export const de_CreateQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateQuickConnectCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateQuickConnectCommandError
 */
const de_CreateQuickConnectCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateRoutingProfileCommand
 */
export const de_CreateRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRoutingProfileCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateRoutingProfileCommandError
 */
const de_CreateRoutingProfileCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRuleCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateRuleCommandError
 */
const de_CreateRuleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateSecurityProfileCommand
 */
export const de_CreateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSecurityProfileCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateSecurityProfileCommandError
 */
const de_CreateSecurityProfileCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateTaskTemplateCommand
 */
export const de_CreateTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTaskTemplateCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateTaskTemplateCommandError
 */
const de_CreateTaskTemplateCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PropertyValidationException":
    case "com.amazonaws.connect#PropertyValidationException":
      throw await de_PropertyValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateTrafficDistributionGroupCommand
 */
export const de_CreateTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTrafficDistributionGroupCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateTrafficDistributionGroupCommandError
 */
const de_CreateTrafficDistributionGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.connect#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateUseCaseCommand
 */
export const de_CreateUseCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUseCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUseCaseCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateUseCaseCommandError
 */
const de_CreateUseCaseCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateUserHierarchyGroupCommand
 */
export const de_CreateUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUserHierarchyGroupCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateUserHierarchyGroupCommandError
 */
const de_CreateUserHierarchyGroupCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateVocabularyCommand
 */
export const de_CreateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVocabularyCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateVocabularyCommandError
 */
const de_CreateVocabularyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteContactFlowCommand
 */
export const de_DeleteContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactFlowCommandError
 */
const de_DeleteContactFlowCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteContactFlowModuleCommand
 */
export const de_DeleteContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteContactFlowModuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactFlowModuleCommandError
 */
const de_DeleteContactFlowModuleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteHoursOfOperationCommand
 */
export const de_DeleteHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteHoursOfOperationCommandError
 */
const de_DeleteHoursOfOperationCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteInstanceCommand
 */
export const de_DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInstanceCommandError
 */
const de_DeleteInstanceCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteIntegrationAssociationCommand
 */
export const de_DeleteIntegrationAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteIntegrationAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIntegrationAssociationCommandError
 */
const de_DeleteIntegrationAssociationCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteQuickConnectCommand
 */
export const de_DeleteQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteQuickConnectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQuickConnectCommandError
 */
const de_DeleteQuickConnectCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRuleCommandError
 */
const de_DeleteRuleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteSecurityProfileCommand
 */
export const de_DeleteSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSecurityProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSecurityProfileCommandError
 */
const de_DeleteSecurityProfileCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteTaskTemplateCommand
 */
export const de_DeleteTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTaskTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTaskTemplateCommandError
 */
const de_DeleteTaskTemplateCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteTrafficDistributionGroupCommand
 */
export const de_DeleteTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTrafficDistributionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrafficDistributionGroupCommandError
 */
const de_DeleteTrafficDistributionGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteUseCaseCommand
 */
export const de_DeleteUseCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUseCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteUseCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUseCaseCommandError
 */
const de_DeleteUseCaseCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteUserHierarchyGroupCommand
 */
export const de_DeleteUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteUserHierarchyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserHierarchyGroupCommandError
 */
const de_DeleteUserHierarchyGroupCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteVocabularyCommand
 */
export const de_DeleteVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVocabularyCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteVocabularyCommandError
 */
const de_DeleteVocabularyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeAgentStatusCommand
 */
export const de_DescribeAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAgentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AgentStatus != null) {
    contents.AgentStatus = de_AgentStatus(data.AgentStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAgentStatusCommandError
 */
const de_DescribeAgentStatusCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeContactCommand
 */
export const de_DescribeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Contact != null) {
    contents.Contact = de_Contact(data.Contact, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactCommandError
 */
const de_DescribeContactCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeContactFlowCommand
 */
export const de_DescribeContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlow != null) {
    contents.ContactFlow = de_ContactFlow(data.ContactFlow, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactFlowCommandError
 */
const de_DescribeContactFlowCommandError = async (
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
      throw await de_ContactFlowNotPublishedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeContactFlowModuleCommand
 */
export const de_DescribeContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeContactFlowModuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlowModule != null) {
    contents.ContactFlowModule = de_ContactFlowModule(data.ContactFlowModule, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactFlowModuleCommandError
 */
const de_DescribeContactFlowModuleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeHoursOfOperationCommand
 */
export const de_DescribeHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HoursOfOperation != null) {
    contents.HoursOfOperation = de_HoursOfOperation(data.HoursOfOperation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeHoursOfOperationCommandError
 */
const de_DescribeHoursOfOperationCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeInstanceCommand
 */
export const de_DescribeInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Instance != null) {
    contents.Instance = de_Instance(data.Instance, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceCommandError
 */
const de_DescribeInstanceCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeInstanceAttributeCommand
 */
export const de_DescribeInstanceAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInstanceAttributeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attribute != null) {
    contents.Attribute = de_Attribute(data.Attribute, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceAttributeCommandError
 */
const de_DescribeInstanceAttributeCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeInstanceStorageConfigCommand
 */
export const de_DescribeInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInstanceStorageConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StorageConfig != null) {
    contents.StorageConfig = de_InstanceStorageConfig(data.StorageConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceStorageConfigCommandError
 */
const de_DescribeInstanceStorageConfigCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribePhoneNumberCommand
 */
export const de_DescribePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ClaimedPhoneNumberSummary != null) {
    contents.ClaimedPhoneNumberSummary = de_ClaimedPhoneNumberSummary(data.ClaimedPhoneNumberSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePhoneNumberCommandError
 */
const de_DescribePhoneNumberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeQueueCommand
 */
export const de_DescribeQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Queue != null) {
    contents.Queue = de_Queue(data.Queue, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeQueueCommandError
 */
const de_DescribeQueueCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeQuickConnectCommand
 */
export const de_DescribeQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeQuickConnectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.QuickConnect != null) {
    contents.QuickConnect = de_QuickConnect(data.QuickConnect, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeQuickConnectCommandError
 */
const de_DescribeQuickConnectCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeRoutingProfileCommand
 */
export const de_DescribeRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRoutingProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RoutingProfile != null) {
    contents.RoutingProfile = de_RoutingProfile(data.RoutingProfile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRoutingProfileCommandError
 */
const de_DescribeRoutingProfileCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeRuleCommand
 */
export const de_DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Rule != null) {
    contents.Rule = de_Rule(data.Rule, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRuleCommandError
 */
const de_DescribeRuleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeSecurityProfileCommand
 */
export const de_DescribeSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSecurityProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SecurityProfile != null) {
    contents.SecurityProfile = de_SecurityProfile(data.SecurityProfile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSecurityProfileCommandError
 */
const de_DescribeSecurityProfileCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeTrafficDistributionGroupCommand
 */
export const de_DescribeTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTrafficDistributionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TrafficDistributionGroup != null) {
    contents.TrafficDistributionGroup = de_TrafficDistributionGroup(data.TrafficDistributionGroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTrafficDistributionGroupCommandError
 */
const de_DescribeTrafficDistributionGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeUserCommand
 */
export const de_DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = de_User(data.User, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUserCommandError
 */
const de_DescribeUserCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeUserHierarchyGroupCommand
 */
export const de_DescribeUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeUserHierarchyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HierarchyGroup != null) {
    contents.HierarchyGroup = de_HierarchyGroup(data.HierarchyGroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUserHierarchyGroupCommandError
 */
const de_DescribeUserHierarchyGroupCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeUserHierarchyStructureCommand
 */
export const de_DescribeUserHierarchyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeUserHierarchyStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HierarchyStructure != null) {
    contents.HierarchyStructure = de_HierarchyStructure(data.HierarchyStructure, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUserHierarchyStructureCommandError
 */
const de_DescribeUserHierarchyStructureCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DescribeVocabularyCommand
 */
export const de_DescribeVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVocabularyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Vocabulary != null) {
    contents.Vocabulary = de_Vocabulary(data.Vocabulary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVocabularyCommandError
 */
const de_DescribeVocabularyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateApprovedOriginCommand
 */
export const de_DisassociateApprovedOriginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApprovedOriginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateApprovedOriginCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateApprovedOriginCommandError
 */
const de_DisassociateApprovedOriginCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateBotCommand
 */
export const de_DisassociateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateBotCommandError
 */
const de_DisassociateBotCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateInstanceStorageConfigCommand
 */
export const de_DisassociateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateInstanceStorageConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateInstanceStorageConfigCommandError
 */
const de_DisassociateInstanceStorageConfigCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateLambdaFunctionCommand
 */
export const de_DisassociateLambdaFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLambdaFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateLambdaFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLambdaFunctionCommandError
 */
const de_DisassociateLambdaFunctionCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateLexBotCommand
 */
export const de_DisassociateLexBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLexBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateLexBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLexBotCommandError
 */
const de_DisassociateLexBotCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommand
 */
export const de_DisassociatePhoneNumberContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociatePhoneNumberContactFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommandError
 */
const de_DisassociatePhoneNumberContactFlowCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateQueueQuickConnectsCommand
 */
export const de_DisassociateQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateQueueQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateQueueQuickConnectsCommandError
 */
const de_DisassociateQueueQuickConnectsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand
 */
export const de_DisassociateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRoutingProfileQueuesCommandError
 */
const de_DisassociateRoutingProfileQueuesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DisassociateSecurityKeyCommand
 */
export const de_DisassociateSecurityKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSecurityKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateSecurityKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSecurityKeyCommandError
 */
const de_DisassociateSecurityKeyCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DismissUserContactCommand
 */
export const de_DismissUserContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DismissUserContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DismissUserContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DismissUserContactCommandError
 */
const de_DismissUserContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetContactAttributesCommand
 */
export const de_GetContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContactAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = de_Attributes(data.Attributes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetContactAttributesCommandError
 */
const de_GetContactAttributesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetCurrentMetricDataCommand
 */
export const de_GetCurrentMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCurrentMetricDataCommandError(output, context);
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
    contents.MetricResults = de_CurrentMetricResults(data.MetricResults, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCurrentMetricDataCommandError
 */
const de_GetCurrentMetricDataCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetCurrentUserDataCommand
 */
export const de_GetCurrentUserDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCurrentUserDataCommandError(output, context);
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
    contents.UserDataList = de_UserDataList(data.UserDataList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCurrentUserDataCommandError
 */
const de_GetCurrentUserDataCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetFederationTokenCommand
 */
export const de_GetFederationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFederationTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Credentials != null) {
    contents.Credentials = de_Credentials(data.Credentials, context);
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

/**
 * deserializeAws_restJson1GetFederationTokenCommandError
 */
const de_GetFederationTokenCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.connect#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetMetricDataCommand
 */
export const de_GetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMetricDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricResults != null) {
    contents.MetricResults = de_HistoricalMetricResults(data.MetricResults, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMetricDataCommandError
 */
const de_GetMetricDataCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetMetricDataV2Command
 */
export const de_GetMetricDataV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMetricDataV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricResults != null) {
    contents.MetricResults = de_MetricResultsV2(data.MetricResults, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMetricDataV2CommandError
 */
const de_GetMetricDataV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetTaskTemplateCommand
 */
export const de_GetTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTaskTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Constraints != null) {
    contents.Constraints = de_TaskTemplateConstraints(data.Constraints, context);
  }
  if (data.ContactFlowId != null) {
    contents.ContactFlowId = __expectString(data.ContactFlowId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Defaults != null) {
    contents.Defaults = de_TaskTemplateDefaults(data.Defaults, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Fields != null) {
    contents.Fields = de_TaskTemplateFields(data.Fields, context);
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
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTaskTemplateCommandError
 */
const de_GetTaskTemplateCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetTrafficDistributionCommand
 */
export const de_GetTrafficDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTrafficDistributionCommandError(output, context);
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
    contents.TelephonyConfig = de_TelephonyConfig(data.TelephonyConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTrafficDistributionCommandError
 */
const de_GetTrafficDistributionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListAgentStatusesCommand
 */
export const de_ListAgentStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentStatusesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAgentStatusesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AgentStatusSummaryList != null) {
    contents.AgentStatusSummaryList = de_AgentStatusSummaryList(data.AgentStatusSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentStatusesCommandError
 */
const de_ListAgentStatusesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListApprovedOriginsCommand
 */
export const de_ListApprovedOriginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovedOriginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApprovedOriginsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Origins != null) {
    contents.Origins = de_OriginsList(data.Origins, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApprovedOriginsCommandError
 */
const de_ListApprovedOriginsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListBotsCommand
 */
export const de_ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LexBots != null) {
    contents.LexBots = de_LexBotConfigList(data.LexBots, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBotsCommandError
 */
const de_ListBotsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListContactFlowModulesCommand
 */
export const de_ListContactFlowModulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowModulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContactFlowModulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlowModulesSummaryList != null) {
    contents.ContactFlowModulesSummaryList = de_ContactFlowModulesSummaryList(
      data.ContactFlowModulesSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContactFlowModulesCommandError
 */
const de_ListContactFlowModulesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListContactFlowsCommand
 */
export const de_ListContactFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContactFlowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContactFlowSummaryList != null) {
    contents.ContactFlowSummaryList = de_ContactFlowSummaryList(data.ContactFlowSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContactFlowsCommandError
 */
const de_ListContactFlowsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListContactReferencesCommand
 */
export const de_ListContactReferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactReferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContactReferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReferenceSummaryList != null) {
    contents.ReferenceSummaryList = de_ReferenceSummaryList(data.ReferenceSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContactReferencesCommandError
 */
const de_ListContactReferencesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListDefaultVocabulariesCommand
 */
export const de_ListDefaultVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDefaultVocabulariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDefaultVocabulariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DefaultVocabularyList != null) {
    contents.DefaultVocabularyList = de_DefaultVocabularyList(data.DefaultVocabularyList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDefaultVocabulariesCommandError
 */
const de_ListDefaultVocabulariesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListHoursOfOperationsCommand
 */
export const de_ListHoursOfOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHoursOfOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHoursOfOperationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HoursOfOperationSummaryList != null) {
    contents.HoursOfOperationSummaryList = de_HoursOfOperationSummaryList(data.HoursOfOperationSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListHoursOfOperationsCommandError
 */
const de_ListHoursOfOperationsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListInstanceAttributesCommand
 */
export const de_ListInstanceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInstanceAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = de_AttributesList(data.Attributes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInstanceAttributesCommandError
 */
const de_ListInstanceAttributesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceSummaryList != null) {
    contents.InstanceSummaryList = de_InstanceSummaryList(data.InstanceSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInstancesCommandError
 */
const de_ListInstancesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListInstanceStorageConfigsCommand
 */
export const de_ListInstanceStorageConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceStorageConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInstanceStorageConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StorageConfigs != null) {
    contents.StorageConfigs = de_InstanceStorageConfigs(data.StorageConfigs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInstanceStorageConfigsCommandError
 */
const de_ListInstanceStorageConfigsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListIntegrationAssociationsCommand
 */
export const de_ListIntegrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIntegrationAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IntegrationAssociationSummaryList != null) {
    contents.IntegrationAssociationSummaryList = de_IntegrationAssociationSummaryList(
      data.IntegrationAssociationSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIntegrationAssociationsCommandError
 */
const de_ListIntegrationAssociationsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListLambdaFunctionsCommand
 */
export const de_ListLambdaFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLambdaFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLambdaFunctionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LambdaFunctions != null) {
    contents.LambdaFunctions = de_FunctionArnsList(data.LambdaFunctions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLambdaFunctionsCommandError
 */
const de_ListLambdaFunctionsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListLexBotsCommand
 */
export const de_ListLexBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLexBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LexBots != null) {
    contents.LexBots = de_LexBotsList(data.LexBots, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLexBotsCommandError
 */
const de_ListLexBotsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListPhoneNumbersCommand
 */
export const de_ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPhoneNumbersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PhoneNumberSummaryList != null) {
    contents.PhoneNumberSummaryList = de_PhoneNumberSummaryList(data.PhoneNumberSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersCommandError
 */
const de_ListPhoneNumbersCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListPhoneNumbersV2Command
 */
export const de_ListPhoneNumbersV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPhoneNumbersV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ListPhoneNumbersSummaryList != null) {
    contents.ListPhoneNumbersSummaryList = de_ListPhoneNumbersSummaryList(data.ListPhoneNumbersSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersV2CommandError
 */
const de_ListPhoneNumbersV2CommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListPromptsCommand
 */
export const de_ListPromptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPromptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPromptsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PromptSummaryList != null) {
    contents.PromptSummaryList = de_PromptSummaryList(data.PromptSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPromptsCommandError
 */
const de_ListPromptsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListQueueQuickConnectsCommand
 */
export const de_ListQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListQueueQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QuickConnectSummaryList != null) {
    contents.QuickConnectSummaryList = de_QuickConnectSummaryList(data.QuickConnectSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListQueueQuickConnectsCommandError
 */
const de_ListQueueQuickConnectsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListQueuesCommand
 */
export const de_ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QueueSummaryList != null) {
    contents.QueueSummaryList = de_QueueSummaryList(data.QueueSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListQueuesCommandError
 */
const de_ListQueuesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListQuickConnectsCommand
 */
export const de_ListQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListQuickConnectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QuickConnectSummaryList != null) {
    contents.QuickConnectSummaryList = de_QuickConnectSummaryList(data.QuickConnectSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListQuickConnectsCommandError
 */
const de_ListQuickConnectsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListRoutingProfileQueuesCommand
 */
export const de_ListRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RoutingProfileQueueConfigSummaryList != null) {
    contents.RoutingProfileQueueConfigSummaryList = de_RoutingProfileQueueConfigSummaryList(
      data.RoutingProfileQueueConfigSummaryList,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRoutingProfileQueuesCommandError
 */
const de_ListRoutingProfileQueuesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListRoutingProfilesCommand
 */
export const de_ListRoutingProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRoutingProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RoutingProfileSummaryList != null) {
    contents.RoutingProfileSummaryList = de_RoutingProfileSummaryList(data.RoutingProfileSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRoutingProfilesCommandError
 */
const de_ListRoutingProfilesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RuleSummaryList != null) {
    contents.RuleSummaryList = de_RuleSummaryList(data.RuleSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRulesCommandError
 */
const de_ListRulesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListSecurityKeysCommand
 */
export const de_ListSecurityKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSecurityKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SecurityKeys != null) {
    contents.SecurityKeys = de_SecurityKeysList(data.SecurityKeys, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityKeysCommandError
 */
const de_ListSecurityKeysCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListSecurityProfilePermissionsCommand
 */
export const de_ListSecurityProfilePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSecurityProfilePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Permissions != null) {
    contents.Permissions = de_PermissionsList(data.Permissions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityProfilePermissionsCommandError
 */
const de_ListSecurityProfilePermissionsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListSecurityProfilesCommand
 */
export const de_ListSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSecurityProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SecurityProfileSummaryList != null) {
    contents.SecurityProfileSummaryList = de_SecurityProfileSummaryList(data.SecurityProfileSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityProfilesCommandError
 */
const de_ListSecurityProfilesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListTaskTemplatesCommand
 */
export const de_ListTaskTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTaskTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TaskTemplates != null) {
    contents.TaskTemplates = de_TaskTemplateList(data.TaskTemplates, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTaskTemplatesCommandError
 */
const de_ListTaskTemplatesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListTrafficDistributionGroupsCommand
 */
export const de_ListTrafficDistributionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficDistributionGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrafficDistributionGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TrafficDistributionGroupSummaryList != null) {
    contents.TrafficDistributionGroupSummaryList = de_TrafficDistributionGroupSummaryList(
      data.TrafficDistributionGroupSummaryList,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTrafficDistributionGroupsCommandError
 */
const de_ListTrafficDistributionGroupsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListUseCasesCommand
 */
export const de_ListUseCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUseCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUseCasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UseCaseSummaryList != null) {
    contents.UseCaseSummaryList = de_UseCaseSummaryList(data.UseCaseSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUseCasesCommandError
 */
const de_ListUseCasesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListUserHierarchyGroupsCommand
 */
export const de_ListUserHierarchyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUserHierarchyGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UserHierarchyGroupSummaryList != null) {
    contents.UserHierarchyGroupSummaryList = de_HierarchyGroupSummaryList(data.UserHierarchyGroupSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUserHierarchyGroupsCommandError
 */
const de_ListUserHierarchyGroupsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UserSummaryList != null) {
    contents.UserSummaryList = de_UserSummaryList(data.UserSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1MonitorContactCommand
 */
export const de_MonitorContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MonitorContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MonitorContactCommandError(output, context);
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

/**
 * deserializeAws_restJson1MonitorContactCommandError
 */
const de_MonitorContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutUserStatusCommand
 */
export const de_PutUserStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutUserStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutUserStatusCommandError
 */
const de_PutUserStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ReleasePhoneNumberCommand
 */
export const de_ReleasePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReleasePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ReleasePhoneNumberCommandError
 */
const de_ReleasePhoneNumberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ReplicateInstanceCommand
 */
export const de_ReplicateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReplicateInstanceCommandError(output, context);
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

/**
 * deserializeAws_restJson1ReplicateInstanceCommandError
 */
const de_ReplicateInstanceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.connect#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ResumeContactRecordingCommand
 */
export const de_ResumeContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ResumeContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResumeContactRecordingCommandError
 */
const de_ResumeContactRecordingCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const de_SearchAvailablePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchAvailablePhoneNumbersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailableNumbersList != null) {
    contents.AvailableNumbersList = de_AvailableNumbersList(data.AvailableNumbersList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchAvailablePhoneNumbersCommandError
 */
const de_SearchAvailablePhoneNumbersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SearchQueuesCommand
 */
export const de_SearchQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchQueuesCommandError(output, context);
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
    contents.Queues = de_QueueSearchSummaryList(data.Queues, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchQueuesCommandError
 */
const de_SearchQueuesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SearchRoutingProfilesCommand
 */
export const de_SearchRoutingProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoutingProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchRoutingProfilesCommandError(output, context);
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
    contents.RoutingProfiles = de_RoutingProfileList(data.RoutingProfiles, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchRoutingProfilesCommandError
 */
const de_SearchRoutingProfilesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SearchSecurityProfilesCommand
 */
export const de_SearchSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchSecurityProfilesCommandError(output, context);
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
    contents.SecurityProfiles = de_SecurityProfilesSearchSummaryList(data.SecurityProfiles, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchSecurityProfilesCommandError
 */
const de_SearchSecurityProfilesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SearchUsersCommand
 */
export const de_SearchUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchUsersCommandError(output, context);
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
    contents.Users = de_UserSearchSummaryList(data.Users, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchUsersCommandError
 */
const de_SearchUsersCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SearchVocabulariesCommand
 */
export const de_SearchVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchVocabulariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchVocabulariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VocabularySummaryList != null) {
    contents.VocabularySummaryList = de_VocabularySummaryList(data.VocabularySummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchVocabulariesCommandError
 */
const de_SearchVocabulariesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StartChatContactCommand
 */
export const de_StartChatContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChatContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartChatContactCommandError(output, context);
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

/**
 * deserializeAws_restJson1StartChatContactCommandError
 */
const de_StartChatContactCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StartContactRecordingCommand
 */
export const de_StartContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartContactRecordingCommandError
 */
const de_StartContactRecordingCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StartContactStreamingCommand
 */
export const de_StartContactStreamingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactStreamingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartContactStreamingCommandError(output, context);
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

/**
 * deserializeAws_restJson1StartContactStreamingCommandError
 */
const de_StartContactStreamingCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StartOutboundVoiceContactCommand
 */
export const de_StartOutboundVoiceContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundVoiceContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartOutboundVoiceContactCommandError(output, context);
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

/**
 * deserializeAws_restJson1StartOutboundVoiceContactCommandError
 */
const de_StartOutboundVoiceContactCommandError = async (
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
      throw await de_DestinationNotAllowedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OutboundContactNotPermittedException":
    case "com.amazonaws.connect#OutboundContactNotPermittedException":
      throw await de_OutboundContactNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StartTaskContactCommand
 */
export const de_StartTaskContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartTaskContactCommandError(output, context);
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

/**
 * deserializeAws_restJson1StartTaskContactCommandError
 */
const de_StartTaskContactCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StopContactCommand
 */
export const de_StopContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopContactCommandError
 */
const de_StopContactCommandError = async (
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
      throw await de_ContactNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StopContactRecordingCommand
 */
export const de_StopContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopContactRecordingCommandError
 */
const de_StopContactRecordingCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1StopContactStreamingCommand
 */
export const de_StopContactStreamingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactStreamingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopContactStreamingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopContactStreamingCommandError
 */
const de_StopContactStreamingCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SuspendContactRecordingCommand
 */
export const de_SuspendContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SuspendContactRecordingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SuspendContactRecordingCommandError
 */
const de_SuspendContactRecordingCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1TransferContactCommand
 */
export const de_TransferContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TransferContactCommandError(output, context);
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

/**
 * deserializeAws_restJson1TransferContactCommandError
 */
const de_TransferContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateAgentStatusCommand
 */
export const de_UpdateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAgentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentStatusCommandError
 */
const de_UpdateAgentStatusCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactCommand
 */
export const de_UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactCommandError
 */
const de_UpdateContactCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactAttributesCommand
 */
export const de_UpdateContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactAttributesCommandError
 */
const de_UpdateContactAttributesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactFlowContentCommand
 */
export const de_UpdateContactFlowContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactFlowContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowContentCommandError
 */
const de_UpdateContactFlowContentCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidContactFlowException":
    case "com.amazonaws.connect#InvalidContactFlowException":
      throw await de_InvalidContactFlowExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactFlowMetadataCommand
 */
export const de_UpdateContactFlowMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactFlowMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowMetadataCommandError
 */
const de_UpdateContactFlowMetadataCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactFlowModuleContentCommand
 */
export const de_UpdateContactFlowModuleContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactFlowModuleContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowModuleContentCommandError
 */
const de_UpdateContactFlowModuleContentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidContactFlowModuleException":
    case "com.amazonaws.connect#InvalidContactFlowModuleException":
      throw await de_InvalidContactFlowModuleExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactFlowModuleMetadataCommand
 */
export const de_UpdateContactFlowModuleMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactFlowModuleMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowModuleMetadataCommandError
 */
const de_UpdateContactFlowModuleMetadataCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactFlowNameCommand
 */
export const de_UpdateContactFlowNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactFlowNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowNameCommandError
 */
const de_UpdateContactFlowNameCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateContactScheduleCommand
 */
export const de_UpdateContactScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContactScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactScheduleCommandError
 */
const de_UpdateContactScheduleCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateHoursOfOperationCommand
 */
export const de_UpdateHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateHoursOfOperationCommandError
 */
const de_UpdateHoursOfOperationCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateInstanceAttributeCommand
 */
export const de_UpdateInstanceAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInstanceAttributeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInstanceAttributeCommandError
 */
const de_UpdateInstanceAttributeCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateInstanceStorageConfigCommand
 */
export const de_UpdateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInstanceStorageConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInstanceStorageConfigCommandError
 */
const de_UpdateInstanceStorageConfigCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateParticipantRoleConfigCommand
 */
export const de_UpdateParticipantRoleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParticipantRoleConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateParticipantRoleConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateParticipantRoleConfigCommandError
 */
const de_UpdateParticipantRoleConfigCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdatePhoneNumberCommand
 */
export const de_UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePhoneNumberCommandError(output, context);
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

/**
 * deserializeAws_restJson1UpdatePhoneNumberCommandError
 */
const de_UpdatePhoneNumberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateQueueHoursOfOperationCommand
 */
export const de_UpdateQueueHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQueueHoursOfOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueHoursOfOperationCommandError
 */
const de_UpdateQueueHoursOfOperationCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateQueueMaxContactsCommand
 */
export const de_UpdateQueueMaxContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueMaxContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQueueMaxContactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueMaxContactsCommandError
 */
const de_UpdateQueueMaxContactsCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateQueueNameCommand
 */
export const de_UpdateQueueNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQueueNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueNameCommandError
 */
const de_UpdateQueueNameCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand
 */
export const de_UpdateQueueOutboundCallerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueOutboundCallerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQueueOutboundCallerConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommandError
 */
const de_UpdateQueueOutboundCallerConfigCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateQueueStatusCommand
 */
export const de_UpdateQueueStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQueueStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueStatusCommandError
 */
const de_UpdateQueueStatusCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateQuickConnectConfigCommand
 */
export const de_UpdateQuickConnectConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQuickConnectConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQuickConnectConfigCommandError
 */
const de_UpdateQuickConnectConfigCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateQuickConnectNameCommand
 */
export const de_UpdateQuickConnectNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQuickConnectNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQuickConnectNameCommandError
 */
const de_UpdateQuickConnectNameCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand
 */
export const de_UpdateRoutingProfileConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRoutingProfileConcurrencyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommandError
 */
const de_UpdateRoutingProfileConcurrencyCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand
 */
export const de_UpdateRoutingProfileDefaultOutboundQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRoutingProfileDefaultOutboundQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommandError
 */
const de_UpdateRoutingProfileDefaultOutboundQueueCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateRoutingProfileNameCommand
 */
export const de_UpdateRoutingProfileNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRoutingProfileNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileNameCommandError
 */
const de_UpdateRoutingProfileNameCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateRoutingProfileQueuesCommand
 */
export const de_UpdateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRoutingProfileQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileQueuesCommandError
 */
const de_UpdateRoutingProfileQueuesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateRuleCommand
 */
export const de_UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRuleCommandError
 */
const de_UpdateRuleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateSecurityProfileCommand
 */
export const de_UpdateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSecurityProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSecurityProfileCommandError
 */
const de_UpdateSecurityProfileCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateTaskTemplateCommand
 */
export const de_UpdateTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTaskTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Constraints != null) {
    contents.Constraints = de_TaskTemplateConstraints(data.Constraints, context);
  }
  if (data.ContactFlowId != null) {
    contents.ContactFlowId = __expectString(data.ContactFlowId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Defaults != null) {
    contents.Defaults = de_TaskTemplateDefaults(data.Defaults, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Fields != null) {
    contents.Fields = de_TaskTemplateFields(data.Fields, context);
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

/**
 * deserializeAws_restJson1UpdateTaskTemplateCommandError
 */
const de_UpdateTaskTemplateCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "PropertyValidationException":
    case "com.amazonaws.connect#PropertyValidationException":
      throw await de_PropertyValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateTrafficDistributionCommand
 */
export const de_UpdateTrafficDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTrafficDistributionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTrafficDistributionCommandError
 */
const de_UpdateTrafficDistributionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateUserHierarchyCommand
 */
export const de_UpdateUserHierarchyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserHierarchyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserHierarchyCommandError
 */
const de_UpdateUserHierarchyCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand
 */
export const de_UpdateUserHierarchyGroupNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyGroupNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserHierarchyGroupNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserHierarchyGroupNameCommandError
 */
const de_UpdateUserHierarchyGroupNameCommandError = async (
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
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connect#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateUserHierarchyStructureCommand
 */
export const de_UpdateUserHierarchyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserHierarchyStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserHierarchyStructureCommandError
 */
const de_UpdateUserHierarchyStructureCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateUserIdentityInfoCommand
 */
export const de_UpdateUserIdentityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserIdentityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserIdentityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserIdentityInfoCommandError
 */
const de_UpdateUserIdentityInfoCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateUserPhoneConfigCommand
 */
export const de_UpdateUserPhoneConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPhoneConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserPhoneConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserPhoneConfigCommandError
 */
const de_UpdateUserPhoneConfigCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateUserRoutingProfileCommand
 */
export const de_UpdateUserRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserRoutingProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserRoutingProfileCommandError
 */
const de_UpdateUserRoutingProfileCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateUserSecurityProfilesCommand
 */
export const de_UpdateUserSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserSecurityProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserSecurityProfilesCommandError
 */
const de_UpdateUserSecurityProfilesCommandError = async (
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
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.connect#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
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

/**
 * deserializeAws_restJson1ContactFlowNotPublishedExceptionRes
 */
const de_ContactFlowNotPublishedExceptionRes = async (
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

/**
 * deserializeAws_restJson1ContactNotFoundExceptionRes
 */
const de_ContactNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1DestinationNotAllowedExceptionRes
 */
const de_DestinationNotAllowedExceptionRes = async (
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

/**
 * deserializeAws_restJson1DuplicateResourceExceptionRes
 */
const de_DuplicateResourceExceptionRes = async (
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

/**
 * deserializeAws_restJson1IdempotencyExceptionRes
 */
const de_IdempotencyExceptionRes = async (
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

/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidContactFlowExceptionRes
 */
const de_InvalidContactFlowExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContactFlowException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.problems != null) {
    contents.problems = de_Problems(data.problems, context);
  }
  const exception = new InvalidContactFlowException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidContactFlowModuleExceptionRes
 */
const de_InvalidContactFlowModuleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContactFlowModuleException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Problems != null) {
    contents.Problems = de_Problems(data.Problems, context);
  }
  const exception = new InvalidContactFlowModuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
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

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1OutboundContactNotPermittedExceptionRes
 */
const de_OutboundContactNotPermittedExceptionRes = async (
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

/**
 * deserializeAws_restJson1PropertyValidationExceptionRes
 */
const de_PropertyValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PropertyValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.PropertyList != null) {
    contents.PropertyList = de_PropertyValidationExceptionPropertyList(data.PropertyList, context);
  }
  const exception = new PropertyValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceConflictExceptionRes
 */
const de_ResourceConflictExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceNotReadyExceptionRes
 */
const de_ResourceNotReadyExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
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

/**
 * deserializeAws_restJson1UserNotFoundExceptionRes
 */
const de_UserNotFoundExceptionRes = async (
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

/**
 * serializeAws_restJson1AgentsMinOneMaxHundred
 */
const se_AgentsMinOneMaxHundred = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AllowedAccessControlTags
 */
const se_AllowedAccessControlTags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AllowedMonitorCapabilities
 */
const se_AllowedMonitorCapabilities = (input: (MonitorCapability | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AnswerMachineDetectionConfig
 */
const se_AnswerMachineDetectionConfig = (input: AnswerMachineDetectionConfig, context: __SerdeContext): any => {
  return {
    ...(input.AwaitAnswerMachinePrompt != null && { AwaitAnswerMachinePrompt: input.AwaitAnswerMachinePrompt }),
    ...(input.EnableAnswerMachineDetection != null && {
      EnableAnswerMachineDetection: input.EnableAnswerMachineDetection,
    }),
  };
};

/**
 * serializeAws_restJson1AssignContactCategoryActionDefinition
 */
const se_AssignContactCategoryActionDefinition = (
  input: AssignContactCategoryActionDefinition,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1Attributes
 */
const se_Attributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Channels
 */
const se_Channels = (input: (Channel | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ChatMessage
 */
const se_ChatMessage = (input: ChatMessage, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
  };
};

/**
 * serializeAws_restJson1ChatParticipantRoleConfig
 */
const se_ChatParticipantRoleConfig = (input: ChatParticipantRoleConfig, context: __SerdeContext): any => {
  return {
    ...(input.ParticipantTimerConfigList != null && {
      ParticipantTimerConfigList: se_ParticipantTimerConfigList(input.ParticipantTimerConfigList, context),
    }),
  };
};

/**
 * serializeAws_restJson1ChatStreamingConfiguration
 */
const se_ChatStreamingConfiguration = (input: ChatStreamingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.StreamingEndpointArn != null && { StreamingEndpointArn: input.StreamingEndpointArn }),
  };
};

/**
 * serializeAws_restJson1ContactFilter
 */
const se_ContactFilter = (input: ContactFilter, context: __SerdeContext): any => {
  return {
    ...(input.ContactStates != null && { ContactStates: se_ContactStates(input.ContactStates, context) }),
  };
};

/**
 * serializeAws_restJson1ContactReferences
 */
const se_ContactReferences = (input: Record<string, Reference>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Reference(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ContactStates
 */
const se_ContactStates = (input: (ContactState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ControlPlaneTagFilter
 */
const se_ControlPlaneTagFilter = (input: ControlPlaneTagFilter, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && { AndConditions: se_TagAndConditionList(input.AndConditions, context) }),
    ...(input.OrConditions != null && { OrConditions: se_TagOrConditionList(input.OrConditions, context) }),
    ...(input.TagCondition != null && { TagCondition: se_TagCondition(input.TagCondition, context) }),
  };
};

/**
 * serializeAws_restJson1CurrentMetric
 */
const se_CurrentMetric = (input: CurrentMetric, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_restJson1CurrentMetrics
 */
const se_CurrentMetrics = (input: CurrentMetric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CurrentMetric(entry, context);
    });
};

/**
 * serializeAws_restJson1CurrentMetricSortCriteria
 */
const se_CurrentMetricSortCriteria = (input: CurrentMetricSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.SortByMetric != null && { SortByMetric: input.SortByMetric }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_restJson1CurrentMetricSortCriteriaMaxOne
 */
const se_CurrentMetricSortCriteriaMaxOne = (input: CurrentMetricSortCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CurrentMetricSortCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1Distribution
 */
const se_Distribution = (input: Distribution, context: __SerdeContext): any => {
  return {
    ...(input.Percentage != null && { Percentage: input.Percentage }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

/**
 * serializeAws_restJson1DistributionList
 */
const se_DistributionList = (input: Distribution[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Distribution(entry, context);
    });
};

/**
 * serializeAws_restJson1EncryptionConfig
 */
const se_EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

/**
 * serializeAws_restJson1EventBridgeActionDefinition
 */
const se_EventBridgeActionDefinition = (input: EventBridgeActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1Filters
 */
const se_Filters = (input: Filters, context: __SerdeContext): any => {
  return {
    ...(input.Channels != null && { Channels: se_Channels(input.Channels, context) }),
    ...(input.Queues != null && { Queues: se_Queues(input.Queues, context) }),
    ...(input.RoutingProfiles != null && { RoutingProfiles: se_RoutingProfiles(input.RoutingProfiles, context) }),
  };
};

/**
 * serializeAws_restJson1FiltersV2List
 */
const se_FiltersV2List = (input: FilterV2[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterV2(entry, context);
    });
};

/**
 * serializeAws_restJson1FilterV2
 */
const se_FilterV2 = (input: FilterV2, context: __SerdeContext): any => {
  return {
    ...(input.FilterKey != null && { FilterKey: input.FilterKey }),
    ...(input.FilterValues != null && { FilterValues: se_FilterValueList(input.FilterValues, context) }),
  };
};

/**
 * serializeAws_restJson1FilterValueList
 */
const se_FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Groupings
 */
const se_Groupings = (input: (Grouping | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1GroupingsV2
 */
const se_GroupingsV2 = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1HierarchyGroupCondition
 */
const se_HierarchyGroupCondition = (input: HierarchyGroupCondition, context: __SerdeContext): any => {
  return {
    ...(input.HierarchyGroupMatchType != null && { HierarchyGroupMatchType: input.HierarchyGroupMatchType }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1HierarchyLevelUpdate
 */
const se_HierarchyLevelUpdate = (input: HierarchyLevelUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1HierarchyStructureUpdate
 */
const se_HierarchyStructureUpdate = (input: HierarchyStructureUpdate, context: __SerdeContext): any => {
  return {
    ...(input.LevelFive != null && { LevelFive: se_HierarchyLevelUpdate(input.LevelFive, context) }),
    ...(input.LevelFour != null && { LevelFour: se_HierarchyLevelUpdate(input.LevelFour, context) }),
    ...(input.LevelOne != null && { LevelOne: se_HierarchyLevelUpdate(input.LevelOne, context) }),
    ...(input.LevelThree != null && { LevelThree: se_HierarchyLevelUpdate(input.LevelThree, context) }),
    ...(input.LevelTwo != null && { LevelTwo: se_HierarchyLevelUpdate(input.LevelTwo, context) }),
  };
};

/**
 * serializeAws_restJson1HistoricalMetric
 */
const se_HistoricalMetric = (input: HistoricalMetric, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Threshold != null && { Threshold: se_Threshold(input.Threshold, context) }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_restJson1HistoricalMetrics
 */
const se_HistoricalMetrics = (input: HistoricalMetric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HistoricalMetric(entry, context);
    });
};

/**
 * serializeAws_restJson1HoursOfOperationConfig
 */
const se_HoursOfOperationConfig = (input: HoursOfOperationConfig, context: __SerdeContext): any => {
  return {
    ...(input.Day != null && { Day: input.Day }),
    ...(input.EndTime != null && { EndTime: se_HoursOfOperationTimeSlice(input.EndTime, context) }),
    ...(input.StartTime != null && { StartTime: se_HoursOfOperationTimeSlice(input.StartTime, context) }),
  };
};

/**
 * serializeAws_restJson1HoursOfOperationConfigList
 */
const se_HoursOfOperationConfigList = (input: HoursOfOperationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HoursOfOperationConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1HoursOfOperationTimeSlice
 */
const se_HoursOfOperationTimeSlice = (input: HoursOfOperationTimeSlice, context: __SerdeContext): any => {
  return {
    ...(input.Hours != null && { Hours: input.Hours }),
    ...(input.Minutes != null && { Minutes: input.Minutes }),
  };
};

/**
 * serializeAws_restJson1InstanceStorageConfig
 */
const se_InstanceStorageConfig = (input: InstanceStorageConfig, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.KinesisFirehoseConfig != null && {
      KinesisFirehoseConfig: se_KinesisFirehoseConfig(input.KinesisFirehoseConfig, context),
    }),
    ...(input.KinesisStreamConfig != null && {
      KinesisStreamConfig: se_KinesisStreamConfig(input.KinesisStreamConfig, context),
    }),
    ...(input.KinesisVideoStreamConfig != null && {
      KinesisVideoStreamConfig: se_KinesisVideoStreamConfig(input.KinesisVideoStreamConfig, context),
    }),
    ...(input.S3Config != null && { S3Config: se_S3Config(input.S3Config, context) }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
  };
};

/**
 * serializeAws_restJson1InvisibleFieldInfo
 */
const se_InvisibleFieldInfo = (input: InvisibleFieldInfo, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: se_TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

/**
 * serializeAws_restJson1InvisibleTaskTemplateFields
 */
const se_InvisibleTaskTemplateFields = (input: InvisibleFieldInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InvisibleFieldInfo(entry, context);
    });
};

/**
 * serializeAws_restJson1KinesisFirehoseConfig
 */
const se_KinesisFirehoseConfig = (input: KinesisFirehoseConfig, context: __SerdeContext): any => {
  return {
    ...(input.FirehoseArn != null && { FirehoseArn: input.FirehoseArn }),
  };
};

/**
 * serializeAws_restJson1KinesisStreamConfig
 */
const se_KinesisStreamConfig = (input: KinesisStreamConfig, context: __SerdeContext): any => {
  return {
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

/**
 * serializeAws_restJson1KinesisVideoStreamConfig
 */
const se_KinesisVideoStreamConfig = (input: KinesisVideoStreamConfig, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionConfig != null && { EncryptionConfig: se_EncryptionConfig(input.EncryptionConfig, context) }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
  };
};

/**
 * serializeAws_restJson1LexBot
 */
const se_LexBot = (input: LexBot, context: __SerdeContext): any => {
  return {
    ...(input.LexRegion != null && { LexRegion: input.LexRegion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1LexV2Bot
 */
const se_LexV2Bot = (input: LexV2Bot, context: __SerdeContext): any => {
  return {
    ...(input.AliasArn != null && { AliasArn: input.AliasArn }),
  };
};

/**
 * serializeAws_restJson1MediaConcurrencies
 */
const se_MediaConcurrencies = (input: MediaConcurrency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MediaConcurrency(entry, context);
    });
};

/**
 * serializeAws_restJson1MediaConcurrency
 */
const se_MediaConcurrency = (input: MediaConcurrency, context: __SerdeContext): any => {
  return {
    ...(input.Channel != null && { Channel: input.Channel }),
    ...(input.Concurrency != null && { Concurrency: input.Concurrency }),
  };
};

/**
 * serializeAws_restJson1MetricFiltersV2List
 */
const se_MetricFiltersV2List = (input: MetricFilterV2[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricFilterV2(entry, context);
    });
};

/**
 * serializeAws_restJson1MetricFilterV2
 */
const se_MetricFilterV2 = (input: MetricFilterV2, context: __SerdeContext): any => {
  return {
    ...(input.MetricFilterKey != null && { MetricFilterKey: input.MetricFilterKey }),
    ...(input.MetricFilterValues != null && {
      MetricFilterValues: se_MetricFilterValueList(input.MetricFilterValues, context),
    }),
  };
};

/**
 * serializeAws_restJson1MetricFilterValueList
 */
const se_MetricFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MetricsV2
 */
const se_MetricsV2 = (input: MetricV2[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricV2(entry, context);
    });
};

/**
 * serializeAws_restJson1MetricV2
 */
const se_MetricV2 = (input: MetricV2, context: __SerdeContext): any => {
  return {
    ...(input.MetricFilters != null && { MetricFilters: se_MetricFiltersV2List(input.MetricFilters, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Threshold != null && { Threshold: se_ThresholdCollections(input.Threshold, context) }),
  };
};

/**
 * serializeAws_restJson1NotificationRecipientType
 */
const se_NotificationRecipientType = (input: NotificationRecipientType, context: __SerdeContext): any => {
  return {
    ...(input.UserIds != null && { UserIds: se_UserIdList(input.UserIds, context) }),
    ...(input.UserTags != null && { UserTags: se_UserTagMap(input.UserTags, context) }),
  };
};

/**
 * serializeAws_restJson1OutboundCallerConfig
 */
const se_OutboundCallerConfig = (input: OutboundCallerConfig, context: __SerdeContext): any => {
  return {
    ...(input.OutboundCallerIdName != null && { OutboundCallerIdName: input.OutboundCallerIdName }),
    ...(input.OutboundCallerIdNumberId != null && { OutboundCallerIdNumberId: input.OutboundCallerIdNumberId }),
    ...(input.OutboundFlowId != null && { OutboundFlowId: input.OutboundFlowId }),
  };
};

/**
 * serializeAws_restJson1ParticipantDetails
 */
const se_ParticipantDetails = (input: ParticipantDetails, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
  };
};

/**
 * serializeAws_restJson1ParticipantTimerConfigList
 */
const se_ParticipantTimerConfigList = (input: ParticipantTimerConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParticipantTimerConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ParticipantTimerConfiguration
 */
const se_ParticipantTimerConfiguration = (input: ParticipantTimerConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
    ...(input.TimerType != null && { TimerType: input.TimerType }),
    ...(input.TimerValue != null && { TimerValue: se_ParticipantTimerValue(input.TimerValue, context) }),
  };
};

/**
 * serializeAws_restJson1ParticipantTimerValue
 */
const se_ParticipantTimerValue = (input: ParticipantTimerValue, context: __SerdeContext): any => {
  return ParticipantTimerValue.visit(input, {
    ParticipantTimerAction: (value) => ({ ParticipantTimerAction: value }),
    ParticipantTimerDurationInMinutes: (value) => ({ ParticipantTimerDurationInMinutes: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1PermissionsList
 */
const se_PermissionsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PersistentChat
 */
const se_PersistentChat = (input: PersistentChat, context: __SerdeContext): any => {
  return {
    ...(input.RehydrationType != null && { RehydrationType: input.RehydrationType }),
    ...(input.SourceContactId != null && { SourceContactId: input.SourceContactId }),
  };
};

/**
 * serializeAws_restJson1PhoneNumberCountryCodes
 */
const se_PhoneNumberCountryCodes = (input: (PhoneNumberCountryCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PhoneNumberQuickConnectConfig
 */
const se_PhoneNumberQuickConnectConfig = (input: PhoneNumberQuickConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
  };
};

/**
 * serializeAws_restJson1PhoneNumberTypes
 */
const se_PhoneNumberTypes = (input: (PhoneNumberType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1QueueQuickConnectConfig
 */
const se_QueueQuickConnectConfig = (input: QueueQuickConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.QueueId != null && { QueueId: input.QueueId }),
  };
};

/**
 * serializeAws_restJson1Queues
 */
const se_Queues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1QueueSearchConditionList
 */
const se_QueueSearchConditionList = (input: QueueSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_QueueSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1QueueSearchCriteria
 */
const se_QueueSearchCriteria = (input: QueueSearchCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && { AndConditions: se_QueueSearchConditionList(input.AndConditions, context) }),
    ...(input.OrConditions != null && { OrConditions: se_QueueSearchConditionList(input.OrConditions, context) }),
    ...(input.QueueTypeCondition != null && { QueueTypeCondition: input.QueueTypeCondition }),
    ...(input.StringCondition != null && { StringCondition: se_StringCondition(input.StringCondition, context) }),
  };
};

/**
 * serializeAws_restJson1QueueSearchFilter
 */
const se_QueueSearchFilter = (input: QueueSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.TagFilter != null && { TagFilter: se_ControlPlaneTagFilter(input.TagFilter, context) }),
  };
};

/**
 * serializeAws_restJson1QuickConnectConfig
 */
const se_QuickConnectConfig = (input: QuickConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.PhoneConfig != null && { PhoneConfig: se_PhoneNumberQuickConnectConfig(input.PhoneConfig, context) }),
    ...(input.QueueConfig != null && { QueueConfig: se_QueueQuickConnectConfig(input.QueueConfig, context) }),
    ...(input.QuickConnectType != null && { QuickConnectType: input.QuickConnectType }),
    ...(input.UserConfig != null && { UserConfig: se_UserQuickConnectConfig(input.UserConfig, context) }),
  };
};

/**
 * serializeAws_restJson1QuickConnectsList
 */
const se_QuickConnectsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ReadOnlyFieldInfo
 */
const se_ReadOnlyFieldInfo = (input: ReadOnlyFieldInfo, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: se_TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

/**
 * serializeAws_restJson1ReadOnlyTaskTemplateFields
 */
const se_ReadOnlyTaskTemplateFields = (input: ReadOnlyFieldInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReadOnlyFieldInfo(entry, context);
    });
};

/**
 * serializeAws_restJson1Reference
 */
const se_Reference = (input: Reference, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1RequiredFieldInfo
 */
const se_RequiredFieldInfo = (input: RequiredFieldInfo, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: se_TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

/**
 * serializeAws_restJson1RequiredTaskTemplateFields
 */
const se_RequiredTaskTemplateFields = (input: RequiredFieldInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RequiredFieldInfo(entry, context);
    });
};

/**
 * serializeAws_restJson1RoutingProfileQueueConfig
 */
const se_RoutingProfileQueueConfig = (input: RoutingProfileQueueConfig, context: __SerdeContext): any => {
  return {
    ...(input.Delay != null && { Delay: input.Delay }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.QueueReference != null && {
      QueueReference: se_RoutingProfileQueueReference(input.QueueReference, context),
    }),
  };
};

/**
 * serializeAws_restJson1RoutingProfileQueueConfigList
 */
const se_RoutingProfileQueueConfigList = (input: RoutingProfileQueueConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoutingProfileQueueConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1RoutingProfileQueueReference
 */
const se_RoutingProfileQueueReference = (input: RoutingProfileQueueReference, context: __SerdeContext): any => {
  return {
    ...(input.Channel != null && { Channel: input.Channel }),
    ...(input.QueueId != null && { QueueId: input.QueueId }),
  };
};

/**
 * serializeAws_restJson1RoutingProfileQueueReferenceList
 */
const se_RoutingProfileQueueReferenceList = (input: RoutingProfileQueueReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoutingProfileQueueReference(entry, context);
    });
};

/**
 * serializeAws_restJson1RoutingProfiles
 */
const se_RoutingProfiles = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RoutingProfileSearchConditionList
 */
const se_RoutingProfileSearchConditionList = (input: RoutingProfileSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoutingProfileSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1RoutingProfileSearchCriteria
 */
const se_RoutingProfileSearchCriteria = (input: RoutingProfileSearchCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && {
      AndConditions: se_RoutingProfileSearchConditionList(input.AndConditions, context),
    }),
    ...(input.OrConditions != null && {
      OrConditions: se_RoutingProfileSearchConditionList(input.OrConditions, context),
    }),
    ...(input.StringCondition != null && { StringCondition: se_StringCondition(input.StringCondition, context) }),
  };
};

/**
 * serializeAws_restJson1RoutingProfileSearchFilter
 */
const se_RoutingProfileSearchFilter = (input: RoutingProfileSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.TagFilter != null && { TagFilter: se_ControlPlaneTagFilter(input.TagFilter, context) }),
  };
};

/**
 * serializeAws_restJson1RuleAction
 */
const se_RuleAction = (input: RuleAction, context: __SerdeContext): any => {
  return {
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.AssignContactCategoryAction != null && {
      AssignContactCategoryAction: se_AssignContactCategoryActionDefinition(input.AssignContactCategoryAction, context),
    }),
    ...(input.EventBridgeAction != null && {
      EventBridgeAction: se_EventBridgeActionDefinition(input.EventBridgeAction, context),
    }),
    ...(input.SendNotificationAction != null && {
      SendNotificationAction: se_SendNotificationActionDefinition(input.SendNotificationAction, context),
    }),
    ...(input.TaskAction != null && { TaskAction: se_TaskActionDefinition(input.TaskAction, context) }),
  };
};

/**
 * serializeAws_restJson1RuleActions
 */
const se_RuleActions = (input: RuleAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RuleAction(entry, context);
    });
};

/**
 * serializeAws_restJson1RuleTriggerEventSource
 */
const se_RuleTriggerEventSource = (input: RuleTriggerEventSource, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceName != null && { EventSourceName: input.EventSourceName }),
    ...(input.IntegrationAssociationId != null && { IntegrationAssociationId: input.IntegrationAssociationId }),
  };
};

/**
 * serializeAws_restJson1S3Config
 */
const se_S3Config = (input: S3Config, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.BucketPrefix != null && { BucketPrefix: input.BucketPrefix }),
    ...(input.EncryptionConfig != null && { EncryptionConfig: se_EncryptionConfig(input.EncryptionConfig, context) }),
  };
};

/**
 * serializeAws_restJson1SecurityProfileIds
 */
const se_SecurityProfileIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SecurityProfileSearchConditionList
 */
const se_SecurityProfileSearchConditionList = (
  input: SecurityProfileSearchCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SecurityProfileSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1SecurityProfileSearchCriteria
 */
const se_SecurityProfileSearchCriteria = (input: SecurityProfileSearchCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && {
      AndConditions: se_SecurityProfileSearchConditionList(input.AndConditions, context),
    }),
    ...(input.OrConditions != null && {
      OrConditions: se_SecurityProfileSearchConditionList(input.OrConditions, context),
    }),
    ...(input.StringCondition != null && { StringCondition: se_StringCondition(input.StringCondition, context) }),
  };
};

/**
 * serializeAws_restJson1SecurityProfilesSearchFilter
 */
const se_SecurityProfilesSearchFilter = (input: SecurityProfilesSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.TagFilter != null && { TagFilter: se_ControlPlaneTagFilter(input.TagFilter, context) }),
  };
};

/**
 * serializeAws_restJson1SendNotificationActionDefinition
 */
const se_SendNotificationActionDefinition = (input: SendNotificationActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.DeliveryMethod != null && { DeliveryMethod: input.DeliveryMethod }),
    ...(input.Recipient != null && { Recipient: se_NotificationRecipientType(input.Recipient, context) }),
    ...(input.Subject != null && { Subject: input.Subject }),
  };
};

/**
 * serializeAws_restJson1SingleSelectOptions
 */
const se_SingleSelectOptions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StringCondition
 */
const se_StringCondition = (input: StringCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonType != null && { ComparisonType: input.ComparisonType }),
    ...(input.FieldName != null && { FieldName: input.FieldName }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1SupportedMessagingContentTypes
 */
const se_SupportedMessagingContentTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagAndConditionList
 */
const se_TagAndConditionList = (input: TagCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagCondition(entry, context);
    });
};

/**
 * serializeAws_restJson1TagCondition
 */
const se_TagCondition = (input: TagCondition, context: __SerdeContext): any => {
  return {
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValue != null && { TagValue: input.TagValue }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TagOrConditionList
 */
const se_TagOrConditionList = (input: TagCondition[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagAndConditionList(entry, context);
    });
};

/**
 * serializeAws_restJson1TagRestrictedResourceList
 */
const se_TagRestrictedResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TaskActionDefinition
 */
const se_TaskActionDefinition = (input: TaskActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.References != null && { References: se_ContactReferences(input.References, context) }),
  };
};

/**
 * serializeAws_restJson1TaskTemplateConstraints
 */
const se_TaskTemplateConstraints = (input: TaskTemplateConstraints, context: __SerdeContext): any => {
  return {
    ...(input.InvisibleFields != null && {
      InvisibleFields: se_InvisibleTaskTemplateFields(input.InvisibleFields, context),
    }),
    ...(input.ReadOnlyFields != null && {
      ReadOnlyFields: se_ReadOnlyTaskTemplateFields(input.ReadOnlyFields, context),
    }),
    ...(input.RequiredFields != null && {
      RequiredFields: se_RequiredTaskTemplateFields(input.RequiredFields, context),
    }),
  };
};

/**
 * serializeAws_restJson1TaskTemplateDefaultFieldValue
 */
const se_TaskTemplateDefaultFieldValue = (input: TaskTemplateDefaultFieldValue, context: __SerdeContext): any => {
  return {
    ...(input.DefaultValue != null && { DefaultValue: input.DefaultValue }),
    ...(input.Id != null && { Id: se_TaskTemplateFieldIdentifier(input.Id, context) }),
  };
};

/**
 * serializeAws_restJson1TaskTemplateDefaultFieldValueList
 */
const se_TaskTemplateDefaultFieldValueList = (input: TaskTemplateDefaultFieldValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TaskTemplateDefaultFieldValue(entry, context);
    });
};

/**
 * serializeAws_restJson1TaskTemplateDefaults
 */
const se_TaskTemplateDefaults = (input: TaskTemplateDefaults, context: __SerdeContext): any => {
  return {
    ...(input.DefaultFieldValues != null && {
      DefaultFieldValues: se_TaskTemplateDefaultFieldValueList(input.DefaultFieldValues, context),
    }),
  };
};

/**
 * serializeAws_restJson1TaskTemplateField
 */
const se_TaskTemplateField = (input: TaskTemplateField, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: se_TaskTemplateFieldIdentifier(input.Id, context) }),
    ...(input.SingleSelectOptions != null && {
      SingleSelectOptions: se_SingleSelectOptions(input.SingleSelectOptions, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1TaskTemplateFieldIdentifier
 */
const se_TaskTemplateFieldIdentifier = (input: TaskTemplateFieldIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1TaskTemplateFields
 */
const se_TaskTemplateFields = (input: TaskTemplateField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TaskTemplateField(entry, context);
    });
};

/**
 * serializeAws_restJson1TelephonyConfig
 */
const se_TelephonyConfig = (input: TelephonyConfig, context: __SerdeContext): any => {
  return {
    ...(input.Distributions != null && { Distributions: se_DistributionList(input.Distributions, context) }),
  };
};

/**
 * serializeAws_restJson1Threshold
 */
const se_Threshold = (input: Threshold, context: __SerdeContext): any => {
  return {
    ...(input.Comparison != null && { Comparison: input.Comparison }),
    ...(input.ThresholdValue != null && { ThresholdValue: __serializeFloat(input.ThresholdValue) }),
  };
};

/**
 * serializeAws_restJson1ThresholdCollections
 */
const se_ThresholdCollections = (input: ThresholdV2[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ThresholdV2(entry, context);
    });
};

/**
 * serializeAws_restJson1ThresholdV2
 */
const se_ThresholdV2 = (input: ThresholdV2, context: __SerdeContext): any => {
  return {
    ...(input.Comparison != null && { Comparison: input.Comparison }),
    ...(input.ThresholdValue != null && { ThresholdValue: __serializeFloat(input.ThresholdValue) }),
  };
};

/**
 * serializeAws_restJson1UpdateParticipantRoleConfigChannelInfo
 */
const se_UpdateParticipantRoleConfigChannelInfo = (
  input: UpdateParticipantRoleConfigChannelInfo,
  context: __SerdeContext
): any => {
  return UpdateParticipantRoleConfigChannelInfo.visit(input, {
    Chat: (value) => ({ Chat: se_ChatParticipantRoleConfig(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1UserDataFilters
 */
const se_UserDataFilters = (input: UserDataFilters, context: __SerdeContext): any => {
  return {
    ...(input.Agents != null && { Agents: se_AgentsMinOneMaxHundred(input.Agents, context) }),
    ...(input.ContactFilter != null && { ContactFilter: se_ContactFilter(input.ContactFilter, context) }),
    ...(input.Queues != null && { Queues: se_Queues(input.Queues, context) }),
    ...(input.RoutingProfiles != null && { RoutingProfiles: se_RoutingProfiles(input.RoutingProfiles, context) }),
    ...(input.UserHierarchyGroups != null && {
      UserHierarchyGroups: se_UserDataHierarchyGroups(input.UserHierarchyGroups, context),
    }),
  };
};

/**
 * serializeAws_restJson1UserDataHierarchyGroups
 */
const se_UserDataHierarchyGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1UserIdentityInfo
 */
const se_UserIdentityInfo = (input: UserIdentityInfo, context: __SerdeContext): any => {
  return {
    ...(input.Email != null && { Email: input.Email }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.Mobile != null && { Mobile: input.Mobile }),
    ...(input.SecondaryEmail != null && { SecondaryEmail: input.SecondaryEmail }),
  };
};

/**
 * serializeAws_restJson1UserIdList
 */
const se_UserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1UserPhoneConfig
 */
const se_UserPhoneConfig = (input: UserPhoneConfig, context: __SerdeContext): any => {
  return {
    ...(input.AfterContactWorkTimeLimit != null && { AfterContactWorkTimeLimit: input.AfterContactWorkTimeLimit }),
    ...(input.AutoAccept != null && { AutoAccept: input.AutoAccept }),
    ...(input.DeskPhoneNumber != null && { DeskPhoneNumber: input.DeskPhoneNumber }),
    ...(input.PhoneType != null && { PhoneType: input.PhoneType }),
  };
};

/**
 * serializeAws_restJson1UserQuickConnectConfig
 */
const se_UserQuickConnectConfig = (input: UserQuickConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.ContactFlowId != null && { ContactFlowId: input.ContactFlowId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_restJson1UserSearchConditionList
 */
const se_UserSearchConditionList = (input: UserSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UserSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1UserSearchCriteria
 */
const se_UserSearchCriteria = (input: UserSearchCriteria, context: __SerdeContext): any => {
  return {
    ...(input.AndConditions != null && { AndConditions: se_UserSearchConditionList(input.AndConditions, context) }),
    ...(input.HierarchyGroupCondition != null && {
      HierarchyGroupCondition: se_HierarchyGroupCondition(input.HierarchyGroupCondition, context),
    }),
    ...(input.OrConditions != null && { OrConditions: se_UserSearchConditionList(input.OrConditions, context) }),
    ...(input.StringCondition != null && { StringCondition: se_StringCondition(input.StringCondition, context) }),
  };
};

/**
 * serializeAws_restJson1UserSearchFilter
 */
const se_UserSearchFilter = (input: UserSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.TagFilter != null && { TagFilter: se_ControlPlaneTagFilter(input.TagFilter, context) }),
  };
};

/**
 * serializeAws_restJson1UserTagMap
 */
const se_UserTagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1VoiceRecordingConfiguration
 */
const se_VoiceRecordingConfiguration = (input: VoiceRecordingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.VoiceRecordingTrack != null && { VoiceRecordingTrack: input.VoiceRecordingTrack }),
  };
};

/**
 * deserializeAws_restJson1ActionSummaries
 */
const de_ActionSummaries = (output: any, context: __SerdeContext): ActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActionSummary
 */
const de_ActionSummary = (output: any, context: __SerdeContext): ActionSummary => {
  return {
    ActionType: __expectString(output.ActionType),
  } as any;
};

/**
 * deserializeAws_restJson1AgentContactReference
 */
const de_AgentContactReference = (output: any, context: __SerdeContext): AgentContactReference => {
  return {
    AgentContactState: __expectString(output.AgentContactState),
    Channel: __expectString(output.Channel),
    ConnectedToAgentTimestamp:
      output.ConnectedToAgentTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConnectedToAgentTimestamp)))
        : undefined,
    ContactId: __expectString(output.ContactId),
    InitiationMethod: __expectString(output.InitiationMethod),
    Queue: output.Queue != null ? de_QueueReference(output.Queue, context) : undefined,
    StateStartTimestamp:
      output.StateStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StateStartTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AgentContactReferenceList
 */
const de_AgentContactReferenceList = (output: any, context: __SerdeContext): AgentContactReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentContactReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AgentInfo
 */
const de_AgentInfo = (output: any, context: __SerdeContext): AgentInfo => {
  return {
    ConnectedToAgentTimestamp:
      output.ConnectedToAgentTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConnectedToAgentTimestamp)))
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1AgentStatus
 */
const de_AgentStatus = (output: any, context: __SerdeContext): AgentStatus => {
  return {
    AgentStatusARN: __expectString(output.AgentStatusARN),
    AgentStatusId: __expectString(output.AgentStatusId),
    Description: __expectString(output.Description),
    DisplayOrder: __expectInt32(output.DisplayOrder),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1AgentStatusReference
 */
const de_AgentStatusReference = (output: any, context: __SerdeContext): AgentStatusReference => {
  return {
    StatusArn: __expectString(output.StatusArn),
    StatusName: __expectString(output.StatusName),
    StatusStartTimestamp:
      output.StatusStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StatusStartTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AgentStatusSummary
 */
const de_AgentStatusSummary = (output: any, context: __SerdeContext): AgentStatusSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1AgentStatusSummaryList
 */
const de_AgentStatusSummaryList = (output: any, context: __SerdeContext): AgentStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentStatusSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AllowedAccessControlTags
 */
const de_AllowedAccessControlTags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AssignContactCategoryActionDefinition
 */
const de_AssignContactCategoryActionDefinition = (
  output: any,
  context: __SerdeContext
): AssignContactCategoryActionDefinition => {
  return {} as any;
};

/**
 * deserializeAws_restJson1AttachmentReference
 */
const de_AttachmentReference = (output: any, context: __SerdeContext): AttachmentReference => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    AttributeType: __expectString(output.AttributeType),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1Attributes
 */
const de_Attributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AttributesList
 */
const de_AttributesList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AvailableNumbersList
 */
const de_AvailableNumbersList = (output: any, context: __SerdeContext): AvailableNumberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AvailableNumberSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AvailableNumberSummary
 */
const de_AvailableNumberSummary = (output: any, context: __SerdeContext): AvailableNumberSummary => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberType: __expectString(output.PhoneNumberType),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelToCountMap
 */
const de_ChannelToCountMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [Channel | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ClaimedPhoneNumberSummary
 */
const de_ClaimedPhoneNumberSummary = (output: any, context: __SerdeContext): ClaimedPhoneNumberSummary => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberDescription: __expectString(output.PhoneNumberDescription),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    PhoneNumberStatus:
      output.PhoneNumberStatus != null ? de_PhoneNumberStatus(output.PhoneNumberStatus, context) : undefined,
    PhoneNumberType: __expectString(output.PhoneNumberType),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

/**
 * deserializeAws_restJson1Contact
 */
const de_Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    AgentInfo: output.AgentInfo != null ? de_AgentInfo(output.AgentInfo, context) : undefined,
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
    QueueInfo: output.QueueInfo != null ? de_QueueInfo(output.QueueInfo, context) : undefined,
    RelatedContactId: __expectString(output.RelatedContactId),
    ScheduledTimestamp:
      output.ScheduledTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScheduledTimestamp)))
        : undefined,
    WisdomInfo: output.WisdomInfo != null ? de_WisdomInfo(output.WisdomInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContactFlow
 */
const de_ContactFlow = (output: any, context: __SerdeContext): ContactFlow => {
  return {
    Arn: __expectString(output.Arn),
    Content: __expectString(output.Content),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ContactFlowModule
 */
const de_ContactFlowModule = (output: any, context: __SerdeContext): ContactFlowModule => {
  return {
    Arn: __expectString(output.Arn),
    Content: __expectString(output.Content),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContactFlowModulesSummaryList
 */
const de_ContactFlowModulesSummaryList = (output: any, context: __SerdeContext): ContactFlowModuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContactFlowModuleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ContactFlowModuleSummary
 */
const de_ContactFlowModuleSummary = (output: any, context: __SerdeContext): ContactFlowModuleSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1ContactFlowSummary
 */
const de_ContactFlowSummary = (output: any, context: __SerdeContext): ContactFlowSummary => {
  return {
    Arn: __expectString(output.Arn),
    ContactFlowState: __expectString(output.ContactFlowState),
    ContactFlowType: __expectString(output.ContactFlowType),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ContactFlowSummaryList
 */
const de_ContactFlowSummaryList = (output: any, context: __SerdeContext): ContactFlowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContactFlowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ContactReferences
 */
const de_ContactReferences = (output: any, context: __SerdeContext): Record<string, Reference> => {
  return Object.entries(output).reduce((acc: Record<string, Reference>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Reference(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Credentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
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

/**
 * deserializeAws_restJson1CurrentMetric
 */
const de_CurrentMetric = (output: any, context: __SerdeContext): CurrentMetric => {
  return {
    Name: __expectString(output.Name),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_restJson1CurrentMetricData
 */
const de_CurrentMetricData = (output: any, context: __SerdeContext): CurrentMetricData => {
  return {
    Metric: output.Metric != null ? de_CurrentMetric(output.Metric, context) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1CurrentMetricDataCollections
 */
const de_CurrentMetricDataCollections = (output: any, context: __SerdeContext): CurrentMetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CurrentMetricData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CurrentMetricResult
 */
const de_CurrentMetricResult = (output: any, context: __SerdeContext): CurrentMetricResult => {
  return {
    Collections: output.Collections != null ? de_CurrentMetricDataCollections(output.Collections, context) : undefined,
    Dimensions: output.Dimensions != null ? de_Dimensions(output.Dimensions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CurrentMetricResults
 */
const de_CurrentMetricResults = (output: any, context: __SerdeContext): CurrentMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CurrentMetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DateReference
 */
const de_DateReference = (output: any, context: __SerdeContext): DateReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1DefaultVocabulary
 */
const de_DefaultVocabulary = (output: any, context: __SerdeContext): DefaultVocabulary => {
  return {
    InstanceId: __expectString(output.InstanceId),
    LanguageCode: __expectString(output.LanguageCode),
    VocabularyId: __expectString(output.VocabularyId),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

/**
 * deserializeAws_restJson1DefaultVocabularyList
 */
const de_DefaultVocabularyList = (output: any, context: __SerdeContext): DefaultVocabulary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DefaultVocabulary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Dimensions
 */
const de_Dimensions = (output: any, context: __SerdeContext): Dimensions => {
  return {
    Channel: __expectString(output.Channel),
    Queue: output.Queue != null ? de_QueueReference(output.Queue, context) : undefined,
    RoutingProfile:
      output.RoutingProfile != null ? de_RoutingProfileReference(output.RoutingProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DimensionsV2Map
 */
const de_DimensionsV2Map = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Distribution
 */
const de_Distribution = (output: any, context: __SerdeContext): Distribution => {
  return {
    Percentage: __expectInt32(output.Percentage),
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_restJson1DistributionList
 */
const de_DistributionList = (output: any, context: __SerdeContext): Distribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Distribution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EmailReference
 */
const de_EmailReference = (output: any, context: __SerdeContext): EmailReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionConfig
 */
const de_EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    KeyId: __expectString(output.KeyId),
  } as any;
};

/**
 * deserializeAws_restJson1EventBridgeActionDefinition
 */
const de_EventBridgeActionDefinition = (output: any, context: __SerdeContext): EventBridgeActionDefinition => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionArnsList
 */
const de_FunctionArnsList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1HierarchyGroup
 */
const de_HierarchyGroup = (output: any, context: __SerdeContext): HierarchyGroup => {
  return {
    Arn: __expectString(output.Arn),
    HierarchyPath: output.HierarchyPath != null ? de_HierarchyPath(output.HierarchyPath, context) : undefined,
    Id: __expectString(output.Id),
    LevelId: __expectString(output.LevelId),
    Name: __expectString(output.Name),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HierarchyGroupSummary
 */
const de_HierarchyGroupSummary = (output: any, context: __SerdeContext): HierarchyGroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1HierarchyGroupSummaryList
 */
const de_HierarchyGroupSummaryList = (output: any, context: __SerdeContext): HierarchyGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HierarchyGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HierarchyGroupSummaryReference
 */
const de_HierarchyGroupSummaryReference = (output: any, context: __SerdeContext): HierarchyGroupSummaryReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1HierarchyLevel
 */
const de_HierarchyLevel = (output: any, context: __SerdeContext): HierarchyLevel => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1HierarchyPath
 */
const de_HierarchyPath = (output: any, context: __SerdeContext): HierarchyPath => {
  return {
    LevelFive: output.LevelFive != null ? de_HierarchyGroupSummary(output.LevelFive, context) : undefined,
    LevelFour: output.LevelFour != null ? de_HierarchyGroupSummary(output.LevelFour, context) : undefined,
    LevelOne: output.LevelOne != null ? de_HierarchyGroupSummary(output.LevelOne, context) : undefined,
    LevelThree: output.LevelThree != null ? de_HierarchyGroupSummary(output.LevelThree, context) : undefined,
    LevelTwo: output.LevelTwo != null ? de_HierarchyGroupSummary(output.LevelTwo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HierarchyPathReference
 */
const de_HierarchyPathReference = (output: any, context: __SerdeContext): HierarchyPathReference => {
  return {
    LevelFive: output.LevelFive != null ? de_HierarchyGroupSummaryReference(output.LevelFive, context) : undefined,
    LevelFour: output.LevelFour != null ? de_HierarchyGroupSummaryReference(output.LevelFour, context) : undefined,
    LevelOne: output.LevelOne != null ? de_HierarchyGroupSummaryReference(output.LevelOne, context) : undefined,
    LevelThree: output.LevelThree != null ? de_HierarchyGroupSummaryReference(output.LevelThree, context) : undefined,
    LevelTwo: output.LevelTwo != null ? de_HierarchyGroupSummaryReference(output.LevelTwo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HierarchyStructure
 */
const de_HierarchyStructure = (output: any, context: __SerdeContext): HierarchyStructure => {
  return {
    LevelFive: output.LevelFive != null ? de_HierarchyLevel(output.LevelFive, context) : undefined,
    LevelFour: output.LevelFour != null ? de_HierarchyLevel(output.LevelFour, context) : undefined,
    LevelOne: output.LevelOne != null ? de_HierarchyLevel(output.LevelOne, context) : undefined,
    LevelThree: output.LevelThree != null ? de_HierarchyLevel(output.LevelThree, context) : undefined,
    LevelTwo: output.LevelTwo != null ? de_HierarchyLevel(output.LevelTwo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HistoricalMetric
 */
const de_HistoricalMetric = (output: any, context: __SerdeContext): HistoricalMetric => {
  return {
    Name: __expectString(output.Name),
    Statistic: __expectString(output.Statistic),
    Threshold: output.Threshold != null ? de_Threshold(output.Threshold, context) : undefined,
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_restJson1HistoricalMetricData
 */
const de_HistoricalMetricData = (output: any, context: __SerdeContext): HistoricalMetricData => {
  return {
    Metric: output.Metric != null ? de_HistoricalMetric(output.Metric, context) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1HistoricalMetricDataCollections
 */
const de_HistoricalMetricDataCollections = (output: any, context: __SerdeContext): HistoricalMetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HistoricalMetricData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HistoricalMetricResult
 */
const de_HistoricalMetricResult = (output: any, context: __SerdeContext): HistoricalMetricResult => {
  return {
    Collections:
      output.Collections != null ? de_HistoricalMetricDataCollections(output.Collections, context) : undefined,
    Dimensions: output.Dimensions != null ? de_Dimensions(output.Dimensions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HistoricalMetricResults
 */
const de_HistoricalMetricResults = (output: any, context: __SerdeContext): HistoricalMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HistoricalMetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HoursOfOperation
 */
const de_HoursOfOperation = (output: any, context: __SerdeContext): HoursOfOperation => {
  return {
    Config: output.Config != null ? de_HoursOfOperationConfigList(output.Config, context) : undefined,
    Description: __expectString(output.Description),
    HoursOfOperationArn: __expectString(output.HoursOfOperationArn),
    HoursOfOperationId: __expectString(output.HoursOfOperationId),
    Name: __expectString(output.Name),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    TimeZone: __expectString(output.TimeZone),
  } as any;
};

/**
 * deserializeAws_restJson1HoursOfOperationConfig
 */
const de_HoursOfOperationConfig = (output: any, context: __SerdeContext): HoursOfOperationConfig => {
  return {
    Day: __expectString(output.Day),
    EndTime: output.EndTime != null ? de_HoursOfOperationTimeSlice(output.EndTime, context) : undefined,
    StartTime: output.StartTime != null ? de_HoursOfOperationTimeSlice(output.StartTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HoursOfOperationConfigList
 */
const de_HoursOfOperationConfigList = (output: any, context: __SerdeContext): HoursOfOperationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HoursOfOperationConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HoursOfOperationSummary
 */
const de_HoursOfOperationSummary = (output: any, context: __SerdeContext): HoursOfOperationSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1HoursOfOperationSummaryList
 */
const de_HoursOfOperationSummaryList = (output: any, context: __SerdeContext): HoursOfOperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HoursOfOperationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HoursOfOperationTimeSlice
 */
const de_HoursOfOperationTimeSlice = (output: any, context: __SerdeContext): HoursOfOperationTimeSlice => {
  return {
    Hours: __expectInt32(output.Hours),
    Minutes: __expectInt32(output.Minutes),
  } as any;
};

/**
 * deserializeAws_restJson1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
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
    StatusReason: output.StatusReason != null ? de_InstanceStatusReason(output.StatusReason, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InstanceStatusReason
 */
const de_InstanceStatusReason = (output: any, context: __SerdeContext): InstanceStatusReason => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceStorageConfig
 */
const de_InstanceStorageConfig = (output: any, context: __SerdeContext): InstanceStorageConfig => {
  return {
    AssociationId: __expectString(output.AssociationId),
    KinesisFirehoseConfig:
      output.KinesisFirehoseConfig != null
        ? de_KinesisFirehoseConfig(output.KinesisFirehoseConfig, context)
        : undefined,
    KinesisStreamConfig:
      output.KinesisStreamConfig != null ? de_KinesisStreamConfig(output.KinesisStreamConfig, context) : undefined,
    KinesisVideoStreamConfig:
      output.KinesisVideoStreamConfig != null
        ? de_KinesisVideoStreamConfig(output.KinesisVideoStreamConfig, context)
        : undefined,
    S3Config: output.S3Config != null ? de_S3Config(output.S3Config, context) : undefined,
    StorageType: __expectString(output.StorageType),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceStorageConfigs
 */
const de_InstanceStorageConfigs = (output: any, context: __SerdeContext): InstanceStorageConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceStorageConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceSummary
 */
const de_InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
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

/**
 * deserializeAws_restJson1InstanceSummaryList
 */
const de_InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IntegrationAssociationSummary
 */
const de_IntegrationAssociationSummary = (output: any, context: __SerdeContext): IntegrationAssociationSummary => {
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

/**
 * deserializeAws_restJson1IntegrationAssociationSummaryList
 */
const de_IntegrationAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): IntegrationAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IntegrationAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InvisibleFieldInfo
 */
const de_InvisibleFieldInfo = (output: any, context: __SerdeContext): InvisibleFieldInfo => {
  return {
    Id: output.Id != null ? de_TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InvisibleTaskTemplateFields
 */
const de_InvisibleTaskTemplateFields = (output: any, context: __SerdeContext): InvisibleFieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InvisibleFieldInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KinesisFirehoseConfig
 */
const de_KinesisFirehoseConfig = (output: any, context: __SerdeContext): KinesisFirehoseConfig => {
  return {
    FirehoseArn: __expectString(output.FirehoseArn),
  } as any;
};

/**
 * deserializeAws_restJson1KinesisStreamConfig
 */
const de_KinesisStreamConfig = (output: any, context: __SerdeContext): KinesisStreamConfig => {
  return {
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

/**
 * deserializeAws_restJson1KinesisVideoStreamConfig
 */
const de_KinesisVideoStreamConfig = (output: any, context: __SerdeContext): KinesisVideoStreamConfig => {
  return {
    EncryptionConfig:
      output.EncryptionConfig != null ? de_EncryptionConfig(output.EncryptionConfig, context) : undefined,
    Prefix: __expectString(output.Prefix),
    RetentionPeriodHours: __expectInt32(output.RetentionPeriodHours),
  } as any;
};

/**
 * deserializeAws_restJson1LexBot
 */
const de_LexBot = (output: any, context: __SerdeContext): LexBot => {
  return {
    LexRegion: __expectString(output.LexRegion),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1LexBotConfig
 */
const de_LexBotConfig = (output: any, context: __SerdeContext): LexBotConfig => {
  return {
    LexBot: output.LexBot != null ? de_LexBot(output.LexBot, context) : undefined,
    LexV2Bot: output.LexV2Bot != null ? de_LexV2Bot(output.LexV2Bot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LexBotConfigList
 */
const de_LexBotConfigList = (output: any, context: __SerdeContext): LexBotConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LexBotConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LexBotsList
 */
const de_LexBotsList = (output: any, context: __SerdeContext): LexBot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LexBot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LexV2Bot
 */
const de_LexV2Bot = (output: any, context: __SerdeContext): LexV2Bot => {
  return {
    AliasArn: __expectString(output.AliasArn),
  } as any;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersSummary
 */
const de_ListPhoneNumbersSummary = (output: any, context: __SerdeContext): ListPhoneNumbersSummary => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    PhoneNumberType: __expectString(output.PhoneNumberType),
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersSummaryList
 */
const de_ListPhoneNumbersSummaryList = (output: any, context: __SerdeContext): ListPhoneNumbersSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListPhoneNumbersSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MediaConcurrencies
 */
const de_MediaConcurrencies = (output: any, context: __SerdeContext): MediaConcurrency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaConcurrency(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MediaConcurrency
 */
const de_MediaConcurrency = (output: any, context: __SerdeContext): MediaConcurrency => {
  return {
    Channel: __expectString(output.Channel),
    Concurrency: __expectInt32(output.Concurrency),
  } as any;
};

/**
 * deserializeAws_restJson1MetricDataCollectionsV2
 */
const de_MetricDataCollectionsV2 = (output: any, context: __SerdeContext): MetricDataV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDataV2(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricDataV2
 */
const de_MetricDataV2 = (output: any, context: __SerdeContext): MetricDataV2 => {
  return {
    Metric: output.Metric != null ? de_MetricV2(output.Metric, context) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1MetricFiltersV2List
 */
const de_MetricFiltersV2List = (output: any, context: __SerdeContext): MetricFilterV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricFilterV2(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricFilterV2
 */
const de_MetricFilterV2 = (output: any, context: __SerdeContext): MetricFilterV2 => {
  return {
    MetricFilterKey: __expectString(output.MetricFilterKey),
    MetricFilterValues:
      output.MetricFilterValues != null ? de_MetricFilterValueList(output.MetricFilterValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetricFilterValueList
 */
const de_MetricFilterValueList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1MetricResultsV2
 */
const de_MetricResultsV2 = (output: any, context: __SerdeContext): MetricResultV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricResultV2(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricResultV2
 */
const de_MetricResultV2 = (output: any, context: __SerdeContext): MetricResultV2 => {
  return {
    Collections: output.Collections != null ? de_MetricDataCollectionsV2(output.Collections, context) : undefined,
    Dimensions: output.Dimensions != null ? de_DimensionsV2Map(output.Dimensions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetricV2
 */
const de_MetricV2 = (output: any, context: __SerdeContext): MetricV2 => {
  return {
    MetricFilters: output.MetricFilters != null ? de_MetricFiltersV2List(output.MetricFilters, context) : undefined,
    Name: __expectString(output.Name),
    Threshold: output.Threshold != null ? de_ThresholdCollections(output.Threshold, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NotificationRecipientType
 */
const de_NotificationRecipientType = (output: any, context: __SerdeContext): NotificationRecipientType => {
  return {
    UserIds: output.UserIds != null ? de_UserIdList(output.UserIds, context) : undefined,
    UserTags: output.UserTags != null ? de_UserTagMap(output.UserTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NumberReference
 */
const de_NumberReference = (output: any, context: __SerdeContext): NumberReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1OriginsList
 */
const de_OriginsList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1OutboundCallerConfig
 */
const de_OutboundCallerConfig = (output: any, context: __SerdeContext): OutboundCallerConfig => {
  return {
    OutboundCallerIdName: __expectString(output.OutboundCallerIdName),
    OutboundCallerIdNumberId: __expectString(output.OutboundCallerIdNumberId),
    OutboundFlowId: __expectString(output.OutboundFlowId),
  } as any;
};

/**
 * deserializeAws_restJson1PermissionsList
 */
const de_PermissionsList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1PhoneNumberQuickConnectConfig
 */
const de_PhoneNumberQuickConnectConfig = (output: any, context: __SerdeContext): PhoneNumberQuickConnectConfig => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
  } as any;
};

/**
 * deserializeAws_restJson1PhoneNumberStatus
 */
const de_PhoneNumberStatus = (output: any, context: __SerdeContext): PhoneNumberStatus => {
  return {
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1PhoneNumberSummary
 */
const de_PhoneNumberSummary = (output: any, context: __SerdeContext): PhoneNumberSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberCountryCode: __expectString(output.PhoneNumberCountryCode),
    PhoneNumberType: __expectString(output.PhoneNumberType),
  } as any;
};

/**
 * deserializeAws_restJson1PhoneNumberSummaryList
 */
const de_PhoneNumberSummaryList = (output: any, context: __SerdeContext): PhoneNumberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PhoneNumberSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProblemDetail
 */
const de_ProblemDetail = (output: any, context: __SerdeContext): ProblemDetail => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1Problems
 */
const de_Problems = (output: any, context: __SerdeContext): ProblemDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProblemDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PromptSummary
 */
const de_PromptSummary = (output: any, context: __SerdeContext): PromptSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1PromptSummaryList
 */
const de_PromptSummaryList = (output: any, context: __SerdeContext): PromptSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PromptSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PropertyValidationExceptionProperty
 */
const de_PropertyValidationExceptionProperty = (
  output: any,
  context: __SerdeContext
): PropertyValidationExceptionProperty => {
  return {
    Message: __expectString(output.Message),
    PropertyPath: __expectString(output.PropertyPath),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_restJson1PropertyValidationExceptionPropertyList
 */
const de_PropertyValidationExceptionPropertyList = (
  output: any,
  context: __SerdeContext
): PropertyValidationExceptionProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PropertyValidationExceptionProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Queue
 */
const de_Queue = (output: any, context: __SerdeContext): Queue => {
  return {
    Description: __expectString(output.Description),
    HoursOfOperationId: __expectString(output.HoursOfOperationId),
    MaxContacts: __expectInt32(output.MaxContacts),
    Name: __expectString(output.Name),
    OutboundCallerConfig:
      output.OutboundCallerConfig != null ? de_OutboundCallerConfig(output.OutboundCallerConfig, context) : undefined,
    QueueArn: __expectString(output.QueueArn),
    QueueId: __expectString(output.QueueId),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QueueInfo
 */
const de_QueueInfo = (output: any, context: __SerdeContext): QueueInfo => {
  return {
    EnqueueTimestamp:
      output.EnqueueTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnqueueTimestamp)))
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1QueueQuickConnectConfig
 */
const de_QueueQuickConnectConfig = (output: any, context: __SerdeContext): QueueQuickConnectConfig => {
  return {
    ContactFlowId: __expectString(output.ContactFlowId),
    QueueId: __expectString(output.QueueId),
  } as any;
};

/**
 * deserializeAws_restJson1QueueReference
 */
const de_QueueReference = (output: any, context: __SerdeContext): QueueReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1QueueSearchSummaryList
 */
const de_QueueSearchSummaryList = (output: any, context: __SerdeContext): Queue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Queue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QueueSummary
 */
const de_QueueSummary = (output: any, context: __SerdeContext): QueueSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    QueueType: __expectString(output.QueueType),
  } as any;
};

/**
 * deserializeAws_restJson1QueueSummaryList
 */
const de_QueueSummaryList = (output: any, context: __SerdeContext): QueueSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueueSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QuickConnect
 */
const de_QuickConnect = (output: any, context: __SerdeContext): QuickConnect => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    QuickConnectARN: __expectString(output.QuickConnectARN),
    QuickConnectConfig:
      output.QuickConnectConfig != null ? de_QuickConnectConfig(output.QuickConnectConfig, context) : undefined,
    QuickConnectId: __expectString(output.QuickConnectId),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QuickConnectConfig
 */
const de_QuickConnectConfig = (output: any, context: __SerdeContext): QuickConnectConfig => {
  return {
    PhoneConfig: output.PhoneConfig != null ? de_PhoneNumberQuickConnectConfig(output.PhoneConfig, context) : undefined,
    QueueConfig: output.QueueConfig != null ? de_QueueQuickConnectConfig(output.QueueConfig, context) : undefined,
    QuickConnectType: __expectString(output.QuickConnectType),
    UserConfig: output.UserConfig != null ? de_UserQuickConnectConfig(output.UserConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QuickConnectSummary
 */
const de_QuickConnectSummary = (output: any, context: __SerdeContext): QuickConnectSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    QuickConnectType: __expectString(output.QuickConnectType),
  } as any;
};

/**
 * deserializeAws_restJson1QuickConnectSummaryList
 */
const de_QuickConnectSummaryList = (output: any, context: __SerdeContext): QuickConnectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QuickConnectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReadOnlyFieldInfo
 */
const de_ReadOnlyFieldInfo = (output: any, context: __SerdeContext): ReadOnlyFieldInfo => {
  return {
    Id: output.Id != null ? de_TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReadOnlyTaskTemplateFields
 */
const de_ReadOnlyTaskTemplateFields = (output: any, context: __SerdeContext): ReadOnlyFieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReadOnlyFieldInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Reference
 */
const de_Reference = (output: any, context: __SerdeContext): Reference => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1ReferenceSummary
 */
const de_ReferenceSummary = (output: any, context: __SerdeContext): ReferenceSummary => {
  if (output.Attachment != null) {
    return {
      Attachment: de_AttachmentReference(output.Attachment, context),
    };
  }
  if (output.Date != null) {
    return {
      Date: de_DateReference(output.Date, context),
    };
  }
  if (output.Email != null) {
    return {
      Email: de_EmailReference(output.Email, context),
    };
  }
  if (output.Number != null) {
    return {
      Number: de_NumberReference(output.Number, context),
    };
  }
  if (output.String != null) {
    return {
      String: de_StringReference(output.String, context),
    };
  }
  if (output.Url != null) {
    return {
      Url: de_UrlReference(output.Url, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ReferenceSummaryList
 */
const de_ReferenceSummaryList = (output: any, context: __SerdeContext): ReferenceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReferenceSummary(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RequiredFieldInfo
 */
const de_RequiredFieldInfo = (output: any, context: __SerdeContext): RequiredFieldInfo => {
  return {
    Id: output.Id != null ? de_TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RequiredTaskTemplateFields
 */
const de_RequiredTaskTemplateFields = (output: any, context: __SerdeContext): RequiredFieldInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RequiredFieldInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoutingProfile
 */
const de_RoutingProfile = (output: any, context: __SerdeContext): RoutingProfile => {
  return {
    DefaultOutboundQueueId: __expectString(output.DefaultOutboundQueueId),
    Description: __expectString(output.Description),
    InstanceId: __expectString(output.InstanceId),
    MediaConcurrencies:
      output.MediaConcurrencies != null ? de_MediaConcurrencies(output.MediaConcurrencies, context) : undefined,
    Name: __expectString(output.Name),
    NumberOfAssociatedQueues: __expectLong(output.NumberOfAssociatedQueues),
    NumberOfAssociatedUsers: __expectLong(output.NumberOfAssociatedUsers),
    RoutingProfileArn: __expectString(output.RoutingProfileArn),
    RoutingProfileId: __expectString(output.RoutingProfileId),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RoutingProfileList
 */
const de_RoutingProfileList = (output: any, context: __SerdeContext): RoutingProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RoutingProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoutingProfileQueueConfigSummary
 */
const de_RoutingProfileQueueConfigSummary = (
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

/**
 * deserializeAws_restJson1RoutingProfileQueueConfigSummaryList
 */
const de_RoutingProfileQueueConfigSummaryList = (
  output: any,
  context: __SerdeContext
): RoutingProfileQueueConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RoutingProfileQueueConfigSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoutingProfileReference
 */
const de_RoutingProfileReference = (output: any, context: __SerdeContext): RoutingProfileReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1RoutingProfileSummary
 */
const de_RoutingProfileSummary = (output: any, context: __SerdeContext): RoutingProfileSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1RoutingProfileSummaryList
 */
const de_RoutingProfileSummaryList = (output: any, context: __SerdeContext): RoutingProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RoutingProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Actions: output.Actions != null ? de_RuleActions(output.Actions, context) : undefined,
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
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    TriggerEventSource:
      output.TriggerEventSource != null ? de_RuleTriggerEventSource(output.TriggerEventSource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RuleAction
 */
const de_RuleAction = (output: any, context: __SerdeContext): RuleAction => {
  return {
    ActionType: __expectString(output.ActionType),
    AssignContactCategoryAction:
      output.AssignContactCategoryAction != null
        ? de_AssignContactCategoryActionDefinition(output.AssignContactCategoryAction, context)
        : undefined,
    EventBridgeAction:
      output.EventBridgeAction != null ? de_EventBridgeActionDefinition(output.EventBridgeAction, context) : undefined,
    SendNotificationAction:
      output.SendNotificationAction != null
        ? de_SendNotificationActionDefinition(output.SendNotificationAction, context)
        : undefined,
    TaskAction: output.TaskAction != null ? de_TaskActionDefinition(output.TaskAction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RuleActions
 */
const de_RuleActions = (output: any, context: __SerdeContext): RuleAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RuleSummary
 */
const de_RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return {
    ActionSummaries: output.ActionSummaries != null ? de_ActionSummaries(output.ActionSummaries, context) : undefined,
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

/**
 * deserializeAws_restJson1RuleSummaryList
 */
const de_RuleSummaryList = (output: any, context: __SerdeContext): RuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RuleTriggerEventSource
 */
const de_RuleTriggerEventSource = (output: any, context: __SerdeContext): RuleTriggerEventSource => {
  return {
    EventSourceName: __expectString(output.EventSourceName),
    IntegrationAssociationId: __expectString(output.IntegrationAssociationId),
  } as any;
};

/**
 * deserializeAws_restJson1S3Config
 */
const de_S3Config = (output: any, context: __SerdeContext): S3Config => {
  return {
    BucketName: __expectString(output.BucketName),
    BucketPrefix: __expectString(output.BucketPrefix),
    EncryptionConfig:
      output.EncryptionConfig != null ? de_EncryptionConfig(output.EncryptionConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SecurityKey
 */
const de_SecurityKey = (output: any, context: __SerdeContext): SecurityKey => {
  return {
    AssociationId: __expectString(output.AssociationId),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Key: __expectString(output.Key),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityKeysList
 */
const de_SecurityKeysList = (output: any, context: __SerdeContext): SecurityKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityProfile
 */
const de_SecurityProfile = (output: any, context: __SerdeContext): SecurityProfile => {
  return {
    AllowedAccessControlTags:
      output.AllowedAccessControlTags != null
        ? de_AllowedAccessControlTags(output.AllowedAccessControlTags, context)
        : undefined,
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    OrganizationResourceId: __expectString(output.OrganizationResourceId),
    SecurityProfileName: __expectString(output.SecurityProfileName),
    TagRestrictedResources:
      output.TagRestrictedResources != null
        ? de_TagRestrictedResourceList(output.TagRestrictedResources, context)
        : undefined,
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SecurityProfileIds
 */
const de_SecurityProfileIds = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1SecurityProfileSearchSummary
 */
const de_SecurityProfileSearchSummary = (output: any, context: __SerdeContext): SecurityProfileSearchSummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    OrganizationResourceId: __expectString(output.OrganizationResourceId),
    SecurityProfileName: __expectString(output.SecurityProfileName),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SecurityProfilesSearchSummaryList
 */
const de_SecurityProfilesSearchSummaryList = (output: any, context: __SerdeContext): SecurityProfileSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityProfileSearchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityProfileSummary
 */
const de_SecurityProfileSummary = (output: any, context: __SerdeContext): SecurityProfileSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityProfileSummaryList
 */
const de_SecurityProfileSummaryList = (output: any, context: __SerdeContext): SecurityProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SendNotificationActionDefinition
 */
const de_SendNotificationActionDefinition = (
  output: any,
  context: __SerdeContext
): SendNotificationActionDefinition => {
  return {
    Content: __expectString(output.Content),
    ContentType: __expectString(output.ContentType),
    DeliveryMethod: __expectString(output.DeliveryMethod),
    Recipient: output.Recipient != null ? de_NotificationRecipientType(output.Recipient, context) : undefined,
    Subject: __expectString(output.Subject),
  } as any;
};

/**
 * deserializeAws_restJson1SingleSelectOptions
 */
const de_SingleSelectOptions = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1StringReference
 */
const de_StringReference = (output: any, context: __SerdeContext): StringReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TagRestrictedResourceList
 */
const de_TagRestrictedResourceList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1TaskActionDefinition
 */
const de_TaskActionDefinition = (output: any, context: __SerdeContext): TaskActionDefinition => {
  return {
    ContactFlowId: __expectString(output.ContactFlowId),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    References: output.References != null ? de_ContactReferences(output.References, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TaskTemplateConstraints
 */
const de_TaskTemplateConstraints = (output: any, context: __SerdeContext): TaskTemplateConstraints => {
  return {
    InvisibleFields:
      output.InvisibleFields != null ? de_InvisibleTaskTemplateFields(output.InvisibleFields, context) : undefined,
    ReadOnlyFields:
      output.ReadOnlyFields != null ? de_ReadOnlyTaskTemplateFields(output.ReadOnlyFields, context) : undefined,
    RequiredFields:
      output.RequiredFields != null ? de_RequiredTaskTemplateFields(output.RequiredFields, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TaskTemplateDefaultFieldValue
 */
const de_TaskTemplateDefaultFieldValue = (output: any, context: __SerdeContext): TaskTemplateDefaultFieldValue => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Id: output.Id != null ? de_TaskTemplateFieldIdentifier(output.Id, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TaskTemplateDefaultFieldValueList
 */
const de_TaskTemplateDefaultFieldValueList = (
  output: any,
  context: __SerdeContext
): TaskTemplateDefaultFieldValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskTemplateDefaultFieldValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskTemplateDefaults
 */
const de_TaskTemplateDefaults = (output: any, context: __SerdeContext): TaskTemplateDefaults => {
  return {
    DefaultFieldValues:
      output.DefaultFieldValues != null
        ? de_TaskTemplateDefaultFieldValueList(output.DefaultFieldValues, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TaskTemplateField
 */
const de_TaskTemplateField = (output: any, context: __SerdeContext): TaskTemplateField => {
  return {
    Description: __expectString(output.Description),
    Id: output.Id != null ? de_TaskTemplateFieldIdentifier(output.Id, context) : undefined,
    SingleSelectOptions:
      output.SingleSelectOptions != null ? de_SingleSelectOptions(output.SingleSelectOptions, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1TaskTemplateFieldIdentifier
 */
const de_TaskTemplateFieldIdentifier = (output: any, context: __SerdeContext): TaskTemplateFieldIdentifier => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1TaskTemplateFields
 */
const de_TaskTemplateFields = (output: any, context: __SerdeContext): TaskTemplateField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskTemplateField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskTemplateList
 */
const de_TaskTemplateList = (output: any, context: __SerdeContext): TaskTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaskTemplateMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskTemplateMetadata
 */
const de_TaskTemplateMetadata = (output: any, context: __SerdeContext): TaskTemplateMetadata => {
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

/**
 * deserializeAws_restJson1TelephonyConfig
 */
const de_TelephonyConfig = (output: any, context: __SerdeContext): TelephonyConfig => {
  return {
    Distributions: output.Distributions != null ? de_DistributionList(output.Distributions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Threshold
 */
const de_Threshold = (output: any, context: __SerdeContext): Threshold => {
  return {
    Comparison: __expectString(output.Comparison),
    ThresholdValue: __limitedParseDouble(output.ThresholdValue),
  } as any;
};

/**
 * deserializeAws_restJson1ThresholdCollections
 */
const de_ThresholdCollections = (output: any, context: __SerdeContext): ThresholdV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ThresholdV2(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThresholdV2
 */
const de_ThresholdV2 = (output: any, context: __SerdeContext): ThresholdV2 => {
  return {
    Comparison: __expectString(output.Comparison),
    ThresholdValue: __limitedParseDouble(output.ThresholdValue),
  } as any;
};

/**
 * deserializeAws_restJson1TrafficDistributionGroup
 */
const de_TrafficDistributionGroup = (output: any, context: __SerdeContext): TrafficDistributionGroup => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    InstanceArn: __expectString(output.InstanceArn),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TrafficDistributionGroupSummary
 */
const de_TrafficDistributionGroupSummary = (output: any, context: __SerdeContext): TrafficDistributionGroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    InstanceArn: __expectString(output.InstanceArn),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1TrafficDistributionGroupSummaryList
 */
const de_TrafficDistributionGroupSummaryList = (
  output: any,
  context: __SerdeContext
): TrafficDistributionGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TrafficDistributionGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UrlReference
 */
const de_UrlReference = (output: any, context: __SerdeContext): UrlReference => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1UseCase
 */
const de_UseCase = (output: any, context: __SerdeContext): UseCase => {
  return {
    UseCaseArn: __expectString(output.UseCaseArn),
    UseCaseId: __expectString(output.UseCaseId),
    UseCaseType: __expectString(output.UseCaseType),
  } as any;
};

/**
 * deserializeAws_restJson1UseCaseSummaryList
 */
const de_UseCaseSummaryList = (output: any, context: __SerdeContext): UseCase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UseCase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return {
    Arn: __expectString(output.Arn),
    DirectoryUserId: __expectString(output.DirectoryUserId),
    HierarchyGroupId: __expectString(output.HierarchyGroupId),
    Id: __expectString(output.Id),
    IdentityInfo: output.IdentityInfo != null ? de_UserIdentityInfo(output.IdentityInfo, context) : undefined,
    PhoneConfig: output.PhoneConfig != null ? de_UserPhoneConfig(output.PhoneConfig, context) : undefined,
    RoutingProfileId: __expectString(output.RoutingProfileId),
    SecurityProfileIds:
      output.SecurityProfileIds != null ? de_SecurityProfileIds(output.SecurityProfileIds, context) : undefined,
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_restJson1UserData
 */
const de_UserData = (output: any, context: __SerdeContext): UserData => {
  return {
    ActiveSlotsByChannel:
      output.ActiveSlotsByChannel != null ? de_ChannelToCountMap(output.ActiveSlotsByChannel, context) : undefined,
    AvailableSlotsByChannel:
      output.AvailableSlotsByChannel != null
        ? de_ChannelToCountMap(output.AvailableSlotsByChannel, context)
        : undefined,
    Contacts: output.Contacts != null ? de_AgentContactReferenceList(output.Contacts, context) : undefined,
    HierarchyPath: output.HierarchyPath != null ? de_HierarchyPathReference(output.HierarchyPath, context) : undefined,
    MaxSlotsByChannel:
      output.MaxSlotsByChannel != null ? de_ChannelToCountMap(output.MaxSlotsByChannel, context) : undefined,
    NextStatus: __expectString(output.NextStatus),
    RoutingProfile:
      output.RoutingProfile != null ? de_RoutingProfileReference(output.RoutingProfile, context) : undefined,
    Status: output.Status != null ? de_AgentStatusReference(output.Status, context) : undefined,
    User: output.User != null ? de_UserReference(output.User, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UserDataList
 */
const de_UserDataList = (output: any, context: __SerdeContext): UserData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserIdentityInfo
 */
const de_UserIdentityInfo = (output: any, context: __SerdeContext): UserIdentityInfo => {
  return {
    Email: __expectString(output.Email),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    Mobile: __expectString(output.Mobile),
    SecondaryEmail: __expectString(output.SecondaryEmail),
  } as any;
};

/**
 * deserializeAws_restJson1UserIdentityInfoLite
 */
const de_UserIdentityInfoLite = (output: any, context: __SerdeContext): UserIdentityInfoLite => {
  return {
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
  } as any;
};

/**
 * deserializeAws_restJson1UserIdList
 */
const de_UserIdList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1UserPhoneConfig
 */
const de_UserPhoneConfig = (output: any, context: __SerdeContext): UserPhoneConfig => {
  return {
    AfterContactWorkTimeLimit: __expectInt32(output.AfterContactWorkTimeLimit),
    AutoAccept: __expectBoolean(output.AutoAccept),
    DeskPhoneNumber: __expectString(output.DeskPhoneNumber),
    PhoneType: __expectString(output.PhoneType),
  } as any;
};

/**
 * deserializeAws_restJson1UserQuickConnectConfig
 */
const de_UserQuickConnectConfig = (output: any, context: __SerdeContext): UserQuickConnectConfig => {
  return {
    ContactFlowId: __expectString(output.ContactFlowId),
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_restJson1UserReference
 */
const de_UserReference = (output: any, context: __SerdeContext): UserReference => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1UserSearchSummary
 */
const de_UserSearchSummary = (output: any, context: __SerdeContext): UserSearchSummary => {
  return {
    Arn: __expectString(output.Arn),
    DirectoryUserId: __expectString(output.DirectoryUserId),
    HierarchyGroupId: __expectString(output.HierarchyGroupId),
    Id: __expectString(output.Id),
    IdentityInfo: output.IdentityInfo != null ? de_UserIdentityInfoLite(output.IdentityInfo, context) : undefined,
    PhoneConfig: output.PhoneConfig != null ? de_UserPhoneConfig(output.PhoneConfig, context) : undefined,
    RoutingProfileId: __expectString(output.RoutingProfileId),
    SecurityProfileIds:
      output.SecurityProfileIds != null ? de_SecurityProfileIds(output.SecurityProfileIds, context) : undefined,
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_restJson1UserSearchSummaryList
 */
const de_UserSearchSummaryList = (output: any, context: __SerdeContext): UserSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserSearchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserSummary
 */
const de_UserSummary = (output: any, context: __SerdeContext): UserSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_restJson1UserSummaryList
 */
const de_UserSummaryList = (output: any, context: __SerdeContext): UserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserTagMap
 */
const de_UserTagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Vocabulary
 */
const de_Vocabulary = (output: any, context: __SerdeContext): Vocabulary => {
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
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VocabularySummary
 */
const de_VocabularySummary = (output: any, context: __SerdeContext): VocabularySummary => {
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

/**
 * deserializeAws_restJson1VocabularySummaryList
 */
const de_VocabularySummaryList = (output: any, context: __SerdeContext): VocabularySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VocabularySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WisdomInfo
 */
const de_WisdomInfo = (output: any, context: __SerdeContext): WisdomInfo => {
  return {
    SessionArn: __expectString(output.SessionArn),
  } as any;
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
