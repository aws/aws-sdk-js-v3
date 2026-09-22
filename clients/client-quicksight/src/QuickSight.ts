// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchCreateTopicReviewedAnswerCommandInput,
  type BatchCreateTopicReviewedAnswerCommandOutput,
  BatchCreateTopicReviewedAnswerCommand,
} from "./commands/BatchCreateTopicReviewedAnswerCommand";
import {
  type BatchDeleteKnowledgeBaseCommandInput,
  type BatchDeleteKnowledgeBaseCommandOutput,
  BatchDeleteKnowledgeBaseCommand,
} from "./commands/BatchDeleteKnowledgeBaseCommand";
import {
  type BatchDeleteTopicReviewedAnswerCommandInput,
  type BatchDeleteTopicReviewedAnswerCommandOutput,
  BatchDeleteTopicReviewedAnswerCommand,
} from "./commands/BatchDeleteTopicReviewedAnswerCommand";
import {
  type BatchDescribeUserLimitsCommandInput,
  type BatchDescribeUserLimitsCommandOutput,
  BatchDescribeUserLimitsCommand,
} from "./commands/BatchDescribeUserLimitsCommand";
import {
  type CancelIngestionCommandInput,
  type CancelIngestionCommandOutput,
  CancelIngestionCommand,
} from "./commands/CancelIngestionCommand";
import {
  type CreateAccountCustomizationCommandInput,
  type CreateAccountCustomizationCommandOutput,
  CreateAccountCustomizationCommand,
} from "./commands/CreateAccountCustomizationCommand";
import {
  type CreateAccountSubscriptionCommandInput,
  type CreateAccountSubscriptionCommandOutput,
  CreateAccountSubscriptionCommand,
} from "./commands/CreateAccountSubscriptionCommand";
import {
  type CreateActionConnectorCommandInput,
  type CreateActionConnectorCommandOutput,
  CreateActionConnectorCommand,
} from "./commands/CreateActionConnectorCommand";
import {
  type CreateAgentCommandInput,
  type CreateAgentCommandOutput,
  CreateAgentCommand,
} from "./commands/CreateAgentCommand";
import {
  type CreateAnalysisCommandInput,
  type CreateAnalysisCommandOutput,
  CreateAnalysisCommand,
} from "./commands/CreateAnalysisCommand";
import {
  type CreateApprovalPolicyCommandInput,
  type CreateApprovalPolicyCommandOutput,
  CreateApprovalPolicyCommand,
} from "./commands/CreateApprovalPolicyCommand";
import {
  type CreateBrandCommandInput,
  type CreateBrandCommandOutput,
  CreateBrandCommand,
} from "./commands/CreateBrandCommand";
import {
  type CreateCustomPermissionsCommandInput,
  type CreateCustomPermissionsCommandOutput,
  CreateCustomPermissionsCommand,
} from "./commands/CreateCustomPermissionsCommand";
import {
  type CreateDashboardCommandInput,
  type CreateDashboardCommandOutput,
  CreateDashboardCommand,
} from "./commands/CreateDashboardCommand";
import {
  type CreateDataSetCommandInput,
  type CreateDataSetCommandOutput,
  CreateDataSetCommand,
} from "./commands/CreateDataSetCommand";
import {
  type CreateDataSourceCommandInput,
  type CreateDataSourceCommandOutput,
  CreateDataSourceCommand,
} from "./commands/CreateDataSourceCommand";
import {
  type CreateDlpSettingCommandInput,
  type CreateDlpSettingCommandOutput,
  CreateDlpSettingCommand,
} from "./commands/CreateDlpSettingCommand";
import {
  type CreateFlowCommandInput,
  type CreateFlowCommandOutput,
  CreateFlowCommand,
} from "./commands/CreateFlowCommand";
import {
  type CreateFolderCommandInput,
  type CreateFolderCommandOutput,
  CreateFolderCommand,
} from "./commands/CreateFolderCommand";
import {
  type CreateFolderMembershipCommandInput,
  type CreateFolderMembershipCommandOutput,
  CreateFolderMembershipCommand,
} from "./commands/CreateFolderMembershipCommand";
import {
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateGroupCommand,
} from "./commands/CreateGroupCommand";
import {
  type CreateGroupMembershipCommandInput,
  type CreateGroupMembershipCommandOutput,
  CreateGroupMembershipCommand,
} from "./commands/CreateGroupMembershipCommand";
import {
  type CreateIAMPolicyAssignmentCommandInput,
  type CreateIAMPolicyAssignmentCommandOutput,
  CreateIAMPolicyAssignmentCommand,
} from "./commands/CreateIAMPolicyAssignmentCommand";
import {
  type CreateIngestionCommandInput,
  type CreateIngestionCommandOutput,
  CreateIngestionCommand,
} from "./commands/CreateIngestionCommand";
import {
  type CreateKnowledgeBaseCommandInput,
  type CreateKnowledgeBaseCommandOutput,
  CreateKnowledgeBaseCommand,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  type CreateLimitsProfileCommandInput,
  type CreateLimitsProfileCommandOutput,
  CreateLimitsProfileCommand,
} from "./commands/CreateLimitsProfileCommand";
import {
  type CreateNamespaceCommandInput,
  type CreateNamespaceCommandOutput,
  CreateNamespaceCommand,
} from "./commands/CreateNamespaceCommand";
import {
  type CreateOAuthClientApplicationCommandInput,
  type CreateOAuthClientApplicationCommandOutput,
  CreateOAuthClientApplicationCommand,
} from "./commands/CreateOAuthClientApplicationCommand";
import {
  type CreateRefreshScheduleCommandInput,
  type CreateRefreshScheduleCommandOutput,
  CreateRefreshScheduleCommand,
} from "./commands/CreateRefreshScheduleCommand";
import {
  type CreateRoleMembershipCommandInput,
  type CreateRoleMembershipCommandOutput,
  CreateRoleMembershipCommand,
} from "./commands/CreateRoleMembershipCommand";
import {
  type CreateSpaceCommandInput,
  type CreateSpaceCommandOutput,
  CreateSpaceCommand,
} from "./commands/CreateSpaceCommand";
import {
  type CreateTemplateAliasCommandInput,
  type CreateTemplateAliasCommandOutput,
  CreateTemplateAliasCommand,
} from "./commands/CreateTemplateAliasCommand";
import {
  type CreateTemplateCommandInput,
  type CreateTemplateCommandOutput,
  CreateTemplateCommand,
} from "./commands/CreateTemplateCommand";
import {
  type CreateThemeAliasCommandInput,
  type CreateThemeAliasCommandOutput,
  CreateThemeAliasCommand,
} from "./commands/CreateThemeAliasCommand";
import {
  type CreateThemeCommandInput,
  type CreateThemeCommandOutput,
  CreateThemeCommand,
} from "./commands/CreateThemeCommand";
import {
  type CreateTopicCommandInput,
  type CreateTopicCommandOutput,
  CreateTopicCommand,
} from "./commands/CreateTopicCommand";
import {
  type CreateTopicRefreshScheduleCommandInput,
  type CreateTopicRefreshScheduleCommandOutput,
  CreateTopicRefreshScheduleCommand,
} from "./commands/CreateTopicRefreshScheduleCommand";
import {
  type CreateTopicV2CommandInput,
  type CreateTopicV2CommandOutput,
  CreateTopicV2Command,
} from "./commands/CreateTopicV2Command";
import {
  type CreateVPCConnectionCommandInput,
  type CreateVPCConnectionCommandOutput,
  CreateVPCConnectionCommand,
} from "./commands/CreateVPCConnectionCommand";
import {
  type DeleteAccountCustomizationCommandInput,
  type DeleteAccountCustomizationCommandOutput,
  DeleteAccountCustomizationCommand,
} from "./commands/DeleteAccountCustomizationCommand";
import {
  type DeleteAccountCustomPermissionCommandInput,
  type DeleteAccountCustomPermissionCommandOutput,
  DeleteAccountCustomPermissionCommand,
} from "./commands/DeleteAccountCustomPermissionCommand";
import {
  type DeleteAccountSubscriptionCommandInput,
  type DeleteAccountSubscriptionCommandOutput,
  DeleteAccountSubscriptionCommand,
} from "./commands/DeleteAccountSubscriptionCommand";
import {
  type DeleteActionConnectorCommandInput,
  type DeleteActionConnectorCommandOutput,
  DeleteActionConnectorCommand,
} from "./commands/DeleteActionConnectorCommand";
import {
  type DeleteAgentCommandInput,
  type DeleteAgentCommandOutput,
  DeleteAgentCommand,
} from "./commands/DeleteAgentCommand";
import {
  type DeleteAnalysisCommandInput,
  type DeleteAnalysisCommandOutput,
  DeleteAnalysisCommand,
} from "./commands/DeleteAnalysisCommand";
import { type DeleteAppCommandInput, type DeleteAppCommandOutput, DeleteAppCommand } from "./commands/DeleteAppCommand";
import {
  type DeleteApprovalPolicyCommandInput,
  type DeleteApprovalPolicyCommandOutput,
  DeleteApprovalPolicyCommand,
} from "./commands/DeleteApprovalPolicyCommand";
import {
  type DeleteBrandAssignmentCommandInput,
  type DeleteBrandAssignmentCommandOutput,
  DeleteBrandAssignmentCommand,
} from "./commands/DeleteBrandAssignmentCommand";
import {
  type DeleteBrandCommandInput,
  type DeleteBrandCommandOutput,
  DeleteBrandCommand,
} from "./commands/DeleteBrandCommand";
import {
  type DeleteCustomPermissionsCommandInput,
  type DeleteCustomPermissionsCommandOutput,
  DeleteCustomPermissionsCommand,
} from "./commands/DeleteCustomPermissionsCommand";
import {
  type DeleteDashboardCommandInput,
  type DeleteDashboardCommandOutput,
  DeleteDashboardCommand,
} from "./commands/DeleteDashboardCommand";
import {
  type DeleteDataSetCommandInput,
  type DeleteDataSetCommandOutput,
  DeleteDataSetCommand,
} from "./commands/DeleteDataSetCommand";
import {
  type DeleteDataSetRefreshPropertiesCommandInput,
  type DeleteDataSetRefreshPropertiesCommandOutput,
  DeleteDataSetRefreshPropertiesCommand,
} from "./commands/DeleteDataSetRefreshPropertiesCommand";
import {
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDataSourceCommand,
} from "./commands/DeleteDataSourceCommand";
import {
  type DeleteDefaultQBusinessApplicationCommandInput,
  type DeleteDefaultQBusinessApplicationCommandOutput,
  DeleteDefaultQBusinessApplicationCommand,
} from "./commands/DeleteDefaultQBusinessApplicationCommand";
import {
  type DeleteDlpSettingCommandInput,
  type DeleteDlpSettingCommandOutput,
  DeleteDlpSettingCommand,
} from "./commands/DeleteDlpSettingCommand";
import {
  type DeleteFlowCommandInput,
  type DeleteFlowCommandOutput,
  DeleteFlowCommand,
} from "./commands/DeleteFlowCommand";
import {
  type DeleteFolderCommandInput,
  type DeleteFolderCommandOutput,
  DeleteFolderCommand,
} from "./commands/DeleteFolderCommand";
import {
  type DeleteFolderMembershipCommandInput,
  type DeleteFolderMembershipCommandOutput,
  DeleteFolderMembershipCommand,
} from "./commands/DeleteFolderMembershipCommand";
import {
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupCommand,
} from "./commands/DeleteGroupCommand";
import {
  type DeleteGroupMembershipCommandInput,
  type DeleteGroupMembershipCommandOutput,
  DeleteGroupMembershipCommand,
} from "./commands/DeleteGroupMembershipCommand";
import {
  type DeleteIAMPolicyAssignmentCommandInput,
  type DeleteIAMPolicyAssignmentCommandOutput,
  DeleteIAMPolicyAssignmentCommand,
} from "./commands/DeleteIAMPolicyAssignmentCommand";
import {
  type DeleteIdentityPropagationConfigCommandInput,
  type DeleteIdentityPropagationConfigCommandOutput,
  DeleteIdentityPropagationConfigCommand,
} from "./commands/DeleteIdentityPropagationConfigCommand";
import {
  type DeleteKnowledgeBaseCommandInput,
  type DeleteKnowledgeBaseCommandOutput,
  DeleteKnowledgeBaseCommand,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  type DeleteLimitsProfileCommandInput,
  type DeleteLimitsProfileCommandOutput,
  DeleteLimitsProfileCommand,
} from "./commands/DeleteLimitsProfileCommand";
import {
  type DeleteNamespaceCommandInput,
  type DeleteNamespaceCommandOutput,
  DeleteNamespaceCommand,
} from "./commands/DeleteNamespaceCommand";
import {
  type DeleteOAuthClientApplicationCommandInput,
  type DeleteOAuthClientApplicationCommandOutput,
  DeleteOAuthClientApplicationCommand,
} from "./commands/DeleteOAuthClientApplicationCommand";
import {
  type DeleteRefreshScheduleCommandInput,
  type DeleteRefreshScheduleCommandOutput,
  DeleteRefreshScheduleCommand,
} from "./commands/DeleteRefreshScheduleCommand";
import {
  type DeleteRoleCustomPermissionCommandInput,
  type DeleteRoleCustomPermissionCommandOutput,
  DeleteRoleCustomPermissionCommand,
} from "./commands/DeleteRoleCustomPermissionCommand";
import {
  type DeleteRoleMembershipCommandInput,
  type DeleteRoleMembershipCommandOutput,
  DeleteRoleMembershipCommand,
} from "./commands/DeleteRoleMembershipCommand";
import {
  type DeleteSpaceCommandInput,
  type DeleteSpaceCommandOutput,
  DeleteSpaceCommand,
} from "./commands/DeleteSpaceCommand";
import {
  type DeleteTemplateAliasCommandInput,
  type DeleteTemplateAliasCommandOutput,
  DeleteTemplateAliasCommand,
} from "./commands/DeleteTemplateAliasCommand";
import {
  type DeleteTemplateCommandInput,
  type DeleteTemplateCommandOutput,
  DeleteTemplateCommand,
} from "./commands/DeleteTemplateCommand";
import {
  type DeleteThemeAliasCommandInput,
  type DeleteThemeAliasCommandOutput,
  DeleteThemeAliasCommand,
} from "./commands/DeleteThemeAliasCommand";
import {
  type DeleteThemeCommandInput,
  type DeleteThemeCommandOutput,
  DeleteThemeCommand,
} from "./commands/DeleteThemeCommand";
import {
  type DeleteTopicCommandInput,
  type DeleteTopicCommandOutput,
  DeleteTopicCommand,
} from "./commands/DeleteTopicCommand";
import {
  type DeleteTopicRefreshScheduleCommandInput,
  type DeleteTopicRefreshScheduleCommandOutput,
  DeleteTopicRefreshScheduleCommand,
} from "./commands/DeleteTopicRefreshScheduleCommand";
import {
  type DeleteTopicV2CommandInput,
  type DeleteTopicV2CommandOutput,
  DeleteTopicV2Command,
} from "./commands/DeleteTopicV2Command";
import {
  type DeleteUserByPrincipalIdCommandInput,
  type DeleteUserByPrincipalIdCommandOutput,
  DeleteUserByPrincipalIdCommand,
} from "./commands/DeleteUserByPrincipalIdCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DeleteUserCustomPermissionCommandInput,
  type DeleteUserCustomPermissionCommandOutput,
  DeleteUserCustomPermissionCommand,
} from "./commands/DeleteUserCustomPermissionCommand";
import {
  type DeleteVPCConnectionCommandInput,
  type DeleteVPCConnectionCommandOutput,
  DeleteVPCConnectionCommand,
} from "./commands/DeleteVPCConnectionCommand";
import {
  type DescribeAccountCustomizationCommandInput,
  type DescribeAccountCustomizationCommandOutput,
  DescribeAccountCustomizationCommand,
} from "./commands/DescribeAccountCustomizationCommand";
import {
  type DescribeAccountCustomPermissionCommandInput,
  type DescribeAccountCustomPermissionCommandOutput,
  DescribeAccountCustomPermissionCommand,
} from "./commands/DescribeAccountCustomPermissionCommand";
import {
  type DescribeAccountSettingsCommandInput,
  type DescribeAccountSettingsCommandOutput,
  DescribeAccountSettingsCommand,
} from "./commands/DescribeAccountSettingsCommand";
import {
  type DescribeAccountSubscriptionCommandInput,
  type DescribeAccountSubscriptionCommandOutput,
  DescribeAccountSubscriptionCommand,
} from "./commands/DescribeAccountSubscriptionCommand";
import {
  type DescribeActionConnectorCommandInput,
  type DescribeActionConnectorCommandOutput,
  DescribeActionConnectorCommand,
} from "./commands/DescribeActionConnectorCommand";
import {
  type DescribeActionConnectorPermissionsCommandInput,
  type DescribeActionConnectorPermissionsCommandOutput,
  DescribeActionConnectorPermissionsCommand,
} from "./commands/DescribeActionConnectorPermissionsCommand";
import {
  type DescribeAgentCommandInput,
  type DescribeAgentCommandOutput,
  DescribeAgentCommand,
} from "./commands/DescribeAgentCommand";
import {
  type DescribeAgentPermissionsCommandInput,
  type DescribeAgentPermissionsCommandOutput,
  DescribeAgentPermissionsCommand,
} from "./commands/DescribeAgentPermissionsCommand";
import {
  type DescribeAnalysisCommandInput,
  type DescribeAnalysisCommandOutput,
  DescribeAnalysisCommand,
} from "./commands/DescribeAnalysisCommand";
import {
  type DescribeAnalysisDefinitionCommandInput,
  type DescribeAnalysisDefinitionCommandOutput,
  DescribeAnalysisDefinitionCommand,
} from "./commands/DescribeAnalysisDefinitionCommand";
import {
  type DescribeAnalysisPermissionsCommandInput,
  type DescribeAnalysisPermissionsCommandOutput,
  DescribeAnalysisPermissionsCommand,
} from "./commands/DescribeAnalysisPermissionsCommand";
import {
  type DescribeAppCommandInput,
  type DescribeAppCommandOutput,
  DescribeAppCommand,
} from "./commands/DescribeAppCommand";
import {
  type DescribeAppPermissionsCommandInput,
  type DescribeAppPermissionsCommandOutput,
  DescribeAppPermissionsCommand,
} from "./commands/DescribeAppPermissionsCommand";
import {
  type DescribeApprovalPolicyCommandInput,
  type DescribeApprovalPolicyCommandOutput,
  DescribeApprovalPolicyCommand,
} from "./commands/DescribeApprovalPolicyCommand";
import {
  type DescribeAssetBundleExportJobCommandInput,
  type DescribeAssetBundleExportJobCommandOutput,
  DescribeAssetBundleExportJobCommand,
} from "./commands/DescribeAssetBundleExportJobCommand";
import {
  type DescribeAssetBundleImportJobCommandInput,
  type DescribeAssetBundleImportJobCommandOutput,
  DescribeAssetBundleImportJobCommand,
} from "./commands/DescribeAssetBundleImportJobCommand";
import {
  type DescribeAutomationJobCommandInput,
  type DescribeAutomationJobCommandOutput,
  DescribeAutomationJobCommand,
} from "./commands/DescribeAutomationJobCommand";
import {
  type DescribeBrandAssignmentCommandInput,
  type DescribeBrandAssignmentCommandOutput,
  DescribeBrandAssignmentCommand,
} from "./commands/DescribeBrandAssignmentCommand";
import {
  type DescribeBrandCommandInput,
  type DescribeBrandCommandOutput,
  DescribeBrandCommand,
} from "./commands/DescribeBrandCommand";
import {
  type DescribeBrandPublishedVersionCommandInput,
  type DescribeBrandPublishedVersionCommandOutput,
  DescribeBrandPublishedVersionCommand,
} from "./commands/DescribeBrandPublishedVersionCommand";
import {
  type DescribeCustomPermissionsCommandInput,
  type DescribeCustomPermissionsCommandOutput,
  DescribeCustomPermissionsCommand,
} from "./commands/DescribeCustomPermissionsCommand";
import {
  type DescribeDashboardCommandInput,
  type DescribeDashboardCommandOutput,
  DescribeDashboardCommand,
} from "./commands/DescribeDashboardCommand";
import {
  type DescribeDashboardDefinitionCommandInput,
  type DescribeDashboardDefinitionCommandOutput,
  DescribeDashboardDefinitionCommand,
} from "./commands/DescribeDashboardDefinitionCommand";
import {
  type DescribeDashboardPermissionsCommandInput,
  type DescribeDashboardPermissionsCommandOutput,
  DescribeDashboardPermissionsCommand,
} from "./commands/DescribeDashboardPermissionsCommand";
import {
  type DescribeDashboardSnapshotJobCommandInput,
  type DescribeDashboardSnapshotJobCommandOutput,
  DescribeDashboardSnapshotJobCommand,
} from "./commands/DescribeDashboardSnapshotJobCommand";
import {
  type DescribeDashboardSnapshotJobResultCommandInput,
  type DescribeDashboardSnapshotJobResultCommandOutput,
  DescribeDashboardSnapshotJobResultCommand,
} from "./commands/DescribeDashboardSnapshotJobResultCommand";
import {
  type DescribeDashboardsQAConfigurationCommandInput,
  type DescribeDashboardsQAConfigurationCommandOutput,
  DescribeDashboardsQAConfigurationCommand,
} from "./commands/DescribeDashboardsQAConfigurationCommand";
import {
  type DescribeDataSetCommandInput,
  type DescribeDataSetCommandOutput,
  DescribeDataSetCommand,
} from "./commands/DescribeDataSetCommand";
import {
  type DescribeDataSetPermissionsCommandInput,
  type DescribeDataSetPermissionsCommandOutput,
  DescribeDataSetPermissionsCommand,
} from "./commands/DescribeDataSetPermissionsCommand";
import {
  type DescribeDataSetRefreshPropertiesCommandInput,
  type DescribeDataSetRefreshPropertiesCommandOutput,
  DescribeDataSetRefreshPropertiesCommand,
} from "./commands/DescribeDataSetRefreshPropertiesCommand";
import {
  type DescribeDataSourceCommandInput,
  type DescribeDataSourceCommandOutput,
  DescribeDataSourceCommand,
} from "./commands/DescribeDataSourceCommand";
import {
  type DescribeDataSourcePermissionsCommandInput,
  type DescribeDataSourcePermissionsCommandOutput,
  DescribeDataSourcePermissionsCommand,
} from "./commands/DescribeDataSourcePermissionsCommand";
import {
  type DescribeDefaultQBusinessApplicationCommandInput,
  type DescribeDefaultQBusinessApplicationCommandOutput,
  DescribeDefaultQBusinessApplicationCommand,
} from "./commands/DescribeDefaultQBusinessApplicationCommand";
import {
  type DescribeDlpSettingCommandInput,
  type DescribeDlpSettingCommandOutput,
  DescribeDlpSettingCommand,
} from "./commands/DescribeDlpSettingCommand";
import {
  type DescribeFlowCommandInput,
  type DescribeFlowCommandOutput,
  DescribeFlowCommand,
} from "./commands/DescribeFlowCommand";
import {
  type DescribeFolderCommandInput,
  type DescribeFolderCommandOutput,
  DescribeFolderCommand,
} from "./commands/DescribeFolderCommand";
import {
  type DescribeFolderPermissionsCommandInput,
  type DescribeFolderPermissionsCommandOutput,
  DescribeFolderPermissionsCommand,
} from "./commands/DescribeFolderPermissionsCommand";
import {
  type DescribeFolderResolvedPermissionsCommandInput,
  type DescribeFolderResolvedPermissionsCommandOutput,
  DescribeFolderResolvedPermissionsCommand,
} from "./commands/DescribeFolderResolvedPermissionsCommand";
import {
  type DescribeGroupCommandInput,
  type DescribeGroupCommandOutput,
  DescribeGroupCommand,
} from "./commands/DescribeGroupCommand";
import {
  type DescribeGroupMembershipCommandInput,
  type DescribeGroupMembershipCommandOutput,
  DescribeGroupMembershipCommand,
} from "./commands/DescribeGroupMembershipCommand";
import {
  type DescribeIAMPolicyAssignmentCommandInput,
  type DescribeIAMPolicyAssignmentCommandOutput,
  DescribeIAMPolicyAssignmentCommand,
} from "./commands/DescribeIAMPolicyAssignmentCommand";
import {
  type DescribeIngestionCommandInput,
  type DescribeIngestionCommandOutput,
  DescribeIngestionCommand,
} from "./commands/DescribeIngestionCommand";
import {
  type DescribeIpRestrictionCommandInput,
  type DescribeIpRestrictionCommandOutput,
  DescribeIpRestrictionCommand,
} from "./commands/DescribeIpRestrictionCommand";
import {
  type DescribeKeyRegistrationCommandInput,
  type DescribeKeyRegistrationCommandOutput,
  DescribeKeyRegistrationCommand,
} from "./commands/DescribeKeyRegistrationCommand";
import {
  type DescribeKnowledgeBaseCommandInput,
  type DescribeKnowledgeBaseCommandOutput,
  DescribeKnowledgeBaseCommand,
} from "./commands/DescribeKnowledgeBaseCommand";
import {
  type DescribeKnowledgeBasePermissionsCommandInput,
  type DescribeKnowledgeBasePermissionsCommandOutput,
  DescribeKnowledgeBasePermissionsCommand,
} from "./commands/DescribeKnowledgeBasePermissionsCommand";
import {
  type DescribeLimitsProfileCommandInput,
  type DescribeLimitsProfileCommandOutput,
  DescribeLimitsProfileCommand,
} from "./commands/DescribeLimitsProfileCommand";
import {
  type DescribeNamespaceCommandInput,
  type DescribeNamespaceCommandOutput,
  DescribeNamespaceCommand,
} from "./commands/DescribeNamespaceCommand";
import {
  type DescribeOAuthClientApplicationCommandInput,
  type DescribeOAuthClientApplicationCommandOutput,
  DescribeOAuthClientApplicationCommand,
} from "./commands/DescribeOAuthClientApplicationCommand";
import {
  type DescribeQPersonalizationConfigurationCommandInput,
  type DescribeQPersonalizationConfigurationCommandOutput,
  DescribeQPersonalizationConfigurationCommand,
} from "./commands/DescribeQPersonalizationConfigurationCommand";
import {
  type DescribeQuickSightQSearchConfigurationCommandInput,
  type DescribeQuickSightQSearchConfigurationCommandOutput,
  DescribeQuickSightQSearchConfigurationCommand,
} from "./commands/DescribeQuickSightQSearchConfigurationCommand";
import {
  type DescribeRefreshScheduleCommandInput,
  type DescribeRefreshScheduleCommandOutput,
  DescribeRefreshScheduleCommand,
} from "./commands/DescribeRefreshScheduleCommand";
import {
  type DescribeRoleCustomPermissionCommandInput,
  type DescribeRoleCustomPermissionCommandOutput,
  DescribeRoleCustomPermissionCommand,
} from "./commands/DescribeRoleCustomPermissionCommand";
import {
  type DescribeSelfUpgradeConfigurationCommandInput,
  type DescribeSelfUpgradeConfigurationCommandOutput,
  DescribeSelfUpgradeConfigurationCommand,
} from "./commands/DescribeSelfUpgradeConfigurationCommand";
import {
  type DescribeSpaceCommandInput,
  type DescribeSpaceCommandOutput,
  DescribeSpaceCommand,
} from "./commands/DescribeSpaceCommand";
import {
  type DescribeSpacePermissionsCommandInput,
  type DescribeSpacePermissionsCommandOutput,
  DescribeSpacePermissionsCommand,
} from "./commands/DescribeSpacePermissionsCommand";
import {
  type DescribeTemplateAliasCommandInput,
  type DescribeTemplateAliasCommandOutput,
  DescribeTemplateAliasCommand,
} from "./commands/DescribeTemplateAliasCommand";
import {
  type DescribeTemplateCommandInput,
  type DescribeTemplateCommandOutput,
  DescribeTemplateCommand,
} from "./commands/DescribeTemplateCommand";
import {
  type DescribeTemplateDefinitionCommandInput,
  type DescribeTemplateDefinitionCommandOutput,
  DescribeTemplateDefinitionCommand,
} from "./commands/DescribeTemplateDefinitionCommand";
import {
  type DescribeTemplatePermissionsCommandInput,
  type DescribeTemplatePermissionsCommandOutput,
  DescribeTemplatePermissionsCommand,
} from "./commands/DescribeTemplatePermissionsCommand";
import {
  type DescribeThemeAliasCommandInput,
  type DescribeThemeAliasCommandOutput,
  DescribeThemeAliasCommand,
} from "./commands/DescribeThemeAliasCommand";
import {
  type DescribeThemeCommandInput,
  type DescribeThemeCommandOutput,
  DescribeThemeCommand,
} from "./commands/DescribeThemeCommand";
import {
  type DescribeThemePermissionsCommandInput,
  type DescribeThemePermissionsCommandOutput,
  DescribeThemePermissionsCommand,
} from "./commands/DescribeThemePermissionsCommand";
import {
  type DescribeTopicCommandInput,
  type DescribeTopicCommandOutput,
  DescribeTopicCommand,
} from "./commands/DescribeTopicCommand";
import {
  type DescribeTopicPermissionsCommandInput,
  type DescribeTopicPermissionsCommandOutput,
  DescribeTopicPermissionsCommand,
} from "./commands/DescribeTopicPermissionsCommand";
import {
  type DescribeTopicPermissionsV2CommandInput,
  type DescribeTopicPermissionsV2CommandOutput,
  DescribeTopicPermissionsV2Command,
} from "./commands/DescribeTopicPermissionsV2Command";
import {
  type DescribeTopicRefreshCommandInput,
  type DescribeTopicRefreshCommandOutput,
  DescribeTopicRefreshCommand,
} from "./commands/DescribeTopicRefreshCommand";
import {
  type DescribeTopicRefreshScheduleCommandInput,
  type DescribeTopicRefreshScheduleCommandOutput,
  DescribeTopicRefreshScheduleCommand,
} from "./commands/DescribeTopicRefreshScheduleCommand";
import {
  type DescribeTopicV2CommandInput,
  type DescribeTopicV2CommandOutput,
  DescribeTopicV2Command,
} from "./commands/DescribeTopicV2Command";
import {
  type DescribeUserCommandInput,
  type DescribeUserCommandOutput,
  DescribeUserCommand,
} from "./commands/DescribeUserCommand";
import {
  type DescribeVPCConnectionCommandInput,
  type DescribeVPCConnectionCommandOutput,
  DescribeVPCConnectionCommand,
} from "./commands/DescribeVPCConnectionCommand";
import {
  type GenerateEmbedUrlForAnonymousUserCommandInput,
  type GenerateEmbedUrlForAnonymousUserCommandOutput,
  GenerateEmbedUrlForAnonymousUserCommand,
} from "./commands/GenerateEmbedUrlForAnonymousUserCommand";
import {
  type GenerateEmbedUrlForRegisteredUserCommandInput,
  type GenerateEmbedUrlForRegisteredUserCommandOutput,
  GenerateEmbedUrlForRegisteredUserCommand,
} from "./commands/GenerateEmbedUrlForRegisteredUserCommand";
import {
  type GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
  type GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput,
  GenerateEmbedUrlForRegisteredUserWithIdentityCommand,
} from "./commands/GenerateEmbedUrlForRegisteredUserWithIdentityCommand";
import {
  type GetDashboardEmbedUrlCommandInput,
  type GetDashboardEmbedUrlCommandOutput,
  GetDashboardEmbedUrlCommand,
} from "./commands/GetDashboardEmbedUrlCommand";
import {
  type GetFlowMetadataCommandInput,
  type GetFlowMetadataCommandOutput,
  GetFlowMetadataCommand,
} from "./commands/GetFlowMetadataCommand";
import {
  type GetFlowPermissionsCommandInput,
  type GetFlowPermissionsCommandOutput,
  GetFlowPermissionsCommand,
} from "./commands/GetFlowPermissionsCommand";
import {
  type GetIdentityContextCommandInput,
  type GetIdentityContextCommandOutput,
  GetIdentityContextCommand,
} from "./commands/GetIdentityContextCommand";
import {
  type GetSessionEmbedUrlCommandInput,
  type GetSessionEmbedUrlCommandOutput,
  GetSessionEmbedUrlCommand,
} from "./commands/GetSessionEmbedUrlCommand";
import {
  type ListActionConnectorsCommandInput,
  type ListActionConnectorsCommandOutput,
  ListActionConnectorsCommand,
} from "./commands/ListActionConnectorsCommand";
import {
  type ListAgentsCommandInput,
  type ListAgentsCommandOutput,
  ListAgentsCommand,
} from "./commands/ListAgentsCommand";
import {
  type ListAnalysesCommandInput,
  type ListAnalysesCommandOutput,
  ListAnalysesCommand,
} from "./commands/ListAnalysesCommand";
import {
  type ListApprovalPoliciesCommandInput,
  type ListApprovalPoliciesCommandOutput,
  ListApprovalPoliciesCommand,
} from "./commands/ListApprovalPoliciesCommand";
import { type ListAppsCommandInput, type ListAppsCommandOutput, ListAppsCommand } from "./commands/ListAppsCommand";
import {
  type ListAssetBundleExportJobsCommandInput,
  type ListAssetBundleExportJobsCommandOutput,
  ListAssetBundleExportJobsCommand,
} from "./commands/ListAssetBundleExportJobsCommand";
import {
  type ListAssetBundleImportJobsCommandInput,
  type ListAssetBundleImportJobsCommandOutput,
  ListAssetBundleImportJobsCommand,
} from "./commands/ListAssetBundleImportJobsCommand";
import {
  type ListBrandsCommandInput,
  type ListBrandsCommandOutput,
  ListBrandsCommand,
} from "./commands/ListBrandsCommand";
import {
  type ListCustomPermissionsCommandInput,
  type ListCustomPermissionsCommandOutput,
  ListCustomPermissionsCommand,
} from "./commands/ListCustomPermissionsCommand";
import {
  type ListDashboardsCommandInput,
  type ListDashboardsCommandOutput,
  ListDashboardsCommand,
} from "./commands/ListDashboardsCommand";
import {
  type ListDashboardVersionsCommandInput,
  type ListDashboardVersionsCommandOutput,
  ListDashboardVersionsCommand,
} from "./commands/ListDashboardVersionsCommand";
import {
  type ListDataSetsCommandInput,
  type ListDataSetsCommandOutput,
  ListDataSetsCommand,
} from "./commands/ListDataSetsCommand";
import {
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListDataSourcesCommand,
} from "./commands/ListDataSourcesCommand";
import {
  type ListDlpSettingsCommandInput,
  type ListDlpSettingsCommandOutput,
  ListDlpSettingsCommand,
} from "./commands/ListDlpSettingsCommand";
import { type ListFlowsCommandInput, type ListFlowsCommandOutput, ListFlowsCommand } from "./commands/ListFlowsCommand";
import {
  type ListFolderMembersCommandInput,
  type ListFolderMembersCommandOutput,
  ListFolderMembersCommand,
} from "./commands/ListFolderMembersCommand";
import {
  type ListFoldersCommandInput,
  type ListFoldersCommandOutput,
  ListFoldersCommand,
} from "./commands/ListFoldersCommand";
import {
  type ListFoldersForResourceCommandInput,
  type ListFoldersForResourceCommandOutput,
  ListFoldersForResourceCommand,
} from "./commands/ListFoldersForResourceCommand";
import {
  type ListGroupMembershipsCommandInput,
  type ListGroupMembershipsCommandOutput,
  ListGroupMembershipsCommand,
} from "./commands/ListGroupMembershipsCommand";
import {
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListGroupsCommand,
} from "./commands/ListGroupsCommand";
import {
  type ListIAMPolicyAssignmentsCommandInput,
  type ListIAMPolicyAssignmentsCommandOutput,
  ListIAMPolicyAssignmentsCommand,
} from "./commands/ListIAMPolicyAssignmentsCommand";
import {
  type ListIAMPolicyAssignmentsForUserCommandInput,
  type ListIAMPolicyAssignmentsForUserCommandOutput,
  ListIAMPolicyAssignmentsForUserCommand,
} from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import {
  type ListIdentityPropagationConfigsCommandInput,
  type ListIdentityPropagationConfigsCommandOutput,
  ListIdentityPropagationConfigsCommand,
} from "./commands/ListIdentityPropagationConfigsCommand";
import {
  type ListIngestionsCommandInput,
  type ListIngestionsCommandOutput,
  ListIngestionsCommand,
} from "./commands/ListIngestionsCommand";
import {
  type ListKnowledgeBasesCommandInput,
  type ListKnowledgeBasesCommandOutput,
  ListKnowledgeBasesCommand,
} from "./commands/ListKnowledgeBasesCommand";
import {
  type ListLimitsProfilesCommandInput,
  type ListLimitsProfilesCommandOutput,
  ListLimitsProfilesCommand,
} from "./commands/ListLimitsProfilesCommand";
import {
  type ListNamespacesCommandInput,
  type ListNamespacesCommandOutput,
  ListNamespacesCommand,
} from "./commands/ListNamespacesCommand";
import {
  type ListOAuthClientApplicationsCommandInput,
  type ListOAuthClientApplicationsCommandOutput,
  ListOAuthClientApplicationsCommand,
} from "./commands/ListOAuthClientApplicationsCommand";
import {
  type ListRefreshSchedulesCommandInput,
  type ListRefreshSchedulesCommandOutput,
  ListRefreshSchedulesCommand,
} from "./commands/ListRefreshSchedulesCommand";
import {
  type ListRoleMembershipsCommandInput,
  type ListRoleMembershipsCommandOutput,
  ListRoleMembershipsCommand,
} from "./commands/ListRoleMembershipsCommand";
import {
  type ListSelfUpgradesCommandInput,
  type ListSelfUpgradesCommandOutput,
  ListSelfUpgradesCommand,
} from "./commands/ListSelfUpgradesCommand";
import {
  type ListSpaceResourcesCommandInput,
  type ListSpaceResourcesCommandOutput,
  ListSpaceResourcesCommand,
} from "./commands/ListSpaceResourcesCommand";
import {
  type ListSpacesCommandInput,
  type ListSpacesCommandOutput,
  ListSpacesCommand,
} from "./commands/ListSpacesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTemplateAliasesCommandInput,
  type ListTemplateAliasesCommandOutput,
  ListTemplateAliasesCommand,
} from "./commands/ListTemplateAliasesCommand";
import {
  type ListTemplatesCommandInput,
  type ListTemplatesCommandOutput,
  ListTemplatesCommand,
} from "./commands/ListTemplatesCommand";
import {
  type ListTemplateVersionsCommandInput,
  type ListTemplateVersionsCommandOutput,
  ListTemplateVersionsCommand,
} from "./commands/ListTemplateVersionsCommand";
import {
  type ListThemeAliasesCommandInput,
  type ListThemeAliasesCommandOutput,
  ListThemeAliasesCommand,
} from "./commands/ListThemeAliasesCommand";
import {
  type ListThemesCommandInput,
  type ListThemesCommandOutput,
  ListThemesCommand,
} from "./commands/ListThemesCommand";
import {
  type ListThemeVersionsCommandInput,
  type ListThemeVersionsCommandOutput,
  ListThemeVersionsCommand,
} from "./commands/ListThemeVersionsCommand";
import {
  type ListTopicRefreshSchedulesCommandInput,
  type ListTopicRefreshSchedulesCommandOutput,
  ListTopicRefreshSchedulesCommand,
} from "./commands/ListTopicRefreshSchedulesCommand";
import {
  type ListTopicReviewedAnswersCommandInput,
  type ListTopicReviewedAnswersCommandOutput,
  ListTopicReviewedAnswersCommand,
} from "./commands/ListTopicReviewedAnswersCommand";
import {
  type ListTopicsCommandInput,
  type ListTopicsCommandOutput,
  ListTopicsCommand,
} from "./commands/ListTopicsCommand";
import {
  type ListTopicsV2CommandInput,
  type ListTopicsV2CommandOutput,
  ListTopicsV2Command,
} from "./commands/ListTopicsV2Command";
import {
  type ListUserGroupsCommandInput,
  type ListUserGroupsCommandOutput,
  ListUserGroupsCommand,
} from "./commands/ListUserGroupsCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type ListUsersIndexCapacityCommandInput,
  type ListUsersIndexCapacityCommandOutput,
  ListUsersIndexCapacityCommand,
} from "./commands/ListUsersIndexCapacityCommand";
import {
  type ListVPCConnectionsCommandInput,
  type ListVPCConnectionsCommandOutput,
  ListVPCConnectionsCommand,
} from "./commands/ListVPCConnectionsCommand";
import {
  type PredictQAResultsCommandInput,
  type PredictQAResultsCommandOutput,
  PredictQAResultsCommand,
} from "./commands/PredictQAResultsCommand";
import {
  type PutDataSetRefreshPropertiesCommandInput,
  type PutDataSetRefreshPropertiesCommandOutput,
  PutDataSetRefreshPropertiesCommand,
} from "./commands/PutDataSetRefreshPropertiesCommand";
import {
  type RegisterUserCommandInput,
  type RegisterUserCommandOutput,
  RegisterUserCommand,
} from "./commands/RegisterUserCommand";
import {
  type RestoreAnalysisCommandInput,
  type RestoreAnalysisCommandOutput,
  RestoreAnalysisCommand,
} from "./commands/RestoreAnalysisCommand";
import {
  type SearchActionConnectorsCommandInput,
  type SearchActionConnectorsCommandOutput,
  SearchActionConnectorsCommand,
} from "./commands/SearchActionConnectorsCommand";
import {
  type SearchAgentsCommandInput,
  type SearchAgentsCommandOutput,
  SearchAgentsCommand,
} from "./commands/SearchAgentsCommand";
import {
  type SearchAnalysesCommandInput,
  type SearchAnalysesCommandOutput,
  SearchAnalysesCommand,
} from "./commands/SearchAnalysesCommand";
import {
  type SearchAppsCommandInput,
  type SearchAppsCommandOutput,
  SearchAppsCommand,
} from "./commands/SearchAppsCommand";
import {
  type SearchDashboardsCommandInput,
  type SearchDashboardsCommandOutput,
  SearchDashboardsCommand,
} from "./commands/SearchDashboardsCommand";
import {
  type SearchDataSetsCommandInput,
  type SearchDataSetsCommandOutput,
  SearchDataSetsCommand,
} from "./commands/SearchDataSetsCommand";
import {
  type SearchDataSourcesCommandInput,
  type SearchDataSourcesCommandOutput,
  SearchDataSourcesCommand,
} from "./commands/SearchDataSourcesCommand";
import {
  type SearchFlowsCommandInput,
  type SearchFlowsCommandOutput,
  SearchFlowsCommand,
} from "./commands/SearchFlowsCommand";
import {
  type SearchFoldersCommandInput,
  type SearchFoldersCommandOutput,
  SearchFoldersCommand,
} from "./commands/SearchFoldersCommand";
import {
  type SearchGroupsCommandInput,
  type SearchGroupsCommandOutput,
  SearchGroupsCommand,
} from "./commands/SearchGroupsCommand";
import {
  type SearchKnowledgeBasesCommandInput,
  type SearchKnowledgeBasesCommandOutput,
  SearchKnowledgeBasesCommand,
} from "./commands/SearchKnowledgeBasesCommand";
import {
  type SearchSpacesCommandInput,
  type SearchSpacesCommandOutput,
  SearchSpacesCommand,
} from "./commands/SearchSpacesCommand";
import {
  type SearchTopicsCommandInput,
  type SearchTopicsCommandOutput,
  SearchTopicsCommand,
} from "./commands/SearchTopicsCommand";
import {
  type SearchTopicsV2CommandInput,
  type SearchTopicsV2CommandOutput,
  SearchTopicsV2Command,
} from "./commands/SearchTopicsV2Command";
import {
  type StartAssetBundleExportJobCommandInput,
  type StartAssetBundleExportJobCommandOutput,
  StartAssetBundleExportJobCommand,
} from "./commands/StartAssetBundleExportJobCommand";
import {
  type StartAssetBundleImportJobCommandInput,
  type StartAssetBundleImportJobCommandOutput,
  StartAssetBundleImportJobCommand,
} from "./commands/StartAssetBundleImportJobCommand";
import {
  type StartAutomationJobCommandInput,
  type StartAutomationJobCommandOutput,
  StartAutomationJobCommand,
} from "./commands/StartAutomationJobCommand";
import {
  type StartDashboardSnapshotJobCommandInput,
  type StartDashboardSnapshotJobCommandOutput,
  StartDashboardSnapshotJobCommand,
} from "./commands/StartDashboardSnapshotJobCommand";
import {
  type StartDashboardSnapshotJobScheduleCommandInput,
  type StartDashboardSnapshotJobScheduleCommandOutput,
  StartDashboardSnapshotJobScheduleCommand,
} from "./commands/StartDashboardSnapshotJobScheduleCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAccountCustomizationCommandInput,
  type UpdateAccountCustomizationCommandOutput,
  UpdateAccountCustomizationCommand,
} from "./commands/UpdateAccountCustomizationCommand";
import {
  type UpdateAccountCustomPermissionCommandInput,
  type UpdateAccountCustomPermissionCommandOutput,
  UpdateAccountCustomPermissionCommand,
} from "./commands/UpdateAccountCustomPermissionCommand";
import {
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateAccountSettingsCommand,
} from "./commands/UpdateAccountSettingsCommand";
import {
  type UpdateActionConnectorCommandInput,
  type UpdateActionConnectorCommandOutput,
  UpdateActionConnectorCommand,
} from "./commands/UpdateActionConnectorCommand";
import {
  type UpdateActionConnectorPermissionsCommandInput,
  type UpdateActionConnectorPermissionsCommandOutput,
  UpdateActionConnectorPermissionsCommand,
} from "./commands/UpdateActionConnectorPermissionsCommand";
import {
  type UpdateAgentCommandInput,
  type UpdateAgentCommandOutput,
  UpdateAgentCommand,
} from "./commands/UpdateAgentCommand";
import {
  type UpdateAgentPermissionsCommandInput,
  type UpdateAgentPermissionsCommandOutput,
  UpdateAgentPermissionsCommand,
} from "./commands/UpdateAgentPermissionsCommand";
import {
  type UpdateAnalysisCommandInput,
  type UpdateAnalysisCommandOutput,
  UpdateAnalysisCommand,
} from "./commands/UpdateAnalysisCommand";
import {
  type UpdateAnalysisPermissionsCommandInput,
  type UpdateAnalysisPermissionsCommandOutput,
  UpdateAnalysisPermissionsCommand,
} from "./commands/UpdateAnalysisPermissionsCommand";
import {
  type UpdateApplicationWithTokenExchangeGrantCommandInput,
  type UpdateApplicationWithTokenExchangeGrantCommandOutput,
  UpdateApplicationWithTokenExchangeGrantCommand,
} from "./commands/UpdateApplicationWithTokenExchangeGrantCommand";
import {
  type UpdateAppPermissionsCommandInput,
  type UpdateAppPermissionsCommandOutput,
  UpdateAppPermissionsCommand,
} from "./commands/UpdateAppPermissionsCommand";
import {
  type UpdateApprovalPolicyCommandInput,
  type UpdateApprovalPolicyCommandOutput,
  UpdateApprovalPolicyCommand,
} from "./commands/UpdateApprovalPolicyCommand";
import {
  type UpdateBrandAssignmentCommandInput,
  type UpdateBrandAssignmentCommandOutput,
  UpdateBrandAssignmentCommand,
} from "./commands/UpdateBrandAssignmentCommand";
import {
  type UpdateBrandCommandInput,
  type UpdateBrandCommandOutput,
  UpdateBrandCommand,
} from "./commands/UpdateBrandCommand";
import {
  type UpdateBrandPublishedVersionCommandInput,
  type UpdateBrandPublishedVersionCommandOutput,
  UpdateBrandPublishedVersionCommand,
} from "./commands/UpdateBrandPublishedVersionCommand";
import {
  type UpdateCustomPermissionsCommandInput,
  type UpdateCustomPermissionsCommandOutput,
  UpdateCustomPermissionsCommand,
} from "./commands/UpdateCustomPermissionsCommand";
import {
  type UpdateDashboardCommandInput,
  type UpdateDashboardCommandOutput,
  UpdateDashboardCommand,
} from "./commands/UpdateDashboardCommand";
import {
  type UpdateDashboardLinksCommandInput,
  type UpdateDashboardLinksCommandOutput,
  UpdateDashboardLinksCommand,
} from "./commands/UpdateDashboardLinksCommand";
import {
  type UpdateDashboardPermissionsCommandInput,
  type UpdateDashboardPermissionsCommandOutput,
  UpdateDashboardPermissionsCommand,
} from "./commands/UpdateDashboardPermissionsCommand";
import {
  type UpdateDashboardPublishedVersionCommandInput,
  type UpdateDashboardPublishedVersionCommandOutput,
  UpdateDashboardPublishedVersionCommand,
} from "./commands/UpdateDashboardPublishedVersionCommand";
import {
  type UpdateDashboardsQAConfigurationCommandInput,
  type UpdateDashboardsQAConfigurationCommandOutput,
  UpdateDashboardsQAConfigurationCommand,
} from "./commands/UpdateDashboardsQAConfigurationCommand";
import {
  type UpdateDataSetCommandInput,
  type UpdateDataSetCommandOutput,
  UpdateDataSetCommand,
} from "./commands/UpdateDataSetCommand";
import {
  type UpdateDataSetPermissionsCommandInput,
  type UpdateDataSetPermissionsCommandOutput,
  UpdateDataSetPermissionsCommand,
} from "./commands/UpdateDataSetPermissionsCommand";
import {
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDataSourceCommand,
} from "./commands/UpdateDataSourceCommand";
import {
  type UpdateDataSourcePermissionsCommandInput,
  type UpdateDataSourcePermissionsCommandOutput,
  UpdateDataSourcePermissionsCommand,
} from "./commands/UpdateDataSourcePermissionsCommand";
import {
  type UpdateDefaultQBusinessApplicationCommandInput,
  type UpdateDefaultQBusinessApplicationCommandOutput,
  UpdateDefaultQBusinessApplicationCommand,
} from "./commands/UpdateDefaultQBusinessApplicationCommand";
import {
  type UpdateDlpSettingCommandInput,
  type UpdateDlpSettingCommandOutput,
  UpdateDlpSettingCommand,
} from "./commands/UpdateDlpSettingCommand";
import {
  type UpdateFlowCommandInput,
  type UpdateFlowCommandOutput,
  UpdateFlowCommand,
} from "./commands/UpdateFlowCommand";
import {
  type UpdateFlowPermissionsCommandInput,
  type UpdateFlowPermissionsCommandOutput,
  UpdateFlowPermissionsCommand,
} from "./commands/UpdateFlowPermissionsCommand";
import {
  type UpdateFolderCommandInput,
  type UpdateFolderCommandOutput,
  UpdateFolderCommand,
} from "./commands/UpdateFolderCommand";
import {
  type UpdateFolderPermissionsCommandInput,
  type UpdateFolderPermissionsCommandOutput,
  UpdateFolderPermissionsCommand,
} from "./commands/UpdateFolderPermissionsCommand";
import {
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateGroupCommand,
} from "./commands/UpdateGroupCommand";
import {
  type UpdateIAMPolicyAssignmentCommandInput,
  type UpdateIAMPolicyAssignmentCommandOutput,
  UpdateIAMPolicyAssignmentCommand,
} from "./commands/UpdateIAMPolicyAssignmentCommand";
import {
  type UpdateIdentityPropagationConfigCommandInput,
  type UpdateIdentityPropagationConfigCommandOutput,
  UpdateIdentityPropagationConfigCommand,
} from "./commands/UpdateIdentityPropagationConfigCommand";
import {
  type UpdateIpRestrictionCommandInput,
  type UpdateIpRestrictionCommandOutput,
  UpdateIpRestrictionCommand,
} from "./commands/UpdateIpRestrictionCommand";
import {
  type UpdateKeyRegistrationCommandInput,
  type UpdateKeyRegistrationCommandOutput,
  UpdateKeyRegistrationCommand,
} from "./commands/UpdateKeyRegistrationCommand";
import {
  type UpdateKnowledgeBaseCommandInput,
  type UpdateKnowledgeBaseCommandOutput,
  UpdateKnowledgeBaseCommand,
} from "./commands/UpdateKnowledgeBaseCommand";
import {
  type UpdateKnowledgeBasePermissionsCommandInput,
  type UpdateKnowledgeBasePermissionsCommandOutput,
  UpdateKnowledgeBasePermissionsCommand,
} from "./commands/UpdateKnowledgeBasePermissionsCommand";
import {
  type UpdateLimitsProfileCommandInput,
  type UpdateLimitsProfileCommandOutput,
  UpdateLimitsProfileCommand,
} from "./commands/UpdateLimitsProfileCommand";
import {
  type UpdateOAuthClientApplicationCommandInput,
  type UpdateOAuthClientApplicationCommandOutput,
  UpdateOAuthClientApplicationCommand,
} from "./commands/UpdateOAuthClientApplicationCommand";
import {
  type UpdatePublicSharingSettingsCommandInput,
  type UpdatePublicSharingSettingsCommandOutput,
  UpdatePublicSharingSettingsCommand,
} from "./commands/UpdatePublicSharingSettingsCommand";
import {
  type UpdateQPersonalizationConfigurationCommandInput,
  type UpdateQPersonalizationConfigurationCommandOutput,
  UpdateQPersonalizationConfigurationCommand,
} from "./commands/UpdateQPersonalizationConfigurationCommand";
import {
  type UpdateQuickSightQSearchConfigurationCommandInput,
  type UpdateQuickSightQSearchConfigurationCommandOutput,
  UpdateQuickSightQSearchConfigurationCommand,
} from "./commands/UpdateQuickSightQSearchConfigurationCommand";
import {
  type UpdateRefreshScheduleCommandInput,
  type UpdateRefreshScheduleCommandOutput,
  UpdateRefreshScheduleCommand,
} from "./commands/UpdateRefreshScheduleCommand";
import {
  type UpdateRoleCustomPermissionCommandInput,
  type UpdateRoleCustomPermissionCommandOutput,
  UpdateRoleCustomPermissionCommand,
} from "./commands/UpdateRoleCustomPermissionCommand";
import {
  type UpdateSelfUpgradeCommandInput,
  type UpdateSelfUpgradeCommandOutput,
  UpdateSelfUpgradeCommand,
} from "./commands/UpdateSelfUpgradeCommand";
import {
  type UpdateSelfUpgradeConfigurationCommandInput,
  type UpdateSelfUpgradeConfigurationCommandOutput,
  UpdateSelfUpgradeConfigurationCommand,
} from "./commands/UpdateSelfUpgradeConfigurationCommand";
import {
  type UpdateSpaceCommandInput,
  type UpdateSpaceCommandOutput,
  UpdateSpaceCommand,
} from "./commands/UpdateSpaceCommand";
import {
  type UpdateSpacePermissionsCommandInput,
  type UpdateSpacePermissionsCommandOutput,
  UpdateSpacePermissionsCommand,
} from "./commands/UpdateSpacePermissionsCommand";
import {
  type UpdateSpaceResourcesCommandInput,
  type UpdateSpaceResourcesCommandOutput,
  UpdateSpaceResourcesCommand,
} from "./commands/UpdateSpaceResourcesCommand";
import {
  type UpdateSPICECapacityConfigurationCommandInput,
  type UpdateSPICECapacityConfigurationCommandOutput,
  UpdateSPICECapacityConfigurationCommand,
} from "./commands/UpdateSPICECapacityConfigurationCommand";
import {
  type UpdateTemplateAliasCommandInput,
  type UpdateTemplateAliasCommandOutput,
  UpdateTemplateAliasCommand,
} from "./commands/UpdateTemplateAliasCommand";
import {
  type UpdateTemplateCommandInput,
  type UpdateTemplateCommandOutput,
  UpdateTemplateCommand,
} from "./commands/UpdateTemplateCommand";
import {
  type UpdateTemplatePermissionsCommandInput,
  type UpdateTemplatePermissionsCommandOutput,
  UpdateTemplatePermissionsCommand,
} from "./commands/UpdateTemplatePermissionsCommand";
import {
  type UpdateThemeAliasCommandInput,
  type UpdateThemeAliasCommandOutput,
  UpdateThemeAliasCommand,
} from "./commands/UpdateThemeAliasCommand";
import {
  type UpdateThemeCommandInput,
  type UpdateThemeCommandOutput,
  UpdateThemeCommand,
} from "./commands/UpdateThemeCommand";
import {
  type UpdateThemePermissionsCommandInput,
  type UpdateThemePermissionsCommandOutput,
  UpdateThemePermissionsCommand,
} from "./commands/UpdateThemePermissionsCommand";
import {
  type UpdateTopicCommandInput,
  type UpdateTopicCommandOutput,
  UpdateTopicCommand,
} from "./commands/UpdateTopicCommand";
import {
  type UpdateTopicPermissionsCommandInput,
  type UpdateTopicPermissionsCommandOutput,
  UpdateTopicPermissionsCommand,
} from "./commands/UpdateTopicPermissionsCommand";
import {
  type UpdateTopicPermissionsV2CommandInput,
  type UpdateTopicPermissionsV2CommandOutput,
  UpdateTopicPermissionsV2Command,
} from "./commands/UpdateTopicPermissionsV2Command";
import {
  type UpdateTopicRefreshScheduleCommandInput,
  type UpdateTopicRefreshScheduleCommandOutput,
  UpdateTopicRefreshScheduleCommand,
} from "./commands/UpdateTopicRefreshScheduleCommand";
import {
  type UpdateTopicV2CommandInput,
  type UpdateTopicV2CommandOutput,
  UpdateTopicV2Command,
} from "./commands/UpdateTopicV2Command";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import {
  type UpdateUserCustomPermissionCommandInput,
  type UpdateUserCustomPermissionCommandOutput,
  UpdateUserCustomPermissionCommand,
} from "./commands/UpdateUserCustomPermissionCommand";
import {
  type UpdateVPCConnectionCommandInput,
  type UpdateVPCConnectionCommandOutput,
  UpdateVPCConnectionCommand,
} from "./commands/UpdateVPCConnectionCommand";
import { paginateDescribeFolderPermissions } from "./pagination/DescribeFolderPermissionsPaginator";
import { paginateDescribeFolderResolvedPermissions } from "./pagination/DescribeFolderResolvedPermissionsPaginator";
import { paginateListActionConnectors } from "./pagination/ListActionConnectorsPaginator";
import { paginateListAnalyses } from "./pagination/ListAnalysesPaginator";
import { paginateListApprovalPolicies } from "./pagination/ListApprovalPoliciesPaginator";
import { paginateListApps } from "./pagination/ListAppsPaginator";
import { paginateListAssetBundleExportJobs } from "./pagination/ListAssetBundleExportJobsPaginator";
import { paginateListAssetBundleImportJobs } from "./pagination/ListAssetBundleImportJobsPaginator";
import { paginateListBrands } from "./pagination/ListBrandsPaginator";
import { paginateListCustomPermissions } from "./pagination/ListCustomPermissionsPaginator";
import { paginateListDashboards } from "./pagination/ListDashboardsPaginator";
import { paginateListDashboardVersions } from "./pagination/ListDashboardVersionsPaginator";
import { paginateListDataSets } from "./pagination/ListDataSetsPaginator";
import { paginateListDataSources } from "./pagination/ListDataSourcesPaginator";
import { paginateListDlpSettings } from "./pagination/ListDlpSettingsPaginator";
import { paginateListFlows } from "./pagination/ListFlowsPaginator";
import { paginateListFolderMembers } from "./pagination/ListFolderMembersPaginator";
import { paginateListFoldersForResource } from "./pagination/ListFoldersForResourcePaginator";
import { paginateListFolders } from "./pagination/ListFoldersPaginator";
import { paginateListGroupMemberships } from "./pagination/ListGroupMembershipsPaginator";
import { paginateListGroups } from "./pagination/ListGroupsPaginator";
import { paginateListIAMPolicyAssignmentsForUser } from "./pagination/ListIAMPolicyAssignmentsForUserPaginator";
import { paginateListIAMPolicyAssignments } from "./pagination/ListIAMPolicyAssignmentsPaginator";
import { paginateListIngestions } from "./pagination/ListIngestionsPaginator";
import { paginateListKnowledgeBases } from "./pagination/ListKnowledgeBasesPaginator";
import { paginateListLimitsProfiles } from "./pagination/ListLimitsProfilesPaginator";
import { paginateListNamespaces } from "./pagination/ListNamespacesPaginator";
import { paginateListOAuthClientApplications } from "./pagination/ListOAuthClientApplicationsPaginator";
import { paginateListRoleMemberships } from "./pagination/ListRoleMembershipsPaginator";
import { paginateListTemplateAliases } from "./pagination/ListTemplateAliasesPaginator";
import { paginateListTemplates } from "./pagination/ListTemplatesPaginator";
import { paginateListTemplateVersions } from "./pagination/ListTemplateVersionsPaginator";
import { paginateListThemes } from "./pagination/ListThemesPaginator";
import { paginateListThemeVersions } from "./pagination/ListThemeVersionsPaginator";
import { paginateListTopics } from "./pagination/ListTopicsPaginator";
import { paginateListTopicsV2 } from "./pagination/ListTopicsV2Paginator";
import { paginateListUserGroups } from "./pagination/ListUserGroupsPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";
import { paginateListVPCConnections } from "./pagination/ListVPCConnectionsPaginator";
import { paginateSearchActionConnectors } from "./pagination/SearchActionConnectorsPaginator";
import { paginateSearchAnalyses } from "./pagination/SearchAnalysesPaginator";
import { paginateSearchApps } from "./pagination/SearchAppsPaginator";
import { paginateSearchDashboards } from "./pagination/SearchDashboardsPaginator";
import { paginateSearchDataSets } from "./pagination/SearchDataSetsPaginator";
import { paginateSearchDataSources } from "./pagination/SearchDataSourcesPaginator";
import { paginateSearchFlows } from "./pagination/SearchFlowsPaginator";
import { paginateSearchFolders } from "./pagination/SearchFoldersPaginator";
import { paginateSearchGroups } from "./pagination/SearchGroupsPaginator";
import { paginateSearchKnowledgeBases } from "./pagination/SearchKnowledgeBasesPaginator";
import { paginateSearchTopics } from "./pagination/SearchTopicsPaginator";
import { paginateSearchTopicsV2 } from "./pagination/SearchTopicsV2Paginator";
import { QuickSightClient } from "./QuickSightClient";

