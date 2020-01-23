import {
  AbortMultipartUploadInput,
  AbortVaultLockInput,
  AddTagsToVaultInput,
  ArchiveCreationOutput,
  CompleteMultipartUploadInput,
  CompleteVaultLockInput,
  CreateVaultInput,
  CreateVaultOutput,
  DeleteArchiveInput,
  DeleteVaultAccessPolicyInput,
  DeleteVaultInput,
  DeleteVaultNotificationsInput,
  DescribeJobInput,
  DescribeVaultInput,
  DescribeVaultOutput,
  GetDataRetrievalPolicyInput,
  GetDataRetrievalPolicyOutput,
  GetJobOutputInput,
  GetJobOutputOutput,
  GetVaultAccessPolicyInput,
  GetVaultAccessPolicyOutput,
  GetVaultLockInput,
  GetVaultLockOutput,
  GetVaultNotificationsInput,
  GetVaultNotificationsOutput,
  GlacierJobDescription,
  InitiateJobInput,
  InitiateJobOutput,
  InitiateMultipartUploadInput,
  InitiateMultipartUploadOutput,
  InitiateVaultLockInput,
  InitiateVaultLockOutput,
  ListJobsInput,
  ListJobsOutput,
  ListMultipartUploadsInput,
  ListMultipartUploadsOutput,
  ListPartsInput,
  ListPartsOutput,
  ListProvisionedCapacityInput,
  ListProvisionedCapacityOutput,
  ListTagsForVaultInput,
  ListTagsForVaultOutput,
  ListVaultsInput,
  ListVaultsOutput,
  PurchaseProvisionedCapacityInput,
  PurchaseProvisionedCapacityOutput,
  RemoveTagsFromVaultInput,
  SetDataRetrievalPolicyInput,
  SetVaultAccessPolicyInput,
  SetVaultNotificationsInput,
  UploadArchiveInput,
  UploadMultipartPartInput,
  UploadMultipartPartOutput
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import { getGlacierPlugin } from "@aws-sdk/middleware-sdk-glacier";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AbortMultipartUploadInput
  | AbortVaultLockInput
  | AddTagsToVaultInput
  | CompleteMultipartUploadInput
  | CompleteVaultLockInput
  | CreateVaultInput
  | DeleteArchiveInput
  | DeleteVaultAccessPolicyInput
  | DeleteVaultInput
  | DeleteVaultNotificationsInput
  | DescribeJobInput
  | DescribeVaultInput
  | GetDataRetrievalPolicyInput
  | GetJobOutputInput
  | GetVaultAccessPolicyInput
  | GetVaultLockInput
  | GetVaultNotificationsInput
  | InitiateJobInput
  | InitiateMultipartUploadInput
  | InitiateVaultLockInput
  | ListJobsInput
  | ListMultipartUploadsInput
  | ListPartsInput
  | ListProvisionedCapacityInput
  | ListTagsForVaultInput
  | ListVaultsInput
  | PurchaseProvisionedCapacityInput
  | RemoveTagsFromVaultInput
  | SetDataRetrievalPolicyInput
  | SetVaultAccessPolicyInput
  | SetVaultNotificationsInput
  | UploadArchiveInput
  | UploadMultipartPartInput;

export type ServiceOutputTypes =
  | __MetadataBearer
  | ArchiveCreationOutput
  | ArchiveCreationOutput
  | CreateVaultOutput
  | DescribeVaultOutput
  | GetDataRetrievalPolicyOutput
  | GetJobOutputOutput
  | GetVaultAccessPolicyOutput
  | GetVaultLockOutput
  | GetVaultNotificationsOutput
  | GlacierJobDescription
  | InitiateJobOutput
  | InitiateMultipartUploadOutput
  | InitiateVaultLockOutput
  | ListJobsOutput
  | ListMultipartUploadsOutput
  | ListPartsOutput
  | ListProvisionedCapacityOutput
  | ListTagsForVaultOutput
  | ListVaultsOutput
  | PurchaseProvisionedCapacityOutput
  | UploadMultipartPartOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type GlacierClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type GlacierClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *          <p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p>
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
 *
 */
export class GlacierClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlacierClientResolvedConfig
> {
  readonly config: GlacierClientResolvedConfig;

  constructor(configuration: GlacierClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getGlacierPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
