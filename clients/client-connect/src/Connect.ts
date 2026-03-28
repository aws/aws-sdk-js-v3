// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type ActivateEvaluationFormCommandInput,
  type ActivateEvaluationFormCommandOutput,
  ActivateEvaluationFormCommand,
} from "./commands/ActivateEvaluationFormCommand";
import {
  type AssociateAnalyticsDataSetCommandInput,
  type AssociateAnalyticsDataSetCommandOutput,
  AssociateAnalyticsDataSetCommand,
} from "./commands/AssociateAnalyticsDataSetCommand";
import {
  type AssociateApprovedOriginCommandInput,
  type AssociateApprovedOriginCommandOutput,
  AssociateApprovedOriginCommand,
} from "./commands/AssociateApprovedOriginCommand";
import {
  type AssociateBotCommandInput,
  type AssociateBotCommandOutput,
  AssociateBotCommand,
} from "./commands/AssociateBotCommand";
import {
  type AssociateContactWithUserCommandInput,
  type AssociateContactWithUserCommandOutput,
  AssociateContactWithUserCommand,
} from "./commands/AssociateContactWithUserCommand";
import {
  type AssociateDefaultVocabularyCommandInput,
  type AssociateDefaultVocabularyCommandOutput,
  AssociateDefaultVocabularyCommand,
} from "./commands/AssociateDefaultVocabularyCommand";
import {
  type AssociateEmailAddressAliasCommandInput,
  type AssociateEmailAddressAliasCommandOutput,
  AssociateEmailAddressAliasCommand,
} from "./commands/AssociateEmailAddressAliasCommand";
import {
  type AssociateFlowCommandInput,
  type AssociateFlowCommandOutput,
  AssociateFlowCommand,
} from "./commands/AssociateFlowCommand";
import {
  type AssociateHoursOfOperationsCommandInput,
  type AssociateHoursOfOperationsCommandOutput,
  AssociateHoursOfOperationsCommand,
} from "./commands/AssociateHoursOfOperationsCommand";
import {
  type AssociateInstanceStorageConfigCommandInput,
  type AssociateInstanceStorageConfigCommandOutput,
  AssociateInstanceStorageConfigCommand,
} from "./commands/AssociateInstanceStorageConfigCommand";
import {
  type AssociateLambdaFunctionCommandInput,
  type AssociateLambdaFunctionCommandOutput,
  AssociateLambdaFunctionCommand,
} from "./commands/AssociateLambdaFunctionCommand";
import {
  type AssociateLexBotCommandInput,
  type AssociateLexBotCommandOutput,
  AssociateLexBotCommand,
} from "./commands/AssociateLexBotCommand";
import {
  type AssociatePhoneNumberContactFlowCommandInput,
  type AssociatePhoneNumberContactFlowCommandOutput,
  AssociatePhoneNumberContactFlowCommand,
} from "./commands/AssociatePhoneNumberContactFlowCommand";
import {
  type AssociateQueueEmailAddressesCommandInput,
  type AssociateQueueEmailAddressesCommandOutput,
  AssociateQueueEmailAddressesCommand,
} from "./commands/AssociateQueueEmailAddressesCommand";
import {
  type AssociateQueueQuickConnectsCommandInput,
  type AssociateQueueQuickConnectsCommandOutput,
  AssociateQueueQuickConnectsCommand,
} from "./commands/AssociateQueueQuickConnectsCommand";
import {
  type AssociateRoutingProfileQueuesCommandInput,
  type AssociateRoutingProfileQueuesCommandOutput,
  AssociateRoutingProfileQueuesCommand,
} from "./commands/AssociateRoutingProfileQueuesCommand";
import {
  type AssociateSecurityKeyCommandInput,
  type AssociateSecurityKeyCommandOutput,
  AssociateSecurityKeyCommand,
} from "./commands/AssociateSecurityKeyCommand";
import {
  type AssociateSecurityProfilesCommandInput,
  type AssociateSecurityProfilesCommandOutput,
  AssociateSecurityProfilesCommand,
} from "./commands/AssociateSecurityProfilesCommand";
import {
  type AssociateTrafficDistributionGroupUserCommandInput,
  type AssociateTrafficDistributionGroupUserCommandOutput,
  AssociateTrafficDistributionGroupUserCommand,
} from "./commands/AssociateTrafficDistributionGroupUserCommand";
import {
  type AssociateUserProficienciesCommandInput,
  type AssociateUserProficienciesCommandOutput,
  AssociateUserProficienciesCommand,
} from "./commands/AssociateUserProficienciesCommand";
import {
  type AssociateWorkspaceCommandInput,
  type AssociateWorkspaceCommandOutput,
  AssociateWorkspaceCommand,
} from "./commands/AssociateWorkspaceCommand";
import {
  type BatchAssociateAnalyticsDataSetCommandInput,
  type BatchAssociateAnalyticsDataSetCommandOutput,
  BatchAssociateAnalyticsDataSetCommand,
} from "./commands/BatchAssociateAnalyticsDataSetCommand";
import {
  type BatchCreateDataTableValueCommandInput,
  type BatchCreateDataTableValueCommandOutput,
  BatchCreateDataTableValueCommand,
} from "./commands/BatchCreateDataTableValueCommand";
import {
  type BatchDeleteDataTableValueCommandInput,
  type BatchDeleteDataTableValueCommandOutput,
  BatchDeleteDataTableValueCommand,
} from "./commands/BatchDeleteDataTableValueCommand";
import {
  type BatchDescribeDataTableValueCommandInput,
  type BatchDescribeDataTableValueCommandOutput,
  BatchDescribeDataTableValueCommand,
} from "./commands/BatchDescribeDataTableValueCommand";
import {
  type BatchDisassociateAnalyticsDataSetCommandInput,
  type BatchDisassociateAnalyticsDataSetCommandOutput,
  BatchDisassociateAnalyticsDataSetCommand,
} from "./commands/BatchDisassociateAnalyticsDataSetCommand";
import {
  type BatchGetAttachedFileMetadataCommandInput,
  type BatchGetAttachedFileMetadataCommandOutput,
  BatchGetAttachedFileMetadataCommand,
} from "./commands/BatchGetAttachedFileMetadataCommand";
import {
  type BatchGetFlowAssociationCommandInput,
  type BatchGetFlowAssociationCommandOutput,
  BatchGetFlowAssociationCommand,
} from "./commands/BatchGetFlowAssociationCommand";
import {
  type BatchPutContactCommandInput,
  type BatchPutContactCommandOutput,
  BatchPutContactCommand,
} from "./commands/BatchPutContactCommand";
import {
  type BatchUpdateDataTableValueCommandInput,
  type BatchUpdateDataTableValueCommandOutput,
  BatchUpdateDataTableValueCommand,
} from "./commands/BatchUpdateDataTableValueCommand";
import {
  type ClaimPhoneNumberCommandInput,
  type ClaimPhoneNumberCommandOutput,
  ClaimPhoneNumberCommand,
} from "./commands/ClaimPhoneNumberCommand";
import {
  type CompleteAttachedFileUploadCommandInput,
  type CompleteAttachedFileUploadCommandOutput,
  CompleteAttachedFileUploadCommand,
} from "./commands/CompleteAttachedFileUploadCommand";
import {
  type CreateAgentStatusCommandInput,
  type CreateAgentStatusCommandOutput,
  CreateAgentStatusCommand,
} from "./commands/CreateAgentStatusCommand";
import {
  type CreateContactCommandInput,
  type CreateContactCommandOutput,
  CreateContactCommand,
} from "./commands/CreateContactCommand";
import {
  type CreateContactFlowCommandInput,
  type CreateContactFlowCommandOutput,
  CreateContactFlowCommand,
} from "./commands/CreateContactFlowCommand";
import {
  type CreateContactFlowModuleAliasCommandInput,
  type CreateContactFlowModuleAliasCommandOutput,
  CreateContactFlowModuleAliasCommand,
} from "./commands/CreateContactFlowModuleAliasCommand";
import {
  type CreateContactFlowModuleCommandInput,
  type CreateContactFlowModuleCommandOutput,
  CreateContactFlowModuleCommand,
} from "./commands/CreateContactFlowModuleCommand";
import {
  type CreateContactFlowModuleVersionCommandInput,
  type CreateContactFlowModuleVersionCommandOutput,
  CreateContactFlowModuleVersionCommand,
} from "./commands/CreateContactFlowModuleVersionCommand";
import {
  type CreateContactFlowVersionCommandInput,
  type CreateContactFlowVersionCommandOutput,
  CreateContactFlowVersionCommand,
} from "./commands/CreateContactFlowVersionCommand";
import {
  type CreateDataTableAttributeCommandInput,
  type CreateDataTableAttributeCommandOutput,
  CreateDataTableAttributeCommand,
} from "./commands/CreateDataTableAttributeCommand";
import {
  type CreateDataTableCommandInput,
  type CreateDataTableCommandOutput,
  CreateDataTableCommand,
} from "./commands/CreateDataTableCommand";
import {
  type CreateEmailAddressCommandInput,
  type CreateEmailAddressCommandOutput,
  CreateEmailAddressCommand,
} from "./commands/CreateEmailAddressCommand";
import {
  type CreateEvaluationFormCommandInput,
  type CreateEvaluationFormCommandOutput,
  CreateEvaluationFormCommand,
} from "./commands/CreateEvaluationFormCommand";
import {
  type CreateHoursOfOperationCommandInput,
  type CreateHoursOfOperationCommandOutput,
  CreateHoursOfOperationCommand,
} from "./commands/CreateHoursOfOperationCommand";
import {
  type CreateHoursOfOperationOverrideCommandInput,
  type CreateHoursOfOperationOverrideCommandOutput,
  CreateHoursOfOperationOverrideCommand,
} from "./commands/CreateHoursOfOperationOverrideCommand";
import {
  type CreateInstanceCommandInput,
  type CreateInstanceCommandOutput,
  CreateInstanceCommand,
} from "./commands/CreateInstanceCommand";
import {
  type CreateIntegrationAssociationCommandInput,
  type CreateIntegrationAssociationCommandOutput,
  CreateIntegrationAssociationCommand,
} from "./commands/CreateIntegrationAssociationCommand";
import {
  type CreateNotificationCommandInput,
  type CreateNotificationCommandOutput,
  CreateNotificationCommand,
} from "./commands/CreateNotificationCommand";
import {
  type CreateParticipantCommandInput,
  type CreateParticipantCommandOutput,
  CreateParticipantCommand,
} from "./commands/CreateParticipantCommand";
import {
  type CreatePersistentContactAssociationCommandInput,
  type CreatePersistentContactAssociationCommandOutput,
  CreatePersistentContactAssociationCommand,
} from "./commands/CreatePersistentContactAssociationCommand";
import {
  type CreatePredefinedAttributeCommandInput,
  type CreatePredefinedAttributeCommandOutput,
  CreatePredefinedAttributeCommand,
} from "./commands/CreatePredefinedAttributeCommand";
import {
  type CreatePromptCommandInput,
  type CreatePromptCommandOutput,
  CreatePromptCommand,
} from "./commands/CreatePromptCommand";
import {
  type CreatePushNotificationRegistrationCommandInput,
  type CreatePushNotificationRegistrationCommandOutput,
  CreatePushNotificationRegistrationCommand,
} from "./commands/CreatePushNotificationRegistrationCommand";
import {
  type CreateQueueCommandInput,
  type CreateQueueCommandOutput,
  CreateQueueCommand,
} from "./commands/CreateQueueCommand";
import {
  type CreateQuickConnectCommandInput,
  type CreateQuickConnectCommandOutput,
  CreateQuickConnectCommand,
} from "./commands/CreateQuickConnectCommand";
import {
  type CreateRoutingProfileCommandInput,
  type CreateRoutingProfileCommandOutput,
  CreateRoutingProfileCommand,
} from "./commands/CreateRoutingProfileCommand";
import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type CreateSecurityProfileCommandInput,
  type CreateSecurityProfileCommandOutput,
  CreateSecurityProfileCommand,
} from "./commands/CreateSecurityProfileCommand";
import {
  type CreateTaskTemplateCommandInput,
  type CreateTaskTemplateCommandOutput,
  CreateTaskTemplateCommand,
} from "./commands/CreateTaskTemplateCommand";
import {
  type CreateTestCaseCommandInput,
  type CreateTestCaseCommandOutput,
  CreateTestCaseCommand,
} from "./commands/CreateTestCaseCommand";
import {
  type CreateTrafficDistributionGroupCommandInput,
  type CreateTrafficDistributionGroupCommandOutput,
  CreateTrafficDistributionGroupCommand,
} from "./commands/CreateTrafficDistributionGroupCommand";
import {
  type CreateUseCaseCommandInput,
  type CreateUseCaseCommandOutput,
  CreateUseCaseCommand,
} from "./commands/CreateUseCaseCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type CreateUserHierarchyGroupCommandInput,
  type CreateUserHierarchyGroupCommandOutput,
  CreateUserHierarchyGroupCommand,
} from "./commands/CreateUserHierarchyGroupCommand";
import {
  type CreateViewCommandInput,
  type CreateViewCommandOutput,
  CreateViewCommand,
} from "./commands/CreateViewCommand";
import {
  type CreateViewVersionCommandInput,
  type CreateViewVersionCommandOutput,
  CreateViewVersionCommand,
} from "./commands/CreateViewVersionCommand";
import {
  type CreateVocabularyCommandInput,
  type CreateVocabularyCommandOutput,
  CreateVocabularyCommand,
} from "./commands/CreateVocabularyCommand";
import {
  type CreateWorkspaceCommandInput,
  type CreateWorkspaceCommandOutput,
  CreateWorkspaceCommand,
} from "./commands/CreateWorkspaceCommand";
import {
  type CreateWorkspacePageCommandInput,
  type CreateWorkspacePageCommandOutput,
  CreateWorkspacePageCommand,
} from "./commands/CreateWorkspacePageCommand";
import {
  type DeactivateEvaluationFormCommandInput,
  type DeactivateEvaluationFormCommandOutput,
  DeactivateEvaluationFormCommand,
} from "./commands/DeactivateEvaluationFormCommand";
import {
  type DeleteAttachedFileCommandInput,
  type DeleteAttachedFileCommandOutput,
  DeleteAttachedFileCommand,
} from "./commands/DeleteAttachedFileCommand";
import {
  type DeleteContactEvaluationCommandInput,
  type DeleteContactEvaluationCommandOutput,
  DeleteContactEvaluationCommand,
} from "./commands/DeleteContactEvaluationCommand";
import {
  type DeleteContactFlowCommandInput,
  type DeleteContactFlowCommandOutput,
  DeleteContactFlowCommand,
} from "./commands/DeleteContactFlowCommand";
import {
  type DeleteContactFlowModuleAliasCommandInput,
  type DeleteContactFlowModuleAliasCommandOutput,
  DeleteContactFlowModuleAliasCommand,
} from "./commands/DeleteContactFlowModuleAliasCommand";
import {
  type DeleteContactFlowModuleCommandInput,
  type DeleteContactFlowModuleCommandOutput,
  DeleteContactFlowModuleCommand,
} from "./commands/DeleteContactFlowModuleCommand";
import {
  type DeleteContactFlowModuleVersionCommandInput,
  type DeleteContactFlowModuleVersionCommandOutput,
  DeleteContactFlowModuleVersionCommand,
} from "./commands/DeleteContactFlowModuleVersionCommand";
import {
  type DeleteContactFlowVersionCommandInput,
  type DeleteContactFlowVersionCommandOutput,
  DeleteContactFlowVersionCommand,
} from "./commands/DeleteContactFlowVersionCommand";
import {
  type DeleteDataTableAttributeCommandInput,
  type DeleteDataTableAttributeCommandOutput,
  DeleteDataTableAttributeCommand,
} from "./commands/DeleteDataTableAttributeCommand";
import {
  type DeleteDataTableCommandInput,
  type DeleteDataTableCommandOutput,
  DeleteDataTableCommand,
} from "./commands/DeleteDataTableCommand";
import {
  type DeleteEmailAddressCommandInput,
  type DeleteEmailAddressCommandOutput,
  DeleteEmailAddressCommand,
} from "./commands/DeleteEmailAddressCommand";
import {
  type DeleteEvaluationFormCommandInput,
  type DeleteEvaluationFormCommandOutput,
  DeleteEvaluationFormCommand,
} from "./commands/DeleteEvaluationFormCommand";
import {
  type DeleteHoursOfOperationCommandInput,
  type DeleteHoursOfOperationCommandOutput,
  DeleteHoursOfOperationCommand,
} from "./commands/DeleteHoursOfOperationCommand";
import {
  type DeleteHoursOfOperationOverrideCommandInput,
  type DeleteHoursOfOperationOverrideCommandOutput,
  DeleteHoursOfOperationOverrideCommand,
} from "./commands/DeleteHoursOfOperationOverrideCommand";
import {
  type DeleteInstanceCommandInput,
  type DeleteInstanceCommandOutput,
  DeleteInstanceCommand,
} from "./commands/DeleteInstanceCommand";
import {
  type DeleteIntegrationAssociationCommandInput,
  type DeleteIntegrationAssociationCommandOutput,
  DeleteIntegrationAssociationCommand,
} from "./commands/DeleteIntegrationAssociationCommand";
import {
  type DeleteNotificationCommandInput,
  type DeleteNotificationCommandOutput,
  DeleteNotificationCommand,
} from "./commands/DeleteNotificationCommand";
import {
  type DeletePredefinedAttributeCommandInput,
  type DeletePredefinedAttributeCommandOutput,
  DeletePredefinedAttributeCommand,
} from "./commands/DeletePredefinedAttributeCommand";
import {
  type DeletePromptCommandInput,
  type DeletePromptCommandOutput,
  DeletePromptCommand,
} from "./commands/DeletePromptCommand";
import {
  type DeletePushNotificationRegistrationCommandInput,
  type DeletePushNotificationRegistrationCommandOutput,
  DeletePushNotificationRegistrationCommand,
} from "./commands/DeletePushNotificationRegistrationCommand";
import {
  type DeleteQueueCommandInput,
  type DeleteQueueCommandOutput,
  DeleteQueueCommand,
} from "./commands/DeleteQueueCommand";
import {
  type DeleteQuickConnectCommandInput,
  type DeleteQuickConnectCommandOutput,
  DeleteQuickConnectCommand,
} from "./commands/DeleteQuickConnectCommand";
import {
  type DeleteRoutingProfileCommandInput,
  type DeleteRoutingProfileCommandOutput,
  DeleteRoutingProfileCommand,
} from "./commands/DeleteRoutingProfileCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DeleteSecurityProfileCommandInput,
  type DeleteSecurityProfileCommandOutput,
  DeleteSecurityProfileCommand,
} from "./commands/DeleteSecurityProfileCommand";
import {
  type DeleteTaskTemplateCommandInput,
  type DeleteTaskTemplateCommandOutput,
  DeleteTaskTemplateCommand,
} from "./commands/DeleteTaskTemplateCommand";
import {
  type DeleteTestCaseCommandInput,
  type DeleteTestCaseCommandOutput,
  DeleteTestCaseCommand,
} from "./commands/DeleteTestCaseCommand";
import {
  type DeleteTrafficDistributionGroupCommandInput,
  type DeleteTrafficDistributionGroupCommandOutput,
  DeleteTrafficDistributionGroupCommand,
} from "./commands/DeleteTrafficDistributionGroupCommand";
import {
  type DeleteUseCaseCommandInput,
  type DeleteUseCaseCommandOutput,
  DeleteUseCaseCommand,
} from "./commands/DeleteUseCaseCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DeleteUserHierarchyGroupCommandInput,
  type DeleteUserHierarchyGroupCommandOutput,
  DeleteUserHierarchyGroupCommand,
} from "./commands/DeleteUserHierarchyGroupCommand";
import {
  type DeleteViewCommandInput,
  type DeleteViewCommandOutput,
  DeleteViewCommand,
} from "./commands/DeleteViewCommand";
import {
  type DeleteViewVersionCommandInput,
  type DeleteViewVersionCommandOutput,
  DeleteViewVersionCommand,
} from "./commands/DeleteViewVersionCommand";
import {
  type DeleteVocabularyCommandInput,
  type DeleteVocabularyCommandOutput,
  DeleteVocabularyCommand,
} from "./commands/DeleteVocabularyCommand";
import {
  type DeleteWorkspaceCommandInput,
  type DeleteWorkspaceCommandOutput,
  DeleteWorkspaceCommand,
} from "./commands/DeleteWorkspaceCommand";
import {
  type DeleteWorkspaceMediaCommandInput,
  type DeleteWorkspaceMediaCommandOutput,
  DeleteWorkspaceMediaCommand,
} from "./commands/DeleteWorkspaceMediaCommand";
import {
  type DeleteWorkspacePageCommandInput,
  type DeleteWorkspacePageCommandOutput,
  DeleteWorkspacePageCommand,
} from "./commands/DeleteWorkspacePageCommand";
import {
  type DescribeAgentStatusCommandInput,
  type DescribeAgentStatusCommandOutput,
  DescribeAgentStatusCommand,
} from "./commands/DescribeAgentStatusCommand";
import {
  type DescribeAuthenticationProfileCommandInput,
  type DescribeAuthenticationProfileCommandOutput,
  DescribeAuthenticationProfileCommand,
} from "./commands/DescribeAuthenticationProfileCommand";
import {
  type DescribeContactCommandInput,
  type DescribeContactCommandOutput,
  DescribeContactCommand,
} from "./commands/DescribeContactCommand";
import {
  type DescribeContactEvaluationCommandInput,
  type DescribeContactEvaluationCommandOutput,
  DescribeContactEvaluationCommand,
} from "./commands/DescribeContactEvaluationCommand";
import {
  type DescribeContactFlowCommandInput,
  type DescribeContactFlowCommandOutput,
  DescribeContactFlowCommand,
} from "./commands/DescribeContactFlowCommand";
import {
  type DescribeContactFlowModuleAliasCommandInput,
  type DescribeContactFlowModuleAliasCommandOutput,
  DescribeContactFlowModuleAliasCommand,
} from "./commands/DescribeContactFlowModuleAliasCommand";
import {
  type DescribeContactFlowModuleCommandInput,
  type DescribeContactFlowModuleCommandOutput,
  DescribeContactFlowModuleCommand,
} from "./commands/DescribeContactFlowModuleCommand";
import {
  type DescribeDataTableAttributeCommandInput,
  type DescribeDataTableAttributeCommandOutput,
  DescribeDataTableAttributeCommand,
} from "./commands/DescribeDataTableAttributeCommand";
import {
  type DescribeDataTableCommandInput,
  type DescribeDataTableCommandOutput,
  DescribeDataTableCommand,
} from "./commands/DescribeDataTableCommand";
import {
  type DescribeEmailAddressCommandInput,
  type DescribeEmailAddressCommandOutput,
  DescribeEmailAddressCommand,
} from "./commands/DescribeEmailAddressCommand";
import {
  type DescribeEvaluationFormCommandInput,
  type DescribeEvaluationFormCommandOutput,
  DescribeEvaluationFormCommand,
} from "./commands/DescribeEvaluationFormCommand";
import {
  type DescribeHoursOfOperationCommandInput,
  type DescribeHoursOfOperationCommandOutput,
  DescribeHoursOfOperationCommand,
} from "./commands/DescribeHoursOfOperationCommand";
import {
  type DescribeHoursOfOperationOverrideCommandInput,
  type DescribeHoursOfOperationOverrideCommandOutput,
  DescribeHoursOfOperationOverrideCommand,
} from "./commands/DescribeHoursOfOperationOverrideCommand";
import {
  type DescribeInstanceAttributeCommandInput,
  type DescribeInstanceAttributeCommandOutput,
  DescribeInstanceAttributeCommand,
} from "./commands/DescribeInstanceAttributeCommand";
import {
  type DescribeInstanceCommandInput,
  type DescribeInstanceCommandOutput,
  DescribeInstanceCommand,
} from "./commands/DescribeInstanceCommand";
import {
  type DescribeInstanceStorageConfigCommandInput,
  type DescribeInstanceStorageConfigCommandOutput,
  DescribeInstanceStorageConfigCommand,
} from "./commands/DescribeInstanceStorageConfigCommand";
import {
  type DescribeNotificationCommandInput,
  type DescribeNotificationCommandOutput,
  DescribeNotificationCommand,
} from "./commands/DescribeNotificationCommand";
import {
  type DescribePhoneNumberCommandInput,
  type DescribePhoneNumberCommandOutput,
  DescribePhoneNumberCommand,
} from "./commands/DescribePhoneNumberCommand";
import {
  type DescribePredefinedAttributeCommandInput,
  type DescribePredefinedAttributeCommandOutput,
  DescribePredefinedAttributeCommand,
} from "./commands/DescribePredefinedAttributeCommand";
import {
  type DescribePromptCommandInput,
  type DescribePromptCommandOutput,
  DescribePromptCommand,
} from "./commands/DescribePromptCommand";
import {
  type DescribeQueueCommandInput,
  type DescribeQueueCommandOutput,
  DescribeQueueCommand,
} from "./commands/DescribeQueueCommand";
import {
  type DescribeQuickConnectCommandInput,
  type DescribeQuickConnectCommandOutput,
  DescribeQuickConnectCommand,
} from "./commands/DescribeQuickConnectCommand";
import {
  type DescribeRoutingProfileCommandInput,
  type DescribeRoutingProfileCommandOutput,
  DescribeRoutingProfileCommand,
} from "./commands/DescribeRoutingProfileCommand";
import {
  type DescribeRuleCommandInput,
  type DescribeRuleCommandOutput,
  DescribeRuleCommand,
} from "./commands/DescribeRuleCommand";
import {
  type DescribeSecurityProfileCommandInput,
  type DescribeSecurityProfileCommandOutput,
  DescribeSecurityProfileCommand,
} from "./commands/DescribeSecurityProfileCommand";
import {
  type DescribeTestCaseCommandInput,
  type DescribeTestCaseCommandOutput,
  DescribeTestCaseCommand,
} from "./commands/DescribeTestCaseCommand";
import {
  type DescribeTrafficDistributionGroupCommandInput,
  type DescribeTrafficDistributionGroupCommandOutput,
  DescribeTrafficDistributionGroupCommand,
} from "./commands/DescribeTrafficDistributionGroupCommand";
import {
  type DescribeUserCommandInput,
  type DescribeUserCommandOutput,
  DescribeUserCommand,
} from "./commands/DescribeUserCommand";
import {
  type DescribeUserHierarchyGroupCommandInput,
  type DescribeUserHierarchyGroupCommandOutput,
  DescribeUserHierarchyGroupCommand,
} from "./commands/DescribeUserHierarchyGroupCommand";
import {
  type DescribeUserHierarchyStructureCommandInput,
  type DescribeUserHierarchyStructureCommandOutput,
  DescribeUserHierarchyStructureCommand,
} from "./commands/DescribeUserHierarchyStructureCommand";
import {
  type DescribeViewCommandInput,
  type DescribeViewCommandOutput,
  DescribeViewCommand,
} from "./commands/DescribeViewCommand";
import {
  type DescribeVocabularyCommandInput,
  type DescribeVocabularyCommandOutput,
  DescribeVocabularyCommand,
} from "./commands/DescribeVocabularyCommand";
import {
  type DescribeWorkspaceCommandInput,
  type DescribeWorkspaceCommandOutput,
  DescribeWorkspaceCommand,
} from "./commands/DescribeWorkspaceCommand";
import {
  type DisassociateAnalyticsDataSetCommandInput,
  type DisassociateAnalyticsDataSetCommandOutput,
  DisassociateAnalyticsDataSetCommand,
} from "./commands/DisassociateAnalyticsDataSetCommand";
import {
  type DisassociateApprovedOriginCommandInput,
  type DisassociateApprovedOriginCommandOutput,
  DisassociateApprovedOriginCommand,
} from "./commands/DisassociateApprovedOriginCommand";
import {
  type DisassociateBotCommandInput,
  type DisassociateBotCommandOutput,
  DisassociateBotCommand,
} from "./commands/DisassociateBotCommand";
import {
  type DisassociateEmailAddressAliasCommandInput,
  type DisassociateEmailAddressAliasCommandOutput,
  DisassociateEmailAddressAliasCommand,
} from "./commands/DisassociateEmailAddressAliasCommand";
import {
  type DisassociateFlowCommandInput,
  type DisassociateFlowCommandOutput,
  DisassociateFlowCommand,
} from "./commands/DisassociateFlowCommand";
import {
  type DisassociateHoursOfOperationsCommandInput,
  type DisassociateHoursOfOperationsCommandOutput,
  DisassociateHoursOfOperationsCommand,
} from "./commands/DisassociateHoursOfOperationsCommand";
import {
  type DisassociateInstanceStorageConfigCommandInput,
  type DisassociateInstanceStorageConfigCommandOutput,
  DisassociateInstanceStorageConfigCommand,
} from "./commands/DisassociateInstanceStorageConfigCommand";
import {
  type DisassociateLambdaFunctionCommandInput,
  type DisassociateLambdaFunctionCommandOutput,
  DisassociateLambdaFunctionCommand,
} from "./commands/DisassociateLambdaFunctionCommand";
import {
  type DisassociateLexBotCommandInput,
  type DisassociateLexBotCommandOutput,
  DisassociateLexBotCommand,
} from "./commands/DisassociateLexBotCommand";
import {
  type DisassociatePhoneNumberContactFlowCommandInput,
  type DisassociatePhoneNumberContactFlowCommandOutput,
  DisassociatePhoneNumberContactFlowCommand,
} from "./commands/DisassociatePhoneNumberContactFlowCommand";
import {
  type DisassociateQueueEmailAddressesCommandInput,
  type DisassociateQueueEmailAddressesCommandOutput,
  DisassociateQueueEmailAddressesCommand,
} from "./commands/DisassociateQueueEmailAddressesCommand";
import {
  type DisassociateQueueQuickConnectsCommandInput,
  type DisassociateQueueQuickConnectsCommandOutput,
  DisassociateQueueQuickConnectsCommand,
} from "./commands/DisassociateQueueQuickConnectsCommand";
import {
  type DisassociateRoutingProfileQueuesCommandInput,
  type DisassociateRoutingProfileQueuesCommandOutput,
  DisassociateRoutingProfileQueuesCommand,
} from "./commands/DisassociateRoutingProfileQueuesCommand";
import {
  type DisassociateSecurityKeyCommandInput,
  type DisassociateSecurityKeyCommandOutput,
  DisassociateSecurityKeyCommand,
} from "./commands/DisassociateSecurityKeyCommand";
import {
  type DisassociateSecurityProfilesCommandInput,
  type DisassociateSecurityProfilesCommandOutput,
  DisassociateSecurityProfilesCommand,
} from "./commands/DisassociateSecurityProfilesCommand";
import {
  type DisassociateTrafficDistributionGroupUserCommandInput,
  type DisassociateTrafficDistributionGroupUserCommandOutput,
  DisassociateTrafficDistributionGroupUserCommand,
} from "./commands/DisassociateTrafficDistributionGroupUserCommand";
import {
  type DisassociateUserProficienciesCommandInput,
  type DisassociateUserProficienciesCommandOutput,
  DisassociateUserProficienciesCommand,
} from "./commands/DisassociateUserProficienciesCommand";
import {
  type DisassociateWorkspaceCommandInput,
  type DisassociateWorkspaceCommandOutput,
  DisassociateWorkspaceCommand,
} from "./commands/DisassociateWorkspaceCommand";
import {
  type DismissUserContactCommandInput,
  type DismissUserContactCommandOutput,
  DismissUserContactCommand,
} from "./commands/DismissUserContactCommand";
import {
  type EvaluateDataTableValuesCommandInput,
  type EvaluateDataTableValuesCommandOutput,
  EvaluateDataTableValuesCommand,
} from "./commands/EvaluateDataTableValuesCommand";
import {
  type GetAttachedFileCommandInput,
  type GetAttachedFileCommandOutput,
  GetAttachedFileCommand,
} from "./commands/GetAttachedFileCommand";
import {
  type GetContactAttributesCommandInput,
  type GetContactAttributesCommandOutput,
  GetContactAttributesCommand,
} from "./commands/GetContactAttributesCommand";
import {
  type GetContactMetricsCommandInput,
  type GetContactMetricsCommandOutput,
  GetContactMetricsCommand,
} from "./commands/GetContactMetricsCommand";
import {
  type GetCurrentMetricDataCommandInput,
  type GetCurrentMetricDataCommandOutput,
  GetCurrentMetricDataCommand,
} from "./commands/GetCurrentMetricDataCommand";
import {
  type GetCurrentUserDataCommandInput,
  type GetCurrentUserDataCommandOutput,
  GetCurrentUserDataCommand,
} from "./commands/GetCurrentUserDataCommand";
import {
  type GetEffectiveHoursOfOperationsCommandInput,
  type GetEffectiveHoursOfOperationsCommandOutput,
  GetEffectiveHoursOfOperationsCommand,
} from "./commands/GetEffectiveHoursOfOperationsCommand";
import {
  type GetFederationTokenCommandInput,
  type GetFederationTokenCommandOutput,
  GetFederationTokenCommand,
} from "./commands/GetFederationTokenCommand";
import {
  type GetFlowAssociationCommandInput,
  type GetFlowAssociationCommandOutput,
  GetFlowAssociationCommand,
} from "./commands/GetFlowAssociationCommand";
import {
  type GetMetricDataCommandInput,
  type GetMetricDataCommandOutput,
  GetMetricDataCommand,
} from "./commands/GetMetricDataCommand";
import {
  type GetMetricDataV2CommandInput,
  type GetMetricDataV2CommandOutput,
  GetMetricDataV2Command,
} from "./commands/GetMetricDataV2Command";
import {
  type GetPromptFileCommandInput,
  type GetPromptFileCommandOutput,
  GetPromptFileCommand,
} from "./commands/GetPromptFileCommand";
import {
  type GetTaskTemplateCommandInput,
  type GetTaskTemplateCommandOutput,
  GetTaskTemplateCommand,
} from "./commands/GetTaskTemplateCommand";
import {
  type GetTestCaseExecutionSummaryCommandInput,
  type GetTestCaseExecutionSummaryCommandOutput,
  GetTestCaseExecutionSummaryCommand,
} from "./commands/GetTestCaseExecutionSummaryCommand";
import {
  type GetTrafficDistributionCommandInput,
  type GetTrafficDistributionCommandOutput,
  GetTrafficDistributionCommand,
} from "./commands/GetTrafficDistributionCommand";
import {
  type ImportPhoneNumberCommandInput,
  type ImportPhoneNumberCommandOutput,
  ImportPhoneNumberCommand,
} from "./commands/ImportPhoneNumberCommand";
import {
  type ImportWorkspaceMediaCommandInput,
  type ImportWorkspaceMediaCommandOutput,
  ImportWorkspaceMediaCommand,
} from "./commands/ImportWorkspaceMediaCommand";
import {
  type ListAgentStatusesCommandInput,
  type ListAgentStatusesCommandOutput,
  ListAgentStatusesCommand,
} from "./commands/ListAgentStatusesCommand";
import {
  type ListAnalyticsDataAssociationsCommandInput,
  type ListAnalyticsDataAssociationsCommandOutput,
  ListAnalyticsDataAssociationsCommand,
} from "./commands/ListAnalyticsDataAssociationsCommand";
import {
  type ListAnalyticsDataLakeDataSetsCommandInput,
  type ListAnalyticsDataLakeDataSetsCommandOutput,
  ListAnalyticsDataLakeDataSetsCommand,
} from "./commands/ListAnalyticsDataLakeDataSetsCommand";
import {
  type ListApprovedOriginsCommandInput,
  type ListApprovedOriginsCommandOutput,
  ListApprovedOriginsCommand,
} from "./commands/ListApprovedOriginsCommand";
import {
  type ListAssociatedContactsCommandInput,
  type ListAssociatedContactsCommandOutput,
  ListAssociatedContactsCommand,
} from "./commands/ListAssociatedContactsCommand";
import {
  type ListAuthenticationProfilesCommandInput,
  type ListAuthenticationProfilesCommandOutput,
  ListAuthenticationProfilesCommand,
} from "./commands/ListAuthenticationProfilesCommand";
import { type ListBotsCommandInput, type ListBotsCommandOutput, ListBotsCommand } from "./commands/ListBotsCommand";
import {
  type ListChildHoursOfOperationsCommandInput,
  type ListChildHoursOfOperationsCommandOutput,
  ListChildHoursOfOperationsCommand,
} from "./commands/ListChildHoursOfOperationsCommand";
import {
  type ListContactEvaluationsCommandInput,
  type ListContactEvaluationsCommandOutput,
  ListContactEvaluationsCommand,
} from "./commands/ListContactEvaluationsCommand";
import {
  type ListContactFlowModuleAliasesCommandInput,
  type ListContactFlowModuleAliasesCommandOutput,
  ListContactFlowModuleAliasesCommand,
} from "./commands/ListContactFlowModuleAliasesCommand";
import {
  type ListContactFlowModulesCommandInput,
  type ListContactFlowModulesCommandOutput,
  ListContactFlowModulesCommand,
} from "./commands/ListContactFlowModulesCommand";
import {
  type ListContactFlowModuleVersionsCommandInput,
  type ListContactFlowModuleVersionsCommandOutput,
  ListContactFlowModuleVersionsCommand,
} from "./commands/ListContactFlowModuleVersionsCommand";
import {
  type ListContactFlowsCommandInput,
  type ListContactFlowsCommandOutput,
  ListContactFlowsCommand,
} from "./commands/ListContactFlowsCommand";
import {
  type ListContactFlowVersionsCommandInput,
  type ListContactFlowVersionsCommandOutput,
  ListContactFlowVersionsCommand,
} from "./commands/ListContactFlowVersionsCommand";
import {
  type ListContactReferencesCommandInput,
  type ListContactReferencesCommandOutput,
  ListContactReferencesCommand,
} from "./commands/ListContactReferencesCommand";
import {
  type ListDataTableAttributesCommandInput,
  type ListDataTableAttributesCommandOutput,
  ListDataTableAttributesCommand,
} from "./commands/ListDataTableAttributesCommand";
import {
  type ListDataTablePrimaryValuesCommandInput,
  type ListDataTablePrimaryValuesCommandOutput,
  ListDataTablePrimaryValuesCommand,
} from "./commands/ListDataTablePrimaryValuesCommand";
import {
  type ListDataTablesCommandInput,
  type ListDataTablesCommandOutput,
  ListDataTablesCommand,
} from "./commands/ListDataTablesCommand";
import {
  type ListDataTableValuesCommandInput,
  type ListDataTableValuesCommandOutput,
  ListDataTableValuesCommand,
} from "./commands/ListDataTableValuesCommand";
import {
  type ListDefaultVocabulariesCommandInput,
  type ListDefaultVocabulariesCommandOutput,
  ListDefaultVocabulariesCommand,
} from "./commands/ListDefaultVocabulariesCommand";
import {
  type ListEntitySecurityProfilesCommandInput,
  type ListEntitySecurityProfilesCommandOutput,
  ListEntitySecurityProfilesCommand,
} from "./commands/ListEntitySecurityProfilesCommand";
import {
  type ListEvaluationFormsCommandInput,
  type ListEvaluationFormsCommandOutput,
  ListEvaluationFormsCommand,
} from "./commands/ListEvaluationFormsCommand";
import {
  type ListEvaluationFormVersionsCommandInput,
  type ListEvaluationFormVersionsCommandOutput,
  ListEvaluationFormVersionsCommand,
} from "./commands/ListEvaluationFormVersionsCommand";
import {
  type ListFlowAssociationsCommandInput,
  type ListFlowAssociationsCommandOutput,
  ListFlowAssociationsCommand,
} from "./commands/ListFlowAssociationsCommand";
import {
  type ListHoursOfOperationOverridesCommandInput,
  type ListHoursOfOperationOverridesCommandOutput,
  ListHoursOfOperationOverridesCommand,
} from "./commands/ListHoursOfOperationOverridesCommand";
import {
  type ListHoursOfOperationsCommandInput,
  type ListHoursOfOperationsCommandOutput,
  ListHoursOfOperationsCommand,
} from "./commands/ListHoursOfOperationsCommand";
import {
  type ListInstanceAttributesCommandInput,
  type ListInstanceAttributesCommandOutput,
  ListInstanceAttributesCommand,
} from "./commands/ListInstanceAttributesCommand";
import {
  type ListInstancesCommandInput,
  type ListInstancesCommandOutput,
  ListInstancesCommand,
} from "./commands/ListInstancesCommand";
import {
  type ListInstanceStorageConfigsCommandInput,
  type ListInstanceStorageConfigsCommandOutput,
  ListInstanceStorageConfigsCommand,
} from "./commands/ListInstanceStorageConfigsCommand";
import {
  type ListIntegrationAssociationsCommandInput,
  type ListIntegrationAssociationsCommandOutput,
  ListIntegrationAssociationsCommand,
} from "./commands/ListIntegrationAssociationsCommand";
import {
  type ListLambdaFunctionsCommandInput,
  type ListLambdaFunctionsCommandOutput,
  ListLambdaFunctionsCommand,
} from "./commands/ListLambdaFunctionsCommand";
import {
  type ListLexBotsCommandInput,
  type ListLexBotsCommandOutput,
  ListLexBotsCommand,
} from "./commands/ListLexBotsCommand";
import {
  type ListNotificationsCommandInput,
  type ListNotificationsCommandOutput,
  ListNotificationsCommand,
} from "./commands/ListNotificationsCommand";
import {
  type ListPhoneNumbersCommandInput,
  type ListPhoneNumbersCommandOutput,
  ListPhoneNumbersCommand,
} from "./commands/ListPhoneNumbersCommand";
import {
  type ListPhoneNumbersV2CommandInput,
  type ListPhoneNumbersV2CommandOutput,
  ListPhoneNumbersV2Command,
} from "./commands/ListPhoneNumbersV2Command";
import {
  type ListPredefinedAttributesCommandInput,
  type ListPredefinedAttributesCommandOutput,
  ListPredefinedAttributesCommand,
} from "./commands/ListPredefinedAttributesCommand";
import {
  type ListPromptsCommandInput,
  type ListPromptsCommandOutput,
  ListPromptsCommand,
} from "./commands/ListPromptsCommand";
import {
  type ListQueueEmailAddressesCommandInput,
  type ListQueueEmailAddressesCommandOutput,
  ListQueueEmailAddressesCommand,
} from "./commands/ListQueueEmailAddressesCommand";
import {
  type ListQueueQuickConnectsCommandInput,
  type ListQueueQuickConnectsCommandOutput,
  ListQueueQuickConnectsCommand,
} from "./commands/ListQueueQuickConnectsCommand";
import {
  type ListQueuesCommandInput,
  type ListQueuesCommandOutput,
  ListQueuesCommand,
} from "./commands/ListQueuesCommand";
import {
  type ListQuickConnectsCommandInput,
  type ListQuickConnectsCommandOutput,
  ListQuickConnectsCommand,
} from "./commands/ListQuickConnectsCommand";
import {
  type ListRealtimeContactAnalysisSegmentsV2CommandInput,
  type ListRealtimeContactAnalysisSegmentsV2CommandOutput,
  ListRealtimeContactAnalysisSegmentsV2Command,
} from "./commands/ListRealtimeContactAnalysisSegmentsV2Command";
import {
  type ListRoutingProfileManualAssignmentQueuesCommandInput,
  type ListRoutingProfileManualAssignmentQueuesCommandOutput,
  ListRoutingProfileManualAssignmentQueuesCommand,
} from "./commands/ListRoutingProfileManualAssignmentQueuesCommand";
import {
  type ListRoutingProfileQueuesCommandInput,
  type ListRoutingProfileQueuesCommandOutput,
  ListRoutingProfileQueuesCommand,
} from "./commands/ListRoutingProfileQueuesCommand";
import {
  type ListRoutingProfilesCommandInput,
  type ListRoutingProfilesCommandOutput,
  ListRoutingProfilesCommand,
} from "./commands/ListRoutingProfilesCommand";
import { type ListRulesCommandInput, type ListRulesCommandOutput, ListRulesCommand } from "./commands/ListRulesCommand";
import {
  type ListSecurityKeysCommandInput,
  type ListSecurityKeysCommandOutput,
  ListSecurityKeysCommand,
} from "./commands/ListSecurityKeysCommand";
import {
  type ListSecurityProfileApplicationsCommandInput,
  type ListSecurityProfileApplicationsCommandOutput,
  ListSecurityProfileApplicationsCommand,
} from "./commands/ListSecurityProfileApplicationsCommand";
import {
  type ListSecurityProfileFlowModulesCommandInput,
  type ListSecurityProfileFlowModulesCommandOutput,
  ListSecurityProfileFlowModulesCommand,
} from "./commands/ListSecurityProfileFlowModulesCommand";
import {
  type ListSecurityProfilePermissionsCommandInput,
  type ListSecurityProfilePermissionsCommandOutput,
  ListSecurityProfilePermissionsCommand,
} from "./commands/ListSecurityProfilePermissionsCommand";
import {
  type ListSecurityProfilesCommandInput,
  type ListSecurityProfilesCommandOutput,
  ListSecurityProfilesCommand,
} from "./commands/ListSecurityProfilesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTaskTemplatesCommandInput,
  type ListTaskTemplatesCommandOutput,
  ListTaskTemplatesCommand,
} from "./commands/ListTaskTemplatesCommand";
import {
  type ListTestCaseExecutionRecordsCommandInput,
  type ListTestCaseExecutionRecordsCommandOutput,
  ListTestCaseExecutionRecordsCommand,
} from "./commands/ListTestCaseExecutionRecordsCommand";
import {
  type ListTestCaseExecutionsCommandInput,
  type ListTestCaseExecutionsCommandOutput,
  ListTestCaseExecutionsCommand,
} from "./commands/ListTestCaseExecutionsCommand";
import {
  type ListTestCasesCommandInput,
  type ListTestCasesCommandOutput,
  ListTestCasesCommand,
} from "./commands/ListTestCasesCommand";
import {
  type ListTrafficDistributionGroupsCommandInput,
  type ListTrafficDistributionGroupsCommandOutput,
  ListTrafficDistributionGroupsCommand,
} from "./commands/ListTrafficDistributionGroupsCommand";
import {
  type ListTrafficDistributionGroupUsersCommandInput,
  type ListTrafficDistributionGroupUsersCommandOutput,
  ListTrafficDistributionGroupUsersCommand,
} from "./commands/ListTrafficDistributionGroupUsersCommand";
import {
  type ListUseCasesCommandInput,
  type ListUseCasesCommandOutput,
  ListUseCasesCommand,
} from "./commands/ListUseCasesCommand";
import {
  type ListUserHierarchyGroupsCommandInput,
  type ListUserHierarchyGroupsCommandOutput,
  ListUserHierarchyGroupsCommand,
} from "./commands/ListUserHierarchyGroupsCommand";
import {
  type ListUserNotificationsCommandInput,
  type ListUserNotificationsCommandOutput,
  ListUserNotificationsCommand,
} from "./commands/ListUserNotificationsCommand";
import {
  type ListUserProficienciesCommandInput,
  type ListUserProficienciesCommandOutput,
  ListUserProficienciesCommand,
} from "./commands/ListUserProficienciesCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import { type ListViewsCommandInput, type ListViewsCommandOutput, ListViewsCommand } from "./commands/ListViewsCommand";
import {
  type ListViewVersionsCommandInput,
  type ListViewVersionsCommandOutput,
  ListViewVersionsCommand,
} from "./commands/ListViewVersionsCommand";
import {
  type ListWorkspaceMediaCommandInput,
  type ListWorkspaceMediaCommandOutput,
  ListWorkspaceMediaCommand,
} from "./commands/ListWorkspaceMediaCommand";
import {
  type ListWorkspacePagesCommandInput,
  type ListWorkspacePagesCommandOutput,
  ListWorkspacePagesCommand,
} from "./commands/ListWorkspacePagesCommand";
import {
  type ListWorkspacesCommandInput,
  type ListWorkspacesCommandOutput,
  ListWorkspacesCommand,
} from "./commands/ListWorkspacesCommand";
import {
  type MonitorContactCommandInput,
  type MonitorContactCommandOutput,
  MonitorContactCommand,
} from "./commands/MonitorContactCommand";
import {
  type PauseContactCommandInput,
  type PauseContactCommandOutput,
  PauseContactCommand,
} from "./commands/PauseContactCommand";
import {
  type PutUserStatusCommandInput,
  type PutUserStatusCommandOutput,
  PutUserStatusCommand,
} from "./commands/PutUserStatusCommand";
import {
  type ReleasePhoneNumberCommandInput,
  type ReleasePhoneNumberCommandOutput,
  ReleasePhoneNumberCommand,
} from "./commands/ReleasePhoneNumberCommand";
import {
  type ReplicateInstanceCommandInput,
  type ReplicateInstanceCommandOutput,
  ReplicateInstanceCommand,
} from "./commands/ReplicateInstanceCommand";
import {
  type ResumeContactCommandInput,
  type ResumeContactCommandOutput,
  ResumeContactCommand,
} from "./commands/ResumeContactCommand";
import {
  type ResumeContactRecordingCommandInput,
  type ResumeContactRecordingCommandOutput,
  ResumeContactRecordingCommand,
} from "./commands/ResumeContactRecordingCommand";
import {
  type SearchAgentStatusesCommandInput,
  type SearchAgentStatusesCommandOutput,
  SearchAgentStatusesCommand,
} from "./commands/SearchAgentStatusesCommand";
import {
  type SearchAvailablePhoneNumbersCommandInput,
  type SearchAvailablePhoneNumbersCommandOutput,
  SearchAvailablePhoneNumbersCommand,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  type SearchContactEvaluationsCommandInput,
  type SearchContactEvaluationsCommandOutput,
  SearchContactEvaluationsCommand,
} from "./commands/SearchContactEvaluationsCommand";
import {
  type SearchContactFlowModulesCommandInput,
  type SearchContactFlowModulesCommandOutput,
  SearchContactFlowModulesCommand,
} from "./commands/SearchContactFlowModulesCommand";
import {
  type SearchContactFlowsCommandInput,
  type SearchContactFlowsCommandOutput,
  SearchContactFlowsCommand,
} from "./commands/SearchContactFlowsCommand";
import {
  type SearchContactsCommandInput,
  type SearchContactsCommandOutput,
  SearchContactsCommand,
} from "./commands/SearchContactsCommand";
import {
  type SearchDataTablesCommandInput,
  type SearchDataTablesCommandOutput,
  SearchDataTablesCommand,
} from "./commands/SearchDataTablesCommand";
import {
  type SearchEmailAddressesCommandInput,
  type SearchEmailAddressesCommandOutput,
  SearchEmailAddressesCommand,
} from "./commands/SearchEmailAddressesCommand";
import {
  type SearchEvaluationFormsCommandInput,
  type SearchEvaluationFormsCommandOutput,
  SearchEvaluationFormsCommand,
} from "./commands/SearchEvaluationFormsCommand";
import {
  type SearchHoursOfOperationOverridesCommandInput,
  type SearchHoursOfOperationOverridesCommandOutput,
  SearchHoursOfOperationOverridesCommand,
} from "./commands/SearchHoursOfOperationOverridesCommand";
import {
  type SearchHoursOfOperationsCommandInput,
  type SearchHoursOfOperationsCommandOutput,
  SearchHoursOfOperationsCommand,
} from "./commands/SearchHoursOfOperationsCommand";
import {
  type SearchNotificationsCommandInput,
  type SearchNotificationsCommandOutput,
  SearchNotificationsCommand,
} from "./commands/SearchNotificationsCommand";
import {
  type SearchPredefinedAttributesCommandInput,
  type SearchPredefinedAttributesCommandOutput,
  SearchPredefinedAttributesCommand,
} from "./commands/SearchPredefinedAttributesCommand";
import {
  type SearchPromptsCommandInput,
  type SearchPromptsCommandOutput,
  SearchPromptsCommand,
} from "./commands/SearchPromptsCommand";
import {
  type SearchQueuesCommandInput,
  type SearchQueuesCommandOutput,
  SearchQueuesCommand,
} from "./commands/SearchQueuesCommand";
import {
  type SearchQuickConnectsCommandInput,
  type SearchQuickConnectsCommandOutput,
  SearchQuickConnectsCommand,
} from "./commands/SearchQuickConnectsCommand";
import {
  type SearchResourceTagsCommandInput,
  type SearchResourceTagsCommandOutput,
  SearchResourceTagsCommand,
} from "./commands/SearchResourceTagsCommand";
import {
  type SearchRoutingProfilesCommandInput,
  type SearchRoutingProfilesCommandOutput,
  SearchRoutingProfilesCommand,
} from "./commands/SearchRoutingProfilesCommand";
import {
  type SearchSecurityProfilesCommandInput,
  type SearchSecurityProfilesCommandOutput,
  SearchSecurityProfilesCommand,
} from "./commands/SearchSecurityProfilesCommand";
import {
  type SearchTestCasesCommandInput,
  type SearchTestCasesCommandOutput,
  SearchTestCasesCommand,
} from "./commands/SearchTestCasesCommand";
import {
  type SearchUserHierarchyGroupsCommandInput,
  type SearchUserHierarchyGroupsCommandOutput,
  SearchUserHierarchyGroupsCommand,
} from "./commands/SearchUserHierarchyGroupsCommand";
import {
  type SearchUsersCommandInput,
  type SearchUsersCommandOutput,
  SearchUsersCommand,
} from "./commands/SearchUsersCommand";
import {
  type SearchViewsCommandInput,
  type SearchViewsCommandOutput,
  SearchViewsCommand,
} from "./commands/SearchViewsCommand";
import {
  type SearchVocabulariesCommandInput,
  type SearchVocabulariesCommandOutput,
  SearchVocabulariesCommand,
} from "./commands/SearchVocabulariesCommand";
import {
  type SearchWorkspaceAssociationsCommandInput,
  type SearchWorkspaceAssociationsCommandOutput,
  SearchWorkspaceAssociationsCommand,
} from "./commands/SearchWorkspaceAssociationsCommand";
import {
  type SearchWorkspacesCommandInput,
  type SearchWorkspacesCommandOutput,
  SearchWorkspacesCommand,
} from "./commands/SearchWorkspacesCommand";
import {
  type SendChatIntegrationEventCommandInput,
  type SendChatIntegrationEventCommandOutput,
  SendChatIntegrationEventCommand,
} from "./commands/SendChatIntegrationEventCommand";
import {
  type SendOutboundEmailCommandInput,
  type SendOutboundEmailCommandOutput,
  SendOutboundEmailCommand,
} from "./commands/SendOutboundEmailCommand";
import {
  type StartAttachedFileUploadCommandInput,
  type StartAttachedFileUploadCommandOutput,
  StartAttachedFileUploadCommand,
} from "./commands/StartAttachedFileUploadCommand";
import {
  type StartChatContactCommandInput,
  type StartChatContactCommandOutput,
  StartChatContactCommand,
} from "./commands/StartChatContactCommand";
import {
  type StartContactEvaluationCommandInput,
  type StartContactEvaluationCommandOutput,
  StartContactEvaluationCommand,
} from "./commands/StartContactEvaluationCommand";
import {
  type StartContactMediaProcessingCommandInput,
  type StartContactMediaProcessingCommandOutput,
  StartContactMediaProcessingCommand,
} from "./commands/StartContactMediaProcessingCommand";
import {
  type StartContactRecordingCommandInput,
  type StartContactRecordingCommandOutput,
  StartContactRecordingCommand,
} from "./commands/StartContactRecordingCommand";
import {
  type StartContactStreamingCommandInput,
  type StartContactStreamingCommandOutput,
  StartContactStreamingCommand,
} from "./commands/StartContactStreamingCommand";
import {
  type StartEmailContactCommandInput,
  type StartEmailContactCommandOutput,
  StartEmailContactCommand,
} from "./commands/StartEmailContactCommand";
import {
  type StartOutboundChatContactCommandInput,
  type StartOutboundChatContactCommandOutput,
  StartOutboundChatContactCommand,
} from "./commands/StartOutboundChatContactCommand";
import {
  type StartOutboundEmailContactCommandInput,
  type StartOutboundEmailContactCommandOutput,
  StartOutboundEmailContactCommand,
} from "./commands/StartOutboundEmailContactCommand";
import {
  type StartOutboundVoiceContactCommandInput,
  type StartOutboundVoiceContactCommandOutput,
  StartOutboundVoiceContactCommand,
} from "./commands/StartOutboundVoiceContactCommand";
import {
  type StartScreenSharingCommandInput,
  type StartScreenSharingCommandOutput,
  StartScreenSharingCommand,
} from "./commands/StartScreenSharingCommand";
import {
  type StartTaskContactCommandInput,
  type StartTaskContactCommandOutput,
  StartTaskContactCommand,
} from "./commands/StartTaskContactCommand";
import {
  type StartTestCaseExecutionCommandInput,
  type StartTestCaseExecutionCommandOutput,
  StartTestCaseExecutionCommand,
} from "./commands/StartTestCaseExecutionCommand";
import {
  type StartWebRTCContactCommandInput,
  type StartWebRTCContactCommandOutput,
  StartWebRTCContactCommand,
} from "./commands/StartWebRTCContactCommand";
import {
  type StopContactCommandInput,
  type StopContactCommandOutput,
  StopContactCommand,
} from "./commands/StopContactCommand";
import {
  type StopContactMediaProcessingCommandInput,
  type StopContactMediaProcessingCommandOutput,
  StopContactMediaProcessingCommand,
} from "./commands/StopContactMediaProcessingCommand";
import {
  type StopContactRecordingCommandInput,
  type StopContactRecordingCommandOutput,
  StopContactRecordingCommand,
} from "./commands/StopContactRecordingCommand";
import {
  type StopContactStreamingCommandInput,
  type StopContactStreamingCommandOutput,
  StopContactStreamingCommand,
} from "./commands/StopContactStreamingCommand";
import {
  type StopTestCaseExecutionCommandInput,
  type StopTestCaseExecutionCommandOutput,
  StopTestCaseExecutionCommand,
} from "./commands/StopTestCaseExecutionCommand";
import {
  type SubmitContactEvaluationCommandInput,
  type SubmitContactEvaluationCommandOutput,
  SubmitContactEvaluationCommand,
} from "./commands/SubmitContactEvaluationCommand";
import {
  type SuspendContactRecordingCommandInput,
  type SuspendContactRecordingCommandOutput,
  SuspendContactRecordingCommand,
} from "./commands/SuspendContactRecordingCommand";
import {
  type TagContactCommandInput,
  type TagContactCommandOutput,
  TagContactCommand,
} from "./commands/TagContactCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TransferContactCommandInput,
  type TransferContactCommandOutput,
  TransferContactCommand,
} from "./commands/TransferContactCommand";
import {
  type UntagContactCommandInput,
  type UntagContactCommandOutput,
  UntagContactCommand,
} from "./commands/UntagContactCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAgentStatusCommandInput,
  type UpdateAgentStatusCommandOutput,
  UpdateAgentStatusCommand,
} from "./commands/UpdateAgentStatusCommand";
import {
  type UpdateAuthenticationProfileCommandInput,
  type UpdateAuthenticationProfileCommandOutput,
  UpdateAuthenticationProfileCommand,
} from "./commands/UpdateAuthenticationProfileCommand";
import {
  type UpdateContactAttributesCommandInput,
  type UpdateContactAttributesCommandOutput,
  UpdateContactAttributesCommand,
} from "./commands/UpdateContactAttributesCommand";
import {
  type UpdateContactCommandInput,
  type UpdateContactCommandOutput,
  UpdateContactCommand,
} from "./commands/UpdateContactCommand";
import {
  type UpdateContactEvaluationCommandInput,
  type UpdateContactEvaluationCommandOutput,
  UpdateContactEvaluationCommand,
} from "./commands/UpdateContactEvaluationCommand";
import {
  type UpdateContactFlowContentCommandInput,
  type UpdateContactFlowContentCommandOutput,
  UpdateContactFlowContentCommand,
} from "./commands/UpdateContactFlowContentCommand";
import {
  type UpdateContactFlowMetadataCommandInput,
  type UpdateContactFlowMetadataCommandOutput,
  UpdateContactFlowMetadataCommand,
} from "./commands/UpdateContactFlowMetadataCommand";
import {
  type UpdateContactFlowModuleAliasCommandInput,
  type UpdateContactFlowModuleAliasCommandOutput,
  UpdateContactFlowModuleAliasCommand,
} from "./commands/UpdateContactFlowModuleAliasCommand";
import {
  type UpdateContactFlowModuleContentCommandInput,
  type UpdateContactFlowModuleContentCommandOutput,
  UpdateContactFlowModuleContentCommand,
} from "./commands/UpdateContactFlowModuleContentCommand";
import {
  type UpdateContactFlowModuleMetadataCommandInput,
  type UpdateContactFlowModuleMetadataCommandOutput,
  UpdateContactFlowModuleMetadataCommand,
} from "./commands/UpdateContactFlowModuleMetadataCommand";
import {
  type UpdateContactFlowNameCommandInput,
  type UpdateContactFlowNameCommandOutput,
  UpdateContactFlowNameCommand,
} from "./commands/UpdateContactFlowNameCommand";
import {
  type UpdateContactRoutingDataCommandInput,
  type UpdateContactRoutingDataCommandOutput,
  UpdateContactRoutingDataCommand,
} from "./commands/UpdateContactRoutingDataCommand";
import {
  type UpdateContactScheduleCommandInput,
  type UpdateContactScheduleCommandOutput,
  UpdateContactScheduleCommand,
} from "./commands/UpdateContactScheduleCommand";
import {
  type UpdateDataTableAttributeCommandInput,
  type UpdateDataTableAttributeCommandOutput,
  UpdateDataTableAttributeCommand,
} from "./commands/UpdateDataTableAttributeCommand";
import {
  type UpdateDataTableMetadataCommandInput,
  type UpdateDataTableMetadataCommandOutput,
  UpdateDataTableMetadataCommand,
} from "./commands/UpdateDataTableMetadataCommand";
import {
  type UpdateDataTablePrimaryValuesCommandInput,
  type UpdateDataTablePrimaryValuesCommandOutput,
  UpdateDataTablePrimaryValuesCommand,
} from "./commands/UpdateDataTablePrimaryValuesCommand";
import {
  type UpdateEmailAddressMetadataCommandInput,
  type UpdateEmailAddressMetadataCommandOutput,
  UpdateEmailAddressMetadataCommand,
} from "./commands/UpdateEmailAddressMetadataCommand";
import {
  type UpdateEvaluationFormCommandInput,
  type UpdateEvaluationFormCommandOutput,
  UpdateEvaluationFormCommand,
} from "./commands/UpdateEvaluationFormCommand";
import {
  type UpdateHoursOfOperationCommandInput,
  type UpdateHoursOfOperationCommandOutput,
  UpdateHoursOfOperationCommand,
} from "./commands/UpdateHoursOfOperationCommand";
import {
  type UpdateHoursOfOperationOverrideCommandInput,
  type UpdateHoursOfOperationOverrideCommandOutput,
  UpdateHoursOfOperationOverrideCommand,
} from "./commands/UpdateHoursOfOperationOverrideCommand";
import {
  type UpdateInstanceAttributeCommandInput,
  type UpdateInstanceAttributeCommandOutput,
  UpdateInstanceAttributeCommand,
} from "./commands/UpdateInstanceAttributeCommand";
import {
  type UpdateInstanceStorageConfigCommandInput,
  type UpdateInstanceStorageConfigCommandOutput,
  UpdateInstanceStorageConfigCommand,
} from "./commands/UpdateInstanceStorageConfigCommand";
import {
  type UpdateNotificationContentCommandInput,
  type UpdateNotificationContentCommandOutput,
  UpdateNotificationContentCommand,
} from "./commands/UpdateNotificationContentCommand";
import {
  type UpdateParticipantAuthenticationCommandInput,
  type UpdateParticipantAuthenticationCommandOutput,
  UpdateParticipantAuthenticationCommand,
} from "./commands/UpdateParticipantAuthenticationCommand";
import {
  type UpdateParticipantRoleConfigCommandInput,
  type UpdateParticipantRoleConfigCommandOutput,
  UpdateParticipantRoleConfigCommand,
} from "./commands/UpdateParticipantRoleConfigCommand";
import {
  type UpdatePhoneNumberCommandInput,
  type UpdatePhoneNumberCommandOutput,
  UpdatePhoneNumberCommand,
} from "./commands/UpdatePhoneNumberCommand";
import {
  type UpdatePhoneNumberMetadataCommandInput,
  type UpdatePhoneNumberMetadataCommandOutput,
  UpdatePhoneNumberMetadataCommand,
} from "./commands/UpdatePhoneNumberMetadataCommand";
import {
  type UpdatePredefinedAttributeCommandInput,
  type UpdatePredefinedAttributeCommandOutput,
  UpdatePredefinedAttributeCommand,
} from "./commands/UpdatePredefinedAttributeCommand";
import {
  type UpdatePromptCommandInput,
  type UpdatePromptCommandOutput,
  UpdatePromptCommand,
} from "./commands/UpdatePromptCommand";
import {
  type UpdateQueueHoursOfOperationCommandInput,
  type UpdateQueueHoursOfOperationCommandOutput,
  UpdateQueueHoursOfOperationCommand,
} from "./commands/UpdateQueueHoursOfOperationCommand";
import {
  type UpdateQueueMaxContactsCommandInput,
  type UpdateQueueMaxContactsCommandOutput,
  UpdateQueueMaxContactsCommand,
} from "./commands/UpdateQueueMaxContactsCommand";
import {
  type UpdateQueueNameCommandInput,
  type UpdateQueueNameCommandOutput,
  UpdateQueueNameCommand,
} from "./commands/UpdateQueueNameCommand";
import {
  type UpdateQueueOutboundCallerConfigCommandInput,
  type UpdateQueueOutboundCallerConfigCommandOutput,
  UpdateQueueOutboundCallerConfigCommand,
} from "./commands/UpdateQueueOutboundCallerConfigCommand";
import {
  type UpdateQueueOutboundEmailConfigCommandInput,
  type UpdateQueueOutboundEmailConfigCommandOutput,
  UpdateQueueOutboundEmailConfigCommand,
} from "./commands/UpdateQueueOutboundEmailConfigCommand";
import {
  type UpdateQueueStatusCommandInput,
  type UpdateQueueStatusCommandOutput,
  UpdateQueueStatusCommand,
} from "./commands/UpdateQueueStatusCommand";
import {
  type UpdateQuickConnectConfigCommandInput,
  type UpdateQuickConnectConfigCommandOutput,
  UpdateQuickConnectConfigCommand,
} from "./commands/UpdateQuickConnectConfigCommand";
import {
  type UpdateQuickConnectNameCommandInput,
  type UpdateQuickConnectNameCommandOutput,
  UpdateQuickConnectNameCommand,
} from "./commands/UpdateQuickConnectNameCommand";
import {
  type UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
  type UpdateRoutingProfileAgentAvailabilityTimerCommandOutput,
  UpdateRoutingProfileAgentAvailabilityTimerCommand,
} from "./commands/UpdateRoutingProfileAgentAvailabilityTimerCommand";
import {
  type UpdateRoutingProfileConcurrencyCommandInput,
  type UpdateRoutingProfileConcurrencyCommandOutput,
  UpdateRoutingProfileConcurrencyCommand,
} from "./commands/UpdateRoutingProfileConcurrencyCommand";
import {
  type UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  type UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
  UpdateRoutingProfileDefaultOutboundQueueCommand,
} from "./commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import {
  type UpdateRoutingProfileNameCommandInput,
  type UpdateRoutingProfileNameCommandOutput,
  UpdateRoutingProfileNameCommand,
} from "./commands/UpdateRoutingProfileNameCommand";
import {
  type UpdateRoutingProfileQueuesCommandInput,
  type UpdateRoutingProfileQueuesCommandOutput,
  UpdateRoutingProfileQueuesCommand,
} from "./commands/UpdateRoutingProfileQueuesCommand";
import {
  type UpdateRuleCommandInput,
  type UpdateRuleCommandOutput,
  UpdateRuleCommand,
} from "./commands/UpdateRuleCommand";
import {
  type UpdateSecurityProfileCommandInput,
  type UpdateSecurityProfileCommandOutput,
  UpdateSecurityProfileCommand,
} from "./commands/UpdateSecurityProfileCommand";
import {
  type UpdateTaskTemplateCommandInput,
  type UpdateTaskTemplateCommandOutput,
  UpdateTaskTemplateCommand,
} from "./commands/UpdateTaskTemplateCommand";
import {
  type UpdateTestCaseCommandInput,
  type UpdateTestCaseCommandOutput,
  UpdateTestCaseCommand,
} from "./commands/UpdateTestCaseCommand";
import {
  type UpdateTrafficDistributionCommandInput,
  type UpdateTrafficDistributionCommandOutput,
  UpdateTrafficDistributionCommand,
} from "./commands/UpdateTrafficDistributionCommand";
import {
  type UpdateUserConfigCommandInput,
  type UpdateUserConfigCommandOutput,
  UpdateUserConfigCommand,
} from "./commands/UpdateUserConfigCommand";
import {
  type UpdateUserHierarchyCommandInput,
  type UpdateUserHierarchyCommandOutput,
  UpdateUserHierarchyCommand,
} from "./commands/UpdateUserHierarchyCommand";
import {
  type UpdateUserHierarchyGroupNameCommandInput,
  type UpdateUserHierarchyGroupNameCommandOutput,
  UpdateUserHierarchyGroupNameCommand,
} from "./commands/UpdateUserHierarchyGroupNameCommand";
import {
  type UpdateUserHierarchyStructureCommandInput,
  type UpdateUserHierarchyStructureCommandOutput,
  UpdateUserHierarchyStructureCommand,
} from "./commands/UpdateUserHierarchyStructureCommand";
import {
  type UpdateUserIdentityInfoCommandInput,
  type UpdateUserIdentityInfoCommandOutput,
  UpdateUserIdentityInfoCommand,
} from "./commands/UpdateUserIdentityInfoCommand";
import {
  type UpdateUserNotificationStatusCommandInput,
  type UpdateUserNotificationStatusCommandOutput,
  UpdateUserNotificationStatusCommand,
} from "./commands/UpdateUserNotificationStatusCommand";
import {
  type UpdateUserPhoneConfigCommandInput,
  type UpdateUserPhoneConfigCommandOutput,
  UpdateUserPhoneConfigCommand,
} from "./commands/UpdateUserPhoneConfigCommand";
import {
  type UpdateUserProficienciesCommandInput,
  type UpdateUserProficienciesCommandOutput,
  UpdateUserProficienciesCommand,
} from "./commands/UpdateUserProficienciesCommand";
import {
  type UpdateUserRoutingProfileCommandInput,
  type UpdateUserRoutingProfileCommandOutput,
  UpdateUserRoutingProfileCommand,
} from "./commands/UpdateUserRoutingProfileCommand";
import {
  type UpdateUserSecurityProfilesCommandInput,
  type UpdateUserSecurityProfilesCommandOutput,
  UpdateUserSecurityProfilesCommand,
} from "./commands/UpdateUserSecurityProfilesCommand";
import {
  type UpdateViewContentCommandInput,
  type UpdateViewContentCommandOutput,
  UpdateViewContentCommand,
} from "./commands/UpdateViewContentCommand";
import {
  type UpdateViewMetadataCommandInput,
  type UpdateViewMetadataCommandOutput,
  UpdateViewMetadataCommand,
} from "./commands/UpdateViewMetadataCommand";
import {
  type UpdateWorkspaceMetadataCommandInput,
  type UpdateWorkspaceMetadataCommandOutput,
  UpdateWorkspaceMetadataCommand,
} from "./commands/UpdateWorkspaceMetadataCommand";
import {
  type UpdateWorkspacePageCommandInput,
  type UpdateWorkspacePageCommandOutput,
  UpdateWorkspacePageCommand,
} from "./commands/UpdateWorkspacePageCommand";
import {
  type UpdateWorkspaceThemeCommandInput,
  type UpdateWorkspaceThemeCommandOutput,
  UpdateWorkspaceThemeCommand,
} from "./commands/UpdateWorkspaceThemeCommand";
import {
  type UpdateWorkspaceVisibilityCommandInput,
  type UpdateWorkspaceVisibilityCommandOutput,
  UpdateWorkspaceVisibilityCommand,
} from "./commands/UpdateWorkspaceVisibilityCommand";
import { ConnectClient } from "./ConnectClient";
import { paginateEvaluateDataTableValues } from "./pagination/EvaluateDataTableValuesPaginator";
import { paginateGetCurrentMetricData } from "./pagination/GetCurrentMetricDataPaginator";
import { paginateGetCurrentUserData } from "./pagination/GetCurrentUserDataPaginator";
import { paginateGetMetricData } from "./pagination/GetMetricDataPaginator";
import { paginateGetMetricDataV2 } from "./pagination/GetMetricDataV2Paginator";
import { paginateListAgentStatuses } from "./pagination/ListAgentStatusesPaginator";
import { paginateListApprovedOrigins } from "./pagination/ListApprovedOriginsPaginator";
import { paginateListAuthenticationProfiles } from "./pagination/ListAuthenticationProfilesPaginator";
import { paginateListBots } from "./pagination/ListBotsPaginator";
import { paginateListChildHoursOfOperations } from "./pagination/ListChildHoursOfOperationsPaginator";
import { paginateListContactEvaluations } from "./pagination/ListContactEvaluationsPaginator";
import { paginateListContactFlowModuleAliases } from "./pagination/ListContactFlowModuleAliasesPaginator";
import { paginateListContactFlowModules } from "./pagination/ListContactFlowModulesPaginator";
import { paginateListContactFlowModuleVersions } from "./pagination/ListContactFlowModuleVersionsPaginator";
import { paginateListContactFlows } from "./pagination/ListContactFlowsPaginator";
import { paginateListContactFlowVersions } from "./pagination/ListContactFlowVersionsPaginator";
import { paginateListContactReferences } from "./pagination/ListContactReferencesPaginator";
import { paginateListDataTableAttributes } from "./pagination/ListDataTableAttributesPaginator";
import { paginateListDataTablePrimaryValues } from "./pagination/ListDataTablePrimaryValuesPaginator";
import { paginateListDataTables } from "./pagination/ListDataTablesPaginator";
import { paginateListDataTableValues } from "./pagination/ListDataTableValuesPaginator";
import { paginateListDefaultVocabularies } from "./pagination/ListDefaultVocabulariesPaginator";
import { paginateListEntitySecurityProfiles } from "./pagination/ListEntitySecurityProfilesPaginator";
import { paginateListEvaluationForms } from "./pagination/ListEvaluationFormsPaginator";
import { paginateListEvaluationFormVersions } from "./pagination/ListEvaluationFormVersionsPaginator";
import { paginateListFlowAssociations } from "./pagination/ListFlowAssociationsPaginator";
import { paginateListHoursOfOperationOverrides } from "./pagination/ListHoursOfOperationOverridesPaginator";
import { paginateListHoursOfOperations } from "./pagination/ListHoursOfOperationsPaginator";
import { paginateListInstanceAttributes } from "./pagination/ListInstanceAttributesPaginator";
import { paginateListInstances } from "./pagination/ListInstancesPaginator";
import { paginateListInstanceStorageConfigs } from "./pagination/ListInstanceStorageConfigsPaginator";
import { paginateListIntegrationAssociations } from "./pagination/ListIntegrationAssociationsPaginator";
import { paginateListLambdaFunctions } from "./pagination/ListLambdaFunctionsPaginator";
import { paginateListLexBots } from "./pagination/ListLexBotsPaginator";
import { paginateListPhoneNumbers } from "./pagination/ListPhoneNumbersPaginator";
import { paginateListPhoneNumbersV2 } from "./pagination/ListPhoneNumbersV2Paginator";
import { paginateListPredefinedAttributes } from "./pagination/ListPredefinedAttributesPaginator";
import { paginateListPrompts } from "./pagination/ListPromptsPaginator";
import { paginateListQueueQuickConnects } from "./pagination/ListQueueQuickConnectsPaginator";
import { paginateListQueues } from "./pagination/ListQueuesPaginator";
import { paginateListQuickConnects } from "./pagination/ListQuickConnectsPaginator";
import {
  paginateListRealtimeContactAnalysisSegmentsV2,
} from "./pagination/ListRealtimeContactAnalysisSegmentsV2Paginator";
import {
  paginateListRoutingProfileManualAssignmentQueues,
} from "./pagination/ListRoutingProfileManualAssignmentQueuesPaginator";
import { paginateListRoutingProfileQueues } from "./pagination/ListRoutingProfileQueuesPaginator";
import { paginateListRoutingProfiles } from "./pagination/ListRoutingProfilesPaginator";
import { paginateListRules } from "./pagination/ListRulesPaginator";
import { paginateListSecurityKeys } from "./pagination/ListSecurityKeysPaginator";
import { paginateListSecurityProfileApplications } from "./pagination/ListSecurityProfileApplicationsPaginator";
import { paginateListSecurityProfileFlowModules } from "./pagination/ListSecurityProfileFlowModulesPaginator";
import { paginateListSecurityProfilePermissions } from "./pagination/ListSecurityProfilePermissionsPaginator";
import { paginateListSecurityProfiles } from "./pagination/ListSecurityProfilesPaginator";
import { paginateListTaskTemplates } from "./pagination/ListTaskTemplatesPaginator";
import { paginateListTestCases } from "./pagination/ListTestCasesPaginator";
import { paginateListTrafficDistributionGroups } from "./pagination/ListTrafficDistributionGroupsPaginator";
import { paginateListTrafficDistributionGroupUsers } from "./pagination/ListTrafficDistributionGroupUsersPaginator";
import { paginateListUseCases } from "./pagination/ListUseCasesPaginator";
import { paginateListUserHierarchyGroups } from "./pagination/ListUserHierarchyGroupsPaginator";
import { paginateListUserProficiencies } from "./pagination/ListUserProficienciesPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";
import { paginateListViews } from "./pagination/ListViewsPaginator";
import { paginateListViewVersions } from "./pagination/ListViewVersionsPaginator";
import { paginateListWorkspacePages } from "./pagination/ListWorkspacePagesPaginator";
import { paginateListWorkspaces } from "./pagination/ListWorkspacesPaginator";
import { paginateSearchAgentStatuses } from "./pagination/SearchAgentStatusesPaginator";
import { paginateSearchAvailablePhoneNumbers } from "./pagination/SearchAvailablePhoneNumbersPaginator";
import { paginateSearchContactFlowModules } from "./pagination/SearchContactFlowModulesPaginator";
import { paginateSearchContactFlows } from "./pagination/SearchContactFlowsPaginator";
import { paginateSearchContacts } from "./pagination/SearchContactsPaginator";
import { paginateSearchDataTables } from "./pagination/SearchDataTablesPaginator";
import { paginateSearchHoursOfOperationOverrides } from "./pagination/SearchHoursOfOperationOverridesPaginator";
import { paginateSearchHoursOfOperations } from "./pagination/SearchHoursOfOperationsPaginator";
import { paginateSearchPredefinedAttributes } from "./pagination/SearchPredefinedAttributesPaginator";
import { paginateSearchPrompts } from "./pagination/SearchPromptsPaginator";
import { paginateSearchQueues } from "./pagination/SearchQueuesPaginator";
import { paginateSearchQuickConnects } from "./pagination/SearchQuickConnectsPaginator";
import { paginateSearchResourceTags } from "./pagination/SearchResourceTagsPaginator";
import { paginateSearchRoutingProfiles } from "./pagination/SearchRoutingProfilesPaginator";
import { paginateSearchSecurityProfiles } from "./pagination/SearchSecurityProfilesPaginator";
import { paginateSearchTestCases } from "./pagination/SearchTestCasesPaginator";
import { paginateSearchUserHierarchyGroups } from "./pagination/SearchUserHierarchyGroupsPaginator";
import { paginateSearchUsers } from "./pagination/SearchUsersPaginator";
import { paginateSearchViews } from "./pagination/SearchViewsPaginator";
import { paginateSearchVocabularies } from "./pagination/SearchVocabulariesPaginator";
import { paginateSearchWorkspaceAssociations } from "./pagination/SearchWorkspaceAssociationsPaginator";
import { paginateSearchWorkspaces } from "./pagination/SearchWorkspacesPaginator";

