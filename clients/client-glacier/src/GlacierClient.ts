import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import { AbortVaultLockCommandInput, AbortVaultLockCommandOutput } from "./commands/AbortVaultLockCommand";
import { AddTagsToVaultCommandInput, AddTagsToVaultCommandOutput } from "./commands/AddTagsToVaultCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import { CompleteVaultLockCommandInput, CompleteVaultLockCommandOutput } from "./commands/CompleteVaultLockCommand";
import { CreateVaultCommandInput, CreateVaultCommandOutput } from "./commands/CreateVaultCommand";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "./commands/DeleteArchiveCommand";
import {
  DeleteVaultAccessPolicyCommandInput,
  DeleteVaultAccessPolicyCommandOutput,
} from "./commands/DeleteVaultAccessPolicyCommand";
import { DeleteVaultCommandInput, DeleteVaultCommandOutput } from "./commands/DeleteVaultCommand";
import {
  DeleteVaultNotificationsCommandInput,
  DeleteVaultNotificationsCommandOutput,
} from "./commands/DeleteVaultNotificationsCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { DescribeVaultCommandInput, DescribeVaultCommandOutput } from "./commands/DescribeVaultCommand";
import {
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput,
} from "./commands/GetDataRetrievalPolicyCommand";
import { GetJobOutputCommandInput, GetJobOutputCommandOutput } from "./commands/GetJobOutputCommand";
import {
  GetVaultAccessPolicyCommandInput,
  GetVaultAccessPolicyCommandOutput,
} from "./commands/GetVaultAccessPolicyCommand";
import { GetVaultLockCommandInput, GetVaultLockCommandOutput } from "./commands/GetVaultLockCommand";
import {
  GetVaultNotificationsCommandInput,
  GetVaultNotificationsCommandOutput,
} from "./commands/GetVaultNotificationsCommand";
import { InitiateJobCommandInput, InitiateJobCommandOutput } from "./commands/InitiateJobCommand";
import {
  InitiateMultipartUploadCommandInput,
  InitiateMultipartUploadCommandOutput,
} from "./commands/InitiateMultipartUploadCommand";
import { InitiateVaultLockCommandInput, InitiateVaultLockCommandOutput } from "./commands/InitiateVaultLockCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import { ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand";
import {
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput,
} from "./commands/ListProvisionedCapacityCommand";
import { ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput } from "./commands/ListTagsForVaultCommand";
import { ListVaultsCommandInput, ListVaultsCommandOutput } from "./commands/ListVaultsCommand";
import {
  PurchaseProvisionedCapacityCommandInput,
  PurchaseProvisionedCapacityCommandOutput,
} from "./commands/PurchaseProvisionedCapacityCommand";
import {
  RemoveTagsFromVaultCommandInput,
  RemoveTagsFromVaultCommandOutput,
} from "./commands/RemoveTagsFromVaultCommand";
import {
  SetDataRetrievalPolicyCommandInput,
  SetDataRetrievalPolicyCommandOutput,
} from "./commands/SetDataRetrievalPolicyCommand";
import {
  SetVaultAccessPolicyCommandInput,
  SetVaultAccessPolicyCommandOutput,
} from "./commands/SetVaultAccessPolicyCommand";
import {
  SetVaultNotificationsCommandInput,
  SetVaultNotificationsCommandOutput,
} from "./commands/SetVaultNotificationsCommand";
import { UploadArchiveCommandInput, UploadArchiveCommandOutput } from "./commands/UploadArchiveCommand";
import {
  UploadMultipartPartCommandInput,
  UploadMultipartPartCommandOutput,
} from "./commands/UploadMultipartPartCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import { getGlacierPlugin } from "@aws-sdk/middleware-sdk-glacier";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest as __HttpRequest,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Function that returns body checksums.
   * @internal
   */
  bodyChecksumGenerator?: (
    request: __HttpRequest,
    options: { sha256: __HashConstructor; utf8Decoder: __Decoder }
  ) => Promise<[string, string]>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type GlacierClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of GlacierClient class constructor that set the region, credentials and other options.
 */
export interface GlacierClientConfig extends GlacierClientConfigType {}

type GlacierClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of GlacierClient class. This is resolved and normalized from the {@link GlacierClientConfig | constructor configuration interface}.
 */
export interface GlacierClientResolvedConfig extends GlacierClientResolvedConfigType {}

/**
 * <p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p>
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
 *          reading the following sections in the <i>Amazon S3 Glacier Developer
 *          Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
 *                   Amazon S3 Glacier</a> - This section of the Developer Guide describes the
 *                underlying data model, the operations it supports, and the AWS SDKs that you can use
 *                to interact with the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
 *                   with Amazon S3 Glacier</a> - The Getting Started section walks you through the
 *                process of creating a vault, uploading archives, creating jobs to download archives,
 *                retrieving the job output, and deleting archives.</p>
 *             </li>
 *          </ul>
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

  constructor(configuration: GlacierClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getGlacierPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
