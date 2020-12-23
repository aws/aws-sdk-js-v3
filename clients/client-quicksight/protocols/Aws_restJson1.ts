import { CancelIngestionCommandInput, CancelIngestionCommandOutput } from "../commands/CancelIngestionCommand";
import {
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
} from "../commands/CreateAccountCustomizationCommand";
import { CreateAnalysisCommandInput, CreateAnalysisCommandOutput } from "../commands/CreateAnalysisCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "../commands/CreateDashboardCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "../commands/CreateDataSetCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
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
import { DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput } from "../commands/DeleteAnalysisCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "../commands/DeleteDashboardCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "../commands/DeleteDataSetCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
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
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "../commands/DescribeGroupCommand";
import {
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
} from "../commands/DescribeIAMPolicyAssignmentCommand";
import { DescribeIngestionCommandInput, DescribeIngestionCommandOutput } from "../commands/DescribeIngestionCommand";
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
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "../commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput } from "../commands/GetSessionEmbedUrlCommand";
import { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "../commands/ListAnalysesCommand";
import {
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "../commands/ListDashboardVersionsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
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
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import { ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput } from "../commands/ListThemeAliasesCommand";
import { ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput } from "../commands/ListThemeVersionsCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "../commands/ListUserGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { RegisterUserCommandInput, RegisterUserCommandOutput } from "../commands/RegisterUserCommand";
import { RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput } from "../commands/RestoreAnalysisCommand";
import { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "../commands/SearchAnalysesCommand";
import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "../commands/SearchDashboardsCommand";
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
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import {
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
} from "../commands/UpdateIAMPolicyAssignmentCommand";
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
  AccessDeniedException,
  AccountCustomization,
  AccountSettings,
  ActiveIAMPolicyAssignment,
  AdHocFilteringOption,
  AmazonElasticsearchParameters,
  Analysis,
  AnalysisError,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSourceTemplate,
  AnalysisSummary,
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
  DataColorPalette,
  DataSet,
  DataSetConfiguration,
  DataSetReference,
  DataSetSchema,
  DataSetSummary,
  DataSource,
  DataSourceCredentials,
  DataSourceErrorInfo,
  DataSourceParameters,
  DateTimeParameter,
  DecimalParameter,
  DomainNotWhitelistedException,
  ErrorInfo,
  ExportToCSVOption,
  FilterOperation,
  GeoSpatialColumnGroup,
  Group,
  GroupMember,
  GutterStyle,
  IAMPolicyAssignment,
  IAMPolicyAssignmentSummary,
  IdentityTypeNotSupportedException,
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
  QuickSightUserNotFoundException,
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
  S3Parameters,
  S3Source,
  ServiceNowParameters,
  SessionLifetimeInMinutesInvalidException,
  Sheet,
  SheetControlsOption,
  SheetStyle,
  SnowflakeParameters,
  SparkParameters,
  SqlServerParameters,
  SslProperties,
  StringParameter,
  Tag,
  TagColumnOperation,
  Template,
  TemplateAlias,
  TemplateError,
  TemplateSourceAnalysis,
  TemplateSourceEntity,
  TemplateSourceTemplate,
  TemplateVersion,
  TeradataParameters,
  Theme,
  ThemeAlias,
  ThemeConfiguration,
  ThemeError,
  ThemeVersion,
  ThrottlingException,
  TileLayoutStyle,
  TileStyle,
  TransformOperation,
  TwitterParameters,
  UIColorPalette,
  UnsupportedPricingPlanException,
  UnsupportedUserEditionException,
  UploadSettings,
  User,
  VpcConnectionProperties,
  _Parameters,
} from "../models/models_0";
import { TemplateSummary, TemplateVersionSummary, ThemeSummary, ThemeVersionSummary } from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CancelIngestionCommand = async (
  input: CancelIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.IngestionId !== undefined) {
    const labelValue: string = input.IngestionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IngestionId.");
    }
    resolvedPath = resolvedPath.replace("{IngestionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IngestionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/customizations";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.Namespace !== undefined && { namespace: input.Namespace }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.AccountCustomization !== undefined &&
      input.AccountCustomization !== null && {
        AccountCustomization: serializeAws_restJson1AccountCustomization(input.AccountCustomization, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CreateAnalysisCommand = async (
  input: CreateAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AnalysisId !== undefined) {
    const labelValue: string = input.AnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{AnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AnalysisId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && {
        Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
      }),
    ...(input.SourceEntity !== undefined &&
      input.SourceEntity !== null && {
        SourceEntity: serializeAws_restJson1AnalysisSourceEntity(input.SourceEntity, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DashboardPublishOptions !== undefined &&
      input.DashboardPublishOptions !== null && {
        DashboardPublishOptions: serializeAws_restJson1DashboardPublishOptions(input.DashboardPublishOptions, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && {
        Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
      }),
    ...(input.SourceEntity !== undefined &&
      input.SourceEntity !== null && {
        SourceEntity: serializeAws_restJson1DashboardSourceEntity(input.SourceEntity, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
    ...(input.VersionDescription !== undefined &&
      input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ColumnGroups !== undefined &&
      input.ColumnGroups !== null && {
        ColumnGroups: serializeAws_restJson1ColumnGroupList(input.ColumnGroups, context),
      }),
    ...(input.ColumnLevelPermissionRules !== undefined &&
      input.ColumnLevelPermissionRules !== null && {
        ColumnLevelPermissionRules: serializeAws_restJson1ColumnLevelPermissionRuleList(
          input.ColumnLevelPermissionRules,
          context
        ),
      }),
    ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
    ...(input.ImportMode !== undefined && input.ImportMode !== null && { ImportMode: input.ImportMode }),
    ...(input.LogicalTableMap !== undefined &&
      input.LogicalTableMap !== null && {
        LogicalTableMap: serializeAws_restJson1LogicalTableMap(input.LogicalTableMap, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && {
        Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
      }),
    ...(input.PhysicalTableMap !== undefined &&
      input.PhysicalTableMap !== null && {
        PhysicalTableMap: serializeAws_restJson1PhysicalTableMap(input.PhysicalTableMap, context),
      }),
    ...(input.RowLevelPermissionDataSet !== undefined &&
      input.RowLevelPermissionDataSet !== null && {
        RowLevelPermissionDataSet: serializeAws_restJson1RowLevelPermissionDataSet(
          input.RowLevelPermissionDataSet,
          context
        ),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/data-sources";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Credentials !== undefined &&
      input.Credentials !== null && {
        Credentials: serializeAws_restJson1DataSourceCredentials(input.Credentials, context),
      }),
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceParameters !== undefined &&
      input.DataSourceParameters !== null && {
        DataSourceParameters: serializeAws_restJson1DataSourceParameters(input.DataSourceParameters, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && {
        Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
      }),
    ...(input.SslProperties !== undefined &&
      input.SslProperties !== null && {
        SslProperties: serializeAws_restJson1SslProperties(input.SslProperties, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.VpcConnectionProperties !== undefined &&
      input.VpcConnectionProperties !== null && {
        VpcConnectionProperties: serializeAws_restJson1VpcConnectionProperties(input.VpcConnectionProperties, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}";
  if (input.MemberName !== undefined) {
    const labelValue: string = input.MemberName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberName.");
    }
    resolvedPath = resolvedPath.replace("{MemberName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberName.");
  }
  if (input.GroupName !== undefined) {
    const labelValue: string = input.GroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AssignmentName !== undefined &&
      input.AssignmentName !== null && { AssignmentName: input.AssignmentName }),
    ...(input.AssignmentStatus !== undefined &&
      input.AssignmentStatus !== null && { AssignmentStatus: input.AssignmentStatus }),
    ...(input.Identities !== undefined &&
      input.Identities !== null && { Identities: serializeAws_restJson1IdentityMap(input.Identities, context) }),
    ...(input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.IngestionId !== undefined) {
    const labelValue: string = input.IngestionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IngestionId.");
    }
    resolvedPath = resolvedPath.replace("{IngestionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IngestionId.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityStore !== undefined && input.IdentityStore !== null && { IdentityStore: input.IdentityStore }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && {
        Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
      }),
    ...(input.SourceEntity !== undefined &&
      input.SourceEntity !== null && {
        SourceEntity: serializeAws_restJson1TemplateSourceEntity(input.SourceEntity, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VersionDescription !== undefined &&
      input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TemplateVersionNumber !== undefined &&
      input.TemplateVersionNumber !== null && { TemplateVersionNumber: input.TemplateVersionNumber }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BaseThemeId !== undefined && input.BaseThemeId !== null && { BaseThemeId: input.BaseThemeId }),
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_restJson1ThemeConfiguration(input.Configuration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && {
        Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VersionDescription !== undefined &&
      input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ThemeVersionNumber !== undefined &&
      input.ThemeVersionNumber !== null && { ThemeVersionNumber: input.ThemeVersionNumber }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/customizations";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.Namespace !== undefined && { namespace: input.Namespace }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteAnalysisCommand = async (
  input: DeleteAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AnalysisId !== undefined) {
    const labelValue: string = input.AnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{AnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AnalysisId.");
  }
  const query: any = {
    ...(input.RecoveryWindowInDays !== undefined && {
      "recovery-window-in-days": input.RecoveryWindowInDays.toString(),
    }),
    ...(input.ForceDeleteWithoutRecovery !== undefined && {
      "force-delete-without-recovery": input.ForceDeleteWithoutRecovery.toString(),
    }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSourceId !== undefined) {
    const labelValue: string = input.DataSourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSourceId.");
    }
    resolvedPath = resolvedPath.replace("{DataSourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSourceId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
  if (input.GroupName !== undefined) {
    const labelValue: string = input.GroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}";
  if (input.MemberName !== undefined) {
    const labelValue: string = input.MemberName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberName.");
    }
    resolvedPath = resolvedPath.replace("{MemberName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberName.");
  }
  if (input.GroupName !== undefined) {
    const labelValue: string = input.GroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AssignmentName !== undefined) {
    const labelValue: string = input.AssignmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssignmentName.");
    }
    resolvedPath = resolvedPath.replace("{AssignmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssignmentName.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
  if (input.UserName !== undefined) {
    const labelValue: string = input.UserName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserName.");
    }
    resolvedPath = resolvedPath.replace("{UserName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}";
  if (input.PrincipalId !== undefined) {
    const labelValue: string = input.PrincipalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PrincipalId.");
    }
    resolvedPath = resolvedPath.replace("{PrincipalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PrincipalId.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/customizations";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.Namespace !== undefined && { namespace: input.Namespace }),
    ...(input.Resolved !== undefined && { resolved: input.Resolved.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/settings";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AnalysisId !== undefined) {
    const labelValue: string = input.AnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{AnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AnalysisId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AnalysisId !== undefined) {
    const labelValue: string = input.AnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{AnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AnalysisId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
    ...(input.AliasName !== undefined && { "alias-name": input.AliasName }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSourceId !== undefined) {
    const labelValue: string = input.DataSourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSourceId.");
    }
    resolvedPath = resolvedPath.replace("{DataSourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSourceId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSourceId !== undefined) {
    const labelValue: string = input.DataSourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSourceId.");
    }
    resolvedPath = resolvedPath.replace("{DataSourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSourceId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
  if (input.GroupName !== undefined) {
    const labelValue: string = input.GroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AssignmentName !== undefined) {
    const labelValue: string = input.AssignmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssignmentName.");
    }
    resolvedPath = resolvedPath.replace("{AssignmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssignmentName.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.IngestionId !== undefined) {
    const labelValue: string = input.IngestionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IngestionId.");
    }
    resolvedPath = resolvedPath.replace("{IngestionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IngestionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
    ...(input.AliasName !== undefined && { "alias-name": input.AliasName }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  const query: any = {
    ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
    ...(input.AliasName !== undefined && { "alias-name": input.AliasName }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
  if (input.UserName !== undefined) {
    const labelValue: string = input.UserName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserName.");
    }
    resolvedPath = resolvedPath.replace("{UserName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetDashboardEmbedUrlCommand = async (
  input: GetDashboardEmbedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  const query: any = {
    ...(input.IdentityType !== undefined && { "creds-type": input.IdentityType }),
    ...(input.SessionLifetimeInMinutes !== undefined && {
      "session-lifetime": input.SessionLifetimeInMinutes.toString(),
    }),
    ...(input.UndoRedoDisabled !== undefined && { "undo-redo-disabled": input.UndoRedoDisabled.toString() }),
    ...(input.ResetDisabled !== undefined && { "reset-disabled": input.ResetDisabled.toString() }),
    ...(input.StatePersistenceEnabled !== undefined && {
      "state-persistence-enabled": input.StatePersistenceEnabled.toString(),
    }),
    ...(input.UserArn !== undefined && { "user-arn": input.UserArn }),
    ...(input.Namespace !== undefined && { namespace: input.Namespace }),
    ...(input.AdditionalDashboardIds !== undefined && {
      "additional-dashboard-ids": (input.AdditionalDashboardIds || []).map((_entry) => _entry),
    }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/session-embed-url";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.EntryPoint !== undefined && { "entry-point": input.EntryPoint }),
    ...(input.SessionLifetimeInMinutes !== undefined && {
      "session-lifetime": input.SessionLifetimeInMinutes.toString(),
    }),
    ...(input.UserArn !== undefined && { "user-arn": input.UserArn }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/analyses";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sources";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members";
  if (input.GroupName !== undefined) {
    const labelValue: string = input.GroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.AssignmentStatus !== undefined &&
      input.AssignmentStatus !== null && { AssignmentStatus: input.AssignmentStatus }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.UserName !== undefined) {
    const labelValue: string = input.UserName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserName.");
    }
    resolvedPath = resolvedPath.replace("{UserName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserName.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions";
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/resources/{ResourceArn}/tags";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-result": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-result": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/versions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-result": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.Type !== undefined && { type: input.Type }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/versions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups";
  if (input.UserName !== undefined) {
    const labelValue: string = input.UserName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserName.");
    }
    resolvedPath = resolvedPath.replace("{UserName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CustomPermissionsName !== undefined &&
      input.CustomPermissionsName !== null && { CustomPermissionsName: input.CustomPermissionsName }),
    ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
    ...(input.IamArn !== undefined && input.IamArn !== null && { IamArn: input.IamArn }),
    ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
    ...(input.SessionName !== undefined && input.SessionName !== null && { SessionName: input.SessionName }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    ...(input.UserRole !== undefined && input.UserRole !== null && { UserRole: input.UserRole }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/restore/analyses/{AnalysisId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AnalysisId !== undefined) {
    const labelValue: string = input.AnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{AnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AnalysisId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/search/analyses";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1AnalysisSearchFilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/search/dashboards";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1DashboardSearchFilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/resources/{ResourceArn}/tags";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/resources/{ResourceArn}/tags";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { keys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/customizations";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  const query: any = {
    ...(input.Namespace !== undefined && { namespace: input.Namespace }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.AccountCustomization !== undefined &&
      input.AccountCustomization !== null && {
        AccountCustomization: serializeAws_restJson1AccountCustomization(input.AccountCustomization, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/settings";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultNamespace !== undefined &&
      input.DefaultNamespace !== null && { DefaultNamespace: input.DefaultNamespace }),
    ...(input.NotificationEmail !== undefined &&
      input.NotificationEmail !== null && { NotificationEmail: input.NotificationEmail }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AnalysisId !== undefined) {
    const labelValue: string = input.AnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{AnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AnalysisId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.SourceEntity !== undefined &&
      input.SourceEntity !== null && {
        SourceEntity: serializeAws_restJson1AnalysisSourceEntity(input.SourceEntity, context),
      }),
    ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AnalysisId !== undefined) {
    const labelValue: string = input.AnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{AnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AnalysisId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions !== undefined &&
      input.GrantPermissions !== null && {
        GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
      }),
    ...(input.RevokePermissions !== undefined &&
      input.RevokePermissions !== null && {
        RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DashboardPublishOptions !== undefined &&
      input.DashboardPublishOptions !== null && {
        DashboardPublishOptions: serializeAws_restJson1DashboardPublishOptions(input.DashboardPublishOptions, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
    ...(input.SourceEntity !== undefined &&
      input.SourceEntity !== null && {
        SourceEntity: serializeAws_restJson1DashboardSourceEntity(input.SourceEntity, context),
      }),
    ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
    ...(input.VersionDescription !== undefined &&
      input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions !== undefined &&
      input.GrantPermissions !== null && {
        GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
      }),
    ...(input.RevokePermissions !== undefined &&
      input.RevokePermissions !== null && {
        RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DashboardId !== undefined) {
    const labelValue: string = input.DashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DashboardId.");
    }
    resolvedPath = resolvedPath.replace("{DashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DashboardId.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ColumnGroups !== undefined &&
      input.ColumnGroups !== null && {
        ColumnGroups: serializeAws_restJson1ColumnGroupList(input.ColumnGroups, context),
      }),
    ...(input.ColumnLevelPermissionRules !== undefined &&
      input.ColumnLevelPermissionRules !== null && {
        ColumnLevelPermissionRules: serializeAws_restJson1ColumnLevelPermissionRuleList(
          input.ColumnLevelPermissionRules,
          context
        ),
      }),
    ...(input.ImportMode !== undefined && input.ImportMode !== null && { ImportMode: input.ImportMode }),
    ...(input.LogicalTableMap !== undefined &&
      input.LogicalTableMap !== null && {
        LogicalTableMap: serializeAws_restJson1LogicalTableMap(input.LogicalTableMap, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PhysicalTableMap !== undefined &&
      input.PhysicalTableMap !== null && {
        PhysicalTableMap: serializeAws_restJson1PhysicalTableMap(input.PhysicalTableMap, context),
      }),
    ...(input.RowLevelPermissionDataSet !== undefined &&
      input.RowLevelPermissionDataSet !== null && {
        RowLevelPermissionDataSet: serializeAws_restJson1RowLevelPermissionDataSet(
          input.RowLevelPermissionDataSet,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSetId !== undefined) {
    const labelValue: string = input.DataSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSetId.");
    }
    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions !== undefined &&
      input.GrantPermissions !== null && {
        GrantPermissions: serializeAws_restJson1ResourcePermissionList(input.GrantPermissions, context),
      }),
    ...(input.RevokePermissions !== undefined &&
      input.RevokePermissions !== null && {
        RevokePermissions: serializeAws_restJson1ResourcePermissionList(input.RevokePermissions, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSourceId !== undefined) {
    const labelValue: string = input.DataSourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSourceId.");
    }
    resolvedPath = resolvedPath.replace("{DataSourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSourceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Credentials !== undefined &&
      input.Credentials !== null && {
        Credentials: serializeAws_restJson1DataSourceCredentials(input.Credentials, context),
      }),
    ...(input.DataSourceParameters !== undefined &&
      input.DataSourceParameters !== null && {
        DataSourceParameters: serializeAws_restJson1DataSourceParameters(input.DataSourceParameters, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SslProperties !== undefined &&
      input.SslProperties !== null && {
        SslProperties: serializeAws_restJson1SslProperties(input.SslProperties, context),
      }),
    ...(input.VpcConnectionProperties !== undefined &&
      input.VpcConnectionProperties !== null && {
        VpcConnectionProperties: serializeAws_restJson1VpcConnectionProperties(input.VpcConnectionProperties, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.DataSourceId !== undefined) {
    const labelValue: string = input.DataSourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DataSourceId.");
    }
    resolvedPath = resolvedPath.replace("{DataSourceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DataSourceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions !== undefined &&
      input.GrantPermissions !== null && {
        GrantPermissions: serializeAws_restJson1ResourcePermissionList(input.GrantPermissions, context),
      }),
    ...(input.RevokePermissions !== undefined &&
      input.RevokePermissions !== null && {
        RevokePermissions: serializeAws_restJson1ResourcePermissionList(input.RevokePermissions, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
  if (input.GroupName !== undefined) {
    const labelValue: string = input.GroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.AssignmentName !== undefined) {
    const labelValue: string = input.AssignmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssignmentName.");
    }
    resolvedPath = resolvedPath.replace("{AssignmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssignmentName.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AssignmentStatus !== undefined &&
      input.AssignmentStatus !== null && { AssignmentStatus: input.AssignmentStatus }),
    ...(input.Identities !== undefined &&
      input.Identities !== null && { Identities: serializeAws_restJson1IdentityMap(input.Identities, context) }),
    ...(input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SourceEntity !== undefined &&
      input.SourceEntity !== null && {
        SourceEntity: serializeAws_restJson1TemplateSourceEntity(input.SourceEntity, context),
      }),
    ...(input.VersionDescription !== undefined &&
      input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TemplateVersionNumber !== undefined &&
      input.TemplateVersionNumber !== null && { TemplateVersionNumber: input.TemplateVersionNumber }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions !== undefined &&
      input.GrantPermissions !== null && {
        GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
      }),
    ...(input.RevokePermissions !== undefined &&
      input.RevokePermissions !== null && {
        RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BaseThemeId !== undefined && input.BaseThemeId !== null && { BaseThemeId: input.BaseThemeId }),
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_restJson1ThemeConfiguration(input.Configuration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.VersionDescription !== undefined &&
      input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  if (input.AliasName !== undefined) {
    const labelValue: string = input.AliasName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AliasName.");
    }
    resolvedPath = resolvedPath.replace("{AliasName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AliasName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ThemeVersionNumber !== undefined &&
      input.ThemeVersionNumber !== null && { ThemeVersionNumber: input.ThemeVersionNumber }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions";
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.ThemeId !== undefined) {
    const labelValue: string = input.ThemeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ThemeId.");
    }
    resolvedPath = resolvedPath.replace("{ThemeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ThemeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GrantPermissions !== undefined &&
      input.GrantPermissions !== null && {
        GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
      }),
    ...(input.RevokePermissions !== undefined &&
      input.RevokePermissions !== null && {
        RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
  if (input.UserName !== undefined) {
    const labelValue: string = input.UserName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserName.");
    }
    resolvedPath = resolvedPath.replace("{UserName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserName.");
  }
  if (input.AwsAccountId !== undefined) {
    const labelValue: string = input.AwsAccountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
    }
    resolvedPath = resolvedPath.replace("{AwsAccountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AwsAccountId.");
  }
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CustomPermissionsName !== undefined &&
      input.CustomPermissionsName !== null && { CustomPermissionsName: input.CustomPermissionsName }),
    ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.UnapplyCustomPermissions !== undefined &&
      input.UnapplyCustomPermissions !== null && { UnapplyCustomPermissions: input.UnapplyCustomPermissions }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const contents: CancelIngestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    IngestionId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.IngestionId !== undefined && data.IngestionId !== null) {
    contents.IngestionId = data.IngestionId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccountCustomizationCommandError(output, context);
  }
  const contents: CreateAccountCustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountCustomization: undefined,
    Arn: undefined,
    AwsAccountId: undefined,
    Namespace: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountCustomization !== undefined && data.AccountCustomization !== null) {
    contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AwsAccountId !== undefined && data.AwsAccountId !== null) {
    contents.AwsAccountId = data.AwsAccountId;
  }
  if (data.Namespace !== undefined && data.Namespace !== null) {
    contents.Namespace = data.Namespace;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAnalysisCommandError(output, context);
  }
  const contents: CreateAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisId: undefined,
    Arn: undefined,
    CreationStatus: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
    contents.AnalysisId = data.AnalysisId;
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDashboardCommandError(output, context);
  }
  const contents: CreateDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationStatus: undefined,
    DashboardId: undefined,
    RequestId: undefined,
    Status: undefined,
    VersionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.DashboardId !== undefined && data.DashboardId !== null) {
    contents.DashboardId = data.DashboardId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.VersionArn !== undefined && data.VersionArn !== null) {
    contents.VersionArn = data.VersionArn;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSetCommandError(output, context);
  }
  const contents: CreateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    DataSetId: undefined,
    IngestionArn: undefined,
    IngestionId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.IngestionArn !== undefined && data.IngestionArn !== null) {
    contents.IngestionArn = data.IngestionArn;
  }
  if (data.IngestionId !== undefined && data.IngestionId !== null) {
    contents.IngestionId = data.IngestionId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSourceCommandError(output, context);
  }
  const contents: CreateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationStatus: undefined,
    DataSourceId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
    contents.DataSourceId = data.DataSourceId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupCommandError(output, context);
  }
  const contents: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Group: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupMembershipCommandError(output, context);
  }
  const contents: CreateGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    GroupMember: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.GroupMember !== undefined && data.GroupMember !== null) {
    contents.GroupMember = deserializeAws_restJson1GroupMember(data.GroupMember, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: CreateIAMPolicyAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    AssignmentId: undefined,
    AssignmentName: undefined,
    AssignmentStatus: undefined,
    Identities: undefined,
    PolicyArn: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AssignmentId !== undefined && data.AssignmentId !== null) {
    contents.AssignmentId = data.AssignmentId;
  }
  if (data.AssignmentName !== undefined && data.AssignmentName !== null) {
    contents.AssignmentName = data.AssignmentName;
  }
  if (data.AssignmentStatus !== undefined && data.AssignmentStatus !== null) {
    contents.AssignmentStatus = data.AssignmentStatus;
  }
  if (data.Identities !== undefined && data.Identities !== null) {
    contents.Identities = deserializeAws_restJson1IdentityMap(data.Identities, context);
  }
  if (data.PolicyArn !== undefined && data.PolicyArn !== null) {
    contents.PolicyArn = data.PolicyArn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIngestionCommandError(output, context);
  }
  const contents: CreateIngestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    IngestionId: undefined,
    IngestionStatus: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.IngestionId !== undefined && data.IngestionId !== null) {
    contents.IngestionId = data.IngestionId;
  }
  if (data.IngestionStatus !== undefined && data.IngestionStatus !== null) {
    contents.IngestionStatus = data.IngestionStatus;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNamespaceCommandError(output, context);
  }
  const contents: CreateNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CapacityRegion: undefined,
    CreationStatus: undefined,
    IdentityStore: undefined,
    Name: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CapacityRegion !== undefined && data.CapacityRegion !== null) {
    contents.CapacityRegion = data.CapacityRegion;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.IdentityStore !== undefined && data.IdentityStore !== null) {
    contents.IdentityStore = data.IdentityStore;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTemplateCommandError(output, context);
  }
  const contents: CreateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationStatus: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateId: undefined,
    VersionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = data.TemplateId;
  }
  if (data.VersionArn !== undefined && data.VersionArn !== null) {
    contents.VersionArn = data.VersionArn;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTemplateAliasCommandError(output, context);
  }
  const contents: CreateTemplateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    TemplateAlias: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateAlias !== undefined && data.TemplateAlias !== null) {
    contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateThemeCommandError(output, context);
  }
  const contents: CreateThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationStatus: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeId: undefined,
    VersionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeId !== undefined && data.ThemeId !== null) {
    contents.ThemeId = data.ThemeId;
  }
  if (data.VersionArn !== undefined && data.VersionArn !== null) {
    contents.VersionArn = data.VersionArn;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateThemeAliasCommandError(output, context);
  }
  const contents: CreateThemeAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    ThemeAlias: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeAlias !== undefined && data.ThemeAlias !== null) {
    contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccountCustomizationCommandError(output, context);
  }
  const contents: DeleteAccountCustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAnalysisCommandError(output, context);
  }
  const contents: DeleteAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisId: undefined,
    Arn: undefined,
    DeletionTime: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
    contents.AnalysisId = data.AnalysisId;
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.DeletionTime !== undefined && data.DeletionTime !== null) {
    contents.DeletionTime = new Date(Math.round(data.DeletionTime * 1000));
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDashboardCommandError(output, context);
  }
  const contents: DeleteDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    DashboardId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.DashboardId !== undefined && data.DashboardId !== null) {
    contents.DashboardId = data.DashboardId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSetCommandError(output, context);
  }
  const contents: DeleteDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    DataSetId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSourceCommandError(output, context);
  }
  const contents: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    DataSourceId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
    contents.DataSourceId = data.DataSourceId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupCommandError(output, context);
  }
  const contents: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupMembershipCommandError(output, context);
  }
  const contents: DeleteGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: DeleteIAMPolicyAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    AssignmentName: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AssignmentName !== undefined && data.AssignmentName !== null) {
    contents.AssignmentName = data.AssignmentName;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNamespaceCommandError(output, context);
  }
  const contents: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTemplateCommandError(output, context);
  }
  const contents: DeleteTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = data.TemplateId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTemplateAliasCommandError(output, context);
  }
  const contents: DeleteTemplateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    AliasName: undefined,
    Arn: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AliasName !== undefined && data.AliasName !== null) {
    contents.AliasName = data.AliasName;
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = data.TemplateId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteThemeCommandError(output, context);
  }
  const contents: DeleteThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeId !== undefined && data.ThemeId !== null) {
    contents.ThemeId = data.ThemeId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteThemeAliasCommandError(output, context);
  }
  const contents: DeleteThemeAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    AliasName: undefined,
    Arn: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AliasName !== undefined && data.AliasName !== null) {
    contents.AliasName = data.AliasName;
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeId !== undefined && data.ThemeId !== null) {
    contents.ThemeId = data.ThemeId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserCommandError(output, context);
  }
  const contents: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteUserByPrincipalIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserByPrincipalIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserByPrincipalIdCommandError(output, context);
  }
  const contents: DeleteUserByPrincipalIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteUserByPrincipalIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserByPrincipalIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountCustomizationCommandError(output, context);
  }
  const contents: DescribeAccountCustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountCustomization: undefined,
    Arn: undefined,
    AwsAccountId: undefined,
    Namespace: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountCustomization !== undefined && data.AccountCustomization !== null) {
    contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AwsAccountId !== undefined && data.AwsAccountId !== null) {
    contents.AwsAccountId = data.AwsAccountId;
  }
  if (data.Namespace !== undefined && data.Namespace !== null) {
    contents.Namespace = data.Namespace;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountSettingsCommandError(output, context);
  }
  const contents: DescribeAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountSettings: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountSettings !== undefined && data.AccountSettings !== null) {
    contents.AccountSettings = deserializeAws_restJson1AccountSettings(data.AccountSettings, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnalysisCommandError(output, context);
  }
  const contents: DescribeAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    Analysis: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Analysis !== undefined && data.Analysis !== null) {
    contents.Analysis = deserializeAws_restJson1Analysis(data.Analysis, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAnalysisPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnalysisPermissionsCommandError(output, context);
  }
  const contents: DescribeAnalysisPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisArn: undefined,
    AnalysisId: undefined,
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisArn !== undefined && data.AnalysisArn !== null) {
    contents.AnalysisArn = data.AnalysisArn;
  }
  if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
    contents.AnalysisId = data.AnalysisId;
  }
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAnalysisPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDashboardCommandError(output, context);
  }
  const contents: DescribeDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    Dashboard: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Dashboard !== undefined && data.Dashboard !== null) {
    contents.Dashboard = deserializeAws_restJson1Dashboard(data.Dashboard, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDashboardPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDashboardPermissionsCommandError(output, context);
  }
  const contents: DescribeDashboardPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DashboardArn: undefined,
    DashboardId: undefined,
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DashboardArn !== undefined && data.DashboardArn !== null) {
    contents.DashboardArn = data.DashboardArn;
  }
  if (data.DashboardId !== undefined && data.DashboardId !== null) {
    contents.DashboardId = data.DashboardId;
  }
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDashboardPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSetCommandError(output, context);
  }
  const contents: DescribeDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSet: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSet !== undefined && data.DataSet !== null) {
    contents.DataSet = deserializeAws_restJson1DataSet(data.DataSet, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDataSetPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSetPermissionsCommandError(output, context);
  }
  const contents: DescribeDataSetPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSetArn: undefined,
    DataSetId: undefined,
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSetArn !== undefined && data.DataSetArn !== null) {
    contents.DataSetArn = data.DataSetArn;
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDataSetPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSetPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSourceCommandError(output, context);
  }
  const contents: DescribeDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSource: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSource !== undefined && data.DataSource !== null) {
    contents.DataSource = deserializeAws_restJson1DataSource(data.DataSource, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDataSourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDataSourcePermissionsCommandError(output, context);
  }
  const contents: DescribeDataSourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSourceArn: undefined,
    DataSourceId: undefined,
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSourceArn !== undefined && data.DataSourceArn !== null) {
    contents.DataSourceArn = data.DataSourceArn;
  }
  if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
    contents.DataSourceId = data.DataSourceId;
  }
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDataSourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGroupCommandError(output, context);
  }
  const contents: DescribeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Group: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: DescribeIAMPolicyAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    IAMPolicyAssignment: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.IAMPolicyAssignment !== undefined && data.IAMPolicyAssignment !== null) {
    contents.IAMPolicyAssignment = deserializeAws_restJson1IAMPolicyAssignment(data.IAMPolicyAssignment, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIngestionCommandError(output, context);
  }
  const contents: DescribeIngestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Ingestion: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Ingestion !== undefined && data.Ingestion !== null) {
    contents.Ingestion = deserializeAws_restJson1Ingestion(data.Ingestion, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNamespaceCommandError(output, context);
  }
  const contents: DescribeNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Namespace: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Namespace !== undefined && data.Namespace !== null) {
    contents.Namespace = deserializeAws_restJson1NamespaceInfoV2(data.Namespace, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTemplateCommandError(output, context);
  }
  const contents: DescribeTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    Template: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.Template !== undefined && data.Template !== null) {
    contents.Template = deserializeAws_restJson1Template(data.Template, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTemplateAliasCommandError(output, context);
  }
  const contents: DescribeTemplateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    TemplateAlias: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateAlias !== undefined && data.TemplateAlias !== null) {
    contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeTemplatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTemplatePermissionsCommandError(output, context);
  }
  const contents: DescribeTemplatePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateArn: undefined,
    TemplateId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateArn !== undefined && data.TemplateArn !== null) {
    contents.TemplateArn = data.TemplateArn;
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = data.TemplateId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTemplatePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTemplatePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeThemeCommandError(output, context);
  }
  const contents: DescribeThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    Theme: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.Theme !== undefined && data.Theme !== null) {
    contents.Theme = deserializeAws_restJson1Theme(data.Theme, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeThemeAliasCommandError(output, context);
  }
  const contents: DescribeThemeAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    ThemeAlias: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeAlias !== undefined && data.ThemeAlias !== null) {
    contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeThemePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeThemePermissionsCommandError(output, context);
  }
  const contents: DescribeThemePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeArn: undefined,
    ThemeId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeArn !== undefined && data.ThemeArn !== null) {
    contents.ThemeArn = data.ThemeArn;
  }
  if (data.ThemeId !== undefined && data.ThemeId !== null) {
    contents.ThemeId = data.ThemeId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeThemePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThemePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUserCommandError(output, context);
  }
  const contents: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    User: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDashboardEmbedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardEmbedUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDashboardEmbedUrlCommandError(output, context);
  }
  const contents: GetDashboardEmbedUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    EmbedUrl: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.EmbedUrl !== undefined && data.EmbedUrl !== null) {
    contents.EmbedUrl = data.EmbedUrl;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDashboardEmbedUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardEmbedUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DomainNotWhitelistedException":
    case "com.amazonaws.quicksight#DomainNotWhitelistedException":
      response = {
        ...(await deserializeAws_restJson1DomainNotWhitelistedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdentityTypeNotSupportedException":
    case "com.amazonaws.quicksight#IdentityTypeNotSupportedException":
      response = {
        ...(await deserializeAws_restJson1IdentityTypeNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QuickSightUserNotFoundException":
    case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
      response = {
        ...(await deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SessionLifetimeInMinutesInvalidException":
    case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
      response = {
        ...(await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedPricingPlanException":
    case "com.amazonaws.quicksight#UnsupportedPricingPlanException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSessionEmbedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionEmbedUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSessionEmbedUrlCommandError(output, context);
  }
  const contents: GetSessionEmbedUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    EmbedUrl: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.EmbedUrl !== undefined && data.EmbedUrl !== null) {
    contents.EmbedUrl = data.EmbedUrl;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSessionEmbedUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionEmbedUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QuickSightUserNotFoundException":
    case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
      response = {
        ...(await deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SessionLifetimeInMinutesInvalidException":
    case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
      response = {
        ...(await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAnalysesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnalysesCommandError(output, context);
  }
  const contents: ListAnalysesCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisSummaryList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisSummaryList !== undefined && data.AnalysisSummaryList !== null) {
    contents.AnalysisSummaryList = deserializeAws_restJson1AnalysisSummaryList(data.AnalysisSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnalysesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDashboardsCommandError(output, context);
  }
  const contents: ListDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DashboardSummaryList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DashboardSummaryList !== undefined && data.DashboardSummaryList !== null) {
    contents.DashboardSummaryList = deserializeAws_restJson1DashboardSummaryList(data.DashboardSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDashboardVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDashboardVersionsCommandError(output, context);
  }
  const contents: ListDashboardVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DashboardVersionSummaryList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DashboardVersionSummaryList !== undefined && data.DashboardVersionSummaryList !== null) {
    contents.DashboardVersionSummaryList = deserializeAws_restJson1DashboardVersionSummaryList(
      data.DashboardVersionSummaryList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDashboardVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDataSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSetsCommandError(output, context);
  }
  const contents: ListDataSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSetSummaries: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSetSummaries !== undefined && data.DataSetSummaries !== null) {
    contents.DataSetSummaries = deserializeAws_restJson1DataSetSummaryList(data.DataSetSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSourcesCommandError(output, context);
  }
  const contents: ListDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSources: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSources !== undefined && data.DataSources !== null) {
    contents.DataSources = deserializeAws_restJson1DataSourceList(data.DataSources, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListGroupMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupMembershipsCommandError(output, context);
  }
  const contents: ListGroupMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    GroupMemberList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.GroupMemberList !== undefined && data.GroupMemberList !== null) {
    contents.GroupMemberList = deserializeAws_restJson1GroupMemberList(data.GroupMemberList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGroupMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupsCommandError(output, context);
  }
  const contents: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    GroupList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.GroupList !== undefined && data.GroupList !== null) {
    contents.GroupList = deserializeAws_restJson1GroupList(data.GroupList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListIAMPolicyAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIAMPolicyAssignmentsCommandError(output, context);
  }
  const contents: ListIAMPolicyAssignmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    IAMPolicyAssignments: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.IAMPolicyAssignments !== undefined && data.IAMPolicyAssignments !== null) {
    contents.IAMPolicyAssignments = deserializeAws_restJson1IAMPolicyAssignmentSummaryList(
      data.IAMPolicyAssignments,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIAMPolicyAssignmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommandError(output, context);
  }
  const contents: ListIAMPolicyAssignmentsForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ActiveAssignments: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ActiveAssignments !== undefined && data.ActiveAssignments !== null) {
    contents.ActiveAssignments = deserializeAws_restJson1ActiveIAMPolicyAssignmentList(data.ActiveAssignments, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListIngestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIngestionsCommandError(output, context);
  }
  const contents: ListIngestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Ingestions: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Ingestions !== undefined && data.Ingestions !== null) {
    contents.Ingestions = deserializeAws_restJson1Ingestions(data.Ingestions, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIngestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNamespacesCommandError(output, context);
  }
  const contents: ListNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Namespaces: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Namespaces !== undefined && data.Namespaces !== null) {
    contents.Namespaces = deserializeAws_restJson1Namespaces(data.Namespaces, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTemplateAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateAliasesCommandError(output, context);
  }
  const contents: ListTemplateAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateAliasList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateAliasList !== undefined && data.TemplateAliasList !== null) {
    contents.TemplateAliasList = deserializeAws_restJson1TemplateAliasList(data.TemplateAliasList, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTemplateAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplatesCommandError(output, context);
  }
  const contents: ListTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateSummaryList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateSummaryList !== undefined && data.TemplateSummaryList !== null) {
    contents.TemplateSummaryList = deserializeAws_restJson1TemplateSummaryList(data.TemplateSummaryList, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateVersionsCommandError(output, context);
  }
  const contents: ListTemplateVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateVersionSummaryList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateVersionSummaryList !== undefined && data.TemplateVersionSummaryList !== null) {
    contents.TemplateVersionSummaryList = deserializeAws_restJson1TemplateVersionSummaryList(
      data.TemplateVersionSummaryList,
      context
    );
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTemplateVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListThemeAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThemeAliasesCommandError(output, context);
  }
  const contents: ListThemeAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeAliasList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeAliasList !== undefined && data.ThemeAliasList !== null) {
    contents.ThemeAliasList = deserializeAws_restJson1ThemeAliasList(data.ThemeAliasList, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListThemeAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListThemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThemesCommandError(output, context);
  }
  const contents: ListThemesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeSummaryList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeSummaryList !== undefined && data.ThemeSummaryList !== null) {
    contents.ThemeSummaryList = deserializeAws_restJson1ThemeSummaryList(data.ThemeSummaryList, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListThemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListThemeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThemeVersionsCommandError(output, context);
  }
  const contents: ListThemeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeVersionSummaryList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeVersionSummaryList !== undefined && data.ThemeVersionSummaryList !== null) {
    contents.ThemeVersionSummaryList = deserializeAws_restJson1ThemeVersionSummaryList(
      data.ThemeVersionSummaryList,
      context
    );
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListThemeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListUserGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUserGroupsCommandError(output, context);
  }
  const contents: ListUserGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    GroupList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.GroupList !== undefined && data.GroupList !== null) {
    contents.GroupList = deserializeAws_restJson1GroupList(data.GroupList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListUserGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsersCommandError(output, context);
  }
  const contents: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
    UserList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.UserList !== undefined && data.UserList !== null) {
    contents.UserList = deserializeAws_restJson1UserList(data.UserList, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RegisterUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterUserCommandError(output, context);
  }
  const contents: RegisterUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    User: undefined,
    UserInvitationUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  if (data.UserInvitationUrl !== undefined && data.UserInvitationUrl !== null) {
    contents.UserInvitationUrl = data.UserInvitationUrl;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RestoreAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestoreAnalysisCommandError(output, context);
  }
  const contents: RestoreAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisId: undefined,
    Arn: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
    contents.AnalysisId = data.AnalysisId;
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RestoreAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SearchAnalysesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAnalysesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchAnalysesCommandError(output, context);
  }
  const contents: SearchAnalysesCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisSummaryList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisSummaryList !== undefined && data.AnalysisSummaryList !== null) {
    contents.AnalysisSummaryList = deserializeAws_restJson1AnalysisSummaryList(data.AnalysisSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchAnalysesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAnalysesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SearchDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchDashboardsCommandError(output, context);
  }
  const contents: SearchDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DashboardSummaryList: undefined,
    NextToken: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DashboardSummaryList !== undefined && data.DashboardSummaryList !== null) {
    contents.DashboardSummaryList = deserializeAws_restJson1DashboardSummaryList(data.DashboardSummaryList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.quicksight#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAccountCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCustomizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountCustomizationCommandError(output, context);
  }
  const contents: UpdateAccountCustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountCustomization: undefined,
    Arn: undefined,
    AwsAccountId: undefined,
    Namespace: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountCustomization !== undefined && data.AccountCustomization !== null) {
    contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.AwsAccountId !== undefined && data.AwsAccountId !== null) {
    contents.AwsAccountId = data.AwsAccountId;
  }
  if (data.Namespace !== undefined && data.Namespace !== null) {
    contents.Namespace = data.Namespace;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAccountCustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCustomizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountSettingsCommandError(output, context);
  }
  const contents: UpdateAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAnalysisCommandError(output, context);
  }
  const contents: UpdateAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisId: undefined,
    Arn: undefined,
    RequestId: undefined,
    Status: undefined,
    UpdateStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
    contents.AnalysisId = data.AnalysisId;
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.UpdateStatus !== undefined && data.UpdateStatus !== null) {
    contents.UpdateStatus = data.UpdateStatus;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAnalysisPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAnalysisPermissionsCommandError(output, context);
  }
  const contents: UpdateAnalysisPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalysisArn: undefined,
    AnalysisId: undefined,
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalysisArn !== undefined && data.AnalysisArn !== null) {
    contents.AnalysisArn = data.AnalysisArn;
  }
  if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
    contents.AnalysisId = data.AnalysisId;
  }
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAnalysisPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDashboardCommandError(output, context);
  }
  const contents: UpdateDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationStatus: undefined,
    DashboardId: undefined,
    RequestId: undefined,
    Status: undefined,
    VersionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.DashboardId !== undefined && data.DashboardId !== null) {
    contents.DashboardId = data.DashboardId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.VersionArn !== undefined && data.VersionArn !== null) {
    contents.VersionArn = data.VersionArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDashboardPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDashboardPermissionsCommandError(output, context);
  }
  const contents: UpdateDashboardPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DashboardArn: undefined,
    DashboardId: undefined,
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DashboardArn !== undefined && data.DashboardArn !== null) {
    contents.DashboardArn = data.DashboardArn;
  }
  if (data.DashboardId !== undefined && data.DashboardId !== null) {
    contents.DashboardId = data.DashboardId;
  }
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDashboardPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDashboardPublishedVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPublishedVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDashboardPublishedVersionCommandError(output, context);
  }
  const contents: UpdateDashboardPublishedVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    DashboardArn: undefined,
    DashboardId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DashboardArn !== undefined && data.DashboardArn !== null) {
    contents.DashboardArn = data.DashboardArn;
  }
  if (data.DashboardId !== undefined && data.DashboardId !== null) {
    contents.DashboardId = data.DashboardId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDashboardPublishedVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardPublishedVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDataSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSetCommandError(output, context);
  }
  const contents: UpdateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    DataSetId: undefined,
    IngestionArn: undefined,
    IngestionId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.IngestionArn !== undefined && data.IngestionArn !== null) {
    contents.IngestionArn = data.IngestionArn;
  }
  if (data.IngestionId !== undefined && data.IngestionId !== null) {
    contents.IngestionId = data.IngestionId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDataSetPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSetPermissionsCommandError(output, context);
  }
  const contents: UpdateDataSetPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSetArn: undefined,
    DataSetId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSetArn !== undefined && data.DataSetArn !== null) {
    contents.DataSetArn = data.DataSetArn;
  }
  if (data.DataSetId !== undefined && data.DataSetId !== null) {
    contents.DataSetId = data.DataSetId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataSetPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSetPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSourceCommandError(output, context);
  }
  const contents: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    DataSourceId: undefined,
    RequestId: undefined,
    Status: undefined,
    UpdateStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
    contents.DataSourceId = data.DataSourceId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.UpdateStatus !== undefined && data.UpdateStatus !== null) {
    contents.UpdateStatus = data.UpdateStatus;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDataSourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSourcePermissionsCommandError(output, context);
  }
  const contents: UpdateDataSourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataSourceArn: undefined,
    DataSourceId: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSourceArn !== undefined && data.DataSourceArn !== null) {
    contents.DataSourceArn = data.DataSourceArn;
  }
  if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
    contents.DataSourceId = data.DataSourceId;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataSourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupCommandError(output, context);
  }
  const contents: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Group: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIAMPolicyAssignmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIAMPolicyAssignmentCommandError(output, context);
  }
  const contents: UpdateIAMPolicyAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    AssignmentId: undefined,
    AssignmentName: undefined,
    AssignmentStatus: undefined,
    Identities: undefined,
    PolicyArn: undefined,
    RequestId: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AssignmentId !== undefined && data.AssignmentId !== null) {
    contents.AssignmentId = data.AssignmentId;
  }
  if (data.AssignmentName !== undefined && data.AssignmentName !== null) {
    contents.AssignmentName = data.AssignmentName;
  }
  if (data.AssignmentStatus !== undefined && data.AssignmentStatus !== null) {
    contents.AssignmentStatus = data.AssignmentStatus;
  }
  if (data.Identities !== undefined && data.Identities !== null) {
    contents.Identities = deserializeAws_restJson1IdentityMap(data.Identities, context);
  }
  if (data.PolicyArn !== undefined && data.PolicyArn !== null) {
    contents.PolicyArn = data.PolicyArn;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateIAMPolicyAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIAMPolicyAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentUpdatingException":
    case "com.amazonaws.quicksight#ConcurrentUpdatingException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplateCommandError(output, context);
  }
  const contents: UpdateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationStatus: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateId: undefined,
    VersionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = data.TemplateId;
  }
  if (data.VersionArn !== undefined && data.VersionArn !== null) {
    contents.VersionArn = data.VersionArn;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateTemplateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplateAliasCommandError(output, context);
  }
  const contents: UpdateTemplateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    TemplateAlias: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateAlias !== undefined && data.TemplateAlias !== null) {
    contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTemplateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateTemplatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplatePermissionsCommandError(output, context);
  }
  const contents: UpdateTemplatePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
    TemplateArn: undefined,
    TemplateId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.TemplateArn !== undefined && data.TemplateArn !== null) {
    contents.TemplateArn = data.TemplateArn;
  }
  if (data.TemplateId !== undefined && data.TemplateId !== null) {
    contents.TemplateId = data.TemplateId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTemplatePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplatePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThemeCommandError(output, context);
  }
  const contents: UpdateThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationStatus: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeId: undefined,
    VersionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
    contents.CreationStatus = data.CreationStatus;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeId !== undefined && data.ThemeId !== null) {
    contents.ThemeId = data.ThemeId;
  }
  if (data.VersionArn !== undefined && data.VersionArn !== null) {
    contents.VersionArn = data.VersionArn;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.quicksight#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateThemeAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThemeAliasCommandError(output, context);
  }
  const contents: UpdateThemeAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    ThemeAlias: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeAlias !== undefined && data.ThemeAlias !== null) {
    contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateThemeAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.quicksight#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.quicksight#ResourceExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateThemePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThemePermissionsCommandError(output, context);
  }
  const contents: UpdateThemePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Permissions: undefined,
    RequestId: undefined,
    Status: undefined,
    ThemeArn: undefined,
    ThemeId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ThemeArn !== undefined && data.ThemeArn !== null) {
    contents.ThemeArn = data.ThemeArn;
  }
  if (data.ThemeId !== undefined && data.ThemeId !== null) {
    contents.ThemeId = data.ThemeId;
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateThemePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedUserEditionException":
    case "com.amazonaws.quicksight#UnsupportedUserEditionException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserCommandError(output, context);
  }
  const contents: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestId: undefined,
    Status: undefined,
    User: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.quicksight#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.quicksight#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.quicksight#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.quicksight#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.quicksight#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.quicksight#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.quicksight#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1ConcurrentUpdatingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentUpdatingException> => {
  const contents: ConcurrentUpdatingException = {
    name: "ConcurrentUpdatingException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1DomainNotWhitelistedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainNotWhitelistedException> => {
  const contents: DomainNotWhitelistedException = {
    name: "DomainNotWhitelistedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1IdentityTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdentityTypeNotSupportedException> => {
  const contents: IdentityTypeNotSupportedException = {
    name: "IdentityTypeNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1PreconditionNotMetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const contents: PreconditionNotMetException = {
    name: "PreconditionNotMetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QuickSightUserNotFoundException> => {
  const contents: QuickSightUserNotFoundException = {
    name: "QuickSightUserNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const contents: ResourceExistsException = {
    name: "ResourceExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionLifetimeInMinutesInvalidException> => {
  const contents: SessionLifetimeInMinutesInvalidException = {
    name: "SessionLifetimeInMinutesInvalidException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPricingPlanException> => {
  const contents: UnsupportedPricingPlanException = {
    name: "UnsupportedPricingPlanException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedUserEditionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedUserEditionException> => {
  const contents: UnsupportedUserEditionException = {
    name: "UnsupportedUserEditionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = data.RequestId;
  }
  return contents;
};

const serializeAws_restJson1AccountCustomization = (input: AccountCustomization, context: __SerdeContext): any => {
  return {
    ...(input.DefaultTheme !== undefined && input.DefaultTheme !== null && { DefaultTheme: input.DefaultTheme }),
  };
};

const serializeAws_restJson1ActionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AdHocFilteringOption = (input: AdHocFilteringOption, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityStatus !== undefined &&
      input.AvailabilityStatus !== null && { AvailabilityStatus: input.AvailabilityStatus }),
  };
};

const serializeAws_restJson1AmazonElasticsearchParameters = (
  input: AmazonElasticsearchParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
  };
};

const serializeAws_restJson1AnalysisSearchFilter = (input: AnalysisSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AnalysisSearchFilterList = (
  input: AnalysisSearchFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AnalysisSearchFilter(entry, context);
    });
};

const serializeAws_restJson1AnalysisSourceEntity = (input: AnalysisSourceEntity, context: __SerdeContext): any => {
  return {
    ...(input.SourceTemplate !== undefined &&
      input.SourceTemplate !== null && {
        SourceTemplate: serializeAws_restJson1AnalysisSourceTemplate(input.SourceTemplate, context),
      }),
  };
};

const serializeAws_restJson1AnalysisSourceTemplate = (input: AnalysisSourceTemplate, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.DataSetReferences !== undefined &&
      input.DataSetReferences !== null && {
        DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
      }),
  };
};

const serializeAws_restJson1AthenaParameters = (input: AthenaParameters, context: __SerdeContext): any => {
  return {
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_restJson1AuroraParameters = (input: AuroraParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AuroraPostgreSqlParameters = (
  input: AuroraPostgreSqlParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AwsIotAnalyticsParameters = (
  input: AwsIotAnalyticsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSetName !== undefined && input.DataSetName !== null && { DataSetName: input.DataSetName }),
  };
};

const serializeAws_restJson1BorderStyle = (input: BorderStyle, context: __SerdeContext): any => {
  return {
    ...(input.Show !== undefined && input.Show !== null && { Show: input.Show }),
  };
};

const serializeAws_restJson1CalculatedColumn = (input: CalculatedColumn, context: __SerdeContext): any => {
  return {
    ...(input.ColumnId !== undefined && input.ColumnId !== null && { ColumnId: input.ColumnId }),
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
  };
};

const serializeAws_restJson1CalculatedColumnList = (input: CalculatedColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CalculatedColumn(entry, context);
    });
};

const serializeAws_restJson1CastColumnTypeOperation = (
  input: CastColumnTypeOperation,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.NewColumnType !== undefined && input.NewColumnType !== null && { NewColumnType: input.NewColumnType }),
  };
};

const serializeAws_restJson1ColorList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ColumnDescription = (input: ColumnDescription, context: __SerdeContext): any => {
  return {
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
  };
};

const serializeAws_restJson1ColumnGroup = (input: ColumnGroup, context: __SerdeContext): any => {
  return {
    ...(input.GeoSpatialColumnGroup !== undefined &&
      input.GeoSpatialColumnGroup !== null && {
        GeoSpatialColumnGroup: serializeAws_restJson1GeoSpatialColumnGroup(input.GeoSpatialColumnGroup, context),
      }),
  };
};

const serializeAws_restJson1ColumnGroupList = (input: ColumnGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ColumnGroup(entry, context);
    });
};

const serializeAws_restJson1ColumnLevelPermissionRule = (
  input: ColumnLevelPermissionRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColumnNames !== undefined &&
      input.ColumnNames !== null && { ColumnNames: serializeAws_restJson1ColumnNameList(input.ColumnNames, context) }),
    ...(input.Principals !== undefined &&
      input.Principals !== null && { Principals: serializeAws_restJson1PrincipalList(input.Principals, context) }),
  };
};

const serializeAws_restJson1ColumnLevelPermissionRuleList = (
  input: ColumnLevelPermissionRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ColumnLevelPermissionRule(entry, context);
    });
};

