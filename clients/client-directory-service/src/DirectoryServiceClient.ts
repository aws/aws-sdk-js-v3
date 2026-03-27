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
  defaultDirectoryServiceHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "./commands/AcceptSharedDirectoryCommand";
import type { AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "./commands/AddIpRoutesCommand";
import type { AddRegionCommandInput, AddRegionCommandOutput } from "./commands/AddRegionCommand";
import type {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import type {
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
} from "./commands/CancelSchemaExtensionCommand";
import type { ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput } from "./commands/ConnectDirectoryCommand";
import type { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import type { CreateComputerCommandInput, CreateComputerCommandOutput } from "./commands/CreateComputerCommand";
import type {
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
} from "./commands/CreateConditionalForwarderCommand";
import type { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import type { CreateHybridADCommandInput, CreateHybridADCommandOutput } from "./commands/CreateHybridADCommand";
import type {
  CreateLogSubscriptionCommandInput,
  CreateLogSubscriptionCommandOutput,
} from "./commands/CreateLogSubscriptionCommand";
import type {
  CreateMicrosoftADCommandInput,
  CreateMicrosoftADCommandOutput,
} from "./commands/CreateMicrosoftADCommand";
import type { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import type { CreateTrustCommandInput, CreateTrustCommandOutput } from "./commands/CreateTrustCommand";
import type {
  DeleteADAssessmentCommandInput,
  DeleteADAssessmentCommandOutput,
} from "./commands/DeleteADAssessmentCommand";
import type {
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
} from "./commands/DeleteConditionalForwarderCommand";
import type { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import type {
  DeleteLogSubscriptionCommandInput,
  DeleteLogSubscriptionCommandOutput,
} from "./commands/DeleteLogSubscriptionCommand";
import type { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import type { DeleteTrustCommandInput, DeleteTrustCommandOutput } from "./commands/DeleteTrustCommand";
import type {
  DeregisterCertificateCommandInput,
  DeregisterCertificateCommandOutput,
} from "./commands/DeregisterCertificateCommand";
import type {
  DeregisterEventTopicCommandInput,
  DeregisterEventTopicCommandOutput,
} from "./commands/DeregisterEventTopicCommand";
import type {
  DescribeADAssessmentCommandInput,
  DescribeADAssessmentCommandOutput,
} from "./commands/DescribeADAssessmentCommand";
import type {
  DescribeCAEnrollmentPolicyCommandInput,
  DescribeCAEnrollmentPolicyCommandOutput,
} from "./commands/DescribeCAEnrollmentPolicyCommand";
import type {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import type {
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "./commands/DescribeClientAuthenticationSettingsCommand";
import type {
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
} from "./commands/DescribeConditionalForwardersCommand";
import type {
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "./commands/DescribeDirectoriesCommand";
import type {
  DescribeDirectoryDataAccessCommandInput,
  DescribeDirectoryDataAccessCommandOutput,
} from "./commands/DescribeDirectoryDataAccessCommand";
import type {
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "./commands/DescribeDomainControllersCommand";
import type {
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
} from "./commands/DescribeEventTopicsCommand";
import type {
  DescribeHybridADUpdateCommandInput,
  DescribeHybridADUpdateCommandOutput,
} from "./commands/DescribeHybridADUpdateCommand";
import type {
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "./commands/DescribeLDAPSSettingsCommand";
import type { DescribeRegionsCommandInput, DescribeRegionsCommandOutput } from "./commands/DescribeRegionsCommand";
import type { DescribeSettingsCommandInput, DescribeSettingsCommandOutput } from "./commands/DescribeSettingsCommand";
import type {
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "./commands/DescribeSharedDirectoriesCommand";
import type {
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import type { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "./commands/DescribeTrustsCommand";
import type {
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "./commands/DescribeUpdateDirectoryCommand";
import type {
  DisableCAEnrollmentPolicyCommandInput,
  DisableCAEnrollmentPolicyCommandOutput,
} from "./commands/DisableCAEnrollmentPolicyCommand";
import type {
  DisableClientAuthenticationCommandInput,
  DisableClientAuthenticationCommandOutput,
} from "./commands/DisableClientAuthenticationCommand";
import type {
  DisableDirectoryDataAccessCommandInput,
  DisableDirectoryDataAccessCommandOutput,
} from "./commands/DisableDirectoryDataAccessCommand";
import type { DisableLDAPSCommandInput, DisableLDAPSCommandOutput } from "./commands/DisableLDAPSCommand";
import type { DisableRadiusCommandInput, DisableRadiusCommandOutput } from "./commands/DisableRadiusCommand";
import type { DisableSsoCommandInput, DisableSsoCommandOutput } from "./commands/DisableSsoCommand";
import type {
  EnableCAEnrollmentPolicyCommandInput,
  EnableCAEnrollmentPolicyCommandOutput,
} from "./commands/EnableCAEnrollmentPolicyCommand";
import type {
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
} from "./commands/EnableClientAuthenticationCommand";
import type {
  EnableDirectoryDataAccessCommandInput,
  EnableDirectoryDataAccessCommandOutput,
} from "./commands/EnableDirectoryDataAccessCommand";
import type { EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "./commands/EnableLDAPSCommand";
import type { EnableRadiusCommandInput, EnableRadiusCommandOutput } from "./commands/EnableRadiusCommand";
import type { EnableSsoCommandInput, EnableSsoCommandOutput } from "./commands/EnableSsoCommand";
import type {
  GetDirectoryLimitsCommandInput,
  GetDirectoryLimitsCommandOutput,
} from "./commands/GetDirectoryLimitsCommand";
import type {
  GetSnapshotLimitsCommandInput,
  GetSnapshotLimitsCommandOutput,
} from "./commands/GetSnapshotLimitsCommand";
import type {
  ListADAssessmentsCommandInput,
  ListADAssessmentsCommandOutput,
} from "./commands/ListADAssessmentsCommand";
import type { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import type { ListIpRoutesCommandInput, ListIpRoutesCommandOutput } from "./commands/ListIpRoutesCommand";
import type {
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "./commands/ListLogSubscriptionsCommand";
import type {
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "./commands/ListSchemaExtensionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import type {
  RegisterEventTopicCommandInput,
  RegisterEventTopicCommandOutput,
} from "./commands/RegisterEventTopicCommand";
import type {
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
} from "./commands/RejectSharedDirectoryCommand";
import type { RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput } from "./commands/RemoveIpRoutesCommand";
import type { RemoveRegionCommandInput, RemoveRegionCommandOutput } from "./commands/RemoveRegionCommand";
import type {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import type {
  ResetUserPasswordCommandInput,
  ResetUserPasswordCommandOutput,
} from "./commands/ResetUserPasswordCommand";
import type {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import type { ShareDirectoryCommandInput, ShareDirectoryCommandOutput } from "./commands/ShareDirectoryCommand";
import type {
  StartADAssessmentCommandInput,
  StartADAssessmentCommandOutput,
} from "./commands/StartADAssessmentCommand";
import type {
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
} from "./commands/StartSchemaExtensionCommand";
import type { UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput } from "./commands/UnshareDirectoryCommand";
import type {
  UpdateConditionalForwarderCommandInput,
  UpdateConditionalForwarderCommandOutput,
} from "./commands/UpdateConditionalForwarderCommand";
import type {
  UpdateDirectorySetupCommandInput,
  UpdateDirectorySetupCommandOutput,
} from "./commands/UpdateDirectorySetupCommand";
import type { UpdateHybridADCommandInput, UpdateHybridADCommandOutput } from "./commands/UpdateHybridADCommand";
import type {
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "./commands/UpdateNumberOfDomainControllersCommand";
import type { UpdateRadiusCommandInput, UpdateRadiusCommandOutput } from "./commands/UpdateRadiusCommand";
import type { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "./commands/UpdateSettingsCommand";
import type { UpdateTrustCommandInput, UpdateTrustCommandOutput } from "./commands/UpdateTrustCommand";
import type { VerifyTrustCommandInput, VerifyTrustCommandOutput } from "./commands/VerifyTrustCommand";
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
  | CreateHybridADCommandInput
  | CreateLogSubscriptionCommandInput
  | CreateMicrosoftADCommandInput
  | CreateSnapshotCommandInput
  | CreateTrustCommandInput
  | DeleteADAssessmentCommandInput
  | DeleteConditionalForwarderCommandInput
  | DeleteDirectoryCommandInput
  | DeleteLogSubscriptionCommandInput
  | DeleteSnapshotCommandInput
  | DeleteTrustCommandInput
  | DeregisterCertificateCommandInput
  | DeregisterEventTopicCommandInput
  | DescribeADAssessmentCommandInput
  | DescribeCAEnrollmentPolicyCommandInput
  | DescribeCertificateCommandInput
  | DescribeClientAuthenticationSettingsCommandInput
  | DescribeConditionalForwardersCommandInput
  | DescribeDirectoriesCommandInput
  | DescribeDirectoryDataAccessCommandInput
  | DescribeDomainControllersCommandInput
  | DescribeEventTopicsCommandInput
  | DescribeHybridADUpdateCommandInput
  | DescribeLDAPSSettingsCommandInput
  | DescribeRegionsCommandInput
  | DescribeSettingsCommandInput
  | DescribeSharedDirectoriesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeTrustsCommandInput
  | DescribeUpdateDirectoryCommandInput
  | DisableCAEnrollmentPolicyCommandInput
  | DisableClientAuthenticationCommandInput
  | DisableDirectoryDataAccessCommandInput
  | DisableLDAPSCommandInput
  | DisableRadiusCommandInput
  | DisableSsoCommandInput
  | EnableCAEnrollmentPolicyCommandInput
  | EnableClientAuthenticationCommandInput
  | EnableDirectoryDataAccessCommandInput
  | EnableLDAPSCommandInput
  | EnableRadiusCommandInput
  | EnableSsoCommandInput
  | GetDirectoryLimitsCommandInput
  | GetSnapshotLimitsCommandInput
  | ListADAssessmentsCommandInput
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
  | StartADAssessmentCommandInput
  | StartSchemaExtensionCommandInput
  | UnshareDirectoryCommandInput
  | UpdateConditionalForwarderCommandInput
  | UpdateDirectorySetupCommandInput
  | UpdateHybridADCommandInput
  | UpdateNumberOfDomainControllersCommandInput
  | UpdateRadiusCommandInput
  | UpdateSettingsCommandInput
  | UpdateTrustCommandInput
  | VerifyTrustCommandInput;

/**
 * @public
 */
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
  | CreateHybridADCommandOutput
  | CreateLogSubscriptionCommandOutput
  | CreateMicrosoftADCommandOutput
  | CreateSnapshotCommandOutput
  | CreateTrustCommandOutput
  | DeleteADAssessmentCommandOutput
  | DeleteConditionalForwarderCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteLogSubscriptionCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteTrustCommandOutput
  | DeregisterCertificateCommandOutput
  | DeregisterEventTopicCommandOutput
  | DescribeADAssessmentCommandOutput
  | DescribeCAEnrollmentPolicyCommandOutput
  | DescribeCertificateCommandOutput
  | DescribeClientAuthenticationSettingsCommandOutput
  | DescribeConditionalForwardersCommandOutput
  | DescribeDirectoriesCommandOutput
  | DescribeDirectoryDataAccessCommandOutput
  | DescribeDomainControllersCommandOutput
  | DescribeEventTopicsCommandOutput
  | DescribeHybridADUpdateCommandOutput
  | DescribeLDAPSSettingsCommandOutput
  | DescribeRegionsCommandOutput
  | DescribeSettingsCommandOutput
  | DescribeSharedDirectoriesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeTrustsCommandOutput
  | DescribeUpdateDirectoryCommandOutput
  | DisableCAEnrollmentPolicyCommandOutput
  | DisableClientAuthenticationCommandOutput
  | DisableDirectoryDataAccessCommandOutput
  | DisableLDAPSCommandOutput
  | DisableRadiusCommandOutput
  | DisableSsoCommandOutput
  | EnableCAEnrollmentPolicyCommandOutput
  | EnableClientAuthenticationCommandOutput
  | EnableDirectoryDataAccessCommandOutput
  | EnableLDAPSCommandOutput
  | EnableRadiusCommandOutput
  | EnableSsoCommandOutput
  | GetDirectoryLimitsCommandOutput
  | GetSnapshotLimitsCommandOutput
  | ListADAssessmentsCommandOutput
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
  | StartADAssessmentCommandOutput
  | StartSchemaExtensionCommandOutput
  | UnshareDirectoryCommandOutput
  | UpdateConditionalForwarderCommandOutput
  | UpdateDirectorySetupCommandOutput
  | UpdateHybridADCommandOutput
  | UpdateNumberOfDomainControllersCommandOutput
  | UpdateRadiusCommandOutput
  | UpdateSettingsCommandOutput
  | UpdateTrustCommandOutput
  | VerifyTrustCommandOutput;

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
export type DirectoryServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of DirectoryServiceClient class constructor that set the region, credentials and other options.
 */
export interface DirectoryServiceClientConfig extends DirectoryServiceClientConfigType {}

/**
 * @public
 */
export type DirectoryServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of DirectoryServiceClient class. This is resolved and normalized from the {@link DirectoryServiceClientConfig | constructor configuration interface}.
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
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<DirectoryServiceClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultDirectoryServiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DirectoryServiceClientResolvedConfig) =>
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
