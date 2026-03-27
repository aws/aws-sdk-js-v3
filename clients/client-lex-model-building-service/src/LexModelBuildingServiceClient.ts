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
  defaultLexModelBuildingServiceHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "./commands/CreateBotVersionCommand";
import type {
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
} from "./commands/CreateIntentVersionCommand";
import type {
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
} from "./commands/CreateSlotTypeVersionCommand";
import type { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "./commands/DeleteBotAliasCommand";
import type {
  DeleteBotChannelAssociationCommandInput,
  DeleteBotChannelAssociationCommandOutput,
} from "./commands/DeleteBotChannelAssociationCommand";
import type { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import type { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "./commands/DeleteBotVersionCommand";
import type { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "./commands/DeleteIntentCommand";
import type {
  DeleteIntentVersionCommandInput,
  DeleteIntentVersionCommandOutput,
} from "./commands/DeleteIntentVersionCommand";
import type { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "./commands/DeleteSlotTypeCommand";
import type {
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput,
} from "./commands/DeleteSlotTypeVersionCommand";
import type { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "./commands/DeleteUtterancesCommand";
import type { GetBotAliasCommandInput, GetBotAliasCommandOutput } from "./commands/GetBotAliasCommand";
import type { GetBotAliasesCommandInput, GetBotAliasesCommandOutput } from "./commands/GetBotAliasesCommand";
import type {
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
} from "./commands/GetBotChannelAssociationCommand";
import type {
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "./commands/GetBotChannelAssociationsCommand";
import type { GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import type { GetBotsCommandInput, GetBotsCommandOutput } from "./commands/GetBotsCommand";
import type { GetBotVersionsCommandInput, GetBotVersionsCommandOutput } from "./commands/GetBotVersionsCommand";
import type { GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput } from "./commands/GetBuiltinIntentCommand";
import type {
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput,
} from "./commands/GetBuiltinIntentsCommand";
import type {
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "./commands/GetBuiltinSlotTypesCommand";
import type { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import type { GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import type { GetIntentCommandInput, GetIntentCommandOutput } from "./commands/GetIntentCommand";
import type { GetIntentsCommandInput, GetIntentsCommandOutput } from "./commands/GetIntentsCommand";
import type {
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput,
} from "./commands/GetIntentVersionsCommand";
import type { GetMigrationCommandInput, GetMigrationCommandOutput } from "./commands/GetMigrationCommand";
import type { GetMigrationsCommandInput, GetMigrationsCommandOutput } from "./commands/GetMigrationsCommand";
import type { GetSlotTypeCommandInput, GetSlotTypeCommandOutput } from "./commands/GetSlotTypeCommand";
import type { GetSlotTypesCommandInput, GetSlotTypesCommandOutput } from "./commands/GetSlotTypesCommand";
import type {
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "./commands/GetSlotTypeVersionsCommand";
import type {
  GetUtterancesViewCommandInput,
  GetUtterancesViewCommandOutput,
} from "./commands/GetUtterancesViewCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PutBotAliasCommandInput, PutBotAliasCommandOutput } from "./commands/PutBotAliasCommand";
import type { PutBotCommandInput, PutBotCommandOutput } from "./commands/PutBotCommand";
import type { PutIntentCommandInput, PutIntentCommandOutput } from "./commands/PutIntentCommand";
import type { PutSlotTypeCommandInput, PutSlotTypeCommandOutput } from "./commands/PutSlotTypeCommand";
import type { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import type { StartMigrationCommandInput, StartMigrationCommandOutput } from "./commands/StartMigrationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
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

/**
 * @public
 */
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
export type LexModelBuildingServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of LexModelBuildingServiceClient class constructor that set the region, credentials and other options.
 */
export interface LexModelBuildingServiceClientConfig extends LexModelBuildingServiceClientConfigType {}

/**
 * @public
 */
export type LexModelBuildingServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of LexModelBuildingServiceClient class. This is resolved and normalized from the {@link LexModelBuildingServiceClientConfig | constructor configuration interface}.
 */
export interface LexModelBuildingServiceClientResolvedConfig extends LexModelBuildingServiceClientResolvedConfigType {}

/**
 * <fullname>Amazon Lex Build-Time Actions</fullname>
 *          <p> Amazon Lex is an AWS service for building conversational voice and text
 *       interfaces. Use these actions to create, update, and delete conversational
 *       bots for new and existing client applications. </p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<LexModelBuildingServiceClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultLexModelBuildingServiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: LexModelBuildingServiceClientResolvedConfig) =>
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
