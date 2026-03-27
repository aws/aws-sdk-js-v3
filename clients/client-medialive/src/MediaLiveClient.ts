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
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultMediaLiveHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptInputDeviceTransferCommandInput,
  AcceptInputDeviceTransferCommandOutput,
} from "./commands/AcceptInputDeviceTransferCommand";
import type { BatchDeleteCommandInput, BatchDeleteCommandOutput } from "./commands/BatchDeleteCommand";
import type { BatchStartCommandInput, BatchStartCommandOutput } from "./commands/BatchStartCommand";
import type { BatchStopCommandInput, BatchStopCommandOutput } from "./commands/BatchStopCommand";
import type {
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput,
} from "./commands/BatchUpdateScheduleCommand";
import type {
  CancelInputDeviceTransferCommandInput,
  CancelInputDeviceTransferCommandOutput,
} from "./commands/CancelInputDeviceTransferCommand";
import type { ClaimDeviceCommandInput, ClaimDeviceCommandOutput } from "./commands/ClaimDeviceCommand";
import type { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import type {
  CreateChannelPlacementGroupCommandInput,
  CreateChannelPlacementGroupCommandOutput,
} from "./commands/CreateChannelPlacementGroupCommand";
import type {
  CreateCloudWatchAlarmTemplateCommandInput,
  CreateCloudWatchAlarmTemplateCommandOutput,
} from "./commands/CreateCloudWatchAlarmTemplateCommand";
import type {
  CreateCloudWatchAlarmTemplateGroupCommandInput,
  CreateCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/CreateCloudWatchAlarmTemplateGroupCommand";
import type { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import type {
  CreateEventBridgeRuleTemplateCommandInput,
  CreateEventBridgeRuleTemplateCommandOutput,
} from "./commands/CreateEventBridgeRuleTemplateCommand";
import type {
  CreateEventBridgeRuleTemplateGroupCommandInput,
  CreateEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/CreateEventBridgeRuleTemplateGroupCommand";
import type { CreateInputCommandInput, CreateInputCommandOutput } from "./commands/CreateInputCommand";
import type {
  CreateInputSecurityGroupCommandInput,
  CreateInputSecurityGroupCommandOutput,
} from "./commands/CreateInputSecurityGroupCommand";
import type { CreateMultiplexCommandInput, CreateMultiplexCommandOutput } from "./commands/CreateMultiplexCommand";
import type {
  CreateMultiplexProgramCommandInput,
  CreateMultiplexProgramCommandOutput,
} from "./commands/CreateMultiplexProgramCommand";
import type { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "./commands/CreateNetworkCommand";
import type { CreateNodeCommandInput, CreateNodeCommandOutput } from "./commands/CreateNodeCommand";
import type {
  CreateNodeRegistrationScriptCommandInput,
  CreateNodeRegistrationScriptCommandOutput,
} from "./commands/CreateNodeRegistrationScriptCommand";
import type {
  CreatePartnerInputCommandInput,
  CreatePartnerInputCommandOutput,
} from "./commands/CreatePartnerInputCommand";
import type { CreateSdiSourceCommandInput, CreateSdiSourceCommandOutput } from "./commands/CreateSdiSourceCommand";
import type { CreateSignalMapCommandInput, CreateSignalMapCommandOutput } from "./commands/CreateSignalMapCommand";
import type { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import type { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import type {
  DeleteChannelPlacementGroupCommandInput,
  DeleteChannelPlacementGroupCommandOutput,
} from "./commands/DeleteChannelPlacementGroupCommand";
import type {
  DeleteCloudWatchAlarmTemplateCommandInput,
  DeleteCloudWatchAlarmTemplateCommandOutput,
} from "./commands/DeleteCloudWatchAlarmTemplateCommand";
import type {
  DeleteCloudWatchAlarmTemplateGroupCommandInput,
  DeleteCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/DeleteCloudWatchAlarmTemplateGroupCommand";
import type { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import type {
  DeleteEventBridgeRuleTemplateCommandInput,
  DeleteEventBridgeRuleTemplateCommandOutput,
} from "./commands/DeleteEventBridgeRuleTemplateCommand";
import type {
  DeleteEventBridgeRuleTemplateGroupCommandInput,
  DeleteEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/DeleteEventBridgeRuleTemplateGroupCommand";
import type { DeleteInputCommandInput, DeleteInputCommandOutput } from "./commands/DeleteInputCommand";
import type {
  DeleteInputSecurityGroupCommandInput,
  DeleteInputSecurityGroupCommandOutput,
} from "./commands/DeleteInputSecurityGroupCommand";
import type { DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput } from "./commands/DeleteMultiplexCommand";
import type {
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput,
} from "./commands/DeleteMultiplexProgramCommand";
import type { DeleteNetworkCommandInput, DeleteNetworkCommandOutput } from "./commands/DeleteNetworkCommand";
import type { DeleteNodeCommandInput, DeleteNodeCommandOutput } from "./commands/DeleteNodeCommand";
import type {
  DeleteReservationCommandInput,
  DeleteReservationCommandOutput,
} from "./commands/DeleteReservationCommand";
import type { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand";
import type { DeleteSdiSourceCommandInput, DeleteSdiSourceCommandOutput } from "./commands/DeleteSdiSourceCommand";
import type { DeleteSignalMapCommandInput, DeleteSignalMapCommandOutput } from "./commands/DeleteSignalMapCommand";
import type { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import type {
  DescribeAccountConfigurationCommandInput,
  DescribeAccountConfigurationCommandOutput,
} from "./commands/DescribeAccountConfigurationCommand";
import type { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import type {
  DescribeChannelPlacementGroupCommandInput,
  DescribeChannelPlacementGroupCommandOutput,
} from "./commands/DescribeChannelPlacementGroupCommand";
import type { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import type { DescribeInputCommandInput, DescribeInputCommandOutput } from "./commands/DescribeInputCommand";
import type {
  DescribeInputDeviceCommandInput,
  DescribeInputDeviceCommandOutput,
} from "./commands/DescribeInputDeviceCommand";
import type {
  DescribeInputDeviceThumbnailCommandInput,
  DescribeInputDeviceThumbnailCommandOutput,
} from "./commands/DescribeInputDeviceThumbnailCommand";
import type {
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput,
} from "./commands/DescribeInputSecurityGroupCommand";
import type {
  DescribeMultiplexCommandInput,
  DescribeMultiplexCommandOutput,
} from "./commands/DescribeMultiplexCommand";
import type {
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput,
} from "./commands/DescribeMultiplexProgramCommand";
import type { DescribeNetworkCommandInput, DescribeNetworkCommandOutput } from "./commands/DescribeNetworkCommand";
import type { DescribeNodeCommandInput, DescribeNodeCommandOutput } from "./commands/DescribeNodeCommand";
import type { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "./commands/DescribeOfferingCommand";
import type {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "./commands/DescribeReservationCommand";
import type { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand";
import type {
  DescribeSdiSourceCommandInput,
  DescribeSdiSourceCommandOutput,
} from "./commands/DescribeSdiSourceCommand";
import type {
  DescribeThumbnailsCommandInput,
  DescribeThumbnailsCommandOutput,
} from "./commands/DescribeThumbnailsCommand";
import type {
  GetCloudWatchAlarmTemplateCommandInput,
  GetCloudWatchAlarmTemplateCommandOutput,
} from "./commands/GetCloudWatchAlarmTemplateCommand";
import type {
  GetCloudWatchAlarmTemplateGroupCommandInput,
  GetCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/GetCloudWatchAlarmTemplateGroupCommand";
import type {
  GetEventBridgeRuleTemplateCommandInput,
  GetEventBridgeRuleTemplateCommandOutput,
} from "./commands/GetEventBridgeRuleTemplateCommand";
import type {
  GetEventBridgeRuleTemplateGroupCommandInput,
  GetEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/GetEventBridgeRuleTemplateGroupCommand";
import type { GetSignalMapCommandInput, GetSignalMapCommandOutput } from "./commands/GetSignalMapCommand";
import type { ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import type {
  ListChannelPlacementGroupsCommandInput,
  ListChannelPlacementGroupsCommandOutput,
} from "./commands/ListChannelPlacementGroupsCommand";
import type { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import type {
  ListCloudWatchAlarmTemplateGroupsCommandInput,
  ListCloudWatchAlarmTemplateGroupsCommandOutput,
} from "./commands/ListCloudWatchAlarmTemplateGroupsCommand";
import type {
  ListCloudWatchAlarmTemplatesCommandInput,
  ListCloudWatchAlarmTemplatesCommandOutput,
} from "./commands/ListCloudWatchAlarmTemplatesCommand";
import type {
  ListClusterAlertsCommandInput,
  ListClusterAlertsCommandOutput,
} from "./commands/ListClusterAlertsCommand";
import type { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import type {
  ListEventBridgeRuleTemplateGroupsCommandInput,
  ListEventBridgeRuleTemplateGroupsCommandOutput,
} from "./commands/ListEventBridgeRuleTemplateGroupsCommand";
import type {
  ListEventBridgeRuleTemplatesCommandInput,
  ListEventBridgeRuleTemplatesCommandOutput,
} from "./commands/ListEventBridgeRuleTemplatesCommand";
import type { ListInputDevicesCommandInput, ListInputDevicesCommandOutput } from "./commands/ListInputDevicesCommand";
import type {
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
} from "./commands/ListInputDeviceTransfersCommand";
import type { ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import type {
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
} from "./commands/ListInputSecurityGroupsCommand";
import type {
  ListMultiplexAlertsCommandInput,
  ListMultiplexAlertsCommandOutput,
} from "./commands/ListMultiplexAlertsCommand";
import type { ListMultiplexesCommandInput, ListMultiplexesCommandOutput } from "./commands/ListMultiplexesCommand";
import type {
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
} from "./commands/ListMultiplexProgramsCommand";
import type { ListNetworksCommandInput, ListNetworksCommandOutput } from "./commands/ListNetworksCommand";
import type { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import type { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import type { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import type { ListSdiSourcesCommandInput, ListSdiSourcesCommandOutput } from "./commands/ListSdiSourcesCommand";
import type { ListSignalMapsCommandInput, ListSignalMapsCommandOutput } from "./commands/ListSignalMapsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListVersionsCommandInput, ListVersionsCommandOutput } from "./commands/ListVersionsCommand";
import type { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import type {
  RebootInputDeviceCommandInput,
  RebootInputDeviceCommandOutput,
} from "./commands/RebootInputDeviceCommand";
import type {
  RejectInputDeviceTransferCommandInput,
  RejectInputDeviceTransferCommandOutput,
} from "./commands/RejectInputDeviceTransferCommand";
import type {
  RestartChannelPipelinesCommandInput,
  RestartChannelPipelinesCommandOutput,
} from "./commands/RestartChannelPipelinesCommand";
import type { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand";
import type {
  StartDeleteMonitorDeploymentCommandInput,
  StartDeleteMonitorDeploymentCommandOutput,
} from "./commands/StartDeleteMonitorDeploymentCommand";
import type { StartInputDeviceCommandInput, StartInputDeviceCommandOutput } from "./commands/StartInputDeviceCommand";
import type {
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
} from "./commands/StartInputDeviceMaintenanceWindowCommand";
import type {
  StartMonitorDeploymentCommandInput,
  StartMonitorDeploymentCommandOutput,
} from "./commands/StartMonitorDeploymentCommand";
import type { StartMultiplexCommandInput, StartMultiplexCommandOutput } from "./commands/StartMultiplexCommand";
import type {
  StartUpdateSignalMapCommandInput,
  StartUpdateSignalMapCommandOutput,
} from "./commands/StartUpdateSignalMapCommand";
import type { StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import type { StopInputDeviceCommandInput, StopInputDeviceCommandOutput } from "./commands/StopInputDeviceCommand";
import type { StopMultiplexCommandInput, StopMultiplexCommandOutput } from "./commands/StopMultiplexCommand";
import type {
  TransferInputDeviceCommandInput,
  TransferInputDeviceCommandOutput,
} from "./commands/TransferInputDeviceCommand";
import type {
  UpdateAccountConfigurationCommandInput,
  UpdateAccountConfigurationCommandOutput,
} from "./commands/UpdateAccountConfigurationCommand";
import type {
  UpdateChannelClassCommandInput,
  UpdateChannelClassCommandOutput,
} from "./commands/UpdateChannelClassCommand";
import type { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import type {
  UpdateChannelPlacementGroupCommandInput,
  UpdateChannelPlacementGroupCommandOutput,
} from "./commands/UpdateChannelPlacementGroupCommand";
import type {
  UpdateCloudWatchAlarmTemplateCommandInput,
  UpdateCloudWatchAlarmTemplateCommandOutput,
} from "./commands/UpdateCloudWatchAlarmTemplateCommand";
import type {
  UpdateCloudWatchAlarmTemplateGroupCommandInput,
  UpdateCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/UpdateCloudWatchAlarmTemplateGroupCommand";
import type { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand";
import type {
  UpdateEventBridgeRuleTemplateCommandInput,
  UpdateEventBridgeRuleTemplateCommandOutput,
} from "./commands/UpdateEventBridgeRuleTemplateCommand";
import type {
  UpdateEventBridgeRuleTemplateGroupCommandInput,
  UpdateEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/UpdateEventBridgeRuleTemplateGroupCommand";
import type { UpdateInputCommandInput, UpdateInputCommandOutput } from "./commands/UpdateInputCommand";
import type {
  UpdateInputDeviceCommandInput,
  UpdateInputDeviceCommandOutput,
} from "./commands/UpdateInputDeviceCommand";
import type {
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput,
} from "./commands/UpdateInputSecurityGroupCommand";
import type { UpdateMultiplexCommandInput, UpdateMultiplexCommandOutput } from "./commands/UpdateMultiplexCommand";
import type {
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput,
} from "./commands/UpdateMultiplexProgramCommand";
import type { UpdateNetworkCommandInput, UpdateNetworkCommandOutput } from "./commands/UpdateNetworkCommand";
import type { UpdateNodeCommandInput, UpdateNodeCommandOutput } from "./commands/UpdateNodeCommand";
import type { UpdateNodeStateCommandInput, UpdateNodeStateCommandOutput } from "./commands/UpdateNodeStateCommand";
import type {
  UpdateReservationCommandInput,
  UpdateReservationCommandOutput,
} from "./commands/UpdateReservationCommand";
import type { UpdateSdiSourceCommandInput, UpdateSdiSourceCommandOutput } from "./commands/UpdateSdiSourceCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

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
  | ListAlertsCommandInput
  | ListChannelPlacementGroupsCommandInput
  | ListChannelsCommandInput
  | ListCloudWatchAlarmTemplateGroupsCommandInput
  | ListCloudWatchAlarmTemplatesCommandInput
  | ListClusterAlertsCommandInput
  | ListClustersCommandInput
  | ListEventBridgeRuleTemplateGroupsCommandInput
  | ListEventBridgeRuleTemplatesCommandInput
  | ListInputDeviceTransfersCommandInput
  | ListInputDevicesCommandInput
  | ListInputSecurityGroupsCommandInput
  | ListInputsCommandInput
  | ListMultiplexAlertsCommandInput
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
  | ListAlertsCommandOutput
  | ListChannelPlacementGroupsCommandOutput
  | ListChannelsCommandOutput
  | ListCloudWatchAlarmTemplateGroupsCommandOutput
  | ListCloudWatchAlarmTemplatesCommandOutput
  | ListClusterAlertsCommandOutput
  | ListClustersCommandOutput
  | ListEventBridgeRuleTemplateGroupsCommandOutput
  | ListEventBridgeRuleTemplatesCommandOutput
  | ListInputDeviceTransfersCommandOutput
  | ListInputDevicesCommandOutput
  | ListInputSecurityGroupsCommandOutput
  | ListInputsCommandOutput
  | ListMultiplexAlertsCommandOutput
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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
