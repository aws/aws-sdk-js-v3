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
import { GetBotVersionsCommandInput, GetBotVersionsCommandOutput } from "./commands/GetBotVersionsCommand";
import { GetBotsCommandInput, GetBotsCommandOutput } from "./commands/GetBotsCommand";
import { GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput } from "./commands/GetBuiltinIntentCommand";
import { GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput } from "./commands/GetBuiltinIntentsCommand";
import {
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "./commands/GetBuiltinSlotTypesCommand";
import { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import { GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import { GetIntentCommandInput, GetIntentCommandOutput } from "./commands/GetIntentCommand";
import { GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput } from "./commands/GetIntentVersionsCommand";
import { GetIntentsCommandInput, GetIntentsCommandOutput } from "./commands/GetIntentsCommand";
import { GetSlotTypeCommandInput, GetSlotTypeCommandOutput } from "./commands/GetSlotTypeCommand";
import {
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "./commands/GetSlotTypeVersionsCommand";
import { GetSlotTypesCommandInput, GetSlotTypesCommandOutput } from "./commands/GetSlotTypesCommand";
import { GetUtterancesViewCommandInput, GetUtterancesViewCommandOutput } from "./commands/GetUtterancesViewCommand";
import { PutBotAliasCommandInput, PutBotAliasCommandOutput } from "./commands/PutBotAliasCommand";
import { PutBotCommandInput, PutBotCommandOutput } from "./commands/PutBotCommand";
import { PutIntentCommandInput, PutIntentCommandOutput } from "./commands/PutIntentCommand";
import { PutSlotTypeCommandInput, PutSlotTypeCommandOutput } from "./commands/PutSlotTypeCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

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
  | GetSlotTypeCommandInput
  | GetSlotTypeVersionsCommandInput
  | GetSlotTypesCommandInput
  | GetUtterancesViewCommandInput
  | PutBotAliasCommandInput
  | PutBotCommandInput
  | PutIntentCommandInput
  | PutSlotTypeCommandInput
  | StartImportCommandInput;

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
  | GetSlotTypeCommandOutput
  | GetSlotTypeVersionsCommandOutput
  | GetSlotTypesCommandOutput
  | GetUtterancesViewCommandOutput
  | PutBotAliasCommandOutput
  | PutBotCommandOutput
  | PutIntentCommandOutput
  | PutSlotTypeCommandOutput
  | StartImportCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type LexModelBuildingServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type LexModelBuildingServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon Lex Build-Time Actions</fullname>
 *          <p> Amazon Lex is an AWS service for building conversational voice and text interfaces. Use
 *       these actions to create, update, and delete conversational bots for new and existing client
 *       applications. </p>
 */
export class LexModelBuildingServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LexModelBuildingServiceClientResolvedConfig
> {
  readonly config: LexModelBuildingServiceClientResolvedConfig;

  constructor(configuration: LexModelBuildingServiceClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
