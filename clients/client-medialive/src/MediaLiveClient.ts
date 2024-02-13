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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

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
import { ClaimDeviceCommandInput, ClaimDeviceCommandOutput } from "./commands/ClaimDeviceCommand";
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
import {
  DescribeAccountConfigurationCommandInput,
  DescribeAccountConfigurationCommandOutput,
} from "./commands/DescribeAccountConfigurationCommand";
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
import { DescribeThumbnailsCommandInput, DescribeThumbnailsCommandOutput } from "./commands/DescribeThumbnailsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListInputDevicesCommandInput, ListInputDevicesCommandOutput } from "./commands/ListInputDevicesCommand";
import {
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
} from "./commands/ListInputDeviceTransfersCommand";
import { ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import {
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
} from "./commands/ListInputSecurityGroupsCommand";
import { ListMultiplexesCommandInput, ListMultiplexesCommandOutput } from "./commands/ListMultiplexesCommand";
import {
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
} from "./commands/ListMultiplexProgramsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import { RebootInputDeviceCommandInput, RebootInputDeviceCommandOutput } from "./commands/RebootInputDeviceCommand";
import {
  RejectInputDeviceTransferCommandInput,
  RejectInputDeviceTransferCommandOutput,
} from "./commands/RejectInputDeviceTransferCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand";
import { StartInputDeviceCommandInput, StartInputDeviceCommandOutput } from "./commands/StartInputDeviceCommand";
import {
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
} from "./commands/StartInputDeviceMaintenanceWindowCommand";
import { StartMultiplexCommandInput, StartMultiplexCommandOutput } from "./commands/StartMultiplexCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import { StopInputDeviceCommandInput, StopInputDeviceCommandOutput } from "./commands/StopInputDeviceCommand";
import { StopMultiplexCommandInput, StopMultiplexCommandOutput } from "./commands/StopMultiplexCommand";
import {
  TransferInputDeviceCommandInput,
  TransferInputDeviceCommandOutput,
} from "./commands/TransferInputDeviceCommand";
import {
  UpdateAccountConfigurationCommandInput,
  UpdateAccountConfigurationCommandOutput,
} from "./commands/UpdateAccountConfigurationCommand";
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
  | AcceptInputDeviceTransferCommandInput
  | BatchDeleteCommandInput
  | BatchStartCommandInput
  | BatchStopCommandInput
  | BatchUpdateScheduleCommandInput
  | CancelInputDeviceTransferCommandInput
  | ClaimDeviceCommandInput
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
  | DescribeAccountConfigurationCommandInput
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
  | DescribeThumbnailsCommandInput
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
  | RebootInputDeviceCommandInput
  | RejectInputDeviceTransferCommandInput
  | StartChannelCommandInput
  | StartInputDeviceCommandInput
  | StartInputDeviceMaintenanceWindowCommandInput
  | StartMultiplexCommandInput
  | StopChannelCommandInput
  | StopInputDeviceCommandInput
  | StopMultiplexCommandInput
  | TransferInputDeviceCommandInput
  | UpdateAccountConfigurationCommandInput
  | UpdateChannelClassCommandInput
  | UpdateChannelCommandInput
  | UpdateInputCommandInput
  | UpdateInputDeviceCommandInput
  | UpdateInputSecurityGroupCommandInput
  | UpdateMultiplexCommandInput
  | UpdateMultiplexProgramCommandInput
  | UpdateReservationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptInputDeviceTransferCommandOutput
  | BatchDeleteCommandOutput
  | BatchStartCommandOutput
  | BatchStopCommandOutput
  | BatchUpdateScheduleCommandOutput
  | CancelInputDeviceTransferCommandOutput
  | ClaimDeviceCommandOutput
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
  | DescribeAccountConfigurationCommandOutput
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
  | DescribeThumbnailsCommandOutput
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
  | RebootInputDeviceCommandOutput
  | RejectInputDeviceTransferCommandOutput
  | StartChannelCommandOutput
  | StartInputDeviceCommandOutput
  | StartInputDeviceMaintenanceWindowCommandOutput
  | StartMultiplexCommandOutput
  | StopChannelCommandOutput
  | StopInputDeviceCommandOutput
  | StopMultiplexCommandOutput
  | TransferInputDeviceCommandOutput
  | UpdateAccountConfigurationCommandOutput
  | UpdateChannelClassCommandOutput
  | UpdateChannelCommandOutput
  | UpdateInputCommandOutput
  | UpdateInputDeviceCommandOutput
  | UpdateInputSecurityGroupCommandOutput
  | UpdateMultiplexCommandOutput
  | UpdateMultiplexProgramCommandOutput
  | UpdateReservationCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
export type MediaLiveClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of MediaLiveClient class constructor that set the region, credentials and other options.
 */
export interface MediaLiveClientConfig extends MediaLiveClientConfigType {}

/**
 * @public
 */
export type MediaLiveClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of MediaLiveClient class. This is resolved and normalized from the {@link MediaLiveClientConfig | constructor configuration interface}.
 */
export interface MediaLiveClientResolvedConfig extends MediaLiveClientResolvedConfigType {}

/**
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<MediaLiveClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
