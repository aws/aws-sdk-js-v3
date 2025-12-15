// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getGlacierPlugin } from "@aws-sdk/middleware-sdk-glacier";
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
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type SdkStreamMixinInjector as __SdkStreamMixinInjector,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  HttpRequest as __HttpRequest,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultGlacierHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import type { AbortVaultLockCommandInput, AbortVaultLockCommandOutput } from "./commands/AbortVaultLockCommand";
import type { AddTagsToVaultCommandInput, AddTagsToVaultCommandOutput } from "./commands/AddTagsToVaultCommand";
import type {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import type {
  CompleteVaultLockCommandInput,
  CompleteVaultLockCommandOutput,
} from "./commands/CompleteVaultLockCommand";
import type { CreateVaultCommandInput, CreateVaultCommandOutput } from "./commands/CreateVaultCommand";
import type { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "./commands/DeleteArchiveCommand";
import type {
  DeleteVaultAccessPolicyCommandInput,
  DeleteVaultAccessPolicyCommandOutput,
} from "./commands/DeleteVaultAccessPolicyCommand";
import type { DeleteVaultCommandInput, DeleteVaultCommandOutput } from "./commands/DeleteVaultCommand";
import type {
  DeleteVaultNotificationsCommandInput,
  DeleteVaultNotificationsCommandOutput,
} from "./commands/DeleteVaultNotificationsCommand";
import type { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import type { DescribeVaultCommandInput, DescribeVaultCommandOutput } from "./commands/DescribeVaultCommand";
import type {
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput,
} from "./commands/GetDataRetrievalPolicyCommand";
import type { GetJobOutputCommandInput, GetJobOutputCommandOutput } from "./commands/GetJobOutputCommand";
import type {
  GetVaultAccessPolicyCommandInput,
  GetVaultAccessPolicyCommandOutput,
} from "./commands/GetVaultAccessPolicyCommand";
import type { GetVaultLockCommandInput, GetVaultLockCommandOutput } from "./commands/GetVaultLockCommand";
import type {
  GetVaultNotificationsCommandInput,
  GetVaultNotificationsCommandOutput,
} from "./commands/GetVaultNotificationsCommand";
import type { InitiateJobCommandInput, InitiateJobCommandOutput } from "./commands/InitiateJobCommand";
import type {
  InitiateMultipartUploadCommandInput,
  InitiateMultipartUploadCommandOutput,
} from "./commands/InitiateMultipartUploadCommand";
import type {
  InitiateVaultLockCommandInput,
  InitiateVaultLockCommandOutput,
} from "./commands/InitiateVaultLockCommand";
import type { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import type {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import type { ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand";
import type {
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput,
} from "./commands/ListProvisionedCapacityCommand";
import type { ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput } from "./commands/ListTagsForVaultCommand";
import type { ListVaultsCommandInput, ListVaultsCommandOutput } from "./commands/ListVaultsCommand";
import type {
  PurchaseProvisionedCapacityCommandInput,
  PurchaseProvisionedCapacityCommandOutput,
} from "./commands/PurchaseProvisionedCapacityCommand";
import type {
  RemoveTagsFromVaultCommandInput,
  RemoveTagsFromVaultCommandOutput,
} from "./commands/RemoveTagsFromVaultCommand";
import type {
  SetDataRetrievalPolicyCommandInput,
  SetDataRetrievalPolicyCommandOutput,
} from "./commands/SetDataRetrievalPolicyCommand";
import type {
  SetVaultAccessPolicyCommandInput,
  SetVaultAccessPolicyCommandOutput,
} from "./commands/SetVaultAccessPolicyCommand";
import type {
  SetVaultNotificationsCommandInput,
  SetVaultNotificationsCommandOutput,
} from "./commands/SetVaultNotificationsCommand";
import type { UploadArchiveCommandInput, UploadArchiveCommandOutput } from "./commands/UploadArchiveCommand";
import type {
  UploadMultipartPartCommandInput,
  UploadMultipartPartCommandOutput,
} from "./commands/UploadMultipartPartCommand";
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
  | AbortMultipartUploadCommandInput
  | AbortVaultLockCommandInput
  | AddTagsToVaultCommandInput
  | CompleteMultipartUploadCommandInput
  | CompleteVaultLockCommandInput
  | CreateVaultCommandInput
  | DeleteArchiveCommandInput
  | DeleteVaultAccessPolicyCommandInput
  | DeleteVaultCommandInput
  | DeleteVaultNotificationsCommandInput
  | DescribeJobCommandInput
  | DescribeVaultCommandInput
  | GetDataRetrievalPolicyCommandInput
  | GetJobOutputCommandInput
  | GetVaultAccessPolicyCommandInput
  | GetVaultLockCommandInput
  | GetVaultNotificationsCommandInput
  | InitiateJobCommandInput
  | InitiateMultipartUploadCommandInput
  | InitiateVaultLockCommandInput
  | ListJobsCommandInput
  | ListMultipartUploadsCommandInput
  | ListPartsCommandInput
  | ListProvisionedCapacityCommandInput
  | ListTagsForVaultCommandInput
  | ListVaultsCommandInput
  | PurchaseProvisionedCapacityCommandInput
  | RemoveTagsFromVaultCommandInput
  | SetDataRetrievalPolicyCommandInput
  | SetVaultAccessPolicyCommandInput
  | SetVaultNotificationsCommandInput
  | UploadArchiveCommandInput
  | UploadMultipartPartCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AbortMultipartUploadCommandOutput
  | AbortVaultLockCommandOutput
  | AddTagsToVaultCommandOutput
  | CompleteMultipartUploadCommandOutput
  | CompleteVaultLockCommandOutput
  | CreateVaultCommandOutput
  | DeleteArchiveCommandOutput
  | DeleteVaultAccessPolicyCommandOutput
  | DeleteVaultCommandOutput
  | DeleteVaultNotificationsCommandOutput
  | DescribeJobCommandOutput
  | DescribeVaultCommandOutput
  | GetDataRetrievalPolicyCommandOutput
  | GetJobOutputCommandOutput
  | GetVaultAccessPolicyCommandOutput
  | GetVaultLockCommandOutput
  | GetVaultNotificationsCommandOutput
  | InitiateJobCommandOutput
  | InitiateMultipartUploadCommandOutput
  | InitiateVaultLockCommandOutput
  | ListJobsCommandOutput
  | ListMultipartUploadsCommandOutput
  | ListPartsCommandOutput
  | ListProvisionedCapacityCommandOutput
  | ListTagsForVaultCommandOutput
  | ListVaultsCommandOutput
  | PurchaseProvisionedCapacityCommandOutput
  | RemoveTagsFromVaultCommandOutput
  | SetDataRetrievalPolicyCommandOutput
  | SetVaultAccessPolicyCommandOutput
  | SetVaultNotificationsCommandOutput
  | UploadArchiveCommandOutput
  | UploadMultipartPartCommandOutput;

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
   * Function that returns body checksums.
   * @internal
   */
  bodyChecksumGenerator?: (
    request: __HttpRequest,
    options: { sha256: __ChecksumConstructor | __HashConstructor; utf8Decoder: __Decoder }
  ) => Promise<[string, string]>;

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
  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

/**
 * @public
 */
export type GlacierClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of GlacierClient class constructor that set the region, credentials and other options.
 */
export interface GlacierClientConfig extends GlacierClientConfigType {}

/**
 * @public
 */
export type GlacierClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of GlacierClient class. This is resolved and normalized from the {@link GlacierClientConfig | constructor configuration interface}.
 */
export interface GlacierClientResolvedConfig extends GlacierClientResolvedConfigType {}

/**
 * <p> Amazon Glacier (Glacier) is a storage solution for "cold data."</p>
 *
 *          <p>Glacier is an extremely low-cost storage service that provides secure,
 *          durable, and easy-to-use storage for data backup and archival. With Glacier,
 *          customers can store their data cost effectively for months, years, or decades.
 *          Glacier also enables customers to offload the administrative burdens of operating and
 *          scaling storage to AWS, so they don't have to worry about capacity planning, hardware
 *          provisioning, data replication, hardware failure and recovery, or time-consuming hardware
 *          migrations.</p>
 *
 *          <p>Glacier is a great storage choice when low storage cost is paramount and your
 *          data is rarely retrieved. If your
 *          application requires fast or frequent access to your data, consider using Amazon S3. For
 *          more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service
 *             (Amazon S3)</a>.</p>
 *
 *          <p>You can store any kind of data in any format. There is no maximum limit on the total
 *          amount of data you can store in Glacier.</p>
 *
 *          <p>If you are a first-time user of Glacier, we recommend that you begin by
 *          reading the following sections in the <i>Amazon Glacier Developer
 *          Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
 *                   Amazon Glacier</a> - This section of the Developer Guide describes the
 *                underlying data model, the operations it supports, and the AWS SDKs that you can use
 *                to interact with the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
 *                   with Amazon Glacier</a> - The Getting Started section walks you through the
 *                process of creating a vault, uploading archives, creating jobs to download archives,
 *                retrieving the job output, and deleting archives.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class GlacierClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlacierClientResolvedConfig
> {
  /**
   * The resolved configuration of GlacierClient class. This is resolved and normalized from the {@link GlacierClientConfig | constructor configuration interface}.
   */
  readonly config: GlacierClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GlacierClientConfig>) {
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
    this.middlewareStack.use(getGlacierPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultGlacierHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GlacierClientResolvedConfig) =>
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
