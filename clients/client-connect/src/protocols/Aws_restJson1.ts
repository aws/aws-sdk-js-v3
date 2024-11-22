// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  ActivateEvaluationFormCommandInput,
  ActivateEvaluationFormCommandOutput,
} from "../commands/ActivateEvaluationFormCommand";
import {
  AssociateAnalyticsDataSetCommandInput,
  AssociateAnalyticsDataSetCommandOutput,
} from "../commands/AssociateAnalyticsDataSetCommand";
import {
  AssociateApprovedOriginCommandInput,
  AssociateApprovedOriginCommandOutput,
} from "../commands/AssociateApprovedOriginCommand";
import { AssociateBotCommandInput, AssociateBotCommandOutput } from "../commands/AssociateBotCommand";
import {
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
} from "../commands/AssociateDefaultVocabularyCommand";
import { AssociateFlowCommandInput, AssociateFlowCommandOutput } from "../commands/AssociateFlowCommand";
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
import {
  AssociateTrafficDistributionGroupUserCommandInput,
  AssociateTrafficDistributionGroupUserCommandOutput,
} from "../commands/AssociateTrafficDistributionGroupUserCommand";
import {
  AssociateUserProficienciesCommandInput,
  AssociateUserProficienciesCommandOutput,
} from "../commands/AssociateUserProficienciesCommand";
import {
  BatchAssociateAnalyticsDataSetCommandInput,
  BatchAssociateAnalyticsDataSetCommandOutput,
} from "../commands/BatchAssociateAnalyticsDataSetCommand";
import {
  BatchDisassociateAnalyticsDataSetCommandInput,
  BatchDisassociateAnalyticsDataSetCommandOutput,
} from "../commands/BatchDisassociateAnalyticsDataSetCommand";
import {
  BatchGetAttachedFileMetadataCommandInput,
  BatchGetAttachedFileMetadataCommandOutput,
} from "../commands/BatchGetAttachedFileMetadataCommand";
import {
  BatchGetFlowAssociationCommandInput,
  BatchGetFlowAssociationCommandOutput,
} from "../commands/BatchGetFlowAssociationCommand";
import { BatchPutContactCommandInput, BatchPutContactCommandOutput } from "../commands/BatchPutContactCommand";
import { ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput } from "../commands/ClaimPhoneNumberCommand";
import {
  CompleteAttachedFileUploadCommandInput,
  CompleteAttachedFileUploadCommandOutput,
} from "../commands/CompleteAttachedFileUploadCommand";
import { CreateAgentStatusCommandInput, CreateAgentStatusCommandOutput } from "../commands/CreateAgentStatusCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "../commands/CreateContactCommand";
import { CreateContactFlowCommandInput, CreateContactFlowCommandOutput } from "../commands/CreateContactFlowCommand";
import {
  CreateContactFlowModuleCommandInput,
  CreateContactFlowModuleCommandOutput,
} from "../commands/CreateContactFlowModuleCommand";
import {
  CreateContactFlowVersionCommandInput,
  CreateContactFlowVersionCommandOutput,
} from "../commands/CreateContactFlowVersionCommand";
import { CreateEmailAddressCommandInput, CreateEmailAddressCommandOutput } from "../commands/CreateEmailAddressCommand";
import {
  CreateEvaluationFormCommandInput,
  CreateEvaluationFormCommandOutput,
} from "../commands/CreateEvaluationFormCommand";
import {
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
} from "../commands/CreateHoursOfOperationCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "../commands/CreateInstanceCommand";
import {
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
} from "../commands/CreateIntegrationAssociationCommand";
import { CreateParticipantCommandInput, CreateParticipantCommandOutput } from "../commands/CreateParticipantCommand";
import {
  CreatePersistentContactAssociationCommandInput,
  CreatePersistentContactAssociationCommandOutput,
} from "../commands/CreatePersistentContactAssociationCommand";
import {
  CreatePredefinedAttributeCommandInput,
  CreatePredefinedAttributeCommandOutput,
} from "../commands/CreatePredefinedAttributeCommand";
import { CreatePromptCommandInput, CreatePromptCommandOutput } from "../commands/CreatePromptCommand";
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
import { CreateViewCommandInput, CreateViewCommandOutput } from "../commands/CreateViewCommand";
import { CreateViewVersionCommandInput, CreateViewVersionCommandOutput } from "../commands/CreateViewVersionCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "../commands/CreateVocabularyCommand";
import {
  DeactivateEvaluationFormCommandInput,
  DeactivateEvaluationFormCommandOutput,
} from "../commands/DeactivateEvaluationFormCommand";
import { DeleteAttachedFileCommandInput, DeleteAttachedFileCommandOutput } from "../commands/DeleteAttachedFileCommand";
import {
  DeleteContactEvaluationCommandInput,
  DeleteContactEvaluationCommandOutput,
} from "../commands/DeleteContactEvaluationCommand";
import { DeleteContactFlowCommandInput, DeleteContactFlowCommandOutput } from "../commands/DeleteContactFlowCommand";
import {
  DeleteContactFlowModuleCommandInput,
  DeleteContactFlowModuleCommandOutput,
} from "../commands/DeleteContactFlowModuleCommand";
import { DeleteEmailAddressCommandInput, DeleteEmailAddressCommandOutput } from "../commands/DeleteEmailAddressCommand";
import {
  DeleteEvaluationFormCommandInput,
  DeleteEvaluationFormCommandOutput,
} from "../commands/DeleteEvaluationFormCommand";
import {
  DeleteHoursOfOperationCommandInput,
  DeleteHoursOfOperationCommandOutput,
} from "../commands/DeleteHoursOfOperationCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "../commands/DeleteInstanceCommand";
import {
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
} from "../commands/DeleteIntegrationAssociationCommand";
import {
  DeletePredefinedAttributeCommandInput,
  DeletePredefinedAttributeCommandOutput,
} from "../commands/DeletePredefinedAttributeCommand";
import { DeletePromptCommandInput, DeletePromptCommandOutput } from "../commands/DeletePromptCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "../commands/DeleteQueueCommand";
import { DeleteQuickConnectCommandInput, DeleteQuickConnectCommandOutput } from "../commands/DeleteQuickConnectCommand";
import {
  DeleteRoutingProfileCommandInput,
  DeleteRoutingProfileCommandOutput,
} from "../commands/DeleteRoutingProfileCommand";
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
import { DeleteViewCommandInput, DeleteViewCommandOutput } from "../commands/DeleteViewCommand";
import { DeleteViewVersionCommandInput, DeleteViewVersionCommandOutput } from "../commands/DeleteViewVersionCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "../commands/DeleteVocabularyCommand";
import {
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
} from "../commands/DescribeAgentStatusCommand";
import {
  DescribeAuthenticationProfileCommandInput,
  DescribeAuthenticationProfileCommandOutput,
} from "../commands/DescribeAuthenticationProfileCommand";
import { DescribeContactCommandInput, DescribeContactCommandOutput } from "../commands/DescribeContactCommand";
import {
  DescribeContactEvaluationCommandInput,
  DescribeContactEvaluationCommandOutput,
} from "../commands/DescribeContactEvaluationCommand";
import {
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "../commands/DescribeContactFlowCommand";
import {
  DescribeContactFlowModuleCommandInput,
  DescribeContactFlowModuleCommandOutput,
} from "../commands/DescribeContactFlowModuleCommand";
import {
  DescribeEmailAddressCommandInput,
  DescribeEmailAddressCommandOutput,
} from "../commands/DescribeEmailAddressCommand";
import {
  DescribeEvaluationFormCommandInput,
  DescribeEvaluationFormCommandOutput,
} from "../commands/DescribeEvaluationFormCommand";
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
import {
  DescribePredefinedAttributeCommandInput,
  DescribePredefinedAttributeCommandOutput,
} from "../commands/DescribePredefinedAttributeCommand";
import { DescribePromptCommandInput, DescribePromptCommandOutput } from "../commands/DescribePromptCommand";
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
import { DescribeViewCommandInput, DescribeViewCommandOutput } from "../commands/DescribeViewCommand";
import { DescribeVocabularyCommandInput, DescribeVocabularyCommandOutput } from "../commands/DescribeVocabularyCommand";
import {
  DisassociateAnalyticsDataSetCommandInput,
  DisassociateAnalyticsDataSetCommandOutput,
} from "../commands/DisassociateAnalyticsDataSetCommand";
import {
  DisassociateApprovedOriginCommandInput,
  DisassociateApprovedOriginCommandOutput,
} from "../commands/DisassociateApprovedOriginCommand";
import { DisassociateBotCommandInput, DisassociateBotCommandOutput } from "../commands/DisassociateBotCommand";
import { DisassociateFlowCommandInput, DisassociateFlowCommandOutput } from "../commands/DisassociateFlowCommand";
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
import {
  DisassociateTrafficDistributionGroupUserCommandInput,
  DisassociateTrafficDistributionGroupUserCommandOutput,
} from "../commands/DisassociateTrafficDistributionGroupUserCommand";
import {
  DisassociateUserProficienciesCommandInput,
  DisassociateUserProficienciesCommandOutput,
} from "../commands/DisassociateUserProficienciesCommand";
import { DismissUserContactCommandInput, DismissUserContactCommandOutput } from "../commands/DismissUserContactCommand";
import { GetAttachedFileCommandInput, GetAttachedFileCommandOutput } from "../commands/GetAttachedFileCommand";
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
import { GetFlowAssociationCommandInput, GetFlowAssociationCommandOutput } from "../commands/GetFlowAssociationCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "../commands/GetMetricDataCommand";
import { GetMetricDataV2CommandInput, GetMetricDataV2CommandOutput } from "../commands/GetMetricDataV2Command";
import { GetPromptFileCommandInput, GetPromptFileCommandOutput } from "../commands/GetPromptFileCommand";
import { GetTaskTemplateCommandInput, GetTaskTemplateCommandOutput } from "../commands/GetTaskTemplateCommand";
import {
  GetTrafficDistributionCommandInput,
  GetTrafficDistributionCommandOutput,
} from "../commands/GetTrafficDistributionCommand";
import { ImportPhoneNumberCommandInput, ImportPhoneNumberCommandOutput } from "../commands/ImportPhoneNumberCommand";
import { ListAgentStatusesCommandInput, ListAgentStatusesCommandOutput } from "../commands/ListAgentStatusesCommand";
import {
  ListAnalyticsDataAssociationsCommandInput,
  ListAnalyticsDataAssociationsCommandOutput,
} from "../commands/ListAnalyticsDataAssociationsCommand";
import {
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "../commands/ListApprovedOriginsCommand";
import {
  ListAssociatedContactsCommandInput,
  ListAssociatedContactsCommandOutput,
} from "../commands/ListAssociatedContactsCommand";
import {
  ListAuthenticationProfilesCommandInput,
  ListAuthenticationProfilesCommandOutput,
} from "../commands/ListAuthenticationProfilesCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import {
  ListContactEvaluationsCommandInput,
  ListContactEvaluationsCommandOutput,
} from "../commands/ListContactEvaluationsCommand";
import {
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "../commands/ListContactFlowModulesCommand";
import { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "../commands/ListContactFlowsCommand";
import {
  ListContactFlowVersionsCommandInput,
  ListContactFlowVersionsCommandOutput,
} from "../commands/ListContactFlowVersionsCommand";
import {
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "../commands/ListContactReferencesCommand";
import {
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "../commands/ListDefaultVocabulariesCommand";
import {
  ListEvaluationFormsCommandInput,
  ListEvaluationFormsCommandOutput,
} from "../commands/ListEvaluationFormsCommand";
import {
  ListEvaluationFormVersionsCommandInput,
  ListEvaluationFormVersionsCommandOutput,
} from "../commands/ListEvaluationFormVersionsCommand";
import {
  ListFlowAssociationsCommandInput,
  ListFlowAssociationsCommandOutput,
} from "../commands/ListFlowAssociationsCommand";
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
import {
  ListPredefinedAttributesCommandInput,
  ListPredefinedAttributesCommandOutput,
} from "../commands/ListPredefinedAttributesCommand";
import { ListPromptsCommandInput, ListPromptsCommandOutput } from "../commands/ListPromptsCommand";
import {
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "../commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput } from "../commands/ListQuickConnectsCommand";
import {
  ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ListRealtimeContactAnalysisSegmentsV2CommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsV2Command";
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
  ListSecurityProfileApplicationsCommandInput,
  ListSecurityProfileApplicationsCommandOutput,
} from "../commands/ListSecurityProfileApplicationsCommand";
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
import {
  ListTrafficDistributionGroupUsersCommandInput,
  ListTrafficDistributionGroupUsersCommandOutput,
} from "../commands/ListTrafficDistributionGroupUsersCommand";
import { ListUseCasesCommandInput, ListUseCasesCommandOutput } from "../commands/ListUseCasesCommand";
import {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "../commands/ListUserHierarchyGroupsCommand";
import {
  ListUserProficienciesCommandInput,
  ListUserProficienciesCommandOutput,
} from "../commands/ListUserProficienciesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ListViewsCommandInput, ListViewsCommandOutput } from "../commands/ListViewsCommand";
import { ListViewVersionsCommandInput, ListViewVersionsCommandOutput } from "../commands/ListViewVersionsCommand";
import { MonitorContactCommandInput, MonitorContactCommandOutput } from "../commands/MonitorContactCommand";
import { PauseContactCommandInput, PauseContactCommandOutput } from "../commands/PauseContactCommand";
import { PutUserStatusCommandInput, PutUserStatusCommandOutput } from "../commands/PutUserStatusCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "../commands/ReleasePhoneNumberCommand";
import { ReplicateInstanceCommandInput, ReplicateInstanceCommandOutput } from "../commands/ReplicateInstanceCommand";
import { ResumeContactCommandInput, ResumeContactCommandOutput } from "../commands/ResumeContactCommand";
import {
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "../commands/ResumeContactRecordingCommand";
import {
  SearchAgentStatusesCommandInput,
  SearchAgentStatusesCommandOutput,
} from "../commands/SearchAgentStatusesCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import {
  SearchContactFlowModulesCommandInput,
  SearchContactFlowModulesCommandOutput,
} from "../commands/SearchContactFlowModulesCommand";
import { SearchContactFlowsCommandInput, SearchContactFlowsCommandOutput } from "../commands/SearchContactFlowsCommand";
import { SearchContactsCommandInput, SearchContactsCommandOutput } from "../commands/SearchContactsCommand";
import {
  SearchEmailAddressesCommandInput,
  SearchEmailAddressesCommandOutput,
} from "../commands/SearchEmailAddressesCommand";
import {
  SearchHoursOfOperationsCommandInput,
  SearchHoursOfOperationsCommandOutput,
} from "../commands/SearchHoursOfOperationsCommand";
import {
  SearchPredefinedAttributesCommandInput,
  SearchPredefinedAttributesCommandOutput,
} from "../commands/SearchPredefinedAttributesCommand";
import { SearchPromptsCommandInput, SearchPromptsCommandOutput } from "../commands/SearchPromptsCommand";
import { SearchQueuesCommandInput, SearchQueuesCommandOutput } from "../commands/SearchQueuesCommand";
import {
  SearchQuickConnectsCommandInput,
  SearchQuickConnectsCommandOutput,
} from "../commands/SearchQuickConnectsCommand";
import { SearchResourceTagsCommandInput, SearchResourceTagsCommandOutput } from "../commands/SearchResourceTagsCommand";
import {
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "../commands/SearchRoutingProfilesCommand";
import {
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
} from "../commands/SearchSecurityProfilesCommand";
import {
  SearchUserHierarchyGroupsCommandInput,
  SearchUserHierarchyGroupsCommandOutput,
} from "../commands/SearchUserHierarchyGroupsCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
import { SearchVocabulariesCommandInput, SearchVocabulariesCommandOutput } from "../commands/SearchVocabulariesCommand";
import {
  SendChatIntegrationEventCommandInput,
  SendChatIntegrationEventCommandOutput,
} from "../commands/SendChatIntegrationEventCommand";
import { SendOutboundEmailCommandInput, SendOutboundEmailCommandOutput } from "../commands/SendOutboundEmailCommand";
import {
  StartAttachedFileUploadCommandInput,
  StartAttachedFileUploadCommandOutput,
} from "../commands/StartAttachedFileUploadCommand";
import { StartChatContactCommandInput, StartChatContactCommandOutput } from "../commands/StartChatContactCommand";
import {
  StartContactEvaluationCommandInput,
  StartContactEvaluationCommandOutput,
} from "../commands/StartContactEvaluationCommand";
import {
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "../commands/StartContactRecordingCommand";
import {
  StartContactStreamingCommandInput,
  StartContactStreamingCommandOutput,
} from "../commands/StartContactStreamingCommand";
import { StartEmailContactCommandInput, StartEmailContactCommandOutput } from "../commands/StartEmailContactCommand";
import {
  StartOutboundChatContactCommandInput,
  StartOutboundChatContactCommandOutput,
} from "../commands/StartOutboundChatContactCommand";
import {
  StartOutboundEmailContactCommandInput,
  StartOutboundEmailContactCommandOutput,
} from "../commands/StartOutboundEmailContactCommand";
import {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "../commands/StartOutboundVoiceContactCommand";
import { StartScreenSharingCommandInput, StartScreenSharingCommandOutput } from "../commands/StartScreenSharingCommand";
import { StartTaskContactCommandInput, StartTaskContactCommandOutput } from "../commands/StartTaskContactCommand";
import { StartWebRTCContactCommandInput, StartWebRTCContactCommandOutput } from "../commands/StartWebRTCContactCommand";
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
  SubmitContactEvaluationCommandInput,
  SubmitContactEvaluationCommandOutput,
} from "../commands/SubmitContactEvaluationCommand";
import {
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "../commands/SuspendContactRecordingCommand";
import { TagContactCommandInput, TagContactCommandOutput } from "../commands/TagContactCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TransferContactCommandInput, TransferContactCommandOutput } from "../commands/TransferContactCommand";
import { UntagContactCommandInput, UntagContactCommandOutput } from "../commands/UntagContactCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAgentStatusCommandInput, UpdateAgentStatusCommandOutput } from "../commands/UpdateAgentStatusCommand";
import {
  UpdateAuthenticationProfileCommandInput,
  UpdateAuthenticationProfileCommandOutput,
} from "../commands/UpdateAuthenticationProfileCommand";
import {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "../commands/UpdateContactAttributesCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "../commands/UpdateContactCommand";
import {
  UpdateContactEvaluationCommandInput,
  UpdateContactEvaluationCommandOutput,
} from "../commands/UpdateContactEvaluationCommand";
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
  UpdateContactRoutingDataCommandInput,
  UpdateContactRoutingDataCommandOutput,
} from "../commands/UpdateContactRoutingDataCommand";
import {
  UpdateContactScheduleCommandInput,
  UpdateContactScheduleCommandOutput,
} from "../commands/UpdateContactScheduleCommand";
import {
  UpdateEmailAddressMetadataCommandInput,
  UpdateEmailAddressMetadataCommandOutput,
} from "../commands/UpdateEmailAddressMetadataCommand";
import {
  UpdateEvaluationFormCommandInput,
  UpdateEvaluationFormCommandOutput,
} from "../commands/UpdateEvaluationFormCommand";
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
  UpdatePhoneNumberMetadataCommandInput,
  UpdatePhoneNumberMetadataCommandOutput,
} from "../commands/UpdatePhoneNumberMetadataCommand";
import {
  UpdatePredefinedAttributeCommandInput,
  UpdatePredefinedAttributeCommandOutput,
} from "../commands/UpdatePredefinedAttributeCommand";
import { UpdatePromptCommandInput, UpdatePromptCommandOutput } from "../commands/UpdatePromptCommand";
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
import {
  UpdateQueueOutboundEmailConfigCommandInput,
  UpdateQueueOutboundEmailConfigCommandOutput,
} from "../commands/UpdateQueueOutboundEmailConfigCommand";
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
  UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
  UpdateRoutingProfileAgentAvailabilityTimerCommandOutput,
} from "../commands/UpdateRoutingProfileAgentAvailabilityTimerCommand";
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
  UpdateUserProficienciesCommandInput,
  UpdateUserProficienciesCommandOutput,
} from "../commands/UpdateUserProficienciesCommand";
import {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "../commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "../commands/UpdateUserSecurityProfilesCommand";
import { UpdateViewContentCommandInput, UpdateViewContentCommandOutput } from "../commands/UpdateViewContentCommand";
import { UpdateViewMetadataCommandInput, UpdateViewMetadataCommandOutput } from "../commands/UpdateViewMetadataCommand";
import { ConnectServiceException as __BaseException } from "../models/ConnectServiceException";
import {
  AccessDeniedException,
  AgentConfig,
  AgentContactReference,
  AgentHierarchyGroups,
  AgentInfo,
  AgentQualityMetrics,
  AgentsCriteria,
  AgentStatus,
  AgentStatusReference,
  AgentStatusSearchFilter,
  AgentStatusSummary,
  AllowedCapabilities,
  Application,
  AssignContactCategoryActionDefinition,
  AudioQualityMetricsInfo,
  Campaign,
  Channel,
  CommonAttributeAndCondition,
  ConflictException,
  ContactDataRequest,
  ContactInitiationMethod,
  ContactState,
  ControlPlaneAttributeFilter,
  CreateCaseActionDefinition,
  CreatedByInfo,
  CrossChannelBehavior,
  Distribution,
  DuplicateResourceException,
  EmptyFieldValue,
  EncryptionConfig,
  EndAssociatedTasksActionDefinition,
  Endpoint,
  EvaluationFormNumericQuestionAutomation,
  EvaluationFormNumericQuestionOption,
  EvaluationFormNumericQuestionProperties,
  EvaluationFormQuestion,
  EvaluationFormQuestionTypeProperties,
  EvaluationFormScoringStrategy,
  EvaluationFormSingleSelectQuestionAutomation,
  EvaluationFormSingleSelectQuestionAutomationOption,
  EvaluationFormSingleSelectQuestionOption,
  EvaluationFormSingleSelectQuestionProperties,
  EventBridgeActionDefinition,
  FieldValue,
  FieldValueUnion,
  HoursOfOperationConfig,
  HoursOfOperationTimeSlice,
  IdempotencyException,
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
  LexV2Bot,
  LimitExceededException,
  MediaConcurrency,
  MonitorCapability,
  NotificationRecipientType,
  NumericQuestionPropertyValueAutomation,
  OutboundCallerConfig,
  OutboundEmailConfig,
  ParticipantCapabilities,
  ParticipantDetailsToAdd,
  PhoneNumberQuickConnectConfig,
  PredefinedAttributeValues,
  PropertyValidationException,
  QueueQuickConnectConfig,
  QuickConnectConfig,
  ReadOnlyFieldInfo,
  Reference,
  RequiredFieldInfo,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  RoutingProfileQueueConfig,
  RoutingProfileQueueReference,
  RuleAction,
  RuleTriggerEventSource,
  S3Config,
  SegmentAttributeValue,
  SendNotificationActionDefinition,
  ServiceQuotaExceededException,
  SingleSelectQuestionRuleCategoryAutomation,
  StringCondition,
  SubmitAutoEvaluationActionDefinition,
  TagCondition,
  TaskActionDefinition,
  TaskTemplateConstraints,
  TaskTemplateDefaultFieldValue,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateFieldIdentifier,
  ThrottlingException,
  TooManyRequestsException,
  UpdateCaseActionDefinition,
  UserIdentityInfo,
  UserInfo,
  UserPhoneConfig,
  UserProficiency,
  UserQuickConnectConfig,
  View,
  ViewInputContent,
} from "../models/models_0";
import {
  AssociatedContactSummary,
  AttributeCondition,
  AuthenticationProfile,
  AuthenticationProfileSummary,
  ContactFilter,
  ContactFlow,
  ContactFlowNotPublishedException,
  Credentials,
  CurrentMetric,
  CurrentMetricData,
  CurrentMetricResult,
  CurrentMetricSortCriteria,
  CustomerQualityMetrics,
  CustomerVoiceActivity,
  Evaluation,
  EvaluationAnswerData,
  EvaluationAnswerOutput,
  EvaluationFormSummary,
  EvaluationFormVersionSummary,
  EvaluationMetadata,
  EvaluationNote,
  EvaluationScore,
  EvaluationSummary,
  Expiry,
  Filters,
  FilterV2,
  Grouping,
  HierarchyGroup,
  HierarchyGroupSummary,
  HierarchyLevel,
  HierarchyPath,
  HierarchyStructure,
  HistoricalMetric,
  HistoricalMetricData,
  HistoricalMetricResult,
  HoursOfOperation,
  HoursOfOperationSummary,
  Instance,
  InstanceSummary,
  IntervalDetails,
  MatchCriteria,
  MetricDataV2,
  MetricFilterV2,
  MetricInterval,
  MetricResultV2,
  MetricV2,
  PhoneNumberCountryCode,
  PhoneNumberType,
  PredefinedAttribute,
  PredefinedAttributeSummary,
  Prompt,
  PromptSummary,
  QualityMetrics,
  Queue,
  QueueInfo,
  QueueSummary,
  QuickConnect,
  QuickConnectSummary,
  RealTimeContactAnalysisSegmentAttachments,
  RealTimeContactAnalysisSegmentEvent,
  RealTimeContactAnalysisSegmentType,
  RealTimeContactAnalysisTimeData,
  RoutingProfile,
  Rule,
  SecurityProfile,
  SignInConfig,
  SignInDistribution,
  TelephonyConfig,
  Threshold,
  ThresholdV2,
  User,
  UserData,
  UserDataFilters,
  UserNotFoundException,
  UserProficiencyDisassociate,
  Vocabulary,
} from "../models/models_1";
import {
  AgentStatusSearchCriteria,
  AnswerMachineDetectionConfig,
  AttributeAndCondition,
  ChatEvent,
  ChatMessage,
  ChatParticipantRoleConfig,
  ChatStreamingConfiguration,
  Condition,
  ConditionalOperationFailedException,
  ContactAnalysis,
  ContactFlowModuleSearchCriteria,
  ContactFlowModuleSearchFilter,
  ContactFlowSearchFilter,
  ContactNotFoundException,
  ContactSearchSummary,
  ContactSearchSummaryAgentInfo,
  ContactSearchSummaryQueueInfo,
  ControlPlaneTagFilter,
  ControlPlaneUserAttributeFilter,
  DestinationNotAllowedException,
  DisconnectReason,
  EmailAddressInfo,
  EmailAddressSearchFilter,
  EmailAttachment,
  EmailHeaderType,
  EvaluationAnswerInput,
  EvaluationFormItem,
  EvaluationFormSection,
  HierarchyGroupCondition,
  HierarchyLevelUpdate,
  HierarchyStructureUpdate,
  HoursOfOperationSearchFilter,
  InboundAdditionalRecipients,
  InboundEmailContent,
  InboundRawMessage,
  ListCondition,
  MaximumResultReturnedException,
  NewSessionDetails,
  NumberCondition,
  OutboundAdditionalRecipients,
  OutboundContactNotPermittedException,
  OutboundEmailContent,
  OutboundRawMessage,
  OutputTypeNotFoundException,
  ParticipantDetails,
  ParticipantTimerConfiguration,
  ParticipantTimerValue,
  PersistentChat,
  PromptSearchFilter,
  QueueSearchFilter,
  QuickConnectSearchFilter,
  RealtimeContactAnalysisSegment,
  RealTimeContactAnalysisSegmentTranscript,
  ResourceTagsSearchCriteria,
  RoutingCriteriaInputStepExpiry,
  RoutingProfileSearchFilter,
  RoutingProfileSummary,
  RuleSummary,
  SearchableContactAttributes,
  SearchableContactAttributesCriteria,
  SearchableSegmentAttributes,
  SearchableSegmentAttributesCriteria,
  SearchContactsTimeRange,
  SearchCriteria,
  SecurityKey,
  SecurityProfilesSearchFilter,
  SecurityProfileSummary,
  Sort,
  SourceCampaign,
  TagSearchCondition,
  TaskTemplateMetadata,
  TemplateAttributes,
  TemplatedMessageConfig,
  Transcript,
  TranscriptCriteria,
  UpdateParticipantRoleConfigChannelInfo,
  UserHierarchyGroupSearchFilter,
  UserSearchFilter,
  UserSummary,
  VocabularySummary,
  VoiceRecordingConfiguration,
} from "../models/models_2";
import {
  Contact,
  ContactFlowSearchCriteria,
  EmailAddressSearchCriteria,
  EvaluationForm,
  EvaluationFormContent,
  Expression,
  HoursOfOperationSearchCriteria,
  PredefinedAttributeSearchCriteria,
  PromptSearchCriteria,
  QueueSearchCriteria,
  QuickConnectSearchCriteria,
  RoutingCriteria,
  RoutingCriteriaInput,
  RoutingCriteriaInputStep,
  RoutingProfileSearchCriteria,
  SecurityProfileSearchCriteria,
  Step,
  UserHierarchyGroupSearchCriteria,
  UserSearchCriteria,
} from "../models/models_3";

/**
 * serializeAws_restJson1ActivateEvaluationFormCommand
 */
export const se_ActivateEvaluationFormCommand = async (
  input: ActivateEvaluationFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/evaluation-forms/{InstanceId}/{EvaluationFormId}/activate");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationFormId", () => input.EvaluationFormId!, "{EvaluationFormId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EvaluationFormVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateAnalyticsDataSetCommand
 */
export const se_AssociateAnalyticsDataSetCommand = async (
  input: AssociateAnalyticsDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analytics-data/instance/{InstanceId}/association");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSetId: [],
      TargetAccountId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateApprovedOriginCommand
 */
export const se_AssociateApprovedOriginCommand = async (
  input: AssociateApprovedOriginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/approved-origin");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Origin: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateBotCommand
 */
export const se_AssociateBotCommand = async (
  input: AssociateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/bot");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LexBot: (_) => _json(_),
      LexV2Bot: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateDefaultVocabularyCommand
 */
export const se_AssociateDefaultVocabularyCommand = async (
  input: AssociateDefaultVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/default-vocabulary/{InstanceId}/{LanguageCode}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("LanguageCode", () => input.LanguageCode!, "{LanguageCode}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      VocabularyId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateFlowCommand
 */
export const se_AssociateFlowCommand = async (
  input: AssociateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flow-associations/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FlowId: [],
      ResourceId: [],
      ResourceType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateInstanceStorageConfigCommand
 */
export const se_AssociateInstanceStorageConfigCommand = async (
  input: AssociateInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/storage-config");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceType: [],
      StorageConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateLambdaFunctionCommand
 */
export const se_AssociateLambdaFunctionCommand = async (
  input: AssociateLambdaFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/lambda-function");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FunctionArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateLexBotCommand
 */
export const se_AssociateLexBotCommand = async (
  input: AssociateLexBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/lex-bot");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LexBot: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociatePhoneNumberContactFlowCommand
 */
export const se_AssociatePhoneNumberContactFlowCommand = async (
  input: AssociatePhoneNumberContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number/{PhoneNumberId}/contact-flow");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactFlowId: [],
      InstanceId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateQueueQuickConnectsCommand
 */
export const se_AssociateQueueQuickConnectsCommand = async (
  input: AssociateQueueQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/associate-quick-connects");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QuickConnectIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateRoutingProfileQueuesCommand
 */
export const se_AssociateRoutingProfileQueuesCommand = async (
  input: AssociateRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QueueConfigs: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateSecurityKeyCommand
 */
export const se_AssociateSecurityKeyCommand = async (
  input: AssociateSecurityKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/security-key");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Key: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateTrafficDistributionGroupUserCommand
 */
export const se_AssociateTrafficDistributionGroupUserCommand = async (
  input: AssociateTrafficDistributionGroupUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/traffic-distribution-group/{TrafficDistributionGroupId}/user");
  b.p("TrafficDistributionGroupId", () => input.TrafficDistributionGroupId!, "{TrafficDistributionGroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      UserId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateUserProficienciesCommand
 */
export const se_AssociateUserProficienciesCommand = async (
  input: AssociateUserProficienciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/associate-proficiencies");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserProficiencies: (_) => se_UserProficiencyList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchAssociateAnalyticsDataSetCommand
 */
export const se_BatchAssociateAnalyticsDataSetCommand = async (
  input: BatchAssociateAnalyticsDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analytics-data/instance/{InstanceId}/associations");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSetIds: (_) => _json(_),
      TargetAccountId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDisassociateAnalyticsDataSetCommand
 */
export const se_BatchDisassociateAnalyticsDataSetCommand = async (
  input: BatchDisassociateAnalyticsDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analytics-data/instance/{InstanceId}/associations");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSetIds: (_) => _json(_),
      TargetAccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetAttachedFileMetadataCommand
 */
export const se_BatchGetAttachedFileMetadataCommand = async (
  input: BatchGetAttachedFileMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/attached-files/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_aRA]: [, __expectNonNull(input[_ARA]!, `AssociatedResourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      FileIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetFlowAssociationCommand
 */
export const se_BatchGetFlowAssociationCommand = async (
  input: BatchGetFlowAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flow-associations-batch/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceIds: (_) => _json(_),
      ResourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutContactCommand
 */
export const se_BatchPutContactCommand = async (
  input: BatchPutContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/batch/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactDataRequestList: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ClaimPhoneNumberCommand
 */
export const se_ClaimPhoneNumberCommand = async (
  input: ClaimPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number/claim");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      InstanceId: [],
      PhoneNumber: [],
      PhoneNumberDescription: [],
      Tags: (_) => _json(_),
      TargetArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CompleteAttachedFileUploadCommand
 */
export const se_CompleteAttachedFileUploadCommand = async (
  input: CompleteAttachedFileUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attached-files/{InstanceId}/{FileId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("FileId", () => input.FileId!, "{FileId}", false);
  const query: any = map({
    [_aRA]: [, __expectNonNull(input[_ARA]!, `AssociatedResourceArn`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAgentStatusCommand
 */
export const se_CreateAgentStatusCommand = async (
  input: CreateAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agent-status/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DisplayOrder: [],
      Name: [],
      State: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContactCommand
 */
export const se_CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/create-contact");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attributes: (_) => _json(_),
      Channel: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      ExpiryDurationInMinutes: [],
      InitiateAs: [],
      InitiationMethod: [],
      InstanceId: [],
      Name: [],
      References: (_) => _json(_),
      RelatedContactId: [],
      SegmentAttributes: (_) => _json(_),
      UserInfo: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContactFlowCommand
 */
export const se_CreateContactFlowCommand = async (
  input: CreateContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flows/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: [],
      Description: [],
      Name: [],
      Status: [],
      Tags: (_) => _json(_),
      Type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContactFlowModuleCommand
 */
export const se_CreateContactFlowModuleCommand = async (
  input: CreateContactFlowModuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flow-modules/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Content: [],
      Description: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContactFlowVersionCommand
 */
export const se_CreateContactFlowVersionCommand = async (
  input: CreateContactFlowVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flows/{InstanceId}/{ContactFlowId}/version");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowId", () => input.ContactFlowId!, "{ContactFlowId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      FlowContentSha256: [],
      LastModifiedRegion: [],
      LastModifiedTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEmailAddressCommand
 */
export const se_CreateEmailAddressCommand = async (
  input: CreateEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/email-addresses/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      Description: [],
      DisplayName: [],
      EmailAddress: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEvaluationFormCommand
 */
export const se_CreateEvaluationFormCommand = async (
  input: CreateEvaluationFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/evaluation-forms/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Items: (_) => se_EvaluationFormItemsList(_, context),
      ScoringStrategy: (_) => _json(_),
      Title: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateHoursOfOperationCommand
 */
export const se_CreateHoursOfOperationCommand = async (
  input: CreateHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/hours-of-operations/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Config: (_) => _json(_),
      Description: [],
      Name: [],
      Tags: (_) => _json(_),
      TimeZone: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateInstanceCommand
 */
export const se_CreateInstanceCommand = async (
  input: CreateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      DirectoryId: [],
      IdentityManagementType: [],
      InboundCallsEnabled: [],
      InstanceAlias: [],
      OutboundCallsEnabled: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIntegrationAssociationCommand
 */
export const se_CreateIntegrationAssociationCommand = async (
  input: CreateIntegrationAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/integration-associations");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IntegrationArn: [],
      IntegrationType: [],
      SourceApplicationName: [],
      SourceApplicationUrl: [],
      SourceType: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateParticipantCommand
 */
export const se_CreateParticipantCommand = async (
  input: CreateParticipantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/create-participant");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactId: [],
      InstanceId: [],
      ParticipantDetails: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePersistentContactAssociationCommand
 */
export const se_CreatePersistentContactAssociationCommand = async (
  input: CreatePersistentContactAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/persistent-contact-association/{InstanceId}/{InitialContactId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("InitialContactId", () => input.InitialContactId!, "{InitialContactId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      RehydrationType: [],
      SourceContactId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePredefinedAttributeCommand
 */
export const se_CreatePredefinedAttributeCommand = async (
  input: CreatePredefinedAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/predefined-attributes/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      Values: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePromptCommand
 */
export const se_CreatePromptCommand = async (
  input: CreatePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prompts/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      S3Uri: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQueueCommand
 */
export const se_CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      HoursOfOperationId: [],
      MaxContacts: [],
      Name: [],
      OutboundCallerConfig: (_) => _json(_),
      OutboundEmailConfig: (_) => _json(_),
      QuickConnectIds: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQuickConnectCommand
 */
export const se_CreateQuickConnectCommand = async (
  input: CreateQuickConnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/quick-connects/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      QuickConnectConfig: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoutingProfileCommand
 */
export const se_CreateRoutingProfileCommand = async (
  input: CreateRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AgentAvailabilityTimer: [],
      DefaultOutboundQueueId: [],
      Description: [],
      MediaConcurrencies: (_) => _json(_),
      Name: [],
      QueueConfigs: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/rules/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Actions: (_) => se_RuleActions(_, context),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Function: [],
      Name: [],
      PublishStatus: [],
      TriggerEventSource: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSecurityProfileCommand
 */
export const se_CreateSecurityProfileCommand = async (
  input: CreateSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/security-profiles/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedAccessControlHierarchyGroupId: [],
      AllowedAccessControlTags: (_) => _json(_),
      Applications: (_) => _json(_),
      Description: [],
      HierarchyRestrictedResources: (_) => _json(_),
      Permissions: (_) => _json(_),
      SecurityProfileName: [],
      TagRestrictedResources: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTaskTemplateCommand
 */
export const se_CreateTaskTemplateCommand = async (
  input: CreateTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/task/template");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Constraints: (_) => _json(_),
      ContactFlowId: [],
      Defaults: (_) => _json(_),
      Description: [],
      Fields: (_) => _json(_),
      Name: [],
      SelfAssignFlowId: [],
      Status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTrafficDistributionGroupCommand
 */
export const se_CreateTrafficDistributionGroupCommand = async (
  input: CreateTrafficDistributionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/traffic-distribution-group");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      InstanceId: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUseCaseCommand
 */
export const se_CreateUseCaseCommand = async (
  input: CreateUseCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("IntegrationAssociationId", () => input.IntegrationAssociationId!, "{IntegrationAssociationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
      UseCaseType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DirectoryUserId: [],
      HierarchyGroupId: [],
      IdentityInfo: (_) => _json(_),
      Password: [],
      PhoneConfig: (_) => _json(_),
      RoutingProfileId: [],
      SecurityProfileIds: (_) => _json(_),
      Tags: (_) => _json(_),
      Username: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserHierarchyGroupCommand
 */
export const se_CreateUserHierarchyGroupCommand = async (
  input: CreateUserHierarchyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user-hierarchy-groups/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      ParentGroupId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateViewCommand
 */
export const se_CreateViewCommand = async (
  input: CreateViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/views/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      Content: (_) => _json(_),
      Description: [],
      Name: [],
      Status: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateViewVersionCommand
 */
export const se_CreateViewVersionCommand = async (
  input: CreateViewVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/views/{InstanceId}/{ViewId}/versions");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ViewId", () => input.ViewId!, "{ViewId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      VersionDescription: [],
      ViewContentSha256: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVocabularyCommand
 */
export const se_CreateVocabularyCommand = async (
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/vocabulary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Content: [],
      LanguageCode: [],
      Tags: (_) => _json(_),
      VocabularyName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeactivateEvaluationFormCommand
 */
export const se_DeactivateEvaluationFormCommand = async (
  input: DeactivateEvaluationFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/evaluation-forms/{InstanceId}/{EvaluationFormId}/deactivate");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationFormId", () => input.EvaluationFormId!, "{EvaluationFormId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EvaluationFormVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAttachedFileCommand
 */
export const se_DeleteAttachedFileCommand = async (
  input: DeleteAttachedFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attached-files/{InstanceId}/{FileId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("FileId", () => input.FileId!, "{FileId}", false);
  const query: any = map({
    [_aRA]: [, __expectNonNull(input[_ARA]!, `AssociatedResourceArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteContactEvaluationCommand
 */
export const se_DeleteContactEvaluationCommand = async (
  input: DeleteContactEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-evaluations/{InstanceId}/{EvaluationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationId", () => input.EvaluationId!, "{EvaluationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteContactFlowCommand
 */
export const se_DeleteContactFlowCommand = async (
  input: DeleteContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-flows/{InstanceId}/{ContactFlowId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowId", () => input.ContactFlowId!, "{ContactFlowId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteContactFlowModuleCommand
 */
export const se_DeleteContactFlowModuleCommand = async (
  input: DeleteContactFlowModuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowModuleId", () => input.ContactFlowModuleId!, "{ContactFlowModuleId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEmailAddressCommand
 */
export const se_DeleteEmailAddressCommand = async (
  input: DeleteEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/email-addresses/{InstanceId}/{EmailAddressId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EmailAddressId", () => input.EmailAddressId!, "{EmailAddressId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEvaluationFormCommand
 */
export const se_DeleteEvaluationFormCommand = async (
  input: DeleteEvaluationFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evaluation-forms/{InstanceId}/{EvaluationFormId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationFormId", () => input.EvaluationFormId!, "{EvaluationFormId}", false);
  const query: any = map({
    [_v]: [() => input.EvaluationFormVersion !== void 0, () => input[_EFV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteHoursOfOperationCommand
 */
export const se_DeleteHoursOfOperationCommand = async (
  input: DeleteHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/hours-of-operations/{InstanceId}/{HoursOfOperationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("HoursOfOperationId", () => input.HoursOfOperationId!, "{HoursOfOperationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInstanceCommand
 */
export const se_DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIntegrationAssociationCommand
 */
export const se_DeleteIntegrationAssociationCommand = async (
  input: DeleteIntegrationAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("IntegrationAssociationId", () => input.IntegrationAssociationId!, "{IntegrationAssociationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePredefinedAttributeCommand
 */
export const se_DeletePredefinedAttributeCommand = async (
  input: DeletePredefinedAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/predefined-attributes/{InstanceId}/{Name}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePromptCommand
 */
export const se_DeletePromptCommand = async (
  input: DeletePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompts/{InstanceId}/{PromptId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("PromptId", () => input.PromptId!, "{PromptId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQueueCommand
 */
export const se_DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/queues/{InstanceId}/{QueueId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQuickConnectCommand
 */
export const se_DeleteQuickConnectCommand = async (
  input: DeleteQuickConnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/quick-connects/{InstanceId}/{QuickConnectId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QuickConnectId", () => input.QuickConnectId!, "{QuickConnectId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoutingProfileCommand
 */
export const se_DeleteRoutingProfileCommand = async (
  input: DeleteRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules/{InstanceId}/{RuleId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RuleId", () => input.RuleId!, "{RuleId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSecurityProfileCommand
 */
export const se_DeleteSecurityProfileCommand = async (
  input: DeleteSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles/{InstanceId}/{SecurityProfileId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("SecurityProfileId", () => input.SecurityProfileId!, "{SecurityProfileId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTaskTemplateCommand
 */
export const se_DeleteTaskTemplateCommand = async (
  input: DeleteTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/task/template/{TaskTemplateId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("TaskTemplateId", () => input.TaskTemplateId!, "{TaskTemplateId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTrafficDistributionGroupCommand
 */
export const se_DeleteTrafficDistributionGroupCommand = async (
  input: DeleteTrafficDistributionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/traffic-distribution-group/{TrafficDistributionGroupId}");
  b.p("TrafficDistributionGroupId", () => input.TrafficDistributionGroupId!, "{TrafficDistributionGroupId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUseCaseCommand
 */
export const se_DeleteUseCaseCommand = async (
  input: DeleteUseCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("IntegrationAssociationId", () => input.IntegrationAssociationId!, "{IntegrationAssociationId}", false);
  b.p("UseCaseId", () => input.UseCaseId!, "{UseCaseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/users/{InstanceId}/{UserId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserHierarchyGroupCommand
 */
export const se_DeleteUserHierarchyGroupCommand = async (
  input: DeleteUserHierarchyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}");
  b.p("HierarchyGroupId", () => input.HierarchyGroupId!, "{HierarchyGroupId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteViewCommand
 */
export const se_DeleteViewCommand = async (
  input: DeleteViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/views/{InstanceId}/{ViewId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ViewId", () => input.ViewId!, "{ViewId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteViewVersionCommand
 */
export const se_DeleteViewVersionCommand = async (
  input: DeleteViewVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/views/{InstanceId}/{ViewId}/versions/{ViewVersion}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ViewId", () => input.ViewId!, "{ViewId}", false);
  b.p("ViewVersion", () => input.ViewVersion!.toString(), "{ViewVersion}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVocabularyCommand
 */
export const se_DeleteVocabularyCommand = async (
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/vocabulary-remove/{InstanceId}/{VocabularyId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("VocabularyId", () => input.VocabularyId!, "{VocabularyId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAgentStatusCommand
 */
export const se_DescribeAgentStatusCommand = async (
  input: DescribeAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agent-status/{InstanceId}/{AgentStatusId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AgentStatusId", () => input.AgentStatusId!, "{AgentStatusId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAuthenticationProfileCommand
 */
export const se_DescribeAuthenticationProfileCommand = async (
  input: DescribeAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/authentication-profiles/{InstanceId}/{AuthenticationProfileId}");
  b.p("AuthenticationProfileId", () => input.AuthenticationProfileId!, "{AuthenticationProfileId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeContactCommand
 */
export const se_DescribeContactCommand = async (
  input: DescribeContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contacts/{InstanceId}/{ContactId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeContactEvaluationCommand
 */
export const se_DescribeContactEvaluationCommand = async (
  input: DescribeContactEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-evaluations/{InstanceId}/{EvaluationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationId", () => input.EvaluationId!, "{EvaluationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeContactFlowCommand
 */
export const se_DescribeContactFlowCommand = async (
  input: DescribeContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-flows/{InstanceId}/{ContactFlowId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowId", () => input.ContactFlowId!, "{ContactFlowId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeContactFlowModuleCommand
 */
export const se_DescribeContactFlowModuleCommand = async (
  input: DescribeContactFlowModuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowModuleId", () => input.ContactFlowModuleId!, "{ContactFlowModuleId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEmailAddressCommand
 */
export const se_DescribeEmailAddressCommand = async (
  input: DescribeEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/email-addresses/{InstanceId}/{EmailAddressId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EmailAddressId", () => input.EmailAddressId!, "{EmailAddressId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEvaluationFormCommand
 */
export const se_DescribeEvaluationFormCommand = async (
  input: DescribeEvaluationFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evaluation-forms/{InstanceId}/{EvaluationFormId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationFormId", () => input.EvaluationFormId!, "{EvaluationFormId}", false);
  const query: any = map({
    [_v]: [() => input.EvaluationFormVersion !== void 0, () => input[_EFV]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeHoursOfOperationCommand
 */
export const se_DescribeHoursOfOperationCommand = async (
  input: DescribeHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/hours-of-operations/{InstanceId}/{HoursOfOperationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("HoursOfOperationId", () => input.HoursOfOperationId!, "{HoursOfOperationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInstanceCommand
 */
export const se_DescribeInstanceCommand = async (
  input: DescribeInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInstanceAttributeCommand
 */
export const se_DescribeInstanceAttributeCommand = async (
  input: DescribeInstanceAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/attribute/{AttributeType}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AttributeType", () => input.AttributeType!, "{AttributeType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInstanceStorageConfigCommand
 */
export const se_DescribeInstanceStorageConfigCommand = async (
  input: DescribeInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/storage-config/{AssociationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AssociationId", () => input.AssociationId!, "{AssociationId}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePhoneNumberCommand
 */
export const se_DescribePhoneNumberCommand = async (
  input: DescribePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePredefinedAttributeCommand
 */
export const se_DescribePredefinedAttributeCommand = async (
  input: DescribePredefinedAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/predefined-attributes/{InstanceId}/{Name}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePromptCommand
 */
export const se_DescribePromptCommand = async (
  input: DescribePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompts/{InstanceId}/{PromptId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("PromptId", () => input.PromptId!, "{PromptId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeQueueCommand
 */
export const se_DescribeQueueCommand = async (
  input: DescribeQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/queues/{InstanceId}/{QueueId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeQuickConnectCommand
 */
export const se_DescribeQuickConnectCommand = async (
  input: DescribeQuickConnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/quick-connects/{InstanceId}/{QuickConnectId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QuickConnectId", () => input.QuickConnectId!, "{QuickConnectId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRoutingProfileCommand
 */
export const se_DescribeRoutingProfileCommand = async (
  input: DescribeRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRuleCommand
 */
export const se_DescribeRuleCommand = async (
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules/{InstanceId}/{RuleId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RuleId", () => input.RuleId!, "{RuleId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSecurityProfileCommand
 */
export const se_DescribeSecurityProfileCommand = async (
  input: DescribeSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles/{InstanceId}/{SecurityProfileId}");
  b.p("SecurityProfileId", () => input.SecurityProfileId!, "{SecurityProfileId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTrafficDistributionGroupCommand
 */
export const se_DescribeTrafficDistributionGroupCommand = async (
  input: DescribeTrafficDistributionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/traffic-distribution-group/{TrafficDistributionGroupId}");
  b.p("TrafficDistributionGroupId", () => input.TrafficDistributionGroupId!, "{TrafficDistributionGroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeUserCommand
 */
export const se_DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/users/{InstanceId}/{UserId}");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeUserHierarchyGroupCommand
 */
export const se_DescribeUserHierarchyGroupCommand = async (
  input: DescribeUserHierarchyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}");
  b.p("HierarchyGroupId", () => input.HierarchyGroupId!, "{HierarchyGroupId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeUserHierarchyStructureCommand
 */
export const se_DescribeUserHierarchyStructureCommand = async (
  input: DescribeUserHierarchyStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/user-hierarchy-structure/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeViewCommand
 */
export const se_DescribeViewCommand = async (
  input: DescribeViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/views/{InstanceId}/{ViewId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ViewId", () => input.ViewId!, "{ViewId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeVocabularyCommand
 */
export const se_DescribeVocabularyCommand = async (
  input: DescribeVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/vocabulary/{InstanceId}/{VocabularyId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("VocabularyId", () => input.VocabularyId!, "{VocabularyId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAnalyticsDataSetCommand
 */
export const se_DisassociateAnalyticsDataSetCommand = async (
  input: DisassociateAnalyticsDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analytics-data/instance/{InstanceId}/association");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSetId: [],
      TargetAccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateApprovedOriginCommand
 */
export const se_DisassociateApprovedOriginCommand = async (
  input: DisassociateApprovedOriginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/approved-origin");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_o]: [, __expectNonNull(input[_O]!, `Origin`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateBotCommand
 */
export const se_DisassociateBotCommand = async (
  input: DisassociateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/bot");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LexBot: (_) => _json(_),
      LexV2Bot: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateFlowCommand
 */
export const se_DisassociateFlowCommand = async (
  input: DisassociateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flow-associations/{InstanceId}/{ResourceId}/{ResourceType}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  b.p("ResourceType", () => input.ResourceType!, "{ResourceType}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateInstanceStorageConfigCommand
 */
export const se_DisassociateInstanceStorageConfigCommand = async (
  input: DisassociateInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/storage-config/{AssociationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AssociationId", () => input.AssociationId!, "{AssociationId}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateLambdaFunctionCommand
 */
export const se_DisassociateLambdaFunctionCommand = async (
  input: DisassociateLambdaFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/lambda-function");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_fA]: [, __expectNonNull(input[_FA]!, `FunctionArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateLexBotCommand
 */
export const se_DisassociateLexBotCommand = async (
  input: DisassociateLexBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/lex-bot");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_bN]: [, __expectNonNull(input[_BN]!, `BotName`)],
    [_lR]: [, __expectNonNull(input[_LR]!, `LexRegion`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePhoneNumberContactFlowCommand
 */
export const se_DisassociatePhoneNumberContactFlowCommand = async (
  input: DisassociatePhoneNumberContactFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number/{PhoneNumberId}/contact-flow");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  const query: any = map({
    [_iI]: [, __expectNonNull(input[_II]!, `InstanceId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateQueueQuickConnectsCommand
 */
export const se_DisassociateQueueQuickConnectsCommand = async (
  input: DisassociateQueueQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/disassociate-quick-connects");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QuickConnectIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateRoutingProfileQueuesCommand
 */
export const se_DisassociateRoutingProfileQueuesCommand = async (
  input: DisassociateRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QueueReferences: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateSecurityKeyCommand
 */
export const se_DisassociateSecurityKeyCommand = async (
  input: DisassociateSecurityKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/security-key/{AssociationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AssociationId", () => input.AssociationId!, "{AssociationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateTrafficDistributionGroupUserCommand
 */
export const se_DisassociateTrafficDistributionGroupUserCommand = async (
  input: DisassociateTrafficDistributionGroupUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/traffic-distribution-group/{TrafficDistributionGroupId}/user");
  b.p("TrafficDistributionGroupId", () => input.TrafficDistributionGroupId!, "{TrafficDistributionGroupId}", false);
  const query: any = map({
    [_UI]: [, __expectNonNull(input[_UI]!, `UserId`)],
    [_II]: [, __expectNonNull(input[_II]!, `InstanceId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateUserProficienciesCommand
 */
export const se_DisassociateUserProficienciesCommand = async (
  input: DisassociateUserProficienciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/disassociate-proficiencies");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserProficiencies: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DismissUserContactCommand
 */
export const se_DismissUserContactCommand = async (
  input: DismissUserContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/contact");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAttachedFileCommand
 */
export const se_GetAttachedFileCommand = async (
  input: GetAttachedFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attached-files/{InstanceId}/{FileId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("FileId", () => input.FileId!, "{FileId}", false);
  const query: any = map({
    [_uEIS]: [() => input.UrlExpiryInSeconds !== void 0, () => input[_UEIS]!.toString()],
    [_aRA]: [, __expectNonNull(input[_ARA]!, `AssociatedResourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContactAttributesCommand
 */
export const se_GetContactAttributesCommand = async (
  input: GetContactAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact/attributes/{InstanceId}/{InitialContactId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("InitialContactId", () => input.InitialContactId!, "{InitialContactId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCurrentMetricDataCommand
 */
export const se_GetCurrentMetricDataCommand = async (
  input: GetCurrentMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metrics/current/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CurrentMetrics: (_) => _json(_),
      Filters: (_) => _json(_),
      Groupings: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      SortCriteria: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCurrentUserDataCommand
 */
export const se_GetCurrentUserDataCommand = async (
  input: GetCurrentUserDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metrics/userdata/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFederationTokenCommand
 */
export const se_GetFederationTokenCommand = async (
  input: GetFederationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/user/federate/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFlowAssociationCommand
 */
export const se_GetFlowAssociationCommand = async (
  input: GetFlowAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flow-associations/{InstanceId}/{ResourceId}/{ResourceType}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  b.p("ResourceType", () => input.ResourceType!, "{ResourceType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetricDataCommand
 */
export const se_GetMetricDataCommand = async (
  input: GetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metrics/historical/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      Filters: (_) => _json(_),
      Groupings: (_) => _json(_),
      HistoricalMetrics: (_) => se_HistoricalMetrics(_, context),
      MaxResults: [],
      NextToken: [],
      StartTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetricDataV2Command
 */
export const se_GetMetricDataV2Command = async (
  input: GetMetricDataV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metrics/data");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      Filters: (_) => _json(_),
      Groupings: (_) => _json(_),
      Interval: (_) => _json(_),
      MaxResults: [],
      Metrics: (_) => se_MetricsV2(_, context),
      NextToken: [],
      ResourceArn: [],
      StartTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPromptFileCommand
 */
export const se_GetPromptFileCommand = async (
  input: GetPromptFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompts/{InstanceId}/{PromptId}/file");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("PromptId", () => input.PromptId!, "{PromptId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTaskTemplateCommand
 */
export const se_GetTaskTemplateCommand = async (
  input: GetTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/task/template/{TaskTemplateId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("TaskTemplateId", () => input.TaskTemplateId!, "{TaskTemplateId}", false);
  const query: any = map({
    [_sV]: [, input[_SV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrafficDistributionCommand
 */
export const se_GetTrafficDistributionCommand = async (
  input: GetTrafficDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/traffic-distribution/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportPhoneNumberCommand
 */
export const se_ImportPhoneNumberCommand = async (
  input: ImportPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number/import");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      InstanceId: [],
      PhoneNumberDescription: [],
      SourcePhoneNumberArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAgentStatusesCommand
 */
export const se_ListAgentStatusesCommand = async (
  input: ListAgentStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agent-status/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_AST]: [() => input.AgentStatusTypes !== void 0, () => input[_AST]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAnalyticsDataAssociationsCommand
 */
export const se_ListAnalyticsDataAssociationsCommand = async (
  input: ListAnalyticsDataAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analytics-data/instance/{InstanceId}/association");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_DSI]: [, input[_DSI]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApprovedOriginsCommand
 */
export const se_ListApprovedOriginsCommand = async (
  input: ListApprovedOriginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/approved-origins");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssociatedContactsCommand
 */
export const se_ListAssociatedContactsCommand = async (
  input: ListAssociatedContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact/associated/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_cI]: [, __expectNonNull(input[_CI]!, `ContactId`)],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAuthenticationProfilesCommand
 */
export const se_ListAuthenticationProfilesCommand = async (
  input: ListAuthenticationProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/authentication-profiles-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBotsCommand
 */
export const se_ListBotsCommand = async (
  input: ListBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/bots");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_lV]: [, __expectNonNull(input[_LV]!, `LexVersion`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactEvaluationsCommand
 */
export const se_ListContactEvaluationsCommand = async (
  input: ListContactEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-evaluations/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_cI]: [, __expectNonNull(input[_CI]!, `ContactId`)],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactFlowModulesCommand
 */
export const se_ListContactFlowModulesCommand = async (
  input: ListContactFlowModulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-flow-modules-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_s]: [, input[_CFMS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactFlowsCommand
 */
export const se_ListContactFlowsCommand = async (
  input: ListContactFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-flows-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_cFT]: [() => input.ContactFlowTypes !== void 0, () => input[_CFT]! || []],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactFlowVersionsCommand
 */
export const se_ListContactFlowVersionsCommand = async (
  input: ListContactFlowVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact-flows/{InstanceId}/{ContactFlowId}/versions");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowId", () => input.ContactFlowId!, "{ContactFlowId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactReferencesCommand
 */
export const se_ListContactReferencesCommand = async (
  input: ListContactReferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact/references/{InstanceId}/{ContactId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactId", () => input.ContactId!, "{ContactId}", false);
  const query: any = map({
    [_rTe]: [__expectNonNull(input.ReferenceTypes, `ReferenceTypes`) != null, () => input[_RTe]! || []],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDefaultVocabulariesCommand
 */
export const se_ListDefaultVocabulariesCommand = async (
  input: ListDefaultVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/default-vocabulary-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LanguageCode: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEvaluationFormsCommand
 */
export const se_ListEvaluationFormsCommand = async (
  input: ListEvaluationFormsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evaluation-forms/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEvaluationFormVersionsCommand
 */
export const se_ListEvaluationFormVersionsCommand = async (
  input: ListEvaluationFormVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evaluation-forms/{InstanceId}/{EvaluationFormId}/versions");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationFormId", () => input.EvaluationFormId!, "{EvaluationFormId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFlowAssociationsCommand
 */
export const se_ListFlowAssociationsCommand = async (
  input: ListFlowAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flow-associations-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_RT]: [, input[_RT]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListHoursOfOperationsCommand
 */
export const se_ListHoursOfOperationsCommand = async (
  input: ListHoursOfOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/hours-of-operations-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInstanceAttributesCommand
 */
export const se_ListInstanceAttributesCommand = async (
  input: ListInstanceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/attributes");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInstanceStorageConfigsCommand
 */
export const se_ListInstanceStorageConfigsCommand = async (
  input: ListInstanceStorageConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/storage-configs");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIntegrationAssociationsCommand
 */
export const se_ListIntegrationAssociationsCommand = async (
  input: ListIntegrationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/integration-associations");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_iT]: [, input[_IT]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_iA]: [, input[_IA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLambdaFunctionsCommand
 */
export const se_ListLambdaFunctionsCommand = async (
  input: ListLambdaFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/lambda-functions");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLexBotsCommand
 */
export const se_ListLexBotsCommand = async (
  input: ListLexBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/lex-bots");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumbersCommand
 */
export const se_ListPhoneNumbersCommand = async (
  input: ListPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_pNT]: [() => input.PhoneNumberTypes !== void 0, () => input[_PNT]! || []],
    [_pNCC]: [() => input.PhoneNumberCountryCodes !== void 0, () => input[_PNCC]! || []],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumbersV2Command
 */
export const se_ListPhoneNumbersV2Command = async (
  input: ListPhoneNumbersV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      PhoneNumberCountryCodes: (_) => _json(_),
      PhoneNumberPrefix: [],
      PhoneNumberTypes: (_) => _json(_),
      TargetArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPredefinedAttributesCommand
 */
export const se_ListPredefinedAttributesCommand = async (
  input: ListPredefinedAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/predefined-attributes/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPromptsCommand
 */
export const se_ListPromptsCommand = async (
  input: ListPromptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompts-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueueQuickConnectsCommand
 */
export const se_ListQueueQuickConnectsCommand = async (
  input: ListQueueQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/queues/{InstanceId}/{QueueId}/quick-connects");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueuesCommand
 */
export const se_ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/queues-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_qT]: [() => input.QueueTypes !== void 0, () => input[_QT]! || []],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQuickConnectsCommand
 */
export const se_ListQuickConnectsCommand = async (
  input: ListQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/quick-connects/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_QCT]: [() => input.QuickConnectTypes !== void 0, () => input[_QCT]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRealtimeContactAnalysisSegmentsV2Command
 */
export const se_ListRealtimeContactAnalysisSegmentsV2Command = async (
  input: ListRealtimeContactAnalysisSegmentsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/list-real-time-analysis-segments-v2/{InstanceId}/{ContactId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      OutputType: [],
      SegmentTypes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoutingProfileQueuesCommand
 */
export const se_ListRoutingProfileQueuesCommand = async (
  input: ListRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/queues");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoutingProfilesCommand
 */
export const se_ListRoutingProfilesCommand = async (
  input: ListRoutingProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/routing-profiles-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_pS]: [, input[_PS]!],
    [_eSN]: [, input[_ESN]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSecurityKeysCommand
 */
export const se_ListSecurityKeysCommand = async (
  input: ListSecurityKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/security-keys");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSecurityProfileApplicationsCommand
 */
export const se_ListSecurityProfileApplicationsCommand = async (
  input: ListSecurityProfileApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles-applications/{InstanceId}/{SecurityProfileId}");
  b.p("SecurityProfileId", () => input.SecurityProfileId!, "{SecurityProfileId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSecurityProfilePermissionsCommand
 */
export const se_ListSecurityProfilePermissionsCommand = async (
  input: ListSecurityProfilePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles-permissions/{InstanceId}/{SecurityProfileId}");
  b.p("SecurityProfileId", () => input.SecurityProfileId!, "{SecurityProfileId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSecurityProfilesCommand
 */
export const se_ListSecurityProfilesCommand = async (
  input: ListSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTaskTemplatesCommand
 */
export const se_ListTaskTemplatesCommand = async (
  input: ListTaskTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/task/template");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_st]: [, input[_S]!],
    [_n]: [, input[_N]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrafficDistributionGroupsCommand
 */
export const se_ListTrafficDistributionGroupsCommand = async (
  input: ListTrafficDistributionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/traffic-distribution-groups");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_iI]: [, input[_II]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrafficDistributionGroupUsersCommand
 */
export const se_ListTrafficDistributionGroupUsersCommand = async (
  input: ListTrafficDistributionGroupUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/traffic-distribution-group/{TrafficDistributionGroupId}/user");
  b.p("TrafficDistributionGroupId", () => input.TrafficDistributionGroupId!, "{TrafficDistributionGroupId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUseCasesCommand
 */
export const se_ListUseCasesCommand = async (
  input: ListUseCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("IntegrationAssociationId", () => input.IntegrationAssociationId!, "{IntegrationAssociationId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUserHierarchyGroupsCommand
 */
export const se_ListUserHierarchyGroupsCommand = async (
  input: ListUserHierarchyGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/user-hierarchy-groups-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUserProficienciesCommand
 */
export const se_ListUserProficienciesCommand = async (
  input: ListUserProficienciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/users/{InstanceId}/{UserId}/proficiencies");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/users-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListViewsCommand
 */
export const se_ListViewsCommand = async (
  input: ListViewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/views/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_t]: [, input[_T]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListViewVersionsCommand
 */
export const se_ListViewVersionsCommand = async (
  input: ListViewVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/views/{InstanceId}/{ViewId}/versions");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ViewId", () => input.ViewId!, "{ViewId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MonitorContactCommand
 */
export const se_MonitorContactCommand = async (
  input: MonitorContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/monitor");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedMonitorCapabilities: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactId: [],
      InstanceId: [],
      UserId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PauseContactCommand
 */
export const se_PauseContactCommand = async (
  input: PauseContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/pause");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactFlowId: [],
      ContactId: [],
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutUserStatusCommand
 */
export const se_PutUserStatusCommand = async (
  input: PutUserStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/status");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AgentStatusId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReleasePhoneNumberCommand
 */
export const se_ReleasePhoneNumberCommand = async (
  input: ReleasePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  const query: any = map({
    [_cT]: [, input[_CT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReplicateInstanceCommand
 */
export const se_ReplicateInstanceCommand = async (
  input: ReplicateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/replicate");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ReplicaAlias: [],
      ReplicaRegion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResumeContactCommand
 */
export const se_ResumeContactCommand = async (
  input: ResumeContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/resume");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactFlowId: [],
      ContactId: [],
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResumeContactRecordingCommand
 */
export const se_ResumeContactRecordingCommand = async (
  input: ResumeContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/resume-recording");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      InitialContactId: [],
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchAgentStatusesCommand
 */
export const se_SearchAgentStatusesCommand = async (
  input: SearchAgentStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-agent-statuses");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_AgentStatusSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const se_SearchAvailablePhoneNumbersCommand = async (
  input: SearchAvailablePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number/search-available");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      PhoneNumberCountryCode: [],
      PhoneNumberPrefix: [],
      PhoneNumberType: [],
      TargetArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchContactFlowModulesCommand
 */
export const se_SearchContactFlowModulesCommand = async (
  input: SearchContactFlowModulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-contact-flow-modules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_ContactFlowModuleSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchContactFlowsCommand
 */
export const se_SearchContactFlowsCommand = async (
  input: SearchContactFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-contact-flows");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_ContactFlowSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchContactsCommand
 */
export const se_SearchContactsCommand = async (
  input: SearchContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-contacts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => _json(_),
      Sort: (_) => _json(_),
      TimeRange: (_) => se_SearchContactsTimeRange(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchEmailAddressesCommand
 */
export const se_SearchEmailAddressesCommand = async (
  input: SearchEmailAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-email-addresses");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_EmailAddressSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchHoursOfOperationsCommand
 */
export const se_SearchHoursOfOperationsCommand = async (
  input: SearchHoursOfOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-hours-of-operations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_HoursOfOperationSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchPredefinedAttributesCommand
 */
export const se_SearchPredefinedAttributesCommand = async (
  input: SearchPredefinedAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-predefined-attributes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_PredefinedAttributeSearchCriteria(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchPromptsCommand
 */
export const se_SearchPromptsCommand = async (
  input: SearchPromptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-prompts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_PromptSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchQueuesCommand
 */
export const se_SearchQueuesCommand = async (
  input: SearchQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-queues");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_QueueSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchQuickConnectsCommand
 */
export const se_SearchQuickConnectsCommand = async (
  input: SearchQuickConnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-quick-connects");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_QuickConnectSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchResourceTagsCommand
 */
export const se_SearchResourceTagsCommand = async (
  input: SearchResourceTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-resource-tags");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      ResourceTypes: (_) => _json(_),
      SearchCriteria: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchRoutingProfilesCommand
 */
export const se_SearchRoutingProfilesCommand = async (
  input: SearchRoutingProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-routing-profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_RoutingProfileSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchSecurityProfilesCommand
 */
export const se_SearchSecurityProfilesCommand = async (
  input: SearchSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-security-profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_SecurityProfileSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchUserHierarchyGroupsCommand
 */
export const se_SearchUserHierarchyGroupsCommand = async (
  input: SearchUserHierarchyGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-user-hierarchy-groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_UserHierarchyGroupSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchUsersCommand
 */
export const se_SearchUsersCommand = async (
  input: SearchUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-users");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
      SearchCriteria: (_) => se_UserSearchCriteria(_, context),
      SearchFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchVocabulariesCommand
 */
export const se_SearchVocabulariesCommand = async (
  input: SearchVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/vocabulary-summary/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LanguageCode: [],
      MaxResults: [],
      NameStartsWith: [],
      NextToken: [],
      State: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendChatIntegrationEventCommand
 */
export const se_SendChatIntegrationEventCommand = async (
  input: SendChatIntegrationEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/chat-integration-event");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationId: [],
      Event: (_) => _json(_),
      NewSessionDetails: (_) => _json(_),
      SourceId: [],
      Subtype: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendOutboundEmailCommand
 */
export const se_SendOutboundEmailCommand = async (
  input: SendOutboundEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/outbound-email");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalRecipients: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DestinationEmailAddress: (_) => _json(_),
      EmailMessage: (_) => _json(_),
      FromEmailAddress: (_) => _json(_),
      SourceCampaign: (_) => _json(_),
      TrafficType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAttachedFileUploadCommand
 */
export const se_StartAttachedFileUploadCommand = async (
  input: StartAttachedFileUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/attached-files/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_aRA]: [, __expectNonNull(input[_ARA]!, `AssociatedResourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CreatedBy: (_) => _json(_),
      FileName: [],
      FileSizeInBytes: [],
      FileUseCaseType: [],
      Tags: (_) => _json(_),
      UrlExpiryInSeconds: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartChatContactCommand
 */
export const se_StartChatContactCommand = async (
  input: StartChatContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/chat");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attributes: (_) => _json(_),
      ChatDurationInMinutes: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactFlowId: [],
      InitialMessage: (_) => _json(_),
      InstanceId: [],
      ParticipantDetails: (_) => _json(_),
      PersistentChat: (_) => _json(_),
      RelatedContactId: [],
      SegmentAttributes: (_) => _json(_),
      SupportedMessagingContentTypes: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartContactEvaluationCommand
 */
export const se_StartContactEvaluationCommand = async (
  input: StartContactEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-evaluations/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactId: [],
      EvaluationFormId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartContactRecordingCommand
 */
export const se_StartContactRecordingCommand = async (
  input: StartContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/start-recording");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      InitialContactId: [],
      InstanceId: [],
      VoiceRecordingConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartContactStreamingCommand
 */
export const se_StartContactStreamingCommand = async (
  input: StartContactStreamingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/start-streaming");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatStreamingConfiguration: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactId: [],
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartEmailContactCommand
 */
export const se_StartEmailContactCommand = async (
  input: StartEmailContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/email");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalRecipients: (_) => _json(_),
      Attachments: (_) => _json(_),
      Attributes: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactFlowId: [],
      Description: [],
      DestinationEmailAddress: [],
      EmailMessage: (_) => _json(_),
      FromEmailAddress: (_) => _json(_),
      InstanceId: [],
      Name: [],
      References: (_) => _json(_),
      RelatedContactId: [],
      SegmentAttributes: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartOutboundChatContactCommand
 */
export const se_StartOutboundChatContactCommand = async (
  input: StartOutboundChatContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/outbound-chat");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attributes: (_) => _json(_),
      ChatDurationInMinutes: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactFlowId: [],
      DestinationEndpoint: (_) => _json(_),
      InitialSystemMessage: (_) => _json(_),
      InstanceId: [],
      ParticipantDetails: (_) => _json(_),
      RelatedContactId: [],
      SegmentAttributes: (_) => _json(_),
      SourceEndpoint: (_) => _json(_),
      SupportedMessagingContentTypes: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartOutboundEmailContactCommand
 */
export const se_StartOutboundEmailContactCommand = async (
  input: StartOutboundEmailContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/outbound-email");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalRecipients: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactId: [],
      DestinationEmailAddress: (_) => _json(_),
      EmailMessage: (_) => _json(_),
      FromEmailAddress: (_) => _json(_),
      InstanceId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartOutboundVoiceContactCommand
 */
export const se_StartOutboundVoiceContactCommand = async (
  input: StartOutboundVoiceContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/outbound-voice");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AnswerMachineDetectionConfig: (_) => _json(_),
      Attributes: (_) => _json(_),
      CampaignId: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactFlowId: [],
      Description: [],
      DestinationPhoneNumber: [],
      InstanceId: [],
      Name: [],
      QueueId: [],
      References: (_) => _json(_),
      RelatedContactId: [],
      SourcePhoneNumber: [],
      TrafficType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartScreenSharingCommand
 */
export const se_StartScreenSharingCommand = async (
  input: StartScreenSharingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/screen-sharing");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactId: [],
      InstanceId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTaskContactCommand
 */
export const se_StartTaskContactCommand = async (
  input: StartTaskContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/task");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attributes: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactFlowId: [],
      Description: [],
      InstanceId: [],
      Name: [],
      PreviousContactId: [],
      QuickConnectId: [],
      References: (_) => _json(_),
      RelatedContactId: [],
      ScheduledTime: (_) => _.getTime() / 1_000,
      SegmentAttributes: (_) => _json(_),
      TaskTemplateId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartWebRTCContactCommand
 */
export const se_StartWebRTCContactCommand = async (
  input: StartWebRTCContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/webrtc");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedCapabilities: (_) => _json(_),
      Attributes: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactFlowId: [],
      Description: [],
      InstanceId: [],
      ParticipantDetails: (_) => _json(_),
      References: (_) => _json(_),
      RelatedContactId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopContactCommand
 */
export const se_StopContactCommand = async (
  input: StopContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/stop");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      DisconnectReason: (_) => _json(_),
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopContactRecordingCommand
 */
export const se_StopContactRecordingCommand = async (
  input: StopContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/stop-recording");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      InitialContactId: [],
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopContactStreamingCommand
 */
export const se_StopContactStreamingCommand = async (
  input: StopContactStreamingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/stop-streaming");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      InstanceId: [],
      StreamingId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SubmitContactEvaluationCommand
 */
export const se_SubmitContactEvaluationCommand = async (
  input: SubmitContactEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-evaluations/{InstanceId}/{EvaluationId}/submit");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationId", () => input.EvaluationId!, "{EvaluationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Answers: (_) => se_EvaluationAnswersInputMap(_, context),
      Notes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SuspendContactRecordingCommand
 */
export const se_SuspendContactRecordingCommand = async (
  input: SuspendContactRecordingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/suspend-recording");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      InitialContactId: [],
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagContactCommand
 */
export const se_TagContactCommand = async (
  input: TagContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/tags");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      InstanceId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TransferContactCommand
 */
export const se_TransferContactCommand = async (
  input: TransferContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/transfer");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContactFlowId: [],
      ContactId: [],
      InstanceId: [],
      QueueId: [],
      UserId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagContactCommand
 */
export const se_UntagContactCommand = async (
  input: UntagContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact/tags/{InstanceId}/{ContactId}");
  b.p("ContactId", () => input.ContactId!, "{ContactId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  const query: any = map({
    [_TK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAgentStatusCommand
 */
export const se_UpdateAgentStatusCommand = async (
  input: UpdateAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agent-status/{InstanceId}/{AgentStatusId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AgentStatusId", () => input.AgentStatusId!, "{AgentStatusId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DisplayOrder: [],
      Name: [],
      ResetOrderNumber: [],
      State: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAuthenticationProfileCommand
 */
export const se_UpdateAuthenticationProfileCommand = async (
  input: UpdateAuthenticationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/authentication-profiles/{InstanceId}/{AuthenticationProfileId}");
  b.p("AuthenticationProfileId", () => input.AuthenticationProfileId!, "{AuthenticationProfileId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedIps: (_) => _json(_),
      BlockedIps: (_) => _json(_),
      Description: [],
      Name: [],
      PeriodicSessionDuration: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactCommand
 */
export const se_UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contacts/{InstanceId}/{ContactId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      References: (_) => _json(_),
      SegmentAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactAttributesCommand
 */
export const se_UpdateContactAttributesCommand = async (
  input: UpdateContactAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/attributes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attributes: (_) => _json(_),
      InitialContactId: [],
      InstanceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactEvaluationCommand
 */
export const se_UpdateContactEvaluationCommand = async (
  input: UpdateContactEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-evaluations/{InstanceId}/{EvaluationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationId", () => input.EvaluationId!, "{EvaluationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Answers: (_) => se_EvaluationAnswersInputMap(_, context),
      Notes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactFlowContentCommand
 */
export const se_UpdateContactFlowContentCommand = async (
  input: UpdateContactFlowContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flows/{InstanceId}/{ContactFlowId}/content");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowId", () => input.ContactFlowId!, "{ContactFlowId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactFlowMetadataCommand
 */
export const se_UpdateContactFlowMetadataCommand = async (
  input: UpdateContactFlowMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flows/{InstanceId}/{ContactFlowId}/metadata");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowId", () => input.ContactFlowId!, "{ContactFlowId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactFlowState: [],
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactFlowModuleContentCommand
 */
export const se_UpdateContactFlowModuleContentCommand = async (
  input: UpdateContactFlowModuleContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowModuleId", () => input.ContactFlowModuleId!, "{ContactFlowModuleId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactFlowModuleMetadataCommand
 */
export const se_UpdateContactFlowModuleMetadataCommand = async (
  input: UpdateContactFlowModuleMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowModuleId", () => input.ContactFlowModuleId!, "{ContactFlowModuleId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      State: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactFlowNameCommand
 */
export const se_UpdateContactFlowNameCommand = async (
  input: UpdateContactFlowNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact-flows/{InstanceId}/{ContactFlowId}/name");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactFlowId", () => input.ContactFlowId!, "{ContactFlowId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactRoutingDataCommand
 */
export const se_UpdateContactRoutingDataCommand = async (
  input: UpdateContactRoutingDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contacts/{InstanceId}/{ContactId}/routing-data");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QueuePriority: [],
      QueueTimeAdjustmentSeconds: [],
      RoutingCriteria: (_) => se_RoutingCriteriaInput(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContactScheduleCommand
 */
export const se_UpdateContactScheduleCommand = async (
  input: UpdateContactScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/schedule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      InstanceId: [],
      ScheduledTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEmailAddressMetadataCommand
 */
export const se_UpdateEmailAddressMetadataCommand = async (
  input: UpdateEmailAddressMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/email-addresses/{InstanceId}/{EmailAddressId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EmailAddressId", () => input.EmailAddressId!, "{EmailAddressId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      Description: [],
      DisplayName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEvaluationFormCommand
 */
export const se_UpdateEvaluationFormCommand = async (
  input: UpdateEvaluationFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/evaluation-forms/{InstanceId}/{EvaluationFormId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("EvaluationFormId", () => input.EvaluationFormId!, "{EvaluationFormId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CreateNewVersion: [],
      Description: [],
      EvaluationFormVersion: [],
      Items: (_) => se_EvaluationFormItemsList(_, context),
      ScoringStrategy: (_) => _json(_),
      Title: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateHoursOfOperationCommand
 */
export const se_UpdateHoursOfOperationCommand = async (
  input: UpdateHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/hours-of-operations/{InstanceId}/{HoursOfOperationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("HoursOfOperationId", () => input.HoursOfOperationId!, "{HoursOfOperationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Config: (_) => _json(_),
      Description: [],
      Name: [],
      TimeZone: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateInstanceAttributeCommand
 */
export const se_UpdateInstanceAttributeCommand = async (
  input: UpdateInstanceAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/attribute/{AttributeType}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AttributeType", () => input.AttributeType!, "{AttributeType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Value: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateInstanceStorageConfigCommand
 */
export const se_UpdateInstanceStorageConfigCommand = async (
  input: UpdateInstanceStorageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/storage-config/{AssociationId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("AssociationId", () => input.AssociationId!, "{AssociationId}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      StorageConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateParticipantRoleConfigCommand
 */
export const se_UpdateParticipantRoleConfigCommand = async (
  input: UpdateParticipantRoleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact/participant-role-config/{InstanceId}/{ContactId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ContactId", () => input.ContactId!, "{ContactId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberCommand
 */
export const se_UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      InstanceId: [],
      TargetArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberMetadataCommand
 */
export const se_UpdatePhoneNumberMetadataCommand = async (
  input: UpdatePhoneNumberMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number/{PhoneNumberId}/metadata");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      PhoneNumberDescription: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePredefinedAttributeCommand
 */
export const se_UpdatePredefinedAttributeCommand = async (
  input: UpdatePredefinedAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/predefined-attributes/{InstanceId}/{Name}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Values: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePromptCommand
 */
export const se_UpdatePromptCommand = async (
  input: UpdatePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prompts/{InstanceId}/{PromptId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("PromptId", () => input.PromptId!, "{PromptId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      S3Uri: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueHoursOfOperationCommand
 */
export const se_UpdateQueueHoursOfOperationCommand = async (
  input: UpdateQueueHoursOfOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/hours-of-operation");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      HoursOfOperationId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueMaxContactsCommand
 */
export const se_UpdateQueueMaxContactsCommand = async (
  input: UpdateQueueMaxContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/max-contacts");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxContacts: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueNameCommand
 */
export const se_UpdateQueueNameCommand = async (
  input: UpdateQueueNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/name");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand
 */
export const se_UpdateQueueOutboundCallerConfigCommand = async (
  input: UpdateQueueOutboundCallerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/outbound-caller-config");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      OutboundCallerConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueOutboundEmailConfigCommand
 */
export const se_UpdateQueueOutboundEmailConfigCommand = async (
  input: UpdateQueueOutboundEmailConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/outbound-email-config");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      OutboundEmailConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQueueStatusCommand
 */
export const se_UpdateQueueStatusCommand = async (
  input: UpdateQueueStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queues/{InstanceId}/{QueueId}/status");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QueueId", () => input.QueueId!, "{QueueId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQuickConnectConfigCommand
 */
export const se_UpdateQuickConnectConfigCommand = async (
  input: UpdateQuickConnectConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/quick-connects/{InstanceId}/{QuickConnectId}/config");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QuickConnectId", () => input.QuickConnectId!, "{QuickConnectId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QuickConnectConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQuickConnectNameCommand
 */
export const se_UpdateQuickConnectNameCommand = async (
  input: UpdateQuickConnectNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/quick-connects/{InstanceId}/{QuickConnectId}/name");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("QuickConnectId", () => input.QuickConnectId!, "{QuickConnectId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoutingProfileAgentAvailabilityTimerCommand
 */
export const se_UpdateRoutingProfileAgentAvailabilityTimerCommand = async (
  input: UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/agent-availability-timer");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AgentAvailabilityTimer: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand
 */
export const se_UpdateRoutingProfileConcurrencyCommand = async (
  input: UpdateRoutingProfileConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MediaConcurrencies: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand
 */
export const se_UpdateRoutingProfileDefaultOutboundQueueCommand = async (
  input: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultOutboundQueueId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoutingProfileNameCommand
 */
export const se_UpdateRoutingProfileNameCommand = async (
  input: UpdateRoutingProfileNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/name");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoutingProfileQueuesCommand
 */
export const se_UpdateRoutingProfileQueuesCommand = async (
  input: UpdateRoutingProfileQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routing-profiles/{InstanceId}/{RoutingProfileId}/queues");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("RoutingProfileId", () => input.RoutingProfileId!, "{RoutingProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QueueConfigs: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRuleCommand
 */
export const se_UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/rules/{InstanceId}/{RuleId}");
  b.p("RuleId", () => input.RuleId!, "{RuleId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Actions: (_) => se_RuleActions(_, context),
      Function: [],
      Name: [],
      PublishStatus: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSecurityProfileCommand
 */
export const se_UpdateSecurityProfileCommand = async (
  input: UpdateSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/security-profiles/{InstanceId}/{SecurityProfileId}");
  b.p("SecurityProfileId", () => input.SecurityProfileId!, "{SecurityProfileId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedAccessControlHierarchyGroupId: [],
      AllowedAccessControlTags: (_) => _json(_),
      Applications: (_) => _json(_),
      Description: [],
      HierarchyRestrictedResources: (_) => _json(_),
      Permissions: (_) => _json(_),
      TagRestrictedResources: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTaskTemplateCommand
 */
export const se_UpdateTaskTemplateCommand = async (
  input: UpdateTaskTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/{InstanceId}/task/template/{TaskTemplateId}");
  b.p("TaskTemplateId", () => input.TaskTemplateId!, "{TaskTemplateId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Constraints: (_) => _json(_),
      ContactFlowId: [],
      Defaults: (_) => _json(_),
      Description: [],
      Fields: (_) => _json(_),
      Name: [],
      SelfAssignFlowId: [],
      Status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTrafficDistributionCommand
 */
export const se_UpdateTrafficDistributionCommand = async (
  input: UpdateTrafficDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/traffic-distribution/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AgentConfig: (_) => _json(_),
      SignInConfig: (_) => _json(_),
      TelephonyConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserHierarchyCommand
 */
export const se_UpdateUserHierarchyCommand = async (
  input: UpdateUserHierarchyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/hierarchy");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      HierarchyGroupId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserHierarchyGroupNameCommand
 */
export const se_UpdateUserHierarchyGroupNameCommand = async (
  input: UpdateUserHierarchyGroupNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name");
  b.p("HierarchyGroupId", () => input.HierarchyGroupId!, "{HierarchyGroupId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserHierarchyStructureCommand
 */
export const se_UpdateUserHierarchyStructureCommand = async (
  input: UpdateUserHierarchyStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user-hierarchy-structure/{InstanceId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      HierarchyStructure: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserIdentityInfoCommand
 */
export const se_UpdateUserIdentityInfoCommand = async (
  input: UpdateUserIdentityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/identity-info");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdentityInfo: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserPhoneConfigCommand
 */
export const se_UpdateUserPhoneConfigCommand = async (
  input: UpdateUserPhoneConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/phone-config");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PhoneConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserProficienciesCommand
 */
export const se_UpdateUserProficienciesCommand = async (
  input: UpdateUserProficienciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/proficiencies");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserProficiencies: (_) => se_UserProficiencyList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserRoutingProfileCommand
 */
export const se_UpdateUserRoutingProfileCommand = async (
  input: UpdateUserRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/routing-profile");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RoutingProfileId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserSecurityProfilesCommand
 */
export const se_UpdateUserSecurityProfilesCommand = async (
  input: UpdateUserSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/users/{InstanceId}/{UserId}/security-profiles");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SecurityProfileIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateViewContentCommand
 */
export const se_UpdateViewContentCommand = async (
  input: UpdateViewContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/views/{InstanceId}/{ViewId}");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ViewId", () => input.ViewId!, "{ViewId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: (_) => _json(_),
      Status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateViewMetadataCommand
 */
export const se_UpdateViewMetadataCommand = async (
  input: UpdateViewMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/views/{InstanceId}/{ViewId}/metadata");
  b.p("InstanceId", () => input.InstanceId!, "{InstanceId}", false);
  b.p("ViewId", () => input.ViewId!, "{ViewId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1ActivateEvaluationFormCommand
 */
export const de_ActivateEvaluationFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEvaluationFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
    EvaluationFormVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateAnalyticsDataSetCommand
 */
export const de_AssociateAnalyticsDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAnalyticsDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSetId: __expectString,
    ResourceShareArn: __expectString,
    ResourceShareId: __expectString,
    TargetAccountId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateApprovedOriginCommand
 */
export const de_AssociateApprovedOriginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApprovedOriginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateBotCommand
 */
export const de_AssociateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateDefaultVocabularyCommand
 */
export const de_AssociateDefaultVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDefaultVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateFlowCommand
 */
export const de_AssociateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateInstanceStorageConfigCommand
 */
export const de_AssociateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssociationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateLambdaFunctionCommand
 */
export const de_AssociateLambdaFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLambdaFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateLexBotCommand
 */
export const de_AssociateLexBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLexBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePhoneNumberContactFlowCommand
 */
export const de_AssociatePhoneNumberContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateQueueQuickConnectsCommand
 */
export const de_AssociateQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateRoutingProfileQueuesCommand
 */
export const de_AssociateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateSecurityKeyCommand
 */
export const de_AssociateSecurityKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSecurityKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssociationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTrafficDistributionGroupUserCommand
 */
export const de_AssociateTrafficDistributionGroupUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrafficDistributionGroupUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateUserProficienciesCommand
 */
export const de_AssociateUserProficienciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserProficienciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1BatchAssociateAnalyticsDataSetCommand
 */
export const de_BatchAssociateAnalyticsDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateAnalyticsDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Created: _json,
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateAnalyticsDataSetCommand
 */
export const de_BatchDisassociateAnalyticsDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateAnalyticsDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Deleted: _json,
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAttachedFileMetadataCommand
 */
export const de_BatchGetAttachedFileMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAttachedFileMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    Files: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFlowAssociationCommand
 */
export const de_BatchGetFlowAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFlowAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FlowAssociationSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutContactCommand
 */
export const de_BatchPutContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailedRequestList: _json,
    SuccessfulRequestList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ClaimPhoneNumberCommand
 */
export const de_ClaimPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CompleteAttachedFileUploadCommand
 */
export const de_CompleteAttachedFileUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteAttachedFileUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAgentStatusCommand
 */
export const de_CreateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AgentStatusARN: __expectString,
    AgentStatusId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactCommand
 */
export const de_CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactArn: __expectString,
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactFlowCommand
 */
export const de_CreateContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactFlowArn: __expectString,
    ContactFlowId: __expectString,
    FlowContentSha256: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactFlowModuleCommand
 */
export const de_CreateContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContactFlowVersionCommand
 */
export const de_CreateContactFlowVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactFlowVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactFlowArn: __expectString,
    Version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailAddressCommand
 */
export const de_CreateEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmailAddressArn: __expectString,
    EmailAddressId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEvaluationFormCommand
 */
export const de_CreateEvaluationFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateHoursOfOperationCommand
 */
export const de_CreateHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HoursOfOperationArn: __expectString,
    HoursOfOperationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateInstanceCommand
 */
export const de_CreateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIntegrationAssociationCommand
 */
export const de_CreateIntegrationAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IntegrationAssociationArn: __expectString,
    IntegrationAssociationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateParticipantCommand
 */
export const de_CreateParticipantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ParticipantCredentials: _json,
    ParticipantId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePersistentContactAssociationCommand
 */
export const de_CreatePersistentContactAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePersistentContactAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContinuedFromContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePredefinedAttributeCommand
 */
export const de_CreatePredefinedAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredefinedAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePromptCommand
 */
export const de_CreatePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PromptARN: __expectString,
    PromptId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQueueCommand
 */
export const de_CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    QueueArn: __expectString,
    QueueId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQuickConnectCommand
 */
export const de_CreateQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    QuickConnectARN: __expectString,
    QuickConnectId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoutingProfileCommand
 */
export const de_CreateRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RoutingProfileArn: __expectString,
    RoutingProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
    RuleId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSecurityProfileCommand
 */
export const de_CreateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SecurityProfileArn: __expectString,
    SecurityProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTaskTemplateCommand
 */
export const de_CreateTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrafficDistributionGroupCommand
 */
export const de_CreateTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUseCaseCommand
 */
export const de_CreateUseCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUseCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UseCaseArn: __expectString,
    UseCaseId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserArn: __expectString,
    UserId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserHierarchyGroupCommand
 */
export const de_CreateUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HierarchyGroupArn: __expectString,
    HierarchyGroupId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateViewCommand
 */
export const de_CreateViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    View: (_) => de_View(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateViewVersionCommand
 */
export const de_CreateViewVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateViewVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    View: (_) => de_View(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVocabularyCommand
 */
export const de_CreateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    State: __expectString,
    VocabularyArn: __expectString,
    VocabularyId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeactivateEvaluationFormCommand
 */
export const de_DeactivateEvaluationFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEvaluationFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
    EvaluationFormVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAttachedFileCommand
 */
export const de_DeleteAttachedFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttachedFileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactEvaluationCommand
 */
export const de_DeleteContactEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactEvaluationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactFlowCommand
 */
export const de_DeleteContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContactFlowModuleCommand
 */
export const de_DeleteContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailAddressCommand
 */
export const de_DeleteEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEvaluationFormCommand
 */
export const de_DeleteEvaluationFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteHoursOfOperationCommand
 */
export const de_DeleteHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInstanceCommand
 */
export const de_DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIntegrationAssociationCommand
 */
export const de_DeleteIntegrationAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePredefinedAttributeCommand
 */
export const de_DeletePredefinedAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredefinedAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePromptCommand
 */
export const de_DeletePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQueueCommand
 */
export const de_DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQuickConnectCommand
 */
export const de_DeleteQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoutingProfileCommand
 */
export const de_DeleteRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSecurityProfileCommand
 */
export const de_DeleteSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTaskTemplateCommand
 */
export const de_DeleteTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrafficDistributionGroupCommand
 */
export const de_DeleteTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUseCaseCommand
 */
export const de_DeleteUseCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUseCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserHierarchyGroupCommand
 */
export const de_DeleteUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteViewCommand
 */
export const de_DeleteViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteViewVersionCommand
 */
export const de_DeleteViewVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteViewVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVocabularyCommand
 */
export const de_DeleteVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    State: __expectString,
    VocabularyArn: __expectString,
    VocabularyId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAgentStatusCommand
 */
export const de_DescribeAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AgentStatus: (_) => de_AgentStatus(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAuthenticationProfileCommand
 */
export const de_DescribeAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuthenticationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthenticationProfile: (_) => de_AuthenticationProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactCommand
 */
export const de_DescribeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Contact: (_) => de_Contact(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactEvaluationCommand
 */
export const de_DescribeContactEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactEvaluationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Evaluation: (_) => de_Evaluation(_, context),
    EvaluationForm: (_) => de_EvaluationFormContent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactFlowCommand
 */
export const de_DescribeContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactFlow: (_) => de_ContactFlow(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactFlowModuleCommand
 */
export const de_DescribeContactFlowModuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactFlowModuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactFlowModule: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEmailAddressCommand
 */
export const de_DescribeEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmailAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTimestamp: __expectString,
    Description: __expectString,
    DisplayName: __expectString,
    EmailAddress: __expectString,
    EmailAddressArn: __expectString,
    EmailAddressId: __expectString,
    ModifiedTimestamp: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEvaluationFormCommand
 */
export const de_DescribeEvaluationFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationForm: (_) => de_EvaluationForm(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeHoursOfOperationCommand
 */
export const de_DescribeHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HoursOfOperation: (_) => de_HoursOfOperation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceCommand
 */
export const de_DescribeInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Instance: (_) => de_Instance(_, context),
    ReplicationConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceAttributeCommand
 */
export const de_DescribeInstanceAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attribute: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceStorageConfigCommand
 */
export const de_DescribeInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StorageConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePhoneNumberCommand
 */
export const de_DescribePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ClaimedPhoneNumberSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePredefinedAttributeCommand
 */
export const de_DescribePredefinedAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredefinedAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PredefinedAttribute: (_) => de_PredefinedAttribute(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePromptCommand
 */
export const de_DescribePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Prompt: (_) => de_Prompt(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeQueueCommand
 */
export const de_DescribeQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Queue: (_) => de_Queue(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeQuickConnectCommand
 */
export const de_DescribeQuickConnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuickConnectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    QuickConnect: (_) => de_QuickConnect(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRoutingProfileCommand
 */
export const de_DescribeRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RoutingProfile: (_) => de_RoutingProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRuleCommand
 */
export const de_DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Rule: (_) => de_Rule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSecurityProfileCommand
 */
export const de_DescribeSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SecurityProfile: (_) => de_SecurityProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTrafficDistributionGroupCommand
 */
export const de_DescribeTrafficDistributionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficDistributionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TrafficDistributionGroup: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUserCommand
 */
export const de_DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUserHierarchyGroupCommand
 */
export const de_DescribeUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HierarchyGroup: (_) => de_HierarchyGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUserHierarchyStructureCommand
 */
export const de_DescribeUserHierarchyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HierarchyStructure: (_) => de_HierarchyStructure(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeViewCommand
 */
export const de_DescribeViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    View: (_) => de_View(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVocabularyCommand
 */
export const de_DescribeVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVocabularyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Vocabulary: (_) => de_Vocabulary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAnalyticsDataSetCommand
 */
export const de_DisassociateAnalyticsDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAnalyticsDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateApprovedOriginCommand
 */
export const de_DisassociateApprovedOriginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApprovedOriginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateBotCommand
 */
export const de_DisassociateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateFlowCommand
 */
export const de_DisassociateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateInstanceStorageConfigCommand
 */
export const de_DisassociateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLambdaFunctionCommand
 */
export const de_DisassociateLambdaFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLambdaFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLexBotCommand
 */
export const de_DisassociateLexBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLexBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommand
 */
export const de_DisassociatePhoneNumberContactFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberContactFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateQueueQuickConnectsCommand
 */
export const de_DisassociateQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand
 */
export const de_DisassociateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSecurityKeyCommand
 */
export const de_DisassociateSecurityKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSecurityKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTrafficDistributionGroupUserCommand
 */
export const de_DisassociateTrafficDistributionGroupUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrafficDistributionGroupUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserProficienciesCommand
 */
export const de_DisassociateUserProficienciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserProficienciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DismissUserContactCommand
 */
export const de_DismissUserContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DismissUserContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAttachedFileCommand
 */
export const de_GetAttachedFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttachedFileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssociatedResourceArn: __expectString,
    CreatedBy: (_) => _json(__expectUnion(_)),
    CreationTime: __expectString,
    DownloadUrlMetadata: _json,
    FileArn: __expectString,
    FileId: __expectString,
    FileName: __expectString,
    FileSizeInBytes: __expectLong,
    FileStatus: __expectString,
    FileUseCaseType: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContactAttributesCommand
 */
export const de_GetContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCurrentMetricDataCommand
 */
export const de_GetCurrentMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    DataSnapshotTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetricResults: (_) => de_CurrentMetricResults(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCurrentUserDataCommand
 */
export const de_GetCurrentUserDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    UserDataList: (_) => de_UserDataList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFederationTokenCommand
 */
export const de_GetFederationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Credentials: (_) => de_Credentials(_, context),
    SignInUrl: __expectString,
    UserArn: __expectString,
    UserId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFlowAssociationCommand
 */
export const de_GetFlowAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FlowId: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetricDataCommand
 */
export const de_GetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MetricResults: (_) => de_HistoricalMetricResults(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetricDataV2Command
 */
export const de_GetMetricDataV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MetricResults: (_) => de_MetricResultsV2(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPromptFileCommand
 */
export const de_GetPromptFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPromptFileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PromptPresignedUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTaskTemplateCommand
 */
export const de_GetTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Constraints: _json,
    ContactFlowId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Defaults: _json,
    Description: __expectString,
    Fields: _json,
    Id: __expectString,
    InstanceId: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SelfAssignFlowId: __expectString,
    Status: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrafficDistributionCommand
 */
export const de_GetTrafficDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AgentConfig: _json,
    Arn: __expectString,
    Id: __expectString,
    SignInConfig: _json,
    TelephonyConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportPhoneNumberCommand
 */
export const de_ImportPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentStatusesCommand
 */
export const de_ListAgentStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentStatusesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AgentStatusSummaryList: (_) => de_AgentStatusSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAnalyticsDataAssociationsCommand
 */
export const de_ListAnalyticsDataAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyticsDataAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Results: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApprovedOriginsCommand
 */
export const de_ListApprovedOriginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovedOriginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Origins: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedContactsCommand
 */
export const de_ListAssociatedContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactSummaryList: (_) => de_AssociatedContactSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAuthenticationProfilesCommand
 */
export const de_ListAuthenticationProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAuthenticationProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthenticationProfileSummaryList: (_) => de_AuthenticationProfileSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBotsCommand
 */
export const de_ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LexBots: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactEvaluationsCommand
 */
export const de_ListContactEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactEvaluationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationSummaryList: (_) => de_EvaluationSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactFlowModulesCommand
 */
export const de_ListContactFlowModulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowModulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactFlowModulesSummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactFlowsCommand
 */
export const de_ListContactFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactFlowSummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactFlowVersionsCommand
 */
export const de_ListContactFlowVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactFlowVersionSummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactReferencesCommand
 */
export const de_ListContactReferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactReferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReferenceSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDefaultVocabulariesCommand
 */
export const de_ListDefaultVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDefaultVocabulariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DefaultVocabularyList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEvaluationFormsCommand
 */
export const de_ListEvaluationFormsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEvaluationFormsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationFormSummaryList: (_) => de_EvaluationFormSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEvaluationFormVersionsCommand
 */
export const de_ListEvaluationFormVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEvaluationFormVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationFormVersionSummaryList: (_) => de_EvaluationFormVersionSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFlowAssociationsCommand
 */
export const de_ListFlowAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FlowAssociationSummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListHoursOfOperationsCommand
 */
export const de_ListHoursOfOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHoursOfOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HoursOfOperationSummaryList: (_) => de_HoursOfOperationSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInstanceAttributesCommand
 */
export const de_ListInstanceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceSummaryList: (_) => de_InstanceSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInstanceStorageConfigsCommand
 */
export const de_ListInstanceStorageConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceStorageConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    StorageConfigs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIntegrationAssociationsCommand
 */
export const de_ListIntegrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IntegrationAssociationSummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLambdaFunctionsCommand
 */
export const de_ListLambdaFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLambdaFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LambdaFunctions: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLexBotsCommand
 */
export const de_ListLexBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LexBots: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersCommand
 */
export const de_ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PhoneNumberSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersV2Command
 */
export const de_ListPhoneNumbersV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ListPhoneNumbersSummaryList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPredefinedAttributesCommand
 */
export const de_ListPredefinedAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredefinedAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PredefinedAttributeSummaryList: (_) => de_PredefinedAttributeSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPromptsCommand
 */
export const de_ListPromptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPromptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PromptSummaryList: (_) => de_PromptSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueueQuickConnectsCommand
 */
export const de_ListQueueQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    QuickConnectSummaryList: (_) => de_QuickConnectSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueuesCommand
 */
export const de_ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    QueueSummaryList: (_) => de_QueueSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQuickConnectsCommand
 */
export const de_ListQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    QuickConnectSummaryList: (_) => de_QuickConnectSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsV2Command
 */
export const de_ListRealtimeContactAnalysisSegmentsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeContactAnalysisSegmentsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Channel: __expectString,
    NextToken: __expectString,
    Segments: (_) => de_RealtimeContactAnalysisSegments(_, context),
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoutingProfileQueuesCommand
 */
export const de_ListRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    RoutingProfileQueueConfigSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoutingProfilesCommand
 */
export const de_ListRoutingProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RoutingProfileSummaryList: (_) => de_RoutingProfileSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RuleSummaryList: (_) => de_RuleSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityKeysCommand
 */
export const de_ListSecurityKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SecurityKeys: (_) => de_SecurityKeysList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityProfileApplicationsCommand
 */
export const de_ListSecurityProfileApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfileApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Applications: _json,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityProfilePermissionsCommand
 */
export const de_ListSecurityProfilePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    Permissions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityProfilesCommand
 */
export const de_ListSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SecurityProfileSummaryList: (_) => de_SecurityProfileSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTaskTemplatesCommand
 */
export const de_ListTaskTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaskTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TaskTemplates: (_) => de_TaskTemplateList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrafficDistributionGroupsCommand
 */
export const de_ListTrafficDistributionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficDistributionGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TrafficDistributionGroupSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrafficDistributionGroupUsersCommand
 */
export const de_ListTrafficDistributionGroupUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficDistributionGroupUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TrafficDistributionGroupUserSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUseCasesCommand
 */
export const de_ListUseCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUseCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    UseCaseSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUserHierarchyGroupsCommand
 */
export const de_ListUserHierarchyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    UserHierarchyGroupSummaryList: (_) => de_HierarchyGroupSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUserProficienciesCommand
 */
export const de_ListUserProficienciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProficienciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    UserProficiencyList: (_) => de_UserProficiencyList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    UserSummaryList: (_) => de_UserSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListViewsCommand
 */
export const de_ListViewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListViewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ViewsSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListViewVersionsCommand
 */
export const de_ListViewVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListViewVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ViewVersionSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1MonitorContactCommand
 */
export const de_MonitorContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MonitorContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactArn: __expectString,
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PauseContactCommand
 */
export const de_PauseContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutUserStatusCommand
 */
export const de_PutUserStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ReleasePhoneNumberCommand
 */
export const de_ReleasePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ReplicateInstanceCommand
 */
export const de_ReplicateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResumeContactCommand
 */
export const de_ResumeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResumeContactRecordingCommand
 */
export const de_ResumeContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SearchAgentStatusesCommand
 */
export const de_SearchAgentStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAgentStatusesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AgentStatuses: (_) => de_AgentStatusList(_, context),
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const de_SearchAvailablePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AvailableNumbersList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchContactFlowModulesCommand
 */
export const de_SearchContactFlowModulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContactFlowModulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    ContactFlowModules: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchContactFlowsCommand
 */
export const de_SearchContactFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContactFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    ContactFlows: (_) => de_ContactFlowSearchSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchContactsCommand
 */
export const de_SearchContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Contacts: (_) => de_Contacts(_, context),
    NextToken: __expectString,
    TotalCount: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchEmailAddressesCommand
 */
export const de_SearchEmailAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchEmailAddressesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    EmailAddresses: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchHoursOfOperationsCommand
 */
export const de_SearchHoursOfOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchHoursOfOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    HoursOfOperations: (_) => de_HoursOfOperationList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchPredefinedAttributesCommand
 */
export const de_SearchPredefinedAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPredefinedAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    PredefinedAttributes: (_) => de_PredefinedAttributeSearchSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchPromptsCommand
 */
export const de_SearchPromptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPromptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    Prompts: (_) => de_PromptList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchQueuesCommand
 */
export const de_SearchQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    Queues: (_) => de_QueueSearchSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchQuickConnectsCommand
 */
export const de_SearchQuickConnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQuickConnectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    QuickConnects: (_) => de_QuickConnectSearchSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchResourceTagsCommand
 */
export const de_SearchResourceTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourceTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchRoutingProfilesCommand
 */
export const de_SearchRoutingProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoutingProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    RoutingProfiles: (_) => de_RoutingProfileList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchSecurityProfilesCommand
 */
export const de_SearchSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    SecurityProfiles: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchUserHierarchyGroupsCommand
 */
export const de_SearchUserHierarchyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUserHierarchyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    UserHierarchyGroups: (_) => de_UserHierarchyGroupList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchUsersCommand
 */
export const de_SearchUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateTotalCount: __expectLong,
    NextToken: __expectString,
    Users: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchVocabulariesCommand
 */
export const de_SearchVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchVocabulariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VocabularySummaryList: (_) => de_VocabularySummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendChatIntegrationEventCommand
 */
export const de_SendChatIntegrationEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChatIntegrationEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InitialContactId: __expectString,
    NewChatCreated: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendOutboundEmailCommand
 */
export const de_SendOutboundEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendOutboundEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartAttachedFileUploadCommand
 */
export const de_StartAttachedFileUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAttachedFileUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedBy: (_) => _json(__expectUnion(_)),
    CreationTime: __expectString,
    FileArn: __expectString,
    FileId: __expectString,
    FileStatus: __expectString,
    UploadUrlMetadata: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartChatContactCommand
 */
export const de_StartChatContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChatContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactId: __expectString,
    ContinuedFromContactId: __expectString,
    ParticipantId: __expectString,
    ParticipantToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartContactEvaluationCommand
 */
export const de_StartContactEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactEvaluationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationArn: __expectString,
    EvaluationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartContactRecordingCommand
 */
export const de_StartContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartContactStreamingCommand
 */
export const de_StartContactStreamingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContactStreamingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StreamingId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartEmailContactCommand
 */
export const de_StartEmailContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEmailContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartOutboundChatContactCommand
 */
export const de_StartOutboundChatContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundChatContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartOutboundEmailContactCommand
 */
export const de_StartOutboundEmailContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundEmailContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartOutboundVoiceContactCommand
 */
export const de_StartOutboundVoiceContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundVoiceContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartScreenSharingCommand
 */
export const de_StartScreenSharingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartScreenSharingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartTaskContactCommand
 */
export const de_StartTaskContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTaskContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartWebRTCContactCommand
 */
export const de_StartWebRTCContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWebRTCContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionData: _json,
    ContactId: __expectString,
    ParticipantId: __expectString,
    ParticipantToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopContactCommand
 */
export const de_StopContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopContactRecordingCommand
 */
export const de_StopContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopContactStreamingCommand
 */
export const de_StopContactStreamingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactStreamingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SubmitContactEvaluationCommand
 */
export const de_SubmitContactEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitContactEvaluationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationArn: __expectString,
    EvaluationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SuspendContactRecordingCommand
 */
export const de_SuspendContactRecordingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendContactRecordingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagContactCommand
 */
export const de_TagContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TransferContactCommand
 */
export const de_TransferContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactArn: __expectString,
    ContactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UntagContactCommand
 */
export const de_UntagContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentStatusCommand
 */
export const de_UpdateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAuthenticationProfileCommand
 */
export const de_UpdateAuthenticationProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthenticationProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactCommand
 */
export const de_UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactAttributesCommand
 */
export const de_UpdateContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactEvaluationCommand
 */
export const de_UpdateContactEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactEvaluationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationArn: __expectString,
    EvaluationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowContentCommand
 */
export const de_UpdateContactFlowContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowMetadataCommand
 */
export const de_UpdateContactFlowMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowModuleContentCommand
 */
export const de_UpdateContactFlowModuleContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowModuleMetadataCommand
 */
export const de_UpdateContactFlowModuleMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowModuleMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactFlowNameCommand
 */
export const de_UpdateContactFlowNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactFlowNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactRoutingDataCommand
 */
export const de_UpdateContactRoutingDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactRoutingDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContactScheduleCommand
 */
export const de_UpdateContactScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEmailAddressMetadataCommand
 */
export const de_UpdateEmailAddressMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailAddressMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmailAddressArn: __expectString,
    EmailAddressId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEvaluationFormCommand
 */
export const de_UpdateEvaluationFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
    EvaluationFormVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateHoursOfOperationCommand
 */
export const de_UpdateHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInstanceAttributeCommand
 */
export const de_UpdateInstanceAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInstanceStorageConfigCommand
 */
export const de_UpdateInstanceStorageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceStorageConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateParticipantRoleConfigCommand
 */
export const de_UpdateParticipantRoleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParticipantRoleConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePhoneNumberCommand
 */
export const de_UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePhoneNumberMetadataCommand
 */
export const de_UpdatePhoneNumberMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePredefinedAttributeCommand
 */
export const de_UpdatePredefinedAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePredefinedAttributeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePromptCommand
 */
export const de_UpdatePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PromptARN: __expectString,
    PromptId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueHoursOfOperationCommand
 */
export const de_UpdateQueueHoursOfOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueHoursOfOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueMaxContactsCommand
 */
export const de_UpdateQueueMaxContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueMaxContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueNameCommand
 */
export const de_UpdateQueueNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand
 */
export const de_UpdateQueueOutboundCallerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueOutboundCallerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueOutboundEmailConfigCommand
 */
export const de_UpdateQueueOutboundEmailConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueOutboundEmailConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueStatusCommand
 */
export const de_UpdateQueueStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQuickConnectConfigCommand
 */
export const de_UpdateQuickConnectConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQuickConnectNameCommand
 */
export const de_UpdateQuickConnectNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickConnectNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileAgentAvailabilityTimerCommand
 */
export const de_UpdateRoutingProfileAgentAvailabilityTimerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileAgentAvailabilityTimerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand
 */
export const de_UpdateRoutingProfileConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand
 */
export const de_UpdateRoutingProfileDefaultOutboundQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileNameCommand
 */
export const de_UpdateRoutingProfileNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoutingProfileQueuesCommand
 */
export const de_UpdateRoutingProfileQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingProfileQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRuleCommand
 */
export const de_UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSecurityProfileCommand
 */
export const de_UpdateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTaskTemplateCommand
 */
export const de_UpdateTaskTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTaskTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Constraints: _json,
    ContactFlowId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Defaults: _json,
    Description: __expectString,
    Fields: _json,
    Id: __expectString,
    InstanceId: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SelfAssignFlowId: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTrafficDistributionCommand
 */
export const de_UpdateTrafficDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficDistributionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserHierarchyCommand
 */
export const de_UpdateUserHierarchyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand
 */
export const de_UpdateUserHierarchyGroupNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyGroupNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserHierarchyStructureCommand
 */
export const de_UpdateUserHierarchyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserIdentityInfoCommand
 */
export const de_UpdateUserIdentityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserIdentityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserPhoneConfigCommand
 */
export const de_UpdateUserPhoneConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPhoneConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserProficienciesCommand
 */
export const de_UpdateUserProficienciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProficienciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserRoutingProfileCommand
 */
export const de_UpdateUserRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserSecurityProfilesCommand
 */
export const de_UpdateUserSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateViewContentCommand
 */
export const de_UpdateViewContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateViewContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    View: (_) => de_View(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateViewMetadataCommand
 */
export const de_UpdateViewMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateViewMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceConflictException":
    case "com.amazonaws.connect#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connect#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.connect#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.connect#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.connect#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.connect#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidContactFlowException":
    case "com.amazonaws.connect#InvalidContactFlowException":
      throw await de_InvalidContactFlowExceptionRes(parsedOutput, context);
    case "InvalidContactFlowModuleException":
    case "com.amazonaws.connect#InvalidContactFlowModuleException":
      throw await de_InvalidContactFlowModuleExceptionRes(parsedOutput, context);
    case "PropertyValidationException":
    case "com.amazonaws.connect#PropertyValidationException":
      throw await de_PropertyValidationExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.connect#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.connect#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.connect#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ContactFlowNotPublishedException":
    case "com.amazonaws.connect#ContactFlowNotPublishedException":
      throw await de_ContactFlowNotPublishedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.connect#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    case "OutputTypeNotFoundException":
    case "com.amazonaws.connect#OutputTypeNotFoundException":
      throw await de_OutputTypeNotFoundExceptionRes(parsedOutput, context);
    case "MaximumResultReturnedException":
    case "com.amazonaws.connect#MaximumResultReturnedException":
      throw await de_MaximumResultReturnedExceptionRes(parsedOutput, context);
    case "DestinationNotAllowedException":
    case "com.amazonaws.connect#DestinationNotAllowedException":
      throw await de_DestinationNotAllowedExceptionRes(parsedOutput, context);
    case "OutboundContactNotPermittedException":
    case "com.amazonaws.connect#OutboundContactNotPermittedException":
      throw await de_OutboundContactNotPermittedExceptionRes(parsedOutput, context);
    case "ContactNotFoundException":
    case "com.amazonaws.connect#ContactNotFoundException":
      throw await de_ContactNotFoundExceptionRes(parsedOutput, context);
    case "ConditionalOperationFailedException":
    case "com.amazonaws.connect#ConditionalOperationFailedException":
      throw await de_ConditionalOperationFailedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConditionalOperationFailedExceptionRes
 */
const de_ConditionalOperationFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionalOperationFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConditionalOperationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    problems: _json,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Problems: _json,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Reason: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MaximumResultReturnedExceptionRes
 */
const de_MaximumResultReturnedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumResultReturnedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MaximumResultReturnedException({
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new OutboundContactNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1OutputTypeNotFoundExceptionRes
 */
const de_OutputTypeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutputTypeNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new OutputTypeNotFoundException({
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
  const doc = take(data, {
    Message: __expectString,
    PropertyList: _json,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Reason: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UserNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AgentConfig omitted.

// se_AgentHierarchyGroups omitted.

// se_AgentIds omitted.

// se_AgentResourceIdList omitted.

// se_AgentsCriteria omitted.

// se_AgentsMinOneMaxHundred omitted.

/**
 * serializeAws_restJson1AgentStatusSearchConditionList
 */
const se_AgentStatusSearchConditionList = (input: AgentStatusSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AgentStatusSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1AgentStatusSearchCriteria
 */
const se_AgentStatusSearchCriteria = (input: AgentStatusSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_AgentStatusSearchConditionList(_, context),
    OrConditions: (_) => se_AgentStatusSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_AgentStatusSearchFilter omitted.

// se_AllowedAccessControlTags omitted.

// se_AllowedCapabilities omitted.

// se_AllowedMonitorCapabilities omitted.

// se_AnswerMachineDetectionConfig omitted.

// se_Application omitted.

// se_ApplicationPermissions omitted.

// se_Applications omitted.

// se_AssignContactCategoryActionDefinition omitted.

// se_AttributeAndCondition omitted.

/**
 * serializeAws_restJson1AttributeCondition
 */
const se_AttributeCondition = (input: AttributeCondition, context: __SerdeContext): any => {
  return take(input, {
    ComparisonOperator: [],
    MatchCriteria: _json,
    Name: [],
    ProficiencyLevel: __serializeFloat,
    Value: [],
  });
};

// se_AttributeOrConditionList omitted.

// se_Attributes omitted.

// se_Campaign omitted.

// se_ChannelList omitted.

// se_Channels omitted.

// se_ChatEvent omitted.

// se_ChatMessage omitted.

// se_ChatParticipantRoleConfig omitted.

// se_ChatStreamingConfiguration omitted.

// se_CommonAttributeAndCondition omitted.

// se_CommonAttributeOrConditionList omitted.

// se_Condition omitted.

// se_Conditions omitted.

// se_ContactAnalysis omitted.

// se_ContactDataRequest omitted.

// se_ContactDataRequestList omitted.

// se_ContactFilter omitted.

/**
 * serializeAws_restJson1ContactFlowModuleSearchConditionList
 */
const se_ContactFlowModuleSearchConditionList = (
  input: ContactFlowModuleSearchCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContactFlowModuleSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1ContactFlowModuleSearchCriteria
 */
const se_ContactFlowModuleSearchCriteria = (input: ContactFlowModuleSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_ContactFlowModuleSearchConditionList(_, context),
    OrConditions: (_) => se_ContactFlowModuleSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_ContactFlowModuleSearchFilter omitted.

/**
 * serializeAws_restJson1ContactFlowSearchConditionList
 */
const se_ContactFlowSearchConditionList = (input: ContactFlowSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContactFlowSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1ContactFlowSearchCriteria
 */
const se_ContactFlowSearchCriteria = (input: ContactFlowSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_ContactFlowSearchConditionList(_, context),
    OrConditions: (_) => se_ContactFlowSearchConditionList(_, context),
    StateCondition: [],
    StatusCondition: [],
    StringCondition: _json,
    TypeCondition: [],
  });
};

// se_ContactFlowSearchFilter omitted.

// se_ContactReferences omitted.

// se_ContactStates omitted.

// se_ContactTagMap omitted.

// se_ControlPlaneAttributeFilter omitted.

// se_ControlPlaneTagFilter omitted.

// se_ControlPlaneUserAttributeFilter omitted.

/**
 * serializeAws_restJson1CreateCaseActionDefinition
 */
const se_CreateCaseActionDefinition = (input: CreateCaseActionDefinition, context: __SerdeContext): any => {
  return take(input, {
    Fields: (_) => se_FieldValues(_, context),
    TemplateId: [],
  });
};

// se_CreatedByInfo omitted.

// se_CrossChannelBehavior omitted.

// se_CurrentMetric omitted.

// se_CurrentMetrics omitted.

// se_CurrentMetricSortCriteria omitted.

// se_CurrentMetricSortCriteriaMaxOne omitted.

// se_DataSetIds omitted.

// se_DisconnectReason omitted.

// se_Distribution omitted.

// se_DistributionList omitted.

// se_EmailAddressInfo omitted.

// se_EmailAddressRecipientList omitted.

/**
 * serializeAws_restJson1EmailAddressSearchConditionList
 */
const se_EmailAddressSearchConditionList = (input: EmailAddressSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EmailAddressSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1EmailAddressSearchCriteria
 */
const se_EmailAddressSearchCriteria = (input: EmailAddressSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_EmailAddressSearchConditionList(_, context),
    OrConditions: (_) => se_EmailAddressSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_EmailAddressSearchFilter omitted.

// se_EmailAttachment omitted.

// se_EmailAttachments omitted.

// se_EmailHeaders omitted.

// se_EmptyFieldValue omitted.

// se_EncryptionConfig omitted.

// se_EndAssociatedTasksActionDefinition omitted.

// se_Endpoint omitted.

/**
 * serializeAws_restJson1EvaluationAnswerData
 */
const se_EvaluationAnswerData = (input: EvaluationAnswerData, context: __SerdeContext): any => {
  return EvaluationAnswerData.visit(input, {
    NotApplicable: (value) => ({ NotApplicable: value }),
    NumericValue: (value) => ({ NumericValue: __serializeFloat(value) }),
    StringValue: (value) => ({ StringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1EvaluationAnswerInput
 */
const se_EvaluationAnswerInput = (input: EvaluationAnswerInput, context: __SerdeContext): any => {
  return take(input, {
    Value: (_) => se_EvaluationAnswerData(_, context),
  });
};

/**
 * serializeAws_restJson1EvaluationAnswersInputMap
 */
const se_EvaluationAnswersInputMap = (input: Record<string, EvaluationAnswerInput>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_EvaluationAnswerInput(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1EvaluationFormItem
 */
const se_EvaluationFormItem = (input: EvaluationFormItem, context: __SerdeContext): any => {
  return EvaluationFormItem.visit(input, {
    Question: (value) => ({ Question: se_EvaluationFormQuestion(value, context) }),
    Section: (value) => ({ Section: se_EvaluationFormSection(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1EvaluationFormItemsList
 */
const se_EvaluationFormItemsList = (input: EvaluationFormItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EvaluationFormItem(entry, context);
    });
};

// se_EvaluationFormNumericQuestionAutomation omitted.

// se_EvaluationFormNumericQuestionOption omitted.

// se_EvaluationFormNumericQuestionOptionList omitted.

// se_EvaluationFormNumericQuestionProperties omitted.

/**
 * serializeAws_restJson1EvaluationFormQuestion
 */
const se_EvaluationFormQuestion = (input: EvaluationFormQuestion, context: __SerdeContext): any => {
  return take(input, {
    Instructions: [],
    NotApplicableEnabled: [],
    QuestionType: [],
    QuestionTypeProperties: _json,
    RefId: [],
    Title: [],
    Weight: __serializeFloat,
  });
};

// se_EvaluationFormQuestionTypeProperties omitted.

// se_EvaluationFormScoringStrategy omitted.

/**
 * serializeAws_restJson1EvaluationFormSection
 */
const se_EvaluationFormSection = (input: EvaluationFormSection, context: __SerdeContext): any => {
  return take(input, {
    Instructions: [],
    Items: (_) => se_EvaluationFormItemsList(_, context),
    RefId: [],
    Title: [],
    Weight: __serializeFloat,
  });
};

// se_EvaluationFormSingleSelectQuestionAutomation omitted.

// se_EvaluationFormSingleSelectQuestionAutomationOption omitted.

// se_EvaluationFormSingleSelectQuestionAutomationOptionList omitted.

// se_EvaluationFormSingleSelectQuestionOption omitted.

// se_EvaluationFormSingleSelectQuestionOptionList omitted.

// se_EvaluationFormSingleSelectQuestionProperties omitted.

// se_EvaluationNote omitted.

// se_EvaluationNotesMap omitted.

// se_EventBridgeActionDefinition omitted.

/**
 * serializeAws_restJson1Expression
 */
const se_Expression = (input: Expression, context: __SerdeContext): any => {
  return take(input, {
    AndExpression: (_) => se_Expressions(_, context),
    AttributeCondition: (_) => se_AttributeCondition(_, context),
    OrExpression: (_) => se_Expressions(_, context),
  });
};

/**
 * serializeAws_restJson1Expressions
 */
const se_Expressions = (input: Expression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Expression(entry, context);
    });
};

/**
 * serializeAws_restJson1FieldValue
 */
const se_FieldValue = (input: FieldValue, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    Value: (_) => se_FieldValueUnion(_, context),
  });
};

/**
 * serializeAws_restJson1FieldValues
 */
const se_FieldValues = (input: FieldValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldValue(entry, context);
    });
};

/**
 * serializeAws_restJson1FieldValueUnion
 */
const se_FieldValueUnion = (input: FieldValueUnion, context: __SerdeContext): any => {
  return take(input, {
    BooleanValue: [],
    DoubleValue: __serializeFloat,
    EmptyValue: _json,
    StringValue: [],
  });
};

// se_FileIdList omitted.

// se_Filters omitted.

// se_FiltersV2List omitted.

// se_FilterV2 omitted.

// se_FilterValueList omitted.

// se_Groupings omitted.

// se_GroupingsV2 omitted.

// se_HierarchyGroupCondition omitted.

// se_HierarchyGroupIdList omitted.

// se_HierarchyLevelUpdate omitted.

// se_HierarchyRestrictedResourceList omitted.

// se_HierarchyStructureUpdate omitted.

/**
 * serializeAws_restJson1HistoricalMetric
 */
const se_HistoricalMetric = (input: HistoricalMetric, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    Statistic: [],
    Threshold: (_) => se_Threshold(_, context),
    Unit: [],
  });
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

// se_HoursOfOperationConfig omitted.

// se_HoursOfOperationConfigList omitted.

/**
 * serializeAws_restJson1HoursOfOperationSearchConditionList
 */
const se_HoursOfOperationSearchConditionList = (
  input: HoursOfOperationSearchCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HoursOfOperationSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1HoursOfOperationSearchCriteria
 */
const se_HoursOfOperationSearchCriteria = (input: HoursOfOperationSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_HoursOfOperationSearchConditionList(_, context),
    OrConditions: (_) => se_HoursOfOperationSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_HoursOfOperationSearchFilter omitted.

// se_HoursOfOperationTimeSlice omitted.

// se_InboundAdditionalRecipients omitted.

// se_InboundEmailContent omitted.

// se_InboundRawMessage omitted.

// se_InitiationMethodList omitted.

// se_InstanceStorageConfig omitted.

// se_IntervalDetails omitted.

// se_InvisibleFieldInfo omitted.

// se_InvisibleTaskTemplateFields omitted.

// se_IpCidrList omitted.

// se_KinesisFirehoseConfig omitted.

// se_KinesisStreamConfig omitted.

// se_KinesisVideoStreamConfig omitted.

// se_LexBot omitted.

// se_LexV2Bot omitted.

// se_ListCondition omitted.

// se_MatchCriteria omitted.

// se_MediaConcurrencies omitted.

// se_MediaConcurrency omitted.

// se_MetricFiltersV2List omitted.

// se_MetricFilterV2 omitted.

// se_MetricFilterValueList omitted.

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
  return take(input, {
    MetricFilters: _json,
    Name: [],
    Threshold: (_) => se_ThresholdCollections(_, context),
  });
};

// se_NewSessionDetails omitted.

// se_NotificationRecipientType omitted.

// se_NumberCondition omitted.

// se_NumericQuestionPropertyValueAutomation omitted.

// se_OutboundAdditionalRecipients omitted.

// se_OutboundCallerConfig omitted.

// se_OutboundEmailConfig omitted.

// se_OutboundEmailContent omitted.

// se_OutboundRawMessage omitted.

// se_ParticipantCapabilities omitted.

// se_ParticipantDetails omitted.

// se_ParticipantDetailsToAdd omitted.

// se_ParticipantTimerConfigList omitted.

// se_ParticipantTimerConfiguration omitted.

// se_ParticipantTimerValue omitted.

// se_PermissionsList omitted.

// se_PersistentChat omitted.

// se_PhoneNumberCountryCodes omitted.

// se_PhoneNumberQuickConnectConfig omitted.

// se_PhoneNumberTypes omitted.

/**
 * serializeAws_restJson1PredefinedAttributeSearchConditionList
 */
const se_PredefinedAttributeSearchConditionList = (
  input: PredefinedAttributeSearchCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PredefinedAttributeSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1PredefinedAttributeSearchCriteria
 */
const se_PredefinedAttributeSearchCriteria = (
  input: PredefinedAttributeSearchCriteria,
  context: __SerdeContext
): any => {
  return take(input, {
    AndConditions: (_) => se_PredefinedAttributeSearchConditionList(_, context),
    OrConditions: (_) => se_PredefinedAttributeSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_PredefinedAttributeStringValuesList omitted.

// se_PredefinedAttributeValues omitted.

/**
 * serializeAws_restJson1PromptSearchConditionList
 */
const se_PromptSearchConditionList = (input: PromptSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PromptSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1PromptSearchCriteria
 */
const se_PromptSearchCriteria = (input: PromptSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_PromptSearchConditionList(_, context),
    OrConditions: (_) => se_PromptSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_PromptSearchFilter omitted.

// se_QueueIdList omitted.

// se_QueueQuickConnectConfig omitted.

// se_Queues omitted.

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
  return take(input, {
    AndConditions: (_) => se_QueueSearchConditionList(_, context),
    OrConditions: (_) => se_QueueSearchConditionList(_, context),
    QueueTypeCondition: [],
    StringCondition: _json,
  });
};

// se_QueueSearchFilter omitted.

// se_QuickConnectConfig omitted.

/**
 * serializeAws_restJson1QuickConnectSearchConditionList
 */
const se_QuickConnectSearchConditionList = (input: QuickConnectSearchCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_QuickConnectSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1QuickConnectSearchCriteria
 */
const se_QuickConnectSearchCriteria = (input: QuickConnectSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_QuickConnectSearchConditionList(_, context),
    OrConditions: (_) => se_QuickConnectSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_QuickConnectSearchFilter omitted.

// se_QuickConnectsList omitted.

// se_ReadOnlyFieldInfo omitted.

// se_ReadOnlyTaskTemplateFields omitted.

// se_RealTimeContactAnalysisSegmentTypes omitted.

// se_Reference omitted.

// se_RequiredFieldInfo omitted.

// se_RequiredTaskTemplateFields omitted.

// se_resourceArnListMaxLimit100 omitted.

// se_ResourceTagsSearchCriteria omitted.

// se_ResourceTypeList omitted.

/**
 * serializeAws_restJson1RoutingCriteriaInput
 */
const se_RoutingCriteriaInput = (input: RoutingCriteriaInput, context: __SerdeContext): any => {
  return take(input, {
    Steps: (_) => se_RoutingCriteriaInputSteps(_, context),
  });
};

/**
 * serializeAws_restJson1RoutingCriteriaInputStep
 */
const se_RoutingCriteriaInputStep = (input: RoutingCriteriaInputStep, context: __SerdeContext): any => {
  return take(input, {
    Expiry: _json,
    Expression: (_) => se_Expression(_, context),
  });
};

// se_RoutingCriteriaInputStepExpiry omitted.

/**
 * serializeAws_restJson1RoutingCriteriaInputSteps
 */
const se_RoutingCriteriaInputSteps = (input: RoutingCriteriaInputStep[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoutingCriteriaInputStep(entry, context);
    });
};

// se_RoutingExpressions omitted.

// se_RoutingProfileQueueConfig omitted.

// se_RoutingProfileQueueConfigList omitted.

// se_RoutingProfileQueueReference omitted.

// se_RoutingProfileQueueReferenceList omitted.

// se_RoutingProfiles omitted.

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
  return take(input, {
    AndConditions: (_) => se_RoutingProfileSearchConditionList(_, context),
    OrConditions: (_) => se_RoutingProfileSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_RoutingProfileSearchFilter omitted.

/**
 * serializeAws_restJson1RuleAction
 */
const se_RuleAction = (input: RuleAction, context: __SerdeContext): any => {
  return take(input, {
    ActionType: [],
    AssignContactCategoryAction: _json,
    CreateCaseAction: (_) => se_CreateCaseActionDefinition(_, context),
    EndAssociatedTasksAction: _json,
    EventBridgeAction: _json,
    SendNotificationAction: _json,
    SubmitAutoEvaluationAction: _json,
    TaskAction: _json,
    UpdateCaseAction: (_) => se_UpdateCaseActionDefinition(_, context),
  });
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

// se_RuleTriggerEventSource omitted.

// se_S3Config omitted.

// se_SearchableContactAttributes omitted.

// se_SearchableContactAttributesCriteria omitted.

// se_SearchableContactAttributesCriteriaList omitted.

// se_SearchableContactAttributeValueList omitted.

// se_SearchableSegmentAttributes omitted.

// se_SearchableSegmentAttributesCriteria omitted.

// se_SearchableSegmentAttributesCriteriaList omitted.

// se_SearchableSegmentAttributeValueList omitted.

/**
 * serializeAws_restJson1SearchContactsTimeRange
 */
const se_SearchContactsTimeRange = (input: SearchContactsTimeRange, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    StartTime: (_) => _.getTime() / 1_000,
    Type: [],
  });
};

// se_SearchCriteria omitted.

// se_SearchTextList omitted.

// se_SecurityProfileIds omitted.

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
  return take(input, {
    AndConditions: (_) => se_SecurityProfileSearchConditionList(_, context),
    OrConditions: (_) => se_SecurityProfileSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_SecurityProfilesSearchFilter omitted.

// se_SegmentAttributes omitted.

// se_SegmentAttributeValue omitted.

// se_SendNotificationActionDefinition omitted.

// se_SignInConfig omitted.

// se_SignInDistribution omitted.

// se_SignInDistributionList omitted.

// se_SingleSelectOptions omitted.

// se_SingleSelectQuestionRuleCategoryAutomation omitted.

// se_Sort omitted.

// se_SourceCampaign omitted.

// se_StringCondition omitted.

// se_SubmitAutoEvaluationActionDefinition omitted.

// se_SupportedMessagingContentTypes omitted.

// se_TagAndConditionList omitted.

// se_TagCondition omitted.

// se_TagMap omitted.

// se_TagOrConditionList omitted.

// se_TagRestrictedResourceList omitted.

// se_TagSearchCondition omitted.

// se_TaskActionDefinition omitted.

// se_TaskTemplateConstraints omitted.

// se_TaskTemplateDefaultFieldValue omitted.

// se_TaskTemplateDefaultFieldValueList omitted.

// se_TaskTemplateDefaults omitted.

// se_TaskTemplateField omitted.

// se_TaskTemplateFieldIdentifier omitted.

// se_TaskTemplateFields omitted.

// se_TelephonyConfig omitted.

// se_TemplateAttributes omitted.

// se_TemplatedMessageConfig omitted.

/**
 * serializeAws_restJson1Threshold
 */
const se_Threshold = (input: Threshold, context: __SerdeContext): any => {
  return take(input, {
    Comparison: [],
    ThresholdValue: __serializeFloat,
  });
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
  return take(input, {
    Comparison: [],
    ThresholdValue: __serializeFloat,
  });
};

// se_Transcript omitted.

// se_TranscriptCriteria omitted.

// se_TranscriptCriteriaList omitted.

/**
 * serializeAws_restJson1UpdateCaseActionDefinition
 */
const se_UpdateCaseActionDefinition = (input: UpdateCaseActionDefinition, context: __SerdeContext): any => {
  return take(input, {
    Fields: (_) => se_FieldValues(_, context),
  });
};

// se_UpdateParticipantRoleConfigChannelInfo omitted.

// se_UserDataFilters omitted.

// se_UserDataHierarchyGroups omitted.

/**
 * serializeAws_restJson1UserHierarchyGroupSearchConditionList
 */
const se_UserHierarchyGroupSearchConditionList = (
  input: UserHierarchyGroupSearchCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UserHierarchyGroupSearchCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1UserHierarchyGroupSearchCriteria
 */
const se_UserHierarchyGroupSearchCriteria = (input: UserHierarchyGroupSearchCriteria, context: __SerdeContext): any => {
  return take(input, {
    AndConditions: (_) => se_UserHierarchyGroupSearchConditionList(_, context),
    OrConditions: (_) => se_UserHierarchyGroupSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_UserHierarchyGroupSearchFilter omitted.

// se_UserIdentityInfo omitted.

// se_UserIdList omitted.

// se_UserInfo omitted.

// se_UserPhoneConfig omitted.

/**
 * serializeAws_restJson1UserProficiency
 */
const se_UserProficiency = (input: UserProficiency, context: __SerdeContext): any => {
  return take(input, {
    AttributeName: [],
    AttributeValue: [],
    Level: __serializeFloat,
  });
};

// se_UserProficiencyDisassociate omitted.

// se_UserProficiencyDisassociateList omitted.

/**
 * serializeAws_restJson1UserProficiencyList
 */
const se_UserProficiencyList = (input: UserProficiency[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UserProficiency(entry, context);
    });
};

// se_UserQuickConnectConfig omitted.

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
  return take(input, {
    AndConditions: (_) => se_UserSearchConditionList(_, context),
    HierarchyGroupCondition: _json,
    ListCondition: _json,
    OrConditions: (_) => se_UserSearchConditionList(_, context),
    StringCondition: _json,
  });
};

// se_UserSearchFilter omitted.

// se_UserTagMap omitted.

// se_ViewActions omitted.

// se_ViewInputContent omitted.

// se_VoiceRecordingConfiguration omitted.

// de_ActionSummaries omitted.

// de_ActionSummary omitted.

// de_AdditionalEmailRecipients omitted.

// de_AgentConfig omitted.

/**
 * deserializeAws_restJson1AgentContactReference
 */
const de_AgentContactReference = (output: any, context: __SerdeContext): AgentContactReference => {
  return take(output, {
    AgentContactState: __expectString,
    Channel: __expectString,
    ConnectedToAgentTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContactId: __expectString,
    InitiationMethod: __expectString,
    Queue: _json,
    StateStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentContactReferenceList
 */
const de_AgentContactReferenceList = (output: any, context: __SerdeContext): AgentContactReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentContactReference(entry, context);
    });
  return retVal;
};

// de_AgentHierarchyGroup omitted.

// de_AgentIds omitted.

/**
 * deserializeAws_restJson1AgentInfo
 */
const de_AgentInfo = (output: any, context: __SerdeContext): AgentInfo => {
  return take(output, {
    AgentPauseDurationInSeconds: __expectInt32,
    Capabilities: _json,
    ConnectedToAgentTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceInfo: _json,
    HierarchyGroups: _json,
    Id: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AgentQualityMetrics
 */
const de_AgentQualityMetrics = (output: any, context: __SerdeContext): AgentQualityMetrics => {
  return take(output, {
    Audio: (_: any) => de_AudioQualityMetricsInfo(_, context),
  }) as any;
};

// de_AgentsCriteria omitted.

/**
 * deserializeAws_restJson1AgentStatus
 */
const de_AgentStatus = (output: any, context: __SerdeContext): AgentStatus => {
  return take(output, {
    AgentStatusARN: __expectString,
    AgentStatusId: __expectString,
    Description: __expectString,
    DisplayOrder: __expectInt32,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AgentStatusList
 */
const de_AgentStatusList = (output: any, context: __SerdeContext): AgentStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AgentStatusReference
 */
const de_AgentStatusReference = (output: any, context: __SerdeContext): AgentStatusReference => {
  return take(output, {
    StatusArn: __expectString,
    StatusName: __expectString,
    StatusStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentStatusSummary
 */
const de_AgentStatusSummary = (output: any, context: __SerdeContext): AgentStatusSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AgentStatusSummaryList
 */
const de_AgentStatusSummaryList = (output: any, context: __SerdeContext): AgentStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentStatusSummary(entry, context);
    });
  return retVal;
};

// de_AllowedAccessControlTags omitted.

// de_AnalyticsDataAssociationResult omitted.

// de_AnalyticsDataAssociationResults omitted.

// de_Application omitted.

// de_ApplicationPermissions omitted.

// de_Applications omitted.

// de_AssignContactCategoryActionDefinition omitted.

/**
 * deserializeAws_restJson1AssociatedContactSummary
 */
const de_AssociatedContactSummary = (output: any, context: __SerdeContext): AssociatedContactSummary => {
  return take(output, {
    Channel: __expectString,
    ContactArn: __expectString,
    ContactId: __expectString,
    DisconnectTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InitialContactId: __expectString,
    InitiationMethod: __expectString,
    InitiationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PreviousContactId: __expectString,
    RelatedContactId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssociatedContactSummaryList
 */
const de_AssociatedContactSummaryList = (output: any, context: __SerdeContext): AssociatedContactSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociatedContactSummary(entry, context);
    });
  return retVal;
};

// de_AssociatedQueueIdList omitted.

// de_AttachedFile omitted.

// de_AttachedFileError omitted.

// de_AttachedFileErrorsList omitted.

// de_AttachedFilesList omitted.

// de_AttachmentReference omitted.

// de_Attendee omitted.

// de_Attribute omitted.

/**
 * deserializeAws_restJson1AttributeCondition
 */
const de_AttributeCondition = (output: any, context: __SerdeContext): AttributeCondition => {
  return take(output, {
    ComparisonOperator: __expectString,
    MatchCriteria: _json,
    Name: __expectString,
    ProficiencyLevel: __limitedParseFloat32,
    Value: __expectString,
  }) as any;
};

// de_Attributes omitted.

// de_AttributesList omitted.

// de_AudioFeatures omitted.

/**
 * deserializeAws_restJson1AudioQualityMetricsInfo
 */
const de_AudioQualityMetricsInfo = (output: any, context: __SerdeContext): AudioQualityMetricsInfo => {
  return take(output, {
    PotentialQualityIssues: _json,
    QualityScore: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1AuthenticationProfile
 */
const de_AuthenticationProfile = (output: any, context: __SerdeContext): AuthenticationProfile => {
  return take(output, {
    AllowedIps: _json,
    Arn: __expectString,
    BlockedIps: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    IsDefault: __expectBoolean,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxSessionDuration: __expectInt32,
    Name: __expectString,
    PeriodicSessionDuration: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1AuthenticationProfileSummary
 */
const de_AuthenticationProfileSummary = (output: any, context: __SerdeContext): AuthenticationProfileSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    IsDefault: __expectBoolean,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AuthenticationProfileSummaryList
 */
const de_AuthenticationProfileSummaryList = (output: any, context: __SerdeContext): AuthenticationProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuthenticationProfileSummary(entry, context);
    });
  return retVal;
};

// de_AvailableNumbersList omitted.

// de_AvailableNumberSummary omitted.

// de_Campaign omitted.

// de_ChannelToCountMap omitted.

// de_ClaimedPhoneNumberSummary omitted.

// de_ConnectionData omitted.

/**
 * deserializeAws_restJson1Contact
 */
const de_Contact = (output: any, context: __SerdeContext): Contact => {
  return take(output, {
    AdditionalEmailRecipients: _json,
    AgentInfo: (_: any) => de_AgentInfo(_, context),
    AnsweringMachineDetectionStatus: __expectString,
    Arn: __expectString,
    Campaign: _json,
    Channel: __expectString,
    ConnectedToSystemTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContactAssociationId: __expectString,
    Customer: _json,
    CustomerEndpoint: _json,
    CustomerVoiceActivity: (_: any) => de_CustomerVoiceActivity(_, context),
    Description: __expectString,
    DisconnectDetails: _json,
    DisconnectTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    InitialContactId: __expectString,
    InitiationMethod: __expectString,
    InitiationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastPausedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastResumedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    PreviousContactId: __expectString,
    QualityMetrics: (_: any) => de_QualityMetrics(_, context),
    QueueInfo: (_: any) => de_QueueInfo(_, context),
    QueuePriority: __expectLong,
    QueueTimeAdjustmentSeconds: __expectInt32,
    RelatedContactId: __expectString,
    RoutingCriteria: (_: any) => de_RoutingCriteria(_, context),
    ScheduledTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SegmentAttributes: _json,
    SystemEndpoint: _json,
    Tags: _json,
    TotalPauseCount: __expectInt32,
    TotalPauseDurationInSeconds: __expectInt32,
    WisdomInfo: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ContactFlow
 */
const de_ContactFlow = (output: any, context: __SerdeContext): ContactFlow => {
  return take(output, {
    Arn: __expectString,
    Content: __expectString,
    Description: __expectString,
    FlowContentSha256: __expectString,
    Id: __expectString,
    IsDefault: __expectBoolean,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
    Status: __expectString,
    Tags: _json,
    Type: __expectString,
    Version: __expectLong,
    VersionDescription: __expectString,
  }) as any;
};

// de_ContactFlowModule omitted.

// de_ContactFlowModuleSearchSummaryList omitted.

// de_ContactFlowModulesSummaryList omitted.

// de_ContactFlowModuleSummary omitted.

/**
 * deserializeAws_restJson1ContactFlowSearchSummaryList
 */
const de_ContactFlowSearchSummaryList = (output: any, context: __SerdeContext): ContactFlow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContactFlow(entry, context);
    });
  return retVal;
};

// de_ContactFlowSummary omitted.

// de_ContactFlowSummaryList omitted.

// de_ContactFlowVersionSummary omitted.

// de_ContactFlowVersionSummaryList omitted.

// de_ContactReferences omitted.

/**
 * deserializeAws_restJson1Contacts
 */
const de_Contacts = (output: any, context: __SerdeContext): ContactSearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContactSearchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ContactSearchSummary
 */
const de_ContactSearchSummary = (output: any, context: __SerdeContext): ContactSearchSummary => {
  return take(output, {
    AgentInfo: (_: any) => de_ContactSearchSummaryAgentInfo(_, context),
    Arn: __expectString,
    Channel: __expectString,
    DisconnectTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    InitialContactId: __expectString,
    InitiationMethod: __expectString,
    InitiationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PreviousContactId: __expectString,
    QueueInfo: (_: any) => de_ContactSearchSummaryQueueInfo(_, context),
    ScheduledTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SegmentAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ContactSearchSummaryAgentInfo
 */
const de_ContactSearchSummaryAgentInfo = (output: any, context: __SerdeContext): ContactSearchSummaryAgentInfo => {
  return take(output, {
    ConnectedToAgentTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ContactSearchSummaryQueueInfo
 */
const de_ContactSearchSummaryQueueInfo = (output: any, context: __SerdeContext): ContactSearchSummaryQueueInfo => {
  return take(output, {
    EnqueueTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
  }) as any;
};

// de_ContactSearchSummarySegmentAttributes omitted.

// de_ContactSearchSummarySegmentAttributeValue omitted.

// de_ContactTagMap omitted.

/**
 * deserializeAws_restJson1CreateCaseActionDefinition
 */
const de_CreateCaseActionDefinition = (output: any, context: __SerdeContext): CreateCaseActionDefinition => {
  return take(output, {
    Fields: (_: any) => de_FieldValues(_, context),
    TemplateId: __expectString,
  }) as any;
};

// de_CreatedByInfo omitted.

/**
 * deserializeAws_restJson1Credentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
  return take(output, {
    AccessToken: __expectString,
    AccessTokenExpiration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RefreshToken: __expectString,
    RefreshTokenExpiration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CrossChannelBehavior omitted.

// de_CurrentMetric omitted.

/**
 * deserializeAws_restJson1CurrentMetricData
 */
const de_CurrentMetricData = (output: any, context: __SerdeContext): CurrentMetricData => {
  return take(output, {
    Metric: _json,
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1CurrentMetricDataCollections
 */
const de_CurrentMetricDataCollections = (output: any, context: __SerdeContext): CurrentMetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CurrentMetricData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CurrentMetricResult
 */
const de_CurrentMetricResult = (output: any, context: __SerdeContext): CurrentMetricResult => {
  return take(output, {
    Collections: (_: any) => de_CurrentMetricDataCollections(_, context),
    Dimensions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1CurrentMetricResults
 */
const de_CurrentMetricResults = (output: any, context: __SerdeContext): CurrentMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CurrentMetricResult(entry, context);
    });
  return retVal;
};

// de_Customer omitted.

/**
 * deserializeAws_restJson1CustomerQualityMetrics
 */
const de_CustomerQualityMetrics = (output: any, context: __SerdeContext): CustomerQualityMetrics => {
  return take(output, {
    Audio: (_: any) => de_AudioQualityMetricsInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CustomerVoiceActivity
 */
const de_CustomerVoiceActivity = (output: any, context: __SerdeContext): CustomerVoiceActivity => {
  return take(output, {
    GreetingEndTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GreetingStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DataSetIds omitted.

// de_DateReference omitted.

// de_DefaultVocabulary omitted.

// de_DefaultVocabularyList omitted.

// de_DeviceInfo omitted.

// de_Dimensions omitted.

// de_DimensionsV2Map omitted.

// de_DisconnectDetails omitted.

// de_Distribution omitted.

// de_DistributionList omitted.

// de_DownloadUrlMetadata omitted.

// de_EmailAddressList omitted.

// de_EmailAddressMetadata omitted.

// de_EmailMessageReference omitted.

// de_EmailRecipient omitted.

// de_EmailRecipientsList omitted.

// de_EmailReference omitted.

// de_EmptyFieldValue omitted.

// de_EncryptionConfig omitted.

// de_EndAssociatedTasksActionDefinition omitted.

// de_EndpointInfo omitted.

// de_ErrorResult omitted.

// de_ErrorResults omitted.

/**
 * deserializeAws_restJson1Evaluation
 */
const de_Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return take(output, {
    Answers: (_: any) => de_EvaluationAnswersOutputMap(_, context),
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationArn: __expectString,
    EvaluationId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: (_: any) => de_EvaluationMetadata(_, context),
    Notes: _json,
    Scores: (_: any) => de_EvaluationScoresMap(_, context),
    Status: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationAnswerData
 */
const de_EvaluationAnswerData = (output: any, context: __SerdeContext): EvaluationAnswerData => {
  if (__expectBoolean(output.NotApplicable) !== undefined) {
    return { NotApplicable: __expectBoolean(output.NotApplicable) as any };
  }
  if (__limitedParseDouble(output.NumericValue) !== undefined) {
    return { NumericValue: __limitedParseDouble(output.NumericValue) as any };
  }
  if (__expectString(output.StringValue) !== undefined) {
    return { StringValue: __expectString(output.StringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1EvaluationAnswerOutput
 */
const de_EvaluationAnswerOutput = (output: any, context: __SerdeContext): EvaluationAnswerOutput => {
  return take(output, {
    SystemSuggestedValue: (_: any) => de_EvaluationAnswerData(__expectUnion(_), context),
    Value: (_: any) => de_EvaluationAnswerData(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationAnswersOutputMap
 */
const de_EvaluationAnswersOutputMap = (
  output: any,
  context: __SerdeContext
): Record<string, EvaluationAnswerOutput> => {
  return Object.entries(output).reduce((acc: Record<string, EvaluationAnswerOutput>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_EvaluationAnswerOutput(value, context);
    return acc;
  }, {} as Record<string, EvaluationAnswerOutput>);
};

/**
 * deserializeAws_restJson1EvaluationForm
 */
const de_EvaluationForm = (output: any, context: __SerdeContext): EvaluationForm => {
  return take(output, {
    CreatedBy: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
    EvaluationFormVersion: __expectInt32,
    Items: (_: any) => de_EvaluationFormItemsList(_, context),
    LastModifiedBy: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Locked: __expectBoolean,
    ScoringStrategy: _json,
    Status: __expectString,
    Tags: _json,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationFormContent
 */
const de_EvaluationFormContent = (output: any, context: __SerdeContext): EvaluationFormContent => {
  return take(output, {
    Description: __expectString,
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
    EvaluationFormVersion: __expectInt32,
    Items: (_: any) => de_EvaluationFormItemsList(_, context),
    ScoringStrategy: _json,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationFormItem
 */
const de_EvaluationFormItem = (output: any, context: __SerdeContext): EvaluationFormItem => {
  if (output.Question != null) {
    return {
      Question: de_EvaluationFormQuestion(output.Question, context),
    };
  }
  if (output.Section != null) {
    return {
      Section: de_EvaluationFormSection(output.Section, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1EvaluationFormItemsList
 */
const de_EvaluationFormItemsList = (output: any, context: __SerdeContext): EvaluationFormItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationFormItem(__expectUnion(entry), context);
    });
  return retVal;
};

// de_EvaluationFormNumericQuestionAutomation omitted.

// de_EvaluationFormNumericQuestionOption omitted.

// de_EvaluationFormNumericQuestionOptionList omitted.

// de_EvaluationFormNumericQuestionProperties omitted.

/**
 * deserializeAws_restJson1EvaluationFormQuestion
 */
const de_EvaluationFormQuestion = (output: any, context: __SerdeContext): EvaluationFormQuestion => {
  return take(output, {
    Instructions: __expectString,
    NotApplicableEnabled: __expectBoolean,
    QuestionType: __expectString,
    QuestionTypeProperties: (_: any) => _json(__expectUnion(_)),
    RefId: __expectString,
    Title: __expectString,
    Weight: __limitedParseDouble,
  }) as any;
};

// de_EvaluationFormQuestionTypeProperties omitted.

// de_EvaluationFormScoringStrategy omitted.

/**
 * deserializeAws_restJson1EvaluationFormSection
 */
const de_EvaluationFormSection = (output: any, context: __SerdeContext): EvaluationFormSection => {
  return take(output, {
    Instructions: __expectString,
    Items: (_: any) => de_EvaluationFormItemsList(_, context),
    RefId: __expectString,
    Title: __expectString,
    Weight: __limitedParseDouble,
  }) as any;
};

// de_EvaluationFormSingleSelectQuestionAutomation omitted.

// de_EvaluationFormSingleSelectQuestionAutomationOption omitted.

// de_EvaluationFormSingleSelectQuestionAutomationOptionList omitted.

// de_EvaluationFormSingleSelectQuestionOption omitted.

// de_EvaluationFormSingleSelectQuestionOptionList omitted.

// de_EvaluationFormSingleSelectQuestionProperties omitted.

/**
 * deserializeAws_restJson1EvaluationFormSummary
 */
const de_EvaluationFormSummary = (output: any, context: __SerdeContext): EvaluationFormSummary => {
  return take(output, {
    ActiveVersion: __expectInt32,
    CreatedBy: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
    LastActivatedBy: __expectString,
    LastActivatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestVersion: __expectInt32,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationFormSummaryList
 */
const de_EvaluationFormSummaryList = (output: any, context: __SerdeContext): EvaluationFormSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationFormSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EvaluationFormVersionSummary
 */
const de_EvaluationFormVersionSummary = (output: any, context: __SerdeContext): EvaluationFormVersionSummary => {
  return take(output, {
    CreatedBy: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationFormArn: __expectString,
    EvaluationFormId: __expectString,
    EvaluationFormVersion: __expectInt32,
    LastModifiedBy: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Locked: __expectBoolean,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationFormVersionSummaryList
 */
const de_EvaluationFormVersionSummaryList = (output: any, context: __SerdeContext): EvaluationFormVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationFormVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EvaluationMetadata
 */
const de_EvaluationMetadata = (output: any, context: __SerdeContext): EvaluationMetadata => {
  return take(output, {
    ContactAgentId: __expectString,
    ContactId: __expectString,
    EvaluatorArn: __expectString,
    Score: (_: any) => de_EvaluationScore(_, context),
  }) as any;
};

// de_EvaluationNote omitted.

// de_EvaluationNotesMap omitted.

/**
 * deserializeAws_restJson1EvaluationScore
 */
const de_EvaluationScore = (output: any, context: __SerdeContext): EvaluationScore => {
  return take(output, {
    AutomaticFail: __expectBoolean,
    NotApplicable: __expectBoolean,
    Percentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationScoresMap
 */
const de_EvaluationScoresMap = (output: any, context: __SerdeContext): Record<string, EvaluationScore> => {
  return Object.entries(output).reduce((acc: Record<string, EvaluationScore>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_EvaluationScore(value, context);
    return acc;
  }, {} as Record<string, EvaluationScore>);
};

/**
 * deserializeAws_restJson1EvaluationSummary
 */
const de_EvaluationSummary = (output: any, context: __SerdeContext): EvaluationSummary => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationArn: __expectString,
    EvaluationFormId: __expectString,
    EvaluationFormTitle: __expectString,
    EvaluationId: __expectString,
    EvaluatorArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Score: (_: any) => de_EvaluationScore(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationSummaryList
 */
const de_EvaluationSummaryList = (output: any, context: __SerdeContext): EvaluationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationSummary(entry, context);
    });
  return retVal;
};

// de_EventBridgeActionDefinition omitted.

/**
 * deserializeAws_restJson1Expiry
 */
const de_Expiry = (output: any, context: __SerdeContext): Expiry => {
  return take(output, {
    DurationInSeconds: __expectInt32,
    ExpiryTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Expression
 */
const de_Expression = (output: any, context: __SerdeContext): Expression => {
  return take(output, {
    AndExpression: (_: any) => de_Expressions(_, context),
    AttributeCondition: (_: any) => de_AttributeCondition(_, context),
    OrExpression: (_: any) => de_Expressions(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Expressions
 */
const de_Expressions = (output: any, context: __SerdeContext): Expression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Expression(entry, context);
    });
  return retVal;
};

// de_FailedRequest omitted.

// de_FailedRequestList omitted.

/**
 * deserializeAws_restJson1FieldValue
 */
const de_FieldValue = (output: any, context: __SerdeContext): FieldValue => {
  return take(output, {
    Id: __expectString,
    Value: (_: any) => de_FieldValueUnion(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FieldValues
 */
const de_FieldValues = (output: any, context: __SerdeContext): FieldValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FieldValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FieldValueUnion
 */
const de_FieldValueUnion = (output: any, context: __SerdeContext): FieldValueUnion => {
  return take(output, {
    BooleanValue: __expectBoolean,
    DoubleValue: __limitedParseDouble,
    EmptyValue: _json,
    StringValue: __expectString,
  }) as any;
};

// de_FlowAssociationSummary omitted.

// de_FlowAssociationSummaryList omitted.

// de_FunctionArnsList omitted.

/**
 * deserializeAws_restJson1HierarchyGroup
 */
const de_HierarchyGroup = (output: any, context: __SerdeContext): HierarchyGroup => {
  return take(output, {
    Arn: __expectString,
    HierarchyPath: (_: any) => de_HierarchyPath(_, context),
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LevelId: __expectString,
    Name: __expectString,
    Tags: _json,
  }) as any;
};

// de_HierarchyGroups omitted.

/**
 * deserializeAws_restJson1HierarchyGroupSummary
 */
const de_HierarchyGroupSummary = (output: any, context: __SerdeContext): HierarchyGroupSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HierarchyGroupSummaryList
 */
const de_HierarchyGroupSummaryList = (output: any, context: __SerdeContext): HierarchyGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HierarchyGroupSummary(entry, context);
    });
  return retVal;
};

// de_HierarchyGroupSummaryReference omitted.

/**
 * deserializeAws_restJson1HierarchyLevel
 */
const de_HierarchyLevel = (output: any, context: __SerdeContext): HierarchyLevel => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HierarchyPath
 */
const de_HierarchyPath = (output: any, context: __SerdeContext): HierarchyPath => {
  return take(output, {
    LevelFive: (_: any) => de_HierarchyGroupSummary(_, context),
    LevelFour: (_: any) => de_HierarchyGroupSummary(_, context),
    LevelOne: (_: any) => de_HierarchyGroupSummary(_, context),
    LevelThree: (_: any) => de_HierarchyGroupSummary(_, context),
    LevelTwo: (_: any) => de_HierarchyGroupSummary(_, context),
  }) as any;
};

// de_HierarchyPathReference omitted.

// de_HierarchyRestrictedResourceList omitted.

/**
 * deserializeAws_restJson1HierarchyStructure
 */
const de_HierarchyStructure = (output: any, context: __SerdeContext): HierarchyStructure => {
  return take(output, {
    LevelFive: (_: any) => de_HierarchyLevel(_, context),
    LevelFour: (_: any) => de_HierarchyLevel(_, context),
    LevelOne: (_: any) => de_HierarchyLevel(_, context),
    LevelThree: (_: any) => de_HierarchyLevel(_, context),
    LevelTwo: (_: any) => de_HierarchyLevel(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1HistoricalMetric
 */
const de_HistoricalMetric = (output: any, context: __SerdeContext): HistoricalMetric => {
  return take(output, {
    Name: __expectString,
    Statistic: __expectString,
    Threshold: (_: any) => de_Threshold(_, context),
    Unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HistoricalMetricData
 */
const de_HistoricalMetricData = (output: any, context: __SerdeContext): HistoricalMetricData => {
  return take(output, {
    Metric: (_: any) => de_HistoricalMetric(_, context),
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1HistoricalMetricDataCollections
 */
const de_HistoricalMetricDataCollections = (output: any, context: __SerdeContext): HistoricalMetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HistoricalMetricData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HistoricalMetricResult
 */
const de_HistoricalMetricResult = (output: any, context: __SerdeContext): HistoricalMetricResult => {
  return take(output, {
    Collections: (_: any) => de_HistoricalMetricDataCollections(_, context),
    Dimensions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1HistoricalMetricResults
 */
const de_HistoricalMetricResults = (output: any, context: __SerdeContext): HistoricalMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HistoricalMetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HoursOfOperation
 */
const de_HoursOfOperation = (output: any, context: __SerdeContext): HoursOfOperation => {
  return take(output, {
    Config: _json,
    Description: __expectString,
    HoursOfOperationArn: __expectString,
    HoursOfOperationId: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Tags: _json,
    TimeZone: __expectString,
  }) as any;
};

// de_HoursOfOperationConfig omitted.

// de_HoursOfOperationConfigList omitted.

/**
 * deserializeAws_restJson1HoursOfOperationList
 */
const de_HoursOfOperationList = (output: any, context: __SerdeContext): HoursOfOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HoursOfOperation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HoursOfOperationSummary
 */
const de_HoursOfOperationSummary = (output: any, context: __SerdeContext): HoursOfOperationSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HoursOfOperationSummaryList
 */
const de_HoursOfOperationSummaryList = (output: any, context: __SerdeContext): HoursOfOperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HoursOfOperationSummary(entry, context);
    });
  return retVal;
};

// de_HoursOfOperationTimeSlice omitted.

/**
 * deserializeAws_restJson1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    IdentityManagementType: __expectString,
    InboundCallsEnabled: __expectBoolean,
    InstanceAccessUrl: __expectString,
    InstanceAlias: __expectString,
    InstanceStatus: __expectString,
    OutboundCallsEnabled: __expectBoolean,
    ServiceRole: __expectString,
    StatusReason: _json,
    Tags: _json,
  }) as any;
};

// de_InstanceStatusReason omitted.

// de_InstanceStorageConfig omitted.

// de_InstanceStorageConfigs omitted.

/**
 * deserializeAws_restJson1InstanceSummary
 */
const de_InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    IdentityManagementType: __expectString,
    InboundCallsEnabled: __expectBoolean,
    InstanceAccessUrl: __expectString,
    InstanceAlias: __expectString,
    InstanceStatus: __expectString,
    OutboundCallsEnabled: __expectBoolean,
    ServiceRole: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InstanceSummaryList
 */
const de_InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceSummary(entry, context);
    });
  return retVal;
};

// de_IntegrationAssociationSummary omitted.

// de_IntegrationAssociationSummaryList omitted.

// de_InvalidRequestExceptionReason omitted.

// de_InvisibleFieldInfo omitted.

// de_InvisibleTaskTemplateFields omitted.

// de_IpCidrList omitted.

// de_KinesisFirehoseConfig omitted.

// de_KinesisStreamConfig omitted.

// de_KinesisVideoStreamConfig omitted.

// de_LexBot omitted.

// de_LexBotConfig omitted.

// de_LexBotConfigList omitted.

// de_LexBotsList omitted.

// de_LexV2Bot omitted.

// de_ListPhoneNumbersSummary omitted.

// de_ListPhoneNumbersSummaryList omitted.

// de_MatchCriteria omitted.

// de_MediaConcurrencies omitted.

// de_MediaConcurrency omitted.

// de_MediaPlacement omitted.

// de_Meeting omitted.

// de_MeetingFeaturesConfiguration omitted.

/**
 * deserializeAws_restJson1MetricDataCollectionsV2
 */
const de_MetricDataCollectionsV2 = (output: any, context: __SerdeContext): MetricDataV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDataV2(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricDataV2
 */
const de_MetricDataV2 = (output: any, context: __SerdeContext): MetricDataV2 => {
  return take(output, {
    Metric: (_: any) => de_MetricV2(_, context),
    Value: __limitedParseDouble,
  }) as any;
};

// de_MetricFiltersV2List omitted.

// de_MetricFilterV2 omitted.

// de_MetricFilterValueList omitted.

/**
 * deserializeAws_restJson1MetricInterval
 */
const de_MetricInterval = (output: any, context: __SerdeContext): MetricInterval => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Interval: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1MetricResultsV2
 */
const de_MetricResultsV2 = (output: any, context: __SerdeContext): MetricResultV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricResultV2(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricResultV2
 */
const de_MetricResultV2 = (output: any, context: __SerdeContext): MetricResultV2 => {
  return take(output, {
    Collections: (_: any) => de_MetricDataCollectionsV2(_, context),
    Dimensions: _json,
    MetricInterval: (_: any) => de_MetricInterval(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MetricV2
 */
const de_MetricV2 = (output: any, context: __SerdeContext): MetricV2 => {
  return take(output, {
    MetricFilters: _json,
    Name: __expectString,
    Threshold: (_: any) => de_ThresholdCollections(_, context),
  }) as any;
};

// de_NotificationRecipientType omitted.

// de_NumberReference omitted.

// de_NumericQuestionPropertyValueAutomation omitted.

// de_OriginsList omitted.

// de_OutboundCallerConfig omitted.

// de_OutboundEmailConfig omitted.

// de_ParticipantCapabilities omitted.

// de_ParticipantTokenCredentials omitted.

// de_PermissionsList omitted.

// de_PhoneNumberQuickConnectConfig omitted.

// de_PhoneNumberStatus omitted.

// de_PhoneNumberSummary omitted.

// de_PhoneNumberSummaryList omitted.

// de_PotentialAudioQualityIssues omitted.

/**
 * deserializeAws_restJson1PredefinedAttribute
 */
const de_PredefinedAttribute = (output: any, context: __SerdeContext): PredefinedAttribute => {
  return take(output, {
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Values: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1PredefinedAttributeSearchSummaryList
 */
const de_PredefinedAttributeSearchSummaryList = (output: any, context: __SerdeContext): PredefinedAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredefinedAttribute(entry, context);
    });
  return retVal;
};

// de_PredefinedAttributeStringValuesList omitted.

/**
 * deserializeAws_restJson1PredefinedAttributeSummary
 */
const de_PredefinedAttributeSummary = (output: any, context: __SerdeContext): PredefinedAttributeSummary => {
  return take(output, {
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PredefinedAttributeSummaryList
 */
const de_PredefinedAttributeSummaryList = (output: any, context: __SerdeContext): PredefinedAttributeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredefinedAttributeSummary(entry, context);
    });
  return retVal;
};

// de_PredefinedAttributeValues omitted.

// de_ProblemDetail omitted.

// de_Problems omitted.

/**
 * deserializeAws_restJson1Prompt
 */
const de_Prompt = (output: any, context: __SerdeContext): Prompt => {
  return take(output, {
    Description: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    PromptARN: __expectString,
    PromptId: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PromptList
 */
const de_PromptList = (output: any, context: __SerdeContext): Prompt[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Prompt(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PromptSummary
 */
const de_PromptSummary = (output: any, context: __SerdeContext): PromptSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PromptSummaryList
 */
const de_PromptSummaryList = (output: any, context: __SerdeContext): PromptSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PromptSummary(entry, context);
    });
  return retVal;
};

// de_PropertyValidationExceptionProperty omitted.

// de_PropertyValidationExceptionPropertyList omitted.

/**
 * deserializeAws_restJson1QualityMetrics
 */
const de_QualityMetrics = (output: any, context: __SerdeContext): QualityMetrics => {
  return take(output, {
    Agent: (_: any) => de_AgentQualityMetrics(_, context),
    Customer: (_: any) => de_CustomerQualityMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Queue
 */
const de_Queue = (output: any, context: __SerdeContext): Queue => {
  return take(output, {
    Description: __expectString,
    HoursOfOperationId: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxContacts: __expectInt32,
    Name: __expectString,
    OutboundCallerConfig: _json,
    OutboundEmailConfig: _json,
    QueueArn: __expectString,
    QueueId: __expectString,
    Status: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1QueueInfo
 */
const de_QueueInfo = (output: any, context: __SerdeContext): QueueInfo => {
  return take(output, {
    EnqueueTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
  }) as any;
};

// de_QueueQuickConnectConfig omitted.

// de_QueueReference omitted.

/**
 * deserializeAws_restJson1QueueSearchSummaryList
 */
const de_QueueSearchSummaryList = (output: any, context: __SerdeContext): Queue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Queue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QueueSummary
 */
const de_QueueSummary = (output: any, context: __SerdeContext): QueueSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    QueueType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1QueueSummaryList
 */
const de_QueueSummaryList = (output: any, context: __SerdeContext): QueueSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueueSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QuickConnect
 */
const de_QuickConnect = (output: any, context: __SerdeContext): QuickConnect => {
  return take(output, {
    Description: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    QuickConnectARN: __expectString,
    QuickConnectConfig: _json,
    QuickConnectId: __expectString,
    Tags: _json,
  }) as any;
};

// de_QuickConnectConfig omitted.

/**
 * deserializeAws_restJson1QuickConnectSearchSummaryList
 */
const de_QuickConnectSearchSummaryList = (output: any, context: __SerdeContext): QuickConnect[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QuickConnect(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QuickConnectSummary
 */
const de_QuickConnectSummary = (output: any, context: __SerdeContext): QuickConnectSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    QuickConnectType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1QuickConnectSummaryList
 */
const de_QuickConnectSummaryList = (output: any, context: __SerdeContext): QuickConnectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QuickConnectSummary(entry, context);
    });
  return retVal;
};

// de_ReadOnlyFieldInfo omitted.

// de_ReadOnlyTaskTemplateFields omitted.

// de_RealTimeContactAnalysisAttachment omitted.

// de_RealTimeContactAnalysisAttachments omitted.

// de_RealTimeContactAnalysisCategoryDetails omitted.

// de_RealTimeContactAnalysisCharacterInterval omitted.

// de_RealTimeContactAnalysisCharacterIntervals omitted.

// de_RealTimeContactAnalysisIssueDetected omitted.

// de_RealTimeContactAnalysisIssuesDetected omitted.

// de_RealTimeContactAnalysisMatchedDetails omitted.

// de_RealTimeContactAnalysisPointOfInterest omitted.

// de_RealTimeContactAnalysisPointsOfInterest omitted.

/**
 * deserializeAws_restJson1RealtimeContactAnalysisSegment
 */
const de_RealtimeContactAnalysisSegment = (output: any, context: __SerdeContext): RealtimeContactAnalysisSegment => {
  if (output.Attachments != null) {
    return {
      Attachments: de_RealTimeContactAnalysisSegmentAttachments(output.Attachments, context),
    };
  }
  if (output.Categories != null) {
    return {
      Categories: _json(output.Categories),
    };
  }
  if (output.Event != null) {
    return {
      Event: de_RealTimeContactAnalysisSegmentEvent(output.Event, context),
    };
  }
  if (output.Issues != null) {
    return {
      Issues: _json(output.Issues),
    };
  }
  if (output.PostContactSummary != null) {
    return {
      PostContactSummary: _json(output.PostContactSummary),
    };
  }
  if (output.Transcript != null) {
    return {
      Transcript: de_RealTimeContactAnalysisSegmentTranscript(output.Transcript, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RealTimeContactAnalysisSegmentAttachments
 */
const de_RealTimeContactAnalysisSegmentAttachments = (
  output: any,
  context: __SerdeContext
): RealTimeContactAnalysisSegmentAttachments => {
  return take(output, {
    Attachments: _json,
    DisplayName: __expectString,
    Id: __expectString,
    ParticipantId: __expectString,
    ParticipantRole: __expectString,
    Time: (_: any) => de_RealTimeContactAnalysisTimeData(__expectUnion(_), context),
  }) as any;
};

// de_RealTimeContactAnalysisSegmentCategories omitted.

/**
 * deserializeAws_restJson1RealTimeContactAnalysisSegmentEvent
 */
const de_RealTimeContactAnalysisSegmentEvent = (
  output: any,
  context: __SerdeContext
): RealTimeContactAnalysisSegmentEvent => {
  return take(output, {
    DisplayName: __expectString,
    EventType: __expectString,
    Id: __expectString,
    ParticipantId: __expectString,
    ParticipantRole: __expectString,
    Time: (_: any) => de_RealTimeContactAnalysisTimeData(__expectUnion(_), context),
  }) as any;
};

// de_RealTimeContactAnalysisSegmentIssues omitted.

// de_RealTimeContactAnalysisSegmentPostContactSummary omitted.

/**
 * deserializeAws_restJson1RealtimeContactAnalysisSegments
 */
const de_RealtimeContactAnalysisSegments = (output: any, context: __SerdeContext): RealtimeContactAnalysisSegment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RealtimeContactAnalysisSegment(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RealTimeContactAnalysisSegmentTranscript
 */
const de_RealTimeContactAnalysisSegmentTranscript = (
  output: any,
  context: __SerdeContext
): RealTimeContactAnalysisSegmentTranscript => {
  return take(output, {
    Content: __expectString,
    ContentType: __expectString,
    DisplayName: __expectString,
    Id: __expectString,
    ParticipantId: __expectString,
    ParticipantRole: __expectString,
    Redaction: _json,
    Sentiment: __expectString,
    Time: (_: any) => de_RealTimeContactAnalysisTimeData(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1RealTimeContactAnalysisTimeData
 */
const de_RealTimeContactAnalysisTimeData = (output: any, context: __SerdeContext): RealTimeContactAnalysisTimeData => {
  if (output.AbsoluteTime != null) {
    return {
      AbsoluteTime: __expectNonNull(__parseRfc3339DateTimeWithOffset(output.AbsoluteTime)),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_RealTimeContactAnalysisTranscriptItemRedaction omitted.

// de_RealTimeContactAnalysisTranscriptItemsWithCharacterOffsets omitted.

// de_RealTimeContactAnalysisTranscriptItemsWithContent omitted.

// de_RealTimeContactAnalysisTranscriptItemWithCharacterOffsets omitted.

// de_RealTimeContactAnalysisTranscriptItemWithContent omitted.

// de_Reference omitted.

// de_ReferenceSummary omitted.

// de_ReferenceSummaryList omitted.

// de_ReplicationConfiguration omitted.

// de_ReplicationStatusSummary omitted.

// de_ReplicationStatusSummaryList omitted.

// de_RequiredFieldInfo omitted.

// de_RequiredTaskTemplateFields omitted.

/**
 * deserializeAws_restJson1RoutingCriteria
 */
const de_RoutingCriteria = (output: any, context: __SerdeContext): RoutingCriteria => {
  return take(output, {
    ActivationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Index: __expectInt32,
    Steps: (_: any) => de_Steps(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingProfile
 */
const de_RoutingProfile = (output: any, context: __SerdeContext): RoutingProfile => {
  return take(output, {
    AgentAvailabilityTimer: __expectString,
    AssociatedQueueIds: _json,
    DefaultOutboundQueueId: __expectString,
    Description: __expectString,
    InstanceId: __expectString,
    IsDefault: __expectBoolean,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MediaConcurrencies: _json,
    Name: __expectString,
    NumberOfAssociatedQueues: __expectLong,
    NumberOfAssociatedUsers: __expectLong,
    RoutingProfileArn: __expectString,
    RoutingProfileId: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingProfileList
 */
const de_RoutingProfileList = (output: any, context: __SerdeContext): RoutingProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutingProfile(entry, context);
    });
  return retVal;
};

// de_RoutingProfileQueueConfigSummary omitted.

// de_RoutingProfileQueueConfigSummaryList omitted.

// de_RoutingProfileReference omitted.

/**
 * deserializeAws_restJson1RoutingProfileSummary
 */
const de_RoutingProfileSummary = (output: any, context: __SerdeContext): RoutingProfileSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingProfileSummaryList
 */
const de_RoutingProfileSummaryList = (output: any, context: __SerdeContext): RoutingProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutingProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return take(output, {
    Actions: (_: any) => de_RuleActions(_, context),
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Function: __expectString,
    LastUpdatedBy: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    PublishStatus: __expectString,
    RuleArn: __expectString,
    RuleId: __expectString,
    Tags: _json,
    TriggerEventSource: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RuleAction
 */
const de_RuleAction = (output: any, context: __SerdeContext): RuleAction => {
  return take(output, {
    ActionType: __expectString,
    AssignContactCategoryAction: _json,
    CreateCaseAction: (_: any) => de_CreateCaseActionDefinition(_, context),
    EndAssociatedTasksAction: _json,
    EventBridgeAction: _json,
    SendNotificationAction: _json,
    SubmitAutoEvaluationAction: _json,
    TaskAction: _json,
    UpdateCaseAction: (_: any) => de_UpdateCaseActionDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RuleActions
 */
const de_RuleActions = (output: any, context: __SerdeContext): RuleAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RuleSummary
 */
const de_RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return take(output, {
    ActionSummaries: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventSourceName: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    PublishStatus: __expectString,
    RuleArn: __expectString,
    RuleId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RuleSummaryList
 */
const de_RuleSummaryList = (output: any, context: __SerdeContext): RuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleSummary(entry, context);
    });
  return retVal;
};

// de_RuleTriggerEventSource omitted.

// de_S3Config omitted.

/**
 * deserializeAws_restJson1SecurityKey
 */
const de_SecurityKey = (output: any, context: __SerdeContext): SecurityKey => {
  return take(output, {
    AssociationId: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Key: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SecurityKeysList
 */
const de_SecurityKeysList = (output: any, context: __SerdeContext): SecurityKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecurityKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityProfile
 */
const de_SecurityProfile = (output: any, context: __SerdeContext): SecurityProfile => {
  return take(output, {
    AllowedAccessControlHierarchyGroupId: __expectString,
    AllowedAccessControlTags: _json,
    Arn: __expectString,
    Description: __expectString,
    HierarchyRestrictedResources: _json,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrganizationResourceId: __expectString,
    SecurityProfileName: __expectString,
    TagRestrictedResources: _json,
    Tags: _json,
  }) as any;
};

// de_SecurityProfileIds omitted.

// de_SecurityProfileSearchSummary omitted.

// de_SecurityProfilesSearchSummaryList omitted.

/**
 * deserializeAws_restJson1SecurityProfileSummary
 */
const de_SecurityProfileSummary = (output: any, context: __SerdeContext): SecurityProfileSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SecurityProfileSummaryList
 */
const de_SecurityProfileSummaryList = (output: any, context: __SerdeContext): SecurityProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecurityProfileSummary(entry, context);
    });
  return retVal;
};

// de_SegmentAttributes omitted.

// de_SegmentAttributeValue omitted.

// de_SendNotificationActionDefinition omitted.

// de_ServiceQuotaExceededExceptionReason omitted.

// de_SignInConfig omitted.

// de_SignInDistribution omitted.

// de_SignInDistributionList omitted.

// de_SingleSelectOptions omitted.

// de_SingleSelectQuestionRuleCategoryAutomation omitted.

/**
 * deserializeAws_restJson1Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return take(output, {
    Expiry: (_: any) => de_Expiry(_, context),
    Expression: (_: any) => de_Expression(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Steps
 */
const de_Steps = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Step(entry, context);
    });
  return retVal;
};

// de_StringReference omitted.

// de_SubmitAutoEvaluationActionDefinition omitted.

// de_SuccessfulRequest omitted.

// de_SuccessfulRequestList omitted.

// de_TagMap omitted.

// de_TagRestrictedResourceList omitted.

// de_TagSet omitted.

// de_TagsList omitted.

// de_TaskActionDefinition omitted.

// de_TaskTemplateConstraints omitted.

// de_TaskTemplateDefaultFieldValue omitted.

// de_TaskTemplateDefaultFieldValueList omitted.

// de_TaskTemplateDefaults omitted.

// de_TaskTemplateField omitted.

// de_TaskTemplateFieldIdentifier omitted.

// de_TaskTemplateFields omitted.

/**
 * deserializeAws_restJson1TaskTemplateList
 */
const de_TaskTemplateList = (output: any, context: __SerdeContext): TaskTemplateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaskTemplateMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TaskTemplateMetadata
 */
const de_TaskTemplateMetadata = (output: any, context: __SerdeContext): TaskTemplateMetadata => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

// de_TelephonyConfig omitted.

/**
 * deserializeAws_restJson1Threshold
 */
const de_Threshold = (output: any, context: __SerdeContext): Threshold => {
  return take(output, {
    Comparison: __expectString,
    ThresholdValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ThresholdCollections
 */
const de_ThresholdCollections = (output: any, context: __SerdeContext): ThresholdV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThresholdV2(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThresholdV2
 */
const de_ThresholdV2 = (output: any, context: __SerdeContext): ThresholdV2 => {
  return take(output, {
    Comparison: __expectString,
    ThresholdValue: __limitedParseDouble,
  }) as any;
};

// de_TrafficDistributionGroup omitted.

// de_TrafficDistributionGroupSummary omitted.

// de_TrafficDistributionGroupSummaryList omitted.

// de_TrafficDistributionGroupUserSummary omitted.

// de_TrafficDistributionGroupUserSummaryList omitted.

/**
 * deserializeAws_restJson1UpdateCaseActionDefinition
 */
const de_UpdateCaseActionDefinition = (output: any, context: __SerdeContext): UpdateCaseActionDefinition => {
  return take(output, {
    Fields: (_: any) => de_FieldValues(_, context),
  }) as any;
};

// de_UploadUrlMetadata omitted.

// de_UrlMetadataSignedHeaders omitted.

// de_UrlReference omitted.

// de_UseCase omitted.

// de_UseCaseSummaryList omitted.

/**
 * deserializeAws_restJson1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return take(output, {
    Arn: __expectString,
    DirectoryUserId: __expectString,
    HierarchyGroupId: __expectString,
    Id: __expectString,
    IdentityInfo: _json,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PhoneConfig: _json,
    RoutingProfileId: __expectString,
    SecurityProfileIds: _json,
    Tags: _json,
    Username: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UserData
 */
const de_UserData = (output: any, context: __SerdeContext): UserData => {
  return take(output, {
    ActiveSlotsByChannel: _json,
    AvailableSlotsByChannel: _json,
    Contacts: (_: any) => de_AgentContactReferenceList(_, context),
    HierarchyPath: _json,
    MaxSlotsByChannel: _json,
    NextStatus: __expectString,
    RoutingProfile: _json,
    Status: (_: any) => de_AgentStatusReference(_, context),
    User: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1UserDataList
 */
const de_UserDataList = (output: any, context: __SerdeContext): UserData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserHierarchyGroupList
 */
const de_UserHierarchyGroupList = (output: any, context: __SerdeContext): HierarchyGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HierarchyGroup(entry, context);
    });
  return retVal;
};

// de_UserIdentityInfo omitted.

// de_UserIdentityInfoLite omitted.

// de_UserIdList omitted.

// de_UserPhoneConfig omitted.

/**
 * deserializeAws_restJson1UserProficiency
 */
const de_UserProficiency = (output: any, context: __SerdeContext): UserProficiency => {
  return take(output, {
    AttributeName: __expectString,
    AttributeValue: __expectString,
    Level: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1UserProficiencyList
 */
const de_UserProficiencyList = (output: any, context: __SerdeContext): UserProficiency[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserProficiency(entry, context);
    });
  return retVal;
};

// de_UserQuickConnectConfig omitted.

// de_UserReference omitted.

// de_UserSearchSummary omitted.

// de_UserSearchSummaryList omitted.

/**
 * deserializeAws_restJson1UserSummary
 */
const de_UserSummary = (output: any, context: __SerdeContext): UserSummary => {
  return take(output, {
    Arn: __expectString,
    Id: __expectString,
    LastModifiedRegion: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Username: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UserSummaryList
 */
const de_UserSummaryList = (output: any, context: __SerdeContext): UserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserSummary(entry, context);
    });
  return retVal;
};

// de_UserTagMap omitted.

/**
 * deserializeAws_restJson1View
 */
const de_View = (output: any, context: __SerdeContext): View => {
  return take(output, {
    Arn: __expectString,
    Content: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
    Tags: _json,
    Type: __expectString,
    Version: __expectInt32,
    VersionDescription: __expectString,
    ViewContentSha256: __expectString,
  }) as any;
};

// de_ViewActions omitted.

// de_ViewContent omitted.

// de_ViewsSummaryList omitted.

// de_ViewSummary omitted.

// de_ViewVersionSummary omitted.

// de_ViewVersionSummaryList omitted.

/**
 * deserializeAws_restJson1Vocabulary
 */
const de_Vocabulary = (output: any, context: __SerdeContext): Vocabulary => {
  return take(output, {
    Arn: __expectString,
    Content: __expectString,
    FailureReason: __expectString,
    Id: __expectString,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1VocabularySummary
 */
const de_VocabularySummary = (output: any, context: __SerdeContext): VocabularySummary => {
  return take(output, {
    Arn: __expectString,
    FailureReason: __expectString,
    Id: __expectString,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VocabularySummaryList
 */
const de_VocabularySummaryList = (output: any, context: __SerdeContext): VocabularySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VocabularySummary(entry, context);
    });
  return retVal;
};

// de_WisdomInfo omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _ARA = "AssociatedResourceArn";
const _AST = "AgentStatusTypes";
const _BN = "BotName";
const _CFMS = "ContactFlowModuleState";
const _CFT = "ContactFlowTypes";
const _CI = "ContactId";
const _CT = "ClientToken";
const _DSI = "DataSetId";
const _EFV = "EvaluationFormVersion";
const _ESN = "EventSourceName";
const _FA = "FunctionArn";
const _IA = "IntegrationArn";
const _II = "InstanceId";
const _IT = "IntegrationType";
const _LR = "LexRegion";
const _LV = "LexVersion";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _O = "Origin";
const _PNCC = "PhoneNumberCountryCodes";
const _PNT = "PhoneNumberTypes";
const _PS = "PublishStatus";
const _QCT = "QuickConnectTypes";
const _QT = "QueueTypes";
const _RT = "ResourceType";
const _RTe = "ReferenceTypes";
const _S = "Status";
const _SV = "SnapshotVersion";
const _T = "Type";
const _TK = "TagKeys";
const _UEIS = "UrlExpiryInSeconds";
const _UI = "UserId";
const _aRA = "associatedResourceArn";
const _bN = "botName";
const _cFT = "contactFlowTypes";
const _cI = "contactId";
const _cT = "clientToken";
const _eSN = "eventSourceName";
const _fA = "functionArn";
const _iA = "integrationArn";
const _iI = "instanceId";
const _iT = "integrationType";
const _lR = "lexRegion";
const _lV = "lexVersion";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _o = "origin";
const _pNCC = "phoneNumberCountryCodes";
const _pNT = "phoneNumberTypes";
const _pS = "publishStatus";
const _qT = "queueTypes";
const _rT = "resourceType";
const _rTe = "referenceTypes";
const _s = "state";
const _sV = "snapshotVersion";
const _st = "status";
const _t = "type";
const _tK = "tagKeys";
const _uEIS = "urlExpiryInSeconds";
const _v = "version";