const commands = {
  ActivateEvaluationFormCommand,
  AssociateAnalyticsDataSetCommand,
  AssociateApprovedOriginCommand,
  AssociateBotCommand,
  AssociateContactWithUserCommand,
  AssociateDefaultVocabularyCommand,
  AssociateEmailAddressAliasCommand,
  AssociateFlowCommand,
  AssociateHoursOfOperationsCommand,
  AssociateInstanceStorageConfigCommand,
  AssociateLambdaFunctionCommand,
  AssociateLexBotCommand,
  AssociatePhoneNumberContactFlowCommand,
  AssociateQueueEmailAddressesCommand,
  AssociateQueueQuickConnectsCommand,
  AssociateRoutingProfileQueuesCommand,
  AssociateSecurityKeyCommand,
  AssociateSecurityProfilesCommand,
  AssociateTrafficDistributionGroupUserCommand,
  AssociateUserProficienciesCommand,
  AssociateWorkspaceCommand,
  BatchAssociateAnalyticsDataSetCommand,
  BatchCreateDataTableValueCommand,
  BatchDeleteDataTableValueCommand,
  BatchDescribeDataTableValueCommand,
  BatchDisassociateAnalyticsDataSetCommand,
  BatchGetAttachedFileMetadataCommand,
  BatchGetFlowAssociationCommand,
  BatchPutContactCommand,
  BatchUpdateDataTableValueCommand,
  ClaimPhoneNumberCommand,
  CompleteAttachedFileUploadCommand,
  CreateAgentStatusCommand,
  CreateContactCommand,
  CreateContactFlowCommand,
  CreateContactFlowModuleCommand,
  CreateContactFlowModuleAliasCommand,
  CreateContactFlowModuleVersionCommand,
  CreateContactFlowVersionCommand,
  CreateDataTableCommand,
  CreateDataTableAttributeCommand,
  CreateEmailAddressCommand,
  CreateEvaluationFormCommand,
  CreateHoursOfOperationCommand,
  CreateHoursOfOperationOverrideCommand,
  CreateInstanceCommand,
  CreateIntegrationAssociationCommand,
  CreateNotificationCommand,
  CreateParticipantCommand,
  CreatePersistentContactAssociationCommand,
  CreatePredefinedAttributeCommand,
  CreatePromptCommand,
  CreatePushNotificationRegistrationCommand,
  CreateQueueCommand,
  CreateQuickConnectCommand,
  CreateRoutingProfileCommand,
  CreateRuleCommand,
  CreateSecurityProfileCommand,
  CreateTaskTemplateCommand,
  CreateTestCaseCommand,
  CreateTrafficDistributionGroupCommand,
  CreateUseCaseCommand,
  CreateUserCommand,
  CreateUserHierarchyGroupCommand,
  CreateViewCommand,
  CreateViewVersionCommand,
  CreateVocabularyCommand,
  CreateWorkspaceCommand,
  CreateWorkspacePageCommand,
  DeactivateEvaluationFormCommand,
  DeleteAttachedFileCommand,
  DeleteContactEvaluationCommand,
  DeleteContactFlowCommand,
  DeleteContactFlowModuleCommand,
  DeleteContactFlowModuleAliasCommand,
  DeleteContactFlowModuleVersionCommand,
  DeleteContactFlowVersionCommand,
  DeleteDataTableCommand,
  DeleteDataTableAttributeCommand,
  DeleteEmailAddressCommand,
  DeleteEvaluationFormCommand,
  DeleteHoursOfOperationCommand,
  DeleteHoursOfOperationOverrideCommand,
  DeleteInstanceCommand,
  DeleteIntegrationAssociationCommand,
  DeleteNotificationCommand,
  DeletePredefinedAttributeCommand,
  DeletePromptCommand,
  DeletePushNotificationRegistrationCommand,
  DeleteQueueCommand,
  DeleteQuickConnectCommand,
  DeleteRoutingProfileCommand,
  DeleteRuleCommand,
  DeleteSecurityProfileCommand,
  DeleteTaskTemplateCommand,
  DeleteTestCaseCommand,
  DeleteTrafficDistributionGroupCommand,
  DeleteUseCaseCommand,
  DeleteUserCommand,
  DeleteUserHierarchyGroupCommand,
  DeleteViewCommand,
  DeleteViewVersionCommand,
  DeleteVocabularyCommand,
  DeleteWorkspaceCommand,
  DeleteWorkspaceMediaCommand,
  DeleteWorkspacePageCommand,
  DescribeAgentStatusCommand,
  DescribeAuthenticationProfileCommand,
  DescribeContactCommand,
  DescribeContactEvaluationCommand,
  DescribeContactFlowCommand,
  DescribeContactFlowModuleCommand,
  DescribeContactFlowModuleAliasCommand,
  DescribeDataTableCommand,
  DescribeDataTableAttributeCommand,
  DescribeEmailAddressCommand,
  DescribeEvaluationFormCommand,
  DescribeHoursOfOperationCommand,
  DescribeHoursOfOperationOverrideCommand,
  DescribeInstanceCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceStorageConfigCommand,
  DescribeNotificationCommand,
  DescribePhoneNumberCommand,
  DescribePredefinedAttributeCommand,
  DescribePromptCommand,
  DescribeQueueCommand,
  DescribeQuickConnectCommand,
  DescribeRoutingProfileCommand,
  DescribeRuleCommand,
  DescribeSecurityProfileCommand,
  DescribeTestCaseCommand,
  DescribeTrafficDistributionGroupCommand,
  DescribeUserCommand,
  DescribeUserHierarchyGroupCommand,
  DescribeUserHierarchyStructureCommand,
  DescribeViewCommand,
  DescribeVocabularyCommand,
  DescribeWorkspaceCommand,
  DisassociateAnalyticsDataSetCommand,
  DisassociateApprovedOriginCommand,
  DisassociateBotCommand,
  DisassociateEmailAddressAliasCommand,
  DisassociateFlowCommand,
  DisassociateHoursOfOperationsCommand,
  DisassociateInstanceStorageConfigCommand,
  DisassociateLambdaFunctionCommand,
  DisassociateLexBotCommand,
  DisassociatePhoneNumberContactFlowCommand,
  DisassociateQueueEmailAddressesCommand,
  DisassociateQueueQuickConnectsCommand,
  DisassociateRoutingProfileQueuesCommand,
  DisassociateSecurityKeyCommand,
  DisassociateSecurityProfilesCommand,
  DisassociateTrafficDistributionGroupUserCommand,
  DisassociateUserProficienciesCommand,
  DisassociateWorkspaceCommand,
  DismissUserContactCommand,
  EvaluateDataTableValuesCommand,
  GetAttachedFileCommand,
  GetContactAttributesCommand,
  GetContactMetricsCommand,
  GetCurrentMetricDataCommand,
  GetCurrentUserDataCommand,
  GetEffectiveHoursOfOperationsCommand,
  GetFederationTokenCommand,
  GetFlowAssociationCommand,
  GetMetricDataCommand,
  GetMetricDataV2Command,
  GetPromptFileCommand,
  GetTaskTemplateCommand,
  GetTestCaseExecutionSummaryCommand,
  GetTrafficDistributionCommand,
  ImportPhoneNumberCommand,
  ImportWorkspaceMediaCommand,
  ListAgentStatusesCommand,
  ListAnalyticsDataAssociationsCommand,
  ListAnalyticsDataLakeDataSetsCommand,
  ListApprovedOriginsCommand,
  ListAssociatedContactsCommand,
  ListAuthenticationProfilesCommand,
  ListBotsCommand,
  ListChildHoursOfOperationsCommand,
  ListContactEvaluationsCommand,
  ListContactFlowModuleAliasesCommand,
  ListContactFlowModulesCommand,
  ListContactFlowModuleVersionsCommand,
  ListContactFlowsCommand,
  ListContactFlowVersionsCommand,
  ListContactReferencesCommand,
  ListDataTableAttributesCommand,
  ListDataTablePrimaryValuesCommand,
  ListDataTablesCommand,
  ListDataTableValuesCommand,
  ListDefaultVocabulariesCommand,
  ListEntitySecurityProfilesCommand,
  ListEvaluationFormsCommand,
  ListEvaluationFormVersionsCommand,
  ListFlowAssociationsCommand,
  ListHoursOfOperationOverridesCommand,
  ListHoursOfOperationsCommand,
  ListInstanceAttributesCommand,
  ListInstancesCommand,
  ListInstanceStorageConfigsCommand,
  ListIntegrationAssociationsCommand,
  ListLambdaFunctionsCommand,
  ListLexBotsCommand,
  ListNotificationsCommand,
  ListPhoneNumbersCommand,
  ListPhoneNumbersV2Command,
  ListPredefinedAttributesCommand,
  ListPromptsCommand,
  ListQueueEmailAddressesCommand,
  ListQueueQuickConnectsCommand,
  ListQueuesCommand,
  ListQuickConnectsCommand,
  ListRealtimeContactAnalysisSegmentsV2Command,
  ListRoutingProfileManualAssignmentQueuesCommand,
  ListRoutingProfileQueuesCommand,
  ListRoutingProfilesCommand,
  ListRulesCommand,
  ListSecurityKeysCommand,
  ListSecurityProfileApplicationsCommand,
  ListSecurityProfileFlowModulesCommand,
  ListSecurityProfilePermissionsCommand,
  ListSecurityProfilesCommand,
  ListTagsForResourceCommand,
  ListTaskTemplatesCommand,
  ListTestCaseExecutionRecordsCommand,
  ListTestCaseExecutionsCommand,
  ListTestCasesCommand,
  ListTrafficDistributionGroupsCommand,
  ListTrafficDistributionGroupUsersCommand,
  ListUseCasesCommand,
  ListUserHierarchyGroupsCommand,
  ListUserNotificationsCommand,
  ListUserProficienciesCommand,
  ListUsersCommand,
  ListViewsCommand,
  ListViewVersionsCommand,
  ListWorkspaceMediaCommand,
  ListWorkspacePagesCommand,
  ListWorkspacesCommand,
  MonitorContactCommand,
  PauseContactCommand,
  PutUserStatusCommand,
  ReleasePhoneNumberCommand,
  ReplicateInstanceCommand,
  ResumeContactCommand,
  ResumeContactRecordingCommand,
  SearchAgentStatusesCommand,
  SearchAvailablePhoneNumbersCommand,
  SearchContactEvaluationsCommand,
  SearchContactFlowModulesCommand,
  SearchContactFlowsCommand,
  SearchContactsCommand,
  SearchDataTablesCommand,
  SearchEmailAddressesCommand,
  SearchEvaluationFormsCommand,
  SearchHoursOfOperationOverridesCommand,
  SearchHoursOfOperationsCommand,
  SearchNotificationsCommand,
  SearchPredefinedAttributesCommand,
  SearchPromptsCommand,
  SearchQueuesCommand,
  SearchQuickConnectsCommand,
  SearchResourceTagsCommand,
  SearchRoutingProfilesCommand,
  SearchSecurityProfilesCommand,
  SearchTestCasesCommand,
  SearchUserHierarchyGroupsCommand,
  SearchUsersCommand,
  SearchViewsCommand,
  SearchVocabulariesCommand,
  SearchWorkspaceAssociationsCommand,
  SearchWorkspacesCommand,
  SendChatIntegrationEventCommand,
  SendOutboundEmailCommand,
  StartAttachedFileUploadCommand,
  StartChatContactCommand,
  StartContactEvaluationCommand,
  StartContactMediaProcessingCommand,
  StartContactRecordingCommand,
  StartContactStreamingCommand,
  StartEmailContactCommand,
  StartOutboundChatContactCommand,
  StartOutboundEmailContactCommand,
  StartOutboundVoiceContactCommand,
  StartScreenSharingCommand,
  StartTaskContactCommand,
  StartTestCaseExecutionCommand,
  StartWebRTCContactCommand,
  StopContactCommand,
  StopContactMediaProcessingCommand,
  StopContactRecordingCommand,
  StopContactStreamingCommand,
  StopTestCaseExecutionCommand,
  SubmitContactEvaluationCommand,
  SuspendContactRecordingCommand,
  TagContactCommand,
  TagResourceCommand,
  TransferContactCommand,
  UntagContactCommand,
  UntagResourceCommand,
  UpdateAgentStatusCommand,
  UpdateAuthenticationProfileCommand,
  UpdateContactCommand,
  UpdateContactAttributesCommand,
  UpdateContactEvaluationCommand,
  UpdateContactFlowContentCommand,
  UpdateContactFlowMetadataCommand,
  UpdateContactFlowModuleAliasCommand,
  UpdateContactFlowModuleContentCommand,
  UpdateContactFlowModuleMetadataCommand,
  UpdateContactFlowNameCommand,
  UpdateContactRoutingDataCommand,
  UpdateContactScheduleCommand,
  UpdateDataTableAttributeCommand,
  UpdateDataTableMetadataCommand,
  UpdateDataTablePrimaryValuesCommand,
  UpdateEmailAddressMetadataCommand,
  UpdateEvaluationFormCommand,
  UpdateHoursOfOperationCommand,
  UpdateHoursOfOperationOverrideCommand,
  UpdateInstanceAttributeCommand,
  UpdateInstanceStorageConfigCommand,
  UpdateNotificationContentCommand,
  UpdateParticipantAuthenticationCommand,
  UpdateParticipantRoleConfigCommand,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberMetadataCommand,
  UpdatePredefinedAttributeCommand,
  UpdatePromptCommand,
  UpdateQueueHoursOfOperationCommand,
  UpdateQueueMaxContactsCommand,
  UpdateQueueNameCommand,
  UpdateQueueOutboundCallerConfigCommand,
  UpdateQueueOutboundEmailConfigCommand,
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
  UpdateTestCaseCommand,
  UpdateTrafficDistributionCommand,
  UpdateUserConfigCommand,
  UpdateUserHierarchyCommand,
  UpdateUserHierarchyGroupNameCommand,
  UpdateUserHierarchyStructureCommand,
  UpdateUserIdentityInfoCommand,
  UpdateUserNotificationStatusCommand,
  UpdateUserPhoneConfigCommand,
  UpdateUserProficienciesCommand,
  UpdateUserRoutingProfileCommand,
  UpdateUserSecurityProfilesCommand,
  UpdateViewContentCommand,
  UpdateViewMetadataCommand,
  UpdateWorkspaceMetadataCommand,
  UpdateWorkspacePageCommand,
  UpdateWorkspaceThemeCommand,
  UpdateWorkspaceVisibilityCommand,
};
const paginators = {
  paginateEvaluateDataTableValues,
  paginateGetCurrentMetricData,
  paginateGetCurrentUserData,
  paginateGetMetricData,
  paginateGetMetricDataV2,
  paginateListAgentStatuses,
  paginateListApprovedOrigins,
  paginateListAuthenticationProfiles,
  paginateListBots,
  paginateListChildHoursOfOperations,
  paginateListContactEvaluations,
  paginateListContactFlowModuleAliases,
  paginateListContactFlowModules,
  paginateListContactFlowModuleVersions,
  paginateListContactFlows,
  paginateListContactFlowVersions,
  paginateListContactReferences,
  paginateListDataTableAttributes,
  paginateListDataTablePrimaryValues,
  paginateListDataTables,
  paginateListDataTableValues,
  paginateListDefaultVocabularies,
  paginateListEntitySecurityProfiles,
  paginateListEvaluationForms,
  paginateListEvaluationFormVersions,
  paginateListFlowAssociations,
  paginateListHoursOfOperationOverrides,
  paginateListHoursOfOperations,
  paginateListInstanceAttributes,
  paginateListInstances,
  paginateListInstanceStorageConfigs,
  paginateListIntegrationAssociations,
  paginateListLambdaFunctions,
  paginateListLexBots,
  paginateListPhoneNumbers,
  paginateListPhoneNumbersV2,
  paginateListPredefinedAttributes,
  paginateListPrompts,
  paginateListQueueQuickConnects,
  paginateListQueues,
  paginateListQuickConnects,
  paginateListRealtimeContactAnalysisSegmentsV2,
  paginateListRoutingProfileManualAssignmentQueues,
  paginateListRoutingProfileQueues,
  paginateListRoutingProfiles,
  paginateListRules,
  paginateListSecurityKeys,
  paginateListSecurityProfileApplications,
  paginateListSecurityProfileFlowModules,
  paginateListSecurityProfilePermissions,
  paginateListSecurityProfiles,
  paginateListTaskTemplates,
  paginateListTestCases,
  paginateListTrafficDistributionGroups,
  paginateListTrafficDistributionGroupUsers,
  paginateListUseCases,
  paginateListUserHierarchyGroups,
  paginateListUserProficiencies,
  paginateListUsers,
  paginateListViews,
  paginateListViewVersions,
  paginateListWorkspacePages,
  paginateListWorkspaces,
  paginateSearchAgentStatuses,
  paginateSearchAvailablePhoneNumbers,
  paginateSearchContactFlowModules,
  paginateSearchContactFlows,
  paginateSearchContacts,
  paginateSearchDataTables,
  paginateSearchHoursOfOperationOverrides,
  paginateSearchHoursOfOperations,
  paginateSearchPredefinedAttributes,
  paginateSearchPrompts,
  paginateSearchQueues,
  paginateSearchQuickConnects,
  paginateSearchResourceTags,
  paginateSearchRoutingProfiles,
  paginateSearchSecurityProfiles,
  paginateSearchTestCases,
  paginateSearchUserHierarchyGroups,
  paginateSearchUsers,
  paginateSearchViews,
  paginateSearchVocabularies,
  paginateSearchWorkspaceAssociations,
  paginateSearchWorkspaces,
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
   * @see {@link AssociateAnalyticsDataSetCommand}
   */
  associateAnalyticsDataSet(
    args: AssociateAnalyticsDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAnalyticsDataSetCommandOutput>;
  associateAnalyticsDataSet(
    args: AssociateAnalyticsDataSetCommandInput,
    cb: (err: any, data?: AssociateAnalyticsDataSetCommandOutput) => void
  ): void;
  associateAnalyticsDataSet(
    args: AssociateAnalyticsDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAnalyticsDataSetCommandOutput) => void
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
  associateBot(
    args: AssociateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBotCommandOutput>;
  associateBot(
    args: AssociateBotCommandInput,
    cb: (err: any, data?: AssociateBotCommandOutput) => void
  ): void;
  associateBot(
    args: AssociateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateContactWithUserCommand}
   */
  associateContactWithUser(
    args: AssociateContactWithUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateContactWithUserCommandOutput>;
  associateContactWithUser(
    args: AssociateContactWithUserCommandInput,
    cb: (err: any, data?: AssociateContactWithUserCommandOutput) => void
  ): void;
  associateContactWithUser(
    args: AssociateContactWithUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateContactWithUserCommandOutput) => void
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
   * @see {@link AssociateEmailAddressAliasCommand}
   */
  associateEmailAddressAlias(
    args: AssociateEmailAddressAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEmailAddressAliasCommandOutput>;
  associateEmailAddressAlias(
    args: AssociateEmailAddressAliasCommandInput,
    cb: (err: any, data?: AssociateEmailAddressAliasCommandOutput) => void
  ): void;
  associateEmailAddressAlias(
    args: AssociateEmailAddressAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEmailAddressAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateFlowCommand}
   */
  associateFlow(
    args: AssociateFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFlowCommandOutput>;
  associateFlow(
    args: AssociateFlowCommandInput,
    cb: (err: any, data?: AssociateFlowCommandOutput) => void
  ): void;
  associateFlow(
    args: AssociateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateHoursOfOperationsCommand}
   */
  associateHoursOfOperations(
    args: AssociateHoursOfOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateHoursOfOperationsCommandOutput>;
  associateHoursOfOperations(
    args: AssociateHoursOfOperationsCommandInput,
    cb: (err: any, data?: AssociateHoursOfOperationsCommandOutput) => void
  ): void;
  associateHoursOfOperations(
    args: AssociateHoursOfOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateHoursOfOperationsCommandOutput) => void
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
  associateLexBot(
    args: AssociateLexBotCommandInput,
    cb: (err: any, data?: AssociateLexBotCommandOutput) => void
  ): void;
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
   * @see {@link AssociateQueueEmailAddressesCommand}
   */
  associateQueueEmailAddresses(
    args: AssociateQueueEmailAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateQueueEmailAddressesCommandOutput>;
  associateQueueEmailAddresses(
    args: AssociateQueueEmailAddressesCommandInput,
    cb: (err: any, data?: AssociateQueueEmailAddressesCommandOutput) => void
  ): void;
  associateQueueEmailAddresses(
    args: AssociateQueueEmailAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateQueueEmailAddressesCommandOutput) => void
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
   * @see {@link AssociateSecurityProfilesCommand}
   */
  associateSecurityProfiles(
    args: AssociateSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSecurityProfilesCommandOutput>;
  associateSecurityProfiles(
    args: AssociateSecurityProfilesCommandInput,
    cb: (err: any, data?: AssociateSecurityProfilesCommandOutput) => void
  ): void;
  associateSecurityProfiles(
    args: AssociateSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSecurityProfilesCommandOutput) => void
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
   * @see {@link AssociateUserProficienciesCommand}
   */
  associateUserProficiencies(
    args: AssociateUserProficienciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserProficienciesCommandOutput>;
  associateUserProficiencies(
    args: AssociateUserProficienciesCommandInput,
    cb: (err: any, data?: AssociateUserProficienciesCommandOutput) => void
  ): void;
  associateUserProficiencies(
    args: AssociateUserProficienciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserProficienciesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWorkspaceCommand}
   */
  associateWorkspace(
    args: AssociateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWorkspaceCommandOutput>;
  associateWorkspace(
    args: AssociateWorkspaceCommandInput,
    cb: (err: any, data?: AssociateWorkspaceCommandOutput) => void
  ): void;
  associateWorkspace(
    args: AssociateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateAnalyticsDataSetCommand}
   */
  batchAssociateAnalyticsDataSet(
    args: BatchAssociateAnalyticsDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateAnalyticsDataSetCommandOutput>;
  batchAssociateAnalyticsDataSet(
    args: BatchAssociateAnalyticsDataSetCommandInput,
    cb: (err: any, data?: BatchAssociateAnalyticsDataSetCommandOutput) => void
  ): void;
  batchAssociateAnalyticsDataSet(
    args: BatchAssociateAnalyticsDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateAnalyticsDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateDataTableValueCommand}
   */
  batchCreateDataTableValue(
    args: BatchCreateDataTableValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateDataTableValueCommandOutput>;
  batchCreateDataTableValue(
    args: BatchCreateDataTableValueCommandInput,
    cb: (err: any, data?: BatchCreateDataTableValueCommandOutput) => void
  ): void;
  batchCreateDataTableValue(
    args: BatchCreateDataTableValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateDataTableValueCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteDataTableValueCommand}
   */
  batchDeleteDataTableValue(
    args: BatchDeleteDataTableValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDataTableValueCommandOutput>;
  batchDeleteDataTableValue(
    args: BatchDeleteDataTableValueCommandInput,
    cb: (err: any, data?: BatchDeleteDataTableValueCommandOutput) => void
  ): void;
  batchDeleteDataTableValue(
    args: BatchDeleteDataTableValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDataTableValueCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDescribeDataTableValueCommand}
   */
  batchDescribeDataTableValue(
    args: BatchDescribeDataTableValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeDataTableValueCommandOutput>;
  batchDescribeDataTableValue(
    args: BatchDescribeDataTableValueCommandInput,
    cb: (err: any, data?: BatchDescribeDataTableValueCommandOutput) => void
  ): void;
  batchDescribeDataTableValue(
    args: BatchDescribeDataTableValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeDataTableValueCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateAnalyticsDataSetCommand}
   */
  batchDisassociateAnalyticsDataSet(
    args: BatchDisassociateAnalyticsDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateAnalyticsDataSetCommandOutput>;
  batchDisassociateAnalyticsDataSet(
    args: BatchDisassociateAnalyticsDataSetCommandInput,
    cb: (err: any, data?: BatchDisassociateAnalyticsDataSetCommandOutput) => void
  ): void;
  batchDisassociateAnalyticsDataSet(
    args: BatchDisassociateAnalyticsDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateAnalyticsDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAttachedFileMetadataCommand}
   */
  batchGetAttachedFileMetadata(
    args: BatchGetAttachedFileMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAttachedFileMetadataCommandOutput>;
  batchGetAttachedFileMetadata(
    args: BatchGetAttachedFileMetadataCommandInput,
    cb: (err: any, data?: BatchGetAttachedFileMetadataCommandOutput) => void
  ): void;
  batchGetAttachedFileMetadata(
    args: BatchGetAttachedFileMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAttachedFileMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFlowAssociationCommand}
   */
  batchGetFlowAssociation(
    args: BatchGetFlowAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFlowAssociationCommandOutput>;
  batchGetFlowAssociation(
    args: BatchGetFlowAssociationCommandInput,
    cb: (err: any, data?: BatchGetFlowAssociationCommandOutput) => void
  ): void;
  batchGetFlowAssociation(
    args: BatchGetFlowAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFlowAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutContactCommand}
   */
  batchPutContact(
    args: BatchPutContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutContactCommandOutput>;
  batchPutContact(
    args: BatchPutContactCommandInput,
    cb: (err: any, data?: BatchPutContactCommandOutput) => void
  ): void;
  batchPutContact(
    args: BatchPutContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutContactCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateDataTableValueCommand}
   */
  batchUpdateDataTableValue(
    args: BatchUpdateDataTableValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateDataTableValueCommandOutput>;
  batchUpdateDataTableValue(
    args: BatchUpdateDataTableValueCommandInput,
    cb: (err: any, data?: BatchUpdateDataTableValueCommandOutput) => void
  ): void;
  batchUpdateDataTableValue(
    args: BatchUpdateDataTableValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateDataTableValueCommandOutput) => void
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
   * @see {@link CompleteAttachedFileUploadCommand}
   */
  completeAttachedFileUpload(
    args: CompleteAttachedFileUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteAttachedFileUploadCommandOutput>;
  completeAttachedFileUpload(
    args: CompleteAttachedFileUploadCommandInput,
    cb: (err: any, data?: CompleteAttachedFileUploadCommandOutput) => void
  ): void;
  completeAttachedFileUpload(
    args: CompleteAttachedFileUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteAttachedFileUploadCommandOutput) => void
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
   * @see {@link CreateContactCommand}
   */
  createContact(
    args: CreateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactCommandOutput>;
  createContact(
    args: CreateContactCommandInput,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  createContact(
    args: CreateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
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
   * @see {@link CreateContactFlowModuleAliasCommand}
   */
  createContactFlowModuleAlias(
    args: CreateContactFlowModuleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactFlowModuleAliasCommandOutput>;
  createContactFlowModuleAlias(
    args: CreateContactFlowModuleAliasCommandInput,
    cb: (err: any, data?: CreateContactFlowModuleAliasCommandOutput) => void
  ): void;
  createContactFlowModuleAlias(
    args: CreateContactFlowModuleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactFlowModuleAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactFlowModuleVersionCommand}
   */
  createContactFlowModuleVersion(
    args: CreateContactFlowModuleVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactFlowModuleVersionCommandOutput>;
  createContactFlowModuleVersion(
    args: CreateContactFlowModuleVersionCommandInput,
    cb: (err: any, data?: CreateContactFlowModuleVersionCommandOutput) => void
  ): void;
  createContactFlowModuleVersion(
    args: CreateContactFlowModuleVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactFlowModuleVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactFlowVersionCommand}
   */
  createContactFlowVersion(
    args: CreateContactFlowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactFlowVersionCommandOutput>;
  createContactFlowVersion(
    args: CreateContactFlowVersionCommandInput,
    cb: (err: any, data?: CreateContactFlowVersionCommandOutput) => void
  ): void;
  createContactFlowVersion(
    args: CreateContactFlowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactFlowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataTableCommand}
   */
  createDataTable(
    args: CreateDataTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataTableCommandOutput>;
  createDataTable(
    args: CreateDataTableCommandInput,
    cb: (err: any, data?: CreateDataTableCommandOutput) => void
  ): void;
  createDataTable(
    args: CreateDataTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataTableAttributeCommand}
   */
  createDataTableAttribute(
    args: CreateDataTableAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataTableAttributeCommandOutput>;
  createDataTableAttribute(
    args: CreateDataTableAttributeCommandInput,
    cb: (err: any, data?: CreateDataTableAttributeCommandOutput) => void
  ): void;
  createDataTableAttribute(
    args: CreateDataTableAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataTableAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailAddressCommand}
   */
  createEmailAddress(
    args: CreateEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailAddressCommandOutput>;
  createEmailAddress(
    args: CreateEmailAddressCommandInput,
    cb: (err: any, data?: CreateEmailAddressCommandOutput) => void
  ): void;
  createEmailAddress(
    args: CreateEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailAddressCommandOutput) => void
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
   * @see {@link CreateHoursOfOperationOverrideCommand}
   */
  createHoursOfOperationOverride(
    args: CreateHoursOfOperationOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHoursOfOperationOverrideCommandOutput>;
  createHoursOfOperationOverride(
    args: CreateHoursOfOperationOverrideCommandInput,
    cb: (err: any, data?: CreateHoursOfOperationOverrideCommandOutput) => void
  ): void;
  createHoursOfOperationOverride(
    args: CreateHoursOfOperationOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHoursOfOperationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceCommand}
   */
  createInstance(
    args: CreateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceCommandOutput>;
  createInstance(
    args: CreateInstanceCommandInput,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;
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
   * @see {@link CreateNotificationCommand}
   */
  createNotification(
    args: CreateNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationCommandOutput>;
  createNotification(
    args: CreateNotificationCommandInput,
    cb: (err: any, data?: CreateNotificationCommandOutput) => void
  ): void;
  createNotification(
    args: CreateNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationCommandOutput) => void
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
   * @see {@link CreatePersistentContactAssociationCommand}
   */
  createPersistentContactAssociation(
    args: CreatePersistentContactAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePersistentContactAssociationCommandOutput>;
  createPersistentContactAssociation(
    args: CreatePersistentContactAssociationCommandInput,
    cb: (err: any, data?: CreatePersistentContactAssociationCommandOutput) => void
  ): void;
  createPersistentContactAssociation(
    args: CreatePersistentContactAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePersistentContactAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePredefinedAttributeCommand}
   */
  createPredefinedAttribute(
    args: CreatePredefinedAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePredefinedAttributeCommandOutput>;
  createPredefinedAttribute(
    args: CreatePredefinedAttributeCommandInput,
    cb: (err: any, data?: CreatePredefinedAttributeCommandOutput) => void
  ): void;
  createPredefinedAttribute(
    args: CreatePredefinedAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePredefinedAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePromptCommand}
   */
  createPrompt(
    args: CreatePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePromptCommandOutput>;
  createPrompt(
    args: CreatePromptCommandInput,
    cb: (err: any, data?: CreatePromptCommandOutput) => void
  ): void;
  createPrompt(
    args: CreatePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePushNotificationRegistrationCommand}
   */
  createPushNotificationRegistration(
    args: CreatePushNotificationRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePushNotificationRegistrationCommandOutput>;
  createPushNotificationRegistration(
    args: CreatePushNotificationRegistrationCommandInput,
    cb: (err: any, data?: CreatePushNotificationRegistrationCommandOutput) => void
  ): void;
  createPushNotificationRegistration(
    args: CreatePushNotificationRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePushNotificationRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(
    args: CreateQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueueCommandOutput>;
  createQueue(
    args: CreateQueueCommandInput,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;
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
  createRule(
    args: CreateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
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
   * @see {@link CreateTestCaseCommand}
   */
  createTestCase(
    args: CreateTestCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestCaseCommandOutput>;
  createTestCase(
    args: CreateTestCaseCommandInput,
    cb: (err: any, data?: CreateTestCaseCommandOutput) => void
  ): void;
  createTestCase(
    args: CreateTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestCaseCommandOutput) => void
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
  createUseCase(
    args: CreateUseCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUseCaseCommandOutput>;
  createUseCase(
    args: CreateUseCaseCommandInput,
    cb: (err: any, data?: CreateUseCaseCommandOutput) => void
  ): void;
  createUseCase(
    args: CreateUseCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUseCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
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
  createView(
    args: CreateViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateViewCommandOutput>;
  createView(
    args: CreateViewCommandInput,
    cb: (err: any, data?: CreateViewCommandOutput) => void
  ): void;
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
   * @see {@link CreateWorkspaceCommand}
   */
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspacePageCommand}
   */
  createWorkspacePage(
    args: CreateWorkspacePageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspacePageCommandOutput>;
  createWorkspacePage(
    args: CreateWorkspacePageCommandInput,
    cb: (err: any, data?: CreateWorkspacePageCommandOutput) => void
  ): void;
  createWorkspacePage(
    args: CreateWorkspacePageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspacePageCommandOutput) => void
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
   * @see {@link DeleteAttachedFileCommand}
   */
  deleteAttachedFile(
    args: DeleteAttachedFileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttachedFileCommandOutput>;
  deleteAttachedFile(
    args: DeleteAttachedFileCommandInput,
    cb: (err: any, data?: DeleteAttachedFileCommandOutput) => void
  ): void;
  deleteAttachedFile(
    args: DeleteAttachedFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttachedFileCommandOutput) => void
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
   * @see {@link DeleteContactFlowModuleAliasCommand}
   */
  deleteContactFlowModuleAlias(
    args: DeleteContactFlowModuleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactFlowModuleAliasCommandOutput>;
  deleteContactFlowModuleAlias(
    args: DeleteContactFlowModuleAliasCommandInput,
    cb: (err: any, data?: DeleteContactFlowModuleAliasCommandOutput) => void
  ): void;
  deleteContactFlowModuleAlias(
    args: DeleteContactFlowModuleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactFlowModuleAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactFlowModuleVersionCommand}
   */
  deleteContactFlowModuleVersion(
    args: DeleteContactFlowModuleVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactFlowModuleVersionCommandOutput>;
  deleteContactFlowModuleVersion(
    args: DeleteContactFlowModuleVersionCommandInput,
    cb: (err: any, data?: DeleteContactFlowModuleVersionCommandOutput) => void
  ): void;
  deleteContactFlowModuleVersion(
    args: DeleteContactFlowModuleVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactFlowModuleVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactFlowVersionCommand}
   */
  deleteContactFlowVersion(
    args: DeleteContactFlowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactFlowVersionCommandOutput>;
  deleteContactFlowVersion(
    args: DeleteContactFlowVersionCommandInput,
    cb: (err: any, data?: DeleteContactFlowVersionCommandOutput) => void
  ): void;
  deleteContactFlowVersion(
    args: DeleteContactFlowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactFlowVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataTableCommand}
   */
  deleteDataTable(
    args: DeleteDataTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataTableCommandOutput>;
  deleteDataTable(
    args: DeleteDataTableCommandInput,
    cb: (err: any, data?: DeleteDataTableCommandOutput) => void
  ): void;
  deleteDataTable(
    args: DeleteDataTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataTableAttributeCommand}
   */
  deleteDataTableAttribute(
    args: DeleteDataTableAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataTableAttributeCommandOutput>;
  deleteDataTableAttribute(
    args: DeleteDataTableAttributeCommandInput,
    cb: (err: any, data?: DeleteDataTableAttributeCommandOutput) => void
  ): void;
  deleteDataTableAttribute(
    args: DeleteDataTableAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataTableAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailAddressCommand}
   */
  deleteEmailAddress(
    args: DeleteEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailAddressCommandOutput>;
  deleteEmailAddress(
    args: DeleteEmailAddressCommandInput,
    cb: (err: any, data?: DeleteEmailAddressCommandOutput) => void
  ): void;
  deleteEmailAddress(
    args: DeleteEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailAddressCommandOutput) => void
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
   * @see {@link DeleteHoursOfOperationOverrideCommand}
   */
  deleteHoursOfOperationOverride(
    args: DeleteHoursOfOperationOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHoursOfOperationOverrideCommandOutput>;
  deleteHoursOfOperationOverride(
    args: DeleteHoursOfOperationOverrideCommandInput,
    cb: (err: any, data?: DeleteHoursOfOperationOverrideCommandOutput) => void
  ): void;
  deleteHoursOfOperationOverride(
    args: DeleteHoursOfOperationOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHoursOfOperationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceCommand}
   */
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  deleteInstance(
    args: DeleteInstanceCommandInput,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
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
   * @see {@link DeleteNotificationCommand}
   */
  deleteNotification(
    args: DeleteNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationCommandOutput>;
  deleteNotification(
    args: DeleteNotificationCommandInput,
    cb: (err: any, data?: DeleteNotificationCommandOutput) => void
  ): void;
  deleteNotification(
    args: DeleteNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePredefinedAttributeCommand}
   */
  deletePredefinedAttribute(
    args: DeletePredefinedAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePredefinedAttributeCommandOutput>;
  deletePredefinedAttribute(
    args: DeletePredefinedAttributeCommandInput,
    cb: (err: any, data?: DeletePredefinedAttributeCommandOutput) => void
  ): void;
  deletePredefinedAttribute(
    args: DeletePredefinedAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePredefinedAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePromptCommand}
   */
  deletePrompt(
    args: DeletePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePromptCommandOutput>;
  deletePrompt(
    args: DeletePromptCommandInput,
    cb: (err: any, data?: DeletePromptCommandOutput) => void
  ): void;
  deletePrompt(
    args: DeletePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePushNotificationRegistrationCommand}
   */
  deletePushNotificationRegistration(
    args: DeletePushNotificationRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePushNotificationRegistrationCommandOutput>;
  deletePushNotificationRegistration(
    args: DeletePushNotificationRegistrationCommandInput,
    cb: (err: any, data?: DeletePushNotificationRegistrationCommandOutput) => void
  ): void;
  deletePushNotificationRegistration(
    args: DeletePushNotificationRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePushNotificationRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(
    args: DeleteQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueueCommandOutput>;
  deleteQueue(
    args: DeleteQueueCommandInput,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;
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
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
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
   * @see {@link DeleteTestCaseCommand}
   */
  deleteTestCase(
    args: DeleteTestCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTestCaseCommandOutput>;
  deleteTestCase(
    args: DeleteTestCaseCommandInput,
    cb: (err: any, data?: DeleteTestCaseCommandOutput) => void
  ): void;
  deleteTestCase(
    args: DeleteTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestCaseCommandOutput) => void
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
  deleteUseCase(
    args: DeleteUseCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUseCaseCommandOutput>;
  deleteUseCase(
    args: DeleteUseCaseCommandInput,
    cb: (err: any, data?: DeleteUseCaseCommandOutput) => void
  ): void;
  deleteUseCase(
    args: DeleteUseCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUseCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
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
  deleteView(
    args: DeleteViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteViewCommandOutput>;
  deleteView(
    args: DeleteViewCommandInput,
    cb: (err: any, data?: DeleteViewCommandOutput) => void
  ): void;
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
   * @see {@link DeleteWorkspaceCommand}
   */
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceMediaCommand}
   */
  deleteWorkspaceMedia(
    args: DeleteWorkspaceMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceMediaCommandOutput>;
  deleteWorkspaceMedia(
    args: DeleteWorkspaceMediaCommandInput,
    cb: (err: any, data?: DeleteWorkspaceMediaCommandOutput) => void
  ): void;
  deleteWorkspaceMedia(
    args: DeleteWorkspaceMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspacePageCommand}
   */
  deleteWorkspacePage(
    args: DeleteWorkspacePageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspacePageCommandOutput>;
  deleteWorkspacePage(
    args: DeleteWorkspacePageCommandInput,
    cb: (err: any, data?: DeleteWorkspacePageCommandOutput) => void
  ): void;
  deleteWorkspacePage(
    args: DeleteWorkspacePageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspacePageCommandOutput) => void
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
   * @see {@link DescribeAuthenticationProfileCommand}
   */
  describeAuthenticationProfile(
    args: DescribeAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuthenticationProfileCommandOutput>;
  describeAuthenticationProfile(
    args: DescribeAuthenticationProfileCommandInput,
    cb: (err: any, data?: DescribeAuthenticationProfileCommandOutput) => void
  ): void;
  describeAuthenticationProfile(
    args: DescribeAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContactCommand}
   */
  describeContact(
    args: DescribeContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactCommandOutput>;
  describeContact(
    args: DescribeContactCommandInput,
    cb: (err: any, data?: DescribeContactCommandOutput) => void
  ): void;
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
   * @see {@link DescribeContactFlowModuleAliasCommand}
   */
  describeContactFlowModuleAlias(
    args: DescribeContactFlowModuleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactFlowModuleAliasCommandOutput>;
  describeContactFlowModuleAlias(
    args: DescribeContactFlowModuleAliasCommandInput,
    cb: (err: any, data?: DescribeContactFlowModuleAliasCommandOutput) => void
  ): void;
  describeContactFlowModuleAlias(
    args: DescribeContactFlowModuleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactFlowModuleAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataTableCommand}
   */
  describeDataTable(
    args: DescribeDataTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataTableCommandOutput>;
  describeDataTable(
    args: DescribeDataTableCommandInput,
    cb: (err: any, data?: DescribeDataTableCommandOutput) => void
  ): void;
  describeDataTable(
    args: DescribeDataTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataTableAttributeCommand}
   */
  describeDataTableAttribute(
    args: DescribeDataTableAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataTableAttributeCommandOutput>;
  describeDataTableAttribute(
    args: DescribeDataTableAttributeCommandInput,
    cb: (err: any, data?: DescribeDataTableAttributeCommandOutput) => void
  ): void;
  describeDataTableAttribute(
    args: DescribeDataTableAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataTableAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEmailAddressCommand}
   */
  describeEmailAddress(
    args: DescribeEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEmailAddressCommandOutput>;
  describeEmailAddress(
    args: DescribeEmailAddressCommandInput,
    cb: (err: any, data?: DescribeEmailAddressCommandOutput) => void
  ): void;
  describeEmailAddress(
    args: DescribeEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEmailAddressCommandOutput) => void
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
   * @see {@link DescribeHoursOfOperationOverrideCommand}
   */
  describeHoursOfOperationOverride(
    args: DescribeHoursOfOperationOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHoursOfOperationOverrideCommandOutput>;
  describeHoursOfOperationOverride(
    args: DescribeHoursOfOperationOverrideCommandInput,
    cb: (err: any, data?: DescribeHoursOfOperationOverrideCommandOutput) => void
  ): void;
  describeHoursOfOperationOverride(
    args: DescribeHoursOfOperationOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHoursOfOperationOverrideCommandOutput) => void
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
   * @see {@link DescribeNotificationCommand}
   */
  describeNotification(
    args: DescribeNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationCommandOutput>;
  describeNotification(
    args: DescribeNotificationCommandInput,
    cb: (err: any, data?: DescribeNotificationCommandOutput) => void
  ): void;
  describeNotification(
    args: DescribeNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationCommandOutput) => void
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
   * @see {@link DescribePredefinedAttributeCommand}
   */
  describePredefinedAttribute(
    args: DescribePredefinedAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePredefinedAttributeCommandOutput>;
  describePredefinedAttribute(
    args: DescribePredefinedAttributeCommandInput,
    cb: (err: any, data?: DescribePredefinedAttributeCommandOutput) => void
  ): void;
  describePredefinedAttribute(
    args: DescribePredefinedAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePredefinedAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePromptCommand}
   */
  describePrompt(
    args: DescribePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePromptCommandOutput>;
  describePrompt(
    args: DescribePromptCommandInput,
    cb: (err: any, data?: DescribePromptCommandOutput) => void
  ): void;
  describePrompt(
    args: DescribePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueueCommand}
   */
  describeQueue(
    args: DescribeQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueueCommandOutput>;
  describeQueue(
    args: DescribeQueueCommandInput,
    cb: (err: any, data?: DescribeQueueCommandOutput) => void
  ): void;
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
  describeRule(
    args: DescribeRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleCommandOutput>;
  describeRule(
    args: DescribeRuleCommandInput,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;
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
   * @see {@link DescribeTestCaseCommand}
   */
  describeTestCase(
    args: DescribeTestCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestCaseCommandOutput>;
  describeTestCase(
    args: DescribeTestCaseCommandInput,
    cb: (err: any, data?: DescribeTestCaseCommandOutput) => void
  ): void;
  describeTestCase(
    args: DescribeTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestCaseCommandOutput) => void
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
  describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
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
  describeView(
    args: DescribeViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeViewCommandOutput>;
  describeView(
    args: DescribeViewCommandInput,
    cb: (err: any, data?: DescribeViewCommandOutput) => void
  ): void;
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
   * @see {@link DescribeWorkspaceCommand}
   */
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceCommandOutput>;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAnalyticsDataSetCommand}
   */
  disassociateAnalyticsDataSet(
    args: DisassociateAnalyticsDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAnalyticsDataSetCommandOutput>;
  disassociateAnalyticsDataSet(
    args: DisassociateAnalyticsDataSetCommandInput,
    cb: (err: any, data?: DisassociateAnalyticsDataSetCommandOutput) => void
  ): void;
  disassociateAnalyticsDataSet(
    args: DisassociateAnalyticsDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAnalyticsDataSetCommandOutput) => void
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
  disassociateBot(
    args: DisassociateBotCommandInput,
    cb: (err: any, data?: DisassociateBotCommandOutput) => void
  ): void;
  disassociateBot(
    args: DisassociateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEmailAddressAliasCommand}
   */
  disassociateEmailAddressAlias(
    args: DisassociateEmailAddressAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEmailAddressAliasCommandOutput>;
  disassociateEmailAddressAlias(
    args: DisassociateEmailAddressAliasCommandInput,
    cb: (err: any, data?: DisassociateEmailAddressAliasCommandOutput) => void
  ): void;
  disassociateEmailAddressAlias(
    args: DisassociateEmailAddressAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEmailAddressAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFlowCommand}
   */
  disassociateFlow(
    args: DisassociateFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFlowCommandOutput>;
  disassociateFlow(
    args: DisassociateFlowCommandInput,
    cb: (err: any, data?: DisassociateFlowCommandOutput) => void
  ): void;
  disassociateFlow(
    args: DisassociateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateHoursOfOperationsCommand}
   */
  disassociateHoursOfOperations(
    args: DisassociateHoursOfOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateHoursOfOperationsCommandOutput>;
  disassociateHoursOfOperations(
    args: DisassociateHoursOfOperationsCommandInput,
    cb: (err: any, data?: DisassociateHoursOfOperationsCommandOutput) => void
  ): void;
  disassociateHoursOfOperations(
    args: DisassociateHoursOfOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateHoursOfOperationsCommandOutput) => void
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
   * @see {@link DisassociateQueueEmailAddressesCommand}
   */
  disassociateQueueEmailAddresses(
    args: DisassociateQueueEmailAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateQueueEmailAddressesCommandOutput>;
  disassociateQueueEmailAddresses(
    args: DisassociateQueueEmailAddressesCommandInput,
    cb: (err: any, data?: DisassociateQueueEmailAddressesCommandOutput) => void
  ): void;
  disassociateQueueEmailAddresses(
    args: DisassociateQueueEmailAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateQueueEmailAddressesCommandOutput) => void
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
   * @see {@link DisassociateSecurityProfilesCommand}
   */
  disassociateSecurityProfiles(
    args: DisassociateSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSecurityProfilesCommandOutput>;
  disassociateSecurityProfiles(
    args: DisassociateSecurityProfilesCommandInput,
    cb: (err: any, data?: DisassociateSecurityProfilesCommandOutput) => void
  ): void;
  disassociateSecurityProfiles(
    args: DisassociateSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSecurityProfilesCommandOutput) => void
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
   * @see {@link DisassociateUserProficienciesCommand}
   */
  disassociateUserProficiencies(
    args: DisassociateUserProficienciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserProficienciesCommandOutput>;
  disassociateUserProficiencies(
    args: DisassociateUserProficienciesCommandInput,
    cb: (err: any, data?: DisassociateUserProficienciesCommandOutput) => void
  ): void;
  disassociateUserProficiencies(
    args: DisassociateUserProficienciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserProficienciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWorkspaceCommand}
   */
  disassociateWorkspace(
    args: DisassociateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWorkspaceCommandOutput>;
  disassociateWorkspace(
    args: DisassociateWorkspaceCommandInput,
    cb: (err: any, data?: DisassociateWorkspaceCommandOutput) => void
  ): void;
  disassociateWorkspace(
    args: DisassociateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWorkspaceCommandOutput) => void
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
   * @see {@link EvaluateDataTableValuesCommand}
   */
  evaluateDataTableValues(
    args: EvaluateDataTableValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateDataTableValuesCommandOutput>;
  evaluateDataTableValues(
    args: EvaluateDataTableValuesCommandInput,
    cb: (err: any, data?: EvaluateDataTableValuesCommandOutput) => void
  ): void;
  evaluateDataTableValues(
    args: EvaluateDataTableValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateDataTableValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttachedFileCommand}
   */
  getAttachedFile(
    args: GetAttachedFileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttachedFileCommandOutput>;
  getAttachedFile(
    args: GetAttachedFileCommandInput,
    cb: (err: any, data?: GetAttachedFileCommandOutput) => void
  ): void;
  getAttachedFile(
    args: GetAttachedFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttachedFileCommandOutput) => void
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
   * @see {@link GetContactMetricsCommand}
   */
  getContactMetrics(
    args: GetContactMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactMetricsCommandOutput>;
  getContactMetrics(
    args: GetContactMetricsCommandInput,
    cb: (err: any, data?: GetContactMetricsCommandOutput) => void
  ): void;
  getContactMetrics(
    args: GetContactMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactMetricsCommandOutput) => void
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
   * @see {@link GetEffectiveHoursOfOperationsCommand}
   */
  getEffectiveHoursOfOperations(
    args: GetEffectiveHoursOfOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEffectiveHoursOfOperationsCommandOutput>;
  getEffectiveHoursOfOperations(
    args: GetEffectiveHoursOfOperationsCommandInput,
    cb: (err: any, data?: GetEffectiveHoursOfOperationsCommandOutput) => void
  ): void;
  getEffectiveHoursOfOperations(
    args: GetEffectiveHoursOfOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEffectiveHoursOfOperationsCommandOutput) => void
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
   * @see {@link GetFlowAssociationCommand}
   */
  getFlowAssociation(
    args: GetFlowAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowAssociationCommandOutput>;
  getFlowAssociation(
    args: GetFlowAssociationCommandInput,
    cb: (err: any, data?: GetFlowAssociationCommandOutput) => void
  ): void;
  getFlowAssociation(
    args: GetFlowAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricDataCommand}
   */
  getMetricData(
    args: GetMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricDataCommandOutput>;
  getMetricData(
    args: GetMetricDataCommandInput,
    cb: (err: any, data?: GetMetricDataCommandOutput) => void
  ): void;
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
  getMetricDataV2(
    args: GetMetricDataV2CommandInput,
    cb: (err: any, data?: GetMetricDataV2CommandOutput) => void
  ): void;
  getMetricDataV2(
    args: GetMetricDataV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricDataV2CommandOutput) => void
  ): void;

  /**
   * @see {@link GetPromptFileCommand}
   */
  getPromptFile(
    args: GetPromptFileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPromptFileCommandOutput>;
  getPromptFile(
    args: GetPromptFileCommandInput,
    cb: (err: any, data?: GetPromptFileCommandOutput) => void
  ): void;
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
  getTaskTemplate(
    args: GetTaskTemplateCommandInput,
    cb: (err: any, data?: GetTaskTemplateCommandOutput) => void
  ): void;
  getTaskTemplate(
    args: GetTaskTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaskTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestCaseExecutionSummaryCommand}
   */
  getTestCaseExecutionSummary(
    args: GetTestCaseExecutionSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestCaseExecutionSummaryCommandOutput>;
  getTestCaseExecutionSummary(
    args: GetTestCaseExecutionSummaryCommandInput,
    cb: (err: any, data?: GetTestCaseExecutionSummaryCommandOutput) => void
  ): void;
  getTestCaseExecutionSummary(
    args: GetTestCaseExecutionSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestCaseExecutionSummaryCommandOutput) => void
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
   * @see {@link ImportPhoneNumberCommand}
   */
  importPhoneNumber(
    args: ImportPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportPhoneNumberCommandOutput>;
  importPhoneNumber(
    args: ImportPhoneNumberCommandInput,
    cb: (err: any, data?: ImportPhoneNumberCommandOutput) => void
  ): void;
  importPhoneNumber(
    args: ImportPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportWorkspaceMediaCommand}
   */
  importWorkspaceMedia(
    args: ImportWorkspaceMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportWorkspaceMediaCommandOutput>;
  importWorkspaceMedia(
    args: ImportWorkspaceMediaCommandInput,
    cb: (err: any, data?: ImportWorkspaceMediaCommandOutput) => void
  ): void;
  importWorkspaceMedia(
    args: ImportWorkspaceMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportWorkspaceMediaCommandOutput) => void
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
   * @see {@link ListAnalyticsDataAssociationsCommand}
   */
  listAnalyticsDataAssociations(
    args: ListAnalyticsDataAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalyticsDataAssociationsCommandOutput>;
  listAnalyticsDataAssociations(
    args: ListAnalyticsDataAssociationsCommandInput,
    cb: (err: any, data?: ListAnalyticsDataAssociationsCommandOutput) => void
  ): void;
  listAnalyticsDataAssociations(
    args: ListAnalyticsDataAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyticsDataAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalyticsDataLakeDataSetsCommand}
   */
  listAnalyticsDataLakeDataSets(
    args: ListAnalyticsDataLakeDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalyticsDataLakeDataSetsCommandOutput>;
  listAnalyticsDataLakeDataSets(
    args: ListAnalyticsDataLakeDataSetsCommandInput,
    cb: (err: any, data?: ListAnalyticsDataLakeDataSetsCommandOutput) => void
  ): void;
  listAnalyticsDataLakeDataSets(
    args: ListAnalyticsDataLakeDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyticsDataLakeDataSetsCommandOutput) => void
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
   * @see {@link ListAssociatedContactsCommand}
   */
  listAssociatedContacts(
    args: ListAssociatedContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedContactsCommandOutput>;
  listAssociatedContacts(
    args: ListAssociatedContactsCommandInput,
    cb: (err: any, data?: ListAssociatedContactsCommandOutput) => void
  ): void;
  listAssociatedContacts(
    args: ListAssociatedContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuthenticationProfilesCommand}
   */
  listAuthenticationProfiles(
    args: ListAuthenticationProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuthenticationProfilesCommandOutput>;
  listAuthenticationProfiles(
    args: ListAuthenticationProfilesCommandInput,
    cb: (err: any, data?: ListAuthenticationProfilesCommandOutput) => void
  ): void;
  listAuthenticationProfiles(
    args: ListAuthenticationProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuthenticationProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBotsCommand}
   */
  listBots(
    args: ListBotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotsCommandOutput>;
  listBots(
    args: ListBotsCommandInput,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChildHoursOfOperationsCommand}
   */
  listChildHoursOfOperations(
    args: ListChildHoursOfOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChildHoursOfOperationsCommandOutput>;
  listChildHoursOfOperations(
    args: ListChildHoursOfOperationsCommandInput,
    cb: (err: any, data?: ListChildHoursOfOperationsCommandOutput) => void
  ): void;
  listChildHoursOfOperations(
    args: ListChildHoursOfOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChildHoursOfOperationsCommandOutput) => void
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
   * @see {@link ListContactFlowModuleAliasesCommand}
   */
  listContactFlowModuleAliases(
    args: ListContactFlowModuleAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactFlowModuleAliasesCommandOutput>;
  listContactFlowModuleAliases(
    args: ListContactFlowModuleAliasesCommandInput,
    cb: (err: any, data?: ListContactFlowModuleAliasesCommandOutput) => void
  ): void;
  listContactFlowModuleAliases(
    args: ListContactFlowModuleAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactFlowModuleAliasesCommandOutput) => void
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
   * @see {@link ListContactFlowModuleVersionsCommand}
   */
  listContactFlowModuleVersions(
    args: ListContactFlowModuleVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactFlowModuleVersionsCommandOutput>;
  listContactFlowModuleVersions(
    args: ListContactFlowModuleVersionsCommandInput,
    cb: (err: any, data?: ListContactFlowModuleVersionsCommandOutput) => void
  ): void;
  listContactFlowModuleVersions(
    args: ListContactFlowModuleVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactFlowModuleVersionsCommandOutput) => void
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
   * @see {@link ListContactFlowVersionsCommand}
   */
  listContactFlowVersions(
    args: ListContactFlowVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactFlowVersionsCommandOutput>;
  listContactFlowVersions(
    args: ListContactFlowVersionsCommandInput,
    cb: (err: any, data?: ListContactFlowVersionsCommandOutput) => void
  ): void;
  listContactFlowVersions(
    args: ListContactFlowVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactFlowVersionsCommandOutput) => void
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
   * @see {@link ListDataTableAttributesCommand}
   */
  listDataTableAttributes(
    args: ListDataTableAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataTableAttributesCommandOutput>;
  listDataTableAttributes(
    args: ListDataTableAttributesCommandInput,
    cb: (err: any, data?: ListDataTableAttributesCommandOutput) => void
  ): void;
  listDataTableAttributes(
    args: ListDataTableAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataTableAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTablePrimaryValuesCommand}
   */
  listDataTablePrimaryValues(
    args: ListDataTablePrimaryValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataTablePrimaryValuesCommandOutput>;
  listDataTablePrimaryValues(
    args: ListDataTablePrimaryValuesCommandInput,
    cb: (err: any, data?: ListDataTablePrimaryValuesCommandOutput) => void
  ): void;
  listDataTablePrimaryValues(
    args: ListDataTablePrimaryValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataTablePrimaryValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTablesCommand}
   */
  listDataTables(
    args: ListDataTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataTablesCommandOutput>;
  listDataTables(
    args: ListDataTablesCommandInput,
    cb: (err: any, data?: ListDataTablesCommandOutput) => void
  ): void;
  listDataTables(
    args: ListDataTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTableValuesCommand}
   */
  listDataTableValues(
    args: ListDataTableValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataTableValuesCommandOutput>;
  listDataTableValues(
    args: ListDataTableValuesCommandInput,
    cb: (err: any, data?: ListDataTableValuesCommandOutput) => void
  ): void;
  listDataTableValues(
    args: ListDataTableValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataTableValuesCommandOutput) => void
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
   * @see {@link ListEntitySecurityProfilesCommand}
   */
  listEntitySecurityProfiles(
    args: ListEntitySecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitySecurityProfilesCommandOutput>;
  listEntitySecurityProfiles(
    args: ListEntitySecurityProfilesCommandInput,
    cb: (err: any, data?: ListEntitySecurityProfilesCommandOutput) => void
  ): void;
  listEntitySecurityProfiles(
    args: ListEntitySecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitySecurityProfilesCommandOutput) => void
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
   * @see {@link ListFlowAssociationsCommand}
   */
  listFlowAssociations(
    args: ListFlowAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowAssociationsCommandOutput>;
  listFlowAssociations(
    args: ListFlowAssociationsCommandInput,
    cb: (err: any, data?: ListFlowAssociationsCommandOutput) => void
  ): void;
  listFlowAssociations(
    args: ListFlowAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHoursOfOperationOverridesCommand}
   */
  listHoursOfOperationOverrides(
    args: ListHoursOfOperationOverridesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHoursOfOperationOverridesCommandOutput>;
  listHoursOfOperationOverrides(
    args: ListHoursOfOperationOverridesCommandInput,
    cb: (err: any, data?: ListHoursOfOperationOverridesCommandOutput) => void
  ): void;
  listHoursOfOperationOverrides(
    args: ListHoursOfOperationOverridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHoursOfOperationOverridesCommandOutput) => void
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
  listInstances(): Promise<ListInstancesCommandOutput>;
  listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
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
  listLexBots(
    args: ListLexBotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLexBotsCommandOutput>;
  listLexBots(
    args: ListLexBotsCommandInput,
    cb: (err: any, data?: ListLexBotsCommandOutput) => void
  ): void;
  listLexBots(
    args: ListLexBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLexBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationsCommand}
   */
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
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
  listPhoneNumbersV2(): Promise<ListPhoneNumbersV2CommandOutput>;
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
   * @see {@link ListPredefinedAttributesCommand}
   */
  listPredefinedAttributes(
    args: ListPredefinedAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPredefinedAttributesCommandOutput>;
  listPredefinedAttributes(
    args: ListPredefinedAttributesCommandInput,
    cb: (err: any, data?: ListPredefinedAttributesCommandOutput) => void
  ): void;
  listPredefinedAttributes(
    args: ListPredefinedAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPredefinedAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPromptsCommand}
   */
  listPrompts(
    args: ListPromptsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPromptsCommandOutput>;
  listPrompts(
    args: ListPromptsCommandInput,
    cb: (err: any, data?: ListPromptsCommandOutput) => void
  ): void;
  listPrompts(
    args: ListPromptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPromptsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueueEmailAddressesCommand}
   */
  listQueueEmailAddresses(
    args: ListQueueEmailAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueueEmailAddressesCommandOutput>;
  listQueueEmailAddresses(
    args: ListQueueEmailAddressesCommandInput,
    cb: (err: any, data?: ListQueueEmailAddressesCommandOutput) => void
  ): void;
  listQueueEmailAddresses(
    args: ListQueueEmailAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueEmailAddressesCommandOutput) => void
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
  listQueues(
    args: ListQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueuesCommandOutput>;
  listQueues(
    args: ListQueuesCommandInput,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;
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
   * @see {@link ListRealtimeContactAnalysisSegmentsV2Command}
   */
  listRealtimeContactAnalysisSegmentsV2(
    args: ListRealtimeContactAnalysisSegmentsV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRealtimeContactAnalysisSegmentsV2CommandOutput>;
  listRealtimeContactAnalysisSegmentsV2(
    args: ListRealtimeContactAnalysisSegmentsV2CommandInput,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsV2CommandOutput) => void
  ): void;
  listRealtimeContactAnalysisSegmentsV2(
    args: ListRealtimeContactAnalysisSegmentsV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutingProfileManualAssignmentQueuesCommand}
   */
  listRoutingProfileManualAssignmentQueues(
    args: ListRoutingProfileManualAssignmentQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingProfileManualAssignmentQueuesCommandOutput>;
  listRoutingProfileManualAssignmentQueues(
    args: ListRoutingProfileManualAssignmentQueuesCommandInput,
    cb: (err: any, data?: ListRoutingProfileManualAssignmentQueuesCommandOutput) => void
  ): void;
  listRoutingProfileManualAssignmentQueues(
    args: ListRoutingProfileManualAssignmentQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingProfileManualAssignmentQueuesCommandOutput) => void
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
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
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
   * @see {@link ListSecurityProfileFlowModulesCommand}
   */
  listSecurityProfileFlowModules(
    args: ListSecurityProfileFlowModulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfileFlowModulesCommandOutput>;
  listSecurityProfileFlowModules(
    args: ListSecurityProfileFlowModulesCommandInput,
    cb: (err: any, data?: ListSecurityProfileFlowModulesCommandOutput) => void
  ): void;
  listSecurityProfileFlowModules(
    args: ListSecurityProfileFlowModulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfileFlowModulesCommandOutput) => void
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
   * @see {@link ListTestCaseExecutionRecordsCommand}
   */
  listTestCaseExecutionRecords(
    args: ListTestCaseExecutionRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestCaseExecutionRecordsCommandOutput>;
  listTestCaseExecutionRecords(
    args: ListTestCaseExecutionRecordsCommandInput,
    cb: (err: any, data?: ListTestCaseExecutionRecordsCommandOutput) => void
  ): void;
  listTestCaseExecutionRecords(
    args: ListTestCaseExecutionRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestCaseExecutionRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestCaseExecutionsCommand}
   */
  listTestCaseExecutions(
    args: ListTestCaseExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestCaseExecutionsCommandOutput>;
  listTestCaseExecutions(
    args: ListTestCaseExecutionsCommandInput,
    cb: (err: any, data?: ListTestCaseExecutionsCommandOutput) => void
  ): void;
  listTestCaseExecutions(
    args: ListTestCaseExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestCaseExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestCasesCommand}
   */
  listTestCases(
    args: ListTestCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestCasesCommandOutput>;
  listTestCases(
    args: ListTestCasesCommandInput,
    cb: (err: any, data?: ListTestCasesCommandOutput) => void
  ): void;
  listTestCases(
    args: ListTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrafficDistributionGroupsCommand}
   */
  listTrafficDistributionGroups(): Promise<ListTrafficDistributionGroupsCommandOutput>;
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
  listUseCases(
    args: ListUseCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUseCasesCommandOutput>;
  listUseCases(
    args: ListUseCasesCommandInput,
    cb: (err: any, data?: ListUseCasesCommandOutput) => void
  ): void;
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
   * @see {@link ListUserNotificationsCommand}
   */
  listUserNotifications(
    args: ListUserNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserNotificationsCommandOutput>;
  listUserNotifications(
    args: ListUserNotificationsCommandInput,
    cb: (err: any, data?: ListUserNotificationsCommandOutput) => void
  ): void;
  listUserNotifications(
    args: ListUserNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserProficienciesCommand}
   */
  listUserProficiencies(
    args: ListUserProficienciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserProficienciesCommandOutput>;
  listUserProficiencies(
    args: ListUserProficienciesCommandInput,
    cb: (err: any, data?: ListUserProficienciesCommandOutput) => void
  ): void;
  listUserProficiencies(
    args: ListUserProficienciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserProficienciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListViewsCommand}
   */
  listViews(
    args: ListViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListViewsCommandOutput>;
  listViews(
    args: ListViewsCommandInput,
    cb: (err: any, data?: ListViewsCommandOutput) => void
  ): void;
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
   * @see {@link ListWorkspaceMediaCommand}
   */
  listWorkspaceMedia(
    args: ListWorkspaceMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspaceMediaCommandOutput>;
  listWorkspaceMedia(
    args: ListWorkspaceMediaCommandInput,
    cb: (err: any, data?: ListWorkspaceMediaCommandOutput) => void
  ): void;
  listWorkspaceMedia(
    args: ListWorkspaceMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspaceMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkspacePagesCommand}
   */
  listWorkspacePages(
    args: ListWorkspacePagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacePagesCommandOutput>;
  listWorkspacePages(
    args: ListWorkspacePagesCommandInput,
    cb: (err: any, data?: ListWorkspacePagesCommandOutput) => void
  ): void;
  listWorkspacePages(
    args: ListWorkspacePagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacePagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkspacesCommand}
   */
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link MonitorContactCommand}
   */
  monitorContact(
    args: MonitorContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MonitorContactCommandOutput>;
  monitorContact(
    args: MonitorContactCommandInput,
    cb: (err: any, data?: MonitorContactCommandOutput) => void
  ): void;
  monitorContact(
    args: MonitorContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MonitorContactCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseContactCommand}
   */
  pauseContact(
    args: PauseContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PauseContactCommandOutput>;
  pauseContact(
    args: PauseContactCommandInput,
    cb: (err: any, data?: PauseContactCommandOutput) => void
  ): void;
  pauseContact(
    args: PauseContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseContactCommandOutput) => void
  ): void;

  /**
   * @see {@link PutUserStatusCommand}
   */
  putUserStatus(
    args: PutUserStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUserStatusCommandOutput>;
  putUserStatus(
    args: PutUserStatusCommandInput,
    cb: (err: any, data?: PutUserStatusCommandOutput) => void
  ): void;
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
   * @see {@link ResumeContactCommand}
   */
  resumeContact(
    args: ResumeContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeContactCommandOutput>;
  resumeContact(
    args: ResumeContactCommandInput,
    cb: (err: any, data?: ResumeContactCommandOutput) => void
  ): void;
  resumeContact(
    args: ResumeContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeContactCommandOutput) => void
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
   * @see {@link SearchAgentStatusesCommand}
   */
  searchAgentStatuses(
    args: SearchAgentStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAgentStatusesCommandOutput>;
  searchAgentStatuses(
    args: SearchAgentStatusesCommandInput,
    cb: (err: any, data?: SearchAgentStatusesCommandOutput) => void
  ): void;
  searchAgentStatuses(
    args: SearchAgentStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAgentStatusesCommandOutput) => void
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
   * @see {@link SearchContactEvaluationsCommand}
   */
  searchContactEvaluations(
    args: SearchContactEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContactEvaluationsCommandOutput>;
  searchContactEvaluations(
    args: SearchContactEvaluationsCommandInput,
    cb: (err: any, data?: SearchContactEvaluationsCommandOutput) => void
  ): void;
  searchContactEvaluations(
    args: SearchContactEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContactEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchContactFlowModulesCommand}
   */
  searchContactFlowModules(
    args: SearchContactFlowModulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContactFlowModulesCommandOutput>;
  searchContactFlowModules(
    args: SearchContactFlowModulesCommandInput,
    cb: (err: any, data?: SearchContactFlowModulesCommandOutput) => void
  ): void;
  searchContactFlowModules(
    args: SearchContactFlowModulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContactFlowModulesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchContactFlowsCommand}
   */
  searchContactFlows(
    args: SearchContactFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContactFlowsCommandOutput>;
  searchContactFlows(
    args: SearchContactFlowsCommandInput,
    cb: (err: any, data?: SearchContactFlowsCommandOutput) => void
  ): void;
  searchContactFlows(
    args: SearchContactFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContactFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchContactsCommand}
   */
  searchContacts(
    args: SearchContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContactsCommandOutput>;
  searchContacts(
    args: SearchContactsCommandInput,
    cb: (err: any, data?: SearchContactsCommandOutput) => void
  ): void;
  searchContacts(
    args: SearchContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDataTablesCommand}
   */
  searchDataTables(
    args: SearchDataTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDataTablesCommandOutput>;
  searchDataTables(
    args: SearchDataTablesCommandInput,
    cb: (err: any, data?: SearchDataTablesCommandOutput) => void
  ): void;
  searchDataTables(
    args: SearchDataTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDataTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchEmailAddressesCommand}
   */
  searchEmailAddresses(
    args: SearchEmailAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchEmailAddressesCommandOutput>;
  searchEmailAddresses(
    args: SearchEmailAddressesCommandInput,
    cb: (err: any, data?: SearchEmailAddressesCommandOutput) => void
  ): void;
  searchEmailAddresses(
    args: SearchEmailAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchEmailAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchEvaluationFormsCommand}
   */
  searchEvaluationForms(
    args: SearchEvaluationFormsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchEvaluationFormsCommandOutput>;
  searchEvaluationForms(
    args: SearchEvaluationFormsCommandInput,
    cb: (err: any, data?: SearchEvaluationFormsCommandOutput) => void
  ): void;
  searchEvaluationForms(
    args: SearchEvaluationFormsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchEvaluationFormsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchHoursOfOperationOverridesCommand}
   */
  searchHoursOfOperationOverrides(
    args: SearchHoursOfOperationOverridesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchHoursOfOperationOverridesCommandOutput>;
  searchHoursOfOperationOverrides(
    args: SearchHoursOfOperationOverridesCommandInput,
    cb: (err: any, data?: SearchHoursOfOperationOverridesCommandOutput) => void
  ): void;
  searchHoursOfOperationOverrides(
    args: SearchHoursOfOperationOverridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchHoursOfOperationOverridesCommandOutput) => void
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
   * @see {@link SearchNotificationsCommand}
   */
  searchNotifications(
    args: SearchNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchNotificationsCommandOutput>;
  searchNotifications(
    args: SearchNotificationsCommandInput,
    cb: (err: any, data?: SearchNotificationsCommandOutput) => void
  ): void;
  searchNotifications(
    args: SearchNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPredefinedAttributesCommand}
   */
  searchPredefinedAttributes(
    args: SearchPredefinedAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPredefinedAttributesCommandOutput>;
  searchPredefinedAttributes(
    args: SearchPredefinedAttributesCommandInput,
    cb: (err: any, data?: SearchPredefinedAttributesCommandOutput) => void
  ): void;
  searchPredefinedAttributes(
    args: SearchPredefinedAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPredefinedAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPromptsCommand}
   */
  searchPrompts(
    args: SearchPromptsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPromptsCommandOutput>;
  searchPrompts(
    args: SearchPromptsCommandInput,
    cb: (err: any, data?: SearchPromptsCommandOutput) => void
  ): void;
  searchPrompts(
    args: SearchPromptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPromptsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchQueuesCommand}
   */
  searchQueues(
    args: SearchQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchQueuesCommandOutput>;
  searchQueues(
    args: SearchQueuesCommandInput,
    cb: (err: any, data?: SearchQueuesCommandOutput) => void
  ): void;
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
   * @see {@link SearchTestCasesCommand}
   */
  searchTestCases(
    args: SearchTestCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTestCasesCommandOutput>;
  searchTestCases(
    args: SearchTestCasesCommandInput,
    cb: (err: any, data?: SearchTestCasesCommandOutput) => void
  ): void;
  searchTestCases(
    args: SearchTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTestCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUserHierarchyGroupsCommand}
   */
  searchUserHierarchyGroups(
    args: SearchUserHierarchyGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchUserHierarchyGroupsCommandOutput>;
  searchUserHierarchyGroups(
    args: SearchUserHierarchyGroupsCommandInput,
    cb: (err: any, data?: SearchUserHierarchyGroupsCommandOutput) => void
  ): void;
  searchUserHierarchyGroups(
    args: SearchUserHierarchyGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUserHierarchyGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersCommand}
   */
  searchUsers(
    args: SearchUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchUsersCommandOutput>;
  searchUsers(
    args: SearchUsersCommandInput,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;
  searchUsers(
    args: SearchUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchViewsCommand}
   */
  searchViews(
    args: SearchViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchViewsCommandOutput>;
  searchViews(
    args: SearchViewsCommandInput,
    cb: (err: any, data?: SearchViewsCommandOutput) => void
  ): void;
  searchViews(
    args: SearchViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchViewsCommandOutput) => void
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
   * @see {@link SearchWorkspaceAssociationsCommand}
   */
  searchWorkspaceAssociations(
    args: SearchWorkspaceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchWorkspaceAssociationsCommandOutput>;
  searchWorkspaceAssociations(
    args: SearchWorkspaceAssociationsCommandInput,
    cb: (err: any, data?: SearchWorkspaceAssociationsCommandOutput) => void
  ): void;
  searchWorkspaceAssociations(
    args: SearchWorkspaceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchWorkspaceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchWorkspacesCommand}
   */
  searchWorkspaces(
    args: SearchWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchWorkspacesCommandOutput>;
  searchWorkspaces(
    args: SearchWorkspacesCommandInput,
    cb: (err: any, data?: SearchWorkspacesCommandOutput) => void
  ): void;
  searchWorkspaces(
    args: SearchWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link SendChatIntegrationEventCommand}
   */
  sendChatIntegrationEvent(
    args: SendChatIntegrationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendChatIntegrationEventCommandOutput>;
  sendChatIntegrationEvent(
    args: SendChatIntegrationEventCommandInput,
    cb: (err: any, data?: SendChatIntegrationEventCommandOutput) => void
  ): void;
  sendChatIntegrationEvent(
    args: SendChatIntegrationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendChatIntegrationEventCommandOutput) => void
  ): void;

  /**
   * @see {@link SendOutboundEmailCommand}
   */
  sendOutboundEmail(
    args: SendOutboundEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendOutboundEmailCommandOutput>;
  sendOutboundEmail(
    args: SendOutboundEmailCommandInput,
    cb: (err: any, data?: SendOutboundEmailCommandOutput) => void
  ): void;
  sendOutboundEmail(
    args: SendOutboundEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendOutboundEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAttachedFileUploadCommand}
   */
  startAttachedFileUpload(
    args: StartAttachedFileUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAttachedFileUploadCommandOutput>;
  startAttachedFileUpload(
    args: StartAttachedFileUploadCommandInput,
    cb: (err: any, data?: StartAttachedFileUploadCommandOutput) => void
  ): void;
  startAttachedFileUpload(
    args: StartAttachedFileUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAttachedFileUploadCommandOutput) => void
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
   * @see {@link StartContactMediaProcessingCommand}
   */
  startContactMediaProcessing(): Promise<StartContactMediaProcessingCommandOutput>;
  startContactMediaProcessing(
    args: StartContactMediaProcessingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContactMediaProcessingCommandOutput>;
  startContactMediaProcessing(
    args: StartContactMediaProcessingCommandInput,
    cb: (err: any, data?: StartContactMediaProcessingCommandOutput) => void
  ): void;
  startContactMediaProcessing(
    args: StartContactMediaProcessingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContactMediaProcessingCommandOutput) => void
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
   * @see {@link StartEmailContactCommand}
   */
  startEmailContact(
    args: StartEmailContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEmailContactCommandOutput>;
  startEmailContact(
    args: StartEmailContactCommandInput,
    cb: (err: any, data?: StartEmailContactCommandOutput) => void
  ): void;
  startEmailContact(
    args: StartEmailContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEmailContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOutboundChatContactCommand}
   */
  startOutboundChatContact(
    args: StartOutboundChatContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOutboundChatContactCommandOutput>;
  startOutboundChatContact(
    args: StartOutboundChatContactCommandInput,
    cb: (err: any, data?: StartOutboundChatContactCommandOutput) => void
  ): void;
  startOutboundChatContact(
    args: StartOutboundChatContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOutboundChatContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOutboundEmailContactCommand}
   */
  startOutboundEmailContact(
    args: StartOutboundEmailContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOutboundEmailContactCommandOutput>;
  startOutboundEmailContact(
    args: StartOutboundEmailContactCommandInput,
    cb: (err: any, data?: StartOutboundEmailContactCommandOutput) => void
  ): void;
  startOutboundEmailContact(
    args: StartOutboundEmailContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOutboundEmailContactCommandOutput) => void
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
   * @see {@link StartScreenSharingCommand}
   */
  startScreenSharing(
    args: StartScreenSharingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartScreenSharingCommandOutput>;
  startScreenSharing(
    args: StartScreenSharingCommandInput,
    cb: (err: any, data?: StartScreenSharingCommandOutput) => void
  ): void;
  startScreenSharing(
    args: StartScreenSharingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartScreenSharingCommandOutput) => void
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
   * @see {@link StartTestCaseExecutionCommand}
   */
  startTestCaseExecution(
    args: StartTestCaseExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTestCaseExecutionCommandOutput>;
  startTestCaseExecution(
    args: StartTestCaseExecutionCommandInput,
    cb: (err: any, data?: StartTestCaseExecutionCommandOutput) => void
  ): void;
  startTestCaseExecution(
    args: StartTestCaseExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTestCaseExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWebRTCContactCommand}
   */
  startWebRTCContact(
    args: StartWebRTCContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWebRTCContactCommandOutput>;
  startWebRTCContact(
    args: StartWebRTCContactCommandInput,
    cb: (err: any, data?: StartWebRTCContactCommandOutput) => void
  ): void;
  startWebRTCContact(
    args: StartWebRTCContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWebRTCContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StopContactCommand}
   */
  stopContact(
    args: StopContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContactCommandOutput>;
  stopContact(
    args: StopContactCommandInput,
    cb: (err: any, data?: StopContactCommandOutput) => void
  ): void;
  stopContact(
    args: StopContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactCommandOutput) => void
  ): void;

  /**
   * @see {@link StopContactMediaProcessingCommand}
   */
  stopContactMediaProcessing(): Promise<StopContactMediaProcessingCommandOutput>;
  stopContactMediaProcessing(
    args: StopContactMediaProcessingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContactMediaProcessingCommandOutput>;
  stopContactMediaProcessing(
    args: StopContactMediaProcessingCommandInput,
    cb: (err: any, data?: StopContactMediaProcessingCommandOutput) => void
  ): void;
  stopContactMediaProcessing(
    args: StopContactMediaProcessingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactMediaProcessingCommandOutput) => void
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
   * @see {@link StopTestCaseExecutionCommand}
   */
  stopTestCaseExecution(
    args: StopTestCaseExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTestCaseExecutionCommandOutput>;
  stopTestCaseExecution(
    args: StopTestCaseExecutionCommandInput,
    cb: (err: any, data?: StopTestCaseExecutionCommandOutput) => void
  ): void;
  stopTestCaseExecution(
    args: StopTestCaseExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTestCaseExecutionCommandOutput) => void
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
   * @see {@link TagContactCommand}
   */
  tagContact(
    args: TagContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagContactCommandOutput>;
  tagContact(
    args: TagContactCommandInput,
    cb: (err: any, data?: TagContactCommandOutput) => void
  ): void;
  tagContact(
    args: TagContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagContactCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
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
  transferContact(
    args: TransferContactCommandInput,
    cb: (err: any, data?: TransferContactCommandOutput) => void
  ): void;
  transferContact(
    args: TransferContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransferContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagContactCommand}
   */
  untagContact(
    args: UntagContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagContactCommandOutput>;
  untagContact(
    args: UntagContactCommandInput,
    cb: (err: any, data?: UntagContactCommandOutput) => void
  ): void;
  untagContact(
    args: UntagContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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
   * @see {@link UpdateAuthenticationProfileCommand}
   */
  updateAuthenticationProfile(
    args: UpdateAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthenticationProfileCommandOutput>;
  updateAuthenticationProfile(
    args: UpdateAuthenticationProfileCommandInput,
    cb: (err: any, data?: UpdateAuthenticationProfileCommandOutput) => void
  ): void;
  updateAuthenticationProfile(
    args: UpdateAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactCommand}
   */
  updateContact(
    args: UpdateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactCommandOutput>;
  updateContact(
    args: UpdateContactCommandInput,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
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
   * @see {@link UpdateContactFlowModuleAliasCommand}
   */
  updateContactFlowModuleAlias(
    args: UpdateContactFlowModuleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowModuleAliasCommandOutput>;
  updateContactFlowModuleAlias(
    args: UpdateContactFlowModuleAliasCommandInput,
    cb: (err: any, data?: UpdateContactFlowModuleAliasCommandOutput) => void
  ): void;
  updateContactFlowModuleAlias(
    args: UpdateContactFlowModuleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowModuleAliasCommandOutput) => void
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
   * @see {@link UpdateContactRoutingDataCommand}
   */
  updateContactRoutingData(
    args: UpdateContactRoutingDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactRoutingDataCommandOutput>;
  updateContactRoutingData(
    args: UpdateContactRoutingDataCommandInput,
    cb: (err: any, data?: UpdateContactRoutingDataCommandOutput) => void
  ): void;
  updateContactRoutingData(
    args: UpdateContactRoutingDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactRoutingDataCommandOutput) => void
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
   * @see {@link UpdateDataTableAttributeCommand}
   */
  updateDataTableAttribute(
    args: UpdateDataTableAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataTableAttributeCommandOutput>;
  updateDataTableAttribute(
    args: UpdateDataTableAttributeCommandInput,
    cb: (err: any, data?: UpdateDataTableAttributeCommandOutput) => void
  ): void;
  updateDataTableAttribute(
    args: UpdateDataTableAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataTableAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataTableMetadataCommand}
   */
  updateDataTableMetadata(
    args: UpdateDataTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataTableMetadataCommandOutput>;
  updateDataTableMetadata(
    args: UpdateDataTableMetadataCommandInput,
    cb: (err: any, data?: UpdateDataTableMetadataCommandOutput) => void
  ): void;
  updateDataTableMetadata(
    args: UpdateDataTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataTableMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataTablePrimaryValuesCommand}
   */
  updateDataTablePrimaryValues(
    args: UpdateDataTablePrimaryValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataTablePrimaryValuesCommandOutput>;
  updateDataTablePrimaryValues(
    args: UpdateDataTablePrimaryValuesCommandInput,
    cb: (err: any, data?: UpdateDataTablePrimaryValuesCommandOutput) => void
  ): void;
  updateDataTablePrimaryValues(
    args: UpdateDataTablePrimaryValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataTablePrimaryValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmailAddressMetadataCommand}
   */
  updateEmailAddressMetadata(
    args: UpdateEmailAddressMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmailAddressMetadataCommandOutput>;
  updateEmailAddressMetadata(
    args: UpdateEmailAddressMetadataCommandInput,
    cb: (err: any, data?: UpdateEmailAddressMetadataCommandOutput) => void
  ): void;
  updateEmailAddressMetadata(
    args: UpdateEmailAddressMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmailAddressMetadataCommandOutput) => void
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
   * @see {@link UpdateHoursOfOperationOverrideCommand}
   */
  updateHoursOfOperationOverride(
    args: UpdateHoursOfOperationOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHoursOfOperationOverrideCommandOutput>;
  updateHoursOfOperationOverride(
    args: UpdateHoursOfOperationOverrideCommandInput,
    cb: (err: any, data?: UpdateHoursOfOperationOverrideCommandOutput) => void
  ): void;
  updateHoursOfOperationOverride(
    args: UpdateHoursOfOperationOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHoursOfOperationOverrideCommandOutput) => void
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
   * @see {@link UpdateNotificationContentCommand}
   */
  updateNotificationContent(
    args: UpdateNotificationContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationContentCommandOutput>;
  updateNotificationContent(
    args: UpdateNotificationContentCommandInput,
    cb: (err: any, data?: UpdateNotificationContentCommandOutput) => void
  ): void;
  updateNotificationContent(
    args: UpdateNotificationContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateParticipantAuthenticationCommand}
   */
  updateParticipantAuthentication(
    args: UpdateParticipantAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateParticipantAuthenticationCommandOutput>;
  updateParticipantAuthentication(
    args: UpdateParticipantAuthenticationCommandInput,
    cb: (err: any, data?: UpdateParticipantAuthenticationCommandOutput) => void
  ): void;
  updateParticipantAuthentication(
    args: UpdateParticipantAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateParticipantAuthenticationCommandOutput) => void
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
   * @see {@link UpdatePhoneNumberMetadataCommand}
   */
  updatePhoneNumberMetadata(
    args: UpdatePhoneNumberMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberMetadataCommandOutput>;
  updatePhoneNumberMetadata(
    args: UpdatePhoneNumberMetadataCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberMetadataCommandOutput) => void
  ): void;
  updatePhoneNumberMetadata(
    args: UpdatePhoneNumberMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePredefinedAttributeCommand}
   */
  updatePredefinedAttribute(
    args: UpdatePredefinedAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePredefinedAttributeCommandOutput>;
  updatePredefinedAttribute(
    args: UpdatePredefinedAttributeCommandInput,
    cb: (err: any, data?: UpdatePredefinedAttributeCommandOutput) => void
  ): void;
  updatePredefinedAttribute(
    args: UpdatePredefinedAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePredefinedAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePromptCommand}
   */
  updatePrompt(
    args: UpdatePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePromptCommandOutput>;
  updatePrompt(
    args: UpdatePromptCommandInput,
    cb: (err: any, data?: UpdatePromptCommandOutput) => void
  ): void;
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
  updateQueueName(
    args: UpdateQueueNameCommandInput,
    cb: (err: any, data?: UpdateQueueNameCommandOutput) => void
  ): void;
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
   * @see {@link UpdateQueueOutboundEmailConfigCommand}
   */
  updateQueueOutboundEmailConfig(
    args: UpdateQueueOutboundEmailConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueOutboundEmailConfigCommandOutput>;
  updateQueueOutboundEmailConfig(
    args: UpdateQueueOutboundEmailConfigCommandInput,
    cb: (err: any, data?: UpdateQueueOutboundEmailConfigCommandOutput) => void
  ): void;
  updateQueueOutboundEmailConfig(
    args: UpdateQueueOutboundEmailConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueOutboundEmailConfigCommandOutput) => void
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
  updateRule(
    args: UpdateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleCommandOutput>;
  updateRule(
    args: UpdateRuleCommandInput,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
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
   * @see {@link UpdateTestCaseCommand}
   */
  updateTestCase(
    args: UpdateTestCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTestCaseCommandOutput>;
  updateTestCase(
    args: UpdateTestCaseCommandInput,
    cb: (err: any, data?: UpdateTestCaseCommandOutput) => void
  ): void;
  updateTestCase(
    args: UpdateTestCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTestCaseCommandOutput) => void
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
   * @see {@link UpdateUserConfigCommand}
   */
  updateUserConfig(
    args: UpdateUserConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserConfigCommandOutput>;
  updateUserConfig(
    args: UpdateUserConfigCommandInput,
    cb: (err: any, data?: UpdateUserConfigCommandOutput) => void
  ): void;
  updateUserConfig(
    args: UpdateUserConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserConfigCommandOutput) => void
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
   * @see {@link UpdateUserNotificationStatusCommand}
   */
  updateUserNotificationStatus(
    args: UpdateUserNotificationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserNotificationStatusCommandOutput>;
  updateUserNotificationStatus(
    args: UpdateUserNotificationStatusCommandInput,
    cb: (err: any, data?: UpdateUserNotificationStatusCommandOutput) => void
  ): void;
  updateUserNotificationStatus(
    args: UpdateUserNotificationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserNotificationStatusCommandOutput) => void
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
   * @see {@link UpdateUserProficienciesCommand}
   */
  updateUserProficiencies(
    args: UpdateUserProficienciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProficienciesCommandOutput>;
  updateUserProficiencies(
    args: UpdateUserProficienciesCommandInput,
    cb: (err: any, data?: UpdateUserProficienciesCommandOutput) => void
  ): void;
  updateUserProficiencies(
    args: UpdateUserProficienciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProficienciesCommandOutput) => void
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

  /**
   * @see {@link UpdateWorkspaceMetadataCommand}
   */
  updateWorkspaceMetadata(
    args: UpdateWorkspaceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceMetadataCommandOutput>;
  updateWorkspaceMetadata(
    args: UpdateWorkspaceMetadataCommandInput,
    cb: (err: any, data?: UpdateWorkspaceMetadataCommandOutput) => void
  ): void;
  updateWorkspaceMetadata(
    args: UpdateWorkspaceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspacePageCommand}
   */
  updateWorkspacePage(
    args: UpdateWorkspacePageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspacePageCommandOutput>;
  updateWorkspacePage(
    args: UpdateWorkspacePageCommandInput,
    cb: (err: any, data?: UpdateWorkspacePageCommandOutput) => void
  ): void;
  updateWorkspacePage(
    args: UpdateWorkspacePageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspacePageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceThemeCommand}
   */
  updateWorkspaceTheme(
    args: UpdateWorkspaceThemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceThemeCommandOutput>;
  updateWorkspaceTheme(
    args: UpdateWorkspaceThemeCommandInput,
    cb: (err: any, data?: UpdateWorkspaceThemeCommandOutput) => void
  ): void;
  updateWorkspaceTheme(
    args: UpdateWorkspaceThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceVisibilityCommand}
   */
  updateWorkspaceVisibility(
    args: UpdateWorkspaceVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceVisibilityCommandOutput>;
  updateWorkspaceVisibility(
    args: UpdateWorkspaceVisibilityCommandInput,
    cb: (err: any, data?: UpdateWorkspaceVisibilityCommandOutput) => void
  ): void;
  updateWorkspaceVisibility(
    args: UpdateWorkspaceVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceVisibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateDataTableValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link EvaluateDataTableValuesCommandOutput}.
   */
  paginateEvaluateDataTableValues(
    args: EvaluateDataTableValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<EvaluateDataTableValuesCommandOutput>;

  /**
   * @see {@link GetCurrentMetricDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCurrentMetricDataCommandOutput}.
   */
  paginateGetCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCurrentMetricDataCommandOutput>;

  /**
   * @see {@link GetCurrentUserDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCurrentUserDataCommandOutput}.
   */
  paginateGetCurrentUserData(
    args: GetCurrentUserDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCurrentUserDataCommandOutput>;

  /**
   * @see {@link GetMetricDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetMetricDataCommandOutput}.
   */
  paginateGetMetricData(
    args: GetMetricDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetMetricDataCommandOutput>;

  /**
   * @see {@link GetMetricDataV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetMetricDataV2CommandOutput}.
   */
  paginateGetMetricDataV2(
    args: GetMetricDataV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetMetricDataV2CommandOutput>;

  /**
   * @see {@link ListAgentStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentStatusesCommandOutput}.
   */
  paginateListAgentStatuses(
    args: ListAgentStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentStatusesCommandOutput>;

  /**
   * @see {@link ListApprovedOriginsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApprovedOriginsCommandOutput}.
   */
  paginateListApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApprovedOriginsCommandOutput>;

  /**
   * @see {@link ListAuthenticationProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAuthenticationProfilesCommandOutput}.
   */
  paginateListAuthenticationProfiles(
    args: ListAuthenticationProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAuthenticationProfilesCommandOutput>;

  /**
   * @see {@link ListBotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBotsCommandOutput}.
   */
  paginateListBots(
    args: ListBotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBotsCommandOutput>;

  /**
   * @see {@link ListChildHoursOfOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChildHoursOfOperationsCommandOutput}.
   */
  paginateListChildHoursOfOperations(
    args: ListChildHoursOfOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChildHoursOfOperationsCommandOutput>;

  /**
   * @see {@link ListContactEvaluationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactEvaluationsCommandOutput}.
   */
  paginateListContactEvaluations(
    args: ListContactEvaluationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactEvaluationsCommandOutput>;

  /**
   * @see {@link ListContactFlowModuleAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactFlowModuleAliasesCommandOutput}.
   */
  paginateListContactFlowModuleAliases(
    args: ListContactFlowModuleAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactFlowModuleAliasesCommandOutput>;

  /**
   * @see {@link ListContactFlowModulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactFlowModulesCommandOutput}.
   */
  paginateListContactFlowModules(
    args: ListContactFlowModulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactFlowModulesCommandOutput>;

  /**
   * @see {@link ListContactFlowModuleVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactFlowModuleVersionsCommandOutput}.
   */
  paginateListContactFlowModuleVersions(
    args: ListContactFlowModuleVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactFlowModuleVersionsCommandOutput>;

  /**
   * @see {@link ListContactFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactFlowsCommandOutput}.
   */
  paginateListContactFlows(
    args: ListContactFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactFlowsCommandOutput>;

  /**
   * @see {@link ListContactFlowVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactFlowVersionsCommandOutput}.
   */
  paginateListContactFlowVersions(
    args: ListContactFlowVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactFlowVersionsCommandOutput>;

  /**
   * @see {@link ListContactReferencesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactReferencesCommandOutput}.
   */
  paginateListContactReferences(
    args: ListContactReferencesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactReferencesCommandOutput>;

  /**
   * @see {@link ListDataTableAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataTableAttributesCommandOutput}.
   */
  paginateListDataTableAttributes(
    args: ListDataTableAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataTableAttributesCommandOutput>;

  /**
   * @see {@link ListDataTablePrimaryValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataTablePrimaryValuesCommandOutput}.
   */
  paginateListDataTablePrimaryValues(
    args: ListDataTablePrimaryValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataTablePrimaryValuesCommandOutput>;

  /**
   * @see {@link ListDataTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataTablesCommandOutput}.
   */
  paginateListDataTables(
    args: ListDataTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataTablesCommandOutput>;

  /**
   * @see {@link ListDataTableValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataTableValuesCommandOutput}.
   */
  paginateListDataTableValues(
    args: ListDataTableValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataTableValuesCommandOutput>;

  /**
   * @see {@link ListDefaultVocabulariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDefaultVocabulariesCommandOutput}.
   */
  paginateListDefaultVocabularies(
    args: ListDefaultVocabulariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDefaultVocabulariesCommandOutput>;

  /**
   * @see {@link ListEntitySecurityProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntitySecurityProfilesCommandOutput}.
   */
  paginateListEntitySecurityProfiles(
    args: ListEntitySecurityProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntitySecurityProfilesCommandOutput>;

  /**
   * @see {@link ListEvaluationFormsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEvaluationFormsCommandOutput}.
   */
  paginateListEvaluationForms(
    args: ListEvaluationFormsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEvaluationFormsCommandOutput>;

  /**
   * @see {@link ListEvaluationFormVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEvaluationFormVersionsCommandOutput}.
   */
  paginateListEvaluationFormVersions(
    args: ListEvaluationFormVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEvaluationFormVersionsCommandOutput>;

  /**
   * @see {@link ListFlowAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowAssociationsCommandOutput}.
   */
  paginateListFlowAssociations(
    args: ListFlowAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowAssociationsCommandOutput>;

  /**
   * @see {@link ListHoursOfOperationOverridesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHoursOfOperationOverridesCommandOutput}.
   */
  paginateListHoursOfOperationOverrides(
    args: ListHoursOfOperationOverridesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHoursOfOperationOverridesCommandOutput>;

  /**
   * @see {@link ListHoursOfOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHoursOfOperationsCommandOutput}.
   */
  paginateListHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHoursOfOperationsCommandOutput>;

  /**
   * @see {@link ListInstanceAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstanceAttributesCommandOutput}.
   */
  paginateListInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstanceAttributesCommandOutput>;

  /**
   * @see {@link ListInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstancesCommandOutput}.
   */
  paginateListInstances(
    args?: ListInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstancesCommandOutput>;

  /**
   * @see {@link ListInstanceStorageConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstanceStorageConfigsCommandOutput}.
   */
  paginateListInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstanceStorageConfigsCommandOutput>;

  /**
   * @see {@link ListIntegrationAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntegrationAssociationsCommandOutput}.
   */
  paginateListIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntegrationAssociationsCommandOutput>;

  /**
   * @see {@link ListLambdaFunctionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLambdaFunctionsCommandOutput}.
   */
  paginateListLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLambdaFunctionsCommandOutput>;

  /**
   * @see {@link ListLexBotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLexBotsCommandOutput}.
   */
  paginateListLexBots(
    args: ListLexBotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLexBotsCommandOutput>;

  /**
   * @see {@link ListPhoneNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPhoneNumbersCommandOutput}.
   */
  paginateListPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPhoneNumbersCommandOutput>;

  /**
   * @see {@link ListPhoneNumbersV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPhoneNumbersV2CommandOutput}.
   */
  paginateListPhoneNumbersV2(
    args?: ListPhoneNumbersV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPhoneNumbersV2CommandOutput>;

  /**
   * @see {@link ListPredefinedAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPredefinedAttributesCommandOutput}.
   */
  paginateListPredefinedAttributes(
    args: ListPredefinedAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPredefinedAttributesCommandOutput>;

  /**
   * @see {@link ListPromptsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPromptsCommandOutput}.
   */
  paginateListPrompts(
    args: ListPromptsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPromptsCommandOutput>;

  /**
   * @see {@link ListQueueQuickConnectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueueQuickConnectsCommandOutput}.
   */
  paginateListQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueueQuickConnectsCommandOutput>;

  /**
   * @see {@link ListQueuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueuesCommandOutput}.
   */
  paginateListQueues(
    args: ListQueuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueuesCommandOutput>;

  /**
   * @see {@link ListQuickConnectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQuickConnectsCommandOutput}.
   */
  paginateListQuickConnects(
    args: ListQuickConnectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQuickConnectsCommandOutput>;

  /**
   * @see {@link ListRealtimeContactAnalysisSegmentsV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRealtimeContactAnalysisSegmentsV2CommandOutput}.
   */
  paginateListRealtimeContactAnalysisSegmentsV2(
    args: ListRealtimeContactAnalysisSegmentsV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRealtimeContactAnalysisSegmentsV2CommandOutput>;

  /**
   * @see {@link ListRoutingProfileManualAssignmentQueuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoutingProfileManualAssignmentQueuesCommandOutput}.
   */
  paginateListRoutingProfileManualAssignmentQueues(
    args: ListRoutingProfileManualAssignmentQueuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoutingProfileManualAssignmentQueuesCommandOutput>;

  /**
   * @see {@link ListRoutingProfileQueuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoutingProfileQueuesCommandOutput}.
   */
  paginateListRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoutingProfileQueuesCommandOutput>;

  /**
   * @see {@link ListRoutingProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoutingProfilesCommandOutput}.
   */
  paginateListRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoutingProfilesCommandOutput>;

  /**
   * @see {@link ListRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRulesCommandOutput}.
   */
  paginateListRules(
    args: ListRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRulesCommandOutput>;

  /**
   * @see {@link ListSecurityKeysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityKeysCommandOutput}.
   */
  paginateListSecurityKeys(
    args: ListSecurityKeysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityKeysCommandOutput>;

  /**
   * @see {@link ListSecurityProfileApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityProfileApplicationsCommandOutput}.
   */
  paginateListSecurityProfileApplications(
    args: ListSecurityProfileApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityProfileApplicationsCommandOutput>;

  /**
   * @see {@link ListSecurityProfileFlowModulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityProfileFlowModulesCommandOutput}.
   */
  paginateListSecurityProfileFlowModules(
    args: ListSecurityProfileFlowModulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityProfileFlowModulesCommandOutput>;

  /**
   * @see {@link ListSecurityProfilePermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityProfilePermissionsCommandOutput}.
   */
  paginateListSecurityProfilePermissions(
    args: ListSecurityProfilePermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityProfilePermissionsCommandOutput>;

  /**
   * @see {@link ListSecurityProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityProfilesCommandOutput}.
   */
  paginateListSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityProfilesCommandOutput>;

  /**
   * @see {@link ListTaskTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTaskTemplatesCommandOutput}.
   */
  paginateListTaskTemplates(
    args: ListTaskTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTaskTemplatesCommandOutput>;

  /**
   * @see {@link ListTestCasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestCasesCommandOutput}.
   */
  paginateListTestCases(
    args: ListTestCasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestCasesCommandOutput>;

  /**
   * @see {@link ListTrafficDistributionGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrafficDistributionGroupsCommandOutput}.
   */
  paginateListTrafficDistributionGroups(
    args?: ListTrafficDistributionGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrafficDistributionGroupsCommandOutput>;

  /**
   * @see {@link ListTrafficDistributionGroupUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrafficDistributionGroupUsersCommandOutput}.
   */
  paginateListTrafficDistributionGroupUsers(
    args: ListTrafficDistributionGroupUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrafficDistributionGroupUsersCommandOutput>;

  /**
   * @see {@link ListUseCasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUseCasesCommandOutput}.
   */
  paginateListUseCases(
    args: ListUseCasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUseCasesCommandOutput>;

  /**
   * @see {@link ListUserHierarchyGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserHierarchyGroupsCommandOutput}.
   */
  paginateListUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserHierarchyGroupsCommandOutput>;

  /**
   * @see {@link ListUserProficienciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserProficienciesCommandOutput}.
   */
  paginateListUserProficiencies(
    args: ListUserProficienciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserProficienciesCommandOutput>;

  /**
   * @see {@link ListUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsersCommandOutput}.
   */
  paginateListUsers(
    args: ListUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsersCommandOutput>;

  /**
   * @see {@link ListViewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListViewsCommandOutput}.
   */
  paginateListViews(
    args: ListViewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListViewsCommandOutput>;

  /**
   * @see {@link ListViewVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListViewVersionsCommandOutput}.
   */
  paginateListViewVersions(
    args: ListViewVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListViewVersionsCommandOutput>;

  /**
   * @see {@link ListWorkspacePagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkspacePagesCommandOutput}.
   */
  paginateListWorkspacePages(
    args: ListWorkspacePagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkspacePagesCommandOutput>;

  /**
   * @see {@link ListWorkspacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkspacesCommandOutput}.
   */
  paginateListWorkspaces(
    args: ListWorkspacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkspacesCommandOutput>;

  /**
   * @see {@link SearchAgentStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAgentStatusesCommandOutput}.
   */
  paginateSearchAgentStatuses(
    args: SearchAgentStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAgentStatusesCommandOutput>;

  /**
   * @see {@link SearchAvailablePhoneNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAvailablePhoneNumbersCommandOutput}.
   */
  paginateSearchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAvailablePhoneNumbersCommandOutput>;

  /**
   * @see {@link SearchContactFlowModulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchContactFlowModulesCommandOutput}.
   */
  paginateSearchContactFlowModules(
    args: SearchContactFlowModulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchContactFlowModulesCommandOutput>;

  /**
   * @see {@link SearchContactFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchContactFlowsCommandOutput}.
   */
  paginateSearchContactFlows(
    args: SearchContactFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchContactFlowsCommandOutput>;

  /**
   * @see {@link SearchContactsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchContactsCommandOutput}.
   */
  paginateSearchContacts(
    args: SearchContactsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchContactsCommandOutput>;

  /**
   * @see {@link SearchDataTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchDataTablesCommandOutput}.
   */
  paginateSearchDataTables(
    args: SearchDataTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchDataTablesCommandOutput>;

  /**
   * @see {@link SearchHoursOfOperationOverridesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchHoursOfOperationOverridesCommandOutput}.
   */
  paginateSearchHoursOfOperationOverrides(
    args: SearchHoursOfOperationOverridesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchHoursOfOperationOverridesCommandOutput>;

  /**
   * @see {@link SearchHoursOfOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchHoursOfOperationsCommandOutput}.
   */
  paginateSearchHoursOfOperations(
    args: SearchHoursOfOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchHoursOfOperationsCommandOutput>;

  /**
   * @see {@link SearchPredefinedAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchPredefinedAttributesCommandOutput}.
   */
  paginateSearchPredefinedAttributes(
    args: SearchPredefinedAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchPredefinedAttributesCommandOutput>;

  /**
   * @see {@link SearchPromptsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchPromptsCommandOutput}.
   */
  paginateSearchPrompts(
    args: SearchPromptsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchPromptsCommandOutput>;

  /**
   * @see {@link SearchQueuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchQueuesCommandOutput}.
   */
  paginateSearchQueues(
    args: SearchQueuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchQueuesCommandOutput>;

  /**
   * @see {@link SearchQuickConnectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchQuickConnectsCommandOutput}.
   */
  paginateSearchQuickConnects(
    args: SearchQuickConnectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchQuickConnectsCommandOutput>;

  /**
   * @see {@link SearchResourceTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchResourceTagsCommandOutput}.
   */
  paginateSearchResourceTags(
    args: SearchResourceTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchResourceTagsCommandOutput>;

  /**
   * @see {@link SearchRoutingProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchRoutingProfilesCommandOutput}.
   */
  paginateSearchRoutingProfiles(
    args: SearchRoutingProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchRoutingProfilesCommandOutput>;

  /**
   * @see {@link SearchSecurityProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchSecurityProfilesCommandOutput}.
   */
  paginateSearchSecurityProfiles(
    args: SearchSecurityProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchSecurityProfilesCommandOutput>;

  /**
   * @see {@link SearchTestCasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchTestCasesCommandOutput}.
   */
  paginateSearchTestCases(
    args: SearchTestCasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchTestCasesCommandOutput>;

  /**
   * @see {@link SearchUserHierarchyGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchUserHierarchyGroupsCommandOutput}.
   */
  paginateSearchUserHierarchyGroups(
    args: SearchUserHierarchyGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchUserHierarchyGroupsCommandOutput>;

  /**
   * @see {@link SearchUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchUsersCommandOutput}.
   */
  paginateSearchUsers(
    args: SearchUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchUsersCommandOutput>;

  /**
   * @see {@link SearchViewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchViewsCommandOutput}.
   */
  paginateSearchViews(
    args: SearchViewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchViewsCommandOutput>;

  /**
   * @see {@link SearchVocabulariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchVocabulariesCommandOutput}.
   */
  paginateSearchVocabularies(
    args: SearchVocabulariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchVocabulariesCommandOutput>;

  /**
   * @see {@link SearchWorkspaceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchWorkspaceAssociationsCommandOutput}.
   */
  paginateSearchWorkspaceAssociations(
    args: SearchWorkspaceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchWorkspaceAssociationsCommandOutput>;

  /**
   * @see {@link SearchWorkspacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchWorkspacesCommandOutput}.
   */
  paginateSearchWorkspaces(
    args: SearchWorkspacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchWorkspacesCommandOutput>;
}

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
export class Connect extends ConnectClient implements Connect {}
createAggregatedClient(commands, Connect, { paginators });