const commands = {
  BatchCreateTopicReviewedAnswerCommand,
  BatchDeleteKnowledgeBaseCommand,
  BatchDeleteTopicReviewedAnswerCommand,
  BatchDescribeUserLimitsCommand,
  CancelIngestionCommand,
  CreateAccountCustomizationCommand,
  CreateAccountSubscriptionCommand,
  CreateActionConnectorCommand,
  CreateAgentCommand,
  CreateAnalysisCommand,
  CreateApprovalPolicyCommand,
  CreateBrandCommand,
  CreateCustomPermissionsCommand,
  CreateDashboardCommand,
  CreateDataSetCommand,
  CreateDataSourceCommand,
  CreateDlpSettingCommand,
  CreateFlowCommand,
  CreateFolderCommand,
  CreateFolderMembershipCommand,
  CreateGroupCommand,
  CreateGroupMembershipCommand,
  CreateIAMPolicyAssignmentCommand,
  CreateIngestionCommand,
  CreateKnowledgeBaseCommand,
  CreateLimitsProfileCommand,
  CreateNamespaceCommand,
  CreateOAuthClientApplicationCommand,
  CreateRefreshScheduleCommand,
  CreateRoleMembershipCommand,
  CreateSpaceCommand,
  CreateTemplateCommand,
  CreateTemplateAliasCommand,
  CreateThemeCommand,
  CreateThemeAliasCommand,
  CreateTopicCommand,
  CreateTopicRefreshScheduleCommand,
  CreateTopicV2Command,
  CreateVPCConnectionCommand,
  DeleteAccountCustomizationCommand,
  DeleteAccountCustomPermissionCommand,
  DeleteAccountSubscriptionCommand,
  DeleteActionConnectorCommand,
  DeleteAgentCommand,
  DeleteAnalysisCommand,
  DeleteAppCommand,
  DeleteApprovalPolicyCommand,
  DeleteBrandCommand,
  DeleteBrandAssignmentCommand,
  DeleteCustomPermissionsCommand,
  DeleteDashboardCommand,
  DeleteDataSetCommand,
  DeleteDataSetRefreshPropertiesCommand,
  DeleteDataSourceCommand,
  DeleteDefaultQBusinessApplicationCommand,
  DeleteDlpSettingCommand,
  DeleteFlowCommand,
  DeleteFolderCommand,
  DeleteFolderMembershipCommand,
  DeleteGroupCommand,
  DeleteGroupMembershipCommand,
  DeleteIAMPolicyAssignmentCommand,
  DeleteIdentityPropagationConfigCommand,
  DeleteKnowledgeBaseCommand,
  DeleteLimitsProfileCommand,
  DeleteNamespaceCommand,
  DeleteOAuthClientApplicationCommand,
  DeleteRefreshScheduleCommand,
  DeleteRoleCustomPermissionCommand,
  DeleteRoleMembershipCommand,
  DeleteSpaceCommand,
  DeleteTemplateCommand,
  DeleteTemplateAliasCommand,
  DeleteThemeCommand,
  DeleteThemeAliasCommand,
  DeleteTopicCommand,
  DeleteTopicRefreshScheduleCommand,
  DeleteTopicV2Command,
  DeleteUserCommand,
  DeleteUserByPrincipalIdCommand,
  DeleteUserCustomPermissionCommand,
  DeleteVPCConnectionCommand,
  DescribeAccountCustomizationCommand,
  DescribeAccountCustomPermissionCommand,
  DescribeAccountSettingsCommand,
  DescribeAccountSubscriptionCommand,
  DescribeActionConnectorCommand,
  DescribeActionConnectorPermissionsCommand,
  DescribeAgentCommand,
  DescribeAgentPermissionsCommand,
  DescribeAnalysisCommand,
  DescribeAnalysisDefinitionCommand,
  DescribeAnalysisPermissionsCommand,
  DescribeAppCommand,
  DescribeAppPermissionsCommand,
  DescribeApprovalPolicyCommand,
  DescribeAssetBundleExportJobCommand,
  DescribeAssetBundleImportJobCommand,
  DescribeAutomationJobCommand,
  DescribeBrandCommand,
  DescribeBrandAssignmentCommand,
  DescribeBrandPublishedVersionCommand,
  DescribeCustomPermissionsCommand,
  DescribeDashboardCommand,
  DescribeDashboardDefinitionCommand,
  DescribeDashboardPermissionsCommand,
  DescribeDashboardSnapshotJobCommand,
  DescribeDashboardSnapshotJobResultCommand,
  DescribeDashboardsQAConfigurationCommand,
  DescribeDataSetCommand,
  DescribeDataSetPermissionsCommand,
  DescribeDataSetRefreshPropertiesCommand,
  DescribeDataSourceCommand,
  DescribeDataSourcePermissionsCommand,
  DescribeDefaultQBusinessApplicationCommand,
  DescribeDlpSettingCommand,
  DescribeFlowCommand,
  DescribeFolderCommand,
  DescribeFolderPermissionsCommand,
  DescribeFolderResolvedPermissionsCommand,
  DescribeGroupCommand,
  DescribeGroupMembershipCommand,
  DescribeIAMPolicyAssignmentCommand,
  DescribeIngestionCommand,
  DescribeIpRestrictionCommand,
  DescribeKeyRegistrationCommand,
  DescribeKnowledgeBaseCommand,
  DescribeKnowledgeBasePermissionsCommand,
  DescribeLimitsProfileCommand,
  DescribeNamespaceCommand,
  DescribeOAuthClientApplicationCommand,
  DescribeQPersonalizationConfigurationCommand,
  DescribeQuickSightQSearchConfigurationCommand,
  DescribeRefreshScheduleCommand,
  DescribeRoleCustomPermissionCommand,
  DescribeSelfUpgradeConfigurationCommand,
  DescribeSpaceCommand,
  DescribeSpacePermissionsCommand,
  DescribeTemplateCommand,
  DescribeTemplateAliasCommand,
  DescribeTemplateDefinitionCommand,
  DescribeTemplatePermissionsCommand,
  DescribeThemeCommand,
  DescribeThemeAliasCommand,
  DescribeThemePermissionsCommand,
  DescribeTopicCommand,
  DescribeTopicPermissionsCommand,
  DescribeTopicPermissionsV2Command,
  DescribeTopicRefreshCommand,
  DescribeTopicRefreshScheduleCommand,
  DescribeTopicV2Command,
  DescribeUserCommand,
  DescribeVPCConnectionCommand,
  GenerateEmbedUrlForAnonymousUserCommand,
  GenerateEmbedUrlForRegisteredUserCommand,
  GenerateEmbedUrlForRegisteredUserWithIdentityCommand,
  GetDashboardEmbedUrlCommand,
  GetFlowMetadataCommand,
  GetFlowPermissionsCommand,
  GetIdentityContextCommand,
  GetSessionEmbedUrlCommand,
  ListActionConnectorsCommand,
  ListAgentsCommand,
  ListAnalysesCommand,
  ListApprovalPoliciesCommand,
  ListAppsCommand,
  ListAssetBundleExportJobsCommand,
  ListAssetBundleImportJobsCommand,
  ListBrandsCommand,
  ListCustomPermissionsCommand,
  ListDashboardsCommand,
  ListDashboardVersionsCommand,
  ListDataSetsCommand,
  ListDataSourcesCommand,
  ListDlpSettingsCommand,
  ListFlowsCommand,
  ListFolderMembersCommand,
  ListFoldersCommand,
  ListFoldersForResourceCommand,
  ListGroupMembershipsCommand,
  ListGroupsCommand,
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsForUserCommand,
  ListIdentityPropagationConfigsCommand,
  ListIngestionsCommand,
  ListKnowledgeBasesCommand,
  ListLimitsProfilesCommand,
  ListNamespacesCommand,
  ListOAuthClientApplicationsCommand,
  ListRefreshSchedulesCommand,
  ListRoleMembershipsCommand,
  ListSelfUpgradesCommand,
  ListSpaceResourcesCommand,
  ListSpacesCommand,
  ListTagsForResourceCommand,
  ListTemplateAliasesCommand,
  ListTemplatesCommand,
  ListTemplateVersionsCommand,
  ListThemeAliasesCommand,
  ListThemesCommand,
  ListThemeVersionsCommand,
  ListTopicRefreshSchedulesCommand,
  ListTopicReviewedAnswersCommand,
  ListTopicsCommand,
  ListTopicsV2Command,
  ListUserGroupsCommand,
  ListUsersCommand,
  ListUsersIndexCapacityCommand,
  ListVPCConnectionsCommand,
  PredictQAResultsCommand,
  PutDataSetRefreshPropertiesCommand,
  RegisterUserCommand,
  RestoreAnalysisCommand,
  SearchActionConnectorsCommand,
  SearchAgentsCommand,
  SearchAnalysesCommand,
  SearchAppsCommand,
  SearchDashboardsCommand,
  SearchDataSetsCommand,
  SearchDataSourcesCommand,
  SearchFlowsCommand,
  SearchFoldersCommand,
  SearchGroupsCommand,
  SearchKnowledgeBasesCommand,
  SearchSpacesCommand,
  SearchTopicsCommand,
  SearchTopicsV2Command,
  StartAssetBundleExportJobCommand,
  StartAssetBundleImportJobCommand,
  StartAutomationJobCommand,
  StartDashboardSnapshotJobCommand,
  StartDashboardSnapshotJobScheduleCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountCustomizationCommand,
  UpdateAccountCustomPermissionCommand,
  UpdateAccountSettingsCommand,
  UpdateActionConnectorCommand,
  UpdateActionConnectorPermissionsCommand,
  UpdateAgentCommand,
  UpdateAgentPermissionsCommand,
  UpdateAnalysisCommand,
  UpdateAnalysisPermissionsCommand,
  UpdateApplicationWithTokenExchangeGrantCommand,
  UpdateAppPermissionsCommand,
  UpdateApprovalPolicyCommand,
  UpdateBrandCommand,
  UpdateBrandAssignmentCommand,
  UpdateBrandPublishedVersionCommand,
  UpdateCustomPermissionsCommand,
  UpdateDashboardCommand,
  UpdateDashboardLinksCommand,
  UpdateDashboardPermissionsCommand,
  UpdateDashboardPublishedVersionCommand,
  UpdateDashboardsQAConfigurationCommand,
  UpdateDataSetCommand,
  UpdateDataSetPermissionsCommand,
  UpdateDataSourceCommand,
  UpdateDataSourcePermissionsCommand,
  UpdateDefaultQBusinessApplicationCommand,
  UpdateDlpSettingCommand,
  UpdateFlowCommand,
  UpdateFlowPermissionsCommand,
  UpdateFolderCommand,
  UpdateFolderPermissionsCommand,
  UpdateGroupCommand,
  UpdateIAMPolicyAssignmentCommand,
  UpdateIdentityPropagationConfigCommand,
  UpdateIpRestrictionCommand,
  UpdateKeyRegistrationCommand,
  UpdateKnowledgeBaseCommand,
  UpdateKnowledgeBasePermissionsCommand,
  UpdateLimitsProfileCommand,
  UpdateOAuthClientApplicationCommand,
  UpdatePublicSharingSettingsCommand,
  UpdateQPersonalizationConfigurationCommand,
  UpdateQuickSightQSearchConfigurationCommand,
  UpdateRefreshScheduleCommand,
  UpdateRoleCustomPermissionCommand,
  UpdateSelfUpgradeCommand,
  UpdateSelfUpgradeConfigurationCommand,
  UpdateSpaceCommand,
  UpdateSpacePermissionsCommand,
  UpdateSpaceResourcesCommand,
  UpdateSPICECapacityConfigurationCommand,
  UpdateTemplateCommand,
  UpdateTemplateAliasCommand,
  UpdateTemplatePermissionsCommand,
  UpdateThemeCommand,
  UpdateThemeAliasCommand,
  UpdateThemePermissionsCommand,
  UpdateTopicCommand,
  UpdateTopicPermissionsCommand,
  UpdateTopicPermissionsV2Command,
  UpdateTopicRefreshScheduleCommand,
  UpdateTopicV2Command,
  UpdateUserCommand,
  UpdateUserCustomPermissionCommand,
  UpdateVPCConnectionCommand,
};
const paginators = {
  paginateDescribeFolderPermissions,
  paginateDescribeFolderResolvedPermissions,
  paginateListActionConnectors,
  paginateListAnalyses,
  paginateListApprovalPolicies,
  paginateListApps,
  paginateListAssetBundleExportJobs,
  paginateListAssetBundleImportJobs,
  paginateListBrands,
  paginateListCustomPermissions,
  paginateListDashboards,
  paginateListDashboardVersions,
  paginateListDataSets,
  paginateListDataSources,
  paginateListDlpSettings,
  paginateListFlows,
  paginateListFolderMembers,
  paginateListFolders,
  paginateListFoldersForResource,
  paginateListGroupMemberships,
  paginateListGroups,
  paginateListIAMPolicyAssignments,
  paginateListIAMPolicyAssignmentsForUser,
  paginateListIngestions,
  paginateListKnowledgeBases,
  paginateListLimitsProfiles,
  paginateListNamespaces,
  paginateListOAuthClientApplications,
  paginateListRoleMemberships,
  paginateListTemplateAliases,
  paginateListTemplates,
  paginateListTemplateVersions,
  paginateListThemes,
  paginateListThemeVersions,
  paginateListTopics,
  paginateListTopicsV2,
  paginateListUserGroups,
  paginateListUsers,
  paginateListVPCConnections,
  paginateSearchActionConnectors,
  paginateSearchAnalyses,
  paginateSearchApps,
  paginateSearchDashboards,
  paginateSearchDataSets,
  paginateSearchDataSources,
  paginateSearchFlows,
  paginateSearchFolders,
  paginateSearchGroups,
  paginateSearchKnowledgeBases,
  paginateSearchTopics,
  paginateSearchTopicsV2,
};

