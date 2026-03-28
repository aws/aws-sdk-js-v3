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
  defaultQuickSightHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchCreateTopicReviewedAnswerCommandInput,
  BatchCreateTopicReviewedAnswerCommandOutput,
} from "./commands/BatchCreateTopicReviewedAnswerCommand";
import type {
  BatchDeleteTopicReviewedAnswerCommandInput,
  BatchDeleteTopicReviewedAnswerCommandOutput,
} from "./commands/BatchDeleteTopicReviewedAnswerCommand";
import type { CancelIngestionCommandInput, CancelIngestionCommandOutput } from "./commands/CancelIngestionCommand";
import type {
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
} from "./commands/CreateAccountCustomizationCommand";
import type {
  CreateAccountSubscriptionCommandInput,
  CreateAccountSubscriptionCommandOutput,
} from "./commands/CreateAccountSubscriptionCommand";
import type {
  CreateActionConnectorCommandInput,
  CreateActionConnectorCommandOutput,
} from "./commands/CreateActionConnectorCommand";
import type { CreateAnalysisCommandInput, CreateAnalysisCommandOutput } from "./commands/CreateAnalysisCommand";
import type { CreateBrandCommandInput, CreateBrandCommandOutput } from "./commands/CreateBrandCommand";
import type {
  CreateCustomPermissionsCommandInput,
  CreateCustomPermissionsCommandOutput,
} from "./commands/CreateCustomPermissionsCommand";
import type { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import type { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "./commands/CreateDataSetCommand";
import type { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import type { CreateFolderCommandInput, CreateFolderCommandOutput } from "./commands/CreateFolderCommand";
import type {
  CreateFolderMembershipCommandInput,
  CreateFolderMembershipCommandOutput,
} from "./commands/CreateFolderMembershipCommand";
import type { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import type {
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "./commands/CreateGroupMembershipCommand";
import type {
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
} from "./commands/CreateIAMPolicyAssignmentCommand";
import type { CreateIngestionCommandInput, CreateIngestionCommandOutput } from "./commands/CreateIngestionCommand";
import type { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import type {
  CreateRefreshScheduleCommandInput,
  CreateRefreshScheduleCommandOutput,
} from "./commands/CreateRefreshScheduleCommand";
import type {
  CreateRoleMembershipCommandInput,
  CreateRoleMembershipCommandOutput,
} from "./commands/CreateRoleMembershipCommand";
import type {
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "./commands/CreateTemplateAliasCommand";
import type { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import type { CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput } from "./commands/CreateThemeAliasCommand";
import type { CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import type { CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import type {
  CreateTopicRefreshScheduleCommandInput,
  CreateTopicRefreshScheduleCommandOutput,
} from "./commands/CreateTopicRefreshScheduleCommand";
import type {
  CreateVPCConnectionCommandInput,
  CreateVPCConnectionCommandOutput,
} from "./commands/CreateVPCConnectionCommand";
import type {
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "./commands/DeleteAccountCustomizationCommand";
import type {
  DeleteAccountCustomPermissionCommandInput,
  DeleteAccountCustomPermissionCommandOutput,
} from "./commands/DeleteAccountCustomPermissionCommand";
import type {
  DeleteAccountSubscriptionCommandInput,
  DeleteAccountSubscriptionCommandOutput,
} from "./commands/DeleteAccountSubscriptionCommand";
import type {
  DeleteActionConnectorCommandInput,
  DeleteActionConnectorCommandOutput,
} from "./commands/DeleteActionConnectorCommand";
import type { DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput } from "./commands/DeleteAnalysisCommand";
import type {
  DeleteBrandAssignmentCommandInput,
  DeleteBrandAssignmentCommandOutput,
} from "./commands/DeleteBrandAssignmentCommand";
import type { DeleteBrandCommandInput, DeleteBrandCommandOutput } from "./commands/DeleteBrandCommand";
import type {
  DeleteCustomPermissionsCommandInput,
  DeleteCustomPermissionsCommandOutput,
} from "./commands/DeleteCustomPermissionsCommand";
import type { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import type { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import type {
  DeleteDataSetRefreshPropertiesCommandInput,
  DeleteDataSetRefreshPropertiesCommandOutput,
} from "./commands/DeleteDataSetRefreshPropertiesCommand";
import type { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import type {
  DeleteDefaultQBusinessApplicationCommandInput,
  DeleteDefaultQBusinessApplicationCommandOutput,
} from "./commands/DeleteDefaultQBusinessApplicationCommand";
import type { DeleteFolderCommandInput, DeleteFolderCommandOutput } from "./commands/DeleteFolderCommand";
import type {
  DeleteFolderMembershipCommandInput,
  DeleteFolderMembershipCommandOutput,
} from "./commands/DeleteFolderMembershipCommand";
import type { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import type {
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "./commands/DeleteGroupMembershipCommand";
import type {
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput,
} from "./commands/DeleteIAMPolicyAssignmentCommand";
import type {
  DeleteIdentityPropagationConfigCommandInput,
  DeleteIdentityPropagationConfigCommandOutput,
} from "./commands/DeleteIdentityPropagationConfigCommand";
import type { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import type {
  DeleteRefreshScheduleCommandInput,
  DeleteRefreshScheduleCommandOutput,
} from "./commands/DeleteRefreshScheduleCommand";
import type {
  DeleteRoleCustomPermissionCommandInput,
  DeleteRoleCustomPermissionCommandOutput,
} from "./commands/DeleteRoleCustomPermissionCommand";
import type {
  DeleteRoleMembershipCommandInput,
  DeleteRoleMembershipCommandOutput,
} from "./commands/DeleteRoleMembershipCommand";
import type {
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "./commands/DeleteTemplateAliasCommand";
import type { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import type { DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput } from "./commands/DeleteThemeAliasCommand";
import type { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import type { DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import type {
  DeleteTopicRefreshScheduleCommandInput,
  DeleteTopicRefreshScheduleCommandOutput,
} from "./commands/DeleteTopicRefreshScheduleCommand";
import type {
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "./commands/DeleteUserByPrincipalIdCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DeleteUserCustomPermissionCommandInput,
  DeleteUserCustomPermissionCommandOutput,
} from "./commands/DeleteUserCustomPermissionCommand";
import type {
  DeleteVPCConnectionCommandInput,
  DeleteVPCConnectionCommandOutput,
} from "./commands/DeleteVPCConnectionCommand";
import type {
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
} from "./commands/DescribeAccountCustomizationCommand";
import type {
  DescribeAccountCustomPermissionCommandInput,
  DescribeAccountCustomPermissionCommandOutput,
} from "./commands/DescribeAccountCustomPermissionCommand";
import type {
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
} from "./commands/DescribeAccountSettingsCommand";
import type {
  DescribeAccountSubscriptionCommandInput,
  DescribeAccountSubscriptionCommandOutput,
} from "./commands/DescribeAccountSubscriptionCommand";
import type {
  DescribeActionConnectorCommandInput,
  DescribeActionConnectorCommandOutput,
} from "./commands/DescribeActionConnectorCommand";
import type {
  DescribeActionConnectorPermissionsCommandInput,
  DescribeActionConnectorPermissionsCommandOutput,
} from "./commands/DescribeActionConnectorPermissionsCommand";
import type { DescribeAnalysisCommandInput, DescribeAnalysisCommandOutput } from "./commands/DescribeAnalysisCommand";
import type {
  DescribeAnalysisDefinitionCommandInput,
  DescribeAnalysisDefinitionCommandOutput,
} from "./commands/DescribeAnalysisDefinitionCommand";
import type {
  DescribeAnalysisPermissionsCommandInput,
  DescribeAnalysisPermissionsCommandOutput,
} from "./commands/DescribeAnalysisPermissionsCommand";
import type {
  DescribeAssetBundleExportJobCommandInput,
  DescribeAssetBundleExportJobCommandOutput,
} from "./commands/DescribeAssetBundleExportJobCommand";
import type {
  DescribeAssetBundleImportJobCommandInput,
  DescribeAssetBundleImportJobCommandOutput,
} from "./commands/DescribeAssetBundleImportJobCommand";
import type {
  DescribeBrandAssignmentCommandInput,
  DescribeBrandAssignmentCommandOutput,
} from "./commands/DescribeBrandAssignmentCommand";
import type { DescribeBrandCommandInput, DescribeBrandCommandOutput } from "./commands/DescribeBrandCommand";
import type {
  DescribeBrandPublishedVersionCommandInput,
  DescribeBrandPublishedVersionCommandOutput,
} from "./commands/DescribeBrandPublishedVersionCommand";
import type {
  DescribeCustomPermissionsCommandInput,
  DescribeCustomPermissionsCommandOutput,
} from "./commands/DescribeCustomPermissionsCommand";
import type {
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput,
} from "./commands/DescribeDashboardCommand";
import type {
  DescribeDashboardDefinitionCommandInput,
  DescribeDashboardDefinitionCommandOutput,
} from "./commands/DescribeDashboardDefinitionCommand";
import type {
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "./commands/DescribeDashboardPermissionsCommand";
import type {
  DescribeDashboardSnapshotJobCommandInput,
  DescribeDashboardSnapshotJobCommandOutput,
} from "./commands/DescribeDashboardSnapshotJobCommand";
import type {
  DescribeDashboardSnapshotJobResultCommandInput,
  DescribeDashboardSnapshotJobResultCommandOutput,
} from "./commands/DescribeDashboardSnapshotJobResultCommand";
import type {
  DescribeDashboardsQAConfigurationCommandInput,
  DescribeDashboardsQAConfigurationCommandOutput,
} from "./commands/DescribeDashboardsQAConfigurationCommand";
import type { DescribeDataSetCommandInput, DescribeDataSetCommandOutput } from "./commands/DescribeDataSetCommand";
import type {
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "./commands/DescribeDataSetPermissionsCommand";
import type {
  DescribeDataSetRefreshPropertiesCommandInput,
  DescribeDataSetRefreshPropertiesCommandOutput,
} from "./commands/DescribeDataSetRefreshPropertiesCommand";
import type {
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput,
} from "./commands/DescribeDataSourceCommand";
import type {
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "./commands/DescribeDataSourcePermissionsCommand";
import type {
  DescribeDefaultQBusinessApplicationCommandInput,
  DescribeDefaultQBusinessApplicationCommandOutput,
} from "./commands/DescribeDefaultQBusinessApplicationCommand";
import type { DescribeFolderCommandInput, DescribeFolderCommandOutput } from "./commands/DescribeFolderCommand";
import type {
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
} from "./commands/DescribeFolderPermissionsCommand";
import type {
  DescribeFolderResolvedPermissionsCommandInput,
  DescribeFolderResolvedPermissionsCommandOutput,
} from "./commands/DescribeFolderResolvedPermissionsCommand";
import type { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import type {
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
} from "./commands/DescribeGroupMembershipCommand";
import type {
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
} from "./commands/DescribeIAMPolicyAssignmentCommand";
import type {
  DescribeIngestionCommandInput,
  DescribeIngestionCommandOutput,
} from "./commands/DescribeIngestionCommand";
import type {
  DescribeIpRestrictionCommandInput,
  DescribeIpRestrictionCommandOutput,
} from "./commands/DescribeIpRestrictionCommand";
import type {
  DescribeKeyRegistrationCommandInput,
  DescribeKeyRegistrationCommandOutput,
} from "./commands/DescribeKeyRegistrationCommand";
import type {
  DescribeNamespaceCommandInput,
  DescribeNamespaceCommandOutput,
} from "./commands/DescribeNamespaceCommand";
import type {
  DescribeQPersonalizationConfigurationCommandInput,
  DescribeQPersonalizationConfigurationCommandOutput,
} from "./commands/DescribeQPersonalizationConfigurationCommand";
import type {
  DescribeQuickSightQSearchConfigurationCommandInput,
  DescribeQuickSightQSearchConfigurationCommandOutput,
} from "./commands/DescribeQuickSightQSearchConfigurationCommand";
import type {
  DescribeRefreshScheduleCommandInput,
  DescribeRefreshScheduleCommandOutput,
} from "./commands/DescribeRefreshScheduleCommand";
import type {
  DescribeRoleCustomPermissionCommandInput,
  DescribeRoleCustomPermissionCommandOutput,
} from "./commands/DescribeRoleCustomPermissionCommand";
import type {
  DescribeSelfUpgradeConfigurationCommandInput,
  DescribeSelfUpgradeConfigurationCommandOutput,
} from "./commands/DescribeSelfUpgradeConfigurationCommand";
import type {
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
} from "./commands/DescribeTemplateAliasCommand";
import type { DescribeTemplateCommandInput, DescribeTemplateCommandOutput } from "./commands/DescribeTemplateCommand";
import type {
  DescribeTemplateDefinitionCommandInput,
  DescribeTemplateDefinitionCommandOutput,
} from "./commands/DescribeTemplateDefinitionCommand";
import type {
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput,
} from "./commands/DescribeTemplatePermissionsCommand";
import type {
  DescribeThemeAliasCommandInput,
  DescribeThemeAliasCommandOutput,
} from "./commands/DescribeThemeAliasCommand";
import type { DescribeThemeCommandInput, DescribeThemeCommandOutput } from "./commands/DescribeThemeCommand";
import type {
  DescribeThemePermissionsCommandInput,
  DescribeThemePermissionsCommandOutput,
} from "./commands/DescribeThemePermissionsCommand";
import type { DescribeTopicCommandInput, DescribeTopicCommandOutput } from "./commands/DescribeTopicCommand";
import type {
  DescribeTopicPermissionsCommandInput,
  DescribeTopicPermissionsCommandOutput,
} from "./commands/DescribeTopicPermissionsCommand";
import type {
  DescribeTopicRefreshCommandInput,
  DescribeTopicRefreshCommandOutput,
} from "./commands/DescribeTopicRefreshCommand";
import type {
  DescribeTopicRefreshScheduleCommandInput,
  DescribeTopicRefreshScheduleCommandOutput,
} from "./commands/DescribeTopicRefreshScheduleCommand";
import type { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import type {
  DescribeVPCConnectionCommandInput,
  DescribeVPCConnectionCommandOutput,
} from "./commands/DescribeVPCConnectionCommand";
import type {
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
} from "./commands/GenerateEmbedUrlForAnonymousUserCommand";
import type {
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
} from "./commands/GenerateEmbedUrlForRegisteredUserCommand";
import type {
  GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
  GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput,
} from "./commands/GenerateEmbedUrlForRegisteredUserWithIdentityCommand";
import type {
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "./commands/GetDashboardEmbedUrlCommand";
import type { GetFlowMetadataCommandInput, GetFlowMetadataCommandOutput } from "./commands/GetFlowMetadataCommand";
import type {
  GetFlowPermissionsCommandInput,
  GetFlowPermissionsCommandOutput,
} from "./commands/GetFlowPermissionsCommand";
import type {
  GetIdentityContextCommandInput,
  GetIdentityContextCommandOutput,
} from "./commands/GetIdentityContextCommand";
import type {
  GetSessionEmbedUrlCommandInput,
  GetSessionEmbedUrlCommandOutput,
} from "./commands/GetSessionEmbedUrlCommand";
import type {
  ListActionConnectorsCommandInput,
  ListActionConnectorsCommandOutput,
} from "./commands/ListActionConnectorsCommand";
import type { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "./commands/ListAnalysesCommand";
import type {
  ListAssetBundleExportJobsCommandInput,
  ListAssetBundleExportJobsCommandOutput,
} from "./commands/ListAssetBundleExportJobsCommand";
import type {
  ListAssetBundleImportJobsCommandInput,
  ListAssetBundleImportJobsCommandOutput,
} from "./commands/ListAssetBundleImportJobsCommand";
import type { ListBrandsCommandInput, ListBrandsCommandOutput } from "./commands/ListBrandsCommand";
import type {
  ListCustomPermissionsCommandInput,
  ListCustomPermissionsCommandOutput,
} from "./commands/ListCustomPermissionsCommand";
import type { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import type {
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "./commands/ListDashboardVersionsCommand";
import type { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "./commands/ListDataSetsCommand";
import type { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import type { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import type {
  ListFolderMembersCommandInput,
  ListFolderMembersCommandOutput,
} from "./commands/ListFolderMembersCommand";
import type { ListFoldersCommandInput, ListFoldersCommandOutput } from "./commands/ListFoldersCommand";
import type {
  ListFoldersForResourceCommandInput,
  ListFoldersForResourceCommandOutput,
} from "./commands/ListFoldersForResourceCommand";
import type {
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "./commands/ListGroupMembershipsCommand";
import type { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import type {
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsCommand";
import type {
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import type {
  ListIdentityPropagationConfigsCommandInput,
  ListIdentityPropagationConfigsCommandOutput,
} from "./commands/ListIdentityPropagationConfigsCommand";
import type { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "./commands/ListIngestionsCommand";
import type { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import type {
  ListRefreshSchedulesCommandInput,
  ListRefreshSchedulesCommandOutput,
} from "./commands/ListRefreshSchedulesCommand";
import type {
  ListRoleMembershipsCommandInput,
  ListRoleMembershipsCommandOutput,
} from "./commands/ListRoleMembershipsCommand";
import type { ListSelfUpgradesCommandInput, ListSelfUpgradesCommandOutput } from "./commands/ListSelfUpgradesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "./commands/ListTemplateAliasesCommand";
import type { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import type {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import type { ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput } from "./commands/ListThemeAliasesCommand";
import type { ListThemesCommandInput, ListThemesCommandOutput } from "./commands/ListThemesCommand";
import type {
  ListThemeVersionsCommandInput,
  ListThemeVersionsCommandOutput,
} from "./commands/ListThemeVersionsCommand";
import type {
  ListTopicRefreshSchedulesCommandInput,
  ListTopicRefreshSchedulesCommandOutput,
} from "./commands/ListTopicRefreshSchedulesCommand";
import type {
  ListTopicReviewedAnswersCommandInput,
  ListTopicReviewedAnswersCommandOutput,
} from "./commands/ListTopicReviewedAnswersCommand";
import type { ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import type { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "./commands/ListUserGroupsCommand";
import type { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import type {
  ListVPCConnectionsCommandInput,
  ListVPCConnectionsCommandOutput,
} from "./commands/ListVPCConnectionsCommand";
import type { PredictQAResultsCommandInput, PredictQAResultsCommandOutput } from "./commands/PredictQAResultsCommand";
import type {
  PutDataSetRefreshPropertiesCommandInput,
  PutDataSetRefreshPropertiesCommandOutput,
} from "./commands/PutDataSetRefreshPropertiesCommand";
import type { RegisterUserCommandInput, RegisterUserCommandOutput } from "./commands/RegisterUserCommand";
import type { RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput } from "./commands/RestoreAnalysisCommand";
import type {
  SearchActionConnectorsCommandInput,
  SearchActionConnectorsCommandOutput,
} from "./commands/SearchActionConnectorsCommand";
import type { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "./commands/SearchAnalysesCommand";
import type { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "./commands/SearchDashboardsCommand";
import type { SearchDataSetsCommandInput, SearchDataSetsCommandOutput } from "./commands/SearchDataSetsCommand";
import type {
  SearchDataSourcesCommandInput,
  SearchDataSourcesCommandOutput,
} from "./commands/SearchDataSourcesCommand";
import type { SearchFlowsCommandInput, SearchFlowsCommandOutput } from "./commands/SearchFlowsCommand";
import type { SearchFoldersCommandInput, SearchFoldersCommandOutput } from "./commands/SearchFoldersCommand";
import type { SearchGroupsCommandInput, SearchGroupsCommandOutput } from "./commands/SearchGroupsCommand";
import type { SearchTopicsCommandInput, SearchTopicsCommandOutput } from "./commands/SearchTopicsCommand";
import type {
  StartAssetBundleExportJobCommandInput,
  StartAssetBundleExportJobCommandOutput,
} from "./commands/StartAssetBundleExportJobCommand";
import type {
  StartAssetBundleImportJobCommandInput,
  StartAssetBundleImportJobCommandOutput,
} from "./commands/StartAssetBundleImportJobCommand";
import type {
  StartDashboardSnapshotJobCommandInput,
  StartDashboardSnapshotJobCommandOutput,
} from "./commands/StartDashboardSnapshotJobCommand";
import type {
  StartDashboardSnapshotJobScheduleCommandInput,
  StartDashboardSnapshotJobScheduleCommandOutput,
} from "./commands/StartDashboardSnapshotJobScheduleCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
} from "./commands/UpdateAccountCustomizationCommand";
import type {
  UpdateAccountCustomPermissionCommandInput,
  UpdateAccountCustomPermissionCommandOutput,
} from "./commands/UpdateAccountCustomPermissionCommand";
import type {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import type {
  UpdateActionConnectorCommandInput,
  UpdateActionConnectorCommandOutput,
} from "./commands/UpdateActionConnectorCommand";
import type {
  UpdateActionConnectorPermissionsCommandInput,
  UpdateActionConnectorPermissionsCommandOutput,
} from "./commands/UpdateActionConnectorPermissionsCommand";
import type { UpdateAnalysisCommandInput, UpdateAnalysisCommandOutput } from "./commands/UpdateAnalysisCommand";
import type {
  UpdateAnalysisPermissionsCommandInput,
  UpdateAnalysisPermissionsCommandOutput,
} from "./commands/UpdateAnalysisPermissionsCommand";
import type {
  UpdateApplicationWithTokenExchangeGrantCommandInput,
  UpdateApplicationWithTokenExchangeGrantCommandOutput,
} from "./commands/UpdateApplicationWithTokenExchangeGrantCommand";
import type {
  UpdateBrandAssignmentCommandInput,
  UpdateBrandAssignmentCommandOutput,
} from "./commands/UpdateBrandAssignmentCommand";
import type { UpdateBrandCommandInput, UpdateBrandCommandOutput } from "./commands/UpdateBrandCommand";
import type {
  UpdateBrandPublishedVersionCommandInput,
  UpdateBrandPublishedVersionCommandOutput,
} from "./commands/UpdateBrandPublishedVersionCommand";
import type {
  UpdateCustomPermissionsCommandInput,
  UpdateCustomPermissionsCommandOutput,
} from "./commands/UpdateCustomPermissionsCommand";
import type { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import type {
  UpdateDashboardLinksCommandInput,
  UpdateDashboardLinksCommandOutput,
} from "./commands/UpdateDashboardLinksCommand";
import type {
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "./commands/UpdateDashboardPermissionsCommand";
import type {
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "./commands/UpdateDashboardPublishedVersionCommand";
import type {
  UpdateDashboardsQAConfigurationCommandInput,
  UpdateDashboardsQAConfigurationCommandOutput,
} from "./commands/UpdateDashboardsQAConfigurationCommand";
import type { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "./commands/UpdateDataSetCommand";
import type {
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput,
} from "./commands/UpdateDataSetPermissionsCommand";
import type { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import type {
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput,
} from "./commands/UpdateDataSourcePermissionsCommand";
import type {
  UpdateDefaultQBusinessApplicationCommandInput,
  UpdateDefaultQBusinessApplicationCommandOutput,
} from "./commands/UpdateDefaultQBusinessApplicationCommand";
import type {
  UpdateFlowPermissionsCommandInput,
  UpdateFlowPermissionsCommandOutput,
} from "./commands/UpdateFlowPermissionsCommand";
import type { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "./commands/UpdateFolderCommand";
import type {
  UpdateFolderPermissionsCommandInput,
  UpdateFolderPermissionsCommandOutput,
} from "./commands/UpdateFolderPermissionsCommand";
import type { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import type {
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
} from "./commands/UpdateIAMPolicyAssignmentCommand";
import type {
  UpdateIdentityPropagationConfigCommandInput,
  UpdateIdentityPropagationConfigCommandOutput,
} from "./commands/UpdateIdentityPropagationConfigCommand";
import type {
  UpdateIpRestrictionCommandInput,
  UpdateIpRestrictionCommandOutput,
} from "./commands/UpdateIpRestrictionCommand";
import type {
  UpdateKeyRegistrationCommandInput,
  UpdateKeyRegistrationCommandOutput,
} from "./commands/UpdateKeyRegistrationCommand";
import type {
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
} from "./commands/UpdatePublicSharingSettingsCommand";
import type {
  UpdateQPersonalizationConfigurationCommandInput,
  UpdateQPersonalizationConfigurationCommandOutput,
} from "./commands/UpdateQPersonalizationConfigurationCommand";
import type {
  UpdateQuickSightQSearchConfigurationCommandInput,
  UpdateQuickSightQSearchConfigurationCommandOutput,
} from "./commands/UpdateQuickSightQSearchConfigurationCommand";
import type {
  UpdateRefreshScheduleCommandInput,
  UpdateRefreshScheduleCommandOutput,
} from "./commands/UpdateRefreshScheduleCommand";
import type {
  UpdateRoleCustomPermissionCommandInput,
  UpdateRoleCustomPermissionCommandOutput,
} from "./commands/UpdateRoleCustomPermissionCommand";
import type {
  UpdateSelfUpgradeCommandInput,
  UpdateSelfUpgradeCommandOutput,
} from "./commands/UpdateSelfUpgradeCommand";
import type {
  UpdateSelfUpgradeConfigurationCommandInput,
  UpdateSelfUpgradeConfigurationCommandOutput,
} from "./commands/UpdateSelfUpgradeConfigurationCommand";
import type {
  UpdateSPICECapacityConfigurationCommandInput,
  UpdateSPICECapacityConfigurationCommandOutput,
} from "./commands/UpdateSPICECapacityConfigurationCommand";
import type {
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput,
} from "./commands/UpdateTemplateAliasCommand";
import type { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
import type {
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput,
} from "./commands/UpdateTemplatePermissionsCommand";
import type { UpdateThemeAliasCommandInput, UpdateThemeAliasCommandOutput } from "./commands/UpdateThemeAliasCommand";
import type { UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";
import type {
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
} from "./commands/UpdateThemePermissionsCommand";
import type { UpdateTopicCommandInput, UpdateTopicCommandOutput } from "./commands/UpdateTopicCommand";
import type {
  UpdateTopicPermissionsCommandInput,
  UpdateTopicPermissionsCommandOutput,
} from "./commands/UpdateTopicPermissionsCommand";
import type {
  UpdateTopicRefreshScheduleCommandInput,
  UpdateTopicRefreshScheduleCommandOutput,
} from "./commands/UpdateTopicRefreshScheduleCommand";
import type { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import type {
  UpdateUserCustomPermissionCommandInput,
  UpdateUserCustomPermissionCommandOutput,
} from "./commands/UpdateUserCustomPermissionCommand";
import type {
  UpdateVPCConnectionCommandInput,
  UpdateVPCConnectionCommandOutput,
} from "./commands/UpdateVPCConnectionCommand";
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
  | BatchCreateTopicReviewedAnswerCommandInput
  | BatchDeleteTopicReviewedAnswerCommandInput
  | CancelIngestionCommandInput
  | CreateAccountCustomizationCommandInput
  | CreateAccountSubscriptionCommandInput
  | CreateActionConnectorCommandInput
  | CreateAnalysisCommandInput
  | CreateBrandCommandInput
  | CreateCustomPermissionsCommandInput
  | CreateDashboardCommandInput
  | CreateDataSetCommandInput
  | CreateDataSourceCommandInput
  | CreateFolderCommandInput
  | CreateFolderMembershipCommandInput
  | CreateGroupCommandInput
  | CreateGroupMembershipCommandInput
  | CreateIAMPolicyAssignmentCommandInput
  | CreateIngestionCommandInput
  | CreateNamespaceCommandInput
  | CreateRefreshScheduleCommandInput
  | CreateRoleMembershipCommandInput
  | CreateTemplateAliasCommandInput
  | CreateTemplateCommandInput
  | CreateThemeAliasCommandInput
  | CreateThemeCommandInput
  | CreateTopicCommandInput
  | CreateTopicRefreshScheduleCommandInput
  | CreateVPCConnectionCommandInput
  | DeleteAccountCustomPermissionCommandInput
  | DeleteAccountCustomizationCommandInput
  | DeleteAccountSubscriptionCommandInput
  | DeleteActionConnectorCommandInput
  | DeleteAnalysisCommandInput
  | DeleteBrandAssignmentCommandInput
  | DeleteBrandCommandInput
  | DeleteCustomPermissionsCommandInput
  | DeleteDashboardCommandInput
  | DeleteDataSetCommandInput
  | DeleteDataSetRefreshPropertiesCommandInput
  | DeleteDataSourceCommandInput
  | DeleteDefaultQBusinessApplicationCommandInput
  | DeleteFolderCommandInput
  | DeleteFolderMembershipCommandInput
  | DeleteGroupCommandInput
  | DeleteGroupMembershipCommandInput
  | DeleteIAMPolicyAssignmentCommandInput
  | DeleteIdentityPropagationConfigCommandInput
  | DeleteNamespaceCommandInput
  | DeleteRefreshScheduleCommandInput
  | DeleteRoleCustomPermissionCommandInput
  | DeleteRoleMembershipCommandInput
  | DeleteTemplateAliasCommandInput
  | DeleteTemplateCommandInput
  | DeleteThemeAliasCommandInput
  | DeleteThemeCommandInput
  | DeleteTopicCommandInput
  | DeleteTopicRefreshScheduleCommandInput
  | DeleteUserByPrincipalIdCommandInput
  | DeleteUserCommandInput
  | DeleteUserCustomPermissionCommandInput
  | DeleteVPCConnectionCommandInput
  | DescribeAccountCustomPermissionCommandInput
  | DescribeAccountCustomizationCommandInput
  | DescribeAccountSettingsCommandInput
  | DescribeAccountSubscriptionCommandInput
  | DescribeActionConnectorCommandInput
  | DescribeActionConnectorPermissionsCommandInput
  | DescribeAnalysisCommandInput
  | DescribeAnalysisDefinitionCommandInput
  | DescribeAnalysisPermissionsCommandInput
  | DescribeAssetBundleExportJobCommandInput
  | DescribeAssetBundleImportJobCommandInput
  | DescribeBrandAssignmentCommandInput
  | DescribeBrandCommandInput
  | DescribeBrandPublishedVersionCommandInput
  | DescribeCustomPermissionsCommandInput
  | DescribeDashboardCommandInput
  | DescribeDashboardDefinitionCommandInput
  | DescribeDashboardPermissionsCommandInput
  | DescribeDashboardSnapshotJobCommandInput
  | DescribeDashboardSnapshotJobResultCommandInput
  | DescribeDashboardsQAConfigurationCommandInput
  | DescribeDataSetCommandInput
  | DescribeDataSetPermissionsCommandInput
  | DescribeDataSetRefreshPropertiesCommandInput
  | DescribeDataSourceCommandInput
  | DescribeDataSourcePermissionsCommandInput
  | DescribeDefaultQBusinessApplicationCommandInput
  | DescribeFolderCommandInput
  | DescribeFolderPermissionsCommandInput
  | DescribeFolderResolvedPermissionsCommandInput
  | DescribeGroupCommandInput
  | DescribeGroupMembershipCommandInput
  | DescribeIAMPolicyAssignmentCommandInput
  | DescribeIngestionCommandInput
  | DescribeIpRestrictionCommandInput
  | DescribeKeyRegistrationCommandInput
  | DescribeNamespaceCommandInput
  | DescribeQPersonalizationConfigurationCommandInput
  | DescribeQuickSightQSearchConfigurationCommandInput
  | DescribeRefreshScheduleCommandInput
  | DescribeRoleCustomPermissionCommandInput
  | DescribeSelfUpgradeConfigurationCommandInput
  | DescribeTemplateAliasCommandInput
  | DescribeTemplateCommandInput
  | DescribeTemplateDefinitionCommandInput
  | DescribeTemplatePermissionsCommandInput
  | DescribeThemeAliasCommandInput
  | DescribeThemeCommandInput
  | DescribeThemePermissionsCommandInput
  | DescribeTopicCommandInput
  | DescribeTopicPermissionsCommandInput
  | DescribeTopicRefreshCommandInput
  | DescribeTopicRefreshScheduleCommandInput
  | DescribeUserCommandInput
  | DescribeVPCConnectionCommandInput
  | GenerateEmbedUrlForAnonymousUserCommandInput
  | GenerateEmbedUrlForRegisteredUserCommandInput
  | GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput
  | GetDashboardEmbedUrlCommandInput
  | GetFlowMetadataCommandInput
  | GetFlowPermissionsCommandInput
  | GetIdentityContextCommandInput
  | GetSessionEmbedUrlCommandInput
  | ListActionConnectorsCommandInput
  | ListAnalysesCommandInput
  | ListAssetBundleExportJobsCommandInput
  | ListAssetBundleImportJobsCommandInput
  | ListBrandsCommandInput
  | ListCustomPermissionsCommandInput
  | ListDashboardVersionsCommandInput
  | ListDashboardsCommandInput
  | ListDataSetsCommandInput
  | ListDataSourcesCommandInput
  | ListFlowsCommandInput
  | ListFolderMembersCommandInput
  | ListFoldersCommandInput
  | ListFoldersForResourceCommandInput
  | ListGroupMembershipsCommandInput
  | ListGroupsCommandInput
  | ListIAMPolicyAssignmentsCommandInput
  | ListIAMPolicyAssignmentsForUserCommandInput
  | ListIdentityPropagationConfigsCommandInput
  | ListIngestionsCommandInput
  | ListNamespacesCommandInput
  | ListRefreshSchedulesCommandInput
  | ListRoleMembershipsCommandInput
  | ListSelfUpgradesCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateAliasesCommandInput
  | ListTemplateVersionsCommandInput
  | ListTemplatesCommandInput
  | ListThemeAliasesCommandInput
  | ListThemeVersionsCommandInput
  | ListThemesCommandInput
  | ListTopicRefreshSchedulesCommandInput
  | ListTopicReviewedAnswersCommandInput
  | ListTopicsCommandInput
  | ListUserGroupsCommandInput
  | ListUsersCommandInput
  | ListVPCConnectionsCommandInput
  | PredictQAResultsCommandInput
  | PutDataSetRefreshPropertiesCommandInput
  | RegisterUserCommandInput
  | RestoreAnalysisCommandInput
  | SearchActionConnectorsCommandInput
  | SearchAnalysesCommandInput
  | SearchDashboardsCommandInput
  | SearchDataSetsCommandInput
  | SearchDataSourcesCommandInput
  | SearchFlowsCommandInput
  | SearchFoldersCommandInput
  | SearchGroupsCommandInput
  | SearchTopicsCommandInput
  | StartAssetBundleExportJobCommandInput
  | StartAssetBundleImportJobCommandInput
  | StartDashboardSnapshotJobCommandInput
  | StartDashboardSnapshotJobScheduleCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountCustomPermissionCommandInput
  | UpdateAccountCustomizationCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateActionConnectorCommandInput
  | UpdateActionConnectorPermissionsCommandInput
  | UpdateAnalysisCommandInput
  | UpdateAnalysisPermissionsCommandInput
  | UpdateApplicationWithTokenExchangeGrantCommandInput
  | UpdateBrandAssignmentCommandInput
  | UpdateBrandCommandInput
  | UpdateBrandPublishedVersionCommandInput
  | UpdateCustomPermissionsCommandInput
  | UpdateDashboardCommandInput
  | UpdateDashboardLinksCommandInput
  | UpdateDashboardPermissionsCommandInput
  | UpdateDashboardPublishedVersionCommandInput
  | UpdateDashboardsQAConfigurationCommandInput
  | UpdateDataSetCommandInput
  | UpdateDataSetPermissionsCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDataSourcePermissionsCommandInput
  | UpdateDefaultQBusinessApplicationCommandInput
  | UpdateFlowPermissionsCommandInput
  | UpdateFolderCommandInput
  | UpdateFolderPermissionsCommandInput
  | UpdateGroupCommandInput
  | UpdateIAMPolicyAssignmentCommandInput
  | UpdateIdentityPropagationConfigCommandInput
  | UpdateIpRestrictionCommandInput
  | UpdateKeyRegistrationCommandInput
  | UpdatePublicSharingSettingsCommandInput
  | UpdateQPersonalizationConfigurationCommandInput
  | UpdateQuickSightQSearchConfigurationCommandInput
  | UpdateRefreshScheduleCommandInput
  | UpdateRoleCustomPermissionCommandInput
  | UpdateSPICECapacityConfigurationCommandInput
  | UpdateSelfUpgradeCommandInput
  | UpdateSelfUpgradeConfigurationCommandInput
  | UpdateTemplateAliasCommandInput
  | UpdateTemplateCommandInput
  | UpdateTemplatePermissionsCommandInput
  | UpdateThemeAliasCommandInput
  | UpdateThemeCommandInput
  | UpdateThemePermissionsCommandInput
  | UpdateTopicCommandInput
  | UpdateTopicPermissionsCommandInput
  | UpdateTopicRefreshScheduleCommandInput
  | UpdateUserCommandInput
  | UpdateUserCustomPermissionCommandInput
  | UpdateVPCConnectionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCreateTopicReviewedAnswerCommandOutput
  | BatchDeleteTopicReviewedAnswerCommandOutput
  | CancelIngestionCommandOutput
  | CreateAccountCustomizationCommandOutput
  | CreateAccountSubscriptionCommandOutput
  | CreateActionConnectorCommandOutput
  | CreateAnalysisCommandOutput
  | CreateBrandCommandOutput
  | CreateCustomPermissionsCommandOutput
  | CreateDashboardCommandOutput
  | CreateDataSetCommandOutput
  | CreateDataSourceCommandOutput
  | CreateFolderCommandOutput
  | CreateFolderMembershipCommandOutput
  | CreateGroupCommandOutput
  | CreateGroupMembershipCommandOutput
  | CreateIAMPolicyAssignmentCommandOutput
  | CreateIngestionCommandOutput
  | CreateNamespaceCommandOutput
  | CreateRefreshScheduleCommandOutput
  | CreateRoleMembershipCommandOutput
  | CreateTemplateAliasCommandOutput
  | CreateTemplateCommandOutput
  | CreateThemeAliasCommandOutput
  | CreateThemeCommandOutput
  | CreateTopicCommandOutput
  | CreateTopicRefreshScheduleCommandOutput
  | CreateVPCConnectionCommandOutput
  | DeleteAccountCustomPermissionCommandOutput
  | DeleteAccountCustomizationCommandOutput
  | DeleteAccountSubscriptionCommandOutput
  | DeleteActionConnectorCommandOutput
  | DeleteAnalysisCommandOutput
  | DeleteBrandAssignmentCommandOutput
  | DeleteBrandCommandOutput
  | DeleteCustomPermissionsCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteDataSetCommandOutput
  | DeleteDataSetRefreshPropertiesCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteDefaultQBusinessApplicationCommandOutput
  | DeleteFolderCommandOutput
  | DeleteFolderMembershipCommandOutput
  | DeleteGroupCommandOutput
  | DeleteGroupMembershipCommandOutput
  | DeleteIAMPolicyAssignmentCommandOutput
  | DeleteIdentityPropagationConfigCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteRefreshScheduleCommandOutput
  | DeleteRoleCustomPermissionCommandOutput
  | DeleteRoleMembershipCommandOutput
  | DeleteTemplateAliasCommandOutput
  | DeleteTemplateCommandOutput
  | DeleteThemeAliasCommandOutput
  | DeleteThemeCommandOutput
  | DeleteTopicCommandOutput
  | DeleteTopicRefreshScheduleCommandOutput
  | DeleteUserByPrincipalIdCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserCustomPermissionCommandOutput
  | DeleteVPCConnectionCommandOutput
  | DescribeAccountCustomPermissionCommandOutput
  | DescribeAccountCustomizationCommandOutput
  | DescribeAccountSettingsCommandOutput
  | DescribeAccountSubscriptionCommandOutput
  | DescribeActionConnectorCommandOutput
  | DescribeActionConnectorPermissionsCommandOutput
  | DescribeAnalysisCommandOutput
  | DescribeAnalysisDefinitionCommandOutput
  | DescribeAnalysisPermissionsCommandOutput
  | DescribeAssetBundleExportJobCommandOutput
  | DescribeAssetBundleImportJobCommandOutput
  | DescribeBrandAssignmentCommandOutput
  | DescribeBrandCommandOutput
  | DescribeBrandPublishedVersionCommandOutput
  | DescribeCustomPermissionsCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeDashboardDefinitionCommandOutput
  | DescribeDashboardPermissionsCommandOutput
  | DescribeDashboardSnapshotJobCommandOutput
  | DescribeDashboardSnapshotJobResultCommandOutput
  | DescribeDashboardsQAConfigurationCommandOutput
  | DescribeDataSetCommandOutput
  | DescribeDataSetPermissionsCommandOutput
  | DescribeDataSetRefreshPropertiesCommandOutput
  | DescribeDataSourceCommandOutput
  | DescribeDataSourcePermissionsCommandOutput
  | DescribeDefaultQBusinessApplicationCommandOutput
  | DescribeFolderCommandOutput
  | DescribeFolderPermissionsCommandOutput
  | DescribeFolderResolvedPermissionsCommandOutput
  | DescribeGroupCommandOutput
  | DescribeGroupMembershipCommandOutput
  | DescribeIAMPolicyAssignmentCommandOutput
  | DescribeIngestionCommandOutput
  | DescribeIpRestrictionCommandOutput
  | DescribeKeyRegistrationCommandOutput
  | DescribeNamespaceCommandOutput
  | DescribeQPersonalizationConfigurationCommandOutput
  | DescribeQuickSightQSearchConfigurationCommandOutput
  | DescribeRefreshScheduleCommandOutput
  | DescribeRoleCustomPermissionCommandOutput
  | DescribeSelfUpgradeConfigurationCommandOutput
  | DescribeTemplateAliasCommandOutput
  | DescribeTemplateCommandOutput
  | DescribeTemplateDefinitionCommandOutput
  | DescribeTemplatePermissionsCommandOutput
  | DescribeThemeAliasCommandOutput
  | DescribeThemeCommandOutput
  | DescribeThemePermissionsCommandOutput
  | DescribeTopicCommandOutput
  | DescribeTopicPermissionsCommandOutput
  | DescribeTopicRefreshCommandOutput
  | DescribeTopicRefreshScheduleCommandOutput
  | DescribeUserCommandOutput
  | DescribeVPCConnectionCommandOutput
  | GenerateEmbedUrlForAnonymousUserCommandOutput
  | GenerateEmbedUrlForRegisteredUserCommandOutput
  | GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput
  | GetDashboardEmbedUrlCommandOutput
  | GetFlowMetadataCommandOutput
  | GetFlowPermissionsCommandOutput
  | GetIdentityContextCommandOutput
  | GetSessionEmbedUrlCommandOutput
  | ListActionConnectorsCommandOutput
  | ListAnalysesCommandOutput
  | ListAssetBundleExportJobsCommandOutput
  | ListAssetBundleImportJobsCommandOutput
  | ListBrandsCommandOutput
  | ListCustomPermissionsCommandOutput
  | ListDashboardVersionsCommandOutput
  | ListDashboardsCommandOutput
  | ListDataSetsCommandOutput
  | ListDataSourcesCommandOutput
  | ListFlowsCommandOutput
  | ListFolderMembersCommandOutput
  | ListFoldersCommandOutput
  | ListFoldersForResourceCommandOutput
  | ListGroupMembershipsCommandOutput
  | ListGroupsCommandOutput
  | ListIAMPolicyAssignmentsCommandOutput
  | ListIAMPolicyAssignmentsForUserCommandOutput
  | ListIdentityPropagationConfigsCommandOutput
  | ListIngestionsCommandOutput
  | ListNamespacesCommandOutput
  | ListRefreshSchedulesCommandOutput
  | ListRoleMembershipsCommandOutput
  | ListSelfUpgradesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateAliasesCommandOutput
  | ListTemplateVersionsCommandOutput
  | ListTemplatesCommandOutput
  | ListThemeAliasesCommandOutput
  | ListThemeVersionsCommandOutput
  | ListThemesCommandOutput
  | ListTopicRefreshSchedulesCommandOutput
  | ListTopicReviewedAnswersCommandOutput
  | ListTopicsCommandOutput
  | ListUserGroupsCommandOutput
  | ListUsersCommandOutput
  | ListVPCConnectionsCommandOutput
  | PredictQAResultsCommandOutput
  | PutDataSetRefreshPropertiesCommandOutput
  | RegisterUserCommandOutput
  | RestoreAnalysisCommandOutput
  | SearchActionConnectorsCommandOutput
  | SearchAnalysesCommandOutput
  | SearchDashboardsCommandOutput
  | SearchDataSetsCommandOutput
  | SearchDataSourcesCommandOutput
  | SearchFlowsCommandOutput
  | SearchFoldersCommandOutput
  | SearchGroupsCommandOutput
  | SearchTopicsCommandOutput
  | StartAssetBundleExportJobCommandOutput
  | StartAssetBundleImportJobCommandOutput
  | StartDashboardSnapshotJobCommandOutput
  | StartDashboardSnapshotJobScheduleCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountCustomPermissionCommandOutput
  | UpdateAccountCustomizationCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateActionConnectorCommandOutput
  | UpdateActionConnectorPermissionsCommandOutput
  | UpdateAnalysisCommandOutput
  | UpdateAnalysisPermissionsCommandOutput
  | UpdateApplicationWithTokenExchangeGrantCommandOutput
  | UpdateBrandAssignmentCommandOutput
  | UpdateBrandCommandOutput
  | UpdateBrandPublishedVersionCommandOutput
  | UpdateCustomPermissionsCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateDashboardLinksCommandOutput
  | UpdateDashboardPermissionsCommandOutput
  | UpdateDashboardPublishedVersionCommandOutput
  | UpdateDashboardsQAConfigurationCommandOutput
  | UpdateDataSetCommandOutput
  | UpdateDataSetPermissionsCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDataSourcePermissionsCommandOutput
  | UpdateDefaultQBusinessApplicationCommandOutput
  | UpdateFlowPermissionsCommandOutput
  | UpdateFolderCommandOutput
  | UpdateFolderPermissionsCommandOutput
  | UpdateGroupCommandOutput
  | UpdateIAMPolicyAssignmentCommandOutput
  | UpdateIdentityPropagationConfigCommandOutput
  | UpdateIpRestrictionCommandOutput
  | UpdateKeyRegistrationCommandOutput
  | UpdatePublicSharingSettingsCommandOutput
  | UpdateQPersonalizationConfigurationCommandOutput
  | UpdateQuickSightQSearchConfigurationCommandOutput
  | UpdateRefreshScheduleCommandOutput
  | UpdateRoleCustomPermissionCommandOutput
  | UpdateSPICECapacityConfigurationCommandOutput
  | UpdateSelfUpgradeCommandOutput
  | UpdateSelfUpgradeConfigurationCommandOutput
  | UpdateTemplateAliasCommandOutput
  | UpdateTemplateCommandOutput
  | UpdateTemplatePermissionsCommandOutput
  | UpdateThemeAliasCommandOutput
  | UpdateThemeCommandOutput
  | UpdateThemePermissionsCommandOutput
  | UpdateTopicCommandOutput
  | UpdateTopicPermissionsCommandOutput
  | UpdateTopicRefreshScheduleCommandOutput
  | UpdateUserCommandOutput
  | UpdateUserCustomPermissionCommandOutput
  | UpdateVPCConnectionCommandOutput;

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
export type QuickSightClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of QuickSightClient class constructor that set the region, credentials and other options.
 */
export interface QuickSightClientConfig extends QuickSightClientConfigType {}

/**
 * @public
 */
export type QuickSightClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of QuickSightClient class. This is resolved and normalized from the {@link QuickSightClientConfig | constructor configuration interface}.
 */
export interface QuickSightClientResolvedConfig extends QuickSightClientResolvedConfigType {}

/**
 * <fullname>Amazon Quick API Reference</fullname>
 *          <p>Amazon Quick Sight is a fully managed, serverless business intelligence service for the
 *             Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon Quick Sight. </p>
 * @public
 */
export class QuickSightClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QuickSightClientResolvedConfig
> {
  /**
   * The resolved configuration of QuickSightClient class. This is resolved and normalized from the {@link QuickSightClientConfig | constructor configuration interface}.
   */
  readonly config: QuickSightClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<QuickSightClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultQuickSightHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: QuickSightClientResolvedConfig) =>
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
