// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchCreateTopicReviewedAnswerCommandInput,
  type BatchCreateTopicReviewedAnswerCommandOutput,
  BatchCreateTopicReviewedAnswerCommand,
} from "./commands/BatchCreateTopicReviewedAnswerCommand";
import {
  type BatchDeleteTopicReviewedAnswerCommandInput,
  type BatchDeleteTopicReviewedAnswerCommandOutput,
  BatchDeleteTopicReviewedAnswerCommand,
} from "./commands/BatchDeleteTopicReviewedAnswerCommand";
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
  type CreateAnalysisCommandInput,
  type CreateAnalysisCommandOutput,
  CreateAnalysisCommand,
} from "./commands/CreateAnalysisCommand";
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
  type CreateNamespaceCommandInput,
  type CreateNamespaceCommandOutput,
  CreateNamespaceCommand,
} from "./commands/CreateNamespaceCommand";
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
  type DeleteAnalysisCommandInput,
  type DeleteAnalysisCommandOutput,
  DeleteAnalysisCommand,
} from "./commands/DeleteAnalysisCommand";
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
  type DeleteNamespaceCommandInput,
  type DeleteNamespaceCommandOutput,
  DeleteNamespaceCommand,
} from "./commands/DeleteNamespaceCommand";
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
  type DescribeNamespaceCommandInput,
  type DescribeNamespaceCommandOutput,
  DescribeNamespaceCommand,
} from "./commands/DescribeNamespaceCommand";
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
  type ListAnalysesCommandInput,
  type ListAnalysesCommandOutput,
  ListAnalysesCommand,
} from "./commands/ListAnalysesCommand";
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
  type ListNamespacesCommandInput,
  type ListNamespacesCommandOutput,
  ListNamespacesCommand,
} from "./commands/ListNamespacesCommand";
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
  type ListUserGroupsCommandInput,
  type ListUserGroupsCommandOutput,
  ListUserGroupsCommand,
} from "./commands/ListUserGroupsCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
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
  type SearchAnalysesCommandInput,
  type SearchAnalysesCommandOutput,
  SearchAnalysesCommand,
} from "./commands/SearchAnalysesCommand";
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
  type SearchTopicsCommandInput,
  type SearchTopicsCommandOutput,
  SearchTopicsCommand,
} from "./commands/SearchTopicsCommand";
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
  type UpdateTopicRefreshScheduleCommandInput,
  type UpdateTopicRefreshScheduleCommandOutput,
  UpdateTopicRefreshScheduleCommand,
} from "./commands/UpdateTopicRefreshScheduleCommand";
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
import { paginateListAssetBundleExportJobs } from "./pagination/ListAssetBundleExportJobsPaginator";
import { paginateListAssetBundleImportJobs } from "./pagination/ListAssetBundleImportJobsPaginator";
import { paginateListBrands } from "./pagination/ListBrandsPaginator";
import { paginateListCustomPermissions } from "./pagination/ListCustomPermissionsPaginator";
import { paginateListDashboards } from "./pagination/ListDashboardsPaginator";
import { paginateListDashboardVersions } from "./pagination/ListDashboardVersionsPaginator";
import { paginateListDataSets } from "./pagination/ListDataSetsPaginator";
import { paginateListDataSources } from "./pagination/ListDataSourcesPaginator";
import { paginateListFlows } from "./pagination/ListFlowsPaginator";
import { paginateListFolderMembers } from "./pagination/ListFolderMembersPaginator";
import { paginateListFoldersForResource } from "./pagination/ListFoldersForResourcePaginator";
import { paginateListFolders } from "./pagination/ListFoldersPaginator";
import { paginateListGroupMemberships } from "./pagination/ListGroupMembershipsPaginator";
import { paginateListGroups } from "./pagination/ListGroupsPaginator";
import { paginateListIAMPolicyAssignmentsForUser } from "./pagination/ListIAMPolicyAssignmentsForUserPaginator";
import { paginateListIAMPolicyAssignments } from "./pagination/ListIAMPolicyAssignmentsPaginator";
import { paginateListIngestions } from "./pagination/ListIngestionsPaginator";
import { paginateListNamespaces } from "./pagination/ListNamespacesPaginator";
import { paginateListRoleMemberships } from "./pagination/ListRoleMembershipsPaginator";
import { paginateListTemplateAliases } from "./pagination/ListTemplateAliasesPaginator";
import { paginateListTemplates } from "./pagination/ListTemplatesPaginator";
import { paginateListTemplateVersions } from "./pagination/ListTemplateVersionsPaginator";
import { paginateListThemes } from "./pagination/ListThemesPaginator";
import { paginateListThemeVersions } from "./pagination/ListThemeVersionsPaginator";
import { paginateListTopics } from "./pagination/ListTopicsPaginator";
import { paginateListUserGroups } from "./pagination/ListUserGroupsPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";
import { paginateListVPCConnections } from "./pagination/ListVPCConnectionsPaginator";
import { paginateSearchActionConnectors } from "./pagination/SearchActionConnectorsPaginator";
import { paginateSearchAnalyses } from "./pagination/SearchAnalysesPaginator";
import { paginateSearchDashboards } from "./pagination/SearchDashboardsPaginator";
import { paginateSearchDataSets } from "./pagination/SearchDataSetsPaginator";
import { paginateSearchDataSources } from "./pagination/SearchDataSourcesPaginator";
import { paginateSearchFlows } from "./pagination/SearchFlowsPaginator";
import { paginateSearchFolders } from "./pagination/SearchFoldersPaginator";
import { paginateSearchGroups } from "./pagination/SearchGroupsPaginator";
import { paginateSearchTopics } from "./pagination/SearchTopicsPaginator";
import { QuickSightClient } from "./QuickSightClient";

const commands = {
  BatchCreateTopicReviewedAnswerCommand,
  BatchDeleteTopicReviewedAnswerCommand,
  CancelIngestionCommand,
  CreateAccountCustomizationCommand,
  CreateAccountSubscriptionCommand,
  CreateActionConnectorCommand,
  CreateAnalysisCommand,
  CreateBrandCommand,
  CreateCustomPermissionsCommand,
  CreateDashboardCommand,
  CreateDataSetCommand,
  CreateDataSourceCommand,
  CreateFolderCommand,
  CreateFolderMembershipCommand,
  CreateGroupCommand,
  CreateGroupMembershipCommand,
  CreateIAMPolicyAssignmentCommand,
  CreateIngestionCommand,
  CreateNamespaceCommand,
  CreateRefreshScheduleCommand,
  CreateRoleMembershipCommand,
  CreateTemplateCommand,
  CreateTemplateAliasCommand,
  CreateThemeCommand,
  CreateThemeAliasCommand,
  CreateTopicCommand,
  CreateTopicRefreshScheduleCommand,
  CreateVPCConnectionCommand,
  DeleteAccountCustomizationCommand,
  DeleteAccountCustomPermissionCommand,
  DeleteAccountSubscriptionCommand,
  DeleteActionConnectorCommand,
  DeleteAnalysisCommand,
  DeleteBrandCommand,
  DeleteBrandAssignmentCommand,
  DeleteCustomPermissionsCommand,
  DeleteDashboardCommand,
  DeleteDataSetCommand,
  DeleteDataSetRefreshPropertiesCommand,
  DeleteDataSourceCommand,
  DeleteDefaultQBusinessApplicationCommand,
  DeleteFolderCommand,
  DeleteFolderMembershipCommand,
  DeleteGroupCommand,
  DeleteGroupMembershipCommand,
  DeleteIAMPolicyAssignmentCommand,
  DeleteIdentityPropagationConfigCommand,
  DeleteNamespaceCommand,
  DeleteRefreshScheduleCommand,
  DeleteRoleCustomPermissionCommand,
  DeleteRoleMembershipCommand,
  DeleteTemplateCommand,
  DeleteTemplateAliasCommand,
  DeleteThemeCommand,
  DeleteThemeAliasCommand,
  DeleteTopicCommand,
  DeleteTopicRefreshScheduleCommand,
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
  DescribeAnalysisCommand,
  DescribeAnalysisDefinitionCommand,
  DescribeAnalysisPermissionsCommand,
  DescribeAssetBundleExportJobCommand,
  DescribeAssetBundleImportJobCommand,
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
  DescribeFolderCommand,
  DescribeFolderPermissionsCommand,
  DescribeFolderResolvedPermissionsCommand,
  DescribeGroupCommand,
  DescribeGroupMembershipCommand,
  DescribeIAMPolicyAssignmentCommand,
  DescribeIngestionCommand,
  DescribeIpRestrictionCommand,
  DescribeKeyRegistrationCommand,
  DescribeNamespaceCommand,
  DescribeQPersonalizationConfigurationCommand,
  DescribeQuickSightQSearchConfigurationCommand,
  DescribeRefreshScheduleCommand,
  DescribeRoleCustomPermissionCommand,
  DescribeSelfUpgradeConfigurationCommand,
  DescribeTemplateCommand,
  DescribeTemplateAliasCommand,
  DescribeTemplateDefinitionCommand,
  DescribeTemplatePermissionsCommand,
  DescribeThemeCommand,
  DescribeThemeAliasCommand,
  DescribeThemePermissionsCommand,
  DescribeTopicCommand,
  DescribeTopicPermissionsCommand,
  DescribeTopicRefreshCommand,
  DescribeTopicRefreshScheduleCommand,
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
  ListAnalysesCommand,
  ListAssetBundleExportJobsCommand,
  ListAssetBundleImportJobsCommand,
  ListBrandsCommand,
  ListCustomPermissionsCommand,
  ListDashboardsCommand,
  ListDashboardVersionsCommand,
  ListDataSetsCommand,
  ListDataSourcesCommand,
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
  ListNamespacesCommand,
  ListRefreshSchedulesCommand,
  ListRoleMembershipsCommand,
  ListSelfUpgradesCommand,
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
  ListUserGroupsCommand,
  ListUsersCommand,
  ListVPCConnectionsCommand,
  PredictQAResultsCommand,
  PutDataSetRefreshPropertiesCommand,
  RegisterUserCommand,
  RestoreAnalysisCommand,
  SearchActionConnectorsCommand,
  SearchAnalysesCommand,
  SearchDashboardsCommand,
  SearchDataSetsCommand,
  SearchDataSourcesCommand,
  SearchFlowsCommand,
  SearchFoldersCommand,
  SearchGroupsCommand,
  SearchTopicsCommand,
  StartAssetBundleExportJobCommand,
  StartAssetBundleImportJobCommand,
  StartDashboardSnapshotJobCommand,
  StartDashboardSnapshotJobScheduleCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountCustomizationCommand,
  UpdateAccountCustomPermissionCommand,
  UpdateAccountSettingsCommand,
  UpdateActionConnectorCommand,
  UpdateActionConnectorPermissionsCommand,
  UpdateAnalysisCommand,
  UpdateAnalysisPermissionsCommand,
  UpdateApplicationWithTokenExchangeGrantCommand,
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
  UpdateFlowPermissionsCommand,
  UpdateFolderCommand,
  UpdateFolderPermissionsCommand,
  UpdateGroupCommand,
  UpdateIAMPolicyAssignmentCommand,
  UpdateIdentityPropagationConfigCommand,
  UpdateIpRestrictionCommand,
  UpdateKeyRegistrationCommand,
  UpdatePublicSharingSettingsCommand,
  UpdateQPersonalizationConfigurationCommand,
  UpdateQuickSightQSearchConfigurationCommand,
  UpdateRefreshScheduleCommand,
  UpdateRoleCustomPermissionCommand,
  UpdateSelfUpgradeCommand,
  UpdateSelfUpgradeConfigurationCommand,
  UpdateSPICECapacityConfigurationCommand,
  UpdateTemplateCommand,
  UpdateTemplateAliasCommand,
  UpdateTemplatePermissionsCommand,
  UpdateThemeCommand,
  UpdateThemeAliasCommand,
  UpdateThemePermissionsCommand,
  UpdateTopicCommand,
  UpdateTopicPermissionsCommand,
  UpdateTopicRefreshScheduleCommand,
  UpdateUserCommand,
  UpdateUserCustomPermissionCommand,
  UpdateVPCConnectionCommand,
};
const paginators = {
  paginateDescribeFolderPermissions,
  paginateDescribeFolderResolvedPermissions,
  paginateListActionConnectors,
  paginateListAnalyses,
  paginateListAssetBundleExportJobs,
  paginateListAssetBundleImportJobs,
  paginateListBrands,
  paginateListCustomPermissions,
  paginateListDashboards,
  paginateListDashboardVersions,
  paginateListDataSets,
  paginateListDataSources,
  paginateListFlows,
  paginateListFolderMembers,
  paginateListFolders,
  paginateListFoldersForResource,
  paginateListGroupMemberships,
  paginateListGroups,
  paginateListIAMPolicyAssignments,
  paginateListIAMPolicyAssignmentsForUser,
  paginateListIngestions,
  paginateListNamespaces,
  paginateListRoleMemberships,
  paginateListTemplateAliases,
  paginateListTemplates,
  paginateListTemplateVersions,
  paginateListThemes,
  paginateListThemeVersions,
  paginateListTopics,
  paginateListUserGroups,
  paginateListUsers,
  paginateListVPCConnections,
  paginateSearchActionConnectors,
  paginateSearchAnalyses,
  paginateSearchDashboards,
  paginateSearchDataSets,
  paginateSearchDataSources,
  paginateSearchFlows,
  paginateSearchFolders,
  paginateSearchGroups,
  paginateSearchTopics,
};

