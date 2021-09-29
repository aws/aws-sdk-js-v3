import {
  AcceptInputDeviceTransferCommandInput,
  AcceptInputDeviceTransferCommandOutput,
} from "./commands/AcceptInputDeviceTransferCommand";
import { BatchDeleteCommandInput, BatchDeleteCommandOutput } from "./commands/BatchDeleteCommand";
import { BatchStartCommandInput, BatchStartCommandOutput } from "./commands/BatchStartCommand";
import { BatchStopCommandInput, BatchStopCommandOutput } from "./commands/BatchStopCommand";
import {
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput,
} from "./commands/BatchUpdateScheduleCommand";
import {
  CancelInputDeviceTransferCommandInput,
  CancelInputDeviceTransferCommandOutput,
} from "./commands/CancelInputDeviceTransferCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateInputCommandInput, CreateInputCommandOutput } from "./commands/CreateInputCommand";
import {
  CreateInputSecurityGroupCommandInput,
  CreateInputSecurityGroupCommandOutput,
} from "./commands/CreateInputSecurityGroupCommand";
import { CreateMultiplexCommandInput, CreateMultiplexCommandOutput } from "./commands/CreateMultiplexCommand";
import {
  CreateMultiplexProgramCommandInput,
  CreateMultiplexProgramCommandOutput,
} from "./commands/CreateMultiplexProgramCommand";
import { CreatePartnerInputCommandInput, CreatePartnerInputCommandOutput } from "./commands/CreatePartnerInputCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteInputCommandInput, DeleteInputCommandOutput } from "./commands/DeleteInputCommand";
import {
  DeleteInputSecurityGroupCommandInput,
  DeleteInputSecurityGroupCommandOutput,
} from "./commands/DeleteInputSecurityGroupCommand";
import { DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput } from "./commands/DeleteMultiplexCommand";
import {
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput,
} from "./commands/DeleteMultiplexProgramCommand";
import { DeleteReservationCommandInput, DeleteReservationCommandOutput } from "./commands/DeleteReservationCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeInputCommandInput, DescribeInputCommandOutput } from "./commands/DescribeInputCommand";
import {
  DescribeInputDeviceCommandInput,
  DescribeInputDeviceCommandOutput,
} from "./commands/DescribeInputDeviceCommand";
import {
  DescribeInputDeviceThumbnailCommandInput,
  DescribeInputDeviceThumbnailCommandOutput,
} from "./commands/DescribeInputDeviceThumbnailCommand";
import {
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput,
} from "./commands/DescribeInputSecurityGroupCommand";
import { DescribeMultiplexCommandInput, DescribeMultiplexCommandOutput } from "./commands/DescribeMultiplexCommand";
import {
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput,
} from "./commands/DescribeMultiplexProgramCommand";
import { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "./commands/DescribeOfferingCommand";
import {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "./commands/DescribeReservationCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
} from "./commands/ListInputDeviceTransfersCommand";
import { ListInputDevicesCommandInput, ListInputDevicesCommandOutput } from "./commands/ListInputDevicesCommand";
import {
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
} from "./commands/ListInputSecurityGroupsCommand";
import { ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import {
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
} from "./commands/ListMultiplexProgramsCommand";
import { ListMultiplexesCommandInput, ListMultiplexesCommandOutput } from "./commands/ListMultiplexesCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import {
  RejectInputDeviceTransferCommandInput,
  RejectInputDeviceTransferCommandOutput,
} from "./commands/RejectInputDeviceTransferCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand";
import { StartMultiplexCommandInput, StartMultiplexCommandOutput } from "./commands/StartMultiplexCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import { StopMultiplexCommandInput, StopMultiplexCommandOutput } from "./commands/StopMultiplexCommand";
import {
  TransferInputDeviceCommandInput,
  TransferInputDeviceCommandOutput,
} from "./commands/TransferInputDeviceCommand";
import { UpdateChannelClassCommandInput, UpdateChannelClassCommandOutput } from "./commands/UpdateChannelClassCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateInputCommandInput, UpdateInputCommandOutput } from "./commands/UpdateInputCommand";
import { UpdateInputDeviceCommandInput, UpdateInputDeviceCommandOutput } from "./commands/UpdateInputDeviceCommand";
import {
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput,
} from "./commands/UpdateInputSecurityGroupCommand";
import { UpdateMultiplexCommandInput, UpdateMultiplexCommandOutput } from "./commands/UpdateMultiplexCommand";
import {
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput,
} from "./commands/UpdateMultiplexProgramCommand";
import { UpdateReservationCommandInput, UpdateReservationCommandOutput } from "./commands/UpdateReservationCommand";
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
  | AcceptInputDeviceTransferCommandInput
  | BatchDeleteCommandInput
  | BatchStartCommandInput
  | BatchStopCommandInput
  | BatchUpdateScheduleCommandInput
  | CancelInputDeviceTransferCommandInput
  | CreateChannelCommandInput
  | CreateInputCommandInput
  | CreateInputSecurityGroupCommandInput
  | CreateMultiplexCommandInput
  | CreateMultiplexProgramCommandInput
  | CreatePartnerInputCommandInput
  | CreateTagsCommandInput
  | DeleteChannelCommandInput
  | DeleteInputCommandInput
  | DeleteInputSecurityGroupCommandInput
  | DeleteMultiplexCommandInput
  | DeleteMultiplexProgramCommandInput
  | DeleteReservationCommandInput
  | DeleteScheduleCommandInput
  | DeleteTagsCommandInput
  | DescribeChannelCommandInput
  | DescribeInputCommandInput
  | DescribeInputDeviceCommandInput
  | DescribeInputDeviceThumbnailCommandInput
  | DescribeInputSecurityGroupCommandInput
  | DescribeMultiplexCommandInput
  | DescribeMultiplexProgramCommandInput
  | DescribeOfferingCommandInput
  | DescribeReservationCommandInput
  | DescribeScheduleCommandInput
  | ListChannelsCommandInput
  | ListInputDeviceTransfersCommandInput
  | ListInputDevicesCommandInput
  | ListInputSecurityGroupsCommandInput
  | ListInputsCommandInput
  | ListMultiplexProgramsCommandInput
  | ListMultiplexesCommandInput
  | ListOfferingsCommandInput
  | ListReservationsCommandInput
  | ListTagsForResourceCommandInput
  | PurchaseOfferingCommandInput
  | RejectInputDeviceTransferCommandInput
  | StartChannelCommandInput
  | StartMultiplexCommandInput
  | StopChannelCommandInput
  | StopMultiplexCommandInput
  | TransferInputDeviceCommandInput
  | UpdateChannelClassCommandInput
  | UpdateChannelCommandInput
  | UpdateInputCommandInput
  | UpdateInputDeviceCommandInput
  | UpdateInputSecurityGroupCommandInput
  | UpdateMultiplexCommandInput
  | UpdateMultiplexProgramCommandInput
  | UpdateReservationCommandInput;

export type ServiceOutputTypes =
  | AcceptInputDeviceTransferCommandOutput
  | BatchDeleteCommandOutput
  | BatchStartCommandOutput
  | BatchStopCommandOutput
  | BatchUpdateScheduleCommandOutput
  | CancelInputDeviceTransferCommandOutput
  | CreateChannelCommandOutput
  | CreateInputCommandOutput
  | CreateInputSecurityGroupCommandOutput
  | CreateMultiplexCommandOutput
  | CreateMultiplexProgramCommandOutput
  | CreatePartnerInputCommandOutput
  | CreateTagsCommandOutput
  | DeleteChannelCommandOutput
  | DeleteInputCommandOutput
  | DeleteInputSecurityGroupCommandOutput
  | DeleteMultiplexCommandOutput
  | DeleteMultiplexProgramCommandOutput
  | DeleteReservationCommandOutput
  | DeleteScheduleCommandOutput
  | DeleteTagsCommandOutput
  | DescribeChannelCommandOutput
  | DescribeInputCommandOutput
  | DescribeInputDeviceCommandOutput
  | DescribeInputDeviceThumbnailCommandOutput
  | DescribeInputSecurityGroupCommandOutput
  | DescribeMultiplexCommandOutput
  | DescribeMultiplexProgramCommandOutput
  | DescribeOfferingCommandOutput
  | DescribeReservationCommandOutput
  | DescribeScheduleCommandOutput
  | ListChannelsCommandOutput
  | ListInputDeviceTransfersCommandOutput
  | ListInputDevicesCommandOutput
  | ListInputSecurityGroupsCommandOutput
  | ListInputsCommandOutput
  | ListMultiplexProgramsCommandOutput
  | ListMultiplexesCommandOutput
  | ListOfferingsCommandOutput
  | ListReservationsCommandOutput
  | ListTagsForResourceCommandOutput
  | PurchaseOfferingCommandOutput
  | RejectInputDeviceTransferCommandOutput
  | StartChannelCommandOutput
  | StartMultiplexCommandOutput
  | StopChannelCommandOutput
  | StopMultiplexCommandOutput
  | TransferInputDeviceCommandOutput
  | UpdateChannelClassCommandOutput
  | UpdateChannelCommandOutput
  | UpdateInputCommandOutput
  | UpdateInputDeviceCommandOutput
  | UpdateInputSecurityGroupCommandOutput
  | UpdateMultiplexCommandOutput
  | UpdateMultiplexProgramCommandOutput
  | UpdateReservationCommandOutput;

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

type MediaLiveClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of MediaLiveClient class constructor that set the region, credentials and other options.
 */
export interface MediaLiveClientConfig extends MediaLiveClientConfigType {}

type MediaLiveClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of MediaLiveClient class. This is resolved and normalized from the {@link MediaLiveClientConfig | constructor configuration interface}.
 */
export interface MediaLiveClientResolvedConfig extends MediaLiveClientResolvedConfigType {}

/**
 * API for AWS Elemental MediaLive
 */
export class MediaLiveClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaLiveClientResolvedConfig
> {
  /**
   * The resolved configuration of MediaLiveClient class. This is resolved and normalized from the {@link MediaLiveClientConfig | constructor configuration interface}.
   */
  readonly config: MediaLiveClientResolvedConfig;

  constructor(configuration: MediaLiveClientConfig) {
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
