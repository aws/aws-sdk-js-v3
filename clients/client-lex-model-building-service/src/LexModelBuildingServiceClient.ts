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

import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "./commands/CreateBotVersionCommand";
import {
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
} from "./commands/CreateIntentVersionCommand";
import {
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
} from "./commands/CreateSlotTypeVersionCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "./commands/DeleteBotAliasCommand";
import {
  DeleteBotChannelAssociationCommandInput,
  DeleteBotChannelAssociationCommandOutput,
} from "./commands/DeleteBotChannelAssociationCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "./commands/DeleteBotVersionCommand";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "./commands/DeleteIntentCommand";
import {
  DeleteIntentVersionCommandInput,
  DeleteIntentVersionCommandOutput,
} from "./commands/DeleteIntentVersionCommand";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "./commands/DeleteSlotTypeCommand";
import {
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput,
} from "./commands/DeleteSlotTypeVersionCommand";
import { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "./commands/DeleteUtterancesCommand";
import { GetBotAliasCommandInput, GetBotAliasCommandOutput } from "./commands/GetBotAliasCommand";
import { GetBotAliasesCommandInput, GetBotAliasesCommandOutput } from "./commands/GetBotAliasesCommand";
import {
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
} from "./commands/GetBotChannelAssociationCommand";
import {
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "./commands/GetBotChannelAssociationsCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import { GetBotsCommandInput, GetBotsCommandOutput } from "./commands/GetBotsCommand";
import { GetBotVersionsCommandInput, GetBotVersionsCommandOutput } from "./commands/GetBotVersionsCommand";
import { GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput } from "./commands/GetBuiltinIntentCommand";
import { GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput } from "./commands/GetBuiltinIntentsCommand";
import {
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "./commands/GetBuiltinSlotTypesCommand";
import { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import { GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import { GetIntentCommandInput, GetIntentCommandOutput } from "./commands/GetIntentCommand";
import { GetIntentsCommandInput, GetIntentsCommandOutput } from "./commands/GetIntentsCommand";
import { GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput } from "./commands/GetIntentVersionsCommand";
import { GetMigrationCommandInput, GetMigrationCommandOutput } from "./commands/GetMigrationCommand";
import { GetMigrationsCommandInput, GetMigrationsCommandOutput } from "./commands/GetMigrationsCommand";
import { GetSlotTypeCommandInput, GetSlotTypeCommandOutput } from "./commands/GetSlotTypeCommand";
import { GetSlotTypesCommandInput, GetSlotTypesCommandOutput } from "./commands/GetSlotTypesCommand";
import {
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "./commands/GetSlotTypeVersionsCommand";
import { GetUtterancesViewCommandInput, GetUtterancesViewCommandOutput } from "./commands/GetUtterancesViewCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutBotAliasCommandInput, PutBotAliasCommandOutput } from "./commands/PutBotAliasCommand";
import { PutBotCommandInput, PutBotCommandOutput } from "./commands/PutBotCommand";
import { PutIntentCommandInput, PutIntentCommandOutput } from "./commands/PutIntentCommand";
import { PutSlotTypeCommandInput, PutSlotTypeCommandOutput } from "./commands/PutSlotTypeCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import { StartMigrationCommandInput, StartMigrationCommandOutput } from "./commands/StartMigrationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateBotVersionCommandInput
  | CreateIntentVersionCommandInput
  | CreateSlotTypeVersionCommandInput
  | DeleteBotAliasCommandInput
  | DeleteBotChannelAssociationCommandInput
  | DeleteBotCommandInput
  | DeleteBotVersionCommandInput
  | DeleteIntentCommandInput
  | DeleteIntentVersionCommandInput
  | DeleteSlotTypeCommandInput
  | DeleteSlotTypeVersionCommandInput
  | DeleteUtterancesCommandInput
  | GetBotAliasCommandInput
  | GetBotAliasesCommandInput
  | GetBotChannelAssociationCommandInput
  | GetBotChannelAssociationsCommandInput
  | GetBotCommandInput
  | GetBotVersionsCommandInput
  | GetBotsCommandInput
  | GetBuiltinIntentCommandInput
  | GetBuiltinIntentsCommandInput
  | GetBuiltinSlotTypesCommandInput
  | GetExportCommandInput
  | GetImportCommandInput
  | GetIntentCommandInput
  | GetIntentVersionsCommandInput
  | GetIntentsCommandInput
  | GetMigrationCommandInput
  | GetMigrationsCommandInput
  | GetSlotTypeCommandInput
  | GetSlotTypeVersionsCommandInput
  | GetSlotTypesCommandInput
  | GetUtterancesViewCommandInput
  | ListTagsForResourceCommandInput
  | PutBotAliasCommandInput
  | PutBotCommandInput
  | PutIntentCommandInput
  | PutSlotTypeCommandInput
  | StartImportCommandInput
  | StartMigrationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CreateBotVersionCommandOutput
  | CreateIntentVersionCommandOutput
  | CreateSlotTypeVersionCommandOutput
  | DeleteBotAliasCommandOutput
  | DeleteBotChannelAssociationCommandOutput
  | DeleteBotCommandOutput
  | DeleteBotVersionCommandOutput
  | DeleteIntentCommandOutput
  | DeleteIntentVersionCommandOutput
  | DeleteSlotTypeCommandOutput
  | DeleteSlotTypeVersionCommandOutput
  | DeleteUtterancesCommandOutput
  | GetBotAliasCommandOutput
  | GetBotAliasesCommandOutput
  | GetBotChannelAssociationCommandOutput
  | GetBotChannelAssociationsCommandOutput
  | GetBotCommandOutput
  | GetBotVersionsCommandOutput
  | GetBotsCommandOutput
  | GetBuiltinIntentCommandOutput
  | GetBuiltinIntentsCommandOutput
  | GetBuiltinSlotTypesCommandOutput
  | GetExportCommandOutput
  | GetImportCommandOutput
  | GetIntentCommandOutput
  | GetIntentVersionsCommandOutput
  | GetIntentsCommandOutput
  | GetMigrationCommandOutput
  | GetMigrationsCommandOutput
  | GetSlotTypeCommandOutput
  | GetSlotTypeVersionsCommandOutput
  | GetSlotTypesCommandOutput
  | GetUtterancesViewCommandOutput
  | ListTagsForResourceCommandOutput
  | PutBotAliasCommandOutput
  | PutBotCommandOutput
  | PutIntentCommandOutput
  | PutSlotTypeCommandOutput
  | StartImportCommandOutput
  | StartMigrationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type LexModelBuildingServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of LexModelBuildingServiceClient class constructor that set the region, credentials and other options.
 */
export interface LexModelBuildingServiceClientConfig extends LexModelBuildingServiceClientConfigType {}

type LexModelBuildingServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of LexModelBuildingServiceClient class. This is resolved and normalized from the {@link LexModelBuildingServiceClientConfig | constructor configuration interface}.
 */
export interface LexModelBuildingServiceClientResolvedConfig extends LexModelBuildingServiceClientResolvedConfigType {}

/**
 * <fullname>Amazon Lex Build-Time Actions</fullname>
 *          <p> Amazon Lex is an AWS service for building conversational voice and text
 *       interfaces. Use these actions to create, update, and delete conversational
 *       bots for new and existing client applications. </p>
 */
export class LexModelBuildingServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LexModelBuildingServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of LexModelBuildingServiceClient class. This is resolved and normalized from the {@link LexModelBuildingServiceClientConfig | constructor configuration interface}.
   */
  readonly config: LexModelBuildingServiceClientResolvedConfig;

  constructor(configuration: LexModelBuildingServiceClientConfig) {
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