const serializeAws_restJson1ColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ColumnTag = (input: ColumnTag, context: __SerdeContext): any => {
  return {
    ...(input.ColumnDescription !== undefined &&
      input.ColumnDescription !== null && {
        ColumnDescription: serializeAws_restJson1ColumnDescription(input.ColumnDescription, context),
      }),
    ...(input.ColumnGeographicRole !== undefined &&
      input.ColumnGeographicRole !== null && { ColumnGeographicRole: input.ColumnGeographicRole }),
  };
};

const serializeAws_restJson1ColumnTagList = (input: ColumnTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ColumnTag(entry, context);
    });
};

const serializeAws_restJson1CreateColumnsOperation = (input: CreateColumnsOperation, context: __SerdeContext): any => {
  return {
    ...(input.Columns !== undefined &&
      input.Columns !== null && { Columns: serializeAws_restJson1CalculatedColumnList(input.Columns, context) }),
  };
};

const serializeAws_restJson1CredentialPair = (input: CredentialPair, context: __SerdeContext): any => {
  return {
    ...(input.AlternateDataSourceParameters !== undefined &&
      input.AlternateDataSourceParameters !== null && {
        AlternateDataSourceParameters: serializeAws_restJson1DataSourceParametersList(
          input.AlternateDataSourceParameters,
          context
        ),
      }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
  };
};

const serializeAws_restJson1CustomSql = (input: CustomSql, context: __SerdeContext): any => {
  return {
    ...(input.Columns !== undefined &&
      input.Columns !== null && { Columns: serializeAws_restJson1InputColumnList(input.Columns, context) }),
    ...(input.DataSourceArn !== undefined && input.DataSourceArn !== null && { DataSourceArn: input.DataSourceArn }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SqlQuery !== undefined && input.SqlQuery !== null && { SqlQuery: input.SqlQuery }),
  };
};

const serializeAws_restJson1DashboardPublishOptions = (
  input: DashboardPublishOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdHocFilteringOption !== undefined &&
      input.AdHocFilteringOption !== null && {
        AdHocFilteringOption: serializeAws_restJson1AdHocFilteringOption(input.AdHocFilteringOption, context),
      }),
    ...(input.ExportToCSVOption !== undefined &&
      input.ExportToCSVOption !== null && {
        ExportToCSVOption: serializeAws_restJson1ExportToCSVOption(input.ExportToCSVOption, context),
      }),
    ...(input.SheetControlsOption !== undefined &&
      input.SheetControlsOption !== null && {
        SheetControlsOption: serializeAws_restJson1SheetControlsOption(input.SheetControlsOption, context),
      }),
  };
};

