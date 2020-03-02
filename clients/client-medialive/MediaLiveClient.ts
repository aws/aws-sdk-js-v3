import {
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput
} from "./commands/BatchUpdateScheduleCommand";
import {
  CreateChannelCommandInput,
  CreateChannelCommandOutput
} from "./commands/CreateChannelCommand";
import {
  CreateInputCommandInput,
  CreateInputCommandOutput
} from "./commands/CreateInputCommand";
import {
  CreateInputSecurityGroupCommandInput,
  CreateInputSecurityGroupCommandOutput
} from "./commands/CreateInputSecurityGroupCommand";
import {
  CreateMultiplexCommandInput,
  CreateMultiplexCommandOutput
} from "./commands/CreateMultiplexCommand";
import {
  CreateMultiplexProgramCommandInput,
  CreateMultiplexProgramCommandOutput
} from "./commands/CreateMultiplexProgramCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "./commands/CreateTagsCommand";
import {
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput
} from "./commands/DeleteChannelCommand";
import {
  DeleteInputCommandInput,
  DeleteInputCommandOutput
} from "./commands/DeleteInputCommand";
import {
  DeleteInputSecurityGroupCommandInput,
  DeleteInputSecurityGroupCommandOutput
} from "./commands/DeleteInputSecurityGroupCommand";
import {
  DeleteMultiplexCommandInput,
  DeleteMultiplexCommandOutput
} from "./commands/DeleteMultiplexCommand";
import {
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput
} from "./commands/DeleteMultiplexProgramCommand";
import {
  DeleteReservationCommandInput,
  DeleteReservationCommandOutput
} from "./commands/DeleteReservationCommand";
import {
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput
} from "./commands/DeleteScheduleCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "./commands/DeleteTagsCommand";
import {
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput
} from "./commands/DescribeChannelCommand";
import {
  DescribeInputCommandInput,
  DescribeInputCommandOutput
} from "./commands/DescribeInputCommand";
import {
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput
} from "./commands/DescribeInputSecurityGroupCommand";
import {
  DescribeMultiplexCommandInput,
  DescribeMultiplexCommandOutput
} from "./commands/DescribeMultiplexCommand";
import {
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput
} from "./commands/DescribeMultiplexProgramCommand";
import {
  DescribeOfferingCommandInput,
  DescribeOfferingCommandOutput
} from "./commands/DescribeOfferingCommand";
import {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput
} from "./commands/DescribeReservationCommand";
import {
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput
} from "./commands/DescribeScheduleCommand";
import {
  ListChannelsCommandInput,
  ListChannelsCommandOutput
} from "./commands/ListChannelsCommand";
import {
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput
} from "./commands/ListInputSecurityGroupsCommand";
import {
  ListInputsCommandInput,
  ListInputsCommandOutput
} from "./commands/ListInputsCommand";
import {
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput
} from "./commands/ListMultiplexProgramsCommand";
import {
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput
} from "./commands/ListMultiplexesCommand";
import {
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput
} from "./commands/ListOfferingsCommand";
import {
  ListReservationsCommandInput,
  ListReservationsCommandOutput
} from "./commands/ListReservationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput
} from "./commands/PurchaseOfferingCommand";
import {
  StartChannelCommandInput,
  StartChannelCommandOutput
} from "./commands/StartChannelCommand";
import {
  StartMultiplexCommandInput,
  StartMultiplexCommandOutput
} from "./commands/StartMultiplexCommand";
import {
  StopChannelCommandInput,
  StopChannelCommandOutput
} from "./commands/StopChannelCommand";
import {
  StopMultiplexCommandInput,
  StopMultiplexCommandOutput
} from "./commands/StopMultiplexCommand";
import {
  UpdateChannelClassCommandInput,
  UpdateChannelClassCommandOutput
} from "./commands/UpdateChannelClassCommand";
import {
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput
} from "./commands/UpdateChannelCommand";
import {
  UpdateInputCommandInput,
  UpdateInputCommandOutput
} from "./commands/UpdateInputCommand";
import {
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput
} from "./commands/UpdateInputSecurityGroupCommand";
import {
  UpdateMultiplexCommandInput,
  UpdateMultiplexCommandOutput
} from "./commands/UpdateMultiplexCommand";
import {
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput
} from "./commands/UpdateMultiplexProgramCommand";
import {
  UpdateReservationCommandInput,
  UpdateReservationCommandOutput
} from "./commands/UpdateReservationCommand";
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
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchUpdateScheduleCommandInput
  | CreateChannelCommandInput
  | CreateInputCommandInput
  | CreateInputSecurityGroupCommandInput
  | CreateMultiplexCommandInput
  | CreateMultiplexProgramCommandInput
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
  | DescribeInputSecurityGroupCommandInput
  | DescribeMultiplexCommandInput
  | DescribeMultiplexProgramCommandInput
  | DescribeOfferingCommandInput
  | DescribeReservationCommandInput
  | DescribeScheduleCommandInput
  | ListChannelsCommandInput
  | ListInputSecurityGroupsCommandInput
  | ListInputsCommandInput
  | ListMultiplexProgramsCommandInput
  | ListMultiplexesCommandInput
  | ListOfferingsCommandInput
  | ListReservationsCommandInput
  | ListTagsForResourceCommandInput
  | PurchaseOfferingCommandInput
  | StartChannelCommandInput
  | StartMultiplexCommandInput
  | StopChannelCommandInput
  | StopMultiplexCommandInput
  | UpdateChannelClassCommandInput
  | UpdateChannelCommandInput
  | UpdateInputCommandInput
  | UpdateInputSecurityGroupCommandInput
  | UpdateMultiplexCommandInput
  | UpdateMultiplexProgramCommandInput
  | UpdateReservationCommandInput;

export type ServiceOutputTypes =
  | BatchUpdateScheduleCommandOutput
  | CreateChannelCommandOutput
  | CreateInputCommandOutput
  | CreateInputSecurityGroupCommandOutput
  | CreateMultiplexCommandOutput
  | CreateMultiplexProgramCommandOutput
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
  | DescribeInputSecurityGroupCommandOutput
  | DescribeMultiplexCommandOutput
  | DescribeMultiplexProgramCommandOutput
  | DescribeOfferingCommandOutput
  | DescribeReservationCommandOutput
  | DescribeScheduleCommandOutput
  | ListChannelsCommandOutput
  | ListInputSecurityGroupsCommandOutput
  | ListInputsCommandOutput
  | ListMultiplexProgramsCommandOutput
  | ListMultiplexesCommandOutput
  | ListOfferingsCommandOutput
  | ListReservationsCommandOutput
  | ListTagsForResourceCommandOutput
  | PurchaseOfferingCommandOutput
  | StartChannelCommandOutput
  | StartMultiplexCommandOutput
  | StopChannelCommandOutput
  | StopMultiplexCommandOutput
  | UpdateChannelClassCommandOutput
  | UpdateChannelCommandOutput
  | UpdateInputCommandOutput
  | UpdateInputSecurityGroupCommandOutput
  | UpdateMultiplexCommandOutput
  | UpdateMultiplexProgramCommandOutput
  | UpdateReservationCommandOutput;

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

export type MediaLiveClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type MediaLiveClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * API for AWS Elemental MediaLive
 */
export class MediaLiveClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaLiveClientResolvedConfig
> {
  readonly config: MediaLiveClientResolvedConfig;

  constructor(configuration: MediaLiveClientConfig) {
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
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
