// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "./commands/CreateTemplateAliasCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import { CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput } from "./commands/CreateThemeAliasCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import {
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "./commands/DeleteAccountCustomizationCommand";
import {
  DeleteAccountSubscriptionCommandInput,
  DeleteAccountSubscriptionCommandOutput,
} from "./commands/DeleteAccountSubscriptionCommand";
import { DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput } from "./commands/DeleteAnalysisCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
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
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "./commands/DeleteTemplateAliasCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import { DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput } from "./commands/DeleteThemeAliasCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import {
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
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
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import {
  DescribeDashboardDefinitionCommandInput,
  DescribeDashboardDefinitionCommandOutput,
} from "./commands/DescribeDashboardDefinitionCommand";
import {
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "./commands/DescribeDashboardPermissionsCommand";
import { DescribeDataSetCommandInput, DescribeDataSetCommandOutput } from "./commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "./commands/DescribeDataSetPermissionsCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "./commands/DescribeDataSourcePermissionsCommand";
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
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "./commands/DescribeNamespaceCommand";
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
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import {
  GenerateEmbedUrlForAnonymousUserCommandInput,
  GenerateEmbedUrlForAnonymousUserCommandOutput,
} from "./commands/GenerateEmbedUrlForAnonymousUserCommand";
import {
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
} from "./commands/GenerateEmbedUrlForRegisteredUserCommand";
import {
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "./commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput } from "./commands/GetSessionEmbedUrlCommand";
import { ListAnalysesCommandInput, ListAnalysesCommandOutput } from "./commands/ListAnalysesCommand";
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
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "./commands/ListIngestionsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
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
import { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "./commands/ListUserGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { RegisterUserCommandInput, RegisterUserCommandOutput } from "./commands/RegisterUserCommand";
import { RestoreAnalysisCommandInput, RestoreAnalysisCommandOutput } from "./commands/RestoreAnalysisCommand";
import { SearchAnalysesCommandInput, SearchAnalysesCommandOutput } from "./commands/SearchAnalysesCommand";
import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "./commands/SearchDashboardsCommand";
import { SearchDataSetsCommandInput, SearchDataSetsCommandOutput } from "./commands/SearchDataSetsCommand";
import { SearchDataSourcesCommandInput, SearchDataSourcesCommandOutput } from "./commands/SearchDataSourcesCommand";
import { SearchFoldersCommandInput, SearchFoldersCommandOutput } from "./commands/SearchFoldersCommand";
import { SearchGroupsCommandInput, SearchGroupsCommandOutput } from "./commands/SearchGroupsCommand";
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
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import {
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "./commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "./commands/UpdateDashboardPublishedVersionCommand";
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
  UpdateIpRestrictionCommandInput,
  UpdateIpRestrictionCommandOutput,
} from "./commands/UpdateIpRestrictionCommand";
import {
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
} from "./commands/UpdatePublicSharingSettingsCommand";
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
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CancelIngestionCommandInput
  | CreateAccountCustomizationCommandInput
  | CreateAccountSubscriptionCommandInput
  | CreateAnalysisCommandInput
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
  | CreateTemplateAliasCommandInput
  | CreateTemplateCommandInput
  | CreateThemeAliasCommandInput
  | CreateThemeCommandInput
  | DeleteAccountCustomizationCommandInput
  | DeleteAccountSubscriptionCommandInput
  | DeleteAnalysisCommandInput
  | DeleteDashboardCommandInput
  | DeleteDataSetCommandInput
  | DeleteDataSourceCommandInput
  | DeleteFolderCommandInput
  | DeleteFolderMembershipCommandInput
  | DeleteGroupCommandInput
  | DeleteGroupMembershipCommandInput
  | DeleteIAMPolicyAssignmentCommandInput
  | DeleteNamespaceCommandInput
  | DeleteTemplateAliasCommandInput
  | DeleteTemplateCommandInput
  | DeleteThemeAliasCommandInput
  | DeleteThemeCommandInput
  | DeleteUserByPrincipalIdCommandInput
  | DeleteUserCommandInput
  | DescribeAccountCustomizationCommandInput
  | DescribeAccountSettingsCommandInput
  | DescribeAccountSubscriptionCommandInput
  | DescribeAnalysisCommandInput
  | DescribeAnalysisDefinitionCommandInput
  | DescribeAnalysisPermissionsCommandInput
  | DescribeDashboardCommandInput
  | DescribeDashboardDefinitionCommandInput
  | DescribeDashboardPermissionsCommandInput
  | DescribeDataSetCommandInput
  | DescribeDataSetPermissionsCommandInput
  | DescribeDataSourceCommandInput
  | DescribeDataSourcePermissionsCommandInput
  | DescribeFolderCommandInput
  | DescribeFolderPermissionsCommandInput
  | DescribeFolderResolvedPermissionsCommandInput
  | DescribeGroupCommandInput
  | DescribeGroupMembershipCommandInput
  | DescribeIAMPolicyAssignmentCommandInput
  | DescribeIngestionCommandInput
  | DescribeIpRestrictionCommandInput
  | DescribeNamespaceCommandInput
  | DescribeTemplateAliasCommandInput
  | DescribeTemplateCommandInput
  | DescribeTemplateDefinitionCommandInput
  | DescribeTemplatePermissionsCommandInput
  | DescribeThemeAliasCommandInput
  | DescribeThemeCommandInput
  | DescribeThemePermissionsCommandInput
  | DescribeUserCommandInput
  | GenerateEmbedUrlForAnonymousUserCommandInput
  | GenerateEmbedUrlForRegisteredUserCommandInput
  | GetDashboardEmbedUrlCommandInput
  | GetSessionEmbedUrlCommandInput
  | ListAnalysesCommandInput
  | ListDashboardVersionsCommandInput
  | ListDashboardsCommandInput
  | ListDataSetsCommandInput
  | ListDataSourcesCommandInput
  | ListFolderMembersCommandInput
  | ListFoldersCommandInput
  | ListGroupMembershipsCommandInput
  | ListGroupsCommandInput
  | ListIAMPolicyAssignmentsCommandInput
  | ListIAMPolicyAssignmentsForUserCommandInput
  | ListIngestionsCommandInput
  | ListNamespacesCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateAliasesCommandInput
  | ListTemplateVersionsCommandInput
  | ListTemplatesCommandInput
  | ListThemeAliasesCommandInput
  | ListThemeVersionsCommandInput
  | ListThemesCommandInput
  | ListUserGroupsCommandInput
  | ListUsersCommandInput
  | RegisterUserCommandInput
  | RestoreAnalysisCommandInput
  | SearchAnalysesCommandInput
  | SearchDashboardsCommandInput
  | SearchDataSetsCommandInput
  | SearchDataSourcesCommandInput
  | SearchFoldersCommandInput
  | SearchGroupsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountCustomizationCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateAnalysisCommandInput
  | UpdateAnalysisPermissionsCommandInput
  | UpdateDashboardCommandInput
  | UpdateDashboardPermissionsCommandInput
  | UpdateDashboardPublishedVersionCommandInput
  | UpdateDataSetCommandInput
  | UpdateDataSetPermissionsCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDataSourcePermissionsCommandInput
  | UpdateFolderCommandInput
  | UpdateFolderPermissionsCommandInput
  | UpdateGroupCommandInput
  | UpdateIAMPolicyAssignmentCommandInput
  | UpdateIpRestrictionCommandInput
  | UpdatePublicSharingSettingsCommandInput
  | UpdateTemplateAliasCommandInput
  | UpdateTemplateCommandInput
  | UpdateTemplatePermissionsCommandInput
  | UpdateThemeAliasCommandInput
  | UpdateThemeCommandInput
  | UpdateThemePermissionsCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | CancelIngestionCommandOutput
  | CreateAccountCustomizationCommandOutput
  | CreateAccountSubscriptionCommandOutput
  | CreateAnalysisCommandOutput
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
  | CreateTemplateAliasCommandOutput
  | CreateTemplateCommandOutput
  | CreateThemeAliasCommandOutput
  | CreateThemeCommandOutput
  | DeleteAccountCustomizationCommandOutput
  | DeleteAccountSubscriptionCommandOutput
  | DeleteAnalysisCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteDataSetCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteFolderCommandOutput
  | DeleteFolderMembershipCommandOutput
  | DeleteGroupCommandOutput
  | DeleteGroupMembershipCommandOutput
  | DeleteIAMPolicyAssignmentCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteTemplateAliasCommandOutput
  | DeleteTemplateCommandOutput
  | DeleteThemeAliasCommandOutput
  | DeleteThemeCommandOutput
  | DeleteUserByPrincipalIdCommandOutput
  | DeleteUserCommandOutput
  | DescribeAccountCustomizationCommandOutput
  | DescribeAccountSettingsCommandOutput
  | DescribeAccountSubscriptionCommandOutput
  | DescribeAnalysisCommandOutput
  | DescribeAnalysisDefinitionCommandOutput
  | DescribeAnalysisPermissionsCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeDashboardDefinitionCommandOutput
  | DescribeDashboardPermissionsCommandOutput
  | DescribeDataSetCommandOutput
  | DescribeDataSetPermissionsCommandOutput
  | DescribeDataSourceCommandOutput
  | DescribeDataSourcePermissionsCommandOutput
  | DescribeFolderCommandOutput
  | DescribeFolderPermissionsCommandOutput
  | DescribeFolderResolvedPermissionsCommandOutput
  | DescribeGroupCommandOutput
  | DescribeGroupMembershipCommandOutput
  | DescribeIAMPolicyAssignmentCommandOutput
  | DescribeIngestionCommandOutput
  | DescribeIpRestrictionCommandOutput
  | DescribeNamespaceCommandOutput
  | DescribeTemplateAliasCommandOutput
  | DescribeTemplateCommandOutput
  | DescribeTemplateDefinitionCommandOutput
  | DescribeTemplatePermissionsCommandOutput
  | DescribeThemeAliasCommandOutput
  | DescribeThemeCommandOutput
  | DescribeThemePermissionsCommandOutput
  | DescribeUserCommandOutput
  | GenerateEmbedUrlForAnonymousUserCommandOutput
  | GenerateEmbedUrlForRegisteredUserCommandOutput
  | GetDashboardEmbedUrlCommandOutput
  | GetSessionEmbedUrlCommandOutput
  | ListAnalysesCommandOutput
  | ListDashboardVersionsCommandOutput
  | ListDashboardsCommandOutput
  | ListDataSetsCommandOutput
  | ListDataSourcesCommandOutput
  | ListFolderMembersCommandOutput
  | ListFoldersCommandOutput
  | ListGroupMembershipsCommandOutput
  | ListGroupsCommandOutput
  | ListIAMPolicyAssignmentsCommandOutput
  | ListIAMPolicyAssignmentsForUserCommandOutput
  | ListIngestionsCommandOutput
  | ListNamespacesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateAliasesCommandOutput
  | ListTemplateVersionsCommandOutput
  | ListTemplatesCommandOutput
  | ListThemeAliasesCommandOutput
  | ListThemeVersionsCommandOutput
  | ListThemesCommandOutput
  | ListUserGroupsCommandOutput
  | ListUsersCommandOutput
  | RegisterUserCommandOutput
  | RestoreAnalysisCommandOutput
  | SearchAnalysesCommandOutput
  | SearchDashboardsCommandOutput
  | SearchDataSetsCommandOutput
  | SearchDataSourcesCommandOutput
  | SearchFoldersCommandOutput
  | SearchGroupsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountCustomizationCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateAnalysisCommandOutput
  | UpdateAnalysisPermissionsCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateDashboardPermissionsCommandOutput
  | UpdateDashboardPublishedVersionCommandOutput
  | UpdateDataSetCommandOutput
  | UpdateDataSetPermissionsCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDataSourcePermissionsCommandOutput
  | UpdateFolderCommandOutput
  | UpdateFolderPermissionsCommandOutput
  | UpdateGroupCommandOutput
  | UpdateIAMPolicyAssignmentCommandOutput
  | UpdateIpRestrictionCommandOutput
  | UpdatePublicSharingSettingsCommandOutput
  | UpdateTemplateAliasCommandOutput
  | UpdateTemplateCommandOutput
  | UpdateTemplatePermissionsCommandOutput
  | UpdateThemeAliasCommandOutput
  | UpdateThemeCommandOutput
  | UpdateThemePermissionsCommandOutput
  | UpdateUserCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type QuickSightClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of QuickSightClient class constructor that set the region, credentials and other options.
 */
export interface QuickSightClientConfig extends QuickSightClientConfigType {}

type QuickSightClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of QuickSightClient class. This is resolved and normalized from the {@link QuickSightClientConfig | constructor configuration interface}.
 */
export interface QuickSightClientResolvedConfig extends QuickSightClientResolvedConfigType {}

/**
 * <fullname>Amazon QuickSight API Reference</fullname>
 *          <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the
 *             Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your
 *             organization. This API reference contains documentation for a programming interface that
 *             you can use to manage Amazon QuickSight. </p>
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

  constructor(configuration: QuickSightClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