const serializeAws_restJson1DashboardSearchFilter = (input: DashboardSearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1DashboardSearchFilterList = (
  input: DashboardSearchFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DashboardSearchFilter(entry, context);
    });
};

const serializeAws_restJson1DashboardSourceEntity = (input: DashboardSourceEntity, context: __SerdeContext): any => {
  return {
    ...(input.SourceTemplate !== undefined &&
      input.SourceTemplate !== null && {
        SourceTemplate: serializeAws_restJson1DashboardSourceTemplate(input.SourceTemplate, context),
      }),
  };
};

const serializeAws_restJson1DashboardSourceTemplate = (
  input: DashboardSourceTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.DataSetReferences !== undefined &&
      input.DataSetReferences !== null && {
        DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
      }),
  };
};

const serializeAws_restJson1DataColorPalette = (input: DataColorPalette, context: __SerdeContext): any => {
  return {
    ...(input.Colors !== undefined &&
      input.Colors !== null && { Colors: serializeAws_restJson1ColorList(input.Colors, context) }),
    ...(input.EmptyFillColor !== undefined &&
      input.EmptyFillColor !== null && { EmptyFillColor: input.EmptyFillColor }),
    ...(input.MinMaxGradient !== undefined &&
      input.MinMaxGradient !== null && {
        MinMaxGradient: serializeAws_restJson1ColorList(input.MinMaxGradient, context),
      }),
  };
};

