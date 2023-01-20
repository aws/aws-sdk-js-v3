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

import { CreateAccessCommandInput, CreateAccessCommandOutput } from "./commands/CreateAccessCommand";
import { CreateAgreementCommandInput, CreateAgreementCommandOutput } from "./commands/CreateAgreementCommand";
import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "./commands/CreateConnectorCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "./commands/CreateServerCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
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
import { DescribeWorkflowCommandInput, DescribeWorkflowCommandOutput } from "./commands/DescribeWorkflowCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "./commands/ImportCertificateCommand";
import { ImportHostKeyCommandInput, ImportHostKeyCommandOutput } from "./commands/ImportHostKeyCommand";
import { ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput } from "./commands/ImportSshPublicKeyCommand";
import { ListAccessesCommandInput, ListAccessesCommandOutput } from "./commands/ListAccessesCommand";
import { ListAgreementsCommandInput, ListAgreementsCommandOutput } from "./commands/ListAgreementsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "./commands/ListConnectorsCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
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
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import {
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "./commands/SendWorkflowStepStateCommand";
import { StartFileTransferCommandInput, StartFileTransferCommandOutput } from "./commands/StartFileTransferCommand";
import { StartServerCommandInput, StartServerCommandOutput } from "./commands/StartServerCommand";
import { StopServerCommandInput, StopServerCommandOutput } from "./commands/StopServerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
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
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateAccessCommandInput
  | CreateAgreementCommandInput
  | CreateConnectorCommandInput
  | CreateProfileCommandInput
  | CreateServerCommandInput
  | CreateUserCommandInput
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
  | DescribeWorkflowCommandInput
  | ImportCertificateCommandInput
  | ImportHostKeyCommandInput
  | ImportSshPublicKeyCommandInput
  | ListAccessesCommandInput
  | ListAgreementsCommandInput
  | ListCertificatesCommandInput
  | ListConnectorsCommandInput
  | ListExecutionsCommandInput
  | ListHostKeysCommandInput
  | ListProfilesCommandInput
  | ListSecurityPoliciesCommandInput
  | ListServersCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | ListWorkflowsCommandInput
  | SendWorkflowStepStateCommandInput
  | StartFileTransferCommandInput
  | StartServerCommandInput
  | StopServerCommandInput
  | TagResourceCommandInput
  | TestIdentityProviderCommandInput
  | UntagResourceCommandInput
  | UpdateAccessCommandInput
  | UpdateAgreementCommandInput
  | UpdateCertificateCommandInput
  | UpdateConnectorCommandInput
  | UpdateHostKeyCommandInput
  | UpdateProfileCommandInput
  | UpdateServerCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | CreateAccessCommandOutput
  | CreateAgreementCommandOutput
  | CreateConnectorCommandOutput
  | CreateProfileCommandOutput
  | CreateServerCommandOutput
  | CreateUserCommandOutput
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
  | DescribeWorkflowCommandOutput
  | ImportCertificateCommandOutput
  | ImportHostKeyCommandOutput
  | ImportSshPublicKeyCommandOutput
  | ListAccessesCommandOutput
  | ListAgreementsCommandOutput
  | ListCertificatesCommandOutput
  | ListConnectorsCommandOutput
  | ListExecutionsCommandOutput
  | ListHostKeysCommandOutput
  | ListProfilesCommandOutput
  | ListSecurityPoliciesCommandOutput
  | ListServersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | ListWorkflowsCommandOutput
  | SendWorkflowStepStateCommandOutput
  | StartFileTransferCommandOutput
  | StartServerCommandOutput
  | StopServerCommandOutput
  | TagResourceCommandOutput
  | TestIdentityProviderCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessCommandOutput
  | UpdateAgreementCommandOutput
  | UpdateCertificateCommandOutput
  | UpdateConnectorCommandOutput
  | UpdateHostKeyCommandOutput
  | UpdateProfileCommandOutput
  | UpdateServerCommandOutput
  | UpdateUserCommandOutput;

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

type TransferClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of TransferClient class constructor that set the region, credentials and other options.
 */
export interface TransferClientConfig extends TransferClientConfigType {}

type TransferClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of TransferClient class. This is resolved and normalized from the {@link TransferClientConfig | constructor configuration interface}.
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
 *       Amazon S3, you can use it with Amazon Web Services for processing, analytics, machine learning, and
 *       archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and
 *       set up.</p>
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

  constructor(configuration: TransferClientConfig) {
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
