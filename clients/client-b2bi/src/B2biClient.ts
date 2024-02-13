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

import { CreateCapabilityCommandInput, CreateCapabilityCommandOutput } from "./commands/CreateCapabilityCommand";
import { CreatePartnershipCommandInput, CreatePartnershipCommandOutput } from "./commands/CreatePartnershipCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import { CreateTransformerCommandInput, CreateTransformerCommandOutput } from "./commands/CreateTransformerCommand";
import { DeleteCapabilityCommandInput, DeleteCapabilityCommandOutput } from "./commands/DeleteCapabilityCommand";
import { DeletePartnershipCommandInput, DeletePartnershipCommandOutput } from "./commands/DeletePartnershipCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import { DeleteTransformerCommandInput, DeleteTransformerCommandOutput } from "./commands/DeleteTransformerCommand";
import { GetCapabilityCommandInput, GetCapabilityCommandOutput } from "./commands/GetCapabilityCommand";
import { GetPartnershipCommandInput, GetPartnershipCommandOutput } from "./commands/GetPartnershipCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetTransformerCommandInput, GetTransformerCommandOutput } from "./commands/GetTransformerCommand";
import { GetTransformerJobCommandInput, GetTransformerJobCommandOutput } from "./commands/GetTransformerJobCommand";
import { ListCapabilitiesCommandInput, ListCapabilitiesCommandOutput } from "./commands/ListCapabilitiesCommand";
import { ListPartnershipsCommandInput, ListPartnershipsCommandOutput } from "./commands/ListPartnershipsCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "./commands/ListProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTransformersCommandInput, ListTransformersCommandOutput } from "./commands/ListTransformersCommand";
import {
  StartTransformerJobCommandInput,
  StartTransformerJobCommandOutput,
} from "./commands/StartTransformerJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestMappingCommandInput, TestMappingCommandOutput } from "./commands/TestMappingCommand";
import { TestParsingCommandInput, TestParsingCommandOutput } from "./commands/TestParsingCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCapabilityCommandInput, UpdateCapabilityCommandOutput } from "./commands/UpdateCapabilityCommand";
import { UpdatePartnershipCommandInput, UpdatePartnershipCommandOutput } from "./commands/UpdatePartnershipCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import { UpdateTransformerCommandInput, UpdateTransformerCommandOutput } from "./commands/UpdateTransformerCommand";
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
  | CreateCapabilityCommandInput
  | CreatePartnershipCommandInput
  | CreateProfileCommandInput
  | CreateTransformerCommandInput
  | DeleteCapabilityCommandInput
  | DeletePartnershipCommandInput
  | DeleteProfileCommandInput
  | DeleteTransformerCommandInput
  | GetCapabilityCommandInput
  | GetPartnershipCommandInput
  | GetProfileCommandInput
  | GetTransformerCommandInput
  | GetTransformerJobCommandInput
  | ListCapabilitiesCommandInput
  | ListPartnershipsCommandInput
  | ListProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListTransformersCommandInput
  | StartTransformerJobCommandInput
  | TagResourceCommandInput
  | TestMappingCommandInput
  | TestParsingCommandInput
  | UntagResourceCommandInput
  | UpdateCapabilityCommandInput
  | UpdatePartnershipCommandInput
  | UpdateProfileCommandInput
  | UpdateTransformerCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateCapabilityCommandOutput
  | CreatePartnershipCommandOutput
  | CreateProfileCommandOutput
  | CreateTransformerCommandOutput
  | DeleteCapabilityCommandOutput
  | DeletePartnershipCommandOutput
  | DeleteProfileCommandOutput
  | DeleteTransformerCommandOutput
  | GetCapabilityCommandOutput
  | GetPartnershipCommandOutput
  | GetProfileCommandOutput
  | GetTransformerCommandOutput
  | GetTransformerJobCommandOutput
  | ListCapabilitiesCommandOutput
  | ListPartnershipsCommandOutput
  | ListProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTransformersCommandOutput
  | StartTransformerJobCommandOutput
  | TagResourceCommandOutput
  | TestMappingCommandOutput
  | TestParsingCommandOutput
  | UntagResourceCommandOutput
  | UpdateCapabilityCommandOutput
  | UpdatePartnershipCommandOutput
  | UpdateProfileCommandOutput
  | UpdateTransformerCommandOutput;

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
export type B2biClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of B2biClient class constructor that set the region, credentials and other options.
 */
export interface B2biClientConfig extends B2biClientConfigType {}

/**
 * @public
 */
export type B2biClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of B2biClient class. This is resolved and normalized from the {@link B2biClientConfig | constructor configuration interface}.
 */
export interface B2biClientResolvedConfig extends B2biClientResolvedConfigType {}

/**
 * @public
 * <p>This is the <i>Amazon Web Services B2B Data Interchange API Reference</i>. It provides descriptions, API request parameters, and the XML response for each of the B2BI API actions.</p>
 *          <p>B2BI enables automated exchange of EDI (electronic data interchange) based business-critical transactions at cloud
 *          scale, with elasticity and pay-as-you-go pricing. Businesses use EDI documents to exchange
 *          transactional data with trading partners, such as suppliers and end customers, using
 *          standardized formats such as X12.</p>
 *          <note>
 *             <p>Rather than actually running a command, you can use the
 *             <code>--generate-cli-skeleton</code> parameter with any API call to generate and display
 *             a parameter template. You can then use the generated template to customize and use as input
 *             on a later command. For details, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html#cli-usage-skeleton-generate">Generate and use a parameter skeleton file</a>.</p>
 *          </note>
 */
export class B2biClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  B2biClientResolvedConfig
> {
  /**
   * The resolved configuration of B2biClient class. This is resolved and normalized from the {@link B2biClientConfig | constructor configuration interface}.
   */
  readonly config: B2biClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<B2biClientConfig>) {
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