const serializeAws_restJson1DataSetReference = (input: DataSetReference, context: __SerdeContext): any => {
  return {
    ...(input.DataSetArn !== undefined && input.DataSetArn !== null && { DataSetArn: input.DataSetArn }),
    ...(input.DataSetPlaceholder !== undefined &&
      input.DataSetPlaceholder !== null && { DataSetPlaceholder: input.DataSetPlaceholder }),
  };
};

const serializeAws_restJson1DataSetReferenceList = (input: DataSetReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataSetReference(entry, context);
    });
};

const serializeAws_restJson1DataSourceCredentials = (input: DataSourceCredentials, context: __SerdeContext): any => {
  return {
    ...(input.CopySourceArn !== undefined && input.CopySourceArn !== null && { CopySourceArn: input.CopySourceArn }),
    ...(input.CredentialPair !== undefined &&
      input.CredentialPair !== null && {
        CredentialPair: serializeAws_restJson1CredentialPair(input.CredentialPair, context),
      }),
  };
};

const serializeAws_restJson1DataSourceParameters = (input: DataSourceParameters, context: __SerdeContext): any => {
  return DataSourceParameters.visit(input, {
    AmazonElasticsearchParameters: (value) => ({
      AmazonElasticsearchParameters: serializeAws_restJson1AmazonElasticsearchParameters(value, context),
    }),
    AthenaParameters: (value) => ({ AthenaParameters: serializeAws_restJson1AthenaParameters(value, context) }),
    AuroraParameters: (value) => ({ AuroraParameters: serializeAws_restJson1AuroraParameters(value, context) }),
    AuroraPostgreSqlParameters: (value) => ({
      AuroraPostgreSqlParameters: serializeAws_restJson1AuroraPostgreSqlParameters(value, context),
    }),
    AwsIotAnalyticsParameters: (value) => ({
      AwsIotAnalyticsParameters: serializeAws_restJson1AwsIotAnalyticsParameters(value, context),
    }),
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataSourceParameters(entry, context);
    });
};

const serializeAws_restJson1DateTimeParameter = (input: DateTimeParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1TimestampList(input.Values, context) }),
  };
};

const serializeAws_restJson1DateTimeParameterList = (input: DateTimeParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DateTimeParameter(entry, context);
    });
};

const serializeAws_restJson1DecimalParameter = (input: DecimalParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1DoubleList(input.Values, context) }),
  };
};

const serializeAws_restJson1DecimalParameterList = (input: DecimalParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DecimalParameter(entry, context);
    });
};

const serializeAws_restJson1DoubleList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ExportToCSVOption = (input: ExportToCSVOption, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityStatus !== undefined &&
      input.AvailabilityStatus !== null && { AvailabilityStatus: input.AvailabilityStatus }),
  };
};

const serializeAws_restJson1FilterOperation = (input: FilterOperation, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression !== undefined &&
      input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
  };
};