export interface QuickSight {
  /**
   * @see {@link BatchCreateTopicReviewedAnswerCommand}
   */
  batchCreateTopicReviewedAnswer(
    args: BatchCreateTopicReviewedAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateTopicReviewedAnswerCommandOutput>;
  batchCreateTopicReviewedAnswer(
    args: BatchCreateTopicReviewedAnswerCommandInput,
    cb: (err: any, data?: BatchCreateTopicReviewedAnswerCommandOutput) => void
  ): void;
  batchCreateTopicReviewedAnswer(
    args: BatchCreateTopicReviewedAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateTopicReviewedAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteTopicReviewedAnswerCommand}
   */
  batchDeleteTopicReviewedAnswer(
    args: BatchDeleteTopicReviewedAnswerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTopicReviewedAnswerCommandOutput>;
  batchDeleteTopicReviewedAnswer(
    args: BatchDeleteTopicReviewedAnswerCommandInput,
    cb: (err: any, data?: BatchDeleteTopicReviewedAnswerCommandOutput) => void
  ): void;
  batchDeleteTopicReviewedAnswer(
    args: BatchDeleteTopicReviewedAnswerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTopicReviewedAnswerCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelIngestionCommand}
   */
  cancelIngestion(
    args: CancelIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelIngestionCommandOutput>;
  cancelIngestion(
    args: CancelIngestionCommandInput,
    cb: (err: any, data?: CancelIngestionCommandOutput) => void
  ): void;
  cancelIngestion(
    args: CancelIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountCustomizationCommand}
   */
  createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountCustomizationCommandOutput>;
  createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void
  ): void;
  createAccountCustomization(
    args: CreateAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountSubscriptionCommand}
   */
  createAccountSubscription(
    args: CreateAccountSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountSubscriptionCommandOutput>;
  createAccountSubscription(
    args: CreateAccountSubscriptionCommandInput,
    cb: (err: any, data?: CreateAccountSubscriptionCommandOutput) => void
  ): void;
  createAccountSubscription(
    args: CreateAccountSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateActionConnectorCommand}
   */
  createActionConnector(
    args: CreateActionConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateActionConnectorCommandOutput>;
  createActionConnector(
    args: CreateActionConnectorCommandInput,
    cb: (err: any, data?: CreateActionConnectorCommandOutput) => void
  ): void;
  createActionConnector(
    args: CreateActionConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnalysisCommand}
   */
  createAnalysis(
    args: CreateAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnalysisCommandOutput>;
  createAnalysis(
    args: CreateAnalysisCommandInput,
    cb: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): void;
  createAnalysis(
    args: CreateAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBrandCommand}
   */
  createBrand(
    args: CreateBrandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBrandCommandOutput>;
  createBrand(
    args: CreateBrandCommandInput,
    cb: (err: any, data?: CreateBrandCommandOutput) => void
  ): void;
  createBrand(
    args: CreateBrandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomPermissionsCommand}
   */
  createCustomPermissions(
    args: CreateCustomPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomPermissionsCommandOutput>;
  createCustomPermissions(
    args: CreateCustomPermissionsCommandInput,
    cb: (err: any, data?: CreateCustomPermissionsCommandOutput) => void
  ): void;
  createCustomPermissions(
    args: CreateCustomPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDashboardCommandOutput>;
  createDashboard(
    args: CreateDashboardCommandInput,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSetCommand}
   */
  createDataSet(
    args: CreateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSetCommandOutput>;
  createDataSet(
    args: CreateDataSetCommandInput,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;
  createDataSet(
    args: CreateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFolderCommand}
   */
  createFolder(
    args: CreateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFolderCommandOutput>;
  createFolder(
    args: CreateFolderCommandInput,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;
  createFolder(
    args: CreateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFolderMembershipCommand}
   */
  createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFolderMembershipCommandOutput>;
  createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    cb: (err: any, data?: CreateFolderMembershipCommandOutput) => void
  ): void;
  createFolderMembership(
    args: CreateFolderMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFolderMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupMembershipCommand}
   */
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGroupMembershipCommandOutput>;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;
  createGroupMembership(
    args: CreateGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIAMPolicyAssignmentCommand}
   */
  createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIAMPolicyAssignmentCommandOutput>;
  createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  createIAMPolicyAssignment(
    args: CreateIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIngestionCommand}
   */
  createIngestion(
    args: CreateIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIngestionCommandOutput>;
  createIngestion(
    args: CreateIngestionCommandInput,
    cb: (err: any, data?: CreateIngestionCommandOutput) => void
  ): void;
  createIngestion(
    args: CreateIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNamespaceCommand}
   */
  createNamespace(
    args: CreateNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamespaceCommandOutput>;
  createNamespace(
    args: CreateNamespaceCommandInput,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;
  createNamespace(
    args: CreateNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRefreshScheduleCommand}
   */
  createRefreshSchedule(
    args: CreateRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRefreshScheduleCommandOutput>;
  createRefreshSchedule(
    args: CreateRefreshScheduleCommandInput,
    cb: (err: any, data?: CreateRefreshScheduleCommandOutput) => void
  ): void;
  createRefreshSchedule(
    args: CreateRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoleMembershipCommand}
   */
  createRoleMembership(
    args: CreateRoleMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoleMembershipCommandOutput>;
  createRoleMembership(
    args: CreateRoleMembershipCommandInput,
    cb: (err: any, data?: CreateRoleMembershipCommandOutput) => void
  ): void;
  createRoleMembership(
    args: CreateRoleMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoleMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateAliasCommand}
   */
  createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateAliasCommandOutput>;
  createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): void;
  createTemplateAlias(
    args: CreateTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThemeCommand}
   */
  createTheme(
    args: CreateThemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThemeCommandOutput>;
  createTheme(
    args: CreateThemeCommandInput,
    cb: (err: any, data?: CreateThemeCommandOutput) => void
  ): void;
  createTheme(
    args: CreateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThemeAliasCommand}
   */
  createThemeAlias(
    args: CreateThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThemeAliasCommandOutput>;
  createThemeAlias(
    args: CreateThemeAliasCommandInput,
    cb: (err: any, data?: CreateThemeAliasCommandOutput) => void
  ): void;
  createThemeAlias(
    args: CreateThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTopicCommandOutput>;
  createTopic(
    args: CreateTopicCommandInput,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;
  createTopic(
    args: CreateTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicRefreshScheduleCommand}
   */
  createTopicRefreshSchedule(
    args: CreateTopicRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTopicRefreshScheduleCommandOutput>;
  createTopicRefreshSchedule(
    args: CreateTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: CreateTopicRefreshScheduleCommandOutput) => void
  ): void;
  createTopicRefreshSchedule(
    args: CreateTopicRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVPCConnectionCommand}
   */
  createVPCConnection(
    args: CreateVPCConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVPCConnectionCommandOutput>;
  createVPCConnection(
    args: CreateVPCConnectionCommandInput,
    cb: (err: any, data?: CreateVPCConnectionCommandOutput) => void
  ): void;
  createVPCConnection(
    args: CreateVPCConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVPCConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountCustomizationCommand}
   */
  deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountCustomizationCommandOutput>;
  deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void
  ): void;
  deleteAccountCustomization(
    args: DeleteAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountCustomPermissionCommand}
   */
  deleteAccountCustomPermission(
    args: DeleteAccountCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountCustomPermissionCommandOutput>;
  deleteAccountCustomPermission(
    args: DeleteAccountCustomPermissionCommandInput,
    cb: (err: any, data?: DeleteAccountCustomPermissionCommandOutput) => void
  ): void;
  deleteAccountCustomPermission(
    args: DeleteAccountCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountSubscriptionCommand}
   */
  deleteAccountSubscription(
    args: DeleteAccountSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountSubscriptionCommandOutput>;
  deleteAccountSubscription(
    args: DeleteAccountSubscriptionCommandInput,
    cb: (err: any, data?: DeleteAccountSubscriptionCommandOutput) => void
  ): void;
  deleteAccountSubscription(
    args: DeleteAccountSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteActionConnectorCommand}
   */
  deleteActionConnector(
    args: DeleteActionConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteActionConnectorCommandOutput>;
  deleteActionConnector(
    args: DeleteActionConnectorCommandInput,
    cb: (err: any, data?: DeleteActionConnectorCommandOutput) => void
  ): void;
  deleteActionConnector(
    args: DeleteActionConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnalysisCommand}
   */
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalysisCommandOutput>;
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    cb: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): void;
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrandCommand}
   */
  deleteBrand(
    args: DeleteBrandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrandCommandOutput>;
  deleteBrand(
    args: DeleteBrandCommandInput,
    cb: (err: any, data?: DeleteBrandCommandOutput) => void
  ): void;
  deleteBrand(
    args: DeleteBrandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrandAssignmentCommand}
   */
  deleteBrandAssignment(
    args: DeleteBrandAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrandAssignmentCommandOutput>;
  deleteBrandAssignment(
    args: DeleteBrandAssignmentCommandInput,
    cb: (err: any, data?: DeleteBrandAssignmentCommandOutput) => void
  ): void;
  deleteBrandAssignment(
    args: DeleteBrandAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrandAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomPermissionsCommand}
   */
  deleteCustomPermissions(
    args: DeleteCustomPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomPermissionsCommandOutput>;
  deleteCustomPermissions(
    args: DeleteCustomPermissionsCommandInput,
    cb: (err: any, data?: DeleteCustomPermissionsCommandOutput) => void
  ): void;
  deleteCustomPermissions(
    args: DeleteCustomPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardCommandOutput>;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSetCommand}
   */
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSetCommandOutput>;
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;
  deleteDataSet(
    args: DeleteDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSetRefreshPropertiesCommand}
   */
  deleteDataSetRefreshProperties(
    args: DeleteDataSetRefreshPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSetRefreshPropertiesCommandOutput>;
  deleteDataSetRefreshProperties(
    args: DeleteDataSetRefreshPropertiesCommandInput,
    cb: (err: any, data?: DeleteDataSetRefreshPropertiesCommandOutput) => void
  ): void;
  deleteDataSetRefreshProperties(
    args: DeleteDataSetRefreshPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSetRefreshPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDefaultQBusinessApplicationCommand}
   */
  deleteDefaultQBusinessApplication(
    args: DeleteDefaultQBusinessApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDefaultQBusinessApplicationCommandOutput>;
  deleteDefaultQBusinessApplication(
    args: DeleteDefaultQBusinessApplicationCommandInput,
    cb: (err: any, data?: DeleteDefaultQBusinessApplicationCommandOutput) => void
  ): void;
  deleteDefaultQBusinessApplication(
    args: DeleteDefaultQBusinessApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDefaultQBusinessApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFolderCommand}
   */
  deleteFolder(
    args: DeleteFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderCommandOutput>;
  deleteFolder(
    args: DeleteFolderCommandInput,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;
  deleteFolder(
    args: DeleteFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFolderMembershipCommand}
   */
  deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFolderMembershipCommandOutput>;
  deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    cb: (err: any, data?: DeleteFolderMembershipCommandOutput) => void
  ): void;
  deleteFolderMembership(
    args: DeleteFolderMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFolderMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupMembershipCommand}
   */
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupMembershipCommandOutput>;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;
  deleteGroupMembership(
    args: DeleteGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIAMPolicyAssignmentCommand}
   */
  deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIAMPolicyAssignmentCommandOutput>;
  deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): void;
  deleteIAMPolicyAssignment(
    args: DeleteIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityPropagationConfigCommand}
   */
  deleteIdentityPropagationConfig(
    args: DeleteIdentityPropagationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityPropagationConfigCommandOutput>;
  deleteIdentityPropagationConfig(
    args: DeleteIdentityPropagationConfigCommandInput,
    cb: (err: any, data?: DeleteIdentityPropagationConfigCommandOutput) => void
  ): void;
  deleteIdentityPropagationConfig(
    args: DeleteIdentityPropagationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityPropagationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRefreshScheduleCommand}
   */
  deleteRefreshSchedule(
    args: DeleteRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRefreshScheduleCommandOutput>;
  deleteRefreshSchedule(
    args: DeleteRefreshScheduleCommandInput,
    cb: (err: any, data?: DeleteRefreshScheduleCommandOutput) => void
  ): void;
  deleteRefreshSchedule(
    args: DeleteRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoleCustomPermissionCommand}
   */
  deleteRoleCustomPermission(
    args: DeleteRoleCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoleCustomPermissionCommandOutput>;
  deleteRoleCustomPermission(
    args: DeleteRoleCustomPermissionCommandInput,
    cb: (err: any, data?: DeleteRoleCustomPermissionCommandOutput) => void
  ): void;
  deleteRoleCustomPermission(
    args: DeleteRoleCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoleMembershipCommand}
   */
  deleteRoleMembership(
    args: DeleteRoleMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoleMembershipCommandOutput>;
  deleteRoleMembership(
    args: DeleteRoleMembershipCommandInput,
    cb: (err: any, data?: DeleteRoleMembershipCommandOutput) => void
  ): void;
  deleteRoleMembership(
    args: DeleteRoleMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateAliasCommand}
   */
  deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateAliasCommandOutput>;
  deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): void;
  deleteTemplateAlias(
    args: DeleteTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThemeCommand}
   */
  deleteTheme(
    args: DeleteThemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThemeCommandOutput>;
  deleteTheme(
    args: DeleteThemeCommandInput,
    cb: (err: any, data?: DeleteThemeCommandOutput) => void
  ): void;
  deleteTheme(
    args: DeleteThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThemeAliasCommand}
   */
  deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThemeAliasCommandOutput>;
  deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void
  ): void;
  deleteThemeAlias(
    args: DeleteThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTopicCommandOutput>;
  deleteTopic(
    args: DeleteTopicCommandInput,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;
  deleteTopic(
    args: DeleteTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicRefreshScheduleCommand}
   */
  deleteTopicRefreshSchedule(
    args: DeleteTopicRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTopicRefreshScheduleCommandOutput>;
  deleteTopicRefreshSchedule(
    args: DeleteTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: DeleteTopicRefreshScheduleCommandOutput) => void
  ): void;
  deleteTopicRefreshSchedule(
    args: DeleteTopicRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicRefreshScheduleCommandOutput) => void
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
   * @see {@link DeleteUserByPrincipalIdCommand}
   */
  deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserByPrincipalIdCommandOutput>;
  deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): void;
  deleteUserByPrincipalId(
    args: DeleteUserByPrincipalIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserByPrincipalIdCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCustomPermissionCommand}
   */
  deleteUserCustomPermission(
    args: DeleteUserCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCustomPermissionCommandOutput>;
  deleteUserCustomPermission(
    args: DeleteUserCustomPermissionCommandInput,
    cb: (err: any, data?: DeleteUserCustomPermissionCommandOutput) => void
  ): void;
  deleteUserCustomPermission(
    args: DeleteUserCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVPCConnectionCommand}
   */
  deleteVPCConnection(
    args: DeleteVPCConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVPCConnectionCommandOutput>;
  deleteVPCConnection(
    args: DeleteVPCConnectionCommandInput,
    cb: (err: any, data?: DeleteVPCConnectionCommandOutput) => void
  ): void;
  deleteVPCConnection(
    args: DeleteVPCConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVPCConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountCustomizationCommand}
   */
  describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCustomizationCommandOutput>;
  describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void
  ): void;
  describeAccountCustomization(
    args: DescribeAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountCustomPermissionCommand}
   */
  describeAccountCustomPermission(
    args: DescribeAccountCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCustomPermissionCommandOutput>;
  describeAccountCustomPermission(
    args: DescribeAccountCustomPermissionCommandInput,
    cb: (err: any, data?: DescribeAccountCustomPermissionCommandOutput) => void
  ): void;
  describeAccountCustomPermission(
    args: DescribeAccountCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountSettingsCommand}
   */
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountSettingsCommandOutput>;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountSubscriptionCommand}
   */
  describeAccountSubscription(
    args: DescribeAccountSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountSubscriptionCommandOutput>;
  describeAccountSubscription(
    args: DescribeAccountSubscriptionCommandInput,
    cb: (err: any, data?: DescribeAccountSubscriptionCommandOutput) => void
  ): void;
  describeAccountSubscription(
    args: DescribeAccountSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActionConnectorCommand}
   */
  describeActionConnector(
    args: DescribeActionConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActionConnectorCommandOutput>;
  describeActionConnector(
    args: DescribeActionConnectorCommandInput,
    cb: (err: any, data?: DescribeActionConnectorCommandOutput) => void
  ): void;
  describeActionConnector(
    args: DescribeActionConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActionConnectorPermissionsCommand}
   */
  describeActionConnectorPermissions(
    args: DescribeActionConnectorPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActionConnectorPermissionsCommandOutput>;
  describeActionConnectorPermissions(
    args: DescribeActionConnectorPermissionsCommandInput,
    cb: (err: any, data?: DescribeActionConnectorPermissionsCommandOutput) => void
  ): void;
  describeActionConnectorPermissions(
    args: DescribeActionConnectorPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActionConnectorPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnalysisCommand}
   */
  describeAnalysis(
    args: DescribeAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnalysisCommandOutput>;
  describeAnalysis(
    args: DescribeAnalysisCommandInput,
    cb: (err: any, data?: DescribeAnalysisCommandOutput) => void
  ): void;
  describeAnalysis(
    args: DescribeAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnalysisDefinitionCommand}
   */
  describeAnalysisDefinition(
    args: DescribeAnalysisDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnalysisDefinitionCommandOutput>;
  describeAnalysisDefinition(
    args: DescribeAnalysisDefinitionCommandInput,
    cb: (err: any, data?: DescribeAnalysisDefinitionCommandOutput) => void
  ): void;
  describeAnalysisDefinition(
    args: DescribeAnalysisDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnalysisDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnalysisPermissionsCommand}
   */
  describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnalysisPermissionsCommandOutput>;
  describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void
  ): void;
  describeAnalysisPermissions(
    args: DescribeAnalysisPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnalysisPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetBundleExportJobCommand}
   */
  describeAssetBundleExportJob(
    args: DescribeAssetBundleExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetBundleExportJobCommandOutput>;
  describeAssetBundleExportJob(
    args: DescribeAssetBundleExportJobCommandInput,
    cb: (err: any, data?: DescribeAssetBundleExportJobCommandOutput) => void
  ): void;
  describeAssetBundleExportJob(
    args: DescribeAssetBundleExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetBundleExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetBundleImportJobCommand}
   */
  describeAssetBundleImportJob(
    args: DescribeAssetBundleImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetBundleImportJobCommandOutput>;
  describeAssetBundleImportJob(
    args: DescribeAssetBundleImportJobCommandInput,
    cb: (err: any, data?: DescribeAssetBundleImportJobCommandOutput) => void
  ): void;
  describeAssetBundleImportJob(
    args: DescribeAssetBundleImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetBundleImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrandCommand}
   */
  describeBrand(
    args: DescribeBrandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrandCommandOutput>;
  describeBrand(
    args: DescribeBrandCommandInput,
    cb: (err: any, data?: DescribeBrandCommandOutput) => void
  ): void;
  describeBrand(
    args: DescribeBrandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrandAssignmentCommand}
   */
  describeBrandAssignment(
    args: DescribeBrandAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrandAssignmentCommandOutput>;
  describeBrandAssignment(
    args: DescribeBrandAssignmentCommandInput,
    cb: (err: any, data?: DescribeBrandAssignmentCommandOutput) => void
  ): void;
  describeBrandAssignment(
    args: DescribeBrandAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrandAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrandPublishedVersionCommand}
   */
  describeBrandPublishedVersion(
    args: DescribeBrandPublishedVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrandPublishedVersionCommandOutput>;
  describeBrandPublishedVersion(
    args: DescribeBrandPublishedVersionCommandInput,
    cb: (err: any, data?: DescribeBrandPublishedVersionCommandOutput) => void
  ): void;
  describeBrandPublishedVersion(
    args: DescribeBrandPublishedVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrandPublishedVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomPermissionsCommand}
   */
  describeCustomPermissions(
    args: DescribeCustomPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomPermissionsCommandOutput>;
  describeCustomPermissions(
    args: DescribeCustomPermissionsCommandInput,
    cb: (err: any, data?: DescribeCustomPermissionsCommandOutput) => void
  ): void;
  describeCustomPermissions(
    args: DescribeCustomPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardCommand}
   */
  describeDashboard(
    args: DescribeDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardCommandOutput>;
  describeDashboard(
    args: DescribeDashboardCommandInput,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;
  describeDashboard(
    args: DescribeDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardDefinitionCommand}
   */
  describeDashboardDefinition(
    args: DescribeDashboardDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardDefinitionCommandOutput>;
  describeDashboardDefinition(
    args: DescribeDashboardDefinitionCommandInput,
    cb: (err: any, data?: DescribeDashboardDefinitionCommandOutput) => void
  ): void;
  describeDashboardDefinition(
    args: DescribeDashboardDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardPermissionsCommand}
   */
  describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardPermissionsCommandOutput>;
  describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): void;
  describeDashboardPermissions(
    args: DescribeDashboardPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardSnapshotJobCommand}
   */
  describeDashboardSnapshotJob(
    args: DescribeDashboardSnapshotJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardSnapshotJobCommandOutput>;
  describeDashboardSnapshotJob(
    args: DescribeDashboardSnapshotJobCommandInput,
    cb: (err: any, data?: DescribeDashboardSnapshotJobCommandOutput) => void
  ): void;
  describeDashboardSnapshotJob(
    args: DescribeDashboardSnapshotJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardSnapshotJobResultCommand}
   */
  describeDashboardSnapshotJobResult(
    args: DescribeDashboardSnapshotJobResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardSnapshotJobResultCommandOutput>;
  describeDashboardSnapshotJobResult(
    args: DescribeDashboardSnapshotJobResultCommandInput,
    cb: (err: any, data?: DescribeDashboardSnapshotJobResultCommandOutput) => void
  ): void;
  describeDashboardSnapshotJobResult(
    args: DescribeDashboardSnapshotJobResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardSnapshotJobResultCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardsQAConfigurationCommand}
   */
  describeDashboardsQAConfiguration(
    args: DescribeDashboardsQAConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardsQAConfigurationCommandOutput>;
  describeDashboardsQAConfiguration(
    args: DescribeDashboardsQAConfigurationCommandInput,
    cb: (err: any, data?: DescribeDashboardsQAConfigurationCommandOutput) => void
  ): void;
  describeDashboardsQAConfiguration(
    args: DescribeDashboardsQAConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardsQAConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSetCommand}
   */
  describeDataSet(
    args: DescribeDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSetCommandOutput>;
  describeDataSet(
    args: DescribeDataSetCommandInput,
    cb: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): void;
  describeDataSet(
    args: DescribeDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSetPermissionsCommand}
   */
  describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSetPermissionsCommandOutput>;
  describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): void;
  describeDataSetPermissions(
    args: DescribeDataSetPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSetPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSetRefreshPropertiesCommand}
   */
  describeDataSetRefreshProperties(
    args: DescribeDataSetRefreshPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSetRefreshPropertiesCommandOutput>;
  describeDataSetRefreshProperties(
    args: DescribeDataSetRefreshPropertiesCommandInput,
    cb: (err: any, data?: DescribeDataSetRefreshPropertiesCommandOutput) => void
  ): void;
  describeDataSetRefreshProperties(
    args: DescribeDataSetRefreshPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSetRefreshPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourceCommand}
   */
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourceCommandOutput>;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourcePermissionsCommand}
   */
  describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourcePermissionsCommandOutput>;
  describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): void;
  describeDataSourcePermissions(
    args: DescribeDataSourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourcePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultQBusinessApplicationCommand}
   */
  describeDefaultQBusinessApplication(
    args: DescribeDefaultQBusinessApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultQBusinessApplicationCommandOutput>;
  describeDefaultQBusinessApplication(
    args: DescribeDefaultQBusinessApplicationCommandInput,
    cb: (err: any, data?: DescribeDefaultQBusinessApplicationCommandOutput) => void
  ): void;
  describeDefaultQBusinessApplication(
    args: DescribeDefaultQBusinessApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultQBusinessApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderCommand}
   */
  describeFolder(
    args: DescribeFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderCommandOutput>;
  describeFolder(
    args: DescribeFolderCommandInput,
    cb: (err: any, data?: DescribeFolderCommandOutput) => void
  ): void;
  describeFolder(
    args: DescribeFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderPermissionsCommand}
   */
  describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderPermissionsCommandOutput>;
  describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    cb: (err: any, data?: DescribeFolderPermissionsCommandOutput) => void
  ): void;
  describeFolderPermissions(
    args: DescribeFolderPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFolderResolvedPermissionsCommand}
   */
  describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderResolvedPermissionsCommandOutput>;
  describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    cb: (err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void
  ): void;
  describeFolderResolvedPermissions(
    args: DescribeFolderResolvedPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFolderResolvedPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupCommand}
   */
  describeGroup(
    args: DescribeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupCommandOutput>;
  describeGroup(
    args: DescribeGroupCommandInput,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  describeGroup(
    args: DescribeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupMembershipCommand}
   */
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupMembershipCommandOutput>;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;
  describeGroupMembership(
    args: DescribeGroupMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIAMPolicyAssignmentCommand}
   */
  describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIAMPolicyAssignmentCommandOutput>;
  describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): void;
  describeIAMPolicyAssignment(
    args: DescribeIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIngestionCommand}
   */
  describeIngestion(
    args: DescribeIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIngestionCommandOutput>;
  describeIngestion(
    args: DescribeIngestionCommandInput,
    cb: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): void;
  describeIngestion(
    args: DescribeIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpRestrictionCommand}
   */
  describeIpRestriction(
    args: DescribeIpRestrictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpRestrictionCommandOutput>;
  describeIpRestriction(
    args: DescribeIpRestrictionCommandInput,
    cb: (err: any, data?: DescribeIpRestrictionCommandOutput) => void
  ): void;
  describeIpRestriction(
    args: DescribeIpRestrictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpRestrictionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyRegistrationCommand}
   */
  describeKeyRegistration(
    args: DescribeKeyRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeyRegistrationCommandOutput>;
  describeKeyRegistration(
    args: DescribeKeyRegistrationCommandInput,
    cb: (err: any, data?: DescribeKeyRegistrationCommandOutput) => void
  ): void;
  describeKeyRegistration(
    args: DescribeKeyRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNamespaceCommand}
   */
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNamespaceCommandOutput>;
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQPersonalizationConfigurationCommand}
   */
  describeQPersonalizationConfiguration(
    args: DescribeQPersonalizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQPersonalizationConfigurationCommandOutput>;
  describeQPersonalizationConfiguration(
    args: DescribeQPersonalizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeQPersonalizationConfigurationCommandOutput) => void
  ): void;
  describeQPersonalizationConfiguration(
    args: DescribeQPersonalizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQPersonalizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuickSightQSearchConfigurationCommand}
   */
  describeQuickSightQSearchConfiguration(
    args: DescribeQuickSightQSearchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuickSightQSearchConfigurationCommandOutput>;
  describeQuickSightQSearchConfiguration(
    args: DescribeQuickSightQSearchConfigurationCommandInput,
    cb: (err: any, data?: DescribeQuickSightQSearchConfigurationCommandOutput) => void
  ): void;
  describeQuickSightQSearchConfiguration(
    args: DescribeQuickSightQSearchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuickSightQSearchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRefreshScheduleCommand}
   */
  describeRefreshSchedule(
    args: DescribeRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRefreshScheduleCommandOutput>;
  describeRefreshSchedule(
    args: DescribeRefreshScheduleCommandInput,
    cb: (err: any, data?: DescribeRefreshScheduleCommandOutput) => void
  ): void;
  describeRefreshSchedule(
    args: DescribeRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRoleCustomPermissionCommand}
   */
  describeRoleCustomPermission(
    args: DescribeRoleCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRoleCustomPermissionCommandOutput>;
  describeRoleCustomPermission(
    args: DescribeRoleCustomPermissionCommandInput,
    cb: (err: any, data?: DescribeRoleCustomPermissionCommandOutput) => void
  ): void;
  describeRoleCustomPermission(
    args: DescribeRoleCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRoleCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSelfUpgradeConfigurationCommand}
   */
  describeSelfUpgradeConfiguration(
    args: DescribeSelfUpgradeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSelfUpgradeConfigurationCommandOutput>;
  describeSelfUpgradeConfiguration(
    args: DescribeSelfUpgradeConfigurationCommandInput,
    cb: (err: any, data?: DescribeSelfUpgradeConfigurationCommandOutput) => void
  ): void;
  describeSelfUpgradeConfiguration(
    args: DescribeSelfUpgradeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSelfUpgradeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplateCommand}
   */
  describeTemplate(
    args: DescribeTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTemplateCommandOutput>;
  describeTemplate(
    args: DescribeTemplateCommandInput,
    cb: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): void;
  describeTemplate(
    args: DescribeTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplateAliasCommand}
   */
  describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTemplateAliasCommandOutput>;
  describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): void;
  describeTemplateAlias(
    args: DescribeTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplateDefinitionCommand}
   */
  describeTemplateDefinition(
    args: DescribeTemplateDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTemplateDefinitionCommandOutput>;
  describeTemplateDefinition(
    args: DescribeTemplateDefinitionCommandInput,
    cb: (err: any, data?: DescribeTemplateDefinitionCommandOutput) => void
  ): void;
  describeTemplateDefinition(
    args: DescribeTemplateDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTemplateDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTemplatePermissionsCommand}
   */
  describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTemplatePermissionsCommandOutput>;
  describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): void;
  describeTemplatePermissions(
    args: DescribeTemplatePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTemplatePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemeCommand}
   */
  describeTheme(
    args: DescribeThemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThemeCommandOutput>;
  describeTheme(
    args: DescribeThemeCommandInput,
    cb: (err: any, data?: DescribeThemeCommandOutput) => void
  ): void;
  describeTheme(
    args: DescribeThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemeAliasCommand}
   */
  describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThemeAliasCommandOutput>;
  describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void
  ): void;
  describeThemeAlias(
    args: DescribeThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemePermissionsCommand}
   */
  describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThemePermissionsCommandOutput>;
  describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void
  ): void;
  describeThemePermissions(
    args: DescribeThemePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThemePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicCommand}
   */
  describeTopic(
    args: DescribeTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTopicCommandOutput>;
  describeTopic(
    args: DescribeTopicCommandInput,
    cb: (err: any, data?: DescribeTopicCommandOutput) => void
  ): void;
  describeTopic(
    args: DescribeTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicPermissionsCommand}
   */
  describeTopicPermissions(
    args: DescribeTopicPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTopicPermissionsCommandOutput>;
  describeTopicPermissions(
    args: DescribeTopicPermissionsCommandInput,
    cb: (err: any, data?: DescribeTopicPermissionsCommandOutput) => void
  ): void;
  describeTopicPermissions(
    args: DescribeTopicPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTopicPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicRefreshCommand}
   */
  describeTopicRefresh(
    args: DescribeTopicRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTopicRefreshCommandOutput>;
  describeTopicRefresh(
    args: DescribeTopicRefreshCommandInput,
    cb: (err: any, data?: DescribeTopicRefreshCommandOutput) => void
  ): void;
  describeTopicRefresh(
    args: DescribeTopicRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTopicRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicRefreshScheduleCommand}
   */
  describeTopicRefreshSchedule(
    args: DescribeTopicRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTopicRefreshScheduleCommandOutput>;
  describeTopicRefreshSchedule(
    args: DescribeTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: DescribeTopicRefreshScheduleCommandOutput) => void
  ): void;
  describeTopicRefreshSchedule(
    args: DescribeTopicRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTopicRefreshScheduleCommandOutput) => void
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
   * @see {@link DescribeVPCConnectionCommand}
   */
  describeVPCConnection(
    args: DescribeVPCConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVPCConnectionCommandOutput>;
  describeVPCConnection(
    args: DescribeVPCConnectionCommandInput,
    cb: (err: any, data?: DescribeVPCConnectionCommandOutput) => void
  ): void;
  describeVPCConnection(
    args: DescribeVPCConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVPCConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateEmbedUrlForAnonymousUserCommand}
   */
  generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput>;
  generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void
  ): void;
  generateEmbedUrlForAnonymousUser(
    args: GenerateEmbedUrlForAnonymousUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateEmbedUrlForAnonymousUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateEmbedUrlForRegisteredUserCommand}
   */
  generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput>;
  generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void
  ): void;
  generateEmbedUrlForRegisteredUser(
    args: GenerateEmbedUrlForRegisteredUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommand}
   */
  generateEmbedUrlForRegisteredUserWithIdentity(
    args: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput>;
  generateEmbedUrlForRegisteredUserWithIdentity(
    args: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput) => void
  ): void;
  generateEmbedUrlForRegisteredUserWithIdentity(
    args: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDashboardEmbedUrlCommand}
   */
  getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDashboardEmbedUrlCommandOutput>;
  getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): void;
  getDashboardEmbedUrl(
    args: GetDashboardEmbedUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDashboardEmbedUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowMetadataCommand}
   */
  getFlowMetadata(
    args: GetFlowMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowMetadataCommandOutput>;
  getFlowMetadata(
    args: GetFlowMetadataCommandInput,
    cb: (err: any, data?: GetFlowMetadataCommandOutput) => void
  ): void;
  getFlowMetadata(
    args: GetFlowMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowPermissionsCommand}
   */
  getFlowPermissions(
    args: GetFlowPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowPermissionsCommandOutput>;
  getFlowPermissions(
    args: GetFlowPermissionsCommandInput,
    cb: (err: any, data?: GetFlowPermissionsCommandOutput) => void
  ): void;
  getFlowPermissions(
    args: GetFlowPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityContextCommand}
   */
  getIdentityContext(
    args: GetIdentityContextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityContextCommandOutput>;
  getIdentityContext(
    args: GetIdentityContextCommandInput,
    cb: (err: any, data?: GetIdentityContextCommandOutput) => void
  ): void;
  getIdentityContext(
    args: GetIdentityContextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityContextCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionEmbedUrlCommand}
   */
  getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionEmbedUrlCommandOutput>;
  getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void
  ): void;
  getSessionEmbedUrl(
    args: GetSessionEmbedUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionEmbedUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionConnectorsCommand}
   */
  listActionConnectors(
    args: ListActionConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActionConnectorsCommandOutput>;
  listActionConnectors(
    args: ListActionConnectorsCommandInput,
    cb: (err: any, data?: ListActionConnectorsCommandOutput) => void
  ): void;
  listActionConnectors(
    args: ListActionConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalysesCommand}
   */
  listAnalyses(
    args: ListAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalysesCommandOutput>;
  listAnalyses(
    args: ListAnalysesCommandInput,
    cb: (err: any, data?: ListAnalysesCommandOutput) => void
  ): void;
  listAnalyses(
    args: ListAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetBundleExportJobsCommand}
   */
  listAssetBundleExportJobs(
    args: ListAssetBundleExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetBundleExportJobsCommandOutput>;
  listAssetBundleExportJobs(
    args: ListAssetBundleExportJobsCommandInput,
    cb: (err: any, data?: ListAssetBundleExportJobsCommandOutput) => void
  ): void;
  listAssetBundleExportJobs(
    args: ListAssetBundleExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetBundleExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetBundleImportJobsCommand}
   */
  listAssetBundleImportJobs(
    args: ListAssetBundleImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetBundleImportJobsCommandOutput>;
  listAssetBundleImportJobs(
    args: ListAssetBundleImportJobsCommandInput,
    cb: (err: any, data?: ListAssetBundleImportJobsCommandOutput) => void
  ): void;
  listAssetBundleImportJobs(
    args: ListAssetBundleImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetBundleImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrandsCommand}
   */
  listBrands(
    args: ListBrandsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBrandsCommandOutput>;
  listBrands(
    args: ListBrandsCommandInput,
    cb: (err: any, data?: ListBrandsCommandOutput) => void
  ): void;
  listBrands(
    args: ListBrandsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrandsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomPermissionsCommand}
   */
  listCustomPermissions(
    args: ListCustomPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomPermissionsCommandOutput>;
  listCustomPermissions(
    args: ListCustomPermissionsCommandInput,
    cb: (err: any, data?: ListCustomPermissionsCommandOutput) => void
  ): void;
  listCustomPermissions(
    args: ListCustomPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardVersionsCommand}
   */
  listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardVersionsCommandOutput>;
  listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): void;
  listDashboardVersions(
    args: ListDashboardVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSetsCommand}
   */
  listDataSets(
    args: ListDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetsCommandOutput>;
  listDataSets(
    args: ListDataSetsCommandInput,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  listDataSets(
    args: ListDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(
    args: ListFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFolderMembersCommand}
   */
  listFolderMembers(
    args: ListFolderMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFolderMembersCommandOutput>;
  listFolderMembers(
    args: ListFolderMembersCommandInput,
    cb: (err: any, data?: ListFolderMembersCommandOutput) => void
  ): void;
  listFolderMembers(
    args: ListFolderMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFolderMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFoldersCommand}
   */
  listFolders(
    args: ListFoldersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFoldersCommandOutput>;
  listFolders(
    args: ListFoldersCommandInput,
    cb: (err: any, data?: ListFoldersCommandOutput) => void
  ): void;
  listFolders(
    args: ListFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFoldersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFoldersForResourceCommand}
   */
  listFoldersForResource(
    args: ListFoldersForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFoldersForResourceCommandOutput>;
  listFoldersForResource(
    args: ListFoldersForResourceCommandInput,
    cb: (err: any, data?: ListFoldersForResourceCommandOutput) => void
  ): void;
  listFoldersForResource(
    args: ListFoldersForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFoldersForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembershipsCommand}
   */
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembershipsCommandOutput>;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;
  listGroupMemberships(
    args: ListGroupMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIAMPolicyAssignmentsCommand}
   */
  listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIAMPolicyAssignmentsCommandOutput>;
  listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): void;
  listIAMPolicyAssignments(
    args: ListIAMPolicyAssignmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIAMPolicyAssignmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIAMPolicyAssignmentsForUserCommand}
   */
  listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput>;
  listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): void;
  listIAMPolicyAssignmentsForUser(
    args: ListIAMPolicyAssignmentsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIAMPolicyAssignmentsForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityPropagationConfigsCommand}
   */
  listIdentityPropagationConfigs(
    args: ListIdentityPropagationConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityPropagationConfigsCommandOutput>;
  listIdentityPropagationConfigs(
    args: ListIdentityPropagationConfigsCommandInput,
    cb: (err: any, data?: ListIdentityPropagationConfigsCommandOutput) => void
  ): void;
  listIdentityPropagationConfigs(
    args: ListIdentityPropagationConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityPropagationConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIngestionsCommand}
   */
  listIngestions(
    args: ListIngestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngestionsCommandOutput>;
  listIngestions(
    args: ListIngestionsCommandInput,
    cb: (err: any, data?: ListIngestionsCommandOutput) => void
  ): void;
  listIngestions(
    args: ListIngestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIngestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNamespacesCommand}
   */
  listNamespaces(
    args: ListNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamespacesCommandOutput>;
  listNamespaces(
    args: ListNamespacesCommandInput,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  listNamespaces(
    args: ListNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRefreshSchedulesCommand}
   */
  listRefreshSchedules(
    args: ListRefreshSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRefreshSchedulesCommandOutput>;
  listRefreshSchedules(
    args: ListRefreshSchedulesCommandInput,
    cb: (err: any, data?: ListRefreshSchedulesCommandOutput) => void
  ): void;
  listRefreshSchedules(
    args: ListRefreshSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRefreshSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoleMembershipsCommand}
   */
  listRoleMemberships(
    args: ListRoleMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoleMembershipsCommandOutput>;
  listRoleMemberships(
    args: ListRoleMembershipsCommandInput,
    cb: (err: any, data?: ListRoleMembershipsCommandOutput) => void
  ): void;
  listRoleMemberships(
    args: ListRoleMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoleMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSelfUpgradesCommand}
   */
  listSelfUpgrades(
    args: ListSelfUpgradesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSelfUpgradesCommandOutput>;
  listSelfUpgrades(
    args: ListSelfUpgradesCommandInput,
    cb: (err: any, data?: ListSelfUpgradesCommandOutput) => void
  ): void;
  listSelfUpgrades(
    args: ListSelfUpgradesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSelfUpgradesCommandOutput) => void
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
   * @see {@link ListTemplateAliasesCommand}
   */
  listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateAliasesCommandOutput>;
  listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): void;
  listTemplateAliases(
    args: ListTemplateAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateVersionsCommand}
   */
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateVersionsCommandOutput>;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThemeAliasesCommand}
   */
  listThemeAliases(
    args: ListThemeAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThemeAliasesCommandOutput>;
  listThemeAliases(
    args: ListThemeAliasesCommandInput,
    cb: (err: any, data?: ListThemeAliasesCommandOutput) => void
  ): void;
  listThemeAliases(
    args: ListThemeAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemeAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThemesCommand}
   */
  listThemes(
    args: ListThemesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThemesCommandOutput>;
  listThemes(
    args: ListThemesCommandInput,
    cb: (err: any, data?: ListThemesCommandOutput) => void
  ): void;
  listThemes(
    args: ListThemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThemeVersionsCommand}
   */
  listThemeVersions(
    args: ListThemeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThemeVersionsCommandOutput>;
  listThemeVersions(
    args: ListThemeVersionsCommandInput,
    cb: (err: any, data?: ListThemeVersionsCommandOutput) => void
  ): void;
  listThemeVersions(
    args: ListThemeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThemeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicRefreshSchedulesCommand}
   */
  listTopicRefreshSchedules(
    args: ListTopicRefreshSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicRefreshSchedulesCommandOutput>;
  listTopicRefreshSchedules(
    args: ListTopicRefreshSchedulesCommandInput,
    cb: (err: any, data?: ListTopicRefreshSchedulesCommandOutput) => void
  ): void;
  listTopicRefreshSchedules(
    args: ListTopicRefreshSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicRefreshSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicReviewedAnswersCommand}
   */
  listTopicReviewedAnswers(
    args: ListTopicReviewedAnswersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicReviewedAnswersCommandOutput>;
  listTopicReviewedAnswers(
    args: ListTopicReviewedAnswersCommandInput,
    cb: (err: any, data?: ListTopicReviewedAnswersCommandOutput) => void
  ): void;
  listTopicReviewedAnswers(
    args: ListTopicReviewedAnswersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicReviewedAnswersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicsCommandOutput>;
  listTopics(
    args: ListTopicsCommandInput,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;
  listTopics(
    args: ListTopicsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserGroupsCommand}
   */
  listUserGroups(
    args: ListUserGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserGroupsCommandOutput>;
  listUserGroups(
    args: ListUserGroupsCommandInput,
    cb: (err: any, data?: ListUserGroupsCommandOutput) => void
  ): void;
  listUserGroups(
    args: ListUserGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserGroupsCommandOutput) => void
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
   * @see {@link ListVPCConnectionsCommand}
   */
  listVPCConnections(
    args: ListVPCConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVPCConnectionsCommandOutput>;
  listVPCConnections(
    args: ListVPCConnectionsCommandInput,
    cb: (err: any, data?: ListVPCConnectionsCommandOutput) => void
  ): void;
  listVPCConnections(
    args: ListVPCConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVPCConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PredictQAResultsCommand}
   */
  predictQAResults(
    args: PredictQAResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PredictQAResultsCommandOutput>;
  predictQAResults(
    args: PredictQAResultsCommandInput,
    cb: (err: any, data?: PredictQAResultsCommandOutput) => void
  ): void;
  predictQAResults(
    args: PredictQAResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PredictQAResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataSetRefreshPropertiesCommand}
   */
  putDataSetRefreshProperties(
    args: PutDataSetRefreshPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataSetRefreshPropertiesCommandOutput>;
  putDataSetRefreshProperties(
    args: PutDataSetRefreshPropertiesCommandInput,
    cb: (err: any, data?: PutDataSetRefreshPropertiesCommandOutput) => void
  ): void;
  putDataSetRefreshProperties(
    args: PutDataSetRefreshPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataSetRefreshPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterUserCommand}
   */
  registerUser(
    args: RegisterUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterUserCommandOutput>;
  registerUser(
    args: RegisterUserCommandInput,
    cb: (err: any, data?: RegisterUserCommandOutput) => void
  ): void;
  registerUser(
    args: RegisterUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterUserCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreAnalysisCommand}
   */
  restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreAnalysisCommandOutput>;
  restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    cb: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): void;
  restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchActionConnectorsCommand}
   */
  searchActionConnectors(
    args: SearchActionConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchActionConnectorsCommandOutput>;
  searchActionConnectors(
    args: SearchActionConnectorsCommandInput,
    cb: (err: any, data?: SearchActionConnectorsCommandOutput) => void
  ): void;
  searchActionConnectors(
    args: SearchActionConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchActionConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAnalysesCommand}
   */
  searchAnalyses(
    args: SearchAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAnalysesCommandOutput>;
  searchAnalyses(
    args: SearchAnalysesCommandInput,
    cb: (err: any, data?: SearchAnalysesCommandOutput) => void
  ): void;
  searchAnalyses(
    args: SearchAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDashboardsCommand}
   */
  searchDashboards(
    args: SearchDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDashboardsCommandOutput>;
  searchDashboards(
    args: SearchDashboardsCommandInput,
    cb: (err: any, data?: SearchDashboardsCommandOutput) => void
  ): void;
  searchDashboards(
    args: SearchDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDataSetsCommand}
   */
  searchDataSets(
    args: SearchDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDataSetsCommandOutput>;
  searchDataSets(
    args: SearchDataSetsCommandInput,
    cb: (err: any, data?: SearchDataSetsCommandOutput) => void
  ): void;
  searchDataSets(
    args: SearchDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDataSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDataSourcesCommand}
   */
  searchDataSources(
    args: SearchDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDataSourcesCommandOutput>;
  searchDataSources(
    args: SearchDataSourcesCommandInput,
    cb: (err: any, data?: SearchDataSourcesCommandOutput) => void
  ): void;
  searchDataSources(
    args: SearchDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFlowsCommand}
   */
  searchFlows(
    args: SearchFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFlowsCommandOutput>;
  searchFlows(
    args: SearchFlowsCommandInput,
    cb: (err: any, data?: SearchFlowsCommandOutput) => void
  ): void;
  searchFlows(
    args: SearchFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFoldersCommand}
   */
  searchFolders(
    args: SearchFoldersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFoldersCommandOutput>;
  searchFolders(
    args: SearchFoldersCommandInput,
    cb: (err: any, data?: SearchFoldersCommandOutput) => void
  ): void;
  searchFolders(
    args: SearchFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFoldersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchGroupsCommand}
   */
  searchGroups(
    args: SearchGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchGroupsCommandOutput>;
  searchGroups(
    args: SearchGroupsCommandInput,
    cb: (err: any, data?: SearchGroupsCommandOutput) => void
  ): void;
  searchGroups(
    args: SearchGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTopicsCommand}
   */
  searchTopics(
    args: SearchTopicsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTopicsCommandOutput>;
  searchTopics(
    args: SearchTopicsCommandInput,
    cb: (err: any, data?: SearchTopicsCommandOutput) => void
  ): void;
  searchTopics(
    args: SearchTopicsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssetBundleExportJobCommand}
   */
  startAssetBundleExportJob(
    args: StartAssetBundleExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssetBundleExportJobCommandOutput>;
  startAssetBundleExportJob(
    args: StartAssetBundleExportJobCommandInput,
    cb: (err: any, data?: StartAssetBundleExportJobCommandOutput) => void
  ): void;
  startAssetBundleExportJob(
    args: StartAssetBundleExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssetBundleExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssetBundleImportJobCommand}
   */
  startAssetBundleImportJob(
    args: StartAssetBundleImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssetBundleImportJobCommandOutput>;
  startAssetBundleImportJob(
    args: StartAssetBundleImportJobCommandInput,
    cb: (err: any, data?: StartAssetBundleImportJobCommandOutput) => void
  ): void;
  startAssetBundleImportJob(
    args: StartAssetBundleImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssetBundleImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDashboardSnapshotJobCommand}
   */
  startDashboardSnapshotJob(
    args: StartDashboardSnapshotJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDashboardSnapshotJobCommandOutput>;
  startDashboardSnapshotJob(
    args: StartDashboardSnapshotJobCommandInput,
    cb: (err: any, data?: StartDashboardSnapshotJobCommandOutput) => void
  ): void;
  startDashboardSnapshotJob(
    args: StartDashboardSnapshotJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDashboardSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDashboardSnapshotJobScheduleCommand}
   */
  startDashboardSnapshotJobSchedule(
    args: StartDashboardSnapshotJobScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDashboardSnapshotJobScheduleCommandOutput>;
  startDashboardSnapshotJobSchedule(
    args: StartDashboardSnapshotJobScheduleCommandInput,
    cb: (err: any, data?: StartDashboardSnapshotJobScheduleCommandOutput) => void
  ): void;
  startDashboardSnapshotJobSchedule(
    args: StartDashboardSnapshotJobScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDashboardSnapshotJobScheduleCommandOutput) => void
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
   * @see {@link UpdateAccountCustomizationCommand}
   */
  updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountCustomizationCommandOutput>;
  updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void
  ): void;
  updateAccountCustomization(
    args: UpdateAccountCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCustomPermissionCommand}
   */
  updateAccountCustomPermission(
    args: UpdateAccountCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountCustomPermissionCommandOutput>;
  updateAccountCustomPermission(
    args: UpdateAccountCustomPermissionCommandInput,
    cb: (err: any, data?: UpdateAccountCustomPermissionCommandOutput) => void
  ): void;
  updateAccountCustomPermission(
    args: UpdateAccountCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateActionConnectorCommand}
   */
  updateActionConnector(
    args: UpdateActionConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateActionConnectorCommandOutput>;
  updateActionConnector(
    args: UpdateActionConnectorCommandInput,
    cb: (err: any, data?: UpdateActionConnectorCommandOutput) => void
  ): void;
  updateActionConnector(
    args: UpdateActionConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActionConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateActionConnectorPermissionsCommand}
   */
  updateActionConnectorPermissions(
    args: UpdateActionConnectorPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateActionConnectorPermissionsCommandOutput>;
  updateActionConnectorPermissions(
    args: UpdateActionConnectorPermissionsCommandInput,
    cb: (err: any, data?: UpdateActionConnectorPermissionsCommandOutput) => void
  ): void;
  updateActionConnectorPermissions(
    args: UpdateActionConnectorPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActionConnectorPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnalysisCommand}
   */
  updateAnalysis(
    args: UpdateAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnalysisCommandOutput>;
  updateAnalysis(
    args: UpdateAnalysisCommandInput,
    cb: (err: any, data?: UpdateAnalysisCommandOutput) => void
  ): void;
  updateAnalysis(
    args: UpdateAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnalysisPermissionsCommand}
   */
  updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnalysisPermissionsCommandOutput>;
  updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void
  ): void;
  updateAnalysisPermissions(
    args: UpdateAnalysisPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnalysisPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationWithTokenExchangeGrantCommand}
   */
  updateApplicationWithTokenExchangeGrant(
    args: UpdateApplicationWithTokenExchangeGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationWithTokenExchangeGrantCommandOutput>;
  updateApplicationWithTokenExchangeGrant(
    args: UpdateApplicationWithTokenExchangeGrantCommandInput,
    cb: (err: any, data?: UpdateApplicationWithTokenExchangeGrantCommandOutput) => void
  ): void;
  updateApplicationWithTokenExchangeGrant(
    args: UpdateApplicationWithTokenExchangeGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationWithTokenExchangeGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandCommand}
   */
  updateBrand(
    args: UpdateBrandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrandCommandOutput>;
  updateBrand(
    args: UpdateBrandCommandInput,
    cb: (err: any, data?: UpdateBrandCommandOutput) => void
  ): void;
  updateBrand(
    args: UpdateBrandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrandCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandAssignmentCommand}
   */
  updateBrandAssignment(
    args: UpdateBrandAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrandAssignmentCommandOutput>;
  updateBrandAssignment(
    args: UpdateBrandAssignmentCommandInput,
    cb: (err: any, data?: UpdateBrandAssignmentCommandOutput) => void
  ): void;
  updateBrandAssignment(
    args: UpdateBrandAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrandAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandPublishedVersionCommand}
   */
  updateBrandPublishedVersion(
    args: UpdateBrandPublishedVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrandPublishedVersionCommandOutput>;
  updateBrandPublishedVersion(
    args: UpdateBrandPublishedVersionCommandInput,
    cb: (err: any, data?: UpdateBrandPublishedVersionCommandOutput) => void
  ): void;
  updateBrandPublishedVersion(
    args: UpdateBrandPublishedVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrandPublishedVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomPermissionsCommand}
   */
  updateCustomPermissions(
    args: UpdateCustomPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomPermissionsCommandOutput>;
  updateCustomPermissions(
    args: UpdateCustomPermissionsCommandInput,
    cb: (err: any, data?: UpdateCustomPermissionsCommandOutput) => void
  ): void;
  updateCustomPermissions(
    args: UpdateCustomPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardCommandOutput>;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardLinksCommand}
   */
  updateDashboardLinks(
    args: UpdateDashboardLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardLinksCommandOutput>;
  updateDashboardLinks(
    args: UpdateDashboardLinksCommandInput,
    cb: (err: any, data?: UpdateDashboardLinksCommandOutput) => void
  ): void;
  updateDashboardLinks(
    args: UpdateDashboardLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardPermissionsCommand}
   */
  updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardPermissionsCommandOutput>;
  updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): void;
  updateDashboardPermissions(
    args: UpdateDashboardPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardPublishedVersionCommand}
   */
  updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardPublishedVersionCommandOutput>;
  updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): void;
  updateDashboardPublishedVersion(
    args: UpdateDashboardPublishedVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardPublishedVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardsQAConfigurationCommand}
   */
  updateDashboardsQAConfiguration(
    args: UpdateDashboardsQAConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardsQAConfigurationCommandOutput>;
  updateDashboardsQAConfiguration(
    args: UpdateDashboardsQAConfigurationCommandInput,
    cb: (err: any, data?: UpdateDashboardsQAConfigurationCommandOutput) => void
  ): void;
  updateDashboardsQAConfiguration(
    args: UpdateDashboardsQAConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardsQAConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSetCommand}
   */
  updateDataSet(
    args: UpdateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSetCommandOutput>;
  updateDataSet(
    args: UpdateDataSetCommandInput,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;
  updateDataSet(
    args: UpdateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSetPermissionsCommand}
   */
  updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSetPermissionsCommandOutput>;
  updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): void;
  updateDataSetPermissions(
    args: UpdateDataSetPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSetPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourcePermissionsCommand}
   */
  updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourcePermissionsCommandOutput>;
  updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): void;
  updateDataSourcePermissions(
    args: UpdateDataSourcePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourcePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDefaultQBusinessApplicationCommand}
   */
  updateDefaultQBusinessApplication(
    args: UpdateDefaultQBusinessApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDefaultQBusinessApplicationCommandOutput>;
  updateDefaultQBusinessApplication(
    args: UpdateDefaultQBusinessApplicationCommandInput,
    cb: (err: any, data?: UpdateDefaultQBusinessApplicationCommandOutput) => void
  ): void;
  updateDefaultQBusinessApplication(
    args: UpdateDefaultQBusinessApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDefaultQBusinessApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowPermissionsCommand}
   */
  updateFlowPermissions(
    args: UpdateFlowPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowPermissionsCommandOutput>;
  updateFlowPermissions(
    args: UpdateFlowPermissionsCommandInput,
    cb: (err: any, data?: UpdateFlowPermissionsCommandOutput) => void
  ): void;
  updateFlowPermissions(
    args: UpdateFlowPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFolderCommand}
   */
  updateFolder(
    args: UpdateFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFolderCommandOutput>;
  updateFolder(
    args: UpdateFolderCommandInput,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;
  updateFolder(
    args: UpdateFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFolderPermissionsCommand}
   */
  updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFolderPermissionsCommandOutput>;
  updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    cb: (err: any, data?: UpdateFolderPermissionsCommandOutput) => void
  ): void;
  updateFolderPermissions(
    args: UpdateFolderPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFolderPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIAMPolicyAssignmentCommand}
   */
  updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIAMPolicyAssignmentCommandOutput>;
  updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): void;
  updateIAMPolicyAssignment(
    args: UpdateIAMPolicyAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIAMPolicyAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityPropagationConfigCommand}
   */
  updateIdentityPropagationConfig(
    args: UpdateIdentityPropagationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityPropagationConfigCommandOutput>;
  updateIdentityPropagationConfig(
    args: UpdateIdentityPropagationConfigCommandInput,
    cb: (err: any, data?: UpdateIdentityPropagationConfigCommandOutput) => void
  ): void;
  updateIdentityPropagationConfig(
    args: UpdateIdentityPropagationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityPropagationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIpRestrictionCommand}
   */
  updateIpRestriction(
    args: UpdateIpRestrictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIpRestrictionCommandOutput>;
  updateIpRestriction(
    args: UpdateIpRestrictionCommandInput,
    cb: (err: any, data?: UpdateIpRestrictionCommandOutput) => void
  ): void;
  updateIpRestriction(
    args: UpdateIpRestrictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIpRestrictionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyRegistrationCommand}
   */
  updateKeyRegistration(
    args: UpdateKeyRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKeyRegistrationCommandOutput>;
  updateKeyRegistration(
    args: UpdateKeyRegistrationCommandInput,
    cb: (err: any, data?: UpdateKeyRegistrationCommandOutput) => void
  ): void;
  updateKeyRegistration(
    args: UpdateKeyRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeyRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePublicSharingSettingsCommand}
   */
  updatePublicSharingSettings(
    args: UpdatePublicSharingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublicSharingSettingsCommandOutput>;
  updatePublicSharingSettings(
    args: UpdatePublicSharingSettingsCommandInput,
    cb: (err: any, data?: UpdatePublicSharingSettingsCommandOutput) => void
  ): void;
  updatePublicSharingSettings(
    args: UpdatePublicSharingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublicSharingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQPersonalizationConfigurationCommand}
   */
  updateQPersonalizationConfiguration(
    args: UpdateQPersonalizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQPersonalizationConfigurationCommandOutput>;
  updateQPersonalizationConfiguration(
    args: UpdateQPersonalizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateQPersonalizationConfigurationCommandOutput) => void
  ): void;
  updateQPersonalizationConfiguration(
    args: UpdateQPersonalizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQPersonalizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuickSightQSearchConfigurationCommand}
   */
  updateQuickSightQSearchConfiguration(
    args: UpdateQuickSightQSearchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuickSightQSearchConfigurationCommandOutput>;
  updateQuickSightQSearchConfiguration(
    args: UpdateQuickSightQSearchConfigurationCommandInput,
    cb: (err: any, data?: UpdateQuickSightQSearchConfigurationCommandOutput) => void
  ): void;
  updateQuickSightQSearchConfiguration(
    args: UpdateQuickSightQSearchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuickSightQSearchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRefreshScheduleCommand}
   */
  updateRefreshSchedule(
    args: UpdateRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRefreshScheduleCommandOutput>;
  updateRefreshSchedule(
    args: UpdateRefreshScheduleCommandInput,
    cb: (err: any, data?: UpdateRefreshScheduleCommandOutput) => void
  ): void;
  updateRefreshSchedule(
    args: UpdateRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoleCustomPermissionCommand}
   */
  updateRoleCustomPermission(
    args: UpdateRoleCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoleCustomPermissionCommandOutput>;
  updateRoleCustomPermission(
    args: UpdateRoleCustomPermissionCommandInput,
    cb: (err: any, data?: UpdateRoleCustomPermissionCommandOutput) => void
  ): void;
  updateRoleCustomPermission(
    args: UpdateRoleCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSelfUpgradeCommand}
   */
  updateSelfUpgrade(
    args: UpdateSelfUpgradeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSelfUpgradeCommandOutput>;
  updateSelfUpgrade(
    args: UpdateSelfUpgradeCommandInput,
    cb: (err: any, data?: UpdateSelfUpgradeCommandOutput) => void
  ): void;
  updateSelfUpgrade(
    args: UpdateSelfUpgradeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSelfUpgradeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSelfUpgradeConfigurationCommand}
   */
  updateSelfUpgradeConfiguration(
    args: UpdateSelfUpgradeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSelfUpgradeConfigurationCommandOutput>;
  updateSelfUpgradeConfiguration(
    args: UpdateSelfUpgradeConfigurationCommandInput,
    cb: (err: any, data?: UpdateSelfUpgradeConfigurationCommandOutput) => void
  ): void;
  updateSelfUpgradeConfiguration(
    args: UpdateSelfUpgradeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSelfUpgradeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSPICECapacityConfigurationCommand}
   */
  updateSPICECapacityConfiguration(
    args: UpdateSPICECapacityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSPICECapacityConfigurationCommandOutput>;
  updateSPICECapacityConfiguration(
    args: UpdateSPICECapacityConfigurationCommandInput,
    cb: (err: any, data?: UpdateSPICECapacityConfigurationCommandOutput) => void
  ): void;
  updateSPICECapacityConfiguration(
    args: UpdateSPICECapacityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSPICECapacityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateAliasCommand}
   */
  updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateAliasCommandOutput>;
  updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): void;
  updateTemplateAlias(
    args: UpdateTemplateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplatePermissionsCommand}
   */
  updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplatePermissionsCommandOutput>;
  updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): void;
  updateTemplatePermissions(
    args: UpdateTemplatePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplatePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemeCommand}
   */
  updateTheme(
    args: UpdateThemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThemeCommandOutput>;
  updateTheme(
    args: UpdateThemeCommandInput,
    cb: (err: any, data?: UpdateThemeCommandOutput) => void
  ): void;
  updateTheme(
    args: UpdateThemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemeAliasCommand}
   */
  updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThemeAliasCommandOutput>;
  updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void
  ): void;
  updateThemeAlias(
    args: UpdateThemeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemePermissionsCommand}
   */
  updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThemePermissionsCommandOutput>;
  updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void
  ): void;
  updateThemePermissions(
    args: UpdateThemePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicCommand}
   */
  updateTopic(
    args: UpdateTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTopicCommandOutput>;
  updateTopic(
    args: UpdateTopicCommandInput,
    cb: (err: any, data?: UpdateTopicCommandOutput) => void
  ): void;
  updateTopic(
    args: UpdateTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicPermissionsCommand}
   */
  updateTopicPermissions(
    args: UpdateTopicPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTopicPermissionsCommandOutput>;
  updateTopicPermissions(
    args: UpdateTopicPermissionsCommandInput,
    cb: (err: any, data?: UpdateTopicPermissionsCommandOutput) => void
  ): void;
  updateTopicPermissions(
    args: UpdateTopicPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTopicPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicRefreshScheduleCommand}
   */
  updateTopicRefreshSchedule(
    args: UpdateTopicRefreshScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTopicRefreshScheduleCommandOutput>;
  updateTopicRefreshSchedule(
    args: UpdateTopicRefreshScheduleCommandInput,
    cb: (err: any, data?: UpdateTopicRefreshScheduleCommandOutput) => void
  ): void;
  updateTopicRefreshSchedule(
    args: UpdateTopicRefreshScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTopicRefreshScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCustomPermissionCommand}
   */
  updateUserCustomPermission(
    args: UpdateUserCustomPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCustomPermissionCommandOutput>;
  updateUserCustomPermission(
    args: UpdateUserCustomPermissionCommandInput,
    cb: (err: any, data?: UpdateUserCustomPermissionCommandOutput) => void
  ): void;
  updateUserCustomPermission(
    args: UpdateUserCustomPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCustomPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVPCConnectionCommand}
   */
  updateVPCConnection(
    args: UpdateVPCConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVPCConnectionCommandOutput>;
  updateVPCConnection(
    args: UpdateVPCConnectionCommandInput,
    cb: (err: any, data?: UpdateVPCConnectionCommandOutput) => void
  ): void;
  updateVPCConnection(
    args: UpdateVPCConnectionCommandInput,
    options: __HttpHandlerOptions,
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
   * @see {@link SearchTopicsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchTopicsCommandOutput}.
   */
  paginateSearchTopics(
    args: SearchTopicsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchTopicsCommandOutput>;
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
