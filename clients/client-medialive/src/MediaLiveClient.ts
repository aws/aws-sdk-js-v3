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
  defaultMediaLiveHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
import {
  CreateChannelPlacementGroupCommandInput,
  CreateChannelPlacementGroupCommandOutput,
} from "./commands/CreateChannelPlacementGroupCommand";
import {
  CreateCloudWatchAlarmTemplateCommandInput,
  CreateCloudWatchAlarmTemplateCommandOutput,
} from "./commands/CreateCloudWatchAlarmTemplateCommand";
import {
  CreateCloudWatchAlarmTemplateGroupCommandInput,
  CreateCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/CreateCloudWatchAlarmTemplateGroupCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import {
  CreateEventBridgeRuleTemplateCommandInput,
  CreateEventBridgeRuleTemplateCommandOutput,
} from "./commands/CreateEventBridgeRuleTemplateCommand";
import {
  CreateEventBridgeRuleTemplateGroupCommandInput,
  CreateEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/CreateEventBridgeRuleTemplateGroupCommand";
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
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "./commands/CreateNetworkCommand";
import { CreateNodeCommandInput, CreateNodeCommandOutput } from "./commands/CreateNodeCommand";
import {
  CreateNodeRegistrationScriptCommandInput,
  CreateNodeRegistrationScriptCommandOutput,
} from "./commands/CreateNodeRegistrationScriptCommand";
import { CreatePartnerInputCommandInput, CreatePartnerInputCommandOutput } from "./commands/CreatePartnerInputCommand";
import { CreateSdiSourceCommandInput, CreateSdiSourceCommandOutput } from "./commands/CreateSdiSourceCommand";
import { CreateSignalMapCommandInput, CreateSignalMapCommandOutput } from "./commands/CreateSignalMapCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import {
  DeleteChannelPlacementGroupCommandInput,
  DeleteChannelPlacementGroupCommandOutput,
} from "./commands/DeleteChannelPlacementGroupCommand";
import {
  DeleteCloudWatchAlarmTemplateCommandInput,
  DeleteCloudWatchAlarmTemplateCommandOutput,
} from "./commands/DeleteCloudWatchAlarmTemplateCommand";
import {
  DeleteCloudWatchAlarmTemplateGroupCommandInput,
  DeleteCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/DeleteCloudWatchAlarmTemplateGroupCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import {
  DeleteEventBridgeRuleTemplateCommandInput,
  DeleteEventBridgeRuleTemplateCommandOutput,
} from "./commands/DeleteEventBridgeRuleTemplateCommand";
import {
  DeleteEventBridgeRuleTemplateGroupCommandInput,
  DeleteEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/DeleteEventBridgeRuleTemplateGroupCommand";
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
import { DeleteNetworkCommandInput, DeleteNetworkCommandOutput } from "./commands/DeleteNetworkCommand";
import { DeleteNodeCommandInput, DeleteNodeCommandOutput } from "./commands/DeleteNodeCommand";
import { DeleteReservationCommandInput, DeleteReservationCommandOutput } from "./commands/DeleteReservationCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand";
import { DeleteSdiSourceCommandInput, DeleteSdiSourceCommandOutput } from "./commands/DeleteSdiSourceCommand";
import { DeleteSignalMapCommandInput, DeleteSignalMapCommandOutput } from "./commands/DeleteSignalMapCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeAccountConfigurationCommandInput,
  DescribeAccountConfigurationCommandOutput,
} from "./commands/DescribeAccountConfigurationCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import {
  DescribeChannelPlacementGroupCommandInput,
  DescribeChannelPlacementGroupCommandOutput,
} from "./commands/DescribeChannelPlacementGroupCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
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
import { DescribeNetworkCommandInput, DescribeNetworkCommandOutput } from "./commands/DescribeNetworkCommand";
import { DescribeNodeCommandInput, DescribeNodeCommandOutput } from "./commands/DescribeNodeCommand";
import { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "./commands/DescribeOfferingCommand";
import {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "./commands/DescribeReservationCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand";
import { DescribeSdiSourceCommandInput, DescribeSdiSourceCommandOutput } from "./commands/DescribeSdiSourceCommand";
import { DescribeThumbnailsCommandInput, DescribeThumbnailsCommandOutput } from "./commands/DescribeThumbnailsCommand";
import {
  GetCloudWatchAlarmTemplateCommandInput,
  GetCloudWatchAlarmTemplateCommandOutput,
} from "./commands/GetCloudWatchAlarmTemplateCommand";
import {
  GetCloudWatchAlarmTemplateGroupCommandInput,
  GetCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/GetCloudWatchAlarmTemplateGroupCommand";
import {
  GetEventBridgeRuleTemplateCommandInput,
  GetEventBridgeRuleTemplateCommandOutput,
} from "./commands/GetEventBridgeRuleTemplateCommand";
import {
  GetEventBridgeRuleTemplateGroupCommandInput,
  GetEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/GetEventBridgeRuleTemplateGroupCommand";
import { GetSignalMapCommandInput, GetSignalMapCommandOutput } from "./commands/GetSignalMapCommand";
import {
  ListChannelPlacementGroupsCommandInput,
  ListChannelPlacementGroupsCommandOutput,
} from "./commands/ListChannelPlacementGroupsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListCloudWatchAlarmTemplateGroupsCommandInput,
  ListCloudWatchAlarmTemplateGroupsCommandOutput,
} from "./commands/ListCloudWatchAlarmTemplateGroupsCommand";
import {
  ListCloudWatchAlarmTemplatesCommandInput,
  ListCloudWatchAlarmTemplatesCommandOutput,
} from "./commands/ListCloudWatchAlarmTemplatesCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import {
  ListEventBridgeRuleTemplateGroupsCommandInput,
  ListEventBridgeRuleTemplateGroupsCommandOutput,
} from "./commands/ListEventBridgeRuleTemplateGroupsCommand";
import {
  ListEventBridgeRuleTemplatesCommandInput,
  ListEventBridgeRuleTemplatesCommandOutput,
} from "./commands/ListEventBridgeRuleTemplatesCommand";
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
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "./commands/ListNetworksCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import { ListSdiSourcesCommandInput, ListSdiSourcesCommandOutput } from "./commands/ListSdiSourcesCommand";
import { ListSignalMapsCommandInput, ListSignalMapsCommandOutput } from "./commands/ListSignalMapsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListVersionsCommandInput, ListVersionsCommandOutput } from "./commands/ListVersionsCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import { RebootInputDeviceCommandInput, RebootInputDeviceCommandOutput } from "./commands/RebootInputDeviceCommand";
import {
  RejectInputDeviceTransferCommandInput,
  RejectInputDeviceTransferCommandOutput,
} from "./commands/RejectInputDeviceTransferCommand";
import {
  RestartChannelPipelinesCommandInput,
  RestartChannelPipelinesCommandOutput,
} from "./commands/RestartChannelPipelinesCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand";
import {
  StartDeleteMonitorDeploymentCommandInput,
  StartDeleteMonitorDeploymentCommandOutput,
} from "./commands/StartDeleteMonitorDeploymentCommand";
import { StartInputDeviceCommandInput, StartInputDeviceCommandOutput } from "./commands/StartInputDeviceCommand";
import {
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
} from "./commands/StartInputDeviceMaintenanceWindowCommand";
import {
  StartMonitorDeploymentCommandInput,
  StartMonitorDeploymentCommandOutput,
} from "./commands/StartMonitorDeploymentCommand";
import { StartMultiplexCommandInput, StartMultiplexCommandOutput } from "./commands/StartMultiplexCommand";
import {
  StartUpdateSignalMapCommandInput,
  StartUpdateSignalMapCommandOutput,
} from "./commands/StartUpdateSignalMapCommand";
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
import {
  UpdateChannelPlacementGroupCommandInput,
  UpdateChannelPlacementGroupCommandOutput,
} from "./commands/UpdateChannelPlacementGroupCommand";
import {
  UpdateCloudWatchAlarmTemplateCommandInput,
  UpdateCloudWatchAlarmTemplateCommandOutput,
} from "./commands/UpdateCloudWatchAlarmTemplateCommand";
import {
  UpdateCloudWatchAlarmTemplateGroupCommandInput,
  UpdateCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/UpdateCloudWatchAlarmTemplateGroupCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand";
import {
  UpdateEventBridgeRuleTemplateCommandInput,
  UpdateEventBridgeRuleTemplateCommandOutput,
} from "./commands/UpdateEventBridgeRuleTemplateCommand";
import {
  UpdateEventBridgeRuleTemplateGroupCommandInput,
  UpdateEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/UpdateEventBridgeRuleTemplateGroupCommand";
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
import { UpdateNetworkCommandInput, UpdateNetworkCommandOutput } from "./commands/UpdateNetworkCommand";
import { UpdateNodeCommandInput, UpdateNodeCommandOutput } from "./commands/UpdateNodeCommand";
import { UpdateNodeStateCommandInput, UpdateNodeStateCommandOutput } from "./commands/UpdateNodeStateCommand";
import { UpdateReservationCommandInput, UpdateReservationCommandOutput } from "./commands/UpdateReservationCommand";
import { UpdateSdiSourceCommandInput, UpdateSdiSourceCommandOutput } from "./commands/UpdateSdiSourceCommand";
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
  | CreateChannelPlacementGroupCommandInput
  | CreateCloudWatchAlarmTemplateCommandInput
  | CreateCloudWatchAlarmTemplateGroupCommandInput
  | CreateClusterCommandInput
  | CreateEventBridgeRuleTemplateCommandInput
  | CreateEventBridgeRuleTemplateGroupCommandInput
  | CreateInputCommandInput
  | CreateInputSecurityGroupCommandInput
  | CreateMultiplexCommandInput
  | CreateMultiplexProgramCommandInput
  | CreateNetworkCommandInput
  | CreateNodeCommandInput
  | CreateNodeRegistrationScriptCommandInput
  | CreatePartnerInputCommandInput
  | CreateSdiSourceCommandInput
  | CreateSignalMapCommandInput
  | CreateTagsCommandInput
  | DeleteChannelCommandInput
  | DeleteChannelPlacementGroupCommandInput
  | DeleteCloudWatchAlarmTemplateCommandInput
  | DeleteCloudWatchAlarmTemplateGroupCommandInput
  | DeleteClusterCommandInput
  | DeleteEventBridgeRuleTemplateCommandInput
  | DeleteEventBridgeRuleTemplateGroupCommandInput
  | DeleteInputCommandInput
  | DeleteInputSecurityGroupCommandInput
  | DeleteMultiplexCommandInput
  | DeleteMultiplexProgramCommandInput
  | DeleteNetworkCommandInput
  | DeleteNodeCommandInput
  | DeleteReservationCommandInput
  | DeleteScheduleCommandInput
  | DeleteSdiSourceCommandInput
  | DeleteSignalMapCommandInput
  | DeleteTagsCommandInput
  | DescribeAccountConfigurationCommandInput
  | DescribeChannelCommandInput
  | DescribeChannelPlacementGroupCommandInput
  | DescribeClusterCommandInput
  | DescribeInputCommandInput
  | DescribeInputDeviceCommandInput
  | DescribeInputDeviceThumbnailCommandInput
  | DescribeInputSecurityGroupCommandInput
  | DescribeMultiplexCommandInput
  | DescribeMultiplexProgramCommandInput
  | DescribeNetworkCommandInput
  | DescribeNodeCommandInput
  | DescribeOfferingCommandInput
  | DescribeReservationCommandInput
  | DescribeScheduleCommandInput
  | DescribeSdiSourceCommandInput
  | DescribeThumbnailsCommandInput
  | GetCloudWatchAlarmTemplateCommandInput
  | GetCloudWatchAlarmTemplateGroupCommandInput
  | GetEventBridgeRuleTemplateCommandInput
  | GetEventBridgeRuleTemplateGroupCommandInput
  | GetSignalMapCommandInput
  | ListChannelPlacementGroupsCommandInput
  | ListChannelsCommandInput
  | ListCloudWatchAlarmTemplateGroupsCommandInput
  | ListCloudWatchAlarmTemplatesCommandInput
  | ListClustersCommandInput
  | ListEventBridgeRuleTemplateGroupsCommandInput
  | ListEventBridgeRuleTemplatesCommandInput
  | ListInputDeviceTransfersCommandInput
  | ListInputDevicesCommandInput
  | ListInputSecurityGroupsCommandInput
  | ListInputsCommandInput
  | ListMultiplexProgramsCommandInput
  | ListMultiplexesCommandInput
  | ListNetworksCommandInput
  | ListNodesCommandInput
  | ListOfferingsCommandInput
  | ListReservationsCommandInput
  | ListSdiSourcesCommandInput
  | ListSignalMapsCommandInput
  | ListTagsForResourceCommandInput
  | ListVersionsCommandInput
  | PurchaseOfferingCommandInput
  | RebootInputDeviceCommandInput
  | RejectInputDeviceTransferCommandInput
  | RestartChannelPipelinesCommandInput
  | StartChannelCommandInput
  | StartDeleteMonitorDeploymentCommandInput
  | StartInputDeviceCommandInput
  | StartInputDeviceMaintenanceWindowCommandInput
  | StartMonitorDeploymentCommandInput
  | StartMultiplexCommandInput
  | StartUpdateSignalMapCommandInput
  | StopChannelCommandInput
  | StopInputDeviceCommandInput
  | StopMultiplexCommandInput
  | TransferInputDeviceCommandInput
  | UpdateAccountConfigurationCommandInput
  | UpdateChannelClassCommandInput
  | UpdateChannelCommandInput
  | UpdateChannelPlacementGroupCommandInput
  | UpdateCloudWatchAlarmTemplateCommandInput
  | UpdateCloudWatchAlarmTemplateGroupCommandInput
  | UpdateClusterCommandInput
  | UpdateEventBridgeRuleTemplateCommandInput
  | UpdateEventBridgeRuleTemplateGroupCommandInput
  | UpdateInputCommandInput
  | UpdateInputDeviceCommandInput
  | UpdateInputSecurityGroupCommandInput
  | UpdateMultiplexCommandInput
  | UpdateMultiplexProgramCommandInput
  | UpdateNetworkCommandInput
  | UpdateNodeCommandInput
  | UpdateNodeStateCommandInput
  | UpdateReservationCommandInput
  | UpdateSdiSourceCommandInput;

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
  | CreateChannelPlacementGroupCommandOutput
  | CreateCloudWatchAlarmTemplateCommandOutput
  | CreateCloudWatchAlarmTemplateGroupCommandOutput
  | CreateClusterCommandOutput
  | CreateEventBridgeRuleTemplateCommandOutput
  | CreateEventBridgeRuleTemplateGroupCommandOutput
  | CreateInputCommandOutput
  | CreateInputSecurityGroupCommandOutput
  | CreateMultiplexCommandOutput
  | CreateMultiplexProgramCommandOutput
  | CreateNetworkCommandOutput
  | CreateNodeCommandOutput
  | CreateNodeRegistrationScriptCommandOutput
  | CreatePartnerInputCommandOutput
  | CreateSdiSourceCommandOutput
  | CreateSignalMapCommandOutput
  | CreateTagsCommandOutput
  | DeleteChannelCommandOutput
  | DeleteChannelPlacementGroupCommandOutput
  | DeleteCloudWatchAlarmTemplateCommandOutput
  | DeleteCloudWatchAlarmTemplateGroupCommandOutput
  | DeleteClusterCommandOutput
  | DeleteEventBridgeRuleTemplateCommandOutput
  | DeleteEventBridgeRuleTemplateGroupCommandOutput
  | DeleteInputCommandOutput
  | DeleteInputSecurityGroupCommandOutput
  | DeleteMultiplexCommandOutput
  | DeleteMultiplexProgramCommandOutput
  | DeleteNetworkCommandOutput
  | DeleteNodeCommandOutput
  | DeleteReservationCommandOutput
  | DeleteScheduleCommandOutput
  | DeleteSdiSourceCommandOutput
  | DeleteSignalMapCommandOutput
  | DeleteTagsCommandOutput
  | DescribeAccountConfigurationCommandOutput
  | DescribeChannelCommandOutput
  | DescribeChannelPlacementGroupCommandOutput
  | DescribeClusterCommandOutput
  | DescribeInputCommandOutput
  | DescribeInputDeviceCommandOutput
  | DescribeInputDeviceThumbnailCommandOutput
  | DescribeInputSecurityGroupCommandOutput
  | DescribeMultiplexCommandOutput
  | DescribeMultiplexProgramCommandOutput
  | DescribeNetworkCommandOutput
  | DescribeNodeCommandOutput
  | DescribeOfferingCommandOutput
  | DescribeReservationCommandOutput
  | DescribeScheduleCommandOutput
  | DescribeSdiSourceCommandOutput
  | DescribeThumbnailsCommandOutput
  | GetCloudWatchAlarmTemplateCommandOutput
  | GetCloudWatchAlarmTemplateGroupCommandOutput
  | GetEventBridgeRuleTemplateCommandOutput
  | GetEventBridgeRuleTemplateGroupCommandOutput
  | GetSignalMapCommandOutput
  | ListChannelPlacementGroupsCommandOutput
  | ListChannelsCommandOutput
  | ListCloudWatchAlarmTemplateGroupsCommandOutput
  | ListCloudWatchAlarmTemplatesCommandOutput
  | ListClustersCommandOutput
  | ListEventBridgeRuleTemplateGroupsCommandOutput
  | ListEventBridgeRuleTemplatesCommandOutput
  | ListInputDeviceTransfersCommandOutput
  | ListInputDevicesCommandOutput
  | ListInputSecurityGroupsCommandOutput
  | ListInputsCommandOutput
  | ListMultiplexProgramsCommandOutput
  | ListMultiplexesCommandOutput
  | ListNetworksCommandOutput
  | ListNodesCommandOutput
  | ListOfferingsCommandOutput
  | ListReservationsCommandOutput
  | ListSdiSourcesCommandOutput
  | ListSignalMapsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVersionsCommandOutput
  | PurchaseOfferingCommandOutput
  | RebootInputDeviceCommandOutput
  | RejectInputDeviceTransferCommandOutput
  | RestartChannelPipelinesCommandOutput
  | StartChannelCommandOutput
  | StartDeleteMonitorDeploymentCommandOutput
  | StartInputDeviceCommandOutput
  | StartInputDeviceMaintenanceWindowCommandOutput
  | StartMonitorDeploymentCommandOutput
  | StartMultiplexCommandOutput
  | StartUpdateSignalMapCommandOutput
  | StopChannelCommandOutput
  | StopInputDeviceCommandOutput
  | StopMultiplexCommandOutput
  | TransferInputDeviceCommandOutput
  | UpdateAccountConfigurationCommandOutput
  | UpdateChannelClassCommandOutput
  | UpdateChannelCommandOutput
  | UpdateChannelPlacementGroupCommandOutput
  | UpdateCloudWatchAlarmTemplateCommandOutput
  | UpdateCloudWatchAlarmTemplateGroupCommandOutput
  | UpdateClusterCommandOutput
  | UpdateEventBridgeRuleTemplateCommandOutput
  | UpdateEventBridgeRuleTemplateGroupCommandOutput
  | UpdateInputCommandOutput
  | UpdateInputDeviceCommandOutput
  | UpdateInputSecurityGroupCommandOutput
  | UpdateMultiplexCommandOutput
  | UpdateMultiplexProgramCommandOutput
  | UpdateNetworkCommandOutput
  | UpdateNodeCommandOutput
  | UpdateNodeStateCommandOutput
  | UpdateReservationCommandOutput
  | UpdateSdiSourceCommandOutput;

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
 *  The configuration interface of MediaLiveClient class constructor that set the region, credentials and other options.
 */
export interface MediaLiveClientConfig extends MediaLiveClientConfigType {}

/**
 * @public
 */
export type MediaLiveClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MediaLiveClient class. This is resolved and normalized from the {@link MediaLiveClientConfig | constructor configuration interface}.
 */
export interface MediaLiveClientResolvedConfig extends MediaLiveClientResolvedConfigType {}

/**
 * API for AWS Elemental MediaLive
 * @public
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultMediaLiveHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MediaLiveClientResolvedConfig) =>
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
