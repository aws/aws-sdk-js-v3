// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultConnectHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  ActivateEvaluationFormCommandInput,
  ActivateEvaluationFormCommandOutput,
} from "./commands/ActivateEvaluationFormCommand";
import {
  AssociateAnalyticsDataSetCommandInput,
  AssociateAnalyticsDataSetCommandOutput,
} from "./commands/AssociateAnalyticsDataSetCommand";
import {
  AssociateApprovedOriginCommandInput,
  AssociateApprovedOriginCommandOutput,
} from "./commands/AssociateApprovedOriginCommand";
import { AssociateBotCommandInput, AssociateBotCommandOutput } from "./commands/AssociateBotCommand";
import {
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
} from "./commands/AssociateDefaultVocabularyCommand";
import { AssociateFlowCommandInput, AssociateFlowCommandOutput } from "./commands/AssociateFlowCommand";
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
import {
  AssociateTrafficDistributionGroupUserCommandInput,
  AssociateTrafficDistributionGroupUserCommandOutput,
} from "./commands/AssociateTrafficDistributionGroupUserCommand";
import {
  AssociateUserProficienciesCommandInput,
  AssociateUserProficienciesCommandOutput,
} from "./commands/AssociateUserProficienciesCommand";
import {
  BatchAssociateAnalyticsDataSetCommandInput,
  BatchAssociateAnalyticsDataSetCommandOutput,
} from "./commands/BatchAssociateAnalyticsDataSetCommand";
import {
  BatchDisassociateAnalyticsDataSetCommandInput,
  BatchDisassociateAnalyticsDataSetCommandOutput,
} from "./commands/BatchDisassociateAnalyticsDataSetCommand";
import {
  BatchGetAttachedFileMetadataCommandInput,
  BatchGetAttachedFileMetadataCommandOutput,
} from "./commands/BatchGetAttachedFileMetadataCommand";
import {
  BatchGetFlowAssociationCommandInput,
  BatchGetFlowAssociationCommandOutput,
} from "./commands/BatchGetFlowAssociationCommand";
import { BatchPutContactCommandInput, BatchPutContactCommandOutput } from "./commands/BatchPutContactCommand";
import { ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput } from "./commands/ClaimPhoneNumberCommand";
import {
  CompleteAttachedFileUploadCommandInput,
  CompleteAttachedFileUploadCommandOutput,
} from "./commands/CompleteAttachedFileUploadCommand";
import { CreateAgentStatusCommandInput, CreateAgentStatusCommandOutput } from "./commands/CreateAgentStatusCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "./commands/CreateContactCommand";
import { CreateContactFlowCommandInput, CreateContactFlowCommandOutput } from "./commands/CreateContactFlowCommand";
import {
  CreateContactFlowModuleCommandInput,
  CreateContactFlowModuleCommandOutput,
} from "./commands/CreateContactFlowModuleCommand";
import {
  CreateContactFlowVersionCommandInput,
  CreateContactFlowVersionCommandOutput,
} from "./commands/CreateContactFlowVersionCommand";
import { CreateEmailAddressCommandInput, CreateEmailAddressCommandOutput } from "./commands/CreateEmailAddressCommand";
import {
  CreateEvaluationFormCommandInput,
  CreateEvaluationFormCommandOutput,
} from "./commands/CreateEvaluationFormCommand";
import {
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
} from "./commands/CreateHoursOfOperationCommand";
import {
  CreateHoursOfOperationOverrideCommandInput,
  CreateHoursOfOperationOverrideCommandOutput,
} from "./commands/CreateHoursOfOperationOverrideCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand";
import {
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
} from "./commands/CreateIntegrationAssociationCommand";
import { CreateParticipantCommandInput, CreateParticipantCommandOutput } from "./commands/CreateParticipantCommand";
import {
  CreatePersistentContactAssociationCommandInput,
  CreatePersistentContactAssociationCommandOutput,
} from "./commands/CreatePersistentContactAssociationCommand";
import {
  CreatePredefinedAttributeCommandInput,
  CreatePredefinedAttributeCommandOutput,
} from "./commands/CreatePredefinedAttributeCommand";
import { CreatePromptCommandInput, CreatePromptCommandOutput } from "./commands/CreatePromptCommand";
import {
  CreatePushNotificationRegistrationCommandInput,
  CreatePushNotificationRegistrationCommandOutput,
} from "./commands/CreatePushNotificationRegistrationCommand";
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
import { CreateViewCommandInput, CreateViewCommandOutput } from "./commands/CreateViewCommand";
import { CreateViewVersionCommandInput, CreateViewVersionCommandOutput } from "./commands/CreateViewVersionCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "./commands/CreateVocabularyCommand";
import {
  DeactivateEvaluationFormCommandInput,
  DeactivateEvaluationFormCommandOutput,
} from "./commands/DeactivateEvaluationFormCommand";
import { DeleteAttachedFileCommandInput, DeleteAttachedFileCommandOutput } from "./commands/DeleteAttachedFileCommand";
import {
  DeleteContactEvaluationCommandInput,
  DeleteContactEvaluationCommandOutput,
} from "./commands/DeleteContactEvaluationCommand";
import { DeleteContactFlowCommandInput, DeleteContactFlowCommandOutput } from "./commands/DeleteContactFlowCommand";
import {
  DeleteContactFlowModuleCommandInput,
  DeleteContactFlowModuleCommandOutput,
} from "./commands/DeleteContactFlowModuleCommand";
import {
  DeleteContactFlowVersionCommandInput,
  DeleteContactFlowVersionCommandOutput,
} from "./commands/DeleteContactFlowVersionCommand";
import { DeleteEmailAddressCommandInput, DeleteEmailAddressCommandOutput } from "./commands/DeleteEmailAddressCommand";
import {
  DeleteEvaluationFormCommandInput,
  DeleteEvaluationFormCommandOutput,
} from "./commands/DeleteEvaluationFormCommand";
import {
  DeleteHoursOfOperationCommandInput,
  DeleteHoursOfOperationCommandOutput,
} from "./commands/DeleteHoursOfOperationCommand";
import {
  DeleteHoursOfOperationOverrideCommandInput,
  DeleteHoursOfOperationOverrideCommandOutput,
} from "./commands/DeleteHoursOfOperationOverrideCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import {
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
} from "./commands/DeleteIntegrationAssociationCommand";
import {
  DeletePredefinedAttributeCommandInput,
  DeletePredefinedAttributeCommandOutput,
} from "./commands/DeletePredefinedAttributeCommand";
import { DeletePromptCommandInput, DeletePromptCommandOutput } from "./commands/DeletePromptCommand";
import {
  DeletePushNotificationRegistrationCommandInput,
  DeletePushNotificationRegistrationCommandOutput,
} from "./commands/DeletePushNotificationRegistrationCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import { DeleteQuickConnectCommandInput, DeleteQuickConnectCommandOutput } from "./commands/DeleteQuickConnectCommand";
import {
  DeleteRoutingProfileCommandInput,
  DeleteRoutingProfileCommandOutput,
} from "./commands/DeleteRoutingProfileCommand";
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
import { DeleteViewCommandInput, DeleteViewCommandOutput } from "./commands/DeleteViewCommand";
import { DeleteViewVersionCommandInput, DeleteViewVersionCommandOutput } from "./commands/DeleteViewVersionCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "./commands/DeleteVocabularyCommand";
import {
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
} from "./commands/DescribeAgentStatusCommand";
import {
  DescribeAuthenticationProfileCommandInput,
  DescribeAuthenticationProfileCommandOutput,
} from "./commands/DescribeAuthenticationProfileCommand";
import { DescribeContactCommandInput, DescribeContactCommandOutput } from "./commands/DescribeContactCommand";
import {
  DescribeContactEvaluationCommandInput,
  DescribeContactEvaluationCommandOutput,
} from "./commands/DescribeContactEvaluationCommand";
import {
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "./commands/DescribeContactFlowCommand";
import {
  DescribeContactFlowModuleCommandInput,
  DescribeContactFlowModuleCommandOutput,
} from "./commands/DescribeContactFlowModuleCommand";
import {
  DescribeEmailAddressCommandInput,
  DescribeEmailAddressCommandOutput,
} from "./commands/DescribeEmailAddressCommand";
import {
  DescribeEvaluationFormCommandInput,
  DescribeEvaluationFormCommandOutput,
} from "./commands/DescribeEvaluationFormCommand";
import {
  DescribeHoursOfOperationCommandInput,
  DescribeHoursOfOperationCommandOutput,
} from "./commands/DescribeHoursOfOperationCommand";
import {
  DescribeHoursOfOperationOverrideCommandInput,
  DescribeHoursOfOperationOverrideCommandOutput,
} from "./commands/DescribeHoursOfOperationOverrideCommand";
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
import {
  DescribePredefinedAttributeCommandInput,
  DescribePredefinedAttributeCommandOutput,
} from "./commands/DescribePredefinedAttributeCommand";
import { DescribePromptCommandInput, DescribePromptCommandOutput } from "./commands/DescribePromptCommand";
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
import { DescribeViewCommandInput, DescribeViewCommandOutput } from "./commands/DescribeViewCommand";
import { DescribeVocabularyCommandInput, DescribeVocabularyCommandOutput } from "./commands/DescribeVocabularyCommand";
import {
  DisassociateAnalyticsDataSetCommandInput,
  DisassociateAnalyticsDataSetCommandOutput,
} from "./commands/DisassociateAnalyticsDataSetCommand";
import {
  DisassociateApprovedOriginCommandInput,
  DisassociateApprovedOriginCommandOutput,
} from "./commands/DisassociateApprovedOriginCommand";
import { DisassociateBotCommandInput, DisassociateBotCommandOutput } from "./commands/DisassociateBotCommand";
import { DisassociateFlowCommandInput, DisassociateFlowCommandOutput } from "./commands/DisassociateFlowCommand";
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
import {
  DisassociateTrafficDistributionGroupUserCommandInput,
  DisassociateTrafficDistributionGroupUserCommandOutput,
} from "./commands/DisassociateTrafficDistributionGroupUserCommand";
import {
  DisassociateUserProficienciesCommandInput,
  DisassociateUserProficienciesCommandOutput,
} from "./commands/DisassociateUserProficienciesCommand";
import { DismissUserContactCommandInput, DismissUserContactCommandOutput } from "./commands/DismissUserContactCommand";
import { GetAttachedFileCommandInput, GetAttachedFileCommandOutput } from "./commands/GetAttachedFileCommand";
import {
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput,
} from "./commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "./commands/GetCurrentMetricDataCommand";
import { GetCurrentUserDataCommandInput, GetCurrentUserDataCommandOutput } from "./commands/GetCurrentUserDataCommand";
import {
  GetEffectiveHoursOfOperationsCommandInput,
  GetEffectiveHoursOfOperationsCommandOutput,
} from "./commands/GetEffectiveHoursOfOperationsCommand";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput } from "./commands/GetFederationTokenCommand";
import { GetFlowAssociationCommandInput, GetFlowAssociationCommandOutput } from "./commands/GetFlowAssociationCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand";
import { GetMetricDataV2CommandInput, GetMetricDataV2CommandOutput } from "./commands/GetMetricDataV2Command";
import { GetPromptFileCommandInput, GetPromptFileCommandOutput } from "./commands/GetPromptFileCommand";
import { GetTaskTemplateCommandInput, GetTaskTemplateCommandOutput } from "./commands/GetTaskTemplateCommand";
import {
  GetTrafficDistributionCommandInput,
  GetTrafficDistributionCommandOutput,
} from "./commands/GetTrafficDistributionCommand";
import { ImportPhoneNumberCommandInput, ImportPhoneNumberCommandOutput } from "./commands/ImportPhoneNumberCommand";
import { ListAgentStatusesCommandInput, ListAgentStatusesCommandOutput } from "./commands/ListAgentStatusesCommand";
import {
  ListAnalyticsDataAssociationsCommandInput,
  ListAnalyticsDataAssociationsCommandOutput,
} from "./commands/ListAnalyticsDataAssociationsCommand";
import {
  ListAnalyticsDataLakeDataSetsCommandInput,
  ListAnalyticsDataLakeDataSetsCommandOutput,
} from "./commands/ListAnalyticsDataLakeDataSetsCommand";
import {
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "./commands/ListApprovedOriginsCommand";
import {
  ListAssociatedContactsCommandInput,
  ListAssociatedContactsCommandOutput,
} from "./commands/ListAssociatedContactsCommand";
import {
  ListAuthenticationProfilesCommandInput,
  ListAuthenticationProfilesCommandOutput,
} from "./commands/ListAuthenticationProfilesCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListContactEvaluationsCommandInput,
  ListContactEvaluationsCommandOutput,
} from "./commands/ListContactEvaluationsCommand";
import {
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "./commands/ListContactFlowModulesCommand";
import { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "./commands/ListContactFlowsCommand";
import {
  ListContactFlowVersionsCommandInput,
  ListContactFlowVersionsCommandOutput,
} from "./commands/ListContactFlowVersionsCommand";
import {
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "./commands/ListContactReferencesCommand";
import {
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "./commands/ListDefaultVocabulariesCommand";
import {
  ListEvaluationFormsCommandInput,
  ListEvaluationFormsCommandOutput,
} from "./commands/ListEvaluationFormsCommand";
import {
  ListEvaluationFormVersionsCommandInput,
  ListEvaluationFormVersionsCommandOutput,
} from "./commands/ListEvaluationFormVersionsCommand";
import {
  ListFlowAssociationsCommandInput,
  ListFlowAssociationsCommandOutput,
} from "./commands/ListFlowAssociationsCommand";
import {
  ListHoursOfOperationOverridesCommandInput,
  ListHoursOfOperationOverridesCommandOutput,
} from "./commands/ListHoursOfOperationOverridesCommand";
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
import {
  ListPredefinedAttributesCommandInput,
  ListPredefinedAttributesCommandOutput,
} from "./commands/ListPredefinedAttributesCommand";
import { ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import {
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "./commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import { ListQuickConnectsCommandInput, ListQuickConnectsCommandOutput } from "./commands/ListQuickConnectsCommand";
import {
  ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ListRealtimeContactAnalysisSegmentsV2CommandOutput,
} from "./commands/ListRealtimeContactAnalysisSegmentsV2Command";
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
  ListSecurityProfileApplicationsCommandInput,
  ListSecurityProfileApplicationsCommandOutput,
} from "./commands/ListSecurityProfileApplicationsCommand";
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
import {
  ListTrafficDistributionGroupUsersCommandInput,
  ListTrafficDistributionGroupUsersCommandOutput,
} from "./commands/ListTrafficDistributionGroupUsersCommand";
import { ListUseCasesCommandInput, ListUseCasesCommandOutput } from "./commands/ListUseCasesCommand";
import {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "./commands/ListUserHierarchyGroupsCommand";
import {
  ListUserProficienciesCommandInput,
  ListUserProficienciesCommandOutput,
} from "./commands/ListUserProficienciesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListViewsCommandInput, ListViewsCommandOutput } from "./commands/ListViewsCommand";
import { ListViewVersionsCommandInput, ListViewVersionsCommandOutput } from "./commands/ListViewVersionsCommand";
import { MonitorContactCommandInput, MonitorContactCommandOutput } from "./commands/MonitorContactCommand";
import { PauseContactCommandInput, PauseContactCommandOutput } from "./commands/PauseContactCommand";
import { PutUserStatusCommandInput, PutUserStatusCommandOutput } from "./commands/PutUserStatusCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "./commands/ReleasePhoneNumberCommand";
import { ReplicateInstanceCommandInput, ReplicateInstanceCommandOutput } from "./commands/ReplicateInstanceCommand";
import { ResumeContactCommandInput, ResumeContactCommandOutput } from "./commands/ResumeContactCommand";
import {
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "./commands/ResumeContactRecordingCommand";
import {
  SearchAgentStatusesCommandInput,
  SearchAgentStatusesCommandOutput,
} from "./commands/SearchAgentStatusesCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  SearchContactFlowModulesCommandInput,
  SearchContactFlowModulesCommandOutput,
} from "./commands/SearchContactFlowModulesCommand";
import { SearchContactFlowsCommandInput, SearchContactFlowsCommandOutput } from "./commands/SearchContactFlowsCommand";
import { SearchContactsCommandInput, SearchContactsCommandOutput } from "./commands/SearchContactsCommand";
import {
  SearchEmailAddressesCommandInput,
  SearchEmailAddressesCommandOutput,
} from "./commands/SearchEmailAddressesCommand";
import {
  SearchHoursOfOperationOverridesCommandInput,
  SearchHoursOfOperationOverridesCommandOutput,
} from "./commands/SearchHoursOfOperationOverridesCommand";
import {
  SearchHoursOfOperationsCommandInput,
  SearchHoursOfOperationsCommandOutput,
} from "./commands/SearchHoursOfOperationsCommand";
import {
  SearchPredefinedAttributesCommandInput,
  SearchPredefinedAttributesCommandOutput,
} from "./commands/SearchPredefinedAttributesCommand";
import { SearchPromptsCommandInput, SearchPromptsCommandOutput } from "./commands/SearchPromptsCommand";
import { SearchQueuesCommandInput, SearchQueuesCommandOutput } from "./commands/SearchQueuesCommand";
import {
  SearchQuickConnectsCommandInput,
  SearchQuickConnectsCommandOutput,
} from "./commands/SearchQuickConnectsCommand";
import { SearchResourceTagsCommandInput, SearchResourceTagsCommandOutput } from "./commands/SearchResourceTagsCommand";
import {
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "./commands/SearchRoutingProfilesCommand";
import {
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
} from "./commands/SearchSecurityProfilesCommand";
import {
  SearchUserHierarchyGroupsCommandInput,
  SearchUserHierarchyGroupsCommandOutput,
} from "./commands/SearchUserHierarchyGroupsCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import { SearchVocabulariesCommandInput, SearchVocabulariesCommandOutput } from "./commands/SearchVocabulariesCommand";
import {
  SendChatIntegrationEventCommandInput,
  SendChatIntegrationEventCommandOutput,
} from "./commands/SendChatIntegrationEventCommand";
import { SendOutboundEmailCommandInput, SendOutboundEmailCommandOutput } from "./commands/SendOutboundEmailCommand";
import {
  StartAttachedFileUploadCommandInput,
  StartAttachedFileUploadCommandOutput,
} from "./commands/StartAttachedFileUploadCommand";
import { StartChatContactCommandInput, StartChatContactCommandOutput } from "./commands/StartChatContactCommand";
import {
  StartContactEvaluationCommandInput,
  StartContactEvaluationCommandOutput,
} from "./commands/StartContactEvaluationCommand";
import {
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "./commands/StartContactRecordingCommand";
import {
  StartContactStreamingCommandInput,
  StartContactStreamingCommandOutput,
} from "./commands/StartContactStreamingCommand";
import { StartEmailContactCommandInput, StartEmailContactCommandOutput } from "./commands/StartEmailContactCommand";
import {
  StartOutboundChatContactCommandInput,
  StartOutboundChatContactCommandOutput,
} from "./commands/StartOutboundChatContactCommand";
import {
  StartOutboundEmailContactCommandInput,
  StartOutboundEmailContactCommandOutput,
} from "./commands/StartOutboundEmailContactCommand";
import {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "./commands/StartOutboundVoiceContactCommand";
import { StartScreenSharingCommandInput, StartScreenSharingCommandOutput } from "./commands/StartScreenSharingCommand";
import { StartTaskContactCommandInput, StartTaskContactCommandOutput } from "./commands/StartTaskContactCommand";
import { StartWebRTCContactCommandInput, StartWebRTCContactCommandOutput } from "./commands/StartWebRTCContactCommand";
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
  SubmitContactEvaluationCommandInput,
  SubmitContactEvaluationCommandOutput,
} from "./commands/SubmitContactEvaluationCommand";
import {
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "./commands/SuspendContactRecordingCommand";
import { TagContactCommandInput, TagContactCommandOutput } from "./commands/TagContactCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TransferContactCommandInput, TransferContactCommandOutput } from "./commands/TransferContactCommand";
import { UntagContactCommandInput, UntagContactCommandOutput } from "./commands/UntagContactCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAgentStatusCommandInput, UpdateAgentStatusCommandOutput } from "./commands/UpdateAgentStatusCommand";
import {
  UpdateAuthenticationProfileCommandInput,
  UpdateAuthenticationProfileCommandOutput,
} from "./commands/UpdateAuthenticationProfileCommand";
import {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "./commands/UpdateContactAttributesCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "./commands/UpdateContactCommand";
import {
  UpdateContactEvaluationCommandInput,
  UpdateContactEvaluationCommandOutput,
} from "./commands/UpdateContactEvaluationCommand";
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
  UpdateContactRoutingDataCommandInput,
  UpdateContactRoutingDataCommandOutput,
} from "./commands/UpdateContactRoutingDataCommand";
import {
  UpdateContactScheduleCommandInput,
  UpdateContactScheduleCommandOutput,
} from "./commands/UpdateContactScheduleCommand";
import {
  UpdateEmailAddressMetadataCommandInput,
  UpdateEmailAddressMetadataCommandOutput,
} from "./commands/UpdateEmailAddressMetadataCommand";
import {
  UpdateEvaluationFormCommandInput,
  UpdateEvaluationFormCommandOutput,
} from "./commands/UpdateEvaluationFormCommand";
import {
  UpdateHoursOfOperationCommandInput,
  UpdateHoursOfOperationCommandOutput,
} from "./commands/UpdateHoursOfOperationCommand";
import {
  UpdateHoursOfOperationOverrideCommandInput,
  UpdateHoursOfOperationOverrideCommandOutput,
} from "./commands/UpdateHoursOfOperationOverrideCommand";
import {
  UpdateInstanceAttributeCommandInput,
  UpdateInstanceAttributeCommandOutput,
} from "./commands/UpdateInstanceAttributeCommand";
import {
  UpdateInstanceStorageConfigCommandInput,
  UpdateInstanceStorageConfigCommandOutput,
} from "./commands/UpdateInstanceStorageConfigCommand";
import {
  UpdateParticipantAuthenticationCommandInput,
  UpdateParticipantAuthenticationCommandOutput,
} from "./commands/UpdateParticipantAuthenticationCommand";
import {
  UpdateParticipantRoleConfigCommandInput,
  UpdateParticipantRoleConfigCommandOutput,
} from "./commands/UpdateParticipantRoleConfigCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberMetadataCommandInput,
  UpdatePhoneNumberMetadataCommandOutput,
} from "./commands/UpdatePhoneNumberMetadataCommand";
import {
  UpdatePredefinedAttributeCommandInput,
  UpdatePredefinedAttributeCommandOutput,
} from "./commands/UpdatePredefinedAttributeCommand";
import { UpdatePromptCommandInput, UpdatePromptCommandOutput } from "./commands/UpdatePromptCommand";
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
import {
  UpdateQueueOutboundEmailConfigCommandInput,
  UpdateQueueOutboundEmailConfigCommandOutput,
} from "./commands/UpdateQueueOutboundEmailConfigCommand";
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
  UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
  UpdateRoutingProfileAgentAvailabilityTimerCommandOutput,
} from "./commands/UpdateRoutingProfileAgentAvailabilityTimerCommand";
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
  UpdateUserProficienciesCommandInput,
  UpdateUserProficienciesCommandOutput,
} from "./commands/UpdateUserProficienciesCommand";
import {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "./commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "./commands/UpdateUserSecurityProfilesCommand";
import { UpdateViewContentCommandInput, UpdateViewContentCommandOutput } from "./commands/UpdateViewContentCommand";
import { UpdateViewMetadataCommandInput, UpdateViewMetadataCommandOutput } from "./commands/UpdateViewMetadataCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | ActivateEvaluationFormCommandInput
  | AssociateAnalyticsDataSetCommandInput
  | AssociateApprovedOriginCommandInput
  | AssociateBotCommandInput
  | AssociateDefaultVocabularyCommandInput
  | AssociateFlowCommandInput
  | AssociateInstanceStorageConfigCommandInput
  | AssociateLambdaFunctionCommandInput
  | AssociateLexBotCommandInput
  | AssociatePhoneNumberContactFlowCommandInput
  | AssociateQueueQuickConnectsCommandInput
  | AssociateRoutingProfileQueuesCommandInput
  | AssociateSecurityKeyCommandInput
  | AssociateTrafficDistributionGroupUserCommandInput
  | AssociateUserProficienciesCommandInput
  | BatchAssociateAnalyticsDataSetCommandInput
  | BatchDisassociateAnalyticsDataSetCommandInput
  | BatchGetAttachedFileMetadataCommandInput
  | BatchGetFlowAssociationCommandInput
  | BatchPutContactCommandInput
  | ClaimPhoneNumberCommandInput
  | CompleteAttachedFileUploadCommandInput
  | CreateAgentStatusCommandInput
  | CreateContactCommandInput
  | CreateContactFlowCommandInput
  | CreateContactFlowModuleCommandInput
  | CreateContactFlowVersionCommandInput
  | CreateEmailAddressCommandInput
  | CreateEvaluationFormCommandInput
  | CreateHoursOfOperationCommandInput
  | CreateHoursOfOperationOverrideCommandInput
  | CreateInstanceCommandInput
  | CreateIntegrationAssociationCommandInput
  | CreateParticipantCommandInput
  | CreatePersistentContactAssociationCommandInput
  | CreatePredefinedAttributeCommandInput
  | CreatePromptCommandInput
  | CreatePushNotificationRegistrationCommandInput
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
  | CreateViewCommandInput
  | CreateViewVersionCommandInput
  | CreateVocabularyCommandInput
  | DeactivateEvaluationFormCommandInput
  | DeleteAttachedFileCommandInput
  | DeleteContactEvaluationCommandInput
  | DeleteContactFlowCommandInput
  | DeleteContactFlowModuleCommandInput
  | DeleteContactFlowVersionCommandInput
  | DeleteEmailAddressCommandInput
  | DeleteEvaluationFormCommandInput
  | DeleteHoursOfOperationCommandInput
  | DeleteHoursOfOperationOverrideCommandInput
  | DeleteInstanceCommandInput
  | DeleteIntegrationAssociationCommandInput
  | DeletePredefinedAttributeCommandInput
  | DeletePromptCommandInput
  | DeletePushNotificationRegistrationCommandInput
  | DeleteQueueCommandInput
  | DeleteQuickConnectCommandInput
  | DeleteRoutingProfileCommandInput
  | DeleteRuleCommandInput
  | DeleteSecurityProfileCommandInput
  | DeleteTaskTemplateCommandInput
  | DeleteTrafficDistributionGroupCommandInput
  | DeleteUseCaseCommandInput
  | DeleteUserCommandInput
  | DeleteUserHierarchyGroupCommandInput
  | DeleteViewCommandInput
  | DeleteViewVersionCommandInput
  | DeleteVocabularyCommandInput
  | DescribeAgentStatusCommandInput
  | DescribeAuthenticationProfileCommandInput
  | DescribeContactCommandInput
  | DescribeContactEvaluationCommandInput
  | DescribeContactFlowCommandInput
  | DescribeContactFlowModuleCommandInput
  | DescribeEmailAddressCommandInput
  | DescribeEvaluationFormCommandInput
  | DescribeHoursOfOperationCommandInput
  | DescribeHoursOfOperationOverrideCommandInput
  | DescribeInstanceAttributeCommandInput
  | DescribeInstanceCommandInput
  | DescribeInstanceStorageConfigCommandInput
  | DescribePhoneNumberCommandInput
  | DescribePredefinedAttributeCommandInput
  | DescribePromptCommandInput
  | DescribeQueueCommandInput
  | DescribeQuickConnectCommandInput
  | DescribeRoutingProfileCommandInput
  | DescribeRuleCommandInput
  | DescribeSecurityProfileCommandInput
  | DescribeTrafficDistributionGroupCommandInput
  | DescribeUserCommandInput
  | DescribeUserHierarchyGroupCommandInput
  | DescribeUserHierarchyStructureCommandInput
  | DescribeViewCommandInput
  | DescribeVocabularyCommandInput
  | DisassociateAnalyticsDataSetCommandInput
  | DisassociateApprovedOriginCommandInput
  | DisassociateBotCommandInput
  | DisassociateFlowCommandInput
  | DisassociateInstanceStorageConfigCommandInput
  | DisassociateLambdaFunctionCommandInput
  | DisassociateLexBotCommandInput
  | DisassociatePhoneNumberContactFlowCommandInput
  | DisassociateQueueQuickConnectsCommandInput
  | DisassociateRoutingProfileQueuesCommandInput
  | DisassociateSecurityKeyCommandInput
  | DisassociateTrafficDistributionGroupUserCommandInput
  | DisassociateUserProficienciesCommandInput
  | DismissUserContactCommandInput
  | GetAttachedFileCommandInput
  | GetContactAttributesCommandInput
  | GetCurrentMetricDataCommandInput
  | GetCurrentUserDataCommandInput
  | GetEffectiveHoursOfOperationsCommandInput
  | GetFederationTokenCommandInput
  | GetFlowAssociationCommandInput
  | GetMetricDataCommandInput
  | GetMetricDataV2CommandInput
  | GetPromptFileCommandInput
  | GetTaskTemplateCommandInput
  | GetTrafficDistributionCommandInput
  | ImportPhoneNumberCommandInput
  | ListAgentStatusesCommandInput
  | ListAnalyticsDataAssociationsCommandInput
  | ListAnalyticsDataLakeDataSetsCommandInput
  | ListApprovedOriginsCommandInput
  | ListAssociatedContactsCommandInput
  | ListAuthenticationProfilesCommandInput
  | ListBotsCommandInput
  | ListContactEvaluationsCommandInput
  | ListContactFlowModulesCommandInput
  | ListContactFlowVersionsCommandInput
  | ListContactFlowsCommandInput
  | ListContactReferencesCommandInput
  | ListDefaultVocabulariesCommandInput
  | ListEvaluationFormVersionsCommandInput
  | ListEvaluationFormsCommandInput
  | ListFlowAssociationsCommandInput
  | ListHoursOfOperationOverridesCommandInput
  | ListHoursOfOperationsCommandInput
  | ListInstanceAttributesCommandInput
  | ListInstanceStorageConfigsCommandInput
  | ListInstancesCommandInput
  | ListIntegrationAssociationsCommandInput
  | ListLambdaFunctionsCommandInput
  | ListLexBotsCommandInput
  | ListPhoneNumbersCommandInput
  | ListPhoneNumbersV2CommandInput
  | ListPredefinedAttributesCommandInput
  | ListPromptsCommandInput
  | ListQueueQuickConnectsCommandInput
  | ListQueuesCommandInput
  | ListQuickConnectsCommandInput
  | ListRealtimeContactAnalysisSegmentsV2CommandInput
  | ListRoutingProfileQueuesCommandInput
  | ListRoutingProfilesCommandInput
  | ListRulesCommandInput
  | ListSecurityKeysCommandInput
  | ListSecurityProfileApplicationsCommandInput
  | ListSecurityProfilePermissionsCommandInput
  | ListSecurityProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskTemplatesCommandInput
  | ListTrafficDistributionGroupUsersCommandInput
  | ListTrafficDistributionGroupsCommandInput
  | ListUseCasesCommandInput
  | ListUserHierarchyGroupsCommandInput
  | ListUserProficienciesCommandInput
  | ListUsersCommandInput
  | ListViewVersionsCommandInput
  | ListViewsCommandInput
  | MonitorContactCommandInput
  | PauseContactCommandInput
  | PutUserStatusCommandInput
  | ReleasePhoneNumberCommandInput
  | ReplicateInstanceCommandInput
  | ResumeContactCommandInput
  | ResumeContactRecordingCommandInput
  | SearchAgentStatusesCommandInput
  | SearchAvailablePhoneNumbersCommandInput
  | SearchContactFlowModulesCommandInput
  | SearchContactFlowsCommandInput
  | SearchContactsCommandInput
  | SearchEmailAddressesCommandInput
  | SearchHoursOfOperationOverridesCommandInput
  | SearchHoursOfOperationsCommandInput
  | SearchPredefinedAttributesCommandInput
  | SearchPromptsCommandInput
  | SearchQueuesCommandInput
  | SearchQuickConnectsCommandInput
  | SearchResourceTagsCommandInput
  | SearchRoutingProfilesCommandInput
  | SearchSecurityProfilesCommandInput
  | SearchUserHierarchyGroupsCommandInput
  | SearchUsersCommandInput
  | SearchVocabulariesCommandInput
  | SendChatIntegrationEventCommandInput
  | SendOutboundEmailCommandInput
  | StartAttachedFileUploadCommandInput
  | StartChatContactCommandInput
  | StartContactEvaluationCommandInput
  | StartContactRecordingCommandInput
  | StartContactStreamingCommandInput
  | StartEmailContactCommandInput
  | StartOutboundChatContactCommandInput
  | StartOutboundEmailContactCommandInput
  | StartOutboundVoiceContactCommandInput
  | StartScreenSharingCommandInput
  | StartTaskContactCommandInput
  | StartWebRTCContactCommandInput
  | StopContactCommandInput
  | StopContactRecordingCommandInput
  | StopContactStreamingCommandInput
  | SubmitContactEvaluationCommandInput
  | SuspendContactRecordingCommandInput
  | TagContactCommandInput
  | TagResourceCommandInput
  | TransferContactCommandInput
  | UntagContactCommandInput
  | UntagResourceCommandInput
  | UpdateAgentStatusCommandInput
  | UpdateAuthenticationProfileCommandInput
  | UpdateContactAttributesCommandInput
  | UpdateContactCommandInput
  | UpdateContactEvaluationCommandInput
  | UpdateContactFlowContentCommandInput
  | UpdateContactFlowMetadataCommandInput
  | UpdateContactFlowModuleContentCommandInput
  | UpdateContactFlowModuleMetadataCommandInput
  | UpdateContactFlowNameCommandInput
  | UpdateContactRoutingDataCommandInput
  | UpdateContactScheduleCommandInput
  | UpdateEmailAddressMetadataCommandInput
  | UpdateEvaluationFormCommandInput
  | UpdateHoursOfOperationCommandInput
  | UpdateHoursOfOperationOverrideCommandInput
  | UpdateInstanceAttributeCommandInput
  | UpdateInstanceStorageConfigCommandInput
  | UpdateParticipantAuthenticationCommandInput
  | UpdateParticipantRoleConfigCommandInput
  | UpdatePhoneNumberCommandInput
  | UpdatePhoneNumberMetadataCommandInput
  | UpdatePredefinedAttributeCommandInput
  | UpdatePromptCommandInput
  | UpdateQueueHoursOfOperationCommandInput
  | UpdateQueueMaxContactsCommandInput
  | UpdateQueueNameCommandInput
  | UpdateQueueOutboundCallerConfigCommandInput
  | UpdateQueueOutboundEmailConfigCommandInput
  | UpdateQueueStatusCommandInput
  | UpdateQuickConnectConfigCommandInput
  | UpdateQuickConnectNameCommandInput
  | UpdateRoutingProfileAgentAvailabilityTimerCommandInput
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
  | UpdateUserProficienciesCommandInput
  | UpdateUserRoutingProfileCommandInput
  | UpdateUserSecurityProfilesCommandInput
  | UpdateViewContentCommandInput
  | UpdateViewMetadataCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ActivateEvaluationFormCommandOutput
  | AssociateAnalyticsDataSetCommandOutput
  | AssociateApprovedOriginCommandOutput
  | AssociateBotCommandOutput
  | AssociateDefaultVocabularyCommandOutput
  | AssociateFlowCommandOutput
  | AssociateInstanceStorageConfigCommandOutput
  | AssociateLambdaFunctionCommandOutput
  | AssociateLexBotCommandOutput
  | AssociatePhoneNumberContactFlowCommandOutput
  | AssociateQueueQuickConnectsCommandOutput
  | AssociateRoutingProfileQueuesCommandOutput
  | AssociateSecurityKeyCommandOutput
  | AssociateTrafficDistributionGroupUserCommandOutput
  | AssociateUserProficienciesCommandOutput
  | BatchAssociateAnalyticsDataSetCommandOutput
  | BatchDisassociateAnalyticsDataSetCommandOutput
  | BatchGetAttachedFileMetadataCommandOutput
  | BatchGetFlowAssociationCommandOutput
  | BatchPutContactCommandOutput
  | ClaimPhoneNumberCommandOutput
  | CompleteAttachedFileUploadCommandOutput
  | CreateAgentStatusCommandOutput
  | CreateContactCommandOutput
  | CreateContactFlowCommandOutput
  | CreateContactFlowModuleCommandOutput
  | CreateContactFlowVersionCommandOutput
  | CreateEmailAddressCommandOutput
  | CreateEvaluationFormCommandOutput
  | CreateHoursOfOperationCommandOutput
  | CreateHoursOfOperationOverrideCommandOutput
  | CreateInstanceCommandOutput
  | CreateIntegrationAssociationCommandOutput
  | CreateParticipantCommandOutput
  | CreatePersistentContactAssociationCommandOutput
  | CreatePredefinedAttributeCommandOutput
  | CreatePromptCommandOutput
  | CreatePushNotificationRegistrationCommandOutput
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
  | CreateViewCommandOutput
  | CreateViewVersionCommandOutput
  | CreateVocabularyCommandOutput
  | DeactivateEvaluationFormCommandOutput
  | DeleteAttachedFileCommandOutput
  | DeleteContactEvaluationCommandOutput
  | DeleteContactFlowCommandOutput
  | DeleteContactFlowModuleCommandOutput
  | DeleteContactFlowVersionCommandOutput
  | DeleteEmailAddressCommandOutput
  | DeleteEvaluationFormCommandOutput
  | DeleteHoursOfOperationCommandOutput
  | DeleteHoursOfOperationOverrideCommandOutput
  | DeleteInstanceCommandOutput
  | DeleteIntegrationAssociationCommandOutput
  | DeletePredefinedAttributeCommandOutput
  | DeletePromptCommandOutput
  | DeletePushNotificationRegistrationCommandOutput
  | DeleteQueueCommandOutput
  | DeleteQuickConnectCommandOutput
  | DeleteRoutingProfileCommandOutput
  | DeleteRuleCommandOutput
  | DeleteSecurityProfileCommandOutput
  | DeleteTaskTemplateCommandOutput
  | DeleteTrafficDistributionGroupCommandOutput
  | DeleteUseCaseCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserHierarchyGroupCommandOutput
  | DeleteViewCommandOutput
  | DeleteViewVersionCommandOutput
  | DeleteVocabularyCommandOutput
  | DescribeAgentStatusCommandOutput
  | DescribeAuthenticationProfileCommandOutput
  | DescribeContactCommandOutput
  | DescribeContactEvaluationCommandOutput
  | DescribeContactFlowCommandOutput
  | DescribeContactFlowModuleCommandOutput
  | DescribeEmailAddressCommandOutput
  | DescribeEvaluationFormCommandOutput
  | DescribeHoursOfOperationCommandOutput
  | DescribeHoursOfOperationOverrideCommandOutput
  | DescribeInstanceAttributeCommandOutput
  | DescribeInstanceCommandOutput
  | DescribeInstanceStorageConfigCommandOutput
  | DescribePhoneNumberCommandOutput
  | DescribePredefinedAttributeCommandOutput
  | DescribePromptCommandOutput
  | DescribeQueueCommandOutput
  | DescribeQuickConnectCommandOutput
  | DescribeRoutingProfileCommandOutput
  | DescribeRuleCommandOutput
  | DescribeSecurityProfileCommandOutput
  | DescribeTrafficDistributionGroupCommandOutput
  | DescribeUserCommandOutput
  | DescribeUserHierarchyGroupCommandOutput
  | DescribeUserHierarchyStructureCommandOutput
  | DescribeViewCommandOutput
  | DescribeVocabularyCommandOutput
  | DisassociateAnalyticsDataSetCommandOutput
  | DisassociateApprovedOriginCommandOutput
  | DisassociateBotCommandOutput
  | DisassociateFlowCommandOutput
  | DisassociateInstanceStorageConfigCommandOutput
  | DisassociateLambdaFunctionCommandOutput
  | DisassociateLexBotCommandOutput
  | DisassociatePhoneNumberContactFlowCommandOutput
  | DisassociateQueueQuickConnectsCommandOutput
  | DisassociateRoutingProfileQueuesCommandOutput
  | DisassociateSecurityKeyCommandOutput
  | DisassociateTrafficDistributionGroupUserCommandOutput
  | DisassociateUserProficienciesCommandOutput
  | DismissUserContactCommandOutput
  | GetAttachedFileCommandOutput
  | GetContactAttributesCommandOutput
  | GetCurrentMetricDataCommandOutput
  | GetCurrentUserDataCommandOutput
  | GetEffectiveHoursOfOperationsCommandOutput
  | GetFederationTokenCommandOutput
  | GetFlowAssociationCommandOutput
  | GetMetricDataCommandOutput
  | GetMetricDataV2CommandOutput
  | GetPromptFileCommandOutput
  | GetTaskTemplateCommandOutput
  | GetTrafficDistributionCommandOutput
  | ImportPhoneNumberCommandOutput
  | ListAgentStatusesCommandOutput
  | ListAnalyticsDataAssociationsCommandOutput
  | ListAnalyticsDataLakeDataSetsCommandOutput
  | ListApprovedOriginsCommandOutput
  | ListAssociatedContactsCommandOutput
  | ListAuthenticationProfilesCommandOutput
  | ListBotsCommandOutput
  | ListContactEvaluationsCommandOutput
  | ListContactFlowModulesCommandOutput
  | ListContactFlowVersionsCommandOutput
  | ListContactFlowsCommandOutput
  | ListContactReferencesCommandOutput
  | ListDefaultVocabulariesCommandOutput
  | ListEvaluationFormVersionsCommandOutput
  | ListEvaluationFormsCommandOutput
  | ListFlowAssociationsCommandOutput
  | ListHoursOfOperationOverridesCommandOutput
  | ListHoursOfOperationsCommandOutput
  | ListInstanceAttributesCommandOutput
  | ListInstanceStorageConfigsCommandOutput
  | ListInstancesCommandOutput
  | ListIntegrationAssociationsCommandOutput
  | ListLambdaFunctionsCommandOutput
  | ListLexBotsCommandOutput
  | ListPhoneNumbersCommandOutput
  | ListPhoneNumbersV2CommandOutput
  | ListPredefinedAttributesCommandOutput
  | ListPromptsCommandOutput
  | ListQueueQuickConnectsCommandOutput
  | ListQueuesCommandOutput
  | ListQuickConnectsCommandOutput
  | ListRealtimeContactAnalysisSegmentsV2CommandOutput
  | ListRoutingProfileQueuesCommandOutput
  | ListRoutingProfilesCommandOutput
  | ListRulesCommandOutput
  | ListSecurityKeysCommandOutput
  | ListSecurityProfileApplicationsCommandOutput
  | ListSecurityProfilePermissionsCommandOutput
  | ListSecurityProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskTemplatesCommandOutput
  | ListTrafficDistributionGroupUsersCommandOutput
  | ListTrafficDistributionGroupsCommandOutput
  | ListUseCasesCommandOutput
  | ListUserHierarchyGroupsCommandOutput
  | ListUserProficienciesCommandOutput
  | ListUsersCommandOutput
  | ListViewVersionsCommandOutput
  | ListViewsCommandOutput
  | MonitorContactCommandOutput
  | PauseContactCommandOutput
  | PutUserStatusCommandOutput
  | ReleasePhoneNumberCommandOutput
  | ReplicateInstanceCommandOutput
  | ResumeContactCommandOutput
  | ResumeContactRecordingCommandOutput
  | SearchAgentStatusesCommandOutput
  | SearchAvailablePhoneNumbersCommandOutput
  | SearchContactFlowModulesCommandOutput
  | SearchContactFlowsCommandOutput
  | SearchContactsCommandOutput
  | SearchEmailAddressesCommandOutput
  | SearchHoursOfOperationOverridesCommandOutput
  | SearchHoursOfOperationsCommandOutput
  | SearchPredefinedAttributesCommandOutput
  | SearchPromptsCommandOutput
  | SearchQueuesCommandOutput
  | SearchQuickConnectsCommandOutput
  | SearchResourceTagsCommandOutput
  | SearchRoutingProfilesCommandOutput
  | SearchSecurityProfilesCommandOutput
  | SearchUserHierarchyGroupsCommandOutput
  | SearchUsersCommandOutput
  | SearchVocabulariesCommandOutput
  | SendChatIntegrationEventCommandOutput
  | SendOutboundEmailCommandOutput
  | StartAttachedFileUploadCommandOutput
  | StartChatContactCommandOutput
  | StartContactEvaluationCommandOutput
  | StartContactRecordingCommandOutput
  | StartContactStreamingCommandOutput
  | StartEmailContactCommandOutput
  | StartOutboundChatContactCommandOutput
  | StartOutboundEmailContactCommandOutput
  | StartOutboundVoiceContactCommandOutput
  | StartScreenSharingCommandOutput
  | StartTaskContactCommandOutput
  | StartWebRTCContactCommandOutput
  | StopContactCommandOutput
  | StopContactRecordingCommandOutput
  | StopContactStreamingCommandOutput
  | SubmitContactEvaluationCommandOutput
  | SuspendContactRecordingCommandOutput
  | TagContactCommandOutput
  | TagResourceCommandOutput
  | TransferContactCommandOutput
  | UntagContactCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentStatusCommandOutput
  | UpdateAuthenticationProfileCommandOutput
  | UpdateContactAttributesCommandOutput
  | UpdateContactCommandOutput
  | UpdateContactEvaluationCommandOutput
  | UpdateContactFlowContentCommandOutput
  | UpdateContactFlowMetadataCommandOutput
  | UpdateContactFlowModuleContentCommandOutput
  | UpdateContactFlowModuleMetadataCommandOutput
  | UpdateContactFlowNameCommandOutput
  | UpdateContactRoutingDataCommandOutput
  | UpdateContactScheduleCommandOutput
  | UpdateEmailAddressMetadataCommandOutput
  | UpdateEvaluationFormCommandOutput
  | UpdateHoursOfOperationCommandOutput
  | UpdateHoursOfOperationOverrideCommandOutput
  | UpdateInstanceAttributeCommandOutput
  | UpdateInstanceStorageConfigCommandOutput
  | UpdateParticipantAuthenticationCommandOutput
  | UpdateParticipantRoleConfigCommandOutput
  | UpdatePhoneNumberCommandOutput
  | UpdatePhoneNumberMetadataCommandOutput
  | UpdatePredefinedAttributeCommandOutput
  | UpdatePromptCommandOutput
  | UpdateQueueHoursOfOperationCommandOutput
  | UpdateQueueMaxContactsCommandOutput
  | UpdateQueueNameCommandOutput
  | UpdateQueueOutboundCallerConfigCommandOutput
  | UpdateQueueOutboundEmailConfigCommandOutput
  | UpdateQueueStatusCommandOutput
  | UpdateQuickConnectConfigCommandOutput
  | UpdateQuickConnectNameCommandOutput
  | UpdateRoutingProfileAgentAvailabilityTimerCommandOutput
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
  | UpdateUserProficienciesCommandOutput
  | UpdateUserRoutingProfileCommandOutput
  | UpdateUserSecurityProfilesCommandOutput
  | UpdateViewContentCommandOutput
  | UpdateViewMetadataCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type ConnectClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ConnectClient class constructor that set the region, credentials and other options.
 */
export interface ConnectClientConfig extends ConnectClientConfigType {}

/**
 * @public
 */
export type ConnectClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ConnectClient class. This is resolved and normalized from the {@link ConnectClientConfig | constructor configuration interface}.
 */
export interface ConnectClientResolvedConfig extends ConnectClientResolvedConfigType {}

/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Service.html">Amazon Connect actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Service.html">Amazon Connect
 *       data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect is a cloud-based contact center solution that you use to set up and
 *    manage a customer contact center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides metrics and real-time reporting that enable you to optimize
 *    contact routing. You can also resolve customer issues more efficiently by getting customers in
 *    touch with the appropriate agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create. There
 *    are also limits to the number of requests that you can make per second. For more information, see
 *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 *          <p>You can use an endpoint to connect programmatically to an Amazon Web Services service. For a
 *    list of Amazon Connect endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect Endpoints</a>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<ConnectClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultConnectHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ConnectClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
