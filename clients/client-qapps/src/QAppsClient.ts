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
  defaultQAppsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateLibraryItemReviewCommandInput,
  AssociateLibraryItemReviewCommandOutput,
} from "./commands/AssociateLibraryItemReviewCommand";
import type {
  AssociateQAppWithUserCommandInput,
  AssociateQAppWithUserCommandOutput,
} from "./commands/AssociateQAppWithUserCommand";
import type {
  BatchCreateCategoryCommandInput,
  BatchCreateCategoryCommandOutput,
} from "./commands/BatchCreateCategoryCommand";
import type {
  BatchDeleteCategoryCommandInput,
  BatchDeleteCategoryCommandOutput,
} from "./commands/BatchDeleteCategoryCommand";
import type {
  BatchUpdateCategoryCommandInput,
  BatchUpdateCategoryCommandOutput,
} from "./commands/BatchUpdateCategoryCommand";
import type {
  CreateLibraryItemCommandInput,
  CreateLibraryItemCommandOutput,
} from "./commands/CreateLibraryItemCommand";
import type {
  CreatePresignedUrlCommandInput,
  CreatePresignedUrlCommandOutput,
} from "./commands/CreatePresignedUrlCommand";
import type { CreateQAppCommandInput, CreateQAppCommandOutput } from "./commands/CreateQAppCommand";
import type {
  DeleteLibraryItemCommandInput,
  DeleteLibraryItemCommandOutput,
} from "./commands/DeleteLibraryItemCommand";
import type { DeleteQAppCommandInput, DeleteQAppCommandOutput } from "./commands/DeleteQAppCommand";
import type {
  DescribeQAppPermissionsCommandInput,
  DescribeQAppPermissionsCommandOutput,
} from "./commands/DescribeQAppPermissionsCommand";
import type {
  DisassociateLibraryItemReviewCommandInput,
  DisassociateLibraryItemReviewCommandOutput,
} from "./commands/DisassociateLibraryItemReviewCommand";
import type {
  DisassociateQAppFromUserCommandInput,
  DisassociateQAppFromUserCommandOutput,
} from "./commands/DisassociateQAppFromUserCommand";
import type {
  ExportQAppSessionDataCommandInput,
  ExportQAppSessionDataCommandOutput,
} from "./commands/ExportQAppSessionDataCommand";
import type { GetLibraryItemCommandInput, GetLibraryItemCommandOutput } from "./commands/GetLibraryItemCommand";
import type { GetQAppCommandInput, GetQAppCommandOutput } from "./commands/GetQAppCommand";
import type { GetQAppSessionCommandInput, GetQAppSessionCommandOutput } from "./commands/GetQAppSessionCommand";
import type {
  GetQAppSessionMetadataCommandInput,
  GetQAppSessionMetadataCommandOutput,
} from "./commands/GetQAppSessionMetadataCommand";
import type { ImportDocumentCommandInput, ImportDocumentCommandOutput } from "./commands/ImportDocumentCommand";
import type { ListCategoriesCommandInput, ListCategoriesCommandOutput } from "./commands/ListCategoriesCommand";
import type { ListLibraryItemsCommandInput, ListLibraryItemsCommandOutput } from "./commands/ListLibraryItemsCommand";
import type { ListQAppsCommandInput, ListQAppsCommandOutput } from "./commands/ListQAppsCommand";
import type {
  ListQAppSessionDataCommandInput,
  ListQAppSessionDataCommandOutput,
} from "./commands/ListQAppSessionDataCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PredictQAppCommandInput, PredictQAppCommandOutput } from "./commands/PredictQAppCommand";
import type { StartQAppSessionCommandInput, StartQAppSessionCommandOutput } from "./commands/StartQAppSessionCommand";
import type { StopQAppSessionCommandInput, StopQAppSessionCommandOutput } from "./commands/StopQAppSessionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateLibraryItemCommandInput,
  UpdateLibraryItemCommandOutput,
} from "./commands/UpdateLibraryItemCommand";
import type {
  UpdateLibraryItemMetadataCommandInput,
  UpdateLibraryItemMetadataCommandOutput,
} from "./commands/UpdateLibraryItemMetadataCommand";
import type { UpdateQAppCommandInput, UpdateQAppCommandOutput } from "./commands/UpdateQAppCommand";
import type {
  UpdateQAppPermissionsCommandInput,
  UpdateQAppPermissionsCommandOutput,
} from "./commands/UpdateQAppPermissionsCommand";
import type {
  UpdateQAppSessionCommandInput,
  UpdateQAppSessionCommandOutput,
} from "./commands/UpdateQAppSessionCommand";
import type {
  UpdateQAppSessionMetadataCommandInput,
  UpdateQAppSessionMetadataCommandOutput,
} from "./commands/UpdateQAppSessionMetadataCommand";
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
  | AssociateLibraryItemReviewCommandInput
  | AssociateQAppWithUserCommandInput
  | BatchCreateCategoryCommandInput
  | BatchDeleteCategoryCommandInput
  | BatchUpdateCategoryCommandInput
  | CreateLibraryItemCommandInput
  | CreatePresignedUrlCommandInput
  | CreateQAppCommandInput
  | DeleteLibraryItemCommandInput
  | DeleteQAppCommandInput
  | DescribeQAppPermissionsCommandInput
  | DisassociateLibraryItemReviewCommandInput
  | DisassociateQAppFromUserCommandInput
  | ExportQAppSessionDataCommandInput
  | GetLibraryItemCommandInput
  | GetQAppCommandInput
  | GetQAppSessionCommandInput
  | GetQAppSessionMetadataCommandInput
  | ImportDocumentCommandInput
  | ListCategoriesCommandInput
  | ListLibraryItemsCommandInput
  | ListQAppSessionDataCommandInput
  | ListQAppsCommandInput
  | ListTagsForResourceCommandInput
  | PredictQAppCommandInput
  | StartQAppSessionCommandInput
  | StopQAppSessionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateLibraryItemCommandInput
  | UpdateLibraryItemMetadataCommandInput
  | UpdateQAppCommandInput
  | UpdateQAppPermissionsCommandInput
  | UpdateQAppSessionCommandInput
  | UpdateQAppSessionMetadataCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateLibraryItemReviewCommandOutput
  | AssociateQAppWithUserCommandOutput
  | BatchCreateCategoryCommandOutput
  | BatchDeleteCategoryCommandOutput
  | BatchUpdateCategoryCommandOutput
  | CreateLibraryItemCommandOutput
  | CreatePresignedUrlCommandOutput
  | CreateQAppCommandOutput
  | DeleteLibraryItemCommandOutput
  | DeleteQAppCommandOutput
  | DescribeQAppPermissionsCommandOutput
  | DisassociateLibraryItemReviewCommandOutput
  | DisassociateQAppFromUserCommandOutput
  | ExportQAppSessionDataCommandOutput
  | GetLibraryItemCommandOutput
  | GetQAppCommandOutput
  | GetQAppSessionCommandOutput
  | GetQAppSessionMetadataCommandOutput
  | ImportDocumentCommandOutput
  | ListCategoriesCommandOutput
  | ListLibraryItemsCommandOutput
  | ListQAppSessionDataCommandOutput
  | ListQAppsCommandOutput
  | ListTagsForResourceCommandOutput
  | PredictQAppCommandOutput
  | StartQAppSessionCommandOutput
  | StopQAppSessionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateLibraryItemCommandOutput
  | UpdateLibraryItemMetadataCommandOutput
  | UpdateQAppCommandOutput
  | UpdateQAppPermissionsCommandOutput
  | UpdateQAppSessionCommandOutput
  | UpdateQAppSessionMetadataCommandOutput;

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
export type QAppsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of QAppsClient class constructor that set the region, credentials and other options.
 */
