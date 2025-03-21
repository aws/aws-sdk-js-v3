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
  defaultTransferHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateAccessCommandInput, CreateAccessCommandOutput } from "./commands/CreateAccessCommand";
import { CreateAgreementCommandInput, CreateAgreementCommandOutput } from "./commands/CreateAgreementCommand";
import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "./commands/CreateConnectorCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "./commands/CreateServerCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { CreateWebAppCommandInput, CreateWebAppCommandOutput } from "./commands/CreateWebAppCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import { DeleteAccessCommandInput, DeleteAccessCommandOutput } from "./commands/DeleteAccessCommand";
import { DeleteAgreementCommandInput, DeleteAgreementCommandOutput } from "./commands/DeleteAgreementCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "./commands/DeleteConnectorCommand";
import { DeleteHostKeyCommandInput, DeleteHostKeyCommandOutput } from "./commands/DeleteHostKeyCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import { DeleteServerCommandInput, DeleteServerCommandOutput } from "./commands/DeleteServerCommand";
import { DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput } from "./commands/DeleteSshPublicKeyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeleteWebAppCommandInput, DeleteWebAppCommandOutput } from "./commands/DeleteWebAppCommand";
import {
  DeleteWebAppCustomizationCommandInput,
  DeleteWebAppCustomizationCommandOutput,
} from "./commands/DeleteWebAppCustomizationCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import { DescribeAccessCommandInput, DescribeAccessCommandOutput } from "./commands/DescribeAccessCommand";
import { DescribeAgreementCommandInput, DescribeAgreementCommandOutput } from "./commands/DescribeAgreementCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import { DescribeConnectorCommandInput, DescribeConnectorCommandOutput } from "./commands/DescribeConnectorCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "./commands/DescribeExecutionCommand";
import { DescribeHostKeyCommandInput, DescribeHostKeyCommandOutput } from "./commands/DescribeHostKeyCommand";
import { DescribeProfileCommandInput, DescribeProfileCommandOutput } from "./commands/DescribeProfileCommand";
import {
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
} from "./commands/DescribeSecurityPolicyCommand";
import { DescribeServerCommandInput, DescribeServerCommandOutput } from "./commands/DescribeServerCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { DescribeWebAppCommandInput, DescribeWebAppCommandOutput } from "./commands/DescribeWebAppCommand";
import {
  DescribeWebAppCustomizationCommandInput,
  DescribeWebAppCustomizationCommandOutput,
} from "./commands/DescribeWebAppCustomizationCommand";
import { DescribeWorkflowCommandInput, DescribeWorkflowCommandOutput } from "./commands/DescribeWorkflowCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "./commands/ImportCertificateCommand";
import { ImportHostKeyCommandInput, ImportHostKeyCommandOutput } from "./commands/ImportHostKeyCommand";
import { ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput } from "./commands/ImportSshPublicKeyCommand";
import { ListAccessesCommandInput, ListAccessesCommandOutput } from "./commands/ListAccessesCommand";
import { ListAgreementsCommandInput, ListAgreementsCommandOutput } from "./commands/ListAgreementsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "./commands/ListConnectorsCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import {
  ListFileTransferResultsCommandInput,
  ListFileTransferResultsCommandOutput,
} from "./commands/ListFileTransferResultsCommand";
import { ListHostKeysCommandInput, ListHostKeysCommandOutput } from "./commands/ListHostKeysCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "./commands/ListProfilesCommand";
import {
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand";
import { ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListWebAppsCommandInput, ListWebAppsCommandOutput } from "./commands/ListWebAppsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import {
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "./commands/SendWorkflowStepStateCommand";
import {
  StartDirectoryListingCommandInput,
  StartDirectoryListingCommandOutput,
} from "./commands/StartDirectoryListingCommand";
import { StartFileTransferCommandInput, StartFileTransferCommandOutput } from "./commands/StartFileTransferCommand";
import { StartServerCommandInput, StartServerCommandOutput } from "./commands/StartServerCommand";
import { StopServerCommandInput, StopServerCommandOutput } from "./commands/StopServerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
} from "./commands/TestIdentityProviderCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccessCommandInput, UpdateAccessCommandOutput } from "./commands/UpdateAccessCommand";
import { UpdateAgreementCommandInput, UpdateAgreementCommandOutput } from "./commands/UpdateAgreementCommand";
import { UpdateCertificateCommandInput, UpdateCertificateCommandOutput } from "./commands/UpdateCertificateCommand";
import { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "./commands/UpdateConnectorCommand";
import { UpdateHostKeyCommandInput, UpdateHostKeyCommandOutput } from "./commands/UpdateHostKeyCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import { UpdateServerCommandInput, UpdateServerCommandOutput } from "./commands/UpdateServerCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { UpdateWebAppCommandInput, UpdateWebAppCommandOutput } from "./commands/UpdateWebAppCommand";
import {
  UpdateWebAppCustomizationCommandInput,
  UpdateWebAppCustomizationCommandOutput,
} from "./commands/UpdateWebAppCustomizationCommand";
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
  | CreateAccessCommandInput
  | CreateAgreementCommandInput
  | CreateConnectorCommandInput
  | CreateProfileCommandInput
  | CreateServerCommandInput
  | CreateUserCommandInput
  | CreateWebAppCommandInput
  | CreateWorkflowCommandInput
  | DeleteAccessCommandInput
  | DeleteAgreementCommandInput
  | DeleteCertificateCommandInput
  | DeleteConnectorCommandInput
  | DeleteHostKeyCommandInput
  | DeleteProfileCommandInput
  | DeleteServerCommandInput
  | DeleteSshPublicKeyCommandInput
  | DeleteUserCommandInput
  | DeleteWebAppCommandInput
  | DeleteWebAppCustomizationCommandInput
  | DeleteWorkflowCommandInput
  | DescribeAccessCommandInput
  | DescribeAgreementCommandInput
  | DescribeCertificateCommandInput
  | DescribeConnectorCommandInput
  | DescribeExecutionCommandInput
  | DescribeHostKeyCommandInput
  | DescribeProfileCommandInput
  | DescribeSecurityPolicyCommandInput
  | DescribeServerCommandInput
  | DescribeUserCommandInput
  | DescribeWebAppCommandInput
  | DescribeWebAppCustomizationCommandInput
  | DescribeWorkflowCommandInput
  | ImportCertificateCommandInput
  | ImportHostKeyCommandInput
  | ImportSshPublicKeyCommandInput
  | ListAccessesCommandInput
  | ListAgreementsCommandInput
  | ListCertificatesCommandInput
  | ListConnectorsCommandInput
  | ListExecutionsCommandInput
  | ListFileTransferResultsCommandInput
  | ListHostKeysCommandInput
  | ListProfilesCommandInput
  | ListSecurityPoliciesCommandInput
  | ListServersCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | ListWebAppsCommandInput
  | ListWorkflowsCommandInput
  | SendWorkflowStepStateCommandInput
  | StartDirectoryListingCommandInput
  | StartFileTransferCommandInput
  | StartServerCommandInput
  | StopServerCommandInput
  | TagResourceCommandInput
  | TestConnectionCommandInput
  | TestIdentityProviderCommandInput
  | UntagResourceCommandInput
  | UpdateAccessCommandInput
  | UpdateAgreementCommandInput
  | UpdateCertificateCommandInput
  | UpdateConnectorCommandInput
  | UpdateHostKeyCommandInput
  | UpdateProfileCommandInput
  | UpdateServerCommandInput
  | UpdateUserCommandInput
  | UpdateWebAppCommandInput
  | UpdateWebAppCustomizationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAccessCommandOutput
  | CreateAgreementCommandOutput
  | CreateConnectorCommandOutput
  | CreateProfileCommandOutput
  | CreateServerCommandOutput
  | CreateUserCommandOutput
  | CreateWebAppCommandOutput
  | CreateWorkflowCommandOutput
  | DeleteAccessCommandOutput
  | DeleteAgreementCommandOutput
  | DeleteCertificateCommandOutput
  | DeleteConnectorCommandOutput
  | DeleteHostKeyCommandOutput
  | DeleteProfileCommandOutput
  | DeleteServerCommandOutput
  | DeleteSshPublicKeyCommandOutput
  | DeleteUserCommandOutput
  | DeleteWebAppCommandOutput
  | DeleteWebAppCustomizationCommandOutput
  | DeleteWorkflowCommandOutput
  | DescribeAccessCommandOutput
  | DescribeAgreementCommandOutput
  | DescribeCertificateCommandOutput
  | DescribeConnectorCommandOutput
  | DescribeExecutionCommandOutput
  | DescribeHostKeyCommandOutput
  | DescribeProfileCommandOutput
  | DescribeSecurityPolicyCommandOutput
  | DescribeServerCommandOutput
  | DescribeUserCommandOutput
  | DescribeWebAppCommandOutput
  | DescribeWebAppCustomizationCommandOutput
  | DescribeWorkflowCommandOutput
  | ImportCertificateCommandOutput
  | ImportHostKeyCommandOutput
  | ImportSshPublicKeyCommandOutput
  | ListAccessesCommandOutput
  | ListAgreementsCommandOutput
  | ListCertificatesCommandOutput
  | ListConnectorsCommandOutput
  | ListExecutionsCommandOutput
  | ListFileTransferResultsCommandOutput
  | ListHostKeysCommandOutput
  | ListProfilesCommandOutput
  | ListSecurityPoliciesCommandOutput
  | ListServersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | ListWebAppsCommandOutput
  | ListWorkflowsCommandOutput
  | SendWorkflowStepStateCommandOutput
  | StartDirectoryListingCommandOutput
  | StartFileTransferCommandOutput
  | StartServerCommandOutput
  | StopServerCommandOutput
  | TagResourceCommandOutput
  | TestConnectionCommandOutput
  | TestIdentityProviderCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessCommandOutput
  | UpdateAgreementCommandOutput
  | UpdateCertificateCommandOutput
  | UpdateConnectorCommandOutput
  | UpdateHostKeyCommandOutput
  | UpdateProfileCommandOutput
  | UpdateServerCommandOutput
  | UpdateUserCommandOutput
  | UpdateWebAppCommandOutput
  | UpdateWebAppCustomizationCommandOutput;

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
export type TransferClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of TransferClient class constructor that set the region, credentials and other options.
 */
export interface TransferClientConfig extends TransferClientConfigType {}

/**
 * @public
 */
export type TransferClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of TransferClient class. This is resolved and normalized from the {@link TransferClientConfig | constructor configuration interface}.
 */
export interface TransferClientResolvedConfig extends TransferClientResolvedConfigType {}

/**
 * <p>Transfer Family is a fully managed service that enables the transfer of files over the File
 *       Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File
 *       Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS.
 *       Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3.
 *       Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating
 *       with existing authentication systems, and providing DNS routing with Amazon Route 53 so
 *       nothing changes for your customers and partners, or their applications. With your data in
 *       Amazon S3, you can use it with Amazon Web Services services for processing, analytics, machine learning, and
 *       archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and
 *       set up.</p>
 * @public
 */
export class TransferClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TransferClientResolvedConfig
> {
  /**
   * The resolved configuration of TransferClient class. This is resolved and normalized from the {@link TransferClientConfig | constructor configuration interface}.
   */
  readonly config: TransferClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<TransferClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultTransferHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: TransferClientResolvedConfig) =>
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
