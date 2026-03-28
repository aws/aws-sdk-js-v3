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
  defaultTransferHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateAccessCommandInput, CreateAccessCommandOutput } from "./commands/CreateAccessCommand";
import type { CreateAgreementCommandInput, CreateAgreementCommandOutput } from "./commands/CreateAgreementCommand";
import type { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "./commands/CreateConnectorCommand";
import type { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import type { CreateServerCommandInput, CreateServerCommandOutput } from "./commands/CreateServerCommand";
import type { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import type { CreateWebAppCommandInput, CreateWebAppCommandOutput } from "./commands/CreateWebAppCommand";
import type { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import type { DeleteAccessCommandInput, DeleteAccessCommandOutput } from "./commands/DeleteAccessCommand";
import type { DeleteAgreementCommandInput, DeleteAgreementCommandOutput } from "./commands/DeleteAgreementCommand";
import type {
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import type { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "./commands/DeleteConnectorCommand";
import type { DeleteHostKeyCommandInput, DeleteHostKeyCommandOutput } from "./commands/DeleteHostKeyCommand";
import type { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import type { DeleteServerCommandInput, DeleteServerCommandOutput } from "./commands/DeleteServerCommand";
import type {
  DeleteSshPublicKeyCommandInput,
  DeleteSshPublicKeyCommandOutput,
} from "./commands/DeleteSshPublicKeyCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type { DeleteWebAppCommandInput, DeleteWebAppCommandOutput } from "./commands/DeleteWebAppCommand";
import type {
  DeleteWebAppCustomizationCommandInput,
  DeleteWebAppCustomizationCommandOutput,
} from "./commands/DeleteWebAppCustomizationCommand";
import type { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import type { DescribeAccessCommandInput, DescribeAccessCommandOutput } from "./commands/DescribeAccessCommand";
import type {
  DescribeAgreementCommandInput,
  DescribeAgreementCommandOutput,
} from "./commands/DescribeAgreementCommand";
import type {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import type {
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
} from "./commands/DescribeConnectorCommand";
import type {
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import type { DescribeHostKeyCommandInput, DescribeHostKeyCommandOutput } from "./commands/DescribeHostKeyCommand";
import type { DescribeProfileCommandInput, DescribeProfileCommandOutput } from "./commands/DescribeProfileCommand";
import type {
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
} from "./commands/DescribeSecurityPolicyCommand";
import type { DescribeServerCommandInput, DescribeServerCommandOutput } from "./commands/DescribeServerCommand";
import type { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import type { DescribeWebAppCommandInput, DescribeWebAppCommandOutput } from "./commands/DescribeWebAppCommand";
import type {
  DescribeWebAppCustomizationCommandInput,
  DescribeWebAppCustomizationCommandOutput,
} from "./commands/DescribeWebAppCustomizationCommand";
import type { DescribeWorkflowCommandInput, DescribeWorkflowCommandOutput } from "./commands/DescribeWorkflowCommand";
import type {
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput,
} from "./commands/ImportCertificateCommand";
import type { ImportHostKeyCommandInput, ImportHostKeyCommandOutput } from "./commands/ImportHostKeyCommand";
import type {
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput,
} from "./commands/ImportSshPublicKeyCommand";
import type { ListAccessesCommandInput, ListAccessesCommandOutput } from "./commands/ListAccessesCommand";
import type { ListAgreementsCommandInput, ListAgreementsCommandOutput } from "./commands/ListAgreementsCommand";
import type { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import type { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "./commands/ListConnectorsCommand";
import type { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import type {
  ListFileTransferResultsCommandInput,
  ListFileTransferResultsCommandOutput,
} from "./commands/ListFileTransferResultsCommand";
import type { ListHostKeysCommandInput, ListHostKeysCommandOutput } from "./commands/ListHostKeysCommand";
import type { ListProfilesCommandInput, ListProfilesCommandOutput } from "./commands/ListProfilesCommand";
import type {
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand";
import type { ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import type { ListWebAppsCommandInput, ListWebAppsCommandOutput } from "./commands/ListWebAppsCommand";
import type { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import type {
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "./commands/SendWorkflowStepStateCommand";
import type {
  StartDirectoryListingCommandInput,
  StartDirectoryListingCommandOutput,
} from "./commands/StartDirectoryListingCommand";
import type {
  StartFileTransferCommandInput,
  StartFileTransferCommandOutput,
} from "./commands/StartFileTransferCommand";
import type {
  StartRemoteDeleteCommandInput,
  StartRemoteDeleteCommandOutput,
} from "./commands/StartRemoteDeleteCommand";
import type { StartRemoteMoveCommandInput, StartRemoteMoveCommandOutput } from "./commands/StartRemoteMoveCommand";
import type { StartServerCommandInput, StartServerCommandOutput } from "./commands/StartServerCommand";
import type { StopServerCommandInput, StopServerCommandOutput } from "./commands/StopServerCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import type {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
} from "./commands/TestIdentityProviderCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAccessCommandInput, UpdateAccessCommandOutput } from "./commands/UpdateAccessCommand";
import type { UpdateAgreementCommandInput, UpdateAgreementCommandOutput } from "./commands/UpdateAgreementCommand";
import type {
  UpdateCertificateCommandInput,
  UpdateCertificateCommandOutput,
} from "./commands/UpdateCertificateCommand";
import type { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "./commands/UpdateConnectorCommand";
import type { UpdateHostKeyCommandInput, UpdateHostKeyCommandOutput } from "./commands/UpdateHostKeyCommand";
import type { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import type { UpdateServerCommandInput, UpdateServerCommandOutput } from "./commands/UpdateServerCommand";
import type { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import type { UpdateWebAppCommandInput, UpdateWebAppCommandOutput } from "./commands/UpdateWebAppCommand";
import type {
  UpdateWebAppCustomizationCommandInput,
  UpdateWebAppCustomizationCommandOutput,
} from "./commands/UpdateWebAppCustomizationCommand";
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
  | StartRemoteDeleteCommandInput
  | StartRemoteMoveCommandInput
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
  | StartRemoteDeleteCommandOutput
  | StartRemoteMoveCommandOutput
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
 * <p>Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up.</p>
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