export interface QAppsClientConfig extends QAppsClientConfigType {}

/**
 * @public
 */
export type QAppsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of QAppsClient class. This is resolved and normalized from the {@link QAppsClientConfig | constructor configuration interface}.
 */
export interface QAppsClientResolvedConfig extends QAppsClientResolvedConfigType {}

/**
 * <p>The Amazon Q Apps feature capability within Amazon Q Business allows web experience users to create lightweight, purpose-built AI apps to fulfill specific tasks from within their web experience. For example, users can create a Q App that exclusively generates marketing-related content to improve your marketing team's productivity or a Q App for writing customer emails and creating promotional content using a certain style of voice, tone, and branding. For more information on the capabilities, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html#q-apps-actions">Amazon Q Apps capabilities</a> in the <i>Amazon Q Business User Guide</i>. </p> <p>For an overview of the Amazon Q App APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Operations_QApps.html">Overview of Amazon Q Apps API operations</a>.</p> <p>For information about the IAM access control permissions you need to use the Amazon Q Apps API, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html"> IAM role for the Amazon Q Business web experience including Amazon Q Apps</a> in the <i>Amazon Q Business User Guide</i>.</p>
 * @public
 */
export class QAppsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QAppsClientResolvedConfig
> {
  /**
   * The resolved configuration of QAppsClient class. This is resolved and normalized from the {@link QAppsClientConfig | constructor configuration interface}.
   */
  readonly config: QAppsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<QAppsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultQAppsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: QAppsClientResolvedConfig) =>
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
