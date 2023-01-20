// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AssociateApprovedOriginCommandInput,
  AssociateApprovedOriginCommandOutput,
} from "./commands/AssociateApprovedOriginCommand";
import { AssociateBotCommandInput, AssociateBotCommandOutput } from "./commands/AssociateBotCommand";
import {
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
} from "./commands/AssociateDefaultVocabularyCommand";
import {
  AssociateInstanceStorageConfigCommandInput,
  AssociateInstanceStorageConfigCommandOutput,
} from "./commands/AssociateInstanceStorageConfigCommand";
import {
  AssociateLambdaFunctionCommandInput,
  AssociateLambdaFunctionCommandOutput,
} from "./commands/AssociateLambdaFunctionCommand";
import { AssociateLexBotCommandInput, AssociateLexBotCommandOutput } from "./commands/AssociateLexBotCommand";
import {
  AssociatePhoneNumberContactFlowCommandInput,
  AssociatePhoneNumberContactFlowCommandOutput,
} from "./commands/AssociatePhoneNumberContactFlowCommand";
import {
  AssociateQueueQuickConnectsCommandInput,
  AssociateQueueQuickConnectsCommandOutput,
} from "./commands/AssociateQueueQuickConnectsCommand";
import {
  AssociateRoutingProfileQueuesCommandInput,
  AssociateRoutingProfileQueuesCommandOutput,
} from "./commands/AssociateRoutingProfileQueuesCommand";
import {
  AssociateSecurityKeyCommandInput,
  AssociateSecurityKeyCommandOutput,
} from "./commands/AssociateSecurityKeyCommand";
import { ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput } from "./commands/ClaimPhoneNumberCommand";
import { CreateAgentStatusCommandInput, CreateAgentStatusCommandOutput } from "./commands/CreateAgentStatusCommand";
import { CreateContactFlowCommandInput, CreateContactFlowCommandOutput } from "./commands/CreateContactFlowCommand";
import {
  CreateContactFlowModuleCommandInput,
  CreateContactFlowModuleCommandOutput,
} from "./commands/CreateContactFlowModuleCommand";
import {
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
} from "./commands/CreateHoursOfOperationCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand";
import {
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
} from "./commands/CreateIntegrationAssociationCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import { CreateQuickConnectCommandInput, CreateQuickConnectCommandOutput } from "./commands/CreateQuickConnectCommand";
import {
  CreateRoutingProfileCommandInput,
  CreateRoutingProfileCommandOutput,
} from "./commands/CreateRoutingProfileCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "./commands/CreateSecurityProfileCommand";
import { CreateTaskTemplateCommandInput, CreateTaskTemplateCommandOutput } from "./commands/CreateTaskTemplateCommand";
import {
  CreateTrafficDistributionGroupCommandInput,
  CreateTrafficDistributionGroupCommandOutput,
} from "./commands/CreateTrafficDistributionGroupCommand";
import { CreateUseCaseCommandInput, CreateUseCaseCommandOutput } from "./commands/CreateUseCaseCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
} from "./commands/CreateUserHierarchyGroupCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "./commands/CreateVocabularyCommand";
import { DeleteContactFlowCommandInput, DeleteContactFlowCommandOutput } from "./commands/DeleteContactFlowCommand";
import {
  DeleteContactFlowModuleCommandInput,
  DeleteContactFlowModuleCommandOutput,
} from "./commands/DeleteContactFlowModuleCommand";
import {
  DeleteHoursOfOperationCommandInput,
  DeleteHoursOfOperationCommandOutput,
} from "./commands/DeleteHoursOfOperationCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import {
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
} from "./commands/DeleteIntegrationAssociationCommand";
import { DeleteQuickConnectCommandInput, DeleteQuickConnectCommandOutput } from "./commands/DeleteQuickConnectCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "./commands/DeleteSecurityProfileCommand";
import { DeleteTaskTemplateCommandInput, DeleteTaskTemplateCommandOutput } from "./commands/DeleteTaskTemplateCommand";
import {
  DeleteTrafficDistributionGroupCommandInput,
  DeleteTrafficDistributionGroupCommandOutput,
} from "./commands/DeleteTrafficDistributionGroupCommand";
import { DeleteUseCaseCommandInput, DeleteUseCaseCommandOutput } from "./commands/DeleteUseCaseCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserHierarchyGroupCommandInput,
  DeleteUserHierarchyGroupCommandOutput,
} from "./commands/DeleteUserHierarchyGroupCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "./commands/DeleteVocabularyCommand";
import {
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
} from "./commands/DescribeAgentStatusCommand";
import { DescribeContactCommandInput, DescribeContactCommandOutput } from "./commands/DescribeContactCommand";
import {
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "./commands/DescribeContactFlowCommand";
import {
  DescribeContactFlowModuleCommandInput,
  DescribeContactFlowModuleCommandOutput,
} from "./commands/DescribeContactFlowModuleCommand";
import {
  DescribeHoursOfOperationCommandInput,
  DescribeHoursOfOperationCommandOutput,
} from "./commands/DescribeHoursOfOperationCommand";
import {
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "./commands/DescribeInstanceAttributeCommand";
import { DescribeInstanceCommandInput, DescribeInstanceCommandOutput } from "./commands/DescribeInstanceCommand";
import {
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
} from "./commands/DescribeInstanceStorageConfigCommand";
import {
  DescribePhoneNumberCommandInput,
  DescribePhoneNumberCommandOutput,
} from "./commands/DescribePhoneNumberCommand";
import { DescribeQueueCommandInput, DescribeQueueCommandOutput } from "./commands/DescribeQueueCommand";
import {
  DescribeQuickConnectCommandInput,
  DescribeQuickConnectCommandOutput,
} from "./commands/DescribeQuickConnectCommand";
import {
  DescribeRoutingProfileCommandInput,
  DescribeRoutingProfileCommandOutput,
} from "./commands/DescribeRoutingProfileCommand";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "./commands/DescribeRuleCommand";
import {
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "./commands/DescribeSecurityProfileCommand";
import {
  DescribeTrafficDistributionGroupCommandInput,
  DescribeTrafficDistributionGroupCommandOutput,
} from "./commands/DescribeTrafficDistributionGroupCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import {
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput,
} from "./commands/DescribeUserHierarchyGroupCommand";
import {
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
} from "./commands/DescribeUserHierarchyStructureCommand";
import { DescribeVocabularyCommandInput, DescribeVocabularyCommandOutput } from "./commands/DescribeVocabularyCommand";
import {
  DisassociateApprovedOriginCommandInput,
  DisassociateApprovedOriginCommandOutput,
} from "./commands/DisassociateApprovedOriginCommand";
import { DisassociateBotCommandInput, DisassociateBotCommandOutput } from "./commands/DisassociateBotCommand";
import {
  DisassociateInstanceStorageConfigCommandInput,
  DisassociateInstanceStorageConfigCommandOutput,
} from "./commands/DisassociateInstanceStorageConfigCommand";
import {
  DisassociateLambdaFunctionCommandInput,
  DisassociateLambdaFunctionCommandOutput,
} from "./commands/DisassociateLambdaFunctionCommand";
import { DisassociateLexBotCommandInput, DisassociateLexBotCommandOutput } from "./commands/DisassociateLexBotCommand";
import {
  DisassociatePhoneNumberContactFlowCommandInput,
  DisassociatePhoneNumberContactFlowCommandOutput,
} from "./commands/DisassociatePhoneNumberContactFlowCommand";
import {
  DisassociateQueueQuickConnectsCommandInput,
  DisassociateQueueQuickConnectsCommandOutput,
} from "./commands/DisassociateQueueQuickConnectsCommand";
import {
  DisassociateRoutingProfileQueuesCommandInput,
  DisassociateRoutingProfileQueuesCommandOutput,
} from "./commands/DisassociateRoutingProfileQueuesCommand";
import {
  DisassociateSecurityKeyCommandInput,
  DisassociateSecurityKeyCommandOutput,
} from "./commands/DisassociateSecurityKeyCommand";
import { DismissUserContactCommandInput, DismissUserContactCommandOutput } from "./commands/DismissUserContactCommand";
import {
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput,
} from "./commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "./commands/GetCurrentMetricDataCommand";
import { GetCurrentUserDataCommandInput, GetCurrentUserDataCommandOutput } from "./commands/GetCurrentUserDataCommand";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput } from "./commands/GetFederationTokenCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand";
import { GetTaskTemplateCommandInput, GetTaskTemplateCommandOutput } from "./commands/GetTaskTemplateCommand";
import {
  GetTrafficDistributionCommandInput,
  GetTrafficDistributionCommandOutput,
} from "./commands/GetTrafficDistributionCommand";
import { ListAgentStatusesCommandInput, ListAgentStatusesCommandOutput } from "./commands/ListAgentStatusesCommand";
import {
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "./commands/ListApprovedOriginsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "./commands/ListContactFlowModulesCommand";
import { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "./commands/ListContactFlowsCommand";
import {
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "./commands/ListContactReferencesCommand";
import {
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "./commands/ListDefaultVocabulariesCommand";
import {
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "./commands/ListHoursOfOperationsCommand";
import {
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "./commands/ListInstanceAttributesCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import {
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
} from "./commands/ListInstanceStorageConfigsCommand";
import {
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "./commands/ListIntegrationAssociationsCommand";
import {
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
} from "./commands/ListLambdaFunctionsCommand";
import { ListLexBotsCommandInput, ListLexBotsCommandOutput } from "./commands/ListLexBotsCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand";
import { ListPhoneNumbersV2CommandInput, ListPhoneNumbersV2CommandOutput } from "./commands/ListPhoneNumbersV2Command";
import { ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import {
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "./commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import { ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput } from "./commands/ListQuickConnectsCommand";
import {
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
} from "./commands/ListRoutingProfileQueuesCommand";
import {
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "./commands/ListRoutingProfilesCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import { ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput } from "./commands/ListSecurityKeysCommand";
import {
  ListSecurityProfilePermissionsCommandInput,
  ListSecurityProfilePermissionsCommandOutput,
} from "./commands/ListSecurityProfilePermissionsCommand";
import {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTaskTemplatesCommandInput, ListTaskTemplatesCommandOutput } from "./commands/ListTaskTemplatesCommand";
import {
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
} from "./commands/ListTrafficDistributionGroupsCommand";
import { ListUseCasesCommandInput, ListUseCasesCommandOutput } from "./commands/ListUseCasesCommand";
import {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "./commands/ListUserHierarchyGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { MonitorContactCommandInput, MonitorContactCommandOutput } from "./commands/MonitorContactCommand";
import { PutUserStatusCommandInput, PutUserStatusCommandOutput } from "./commands/PutUserStatusCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "./commands/ReleasePhoneNumberCommand";
import { ReplicateInstanceCommandInput, ReplicateInstanceCommandOutput } from "./commands/ReplicateInstanceCommand";
import {
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "./commands/ResumeContactRecordingCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import { SearchQueuesCommandInput, SearchQueuesCommandOutput } from "./commands/SearchQueuesCommand";
import {
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "./commands/SearchRoutingProfilesCommand";
import {
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
} from "./commands/SearchSecurityProfilesCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import { SearchVocabulariesCommandInput, SearchVocabulariesCommandOutput } from "./commands/SearchVocabulariesCommand";
import { StartChatContactCommandInput, StartChatContactCommandOutput } from "./commands/StartChatContactCommand";
import {
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "./commands/StartContactRecordingCommand";
import {
  StartContactStreamingCommandInput,
  StartContactStreamingCommandOutput,
} from "./commands/StartContactStreamingCommand";
import {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "./commands/StartOutboundVoiceContactCommand";
import { StartTaskContactCommandInput, StartTaskContactCommandOutput } from "./commands/StartTaskContactCommand";
import { StopContactCommandInput, StopContactCommandOutput } from "./commands/StopContactCommand";
import {
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
} from "./commands/StopContactRecordingCommand";
import {
  StopContactStreamingCommandInput,
  StopContactStreamingCommandOutput,
} from "./commands/StopContactStreamingCommand";
import {
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "./commands/SuspendContactRecordingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TransferContactCommandInput, TransferContactCommandOutput } from "./commands/TransferContactCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAgentStatusCommandInput, UpdateAgentStatusCommandOutput } from "./commands/UpdateAgentStatusCommand";
import {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "./commands/UpdateContactAttributesCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "./commands/UpdateContactCommand";
import {
  UpdateContactFlowContentCommandInput,
  UpdateContactFlowContentCommandOutput,
} from "./commands/UpdateContactFlowContentCommand";
import {
  UpdateContactFlowMetadataCommandInput,
  UpdateContactFlowMetadataCommandOutput,
} from "./commands/UpdateContactFlowMetadataCommand";
import {
  UpdateContactFlowModuleContentCommandInput,
  UpdateContactFlowModuleContentCommandOutput,
} from "./commands/UpdateContactFlowModuleContentCommand";
import {
  UpdateContactFlowModuleMetadataCommandInput,
  UpdateContactFlowModuleMetadataCommandOutput,
} from "./commands/UpdateContactFlowModuleMetadataCommand";
import {
  UpdateContactFlowNameCommandInput,
  UpdateContactFlowNameCommandOutput,
} from "./commands/UpdateContactFlowNameCommand";
import {
  UpdateContactScheduleCommandInput,
  UpdateContactScheduleCommandOutput,
} from "./commands/UpdateContactScheduleCommand";
import {
  UpdateHoursOfOperationCommandInput,
  UpdateHoursOfOperationCommandOutput,
} from "./commands/UpdateHoursOfOperationCommand";
import {
  UpdateInstanceAttributeCommandInput,
  UpdateInstanceAttributeCommandOutput,
} from "./commands/UpdateInstanceAttributeCommand";
import {
  UpdateInstanceStorageConfigCommandInput,
  UpdateInstanceStorageConfigCommandOutput,
} from "./commands/UpdateInstanceStorageConfigCommand";
import {
  UpdateParticipantRoleConfigCommandInput,
  UpdateParticipantRoleConfigCommandOutput,
} from "./commands/UpdateParticipantRoleConfigCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "./commands/UpdatePhoneNumberCommand";
import {
  UpdateQueueHoursOfOperationCommandInput,
  UpdateQueueHoursOfOperationCommandOutput,
} from "./commands/UpdateQueueHoursOfOperationCommand";
import {
  UpdateQueueMaxContactsCommandInput,
  UpdateQueueMaxContactsCommandOutput,
} from "./commands/UpdateQueueMaxContactsCommand";
import { UpdateQueueNameCommandInput, UpdateQueueNameCommandOutput } from "./commands/UpdateQueueNameCommand";
import {
  UpdateQueueOutboundCallerConfigCommandInput,
  UpdateQueueOutboundCallerConfigCommandOutput,
} from "./commands/UpdateQueueOutboundCallerConfigCommand";
import { UpdateQueueStatusCommandInput, UpdateQueueStatusCommandOutput } from "./commands/UpdateQueueStatusCommand";
import {
  UpdateQuickConnectConfigCommandInput,
  UpdateQuickConnectConfigCommandOutput,
} from "./commands/UpdateQuickConnectConfigCommand";
import {
  UpdateQuickConnectNameCommandInput,
  UpdateQuickConnectNameCommandOutput,
} from "./commands/UpdateQuickConnectNameCommand";
import {
  UpdateRoutingProfileConcurrencyCommandInput,
  UpdateRoutingProfileConcurrencyCommandOutput,
} from "./commands/UpdateRoutingProfileConcurrencyCommand";
import {
  UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
} from "./commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import {
  UpdateRoutingProfileNameCommandInput,
  UpdateRoutingProfileNameCommandOutput,
} from "./commands/UpdateRoutingProfileNameCommand";
import {
  UpdateRoutingProfileQueuesCommandInput,
  UpdateRoutingProfileQueuesCommandOutput,
} from "./commands/UpdateRoutingProfileQueuesCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import {
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "./commands/UpdateSecurityProfileCommand";
import { UpdateTaskTemplateCommandInput, UpdateTaskTemplateCommandOutput } from "./commands/UpdateTaskTemplateCommand";
import {
  UpdateTrafficDistributionCommandInput,
  UpdateTrafficDistributionCommandOutput,
} from "./commands/UpdateTrafficDistributionCommand";
import {
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput,
} from "./commands/UpdateUserHierarchyCommand";
import {
  UpdateUserHierarchyGroupNameCommandInput,
  UpdateUserHierarchyGroupNameCommandOutput,
} from "./commands/UpdateUserHierarchyGroupNameCommand";
import {
  UpdateUserHierarchyStructureCommandInput,
  UpdateUserHierarchyStructureCommandOutput,
} from "./commands/UpdateUserHierarchyStructureCommand";
import {
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
} from "./commands/UpdateUserIdentityInfoCommand";
import {
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput,
} from "./commands/UpdateUserPhoneConfigCommand";
import {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "./commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "./commands/UpdateUserSecurityProfilesCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateApprovedOriginCommandInput
  | AssociateBotCommandInput
  | AssociateDefaultVocabularyCommandInput
  | AssociateInstanceStorageConfigCommandInput
  | AssociateLambdaFunctionCommandInput
  | AssociateLexBotCommandInput
  | AssociatePhoneNumberContactFlowCommandInput
  | AssociateQueueQuickConnectsCommandInput
  | AssociateRoutingProfileQueuesCommandInput
  | AssociateSecurityKeyCommandInput
  | ClaimPhoneNumberCommandInput
  | CreateAgentStatusCommandInput
  | CreateContactFlowCommandInput
  | CreateContactFlowModuleCommandInput
  | CreateHoursOfOperationCommandInput
  | CreateInstanceCommandInput
  | CreateIntegrationAssociationCommandInput
  | CreateQueueCommandInput
  | CreateQuickConnectCommandInput
  | CreateRoutingProfileCommandInput
  | CreateRuleCommandInput
  | CreateSecurityProfileCommandInput
  | CreateTaskTemplateCommandInput
  | CreateTrafficDistributionGroupCommandInput
  | CreateUseCaseCommandInput
  | CreateUserCommandInput
  | CreateUserHierarchyGroupCommandInput
  | CreateVocabularyCommandInput
  | DeleteContactFlowCommandInput
  | DeleteContactFlowModuleCommandInput
  | DeleteHoursOfOperationCommandInput
  | DeleteInstanceCommandInput
  | DeleteIntegrationAssociationCommandInput
  | DeleteQuickConnectCommandInput
  | DeleteRuleCommandInput
  | DeleteSecurityProfileCommandInput
  | DeleteTaskTemplateCommandInput
  | DeleteTrafficDistributionGroupCommandInput
  | DeleteUseCaseCommandInput
  | DeleteUserCommandInput
  | DeleteUserHierarchyGroupCommandInput
  | DeleteVocabularyCommandInput
  | DescribeAgentStatusCommandInput
  | DescribeContactCommandInput
  | DescribeContactFlowCommandInput
  | DescribeContactFlowModuleCommandInput
  | DescribeHoursOfOperationCommandInput
  | DescribeInstanceAttributeCommandInput
  | DescribeInstanceCommandInput
  | DescribeInstanceStorageConfigCommandInput
  | DescribePhoneNumberCommandInput
  | DescribeQueueCommandInput
  | DescribeQuickConnectCommandInput
  | DescribeRoutingProfileCommandInput
  | DescribeRuleCommandInput
  | DescribeSecurityProfileCommandInput
  | DescribeTrafficDistributionGroupCommandInput
  | DescribeUserCommandInput
  | DescribeUserHierarchyGroupCommandInput
  | DescribeUserHierarchyStructureCommandInput
  | DescribeVocabularyCommandInput
  | DisassociateApprovedOriginCommandInput
  | DisassociateBotCommandInput
  | DisassociateInstanceStorageConfigCommandInput
  | DisassociateLambdaFunctionCommandInput
  | DisassociateLexBotCommandInput
  | DisassociatePhoneNumberContactFlowCommandInput
  | DisassociateQueueQuickConnectsCommandInput
  | DisassociateRoutingProfileQueuesCommandInput
  | DisassociateSecurityKeyCommandInput
  | DismissUserContactCommandInput
  | GetContactAttributesCommandInput
  | GetCurrentMetricDataCommandInput
  | GetCurrentUserDataCommandInput
  | GetFederationTokenCommandInput
  | GetMetricDataCommandInput
  | GetTaskTemplateCommandInput
  | GetTrafficDistributionCommandInput
  | ListAgentStatusesCommandInput
  | ListApprovedOriginsCommandInput
  | ListBotsCommandInput
  | ListContactFlowModulesCommandInput
  | ListContactFlowsCommandInput
  | ListContactReferencesCommandInput
  | ListDefaultVocabulariesCommandInput
  | ListHoursOfOperationsCommandInput
  | ListInstanceAttributesCommandInput
  | ListInstanceStorageConfigsCommandInput
  | ListInstancesCommandInput
  | ListIntegrationAssociationsCommandInput
  | ListLambdaFunctionsCommandInput
  | ListLexBotsCommandInput
  | ListPhoneNumbersCommandInput
  | ListPhoneNumbersV2CommandInput
  | ListPromptsCommandInput
  | ListQueueQuickConnectsCommandInput
  | ListQueuesCommandInput
  | ListQuickConnectsCommandInput
  | ListRoutingProfileQueuesCommandInput
  | ListRoutingProfilesCommandInput
  | ListRulesCommandInput
  | ListSecurityKeysCommandInput
  | ListSecurityProfilePermissionsCommandInput
  | ListSecurityProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskTemplatesCommandInput
  | ListTrafficDistributionGroupsCommandInput
  | ListUseCasesCommandInput
  | ListUserHierarchyGroupsCommandInput
  | ListUsersCommandInput
  | MonitorContactCommandInput
  | PutUserStatusCommandInput
  | ReleasePhoneNumberCommandInput
  | ReplicateInstanceCommandInput
  | ResumeContactRecordingCommandInput
  | SearchAvailablePhoneNumbersCommandInput
  | SearchQueuesCommandInput
  | SearchRoutingProfilesCommandInput
  | SearchSecurityProfilesCommandInput
  | SearchUsersCommandInput
  | SearchVocabulariesCommandInput
  | StartChatContactCommandInput
  | StartContactRecordingCommandInput
  | StartContactStreamingCommandInput
  | StartOutboundVoiceContactCommandInput
  | StartTaskContactCommandInput
  | StopContactCommandInput
  | StopContactRecordingCommandInput
  | StopContactStreamingCommandInput
  | SuspendContactRecordingCommandInput
  | TagResourceCommandInput
  | TransferContactCommandInput
  | UntagResourceCommandInput
  | UpdateAgentStatusCommandInput
  | UpdateContactAttributesCommandInput
  | UpdateContactCommandInput
  | UpdateContactFlowContentCommandInput
  | UpdateContactFlowMetadataCommandInput
  | UpdateContactFlowModuleContentCommandInput
  | UpdateContactFlowModuleMetadataCommandInput
  | UpdateContactFlowNameCommandInput
  | UpdateContactScheduleCommandInput
  | UpdateHoursOfOperationCommandInput
  | UpdateInstanceAttributeCommandInput
  | UpdateInstanceStorageConfigCommandInput
  | UpdateParticipantRoleConfigCommandInput
  | UpdatePhoneNumberCommandInput
  | UpdateQueueHoursOfOperationCommandInput
  | UpdateQueueMaxContactsCommandInput
  | UpdateQueueNameCommandInput
  | UpdateQueueOutboundCallerConfigCommandInput
  | UpdateQueueStatusCommandInput
  | UpdateQuickConnectConfigCommandInput
  | UpdateQuickConnectNameCommandInput
  | UpdateRoutingProfileConcurrencyCommandInput
  | UpdateRoutingProfileDefaultOutboundQueueCommandInput
  | UpdateRoutingProfileNameCommandInput
  | UpdateRoutingProfileQueuesCommandInput
  | UpdateRuleCommandInput
  | UpdateSecurityProfileCommandInput
  | UpdateTaskTemplateCommandInput
  | UpdateTrafficDistributionCommandInput
  | UpdateUserHierarchyCommandInput
  | UpdateUserHierarchyGroupNameCommandInput
  | UpdateUserHierarchyStructureCommandInput
  | UpdateUserIdentityInfoCommandInput
  | UpdateUserPhoneConfigCommandInput
  | UpdateUserRoutingProfileCommandInput
  | UpdateUserSecurityProfilesCommandInput;

export type ServiceOutputTypes =
  | AssociateApprovedOriginCommandOutput
  | AssociateBotCommandOutput
  | AssociateDefaultVocabularyCommandOutput
  | AssociateInstanceStorageConfigCommandOutput
  | AssociateLambdaFunctionCommandOutput
  | AssociateLexBotCommandOutput
  | AssociatePhoneNumberContactFlowCommandOutput
  | AssociateQueueQuickConnectsCommandOutput
  | AssociateRoutingProfileQueuesCommandOutput
  | AssociateSecurityKeyCommandOutput
  | ClaimPhoneNumberCommandOutput
  | CreateAgentStatusCommandOutput
  | CreateContactFlowCommandOutput
  | CreateContactFlowModuleCommandOutput
  | CreateHoursOfOperationCommandOutput
  | CreateInstanceCommandOutput
  | CreateIntegrationAssociationCommandOutput
  | CreateQueueCommandOutput
  | CreateQuickConnectCommandOutput
  | CreateRoutingProfileCommandOutput
  | CreateRuleCommandOutput
  | CreateSecurityProfileCommandOutput
  | CreateTaskTemplateCommandOutput
  | CreateTrafficDistributionGroupCommandOutput
  | CreateUseCaseCommandOutput
  | CreateUserCommandOutput
  | CreateUserHierarchyGroupCommandOutput
  | CreateVocabularyCommandOutput
  | DeleteContactFlowCommandOutput
  | DeleteContactFlowModuleCommandOutput
  | DeleteHoursOfOperationCommandOutput
  | DeleteInstanceCommandOutput
  | DeleteIntegrationAssociationCommandOutput
  | DeleteQuickConnectCommandOutput
  | DeleteRuleCommandOutput
  | DeleteSecurityProfileCommandOutput
  | DeleteTaskTemplateCommandOutput
  | DeleteTrafficDistributionGroupCommandOutput
  | DeleteUseCaseCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserHierarchyGroupCommandOutput
  | DeleteVocabularyCommandOutput
  | DescribeAgentStatusCommandOutput
  | DescribeContactCommandOutput
  | DescribeContactFlowCommandOutput
  | DescribeContactFlowModuleCommandOutput
  | DescribeHoursOfOperationCommandOutput
  | DescribeInstanceAttributeCommandOutput
  | DescribeInstanceCommandOutput
  | DescribeInstanceStorageConfigCommandOutput
  | DescribePhoneNumberCommandOutput
  | DescribeQueueCommandOutput
  | DescribeQuickConnectCommandOutput
  | DescribeRoutingProfileCommandOutput
  | DescribeRuleCommandOutput
  | DescribeSecurityProfileCommandOutput
  | DescribeTrafficDistributionGroupCommandOutput
  | DescribeUserCommandOutput
  | DescribeUserHierarchyGroupCommandOutput
  | DescribeUserHierarchyStructureCommandOutput
  | DescribeVocabularyCommandOutput
  | DisassociateApprovedOriginCommandOutput
  | DisassociateBotCommandOutput
  | DisassociateInstanceStorageConfigCommandOutput
  | DisassociateLambdaFunctionCommandOutput
  | DisassociateLexBotCommandOutput
  | DisassociatePhoneNumberContactFlowCommandOutput
  | DisassociateQueueQuickConnectsCommandOutput
  | DisassociateRoutingProfileQueuesCommandOutput
  | DisassociateSecurityKeyCommandOutput
  | DismissUserContactCommandOutput
  | GetContactAttributesCommandOutput
  | GetCurrentMetricDataCommandOutput
  | GetCurrentUserDataCommandOutput
  | GetFederationTokenCommandOutput
  | GetMetricDataCommandOutput
  | GetTaskTemplateCommandOutput
  | GetTrafficDistributionCommandOutput
  | ListAgentStatusesCommandOutput
  | ListApprovedOriginsCommandOutput
  | ListBotsCommandOutput
  | ListContactFlowModulesCommandOutput
  | ListContactFlowsCommandOutput
  | ListContactReferencesCommandOutput
  | ListDefaultVocabulariesCommandOutput
  | ListHoursOfOperationsCommandOutput
  | ListInstanceAttributesCommandOutput
  | ListInstanceStorageConfigsCommandOutput
  | ListInstancesCommandOutput
  | ListIntegrationAssociationsCommandOutput
  | ListLambdaFunctionsCommandOutput
  | ListLexBotsCommandOutput
  | ListPhoneNumbersCommandOutput
  | ListPhoneNumbersV2CommandOutput
  | ListPromptsCommandOutput
  | ListQueueQuickConnectsCommandOutput
  | ListQueuesCommandOutput
  | ListQuickConnectsCommandOutput
  | ListRoutingProfileQueuesCommandOutput
  | ListRoutingProfilesCommandOutput
  | ListRulesCommandOutput
  | ListSecurityKeysCommandOutput
  | ListSecurityProfilePermissionsCommandOutput
  | ListSecurityProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskTemplatesCommandOutput
  | ListTrafficDistributionGroupsCommandOutput
  | ListUseCasesCommandOutput
  | ListUserHierarchyGroupsCommandOutput
  | ListUsersCommandOutput
  | MonitorContactCommandOutput
  | PutUserStatusCommandOutput
  | ReleasePhoneNumberCommandOutput
  | ReplicateInstanceCommandOutput
  | ResumeContactRecordingCommandOutput
  | SearchAvailablePhoneNumbersCommandOutput
  | SearchQueuesCommandOutput
  | SearchRoutingProfilesCommandOutput
  | SearchSecurityProfilesCommandOutput
  | SearchUsersCommandOutput
  | SearchVocabulariesCommandOutput
  | StartChatContactCommandOutput
  | StartContactRecordingCommandOutput
  | StartContactStreamingCommandOutput
  | StartOutboundVoiceContactCommandOutput
  | StartTaskContactCommandOutput
  | StopContactCommandOutput
  | StopContactRecordingCommandOutput
  | StopContactStreamingCommandOutput
  | SuspendContactRecordingCommandOutput
  | TagResourceCommandOutput
  | TransferContactCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentStatusCommandOutput
  | UpdateContactAttributesCommandOutput
  | UpdateContactCommandOutput
  | UpdateContactFlowContentCommandOutput
  | UpdateContactFlowMetadataCommandOutput
  | UpdateContactFlowModuleContentCommandOutput
  | UpdateContactFlowModuleMetadataCommandOutput
  | UpdateContactFlowNameCommandOutput
  | UpdateContactScheduleCommandOutput
  | UpdateHoursOfOperationCommandOutput
  | UpdateInstanceAttributeCommandOutput
  | UpdateInstanceStorageConfigCommandOutput
  | UpdateParticipantRoleConfigCommandOutput
  | UpdatePhoneNumberCommandOutput
  | UpdateQueueHoursOfOperationCommandOutput
  | UpdateQueueMaxContactsCommandOutput
  | UpdateQueueNameCommandOutput
  | UpdateQueueOutboundCallerConfigCommandOutput
  | UpdateQueueStatusCommandOutput
  | UpdateQuickConnectConfigCommandOutput
  | UpdateQuickConnectNameCommandOutput
  | UpdateRoutingProfileConcurrencyCommandOutput
  | UpdateRoutingProfileDefaultOutboundQueueCommandOutput
  | UpdateRoutingProfileNameCommandOutput
  | UpdateRoutingProfileQueuesCommandOutput
  | UpdateRuleCommandOutput
  | UpdateSecurityProfileCommandOutput
  | UpdateTaskTemplateCommandOutput
  | UpdateTrafficDistributionCommandOutput
  | UpdateUserHierarchyCommandOutput
  | UpdateUserHierarchyGroupNameCommandOutput
  | UpdateUserHierarchyStructureCommandOutput
  | UpdateUserIdentityInfoCommandOutput
  | UpdateUserPhoneConfigCommandOutput
  | UpdateUserRoutingProfileCommandOutput
  | UpdateUserSecurityProfilesCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type ConnectClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ConnectClient class constructor that set the region, credentials and other options.
 */
export interface ConnectClientConfig extends ConnectClientConfigType {}

type ConnectClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ConnectClient class. This is resolved and normalized from the {@link ConnectClientConfig | constructor configuration interface}.
 */
export interface ConnectClientResolvedConfig extends ConnectClientResolvedConfigType {}

/**
 * <p>Amazon Connect is a cloud-based contact center solution that you use to set up and
 *    manage a customer contact center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides metrics and real-time reporting that enable you to optimize
 *    contact routing. You can also resolve customer issues more efficiently by getting customers in
 *    touch with the appropriate agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create. There
 *    are also limits to the number of requests that you can make per second. For more information, see
 *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 *          <p>You can connect programmatically to an Amazon Web Services service by using an endpoint. For
 *    a list of Amazon Connect endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect Endpoints</a>.</p>
 */
export class ConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConnectClientResolvedConfig
> {
  /**
   * The resolved configuration of ConnectClient class. This is resolved and normalized from the {@link ConnectClientConfig | constructor configuration interface}.
   */
  readonly config: ConnectClientResolvedConfig;

  constructor(configuration: ConnectClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
