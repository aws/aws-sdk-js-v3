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
  defaultSecurityIRHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchGetMemberAccountDetailsCommandInput,
  BatchGetMemberAccountDetailsCommandOutput,
} from "./commands/BatchGetMemberAccountDetailsCommand";
import { CancelMembershipCommandInput, CancelMembershipCommandOutput } from "./commands/CancelMembershipCommand";
import { CloseCaseCommandInput, CloseCaseCommandOutput } from "./commands/CloseCaseCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import { CreateCaseCommentCommandInput, CreateCaseCommentCommandOutput } from "./commands/CreateCaseCommentCommand";
import { CreateMembershipCommandInput, CreateMembershipCommandOutput } from "./commands/CreateMembershipCommand";
import {
  GetCaseAttachmentDownloadUrlCommandInput,
  GetCaseAttachmentDownloadUrlCommandOutput,
} from "./commands/GetCaseAttachmentDownloadUrlCommand";
import {
  GetCaseAttachmentUploadUrlCommandInput,
  GetCaseAttachmentUploadUrlCommandOutput,
} from "./commands/GetCaseAttachmentUploadUrlCommand";
import { GetCaseCommandInput, GetCaseCommandOutput } from "./commands/GetCaseCommand";
import { GetMembershipCommandInput, GetMembershipCommandOutput } from "./commands/GetMembershipCommand";
import { ListCaseEditsCommandInput, ListCaseEditsCommandOutput } from "./commands/ListCaseEditsCommand";
import { ListCasesCommandInput, ListCasesCommandOutput } from "./commands/ListCasesCommand";
import { ListCommentsCommandInput, ListCommentsCommandOutput } from "./commands/ListCommentsCommand";
import { ListMembershipsCommandInput, ListMembershipsCommandOutput } from "./commands/ListMembershipsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCaseCommandInput, UpdateCaseCommandOutput } from "./commands/UpdateCaseCommand";
import { UpdateCaseCommentCommandInput, UpdateCaseCommentCommandOutput } from "./commands/UpdateCaseCommentCommand";
import { UpdateCaseStatusCommandInput, UpdateCaseStatusCommandOutput } from "./commands/UpdateCaseStatusCommand";
import { UpdateMembershipCommandInput, UpdateMembershipCommandOutput } from "./commands/UpdateMembershipCommand";
import { UpdateResolverTypeCommandInput, UpdateResolverTypeCommandOutput } from "./commands/UpdateResolverTypeCommand";
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
  | BatchGetMemberAccountDetailsCommandInput
  | CancelMembershipCommandInput
  | CloseCaseCommandInput
  | CreateCaseCommandInput
  | CreateCaseCommentCommandInput
  | CreateMembershipCommandInput
  | GetCaseAttachmentDownloadUrlCommandInput
  | GetCaseAttachmentUploadUrlCommandInput
  | GetCaseCommandInput
  | GetMembershipCommandInput
  | ListCaseEditsCommandInput
  | ListCasesCommandInput
  | ListCommentsCommandInput
  | ListMembershipsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCaseCommandInput
  | UpdateCaseCommentCommandInput
  | UpdateCaseStatusCommandInput
  | UpdateMembershipCommandInput
  | UpdateResolverTypeCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetMemberAccountDetailsCommandOutput
  | CancelMembershipCommandOutput
  | CloseCaseCommandOutput
  | CreateCaseCommandOutput
  | CreateCaseCommentCommandOutput
  | CreateMembershipCommandOutput
  | GetCaseAttachmentDownloadUrlCommandOutput
  | GetCaseAttachmentUploadUrlCommandOutput
  | GetCaseCommandOutput
  | GetMembershipCommandOutput
  | ListCaseEditsCommandOutput
  | ListCasesCommandOutput
  | ListCommentsCommandOutput
  | ListMembershipsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCaseCommandOutput
  | UpdateCaseCommentCommandOutput
  | UpdateCaseStatusCommandOutput
  | UpdateMembershipCommandOutput
  | UpdateResolverTypeCommandOutput;

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
export type SecurityIRClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SecurityIRClient class constructor that set the region, credentials and other options.
 */
export interface SecurityIRClientConfig extends SecurityIRClientConfigType {}

/**
 * @public
 */
export type SecurityIRClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SecurityIRClient class. This is resolved and normalized from the {@link SecurityIRClientConfig | constructor configuration interface}.
 */
export interface SecurityIRClientResolvedConfig extends SecurityIRClientResolvedConfigType {}

/**
 * <p>This guide provides documents the action and response elements for customer use of the service.</p>
 * @public
 */
export class SecurityIRClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SecurityIRClientResolvedConfig
> {
  /**
   * The resolved configuration of SecurityIRClient class. This is resolved and normalized from the {@link SecurityIRClientConfig | constructor configuration interface}.
   */
  readonly config: SecurityIRClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SecurityIRClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultSecurityIRHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SecurityIRClientResolvedConfig) =>
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
