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
  defaultResourceExplorer2HttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateDefaultViewCommandInput,
  AssociateDefaultViewCommandOutput,
} from "./commands/AssociateDefaultViewCommand";
import { BatchGetViewCommandInput, BatchGetViewCommandOutput } from "./commands/BatchGetViewCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateResourceExplorerSetupCommandInput,
  CreateResourceExplorerSetupCommandOutput,
} from "./commands/CreateResourceExplorerSetupCommand";
import { CreateViewCommandInput, CreateViewCommandOutput } from "./commands/CreateViewCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import {
  DeleteResourceExplorerSetupCommandInput,
  DeleteResourceExplorerSetupCommandOutput,
} from "./commands/DeleteResourceExplorerSetupCommand";
import { DeleteViewCommandInput, DeleteViewCommandOutput } from "./commands/DeleteViewCommand";
import {
  DisassociateDefaultViewCommandInput,
  DisassociateDefaultViewCommandOutput,
} from "./commands/DisassociateDefaultViewCommand";
import {
  GetAccountLevelServiceConfigurationCommandInput,
  GetAccountLevelServiceConfigurationCommandOutput,
} from "./commands/GetAccountLevelServiceConfigurationCommand";
import { GetDefaultViewCommandInput, GetDefaultViewCommandOutput } from "./commands/GetDefaultViewCommand";
import { GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import { GetManagedViewCommandInput, GetManagedViewCommandOutput } from "./commands/GetManagedViewCommand";
import {
  GetResourceExplorerSetupCommandInput,
  GetResourceExplorerSetupCommandOutput,
} from "./commands/GetResourceExplorerSetupCommand";
import { GetServiceIndexCommandInput, GetServiceIndexCommandOutput } from "./commands/GetServiceIndexCommand";
import { GetServiceViewCommandInput, GetServiceViewCommandOutput } from "./commands/GetServiceViewCommand";
import { GetViewCommandInput, GetViewCommandOutput } from "./commands/GetViewCommand";
import { ListIndexesCommandInput, ListIndexesCommandOutput } from "./commands/ListIndexesCommand";
import {
  ListIndexesForMembersCommandInput,
  ListIndexesForMembersCommandOutput,
} from "./commands/ListIndexesForMembersCommand";
import { ListManagedViewsCommandInput, ListManagedViewsCommandOutput } from "./commands/ListManagedViewsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { ListServiceIndexesCommandInput, ListServiceIndexesCommandOutput } from "./commands/ListServiceIndexesCommand";
import { ListServiceViewsCommandInput, ListServiceViewsCommandOutput } from "./commands/ListServiceViewsCommand";
import {
  ListStreamingAccessForServicesCommandInput,
  ListStreamingAccessForServicesCommandOutput,
} from "./commands/ListStreamingAccessForServicesCommand";
import {
  ListSupportedResourceTypesCommandInput,
  ListSupportedResourceTypesCommandOutput,
} from "./commands/ListSupportedResourceTypesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListViewsCommandInput, ListViewsCommandOutput } from "./commands/ListViewsCommand";
import { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateIndexTypeCommandInput, UpdateIndexTypeCommandOutput } from "./commands/UpdateIndexTypeCommand";
import { UpdateViewCommandInput, UpdateViewCommandOutput } from "./commands/UpdateViewCommand";
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
  | AssociateDefaultViewCommandInput
  | BatchGetViewCommandInput
  | CreateIndexCommandInput
  | CreateResourceExplorerSetupCommandInput
  | CreateViewCommandInput
  | DeleteIndexCommandInput
  | DeleteResourceExplorerSetupCommandInput
  | DeleteViewCommandInput
  | DisassociateDefaultViewCommandInput
  | GetAccountLevelServiceConfigurationCommandInput
  | GetDefaultViewCommandInput
  | GetIndexCommandInput
  | GetManagedViewCommandInput
  | GetResourceExplorerSetupCommandInput
  | GetServiceIndexCommandInput
  | GetServiceViewCommandInput
  | GetViewCommandInput
  | ListIndexesCommandInput
  | ListIndexesForMembersCommandInput
  | ListManagedViewsCommandInput
  | ListResourcesCommandInput
  | ListServiceIndexesCommandInput
  | ListServiceViewsCommandInput
  | ListStreamingAccessForServicesCommandInput
  | ListSupportedResourceTypesCommandInput
  | ListTagsForResourceCommandInput
  | ListViewsCommandInput
  | SearchCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateIndexTypeCommandInput
  | UpdateViewCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateDefaultViewCommandOutput
  | BatchGetViewCommandOutput
  | CreateIndexCommandOutput
  | CreateResourceExplorerSetupCommandOutput
  | CreateViewCommandOutput
  | DeleteIndexCommandOutput
  | DeleteResourceExplorerSetupCommandOutput
  | DeleteViewCommandOutput
  | DisassociateDefaultViewCommandOutput
  | GetAccountLevelServiceConfigurationCommandOutput
  | GetDefaultViewCommandOutput
  | GetIndexCommandOutput
  | GetManagedViewCommandOutput
  | GetResourceExplorerSetupCommandOutput
  | GetServiceIndexCommandOutput
  | GetServiceViewCommandOutput
  | GetViewCommandOutput
  | ListIndexesCommandOutput
  | ListIndexesForMembersCommandOutput
  | ListManagedViewsCommandOutput
  | ListResourcesCommandOutput
  | ListServiceIndexesCommandOutput
  | ListServiceViewsCommandOutput
  | ListStreamingAccessForServicesCommandOutput
  | ListSupportedResourceTypesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListViewsCommandOutput
  | SearchCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateIndexTypeCommandOutput
  | UpdateViewCommandOutput;

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
export type ResourceExplorer2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ResourceExplorer2Client class constructor that set the region, credentials and other options.
 */
export interface ResourceExplorer2ClientConfig extends ResourceExplorer2ClientConfigType {}

/**
 * @public
 */
export type ResourceExplorer2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ResourceExplorer2Client class. This is resolved and normalized from the {@link ResourceExplorer2ClientConfig | constructor configuration interface}.
 */
export interface ResourceExplorer2ClientResolvedConfig extends ResourceExplorer2ClientResolvedConfigType {}

/**
 * <p>Amazon Web Services Resource Explorer is a resource search and discovery service. By using Resource Explorer, you can explore your resources using an internet search engine-like experience. Examples of resources include Amazon Relational Database Service (Amazon RDS) instances, Amazon Simple Storage Service (Amazon S3) buckets, or Amazon DynamoDB tables. You can search for your resources using resource metadata like names, tags, and IDs. Resource Explorer can search across all of the Amazon Web Services Regions in your account in which you turn the service on, to simplify your cross-Region workloads.</p> <p>Resource Explorer scans the resources in each of the Amazon Web Services Regions in your Amazon Web Services account in which you turn on Resource Explorer. Resource Explorer <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-index">creates and maintains an index</a> in each Region, with the details of that Region's resources.</p> <p>You can <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">search across all of the indexed Regions in your account</a> by designating one of your Amazon Web Services Regions to contain the aggregator index for the account. When you <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region-turn-on.html">promote a local index in a Region to become the aggregator index for the account</a>, Resource Explorer automatically replicates the index information from all local indexes in the other Regions to the aggregator index. Therefore, the Region with the aggregator index has a copy of all resource information for all Regions in the account where you turned on Resource Explorer. As a result, views in the aggregator index Region include resources from all of the indexed Regions in your account.</p> <p>For more information about Amazon Web Services Resource Explorer, including how to enable and configure the service, see the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/">Amazon Web Services Resource Explorer User Guide</a>.</p>
 * @public
 */
export class ResourceExplorer2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ResourceExplorer2ClientResolvedConfig
> {
  /**
   * The resolved configuration of ResourceExplorer2Client class. This is resolved and normalized from the {@link ResourceExplorer2ClientConfig | constructor configuration interface}.
   */
  readonly config: ResourceExplorer2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ResourceExplorer2ClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultResourceExplorer2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ResourceExplorer2ClientResolvedConfig) =>
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
