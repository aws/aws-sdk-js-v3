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
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
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
  defaultQAppsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateLibraryItemReviewCommandInput,
  AssociateLibraryItemReviewCommandOutput,
} from "./commands/AssociateLibraryItemReviewCommand";
import {
  AssociateQAppWithUserCommandInput,
  AssociateQAppWithUserCommandOutput,
} from "./commands/AssociateQAppWithUserCommand";
import {
  BatchCreateCategoryCommandInput,
  BatchCreateCategoryCommandOutput,
} from "./commands/BatchCreateCategoryCommand";
import {
  BatchDeleteCategoryCommandInput,
  BatchDeleteCategoryCommandOutput,
} from "./commands/BatchDeleteCategoryCommand";
import {
  BatchUpdateCategoryCommandInput,
  BatchUpdateCategoryCommandOutput,
} from "./commands/BatchUpdateCategoryCommand";
import { CreateLibraryItemCommandInput, CreateLibraryItemCommandOutput } from "./commands/CreateLibraryItemCommand";
import { CreateQAppCommandInput, CreateQAppCommandOutput } from "./commands/CreateQAppCommand";
import { DeleteLibraryItemCommandInput, DeleteLibraryItemCommandOutput } from "./commands/DeleteLibraryItemCommand";
import { DeleteQAppCommandInput, DeleteQAppCommandOutput } from "./commands/DeleteQAppCommand";
import {
  DisassociateLibraryItemReviewCommandInput,
  DisassociateLibraryItemReviewCommandOutput,
} from "./commands/DisassociateLibraryItemReviewCommand";
import {
  DisassociateQAppFromUserCommandInput,
  DisassociateQAppFromUserCommandOutput,
} from "./commands/DisassociateQAppFromUserCommand";
import { GetLibraryItemCommandInput, GetLibraryItemCommandOutput } from "./commands/GetLibraryItemCommand";
import { GetQAppCommandInput, GetQAppCommandOutput } from "./commands/GetQAppCommand";
import { GetQAppSessionCommandInput, GetQAppSessionCommandOutput } from "./commands/GetQAppSessionCommand";
import { ImportDocumentCommandInput, ImportDocumentCommandOutput } from "./commands/ImportDocumentCommand";
import { ListCategoriesCommandInput, ListCategoriesCommandOutput } from "./commands/ListCategoriesCommand";
import { ListLibraryItemsCommandInput, ListLibraryItemsCommandOutput } from "./commands/ListLibraryItemsCommand";
import { ListQAppsCommandInput, ListQAppsCommandOutput } from "./commands/ListQAppsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PredictQAppCommandInput, PredictQAppCommandOutput } from "./commands/PredictQAppCommand";
import { StartQAppSessionCommandInput, StartQAppSessionCommandOutput } from "./commands/StartQAppSessionCommand";
import { StopQAppSessionCommandInput, StopQAppSessionCommandOutput } from "./commands/StopQAppSessionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateLibraryItemCommandInput, UpdateLibraryItemCommandOutput } from "./commands/UpdateLibraryItemCommand";
import {
  UpdateLibraryItemMetadataCommandInput,
  UpdateLibraryItemMetadataCommandOutput,
} from "./commands/UpdateLibraryItemMetadataCommand";
import { UpdateQAppCommandInput, UpdateQAppCommandOutput } from "./commands/UpdateQAppCommand";
import { UpdateQAppSessionCommandInput, UpdateQAppSessionCommandOutput } from "./commands/UpdateQAppSessionCommand";
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
  | AssociateLibraryItemReviewCommandInput
  | AssociateQAppWithUserCommandInput
  | BatchCreateCategoryCommandInput
  | BatchDeleteCategoryCommandInput
  | BatchUpdateCategoryCommandInput
  | CreateLibraryItemCommandInput
  | CreateQAppCommandInput
  | DeleteLibraryItemCommandInput
  | DeleteQAppCommandInput
  | DisassociateLibraryItemReviewCommandInput
  | DisassociateQAppFromUserCommandInput
  | GetLibraryItemCommandInput
  | GetQAppCommandInput
  | GetQAppSessionCommandInput
  | ImportDocumentCommandInput
  | ListCategoriesCommandInput
  | ListLibraryItemsCommandInput
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
  | UpdateQAppSessionCommandInput;

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
  | CreateQAppCommandOutput
  | DeleteLibraryItemCommandOutput
  | DeleteQAppCommandOutput
  | DisassociateLibraryItemReviewCommandOutput
  | DisassociateQAppFromUserCommandOutput
  | GetLibraryItemCommandOutput
  | GetQAppCommandOutput
  | GetQAppSessionCommandOutput
  | ImportDocumentCommandOutput
  | ListCategoriesCommandOutput
  | ListLibraryItemsCommandOutput
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
  | UpdateQAppSessionCommandOutput;

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
 * <p>The Amazon Q Apps feature capability within Amazon Q Business allows web experience
 *       users to create lightweight, purpose-built AI apps to fulfill specific tasks from
 *       within their web experience. For example, users can create a Q App that exclusively
 *       generates marketing-related content to improve your marketing team's productivity or a
 *       Q App for writing customer emails and creating promotional content using a certain
 *       style of voice, tone, and branding. For more information on the capabilities, see
 *       <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html#q-apps-actions">Amazon Q Apps capabilities</a> in the <i>Amazon Q Business User Guide</i>.
 *       </p>
 *          <p>For an overview of the Amazon Q App APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Operations_QApps.html">Overview of
 *       Amazon Q Apps API operations</a>.</p>
 *          <p>For information about the IAM access control permissions you need to
 *       use the Amazon Q Apps API, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html">
 *         IAM role for the Amazon Q Business web experience including Amazon Q Apps</a> in the
 *       <i>Amazon Q Business User Guide</i>.</p>
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
