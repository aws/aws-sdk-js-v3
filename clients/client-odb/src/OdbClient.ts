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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultOdbHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptMarketplaceRegistrationCommandInput,
  AcceptMarketplaceRegistrationCommandOutput,
} from "./commands/AcceptMarketplaceRegistrationCommand";
import {
  CreateCloudAutonomousVmClusterCommandInput,
  CreateCloudAutonomousVmClusterCommandOutput,
} from "./commands/CreateCloudAutonomousVmClusterCommand";
import {
  CreateCloudExadataInfrastructureCommandInput,
  CreateCloudExadataInfrastructureCommandOutput,
} from "./commands/CreateCloudExadataInfrastructureCommand";
import {
  CreateCloudVmClusterCommandInput,
  CreateCloudVmClusterCommandOutput,
} from "./commands/CreateCloudVmClusterCommand";
import { CreateOdbNetworkCommandInput, CreateOdbNetworkCommandOutput } from "./commands/CreateOdbNetworkCommand";
import {
  CreateOdbPeeringConnectionCommandInput,
  CreateOdbPeeringConnectionCommandOutput,
} from "./commands/CreateOdbPeeringConnectionCommand";
import {
  DeleteCloudAutonomousVmClusterCommandInput,
  DeleteCloudAutonomousVmClusterCommandOutput,
} from "./commands/DeleteCloudAutonomousVmClusterCommand";
import {
  DeleteCloudExadataInfrastructureCommandInput,
  DeleteCloudExadataInfrastructureCommandOutput,
} from "./commands/DeleteCloudExadataInfrastructureCommand";
import {
  DeleteCloudVmClusterCommandInput,
  DeleteCloudVmClusterCommandOutput,
} from "./commands/DeleteCloudVmClusterCommand";
import { DeleteOdbNetworkCommandInput, DeleteOdbNetworkCommandOutput } from "./commands/DeleteOdbNetworkCommand";
import {
  DeleteOdbPeeringConnectionCommandInput,
  DeleteOdbPeeringConnectionCommandOutput,
} from "./commands/DeleteOdbPeeringConnectionCommand";
import {
  GetCloudAutonomousVmClusterCommandInput,
  GetCloudAutonomousVmClusterCommandOutput,
} from "./commands/GetCloudAutonomousVmClusterCommand";
import {
  GetCloudExadataInfrastructureCommandInput,
  GetCloudExadataInfrastructureCommandOutput,
} from "./commands/GetCloudExadataInfrastructureCommand";
import {
  GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
  GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput,
} from "./commands/GetCloudExadataInfrastructureUnallocatedResourcesCommand";
import { GetCloudVmClusterCommandInput, GetCloudVmClusterCommandOutput } from "./commands/GetCloudVmClusterCommand";
import { GetDbNodeCommandInput, GetDbNodeCommandOutput } from "./commands/GetDbNodeCommand";
import { GetDbServerCommandInput, GetDbServerCommandOutput } from "./commands/GetDbServerCommand";
import {
  GetOciOnboardingStatusCommandInput,
  GetOciOnboardingStatusCommandOutput,
} from "./commands/GetOciOnboardingStatusCommand";
import { GetOdbNetworkCommandInput, GetOdbNetworkCommandOutput } from "./commands/GetOdbNetworkCommand";
import {
  GetOdbPeeringConnectionCommandInput,
  GetOdbPeeringConnectionCommandOutput,
} from "./commands/GetOdbPeeringConnectionCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "./commands/InitializeServiceCommand";
import {
  ListAutonomousVirtualMachinesCommandInput,
  ListAutonomousVirtualMachinesCommandOutput,
} from "./commands/ListAutonomousVirtualMachinesCommand";
import {
  ListCloudAutonomousVmClustersCommandInput,
  ListCloudAutonomousVmClustersCommandOutput,
} from "./commands/ListCloudAutonomousVmClustersCommand";
import {
  ListCloudExadataInfrastructuresCommandInput,
  ListCloudExadataInfrastructuresCommandOutput,
} from "./commands/ListCloudExadataInfrastructuresCommand";
import {
  ListCloudVmClustersCommandInput,
  ListCloudVmClustersCommandOutput,
} from "./commands/ListCloudVmClustersCommand";
import { ListDbNodesCommandInput, ListDbNodesCommandOutput } from "./commands/ListDbNodesCommand";
import { ListDbServersCommandInput, ListDbServersCommandOutput } from "./commands/ListDbServersCommand";
import { ListDbSystemShapesCommandInput, ListDbSystemShapesCommandOutput } from "./commands/ListDbSystemShapesCommand";
import { ListGiVersionsCommandInput, ListGiVersionsCommandOutput } from "./commands/ListGiVersionsCommand";
import { ListOdbNetworksCommandInput, ListOdbNetworksCommandOutput } from "./commands/ListOdbNetworksCommand";
import {
  ListOdbPeeringConnectionsCommandInput,
  ListOdbPeeringConnectionsCommandOutput,
} from "./commands/ListOdbPeeringConnectionsCommand";
import { ListSystemVersionsCommandInput, ListSystemVersionsCommandOutput } from "./commands/ListSystemVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RebootDbNodeCommandInput, RebootDbNodeCommandOutput } from "./commands/RebootDbNodeCommand";
import { StartDbNodeCommandInput, StartDbNodeCommandOutput } from "./commands/StartDbNodeCommand";
import { StopDbNodeCommandInput, StopDbNodeCommandOutput } from "./commands/StopDbNodeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCloudExadataInfrastructureCommandInput,
  UpdateCloudExadataInfrastructureCommandOutput,
} from "./commands/UpdateCloudExadataInfrastructureCommand";
import { UpdateOdbNetworkCommandInput, UpdateOdbNetworkCommandOutput } from "./commands/UpdateOdbNetworkCommand";
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
  | AcceptMarketplaceRegistrationCommandInput
  | CreateCloudAutonomousVmClusterCommandInput
  | CreateCloudExadataInfrastructureCommandInput
  | CreateCloudVmClusterCommandInput
  | CreateOdbNetworkCommandInput
  | CreateOdbPeeringConnectionCommandInput
  | DeleteCloudAutonomousVmClusterCommandInput
  | DeleteCloudExadataInfrastructureCommandInput
  | DeleteCloudVmClusterCommandInput
  | DeleteOdbNetworkCommandInput
  | DeleteOdbPeeringConnectionCommandInput
  | GetCloudAutonomousVmClusterCommandInput
  | GetCloudExadataInfrastructureCommandInput
  | GetCloudExadataInfrastructureUnallocatedResourcesCommandInput
  | GetCloudVmClusterCommandInput
  | GetDbNodeCommandInput
  | GetDbServerCommandInput
  | GetOciOnboardingStatusCommandInput
  | GetOdbNetworkCommandInput
  | GetOdbPeeringConnectionCommandInput
  | InitializeServiceCommandInput
  | ListAutonomousVirtualMachinesCommandInput
  | ListCloudAutonomousVmClustersCommandInput
  | ListCloudExadataInfrastructuresCommandInput
  | ListCloudVmClustersCommandInput
  | ListDbNodesCommandInput
  | ListDbServersCommandInput
  | ListDbSystemShapesCommandInput
  | ListGiVersionsCommandInput
  | ListOdbNetworksCommandInput
  | ListOdbPeeringConnectionsCommandInput
  | ListSystemVersionsCommandInput
  | ListTagsForResourceCommandInput
  | RebootDbNodeCommandInput
  | StartDbNodeCommandInput
  | StopDbNodeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCloudExadataInfrastructureCommandInput
  | UpdateOdbNetworkCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptMarketplaceRegistrationCommandOutput
  | CreateCloudAutonomousVmClusterCommandOutput
  | CreateCloudExadataInfrastructureCommandOutput
  | CreateCloudVmClusterCommandOutput
  | CreateOdbNetworkCommandOutput
  | CreateOdbPeeringConnectionCommandOutput
  | DeleteCloudAutonomousVmClusterCommandOutput
  | DeleteCloudExadataInfrastructureCommandOutput
  | DeleteCloudVmClusterCommandOutput
  | DeleteOdbNetworkCommandOutput
  | DeleteOdbPeeringConnectionCommandOutput
  | GetCloudAutonomousVmClusterCommandOutput
  | GetCloudExadataInfrastructureCommandOutput
  | GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput
  | GetCloudVmClusterCommandOutput
  | GetDbNodeCommandOutput
  | GetDbServerCommandOutput
  | GetOciOnboardingStatusCommandOutput
  | GetOdbNetworkCommandOutput
  | GetOdbPeeringConnectionCommandOutput
  | InitializeServiceCommandOutput
  | ListAutonomousVirtualMachinesCommandOutput
  | ListCloudAutonomousVmClustersCommandOutput
  | ListCloudExadataInfrastructuresCommandOutput
  | ListCloudVmClustersCommandOutput
  | ListDbNodesCommandOutput
  | ListDbServersCommandOutput
  | ListDbSystemShapesCommandOutput
  | ListGiVersionsCommandOutput
  | ListOdbNetworksCommandOutput
  | ListOdbPeeringConnectionsCommandOutput
  | ListSystemVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | RebootDbNodeCommandOutput
  | StartDbNodeCommandOutput
  | StopDbNodeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCloudExadataInfrastructureCommandOutput
  | UpdateOdbNetworkCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type OdbClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of OdbClient class constructor that set the region, credentials and other options.
 */
