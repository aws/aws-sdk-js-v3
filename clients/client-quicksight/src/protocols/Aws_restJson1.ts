// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "../commands/CreateTemplateAliasCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "../commands/CreateTemplateCommand";
import { CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput } from "../commands/CreateThemeAliasCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "../commands/CreateThemeCommand";
import {
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "../commands/DeleteAccountCustomizationCommand";
import {
  DeleteAccountSubscriptionCommandInput,
  DeleteAccountSubscriptionCommandOutput,
} from "../commands/DeleteAccountSubscriptionCommand";
import { DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput } from "../commands/DeleteAnalysisCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "../commands/DeleteDashboardCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "../commands/DeleteDataSetCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
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
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand";
import {
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "../commands/DeleteTemplateAliasCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "../commands/DeleteTemplateCommand";
import { DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput } from "../commands/DeleteThemeAliasCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "../commands/DeleteThemeCommand";
import {
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "../commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
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
  DescribeAnalysisPermissionsCommandInput,
  DescribeAnalysisPermissionsCommandOutput,
} from "../commands/DescribeAnalysisPermissionsCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "../commands/DescribeDashboardCommand";
import {
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "../commands/DescribeDashboardPermissionsCommand";
import { DescribeDataSetCommandInput, DescribeDataSetCommandOutput } from "../commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "../commands/DescribeDataSetPermissionsCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "../commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "../commands/DescribeDataSourcePermissionsCommand";
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
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "../commands/DescribeNamespaceCommand";
import {
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
} from "../commands/DescribeTemplateAliasCommand";
import { DescribeTemplateCommandInput, DescribeTemplateCommandOutput } from "../commands/DescribeTemplateCommand";
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
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import {
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
} from "../commands/GenerateEmbedUrlForAnonymousUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
} from "../commands/GenerateEmbedUrlForRegisteredUserCommand";
import {
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "../commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput } from "../commands/GetSessionEmbedUrlCommand";
import { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "../commands/ListAnalysesCommand";
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
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "../commands/ListIngestionsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
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
import { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "../commands/ListUserGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { RegisterUserCommandInput, RegisterUserCommandOutput } from "../commands/RegisterUserCommand";
import { RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput } from "../commands/RestoreAnalysisCommand";
import { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "../commands/SearchAnalysesCommand";
import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "../commands/SearchDashboardsCommand";
import { SearchDataSetsCommandInput, SearchDataSetsCommandOutput } from "../commands/SearchDataSetsCommand";
import { SearchDataSourcesCommandInput, SearchDataSourcesCommandOutput } from "../commands/SearchDataSourcesCommand";
import { SearchFoldersCommandInput, SearchFoldersCommandOutput } from "../commands/SearchFoldersCommand";
import { SearchGroupsCommandInput, SearchGroupsCommandOutput } from "../commands/SearchGroupsCommand";
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
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "../commands/UpdateDashboardCommand";
import {
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "../commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "../commands/UpdateDashboardPublishedVersionCommand";
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
  UpdateIpRestrictionCommandInput,
  UpdateIpRestrictionCommandOutput,
} from "../commands/UpdateIpRestrictionCommand";
import {
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
} from "../commands/UpdatePublicSharingSettingsCommand";
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
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  _Parameters,
  AccessDeniedException,
  AccountCustomization,
  AccountInfo,
  AccountSettings,
  ActiveIAMPolicyAssignment,
  AdHocFilteringOption,
  AmazonElasticsearchParameters,
  AmazonOpenSearchParameters,
  Analysis,
  AnalysisError,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSourceTemplate,
  AnalysisSummary,
  AnonymousUserDashboardEmbeddingConfiguration,
  AnonymousUserDashboardVisualEmbeddingConfiguration,
  AnonymousUserEmbeddingExperienceConfiguration,
  AnonymousUserQSearchBarEmbeddingConfiguration,
  AthenaParameters,
  AuroraParameters,
  AuroraPostgreSqlParameters,
  AwsIotAnalyticsParameters,
  BorderStyle,
  CalculatedColumn,
  CastColumnTypeOperation,
  ColumnDescription,
  ColumnGroup,
  ColumnGroupColumnSchema,
  ColumnGroupSchema,
  ColumnLevelPermissionRule,
  ColumnSchema,
  ColumnTag,
  ColumnTagName,
  ConcurrentUpdatingException,
  ConflictException,
  CreateColumnsOperation,
  CredentialPair,
  CustomSql,
  Dashboard,
  DashboardError,
  DashboardPublishOptions,
  DashboardSearchFilter,
  DashboardSourceEntity,
  DashboardSourceTemplate,
  DashboardSummary,
  DashboardVersion,
  DashboardVersionSummary,
  DashboardVisualId,
  DatabricksParameters,
  DataColorPalette,
  DataSet,
  DataSetConfiguration,
  DataSetReference,
  DataSetSchema,
  DataSetSearchFilter,
  DataSetSummary,
  DataSetUsageConfiguration,
  DataSource,
  DataSourceCredentials,
  DataSourceErrorInfo,
  DataSourceParameters,
  DataSourceSearchFilter,
  DataSourceSummary,
  DateTimeParameter,
  DecimalParameter,
  ErrorInfo,
  ExasolParameters,
  ExportToCSVOption,
  FieldFolder,
  FilterOperation,
  Folder,
  FolderMember,
  GeoSpatialColumnGroup,
  Group,
  GroupMember,
  GutterStyle,
  IAMPolicyAssignment,
  Ingestion,
  InputColumn,
  IntegerParameter,
  InternalFailureException,
  InvalidNextTokenException,
  InvalidParameterValueException,
  JiraParameters,
  JoinInstruction,
  JoinKeyProperties,
  LimitExceededException,
  LinkSharingConfiguration,
  LogicalTable,
  LogicalTableSource,
  ManifestFileLocation,
  MarginStyle,
  MariaDbParameters,
  MySqlParameters,
  NamespaceError,
  NamespaceInfoV2,
  OracleParameters,
  OutputColumn,
  PhysicalTable,
  PostgreSqlParameters,
  PreconditionNotMetException,
  PrestoParameters,
  ProjectOperation,
  QueueInfo,
  RdsParameters,
  RedshiftParameters,
  RelationalTable,
  RenameColumnOperation,
  ResourceExistsException,
  ResourceNotFoundException,
  ResourcePermission,
  ResourceUnavailableException,
  RowInfo,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagRule,
  S3Parameters,
  S3Source,
  ServiceNowParameters,
  Sheet,
  SheetControlsOption,
  SheetStyle,
  SignupResponse,
  SnowflakeParameters,
  SparkParameters,
  SqlServerParameters,
  SslProperties,
  StringParameter,
  Tag,
  TagColumnOperation,
  TemplateAlias,
  TemplateError,
  TemplateSourceAnalysis,
  TemplateSourceEntity,
  TemplateSourceTemplate,
  TeradataParameters,
  ThemeAlias,
  ThemeConfiguration,
  ThrottlingException,
  TileLayoutStyle,
  TileStyle,
  TransformOperation,
  TwitterParameters,
  UIColorPalette,
  UnsupportedUserEditionException,
  UntagColumnOperation,
  UploadSettings,
  VpcConnectionProperties,
} from "../models/models_0";
import {
  DomainNotWhitelistedException,
  FolderSearchFilter,
  FolderSummary,
  GroupSearchFilter,
  IAMPolicyAssignmentSummary,
  IdentityTypeNotSupportedException,
  InvalidRequestException,
  MemberIdArnPair,
  QuickSightUserNotFoundException,
  RegisteredUserDashboardEmbeddingConfiguration,
  RegisteredUserDashboardVisualEmbeddingConfiguration,
  RegisteredUserEmbeddingExperienceConfiguration,
  RegisteredUserQSearchBarEmbeddingConfiguration,
  RegisteredUserQuickSightConsoleEmbeddingConfiguration,
  SessionLifetimeInMinutesInvalidException,
  SessionTag,
  Template,
  TemplateSummary,
  TemplateVersion,
  TemplateVersionSummary,
  Theme,
  ThemeError,
  ThemeSummary,
  ThemeVersion,
  ThemeVersionSummary,
  UnsupportedPricingPlanException,
  User,
} from "../models/models_1";
import { QuickSightServiceException as __BaseException } from "../models/QuickSightServiceException";

export const serializeAws_restJson1CancelIngestionCommand = async (
  input: CancelIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "IngestionId", () => input.IngestionId!, "{IngestionId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAccountCustomizationCommand = async (
  input: CreateAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/customizations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    namespace: [, input.Namespace!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.AccountCustomization != null && {
      AccountCustomization: serializeAws_restJson1AccountCustomization(input.AccountCustomization, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1CreateAccountSubscriptionCommand = async (
  input: CreateAccountSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/{AwsAccountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AccountName != null && { AccountName: input.AccountName }),
    ...(input.ActiveDirectoryName != null && { ActiveDirectoryName: input.ActiveDirectoryName }),
    ...(input.AdminGroup != null && { AdminGroup: serializeAws_restJson1GroupsList(input.AdminGroup, context) }),
    ...(input.AuthenticationMethod != null && { AuthenticationMethod: input.AuthenticationMethod }),
    ...(input.AuthorGroup != null && { AuthorGroup: serializeAws_restJson1GroupsList(input.AuthorGroup, context) }),
    ...(input.ContactNumber != null && { ContactNumber: input.ContactNumber }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Edition != null && { Edition: input.Edition }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.NotificationEmail != null && { NotificationEmail: input.NotificationEmail }),
    ...(input.ReaderGroup != null && { ReaderGroup: serializeAws_restJson1GroupsList(input.ReaderGroup, context) }),
    ...(input.Realm != null && { Realm: input.Realm }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAnalysisCommand = async (
  input: CreateAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
    }),
    ...(input.SourceEntity != null && {
      SourceEntity: serializeAws_restJson1AnalysisSourceEntity(input.SourceEntity, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.ThemeArn != null && { ThemeArn: input.ThemeArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDashboardCommand = async (
  input: CreateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DashboardPublishOptions != null && {
      DashboardPublishOptions: serializeAws_restJson1DashboardPublishOptions(input.DashboardPublishOptions, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
    }),
    ...(input.SourceEntity != null && {
      SourceEntity: serializeAws_restJson1DashboardSourceEntity(input.SourceEntity, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.ThemeArn != null && { ThemeArn: input.ThemeArn }),
    ...(input.VersionDescription != null && { VersionDescription: input.VersionDescription }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDataSetCommand = async (
  input: CreateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/data-sets";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ColumnGroups != null && {
      ColumnGroups: serializeAws_restJson1ColumnGroupList(input.ColumnGroups, context),
    }),
    ...(input.ColumnLevelPermissionRules != null && {
      ColumnLevelPermissionRules: serializeAws_restJson1ColumnLevelPermissionRuleList(
        input.ColumnLevelPermissionRules,
        context
      ),
    }),
    ...(input.DataSetId != null && { DataSetId: input.DataSetId }),
    ...(input.DataSetUsageConfiguration != null && {
      DataSetUsageConfiguration: serializeAws_restJson1DataSetUsageConfiguration(
        input.DataSetUsageConfiguration,
        context
      ),
    }),
    ...(input.FieldFolders != null && {
      FieldFolders: serializeAws_restJson1FieldFolderMap(input.FieldFolders, context),
    }),
    ...(input.ImportMode != null && { ImportMode: input.ImportMode }),
    ...(input.LogicalTableMap != null && {
      LogicalTableMap: serializeAws_restJson1LogicalTableMap(input.LogicalTableMap, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
    }),
    ...(input.PhysicalTableMap != null && {
      PhysicalTableMap: serializeAws_restJson1PhysicalTableMap(input.PhysicalTableMap, context),
    }),
    ...(input.RowLevelPermissionDataSet != null && {
      RowLevelPermissionDataSet: serializeAws_restJson1RowLevelPermissionDataSet(
        input.RowLevelPermissionDataSet,
        context
      ),
    }),
    ...(input.RowLevelPermissionTagConfiguration != null && {
      RowLevelPermissionTagConfiguration: serializeAws_restJson1RowLevelPermissionTagConfiguration(
        input.RowLevelPermissionTagConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/data-sources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1DataSourceCredentials(input.Credentials, context),
    }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceParameters != null && {
      DataSourceParameters: serializeAws_restJson1DataSourceParameters(input.DataSourceParameters, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
    }),
    ...(input.SslProperties != null && {
      SslProperties: serializeAws_restJson1SslProperties(input.SslProperties, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VpcConnectionProperties != null && {
      VpcConnectionProperties: serializeAws_restJson1VpcConnectionProperties(input.VpcConnectionProperties, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFolderCommand = async (
  input: CreateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FolderType != null && { FolderType: input.FolderType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentFolderArn != null && { ParentFolderArn: input.ParentFolderArn }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFolderMembershipCommand = async (
  input: CreateFolderMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberId", () => input.MemberId!, "{MemberId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberType", () => input.MemberType!, "{MemberType}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateGroupMembershipCommand = async (
  input: CreateGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberName", () => input.MemberName!, "{MemberName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupName", () => input.GroupName!, "{GroupName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateIAMPolicyAssignmentCommand = async (
  input: CreateIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AssignmentName != null && { AssignmentName: input.AssignmentName }),
    ...(input.AssignmentStatus != null && { AssignmentStatus: input.AssignmentStatus }),
    ...(input.Identities != null && { Identities: serializeAws_restJson1IdentityMap(input.Identities, context) }),
    ...(input.PolicyArn != null && { PolicyArn: input.PolicyArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateIngestionCommand = async (
  input: CreateIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "IngestionId", () => input.IngestionId!, "{IngestionId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.IngestionType != null && { IngestionType: input.IngestionType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateNamespaceCommand = async (
  input: CreateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityStore != null && { IdentityStore: input.IdentityStore }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
    }),
    ...(input.SourceEntity != null && {
      SourceEntity: serializeAws_restJson1TemplateSourceEntity(input.SourceEntity, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VersionDescription != null && { VersionDescription: input.VersionDescription }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateTemplateAliasCommand = async (
  input: CreateTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.TemplateVersionNumber != null && { TemplateVersionNumber: input.TemplateVersionNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateThemeCommand = async (
  input: CreateThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/themes/{ThemeId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BaseThemeId != null && { BaseThemeId: input.BaseThemeId }),
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1ThemeConfiguration(input.Configuration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VersionDescription != null && { VersionDescription: input.VersionDescription }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateThemeAliasCommand = async (
  input: CreateThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ThemeVersionNumber != null && { ThemeVersionNumber: input.ThemeVersionNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAccountCustomizationCommand = async (
  input: DeleteAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/customizations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    namespace: [, input.Namespace!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteAccountSubscriptionCommand = async (
  input: DeleteAccountSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/{AwsAccountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAnalysisCommand = async (
  input: DeleteAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  const query: any = map({
    "recovery-window-in-days": [
      () => input.RecoveryWindowInDays !== void 0,
      () => input.RecoveryWindowInDays!.toString(),
    ],
    "force-delete-without-recovery": [
      () => input.ForceDeleteWithoutRecovery !== void 0,
      () => input.ForceDeleteWithoutRecovery!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteDashboardCommand = async (
  input: DeleteDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    "version-number": [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteDataSetCommand = async (
  input: DeleteDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DataSourceId",
    () => input.DataSourceId!,
    "{DataSourceId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFolderCommand = async (
  input: DeleteFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFolderMembershipCommand = async (
  input: DeleteFolderMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberId", () => input.MemberId!, "{MemberId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberType", () => input.MemberType!, "{MemberType}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupName", () => input.GroupName!, "{GroupName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteGroupMembershipCommand = async (
  input: DeleteGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberName", () => input.MemberName!, "{MemberName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupName", () => input.GroupName!, "{GroupName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteIAMPolicyAssignmentCommand = async (
  input: DeleteIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssignmentName",
    () => input.AssignmentName!,
    "{AssignmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteTemplateCommand = async (
  input: DeleteTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    "version-number": [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteTemplateAliasCommand = async (
  input: DeleteTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteThemeCommand = async (
  input: DeleteThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/themes/{ThemeId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    "version-number": [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteThemeAliasCommand = async (
  input: DeleteThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserName", () => input.UserName!, "{UserName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUserByPrincipalIdCommand = async (
  input: DeleteUserByPrincipalIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PrincipalId", () => input.PrincipalId!, "{PrincipalId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAccountCustomizationCommand = async (
  input: DescribeAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/customizations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    namespace: [, input.Namespace!],
    resolved: [() => input.Resolved !== void 0, () => input.Resolved!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeAccountSettingsCommand = async (
  input: DescribeAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAccountSubscriptionCommand = async (
  input: DescribeAccountSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/{AwsAccountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAnalysisCommand = async (
  input: DescribeAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAnalysisPermissionsCommand = async (
  input: DescribeAnalysisPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeDashboardCommand = async (
  input: DescribeDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    "version-number": [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
    "alias-name": [, input.AliasName!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeDashboardPermissionsCommand = async (
  input: DescribeDashboardPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeDataSetCommand = async (
  input: DescribeDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeDataSetPermissionsCommand = async (
  input: DescribeDataSetPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeDataSourceCommand = async (
  input: DescribeDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DataSourceId",
    () => input.DataSourceId!,
    "{DataSourceId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeDataSourcePermissionsCommand = async (
  input: DescribeDataSourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DataSourceId",
    () => input.DataSourceId!,
    "{DataSourceId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeFolderCommand = async (
  input: DescribeFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeFolderPermissionsCommand = async (
  input: DescribeFolderPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeFolderResolvedPermissionsCommand = async (
  input: DescribeFolderResolvedPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}/resolved-permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupName", () => input.GroupName!, "{GroupName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeGroupMembershipCommand = async (
  input: DescribeGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberName", () => input.MemberName!, "{MemberName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupName", () => input.GroupName!, "{GroupName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeIAMPolicyAssignmentCommand = async (
  input: DescribeIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssignmentName",
    () => input.AssignmentName!,
    "{AssignmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeIngestionCommand = async (
  input: DescribeIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "IngestionId", () => input.IngestionId!, "{IngestionId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeIpRestrictionCommand = async (
  input: DescribeIpRestrictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/ip-restriction";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeNamespaceCommand = async (
  input: DescribeNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeTemplateCommand = async (
  input: DescribeTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    "version-number": [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
    "alias-name": [, input.AliasName!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeTemplateAliasCommand = async (
  input: DescribeTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeTemplatePermissionsCommand = async (
  input: DescribeTemplatePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeThemeCommand = async (
  input: DescribeThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/themes/{ThemeId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    "version-number": [() => input.VersionNumber !== void 0, () => input.VersionNumber!.toString()],
    "alias-name": [, input.AliasName!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeThemeAliasCommand = async (
  input: DescribeThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeThemePermissionsCommand = async (
  input: DescribeThemePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserName", () => input.UserName!, "{UserName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand = async (
  input: GenerateEmbedUrlForAnonymousUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/embed-url/anonymous-user";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedDomains != null && {
      AllowedDomains: serializeAws_restJson1StringList(input.AllowedDomains, context),
    }),
    ...(input.AuthorizedResourceArns != null && {
      AuthorizedResourceArns: serializeAws_restJson1ArnList(input.AuthorizedResourceArns, context),
    }),
    ...(input.ExperienceConfiguration != null && {
      ExperienceConfiguration: serializeAws_restJson1AnonymousUserEmbeddingExperienceConfiguration(
        input.ExperienceConfiguration,
        context
      ),
    }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.SessionLifetimeInMinutes != null && { SessionLifetimeInMinutes: input.SessionLifetimeInMinutes }),
    ...(input.SessionTags != null && { SessionTags: serializeAws_restJson1SessionTagList(input.SessionTags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand = async (
  input: GenerateEmbedUrlForRegisteredUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/embed-url/registered-user";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedDomains != null && {
      AllowedDomains: serializeAws_restJson1StringList(input.AllowedDomains, context),
    }),
    ...(input.ExperienceConfiguration != null && {
      ExperienceConfiguration: serializeAws_restJson1RegisteredUserEmbeddingExperienceConfiguration(
        input.ExperienceConfiguration,
        context
      ),
    }),
    ...(input.SessionLifetimeInMinutes != null && { SessionLifetimeInMinutes: input.SessionLifetimeInMinutes }),
    ...(input.UserArn != null && { UserArn: input.UserArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDashboardEmbedUrlCommand = async (
  input: GetDashboardEmbedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    "creds-type": [, input.IdentityType!],
    "session-lifetime": [
      () => input.SessionLifetimeInMinutes !== void 0,
      () => input.SessionLifetimeInMinutes!.toString(),
    ],
    "undo-redo-disabled": [() => input.UndoRedoDisabled !== void 0, () => input.UndoRedoDisabled!.toString()],
    "reset-disabled": [() => input.ResetDisabled !== void 0, () => input.ResetDisabled!.toString()],
    "state-persistence-enabled": [
      () => input.StatePersistenceEnabled !== void 0,
      () => input.StatePersistenceEnabled!.toString(),
    ],
    "user-arn": [, input.UserArn!],
    namespace: [, input.Namespace!],
    "additional-dashboard-ids": [
      () => input.AdditionalDashboardIds !== void 0,
      () => (input.AdditionalDashboardIds! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSessionEmbedUrlCommand = async (
  input: GetSessionEmbedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/session-embed-url";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "entry-point": [, input.EntryPoint!],
    "session-lifetime": [
      () => input.SessionLifetimeInMinutes !== void 0,
      () => input.SessionLifetimeInMinutes!.toString(),
    ],
    "user-arn": [, input.UserArn!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAnalysesCommand = async (
  input: ListAnalysesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/analyses";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/dashboards";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDashboardVersionsCommand = async (
  input: ListDashboardVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDataSetsCommand = async (
  input: ListDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/data-sets";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/data-sources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFolderMembersCommand = async (
  input: ListFolderMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}/members";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFoldersCommand = async (
  input: ListFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/folders";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListGroupMembershipsCommand = async (
  input: ListGroupMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupName", () => input.GroupName!, "{GroupName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListIAMPolicyAssignmentsCommand = async (
  input: ListIAMPolicyAssignmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.AssignmentStatus != null && { AssignmentStatus: input.AssignmentStatus }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = async (
  input: ListIAMPolicyAssignmentsForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "UserName", () => input.UserName!, "{UserName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListIngestionsCommand = async (
  input: ListIngestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions";
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/namespaces";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{ResourceArn}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListTemplateAliasesCommand = async (
  input: ListTemplateAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-result": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/templates";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-result": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTemplateVersionsCommand = async (
  input: ListTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListThemeAliasesCommand = async (
  input: ListThemeAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-result": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListThemesCommand = async (
  input: ListThemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/themes";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    type: [, input.Type!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListThemeVersionsCommand = async (
  input: ListThemeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListUserGroupsCommand = async (
  input: ListUserGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserName", () => input.UserName!, "{UserName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/users";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RegisterUserCommand = async (
  input: RegisterUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/users";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CustomFederationProviderUrl != null && {
      CustomFederationProviderUrl: input.CustomFederationProviderUrl,
    }),
    ...(input.CustomPermissionsName != null && { CustomPermissionsName: input.CustomPermissionsName }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.ExternalLoginFederationProviderType != null && {
      ExternalLoginFederationProviderType: input.ExternalLoginFederationProviderType,
    }),
    ...(input.ExternalLoginId != null && { ExternalLoginId: input.ExternalLoginId }),
    ...(input.IamArn != null && { IamArn: input.IamArn }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.SessionName != null && { SessionName: input.SessionName }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserRole != null && { UserRole: input.UserRole }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RestoreAnalysisCommand = async (
  input: RestoreAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/restore/analyses/{AnalysisId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchAnalysesCommand = async (
  input: SearchAnalysesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/search/analyses";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1AnalysisSearchFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchDashboardsCommand = async (
  input: SearchDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/search/dashboards";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1DashboardSearchFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchDataSetsCommand = async (
  input: SearchDataSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/search/data-sets";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1DataSetSearchFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchDataSourcesCommand = async (
  input: SearchDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/search/data-sources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1DataSourceSearchFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchFoldersCommand = async (
  input: SearchFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/search/folders";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1FolderSearchFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SearchGroupsCommand = async (
  input: SearchGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups-search";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1GroupSearchFilterList(input.Filters, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{ResourceArn}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{ResourceArn}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    keys: [() => input.TagKeys !== void 0, () => (input.TagKeys! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAccountCustomizationCommand = async (
  input: UpdateAccountCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/customizations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  const query: any = map({
    namespace: [, input.Namespace!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.AccountCustomization != null && {
      AccountCustomization: serializeAws_restJson1AccountCustomization(input.AccountCustomization, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultNamespace != null && { DefaultNamespace: input.DefaultNamespace }),
    ...(input.NotificationEmail != null && { NotificationEmail: input.NotificationEmail }),
    ...(input.TerminationProtectionEnabled != null && {
      TerminationProtectionEnabled: input.TerminationProtectionEnabled,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateAnalysisCommand = async (
  input: UpdateAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.SourceEntity != null && {
      SourceEntity: serializeAws_restJson1AnalysisSourceEntity(input.SourceEntity, context),
    }),
    ...(input.ThemeArn != null && { ThemeArn: input.ThemeArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateAnalysisPermissionsCommand = async (
  input: UpdateAnalysisPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "AnalysisId", () => input.AnalysisId!, "{AnalysisId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions != null && {
      GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
    }),
    ...(input.RevokePermissions != null && {
      RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDashboardCommand = async (
  input: UpdateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DashboardPublishOptions != null && {
      DashboardPublishOptions: serializeAws_restJson1DashboardPublishOptions(input.DashboardPublishOptions, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.SourceEntity != null && {
      SourceEntity: serializeAws_restJson1DashboardSourceEntity(input.SourceEntity, context),
    }),
    ...(input.ThemeArn != null && { ThemeArn: input.ThemeArn }),
    ...(input.VersionDescription != null && { VersionDescription: input.VersionDescription }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDashboardPermissionsCommand = async (
  input: UpdateDashboardPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.GrantLinkPermissions != null && {
      GrantLinkPermissions: serializeAws_restJson1UpdateLinkPermissionList(input.GrantLinkPermissions, context),
    }),
    ...(input.GrantPermissions != null && {
      GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
    }),
    ...(input.RevokeLinkPermissions != null && {
      RevokeLinkPermissions: serializeAws_restJson1UpdateLinkPermissionList(input.RevokeLinkPermissions, context),
    }),
    ...(input.RevokePermissions != null && {
      RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDashboardPublishedVersionCommand = async (
  input: UpdateDashboardPublishedVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DashboardId", () => input.DashboardId!, "{DashboardId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDataSetCommand = async (
  input: UpdateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ColumnGroups != null && {
      ColumnGroups: serializeAws_restJson1ColumnGroupList(input.ColumnGroups, context),
    }),
    ...(input.ColumnLevelPermissionRules != null && {
      ColumnLevelPermissionRules: serializeAws_restJson1ColumnLevelPermissionRuleList(
        input.ColumnLevelPermissionRules,
        context
      ),
    }),
    ...(input.DataSetUsageConfiguration != null && {
      DataSetUsageConfiguration: serializeAws_restJson1DataSetUsageConfiguration(
        input.DataSetUsageConfiguration,
        context
      ),
    }),
    ...(input.FieldFolders != null && {
      FieldFolders: serializeAws_restJson1FieldFolderMap(input.FieldFolders, context),
    }),
    ...(input.ImportMode != null && { ImportMode: input.ImportMode }),
    ...(input.LogicalTableMap != null && {
      LogicalTableMap: serializeAws_restJson1LogicalTableMap(input.LogicalTableMap, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PhysicalTableMap != null && {
      PhysicalTableMap: serializeAws_restJson1PhysicalTableMap(input.PhysicalTableMap, context),
    }),
    ...(input.RowLevelPermissionDataSet != null && {
      RowLevelPermissionDataSet: serializeAws_restJson1RowLevelPermissionDataSet(
        input.RowLevelPermissionDataSet,
        context
      ),
    }),
    ...(input.RowLevelPermissionTagConfiguration != null && {
      RowLevelPermissionTagConfiguration: serializeAws_restJson1RowLevelPermissionTagConfiguration(
        input.RowLevelPermissionTagConfiguration,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDataSetPermissionsCommand = async (
  input: UpdateDataSetPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DataSetId", () => input.DataSetId!, "{DataSetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions != null && {
      GrantPermissions: serializeAws_restJson1ResourcePermissionList(input.GrantPermissions, context),
    }),
    ...(input.RevokePermissions != null && {
      RevokePermissions: serializeAws_restJson1ResourcePermissionList(input.RevokePermissions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DataSourceId",
    () => input.DataSourceId!,
    "{DataSourceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Credentials != null && {
      Credentials: serializeAws_restJson1DataSourceCredentials(input.Credentials, context),
    }),
    ...(input.DataSourceParameters != null && {
      DataSourceParameters: serializeAws_restJson1DataSourceParameters(input.DataSourceParameters, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SslProperties != null && {
      SslProperties: serializeAws_restJson1SslProperties(input.SslProperties, context),
    }),
    ...(input.VpcConnectionProperties != null && {
      VpcConnectionProperties: serializeAws_restJson1VpcConnectionProperties(input.VpcConnectionProperties, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDataSourcePermissionsCommand = async (
  input: UpdateDataSourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DataSourceId",
    () => input.DataSourceId!,
    "{DataSourceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions != null && {
      GrantPermissions: serializeAws_restJson1ResourcePermissionList(input.GrantPermissions, context),
    }),
    ...(input.RevokePermissions != null && {
      RevokePermissions: serializeAws_restJson1ResourcePermissionList(input.RevokePermissions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFolderCommand = async (
  input: UpdateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFolderPermissionsCommand = async (
  input: UpdateFolderPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/folders/{FolderId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions != null && {
      GrantPermissions: serializeAws_restJson1ResourcePermissionList(input.GrantPermissions, context),
    }),
    ...(input.RevokePermissions != null && {
      RevokePermissions: serializeAws_restJson1ResourcePermissionList(input.RevokePermissions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GroupName", () => input.GroupName!, "{GroupName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateIAMPolicyAssignmentCommand = async (
  input: UpdateIAMPolicyAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AssignmentName",
    () => input.AssignmentName!,
    "{AssignmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AssignmentStatus != null && { AssignmentStatus: input.AssignmentStatus }),
    ...(input.Identities != null && { Identities: serializeAws_restJson1IdentityMap(input.Identities, context) }),
    ...(input.PolicyArn != null && { PolicyArn: input.PolicyArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateIpRestrictionCommand = async (
  input: UpdateIpRestrictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/ip-restriction";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.IpRestrictionRuleMap != null && {
      IpRestrictionRuleMap: serializeAws_restJson1IpRestrictionRuleMap(input.IpRestrictionRuleMap, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdatePublicSharingSettingsCommand = async (
  input: UpdatePublicSharingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/public-sharing-settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.PublicSharingEnabled != null && { PublicSharingEnabled: input.PublicSharingEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceEntity != null && {
      SourceEntity: serializeAws_restJson1TemplateSourceEntity(input.SourceEntity, context),
    }),
    ...(input.VersionDescription != null && { VersionDescription: input.VersionDescription }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateTemplateAliasCommand = async (
  input: UpdateTemplateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.TemplateVersionNumber != null && { TemplateVersionNumber: input.TemplateVersionNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateTemplatePermissionsCommand = async (
  input: UpdateTemplatePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions != null && {
      GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
    }),
    ...(input.RevokePermissions != null && {
      RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateThemeCommand = async (
  input: UpdateThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AwsAccountId}/themes/{ThemeId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BaseThemeId != null && { BaseThemeId: input.BaseThemeId }),
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1ThemeConfiguration(input.Configuration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VersionDescription != null && { VersionDescription: input.VersionDescription }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateThemeAliasCommand = async (
  input: UpdateThemeAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AliasName", () => input.AliasName!, "{AliasName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ThemeVersionNumber != null && { ThemeVersionNumber: input.ThemeVersionNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateThemePermissionsCommand = async (
  input: UpdateThemePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ThemeId", () => input.ThemeId!, "{ThemeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions != null && {
      GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
    }),
    ...(input.RevokePermissions != null && {
      RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserName", () => input.UserName!, "{UserName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AwsAccountId",
    () => input.AwsAccountId!,
    "{AwsAccountId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Namespace", () => input.Namespace!, "{Namespace}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CustomFederationProviderUrl != null && {
      CustomFederationProviderUrl: input.CustomFederationProviderUrl,
    }),
    ...(input.CustomPermissionsName != null && { CustomPermissionsName: input.CustomPermissionsName }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.ExternalLoginFederationProviderType != null && {
      ExternalLoginFederationProviderType: input.ExternalLoginFederationProviderType,
    }),
    ...(input.ExternalLoginId != null && { ExternalLoginId: input.ExternalLoginId }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.UnapplyCustomPermissions != null && { UnapplyCustomPermissions: input.UnapplyCustomPermissions }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CancelIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.IngestionId != null) {
    contents.IngestionId = __expectString(data.IngestionId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CancelIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccountCustomizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountCustomization != null) {
    contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AwsAccountId != null) {
    contents.AwsAccountId = __expectString(data.AwsAccountId);
  }
  if (data.Namespace != null) {
    contents.Namespace = __expectString(data.Namespace);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAccountSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccountSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.SignupResponse != null) {
    contents.SignupResponse = deserializeAws_restJson1SignupResponse(data.SignupResponse, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateAccountSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisId != null) {
    contents.AnalysisId = __expectString(data.AnalysisId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.DashboardId != null) {
    contents.DashboardId = __expectString(data.DashboardId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.VersionArn != null) {
    contents.VersionArn = __expectString(data.VersionArn);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.IngestionArn != null) {
    contents.IngestionArn = __expectString(data.IngestionArn);
  }
  if (data.IngestionId != null) {
    contents.IngestionId = __expectString(data.IngestionId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.DataSourceId != null) {
    contents.DataSourceId = __expectString(data.DataSourceId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.FolderId != null) {
    contents.FolderId = __expectString(data.FolderId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateFolderMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFolderMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FolderMember != null) {
    contents.FolderMember = deserializeAws_restJson1FolderMember(data.FolderMember, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.Status != null) {
    contents.Status = __expectInt32(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1CreateFolderMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupMember != null) {
    contents.GroupMember = deserializeAws_restJson1GroupMember(data.GroupMember, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssignmentId != null) {
    contents.AssignmentId = __expectString(data.AssignmentId);
  }
  if (data.AssignmentName != null) {
    contents.AssignmentName = __expectString(data.AssignmentName);
  }
  if (data.AssignmentStatus != null) {
    contents.AssignmentStatus = __expectString(data.AssignmentStatus);
  }
  if (data.Identities != null) {
    contents.Identities = deserializeAws_restJson1IdentityMap(data.Identities, context);
  }
  if (data.PolicyArn != null) {
    contents.PolicyArn = __expectString(data.PolicyArn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      throw await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.IngestionId != null) {
    contents.IngestionId = __expectString(data.IngestionId);
  }
  if (data.IngestionStatus != null) {
    contents.IngestionStatus = __expectString(data.IngestionStatus);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNamespaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CapacityRegion != null) {
    contents.CapacityRegion = __expectString(data.CapacityRegion);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.IdentityStore != null) {
    contents.IdentityStore = __expectString(data.IdentityStore);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  if (data.VersionArn != null) {
    contents.VersionArn = __expectString(data.VersionArn);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTemplateAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateAlias != null) {
    contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeId != null) {
    contents.ThemeId = __expectString(data.ThemeId);
  }
  if (data.VersionArn != null) {
    contents.VersionArn = __expectString(data.VersionArn);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateThemeAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeAlias != null) {
    contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1CreateThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccountCustomizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAccountSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccountSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteAccountSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisId != null) {
    contents.AnalysisId = __expectString(data.AnalysisId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.DeletionTime != null) {
    contents.DeletionTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.DeletionTime)));
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.DashboardId != null) {
    contents.DashboardId = __expectString(data.DashboardId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.DataSourceId != null) {
    contents.DataSourceId = __expectString(data.DataSourceId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.FolderId != null) {
    contents.FolderId = __expectString(data.FolderId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteFolderMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFolderMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.Status != null) {
    contents.Status = __expectInt32(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1DeleteFolderMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssignmentName != null) {
    contents.AssignmentName = __expectString(data.AssignmentName);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      throw await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNamespaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTemplateAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasName != null) {
    contents.AliasName = __expectString(data.AliasName);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeId != null) {
    contents.ThemeId = __expectString(data.ThemeId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteThemeAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasName != null) {
    contents.AliasName = __expectString(data.AliasName);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeId != null) {
    contents.ThemeId = __expectString(data.ThemeId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUserByPrincipalIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserByPrincipalIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserByPrincipalIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DeleteUserByPrincipalIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserByPrincipalIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountCustomizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountCustomization != null) {
    contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AwsAccountId != null) {
    contents.AwsAccountId = __expectString(data.AwsAccountId);
  }
  if (data.Namespace != null) {
    contents.Namespace = __expectString(data.Namespace);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountSettings != null) {
    contents.AccountSettings = deserializeAws_restJson1AccountSettings(data.AccountSettings, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAccountSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountInfo != null) {
    contents.AccountInfo = deserializeAws_restJson1AccountInfo(data.AccountInfo, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeAccountSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Analysis != null) {
    contents.Analysis = deserializeAws_restJson1Analysis(data.Analysis, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAnalysisPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnalysisPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisArn != null) {
    contents.AnalysisArn = __expectString(data.AnalysisArn);
  }
  if (data.AnalysisId != null) {
    contents.AnalysisId = __expectString(data.AnalysisId);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeAnalysisPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Dashboard != null) {
    contents.Dashboard = deserializeAws_restJson1Dashboard(data.Dashboard, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeDashboardPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDashboardPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DashboardArn != null) {
    contents.DashboardArn = __expectString(data.DashboardArn);
  }
  if (data.DashboardId != null) {
    contents.DashboardId = __expectString(data.DashboardId);
  }
  if (data.LinkSharingConfiguration != null) {
    contents.LinkSharingConfiguration = deserializeAws_restJson1LinkSharingConfiguration(
      data.LinkSharingConfiguration,
      context
    );
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeDashboardPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSet != null) {
    contents.DataSet = deserializeAws_restJson1DataSet(data.DataSet, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeDataSetPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSetPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSetArn != null) {
    contents.DataSetArn = __expectString(data.DataSetArn);
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeDataSetPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSource != null) {
    contents.DataSource = deserializeAws_restJson1DataSource(data.DataSource, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeDataSourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSourceArn != null) {
    contents.DataSourceArn = __expectString(data.DataSourceArn);
  }
  if (data.DataSourceId != null) {
    contents.DataSourceId = __expectString(data.DataSourceId);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeDataSourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Folder != null) {
    contents.Folder = deserializeAws_restJson1Folder(data.Folder, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeFolderPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFolderPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.FolderId != null) {
    contents.FolderId = __expectString(data.FolderId);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeFolderPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeFolderResolvedPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderResolvedPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFolderResolvedPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.FolderId != null) {
    contents.FolderId = __expectString(data.FolderId);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeFolderResolvedPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderResolvedPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGroupMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupMember != null) {
    contents.GroupMember = deserializeAws_restJson1GroupMember(data.GroupMember, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IAMPolicyAssignment != null) {
    contents.IAMPolicyAssignment = deserializeAws_restJson1IAMPolicyAssignment(data.IAMPolicyAssignment, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Ingestion != null) {
    contents.Ingestion = deserializeAws_restJson1Ingestion(data.Ingestion, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeIpRestrictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpRestrictionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIpRestrictionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AwsAccountId != null) {
    contents.AwsAccountId = __expectString(data.AwsAccountId);
  }
  if (data.Enabled != null) {
    contents.Enabled = __expectBoolean(data.Enabled);
  }
  if (data.IpRestrictionRuleMap != null) {
    contents.IpRestrictionRuleMap = deserializeAws_restJson1IpRestrictionRuleMap(data.IpRestrictionRuleMap, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeIpRestrictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpRestrictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNamespaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Namespace != null) {
    contents.Namespace = deserializeAws_restJson1NamespaceInfoV2(data.Namespace, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.Template != null) {
    contents.Template = deserializeAws_restJson1Template(data.Template, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTemplateAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateAlias != null) {
    contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeTemplatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTemplatePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateArn != null) {
    contents.TemplateArn = __expectString(data.TemplateArn);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeTemplatePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplatePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.Theme != null) {
    contents.Theme = deserializeAws_restJson1Theme(data.Theme, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeThemeAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeAlias != null) {
    contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeThemePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeThemePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeArn != null) {
    contents.ThemeArn = __expectString(data.ThemeArn);
  }
  if (data.ThemeId != null) {
    contents.ThemeId = __expectString(data.ThemeId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeThemePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnonymousUserArn != null) {
    contents.AnonymousUserArn = __expectString(data.AnonymousUserArn);
  }
  if (data.EmbedUrl != null) {
    contents.EmbedUrl = __expectString(data.EmbedUrl);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1GenerateEmbedUrlForAnonymousUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateEmbedUrlForAnonymousUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "SessionLifetimeInMinutesInvalidException":
    case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
      throw await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedPricingPlanException":
    case "com.amazonaws.quicksight#UnsupportedPricingPlanException":
      throw await deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmbedUrl != null) {
    contents.EmbedUrl = __expectString(data.EmbedUrl);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "QuickSightUserNotFoundException":
    case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
      throw await deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "SessionLifetimeInMinutesInvalidException":
    case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
      throw await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedPricingPlanException":
    case "com.amazonaws.quicksight#UnsupportedPricingPlanException":
      throw await deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetDashboardEmbedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardEmbedUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDashboardEmbedUrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmbedUrl != null) {
    contents.EmbedUrl = __expectString(data.EmbedUrl);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1GetDashboardEmbedUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardEmbedUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DomainNotWhitelistedException":
    case "com.amazonaws.quicksight#DomainNotWhitelistedException":
      throw await deserializeAws_restJson1DomainNotWhitelistedExceptionResponse(parsedOutput, context);
    case "IdentityTypeNotSupportedException":
    case "com.amazonaws.quicksight#IdentityTypeNotSupportedException":
      throw await deserializeAws_restJson1IdentityTypeNotSupportedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "QuickSightUserNotFoundException":
    case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
      throw await deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "SessionLifetimeInMinutesInvalidException":
    case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
      throw await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedPricingPlanException":
    case "com.amazonaws.quicksight#UnsupportedPricingPlanException":
      throw await deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSessionEmbedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionEmbedUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSessionEmbedUrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmbedUrl != null) {
    contents.EmbedUrl = __expectString(data.EmbedUrl);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1GetSessionEmbedUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionEmbedUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "QuickSightUserNotFoundException":
    case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
      throw await deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "SessionLifetimeInMinutesInvalidException":
    case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
      throw await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAnalysesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalysesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisSummaryList != null) {
    contents.AnalysisSummaryList = deserializeAws_restJson1AnalysisSummaryList(data.AnalysisSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListAnalysesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDashboardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DashboardSummaryList != null) {
    contents.DashboardSummaryList = deserializeAws_restJson1DashboardSummaryList(data.DashboardSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDashboardVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDashboardVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DashboardVersionSummaryList != null) {
    contents.DashboardVersionSummaryList = deserializeAws_restJson1DashboardVersionSummaryList(
      data.DashboardVersionSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListDashboardVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSetSummaries != null) {
    contents.DataSetSummaries = deserializeAws_restJson1DataSetSummaryList(data.DataSetSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListDataSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSources != null) {
    contents.DataSources = deserializeAws_restJson1DataSourceList(data.DataSources, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListFolderMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFolderMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFolderMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FolderMemberList != null) {
    contents.FolderMemberList = deserializeAws_restJson1FolderMemberList(data.FolderMemberList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListFolderMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFolderMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFoldersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FolderSummaryList != null) {
    contents.FolderSummaryList = deserializeAws_restJson1FolderSummaryList(data.FolderSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListFoldersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFoldersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListGroupMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupMembershipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupMemberList != null) {
    contents.GroupMemberList = deserializeAws_restJson1GroupMemberList(data.GroupMemberList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListGroupMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupList != null) {
    contents.GroupList = deserializeAws_restJson1GroupList(data.GroupList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListIAMPolicyAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIAMPolicyAssignmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IAMPolicyAssignments != null) {
    contents.IAMPolicyAssignments = deserializeAws_restJson1IAMPolicyAssignmentSummaryList(
      data.IAMPolicyAssignments,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListIAMPolicyAssignmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActiveAssignments != null) {
    contents.ActiveAssignments = deserializeAws_restJson1ActiveIAMPolicyAssignmentList(data.ActiveAssignments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      throw await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListIngestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIngestionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Ingestions != null) {
    contents.Ingestions = deserializeAws_restJson1Ingestions(data.Ingestions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListIngestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNamespacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Namespaces != null) {
    contents.Namespaces = deserializeAws_restJson1Namespaces(data.Namespaces, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTemplateAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateAliasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateAliasList != null) {
    contents.TemplateAliasList = deserializeAws_restJson1TemplateAliasList(data.TemplateAliasList, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListTemplateAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateSummaryList != null) {
    contents.TemplateSummaryList = deserializeAws_restJson1TemplateSummaryList(data.TemplateSummaryList, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateVersionSummaryList != null) {
    contents.TemplateVersionSummaryList = deserializeAws_restJson1TemplateVersionSummaryList(
      data.TemplateVersionSummaryList,
      context
    );
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListTemplateVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListThemeAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThemeAliasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeAliasList != null) {
    contents.ThemeAliasList = deserializeAws_restJson1ThemeAliasList(data.ThemeAliasList, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListThemeAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListThemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThemesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeSummaryList != null) {
    contents.ThemeSummaryList = deserializeAws_restJson1ThemeSummaryList(data.ThemeSummaryList, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListThemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListThemeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThemeVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeVersionSummaryList != null) {
    contents.ThemeVersionSummaryList = deserializeAws_restJson1ThemeVersionSummaryList(
      data.ThemeVersionSummaryList,
      context
    );
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListThemeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListUserGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUserGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupList != null) {
    contents.GroupList = deserializeAws_restJson1GroupList(data.GroupList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListUserGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.UserList != null) {
    contents.UserList = deserializeAws_restJson1UserList(data.UserList, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RegisterUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  if (data.UserInvitationUrl != null) {
    contents.UserInvitationUrl = __expectString(data.UserInvitationUrl);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1RegisterUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RestoreAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestoreAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisId != null) {
    contents.AnalysisId = __expectString(data.AnalysisId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1RestoreAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchAnalysesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAnalysesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchAnalysesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisSummaryList != null) {
    contents.AnalysisSummaryList = deserializeAws_restJson1AnalysisSummaryList(data.AnalysisSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1SearchAnalysesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAnalysesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchDashboardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DashboardSummaryList != null) {
    contents.DashboardSummaryList = deserializeAws_restJson1DashboardSummaryList(data.DashboardSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1SearchDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchDataSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSetSummaries != null) {
    contents.DataSetSummaries = deserializeAws_restJson1DataSetSummaryList(data.DataSetSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1SearchDataSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDataSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchDataSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSourceSummaries != null) {
    contents.DataSourceSummaries = deserializeAws_restJson1DataSourceSummaryList(data.DataSourceSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1SearchDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchFoldersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FolderSummaryList != null) {
    contents.FolderSummaryList = deserializeAws_restJson1FolderSummaryList(data.FolderSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1SearchFoldersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFoldersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.quicksight#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupList != null) {
    contents.GroupList = deserializeAws_restJson1GroupList(data.GroupList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1SearchGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountCustomizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountCustomization != null) {
    contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AwsAccountId != null) {
    contents.AwsAccountId = __expectString(data.AwsAccountId);
  }
  if (data.Namespace != null) {
    contents.Namespace = __expectString(data.Namespace);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisId != null) {
    contents.AnalysisId = __expectString(data.AnalysisId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.UpdateStatus != null) {
    contents.UpdateStatus = __expectString(data.UpdateStatus);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAnalysisPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAnalysisPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalysisArn != null) {
    contents.AnalysisArn = __expectString(data.AnalysisArn);
  }
  if (data.AnalysisId != null) {
    contents.AnalysisId = __expectString(data.AnalysisId);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateAnalysisPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.DashboardId != null) {
    contents.DashboardId = __expectString(data.DashboardId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.Status != null) {
    contents.Status = __expectInt32(data.Status);
  }
  if (data.VersionArn != null) {
    contents.VersionArn = __expectString(data.VersionArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDashboardPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDashboardPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DashboardArn != null) {
    contents.DashboardArn = __expectString(data.DashboardArn);
  }
  if (data.DashboardId != null) {
    contents.DashboardId = __expectString(data.DashboardId);
  }
  if (data.LinkSharingConfiguration != null) {
    contents.LinkSharingConfiguration = deserializeAws_restJson1LinkSharingConfiguration(
      data.LinkSharingConfiguration,
      context
    );
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateDashboardPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDashboardPublishedVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPublishedVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDashboardPublishedVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DashboardArn != null) {
    contents.DashboardArn = __expectString(data.DashboardArn);
  }
  if (data.DashboardId != null) {
    contents.DashboardId = __expectString(data.DashboardId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateDashboardPublishedVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPublishedVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.IngestionArn != null) {
    contents.IngestionArn = __expectString(data.IngestionArn);
  }
  if (data.IngestionId != null) {
    contents.IngestionId = __expectString(data.IngestionId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDataSetPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSetPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSetArn != null) {
    contents.DataSetArn = __expectString(data.DataSetArn);
  }
  if (data.DataSetId != null) {
    contents.DataSetId = __expectString(data.DataSetId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateDataSetPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.DataSourceId != null) {
    contents.DataSourceId = __expectString(data.DataSourceId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.UpdateStatus != null) {
    contents.UpdateStatus = __expectString(data.UpdateStatus);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateDataSourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataSourceArn != null) {
    contents.DataSourceArn = __expectString(data.DataSourceArn);
  }
  if (data.DataSourceId != null) {
    contents.DataSourceId = __expectString(data.DataSourceId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateDataSourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.FolderId != null) {
    contents.FolderId = __expectString(data.FolderId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFolderPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFolderPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.FolderId != null) {
    contents.FolderId = __expectString(data.FolderId);
  }
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.Status != null) {
    contents.Status = __expectInt32(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFolderPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssignmentId != null) {
    contents.AssignmentId = __expectString(data.AssignmentId);
  }
  if (data.AssignmentName != null) {
    contents.AssignmentName = __expectString(data.AssignmentName);
  }
  if (data.AssignmentStatus != null) {
    contents.AssignmentStatus = __expectString(data.AssignmentStatus);
  }
  if (data.Identities != null) {
    contents.Identities = deserializeAws_restJson1IdentityMap(data.Identities, context);
  }
  if (data.PolicyArn != null) {
    contents.PolicyArn = __expectString(data.PolicyArn);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      throw await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateIpRestrictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIpRestrictionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIpRestrictionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AwsAccountId != null) {
    contents.AwsAccountId = __expectString(data.AwsAccountId);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateIpRestrictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIpRestrictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdatePublicSharingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicSharingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePublicSharingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdatePublicSharingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicSharingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedPricingPlanException":
    case "com.amazonaws.quicksight#UnsupportedPricingPlanException":
      throw await deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  if (data.VersionArn != null) {
    contents.VersionArn = __expectString(data.VersionArn);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplateAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateAlias != null) {
    contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateTemplatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplatePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.TemplateArn != null) {
    contents.TemplateArn = __expectString(data.TemplateArn);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateTemplatePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplatePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationStatus != null) {
    contents.CreationStatus = __expectString(data.CreationStatus);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeId != null) {
    contents.ThemeId = __expectString(data.ThemeId);
  }
  if (data.VersionArn != null) {
    contents.VersionArn = __expectString(data.VersionArn);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThemeAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeAlias != null) {
    contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      throw await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateThemePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThemePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Permissions != null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ThemeArn != null) {
    contents.ThemeArn = __expectString(data.ThemeArn);
  }
  if (data.ThemeId != null) {
    contents.ThemeId = __expectString(data.ThemeId);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateThemePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      throw await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  map(contents, {
    Status: [, output.statusCode],
  });
  return contents;
};

const deserializeAws_restJson1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      throw await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      throw await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConcurrentUpdatingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentUpdatingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ConcurrentUpdatingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DomainNotWhitelistedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainNotWhitelistedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new DomainNotWhitelistedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IdentityTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdentityTypeNotSupportedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new IdentityTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PreconditionNotMetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new PreconditionNotMetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QuickSightUserNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new QuickSightUserNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionLifetimeInMinutesInvalidException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new SessionLifetimeInMinutesInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPricingPlanException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new UnsupportedPricingPlanException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedUserEditionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedUserEditionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new UnsupportedUserEditionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AccountCustomization = (input: AccountCustomization, context: __SerdeContext): any => {
  return {
    ...(input.DefaultEmailCustomizationTemplate != null && {
      DefaultEmailCustomizationTemplate: input.DefaultEmailCustomizationTemplate,
    }),
    ...(input.DefaultTheme != null && { DefaultTheme: input.DefaultTheme }),
  };
};

const serializeAws_restJson1ActionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AdHocFilteringOption = (input: AdHocFilteringOption, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityStatus != null && { AvailabilityStatus: input.AvailabilityStatus }),
  };
};

const serializeAws_restJson1AmazonElasticsearchParameters = (
  input: AmazonElasticsearchParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
  };
};

const serializeAws_restJson1AmazonOpenSearchParameters = (
  input: AmazonOpenSearchParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
  };
};

const serializeAws_restJson1AnalysisSearchFilter = (input: AnalysisSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AnalysisSearchFilterList = (
  input: AnalysisSearchFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AnalysisSearchFilter(entry, context);
    });
};

const serializeAws_restJson1AnalysisSourceEntity = (input: AnalysisSourceEntity, context: __SerdeContext): any => {
  return {
    ...(input.SourceTemplate != null && {
      SourceTemplate: serializeAws_restJson1AnalysisSourceTemplate(input.SourceTemplate, context),
    }),
  };
};

const serializeAws_restJson1AnalysisSourceTemplate = (input: AnalysisSourceTemplate, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.DataSetReferences != null && {
      DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
    }),
  };
};

const serializeAws_restJson1AnonymousUserDashboardEmbeddingConfiguration = (
  input: AnonymousUserDashboardEmbeddingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialDashboardId != null && { InitialDashboardId: input.InitialDashboardId }),
  };
};

const serializeAws_restJson1AnonymousUserDashboardVisualEmbeddingConfiguration = (
  input: AnonymousUserDashboardVisualEmbeddingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialDashboardVisualId != null && {
      InitialDashboardVisualId: serializeAws_restJson1DashboardVisualId(input.InitialDashboardVisualId, context),
    }),
  };
};

const serializeAws_restJson1AnonymousUserEmbeddingExperienceConfiguration = (
  input: AnonymousUserEmbeddingExperienceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dashboard != null && {
      Dashboard: serializeAws_restJson1AnonymousUserDashboardEmbeddingConfiguration(input.Dashboard, context),
    }),
    ...(input.DashboardVisual != null && {
      DashboardVisual: serializeAws_restJson1AnonymousUserDashboardVisualEmbeddingConfiguration(
        input.DashboardVisual,
        context
      ),
    }),
    ...(input.QSearchBar != null && {
      QSearchBar: serializeAws_restJson1AnonymousUserQSearchBarEmbeddingConfiguration(input.QSearchBar, context),
    }),
  };
};

const serializeAws_restJson1AnonymousUserQSearchBarEmbeddingConfiguration = (
  input: AnonymousUserQSearchBarEmbeddingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialTopicId != null && { InitialTopicId: input.InitialTopicId }),
  };
};

const serializeAws_restJson1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AthenaParameters = (input: AthenaParameters, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_restJson1AuroraParameters = (input: AuroraParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AuroraPostgreSqlParameters = (
  input: AuroraPostgreSqlParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AwsIotAnalyticsParameters = (
  input: AwsIotAnalyticsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSetName != null && { DataSetName: input.DataSetName }),
  };
};

const serializeAws_restJson1BorderStyle = (input: BorderStyle, context: __SerdeContext): any => {
  return {
    ...(input.Show != null && { Show: input.Show }),
  };
};

const serializeAws_restJson1CalculatedColumn = (input: CalculatedColumn, context: __SerdeContext): any => {
  return {
    ...(input.ColumnId != null && { ColumnId: input.ColumnId }),
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.Expression != null && { Expression: input.Expression }),
  };
};

const serializeAws_restJson1CalculatedColumnList = (input: CalculatedColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CalculatedColumn(entry, context);
    });
};

const serializeAws_restJson1CastColumnTypeOperation = (
  input: CastColumnTypeOperation,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.NewColumnType != null && { NewColumnType: input.NewColumnType }),
  };
};

const serializeAws_restJson1ColorList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ColumnDescription = (input: ColumnDescription, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_restJson1ColumnGroup = (input: ColumnGroup, context: __SerdeContext): any => {
  return {
    ...(input.GeoSpatialColumnGroup != null && {
      GeoSpatialColumnGroup: serializeAws_restJson1GeoSpatialColumnGroup(input.GeoSpatialColumnGroup, context),
    }),
  };
};

const serializeAws_restJson1ColumnGroupList = (input: ColumnGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ColumnGroup(entry, context);
    });
};

const serializeAws_restJson1ColumnLevelPermissionRule = (
  input: ColumnLevelPermissionRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColumnNames != null && { ColumnNames: serializeAws_restJson1ColumnNameList(input.ColumnNames, context) }),
    ...(input.Principals != null && { Principals: serializeAws_restJson1PrincipalList(input.Principals, context) }),
  };
};

const serializeAws_restJson1ColumnLevelPermissionRuleList = (
  input: ColumnLevelPermissionRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ColumnLevelPermissionRule(entry, context);
    });
};

const serializeAws_restJson1ColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ColumnTag = (input: ColumnTag, context: __SerdeContext): any => {
  return {
    ...(input.ColumnDescription != null && {
      ColumnDescription: serializeAws_restJson1ColumnDescription(input.ColumnDescription, context),
    }),
    ...(input.ColumnGeographicRole != null && { ColumnGeographicRole: input.ColumnGeographicRole }),
  };
};

const serializeAws_restJson1ColumnTagList = (input: ColumnTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ColumnTag(entry, context);
    });
};

const serializeAws_restJson1ColumnTagNames = (input: (ColumnTagName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CreateColumnsOperation = (input: CreateColumnsOperation, context: __SerdeContext): any => {
  return {
    ...(input.Columns != null && { Columns: serializeAws_restJson1CalculatedColumnList(input.Columns, context) }),
  };
};

const serializeAws_restJson1CredentialPair = (input: CredentialPair, context: __SerdeContext): any => {
  return {
    ...(input.AlternateDataSourceParameters != null && {
      AlternateDataSourceParameters: serializeAws_restJson1DataSourceParametersList(
        input.AlternateDataSourceParameters,
        context
      ),
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_restJson1CustomSql = (input: CustomSql, context: __SerdeContext): any => {
  return {
    ...(input.Columns != null && { Columns: serializeAws_restJson1InputColumnList(input.Columns, context) }),
    ...(input.DataSourceArn != null && { DataSourceArn: input.DataSourceArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SqlQuery != null && { SqlQuery: input.SqlQuery }),
  };
};

const serializeAws_restJson1DashboardPublishOptions = (
  input: DashboardPublishOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdHocFilteringOption != null && {
      AdHocFilteringOption: serializeAws_restJson1AdHocFilteringOption(input.AdHocFilteringOption, context),
    }),
    ...(input.ExportToCSVOption != null && {
      ExportToCSVOption: serializeAws_restJson1ExportToCSVOption(input.ExportToCSVOption, context),
    }),
    ...(input.SheetControlsOption != null && {
      SheetControlsOption: serializeAws_restJson1SheetControlsOption(input.SheetControlsOption, context),
    }),
  };
};

const serializeAws_restJson1DashboardSearchFilter = (input: DashboardSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1DashboardSearchFilterList = (
  input: DashboardSearchFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DashboardSearchFilter(entry, context);
    });
};

const serializeAws_restJson1DashboardSourceEntity = (input: DashboardSourceEntity, context: __SerdeContext): any => {
  return {
    ...(input.SourceTemplate != null && {
      SourceTemplate: serializeAws_restJson1DashboardSourceTemplate(input.SourceTemplate, context),
    }),
  };
};

const serializeAws_restJson1DashboardSourceTemplate = (
  input: DashboardSourceTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.DataSetReferences != null && {
      DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
    }),
  };
};

const serializeAws_restJson1DashboardVisualId = (input: DashboardVisualId, context: __SerdeContext): any => {
  return {
    ...(input.DashboardId != null && { DashboardId: input.DashboardId }),
    ...(input.SheetId != null && { SheetId: input.SheetId }),
    ...(input.VisualId != null && { VisualId: input.VisualId }),
  };
};

const serializeAws_restJson1DatabricksParameters = (input: DatabricksParameters, context: __SerdeContext): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SqlEndpointPath != null && { SqlEndpointPath: input.SqlEndpointPath }),
  };
};

const serializeAws_restJson1DataColorPalette = (input: DataColorPalette, context: __SerdeContext): any => {
  return {
    ...(input.Colors != null && { Colors: serializeAws_restJson1ColorList(input.Colors, context) }),
    ...(input.EmptyFillColor != null && { EmptyFillColor: input.EmptyFillColor }),
    ...(input.MinMaxGradient != null && {
      MinMaxGradient: serializeAws_restJson1ColorList(input.MinMaxGradient, context),
    }),
  };
};

const serializeAws_restJson1DataSetReference = (input: DataSetReference, context: __SerdeContext): any => {
  return {
    ...(input.DataSetArn != null && { DataSetArn: input.DataSetArn }),
    ...(input.DataSetPlaceholder != null && { DataSetPlaceholder: input.DataSetPlaceholder }),
  };
};

const serializeAws_restJson1DataSetReferenceList = (input: DataSetReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataSetReference(entry, context);
    });
};

const serializeAws_restJson1DataSetSearchFilter = (input: DataSetSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1DataSetSearchFilterList = (input: DataSetSearchFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataSetSearchFilter(entry, context);
    });
};

const serializeAws_restJson1DataSetUsageConfiguration = (
  input: DataSetUsageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DisableUseAsDirectQuerySource != null && {
      DisableUseAsDirectQuerySource: input.DisableUseAsDirectQuerySource,
    }),
    ...(input.DisableUseAsImportedSource != null && { DisableUseAsImportedSource: input.DisableUseAsImportedSource }),
  };
};

const serializeAws_restJson1DataSourceCredentials = (input: DataSourceCredentials, context: __SerdeContext): any => {
  return {
    ...(input.CopySourceArn != null && { CopySourceArn: input.CopySourceArn }),
    ...(input.CredentialPair != null && {
      CredentialPair: serializeAws_restJson1CredentialPair(input.CredentialPair, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
  };
};

const serializeAws_restJson1DataSourceParameters = (input: DataSourceParameters, context: __SerdeContext): any => {
  return DataSourceParameters.visit(input, {
    AmazonElasticsearchParameters: (value) => ({
      AmazonElasticsearchParameters: serializeAws_restJson1AmazonElasticsearchParameters(value, context),
    }),
    AmazonOpenSearchParameters: (value) => ({
      AmazonOpenSearchParameters: serializeAws_restJson1AmazonOpenSearchParameters(value, context),
    }),
    AthenaParameters: (value) => ({ AthenaParameters: serializeAws_restJson1AthenaParameters(value, context) }),
    AuroraParameters: (value) => ({ AuroraParameters: serializeAws_restJson1AuroraParameters(value, context) }),
    AuroraPostgreSqlParameters: (value) => ({
      AuroraPostgreSqlParameters: serializeAws_restJson1AuroraPostgreSqlParameters(value, context),
    }),
    AwsIotAnalyticsParameters: (value) => ({
      AwsIotAnalyticsParameters: serializeAws_restJson1AwsIotAnalyticsParameters(value, context),
    }),
    DatabricksParameters: (value) => ({
      DatabricksParameters: serializeAws_restJson1DatabricksParameters(value, context),
    }),
    ExasolParameters: (value) => ({ ExasolParameters: serializeAws_restJson1ExasolParameters(value, context) }),
    JiraParameters: (value) => ({ JiraParameters: serializeAws_restJson1JiraParameters(value, context) }),
    MariaDbParameters: (value) => ({ MariaDbParameters: serializeAws_restJson1MariaDbParameters(value, context) }),
    MySqlParameters: (value) => ({ MySqlParameters: serializeAws_restJson1MySqlParameters(value, context) }),
    OracleParameters: (value) => ({ OracleParameters: serializeAws_restJson1OracleParameters(value, context) }),
    PostgreSqlParameters: (value) => ({
      PostgreSqlParameters: serializeAws_restJson1PostgreSqlParameters(value, context),
    }),
    PrestoParameters: (value) => ({ PrestoParameters: serializeAws_restJson1PrestoParameters(value, context) }),
    RdsParameters: (value) => ({ RdsParameters: serializeAws_restJson1RdsParameters(value, context) }),
    RedshiftParameters: (value) => ({ RedshiftParameters: serializeAws_restJson1RedshiftParameters(value, context) }),
    S3Parameters: (value) => ({ S3Parameters: serializeAws_restJson1S3Parameters(value, context) }),
    ServiceNowParameters: (value) => ({
      ServiceNowParameters: serializeAws_restJson1ServiceNowParameters(value, context),
    }),
    SnowflakeParameters: (value) => ({
      SnowflakeParameters: serializeAws_restJson1SnowflakeParameters(value, context),
    }),
    SparkParameters: (value) => ({ SparkParameters: serializeAws_restJson1SparkParameters(value, context) }),
    SqlServerParameters: (value) => ({
      SqlServerParameters: serializeAws_restJson1SqlServerParameters(value, context),
    }),
    TeradataParameters: (value) => ({ TeradataParameters: serializeAws_restJson1TeradataParameters(value, context) }),
    TwitterParameters: (value) => ({ TwitterParameters: serializeAws_restJson1TwitterParameters(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DataSourceParametersList = (
  input: DataSourceParameters[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataSourceParameters(entry, context);
    });
};

const serializeAws_restJson1DataSourceSearchFilter = (input: DataSourceSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1DataSourceSearchFilterList = (
  input: DataSourceSearchFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataSourceSearchFilter(entry, context);
    });
};

const serializeAws_restJson1DateTimeParameter = (input: DateTimeParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_restJson1TimestampList(input.Values, context) }),
  };
};

const serializeAws_restJson1DateTimeParameterList = (input: DateTimeParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DateTimeParameter(entry, context);
    });
};

const serializeAws_restJson1DecimalParameter = (input: DecimalParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_restJson1DoubleList(input.Values, context) }),
  };
};

const serializeAws_restJson1DecimalParameterList = (input: DecimalParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DecimalParameter(entry, context);
    });
};

const serializeAws_restJson1DoubleList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1ExasolParameters = (input: ExasolParameters, context: __SerdeContext): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1ExportToCSVOption = (input: ExportToCSVOption, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityStatus != null && { AvailabilityStatus: input.AvailabilityStatus }),
  };
};

const serializeAws_restJson1FieldFolder = (input: FieldFolder, context: __SerdeContext): any => {
  return {
    ...(input.columns != null && { columns: serializeAws_restJson1FolderColumnList(input.columns, context) }),
    ...(input.description != null && { description: input.description }),
  };
};

const serializeAws_restJson1FieldFolderMap = (input: Record<string, FieldFolder>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1FieldFolder(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1FilterOperation = (input: FilterOperation, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression != null && { ConditionExpression: input.ConditionExpression }),
  };
};

const serializeAws_restJson1FolderColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FolderSearchFilter = (input: FolderSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1FolderSearchFilterList = (input: FolderSearchFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FolderSearchFilter(entry, context);
    });
};

const serializeAws_restJson1GeoSpatialColumnGroup = (input: GeoSpatialColumnGroup, context: __SerdeContext): any => {
  return {
    ...(input.Columns != null && { Columns: serializeAws_restJson1ColumnList(input.Columns, context) }),
    ...(input.CountryCode != null && { CountryCode: input.CountryCode }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1GroupSearchFilter = (input: GroupSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1GroupSearchFilterList = (input: GroupSearchFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GroupSearchFilter(entry, context);
    });
};

const serializeAws_restJson1GroupsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GutterStyle = (input: GutterStyle, context: __SerdeContext): any => {
  return {
    ...(input.Show != null && { Show: input.Show }),
  };
};

const serializeAws_restJson1IdentityMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1IdentityNameList(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1IdentityNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1InputColumn = (input: InputColumn, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1InputColumnList = (input: InputColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InputColumn(entry, context);
    });
};

const serializeAws_restJson1IntegerParameter = (input: IntegerParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_restJson1LongList(input.Values, context) }),
  };
};

const serializeAws_restJson1IntegerParameterList = (input: IntegerParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1IntegerParameter(entry, context);
    });
};

const serializeAws_restJson1IpRestrictionRuleMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1JiraParameters = (input: JiraParameters, context: __SerdeContext): any => {
  return {
    ...(input.SiteBaseUrl != null && { SiteBaseUrl: input.SiteBaseUrl }),
  };
};

const serializeAws_restJson1JoinInstruction = (input: JoinInstruction, context: __SerdeContext): any => {
  return {
    ...(input.LeftJoinKeyProperties != null && {
      LeftJoinKeyProperties: serializeAws_restJson1JoinKeyProperties(input.LeftJoinKeyProperties, context),
    }),
    ...(input.LeftOperand != null && { LeftOperand: input.LeftOperand }),
    ...(input.OnClause != null && { OnClause: input.OnClause }),
    ...(input.RightJoinKeyProperties != null && {
      RightJoinKeyProperties: serializeAws_restJson1JoinKeyProperties(input.RightJoinKeyProperties, context),
    }),
    ...(input.RightOperand != null && { RightOperand: input.RightOperand }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1JoinKeyProperties = (input: JoinKeyProperties, context: __SerdeContext): any => {
  return {
    ...(input.UniqueKey != null && { UniqueKey: input.UniqueKey }),
  };
};

const serializeAws_restJson1LogicalTable = (input: LogicalTable, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.DataTransforms != null && {
      DataTransforms: serializeAws_restJson1TransformOperationList(input.DataTransforms, context),
    }),
    ...(input.Source != null && { Source: serializeAws_restJson1LogicalTableSource(input.Source, context) }),
  };
};

const serializeAws_restJson1LogicalTableMap = (input: Record<string, LogicalTable>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1LogicalTable(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1LogicalTableSource = (input: LogicalTableSource, context: __SerdeContext): any => {
  return {
    ...(input.DataSetArn != null && { DataSetArn: input.DataSetArn }),
    ...(input.JoinInstruction != null && {
      JoinInstruction: serializeAws_restJson1JoinInstruction(input.JoinInstruction, context),
    }),
    ...(input.PhysicalTableId != null && { PhysicalTableId: input.PhysicalTableId }),
  };
};

const serializeAws_restJson1LongList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ManifestFileLocation = (input: ManifestFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

const serializeAws_restJson1MarginStyle = (input: MarginStyle, context: __SerdeContext): any => {
  return {
    ...(input.Show != null && { Show: input.Show }),
  };
};

const serializeAws_restJson1MariaDbParameters = (input: MariaDbParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1MySqlParameters = (input: MySqlParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1OracleParameters = (input: OracleParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1_Parameters = (input: _Parameters, context: __SerdeContext): any => {
  return {
    ...(input.DateTimeParameters != null && {
      DateTimeParameters: serializeAws_restJson1DateTimeParameterList(input.DateTimeParameters, context),
    }),
    ...(input.DecimalParameters != null && {
      DecimalParameters: serializeAws_restJson1DecimalParameterList(input.DecimalParameters, context),
    }),
    ...(input.IntegerParameters != null && {
      IntegerParameters: serializeAws_restJson1IntegerParameterList(input.IntegerParameters, context),
    }),
    ...(input.StringParameters != null && {
      StringParameters: serializeAws_restJson1StringParameterList(input.StringParameters, context),
    }),
  };
};

const serializeAws_restJson1PhysicalTable = (input: PhysicalTable, context: __SerdeContext): any => {
  return PhysicalTable.visit(input, {
    CustomSql: (value) => ({ CustomSql: serializeAws_restJson1CustomSql(value, context) }),
    RelationalTable: (value) => ({ RelationalTable: serializeAws_restJson1RelationalTable(value, context) }),
    S3Source: (value) => ({ S3Source: serializeAws_restJson1S3Source(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1PhysicalTableMap = (input: Record<string, PhysicalTable>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1PhysicalTable(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1PostgreSqlParameters = (input: PostgreSqlParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1PrestoParameters = (input: PrestoParameters, context: __SerdeContext): any => {
  return {
    ...(input.Catalog != null && { Catalog: input.Catalog }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1PrincipalList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ProjectedColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ProjectOperation = (input: ProjectOperation, context: __SerdeContext): any => {
  return {
    ...(input.ProjectedColumns != null && {
      ProjectedColumns: serializeAws_restJson1ProjectedColumnList(input.ProjectedColumns, context),
    }),
  };
};

const serializeAws_restJson1RdsParameters = (input: RdsParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_restJson1RedshiftParameters = (input: RedshiftParameters, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1RegisteredUserDashboardEmbeddingConfiguration = (
  input: RegisteredUserDashboardEmbeddingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialDashboardId != null && { InitialDashboardId: input.InitialDashboardId }),
  };
};

const serializeAws_restJson1RegisteredUserDashboardVisualEmbeddingConfiguration = (
  input: RegisteredUserDashboardVisualEmbeddingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialDashboardVisualId != null && {
      InitialDashboardVisualId: serializeAws_restJson1DashboardVisualId(input.InitialDashboardVisualId, context),
    }),
  };
};

const serializeAws_restJson1RegisteredUserEmbeddingExperienceConfiguration = (
  input: RegisteredUserEmbeddingExperienceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dashboard != null && {
      Dashboard: serializeAws_restJson1RegisteredUserDashboardEmbeddingConfiguration(input.Dashboard, context),
    }),
    ...(input.DashboardVisual != null && {
      DashboardVisual: serializeAws_restJson1RegisteredUserDashboardVisualEmbeddingConfiguration(
        input.DashboardVisual,
        context
      ),
    }),
    ...(input.QSearchBar != null && {
      QSearchBar: serializeAws_restJson1RegisteredUserQSearchBarEmbeddingConfiguration(input.QSearchBar, context),
    }),
    ...(input.QuickSightConsole != null && {
      QuickSightConsole: serializeAws_restJson1RegisteredUserQuickSightConsoleEmbeddingConfiguration(
        input.QuickSightConsole,
        context
      ),
    }),
  };
};

const serializeAws_restJson1RegisteredUserQSearchBarEmbeddingConfiguration = (
  input: RegisteredUserQSearchBarEmbeddingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialTopicId != null && { InitialTopicId: input.InitialTopicId }),
  };
};

const serializeAws_restJson1RegisteredUserQuickSightConsoleEmbeddingConfiguration = (
  input: RegisteredUserQuickSightConsoleEmbeddingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialPath != null && { InitialPath: input.InitialPath }),
  };
};

const serializeAws_restJson1RelationalTable = (input: RelationalTable, context: __SerdeContext): any => {
  return {
    ...(input.Catalog != null && { Catalog: input.Catalog }),
    ...(input.DataSourceArn != null && { DataSourceArn: input.DataSourceArn }),
    ...(input.InputColumns != null && {
      InputColumns: serializeAws_restJson1InputColumnList(input.InputColumns, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Schema != null && { Schema: input.Schema }),
  };
};

const serializeAws_restJson1RenameColumnOperation = (input: RenameColumnOperation, context: __SerdeContext): any => {
  return {
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.NewColumnName != null && { NewColumnName: input.NewColumnName }),
  };
};

const serializeAws_restJson1ResourcePermission = (input: ResourcePermission, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_restJson1ActionList(input.Actions, context) }),
    ...(input.Principal != null && { Principal: input.Principal }),
  };
};

const serializeAws_restJson1ResourcePermissionList = (input: ResourcePermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourcePermission(entry, context);
    });
};

const serializeAws_restJson1RowLevelPermissionDataSet = (
  input: RowLevelPermissionDataSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.FormatVersion != null && { FormatVersion: input.FormatVersion }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.PermissionPolicy != null && { PermissionPolicy: input.PermissionPolicy }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1RowLevelPermissionTagConfiguration = (
  input: RowLevelPermissionTagConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
    ...(input.TagRules != null && {
      TagRules: serializeAws_restJson1RowLevelPermissionTagRuleList(input.TagRules, context),
    }),
  };
};

const serializeAws_restJson1RowLevelPermissionTagRule = (
  input: RowLevelPermissionTagRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.MatchAllValue != null && { MatchAllValue: input.MatchAllValue }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagMultiValueDelimiter != null && { TagMultiValueDelimiter: input.TagMultiValueDelimiter }),
  };
};

const serializeAws_restJson1RowLevelPermissionTagRuleList = (
  input: RowLevelPermissionTagRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RowLevelPermissionTagRule(entry, context);
    });
};

const serializeAws_restJson1S3Parameters = (input: S3Parameters, context: __SerdeContext): any => {
  return {
    ...(input.ManifestFileLocation != null && {
      ManifestFileLocation: serializeAws_restJson1ManifestFileLocation(input.ManifestFileLocation, context),
    }),
  };
};

const serializeAws_restJson1S3Source = (input: S3Source, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceArn != null && { DataSourceArn: input.DataSourceArn }),
    ...(input.InputColumns != null && {
      InputColumns: serializeAws_restJson1InputColumnList(input.InputColumns, context),
    }),
    ...(input.UploadSettings != null && {
      UploadSettings: serializeAws_restJson1UploadSettings(input.UploadSettings, context),
    }),
  };
};

const serializeAws_restJson1ServiceNowParameters = (input: ServiceNowParameters, context: __SerdeContext): any => {
  return {
    ...(input.SiteBaseUrl != null && { SiteBaseUrl: input.SiteBaseUrl }),
  };
};

const serializeAws_restJson1SessionTag = (input: SessionTag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1SessionTagList = (input: SessionTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SessionTag(entry, context);
    });
};

const serializeAws_restJson1SheetControlsOption = (input: SheetControlsOption, context: __SerdeContext): any => {
  return {
    ...(input.VisibilityState != null && { VisibilityState: input.VisibilityState }),
  };
};

const serializeAws_restJson1SheetStyle = (input: SheetStyle, context: __SerdeContext): any => {
  return {
    ...(input.Tile != null && { Tile: serializeAws_restJson1TileStyle(input.Tile, context) }),
    ...(input.TileLayout != null && { TileLayout: serializeAws_restJson1TileLayoutStyle(input.TileLayout, context) }),
  };
};

const serializeAws_restJson1SnowflakeParameters = (input: SnowflakeParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Warehouse != null && { Warehouse: input.Warehouse }),
  };
};

const serializeAws_restJson1SparkParameters = (input: SparkParameters, context: __SerdeContext): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1SqlServerParameters = (input: SqlServerParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1SslProperties = (input: SslProperties, context: __SerdeContext): any => {
  return {
    ...(input.DisableSsl != null && { DisableSsl: input.DisableSsl }),
  };
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StringParameter = (input: StringParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_restJson1StringList(input.Values, context) }),
  };
};

const serializeAws_restJson1StringParameterList = (input: StringParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StringParameter(entry, context);
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagColumnOperation = (input: TagColumnOperation, context: __SerdeContext): any => {
  return {
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1ColumnTagList(input.Tags, context) }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TemplateSourceAnalysis = (input: TemplateSourceAnalysis, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.DataSetReferences != null && {
      DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
    }),
  };
};

const serializeAws_restJson1TemplateSourceEntity = (input: TemplateSourceEntity, context: __SerdeContext): any => {
  return {
    ...(input.SourceAnalysis != null && {
      SourceAnalysis: serializeAws_restJson1TemplateSourceAnalysis(input.SourceAnalysis, context),
    }),
    ...(input.SourceTemplate != null && {
      SourceTemplate: serializeAws_restJson1TemplateSourceTemplate(input.SourceTemplate, context),
    }),
  };
};

const serializeAws_restJson1TemplateSourceTemplate = (input: TemplateSourceTemplate, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

const serializeAws_restJson1TeradataParameters = (input: TeradataParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1ThemeConfiguration = (input: ThemeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataColorPalette != null && {
      DataColorPalette: serializeAws_restJson1DataColorPalette(input.DataColorPalette, context),
    }),
    ...(input.Sheet != null && { Sheet: serializeAws_restJson1SheetStyle(input.Sheet, context) }),
    ...(input.UIColorPalette != null && {
      UIColorPalette: serializeAws_restJson1UIColorPalette(input.UIColorPalette, context),
    }),
  };
};

const serializeAws_restJson1TileLayoutStyle = (input: TileLayoutStyle, context: __SerdeContext): any => {
  return {
    ...(input.Gutter != null && { Gutter: serializeAws_restJson1GutterStyle(input.Gutter, context) }),
    ...(input.Margin != null && { Margin: serializeAws_restJson1MarginStyle(input.Margin, context) }),
  };
};

const serializeAws_restJson1TileStyle = (input: TileStyle, context: __SerdeContext): any => {
  return {
    ...(input.Border != null && { Border: serializeAws_restJson1BorderStyle(input.Border, context) }),
  };
};

const serializeAws_restJson1TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return Math.round(entry.getTime() / 1000);
    });
};

const serializeAws_restJson1TransformOperation = (input: TransformOperation, context: __SerdeContext): any => {
  return TransformOperation.visit(input, {
    CastColumnTypeOperation: (value) => ({
      CastColumnTypeOperation: serializeAws_restJson1CastColumnTypeOperation(value, context),
    }),
    CreateColumnsOperation: (value) => ({
      CreateColumnsOperation: serializeAws_restJson1CreateColumnsOperation(value, context),
    }),
    FilterOperation: (value) => ({ FilterOperation: serializeAws_restJson1FilterOperation(value, context) }),
    ProjectOperation: (value) => ({ ProjectOperation: serializeAws_restJson1ProjectOperation(value, context) }),
    RenameColumnOperation: (value) => ({
      RenameColumnOperation: serializeAws_restJson1RenameColumnOperation(value, context),
    }),
    TagColumnOperation: (value) => ({ TagColumnOperation: serializeAws_restJson1TagColumnOperation(value, context) }),
    UntagColumnOperation: (value) => ({
      UntagColumnOperation: serializeAws_restJson1UntagColumnOperation(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1TransformOperationList = (input: TransformOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TransformOperation(entry, context);
    });
};

const serializeAws_restJson1TwitterParameters = (input: TwitterParameters, context: __SerdeContext): any => {
  return {
    ...(input.MaxRows != null && { MaxRows: input.MaxRows }),
    ...(input.Query != null && { Query: input.Query }),
  };
};

const serializeAws_restJson1UIColorPalette = (input: UIColorPalette, context: __SerdeContext): any => {
  return {
    ...(input.Accent != null && { Accent: input.Accent }),
    ...(input.AccentForeground != null && { AccentForeground: input.AccentForeground }),
    ...(input.Danger != null && { Danger: input.Danger }),
    ...(input.DangerForeground != null && { DangerForeground: input.DangerForeground }),
    ...(input.Dimension != null && { Dimension: input.Dimension }),
    ...(input.DimensionForeground != null && { DimensionForeground: input.DimensionForeground }),
    ...(input.Measure != null && { Measure: input.Measure }),
    ...(input.MeasureForeground != null && { MeasureForeground: input.MeasureForeground }),
    ...(input.PrimaryBackground != null && { PrimaryBackground: input.PrimaryBackground }),
    ...(input.PrimaryForeground != null && { PrimaryForeground: input.PrimaryForeground }),
    ...(input.SecondaryBackground != null && { SecondaryBackground: input.SecondaryBackground }),
    ...(input.SecondaryForeground != null && { SecondaryForeground: input.SecondaryForeground }),
    ...(input.Success != null && { Success: input.Success }),
    ...(input.SuccessForeground != null && { SuccessForeground: input.SuccessForeground }),
    ...(input.Warning != null && { Warning: input.Warning }),
    ...(input.WarningForeground != null && { WarningForeground: input.WarningForeground }),
  };
};

const serializeAws_restJson1UntagColumnOperation = (input: UntagColumnOperation, context: __SerdeContext): any => {
  return {
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.TagNames != null && { TagNames: serializeAws_restJson1ColumnTagNames(input.TagNames, context) }),
  };
};

const serializeAws_restJson1UpdateLinkPermissionList = (input: ResourcePermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourcePermission(entry, context);
    });
};

const serializeAws_restJson1UpdateResourcePermissionList = (
  input: ResourcePermission[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourcePermission(entry, context);
    });
};

const serializeAws_restJson1UploadSettings = (input: UploadSettings, context: __SerdeContext): any => {
  return {
    ...(input.ContainsHeader != null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.StartFromRow != null && { StartFromRow: input.StartFromRow }),
    ...(input.TextQualifier != null && { TextQualifier: input.TextQualifier }),
  };
};

const serializeAws_restJson1VpcConnectionProperties = (
  input: VpcConnectionProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.VpcConnectionArn != null && { VpcConnectionArn: input.VpcConnectionArn }),
  };
};

const deserializeAws_restJson1AccountCustomization = (output: any, context: __SerdeContext): AccountCustomization => {
  return {
    DefaultEmailCustomizationTemplate: __expectString(output.DefaultEmailCustomizationTemplate),
    DefaultTheme: __expectString(output.DefaultTheme),
  } as any;
};

const deserializeAws_restJson1AccountInfo = (output: any, context: __SerdeContext): AccountInfo => {
  return {
    AccountName: __expectString(output.AccountName),
    AccountSubscriptionStatus: __expectString(output.AccountSubscriptionStatus),
    AuthenticationType: __expectString(output.AuthenticationType),
    Edition: __expectString(output.Edition),
    NotificationEmail: __expectString(output.NotificationEmail),
  } as any;
};

const deserializeAws_restJson1AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    AccountName: __expectString(output.AccountName),
    DefaultNamespace: __expectString(output.DefaultNamespace),
    Edition: __expectString(output.Edition),
    NotificationEmail: __expectString(output.NotificationEmail),
    PublicSharingEnabled: __expectBoolean(output.PublicSharingEnabled),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
  } as any;
};

const deserializeAws_restJson1ActionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ActiveIAMPolicyAssignment = (
  output: any,
  context: __SerdeContext
): ActiveIAMPolicyAssignment => {
  return {
    AssignmentName: __expectString(output.AssignmentName),
    PolicyArn: __expectString(output.PolicyArn),
  } as any;
};

const deserializeAws_restJson1ActiveIAMPolicyAssignmentList = (
  output: any,
  context: __SerdeContext
): ActiveIAMPolicyAssignment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActiveIAMPolicyAssignment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AmazonElasticsearchParameters = (
  output: any,
  context: __SerdeContext
): AmazonElasticsearchParameters => {
  return {
    Domain: __expectString(output.Domain),
  } as any;
};

const deserializeAws_restJson1AmazonOpenSearchParameters = (
  output: any,
  context: __SerdeContext
): AmazonOpenSearchParameters => {
  return {
    Domain: __expectString(output.Domain),
  } as any;
};

const deserializeAws_restJson1Analysis = (output: any, context: __SerdeContext): Analysis => {
  return {
    AnalysisId: __expectString(output.AnalysisId),
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DataSetArns:
      output.DataSetArns != null ? deserializeAws_restJson1DataSetArnsList(output.DataSetArns, context) : undefined,
    Errors: output.Errors != null ? deserializeAws_restJson1AnalysisErrorList(output.Errors, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Sheets: output.Sheets != null ? deserializeAws_restJson1SheetList(output.Sheets, context) : undefined,
    Status: __expectString(output.Status),
    ThemeArn: __expectString(output.ThemeArn),
  } as any;
};

const deserializeAws_restJson1AnalysisError = (output: any, context: __SerdeContext): AnalysisError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AnalysisErrorList = (output: any, context: __SerdeContext): AnalysisError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnalysisSummary = (output: any, context: __SerdeContext): AnalysisSummary => {
  return {
    AnalysisId: __expectString(output.AnalysisId),
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AnalysisSummaryList = (output: any, context: __SerdeContext): AnalysisSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AthenaParameters = (output: any, context: __SerdeContext): AthenaParameters => {
  return {
    RoleArn: __expectString(output.RoleArn),
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

const deserializeAws_restJson1AuroraParameters = (output: any, context: __SerdeContext): AuroraParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1AuroraPostgreSqlParameters = (
  output: any,
  context: __SerdeContext
): AuroraPostgreSqlParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1AwsIotAnalyticsParameters = (
  output: any,
  context: __SerdeContext
): AwsIotAnalyticsParameters => {
  return {
    DataSetName: __expectString(output.DataSetName),
  } as any;
};

const deserializeAws_restJson1BorderStyle = (output: any, context: __SerdeContext): BorderStyle => {
  return {
    Show: __expectBoolean(output.Show),
  } as any;
};

const deserializeAws_restJson1CalculatedColumn = (output: any, context: __SerdeContext): CalculatedColumn => {
  return {
    ColumnId: __expectString(output.ColumnId),
    ColumnName: __expectString(output.ColumnName),
    Expression: __expectString(output.Expression),
  } as any;
};

const deserializeAws_restJson1CalculatedColumnList = (output: any, context: __SerdeContext): CalculatedColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CalculatedColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CastColumnTypeOperation = (
  output: any,
  context: __SerdeContext
): CastColumnTypeOperation => {
  return {
    ColumnName: __expectString(output.ColumnName),
    Format: __expectString(output.Format),
    NewColumnType: __expectString(output.NewColumnType),
  } as any;
};

const deserializeAws_restJson1ColorList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ColumnDescription = (output: any, context: __SerdeContext): ColumnDescription => {
  return {
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_restJson1ColumnGroup = (output: any, context: __SerdeContext): ColumnGroup => {
  return {
    GeoSpatialColumnGroup:
      output.GeoSpatialColumnGroup != null
        ? deserializeAws_restJson1GeoSpatialColumnGroup(output.GeoSpatialColumnGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnGroupColumnSchema = (
  output: any,
  context: __SerdeContext
): ColumnGroupColumnSchema => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ColumnGroupColumnSchemaList = (
  output: any,
  context: __SerdeContext
): ColumnGroupColumnSchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnGroupColumnSchema(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnGroupList = (output: any, context: __SerdeContext): ColumnGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnGroupSchema = (output: any, context: __SerdeContext): ColumnGroupSchema => {
  return {
    ColumnGroupColumnSchemaList:
      output.ColumnGroupColumnSchemaList != null
        ? deserializeAws_restJson1ColumnGroupColumnSchemaList(output.ColumnGroupColumnSchemaList, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ColumnGroupSchemaList = (output: any, context: __SerdeContext): ColumnGroupSchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnGroupSchema(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnLevelPermissionRule = (
  output: any,
  context: __SerdeContext
): ColumnLevelPermissionRule => {
  return {
    ColumnNames:
      output.ColumnNames != null ? deserializeAws_restJson1ColumnNameList(output.ColumnNames, context) : undefined,
    Principals:
      output.Principals != null ? deserializeAws_restJson1PrincipalList(output.Principals, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnLevelPermissionRuleList = (
  output: any,
  context: __SerdeContext
): ColumnLevelPermissionRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnLevelPermissionRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ColumnNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ColumnSchema = (output: any, context: __SerdeContext): ColumnSchema => {
  return {
    DataType: __expectString(output.DataType),
    GeographicRole: __expectString(output.GeographicRole),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ColumnSchemaList = (output: any, context: __SerdeContext): ColumnSchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnSchema(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnTag = (output: any, context: __SerdeContext): ColumnTag => {
  return {
    ColumnDescription:
      output.ColumnDescription != null
        ? deserializeAws_restJson1ColumnDescription(output.ColumnDescription, context)
        : undefined,
    ColumnGeographicRole: __expectString(output.ColumnGeographicRole),
  } as any;
};

const deserializeAws_restJson1ColumnTagList = (output: any, context: __SerdeContext): ColumnTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnTag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnTagNames = (output: any, context: __SerdeContext): (ColumnTagName | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1CreateColumnsOperation = (
  output: any,
  context: __SerdeContext
): CreateColumnsOperation => {
  return {
    Columns: output.Columns != null ? deserializeAws_restJson1CalculatedColumnList(output.Columns, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CustomSql = (output: any, context: __SerdeContext): CustomSql => {
  return {
    Columns: output.Columns != null ? deserializeAws_restJson1InputColumnList(output.Columns, context) : undefined,
    DataSourceArn: __expectString(output.DataSourceArn),
    Name: __expectString(output.Name),
    SqlQuery: __expectString(output.SqlQuery),
  } as any;
};

const deserializeAws_restJson1Dashboard = (output: any, context: __SerdeContext): Dashboard => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DashboardId: __expectString(output.DashboardId),
    LastPublishedTime:
      output.LastPublishedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastPublishedTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Version: output.Version != null ? deserializeAws_restJson1DashboardVersion(output.Version, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DashboardError = (output: any, context: __SerdeContext): DashboardError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1DashboardErrorList = (output: any, context: __SerdeContext): DashboardError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashboardError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DashboardSummary = (output: any, context: __SerdeContext): DashboardSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DashboardId: __expectString(output.DashboardId),
    LastPublishedTime:
      output.LastPublishedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastPublishedTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    PublishedVersionNumber: __expectLong(output.PublishedVersionNumber),
  } as any;
};

const deserializeAws_restJson1DashboardSummaryList = (output: any, context: __SerdeContext): DashboardSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashboardSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DashboardVersion = (output: any, context: __SerdeContext): DashboardVersion => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DataSetArns:
      output.DataSetArns != null ? deserializeAws_restJson1DataSetArnsList(output.DataSetArns, context) : undefined,
    Description: __expectString(output.Description),
    Errors: output.Errors != null ? deserializeAws_restJson1DashboardErrorList(output.Errors, context) : undefined,
    Sheets: output.Sheets != null ? deserializeAws_restJson1SheetList(output.Sheets, context) : undefined,
    SourceEntityArn: __expectString(output.SourceEntityArn),
    Status: __expectString(output.Status),
    ThemeArn: __expectString(output.ThemeArn),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1DashboardVersionSummary = (
  output: any,
  context: __SerdeContext
): DashboardVersionSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    SourceEntityArn: __expectString(output.SourceEntityArn),
    Status: __expectString(output.Status),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1DashboardVersionSummaryList = (
  output: any,
  context: __SerdeContext
): DashboardVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashboardVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatabricksParameters = (output: any, context: __SerdeContext): DatabricksParameters => {
  return {
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
    SqlEndpointPath: __expectString(output.SqlEndpointPath),
  } as any;
};

const deserializeAws_restJson1DataColorPalette = (output: any, context: __SerdeContext): DataColorPalette => {
  return {
    Colors: output.Colors != null ? deserializeAws_restJson1ColorList(output.Colors, context) : undefined,
    EmptyFillColor: __expectString(output.EmptyFillColor),
    MinMaxGradient:
      output.MinMaxGradient != null ? deserializeAws_restJson1ColorList(output.MinMaxGradient, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataSet = (output: any, context: __SerdeContext): DataSet => {
  return {
    Arn: __expectString(output.Arn),
    ColumnGroups:
      output.ColumnGroups != null ? deserializeAws_restJson1ColumnGroupList(output.ColumnGroups, context) : undefined,
    ColumnLevelPermissionRules:
      output.ColumnLevelPermissionRules != null
        ? deserializeAws_restJson1ColumnLevelPermissionRuleList(output.ColumnLevelPermissionRules, context)
        : undefined,
    ConsumedSpiceCapacityInBytes: __expectLong(output.ConsumedSpiceCapacityInBytes),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    DataSetUsageConfiguration:
      output.DataSetUsageConfiguration != null
        ? deserializeAws_restJson1DataSetUsageConfiguration(output.DataSetUsageConfiguration, context)
        : undefined,
    FieldFolders:
      output.FieldFolders != null ? deserializeAws_restJson1FieldFolderMap(output.FieldFolders, context) : undefined,
    ImportMode: __expectString(output.ImportMode),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    LogicalTableMap:
      output.LogicalTableMap != null
        ? deserializeAws_restJson1LogicalTableMap(output.LogicalTableMap, context)
        : undefined,
    Name: __expectString(output.Name),
    OutputColumns:
      output.OutputColumns != null
        ? deserializeAws_restJson1OutputColumnList(output.OutputColumns, context)
        : undefined,
    PhysicalTableMap:
      output.PhysicalTableMap != null
        ? deserializeAws_restJson1PhysicalTableMap(output.PhysicalTableMap, context)
        : undefined,
    RowLevelPermissionDataSet:
      output.RowLevelPermissionDataSet != null
        ? deserializeAws_restJson1RowLevelPermissionDataSet(output.RowLevelPermissionDataSet, context)
        : undefined,
    RowLevelPermissionTagConfiguration:
      output.RowLevelPermissionTagConfiguration != null
        ? deserializeAws_restJson1RowLevelPermissionTagConfiguration(output.RowLevelPermissionTagConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetArnsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1DataSetConfiguration = (output: any, context: __SerdeContext): DataSetConfiguration => {
  return {
    ColumnGroupSchemaList:
      output.ColumnGroupSchemaList != null
        ? deserializeAws_restJson1ColumnGroupSchemaList(output.ColumnGroupSchemaList, context)
        : undefined,
    DataSetSchema:
      output.DataSetSchema != null ? deserializeAws_restJson1DataSetSchema(output.DataSetSchema, context) : undefined,
    Placeholder: __expectString(output.Placeholder),
  } as any;
};

const deserializeAws_restJson1DataSetConfigurationList = (
  output: any,
  context: __SerdeContext
): DataSetConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSetSchema = (output: any, context: __SerdeContext): DataSetSchema => {
  return {
    ColumnSchemaList:
      output.ColumnSchemaList != null
        ? deserializeAws_restJson1ColumnSchemaList(output.ColumnSchemaList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetSummary = (output: any, context: __SerdeContext): DataSetSummary => {
  return {
    Arn: __expectString(output.Arn),
    ColumnLevelPermissionRulesApplied: __expectBoolean(output.ColumnLevelPermissionRulesApplied),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DataSetId: __expectString(output.DataSetId),
    ImportMode: __expectString(output.ImportMode),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    RowLevelPermissionDataSet:
      output.RowLevelPermissionDataSet != null
        ? deserializeAws_restJson1RowLevelPermissionDataSet(output.RowLevelPermissionDataSet, context)
        : undefined,
    RowLevelPermissionTagConfigurationApplied: __expectBoolean(output.RowLevelPermissionTagConfigurationApplied),
  } as any;
};

const deserializeAws_restJson1DataSetSummaryList = (output: any, context: __SerdeContext): DataSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSetUsageConfiguration = (
  output: any,
  context: __SerdeContext
): DataSetUsageConfiguration => {
  return {
    DisableUseAsDirectQuerySource: __expectBoolean(output.DisableUseAsDirectQuerySource),
    DisableUseAsImportedSource: __expectBoolean(output.DisableUseAsImportedSource),
  } as any;
};

const deserializeAws_restJson1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    AlternateDataSourceParameters:
      output.AlternateDataSourceParameters != null
        ? deserializeAws_restJson1DataSourceParametersList(output.AlternateDataSourceParameters, context)
        : undefined,
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DataSourceId: __expectString(output.DataSourceId),
    DataSourceParameters:
      output.DataSourceParameters != null
        ? deserializeAws_restJson1DataSourceParameters(__expectUnion(output.DataSourceParameters), context)
        : undefined,
    ErrorInfo:
      output.ErrorInfo != null ? deserializeAws_restJson1DataSourceErrorInfo(output.ErrorInfo, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    SecretArn: __expectString(output.SecretArn),
    SslProperties:
      output.SslProperties != null ? deserializeAws_restJson1SslProperties(output.SslProperties, context) : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    VpcConnectionProperties:
      output.VpcConnectionProperties != null
        ? deserializeAws_restJson1VpcConnectionProperties(output.VpcConnectionProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSourceErrorInfo = (output: any, context: __SerdeContext): DataSourceErrorInfo => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1DataSourceList = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSourceParameters = (output: any, context: __SerdeContext): DataSourceParameters => {
  if (output.AmazonElasticsearchParameters != null) {
    return {
      AmazonElasticsearchParameters: deserializeAws_restJson1AmazonElasticsearchParameters(
        output.AmazonElasticsearchParameters,
        context
      ),
    };
  }
  if (output.AmazonOpenSearchParameters != null) {
    return {
      AmazonOpenSearchParameters: deserializeAws_restJson1AmazonOpenSearchParameters(
        output.AmazonOpenSearchParameters,
        context
      ),
    };
  }
  if (output.AthenaParameters != null) {
    return {
      AthenaParameters: deserializeAws_restJson1AthenaParameters(output.AthenaParameters, context),
    };
  }
  if (output.AuroraParameters != null) {
    return {
      AuroraParameters: deserializeAws_restJson1AuroraParameters(output.AuroraParameters, context),
    };
  }
  if (output.AuroraPostgreSqlParameters != null) {
    return {
      AuroraPostgreSqlParameters: deserializeAws_restJson1AuroraPostgreSqlParameters(
        output.AuroraPostgreSqlParameters,
        context
      ),
    };
  }
  if (output.AwsIotAnalyticsParameters != null) {
    return {
      AwsIotAnalyticsParameters: deserializeAws_restJson1AwsIotAnalyticsParameters(
        output.AwsIotAnalyticsParameters,
        context
      ),
    };
  }
  if (output.DatabricksParameters != null) {
    return {
      DatabricksParameters: deserializeAws_restJson1DatabricksParameters(output.DatabricksParameters, context),
    };
  }
  if (output.ExasolParameters != null) {
    return {
      ExasolParameters: deserializeAws_restJson1ExasolParameters(output.ExasolParameters, context),
    };
  }
  if (output.JiraParameters != null) {
    return {
      JiraParameters: deserializeAws_restJson1JiraParameters(output.JiraParameters, context),
    };
  }
  if (output.MariaDbParameters != null) {
    return {
      MariaDbParameters: deserializeAws_restJson1MariaDbParameters(output.MariaDbParameters, context),
    };
  }
  if (output.MySqlParameters != null) {
    return {
      MySqlParameters: deserializeAws_restJson1MySqlParameters(output.MySqlParameters, context),
    };
  }
  if (output.OracleParameters != null) {
    return {
      OracleParameters: deserializeAws_restJson1OracleParameters(output.OracleParameters, context),
    };
  }
  if (output.PostgreSqlParameters != null) {
    return {
      PostgreSqlParameters: deserializeAws_restJson1PostgreSqlParameters(output.PostgreSqlParameters, context),
    };
  }
  if (output.PrestoParameters != null) {
    return {
      PrestoParameters: deserializeAws_restJson1PrestoParameters(output.PrestoParameters, context),
    };
  }
  if (output.RdsParameters != null) {
    return {
      RdsParameters: deserializeAws_restJson1RdsParameters(output.RdsParameters, context),
    };
  }
  if (output.RedshiftParameters != null) {
    return {
      RedshiftParameters: deserializeAws_restJson1RedshiftParameters(output.RedshiftParameters, context),
    };
  }
  if (output.S3Parameters != null) {
    return {
      S3Parameters: deserializeAws_restJson1S3Parameters(output.S3Parameters, context),
    };
  }
  if (output.ServiceNowParameters != null) {
    return {
      ServiceNowParameters: deserializeAws_restJson1ServiceNowParameters(output.ServiceNowParameters, context),
    };
  }
  if (output.SnowflakeParameters != null) {
    return {
      SnowflakeParameters: deserializeAws_restJson1SnowflakeParameters(output.SnowflakeParameters, context),
    };
  }
  if (output.SparkParameters != null) {
    return {
      SparkParameters: deserializeAws_restJson1SparkParameters(output.SparkParameters, context),
    };
  }
  if (output.SqlServerParameters != null) {
    return {
      SqlServerParameters: deserializeAws_restJson1SqlServerParameters(output.SqlServerParameters, context),
    };
  }
  if (output.TeradataParameters != null) {
    return {
      TeradataParameters: deserializeAws_restJson1TeradataParameters(output.TeradataParameters, context),
    };
  }
  if (output.TwitterParameters != null) {
    return {
      TwitterParameters: deserializeAws_restJson1TwitterParameters(output.TwitterParameters, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1DataSourceParametersList = (
  output: any,
  context: __SerdeContext
): DataSourceParameters[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSourceParameters(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DataSourceId: __expectString(output.DataSourceId),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1DataSourceSummaryList = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSourceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ExasolParameters = (output: any, context: __SerdeContext): ExasolParameters => {
  return {
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1FieldFolder = (output: any, context: __SerdeContext): FieldFolder => {
  return {
    columns: output.columns != null ? deserializeAws_restJson1FolderColumnList(output.columns, context) : undefined,
    description: __expectString(output.description),
  } as any;
};

const deserializeAws_restJson1FieldFolderMap = (output: any, context: __SerdeContext): Record<string, FieldFolder> => {
  return Object.entries(output).reduce((acc: Record<string, FieldFolder>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1FieldFolder(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1FilterOperation = (output: any, context: __SerdeContext): FilterOperation => {
  return {
    ConditionExpression: __expectString(output.ConditionExpression),
  } as any;
};

const deserializeAws_restJson1Folder = (output: any, context: __SerdeContext): Folder => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    FolderId: __expectString(output.FolderId),
    FolderPath: output.FolderPath != null ? deserializeAws_restJson1Path(output.FolderPath, context) : undefined,
    FolderType: __expectString(output.FolderType),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1FolderColumnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1FolderMember = (output: any, context: __SerdeContext): FolderMember => {
  return {
    MemberId: __expectString(output.MemberId),
    MemberType: __expectString(output.MemberType),
  } as any;
};

const deserializeAws_restJson1FolderMemberList = (output: any, context: __SerdeContext): MemberIdArnPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MemberIdArnPair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FolderSummary = (output: any, context: __SerdeContext): FolderSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    FolderId: __expectString(output.FolderId),
    FolderType: __expectString(output.FolderType),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1FolderSummaryList = (output: any, context: __SerdeContext): FolderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FolderSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GeoSpatialColumnGroup = (output: any, context: __SerdeContext): GeoSpatialColumnGroup => {
  return {
    Columns: output.Columns != null ? deserializeAws_restJson1ColumnList(output.Columns, context) : undefined,
    CountryCode: __expectString(output.CountryCode),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1Group = (output: any, context: __SerdeContext): Group => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    GroupName: __expectString(output.GroupName),
    PrincipalId: __expectString(output.PrincipalId),
  } as any;
};

const deserializeAws_restJson1GroupList = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Group(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GroupMember = (output: any, context: __SerdeContext): GroupMember => {
  return {
    Arn: __expectString(output.Arn),
    MemberName: __expectString(output.MemberName),
  } as any;
};

const deserializeAws_restJson1GroupMemberList = (output: any, context: __SerdeContext): GroupMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GutterStyle = (output: any, context: __SerdeContext): GutterStyle => {
  return {
    Show: __expectBoolean(output.Show),
  } as any;
};

const deserializeAws_restJson1IAMPolicyAssignment = (output: any, context: __SerdeContext): IAMPolicyAssignment => {
  return {
    AssignmentId: __expectString(output.AssignmentId),
    AssignmentName: __expectString(output.AssignmentName),
    AssignmentStatus: __expectString(output.AssignmentStatus),
    AwsAccountId: __expectString(output.AwsAccountId),
    Identities: output.Identities != null ? deserializeAws_restJson1IdentityMap(output.Identities, context) : undefined,
    PolicyArn: __expectString(output.PolicyArn),
  } as any;
};

const deserializeAws_restJson1IAMPolicyAssignmentSummary = (
  output: any,
  context: __SerdeContext
): IAMPolicyAssignmentSummary => {
  return {
    AssignmentName: __expectString(output.AssignmentName),
    AssignmentStatus: __expectString(output.AssignmentStatus),
  } as any;
};

const deserializeAws_restJson1IAMPolicyAssignmentSummaryList = (
  output: any,
  context: __SerdeContext
): IAMPolicyAssignmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IAMPolicyAssignmentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IdentityMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1IdentityNameList(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1IdentityNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Ingestion = (output: any, context: __SerdeContext): Ingestion => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    ErrorInfo: output.ErrorInfo != null ? deserializeAws_restJson1ErrorInfo(output.ErrorInfo, context) : undefined,
    IngestionId: __expectString(output.IngestionId),
    IngestionSizeInBytes: __expectLong(output.IngestionSizeInBytes),
    IngestionStatus: __expectString(output.IngestionStatus),
    IngestionTimeInSeconds: __expectLong(output.IngestionTimeInSeconds),
    QueueInfo: output.QueueInfo != null ? deserializeAws_restJson1QueueInfo(output.QueueInfo, context) : undefined,
    RequestSource: __expectString(output.RequestSource),
    RequestType: __expectString(output.RequestType),
    RowInfo: output.RowInfo != null ? deserializeAws_restJson1RowInfo(output.RowInfo, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Ingestions = (output: any, context: __SerdeContext): Ingestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ingestion(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InputColumn = (output: any, context: __SerdeContext): InputColumn => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1InputColumnList = (output: any, context: __SerdeContext): InputColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IpRestrictionRuleMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1JiraParameters = (output: any, context: __SerdeContext): JiraParameters => {
  return {
    SiteBaseUrl: __expectString(output.SiteBaseUrl),
  } as any;
};

const deserializeAws_restJson1JoinInstruction = (output: any, context: __SerdeContext): JoinInstruction => {
  return {
    LeftJoinKeyProperties:
      output.LeftJoinKeyProperties != null
        ? deserializeAws_restJson1JoinKeyProperties(output.LeftJoinKeyProperties, context)
        : undefined,
    LeftOperand: __expectString(output.LeftOperand),
    OnClause: __expectString(output.OnClause),
    RightJoinKeyProperties:
      output.RightJoinKeyProperties != null
        ? deserializeAws_restJson1JoinKeyProperties(output.RightJoinKeyProperties, context)
        : undefined,
    RightOperand: __expectString(output.RightOperand),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1JoinKeyProperties = (output: any, context: __SerdeContext): JoinKeyProperties => {
  return {
    UniqueKey: __expectBoolean(output.UniqueKey),
  } as any;
};

const deserializeAws_restJson1LinkSharingConfiguration = (
  output: any,
  context: __SerdeContext
): LinkSharingConfiguration => {
  return {
    Permissions:
      output.Permissions != null
        ? deserializeAws_restJson1ResourcePermissionList(output.Permissions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogicalTable = (output: any, context: __SerdeContext): LogicalTable => {
  return {
    Alias: __expectString(output.Alias),
    DataTransforms:
      output.DataTransforms != null
        ? deserializeAws_restJson1TransformOperationList(output.DataTransforms, context)
        : undefined,
    Source: output.Source != null ? deserializeAws_restJson1LogicalTableSource(output.Source, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogicalTableMap = (
  output: any,
  context: __SerdeContext
): Record<string, LogicalTable> => {
  return Object.entries(output).reduce((acc: Record<string, LogicalTable>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1LogicalTable(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1LogicalTableSource = (output: any, context: __SerdeContext): LogicalTableSource => {
  return {
    DataSetArn: __expectString(output.DataSetArn),
    JoinInstruction:
      output.JoinInstruction != null
        ? deserializeAws_restJson1JoinInstruction(output.JoinInstruction, context)
        : undefined,
    PhysicalTableId: __expectString(output.PhysicalTableId),
  } as any;
};

const deserializeAws_restJson1ManifestFileLocation = (output: any, context: __SerdeContext): ManifestFileLocation => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1MarginStyle = (output: any, context: __SerdeContext): MarginStyle => {
  return {
    Show: __expectBoolean(output.Show),
  } as any;
};

const deserializeAws_restJson1MariaDbParameters = (output: any, context: __SerdeContext): MariaDbParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1MemberIdArnPair = (output: any, context: __SerdeContext): MemberIdArnPair => {
  return {
    MemberArn: __expectString(output.MemberArn),
    MemberId: __expectString(output.MemberId),
  } as any;
};

const deserializeAws_restJson1MySqlParameters = (output: any, context: __SerdeContext): MySqlParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1NamespaceError = (output: any, context: __SerdeContext): NamespaceError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1NamespaceInfoV2 = (output: any, context: __SerdeContext): NamespaceInfoV2 => {
  return {
    Arn: __expectString(output.Arn),
    CapacityRegion: __expectString(output.CapacityRegion),
    CreationStatus: __expectString(output.CreationStatus),
    IdentityStore: __expectString(output.IdentityStore),
    Name: __expectString(output.Name),
    NamespaceError:
      output.NamespaceError != null
        ? deserializeAws_restJson1NamespaceError(output.NamespaceError, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Namespaces = (output: any, context: __SerdeContext): NamespaceInfoV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NamespaceInfoV2(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OracleParameters = (output: any, context: __SerdeContext): OracleParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1OutputColumn = (output: any, context: __SerdeContext): OutputColumn => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1OutputColumnList = (output: any, context: __SerdeContext): OutputColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Path = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1PhysicalTable = (output: any, context: __SerdeContext): PhysicalTable => {
  if (output.CustomSql != null) {
    return {
      CustomSql: deserializeAws_restJson1CustomSql(output.CustomSql, context),
    };
  }
  if (output.RelationalTable != null) {
    return {
      RelationalTable: deserializeAws_restJson1RelationalTable(output.RelationalTable, context),
    };
  }
  if (output.S3Source != null) {
    return {
      S3Source: deserializeAws_restJson1S3Source(output.S3Source, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1PhysicalTableMap = (
  output: any,
  context: __SerdeContext
): Record<string, PhysicalTable> => {
  return Object.entries(output).reduce((acc: Record<string, PhysicalTable>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1PhysicalTable(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_restJson1PostgreSqlParameters = (output: any, context: __SerdeContext): PostgreSqlParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1PrestoParameters = (output: any, context: __SerdeContext): PrestoParameters => {
  return {
    Catalog: __expectString(output.Catalog),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1PrincipalList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ProjectedColumnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ProjectOperation = (output: any, context: __SerdeContext): ProjectOperation => {
  return {
    ProjectedColumns:
      output.ProjectedColumns != null
        ? deserializeAws_restJson1ProjectedColumnList(output.ProjectedColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1QueueInfo = (output: any, context: __SerdeContext): QueueInfo => {
  return {
    QueuedIngestion: __expectString(output.QueuedIngestion),
    WaitingOnIngestion: __expectString(output.WaitingOnIngestion),
  } as any;
};

const deserializeAws_restJson1RdsParameters = (output: any, context: __SerdeContext): RdsParameters => {
  return {
    Database: __expectString(output.Database),
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

const deserializeAws_restJson1RedshiftParameters = (output: any, context: __SerdeContext): RedshiftParameters => {
  return {
    ClusterId: __expectString(output.ClusterId),
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1RelationalTable = (output: any, context: __SerdeContext): RelationalTable => {
  return {
    Catalog: __expectString(output.Catalog),
    DataSourceArn: __expectString(output.DataSourceArn),
    InputColumns:
      output.InputColumns != null ? deserializeAws_restJson1InputColumnList(output.InputColumns, context) : undefined,
    Name: __expectString(output.Name),
    Schema: __expectString(output.Schema),
  } as any;
};

const deserializeAws_restJson1RenameColumnOperation = (output: any, context: __SerdeContext): RenameColumnOperation => {
  return {
    ColumnName: __expectString(output.ColumnName),
    NewColumnName: __expectString(output.NewColumnName),
  } as any;
};

const deserializeAws_restJson1ResourcePermission = (output: any, context: __SerdeContext): ResourcePermission => {
  return {
    Actions: output.Actions != null ? deserializeAws_restJson1ActionList(output.Actions, context) : undefined,
    Principal: __expectString(output.Principal),
  } as any;
};

const deserializeAws_restJson1ResourcePermissionList = (output: any, context: __SerdeContext): ResourcePermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourcePermission(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RowInfo = (output: any, context: __SerdeContext): RowInfo => {
  return {
    RowsDropped: __expectLong(output.RowsDropped),
    RowsIngested: __expectLong(output.RowsIngested),
    TotalRowsInDataset: __expectLong(output.TotalRowsInDataset),
  } as any;
};

const deserializeAws_restJson1RowLevelPermissionDataSet = (
  output: any,
  context: __SerdeContext
): RowLevelPermissionDataSet => {
  return {
    Arn: __expectString(output.Arn),
    FormatVersion: __expectString(output.FormatVersion),
    Namespace: __expectString(output.Namespace),
    PermissionPolicy: __expectString(output.PermissionPolicy),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1RowLevelPermissionTagConfiguration = (
  output: any,
  context: __SerdeContext
): RowLevelPermissionTagConfiguration => {
  return {
    Status: __expectString(output.Status),
    TagRules:
      output.TagRules != null
        ? deserializeAws_restJson1RowLevelPermissionTagRuleList(output.TagRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RowLevelPermissionTagRule = (
  output: any,
  context: __SerdeContext
): RowLevelPermissionTagRule => {
  return {
    ColumnName: __expectString(output.ColumnName),
    MatchAllValue: __expectString(output.MatchAllValue),
    TagKey: __expectString(output.TagKey),
    TagMultiValueDelimiter: __expectString(output.TagMultiValueDelimiter),
  } as any;
};

const deserializeAws_restJson1RowLevelPermissionTagRuleList = (
  output: any,
  context: __SerdeContext
): RowLevelPermissionTagRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RowLevelPermissionTagRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3Parameters = (output: any, context: __SerdeContext): S3Parameters => {
  return {
    ManifestFileLocation:
      output.ManifestFileLocation != null
        ? deserializeAws_restJson1ManifestFileLocation(output.ManifestFileLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3Source = (output: any, context: __SerdeContext): S3Source => {
  return {
    DataSourceArn: __expectString(output.DataSourceArn),
    InputColumns:
      output.InputColumns != null ? deserializeAws_restJson1InputColumnList(output.InputColumns, context) : undefined,
    UploadSettings:
      output.UploadSettings != null
        ? deserializeAws_restJson1UploadSettings(output.UploadSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceNowParameters = (output: any, context: __SerdeContext): ServiceNowParameters => {
  return {
    SiteBaseUrl: __expectString(output.SiteBaseUrl),
  } as any;
};

const deserializeAws_restJson1Sheet = (output: any, context: __SerdeContext): Sheet => {
  return {
    Name: __expectString(output.Name),
    SheetId: __expectString(output.SheetId),
  } as any;
};

const deserializeAws_restJson1SheetList = (output: any, context: __SerdeContext): Sheet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Sheet(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SheetStyle = (output: any, context: __SerdeContext): SheetStyle => {
  return {
    Tile: output.Tile != null ? deserializeAws_restJson1TileStyle(output.Tile, context) : undefined,
    TileLayout:
      output.TileLayout != null ? deserializeAws_restJson1TileLayoutStyle(output.TileLayout, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SignupResponse = (output: any, context: __SerdeContext): SignupResponse => {
  return {
    IAMUser: __expectBoolean(output.IAMUser),
    accountName: __expectString(output.accountName),
    directoryType: __expectString(output.directoryType),
    userLoginName: __expectString(output.userLoginName),
  } as any;
};

const deserializeAws_restJson1SnowflakeParameters = (output: any, context: __SerdeContext): SnowflakeParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Warehouse: __expectString(output.Warehouse),
  } as any;
};

const deserializeAws_restJson1SparkParameters = (output: any, context: __SerdeContext): SparkParameters => {
  return {
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1SqlServerParameters = (output: any, context: __SerdeContext): SqlServerParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1SslProperties = (output: any, context: __SerdeContext): SslProperties => {
  return {
    DisableSsl: __expectBoolean(output.DisableSsl),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagColumnOperation = (output: any, context: __SerdeContext): TagColumnOperation => {
  return {
    ColumnName: __expectString(output.ColumnName),
    Tags: output.Tags != null ? deserializeAws_restJson1ColumnTagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Template = (output: any, context: __SerdeContext): Template => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    TemplateId: __expectString(output.TemplateId),
    Version: output.Version != null ? deserializeAws_restJson1TemplateVersion(output.Version, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateAlias = (output: any, context: __SerdeContext): TemplateAlias => {
  return {
    AliasName: __expectString(output.AliasName),
    Arn: __expectString(output.Arn),
    TemplateVersionNumber: __expectLong(output.TemplateVersionNumber),
  } as any;
};

const deserializeAws_restJson1TemplateAliasList = (output: any, context: __SerdeContext): TemplateAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateAlias(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TemplateError = (output: any, context: __SerdeContext): TemplateError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1TemplateErrorList = (output: any, context: __SerdeContext): TemplateError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    LatestVersionNumber: __expectLong(output.LatestVersionNumber),
    Name: __expectString(output.Name),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

const deserializeAws_restJson1TemplateSummaryList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TemplateVersion = (output: any, context: __SerdeContext): TemplateVersion => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DataSetConfigurations:
      output.DataSetConfigurations != null
        ? deserializeAws_restJson1DataSetConfigurationList(output.DataSetConfigurations, context)
        : undefined,
    Description: __expectString(output.Description),
    Errors: output.Errors != null ? deserializeAws_restJson1TemplateErrorList(output.Errors, context) : undefined,
    Sheets: output.Sheets != null ? deserializeAws_restJson1SheetList(output.Sheets, context) : undefined,
    SourceEntityArn: __expectString(output.SourceEntityArn),
    Status: __expectString(output.Status),
    ThemeArn: __expectString(output.ThemeArn),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1TemplateVersionSummary = (
  output: any,
  context: __SerdeContext
): TemplateVersionSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Status: __expectString(output.Status),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1TemplateVersionSummaryList = (
  output: any,
  context: __SerdeContext
): TemplateVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TeradataParameters = (output: any, context: __SerdeContext): TeradataParameters => {
  return {
    Database: __expectString(output.Database),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1Theme = (output: any, context: __SerdeContext): Theme => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    ThemeId: __expectString(output.ThemeId),
    Type: __expectString(output.Type),
    Version: output.Version != null ? deserializeAws_restJson1ThemeVersion(output.Version, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeAlias = (output: any, context: __SerdeContext): ThemeAlias => {
  return {
    AliasName: __expectString(output.AliasName),
    Arn: __expectString(output.Arn),
    ThemeVersionNumber: __expectLong(output.ThemeVersionNumber),
  } as any;
};

const deserializeAws_restJson1ThemeAliasList = (output: any, context: __SerdeContext): ThemeAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeAlias(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThemeConfiguration = (output: any, context: __SerdeContext): ThemeConfiguration => {
  return {
    DataColorPalette:
      output.DataColorPalette != null
        ? deserializeAws_restJson1DataColorPalette(output.DataColorPalette, context)
        : undefined,
    Sheet: output.Sheet != null ? deserializeAws_restJson1SheetStyle(output.Sheet, context) : undefined,
    UIColorPalette:
      output.UIColorPalette != null
        ? deserializeAws_restJson1UIColorPalette(output.UIColorPalette, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeError = (output: any, context: __SerdeContext): ThemeError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ThemeErrorList = (output: any, context: __SerdeContext): ThemeError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThemeSummary = (output: any, context: __SerdeContext): ThemeSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    LatestVersionNumber: __expectLong(output.LatestVersionNumber),
    Name: __expectString(output.Name),
    ThemeId: __expectString(output.ThemeId),
  } as any;
};

const deserializeAws_restJson1ThemeSummaryList = (output: any, context: __SerdeContext): ThemeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThemeVersion = (output: any, context: __SerdeContext): ThemeVersion => {
  return {
    Arn: __expectString(output.Arn),
    BaseThemeId: __expectString(output.BaseThemeId),
    Configuration:
      output.Configuration != null
        ? deserializeAws_restJson1ThemeConfiguration(output.Configuration, context)
        : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Errors: output.Errors != null ? deserializeAws_restJson1ThemeErrorList(output.Errors, context) : undefined,
    Status: __expectString(output.Status),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1ThemeVersionSummary = (output: any, context: __SerdeContext): ThemeVersionSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Status: __expectString(output.Status),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_restJson1ThemeVersionSummaryList = (
  output: any,
  context: __SerdeContext
): ThemeVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TileLayoutStyle = (output: any, context: __SerdeContext): TileLayoutStyle => {
  return {
    Gutter: output.Gutter != null ? deserializeAws_restJson1GutterStyle(output.Gutter, context) : undefined,
    Margin: output.Margin != null ? deserializeAws_restJson1MarginStyle(output.Margin, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TileStyle = (output: any, context: __SerdeContext): TileStyle => {
  return {
    Border: output.Border != null ? deserializeAws_restJson1BorderStyle(output.Border, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TransformOperation = (output: any, context: __SerdeContext): TransformOperation => {
  if (output.CastColumnTypeOperation != null) {
    return {
      CastColumnTypeOperation: deserializeAws_restJson1CastColumnTypeOperation(output.CastColumnTypeOperation, context),
    };
  }
  if (output.CreateColumnsOperation != null) {
    return {
      CreateColumnsOperation: deserializeAws_restJson1CreateColumnsOperation(output.CreateColumnsOperation, context),
    };
  }
  if (output.FilterOperation != null) {
    return {
      FilterOperation: deserializeAws_restJson1FilterOperation(output.FilterOperation, context),
    };
  }
  if (output.ProjectOperation != null) {
    return {
      ProjectOperation: deserializeAws_restJson1ProjectOperation(output.ProjectOperation, context),
    };
  }
  if (output.RenameColumnOperation != null) {
    return {
      RenameColumnOperation: deserializeAws_restJson1RenameColumnOperation(output.RenameColumnOperation, context),
    };
  }
  if (output.TagColumnOperation != null) {
    return {
      TagColumnOperation: deserializeAws_restJson1TagColumnOperation(output.TagColumnOperation, context),
    };
  }
  if (output.UntagColumnOperation != null) {
    return {
      UntagColumnOperation: deserializeAws_restJson1UntagColumnOperation(output.UntagColumnOperation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1TransformOperationList = (output: any, context: __SerdeContext): TransformOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransformOperation(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1TwitterParameters = (output: any, context: __SerdeContext): TwitterParameters => {
  return {
    MaxRows: __expectInt32(output.MaxRows),
    Query: __expectString(output.Query),
  } as any;
};

const deserializeAws_restJson1UIColorPalette = (output: any, context: __SerdeContext): UIColorPalette => {
  return {
    Accent: __expectString(output.Accent),
    AccentForeground: __expectString(output.AccentForeground),
    Danger: __expectString(output.Danger),
    DangerForeground: __expectString(output.DangerForeground),
    Dimension: __expectString(output.Dimension),
    DimensionForeground: __expectString(output.DimensionForeground),
    Measure: __expectString(output.Measure),
    MeasureForeground: __expectString(output.MeasureForeground),
    PrimaryBackground: __expectString(output.PrimaryBackground),
    PrimaryForeground: __expectString(output.PrimaryForeground),
    SecondaryBackground: __expectString(output.SecondaryBackground),
    SecondaryForeground: __expectString(output.SecondaryForeground),
    Success: __expectString(output.Success),
    SuccessForeground: __expectString(output.SuccessForeground),
    Warning: __expectString(output.Warning),
    WarningForeground: __expectString(output.WarningForeground),
  } as any;
};

const deserializeAws_restJson1UntagColumnOperation = (output: any, context: __SerdeContext): UntagColumnOperation => {
  return {
    ColumnName: __expectString(output.ColumnName),
    TagNames: output.TagNames != null ? deserializeAws_restJson1ColumnTagNames(output.TagNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UploadSettings = (output: any, context: __SerdeContext): UploadSettings => {
  return {
    ContainsHeader: __expectBoolean(output.ContainsHeader),
    Delimiter: __expectString(output.Delimiter),
    Format: __expectString(output.Format),
    StartFromRow: __expectInt32(output.StartFromRow),
    TextQualifier: __expectString(output.TextQualifier),
  } as any;
};

const deserializeAws_restJson1User = (output: any, context: __SerdeContext): User => {
  return {
    Active: __expectBoolean(output.Active),
    Arn: __expectString(output.Arn),
    CustomPermissionsName: __expectString(output.CustomPermissionsName),
    Email: __expectString(output.Email),
    ExternalLoginFederationProviderType: __expectString(output.ExternalLoginFederationProviderType),
    ExternalLoginFederationProviderUrl: __expectString(output.ExternalLoginFederationProviderUrl),
    ExternalLoginId: __expectString(output.ExternalLoginId),
    IdentityType: __expectString(output.IdentityType),
    PrincipalId: __expectString(output.PrincipalId),
    Role: __expectString(output.Role),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_restJson1UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1User(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcConnectionProperties = (
  output: any,
  context: __SerdeContext
): VpcConnectionProperties => {
  return {
    VpcConnectionArn: __expectString(output.VpcConnectionArn),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
