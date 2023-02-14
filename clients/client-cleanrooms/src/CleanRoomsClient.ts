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

import { BatchGetSchemaCommandInput, BatchGetSchemaCommandOutput } from "./commands/BatchGetSchemaCommand";
import {
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
} from "./commands/CreateCollaborationCommand";
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
  DeleteCollaborationCommandInput,
  DeleteCollaborationCommandOutput,
} from "./commands/DeleteCollaborationCommand";
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
import { GetCollaborationCommandInput, GetCollaborationCommandOutput } from "./commands/GetCollaborationCommand";
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
import { GetProtectedQueryCommandInput, GetProtectedQueryCommandOutput } from "./commands/GetProtectedQueryCommand";
import {
  GetSchemaAnalysisRuleCommandInput,
  GetSchemaAnalysisRuleCommandOutput,
} from "./commands/GetSchemaAnalysisRuleCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import { ListCollaborationsCommandInput, ListCollaborationsCommandOutput } from "./commands/ListCollaborationsCommand";
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
import {
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "./commands/ListProtectedQueriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
} from "./commands/StartProtectedQueryCommand";
import {
  UpdateCollaborationCommandInput,
  UpdateCollaborationCommandOutput,
} from "./commands/UpdateCollaborationCommand";
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

export type ServiceInputTypes =
  | BatchGetSchemaCommandInput
  | CreateCollaborationCommandInput
  | CreateConfiguredTableAnalysisRuleCommandInput
  | CreateConfiguredTableAssociationCommandInput
  | CreateConfiguredTableCommandInput
  | CreateMembershipCommandInput
  | DeleteCollaborationCommandInput
  | DeleteConfiguredTableAnalysisRuleCommandInput
  | DeleteConfiguredTableAssociationCommandInput
  | DeleteConfiguredTableCommandInput
  | DeleteMemberCommandInput
  | DeleteMembershipCommandInput
  | GetCollaborationCommandInput
  | GetConfiguredTableAnalysisRuleCommandInput
  | GetConfiguredTableAssociationCommandInput
  | GetConfiguredTableCommandInput
  | GetMembershipCommandInput
  | GetProtectedQueryCommandInput
  | GetSchemaAnalysisRuleCommandInput
  | GetSchemaCommandInput
  | ListCollaborationsCommandInput
  | ListConfiguredTableAssociationsCommandInput
  | ListConfiguredTablesCommandInput
  | ListMembersCommandInput
  | ListMembershipsCommandInput
  | ListProtectedQueriesCommandInput
  | ListSchemasCommandInput
  | StartProtectedQueryCommandInput
  | UpdateCollaborationCommandInput
  | UpdateConfiguredTableAnalysisRuleCommandInput
  | UpdateConfiguredTableAssociationCommandInput
  | UpdateConfiguredTableCommandInput
  | UpdateMembershipCommandInput
  | UpdateProtectedQueryCommandInput;

export type ServiceOutputTypes =
  | BatchGetSchemaCommandOutput
  | CreateCollaborationCommandOutput
  | CreateConfiguredTableAnalysisRuleCommandOutput
  | CreateConfiguredTableAssociationCommandOutput
  | CreateConfiguredTableCommandOutput
  | CreateMembershipCommandOutput
  | DeleteCollaborationCommandOutput
  | DeleteConfiguredTableAnalysisRuleCommandOutput
  | DeleteConfiguredTableAssociationCommandOutput
  | DeleteConfiguredTableCommandOutput
  | DeleteMemberCommandOutput
  | DeleteMembershipCommandOutput
  | GetCollaborationCommandOutput
  | GetConfiguredTableAnalysisRuleCommandOutput
  | GetConfiguredTableAssociationCommandOutput
  | GetConfiguredTableCommandOutput
  | GetMembershipCommandOutput
  | GetProtectedQueryCommandOutput
  | GetSchemaAnalysisRuleCommandOutput
  | GetSchemaCommandOutput
  | ListCollaborationsCommandOutput
  | ListConfiguredTableAssociationsCommandOutput
  | ListConfiguredTablesCommandOutput
  | ListMembersCommandOutput
  | ListMembershipsCommandOutput
  | ListProtectedQueriesCommandOutput
  | ListSchemasCommandOutput
  | StartProtectedQueryCommandOutput
  | UpdateCollaborationCommandOutput
  | UpdateConfiguredTableAnalysisRuleCommandOutput
  | UpdateConfiguredTableAssociationCommandOutput
  | UpdateConfiguredTableCommandOutput
  | UpdateMembershipCommandOutput
  | UpdateProtectedQueryCommandOutput;

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

type CleanRoomsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of CleanRoomsClient class constructor that set the region, credentials and other options.
 */
export interface CleanRoomsClientConfig extends CleanRoomsClientConfigType {}

type CleanRoomsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of CleanRoomsClient class. This is resolved and normalized from the {@link CleanRoomsClientConfig | constructor configuration interface}.
 */
export interface CleanRoomsClientResolvedConfig extends CleanRoomsClientResolvedConfigType {}

/**
 * <note>
 *             <p>AWS Clean Rooms is in preview release and is subject to change.</p>
 *          </note>
 *          <p>Welcome to the <i>AWS Clean Rooms API Reference</i>.</p>
 *          <p>AWS Clean Rooms is an AWS service that helps multiple parties to join their data
 *          together in a secure collaboration workspace. In the collaboration, members who can query
 *          and receive results can get insights into the combined data without either party getting
 *          access to the other party's raw data.</p>
 *          <p>To learn more about AWS Clean Rooms concepts, procedures, and best practices, see the
 *             <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">AWS Clean
 *             Rooms User Guide</a>.</p>
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

  constructor(configuration: CleanRoomsClientConfig) {
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