/**
 * @public
 */
export interface QuickSightRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface QuickSight {
  /**
   * @see {@link BatchCreateTopicReviewedAnswerCommand}
   */
  batchCreateTopicReviewedAnswer(
    args: BatchCreateTopicReviewedAnswerCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<BatchCreateTopicReviewedAnswerCommandOutput>;
  batchCreateTopicReviewedAnswer(
    args: BatchCreateTopicReviewedAnswerCommandInput,
    cb: (err: any, data?: BatchCreateTopicReviewedAnswerCommandOutput) => void
  ): void;
  batchCreateTopicReviewedAnswer(
    args: BatchCreateTopicReviewedAnswerCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: BatchCreateTopicReviewedAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteKnowledgeBaseCommand}
   */
  batchDeleteKnowledgeBase(
    args: BatchDeleteKnowledgeBaseCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<BatchDeleteKnowledgeBaseCommandOutput>;
  batchDeleteKnowledgeBase(
    args: BatchDeleteKnowledgeBaseCommandInput,
    cb: (err: any, data?: BatchDeleteKnowledgeBaseCommandOutput) => void
  ): void;
  batchDeleteKnowledgeBase(
    args: BatchDeleteKnowledgeBaseCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: BatchDeleteKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteTopicReviewedAnswerCommand}
   */
  batchDeleteTopicReviewedAnswer(
    args: BatchDeleteTopicReviewedAnswerCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<BatchDeleteTopicReviewedAnswerCommandOutput>;
  batchDeleteTopicReviewedAnswer(
    args: BatchDeleteTopicReviewedAnswerCommandInput,
    cb: (err: any, data?: BatchDeleteTopicReviewedAnswerCommandOutput) => void
  ): void;
  batchDeleteTopicReviewedAnswer(
    args: BatchDeleteTopicReviewedAnswerCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: BatchDeleteTopicReviewedAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDescribeUserLimitsCommand}
   */
  batchDescribeUserLimits(
    args: BatchDescribeUserLimitsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<BatchDescribeUserLimitsCommandOutput>;
  batchDescribeUserLimits(
    args: BatchDescribeUserLimitsCommandInput,
    cb: (err: any, data?: BatchDescribeUserLimitsCommandOutput) => void
  ): void;
  batchDescribeUserLimits(
    args: BatchDescribeUserLimitsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: BatchDescribeUserLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelIngestionCommand}
   */
  cancelIngestion(
    args: CancelIngestionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CancelIngestionCommandOutput>;
  cancelIngestion(
    args: CancelIngestionCommandInput,
    cb: (err: any, data?: CancelIngestionCommandOutput) => void
  ): void;
  cancelIngestion(
    args: CancelIngestionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CancelIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountCustomizationCommand}
   */
  createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateAccountCustomizationCommandOutput>;
  createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void
  ): void;
  createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountSubscriptionCommand}
   */
  createAccountSubscription(
    args: CreateAccountSubscriptionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateAccountSubscriptionCommandOutput>;
  createAccountSubscription(
    args: CreateAccountSubscriptionCommandInput,
    cb: (err: any, data?: CreateAccountSubscriptionCommandOutput) => void
  ): void;
  createAccountSubscription(
    args: CreateAccountSubscriptionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateAccountSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateActionConnectorCommand}
   */
  createActionConnector(
    args: CreateActionConnectorCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateActionConnectorCommandOutput>;
  createActionConnector(
    args: CreateActionConnectorCommandInput,
    cb: (err: any, data?: CreateActionConnectorCommandOutput) => void
  ): void;
  createActionConnector(
    args: CreateActionConnectorCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentCommand}
   */
  createAgent(
    args: CreateAgentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateAgentCommandOutput>;
  createAgent(
    args: CreateAgentCommandInput,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;
  createAgent(
    args: CreateAgentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnalysisCommand}
   */
  createAnalysis(
    args: CreateAnalysisCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateAnalysisCommandOutput>;
  createAnalysis(
    args: CreateAnalysisCommandInput,
    cb: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): void;
  createAnalysis(
    args: CreateAnalysisCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApprovalPolicyCommand}
   */
  createApprovalPolicy(
    args: CreateApprovalPolicyCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateApprovalPolicyCommandOutput>;
  createApprovalPolicy(
    args: CreateApprovalPolicyCommandInput,
    cb: (err: any, data?: CreateApprovalPolicyCommandOutput) => void
  ): void;
  createApprovalPolicy(
    args: CreateApprovalPolicyCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateApprovalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBrandCommand}
   */
  createBrand(
    args: CreateBrandCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateBrandCommandOutput>;
  createBrand(
    args: CreateBrandCommandInput,
    cb: (err: any, data?: CreateBrandCommandOutput) => void
  ): void;
  createBrand(
    args: CreateBrandCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomPermissionsCommand}
   */
  createCustomPermissions(
    args: CreateCustomPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateCustomPermissionsCommandOutput>;
  createCustomPermissions(
    args: CreateCustomPermissionsCommandInput,
    cb: (err: any, data?: CreateCustomPermissionsCommandOutput) => void
  ): void;
  createCustomPermissions(
    args: CreateCustomPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateDashboardCommandOutput>;
  createDashboard(
    args: CreateDashboardCommandInput,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSetCommand}
   */
  createDataSet(
    args: CreateDataSetCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateDataSetCommandOutput>;
  createDataSet(
    args: CreateDataSetCommandInput,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;
  createDataSet(
    args: CreateDataSetCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDlpSettingCommand}
   */
  createDlpSetting(
    args: CreateDlpSettingCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateDlpSettingCommandOutput>;
  createDlpSetting(
    args: CreateDlpSettingCommandInput,
    cb: (err: any, data?: CreateDlpSettingCommandOutput) => void
  ): void;
  createDlpSetting(
    args: CreateDlpSettingCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateDlpSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowCommand}
   */
  createFlow(
    args: CreateFlowCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateFlowCommandOutput>;
  createFlow(
    args: CreateFlowCommandInput,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
  createFlow(
    args: CreateFlowCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFolderCommand}
   */
  createFolder(
    args: CreateFolderCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateFolderCommandOutput>;
  createFolder(
    args: CreateFolderCommandInput,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;
  createFolder(
    args: CreateFolderCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFolderMembershipCommand}
   */
  createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateFolderMembershipCommandOutput>;
  createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    cb: (err: any, data?: CreateFolderMembershipCommandOutput) => void
  ): void;
  createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateFolderMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupMembershipCommand}
   */
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateGroupMembershipCommandOutput>;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIAMPolicyAssignmentCommand}
   */
  createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateIAMPolicyAssignmentCommandOutput>;
  createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIngestionCommand}
   */
  createIngestion(
    args: CreateIngestionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateIngestionCommandOutput>;
  createIngestion(
    args: CreateIngestionCommandInput,
    cb: (err: any, data?: CreateIngestionCommandOutput) => void
  ): void;
  createIngestion(
    args: CreateIngestionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKnowledgeBaseCommand}
   */
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateKnowledgeBaseCommandOutput>;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLimitsProfileCommand}
   */
  createLimitsProfile(
    args: CreateLimitsProfileCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateLimitsProfileCommandOutput>;
  createLimitsProfile(
    args: CreateLimitsProfileCommandInput,
    cb: (err: any, data?: CreateLimitsProfileCommandOutput) => void
  ): void;
  createLimitsProfile(
    args: CreateLimitsProfileCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateLimitsProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNamespaceCommand}
   */
  createNamespace(
    args: CreateNamespaceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateNamespaceCommandOutput>;
  createNamespace(
    args: CreateNamespaceCommandInput,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;
  createNamespace(
    args: CreateNamespaceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOAuthClientApplicationCommand}
   */
  createOAuthClientApplication(
    args: CreateOAuthClientApplicationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateOAuthClientApplicationCommandOutput>;
  createOAuthClientApplication(
    args: CreateOAuthClientApplicationCommandInput,
    cb: (err: any, data?: CreateOAuthClientApplicationCommandOutput) => void
  ): void;
  createOAuthClientApplication(
    args: CreateOAuthClientApplicationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateOAuthClientApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRefreshScheduleCommand}
   */
  createRefreshSchedule(
    args: CreateRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateRefreshScheduleCommandOutput>;
  createRefreshSchedule(
    args: CreateRefreshScheduleCommandInput,
    cb: (err: any, data?: CreateRefreshScheduleCommandOutput) => void
  ): void;
  createRefreshSchedule(
    args: CreateRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoleMembershipCommand}
   */
  createRoleMembership(
    args: CreateRoleMembershipCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateRoleMembershipCommandOutput>;
  createRoleMembership(
    args: CreateRoleMembershipCommandInput,
    cb: (err: any, data?: CreateRoleMembershipCommandOutput) => void
  ): void;
  createRoleMembership(
    args: CreateRoleMembershipCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateRoleMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSpaceCommand}
   */
  createSpace(
    args: CreateSpaceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateSpaceCommandOutput>;
  createSpace(
    args: CreateSpaceCommandInput,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;
  createSpace(
    args: CreateSpaceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateAliasCommand}
   */
  createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateTemplateAliasCommandOutput>;
  createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): void;
  createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThemeCommand}
   */
  createTheme(
    args: CreateThemeCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateThemeCommandOutput>;
  createTheme(
    args: CreateThemeCommandInput,
    cb: (err: any, data?: CreateThemeCommandOutput) => void
  ): void;
  createTheme(
    args: CreateThemeCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThemeAliasCommand}
   */
  createThemeAlias(
    args: CreateThemeAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateThemeAliasCommandOutput>;
  createThemeAlias(
    args: CreateThemeAliasCommandInput,
    cb: (err: any, data?: CreateThemeAliasCommandOutput) => void
  ): void;
  createThemeAlias(
    args: CreateThemeAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateTopicCommandOutput>;
  createTopic(
    args: CreateTopicCommandInput,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;
  createTopic(
    args: CreateTopicCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicRefreshScheduleCommand}
   */
  createTopicRefreshSchedule(
    args: CreateTopicRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateTopicRefreshScheduleCommandOutput>;
  createTopicRefreshSchedule(
    args: CreateTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: CreateTopicRefreshScheduleCommandOutput) => void
  ): void;
  createTopicRefreshSchedule(
    args: CreateTopicRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateTopicRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicV2Command}
   */
  createTopicV2(
    args: CreateTopicV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateTopicV2CommandOutput>;
  createTopicV2(
    args: CreateTopicV2CommandInput,
    cb: (err: any, data?: CreateTopicV2CommandOutput) => void
  ): void;
  createTopicV2(
    args: CreateTopicV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateTopicV2CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVPCConnectionCommand}
   */
  createVPCConnection(
    args: CreateVPCConnectionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<CreateVPCConnectionCommandOutput>;
  createVPCConnection(
    args: CreateVPCConnectionCommandInput,
    cb: (err: any, data?: CreateVPCConnectionCommandOutput) => void
  ): void;
  createVPCConnection(
    args: CreateVPCConnectionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: CreateVPCConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountCustomizationCommand}
   */
  deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteAccountCustomizationCommandOutput>;
  deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void
  ): void;
  deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountCustomPermissionCommand}
   */
  deleteAccountCustomPermission(
    args: DeleteAccountCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteAccountCustomPermissionCommandOutput>;
  deleteAccountCustomPermission(
    args: DeleteAccountCustomPermissionCommandInput,
    cb: (err: any, data?: DeleteAccountCustomPermissionCommandOutput) => void
  ): void;
  deleteAccountCustomPermission(
    args: DeleteAccountCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteAccountCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountSubscriptionCommand}
   */
  deleteAccountSubscription(
    args: DeleteAccountSubscriptionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteAccountSubscriptionCommandOutput>;
  deleteAccountSubscription(
    args: DeleteAccountSubscriptionCommandInput,
    cb: (err: any, data?: DeleteAccountSubscriptionCommandOutput) => void
  ): void;
  deleteAccountSubscription(
    args: DeleteAccountSubscriptionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteAccountSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteActionConnectorCommand}
   */
  deleteActionConnector(
    args: DeleteActionConnectorCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteActionConnectorCommandOutput>;
  deleteActionConnector(
    args: DeleteActionConnectorCommandInput,
    cb: (err: any, data?: DeleteActionConnectorCommandOutput) => void
  ): void;
  deleteActionConnector(
    args: DeleteActionConnectorCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentCommand}
   */
  deleteAgent(
    args: DeleteAgentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteAgentCommandOutput>;
  deleteAgent(
    args: DeleteAgentCommandInput,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;
  deleteAgent(
    args: DeleteAgentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnalysisCommand}
   */
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteAnalysisCommandOutput>;
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    cb: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): void;
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(
    args: DeleteAppCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteAppCommandOutput>;
  deleteApp(
    args: DeleteAppCommandInput,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApprovalPolicyCommand}
   */
  deleteApprovalPolicy(
    args: DeleteApprovalPolicyCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteApprovalPolicyCommandOutput>;
  deleteApprovalPolicy(
    args: DeleteApprovalPolicyCommandInput,
    cb: (err: any, data?: DeleteApprovalPolicyCommandOutput) => void
  ): void;
  deleteApprovalPolicy(
    args: DeleteApprovalPolicyCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteApprovalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrandCommand}
   */
  deleteBrand(
    args: DeleteBrandCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteBrandCommandOutput>;
  deleteBrand(
    args: DeleteBrandCommandInput,
    cb: (err: any, data?: DeleteBrandCommandOutput) => void
  ): void;
  deleteBrand(
    args: DeleteBrandCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrandAssignmentCommand}
   */
  deleteBrandAssignment(
    args: DeleteBrandAssignmentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteBrandAssignmentCommandOutput>;
  deleteBrandAssignment(
    args: DeleteBrandAssignmentCommandInput,
    cb: (err: any, data?: DeleteBrandAssignmentCommandOutput) => void
  ): void;
  deleteBrandAssignment(
    args: DeleteBrandAssignmentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteBrandAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomPermissionsCommand}
   */
  deleteCustomPermissions(
    args: DeleteCustomPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteCustomPermissionsCommandOutput>;
  deleteCustomPermissions(
    args: DeleteCustomPermissionsCommandInput,
    cb: (err: any, data?: DeleteCustomPermissionsCommandOutput) => void
  ): void;
  deleteCustomPermissions(
    args: DeleteCustomPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteDashboardCommandOutput>;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSetCommand}
   */
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteDataSetCommandOutput>;
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSetRefreshPropertiesCommand}
   */
  deleteDataSetRefreshProperties(
    args: DeleteDataSetRefreshPropertiesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteDataSetRefreshPropertiesCommandOutput>;
  deleteDataSetRefreshProperties(
    args: DeleteDataSetRefreshPropertiesCommandInput,
    cb: (err: any, data?: DeleteDataSetRefreshPropertiesCommandOutput) => void
  ): void;
  deleteDataSetRefreshProperties(
    args: DeleteDataSetRefreshPropertiesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteDataSetRefreshPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDefaultQBusinessApplicationCommand}
   */
  deleteDefaultQBusinessApplication(
    args: DeleteDefaultQBusinessApplicationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteDefaultQBusinessApplicationCommandOutput>;
  deleteDefaultQBusinessApplication(
    args: DeleteDefaultQBusinessApplicationCommandInput,
    cb: (err: any, data?: DeleteDefaultQBusinessApplicationCommandOutput) => void
  ): void;
  deleteDefaultQBusinessApplication(
    args: DeleteDefaultQBusinessApplicationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteDefaultQBusinessApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDlpSettingCommand}
   */
  deleteDlpSetting(
    args: DeleteDlpSettingCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteDlpSettingCommandOutput>;
  deleteDlpSetting(
    args: DeleteDlpSettingCommandInput,
    cb: (err: any, data?: DeleteDlpSettingCommandOutput) => void
  ): void;
  deleteDlpSetting(
    args: DeleteDlpSettingCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteDlpSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowCommand}
   */
  deleteFlow(
    args: DeleteFlowCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteFlowCommandOutput>;
  deleteFlow(
    args: DeleteFlowCommandInput,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
  deleteFlow(
    args: DeleteFlowCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFolderCommand}
   */
  deleteFolder(
    args: DeleteFolderCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteFolderCommandOutput>;
  deleteFolder(
    args: DeleteFolderCommandInput,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;
  deleteFolder(
    args: DeleteFolderCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFolderMembershipCommand}
   */
  deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteFolderMembershipCommandOutput>;
  deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    cb: (err: any, data?: DeleteFolderMembershipCommandOutput) => void
  ): void;
  deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteFolderMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupMembershipCommand}
   */
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteGroupMembershipCommandOutput>;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIAMPolicyAssignmentCommand}
   */
  deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteIAMPolicyAssignmentCommandOutput>;
  deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): void;
  deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityPropagationConfigCommand}
   */
  deleteIdentityPropagationConfig(
    args: DeleteIdentityPropagationConfigCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteIdentityPropagationConfigCommandOutput>;
  deleteIdentityPropagationConfig(
    args: DeleteIdentityPropagationConfigCommandInput,
    cb: (err: any, data?: DeleteIdentityPropagationConfigCommandOutput) => void
  ): void;
  deleteIdentityPropagationConfig(
    args: DeleteIdentityPropagationConfigCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteIdentityPropagationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKnowledgeBaseCommand}
   */
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteKnowledgeBaseCommandOutput>;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLimitsProfileCommand}
   */
  deleteLimitsProfile(
    args: DeleteLimitsProfileCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteLimitsProfileCommandOutput>;
  deleteLimitsProfile(
    args: DeleteLimitsProfileCommandInput,
    cb: (err: any, data?: DeleteLimitsProfileCommandOutput) => void
  ): void;
  deleteLimitsProfile(
    args: DeleteLimitsProfileCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteLimitsProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOAuthClientApplicationCommand}
   */
  deleteOAuthClientApplication(
    args: DeleteOAuthClientApplicationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteOAuthClientApplicationCommandOutput>;
  deleteOAuthClientApplication(
    args: DeleteOAuthClientApplicationCommandInput,
    cb: (err: any, data?: DeleteOAuthClientApplicationCommandOutput) => void
  ): void;
  deleteOAuthClientApplication(
    args: DeleteOAuthClientApplicationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteOAuthClientApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRefreshScheduleCommand}
   */
  deleteRefreshSchedule(
    args: DeleteRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteRefreshScheduleCommandOutput>;
  deleteRefreshSchedule(
    args: DeleteRefreshScheduleCommandInput,
    cb: (err: any, data?: DeleteRefreshScheduleCommandOutput) => void
  ): void;
  deleteRefreshSchedule(
    args: DeleteRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoleCustomPermissionCommand}
   */
  deleteRoleCustomPermission(
    args: DeleteRoleCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteRoleCustomPermissionCommandOutput>;
  deleteRoleCustomPermission(
    args: DeleteRoleCustomPermissionCommandInput,
    cb: (err: any, data?: DeleteRoleCustomPermissionCommandOutput) => void
  ): void;
  deleteRoleCustomPermission(
    args: DeleteRoleCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteRoleCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoleMembershipCommand}
   */
  deleteRoleMembership(
    args: DeleteRoleMembershipCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteRoleMembershipCommandOutput>;
  deleteRoleMembership(
    args: DeleteRoleMembershipCommandInput,
    cb: (err: any, data?: DeleteRoleMembershipCommandOutput) => void
  ): void;
  deleteRoleMembership(
    args: DeleteRoleMembershipCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteRoleMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpaceCommand}
   */
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteSpaceCommandOutput>;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateAliasCommand}
   */
  deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteTemplateAliasCommandOutput>;
  deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): void;
  deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThemeCommand}
   */
  deleteTheme(
    args: DeleteThemeCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteThemeCommandOutput>;
  deleteTheme(
    args: DeleteThemeCommandInput,
    cb: (err: any, data?: DeleteThemeCommandOutput) => void
  ): void;
  deleteTheme(
    args: DeleteThemeCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThemeAliasCommand}
   */
  deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteThemeAliasCommandOutput>;
  deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void
  ): void;
  deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteTopicCommandOutput>;
  deleteTopic(
    args: DeleteTopicCommandInput,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;
  deleteTopic(
    args: DeleteTopicCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicRefreshScheduleCommand}
   */
  deleteTopicRefreshSchedule(
    args: DeleteTopicRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteTopicRefreshScheduleCommandOutput>;
  deleteTopicRefreshSchedule(
    args: DeleteTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: DeleteTopicRefreshScheduleCommandOutput) => void
  ): void;
  deleteTopicRefreshSchedule(
    args: DeleteTopicRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteTopicRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicV2Command}
   */
  deleteTopicV2(
    args: DeleteTopicV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteTopicV2CommandOutput>;
  deleteTopicV2(
    args: DeleteTopicV2CommandInput,
    cb: (err: any, data?: DeleteTopicV2CommandOutput) => void
  ): void;
  deleteTopicV2(
    args: DeleteTopicV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteTopicV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserByPrincipalIdCommand}
   */
  deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteUserByPrincipalIdCommandOutput>;
  deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): void;
  deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCustomPermissionCommand}
   */
  deleteUserCustomPermission(
    args: DeleteUserCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteUserCustomPermissionCommandOutput>;
  deleteUserCustomPermission(
    args: DeleteUserCustomPermissionCommandInput,
    cb: (err: any, data?: DeleteUserCustomPermissionCommandOutput) => void
  ): void;
  deleteUserCustomPermission(
    args: DeleteUserCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteUserCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVPCConnectionCommand}
   */
  deleteVPCConnection(
    args: DeleteVPCConnectionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DeleteVPCConnectionCommandOutput>;
  deleteVPCConnection(
    args: DeleteVPCConnectionCommandInput,
    cb: (err: any, data?: DeleteVPCConnectionCommandOutput) => void
  ): void;
  deleteVPCConnection(
    args: DeleteVPCConnectionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DeleteVPCConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountCustomizationCommand}
   */
  describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAccountCustomizationCommandOutput>;
  describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void
  ): void;
  describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountCustomPermissionCommand}
   */
  describeAccountCustomPermission(
    args: DescribeAccountCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAccountCustomPermissionCommandOutput>;
  describeAccountCustomPermission(
    args: DescribeAccountCustomPermissionCommandInput,
    cb: (err: any, data?: DescribeAccountCustomPermissionCommandOutput) => void
  ): void;
  describeAccountCustomPermission(
    args: DescribeAccountCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAccountCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountSettingsCommand}
   */
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAccountSettingsCommandOutput>;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountSubscriptionCommand}
   */
  describeAccountSubscription(
    args: DescribeAccountSubscriptionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAccountSubscriptionCommandOutput>;
  describeAccountSubscription(
    args: DescribeAccountSubscriptionCommandInput,
    cb: (err: any, data?: DescribeAccountSubscriptionCommandOutput) => void
  ): void;
  describeAccountSubscription(
    args: DescribeAccountSubscriptionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAccountSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActionConnectorCommand}
   */
  describeActionConnector(
    args: DescribeActionConnectorCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeActionConnectorCommandOutput>;
  describeActionConnector(
    args: DescribeActionConnectorCommandInput,
    cb: (err: any, data?: DescribeActionConnectorCommandOutput) => void
  ): void;
  describeActionConnector(
    args: DescribeActionConnectorCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActionConnectorPermissionsCommand}
   */
  describeActionConnectorPermissions(
    args: DescribeActionConnectorPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeActionConnectorPermissionsCommandOutput>;
  describeActionConnectorPermissions(
    args: DescribeActionConnectorPermissionsCommandInput,
    cb: (err: any, data?: DescribeActionConnectorPermissionsCommandOutput) => void
  ): void;
  describeActionConnectorPermissions(
    args: DescribeActionConnectorPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeActionConnectorPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgentCommand}
   */
  describeAgent(
    args: DescribeAgentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAgentCommandOutput>;
  describeAgent(
    args: DescribeAgentCommandInput,
    cb: (err: any, data?: DescribeAgentCommandOutput) => void
  ): void;
  describeAgent(
    args: DescribeAgentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgentPermissionsCommand}
   */
  describeAgentPermissions(
    args: DescribeAgentPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAgentPermissionsCommandOutput>;
  describeAgentPermissions(
    args: DescribeAgentPermissionsCommandInput,
    cb: (err: any, data?: DescribeAgentPermissionsCommandOutput) => void
  ): void;
  describeAgentPermissions(
    args: DescribeAgentPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAgentPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnalysisCommand}
   */
  describeAnalysis(
    args: DescribeAnalysisCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAnalysisCommandOutput>;
  describeAnalysis(
    args: DescribeAnalysisCommandInput,
    cb: (err: any, data?: DescribeAnalysisCommandOutput) => void
  ): void;
  describeAnalysis(
    args: DescribeAnalysisCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnalysisDefinitionCommand}
   */
  describeAnalysisDefinition(
    args: DescribeAnalysisDefinitionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAnalysisDefinitionCommandOutput>;
  describeAnalysisDefinition(
    args: DescribeAnalysisDefinitionCommandInput,
    cb: (err: any, data?: DescribeAnalysisDefinitionCommandOutput) => void
  ): void;
  describeAnalysisDefinition(
    args: DescribeAnalysisDefinitionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAnalysisDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnalysisPermissionsCommand}
   */
  describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAnalysisPermissionsCommandOutput>;
  describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void
  ): void;
  describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppCommand}
   */
  describeApp(
    args: DescribeAppCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAppCommandOutput>;
  describeApp(
    args: DescribeAppCommandInput,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;
  describeApp(
    args: DescribeAppCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppPermissionsCommand}
   */
  describeAppPermissions(
    args: DescribeAppPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAppPermissionsCommandOutput>;
  describeAppPermissions(
    args: DescribeAppPermissionsCommandInput,
    cb: (err: any, data?: DescribeAppPermissionsCommandOutput) => void
  ): void;
  describeAppPermissions(
    args: DescribeAppPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAppPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApprovalPolicyCommand}
   */
  describeApprovalPolicy(
    args: DescribeApprovalPolicyCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeApprovalPolicyCommandOutput>;
  describeApprovalPolicy(
    args: DescribeApprovalPolicyCommandInput,
    cb: (err: any, data?: DescribeApprovalPolicyCommandOutput) => void
  ): void;
  describeApprovalPolicy(
    args: DescribeApprovalPolicyCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeApprovalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetBundleExportJobCommand}
   */
  describeAssetBundleExportJob(
    args: DescribeAssetBundleExportJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAssetBundleExportJobCommandOutput>;
  describeAssetBundleExportJob(
    args: DescribeAssetBundleExportJobCommandInput,
    cb: (err: any, data?: DescribeAssetBundleExportJobCommandOutput) => void
  ): void;
  describeAssetBundleExportJob(
    args: DescribeAssetBundleExportJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAssetBundleExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetBundleImportJobCommand}
   */
  describeAssetBundleImportJob(
    args: DescribeAssetBundleImportJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAssetBundleImportJobCommandOutput>;
  describeAssetBundleImportJob(
    args: DescribeAssetBundleImportJobCommandInput,
    cb: (err: any, data?: DescribeAssetBundleImportJobCommandOutput) => void
  ): void;
  describeAssetBundleImportJob(
    args: DescribeAssetBundleImportJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAssetBundleImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutomationJobCommand}
   */
  describeAutomationJob(
    args: DescribeAutomationJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeAutomationJobCommandOutput>;
  describeAutomationJob(
    args: DescribeAutomationJobCommandInput,
    cb: (err: any, data?: DescribeAutomationJobCommandOutput) => void
  ): void;
  describeAutomationJob(
    args: DescribeAutomationJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeAutomationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrandCommand}
   */
  describeBrand(
    args: DescribeBrandCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeBrandCommandOutput>;
  describeBrand(
    args: DescribeBrandCommandInput,
    cb: (err: any, data?: DescribeBrandCommandOutput) => void
  ): void;
  describeBrand(
    args: DescribeBrandCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrandAssignmentCommand}
   */
  describeBrandAssignment(
    args: DescribeBrandAssignmentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeBrandAssignmentCommandOutput>;
  describeBrandAssignment(
    args: DescribeBrandAssignmentCommandInput,
    cb: (err: any, data?: DescribeBrandAssignmentCommandOutput) => void
  ): void;
  describeBrandAssignment(
    args: DescribeBrandAssignmentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeBrandAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrandPublishedVersionCommand}
   */
  describeBrandPublishedVersion(
    args: DescribeBrandPublishedVersionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeBrandPublishedVersionCommandOutput>;
  describeBrandPublishedVersion(
    args: DescribeBrandPublishedVersionCommandInput,
    cb: (err: any, data?: DescribeBrandPublishedVersionCommandOutput) => void
  ): void;
  describeBrandPublishedVersion(
    args: DescribeBrandPublishedVersionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeBrandPublishedVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomPermissionsCommand}
   */
  describeCustomPermissions(
    args: DescribeCustomPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeCustomPermissionsCommandOutput>;
  describeCustomPermissions(
    args: DescribeCustomPermissionsCommandInput,
    cb: (err: any, data?: DescribeCustomPermissionsCommandOutput) => void
  ): void;
  describeCustomPermissions(
    args: DescribeCustomPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardCommand}
   */
  describeDashboard(
    args: DescribeDashboardCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDashboardCommandOutput>;
  describeDashboard(
    args: DescribeDashboardCommandInput,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;
  describeDashboard(
    args: DescribeDashboardCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardDefinitionCommand}
   */
  describeDashboardDefinition(
    args: DescribeDashboardDefinitionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDashboardDefinitionCommandOutput>;
  describeDashboardDefinition(
    args: DescribeDashboardDefinitionCommandInput,
    cb: (err: any, data?: DescribeDashboardDefinitionCommandOutput) => void
  ): void;
  describeDashboardDefinition(
    args: DescribeDashboardDefinitionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDashboardDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardPermissionsCommand}
   */
  describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDashboardPermissionsCommandOutput>;
  describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): void;
  describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardSnapshotJobCommand}
   */
  describeDashboardSnapshotJob(
    args: DescribeDashboardSnapshotJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDashboardSnapshotJobCommandOutput>;
  describeDashboardSnapshotJob(
    args: DescribeDashboardSnapshotJobCommandInput,
    cb: (err: any, data?: DescribeDashboardSnapshotJobCommandOutput) => void
  ): void;
  describeDashboardSnapshotJob(
    args: DescribeDashboardSnapshotJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDashboardSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardSnapshotJobResultCommand}
   */
  describeDashboardSnapshotJobResult(
    args: DescribeDashboardSnapshotJobResultCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDashboardSnapshotJobResultCommandOutput>;
  describeDashboardSnapshotJobResult(
    args: DescribeDashboardSnapshotJobResultCommandInput,
    cb: (err: any, data?: DescribeDashboardSnapshotJobResultCommandOutput) => void
  ): void;
  describeDashboardSnapshotJobResult(
    args: DescribeDashboardSnapshotJobResultCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDashboardSnapshotJobResultCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardsQAConfigurationCommand}
   */
  describeDashboardsQAConfiguration(
    args: DescribeDashboardsQAConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDashboardsQAConfigurationCommandOutput>;
  describeDashboardsQAConfiguration(
    args: DescribeDashboardsQAConfigurationCommandInput,
    cb: (err: any, data?: DescribeDashboardsQAConfigurationCommandOutput) => void
  ): void;
  describeDashboardsQAConfiguration(
    args: DescribeDashboardsQAConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDashboardsQAConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSetCommand}
   */
  describeDataSet(
    args: DescribeDataSetCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDataSetCommandOutput>;
  describeDataSet(
    args: DescribeDataSetCommandInput,
    cb: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): void;
  describeDataSet(
    args: DescribeDataSetCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSetPermissionsCommand}
   */
  describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDataSetPermissionsCommandOutput>;
  describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): void;
  describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSetRefreshPropertiesCommand}
   */
  describeDataSetRefreshProperties(
    args: DescribeDataSetRefreshPropertiesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDataSetRefreshPropertiesCommandOutput>;
  describeDataSetRefreshProperties(
    args: DescribeDataSetRefreshPropertiesCommandInput,
    cb: (err: any, data?: DescribeDataSetRefreshPropertiesCommandOutput) => void
  ): void;
  describeDataSetRefreshProperties(
    args: DescribeDataSetRefreshPropertiesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDataSetRefreshPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourceCommand}
   */
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDataSourceCommandOutput>;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourcePermissionsCommand}
   */
  describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDataSourcePermissionsCommandOutput>;
  describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): void;
  describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultQBusinessApplicationCommand}
   */
  describeDefaultQBusinessApplication(
    args: DescribeDefaultQBusinessApplicationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDefaultQBusinessApplicationCommandOutput>;
  describeDefaultQBusinessApplication(
    args: DescribeDefaultQBusinessApplicationCommandInput,
    cb: (err: any, data?: DescribeDefaultQBusinessApplicationCommandOutput) => void
  ): void;
  describeDefaultQBusinessApplication(
    args: DescribeDefaultQBusinessApplicationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDefaultQBusinessApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDlpSettingCommand}
   */
  describeDlpSetting(
    args: DescribeDlpSettingCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeDlpSettingCommandOutput>;
  describeDlpSetting(
    args: DescribeDlpSettingCommandInput,
    cb: (err: any, data?: DescribeDlpSettingCommandOutput) => void
  ): void;
  describeDlpSetting(
    args: DescribeDlpSettingCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeDlpSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowCommand}
   */
  describeFlow(
    args: DescribeFlowCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeFlowCommandOutput>;
  describeFlow(
    args: DescribeFlowCommandInput,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;
  describeFlow(
    args: DescribeFlowCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderCommand}
   */
  describeFolder(
    args: DescribeFolderCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeFolderCommandOutput>;
  describeFolder(
    args: DescribeFolderCommandInput,
    cb: (err: any, data?: DescribeFolderCommandOutput) => void
  ): void;
  describeFolder(
    args: DescribeFolderCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderPermissionsCommand}
   */
  describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeFolderPermissionsCommandOutput>;
  describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    cb: (err: any, data?: DescribeFolderPermissionsCommandOutput) => void
  ): void;
  describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeFolderPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderResolvedPermissionsCommand}
   */
  describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeFolderResolvedPermissionsCommandOutput>;
  describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    cb: (err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void
  ): void;
  describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupCommand}
   */
  describeGroup(
    args: DescribeGroupCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeGroupCommandOutput>;
  describeGroup(
    args: DescribeGroupCommandInput,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  describeGroup(
    args: DescribeGroupCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupMembershipCommand}
   */
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeGroupMembershipCommandOutput>;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIAMPolicyAssignmentCommand}
   */
  describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeIAMPolicyAssignmentCommandOutput>;
  describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): void;
  describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIngestionCommand}
   */
  describeIngestion(
    args: DescribeIngestionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeIngestionCommandOutput>;
  describeIngestion(
    args: DescribeIngestionCommandInput,
    cb: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): void;
  describeIngestion(
    args: DescribeIngestionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpRestrictionCommand}
   */
  describeIpRestriction(
    args: DescribeIpRestrictionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeIpRestrictionCommandOutput>;
  describeIpRestriction(
    args: DescribeIpRestrictionCommandInput,
    cb: (err: any, data?: DescribeIpRestrictionCommandOutput) => void
  ): void;
  describeIpRestriction(
    args: DescribeIpRestrictionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeIpRestrictionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyRegistrationCommand}
   */
  describeKeyRegistration(
    args: DescribeKeyRegistrationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeKeyRegistrationCommandOutput>;
  describeKeyRegistration(
    args: DescribeKeyRegistrationCommandInput,
    cb: (err: any, data?: DescribeKeyRegistrationCommandOutput) => void
  ): void;
  describeKeyRegistration(
    args: DescribeKeyRegistrationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeKeyRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKnowledgeBaseCommand}
   */
  describeKnowledgeBase(
    args: DescribeKnowledgeBaseCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeKnowledgeBaseCommandOutput>;
  describeKnowledgeBase(
    args: DescribeKnowledgeBaseCommandInput,
    cb: (err: any, data?: DescribeKnowledgeBaseCommandOutput) => void
  ): void;
  describeKnowledgeBase(
    args: DescribeKnowledgeBaseCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKnowledgeBasePermissionsCommand}
   */
  describeKnowledgeBasePermissions(
    args: DescribeKnowledgeBasePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeKnowledgeBasePermissionsCommandOutput>;
  describeKnowledgeBasePermissions(
    args: DescribeKnowledgeBasePermissionsCommandInput,
    cb: (err: any, data?: DescribeKnowledgeBasePermissionsCommandOutput) => void
  ): void;
  describeKnowledgeBasePermissions(
    args: DescribeKnowledgeBasePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeKnowledgeBasePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLimitsProfileCommand}
   */
  describeLimitsProfile(
    args: DescribeLimitsProfileCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeLimitsProfileCommandOutput>;
  describeLimitsProfile(
    args: DescribeLimitsProfileCommandInput,
    cb: (err: any, data?: DescribeLimitsProfileCommandOutput) => void
  ): void;
  describeLimitsProfile(
    args: DescribeLimitsProfileCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeLimitsProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNamespaceCommand}
   */
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeNamespaceCommandOutput>;
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOAuthClientApplicationCommand}
   */
  describeOAuthClientApplication(
    args: DescribeOAuthClientApplicationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeOAuthClientApplicationCommandOutput>;
  describeOAuthClientApplication(
    args: DescribeOAuthClientApplicationCommandInput,
    cb: (err: any, data?: DescribeOAuthClientApplicationCommandOutput) => void
  ): void;
  describeOAuthClientApplication(
    args: DescribeOAuthClientApplicationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeOAuthClientApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQPersonalizationConfigurationCommand}
   */
  describeQPersonalizationConfiguration(
    args: DescribeQPersonalizationConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeQPersonalizationConfigurationCommandOutput>;
  describeQPersonalizationConfiguration(
    args: DescribeQPersonalizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeQPersonalizationConfigurationCommandOutput) => void
  ): void;
  describeQPersonalizationConfiguration(
    args: DescribeQPersonalizationConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeQPersonalizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuickSightQSearchConfigurationCommand}
   */
  describeQuickSightQSearchConfiguration(
    args: DescribeQuickSightQSearchConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeQuickSightQSearchConfigurationCommandOutput>;
  describeQuickSightQSearchConfiguration(
    args: DescribeQuickSightQSearchConfigurationCommandInput,
    cb: (err: any, data?: DescribeQuickSightQSearchConfigurationCommandOutput) => void
  ): void;
  describeQuickSightQSearchConfiguration(
    args: DescribeQuickSightQSearchConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeQuickSightQSearchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRefreshScheduleCommand}
   */
  describeRefreshSchedule(
    args: DescribeRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeRefreshScheduleCommandOutput>;
  describeRefreshSchedule(
    args: DescribeRefreshScheduleCommandInput,
    cb: (err: any, data?: DescribeRefreshScheduleCommandOutput) => void
  ): void;
  describeRefreshSchedule(
    args: DescribeRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRoleCustomPermissionCommand}
   */
  describeRoleCustomPermission(
    args: DescribeRoleCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeRoleCustomPermissionCommandOutput>;
  describeRoleCustomPermission(
    args: DescribeRoleCustomPermissionCommandInput,
    cb: (err: any, data?: DescribeRoleCustomPermissionCommandOutput) => void
  ): void;
  describeRoleCustomPermission(
    args: DescribeRoleCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeRoleCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSelfUpgradeConfigurationCommand}
   */
  describeSelfUpgradeConfiguration(
    args: DescribeSelfUpgradeConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeSelfUpgradeConfigurationCommandOutput>;
  describeSelfUpgradeConfiguration(
    args: DescribeSelfUpgradeConfigurationCommandInput,
    cb: (err: any, data?: DescribeSelfUpgradeConfigurationCommandOutput) => void
  ): void;
  describeSelfUpgradeConfiguration(
    args: DescribeSelfUpgradeConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeSelfUpgradeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpaceCommand}
   */
  describeSpace(
    args: DescribeSpaceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeSpaceCommandOutput>;
  describeSpace(
    args: DescribeSpaceCommandInput,
    cb: (err: any, data?: DescribeSpaceCommandOutput) => void
  ): void;
  describeSpace(
    args: DescribeSpaceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpacePermissionsCommand}
   */
  describeSpacePermissions(
    args: DescribeSpacePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeSpacePermissionsCommandOutput>;
  describeSpacePermissions(
    args: DescribeSpacePermissionsCommandInput,
    cb: (err: any, data?: DescribeSpacePermissionsCommandOutput) => void
  ): void;
  describeSpacePermissions(
    args: DescribeSpacePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeSpacePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplateCommand}
   */
  describeTemplate(
    args: DescribeTemplateCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTemplateCommandOutput>;
  describeTemplate(
    args: DescribeTemplateCommandInput,
    cb: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): void;
  describeTemplate(
    args: DescribeTemplateCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplateAliasCommand}
   */
  describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTemplateAliasCommandOutput>;
  describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): void;
  describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplateDefinitionCommand}
   */
  describeTemplateDefinition(
    args: DescribeTemplateDefinitionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTemplateDefinitionCommandOutput>;
  describeTemplateDefinition(
    args: DescribeTemplateDefinitionCommandInput,
    cb: (err: any, data?: DescribeTemplateDefinitionCommandOutput) => void
  ): void;
  describeTemplateDefinition(
    args: DescribeTemplateDefinitionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTemplateDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplatePermissionsCommand}
   */
  describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTemplatePermissionsCommandOutput>;
  describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): void;
  describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemeCommand}
   */
  describeTheme(
    args: DescribeThemeCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeThemeCommandOutput>;
  describeTheme(
    args: DescribeThemeCommandInput,
    cb: (err: any, data?: DescribeThemeCommandOutput) => void
  ): void;
  describeTheme(
    args: DescribeThemeCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemeAliasCommand}
   */
  describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeThemeAliasCommandOutput>;
  describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void
  ): void;
  describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemePermissionsCommand}
   */
  describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeThemePermissionsCommandOutput>;
  describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void
  ): void;
  describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicCommand}
   */
  describeTopic(
    args: DescribeTopicCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTopicCommandOutput>;
  describeTopic(
    args: DescribeTopicCommandInput,
    cb: (err: any, data?: DescribeTopicCommandOutput) => void
  ): void;
  describeTopic(
    args: DescribeTopicCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicPermissionsCommand}
   */
  describeTopicPermissions(
    args: DescribeTopicPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTopicPermissionsCommandOutput>;
  describeTopicPermissions(
    args: DescribeTopicPermissionsCommandInput,
    cb: (err: any, data?: DescribeTopicPermissionsCommandOutput) => void
  ): void;
  describeTopicPermissions(
    args: DescribeTopicPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTopicPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicPermissionsV2Command}
   */
  describeTopicPermissionsV2(
    args: DescribeTopicPermissionsV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTopicPermissionsV2CommandOutput>;
  describeTopicPermissionsV2(
    args: DescribeTopicPermissionsV2CommandInput,
    cb: (err: any, data?: DescribeTopicPermissionsV2CommandOutput) => void
  ): void;
  describeTopicPermissionsV2(
    args: DescribeTopicPermissionsV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTopicPermissionsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicRefreshCommand}
   */
  describeTopicRefresh(
    args: DescribeTopicRefreshCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTopicRefreshCommandOutput>;
  describeTopicRefresh(
    args: DescribeTopicRefreshCommandInput,
    cb: (err: any, data?: DescribeTopicRefreshCommandOutput) => void
  ): void;
  describeTopicRefresh(
    args: DescribeTopicRefreshCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTopicRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicRefreshScheduleCommand}
   */
  describeTopicRefreshSchedule(
    args: DescribeTopicRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTopicRefreshScheduleCommandOutput>;
  describeTopicRefreshSchedule(
    args: DescribeTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: DescribeTopicRefreshScheduleCommandOutput) => void
  ): void;
  describeTopicRefreshSchedule(
    args: DescribeTopicRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTopicRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicV2Command}
   */
  describeTopicV2(
    args: DescribeTopicV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeTopicV2CommandOutput>;
  describeTopicV2(
    args: DescribeTopicV2CommandInput,
    cb: (err: any, data?: DescribeTopicV2CommandOutput) => void
  ): void;
  describeTopicV2(
    args: DescribeTopicV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeTopicV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeUserCommandOutput>;
  describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVPCConnectionCommand}
   */
  describeVPCConnection(
    args: DescribeVPCConnectionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<DescribeVPCConnectionCommandOutput>;
  describeVPCConnection(
    args: DescribeVPCConnectionCommandInput,
    cb: (err: any, data?: DescribeVPCConnectionCommandOutput) => void
  ): void;
  describeVPCConnection(
    args: DescribeVPCConnectionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: DescribeVPCConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateEmbedUrlForAnonymousUserCommand}
   */
  generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput>;
  generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void
  ): void;
  generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateEmbedUrlForRegisteredUserCommand}
   */
  generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput>;
  generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void
  ): void;
  generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommand}
   */
  generateEmbedUrlForRegisteredUserWithIdentity(
    args: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput>;
  generateEmbedUrlForRegisteredUserWithIdentity(
    args: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput) => void
  ): void;
  generateEmbedUrlForRegisteredUserWithIdentity(
    args: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDashboardEmbedUrlCommand}
   */
  getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GetDashboardEmbedUrlCommandOutput>;
  getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): void;
  getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowMetadataCommand}
   */
  getFlowMetadata(
    args: GetFlowMetadataCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GetFlowMetadataCommandOutput>;
  getFlowMetadata(
    args: GetFlowMetadataCommandInput,
    cb: (err: any, data?: GetFlowMetadataCommandOutput) => void
  ): void;
  getFlowMetadata(
    args: GetFlowMetadataCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GetFlowMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowPermissionsCommand}
   */
  getFlowPermissions(
    args: GetFlowPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GetFlowPermissionsCommandOutput>;
  getFlowPermissions(
    args: GetFlowPermissionsCommandInput,
    cb: (err: any, data?: GetFlowPermissionsCommandOutput) => void
  ): void;
  getFlowPermissions(
    args: GetFlowPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GetFlowPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityContextCommand}
   */
  getIdentityContext(
    args: GetIdentityContextCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GetIdentityContextCommandOutput>;
  getIdentityContext(
    args: GetIdentityContextCommandInput,
    cb: (err: any, data?: GetIdentityContextCommandOutput) => void
  ): void;
  getIdentityContext(
    args: GetIdentityContextCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GetIdentityContextCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionEmbedUrlCommand}
   */
  getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<GetSessionEmbedUrlCommandOutput>;
  getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void
  ): void;
  getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionConnectorsCommand}
   */
  listActionConnectors(
    args: ListActionConnectorsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListActionConnectorsCommandOutput>;
  listActionConnectors(
    args: ListActionConnectorsCommandInput,
    cb: (err: any, data?: ListActionConnectorsCommandOutput) => void
  ): void;
  listActionConnectors(
    args: ListActionConnectorsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListActionConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentsCommand}
   */
  listAgents(
    args: ListAgentsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListAgentsCommandOutput>;
  listAgents(
    args: ListAgentsCommandInput,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;
  listAgents(
    args: ListAgentsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalysesCommand}
   */
  listAnalyses(
    args: ListAnalysesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListAnalysesCommandOutput>;
  listAnalyses(
    args: ListAnalysesCommandInput,
    cb: (err: any, data?: ListAnalysesCommandOutput) => void
  ): void;
  listAnalyses(
    args: ListAnalysesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApprovalPoliciesCommand}
   */
  listApprovalPolicies(): Promise<ListApprovalPoliciesCommandOutput>;
  listApprovalPolicies(
    args: ListApprovalPoliciesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListApprovalPoliciesCommandOutput>;
  listApprovalPolicies(
    args: ListApprovalPoliciesCommandInput,
    cb: (err: any, data?: ListApprovalPoliciesCommandOutput) => void
  ): void;
  listApprovalPolicies(
    args: ListApprovalPoliciesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListApprovalPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsCommand}
   */
  listApps(
    args: ListAppsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListAppsCommandOutput>;
  listApps(
    args: ListAppsCommandInput,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  listApps(
    args: ListAppsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetBundleExportJobsCommand}
   */
  listAssetBundleExportJobs(
    args: ListAssetBundleExportJobsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListAssetBundleExportJobsCommandOutput>;
  listAssetBundleExportJobs(
    args: ListAssetBundleExportJobsCommandInput,
    cb: (err: any, data?: ListAssetBundleExportJobsCommandOutput) => void
  ): void;
  listAssetBundleExportJobs(
    args: ListAssetBundleExportJobsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListAssetBundleExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetBundleImportJobsCommand}
   */
  listAssetBundleImportJobs(
    args: ListAssetBundleImportJobsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListAssetBundleImportJobsCommandOutput>;
  listAssetBundleImportJobs(
    args: ListAssetBundleImportJobsCommandInput,
    cb: (err: any, data?: ListAssetBundleImportJobsCommandOutput) => void
  ): void;
  listAssetBundleImportJobs(
    args: ListAssetBundleImportJobsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListAssetBundleImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrandsCommand}
   */
  listBrands(
    args: ListBrandsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListBrandsCommandOutput>;
  listBrands(
    args: ListBrandsCommandInput,
    cb: (err: any, data?: ListBrandsCommandOutput) => void
  ): void;
  listBrands(
    args: ListBrandsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListBrandsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomPermissionsCommand}
   */
  listCustomPermissions(
    args: ListCustomPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListCustomPermissionsCommandOutput>;
  listCustomPermissions(
    args: ListCustomPermissionsCommandInput,
    cb: (err: any, data?: ListCustomPermissionsCommandOutput) => void
  ): void;
  listCustomPermissions(
    args: ListCustomPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListDashboardsCommandOutput>;
  listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  listDashboards(
    args: ListDashboardsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardVersionsCommand}
   */
  listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListDashboardVersionsCommandOutput>;
  listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): void;
  listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSetsCommand}
   */
  listDataSets(
    args: ListDataSetsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListDataSetsCommandOutput>;
  listDataSets(
    args: ListDataSetsCommandInput,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  listDataSets(
    args: ListDataSetsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDlpSettingsCommand}
   */
  listDlpSettings(
    args: ListDlpSettingsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListDlpSettingsCommandOutput>;
  listDlpSettings(
    args: ListDlpSettingsCommandInput,
    cb: (err: any, data?: ListDlpSettingsCommandOutput) => void
  ): void;
  listDlpSettings(
    args: ListDlpSettingsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListDlpSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(
    args: ListFlowsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFolderMembersCommand}
   */
  listFolderMembers(
    args: ListFolderMembersCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListFolderMembersCommandOutput>;
  listFolderMembers(
    args: ListFolderMembersCommandInput,
    cb: (err: any, data?: ListFolderMembersCommandOutput) => void
  ): void;
  listFolderMembers(
    args: ListFolderMembersCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListFolderMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFoldersCommand}
   */
  listFolders(
    args: ListFoldersCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListFoldersCommandOutput>;
  listFolders(
    args: ListFoldersCommandInput,
    cb: (err: any, data?: ListFoldersCommandOutput) => void
  ): void;
  listFolders(
    args: ListFoldersCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListFoldersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFoldersForResourceCommand}
   */
  listFoldersForResource(
    args: ListFoldersForResourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListFoldersForResourceCommandOutput>;
  listFoldersForResource(
    args: ListFoldersForResourceCommandInput,
    cb: (err: any, data?: ListFoldersForResourceCommandOutput) => void
  ): void;
  listFoldersForResource(
    args: ListFoldersForResourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListFoldersForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembershipsCommand}
   */
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListGroupMembershipsCommandOutput>;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIAMPolicyAssignmentsCommand}
   */
  listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListIAMPolicyAssignmentsCommandOutput>;
  listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): void;
  listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIAMPolicyAssignmentsForUserCommand}
   */
  listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput>;
  listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): void;
  listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityPropagationConfigsCommand}
   */
  listIdentityPropagationConfigs(
    args: ListIdentityPropagationConfigsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListIdentityPropagationConfigsCommandOutput>;
  listIdentityPropagationConfigs(
    args: ListIdentityPropagationConfigsCommandInput,
    cb: (err: any, data?: ListIdentityPropagationConfigsCommandOutput) => void
  ): void;
  listIdentityPropagationConfigs(
    args: ListIdentityPropagationConfigsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListIdentityPropagationConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIngestionsCommand}
   */
  listIngestions(
    args: ListIngestionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListIngestionsCommandOutput>;
  listIngestions(
    args: ListIngestionsCommandInput,
    cb: (err: any, data?: ListIngestionsCommandOutput) => void
  ): void;
  listIngestions(
    args: ListIngestionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListIngestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   */
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListKnowledgeBasesCommandOutput>;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLimitsProfilesCommand}
   */
  listLimitsProfiles(
    args: ListLimitsProfilesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListLimitsProfilesCommandOutput>;
  listLimitsProfiles(
    args: ListLimitsProfilesCommandInput,
    cb: (err: any, data?: ListLimitsProfilesCommandOutput) => void
  ): void;
  listLimitsProfiles(
    args: ListLimitsProfilesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListLimitsProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamespacesCommand}
   */
  listNamespaces(
    args: ListNamespacesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListNamespacesCommandOutput>;
  listNamespaces(
    args: ListNamespacesCommandInput,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  listNamespaces(
    args: ListNamespacesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOAuthClientApplicationsCommand}
   */
  listOAuthClientApplications(
    args: ListOAuthClientApplicationsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListOAuthClientApplicationsCommandOutput>;
  listOAuthClientApplications(
    args: ListOAuthClientApplicationsCommandInput,
    cb: (err: any, data?: ListOAuthClientApplicationsCommandOutput) => void
  ): void;
  listOAuthClientApplications(
    args: ListOAuthClientApplicationsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListOAuthClientApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRefreshSchedulesCommand}
   */
  listRefreshSchedules(
    args: ListRefreshSchedulesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListRefreshSchedulesCommandOutput>;
  listRefreshSchedules(
    args: ListRefreshSchedulesCommandInput,
    cb: (err: any, data?: ListRefreshSchedulesCommandOutput) => void
  ): void;
  listRefreshSchedules(
    args: ListRefreshSchedulesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListRefreshSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoleMembershipsCommand}
   */
  listRoleMemberships(
    args: ListRoleMembershipsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListRoleMembershipsCommandOutput>;
  listRoleMemberships(
    args: ListRoleMembershipsCommandInput,
    cb: (err: any, data?: ListRoleMembershipsCommandOutput) => void
  ): void;
  listRoleMemberships(
    args: ListRoleMembershipsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListRoleMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSelfUpgradesCommand}
   */
  listSelfUpgrades(
    args: ListSelfUpgradesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListSelfUpgradesCommandOutput>;
  listSelfUpgrades(
    args: ListSelfUpgradesCommandInput,
    cb: (err: any, data?: ListSelfUpgradesCommandOutput) => void
  ): void;
  listSelfUpgrades(
    args: ListSelfUpgradesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListSelfUpgradesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpaceResourcesCommand}
   */
  listSpaceResources(
    args: ListSpaceResourcesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListSpaceResourcesCommandOutput>;
  listSpaceResources(
    args: ListSpaceResourcesCommandInput,
    cb: (err: any, data?: ListSpaceResourcesCommandOutput) => void
  ): void;
  listSpaceResources(
    args: ListSpaceResourcesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListSpaceResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpacesCommand}
   */
  listSpaces(
    args: ListSpacesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListSpacesCommandOutput>;
  listSpaces(
    args: ListSpacesCommandInput,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;
  listSpaces(
    args: ListSpacesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateAliasesCommand}
   */
  listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTemplateAliasesCommandOutput>;
  listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): void;
  listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateVersionsCommand}
   */
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTemplateVersionsCommandOutput>;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThemeAliasesCommand}
   */
  listThemeAliases(
    args: ListThemeAliasesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListThemeAliasesCommandOutput>;
  listThemeAliases(
    args: ListThemeAliasesCommandInput,
    cb: (err: any, data?: ListThemeAliasesCommandOutput) => void
  ): void;
  listThemeAliases(
    args: ListThemeAliasesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListThemeAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThemesCommand}
   */
  listThemes(
    args: ListThemesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListThemesCommandOutput>;
  listThemes(
    args: ListThemesCommandInput,
    cb: (err: any, data?: ListThemesCommandOutput) => void
  ): void;
  listThemes(
    args: ListThemesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListThemesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThemeVersionsCommand}
   */
  listThemeVersions(
    args: ListThemeVersionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListThemeVersionsCommandOutput>;
  listThemeVersions(
    args: ListThemeVersionsCommandInput,
    cb: (err: any, data?: ListThemeVersionsCommandOutput) => void
  ): void;
  listThemeVersions(
    args: ListThemeVersionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListThemeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicRefreshSchedulesCommand}
   */
  listTopicRefreshSchedules(
    args: ListTopicRefreshSchedulesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTopicRefreshSchedulesCommandOutput>;
  listTopicRefreshSchedules(
    args: ListTopicRefreshSchedulesCommandInput,
    cb: (err: any, data?: ListTopicRefreshSchedulesCommandOutput) => void
  ): void;
  listTopicRefreshSchedules(
    args: ListTopicRefreshSchedulesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTopicRefreshSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicReviewedAnswersCommand}
   */
  listTopicReviewedAnswers(
    args: ListTopicReviewedAnswersCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTopicReviewedAnswersCommandOutput>;
  listTopicReviewedAnswers(
    args: ListTopicReviewedAnswersCommandInput,
    cb: (err: any, data?: ListTopicReviewedAnswersCommandOutput) => void
  ): void;
  listTopicReviewedAnswers(
    args: ListTopicReviewedAnswersCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTopicReviewedAnswersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTopicsCommandOutput>;
  listTopics(
    args: ListTopicsCommandInput,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;
  listTopics(
    args: ListTopicsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicsV2Command}
   */
  listTopicsV2(
    args: ListTopicsV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListTopicsV2CommandOutput>;
  listTopicsV2(
    args: ListTopicsV2CommandInput,
    cb: (err: any, data?: ListTopicsV2CommandOutput) => void
  ): void;
  listTopicsV2(
    args: ListTopicsV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListTopicsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserGroupsCommand}
   */
  listUserGroups(
    args: ListUserGroupsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListUserGroupsCommandOutput>;
  listUserGroups(
    args: ListUserGroupsCommandInput,
    cb: (err: any, data?: ListUserGroupsCommandOutput) => void
  ): void;
  listUserGroups(
    args: ListUserGroupsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListUserGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersIndexCapacityCommand}
   */
  listUsersIndexCapacity(
    args: ListUsersIndexCapacityCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListUsersIndexCapacityCommandOutput>;
  listUsersIndexCapacity(
    args: ListUsersIndexCapacityCommandInput,
    cb: (err: any, data?: ListUsersIndexCapacityCommandOutput) => void
  ): void;
  listUsersIndexCapacity(
    args: ListUsersIndexCapacityCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListUsersIndexCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVPCConnectionsCommand}
   */
  listVPCConnections(
    args: ListVPCConnectionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<ListVPCConnectionsCommandOutput>;
  listVPCConnections(
    args: ListVPCConnectionsCommandInput,
    cb: (err: any, data?: ListVPCConnectionsCommandOutput) => void
  ): void;
  listVPCConnections(
    args: ListVPCConnectionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: ListVPCConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PredictQAResultsCommand}
   */
  predictQAResults(
    args: PredictQAResultsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<PredictQAResultsCommandOutput>;
  predictQAResults(
    args: PredictQAResultsCommandInput,
    cb: (err: any, data?: PredictQAResultsCommandOutput) => void
  ): void;
  predictQAResults(
    args: PredictQAResultsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: PredictQAResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataSetRefreshPropertiesCommand}
   */
  putDataSetRefreshProperties(
    args: PutDataSetRefreshPropertiesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<PutDataSetRefreshPropertiesCommandOutput>;
  putDataSetRefreshProperties(
    args: PutDataSetRefreshPropertiesCommandInput,
    cb: (err: any, data?: PutDataSetRefreshPropertiesCommandOutput) => void
  ): void;
  putDataSetRefreshProperties(
    args: PutDataSetRefreshPropertiesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: PutDataSetRefreshPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterUserCommand}
   */
  registerUser(
    args: RegisterUserCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<RegisterUserCommandOutput>;
  registerUser(
    args: RegisterUserCommandInput,
    cb: (err: any, data?: RegisterUserCommandOutput) => void
  ): void;
  registerUser(
    args: RegisterUserCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: RegisterUserCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreAnalysisCommand}
   */
  restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<RestoreAnalysisCommandOutput>;
  restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    cb: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): void;
  restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchActionConnectorsCommand}
   */
  searchActionConnectors(
    args: SearchActionConnectorsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchActionConnectorsCommandOutput>;
  searchActionConnectors(
    args: SearchActionConnectorsCommandInput,
    cb: (err: any, data?: SearchActionConnectorsCommandOutput) => void
  ): void;
  searchActionConnectors(
    args: SearchActionConnectorsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchActionConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAgentsCommand}
   */
  searchAgents(
    args: SearchAgentsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchAgentsCommandOutput>;
  searchAgents(
    args: SearchAgentsCommandInput,
    cb: (err: any, data?: SearchAgentsCommandOutput) => void
  ): void;
  searchAgents(
    args: SearchAgentsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAnalysesCommand}
   */
  searchAnalyses(
    args: SearchAnalysesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchAnalysesCommandOutput>;
  searchAnalyses(
    args: SearchAnalysesCommandInput,
    cb: (err: any, data?: SearchAnalysesCommandOutput) => void
  ): void;
  searchAnalyses(
    args: SearchAnalysesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAppsCommand}
   */
  searchApps(
    args: SearchAppsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchAppsCommandOutput>;
  searchApps(
    args: SearchAppsCommandInput,
    cb: (err: any, data?: SearchAppsCommandOutput) => void
  ): void;
  searchApps(
    args: SearchAppsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDashboardsCommand}
   */
  searchDashboards(
    args: SearchDashboardsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchDashboardsCommandOutput>;
  searchDashboards(
    args: SearchDashboardsCommandInput,
    cb: (err: any, data?: SearchDashboardsCommandOutput) => void
  ): void;
  searchDashboards(
    args: SearchDashboardsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDataSetsCommand}
   */
  searchDataSets(
    args: SearchDataSetsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchDataSetsCommandOutput>;
  searchDataSets(
    args: SearchDataSetsCommandInput,
    cb: (err: any, data?: SearchDataSetsCommandOutput) => void
  ): void;
  searchDataSets(
    args: SearchDataSetsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchDataSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDataSourcesCommand}
   */
  searchDataSources(
    args: SearchDataSourcesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchDataSourcesCommandOutput>;
  searchDataSources(
    args: SearchDataSourcesCommandInput,
    cb: (err: any, data?: SearchDataSourcesCommandOutput) => void
  ): void;
  searchDataSources(
    args: SearchDataSourcesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFlowsCommand}
   */
  searchFlows(
    args: SearchFlowsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchFlowsCommandOutput>;
  searchFlows(
    args: SearchFlowsCommandInput,
    cb: (err: any, data?: SearchFlowsCommandOutput) => void
  ): void;
  searchFlows(
    args: SearchFlowsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFoldersCommand}
   */
  searchFolders(
    args: SearchFoldersCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchFoldersCommandOutput>;
  searchFolders(
    args: SearchFoldersCommandInput,
    cb: (err: any, data?: SearchFoldersCommandOutput) => void
  ): void;
  searchFolders(
    args: SearchFoldersCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchFoldersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchGroupsCommand}
   */
  searchGroups(
    args: SearchGroupsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchGroupsCommandOutput>;
  searchGroups(
    args: SearchGroupsCommandInput,
    cb: (err: any, data?: SearchGroupsCommandOutput) => void
  ): void;
  searchGroups(
    args: SearchGroupsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchKnowledgeBasesCommand}
   */
  searchKnowledgeBases(
    args: SearchKnowledgeBasesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchKnowledgeBasesCommandOutput>;
  searchKnowledgeBases(
    args: SearchKnowledgeBasesCommandInput,
    cb: (err: any, data?: SearchKnowledgeBasesCommandOutput) => void
  ): void;
  searchKnowledgeBases(
    args: SearchKnowledgeBasesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchKnowledgeBasesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSpacesCommand}
   */
  searchSpaces(
    args: SearchSpacesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchSpacesCommandOutput>;
  searchSpaces(
    args: SearchSpacesCommandInput,
    cb: (err: any, data?: SearchSpacesCommandOutput) => void
  ): void;
  searchSpaces(
    args: SearchSpacesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTopicsCommand}
   */
  searchTopics(
    args: SearchTopicsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchTopicsCommandOutput>;
  searchTopics(
    args: SearchTopicsCommandInput,
    cb: (err: any, data?: SearchTopicsCommandOutput) => void
  ): void;
  searchTopics(
    args: SearchTopicsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTopicsV2Command}
   */
  searchTopicsV2(
    args: SearchTopicsV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<SearchTopicsV2CommandOutput>;
  searchTopicsV2(
    args: SearchTopicsV2CommandInput,
    cb: (err: any, data?: SearchTopicsV2CommandOutput) => void
  ): void;
  searchTopicsV2(
    args: SearchTopicsV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: SearchTopicsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssetBundleExportJobCommand}
   */
  startAssetBundleExportJob(
    args: StartAssetBundleExportJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<StartAssetBundleExportJobCommandOutput>;
  startAssetBundleExportJob(
    args: StartAssetBundleExportJobCommandInput,
    cb: (err: any, data?: StartAssetBundleExportJobCommandOutput) => void
  ): void;
  startAssetBundleExportJob(
    args: StartAssetBundleExportJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: StartAssetBundleExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssetBundleImportJobCommand}
   */
  startAssetBundleImportJob(
    args: StartAssetBundleImportJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<StartAssetBundleImportJobCommandOutput>;
  startAssetBundleImportJob(
    args: StartAssetBundleImportJobCommandInput,
    cb: (err: any, data?: StartAssetBundleImportJobCommandOutput) => void
  ): void;
  startAssetBundleImportJob(
    args: StartAssetBundleImportJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: StartAssetBundleImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAutomationJobCommand}
   */
  startAutomationJob(
    args: StartAutomationJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<StartAutomationJobCommandOutput>;
  startAutomationJob(
    args: StartAutomationJobCommandInput,
    cb: (err: any, data?: StartAutomationJobCommandOutput) => void
  ): void;
  startAutomationJob(
    args: StartAutomationJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: StartAutomationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDashboardSnapshotJobCommand}
   */
  startDashboardSnapshotJob(
    args: StartDashboardSnapshotJobCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<StartDashboardSnapshotJobCommandOutput>;
  startDashboardSnapshotJob(
    args: StartDashboardSnapshotJobCommandInput,
    cb: (err: any, data?: StartDashboardSnapshotJobCommandOutput) => void
  ): void;
  startDashboardSnapshotJob(
    args: StartDashboardSnapshotJobCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: StartDashboardSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDashboardSnapshotJobScheduleCommand}
   */
  startDashboardSnapshotJobSchedule(
    args: StartDashboardSnapshotJobScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<StartDashboardSnapshotJobScheduleCommandOutput>;
  startDashboardSnapshotJobSchedule(
    args: StartDashboardSnapshotJobScheduleCommandInput,
    cb: (err: any, data?: StartDashboardSnapshotJobScheduleCommandOutput) => void
  ): void;
  startDashboardSnapshotJobSchedule(
    args: StartDashboardSnapshotJobScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: StartDashboardSnapshotJobScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCustomizationCommand}
   */
  updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAccountCustomizationCommandOutput>;
  updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void
  ): void;
  updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCustomPermissionCommand}
   */
  updateAccountCustomPermission(
    args: UpdateAccountCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAccountCustomPermissionCommandOutput>;
  updateAccountCustomPermission(
    args: UpdateAccountCustomPermissionCommandInput,
    cb: (err: any, data?: UpdateAccountCustomPermissionCommandOutput) => void
  ): void;
  updateAccountCustomPermission(
    args: UpdateAccountCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAccountCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateActionConnectorCommand}
   */
  updateActionConnector(
    args: UpdateActionConnectorCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateActionConnectorCommandOutput>;
  updateActionConnector(
    args: UpdateActionConnectorCommandInput,
    cb: (err: any, data?: UpdateActionConnectorCommandOutput) => void
  ): void;
  updateActionConnector(
    args: UpdateActionConnectorCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateActionConnectorPermissionsCommand}
   */
  updateActionConnectorPermissions(
    args: UpdateActionConnectorPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateActionConnectorPermissionsCommandOutput>;
  updateActionConnectorPermissions(
    args: UpdateActionConnectorPermissionsCommandInput,
    cb: (err: any, data?: UpdateActionConnectorPermissionsCommandOutput) => void
  ): void;
  updateActionConnectorPermissions(
    args: UpdateActionConnectorPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateActionConnectorPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentCommand}
   */
  updateAgent(
    args: UpdateAgentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAgentCommandOutput>;
  updateAgent(
    args: UpdateAgentCommandInput,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;
  updateAgent(
    args: UpdateAgentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentPermissionsCommand}
   */
  updateAgentPermissions(
    args: UpdateAgentPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAgentPermissionsCommandOutput>;
  updateAgentPermissions(
    args: UpdateAgentPermissionsCommandInput,
    cb: (err: any, data?: UpdateAgentPermissionsCommandOutput) => void
  ): void;
  updateAgentPermissions(
    args: UpdateAgentPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAgentPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnalysisCommand}
   */
  updateAnalysis(
    args: UpdateAnalysisCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAnalysisCommandOutput>;
  updateAnalysis(
    args: UpdateAnalysisCommandInput,
    cb: (err: any, data?: UpdateAnalysisCommandOutput) => void
  ): void;
  updateAnalysis(
    args: UpdateAnalysisCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnalysisPermissionsCommand}
   */
  updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAnalysisPermissionsCommandOutput>;
  updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void
  ): void;
  updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationWithTokenExchangeGrantCommand}
   */
  updateApplicationWithTokenExchangeGrant(
    args: UpdateApplicationWithTokenExchangeGrantCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateApplicationWithTokenExchangeGrantCommandOutput>;
  updateApplicationWithTokenExchangeGrant(
    args: UpdateApplicationWithTokenExchangeGrantCommandInput,
    cb: (err: any, data?: UpdateApplicationWithTokenExchangeGrantCommandOutput) => void
  ): void;
  updateApplicationWithTokenExchangeGrant(
    args: UpdateApplicationWithTokenExchangeGrantCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateApplicationWithTokenExchangeGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppPermissionsCommand}
   */
  updateAppPermissions(
    args: UpdateAppPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateAppPermissionsCommandOutput>;
  updateAppPermissions(
    args: UpdateAppPermissionsCommandInput,
    cb: (err: any, data?: UpdateAppPermissionsCommandOutput) => void
  ): void;
  updateAppPermissions(
    args: UpdateAppPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateAppPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApprovalPolicyCommand}
   */
  updateApprovalPolicy(
    args: UpdateApprovalPolicyCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateApprovalPolicyCommandOutput>;
  updateApprovalPolicy(
    args: UpdateApprovalPolicyCommandInput,
    cb: (err: any, data?: UpdateApprovalPolicyCommandOutput) => void
  ): void;
  updateApprovalPolicy(
    args: UpdateApprovalPolicyCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateApprovalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandCommand}
   */
  updateBrand(
    args: UpdateBrandCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateBrandCommandOutput>;
  updateBrand(
    args: UpdateBrandCommandInput,
    cb: (err: any, data?: UpdateBrandCommandOutput) => void
  ): void;
  updateBrand(
    args: UpdateBrandCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandAssignmentCommand}
   */
  updateBrandAssignment(
    args: UpdateBrandAssignmentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateBrandAssignmentCommandOutput>;
  updateBrandAssignment(
    args: UpdateBrandAssignmentCommandInput,
    cb: (err: any, data?: UpdateBrandAssignmentCommandOutput) => void
  ): void;
  updateBrandAssignment(
    args: UpdateBrandAssignmentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateBrandAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandPublishedVersionCommand}
   */
  updateBrandPublishedVersion(
    args: UpdateBrandPublishedVersionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateBrandPublishedVersionCommandOutput>;
  updateBrandPublishedVersion(
    args: UpdateBrandPublishedVersionCommandInput,
    cb: (err: any, data?: UpdateBrandPublishedVersionCommandOutput) => void
  ): void;
  updateBrandPublishedVersion(
    args: UpdateBrandPublishedVersionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateBrandPublishedVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomPermissionsCommand}
   */
  updateCustomPermissions(
    args: UpdateCustomPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateCustomPermissionsCommandOutput>;
  updateCustomPermissions(
    args: UpdateCustomPermissionsCommandInput,
    cb: (err: any, data?: UpdateCustomPermissionsCommandOutput) => void
  ): void;
  updateCustomPermissions(
    args: UpdateCustomPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDashboardCommandOutput>;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardLinksCommand}
   */
  updateDashboardLinks(
    args: UpdateDashboardLinksCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDashboardLinksCommandOutput>;
  updateDashboardLinks(
    args: UpdateDashboardLinksCommandInput,
    cb: (err: any, data?: UpdateDashboardLinksCommandOutput) => void
  ): void;
  updateDashboardLinks(
    args: UpdateDashboardLinksCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDashboardLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardPermissionsCommand}
   */
  updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDashboardPermissionsCommandOutput>;
  updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): void;
  updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardPublishedVersionCommand}
   */
  updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDashboardPublishedVersionCommandOutput>;
  updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): void;
  updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardsQAConfigurationCommand}
   */
  updateDashboardsQAConfiguration(
    args: UpdateDashboardsQAConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDashboardsQAConfigurationCommandOutput>;
  updateDashboardsQAConfiguration(
    args: UpdateDashboardsQAConfigurationCommandInput,
    cb: (err: any, data?: UpdateDashboardsQAConfigurationCommandOutput) => void
  ): void;
  updateDashboardsQAConfiguration(
    args: UpdateDashboardsQAConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDashboardsQAConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSetCommand}
   */
  updateDataSet(
    args: UpdateDataSetCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDataSetCommandOutput>;
  updateDataSet(
    args: UpdateDataSetCommandInput,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;
  updateDataSet(
    args: UpdateDataSetCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSetPermissionsCommand}
   */
  updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDataSetPermissionsCommandOutput>;
  updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): void;
  updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourcePermissionsCommand}
   */
  updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDataSourcePermissionsCommandOutput>;
  updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): void;
  updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDefaultQBusinessApplicationCommand}
   */
  updateDefaultQBusinessApplication(
    args: UpdateDefaultQBusinessApplicationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDefaultQBusinessApplicationCommandOutput>;
  updateDefaultQBusinessApplication(
    args: UpdateDefaultQBusinessApplicationCommandInput,
    cb: (err: any, data?: UpdateDefaultQBusinessApplicationCommandOutput) => void
  ): void;
  updateDefaultQBusinessApplication(
    args: UpdateDefaultQBusinessApplicationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDefaultQBusinessApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDlpSettingCommand}
   */
  updateDlpSetting(
    args: UpdateDlpSettingCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateDlpSettingCommandOutput>;
  updateDlpSetting(
    args: UpdateDlpSettingCommandInput,
    cb: (err: any, data?: UpdateDlpSettingCommandOutput) => void
  ): void;
  updateDlpSetting(
    args: UpdateDlpSettingCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateDlpSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowCommand}
   */
  updateFlow(
    args: UpdateFlowCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateFlowCommandOutput>;
  updateFlow(
    args: UpdateFlowCommandInput,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
  updateFlow(
    args: UpdateFlowCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowPermissionsCommand}
   */
  updateFlowPermissions(
    args: UpdateFlowPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateFlowPermissionsCommandOutput>;
  updateFlowPermissions(
    args: UpdateFlowPermissionsCommandInput,
    cb: (err: any, data?: UpdateFlowPermissionsCommandOutput) => void
  ): void;
  updateFlowPermissions(
    args: UpdateFlowPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateFlowPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFolderCommand}
   */
  updateFolder(
    args: UpdateFolderCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateFolderCommandOutput>;
  updateFolder(
    args: UpdateFolderCommandInput,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;
  updateFolder(
    args: UpdateFolderCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFolderPermissionsCommand}
   */
  updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateFolderPermissionsCommandOutput>;
  updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    cb: (err: any, data?: UpdateFolderPermissionsCommandOutput) => void
  ): void;
  updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateFolderPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIAMPolicyAssignmentCommand}
   */
  updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateIAMPolicyAssignmentCommandOutput>;
  updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityPropagationConfigCommand}
   */
  updateIdentityPropagationConfig(
    args: UpdateIdentityPropagationConfigCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateIdentityPropagationConfigCommandOutput>;
  updateIdentityPropagationConfig(
    args: UpdateIdentityPropagationConfigCommandInput,
    cb: (err: any, data?: UpdateIdentityPropagationConfigCommandOutput) => void
  ): void;
  updateIdentityPropagationConfig(
    args: UpdateIdentityPropagationConfigCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateIdentityPropagationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIpRestrictionCommand}
   */
  updateIpRestriction(
    args: UpdateIpRestrictionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateIpRestrictionCommandOutput>;
  updateIpRestriction(
    args: UpdateIpRestrictionCommandInput,
    cb: (err: any, data?: UpdateIpRestrictionCommandOutput) => void
  ): void;
  updateIpRestriction(
    args: UpdateIpRestrictionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateIpRestrictionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyRegistrationCommand}
   */
  updateKeyRegistration(
    args: UpdateKeyRegistrationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateKeyRegistrationCommandOutput>;
  updateKeyRegistration(
    args: UpdateKeyRegistrationCommandInput,
    cb: (err: any, data?: UpdateKeyRegistrationCommandOutput) => void
  ): void;
  updateKeyRegistration(
    args: UpdateKeyRegistrationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateKeyRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKnowledgeBaseCommand}
   */
  updateKnowledgeBase(
    args: UpdateKnowledgeBaseCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateKnowledgeBaseCommandOutput>;
  updateKnowledgeBase(
    args: UpdateKnowledgeBaseCommandInput,
    cb: (err: any, data?: UpdateKnowledgeBaseCommandOutput) => void
  ): void;
  updateKnowledgeBase(
    args: UpdateKnowledgeBaseCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKnowledgeBasePermissionsCommand}
   */
  updateKnowledgeBasePermissions(
    args: UpdateKnowledgeBasePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateKnowledgeBasePermissionsCommandOutput>;
  updateKnowledgeBasePermissions(
    args: UpdateKnowledgeBasePermissionsCommandInput,
    cb: (err: any, data?: UpdateKnowledgeBasePermissionsCommandOutput) => void
  ): void;
  updateKnowledgeBasePermissions(
    args: UpdateKnowledgeBasePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateKnowledgeBasePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLimitsProfileCommand}
   */
  updateLimitsProfile(
    args: UpdateLimitsProfileCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateLimitsProfileCommandOutput>;
  updateLimitsProfile(
    args: UpdateLimitsProfileCommandInput,
    cb: (err: any, data?: UpdateLimitsProfileCommandOutput) => void
  ): void;
  updateLimitsProfile(
    args: UpdateLimitsProfileCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateLimitsProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOAuthClientApplicationCommand}
   */
  updateOAuthClientApplication(
    args: UpdateOAuthClientApplicationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateOAuthClientApplicationCommandOutput>;
  updateOAuthClientApplication(
    args: UpdateOAuthClientApplicationCommandInput,
    cb: (err: any, data?: UpdateOAuthClientApplicationCommandOutput) => void
  ): void;
  updateOAuthClientApplication(
    args: UpdateOAuthClientApplicationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateOAuthClientApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePublicSharingSettingsCommand}
   */
  updatePublicSharingSettings(
    args: UpdatePublicSharingSettingsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdatePublicSharingSettingsCommandOutput>;
  updatePublicSharingSettings(
    args: UpdatePublicSharingSettingsCommandInput,
    cb: (err: any, data?: UpdatePublicSharingSettingsCommandOutput) => void
  ): void;
  updatePublicSharingSettings(
    args: UpdatePublicSharingSettingsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdatePublicSharingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQPersonalizationConfigurationCommand}
   */
  updateQPersonalizationConfiguration(
    args: UpdateQPersonalizationConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateQPersonalizationConfigurationCommandOutput>;
  updateQPersonalizationConfiguration(
    args: UpdateQPersonalizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateQPersonalizationConfigurationCommandOutput) => void
  ): void;
  updateQPersonalizationConfiguration(
    args: UpdateQPersonalizationConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateQPersonalizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuickSightQSearchConfigurationCommand}
   */
  updateQuickSightQSearchConfiguration(
    args: UpdateQuickSightQSearchConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateQuickSightQSearchConfigurationCommandOutput>;
  updateQuickSightQSearchConfiguration(
    args: UpdateQuickSightQSearchConfigurationCommandInput,
    cb: (err: any, data?: UpdateQuickSightQSearchConfigurationCommandOutput) => void
  ): void;
  updateQuickSightQSearchConfiguration(
    args: UpdateQuickSightQSearchConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateQuickSightQSearchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRefreshScheduleCommand}
   */
  updateRefreshSchedule(
    args: UpdateRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateRefreshScheduleCommandOutput>;
  updateRefreshSchedule(
    args: UpdateRefreshScheduleCommandInput,
    cb: (err: any, data?: UpdateRefreshScheduleCommandOutput) => void
  ): void;
  updateRefreshSchedule(
    args: UpdateRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoleCustomPermissionCommand}
   */
  updateRoleCustomPermission(
    args: UpdateRoleCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateRoleCustomPermissionCommandOutput>;
  updateRoleCustomPermission(
    args: UpdateRoleCustomPermissionCommandInput,
    cb: (err: any, data?: UpdateRoleCustomPermissionCommandOutput) => void
  ): void;
  updateRoleCustomPermission(
    args: UpdateRoleCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateRoleCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSelfUpgradeCommand}
   */
  updateSelfUpgrade(
    args: UpdateSelfUpgradeCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateSelfUpgradeCommandOutput>;
  updateSelfUpgrade(
    args: UpdateSelfUpgradeCommandInput,
    cb: (err: any, data?: UpdateSelfUpgradeCommandOutput) => void
  ): void;
  updateSelfUpgrade(
    args: UpdateSelfUpgradeCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateSelfUpgradeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSelfUpgradeConfigurationCommand}
   */
  updateSelfUpgradeConfiguration(
    args: UpdateSelfUpgradeConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateSelfUpgradeConfigurationCommandOutput>;
  updateSelfUpgradeConfiguration(
    args: UpdateSelfUpgradeConfigurationCommandInput,
    cb: (err: any, data?: UpdateSelfUpgradeConfigurationCommandOutput) => void
  ): void;
  updateSelfUpgradeConfiguration(
    args: UpdateSelfUpgradeConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateSelfUpgradeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpaceCommand}
   */
  updateSpace(
    args: UpdateSpaceCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateSpaceCommandOutput>;
  updateSpace(
    args: UpdateSpaceCommandInput,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;
  updateSpace(
    args: UpdateSpaceCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpacePermissionsCommand}
   */
  updateSpacePermissions(
    args: UpdateSpacePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateSpacePermissionsCommandOutput>;
  updateSpacePermissions(
    args: UpdateSpacePermissionsCommandInput,
    cb: (err: any, data?: UpdateSpacePermissionsCommandOutput) => void
  ): void;
  updateSpacePermissions(
    args: UpdateSpacePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateSpacePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpaceResourcesCommand}
   */
  updateSpaceResources(
    args: UpdateSpaceResourcesCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateSpaceResourcesCommandOutput>;
  updateSpaceResources(
    args: UpdateSpaceResourcesCommandInput,
    cb: (err: any, data?: UpdateSpaceResourcesCommandOutput) => void
  ): void;
  updateSpaceResources(
    args: UpdateSpaceResourcesCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateSpaceResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSPICECapacityConfigurationCommand}
   */
  updateSPICECapacityConfiguration(
    args: UpdateSPICECapacityConfigurationCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateSPICECapacityConfigurationCommandOutput>;
  updateSPICECapacityConfiguration(
    args: UpdateSPICECapacityConfigurationCommandInput,
    cb: (err: any, data?: UpdateSPICECapacityConfigurationCommandOutput) => void
  ): void;
  updateSPICECapacityConfiguration(
    args: UpdateSPICECapacityConfigurationCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateSPICECapacityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateAliasCommand}
   */
  updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTemplateAliasCommandOutput>;
  updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): void;
  updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplatePermissionsCommand}
   */
  updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTemplatePermissionsCommandOutput>;
  updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): void;
  updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemeCommand}
   */
  updateTheme(
    args: UpdateThemeCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateThemeCommandOutput>;
  updateTheme(
    args: UpdateThemeCommandInput,
    cb: (err: any, data?: UpdateThemeCommandOutput) => void
  ): void;
  updateTheme(
    args: UpdateThemeCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemeAliasCommand}
   */
  updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateThemeAliasCommandOutput>;
  updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void
  ): void;
  updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemePermissionsCommand}
   */
  updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateThemePermissionsCommandOutput>;
  updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void
  ): void;
  updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicCommand}
   */
  updateTopic(
    args: UpdateTopicCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTopicCommandOutput>;
  updateTopic(
    args: UpdateTopicCommandInput,
    cb: (err: any, data?: UpdateTopicCommandOutput) => void
  ): void;
  updateTopic(
    args: UpdateTopicCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicPermissionsCommand}
   */
  updateTopicPermissions(
    args: UpdateTopicPermissionsCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTopicPermissionsCommandOutput>;
  updateTopicPermissions(
    args: UpdateTopicPermissionsCommandInput,
    cb: (err: any, data?: UpdateTopicPermissionsCommandOutput) => void
  ): void;
  updateTopicPermissions(
    args: UpdateTopicPermissionsCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTopicPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicPermissionsV2Command}
   */
  updateTopicPermissionsV2(
    args: UpdateTopicPermissionsV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTopicPermissionsV2CommandOutput>;
  updateTopicPermissionsV2(
    args: UpdateTopicPermissionsV2CommandInput,
    cb: (err: any, data?: UpdateTopicPermissionsV2CommandOutput) => void
  ): void;
  updateTopicPermissionsV2(
    args: UpdateTopicPermissionsV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTopicPermissionsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicRefreshScheduleCommand}
   */
  updateTopicRefreshSchedule(
    args: UpdateTopicRefreshScheduleCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTopicRefreshScheduleCommandOutput>;
  updateTopicRefreshSchedule(
    args: UpdateTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: UpdateTopicRefreshScheduleCommandOutput) => void
  ): void;
  updateTopicRefreshSchedule(
    args: UpdateTopicRefreshScheduleCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTopicRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicV2Command}
   */
  updateTopicV2(
    args: UpdateTopicV2CommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateTopicV2CommandOutput>;
  updateTopicV2(
    args: UpdateTopicV2CommandInput,
    cb: (err: any, data?: UpdateTopicV2CommandOutput) => void
  ): void;
  updateTopicV2(
    args: UpdateTopicV2CommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateTopicV2CommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCustomPermissionCommand}
   */
  updateUserCustomPermission(
    args: UpdateUserCustomPermissionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateUserCustomPermissionCommandOutput>;
  updateUserCustomPermission(
    args: UpdateUserCustomPermissionCommandInput,
    cb: (err: any, data?: UpdateUserCustomPermissionCommandOutput) => void
  ): void;
  updateUserCustomPermission(
    args: UpdateUserCustomPermissionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateUserCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVPCConnectionCommand}
   */
  updateVPCConnection(
    args: UpdateVPCConnectionCommandInput,
    options?: QuickSightRequestOptions
  ): Promise<UpdateVPCConnectionCommandOutput>;
  updateVPCConnection(
    args: UpdateVPCConnectionCommandInput,
    cb: (err: any, data?: UpdateVPCConnectionCommandOutput) => void
  ): void;
  updateVPCConnection(
    args: UpdateVPCConnectionCommandInput,
    options: QuickSightRequestOptions,
    cb: (err: any, data?: UpdateVPCConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderPermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeFolderPermissionsCommandOutput}.
   */
  paginateDescribeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeFolderPermissionsCommandOutput>;

  /**
   * @see {@link DescribeFolderResolvedPermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeFolderResolvedPermissionsCommandOutput}.
   */
  paginateDescribeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeFolderResolvedPermissionsCommandOutput>;

  /**
   * @see {@link ListActionConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListActionConnectorsCommandOutput}.
   */
  paginateListActionConnectors(
    args: ListActionConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListActionConnectorsCommandOutput>;

  /**
   * @see {@link ListAnalysesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnalysesCommandOutput}.
   */
  paginateListAnalyses(
    args: ListAnalysesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnalysesCommandOutput>;

  /**
   * @see {@link ListApprovalPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApprovalPoliciesCommandOutput}.
   */
  paginateListApprovalPolicies(
    args?: ListApprovalPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApprovalPoliciesCommandOutput>;

  /**
   * @see {@link ListAppsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAppsCommandOutput}.
   */
  paginateListApps(
    args: ListAppsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAppsCommandOutput>;

  /**
   * @see {@link ListAssetBundleExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetBundleExportJobsCommandOutput}.
   */
  paginateListAssetBundleExportJobs(
    args: ListAssetBundleExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetBundleExportJobsCommandOutput>;

  /**
   * @see {@link ListAssetBundleImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetBundleImportJobsCommandOutput}.
   */
  paginateListAssetBundleImportJobs(
    args: ListAssetBundleImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetBundleImportJobsCommandOutput>;

  /**
   * @see {@link ListBrandsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBrandsCommandOutput}.
   */
  paginateListBrands(
    args: ListBrandsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBrandsCommandOutput>;

  /**
   * @see {@link ListCustomPermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomPermissionsCommandOutput}.
   */
  paginateListCustomPermissions(
    args: ListCustomPermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomPermissionsCommandOutput>;

  /**
   * @see {@link ListDashboardsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDashboardsCommandOutput}.
   */
  paginateListDashboards(
    args: ListDashboardsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDashboardsCommandOutput>;

  /**
   * @see {@link ListDashboardVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDashboardVersionsCommandOutput}.
   */
  paginateListDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDashboardVersionsCommandOutput>;

  /**
   * @see {@link ListDataSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSetsCommandOutput}.
   */
  paginateListDataSets(
    args: ListDataSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSetsCommandOutput>;

  /**
   * @see {@link ListDataSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourcesCommandOutput}.
   */
  paginateListDataSources(
    args: ListDataSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourcesCommandOutput>;

  /**
   * @see {@link ListDlpSettingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDlpSettingsCommandOutput}.
   */
  paginateListDlpSettings(
    args: ListDlpSettingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDlpSettingsCommandOutput>;

  /**
   * @see {@link ListFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowsCommandOutput}.
   */
  paginateListFlows(
    args: ListFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowsCommandOutput>;

  /**
   * @see {@link ListFolderMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFolderMembersCommandOutput}.
   */
  paginateListFolderMembers(
    args: ListFolderMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFolderMembersCommandOutput>;

  /**
   * @see {@link ListFoldersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFoldersCommandOutput}.
   */
  paginateListFolders(
    args: ListFoldersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFoldersCommandOutput>;

  /**
   * @see {@link ListFoldersForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFoldersForResourceCommandOutput}.
   */
  paginateListFoldersForResource(
    args: ListFoldersForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFoldersForResourceCommandOutput>;

  /**
   * @see {@link ListGroupMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupMembershipsCommandOutput}.
   */
  paginateListGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupMembershipsCommandOutput>;

  /**
   * @see {@link ListGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupsCommandOutput}.
   */
  paginateListGroups(
    args: ListGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupsCommandOutput>;

  /**
   * @see {@link ListIAMPolicyAssignmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIAMPolicyAssignmentsCommandOutput}.
   */
  paginateListIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIAMPolicyAssignmentsCommandOutput>;

  /**
   * @see {@link ListIAMPolicyAssignmentsForUserCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIAMPolicyAssignmentsForUserCommandOutput}.
   */
  paginateListIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIAMPolicyAssignmentsForUserCommandOutput>;

  /**
   * @see {@link ListIngestionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIngestionsCommandOutput}.
   */
  paginateListIngestions(
    args: ListIngestionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIngestionsCommandOutput>;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKnowledgeBasesCommandOutput}.
   */
  paginateListKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKnowledgeBasesCommandOutput>;

  /**
   * @see {@link ListLimitsProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLimitsProfilesCommandOutput}.
   */
  paginateListLimitsProfiles(
    args: ListLimitsProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLimitsProfilesCommandOutput>;

  /**
   * @see {@link ListNamespacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNamespacesCommandOutput}.
   */
  paginateListNamespaces(
    args: ListNamespacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNamespacesCommandOutput>;

  /**
   * @see {@link ListOAuthClientApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOAuthClientApplicationsCommandOutput}.
   */
  paginateListOAuthClientApplications(
    args: ListOAuthClientApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOAuthClientApplicationsCommandOutput>;

  /**
   * @see {@link ListRoleMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoleMembershipsCommandOutput}.
   */
  paginateListRoleMemberships(
    args: ListRoleMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoleMembershipsCommandOutput>;

  /**
   * @see {@link ListTemplateAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplateAliasesCommandOutput}.
   */
  paginateListTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplateAliasesCommandOutput>;

  /**
   * @see {@link ListTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplatesCommandOutput}.
   */
  paginateListTemplates(
    args: ListTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplatesCommandOutput>;

  /**
   * @see {@link ListTemplateVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplateVersionsCommandOutput}.
   */
  paginateListTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplateVersionsCommandOutput>;

  /**
   * @see {@link ListThemesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThemesCommandOutput}.
   */
  paginateListThemes(
    args: ListThemesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThemesCommandOutput>;

  /**
   * @see {@link ListThemeVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThemeVersionsCommandOutput}.
   */
  paginateListThemeVersions(
    args: ListThemeVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThemeVersionsCommandOutput>;

  /**
   * @see {@link ListTopicsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTopicsCommandOutput}.
   */
  paginateListTopics(
    args: ListTopicsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTopicsCommandOutput>;

  /**
   * @see {@link ListTopicsV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTopicsV2CommandOutput}.
   */
  paginateListTopicsV2(
    args: ListTopicsV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTopicsV2CommandOutput>;

  /**
   * @see {@link ListUserGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserGroupsCommandOutput}.
   */
  paginateListUserGroups(
    args: ListUserGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserGroupsCommandOutput>;

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
   * @see {@link ListVPCConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVPCConnectionsCommandOutput}.
   */
  paginateListVPCConnections(
    args: ListVPCConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVPCConnectionsCommandOutput>;

  /**
   * @see {@link SearchActionConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchActionConnectorsCommandOutput}.
   */
  paginateSearchActionConnectors(
    args: SearchActionConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchActionConnectorsCommandOutput>;

  /**
   * @see {@link SearchAnalysesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAnalysesCommandOutput}.
   */
  paginateSearchAnalyses(
    args: SearchAnalysesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAnalysesCommandOutput>;

  /**
   * @see {@link SearchAppsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAppsCommandOutput}.
   */
  paginateSearchApps(
    args: SearchAppsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAppsCommandOutput>;

  /**
   * @see {@link SearchDashboardsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchDashboardsCommandOutput}.
   */
  paginateSearchDashboards(
    args: SearchDashboardsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchDashboardsCommandOutput>;

  /**
   * @see {@link SearchDataSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchDataSetsCommandOutput}.
   */
  paginateSearchDataSets(
    args: SearchDataSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchDataSetsCommandOutput>;

  /**
   * @see {@link SearchDataSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchDataSourcesCommandOutput}.
   */
  paginateSearchDataSources(
    args: SearchDataSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchDataSourcesCommandOutput>;

  /**
   * @see {@link SearchFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchFlowsCommandOutput}.
   */
  paginateSearchFlows(
    args: SearchFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchFlowsCommandOutput>;

  /**
   * @see {@link SearchFoldersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchFoldersCommandOutput}.
   */
  paginateSearchFolders(
    args: SearchFoldersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchFoldersCommandOutput>;

  /**
   * @see {@link SearchGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchGroupsCommandOutput}.
   */
  paginateSearchGroups(
    args: SearchGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchGroupsCommandOutput>;

  /**
   * @see {@link SearchKnowledgeBasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchKnowledgeBasesCommandOutput}.
   */
  paginateSearchKnowledgeBases(
    args: SearchKnowledgeBasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchKnowledgeBasesCommandOutput>;

  /**
   * @see {@link SearchTopicsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchTopicsCommandOutput}.
   */
  paginateSearchTopics(
    args: SearchTopicsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchTopicsCommandOutput>;

  /**
   * @see {@link SearchTopicsV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchTopicsV2CommandOutput}.
   */
  paginateSearchTopicsV2(
    args: SearchTopicsV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchTopicsV2CommandOutput>;
}

/**
 * <fullname>Amazon Quick API Reference</fullname>
 *          <p>Amazon Quick Sight is a fully managed, serverless business intelligence service for the
 *             Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon Quick Sight. </p>
 * @public
 */
export class QuickSight extends QuickSightClient implements QuickSight {}
createAggregatedClient(commands, QuickSight, { paginators });
