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
  defaultEMRContainersHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelJobRunCommandInput, CancelJobRunCommandOutput } from "./commands/CancelJobRunCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "./commands/CreateJobTemplateCommand";
import {
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
} from "./commands/CreateManagedEndpointCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import {
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
} from "./commands/CreateVirtualClusterCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "./commands/DeleteJobTemplateCommand";
import {
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
} from "./commands/DeleteManagedEndpointCommand";
import {
  DeleteVirtualClusterCommandInput,
  DeleteVirtualClusterCommandOutput,
} from "./commands/DeleteVirtualClusterCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "./commands/DescribeJobRunCommand";
import {
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "./commands/DescribeJobTemplateCommand";
import {
  DescribeManagedEndpointCommandInput,
  DescribeManagedEndpointCommandOutput,
} from "./commands/DescribeManagedEndpointCommand";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "./commands/DescribeSecurityConfigurationCommand";
import {
  DescribeVirtualClusterCommandInput,
  DescribeVirtualClusterCommandOutput,
} from "./commands/DescribeVirtualClusterCommand";
import {
  GetManagedEndpointSessionCredentialsCommandInput,
  GetManagedEndpointSessionCredentialsCommandOutput,
} from "./commands/GetManagedEndpointSessionCredentialsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "./commands/ListJobTemplatesCommand";
import {
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "./commands/ListManagedEndpointsCommand";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "./commands/ListSecurityConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
} from "./commands/ListVirtualClustersCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
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
  | CancelJobRunCommandInput
  | CreateJobTemplateCommandInput
  | CreateManagedEndpointCommandInput
  | CreateSecurityConfigurationCommandInput
  | CreateVirtualClusterCommandInput
  | DeleteJobTemplateCommandInput
  | DeleteManagedEndpointCommandInput
  | DeleteVirtualClusterCommandInput
  | DescribeJobRunCommandInput
  | DescribeJobTemplateCommandInput
  | DescribeManagedEndpointCommandInput
  | DescribeSecurityConfigurationCommandInput
  | DescribeVirtualClusterCommandInput
  | GetManagedEndpointSessionCredentialsCommandInput
  | ListJobRunsCommandInput
  | ListJobTemplatesCommandInput
  | ListManagedEndpointsCommandInput
  | ListSecurityConfigurationsCommandInput
  | ListTagsForResourceCommandInput
  | ListVirtualClustersCommandInput
  | StartJobRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelJobRunCommandOutput
  | CreateJobTemplateCommandOutput
  | CreateManagedEndpointCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | CreateVirtualClusterCommandOutput
  | DeleteJobTemplateCommandOutput
  | DeleteManagedEndpointCommandOutput
  | DeleteVirtualClusterCommandOutput
  | DescribeJobRunCommandOutput
  | DescribeJobTemplateCommandOutput
  | DescribeManagedEndpointCommandOutput
  | DescribeSecurityConfigurationCommandOutput
  | DescribeVirtualClusterCommandOutput
  | GetManagedEndpointSessionCredentialsCommandOutput
  | ListJobRunsCommandOutput
  | ListJobTemplatesCommandOutput
  | ListManagedEndpointsCommandOutput
  | ListSecurityConfigurationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVirtualClustersCommandOutput
  | StartJobRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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
export type EMRContainersClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of EMRContainersClient class constructor that set the region, credentials and other options.
 */
export interface EMRContainersClientConfig extends EMRContainersClientConfigType {}

/**
 * @public
 */
export type EMRContainersClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of EMRContainersClient class. This is resolved and normalized from the {@link EMRContainersClientConfig | constructor configuration interface}.
 */
export interface EMRContainersClientResolvedConfig extends EMRContainersClientResolvedConfigType {}

/**
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows
 *          you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS).
 *          With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications.
 *          For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is
 *             Amazon EMR on EKS</a>.</p>
 *          <p>
 *             <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following
 *          scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example,
 *                   <code>aws emr-containers start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For
 *                example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more
 *                information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example,
 *                   <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see
 *                   <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class EMRContainersClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EMRContainersClientResolvedConfig
> {
  /**
   * The resolved configuration of EMRContainersClient class. This is resolved and normalized from the {@link EMRContainersClientConfig | constructor configuration interface}.
   */
  readonly config: EMRContainersClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EMRContainersClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultEMRContainersHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EMRContainersClientResolvedConfig) =>
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
