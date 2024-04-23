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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
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
  BatchGetCollaborationAnalysisTemplateCommandInput,
  BatchGetCollaborationAnalysisTemplateCommandOutput,
} from "./commands/BatchGetCollaborationAnalysisTemplateCommand";
import { BatchGetSchemaCommandInput, BatchGetSchemaCommandOutput } from "./commands/BatchGetSchemaCommand";
import {
  CreateAnalysisTemplateCommandInput,
  CreateAnalysisTemplateCommandOutput,
} from "./commands/CreateAnalysisTemplateCommand";
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
  CreateConfiguredTableAssociationCommandInput,
  CreateConfiguredTableAssociationCommandOutput,
} from "./commands/CreateConfiguredTableAssociationCommand";
import {
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
} from "./commands/CreateConfiguredTableCommand";
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
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
} from "./commands/DeleteConfiguredTableAssociationCommand";
import {
  DeleteConfiguredTableCommandInput,
  DeleteConfiguredTableCommandOutput,
} from "./commands/DeleteConfiguredTableCommand";
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
import { GetCollaborationCommandInput, GetCollaborationCommandOutput } from "./commands/GetCollaborationCommand";
import {
  GetCollaborationConfiguredAudienceModelAssociationCommandInput,
  GetCollaborationConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/GetCollaborationConfiguredAudienceModelAssociationCommand";
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
  GetConfiguredTableAssociationCommandInput,
  GetConfiguredTableAssociationCommandOutput,
} from "./commands/GetConfiguredTableAssociationCommand";
import { GetConfiguredTableCommandInput, GetConfiguredTableCommandOutput } from "./commands/GetConfiguredTableCommand";
import { GetMembershipCommandInput, GetMembershipCommandOutput } from "./commands/GetMembershipCommand";
import {
  GetPrivacyBudgetTemplateCommandInput,
  GetPrivacyBudgetTemplateCommandOutput,
} from "./commands/GetPrivacyBudgetTemplateCommand";
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
  ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
} from "./commands/ListCollaborationConfiguredAudienceModelAssociationsCommand";
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
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListMembershipsCommandInput, ListMembershipsCommandOutput } from "./commands/ListMembershipsCommand";
import { ListPrivacyBudgetsCommandInput, ListPrivacyBudgetsCommandOutput } from "./commands/ListPrivacyBudgetsCommand";
import {
  ListPrivacyBudgetTemplatesCommandInput,
  ListPrivacyBudgetTemplatesCommandOutput,
} from "./commands/ListPrivacyBudgetTemplatesCommand";
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
  PreviewPrivacyImpactCommandInput,
  PreviewPrivacyImpactCommandOutput,
} from "./commands/PreviewPrivacyImpactCommand";
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
  UpdateConfiguredTableAssociationCommandInput,
  UpdateConfiguredTableAssociationCommandOutput,
} from "./commands/UpdateConfiguredTableAssociationCommand";
import {
  UpdateConfiguredTableCommandInput,
  UpdateConfiguredTableCommandOutput,
} from "./commands/UpdateConfiguredTableCommand";
import { UpdateMembershipCommandInput, UpdateMembershipCommandOutput } from "./commands/UpdateMembershipCommand";
import {
  UpdatePrivacyBudgetTemplateCommandInput,
  UpdatePrivacyBudgetTemplateCommandOutput,
} from "./commands/UpdatePrivacyBudgetTemplateCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchGetCollaborationAnalysisTemplateCommandInput
  | BatchGetSchemaCommandInput
  | CreateAnalysisTemplateCommandInput
  | CreateCollaborationCommandInput
  | CreateConfiguredAudienceModelAssociationCommandInput
  | CreateConfiguredTableAnalysisRuleCommandInput
  | CreateConfiguredTableAssociationCommandInput
  | CreateConfiguredTableCommandInput
  | CreateMembershipCommandInput
  | CreatePrivacyBudgetTemplateCommandInput
  | DeleteAnalysisTemplateCommandInput
  | DeleteCollaborationCommandInput
  | DeleteConfiguredAudienceModelAssociationCommandInput
  | DeleteConfiguredTableAnalysisRuleCommandInput
  | DeleteConfiguredTableAssociationCommandInput
  | DeleteConfiguredTableCommandInput
  | DeleteMemberCommandInput
  | DeleteMembershipCommandInput
  | DeletePrivacyBudgetTemplateCommandInput
  | GetAnalysisTemplateCommandInput
  | GetCollaborationAnalysisTemplateCommandInput
  | GetCollaborationCommandInput
  | GetCollaborationConfiguredAudienceModelAssociationCommandInput
  | GetCollaborationPrivacyBudgetTemplateCommandInput
  | GetConfiguredAudienceModelAssociationCommandInput
  | GetConfiguredTableAnalysisRuleCommandInput
  | GetConfiguredTableAssociationCommandInput
  | GetConfiguredTableCommandInput
  | GetMembershipCommandInput
  | GetPrivacyBudgetTemplateCommandInput
  | GetProtectedQueryCommandInput
  | GetSchemaAnalysisRuleCommandInput
  | GetSchemaCommandInput
  | ListAnalysisTemplatesCommandInput
  | ListCollaborationAnalysisTemplatesCommandInput
  | ListCollaborationConfiguredAudienceModelAssociationsCommandInput
  | ListCollaborationPrivacyBudgetTemplatesCommandInput
  | ListCollaborationPrivacyBudgetsCommandInput
  | ListCollaborationsCommandInput
  | ListConfiguredAudienceModelAssociationsCommandInput
  | ListConfiguredTableAssociationsCommandInput
  | ListConfiguredTablesCommandInput
  | ListMembersCommandInput
  | ListMembershipsCommandInput
  | ListPrivacyBudgetTemplatesCommandInput
  | ListPrivacyBudgetsCommandInput
  | ListProtectedQueriesCommandInput
  | ListSchemasCommandInput
  | ListTagsForResourceCommandInput
  | PreviewPrivacyImpactCommandInput
  | StartProtectedQueryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnalysisTemplateCommandInput
  | UpdateCollaborationCommandInput
  | UpdateConfiguredAudienceModelAssociationCommandInput
  | UpdateConfiguredTableAnalysisRuleCommandInput
  | UpdateConfiguredTableAssociationCommandInput
  | UpdateConfiguredTableCommandInput
  | UpdateMembershipCommandInput
  | UpdatePrivacyBudgetTemplateCommandInput
  | UpdateProtectedQueryCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetCollaborationAnalysisTemplateCommandOutput
  | BatchGetSchemaCommandOutput
  | CreateAnalysisTemplateCommandOutput
  | CreateCollaborationCommandOutput
  | CreateConfiguredAudienceModelAssociationCommandOutput
  | CreateConfiguredTableAnalysisRuleCommandOutput
  | CreateConfiguredTableAssociationCommandOutput
  | CreateConfiguredTableCommandOutput
  | CreateMembershipCommandOutput
  | CreatePrivacyBudgetTemplateCommandOutput
  | DeleteAnalysisTemplateCommandOutput
  | DeleteCollaborationCommandOutput
  | DeleteConfiguredAudienceModelAssociationCommandOutput
  | DeleteConfiguredTableAnalysisRuleCommandOutput
  | DeleteConfiguredTableAssociationCommandOutput
  | DeleteConfiguredTableCommandOutput
  | DeleteMemberCommandOutput
  | DeleteMembershipCommandOutput
  | DeletePrivacyBudgetTemplateCommandOutput
  | GetAnalysisTemplateCommandOutput
  | GetCollaborationAnalysisTemplateCommandOutput
  | GetCollaborationCommandOutput
  | GetCollaborationConfiguredAudienceModelAssociationCommandOutput
  | GetCollaborationPrivacyBudgetTemplateCommandOutput
  | GetConfiguredAudienceModelAssociationCommandOutput
  | GetConfiguredTableAnalysisRuleCommandOutput
  | GetConfiguredTableAssociationCommandOutput
  | GetConfiguredTableCommandOutput
  | GetMembershipCommandOutput
  | GetPrivacyBudgetTemplateCommandOutput
  | GetProtectedQueryCommandOutput
  | GetSchemaAnalysisRuleCommandOutput
  | GetSchemaCommandOutput
  | ListAnalysisTemplatesCommandOutput
  | ListCollaborationAnalysisTemplatesCommandOutput
  | ListCollaborationConfiguredAudienceModelAssociationsCommandOutput
  | ListCollaborationPrivacyBudgetTemplatesCommandOutput
  | ListCollaborationPrivacyBudgetsCommandOutput
  | ListCollaborationsCommandOutput
  | ListConfiguredAudienceModelAssociationsCommandOutput
  | ListConfiguredTableAssociationsCommandOutput
  | ListConfiguredTablesCommandOutput
  | ListMembersCommandOutput
  | ListMembershipsCommandOutput
  | ListPrivacyBudgetTemplatesCommandOutput
  | ListPrivacyBudgetsCommandOutput
  | ListProtectedQueriesCommandOutput
  | ListSchemasCommandOutput
  | ListTagsForResourceCommandOutput
  | PreviewPrivacyImpactCommandOutput
  | StartProtectedQueryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnalysisTemplateCommandOutput
  | UpdateCollaborationCommandOutput
  | UpdateConfiguredAudienceModelAssociationCommandOutput
  | UpdateConfiguredTableAnalysisRuleCommandOutput
  | UpdateConfiguredTableAssociationCommandOutput
  | UpdateConfiguredTableCommandOutput
  | UpdateMembershipCommandOutput
  | UpdatePrivacyBudgetTemplateCommandOutput
  | UpdateProtectedQueryCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
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
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CleanRoomsClient class. This is resolved and normalized from the {@link CleanRoomsClientConfig | constructor configuration interface}.
 */
export interface CleanRoomsClientResolvedConfig extends CleanRoomsClientResolvedConfigType {}

/**
 * @public
 * <p>Welcome to the <i>Clean Rooms API Reference</i>.</p>
 *          <p>Clean Rooms is an Amazon Web Services service that helps multiple parties to join
 *          their data together in a secure collaboration workspace. In the collaboration, members who
 *          can query and receive results can get insights into the collective datasets without either
 *          party getting access to the other party's raw data.</p>
 *          <p>To learn more about Clean Rooms concepts, procedures, and best practices, see the
 *             <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">Clean Rooms User Guide</a>.</p>
 *          <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the
 *             <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