const serializeAws_restJson1GeoSpatialColumnGroup = (input: GeoSpatialColumnGroup, context: __SerdeContext): any => {
  return {
    ...(input.Columns !== undefined &&
      input.Columns !== null && { Columns: serializeAws_restJson1ColumnList(input.Columns, context) }),
    ...(input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1GutterStyle = (input: GutterStyle, context: __SerdeContext): any => {
  return {
    ...(input.Show !== undefined && input.Show !== null && { Show: input.Show }),
  };
};

const serializeAws_restJson1IdentityMap = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1IdentityNameList(value, context),
    };
  }, {});
};

const serializeAws_restJson1IdentityNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1InputColumn = (input: InputColumn, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1InputColumnList = (input: InputColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InputColumn(entry, context);
    });
};

const serializeAws_restJson1IntegerParameter = (input: IntegerParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1LongList(input.Values, context) }),
  };
};

const serializeAws_restJson1IntegerParameterList = (input: IntegerParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1IntegerParameter(entry, context);
    });
};

const serializeAws_restJson1JiraParameters = (input: JiraParameters, context: __SerdeContext): any => {
  return {
    ...(input.SiteBaseUrl !== undefined && input.SiteBaseUrl !== null && { SiteBaseUrl: input.SiteBaseUrl }),
  };
};

const serializeAws_restJson1JoinInstruction = (input: JoinInstruction, context: __SerdeContext): any => {
  return {
    ...(input.LeftJoinKeyProperties !== undefined &&
      input.LeftJoinKeyProperties !== null && {
        LeftJoinKeyProperties: serializeAws_restJson1JoinKeyProperties(input.LeftJoinKeyProperties, context),
      }),
    ...(input.LeftOperand !== undefined && input.LeftOperand !== null && { LeftOperand: input.LeftOperand }),
    ...(input.OnClause !== undefined && input.OnClause !== null && { OnClause: input.OnClause }),
    ...(input.RightJoinKeyProperties !== undefined &&
      input.RightJoinKeyProperties !== null && {
        RightJoinKeyProperties: serializeAws_restJson1JoinKeyProperties(input.RightJoinKeyProperties, context),
      }),
    ...(input.RightOperand !== undefined && input.RightOperand !== null && { RightOperand: input.RightOperand }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1JoinKeyProperties = (input: JoinKeyProperties, context: __SerdeContext): any => {
  return {
    ...(input.UniqueKey !== undefined && input.UniqueKey !== null && { UniqueKey: input.UniqueKey }),
  };
};

const serializeAws_restJson1LogicalTable = (input: LogicalTable, context: __SerdeContext): any => {
  return {
    ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
    ...(input.DataTransforms !== undefined &&
      input.DataTransforms !== null && {
        DataTransforms: serializeAws_restJson1TransformOperationList(input.DataTransforms, context),
      }),
    ...(input.Source !== undefined &&
      input.Source !== null && { Source: serializeAws_restJson1LogicalTableSource(input.Source, context) }),
  };
};

const serializeAws_restJson1LogicalTableMap = (
  input: { [key: string]: LogicalTable },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: LogicalTable }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1LogicalTable(value, context),
    };
  }, {});
};

const serializeAws_restJson1LogicalTableSource = (input: LogicalTableSource, context: __SerdeContext): any => {
  return {
    ...(input.JoinInstruction !== undefined &&
      input.JoinInstruction !== null && {
        JoinInstruction: serializeAws_restJson1JoinInstruction(input.JoinInstruction, context),
      }),
    ...(input.PhysicalTableId !== undefined &&
      input.PhysicalTableId !== null && { PhysicalTableId: input.PhysicalTableId }),
  };
};

const serializeAws_restJson1LongList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ManifestFileLocation = (input: ManifestFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_restJson1MarginStyle = (input: MarginStyle, context: __SerdeContext): any => {
  return {
    ...(input.Show !== undefined && input.Show !== null && { Show: input.Show }),
  };
};

const serializeAws_restJson1MariaDbParameters = (input: MariaDbParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1MySqlParameters = (input: MySqlParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1OracleParameters = (input: OracleParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1_Parameters = (input: _Parameters, context: __SerdeContext): any => {
  return {
    ...(input.DateTimeParameters !== undefined &&
      input.DateTimeParameters !== null && {
        DateTimeParameters: serializeAws_restJson1DateTimeParameterList(input.DateTimeParameters, context),
      }),
    ...(input.DecimalParameters !== undefined &&
      input.DecimalParameters !== null && {
        DecimalParameters: serializeAws_restJson1DecimalParameterList(input.DecimalParameters, context),
      }),
    ...(input.IntegerParameters !== undefined &&
      input.IntegerParameters !== null && {
        IntegerParameters: serializeAws_restJson1IntegerParameterList(input.IntegerParameters, context),
      }),
    ...(input.StringParameters !== undefined &&
      input.StringParameters !== null && {
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

const serializeAws_restJson1PhysicalTableMap = (
  input: { [key: string]: PhysicalTable },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: PhysicalTable }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1PhysicalTable(value, context),
    };
  }, {});
};

const serializeAws_restJson1PostgreSqlParameters = (input: PostgreSqlParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1PrestoParameters = (input: PrestoParameters, context: __SerdeContext): any => {
  return {
    ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1PrincipalList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ProjectedColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ProjectOperation = (input: ProjectOperation, context: __SerdeContext): any => {
  return {
    ...(input.ProjectedColumns !== undefined &&
      input.ProjectedColumns !== null && {
        ProjectedColumns: serializeAws_restJson1ProjectedColumnList(input.ProjectedColumns, context),
      }),
  };
};

const serializeAws_restJson1RdsParameters = (input: RdsParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_restJson1RedshiftParameters = (input: RedshiftParameters, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1RelationalTable = (input: RelationalTable, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceArn !== undefined && input.DataSourceArn !== null && { DataSourceArn: input.DataSourceArn }),
    ...(input.InputColumns !== undefined &&
      input.InputColumns !== null && {
        InputColumns: serializeAws_restJson1InputColumnList(input.InputColumns, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Schema !== undefined && input.Schema !== null && { Schema: input.Schema }),
  };
};

const serializeAws_restJson1RenameColumnOperation = (input: RenameColumnOperation, context: __SerdeContext): any => {
  return {
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.NewColumnName !== undefined && input.NewColumnName !== null && { NewColumnName: input.NewColumnName }),
  };
};

const serializeAws_restJson1ResourcePermission = (input: ResourcePermission, context: __SerdeContext): any => {
  return {
    ...(input.Actions !== undefined &&
      input.Actions !== null && { Actions: serializeAws_restJson1ActionList(input.Actions, context) }),
    ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
  };
};

const serializeAws_restJson1ResourcePermissionList = (input: ResourcePermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ResourcePermission(entry, context);
    });
};

const serializeAws_restJson1RowLevelPermissionDataSet = (
  input: RowLevelPermissionDataSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.PermissionPolicy !== undefined &&
      input.PermissionPolicy !== null && { PermissionPolicy: input.PermissionPolicy }),
  };
};

const serializeAws_restJson1S3Parameters = (input: S3Parameters, context: __SerdeContext): any => {
  return {
    ...(input.ManifestFileLocation !== undefined &&
      input.ManifestFileLocation !== null && {
        ManifestFileLocation: serializeAws_restJson1ManifestFileLocation(input.ManifestFileLocation, context),
      }),
  };
};

const serializeAws_restJson1S3Source = (input: S3Source, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceArn !== undefined && input.DataSourceArn !== null && { DataSourceArn: input.DataSourceArn }),
    ...(input.InputColumns !== undefined &&
      input.InputColumns !== null && {
        InputColumns: serializeAws_restJson1InputColumnList(input.InputColumns, context),
      }),
    ...(input.UploadSettings !== undefined &&
      input.UploadSettings !== null && {
        UploadSettings: serializeAws_restJson1UploadSettings(input.UploadSettings, context),
      }),
  };
};

const serializeAws_restJson1ServiceNowParameters = (input: ServiceNowParameters, context: __SerdeContext): any => {
  return {
    ...(input.SiteBaseUrl !== undefined && input.SiteBaseUrl !== null && { SiteBaseUrl: input.SiteBaseUrl }),
  };
};

const serializeAws_restJson1SheetControlsOption = (input: SheetControlsOption, context: __SerdeContext): any => {
  return {
    ...(input.VisibilityState !== undefined &&
      input.VisibilityState !== null && { VisibilityState: input.VisibilityState }),
  };
};

const serializeAws_restJson1SheetStyle = (input: SheetStyle, context: __SerdeContext): any => {
  return {
    ...(input.Tile !== undefined &&
      input.Tile !== null && { Tile: serializeAws_restJson1TileStyle(input.Tile, context) }),
    ...(input.TileLayout !== undefined &&
      input.TileLayout !== null && { TileLayout: serializeAws_restJson1TileLayoutStyle(input.TileLayout, context) }),
  };
};

const serializeAws_restJson1SnowflakeParameters = (input: SnowflakeParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Warehouse !== undefined && input.Warehouse !== null && { Warehouse: input.Warehouse }),
  };
};

const serializeAws_restJson1SparkParameters = (input: SparkParameters, context: __SerdeContext): any => {
  return {
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1SqlServerParameters = (input: SqlServerParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1SslProperties = (input: SslProperties, context: __SerdeContext): any => {
  return {
    ...(input.DisableSsl !== undefined && input.DisableSsl !== null && { DisableSsl: input.DisableSsl }),
  };
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StringParameter = (input: StringParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1StringList(input.Values, context) }),
  };
};

const serializeAws_restJson1StringParameterList = (input: StringParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StringParameter(entry, context);
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagColumnOperation = (input: TagColumnOperation, context: __SerdeContext): any => {
  return {
    ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1ColumnTagList(input.Tags, context) }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TemplateSourceAnalysis = (input: TemplateSourceAnalysis, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.DataSetReferences !== undefined &&
      input.DataSetReferences !== null && {
        DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
      }),
  };
};

const serializeAws_restJson1TemplateSourceEntity = (input: TemplateSourceEntity, context: __SerdeContext): any => {
  return {
    ...(input.SourceAnalysis !== undefined &&
      input.SourceAnalysis !== null && {
        SourceAnalysis: serializeAws_restJson1TemplateSourceAnalysis(input.SourceAnalysis, context),
      }),
    ...(input.SourceTemplate !== undefined &&
      input.SourceTemplate !== null && {
        SourceTemplate: serializeAws_restJson1TemplateSourceTemplate(input.SourceTemplate, context),
      }),
  };
};

const serializeAws_restJson1TemplateSourceTemplate = (input: TemplateSourceTemplate, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
  };
};

const serializeAws_restJson1TeradataParameters = (input: TeradataParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_restJson1ThemeConfiguration = (input: ThemeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataColorPalette !== undefined &&
      input.DataColorPalette !== null && {
        DataColorPalette: serializeAws_restJson1DataColorPalette(input.DataColorPalette, context),
      }),
    ...(input.Sheet !== undefined &&
      input.Sheet !== null && { Sheet: serializeAws_restJson1SheetStyle(input.Sheet, context) }),
    ...(input.UIColorPalette !== undefined &&
      input.UIColorPalette !== null && {
        UIColorPalette: serializeAws_restJson1UIColorPalette(input.UIColorPalette, context),
      }),
  };
};

const serializeAws_restJson1TileLayoutStyle = (input: TileLayoutStyle, context: __SerdeContext): any => {
  return {
    ...(input.Gutter !== undefined &&
      input.Gutter !== null && { Gutter: serializeAws_restJson1GutterStyle(input.Gutter, context) }),
    ...(input.Margin !== undefined &&
      input.Margin !== null && { Margin: serializeAws_restJson1MarginStyle(input.Margin, context) }),
  };
};

const serializeAws_restJson1TileStyle = (input: TileStyle, context: __SerdeContext): any => {
  return {
    ...(input.Border !== undefined &&
      input.Border !== null && { Border: serializeAws_restJson1BorderStyle(input.Border, context) }),
  };
};

const serializeAws_restJson1TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1TransformOperationList = (input: TransformOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1TransformOperation(entry, context);
    });
};

const serializeAws_restJson1TwitterParameters = (input: TwitterParameters, context: __SerdeContext): any => {
  return {
    ...(input.MaxRows !== undefined && input.MaxRows !== null && { MaxRows: input.MaxRows }),
    ...(input.Query !== undefined && input.Query !== null && { Query: input.Query }),
  };
};

const serializeAws_restJson1UIColorPalette = (input: UIColorPalette, context: __SerdeContext): any => {
  return {
    ...(input.Accent !== undefined && input.Accent !== null && { Accent: input.Accent }),
    ...(input.AccentForeground !== undefined &&
      input.AccentForeground !== null && { AccentForeground: input.AccentForeground }),
    ...(input.Danger !== undefined && input.Danger !== null && { Danger: input.Danger }),
    ...(input.DangerForeground !== undefined &&
      input.DangerForeground !== null && { DangerForeground: input.DangerForeground }),
    ...(input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension }),
    ...(input.DimensionForeground !== undefined &&
      input.DimensionForeground !== null && { DimensionForeground: input.DimensionForeground }),
    ...(input.Measure !== undefined && input.Measure !== null && { Measure: input.Measure }),
    ...(input.MeasureForeground !== undefined &&
      input.MeasureForeground !== null && { MeasureForeground: input.MeasureForeground }),
    ...(input.PrimaryBackground !== undefined &&
      input.PrimaryBackground !== null && { PrimaryBackground: input.PrimaryBackground }),
    ...(input.PrimaryForeground !== undefined &&
      input.PrimaryForeground !== null && { PrimaryForeground: input.PrimaryForeground }),
    ...(input.SecondaryBackground !== undefined &&
      input.SecondaryBackground !== null && { SecondaryBackground: input.SecondaryBackground }),
    ...(input.SecondaryForeground !== undefined &&
      input.SecondaryForeground !== null && { SecondaryForeground: input.SecondaryForeground }),
    ...(input.Success !== undefined && input.Success !== null && { Success: input.Success }),
    ...(input.SuccessForeground !== undefined &&
      input.SuccessForeground !== null && { SuccessForeground: input.SuccessForeground }),
    ...(input.Warning !== undefined && input.Warning !== null && { Warning: input.Warning }),
    ...(input.WarningForeground !== undefined &&
      input.WarningForeground !== null && { WarningForeground: input.WarningForeground }),
  };
};

const serializeAws_restJson1UpdateResourcePermissionList = (
  input: ResourcePermission[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ResourcePermission(entry, context);
    });
};

const serializeAws_restJson1UploadSettings = (input: UploadSettings, context: __SerdeContext): any => {
  return {
    ...(input.ContainsHeader !== undefined &&
      input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.StartFromRow !== undefined && input.StartFromRow !== null && { StartFromRow: input.StartFromRow }),
    ...(input.TextQualifier !== undefined && input.TextQualifier !== null && { TextQualifier: input.TextQualifier }),
  };
};

const serializeAws_restJson1VpcConnectionProperties = (
  input: VpcConnectionProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.VpcConnectionArn !== undefined &&
      input.VpcConnectionArn !== null && { VpcConnectionArn: input.VpcConnectionArn }),
  };
};

const deserializeAws_restJson1AccountCustomization = (output: any, context: __SerdeContext): AccountCustomization => {
  return {
    DefaultTheme: output.DefaultTheme !== undefined && output.DefaultTheme !== null ? output.DefaultTheme : undefined,
  } as any;
};