export interface OdbClientConfig extends OdbClientConfigType {}

/**
 * @public
 */
export type OdbClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of OdbClient class. This is resolved and normalized from the {@link OdbClientConfig | constructor configuration interface}.
 */
export interface OdbClientResolvedConfig extends OdbClientResolvedConfigType {}

/**
 * <p>Oracle Database@Amazon Web Services is an offering that enables you to access Oracle Exadata infrastructure managed by Oracle Cloud Infrastructure (OCI) inside Amazon Web Services data centers. You can migrate your Oracle Exadata workloads, establish low-latency connectivity with applications running on Amazon Web Services, and integrate with Amazon Web Services services. For example, you can run application servers in a virtual private cloud (VPC) and access an Oracle Exadata system running in Oracle Database@Amazon Web Services. You can get started with Oracle Database@Amazon Web Services by using the familiar Amazon Web Services Management Console, APIs, or CLI.</p> <p>This interface reference for Oracle Database@Amazon Web Services contains documentation for a programming or command line interface that you can use to manage Oracle Database@Amazon Web Services. Oracle Database@Amazon Web Services is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. The reference structure is as follows.</p> <note> <p>In this preview release documentation, the links in the "See Also" sections do not work.</p> </note> <p> <b>Oracle Database@Amazon Web Services API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see .</p> </li> <li> <p>For the alphabetical list of data types, see .</p> </li> <li> <p>For a list of common parameters, see <a>CommonParameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a>CommonErrors</a>.</p> </li> </ul>
 * @public
 */
export class OdbClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OdbClientResolvedConfig
> {
  /**
   * The resolved configuration of OdbClient class. This is resolved and normalized from the {@link OdbClientConfig | constructor configuration interface}.
   */
  readonly config: OdbClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<OdbClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultOdbHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: OdbClientResolvedConfig) =>
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
