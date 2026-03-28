// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultConnectHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  ActivateEvaluationFormCommandInput,
  ActivateEvaluationFormCommandOutput,
} from "./commands/ActivateEvaluationFormCommand";
import type {
  AssociateAnalyticsDataSetCommandInput,
  AssociateAnalyticsDataSetCommandOutput,
} from "./commands/AssociateAnalyticsDataSetCommand";
import type {
  AssociateApprovedOriginCommandInput,
  AssociateApprovedOriginCommandOutput,
} from "./commands/AssociateApprovedOriginCommand";
import type { AssociateBotCommandInput, AssociateBotCommandOutput } from "./commands/AssociateBotCommand";
import type {
  AssociateContactWithUserCommandInput,
  AssociateContactWithUserCommandOutput,
} from "./commands/AssociateContactWithUserCommand";
import type {
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
} from "./commands/AssociateDefaultVocabularyCommand";
import type {
  AssociateEmailAddressAliasCommandInput,
  AssociateEmailAddressAliasCommandOutput,
} from "./commands/AssociateEmailAddressAliasCommand";
import type { AssociateFlowCommandInput, AssociateFlowCommandOutput } from "./commands/AssociateFlowCommand";
import type {
  AssociateHoursOfOperationsCommandInput,
  AssociateHoursOfOperationsCommandOutput,
} from "./commands/AssociateHoursOfOperationsCommand";
import type {
  AssociateInstanceStorageConfigCommandInput,
  AssociateInstanceStorageConfigCommandOutput,
} from "./commands/AssociateInstanceStorageConfigCommand";
import type {
  AssociateLambdaFunctionCommandInput,
  AssociateLambdaFunctionCommandOutput,
} from "./commands/AssociateLambdaFunctionCommand";
import type { AssociateLexBotCommandInput, AssociateLexBotCommandOutput } from "./commands/AssociateLexBotCommand";
import type {
  AssociatePhoneNumberContactFlowCommandInput,
  AssociatePhoneNumberContactFlowCommandOutput,
} from "./commands/AssociatePhoneNumberContactFlowCommand";
import type {
  AssociateQueueEmailAddressesCommandInput,
  AssociateQueueEmailAddressesCommandOutput,
} from "./commands/AssociateQueueEmailAddressesCommand";
import type {
  AssociateQueueQuickConnectsCommandInput,
  AssociateQueueQuickConnectsCommandOutput,
} from "./commands/AssociateQueueQuickConnectsCommand";
import type {
  AssociateRoutingProfileQueuesCommandInput,
  AssociateRoutingProfileQueuesCommandOutput,
} from "./commands/AssociateRoutingProfileQueuesCommand";
import type {
  AssociateSecurityKeyCommandInput,
  AssociateSecurityKeyCommandOutput,
} from "./commands/AssociateSecurityKeyCommand";
import type {
  AssociateSecurityProfilesCommandInput,
  AssociateSecurityProfilesCommandOutput,
} from "./commands/AssociateSecurityProfilesCommand";
import type {
  AssociateTrafficDistributionGroupUserCommandInput,
  AssociateTrafficDistributionGroupUserCommandOutput,
} from "./commands/AssociateTrafficDistributionGroupUserCommand";
import type {
  AssociateUserProficienciesCommandInput,
  AssociateUserProficienciesCommandOutput,
} from "./commands/AssociateUserProficienciesCommand";
import type {
  AssociateWorkspaceCommandInput,
  AssociateWorkspaceCommandOutput,
} from "./commands/AssociateWorkspaceCommand";
import type {
  BatchAssociateAnalyticsDataSetCommandInput,
  BatchAssociateAnalyticsDataSetCommandOutput,
} from "./commands/BatchAssociateAnalyticsDataSetCommand";
import type {
  BatchCreateDataTableValueCommandInput,
  BatchCreateDataTableValueCommandOutput,
} from "./commands/BatchCreateDataTableValueCommand";
import type {
  BatchDeleteDataTableValueCommandInput,
  BatchDeleteDataTableValueCommandOutput,
} from "./commands/BatchDeleteDataTableValueCommand";
import type {
  BatchDescribeDataTableValueCommandInput,
  BatchDescribeDataTableValueCommandOutput,
} from "./commands/BatchDescribeDataTableValueCommand";
import type {
  BatchDisassociateAnalyticsDataSetCommandInput,
  BatchDisassociateAnalyticsDataSetCommandOutput,
} from "./commands/BatchDisassociateAnalyticsDataSetCommand";
import type {
  BatchGetAttachedFileMetadataCommandInput,
  BatchGetAttachedFileMetadataCommandOutput,
} from "./commands/BatchGetAttachedFileMetadataCommand";
import type {
  BatchGetFlowAssociationCommandInput,
  BatchGetFlowAssociationCommandOutput,
} from "./commands/BatchGetFlowAssociationCommand";
import type { BatchPutContactCommandInput, BatchPutContactCommandOutput } from "./commands/BatchPutContactCommand";
import type {
  BatchUpdateDataTableValueCommandInput,
  BatchUpdateDataTableValueCommandOutput,
} from "./commands/BatchUpdateDataTableValueCommand";
import type { ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput } from "./commands/ClaimPhoneNumberCommand";
import type {
  CompleteAttachedFileUploadCommandInput,
  CompleteAttachedFileUploadCommandOutput,
} from "./commands/CompleteAttachedFileUploadCommand";
import type {
  CreateAgentStatusCommandInput,
  CreateAgentStatusCommandOutput,
} from "./commands/CreateAgentStatusCommand";
import type { CreateContactCommandInput, CreateContactCommandOutput } from "./commands/CreateContactCommand";
import type {
  CreateContactFlowCommandInput,
  CreateContactFlowCommandOutput,
} from "./commands/CreateContactFlowCommand";
import type {
  CreateContactFlowModuleAliasCommandInput,
  CreateContactFlowModuleAliasCommandOutput,
} from "./commands/CreateContactFlowModuleAliasCommand";
import type {
  CreateContactFlowModuleCommandInput,
  CreateContactFlowModuleCommandOutput,
} from "./commands/CreateContactFlowModuleCommand";
import type {
  CreateContactFlowModuleVersionCommandInput,
  CreateContactFlowModuleVersionCommandOutput,
} from "./commands/CreateContactFlowModuleVersionCommand";
import type {
  CreateContactFlowVersionCommandInput,
  CreateContactFlowVersionCommandOutput,
} from "./commands/CreateContactFlowVersionCommand";
import type {
  CreateDataTableAttributeCommandInput,
  CreateDataTableAttributeCommandOutput,
} from "./commands/CreateDataTableAttributeCommand";
import type { CreateDataTableCommandInput, CreateDataTableCommandOutput } from "./commands/CreateDataTableCommand";
import type {
  CreateEmailAddressCommandInput,
  CreateEmailAddressCommandOutput,
} from "./commands/CreateEmailAddressCommand";
import type {
  CreateEvaluationFormCommandInput,
  CreateEvaluationFormCommandOutput,
} from "./commands/CreateEvaluationFormCommand";
import type {
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
} from "./commands/CreateHoursOfOperationCommand";
import type {
  CreateHoursOfOperationOverrideCommandInput,
  CreateHoursOfOperationOverrideCommandOutput,
} from "./commands/CreateHoursOfOperationOverrideCommand";
import type { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand";
import type {
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
} from "./commands/CreateIntegrationAssociationCommand";
import type {
  CreateNotificationCommandInput,
  CreateNotificationCommandOutput,
} from "./commands/CreateNotificationCommand";
import type {
  CreateParticipantCommandInput,
  CreateParticipantCommandOutput,
} from "./commands/CreateParticipantCommand";
import type {
  CreatePersistentContactAssociationCommandInput,
  CreatePersistentContactAssociationCommandOutput,
} from "./commands/CreatePersistentContactAssociationCommand";
import type {
  CreatePredefinedAttributeCommandInput,
  CreatePredefinedAttributeCommandOutput,
} from "./commands/CreatePredefinedAttributeCommand";
import type { CreatePromptCommandInput, CreatePromptCommandOutput } from "./commands/CreatePromptCommand";
import type {
  CreatePushNotificationRegistrationCommandInput,
  CreatePushNotificationRegistrationCommandOutput,
} from "./commands/CreatePushNotificationRegistrationCommand";
import type { CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import type {
  CreateQuickConnectCommandInput,
  CreateQuickConnectCommandOutput,
} from "./commands/CreateQuickConnectCommand";
import type {
  CreateRoutingProfileCommandInput,
  CreateRoutingProfileCommandOutput,
} from "./commands/CreateRoutingProfileCommand";
import type { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import type {
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "./commands/CreateSecurityProfileCommand";
import type {
  CreateTaskTemplateCommandInput,
  CreateTaskTemplateCommandOutput,
} from "./commands/CreateTaskTemplateCommand";
import type { CreateTestCaseCommandInput, CreateTestCaseCommandOutput } from "./commands/CreateTestCaseCommand";
import type {
  CreateTrafficDistributionGroupCommandInput,
  CreateTrafficDistributionGroupCommandOutput,
} from "./commands/CreateTrafficDistributionGroupCommand";
import type { CreateUseCaseCommandInput, CreateUseCaseCommandOutput } from "./commands/CreateUseCaseCommand";
import type { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import type {
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
} from "./commands/CreateUserHierarchyGroupCommand";
import type { CreateViewCommandInput, CreateViewCommandOutput } from "./commands/CreateViewCommand";
import type {
  CreateViewVersionCommandInput,
  CreateViewVersionCommandOutput,
} from "./commands/CreateViewVersionCommand";
import type { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "./commands/CreateVocabularyCommand";
import type { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "./commands/CreateWorkspaceCommand";
import type {
  CreateWorkspacePageCommandInput,
  CreateWorkspacePageCommandOutput,
} from "./commands/CreateWorkspacePageCommand";
import type {
  DeactivateEvaluationFormCommandInput,
  DeactivateEvaluationFormCommandOutput,
} from "./commands/DeactivateEvaluationFormCommand";
import type {
  DeleteAttachedFileCommandInput,
  DeleteAttachedFileCommandOutput,
} from "./commands/DeleteAttachedFileCommand";
import type {
  DeleteContactEvaluationCommandInput,
  DeleteContactEvaluationCommandOutput,
} from "./commands/DeleteContactEvaluationCommand";
import type {
  DeleteContactFlowCommandInput,
  DeleteContactFlowCommandOutput,
} from "./commands/DeleteContactFlowCommand";
import type {
  DeleteContactFlowModuleAliasCommandInput,
  DeleteContactFlowModuleAliasCommandOutput,
} from "./commands/DeleteContactFlowModuleAliasCommand";
import type {
  DeleteContactFlowModuleCommandInput,
  DeleteContactFlowModuleCommandOutput,
} from "./commands/DeleteContactFlowModuleCommand";
import type {
  DeleteContactFlowModuleVersionCommandInput,
  DeleteContactFlowModuleVersionCommandOutput,
} from "./commands/DeleteContactFlowModuleVersionCommand";
import type {
  DeleteContactFlowVersionCommandInput,
  DeleteContactFlowVersionCommandOutput,
} from "./commands/DeleteContactFlowVersionCommand";
import type {
  DeleteDataTableAttributeCommandInput,
  DeleteDataTableAttributeCommandOutput,
} from "./commands/DeleteDataTableAttributeCommand";
import type { DeleteDataTableCommandInput, DeleteDataTableCommandOutput } from "./commands/DeleteDataTableCommand";
import type {
  DeleteEmailAddressCommandInput,
  DeleteEmailAddressCommandOutput,
} from "./commands/DeleteEmailAddressCommand";
import type {
  DeleteEvaluationFormCommandInput,
  DeleteEvaluationFormCommandOutput,
} from "./commands/DeleteEvaluationFormCommand";
import type {
  DeleteHoursOfOperationCommandInput,
  DeleteHoursOfOperationCommandOutput,
} from "./commands/DeleteHoursOfOperationCommand";
import type {
  DeleteHoursOfOperationOverrideCommandInput,
  DeleteHoursOfOperationOverrideCommandOutput,
} from "./commands/DeleteHoursOfOperationOverrideCommand";
import type { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import type {
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
} from "./commands/DeleteIntegrationAssociationCommand";
import type {
  DeleteNotificationCommandInput,
  DeleteNotificationCommandOutput,
} from "./commands/DeleteNotificationCommand";
import type {
  DeletePredefinedAttributeCommandInput,
  DeletePredefinedAttributeCommandOutput,
} from "./commands/DeletePredefinedAttributeCommand";
import type { DeletePromptCommandInput, DeletePromptCommandOutput } from "./commands/DeletePromptCommand";
import type {
  DeletePushNotificationRegistrationCommandInput,
  DeletePushNotificationRegistrationCommandOutput,
} from "./commands/DeletePushNotificationRegistrationCommand";
import type { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import type {
  DeleteQuickConnectCommandInput,
  DeleteQuickConnectCommandOutput,
} from "./commands/DeleteQuickConnectCommand";
import type {
  DeleteRoutingProfileCommandInput,
  DeleteRoutingProfileCommandOutput,
} from "./commands/DeleteRoutingProfileCommand";
import type { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import type {
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "./commands/DeleteSecurityProfileCommand";
import type {
  DeleteTaskTemplateCommandInput,
  DeleteTaskTemplateCommandOutput,
} from "./commands/DeleteTaskTemplateCommand";
import type { DeleteTestCaseCommandInput, DeleteTestCaseCommandOutput } from "./commands/DeleteTestCaseCommand";
import type {
  DeleteTrafficDistributionGroupCommandInput,
  DeleteTrafficDistributionGroupCommandOutput,
} from "./commands/DeleteTrafficDistributionGroupCommand";
import type { DeleteUseCaseCommandInput, DeleteUseCaseCommandOutput } from "./commands/DeleteUseCaseCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DeleteUserHierarchyGroupCommandInput,
  DeleteUserHierarchyGroupCommandOutput,
} from "./commands/DeleteUserHierarchyGroupCommand";
import type { DeleteViewCommandInput, DeleteViewCommandOutput } from "./commands/DeleteViewCommand";
import type {
  DeleteViewVersionCommandInput,
  DeleteViewVersionCommandOutput,
} from "./commands/DeleteViewVersionCommand";
import type { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "./commands/DeleteVocabularyCommand";
import type { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "./commands/DeleteWorkspaceCommand";
import type {
  DeleteWorkspaceMediaCommandInput,
  DeleteWorkspaceMediaCommandOutput,
} from "./commands/DeleteWorkspaceMediaCommand";
import type {
  DeleteWorkspacePageCommandInput,
  DeleteWorkspacePageCommandOutput,
} from "./commands/DeleteWorkspacePageCommand";
import type {
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
} from "./commands/DescribeAgentStatusCommand";
import type {
  DescribeAuthenticationProfileCommandInput,
  DescribeAuthenticationProfileCommandOutput,
} from "./commands/DescribeAuthenticationProfileCommand";
import type { DescribeContactCommandInput, DescribeContactCommandOutput } from "./commands/DescribeContactCommand";
import type {
  DescribeContactEvaluationCommandInput,
  DescribeContactEvaluationCommandOutput,
} from "./commands/DescribeContactEvaluationCommand";
import type {
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "./commands/DescribeContactFlowCommand";
import type {
  DescribeContactFlowModuleAliasCommandInput,
  DescribeContactFlowModuleAliasCommandOutput,
} from "./commands/DescribeContactFlowModuleAliasCommand";
import type {
  DescribeContactFlowModuleCommandInput,
  DescribeContactFlowModuleCommandOutput,
} from "./commands/DescribeContactFlowModuleCommand";
import type {
  DescribeDataTableAttributeCommandInput,
  DescribeDataTableAttributeCommandOutput,
} from "./commands/DescribeDataTableAttributeCommand";
import type {
  DescribeDataTableCommandInput,
  DescribeDataTableCommandOutput,
} from "./commands/DescribeDataTableCommand";
import type {
  DescribeEmailAddressCommandInput,
  DescribeEmailAddressCommandOutput,
} from "./commands/DescribeEmailAddressCommand";
import type {
  DescribeEvaluationFormCommandInput,
  DescribeEvaluationFormCommandOutput,
} from "./commands/DescribeEvaluationFormCommand";
import type {
  DescribeHoursOfOperationCommandInput,
  DescribeHoursOfOperationCommandOutput,
} from "./commands/DescribeHoursOfOperationCommand";
import type {
  DescribeHoursOfOperationOverrideCommandInput,
  DescribeHoursOfOperationOverrideCommandOutput,
} from "./commands/DescribeHoursOfOperationOverrideCommand";
import type {
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "./commands/DescribeInstanceAttributeCommand";
import type { DescribeInstanceCommandInput, DescribeInstanceCommandOutput } from "./commands/DescribeInstanceCommand";
import type {
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
} from "./commands/DescribeInstanceStorageConfigCommand";
import type {
  DescribeNotificationCommandInput,
  DescribeNotificationCommandOutput,
} from "./commands/DescribeNotificationCommand";
import type {
  DescribePhoneNumberCommandInput,
  DescribePhoneNumberCommandOutput,
} from "./commands/DescribePhoneNumberCommand";
import type {
  DescribePredefinedAttributeCommandInput,
  DescribePredefinedAttributeCommandOutput,
} from "./commands/DescribePredefinedAttributeCommand";
import type { DescribePromptCommandInput, DescribePromptCommandOutput } from "./commands/DescribePromptCommand";
import type { DescribeQueueCommandInput, DescribeQueueCommandOutput } from "./commands/DescribeQueueCommand";
import type {
  DescribeQuickConnectCommandInput,
  DescribeQuickConnectCommandOutput,
} from "./commands/DescribeQuickConnectCommand";
import type {
  DescribeRoutingProfileCommandInput,
  DescribeRoutingProfileCommandOutput,
} from "./commands/DescribeRoutingProfileCommand";
import type { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "./commands/DescribeRuleCommand";
import type {
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "./commands/DescribeSecurityProfileCommand";
import type { DescribeTestCaseCommandInput, DescribeTestCaseCommandOutput } from "./commands/DescribeTestCaseCommand";
import type {
  DescribeTrafficDistributionGroupCommandInput,
  DescribeTrafficDistributionGroupCommandOutput,
} from "./commands/DescribeTrafficDistributionGroupCommand";
import type { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import type {
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput,
} from "./commands/DescribeUserHierarchyGroupCommand";
import type {
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
} from "./commands/DescribeUserHierarchyStructureCommand";
import type { DescribeViewCommandInput, DescribeViewCommandOutput } from "./commands/DescribeViewCommand";
import type {
  DescribeVocabularyCommandInput,
  DescribeVocabularyCommandOutput,
} from "./commands/DescribeVocabularyCommand";
import type {
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
import type {
  DisassociateAnalyticsDataSetCommandInput,
  DisassociateAnalyticsDataSetCommandOutput,
} from "./commands/DisassociateAnalyticsDataSetCommand";
import type {
  DisassociateApprovedOriginCommandInput,
  DisassociateApprovedOriginCommandOutput,
} from "./commands/DisassociateApprovedOriginCommand";
import type { DisassociateBotCommandInput, DisassociateBotCommandOutput } from "./commands/DisassociateBotCommand";
import type {
  DisassociateEmailAddressAliasCommandInput,
  DisassociateEmailAddressAliasCommandOutput,
} from "./commands/DisassociateEmailAddressAliasCommand";
import type { DisassociateFlowCommandInput, DisassociateFlowCommandOutput } from "./commands/DisassociateFlowCommand";
import type {
  DisassociateHoursOfOperationsCommandInput,
  DisassociateHoursOfOperationsCommandOutput,
} from "./commands/DisassociateHoursOfOperationsCommand";
import type {
  DisassociateInstanceStorageConfigCommandInput,
  DisassociateInstanceStorageConfigCommandOutput,
} from "./commands/DisassociateInstanceStorageConfigCommand";
import type {
  DisassociateLambdaFunctionCommandInput,
  DisassociateLambdaFunctionCommandOutput,
} from "./commands/DisassociateLambdaFunctionCommand";
import type {
  DisassociateLexBotCommandInput,
  DisassociateLexBotCommandOutput,
} from "./commands/DisassociateLexBotCommand";
import type {
  DisassociatePhoneNumberContactFlowCommandInput,
  DisassociatePhoneNumberContactFlowCommandOutput,
} from "./commands/DisassociatePhoneNumberContactFlowCommand";
import type {
  DisassociateQueueEmailAddressesCommandInput,
  DisassociateQueueEmailAddressesCommandOutput,
} from "./commands/DisassociateQueueEmailAddressesCommand";
import type {
  DisassociateQueueQuickConnectsCommandInput,
  DisassociateQueueQuickConnectsCommandOutput,
} from "./commands/DisassociateQueueQuickConnectsCommand";
import type {
  DisassociateRoutingProfileQueuesCommandInput,
  DisassociateRoutingProfileQueuesCommandOutput,
} from "./commands/DisassociateRoutingProfileQueuesCommand";
import type {
  DisassociateSecurityKeyCommandInput,
  DisassociateSecurityKeyCommandOutput,
} from "./commands/DisassociateSecurityKeyCommand";
import type {
  DisassociateSecurityProfilesCommandInput,
  DisassociateSecurityProfilesCommandOutput,
} from "./commands/DisassociateSecurityProfilesCommand";
import type {
  DisassociateTrafficDistributionGroupUserCommandInput,
  DisassociateTrafficDistributionGroupUserCommandOutput,
} from "./commands/DisassociateTrafficDistributionGroupUserCommand";
import type {
  DisassociateUserProficienciesCommandInput,
  DisassociateUserProficienciesCommandOutput,
} from "./commands/DisassociateUserProficienciesCommand";
import type {
  DisassociateWorkspaceCommandInput,
  DisassociateWorkspaceCommandOutput,
} from "./commands/DisassociateWorkspaceCommand";
import type {
  DismissUserContactCommandInput,
  DismissUserContactCommandOutput,
} from "./commands/DismissUserContactCommand";
import type {
  EvaluateDataTableValuesCommandInput,
  EvaluateDataTableValuesCommandOutput,
} from "./commands/EvaluateDataTableValuesCommand";
import type { GetAttachedFileCommandInput, GetAttachedFileCommandOutput } from "./commands/GetAttachedFileCommand";
import type {
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput,
} from "./commands/GetContactAttributesCommand";
import type {
  GetContactMetricsCommandInput,
  GetContactMetricsCommandOutput,
} from "./commands/GetContactMetricsCommand";
import type {
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "./commands/GetCurrentMetricDataCommand";
import type {
  GetCurrentUserDataCommandInput,
  GetCurrentUserDataCommandOutput,
} from "./commands/GetCurrentUserDataCommand";
import type {
  GetEffectiveHoursOfOperationsCommandInput,
  GetEffectiveHoursOfOperationsCommandOutput,
} from "./commands/GetEffectiveHoursOfOperationsCommand";
import type {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "./commands/GetFederationTokenCommand";
import type {
  GetFlowAssociationCommandInput,
  GetFlowAssociationCommandOutput,
} from "./commands/GetFlowAssociationCommand";
import type { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand";
import type { GetMetricDataV2CommandInput, GetMetricDataV2CommandOutput } from "./commands/GetMetricDataV2Command";
import type { GetPromptFileCommandInput, GetPromptFileCommandOutput } from "./commands/GetPromptFileCommand";
import type { GetTaskTemplateCommandInput, GetTaskTemplateCommandOutput } from "./commands/GetTaskTemplateCommand";
import type {
  GetTestCaseExecutionSummaryCommandInput,
  GetTestCaseExecutionSummaryCommandOutput,
} from "./commands/GetTestCaseExecutionSummaryCommand";
import type {
  GetTrafficDistributionCommandInput,
  GetTrafficDistributionCommandOutput,
} from "./commands/GetTrafficDistributionCommand";
import type {
  ImportPhoneNumberCommandInput,
  ImportPhoneNumberCommandOutput,
} from "./commands/ImportPhoneNumberCommand";
import type {
  ImportWorkspaceMediaCommandInput,
  ImportWorkspaceMediaCommandOutput,
} from "./commands/ImportWorkspaceMediaCommand";
import type {
  ListAgentStatusesCommandInput,
  ListAgentStatusesCommandOutput,
} from "./commands/ListAgentStatusesCommand";
import type {
  ListAnalyticsDataAssociationsCommandInput,
  ListAnalyticsDataAssociationsCommandOutput,
} from "./commands/ListAnalyticsDataAssociationsCommand";
import type {
  ListAnalyticsDataLakeDataSetsCommandInput,
  ListAnalyticsDataLakeDataSetsCommandOutput,
} from "./commands/ListAnalyticsDataLakeDataSetsCommand";
import type {
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "./commands/ListApprovedOriginsCommand";
import type {
  ListAssociatedContactsCommandInput,
  ListAssociatedContactsCommandOutput,
} from "./commands/ListAssociatedContactsCommand";
import type {
  ListAuthenticationProfilesCommandInput,
  ListAuthenticationProfilesCommandOutput,
} from "./commands/ListAuthenticationProfilesCommand";
import type { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import type {
  ListChildHoursOfOperationsCommandInput,
  ListChildHoursOfOperationsCommandOutput,
} from "./commands/ListChildHoursOfOperationsCommand";
import type {
  ListContactEvaluationsCommandInput,
  ListContactEvaluationsCommandOutput,
} from "./commands/ListContactEvaluationsCommand";
import type {
  ListContactFlowModuleAliasesCommandInput,
  ListContactFlowModuleAliasesCommandOutput,
} from "./commands/ListContactFlowModuleAliasesCommand";
import type {
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "./commands/ListContactFlowModulesCommand";
import type {
  ListContactFlowModuleVersionsCommandInput,
  ListContactFlowModuleVersionsCommandOutput,
} from "./commands/ListContactFlowModuleVersionsCommand";
import type { ListContactFlowsCommandInput, ListContactFlowsCommandOutput } from "./commands/ListContactFlowsCommand";
import type {
  ListContactFlowVersionsCommandInput,
  ListContactFlowVersionsCommandOutput,
} from "./commands/ListContactFlowVersionsCommand";
import type {
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "./commands/ListContactReferencesCommand";
import type {
  ListDataTableAttributesCommandInput,
  ListDataTableAttributesCommandOutput,
} from "./commands/ListDataTableAttributesCommand";
import type {
  ListDataTablePrimaryValuesCommandInput,
  ListDataTablePrimaryValuesCommandOutput,
} from "./commands/ListDataTablePrimaryValuesCommand";
import type { ListDataTablesCommandInput, ListDataTablesCommandOutput } from "./commands/ListDataTablesCommand";
import type {
  ListDataTableValuesCommandInput,
  ListDataTableValuesCommandOutput,
} from "./commands/ListDataTableValuesCommand";
import type {
  ListDefaultVocabulariesCommandInput,
  ListDefaultVocabulariesCommandOutput,
} from "./commands/ListDefaultVocabulariesCommand";
import type {
  ListEntitySecurityProfilesCommandInput,
  ListEntitySecurityProfilesCommandOutput,
} from "./commands/ListEntitySecurityProfilesCommand";
import type {
  ListEvaluationFormsCommandInput,
  ListEvaluationFormsCommandOutput,
} from "./commands/ListEvaluationFormsCommand";
import type {
  ListEvaluationFormVersionsCommandInput,
  ListEvaluationFormVersionsCommandOutput,
} from "./commands/ListEvaluationFormVersionsCommand";
import type {
  ListFlowAssociationsCommandInput,
  ListFlowAssociationsCommandOutput,
} from "./commands/ListFlowAssociationsCommand";
import type {
  ListHoursOfOperationOverridesCommandInput,
  ListHoursOfOperationOverridesCommandOutput,
} from "./commands/ListHoursOfOperationOverridesCommand";
import type {
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "./commands/ListHoursOfOperationsCommand";
import type {
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "./commands/ListInstanceAttributesCommand";
import type { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import type {
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
} from "./commands/ListInstanceStorageConfigsCommand";
import type {
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "./commands/ListIntegrationAssociationsCommand";
import type {
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
} from "./commands/ListLambdaFunctionsCommand";
import type { ListLexBotsCommandInput, ListLexBotsCommandOutput } from "./commands/ListLexBotsCommand";
import type {
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import type { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand";
import type {
  ListPhoneNumbersV2CommandInput,
  ListPhoneNumbersV2CommandOutput,
} from "./commands/ListPhoneNumbersV2Command";
import type {
  ListPredefinedAttributesCommandInput,
  ListPredefinedAttributesCommandOutput,
} from "./commands/ListPredefinedAttributesCommand";
import type { ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import type {
  ListQueueEmailAddressesCommandInput,
  ListQueueEmailAddressesCommandOutput,
} from "./commands/ListQueueEmailAddressesCommand";
import type {
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "./commands/ListQueueQuickConnectsCommand";
import type { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import type {
  ListQuickConnectsCommandInput,
  ListQuickConnectsCommandOutput,
} from "./commands/ListQuickConnectsCommand";
import type {
  ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ListRealtimeContactAnalysisSegmentsV2CommandOutput,
} from "./commands/ListRealtimeContactAnalysisSegmentsV2Command";
import type {
  ListRoutingProfileManualAssignmentQueuesCommandInput,
  ListRoutingProfileManualAssignmentQueuesCommandOutput,
} from "./commands/ListRoutingProfileManualAssignmentQueuesCommand";
import type {
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
} from "./commands/ListRoutingProfileQueuesCommand";
import type {
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "./commands/ListRoutingProfilesCommand";
import type { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import type { ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput } from "./commands/ListSecurityKeysCommand";
import type {
  ListSecurityProfileApplicationsCommandInput,
  ListSecurityProfileApplicationsCommandOutput,
} from "./commands/ListSecurityProfileApplicationsCommand";
import type {
  ListSecurityProfileFlowModulesCommandInput,
  ListSecurityProfileFlowModulesCommandOutput,
} from "./commands/ListSecurityProfileFlowModulesCommand";
import type {
  ListSecurityProfilePermissionsCommandInput,
  ListSecurityProfilePermissionsCommandOutput,
} from "./commands/ListSecurityProfilePermissionsCommand";
import type {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTaskTemplatesCommandInput,
  ListTaskTemplatesCommandOutput,
} from "./commands/ListTaskTemplatesCommand";
import type {
  ListTestCaseExecutionRecordsCommandInput,
  ListTestCaseExecutionRecordsCommandOutput,
} from "./commands/ListTestCaseExecutionRecordsCommand";
import type {
  ListTestCaseExecutionsCommandInput,
  ListTestCaseExecutionsCommandOutput,
} from "./commands/ListTestCaseExecutionsCommand";
import type { ListTestCasesCommandInput, ListTestCasesCommandOutput } from "./commands/ListTestCasesCommand";
import type {
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
} from "./commands/ListTrafficDistributionGroupsCommand";
import type {
  ListTrafficDistributionGroupUsersCommandInput,
  ListTrafficDistributionGroupUsersCommandOutput,
} from "./commands/ListTrafficDistributionGroupUsersCommand";
import type { ListUseCasesCommandInput, ListUseCasesCommandOutput } from "./commands/ListUseCasesCommand";
import type {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "./commands/ListUserHierarchyGroupsCommand";
import type {
  ListUserNotificationsCommandInput,
  ListUserNotificationsCommandOutput,
} from "./commands/ListUserNotificationsCommand";
import type {
  ListUserProficienciesCommandInput,
  ListUserProficienciesCommandOutput,
} from "./commands/ListUserProficienciesCommand";
import type { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import type { ListViewsCommandInput, ListViewsCommandOutput } from "./commands/ListViewsCommand";
import type { ListViewVersionsCommandInput, ListViewVersionsCommandOutput } from "./commands/ListViewVersionsCommand";
import type {
  ListWorkspaceMediaCommandInput,
  ListWorkspaceMediaCommandOutput,
} from "./commands/ListWorkspaceMediaCommand";
import type {
  ListWorkspacePagesCommandInput,
  ListWorkspacePagesCommandOutput,
} from "./commands/ListWorkspacePagesCommand";
import type { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "./commands/ListWorkspacesCommand";
import type { MonitorContactCommandInput, MonitorContactCommandOutput } from "./commands/MonitorContactCommand";
import type { PauseContactCommandInput, PauseContactCommandOutput } from "./commands/PauseContactCommand";
import type { PutUserStatusCommandInput, PutUserStatusCommandOutput } from "./commands/PutUserStatusCommand";
import type {
  ReleasePhoneNumberCommandInput,
  ReleasePhoneNumberCommandOutput,
} from "./commands/ReleasePhoneNumberCommand";
import type {
  ReplicateInstanceCommandInput,
  ReplicateInstanceCommandOutput,
} from "./commands/ReplicateInstanceCommand";
import type { ResumeContactCommandInput, ResumeContactCommandOutput } from "./commands/ResumeContactCommand";
import type {
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "./commands/ResumeContactRecordingCommand";
import type {
  SearchAgentStatusesCommandInput,
  SearchAgentStatusesCommandOutput,
} from "./commands/SearchAgentStatusesCommand";
import type {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import type {
  SearchContactEvaluationsCommandInput,
  SearchContactEvaluationsCommandOutput,
} from "./commands/SearchContactEvaluationsCommand";
import type {
  SearchContactFlowModulesCommandInput,
  SearchContactFlowModulesCommandOutput,
} from "./commands/SearchContactFlowModulesCommand";
import type {
  SearchContactFlowsCommandInput,
  SearchContactFlowsCommandOutput,
} from "./commands/SearchContactFlowsCommand";
import type { SearchContactsCommandInput, SearchContactsCommandOutput } from "./commands/SearchContactsCommand";
import type { SearchDataTablesCommandInput, SearchDataTablesCommandOutput } from "./commands/SearchDataTablesCommand";
import type {
  SearchEmailAddressesCommandInput,
  SearchEmailAddressesCommandOutput,
} from "./commands/SearchEmailAddressesCommand";
import type {
  SearchEvaluationFormsCommandInput,
  SearchEvaluationFormsCommandOutput,
} from "./commands/SearchEvaluationFormsCommand";
import type {
  SearchHoursOfOperationOverridesCommandInput,
  SearchHoursOfOperationOverridesCommandOutput,
} from "./commands/SearchHoursOfOperationOverridesCommand";
import type {
  SearchHoursOfOperationsCommandInput,
  SearchHoursOfOperationsCommandOutput,
} from "./commands/SearchHoursOfOperationsCommand";
import type {
  SearchNotificationsCommandInput,
  SearchNotificationsCommandOutput,
} from "./commands/SearchNotificationsCommand";
import type {
  SearchPredefinedAttributesCommandInput,
  SearchPredefinedAttributesCommandOutput,
} from "./commands/SearchPredefinedAttributesCommand";
import type { SearchPromptsCommandInput, SearchPromptsCommandOutput } from "./commands/SearchPromptsCommand";
import type { SearchQueuesCommandInput, SearchQueuesCommandOutput } from "./commands/SearchQueuesCommand";
import type {
  SearchQuickConnectsCommandInput,
  SearchQuickConnectsCommandOutput,
} from "./commands/SearchQuickConnectsCommand";
import type {
  SearchResourceTagsCommandInput,
  SearchResourceTagsCommandOutput,
} from "./commands/SearchResourceTagsCommand";
import type {
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "./commands/SearchRoutingProfilesCommand";
import type {
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
} from "./commands/SearchSecurityProfilesCommand";
import type { SearchTestCasesCommandInput, SearchTestCasesCommandOutput } from "./commands/SearchTestCasesCommand";
import type {
  SearchUserHierarchyGroupsCommandInput,
  SearchUserHierarchyGroupsCommandOutput,
} from "./commands/SearchUserHierarchyGroupsCommand";
import type { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import type { SearchViewsCommandInput, SearchViewsCommandOutput } from "./commands/SearchViewsCommand";
import type {
  SearchVocabulariesCommandInput,
  SearchVocabulariesCommandOutput,
} from "./commands/SearchVocabulariesCommand";
import type {
  SearchWorkspaceAssociationsCommandInput,
  SearchWorkspaceAssociationsCommandOutput,
} from "./commands/SearchWorkspaceAssociationsCommand";
import type { SearchWorkspacesCommandInput, SearchWorkspacesCommandOutput } from "./commands/SearchWorkspacesCommand";
import type {
  SendChatIntegrationEventCommandInput,
  SendChatIntegrationEventCommandOutput,
} from "./commands/SendChatIntegrationEventCommand";
import type {
  SendOutboundEmailCommandInput,
  SendOutboundEmailCommandOutput,
} from "./commands/SendOutboundEmailCommand";
import type {
  StartAttachedFileUploadCommandInput,
  StartAttachedFileUploadCommandOutput,
} from "./commands/StartAttachedFileUploadCommand";
import type { StartChatContactCommandInput, StartChatContactCommandOutput } from "./commands/StartChatContactCommand";
import type {
  StartContactEvaluationCommandInput,
  StartContactEvaluationCommandOutput,
} from "./commands/StartContactEvaluationCommand";
import type {
  StartContactMediaProcessingCommandInput,
  StartContactMediaProcessingCommandOutput,
} from "./commands/StartContactMediaProcessingCommand";
import type {
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "./commands/StartContactRecordingCommand";
import type {
  StartContactStreamingCommandInput,
  StartContactStreamingCommandOutput,
} from "./commands/StartContactStreamingCommand";
import type {
  StartEmailContactCommandInput,
  StartEmailContactCommandOutput,
} from "./commands/StartEmailContactCommand";
import type {
  StartOutboundChatContactCommandInput,
  StartOutboundChatContactCommandOutput,
} from "./commands/StartOutboundChatContactCommand";
import type {
  StartOutboundEmailContactCommandInput,
  StartOutboundEmailContactCommandOutput,
} from "./commands/StartOutboundEmailContactCommand";
import type {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "./commands/StartOutboundVoiceContactCommand";
import type {
  StartScreenSharingCommandInput,
  StartScreenSharingCommandOutput,
} from "./commands/StartScreenSharingCommand";
import type { StartTaskContactCommandInput, StartTaskContactCommandOutput } from "./commands/StartTaskContactCommand";
import type {
  StartTestCaseExecutionCommandInput,
  StartTestCaseExecutionCommandOutput,
} from "./commands/StartTestCaseExecutionCommand";
import type {
  StartWebRTCContactCommandInput,
  StartWebRTCContactCommandOutput,
} from "./commands/StartWebRTCContactCommand";
import type { StopContactCommandInput, StopContactCommandOutput } from "./commands/StopContactCommand";
import type {
  StopContactMediaProcessingCommandInput,
  StopContactMediaProcessingCommandOutput,
} from "./commands/StopContactMediaProcessingCommand";
import type {
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
} from "./commands/StopContactRecordingCommand";
import type {
  StopContactStreamingCommandInput,
  StopContactStreamingCommandOutput,
} from "./commands/StopContactStreamingCommand";
import type {
  StopTestCaseExecutionCommandInput,
  StopTestCaseExecutionCommandOutput,
} from "./commands/StopTestCaseExecutionCommand";
import type {
  SubmitContactEvaluationCommandInput,
  SubmitContactEvaluationCommandOutput,
} from "./commands/SubmitContactEvaluationCommand";
import type {
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "./commands/SuspendContactRecordingCommand";
import type { TagContactCommandInput, TagContactCommandOutput } from "./commands/TagContactCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TransferContactCommandInput, TransferContactCommandOutput } from "./commands/TransferContactCommand";
import type { UntagContactCommandInput, UntagContactCommandOutput } from "./commands/UntagContactCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAgentStatusCommandInput,
  UpdateAgentStatusCommandOutput,
} from "./commands/UpdateAgentStatusCommand";
import type {
  UpdateAuthenticationProfileCommandInput,
  UpdateAuthenticationProfileCommandOutput,
} from "./commands/UpdateAuthenticationProfileCommand";
import type {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "./commands/UpdateContactAttributesCommand";
import type { UpdateContactCommandInput, UpdateContactCommandOutput } from "./commands/UpdateContactCommand";
import type {
  UpdateContactEvaluationCommandInput,
  UpdateContactEvaluationCommandOutput,
} from "./commands/UpdateContactEvaluationCommand";
import type {
  UpdateContactFlowContentCommandInput,
  UpdateContactFlowContentCommandOutput,
} from "./commands/UpdateContactFlowContentCommand";
import type {
  UpdateContactFlowMetadataCommandInput,
  UpdateContactFlowMetadataCommandOutput,
} from "./commands/UpdateContactFlowMetadataCommand";
import type {
  UpdateContactFlowModuleAliasCommandInput,
  UpdateContactFlowModuleAliasCommandOutput,
} from "./commands/UpdateContactFlowModuleAliasCommand";
import type {
  UpdateContactFlowModuleContentCommandInput,
  UpdateContactFlowModuleContentCommandOutput,
} from "./commands/UpdateContactFlowModuleContentCommand";
import type {
  UpdateContactFlowModuleMetadataCommandInput,
  UpdateContactFlowModuleMetadataCommandOutput,
} from "./commands/UpdateContactFlowModuleMetadataCommand";
import type {
  UpdateContactFlowNameCommandInput,
  UpdateContactFlowNameCommandOutput,
} from "./commands/UpdateContactFlowNameCommand";
import type {
  UpdateContactRoutingDataCommandInput,
  UpdateContactRoutingDataCommandOutput,
} from "./commands/UpdateContactRoutingDataCommand";
import type {
  UpdateContactScheduleCommandInput,
  UpdateContactScheduleCommandOutput,
} from "./commands/UpdateContactScheduleCommand";
import type {
  UpdateDataTableAttributeCommandInput,
  UpdateDataTableAttributeCommandOutput,
} from "./commands/UpdateDataTableAttributeCommand";
import type {
  UpdateDataTableMetadataCommandInput,
  UpdateDataTableMetadataCommandOutput,
} from "./commands/UpdateDataTableMetadataCommand";
import type {
  UpdateDataTablePrimaryValuesCommandInput,
  UpdateDataTablePrimaryValuesCommandOutput,
} from "./commands/UpdateDataTablePrimaryValuesCommand";
import type {
  UpdateEmailAddressMetadataCommandInput,
  UpdateEmailAddressMetadataCommandOutput,
} from "./commands/UpdateEmailAddressMetadataCommand";
import type {
  UpdateEvaluationFormCommandInput,
  UpdateEvaluationFormCommandOutput,
} from "./commands/UpdateEvaluationFormCommand";
import type {
  UpdateHoursOfOperationCommandInput,
  UpdateHoursOfOperationCommandOutput,
} from "./commands/UpdateHoursOfOperationCommand";
import type {
  UpdateHoursOfOperationOverrideCommandInput,
  UpdateHoursOfOperationOverrideCommandOutput,
} from "./commands/UpdateHoursOfOperationOverrideCommand";
import type {
  UpdateInstanceAttributeCommandInput,
  UpdateInstanceAttributeCommandOutput,
} from "./commands/UpdateInstanceAttributeCommand";
import type {
  UpdateInstanceStorageConfigCommandInput,
  UpdateInstanceStorageConfigCommandOutput,
} from "./commands/UpdateInstanceStorageConfigCommand";
import type {
  UpdateNotificationContentCommandInput,
  UpdateNotificationContentCommandOutput,
} from "./commands/UpdateNotificationContentCommand";
import type {
  UpdateParticipantAuthenticationCommandInput,
  UpdateParticipantAuthenticationCommandOutput,
} from "./commands/UpdateParticipantAuthenticationCommand";
import type {
  UpdateParticipantRoleConfigCommandInput,
  UpdateParticipantRoleConfigCommandOutput,
} from "./commands/UpdateParticipantRoleConfigCommand";
import type {
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
} from "./commands/UpdatePhoneNumberCommand";
import type {
  UpdatePhoneNumberMetadataCommandInput,
  UpdatePhoneNumberMetadataCommandOutput,
} from "./commands/UpdatePhoneNumberMetadataCommand";
import type {
  UpdatePredefinedAttributeCommandInput,
  UpdatePredefinedAttributeCommandOutput,
} from "./commands/UpdatePredefinedAttributeCommand";
import type { UpdatePromptCommandInput, UpdatePromptCommandOutput } from "./commands/UpdatePromptCommand";
import type {
  UpdateQueueHoursOfOperationCommandInput,
  UpdateQueueHoursOfOperationCommandOutput,
} from "./commands/UpdateQueueHoursOfOperationCommand";
import type {
  UpdateQueueMaxContactsCommandInput,
  UpdateQueueMaxContactsCommandOutput,
} from "./commands/UpdateQueueMaxContactsCommand";
import type { UpdateQueueNameCommandInput, UpdateQueueNameCommandOutput } from "./commands/UpdateQueueNameCommand";
import type {
  UpdateQueueOutboundCallerConfigCommandInput,
  UpdateQueueOutboundCallerConfigCommandOutput,
} from "./commands/UpdateQueueOutboundCallerConfigCommand";
import type {
  UpdateQueueOutboundEmailConfigCommandInput,
  UpdateQueueOutboundEmailConfigCommandOutput,
} from "./commands/UpdateQueueOutboundEmailConfigCommand";
import type {
  UpdateQueueStatusCommandInput,
  UpdateQueueStatusCommandOutput,
} from "./commands/UpdateQueueStatusCommand";
import type {
  UpdateQuickConnectConfigCommandInput,
  UpdateQuickConnectConfigCommandOutput,
} from "./commands/UpdateQuickConnectConfigCommand";
import type {
  UpdateQuickConnectNameCommandInput,
  UpdateQuickConnectNameCommandOutput,
} from "./commands/UpdateQuickConnectNameCommand";
import type {
  UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
  UpdateRoutingProfileAgentAvailabilityTimerCommandOutput,
} from "./commands/UpdateRoutingProfileAgentAvailabilityTimerCommand";
import type {
  UpdateRoutingProfileConcurrencyCommandInput,
  UpdateRoutingProfileConcurrencyCommandOutput,
} from "./commands/UpdateRoutingProfileConcurrencyCommand";
import type {
  UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
} from "./commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import type {
  UpdateRoutingProfileNameCommandInput,
  UpdateRoutingProfileNameCommandOutput,
} from "./commands/UpdateRoutingProfileNameCommand";
import type {
  UpdateRoutingProfileQueuesCommandInput,
  UpdateRoutingProfileQueuesCommandOutput,
} from "./commands/UpdateRoutingProfileQueuesCommand";
import type { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import type {
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "./commands/UpdateSecurityProfileCommand";
import type {
  UpdateTaskTemplateCommandInput,
  UpdateTaskTemplateCommandOutput,
} from "./commands/UpdateTaskTemplateCommand";
import type { UpdateTestCaseCommandInput, UpdateTestCaseCommandOutput } from "./commands/UpdateTestCaseCommand";
import type {
  UpdateTrafficDistributionCommandInput,
  UpdateTrafficDistributionCommandOutput,
} from "./commands/UpdateTrafficDistributionCommand";
import type { UpdateUserConfigCommandInput, UpdateUserConfigCommandOutput } from "./commands/UpdateUserConfigCommand";
import type {
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput,
} from "./commands/UpdateUserHierarchyCommand";
import type {
  UpdateUserHierarchyGroupNameCommandInput,
  UpdateUserHierarchyGroupNameCommandOutput,
} from "./commands/UpdateUserHierarchyGroupNameCommand";
import type {
  UpdateUserHierarchyStructureCommandInput,
  UpdateUserHierarchyStructureCommandOutput,
} from "./commands/UpdateUserHierarchyStructureCommand";
import type {
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
} from "./commands/UpdateUserIdentityInfoCommand";
import type {
  UpdateUserNotificationStatusCommandInput,
  UpdateUserNotificationStatusCommandOutput,
} from "./commands/UpdateUserNotificationStatusCommand";
import type {
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput,
} from "./commands/UpdateUserPhoneConfigCommand";
import type {
  UpdateUserProficienciesCommandInput,
  UpdateUserProficienciesCommandOutput,
} from "./commands/UpdateUserProficienciesCommand";
import type {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "./commands/UpdateUserRoutingProfileCommand";
import type {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "./commands/UpdateUserSecurityProfilesCommand";
import type {
  UpdateViewContentCommandInput,
  UpdateViewContentCommandOutput,
} from "./commands/UpdateViewContentCommand";
import type {
  UpdateViewMetadataCommandInput,
  UpdateViewMetadataCommandOutput,
} from "./commands/UpdateViewMetadataCommand";
import type {
  UpdateWorkspaceMetadataCommandInput,
  UpdateWorkspaceMetadataCommandOutput,
} from "./commands/UpdateWorkspaceMetadataCommand";
import type {
  UpdateWorkspacePageCommandInput,
  UpdateWorkspacePageCommandOutput,
} from "./commands/UpdateWorkspacePageCommand";
import type {
  UpdateWorkspaceThemeCommandInput,
  UpdateWorkspaceThemeCommandOutput,
} from "./commands/UpdateWorkspaceThemeCommand";
import type {
  UpdateWorkspaceVisibilityCommandInput,
  UpdateWorkspaceVisibilityCommandOutput,
} from "./commands/UpdateWorkspaceVisibilityCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | ActivateEvaluationFormCommandInput
  | AssociateAnalyticsDataSetCommandInput
  | AssociateApprovedOriginCommandInput
  | AssociateBotCommandInput
  | AssociateContactWithUserCommandInput
  | AssociateDefaultVocabularyCommandInput
  | AssociateEmailAddressAliasCommandInput
  | AssociateFlowCommandInput
  | AssociateHoursOfOperationsCommandInput
  | AssociateInstanceStorageConfigCommandInput
  | AssociateLambdaFunctionCommandInput
  | AssociateLexBotCommandInput
  | AssociatePhoneNumberContactFlowCommandInput
  | AssociateQueueEmailAddressesCommandInput
  | AssociateQueueQuickConnectsCommandInput
  | AssociateRoutingProfileQueuesCommandInput
  | AssociateSecurityKeyCommandInput
  | AssociateSecurityProfilesCommandInput
  | AssociateTrafficDistributionGroupUserCommandInput
  | AssociateUserProficienciesCommandInput
  | AssociateWorkspaceCommandInput
  | BatchAssociateAnalyticsDataSetCommandInput
  | BatchCreateDataTableValueCommandInput
  | BatchDeleteDataTableValueCommandInput
  | BatchDescribeDataTableValueCommandInput
  | BatchDisassociateAnalyticsDataSetCommandInput
  | BatchGetAttachedFileMetadataCommandInput
  | BatchGetFlowAssociationCommandInput
  | BatchPutContactCommandInput
  | BatchUpdateDataTableValueCommandInput
  | ClaimPhoneNumberCommandInput
  | CompleteAttachedFileUploadCommandInput
  | CreateAgentStatusCommandInput
  | CreateContactCommandInput
  | CreateContactFlowCommandInput
  | CreateContactFlowModuleAliasCommandInput
  | CreateContactFlowModuleCommandInput
  | CreateContactFlowModuleVersionCommandInput
  | CreateContactFlowVersionCommandInput
  | CreateDataTableAttributeCommandInput
  | CreateDataTableCommandInput
  | CreateEmailAddressCommandInput
  | CreateEvaluationFormCommandInput
  | CreateHoursOfOperationCommandInput
  | CreateHoursOfOperationOverrideCommandInput
  | CreateInstanceCommandInput
  | CreateIntegrationAssociationCommandInput
  | CreateNotificationCommandInput
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
  | CreateTestCaseCommandInput
  | CreateTrafficDistributionGroupCommandInput
  | CreateUseCaseCommandInput
  | CreateUserCommandInput
  | CreateUserHierarchyGroupCommandInput
  | CreateViewCommandInput
  | CreateViewVersionCommandInput
  | CreateVocabularyCommandInput
  | CreateWorkspaceCommandInput
  | CreateWorkspacePageCommandInput
  | DeactivateEvaluationFormCommandInput
  | DeleteAttachedFileCommandInput
  | DeleteContactEvaluationCommandInput
  | DeleteContactFlowCommandInput
  | DeleteContactFlowModuleAliasCommandInput
  | DeleteContactFlowModuleCommandInput
  | DeleteContactFlowModuleVersionCommandInput
  | DeleteContactFlowVersionCommandInput
  | DeleteDataTableAttributeCommandInput
  | DeleteDataTableCommandInput
  | DeleteEmailAddressCommandInput
  | DeleteEvaluationFormCommandInput
  | DeleteHoursOfOperationCommandInput
  | DeleteHoursOfOperationOverrideCommandInput
  | DeleteInstanceCommandInput
  | DeleteIntegrationAssociationCommandInput
  | DeleteNotificationCommandInput
  | DeletePredefinedAttributeCommandInput
  | DeletePromptCommandInput
  | DeletePushNotificationRegistrationCommandInput
  | DeleteQueueCommandInput
  | DeleteQuickConnectCommandInput
  | DeleteRoutingProfileCommandInput
  | DeleteRuleCommandInput
  | DeleteSecurityProfileCommandInput
  | DeleteTaskTemplateCommandInput
  | DeleteTestCaseCommandInput
  | DeleteTrafficDistributionGroupCommandInput
  | DeleteUseCaseCommandInput
  | DeleteUserCommandInput
  | DeleteUserHierarchyGroupCommandInput
  | DeleteViewCommandInput
  | DeleteViewVersionCommandInput
  | DeleteVocabularyCommandInput
  | DeleteWorkspaceCommandInput
  | DeleteWorkspaceMediaCommandInput
  | DeleteWorkspacePageCommandInput
  | DescribeAgentStatusCommandInput
  | DescribeAuthenticationProfileCommandInput
  | DescribeContactCommandInput
  | DescribeContactEvaluationCommandInput
  | DescribeContactFlowCommandInput
  | DescribeContactFlowModuleAliasCommandInput
  | DescribeContactFlowModuleCommandInput
  | DescribeDataTableAttributeCommandInput
  | DescribeDataTableCommandInput
  | DescribeEmailAddressCommandInput
  | DescribeEvaluationFormCommandInput
  | DescribeHoursOfOperationCommandInput
  | DescribeHoursOfOperationOverrideCommandInput
  | DescribeInstanceAttributeCommandInput
  | DescribeInstanceCommandInput
  | DescribeInstanceStorageConfigCommandInput
  | DescribeNotificationCommandInput
  | DescribePhoneNumberCommandInput
  | DescribePredefinedAttributeCommandInput
  | DescribePromptCommandInput
  | DescribeQueueCommandInput
  | DescribeQuickConnectCommandInput
  | DescribeRoutingProfileCommandInput
  | DescribeRuleCommandInput
  | DescribeSecurityProfileCommandInput
  | DescribeTestCaseCommandInput
  | DescribeTrafficDistributionGroupCommandInput
  | DescribeUserCommandInput
  | DescribeUserHierarchyGroupCommandInput
  | DescribeUserHierarchyStructureCommandInput
  | DescribeViewCommandInput
  | DescribeVocabularyCommandInput
  | DescribeWorkspaceCommandInput
  | DisassociateAnalyticsDataSetCommandInput
  | DisassociateApprovedOriginCommandInput
  | DisassociateBotCommandInput
  | DisassociateEmailAddressAliasCommandInput
  | DisassociateFlowCommandInput
  | DisassociateHoursOfOperationsCommandInput
  | DisassociateInstanceStorageConfigCommandInput
  | DisassociateLambdaFunctionCommandInput
  | DisassociateLexBotCommandInput
  | DisassociatePhoneNumberContactFlowCommandInput
  | DisassociateQueueEmailAddressesCommandInput
  | DisassociateQueueQuickConnectsCommandInput
  | DisassociateRoutingProfileQueuesCommandInput
  | DisassociateSecurityKeyCommandInput
  | DisassociateSecurityProfilesCommandInput
  | DisassociateTrafficDistributionGroupUserCommandInput
  | DisassociateUserProficienciesCommandInput
  | DisassociateWorkspaceCommandInput
  | DismissUserContactCommandInput
  | EvaluateDataTableValuesCommandInput
  | GetAttachedFileCommandInput
  | GetContactAttributesCommandInput
  | GetContactMetricsCommandInput
  | GetCurrentMetricDataCommandInput
  | GetCurrentUserDataCommandInput
  | GetEffectiveHoursOfOperationsCommandInput
  | GetFederationTokenCommandInput
  | GetFlowAssociationCommandInput
  | GetMetricDataCommandInput
  | GetMetricDataV2CommandInput
  | GetPromptFileCommandInput
  | GetTaskTemplateCommandInput
  | GetTestCaseExecutionSummaryCommandInput
  | GetTrafficDistributionCommandInput
  | ImportPhoneNumberCommandInput
  | ImportWorkspaceMediaCommandInput
  | ListAgentStatusesCommandInput
  | ListAnalyticsDataAssociationsCommandInput
  | ListAnalyticsDataLakeDataSetsCommandInput
  | ListApprovedOriginsCommandInput
  | ListAssociatedContactsCommandInput
  | ListAuthenticationProfilesCommandInput
  | ListBotsCommandInput
  | ListChildHoursOfOperationsCommandInput
  | ListContactEvaluationsCommandInput
  | ListContactFlowModuleAliasesCommandInput
  | ListContactFlowModuleVersionsCommandInput
  | ListContactFlowModulesCommandInput
  | ListContactFlowVersionsCommandInput
  | ListContactFlowsCommandInput
  | ListContactReferencesCommandInput
  | ListDataTableAttributesCommandInput
  | ListDataTablePrimaryValuesCommandInput
  | ListDataTableValuesCommandInput
  | ListDataTablesCommandInput
  | ListDefaultVocabulariesCommandInput
  | ListEntitySecurityProfilesCommandInput
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
  | ListNotificationsCommandInput
  | ListPhoneNumbersCommandInput
  | ListPhoneNumbersV2CommandInput
  | ListPredefinedAttributesCommandInput
  | ListPromptsCommandInput
  | ListQueueEmailAddressesCommandInput
  | ListQueueQuickConnectsCommandInput
  | ListQueuesCommandInput
  | ListQuickConnectsCommandInput
  | ListRealtimeContactAnalysisSegmentsV2CommandInput
  | ListRoutingProfileManualAssignmentQueuesCommandInput
  | ListRoutingProfileQueuesCommandInput
  | ListRoutingProfilesCommandInput
  | ListRulesCommandInput
  | ListSecurityKeysCommandInput
  | ListSecurityProfileApplicationsCommandInput
  | ListSecurityProfileFlowModulesCommandInput
  | ListSecurityProfilePermissionsCommandInput
  | ListSecurityProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskTemplatesCommandInput
  | ListTestCaseExecutionRecordsCommandInput
  | ListTestCaseExecutionsCommandInput
  | ListTestCasesCommandInput
  | ListTrafficDistributionGroupUsersCommandInput
  | ListTrafficDistributionGroupsCommandInput
  | ListUseCasesCommandInput
  | ListUserHierarchyGroupsCommandInput
  | ListUserNotificationsCommandInput
  | ListUserProficienciesCommandInput
  | ListUsersCommandInput
  | ListViewVersionsCommandInput
  | ListViewsCommandInput
  | ListWorkspaceMediaCommandInput
  | ListWorkspacePagesCommandInput
  | ListWorkspacesCommandInput
  | MonitorContactCommandInput
  | PauseContactCommandInput
  | PutUserStatusCommandInput
  | ReleasePhoneNumberCommandInput
  | ReplicateInstanceCommandInput
  | ResumeContactCommandInput
  | ResumeContactRecordingCommandInput
  | SearchAgentStatusesCommandInput
  | SearchAvailablePhoneNumbersCommandInput
  | SearchContactEvaluationsCommandInput
  | SearchContactFlowModulesCommandInput
  | SearchContactFlowsCommandInput
  | SearchContactsCommandInput
  | SearchDataTablesCommandInput
  | SearchEmailAddressesCommandInput
  | SearchEvaluationFormsCommandInput
  | SearchHoursOfOperationOverridesCommandInput
  | SearchHoursOfOperationsCommandInput
  | SearchNotificationsCommandInput
  | SearchPredefinedAttributesCommandInput
  | SearchPromptsCommandInput
  | SearchQueuesCommandInput
  | SearchQuickConnectsCommandInput
  | SearchResourceTagsCommandInput
  | SearchRoutingProfilesCommandInput
  | SearchSecurityProfilesCommandInput
  | SearchTestCasesCommandInput
  | SearchUserHierarchyGroupsCommandInput
  | SearchUsersCommandInput
  | SearchViewsCommandInput
  | SearchVocabulariesCommandInput
  | SearchWorkspaceAssociationsCommandInput
  | SearchWorkspacesCommandInput
  | SendChatIntegrationEventCommandInput
  | SendOutboundEmailCommandInput
  | StartAttachedFileUploadCommandInput
  | StartChatContactCommandInput
  | StartContactEvaluationCommandInput
  | StartContactMediaProcessingCommandInput
  | StartContactRecordingCommandInput
  | StartContactStreamingCommandInput
  | StartEmailContactCommandInput
  | StartOutboundChatContactCommandInput
  | StartOutboundEmailContactCommandInput
  | StartOutboundVoiceContactCommandInput
  | StartScreenSharingCommandInput
  | StartTaskContactCommandInput
  | StartTestCaseExecutionCommandInput
  | StartWebRTCContactCommandInput
  | StopContactCommandInput
  | StopContactMediaProcessingCommandInput
  | StopContactRecordingCommandInput
  | StopContactStreamingCommandInput
  | StopTestCaseExecutionCommandInput
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
  | UpdateContactFlowModuleAliasCommandInput
  | UpdateContactFlowModuleContentCommandInput
  | UpdateContactFlowModuleMetadataCommandInput
  | UpdateContactFlowNameCommandInput
  | UpdateContactRoutingDataCommandInput
  | UpdateContactScheduleCommandInput
  | UpdateDataTableAttributeCommandInput
  | UpdateDataTableMetadataCommandInput
  | UpdateDataTablePrimaryValuesCommandInput
  | UpdateEmailAddressMetadataCommandInput
  | UpdateEvaluationFormCommandInput
  | UpdateHoursOfOperationCommandInput
  | UpdateHoursOfOperationOverrideCommandInput
  | UpdateInstanceAttributeCommandInput
  | UpdateInstanceStorageConfigCommandInput
  | UpdateNotificationContentCommandInput
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
  | UpdateTestCaseCommandInput
  | UpdateTrafficDistributionCommandInput
  | UpdateUserConfigCommandInput
  | UpdateUserHierarchyCommandInput
  | UpdateUserHierarchyGroupNameCommandInput
  | UpdateUserHierarchyStructureCommandInput
  | UpdateUserIdentityInfoCommandInput
  | UpdateUserNotificationStatusCommandInput
  | UpdateUserPhoneConfigCommandInput
  | UpdateUserProficienciesCommandInput
  | UpdateUserRoutingProfileCommandInput
  | UpdateUserSecurityProfilesCommandInput
  | UpdateViewContentCommandInput
  | UpdateViewMetadataCommandInput
  | UpdateWorkspaceMetadataCommandInput
  | UpdateWorkspacePageCommandInput
  | UpdateWorkspaceThemeCommandInput
  | UpdateWorkspaceVisibilityCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ActivateEvaluationFormCommandOutput
  | AssociateAnalyticsDataSetCommandOutput
  | AssociateApprovedOriginCommandOutput
  | AssociateBotCommandOutput
  | AssociateContactWithUserCommandOutput
  | AssociateDefaultVocabularyCommandOutput
  | AssociateEmailAddressAliasCommandOutput
  | AssociateFlowCommandOutput
  | AssociateHoursOfOperationsCommandOutput
  | AssociateInstanceStorageConfigCommandOutput
  | AssociateLambdaFunctionCommandOutput
  | AssociateLexBotCommandOutput
  | AssociatePhoneNumberContactFlowCommandOutput
  | AssociateQueueEmailAddressesCommandOutput
  | AssociateQueueQuickConnectsCommandOutput
  | AssociateRoutingProfileQueuesCommandOutput
  | AssociateSecurityKeyCommandOutput
  | AssociateSecurityProfilesCommandOutput
  | AssociateTrafficDistributionGroupUserCommandOutput
  | AssociateUserProficienciesCommandOutput
  | AssociateWorkspaceCommandOutput
  | BatchAssociateAnalyticsDataSetCommandOutput
  | BatchCreateDataTableValueCommandOutput
  | BatchDeleteDataTableValueCommandOutput
  | BatchDescribeDataTableValueCommandOutput
  | BatchDisassociateAnalyticsDataSetCommandOutput
  | BatchGetAttachedFileMetadataCommandOutput
  | BatchGetFlowAssociationCommandOutput
  | BatchPutContactCommandOutput
  | BatchUpdateDataTableValueCommandOutput
  | ClaimPhoneNumberCommandOutput
  | CompleteAttachedFileUploadCommandOutput
  | CreateAgentStatusCommandOutput
  | CreateContactCommandOutput
  | CreateContactFlowCommandOutput
  | CreateContactFlowModuleAliasCommandOutput
  | CreateContactFlowModuleCommandOutput
  | CreateContactFlowModuleVersionCommandOutput
  | CreateContactFlowVersionCommandOutput
  | CreateDataTableAttributeCommandOutput
  | CreateDataTableCommandOutput
  | CreateEmailAddressCommandOutput
  | CreateEvaluationFormCommandOutput
  | CreateHoursOfOperationCommandOutput
  | CreateHoursOfOperationOverrideCommandOutput
  | CreateInstanceCommandOutput
  | CreateIntegrationAssociationCommandOutput
  | CreateNotificationCommandOutput
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
  | CreateTestCaseCommandOutput
  | CreateTrafficDistributionGroupCommandOutput
  | CreateUseCaseCommandOutput
  | CreateUserCommandOutput
  | CreateUserHierarchyGroupCommandOutput
  | CreateViewCommandOutput
  | CreateViewVersionCommandOutput
  | CreateVocabularyCommandOutput
  | CreateWorkspaceCommandOutput
  | CreateWorkspacePageCommandOutput
  | DeactivateEvaluationFormCommandOutput
  | DeleteAttachedFileCommandOutput
  | DeleteContactEvaluationCommandOutput
  | DeleteContactFlowCommandOutput
  | DeleteContactFlowModuleAliasCommandOutput
  | DeleteContactFlowModuleCommandOutput
  | DeleteContactFlowModuleVersionCommandOutput
  | DeleteContactFlowVersionCommandOutput
  | DeleteDataTableAttributeCommandOutput
  | DeleteDataTableCommandOutput
  | DeleteEmailAddressCommandOutput
  | DeleteEvaluationFormCommandOutput
  | DeleteHoursOfOperationCommandOutput
  | DeleteHoursOfOperationOverrideCommandOutput
  | DeleteInstanceCommandOutput
  | DeleteIntegrationAssociationCommandOutput
  | DeleteNotificationCommandOutput
  | DeletePredefinedAttributeCommandOutput
  | DeletePromptCommandOutput
  | DeletePushNotificationRegistrationCommandOutput
  | DeleteQueueCommandOutput
  | DeleteQuickConnectCommandOutput
  | DeleteRoutingProfileCommandOutput
  | DeleteRuleCommandOutput
  | DeleteSecurityProfileCommandOutput
  | DeleteTaskTemplateCommandOutput
  | DeleteTestCaseCommandOutput
  | DeleteTrafficDistributionGroupCommandOutput
  | DeleteUseCaseCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserHierarchyGroupCommandOutput
  | DeleteViewCommandOutput
  | DeleteViewVersionCommandOutput
  | DeleteVocabularyCommandOutput
  | DeleteWorkspaceCommandOutput
  | DeleteWorkspaceMediaCommandOutput
  | DeleteWorkspacePageCommandOutput
  | DescribeAgentStatusCommandOutput
  | DescribeAuthenticationProfileCommandOutput
  | DescribeContactCommandOutput
  | DescribeContactEvaluationCommandOutput
  | DescribeContactFlowCommandOutput
  | DescribeContactFlowModuleAliasCommandOutput
  | DescribeContactFlowModuleCommandOutput
  | DescribeDataTableAttributeCommandOutput
  | DescribeDataTableCommandOutput
  | DescribeEmailAddressCommandOutput
  | DescribeEvaluationFormCommandOutput
  | DescribeHoursOfOperationCommandOutput
  | DescribeHoursOfOperationOverrideCommandOutput
  | DescribeInstanceAttributeCommandOutput
  | DescribeInstanceCommandOutput
  | DescribeInstanceStorageConfigCommandOutput
  | DescribeNotificationCommandOutput
  | DescribePhoneNumberCommandOutput
  | DescribePredefinedAttributeCommandOutput
  | DescribePromptCommandOutput
  | DescribeQueueCommandOutput
  | DescribeQuickConnectCommandOutput
  | DescribeRoutingProfileCommandOutput
  | DescribeRuleCommandOutput
  | DescribeSecurityProfileCommandOutput
  | DescribeTestCaseCommandOutput
  | DescribeTrafficDistributionGroupCommandOutput
  | DescribeUserCommandOutput
  | DescribeUserHierarchyGroupCommandOutput
  | DescribeUserHierarchyStructureCommandOutput
  | DescribeViewCommandOutput
  | DescribeVocabularyCommandOutput
  | DescribeWorkspaceCommandOutput
  | DisassociateAnalyticsDataSetCommandOutput
  | DisassociateApprovedOriginCommandOutput
  | DisassociateBotCommandOutput
  | DisassociateEmailAddressAliasCommandOutput
  | DisassociateFlowCommandOutput
  | DisassociateHoursOfOperationsCommandOutput
  | DisassociateInstanceStorageConfigCommandOutput
  | DisassociateLambdaFunctionCommandOutput
  | DisassociateLexBotCommandOutput
  | DisassociatePhoneNumberContactFlowCommandOutput
  | DisassociateQueueEmailAddressesCommandOutput
  | DisassociateQueueQuickConnectsCommandOutput
  | DisassociateRoutingProfileQueuesCommandOutput
  | DisassociateSecurityKeyCommandOutput
  | DisassociateSecurityProfilesCommandOutput
  | DisassociateTrafficDistributionGroupUserCommandOutput
  | DisassociateUserProficienciesCommandOutput
  | DisassociateWorkspaceCommandOutput
  | DismissUserContactCommandOutput
  | EvaluateDataTableValuesCommandOutput
  | GetAttachedFileCommandOutput
  | GetContactAttributesCommandOutput
  | GetContactMetricsCommandOutput
  | GetCurrentMetricDataCommandOutput
  | GetCurrentUserDataCommandOutput
  | GetEffectiveHoursOfOperationsCommandOutput
  | GetFederationTokenCommandOutput
  | GetFlowAssociationCommandOutput
  | GetMetricDataCommandOutput
  | GetMetricDataV2CommandOutput
  | GetPromptFileCommandOutput
  | GetTaskTemplateCommandOutput
  | GetTestCaseExecutionSummaryCommandOutput
  | GetTrafficDistributionCommandOutput
  | ImportPhoneNumberCommandOutput
  | ImportWorkspaceMediaCommandOutput
  | ListAgentStatusesCommandOutput
  | ListAnalyticsDataAssociationsCommandOutput
  | ListAnalyticsDataLakeDataSetsCommandOutput
  | ListApprovedOriginsCommandOutput
  | ListAssociatedContactsCommandOutput
  | ListAuthenticationProfilesCommandOutput
  | ListBotsCommandOutput
  | ListChildHoursOfOperationsCommandOutput
  | ListContactEvaluationsCommandOutput
  | ListContactFlowModuleAliasesCommandOutput
  | ListContactFlowModuleVersionsCommandOutput
  | ListContactFlowModulesCommandOutput
  | ListContactFlowVersionsCommandOutput
  | ListContactFlowsCommandOutput
  | ListContactReferencesCommandOutput
  | ListDataTableAttributesCommandOutput
  | ListDataTablePrimaryValuesCommandOutput
  | ListDataTableValuesCommandOutput
  | ListDataTablesCommandOutput
  | ListDefaultVocabulariesCommandOutput
  | ListEntitySecurityProfilesCommandOutput
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
  | ListNotificationsCommandOutput
  | ListPhoneNumbersCommandOutput
  | ListPhoneNumbersV2CommandOutput
  | ListPredefinedAttributesCommandOutput
  | ListPromptsCommandOutput
  | ListQueueEmailAddressesCommandOutput
  | ListQueueQuickConnectsCommandOutput
  | ListQueuesCommandOutput
  | ListQuickConnectsCommandOutput
  | ListRealtimeContactAnalysisSegmentsV2CommandOutput
  | ListRoutingProfileManualAssignmentQueuesCommandOutput
  | ListRoutingProfileQueuesCommandOutput
  | ListRoutingProfilesCommandOutput
  | ListRulesCommandOutput
  | ListSecurityKeysCommandOutput
  | ListSecurityProfileApplicationsCommandOutput
  | ListSecurityProfileFlowModulesCommandOutput
  | ListSecurityProfilePermissionsCommandOutput
  | ListSecurityProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskTemplatesCommandOutput
  | ListTestCaseExecutionRecordsCommandOutput
  | ListTestCaseExecutionsCommandOutput
  | ListTestCasesCommandOutput
  | ListTrafficDistributionGroupUsersCommandOutput
  | ListTrafficDistributionGroupsCommandOutput
  | ListUseCasesCommandOutput
  | ListUserHierarchyGroupsCommandOutput
  | ListUserNotificationsCommandOutput
  | ListUserProficienciesCommandOutput
  | ListUsersCommandOutput
  | ListViewVersionsCommandOutput
  | ListViewsCommandOutput
  | ListWorkspaceMediaCommandOutput
  | ListWorkspacePagesCommandOutput
  | ListWorkspacesCommandOutput
  | MonitorContactCommandOutput
  | PauseContactCommandOutput
  | PutUserStatusCommandOutput
  | ReleasePhoneNumberCommandOutput
  | ReplicateInstanceCommandOutput
  | ResumeContactCommandOutput
  | ResumeContactRecordingCommandOutput
  | SearchAgentStatusesCommandOutput
  | SearchAvailablePhoneNumbersCommandOutput
  | SearchContactEvaluationsCommandOutput
  | SearchContactFlowModulesCommandOutput
  | SearchContactFlowsCommandOutput
  | SearchContactsCommandOutput
  | SearchDataTablesCommandOutput
  | SearchEmailAddressesCommandOutput
  | SearchEvaluationFormsCommandOutput
  | SearchHoursOfOperationOverridesCommandOutput
  | SearchHoursOfOperationsCommandOutput
  | SearchNotificationsCommandOutput
  | SearchPredefinedAttributesCommandOutput
  | SearchPromptsCommandOutput
  | SearchQueuesCommandOutput
  | SearchQuickConnectsCommandOutput
  | SearchResourceTagsCommandOutput
  | SearchRoutingProfilesCommandOutput
  | SearchSecurityProfilesCommandOutput
  | SearchTestCasesCommandOutput
  | SearchUserHierarchyGroupsCommandOutput
  | SearchUsersCommandOutput
  | SearchViewsCommandOutput
  | SearchVocabulariesCommandOutput
  | SearchWorkspaceAssociationsCommandOutput
  | SearchWorkspacesCommandOutput
  | SendChatIntegrationEventCommandOutput
  | SendOutboundEmailCommandOutput
  | StartAttachedFileUploadCommandOutput
  | StartChatContactCommandOutput
  | StartContactEvaluationCommandOutput
  | StartContactMediaProcessingCommandOutput
  | StartContactRecordingCommandOutput
  | StartContactStreamingCommandOutput
  | StartEmailContactCommandOutput
  | StartOutboundChatContactCommandOutput
  | StartOutboundEmailContactCommandOutput
  | StartOutboundVoiceContactCommandOutput
  | StartScreenSharingCommandOutput
  | StartTaskContactCommandOutput
  | StartTestCaseExecutionCommandOutput
  | StartWebRTCContactCommandOutput
  | StopContactCommandOutput
  | StopContactMediaProcessingCommandOutput
  | StopContactRecordingCommandOutput
  | StopContactStreamingCommandOutput
  | StopTestCaseExecutionCommandOutput
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
  | UpdateContactFlowModuleAliasCommandOutput
  | UpdateContactFlowModuleContentCommandOutput
  | UpdateContactFlowModuleMetadataCommandOutput
  | UpdateContactFlowNameCommandOutput
  | UpdateContactRoutingDataCommandOutput
  | UpdateContactScheduleCommandOutput
  | UpdateDataTableAttributeCommandOutput
  | UpdateDataTableMetadataCommandOutput
  | UpdateDataTablePrimaryValuesCommandOutput
  | UpdateEmailAddressMetadataCommandOutput
  | UpdateEvaluationFormCommandOutput
  | UpdateHoursOfOperationCommandOutput
  | UpdateHoursOfOperationOverrideCommandOutput
  | UpdateInstanceAttributeCommandOutput
  | UpdateInstanceStorageConfigCommandOutput
  | UpdateNotificationContentCommandOutput
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
  | UpdateTestCaseCommandOutput
  | UpdateTrafficDistributionCommandOutput
  | UpdateUserConfigCommandOutput
  | UpdateUserHierarchyCommandOutput
  | UpdateUserHierarchyGroupNameCommandOutput
  | UpdateUserHierarchyStructureCommandOutput
  | UpdateUserIdentityInfoCommandOutput
  | UpdateUserNotificationStatusCommandOutput
  | UpdateUserPhoneConfigCommandOutput
  | UpdateUserProficienciesCommandOutput
  | UpdateUserRoutingProfileCommandOutput
  | UpdateUserSecurityProfilesCommandOutput
  | UpdateViewContentCommandOutput
  | UpdateViewMetadataCommandOutput
  | UpdateWorkspaceMetadataCommandOutput
  | UpdateWorkspacePageCommandOutput
  | UpdateWorkspaceThemeCommandOutput
  | UpdateWorkspaceVisibilityCommandOutput;

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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Service.html">Amazon Connect data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer contact
 *    center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing. You can
 *    also resolve customer issues more efficiently by getting customers in touch with the appropriate agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create. There are also limits to the
 *    number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 *          <p>You can use an endpoint to connect programmatically to an Amazon Web Services service. For a list of Amazon Connect endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect
 *     Endpoints</a>.</p>
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
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