const deserializeAws_restJson1AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    AccountName: output.AccountName !== undefined && output.AccountName !== null ? output.AccountName : undefined,
    DefaultNamespace:
      output.DefaultNamespace !== undefined && output.DefaultNamespace !== null ? output.DefaultNamespace : undefined,
    Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
    NotificationEmail:
      output.NotificationEmail !== undefined && output.NotificationEmail !== null
        ? output.NotificationEmail
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ActiveIAMPolicyAssignment = (
  output: any,
  context: __SerdeContext
): ActiveIAMPolicyAssignment => {
  return {
    AssignmentName:
      output.AssignmentName !== undefined && output.AssignmentName !== null ? output.AssignmentName : undefined,
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
  } as any;
};

const deserializeAws_restJson1ActiveIAMPolicyAssignmentList = (
  output: any,
  context: __SerdeContext
): ActiveIAMPolicyAssignment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActiveIAMPolicyAssignment(entry, context);
    });
};

const deserializeAws_restJson1AmazonElasticsearchParameters = (
  output: any,
  context: __SerdeContext
): AmazonElasticsearchParameters => {
  return {
    Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
  } as any;
};

const deserializeAws_restJson1Analysis = (output: any, context: __SerdeContext): Analysis => {
  return {
    AnalysisId: output.AnalysisId !== undefined && output.AnalysisId !== null ? output.AnalysisId : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DataSetArns:
      output.DataSetArns !== undefined && output.DataSetArns !== null
        ? deserializeAws_restJson1DataSetArnsList(output.DataSetArns, context)
        : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_restJson1AnalysisErrorList(output.Errors, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Sheets:
      output.Sheets !== undefined && output.Sheets !== null
        ? deserializeAws_restJson1SheetList(output.Sheets, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    ThemeArn: output.ThemeArn !== undefined && output.ThemeArn !== null ? output.ThemeArn : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisError = (output: any, context: __SerdeContext): AnalysisError => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisErrorList = (output: any, context: __SerdeContext): AnalysisError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisError(entry, context);
    });
};

const deserializeAws_restJson1AnalysisSummary = (output: any, context: __SerdeContext): AnalysisSummary => {
  return {
    AnalysisId: output.AnalysisId !== undefined && output.AnalysisId !== null ? output.AnalysisId : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisSummaryList = (output: any, context: __SerdeContext): AnalysisSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisSummary(entry, context);
    });
};

const deserializeAws_restJson1AthenaParameters = (output: any, context: __SerdeContext): AthenaParameters => {
  return {
    WorkGroup: output.WorkGroup !== undefined && output.WorkGroup !== null ? output.WorkGroup : undefined,
  } as any;
};

const deserializeAws_restJson1AuroraParameters = (output: any, context: __SerdeContext): AuroraParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1AuroraPostgreSqlParameters = (
  output: any,
  context: __SerdeContext
): AuroraPostgreSqlParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIotAnalyticsParameters = (
  output: any,
  context: __SerdeContext
): AwsIotAnalyticsParameters => {
  return {
    DataSetName: output.DataSetName !== undefined && output.DataSetName !== null ? output.DataSetName : undefined,
  } as any;
};

const deserializeAws_restJson1BorderStyle = (output: any, context: __SerdeContext): BorderStyle => {
  return {
    Show: output.Show !== undefined && output.Show !== null ? output.Show : undefined,
  } as any;
};

const deserializeAws_restJson1CalculatedColumn = (output: any, context: __SerdeContext): CalculatedColumn => {
  return {
    ColumnId: output.ColumnId !== undefined && output.ColumnId !== null ? output.ColumnId : undefined,
    ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
    Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
  } as any;
};

const deserializeAws_restJson1CalculatedColumnList = (output: any, context: __SerdeContext): CalculatedColumn[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CalculatedColumn(entry, context);
    });
};

const deserializeAws_restJson1CastColumnTypeOperation = (
  output: any,
  context: __SerdeContext
): CastColumnTypeOperation => {
  return {
    ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    NewColumnType:
      output.NewColumnType !== undefined && output.NewColumnType !== null ? output.NewColumnType : undefined,
  } as any;
};

const deserializeAws_restJson1ColorList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ColumnDescription = (output: any, context: __SerdeContext): ColumnDescription => {
  return {
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnGroup = (output: any, context: __SerdeContext): ColumnGroup => {
  return {
    GeoSpatialColumnGroup:
      output.GeoSpatialColumnGroup !== undefined && output.GeoSpatialColumnGroup !== null
        ? deserializeAws_restJson1GeoSpatialColumnGroup(output.GeoSpatialColumnGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnGroupColumnSchema = (
  output: any,
  context: __SerdeContext
): ColumnGroupColumnSchema => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnGroupColumnSchemaList = (
  output: any,
  context: __SerdeContext
): ColumnGroupColumnSchema[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnGroupColumnSchema(entry, context);
    });
};

const deserializeAws_restJson1ColumnGroupList = (output: any, context: __SerdeContext): ColumnGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnGroup(entry, context);
    });
};

const deserializeAws_restJson1ColumnGroupSchema = (output: any, context: __SerdeContext): ColumnGroupSchema => {
  return {
    ColumnGroupColumnSchemaList:
      output.ColumnGroupColumnSchemaList !== undefined && output.ColumnGroupColumnSchemaList !== null
        ? deserializeAws_restJson1ColumnGroupColumnSchemaList(output.ColumnGroupColumnSchemaList, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnGroupSchemaList = (output: any, context: __SerdeContext): ColumnGroupSchema[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnGroupSchema(entry, context);
    });
};

const deserializeAws_restJson1ColumnLevelPermissionRule = (
  output: any,
  context: __SerdeContext
): ColumnLevelPermissionRule => {
  return {
    ColumnNames:
      output.ColumnNames !== undefined && output.ColumnNames !== null
        ? deserializeAws_restJson1ColumnNameList(output.ColumnNames, context)
        : undefined,
    Principals:
      output.Principals !== undefined && output.Principals !== null
        ? deserializeAws_restJson1PrincipalList(output.Principals, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnLevelPermissionRuleList = (
  output: any,
  context: __SerdeContext
): ColumnLevelPermissionRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnLevelPermissionRule(entry, context);
    });
};

const deserializeAws_restJson1ColumnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ColumnNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ColumnSchema = (output: any, context: __SerdeContext): ColumnSchema => {
  return {
    DataType: output.DataType !== undefined && output.DataType !== null ? output.DataType : undefined,
    GeographicRole:
      output.GeographicRole !== undefined && output.GeographicRole !== null ? output.GeographicRole : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnSchemaList = (output: any, context: __SerdeContext): ColumnSchema[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnSchema(entry, context);
    });
};

const deserializeAws_restJson1ColumnTag = (output: any, context: __SerdeContext): ColumnTag => {
  return {
    ColumnDescription:
      output.ColumnDescription !== undefined && output.ColumnDescription !== null
        ? deserializeAws_restJson1ColumnDescription(output.ColumnDescription, context)
        : undefined,
    ColumnGeographicRole:
      output.ColumnGeographicRole !== undefined && output.ColumnGeographicRole !== null
        ? output.ColumnGeographicRole
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnTagList = (output: any, context: __SerdeContext): ColumnTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnTag(entry, context);
    });
};

const deserializeAws_restJson1CreateColumnsOperation = (
  output: any,
  context: __SerdeContext
): CreateColumnsOperation => {
  return {
    Columns:
      output.Columns !== undefined && output.Columns !== null
        ? deserializeAws_restJson1CalculatedColumnList(output.Columns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomSql = (output: any, context: __SerdeContext): CustomSql => {
  return {
    Columns:
      output.Columns !== undefined && output.Columns !== null
        ? deserializeAws_restJson1InputColumnList(output.Columns, context)
        : undefined,
    DataSourceArn:
      output.DataSourceArn !== undefined && output.DataSourceArn !== null ? output.DataSourceArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SqlQuery: output.SqlQuery !== undefined && output.SqlQuery !== null ? output.SqlQuery : undefined,
  } as any;
};

const deserializeAws_restJson1Dashboard = (output: any, context: __SerdeContext): Dashboard => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DashboardId: output.DashboardId !== undefined && output.DashboardId !== null ? output.DashboardId : undefined,
    LastPublishedTime:
      output.LastPublishedTime !== undefined && output.LastPublishedTime !== null
        ? new Date(Math.round(output.LastPublishedTime * 1000))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? deserializeAws_restJson1DashboardVersion(output.Version, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashboardError = (output: any, context: __SerdeContext): DashboardError => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1DashboardErrorList = (output: any, context: __SerdeContext): DashboardError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashboardError(entry, context);
    });
};

const deserializeAws_restJson1DashboardSummary = (output: any, context: __SerdeContext): DashboardSummary => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DashboardId: output.DashboardId !== undefined && output.DashboardId !== null ? output.DashboardId : undefined,
    LastPublishedTime:
      output.LastPublishedTime !== undefined && output.LastPublishedTime !== null
        ? new Date(Math.round(output.LastPublishedTime * 1000))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    PublishedVersionNumber:
      output.PublishedVersionNumber !== undefined && output.PublishedVersionNumber !== null
        ? output.PublishedVersionNumber
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashboardSummaryList = (output: any, context: __SerdeContext): DashboardSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashboardSummary(entry, context);
    });
};

const deserializeAws_restJson1DashboardVersion = (output: any, context: __SerdeContext): DashboardVersion => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DataSetArns:
      output.DataSetArns !== undefined && output.DataSetArns !== null
        ? deserializeAws_restJson1DataSetArnsList(output.DataSetArns, context)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_restJson1DashboardErrorList(output.Errors, context)
        : undefined,
    Sheets:
      output.Sheets !== undefined && output.Sheets !== null
        ? deserializeAws_restJson1SheetList(output.Sheets, context)
        : undefined,
    SourceEntityArn:
      output.SourceEntityArn !== undefined && output.SourceEntityArn !== null ? output.SourceEntityArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    ThemeArn: output.ThemeArn !== undefined && output.ThemeArn !== null ? output.ThemeArn : undefined,
    VersionNumber:
      output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
  } as any;
};

const deserializeAws_restJson1DashboardVersionSummary = (
  output: any,
  context: __SerdeContext
): DashboardVersionSummary => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    SourceEntityArn:
      output.SourceEntityArn !== undefined && output.SourceEntityArn !== null ? output.SourceEntityArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VersionNumber:
      output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
  } as any;
};

const deserializeAws_restJson1DashboardVersionSummaryList = (
  output: any,
  context: __SerdeContext
): DashboardVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashboardVersionSummary(entry, context);
    });
};

