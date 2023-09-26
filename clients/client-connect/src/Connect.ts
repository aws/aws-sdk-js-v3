// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ActivateEvaluationFormCommand,
  ActivateEvaluationFormCommandInput,
  ActivateEvaluationFormCommandOutput,
} from "./commands/ActivateEvaluationFormCommand";
import {
  AssociateApprovedOriginCommand,
  AssociateApprovedOriginCommandInput,
  AssociateApprovedOriginCommandOutput,
} from "./commands/AssociateApprovedOriginCommand";
import {
  AssociateBotCommand,
  AssociateBotCommandInput,
  AssociateBotCommandOutput,
} from "./commands/AssociateBotCommand";
import {
  AssociateDefaultVocabularyCommand,
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
} from "./commands/AssociateDefaultVocabularyCommand";
import {
  AssociateInstanceStorageConfigCommand,
  AssociateInstanceStorageConfigCommandInput,
  AssociateInstanceStorageConfigCommandOutput,
} from "./commands/AssociateInstanceStorageConfigCommand";
import {
  AssociateLambdaFunctionCommand,
  AssociateLambdaFunctionCommandInput,
  AssociateLambdaFunctionCommandOutput,
} from "./commands/AssociateLambdaFunctionCommand";
import {
  AssociateLexBotCommand,
  AssociateLexBotCommandInput,
  AssociateLexBotCommandOutput,
} from "./commands/AssociateLexBotCommand";
import {
  AssociatePhoneNumberContactFlowCommand,
  AssociatePhoneNumberContactFlowCommandInput,
  AssociatePhoneNumberContactFlowCommandOutput,
} from "./commands/AssociatePhoneNumberContactFlowCommand";
import {
  AssociateQueueQuickConnectsCommand,
  AssociateQueueQuickConnectsCommandInput,
  AssociateQueueQuickConnectsCommandOutput,
} from "./commands/AssociateQueueQuickConnectsCommand";
import {
  AssociateRoutingProfileQueuesCommand,
  AssociateRoutingProfileQueuesCommandInput,
  AssociateRoutingProfileQueuesCommandOutput,
} from "./commands/AssociateRoutingProfileQueuesCommand";
import {
  AssociateSecurityKeyCommand,
  AssociateSecurityKeyCommandInput,
  AssociateSecurityKeyCommandOutput,
} from "./commands/AssociateSecurityKeyCommand";
import {
  AssociateTrafficDistributionGroupUserCommand,
  AssociateTrafficDistributionGroupUserCommandInput,
  AssociateTrafficDistributionGroupUserCommandOutput,
} from "./commands/AssociateTrafficDistributionGroupUserCommand";
import {
  ClaimPhoneNumberCommand,
  ClaimPhoneNumberCommandInput,
  ClaimPhoneNumberCommandOutput,
} from "./commands/ClaimPhoneNumberCommand";
import {
  CreateAgentStatusCommand,
  CreateAgentStatusCommandInput,
  CreateAgentStatusCommandOutput,
} from "./commands/CreateAgentStatusCommand";
import {
  CreateContactFlowCommand,
  CreateContactFlowCommandInput,
  CreateContactFlowCommandOutput,
} from "./commands/CreateContactFlowCommand";
import {
  CreateContactFlowModuleCommand,
  CreateContactFlowModuleCommandInput,
  CreateContactFlowModuleCommandOutput,
} from "./commands/CreateContactFlowModuleCommand";
import {
  CreateEvaluationFormCommand,
  CreateEvaluationFormCommandInput,
  CreateEvaluationFormCommandOutput,
} from "./commands/CreateEvaluationFormCommand";
import {
  CreateHoursOfOperationCommand,
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
} from "./commands/CreateHoursOfOperationCommand";
import {
  CreateInstanceCommand,
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
} from "./commands/CreateInstanceCommand";
import {
  CreateIntegrationAssociationCommand,
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
} from "./commands/CreateIntegrationAssociationCommand";
import {
  CreateParticipantCommand,
  CreateParticipantCommandInput,
  CreateParticipantCommandOutput,
} from "./commands/CreateParticipantCommand";
import {
  CreatePromptCommand,
  CreatePromptCommandInput,
  CreatePromptCommandOutput,
} from "./commands/CreatePromptCommand";
import { CreateQueueCommand, CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import {
  CreateQuickConnectCommand,
  CreateQuickConnectCommandInput,
  CreateQuickConnectCommandOutput,
} from "./commands/CreateQuickConnectCommand";
import {
  CreateRoutingProfileCommand,
  CreateRoutingProfileCommandInput,
  CreateRoutingProfileCommandOutput,
} from "./commands/CreateRoutingProfileCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateSecurityProfileCommand,
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "./commands/CreateSecurityProfileCommand";
import {
  CreateTaskTemplateCommand,
  CreateTaskTemplateCommandInput,
  CreateTaskTemplateCommandOutput,
} from "./commands/CreateTaskTemplateCommand";
import {
  CreateTrafficDistributionGroupCommand,
  CreateTrafficDistributionGroupCommandInput,
  CreateTrafficDistributionGroupCommandOutput,
} from "./commands/CreateTrafficDistributionGroupCommand";
import {
  CreateUseCaseCommand,
  CreateUseCaseCommandInput,
  CreateUseCaseCommandOutput,
} from "./commands/CreateUseCaseCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateUserHierarchyGroupCommand,
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
} from "./commands/CreateUserHierarchyGroupCommand";
import { CreateViewCommand, CreateViewCommandInput, CreateViewCommandOutput } from "./commands/CreateViewCommand";
import {
  CreateViewVersionCommand,
  CreateViewVersionCommandInput,
  CreateViewVersionCommandOutput,
} from "./commands/CreateViewVersionCommand";
import {
  CreateVocabularyCommand,
  CreateVocabularyCommandInput,
  CreateVocabularyCommandOutput,
} from "./commands/CreateVocabularyCommand";
import {
  DeactivateEvaluationFormCommand,
  DeactivateEvaluationFormCommandInput,
  DeactivateEvaluationFormCommandOutput,
} from "./commands/DeactivateEvaluationFormCommand";
import {
  DeleteContactEvaluationCommand,
  DeleteContactEvaluationCommandInput,
  DeleteContactEvaluationCommandOutput,
} from "./commands/DeleteContactEvaluationCommand";
import {
  DeleteContactFlowCommand,
  DeleteContactFlowCommandInput,
  DeleteContactFlowCommandOutput,
} from "./commands/DeleteContactFlowCommand";
import {
  DeleteContactFlowModuleCommand,
  DeleteContactFlowModuleCommandInput,
  DeleteContactFlowModuleCommandOutput,
} from "./commands/DeleteContactFlowModuleCommand";
import {
  DeleteEvaluationFormCommand,
  DeleteEvaluationFormCommandInput,
  DeleteEvaluationFormCommandOutput,
} from "./commands/DeleteEvaluationFormCommand";
import {
  DeleteHoursOfOperationCommand,
  DeleteHoursOfOperationCommandInput,
  DeleteHoursOfOperationCommandOutput,
} from "./commands/DeleteHoursOfOperationCommand";
import {
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput,
} from "./commands/DeleteInstanceCommand";
import {
  DeleteIntegrationAssociationCommand,
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
} from "./commands/DeleteIntegrationAssociationCommand";
import {
  DeletePromptCommand,
  DeletePromptCommandInput,
  DeletePromptCommandOutput,
} from "./commands/DeletePromptCommand";
import { DeleteQueueCommand, DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import {
  DeleteQuickConnectCommand,
  DeleteQuickConnectCommandInput,
  DeleteQuickConnectCommandOutput,
} from "./commands/DeleteQuickConnectCommand";
import {
  DeleteRoutingProfileCommand,
  DeleteRoutingProfileCommandInput,
  DeleteRoutingProfileCommandOutput,
} from "./commands/DeleteRoutingProfileCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteSecurityProfileCommand,
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "./commands/DeleteSecurityProfileCommand";
import {
  DeleteTaskTemplateCommand,
  DeleteTaskTemplateCommandInput,
  DeleteTaskTemplateCommandOutput,
} from "./commands/DeleteTaskTemplateCommand";
import {
  DeleteTrafficDistributionGroupCommand,
  DeleteTrafficDistributionGroupCommandInput,
  DeleteTrafficDistributionGroupCommandOutput,
} from "./commands/DeleteTrafficDistributionGroupCommand";
import {
  DeleteUseCaseCommand,
  DeleteUseCaseCommandInput,
  DeleteUseCaseCommandOutput,
} from "./commands/DeleteUseCaseCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserHierarchyGroupCommand,
  DeleteUserHierarchyGroupCommandInput,
  DeleteUserHierarchyGroupCommandOutput,
} from "./commands/DeleteUserHierarchyGroupCommand";
import { DeleteViewCommand, DeleteViewCommandInput, DeleteViewCommandOutput } from "./commands/DeleteViewCommand";
import {
  DeleteViewVersionCommand,
  DeleteViewVersionCommandInput,
  DeleteViewVersionCommandOutput,
} from "./commands/DeleteViewVersionCommand";
import {
  DeleteVocabularyCommand,
  DeleteVocabularyCommandInput,
  DeleteVocabularyCommandOutput,
} from "./commands/DeleteVocabularyCommand";
import {
  DescribeAgentStatusCommand,
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
} from "./commands/DescribeAgentStatusCommand";
import {
  DescribeContactCommand,
  DescribeContactCommandInput,
  DescribeContactCommandOutput,
} from "./commands/DescribeContactCommand";
import {
  DescribeContactEvaluationCommand,
  DescribeContactEvaluationCommandInput,
  DescribeContactEvaluationCommandOutput,
} from "./commands/DescribeContactEvaluationCommand";
import {
  DescribeContactFlowCommand,
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "./commands/DescribeContactFlowCommand";
import {
  DescribeContactFlowModuleCommand,
  DescribeContactFlowModuleCommandInput,
  DescribeContactFlowModuleCommandOutput,
} from "./commands/DescribeContactFlowModuleCommand";
import {
  DescribeEvaluationFormCommand,
  DescribeEvaluationFormCommandInput,
  DescribeEvaluationFormCommandOutput,
} from "./commands/DescribeEvaluationFormCommand";
import {
  DescribeHoursOfOperationCommand,
  DescribeHoursOfOperationCommandInput,
  DescribeHoursOfOperationCommandOutput,
} from "./commands/DescribeHoursOfOperationCommand";
import {
  DescribeInstanceAttributeCommand,
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "./commands/DescribeInstanceAttributeCommand";
import {
  DescribeInstanceCommand,
  DescribeInstanceCommandInput,
  DescribeInstanceCommandOutput,
} from "./commands/DescribeInstanceCommand";
import {
  DescribeInstanceStorageConfigCommand,
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
} from "./commands/DescribeInstanceStorageConfigCommand";
import {
  DescribePhoneNumberCommand,
  DescribePhoneNumberCommandInput,
  DescribePhoneNumberCommandOutput,
} from "./commands/DescribePhoneNumberCommand";
import {
  DescribePromptCommand,
  DescribePromptCommandInput,
  DescribePromptCommandOutput,
} from "./commands/DescribePromptCommand";
import {
  DescribeQueueCommand,
  DescribeQueueCommandInput,
  DescribeQueueCommandOutput,
} from "./commands/DescribeQueueCommand";
import {
  DescribeQuickConnectCommand,
  DescribeQuickConnectCommandInput,
  DescribeQuickConnectCommandOutput,
} from "./commands/DescribeQuickConnectCommand";
import {
  DescribeRoutingProfileCommand,
  DescribeRoutingProfileCommandInput,
  DescribeRoutingProfileCommandOutput,
} from "./commands/DescribeRoutingProfileCommand";
import {
  DescribeRuleCommand,
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput,
} from "./commands/DescribeRuleCommand";
import {
  DescribeSecurityProfileCommand,
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "./commands/DescribeSecurityProfileCommand";
import {
  DescribeTrafficDistributionGroupCommand,
  DescribeTrafficDistributionGroupCommandInput,
  DescribeTrafficDistributionGroupCommandOutput,
} from "./commands/DescribeTrafficDistributionGroupCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  DescribeUserHierarchyGroupCommand,
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput,
} from "./commands/DescribeUserHierarchyGroupCommand";
import {
  DescribeUserHierarchyStructureCommand,
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
} from "./commands/DescribeUserHierarchyStructureCommand";
import {
  DescribeViewCommand,
  DescribeViewCommandInput,
  DescribeViewCommandOutput,
} from "./commands/DescribeViewCommand";
import {
  DescribeVocabularyCommand,
  DescribeVocabularyCommandInput,
  DescribeVocabularyCommandOutput,
} from "./commands/DescribeVocabularyCommand";
import {
  DisassociateApprovedOriginCommand,
  DisassociateApprovedOriginCommandInput,
  DisassociateApprovedOriginCommandOutput,
} from "./commands/DisassociateApprovedOriginCommand";
import {
  DisassociateBotCommand,
  DisassociateBotCommandInput,
  DisassociateBotCommandOutput,
} from "./commands/DisassociateBotCommand";
import {
  DisassociateInstanceStorageConfigCommand,
  DisassociateInstanceStorageConfigCommandInput,
  DisassociateInstanceStorageConfigCommandOutput,
} from "./commands/DisassociateInstanceStorageConfigCommand";
import {
  DisassociateLambdaFunctionCommand,
  DisassociateLambdaFunctionCommandInput,
  DisassociateLambdaFunctionCommandOutput,
} from "./commands/DisassociateLambdaFunctionCommand";
import {
  DisassociateLexBotCommand,
  DisassociateLexBotCommandInput,
  DisassociateLexBotCommandOutput,
} from "./commands/DisassociateLexBotCommand";
import {
  DisassociatePhoneNumberContactFlowCommand,
  DisassociatePhoneNumberContactFlowCommandInput,
  DisassociatePhoneNumberContactFlowCommandOutput,
} from "./commands/DisassociatePhoneNumberContactFlowCommand";
import {
  DisassociateQueueQuickConnectsCommand,
  DisassociateQueueQuickConnectsCommandInput,
  DisassociateQueueQuickConnectsCommandOutput,
} from "./commands/DisassociateQueueQuickConnectsCommand";
import {
  DisassociateRoutingProfileQueuesCommand,
  DisassociateRoutingProfileQueuesCommandInput,
  DisassociateRoutingProfileQueuesCommandOutput,
} from "./commands/DisassociateRoutingProfileQueuesCommand";
import {
  DisassociateSecurityKeyCommand,
  DisassociateSecurityKeyCommandInput,
  DisassociateSecurityKeyCommandOutput,
} from "./commands/DisassociateSecurityKeyCommand";
import {
  DisassociateTrafficDistributionGroupUserCommand,
  DisassociateTrafficDistributionGroupUserCommandInput,
  DisassociateTrafficDistributionGroupUserCommandOutput,
} from "./commands/DisassociateTrafficDistributionGroupUserCommand";
import {
  DismissUserContactCommand,
  DismissUserContactCommandInput,
  DismissUserContactCommandOutput,
} from "./commands/DismissUserContactCommand";
import {
  GetContactAttributesCommand,
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput,
} from "./commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommand,
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "./commands/GetCurrentMetricDataCommand";
import {
  GetCurrentUserDataCommand,
  GetCurrentUserDataCommandInput,
  GetCurrentUserDataCommandOutput,
} from "./commands/GetCurrentUserDataCommand";
import {
  GetFederationTokenCommand,
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "./commands/GetFederationTokenCommand";
import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
} from "./commands/GetMetricDataCommand";
import {
  GetMetricDataV2Command,
  GetMetricDataV2CommandInput,
  GetMetricDataV2CommandOutput,
} from "./commands/GetMetricDataV2Command";
import {
  GetPromptFileCommand,
  GetPromptFileCommandInput,
  GetPromptFileCommandOutput,
} from "./commands/GetPromptFileCommand";
import {
  GetTaskTemplateCommand,
  GetTaskTemplateCommandInput,
  GetTaskTemplateCommandOutput,
} from "./commands/GetTaskTemplateCommand";
import {
  GetTrafficDistributionCommand,
  GetTrafficDistributionCommandInput,
  GetTrafficDistributionCommandOutput,
} from "./commands/GetTrafficDistributionCommand";
import {
  ListAgentStatusesCommand,
  ListAgentStatusesCommandInput,
  ListAgentStatusesCommandOutput,
} from "./commands/ListAgentStatusesCommand";
import {
  ListApprovedOriginsCommand,
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "./commands/ListApprovedOriginsCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListContactEvaluationsCommand,
  ListContactEvaluationsCommandInput,
  ListContactEvaluationsCommandOutput,
} from "./commands/ListContactEvaluationsCommand";
import {
  ListContactFlowModulesCommand,
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "./commands/ListContactFlowModulesCommand";
import {
  ListContactFlowsCommand,
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput,
} from "./commands/ListContactFlowsCommand";
import {
  ListContactReferencesCommand,
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "./commands/ListContactReferencesCommand";
import {
  ListDefaultVocabulariesCommand,
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "./commands/ListDefaultVocabulariesCommand";
import {
  ListEvaluationFormsCommand,
  ListEvaluationFormsCommandInput,
  ListEvaluationFormsCommandOutput,
} from "./commands/ListEvaluationFormsCommand";
import {
  ListEvaluationFormVersionsCommand,
  ListEvaluationFormVersionsCommandInput,
  ListEvaluationFormVersionsCommandOutput,
} from "./commands/ListEvaluationFormVersionsCommand";
import {
  ListHoursOfOperationsCommand,
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "./commands/ListHoursOfOperationsCommand";
import {
  ListInstanceAttributesCommand,
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "./commands/ListInstanceAttributesCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListInstanceStorageConfigsCommand,
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
} from "./commands/ListInstanceStorageConfigsCommand";
import {
  ListIntegrationAssociationsCommand,
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "./commands/ListIntegrationAssociationsCommand";
import {
  ListLambdaFunctionsCommand,
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
} from "./commands/ListLambdaFunctionsCommand";
import { ListLexBotsCommand, ListLexBotsCommandInput, ListLexBotsCommandOutput } from "./commands/ListLexBotsCommand";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "./commands/ListPhoneNumbersCommand";
import {
  ListPhoneNumbersV2Command,
  ListPhoneNumbersV2CommandInput,
  ListPhoneNumbersV2CommandOutput,
} from "./commands/ListPhoneNumbersV2Command";
import { ListPromptsCommand, ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import {
  ListQueueQuickConnectsCommand,
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "./commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import {
  ListQuickConnectsCommand,
  ListQuickConnectsCommandInput,
  ListQuickConnectsCommandOutput,
} from "./commands/ListQuickConnectsCommand";
import {
  ListRoutingProfileQueuesCommand,
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
} from "./commands/ListRoutingProfileQueuesCommand";
import {
  ListRoutingProfilesCommand,
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "./commands/ListRoutingProfilesCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListSecurityKeysCommand,
  ListSecurityKeysCommandInput,
  ListSecurityKeysCommandOutput,
} from "./commands/ListSecurityKeysCommand";
import {
  ListSecurityProfileApplicationsCommand,
  ListSecurityProfileApplicationsCommandInput,
  ListSecurityProfileApplicationsCommandOutput,
} from "./commands/ListSecurityProfileApplicationsCommand";
import {
  ListSecurityProfilePermissionsCommand,
  ListSecurityProfilePermissionsCommandInput,
  ListSecurityProfilePermissionsCommandOutput,
} from "./commands/ListSecurityProfilePermissionsCommand";
import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskTemplatesCommand,
  ListTaskTemplatesCommandInput,
  ListTaskTemplatesCommandOutput,
} from "./commands/ListTaskTemplatesCommand";
import {
  ListTrafficDistributionGroupsCommand,
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
} from "./commands/ListTrafficDistributionGroupsCommand";
import {
  ListTrafficDistributionGroupUsersCommand,
  ListTrafficDistributionGroupUsersCommandInput,
  ListTrafficDistributionGroupUsersCommandOutput,
} from "./commands/ListTrafficDistributionGroupUsersCommand";
import {
  ListUseCasesCommand,
  ListUseCasesCommandInput,
  ListUseCasesCommandOutput,
} from "./commands/ListUseCasesCommand";
import {
  ListUserHierarchyGroupsCommand,
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "./commands/ListUserHierarchyGroupsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListViewsCommand, ListViewsCommandInput, ListViewsCommandOutput } from "./commands/ListViewsCommand";
import {
  ListViewVersionsCommand,
  ListViewVersionsCommandInput,
  ListViewVersionsCommandOutput,
} from "./commands/ListViewVersionsCommand";
import {
  MonitorContactCommand,
  MonitorContactCommandInput,
  MonitorContactCommandOutput,
} from "./commands/MonitorContactCommand";
import {
  PutUserStatusCommand,
  PutUserStatusCommandInput,
  PutUserStatusCommandOutput,
} from "./commands/PutUserStatusCommand";
import {
  ReleasePhoneNumberCommand,
  ReleasePhoneNumberCommandInput,
  ReleasePhoneNumberCommandOutput,
} from "./commands/ReleasePhoneNumberCommand";
import {
  ReplicateInstanceCommand,
  ReplicateInstanceCommandInput,
  ReplicateInstanceCommandOutput,
} from "./commands/ReplicateInstanceCommand";
import {
  ResumeContactRecordingCommand,
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "./commands/ResumeContactRecordingCommand";
import {
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  SearchHoursOfOperationsCommand,
  SearchHoursOfOperationsCommandInput,
  SearchHoursOfOperationsCommandOutput,
} from "./commands/SearchHoursOfOperationsCommand";
import {
  SearchPromptsCommand,
  SearchPromptsCommandInput,
  SearchPromptsCommandOutput,
} from "./commands/SearchPromptsCommand";
import {
  SearchQueuesCommand,
  SearchQueuesCommandInput,
  SearchQueuesCommandOutput,
} from "./commands/SearchQueuesCommand";
import {
  SearchQuickConnectsCommand,
  SearchQuickConnectsCommandInput,
  SearchQuickConnectsCommandOutput,
} from "./commands/SearchQuickConnectsCommand";
import {
  SearchResourceTagsCommand,
  SearchResourceTagsCommandInput,
  SearchResourceTagsCommandOutput,
} from "./commands/SearchResourceTagsCommand";
import {
  SearchRoutingProfilesCommand,
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "./commands/SearchRoutingProfilesCommand";
import {
  SearchSecurityProfilesCommand,
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
} from "./commands/SearchSecurityProfilesCommand";
import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import {
  SearchVocabulariesCommand,
  SearchVocabulariesCommandInput,
  SearchVocabulariesCommandOutput,
} from "./commands/SearchVocabulariesCommand";
import {
  StartChatContactCommand,
  StartChatContactCommandInput,
  StartChatContactCommandOutput,
} from "./commands/StartChatContactCommand";
import {
  StartContactEvaluationCommand,
  StartContactEvaluationCommandInput,
  StartContactEvaluationCommandOutput,
} from "./commands/StartContactEvaluationCommand";
import {
  StartContactRecordingCommand,
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "./commands/StartContactRecordingCommand";
import {
  StartContactStreamingCommand,
  StartContactStreamingCommandInput,
  StartContactStreamingCommandOutput,
} from "./commands/StartContactStreamingCommand";
import {
  StartOutboundVoiceContactCommand,
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "./commands/StartOutboundVoiceContactCommand";
import {
  StartTaskContactCommand,
  StartTaskContactCommandInput,
  StartTaskContactCommandOutput,
} from "./commands/StartTaskContactCommand";
import { StopContactCommand, StopContactCommandInput, StopContactCommandOutput } from "./commands/StopContactCommand";
import {
  StopContactRecordingCommand,
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
} from "./commands/StopContactRecordingCommand";
import {
  StopContactStreamingCommand,
  StopContactStreamingCommandInput,
  StopContactStreamingCommandOutput,
} from "./commands/StopContactStreamingCommand";
import {
  SubmitContactEvaluationCommand,
  SubmitContactEvaluationCommandInput,
  SubmitContactEvaluationCommandOutput,
} from "./commands/SubmitContactEvaluationCommand";
import {
  SuspendContactRecordingCommand,
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "./commands/SuspendContactRecordingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TransferContactCommand,
  TransferContactCommandInput,
  TransferContactCommandOutput,
} from "./commands/TransferContactCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAgentStatusCommand,
  UpdateAgentStatusCommandInput,
  UpdateAgentStatusCommandOutput,
} from "./commands/UpdateAgentStatusCommand";
import {
  UpdateContactAttributesCommand,
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "./commands/UpdateContactAttributesCommand";
import {
  UpdateContactCommand,
  UpdateContactCommandInput,
  UpdateContactCommandOutput,
} from "./commands/UpdateContactCommand";
import {
  UpdateContactEvaluationCommand,
  UpdateContactEvaluationCommandInput,
  UpdateContactEvaluationCommandOutput,
} from "./commands/UpdateContactEvaluationCommand";
import {
  UpdateContactFlowContentCommand,
  UpdateContactFlowContentCommandInput,
  UpdateContactFlowContentCommandOutput,
} from "./commands/UpdateContactFlowContentCommand";
import {
  UpdateContactFlowMetadataCommand,
  UpdateContactFlowMetadataCommandInput,
  UpdateContactFlowMetadataCommandOutput,
} from "./commands/UpdateContactFlowMetadataCommand";
import {
  UpdateContactFlowModuleContentCommand,
  UpdateContactFlowModuleContentCommandInput,
  UpdateContactFlowModuleContentCommandOutput,
} from "./commands/UpdateContactFlowModuleContentCommand";
import {
  UpdateContactFlowModuleMetadataCommand,
  UpdateContactFlowModuleMetadataCommandInput,
  UpdateContactFlowModuleMetadataCommandOutput,
} from "./commands/UpdateContactFlowModuleMetadataCommand";
import {
  UpdateContactFlowNameCommand,
  UpdateContactFlowNameCommandInput,
  UpdateContactFlowNameCommandOutput,
} from "./commands/UpdateContactFlowNameCommand";
import {
  UpdateContactScheduleCommand,
  UpdateContactScheduleCommandInput,
  UpdateContactScheduleCommandOutput,
} from "./commands/UpdateContactScheduleCommand";
import {
  UpdateEvaluationFormCommand,
  UpdateEvaluationFormCommandInput,
  UpdateEvaluationFormCommandOutput,
} from "./commands/UpdateEvaluationFormCommand";
import {
  UpdateHoursOfOperationCommand,
  UpdateHoursOfOperationCommandInput,
  UpdateHoursOfOperationCommandOutput,
} from "./commands/UpdateHoursOfOperationCommand";
import {
  UpdateInstanceAttributeCommand,
  UpdateInstanceAttributeCommandInput,
  UpdateInstanceAttributeCommandOutput,
} from "./commands/UpdateInstanceAttributeCommand";
import {
  UpdateInstanceStorageConfigCommand,
  UpdateInstanceStorageConfigCommandInput,
  UpdateInstanceStorageConfigCommandOutput,
} from "./commands/UpdateInstanceStorageConfigCommand";
import {
  UpdateParticipantRoleConfigCommand,
  UpdateParticipantRoleConfigCommandInput,
  UpdateParticipantRoleConfigCommandOutput,
} from "./commands/UpdateParticipantRoleConfigCommand";
import {
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
} from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePromptCommand,
  UpdatePromptCommandInput,
  UpdatePromptCommandOutput,
} from "./commands/UpdatePromptCommand";
import {
  UpdateQueueHoursOfOperationCommand,
  UpdateQueueHoursOfOperationCommandInput,
  UpdateQueueHoursOfOperationCommandOutput,
} from "./commands/UpdateQueueHoursOfOperationCommand";
import {
  UpdateQueueMaxContactsCommand,
  UpdateQueueMaxContactsCommandInput,
  UpdateQueueMaxContactsCommandOutput,
} from "./commands/UpdateQueueMaxContactsCommand";
import {
  UpdateQueueNameCommand,
  UpdateQueueNameCommandInput,
  UpdateQueueNameCommandOutput,
} from "./commands/UpdateQueueNameCommand";
import {
  UpdateQueueOutboundCallerConfigCommand,
  UpdateQueueOutboundCallerConfigCommandInput,
  UpdateQueueOutboundCallerConfigCommandOutput,
} from "./commands/UpdateQueueOutboundCallerConfigCommand";
import {
  UpdateQueueStatusCommand,
  UpdateQueueStatusCommandInput,
  UpdateQueueStatusCommandOutput,
} from "./commands/UpdateQueueStatusCommand";
import {
  UpdateQuickConnectConfigCommand,
  UpdateQuickConnectConfigCommandInput,
  UpdateQuickConnectConfigCommandOutput,
} from "./commands/UpdateQuickConnectConfigCommand";
import {
  UpdateQuickConnectNameCommand,
  UpdateQuickConnectNameCommandInput,
  UpdateQuickConnectNameCommandOutput,
} from "./commands/UpdateQuickConnectNameCommand";
import {
  UpdateRoutingProfileAgentAvailabilityTimerCommand,
  UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
  UpdateRoutingProfileAgentAvailabilityTimerCommandOutput,
} from "./commands/UpdateRoutingProfileAgentAvailabilityTimerCommand";
import {
  UpdateRoutingProfileConcurrencyCommand,
  UpdateRoutingProfileConcurrencyCommandInput,
  UpdateRoutingProfileConcurrencyCommandOutput,
} from "./commands/UpdateRoutingProfileConcurrencyCommand";
import {
  UpdateRoutingProfileDefaultOutboundQueueCommand,
  UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
} from "./commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import {
  UpdateRoutingProfileNameCommand,
  UpdateRoutingProfileNameCommandInput,
  UpdateRoutingProfileNameCommandOutput,
} from "./commands/UpdateRoutingProfileNameCommand";
import {
  UpdateRoutingProfileQueuesCommand,
  UpdateRoutingProfileQueuesCommandInput,
  UpdateRoutingProfileQueuesCommandOutput,
} from "./commands/UpdateRoutingProfileQueuesCommand";
import { UpdateRuleCommand, UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import {
  UpdateSecurityProfileCommand,
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "./commands/UpdateSecurityProfileCommand";
import {
  UpdateTaskTemplateCommand,
  UpdateTaskTemplateCommandInput,
  UpdateTaskTemplateCommandOutput,
} from "./commands/UpdateTaskTemplateCommand";
import {
  UpdateTrafficDistributionCommand,
  UpdateTrafficDistributionCommandInput,
  UpdateTrafficDistributionCommandOutput,
} from "./commands/UpdateTrafficDistributionCommand";
import {
  UpdateUserHierarchyCommand,
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput,
} from "./commands/UpdateUserHierarchyCommand";
import {
  UpdateUserHierarchyGroupNameCommand,
  UpdateUserHierarchyGroupNameCommandInput,
  UpdateUserHierarchyGroupNameCommandOutput,
} from "./commands/UpdateUserHierarchyGroupNameCommand";
import {
  UpdateUserHierarchyStructureCommand,
  UpdateUserHierarchyStructureCommandInput,
  UpdateUserHierarchyStructureCommandOutput,
} from "./commands/UpdateUserHierarchyStructureCommand";
import {
  UpdateUserIdentityInfoCommand,
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
} from "./commands/UpdateUserIdentityInfoCommand";
import {
  UpdateUserPhoneConfigCommand,
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput,
} from "./commands/UpdateUserPhoneConfigCommand";
import {
  UpdateUserRoutingProfileCommand,
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "./commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommand,
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "./commands/UpdateUserSecurityProfilesCommand";
import {
  UpdateViewContentCommand,
  UpdateViewContentCommandInput,
  UpdateViewContentCommandOutput,
} from "./commands/UpdateViewContentCommand";
import {
  UpdateViewMetadataCommand,
  UpdateViewMetadataCommandInput,
  UpdateViewMetadataCommandOutput,
} from "./commands/UpdateViewMetadataCommand";
import { ConnectClient, ConnectClientConfig } from "./ConnectClient";

const commands = {
  ActivateEvaluationFormCommand,
  AssociateApprovedOriginCommand,
  AssociateBotCommand,
  AssociateDefaultVocabularyCommand,
  AssociateInstanceStorageConfigCommand,
  AssociateLambdaFunctionCommand,
  AssociateLexBotCommand,
  AssociatePhoneNumberContactFlowCommand,
  AssociateQueueQuickConnectsCommand,
  AssociateRoutingProfileQueuesCommand,
  AssociateSecurityKeyCommand,
  AssociateTrafficDistributionGroupUserCommand,
  ClaimPhoneNumberCommand,
  CreateAgentStatusCommand,
  CreateContactFlowCommand,
  CreateContactFlowModuleCommand,
  CreateEvaluationFormCommand,
  CreateHoursOfOperationCommand,
  CreateInstanceCommand,
  CreateIntegrationAssociationCommand,
  CreateParticipantCommand,
  CreatePromptCommand,
  CreateQueueCommand,
  CreateQuickConnectCommand,
  CreateRoutingProfileCommand,
  CreateRuleCommand,
  CreateSecurityProfileCommand,
  CreateTaskTemplateCommand,
  CreateTrafficDistributionGroupCommand,
  CreateUseCaseCommand,
  CreateUserCommand,
  CreateUserHierarchyGroupCommand,
  CreateViewCommand,
  CreateViewVersionCommand,
  CreateVocabularyCommand,
  DeactivateEvaluationFormCommand,
  DeleteContactEvaluationCommand,
  DeleteContactFlowCommand,
  DeleteContactFlowModuleCommand,
  DeleteEvaluationFormCommand,
  DeleteHoursOfOperationCommand,
  DeleteInstanceCommand,
  DeleteIntegrationAssociationCommand,
  DeletePromptCommand,
  DeleteQueueCommand,
  DeleteQuickConnectCommand,
  DeleteRoutingProfileCommand,
  DeleteRuleCommand,
  DeleteSecurityProfileCommand,
  DeleteTaskTemplateCommand,
  DeleteTrafficDistributionGroupCommand,
  DeleteUseCaseCommand,
  DeleteUserCommand,
  DeleteUserHierarchyGroupCommand,
  DeleteViewCommand,
  DeleteViewVersionCommand,
  DeleteVocabularyCommand,
  DescribeAgentStatusCommand,
  DescribeContactCommand,
  DescribeContactEvaluationCommand,
  DescribeContactFlowCommand,
  DescribeContactFlowModuleCommand,
  DescribeEvaluationFormCommand,
  DescribeHoursOfOperationCommand,
  DescribeInstanceCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceStorageConfigCommand,
  DescribePhoneNumberCommand,
  DescribePromptCommand,
  DescribeQueueCommand,
  DescribeQuickConnectCommand,
  DescribeRoutingProfileCommand,
  DescribeRuleCommand,
  DescribeSecurityProfileCommand,
  DescribeTrafficDistributionGroupCommand,
  DescribeUserCommand,
  DescribeUserHierarchyGroupCommand,
  DescribeUserHierarchyStructureCommand,
  DescribeViewCommand,
  DescribeVocabularyCommand,
  DisassociateApprovedOriginCommand,
  DisassociateBotCommand,
  DisassociateInstanceStorageConfigCommand,
  DisassociateLambdaFunctionCommand,
  DisassociateLexBotCommand,
  DisassociatePhoneNumberContactFlowCommand,
  DisassociateQueueQuickConnectsCommand,
  DisassociateRoutingProfileQueuesCommand,
  DisassociateSecurityKeyCommand,
  DisassociateTrafficDistributionGroupUserCommand,
  DismissUserContactCommand,
  GetContactAttributesCommand,
  GetCurrentMetricDataCommand,
  GetCurrentUserDataCommand,
  GetFederationTokenCommand,
  GetMetricDataCommand,
  GetMetricDataV2Command,
  GetPromptFileCommand,
  GetTaskTemplateCommand,
  GetTrafficDistributionCommand,
  ListAgentStatusesCommand,
  ListApprovedOriginsCommand,
  ListBotsCommand,
  ListContactEvaluationsCommand,
  ListContactFlowModulesCommand,
  ListContactFlowsCommand,
  ListContactReferencesCommand,
  ListDefaultVocabulariesCommand,
  ListEvaluationFormsCommand,
  ListEvaluationFormVersionsCommand,
  ListHoursOfOperationsCommand,
  ListInstanceAttributesCommand,
  ListInstancesCommand,
  ListInstanceStorageConfigsCommand,
  ListIntegrationAssociationsCommand,
  ListLambdaFunctionsCommand,
  ListLexBotsCommand,
  ListPhoneNumbersCommand,
  ListPhoneNumbersV2Command,
  ListPromptsCommand,
  ListQueueQuickConnectsCommand,
  ListQueuesCommand,
  ListQuickConnectsCommand,
  ListRoutingProfileQueuesCommand,
  ListRoutingProfilesCommand,
  ListRulesCommand,
  ListSecurityKeysCommand,
  ListSecurityProfileApplicationsCommand,
  ListSecurityProfilePermissionsCommand,
  ListSecurityProfilesCommand,
  ListTagsForResourceCommand,
  ListTaskTemplatesCommand,
  ListTrafficDistributionGroupsCommand,
  ListTrafficDistributionGroupUsersCommand,
  ListUseCasesCommand,
  ListUserHierarchyGroupsCommand,
  ListUsersCommand,
  ListViewsCommand,
  ListViewVersionsCommand,
  MonitorContactCommand,
  PutUserStatusCommand,
  ReleasePhoneNumberCommand,
  ReplicateInstanceCommand,
  ResumeContactRecordingCommand,
  SearchAvailablePhoneNumbersCommand,
  SearchHoursOfOperationsCommand,
  SearchPromptsCommand,
  SearchQueuesCommand,
  SearchQuickConnectsCommand,
  SearchResourceTagsCommand,
  SearchRoutingProfilesCommand,
  SearchSecurityProfilesCommand,
  SearchUsersCommand,
  SearchVocabulariesCommand,
  StartChatContactCommand,
  StartContactEvaluationCommand,
  StartContactRecordingCommand,
  StartContactStreamingCommand,
  StartOutboundVoiceContactCommand,
  StartTaskContactCommand,
  StopContactCommand,
  StopContactRecordingCommand,
  StopContactStreamingCommand,
  SubmitContactEvaluationCommand,
  SuspendContactRecordingCommand,
  TagResourceCommand,
  TransferContactCommand,
  UntagResourceCommand,
  UpdateAgentStatusCommand,
  UpdateContactCommand,
  UpdateContactAttributesCommand,
  UpdateContactEvaluationCommand,
  UpdateContactFlowContentCommand,
  UpdateContactFlowMetadataCommand,
  UpdateContactFlowModuleContentCommand,
  UpdateContactFlowModuleMetadataCommand,
  UpdateContactFlowNameCommand,
  UpdateContactScheduleCommand,
  UpdateEvaluationFormCommand,
  UpdateHoursOfOperationCommand,
  UpdateInstanceAttributeCommand,
  UpdateInstanceStorageConfigCommand,
  UpdateParticipantRoleConfigCommand,
  UpdatePhoneNumberCommand,
  UpdatePromptCommand,
  UpdateQueueHoursOfOperationCommand,
  UpdateQueueMaxContactsCommand,
  UpdateQueueNameCommand,
  UpdateQueueOutboundCallerConfigCommand,
  UpdateQueueStatusCommand,
  UpdateQuickConnectConfigCommand,
  UpdateQuickConnectNameCommand,
  UpdateRoutingProfileAgentAvailabilityTimerCommand,
  UpdateRoutingProfileConcurrencyCommand,
  UpdateRoutingProfileDefaultOutboundQueueCommand,
  UpdateRoutingProfileNameCommand,
  UpdateRoutingProfileQueuesCommand,
  UpdateRuleCommand,
  UpdateSecurityProfileCommand,
  UpdateTaskTemplateCommand,
  UpdateTrafficDistributionCommand,
  UpdateUserHierarchyCommand,
  UpdateUserHierarchyGroupNameCommand,
  UpdateUserHierarchyStructureCommand,
  UpdateUserIdentityInfoCommand,
  UpdateUserPhoneConfigCommand,
  UpdateUserRoutingProfileCommand,
  UpdateUserSecurityProfilesCommand,
  UpdateViewContentCommand,
  UpdateViewMetadataCommand,
};

export interface Connect {
  /**
   * @see {@link ActivateEvaluationFormCommand}
   */
  activateEvaluationForm(
    args: ActivateEvaluationFormCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateEvaluationFormCommandOutput>;
  activateEvaluationForm(
    args: ActivateEvaluationFormCommandInput,
    cb: (err: any, data?: ActivateEvaluationFormCommandOutput) => void
  ): void;
  activateEvaluationForm(
    args: ActivateEvaluationFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateEvaluationFormCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApprovedOriginCommand}
   */
  associateApprovedOrigin(
    args: AssociateApprovedOriginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApprovedOriginCommandOutput>;
  associateApprovedOrigin(
    args: AssociateApprovedOriginCommandInput,
    cb: (err: any, data?: AssociateApprovedOriginCommandOutput) => void
  ): void;
  associateApprovedOrigin(
    args: AssociateApprovedOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApprovedOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateBotCommand}
   */
  associateBot(args: AssociateBotCommandInput, options?: __HttpHandlerOptions): Promise<AssociateBotCommandOutput>;
  associateBot(args: AssociateBotCommandInput, cb: (err: any, data?: AssociateBotCommandOutput) => void): void;
  associateBot(
    args: AssociateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDefaultVocabularyCommand}
   */
  associateDefaultVocabulary(
    args: AssociateDefaultVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDefaultVocabularyCommandOutput>;
  associateDefaultVocabulary(
    args: AssociateDefaultVocabularyCommandInput,
    cb: (err: any, data?: AssociateDefaultVocabularyCommandOutput) => void
  ): void;
  associateDefaultVocabulary(
    args: AssociateDefaultVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDefaultVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateInstanceStorageConfigCommand}
   */
  associateInstanceStorageConfig(
    args: AssociateInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateInstanceStorageConfigCommandOutput>;
  associateInstanceStorageConfig(
    args: AssociateInstanceStorageConfigCommandInput,
    cb: (err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void
  ): void;
  associateInstanceStorageConfig(
    args: AssociateInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateLambdaFunctionCommand}
   */
  associateLambdaFunction(
    args: AssociateLambdaFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLambdaFunctionCommandOutput>;
  associateLambdaFunction(
    args: AssociateLambdaFunctionCommandInput,
    cb: (err: any, data?: AssociateLambdaFunctionCommandOutput) => void
  ): void;
  associateLambdaFunction(
    args: AssociateLambdaFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLambdaFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateLexBotCommand}
   */
  associateLexBot(
    args: AssociateLexBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLexBotCommandOutput>;
  associateLexBot(args: AssociateLexBotCommandInput, cb: (err: any, data?: AssociateLexBotCommandOutput) => void): void;
  associateLexBot(
    args: AssociateLexBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLexBotCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePhoneNumberContactFlowCommand}
   */
  associatePhoneNumberContactFlow(
    args: AssociatePhoneNumberContactFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumberContactFlowCommandOutput>;
  associatePhoneNumberContactFlow(
    args: AssociatePhoneNumberContactFlowCommandInput,
    cb: (err: any, data?: AssociatePhoneNumberContactFlowCommandOutput) => void
  ): void;
  associatePhoneNumberContactFlow(
    args: AssociatePhoneNumberContactFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumberContactFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateQueueQuickConnectsCommand}
   */
  associateQueueQuickConnects(
    args: AssociateQueueQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateQueueQuickConnectsCommandOutput>;
  associateQueueQuickConnects(
    args: AssociateQueueQuickConnectsCommandInput,
    cb: (err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void
  ): void;
  associateQueueQuickConnects(
    args: AssociateQueueQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateRoutingProfileQueuesCommand}
   */
  associateRoutingProfileQueues(
    args: AssociateRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRoutingProfileQueuesCommandOutput>;
  associateRoutingProfileQueues(
    args: AssociateRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void
  ): void;
  associateRoutingProfileQueues(
    args: AssociateRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSecurityKeyCommand}
   */
  associateSecurityKey(
    args: AssociateSecurityKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSecurityKeyCommandOutput>;
  associateSecurityKey(
    args: AssociateSecurityKeyCommandInput,
    cb: (err: any, data?: AssociateSecurityKeyCommandOutput) => void
  ): void;
  associateSecurityKey(
    args: AssociateSecurityKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSecurityKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTrafficDistributionGroupUserCommand}
   */
  associateTrafficDistributionGroupUser(
    args: AssociateTrafficDistributionGroupUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrafficDistributionGroupUserCommandOutput>;
  associateTrafficDistributionGroupUser(
    args: AssociateTrafficDistributionGroupUserCommandInput,
    cb: (err: any, data?: AssociateTrafficDistributionGroupUserCommandOutput) => void
  ): void;
  associateTrafficDistributionGroupUser(
    args: AssociateTrafficDistributionGroupUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrafficDistributionGroupUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ClaimPhoneNumberCommand}
   */
  claimPhoneNumber(
    args: ClaimPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClaimPhoneNumberCommandOutput>;
  claimPhoneNumber(
    args: ClaimPhoneNumberCommandInput,
    cb: (err: any, data?: ClaimPhoneNumberCommandOutput) => void
  ): void;
  claimPhoneNumber(
    args: ClaimPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClaimPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentStatusCommand}
   */
  createAgentStatus(
    args: CreateAgentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentStatusCommandOutput>;
  createAgentStatus(
    args: CreateAgentStatusCommandInput,
    cb: (err: any, data?: CreateAgentStatusCommandOutput) => void
  ): void;
  createAgentStatus(
    args: CreateAgentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactFlowCommand}
   */
  createContactFlow(
    args: CreateContactFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactFlowCommandOutput>;
  createContactFlow(
    args: CreateContactFlowCommandInput,
    cb: (err: any, data?: CreateContactFlowCommandOutput) => void
  ): void;
  createContactFlow(
    args: CreateContactFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactFlowModuleCommand}
   */
  createContactFlowModule(
    args: CreateContactFlowModuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactFlowModuleCommandOutput>;
  createContactFlowModule(
    args: CreateContactFlowModuleCommandInput,
    cb: (err: any, data?: CreateContactFlowModuleCommandOutput) => void
  ): void;
  createContactFlowModule(
    args: CreateContactFlowModuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactFlowModuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEvaluationFormCommand}
   */
  createEvaluationForm(
    args: CreateEvaluationFormCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEvaluationFormCommandOutput>;
  createEvaluationForm(
    args: CreateEvaluationFormCommandInput,
    cb: (err: any, data?: CreateEvaluationFormCommandOutput) => void
  ): void;
  createEvaluationForm(
    args: CreateEvaluationFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEvaluationFormCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHoursOfOperationCommand}
   */
  createHoursOfOperation(
    args: CreateHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHoursOfOperationCommandOutput>;
  createHoursOfOperation(
    args: CreateHoursOfOperationCommandInput,
    cb: (err: any, data?: CreateHoursOfOperationCommandOutput) => void
  ): void;
  createHoursOfOperation(
    args: CreateHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHoursOfOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceCommand}
   */
  createInstance(
    args: CreateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceCommandOutput>;
  createInstance(args: CreateInstanceCommandInput, cb: (err: any, data?: CreateInstanceCommandOutput) => void): void;
  createInstance(
    args: CreateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationAssociationCommand}
   */
  createIntegrationAssociation(
    args: CreateIntegrationAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationAssociationCommandOutput>;
  createIntegrationAssociation(
    args: CreateIntegrationAssociationCommandInput,
    cb: (err: any, data?: CreateIntegrationAssociationCommandOutput) => void
  ): void;
  createIntegrationAssociation(
    args: CreateIntegrationAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateParticipantCommand}
   */
  createParticipant(
    args: CreateParticipantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParticipantCommandOutput>;
  createParticipant(
    args: CreateParticipantCommandInput,
    cb: (err: any, data?: CreateParticipantCommandOutput) => void
  ): void;
  createParticipant(
    args: CreateParticipantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParticipantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePromptCommand}
   */
  createPrompt(args: CreatePromptCommandInput, options?: __HttpHandlerOptions): Promise<CreatePromptCommandOutput>;
  createPrompt(args: CreatePromptCommandInput, cb: (err: any, data?: CreatePromptCommandOutput) => void): void;
  createPrompt(
    args: CreatePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
  createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
  createQueue(
    args: CreateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQuickConnectCommand}
   */
  createQuickConnect(
    args: CreateQuickConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuickConnectCommandOutput>;
  createQuickConnect(
    args: CreateQuickConnectCommandInput,
    cb: (err: any, data?: CreateQuickConnectCommandOutput) => void
  ): void;
  createQuickConnect(
    args: CreateQuickConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuickConnectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoutingProfileCommand}
   */
  createRoutingProfile(
    args: CreateRoutingProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoutingProfileCommandOutput>;
  createRoutingProfile(
    args: CreateRoutingProfileCommandInput,
    cb: (err: any, data?: CreateRoutingProfileCommandOutput) => void
  ): void;
  createRoutingProfile(
    args: CreateRoutingProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoutingProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityProfileCommand}
   */
  createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityProfileCommandOutput>;
  createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void
  ): void;
  createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTaskTemplateCommand}
   */
  createTaskTemplate(
    args: CreateTaskTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTaskTemplateCommandOutput>;
  createTaskTemplate(
    args: CreateTaskTemplateCommandInput,
    cb: (err: any, data?: CreateTaskTemplateCommandOutput) => void
  ): void;
  createTaskTemplate(
    args: CreateTaskTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficDistributionGroupCommand}
   */
  createTrafficDistributionGroup(
    args: CreateTrafficDistributionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficDistributionGroupCommandOutput>;
  createTrafficDistributionGroup(
    args: CreateTrafficDistributionGroupCommandInput,
    cb: (err: any, data?: CreateTrafficDistributionGroupCommandOutput) => void
  ): void;
  createTrafficDistributionGroup(
    args: CreateTrafficDistributionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficDistributionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUseCaseCommand}
   */
  createUseCase(args: CreateUseCaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateUseCaseCommandOutput>;
  createUseCase(args: CreateUseCaseCommandInput, cb: (err: any, data?: CreateUseCaseCommandOutput) => void): void;
  createUseCase(
    args: CreateUseCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUseCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserHierarchyGroupCommand}
   */
  createUserHierarchyGroup(
    args: CreateUserHierarchyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserHierarchyGroupCommandOutput>;
  createUserHierarchyGroup(
    args: CreateUserHierarchyGroupCommandInput,
    cb: (err: any, data?: CreateUserHierarchyGroupCommandOutput) => void
  ): void;
  createUserHierarchyGroup(
    args: CreateUserHierarchyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserHierarchyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateViewCommand}
   */
  createView(args: CreateViewCommandInput, options?: __HttpHandlerOptions): Promise<CreateViewCommandOutput>;
  createView(args: CreateViewCommandInput, cb: (err: any, data?: CreateViewCommandOutput) => void): void;
  createView(
    args: CreateViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateViewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateViewVersionCommand}
   */
  createViewVersion(
    args: CreateViewVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateViewVersionCommandOutput>;
  createViewVersion(
    args: CreateViewVersionCommandInput,
    cb: (err: any, data?: CreateViewVersionCommandOutput) => void
  ): void;
  createViewVersion(
    args: CreateViewVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateViewVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVocabularyCommand}
   */
  createVocabulary(
    args: CreateVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVocabularyCommandOutput>;
  createVocabulary(
    args: CreateVocabularyCommandInput,
    cb: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): void;
  createVocabulary(
    args: CreateVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateEvaluationFormCommand}
   */
  deactivateEvaluationForm(
    args: DeactivateEvaluationFormCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateEvaluationFormCommandOutput>;
  deactivateEvaluationForm(
    args: DeactivateEvaluationFormCommandInput,
    cb: (err: any, data?: DeactivateEvaluationFormCommandOutput) => void
  ): void;
  deactivateEvaluationForm(
    args: DeactivateEvaluationFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateEvaluationFormCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactEvaluationCommand}
   */
  deleteContactEvaluation(
    args: DeleteContactEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactEvaluationCommandOutput>;
  deleteContactEvaluation(
    args: DeleteContactEvaluationCommandInput,
    cb: (err: any, data?: DeleteContactEvaluationCommandOutput) => void
  ): void;
  deleteContactEvaluation(
    args: DeleteContactEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactFlowCommand}
   */
  deleteContactFlow(
    args: DeleteContactFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactFlowCommandOutput>;
  deleteContactFlow(
    args: DeleteContactFlowCommandInput,
    cb: (err: any, data?: DeleteContactFlowCommandOutput) => void
  ): void;
  deleteContactFlow(
    args: DeleteContactFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactFlowModuleCommand}
   */
  deleteContactFlowModule(
    args: DeleteContactFlowModuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactFlowModuleCommandOutput>;
  deleteContactFlowModule(
    args: DeleteContactFlowModuleCommandInput,
    cb: (err: any, data?: DeleteContactFlowModuleCommandOutput) => void
  ): void;
  deleteContactFlowModule(
    args: DeleteContactFlowModuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactFlowModuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEvaluationFormCommand}
   */
  deleteEvaluationForm(
    args: DeleteEvaluationFormCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEvaluationFormCommandOutput>;
  deleteEvaluationForm(
    args: DeleteEvaluationFormCommandInput,
    cb: (err: any, data?: DeleteEvaluationFormCommandOutput) => void
  ): void;
  deleteEvaluationForm(
    args: DeleteEvaluationFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEvaluationFormCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHoursOfOperationCommand}
   */
  deleteHoursOfOperation(
    args: DeleteHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHoursOfOperationCommandOutput>;
  deleteHoursOfOperation(
    args: DeleteHoursOfOperationCommandInput,
    cb: (err: any, data?: DeleteHoursOfOperationCommandOutput) => void
  ): void;
  deleteHoursOfOperation(
    args: DeleteHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHoursOfOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceCommand}
   */
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationAssociationCommand}
   */
  deleteIntegrationAssociation(
    args: DeleteIntegrationAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationAssociationCommandOutput>;
  deleteIntegrationAssociation(
    args: DeleteIntegrationAssociationCommandInput,
    cb: (err: any, data?: DeleteIntegrationAssociationCommandOutput) => void
  ): void;
  deleteIntegrationAssociation(
    args: DeleteIntegrationAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePromptCommand}
   */
  deletePrompt(args: DeletePromptCommandInput, options?: __HttpHandlerOptions): Promise<DeletePromptCommandOutput>;
  deletePrompt(args: DeletePromptCommandInput, cb: (err: any, data?: DeletePromptCommandOutput) => void): void;
  deletePrompt(
    args: DeletePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(args: DeleteQueueCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueueCommandOutput>;
  deleteQueue(args: DeleteQueueCommandInput, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
  deleteQueue(
    args: DeleteQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQuickConnectCommand}
   */
  deleteQuickConnect(
    args: DeleteQuickConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQuickConnectCommandOutput>;
  deleteQuickConnect(
    args: DeleteQuickConnectCommandInput,
    cb: (err: any, data?: DeleteQuickConnectCommandOutput) => void
  ): void;
  deleteQuickConnect(
    args: DeleteQuickConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQuickConnectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoutingProfileCommand}
   */
  deleteRoutingProfile(
    args: DeleteRoutingProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoutingProfileCommandOutput>;
  deleteRoutingProfile(
    args: DeleteRoutingProfileCommandInput,
    cb: (err: any, data?: DeleteRoutingProfileCommandOutput) => void
  ): void;
  deleteRoutingProfile(
    args: DeleteRoutingProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoutingProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityProfileCommand}
   */
  deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityProfileCommandOutput>;
  deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void
  ): void;
  deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTaskTemplateCommand}
   */
  deleteTaskTemplate(
    args: DeleteTaskTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTaskTemplateCommandOutput>;
  deleteTaskTemplate(
    args: DeleteTaskTemplateCommandInput,
    cb: (err: any, data?: DeleteTaskTemplateCommandOutput) => void
  ): void;
  deleteTaskTemplate(
    args: DeleteTaskTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficDistributionGroupCommand}
   */
  deleteTrafficDistributionGroup(
    args: DeleteTrafficDistributionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficDistributionGroupCommandOutput>;
  deleteTrafficDistributionGroup(
    args: DeleteTrafficDistributionGroupCommandInput,
    cb: (err: any, data?: DeleteTrafficDistributionGroupCommandOutput) => void
  ): void;
  deleteTrafficDistributionGroup(
    args: DeleteTrafficDistributionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficDistributionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUseCaseCommand}
   */
  deleteUseCase(args: DeleteUseCaseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUseCaseCommandOutput>;
  deleteUseCase(args: DeleteUseCaseCommandInput, cb: (err: any, data?: DeleteUseCaseCommandOutput) => void): void;
  deleteUseCase(
    args: DeleteUseCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUseCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserHierarchyGroupCommand}
   */
  deleteUserHierarchyGroup(
    args: DeleteUserHierarchyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserHierarchyGroupCommandOutput>;
  deleteUserHierarchyGroup(
    args: DeleteUserHierarchyGroupCommandInput,
    cb: (err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void
  ): void;
  deleteUserHierarchyGroup(
    args: DeleteUserHierarchyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteViewCommand}
   */
  deleteView(args: DeleteViewCommandInput, options?: __HttpHandlerOptions): Promise<DeleteViewCommandOutput>;
  deleteView(args: DeleteViewCommandInput, cb: (err: any, data?: DeleteViewCommandOutput) => void): void;
  deleteView(
    args: DeleteViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteViewVersionCommand}
   */
  deleteViewVersion(
    args: DeleteViewVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteViewVersionCommandOutput>;
  deleteViewVersion(
    args: DeleteViewVersionCommandInput,
    cb: (err: any, data?: DeleteViewVersionCommandOutput) => void
  ): void;
  deleteViewVersion(
    args: DeleteViewVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteViewVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVocabularyCommand}
   */
  deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVocabularyCommandOutput>;
  deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    cb: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): void;
  deleteVocabulary(
    args: DeleteVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgentStatusCommand}
   */
  describeAgentStatus(
    args: DescribeAgentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentStatusCommandOutput>;
  describeAgentStatus(
    args: DescribeAgentStatusCommandInput,
    cb: (err: any, data?: DescribeAgentStatusCommandOutput) => void
  ): void;
  describeAgentStatus(
    args: DescribeAgentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContactCommand}
   */
  describeContact(
    args: DescribeContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactCommandOutput>;
  describeContact(args: DescribeContactCommandInput, cb: (err: any, data?: DescribeContactCommandOutput) => void): void;
  describeContact(
    args: DescribeContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContactEvaluationCommand}
   */
  describeContactEvaluation(
    args: DescribeContactEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactEvaluationCommandOutput>;
  describeContactEvaluation(
    args: DescribeContactEvaluationCommandInput,
    cb: (err: any, data?: DescribeContactEvaluationCommandOutput) => void
  ): void;
  describeContactEvaluation(
    args: DescribeContactEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContactFlowCommand}
   */
  describeContactFlow(
    args: DescribeContactFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactFlowCommandOutput>;
  describeContactFlow(
    args: DescribeContactFlowCommandInput,
    cb: (err: any, data?: DescribeContactFlowCommandOutput) => void
  ): void;
  describeContactFlow(
    args: DescribeContactFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContactFlowModuleCommand}
   */
  describeContactFlowModule(
    args: DescribeContactFlowModuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactFlowModuleCommandOutput>;
  describeContactFlowModule(
    args: DescribeContactFlowModuleCommandInput,
    cb: (err: any, data?: DescribeContactFlowModuleCommandOutput) => void
  ): void;
  describeContactFlowModule(
    args: DescribeContactFlowModuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactFlowModuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEvaluationFormCommand}
   */
  describeEvaluationForm(
    args: DescribeEvaluationFormCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEvaluationFormCommandOutput>;
  describeEvaluationForm(
    args: DescribeEvaluationFormCommandInput,
    cb: (err: any, data?: DescribeEvaluationFormCommandOutput) => void
  ): void;
  describeEvaluationForm(
    args: DescribeEvaluationFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEvaluationFormCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHoursOfOperationCommand}
   */
  describeHoursOfOperation(
    args: DescribeHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHoursOfOperationCommandOutput>;
  describeHoursOfOperation(
    args: DescribeHoursOfOperationCommandInput,
    cb: (err: any, data?: DescribeHoursOfOperationCommandOutput) => void
  ): void;
  describeHoursOfOperation(
    args: DescribeHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHoursOfOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceCommand}
   */
  describeInstance(
    args: DescribeInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceCommandOutput>;
  describeInstance(
    args: DescribeInstanceCommandInput,
    cb: (err: any, data?: DescribeInstanceCommandOutput) => void
  ): void;
  describeInstance(
    args: DescribeInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceAttributeCommand}
   */
  describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAttributeCommandOutput>;
  describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;
  describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceStorageConfigCommand}
   */
  describeInstanceStorageConfig(
    args: DescribeInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceStorageConfigCommandOutput>;
  describeInstanceStorageConfig(
    args: DescribeInstanceStorageConfigCommandInput,
    cb: (err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void
  ): void;
  describeInstanceStorageConfig(
    args: DescribeInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePhoneNumberCommand}
   */
  describePhoneNumber(
    args: DescribePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePhoneNumberCommandOutput>;
  describePhoneNumber(
    args: DescribePhoneNumberCommandInput,
    cb: (err: any, data?: DescribePhoneNumberCommandOutput) => void
  ): void;
  describePhoneNumber(
    args: DescribePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePromptCommand}
   */
  describePrompt(
    args: DescribePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePromptCommandOutput>;
  describePrompt(args: DescribePromptCommandInput, cb: (err: any, data?: DescribePromptCommandOutput) => void): void;
  describePrompt(
    args: DescribePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueueCommand}
   */
  describeQueue(args: DescribeQueueCommandInput, options?: __HttpHandlerOptions): Promise<DescribeQueueCommandOutput>;
  describeQueue(args: DescribeQueueCommandInput, cb: (err: any, data?: DescribeQueueCommandOutput) => void): void;
  describeQueue(
    args: DescribeQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuickConnectCommand}
   */
  describeQuickConnect(
    args: DescribeQuickConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuickConnectCommandOutput>;
  describeQuickConnect(
    args: DescribeQuickConnectCommandInput,
    cb: (err: any, data?: DescribeQuickConnectCommandOutput) => void
  ): void;
  describeQuickConnect(
    args: DescribeQuickConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuickConnectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRoutingProfileCommand}
   */
  describeRoutingProfile(
    args: DescribeRoutingProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRoutingProfileCommandOutput>;
  describeRoutingProfile(
    args: DescribeRoutingProfileCommandInput,
    cb: (err: any, data?: DescribeRoutingProfileCommandOutput) => void
  ): void;
  describeRoutingProfile(
    args: DescribeRoutingProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRoutingProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(args: DescribeRuleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRuleCommandOutput>;
  describeRule(args: DescribeRuleCommandInput, cb: (err: any, data?: DescribeRuleCommandOutput) => void): void;
  describeRule(
    args: DescribeRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityProfileCommand}
   */
  describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityProfileCommandOutput>;
  describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void
  ): void;
  describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrafficDistributionGroupCommand}
   */
  describeTrafficDistributionGroup(
    args: DescribeTrafficDistributionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficDistributionGroupCommandOutput>;
  describeTrafficDistributionGroup(
    args: DescribeTrafficDistributionGroupCommandInput,
    cb: (err: any, data?: DescribeTrafficDistributionGroupCommandOutput) => void
  ): void;
  describeTrafficDistributionGroup(
    args: DescribeTrafficDistributionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficDistributionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
  describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserHierarchyGroupCommand}
   */
  describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserHierarchyGroupCommandOutput>;
  describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupCommandInput,
    cb: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void
  ): void;
  describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserHierarchyStructureCommand}
   */
  describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserHierarchyStructureCommandOutput>;
  describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureCommandInput,
    cb: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void
  ): void;
  describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeViewCommand}
   */
  describeView(args: DescribeViewCommandInput, options?: __HttpHandlerOptions): Promise<DescribeViewCommandOutput>;
  describeView(args: DescribeViewCommandInput, cb: (err: any, data?: DescribeViewCommandOutput) => void): void;
  describeView(
    args: DescribeViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVocabularyCommand}
   */
  describeVocabulary(
    args: DescribeVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVocabularyCommandOutput>;
  describeVocabulary(
    args: DescribeVocabularyCommandInput,
    cb: (err: any, data?: DescribeVocabularyCommandOutput) => void
  ): void;
  describeVocabulary(
    args: DescribeVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVocabularyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApprovedOriginCommand}
   */
  disassociateApprovedOrigin(
    args: DisassociateApprovedOriginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApprovedOriginCommandOutput>;
  disassociateApprovedOrigin(
    args: DisassociateApprovedOriginCommandInput,
    cb: (err: any, data?: DisassociateApprovedOriginCommandOutput) => void
  ): void;
  disassociateApprovedOrigin(
    args: DisassociateApprovedOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApprovedOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateBotCommand}
   */
  disassociateBot(
    args: DisassociateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBotCommandOutput>;
  disassociateBot(args: DisassociateBotCommandInput, cb: (err: any, data?: DisassociateBotCommandOutput) => void): void;
  disassociateBot(
    args: DisassociateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateInstanceStorageConfigCommand}
   */
  disassociateInstanceStorageConfig(
    args: DisassociateInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateInstanceStorageConfigCommandOutput>;
  disassociateInstanceStorageConfig(
    args: DisassociateInstanceStorageConfigCommandInput,
    cb: (err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void
  ): void;
  disassociateInstanceStorageConfig(
    args: DisassociateInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLambdaFunctionCommand}
   */
  disassociateLambdaFunction(
    args: DisassociateLambdaFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLambdaFunctionCommandOutput>;
  disassociateLambdaFunction(
    args: DisassociateLambdaFunctionCommandInput,
    cb: (err: any, data?: DisassociateLambdaFunctionCommandOutput) => void
  ): void;
  disassociateLambdaFunction(
    args: DisassociateLambdaFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLambdaFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLexBotCommand}
   */
  disassociateLexBot(
    args: DisassociateLexBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLexBotCommandOutput>;
  disassociateLexBot(
    args: DisassociateLexBotCommandInput,
    cb: (err: any, data?: DisassociateLexBotCommandOutput) => void
  ): void;
  disassociateLexBot(
    args: DisassociateLexBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLexBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePhoneNumberContactFlowCommand}
   */
  disassociatePhoneNumberContactFlow(
    args: DisassociatePhoneNumberContactFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumberContactFlowCommandOutput>;
  disassociatePhoneNumberContactFlow(
    args: DisassociatePhoneNumberContactFlowCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumberContactFlowCommandOutput) => void
  ): void;
  disassociatePhoneNumberContactFlow(
    args: DisassociatePhoneNumberContactFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumberContactFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateQueueQuickConnectsCommand}
   */
  disassociateQueueQuickConnects(
    args: DisassociateQueueQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateQueueQuickConnectsCommandOutput>;
  disassociateQueueQuickConnects(
    args: DisassociateQueueQuickConnectsCommandInput,
    cb: (err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void
  ): void;
  disassociateQueueQuickConnects(
    args: DisassociateQueueQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateRoutingProfileQueuesCommand}
   */
  disassociateRoutingProfileQueues(
    args: DisassociateRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRoutingProfileQueuesCommandOutput>;
  disassociateRoutingProfileQueues(
    args: DisassociateRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void
  ): void;
  disassociateRoutingProfileQueues(
    args: DisassociateRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSecurityKeyCommand}
   */
  disassociateSecurityKey(
    args: DisassociateSecurityKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSecurityKeyCommandOutput>;
  disassociateSecurityKey(
    args: DisassociateSecurityKeyCommandInput,
    cb: (err: any, data?: DisassociateSecurityKeyCommandOutput) => void
  ): void;
  disassociateSecurityKey(
    args: DisassociateSecurityKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSecurityKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTrafficDistributionGroupUserCommand}
   */
  disassociateTrafficDistributionGroupUser(
    args: DisassociateTrafficDistributionGroupUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrafficDistributionGroupUserCommandOutput>;
  disassociateTrafficDistributionGroupUser(
    args: DisassociateTrafficDistributionGroupUserCommandInput,
    cb: (err: any, data?: DisassociateTrafficDistributionGroupUserCommandOutput) => void
  ): void;
  disassociateTrafficDistributionGroupUser(
    args: DisassociateTrafficDistributionGroupUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrafficDistributionGroupUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DismissUserContactCommand}
   */
  dismissUserContact(
    args: DismissUserContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DismissUserContactCommandOutput>;
  dismissUserContact(
    args: DismissUserContactCommandInput,
    cb: (err: any, data?: DismissUserContactCommandOutput) => void
  ): void;
  dismissUserContact(
    args: DismissUserContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DismissUserContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactAttributesCommand}
   */
  getContactAttributes(
    args: GetContactAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactAttributesCommandOutput>;
  getContactAttributes(
    args: GetContactAttributesCommandInput,
    cb: (err: any, data?: GetContactAttributesCommandOutput) => void
  ): void;
  getContactAttributes(
    args: GetContactAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCurrentMetricDataCommand}
   */
  getCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCurrentMetricDataCommandOutput>;
  getCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    cb: (err: any, data?: GetCurrentMetricDataCommandOutput) => void
  ): void;
  getCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCurrentUserDataCommand}
   */
  getCurrentUserData(
    args: GetCurrentUserDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCurrentUserDataCommandOutput>;
  getCurrentUserData(
    args: GetCurrentUserDataCommandInput,
    cb: (err: any, data?: GetCurrentUserDataCommandOutput) => void
  ): void;
  getCurrentUserData(
    args: GetCurrentUserDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentUserDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFederationTokenCommand}
   */
  getFederationToken(
    args: GetFederationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFederationTokenCommandOutput>;
  getFederationToken(
    args: GetFederationTokenCommandInput,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;
  getFederationToken(
    args: GetFederationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricDataCommand}
   */
  getMetricData(args: GetMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetMetricDataCommandOutput>;
  getMetricData(args: GetMetricDataCommandInput, cb: (err: any, data?: GetMetricDataCommandOutput) => void): void;
  getMetricData(
    args: GetMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricDataV2Command}
   */
  getMetricDataV2(
    args: GetMetricDataV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricDataV2CommandOutput>;
  getMetricDataV2(args: GetMetricDataV2CommandInput, cb: (err: any, data?: GetMetricDataV2CommandOutput) => void): void;
  getMetricDataV2(
    args: GetMetricDataV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricDataV2CommandOutput) => void
  ): void;

  /**
   * @see {@link GetPromptFileCommand}
   */
  getPromptFile(args: GetPromptFileCommandInput, options?: __HttpHandlerOptions): Promise<GetPromptFileCommandOutput>;
  getPromptFile(args: GetPromptFileCommandInput, cb: (err: any, data?: GetPromptFileCommandOutput) => void): void;
  getPromptFile(
    args: GetPromptFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPromptFileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaskTemplateCommand}
   */
  getTaskTemplate(
    args: GetTaskTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaskTemplateCommandOutput>;
  getTaskTemplate(args: GetTaskTemplateCommandInput, cb: (err: any, data?: GetTaskTemplateCommandOutput) => void): void;
  getTaskTemplate(
    args: GetTaskTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaskTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficDistributionCommand}
   */
  getTrafficDistribution(
    args: GetTrafficDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficDistributionCommandOutput>;
  getTrafficDistribution(
    args: GetTrafficDistributionCommandInput,
    cb: (err: any, data?: GetTrafficDistributionCommandOutput) => void
  ): void;
  getTrafficDistribution(
    args: GetTrafficDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentStatusesCommand}
   */
  listAgentStatuses(
    args: ListAgentStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentStatusesCommandOutput>;
  listAgentStatuses(
    args: ListAgentStatusesCommandInput,
    cb: (err: any, data?: ListAgentStatusesCommandOutput) => void
  ): void;
  listAgentStatuses(
    args: ListAgentStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApprovedOriginsCommand}
   */
  listApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApprovedOriginsCommandOutput>;
  listApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    cb: (err: any, data?: ListApprovedOriginsCommandOutput) => void
  ): void;
  listApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApprovedOriginsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotsCommand}
   */
  listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
  listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
  listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactEvaluationsCommand}
   */
  listContactEvaluations(
    args: ListContactEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactEvaluationsCommandOutput>;
  listContactEvaluations(
    args: ListContactEvaluationsCommandInput,
    cb: (err: any, data?: ListContactEvaluationsCommandOutput) => void
  ): void;
  listContactEvaluations(
    args: ListContactEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactFlowModulesCommand}
   */
  listContactFlowModules(
    args: ListContactFlowModulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactFlowModulesCommandOutput>;
  listContactFlowModules(
    args: ListContactFlowModulesCommandInput,
    cb: (err: any, data?: ListContactFlowModulesCommandOutput) => void
  ): void;
  listContactFlowModules(
    args: ListContactFlowModulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactFlowModulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactFlowsCommand}
   */
  listContactFlows(
    args: ListContactFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactFlowsCommandOutput>;
  listContactFlows(
    args: ListContactFlowsCommandInput,
    cb: (err: any, data?: ListContactFlowsCommandOutput) => void
  ): void;
  listContactFlows(
    args: ListContactFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactReferencesCommand}
   */
  listContactReferences(
    args: ListContactReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactReferencesCommandOutput>;
  listContactReferences(
    args: ListContactReferencesCommandInput,
    cb: (err: any, data?: ListContactReferencesCommandOutput) => void
  ): void;
  listContactReferences(
    args: ListContactReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactReferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDefaultVocabulariesCommand}
   */
  listDefaultVocabularies(
    args: ListDefaultVocabulariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDefaultVocabulariesCommandOutput>;
  listDefaultVocabularies(
    args: ListDefaultVocabulariesCommandInput,
    cb: (err: any, data?: ListDefaultVocabulariesCommandOutput) => void
  ): void;
  listDefaultVocabularies(
    args: ListDefaultVocabulariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDefaultVocabulariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEvaluationFormsCommand}
   */
  listEvaluationForms(
    args: ListEvaluationFormsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEvaluationFormsCommandOutput>;
  listEvaluationForms(
    args: ListEvaluationFormsCommandInput,
    cb: (err: any, data?: ListEvaluationFormsCommandOutput) => void
  ): void;
  listEvaluationForms(
    args: ListEvaluationFormsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEvaluationFormsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEvaluationFormVersionsCommand}
   */
  listEvaluationFormVersions(
    args: ListEvaluationFormVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEvaluationFormVersionsCommandOutput>;
  listEvaluationFormVersions(
    args: ListEvaluationFormVersionsCommandInput,
    cb: (err: any, data?: ListEvaluationFormVersionsCommandOutput) => void
  ): void;
  listEvaluationFormVersions(
    args: ListEvaluationFormVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEvaluationFormVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHoursOfOperationsCommand}
   */
  listHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHoursOfOperationsCommandOutput>;
  listHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    cb: (err: any, data?: ListHoursOfOperationsCommandOutput) => void
  ): void;
  listHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHoursOfOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceAttributesCommand}
   */
  listInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceAttributesCommandOutput>;
  listInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    cb: (err: any, data?: ListInstanceAttributesCommandOutput) => void
  ): void;
  listInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstancesCommand}
   */
  listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceStorageConfigsCommand}
   */
  listInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceStorageConfigsCommandOutput>;
  listInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    cb: (err: any, data?: ListInstanceStorageConfigsCommandOutput) => void
  ): void;
  listInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceStorageConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationAssociationsCommand}
   */
  listIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationAssociationsCommandOutput>;
  listIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    cb: (err: any, data?: ListIntegrationAssociationsCommandOutput) => void
  ): void;
  listIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLambdaFunctionsCommand}
   */
  listLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLambdaFunctionsCommandOutput>;
  listLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    cb: (err: any, data?: ListLambdaFunctionsCommandOutput) => void
  ): void;
  listLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLambdaFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLexBotsCommand}
   */
  listLexBots(args: ListLexBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListLexBotsCommandOutput>;
  listLexBots(args: ListLexBotsCommandInput, cb: (err: any, data?: ListLexBotsCommandOutput) => void): void;
  listLexBots(
    args: ListLexBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLexBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumbersCommand}
   */
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumbersV2Command}
   */
  listPhoneNumbersV2(
    args: ListPhoneNumbersV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersV2CommandOutput>;
  listPhoneNumbersV2(
    args: ListPhoneNumbersV2CommandInput,
    cb: (err: any, data?: ListPhoneNumbersV2CommandOutput) => void
  ): void;
  listPhoneNumbersV2(
    args: ListPhoneNumbersV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListPromptsCommand}
   */
  listPrompts(args: ListPromptsCommandInput, options?: __HttpHandlerOptions): Promise<ListPromptsCommandOutput>;
  listPrompts(args: ListPromptsCommandInput, cb: (err: any, data?: ListPromptsCommandOutput) => void): void;
  listPrompts(
    args: ListPromptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPromptsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueQuickConnectsCommand}
   */
  listQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueueQuickConnectsCommandOutput>;
  listQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    cb: (err: any, data?: ListQueueQuickConnectsCommandOutput) => void
  ): void;
  listQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueQuickConnectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
  listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
  listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQuickConnectsCommand}
   */
  listQuickConnects(
    args: ListQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuickConnectsCommandOutput>;
  listQuickConnects(
    args: ListQuickConnectsCommandInput,
    cb: (err: any, data?: ListQuickConnectsCommandOutput) => void
  ): void;
  listQuickConnects(
    args: ListQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuickConnectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutingProfileQueuesCommand}
   */
  listRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingProfileQueuesCommandOutput>;
  listRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: ListRoutingProfileQueuesCommandOutput) => void
  ): void;
  listRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingProfileQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutingProfilesCommand}
   */
  listRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingProfilesCommandOutput>;
  listRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    cb: (err: any, data?: ListRoutingProfilesCommandOutput) => void
  ): void;
  listRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityKeysCommand}
   */
  listSecurityKeys(
    args: ListSecurityKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityKeysCommandOutput>;
  listSecurityKeys(
    args: ListSecurityKeysCommandInput,
    cb: (err: any, data?: ListSecurityKeysCommandOutput) => void
  ): void;
  listSecurityKeys(
    args: ListSecurityKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityProfileApplicationsCommand}
   */
  listSecurityProfileApplications(
    args: ListSecurityProfileApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfileApplicationsCommandOutput>;
  listSecurityProfileApplications(
    args: ListSecurityProfileApplicationsCommandInput,
    cb: (err: any, data?: ListSecurityProfileApplicationsCommandOutput) => void
  ): void;
  listSecurityProfileApplications(
    args: ListSecurityProfileApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfileApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityProfilePermissionsCommand}
   */
  listSecurityProfilePermissions(
    args: ListSecurityProfilePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfilePermissionsCommandOutput>;
  listSecurityProfilePermissions(
    args: ListSecurityProfilePermissionsCommandInput,
    cb: (err: any, data?: ListSecurityProfilePermissionsCommandOutput) => void
  ): void;
  listSecurityProfilePermissions(
    args: ListSecurityProfilePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfilePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityProfilesCommand}
   */
  listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfilesCommandOutput>;
  listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;
  listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTaskTemplatesCommand}
   */
  listTaskTemplates(
    args: ListTaskTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskTemplatesCommandOutput>;
  listTaskTemplates(
    args: ListTaskTemplatesCommandInput,
    cb: (err: any, data?: ListTaskTemplatesCommandOutput) => void
  ): void;
  listTaskTemplates(
    args: ListTaskTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficDistributionGroupsCommand}
   */
  listTrafficDistributionGroups(
    args: ListTrafficDistributionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficDistributionGroupsCommandOutput>;
  listTrafficDistributionGroups(
    args: ListTrafficDistributionGroupsCommandInput,
    cb: (err: any, data?: ListTrafficDistributionGroupsCommandOutput) => void
  ): void;
  listTrafficDistributionGroups(
    args: ListTrafficDistributionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficDistributionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficDistributionGroupUsersCommand}
   */
  listTrafficDistributionGroupUsers(
    args: ListTrafficDistributionGroupUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficDistributionGroupUsersCommandOutput>;
  listTrafficDistributionGroupUsers(
    args: ListTrafficDistributionGroupUsersCommandInput,
    cb: (err: any, data?: ListTrafficDistributionGroupUsersCommandOutput) => void
  ): void;
  listTrafficDistributionGroupUsers(
    args: ListTrafficDistributionGroupUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficDistributionGroupUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUseCasesCommand}
   */
  listUseCases(args: ListUseCasesCommandInput, options?: __HttpHandlerOptions): Promise<ListUseCasesCommandOutput>;
  listUseCases(args: ListUseCasesCommandInput, cb: (err: any, data?: ListUseCasesCommandOutput) => void): void;
  listUseCases(
    args: ListUseCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUseCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserHierarchyGroupsCommand}
   */
  listUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserHierarchyGroupsCommandOutput>;
  listUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    cb: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void
  ): void;
  listUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListViewsCommand}
   */
  listViews(args: ListViewsCommandInput, options?: __HttpHandlerOptions): Promise<ListViewsCommandOutput>;
  listViews(args: ListViewsCommandInput, cb: (err: any, data?: ListViewsCommandOutput) => void): void;
  listViews(
    args: ListViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListViewVersionsCommand}
   */
  listViewVersions(
    args: ListViewVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListViewVersionsCommandOutput>;
  listViewVersions(
    args: ListViewVersionsCommandInput,
    cb: (err: any, data?: ListViewVersionsCommandOutput) => void
  ): void;
  listViewVersions(
    args: ListViewVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListViewVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link MonitorContactCommand}
   */
  monitorContact(
    args: MonitorContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MonitorContactCommandOutput>;
  monitorContact(args: MonitorContactCommandInput, cb: (err: any, data?: MonitorContactCommandOutput) => void): void;
  monitorContact(
    args: MonitorContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MonitorContactCommandOutput) => void
  ): void;

  /**
   * @see {@link PutUserStatusCommand}
   */
  putUserStatus(args: PutUserStatusCommandInput, options?: __HttpHandlerOptions): Promise<PutUserStatusCommandOutput>;
  putUserStatus(args: PutUserStatusCommandInput, cb: (err: any, data?: PutUserStatusCommandOutput) => void): void;
  putUserStatus(
    args: PutUserStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUserStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ReleasePhoneNumberCommand}
   */
  releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleasePhoneNumberCommandOutput>;
  releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    cb: (err: any, data?: ReleasePhoneNumberCommandOutput) => void
  ): void;
  releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleasePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplicateInstanceCommand}
   */
  replicateInstance(
    args: ReplicateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplicateInstanceCommandOutput>;
  replicateInstance(
    args: ReplicateInstanceCommandInput,
    cb: (err: any, data?: ReplicateInstanceCommandOutput) => void
  ): void;
  replicateInstance(
    args: ReplicateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplicateInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeContactRecordingCommand}
   */
  resumeContactRecording(
    args: ResumeContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeContactRecordingCommandOutput>;
  resumeContactRecording(
    args: ResumeContactRecordingCommandInput,
    cb: (err: any, data?: ResumeContactRecordingCommandOutput) => void
  ): void;
  resumeContactRecording(
    args: ResumeContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeContactRecordingCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAvailablePhoneNumbersCommand}
   */
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchHoursOfOperationsCommand}
   */
  searchHoursOfOperations(
    args: SearchHoursOfOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchHoursOfOperationsCommandOutput>;
  searchHoursOfOperations(
    args: SearchHoursOfOperationsCommandInput,
    cb: (err: any, data?: SearchHoursOfOperationsCommandOutput) => void
  ): void;
  searchHoursOfOperations(
    args: SearchHoursOfOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchHoursOfOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPromptsCommand}
   */
  searchPrompts(args: SearchPromptsCommandInput, options?: __HttpHandlerOptions): Promise<SearchPromptsCommandOutput>;
  searchPrompts(args: SearchPromptsCommandInput, cb: (err: any, data?: SearchPromptsCommandOutput) => void): void;
  searchPrompts(
    args: SearchPromptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPromptsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchQueuesCommand}
   */
  searchQueues(args: SearchQueuesCommandInput, options?: __HttpHandlerOptions): Promise<SearchQueuesCommandOutput>;
  searchQueues(args: SearchQueuesCommandInput, cb: (err: any, data?: SearchQueuesCommandOutput) => void): void;
  searchQueues(
    args: SearchQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchQuickConnectsCommand}
   */
  searchQuickConnects(
    args: SearchQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchQuickConnectsCommandOutput>;
  searchQuickConnects(
    args: SearchQuickConnectsCommandInput,
    cb: (err: any, data?: SearchQuickConnectsCommandOutput) => void
  ): void;
  searchQuickConnects(
    args: SearchQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchQuickConnectsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchResourceTagsCommand}
   */
  searchResourceTags(
    args: SearchResourceTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourceTagsCommandOutput>;
  searchResourceTags(
    args: SearchResourceTagsCommandInput,
    cb: (err: any, data?: SearchResourceTagsCommandOutput) => void
  ): void;
  searchResourceTags(
    args: SearchResourceTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourceTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchRoutingProfilesCommand}
   */
  searchRoutingProfiles(
    args: SearchRoutingProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchRoutingProfilesCommandOutput>;
  searchRoutingProfiles(
    args: SearchRoutingProfilesCommandInput,
    cb: (err: any, data?: SearchRoutingProfilesCommandOutput) => void
  ): void;
  searchRoutingProfiles(
    args: SearchRoutingProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRoutingProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSecurityProfilesCommand}
   */
  searchSecurityProfiles(
    args: SearchSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSecurityProfilesCommandOutput>;
  searchSecurityProfiles(
    args: SearchSecurityProfilesCommandInput,
    cb: (err: any, data?: SearchSecurityProfilesCommandOutput) => void
  ): void;
  searchSecurityProfiles(
    args: SearchSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSecurityProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersCommand}
   */
  searchUsers(args: SearchUsersCommandInput, options?: __HttpHandlerOptions): Promise<SearchUsersCommandOutput>;
  searchUsers(args: SearchUsersCommandInput, cb: (err: any, data?: SearchUsersCommandOutput) => void): void;
  searchUsers(
    args: SearchUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchVocabulariesCommand}
   */
  searchVocabularies(
    args: SearchVocabulariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchVocabulariesCommandOutput>;
  searchVocabularies(
    args: SearchVocabulariesCommandInput,
    cb: (err: any, data?: SearchVocabulariesCommandOutput) => void
  ): void;
  searchVocabularies(
    args: SearchVocabulariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchVocabulariesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartChatContactCommand}
   */
  startChatContact(
    args: StartChatContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartChatContactCommandOutput>;
  startChatContact(
    args: StartChatContactCommandInput,
    cb: (err: any, data?: StartChatContactCommandOutput) => void
  ): void;
  startChatContact(
    args: StartChatContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChatContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContactEvaluationCommand}
   */
  startContactEvaluation(
    args: StartContactEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContactEvaluationCommandOutput>;
  startContactEvaluation(
    args: StartContactEvaluationCommandInput,
    cb: (err: any, data?: StartContactEvaluationCommandOutput) => void
  ): void;
  startContactEvaluation(
    args: StartContactEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContactEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContactRecordingCommand}
   */
  startContactRecording(
    args: StartContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContactRecordingCommandOutput>;
  startContactRecording(
    args: StartContactRecordingCommandInput,
    cb: (err: any, data?: StartContactRecordingCommandOutput) => void
  ): void;
  startContactRecording(
    args: StartContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContactRecordingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContactStreamingCommand}
   */
  startContactStreaming(
    args: StartContactStreamingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContactStreamingCommandOutput>;
  startContactStreaming(
    args: StartContactStreamingCommandInput,
    cb: (err: any, data?: StartContactStreamingCommandOutput) => void
  ): void;
  startContactStreaming(
    args: StartContactStreamingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContactStreamingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOutboundVoiceContactCommand}
   */
  startOutboundVoiceContact(
    args: StartOutboundVoiceContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOutboundVoiceContactCommandOutput>;
  startOutboundVoiceContact(
    args: StartOutboundVoiceContactCommandInput,
    cb: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void
  ): void;
  startOutboundVoiceContact(
    args: StartOutboundVoiceContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTaskContactCommand}
   */
  startTaskContact(
    args: StartTaskContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTaskContactCommandOutput>;
  startTaskContact(
    args: StartTaskContactCommandInput,
    cb: (err: any, data?: StartTaskContactCommandOutput) => void
  ): void;
  startTaskContact(
    args: StartTaskContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTaskContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StopContactCommand}
   */
  stopContact(args: StopContactCommandInput, options?: __HttpHandlerOptions): Promise<StopContactCommandOutput>;
  stopContact(args: StopContactCommandInput, cb: (err: any, data?: StopContactCommandOutput) => void): void;
  stopContact(
    args: StopContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StopContactRecordingCommand}
   */
  stopContactRecording(
    args: StopContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContactRecordingCommandOutput>;
  stopContactRecording(
    args: StopContactRecordingCommandInput,
    cb: (err: any, data?: StopContactRecordingCommandOutput) => void
  ): void;
  stopContactRecording(
    args: StopContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactRecordingCommandOutput) => void
  ): void;

  /**
   * @see {@link StopContactStreamingCommand}
   */
  stopContactStreaming(
    args: StopContactStreamingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContactStreamingCommandOutput>;
  stopContactStreaming(
    args: StopContactStreamingCommandInput,
    cb: (err: any, data?: StopContactStreamingCommandOutput) => void
  ): void;
  stopContactStreaming(
    args: StopContactStreamingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactStreamingCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitContactEvaluationCommand}
   */
  submitContactEvaluation(
    args: SubmitContactEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitContactEvaluationCommandOutput>;
  submitContactEvaluation(
    args: SubmitContactEvaluationCommandInput,
    cb: (err: any, data?: SubmitContactEvaluationCommandOutput) => void
  ): void;
  submitContactEvaluation(
    args: SubmitContactEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitContactEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link SuspendContactRecordingCommand}
   */
  suspendContactRecording(
    args: SuspendContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SuspendContactRecordingCommandOutput>;
  suspendContactRecording(
    args: SuspendContactRecordingCommandInput,
    cb: (err: any, data?: SuspendContactRecordingCommandOutput) => void
  ): void;
  suspendContactRecording(
    args: SuspendContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuspendContactRecordingCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TransferContactCommand}
   */
  transferContact(
    args: TransferContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransferContactCommandOutput>;
  transferContact(args: TransferContactCommandInput, cb: (err: any, data?: TransferContactCommandOutput) => void): void;
  transferContact(
    args: TransferContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransferContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentStatusCommand}
   */
  updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentStatusCommandOutput>;
  updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    cb: (err: any, data?: UpdateAgentStatusCommandOutput) => void
  ): void;
  updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactCommand}
   */
  updateContact(args: UpdateContactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactCommandOutput>;
  updateContact(args: UpdateContactCommandInput, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
  updateContact(
    args: UpdateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactAttributesCommand}
   */
  updateContactAttributes(
    args: UpdateContactAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactAttributesCommandOutput>;
  updateContactAttributes(
    args: UpdateContactAttributesCommandInput,
    cb: (err: any, data?: UpdateContactAttributesCommandOutput) => void
  ): void;
  updateContactAttributes(
    args: UpdateContactAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactEvaluationCommand}
   */
  updateContactEvaluation(
    args: UpdateContactEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactEvaluationCommandOutput>;
  updateContactEvaluation(
    args: UpdateContactEvaluationCommandInput,
    cb: (err: any, data?: UpdateContactEvaluationCommandOutput) => void
  ): void;
  updateContactEvaluation(
    args: UpdateContactEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactFlowContentCommand}
   */
  updateContactFlowContent(
    args: UpdateContactFlowContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowContentCommandOutput>;
  updateContactFlowContent(
    args: UpdateContactFlowContentCommandInput,
    cb: (err: any, data?: UpdateContactFlowContentCommandOutput) => void
  ): void;
  updateContactFlowContent(
    args: UpdateContactFlowContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactFlowMetadataCommand}
   */
  updateContactFlowMetadata(
    args: UpdateContactFlowMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowMetadataCommandOutput>;
  updateContactFlowMetadata(
    args: UpdateContactFlowMetadataCommandInput,
    cb: (err: any, data?: UpdateContactFlowMetadataCommandOutput) => void
  ): void;
  updateContactFlowMetadata(
    args: UpdateContactFlowMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactFlowModuleContentCommand}
   */
  updateContactFlowModuleContent(
    args: UpdateContactFlowModuleContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowModuleContentCommandOutput>;
  updateContactFlowModuleContent(
    args: UpdateContactFlowModuleContentCommandInput,
    cb: (err: any, data?: UpdateContactFlowModuleContentCommandOutput) => void
  ): void;
  updateContactFlowModuleContent(
    args: UpdateContactFlowModuleContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowModuleContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactFlowModuleMetadataCommand}
   */
  updateContactFlowModuleMetadata(
    args: UpdateContactFlowModuleMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowModuleMetadataCommandOutput>;
  updateContactFlowModuleMetadata(
    args: UpdateContactFlowModuleMetadataCommandInput,
    cb: (err: any, data?: UpdateContactFlowModuleMetadataCommandOutput) => void
  ): void;
  updateContactFlowModuleMetadata(
    args: UpdateContactFlowModuleMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowModuleMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactFlowNameCommand}
   */
  updateContactFlowName(
    args: UpdateContactFlowNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowNameCommandOutput>;
  updateContactFlowName(
    args: UpdateContactFlowNameCommandInput,
    cb: (err: any, data?: UpdateContactFlowNameCommandOutput) => void
  ): void;
  updateContactFlowName(
    args: UpdateContactFlowNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactScheduleCommand}
   */
  updateContactSchedule(
    args: UpdateContactScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactScheduleCommandOutput>;
  updateContactSchedule(
    args: UpdateContactScheduleCommandInput,
    cb: (err: any, data?: UpdateContactScheduleCommandOutput) => void
  ): void;
  updateContactSchedule(
    args: UpdateContactScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEvaluationFormCommand}
   */
  updateEvaluationForm(
    args: UpdateEvaluationFormCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEvaluationFormCommandOutput>;
  updateEvaluationForm(
    args: UpdateEvaluationFormCommandInput,
    cb: (err: any, data?: UpdateEvaluationFormCommandOutput) => void
  ): void;
  updateEvaluationForm(
    args: UpdateEvaluationFormCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEvaluationFormCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHoursOfOperationCommand}
   */
  updateHoursOfOperation(
    args: UpdateHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHoursOfOperationCommandOutput>;
  updateHoursOfOperation(
    args: UpdateHoursOfOperationCommandInput,
    cb: (err: any, data?: UpdateHoursOfOperationCommandOutput) => void
  ): void;
  updateHoursOfOperation(
    args: UpdateHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHoursOfOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceAttributeCommand}
   */
  updateInstanceAttribute(
    args: UpdateInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceAttributeCommandOutput>;
  updateInstanceAttribute(
    args: UpdateInstanceAttributeCommandInput,
    cb: (err: any, data?: UpdateInstanceAttributeCommandOutput) => void
  ): void;
  updateInstanceAttribute(
    args: UpdateInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceStorageConfigCommand}
   */
  updateInstanceStorageConfig(
    args: UpdateInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceStorageConfigCommandOutput>;
  updateInstanceStorageConfig(
    args: UpdateInstanceStorageConfigCommandInput,
    cb: (err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void
  ): void;
  updateInstanceStorageConfig(
    args: UpdateInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateParticipantRoleConfigCommand}
   */
  updateParticipantRoleConfig(
    args: UpdateParticipantRoleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateParticipantRoleConfigCommandOutput>;
  updateParticipantRoleConfig(
    args: UpdateParticipantRoleConfigCommandInput,
    cb: (err: any, data?: UpdateParticipantRoleConfigCommandOutput) => void
  ): void;
  updateParticipantRoleConfig(
    args: UpdateParticipantRoleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateParticipantRoleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberCommand}
   */
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePromptCommand}
   */
  updatePrompt(args: UpdatePromptCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePromptCommandOutput>;
  updatePrompt(args: UpdatePromptCommandInput, cb: (err: any, data?: UpdatePromptCommandOutput) => void): void;
  updatePrompt(
    args: UpdatePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueHoursOfOperationCommand}
   */
  updateQueueHoursOfOperation(
    args: UpdateQueueHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueHoursOfOperationCommandOutput>;
  updateQueueHoursOfOperation(
    args: UpdateQueueHoursOfOperationCommandInput,
    cb: (err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void
  ): void;
  updateQueueHoursOfOperation(
    args: UpdateQueueHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueMaxContactsCommand}
   */
  updateQueueMaxContacts(
    args: UpdateQueueMaxContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueMaxContactsCommandOutput>;
  updateQueueMaxContacts(
    args: UpdateQueueMaxContactsCommandInput,
    cb: (err: any, data?: UpdateQueueMaxContactsCommandOutput) => void
  ): void;
  updateQueueMaxContacts(
    args: UpdateQueueMaxContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueMaxContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueNameCommand}
   */
  updateQueueName(
    args: UpdateQueueNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueNameCommandOutput>;
  updateQueueName(args: UpdateQueueNameCommandInput, cb: (err: any, data?: UpdateQueueNameCommandOutput) => void): void;
  updateQueueName(
    args: UpdateQueueNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueOutboundCallerConfigCommand}
   */
  updateQueueOutboundCallerConfig(
    args: UpdateQueueOutboundCallerConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueOutboundCallerConfigCommandOutput>;
  updateQueueOutboundCallerConfig(
    args: UpdateQueueOutboundCallerConfigCommandInput,
    cb: (err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void
  ): void;
  updateQueueOutboundCallerConfig(
    args: UpdateQueueOutboundCallerConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueStatusCommand}
   */
  updateQueueStatus(
    args: UpdateQueueStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueStatusCommandOutput>;
  updateQueueStatus(
    args: UpdateQueueStatusCommandInput,
    cb: (err: any, data?: UpdateQueueStatusCommandOutput) => void
  ): void;
  updateQueueStatus(
    args: UpdateQueueStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuickConnectConfigCommand}
   */
  updateQuickConnectConfig(
    args: UpdateQuickConnectConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuickConnectConfigCommandOutput>;
  updateQuickConnectConfig(
    args: UpdateQuickConnectConfigCommandInput,
    cb: (err: any, data?: UpdateQuickConnectConfigCommandOutput) => void
  ): void;
  updateQuickConnectConfig(
    args: UpdateQuickConnectConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuickConnectConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuickConnectNameCommand}
   */
  updateQuickConnectName(
    args: UpdateQuickConnectNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuickConnectNameCommandOutput>;
  updateQuickConnectName(
    args: UpdateQuickConnectNameCommandInput,
    cb: (err: any, data?: UpdateQuickConnectNameCommandOutput) => void
  ): void;
  updateQuickConnectName(
    args: UpdateQuickConnectNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuickConnectNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingProfileAgentAvailabilityTimerCommand}
   */
  updateRoutingProfileAgentAvailabilityTimer(
    args: UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileAgentAvailabilityTimerCommandOutput>;
  updateRoutingProfileAgentAvailabilityTimer(
    args: UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileAgentAvailabilityTimerCommandOutput) => void
  ): void;
  updateRoutingProfileAgentAvailabilityTimer(
    args: UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileAgentAvailabilityTimerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingProfileConcurrencyCommand}
   */
  updateRoutingProfileConcurrency(
    args: UpdateRoutingProfileConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileConcurrencyCommandOutput>;
  updateRoutingProfileConcurrency(
    args: UpdateRoutingProfileConcurrencyCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void
  ): void;
  updateRoutingProfileConcurrency(
    args: UpdateRoutingProfileConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommand}
   */
  updateRoutingProfileDefaultOutboundQueue(
    args: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput>;
  updateRoutingProfileDefaultOutboundQueue(
    args: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void
  ): void;
  updateRoutingProfileDefaultOutboundQueue(
    args: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingProfileNameCommand}
   */
  updateRoutingProfileName(
    args: UpdateRoutingProfileNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileNameCommandOutput>;
  updateRoutingProfileName(
    args: UpdateRoutingProfileNameCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileNameCommandOutput) => void
  ): void;
  updateRoutingProfileName(
    args: UpdateRoutingProfileNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingProfileQueuesCommand}
   */
  updateRoutingProfileQueues(
    args: UpdateRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileQueuesCommandOutput>;
  updateRoutingProfileQueues(
    args: UpdateRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void
  ): void;
  updateRoutingProfileQueues(
    args: UpdateRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleCommand}
   */
  updateRule(args: UpdateRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleCommandOutput>;
  updateRule(args: UpdateRuleCommandInput, cb: (err: any, data?: UpdateRuleCommandOutput) => void): void;
  updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityProfileCommand}
   */
  updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityProfileCommandOutput>;
  updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void
  ): void;
  updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTaskTemplateCommand}
   */
  updateTaskTemplate(
    args: UpdateTaskTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskTemplateCommandOutput>;
  updateTaskTemplate(
    args: UpdateTaskTemplateCommandInput,
    cb: (err: any, data?: UpdateTaskTemplateCommandOutput) => void
  ): void;
  updateTaskTemplate(
    args: UpdateTaskTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrafficDistributionCommand}
   */
  updateTrafficDistribution(
    args: UpdateTrafficDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrafficDistributionCommandOutput>;
  updateTrafficDistribution(
    args: UpdateTrafficDistributionCommandInput,
    cb: (err: any, data?: UpdateTrafficDistributionCommandOutput) => void
  ): void;
  updateTrafficDistribution(
    args: UpdateTrafficDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrafficDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserHierarchyCommand}
   */
  updateUserHierarchy(
    args: UpdateUserHierarchyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserHierarchyCommandOutput>;
  updateUserHierarchy(
    args: UpdateUserHierarchyCommandInput,
    cb: (err: any, data?: UpdateUserHierarchyCommandOutput) => void
  ): void;
  updateUserHierarchy(
    args: UpdateUserHierarchyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserHierarchyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserHierarchyGroupNameCommand}
   */
  updateUserHierarchyGroupName(
    args: UpdateUserHierarchyGroupNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserHierarchyGroupNameCommandOutput>;
  updateUserHierarchyGroupName(
    args: UpdateUserHierarchyGroupNameCommandInput,
    cb: (err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void
  ): void;
  updateUserHierarchyGroupName(
    args: UpdateUserHierarchyGroupNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserHierarchyStructureCommand}
   */
  updateUserHierarchyStructure(
    args: UpdateUserHierarchyStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserHierarchyStructureCommandOutput>;
  updateUserHierarchyStructure(
    args: UpdateUserHierarchyStructureCommandInput,
    cb: (err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void
  ): void;
  updateUserHierarchyStructure(
    args: UpdateUserHierarchyStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserIdentityInfoCommand}
   */
  updateUserIdentityInfo(
    args: UpdateUserIdentityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserIdentityInfoCommandOutput>;
  updateUserIdentityInfo(
    args: UpdateUserIdentityInfoCommandInput,
    cb: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void
  ): void;
  updateUserIdentityInfo(
    args: UpdateUserIdentityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserPhoneConfigCommand}
   */
  updateUserPhoneConfig(
    args: UpdateUserPhoneConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPhoneConfigCommandOutput>;
  updateUserPhoneConfig(
    args: UpdateUserPhoneConfigCommandInput,
    cb: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void
  ): void;
  updateUserPhoneConfig(
    args: UpdateUserPhoneConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserRoutingProfileCommand}
   */
  updateUserRoutingProfile(
    args: UpdateUserRoutingProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserRoutingProfileCommandOutput>;
  updateUserRoutingProfile(
    args: UpdateUserRoutingProfileCommandInput,
    cb: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void
  ): void;
  updateUserRoutingProfile(
    args: UpdateUserRoutingProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserSecurityProfilesCommand}
   */
  updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserSecurityProfilesCommandOutput>;
  updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesCommandInput,
    cb: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void
  ): void;
  updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateViewContentCommand}
   */
  updateViewContent(
    args: UpdateViewContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateViewContentCommandOutput>;
  updateViewContent(
    args: UpdateViewContentCommandInput,
    cb: (err: any, data?: UpdateViewContentCommandOutput) => void
  ): void;
  updateViewContent(
    args: UpdateViewContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateViewContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateViewMetadataCommand}
   */
  updateViewMetadata(
    args: UpdateViewMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateViewMetadataCommandOutput>;
  updateViewMetadata(
    args: UpdateViewMetadataCommandInput,
    cb: (err: any, data?: UpdateViewMetadataCommandOutput) => void
  ): void;
  updateViewMetadata(
    args: UpdateViewMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateViewMetadataCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class Connect extends ConnectClient implements Connect {}
createAggregatedClient(commands, Connect);
