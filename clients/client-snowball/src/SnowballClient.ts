import { CancelClusterCommandInput, CancelClusterCommandOutput } from "./commands/CancelClusterCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateAddressCommandInput, CreateAddressCommandOutput } from "./commands/CreateAddressCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateLongTermPricingCommandInput,
  CreateLongTermPricingCommandOutput,
} from "./commands/CreateLongTermPricingCommand";
import {
  CreateReturnShippingLabelCommandInput,
  CreateReturnShippingLabelCommandOutput,
} from "./commands/CreateReturnShippingLabelCommand";
import { DescribeAddressCommandInput, DescribeAddressCommandOutput } from "./commands/DescribeAddressCommand";
import { DescribeAddressesCommandInput, DescribeAddressesCommandOutput } from "./commands/DescribeAddressesCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeReturnShippingLabelCommandInput,
  DescribeReturnShippingLabelCommandOutput,
} from "./commands/DescribeReturnShippingLabelCommand";
import { GetJobManifestCommandInput, GetJobManifestCommandOutput } from "./commands/GetJobManifestCommand";
import { GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput } from "./commands/GetJobUnlockCodeCommand";
import { GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput } from "./commands/GetSnowballUsageCommand";
import { GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput } from "./commands/GetSoftwareUpdatesCommand";
import { ListClusterJobsCommandInput, ListClusterJobsCommandOutput } from "./commands/ListClusterJobsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import {
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
} from "./commands/ListCompatibleImagesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListLongTermPricingCommandInput,
  ListLongTermPricingCommandOutput,
} from "./commands/ListLongTermPricingCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import {
  UpdateJobShipmentStateCommandInput,
  UpdateJobShipmentStateCommandOutput,
} from "./commands/UpdateJobShipmentStateCommand";
import {
  UpdateLongTermPricingCommandInput,
  UpdateLongTermPricingCommandOutput,
} from "./commands/UpdateLongTermPricingCommand";
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
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CancelClusterCommandInput
  | CancelJobCommandInput
  | CreateAddressCommandInput
  | CreateClusterCommandInput
  | CreateJobCommandInput
  | CreateLongTermPricingCommandInput
  | CreateReturnShippingLabelCommandInput
  | DescribeAddressCommandInput
  | DescribeAddressesCommandInput
  | DescribeClusterCommandInput
  | DescribeJobCommandInput
  | DescribeReturnShippingLabelCommandInput
  | GetJobManifestCommandInput
  | GetJobUnlockCodeCommandInput
  | GetSnowballUsageCommandInput
  | GetSoftwareUpdatesCommandInput
  | ListClusterJobsCommandInput
  | ListClustersCommandInput
  | ListCompatibleImagesCommandInput
  | ListJobsCommandInput
  | ListLongTermPricingCommandInput
  | UpdateClusterCommandInput
  | UpdateJobCommandInput
  | UpdateJobShipmentStateCommandInput
  | UpdateLongTermPricingCommandInput;

export type ServiceOutputTypes =
  | CancelClusterCommandOutput
  | CancelJobCommandOutput
  | CreateAddressCommandOutput
  | CreateClusterCommandOutput
  | CreateJobCommandOutput
  | CreateLongTermPricingCommandOutput
  | CreateReturnShippingLabelCommandOutput
  | DescribeAddressCommandOutput
  | DescribeAddressesCommandOutput
  | DescribeClusterCommandOutput
  | DescribeJobCommandOutput
  | DescribeReturnShippingLabelCommandOutput
  | GetJobManifestCommandOutput
  | GetJobUnlockCodeCommandOutput
  | GetSnowballUsageCommandOutput
  | GetSoftwareUpdatesCommandOutput
  | ListClusterJobsCommandOutput
  | ListClustersCommandOutput
  | ListCompatibleImagesCommandOutput
  | ListJobsCommandOutput
  | ListLongTermPricingCommandOutput
  | UpdateClusterCommandOutput
  | UpdateJobCommandOutput
  | UpdateJobShipmentStateCommandOutput
  | UpdateLongTermPricingCommandOutput;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type SnowballClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SnowballClient class constructor that set the region, credentials and other options.
 */
export interface SnowballClientConfig extends SnowballClientConfigType {}

type SnowballClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SnowballClient class. This is resolved and normalized from the {@link SnowballClientConfig | constructor configuration interface}.
 */
export interface SnowballClientResolvedConfig extends SnowballClientResolvedConfigType {}

/**
 * <p>AWS Snow Family is a petabyte-scale data transport solution that uses secure devices to
 *       transfer large amounts of data between your on-premises data centers and Amazon Simple Storage
 *       Service (Amazon S3). The Snow commands described here provide access to the same
 *       functionality that is available in the AWS Snow Family Management Console, which enables you to
 *       create and manage jobs for a Snow device. To transfer data locally with a Snow device, you'll
 *       need to use the Snowball Edge client or the Amazon S3 API Interface for Snowball or AWS OpsHub for Snow Family. For more
 *       information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.</p>
 */
export class SnowballClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowballClientResolvedConfig
> {
  /**
   * The resolved configuration of SnowballClient class. This is resolved and normalized from the {@link SnowballClientConfig | constructor configuration interface}.
   */
  readonly config: SnowballClientResolvedConfig;

  constructor(configuration: SnowballClientConfig) {
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