const deserializeAws_restJson1DataColorPalette = (output: any, context: __SerdeContext): DataColorPalette => {
  return {
    Colors:
      output.Colors !== undefined && output.Colors !== null
        ? deserializeAws_restJson1ColorList(output.Colors, context)
        : undefined,
    EmptyFillColor:
      output.EmptyFillColor !== undefined && output.EmptyFillColor !== null ? output.EmptyFillColor : undefined,
    MinMaxGradient:
      output.MinMaxGradient !== undefined && output.MinMaxGradient !== null
        ? deserializeAws_restJson1ColorList(output.MinMaxGradient, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSet = (output: any, context: __SerdeContext): DataSet => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    ColumnGroups:
      output.ColumnGroups !== undefined && output.ColumnGroups !== null
        ? deserializeAws_restJson1ColumnGroupList(output.ColumnGroups, context)
        : undefined,
    ColumnLevelPermissionRules:
      output.ColumnLevelPermissionRules !== undefined && output.ColumnLevelPermissionRules !== null
        ? deserializeAws_restJson1ColumnLevelPermissionRuleList(output.ColumnLevelPermissionRules, context)
        : undefined,
    ConsumedSpiceCapacityInBytes:
      output.ConsumedSpiceCapacityInBytes !== undefined && output.ConsumedSpiceCapacityInBytes !== null
        ? output.ConsumedSpiceCapacityInBytes
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    ImportMode: output.ImportMode !== undefined && output.ImportMode !== null ? output.ImportMode : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    LogicalTableMap:
      output.LogicalTableMap !== undefined && output.LogicalTableMap !== null
        ? deserializeAws_restJson1LogicalTableMap(output.LogicalTableMap, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OutputColumns:
      output.OutputColumns !== undefined && output.OutputColumns !== null
        ? deserializeAws_restJson1OutputColumnList(output.OutputColumns, context)
        : undefined,
    PhysicalTableMap:
      output.PhysicalTableMap !== undefined && output.PhysicalTableMap !== null
        ? deserializeAws_restJson1PhysicalTableMap(output.PhysicalTableMap, context)
        : undefined,
    RowLevelPermissionDataSet:
      output.RowLevelPermissionDataSet !== undefined && output.RowLevelPermissionDataSet !== null
        ? deserializeAws_restJson1RowLevelPermissionDataSet(output.RowLevelPermissionDataSet, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetArnsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1DataSetConfiguration = (output: any, context: __SerdeContext): DataSetConfiguration => {
  return {
    ColumnGroupSchemaList:
      output.ColumnGroupSchemaList !== undefined && output.ColumnGroupSchemaList !== null
        ? deserializeAws_restJson1ColumnGroupSchemaList(output.ColumnGroupSchemaList, context)
        : undefined,
    DataSetSchema:
      output.DataSetSchema !== undefined && output.DataSetSchema !== null
        ? deserializeAws_restJson1DataSetSchema(output.DataSetSchema, context)
        : undefined,
    Placeholder: output.Placeholder !== undefined && output.Placeholder !== null ? output.Placeholder : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetConfigurationList = (
  output: any,
  context: __SerdeContext
): DataSetConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetConfiguration(entry, context);
    });
};

const deserializeAws_restJson1DataSetSchema = (output: any, context: __SerdeContext): DataSetSchema => {
  return {
    ColumnSchemaList:
      output.ColumnSchemaList !== undefined && output.ColumnSchemaList !== null
        ? deserializeAws_restJson1ColumnSchemaList(output.ColumnSchemaList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetSummary = (output: any, context: __SerdeContext): DataSetSummary => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    ColumnLevelPermissionRulesApplied:
      output.ColumnLevelPermissionRulesApplied !== undefined && output.ColumnLevelPermissionRulesApplied !== null
        ? output.ColumnLevelPermissionRulesApplied
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
    ImportMode: output.ImportMode !== undefined && output.ImportMode !== null ? output.ImportMode : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RowLevelPermissionDataSet:
      output.RowLevelPermissionDataSet !== undefined && output.RowLevelPermissionDataSet !== null
        ? deserializeAws_restJson1RowLevelPermissionDataSet(output.RowLevelPermissionDataSet, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSetSummaryList = (output: any, context: __SerdeContext): DataSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSetSummary(entry, context);
    });
};

const deserializeAws_restJson1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    AlternateDataSourceParameters:
      output.AlternateDataSourceParameters !== undefined && output.AlternateDataSourceParameters !== null
        ? deserializeAws_restJson1DataSourceParametersList(output.AlternateDataSourceParameters, context)
        : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
    DataSourceParameters:
      output.DataSourceParameters !== undefined && output.DataSourceParameters !== null
        ? deserializeAws_restJson1DataSourceParameters(output.DataSourceParameters, context)
        : undefined,
    ErrorInfo:
      output.ErrorInfo !== undefined && output.ErrorInfo !== null
        ? deserializeAws_restJson1DataSourceErrorInfo(output.ErrorInfo, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SslProperties:
      output.SslProperties !== undefined && output.SslProperties !== null
        ? deserializeAws_restJson1SslProperties(output.SslProperties, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    VpcConnectionProperties:
      output.VpcConnectionProperties !== undefined && output.VpcConnectionProperties !== null
        ? deserializeAws_restJson1VpcConnectionProperties(output.VpcConnectionProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSourceErrorInfo = (output: any, context: __SerdeContext): DataSourceErrorInfo => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1DataSourceList = (output: any, context: __SerdeContext): DataSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSource(entry, context);
    });
};

const deserializeAws_restJson1DataSourceParameters = (output: any, context: __SerdeContext): DataSourceParameters => {
  if (output.AmazonElasticsearchParameters !== undefined && output.AmazonElasticsearchParameters !== null) {
    return {
      AmazonElasticsearchParameters: deserializeAws_restJson1AmazonElasticsearchParameters(
        output.AmazonElasticsearchParameters,
        context
      ),
    };
  }
  if (output.AthenaParameters !== undefined && output.AthenaParameters !== null) {
    return {
      AthenaParameters: deserializeAws_restJson1AthenaParameters(output.AthenaParameters, context),
    };
  }
  if (output.AuroraParameters !== undefined && output.AuroraParameters !== null) {
    return {
      AuroraParameters: deserializeAws_restJson1AuroraParameters(output.AuroraParameters, context),
    };
  }
  if (output.AuroraPostgreSqlParameters !== undefined && output.AuroraPostgreSqlParameters !== null) {
    return {
      AuroraPostgreSqlParameters: deserializeAws_restJson1AuroraPostgreSqlParameters(
        output.AuroraPostgreSqlParameters,
        context
      ),
    };
  }
  if (output.AwsIotAnalyticsParameters !== undefined && output.AwsIotAnalyticsParameters !== null) {
    return {
      AwsIotAnalyticsParameters: deserializeAws_restJson1AwsIotAnalyticsParameters(
        output.AwsIotAnalyticsParameters,
        context
      ),
    };
  }
  if (output.JiraParameters !== undefined && output.JiraParameters !== null) {
    return {
      JiraParameters: deserializeAws_restJson1JiraParameters(output.JiraParameters, context),
    };
  }
  if (output.MariaDbParameters !== undefined && output.MariaDbParameters !== null) {
    return {
      MariaDbParameters: deserializeAws_restJson1MariaDbParameters(output.MariaDbParameters, context),
    };
  }
  if (output.MySqlParameters !== undefined && output.MySqlParameters !== null) {
    return {
      MySqlParameters: deserializeAws_restJson1MySqlParameters(output.MySqlParameters, context),
    };
  }
  if (output.OracleParameters !== undefined && output.OracleParameters !== null) {
    return {
      OracleParameters: deserializeAws_restJson1OracleParameters(output.OracleParameters, context),
    };
  }
  if (output.PostgreSqlParameters !== undefined && output.PostgreSqlParameters !== null) {
    return {
      PostgreSqlParameters: deserializeAws_restJson1PostgreSqlParameters(output.PostgreSqlParameters, context),
    };
  }
  if (output.PrestoParameters !== undefined && output.PrestoParameters !== null) {
    return {
      PrestoParameters: deserializeAws_restJson1PrestoParameters(output.PrestoParameters, context),
    };
  }
  if (output.RdsParameters !== undefined && output.RdsParameters !== null) {
    return {
      RdsParameters: deserializeAws_restJson1RdsParameters(output.RdsParameters, context),
    };
  }
  if (output.RedshiftParameters !== undefined && output.RedshiftParameters !== null) {
    return {
      RedshiftParameters: deserializeAws_restJson1RedshiftParameters(output.RedshiftParameters, context),
    };
  }
  if (output.S3Parameters !== undefined && output.S3Parameters !== null) {
    return {
      S3Parameters: deserializeAws_restJson1S3Parameters(output.S3Parameters, context),
    };
  }
  if (output.ServiceNowParameters !== undefined && output.ServiceNowParameters !== null) {
    return {
      ServiceNowParameters: deserializeAws_restJson1ServiceNowParameters(output.ServiceNowParameters, context),
    };
  }
  if (output.SnowflakeParameters !== undefined && output.SnowflakeParameters !== null) {
    return {
      SnowflakeParameters: deserializeAws_restJson1SnowflakeParameters(output.SnowflakeParameters, context),
    };
  }
  if (output.SparkParameters !== undefined && output.SparkParameters !== null) {
    return {
      SparkParameters: deserializeAws_restJson1SparkParameters(output.SparkParameters, context),
    };
  }
  if (output.SqlServerParameters !== undefined && output.SqlServerParameters !== null) {
    return {
      SqlServerParameters: deserializeAws_restJson1SqlServerParameters(output.SqlServerParameters, context),
    };
  }
  if (output.TeradataParameters !== undefined && output.TeradataParameters !== null) {
    return {
      TeradataParameters: deserializeAws_restJson1TeradataParameters(output.TeradataParameters, context),
    };
  }
  if (output.TwitterParameters !== undefined && output.TwitterParameters !== null) {
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSourceParameters(entry, context);
    });
};

const deserializeAws_restJson1ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1FilterOperation = (output: any, context: __SerdeContext): FilterOperation => {
  return {
    ConditionExpression:
      output.ConditionExpression !== undefined && output.ConditionExpression !== null
        ? output.ConditionExpression
        : undefined,
  } as any;
};

const deserializeAws_restJson1GeoSpatialColumnGroup = (output: any, context: __SerdeContext): GeoSpatialColumnGroup => {
  return {
    Columns:
      output.Columns !== undefined && output.Columns !== null
        ? deserializeAws_restJson1ColumnList(output.Columns, context)
        : undefined,
    CountryCode: output.CountryCode !== undefined && output.CountryCode !== null ? output.CountryCode : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1Group = (output: any, context: __SerdeContext): Group => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
  } as any;
};

const deserializeAws_restJson1GroupList = (output: any, context: __SerdeContext): Group[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Group(entry, context);
    });
};

const deserializeAws_restJson1GroupMember = (output: any, context: __SerdeContext): GroupMember => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    MemberName: output.MemberName !== undefined && output.MemberName !== null ? output.MemberName : undefined,
  } as any;
};

const deserializeAws_restJson1GroupMemberList = (output: any, context: __SerdeContext): GroupMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupMember(entry, context);
    });
};

const deserializeAws_restJson1GutterStyle = (output: any, context: __SerdeContext): GutterStyle => {
  return {
    Show: output.Show !== undefined && output.Show !== null ? output.Show : undefined,
  } as any;
};

const deserializeAws_restJson1IAMPolicyAssignment = (output: any, context: __SerdeContext): IAMPolicyAssignment => {
  return {
    AssignmentId: output.AssignmentId !== undefined && output.AssignmentId !== null ? output.AssignmentId : undefined,
    AssignmentName:
      output.AssignmentName !== undefined && output.AssignmentName !== null ? output.AssignmentName : undefined,
    AssignmentStatus:
      output.AssignmentStatus !== undefined && output.AssignmentStatus !== null ? output.AssignmentStatus : undefined,
    AwsAccountId: output.AwsAccountId !== undefined && output.AwsAccountId !== null ? output.AwsAccountId : undefined,
    Identities:
      output.Identities !== undefined && output.Identities !== null
        ? deserializeAws_restJson1IdentityMap(output.Identities, context)
        : undefined,
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
  } as any;
};

const deserializeAws_restJson1IAMPolicyAssignmentSummary = (
  output: any,
  context: __SerdeContext
): IAMPolicyAssignmentSummary => {
  return {
    AssignmentName:
      output.AssignmentName !== undefined && output.AssignmentName !== null ? output.AssignmentName : undefined,
    AssignmentStatus:
      output.AssignmentStatus !== undefined && output.AssignmentStatus !== null ? output.AssignmentStatus : undefined,
  } as any;
};

const deserializeAws_restJson1IAMPolicyAssignmentSummaryList = (
  output: any,
  context: __SerdeContext
): IAMPolicyAssignmentSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IAMPolicyAssignmentSummary(entry, context);
    });
};

const deserializeAws_restJson1IdentityMap = (output: any, context: __SerdeContext): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1IdentityNameList(value, context),
    };
  }, {});
};

const deserializeAws_restJson1IdentityNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Ingestion = (output: any, context: __SerdeContext): Ingestion => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    ErrorInfo:
      output.ErrorInfo !== undefined && output.ErrorInfo !== null
        ? deserializeAws_restJson1ErrorInfo(output.ErrorInfo, context)
        : undefined,
    IngestionId: output.IngestionId !== undefined && output.IngestionId !== null ? output.IngestionId : undefined,
    IngestionSizeInBytes:
      output.IngestionSizeInBytes !== undefined && output.IngestionSizeInBytes !== null
        ? output.IngestionSizeInBytes
        : undefined,
    IngestionStatus:
      output.IngestionStatus !== undefined && output.IngestionStatus !== null ? output.IngestionStatus : undefined,
    IngestionTimeInSeconds:
      output.IngestionTimeInSeconds !== undefined && output.IngestionTimeInSeconds !== null
        ? output.IngestionTimeInSeconds
        : undefined,
    QueueInfo:
      output.QueueInfo !== undefined && output.QueueInfo !== null
        ? deserializeAws_restJson1QueueInfo(output.QueueInfo, context)
        : undefined,
    RequestSource:
      output.RequestSource !== undefined && output.RequestSource !== null ? output.RequestSource : undefined,
    RequestType: output.RequestType !== undefined && output.RequestType !== null ? output.RequestType : undefined,
    RowInfo:
      output.RowInfo !== undefined && output.RowInfo !== null
        ? deserializeAws_restJson1RowInfo(output.RowInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Ingestions = (output: any, context: __SerdeContext): Ingestion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ingestion(entry, context);
    });
};

const deserializeAws_restJson1InputColumn = (output: any, context: __SerdeContext): InputColumn => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1InputColumnList = (output: any, context: __SerdeContext): InputColumn[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputColumn(entry, context);
    });
};

const deserializeAws_restJson1JiraParameters = (output: any, context: __SerdeContext): JiraParameters => {
  return {
    SiteBaseUrl: output.SiteBaseUrl !== undefined && output.SiteBaseUrl !== null ? output.SiteBaseUrl : undefined,
  } as any;
};

const deserializeAws_restJson1JoinInstruction = (output: any, context: __SerdeContext): JoinInstruction => {
  return {
    LeftJoinKeyProperties:
      output.LeftJoinKeyProperties !== undefined && output.LeftJoinKeyProperties !== null
        ? deserializeAws_restJson1JoinKeyProperties(output.LeftJoinKeyProperties, context)
        : undefined,
    LeftOperand: output.LeftOperand !== undefined && output.LeftOperand !== null ? output.LeftOperand : undefined,
    OnClause: output.OnClause !== undefined && output.OnClause !== null ? output.OnClause : undefined,
    RightJoinKeyProperties:
      output.RightJoinKeyProperties !== undefined && output.RightJoinKeyProperties !== null
        ? deserializeAws_restJson1JoinKeyProperties(output.RightJoinKeyProperties, context)
        : undefined,
    RightOperand: output.RightOperand !== undefined && output.RightOperand !== null ? output.RightOperand : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1JoinKeyProperties = (output: any, context: __SerdeContext): JoinKeyProperties => {
  return {
    UniqueKey: output.UniqueKey !== undefined && output.UniqueKey !== null ? output.UniqueKey : undefined,
  } as any;
};

const deserializeAws_restJson1LogicalTable = (output: any, context: __SerdeContext): LogicalTable => {
  return {
    Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
    DataTransforms:
      output.DataTransforms !== undefined && output.DataTransforms !== null
        ? deserializeAws_restJson1TransformOperationList(output.DataTransforms, context)
        : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1LogicalTableSource(output.Source, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogicalTableMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: LogicalTable } => {
  return Object.entries(output).reduce((acc: { [key: string]: LogicalTable }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1LogicalTable(value, context),
    };
  }, {});
};

const deserializeAws_restJson1LogicalTableSource = (output: any, context: __SerdeContext): LogicalTableSource => {
  return {
    JoinInstruction:
      output.JoinInstruction !== undefined && output.JoinInstruction !== null
        ? deserializeAws_restJson1JoinInstruction(output.JoinInstruction, context)
        : undefined,
    PhysicalTableId:
      output.PhysicalTableId !== undefined && output.PhysicalTableId !== null ? output.PhysicalTableId : undefined,
  } as any;
};

const deserializeAws_restJson1ManifestFileLocation = (output: any, context: __SerdeContext): ManifestFileLocation => {
  return {
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
  } as any;
};

const deserializeAws_restJson1MarginStyle = (output: any, context: __SerdeContext): MarginStyle => {
  return {
    Show: output.Show !== undefined && output.Show !== null ? output.Show : undefined,
  } as any;
};

const deserializeAws_restJson1MariaDbParameters = (output: any, context: __SerdeContext): MariaDbParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1MySqlParameters = (output: any, context: __SerdeContext): MySqlParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1NamespaceError = (output: any, context: __SerdeContext): NamespaceError => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1NamespaceInfoV2 = (output: any, context: __SerdeContext): NamespaceInfoV2 => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CapacityRegion:
      output.CapacityRegion !== undefined && output.CapacityRegion !== null ? output.CapacityRegion : undefined,
    CreationStatus:
      output.CreationStatus !== undefined && output.CreationStatus !== null ? output.CreationStatus : undefined,
    IdentityStore:
      output.IdentityStore !== undefined && output.IdentityStore !== null ? output.IdentityStore : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NamespaceError:
      output.NamespaceError !== undefined && output.NamespaceError !== null
        ? deserializeAws_restJson1NamespaceError(output.NamespaceError, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Namespaces = (output: any, context: __SerdeContext): NamespaceInfoV2[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NamespaceInfoV2(entry, context);
    });
};

const deserializeAws_restJson1OracleParameters = (output: any, context: __SerdeContext): OracleParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1OutputColumn = (output: any, context: __SerdeContext): OutputColumn => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1OutputColumnList = (output: any, context: __SerdeContext): OutputColumn[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputColumn(entry, context);
    });
};

