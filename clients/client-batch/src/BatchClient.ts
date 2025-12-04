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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultBatchHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "./commands/CreateComputeEnvironmentCommand";
import {
  CreateConsumableResourceCommandInput,
  CreateConsumableResourceCommandOutput,
} from "./commands/CreateConsumableResourceCommand";
import { CreateJobQueueCommandInput, CreateJobQueueCommandOutput } from "./commands/CreateJobQueueCommand";
import {
  CreateSchedulingPolicyCommandInput,
  CreateSchedulingPolicyCommandOutput,
} from "./commands/CreateSchedulingPolicyCommand";
import {
  CreateServiceEnvironmentCommandInput,
  CreateServiceEnvironmentCommandOutput,
} from "./commands/CreateServiceEnvironmentCommand";
import {
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
} from "./commands/DeleteComputeEnvironmentCommand";
import {
  DeleteConsumableResourceCommandInput,
  DeleteConsumableResourceCommandOutput,
} from "./commands/DeleteConsumableResourceCommand";
import { DeleteJobQueueCommandInput, DeleteJobQueueCommandOutput } from "./commands/DeleteJobQueueCommand";
import {
  DeleteSchedulingPolicyCommandInput,
  DeleteSchedulingPolicyCommandOutput,
} from "./commands/DeleteSchedulingPolicyCommand";
import {
  DeleteServiceEnvironmentCommandInput,
  DeleteServiceEnvironmentCommandOutput,
} from "./commands/DeleteServiceEnvironmentCommand";
import {
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput,
} from "./commands/DeregisterJobDefinitionCommand";
import {
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "./commands/DescribeComputeEnvironmentsCommand";
import {
  DescribeConsumableResourceCommandInput,
  DescribeConsumableResourceCommandOutput,
} from "./commands/DescribeConsumableResourceCommand";
import {
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "./commands/DescribeJobDefinitionsCommand";
import { DescribeJobQueuesCommandInput, DescribeJobQueuesCommandOutput } from "./commands/DescribeJobQueuesCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import {
  DescribeSchedulingPoliciesCommandInput,
  DescribeSchedulingPoliciesCommandOutput,
} from "./commands/DescribeSchedulingPoliciesCommand";
import {
  DescribeServiceEnvironmentsCommandInput,
  DescribeServiceEnvironmentsCommandOutput,
} from "./commands/DescribeServiceEnvironmentsCommand";
import { DescribeServiceJobCommandInput, DescribeServiceJobCommandOutput } from "./commands/DescribeServiceJobCommand";
import {
  GetJobQueueSnapshotCommandInput,
  GetJobQueueSnapshotCommandOutput,
} from "./commands/GetJobQueueSnapshotCommand";
import {
  ListConsumableResourcesCommandInput,
  ListConsumableResourcesCommandOutput,
} from "./commands/ListConsumableResourcesCommand";
import {
  ListJobsByConsumableResourceCommandInput,
  ListJobsByConsumableResourceCommandOutput,
} from "./commands/ListJobsByConsumableResourceCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListSchedulingPoliciesCommandInput,
  ListSchedulingPoliciesCommandOutput,
} from "./commands/ListSchedulingPoliciesCommand";
import { ListServiceJobsCommandInput, ListServiceJobsCommandOutput } from "./commands/ListServiceJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
} from "./commands/RegisterJobDefinitionCommand";
import { SubmitJobCommandInput, SubmitJobCommandOutput } from "./commands/SubmitJobCommand";
import { SubmitServiceJobCommandInput, SubmitServiceJobCommandOutput } from "./commands/SubmitServiceJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TerminateJobCommandInput, TerminateJobCommandOutput } from "./commands/TerminateJobCommand";
import {
  TerminateServiceJobCommandInput,
  TerminateServiceJobCommandOutput,
} from "./commands/TerminateServiceJobCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
} from "./commands/UpdateComputeEnvironmentCommand";
import {
  UpdateConsumableResourceCommandInput,
  UpdateConsumableResourceCommandOutput,
} from "./commands/UpdateConsumableResourceCommand";
import { UpdateJobQueueCommandInput, UpdateJobQueueCommandOutput } from "./commands/UpdateJobQueueCommand";
import {
  UpdateSchedulingPolicyCommandInput,
  UpdateSchedulingPolicyCommandOutput,
} from "./commands/UpdateSchedulingPolicyCommand";
import {
  UpdateServiceEnvironmentCommandInput,
  UpdateServiceEnvironmentCommandOutput,
} from "./commands/UpdateServiceEnvironmentCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CancelJobCommandInput
  | CreateComputeEnvironmentCommandInput
  | CreateConsumableResourceCommandInput
  | CreateJobQueueCommandInput
  | CreateSchedulingPolicyCommandInput
  | CreateServiceEnvironmentCommandInput
  | DeleteComputeEnvironmentCommandInput
  | DeleteConsumableResourceCommandInput
  | DeleteJobQueueCommandInput
  | DeleteSchedulingPolicyCommandInput
  | DeleteServiceEnvironmentCommandInput
  | DeregisterJobDefinitionCommandInput
  | DescribeComputeEnvironmentsCommandInput
  | DescribeConsumableResourceCommandInput
  | DescribeJobDefinitionsCommandInput
  | DescribeJobQueuesCommandInput
  | DescribeJobsCommandInput
  | DescribeSchedulingPoliciesCommandInput
  | DescribeServiceEnvironmentsCommandInput
  | DescribeServiceJobCommandInput
  | GetJobQueueSnapshotCommandInput
  | ListConsumableResourcesCommandInput
  | ListJobsByConsumableResourceCommandInput
  | ListJobsCommandInput
  | ListSchedulingPoliciesCommandInput
  | ListServiceJobsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterJobDefinitionCommandInput
  | SubmitJobCommandInput
  | SubmitServiceJobCommandInput
  | TagResourceCommandInput
  | TerminateJobCommandInput
  | TerminateServiceJobCommandInput
  | UntagResourceCommandInput
  | UpdateComputeEnvironmentCommandInput
  | UpdateConsumableResourceCommandInput
  | UpdateJobQueueCommandInput
  | UpdateSchedulingPolicyCommandInput
  | UpdateServiceEnvironmentCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelJobCommandOutput
  | CreateComputeEnvironmentCommandOutput
  | CreateConsumableResourceCommandOutput
  | CreateJobQueueCommandOutput
  | CreateSchedulingPolicyCommandOutput
  | CreateServiceEnvironmentCommandOutput
  | DeleteComputeEnvironmentCommandOutput
  | DeleteConsumableResourceCommandOutput
  | DeleteJobQueueCommandOutput
  | DeleteSchedulingPolicyCommandOutput
  | DeleteServiceEnvironmentCommandOutput
  | DeregisterJobDefinitionCommandOutput
  | DescribeComputeEnvironmentsCommandOutput
  | DescribeConsumableResourceCommandOutput
  | DescribeJobDefinitionsCommandOutput
  | DescribeJobQueuesCommandOutput
  | DescribeJobsCommandOutput
  | DescribeSchedulingPoliciesCommandOutput
  | DescribeServiceEnvironmentsCommandOutput
  | DescribeServiceJobCommandOutput
  | GetJobQueueSnapshotCommandOutput
  | ListConsumableResourcesCommandOutput
  | ListJobsByConsumableResourceCommandOutput
  | ListJobsCommandOutput
  | ListSchedulingPoliciesCommandOutput
  | ListServiceJobsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterJobDefinitionCommandOutput
  | SubmitJobCommandOutput
  | SubmitServiceJobCommandOutput
  | TagResourceCommandOutput
  | TerminateJobCommandOutput
  | TerminateServiceJobCommandOutput
  | UntagResourceCommandOutput
  | UpdateComputeEnvironmentCommandOutput
  | UpdateConsumableResourceCommandOutput
  | UpdateJobQueueCommandOutput
  | UpdateSchedulingPolicyCommandOutput
  | UpdateServiceEnvironmentCommandOutput;

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
export type BatchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BatchClient class constructor that set the region, credentials and other options.
 */
export interface BatchClientConfig extends BatchClientConfigType {}

/**
 * @public
 */
export type BatchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BatchClient class. This is resolved and normalized from the {@link BatchClientConfig | constructor configuration interface}.
 */
export interface BatchClientResolvedConfig extends BatchClientResolvedConfigType {}

/**
 * <fullname>Batch</fullname>
 *          <p>Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for
 *    developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of
 *    the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure.
 *    At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently
 *    provision resources, and work toward eliminating capacity constraints, reducing your overall compute costs, and
 *    delivering results more quickly.</p>
 *          <p>As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically
 *    provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific
 *    workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus
 *    on analyzing results and solving your specific problems instead.</p>
 * @public
 */
export class BatchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BatchClientResolvedConfig
> {
  /**
   * The resolved configuration of BatchClient class. This is resolved and normalized from the {@link BatchClientConfig | constructor configuration interface}.
   */
  readonly config: BatchClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BatchClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultBatchHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BatchClientResolvedConfig) =>
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
