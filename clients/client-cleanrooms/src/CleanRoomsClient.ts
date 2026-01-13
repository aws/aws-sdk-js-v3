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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCleanRoomsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchGetCollaborationAnalysisTemplateCommandInput,
  BatchGetCollaborationAnalysisTemplateCommandOutput,
} from "./commands/BatchGetCollaborationAnalysisTemplateCommand";
import {
  BatchGetSchemaAnalysisRuleCommandInput,
  BatchGetSchemaAnalysisRuleCommandOutput,
} from "./commands/BatchGetSchemaAnalysisRuleCommand";
import { BatchGetSchemaCommandInput, BatchGetSchemaCommandOutput } from "./commands/BatchGetSchemaCommand";
import {
  CreateAnalysisTemplateCommandInput,
  CreateAnalysisTemplateCommandOutput,
} from "./commands/CreateAnalysisTemplateCommand";
import {
  CreateCollaborationChangeRequestCommandInput,
  CreateCollaborationChangeRequestCommandOutput,
} from "./commands/CreateCollaborationChangeRequestCommand";
import {
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
} from "./commands/CreateCollaborationCommand";
import {
  CreateConfiguredAudienceModelAssociationCommandInput,
  CreateConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/CreateConfiguredAudienceModelAssociationCommand";
import {
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/CreateConfiguredTableAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationAnalysisRuleCommandInput,
  CreateConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/CreateConfiguredTableAssociationAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationCommandInput,
  CreateConfiguredTableAssociationCommandOutput,
} from "./commands/CreateConfiguredTableAssociationCommand";
import {
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
} from "./commands/CreateConfiguredTableCommand";
import {
  CreateIdMappingTableCommandInput,
  CreateIdMappingTableCommandOutput,
} from "./commands/CreateIdMappingTableCommand";
import {
  CreateIdNamespaceAssociationCommandInput,
  CreateIdNamespaceAssociationCommandOutput,
} from "./commands/CreateIdNamespaceAssociationCommand";
import { CreateMembershipCommandInput, CreateMembershipCommandOutput } from "./commands/CreateMembershipCommand";
import {
  CreatePrivacyBudgetTemplateCommandInput,
  CreatePrivacyBudgetTemplateCommandOutput,
} from "./commands/CreatePrivacyBudgetTemplateCommand";
import {
  DeleteAnalysisTemplateCommandInput,
  DeleteAnalysisTemplateCommandOutput,
} from "./commands/DeleteAnalysisTemplateCommand";
import {
  DeleteCollaborationCommandInput,
  DeleteCollaborationCommandOutput,
} from "./commands/DeleteCollaborationCommand";
import {
  DeleteConfiguredAudienceModelAssociationCommandInput,
  DeleteConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/DeleteConfiguredAudienceModelAssociationCommand";
import {
  DeleteConfiguredTableAnalysisRuleCommandInput,
  DeleteConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/DeleteConfiguredTableAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
  DeleteConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/DeleteConfiguredTableAssociationAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
} from "./commands/DeleteConfiguredTableAssociationCommand";
import {
  DeleteConfiguredTableCommandInput,
  DeleteConfiguredTableCommandOutput,
} from "./commands/DeleteConfiguredTableCommand";
import {
  DeleteIdMappingTableCommandInput,
  DeleteIdMappingTableCommandOutput,
} from "./commands/DeleteIdMappingTableCommand";
import {
  DeleteIdNamespaceAssociationCommandInput,
  DeleteIdNamespaceAssociationCommandOutput,
} from "./commands/DeleteIdNamespaceAssociationCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "./commands/DeleteMemberCommand";
import { DeleteMembershipCommandInput, DeleteMembershipCommandOutput } from "./commands/DeleteMembershipCommand";
import {
  DeletePrivacyBudgetTemplateCommandInput,
  DeletePrivacyBudgetTemplateCommandOutput,
} from "./commands/DeletePrivacyBudgetTemplateCommand";
import {
  GetAnalysisTemplateCommandInput,
  GetAnalysisTemplateCommandOutput,
} from "./commands/GetAnalysisTemplateCommand";
import {
  GetCollaborationAnalysisTemplateCommandInput,
  GetCollaborationAnalysisTemplateCommandOutput,
} from "./commands/GetCollaborationAnalysisTemplateCommand";
import {
  GetCollaborationChangeRequestCommandInput,
  GetCollaborationChangeRequestCommandOutput,
} from "./commands/GetCollaborationChangeRequestCommand";
import { GetCollaborationCommandInput, GetCollaborationCommandOutput } from "./commands/GetCollaborationCommand";
import {
  GetCollaborationConfiguredAudienceModelAssociationCommandInput,
  GetCollaborationConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/GetCollaborationConfiguredAudienceModelAssociationCommand";
import {
  GetCollaborationIdNamespaceAssociationCommandInput,
  GetCollaborationIdNamespaceAssociationCommandOutput,
} from "./commands/GetCollaborationIdNamespaceAssociationCommand";
import {
  GetCollaborationPrivacyBudgetTemplateCommandInput,
  GetCollaborationPrivacyBudgetTemplateCommandOutput,
} from "./commands/GetCollaborationPrivacyBudgetTemplateCommand";
import {
  GetConfiguredAudienceModelAssociationCommandInput,
  GetConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/GetConfiguredAudienceModelAssociationCommand";
import {
  GetConfiguredTableAnalysisRuleCommandInput,
  GetConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/GetConfiguredTableAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationAnalysisRuleCommandInput,
  GetConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/GetConfiguredTableAssociationAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationCommandInput,
  GetConfiguredTableAssociationCommandOutput,
} from "./commands/GetConfiguredTableAssociationCommand";
import { GetConfiguredTableCommandInput, GetConfiguredTableCommandOutput } from "./commands/GetConfiguredTableCommand";
import { GetIdMappingTableCommandInput, GetIdMappingTableCommandOutput } from "./commands/GetIdMappingTableCommand";
import {
  GetIdNamespaceAssociationCommandInput,
  GetIdNamespaceAssociationCommandOutput,
} from "./commands/GetIdNamespaceAssociationCommand";
import { GetMembershipCommandInput, GetMembershipCommandOutput } from "./commands/GetMembershipCommand";
import {
  GetPrivacyBudgetTemplateCommandInput,
  GetPrivacyBudgetTemplateCommandOutput,
} from "./commands/GetPrivacyBudgetTemplateCommand";
import { GetProtectedJobCommandInput, GetProtectedJobCommandOutput } from "./commands/GetProtectedJobCommand";
import { GetProtectedQueryCommandInput, GetProtectedQueryCommandOutput } from "./commands/GetProtectedQueryCommand";
import {
  GetSchemaAnalysisRuleCommandInput,
  GetSchemaAnalysisRuleCommandOutput,
} from "./commands/GetSchemaAnalysisRuleCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import {
  ListAnalysisTemplatesCommandInput,
  ListAnalysisTemplatesCommandOutput,
} from "./commands/ListAnalysisTemplatesCommand";
import {
  ListCollaborationAnalysisTemplatesCommandInput,
  ListCollaborationAnalysisTemplatesCommandOutput,
} from "./commands/ListCollaborationAnalysisTemplatesCommand";
import {
  ListCollaborationChangeRequestsCommandInput,
  ListCollaborationChangeRequestsCommandOutput,
} from "./commands/ListCollaborationChangeRequestsCommand";
import {
  ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
} from "./commands/ListCollaborationConfiguredAudienceModelAssociationsCommand";
import {
  ListCollaborationIdNamespaceAssociationsCommandInput,
  ListCollaborationIdNamespaceAssociationsCommandOutput,
} from "./commands/ListCollaborationIdNamespaceAssociationsCommand";
import {
  ListCollaborationPrivacyBudgetsCommandInput,
  ListCollaborationPrivacyBudgetsCommandOutput,
} from "./commands/ListCollaborationPrivacyBudgetsCommand";
import {
  ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ListCollaborationPrivacyBudgetTemplatesCommandOutput,
} from "./commands/ListCollaborationPrivacyBudgetTemplatesCommand";
import { ListCollaborationsCommandInput, ListCollaborationsCommandOutput } from "./commands/ListCollaborationsCommand";
import {
  ListConfiguredAudienceModelAssociationsCommandInput,
  ListConfiguredAudienceModelAssociationsCommandOutput,
} from "./commands/ListConfiguredAudienceModelAssociationsCommand";
import {
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
} from "./commands/ListConfiguredTableAssociationsCommand";
import {
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput,
} from "./commands/ListConfiguredTablesCommand";
import {
  ListIdMappingTablesCommandInput,
  ListIdMappingTablesCommandOutput,
} from "./commands/ListIdMappingTablesCommand";
import {
  ListIdNamespaceAssociationsCommandInput,
  ListIdNamespaceAssociationsCommandOutput,
} from "./commands/ListIdNamespaceAssociationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListMembershipsCommandInput, ListMembershipsCommandOutput } from "./commands/ListMembershipsCommand";
import { ListPrivacyBudgetsCommandInput, ListPrivacyBudgetsCommandOutput } from "./commands/ListPrivacyBudgetsCommand";
import {
  ListPrivacyBudgetTemplatesCommandInput,
  ListPrivacyBudgetTemplatesCommandOutput,
} from "./commands/ListPrivacyBudgetTemplatesCommand";
import { ListProtectedJobsCommandInput, ListProtectedJobsCommandOutput } from "./commands/ListProtectedJobsCommand";
import {
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "./commands/ListProtectedQueriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PopulateIdMappingTableCommandInput,
  PopulateIdMappingTableCommandOutput,
} from "./commands/PopulateIdMappingTableCommand";
import {
  PreviewPrivacyImpactCommandInput,
  PreviewPrivacyImpactCommandOutput,
} from "./commands/PreviewPrivacyImpactCommand";
import { StartProtectedJobCommandInput, StartProtectedJobCommandOutput } from "./commands/StartProtectedJobCommand";
import {
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
} from "./commands/StartProtectedQueryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAnalysisTemplateCommandInput,
  UpdateAnalysisTemplateCommandOutput,
} from "./commands/UpdateAnalysisTemplateCommand";
import {
  UpdateCollaborationChangeRequestCommandInput,
  UpdateCollaborationChangeRequestCommandOutput,
} from "./commands/UpdateCollaborationChangeRequestCommand";
import {
  UpdateCollaborationCommandInput,
  UpdateCollaborationCommandOutput,
} from "./commands/UpdateCollaborationCommand";
import {
  UpdateConfiguredAudienceModelAssociationCommandInput,
  UpdateConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/UpdateConfiguredAudienceModelAssociationCommand";
import {
  UpdateConfiguredTableAnalysisRuleCommandInput,
  UpdateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/UpdateConfiguredTableAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
  UpdateConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/UpdateConfiguredTableAssociationAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationCommandInput,
  UpdateConfiguredTableAssociationCommandOutput,
} from "./commands/UpdateConfiguredTableAssociationCommand";
import {
  UpdateConfiguredTableCommandInput,
  UpdateConfiguredTableCommandOutput,
} from "./commands/UpdateConfiguredTableCommand";
import {
  UpdateIdMappingTableCommandInput,
  UpdateIdMappingTableCommandOutput,
} from "./commands/UpdateIdMappingTableCommand";
import {
  UpdateIdNamespaceAssociationCommandInput,
  UpdateIdNamespaceAssociationCommandOutput,
} from "./commands/UpdateIdNamespaceAssociationCommand";
import { UpdateMembershipCommandInput, UpdateMembershipCommandOutput } from "./commands/UpdateMembershipCommand";
import {
  UpdatePrivacyBudgetTemplateCommandInput,
  UpdatePrivacyBudgetTemplateCommandOutput,
} from "./commands/UpdatePrivacyBudgetTemplateCommand";
import { UpdateProtectedJobCommandInput, UpdateProtectedJobCommandOutput } from "./commands/UpdateProtectedJobCommand";
import {
  UpdateProtectedQueryCommandInput,
  UpdateProtectedQueryCommandOutput,
} from "./commands/UpdateProtectedQueryCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchGetCollaborationAnalysisTemplateCommandInput
  | BatchGetSchemaAnalysisRuleCommandInput
  | BatchGetSchemaCommandInput
  | CreateAnalysisTemplateCommandInput
  | CreateCollaborationChangeRequestCommandInput
  | CreateCollaborationCommandInput
  | CreateConfiguredAudienceModelAssociationCommandInput
  | CreateConfiguredTableAnalysisRuleCommandInput
  | CreateConfiguredTableAssociationAnalysisRuleCommandInput
  | CreateConfiguredTableAssociationCommandInput
  | CreateConfiguredTableCommandInput
  | CreateIdMappingTableCommandInput
  | CreateIdNamespaceAssociationCommandInput
  | CreateMembershipCommandInput
  | CreatePrivacyBudgetTemplateCommandInput
  | DeleteAnalysisTemplateCommandInput
  | DeleteCollaborationCommandInput
  | DeleteConfiguredAudienceModelAssociationCommandInput
  | DeleteConfiguredTableAnalysisRuleCommandInput
  | DeleteConfiguredTableAssociationAnalysisRuleCommandInput
  | DeleteConfiguredTableAssociationCommandInput
  | DeleteConfiguredTableCommandInput
  | DeleteIdMappingTableCommandInput
  | DeleteIdNamespaceAssociationCommandInput
  | DeleteMemberCommandInput
  | DeleteMembershipCommandInput
  | DeletePrivacyBudgetTemplateCommandInput
  | GetAnalysisTemplateCommandInput
  | GetCollaborationAnalysisTemplateCommandInput
  | GetCollaborationChangeRequestCommandInput
  | GetCollaborationCommandInput
  | GetCollaborationConfiguredAudienceModelAssociationCommandInput
  | GetCollaborationIdNamespaceAssociationCommandInput
  | GetCollaborationPrivacyBudgetTemplateCommandInput
  | GetConfiguredAudienceModelAssociationCommandInput
  | GetConfiguredTableAnalysisRuleCommandInput
  | GetConfiguredTableAssociationAnalysisRuleCommandInput
  | GetConfiguredTableAssociationCommandInput
  | GetConfiguredTableCommandInput
  | GetIdMappingTableCommandInput
  | GetIdNamespaceAssociationCommandInput
  | GetMembershipCommandInput
  | GetPrivacyBudgetTemplateCommandInput
  | GetProtectedJobCommandInput
  | GetProtectedQueryCommandInput
  | GetSchemaAnalysisRuleCommandInput
  | GetSchemaCommandInput
  | ListAnalysisTemplatesCommandInput
  | ListCollaborationAnalysisTemplatesCommandInput
  | ListCollaborationChangeRequestsCommandInput
  | ListCollaborationConfiguredAudienceModelAssociationsCommandInput
  | ListCollaborationIdNamespaceAssociationsCommandInput
  | ListCollaborationPrivacyBudgetTemplatesCommandInput
  | ListCollaborationPrivacyBudgetsCommandInput
  | ListCollaborationsCommandInput
  | ListConfiguredAudienceModelAssociationsCommandInput
  | ListConfiguredTableAssociationsCommandInput
  | ListConfiguredTablesCommandInput
  | ListIdMappingTablesCommandInput
  | ListIdNamespaceAssociationsCommandInput
  | ListMembersCommandInput
  | ListMembershipsCommandInput
  | ListPrivacyBudgetTemplatesCommandInput
  | ListPrivacyBudgetsCommandInput
  | ListProtectedJobsCommandInput
  | ListProtectedQueriesCommandInput
  | ListSchemasCommandInput
  | ListTagsForResourceCommandInput
  | PopulateIdMappingTableCommandInput
  | PreviewPrivacyImpactCommandInput
  | StartProtectedJobCommandInput
  | StartProtectedQueryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnalysisTemplateCommandInput
  | UpdateCollaborationChangeRequestCommandInput
  | UpdateCollaborationCommandInput
  | UpdateConfiguredAudienceModelAssociationCommandInput
  | UpdateConfiguredTableAnalysisRuleCommandInput
  | UpdateConfiguredTableAssociationAnalysisRuleCommandInput
  | UpdateConfiguredTableAssociationCommandInput
  | UpdateConfiguredTableCommandInput
  | UpdateIdMappingTableCommandInput
  | UpdateIdNamespaceAssociationCommandInput
  | UpdateMembershipCommandInput
  | UpdatePrivacyBudgetTemplateCommandInput
  | UpdateProtectedJobCommandInput
  | UpdateProtectedQueryCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetCollaborationAnalysisTemplateCommandOutput
  | BatchGetSchemaAnalysisRuleCommandOutput
  | BatchGetSchemaCommandOutput
  | CreateAnalysisTemplateCommandOutput
  | CreateCollaborationChangeRequestCommandOutput
  | CreateCollaborationCommandOutput
  | CreateConfiguredAudienceModelAssociationCommandOutput
  | CreateConfiguredTableAnalysisRuleCommandOutput
  | CreateConfiguredTableAssociationAnalysisRuleCommandOutput
  | CreateConfiguredTableAssociationCommandOutput
  | CreateConfiguredTableCommandOutput
  | CreateIdMappingTableCommandOutput
  | CreateIdNamespaceAssociationCommandOutput
  | CreateMembershipCommandOutput
  | CreatePrivacyBudgetTemplateCommandOutput
  | DeleteAnalysisTemplateCommandOutput
  | DeleteCollaborationCommandOutput
  | DeleteConfiguredAudienceModelAssociationCommandOutput
  | DeleteConfiguredTableAnalysisRuleCommandOutput
  | DeleteConfiguredTableAssociationAnalysisRuleCommandOutput
  | DeleteConfiguredTableAssociationCommandOutput
  | DeleteConfiguredTableCommandOutput
  | DeleteIdMappingTableCommandOutput
  | DeleteIdNamespaceAssociationCommandOutput
  | DeleteMemberCommandOutput
  | DeleteMembershipCommandOutput
  | DeletePrivacyBudgetTemplateCommandOutput
  | GetAnalysisTemplateCommandOutput
  | GetCollaborationAnalysisTemplateCommandOutput
  | GetCollaborationChangeRequestCommandOutput
  | GetCollaborationCommandOutput
  | GetCollaborationConfiguredAudienceModelAssociationCommandOutput
  | GetCollaborationIdNamespaceAssociationCommandOutput
  | GetCollaborationPrivacyBudgetTemplateCommandOutput
  | GetConfiguredAudienceModelAssociationCommandOutput
  | GetConfiguredTableAnalysisRuleCommandOutput
  | GetConfiguredTableAssociationAnalysisRuleCommandOutput
  | GetConfiguredTableAssociationCommandOutput
  | GetConfiguredTableCommandOutput
  | GetIdMappingTableCommandOutput
  | GetIdNamespaceAssociationCommandOutput
  | GetMembershipCommandOutput
  | GetPrivacyBudgetTemplateCommandOutput
  | GetProtectedJobCommandOutput
  | GetProtectedQueryCommandOutput
  | GetSchemaAnalysisRuleCommandOutput
  | GetSchemaCommandOutput
  | ListAnalysisTemplatesCommandOutput
  | ListCollaborationAnalysisTemplatesCommandOutput
  | ListCollaborationChangeRequestsCommandOutput
  | ListCollaborationConfiguredAudienceModelAssociationsCommandOutput
  | ListCollaborationIdNamespaceAssociationsCommandOutput
  | ListCollaborationPrivacyBudgetTemplatesCommandOutput
  | ListCollaborationPrivacyBudgetsCommandOutput
  | ListCollaborationsCommandOutput
  | ListConfiguredAudienceModelAssociationsCommandOutput
  | ListConfiguredTableAssociationsCommandOutput
  | ListConfiguredTablesCommandOutput
  | ListIdMappingTablesCommandOutput
  | ListIdNamespaceAssociationsCommandOutput
  | ListMembersCommandOutput
  | ListMembershipsCommandOutput
  | ListPrivacyBudgetTemplatesCommandOutput
  | ListPrivacyBudgetsCommandOutput
  | ListProtectedJobsCommandOutput
  | ListProtectedQueriesCommandOutput
  | ListSchemasCommandOutput
  | ListTagsForResourceCommandOutput
  | PopulateIdMappingTableCommandOutput
  | PreviewPrivacyImpactCommandOutput
  | StartProtectedJobCommandOutput
  | StartProtectedQueryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnalysisTemplateCommandOutput
  | UpdateCollaborationChangeRequestCommandOutput
  | UpdateCollaborationCommandOutput
  | UpdateConfiguredAudienceModelAssociationCommandOutput
  | UpdateConfiguredTableAnalysisRuleCommandOutput
  | UpdateConfiguredTableAssociationAnalysisRuleCommandOutput
  | UpdateConfiguredTableAssociationCommandOutput
  | UpdateConfiguredTableCommandOutput
  | UpdateIdMappingTableCommandOutput
  | UpdateIdNamespaceAssociationCommandOutput
  | UpdateMembershipCommandOutput
  | UpdatePrivacyBudgetTemplateCommandOutput
  | UpdateProtectedJobCommandOutput
  | UpdateProtectedQueryCommandOutput;

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
export type CleanRoomsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CleanRoomsClient class constructor that set the region, credentials and other options.
 */
export interface CleanRoomsClientConfig extends CleanRoomsClientConfigType {}

/**
 * @public
 */
export type CleanRoomsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CleanRoomsClient class. This is resolved and normalized from the {@link CleanRoomsClientConfig | constructor configuration interface}.
 */
export interface CleanRoomsClientResolvedConfig extends CleanRoomsClientResolvedConfigType {}

/**
 * <p>Welcome to the <i>Clean Rooms API Reference</i>.</p> <p>Clean Rooms is an Amazon Web Services service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can run queries and jobs and receive results can get insights into the collective datasets without either party getting access to the other party's raw data.</p> <p>To learn more about Clean Rooms concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">Clean Rooms User Guide</a>.</p> <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>
 * @public
 */
export class CleanRoomsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CleanRoomsClientResolvedConfig
> {
  /**
   * The resolved configuration of CleanRoomsClient class. This is resolved and normalized from the {@link CleanRoomsClientConfig | constructor configuration interface}.
   */
  readonly config: CleanRoomsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CleanRoomsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCleanRoomsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CleanRoomsClientResolvedConfig) =>
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