const deserializeAws_restJson1PhysicalTable = (output: any, context: __SerdeContext): PhysicalTable => {
  if (output.CustomSql !== undefined && output.CustomSql !== null) {
    return {
      CustomSql: deserializeAws_restJson1CustomSql(output.CustomSql, context),
    };
  }
  if (output.RelationalTable !== undefined && output.RelationalTable !== null) {
    return {
      RelationalTable: deserializeAws_restJson1RelationalTable(output.RelationalTable, context),
    };
  }
  if (output.S3Source !== undefined && output.S3Source !== null) {
    return {
      S3Source: deserializeAws_restJson1S3Source(output.S3Source, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1PhysicalTableMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: PhysicalTable } => {
  return Object.entries(output).reduce((acc: { [key: string]: PhysicalTable }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1PhysicalTable(value, context),
    };
  }, {});
};

const deserializeAws_restJson1PostgreSqlParameters = (output: any, context: __SerdeContext): PostgreSqlParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1PrestoParameters = (output: any, context: __SerdeContext): PrestoParameters => {
  return {
    Catalog: output.Catalog !== undefined && output.Catalog !== null ? output.Catalog : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1PrincipalList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ProjectedColumnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ProjectOperation = (output: any, context: __SerdeContext): ProjectOperation => {
  return {
    ProjectedColumns:
      output.ProjectedColumns !== undefined && output.ProjectedColumns !== null
        ? deserializeAws_restJson1ProjectedColumnList(output.ProjectedColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1QueueInfo = (output: any, context: __SerdeContext): QueueInfo => {
  return {
    QueuedIngestion:
      output.QueuedIngestion !== undefined && output.QueuedIngestion !== null ? output.QueuedIngestion : undefined,
    WaitingOnIngestion:
      output.WaitingOnIngestion !== undefined && output.WaitingOnIngestion !== null
        ? output.WaitingOnIngestion
        : undefined,
  } as any;
};

const deserializeAws_restJson1RdsParameters = (output: any, context: __SerdeContext): RdsParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
  } as any;
};

const deserializeAws_restJson1RedshiftParameters = (output: any, context: __SerdeContext): RedshiftParameters => {
  return {
    ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1RelationalTable = (output: any, context: __SerdeContext): RelationalTable => {
  return {
    DataSourceArn:
      output.DataSourceArn !== undefined && output.DataSourceArn !== null ? output.DataSourceArn : undefined,
    InputColumns:
      output.InputColumns !== undefined && output.InputColumns !== null
        ? deserializeAws_restJson1InputColumnList(output.InputColumns, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Schema: output.Schema !== undefined && output.Schema !== null ? output.Schema : undefined,
  } as any;
};

const deserializeAws_restJson1RenameColumnOperation = (output: any, context: __SerdeContext): RenameColumnOperation => {
  return {
    ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
    NewColumnName:
      output.NewColumnName !== undefined && output.NewColumnName !== null ? output.NewColumnName : undefined,
  } as any;
};

const deserializeAws_restJson1ResourcePermission = (output: any, context: __SerdeContext): ResourcePermission => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_restJson1ActionList(output.Actions, context)
        : undefined,
    Principal: output.Principal !== undefined && output.Principal !== null ? output.Principal : undefined,
  } as any;
};

const deserializeAws_restJson1ResourcePermissionList = (output: any, context: __SerdeContext): ResourcePermission[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourcePermission(entry, context);
    });
};

const deserializeAws_restJson1RowInfo = (output: any, context: __SerdeContext): RowInfo => {
  return {
    RowsDropped: output.RowsDropped !== undefined && output.RowsDropped !== null ? output.RowsDropped : undefined,
    RowsIngested: output.RowsIngested !== undefined && output.RowsIngested !== null ? output.RowsIngested : undefined,
  } as any;
};

const deserializeAws_restJson1RowLevelPermissionDataSet = (
  output: any,
  context: __SerdeContext
): RowLevelPermissionDataSet => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    PermissionPolicy:
      output.PermissionPolicy !== undefined && output.PermissionPolicy !== null ? output.PermissionPolicy : undefined,
  } as any;
};

const deserializeAws_restJson1S3Parameters = (output: any, context: __SerdeContext): S3Parameters => {
  return {
    ManifestFileLocation:
      output.ManifestFileLocation !== undefined && output.ManifestFileLocation !== null
        ? deserializeAws_restJson1ManifestFileLocation(output.ManifestFileLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3Source = (output: any, context: __SerdeContext): S3Source => {
  return {
    DataSourceArn:
      output.DataSourceArn !== undefined && output.DataSourceArn !== null ? output.DataSourceArn : undefined,
    InputColumns:
      output.InputColumns !== undefined && output.InputColumns !== null
        ? deserializeAws_restJson1InputColumnList(output.InputColumns, context)
        : undefined,
    UploadSettings:
      output.UploadSettings !== undefined && output.UploadSettings !== null
        ? deserializeAws_restJson1UploadSettings(output.UploadSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceNowParameters = (output: any, context: __SerdeContext): ServiceNowParameters => {
  return {
    SiteBaseUrl: output.SiteBaseUrl !== undefined && output.SiteBaseUrl !== null ? output.SiteBaseUrl : undefined,
  } as any;
};

const deserializeAws_restJson1Sheet = (output: any, context: __SerdeContext): Sheet => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SheetId: output.SheetId !== undefined && output.SheetId !== null ? output.SheetId : undefined,
  } as any;
};

const deserializeAws_restJson1SheetList = (output: any, context: __SerdeContext): Sheet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Sheet(entry, context);
    });
};

const deserializeAws_restJson1SheetStyle = (output: any, context: __SerdeContext): SheetStyle => {
  return {
    Tile:
      output.Tile !== undefined && output.Tile !== null
        ? deserializeAws_restJson1TileStyle(output.Tile, context)
        : undefined,
    TileLayout:
      output.TileLayout !== undefined && output.TileLayout !== null
        ? deserializeAws_restJson1TileLayoutStyle(output.TileLayout, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SnowflakeParameters = (output: any, context: __SerdeContext): SnowflakeParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Warehouse: output.Warehouse !== undefined && output.Warehouse !== null ? output.Warehouse : undefined,
  } as any;
};

const deserializeAws_restJson1SparkParameters = (output: any, context: __SerdeContext): SparkParameters => {
  return {
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1SqlServerParameters = (output: any, context: __SerdeContext): SqlServerParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1SslProperties = (output: any, context: __SerdeContext): SslProperties => {
  return {
    DisableSsl: output.DisableSsl !== undefined && output.DisableSsl !== null ? output.DisableSsl : undefined,
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1TagColumnOperation = (output: any, context: __SerdeContext): TagColumnOperation => {
  return {
    ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1ColumnTagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1Template = (output: any, context: __SerdeContext): Template => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    TemplateId: output.TemplateId !== undefined && output.TemplateId !== null ? output.TemplateId : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? deserializeAws_restJson1TemplateVersion(output.Version, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateAlias = (output: any, context: __SerdeContext): TemplateAlias => {
  return {
    AliasName: output.AliasName !== undefined && output.AliasName !== null ? output.AliasName : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    TemplateVersionNumber:
      output.TemplateVersionNumber !== undefined && output.TemplateVersionNumber !== null
        ? output.TemplateVersionNumber
        : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateAliasList = (output: any, context: __SerdeContext): TemplateAlias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateAlias(entry, context);
    });
};

const deserializeAws_restJson1TemplateError = (output: any, context: __SerdeContext): TemplateError => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateErrorList = (output: any, context: __SerdeContext): TemplateError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateError(entry, context);
    });
};

const deserializeAws_restJson1TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    LatestVersionNumber:
      output.LatestVersionNumber !== undefined && output.LatestVersionNumber !== null
        ? output.LatestVersionNumber
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    TemplateId: output.TemplateId !== undefined && output.TemplateId !== null ? output.TemplateId : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateSummaryList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateSummary(entry, context);
    });
};

const deserializeAws_restJson1TemplateVersion = (output: any, context: __SerdeContext): TemplateVersion => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DataSetConfigurations:
      output.DataSetConfigurations !== undefined && output.DataSetConfigurations !== null
        ? deserializeAws_restJson1DataSetConfigurationList(output.DataSetConfigurations, context)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_restJson1TemplateErrorList(output.Errors, context)
        : undefined,
    Sheets:
      output.Sheets !== undefined && output.Sheets !== null
        ? deserializeAws_restJson1SheetList(output.Sheets, context)
        : undefined,
    SourceEntityArn:
      output.SourceEntityArn !== undefined && output.SourceEntityArn !== null ? output.SourceEntityArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    ThemeArn: output.ThemeArn !== undefined && output.ThemeArn !== null ? output.ThemeArn : undefined,
    VersionNumber:
      output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateVersionSummary = (
  output: any,
  context: __SerdeContext
): TemplateVersionSummary => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VersionNumber:
      output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateVersionSummaryList = (
  output: any,
  context: __SerdeContext
): TemplateVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateVersionSummary(entry, context);
    });
};

const deserializeAws_restJson1TeradataParameters = (output: any, context: __SerdeContext): TeradataParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
  } as any;
};

const deserializeAws_restJson1Theme = (output: any, context: __SerdeContext): Theme => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ThemeId: output.ThemeId !== undefined && output.ThemeId !== null ? output.ThemeId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? deserializeAws_restJson1ThemeVersion(output.Version, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeAlias = (output: any, context: __SerdeContext): ThemeAlias => {
  return {
    AliasName: output.AliasName !== undefined && output.AliasName !== null ? output.AliasName : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    ThemeVersionNumber:
      output.ThemeVersionNumber !== undefined && output.ThemeVersionNumber !== null
        ? output.ThemeVersionNumber
        : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeAliasList = (output: any, context: __SerdeContext): ThemeAlias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeAlias(entry, context);
    });
};

const deserializeAws_restJson1ThemeConfiguration = (output: any, context: __SerdeContext): ThemeConfiguration => {
  return {
    DataColorPalette:
      output.DataColorPalette !== undefined && output.DataColorPalette !== null
        ? deserializeAws_restJson1DataColorPalette(output.DataColorPalette, context)
        : undefined,
    Sheet:
      output.Sheet !== undefined && output.Sheet !== null
        ? deserializeAws_restJson1SheetStyle(output.Sheet, context)
        : undefined,
    UIColorPalette:
      output.UIColorPalette !== undefined && output.UIColorPalette !== null
        ? deserializeAws_restJson1UIColorPalette(output.UIColorPalette, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeError = (output: any, context: __SerdeContext): ThemeError => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeErrorList = (output: any, context: __SerdeContext): ThemeError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeError(entry, context);
    });
};

const deserializeAws_restJson1ThemeSummary = (output: any, context: __SerdeContext): ThemeSummary => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    LatestVersionNumber:
      output.LatestVersionNumber !== undefined && output.LatestVersionNumber !== null
        ? output.LatestVersionNumber
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ThemeId: output.ThemeId !== undefined && output.ThemeId !== null ? output.ThemeId : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeSummaryList = (output: any, context: __SerdeContext): ThemeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeSummary(entry, context);
    });
};

const deserializeAws_restJson1ThemeVersion = (output: any, context: __SerdeContext): ThemeVersion => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    BaseThemeId: output.BaseThemeId !== undefined && output.BaseThemeId !== null ? output.BaseThemeId : undefined,
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_restJson1ThemeConfiguration(output.Configuration, context)
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
        ? deserializeAws_restJson1ThemeErrorList(output.Errors, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VersionNumber:
      output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeVersionSummary = (output: any, context: __SerdeContext): ThemeVersionSummary => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VersionNumber:
      output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeVersionSummaryList = (
  output: any,
  context: __SerdeContext
): ThemeVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeVersionSummary(entry, context);
    });
};

const deserializeAws_restJson1TileLayoutStyle = (output: any, context: __SerdeContext): TileLayoutStyle => {
  return {
    Gutter:
      output.Gutter !== undefined && output.Gutter !== null
        ? deserializeAws_restJson1GutterStyle(output.Gutter, context)
        : undefined,
    Margin:
      output.Margin !== undefined && output.Margin !== null
        ? deserializeAws_restJson1MarginStyle(output.Margin, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TileStyle = (output: any, context: __SerdeContext): TileStyle => {
  return {
    Border:
      output.Border !== undefined && output.Border !== null
        ? deserializeAws_restJson1BorderStyle(output.Border, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TransformOperation = (output: any, context: __SerdeContext): TransformOperation => {
  if (output.CastColumnTypeOperation !== undefined && output.CastColumnTypeOperation !== null) {
    return {
      CastColumnTypeOperation: deserializeAws_restJson1CastColumnTypeOperation(output.CastColumnTypeOperation, context),
    };
  }
  if (output.CreateColumnsOperation !== undefined && output.CreateColumnsOperation !== null) {
    return {
      CreateColumnsOperation: deserializeAws_restJson1CreateColumnsOperation(output.CreateColumnsOperation, context),
    };
  }
  if (output.FilterOperation !== undefined && output.FilterOperation !== null) {
    return {
      FilterOperation: deserializeAws_restJson1FilterOperation(output.FilterOperation, context),
    };
  }
  if (output.ProjectOperation !== undefined && output.ProjectOperation !== null) {
    return {
      ProjectOperation: deserializeAws_restJson1ProjectOperation(output.ProjectOperation, context),
    };
  }
  if (output.RenameColumnOperation !== undefined && output.RenameColumnOperation !== null) {
    return {
      RenameColumnOperation: deserializeAws_restJson1RenameColumnOperation(output.RenameColumnOperation, context),
    };
  }
  if (output.TagColumnOperation !== undefined && output.TagColumnOperation !== null) {
    return {
      TagColumnOperation: deserializeAws_restJson1TagColumnOperation(output.TagColumnOperation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1TransformOperationList = (output: any, context: __SerdeContext): TransformOperation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransformOperation(entry, context);
    });
};

const deserializeAws_restJson1TwitterParameters = (output: any, context: __SerdeContext): TwitterParameters => {
  return {
    MaxRows: output.MaxRows !== undefined && output.MaxRows !== null ? output.MaxRows : undefined,
    Query: output.Query !== undefined && output.Query !== null ? output.Query : undefined,
  } as any;
};

const deserializeAws_restJson1UIColorPalette = (output: any, context: __SerdeContext): UIColorPalette => {
  return {
    Accent: output.Accent !== undefined && output.Accent !== null ? output.Accent : undefined,
    AccentForeground:
      output.AccentForeground !== undefined && output.AccentForeground !== null ? output.AccentForeground : undefined,
    Danger: output.Danger !== undefined && output.Danger !== null ? output.Danger : undefined,
    DangerForeground:
      output.DangerForeground !== undefined && output.DangerForeground !== null ? output.DangerForeground : undefined,
    Dimension: output.Dimension !== undefined && output.Dimension !== null ? output.Dimension : undefined,
    DimensionForeground:
      output.DimensionForeground !== undefined && output.DimensionForeground !== null
        ? output.DimensionForeground
        : undefined,
    Measure: output.Measure !== undefined && output.Measure !== null ? output.Measure : undefined,
    MeasureForeground:
      output.MeasureForeground !== undefined && output.MeasureForeground !== null
        ? output.MeasureForeground
        : undefined,
    PrimaryBackground:
      output.PrimaryBackground !== undefined && output.PrimaryBackground !== null
        ? output.PrimaryBackground
        : undefined,
    PrimaryForeground:
      output.PrimaryForeground !== undefined && output.PrimaryForeground !== null
        ? output.PrimaryForeground
        : undefined,
    SecondaryBackground:
      output.SecondaryBackground !== undefined && output.SecondaryBackground !== null
        ? output.SecondaryBackground
        : undefined,
    SecondaryForeground:
      output.SecondaryForeground !== undefined && output.SecondaryForeground !== null
        ? output.SecondaryForeground
        : undefined,
    Success: output.Success !== undefined && output.Success !== null ? output.Success : undefined,
    SuccessForeground:
      output.SuccessForeground !== undefined && output.SuccessForeground !== null
        ? output.SuccessForeground
        : undefined,
    Warning: output.Warning !== undefined && output.Warning !== null ? output.Warning : undefined,
    WarningForeground:
      output.WarningForeground !== undefined && output.WarningForeground !== null
        ? output.WarningForeground
        : undefined,
  } as any;
};

const deserializeAws_restJson1UploadSettings = (output: any, context: __SerdeContext): UploadSettings => {
  return {
    ContainsHeader:
      output.ContainsHeader !== undefined && output.ContainsHeader !== null ? output.ContainsHeader : undefined,
    Delimiter: output.Delimiter !== undefined && output.Delimiter !== null ? output.Delimiter : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    StartFromRow: output.StartFromRow !== undefined && output.StartFromRow !== null ? output.StartFromRow : undefined,
    TextQualifier:
      output.TextQualifier !== undefined && output.TextQualifier !== null ? output.TextQualifier : undefined,
  } as any;
};

const deserializeAws_restJson1User = (output: any, context: __SerdeContext): User => {
  return {
    Active: output.Active !== undefined && output.Active !== null ? output.Active : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CustomPermissionsName:
      output.CustomPermissionsName !== undefined && output.CustomPermissionsName !== null
        ? output.CustomPermissionsName
        : undefined,
    Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
    IdentityType: output.IdentityType !== undefined && output.IdentityType !== null ? output.IdentityType : undefined,
    PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
    Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
  } as any;
};

const deserializeAws_restJson1UserList = (output: any, context: __SerdeContext): User[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1User(entry, context);
    });
};

const deserializeAws_restJson1VpcConnectionProperties = (
  output: any,
  context: __SerdeContext
): VpcConnectionProperties => {
  return {
    VpcConnectionArn:
      output.VpcConnectionArn !== undefined && output.VpcConnectionArn !== null ? output.VpcConnectionArn : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
