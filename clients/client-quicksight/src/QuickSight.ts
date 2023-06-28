// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelIngestionCommand,
  CancelIngestionCommandInput,
  CancelIngestionCommandOutput,
} from "./commands/CancelIngestionCommand";
import {
  CreateAccountCustomizationCommand,
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
} from "./commands/CreateAccountCustomizationCommand";
import {
  CreateAccountSubscriptionCommand,
  CreateAccountSubscriptionCommandInput,
  CreateAccountSubscriptionCommandOutput,
} from "./commands/CreateAccountSubscriptionCommand";
import {
  CreateAnalysisCommand,
  CreateAnalysisCommandInput,
  CreateAnalysisCommandOutput,
} from "./commands/CreateAnalysisCommand";
import {
  CreateDashboardCommand,
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput,
} from "./commands/CreateDashboardCommand";
import {
  CreateDataSetCommand,
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput,
} from "./commands/CreateDataSetCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import {
  CreateFolderCommand,
  CreateFolderCommandInput,
  CreateFolderCommandOutput,
} from "./commands/CreateFolderCommand";
import {
  CreateFolderMembershipCommand,
  CreateFolderMembershipCommandInput,
  CreateFolderMembershipCommandOutput,
} from "./commands/CreateFolderMembershipCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommand,
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "./commands/CreateGroupMembershipCommand";
import {
  CreateIAMPolicyAssignmentCommand,
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
} from "./commands/CreateIAMPolicyAssignmentCommand";
import {
  CreateIngestionCommand,
  CreateIngestionCommandInput,
  CreateIngestionCommandOutput,
} from "./commands/CreateIngestionCommand";
import {
  CreateNamespaceCommand,
  CreateNamespaceCommandInput,
  CreateNamespaceCommandOutput,
} from "./commands/CreateNamespaceCommand";
import {
  CreateRefreshScheduleCommand,
  CreateRefreshScheduleCommandInput,
  CreateRefreshScheduleCommandOutput,
} from "./commands/CreateRefreshScheduleCommand";
import {
  CreateTemplateAliasCommand,
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "./commands/CreateTemplateAliasCommand";
import {
  CreateTemplateCommand,
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput,
} from "./commands/CreateTemplateCommand";
import {
  CreateThemeAliasCommand,
  CreateThemeAliasCommandInput,
  CreateThemeAliasCommandOutput,
} from "./commands/CreateThemeAliasCommand";
import { CreateThemeCommand, CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import { CreateTopicCommand, CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import {
  CreateTopicRefreshScheduleCommand,
  CreateTopicRefreshScheduleCommandInput,
  CreateTopicRefreshScheduleCommandOutput,
} from "./commands/CreateTopicRefreshScheduleCommand";
import {
  CreateVPCConnectionCommand,
  CreateVPCConnectionCommandInput,
  CreateVPCConnectionCommandOutput,
} from "./commands/CreateVPCConnectionCommand";
import {
  DeleteAccountCustomizationCommand,
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "./commands/DeleteAccountCustomizationCommand";
import {
  DeleteAccountSubscriptionCommand,
  DeleteAccountSubscriptionCommandInput,
  DeleteAccountSubscriptionCommandOutput,
} from "./commands/DeleteAccountSubscriptionCommand";
import {
  DeleteAnalysisCommand,
  DeleteAnalysisCommandInput,
  DeleteAnalysisCommandOutput,
} from "./commands/DeleteAnalysisCommand";
import {
  DeleteDashboardCommand,
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput,
} from "./commands/DeleteDashboardCommand";
import {
  DeleteDataSetCommand,
  DeleteDataSetCommandInput,
  DeleteDataSetCommandOutput,
} from "./commands/DeleteDataSetCommand";
import {
  DeleteDataSetRefreshPropertiesCommand,
  DeleteDataSetRefreshPropertiesCommandInput,
  DeleteDataSetRefreshPropertiesCommandOutput,
} from "./commands/DeleteDataSetRefreshPropertiesCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteFolderCommand,
  DeleteFolderCommandInput,
  DeleteFolderCommandOutput,
} from "./commands/DeleteFolderCommand";
import {
  DeleteFolderMembershipCommand,
  DeleteFolderMembershipCommandInput,
  DeleteFolderMembershipCommandOutput,
} from "./commands/DeleteFolderMembershipCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommand,
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "./commands/DeleteGroupMembershipCommand";
import {
  DeleteIAMPolicyAssignmentCommand,
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput,
} from "./commands/DeleteIAMPolicyAssignmentCommand";
import {
  DeleteNamespaceCommand,
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
} from "./commands/DeleteNamespaceCommand";
import {
  DeleteRefreshScheduleCommand,
  DeleteRefreshScheduleCommandInput,
  DeleteRefreshScheduleCommandOutput,
} from "./commands/DeleteRefreshScheduleCommand";
import {
  DeleteTemplateAliasCommand,
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "./commands/DeleteTemplateAliasCommand";
import {
  DeleteTemplateCommand,
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput,
} from "./commands/DeleteTemplateCommand";
import {
  DeleteThemeAliasCommand,
  DeleteThemeAliasCommandInput,
  DeleteThemeAliasCommandOutput,
} from "./commands/DeleteThemeAliasCommand";
import { DeleteThemeCommand, DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import { DeleteTopicCommand, DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import {
  DeleteTopicRefreshScheduleCommand,
  DeleteTopicRefreshScheduleCommandInput,
  DeleteTopicRefreshScheduleCommandOutput,
} from "./commands/DeleteTopicRefreshScheduleCommand";
import {
  DeleteUserByPrincipalIdCommand,
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteVPCConnectionCommand,
  DeleteVPCConnectionCommandInput,
  DeleteVPCConnectionCommandOutput,
} from "./commands/DeleteVPCConnectionCommand";
import {
  DescribeAccountCustomizationCommand,
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
} from "./commands/DescribeAccountCustomizationCommand";
import {
  DescribeAccountSettingsCommand,
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
} from "./commands/DescribeAccountSettingsCommand";
import {
  DescribeAccountSubscriptionCommand,
  DescribeAccountSubscriptionCommandInput,
  DescribeAccountSubscriptionCommandOutput,
} from "./commands/DescribeAccountSubscriptionCommand";
import {
  DescribeAnalysisCommand,
  DescribeAnalysisCommandInput,
  DescribeAnalysisCommandOutput,
} from "./commands/DescribeAnalysisCommand";
import {
  DescribeAnalysisDefinitionCommand,
  DescribeAnalysisDefinitionCommandInput,
  DescribeAnalysisDefinitionCommandOutput,
} from "./commands/DescribeAnalysisDefinitionCommand";
import {
  DescribeAnalysisPermissionsCommand,
  DescribeAnalysisPermissionsCommandInput,
  DescribeAnalysisPermissionsCommandOutput,
} from "./commands/DescribeAnalysisPermissionsCommand";
import {
  DescribeAssetBundleExportJobCommand,
  DescribeAssetBundleExportJobCommandInput,
  DescribeAssetBundleExportJobCommandOutput,
} from "./commands/DescribeAssetBundleExportJobCommand";
import {
  DescribeAssetBundleImportJobCommand,
  DescribeAssetBundleImportJobCommandInput,
  DescribeAssetBundleImportJobCommandOutput,
} from "./commands/DescribeAssetBundleImportJobCommand";
import {
  DescribeDashboardCommand,
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput,
} from "./commands/DescribeDashboardCommand";
import {
  DescribeDashboardDefinitionCommand,
  DescribeDashboardDefinitionCommandInput,
  DescribeDashboardDefinitionCommandOutput,
} from "./commands/DescribeDashboardDefinitionCommand";
import {
  DescribeDashboardPermissionsCommand,
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "./commands/DescribeDashboardPermissionsCommand";
import {
  DescribeDataSetCommand,
  DescribeDataSetCommandInput,
  DescribeDataSetCommandOutput,
} from "./commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommand,
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "./commands/DescribeDataSetPermissionsCommand";
import {
  DescribeDataSetRefreshPropertiesCommand,
  DescribeDataSetRefreshPropertiesCommandInput,
  DescribeDataSetRefreshPropertiesCommandOutput,
} from "./commands/DescribeDataSetRefreshPropertiesCommand";
import {
  DescribeDataSourceCommand,
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput,
} from "./commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommand,
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "./commands/DescribeDataSourcePermissionsCommand";
import {
  DescribeFolderCommand,
  DescribeFolderCommandInput,
  DescribeFolderCommandOutput,
} from "./commands/DescribeFolderCommand";
import {
  DescribeFolderPermissionsCommand,
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
} from "./commands/DescribeFolderPermissionsCommand";
import {
  DescribeFolderResolvedPermissionsCommand,
  DescribeFolderResolvedPermissionsCommandInput,
  DescribeFolderResolvedPermissionsCommandOutput,
} from "./commands/DescribeFolderResolvedPermissionsCommand";
import {
  DescribeGroupCommand,
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput,
} from "./commands/DescribeGroupCommand";
import {
  DescribeGroupMembershipCommand,
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
} from "./commands/DescribeGroupMembershipCommand";
import {
  DescribeIAMPolicyAssignmentCommand,
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
} from "./commands/DescribeIAMPolicyAssignmentCommand";
import {
  DescribeIngestionCommand,
  DescribeIngestionCommandInput,
  DescribeIngestionCommandOutput,
} from "./commands/DescribeIngestionCommand";
import {
  DescribeIpRestrictionCommand,
  DescribeIpRestrictionCommandInput,
  DescribeIpRestrictionCommandOutput,
} from "./commands/DescribeIpRestrictionCommand";
import {
  DescribeNamespaceCommand,
  DescribeNamespaceCommandInput,
  DescribeNamespaceCommandOutput,
} from "./commands/DescribeNamespaceCommand";
import {
  DescribeRefreshScheduleCommand,
  DescribeRefreshScheduleCommandInput,
  DescribeRefreshScheduleCommandOutput,
} from "./commands/DescribeRefreshScheduleCommand";
import {
  DescribeTemplateAliasCommand,
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
} from "./commands/DescribeTemplateAliasCommand";
import {
  DescribeTemplateCommand,
  DescribeTemplateCommandInput,
  DescribeTemplateCommandOutput,
} from "./commands/DescribeTemplateCommand";
import {
  DescribeTemplateDefinitionCommand,
  DescribeTemplateDefinitionCommandInput,
  DescribeTemplateDefinitionCommandOutput,
} from "./commands/DescribeTemplateDefinitionCommand";
import {
  DescribeTemplatePermissionsCommand,
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput,
} from "./commands/DescribeTemplatePermissionsCommand";
import {
  DescribeThemeAliasCommand,
  DescribeThemeAliasCommandInput,
  DescribeThemeAliasCommandOutput,
} from "./commands/DescribeThemeAliasCommand";
import {
  DescribeThemeCommand,
  DescribeThemeCommandInput,
  DescribeThemeCommandOutput,
} from "./commands/DescribeThemeCommand";
import {
  DescribeThemePermissionsCommand,
  DescribeThemePermissionsCommandInput,
  DescribeThemePermissionsCommandOutput,
} from "./commands/DescribeThemePermissionsCommand";
import {
  DescribeTopicCommand,
  DescribeTopicCommandInput,
  DescribeTopicCommandOutput,
} from "./commands/DescribeTopicCommand";
import {
  DescribeTopicPermissionsCommand,
  DescribeTopicPermissionsCommandInput,
  DescribeTopicPermissionsCommandOutput,
} from "./commands/DescribeTopicPermissionsCommand";
import {
  DescribeTopicRefreshCommand,
  DescribeTopicRefreshCommandInput,
  DescribeTopicRefreshCommandOutput,
} from "./commands/DescribeTopicRefreshCommand";
import {
  DescribeTopicRefreshScheduleCommand,
  DescribeTopicRefreshScheduleCommandInput,
  DescribeTopicRefreshScheduleCommandOutput,
} from "./commands/DescribeTopicRefreshScheduleCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  DescribeVPCConnectionCommand,
  DescribeVPCConnectionCommandInput,
  DescribeVPCConnectionCommandOutput,
} from "./commands/DescribeVPCConnectionCommand";
import {
  GenerateEmbedUrlForAnonymousUserCommand,
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
} from "./commands/GenerateEmbedUrlForAnonymousUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserCommand,
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
} from "./commands/GenerateEmbedUrlForRegisteredUserCommand";
import {
  GetDashboardEmbedUrlCommand,
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "./commands/GetDashboardEmbedUrlCommand";
import {
  GetSessionEmbedUrlCommand,
  GetSessionEmbedUrlCommandInput,
  GetSessionEmbedUrlCommandOutput,
} from "./commands/GetSessionEmbedUrlCommand";
import {
  ListAnalysesCommand,
  ListAnalysesCommandInput,
  ListAnalysesCommandOutput,
} from "./commands/ListAnalysesCommand";
import {
  ListAssetBundleExportJobsCommand,
  ListAssetBundleExportJobsCommandInput,
  ListAssetBundleExportJobsCommandOutput,
} from "./commands/ListAssetBundleExportJobsCommand";
import {
  ListAssetBundleImportJobsCommand,
  ListAssetBundleImportJobsCommandInput,
  ListAssetBundleImportJobsCommandOutput,
} from "./commands/ListAssetBundleImportJobsCommand";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "./commands/ListDashboardsCommand";
import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "./commands/ListDashboardVersionsCommand";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "./commands/ListDataSetsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListFolderMembersCommand,
  ListFolderMembersCommandInput,
  ListFolderMembersCommandOutput,
} from "./commands/ListFolderMembersCommand";
import { ListFoldersCommand, ListFoldersCommandInput, ListFoldersCommandOutput } from "./commands/ListFoldersCommand";
import {
  ListGroupMembershipsCommand,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "./commands/ListGroupMembershipsCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsCommand";
import {
  ListIAMPolicyAssignmentsForUserCommand,
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
} from "./commands/ListIngestionsCommand";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "./commands/ListNamespacesCommand";
import {
  ListRefreshSchedulesCommand,
  ListRefreshSchedulesCommandInput,
  ListRefreshSchedulesCommandOutput,
} from "./commands/ListRefreshSchedulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateAliasesCommand,
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "./commands/ListTemplateAliasesCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "./commands/ListTemplatesCommand";
import {
  ListTemplateVersionsCommand,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import {
  ListThemeAliasesCommand,
  ListThemeAliasesCommandInput,
  ListThemeAliasesCommandOutput,
} from "./commands/ListThemeAliasesCommand";
import { ListThemesCommand, ListThemesCommandInput, ListThemesCommandOutput } from "./commands/ListThemesCommand";
import {
  ListThemeVersionsCommand,
  ListThemeVersionsCommandInput,
  ListThemeVersionsCommandOutput,
} from "./commands/ListThemeVersionsCommand";
import {
  ListTopicRefreshSchedulesCommand,
  ListTopicRefreshSchedulesCommandInput,
  ListTopicRefreshSchedulesCommandOutput,
} from "./commands/ListTopicRefreshSchedulesCommand";
import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import {
  ListUserGroupsCommand,
  ListUserGroupsCommandInput,
  ListUserGroupsCommandOutput,
} from "./commands/ListUserGroupsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListVPCConnectionsCommand,
  ListVPCConnectionsCommandInput,
  ListVPCConnectionsCommandOutput,
} from "./commands/ListVPCConnectionsCommand";
import {
  PutDataSetRefreshPropertiesCommand,
  PutDataSetRefreshPropertiesCommandInput,
  PutDataSetRefreshPropertiesCommandOutput,
} from "./commands/PutDataSetRefreshPropertiesCommand";
import {
  RegisterUserCommand,
  RegisterUserCommandInput,
  RegisterUserCommandOutput,
} from "./commands/RegisterUserCommand";
import {
  RestoreAnalysisCommand,
  RestoreAnalysisCommandInput,
  RestoreAnalysisCommandOutput,
} from "./commands/RestoreAnalysisCommand";
import {
  SearchAnalysesCommand,
  SearchAnalysesCommandInput,
  SearchAnalysesCommandOutput,
} from "./commands/SearchAnalysesCommand";
import {
  SearchDashboardsCommand,
  SearchDashboardsCommandInput,
  SearchDashboardsCommandOutput,
} from "./commands/SearchDashboardsCommand";
import {
  SearchDataSetsCommand,
  SearchDataSetsCommandInput,
  SearchDataSetsCommandOutput,
} from "./commands/SearchDataSetsCommand";
import {
  SearchDataSourcesCommand,
  SearchDataSourcesCommandInput,
  SearchDataSourcesCommandOutput,
} from "./commands/SearchDataSourcesCommand";
import {
  SearchFoldersCommand,
  SearchFoldersCommandInput,
  SearchFoldersCommandOutput,
} from "./commands/SearchFoldersCommand";
import {
  SearchGroupsCommand,
  SearchGroupsCommandInput,
  SearchGroupsCommandOutput,
} from "./commands/SearchGroupsCommand";
import {
  StartAssetBundleExportJobCommand,
  StartAssetBundleExportJobCommandInput,
  StartAssetBundleExportJobCommandOutput,
} from "./commands/StartAssetBundleExportJobCommand";
import {
  StartAssetBundleImportJobCommand,
  StartAssetBundleImportJobCommandInput,
  StartAssetBundleImportJobCommandOutput,
} from "./commands/StartAssetBundleImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountCustomizationCommand,
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
} from "./commands/UpdateAccountCustomizationCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateAnalysisCommand,
  UpdateAnalysisCommandInput,
  UpdateAnalysisCommandOutput,
} from "./commands/UpdateAnalysisCommand";
import {
  UpdateAnalysisPermissionsCommand,
  UpdateAnalysisPermissionsCommandInput,
  UpdateAnalysisPermissionsCommandOutput,
} from "./commands/UpdateAnalysisPermissionsCommand";
import {
  UpdateDashboardCommand,
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput,
} from "./commands/UpdateDashboardCommand";
import {
  UpdateDashboardPermissionsCommand,
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "./commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommand,
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "./commands/UpdateDashboardPublishedVersionCommand";
import {
  UpdateDataSetCommand,
  UpdateDataSetCommandInput,
  UpdateDataSetCommandOutput,
} from "./commands/UpdateDataSetCommand";
import {
  UpdateDataSetPermissionsCommand,
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput,
} from "./commands/UpdateDataSetPermissionsCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateDataSourcePermissionsCommand,
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput,
} from "./commands/UpdateDataSourcePermissionsCommand";
import {
  UpdateFolderCommand,
  UpdateFolderCommandInput,
  UpdateFolderCommandOutput,
} from "./commands/UpdateFolderCommand";
import {
  UpdateFolderPermissionsCommand,
  UpdateFolderPermissionsCommandInput,
  UpdateFolderPermissionsCommandOutput,
} from "./commands/UpdateFolderPermissionsCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateIAMPolicyAssignmentCommand,
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
} from "./commands/UpdateIAMPolicyAssignmentCommand";
import {
  UpdateIpRestrictionCommand,
  UpdateIpRestrictionCommandInput,
  UpdateIpRestrictionCommandOutput,
} from "./commands/UpdateIpRestrictionCommand";
import {
  UpdatePublicSharingSettingsCommand,
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
} from "./commands/UpdatePublicSharingSettingsCommand";
import {
  UpdateRefreshScheduleCommand,
  UpdateRefreshScheduleCommandInput,
  UpdateRefreshScheduleCommandOutput,
} from "./commands/UpdateRefreshScheduleCommand";
import {
  UpdateTemplateAliasCommand,
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput,
} from "./commands/UpdateTemplateAliasCommand";
import {
  UpdateTemplateCommand,
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput,
} from "./commands/UpdateTemplateCommand";
import {
  UpdateTemplatePermissionsCommand,
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput,
} from "./commands/UpdateTemplatePermissionsCommand";
import {
  UpdateThemeAliasCommand,
  UpdateThemeAliasCommandInput,
  UpdateThemeAliasCommandOutput,
} from "./commands/UpdateThemeAliasCommand";
import { UpdateThemeCommand, UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";
import {
  UpdateThemePermissionsCommand,
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
} from "./commands/UpdateThemePermissionsCommand";
import { UpdateTopicCommand, UpdateTopicCommandInput, UpdateTopicCommandOutput } from "./commands/UpdateTopicCommand";
import {
  UpdateTopicPermissionsCommand,
  UpdateTopicPermissionsCommandInput,
  UpdateTopicPermissionsCommandOutput,
} from "./commands/UpdateTopicPermissionsCommand";
import {
  UpdateTopicRefreshScheduleCommand,
  UpdateTopicRefreshScheduleCommandInput,
  UpdateTopicRefreshScheduleCommandOutput,
} from "./commands/UpdateTopicRefreshScheduleCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UpdateVPCConnectionCommand,
  UpdateVPCConnectionCommandInput,
  UpdateVPCConnectionCommandOutput,
} from "./commands/UpdateVPCConnectionCommand";
import { QuickSightClient, QuickSightClientConfig } from "./QuickSightClient";

const commands = {
  CancelIngestionCommand,
  CreateAccountCustomizationCommand,
  CreateAccountSubscriptionCommand,
  CreateAnalysisCommand,
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
  CreateTemplateCommand,
  CreateTemplateAliasCommand,
  CreateThemeCommand,
  CreateThemeAliasCommand,
  CreateTopicCommand,
  CreateTopicRefreshScheduleCommand,
  CreateVPCConnectionCommand,
  DeleteAccountCustomizationCommand,
  DeleteAccountSubscriptionCommand,
  DeleteAnalysisCommand,
  DeleteDashboardCommand,
  DeleteDataSetCommand,
  DeleteDataSetRefreshPropertiesCommand,
  DeleteDataSourceCommand,
  DeleteFolderCommand,
  DeleteFolderMembershipCommand,
  DeleteGroupCommand,
  DeleteGroupMembershipCommand,
  DeleteIAMPolicyAssignmentCommand,
  DeleteNamespaceCommand,
  DeleteRefreshScheduleCommand,
  DeleteTemplateCommand,
  DeleteTemplateAliasCommand,
  DeleteThemeCommand,
  DeleteThemeAliasCommand,
  DeleteTopicCommand,
  DeleteTopicRefreshScheduleCommand,
  DeleteUserCommand,
  DeleteUserByPrincipalIdCommand,
  DeleteVPCConnectionCommand,
  DescribeAccountCustomizationCommand,
  DescribeAccountSettingsCommand,
  DescribeAccountSubscriptionCommand,
  DescribeAnalysisCommand,
  DescribeAnalysisDefinitionCommand,
  DescribeAnalysisPermissionsCommand,
  DescribeAssetBundleExportJobCommand,
  DescribeAssetBundleImportJobCommand,
  DescribeDashboardCommand,
  DescribeDashboardDefinitionCommand,
  DescribeDashboardPermissionsCommand,
  DescribeDataSetCommand,
  DescribeDataSetPermissionsCommand,
  DescribeDataSetRefreshPropertiesCommand,
  DescribeDataSourceCommand,
  DescribeDataSourcePermissionsCommand,
  DescribeFolderCommand,
  DescribeFolderPermissionsCommand,
  DescribeFolderResolvedPermissionsCommand,
  DescribeGroupCommand,
  DescribeGroupMembershipCommand,
  DescribeIAMPolicyAssignmentCommand,
  DescribeIngestionCommand,
  DescribeIpRestrictionCommand,
  DescribeNamespaceCommand,
  DescribeRefreshScheduleCommand,
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
  GetDashboardEmbedUrlCommand,
  GetSessionEmbedUrlCommand,
  ListAnalysesCommand,
  ListAssetBundleExportJobsCommand,
  ListAssetBundleImportJobsCommand,
  ListDashboardsCommand,
  ListDashboardVersionsCommand,
  ListDataSetsCommand,
  ListDataSourcesCommand,
  ListFolderMembersCommand,
  ListFoldersCommand,
  ListGroupMembershipsCommand,
  ListGroupsCommand,
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsForUserCommand,
  ListIngestionsCommand,
  ListNamespacesCommand,
  ListRefreshSchedulesCommand,
  ListTagsForResourceCommand,
  ListTemplateAliasesCommand,
  ListTemplatesCommand,
  ListTemplateVersionsCommand,
  ListThemeAliasesCommand,
  ListThemesCommand,
  ListThemeVersionsCommand,
  ListTopicRefreshSchedulesCommand,
  ListTopicsCommand,
  ListUserGroupsCommand,
  ListUsersCommand,
  ListVPCConnectionsCommand,
  PutDataSetRefreshPropertiesCommand,
  RegisterUserCommand,
  RestoreAnalysisCommand,
  SearchAnalysesCommand,
  SearchDashboardsCommand,
  SearchDataSetsCommand,
  SearchDataSourcesCommand,
  SearchFoldersCommand,
  SearchGroupsCommand,
  StartAssetBundleExportJobCommand,
  StartAssetBundleImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountCustomizationCommand,
  UpdateAccountSettingsCommand,
  UpdateAnalysisCommand,
  UpdateAnalysisPermissionsCommand,
  UpdateDashboardCommand,
  UpdateDashboardPermissionsCommand,
  UpdateDashboardPublishedVersionCommand,
  UpdateDataSetCommand,
  UpdateDataSetPermissionsCommand,
  UpdateDataSourceCommand,
  UpdateDataSourcePermissionsCommand,
  UpdateFolderCommand,
  UpdateFolderPermissionsCommand,
  UpdateGroupCommand,
  UpdateIAMPolicyAssignmentCommand,
  UpdateIpRestrictionCommand,
  UpdatePublicSharingSettingsCommand,
  UpdateRefreshScheduleCommand,
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
  UpdateVPCConnectionCommand,
};

export interface QuickSight {
  /**
   * @see {@link CancelIngestionCommand}
   */
  cancelIngestion(
    args: CancelIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelIngestionCommandOutput>;
  cancelIngestion(args: CancelIngestionCommandInput, cb: (err: any, data?: CancelIngestionCommandOutput) => void): void;
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
   * @see {@link CreateAnalysisCommand}
   */
  createAnalysis(
    args: CreateAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnalysisCommandOutput>;
  createAnalysis(args: CreateAnalysisCommandInput, cb: (err: any, data?: CreateAnalysisCommandOutput) => void): void;
  createAnalysis(
    args: CreateAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDashboardCommandOutput>;
  createDashboard(args: CreateDashboardCommandInput, cb: (err: any, data?: CreateDashboardCommandOutput) => void): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSetCommand}
   */
  createDataSet(args: CreateDataSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSetCommandOutput>;
  createDataSet(args: CreateDataSetCommandInput, cb: (err: any, data?: CreateDataSetCommandOutput) => void): void;
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
  createFolder(args: CreateFolderCommandInput, options?: __HttpHandlerOptions): Promise<CreateFolderCommandOutput>;
  createFolder(args: CreateFolderCommandInput, cb: (err: any, data?: CreateFolderCommandOutput) => void): void;
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
  createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
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
  createIngestion(args: CreateIngestionCommandInput, cb: (err: any, data?: CreateIngestionCommandOutput) => void): void;
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
  createNamespace(args: CreateNamespaceCommandInput, cb: (err: any, data?: CreateNamespaceCommandOutput) => void): void;
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
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(args: CreateTemplateCommandInput, cb: (err: any, data?: CreateTemplateCommandOutput) => void): void;
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
  createTheme(args: CreateThemeCommandInput, options?: __HttpHandlerOptions): Promise<CreateThemeCommandOutput>;
  createTheme(args: CreateThemeCommandInput, cb: (err: any, data?: CreateThemeCommandOutput) => void): void;
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
  createTopic(args: CreateTopicCommandInput, options?: __HttpHandlerOptions): Promise<CreateTopicCommandOutput>;
  createTopic(args: CreateTopicCommandInput, cb: (err: any, data?: CreateTopicCommandOutput) => void): void;
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
   * @see {@link DeleteAnalysisCommand}
   */
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalysisCommandOutput>;
  deleteAnalysis(args: DeleteAnalysisCommandInput, cb: (err: any, data?: DeleteAnalysisCommandOutput) => void): void;
  deleteAnalysis(
    args: DeleteAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardCommandOutput>;
  deleteDashboard(args: DeleteDashboardCommandInput, cb: (err: any, data?: DeleteDashboardCommandOutput) => void): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSetCommand}
   */
  deleteDataSet(args: DeleteDataSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataSetCommandOutput>;
  deleteDataSet(args: DeleteDataSetCommandInput, cb: (err: any, data?: DeleteDataSetCommandOutput) => void): void;
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
   * @see {@link DeleteFolderCommand}
   */
  deleteFolder(args: DeleteFolderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFolderCommandOutput>;
  deleteFolder(args: DeleteFolderCommandInput, cb: (err: any, data?: DeleteFolderCommandOutput) => void): void;
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
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
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
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(args: DeleteNamespaceCommandInput, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
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
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(args: DeleteTemplateCommandInput, cb: (err: any, data?: DeleteTemplateCommandOutput) => void): void;
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
  deleteTheme(args: DeleteThemeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThemeCommandOutput>;
  deleteTheme(args: DeleteThemeCommandInput, cb: (err: any, data?: DeleteThemeCommandOutput) => void): void;
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
  deleteTopic(args: DeleteTopicCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTopicCommandOutput>;
  deleteTopic(args: DeleteTopicCommandInput, cb: (err: any, data?: DeleteTopicCommandOutput) => void): void;
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
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
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
   * @see {@link DescribeDataSetCommand}
   */
  describeDataSet(
    args: DescribeDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSetCommandOutput>;
  describeDataSet(args: DescribeDataSetCommandInput, cb: (err: any, data?: DescribeDataSetCommandOutput) => void): void;
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
   * @see {@link DescribeFolderCommand}
   */
  describeFolder(
    args: DescribeFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFolderCommandOutput>;
  describeFolder(args: DescribeFolderCommandInput, cb: (err: any, data?: DescribeFolderCommandOutput) => void): void;
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
  describeGroup(args: DescribeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupCommandOutput>;
  describeGroup(args: DescribeGroupCommandInput, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
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
  describeTheme(args: DescribeThemeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThemeCommandOutput>;
  describeTheme(args: DescribeThemeCommandInput, cb: (err: any, data?: DescribeThemeCommandOutput) => void): void;
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
  describeTopic(args: DescribeTopicCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTopicCommandOutput>;
  describeTopic(args: DescribeTopicCommandInput, cb: (err: any, data?: DescribeTopicCommandOutput) => void): void;
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
  describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
  describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
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
   * @see {@link ListAnalysesCommand}
   */
  listAnalyses(args: ListAnalysesCommandInput, options?: __HttpHandlerOptions): Promise<ListAnalysesCommandOutput>;
  listAnalyses(args: ListAnalysesCommandInput, cb: (err: any, data?: ListAnalysesCommandOutput) => void): void;
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
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  listDashboards(args: ListDashboardsCommandInput, cb: (err: any, data?: ListDashboardsCommandOutput) => void): void;
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
  listDataSets(args: ListDataSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSetsCommandOutput>;
  listDataSets(args: ListDataSetsCommandInput, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
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
  listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
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
  listFolders(args: ListFoldersCommandInput, options?: __HttpHandlerOptions): Promise<ListFoldersCommandOutput>;
  listFolders(args: ListFoldersCommandInput, cb: (err: any, data?: ListFoldersCommandOutput) => void): void;
  listFolders(
    args: ListFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFoldersCommandOutput) => void
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
  listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
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
   * @see {@link ListIngestionsCommand}
   */
  listIngestions(
    args: ListIngestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngestionsCommandOutput>;
  listIngestions(args: ListIngestionsCommandInput, cb: (err: any, data?: ListIngestionsCommandOutput) => void): void;
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
  listNamespaces(args: ListNamespacesCommandInput, cb: (err: any, data?: ListNamespacesCommandOutput) => void): void;
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
  listTemplates(args: ListTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplatesCommandOutput>;
  listTemplates(args: ListTemplatesCommandInput, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
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
  listThemes(args: ListThemesCommandInput, options?: __HttpHandlerOptions): Promise<ListThemesCommandOutput>;
  listThemes(args: ListThemesCommandInput, cb: (err: any, data?: ListThemesCommandOutput) => void): void;
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
   * @see {@link ListTopicsCommand}
   */
  listTopics(args: ListTopicsCommandInput, options?: __HttpHandlerOptions): Promise<ListTopicsCommandOutput>;
  listTopics(args: ListTopicsCommandInput, cb: (err: any, data?: ListTopicsCommandOutput) => void): void;
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
  listUserGroups(args: ListUserGroupsCommandInput, cb: (err: any, data?: ListUserGroupsCommandOutput) => void): void;
  listUserGroups(
    args: ListUserGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserGroupsCommandOutput) => void
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
  registerUser(args: RegisterUserCommandInput, options?: __HttpHandlerOptions): Promise<RegisterUserCommandOutput>;
  registerUser(args: RegisterUserCommandInput, cb: (err: any, data?: RegisterUserCommandOutput) => void): void;
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
  restoreAnalysis(args: RestoreAnalysisCommandInput, cb: (err: any, data?: RestoreAnalysisCommandOutput) => void): void;
  restoreAnalysis(
    args: RestoreAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAnalysesCommand}
   */
  searchAnalyses(
    args: SearchAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAnalysesCommandOutput>;
  searchAnalyses(args: SearchAnalysesCommandInput, cb: (err: any, data?: SearchAnalysesCommandOutput) => void): void;
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
  searchDataSets(args: SearchDataSetsCommandInput, cb: (err: any, data?: SearchDataSetsCommandOutput) => void): void;
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
   * @see {@link SearchFoldersCommand}
   */
  searchFolders(args: SearchFoldersCommandInput, options?: __HttpHandlerOptions): Promise<SearchFoldersCommandOutput>;
  searchFolders(args: SearchFoldersCommandInput, cb: (err: any, data?: SearchFoldersCommandOutput) => void): void;
  searchFolders(
    args: SearchFoldersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFoldersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchGroupsCommand}
   */
  searchGroups(args: SearchGroupsCommandInput, options?: __HttpHandlerOptions): Promise<SearchGroupsCommandOutput>;
  searchGroups(args: SearchGroupsCommandInput, cb: (err: any, data?: SearchGroupsCommandOutput) => void): void;
  searchGroups(
    args: SearchGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchGroupsCommandOutput) => void
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
   * @see {@link UpdateAnalysisCommand}
   */
  updateAnalysis(
    args: UpdateAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnalysisCommandOutput>;
  updateAnalysis(args: UpdateAnalysisCommandInput, cb: (err: any, data?: UpdateAnalysisCommandOutput) => void): void;
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
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardCommandOutput>;
  updateDashboard(args: UpdateDashboardCommandInput, cb: (err: any, data?: UpdateDashboardCommandOutput) => void): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
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
   * @see {@link UpdateDataSetCommand}
   */
  updateDataSet(args: UpdateDataSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSetCommandOutput>;
  updateDataSet(args: UpdateDataSetCommandInput, cb: (err: any, data?: UpdateDataSetCommandOutput) => void): void;
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
   * @see {@link UpdateFolderCommand}
   */
  updateFolder(args: UpdateFolderCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFolderCommandOutput>;
  updateFolder(args: UpdateFolderCommandInput, cb: (err: any, data?: UpdateFolderCommandOutput) => void): void;
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
  updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
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
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(args: UpdateTemplateCommandInput, cb: (err: any, data?: UpdateTemplateCommandOutput) => void): void;
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
  updateTheme(args: UpdateThemeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThemeCommandOutput>;
  updateTheme(args: UpdateThemeCommandInput, cb: (err: any, data?: UpdateThemeCommandOutput) => void): void;
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
  updateTopic(args: UpdateTopicCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTopicCommandOutput>;
  updateTopic(args: UpdateTopicCommandInput, cb: (err: any, data?: UpdateTopicCommandOutput) => void): void;
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
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
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
}

/**
 * @public
 * <fullname>Amazon QuickSight API Reference</fullname>
 *          <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the
 *             Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon QuickSight. </p>
 */
export class QuickSight extends QuickSightClient implements QuickSight {}
createAggregatedClient(commands, QuickSight);
