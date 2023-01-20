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

import {
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "./commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "./commands/AddIpRoutesCommand";
import { AddRegionCommandInput, AddRegionCommandOutput } from "./commands/AddRegionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import {
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
} from "./commands/CancelSchemaExtensionCommand";
import { ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput } from "./commands/ConnectDirectoryCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateComputerCommandInput, CreateComputerCommandOutput } from "./commands/CreateComputerCommand";
import {
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
} from "./commands/CreateConditionalForwarderCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import {
  CreateLogSubscriptionCommandInput,
  CreateLogSubscriptionCommandOutput,
} from "./commands/CreateLogSubscriptionCommand";
import { CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput } from "./commands/CreateMicrosoftADCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateTrustCommandInput, CreateTrustCommandOutput } from "./commands/CreateTrustCommand";
import {
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
} from "./commands/DeleteConditionalForwarderCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import {
  DeleteLogSubscriptionCommandInput,
  DeleteLogSubscriptionCommandOutput,
} from "./commands/DeleteLogSubscriptionCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteTrustCommandInput, DeleteTrustCommandOutput } from "./commands/DeleteTrustCommand";
import {
  DeregisterCertificateCommandInput,
  DeregisterCertificateCommandOutput,
} from "./commands/DeregisterCertificateCommand";
import {
  DeregisterEventTopicCommandInput,
  DeregisterEventTopicCommandOutput,
} from "./commands/DeregisterEventTopicCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "./commands/DescribeClientAuthenticationSettingsCommand";
import {
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
} from "./commands/DescribeConditionalForwardersCommand";
import {
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "./commands/DescribeDirectoriesCommand";
import {
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "./commands/DescribeDomainControllersCommand";
import {
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
} from "./commands/DescribeEventTopicsCommand";
import {
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "./commands/DescribeLDAPSSettingsCommand";
import { DescribeRegionsCommandInput, DescribeRegionsCommandOutput } from "./commands/DescribeRegionsCommand";
import { DescribeSettingsCommandInput, DescribeSettingsCommandOutput } from "./commands/DescribeSettingsCommand";
import {
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "./commands/DescribeSharedDirectoriesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "./commands/DescribeTrustsCommand";
import {
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "./commands/DescribeUpdateDirectoryCommand";
import {
  DisableClientAuthenticationCommandInput,
  DisableClientAuthenticationCommandOutput,
} from "./commands/DisableClientAuthenticationCommand";
import { DisableLDAPSCommandInput, DisableLDAPSCommandOutput } from "./commands/DisableLDAPSCommand";
import { DisableRadiusCommandInput, DisableRadiusCommandOutput } from "./commands/DisableRadiusCommand";
import { DisableSsoCommandInput, DisableSsoCommandOutput } from "./commands/DisableSsoCommand";
import {
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
} from "./commands/EnableClientAuthenticationCommand";
import { EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "./commands/EnableLDAPSCommand";
import { EnableRadiusCommandInput, EnableRadiusCommandOutput } from "./commands/EnableRadiusCommand";
import { EnableSsoCommandInput, EnableSsoCommandOutput } from "./commands/EnableSsoCommand";
import { GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput } from "./commands/GetDirectoryLimitsCommand";
import { GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput } from "./commands/GetSnapshotLimitsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import { ListIpRoutesCommandInput, ListIpRoutesCommandOutput } from "./commands/ListIpRoutesCommand";
import {
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "./commands/ListLogSubscriptionsCommand";
import {
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "./commands/ListSchemaExtensionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import { RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput } from "./commands/RegisterEventTopicCommand";
import {
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
} from "./commands/RejectSharedDirectoryCommand";
import { RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput } from "./commands/RemoveIpRoutesCommand";
import { RemoveRegionCommandInput, RemoveRegionCommandOutput } from "./commands/RemoveRegionCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import { ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput } from "./commands/ResetUserPasswordCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import { ShareDirectoryCommandInput, ShareDirectoryCommandOutput } from "./commands/ShareDirectoryCommand";
import {
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
} from "./commands/StartSchemaExtensionCommand";
import { UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput } from "./commands/UnshareDirectoryCommand";
import {
  UpdateConditionalForwarderCommandInput,
  UpdateConditionalForwarderCommandOutput,
} from "./commands/UpdateConditionalForwarderCommand";
import {
  UpdateDirectorySetupCommandInput,
  UpdateDirectorySetupCommandOutput,
} from "./commands/UpdateDirectorySetupCommand";
import {
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "./commands/UpdateNumberOfDomainControllersCommand";
import { UpdateRadiusCommandInput, UpdateRadiusCommandOutput } from "./commands/UpdateRadiusCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "./commands/UpdateSettingsCommand";
import { UpdateTrustCommandInput, UpdateTrustCommandOutput } from "./commands/UpdateTrustCommand";
import { VerifyTrustCommandInput, VerifyTrustCommandOutput } from "./commands/VerifyTrustCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AcceptSharedDirectoryCommandInput
  | AddIpRoutesCommandInput
  | AddRegionCommandInput
  | AddTagsToResourceCommandInput
  | CancelSchemaExtensionCommandInput
  | ConnectDirectoryCommandInput
  | CreateAliasCommandInput
  | CreateComputerCommandInput
  | CreateConditionalForwarderCommandInput
  | CreateDirectoryCommandInput
  | CreateLogSubscriptionCommandInput
  | CreateMicrosoftADCommandInput
  | CreateSnapshotCommandInput
  | CreateTrustCommandInput
  | DeleteConditionalForwarderCommandInput
  | DeleteDirectoryCommandInput
  | DeleteLogSubscriptionCommandInput
  | DeleteSnapshotCommandInput
  | DeleteTrustCommandInput
  | DeregisterCertificateCommandInput
  | DeregisterEventTopicCommandInput
  | DescribeCertificateCommandInput
  | DescribeClientAuthenticationSettingsCommandInput
  | DescribeConditionalForwardersCommandInput
  | DescribeDirectoriesCommandInput
  | DescribeDomainControllersCommandInput
  | DescribeEventTopicsCommandInput
  | DescribeLDAPSSettingsCommandInput
  | DescribeRegionsCommandInput
  | DescribeSettingsCommandInput
  | DescribeSharedDirectoriesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeTrustsCommandInput
  | DescribeUpdateDirectoryCommandInput
  | DisableClientAuthenticationCommandInput
  | DisableLDAPSCommandInput
  | DisableRadiusCommandInput
  | DisableSsoCommandInput
  | EnableClientAuthenticationCommandInput
  | EnableLDAPSCommandInput
  | EnableRadiusCommandInput
  | EnableSsoCommandInput
  | GetDirectoryLimitsCommandInput
  | GetSnapshotLimitsCommandInput
  | ListCertificatesCommandInput
  | ListIpRoutesCommandInput
  | ListLogSubscriptionsCommandInput
  | ListSchemaExtensionsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterCertificateCommandInput
  | RegisterEventTopicCommandInput
  | RejectSharedDirectoryCommandInput
  | RemoveIpRoutesCommandInput
  | RemoveRegionCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetUserPasswordCommandInput
  | RestoreFromSnapshotCommandInput
  | ShareDirectoryCommandInput
  | StartSchemaExtensionCommandInput
  | UnshareDirectoryCommandInput
  | UpdateConditionalForwarderCommandInput
  | UpdateDirectorySetupCommandInput
  | UpdateNumberOfDomainControllersCommandInput
  | UpdateRadiusCommandInput
  | UpdateSettingsCommandInput
  | UpdateTrustCommandInput
  | VerifyTrustCommandInput;

export type ServiceOutputTypes =
  | AcceptSharedDirectoryCommandOutput
  | AddIpRoutesCommandOutput
  | AddRegionCommandOutput
  | AddTagsToResourceCommandOutput
  | CancelSchemaExtensionCommandOutput
  | ConnectDirectoryCommandOutput
  | CreateAliasCommandOutput
  | CreateComputerCommandOutput
  | CreateConditionalForwarderCommandOutput
  | CreateDirectoryCommandOutput
  | CreateLogSubscriptionCommandOutput
  | CreateMicrosoftADCommandOutput
  | CreateSnapshotCommandOutput
  | CreateTrustCommandOutput
  | DeleteConditionalForwarderCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteLogSubscriptionCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteTrustCommandOutput
  | DeregisterCertificateCommandOutput
  | DeregisterEventTopicCommandOutput
  | DescribeCertificateCommandOutput
  | DescribeClientAuthenticationSettingsCommandOutput
  | DescribeConditionalForwardersCommandOutput
  | DescribeDirectoriesCommandOutput
  | DescribeDomainControllersCommandOutput
  | DescribeEventTopicsCommandOutput
  | DescribeLDAPSSettingsCommandOutput
  | DescribeRegionsCommandOutput
  | DescribeSettingsCommandOutput
  | DescribeSharedDirectoriesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeTrustsCommandOutput
  | DescribeUpdateDirectoryCommandOutput
  | DisableClientAuthenticationCommandOutput
  | DisableLDAPSCommandOutput
  | DisableRadiusCommandOutput
  | DisableSsoCommandOutput
  | EnableClientAuthenticationCommandOutput
  | EnableLDAPSCommandOutput
  | EnableRadiusCommandOutput
  | EnableSsoCommandOutput
  | GetDirectoryLimitsCommandOutput
  | GetSnapshotLimitsCommandOutput
  | ListCertificatesCommandOutput
  | ListIpRoutesCommandOutput
  | ListLogSubscriptionsCommandOutput
  | ListSchemaExtensionsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterCertificateCommandOutput
  | RegisterEventTopicCommandOutput
  | RejectSharedDirectoryCommandOutput
  | RemoveIpRoutesCommandOutput
  | RemoveRegionCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetUserPasswordCommandOutput
  | RestoreFromSnapshotCommandOutput
  | ShareDirectoryCommandOutput
  | StartSchemaExtensionCommandOutput
  | UnshareDirectoryCommandOutput
  | UpdateConditionalForwarderCommandOutput
  | UpdateDirectorySetupCommandOutput
  | UpdateNumberOfDomainControllersCommandOutput
  | UpdateRadiusCommandOutput
  | UpdateSettingsCommandOutput
  | UpdateTrustCommandOutput
  | VerifyTrustCommandOutput;

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

type DirectoryServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of DirectoryServiceClient class constructor that set the region, credentials and other options.
 */
export interface DirectoryServiceClientConfig extends DirectoryServiceClientConfigType {}

type DirectoryServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of DirectoryServiceClient class. This is resolved and normalized from the {@link DirectoryServiceClientConfig | constructor configuration interface}.
 */
export interface DirectoryServiceClientResolvedConfig extends DirectoryServiceClientResolvedConfigType {}

/**
 * <fullname>Directory Service</fullname>
 *          <p>Directory Service is a web service that makes it easy for you to setup and run directories in the
 *          Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active
 *          Directory. This guide provides detailed information about Directory Service operations, data types,
 *          parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service
 *             Administration Guide</a>.</p>
 *          <note>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various
 *             programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs
 *             provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services
 *             services. For more information about the Amazon Web Services SDKs, including how to download and
 *             install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *                Services</a>.</p>
 *          </note>
 */
export class DirectoryServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DirectoryServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of DirectoryServiceClient class. This is resolved and normalized from the {@link DirectoryServiceClientConfig | constructor configuration interface}.
   */
  readonly config: DirectoryServiceClientResolvedConfig;

  constructor(configuration: DirectoryServiceClientConfig) {
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
