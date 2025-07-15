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
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
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

import {
  BatchCreateTopicReviewedAnswerCommandInput,
  BatchCreateTopicReviewedAnswerCommandOutput,
} from "../commands/BatchCreateTopicReviewedAnswerCommand";
import {
  BatchDeleteTopicReviewedAnswerCommandInput,
  BatchDeleteTopicReviewedAnswerCommandOutput,
} from "../commands/BatchDeleteTopicReviewedAnswerCommand";
import { CancelIngestionCommandInput, CancelIngestionCommandOutput } from "../commands/CancelIngestionCommand";
import {
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
} from "../commands/CreateAccountCustomizationCommand";
import {
  CreateAccountSubscriptionCommandInput,
  CreateAccountSubscriptionCommandOutput,
} from "../commands/CreateAccountSubscriptionCommand";
import { CreateAnalysisCommandInput, CreateAnalysisCommandOutput } from "../commands/CreateAnalysisCommand";
import { CreateBrandCommandInput, CreateBrandCommandOutput } from "../commands/CreateBrandCommand";
import {
  CreateCustomPermissionsCommandInput,
  CreateCustomPermissionsCommandOutput,
} from "../commands/CreateCustomPermissionsCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "../commands/CreateDashboardCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "../commands/CreateDataSetCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateFolderCommandInput, CreateFolderCommandOutput } from "../commands/CreateFolderCommand";
import {
  CreateFolderMembershipCommandInput,
  CreateFolderMembershipCommandOutput,
} from "../commands/CreateFolderMembershipCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "../commands/CreateGroupMembershipCommand";
import {
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
} from "../commands/CreateIAMPolicyAssignmentCommand";
import { CreateIngestionCommandInput, CreateIngestionCommandOutput } from "../commands/CreateIngestionCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "../commands/CreateNamespaceCommand";
import {
  CreateRefreshScheduleCommandInput,
  CreateRefreshScheduleCommandOutput,
} from "../commands/CreateRefreshScheduleCommand";
import {
  CreateRoleMembershipCommandInput,
  CreateRoleMembershipCommandOutput,
} from "../commands/CreateRoleMembershipCommand";
import {
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "../commands/CreateTemplateAliasCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "../commands/CreateTemplateCommand";
import { CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput } from "../commands/CreateThemeAliasCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "../commands/CreateThemeCommand";
import { CreateTopicCommandInput, CreateTopicCommandOutput } from "../commands/CreateTopicCommand";
import {
  CreateTopicRefreshScheduleCommandInput,
  CreateTopicRefreshScheduleCommandOutput,
} from "../commands/CreateTopicRefreshScheduleCommand";
import {
  CreateVPCConnectionCommandInput,
  CreateVPCConnectionCommandOutput,
} from "../commands/CreateVPCConnectionCommand";
import {
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "../commands/DeleteAccountCustomizationCommand";
import {
  DeleteAccountSubscriptionCommandInput,
  DeleteAccountSubscriptionCommandOutput,
} from "../commands/DeleteAccountSubscriptionCommand";
import { DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput } from "../commands/DeleteAnalysisCommand";
import {
  DeleteBrandAssignmentCommandInput,
  DeleteBrandAssignmentCommandOutput,
} from "../commands/DeleteBrandAssignmentCommand";
import { DeleteBrandCommandInput, DeleteBrandCommandOutput } from "../commands/DeleteBrandCommand";
import {
  DeleteCustomPermissionsCommandInput,
  DeleteCustomPermissionsCommandOutput,
} from "../commands/DeleteCustomPermissionsCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "../commands/DeleteDashboardCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "../commands/DeleteDataSetCommand";
import {
  DeleteDataSetRefreshPropertiesCommandInput,
  DeleteDataSetRefreshPropertiesCommandOutput,
} from "../commands/DeleteDataSetRefreshPropertiesCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import {
  DeleteDefaultQBusinessApplicationCommandInput,
  DeleteDefaultQBusinessApplicationCommandOutput,
} from "../commands/DeleteDefaultQBusinessApplicationCommand";
import { DeleteFolderCommandInput, DeleteFolderCommandOutput } from "../commands/DeleteFolderCommand";
import {
  DeleteFolderMembershipCommandInput,
  DeleteFolderMembershipCommandOutput,
} from "../commands/DeleteFolderMembershipCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "../commands/DeleteGroupMembershipCommand";
import {
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput,
} from "../commands/DeleteIAMPolicyAssignmentCommand";
import {
  DeleteIdentityPropagationConfigCommandInput,
  DeleteIdentityPropagationConfigCommandOutput,
} from "../commands/DeleteIdentityPropagationConfigCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand";
import {
  DeleteRefreshScheduleCommandInput,
  DeleteRefreshScheduleCommandOutput,
} from "../commands/DeleteRefreshScheduleCommand";
import {
  DeleteRoleCustomPermissionCommandInput,
  DeleteRoleCustomPermissionCommandOutput,
} from "../commands/DeleteRoleCustomPermissionCommand";
import {
  DeleteRoleMembershipCommandInput,
  DeleteRoleMembershipCommandOutput,
} from "../commands/DeleteRoleMembershipCommand";
import {
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "../commands/DeleteTemplateAliasCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "../commands/DeleteTemplateCommand";
import { DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput } from "../commands/DeleteThemeAliasCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "../commands/DeleteThemeCommand";
import { DeleteTopicCommandInput, DeleteTopicCommandOutput } from "../commands/DeleteTopicCommand";
import {
  DeleteTopicRefreshScheduleCommandInput,
  DeleteTopicRefreshScheduleCommandOutput,
} from "../commands/DeleteTopicRefreshScheduleCommand";
import {
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "../commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DeleteUserCustomPermissionCommandInput,
  DeleteUserCustomPermissionCommandOutput,
} from "../commands/DeleteUserCustomPermissionCommand";
import {
  DeleteVPCConnectionCommandInput,
  DeleteVPCConnectionCommandOutput,
} from "../commands/DeleteVPCConnectionCommand";
import {
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
} from "../commands/DescribeAccountCustomizationCommand";
import {
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
} from "../commands/DescribeAccountSettingsCommand";
import {
  DescribeAccountSubscriptionCommandInput,
  DescribeAccountSubscriptionCommandOutput,
} from "../commands/DescribeAccountSubscriptionCommand";
import { DescribeAnalysisCommandInput, DescribeAnalysisCommandOutput } from "../commands/DescribeAnalysisCommand";
import {
  DescribeAnalysisDefinitionCommandInput,
  DescribeAnalysisDefinitionCommandOutput,
} from "../commands/DescribeAnalysisDefinitionCommand";
import {
  DescribeAnalysisPermissionsCommandInput,
  DescribeAnalysisPermissionsCommandOutput,
} from "../commands/DescribeAnalysisPermissionsCommand";
import {
  DescribeAssetBundleExportJobCommandInput,
  DescribeAssetBundleExportJobCommandOutput,
} from "../commands/DescribeAssetBundleExportJobCommand";
import {
  DescribeAssetBundleImportJobCommandInput,
  DescribeAssetBundleImportJobCommandOutput,
} from "../commands/DescribeAssetBundleImportJobCommand";
import {
  DescribeBrandAssignmentCommandInput,
  DescribeBrandAssignmentCommandOutput,
} from "../commands/DescribeBrandAssignmentCommand";
import { DescribeBrandCommandInput, DescribeBrandCommandOutput } from "../commands/DescribeBrandCommand";
import {
  DescribeBrandPublishedVersionCommandInput,
  DescribeBrandPublishedVersionCommandOutput,
} from "../commands/DescribeBrandPublishedVersionCommand";
import {
  DescribeCustomPermissionsCommandInput,
  DescribeCustomPermissionsCommandOutput,
} from "../commands/DescribeCustomPermissionsCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "../commands/DescribeDashboardCommand";
import {
  DescribeDashboardDefinitionCommandInput,
  DescribeDashboardDefinitionCommandOutput,
} from "../commands/DescribeDashboardDefinitionCommand";
import {
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "../commands/DescribeDashboardPermissionsCommand";
import {
  DescribeDashboardSnapshotJobCommandInput,
  DescribeDashboardSnapshotJobCommandOutput,
} from "../commands/DescribeDashboardSnapshotJobCommand";
import {
  DescribeDashboardSnapshotJobResultCommandInput,
  DescribeDashboardSnapshotJobResultCommandOutput,
} from "../commands/DescribeDashboardSnapshotJobResultCommand";
import {
  DescribeDashboardsQAConfigurationCommandInput,
  DescribeDashboardsQAConfigurationCommandOutput,
} from "../commands/DescribeDashboardsQAConfigurationCommand";
import { DescribeDataSetCommandInput, DescribeDataSetCommandOutput } from "../commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "../commands/DescribeDataSetPermissionsCommand";
import {
  DescribeDataSetRefreshPropertiesCommandInput,
  DescribeDataSetRefreshPropertiesCommandOutput,
} from "../commands/DescribeDataSetRefreshPropertiesCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "../commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "../commands/DescribeDataSourcePermissionsCommand";
import {
  DescribeDefaultQBusinessApplicationCommandInput,
  DescribeDefaultQBusinessApplicationCommandOutput,
} from "../commands/DescribeDefaultQBusinessApplicationCommand";
import { DescribeFolderCommandInput, DescribeFolderCommandOutput } from "../commands/DescribeFolderCommand";
import {
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
} from "../commands/DescribeFolderPermissionsCommand";
import {
  DescribeFolderResolvedPermissionsCommandInput,
  DescribeFolderResolvedPermissionsCommandOutput,
} from "../commands/DescribeFolderResolvedPermissionsCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "../commands/DescribeGroupCommand";
import {
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
} from "../commands/DescribeGroupMembershipCommand";
import {
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
} from "../commands/DescribeIAMPolicyAssignmentCommand";
import { DescribeIngestionCommandInput, DescribeIngestionCommandOutput } from "../commands/DescribeIngestionCommand";
import {
  DescribeIpRestrictionCommandInput,
  DescribeIpRestrictionCommandOutput,
} from "../commands/DescribeIpRestrictionCommand";
import {
  DescribeKeyRegistrationCommandInput,
  DescribeKeyRegistrationCommandOutput,
} from "../commands/DescribeKeyRegistrationCommand";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "../commands/DescribeNamespaceCommand";
import {
  DescribeQPersonalizationConfigurationCommandInput,
  DescribeQPersonalizationConfigurationCommandOutput,
} from "../commands/DescribeQPersonalizationConfigurationCommand";
import {
  DescribeQuickSightQSearchConfigurationCommandInput,
  DescribeQuickSightQSearchConfigurationCommandOutput,
} from "../commands/DescribeQuickSightQSearchConfigurationCommand";
import {
  DescribeRefreshScheduleCommandInput,
  DescribeRefreshScheduleCommandOutput,
} from "../commands/DescribeRefreshScheduleCommand";
import {
  DescribeRoleCustomPermissionCommandInput,
  DescribeRoleCustomPermissionCommandOutput,
} from "../commands/DescribeRoleCustomPermissionCommand";
import {
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
} from "../commands/DescribeTemplateAliasCommand";
import { DescribeTemplateCommandInput, DescribeTemplateCommandOutput } from "../commands/DescribeTemplateCommand";
import {
  DescribeTemplateDefinitionCommandInput,
  DescribeTemplateDefinitionCommandOutput,
} from "../commands/DescribeTemplateDefinitionCommand";
import {
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput,
} from "../commands/DescribeTemplatePermissionsCommand";
import { DescribeThemeAliasCommandInput, DescribeThemeAliasCommandOutput } from "../commands/DescribeThemeAliasCommand";
import { DescribeThemeCommandInput, DescribeThemeCommandOutput } from "../commands/DescribeThemeCommand";
import {
  DescribeThemePermissionsCommandInput,
  DescribeThemePermissionsCommandOutput,
} from "../commands/DescribeThemePermissionsCommand";
import { DescribeTopicCommandInput, DescribeTopicCommandOutput } from "../commands/DescribeTopicCommand";
import {
  DescribeTopicPermissionsCommandInput,
  DescribeTopicPermissionsCommandOutput,
} from "../commands/DescribeTopicPermissionsCommand";
import {
  DescribeTopicRefreshCommandInput,
  DescribeTopicRefreshCommandOutput,
} from "../commands/DescribeTopicRefreshCommand";
import {
  DescribeTopicRefreshScheduleCommandInput,
  DescribeTopicRefreshScheduleCommandOutput,
} from "../commands/DescribeTopicRefreshScheduleCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import {
  DescribeVPCConnectionCommandInput,
  DescribeVPCConnectionCommandOutput,
} from "../commands/DescribeVPCConnectionCommand";
import {
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
} from "../commands/GenerateEmbedUrlForAnonymousUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
} from "../commands/GenerateEmbedUrlForRegisteredUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
  GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput,
} from "../commands/GenerateEmbedUrlForRegisteredUserWithIdentityCommand";
import {
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "../commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput } from "../commands/GetSessionEmbedUrlCommand";
import { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "../commands/ListAnalysesCommand";
import {
  ListAssetBundleExportJobsCommandInput,
  ListAssetBundleExportJobsCommandOutput,
} from "../commands/ListAssetBundleExportJobsCommand";
import {
  ListAssetBundleImportJobsCommandInput,
  ListAssetBundleImportJobsCommandOutput,
} from "../commands/ListAssetBundleImportJobsCommand";
import { ListBrandsCommandInput, ListBrandsCommandOutput } from "../commands/ListBrandsCommand";
import {
  ListCustomPermissionsCommandInput,
  ListCustomPermissionsCommandOutput,
} from "../commands/ListCustomPermissionsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import {
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "../commands/ListDashboardVersionsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { ListFolderMembersCommandInput, ListFolderMembersCommandOutput } from "../commands/ListFolderMembersCommand";
import { ListFoldersCommandInput, ListFoldersCommandOutput } from "../commands/ListFoldersCommand";
import {
  ListFoldersForResourceCommandInput,
  ListFoldersForResourceCommandOutput,
} from "../commands/ListFoldersForResourceCommand";
import {
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "../commands/ListGroupMembershipsCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import {
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "../commands/ListIAMPolicyAssignmentsCommand";
import {
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
} from "../commands/ListIAMPolicyAssignmentsForUserCommand";
import {
  ListIdentityPropagationConfigsCommandInput,
  ListIdentityPropagationConfigsCommandOutput,
} from "../commands/ListIdentityPropagationConfigsCommand";
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "../commands/ListIngestionsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
import {
  ListRefreshSchedulesCommandInput,
  ListRefreshSchedulesCommandOutput,
} from "../commands/ListRefreshSchedulesCommand";
import {
  ListRoleMembershipsCommandInput,
  ListRoleMembershipsCommandOutput,
} from "../commands/ListRoleMembershipsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "../commands/ListTemplateAliasesCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand";
import { ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput } from "../commands/ListThemeAliasesCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput } from "../commands/ListThemeVersionsCommand";
import {
  ListTopicRefreshSchedulesCommandInput,
  ListTopicRefreshSchedulesCommandOutput,
} from "../commands/ListTopicRefreshSchedulesCommand";
import {
  ListTopicReviewedAnswersCommandInput,
  ListTopicReviewedAnswersCommandOutput,
} from "../commands/ListTopicReviewedAnswersCommand";
import { ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "../commands/ListUserGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ListVPCConnectionsCommandInput, ListVPCConnectionsCommandOutput } from "../commands/ListVPCConnectionsCommand";
import { PredictQAResultsCommandInput, PredictQAResultsCommandOutput } from "../commands/PredictQAResultsCommand";
import {
  PutDataSetRefreshPropertiesCommandInput,
  PutDataSetRefreshPropertiesCommandOutput,
} from "../commands/PutDataSetRefreshPropertiesCommand";
import { RegisterUserCommandInput, RegisterUserCommandOutput } from "../commands/RegisterUserCommand";
import { RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput } from "../commands/RestoreAnalysisCommand";
import { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "../commands/SearchAnalysesCommand";
import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "../commands/SearchDashboardsCommand";
import { SearchDataSetsCommandInput, SearchDataSetsCommandOutput } from "../commands/SearchDataSetsCommand";
import { SearchDataSourcesCommandInput, SearchDataSourcesCommandOutput } from "../commands/SearchDataSourcesCommand";
import { SearchFoldersCommandInput, SearchFoldersCommandOutput } from "../commands/SearchFoldersCommand";
import { SearchGroupsCommandInput, SearchGroupsCommandOutput } from "../commands/SearchGroupsCommand";
import { SearchTopicsCommandInput, SearchTopicsCommandOutput } from "../commands/SearchTopicsCommand";
import {
  StartAssetBundleExportJobCommandInput,
  StartAssetBundleExportJobCommandOutput,
} from "../commands/StartAssetBundleExportJobCommand";
import {
  StartAssetBundleImportJobCommandInput,
  StartAssetBundleImportJobCommandOutput,
} from "../commands/StartAssetBundleImportJobCommand";
import {
  StartDashboardSnapshotJobCommandInput,
  StartDashboardSnapshotJobCommandOutput,
} from "../commands/StartDashboardSnapshotJobCommand";
import {
  StartDashboardSnapshotJobScheduleCommandInput,
  StartDashboardSnapshotJobScheduleCommandOutput,
} from "../commands/StartDashboardSnapshotJobScheduleCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
} from "../commands/UpdateAccountCustomizationCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateAnalysisCommandInput, UpdateAnalysisCommandOutput } from "../commands/UpdateAnalysisCommand";
import {
  UpdateAnalysisPermissionsCommandInput,
  UpdateAnalysisPermissionsCommandOutput,
} from "../commands/UpdateAnalysisPermissionsCommand";
import {
  UpdateApplicationWithTokenExchangeGrantCommandInput,
  UpdateApplicationWithTokenExchangeGrantCommandOutput,
} from "../commands/UpdateApplicationWithTokenExchangeGrantCommand";
import {
  UpdateBrandAssignmentCommandInput,
  UpdateBrandAssignmentCommandOutput,
} from "../commands/UpdateBrandAssignmentCommand";
import { UpdateBrandCommandInput, UpdateBrandCommandOutput } from "../commands/UpdateBrandCommand";
import {
  UpdateBrandPublishedVersionCommandInput,
  UpdateBrandPublishedVersionCommandOutput,
} from "../commands/UpdateBrandPublishedVersionCommand";
import {
  UpdateCustomPermissionsCommandInput,
  UpdateCustomPermissionsCommandOutput,
} from "../commands/UpdateCustomPermissionsCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "../commands/UpdateDashboardCommand";
import {
  UpdateDashboardLinksCommandInput,
  UpdateDashboardLinksCommandOutput,
} from "../commands/UpdateDashboardLinksCommand";
import {
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "../commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "../commands/UpdateDashboardPublishedVersionCommand";
import {
  UpdateDashboardsQAConfigurationCommandInput,
  UpdateDashboardsQAConfigurationCommandOutput,
} from "../commands/UpdateDashboardsQAConfigurationCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "../commands/UpdateDataSetCommand";
import {
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput,
} from "../commands/UpdateDataSetPermissionsCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import {
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput,
} from "../commands/UpdateDataSourcePermissionsCommand";
import {
  UpdateDefaultQBusinessApplicationCommandInput,
  UpdateDefaultQBusinessApplicationCommandOutput,
} from "../commands/UpdateDefaultQBusinessApplicationCommand";
import { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "../commands/UpdateFolderCommand";
import {
  UpdateFolderPermissionsCommandInput,
  UpdateFolderPermissionsCommandOutput,
} from "../commands/UpdateFolderPermissionsCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import {
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
} from "../commands/UpdateIAMPolicyAssignmentCommand";
import {
  UpdateIdentityPropagationConfigCommandInput,
  UpdateIdentityPropagationConfigCommandOutput,
} from "../commands/UpdateIdentityPropagationConfigCommand";
import {
  UpdateIpRestrictionCommandInput,
  UpdateIpRestrictionCommandOutput,
} from "../commands/UpdateIpRestrictionCommand";
import {
  UpdateKeyRegistrationCommandInput,
  UpdateKeyRegistrationCommandOutput,
} from "../commands/UpdateKeyRegistrationCommand";
import {
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
} from "../commands/UpdatePublicSharingSettingsCommand";
import {
  UpdateQPersonalizationConfigurationCommandInput,
  UpdateQPersonalizationConfigurationCommandOutput,
} from "../commands/UpdateQPersonalizationConfigurationCommand";
import {
  UpdateQuickSightQSearchConfigurationCommandInput,
  UpdateQuickSightQSearchConfigurationCommandOutput,
} from "../commands/UpdateQuickSightQSearchConfigurationCommand";
import {
  UpdateRefreshScheduleCommandInput,
  UpdateRefreshScheduleCommandOutput,
} from "../commands/UpdateRefreshScheduleCommand";
import {
  UpdateRoleCustomPermissionCommandInput,
  UpdateRoleCustomPermissionCommandOutput,
} from "../commands/UpdateRoleCustomPermissionCommand";
import {
  UpdateSPICECapacityConfigurationCommandInput,
  UpdateSPICECapacityConfigurationCommandOutput,
} from "../commands/UpdateSPICECapacityConfigurationCommand";
import {
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput,
} from "../commands/UpdateTemplateAliasCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "../commands/UpdateTemplateCommand";
import {
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput,
} from "../commands/UpdateTemplatePermissionsCommand";
import { UpdateThemeAliasCommandInput, UpdateThemeAliasCommandOutput } from "../commands/UpdateThemeAliasCommand";
import { UpdateThemeCommandInput, UpdateThemeCommandOutput } from "../commands/UpdateThemeCommand";
import {
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
} from "../commands/UpdateThemePermissionsCommand";
import { UpdateTopicCommandInput, UpdateTopicCommandOutput } from "../commands/UpdateTopicCommand";
import {
  UpdateTopicPermissionsCommandInput,
  UpdateTopicPermissionsCommandOutput,
} from "../commands/UpdateTopicPermissionsCommand";
import {
  UpdateTopicRefreshScheduleCommandInput,
  UpdateTopicRefreshScheduleCommandOutput,
} from "../commands/UpdateTopicRefreshScheduleCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  UpdateUserCustomPermissionCommandInput,
  UpdateUserCustomPermissionCommandOutput,
} from "../commands/UpdateUserCustomPermissionCommand";
import {
  UpdateVPCConnectionCommandInput,
  UpdateVPCConnectionCommandOutput,
} from "../commands/UpdateVPCConnectionCommand";
import {
  AccessDeniedException,
  AccountCustomization,
  AdHocFilteringOption,
  AggFunction,
  AggregationFunction,
  AggregationPartitionBy,
  AggregationSortConfiguration,
  AllSheetsFilterScopeConfiguration,
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  AmazonQInQuickSightConsoleConfigurations,
  AmazonQInQuickSightDashboardConfigurations,
  Analysis,
  AnalysisDefaults,
  AnchorDateConfiguration,
  AssetOptions,
  AttributeAggregationFunction,
  AxisDataOptions,
  AxisDisplayDataDrivenRange,
  AxisDisplayMinMaxRange,
  AxisDisplayOptions,
  AxisDisplayRange,
  AxisLabelOptions,
  AxisLabelReferenceOptions,
  AxisLinearScale,
  AxisLogarithmicScale,
  AxisScale,
  AxisTickLabelOptions,
  BarChartAggregatedFieldWells,
  BarChartFieldWells,
  BodySectionConfiguration,
  BodySectionContent,
  BodySectionDynamicCategoryDimensionConfiguration,
  BodySectionDynamicNumericDimensionConfiguration,
  BodySectionRepeatConfiguration,
  BodySectionRepeatDimensionConfiguration,
  BodySectionRepeatPageBreakConfiguration,
  CalculatedField,
  CalculatedMeasureField,
  CascadingControlConfiguration,
  CascadingControlSource,
  CategoricalDimensionField,
  CategoricalMeasureField,
  CategoryFilter,
  CategoryFilterConfiguration,
  CategoryInnerFilter,
  ChartAxisLabelOptions,
  ColorsConfiguration,
  ColumnConfiguration,
  ColumnIdentifier,
  ColumnSort,
  ContextMenuOption,
  ContributionAnalysisDefault,
  CurrencyDisplayFormatConfiguration,
  CustomActionFilterOperation,
  CustomActionNavigationOperation,
  CustomActionSetParametersOperation,
  CustomActionURLOperation,
  CustomColor,
  CustomFilterConfiguration,
  CustomFilterListConfiguration,
  CustomParameterValues,
  CustomValuesConfiguration,
  DataLabelOptions,
  DataLabelType,
  DataPathLabelType,
  DataQnAConfigurations,
  DataSetIdentifierDeclaration,
  DataStoriesConfigurations,
  DateAxisOptions,
  DateDimensionField,
  DateMeasureField,
  DateTimeDefaultValues,
  DateTimeFormatConfiguration,
  DateTimeParameterDeclaration,
  DateTimePickerControlDisplayOptions,
  DateTimeValueWhenUnsetConfiguration,
  DecimalDefaultValues,
  DecimalParameterDeclaration,
  DecimalPlacesConfiguration,
  DecimalValueWhenUnsetConfiguration,
  DefaultDateTimePickerControlOptions,
  DefaultFilterControlConfiguration,
  DefaultFilterControlOptions,
  DefaultFilterDropDownControlOptions,
  DefaultFilterListControlOptions,
  DefaultFreeFormLayoutConfiguration,
  DefaultGridLayoutConfiguration,
  DefaultInteractiveLayoutConfiguration,
  DefaultNewSheetConfiguration,
  DefaultPaginatedLayoutConfiguration,
  DefaultRelativeDateTimeControlOptions,
  DefaultSectionBasedLayoutConfiguration,
  DefaultSliderControlOptions,
  DefaultTextAreaControlOptions,
  DefaultTextFieldControlOptions,
  DestinationParameterValueConfiguration,
  DimensionField,
  DropDownControlDisplayOptions,
  DynamicDefaultValue,
  ExcludePeriodConfiguration,
  ExecutiveSummaryConfigurations,
  FieldLabelType,
  Filter,
  FilterControl,
  FilterCrossSheetControl,
  FilterDateTimePickerControl,
  FilterDropDownControl,
  FilterGroup,
  FilterListConfiguration,
  FilterListControl,
  FilterOperationSelectedFieldsConfiguration,
  FilterOperationTargetVisualsConfiguration,
  FilterRelativeDateTimeControl,
  FilterScopeConfiguration,
  FilterSelectableValues,
  FilterSliderControl,
  FilterTextAreaControl,
  FilterTextFieldControl,
  FontConfiguration,
  FontSize,
  FontWeight,
  FormatConfiguration,
  FreeFormLayoutCanvasSizeOptions,
  FreeFormLayoutConfiguration,
  FreeFormLayoutElement,
  FreeFormLayoutElementBackgroundStyle,
  FreeFormLayoutElementBorderStyle,
  FreeFormLayoutScreenCanvasSizeOptions,
  FreeFormSectionLayoutConfiguration,
  GenerativeAuthoringConfigurations,
  GridLayoutCanvasSizeOptions,
  GridLayoutConfiguration,
  GridLayoutElement,
  GridLayoutScreenCanvasSizeOptions,
  HeaderFooterSectionConfiguration,
  ImageCustomAction,
  ImageCustomActionOperation,
  ImageInteractionOptions,
  ImageMenuOption,
  InnerFilter,
  IntegerDefaultValues,
  IntegerParameterDeclaration,
  IntegerValueWhenUnsetConfiguration,
  LabelOptions,
  Layout,
  LayoutConfiguration,
  ListControlDisplayOptions,
  ListControlSearchOptions,
  ListControlSelectAllOptions,
  LoadingAnimation,
  LocalNavigationConfiguration,
  MappedDataSetParameter,
  MaximumLabelType,
  MeasureField,
  MinimumLabelType,
  NegativeValueConfiguration,
  NestedFilter,
  NullValueFormatConfiguration,
  NumberDisplayFormatConfiguration,
  NumberFormatConfiguration,
  NumericalAggregationFunction,
  NumericalDimensionField,
  NumericalMeasureField,
  NumericAxisOptions,
  NumericEqualityFilter,
  NumericFormatConfiguration,
  NumericRangeFilter,
  NumericRangeFilterValue,
  NumericSeparatorConfiguration,
  ParameterControl,
  ParameterDateTimePickerControl,
  ParameterDeclaration,
  ParameterDropDownControl,
  ParameterListControl,
  ParameterSelectableValues,
  ParameterSliderControl,
  ParameterTextAreaControl,
  ParameterTextFieldControl,
  PercentageDisplayFormatConfiguration,
  PercentileAggregation,
  PercentVisibleRange,
  QueryExecutionOptions,
  RangeEndsLabelType,
  RelativeDatesFilter,
  RelativeDateTimeControlDisplayOptions,
  RollingDateConfiguration,
  SameSheetTargetVisualConfiguration,
  ScrollBarOptions,
  SectionAfterPageBreak,
  SectionBasedLayoutCanvasSizeOptions,
  SectionBasedLayoutConfiguration,
  SectionBasedLayoutPaperCanvasSizeOptions,
  SectionLayoutConfiguration,
  SectionPageBreakConfiguration,
  SectionStyle,
  SelectedSheetsFilterScopeConfiguration,
  SetParameterValueConfiguration,
  Sheet,
  SheetControlInfoIconLabelOptions,
  SheetControlLayout,
  SheetControlLayoutConfiguration,
  SheetElementConfigurationOverrides,
  SheetElementRenderingRule,
  SheetImage,
  SheetImageScalingConfiguration,
  SheetImageSource,
  SheetImageStaticFileSource,
  SheetImageTooltipConfiguration,
  SheetImageTooltipText,
  SheetTextBox,
  SheetVisualScopingConfiguration,
  SliderControlDisplayOptions,
  Spacing,
  StringDefaultValues,
  StringFormatConfiguration,
  StringParameterDeclaration,
  StringValueWhenUnsetConfiguration,
  TextAreaControlDisplayOptions,
  TextBoxInteractionOptions,
  TextBoxMenuOption,
  TextControlPlaceholderOptions,
  TextFieldControlDisplayOptions,
  ThousandSeparatorOptions,
  TimeEqualityFilter,
  TimeRangeFilter,
  TimeRangeFilterValue,
  TopBottomFilter,
  VisibleRangeOptions,
  VisualCustomAction,
  VisualCustomActionDefaults,
  VisualCustomActionOperation,
  VisualHighlightOperation,
  VisualInteractionOptions,
  VisualMenuOption,
} from "../models/models_0";
import {
  ArcAxisConfiguration,
  ArcAxisDisplayRange,
  ArcConfiguration,
  ArcOptions,
  BarChartConfiguration,
  BarChartSortConfiguration,
  BarChartVisual,
  BinCountOptions,
  BinWidthOptions,
  BoxPlotAggregatedFieldWells,
  BoxPlotChartConfiguration,
  BoxPlotFieldWells,
  BoxPlotOptions,
  BoxPlotSortConfiguration,
  BoxPlotStyleOptions,
  BoxPlotVisual,
  CategoryDrillDownFilter,
  ClusterMarker,
  ClusterMarkerConfiguration,
  ColorScale,
  ColumnHierarchy,
  ColumnTooltipItem,
  ComboChartAggregatedFieldWells,
  ComboChartConfiguration,
  ComboChartFieldWells,
  ComboChartSortConfiguration,
  ComboChartVisual,
  ComparisonConfiguration,
  ComparisonFormatConfiguration,
  Computation,
  ConditionalFormattingColor,
  ConditionalFormattingCustomIconCondition,
  ConditionalFormattingCustomIconOptions,
  ConditionalFormattingGradientColor,
  ConditionalFormattingIcon,
  ConditionalFormattingIconDisplayConfiguration,
  ConditionalFormattingIconSet,
  ConditionalFormattingSolidColor,
  CustomContentConfiguration,
  CustomContentVisual,
  CustomNarrativeOptions,
  DataColor,
  DataFieldSeriesItem,
  DataPathColor,
  DataPathSort,
  DataPathType,
  DataPathValue,
  DateTimeHierarchy,
  DonutCenterOptions,
  DonutOptions,
  DrillDownFilter,
  EmptyVisual,
  ExplicitHierarchy,
  FieldBasedTooltip,
  FieldSeriesItem,
  FieldSort,
  FieldSortOptions,
  FieldTooltipItem,
  FilledMapAggregatedFieldWells,
  FilledMapConditionalFormatting,
  FilledMapConditionalFormattingOption,
  FilledMapConfiguration,
  FilledMapFieldWells,
  FilledMapShapeConditionalFormatting,
  FilledMapSortConfiguration,
  FilledMapVisual,
  ForecastComputation,
  ForecastConfiguration,
  ForecastScenario,
  FunnelChartAggregatedFieldWells,
  FunnelChartConfiguration,
  FunnelChartDataLabelOptions,
  FunnelChartFieldWells,
  FunnelChartSortConfiguration,
  FunnelChartVisual,
  GaugeChartArcConditionalFormatting,
  GaugeChartColorConfiguration,
  GaugeChartConditionalFormatting,
  GaugeChartConditionalFormattingOption,
  GaugeChartConfiguration,
  GaugeChartFieldWells,
  GaugeChartOptions,
  GaugeChartPrimaryValueConditionalFormatting,
  GaugeChartVisual,
  GeospatialCategoricalColor,
  GeospatialCategoricalDataColor,
  GeospatialCircleRadius,
  GeospatialCircleSymbolStyle,
  GeospatialColor,
  GeospatialCoordinateBounds,
  GeospatialDataSourceItem,
  GeospatialGradientColor,
  GeospatialGradientStepColor,
  GeospatialHeatmapColorScale,
  GeospatialHeatmapConfiguration,
  GeospatialHeatmapDataColor,
  GeospatialLayerColorField,
  GeospatialLayerDefinition,
  GeospatialLayerItem,
  GeospatialLayerJoinDefinition,
  GeospatialLayerMapConfiguration,
  GeospatialLineLayer,
  GeospatialLineStyle,
  GeospatialLineSymbolStyle,
  GeospatialLineWidth,
  GeospatialMapAggregatedFieldWells,
  GeospatialMapConfiguration,
  GeospatialMapFieldWells,
  GeospatialMapState,
  GeospatialMapStyle,
  GeospatialMapStyleOptions,
  GeospatialMapVisual,
  GeospatialNullDataSettings,
  GeospatialNullSymbolStyle,
  GeospatialPointLayer,
  GeospatialPointStyle,
  GeospatialPointStyleOptions,
  GeospatialPolygonLayer,
  GeospatialPolygonStyle,
  GeospatialPolygonSymbolStyle,
  GeospatialSolidColor,
  GeospatialStaticFileSource,
  GeospatialWindowOptions,
  GlobalTableBorderOptions,
  GradientColor,
  GradientStop,
  GrowthRateComputation,
  HeatMapAggregatedFieldWells,
  HeatMapConfiguration,
  HeatMapFieldWells,
  HeatMapSortConfiguration,
  HeatMapVisual,
  HistogramAggregatedFieldWells,
  HistogramBinOptions,
  HistogramConfiguration,
  HistogramFieldWells,
  HistogramVisual,
  InsightConfiguration,
  InsightVisual,
  ItemsLimitConfiguration,
  KPIActualValueConditionalFormatting,
  KPIComparisonValueConditionalFormatting,
  KPIConditionalFormatting,
  KPIConditionalFormattingOption,
  KPIConfiguration,
  KPIFieldWells,
  KPIOptions,
  KPIPrimaryValueConditionalFormatting,
  KPIProgressBarConditionalFormatting,
  KPISortConfiguration,
  KPISparklineOptions,
  KPIVisual,
  KPIVisualLayoutOptions,
  KPIVisualStandardLayout,
  LayerCustomAction,
  LayerCustomActionOperation,
  LayerMapVisual,
  LegendOptions,
  LineChartAggregatedFieldWells,
  LineChartConfiguration,
  LineChartDefaultSeriesSettings,
  LineChartFieldWells,
  LineChartLineStyleSettings,
  LineChartMarkerStyleSettings,
  LineChartSeriesSettings,
  LineChartSortConfiguration,
  LineChartVisual,
  LineSeriesAxisDisplayOptions,
  LongFormatText,
  MaximumMinimumComputation,
  MetricComparisonComputation,
  MissingDataConfiguration,
  NumericEqualityDrillDownFilter,
  PaginationConfiguration,
  PanelConfiguration,
  PanelTitleOptions,
  PeriodOverPeriodComputation,
  PeriodToDateComputation,
  PieChartAggregatedFieldWells,
  PieChartConfiguration,
  PieChartFieldWells,
  PieChartSortConfiguration,
  PieChartVisual,
  PivotFieldSortOptions,
  PivotTableAggregatedFieldWells,
  PivotTableDataPathOption,
  PivotTableFieldCollapseStateOption,
  PivotTableFieldCollapseStateTarget,
  PivotTableFieldOption,
  PivotTableFieldOptions,
  PivotTableFieldSubtotalOptions,
  PivotTableFieldWells,
  PivotTableOptions,
  PivotTablePaginatedReportOptions,
  PivotTableRowsLabelOptions,
  PivotTableSortBy,
  PivotTableSortConfiguration,
  PivotTotalOptions,
  PredefinedHierarchy,
  ProgressBarOptions,
  ReferenceLine,
  ReferenceLineCustomLabelConfiguration,
  ReferenceLineDataConfiguration,
  ReferenceLineDynamicDataConfiguration,
  ReferenceLineLabelConfiguration,
  ReferenceLineStaticDataConfiguration,
  ReferenceLineStyleConfiguration,
  ReferenceLineValueLabelConfiguration,
  RowAlternateColorOptions,
  SecondaryValueOptions,
  SeriesItem,
  ShapeConditionalFormat,
  ShortFormatText,
  SimpleClusterMarker,
  SingleAxisOptions,
  SmallMultiplesAxisProperties,
  SmallMultiplesOptions,
  SubtotalOptions,
  TableBorderOptions,
  TableCellStyle,
  TableSideBorderOptions,
  TableStyleTarget,
  TimeBasedForecastProperties,
  TimeRangeDrillDownFilter,
  TooltipItem,
  TooltipOptions,
  TopBottomMoversComputation,
  TopBottomRankedComputation,
  TotalAggregationComputation,
  TotalAggregationFunction,
  TotalAggregationOption,
  TrendArrowOptions,
  UnaggregatedField,
  UniqueValuesComputation,
  VisualPalette,
  VisualSubtitleLabelOptions,
  VisualTitleLabelOptions,
  WhatIfPointScenario,
  WhatIfRangeScenario,
  YAxisOptions,
} from "../models/models_1";
import {
  AnalysisDefinition,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSourceTemplate,
  AnalysisSummary,
  Anchor,
  AnonymousUserDashboardEmbeddingConfiguration,
  AnonymousUserDashboardEmbeddingConfigurationDisabledFeature,
  AnonymousUserDashboardEmbeddingConfigurationEnabledFeature,
  AnonymousUserDashboardFeatureConfigurations,
  AnonymousUserDashboardVisualEmbeddingConfiguration,
  AnonymousUserEmbeddingExperienceConfiguration,
  AnonymousUserGenerativeQnAEmbeddingConfiguration,
  AnonymousUserQSearchBarEmbeddingConfiguration,
  ApplicationTheme,
  AssetBundleCloudFormationOverridePropertyConfiguration,
  AssetBundleExportJobAnalysisOverrideProperties,
  AssetBundleExportJobAnalysisPropertyToOverride,
  AssetBundleExportJobDashboardOverrideProperties,
  AssetBundleExportJobDashboardPropertyToOverride,
  AssetBundleExportJobDataSetOverrideProperties,
  AssetBundleExportJobDataSetPropertyToOverride,
  AssetBundleExportJobDataSourceOverrideProperties,
  AssetBundleExportJobDataSourcePropertyToOverride,
  AssetBundleExportJobFolderOverrideProperties,
  AssetBundleExportJobFolderPropertyToOverride,
  AssetBundleExportJobRefreshScheduleOverrideProperties,
  AssetBundleExportJobRefreshSchedulePropertyToOverride,
  AssetBundleExportJobResourceIdOverrideConfiguration,
  AssetBundleExportJobSummary,
  AssetBundleExportJobThemeOverrideProperties,
  AssetBundleExportJobThemePropertyToOverride,
  AssetBundleExportJobValidationStrategy,
  AssetBundleExportJobVPCConnectionOverrideProperties,
  AssetBundleExportJobVPCConnectionPropertyToOverride,
  AssetBundleImportJobAnalysisOverrideParameters,
  AssetBundleImportJobAnalysisOverridePermissions,
  AssetBundleImportJobAnalysisOverrideTags,
  AssetBundleImportJobDashboardOverrideParameters,
  AssetBundleImportJobDashboardOverridePermissions,
  AssetBundleImportJobDashboardOverrideTags,
  AssetBundleImportJobDataSetOverrideParameters,
  AssetBundleImportJobDataSetOverridePermissions,
  AssetBundleImportJobDataSetOverrideTags,
  AssetBundleImportJobDataSourceCredentialPair,
  AssetBundleImportJobDataSourceCredentials,
  AssetBundleImportJobDataSourceOverrideParameters,
  AssetBundleImportJobDataSourceOverridePermissions,
  AssetBundleImportJobDataSourceOverrideTags,
  AssetBundleImportJobFolderOverrideParameters,
  AssetBundleImportJobFolderOverridePermissions,
  AssetBundleImportJobFolderOverrideTags,
  AssetBundleImportJobOverrideParameters,
  AssetBundleImportJobOverridePermissions,
  AssetBundleImportJobOverrideTags,
  AssetBundleImportJobOverrideValidationStrategy,
  AssetBundleImportJobRefreshScheduleOverrideParameters,
  AssetBundleImportJobResourceIdOverrideConfiguration,
  AssetBundleImportJobSummary,
  AssetBundleImportJobThemeOverrideParameters,
  AssetBundleImportJobThemeOverridePermissions,
  AssetBundleImportJobThemeOverrideTags,
  AssetBundleImportJobVPCConnectionOverrideParameters,
  AssetBundleImportJobVPCConnectionOverrideTags,
  AssetBundleImportSource,
  AssetBundleResourceLinkSharingConfiguration,
  AssetBundleResourcePermissions,
  AthenaParameters,
  AuroraParameters,
  AuroraPostgreSqlParameters,
  AuthorSpecifiedAggregation,
  AwsIotAnalyticsParameters,
  BigQueryParameters,
  BookmarksConfigurations,
  BorderStyle,
  BrandColorPalette,
  BrandDefinition,
  BrandElementStyle,
  CollectiveConstantEntry,
  ConflictException,
  ContributionAnalysisFactor,
  ContributionAnalysisTimeRanges,
  DashboardVisualId,
  DataBarsOptions,
  DatabricksParameters,
  DataSetReference,
  DataSetRefreshProperties,
  DataSourceParameters,
  DisplayFormatOptions,
  ExasolParameters,
  FilterAggMetrics,
  Identifier,
  IdentityCenterConfiguration,
  ImageConfiguration,
  ImageSetConfiguration,
  ImageSource,
  ImageStaticFile,
  IncrementalRefresh,
  InternalFailureException,
  InvalidParameterValueException,
  JiraParameters,
  LogoConfiguration,
  LogoSetConfiguration,
  LookbackWindow,
  ManifestFileLocation,
  MariaDbParameters,
  MySqlParameters,
  NamedEntityRef,
  NavbarStyle,
  NegativeFormat,
  OAuthParameters,
  OracleParameters,
  Palette,
  PivotTableCellConditionalFormatting,
  PivotTableConditionalFormatting,
  PivotTableConditionalFormattingOption,
  PivotTableConditionalFormattingScope,
  PivotTableConfiguration,
  PivotTableTotalOptions,
  PivotTableVisual,
  PluginVisual,
  PluginVisualConfiguration,
  PluginVisualFieldWell,
  PluginVisualItemsLimitConfiguration,
  PluginVisualOptions,
  PluginVisualProperty,
  PluginVisualSortConfiguration,
  PluginVisualTableQuerySort,
  PostgreSqlParameters,
  PrestoParameters,
  RadarChartAggregatedFieldWells,
  RadarChartAreaStyleSettings,
  RadarChartConfiguration,
  RadarChartFieldWells,
  RadarChartSeriesSettings,
  RadarChartSortConfiguration,
  RadarChartVisual,
  RdsParameters,
  RedshiftIAMParameters,
  RedshiftParameters,
  RefreshConfiguration,
  RefreshFailureConfiguration,
  RefreshFailureEmailAlert,
  ResourceNotFoundException,
  S3BucketConfiguration,
  S3Parameters,
  SankeyDiagramAggregatedFieldWells,
  SankeyDiagramChartConfiguration,
  SankeyDiagramFieldWells,
  SankeyDiagramSortConfiguration,
  SankeyDiagramVisual,
  ScatterPlotCategoricallyAggregatedFieldWells,
  ScatterPlotConfiguration,
  ScatterPlotFieldWells,
  ScatterPlotSortConfiguration,
  ScatterPlotUnaggregatedFieldWells,
  ScatterPlotVisual,
  ServiceNowParameters,
  SharedViewConfigurations,
  SheetDefinition,
  Slot,
  SnapshotFile,
  SnapshotFileSheetSelection,
  SnapshotS3DestinationConfiguration,
  SnowflakeParameters,
  SparkParameters,
  SpatialStaticFile,
  SqlServerParameters,
  SslProperties,
  StarburstParameters,
  StaticFile,
  StaticFileS3SourceOptions,
  StaticFileSource,
  StaticFileUrlSourceOptions,
  TableAggregatedFieldWells,
  TableCellConditionalFormatting,
  TableCellImageSizingConfiguration,
  TableConditionalFormatting,
  TableConditionalFormattingOption,
  TableConfiguration,
  TableFieldCustomIconContent,
  TableFieldCustomTextContent,
  TableFieldImageConfiguration,
  TableFieldLinkConfiguration,
  TableFieldLinkContentConfiguration,
  TableFieldOption,
  TableFieldOptions,
  TableFieldURLConfiguration,
  TableFieldWells,
  TableInlineVisualization,
  TableOptions,
  TablePaginatedReportOptions,
  TablePinnedFieldOptions,
  TableRowConditionalFormatting,
  TableSortConfiguration,
  TableUnaggregatedFieldWells,
  TableVisual,
  Tag,
  TeradataParameters,
  TextConditionalFormat,
  ThrottlingException,
  TopicConstantValue,
  TopicIR,
  TopicIRComparisonMethod,
  TopicIRContributionAnalysis,
  TopicIRFilterOption,
  TopicIRGroupBy,
  TopicIRMetric,
  TopicSortClause,
  TopicTemplate,
  TotalOptions,
  TransposedTableOption,
  TreeMapAggregatedFieldWells,
  TreeMapConfiguration,
  TreeMapFieldWells,
  TreeMapSortConfiguration,
  TreeMapVisual,
  TrinoParameters,
  TwitterParameters,
  Visual,
  VisualOptions,
  VpcConnectionProperties,
  WaterfallChartAggregatedFieldWells,
  WaterfallChartColorConfiguration,
  WaterfallChartConfiguration,
  WaterfallChartFieldWells,
  WaterfallChartGroupColorConfiguration,
  WaterfallChartOptions,
  WaterfallChartSortConfiguration,
  WaterfallVisual,
  WordCloudAggregatedFieldWells,
  WordCloudChartConfiguration,
  WordCloudFieldWells,
  WordCloudOptions,
  WordCloudSortConfiguration,
  WordCloudVisual,
} from "../models/models_2";
import {
  _Parameters,
  BrandDetail,
  BrandSummary,
  CalculatedColumn,
  Capabilities,
  CastColumnTypeOperation,
  CellValueSynonym,
  CollectiveConstant,
  ColumnDescription,
  ColumnGroup,
  ColumnGroupColumnSchema,
  ColumnGroupSchema,
  ColumnLevelPermissionRule,
  ColumnSchema,
  ColumnTag,
  ColumnTagName,
  ComparativeOrder,
  ConcurrentUpdatingException,
  CreateColumnsOperation,
  CredentialPair,
  CustomerManagedKeyUnavailableException,
  CustomInstructions,
  CustomSql,
  Dashboard,
  DashboardPublishOptions,
  DashboardSearchFilter,
  DashboardSourceEntity,
  DashboardSourceTemplate,
  DashboardSummary,
  DashboardVersion,
  DashboardVersionDefinition,
  DashboardVersionSummary,
  DashboardVisualPublishOptions,
  DataAggregation,
  DataColorPalette,
  DataPointDrillUpDownOption,
  DataPointMenuLabelOption,
  DataPointTooltipOption,
  DataQAEnabledOption,
  DataSet,
  DataSetConfiguration,
  DatasetMetadata,
  DatasetParameter,
  DataSetSchema,
  DataSetSearchFilter,
  DataSetSummary,
  DataSetUsageConfiguration,
  DataSource,
  DataSourceCredentials,
  DataSourceSearchFilter,
  DataSourceSummary,
  DateTimeDatasetParameter,
  DateTimeDatasetParameterDefaultValues,
  DateTimeParameter,
  DecimalDatasetParameter,
  DecimalDatasetParameterDefaultValues,
  DecimalParameter,
  DefaultFormatting,
  ExportHiddenFieldsOption,
  ExportToCSVOption,
  ExportWithHiddenFieldsOption,
  FieldFolder,
  FilterOperation,
  Font,
  GeoSpatialColumnGroup,
  GutterStyle,
  InputColumn,
  IntegerDatasetParameter,
  IntegerDatasetParameterDefaultValues,
  IntegerParameter,
  InternalServerException,
  InvalidRequestException,
  JoinInstruction,
  JoinKeyProperties,
  LimitExceededException,
  LinkSharingConfiguration,
  LogicalTable,
  LogicalTableSource,
  MarginStyle,
  NamedEntityDefinition,
  NamedEntityDefinitionMetric,
  NewDefaultValues,
  OverrideDatasetParameterOperation,
  PerformanceConfiguration,
  PhysicalTable,
  PreconditionNotMetException,
  ProjectOperation,
  RangeConstant,
  RefreshFrequency,
  RefreshSchedule,
  RelationalTable,
  RenameColumnOperation,
  ResourceExistsException,
  ResourcePermission,
  ResourceUnavailableException,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagRule,
  S3Source,
  ScheduleRefreshOnEntity,
  SemanticEntityType,
  SemanticType,
  SheetControlsOption,
  SheetLayoutElementMaximizationOption,
  SheetStyle,
  StringDatasetParameter,
  StringDatasetParameterDefaultValues,
  StringParameter,
  TagColumnOperation,
  TemplateSourceAnalysis,
  TemplateSourceEntity,
  TemplateSourceTemplate,
  TemplateVersionDefinition,
  ThemeConfiguration,
  TileLayoutStyle,
  TileStyle,
  TopicCalculatedField,
  TopicCategoryFilter,
  TopicCategoryFilterConstant,
  TopicColumn,
  TopicConfigOptions,
  TopicDateRangeFilter,
  TopicDetails,
  TopicFilter,
  TopicNamedEntity,
  TopicNumericEqualityFilter,
  TopicNumericRangeFilter,
  TopicRangeFilterConstant,
  TopicRefreshSchedule,
  TopicRelativeDateFilter,
  TopicSingularFilterConstant,
  TransformOperation,
  Typography,
  UIColorPalette,
  UniqueKey,
  UnsupportedUserEditionException,
  UntagColumnOperation,
  UploadSettings,
  ValidationStrategy,
  VisualAxisSortOption,
} from "../models/models_3";
import {
  DomainNotWhitelistedException,
  Folder,
  FolderSearchFilter,
  FolderSummary,
  GroupSearchFilter,
  IdentityTypeNotSupportedException,
  Ingestion,
  InvalidNextTokenException,
  QuickSightUserNotFoundException,
  RecentSnapshotsConfigurations,
  RegisteredCustomerManagedKey,
  RegisteredUserConsoleFeatureConfigurations,
  RegisteredUserDashboardEmbeddingConfiguration,
  RegisteredUserDashboardFeatureConfigurations,
  RegisteredUserDashboardVisualEmbeddingConfiguration,
  RegisteredUserEmbeddingExperienceConfiguration,
  RegisteredUserGenerativeQnAEmbeddingConfiguration,
  RegisteredUserQSearchBarEmbeddingConfiguration,
  RegisteredUserQuickSightConsoleEmbeddingConfiguration,
  SchedulesConfigurations,
  SessionLifetimeInMinutesInvalidException,
  SessionTag,
  SnapshotConfiguration,
  SnapshotDestinationConfiguration,
  SnapshotFileGroup,
  StatePersistenceConfigurations,
  Template,
  TemplateSummary,
  TemplateVersion,
  TemplateVersionSummary,
  Theme,
  ThemeSummary,
  ThemeVersion,
  ThemeVersionSummary,
  ThresholdAlertsConfigurations,
  TopicRefreshScheduleSummary,
  TopicSearchFilter,
  UnsupportedPricingPlanException,
  VPCConnection,
  VPCConnectionSummary,
} from "../models/models_4";
import {
  CreateTopicReviewedAnswer,
  SnapshotAnonymousUser,
  SnapshotUserConfiguration,
  TopicReviewedAnswer,
  TopicVisual,
} from "../models/models_5";
import { QuickSightServiceException as __BaseException } from "../models/QuickSightServiceException";

/**
 * serializeAws_restJson1BatchCreateTopicReviewedAnswerCommand
 */
export const se_BatchCreateTopicReviewedAnswerCommand = async (
  input: BatchCreateTopicReviewedAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/batch-create-reviewed-answers");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Answers: (_) => se_CreateTopicReviewedAnswers(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteTopicReviewedAnswerCommand
 */
export const se_BatchDeleteTopicReviewedAnswerCommand = async (
  input: BatchDeleteTopicReviewedAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/batch-delete-reviewed-answers");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AnswerIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelIngestionCommand
 */
export const se_CancelIngestionCommand = async (
  input: CancelIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("IngestionId", () => input.IngestionId!, "{IngestionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccountCustomizationCommand
 */
export const se_CreateAccountCustomizationCommand = async (
  input: CreateAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/customizations");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountCustomization: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccountSubscriptionCommand
 */
export const se_CreateAccountSubscriptionCommand = async (
  input: CreateAccountSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/account/{AwsAccountId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountName: [],
      ActiveDirectoryName: [],
      AdminGroup: (_) => _json(_),
      AdminProGroup: (_) => _json(_),
      AuthenticationMethod: [],
      AuthorGroup: (_) => _json(_),
      AuthorProGroup: (_) => _json(_),
      ContactNumber: [],
      DirectoryId: [],
      Edition: [],
      EmailAddress: [],
      FirstName: [],
      IAMIdentityCenterInstanceArn: [],
      LastName: [],
      NotificationEmail: [],
      ReaderGroup: (_) => _json(_),
      ReaderProGroup: (_) => _json(_),
      Realm: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAnalysisCommand
 */
export const se_CreateAnalysisCommand = async (
  input: CreateAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/analyses/{AnalysisId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Definition: (_) => se_AnalysisDefinition(_, context),
      FolderArns: (_) => _json(_),
      Name: [],
      Parameters: (_) => se__Parameters(_, context),
      Permissions: (_) => _json(_),
      SourceEntity: (_) => _json(_),
      Tags: (_) => _json(_),
      ThemeArn: [],
      ValidationStrategy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBrandCommand
 */
export const se_CreateBrandCommand = async (
  input: CreateBrandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/brands/{BrandId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("BrandId", () => input.BrandId!, "{BrandId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BrandDefinition: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomPermissionsCommand
 */
export const se_CreateCustomPermissionsCommand = async (
  input: CreateCustomPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/custom-permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
      CustomPermissionsName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDashboardCommand
 */
export const se_CreateDashboardCommand = async (
  input: CreateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DashboardPublishOptions: (_) => _json(_),
      Definition: (_) => se_DashboardVersionDefinition(_, context),
      FolderArns: (_) => _json(_),
      LinkEntities: (_) => _json(_),
      LinkSharingConfiguration: (_) => _json(_),
      Name: [],
      Parameters: (_) => se__Parameters(_, context),
      Permissions: (_) => _json(_),
      SourceEntity: (_) => _json(_),
      Tags: (_) => _json(_),
      ThemeArn: [],
      ValidationStrategy: (_) => _json(_),
      VersionDescription: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataSetCommand
 */
export const se_CreateDataSetCommand = async (
  input: CreateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sets");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ColumnGroups: (_) => _json(_),
      ColumnLevelPermissionRules: (_) => _json(_),
      DataSetId: [],
      DataSetUsageConfiguration: (_) => _json(_),
      DatasetParameters: (_) => se_DatasetParameterList(_, context),
      FieldFolders: (_) => _json(_),
      FolderArns: (_) => _json(_),
      ImportMode: [],
      LogicalTableMap: (_) => se_LogicalTableMap(_, context),
      Name: [],
      PerformanceConfiguration: (_) => _json(_),
      Permissions: (_) => _json(_),
      PhysicalTableMap: (_) => _json(_),
      RowLevelPermissionDataSet: (_) => _json(_),
      RowLevelPermissionTagConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
      UseAs: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataSourceCommand
 */
export const se_CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sources");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Credentials: (_) => _json(_),
      DataSourceId: [],
      DataSourceParameters: (_) => _json(_),
      FolderArns: (_) => _json(_),
      Name: [],
      Permissions: (_) => _json(_),
      SslProperties: (_) => _json(_),
      Tags: (_) => _json(_),
      Type: [],
      VpcConnectionProperties: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFolderCommand
 */
export const se_CreateFolderCommand = async (
  input: CreateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FolderType: [],
      Name: [],
      ParentFolderArn: [],
      Permissions: (_) => _json(_),
      SharingModel: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFolderMembershipCommand
 */
export const se_CreateFolderMembershipCommand = async (
  input: CreateFolderMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  b.p("MemberType", () => input.MemberType!, "{MemberType}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      GroupName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupMembershipCommand
 */
export const se_CreateGroupMembershipCommand = async (
  input: CreateGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}");
  b.p("MemberName", () => input.MemberName!, "{MemberName}", false);
  b.p("GroupName", () => input.GroupName!, "{GroupName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIAMPolicyAssignmentCommand
 */
export const se_CreateIAMPolicyAssignmentCommand = async (
  input: CreateIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssignmentName: [],
      AssignmentStatus: [],
      Identities: (_) => _json(_),
      PolicyArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIngestionCommand
 */
export const se_CreateIngestionCommand = async (
  input: CreateIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}");
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("IngestionId", () => input.IngestionId!, "{IngestionId}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IngestionType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNamespaceCommand
 */
export const se_CreateNamespaceCommand = async (
  input: CreateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdentityStore: [],
      Namespace: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRefreshScheduleCommand
 */
export const se_CreateRefreshScheduleCommand = async (
  input: CreateRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules");
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Schedule: (_) => se_RefreshSchedule(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoleMembershipCommand
 */
export const se_CreateRoleMembershipCommand = async (
  input: CreateRoleMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}");
  b.p("MemberName", () => input.MemberName!, "{MemberName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  b.p("Role", () => input.Role!, "{Role}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTemplateCommand
 */
export const se_CreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Definition: (_) => se_TemplateVersionDefinition(_, context),
      Name: [],
      Permissions: (_) => _json(_),
      SourceEntity: (_) => _json(_),
      Tags: (_) => _json(_),
      ValidationStrategy: (_) => _json(_),
      VersionDescription: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTemplateAliasCommand
 */
export const se_CreateTemplateAliasCommand = async (
  input: CreateTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TemplateVersionNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateThemeCommand
 */
export const se_CreateThemeCommand = async (
  input: CreateThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BaseThemeId: [],
      Configuration: (_) => _json(_),
      Name: [],
      Permissions: (_) => _json(_),
      Tags: (_) => _json(_),
      VersionDescription: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateThemeAliasCommand
 */
export const se_CreateThemeAliasCommand = async (
  input: CreateThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ThemeVersionNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTopicCommand
 */
export const se_CreateTopicCommand = async (
  input: CreateTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/topics");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomInstructions: (_) => _json(_),
      FolderArns: (_) => _json(_),
      Tags: (_) => _json(_),
      Topic: (_) => _json(_),
      TopicId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTopicRefreshScheduleCommand
 */
export const se_CreateTopicRefreshScheduleCommand = async (
  input: CreateTopicRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/schedules");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DatasetArn: [],
      DatasetName: [],
      RefreshSchedule: (_) => se_TopicRefreshSchedule(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVPCConnectionCommand
 */
export const se_CreateVPCConnectionCommand = async (
  input: CreateVPCConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/vpc-connections");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DnsResolvers: (_) => _json(_),
      Name: [],
      RoleArn: [],
      SecurityGroupIds: (_) => _json(_),
      SubnetIds: (_) => _json(_),
      Tags: (_) => _json(_),
      VPCConnectionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccountCustomizationCommand
 */
export const se_DeleteAccountCustomizationCommand = async (
  input: DeleteAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/customizations");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccountSubscriptionCommand
 */
export const se_DeleteAccountSubscriptionCommand = async (
  input: DeleteAccountSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/account/{AwsAccountId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAnalysisCommand
 */
export const se_DeleteAnalysisCommand = async (
  input: DeleteAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/analyses/{AnalysisId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  const query: any = map({
    [_rwid]: [() => input.RecoveryWindowInDays !== void 0, () => input[_RWID]!.toString()],
    [_fdwr]: [() => input.ForceDeleteWithoutRecovery !== void 0, () => input[_FDWR]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBrandCommand
 */
export const se_DeleteBrandCommand = async (
  input: DeleteBrandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/brands/{BrandId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("BrandId", () => input.BrandId!, "{BrandId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBrandAssignmentCommand
 */
export const se_DeleteBrandAssignmentCommand = async (
  input: DeleteBrandAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/brandassignments");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomPermissionsCommand
 */
export const se_DeleteCustomPermissionsCommand = async (
  input: DeleteCustomPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("CustomPermissionsName", () => input.CustomPermissionsName!, "{CustomPermissionsName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDashboardCommand
 */
export const se_DeleteDashboardCommand = async (
  input: DeleteDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSetCommand
 */
export const se_DeleteDataSetCommand = async (
  input: DeleteDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSetRefreshPropertiesCommand
 */
export const se_DeleteDataSetRefreshPropertiesCommand = async (
  input: DeleteDataSetRefreshPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sources/{DataSourceId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSourceId", () => input.DataSourceId!, "{DataSourceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDefaultQBusinessApplicationCommand
 */
export const se_DeleteDefaultQBusinessApplicationCommand = async (
  input: DeleteDefaultQBusinessApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/default-qbusiness-application");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFolderCommand
 */
export const se_DeleteFolderCommand = async (
  input: DeleteFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFolderMembershipCommand
 */
export const se_DeleteFolderMembershipCommand = async (
  input: DeleteFolderMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  b.p("MemberType", () => input.MemberType!, "{MemberType}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}");
  b.p("GroupName", () => input.GroupName!, "{GroupName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGroupMembershipCommand
 */
export const se_DeleteGroupMembershipCommand = async (
  input: DeleteGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}");
  b.p("MemberName", () => input.MemberName!, "{MemberName}", false);
  b.p("GroupName", () => input.GroupName!, "{GroupName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIAMPolicyAssignmentCommand
 */
export const se_DeleteIAMPolicyAssignmentCommand = async (
  input: DeleteIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AssignmentName", () => input.AssignmentName!, "{AssignmentName}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIdentityPropagationConfigCommand
 */
export const se_DeleteIdentityPropagationConfigCommand = async (
  input: DeleteIdentityPropagationConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/identity-propagation-config/{Service}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Service", () => input.Service!, "{Service}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNamespaceCommand
 */
export const se_DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRefreshScheduleCommand
 */
export const se_DeleteRefreshScheduleCommand = async (
  input: DeleteRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}");
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ScheduleId", () => input.ScheduleId!, "{ScheduleId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoleCustomPermissionCommand
 */
export const se_DeleteRoleCustomPermissionCommand = async (
  input: DeleteRoleCustomPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission");
  b.p("Role", () => input.Role!, "{Role}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoleMembershipCommand
 */
export const se_DeleteRoleMembershipCommand = async (
  input: DeleteRoleMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}");
  b.p("MemberName", () => input.MemberName!, "{MemberName}", false);
  b.p("Role", () => input.Role!, "{Role}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTemplateCommand
 */
export const se_DeleteTemplateCommand = async (
  input: DeleteTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTemplateAliasCommand
 */
export const se_DeleteTemplateAliasCommand = async (
  input: DeleteTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteThemeCommand
 */
export const se_DeleteThemeCommand = async (
  input: DeleteThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteThemeAliasCommand
 */
export const se_DeleteThemeAliasCommand = async (
  input: DeleteThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTopicCommand
 */
export const se_DeleteTopicCommand = async (
  input: DeleteTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTopicRefreshScheduleCommand
 */
export const se_DeleteTopicRefreshScheduleCommand = async (
  input: DeleteTopicRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  b.p("DatasetId", () => input.DatasetId!, "{DatasetId}", false);
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
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}");
  b.p("UserName", () => input.UserName!, "{UserName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserByPrincipalIdCommand
 */
export const se_DeleteUserByPrincipalIdCommand = async (
  input: DeleteUserByPrincipalIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}");
  b.p("PrincipalId", () => input.PrincipalId!, "{PrincipalId}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserCustomPermissionCommand
 */
export const se_DeleteUserCustomPermissionCommand = async (
  input: DeleteUserCustomPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission");
  b.p("UserName", () => input.UserName!, "{UserName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVPCConnectionCommand
 */
export const se_DeleteVPCConnectionCommand = async (
  input: DeleteVPCConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("VPCConnectionId", () => input.VPCConnectionId!, "{VPCConnectionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAccountCustomizationCommand
 */
export const se_DescribeAccountCustomizationCommand = async (
  input: DescribeAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/customizations");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
    [_r]: [() => input.Resolved !== void 0, () => input[_R]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAccountSettingsCommand
 */
export const se_DescribeAccountSettingsCommand = async (
  input: DescribeAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/settings");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAccountSubscriptionCommand
 */
export const se_DescribeAccountSubscriptionCommand = async (
  input: DescribeAccountSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/account/{AwsAccountId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAnalysisCommand
 */
export const se_DescribeAnalysisCommand = async (
  input: DescribeAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/analyses/{AnalysisId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAnalysisDefinitionCommand
 */
export const se_DescribeAnalysisDefinitionCommand = async (
  input: DescribeAnalysisDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/analyses/{AnalysisId}/definition");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAnalysisPermissionsCommand
 */
export const se_DescribeAnalysisPermissionsCommand = async (
  input: DescribeAnalysisPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAssetBundleExportJobCommand
 */
export const se_DescribeAssetBundleExportJobCommand = async (
  input: DescribeAssetBundleExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/asset-bundle-export-jobs/{AssetBundleExportJobId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AssetBundleExportJobId", () => input.AssetBundleExportJobId!, "{AssetBundleExportJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAssetBundleImportJobCommand
 */
export const se_DescribeAssetBundleImportJobCommand = async (
  input: DescribeAssetBundleImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/asset-bundle-import-jobs/{AssetBundleImportJobId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AssetBundleImportJobId", () => input.AssetBundleImportJobId!, "{AssetBundleImportJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeBrandCommand
 */
export const se_DescribeBrandCommand = async (
  input: DescribeBrandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/brands/{BrandId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("BrandId", () => input.BrandId!, "{BrandId}", false);
  const query: any = map({
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeBrandAssignmentCommand
 */
export const se_DescribeBrandAssignmentCommand = async (
  input: DescribeBrandAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/brandassignments");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeBrandPublishedVersionCommand
 */
export const se_DescribeBrandPublishedVersionCommand = async (
  input: DescribeBrandPublishedVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/brands/{BrandId}/publishedversion");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("BrandId", () => input.BrandId!, "{BrandId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCustomPermissionsCommand
 */
export const se_DescribeCustomPermissionsCommand = async (
  input: DescribeCustomPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("CustomPermissionsName", () => input.CustomPermissionsName!, "{CustomPermissionsName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDashboardCommand
 */
export const se_DescribeDashboardCommand = async (
  input: DescribeDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
    [_an]: [, input[_AN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDashboardDefinitionCommand
 */
export const se_DescribeDashboardDefinitionCommand = async (
  input: DescribeDashboardDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/definition");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
    [_an]: [, input[_AN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDashboardPermissionsCommand
 */
export const se_DescribeDashboardPermissionsCommand = async (
  input: DescribeDashboardPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDashboardSnapshotJobCommand
 */
export const se_DescribeDashboardSnapshotJobCommand = async (
  input: DescribeDashboardSnapshotJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  b.p("SnapshotJobId", () => input.SnapshotJobId!, "{SnapshotJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDashboardSnapshotJobResultCommand
 */
export const se_DescribeDashboardSnapshotJobResultCommand = async (
  input: DescribeDashboardSnapshotJobResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}/result");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  b.p("SnapshotJobId", () => input.SnapshotJobId!, "{SnapshotJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDashboardsQAConfigurationCommand
 */
export const se_DescribeDashboardsQAConfigurationCommand = async (
  input: DescribeDashboardsQAConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards-qa-configuration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDataSetCommand
 */
export const se_DescribeDataSetCommand = async (
  input: DescribeDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDataSetPermissionsCommand
 */
export const se_DescribeDataSetPermissionsCommand = async (
  input: DescribeDataSetPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDataSetRefreshPropertiesCommand
 */
export const se_DescribeDataSetRefreshPropertiesCommand = async (
  input: DescribeDataSetRefreshPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDataSourceCommand
 */
export const se_DescribeDataSourceCommand = async (
  input: DescribeDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sources/{DataSourceId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSourceId", () => input.DataSourceId!, "{DataSourceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDataSourcePermissionsCommand
 */
export const se_DescribeDataSourcePermissionsCommand = async (
  input: DescribeDataSourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSourceId", () => input.DataSourceId!, "{DataSourceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDefaultQBusinessApplicationCommand
 */
export const se_DescribeDefaultQBusinessApplicationCommand = async (
  input: DescribeDefaultQBusinessApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/default-qbusiness-application");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFolderCommand
 */
export const se_DescribeFolderCommand = async (
  input: DescribeFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFolderPermissionsCommand
 */
export const se_DescribeFolderPermissionsCommand = async (
  input: DescribeFolderPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFolderResolvedPermissionsCommand
 */
export const se_DescribeFolderResolvedPermissionsCommand = async (
  input: DescribeFolderResolvedPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}/resolved-permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGroupCommand
 */
export const se_DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}");
  b.p("GroupName", () => input.GroupName!, "{GroupName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGroupMembershipCommand
 */
export const se_DescribeGroupMembershipCommand = async (
  input: DescribeGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}");
  b.p("MemberName", () => input.MemberName!, "{MemberName}", false);
  b.p("GroupName", () => input.GroupName!, "{GroupName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeIAMPolicyAssignmentCommand
 */
export const se_DescribeIAMPolicyAssignmentCommand = async (
  input: DescribeIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AssignmentName", () => input.AssignmentName!, "{AssignmentName}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeIngestionCommand
 */
export const se_DescribeIngestionCommand = async (
  input: DescribeIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("IngestionId", () => input.IngestionId!, "{IngestionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeIpRestrictionCommand
 */
export const se_DescribeIpRestrictionCommand = async (
  input: DescribeIpRestrictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/ip-restriction");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeKeyRegistrationCommand
 */
export const se_DescribeKeyRegistrationCommand = async (
  input: DescribeKeyRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/key-registration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_dko]: [() => input.DefaultKeyOnly !== void 0, () => input[_DKO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeNamespaceCommand
 */
export const se_DescribeNamespaceCommand = async (
  input: DescribeNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeQPersonalizationConfigurationCommand
 */
export const se_DescribeQPersonalizationConfigurationCommand = async (
  input: DescribeQPersonalizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/q-personalization-configuration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeQuickSightQSearchConfigurationCommand
 */
export const se_DescribeQuickSightQSearchConfigurationCommand = async (
  input: DescribeQuickSightQSearchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/quicksight-q-search-configuration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRefreshScheduleCommand
 */
export const se_DescribeRefreshScheduleCommand = async (
  input: DescribeRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("ScheduleId", () => input.ScheduleId!, "{ScheduleId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRoleCustomPermissionCommand
 */
export const se_DescribeRoleCustomPermissionCommand = async (
  input: DescribeRoleCustomPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission");
  b.p("Role", () => input.Role!, "{Role}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTemplateCommand
 */
export const se_DescribeTemplateCommand = async (
  input: DescribeTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
    [_an]: [, input[_AN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTemplateAliasCommand
 */
export const se_DescribeTemplateAliasCommand = async (
  input: DescribeTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTemplateDefinitionCommand
 */
export const se_DescribeTemplateDefinitionCommand = async (
  input: DescribeTemplateDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/definition");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
    [_an]: [, input[_AN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTemplatePermissionsCommand
 */
export const se_DescribeTemplatePermissionsCommand = async (
  input: DescribeTemplatePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeThemeCommand
 */
export const se_DescribeThemeCommand = async (
  input: DescribeThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    [_vn]: [() => input.VersionNumber !== void 0, () => input[_VN]!.toString()],
    [_an]: [, input[_AN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeThemeAliasCommand
 */
export const se_DescribeThemeAliasCommand = async (
  input: DescribeThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeThemePermissionsCommand
 */
export const se_DescribeThemePermissionsCommand = async (
  input: DescribeThemePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTopicCommand
 */
export const se_DescribeTopicCommand = async (
  input: DescribeTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTopicPermissionsCommand
 */
export const se_DescribeTopicPermissionsCommand = async (
  input: DescribeTopicPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTopicRefreshCommand
 */
export const se_DescribeTopicRefreshCommand = async (
  input: DescribeTopicRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/refresh/{RefreshId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  b.p("RefreshId", () => input.RefreshId!, "{RefreshId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTopicRefreshScheduleCommand
 */
export const se_DescribeTopicRefreshScheduleCommand = async (
  input: DescribeTopicRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  b.p("DatasetId", () => input.DatasetId!, "{DatasetId}", false);
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
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}");
  b.p("UserName", () => input.UserName!, "{UserName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeVPCConnectionCommand
 */
export const se_DescribeVPCConnectionCommand = async (
  input: DescribeVPCConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("VPCConnectionId", () => input.VPCConnectionId!, "{VPCConnectionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand
 */
export const se_GenerateEmbedUrlForAnonymousUserCommand = async (
  input: GenerateEmbedUrlForAnonymousUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/embed-url/anonymous-user");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedDomains: (_) => _json(_),
      AuthorizedResourceArns: (_) => _json(_),
      ExperienceConfiguration: (_) => _json(_),
      Namespace: [],
      SessionLifetimeInMinutes: [],
      SessionTags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand
 */
export const se_GenerateEmbedUrlForRegisteredUserCommand = async (
  input: GenerateEmbedUrlForRegisteredUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/embed-url/registered-user");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedDomains: (_) => _json(_),
      ExperienceConfiguration: (_) => _json(_),
      SessionLifetimeInMinutes: [],
      UserArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateEmbedUrlForRegisteredUserWithIdentityCommand
 */
export const se_GenerateEmbedUrlForRegisteredUserWithIdentityCommand = async (
  input: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/embed-url/registered-user-with-identity");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedDomains: (_) => _json(_),
      ExperienceConfiguration: (_) => _json(_),
      SessionLifetimeInMinutes: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDashboardEmbedUrlCommand
 */
export const se_GetDashboardEmbedUrlCommand = async (
  input: GetDashboardEmbedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    [_ct]: [, __expectNonNull(input[_IT]!, `IdentityType`)],
    [_sl]: [() => input.SessionLifetimeInMinutes !== void 0, () => input[_SLIM]!.toString()],
    [_urd]: [() => input.UndoRedoDisabled !== void 0, () => input[_URD]!.toString()],
    [_rd]: [() => input.ResetDisabled !== void 0, () => input[_RD]!.toString()],
    [_spe]: [() => input.StatePersistenceEnabled !== void 0, () => input[_SPE]!.toString()],
    [_ua]: [, input[_UA]!],
    [_n]: [, input[_N]!],
    [_adi]: [() => input.AdditionalDashboardIds !== void 0, () => input[_ADI]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionEmbedUrlCommand
 */
export const se_GetSessionEmbedUrlCommand = async (
  input: GetSessionEmbedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/session-embed-url");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_ep]: [, input[_EP]!],
    [_sl]: [() => input.SessionLifetimeInMinutes !== void 0, () => input[_SLIM]!.toString()],
    [_ua]: [, input[_UA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAnalysesCommand
 */
export const se_ListAnalysesCommand = async (
  input: ListAnalysesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/analyses");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetBundleExportJobsCommand
 */
export const se_ListAssetBundleExportJobsCommand = async (
  input: ListAssetBundleExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/asset-bundle-export-jobs");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetBundleImportJobsCommand
 */
export const se_ListAssetBundleImportJobsCommand = async (
  input: ListAssetBundleImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/asset-bundle-import-jobs");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBrandsCommand
 */
export const se_ListBrandsCommand = async (
  input: ListBrandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/brands");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomPermissionsCommand
 */
export const se_ListCustomPermissionsCommand = async (
  input: ListCustomPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/custom-permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDashboardsCommand
 */
export const se_ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDashboardVersionsCommand
 */
export const se_ListDashboardVersionsCommand = async (
  input: ListDashboardVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSetsCommand
 */
export const se_ListDataSetsCommand = async (
  input: ListDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sources");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFolderMembersCommand
 */
export const se_ListFolderMembersCommand = async (
  input: ListFolderMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}/members");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFoldersCommand
 */
export const se_ListFoldersCommand = async (
  input: ListFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/folders");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFoldersForResourceCommand
 */
export const se_ListFoldersForResourceCommand = async (
  input: ListFoldersForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/resource/{ResourceArn}/folders");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupMembershipsCommand
 */
export const se_ListGroupMembershipsCommand = async (
  input: ListGroupMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members");
  b.p("GroupName", () => input.GroupName!, "{GroupName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIAMPolicyAssignmentsCommand
 */
export const se_ListIAMPolicyAssignmentsCommand = async (
  input: ListIAMPolicyAssignmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/v2/iam-policy-assignments");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_as]: [, input[_AS]!],
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand
 */
export const se_ListIAMPolicyAssignmentsForUserCommand = async (
  input: ListIAMPolicyAssignmentsForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("UserName", () => input.UserName!, "{UserName}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdentityPropagationConfigsCommand
 */
export const se_ListIdentityPropagationConfigsCommand = async (
  input: ListIdentityPropagationConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/identity-propagation-config");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIngestionsCommand
 */
export const se_ListIngestionsCommand = async (
  input: ListIngestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions");
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNamespacesCommand
 */
export const se_ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRefreshSchedulesCommand
 */
export const se_ListRefreshSchedulesCommand = async (
  input: ListRefreshSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoleMembershipsCommand
 */
export const se_ListRoleMembershipsCommand = async (
  input: ListRoleMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members");
  b.p("Role", () => input.Role!, "{Role}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
  b.bp("/resources/{ResourceArn}/tags");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplateAliasesCommand
 */
export const se_ListTemplateAliasesCommand = async (
  input: ListTemplateAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/aliases");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr_]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr_]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplateVersionsCommand
 */
export const se_ListTemplateVersionsCommand = async (
  input: ListTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/versions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThemeAliasesCommand
 */
export const se_ListThemeAliasesCommand = async (
  input: ListThemeAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/aliases");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr_]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThemesCommand
 */
export const se_ListThemesCommand = async (
  input: ListThemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_t]: [, input[_T]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThemeVersionsCommand
 */
export const se_ListThemeVersionsCommand = async (
  input: ListThemeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/versions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTopicRefreshSchedulesCommand
 */
export const se_ListTopicRefreshSchedulesCommand = async (
  input: ListTopicRefreshSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/schedules");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTopicReviewedAnswersCommand
 */
export const se_ListTopicReviewedAnswersCommand = async (
  input: ListTopicReviewedAnswersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/reviewed-answers");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTopicsCommand
 */
export const se_ListTopicsCommand = async (
  input: ListTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/topics");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUserGroupsCommand
 */
export const se_ListUserGroupsCommand = async (
  input: ListUserGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups");
  b.p("UserName", () => input.UserName!, "{UserName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVPCConnectionsCommand
 */
export const se_ListVPCConnectionsCommand = async (
  input: ListVPCConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/vpc-connections");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PredictQAResultsCommand
 */
export const se_PredictQAResultsCommand = async (
  input: PredictQAResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/qa/predict");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IncludeGeneratedAnswer: [],
      IncludeQuickSightQIndex: [],
      MaxTopicsToConsider: [],
      QueryText: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDataSetRefreshPropertiesCommand
 */
export const se_PutDataSetRefreshPropertiesCommand = async (
  input: PutDataSetRefreshPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSetRefreshProperties: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterUserCommand
 */
export const se_RegisterUserCommand = async (
  input: RegisterUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomFederationProviderUrl: [],
      CustomPermissionsName: [],
      Email: [],
      ExternalLoginFederationProviderType: [],
      ExternalLoginId: [],
      IamArn: [],
      IdentityType: [],
      SessionName: [],
      Tags: (_) => _json(_),
      UserName: [],
      UserRole: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestoreAnalysisCommand
 */
export const se_RestoreAnalysisCommand = async (
  input: RestoreAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/restore/analyses/{AnalysisId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  const query: any = map({
    [_rtf]: [() => input.RestoreToFolders !== void 0, () => input[_RTF]!.toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchAnalysesCommand
 */
export const se_SearchAnalysesCommand = async (
  input: SearchAnalysesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/search/analyses");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
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
 * serializeAws_restJson1SearchDashboardsCommand
 */
export const se_SearchDashboardsCommand = async (
  input: SearchDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/search/dashboards");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
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
 * serializeAws_restJson1SearchDataSetsCommand
 */
export const se_SearchDataSetsCommand = async (
  input: SearchDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/search/data-sets");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
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
 * serializeAws_restJson1SearchDataSourcesCommand
 */
export const se_SearchDataSourcesCommand = async (
  input: SearchDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/search/data-sources");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
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
 * serializeAws_restJson1SearchFoldersCommand
 */
export const se_SearchFoldersCommand = async (
  input: SearchFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/search/folders");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
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
 * serializeAws_restJson1SearchGroupsCommand
 */
export const se_SearchGroupsCommand = async (
  input: SearchGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups-search");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchTopicsCommand
 */
export const se_SearchTopicsCommand = async (
  input: SearchTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/search/topics");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
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
 * serializeAws_restJson1StartAssetBundleExportJobCommand
 */
export const se_StartAssetBundleExportJobCommand = async (
  input: StartAssetBundleExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/asset-bundle-export-jobs/export");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssetBundleExportJobId: [],
      CloudFormationOverridePropertyConfiguration: (_) => _json(_),
      ExportFormat: [],
      IncludeAllDependencies: [],
      IncludeFolderMembers: [],
      IncludeFolderMemberships: [],
      IncludePermissions: [],
      IncludeTags: [],
      ResourceArns: (_) => _json(_),
      ValidationStrategy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAssetBundleImportJobCommand
 */
export const se_StartAssetBundleImportJobCommand = async (
  input: StartAssetBundleImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/asset-bundle-import-jobs/import");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssetBundleImportJobId: [],
      AssetBundleImportSource: (_) => se_AssetBundleImportSource(_, context),
      FailureAction: [],
      OverrideParameters: (_) => se_AssetBundleImportJobOverrideParameters(_, context),
      OverridePermissions: (_) => _json(_),
      OverrideTags: (_) => _json(_),
      OverrideValidationStrategy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDashboardSnapshotJobCommand
 */
export const se_StartDashboardSnapshotJobCommand = async (
  input: StartDashboardSnapshotJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SnapshotConfiguration: (_) => se_SnapshotConfiguration(_, context),
      SnapshotJobId: [],
      UserConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDashboardSnapshotJobScheduleCommand
 */
export const se_StartDashboardSnapshotJobScheduleCommand = async (
  input: StartDashboardSnapshotJobScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/schedules/{ScheduleId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  b.p("ScheduleId", () => input.ScheduleId!, "{ScheduleId}", false);
  let body: any;
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
  b.bp("/resources/{ResourceArn}/tags");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/resources/{ResourceArn}/tags");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_k]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountCustomizationCommand
 */
export const se_UpdateAccountCustomizationCommand = async (
  input: UpdateAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/customizations");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountCustomization: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/settings");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultNamespace: [],
      NotificationEmail: [],
      TerminationProtectionEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAnalysisCommand
 */
export const se_UpdateAnalysisCommand = async (
  input: UpdateAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/analyses/{AnalysisId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Definition: (_) => se_AnalysisDefinition(_, context),
      Name: [],
      Parameters: (_) => se__Parameters(_, context),
      SourceEntity: (_) => _json(_),
      ThemeArn: [],
      ValidationStrategy: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAnalysisPermissionsCommand
 */
export const se_UpdateAnalysisPermissionsCommand = async (
  input: UpdateAnalysisPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApplicationWithTokenExchangeGrantCommand
 */
export const se_UpdateApplicationWithTokenExchangeGrantCommand = async (
  input: UpdateApplicationWithTokenExchangeGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/application-with-token-exchange-grant");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, __expectNonNull(input[_N]!, `Namespace`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBrandCommand
 */
export const se_UpdateBrandCommand = async (
  input: UpdateBrandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/brands/{BrandId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("BrandId", () => input.BrandId!, "{BrandId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BrandDefinition: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBrandAssignmentCommand
 */
export const se_UpdateBrandAssignmentCommand = async (
  input: UpdateBrandAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/brandassignments");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BrandArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBrandPublishedVersionCommand
 */
export const se_UpdateBrandPublishedVersionCommand = async (
  input: UpdateBrandPublishedVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/brands/{BrandId}/publishedversion");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("BrandId", () => input.BrandId!, "{BrandId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      VersionId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCustomPermissionsCommand
 */
export const se_UpdateCustomPermissionsCommand = async (
  input: UpdateCustomPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("CustomPermissionsName", () => input.CustomPermissionsName!, "{CustomPermissionsName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDashboardCommand
 */
export const se_UpdateDashboardCommand = async (
  input: UpdateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DashboardPublishOptions: (_) => _json(_),
      Definition: (_) => se_DashboardVersionDefinition(_, context),
      Name: [],
      Parameters: (_) => se__Parameters(_, context),
      SourceEntity: (_) => _json(_),
      ThemeArn: [],
      ValidationStrategy: (_) => _json(_),
      VersionDescription: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDashboardLinksCommand
 */
export const se_UpdateDashboardLinksCommand = async (
  input: UpdateDashboardLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/linked-entities");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LinkEntities: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDashboardPermissionsCommand
 */
export const se_UpdateDashboardPermissionsCommand = async (
  input: UpdateDashboardPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantLinkPermissions: (_) => _json(_),
      GrantPermissions: (_) => _json(_),
      RevokeLinkPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDashboardPublishedVersionCommand
 */
export const se_UpdateDashboardPublishedVersionCommand = async (
  input: UpdateDashboardPublishedVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDashboardsQAConfigurationCommand
 */
export const se_UpdateDashboardsQAConfigurationCommand = async (
  input: UpdateDashboardsQAConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/dashboards-qa-configuration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DashboardsQAStatus: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSetCommand
 */
export const se_UpdateDataSetCommand = async (
  input: UpdateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ColumnGroups: (_) => _json(_),
      ColumnLevelPermissionRules: (_) => _json(_),
      DataSetUsageConfiguration: (_) => _json(_),
      DatasetParameters: (_) => se_DatasetParameterList(_, context),
      FieldFolders: (_) => _json(_),
      ImportMode: [],
      LogicalTableMap: (_) => se_LogicalTableMap(_, context),
      Name: [],
      PerformanceConfiguration: (_) => _json(_),
      PhysicalTableMap: (_) => _json(_),
      RowLevelPermissionDataSet: (_) => _json(_),
      RowLevelPermissionTagConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSetPermissionsCommand
 */
export const se_UpdateDataSetPermissionsCommand = async (
  input: UpdateDataSetPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sources/{DataSourceId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSourceId", () => input.DataSourceId!, "{DataSourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Credentials: (_) => _json(_),
      DataSourceParameters: (_) => _json(_),
      Name: [],
      SslProperties: (_) => _json(_),
      VpcConnectionProperties: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSourcePermissionsCommand
 */
export const se_UpdateDataSourcePermissionsCommand = async (
  input: UpdateDataSourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("DataSourceId", () => input.DataSourceId!, "{DataSourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDefaultQBusinessApplicationCommand
 */
export const se_UpdateDefaultQBusinessApplicationCommand = async (
  input: UpdateDefaultQBusinessApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/default-qbusiness-application");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationId: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFolderCommand
 */
export const se_UpdateFolderCommand = async (
  input: UpdateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFolderPermissionsCommand
 */
export const se_UpdateFolderPermissionsCommand = async (
  input: UpdateFolderPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/folders/{FolderId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}");
  b.p("GroupName", () => input.GroupName!, "{GroupName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIAMPolicyAssignmentCommand
 */
export const se_UpdateIAMPolicyAssignmentCommand = async (
  input: UpdateIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("AssignmentName", () => input.AssignmentName!, "{AssignmentName}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssignmentStatus: [],
      Identities: (_) => _json(_),
      PolicyArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIdentityPropagationConfigCommand
 */
export const se_UpdateIdentityPropagationConfigCommand = async (
  input: UpdateIdentityPropagationConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/identity-propagation-config/{Service}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Service", () => input.Service!, "{Service}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AuthorizedTargets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIpRestrictionCommand
 */
export const se_UpdateIpRestrictionCommand = async (
  input: UpdateIpRestrictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/ip-restriction");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Enabled: [],
      IpRestrictionRuleMap: (_) => _json(_),
      VpcEndpointIdRestrictionRuleMap: (_) => _json(_),
      VpcIdRestrictionRuleMap: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKeyRegistrationCommand
 */
export const se_UpdateKeyRegistrationCommand = async (
  input: UpdateKeyRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/key-registration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyRegistration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePublicSharingSettingsCommand
 */
export const se_UpdatePublicSharingSettingsCommand = async (
  input: UpdatePublicSharingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/public-sharing-settings");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PublicSharingEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQPersonalizationConfigurationCommand
 */
export const se_UpdateQPersonalizationConfigurationCommand = async (
  input: UpdateQPersonalizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/q-personalization-configuration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PersonalizationMode: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQuickSightQSearchConfigurationCommand
 */
export const se_UpdateQuickSightQSearchConfigurationCommand = async (
  input: UpdateQuickSightQSearchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/quicksight-q-search-configuration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QSearchStatus: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRefreshScheduleCommand
 */
export const se_UpdateRefreshScheduleCommand = async (
  input: UpdateRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules");
  b.p("DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Schedule: (_) => se_RefreshSchedule(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoleCustomPermissionCommand
 */
export const se_UpdateRoleCustomPermissionCommand = async (
  input: UpdateRoleCustomPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission");
  b.p("Role", () => input.Role!, "{Role}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomPermissionsName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSPICECapacityConfigurationCommand
 */
export const se_UpdateSPICECapacityConfigurationCommand = async (
  input: UpdateSPICECapacityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/spice-capacity-configuration");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PurchaseMode: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTemplateCommand
 */
export const se_UpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Definition: (_) => se_TemplateVersionDefinition(_, context),
      Name: [],
      SourceEntity: (_) => _json(_),
      ValidationStrategy: (_) => _json(_),
      VersionDescription: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTemplateAliasCommand
 */
export const se_UpdateTemplateAliasCommand = async (
  input: UpdateTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TemplateVersionNumber: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTemplatePermissionsCommand
 */
export const se_UpdateTemplatePermissionsCommand = async (
  input: UpdateTemplatePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/templates/{TemplateId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThemeCommand
 */
export const se_UpdateThemeCommand = async (
  input: UpdateThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BaseThemeId: [],
      Configuration: (_) => _json(_),
      Name: [],
      VersionDescription: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThemeAliasCommand
 */
export const se_UpdateThemeAliasCommand = async (
  input: UpdateThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  b.p("AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ThemeVersionNumber: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThemePermissionsCommand
 */
export const se_UpdateThemePermissionsCommand = async (
  input: UpdateThemePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/themes/{ThemeId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTopicCommand
 */
export const se_UpdateTopicCommand = async (
  input: UpdateTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomInstructions: (_) => _json(_),
      Topic: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTopicPermissionsCommand
 */
export const se_UpdateTopicPermissionsCommand = async (
  input: UpdateTopicPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/permissions");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GrantPermissions: (_) => _json(_),
      RevokePermissions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTopicRefreshScheduleCommand
 */
export const se_UpdateTopicRefreshScheduleCommand = async (
  input: UpdateTopicRefreshScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("TopicId", () => input.TopicId!, "{TopicId}", false);
  b.p("DatasetId", () => input.DatasetId!, "{DatasetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RefreshSchedule: (_) => se_TopicRefreshSchedule(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}");
  b.p("UserName", () => input.UserName!, "{UserName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomFederationProviderUrl: [],
      CustomPermissionsName: [],
      Email: [],
      ExternalLoginFederationProviderType: [],
      ExternalLoginId: [],
      Role: [],
      UnapplyCustomPermissions: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserCustomPermissionCommand
 */
export const se_UpdateUserCustomPermissionCommand = async (
  input: UpdateUserCustomPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission");
  b.p("UserName", () => input.UserName!, "{UserName}", false);
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomPermissionsName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVPCConnectionCommand
 */
export const se_UpdateVPCConnectionCommand = async (
  input: UpdateVPCConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}");
  b.p("AwsAccountId", () => input.AwsAccountId!, "{AwsAccountId}", false);
  b.p("VPCConnectionId", () => input.VPCConnectionId!, "{VPCConnectionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DnsResolvers: (_) => _json(_),
      Name: [],
      RoleArn: [],
      SecurityGroupIds: (_) => _json(_),
      SubnetIds: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchCreateTopicReviewedAnswerCommand
 */
export const de_BatchCreateTopicReviewedAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateTopicReviewedAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InvalidAnswers: _json,
    RequestId: __expectString,
    SucceededAnswers: _json,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteTopicReviewedAnswerCommand
 */
export const de_BatchDeleteTopicReviewedAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTopicReviewedAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InvalidAnswers: _json,
    RequestId: __expectString,
    SucceededAnswers: _json,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CancelIngestionCommand
 */
export const de_CancelIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    IngestionId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccountCustomizationCommand
 */
export const de_CreateAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountCustomization: _json,
    Arn: __expectString,
    AwsAccountId: __expectString,
    Namespace: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccountSubscriptionCommand
 */
export const de_CreateAccountSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    SignupResponse: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateAnalysisCommand
 */
export const de_CreateAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisId: __expectString,
    Arn: __expectString,
    CreationStatus: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateBrandCommand
 */
export const de_CreateBrandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BrandDefinition: _json,
    BrandDetail: (_) => de_BrandDetail(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomPermissionsCommand
 */
export const de_CreateCustomPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDashboardCommand
 */
export const de_CreateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationStatus: __expectString,
    DashboardId: __expectString,
    RequestId: __expectString,
    VersionArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSetCommand
 */
export const de_CreateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    DataSetId: __expectString,
    IngestionArn: __expectString,
    IngestionId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSourceCommand
 */
export const de_CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationStatus: __expectString,
    DataSourceId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateFolderCommand
 */
export const de_CreateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    FolderId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateFolderMembershipCommand
 */
export const de_CreateFolderMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FolderMember: _json,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Group: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupMembershipCommand
 */
export const de_CreateGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupMember: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateIAMPolicyAssignmentCommand
 */
export const de_CreateIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssignmentId: __expectString,
    AssignmentName: __expectString,
    AssignmentStatus: __expectString,
    Identities: _json,
    PolicyArn: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateIngestionCommand
 */
export const de_CreateIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    IngestionId: __expectString,
    IngestionStatus: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateNamespaceCommand
 */
export const de_CreateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CapacityRegion: __expectString,
    CreationStatus: __expectString,
    IdentityStore: __expectString,
    Name: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateRefreshScheduleCommand
 */
export const de_CreateRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    ScheduleId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoleMembershipCommand
 */
export const de_CreateRoleMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoleMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateTemplateCommand
 */
export const de_CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationStatus: __expectString,
    RequestId: __expectString,
    TemplateId: __expectString,
    VersionArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateTemplateAliasCommand
 */
export const de_CreateTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    TemplateAlias: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateThemeCommand
 */
export const de_CreateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationStatus: __expectString,
    RequestId: __expectString,
    ThemeId: __expectString,
    VersionArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateThemeAliasCommand
 */
export const de_CreateThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    ThemeAlias: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateTopicCommand
 */
export const de_CreateTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RefreshArn: __expectString,
    RequestId: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateTopicRefreshScheduleCommand
 */
export const de_CreateTopicRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasetArn: __expectString,
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateVPCConnectionCommand
 */
export const de_CreateVPCConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AvailabilityStatus: __expectString,
    CreationStatus: __expectString,
    RequestId: __expectString,
    VPCConnectionId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccountCustomizationCommand
 */
export const de_DeleteAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccountSubscriptionCommand
 */
export const de_DeleteAccountSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAnalysisCommand
 */
export const de_DeleteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisId: __expectString,
    Arn: __expectString,
    DeletionTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBrandCommand
 */
export const de_DeleteBrandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBrandAssignmentCommand
 */
export const de_DeleteBrandAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrandAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomPermissionsCommand
 */
export const de_DeleteCustomPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDashboardCommand
 */
export const de_DeleteDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    DashboardId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSetCommand
 */
export const de_DeleteDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    DataSetId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSetRefreshPropertiesCommand
 */
export const de_DeleteDataSetRefreshPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetRefreshPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    DataSourceId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDefaultQBusinessApplicationCommand
 */
export const de_DeleteDefaultQBusinessApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultQBusinessApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFolderCommand
 */
export const de_DeleteFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    FolderId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFolderMembershipCommand
 */
export const de_DeleteFolderMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGroupMembershipCommand
 */
export const de_DeleteGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand
 */
export const de_DeleteIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssignmentName: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIdentityPropagationConfigCommand
 */
export const de_DeleteIdentityPropagationConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPropagationConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNamespaceCommand
 */
export const de_DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRefreshScheduleCommand
 */
export const de_DeleteRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    ScheduleId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoleCustomPermissionCommand
 */
export const de_DeleteRoleCustomPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleCustomPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoleMembershipCommand
 */
export const de_DeleteRoleMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTemplateCommand
 */
export const de_DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    TemplateId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTemplateAliasCommand
 */
export const de_DeleteTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AliasName: __expectString,
    Arn: __expectString,
    RequestId: __expectString,
    TemplateId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThemeCommand
 */
export const de_DeleteThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    ThemeId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThemeAliasCommand
 */
export const de_DeleteThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AliasName: __expectString,
    Arn: __expectString,
    RequestId: __expectString,
    ThemeId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTopicCommand
 */
export const de_DeleteTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTopicRefreshScheduleCommand
 */
export const de_DeleteTopicRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasetArn: __expectString,
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserByPrincipalIdCommand
 */
export const de_DeleteUserByPrincipalIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserByPrincipalIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserCustomPermissionCommand
 */
export const de_DeleteUserCustomPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCustomPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVPCConnectionCommand
 */
export const de_DeleteVPCConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AvailabilityStatus: __expectString,
    DeletionStatus: __expectString,
    RequestId: __expectString,
    VPCConnectionId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountCustomizationCommand
 */
export const de_DescribeAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountCustomization: _json,
    Arn: __expectString,
    AwsAccountId: __expectString,
    Namespace: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountSettingsCommand
 */
export const de_DescribeAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountSettings: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountSubscriptionCommand
 */
export const de_DescribeAccountSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountInfo: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAnalysisCommand
 */
export const de_DescribeAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Analysis: (_) => de_Analysis(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAnalysisDefinitionCommand
 */
export const de_DescribeAnalysisDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisId: __expectString,
    Definition: (_) => de_AnalysisDefinition(_, context),
    Errors: _json,
    Name: __expectString,
    RequestId: __expectString,
    ResourceStatus: __expectString,
    ThemeArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAnalysisPermissionsCommand
 */
export const de_DescribeAnalysisPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisArn: __expectString,
    AnalysisId: __expectString,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetBundleExportJobCommand
 */
export const de_DescribeAssetBundleExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetBundleExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetBundleExportJobId: __expectString,
    AwsAccountId: __expectString,
    CloudFormationOverridePropertyConfiguration: _json,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DownloadUrl: __expectString,
    Errors: _json,
    ExportFormat: __expectString,
    IncludeAllDependencies: __expectBoolean,
    IncludeFolderMembers: __expectString,
    IncludeFolderMemberships: __expectBoolean,
    IncludePermissions: __expectBoolean,
    IncludeTags: __expectBoolean,
    JobStatus: __expectString,
    RequestId: __expectString,
    ResourceArns: _json,
    ValidationStrategy: _json,
    Warnings: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetBundleImportJobCommand
 */
export const de_DescribeAssetBundleImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetBundleImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetBundleImportJobId: __expectString,
    AssetBundleImportSource: _json,
    AwsAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Errors: _json,
    FailureAction: __expectString,
    JobStatus: __expectString,
    OverrideParameters: (_) => de_AssetBundleImportJobOverrideParameters(_, context),
    OverridePermissions: _json,
    OverrideTags: _json,
    OverrideValidationStrategy: _json,
    RequestId: __expectString,
    RollbackErrors: _json,
    Warnings: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBrandCommand
 */
export const de_DescribeBrandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BrandDefinition: _json,
    BrandDetail: (_) => de_BrandDetail(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBrandAssignmentCommand
 */
export const de_DescribeBrandAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrandAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BrandArn: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBrandPublishedVersionCommand
 */
export const de_DescribeBrandPublishedVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrandPublishedVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BrandDefinition: _json,
    BrandDetail: (_) => de_BrandDetail(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCustomPermissionsCommand
 */
export const de_DescribeCustomPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomPermissions: _json,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardCommand
 */
export const de_DescribeDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Dashboard: (_) => de_Dashboard(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardDefinitionCommand
 */
export const de_DescribeDashboardDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardId: __expectString,
    DashboardPublishOptions: _json,
    Definition: (_) => de_DashboardVersionDefinition(_, context),
    Errors: _json,
    Name: __expectString,
    RequestId: __expectString,
    ResourceStatus: __expectString,
    ThemeArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardPermissionsCommand
 */
export const de_DescribeDashboardPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardArn: __expectString,
    DashboardId: __expectString,
    LinkSharingConfiguration: _json,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardSnapshotJobCommand
 */
export const de_DescribeDashboardSnapshotJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardSnapshotJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AwsAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DashboardId: __expectString,
    JobStatus: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequestId: __expectString,
    SnapshotConfiguration: (_) => de_SnapshotConfiguration(_, context),
    SnapshotJobId: __expectString,
    Status: __expectInt32,
    UserConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardSnapshotJobResultCommand
 */
export const de_DescribeDashboardSnapshotJobResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardSnapshotJobResultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorInfo: _json,
    JobStatus: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequestId: __expectString,
    Result: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardsQAConfigurationCommand
 */
export const de_DescribeDashboardsQAConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardsQAConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardsQAStatus: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDataSetCommand
 */
export const de_DescribeDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSet: (_) => de_DataSet(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDataSetPermissionsCommand
 */
export const de_DescribeDataSetPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSetArn: __expectString,
    DataSetId: __expectString,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDataSetRefreshPropertiesCommand
 */
export const de_DescribeDataSetRefreshPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetRefreshPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSetRefreshProperties: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDataSourceCommand
 */
export const de_DescribeDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSource: (_) => de_DataSource(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDataSourcePermissionsCommand
 */
export const de_DescribeDataSourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSourceArn: __expectString,
    DataSourceId: __expectString,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDefaultQBusinessApplicationCommand
 */
export const de_DescribeDefaultQBusinessApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultQBusinessApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFolderCommand
 */
export const de_DescribeFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Folder: (_) => de_Folder(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFolderPermissionsCommand
 */
export const de_DescribeFolderPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    FolderId: __expectString,
    NextToken: __expectString,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFolderResolvedPermissionsCommand
 */
export const de_DescribeFolderResolvedPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderResolvedPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    FolderId: __expectString,
    NextToken: __expectString,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGroupCommand
 */
export const de_DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Group: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGroupMembershipCommand
 */
export const de_DescribeGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupMember: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand
 */
export const de_DescribeIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IAMPolicyAssignment: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIngestionCommand
 */
export const de_DescribeIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Ingestion: (_) => de_Ingestion(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIpRestrictionCommand
 */
export const de_DescribeIpRestrictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpRestrictionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AwsAccountId: __expectString,
    Enabled: __expectBoolean,
    IpRestrictionRuleMap: _json,
    RequestId: __expectString,
    VpcEndpointIdRestrictionRuleMap: _json,
    VpcIdRestrictionRuleMap: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeKeyRegistrationCommand
 */
export const de_DescribeKeyRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AwsAccountId: __expectString,
    KeyRegistration: _json,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNamespaceCommand
 */
export const de_DescribeNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Namespace: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeQPersonalizationConfigurationCommand
 */
export const de_DescribeQPersonalizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQPersonalizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PersonalizationMode: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeQuickSightQSearchConfigurationCommand
 */
export const de_DescribeQuickSightQSearchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuickSightQSearchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    QSearchStatus: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRefreshScheduleCommand
 */
export const de_DescribeRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RefreshSchedule: (_) => de_RefreshSchedule(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRoleCustomPermissionCommand
 */
export const de_DescribeRoleCustomPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRoleCustomPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomPermissionsName: __expectString,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTemplateCommand
 */
export const de_DescribeTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    Template: (_) => de_Template(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTemplateAliasCommand
 */
export const de_DescribeTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    TemplateAlias: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTemplateDefinitionCommand
 */
export const de_DescribeTemplateDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definition: (_) => de_TemplateVersionDefinition(_, context),
    Errors: _json,
    Name: __expectString,
    RequestId: __expectString,
    ResourceStatus: __expectString,
    TemplateId: __expectString,
    ThemeArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTemplatePermissionsCommand
 */
export const de_DescribeTemplatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Permissions: _json,
    RequestId: __expectString,
    TemplateArn: __expectString,
    TemplateId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThemeCommand
 */
export const de_DescribeThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    Theme: (_) => de_Theme(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThemeAliasCommand
 */
export const de_DescribeThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    ThemeAlias: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThemePermissionsCommand
 */
export const de_DescribeThemePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Permissions: _json,
    RequestId: __expectString,
    ThemeArn: __expectString,
    ThemeId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTopicCommand
 */
export const de_DescribeTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CustomInstructions: _json,
    RequestId: __expectString,
    Topic: _json,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTopicPermissionsCommand
 */
export const de_DescribeTopicPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Permissions: _json,
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTopicRefreshCommand
 */
export const de_DescribeTopicRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicRefreshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RefreshDetails: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTopicRefreshScheduleCommand
 */
export const de_DescribeTopicRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTopicRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasetArn: __expectString,
    RefreshSchedule: (_) => de_TopicRefreshSchedule(_, context),
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
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
    RequestId: __expectString,
    User: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVPCConnectionCommand
 */
export const de_DescribeVPCConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVPCConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    Status: __expectInt32,
    VPCConnection: (_) => de_VPCConnection(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand
 */
export const de_GenerateEmbedUrlForAnonymousUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnonymousUserArn: __expectString,
    EmbedUrl: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand
 */
export const de_GenerateEmbedUrlForRegisteredUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmbedUrl: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GenerateEmbedUrlForRegisteredUserWithIdentityCommand
 */
export const de_GenerateEmbedUrlForRegisteredUserWithIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmbedUrl: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GetDashboardEmbedUrlCommand
 */
export const de_GetDashboardEmbedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardEmbedUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmbedUrl: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionEmbedUrlCommand
 */
export const de_GetSessionEmbedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionEmbedUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmbedUrl: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListAnalysesCommand
 */
export const de_ListAnalysesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisSummaryList: (_) => de_AnalysisSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetBundleExportJobsCommand
 */
export const de_ListAssetBundleExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetBundleExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssetBundleExportJobSummaryList: (_) => de_AssetBundleExportJobSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetBundleImportJobsCommand
 */
export const de_ListAssetBundleImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetBundleImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssetBundleImportJobSummaryList: (_) => de_AssetBundleImportJobSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListBrandsCommand
 */
export const de_ListBrandsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrandsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Brands: (_) => de_BrandSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomPermissionsCommand
 */
export const de_ListCustomPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomPermissionsList: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListDashboardsCommand
 */
export const de_ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardSummaryList: (_) => de_DashboardSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListDashboardVersionsCommand
 */
export const de_ListDashboardVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardVersionSummaryList: (_) => de_DashboardVersionSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSetsCommand
 */
export const de_ListDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSetSummaries: (_) => de_DataSetSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSources: (_) => de_DataSourceList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListFolderMembersCommand
 */
export const de_ListFolderMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFolderMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FolderMemberList: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListFoldersCommand
 */
export const de_ListFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FolderSummaryList: (_) => de_FolderSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListFoldersForResourceCommand
 */
export const de_ListFoldersForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFoldersForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Folders: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupMembershipsCommand
 */
export const de_ListGroupMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupMemberList: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupList: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListIAMPolicyAssignmentsCommand
 */
export const de_ListIAMPolicyAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IAMPolicyAssignments: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand
 */
export const de_ListIAMPolicyAssignmentsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ActiveAssignments: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityPropagationConfigsCommand
 */
export const de_ListIdentityPropagationConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPropagationConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    Services: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListIngestionsCommand
 */
export const de_ListIngestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Ingestions: (_) => de_Ingestions(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListNamespacesCommand
 */
export const de_ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Namespaces: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListRefreshSchedulesCommand
 */
export const de_ListRefreshSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRefreshSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RefreshSchedules: (_) => de_RefreshSchedules(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListRoleMembershipsCommand
 */
export const de_ListRoleMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoleMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MembersList: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
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
    RequestId: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateAliasesCommand
 */
export const de_ListTemplateAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    TemplateAliasList: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    TemplateSummaryList: (_) => de_TemplateSummaryList(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateVersionsCommand
 */
export const de_ListTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    TemplateVersionSummaryList: (_) => de_TemplateVersionSummaryList(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListThemeAliasesCommand
 */
export const de_ListThemeAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    ThemeAliasList: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListThemesCommand
 */
export const de_ListThemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    ThemeSummaryList: (_) => de_ThemeSummaryList(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListThemeVersionsCommand
 */
export const de_ListThemeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    ThemeVersionSummaryList: (_) => de_ThemeVersionSummaryList(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListTopicRefreshSchedulesCommand
 */
export const de_ListTopicRefreshSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicRefreshSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RefreshSchedules: (_) => de_TopicRefreshScheduleSummaries(_, context),
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListTopicReviewedAnswersCommand
 */
export const de_ListTopicReviewedAnswersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicReviewedAnswersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Answers: (_) => de_TopicReviewedAnswers(_, context),
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListTopicsCommand
 */
export const de_ListTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    TopicsSummaries: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListUserGroupsCommand
 */
export const de_ListUserGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupList: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
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
    RequestId: __expectString,
    UserList: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListVPCConnectionsCommand
 */
export const de_ListVPCConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    VPCConnectionSummaries: (_) => de_VPCConnectionSummaryList(_, context),
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1PredictQAResultsCommand
 */
export const de_PredictQAResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictQAResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdditionalResults: _json,
    PrimaryResult: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1PutDataSetRefreshPropertiesCommand
 */
export const de_PutDataSetRefreshPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataSetRefreshPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1RegisterUserCommand
 */
export const de_RegisterUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    User: _json,
    UserInvitationUrl: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1RestoreAnalysisCommand
 */
export const de_RestoreAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisId: __expectString,
    Arn: __expectString,
    RequestId: __expectString,
    RestorationFailedFolderArns: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1SearchAnalysesCommand
 */
export const de_SearchAnalysesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAnalysesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisSummaryList: (_) => de_AnalysisSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1SearchDashboardsCommand
 */
export const de_SearchDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardSummaryList: (_) => de_DashboardSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1SearchDataSetsCommand
 */
export const de_SearchDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSetSummaries: (_) => de_DataSetSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1SearchDataSourcesCommand
 */
export const de_SearchDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSourceSummaries: (_) => de_DataSourceSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1SearchFoldersCommand
 */
export const de_SearchFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FolderSummaryList: (_) => de_FolderSummaryList(_, context),
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1SearchGroupsCommand
 */
export const de_SearchGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupList: _json,
    NextToken: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1SearchTopicsCommand
 */
export const de_SearchTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTopicsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RequestId: __expectString,
    TopicSummaryList: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1StartAssetBundleExportJobCommand
 */
export const de_StartAssetBundleExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssetBundleExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetBundleExportJobId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1StartAssetBundleImportJobCommand
 */
export const de_StartAssetBundleImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssetBundleImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AssetBundleImportJobId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1StartDashboardSnapshotJobCommand
 */
export const de_StartDashboardSnapshotJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDashboardSnapshotJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    SnapshotJobId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1StartDashboardSnapshotJobScheduleCommand
 */
export const de_StartDashboardSnapshotJobScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDashboardSnapshotJobScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountCustomizationCommand
 */
export const de_UpdateAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountCustomization: _json,
    Arn: __expectString,
    AwsAccountId: __expectString,
    Namespace: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAnalysisCommand
 */
export const de_UpdateAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisId: __expectString,
    Arn: __expectString,
    RequestId: __expectString,
    UpdateStatus: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAnalysisPermissionsCommand
 */
export const de_UpdateAnalysisPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnalysisArn: __expectString,
    AnalysisId: __expectString,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationWithTokenExchangeGrantCommand
 */
export const de_UpdateApplicationWithTokenExchangeGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationWithTokenExchangeGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrandCommand
 */
export const de_UpdateBrandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BrandDefinition: _json,
    BrandDetail: (_) => de_BrandDetail(_, context),
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrandAssignmentCommand
 */
export const de_UpdateBrandAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrandAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BrandArn: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrandPublishedVersionCommand
 */
export const de_UpdateBrandPublishedVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrandPublishedVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    VersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCustomPermissionsCommand
 */
export const de_UpdateCustomPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDashboardCommand
 */
export const de_UpdateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationStatus: __expectString,
    DashboardId: __expectString,
    RequestId: __expectString,
    Status: __expectInt32,
    VersionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDashboardLinksCommand
 */
export const de_UpdateDashboardLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardArn: __expectString,
    LinkEntities: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDashboardPermissionsCommand
 */
export const de_UpdateDashboardPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardArn: __expectString,
    DashboardId: __expectString,
    LinkSharingConfiguration: _json,
    Permissions: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDashboardPublishedVersionCommand
 */
export const de_UpdateDashboardPublishedVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPublishedVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardArn: __expectString,
    DashboardId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDashboardsQAConfigurationCommand
 */
export const de_UpdateDashboardsQAConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardsQAConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DashboardsQAStatus: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSetCommand
 */
export const de_UpdateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    DataSetId: __expectString,
    IngestionArn: __expectString,
    IngestionId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSetPermissionsCommand
 */
export const de_UpdateDataSetPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSetArn: __expectString,
    DataSetId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    DataSourceId: __expectString,
    RequestId: __expectString,
    UpdateStatus: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSourcePermissionsCommand
 */
export const de_UpdateDataSourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSourceArn: __expectString,
    DataSourceId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDefaultQBusinessApplicationCommand
 */
export const de_UpdateDefaultQBusinessApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultQBusinessApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFolderCommand
 */
export const de_UpdateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    FolderId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFolderPermissionsCommand
 */
export const de_UpdateFolderPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    FolderId: __expectString,
    Permissions: _json,
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Group: _json,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand
 */
export const de_UpdateIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssignmentId: __expectString,
    AssignmentName: __expectString,
    AssignmentStatus: __expectString,
    Identities: _json,
    PolicyArn: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIdentityPropagationConfigCommand
 */
export const de_UpdateIdentityPropagationConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityPropagationConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIpRestrictionCommand
 */
export const de_UpdateIpRestrictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIpRestrictionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AwsAccountId: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKeyRegistrationCommand
 */
export const de_UpdateKeyRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailedKeyRegistration: _json,
    RequestId: __expectString,
    SuccessfulKeyRegistration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePublicSharingSettingsCommand
 */
export const de_UpdatePublicSharingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicSharingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQPersonalizationConfigurationCommand
 */
export const de_UpdateQPersonalizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQPersonalizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PersonalizationMode: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQuickSightQSearchConfigurationCommand
 */
export const de_UpdateQuickSightQSearchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickSightQSearchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    QSearchStatus: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRefreshScheduleCommand
 */
export const de_UpdateRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RequestId: __expectString,
    ScheduleId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoleCustomPermissionCommand
 */
export const de_UpdateRoleCustomPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleCustomPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    Status: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSPICECapacityConfigurationCommand
 */
export const de_UpdateSPICECapacityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSPICECapacityConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTemplateCommand
 */
export const de_UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationStatus: __expectString,
    RequestId: __expectString,
    TemplateId: __expectString,
    VersionArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTemplateAliasCommand
 */
export const de_UpdateTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    TemplateAlias: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTemplatePermissionsCommand
 */
export const de_UpdateTemplatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Permissions: _json,
    RequestId: __expectString,
    TemplateArn: __expectString,
    TemplateId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThemeCommand
 */
export const de_UpdateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationStatus: __expectString,
    RequestId: __expectString,
    ThemeId: __expectString,
    VersionArn: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThemeAliasCommand
 */
export const de_UpdateThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    ThemeAlias: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThemePermissionsCommand
 */
export const de_UpdateThemePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Permissions: _json,
    RequestId: __expectString,
    ThemeArn: __expectString,
    ThemeId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTopicCommand
 */
export const de_UpdateTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTopicCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    RefreshArn: __expectString,
    RequestId: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTopicPermissionsCommand
 */
export const de_UpdateTopicPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTopicPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Permissions: _json,
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTopicRefreshScheduleCommand
 */
export const de_UpdateTopicRefreshScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTopicRefreshScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasetArn: __expectString,
    RequestId: __expectString,
    TopicArn: __expectString,
    TopicId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
    User: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCustomPermissionCommand
 */
export const de_UpdateUserCustomPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCustomPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVPCConnectionCommand
 */
export const de_UpdateVPCConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVPCConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AvailabilityStatus: __expectString,
    RequestId: __expectString,
    UpdateStatus: __expectString,
    VPCConnectionId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    Status: [, output.statusCode],
  });
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
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await de_UnsupportedUserEditionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.quicksight#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.quicksight#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "CustomerManagedKeyUnavailableException":
    case "com.amazonaws.quicksight#CustomerManagedKeyUnavailableException":
      throw await de_CustomerManagedKeyUnavailableExceptionRes(parsedOutput, context);
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      throw await de_ConcurrentUpdatingExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "SessionLifetimeInMinutesInvalidException":
    case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
      throw await de_SessionLifetimeInMinutesInvalidExceptionRes(parsedOutput, context);
    case "UnsupportedPricingPlanException":
    case "com.amazonaws.quicksight#UnsupportedPricingPlanException":
      throw await de_UnsupportedPricingPlanExceptionRes(parsedOutput, context);
    case "QuickSightUserNotFoundException":
    case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
      throw await de_QuickSightUserNotFoundExceptionRes(parsedOutput, context);
    case "DomainNotWhitelistedException":
    case "com.amazonaws.quicksight#DomainNotWhitelistedException":
      throw await de_DomainNotWhitelistedExceptionRes(parsedOutput, context);
    case "IdentityTypeNotSupportedException":
    case "com.amazonaws.quicksight#IdentityTypeNotSupportedException":
      throw await de_IdentityTypeNotSupportedExceptionRes(parsedOutput, context);
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
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentUpdatingExceptionRes
 */
const de_ConcurrentUpdatingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentUpdatingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConcurrentUpdatingException({
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
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CustomerManagedKeyUnavailableExceptionRes
 */
const de_CustomerManagedKeyUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomerManagedKeyUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CustomerManagedKeyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DomainNotWhitelistedExceptionRes
 */
const de_DomainNotWhitelistedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainNotWhitelistedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DomainNotWhitelistedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IdentityTypeNotSupportedExceptionRes
 */
const de_IdentityTypeNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdentityTypeNotSupportedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IdentityTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterValueException({
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
    RequestId: __expectString,
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
    RequestId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PreconditionNotMetExceptionRes
 */
const de_PreconditionNotMetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PreconditionNotMetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1QuickSightUserNotFoundExceptionRes
 */
const de_QuickSightUserNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QuickSightUserNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new QuickSightUserNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceExistsExceptionRes
 */
const de_ResourceExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceExistsException({
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
    RequestId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionRes
 */
const de_SessionLifetimeInMinutesInvalidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionLifetimeInMinutesInvalidException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SessionLifetimeInMinutesInvalidException({
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
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedPricingPlanExceptionRes
 */
const de_UnsupportedPricingPlanExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPricingPlanException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedPricingPlanException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedUserEditionExceptionRes
 */
const de_UnsupportedUserEditionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedUserEditionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedUserEditionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountCustomization omitted.

// se_ActionList omitted.

// se_AdHocFilteringOption omitted.

// se_AggFunction omitted.

// se_AggFunctionParamMap omitted.

/**
 * serializeAws_restJson1AggregationFunction
 */
const se_AggregationFunction = (input: AggregationFunction, context: __SerdeContext): any => {
  return take(input, {
    AttributeAggregationFunction: _json,
    CategoricalAggregationFunction: [],
    DateAggregationFunction: [],
    NumericalAggregationFunction: (_) => se_NumericalAggregationFunction(_, context),
  });
};

// se_AggregationFunctionParameters omitted.

// se_AggregationPartitionBy omitted.

// se_AggregationPartitionByList omitted.

/**
 * serializeAws_restJson1AggregationSortConfiguration
 */
const se_AggregationSortConfiguration = (input: AggregationSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    AggregationFunction: (_) => se_AggregationFunction(_, context),
    Column: _json,
    SortDirection: [],
  });
};

/**
 * serializeAws_restJson1AggregationSortConfigurationList
 */
const se_AggregationSortConfigurationList = (input: AggregationSortConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AggregationSortConfiguration(entry, context);
    });
};

// se_AllSheetsFilterScopeConfiguration omitted.

// se_AmazonElasticsearchParameters omitted.

// se_AmazonOpenSearchParameters omitted.

// se_AmazonQInQuickSightConsoleConfigurations omitted.

// se_AmazonQInQuickSightDashboardConfigurations omitted.

// se_AnalysisDefaults omitted.

/**
 * serializeAws_restJson1AnalysisDefinition
 */
const se_AnalysisDefinition = (input: AnalysisDefinition, context: __SerdeContext): any => {
  return take(input, {
    AnalysisDefaults: _json,
    CalculatedFields: _json,
    ColumnConfigurations: _json,
    DataSetIdentifierDeclarations: _json,
    FilterGroups: (_) => se_FilterGroupList(_, context),
    Options: _json,
    ParameterDeclarations: (_) => se_ParameterDeclarationList(_, context),
    QueryExecutionOptions: _json,
    Sheets: (_) => se_SheetDefinitionList(_, context),
    StaticFiles: _json,
  });
};

// se_AnalysisSearchFilter omitted.

// se_AnalysisSearchFilterList omitted.

// se_AnalysisSourceEntity omitted.

// se_AnalysisSourceTemplate omitted.

// se_Anchor omitted.

// se_AnchorDateConfiguration omitted.

// se_AnonymousUserDashboardEmbeddingConfiguration omitted.

// se_AnonymousUserDashboardEmbeddingConfigurationDisabledFeatures omitted.

// se_AnonymousUserDashboardEmbeddingConfigurationEnabledFeatures omitted.

// se_AnonymousUserDashboardFeatureConfigurations omitted.

// se_AnonymousUserDashboardVisualEmbeddingConfiguration omitted.

// se_AnonymousUserEmbeddingExperienceConfiguration omitted.

// se_AnonymousUserGenerativeQnAEmbeddingConfiguration omitted.

// se_AnonymousUserQSearchBarEmbeddingConfiguration omitted.

// se_AnswerIds omitted.

// se_ApplicationTheme omitted.

/**
 * serializeAws_restJson1ArcAxisConfiguration
 */
const se_ArcAxisConfiguration = (input: ArcAxisConfiguration, context: __SerdeContext): any => {
  return take(input, {
    Range: (_) => se_ArcAxisDisplayRange(_, context),
    ReserveRange: [],
  });
};

/**
 * serializeAws_restJson1ArcAxisDisplayRange
 */
const se_ArcAxisDisplayRange = (input: ArcAxisDisplayRange, context: __SerdeContext): any => {
  return take(input, {
    Max: __serializeFloat,
    Min: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1ArcConfiguration
 */
const se_ArcConfiguration = (input: ArcConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ArcAngle: __serializeFloat,
    ArcThickness: [],
  });
};

// se_ArcOptions omitted.

// se_ArnList omitted.

// se_AssetBundleCloudFormationOverridePropertyConfiguration omitted.

// se_AssetBundleExportJobAnalysisOverrideProperties omitted.

// se_AssetBundleExportJobAnalysisOverridePropertiesList omitted.

// se_AssetBundleExportJobAnalysisPropertyToOverrideList omitted.

// se_AssetBundleExportJobDashboardOverrideProperties omitted.

// se_AssetBundleExportJobDashboardOverridePropertiesList omitted.

// se_AssetBundleExportJobDashboardPropertyToOverrideList omitted.

// se_AssetBundleExportJobDataSetOverrideProperties omitted.

// se_AssetBundleExportJobDataSetOverridePropertiesList omitted.

// se_AssetBundleExportJobDataSetPropertyToOverrideList omitted.

// se_AssetBundleExportJobDataSourceOverrideProperties omitted.

// se_AssetBundleExportJobDataSourceOverridePropertiesList omitted.

// se_AssetBundleExportJobDataSourcePropertyToOverrideList omitted.

// se_AssetBundleExportJobFolderOverrideProperties omitted.

// se_AssetBundleExportJobFolderOverridePropertiesList omitted.

// se_AssetBundleExportJobFolderPropertyToOverrideList omitted.

// se_AssetBundleExportJobRefreshScheduleOverrideProperties omitted.

// se_AssetBundleExportJobRefreshScheduleOverridePropertiesList omitted.

// se_AssetBundleExportJobRefreshSchedulePropertyToOverrideList omitted.

// se_AssetBundleExportJobResourceIdOverrideConfiguration omitted.

// se_AssetBundleExportJobThemeOverrideProperties omitted.

// se_AssetBundleExportJobThemeOverridePropertiesList omitted.

// se_AssetBundleExportJobThemePropertyToOverrideList omitted.

// se_AssetBundleExportJobValidationStrategy omitted.

// se_AssetBundleExportJobVPCConnectionOverrideProperties omitted.

// se_AssetBundleExportJobVPCConnectionOverridePropertiesList omitted.

// se_AssetBundleExportJobVPCConnectionPropertyToOverrideList omitted.

// se_AssetBundleImportJobAnalysisOverrideParameters omitted.

// se_AssetBundleImportJobAnalysisOverrideParametersList omitted.

// se_AssetBundleImportJobAnalysisOverridePermissions omitted.

// se_AssetBundleImportJobAnalysisOverridePermissionsList omitted.

// se_AssetBundleImportJobAnalysisOverrideTags omitted.

// se_AssetBundleImportJobAnalysisOverrideTagsList omitted.

// se_AssetBundleImportJobDashboardOverrideParameters omitted.

// se_AssetBundleImportJobDashboardOverrideParametersList omitted.

// se_AssetBundleImportJobDashboardOverridePermissions omitted.

// se_AssetBundleImportJobDashboardOverridePermissionsList omitted.

// se_AssetBundleImportJobDashboardOverrideTags omitted.

// se_AssetBundleImportJobDashboardOverrideTagsList omitted.

// se_AssetBundleImportJobDataSetOverrideParameters omitted.

// se_AssetBundleImportJobDataSetOverrideParametersList omitted.

// se_AssetBundleImportJobDataSetOverridePermissions omitted.

// se_AssetBundleImportJobDataSetOverridePermissionsList omitted.

// se_AssetBundleImportJobDataSetOverrideTags omitted.

// se_AssetBundleImportJobDataSetOverrideTagsList omitted.

// se_AssetBundleImportJobDataSourceCredentialPair omitted.

// se_AssetBundleImportJobDataSourceCredentials omitted.

// se_AssetBundleImportJobDataSourceOverrideParameters omitted.

// se_AssetBundleImportJobDataSourceOverrideParametersList omitted.

// se_AssetBundleImportJobDataSourceOverridePermissions omitted.

// se_AssetBundleImportJobDataSourceOverridePermissionsList omitted.

// se_AssetBundleImportJobDataSourceOverrideTags omitted.

// se_AssetBundleImportJobDataSourceOverrideTagsList omitted.

// se_AssetBundleImportJobFolderOverrideParameters omitted.

// se_AssetBundleImportJobFolderOverrideParametersList omitted.

// se_AssetBundleImportJobFolderOverridePermissions omitted.

// se_AssetBundleImportJobFolderOverridePermissionsList omitted.

// se_AssetBundleImportJobFolderOverrideTags omitted.

// se_AssetBundleImportJobFolderOverrideTagsList omitted.

/**
 * serializeAws_restJson1AssetBundleImportJobOverrideParameters
 */
const se_AssetBundleImportJobOverrideParameters = (
  input: AssetBundleImportJobOverrideParameters,
  context: __SerdeContext
): any => {
  return take(input, {
    Analyses: _json,
    Dashboards: _json,
    DataSets: _json,
    DataSources: _json,
    Folders: _json,
    RefreshSchedules: (_) => se_AssetBundleImportJobRefreshScheduleOverrideParametersList(_, context),
    ResourceIdOverrideConfiguration: _json,
    Themes: _json,
    VPCConnections: _json,
  });
};

// se_AssetBundleImportJobOverridePermissions omitted.

// se_AssetBundleImportJobOverrideTags omitted.

// se_AssetBundleImportJobOverrideValidationStrategy omitted.

/**
 * serializeAws_restJson1AssetBundleImportJobRefreshScheduleOverrideParameters
 */
const se_AssetBundleImportJobRefreshScheduleOverrideParameters = (
  input: AssetBundleImportJobRefreshScheduleOverrideParameters,
  context: __SerdeContext
): any => {
  return take(input, {
    DataSetId: [],
    ScheduleId: [],
    StartAfterDateTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1AssetBundleImportJobRefreshScheduleOverrideParametersList
 */
const se_AssetBundleImportJobRefreshScheduleOverrideParametersList = (
  input: AssetBundleImportJobRefreshScheduleOverrideParameters[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetBundleImportJobRefreshScheduleOverrideParameters(entry, context);
    });
};

// se_AssetBundleImportJobResourceIdOverrideConfiguration omitted.

// se_AssetBundleImportJobThemeOverrideParameters omitted.

// se_AssetBundleImportJobThemeOverrideParametersList omitted.

// se_AssetBundleImportJobThemeOverridePermissions omitted.

// se_AssetBundleImportJobThemeOverridePermissionsList omitted.

// se_AssetBundleImportJobThemeOverrideTags omitted.

// se_AssetBundleImportJobThemeOverrideTagsList omitted.

// se_AssetBundleImportJobVPCConnectionOverrideParameters omitted.

// se_AssetBundleImportJobVPCConnectionOverrideParametersList omitted.

// se_AssetBundleImportJobVPCConnectionOverrideTags omitted.

// se_AssetBundleImportJobVPCConnectionOverrideTagsList omitted.

/**
 * serializeAws_restJson1AssetBundleImportSource
 */
const se_AssetBundleImportSource = (input: AssetBundleImportSource, context: __SerdeContext): any => {
  return take(input, {
    Body: context.base64Encoder,
    S3Uri: [],
  });
};

// se_AssetBundlePrincipalList omitted.

// se_AssetBundleResourceArns omitted.

// se_AssetBundleResourceLinkSharingConfiguration omitted.

// se_AssetBundleResourcePermissions omitted.

// se_AssetBundleRestrictiveResourceIdList omitted.

// se_AssetOptions omitted.

// se_AthenaParameters omitted.

// se_AttributeAggregationFunction omitted.

// se_AuroraParameters omitted.

// se_AuroraPostgreSqlParameters omitted.

// se_AuthorizedTargetsList omitted.

// se_AuthorSpecifiedAggregations omitted.

// se_AwsIotAnalyticsParameters omitted.

/**
 * serializeAws_restJson1AxisDataOptions
 */
const se_AxisDataOptions = (input: AxisDataOptions, context: __SerdeContext): any => {
  return take(input, {
    DateAxisOptions: _json,
    NumericAxisOptions: (_) => se_NumericAxisOptions(_, context),
  });
};

// se_AxisDisplayDataDrivenRange omitted.

/**
 * serializeAws_restJson1AxisDisplayMinMaxRange
 */
const se_AxisDisplayMinMaxRange = (input: AxisDisplayMinMaxRange, context: __SerdeContext): any => {
  return take(input, {
    Maximum: __serializeFloat,
    Minimum: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1AxisDisplayOptions
 */
const se_AxisDisplayOptions = (input: AxisDisplayOptions, context: __SerdeContext): any => {
  return take(input, {
    AxisLineVisibility: [],
    AxisOffset: [],
    DataOptions: (_) => se_AxisDataOptions(_, context),
    GridLineVisibility: [],
    ScrollbarOptions: (_) => se_ScrollBarOptions(_, context),
    TickLabelOptions: (_) => se_AxisTickLabelOptions(_, context),
  });
};

/**
 * serializeAws_restJson1AxisDisplayRange
 */
const se_AxisDisplayRange = (input: AxisDisplayRange, context: __SerdeContext): any => {
  return take(input, {
    DataDriven: _json,
    MinMax: (_) => se_AxisDisplayMinMaxRange(_, context),
  });
};

// se_AxisLabelOptions omitted.

// se_AxisLabelOptionsList omitted.

// se_AxisLabelReferenceOptions omitted.

/**
 * serializeAws_restJson1AxisLinearScale
 */
const se_AxisLinearScale = (input: AxisLinearScale, context: __SerdeContext): any => {
  return take(input, {
    StepCount: [],
    StepSize: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1AxisLogarithmicScale
 */
const se_AxisLogarithmicScale = (input: AxisLogarithmicScale, context: __SerdeContext): any => {
  return take(input, {
    Base: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1AxisScale
 */
const se_AxisScale = (input: AxisScale, context: __SerdeContext): any => {
  return take(input, {
    Linear: (_) => se_AxisLinearScale(_, context),
    Logarithmic: (_) => se_AxisLogarithmicScale(_, context),
  });
};

/**
 * serializeAws_restJson1AxisTickLabelOptions
 */
const se_AxisTickLabelOptions = (input: AxisTickLabelOptions, context: __SerdeContext): any => {
  return take(input, {
    LabelOptions: _json,
    RotationAngle: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1BarChartAggregatedFieldWells
 */
const se_BarChartAggregatedFieldWells = (input: BarChartAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Category: _json,
    Colors: _json,
    SmallMultiples: _json,
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1BarChartConfiguration
 */
const se_BarChartConfiguration = (input: BarChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    BarsArrangement: [],
    CategoryAxis: (_) => se_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    ColorLabelOptions: _json,
    ContributionAnalysisDefaults: _json,
    DataLabels: _json,
    FieldWells: (_) => se_BarChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    Orientation: [],
    ReferenceLines: (_) => se_ReferenceLineList(_, context),
    SmallMultiplesOptions: _json,
    SortConfiguration: (_) => se_BarChartSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
    ValueAxis: (_) => se_AxisDisplayOptions(_, context),
    ValueLabelOptions: _json,
    VisualPalette: _json,
  });
};

/**
 * serializeAws_restJson1BarChartFieldWells
 */
const se_BarChartFieldWells = (input: BarChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    BarChartAggregatedFieldWells: (_) => se_BarChartAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1BarChartSortConfiguration
 */
const se_BarChartSortConfiguration = (input: BarChartSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryItemsLimit: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
    ColorItemsLimit: _json,
    ColorSort: (_) => se_FieldSortOptionsList(_, context),
    SmallMultiplesLimitConfiguration: _json,
    SmallMultiplesSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1BarChartVisual
 */
const se_BarChartVisual = (input: BarChartVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_BarChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_BigQueryParameters omitted.

// se_BinCountOptions omitted.

/**
 * serializeAws_restJson1BinWidthOptions
 */
const se_BinWidthOptions = (input: BinWidthOptions, context: __SerdeContext): any => {
  return take(input, {
    BinCountLimit: [],
    Value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1BodySectionConfiguration
 */
const se_BodySectionConfiguration = (input: BodySectionConfiguration, context: __SerdeContext): any => {
  return take(input, {
    Content: _json,
    PageBreakConfiguration: _json,
    RepeatConfiguration: (_) => se_BodySectionRepeatConfiguration(_, context),
    SectionId: [],
    Style: _json,
  });
};

/**
 * serializeAws_restJson1BodySectionConfigurationList
 */
const se_BodySectionConfigurationList = (input: BodySectionConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BodySectionConfiguration(entry, context);
    });
};

// se_BodySectionContent omitted.

/**
 * serializeAws_restJson1BodySectionDynamicCategoryDimensionConfiguration
 */
const se_BodySectionDynamicCategoryDimensionConfiguration = (
  input: BodySectionDynamicCategoryDimensionConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    Column: _json,
    Limit: [],
    SortByMetrics: (_) => se_BodySectionDynamicDimensionSortConfigurationList(_, context),
  });
};

/**
 * serializeAws_restJson1BodySectionDynamicDimensionSortConfigurationList
 */
const se_BodySectionDynamicDimensionSortConfigurationList = (input: ColumnSort[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ColumnSort(entry, context);
    });
};

/**
 * serializeAws_restJson1BodySectionDynamicNumericDimensionConfiguration
 */
const se_BodySectionDynamicNumericDimensionConfiguration = (
  input: BodySectionDynamicNumericDimensionConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    Column: _json,
    Limit: [],
    SortByMetrics: (_) => se_BodySectionDynamicDimensionSortConfigurationList(_, context),
  });
};

/**
 * serializeAws_restJson1BodySectionRepeatConfiguration
 */
const se_BodySectionRepeatConfiguration = (input: BodySectionRepeatConfiguration, context: __SerdeContext): any => {
  return take(input, {
    DimensionConfigurations: (_) => se_BodySectionRepeatDimensionConfigurationList(_, context),
    NonRepeatingVisuals: _json,
    PageBreakConfiguration: _json,
  });
};

/**
 * serializeAws_restJson1BodySectionRepeatDimensionConfiguration
 */
const se_BodySectionRepeatDimensionConfiguration = (
  input: BodySectionRepeatDimensionConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    DynamicCategoryDimensionConfiguration: (_) => se_BodySectionDynamicCategoryDimensionConfiguration(_, context),
    DynamicNumericDimensionConfiguration: (_) => se_BodySectionDynamicNumericDimensionConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1BodySectionRepeatDimensionConfigurationList
 */
const se_BodySectionRepeatDimensionConfigurationList = (
  input: BodySectionRepeatDimensionConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BodySectionRepeatDimensionConfiguration(entry, context);
    });
};

// se_BodySectionRepeatPageBreakConfiguration omitted.

// se_BookmarksConfigurations omitted.

// se_BorderStyle omitted.

/**
 * serializeAws_restJson1BoxPlotAggregatedFieldWells
 */
const se_BoxPlotAggregatedFieldWells = (input: BoxPlotAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    GroupBy: _json,
    Values: (_) => se_BoxPlotMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1BoxPlotChartConfiguration
 */
const se_BoxPlotChartConfiguration = (input: BoxPlotChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    BoxPlotOptions: _json,
    CategoryAxis: (_) => se_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    FieldWells: (_) => se_BoxPlotFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    PrimaryYAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    ReferenceLines: (_) => se_ReferenceLineList(_, context),
    SortConfiguration: (_) => se_BoxPlotSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
    VisualPalette: _json,
  });
};

// se_BoxPlotDimensionFieldList omitted.

/**
 * serializeAws_restJson1BoxPlotFieldWells
 */
const se_BoxPlotFieldWells = (input: BoxPlotFieldWells, context: __SerdeContext): any => {
  return take(input, {
    BoxPlotAggregatedFieldWells: (_) => se_BoxPlotAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1BoxPlotMeasureFieldList
 */
const se_BoxPlotMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

// se_BoxPlotOptions omitted.

/**
 * serializeAws_restJson1BoxPlotSortConfiguration
 */
const se_BoxPlotSortConfiguration = (input: BoxPlotSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
    PaginationConfiguration: _json,
  });
};

// se_BoxPlotStyleOptions omitted.

/**
 * serializeAws_restJson1BoxPlotVisual
 */
const se_BoxPlotVisual = (input: BoxPlotVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_BoxPlotChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_BrandColorPalette omitted.

// se_BrandDefinition omitted.

// se_BrandElementStyle omitted.

// se_CalculatedColumn omitted.

// se_CalculatedColumnList omitted.

// se_CalculatedField omitted.

// se_CalculatedFieldReferenceList omitted.

// se_CalculatedFields omitted.

// se_CalculatedMeasureField omitted.

// se_Capabilities omitted.

// se_CascadingControlConfiguration omitted.

// se_CascadingControlSource omitted.

// se_CascadingControlSourceList omitted.

// se_CastColumnTypeOperation omitted.

// se_CategoricalDimensionField omitted.

// se_CategoricalMeasureField omitted.

// se_CategoryDrillDownFilter omitted.

/**
 * serializeAws_restJson1CategoryFilter
 */
const se_CategoryFilter = (input: CategoryFilter, context: __SerdeContext): any => {
  return take(input, {
    Column: _json,
    Configuration: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
    FilterId: [],
  });
};

// se_CategoryFilterConfiguration omitted.

/**
 * serializeAws_restJson1CategoryInnerFilter
 */
const se_CategoryInnerFilter = (input: CategoryInnerFilter, context: __SerdeContext): any => {
  return take(input, {
    Column: _json,
    Configuration: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
  });
};

// se_CategoryValueList omitted.

// se_CellValueSynonym omitted.

// se_CellValueSynonyms omitted.

// se_ChartAxisLabelOptions omitted.

// se_ClusterMarker omitted.

// se_ClusterMarkerConfiguration omitted.

// se_CollectiveConstant omitted.

// se_CollectiveConstantEntry omitted.

// se_CollectiveConstantEntryList omitted.

// se_ColorList omitted.

/**
 * serializeAws_restJson1ColorScale
 */
const se_ColorScale = (input: ColorScale, context: __SerdeContext): any => {
  return take(input, {
    ColorFillType: [],
    Colors: (_) => se_ColorScaleColorList(_, context),
    NullValueColor: (_) => se_DataColor(_, context),
  });
};

/**
 * serializeAws_restJson1ColorScaleColorList
 */
const se_ColorScaleColorList = (input: DataColor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataColor(entry, context);
    });
};

// se_ColorsConfiguration omitted.

// se_ColumnConfiguration omitted.

// se_ColumnConfigurationList omitted.

// se_ColumnDescription omitted.

// se_ColumnGroup omitted.

// se_ColumnGroupColumnSchema omitted.

// se_ColumnGroupColumnSchemaList omitted.

// se_ColumnGroupList omitted.

// se_ColumnGroupSchema omitted.

// se_ColumnGroupSchemaList omitted.

/**
 * serializeAws_restJson1ColumnHierarchy
 */
const se_ColumnHierarchy = (input: ColumnHierarchy, context: __SerdeContext): any => {
  return take(input, {
    DateTimeHierarchy: (_) => se_DateTimeHierarchy(_, context),
    ExplicitHierarchy: (_) => se_ExplicitHierarchy(_, context),
    PredefinedHierarchy: (_) => se_PredefinedHierarchy(_, context),
  });
};

/**
 * serializeAws_restJson1ColumnHierarchyList
 */
const se_ColumnHierarchyList = (input: ColumnHierarchy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ColumnHierarchy(entry, context);
    });
};

// se_ColumnIdentifier omitted.

// se_ColumnLevelPermissionRule omitted.

// se_ColumnLevelPermissionRuleList omitted.

// se_ColumnList omitted.

// se_ColumnNameList omitted.

// se_ColumnSchema omitted.

// se_ColumnSchemaList omitted.

/**
 * serializeAws_restJson1ColumnSort
 */
const se_ColumnSort = (input: ColumnSort, context: __SerdeContext): any => {
  return take(input, {
    AggregationFunction: (_) => se_AggregationFunction(_, context),
    Direction: [],
    SortBy: _json,
  });
};

// se_ColumnTag omitted.

// se_ColumnTagList omitted.

// se_ColumnTagNames omitted.

/**
 * serializeAws_restJson1ColumnTooltipItem
 */
const se_ColumnTooltipItem = (input: ColumnTooltipItem, context: __SerdeContext): any => {
  return take(input, {
    Aggregation: (_) => se_AggregationFunction(_, context),
    Column: _json,
    Label: [],
    TooltipTarget: [],
    Visibility: [],
  });
};

/**
 * serializeAws_restJson1ComboChartAggregatedFieldWells
 */
const se_ComboChartAggregatedFieldWells = (input: ComboChartAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    BarValues: (_) => se_MeasureFieldList(_, context),
    Category: _json,
    Colors: _json,
    LineValues: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1ComboChartConfiguration
 */
const se_ComboChartConfiguration = (input: ComboChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    BarDataLabels: _json,
    BarsArrangement: [],
    CategoryAxis: (_) => se_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    ColorLabelOptions: _json,
    FieldWells: (_) => se_ComboChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    LineDataLabels: _json,
    PrimaryYAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    ReferenceLines: (_) => se_ReferenceLineList(_, context),
    SecondaryYAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    SecondaryYAxisLabelOptions: _json,
    SingleAxisOptions: _json,
    SortConfiguration: (_) => se_ComboChartSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
    VisualPalette: _json,
  });
};

/**
 * serializeAws_restJson1ComboChartFieldWells
 */
const se_ComboChartFieldWells = (input: ComboChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    ComboChartAggregatedFieldWells: (_) => se_ComboChartAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1ComboChartSortConfiguration
 */
const se_ComboChartSortConfiguration = (input: ComboChartSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryItemsLimit: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
    ColorItemsLimit: _json,
    ColorSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1ComboChartVisual
 */
const se_ComboChartVisual = (input: ComboChartVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_ComboChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_ComparativeOrder omitted.

// se_ComparisonConfiguration omitted.

// se_ComparisonFormatConfiguration omitted.

/**
 * serializeAws_restJson1Computation
 */
const se_Computation = (input: Computation, context: __SerdeContext): any => {
  return take(input, {
    Forecast: (_) => se_ForecastComputation(_, context),
    GrowthRate: (_) => se_GrowthRateComputation(_, context),
    MaximumMinimum: (_) => se_MaximumMinimumComputation(_, context),
    MetricComparison: (_) => se_MetricComparisonComputation(_, context),
    PeriodOverPeriod: (_) => se_PeriodOverPeriodComputation(_, context),
    PeriodToDate: (_) => se_PeriodToDateComputation(_, context),
    TopBottomMovers: (_) => se_TopBottomMoversComputation(_, context),
    TopBottomRanked: (_) => se_TopBottomRankedComputation(_, context),
    TotalAggregation: (_) => se_TotalAggregationComputation(_, context),
    UniqueValues: _json,
  });
};

/**
 * serializeAws_restJson1ComputationList
 */
const se_ComputationList = (input: Computation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Computation(entry, context);
    });
};

/**
 * serializeAws_restJson1ConditionalFormattingColor
 */
const se_ConditionalFormattingColor = (input: ConditionalFormattingColor, context: __SerdeContext): any => {
  return take(input, {
    Gradient: (_) => se_ConditionalFormattingGradientColor(_, context),
    Solid: _json,
  });
};

// se_ConditionalFormattingCustomIconCondition omitted.

// se_ConditionalFormattingCustomIconOptions omitted.

/**
 * serializeAws_restJson1ConditionalFormattingGradientColor
 */
const se_ConditionalFormattingGradientColor = (
  input: ConditionalFormattingGradientColor,
  context: __SerdeContext
): any => {
  return take(input, {
    Color: (_) => se_GradientColor(_, context),
    Expression: [],
  });
};

// se_ConditionalFormattingIcon omitted.

// se_ConditionalFormattingIconDisplayConfiguration omitted.

// se_ConditionalFormattingIconSet omitted.

// se_ConditionalFormattingSolidColor omitted.

// se_ContextMenuOption omitted.

// se_ContributionAnalysisDefault omitted.

// se_ContributionAnalysisDefaultList omitted.

// se_ContributionAnalysisFactor omitted.

// se_ContributionAnalysisFactorsList omitted.

// se_ContributionAnalysisTimeRanges omitted.

// se_ContributorDimensionList omitted.

// se_CreateColumnsOperation omitted.

/**
 * serializeAws_restJson1CreateTopicReviewedAnswer
 */
const se_CreateTopicReviewedAnswer = (input: CreateTopicReviewedAnswer, context: __SerdeContext): any => {
  return take(input, {
    AnswerId: [],
    DatasetArn: [],
    Mir: _json,
    PrimaryVisual: (_) => se_TopicVisual(_, context),
    Question: [],
    Template: _json,
  });
};

/**
 * serializeAws_restJson1CreateTopicReviewedAnswers
 */
const se_CreateTopicReviewedAnswers = (input: CreateTopicReviewedAnswer[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateTopicReviewedAnswer(entry, context);
    });
};

// se_CredentialPair omitted.

// se_CurrencyDisplayFormatConfiguration omitted.

// se_CustomActionColumnList omitted.

// se_CustomActionFilterOperation omitted.

// se_CustomActionNavigationOperation omitted.

/**
 * serializeAws_restJson1CustomActionSetParametersOperation
 */
const se_CustomActionSetParametersOperation = (
  input: CustomActionSetParametersOperation,
  context: __SerdeContext
): any => {
  return take(input, {
    ParameterValueConfigurations: (_) => se_SetParameterValueConfigurationList(_, context),
  });
};

// se_CustomActionURLOperation omitted.

// se_CustomColor omitted.

// se_CustomColorsList omitted.

// se_CustomContentConfiguration omitted.

/**
 * serializeAws_restJson1CustomContentVisual
 */
const se_CustomContentVisual = (input: CustomContentVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: _json,
    DataSetIdentifier: [],
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_CustomFilterConfiguration omitted.

// se_CustomFilterListConfiguration omitted.

// se_CustomInstructions omitted.

// se_CustomNarrativeOptions omitted.

/**
 * serializeAws_restJson1CustomParameterValues
 */
const se_CustomParameterValues = (input: CustomParameterValues, context: __SerdeContext): any => {
  return take(input, {
    DateTimeValues: (_) => se_DateTimeDefaultValueList(_, context),
    DecimalValues: (_) => se_DecimalDefaultValueList(_, context),
    IntegerValues: _json,
    StringValues: _json,
  });
};

// se_CustomSql omitted.

/**
 * serializeAws_restJson1CustomValuesConfiguration
 */
const se_CustomValuesConfiguration = (input: CustomValuesConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CustomValues: (_) => se_CustomParameterValues(_, context),
    IncludeNullValue: [],
  });
};

// se_DashboardPublishOptions omitted.

// se_DashboardSearchFilter omitted.

// se_DashboardSearchFilterList omitted.

// se_DashboardSourceEntity omitted.

// se_DashboardSourceTemplate omitted.

/**
 * serializeAws_restJson1DashboardVersionDefinition
 */
const se_DashboardVersionDefinition = (input: DashboardVersionDefinition, context: __SerdeContext): any => {
  return take(input, {
    AnalysisDefaults: _json,
    CalculatedFields: _json,
    ColumnConfigurations: _json,
    DataSetIdentifierDeclarations: _json,
    FilterGroups: (_) => se_FilterGroupList(_, context),
    Options: _json,
    ParameterDeclarations: (_) => se_ParameterDeclarationList(_, context),
    Sheets: (_) => se_SheetDefinitionList(_, context),
    StaticFiles: _json,
  });
};

// se_DashboardVisualId omitted.

// se_DashboardVisualPublishOptions omitted.

// se_DataAggregation omitted.

// se_DataBarsOptions omitted.

// se_DatabaseGroupList omitted.

// se_DatabricksParameters omitted.

/**
 * serializeAws_restJson1DataColor
 */
const se_DataColor = (input: DataColor, context: __SerdeContext): any => {
  return take(input, {
    Color: [],
    DataValue: __serializeFloat,
  });
};

// se_DataColorPalette omitted.

// se_DataFieldSeriesItem omitted.

// se_DataLabelOptions omitted.

// se_DataLabelType omitted.

// se_DataLabelTypes omitted.

// se_DataPathColor omitted.

// se_DataPathColorList omitted.

// se_DataPathLabelType omitted.

// se_DataPathSort omitted.

// se_DataPathType omitted.

// se_DataPathValue omitted.

// se_DataPathValueList omitted.

// se_DataPointDrillUpDownOption omitted.

// se_DataPointMenuLabelOption omitted.

// se_DataPointTooltipOption omitted.

// se_DataQAEnabledOption omitted.

// se_DataQnAConfigurations omitted.

// se_DataSetArnsList omitted.

// se_DataSetConfiguration omitted.

// se_DataSetConfigurationList omitted.

// se_DataSetIdentifierDeclaration omitted.

// se_DataSetIdentifierDeclarationList omitted.

// se_DatasetMetadata omitted.

/**
 * serializeAws_restJson1DatasetParameter
 */
const se_DatasetParameter = (input: DatasetParameter, context: __SerdeContext): any => {
  return take(input, {
    DateTimeDatasetParameter: (_) => se_DateTimeDatasetParameter(_, context),
    DecimalDatasetParameter: (_) => se_DecimalDatasetParameter(_, context),
    IntegerDatasetParameter: _json,
    StringDatasetParameter: _json,
  });
};

/**
 * serializeAws_restJson1DatasetParameterList
 */
const se_DatasetParameterList = (input: DatasetParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DatasetParameter(entry, context);
    });
};

// se_DataSetReference omitted.

// se_DataSetReferenceList omitted.

// se_DataSetRefreshProperties omitted.

// se_Datasets omitted.

// se_DataSetSchema omitted.

// se_DataSetSearchFilter omitted.

// se_DataSetSearchFilterList omitted.

// se_DataSetUsageConfiguration omitted.

// se_DataSourceCredentials omitted.

// se_DataSourceParameters omitted.

// se_DataSourceParametersList omitted.

// se_DataSourceSearchFilter omitted.

// se_DataSourceSearchFilterList omitted.

// se_DataStoriesConfigurations omitted.

// se_DateAxisOptions omitted.

// se_DateDimensionField omitted.

// se_DateMeasureField omitted.

/**
 * serializeAws_restJson1DateTimeDatasetParameter
 */
const se_DateTimeDatasetParameter = (input: DateTimeDatasetParameter, context: __SerdeContext): any => {
  return take(input, {
    DefaultValues: (_) => se_DateTimeDatasetParameterDefaultValues(_, context),
    Id: [],
    Name: [],
    TimeGranularity: [],
    ValueType: [],
  });
};

/**
 * serializeAws_restJson1DateTimeDatasetParameterDefaultValues
 */
const se_DateTimeDatasetParameterDefaultValues = (
  input: DateTimeDatasetParameterDefaultValues,
  context: __SerdeContext
): any => {
  return take(input, {
    StaticValues: (_) => se_DateTimeDatasetParameterValueList(_, context),
  });
};

/**
 * serializeAws_restJson1DateTimeDatasetParameterValueList
 */
const se_DateTimeDatasetParameterValueList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry.getTime() / 1_000;
    });
};

/**
 * serializeAws_restJson1DateTimeDefaultValueList
 */
const se_DateTimeDefaultValueList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry.getTime() / 1_000;
    });
};

/**
 * serializeAws_restJson1DateTimeDefaultValues
 */
const se_DateTimeDefaultValues = (input: DateTimeDefaultValues, context: __SerdeContext): any => {
  return take(input, {
    DynamicValue: _json,
    RollingDate: _json,
    StaticValues: (_) => se_DateTimeDefaultValueList(_, context),
  });
};

// se_DateTimeFormatConfiguration omitted.

/**
 * serializeAws_restJson1DateTimeHierarchy
 */
const se_DateTimeHierarchy = (input: DateTimeHierarchy, context: __SerdeContext): any => {
  return take(input, {
    DrillDownFilters: (_) => se_DrillDownFilterList(_, context),
    HierarchyId: [],
  });
};

/**
 * serializeAws_restJson1DateTimeParameter
 */
const se_DateTimeParameter = (input: DateTimeParameter, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    Values: (_) => se_SensitiveTimestampList(_, context),
  });
};

/**
 * serializeAws_restJson1DateTimeParameterDeclaration
 */
const se_DateTimeParameterDeclaration = (input: DateTimeParameterDeclaration, context: __SerdeContext): any => {
  return take(input, {
    DefaultValues: (_) => se_DateTimeDefaultValues(_, context),
    MappedDataSetParameters: _json,
    Name: [],
    TimeGranularity: [],
    ValueWhenUnset: (_) => se_DateTimeValueWhenUnsetConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1DateTimeParameterList
 */
const se_DateTimeParameterList = (input: DateTimeParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DateTimeParameter(entry, context);
    });
};

// se_DateTimePickerControlDisplayOptions omitted.

/**
 * serializeAws_restJson1DateTimeValueWhenUnsetConfiguration
 */
const se_DateTimeValueWhenUnsetConfiguration = (
  input: DateTimeValueWhenUnsetConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    CustomValue: (_) => _.getTime() / 1_000,
    ValueWhenUnsetOption: [],
  });
};

/**
 * serializeAws_restJson1DecimalDatasetParameter
 */
const se_DecimalDatasetParameter = (input: DecimalDatasetParameter, context: __SerdeContext): any => {
  return take(input, {
    DefaultValues: (_) => se_DecimalDatasetParameterDefaultValues(_, context),
    Id: [],
    Name: [],
    ValueType: [],
  });
};

/**
 * serializeAws_restJson1DecimalDatasetParameterDefaultValues
 */
const se_DecimalDatasetParameterDefaultValues = (
  input: DecimalDatasetParameterDefaultValues,
  context: __SerdeContext
): any => {
  return take(input, {
    StaticValues: (_) => se_DecimalDatasetParameterValueList(_, context),
  });
};

/**
 * serializeAws_restJson1DecimalDatasetParameterValueList
 */
const se_DecimalDatasetParameterValueList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * serializeAws_restJson1DecimalDefaultValueList
 */
const se_DecimalDefaultValueList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * serializeAws_restJson1DecimalDefaultValues
 */
const se_DecimalDefaultValues = (input: DecimalDefaultValues, context: __SerdeContext): any => {
  return take(input, {
    DynamicValue: _json,
    StaticValues: (_) => se_DecimalDefaultValueList(_, context),
  });
};

/**
 * serializeAws_restJson1DecimalParameter
 */
const se_DecimalParameter = (input: DecimalParameter, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    Values: (_) => se_SensitiveDoubleList(_, context),
  });
};

/**
 * serializeAws_restJson1DecimalParameterDeclaration
 */
const se_DecimalParameterDeclaration = (input: DecimalParameterDeclaration, context: __SerdeContext): any => {
  return take(input, {
    DefaultValues: (_) => se_DecimalDefaultValues(_, context),
    MappedDataSetParameters: _json,
    Name: [],
    ParameterValueType: [],
    ValueWhenUnset: (_) => se_DecimalValueWhenUnsetConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1DecimalParameterList
 */
const se_DecimalParameterList = (input: DecimalParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DecimalParameter(entry, context);
    });
};

// se_DecimalPlacesConfiguration omitted.

/**
 * serializeAws_restJson1DecimalValueWhenUnsetConfiguration
 */
const se_DecimalValueWhenUnsetConfiguration = (
  input: DecimalValueWhenUnsetConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    CustomValue: __serializeFloat,
    ValueWhenUnsetOption: [],
  });
};

// se_DefaultDateTimePickerControlOptions omitted.

/**
 * serializeAws_restJson1DefaultFilterControlConfiguration
 */
const se_DefaultFilterControlConfiguration = (
  input: DefaultFilterControlConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    ControlOptions: (_) => se_DefaultFilterControlOptions(_, context),
    Title: [],
  });
};

/**
 * serializeAws_restJson1DefaultFilterControlOptions
 */
const se_DefaultFilterControlOptions = (input: DefaultFilterControlOptions, context: __SerdeContext): any => {
  return take(input, {
    DefaultDateTimePickerOptions: _json,
    DefaultDropdownOptions: _json,
    DefaultListOptions: _json,
    DefaultRelativeDateTimeOptions: _json,
    DefaultSliderOptions: (_) => se_DefaultSliderControlOptions(_, context),
    DefaultTextAreaOptions: _json,
    DefaultTextFieldOptions: _json,
  });
};

// se_DefaultFilterDropDownControlOptions omitted.

// se_DefaultFilterListControlOptions omitted.

// se_DefaultFormatting omitted.

// se_DefaultFreeFormLayoutConfiguration omitted.

// se_DefaultGridLayoutConfiguration omitted.

// se_DefaultInteractiveLayoutConfiguration omitted.

// se_DefaultNewSheetConfiguration omitted.

// se_DefaultPaginatedLayoutConfiguration omitted.

// se_DefaultRelativeDateTimeControlOptions omitted.

// se_DefaultSectionBasedLayoutConfiguration omitted.

/**
 * serializeAws_restJson1DefaultSliderControlOptions
 */
const se_DefaultSliderControlOptions = (input: DefaultSliderControlOptions, context: __SerdeContext): any => {
  return take(input, {
    DisplayOptions: _json,
    MaximumValue: __serializeFloat,
    MinimumValue: __serializeFloat,
    StepSize: __serializeFloat,
    Type: [],
  });
};

// se_DefaultTextAreaControlOptions omitted.

// se_DefaultTextFieldControlOptions omitted.

/**
 * serializeAws_restJson1DestinationParameterValueConfiguration
 */
const se_DestinationParameterValueConfiguration = (
  input: DestinationParameterValueConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    CustomValuesConfiguration: (_) => se_CustomValuesConfiguration(_, context),
    SelectAllValueOptions: [],
    SourceColumn: _json,
    SourceField: [],
    SourceParameterName: [],
  });
};

// se_DimensionField omitted.

// se_DimensionFieldList omitted.

// se_DisplayFormatOptions omitted.

// se_DnsResolverList omitted.

// se_DonutCenterOptions omitted.

// se_DonutOptions omitted.

/**
 * serializeAws_restJson1DrillDownFilter
 */
const se_DrillDownFilter = (input: DrillDownFilter, context: __SerdeContext): any => {
  return take(input, {
    CategoryFilter: _json,
    NumericEqualityFilter: (_) => se_NumericEqualityDrillDownFilter(_, context),
    TimeRangeFilter: (_) => se_TimeRangeDrillDownFilter(_, context),
  });
};

/**
 * serializeAws_restJson1DrillDownFilterList
 */
const se_DrillDownFilterList = (input: DrillDownFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DrillDownFilter(entry, context);
    });
};

// se_DropDownControlDisplayOptions omitted.

// se_DynamicDefaultValue omitted.

/**
 * serializeAws_restJson1EmptyVisual
 */
const se_EmptyVisual = (input: EmptyVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    DataSetIdentifier: [],
    VisualId: [],
  });
};

// se_ExasolParameters omitted.

// se_ExcludePeriodConfiguration omitted.

// se_ExecutiveSummaryConfigurations omitted.

/**
 * serializeAws_restJson1ExplicitHierarchy
 */
const se_ExplicitHierarchy = (input: ExplicitHierarchy, context: __SerdeContext): any => {
  return take(input, {
    Columns: _json,
    DrillDownFilters: (_) => se_DrillDownFilterList(_, context),
    HierarchyId: [],
  });
};

// se_ExplicitHierarchyColumnList omitted.

// se_ExportHiddenFieldsOption omitted.

// se_ExportToCSVOption omitted.

// se_ExportWithHiddenFieldsOption omitted.

/**
 * serializeAws_restJson1FieldBasedTooltip
 */
const se_FieldBasedTooltip = (input: FieldBasedTooltip, context: __SerdeContext): any => {
  return take(input, {
    AggregationVisibility: [],
    TooltipFields: (_) => se_TooltipItemList(_, context),
    TooltipTitleType: [],
  });
};

// se_FieldFolder omitted.

// se_FieldFolderMap omitted.

// se_FieldLabelType omitted.

// se_FieldOrderList omitted.

// se_FieldSeriesItem omitted.

// se_FieldSort omitted.

/**
 * serializeAws_restJson1FieldSortOptions
 */
const se_FieldSortOptions = (input: FieldSortOptions, context: __SerdeContext): any => {
  return take(input, {
    ColumnSort: (_) => se_ColumnSort(_, context),
    FieldSort: _json,
  });
};

/**
 * serializeAws_restJson1FieldSortOptionsList
 */
const se_FieldSortOptionsList = (input: FieldSortOptions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldSortOptions(entry, context);
    });
};

// se_FieldTooltipItem omitted.

/**
 * serializeAws_restJson1FilledMapAggregatedFieldWells
 */
const se_FilledMapAggregatedFieldWells = (input: FilledMapAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Geospatial: _json,
    Values: (_) => se_FilledMapMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1FilledMapConditionalFormatting
 */
const se_FilledMapConditionalFormatting = (input: FilledMapConditionalFormatting, context: __SerdeContext): any => {
  return take(input, {
    ConditionalFormattingOptions: (_) => se_FilledMapConditionalFormattingOptionList(_, context),
  });
};

/**
 * serializeAws_restJson1FilledMapConditionalFormattingOption
 */
const se_FilledMapConditionalFormattingOption = (
  input: FilledMapConditionalFormattingOption,
  context: __SerdeContext
): any => {
  return take(input, {
    Shape: (_) => se_FilledMapShapeConditionalFormatting(_, context),
  });
};

/**
 * serializeAws_restJson1FilledMapConditionalFormattingOptionList
 */
const se_FilledMapConditionalFormattingOptionList = (
  input: FilledMapConditionalFormattingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilledMapConditionalFormattingOption(entry, context);
    });
};

/**
 * serializeAws_restJson1FilledMapConfiguration
 */
const se_FilledMapConfiguration = (input: FilledMapConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FieldWells: (_) => se_FilledMapFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    MapStyleOptions: _json,
    SortConfiguration: (_) => se_FilledMapSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
    WindowOptions: (_) => se_GeospatialWindowOptions(_, context),
  });
};

// se_FilledMapDimensionFieldList omitted.

/**
 * serializeAws_restJson1FilledMapFieldWells
 */
const se_FilledMapFieldWells = (input: FilledMapFieldWells, context: __SerdeContext): any => {
  return take(input, {
    FilledMapAggregatedFieldWells: (_) => se_FilledMapAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1FilledMapMeasureFieldList
 */
const se_FilledMapMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1FilledMapShapeConditionalFormatting
 */
const se_FilledMapShapeConditionalFormatting = (
  input: FilledMapShapeConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    FieldId: [],
    Format: (_) => se_ShapeConditionalFormat(_, context),
  });
};

/**
 * serializeAws_restJson1FilledMapSortConfiguration
 */
const se_FilledMapSortConfiguration = (input: FilledMapSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1FilledMapVisual
 */
const se_FilledMapVisual = (input: FilledMapVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_FilledMapConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    ConditionalFormatting: (_) => se_FilledMapConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return take(input, {
    CategoryFilter: (_) => se_CategoryFilter(_, context),
    NestedFilter: (_) => se_NestedFilter(_, context),
    NumericEqualityFilter: (_) => se_NumericEqualityFilter(_, context),
    NumericRangeFilter: (_) => se_NumericRangeFilter(_, context),
    RelativeDatesFilter: (_) => se_RelativeDatesFilter(_, context),
    TimeEqualityFilter: (_) => se_TimeEqualityFilter(_, context),
    TimeRangeFilter: (_) => se_TimeRangeFilter(_, context),
    TopBottomFilter: (_) => se_TopBottomFilter(_, context),
  });
};

// se_FilterAggMetrics omitted.

// se_FilterAggMetricsList omitted.

/**
 * serializeAws_restJson1FilterControl
 */
const se_FilterControl = (input: FilterControl, context: __SerdeContext): any => {
  return take(input, {
    CrossSheet: _json,
    DateTimePicker: _json,
    Dropdown: _json,
    List: _json,
    RelativeDateTime: _json,
    Slider: (_) => se_FilterSliderControl(_, context),
    TextArea: _json,
    TextField: _json,
  });
};

/**
 * serializeAws_restJson1FilterControlList
 */
const se_FilterControlList = (input: FilterControl[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterControl(entry, context);
    });
};

// se_FilterCrossSheetControl omitted.

// se_FilterDateTimePickerControl omitted.

// se_FilterDropDownControl omitted.

// se_FilteredVisualsList omitted.

/**
 * serializeAws_restJson1FilterGroup
 */
const se_FilterGroup = (input: FilterGroup, context: __SerdeContext): any => {
  return take(input, {
    CrossDataset: [],
    FilterGroupId: [],
    Filters: (_) => se_FilterList(_, context),
    ScopeConfiguration: _json,
    Status: [],
  });
};

/**
 * serializeAws_restJson1FilterGroupList
 */
const se_FilterGroupList = (input: FilterGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterGroup(entry, context);
    });
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

// se_FilterListConfiguration omitted.

// se_FilterListControl omitted.

// se_FilterOperation omitted.

// se_FilterOperationSelectedFieldsConfiguration omitted.

// se_FilterOperationTargetVisualsConfiguration omitted.

// se_FilterRelativeDateTimeControl omitted.

// se_FilterScopeConfiguration omitted.

// se_FilterSelectableValues omitted.

/**
 * serializeAws_restJson1FilterSliderControl
 */
const se_FilterSliderControl = (input: FilterSliderControl, context: __SerdeContext): any => {
  return take(input, {
    DisplayOptions: _json,
    FilterControlId: [],
    MaximumValue: __serializeFloat,
    MinimumValue: __serializeFloat,
    SourceFilterId: [],
    StepSize: __serializeFloat,
    Title: [],
    Type: [],
  });
};

// se_FilterTextAreaControl omitted.

// se_FilterTextFieldControl omitted.

// se_FolderArnList omitted.

// se_FolderColumnList omitted.

// se_FolderSearchFilter omitted.

// se_FolderSearchFilterList omitted.

// se_Font omitted.

// se_FontConfiguration omitted.

// se_FontList omitted.

// se_FontSize omitted.

// se_FontWeight omitted.

/**
 * serializeAws_restJson1ForecastComputation
 */
const se_ForecastComputation = (input: ForecastComputation, context: __SerdeContext): any => {
  return take(input, {
    ComputationId: [],
    CustomSeasonalityValue: [],
    LowerBoundary: __serializeFloat,
    Name: [],
    PeriodsBackward: [],
    PeriodsForward: [],
    PredictionInterval: [],
    Seasonality: [],
    Time: _json,
    UpperBoundary: __serializeFloat,
    Value: (_) => se_MeasureField(_, context),
  });
};

/**
 * serializeAws_restJson1ForecastConfiguration
 */
const se_ForecastConfiguration = (input: ForecastConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ForecastProperties: (_) => se_TimeBasedForecastProperties(_, context),
    Scenario: (_) => se_ForecastScenario(_, context),
  });
};

/**
 * serializeAws_restJson1ForecastConfigurationList
 */
const se_ForecastConfigurationList = (input: ForecastConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ForecastConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ForecastScenario
 */
const se_ForecastScenario = (input: ForecastScenario, context: __SerdeContext): any => {
  return take(input, {
    WhatIfPointScenario: (_) => se_WhatIfPointScenario(_, context),
    WhatIfRangeScenario: (_) => se_WhatIfRangeScenario(_, context),
  });
};

// se_FormatConfiguration omitted.

// se_FreeFormLayoutCanvasSizeOptions omitted.

// se_FreeFormLayoutConfiguration omitted.

// se_FreeFormLayoutElement omitted.

// se_FreeFormLayoutElementBackgroundStyle omitted.

// se_FreeFormLayoutElementBorderStyle omitted.

// se_FreeFormLayoutScreenCanvasSizeOptions omitted.

// se_FreeFormSectionLayoutConfiguration omitted.

// se_FreeFromLayoutElementList omitted.

/**
 * serializeAws_restJson1FunnelChartAggregatedFieldWells
 */
const se_FunnelChartAggregatedFieldWells = (input: FunnelChartAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Category: _json,
    Values: (_) => se_FunnelChartMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1FunnelChartConfiguration
 */
const se_FunnelChartConfiguration = (input: FunnelChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryLabelOptions: _json,
    DataLabelOptions: _json,
    FieldWells: (_) => se_FunnelChartFieldWells(_, context),
    Interactions: _json,
    SortConfiguration: (_) => se_FunnelChartSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
    ValueLabelOptions: _json,
    VisualPalette: _json,
  });
};

// se_FunnelChartDataLabelOptions omitted.

// se_FunnelChartDimensionFieldList omitted.

/**
 * serializeAws_restJson1FunnelChartFieldWells
 */
const se_FunnelChartFieldWells = (input: FunnelChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    FunnelChartAggregatedFieldWells: (_) => se_FunnelChartAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1FunnelChartMeasureFieldList
 */
const se_FunnelChartMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1FunnelChartSortConfiguration
 */
const se_FunnelChartSortConfiguration = (input: FunnelChartSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryItemsLimit: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1FunnelChartVisual
 */
const se_FunnelChartVisual = (input: FunnelChartVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_FunnelChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1GaugeChartArcConditionalFormatting
 */
const se_GaugeChartArcConditionalFormatting = (
  input: GaugeChartArcConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    ForegroundColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

// se_GaugeChartColorConfiguration omitted.

/**
 * serializeAws_restJson1GaugeChartConditionalFormatting
 */
const se_GaugeChartConditionalFormatting = (input: GaugeChartConditionalFormatting, context: __SerdeContext): any => {
  return take(input, {
    ConditionalFormattingOptions: (_) => se_GaugeChartConditionalFormattingOptionList(_, context),
  });
};

/**
 * serializeAws_restJson1GaugeChartConditionalFormattingOption
 */
const se_GaugeChartConditionalFormattingOption = (
  input: GaugeChartConditionalFormattingOption,
  context: __SerdeContext
): any => {
  return take(input, {
    Arc: (_) => se_GaugeChartArcConditionalFormatting(_, context),
    PrimaryValue: (_) => se_GaugeChartPrimaryValueConditionalFormatting(_, context),
  });
};

/**
 * serializeAws_restJson1GaugeChartConditionalFormattingOptionList
 */
const se_GaugeChartConditionalFormattingOptionList = (
  input: GaugeChartConditionalFormattingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GaugeChartConditionalFormattingOption(entry, context);
    });
};

/**
 * serializeAws_restJson1GaugeChartConfiguration
 */
const se_GaugeChartConfiguration = (input: GaugeChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ColorConfiguration: _json,
    DataLabels: _json,
    FieldWells: (_) => se_GaugeChartFieldWells(_, context),
    GaugeChartOptions: (_) => se_GaugeChartOptions(_, context),
    Interactions: _json,
    TooltipOptions: (_) => se_TooltipOptions(_, context),
    VisualPalette: _json,
  });
};

/**
 * serializeAws_restJson1GaugeChartFieldWells
 */
const se_GaugeChartFieldWells = (input: GaugeChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    TargetValues: (_) => se_MeasureFieldList(_, context),
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1GaugeChartOptions
 */
const se_GaugeChartOptions = (input: GaugeChartOptions, context: __SerdeContext): any => {
  return take(input, {
    Arc: (_) => se_ArcConfiguration(_, context),
    ArcAxis: (_) => se_ArcAxisConfiguration(_, context),
    Comparison: _json,
    PrimaryValueDisplayType: [],
    PrimaryValueFontConfiguration: _json,
  });
};

/**
 * serializeAws_restJson1GaugeChartPrimaryValueConditionalFormatting
 */
const se_GaugeChartPrimaryValueConditionalFormatting = (
  input: GaugeChartPrimaryValueConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    Icon: _json,
    TextColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

/**
 * serializeAws_restJson1GaugeChartVisual
 */
const se_GaugeChartVisual = (input: GaugeChartVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_GaugeChartConfiguration(_, context),
    ConditionalFormatting: (_) => se_GaugeChartConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_GenerativeAuthoringConfigurations omitted.

/**
 * serializeAws_restJson1GeospatialCategoricalColor
 */
const se_GeospatialCategoricalColor = (input: GeospatialCategoricalColor, context: __SerdeContext): any => {
  return take(input, {
    CategoryDataColors: _json,
    DefaultOpacity: __serializeFloat,
    NullDataSettings: (_) => se_GeospatialNullDataSettings(_, context),
    NullDataVisibility: [],
  });
};

// se_GeospatialCategoricalDataColor omitted.

// se_GeospatialCategoricalDataColorList omitted.

/**
 * serializeAws_restJson1GeospatialCircleRadius
 */
const se_GeospatialCircleRadius = (input: GeospatialCircleRadius, context: __SerdeContext): any => {
  return take(input, {
    Radius: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1GeospatialCircleSymbolStyle
 */
const se_GeospatialCircleSymbolStyle = (input: GeospatialCircleSymbolStyle, context: __SerdeContext): any => {
  return take(input, {
    CircleRadius: (_) => se_GeospatialCircleRadius(_, context),
    FillColor: (_) => se_GeospatialColor(_, context),
    StrokeColor: (_) => se_GeospatialColor(_, context),
    StrokeWidth: (_) => se_GeospatialLineWidth(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialColor
 */
const se_GeospatialColor = (input: GeospatialColor, context: __SerdeContext): any => {
  return take(input, {
    Categorical: (_) => se_GeospatialCategoricalColor(_, context),
    Gradient: (_) => se_GeospatialGradientColor(_, context),
    Solid: _json,
  });
};

// se_GeoSpatialColumnGroup omitted.

/**
 * serializeAws_restJson1GeospatialCoordinateBounds
 */
const se_GeospatialCoordinateBounds = (input: GeospatialCoordinateBounds, context: __SerdeContext): any => {
  return take(input, {
    East: __serializeFloat,
    North: __serializeFloat,
    South: __serializeFloat,
    West: __serializeFloat,
  });
};

// se_GeospatialDataSourceItem omitted.

/**
 * serializeAws_restJson1GeospatialGradientColor
 */
const se_GeospatialGradientColor = (input: GeospatialGradientColor, context: __SerdeContext): any => {
  return take(input, {
    DefaultOpacity: __serializeFloat,
    NullDataSettings: (_) => se_GeospatialNullDataSettings(_, context),
    NullDataVisibility: [],
    StepColors: (_) => se_GeospatialGradientStepColorList(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialGradientStepColor
 */
const se_GeospatialGradientStepColor = (input: GeospatialGradientStepColor, context: __SerdeContext): any => {
  return take(input, {
    Color: [],
    DataValue: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1GeospatialGradientStepColorList
 */
const se_GeospatialGradientStepColorList = (input: GeospatialGradientStepColor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GeospatialGradientStepColor(entry, context);
    });
};

// se_GeospatialHeatmapColorScale omitted.

// se_GeospatialHeatmapConfiguration omitted.

// se_GeospatialHeatmapDataColor omitted.

// se_GeospatialHeatmapDataColorList omitted.

/**
 * serializeAws_restJson1GeospatialLayerColorField
 */
const se_GeospatialLayerColorField = (input: GeospatialLayerColorField, context: __SerdeContext): any => {
  return take(input, {
    ColorDimensionsFields: _json,
    ColorValuesFields: (_) => se_GeospatialLayerMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialLayerDefinition
 */
const se_GeospatialLayerDefinition = (input: GeospatialLayerDefinition, context: __SerdeContext): any => {
  return take(input, {
    LineLayer: (_) => se_GeospatialLineLayer(_, context),
    PointLayer: (_) => se_GeospatialPointLayer(_, context),
    PolygonLayer: (_) => se_GeospatialPolygonLayer(_, context),
  });
};

// se_GeospatialLayerDimensionFieldList omitted.

/**
 * serializeAws_restJson1GeospatialLayerItem
 */
const se_GeospatialLayerItem = (input: GeospatialLayerItem, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_LayerCustomActionList(_, context),
    DataSource: _json,
    JoinDefinition: (_) => se_GeospatialLayerJoinDefinition(_, context),
    Label: [],
    LayerDefinition: (_) => se_GeospatialLayerDefinition(_, context),
    LayerId: [],
    LayerType: [],
    Tooltip: (_) => se_TooltipOptions(_, context),
    Visibility: [],
  });
};

/**
 * serializeAws_restJson1GeospatialLayerJoinDefinition
 */
const se_GeospatialLayerJoinDefinition = (input: GeospatialLayerJoinDefinition, context: __SerdeContext): any => {
  return take(input, {
    ColorField: (_) => se_GeospatialLayerColorField(_, context),
    DatasetKeyField: _json,
    ShapeKeyField: [],
  });
};

/**
 * serializeAws_restJson1GeospatialLayerMapConfiguration
 */
const se_GeospatialLayerMapConfiguration = (input: GeospatialLayerMapConfiguration, context: __SerdeContext): any => {
  return take(input, {
    Interactions: _json,
    Legend: _json,
    MapLayers: (_) => se_GeospatialMapLayerList(_, context),
    MapState: (_) => se_GeospatialMapState(_, context),
    MapStyle: _json,
  });
};

/**
 * serializeAws_restJson1GeospatialLayerMeasureFieldList
 */
const se_GeospatialLayerMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1GeospatialLineLayer
 */
const se_GeospatialLineLayer = (input: GeospatialLineLayer, context: __SerdeContext): any => {
  return take(input, {
    Style: (_) => se_GeospatialLineStyle(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialLineStyle
 */
const se_GeospatialLineStyle = (input: GeospatialLineStyle, context: __SerdeContext): any => {
  return take(input, {
    LineSymbolStyle: (_) => se_GeospatialLineSymbolStyle(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialLineSymbolStyle
 */
const se_GeospatialLineSymbolStyle = (input: GeospatialLineSymbolStyle, context: __SerdeContext): any => {
  return take(input, {
    FillColor: (_) => se_GeospatialColor(_, context),
    LineWidth: (_) => se_GeospatialLineWidth(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialLineWidth
 */
const se_GeospatialLineWidth = (input: GeospatialLineWidth, context: __SerdeContext): any => {
  return take(input, {
    LineWidth: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1GeospatialMapAggregatedFieldWells
 */
const se_GeospatialMapAggregatedFieldWells = (
  input: GeospatialMapAggregatedFieldWells,
  context: __SerdeContext
): any => {
  return take(input, {
    Colors: _json,
    Geospatial: _json,
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialMapConfiguration
 */
const se_GeospatialMapConfiguration = (input: GeospatialMapConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FieldWells: (_) => se_GeospatialMapFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    MapStyleOptions: _json,
    PointStyleOptions: _json,
    Tooltip: (_) => se_TooltipOptions(_, context),
    VisualPalette: _json,
    WindowOptions: (_) => se_GeospatialWindowOptions(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialMapFieldWells
 */
const se_GeospatialMapFieldWells = (input: GeospatialMapFieldWells, context: __SerdeContext): any => {
  return take(input, {
    GeospatialMapAggregatedFieldWells: (_) => se_GeospatialMapAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialMapLayerList
 */
const se_GeospatialMapLayerList = (input: GeospatialLayerItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GeospatialLayerItem(entry, context);
    });
};

/**
 * serializeAws_restJson1GeospatialMapState
 */
const se_GeospatialMapState = (input: GeospatialMapState, context: __SerdeContext): any => {
  return take(input, {
    Bounds: (_) => se_GeospatialCoordinateBounds(_, context),
    MapNavigation: [],
  });
};

// se_GeospatialMapStyle omitted.

// se_GeospatialMapStyleOptions omitted.

/**
 * serializeAws_restJson1GeospatialMapVisual
 */
const se_GeospatialMapVisual = (input: GeospatialMapVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_GeospatialMapConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1GeospatialNullDataSettings
 */
const se_GeospatialNullDataSettings = (input: GeospatialNullDataSettings, context: __SerdeContext): any => {
  return take(input, {
    SymbolStyle: (_) => se_GeospatialNullSymbolStyle(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialNullSymbolStyle
 */
const se_GeospatialNullSymbolStyle = (input: GeospatialNullSymbolStyle, context: __SerdeContext): any => {
  return take(input, {
    FillColor: [],
    StrokeColor: [],
    StrokeWidth: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1GeospatialPointLayer
 */
const se_GeospatialPointLayer = (input: GeospatialPointLayer, context: __SerdeContext): any => {
  return take(input, {
    Style: (_) => se_GeospatialPointStyle(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialPointStyle
 */
const se_GeospatialPointStyle = (input: GeospatialPointStyle, context: __SerdeContext): any => {
  return take(input, {
    CircleSymbolStyle: (_) => se_GeospatialCircleSymbolStyle(_, context),
  });
};

// se_GeospatialPointStyleOptions omitted.

/**
 * serializeAws_restJson1GeospatialPolygonLayer
 */
const se_GeospatialPolygonLayer = (input: GeospatialPolygonLayer, context: __SerdeContext): any => {
  return take(input, {
    Style: (_) => se_GeospatialPolygonStyle(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialPolygonStyle
 */
const se_GeospatialPolygonStyle = (input: GeospatialPolygonStyle, context: __SerdeContext): any => {
  return take(input, {
    PolygonSymbolStyle: (_) => se_GeospatialPolygonSymbolStyle(_, context),
  });
};

/**
 * serializeAws_restJson1GeospatialPolygonSymbolStyle
 */
const se_GeospatialPolygonSymbolStyle = (input: GeospatialPolygonSymbolStyle, context: __SerdeContext): any => {
  return take(input, {
    FillColor: (_) => se_GeospatialColor(_, context),
    StrokeColor: (_) => se_GeospatialColor(_, context),
    StrokeWidth: (_) => se_GeospatialLineWidth(_, context),
  });
};

// se_GeospatialSolidColor omitted.

// se_GeospatialStaticFileSource omitted.

/**
 * serializeAws_restJson1GeospatialWindowOptions
 */
const se_GeospatialWindowOptions = (input: GeospatialWindowOptions, context: __SerdeContext): any => {
  return take(input, {
    Bounds: (_) => se_GeospatialCoordinateBounds(_, context),
    MapZoomMode: [],
  });
};

// se_GlobalTableBorderOptions omitted.

/**
 * serializeAws_restJson1GradientColor
 */
const se_GradientColor = (input: GradientColor, context: __SerdeContext): any => {
  return take(input, {
    Stops: (_) => se_GradientStopList(_, context),
  });
};

/**
 * serializeAws_restJson1GradientStop
 */
const se_GradientStop = (input: GradientStop, context: __SerdeContext): any => {
  return take(input, {
    Color: [],
    DataValue: __serializeFloat,
    GradientOffset: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1GradientStopList
 */
const se_GradientStopList = (input: GradientStop[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GradientStop(entry, context);
    });
};

// se_GridLayoutCanvasSizeOptions omitted.

// se_GridLayoutConfiguration omitted.

// se_GridLayoutElement omitted.

// se_GridLayoutElementList omitted.

// se_GridLayoutScreenCanvasSizeOptions omitted.

// se_GroupSearchFilter omitted.

// se_GroupSearchFilterList omitted.

// se_GroupsList omitted.

/**
 * serializeAws_restJson1GrowthRateComputation
 */
const se_GrowthRateComputation = (input: GrowthRateComputation, context: __SerdeContext): any => {
  return take(input, {
    ComputationId: [],
    Name: [],
    PeriodSize: [],
    Time: _json,
    Value: (_) => se_MeasureField(_, context),
  });
};

// se_GutterStyle omitted.

// se_HeaderFooterSectionConfiguration omitted.

// se_HeaderFooterSectionConfigurationList omitted.

/**
 * serializeAws_restJson1HeatMapAggregatedFieldWells
 */
const se_HeatMapAggregatedFieldWells = (input: HeatMapAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Columns: _json,
    Rows: _json,
    Values: (_) => se_HeatMapMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1HeatMapConfiguration
 */
const se_HeatMapConfiguration = (input: HeatMapConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ColorScale: (_) => se_ColorScale(_, context),
    ColumnLabelOptions: _json,
    DataLabels: _json,
    FieldWells: (_) => se_HeatMapFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    RowLabelOptions: _json,
    SortConfiguration: (_) => se_HeatMapSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
  });
};

// se_HeatMapDimensionFieldList omitted.

/**
 * serializeAws_restJson1HeatMapFieldWells
 */
const se_HeatMapFieldWells = (input: HeatMapFieldWells, context: __SerdeContext): any => {
  return take(input, {
    HeatMapAggregatedFieldWells: (_) => se_HeatMapAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1HeatMapMeasureFieldList
 */
const se_HeatMapMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1HeatMapSortConfiguration
 */
const se_HeatMapSortConfiguration = (input: HeatMapSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    HeatMapColumnItemsLimitConfiguration: _json,
    HeatMapColumnSort: (_) => se_FieldSortOptionsList(_, context),
    HeatMapRowItemsLimitConfiguration: _json,
    HeatMapRowSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1HeatMapVisual
 */
const se_HeatMapVisual = (input: HeatMapVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_HeatMapConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1HistogramAggregatedFieldWells
 */
const se_HistogramAggregatedFieldWells = (input: HistogramAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Values: (_) => se_HistogramMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1HistogramBinOptions
 */
const se_HistogramBinOptions = (input: HistogramBinOptions, context: __SerdeContext): any => {
  return take(input, {
    BinCount: _json,
    BinWidth: (_) => se_BinWidthOptions(_, context),
    SelectedBinType: [],
    StartValue: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1HistogramConfiguration
 */
const se_HistogramConfiguration = (input: HistogramConfiguration, context: __SerdeContext): any => {
  return take(input, {
    BinOptions: (_) => se_HistogramBinOptions(_, context),
    DataLabels: _json,
    FieldWells: (_) => se_HistogramFieldWells(_, context),
    Interactions: _json,
    Tooltip: (_) => se_TooltipOptions(_, context),
    VisualPalette: _json,
    XAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    XAxisLabelOptions: _json,
    YAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
  });
};

/**
 * serializeAws_restJson1HistogramFieldWells
 */
const se_HistogramFieldWells = (input: HistogramFieldWells, context: __SerdeContext): any => {
  return take(input, {
    HistogramAggregatedFieldWells: (_) => se_HistogramAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1HistogramMeasureFieldList
 */
const se_HistogramMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1HistogramVisual
 */
const se_HistogramVisual = (input: HistogramVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_HistogramConfiguration(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_Identifier omitted.

// se_IdentityCenterConfiguration omitted.

// se_IdentityMap omitted.

// se_IdentityNameList omitted.

// se_ImageConfiguration omitted.

/**
 * serializeAws_restJson1ImageCustomAction
 */
const se_ImageCustomAction = (input: ImageCustomAction, context: __SerdeContext): any => {
  return take(input, {
    ActionOperations: (_) => se_ImageCustomActionOperationList(_, context),
    CustomActionId: [],
    Name: [],
    Status: [],
    Trigger: [],
  });
};

/**
 * serializeAws_restJson1ImageCustomActionList
 */
const se_ImageCustomActionList = (input: ImageCustomAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ImageCustomAction(entry, context);
    });
};

/**
 * serializeAws_restJson1ImageCustomActionOperation
 */
const se_ImageCustomActionOperation = (input: ImageCustomActionOperation, context: __SerdeContext): any => {
  return take(input, {
    NavigationOperation: _json,
    SetParametersOperation: (_) => se_CustomActionSetParametersOperation(_, context),
    URLOperation: _json,
  });
};

/**
 * serializeAws_restJson1ImageCustomActionOperationList
 */
const se_ImageCustomActionOperationList = (input: ImageCustomActionOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ImageCustomActionOperation(entry, context);
    });
};

// se_ImageInteractionOptions omitted.

// se_ImageMenuOption omitted.

// se_ImageSetConfiguration omitted.

// se_ImageSource omitted.

// se_ImageStaticFile omitted.

// se_IncrementalRefresh omitted.

/**
 * serializeAws_restJson1InnerFilter
 */
const se_InnerFilter = (input: InnerFilter, context: __SerdeContext): any => {
  return take(input, {
    CategoryInnerFilter: (_) => se_CategoryInnerFilter(_, context),
  });
};

// se_InputColumn omitted.

// se_InputColumnList omitted.

/**
 * serializeAws_restJson1InsightConfiguration
 */
const se_InsightConfiguration = (input: InsightConfiguration, context: __SerdeContext): any => {
  return take(input, {
    Computations: (_) => se_ComputationList(_, context),
    CustomNarrative: _json,
    Interactions: _json,
  });
};

/**
 * serializeAws_restJson1InsightVisual
 */
const se_InsightVisual = (input: InsightVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    DataSetIdentifier: [],
    InsightConfiguration: (_) => se_InsightConfiguration(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_IntegerDatasetParameter omitted.

// se_IntegerDatasetParameterDefaultValues omitted.

// se_IntegerDatasetParameterValueList omitted.

// se_IntegerDefaultValueList omitted.

// se_IntegerDefaultValues omitted.

// se_IntegerParameter omitted.

// se_IntegerParameterDeclaration omitted.

// se_IntegerParameterList omitted.

// se_IntegerValueWhenUnsetConfiguration omitted.

// se_IpRestrictionRuleMap omitted.

// se_ItemsLimitConfiguration omitted.

// se_JiraParameters omitted.

// se_JoinInstruction omitted.

// se_JoinKeyProperties omitted.

// se_KeyRegistration omitted.

/**
 * serializeAws_restJson1KPIActualValueConditionalFormatting
 */
const se_KPIActualValueConditionalFormatting = (
  input: KPIActualValueConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    Icon: _json,
    TextColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

/**
 * serializeAws_restJson1KPIComparisonValueConditionalFormatting
 */
const se_KPIComparisonValueConditionalFormatting = (
  input: KPIComparisonValueConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    Icon: _json,
    TextColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

/**
 * serializeAws_restJson1KPIConditionalFormatting
 */
const se_KPIConditionalFormatting = (input: KPIConditionalFormatting, context: __SerdeContext): any => {
  return take(input, {
    ConditionalFormattingOptions: (_) => se_KPIConditionalFormattingOptionList(_, context),
  });
};

/**
 * serializeAws_restJson1KPIConditionalFormattingOption
 */
const se_KPIConditionalFormattingOption = (input: KPIConditionalFormattingOption, context: __SerdeContext): any => {
  return take(input, {
    ActualValue: (_) => se_KPIActualValueConditionalFormatting(_, context),
    ComparisonValue: (_) => se_KPIComparisonValueConditionalFormatting(_, context),
    PrimaryValue: (_) => se_KPIPrimaryValueConditionalFormatting(_, context),
    ProgressBar: (_) => se_KPIProgressBarConditionalFormatting(_, context),
  });
};

/**
 * serializeAws_restJson1KPIConditionalFormattingOptionList
 */
const se_KPIConditionalFormattingOptionList = (
  input: KPIConditionalFormattingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KPIConditionalFormattingOption(entry, context);
    });
};

/**
 * serializeAws_restJson1KPIConfiguration
 */
const se_KPIConfiguration = (input: KPIConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FieldWells: (_) => se_KPIFieldWells(_, context),
    Interactions: _json,
    KPIOptions: _json,
    SortConfiguration: (_) => se_KPISortConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1KPIFieldWells
 */
const se_KPIFieldWells = (input: KPIFieldWells, context: __SerdeContext): any => {
  return take(input, {
    TargetValues: (_) => se_MeasureFieldList(_, context),
    TrendGroups: _json,
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

// se_KPIOptions omitted.

/**
 * serializeAws_restJson1KPIPrimaryValueConditionalFormatting
 */
const se_KPIPrimaryValueConditionalFormatting = (
  input: KPIPrimaryValueConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    Icon: _json,
    TextColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

/**
 * serializeAws_restJson1KPIProgressBarConditionalFormatting
 */
const se_KPIProgressBarConditionalFormatting = (
  input: KPIProgressBarConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    ForegroundColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

/**
 * serializeAws_restJson1KPISortConfiguration
 */
const se_KPISortConfiguration = (input: KPISortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    TrendGroupSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

// se_KPISparklineOptions omitted.

/**
 * serializeAws_restJson1KPIVisual
 */
const se_KPIVisual = (input: KPIVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_KPIConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    ConditionalFormatting: (_) => se_KPIConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_KPIVisualLayoutOptions omitted.

// se_KPIVisualStandardLayout omitted.

// se_LabelOptions omitted.

/**
 * serializeAws_restJson1LayerCustomAction
 */
const se_LayerCustomAction = (input: LayerCustomAction, context: __SerdeContext): any => {
  return take(input, {
    ActionOperations: (_) => se_LayerCustomActionOperationList(_, context),
    CustomActionId: [],
    Name: [],
    Status: [],
    Trigger: [],
  });
};

/**
 * serializeAws_restJson1LayerCustomActionList
 */
const se_LayerCustomActionList = (input: LayerCustomAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LayerCustomAction(entry, context);
    });
};

/**
 * serializeAws_restJson1LayerCustomActionOperation
 */
const se_LayerCustomActionOperation = (input: LayerCustomActionOperation, context: __SerdeContext): any => {
  return take(input, {
    FilterOperation: _json,
    NavigationOperation: _json,
    SetParametersOperation: (_) => se_CustomActionSetParametersOperation(_, context),
    URLOperation: _json,
  });
};

/**
 * serializeAws_restJson1LayerCustomActionOperationList
 */
const se_LayerCustomActionOperationList = (input: LayerCustomActionOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LayerCustomActionOperation(entry, context);
    });
};

/**
 * serializeAws_restJson1LayerMapVisual
 */
const se_LayerMapVisual = (input: LayerMapVisual, context: __SerdeContext): any => {
  return take(input, {
    ChartConfiguration: (_) => se_GeospatialLayerMapConfiguration(_, context),
    DataSetIdentifier: [],
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1Layout
 */
const se_Layout = (input: Layout, context: __SerdeContext): any => {
  return take(input, {
    Configuration: (_) => se_LayoutConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1LayoutConfiguration
 */
const se_LayoutConfiguration = (input: LayoutConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FreeFormLayout: _json,
    GridLayout: _json,
    SectionBasedLayout: (_) => se_SectionBasedLayoutConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1LayoutList
 */
const se_LayoutList = (input: Layout[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Layout(entry, context);
    });
};

// se_LegendOptions omitted.

/**
 * serializeAws_restJson1LineChartAggregatedFieldWells
 */
const se_LineChartAggregatedFieldWells = (input: LineChartAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Category: _json,
    Colors: _json,
    SmallMultiples: _json,
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1LineChartConfiguration
 */
const se_LineChartConfiguration = (input: LineChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ContributionAnalysisDefaults: _json,
    DataLabels: _json,
    DefaultSeriesSettings: _json,
    FieldWells: (_) => se_LineChartFieldWells(_, context),
    ForecastConfigurations: (_) => se_ForecastConfigurationList(_, context),
    Interactions: _json,
    Legend: _json,
    PrimaryYAxisDisplayOptions: (_) => se_LineSeriesAxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    ReferenceLines: (_) => se_ReferenceLineList(_, context),
    SecondaryYAxisDisplayOptions: (_) => se_LineSeriesAxisDisplayOptions(_, context),
    SecondaryYAxisLabelOptions: _json,
    Series: _json,
    SingleAxisOptions: _json,
    SmallMultiplesOptions: _json,
    SortConfiguration: (_) => se_LineChartSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
    Type: [],
    VisualPalette: _json,
    XAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    XAxisLabelOptions: _json,
  });
};

// se_LineChartDefaultSeriesSettings omitted.

/**
 * serializeAws_restJson1LineChartFieldWells
 */
const se_LineChartFieldWells = (input: LineChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    LineChartAggregatedFieldWells: (_) => se_LineChartAggregatedFieldWells(_, context),
  });
};

// se_LineChartLineStyleSettings omitted.

// se_LineChartMarkerStyleSettings omitted.

// se_LineChartSeriesSettings omitted.

/**
 * serializeAws_restJson1LineChartSortConfiguration
 */
const se_LineChartSortConfiguration = (input: LineChartSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryItemsLimitConfiguration: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
    ColorItemsLimitConfiguration: _json,
    SmallMultiplesLimitConfiguration: _json,
    SmallMultiplesSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1LineChartVisual
 */
const se_LineChartVisual = (input: LineChartVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_LineChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1LineSeriesAxisDisplayOptions
 */
const se_LineSeriesAxisDisplayOptions = (input: LineSeriesAxisDisplayOptions, context: __SerdeContext): any => {
  return take(input, {
    AxisOptions: (_) => se_AxisDisplayOptions(_, context),
    MissingDataConfigurations: _json,
  });
};

// se_LinkEntityArnList omitted.

// se_LinkSharingConfiguration omitted.

// se_ListControlDisplayOptions omitted.

// se_ListControlSearchOptions omitted.

// se_ListControlSelectAllOptions omitted.

// se_LoadingAnimation omitted.

// se_LocalNavigationConfiguration omitted.

/**
 * serializeAws_restJson1LogicalTable
 */
const se_LogicalTable = (input: LogicalTable, context: __SerdeContext): any => {
  return take(input, {
    Alias: [],
    DataTransforms: (_) => se_TransformOperationList(_, context),
    Source: _json,
  });
};

/**
 * serializeAws_restJson1LogicalTableMap
 */
const se_LogicalTableMap = (input: Record<string, LogicalTable>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_LogicalTable(value, context);
    return acc;
  }, {});
};

// se_LogicalTableSource omitted.

// se_LogoConfiguration omitted.

// se_LogoSetConfiguration omitted.

// se_LongFormatText omitted.

// se_LookbackWindow omitted.

// se_ManifestFileLocation omitted.

// se_MappedDataSetParameter omitted.

// se_MappedDataSetParameters omitted.

// se_MarginStyle omitted.

// se_MariaDbParameters omitted.

// se_MaximumLabelType omitted.

/**
 * serializeAws_restJson1MaximumMinimumComputation
 */
const se_MaximumMinimumComputation = (input: MaximumMinimumComputation, context: __SerdeContext): any => {
  return take(input, {
    ComputationId: [],
    Name: [],
    Time: _json,
    Type: [],
    Value: (_) => se_MeasureField(_, context),
  });
};

/**
 * serializeAws_restJson1MeasureField
 */
const se_MeasureField = (input: MeasureField, context: __SerdeContext): any => {
  return take(input, {
    CalculatedMeasureField: _json,
    CategoricalMeasureField: _json,
    DateMeasureField: _json,
    NumericalMeasureField: (_) => se_NumericalMeasureField(_, context),
  });
};

/**
 * serializeAws_restJson1MeasureFieldList
 */
const se_MeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1MetricComparisonComputation
 */
const se_MetricComparisonComputation = (input: MetricComparisonComputation, context: __SerdeContext): any => {
  return take(input, {
    ComputationId: [],
    FromValue: (_) => se_MeasureField(_, context),
    Name: [],
    TargetValue: (_) => se_MeasureField(_, context),
    Time: _json,
  });
};

// se_MinimumLabelType omitted.

// se_MissingDataConfiguration omitted.

// se_MissingDataConfigurationList omitted.

// se_MySqlParameters omitted.

// se_NamedEntityDefinition omitted.

// se_NamedEntityDefinitionMetric omitted.

// se_NamedEntityDefinitions omitted.

// se_NamedEntityRef omitted.

// se_NavbarStyle omitted.

// se_NegativeFormat omitted.

// se_NegativeValueConfiguration omitted.

/**
 * serializeAws_restJson1NestedFilter
 */
const se_NestedFilter = (input: NestedFilter, context: __SerdeContext): any => {
  return take(input, {
    Column: _json,
    FilterId: [],
    IncludeInnerSet: [],
    InnerFilter: (_) => se_InnerFilter(_, context),
  });
};

/**
 * serializeAws_restJson1NewDefaultValues
 */
const se_NewDefaultValues = (input: NewDefaultValues, context: __SerdeContext): any => {
  return take(input, {
    DateTimeStaticValues: (_) => se_DateTimeDatasetParameterValueList(_, context),
    DecimalStaticValues: (_) => se_DecimalDatasetParameterValueList(_, context),
    IntegerStaticValues: _json,
    StringStaticValues: _json,
  });
};

// se_NonRepeatingVisualsList omitted.

// se_NullValueFormatConfiguration omitted.

// se_NumberDisplayFormatConfiguration omitted.

// se_NumberFormatConfiguration omitted.

/**
 * serializeAws_restJson1NumericalAggregationFunction
 */
const se_NumericalAggregationFunction = (input: NumericalAggregationFunction, context: __SerdeContext): any => {
  return take(input, {
    PercentileAggregation: (_) => se_PercentileAggregation(_, context),
    SimpleNumericalAggregation: [],
  });
};

// se_NumericalDimensionField omitted.

/**
 * serializeAws_restJson1NumericalMeasureField
 */
const se_NumericalMeasureField = (input: NumericalMeasureField, context: __SerdeContext): any => {
  return take(input, {
    AggregationFunction: (_) => se_NumericalAggregationFunction(_, context),
    Column: _json,
    FieldId: [],
    FormatConfiguration: _json,
  });
};

/**
 * serializeAws_restJson1NumericAxisOptions
 */
const se_NumericAxisOptions = (input: NumericAxisOptions, context: __SerdeContext): any => {
  return take(input, {
    Range: (_) => se_AxisDisplayRange(_, context),
    Scale: (_) => se_AxisScale(_, context),
  });
};

/**
 * serializeAws_restJson1NumericEqualityDrillDownFilter
 */
const se_NumericEqualityDrillDownFilter = (input: NumericEqualityDrillDownFilter, context: __SerdeContext): any => {
  return take(input, {
    Column: _json,
    Value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1NumericEqualityFilter
 */
const se_NumericEqualityFilter = (input: NumericEqualityFilter, context: __SerdeContext): any => {
  return take(input, {
    AggregationFunction: (_) => se_AggregationFunction(_, context),
    Column: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
    FilterId: [],
    MatchOperator: [],
    NullOption: [],
    ParameterName: [],
    SelectAllOptions: [],
    Value: __serializeFloat,
  });
};

// se_NumericFormatConfiguration omitted.

/**
 * serializeAws_restJson1NumericRangeFilter
 */
const se_NumericRangeFilter = (input: NumericRangeFilter, context: __SerdeContext): any => {
  return take(input, {
    AggregationFunction: (_) => se_AggregationFunction(_, context),
    Column: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
    FilterId: [],
    IncludeMaximum: [],
    IncludeMinimum: [],
    NullOption: [],
    RangeMaximum: (_) => se_NumericRangeFilterValue(_, context),
    RangeMinimum: (_) => se_NumericRangeFilterValue(_, context),
    SelectAllOptions: [],
  });
};

/**
 * serializeAws_restJson1NumericRangeFilterValue
 */
const se_NumericRangeFilterValue = (input: NumericRangeFilterValue, context: __SerdeContext): any => {
  return take(input, {
    Parameter: [],
    StaticValue: __serializeFloat,
  });
};

// se_NumericSeparatorConfiguration omitted.

// se_OAuthParameters omitted.

// se_OperandList omitted.

// se_OracleParameters omitted.

/**
 * serializeAws_restJson1OverrideDatasetParameterOperation
 */
const se_OverrideDatasetParameterOperation = (
  input: OverrideDatasetParameterOperation,
  context: __SerdeContext
): any => {
  return take(input, {
    NewDefaultValues: (_) => se_NewDefaultValues(_, context),
    NewParameterName: [],
    ParameterName: [],
  });
};

// se_PaginationConfiguration omitted.

// se_Palette omitted.

// se_PanelConfiguration omitted.

// se_PanelTitleOptions omitted.

/**
 * serializeAws_restJson1ParameterControl
 */
const se_ParameterControl = (input: ParameterControl, context: __SerdeContext): any => {
  return take(input, {
    DateTimePicker: _json,
    Dropdown: _json,
    List: _json,
    Slider: (_) => se_ParameterSliderControl(_, context),
    TextArea: _json,
    TextField: _json,
  });
};

/**
 * serializeAws_restJson1ParameterControlList
 */
const se_ParameterControlList = (input: ParameterControl[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterControl(entry, context);
    });
};

// se_ParameterDateTimePickerControl omitted.

/**
 * serializeAws_restJson1ParameterDeclaration
 */
const se_ParameterDeclaration = (input: ParameterDeclaration, context: __SerdeContext): any => {
  return take(input, {
    DateTimeParameterDeclaration: (_) => se_DateTimeParameterDeclaration(_, context),
    DecimalParameterDeclaration: (_) => se_DecimalParameterDeclaration(_, context),
    IntegerParameterDeclaration: _json,
    StringParameterDeclaration: _json,
  });
};

/**
 * serializeAws_restJson1ParameterDeclarationList
 */
const se_ParameterDeclarationList = (input: ParameterDeclaration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterDeclaration(entry, context);
    });
};

// se_ParameterDropDownControl omitted.

// se_ParameterListControl omitted.

/**
 * serializeAws_restJson1_Parameters
 */
const se__Parameters = (input: _Parameters, context: __SerdeContext): any => {
  return take(input, {
    DateTimeParameters: (_) => se_DateTimeParameterList(_, context),
    DecimalParameters: (_) => se_DecimalParameterList(_, context),
    IntegerParameters: _json,
    StringParameters: _json,
  });
};

// se_ParameterSelectableValueList omitted.

// se_ParameterSelectableValues omitted.

/**
 * serializeAws_restJson1ParameterSliderControl
 */
const se_ParameterSliderControl = (input: ParameterSliderControl, context: __SerdeContext): any => {
  return take(input, {
    DisplayOptions: _json,
    MaximumValue: __serializeFloat,
    MinimumValue: __serializeFloat,
    ParameterControlId: [],
    SourceParameterName: [],
    StepSize: __serializeFloat,
    Title: [],
  });
};

// se_ParameterTextAreaControl omitted.

// se_ParameterTextFieldControl omitted.

// se_PercentageDisplayFormatConfiguration omitted.

/**
 * serializeAws_restJson1PercentileAggregation
 */
const se_PercentileAggregation = (input: PercentileAggregation, context: __SerdeContext): any => {
  return take(input, {
    PercentileValue: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1PercentVisibleRange
 */
const se_PercentVisibleRange = (input: PercentVisibleRange, context: __SerdeContext): any => {
  return take(input, {
    From: __serializeFloat,
    To: __serializeFloat,
  });
};

// se_PerformanceConfiguration omitted.

/**
 * serializeAws_restJson1PeriodOverPeriodComputation
 */
const se_PeriodOverPeriodComputation = (input: PeriodOverPeriodComputation, context: __SerdeContext): any => {
  return take(input, {
    ComputationId: [],
    Name: [],
    Time: _json,
    Value: (_) => se_MeasureField(_, context),
  });
};

/**
 * serializeAws_restJson1PeriodToDateComputation
 */
const se_PeriodToDateComputation = (input: PeriodToDateComputation, context: __SerdeContext): any => {
  return take(input, {
    ComputationId: [],
    Name: [],
    PeriodTimeGranularity: [],
    Time: _json,
    Value: (_) => se_MeasureField(_, context),
  });
};

// se_PhysicalTable omitted.

// se_PhysicalTableMap omitted.

/**
 * serializeAws_restJson1PieChartAggregatedFieldWells
 */
const se_PieChartAggregatedFieldWells = (input: PieChartAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Category: _json,
    SmallMultiples: _json,
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1PieChartConfiguration
 */
const se_PieChartConfiguration = (input: PieChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryLabelOptions: _json,
    ContributionAnalysisDefaults: _json,
    DataLabels: _json,
    DonutOptions: _json,
    FieldWells: (_) => se_PieChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    SmallMultiplesOptions: _json,
    SortConfiguration: (_) => se_PieChartSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
    ValueLabelOptions: _json,
    VisualPalette: _json,
  });
};

/**
 * serializeAws_restJson1PieChartFieldWells
 */
const se_PieChartFieldWells = (input: PieChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    PieChartAggregatedFieldWells: (_) => se_PieChartAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1PieChartSortConfiguration
 */
const se_PieChartSortConfiguration = (input: PieChartSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryItemsLimit: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
    SmallMultiplesLimitConfiguration: _json,
    SmallMultiplesSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1PieChartVisual
 */
const se_PieChartVisual = (input: PieChartVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_PieChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1PivotFieldSortOptions
 */
const se_PivotFieldSortOptions = (input: PivotFieldSortOptions, context: __SerdeContext): any => {
  return take(input, {
    FieldId: [],
    SortBy: (_) => se_PivotTableSortBy(_, context),
  });
};

/**
 * serializeAws_restJson1PivotFieldSortOptionsList
 */
const se_PivotFieldSortOptionsList = (input: PivotFieldSortOptions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PivotFieldSortOptions(entry, context);
    });
};

/**
 * serializeAws_restJson1PivotMeasureFieldList
 */
const se_PivotMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1PivotTableAggregatedFieldWells
 */
const se_PivotTableAggregatedFieldWells = (input: PivotTableAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Columns: _json,
    Rows: _json,
    Values: (_) => se_PivotMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1PivotTableCellConditionalFormatting
 */
const se_PivotTableCellConditionalFormatting = (
  input: PivotTableCellConditionalFormatting,
  context: __SerdeContext
): any => {
  return take(input, {
    FieldId: [],
    Scope: _json,
    Scopes: _json,
    TextFormat: (_) => se_TextConditionalFormat(_, context),
  });
};

/**
 * serializeAws_restJson1PivotTableConditionalFormatting
 */
const se_PivotTableConditionalFormatting = (input: PivotTableConditionalFormatting, context: __SerdeContext): any => {
  return take(input, {
    ConditionalFormattingOptions: (_) => se_PivotTableConditionalFormattingOptionList(_, context),
  });
};

/**
 * serializeAws_restJson1PivotTableConditionalFormattingOption
 */
const se_PivotTableConditionalFormattingOption = (
  input: PivotTableConditionalFormattingOption,
  context: __SerdeContext
): any => {
  return take(input, {
    Cell: (_) => se_PivotTableCellConditionalFormatting(_, context),
  });
};

/**
 * serializeAws_restJson1PivotTableConditionalFormattingOptionList
 */
const se_PivotTableConditionalFormattingOptionList = (
  input: PivotTableConditionalFormattingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PivotTableConditionalFormattingOption(entry, context);
    });
};

// se_PivotTableConditionalFormattingScope omitted.

// se_PivotTableConditionalFormattingScopeList omitted.

/**
 * serializeAws_restJson1PivotTableConfiguration
 */
const se_PivotTableConfiguration = (input: PivotTableConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FieldOptions: _json,
    FieldWells: (_) => se_PivotTableFieldWells(_, context),
    Interactions: _json,
    PaginatedReportOptions: _json,
    SortConfiguration: (_) => se_PivotTableSortConfiguration(_, context),
    TableOptions: _json,
    TotalOptions: _json,
  });
};

// se_PivotTableDataPathOption omitted.

// se_PivotTableDataPathOptionList omitted.

// se_PivotTableDimensionList omitted.

// se_PivotTableFieldCollapseStateOption omitted.

// se_PivotTableFieldCollapseStateOptionList omitted.

// se_PivotTableFieldCollapseStateTarget omitted.

// se_PivotTableFieldOption omitted.

// se_PivotTableFieldOptionList omitted.

// se_PivotTableFieldOptions omitted.

// se_PivotTableFieldSubtotalOptions omitted.

// se_PivotTableFieldSubtotalOptionsList omitted.

/**
 * serializeAws_restJson1PivotTableFieldWells
 */
const se_PivotTableFieldWells = (input: PivotTableFieldWells, context: __SerdeContext): any => {
  return take(input, {
    PivotTableAggregatedFieldWells: (_) => se_PivotTableAggregatedFieldWells(_, context),
  });
};

// se_PivotTableOptions omitted.

// se_PivotTablePaginatedReportOptions omitted.

// se_PivotTableRowsLabelOptions omitted.

/**
 * serializeAws_restJson1PivotTableSortBy
 */
const se_PivotTableSortBy = (input: PivotTableSortBy, context: __SerdeContext): any => {
  return take(input, {
    Column: (_) => se_ColumnSort(_, context),
    DataPath: _json,
    Field: _json,
  });
};

/**
 * serializeAws_restJson1PivotTableSortConfiguration
 */
const se_PivotTableSortConfiguration = (input: PivotTableSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FieldSortOptions: (_) => se_PivotFieldSortOptionsList(_, context),
  });
};

// se_PivotTableTotalOptions omitted.

/**
 * serializeAws_restJson1PivotTableVisual
 */
const se_PivotTableVisual = (input: PivotTableVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_PivotTableConfiguration(_, context),
    ConditionalFormatting: (_) => se_PivotTableConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_PivotTotalOptions omitted.

/**
 * serializeAws_restJson1PluginVisual
 */
const se_PluginVisual = (input: PluginVisual, context: __SerdeContext): any => {
  return take(input, {
    ChartConfiguration: (_) => se_PluginVisualConfiguration(_, context),
    PluginArn: [],
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1PluginVisualConfiguration
 */
const se_PluginVisualConfiguration = (input: PluginVisualConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FieldWells: (_) => se_PluginVisualFieldWells(_, context),
    SortConfiguration: (_) => se_PluginVisualSortConfiguration(_, context),
    VisualOptions: _json,
  });
};

/**
 * serializeAws_restJson1PluginVisualFieldWell
 */
const se_PluginVisualFieldWell = (input: PluginVisualFieldWell, context: __SerdeContext): any => {
  return take(input, {
    AxisName: [],
    Dimensions: _json,
    Measures: (_) => se_MeasureFieldList(_, context),
    Unaggregated: _json,
  });
};

/**
 * serializeAws_restJson1PluginVisualFieldWells
 */
const se_PluginVisualFieldWells = (input: PluginVisualFieldWell[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PluginVisualFieldWell(entry, context);
    });
};

// se_PluginVisualItemsLimitConfiguration omitted.

// se_PluginVisualOptions omitted.

// se_PluginVisualPropertiesList omitted.

// se_PluginVisualProperty omitted.

/**
 * serializeAws_restJson1PluginVisualSortConfiguration
 */
const se_PluginVisualSortConfiguration = (input: PluginVisualSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    PluginVisualTableQuerySort: (_) => se_PluginVisualTableQuerySort(_, context),
  });
};

/**
 * serializeAws_restJson1PluginVisualTableQuerySort
 */
const se_PluginVisualTableQuerySort = (input: PluginVisualTableQuerySort, context: __SerdeContext): any => {
  return take(input, {
    ItemsLimitConfiguration: _json,
    RowSort: (_) => se_RowSortList(_, context),
  });
};

// se_PostgreSqlParameters omitted.

/**
 * serializeAws_restJson1PredefinedHierarchy
 */
const se_PredefinedHierarchy = (input: PredefinedHierarchy, context: __SerdeContext): any => {
  return take(input, {
    Columns: _json,
    DrillDownFilters: (_) => se_DrillDownFilterList(_, context),
    HierarchyId: [],
  });
};

// se_PredefinedHierarchyColumnList omitted.

// se_PrestoParameters omitted.

// se_PrincipalList omitted.

// se_ProgressBarOptions omitted.

// se_ProjectedColumnList omitted.

// se_ProjectOperation omitted.

// se_QueryExecutionOptions omitted.

/**
 * serializeAws_restJson1RadarChartAggregatedFieldWells
 */
const se_RadarChartAggregatedFieldWells = (input: RadarChartAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Category: _json,
    Color: _json,
    Values: (_) => se_RadarChartValuesFieldList(_, context),
  });
};

// se_RadarChartAreaStyleSettings omitted.

// se_RadarChartCategoryFieldList omitted.

// se_RadarChartColorFieldList omitted.

/**
 * serializeAws_restJson1RadarChartConfiguration
 */
const se_RadarChartConfiguration = (input: RadarChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    AlternateBandColorsVisibility: [],
    AlternateBandEvenColor: [],
    AlternateBandOddColor: [],
    AxesRangeScale: [],
    BaseSeriesSettings: _json,
    CategoryAxis: (_) => se_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    ColorAxis: (_) => se_AxisDisplayOptions(_, context),
    ColorLabelOptions: _json,
    FieldWells: (_) => se_RadarChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    Shape: [],
    SortConfiguration: (_) => se_RadarChartSortConfiguration(_, context),
    StartAngle: __serializeFloat,
    VisualPalette: _json,
  });
};

/**
 * serializeAws_restJson1RadarChartFieldWells
 */
const se_RadarChartFieldWells = (input: RadarChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    RadarChartAggregatedFieldWells: (_) => se_RadarChartAggregatedFieldWells(_, context),
  });
};

// se_RadarChartSeriesSettings omitted.

/**
 * serializeAws_restJson1RadarChartSortConfiguration
 */
const se_RadarChartSortConfiguration = (input: RadarChartSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryItemsLimit: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
    ColorItemsLimit: _json,
    ColorSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1RadarChartValuesFieldList
 */
const se_RadarChartValuesFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1RadarChartVisual
 */
const se_RadarChartVisual = (input: RadarChartVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_RadarChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_RangeConstant omitted.

// se_RangeEndsLabelType omitted.

// se_RdsParameters omitted.

// se_RecentSnapshotsConfigurations omitted.

// se_RedshiftIAMParameters omitted.

// se_RedshiftParameters omitted.

/**
 * serializeAws_restJson1ReferenceLine
 */
const se_ReferenceLine = (input: ReferenceLine, context: __SerdeContext): any => {
  return take(input, {
    DataConfiguration: (_) => se_ReferenceLineDataConfiguration(_, context),
    LabelConfiguration: _json,
    Status: [],
    StyleConfiguration: _json,
  });
};

// se_ReferenceLineCustomLabelConfiguration omitted.

/**
 * serializeAws_restJson1ReferenceLineDataConfiguration
 */
const se_ReferenceLineDataConfiguration = (input: ReferenceLineDataConfiguration, context: __SerdeContext): any => {
  return take(input, {
    AxisBinding: [],
    DynamicConfiguration: (_) => se_ReferenceLineDynamicDataConfiguration(_, context),
    SeriesType: [],
    StaticConfiguration: (_) => se_ReferenceLineStaticDataConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1ReferenceLineDynamicDataConfiguration
 */
const se_ReferenceLineDynamicDataConfiguration = (
  input: ReferenceLineDynamicDataConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    Calculation: (_) => se_NumericalAggregationFunction(_, context),
    Column: _json,
    MeasureAggregationFunction: (_) => se_AggregationFunction(_, context),
  });
};

// se_ReferenceLineLabelConfiguration omitted.

/**
 * serializeAws_restJson1ReferenceLineList
 */
const se_ReferenceLineList = (input: ReferenceLine[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReferenceLine(entry, context);
    });
};

/**
 * serializeAws_restJson1ReferenceLineStaticDataConfiguration
 */
const se_ReferenceLineStaticDataConfiguration = (
  input: ReferenceLineStaticDataConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    Value: __serializeFloat,
  });
};

// se_ReferenceLineStyleConfiguration omitted.

// se_ReferenceLineValueLabelConfiguration omitted.

// se_RefreshConfiguration omitted.

// se_RefreshFailureConfiguration omitted.

// se_RefreshFailureEmailAlert omitted.

// se_RefreshFrequency omitted.

/**
 * serializeAws_restJson1RefreshSchedule
 */
const se_RefreshSchedule = (input: RefreshSchedule, context: __SerdeContext): any => {
  return take(input, {
    Arn: [],
    RefreshType: [],
    ScheduleFrequency: _json,
    ScheduleId: [],
    StartAfterDateTime: (_) => _.getTime() / 1_000,
  });
};

// se_RegisteredCustomerManagedKey omitted.

// se_RegisteredUserConsoleFeatureConfigurations omitted.

// se_RegisteredUserDashboardEmbeddingConfiguration omitted.

// se_RegisteredUserDashboardFeatureConfigurations omitted.

// se_RegisteredUserDashboardVisualEmbeddingConfiguration omitted.

// se_RegisteredUserEmbeddingExperienceConfiguration omitted.

// se_RegisteredUserGenerativeQnAEmbeddingConfiguration omitted.

// se_RegisteredUserQSearchBarEmbeddingConfiguration omitted.

// se_RegisteredUserQuickSightConsoleEmbeddingConfiguration omitted.

// se_RelationalTable omitted.

/**
 * serializeAws_restJson1RelativeDatesFilter
 */
const se_RelativeDatesFilter = (input: RelativeDatesFilter, context: __SerdeContext): any => {
  return take(input, {
    AnchorDateConfiguration: _json,
    Column: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
    ExcludePeriodConfiguration: _json,
    FilterId: [],
    MinimumGranularity: [],
    NullOption: [],
    ParameterName: [],
    RelativeDateType: [],
    RelativeDateValue: [],
    TimeGranularity: [],
  });
};

// se_RelativeDateTimeControlDisplayOptions omitted.

// se_RenameColumnOperation omitted.

// se_ResourcePermission omitted.

// se_ResourcePermissionList omitted.

// se_RollingDateConfiguration omitted.

// se_RowAlternateColorList omitted.

// se_RowAlternateColorOptions omitted.

// se_RowLevelPermissionDataSet omitted.

// se_RowLevelPermissionTagConfiguration omitted.

// se_RowLevelPermissionTagRule omitted.

// se_RowLevelPermissionTagRuleConfiguration omitted.

// se_RowLevelPermissionTagRuleConfigurationList omitted.

// se_RowLevelPermissionTagRuleList omitted.

/**
 * serializeAws_restJson1RowSortList
 */
const se_RowSortList = (input: FieldSortOptions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldSortOptions(entry, context);
    });
};

// se_S3BucketConfiguration omitted.

// se_S3Parameters omitted.

// se_S3Source omitted.

// se_SameSheetTargetVisualConfiguration omitted.

/**
 * serializeAws_restJson1SankeyDiagramAggregatedFieldWells
 */
const se_SankeyDiagramAggregatedFieldWells = (
  input: SankeyDiagramAggregatedFieldWells,
  context: __SerdeContext
): any => {
  return take(input, {
    Destination: _json,
    Source: _json,
    Weight: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1SankeyDiagramChartConfiguration
 */
const se_SankeyDiagramChartConfiguration = (input: SankeyDiagramChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    DataLabels: _json,
    FieldWells: (_) => se_SankeyDiagramFieldWells(_, context),
    Interactions: _json,
    SortConfiguration: (_) => se_SankeyDiagramSortConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1SankeyDiagramFieldWells
 */
const se_SankeyDiagramFieldWells = (input: SankeyDiagramFieldWells, context: __SerdeContext): any => {
  return take(input, {
    SankeyDiagramAggregatedFieldWells: (_) => se_SankeyDiagramAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1SankeyDiagramSortConfiguration
 */
const se_SankeyDiagramSortConfiguration = (input: SankeyDiagramSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    DestinationItemsLimit: _json,
    SourceItemsLimit: _json,
    WeightSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1SankeyDiagramVisual
 */
const se_SankeyDiagramVisual = (input: SankeyDiagramVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_SankeyDiagramChartConfiguration(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1ScatterPlotCategoricallyAggregatedFieldWells
 */
const se_ScatterPlotCategoricallyAggregatedFieldWells = (
  input: ScatterPlotCategoricallyAggregatedFieldWells,
  context: __SerdeContext
): any => {
  return take(input, {
    Category: _json,
    Label: _json,
    Size: (_) => se_MeasureFieldList(_, context),
    XAxis: (_) => se_MeasureFieldList(_, context),
    YAxis: (_) => se_MeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1ScatterPlotConfiguration
 */
const se_ScatterPlotConfiguration = (input: ScatterPlotConfiguration, context: __SerdeContext): any => {
  return take(input, {
    DataLabels: _json,
    FieldWells: (_) => se_ScatterPlotFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    SortConfiguration: _json,
    Tooltip: (_) => se_TooltipOptions(_, context),
    VisualPalette: _json,
    XAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    XAxisLabelOptions: _json,
    YAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    YAxisLabelOptions: _json,
  });
};

/**
 * serializeAws_restJson1ScatterPlotFieldWells
 */
const se_ScatterPlotFieldWells = (input: ScatterPlotFieldWells, context: __SerdeContext): any => {
  return take(input, {
    ScatterPlotCategoricallyAggregatedFieldWells: (_) => se_ScatterPlotCategoricallyAggregatedFieldWells(_, context),
    ScatterPlotUnaggregatedFieldWells: (_) => se_ScatterPlotUnaggregatedFieldWells(_, context),
  });
};

// se_ScatterPlotSortConfiguration omitted.

/**
 * serializeAws_restJson1ScatterPlotUnaggregatedFieldWells
 */
const se_ScatterPlotUnaggregatedFieldWells = (
  input: ScatterPlotUnaggregatedFieldWells,
  context: __SerdeContext
): any => {
  return take(input, {
    Category: _json,
    Label: _json,
    Size: (_) => se_MeasureFieldList(_, context),
    XAxis: _json,
    YAxis: _json,
  });
};

/**
 * serializeAws_restJson1ScatterPlotVisual
 */
const se_ScatterPlotVisual = (input: ScatterPlotVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_ScatterPlotConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_ScheduleRefreshOnEntity omitted.

// se_SchedulesConfigurations omitted.

/**
 * serializeAws_restJson1ScrollBarOptions
 */
const se_ScrollBarOptions = (input: ScrollBarOptions, context: __SerdeContext): any => {
  return take(input, {
    Visibility: [],
    VisibleRange: (_) => se_VisibleRangeOptions(_, context),
  });
};

// se_SecondaryValueOptions omitted.

// se_SectionAfterPageBreak omitted.

// se_SectionBasedLayoutCanvasSizeOptions omitted.

/**
 * serializeAws_restJson1SectionBasedLayoutConfiguration
 */
const se_SectionBasedLayoutConfiguration = (input: SectionBasedLayoutConfiguration, context: __SerdeContext): any => {
  return take(input, {
    BodySections: (_) => se_BodySectionConfigurationList(_, context),
    CanvasSizeOptions: _json,
    FooterSections: _json,
    HeaderSections: _json,
  });
};

// se_SectionBasedLayoutPaperCanvasSizeOptions omitted.

// se_SectionLayoutConfiguration omitted.

// se_SectionPageBreakConfiguration omitted.

// se_SectionStyle omitted.

// se_SecurityGroupIdList omitted.

// se_SelectedFieldList omitted.

// se_SelectedSheetsFilterScopeConfiguration omitted.

// se_SemanticEntityType omitted.

// se_SemanticType omitted.

/**
 * serializeAws_restJson1SensitiveDoubleList
 */
const se_SensitiveDoubleList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_SensitiveLongList omitted.

// se_SensitiveStringList omitted.

/**
 * serializeAws_restJson1SensitiveTimestampList
 */
const se_SensitiveTimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry.getTime() / 1_000;
    });
};

// se_SeriesItem omitted.

// se_SeriesItemList omitted.

// se_ServiceNowParameters omitted.

// se_SessionTag omitted.

// se_SessionTagList omitted.

/**
 * serializeAws_restJson1SetParameterValueConfiguration
 */
const se_SetParameterValueConfiguration = (input: SetParameterValueConfiguration, context: __SerdeContext): any => {
  return take(input, {
    DestinationParameterName: [],
    Value: (_) => se_DestinationParameterValueConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1SetParameterValueConfigurationList
 */
const se_SetParameterValueConfigurationList = (
  input: SetParameterValueConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SetParameterValueConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ShapeConditionalFormat
 */
const se_ShapeConditionalFormat = (input: ShapeConditionalFormat, context: __SerdeContext): any => {
  return take(input, {
    BackgroundColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

// se_SharedViewConfigurations omitted.

// se_SheetControlInfoIconLabelOptions omitted.

// se_SheetControlLayout omitted.

// se_SheetControlLayoutConfiguration omitted.

// se_SheetControlLayoutList omitted.

// se_SheetControlsOption omitted.

/**
 * serializeAws_restJson1SheetDefinition
 */
const se_SheetDefinition = (input: SheetDefinition, context: __SerdeContext): any => {
  return take(input, {
    ContentType: [],
    CustomActionDefaults: _json,
    Description: [],
    FilterControls: (_) => se_FilterControlList(_, context),
    Images: (_) => se_SheetImageList(_, context),
    Layouts: (_) => se_LayoutList(_, context),
    Name: [],
    ParameterControls: (_) => se_ParameterControlList(_, context),
    SheetControlLayouts: _json,
    SheetId: [],
    TextBoxes: _json,
    Title: [],
    Visuals: (_) => se_VisualList(_, context),
  });
};

/**
 * serializeAws_restJson1SheetDefinitionList
 */
const se_SheetDefinitionList = (input: SheetDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SheetDefinition(entry, context);
    });
};

// se_SheetElementConfigurationOverrides omitted.

// se_SheetElementRenderingRule omitted.

// se_SheetElementRenderingRuleList omitted.

/**
 * serializeAws_restJson1SheetImage
 */
const se_SheetImage = (input: SheetImage, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_ImageCustomActionList(_, context),
    ImageContentAltText: [],
    Interactions: _json,
    Scaling: _json,
    SheetImageId: [],
    Source: _json,
    Tooltip: _json,
  });
};

/**
 * serializeAws_restJson1SheetImageList
 */
const se_SheetImageList = (input: SheetImage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SheetImage(entry, context);
    });
};

// se_SheetImageScalingConfiguration omitted.

// se_SheetImageSource omitted.

// se_SheetImageStaticFileSource omitted.

// se_SheetImageTooltipConfiguration omitted.

// se_SheetImageTooltipText omitted.

// se_SheetLayoutElementMaximizationOption omitted.

// se_SheetStyle omitted.

// se_SheetTextBox omitted.

// se_SheetTextBoxList omitted.

// se_SheetVisualScopingConfiguration omitted.

// se_SheetVisualScopingConfigurations omitted.

// se_ShortFormatText omitted.

// se_SimpleClusterMarker omitted.

// se_SingleAxisOptions omitted.

// se_SliderControlDisplayOptions omitted.

// se_Slot omitted.

// se_Slots omitted.

// se_SmallMultiplesAxisProperties omitted.

// se_SmallMultiplesDimensionFieldList omitted.

// se_SmallMultiplesOptions omitted.

// se_SnapshotAnonymousUser omitted.

// se_SnapshotAnonymousUserList omitted.

/**
 * serializeAws_restJson1SnapshotConfiguration
 */
const se_SnapshotConfiguration = (input: SnapshotConfiguration, context: __SerdeContext): any => {
  return take(input, {
    DestinationConfiguration: _json,
    FileGroups: _json,
    Parameters: (_) => se__Parameters(_, context),
  });
};

// se_SnapshotDestinationConfiguration omitted.

// se_SnapshotFile omitted.

// se_SnapshotFileGroup omitted.

// se_SnapshotFileGroupList omitted.

// se_SnapshotFileList omitted.

// se_SnapshotFileSheetSelection omitted.

// se_SnapshotFileSheetSelectionList omitted.

// se_SnapshotFileSheetSelectionVisualIdList omitted.

// se_SnapshotS3DestinationConfiguration omitted.

// se_SnapshotS3DestinationConfigurationList omitted.

// se_SnapshotUserConfiguration omitted.

// se_SnowflakeParameters omitted.

// se_Spacing omitted.

// se_SparkParameters omitted.

// se_SpatialStaticFile omitted.

// se_SqlServerParameters omitted.

// se_SslProperties omitted.

// se_StarburstParameters omitted.

// se_StatePersistenceConfigurations omitted.

// se_StaticFile omitted.

// se_StaticFileList omitted.

// se_StaticFileS3SourceOptions omitted.

// se_StaticFileSource omitted.

// se_StaticFileUrlSourceOptions omitted.

// se_StringDatasetParameter omitted.

// se_StringDatasetParameterDefaultValues omitted.

// se_StringDatasetParameterValueList omitted.

// se_StringDefaultValueList omitted.

// se_StringDefaultValues omitted.

// se_StringFormatConfiguration omitted.

// se_StringList omitted.

// se_StringParameter omitted.

// se_StringParameterDeclaration omitted.

// se_StringParameterList omitted.

// se_StringValueWhenUnsetConfiguration omitted.

// se_SubnetIdList omitted.

// se_SubtotalOptions omitted.

// se_Synonyms omitted.

/**
 * serializeAws_restJson1TableAggregatedFieldWells
 */
const se_TableAggregatedFieldWells = (input: TableAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    GroupBy: _json,
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

// se_TableBorderOptions omitted.

/**
 * serializeAws_restJson1TableCellConditionalFormatting
 */
const se_TableCellConditionalFormatting = (input: TableCellConditionalFormatting, context: __SerdeContext): any => {
  return take(input, {
    FieldId: [],
    TextFormat: (_) => se_TextConditionalFormat(_, context),
  });
};

// se_TableCellImageSizingConfiguration omitted.

// se_TableCellStyle omitted.

/**
 * serializeAws_restJson1TableConditionalFormatting
 */
const se_TableConditionalFormatting = (input: TableConditionalFormatting, context: __SerdeContext): any => {
  return take(input, {
    ConditionalFormattingOptions: (_) => se_TableConditionalFormattingOptionList(_, context),
  });
};

/**
 * serializeAws_restJson1TableConditionalFormattingOption
 */
const se_TableConditionalFormattingOption = (input: TableConditionalFormattingOption, context: __SerdeContext): any => {
  return take(input, {
    Cell: (_) => se_TableCellConditionalFormatting(_, context),
    Row: (_) => se_TableRowConditionalFormatting(_, context),
  });
};

/**
 * serializeAws_restJson1TableConditionalFormattingOptionList
 */
const se_TableConditionalFormattingOptionList = (
  input: TableConditionalFormattingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TableConditionalFormattingOption(entry, context);
    });
};

/**
 * serializeAws_restJson1TableConfiguration
 */
const se_TableConfiguration = (input: TableConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FieldOptions: _json,
    FieldWells: (_) => se_TableFieldWells(_, context),
    Interactions: _json,
    PaginatedReportOptions: _json,
    SortConfiguration: (_) => se_TableSortConfiguration(_, context),
    TableInlineVisualizations: _json,
    TableOptions: _json,
    TotalOptions: _json,
  });
};

// se_TableFieldCustomIconContent omitted.

// se_TableFieldCustomTextContent omitted.

// se_TableFieldImageConfiguration omitted.

// se_TableFieldLinkConfiguration omitted.

// se_TableFieldLinkContentConfiguration omitted.

// se_TableFieldOption omitted.

// se_TableFieldOptionList omitted.

// se_TableFieldOptions omitted.

// se_TableFieldOrderList omitted.

// se_TableFieldURLConfiguration omitted.

/**
 * serializeAws_restJson1TableFieldWells
 */
const se_TableFieldWells = (input: TableFieldWells, context: __SerdeContext): any => {
  return take(input, {
    TableAggregatedFieldWells: (_) => se_TableAggregatedFieldWells(_, context),
    TableUnaggregatedFieldWells: _json,
  });
};

// se_TableInlineVisualization omitted.

// se_TableInlineVisualizationList omitted.

// se_TableOptions omitted.

// se_TablePaginatedReportOptions omitted.

// se_TablePinnedFieldOptions omitted.

/**
 * serializeAws_restJson1TableRowConditionalFormatting
 */
const se_TableRowConditionalFormatting = (input: TableRowConditionalFormatting, context: __SerdeContext): any => {
  return take(input, {
    BackgroundColor: (_) => se_ConditionalFormattingColor(_, context),
    TextColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

// se_TableSideBorderOptions omitted.

/**
 * serializeAws_restJson1TableSortConfiguration
 */
const se_TableSortConfiguration = (input: TableSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    PaginationConfiguration: _json,
    RowSort: (_) => se_RowSortList(_, context),
  });
};

// se_TableStyleTarget omitted.

// se_TableStyleTargetList omitted.

// se_TableUnaggregatedFieldList omitted.

// se_TableUnaggregatedFieldWells omitted.

/**
 * serializeAws_restJson1TableVisual
 */
const se_TableVisual = (input: TableVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_TableConfiguration(_, context),
    ConditionalFormatting: (_) => se_TableConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_Tag omitted.

// se_TagColumnOperation omitted.

// se_TagList omitted.

// se_TargetVisualList omitted.

// se_TemplateSourceAnalysis omitted.

// se_TemplateSourceEntity omitted.

// se_TemplateSourceTemplate omitted.

/**
 * serializeAws_restJson1TemplateVersionDefinition
 */
const se_TemplateVersionDefinition = (input: TemplateVersionDefinition, context: __SerdeContext): any => {
  return take(input, {
    AnalysisDefaults: _json,
    CalculatedFields: _json,
    ColumnConfigurations: _json,
    DataSetConfigurations: _json,
    FilterGroups: (_) => se_FilterGroupList(_, context),
    Options: _json,
    ParameterDeclarations: (_) => se_ParameterDeclarationList(_, context),
    QueryExecutionOptions: _json,
    Sheets: (_) => se_SheetDefinitionList(_, context),
    StaticFiles: _json,
  });
};

// se_TeradataParameters omitted.

// se_TextAreaControlDisplayOptions omitted.

// se_TextBoxInteractionOptions omitted.

// se_TextBoxMenuOption omitted.

/**
 * serializeAws_restJson1TextConditionalFormat
 */
const se_TextConditionalFormat = (input: TextConditionalFormat, context: __SerdeContext): any => {
  return take(input, {
    BackgroundColor: (_) => se_ConditionalFormattingColor(_, context),
    Icon: _json,
    TextColor: (_) => se_ConditionalFormattingColor(_, context),
  });
};

// se_TextControlPlaceholderOptions omitted.

// se_TextFieldControlDisplayOptions omitted.

// se_ThemeConfiguration omitted.

// se_ThousandSeparatorOptions omitted.

// se_ThresholdAlertsConfigurations omitted.

// se_TileLayoutStyle omitted.

// se_TileStyle omitted.

/**
 * serializeAws_restJson1TimeBasedForecastProperties
 */
const se_TimeBasedForecastProperties = (input: TimeBasedForecastProperties, context: __SerdeContext): any => {
  return take(input, {
    LowerBoundary: __serializeFloat,
    PeriodsBackward: [],
    PeriodsForward: [],
    PredictionInterval: [],
    Seasonality: [],
    UpperBoundary: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1TimeEqualityFilter
 */
const se_TimeEqualityFilter = (input: TimeEqualityFilter, context: __SerdeContext): any => {
  return take(input, {
    Column: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
    FilterId: [],
    ParameterName: [],
    RollingDate: _json,
    TimeGranularity: [],
    Value: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1TimeRangeDrillDownFilter
 */
const se_TimeRangeDrillDownFilter = (input: TimeRangeDrillDownFilter, context: __SerdeContext): any => {
  return take(input, {
    Column: _json,
    RangeMaximum: (_) => _.getTime() / 1_000,
    RangeMinimum: (_) => _.getTime() / 1_000,
    TimeGranularity: [],
  });
};

/**
 * serializeAws_restJson1TimeRangeFilter
 */
const se_TimeRangeFilter = (input: TimeRangeFilter, context: __SerdeContext): any => {
  return take(input, {
    Column: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
    ExcludePeriodConfiguration: _json,
    FilterId: [],
    IncludeMaximum: [],
    IncludeMinimum: [],
    NullOption: [],
    RangeMaximumValue: (_) => se_TimeRangeFilterValue(_, context),
    RangeMinimumValue: (_) => se_TimeRangeFilterValue(_, context),
    TimeGranularity: [],
  });
};

/**
 * serializeAws_restJson1TimeRangeFilterValue
 */
const se_TimeRangeFilterValue = (input: TimeRangeFilterValue, context: __SerdeContext): any => {
  return take(input, {
    Parameter: [],
    RollingDate: _json,
    StaticValue: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1TooltipItem
 */
const se_TooltipItem = (input: TooltipItem, context: __SerdeContext): any => {
  return take(input, {
    ColumnTooltipItem: (_) => se_ColumnTooltipItem(_, context),
    FieldTooltipItem: _json,
  });
};

/**
 * serializeAws_restJson1TooltipItemList
 */
const se_TooltipItemList = (input: TooltipItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TooltipItem(entry, context);
    });
};

/**
 * serializeAws_restJson1TooltipOptions
 */
const se_TooltipOptions = (input: TooltipOptions, context: __SerdeContext): any => {
  return take(input, {
    FieldBasedTooltip: (_) => se_FieldBasedTooltip(_, context),
    SelectedTooltipType: [],
    TooltipVisibility: [],
  });
};

/**
 * serializeAws_restJson1TopBottomFilter
 */
const se_TopBottomFilter = (input: TopBottomFilter, context: __SerdeContext): any => {
  return take(input, {
    AggregationSortConfigurations: (_) => se_AggregationSortConfigurationList(_, context),
    Column: _json,
    DefaultFilterControlConfiguration: (_) => se_DefaultFilterControlConfiguration(_, context),
    FilterId: [],
    Limit: [],
    ParameterName: [],
    TimeGranularity: [],
  });
};

/**
 * serializeAws_restJson1TopBottomMoversComputation
 */
const se_TopBottomMoversComputation = (input: TopBottomMoversComputation, context: __SerdeContext): any => {
  return take(input, {
    Category: _json,
    ComputationId: [],
    MoverSize: [],
    Name: [],
    SortOrder: [],
    Time: _json,
    Type: [],
    Value: (_) => se_MeasureField(_, context),
  });
};

/**
 * serializeAws_restJson1TopBottomRankedComputation
 */
const se_TopBottomRankedComputation = (input: TopBottomRankedComputation, context: __SerdeContext): any => {
  return take(input, {
    Category: _json,
    ComputationId: [],
    Name: [],
    ResultSize: [],
    Type: [],
    Value: (_) => se_MeasureField(_, context),
  });
};

// se_TopicCalculatedField omitted.

// se_TopicCalculatedFields omitted.

// se_TopicCategoryFilter omitted.

// se_TopicCategoryFilterConstant omitted.

// se_TopicColumn omitted.

// se_TopicColumns omitted.

// se_TopicConfigOptions omitted.

// se_TopicConstantValue omitted.

// se_TopicDateRangeFilter omitted.

// se_TopicDetails omitted.

// se_TopicFilter omitted.

// se_TopicFilters omitted.

// se_TopicIR omitted.

// se_TopicIRComparisonMethod omitted.

// se_TopicIRContributionAnalysis omitted.

// se_TopicIRFilterEntry omitted.

// se_TopicIRFilterList omitted.

// se_TopicIRFilterOption omitted.

// se_TopicIRGroupBy omitted.

// se_TopicIRGroupByList omitted.

// se_TopicIRMetric omitted.

// se_TopicIRMetricList omitted.

// se_TopicNamedEntities omitted.

// se_TopicNamedEntity omitted.

// se_TopicNumericEqualityFilter omitted.

// se_TopicNumericRangeFilter omitted.

// se_TopicRangeFilterConstant omitted.

/**
 * serializeAws_restJson1TopicRefreshSchedule
 */
const se_TopicRefreshSchedule = (input: TopicRefreshSchedule, context: __SerdeContext): any => {
  return take(input, {
    BasedOnSpiceSchedule: [],
    IsEnabled: [],
    RepeatAt: [],
    StartingAt: (_) => _.getTime() / 1_000,
    Timezone: [],
    TopicScheduleType: [],
  });
};

// se_TopicRelativeDateFilter omitted.

// se_TopicSearchFilter omitted.

// se_TopicSearchFilterList omitted.

// se_TopicSingularFilterConstant omitted.

// se_TopicSortClause omitted.

// se_TopicTemplate omitted.

/**
 * serializeAws_restJson1TopicVisual
 */
const se_TopicVisual = (input: TopicVisual, context: __SerdeContext): any => {
  return take(input, {
    Ir: _json,
    Role: [],
    SupportingVisuals: (_) => se_TopicVisuals(_, context),
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1TopicVisuals
 */
const se_TopicVisuals = (input: TopicVisual[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TopicVisual(entry, context);
    });
};

/**
 * serializeAws_restJson1TotalAggregationComputation
 */
const se_TotalAggregationComputation = (input: TotalAggregationComputation, context: __SerdeContext): any => {
  return take(input, {
    ComputationId: [],
    Name: [],
    Value: (_) => se_MeasureField(_, context),
  });
};

// se_TotalAggregationFunction omitted.

// se_TotalAggregationOption omitted.

// se_TotalAggregationOptionList omitted.

// se_TotalOptions omitted.

/**
 * serializeAws_restJson1TransformOperation
 */
const se_TransformOperation = (input: TransformOperation, context: __SerdeContext): any => {
  return TransformOperation.visit(input, {
    CastColumnTypeOperation: (value) => ({ CastColumnTypeOperation: _json(value) }),
    CreateColumnsOperation: (value) => ({ CreateColumnsOperation: _json(value) }),
    FilterOperation: (value) => ({ FilterOperation: _json(value) }),
    OverrideDatasetParameterOperation: (value) => ({
      OverrideDatasetParameterOperation: se_OverrideDatasetParameterOperation(value, context),
    }),
    ProjectOperation: (value) => ({ ProjectOperation: _json(value) }),
    RenameColumnOperation: (value) => ({ RenameColumnOperation: _json(value) }),
    TagColumnOperation: (value) => ({ TagColumnOperation: _json(value) }),
    UntagColumnOperation: (value) => ({ UntagColumnOperation: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1TransformOperationList
 */
const se_TransformOperationList = (input: TransformOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TransformOperation(entry, context);
    });
};

// se_TransposedTableOption omitted.

// se_TransposedTableOptionList omitted.

/**
 * serializeAws_restJson1TreeMapAggregatedFieldWells
 */
const se_TreeMapAggregatedFieldWells = (input: TreeMapAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    Colors: (_) => se_TreeMapMeasureFieldList(_, context),
    Groups: _json,
    Sizes: (_) => se_TreeMapMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1TreeMapConfiguration
 */
const se_TreeMapConfiguration = (input: TreeMapConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ColorLabelOptions: _json,
    ColorScale: (_) => se_ColorScale(_, context),
    DataLabels: _json,
    FieldWells: (_) => se_TreeMapFieldWells(_, context),
    GroupLabelOptions: _json,
    Interactions: _json,
    Legend: _json,
    SizeLabelOptions: _json,
    SortConfiguration: (_) => se_TreeMapSortConfiguration(_, context),
    Tooltip: (_) => se_TooltipOptions(_, context),
  });
};

// se_TreeMapDimensionFieldList omitted.

/**
 * serializeAws_restJson1TreeMapFieldWells
 */
const se_TreeMapFieldWells = (input: TreeMapFieldWells, context: __SerdeContext): any => {
  return take(input, {
    TreeMapAggregatedFieldWells: (_) => se_TreeMapAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1TreeMapMeasureFieldList
 */
const se_TreeMapMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

/**
 * serializeAws_restJson1TreeMapSortConfiguration
 */
const se_TreeMapSortConfiguration = (input: TreeMapSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    TreeMapGroupItemsLimitConfiguration: _json,
    TreeMapSort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1TreeMapVisual
 */
const se_TreeMapVisual = (input: TreeMapVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_TreeMapConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_TrendArrowOptions omitted.

// se_TrinoParameters omitted.

// se_TwitterParameters omitted.

// se_TypeParameters omitted.

// se_Typography omitted.

// se_UIColorPalette omitted.

// se_UnaggregatedField omitted.

// se_UnaggregatedFieldList omitted.

// se_UniqueKey omitted.

// se_UniqueKeyColumnNameList omitted.

// se_UniqueKeyList omitted.

// se_UniqueValuesComputation omitted.

// se_UntagColumnOperation omitted.

// se_UpdateLinkPermissionList omitted.

// se_UpdateResourcePermissionList omitted.

// se_UploadSettings omitted.

// se_ValidationStrategy omitted.

/**
 * serializeAws_restJson1VisibleRangeOptions
 */
const se_VisibleRangeOptions = (input: VisibleRangeOptions, context: __SerdeContext): any => {
  return take(input, {
    PercentRange: (_) => se_PercentVisibleRange(_, context),
  });
};

/**
 * serializeAws_restJson1Visual
 */
const se_Visual = (input: Visual, context: __SerdeContext): any => {
  return take(input, {
    BarChartVisual: (_) => se_BarChartVisual(_, context),
    BoxPlotVisual: (_) => se_BoxPlotVisual(_, context),
    ComboChartVisual: (_) => se_ComboChartVisual(_, context),
    CustomContentVisual: (_) => se_CustomContentVisual(_, context),
    EmptyVisual: (_) => se_EmptyVisual(_, context),
    FilledMapVisual: (_) => se_FilledMapVisual(_, context),
    FunnelChartVisual: (_) => se_FunnelChartVisual(_, context),
    GaugeChartVisual: (_) => se_GaugeChartVisual(_, context),
    GeospatialMapVisual: (_) => se_GeospatialMapVisual(_, context),
    HeatMapVisual: (_) => se_HeatMapVisual(_, context),
    HistogramVisual: (_) => se_HistogramVisual(_, context),
    InsightVisual: (_) => se_InsightVisual(_, context),
    KPIVisual: (_) => se_KPIVisual(_, context),
    LayerMapVisual: (_) => se_LayerMapVisual(_, context),
    LineChartVisual: (_) => se_LineChartVisual(_, context),
    PieChartVisual: (_) => se_PieChartVisual(_, context),
    PivotTableVisual: (_) => se_PivotTableVisual(_, context),
    PluginVisual: (_) => se_PluginVisual(_, context),
    RadarChartVisual: (_) => se_RadarChartVisual(_, context),
    SankeyDiagramVisual: (_) => se_SankeyDiagramVisual(_, context),
    ScatterPlotVisual: (_) => se_ScatterPlotVisual(_, context),
    TableVisual: (_) => se_TableVisual(_, context),
    TreeMapVisual: (_) => se_TreeMapVisual(_, context),
    WaterfallVisual: (_) => se_WaterfallVisual(_, context),
    WordCloudVisual: (_) => se_WordCloudVisual(_, context),
  });
};

// se_VisualAxisSortOption omitted.

/**
 * serializeAws_restJson1VisualCustomAction
 */
const se_VisualCustomAction = (input: VisualCustomAction, context: __SerdeContext): any => {
  return take(input, {
    ActionOperations: (_) => se_VisualCustomActionOperationList(_, context),
    CustomActionId: [],
    Name: [],
    Status: [],
    Trigger: [],
  });
};

// se_VisualCustomActionDefaults omitted.

/**
 * serializeAws_restJson1VisualCustomActionList
 */
const se_VisualCustomActionList = (input: VisualCustomAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VisualCustomAction(entry, context);
    });
};

/**
 * serializeAws_restJson1VisualCustomActionOperation
 */
const se_VisualCustomActionOperation = (input: VisualCustomActionOperation, context: __SerdeContext): any => {
  return take(input, {
    FilterOperation: _json,
    NavigationOperation: _json,
    SetParametersOperation: (_) => se_CustomActionSetParametersOperation(_, context),
    URLOperation: _json,
  });
};

/**
 * serializeAws_restJson1VisualCustomActionOperationList
 */
const se_VisualCustomActionOperationList = (input: VisualCustomActionOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VisualCustomActionOperation(entry, context);
    });
};

// se_VisualHighlightOperation omitted.

// se_VisualInteractionOptions omitted.

/**
 * serializeAws_restJson1VisualList
 */
const se_VisualList = (input: Visual[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Visual(entry, context);
    });
};

// se_VisualMenuOption omitted.

// se_VisualOptions omitted.

// se_VisualPalette omitted.

// se_VisualSubtitleLabelOptions omitted.

// se_VisualTitleLabelOptions omitted.

// se_VpcConnectionProperties omitted.

// se_VpcEndpointIdRestrictionRuleMap omitted.

// se_VpcIdRestrictionRuleMap omitted.

/**
 * serializeAws_restJson1WaterfallChartAggregatedFieldWells
 */
const se_WaterfallChartAggregatedFieldWells = (
  input: WaterfallChartAggregatedFieldWells,
  context: __SerdeContext
): any => {
  return take(input, {
    Breakdowns: _json,
    Categories: _json,
    Values: (_) => se_MeasureFieldList(_, context),
  });
};

// se_WaterfallChartColorConfiguration omitted.

/**
 * serializeAws_restJson1WaterfallChartConfiguration
 */
const se_WaterfallChartConfiguration = (input: WaterfallChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    CategoryAxisLabelOptions: _json,
    ColorConfiguration: _json,
    DataLabels: _json,
    FieldWells: (_) => se_WaterfallChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    PrimaryYAxisDisplayOptions: (_) => se_AxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    SortConfiguration: (_) => se_WaterfallChartSortConfiguration(_, context),
    VisualPalette: _json,
    WaterfallChartOptions: _json,
  });
};

/**
 * serializeAws_restJson1WaterfallChartFieldWells
 */
const se_WaterfallChartFieldWells = (input: WaterfallChartFieldWells, context: __SerdeContext): any => {
  return take(input, {
    WaterfallChartAggregatedFieldWells: (_) => se_WaterfallChartAggregatedFieldWells(_, context),
  });
};

// se_WaterfallChartGroupColorConfiguration omitted.

// se_WaterfallChartOptions omitted.

/**
 * serializeAws_restJson1WaterfallChartSortConfiguration
 */
const se_WaterfallChartSortConfiguration = (input: WaterfallChartSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    BreakdownItemsLimit: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1WaterfallVisual
 */
const se_WaterfallVisual = (input: WaterfallVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_WaterfallChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

/**
 * serializeAws_restJson1WhatIfPointScenario
 */
const se_WhatIfPointScenario = (input: WhatIfPointScenario, context: __SerdeContext): any => {
  return take(input, {
    Date: (_) => _.getTime() / 1_000,
    Value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1WhatIfRangeScenario
 */
const se_WhatIfRangeScenario = (input: WhatIfRangeScenario, context: __SerdeContext): any => {
  return take(input, {
    EndDate: (_) => _.getTime() / 1_000,
    StartDate: (_) => _.getTime() / 1_000,
    Value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1WordCloudAggregatedFieldWells
 */
const se_WordCloudAggregatedFieldWells = (input: WordCloudAggregatedFieldWells, context: __SerdeContext): any => {
  return take(input, {
    GroupBy: _json,
    Size: (_) => se_WordCloudMeasureFieldList(_, context),
  });
};

/**
 * serializeAws_restJson1WordCloudChartConfiguration
 */
const se_WordCloudChartConfiguration = (input: WordCloudChartConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryLabelOptions: _json,
    FieldWells: (_) => se_WordCloudFieldWells(_, context),
    Interactions: _json,
    SortConfiguration: (_) => se_WordCloudSortConfiguration(_, context),
    WordCloudOptions: _json,
  });
};

// se_WordCloudDimensionFieldList omitted.

/**
 * serializeAws_restJson1WordCloudFieldWells
 */
const se_WordCloudFieldWells = (input: WordCloudFieldWells, context: __SerdeContext): any => {
  return take(input, {
    WordCloudAggregatedFieldWells: (_) => se_WordCloudAggregatedFieldWells(_, context),
  });
};

/**
 * serializeAws_restJson1WordCloudMeasureFieldList
 */
const se_WordCloudMeasureFieldList = (input: MeasureField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureField(entry, context);
    });
};

// se_WordCloudOptions omitted.

/**
 * serializeAws_restJson1WordCloudSortConfiguration
 */
const se_WordCloudSortConfiguration = (input: WordCloudSortConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CategoryItemsLimit: _json,
    CategorySort: (_) => se_FieldSortOptionsList(_, context),
  });
};

/**
 * serializeAws_restJson1WordCloudVisual
 */
const se_WordCloudVisual = (input: WordCloudVisual, context: __SerdeContext): any => {
  return take(input, {
    Actions: (_) => se_VisualCustomActionList(_, context),
    ChartConfiguration: (_) => se_WordCloudChartConfiguration(_, context),
    ColumnHierarchies: (_) => se_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: [],
    VisualId: [],
  });
};

// se_YAxisOptions omitted.

// de_AccountCustomization omitted.

// de_AccountInfo omitted.

// de_AccountSettings omitted.

// de_ActionList omitted.

// de_ActiveIAMPolicyAssignment omitted.

// de_ActiveIAMPolicyAssignmentList omitted.

// de_AdHocFilteringOption omitted.

// de_AggFunction omitted.

// de_AggFunctionParamMap omitted.

/**
 * deserializeAws_restJson1AggregationFunction
 */
const de_AggregationFunction = (output: any, context: __SerdeContext): AggregationFunction => {
  return take(output, {
    AttributeAggregationFunction: _json,
    CategoricalAggregationFunction: __expectString,
    DateAggregationFunction: __expectString,
    NumericalAggregationFunction: (_: any) => de_NumericalAggregationFunction(_, context),
  }) as any;
};

// de_AggregationFunctionParameters omitted.

// de_AggregationPartitionBy omitted.

// de_AggregationPartitionByList omitted.

/**
 * deserializeAws_restJson1AggregationSortConfiguration
 */
const de_AggregationSortConfiguration = (output: any, context: __SerdeContext): AggregationSortConfiguration => {
  return take(output, {
    AggregationFunction: (_: any) => de_AggregationFunction(_, context),
    Column: _json,
    SortDirection: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AggregationSortConfigurationList
 */
const de_AggregationSortConfigurationList = (output: any, context: __SerdeContext): AggregationSortConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregationSortConfiguration(entry, context);
    });
  return retVal;
};

// de_AllSheetsFilterScopeConfiguration omitted.

// de_AmazonElasticsearchParameters omitted.

// de_AmazonOpenSearchParameters omitted.

/**
 * deserializeAws_restJson1Analysis
 */
const de_Analysis = (output: any, context: __SerdeContext): Analysis => {
  return take(output, {
    AnalysisId: __expectString,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSetArns: _json,
    Errors: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Sheets: (_: any) => de_SheetList(_, context),
    Status: __expectString,
    ThemeArn: __expectString,
  }) as any;
};

// de_AnalysisDefaults omitted.

/**
 * deserializeAws_restJson1AnalysisDefinition
 */
const de_AnalysisDefinition = (output: any, context: __SerdeContext): AnalysisDefinition => {
  return take(output, {
    AnalysisDefaults: _json,
    CalculatedFields: _json,
    ColumnConfigurations: _json,
    DataSetIdentifierDeclarations: _json,
    FilterGroups: (_: any) => de_FilterGroupList(_, context),
    Options: _json,
    ParameterDeclarations: (_: any) => de_ParameterDeclarationList(_, context),
    QueryExecutionOptions: _json,
    Sheets: (_: any) => de_SheetDefinitionList(_, context),
    StaticFiles: _json,
  }) as any;
};

// de_AnalysisError omitted.

// de_AnalysisErrorList omitted.

/**
 * deserializeAws_restJson1AnalysisSummary
 */
const de_AnalysisSummary = (output: any, context: __SerdeContext): AnalysisSummary => {
  return take(output, {
    AnalysisId: __expectString,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AnalysisSummaryList
 */
const de_AnalysisSummaryList = (output: any, context: __SerdeContext): AnalysisSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalysisSummary(entry, context);
    });
  return retVal;
};

// de_Anchor omitted.

// de_AnchorDateConfiguration omitted.

// de_AnonymousUserSnapshotJobResult omitted.

// de_AnonymousUserSnapshotJobResultList omitted.

// de_ApplicationTheme omitted.

/**
 * deserializeAws_restJson1ArcAxisConfiguration
 */
const de_ArcAxisConfiguration = (output: any, context: __SerdeContext): ArcAxisConfiguration => {
  return take(output, {
    Range: (_: any) => de_ArcAxisDisplayRange(_, context),
    ReserveRange: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1ArcAxisDisplayRange
 */
const de_ArcAxisDisplayRange = (output: any, context: __SerdeContext): ArcAxisDisplayRange => {
  return take(output, {
    Max: __limitedParseDouble,
    Min: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ArcConfiguration
 */
const de_ArcConfiguration = (output: any, context: __SerdeContext): ArcConfiguration => {
  return take(output, {
    ArcAngle: __limitedParseDouble,
    ArcThickness: __expectString,
  }) as any;
};

// de_ArcOptions omitted.

// de_AssetBundleCloudFormationOverridePropertyConfiguration omitted.

// de_AssetBundleExportJobAnalysisOverrideProperties omitted.

// de_AssetBundleExportJobAnalysisOverridePropertiesList omitted.

// de_AssetBundleExportJobAnalysisPropertyToOverrideList omitted.

// de_AssetBundleExportJobDashboardOverrideProperties omitted.

// de_AssetBundleExportJobDashboardOverridePropertiesList omitted.

// de_AssetBundleExportJobDashboardPropertyToOverrideList omitted.

// de_AssetBundleExportJobDataSetOverrideProperties omitted.

// de_AssetBundleExportJobDataSetOverridePropertiesList omitted.

// de_AssetBundleExportJobDataSetPropertyToOverrideList omitted.

// de_AssetBundleExportJobDataSourceOverrideProperties omitted.

// de_AssetBundleExportJobDataSourceOverridePropertiesList omitted.

// de_AssetBundleExportJobDataSourcePropertyToOverrideList omitted.

// de_AssetBundleExportJobError omitted.

// de_AssetBundleExportJobErrorList omitted.

// de_AssetBundleExportJobFolderOverrideProperties omitted.

// de_AssetBundleExportJobFolderOverridePropertiesList omitted.

// de_AssetBundleExportJobFolderPropertyToOverrideList omitted.

// de_AssetBundleExportJobRefreshScheduleOverrideProperties omitted.

// de_AssetBundleExportJobRefreshScheduleOverridePropertiesList omitted.

// de_AssetBundleExportJobRefreshSchedulePropertyToOverrideList omitted.

// de_AssetBundleExportJobResourceIdOverrideConfiguration omitted.

/**
 * deserializeAws_restJson1AssetBundleExportJobSummary
 */
const de_AssetBundleExportJobSummary = (output: any, context: __SerdeContext): AssetBundleExportJobSummary => {
  return take(output, {
    Arn: __expectString,
    AssetBundleExportJobId: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportFormat: __expectString,
    IncludeAllDependencies: __expectBoolean,
    IncludePermissions: __expectBoolean,
    IncludeTags: __expectBoolean,
    JobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssetBundleExportJobSummaryList
 */
const de_AssetBundleExportJobSummaryList = (output: any, context: __SerdeContext): AssetBundleExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetBundleExportJobSummary(entry, context);
    });
  return retVal;
};

// de_AssetBundleExportJobThemeOverrideProperties omitted.

// de_AssetBundleExportJobThemeOverridePropertiesList omitted.

// de_AssetBundleExportJobThemePropertyToOverrideList omitted.

// de_AssetBundleExportJobValidationStrategy omitted.

// de_AssetBundleExportJobVPCConnectionOverrideProperties omitted.

// de_AssetBundleExportJobVPCConnectionOverridePropertiesList omitted.

// de_AssetBundleExportJobVPCConnectionPropertyToOverrideList omitted.

// de_AssetBundleExportJobWarning omitted.

// de_AssetBundleExportJobWarningList omitted.

// de_AssetBundleImportJobAnalysisOverrideParameters omitted.

// de_AssetBundleImportJobAnalysisOverrideParametersList omitted.

// de_AssetBundleImportJobAnalysisOverridePermissions omitted.

// de_AssetBundleImportJobAnalysisOverridePermissionsList omitted.

// de_AssetBundleImportJobAnalysisOverrideTags omitted.

// de_AssetBundleImportJobAnalysisOverrideTagsList omitted.

// de_AssetBundleImportJobDashboardOverrideParameters omitted.

// de_AssetBundleImportJobDashboardOverrideParametersList omitted.

// de_AssetBundleImportJobDashboardOverridePermissions omitted.

// de_AssetBundleImportJobDashboardOverridePermissionsList omitted.

// de_AssetBundleImportJobDashboardOverrideTags omitted.

// de_AssetBundleImportJobDashboardOverrideTagsList omitted.

// de_AssetBundleImportJobDataSetOverrideParameters omitted.

// de_AssetBundleImportJobDataSetOverrideParametersList omitted.

// de_AssetBundleImportJobDataSetOverridePermissions omitted.

// de_AssetBundleImportJobDataSetOverridePermissionsList omitted.

// de_AssetBundleImportJobDataSetOverrideTags omitted.

// de_AssetBundleImportJobDataSetOverrideTagsList omitted.

// de_AssetBundleImportJobDataSourceCredentialPair omitted.

// de_AssetBundleImportJobDataSourceCredentials omitted.

// de_AssetBundleImportJobDataSourceOverrideParameters omitted.

// de_AssetBundleImportJobDataSourceOverrideParametersList omitted.

// de_AssetBundleImportJobDataSourceOverridePermissions omitted.

// de_AssetBundleImportJobDataSourceOverridePermissionsList omitted.

// de_AssetBundleImportJobDataSourceOverrideTags omitted.

// de_AssetBundleImportJobDataSourceOverrideTagsList omitted.

// de_AssetBundleImportJobError omitted.

// de_AssetBundleImportJobErrorList omitted.

// de_AssetBundleImportJobFolderOverrideParameters omitted.

// de_AssetBundleImportJobFolderOverrideParametersList omitted.

// de_AssetBundleImportJobFolderOverridePermissions omitted.

// de_AssetBundleImportJobFolderOverridePermissionsList omitted.

// de_AssetBundleImportJobFolderOverrideTags omitted.

// de_AssetBundleImportJobFolderOverrideTagsList omitted.

/**
 * deserializeAws_restJson1AssetBundleImportJobOverrideParameters
 */
const de_AssetBundleImportJobOverrideParameters = (
  output: any,
  context: __SerdeContext
): AssetBundleImportJobOverrideParameters => {
  return take(output, {
    Analyses: _json,
    Dashboards: _json,
    DataSets: _json,
    DataSources: _json,
    Folders: _json,
    RefreshSchedules: (_: any) => de_AssetBundleImportJobRefreshScheduleOverrideParametersList(_, context),
    ResourceIdOverrideConfiguration: _json,
    Themes: _json,
    VPCConnections: _json,
  }) as any;
};

// de_AssetBundleImportJobOverridePermissions omitted.

// de_AssetBundleImportJobOverrideTags omitted.

// de_AssetBundleImportJobOverrideValidationStrategy omitted.

/**
 * deserializeAws_restJson1AssetBundleImportJobRefreshScheduleOverrideParameters
 */
const de_AssetBundleImportJobRefreshScheduleOverrideParameters = (
  output: any,
  context: __SerdeContext
): AssetBundleImportJobRefreshScheduleOverrideParameters => {
  return take(output, {
    DataSetId: __expectString,
    ScheduleId: __expectString,
    StartAfterDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AssetBundleImportJobRefreshScheduleOverrideParametersList
 */
const de_AssetBundleImportJobRefreshScheduleOverrideParametersList = (
  output: any,
  context: __SerdeContext
): AssetBundleImportJobRefreshScheduleOverrideParameters[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetBundleImportJobRefreshScheduleOverrideParameters(entry, context);
    });
  return retVal;
};

// de_AssetBundleImportJobResourceIdOverrideConfiguration omitted.

/**
 * deserializeAws_restJson1AssetBundleImportJobSummary
 */
const de_AssetBundleImportJobSummary = (output: any, context: __SerdeContext): AssetBundleImportJobSummary => {
  return take(output, {
    Arn: __expectString,
    AssetBundleImportJobId: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureAction: __expectString,
    JobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssetBundleImportJobSummaryList
 */
const de_AssetBundleImportJobSummaryList = (output: any, context: __SerdeContext): AssetBundleImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetBundleImportJobSummary(entry, context);
    });
  return retVal;
};

// de_AssetBundleImportJobThemeOverrideParameters omitted.

// de_AssetBundleImportJobThemeOverrideParametersList omitted.

// de_AssetBundleImportJobThemeOverridePermissions omitted.

// de_AssetBundleImportJobThemeOverridePermissionsList omitted.

// de_AssetBundleImportJobThemeOverrideTags omitted.

// de_AssetBundleImportJobThemeOverrideTagsList omitted.

// de_AssetBundleImportJobVPCConnectionOverrideParameters omitted.

// de_AssetBundleImportJobVPCConnectionOverrideParametersList omitted.

// de_AssetBundleImportJobVPCConnectionOverrideTags omitted.

// de_AssetBundleImportJobVPCConnectionOverrideTagsList omitted.

// de_AssetBundleImportJobWarning omitted.

// de_AssetBundleImportJobWarningList omitted.

// de_AssetBundleImportSourceDescription omitted.

// de_AssetBundlePrincipalList omitted.

// de_AssetBundleResourceArns omitted.

// de_AssetBundleResourceLinkSharingConfiguration omitted.

// de_AssetBundleResourcePermissions omitted.

// de_AssetBundleRestrictiveResourceIdList omitted.

// de_AssetOptions omitted.

// de_AthenaParameters omitted.

// de_AttributeAggregationFunction omitted.

// de_AuroraParameters omitted.

// de_AuroraPostgreSqlParameters omitted.

// de_AuthorizedTargetsByService omitted.

// de_AuthorizedTargetsByServices omitted.

// de_AuthorizedTargetsList omitted.

// de_AuthorSpecifiedAggregations omitted.

// de_AwsIotAnalyticsParameters omitted.

/**
 * deserializeAws_restJson1AxisDataOptions
 */
const de_AxisDataOptions = (output: any, context: __SerdeContext): AxisDataOptions => {
  return take(output, {
    DateAxisOptions: _json,
    NumericAxisOptions: (_: any) => de_NumericAxisOptions(_, context),
  }) as any;
};

// de_AxisDisplayDataDrivenRange omitted.

/**
 * deserializeAws_restJson1AxisDisplayMinMaxRange
 */
const de_AxisDisplayMinMaxRange = (output: any, context: __SerdeContext): AxisDisplayMinMaxRange => {
  return take(output, {
    Maximum: __limitedParseDouble,
    Minimum: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AxisDisplayOptions
 */
const de_AxisDisplayOptions = (output: any, context: __SerdeContext): AxisDisplayOptions => {
  return take(output, {
    AxisLineVisibility: __expectString,
    AxisOffset: __expectString,
    DataOptions: (_: any) => de_AxisDataOptions(_, context),
    GridLineVisibility: __expectString,
    ScrollbarOptions: (_: any) => de_ScrollBarOptions(_, context),
    TickLabelOptions: (_: any) => de_AxisTickLabelOptions(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AxisDisplayRange
 */
const de_AxisDisplayRange = (output: any, context: __SerdeContext): AxisDisplayRange => {
  return take(output, {
    DataDriven: _json,
    MinMax: (_: any) => de_AxisDisplayMinMaxRange(_, context),
  }) as any;
};

// de_AxisLabelOptions omitted.

// de_AxisLabelOptionsList omitted.

// de_AxisLabelReferenceOptions omitted.

/**
 * deserializeAws_restJson1AxisLinearScale
 */
const de_AxisLinearScale = (output: any, context: __SerdeContext): AxisLinearScale => {
  return take(output, {
    StepCount: __expectInt32,
    StepSize: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AxisLogarithmicScale
 */
const de_AxisLogarithmicScale = (output: any, context: __SerdeContext): AxisLogarithmicScale => {
  return take(output, {
    Base: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AxisScale
 */
const de_AxisScale = (output: any, context: __SerdeContext): AxisScale => {
  return take(output, {
    Linear: (_: any) => de_AxisLinearScale(_, context),
    Logarithmic: (_: any) => de_AxisLogarithmicScale(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AxisTickLabelOptions
 */
const de_AxisTickLabelOptions = (output: any, context: __SerdeContext): AxisTickLabelOptions => {
  return take(output, {
    LabelOptions: _json,
    RotationAngle: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1BarChartAggregatedFieldWells
 */
const de_BarChartAggregatedFieldWells = (output: any, context: __SerdeContext): BarChartAggregatedFieldWells => {
  return take(output, {
    Category: _json,
    Colors: _json,
    SmallMultiples: _json,
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BarChartConfiguration
 */
const de_BarChartConfiguration = (output: any, context: __SerdeContext): BarChartConfiguration => {
  return take(output, {
    BarsArrangement: __expectString,
    CategoryAxis: (_: any) => de_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    ColorLabelOptions: _json,
    ContributionAnalysisDefaults: _json,
    DataLabels: _json,
    FieldWells: (_: any) => de_BarChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    Orientation: __expectString,
    ReferenceLines: (_: any) => de_ReferenceLineList(_, context),
    SmallMultiplesOptions: _json,
    SortConfiguration: (_: any) => de_BarChartSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    ValueAxis: (_: any) => de_AxisDisplayOptions(_, context),
    ValueLabelOptions: _json,
    VisualPalette: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1BarChartFieldWells
 */
const de_BarChartFieldWells = (output: any, context: __SerdeContext): BarChartFieldWells => {
  return take(output, {
    BarChartAggregatedFieldWells: (_: any) => de_BarChartAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BarChartSortConfiguration
 */
const de_BarChartSortConfiguration = (output: any, context: __SerdeContext): BarChartSortConfiguration => {
  return take(output, {
    CategoryItemsLimit: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
    ColorItemsLimit: _json,
    ColorSort: (_: any) => de_FieldSortOptionsList(_, context),
    SmallMultiplesLimitConfiguration: _json,
    SmallMultiplesSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BarChartVisual
 */
const de_BarChartVisual = (output: any, context: __SerdeContext): BarChartVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_BarChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_BigQueryParameters omitted.

// de_BinCountOptions omitted.

/**
 * deserializeAws_restJson1BinWidthOptions
 */
const de_BinWidthOptions = (output: any, context: __SerdeContext): BinWidthOptions => {
  return take(output, {
    BinCountLimit: __expectLong,
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1BodySectionConfiguration
 */
const de_BodySectionConfiguration = (output: any, context: __SerdeContext): BodySectionConfiguration => {
  return take(output, {
    Content: _json,
    PageBreakConfiguration: _json,
    RepeatConfiguration: (_: any) => de_BodySectionRepeatConfiguration(_, context),
    SectionId: __expectString,
    Style: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1BodySectionConfigurationList
 */
const de_BodySectionConfigurationList = (output: any, context: __SerdeContext): BodySectionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BodySectionConfiguration(entry, context);
    });
  return retVal;
};

// de_BodySectionContent omitted.

/**
 * deserializeAws_restJson1BodySectionDynamicCategoryDimensionConfiguration
 */
const de_BodySectionDynamicCategoryDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): BodySectionDynamicCategoryDimensionConfiguration => {
  return take(output, {
    Column: _json,
    Limit: __expectInt32,
    SortByMetrics: (_: any) => de_BodySectionDynamicDimensionSortConfigurationList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BodySectionDynamicDimensionSortConfigurationList
 */
const de_BodySectionDynamicDimensionSortConfigurationList = (output: any, context: __SerdeContext): ColumnSort[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ColumnSort(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BodySectionDynamicNumericDimensionConfiguration
 */
const de_BodySectionDynamicNumericDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): BodySectionDynamicNumericDimensionConfiguration => {
  return take(output, {
    Column: _json,
    Limit: __expectInt32,
    SortByMetrics: (_: any) => de_BodySectionDynamicDimensionSortConfigurationList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BodySectionRepeatConfiguration
 */
const de_BodySectionRepeatConfiguration = (output: any, context: __SerdeContext): BodySectionRepeatConfiguration => {
  return take(output, {
    DimensionConfigurations: (_: any) => de_BodySectionRepeatDimensionConfigurationList(_, context),
    NonRepeatingVisuals: _json,
    PageBreakConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1BodySectionRepeatDimensionConfiguration
 */
const de_BodySectionRepeatDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): BodySectionRepeatDimensionConfiguration => {
  return take(output, {
    DynamicCategoryDimensionConfiguration: (_: any) => de_BodySectionDynamicCategoryDimensionConfiguration(_, context),
    DynamicNumericDimensionConfiguration: (_: any) => de_BodySectionDynamicNumericDimensionConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BodySectionRepeatDimensionConfigurationList
 */
const de_BodySectionRepeatDimensionConfigurationList = (
  output: any,
  context: __SerdeContext
): BodySectionRepeatDimensionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BodySectionRepeatDimensionConfiguration(entry, context);
    });
  return retVal;
};

// de_BodySectionRepeatPageBreakConfiguration omitted.

// de_BorderStyle omitted.

/**
 * deserializeAws_restJson1BoxPlotAggregatedFieldWells
 */
const de_BoxPlotAggregatedFieldWells = (output: any, context: __SerdeContext): BoxPlotAggregatedFieldWells => {
  return take(output, {
    GroupBy: _json,
    Values: (_: any) => de_BoxPlotMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BoxPlotChartConfiguration
 */
const de_BoxPlotChartConfiguration = (output: any, context: __SerdeContext): BoxPlotChartConfiguration => {
  return take(output, {
    BoxPlotOptions: _json,
    CategoryAxis: (_: any) => de_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    FieldWells: (_: any) => de_BoxPlotFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    PrimaryYAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    ReferenceLines: (_: any) => de_ReferenceLineList(_, context),
    SortConfiguration: (_: any) => de_BoxPlotSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    VisualPalette: _json,
  }) as any;
};

// de_BoxPlotDimensionFieldList omitted.

/**
 * deserializeAws_restJson1BoxPlotFieldWells
 */
const de_BoxPlotFieldWells = (output: any, context: __SerdeContext): BoxPlotFieldWells => {
  return take(output, {
    BoxPlotAggregatedFieldWells: (_: any) => de_BoxPlotAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BoxPlotMeasureFieldList
 */
const de_BoxPlotMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

// de_BoxPlotOptions omitted.

/**
 * deserializeAws_restJson1BoxPlotSortConfiguration
 */
const de_BoxPlotSortConfiguration = (output: any, context: __SerdeContext): BoxPlotSortConfiguration => {
  return take(output, {
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
    PaginationConfiguration: _json,
  }) as any;
};

// de_BoxPlotStyleOptions omitted.

/**
 * deserializeAws_restJson1BoxPlotVisual
 */
const de_BoxPlotVisual = (output: any, context: __SerdeContext): BoxPlotVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_BoxPlotChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_BrandColorPalette omitted.

// de_BrandDefinition omitted.

/**
 * deserializeAws_restJson1BrandDetail
 */
const de_BrandDetail = (output: any, context: __SerdeContext): BrandDetail => {
  return take(output, {
    Arn: __expectString,
    BrandId: __expectString,
    BrandStatus: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Errors: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Logo: _json,
    VersionId: __expectString,
    VersionStatus: __expectString,
  }) as any;
};

// de_BrandElementStyle omitted.

/**
 * deserializeAws_restJson1BrandSummary
 */
const de_BrandSummary = (output: any, context: __SerdeContext): BrandSummary => {
  return take(output, {
    Arn: __expectString,
    BrandId: __expectString,
    BrandName: __expectString,
    BrandStatus: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1BrandSummaryList
 */
const de_BrandSummaryList = (output: any, context: __SerdeContext): BrandSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BrandSummary(entry, context);
    });
  return retVal;
};

// de_CalculatedColumn omitted.

// de_CalculatedColumnList omitted.

// de_CalculatedField omitted.

// de_CalculatedFieldReferenceList omitted.

// de_CalculatedFields omitted.

// de_CalculatedMeasureField omitted.

// de_Capabilities omitted.

// de_CascadingControlConfiguration omitted.

// de_CascadingControlSource omitted.

// de_CascadingControlSourceList omitted.

// de_CastColumnTypeOperation omitted.

// de_CategoricalDimensionField omitted.

// de_CategoricalMeasureField omitted.

// de_CategoryDrillDownFilter omitted.

/**
 * deserializeAws_restJson1CategoryFilter
 */
const de_CategoryFilter = (output: any, context: __SerdeContext): CategoryFilter => {
  return take(output, {
    Column: _json,
    Configuration: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
    FilterId: __expectString,
  }) as any;
};

// de_CategoryFilterConfiguration omitted.

/**
 * deserializeAws_restJson1CategoryInnerFilter
 */
const de_CategoryInnerFilter = (output: any, context: __SerdeContext): CategoryInnerFilter => {
  return take(output, {
    Column: _json,
    Configuration: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
  }) as any;
};

// de_CategoryValueList omitted.

// de_CellValueSynonym omitted.

// de_CellValueSynonyms omitted.

// de_ChartAxisLabelOptions omitted.

// de_ClusterMarker omitted.

// de_ClusterMarkerConfiguration omitted.

// de_CollectiveConstant omitted.

// de_CollectiveConstantEntry omitted.

// de_CollectiveConstantEntryList omitted.

// de_ColorList omitted.

/**
 * deserializeAws_restJson1ColorScale
 */
const de_ColorScale = (output: any, context: __SerdeContext): ColorScale => {
  return take(output, {
    ColorFillType: __expectString,
    Colors: (_: any) => de_ColorScaleColorList(_, context),
    NullValueColor: (_: any) => de_DataColor(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ColorScaleColorList
 */
const de_ColorScaleColorList = (output: any, context: __SerdeContext): DataColor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataColor(entry, context);
    });
  return retVal;
};

// de_ColorsConfiguration omitted.

// de_ColumnConfiguration omitted.

// de_ColumnConfigurationList omitted.

// de_ColumnDescription omitted.

// de_ColumnGroup omitted.

// de_ColumnGroupColumnSchema omitted.

// de_ColumnGroupColumnSchemaList omitted.

// de_ColumnGroupList omitted.

// de_ColumnGroupSchema omitted.

// de_ColumnGroupSchemaList omitted.

/**
 * deserializeAws_restJson1ColumnHierarchy
 */
const de_ColumnHierarchy = (output: any, context: __SerdeContext): ColumnHierarchy => {
  return take(output, {
    DateTimeHierarchy: (_: any) => de_DateTimeHierarchy(_, context),
    ExplicitHierarchy: (_: any) => de_ExplicitHierarchy(_, context),
    PredefinedHierarchy: (_: any) => de_PredefinedHierarchy(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ColumnHierarchyList
 */
const de_ColumnHierarchyList = (output: any, context: __SerdeContext): ColumnHierarchy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ColumnHierarchy(entry, context);
    });
  return retVal;
};

// de_ColumnIdentifier omitted.

// de_ColumnLevelPermissionRule omitted.

// de_ColumnLevelPermissionRuleList omitted.

// de_ColumnList omitted.

// de_ColumnNameList omitted.

// de_ColumnSchema omitted.

// de_ColumnSchemaList omitted.

/**
 * deserializeAws_restJson1ColumnSort
 */
const de_ColumnSort = (output: any, context: __SerdeContext): ColumnSort => {
  return take(output, {
    AggregationFunction: (_: any) => de_AggregationFunction(_, context),
    Direction: __expectString,
    SortBy: _json,
  }) as any;
};

// de_ColumnTag omitted.

// de_ColumnTagList omitted.

// de_ColumnTagNames omitted.

/**
 * deserializeAws_restJson1ColumnTooltipItem
 */
const de_ColumnTooltipItem = (output: any, context: __SerdeContext): ColumnTooltipItem => {
  return take(output, {
    Aggregation: (_: any) => de_AggregationFunction(_, context),
    Column: _json,
    Label: __expectString,
    TooltipTarget: __expectString,
    Visibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ComboChartAggregatedFieldWells
 */
const de_ComboChartAggregatedFieldWells = (output: any, context: __SerdeContext): ComboChartAggregatedFieldWells => {
  return take(output, {
    BarValues: (_: any) => de_MeasureFieldList(_, context),
    Category: _json,
    Colors: _json,
    LineValues: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ComboChartConfiguration
 */
const de_ComboChartConfiguration = (output: any, context: __SerdeContext): ComboChartConfiguration => {
  return take(output, {
    BarDataLabels: _json,
    BarsArrangement: __expectString,
    CategoryAxis: (_: any) => de_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    ColorLabelOptions: _json,
    FieldWells: (_: any) => de_ComboChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    LineDataLabels: _json,
    PrimaryYAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    ReferenceLines: (_: any) => de_ReferenceLineList(_, context),
    SecondaryYAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    SecondaryYAxisLabelOptions: _json,
    SingleAxisOptions: _json,
    SortConfiguration: (_: any) => de_ComboChartSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    VisualPalette: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ComboChartFieldWells
 */
const de_ComboChartFieldWells = (output: any, context: __SerdeContext): ComboChartFieldWells => {
  return take(output, {
    ComboChartAggregatedFieldWells: (_: any) => de_ComboChartAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ComboChartSortConfiguration
 */
const de_ComboChartSortConfiguration = (output: any, context: __SerdeContext): ComboChartSortConfiguration => {
  return take(output, {
    CategoryItemsLimit: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
    ColorItemsLimit: _json,
    ColorSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ComboChartVisual
 */
const de_ComboChartVisual = (output: any, context: __SerdeContext): ComboChartVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_ComboChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_ComparativeOrder omitted.

// de_ComparisonConfiguration omitted.

// de_ComparisonFormatConfiguration omitted.

/**
 * deserializeAws_restJson1Computation
 */
const de_Computation = (output: any, context: __SerdeContext): Computation => {
  return take(output, {
    Forecast: (_: any) => de_ForecastComputation(_, context),
    GrowthRate: (_: any) => de_GrowthRateComputation(_, context),
    MaximumMinimum: (_: any) => de_MaximumMinimumComputation(_, context),
    MetricComparison: (_: any) => de_MetricComparisonComputation(_, context),
    PeriodOverPeriod: (_: any) => de_PeriodOverPeriodComputation(_, context),
    PeriodToDate: (_: any) => de_PeriodToDateComputation(_, context),
    TopBottomMovers: (_: any) => de_TopBottomMoversComputation(_, context),
    TopBottomRanked: (_: any) => de_TopBottomRankedComputation(_, context),
    TotalAggregation: (_: any) => de_TotalAggregationComputation(_, context),
    UniqueValues: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ComputationList
 */
const de_ComputationList = (output: any, context: __SerdeContext): Computation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Computation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConditionalFormattingColor
 */
const de_ConditionalFormattingColor = (output: any, context: __SerdeContext): ConditionalFormattingColor => {
  return take(output, {
    Gradient: (_: any) => de_ConditionalFormattingGradientColor(_, context),
    Solid: _json,
  }) as any;
};

// de_ConditionalFormattingCustomIconCondition omitted.

// de_ConditionalFormattingCustomIconOptions omitted.

/**
 * deserializeAws_restJson1ConditionalFormattingGradientColor
 */
const de_ConditionalFormattingGradientColor = (
  output: any,
  context: __SerdeContext
): ConditionalFormattingGradientColor => {
  return take(output, {
    Color: (_: any) => de_GradientColor(_, context),
    Expression: __expectString,
  }) as any;
};

// de_ConditionalFormattingIcon omitted.

// de_ConditionalFormattingIconDisplayConfiguration omitted.

// de_ConditionalFormattingIconSet omitted.

// de_ConditionalFormattingSolidColor omitted.

// de_ContextMenuOption omitted.

// de_ContributionAnalysisDefault omitted.

// de_ContributionAnalysisDefaultList omitted.

// de_ContributionAnalysisFactor omitted.

// de_ContributionAnalysisFactorsList omitted.

// de_ContributionAnalysisTimeRanges omitted.

// de_ContributorDimensionList omitted.

// de_CreateColumnsOperation omitted.

// de_CurrencyDisplayFormatConfiguration omitted.

// de_CustomActionColumnList omitted.

// de_CustomActionFilterOperation omitted.

// de_CustomActionNavigationOperation omitted.

/**
 * deserializeAws_restJson1CustomActionSetParametersOperation
 */
const de_CustomActionSetParametersOperation = (
  output: any,
  context: __SerdeContext
): CustomActionSetParametersOperation => {
  return take(output, {
    ParameterValueConfigurations: (_: any) => de_SetParameterValueConfigurationList(_, context),
  }) as any;
};

// de_CustomActionURLOperation omitted.

// de_CustomColor omitted.

// de_CustomColorsList omitted.

// de_CustomContentConfiguration omitted.

/**
 * deserializeAws_restJson1CustomContentVisual
 */
const de_CustomContentVisual = (output: any, context: __SerdeContext): CustomContentVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: _json,
    DataSetIdentifier: __expectString,
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_CustomFilterConfiguration omitted.

// de_CustomFilterListConfiguration omitted.

// de_CustomInstructions omitted.

// de_CustomNarrativeOptions omitted.

/**
 * deserializeAws_restJson1CustomParameterValues
 */
const de_CustomParameterValues = (output: any, context: __SerdeContext): CustomParameterValues => {
  return take(output, {
    DateTimeValues: (_: any) => de_DateTimeDefaultValueList(_, context),
    DecimalValues: (_: any) => de_DecimalDefaultValueList(_, context),
    IntegerValues: _json,
    StringValues: _json,
  }) as any;
};

// de_CustomPermissions omitted.

// de_CustomPermissionsList omitted.

// de_CustomSql omitted.

/**
 * deserializeAws_restJson1CustomValuesConfiguration
 */
const de_CustomValuesConfiguration = (output: any, context: __SerdeContext): CustomValuesConfiguration => {
  return take(output, {
    CustomValues: (_: any) => de_CustomParameterValues(_, context),
    IncludeNullValue: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1Dashboard
 */
const de_Dashboard = (output: any, context: __SerdeContext): Dashboard => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DashboardId: __expectString,
    LastPublishedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LinkEntities: _json,
    Name: __expectString,
    Version: (_: any) => de_DashboardVersion(_, context),
  }) as any;
};

// de_DashboardError omitted.

// de_DashboardErrorList omitted.

// de_DashboardPublishOptions omitted.

/**
 * deserializeAws_restJson1DashboardSummary
 */
const de_DashboardSummary = (output: any, context: __SerdeContext): DashboardSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DashboardId: __expectString,
    LastPublishedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    PublishedVersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1DashboardSummaryList
 */
const de_DashboardSummaryList = (output: any, context: __SerdeContext): DashboardSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashboardSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DashboardVersion
 */
const de_DashboardVersion = (output: any, context: __SerdeContext): DashboardVersion => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSetArns: _json,
    Description: __expectString,
    Errors: _json,
    Sheets: (_: any) => de_SheetList(_, context),
    SourceEntityArn: __expectString,
    Status: __expectString,
    ThemeArn: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1DashboardVersionDefinition
 */
const de_DashboardVersionDefinition = (output: any, context: __SerdeContext): DashboardVersionDefinition => {
  return take(output, {
    AnalysisDefaults: _json,
    CalculatedFields: _json,
    ColumnConfigurations: _json,
    DataSetIdentifierDeclarations: _json,
    FilterGroups: (_: any) => de_FilterGroupList(_, context),
    Options: _json,
    ParameterDeclarations: (_: any) => de_ParameterDeclarationList(_, context),
    Sheets: (_: any) => de_SheetDefinitionList(_, context),
    StaticFiles: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DashboardVersionSummary
 */
const de_DashboardVersionSummary = (output: any, context: __SerdeContext): DashboardVersionSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    SourceEntityArn: __expectString,
    Status: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1DashboardVersionSummaryList
 */
const de_DashboardVersionSummaryList = (output: any, context: __SerdeContext): DashboardVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashboardVersionSummary(entry, context);
    });
  return retVal;
};

// de_DashboardVisualPublishOptions omitted.

// de_DashboardVisualResult omitted.

// de_DataAggregation omitted.

// de_DataBarsOptions omitted.

// de_DatabaseGroupList omitted.

// de_DatabricksParameters omitted.

/**
 * deserializeAws_restJson1DataColor
 */
const de_DataColor = (output: any, context: __SerdeContext): DataColor => {
  return take(output, {
    Color: __expectString,
    DataValue: __limitedParseDouble,
  }) as any;
};

// de_DataColorPalette omitted.

// de_DataFieldSeriesItem omitted.

// de_DataLabelOptions omitted.

// de_DataLabelType omitted.

// de_DataLabelTypes omitted.

// de_DataPathColor omitted.

// de_DataPathColorList omitted.

// de_DataPathLabelType omitted.

// de_DataPathSort omitted.

// de_DataPathType omitted.

// de_DataPathValue omitted.

// de_DataPathValueList omitted.

// de_DataPointDrillUpDownOption omitted.

// de_DataPointMenuLabelOption omitted.

// de_DataPointTooltipOption omitted.

// de_DataQAEnabledOption omitted.

/**
 * deserializeAws_restJson1DataSet
 */
const de_DataSet = (output: any, context: __SerdeContext): DataSet => {
  return take(output, {
    Arn: __expectString,
    ColumnGroups: _json,
    ColumnLevelPermissionRules: _json,
    ConsumedSpiceCapacityInBytes: __expectLong,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSetId: __expectString,
    DataSetUsageConfiguration: _json,
    DatasetParameters: (_: any) => de_DatasetParameterList(_, context),
    FieldFolders: _json,
    ImportMode: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogicalTableMap: (_: any) => de_LogicalTableMap(_, context),
    Name: __expectString,
    OutputColumns: _json,
    PerformanceConfiguration: _json,
    PhysicalTableMap: _json,
    RowLevelPermissionDataSet: _json,
    RowLevelPermissionTagConfiguration: _json,
    UseAs: __expectString,
  }) as any;
};

// de_DataSetArnsList omitted.

// de_DataSetConfiguration omitted.

// de_DataSetConfigurationList omitted.

// de_DataSetIdentifierDeclaration omitted.

// de_DataSetIdentifierDeclarationList omitted.

// de_DatasetMetadata omitted.

/**
 * deserializeAws_restJson1DatasetParameter
 */
const de_DatasetParameter = (output: any, context: __SerdeContext): DatasetParameter => {
  return take(output, {
    DateTimeDatasetParameter: (_: any) => de_DateTimeDatasetParameter(_, context),
    DecimalDatasetParameter: (_: any) => de_DecimalDatasetParameter(_, context),
    IntegerDatasetParameter: _json,
    StringDatasetParameter: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DatasetParameterList
 */
const de_DatasetParameterList = (output: any, context: __SerdeContext): DatasetParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetParameter(entry, context);
    });
  return retVal;
};

// de_DataSetRefreshProperties omitted.

// de_Datasets omitted.

// de_DataSetSchema omitted.

/**
 * deserializeAws_restJson1DataSetSummary
 */
const de_DataSetSummary = (output: any, context: __SerdeContext): DataSetSummary => {
  return take(output, {
    Arn: __expectString,
    ColumnLevelPermissionRulesApplied: __expectBoolean,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSetId: __expectString,
    ImportMode: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RowLevelPermissionDataSet: _json,
    RowLevelPermissionTagConfigurationApplied: __expectBoolean,
    UseAs: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataSetSummaryList
 */
const de_DataSetSummaryList = (output: any, context: __SerdeContext): DataSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSetSummary(entry, context);
    });
  return retVal;
};

// de_DataSetUsageConfiguration omitted.

/**
 * deserializeAws_restJson1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return take(output, {
    AlternateDataSourceParameters: _json,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSourceId: __expectString,
    DataSourceParameters: (_: any) => _json(__expectUnion(_)),
    ErrorInfo: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SecretArn: __expectString,
    SslProperties: _json,
    Status: __expectString,
    Type: __expectString,
    VpcConnectionProperties: _json,
  }) as any;
};

// de_DataSourceErrorInfo omitted.

/**
 * deserializeAws_restJson1DataSourceList
 */
const de_DataSourceList = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSource(entry, context);
    });
  return retVal;
};

// de_DataSourceParameters omitted.

// de_DataSourceParametersList omitted.

/**
 * deserializeAws_restJson1DataSourceSummary
 */
const de_DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSourceId: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceSummaryList
 */
const de_DataSourceSummaryList = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceSummary(entry, context);
    });
  return retVal;
};

// de_DateAxisOptions omitted.

// de_DateDimensionField omitted.

// de_DateMeasureField omitted.

/**
 * deserializeAws_restJson1DateTimeDatasetParameter
 */
const de_DateTimeDatasetParameter = (output: any, context: __SerdeContext): DateTimeDatasetParameter => {
  return take(output, {
    DefaultValues: (_: any) => de_DateTimeDatasetParameterDefaultValues(_, context),
    Id: __expectString,
    Name: __expectString,
    TimeGranularity: __expectString,
    ValueType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DateTimeDatasetParameterDefaultValues
 */
const de_DateTimeDatasetParameterDefaultValues = (
  output: any,
  context: __SerdeContext
): DateTimeDatasetParameterDefaultValues => {
  return take(output, {
    StaticValues: (_: any) => de_DateTimeDatasetParameterValueList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DateTimeDatasetParameterValueList
 */
const de_DateTimeDatasetParameterValueList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DateTimeDefaultValueList
 */
const de_DateTimeDefaultValueList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DateTimeDefaultValues
 */
const de_DateTimeDefaultValues = (output: any, context: __SerdeContext): DateTimeDefaultValues => {
  return take(output, {
    DynamicValue: _json,
    RollingDate: _json,
    StaticValues: (_: any) => de_DateTimeDefaultValueList(_, context),
  }) as any;
};

// de_DateTimeFormatConfiguration omitted.

/**
 * deserializeAws_restJson1DateTimeHierarchy
 */
const de_DateTimeHierarchy = (output: any, context: __SerdeContext): DateTimeHierarchy => {
  return take(output, {
    DrillDownFilters: (_: any) => de_DrillDownFilterList(_, context),
    HierarchyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DateTimeParameter
 */
const de_DateTimeParameter = (output: any, context: __SerdeContext): DateTimeParameter => {
  return take(output, {
    Name: __expectString,
    Values: (_: any) => de_SensitiveTimestampList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DateTimeParameterDeclaration
 */
const de_DateTimeParameterDeclaration = (output: any, context: __SerdeContext): DateTimeParameterDeclaration => {
  return take(output, {
    DefaultValues: (_: any) => de_DateTimeDefaultValues(_, context),
    MappedDataSetParameters: _json,
    Name: __expectString,
    TimeGranularity: __expectString,
    ValueWhenUnset: (_: any) => de_DateTimeValueWhenUnsetConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DateTimeParameterList
 */
const de_DateTimeParameterList = (output: any, context: __SerdeContext): DateTimeParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DateTimeParameter(entry, context);
    });
  return retVal;
};

// de_DateTimePickerControlDisplayOptions omitted.

/**
 * deserializeAws_restJson1DateTimeValueWhenUnsetConfiguration
 */
const de_DateTimeValueWhenUnsetConfiguration = (
  output: any,
  context: __SerdeContext
): DateTimeValueWhenUnsetConfiguration => {
  return take(output, {
    CustomValue: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ValueWhenUnsetOption: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DecimalDatasetParameter
 */
const de_DecimalDatasetParameter = (output: any, context: __SerdeContext): DecimalDatasetParameter => {
  return take(output, {
    DefaultValues: (_: any) => de_DecimalDatasetParameterDefaultValues(_, context),
    Id: __expectString,
    Name: __expectString,
    ValueType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DecimalDatasetParameterDefaultValues
 */
const de_DecimalDatasetParameterDefaultValues = (
  output: any,
  context: __SerdeContext
): DecimalDatasetParameterDefaultValues => {
  return take(output, {
    StaticValues: (_: any) => de_DecimalDatasetParameterValueList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DecimalDatasetParameterValueList
 */
const de_DecimalDatasetParameterValueList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DecimalDefaultValueList
 */
const de_DecimalDefaultValueList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DecimalDefaultValues
 */
const de_DecimalDefaultValues = (output: any, context: __SerdeContext): DecimalDefaultValues => {
  return take(output, {
    DynamicValue: _json,
    StaticValues: (_: any) => de_DecimalDefaultValueList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DecimalParameter
 */
const de_DecimalParameter = (output: any, context: __SerdeContext): DecimalParameter => {
  return take(output, {
    Name: __expectString,
    Values: (_: any) => de_SensitiveDoubleList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DecimalParameterDeclaration
 */
const de_DecimalParameterDeclaration = (output: any, context: __SerdeContext): DecimalParameterDeclaration => {
  return take(output, {
    DefaultValues: (_: any) => de_DecimalDefaultValues(_, context),
    MappedDataSetParameters: _json,
    Name: __expectString,
    ParameterValueType: __expectString,
    ValueWhenUnset: (_: any) => de_DecimalValueWhenUnsetConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DecimalParameterList
 */
const de_DecimalParameterList = (output: any, context: __SerdeContext): DecimalParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DecimalParameter(entry, context);
    });
  return retVal;
};

// de_DecimalPlacesConfiguration omitted.

/**
 * deserializeAws_restJson1DecimalValueWhenUnsetConfiguration
 */
const de_DecimalValueWhenUnsetConfiguration = (
  output: any,
  context: __SerdeContext
): DecimalValueWhenUnsetConfiguration => {
  return take(output, {
    CustomValue: __limitedParseDouble,
    ValueWhenUnsetOption: __expectString,
  }) as any;
};

// de_DefaultDateTimePickerControlOptions omitted.

/**
 * deserializeAws_restJson1DefaultFilterControlConfiguration
 */
const de_DefaultFilterControlConfiguration = (
  output: any,
  context: __SerdeContext
): DefaultFilterControlConfiguration => {
  return take(output, {
    ControlOptions: (_: any) => de_DefaultFilterControlOptions(_, context),
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DefaultFilterControlOptions
 */
const de_DefaultFilterControlOptions = (output: any, context: __SerdeContext): DefaultFilterControlOptions => {
  return take(output, {
    DefaultDateTimePickerOptions: _json,
    DefaultDropdownOptions: _json,
    DefaultListOptions: _json,
    DefaultRelativeDateTimeOptions: _json,
    DefaultSliderOptions: (_: any) => de_DefaultSliderControlOptions(_, context),
    DefaultTextAreaOptions: _json,
    DefaultTextFieldOptions: _json,
  }) as any;
};

// de_DefaultFilterDropDownControlOptions omitted.

// de_DefaultFilterListControlOptions omitted.

// de_DefaultFormatting omitted.

// de_DefaultFreeFormLayoutConfiguration omitted.

// de_DefaultGridLayoutConfiguration omitted.

// de_DefaultInteractiveLayoutConfiguration omitted.

// de_DefaultNewSheetConfiguration omitted.

// de_DefaultPaginatedLayoutConfiguration omitted.

// de_DefaultRelativeDateTimeControlOptions omitted.

// de_DefaultSectionBasedLayoutConfiguration omitted.

/**
 * deserializeAws_restJson1DefaultSliderControlOptions
 */
const de_DefaultSliderControlOptions = (output: any, context: __SerdeContext): DefaultSliderControlOptions => {
  return take(output, {
    DisplayOptions: _json,
    MaximumValue: __limitedParseDouble,
    MinimumValue: __limitedParseDouble,
    StepSize: __limitedParseDouble,
    Type: __expectString,
  }) as any;
};

// de_DefaultTextAreaControlOptions omitted.

// de_DefaultTextFieldControlOptions omitted.

/**
 * deserializeAws_restJson1DestinationParameterValueConfiguration
 */
const de_DestinationParameterValueConfiguration = (
  output: any,
  context: __SerdeContext
): DestinationParameterValueConfiguration => {
  return take(output, {
    CustomValuesConfiguration: (_: any) => de_CustomValuesConfiguration(_, context),
    SelectAllValueOptions: __expectString,
    SourceColumn: _json,
    SourceField: __expectString,
    SourceParameterName: __expectString,
  }) as any;
};

// de_DimensionField omitted.

// de_DimensionFieldList omitted.

// de_DisplayFormatOptions omitted.

// de_DnsResolverList omitted.

// de_DonutCenterOptions omitted.

// de_DonutOptions omitted.

/**
 * deserializeAws_restJson1DrillDownFilter
 */
const de_DrillDownFilter = (output: any, context: __SerdeContext): DrillDownFilter => {
  return take(output, {
    CategoryFilter: _json,
    NumericEqualityFilter: (_: any) => de_NumericEqualityDrillDownFilter(_, context),
    TimeRangeFilter: (_: any) => de_TimeRangeDrillDownFilter(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DrillDownFilterList
 */
const de_DrillDownFilterList = (output: any, context: __SerdeContext): DrillDownFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DrillDownFilter(entry, context);
    });
  return retVal;
};

// de_DropDownControlDisplayOptions omitted.

// de_DynamicDefaultValue omitted.

/**
 * deserializeAws_restJson1EmptyVisual
 */
const de_EmptyVisual = (output: any, context: __SerdeContext): EmptyVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    DataSetIdentifier: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_Entity omitted.

// de_EntityList omitted.

// de_ErrorInfo omitted.

// de_ErrorList omitted.

// de_ExasolParameters omitted.

// de_ExcludePeriodConfiguration omitted.

/**
 * deserializeAws_restJson1ExplicitHierarchy
 */
const de_ExplicitHierarchy = (output: any, context: __SerdeContext): ExplicitHierarchy => {
  return take(output, {
    Columns: _json,
    DrillDownFilters: (_: any) => de_DrillDownFilterList(_, context),
    HierarchyId: __expectString,
  }) as any;
};

// de_ExplicitHierarchyColumnList omitted.

// de_ExportHiddenFieldsOption omitted.

// de_ExportToCSVOption omitted.

// de_ExportWithHiddenFieldsOption omitted.

// de_FailedKeyRegistrationEntries omitted.

// de_FailedKeyRegistrationEntry omitted.

/**
 * deserializeAws_restJson1FieldBasedTooltip
 */
const de_FieldBasedTooltip = (output: any, context: __SerdeContext): FieldBasedTooltip => {
  return take(output, {
    AggregationVisibility: __expectString,
    TooltipFields: (_: any) => de_TooltipItemList(_, context),
    TooltipTitleType: __expectString,
  }) as any;
};

// de_FieldFolder omitted.

// de_FieldFolderMap omitted.

// de_FieldLabelType omitted.

// de_FieldOrderList omitted.

// de_FieldSeriesItem omitted.

// de_FieldSort omitted.

/**
 * deserializeAws_restJson1FieldSortOptions
 */
const de_FieldSortOptions = (output: any, context: __SerdeContext): FieldSortOptions => {
  return take(output, {
    ColumnSort: (_: any) => de_ColumnSort(_, context),
    FieldSort: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1FieldSortOptionsList
 */
const de_FieldSortOptionsList = (output: any, context: __SerdeContext): FieldSortOptions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FieldSortOptions(entry, context);
    });
  return retVal;
};

// de_FieldTooltipItem omitted.

/**
 * deserializeAws_restJson1FilledMapAggregatedFieldWells
 */
const de_FilledMapAggregatedFieldWells = (output: any, context: __SerdeContext): FilledMapAggregatedFieldWells => {
  return take(output, {
    Geospatial: _json,
    Values: (_: any) => de_FilledMapMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilledMapConditionalFormatting
 */
const de_FilledMapConditionalFormatting = (output: any, context: __SerdeContext): FilledMapConditionalFormatting => {
  return take(output, {
    ConditionalFormattingOptions: (_: any) => de_FilledMapConditionalFormattingOptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilledMapConditionalFormattingOption
 */
const de_FilledMapConditionalFormattingOption = (
  output: any,
  context: __SerdeContext
): FilledMapConditionalFormattingOption => {
  return take(output, {
    Shape: (_: any) => de_FilledMapShapeConditionalFormatting(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilledMapConditionalFormattingOptionList
 */
const de_FilledMapConditionalFormattingOptionList = (
  output: any,
  context: __SerdeContext
): FilledMapConditionalFormattingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FilledMapConditionalFormattingOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FilledMapConfiguration
 */
const de_FilledMapConfiguration = (output: any, context: __SerdeContext): FilledMapConfiguration => {
  return take(output, {
    FieldWells: (_: any) => de_FilledMapFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    MapStyleOptions: _json,
    SortConfiguration: (_: any) => de_FilledMapSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    WindowOptions: (_: any) => de_GeospatialWindowOptions(_, context),
  }) as any;
};

// de_FilledMapDimensionFieldList omitted.

/**
 * deserializeAws_restJson1FilledMapFieldWells
 */
const de_FilledMapFieldWells = (output: any, context: __SerdeContext): FilledMapFieldWells => {
  return take(output, {
    FilledMapAggregatedFieldWells: (_: any) => de_FilledMapAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilledMapMeasureFieldList
 */
const de_FilledMapMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FilledMapShapeConditionalFormatting
 */
const de_FilledMapShapeConditionalFormatting = (
  output: any,
  context: __SerdeContext
): FilledMapShapeConditionalFormatting => {
  return take(output, {
    FieldId: __expectString,
    Format: (_: any) => de_ShapeConditionalFormat(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilledMapSortConfiguration
 */
const de_FilledMapSortConfiguration = (output: any, context: __SerdeContext): FilledMapSortConfiguration => {
  return take(output, {
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilledMapVisual
 */
const de_FilledMapVisual = (output: any, context: __SerdeContext): FilledMapVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_FilledMapConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    ConditionalFormatting: (_: any) => de_FilledMapConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return take(output, {
    CategoryFilter: (_: any) => de_CategoryFilter(_, context),
    NestedFilter: (_: any) => de_NestedFilter(_, context),
    NumericEqualityFilter: (_: any) => de_NumericEqualityFilter(_, context),
    NumericRangeFilter: (_: any) => de_NumericRangeFilter(_, context),
    RelativeDatesFilter: (_: any) => de_RelativeDatesFilter(_, context),
    TimeEqualityFilter: (_: any) => de_TimeEqualityFilter(_, context),
    TimeRangeFilter: (_: any) => de_TimeRangeFilter(_, context),
    TopBottomFilter: (_: any) => de_TopBottomFilter(_, context),
  }) as any;
};

// de_FilterAggMetrics omitted.

// de_FilterAggMetricsList omitted.

/**
 * deserializeAws_restJson1FilterControl
 */
const de_FilterControl = (output: any, context: __SerdeContext): FilterControl => {
  return take(output, {
    CrossSheet: _json,
    DateTimePicker: _json,
    Dropdown: _json,
    List: _json,
    RelativeDateTime: _json,
    Slider: (_: any) => de_FilterSliderControl(_, context),
    TextArea: _json,
    TextField: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1FilterControlList
 */
const de_FilterControlList = (output: any, context: __SerdeContext): FilterControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FilterControl(entry, context);
    });
  return retVal;
};

// de_FilterCrossSheetControl omitted.

// de_FilterDateTimePickerControl omitted.

// de_FilterDropDownControl omitted.

// de_FilteredVisualsList omitted.

/**
 * deserializeAws_restJson1FilterGroup
 */
const de_FilterGroup = (output: any, context: __SerdeContext): FilterGroup => {
  return take(output, {
    CrossDataset: __expectString,
    FilterGroupId: __expectString,
    Filters: (_: any) => de_FilterList(_, context),
    ScopeConfiguration: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FilterGroupList
 */
const de_FilterGroupList = (output: any, context: __SerdeContext): FilterGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FilterGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Filter(entry, context);
    });
  return retVal;
};

// de_FilterListConfiguration omitted.

// de_FilterListControl omitted.

// de_FilterOperation omitted.

// de_FilterOperationSelectedFieldsConfiguration omitted.

// de_FilterOperationTargetVisualsConfiguration omitted.

// de_FilterRelativeDateTimeControl omitted.

// de_FilterScopeConfiguration omitted.

// de_FilterSelectableValues omitted.

/**
 * deserializeAws_restJson1FilterSliderControl
 */
const de_FilterSliderControl = (output: any, context: __SerdeContext): FilterSliderControl => {
  return take(output, {
    DisplayOptions: _json,
    FilterControlId: __expectString,
    MaximumValue: __limitedParseDouble,
    MinimumValue: __limitedParseDouble,
    SourceFilterId: __expectString,
    StepSize: __limitedParseDouble,
    Title: __expectString,
    Type: __expectString,
  }) as any;
};

// de_FilterTextAreaControl omitted.

// de_FilterTextFieldControl omitted.

/**
 * deserializeAws_restJson1Folder
 */
const de_Folder = (output: any, context: __SerdeContext): Folder => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FolderId: __expectString,
    FolderPath: _json,
    FolderType: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SharingModel: __expectString,
  }) as any;
};

// de_FolderArnList omitted.

// de_FolderColumnList omitted.

// de_FolderMember omitted.

// de_FolderMemberList omitted.

// de_FoldersForResourceArnList omitted.

/**
 * deserializeAws_restJson1FolderSummary
 */
const de_FolderSummary = (output: any, context: __SerdeContext): FolderSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FolderId: __expectString,
    FolderType: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SharingModel: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FolderSummaryList
 */
const de_FolderSummaryList = (output: any, context: __SerdeContext): FolderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FolderSummary(entry, context);
    });
  return retVal;
};

// de_Font omitted.

// de_FontConfiguration omitted.

// de_FontList omitted.

// de_FontSize omitted.

// de_FontWeight omitted.

/**
 * deserializeAws_restJson1ForecastComputation
 */
const de_ForecastComputation = (output: any, context: __SerdeContext): ForecastComputation => {
  return take(output, {
    ComputationId: __expectString,
    CustomSeasonalityValue: __expectInt32,
    LowerBoundary: __limitedParseDouble,
    Name: __expectString,
    PeriodsBackward: __expectInt32,
    PeriodsForward: __expectInt32,
    PredictionInterval: __expectInt32,
    Seasonality: __expectString,
    Time: _json,
    UpperBoundary: __limitedParseDouble,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ForecastConfiguration
 */
const de_ForecastConfiguration = (output: any, context: __SerdeContext): ForecastConfiguration => {
  return take(output, {
    ForecastProperties: (_: any) => de_TimeBasedForecastProperties(_, context),
    Scenario: (_: any) => de_ForecastScenario(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ForecastConfigurationList
 */
const de_ForecastConfigurationList = (output: any, context: __SerdeContext): ForecastConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ForecastConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ForecastScenario
 */
const de_ForecastScenario = (output: any, context: __SerdeContext): ForecastScenario => {
  return take(output, {
    WhatIfPointScenario: (_: any) => de_WhatIfPointScenario(_, context),
    WhatIfRangeScenario: (_: any) => de_WhatIfRangeScenario(_, context),
  }) as any;
};

// de_FormatConfiguration omitted.

// de_FreeFormLayoutCanvasSizeOptions omitted.

// de_FreeFormLayoutConfiguration omitted.

// de_FreeFormLayoutElement omitted.

// de_FreeFormLayoutElementBackgroundStyle omitted.

// de_FreeFormLayoutElementBorderStyle omitted.

// de_FreeFormLayoutScreenCanvasSizeOptions omitted.

// de_FreeFormSectionLayoutConfiguration omitted.

// de_FreeFromLayoutElementList omitted.

/**
 * deserializeAws_restJson1FunnelChartAggregatedFieldWells
 */
const de_FunnelChartAggregatedFieldWells = (output: any, context: __SerdeContext): FunnelChartAggregatedFieldWells => {
  return take(output, {
    Category: _json,
    Values: (_: any) => de_FunnelChartMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FunnelChartConfiguration
 */
const de_FunnelChartConfiguration = (output: any, context: __SerdeContext): FunnelChartConfiguration => {
  return take(output, {
    CategoryLabelOptions: _json,
    DataLabelOptions: _json,
    FieldWells: (_: any) => de_FunnelChartFieldWells(_, context),
    Interactions: _json,
    SortConfiguration: (_: any) => de_FunnelChartSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    ValueLabelOptions: _json,
    VisualPalette: _json,
  }) as any;
};

// de_FunnelChartDataLabelOptions omitted.

// de_FunnelChartDimensionFieldList omitted.

/**
 * deserializeAws_restJson1FunnelChartFieldWells
 */
const de_FunnelChartFieldWells = (output: any, context: __SerdeContext): FunnelChartFieldWells => {
  return take(output, {
    FunnelChartAggregatedFieldWells: (_: any) => de_FunnelChartAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FunnelChartMeasureFieldList
 */
const de_FunnelChartMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FunnelChartSortConfiguration
 */
const de_FunnelChartSortConfiguration = (output: any, context: __SerdeContext): FunnelChartSortConfiguration => {
  return take(output, {
    CategoryItemsLimit: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FunnelChartVisual
 */
const de_FunnelChartVisual = (output: any, context: __SerdeContext): FunnelChartVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_FunnelChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GaugeChartArcConditionalFormatting
 */
const de_GaugeChartArcConditionalFormatting = (
  output: any,
  context: __SerdeContext
): GaugeChartArcConditionalFormatting => {
  return take(output, {
    ForegroundColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

// de_GaugeChartColorConfiguration omitted.

/**
 * deserializeAws_restJson1GaugeChartConditionalFormatting
 */
const de_GaugeChartConditionalFormatting = (output: any, context: __SerdeContext): GaugeChartConditionalFormatting => {
  return take(output, {
    ConditionalFormattingOptions: (_: any) => de_GaugeChartConditionalFormattingOptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GaugeChartConditionalFormattingOption
 */
const de_GaugeChartConditionalFormattingOption = (
  output: any,
  context: __SerdeContext
): GaugeChartConditionalFormattingOption => {
  return take(output, {
    Arc: (_: any) => de_GaugeChartArcConditionalFormatting(_, context),
    PrimaryValue: (_: any) => de_GaugeChartPrimaryValueConditionalFormatting(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GaugeChartConditionalFormattingOptionList
 */
const de_GaugeChartConditionalFormattingOptionList = (
  output: any,
  context: __SerdeContext
): GaugeChartConditionalFormattingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GaugeChartConditionalFormattingOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GaugeChartConfiguration
 */
const de_GaugeChartConfiguration = (output: any, context: __SerdeContext): GaugeChartConfiguration => {
  return take(output, {
    ColorConfiguration: _json,
    DataLabels: _json,
    FieldWells: (_: any) => de_GaugeChartFieldWells(_, context),
    GaugeChartOptions: (_: any) => de_GaugeChartOptions(_, context),
    Interactions: _json,
    TooltipOptions: (_: any) => de_TooltipOptions(_, context),
    VisualPalette: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1GaugeChartFieldWells
 */
const de_GaugeChartFieldWells = (output: any, context: __SerdeContext): GaugeChartFieldWells => {
  return take(output, {
    TargetValues: (_: any) => de_MeasureFieldList(_, context),
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GaugeChartOptions
 */
const de_GaugeChartOptions = (output: any, context: __SerdeContext): GaugeChartOptions => {
  return take(output, {
    Arc: (_: any) => de_ArcConfiguration(_, context),
    ArcAxis: (_: any) => de_ArcAxisConfiguration(_, context),
    Comparison: _json,
    PrimaryValueDisplayType: __expectString,
    PrimaryValueFontConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1GaugeChartPrimaryValueConditionalFormatting
 */
const de_GaugeChartPrimaryValueConditionalFormatting = (
  output: any,
  context: __SerdeContext
): GaugeChartPrimaryValueConditionalFormatting => {
  return take(output, {
    Icon: _json,
    TextColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GaugeChartVisual
 */
const de_GaugeChartVisual = (output: any, context: __SerdeContext): GaugeChartVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_GaugeChartConfiguration(_, context),
    ConditionalFormatting: (_: any) => de_GaugeChartConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_GeneratedAnswerResult omitted.

/**
 * deserializeAws_restJson1GeospatialCategoricalColor
 */
const de_GeospatialCategoricalColor = (output: any, context: __SerdeContext): GeospatialCategoricalColor => {
  return take(output, {
    CategoryDataColors: _json,
    DefaultOpacity: __limitedParseDouble,
    NullDataSettings: (_: any) => de_GeospatialNullDataSettings(_, context),
    NullDataVisibility: __expectString,
  }) as any;
};

// de_GeospatialCategoricalDataColor omitted.

// de_GeospatialCategoricalDataColorList omitted.

/**
 * deserializeAws_restJson1GeospatialCircleRadius
 */
const de_GeospatialCircleRadius = (output: any, context: __SerdeContext): GeospatialCircleRadius => {
  return take(output, {
    Radius: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialCircleSymbolStyle
 */
const de_GeospatialCircleSymbolStyle = (output: any, context: __SerdeContext): GeospatialCircleSymbolStyle => {
  return take(output, {
    CircleRadius: (_: any) => de_GeospatialCircleRadius(_, context),
    FillColor: (_: any) => de_GeospatialColor(_, context),
    StrokeColor: (_: any) => de_GeospatialColor(_, context),
    StrokeWidth: (_: any) => de_GeospatialLineWidth(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialColor
 */
const de_GeospatialColor = (output: any, context: __SerdeContext): GeospatialColor => {
  return take(output, {
    Categorical: (_: any) => de_GeospatialCategoricalColor(_, context),
    Gradient: (_: any) => de_GeospatialGradientColor(_, context),
    Solid: _json,
  }) as any;
};

// de_GeoSpatialColumnGroup omitted.

/**
 * deserializeAws_restJson1GeospatialCoordinateBounds
 */
const de_GeospatialCoordinateBounds = (output: any, context: __SerdeContext): GeospatialCoordinateBounds => {
  return take(output, {
    East: __limitedParseDouble,
    North: __limitedParseDouble,
    South: __limitedParseDouble,
    West: __limitedParseDouble,
  }) as any;
};

// de_GeospatialDataSourceItem omitted.

/**
 * deserializeAws_restJson1GeospatialGradientColor
 */
const de_GeospatialGradientColor = (output: any, context: __SerdeContext): GeospatialGradientColor => {
  return take(output, {
    DefaultOpacity: __limitedParseDouble,
    NullDataSettings: (_: any) => de_GeospatialNullDataSettings(_, context),
    NullDataVisibility: __expectString,
    StepColors: (_: any) => de_GeospatialGradientStepColorList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialGradientStepColor
 */
const de_GeospatialGradientStepColor = (output: any, context: __SerdeContext): GeospatialGradientStepColor => {
  return take(output, {
    Color: __expectString,
    DataValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialGradientStepColorList
 */
const de_GeospatialGradientStepColorList = (output: any, context: __SerdeContext): GeospatialGradientStepColor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GeospatialGradientStepColor(entry, context);
    });
  return retVal;
};

// de_GeospatialHeatmapColorScale omitted.

// de_GeospatialHeatmapConfiguration omitted.

// de_GeospatialHeatmapDataColor omitted.

// de_GeospatialHeatmapDataColorList omitted.

/**
 * deserializeAws_restJson1GeospatialLayerColorField
 */
const de_GeospatialLayerColorField = (output: any, context: __SerdeContext): GeospatialLayerColorField => {
  return take(output, {
    ColorDimensionsFields: _json,
    ColorValuesFields: (_: any) => de_GeospatialLayerMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialLayerDefinition
 */
const de_GeospatialLayerDefinition = (output: any, context: __SerdeContext): GeospatialLayerDefinition => {
  return take(output, {
    LineLayer: (_: any) => de_GeospatialLineLayer(_, context),
    PointLayer: (_: any) => de_GeospatialPointLayer(_, context),
    PolygonLayer: (_: any) => de_GeospatialPolygonLayer(_, context),
  }) as any;
};

// de_GeospatialLayerDimensionFieldList omitted.

/**
 * deserializeAws_restJson1GeospatialLayerItem
 */
const de_GeospatialLayerItem = (output: any, context: __SerdeContext): GeospatialLayerItem => {
  return take(output, {
    Actions: (_: any) => de_LayerCustomActionList(_, context),
    DataSource: _json,
    JoinDefinition: (_: any) => de_GeospatialLayerJoinDefinition(_, context),
    Label: __expectString,
    LayerDefinition: (_: any) => de_GeospatialLayerDefinition(_, context),
    LayerId: __expectString,
    LayerType: __expectString,
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    Visibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialLayerJoinDefinition
 */
const de_GeospatialLayerJoinDefinition = (output: any, context: __SerdeContext): GeospatialLayerJoinDefinition => {
  return take(output, {
    ColorField: (_: any) => de_GeospatialLayerColorField(_, context),
    DatasetKeyField: _json,
    ShapeKeyField: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialLayerMapConfiguration
 */
const de_GeospatialLayerMapConfiguration = (output: any, context: __SerdeContext): GeospatialLayerMapConfiguration => {
  return take(output, {
    Interactions: _json,
    Legend: _json,
    MapLayers: (_: any) => de_GeospatialMapLayerList(_, context),
    MapState: (_: any) => de_GeospatialMapState(_, context),
    MapStyle: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialLayerMeasureFieldList
 */
const de_GeospatialLayerMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeospatialLineLayer
 */
const de_GeospatialLineLayer = (output: any, context: __SerdeContext): GeospatialLineLayer => {
  return take(output, {
    Style: (_: any) => de_GeospatialLineStyle(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialLineStyle
 */
const de_GeospatialLineStyle = (output: any, context: __SerdeContext): GeospatialLineStyle => {
  return take(output, {
    LineSymbolStyle: (_: any) => de_GeospatialLineSymbolStyle(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialLineSymbolStyle
 */
const de_GeospatialLineSymbolStyle = (output: any, context: __SerdeContext): GeospatialLineSymbolStyle => {
  return take(output, {
    FillColor: (_: any) => de_GeospatialColor(_, context),
    LineWidth: (_: any) => de_GeospatialLineWidth(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialLineWidth
 */
const de_GeospatialLineWidth = (output: any, context: __SerdeContext): GeospatialLineWidth => {
  return take(output, {
    LineWidth: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialMapAggregatedFieldWells
 */
const de_GeospatialMapAggregatedFieldWells = (
  output: any,
  context: __SerdeContext
): GeospatialMapAggregatedFieldWells => {
  return take(output, {
    Colors: _json,
    Geospatial: _json,
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialMapConfiguration
 */
const de_GeospatialMapConfiguration = (output: any, context: __SerdeContext): GeospatialMapConfiguration => {
  return take(output, {
    FieldWells: (_: any) => de_GeospatialMapFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    MapStyleOptions: _json,
    PointStyleOptions: _json,
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    VisualPalette: _json,
    WindowOptions: (_: any) => de_GeospatialWindowOptions(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialMapFieldWells
 */
const de_GeospatialMapFieldWells = (output: any, context: __SerdeContext): GeospatialMapFieldWells => {
  return take(output, {
    GeospatialMapAggregatedFieldWells: (_: any) => de_GeospatialMapAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialMapLayerList
 */
const de_GeospatialMapLayerList = (output: any, context: __SerdeContext): GeospatialLayerItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GeospatialLayerItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeospatialMapState
 */
const de_GeospatialMapState = (output: any, context: __SerdeContext): GeospatialMapState => {
  return take(output, {
    Bounds: (_: any) => de_GeospatialCoordinateBounds(_, context),
    MapNavigation: __expectString,
  }) as any;
};

// de_GeospatialMapStyle omitted.

// de_GeospatialMapStyleOptions omitted.

/**
 * deserializeAws_restJson1GeospatialMapVisual
 */
const de_GeospatialMapVisual = (output: any, context: __SerdeContext): GeospatialMapVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_GeospatialMapConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialNullDataSettings
 */
const de_GeospatialNullDataSettings = (output: any, context: __SerdeContext): GeospatialNullDataSettings => {
  return take(output, {
    SymbolStyle: (_: any) => de_GeospatialNullSymbolStyle(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialNullSymbolStyle
 */
const de_GeospatialNullSymbolStyle = (output: any, context: __SerdeContext): GeospatialNullSymbolStyle => {
  return take(output, {
    FillColor: __expectString,
    StrokeColor: __expectString,
    StrokeWidth: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialPointLayer
 */
const de_GeospatialPointLayer = (output: any, context: __SerdeContext): GeospatialPointLayer => {
  return take(output, {
    Style: (_: any) => de_GeospatialPointStyle(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialPointStyle
 */
const de_GeospatialPointStyle = (output: any, context: __SerdeContext): GeospatialPointStyle => {
  return take(output, {
    CircleSymbolStyle: (_: any) => de_GeospatialCircleSymbolStyle(_, context),
  }) as any;
};

// de_GeospatialPointStyleOptions omitted.

/**
 * deserializeAws_restJson1GeospatialPolygonLayer
 */
const de_GeospatialPolygonLayer = (output: any, context: __SerdeContext): GeospatialPolygonLayer => {
  return take(output, {
    Style: (_: any) => de_GeospatialPolygonStyle(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialPolygonStyle
 */
const de_GeospatialPolygonStyle = (output: any, context: __SerdeContext): GeospatialPolygonStyle => {
  return take(output, {
    PolygonSymbolStyle: (_: any) => de_GeospatialPolygonSymbolStyle(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GeospatialPolygonSymbolStyle
 */
const de_GeospatialPolygonSymbolStyle = (output: any, context: __SerdeContext): GeospatialPolygonSymbolStyle => {
  return take(output, {
    FillColor: (_: any) => de_GeospatialColor(_, context),
    StrokeColor: (_: any) => de_GeospatialColor(_, context),
    StrokeWidth: (_: any) => de_GeospatialLineWidth(_, context),
  }) as any;
};

// de_GeospatialSolidColor omitted.

// de_GeospatialStaticFileSource omitted.

/**
 * deserializeAws_restJson1GeospatialWindowOptions
 */
const de_GeospatialWindowOptions = (output: any, context: __SerdeContext): GeospatialWindowOptions => {
  return take(output, {
    Bounds: (_: any) => de_GeospatialCoordinateBounds(_, context),
    MapZoomMode: __expectString,
  }) as any;
};

// de_GlobalTableBorderOptions omitted.

/**
 * deserializeAws_restJson1GradientColor
 */
const de_GradientColor = (output: any, context: __SerdeContext): GradientColor => {
  return take(output, {
    Stops: (_: any) => de_GradientStopList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GradientStop
 */
const de_GradientStop = (output: any, context: __SerdeContext): GradientStop => {
  return take(output, {
    Color: __expectString,
    DataValue: __limitedParseDouble,
    GradientOffset: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1GradientStopList
 */
const de_GradientStopList = (output: any, context: __SerdeContext): GradientStop[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GradientStop(entry, context);
    });
  return retVal;
};

// de_GridLayoutCanvasSizeOptions omitted.

// de_GridLayoutConfiguration omitted.

// de_GridLayoutElement omitted.

// de_GridLayoutElementList omitted.

// de_GridLayoutScreenCanvasSizeOptions omitted.

// de_Group omitted.

// de_GroupList omitted.

// de_GroupMember omitted.

// de_GroupMemberList omitted.

// de_GroupsList omitted.

/**
 * deserializeAws_restJson1GrowthRateComputation
 */
const de_GrowthRateComputation = (output: any, context: __SerdeContext): GrowthRateComputation => {
  return take(output, {
    ComputationId: __expectString,
    Name: __expectString,
    PeriodSize: __expectInt32,
    Time: _json,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

// de_GutterStyle omitted.

// de_HeaderFooterSectionConfiguration omitted.

// de_HeaderFooterSectionConfigurationList omitted.

/**
 * deserializeAws_restJson1HeatMapAggregatedFieldWells
 */
const de_HeatMapAggregatedFieldWells = (output: any, context: __SerdeContext): HeatMapAggregatedFieldWells => {
  return take(output, {
    Columns: _json,
    Rows: _json,
    Values: (_: any) => de_HeatMapMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1HeatMapConfiguration
 */
const de_HeatMapConfiguration = (output: any, context: __SerdeContext): HeatMapConfiguration => {
  return take(output, {
    ColorScale: (_: any) => de_ColorScale(_, context),
    ColumnLabelOptions: _json,
    DataLabels: _json,
    FieldWells: (_: any) => de_HeatMapFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    RowLabelOptions: _json,
    SortConfiguration: (_: any) => de_HeatMapSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
  }) as any;
};

// de_HeatMapDimensionFieldList omitted.

/**
 * deserializeAws_restJson1HeatMapFieldWells
 */
const de_HeatMapFieldWells = (output: any, context: __SerdeContext): HeatMapFieldWells => {
  return take(output, {
    HeatMapAggregatedFieldWells: (_: any) => de_HeatMapAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1HeatMapMeasureFieldList
 */
const de_HeatMapMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HeatMapSortConfiguration
 */
const de_HeatMapSortConfiguration = (output: any, context: __SerdeContext): HeatMapSortConfiguration => {
  return take(output, {
    HeatMapColumnItemsLimitConfiguration: _json,
    HeatMapColumnSort: (_: any) => de_FieldSortOptionsList(_, context),
    HeatMapRowItemsLimitConfiguration: _json,
    HeatMapRowSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1HeatMapVisual
 */
const de_HeatMapVisual = (output: any, context: __SerdeContext): HeatMapVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_HeatMapConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HistogramAggregatedFieldWells
 */
const de_HistogramAggregatedFieldWells = (output: any, context: __SerdeContext): HistogramAggregatedFieldWells => {
  return take(output, {
    Values: (_: any) => de_HistogramMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1HistogramBinOptions
 */
const de_HistogramBinOptions = (output: any, context: __SerdeContext): HistogramBinOptions => {
  return take(output, {
    BinCount: _json,
    BinWidth: (_: any) => de_BinWidthOptions(_, context),
    SelectedBinType: __expectString,
    StartValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1HistogramConfiguration
 */
const de_HistogramConfiguration = (output: any, context: __SerdeContext): HistogramConfiguration => {
  return take(output, {
    BinOptions: (_: any) => de_HistogramBinOptions(_, context),
    DataLabels: _json,
    FieldWells: (_: any) => de_HistogramFieldWells(_, context),
    Interactions: _json,
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    VisualPalette: _json,
    XAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    XAxisLabelOptions: _json,
    YAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1HistogramFieldWells
 */
const de_HistogramFieldWells = (output: any, context: __SerdeContext): HistogramFieldWells => {
  return take(output, {
    HistogramAggregatedFieldWells: (_: any) => de_HistogramAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1HistogramMeasureFieldList
 */
const de_HistogramMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HistogramVisual
 */
const de_HistogramVisual = (output: any, context: __SerdeContext): HistogramVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_HistogramConfiguration(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_IAMPolicyAssignment omitted.

// de_IAMPolicyAssignmentSummary omitted.

// de_IAMPolicyAssignmentSummaryList omitted.

// de_Identifier omitted.

// de_IdentityCenterConfiguration omitted.

// de_IdentityMap omitted.

// de_IdentityNameList omitted.

// de_Image omitted.

// de_ImageConfiguration omitted.

/**
 * deserializeAws_restJson1ImageCustomAction
 */
const de_ImageCustomAction = (output: any, context: __SerdeContext): ImageCustomAction => {
  return take(output, {
    ActionOperations: (_: any) => de_ImageCustomActionOperationList(_, context),
    CustomActionId: __expectString,
    Name: __expectString,
    Status: __expectString,
    Trigger: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImageCustomActionList
 */
const de_ImageCustomActionList = (output: any, context: __SerdeContext): ImageCustomAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageCustomAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageCustomActionOperation
 */
const de_ImageCustomActionOperation = (output: any, context: __SerdeContext): ImageCustomActionOperation => {
  return take(output, {
    NavigationOperation: _json,
    SetParametersOperation: (_: any) => de_CustomActionSetParametersOperation(_, context),
    URLOperation: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ImageCustomActionOperationList
 */
const de_ImageCustomActionOperationList = (output: any, context: __SerdeContext): ImageCustomActionOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageCustomActionOperation(entry, context);
    });
  return retVal;
};

// de_ImageInteractionOptions omitted.

// de_ImageMenuOption omitted.

// de_ImageSet omitted.

// de_ImageSetConfiguration omitted.

// de_ImageSource omitted.

// de_ImageStaticFile omitted.

// de_IncrementalRefresh omitted.

/**
 * deserializeAws_restJson1Ingestion
 */
const de_Ingestion = (output: any, context: __SerdeContext): Ingestion => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorInfo: _json,
    IngestionId: __expectString,
    IngestionSizeInBytes: __expectLong,
    IngestionStatus: __expectString,
    IngestionTimeInSeconds: __expectLong,
    QueueInfo: _json,
    RequestSource: __expectString,
    RequestType: __expectString,
    RowInfo: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1Ingestions
 */
const de_Ingestions = (output: any, context: __SerdeContext): Ingestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Ingestion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InnerFilter
 */
const de_InnerFilter = (output: any, context: __SerdeContext): InnerFilter => {
  return take(output, {
    CategoryInnerFilter: (_: any) => de_CategoryInnerFilter(_, context),
  }) as any;
};

// de_InputColumn omitted.

// de_InputColumnList omitted.

/**
 * deserializeAws_restJson1InsightConfiguration
 */
const de_InsightConfiguration = (output: any, context: __SerdeContext): InsightConfiguration => {
  return take(output, {
    Computations: (_: any) => de_ComputationList(_, context),
    CustomNarrative: _json,
    Interactions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1InsightVisual
 */
const de_InsightVisual = (output: any, context: __SerdeContext): InsightVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    DataSetIdentifier: __expectString,
    InsightConfiguration: (_: any) => de_InsightConfiguration(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_IntegerDatasetParameter omitted.

// de_IntegerDatasetParameterDefaultValues omitted.

// de_IntegerDatasetParameterValueList omitted.

// de_IntegerDefaultValueList omitted.

// de_IntegerDefaultValues omitted.

// de_IntegerParameter omitted.

// de_IntegerParameterDeclaration omitted.

// de_IntegerParameterList omitted.

// de_IntegerValueWhenUnsetConfiguration omitted.

// de_InvalidTopicReviewedAnswer omitted.

// de_InvalidTopicReviewedAnswers omitted.

// de_IpRestrictionRuleMap omitted.

// de_ItemsLimitConfiguration omitted.

// de_JiraParameters omitted.

// de_JoinInstruction omitted.

// de_JoinKeyProperties omitted.

// de_KeyRegistration omitted.

/**
 * deserializeAws_restJson1KPIActualValueConditionalFormatting
 */
const de_KPIActualValueConditionalFormatting = (
  output: any,
  context: __SerdeContext
): KPIActualValueConditionalFormatting => {
  return take(output, {
    Icon: _json,
    TextColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KPIComparisonValueConditionalFormatting
 */
const de_KPIComparisonValueConditionalFormatting = (
  output: any,
  context: __SerdeContext
): KPIComparisonValueConditionalFormatting => {
  return take(output, {
    Icon: _json,
    TextColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KPIConditionalFormatting
 */
const de_KPIConditionalFormatting = (output: any, context: __SerdeContext): KPIConditionalFormatting => {
  return take(output, {
    ConditionalFormattingOptions: (_: any) => de_KPIConditionalFormattingOptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KPIConditionalFormattingOption
 */
const de_KPIConditionalFormattingOption = (output: any, context: __SerdeContext): KPIConditionalFormattingOption => {
  return take(output, {
    ActualValue: (_: any) => de_KPIActualValueConditionalFormatting(_, context),
    ComparisonValue: (_: any) => de_KPIComparisonValueConditionalFormatting(_, context),
    PrimaryValue: (_: any) => de_KPIPrimaryValueConditionalFormatting(_, context),
    ProgressBar: (_: any) => de_KPIProgressBarConditionalFormatting(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KPIConditionalFormattingOptionList
 */
const de_KPIConditionalFormattingOptionList = (
  output: any,
  context: __SerdeContext
): KPIConditionalFormattingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KPIConditionalFormattingOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KPIConfiguration
 */
const de_KPIConfiguration = (output: any, context: __SerdeContext): KPIConfiguration => {
  return take(output, {
    FieldWells: (_: any) => de_KPIFieldWells(_, context),
    Interactions: _json,
    KPIOptions: _json,
    SortConfiguration: (_: any) => de_KPISortConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KPIFieldWells
 */
const de_KPIFieldWells = (output: any, context: __SerdeContext): KPIFieldWells => {
  return take(output, {
    TargetValues: (_: any) => de_MeasureFieldList(_, context),
    TrendGroups: _json,
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

// de_KPIOptions omitted.

/**
 * deserializeAws_restJson1KPIPrimaryValueConditionalFormatting
 */
const de_KPIPrimaryValueConditionalFormatting = (
  output: any,
  context: __SerdeContext
): KPIPrimaryValueConditionalFormatting => {
  return take(output, {
    Icon: _json,
    TextColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KPIProgressBarConditionalFormatting
 */
const de_KPIProgressBarConditionalFormatting = (
  output: any,
  context: __SerdeContext
): KPIProgressBarConditionalFormatting => {
  return take(output, {
    ForegroundColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KPISortConfiguration
 */
const de_KPISortConfiguration = (output: any, context: __SerdeContext): KPISortConfiguration => {
  return take(output, {
    TrendGroupSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

// de_KPISparklineOptions omitted.

/**
 * deserializeAws_restJson1KPIVisual
 */
const de_KPIVisual = (output: any, context: __SerdeContext): KPIVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_KPIConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    ConditionalFormatting: (_: any) => de_KPIConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_KPIVisualLayoutOptions omitted.

// de_KPIVisualStandardLayout omitted.

// de_LabelOptions omitted.

/**
 * deserializeAws_restJson1LayerCustomAction
 */
const de_LayerCustomAction = (output: any, context: __SerdeContext): LayerCustomAction => {
  return take(output, {
    ActionOperations: (_: any) => de_LayerCustomActionOperationList(_, context),
    CustomActionId: __expectString,
    Name: __expectString,
    Status: __expectString,
    Trigger: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LayerCustomActionList
 */
const de_LayerCustomActionList = (output: any, context: __SerdeContext): LayerCustomAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LayerCustomAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LayerCustomActionOperation
 */
const de_LayerCustomActionOperation = (output: any, context: __SerdeContext): LayerCustomActionOperation => {
  return take(output, {
    FilterOperation: _json,
    NavigationOperation: _json,
    SetParametersOperation: (_: any) => de_CustomActionSetParametersOperation(_, context),
    URLOperation: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1LayerCustomActionOperationList
 */
const de_LayerCustomActionOperationList = (output: any, context: __SerdeContext): LayerCustomActionOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LayerCustomActionOperation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LayerMapVisual
 */
const de_LayerMapVisual = (output: any, context: __SerdeContext): LayerMapVisual => {
  return take(output, {
    ChartConfiguration: (_: any) => de_GeospatialLayerMapConfiguration(_, context),
    DataSetIdentifier: __expectString,
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Layout
 */
const de_Layout = (output: any, context: __SerdeContext): Layout => {
  return take(output, {
    Configuration: (_: any) => de_LayoutConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LayoutConfiguration
 */
const de_LayoutConfiguration = (output: any, context: __SerdeContext): LayoutConfiguration => {
  return take(output, {
    FreeFormLayout: _json,
    GridLayout: _json,
    SectionBasedLayout: (_: any) => de_SectionBasedLayoutConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LayoutList
 */
const de_LayoutList = (output: any, context: __SerdeContext): Layout[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Layout(entry, context);
    });
  return retVal;
};

// de_LegendOptions omitted.

/**
 * deserializeAws_restJson1LineChartAggregatedFieldWells
 */
const de_LineChartAggregatedFieldWells = (output: any, context: __SerdeContext): LineChartAggregatedFieldWells => {
  return take(output, {
    Category: _json,
    Colors: _json,
    SmallMultiples: _json,
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LineChartConfiguration
 */
const de_LineChartConfiguration = (output: any, context: __SerdeContext): LineChartConfiguration => {
  return take(output, {
    ContributionAnalysisDefaults: _json,
    DataLabels: _json,
    DefaultSeriesSettings: _json,
    FieldWells: (_: any) => de_LineChartFieldWells(_, context),
    ForecastConfigurations: (_: any) => de_ForecastConfigurationList(_, context),
    Interactions: _json,
    Legend: _json,
    PrimaryYAxisDisplayOptions: (_: any) => de_LineSeriesAxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    ReferenceLines: (_: any) => de_ReferenceLineList(_, context),
    SecondaryYAxisDisplayOptions: (_: any) => de_LineSeriesAxisDisplayOptions(_, context),
    SecondaryYAxisLabelOptions: _json,
    Series: _json,
    SingleAxisOptions: _json,
    SmallMultiplesOptions: _json,
    SortConfiguration: (_: any) => de_LineChartSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    Type: __expectString,
    VisualPalette: _json,
    XAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    XAxisLabelOptions: _json,
  }) as any;
};

// de_LineChartDefaultSeriesSettings omitted.

/**
 * deserializeAws_restJson1LineChartFieldWells
 */
const de_LineChartFieldWells = (output: any, context: __SerdeContext): LineChartFieldWells => {
  return take(output, {
    LineChartAggregatedFieldWells: (_: any) => de_LineChartAggregatedFieldWells(_, context),
  }) as any;
};

// de_LineChartLineStyleSettings omitted.

// de_LineChartMarkerStyleSettings omitted.

// de_LineChartSeriesSettings omitted.

/**
 * deserializeAws_restJson1LineChartSortConfiguration
 */
const de_LineChartSortConfiguration = (output: any, context: __SerdeContext): LineChartSortConfiguration => {
  return take(output, {
    CategoryItemsLimitConfiguration: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
    ColorItemsLimitConfiguration: _json,
    SmallMultiplesLimitConfiguration: _json,
    SmallMultiplesSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LineChartVisual
 */
const de_LineChartVisual = (output: any, context: __SerdeContext): LineChartVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_LineChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LineSeriesAxisDisplayOptions
 */
const de_LineSeriesAxisDisplayOptions = (output: any, context: __SerdeContext): LineSeriesAxisDisplayOptions => {
  return take(output, {
    AxisOptions: (_: any) => de_AxisDisplayOptions(_, context),
    MissingDataConfigurations: _json,
  }) as any;
};

// de_LinkEntityArnList omitted.

// de_LinkSharingConfiguration omitted.

// de_ListControlDisplayOptions omitted.

// de_ListControlSearchOptions omitted.

// de_ListControlSelectAllOptions omitted.

// de_LoadingAnimation omitted.

// de_LocalNavigationConfiguration omitted.

/**
 * deserializeAws_restJson1LogicalTable
 */
const de_LogicalTable = (output: any, context: __SerdeContext): LogicalTable => {
  return take(output, {
    Alias: __expectString,
    DataTransforms: (_: any) => de_TransformOperationList(_, context),
    Source: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1LogicalTableMap
 */
const de_LogicalTableMap = (output: any, context: __SerdeContext): Record<string, LogicalTable> => {
  return Object.entries(output).reduce((acc: Record<string, LogicalTable>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_LogicalTable(value, context);
    return acc;
  }, {} as Record<string, LogicalTable>);
};

// de_LogicalTableSource omitted.

// de_Logo omitted.

// de_LogoConfiguration omitted.

// de_LogoSet omitted.

// de_LogoSetConfiguration omitted.

// de_LongFormatText omitted.

// de_LookbackWindow omitted.

// de_ManifestFileLocation omitted.

// de_MappedDataSetParameter omitted.

// de_MappedDataSetParameters omitted.

// de_MarginStyle omitted.

// de_MariaDbParameters omitted.

// de_MaximumLabelType omitted.

/**
 * deserializeAws_restJson1MaximumMinimumComputation
 */
const de_MaximumMinimumComputation = (output: any, context: __SerdeContext): MaximumMinimumComputation => {
  return take(output, {
    ComputationId: __expectString,
    Name: __expectString,
    Time: _json,
    Type: __expectString,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MeasureField
 */
const de_MeasureField = (output: any, context: __SerdeContext): MeasureField => {
  return take(output, {
    CalculatedMeasureField: _json,
    CategoricalMeasureField: _json,
    DateMeasureField: _json,
    NumericalMeasureField: (_: any) => de_NumericalMeasureField(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MeasureFieldList
 */
const de_MeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

// de_MemberIdArnPair omitted.

/**
 * deserializeAws_restJson1MetricComparisonComputation
 */
const de_MetricComparisonComputation = (output: any, context: __SerdeContext): MetricComparisonComputation => {
  return take(output, {
    ComputationId: __expectString,
    FromValue: (_: any) => de_MeasureField(_, context),
    Name: __expectString,
    TargetValue: (_: any) => de_MeasureField(_, context),
    Time: _json,
  }) as any;
};

// de_MinimumLabelType omitted.

// de_MissingDataConfiguration omitted.

// de_MissingDataConfigurationList omitted.

// de_MySqlParameters omitted.

// de_NamedEntityDefinition omitted.

// de_NamedEntityDefinitionMetric omitted.

// de_NamedEntityDefinitions omitted.

// de_NamedEntityRef omitted.

// de_NamespaceError omitted.

// de_NamespaceInfoV2 omitted.

// de_Namespaces omitted.

// de_NavbarStyle omitted.

// de_NegativeFormat omitted.

// de_NegativeValueConfiguration omitted.

/**
 * deserializeAws_restJson1NestedFilter
 */
const de_NestedFilter = (output: any, context: __SerdeContext): NestedFilter => {
  return take(output, {
    Column: _json,
    FilterId: __expectString,
    IncludeInnerSet: __expectBoolean,
    InnerFilter: (_: any) => de_InnerFilter(_, context),
  }) as any;
};

// de_NetworkInterface omitted.

// de_NetworkInterfaceList omitted.

/**
 * deserializeAws_restJson1NewDefaultValues
 */
const de_NewDefaultValues = (output: any, context: __SerdeContext): NewDefaultValues => {
  return take(output, {
    DateTimeStaticValues: (_: any) => de_DateTimeDatasetParameterValueList(_, context),
    DecimalStaticValues: (_: any) => de_DecimalDatasetParameterValueList(_, context),
    IntegerStaticValues: _json,
    StringStaticValues: _json,
  }) as any;
};

// de_NonRepeatingVisualsList omitted.

// de_NullValueFormatConfiguration omitted.

// de_NumberDisplayFormatConfiguration omitted.

// de_NumberFormatConfiguration omitted.

/**
 * deserializeAws_restJson1NumericalAggregationFunction
 */
const de_NumericalAggregationFunction = (output: any, context: __SerdeContext): NumericalAggregationFunction => {
  return take(output, {
    PercentileAggregation: (_: any) => de_PercentileAggregation(_, context),
    SimpleNumericalAggregation: __expectString,
  }) as any;
};

// de_NumericalDimensionField omitted.

/**
 * deserializeAws_restJson1NumericalMeasureField
 */
const de_NumericalMeasureField = (output: any, context: __SerdeContext): NumericalMeasureField => {
  return take(output, {
    AggregationFunction: (_: any) => de_NumericalAggregationFunction(_, context),
    Column: _json,
    FieldId: __expectString,
    FormatConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1NumericAxisOptions
 */
const de_NumericAxisOptions = (output: any, context: __SerdeContext): NumericAxisOptions => {
  return take(output, {
    Range: (_: any) => de_AxisDisplayRange(_, context),
    Scale: (_: any) => de_AxisScale(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1NumericEqualityDrillDownFilter
 */
const de_NumericEqualityDrillDownFilter = (output: any, context: __SerdeContext): NumericEqualityDrillDownFilter => {
  return take(output, {
    Column: _json,
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1NumericEqualityFilter
 */
const de_NumericEqualityFilter = (output: any, context: __SerdeContext): NumericEqualityFilter => {
  return take(output, {
    AggregationFunction: (_: any) => de_AggregationFunction(_, context),
    Column: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
    FilterId: __expectString,
    MatchOperator: __expectString,
    NullOption: __expectString,
    ParameterName: __expectString,
    SelectAllOptions: __expectString,
    Value: __limitedParseDouble,
  }) as any;
};

// de_NumericFormatConfiguration omitted.

/**
 * deserializeAws_restJson1NumericRangeFilter
 */
const de_NumericRangeFilter = (output: any, context: __SerdeContext): NumericRangeFilter => {
  return take(output, {
    AggregationFunction: (_: any) => de_AggregationFunction(_, context),
    Column: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
    FilterId: __expectString,
    IncludeMaximum: __expectBoolean,
    IncludeMinimum: __expectBoolean,
    NullOption: __expectString,
    RangeMaximum: (_: any) => de_NumericRangeFilterValue(_, context),
    RangeMinimum: (_: any) => de_NumericRangeFilterValue(_, context),
    SelectAllOptions: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NumericRangeFilterValue
 */
const de_NumericRangeFilterValue = (output: any, context: __SerdeContext): NumericRangeFilterValue => {
  return take(output, {
    Parameter: __expectString,
    StaticValue: __limitedParseDouble,
  }) as any;
};

// de_NumericSeparatorConfiguration omitted.

// de_OAuthParameters omitted.

// de_OperandList omitted.

// de_OracleParameters omitted.

// de_OutputColumn omitted.

// de_OutputColumnList omitted.

/**
 * deserializeAws_restJson1OverrideDatasetParameterOperation
 */
const de_OverrideDatasetParameterOperation = (
  output: any,
  context: __SerdeContext
): OverrideDatasetParameterOperation => {
  return take(output, {
    NewDefaultValues: (_: any) => de_NewDefaultValues(_, context),
    NewParameterName: __expectString,
    ParameterName: __expectString,
  }) as any;
};

// de_PaginationConfiguration omitted.

// de_Palette omitted.

// de_PanelConfiguration omitted.

// de_PanelTitleOptions omitted.

/**
 * deserializeAws_restJson1ParameterControl
 */
const de_ParameterControl = (output: any, context: __SerdeContext): ParameterControl => {
  return take(output, {
    DateTimePicker: _json,
    Dropdown: _json,
    List: _json,
    Slider: (_: any) => de_ParameterSliderControl(_, context),
    TextArea: _json,
    TextField: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ParameterControlList
 */
const de_ParameterControlList = (output: any, context: __SerdeContext): ParameterControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParameterControl(entry, context);
    });
  return retVal;
};

// de_ParameterDateTimePickerControl omitted.

/**
 * deserializeAws_restJson1ParameterDeclaration
 */
const de_ParameterDeclaration = (output: any, context: __SerdeContext): ParameterDeclaration => {
  return take(output, {
    DateTimeParameterDeclaration: (_: any) => de_DateTimeParameterDeclaration(_, context),
    DecimalParameterDeclaration: (_: any) => de_DecimalParameterDeclaration(_, context),
    IntegerParameterDeclaration: _json,
    StringParameterDeclaration: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ParameterDeclarationList
 */
const de_ParameterDeclarationList = (output: any, context: __SerdeContext): ParameterDeclaration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParameterDeclaration(entry, context);
    });
  return retVal;
};

// de_ParameterDropDownControl omitted.

// de_ParameterListControl omitted.

/**
 * deserializeAws_restJson1_Parameters
 */
const de__Parameters = (output: any, context: __SerdeContext): _Parameters => {
  return take(output, {
    DateTimeParameters: (_: any) => de_DateTimeParameterList(_, context),
    DecimalParameters: (_: any) => de_DecimalParameterList(_, context),
    IntegerParameters: _json,
    StringParameters: _json,
  }) as any;
};

// de_ParameterSelectableValueList omitted.

// de_ParameterSelectableValues omitted.

/**
 * deserializeAws_restJson1ParameterSliderControl
 */
const de_ParameterSliderControl = (output: any, context: __SerdeContext): ParameterSliderControl => {
  return take(output, {
    DisplayOptions: _json,
    MaximumValue: __limitedParseDouble,
    MinimumValue: __limitedParseDouble,
    ParameterControlId: __expectString,
    SourceParameterName: __expectString,
    StepSize: __limitedParseDouble,
    Title: __expectString,
  }) as any;
};

// de_ParameterTextAreaControl omitted.

// de_ParameterTextFieldControl omitted.

// de_Path omitted.

// de_PercentageDisplayFormatConfiguration omitted.

/**
 * deserializeAws_restJson1PercentileAggregation
 */
const de_PercentileAggregation = (output: any, context: __SerdeContext): PercentileAggregation => {
  return take(output, {
    PercentileValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1PercentVisibleRange
 */
const de_PercentVisibleRange = (output: any, context: __SerdeContext): PercentVisibleRange => {
  return take(output, {
    From: __limitedParseDouble,
    To: __limitedParseDouble,
  }) as any;
};

// de_PerformanceConfiguration omitted.

/**
 * deserializeAws_restJson1PeriodOverPeriodComputation
 */
const de_PeriodOverPeriodComputation = (output: any, context: __SerdeContext): PeriodOverPeriodComputation => {
  return take(output, {
    ComputationId: __expectString,
    Name: __expectString,
    Time: _json,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PeriodToDateComputation
 */
const de_PeriodToDateComputation = (output: any, context: __SerdeContext): PeriodToDateComputation => {
  return take(output, {
    ComputationId: __expectString,
    Name: __expectString,
    PeriodTimeGranularity: __expectString,
    Time: _json,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

// de_PhysicalTable omitted.

// de_PhysicalTableMap omitted.

/**
 * deserializeAws_restJson1PieChartAggregatedFieldWells
 */
const de_PieChartAggregatedFieldWells = (output: any, context: __SerdeContext): PieChartAggregatedFieldWells => {
  return take(output, {
    Category: _json,
    SmallMultiples: _json,
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PieChartConfiguration
 */
const de_PieChartConfiguration = (output: any, context: __SerdeContext): PieChartConfiguration => {
  return take(output, {
    CategoryLabelOptions: _json,
    ContributionAnalysisDefaults: _json,
    DataLabels: _json,
    DonutOptions: _json,
    FieldWells: (_: any) => de_PieChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    SmallMultiplesOptions: _json,
    SortConfiguration: (_: any) => de_PieChartSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    ValueLabelOptions: _json,
    VisualPalette: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PieChartFieldWells
 */
const de_PieChartFieldWells = (output: any, context: __SerdeContext): PieChartFieldWells => {
  return take(output, {
    PieChartAggregatedFieldWells: (_: any) => de_PieChartAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PieChartSortConfiguration
 */
const de_PieChartSortConfiguration = (output: any, context: __SerdeContext): PieChartSortConfiguration => {
  return take(output, {
    CategoryItemsLimit: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
    SmallMultiplesLimitConfiguration: _json,
    SmallMultiplesSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PieChartVisual
 */
const de_PieChartVisual = (output: any, context: __SerdeContext): PieChartVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_PieChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PivotFieldSortOptions
 */
const de_PivotFieldSortOptions = (output: any, context: __SerdeContext): PivotFieldSortOptions => {
  return take(output, {
    FieldId: __expectString,
    SortBy: (_: any) => de_PivotTableSortBy(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PivotFieldSortOptionsList
 */
const de_PivotFieldSortOptionsList = (output: any, context: __SerdeContext): PivotFieldSortOptions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PivotFieldSortOptions(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PivotMeasureFieldList
 */
const de_PivotMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PivotTableAggregatedFieldWells
 */
const de_PivotTableAggregatedFieldWells = (output: any, context: __SerdeContext): PivotTableAggregatedFieldWells => {
  return take(output, {
    Columns: _json,
    Rows: _json,
    Values: (_: any) => de_PivotMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PivotTableCellConditionalFormatting
 */
const de_PivotTableCellConditionalFormatting = (
  output: any,
  context: __SerdeContext
): PivotTableCellConditionalFormatting => {
  return take(output, {
    FieldId: __expectString,
    Scope: _json,
    Scopes: _json,
    TextFormat: (_: any) => de_TextConditionalFormat(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PivotTableConditionalFormatting
 */
const de_PivotTableConditionalFormatting = (output: any, context: __SerdeContext): PivotTableConditionalFormatting => {
  return take(output, {
    ConditionalFormattingOptions: (_: any) => de_PivotTableConditionalFormattingOptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PivotTableConditionalFormattingOption
 */
const de_PivotTableConditionalFormattingOption = (
  output: any,
  context: __SerdeContext
): PivotTableConditionalFormattingOption => {
  return take(output, {
    Cell: (_: any) => de_PivotTableCellConditionalFormatting(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PivotTableConditionalFormattingOptionList
 */
const de_PivotTableConditionalFormattingOptionList = (
  output: any,
  context: __SerdeContext
): PivotTableConditionalFormattingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PivotTableConditionalFormattingOption(entry, context);
    });
  return retVal;
};

// de_PivotTableConditionalFormattingScope omitted.

// de_PivotTableConditionalFormattingScopeList omitted.

/**
 * deserializeAws_restJson1PivotTableConfiguration
 */
const de_PivotTableConfiguration = (output: any, context: __SerdeContext): PivotTableConfiguration => {
  return take(output, {
    FieldOptions: _json,
    FieldWells: (_: any) => de_PivotTableFieldWells(_, context),
    Interactions: _json,
    PaginatedReportOptions: _json,
    SortConfiguration: (_: any) => de_PivotTableSortConfiguration(_, context),
    TableOptions: _json,
    TotalOptions: _json,
  }) as any;
};

// de_PivotTableDataPathOption omitted.

// de_PivotTableDataPathOptionList omitted.

// de_PivotTableDimensionList omitted.

// de_PivotTableFieldCollapseStateOption omitted.

// de_PivotTableFieldCollapseStateOptionList omitted.

// de_PivotTableFieldCollapseStateTarget omitted.

// de_PivotTableFieldOption omitted.

// de_PivotTableFieldOptionList omitted.

// de_PivotTableFieldOptions omitted.

// de_PivotTableFieldSubtotalOptions omitted.

// de_PivotTableFieldSubtotalOptionsList omitted.

/**
 * deserializeAws_restJson1PivotTableFieldWells
 */
const de_PivotTableFieldWells = (output: any, context: __SerdeContext): PivotTableFieldWells => {
  return take(output, {
    PivotTableAggregatedFieldWells: (_: any) => de_PivotTableAggregatedFieldWells(_, context),
  }) as any;
};

// de_PivotTableOptions omitted.

// de_PivotTablePaginatedReportOptions omitted.

// de_PivotTableRowsLabelOptions omitted.

/**
 * deserializeAws_restJson1PivotTableSortBy
 */
const de_PivotTableSortBy = (output: any, context: __SerdeContext): PivotTableSortBy => {
  return take(output, {
    Column: (_: any) => de_ColumnSort(_, context),
    DataPath: _json,
    Field: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PivotTableSortConfiguration
 */
const de_PivotTableSortConfiguration = (output: any, context: __SerdeContext): PivotTableSortConfiguration => {
  return take(output, {
    FieldSortOptions: (_: any) => de_PivotFieldSortOptionsList(_, context),
  }) as any;
};

// de_PivotTableTotalOptions omitted.

/**
 * deserializeAws_restJson1PivotTableVisual
 */
const de_PivotTableVisual = (output: any, context: __SerdeContext): PivotTableVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_PivotTableConfiguration(_, context),
    ConditionalFormatting: (_: any) => de_PivotTableConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_PivotTotalOptions omitted.

/**
 * deserializeAws_restJson1PluginVisual
 */
const de_PluginVisual = (output: any, context: __SerdeContext): PluginVisual => {
  return take(output, {
    ChartConfiguration: (_: any) => de_PluginVisualConfiguration(_, context),
    PluginArn: __expectString,
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PluginVisualConfiguration
 */
const de_PluginVisualConfiguration = (output: any, context: __SerdeContext): PluginVisualConfiguration => {
  return take(output, {
    FieldWells: (_: any) => de_PluginVisualFieldWells(_, context),
    SortConfiguration: (_: any) => de_PluginVisualSortConfiguration(_, context),
    VisualOptions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PluginVisualFieldWell
 */
const de_PluginVisualFieldWell = (output: any, context: __SerdeContext): PluginVisualFieldWell => {
  return take(output, {
    AxisName: __expectString,
    Dimensions: _json,
    Measures: (_: any) => de_MeasureFieldList(_, context),
    Unaggregated: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PluginVisualFieldWells
 */
const de_PluginVisualFieldWells = (output: any, context: __SerdeContext): PluginVisualFieldWell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PluginVisualFieldWell(entry, context);
    });
  return retVal;
};

// de_PluginVisualItemsLimitConfiguration omitted.

// de_PluginVisualOptions omitted.

// de_PluginVisualPropertiesList omitted.

// de_PluginVisualProperty omitted.

/**
 * deserializeAws_restJson1PluginVisualSortConfiguration
 */
const de_PluginVisualSortConfiguration = (output: any, context: __SerdeContext): PluginVisualSortConfiguration => {
  return take(output, {
    PluginVisualTableQuerySort: (_: any) => de_PluginVisualTableQuerySort(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PluginVisualTableQuerySort
 */
const de_PluginVisualTableQuerySort = (output: any, context: __SerdeContext): PluginVisualTableQuerySort => {
  return take(output, {
    ItemsLimitConfiguration: _json,
    RowSort: (_: any) => de_RowSortList(_, context),
  }) as any;
};

// de_PostgreSqlParameters omitted.

/**
 * deserializeAws_restJson1PredefinedHierarchy
 */
const de_PredefinedHierarchy = (output: any, context: __SerdeContext): PredefinedHierarchy => {
  return take(output, {
    Columns: _json,
    DrillDownFilters: (_: any) => de_DrillDownFilterList(_, context),
    HierarchyId: __expectString,
  }) as any;
};

// de_PredefinedHierarchyColumnList omitted.

// de_PrestoParameters omitted.

// de_PrincipalList omitted.

// de_ProgressBarOptions omitted.

// de_ProjectedColumnList omitted.

// de_ProjectOperation omitted.

// de_QAResult omitted.

// de_QAResults omitted.

// de_QueryExecutionOptions omitted.

// de_QueueInfo omitted.

/**
 * deserializeAws_restJson1RadarChartAggregatedFieldWells
 */
const de_RadarChartAggregatedFieldWells = (output: any, context: __SerdeContext): RadarChartAggregatedFieldWells => {
  return take(output, {
    Category: _json,
    Color: _json,
    Values: (_: any) => de_RadarChartValuesFieldList(_, context),
  }) as any;
};

// de_RadarChartAreaStyleSettings omitted.

// de_RadarChartCategoryFieldList omitted.

// de_RadarChartColorFieldList omitted.

/**
 * deserializeAws_restJson1RadarChartConfiguration
 */
const de_RadarChartConfiguration = (output: any, context: __SerdeContext): RadarChartConfiguration => {
  return take(output, {
    AlternateBandColorsVisibility: __expectString,
    AlternateBandEvenColor: __expectString,
    AlternateBandOddColor: __expectString,
    AxesRangeScale: __expectString,
    BaseSeriesSettings: _json,
    CategoryAxis: (_: any) => de_AxisDisplayOptions(_, context),
    CategoryLabelOptions: _json,
    ColorAxis: (_: any) => de_AxisDisplayOptions(_, context),
    ColorLabelOptions: _json,
    FieldWells: (_: any) => de_RadarChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    Shape: __expectString,
    SortConfiguration: (_: any) => de_RadarChartSortConfiguration(_, context),
    StartAngle: __limitedParseDouble,
    VisualPalette: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RadarChartFieldWells
 */
const de_RadarChartFieldWells = (output: any, context: __SerdeContext): RadarChartFieldWells => {
  return take(output, {
    RadarChartAggregatedFieldWells: (_: any) => de_RadarChartAggregatedFieldWells(_, context),
  }) as any;
};

// de_RadarChartSeriesSettings omitted.

/**
 * deserializeAws_restJson1RadarChartSortConfiguration
 */
const de_RadarChartSortConfiguration = (output: any, context: __SerdeContext): RadarChartSortConfiguration => {
  return take(output, {
    CategoryItemsLimit: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
    ColorItemsLimit: _json,
    ColorSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RadarChartValuesFieldList
 */
const de_RadarChartValuesFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RadarChartVisual
 */
const de_RadarChartVisual = (output: any, context: __SerdeContext): RadarChartVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_RadarChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_RangeConstant omitted.

// de_RangeEndsLabelType omitted.

// de_RdsParameters omitted.

// de_RedshiftIAMParameters omitted.

// de_RedshiftParameters omitted.

/**
 * deserializeAws_restJson1ReferenceLine
 */
const de_ReferenceLine = (output: any, context: __SerdeContext): ReferenceLine => {
  return take(output, {
    DataConfiguration: (_: any) => de_ReferenceLineDataConfiguration(_, context),
    LabelConfiguration: _json,
    Status: __expectString,
    StyleConfiguration: _json,
  }) as any;
};

// de_ReferenceLineCustomLabelConfiguration omitted.

/**
 * deserializeAws_restJson1ReferenceLineDataConfiguration
 */
const de_ReferenceLineDataConfiguration = (output: any, context: __SerdeContext): ReferenceLineDataConfiguration => {
  return take(output, {
    AxisBinding: __expectString,
    DynamicConfiguration: (_: any) => de_ReferenceLineDynamicDataConfiguration(_, context),
    SeriesType: __expectString,
    StaticConfiguration: (_: any) => de_ReferenceLineStaticDataConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ReferenceLineDynamicDataConfiguration
 */
const de_ReferenceLineDynamicDataConfiguration = (
  output: any,
  context: __SerdeContext
): ReferenceLineDynamicDataConfiguration => {
  return take(output, {
    Calculation: (_: any) => de_NumericalAggregationFunction(_, context),
    Column: _json,
    MeasureAggregationFunction: (_: any) => de_AggregationFunction(_, context),
  }) as any;
};

// de_ReferenceLineLabelConfiguration omitted.

/**
 * deserializeAws_restJson1ReferenceLineList
 */
const de_ReferenceLineList = (output: any, context: __SerdeContext): ReferenceLine[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReferenceLine(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReferenceLineStaticDataConfiguration
 */
const de_ReferenceLineStaticDataConfiguration = (
  output: any,
  context: __SerdeContext
): ReferenceLineStaticDataConfiguration => {
  return take(output, {
    Value: __limitedParseDouble,
  }) as any;
};

// de_ReferenceLineStyleConfiguration omitted.

// de_ReferenceLineValueLabelConfiguration omitted.

// de_RefreshConfiguration omitted.

// de_RefreshFailureConfiguration omitted.

// de_RefreshFailureEmailAlert omitted.

// de_RefreshFrequency omitted.

/**
 * deserializeAws_restJson1RefreshSchedule
 */
const de_RefreshSchedule = (output: any, context: __SerdeContext): RefreshSchedule => {
  return take(output, {
    Arn: __expectString,
    RefreshType: __expectString,
    ScheduleFrequency: _json,
    ScheduleId: __expectString,
    StartAfterDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1RefreshSchedules
 */
const de_RefreshSchedules = (output: any, context: __SerdeContext): RefreshSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RefreshSchedule(entry, context);
    });
  return retVal;
};

// de_RegisteredCustomerManagedKey omitted.

// de_RelationalTable omitted.

/**
 * deserializeAws_restJson1RelativeDatesFilter
 */
const de_RelativeDatesFilter = (output: any, context: __SerdeContext): RelativeDatesFilter => {
  return take(output, {
    AnchorDateConfiguration: _json,
    Column: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
    ExcludePeriodConfiguration: _json,
    FilterId: __expectString,
    MinimumGranularity: __expectString,
    NullOption: __expectString,
    ParameterName: __expectString,
    RelativeDateType: __expectString,
    RelativeDateValue: __expectInt32,
    TimeGranularity: __expectString,
  }) as any;
};

// de_RelativeDateTimeControlDisplayOptions omitted.

// de_RenameColumnOperation omitted.

// de_ResourcePermission omitted.

// de_ResourcePermissionList omitted.

// de_RollingDateConfiguration omitted.

// de_RowAlternateColorList omitted.

// de_RowAlternateColorOptions omitted.

// de_RowInfo omitted.

// de_RowLevelPermissionDataSet omitted.

// de_RowLevelPermissionTagConfiguration omitted.

// de_RowLevelPermissionTagRule omitted.

// de_RowLevelPermissionTagRuleConfiguration omitted.

// de_RowLevelPermissionTagRuleConfigurationList omitted.

// de_RowLevelPermissionTagRuleList omitted.

/**
 * deserializeAws_restJson1RowSortList
 */
const de_RowSortList = (output: any, context: __SerdeContext): FieldSortOptions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FieldSortOptions(entry, context);
    });
  return retVal;
};

// de_S3BucketConfiguration omitted.

// de_S3Parameters omitted.

// de_S3Source omitted.

// de_SameSheetTargetVisualConfiguration omitted.

/**
 * deserializeAws_restJson1SankeyDiagramAggregatedFieldWells
 */
const de_SankeyDiagramAggregatedFieldWells = (
  output: any,
  context: __SerdeContext
): SankeyDiagramAggregatedFieldWells => {
  return take(output, {
    Destination: _json,
    Source: _json,
    Weight: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SankeyDiagramChartConfiguration
 */
const de_SankeyDiagramChartConfiguration = (output: any, context: __SerdeContext): SankeyDiagramChartConfiguration => {
  return take(output, {
    DataLabels: _json,
    FieldWells: (_: any) => de_SankeyDiagramFieldWells(_, context),
    Interactions: _json,
    SortConfiguration: (_: any) => de_SankeyDiagramSortConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SankeyDiagramFieldWells
 */
const de_SankeyDiagramFieldWells = (output: any, context: __SerdeContext): SankeyDiagramFieldWells => {
  return take(output, {
    SankeyDiagramAggregatedFieldWells: (_: any) => de_SankeyDiagramAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SankeyDiagramSortConfiguration
 */
const de_SankeyDiagramSortConfiguration = (output: any, context: __SerdeContext): SankeyDiagramSortConfiguration => {
  return take(output, {
    DestinationItemsLimit: _json,
    SourceItemsLimit: _json,
    WeightSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SankeyDiagramVisual
 */
const de_SankeyDiagramVisual = (output: any, context: __SerdeContext): SankeyDiagramVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_SankeyDiagramChartConfiguration(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ScatterPlotCategoricallyAggregatedFieldWells
 */
const de_ScatterPlotCategoricallyAggregatedFieldWells = (
  output: any,
  context: __SerdeContext
): ScatterPlotCategoricallyAggregatedFieldWells => {
  return take(output, {
    Category: _json,
    Label: _json,
    Size: (_: any) => de_MeasureFieldList(_, context),
    XAxis: (_: any) => de_MeasureFieldList(_, context),
    YAxis: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ScatterPlotConfiguration
 */
const de_ScatterPlotConfiguration = (output: any, context: __SerdeContext): ScatterPlotConfiguration => {
  return take(output, {
    DataLabels: _json,
    FieldWells: (_: any) => de_ScatterPlotFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    SortConfiguration: _json,
    Tooltip: (_: any) => de_TooltipOptions(_, context),
    VisualPalette: _json,
    XAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    XAxisLabelOptions: _json,
    YAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    YAxisLabelOptions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ScatterPlotFieldWells
 */
const de_ScatterPlotFieldWells = (output: any, context: __SerdeContext): ScatterPlotFieldWells => {
  return take(output, {
    ScatterPlotCategoricallyAggregatedFieldWells: (_: any) =>
      de_ScatterPlotCategoricallyAggregatedFieldWells(_, context),
    ScatterPlotUnaggregatedFieldWells: (_: any) => de_ScatterPlotUnaggregatedFieldWells(_, context),
  }) as any;
};

// de_ScatterPlotSortConfiguration omitted.

/**
 * deserializeAws_restJson1ScatterPlotUnaggregatedFieldWells
 */
const de_ScatterPlotUnaggregatedFieldWells = (
  output: any,
  context: __SerdeContext
): ScatterPlotUnaggregatedFieldWells => {
  return take(output, {
    Category: _json,
    Label: _json,
    Size: (_: any) => de_MeasureFieldList(_, context),
    XAxis: _json,
    YAxis: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ScatterPlotVisual
 */
const de_ScatterPlotVisual = (output: any, context: __SerdeContext): ScatterPlotVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_ScatterPlotConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_ScheduleRefreshOnEntity omitted.

/**
 * deserializeAws_restJson1ScrollBarOptions
 */
const de_ScrollBarOptions = (output: any, context: __SerdeContext): ScrollBarOptions => {
  return take(output, {
    Visibility: __expectString,
    VisibleRange: (_: any) => de_VisibleRangeOptions(_, context),
  }) as any;
};

// de_SecondaryValueOptions omitted.

// de_SectionAfterPageBreak omitted.

// de_SectionBasedLayoutCanvasSizeOptions omitted.

/**
 * deserializeAws_restJson1SectionBasedLayoutConfiguration
 */
const de_SectionBasedLayoutConfiguration = (output: any, context: __SerdeContext): SectionBasedLayoutConfiguration => {
  return take(output, {
    BodySections: (_: any) => de_BodySectionConfigurationList(_, context),
    CanvasSizeOptions: _json,
    FooterSections: _json,
    HeaderSections: _json,
  }) as any;
};

// de_SectionBasedLayoutPaperCanvasSizeOptions omitted.

// de_SectionLayoutConfiguration omitted.

// de_SectionPageBreakConfiguration omitted.

// de_SectionStyle omitted.

// de_SecurityGroupIdList omitted.

// de_SelectedFieldList omitted.

// de_SelectedSheetsFilterScopeConfiguration omitted.

// de_SemanticEntityType omitted.

// de_SemanticType omitted.

/**
 * deserializeAws_restJson1SensitiveDoubleList
 */
const de_SensitiveDoubleList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_SensitiveLongList omitted.

// de_SensitiveStringList omitted.

/**
 * deserializeAws_restJson1SensitiveTimestampList
 */
const de_SensitiveTimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

// de_SeriesItem omitted.

// de_SeriesItemList omitted.

// de_ServiceNowParameters omitted.

// de_SessionTagKeyList omitted.

/**
 * deserializeAws_restJson1SetParameterValueConfiguration
 */
const de_SetParameterValueConfiguration = (output: any, context: __SerdeContext): SetParameterValueConfiguration => {
  return take(output, {
    DestinationParameterName: __expectString,
    Value: (_: any) => de_DestinationParameterValueConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SetParameterValueConfigurationList
 */
const de_SetParameterValueConfigurationList = (
  output: any,
  context: __SerdeContext
): SetParameterValueConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SetParameterValueConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ShapeConditionalFormat
 */
const de_ShapeConditionalFormat = (output: any, context: __SerdeContext): ShapeConditionalFormat => {
  return take(output, {
    BackgroundColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Sheet
 */
const de_Sheet = (output: any, context: __SerdeContext): Sheet => {
  return take(output, {
    Images: (_: any) => de_SheetImageList(_, context),
    Name: __expectString,
    SheetId: __expectString,
  }) as any;
};

// de_SheetControlInfoIconLabelOptions omitted.

// de_SheetControlLayout omitted.

// de_SheetControlLayoutConfiguration omitted.

// de_SheetControlLayoutList omitted.

// de_SheetControlsOption omitted.

/**
 * deserializeAws_restJson1SheetDefinition
 */
const de_SheetDefinition = (output: any, context: __SerdeContext): SheetDefinition => {
  return take(output, {
    ContentType: __expectString,
    CustomActionDefaults: _json,
    Description: __expectString,
    FilterControls: (_: any) => de_FilterControlList(_, context),
    Images: (_: any) => de_SheetImageList(_, context),
    Layouts: (_: any) => de_LayoutList(_, context),
    Name: __expectString,
    ParameterControls: (_: any) => de_ParameterControlList(_, context),
    SheetControlLayouts: _json,
    SheetId: __expectString,
    TextBoxes: _json,
    Title: __expectString,
    Visuals: (_: any) => de_VisualList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SheetDefinitionList
 */
const de_SheetDefinitionList = (output: any, context: __SerdeContext): SheetDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SheetDefinition(entry, context);
    });
  return retVal;
};

// de_SheetElementConfigurationOverrides omitted.

// de_SheetElementRenderingRule omitted.

// de_SheetElementRenderingRuleList omitted.

/**
 * deserializeAws_restJson1SheetImage
 */
const de_SheetImage = (output: any, context: __SerdeContext): SheetImage => {
  return take(output, {
    Actions: (_: any) => de_ImageCustomActionList(_, context),
    ImageContentAltText: __expectString,
    Interactions: _json,
    Scaling: _json,
    SheetImageId: __expectString,
    Source: _json,
    Tooltip: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SheetImageList
 */
const de_SheetImageList = (output: any, context: __SerdeContext): SheetImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SheetImage(entry, context);
    });
  return retVal;
};

// de_SheetImageScalingConfiguration omitted.

// de_SheetImageSource omitted.

// de_SheetImageStaticFileSource omitted.

// de_SheetImageTooltipConfiguration omitted.

// de_SheetImageTooltipText omitted.

// de_SheetLayoutElementMaximizationOption omitted.

/**
 * deserializeAws_restJson1SheetList
 */
const de_SheetList = (output: any, context: __SerdeContext): Sheet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Sheet(entry, context);
    });
  return retVal;
};

// de_SheetStyle omitted.

// de_SheetTextBox omitted.

// de_SheetTextBoxList omitted.

// de_SheetVisualScopingConfiguration omitted.

// de_SheetVisualScopingConfigurations omitted.

// de_ShortFormatText omitted.

// de_SignupResponse omitted.

// de_SimpleClusterMarker omitted.

// de_SingleAxisOptions omitted.

// de_SliderControlDisplayOptions omitted.

// de_Slot omitted.

// de_Slots omitted.

// de_SmallMultiplesAxisProperties omitted.

// de_SmallMultiplesDimensionFieldList omitted.

// de_SmallMultiplesOptions omitted.

// de_SnapshotAnonymousUserRedacted omitted.

// de_SnapshotAnonymousUserRedactedList omitted.

/**
 * deserializeAws_restJson1SnapshotConfiguration
 */
const de_SnapshotConfiguration = (output: any, context: __SerdeContext): SnapshotConfiguration => {
  return take(output, {
    DestinationConfiguration: _json,
    FileGroups: _json,
    Parameters: (_: any) => de__Parameters(_, context),
  }) as any;
};

// de_SnapshotDestinationConfiguration omitted.

// de_SnapshotFile omitted.

// de_SnapshotFileGroup omitted.

// de_SnapshotFileGroupList omitted.

// de_SnapshotFileList omitted.

// de_SnapshotFileSheetSelection omitted.

// de_SnapshotFileSheetSelectionList omitted.

// de_SnapshotFileSheetSelectionVisualIdList omitted.

// de_SnapshotJobErrorInfo omitted.

// de_SnapshotJobResult omitted.

// de_SnapshotJobResultErrorInfo omitted.

// de_SnapshotJobResultErrorInfoList omitted.

// de_SnapshotJobResultFileGroup omitted.

// de_SnapshotJobResultFileGroupList omitted.

// de_SnapshotJobS3Result omitted.

// de_SnapshotJobS3ResultList omitted.

// de_SnapshotS3DestinationConfiguration omitted.

// de_SnapshotS3DestinationConfigurationList omitted.

// de_SnapshotUserConfigurationRedacted omitted.

// de_SnowflakeParameters omitted.

// de_Spacing omitted.

// de_SparkParameters omitted.

// de_SpatialStaticFile omitted.

// de_SqlServerParameters omitted.

// de_SslProperties omitted.

// de_StarburstParameters omitted.

// de_StaticFile omitted.

// de_StaticFileList omitted.

// de_StaticFileS3SourceOptions omitted.

// de_StaticFileSource omitted.

// de_StaticFileUrlSourceOptions omitted.

// de_StringDatasetParameter omitted.

// de_StringDatasetParameterDefaultValues omitted.

// de_StringDatasetParameterValueList omitted.

// de_StringDefaultValueList omitted.

// de_StringDefaultValues omitted.

// de_StringFormatConfiguration omitted.

// de_StringList omitted.

// de_StringParameter omitted.

// de_StringParameterDeclaration omitted.

// de_StringParameterList omitted.

// de_StringValueWhenUnsetConfiguration omitted.

// de_SubnetIdList omitted.

// de_SubtotalOptions omitted.

// de_SucceededTopicReviewedAnswer omitted.

// de_SucceededTopicReviewedAnswers omitted.

// de_SuccessfulKeyRegistrationEntries omitted.

// de_SuccessfulKeyRegistrationEntry omitted.

// de_Synonyms omitted.

/**
 * deserializeAws_restJson1TableAggregatedFieldWells
 */
const de_TableAggregatedFieldWells = (output: any, context: __SerdeContext): TableAggregatedFieldWells => {
  return take(output, {
    GroupBy: _json,
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

// de_TableBorderOptions omitted.

/**
 * deserializeAws_restJson1TableCellConditionalFormatting
 */
const de_TableCellConditionalFormatting = (output: any, context: __SerdeContext): TableCellConditionalFormatting => {
  return take(output, {
    FieldId: __expectString,
    TextFormat: (_: any) => de_TextConditionalFormat(_, context),
  }) as any;
};

// de_TableCellImageSizingConfiguration omitted.

// de_TableCellStyle omitted.

/**
 * deserializeAws_restJson1TableConditionalFormatting
 */
const de_TableConditionalFormatting = (output: any, context: __SerdeContext): TableConditionalFormatting => {
  return take(output, {
    ConditionalFormattingOptions: (_: any) => de_TableConditionalFormattingOptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TableConditionalFormattingOption
 */
const de_TableConditionalFormattingOption = (
  output: any,
  context: __SerdeContext
): TableConditionalFormattingOption => {
  return take(output, {
    Cell: (_: any) => de_TableCellConditionalFormatting(_, context),
    Row: (_: any) => de_TableRowConditionalFormatting(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TableConditionalFormattingOptionList
 */
const de_TableConditionalFormattingOptionList = (
  output: any,
  context: __SerdeContext
): TableConditionalFormattingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableConditionalFormattingOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TableConfiguration
 */
const de_TableConfiguration = (output: any, context: __SerdeContext): TableConfiguration => {
  return take(output, {
    FieldOptions: _json,
    FieldWells: (_: any) => de_TableFieldWells(_, context),
    Interactions: _json,
    PaginatedReportOptions: _json,
    SortConfiguration: (_: any) => de_TableSortConfiguration(_, context),
    TableInlineVisualizations: _json,
    TableOptions: _json,
    TotalOptions: _json,
  }) as any;
};

// de_TableFieldCustomIconContent omitted.

// de_TableFieldCustomTextContent omitted.

// de_TableFieldImageConfiguration omitted.

// de_TableFieldLinkConfiguration omitted.

// de_TableFieldLinkContentConfiguration omitted.

// de_TableFieldOption omitted.

// de_TableFieldOptionList omitted.

// de_TableFieldOptions omitted.

// de_TableFieldOrderList omitted.

// de_TableFieldURLConfiguration omitted.

/**
 * deserializeAws_restJson1TableFieldWells
 */
const de_TableFieldWells = (output: any, context: __SerdeContext): TableFieldWells => {
  return take(output, {
    TableAggregatedFieldWells: (_: any) => de_TableAggregatedFieldWells(_, context),
    TableUnaggregatedFieldWells: _json,
  }) as any;
};

// de_TableInlineVisualization omitted.

// de_TableInlineVisualizationList omitted.

// de_TableOptions omitted.

// de_TablePaginatedReportOptions omitted.

// de_TablePinnedFieldOptions omitted.

/**
 * deserializeAws_restJson1TableRowConditionalFormatting
 */
const de_TableRowConditionalFormatting = (output: any, context: __SerdeContext): TableRowConditionalFormatting => {
  return take(output, {
    BackgroundColor: (_: any) => de_ConditionalFormattingColor(_, context),
    TextColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

// de_TableSideBorderOptions omitted.

/**
 * deserializeAws_restJson1TableSortConfiguration
 */
const de_TableSortConfiguration = (output: any, context: __SerdeContext): TableSortConfiguration => {
  return take(output, {
    PaginationConfiguration: _json,
    RowSort: (_: any) => de_RowSortList(_, context),
  }) as any;
};

// de_TableStyleTarget omitted.

// de_TableStyleTargetList omitted.

// de_TableUnaggregatedFieldList omitted.

// de_TableUnaggregatedFieldWells omitted.

/**
 * deserializeAws_restJson1TableVisual
 */
const de_TableVisual = (output: any, context: __SerdeContext): TableVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_TableConfiguration(_, context),
    ConditionalFormatting: (_: any) => de_TableConditionalFormatting(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_Tag omitted.

// de_TagColumnOperation omitted.

// de_TagList omitted.

// de_TargetVisualList omitted.

/**
 * deserializeAws_restJson1Template
 */
const de_Template = (output: any, context: __SerdeContext): Template => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    TemplateId: __expectString,
    Version: (_: any) => de_TemplateVersion(_, context),
  }) as any;
};

// de_TemplateAlias omitted.

// de_TemplateAliasList omitted.

// de_TemplateError omitted.

// de_TemplateErrorList omitted.

/**
 * deserializeAws_restJson1TemplateSummary
 */
const de_TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestVersionNumber: __expectLong,
    Name: __expectString,
    TemplateId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TemplateSummaryList
 */
const de_TemplateSummaryList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TemplateVersion
 */
const de_TemplateVersion = (output: any, context: __SerdeContext): TemplateVersion => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSetConfigurations: _json,
    Description: __expectString,
    Errors: _json,
    Sheets: (_: any) => de_SheetList(_, context),
    SourceEntityArn: __expectString,
    Status: __expectString,
    ThemeArn: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1TemplateVersionDefinition
 */
const de_TemplateVersionDefinition = (output: any, context: __SerdeContext): TemplateVersionDefinition => {
  return take(output, {
    AnalysisDefaults: _json,
    CalculatedFields: _json,
    ColumnConfigurations: _json,
    DataSetConfigurations: _json,
    FilterGroups: (_: any) => de_FilterGroupList(_, context),
    Options: _json,
    ParameterDeclarations: (_: any) => de_ParameterDeclarationList(_, context),
    QueryExecutionOptions: _json,
    Sheets: (_: any) => de_SheetDefinitionList(_, context),
    StaticFiles: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TemplateVersionSummary
 */
const de_TemplateVersionSummary = (output: any, context: __SerdeContext): TemplateVersionSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Status: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1TemplateVersionSummaryList
 */
const de_TemplateVersionSummaryList = (output: any, context: __SerdeContext): TemplateVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TemplateVersionSummary(entry, context);
    });
  return retVal;
};

// de_TeradataParameters omitted.

// de_TextAreaControlDisplayOptions omitted.

// de_TextBoxInteractionOptions omitted.

// de_TextBoxMenuOption omitted.

/**
 * deserializeAws_restJson1TextConditionalFormat
 */
const de_TextConditionalFormat = (output: any, context: __SerdeContext): TextConditionalFormat => {
  return take(output, {
    BackgroundColor: (_: any) => de_ConditionalFormattingColor(_, context),
    Icon: _json,
    TextColor: (_: any) => de_ConditionalFormattingColor(_, context),
  }) as any;
};

// de_TextControlPlaceholderOptions omitted.

// de_TextFieldControlDisplayOptions omitted.

/**
 * deserializeAws_restJson1Theme
 */
const de_Theme = (output: any, context: __SerdeContext): Theme => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ThemeId: __expectString,
    Type: __expectString,
    Version: (_: any) => de_ThemeVersion(_, context),
  }) as any;
};

// de_ThemeAlias omitted.

// de_ThemeAliasList omitted.

// de_ThemeConfiguration omitted.

// de_ThemeError omitted.

// de_ThemeErrorList omitted.

/**
 * deserializeAws_restJson1ThemeSummary
 */
const de_ThemeSummary = (output: any, context: __SerdeContext): ThemeSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestVersionNumber: __expectLong,
    Name: __expectString,
    ThemeId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ThemeSummaryList
 */
const de_ThemeSummaryList = (output: any, context: __SerdeContext): ThemeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThemeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThemeVersion
 */
const de_ThemeVersion = (output: any, context: __SerdeContext): ThemeVersion => {
  return take(output, {
    Arn: __expectString,
    BaseThemeId: __expectString,
    Configuration: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Errors: _json,
    Status: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1ThemeVersionSummary
 */
const de_ThemeVersionSummary = (output: any, context: __SerdeContext): ThemeVersionSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Status: __expectString,
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1ThemeVersionSummaryList
 */
const de_ThemeVersionSummaryList = (output: any, context: __SerdeContext): ThemeVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThemeVersionSummary(entry, context);
    });
  return retVal;
};

// de_ThousandSeparatorOptions omitted.

// de_TileLayoutStyle omitted.

// de_TileStyle omitted.

/**
 * deserializeAws_restJson1TimeBasedForecastProperties
 */
const de_TimeBasedForecastProperties = (output: any, context: __SerdeContext): TimeBasedForecastProperties => {
  return take(output, {
    LowerBoundary: __limitedParseDouble,
    PeriodsBackward: __expectInt32,
    PeriodsForward: __expectInt32,
    PredictionInterval: __expectInt32,
    Seasonality: __expectInt32,
    UpperBoundary: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1TimeEqualityFilter
 */
const de_TimeEqualityFilter = (output: any, context: __SerdeContext): TimeEqualityFilter => {
  return take(output, {
    Column: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
    FilterId: __expectString,
    ParameterName: __expectString,
    RollingDate: _json,
    TimeGranularity: __expectString,
    Value: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1TimeRangeDrillDownFilter
 */
const de_TimeRangeDrillDownFilter = (output: any, context: __SerdeContext): TimeRangeDrillDownFilter => {
  return take(output, {
    Column: _json,
    RangeMaximum: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RangeMinimum: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TimeGranularity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TimeRangeFilter
 */
const de_TimeRangeFilter = (output: any, context: __SerdeContext): TimeRangeFilter => {
  return take(output, {
    Column: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
    ExcludePeriodConfiguration: _json,
    FilterId: __expectString,
    IncludeMaximum: __expectBoolean,
    IncludeMinimum: __expectBoolean,
    NullOption: __expectString,
    RangeMaximumValue: (_: any) => de_TimeRangeFilterValue(_, context),
    RangeMinimumValue: (_: any) => de_TimeRangeFilterValue(_, context),
    TimeGranularity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TimeRangeFilterValue
 */
const de_TimeRangeFilterValue = (output: any, context: __SerdeContext): TimeRangeFilterValue => {
  return take(output, {
    Parameter: __expectString,
    RollingDate: _json,
    StaticValue: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1TooltipItem
 */
const de_TooltipItem = (output: any, context: __SerdeContext): TooltipItem => {
  return take(output, {
    ColumnTooltipItem: (_: any) => de_ColumnTooltipItem(_, context),
    FieldTooltipItem: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TooltipItemList
 */
const de_TooltipItemList = (output: any, context: __SerdeContext): TooltipItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TooltipItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TooltipOptions
 */
const de_TooltipOptions = (output: any, context: __SerdeContext): TooltipOptions => {
  return take(output, {
    FieldBasedTooltip: (_: any) => de_FieldBasedTooltip(_, context),
    SelectedTooltipType: __expectString,
    TooltipVisibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TopBottomFilter
 */
const de_TopBottomFilter = (output: any, context: __SerdeContext): TopBottomFilter => {
  return take(output, {
    AggregationSortConfigurations: (_: any) => de_AggregationSortConfigurationList(_, context),
    Column: _json,
    DefaultFilterControlConfiguration: (_: any) => de_DefaultFilterControlConfiguration(_, context),
    FilterId: __expectString,
    Limit: __expectInt32,
    ParameterName: __expectString,
    TimeGranularity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TopBottomMoversComputation
 */
const de_TopBottomMoversComputation = (output: any, context: __SerdeContext): TopBottomMoversComputation => {
  return take(output, {
    Category: _json,
    ComputationId: __expectString,
    MoverSize: __expectInt32,
    Name: __expectString,
    SortOrder: __expectString,
    Time: _json,
    Type: __expectString,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TopBottomRankedComputation
 */
const de_TopBottomRankedComputation = (output: any, context: __SerdeContext): TopBottomRankedComputation => {
  return take(output, {
    Category: _json,
    ComputationId: __expectString,
    Name: __expectString,
    ResultSize: __expectInt32,
    Type: __expectString,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

// de_TopicCalculatedField omitted.

// de_TopicCalculatedFields omitted.

// de_TopicCategoryFilter omitted.

// de_TopicCategoryFilterConstant omitted.

// de_TopicColumn omitted.

// de_TopicColumns omitted.

// de_TopicConfigOptions omitted.

// de_TopicConstantValue omitted.

// de_TopicDateRangeFilter omitted.

// de_TopicDetails omitted.

// de_TopicFilter omitted.

// de_TopicFilters omitted.

// de_TopicIR omitted.

// de_TopicIRComparisonMethod omitted.

// de_TopicIRContributionAnalysis omitted.

// de_TopicIRFilterEntry omitted.

// de_TopicIRFilterList omitted.

// de_TopicIRFilterOption omitted.

// de_TopicIRGroupBy omitted.

// de_TopicIRGroupByList omitted.

// de_TopicIRMetric omitted.

// de_TopicIRMetricList omitted.

// de_TopicNamedEntities omitted.

// de_TopicNamedEntity omitted.

// de_TopicNumericEqualityFilter omitted.

// de_TopicNumericRangeFilter omitted.

// de_TopicRangeFilterConstant omitted.

// de_TopicRefreshDetails omitted.

/**
 * deserializeAws_restJson1TopicRefreshSchedule
 */
const de_TopicRefreshSchedule = (output: any, context: __SerdeContext): TopicRefreshSchedule => {
  return take(output, {
    BasedOnSpiceSchedule: __expectBoolean,
    IsEnabled: __expectBoolean,
    RepeatAt: __expectString,
    StartingAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Timezone: __expectString,
    TopicScheduleType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TopicRefreshScheduleSummaries
 */
const de_TopicRefreshScheduleSummaries = (output: any, context: __SerdeContext): TopicRefreshScheduleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TopicRefreshScheduleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TopicRefreshScheduleSummary
 */
const de_TopicRefreshScheduleSummary = (output: any, context: __SerdeContext): TopicRefreshScheduleSummary => {
  return take(output, {
    DatasetArn: __expectString,
    DatasetId: __expectString,
    DatasetName: __expectString,
    RefreshSchedule: (_: any) => de_TopicRefreshSchedule(_, context),
  }) as any;
};

// de_TopicRelativeDateFilter omitted.

/**
 * deserializeAws_restJson1TopicReviewedAnswer
 */
const de_TopicReviewedAnswer = (output: any, context: __SerdeContext): TopicReviewedAnswer => {
  return take(output, {
    AnswerId: __expectString,
    Arn: __expectString,
    DatasetArn: __expectString,
    Mir: _json,
    PrimaryVisual: (_: any) => de_TopicVisual(_, context),
    Question: __expectString,
    Template: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TopicReviewedAnswers
 */
const de_TopicReviewedAnswers = (output: any, context: __SerdeContext): TopicReviewedAnswer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TopicReviewedAnswer(entry, context);
    });
  return retVal;
};

// de_TopicSingularFilterConstant omitted.

// de_TopicSortClause omitted.

// de_TopicSummaries omitted.

// de_TopicSummary omitted.

// de_TopicTemplate omitted.

/**
 * deserializeAws_restJson1TopicVisual
 */
const de_TopicVisual = (output: any, context: __SerdeContext): TopicVisual => {
  return take(output, {
    Ir: _json,
    Role: __expectString,
    SupportingVisuals: (_: any) => de_TopicVisuals(_, context),
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TopicVisuals
 */
const de_TopicVisuals = (output: any, context: __SerdeContext): TopicVisual[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TopicVisual(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TotalAggregationComputation
 */
const de_TotalAggregationComputation = (output: any, context: __SerdeContext): TotalAggregationComputation => {
  return take(output, {
    ComputationId: __expectString,
    Name: __expectString,
    Value: (_: any) => de_MeasureField(_, context),
  }) as any;
};

// de_TotalAggregationFunction omitted.

// de_TotalAggregationOption omitted.

// de_TotalAggregationOptionList omitted.

// de_TotalOptions omitted.

/**
 * deserializeAws_restJson1TransformOperation
 */
const de_TransformOperation = (output: any, context: __SerdeContext): TransformOperation => {
  if (output.CastColumnTypeOperation != null) {
    return {
      CastColumnTypeOperation: _json(output.CastColumnTypeOperation),
    };
  }
  if (output.CreateColumnsOperation != null) {
    return {
      CreateColumnsOperation: _json(output.CreateColumnsOperation),
    };
  }
  if (output.FilterOperation != null) {
    return {
      FilterOperation: _json(output.FilterOperation),
    };
  }
  if (output.OverrideDatasetParameterOperation != null) {
    return {
      OverrideDatasetParameterOperation: de_OverrideDatasetParameterOperation(
        output.OverrideDatasetParameterOperation,
        context
      ),
    };
  }
  if (output.ProjectOperation != null) {
    return {
      ProjectOperation: _json(output.ProjectOperation),
    };
  }
  if (output.RenameColumnOperation != null) {
    return {
      RenameColumnOperation: _json(output.RenameColumnOperation),
    };
  }
  if (output.TagColumnOperation != null) {
    return {
      TagColumnOperation: _json(output.TagColumnOperation),
    };
  }
  if (output.UntagColumnOperation != null) {
    return {
      UntagColumnOperation: _json(output.UntagColumnOperation),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1TransformOperationList
 */
const de_TransformOperationList = (output: any, context: __SerdeContext): TransformOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TransformOperation(__expectUnion(entry), context);
    });
  return retVal;
};

// de_TransposedTableOption omitted.

// de_TransposedTableOptionList omitted.

/**
 * deserializeAws_restJson1TreeMapAggregatedFieldWells
 */
const de_TreeMapAggregatedFieldWells = (output: any, context: __SerdeContext): TreeMapAggregatedFieldWells => {
  return take(output, {
    Colors: (_: any) => de_TreeMapMeasureFieldList(_, context),
    Groups: _json,
    Sizes: (_: any) => de_TreeMapMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TreeMapConfiguration
 */
const de_TreeMapConfiguration = (output: any, context: __SerdeContext): TreeMapConfiguration => {
  return take(output, {
    ColorLabelOptions: _json,
    ColorScale: (_: any) => de_ColorScale(_, context),
    DataLabels: _json,
    FieldWells: (_: any) => de_TreeMapFieldWells(_, context),
    GroupLabelOptions: _json,
    Interactions: _json,
    Legend: _json,
    SizeLabelOptions: _json,
    SortConfiguration: (_: any) => de_TreeMapSortConfiguration(_, context),
    Tooltip: (_: any) => de_TooltipOptions(_, context),
  }) as any;
};

// de_TreeMapDimensionFieldList omitted.

/**
 * deserializeAws_restJson1TreeMapFieldWells
 */
const de_TreeMapFieldWells = (output: any, context: __SerdeContext): TreeMapFieldWells => {
  return take(output, {
    TreeMapAggregatedFieldWells: (_: any) => de_TreeMapAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TreeMapMeasureFieldList
 */
const de_TreeMapMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TreeMapSortConfiguration
 */
const de_TreeMapSortConfiguration = (output: any, context: __SerdeContext): TreeMapSortConfiguration => {
  return take(output, {
    TreeMapGroupItemsLimitConfiguration: _json,
    TreeMapSort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TreeMapVisual
 */
const de_TreeMapVisual = (output: any, context: __SerdeContext): TreeMapVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_TreeMapConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_TrendArrowOptions omitted.

// de_TrinoParameters omitted.

// de_TwitterParameters omitted.

// de_TypeParameters omitted.

// de_Typography omitted.

// de_UIColorPalette omitted.

// de_UnaggregatedField omitted.

// de_UnaggregatedFieldList omitted.

// de_UniqueKey omitted.

// de_UniqueKeyColumnNameList omitted.

// de_UniqueKeyList omitted.

// de_UniqueValuesComputation omitted.

// de_UntagColumnOperation omitted.

// de_UpdateResourcePermissionList omitted.

// de_UploadSettings omitted.

// de_User omitted.

// de_UserList omitted.

/**
 * deserializeAws_restJson1VisibleRangeOptions
 */
const de_VisibleRangeOptions = (output: any, context: __SerdeContext): VisibleRangeOptions => {
  return take(output, {
    PercentRange: (_: any) => de_PercentVisibleRange(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Visual
 */
const de_Visual = (output: any, context: __SerdeContext): Visual => {
  return take(output, {
    BarChartVisual: (_: any) => de_BarChartVisual(_, context),
    BoxPlotVisual: (_: any) => de_BoxPlotVisual(_, context),
    ComboChartVisual: (_: any) => de_ComboChartVisual(_, context),
    CustomContentVisual: (_: any) => de_CustomContentVisual(_, context),
    EmptyVisual: (_: any) => de_EmptyVisual(_, context),
    FilledMapVisual: (_: any) => de_FilledMapVisual(_, context),
    FunnelChartVisual: (_: any) => de_FunnelChartVisual(_, context),
    GaugeChartVisual: (_: any) => de_GaugeChartVisual(_, context),
    GeospatialMapVisual: (_: any) => de_GeospatialMapVisual(_, context),
    HeatMapVisual: (_: any) => de_HeatMapVisual(_, context),
    HistogramVisual: (_: any) => de_HistogramVisual(_, context),
    InsightVisual: (_: any) => de_InsightVisual(_, context),
    KPIVisual: (_: any) => de_KPIVisual(_, context),
    LayerMapVisual: (_: any) => de_LayerMapVisual(_, context),
    LineChartVisual: (_: any) => de_LineChartVisual(_, context),
    PieChartVisual: (_: any) => de_PieChartVisual(_, context),
    PivotTableVisual: (_: any) => de_PivotTableVisual(_, context),
    PluginVisual: (_: any) => de_PluginVisual(_, context),
    RadarChartVisual: (_: any) => de_RadarChartVisual(_, context),
    SankeyDiagramVisual: (_: any) => de_SankeyDiagramVisual(_, context),
    ScatterPlotVisual: (_: any) => de_ScatterPlotVisual(_, context),
    TableVisual: (_: any) => de_TableVisual(_, context),
    TreeMapVisual: (_: any) => de_TreeMapVisual(_, context),
    WaterfallVisual: (_: any) => de_WaterfallVisual(_, context),
    WordCloudVisual: (_: any) => de_WordCloudVisual(_, context),
  }) as any;
};

// de_VisualAxisSortOption omitted.

/**
 * deserializeAws_restJson1VisualCustomAction
 */
const de_VisualCustomAction = (output: any, context: __SerdeContext): VisualCustomAction => {
  return take(output, {
    ActionOperations: (_: any) => de_VisualCustomActionOperationList(_, context),
    CustomActionId: __expectString,
    Name: __expectString,
    Status: __expectString,
    Trigger: __expectString,
  }) as any;
};

// de_VisualCustomActionDefaults omitted.

/**
 * deserializeAws_restJson1VisualCustomActionList
 */
const de_VisualCustomActionList = (output: any, context: __SerdeContext): VisualCustomAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VisualCustomAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VisualCustomActionOperation
 */
const de_VisualCustomActionOperation = (output: any, context: __SerdeContext): VisualCustomActionOperation => {
  return take(output, {
    FilterOperation: _json,
    NavigationOperation: _json,
    SetParametersOperation: (_: any) => de_CustomActionSetParametersOperation(_, context),
    URLOperation: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1VisualCustomActionOperationList
 */
const de_VisualCustomActionOperationList = (output: any, context: __SerdeContext): VisualCustomActionOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VisualCustomActionOperation(entry, context);
    });
  return retVal;
};

// de_VisualHighlightOperation omitted.

// de_VisualInteractionOptions omitted.

/**
 * deserializeAws_restJson1VisualList
 */
const de_VisualList = (output: any, context: __SerdeContext): Visual[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Visual(entry, context);
    });
  return retVal;
};

// de_VisualMenuOption omitted.

// de_VisualOptions omitted.

// de_VisualPalette omitted.

// de_VisualSubtitleLabelOptions omitted.

// de_VisualTitleLabelOptions omitted.

/**
 * deserializeAws_restJson1VPCConnection
 */
const de_VPCConnection = (output: any, context: __SerdeContext): VPCConnection => {
  return take(output, {
    Arn: __expectString,
    AvailabilityStatus: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsResolvers: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NetworkInterfaces: _json,
    RoleArn: __expectString,
    SecurityGroupIds: _json,
    Status: __expectString,
    VPCConnectionId: __expectString,
    VPCId: __expectString,
  }) as any;
};

// de_VpcConnectionProperties omitted.

/**
 * deserializeAws_restJson1VPCConnectionSummary
 */
const de_VPCConnectionSummary = (output: any, context: __SerdeContext): VPCConnectionSummary => {
  return take(output, {
    Arn: __expectString,
    AvailabilityStatus: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsResolvers: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NetworkInterfaces: _json,
    RoleArn: __expectString,
    SecurityGroupIds: _json,
    Status: __expectString,
    VPCConnectionId: __expectString,
    VPCId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VPCConnectionSummaryList
 */
const de_VPCConnectionSummaryList = (output: any, context: __SerdeContext): VPCConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VPCConnectionSummary(entry, context);
    });
  return retVal;
};

// de_VpcEndpointIdRestrictionRuleMap omitted.

// de_VpcIdRestrictionRuleMap omitted.

/**
 * deserializeAws_restJson1WaterfallChartAggregatedFieldWells
 */
const de_WaterfallChartAggregatedFieldWells = (
  output: any,
  context: __SerdeContext
): WaterfallChartAggregatedFieldWells => {
  return take(output, {
    Breakdowns: _json,
    Categories: _json,
    Values: (_: any) => de_MeasureFieldList(_, context),
  }) as any;
};

// de_WaterfallChartColorConfiguration omitted.

/**
 * deserializeAws_restJson1WaterfallChartConfiguration
 */
const de_WaterfallChartConfiguration = (output: any, context: __SerdeContext): WaterfallChartConfiguration => {
  return take(output, {
    CategoryAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    CategoryAxisLabelOptions: _json,
    ColorConfiguration: _json,
    DataLabels: _json,
    FieldWells: (_: any) => de_WaterfallChartFieldWells(_, context),
    Interactions: _json,
    Legend: _json,
    PrimaryYAxisDisplayOptions: (_: any) => de_AxisDisplayOptions(_, context),
    PrimaryYAxisLabelOptions: _json,
    SortConfiguration: (_: any) => de_WaterfallChartSortConfiguration(_, context),
    VisualPalette: _json,
    WaterfallChartOptions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1WaterfallChartFieldWells
 */
const de_WaterfallChartFieldWells = (output: any, context: __SerdeContext): WaterfallChartFieldWells => {
  return take(output, {
    WaterfallChartAggregatedFieldWells: (_: any) => de_WaterfallChartAggregatedFieldWells(_, context),
  }) as any;
};

// de_WaterfallChartGroupColorConfiguration omitted.

// de_WaterfallChartOptions omitted.

/**
 * deserializeAws_restJson1WaterfallChartSortConfiguration
 */
const de_WaterfallChartSortConfiguration = (output: any, context: __SerdeContext): WaterfallChartSortConfiguration => {
  return take(output, {
    BreakdownItemsLimit: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WaterfallVisual
 */
const de_WaterfallVisual = (output: any, context: __SerdeContext): WaterfallVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_WaterfallChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1WhatIfPointScenario
 */
const de_WhatIfPointScenario = (output: any, context: __SerdeContext): WhatIfPointScenario => {
  return take(output, {
    Date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1WhatIfRangeScenario
 */
const de_WhatIfRangeScenario = (output: any, context: __SerdeContext): WhatIfRangeScenario => {
  return take(output, {
    EndDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1WordCloudAggregatedFieldWells
 */
const de_WordCloudAggregatedFieldWells = (output: any, context: __SerdeContext): WordCloudAggregatedFieldWells => {
  return take(output, {
    GroupBy: _json,
    Size: (_: any) => de_WordCloudMeasureFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WordCloudChartConfiguration
 */
const de_WordCloudChartConfiguration = (output: any, context: __SerdeContext): WordCloudChartConfiguration => {
  return take(output, {
    CategoryLabelOptions: _json,
    FieldWells: (_: any) => de_WordCloudFieldWells(_, context),
    Interactions: _json,
    SortConfiguration: (_: any) => de_WordCloudSortConfiguration(_, context),
    WordCloudOptions: _json,
  }) as any;
};

// de_WordCloudDimensionFieldList omitted.

/**
 * deserializeAws_restJson1WordCloudFieldWells
 */
const de_WordCloudFieldWells = (output: any, context: __SerdeContext): WordCloudFieldWells => {
  return take(output, {
    WordCloudAggregatedFieldWells: (_: any) => de_WordCloudAggregatedFieldWells(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WordCloudMeasureFieldList
 */
const de_WordCloudMeasureFieldList = (output: any, context: __SerdeContext): MeasureField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeasureField(entry, context);
    });
  return retVal;
};

// de_WordCloudOptions omitted.

/**
 * deserializeAws_restJson1WordCloudSortConfiguration
 */
const de_WordCloudSortConfiguration = (output: any, context: __SerdeContext): WordCloudSortConfiguration => {
  return take(output, {
    CategoryItemsLimit: _json,
    CategorySort: (_: any) => de_FieldSortOptionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WordCloudVisual
 */
const de_WordCloudVisual = (output: any, context: __SerdeContext): WordCloudVisual => {
  return take(output, {
    Actions: (_: any) => de_VisualCustomActionList(_, context),
    ChartConfiguration: (_: any) => de_WordCloudChartConfiguration(_, context),
    ColumnHierarchies: (_: any) => de_ColumnHierarchyList(_, context),
    Subtitle: _json,
    Title: _json,
    VisualContentAltText: __expectString,
    VisualId: __expectString,
  }) as any;
};

// de_YAxisOptions omitted.

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

const _ADI = "AdditionalDashboardIds";
const _AN = "AliasName";
const _AS = "AssignmentStatus";
const _DKO = "DefaultKeyOnly";
const _EP = "EntryPoint";
const _FDWR = "ForceDeleteWithoutRecovery";
const _IT = "IdentityType";
const _MR = "MaxResults";
const _N = "Namespace";
const _NT = "NextToken";
const _R = "Resolved";
const _RD = "ResetDisabled";
const _RTF = "RestoreToFolders";
const _RWID = "RecoveryWindowInDays";
const _SLIM = "SessionLifetimeInMinutes";
const _SPE = "StatePersistenceEnabled";
const _T = "Type";
const _TK = "TagKeys";
const _UA = "UserArn";
const _URD = "UndoRedoDisabled";
const _VI = "VersionId";
const _VN = "VersionNumber";
const _adi = "additional-dashboard-ids";
const _an = "alias-name";
const _as = "assignment-status";
const _ct = "creds-type";
const _dko = "default-key-only";
const _ep = "entry-point";
const _fdwr = "force-delete-without-recovery";
const _k = "keys";
const _mr = "max-results";
const _mr_ = "max-result";
const _n = "namespace";
const _nt = "next-token";
const _r = "resolved";
const _rd = "reset-disabled";
const _rtf = "restore-to-folders";
const _rwid = "recovery-window-in-days";
const _sl = "session-lifetime";
const _spe = "state-persistence-enabled";
const _t = "type";
const _ua = "user-arn";
const _urd = "undo-redo-disabled";
const _vI = "versionId";
const _vn = "version-number";
