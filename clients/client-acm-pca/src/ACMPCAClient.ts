// smithy-typescript generated code
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
} from "./commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
} from "./commands/CreateCertificateAuthorityCommand";
import { CreatePermissionCommandInput, CreatePermissionCommandOutput } from "./commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
} from "./commands/DeleteCertificateAuthorityCommand";
import { DeletePermissionCommandInput, DeletePermissionCommandOutput } from "./commands/DeletePermissionCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import {
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput,
} from "./commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
} from "./commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
} from "./commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
} from "./commands/GetCertificateAuthorityCsrCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "./commands/GetCertificateCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput,
} from "./commands/ImportCertificateAuthorityCertificateCommand";
import { IssueCertificateCommandInput, IssueCertificateCommandOutput } from "./commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "./commands/ListCertificateAuthoritiesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import {
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
} from "./commands/RestoreCertificateAuthorityCommand";
import { RevokeCertificateCommandInput, RevokeCertificateCommandOutput } from "./commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
} from "./commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
} from "./commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
} from "./commands/UpdateCertificateAuthorityCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateCertificateAuthorityAuditReportCommandInput
  | CreateCertificateAuthorityCommandInput
  | CreatePermissionCommandInput
  | DeleteCertificateAuthorityCommandInput
  | DeletePermissionCommandInput
  | DeletePolicyCommandInput
  | DescribeCertificateAuthorityAuditReportCommandInput
  | DescribeCertificateAuthorityCommandInput
  | GetCertificateAuthorityCertificateCommandInput
  | GetCertificateAuthorityCsrCommandInput
  | GetCertificateCommandInput
  | GetPolicyCommandInput
  | ImportCertificateAuthorityCertificateCommandInput
  | IssueCertificateCommandInput
  | ListCertificateAuthoritiesCommandInput
  | ListPermissionsCommandInput
  | ListTagsCommandInput
  | PutPolicyCommandInput
  | RestoreCertificateAuthorityCommandInput
  | RevokeCertificateCommandInput
  | TagCertificateAuthorityCommandInput
  | UntagCertificateAuthorityCommandInput
  | UpdateCertificateAuthorityCommandInput;

export type ServiceOutputTypes =
  | CreateCertificateAuthorityAuditReportCommandOutput
  | CreateCertificateAuthorityCommandOutput
  | CreatePermissionCommandOutput
  | DeleteCertificateAuthorityCommandOutput
  | DeletePermissionCommandOutput
  | DeletePolicyCommandOutput
  | DescribeCertificateAuthorityAuditReportCommandOutput
  | DescribeCertificateAuthorityCommandOutput
  | GetCertificateAuthorityCertificateCommandOutput
  | GetCertificateAuthorityCsrCommandOutput
  | GetCertificateCommandOutput
  | GetPolicyCommandOutput
  | ImportCertificateAuthorityCertificateCommandOutput
  | IssueCertificateCommandOutput
  | ListCertificateAuthoritiesCommandOutput
  | ListPermissionsCommandOutput
  | ListTagsCommandOutput
  | PutPolicyCommandOutput
  | RestoreCertificateAuthorityCommandOutput
  | RevokeCertificateCommandOutput
  | TagCertificateAuthorityCommandOutput
  | UntagCertificateAuthorityCommandOutput
  | UpdateCertificateAuthorityCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type ACMPCAClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ACMPCAClient class constructor that set the region, credentials and other options.
 */
export interface ACMPCAClientConfig extends ACMPCAClientConfigType {}

type ACMPCAClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ACMPCAClient class. This is resolved and normalized from the {@link ACMPCAClientConfig | constructor configuration interface}.
 */
export interface ACMPCAClientResolvedConfig extends ACMPCAClientResolvedConfigType {}

/**
 * <p>This is the <i>Certificate Manager Private Certificate Authority (PCA) API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing a private certificate authority (CA) for your organization.</p>
 * 		       <p>The documentation for each action shows the API request parameters and the JSON
 * 			response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is
 * 			tailored to the programming language or platform that you prefer. For more information,
 * 			see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 * 		       <p>Each ACM Private CA API operation has a quota that determines the number of times the
 * 			operation can be called per second. ACM Private CA throttles API requests at different rates
 * 			depending on the operation. Throttling means that ACM Private CA rejects an otherwise valid
 * 			request because the request exceeds the operation's quota for the number of requests per
 * 			second. When a request is throttled, ACM Private CA returns a <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. ACM Private CA does not guarantee a minimum request
 * 			rate for APIs. </p>
 * 		       <p>To see an up-to-date list of your ACM Private CA quotas, or to request a quota increase,
 * 			log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a>
 * 			console.</p>
 */
export class ACMPCAClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ACMPCAClientResolvedConfig
> {
  /**
   * The resolved configuration of ACMPCAClient class. This is resolved and normalized from the {@link ACMPCAClientConfig | constructor configuration interface}.
   */
  readonly config: ACMPCAClientResolvedConfig;

  constructor(configuration: ACMPCAClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
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
