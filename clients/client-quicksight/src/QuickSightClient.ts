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
  defaultQuickSightHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchCreateTopicReviewedAnswerCommandInput,
  BatchCreateTopicReviewedAnswerCommandOutput,
} from "./commands/BatchCreateTopicReviewedAnswerCommand";
import {
  BatchDeleteTopicReviewedAnswerCommandInput,
  BatchDeleteTopicReviewedAnswerCommandOutput,
} from "./commands/BatchDeleteTopicReviewedAnswerCommand";
import { CancelIngestionCommandInput, CancelIngestionCommandOutput } from "./commands/CancelIngestionCommand";
import {
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
} from "./commands/CreateAccountCustomizationCommand";
import {
  CreateAccountSubscriptionCommandInput,
  CreateAccountSubscriptionCommandOutput,
} from "./commands/CreateAccountSubscriptionCommand";
import { CreateAnalysisCommandInput, CreateAnalysisCommandOutput } from "./commands/CreateAnalysisCommand";
import { CreateBrandCommandInput, CreateBrandCommandOutput } from "./commands/CreateBrandCommand";
import {
  CreateCustomPermissionsCommandInput,
  CreateCustomPermissionsCommandOutput,
} from "./commands/CreateCustomPermissionsCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "./commands/CreateDataSetCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateFolderCommandInput, CreateFolderCommandOutput } from "./commands/CreateFolderCommand";
import {
  CreateFolderMembershipCommandInput,
  CreateFolderMembershipCommandOutput,
} from "./commands/CreateFolderMembershipCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "./commands/CreateGroupMembershipCommand";
import {
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
} from "./commands/CreateIAMPolicyAssignmentCommand";
import { CreateIngestionCommandInput, CreateIngestionCommandOutput } from "./commands/CreateIngestionCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import {
  CreateRefreshScheduleCommandInput,
  CreateRefreshScheduleCommandOutput,
} from "./commands/CreateRefreshScheduleCommand";
import {
  CreateRoleMembershipCommandInput,
  CreateRoleMembershipCommandOutput,
} from "./commands/CreateRoleMembershipCommand";
import {
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "./commands/CreateTemplateAliasCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import { CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput } from "./commands/CreateThemeAliasCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import { CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import {
  CreateTopicRefreshScheduleCommandInput,
  CreateTopicRefreshScheduleCommandOutput,
} from "./commands/CreateTopicRefreshScheduleCommand";
import {
  CreateVPCConnectionCommandInput,
  CreateVPCConnectionCommandOutput,
} from "./commands/CreateVPCConnectionCommand";
import {
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "./commands/DeleteAccountCustomizationCommand";
import {
  DeleteAccountSubscriptionCommandInput,
  DeleteAccountSubscriptionCommandOutput,
} from "./commands/DeleteAccountSubscriptionCommand";
import { DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput } from "./commands/DeleteAnalysisCommand";
import {
  DeleteBrandAssignmentCommandInput,
  DeleteBrandAssignmentCommandOutput,
} from "./commands/DeleteBrandAssignmentCommand";
import { DeleteBrandCommandInput, DeleteBrandCommandOutput } from "./commands/DeleteBrandCommand";
import {
  DeleteCustomPermissionsCommandInput,
  DeleteCustomPermissionsCommandOutput,
} from "./commands/DeleteCustomPermissionsCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import {
  DeleteDataSetRefreshPropertiesCommandInput,
  DeleteDataSetRefreshPropertiesCommandOutput,
} from "./commands/DeleteDataSetRefreshPropertiesCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import {
  DeleteDefaultQBusinessApplicationCommandInput,
  DeleteDefaultQBusinessApplicationCommandOutput,
} from "./commands/DeleteDefaultQBusinessApplicationCommand";
import { DeleteFolderCommandInput, DeleteFolderCommandOutput } from "./commands/DeleteFolderCommand";
import {
  DeleteFolderMembershipCommandInput,
  DeleteFolderMembershipCommandOutput,
} from "./commands/DeleteFolderMembershipCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "./commands/DeleteGroupMembershipCommand";
import {
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput,
} from "./commands/DeleteIAMPolicyAssignmentCommand";
import {
  DeleteIdentityPropagationConfigCommandInput,
  DeleteIdentityPropagationConfigCommandOutput,
} from "./commands/DeleteIdentityPropagationConfigCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteRefreshScheduleCommandInput,
  DeleteRefreshScheduleCommandOutput,
} from "./commands/DeleteRefreshScheduleCommand";
import {
  DeleteRoleCustomPermissionCommandInput,
  DeleteRoleCustomPermissionCommandOutput,
} from "./commands/DeleteRoleCustomPermissionCommand";
import {
  DeleteRoleMembershipCommandInput,
  DeleteRoleMembershipCommandOutput,
} from "./commands/DeleteRoleMembershipCommand";
import {
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "./commands/DeleteTemplateAliasCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import { DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput } from "./commands/DeleteThemeAliasCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import { DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import {
  DeleteTopicRefreshScheduleCommandInput,
  DeleteTopicRefreshScheduleCommandOutput,
} from "./commands/DeleteTopicRefreshScheduleCommand";
import {
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserCustomPermissionCommandInput,
  DeleteUserCustomPermissionCommandOutput,
} from "./commands/DeleteUserCustomPermissionCommand";
import {
  DeleteVPCConnectionCommandInput,
  DeleteVPCConnectionCommandOutput,
} from "./commands/DeleteVPCConnectionCommand";
import {
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
} from "./commands/DescribeAccountCustomizationCommand";
import {
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
} from "./commands/DescribeAccountSettingsCommand";
import {
  DescribeAccountSubscriptionCommandInput,
  DescribeAccountSubscriptionCommandOutput,
} from "./commands/DescribeAccountSubscriptionCommand";
import { DescribeAnalysisCommandInput, DescribeAnalysisCommandOutput } from "./commands/DescribeAnalysisCommand";
import {
  DescribeAnalysisDefinitionCommandInput,
  DescribeAnalysisDefinitionCommandOutput,
} from "./commands/DescribeAnalysisDefinitionCommand";
import {
  DescribeAnalysisPermissionsCommandInput,
  DescribeAnalysisPermissionsCommandOutput,
} from "./commands/DescribeAnalysisPermissionsCommand";
import {
  DescribeAssetBundleExportJobCommandInput,
  DescribeAssetBundleExportJobCommandOutput,
} from "./commands/DescribeAssetBundleExportJobCommand";
import {
  DescribeAssetBundleImportJobCommandInput,
  DescribeAssetBundleImportJobCommandOutput,
} from "./commands/DescribeAssetBundleImportJobCommand";
import {
  DescribeBrandAssignmentCommandInput,
  DescribeBrandAssignmentCommandOutput,
} from "./commands/DescribeBrandAssignmentCommand";
import { DescribeBrandCommandInput, DescribeBrandCommandOutput } from "./commands/DescribeBrandCommand";
import {
  DescribeBrandPublishedVersionCommandInput,
  DescribeBrandPublishedVersionCommandOutput,
} from "./commands/DescribeBrandPublishedVersionCommand";
import {
  DescribeCustomPermissionsCommandInput,
  DescribeCustomPermissionsCommandOutput,
} from "./commands/DescribeCustomPermissionsCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import {
  DescribeDashboardDefinitionCommandInput,
  DescribeDashboardDefinitionCommandOutput,
} from "./commands/DescribeDashboardDefinitionCommand";
import {
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "./commands/DescribeDashboardPermissionsCommand";
import {
  DescribeDashboardSnapshotJobCommandInput,
  DescribeDashboardSnapshotJobCommandOutput,
} from "./commands/DescribeDashboardSnapshotJobCommand";
import {
  DescribeDashboardSnapshotJobResultCommandInput,
  DescribeDashboardSnapshotJobResultCommandOutput,
} from "./commands/DescribeDashboardSnapshotJobResultCommand";
import {
  DescribeDashboardsQAConfigurationCommandInput,
  DescribeDashboardsQAConfigurationCommandOutput,
} from "./commands/DescribeDashboardsQAConfigurationCommand";
import { DescribeDataSetCommandInput, DescribeDataSetCommandOutput } from "./commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "./commands/DescribeDataSetPermissionsCommand";
import {
  DescribeDataSetRefreshPropertiesCommandInput,
  DescribeDataSetRefreshPropertiesCommandOutput,
} from "./commands/DescribeDataSetRefreshPropertiesCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "./commands/DescribeDataSourcePermissionsCommand";
import {
  DescribeDefaultQBusinessApplicationCommandInput,
  DescribeDefaultQBusinessApplicationCommandOutput,
} from "./commands/DescribeDefaultQBusinessApplicationCommand";
import { DescribeFolderCommandInput, DescribeFolderCommandOutput } from "./commands/DescribeFolderCommand";
import {
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
} from "./commands/DescribeFolderPermissionsCommand";
import {
  DescribeFolderResolvedPermissionsCommandInput,
  DescribeFolderResolvedPermissionsCommandOutput,
} from "./commands/DescribeFolderResolvedPermissionsCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import {
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
} from "./commands/DescribeGroupMembershipCommand";
import {
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
} from "./commands/DescribeIAMPolicyAssignmentCommand";
import { DescribeIngestionCommandInput, DescribeIngestionCommandOutput } from "./commands/DescribeIngestionCommand";
import {
  DescribeIpRestrictionCommandInput,
  DescribeIpRestrictionCommandOutput,
} from "./commands/DescribeIpRestrictionCommand";
import {
  DescribeKeyRegistrationCommandInput,
  DescribeKeyRegistrationCommandOutput,
} from "./commands/DescribeKeyRegistrationCommand";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "./commands/DescribeNamespaceCommand";
import {
  DescribeQPersonalizationConfigurationCommandInput,
  DescribeQPersonalizationConfigurationCommandOutput,
} from "./commands/DescribeQPersonalizationConfigurationCommand";
import {
  DescribeQuickSightQSearchConfigurationCommandInput,
  DescribeQuickSightQSearchConfigurationCommandOutput,
} from "./commands/DescribeQuickSightQSearchConfigurationCommand";
import {
  DescribeRefreshScheduleCommandInput,
  DescribeRefreshScheduleCommandOutput,
} from "./commands/DescribeRefreshScheduleCommand";
import {
  DescribeRoleCustomPermissionCommandInput,
  DescribeRoleCustomPermissionCommandOutput,
} from "./commands/DescribeRoleCustomPermissionCommand";
import {
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
} from "./commands/DescribeTemplateAliasCommand";
import { DescribeTemplateCommandInput, DescribeTemplateCommandOutput } from "./commands/DescribeTemplateCommand";
import {
  DescribeTemplateDefinitionCommandInput,
  DescribeTemplateDefinitionCommandOutput,
} from "./commands/DescribeTemplateDefinitionCommand";
import {
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput,
} from "./commands/DescribeTemplatePermissionsCommand";
import { DescribeThemeAliasCommandInput, DescribeThemeAliasCommandOutput } from "./commands/DescribeThemeAliasCommand";
import { DescribeThemeCommandInput, DescribeThemeCommandOutput } from "./commands/DescribeThemeCommand";
import {
  DescribeThemePermissionsCommandInput,
  DescribeThemePermissionsCommandOutput,
} from "./commands/DescribeThemePermissionsCommand";
import { DescribeTopicCommandInput, DescribeTopicCommandOutput } from "./commands/DescribeTopicCommand";
import {
  DescribeTopicPermissionsCommandInput,
  DescribeTopicPermissionsCommandOutput,
} from "./commands/DescribeTopicPermissionsCommand";
import {
  DescribeTopicRefreshCommandInput,
  DescribeTopicRefreshCommandOutput,
} from "./commands/DescribeTopicRefreshCommand";
import {
  DescribeTopicRefreshScheduleCommandInput,
  DescribeTopicRefreshScheduleCommandOutput,
} from "./commands/DescribeTopicRefreshScheduleCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import {
  DescribeVPCConnectionCommandInput,
  DescribeVPCConnectionCommandOutput,
} from "./commands/DescribeVPCConnectionCommand";
import {
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
} from "./commands/GenerateEmbedUrlForAnonymousUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
} from "./commands/GenerateEmbedUrlForRegisteredUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
  GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput,
} from "./commands/GenerateEmbedUrlForRegisteredUserWithIdentityCommand";
import {
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "./commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput } from "./commands/GetSessionEmbedUrlCommand";
import { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "./commands/ListAnalysesCommand";
import {
  ListAssetBundleExportJobsCommandInput,
  ListAssetBundleExportJobsCommandOutput,
} from "./commands/ListAssetBundleExportJobsCommand";
import {
  ListAssetBundleImportJobsCommandInput,
  ListAssetBundleImportJobsCommandOutput,
} from "./commands/ListAssetBundleImportJobsCommand";
import { ListBrandsCommandInput, ListBrandsCommandOutput } from "./commands/ListBrandsCommand";
import {
  ListCustomPermissionsCommandInput,
  ListCustomPermissionsCommandOutput,
} from "./commands/ListCustomPermissionsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import {
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "./commands/ListDashboardVersionsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "./commands/ListDataSetsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListFolderMembersCommandInput, ListFolderMembersCommandOutput } from "./commands/ListFolderMembersCommand";
import { ListFoldersCommandInput, ListFoldersCommandOutput } from "./commands/ListFoldersCommand";
import {
  ListFoldersForResourceCommandInput,
  ListFoldersForResourceCommandOutput,
} from "./commands/ListFoldersForResourceCommand";
import {
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "./commands/ListGroupMembershipsCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsCommand";
import {
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import {
  ListIdentityPropagationConfigsCommandInput,
  ListIdentityPropagationConfigsCommandOutput,
} from "./commands/ListIdentityPropagationConfigsCommand";
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "./commands/ListIngestionsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import {
  ListRefreshSchedulesCommandInput,
  ListRefreshSchedulesCommandOutput,
} from "./commands/ListRefreshSchedulesCommand";
import {
  ListRoleMembershipsCommandInput,
  ListRoleMembershipsCommandOutput,
} from "./commands/ListRoleMembershipsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "./commands/ListTemplateAliasesCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import { ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput } from "./commands/ListThemeAliasesCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "./commands/ListThemesCommand";
import { ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput } from "./commands/ListThemeVersionsCommand";
import {
  ListTopicRefreshSchedulesCommandInput,
  ListTopicRefreshSchedulesCommandOutput,
} from "./commands/ListTopicRefreshSchedulesCommand";
import {
  ListTopicReviewedAnswersCommandInput,
  ListTopicReviewedAnswersCommandOutput,
} from "./commands/ListTopicReviewedAnswersCommand";
import { ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "./commands/ListUserGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListVPCConnectionsCommandInput, ListVPCConnectionsCommandOutput } from "./commands/ListVPCConnectionsCommand";
import { PredictQAResultsCommandInput, PredictQAResultsCommandOutput } from "./commands/PredictQAResultsCommand";
import {
  PutDataSetRefreshPropertiesCommandInput,
  PutDataSetRefreshPropertiesCommandOutput,
} from "./commands/PutDataSetRefreshPropertiesCommand";
import { RegisterUserCommandInput, RegisterUserCommandOutput } from "./commands/RegisterUserCommand";
import { RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput } from "./commands/RestoreAnalysisCommand";
import { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "./commands/SearchAnalysesCommand";
import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "./commands/SearchDashboardsCommand";
import { SearchDataSetsCommandInput, SearchDataSetsCommandOutput } from "./commands/SearchDataSetsCommand";
import { SearchDataSourcesCommandInput, SearchDataSourcesCommandOutput } from "./commands/SearchDataSourcesCommand";
import { SearchFoldersCommandInput, SearchFoldersCommandOutput } from "./commands/SearchFoldersCommand";
import { SearchGroupsCommandInput, SearchGroupsCommandOutput } from "./commands/SearchGroupsCommand";
import { SearchTopicsCommandInput, SearchTopicsCommandOutput } from "./commands/SearchTopicsCommand";
import {
  StartAssetBundleExportJobCommandInput,
  StartAssetBundleExportJobCommandOutput,
} from "./commands/StartAssetBundleExportJobCommand";
import {
  StartAssetBundleImportJobCommandInput,
  StartAssetBundleImportJobCommandOutput,
} from "./commands/StartAssetBundleImportJobCommand";
import {
  StartDashboardSnapshotJobCommandInput,
  StartDashboardSnapshotJobCommandOutput,
} from "./commands/StartDashboardSnapshotJobCommand";
import {
  StartDashboardSnapshotJobScheduleCommandInput,
  StartDashboardSnapshotJobScheduleCommandOutput,
} from "./commands/StartDashboardSnapshotJobScheduleCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
} from "./commands/UpdateAccountCustomizationCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateAnalysisCommandInput, UpdateAnalysisCommandOutput } from "./commands/UpdateAnalysisCommand";
import {
  UpdateAnalysisPermissionsCommandInput,
  UpdateAnalysisPermissionsCommandOutput,
} from "./commands/UpdateAnalysisPermissionsCommand";
import {
  UpdateApplicationWithTokenExchangeGrantCommandInput,
  UpdateApplicationWithTokenExchangeGrantCommandOutput,
} from "./commands/UpdateApplicationWithTokenExchangeGrantCommand";
import {
  UpdateBrandAssignmentCommandInput,
  UpdateBrandAssignmentCommandOutput,
} from "./commands/UpdateBrandAssignmentCommand";
import { UpdateBrandCommandInput, UpdateBrandCommandOutput } from "./commands/UpdateBrandCommand";
import {
  UpdateBrandPublishedVersionCommandInput,
  UpdateBrandPublishedVersionCommandOutput,
} from "./commands/UpdateBrandPublishedVersionCommand";
import {
  UpdateCustomPermissionsCommandInput,
  UpdateCustomPermissionsCommandOutput,
} from "./commands/UpdateCustomPermissionsCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import {
  UpdateDashboardLinksCommandInput,
  UpdateDashboardLinksCommandOutput,
} from "./commands/UpdateDashboardLinksCommand";
import {
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "./commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "./commands/UpdateDashboardPublishedVersionCommand";
import {
  UpdateDashboardsQAConfigurationCommandInput,
  UpdateDashboardsQAConfigurationCommandOutput,
} from "./commands/UpdateDashboardsQAConfigurationCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "./commands/UpdateDataSetCommand";
import {
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput,
} from "./commands/UpdateDataSetPermissionsCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import {
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput,
} from "./commands/UpdateDataSourcePermissionsCommand";
import {
  UpdateDefaultQBusinessApplicationCommandInput,
  UpdateDefaultQBusinessApplicationCommandOutput,
} from "./commands/UpdateDefaultQBusinessApplicationCommand";
import { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "./commands/UpdateFolderCommand";
import {
  UpdateFolderPermissionsCommandInput,
  UpdateFolderPermissionsCommandOutput,
} from "./commands/UpdateFolderPermissionsCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
} from "./commands/UpdateIAMPolicyAssignmentCommand";
import {
  UpdateIdentityPropagationConfigCommandInput,
  UpdateIdentityPropagationConfigCommandOutput,
} from "./commands/UpdateIdentityPropagationConfigCommand";
import {
  UpdateIpRestrictionCommandInput,
  UpdateIpRestrictionCommandOutput,
} from "./commands/UpdateIpRestrictionCommand";
import {
  UpdateKeyRegistrationCommandInput,
  UpdateKeyRegistrationCommandOutput,
} from "./commands/UpdateKeyRegistrationCommand";
import {
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
} from "./commands/UpdatePublicSharingSettingsCommand";
import {
  UpdateQPersonalizationConfigurationCommandInput,
  UpdateQPersonalizationConfigurationCommandOutput,
} from "./commands/UpdateQPersonalizationConfigurationCommand";
import {
  UpdateQuickSightQSearchConfigurationCommandInput,
  UpdateQuickSightQSearchConfigurationCommandOutput,
} from "./commands/UpdateQuickSightQSearchConfigurationCommand";
import {
  UpdateRefreshScheduleCommandInput,
  UpdateRefreshScheduleCommandOutput,
} from "./commands/UpdateRefreshScheduleCommand";
import {
  UpdateRoleCustomPermissionCommandInput,
  UpdateRoleCustomPermissionCommandOutput,
} from "./commands/UpdateRoleCustomPermissionCommand";
import {
  UpdateSPICECapacityConfigurationCommandInput,
  UpdateSPICECapacityConfigurationCommandOutput,
} from "./commands/UpdateSPICECapacityConfigurationCommand";
import {
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput,
} from "./commands/UpdateTemplateAliasCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
import {
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput,
} from "./commands/UpdateTemplatePermissionsCommand";
import { UpdateThemeAliasCommandInput, UpdateThemeAliasCommandOutput } from "./commands/UpdateThemeAliasCommand";
import { UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";
import {
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
} from "./commands/UpdateThemePermissionsCommand";
import { UpdateTopicCommandInput, UpdateTopicCommandOutput } from "./commands/UpdateTopicCommand";
import {
  UpdateTopicPermissionsCommandInput,
  UpdateTopicPermissionsCommandOutput,
} from "./commands/UpdateTopicPermissionsCommand";
import {
  UpdateTopicRefreshScheduleCommandInput,
  UpdateTopicRefreshScheduleCommandOutput,
} from "./commands/UpdateTopicRefreshScheduleCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UpdateUserCustomPermissionCommandInput,
  UpdateUserCustomPermissionCommandOutput,
} from "./commands/UpdateUserCustomPermissionCommand";
import {
  UpdateVPCConnectionCommandInput,
  UpdateVPCConnectionCommandOutput,
} from "./commands/UpdateVPCConnectionCommand";
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
  | BatchCreateTopicReviewedAnswerCommandInput
  | BatchDeleteTopicReviewedAnswerCommandInput
  | CancelIngestionCommandInput
  | CreateAccountCustomizationCommandInput
  | CreateAccountSubscriptionCommandInput
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
  | DeleteAccountCustomizationCommandInput
  | DeleteAccountSubscriptionCommandInput
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
  | DescribeAccountCustomizationCommandInput
  | DescribeAccountSettingsCommandInput
  | DescribeAccountSubscriptionCommandInput
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
  | GetSessionEmbedUrlCommandInput
  | ListAnalysesCommandInput
  | ListAssetBundleExportJobsCommandInput
  | ListAssetBundleImportJobsCommandInput
  | ListBrandsCommandInput
  | ListCustomPermissionsCommandInput
  | ListDashboardVersionsCommandInput
  | ListDashboardsCommandInput
  | ListDataSetsCommandInput
  | ListDataSourcesCommandInput
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
  | SearchAnalysesCommandInput
  | SearchDashboardsCommandInput
  | SearchDataSetsCommandInput
  | SearchDataSourcesCommandInput
  | SearchFoldersCommandInput
  | SearchGroupsCommandInput
  | SearchTopicsCommandInput
  | StartAssetBundleExportJobCommandInput
  | StartAssetBundleImportJobCommandInput
  | StartDashboardSnapshotJobCommandInput
  | StartDashboardSnapshotJobScheduleCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountCustomizationCommandInput
  | UpdateAccountSettingsCommandInput
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
  | DeleteAccountCustomizationCommandOutput
  | DeleteAccountSubscriptionCommandOutput
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
  | DescribeAccountCustomizationCommandOutput
  | DescribeAccountSettingsCommandOutput
  | DescribeAccountSubscriptionCommandOutput
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
  | GetSessionEmbedUrlCommandOutput
  | ListAnalysesCommandOutput
  | ListAssetBundleExportJobsCommandOutput
  | ListAssetBundleImportJobsCommandOutput
  | ListBrandsCommandOutput
  | ListCustomPermissionsCommandOutput
  | ListDashboardVersionsCommandOutput
  | ListDashboardsCommandOutput
  | ListDataSetsCommandOutput
  | ListDataSourcesCommandOutput
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
  | SearchAnalysesCommandOutput
  | SearchDashboardsCommandOutput
  | SearchDataSetsCommandOutput
  | SearchDataSourcesCommandOutput
  | SearchFoldersCommandOutput
  | SearchGroupsCommandOutput
  | SearchTopicsCommandOutput
  | StartAssetBundleExportJobCommandOutput
  | StartAssetBundleImportJobCommandOutput
  | StartDashboardSnapshotJobCommandOutput
  | StartDashboardSnapshotJobScheduleCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountCustomizationCommandOutput
  | UpdateAccountSettingsCommandOutput
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
 * <fullname>Amazon QuickSight API Reference</fullname>
 *          <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the
 *             Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon QuickSight. </p>
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
