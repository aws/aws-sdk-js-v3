// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AcceptInputDeviceTransferCommandInput,
  type AcceptInputDeviceTransferCommandOutput,
  AcceptInputDeviceTransferCommand,
} from "./commands/AcceptInputDeviceTransferCommand";
import {
  type BatchDeleteCommandInput,
  type BatchDeleteCommandOutput,
  BatchDeleteCommand,
} from "./commands/BatchDeleteCommand";
import {
  type BatchStartCommandInput,
  type BatchStartCommandOutput,
  BatchStartCommand,
} from "./commands/BatchStartCommand";
import { type BatchStopCommandInput, type BatchStopCommandOutput, BatchStopCommand } from "./commands/BatchStopCommand";
import {
  type BatchUpdateScheduleCommandInput,
  type BatchUpdateScheduleCommandOutput,
  BatchUpdateScheduleCommand,
} from "./commands/BatchUpdateScheduleCommand";
import {
  type CancelInputDeviceTransferCommandInput,
  type CancelInputDeviceTransferCommandOutput,
  CancelInputDeviceTransferCommand,
} from "./commands/CancelInputDeviceTransferCommand";
import {
  type ClaimDeviceCommandInput,
  type ClaimDeviceCommandOutput,
  ClaimDeviceCommand,
} from "./commands/ClaimDeviceCommand";
import {
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateChannelCommand,
} from "./commands/CreateChannelCommand";
import {
  type CreateChannelPlacementGroupCommandInput,
  type CreateChannelPlacementGroupCommandOutput,
  CreateChannelPlacementGroupCommand,
} from "./commands/CreateChannelPlacementGroupCommand";
import {
  type CreateCloudWatchAlarmTemplateCommandInput,
  type CreateCloudWatchAlarmTemplateCommandOutput,
  CreateCloudWatchAlarmTemplateCommand,
} from "./commands/CreateCloudWatchAlarmTemplateCommand";
import {
  type CreateCloudWatchAlarmTemplateGroupCommandInput,
  type CreateCloudWatchAlarmTemplateGroupCommandOutput,
  CreateCloudWatchAlarmTemplateGroupCommand,
} from "./commands/CreateCloudWatchAlarmTemplateGroupCommand";
import {
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterCommand,
} from "./commands/CreateClusterCommand";
import {
  type CreateEventBridgeRuleTemplateCommandInput,
  type CreateEventBridgeRuleTemplateCommandOutput,
  CreateEventBridgeRuleTemplateCommand,
} from "./commands/CreateEventBridgeRuleTemplateCommand";
import {
  type CreateEventBridgeRuleTemplateGroupCommandInput,
  type CreateEventBridgeRuleTemplateGroupCommandOutput,
  CreateEventBridgeRuleTemplateGroupCommand,
} from "./commands/CreateEventBridgeRuleTemplateGroupCommand";
import {
  type CreateInputCommandInput,
  type CreateInputCommandOutput,
  CreateInputCommand,
} from "./commands/CreateInputCommand";
import {
  type CreateInputSecurityGroupCommandInput,
  type CreateInputSecurityGroupCommandOutput,
  CreateInputSecurityGroupCommand,
} from "./commands/CreateInputSecurityGroupCommand";
import {
  type CreateMultiplexCommandInput,
  type CreateMultiplexCommandOutput,
  CreateMultiplexCommand,
} from "./commands/CreateMultiplexCommand";
import {
  type CreateMultiplexProgramCommandInput,
  type CreateMultiplexProgramCommandOutput,
  CreateMultiplexProgramCommand,
} from "./commands/CreateMultiplexProgramCommand";
import {
  type CreateNetworkCommandInput,
  type CreateNetworkCommandOutput,
  CreateNetworkCommand,
} from "./commands/CreateNetworkCommand";
import {
  type CreateNodeCommandInput,
  type CreateNodeCommandOutput,
  CreateNodeCommand,
} from "./commands/CreateNodeCommand";
import {
  type CreateNodeRegistrationScriptCommandInput,
  type CreateNodeRegistrationScriptCommandOutput,
  CreateNodeRegistrationScriptCommand,
} from "./commands/CreateNodeRegistrationScriptCommand";
import {
  type CreatePartnerInputCommandInput,
  type CreatePartnerInputCommandOutput,
  CreatePartnerInputCommand,
} from "./commands/CreatePartnerInputCommand";
import {
  type CreateSdiSourceCommandInput,
  type CreateSdiSourceCommandOutput,
  CreateSdiSourceCommand,
} from "./commands/CreateSdiSourceCommand";
import {
  type CreateSignalMapCommandInput,
  type CreateSignalMapCommandOutput,
  CreateSignalMapCommand,
} from "./commands/CreateSignalMapCommand";
import {
  type CreateTagsCommandInput,
  type CreateTagsCommandOutput,
  CreateTagsCommand,
} from "./commands/CreateTagsCommand";
import {
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeleteChannelCommand,
} from "./commands/DeleteChannelCommand";
import {
  type DeleteChannelPlacementGroupCommandInput,
  type DeleteChannelPlacementGroupCommandOutput,
  DeleteChannelPlacementGroupCommand,
} from "./commands/DeleteChannelPlacementGroupCommand";
import {
  type DeleteCloudWatchAlarmTemplateCommandInput,
  type DeleteCloudWatchAlarmTemplateCommandOutput,
  DeleteCloudWatchAlarmTemplateCommand,
} from "./commands/DeleteCloudWatchAlarmTemplateCommand";
import {
  type DeleteCloudWatchAlarmTemplateGroupCommandInput,
  type DeleteCloudWatchAlarmTemplateGroupCommandOutput,
  DeleteCloudWatchAlarmTemplateGroupCommand,
} from "./commands/DeleteCloudWatchAlarmTemplateGroupCommand";
import {
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterCommand,
} from "./commands/DeleteClusterCommand";
import {
  type DeleteEventBridgeRuleTemplateCommandInput,
  type DeleteEventBridgeRuleTemplateCommandOutput,
  DeleteEventBridgeRuleTemplateCommand,
} from "./commands/DeleteEventBridgeRuleTemplateCommand";
import {
  type DeleteEventBridgeRuleTemplateGroupCommandInput,
  type DeleteEventBridgeRuleTemplateGroupCommandOutput,
  DeleteEventBridgeRuleTemplateGroupCommand,
} from "./commands/DeleteEventBridgeRuleTemplateGroupCommand";
import {
  type DeleteInputCommandInput,
  type DeleteInputCommandOutput,
  DeleteInputCommand,
} from "./commands/DeleteInputCommand";
import {
  type DeleteInputSecurityGroupCommandInput,
  type DeleteInputSecurityGroupCommandOutput,
  DeleteInputSecurityGroupCommand,
} from "./commands/DeleteInputSecurityGroupCommand";
import {
  type DeleteMultiplexCommandInput,
  type DeleteMultiplexCommandOutput,
  DeleteMultiplexCommand,
} from "./commands/DeleteMultiplexCommand";
import {
  type DeleteMultiplexProgramCommandInput,
  type DeleteMultiplexProgramCommandOutput,
  DeleteMultiplexProgramCommand,
} from "./commands/DeleteMultiplexProgramCommand";
import {
  type DeleteNetworkCommandInput,
  type DeleteNetworkCommandOutput,
  DeleteNetworkCommand,
} from "./commands/DeleteNetworkCommand";
import {
  type DeleteNodeCommandInput,
  type DeleteNodeCommandOutput,
  DeleteNodeCommand,
} from "./commands/DeleteNodeCommand";
import {
  type DeleteReservationCommandInput,
  type DeleteReservationCommandOutput,
  DeleteReservationCommand,
} from "./commands/DeleteReservationCommand";
import {
  type DeleteScheduleCommandInput,
  type DeleteScheduleCommandOutput,
  DeleteScheduleCommand,
} from "./commands/DeleteScheduleCommand";
import {
  type DeleteSdiSourceCommandInput,
  type DeleteSdiSourceCommandOutput,
  DeleteSdiSourceCommand,
} from "./commands/DeleteSdiSourceCommand";
import {
  type DeleteSignalMapCommandInput,
  type DeleteSignalMapCommandOutput,
  DeleteSignalMapCommand,
} from "./commands/DeleteSignalMapCommand";
import {
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTagsCommand,
} from "./commands/DeleteTagsCommand";
import {
  type DescribeAccountConfigurationCommandInput,
  type DescribeAccountConfigurationCommandOutput,
  DescribeAccountConfigurationCommand,
} from "./commands/DescribeAccountConfigurationCommand";
import {
  type DescribeChannelCommandInput,
  type DescribeChannelCommandOutput,
  DescribeChannelCommand,
} from "./commands/DescribeChannelCommand";
import {
  type DescribeChannelPlacementGroupCommandInput,
  type DescribeChannelPlacementGroupCommandOutput,
  DescribeChannelPlacementGroupCommand,
} from "./commands/DescribeChannelPlacementGroupCommand";
import {
  type DescribeClusterCommandInput,
  type DescribeClusterCommandOutput,
  DescribeClusterCommand,
} from "./commands/DescribeClusterCommand";
import {
  type DescribeInputCommandInput,
  type DescribeInputCommandOutput,
  DescribeInputCommand,
} from "./commands/DescribeInputCommand";
import {
  type DescribeInputDeviceCommandInput,
  type DescribeInputDeviceCommandOutput,
  DescribeInputDeviceCommand,
} from "./commands/DescribeInputDeviceCommand";
import {
  type DescribeInputDeviceThumbnailCommandInput,
  type DescribeInputDeviceThumbnailCommandOutput,
  DescribeInputDeviceThumbnailCommand,
} from "./commands/DescribeInputDeviceThumbnailCommand";
import {
  type DescribeInputSecurityGroupCommandInput,
  type DescribeInputSecurityGroupCommandOutput,
  DescribeInputSecurityGroupCommand,
} from "./commands/DescribeInputSecurityGroupCommand";
import {
  type DescribeMultiplexCommandInput,
  type DescribeMultiplexCommandOutput,
  DescribeMultiplexCommand,
} from "./commands/DescribeMultiplexCommand";
import {
  type DescribeMultiplexProgramCommandInput,
  type DescribeMultiplexProgramCommandOutput,
  DescribeMultiplexProgramCommand,
} from "./commands/DescribeMultiplexProgramCommand";
import {
  type DescribeNetworkCommandInput,
  type DescribeNetworkCommandOutput,
  DescribeNetworkCommand,
} from "./commands/DescribeNetworkCommand";
import {
  type DescribeNodeCommandInput,
  type DescribeNodeCommandOutput,
  DescribeNodeCommand,
} from "./commands/DescribeNodeCommand";
import {
  type DescribeOfferingCommandInput,
  type DescribeOfferingCommandOutput,
  DescribeOfferingCommand,
} from "./commands/DescribeOfferingCommand";
import {
  type DescribeReservationCommandInput,
  type DescribeReservationCommandOutput,
  DescribeReservationCommand,
} from "./commands/DescribeReservationCommand";
import {
  type DescribeScheduleCommandInput,
  type DescribeScheduleCommandOutput,
  DescribeScheduleCommand,
} from "./commands/DescribeScheduleCommand";
import {
  type DescribeSdiSourceCommandInput,
  type DescribeSdiSourceCommandOutput,
  DescribeSdiSourceCommand,
} from "./commands/DescribeSdiSourceCommand";
import {
  type DescribeThumbnailsCommandInput,
  type DescribeThumbnailsCommandOutput,
  DescribeThumbnailsCommand,
} from "./commands/DescribeThumbnailsCommand";
import {
  type GetCloudWatchAlarmTemplateCommandInput,
  type GetCloudWatchAlarmTemplateCommandOutput,
  GetCloudWatchAlarmTemplateCommand,
} from "./commands/GetCloudWatchAlarmTemplateCommand";
import {
  type GetCloudWatchAlarmTemplateGroupCommandInput,
  type GetCloudWatchAlarmTemplateGroupCommandOutput,
  GetCloudWatchAlarmTemplateGroupCommand,
} from "./commands/GetCloudWatchAlarmTemplateGroupCommand";
import {
  type GetEventBridgeRuleTemplateCommandInput,
  type GetEventBridgeRuleTemplateCommandOutput,
  GetEventBridgeRuleTemplateCommand,
} from "./commands/GetEventBridgeRuleTemplateCommand";
import {
  type GetEventBridgeRuleTemplateGroupCommandInput,
  type GetEventBridgeRuleTemplateGroupCommandOutput,
  GetEventBridgeRuleTemplateGroupCommand,
} from "./commands/GetEventBridgeRuleTemplateGroupCommand";
import {
  type GetSignalMapCommandInput,
  type GetSignalMapCommandOutput,
  GetSignalMapCommand,
} from "./commands/GetSignalMapCommand";
import {
  type ListAlertsCommandInput,
  type ListAlertsCommandOutput,
  ListAlertsCommand,
} from "./commands/ListAlertsCommand";
import {
  type ListChannelPlacementGroupsCommandInput,
  type ListChannelPlacementGroupsCommandOutput,
  ListChannelPlacementGroupsCommand,
} from "./commands/ListChannelPlacementGroupsCommand";
import {
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListChannelsCommand,
} from "./commands/ListChannelsCommand";
import {
  type ListCloudWatchAlarmTemplateGroupsCommandInput,
  type ListCloudWatchAlarmTemplateGroupsCommandOutput,
  ListCloudWatchAlarmTemplateGroupsCommand,
} from "./commands/ListCloudWatchAlarmTemplateGroupsCommand";
import {
  type ListCloudWatchAlarmTemplatesCommandInput,
  type ListCloudWatchAlarmTemplatesCommandOutput,
  ListCloudWatchAlarmTemplatesCommand,
} from "./commands/ListCloudWatchAlarmTemplatesCommand";
import {
  type ListClusterAlertsCommandInput,
  type ListClusterAlertsCommandOutput,
  ListClusterAlertsCommand,
} from "./commands/ListClusterAlertsCommand";
import {
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListClustersCommand,
} from "./commands/ListClustersCommand";
import {
  type ListEventBridgeRuleTemplateGroupsCommandInput,
  type ListEventBridgeRuleTemplateGroupsCommandOutput,
  ListEventBridgeRuleTemplateGroupsCommand,
} from "./commands/ListEventBridgeRuleTemplateGroupsCommand";
import {
  type ListEventBridgeRuleTemplatesCommandInput,
  type ListEventBridgeRuleTemplatesCommandOutput,
  ListEventBridgeRuleTemplatesCommand,
} from "./commands/ListEventBridgeRuleTemplatesCommand";
import {
  type ListInputDevicesCommandInput,
  type ListInputDevicesCommandOutput,
  ListInputDevicesCommand,
} from "./commands/ListInputDevicesCommand";
import {
  type ListInputDeviceTransfersCommandInput,
  type ListInputDeviceTransfersCommandOutput,
  ListInputDeviceTransfersCommand,
} from "./commands/ListInputDeviceTransfersCommand";
import {
  type ListInputsCommandInput,
  type ListInputsCommandOutput,
  ListInputsCommand,
} from "./commands/ListInputsCommand";
import {
  type ListInputSecurityGroupsCommandInput,
  type ListInputSecurityGroupsCommandOutput,
  ListInputSecurityGroupsCommand,
} from "./commands/ListInputSecurityGroupsCommand";
import {
  type ListMultiplexAlertsCommandInput,
  type ListMultiplexAlertsCommandOutput,
  ListMultiplexAlertsCommand,
} from "./commands/ListMultiplexAlertsCommand";
import {
  type ListMultiplexesCommandInput,
  type ListMultiplexesCommandOutput,
  ListMultiplexesCommand,
} from "./commands/ListMultiplexesCommand";
import {
  type ListMultiplexProgramsCommandInput,
  type ListMultiplexProgramsCommandOutput,
  ListMultiplexProgramsCommand,
} from "./commands/ListMultiplexProgramsCommand";
import {
  type ListNetworksCommandInput,
  type ListNetworksCommandOutput,
  ListNetworksCommand,
} from "./commands/ListNetworksCommand";
import { type ListNodesCommandInput, type ListNodesCommandOutput, ListNodesCommand } from "./commands/ListNodesCommand";
import {
  type ListOfferingsCommandInput,
  type ListOfferingsCommandOutput,
  ListOfferingsCommand,
} from "./commands/ListOfferingsCommand";
import {
  type ListReservationsCommandInput,
  type ListReservationsCommandOutput,
  ListReservationsCommand,
} from "./commands/ListReservationsCommand";
import {
  type ListSdiSourcesCommandInput,
  type ListSdiSourcesCommandOutput,
  ListSdiSourcesCommand,
} from "./commands/ListSdiSourcesCommand";
import {
  type ListSignalMapsCommandInput,
  type ListSignalMapsCommandOutput,
  ListSignalMapsCommand,
} from "./commands/ListSignalMapsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVersionsCommandInput,
  type ListVersionsCommandOutput,
  ListVersionsCommand,
} from "./commands/ListVersionsCommand";
import {
  type PurchaseOfferingCommandInput,
  type PurchaseOfferingCommandOutput,
  PurchaseOfferingCommand,
} from "./commands/PurchaseOfferingCommand";
import {
  type RebootInputDeviceCommandInput,
  type RebootInputDeviceCommandOutput,
  RebootInputDeviceCommand,
} from "./commands/RebootInputDeviceCommand";
import {
  type RejectInputDeviceTransferCommandInput,
  type RejectInputDeviceTransferCommandOutput,
  RejectInputDeviceTransferCommand,
} from "./commands/RejectInputDeviceTransferCommand";
import {
  type RestartChannelPipelinesCommandInput,
  type RestartChannelPipelinesCommandOutput,
  RestartChannelPipelinesCommand,
} from "./commands/RestartChannelPipelinesCommand";
import {
  type StartChannelCommandInput,
  type StartChannelCommandOutput,
  StartChannelCommand,
} from "./commands/StartChannelCommand";
import {
  type StartDeleteMonitorDeploymentCommandInput,
  type StartDeleteMonitorDeploymentCommandOutput,
  StartDeleteMonitorDeploymentCommand,
} from "./commands/StartDeleteMonitorDeploymentCommand";
import {
  type StartInputDeviceCommandInput,
  type StartInputDeviceCommandOutput,
  StartInputDeviceCommand,
} from "./commands/StartInputDeviceCommand";
import {
  type StartInputDeviceMaintenanceWindowCommandInput,
  type StartInputDeviceMaintenanceWindowCommandOutput,
  StartInputDeviceMaintenanceWindowCommand,
} from "./commands/StartInputDeviceMaintenanceWindowCommand";
import {
  type StartMonitorDeploymentCommandInput,
  type StartMonitorDeploymentCommandOutput,
  StartMonitorDeploymentCommand,
} from "./commands/StartMonitorDeploymentCommand";
import {
  type StartMultiplexCommandInput,
  type StartMultiplexCommandOutput,
  StartMultiplexCommand,
} from "./commands/StartMultiplexCommand";
import {
  type StartUpdateSignalMapCommandInput,
  type StartUpdateSignalMapCommandOutput,
  StartUpdateSignalMapCommand,
} from "./commands/StartUpdateSignalMapCommand";
import {
  type StopChannelCommandInput,
  type StopChannelCommandOutput,
  StopChannelCommand,
} from "./commands/StopChannelCommand";
import {
  type StopInputDeviceCommandInput,
  type StopInputDeviceCommandOutput,
  StopInputDeviceCommand,
} from "./commands/StopInputDeviceCommand";
import {
  type StopMultiplexCommandInput,
  type StopMultiplexCommandOutput,
  StopMultiplexCommand,
} from "./commands/StopMultiplexCommand";
import {
  type TransferInputDeviceCommandInput,
  type TransferInputDeviceCommandOutput,
  TransferInputDeviceCommand,
} from "./commands/TransferInputDeviceCommand";
import {
  type UpdateAccountConfigurationCommandInput,
  type UpdateAccountConfigurationCommandOutput,
  UpdateAccountConfigurationCommand,
} from "./commands/UpdateAccountConfigurationCommand";
import {
  type UpdateChannelClassCommandInput,
  type UpdateChannelClassCommandOutput,
  UpdateChannelClassCommand,
} from "./commands/UpdateChannelClassCommand";
import {
  type UpdateChannelCommandInput,
  type UpdateChannelCommandOutput,
  UpdateChannelCommand,
} from "./commands/UpdateChannelCommand";
import {
  type UpdateChannelPlacementGroupCommandInput,
  type UpdateChannelPlacementGroupCommandOutput,
  UpdateChannelPlacementGroupCommand,
} from "./commands/UpdateChannelPlacementGroupCommand";
import {
  type UpdateCloudWatchAlarmTemplateCommandInput,
  type UpdateCloudWatchAlarmTemplateCommandOutput,
  UpdateCloudWatchAlarmTemplateCommand,
} from "./commands/UpdateCloudWatchAlarmTemplateCommand";
import {
  type UpdateCloudWatchAlarmTemplateGroupCommandInput,
  type UpdateCloudWatchAlarmTemplateGroupCommandOutput,
  UpdateCloudWatchAlarmTemplateGroupCommand,
} from "./commands/UpdateCloudWatchAlarmTemplateGroupCommand";
import {
  type UpdateClusterCommandInput,
  type UpdateClusterCommandOutput,
  UpdateClusterCommand,
} from "./commands/UpdateClusterCommand";
import {
  type UpdateEventBridgeRuleTemplateCommandInput,
  type UpdateEventBridgeRuleTemplateCommandOutput,
  UpdateEventBridgeRuleTemplateCommand,
} from "./commands/UpdateEventBridgeRuleTemplateCommand";
import {
  type UpdateEventBridgeRuleTemplateGroupCommandInput,
  type UpdateEventBridgeRuleTemplateGroupCommandOutput,
  UpdateEventBridgeRuleTemplateGroupCommand,
} from "./commands/UpdateEventBridgeRuleTemplateGroupCommand";
import {
  type UpdateInputCommandInput,
  type UpdateInputCommandOutput,
  UpdateInputCommand,
} from "./commands/UpdateInputCommand";
import {
  type UpdateInputDeviceCommandInput,
  type UpdateInputDeviceCommandOutput,
  UpdateInputDeviceCommand,
} from "./commands/UpdateInputDeviceCommand";
import {
  type UpdateInputSecurityGroupCommandInput,
  type UpdateInputSecurityGroupCommandOutput,
  UpdateInputSecurityGroupCommand,
} from "./commands/UpdateInputSecurityGroupCommand";
import {
  type UpdateMultiplexCommandInput,
  type UpdateMultiplexCommandOutput,
  UpdateMultiplexCommand,
} from "./commands/UpdateMultiplexCommand";
import {
  type UpdateMultiplexProgramCommandInput,
  type UpdateMultiplexProgramCommandOutput,
  UpdateMultiplexProgramCommand,
} from "./commands/UpdateMultiplexProgramCommand";
import {
  type UpdateNetworkCommandInput,
  type UpdateNetworkCommandOutput,
  UpdateNetworkCommand,
} from "./commands/UpdateNetworkCommand";
import {
  type UpdateNodeCommandInput,
  type UpdateNodeCommandOutput,
  UpdateNodeCommand,
} from "./commands/UpdateNodeCommand";
import {
  type UpdateNodeStateCommandInput,
  type UpdateNodeStateCommandOutput,
  UpdateNodeStateCommand,
} from "./commands/UpdateNodeStateCommand";
import {
  type UpdateReservationCommandInput,
  type UpdateReservationCommandOutput,
  UpdateReservationCommand,
} from "./commands/UpdateReservationCommand";
import {
  type UpdateSdiSourceCommandInput,
  type UpdateSdiSourceCommandOutput,
  UpdateSdiSourceCommand,
} from "./commands/UpdateSdiSourceCommand";
import { MediaLiveClient } from "./MediaLiveClient";
import type { MediaLiveServiceException } from "./models/MediaLiveServiceException";
import { paginateDescribeSchedule } from "./pagination/DescribeSchedulePaginator";
import { paginateListAlerts } from "./pagination/ListAlertsPaginator";
import { paginateListChannelPlacementGroups } from "./pagination/ListChannelPlacementGroupsPaginator";
import { paginateListChannels } from "./pagination/ListChannelsPaginator";
import { paginateListCloudWatchAlarmTemplateGroups } from "./pagination/ListCloudWatchAlarmTemplateGroupsPaginator";
import { paginateListCloudWatchAlarmTemplates } from "./pagination/ListCloudWatchAlarmTemplatesPaginator";
import { paginateListClusterAlerts } from "./pagination/ListClusterAlertsPaginator";
import { paginateListClusters } from "./pagination/ListClustersPaginator";
import { paginateListEventBridgeRuleTemplateGroups } from "./pagination/ListEventBridgeRuleTemplateGroupsPaginator";
import { paginateListEventBridgeRuleTemplates } from "./pagination/ListEventBridgeRuleTemplatesPaginator";
import { paginateListInputDevices } from "./pagination/ListInputDevicesPaginator";
import { paginateListInputDeviceTransfers } from "./pagination/ListInputDeviceTransfersPaginator";
import { paginateListInputSecurityGroups } from "./pagination/ListInputSecurityGroupsPaginator";
import { paginateListInputs } from "./pagination/ListInputsPaginator";
import { paginateListMultiplexAlerts } from "./pagination/ListMultiplexAlertsPaginator";
import { paginateListMultiplexes } from "./pagination/ListMultiplexesPaginator";
import { paginateListMultiplexPrograms } from "./pagination/ListMultiplexProgramsPaginator";
import { paginateListNetworks } from "./pagination/ListNetworksPaginator";
import { paginateListNodes } from "./pagination/ListNodesPaginator";
import { paginateListOfferings } from "./pagination/ListOfferingsPaginator";
import { paginateListReservations } from "./pagination/ListReservationsPaginator";
import { paginateListSdiSources } from "./pagination/ListSdiSourcesPaginator";
import { paginateListSignalMaps } from "./pagination/ListSignalMapsPaginator";
import { waitUntilChannelCreated } from "./waiters/waitForChannelCreated";
import { waitUntilChannelDeleted } from "./waiters/waitForChannelDeleted";
import { waitUntilChannelPlacementGroupAssigned } from "./waiters/waitForChannelPlacementGroupAssigned";
import { waitUntilChannelPlacementGroupDeleted } from "./waiters/waitForChannelPlacementGroupDeleted";
import { waitUntilChannelPlacementGroupUnassigned } from "./waiters/waitForChannelPlacementGroupUnassigned";
import { waitUntilChannelRunning } from "./waiters/waitForChannelRunning";
import { waitUntilChannelStopped } from "./waiters/waitForChannelStopped";
import { waitUntilClusterCreated } from "./waiters/waitForClusterCreated";
import { waitUntilClusterDeleted } from "./waiters/waitForClusterDeleted";
import { waitUntilInputAttached } from "./waiters/waitForInputAttached";
import { waitUntilInputDeleted } from "./waiters/waitForInputDeleted";
import { waitUntilInputDetached } from "./waiters/waitForInputDetached";
import { waitUntilMultiplexCreated } from "./waiters/waitForMultiplexCreated";
import { waitUntilMultiplexDeleted } from "./waiters/waitForMultiplexDeleted";
import { waitUntilMultiplexRunning } from "./waiters/waitForMultiplexRunning";
import { waitUntilMultiplexStopped } from "./waiters/waitForMultiplexStopped";
import { waitUntilNodeDeregistered } from "./waiters/waitForNodeDeregistered";
import { waitUntilNodeRegistered } from "./waiters/waitForNodeRegistered";
import { waitUntilSignalMapCreated } from "./waiters/waitForSignalMapCreated";
import { waitUntilSignalMapMonitorDeleted } from "./waiters/waitForSignalMapMonitorDeleted";
import { waitUntilSignalMapMonitorDeployed } from "./waiters/waitForSignalMapMonitorDeployed";
import { waitUntilSignalMapUpdated } from "./waiters/waitForSignalMapUpdated";

const commands = {
  AcceptInputDeviceTransferCommand,
  BatchDeleteCommand,
  BatchStartCommand,
  BatchStopCommand,
  BatchUpdateScheduleCommand,
  CancelInputDeviceTransferCommand,
  ClaimDeviceCommand,
  CreateChannelCommand,
  CreateChannelPlacementGroupCommand,
  CreateCloudWatchAlarmTemplateCommand,
  CreateCloudWatchAlarmTemplateGroupCommand,
  CreateClusterCommand,
  CreateEventBridgeRuleTemplateCommand,
  CreateEventBridgeRuleTemplateGroupCommand,
  CreateInputCommand,
  CreateInputSecurityGroupCommand,
  CreateMultiplexCommand,
  CreateMultiplexProgramCommand,
  CreateNetworkCommand,
  CreateNodeCommand,
  CreateNodeRegistrationScriptCommand,
  CreatePartnerInputCommand,
  CreateSdiSourceCommand,
  CreateSignalMapCommand,
  CreateTagsCommand,
  DeleteChannelCommand,
  DeleteChannelPlacementGroupCommand,
  DeleteCloudWatchAlarmTemplateCommand,
  DeleteCloudWatchAlarmTemplateGroupCommand,
  DeleteClusterCommand,
  DeleteEventBridgeRuleTemplateCommand,
  DeleteEventBridgeRuleTemplateGroupCommand,
  DeleteInputCommand,
  DeleteInputSecurityGroupCommand,
  DeleteMultiplexCommand,
  DeleteMultiplexProgramCommand,
  DeleteNetworkCommand,
  DeleteNodeCommand,
  DeleteReservationCommand,
  DeleteScheduleCommand,
  DeleteSdiSourceCommand,
  DeleteSignalMapCommand,
  DeleteTagsCommand,
  DescribeAccountConfigurationCommand,
  DescribeChannelCommand,
  DescribeChannelPlacementGroupCommand,
  DescribeClusterCommand,
  DescribeInputCommand,
  DescribeInputDeviceCommand,
  DescribeInputDeviceThumbnailCommand,
  DescribeInputSecurityGroupCommand,
  DescribeMultiplexCommand,
  DescribeMultiplexProgramCommand,
  DescribeNetworkCommand,
  DescribeNodeCommand,
  DescribeOfferingCommand,
  DescribeReservationCommand,
  DescribeScheduleCommand,
  DescribeSdiSourceCommand,
  DescribeThumbnailsCommand,
  GetCloudWatchAlarmTemplateCommand,
  GetCloudWatchAlarmTemplateGroupCommand,
  GetEventBridgeRuleTemplateCommand,
  GetEventBridgeRuleTemplateGroupCommand,
  GetSignalMapCommand,
  ListAlertsCommand,
  ListChannelPlacementGroupsCommand,
  ListChannelsCommand,
  ListCloudWatchAlarmTemplateGroupsCommand,
  ListCloudWatchAlarmTemplatesCommand,
  ListClusterAlertsCommand,
  ListClustersCommand,
  ListEventBridgeRuleTemplateGroupsCommand,
  ListEventBridgeRuleTemplatesCommand,
  ListInputDevicesCommand,
  ListInputDeviceTransfersCommand,
  ListInputsCommand,
  ListInputSecurityGroupsCommand,
  ListMultiplexAlertsCommand,
  ListMultiplexesCommand,
  ListMultiplexProgramsCommand,
  ListNetworksCommand,
  ListNodesCommand,
  ListOfferingsCommand,
  ListReservationsCommand,
  ListSdiSourcesCommand,
  ListSignalMapsCommand,
  ListTagsForResourceCommand,
  ListVersionsCommand,
  PurchaseOfferingCommand,
  RebootInputDeviceCommand,
  RejectInputDeviceTransferCommand,
  RestartChannelPipelinesCommand,
  StartChannelCommand,
  StartDeleteMonitorDeploymentCommand,
  StartInputDeviceCommand,
  StartInputDeviceMaintenanceWindowCommand,
  StartMonitorDeploymentCommand,
  StartMultiplexCommand,
  StartUpdateSignalMapCommand,
  StopChannelCommand,
  StopInputDeviceCommand,
  StopMultiplexCommand,
  TransferInputDeviceCommand,
  UpdateAccountConfigurationCommand,
  UpdateChannelCommand,
  UpdateChannelClassCommand,
  UpdateChannelPlacementGroupCommand,
  UpdateCloudWatchAlarmTemplateCommand,
  UpdateCloudWatchAlarmTemplateGroupCommand,
  UpdateClusterCommand,
  UpdateEventBridgeRuleTemplateCommand,
  UpdateEventBridgeRuleTemplateGroupCommand,
  UpdateInputCommand,
  UpdateInputDeviceCommand,
  UpdateInputSecurityGroupCommand,
  UpdateMultiplexCommand,
  UpdateMultiplexProgramCommand,
  UpdateNetworkCommand,
  UpdateNodeCommand,
  UpdateNodeStateCommand,
  UpdateReservationCommand,
  UpdateSdiSourceCommand,
};
const paginators = {
  paginateDescribeSchedule,
  paginateListAlerts,
  paginateListChannelPlacementGroups,
  paginateListChannels,
  paginateListCloudWatchAlarmTemplateGroups,
  paginateListCloudWatchAlarmTemplates,
  paginateListClusterAlerts,
  paginateListClusters,
  paginateListEventBridgeRuleTemplateGroups,
  paginateListEventBridgeRuleTemplates,
  paginateListInputDevices,
  paginateListInputDeviceTransfers,
  paginateListInputs,
  paginateListInputSecurityGroups,
  paginateListMultiplexAlerts,
  paginateListMultiplexes,
  paginateListMultiplexPrograms,
  paginateListNetworks,
  paginateListNodes,
  paginateListOfferings,
  paginateListReservations,
  paginateListSdiSources,
  paginateListSignalMaps,
};
const waiters = {
  waitUntilChannelCreated,
  waitUntilChannelDeleted,
  waitUntilChannelRunning,
  waitUntilChannelStopped,
  waitUntilChannelPlacementGroupAssigned,
  waitUntilChannelPlacementGroupDeleted,
  waitUntilChannelPlacementGroupUnassigned,
  waitUntilClusterCreated,
  waitUntilClusterDeleted,
  waitUntilInputAttached,
  waitUntilInputDeleted,
  waitUntilInputDetached,
  waitUntilMultiplexCreated,
  waitUntilMultiplexDeleted,
  waitUntilMultiplexRunning,
  waitUntilMultiplexStopped,
  waitUntilNodeDeregistered,
  waitUntilNodeRegistered,
  waitUntilSignalMapCreated,
  waitUntilSignalMapMonitorDeleted,
  waitUntilSignalMapMonitorDeployed,
  waitUntilSignalMapUpdated,
};

/**
 * @public
 */
export interface MediaLiveRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MediaLive {
  /**
   * @see {@link AcceptInputDeviceTransferCommand}
   */
  acceptInputDeviceTransfer(
    args: AcceptInputDeviceTransferCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<AcceptInputDeviceTransferCommandOutput>;
  acceptInputDeviceTransfer(
    args: AcceptInputDeviceTransferCommandInput,
    cb: (err: any, data?: AcceptInputDeviceTransferCommandOutput) => void
  ): void;
  acceptInputDeviceTransfer(
    args: AcceptInputDeviceTransferCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: AcceptInputDeviceTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteCommand}
   */
  batchDelete(): Promise<BatchDeleteCommandOutput>;
  batchDelete(
    args: BatchDeleteCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<BatchDeleteCommandOutput>;
  batchDelete(
    args: BatchDeleteCommandInput,
    cb: (err: any, data?: BatchDeleteCommandOutput) => void
  ): void;
  batchDelete(
    args: BatchDeleteCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: BatchDeleteCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStartCommand}
   */
  batchStart(): Promise<BatchStartCommandOutput>;
  batchStart(
    args: BatchStartCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<BatchStartCommandOutput>;
  batchStart(
    args: BatchStartCommandInput,
    cb: (err: any, data?: BatchStartCommandOutput) => void
  ): void;
  batchStart(
    args: BatchStartCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: BatchStartCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStopCommand}
   */
  batchStop(): Promise<BatchStopCommandOutput>;
  batchStop(
    args: BatchStopCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<BatchStopCommandOutput>;
  batchStop(
    args: BatchStopCommandInput,
    cb: (err: any, data?: BatchStopCommandOutput) => void
  ): void;
  batchStop(
    args: BatchStopCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: BatchStopCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateScheduleCommand}
   */
  batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<BatchUpdateScheduleCommandOutput>;
  batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void
  ): void;
  batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelInputDeviceTransferCommand}
   */
  cancelInputDeviceTransfer(
    args: CancelInputDeviceTransferCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CancelInputDeviceTransferCommandOutput>;
  cancelInputDeviceTransfer(
    args: CancelInputDeviceTransferCommandInput,
    cb: (err: any, data?: CancelInputDeviceTransferCommandOutput) => void
  ): void;
  cancelInputDeviceTransfer(
    args: CancelInputDeviceTransferCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CancelInputDeviceTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link ClaimDeviceCommand}
   */
  claimDevice(): Promise<ClaimDeviceCommandOutput>;
  claimDevice(
    args: ClaimDeviceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ClaimDeviceCommandOutput>;
  claimDevice(
    args: ClaimDeviceCommandInput,
    cb: (err: any, data?: ClaimDeviceCommandOutput) => void
  ): void;
  claimDevice(
    args: ClaimDeviceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ClaimDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelPlacementGroupCommand}
   */
  createChannelPlacementGroup(
    args: CreateChannelPlacementGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateChannelPlacementGroupCommandOutput>;
  createChannelPlacementGroup(
    args: CreateChannelPlacementGroupCommandInput,
    cb: (err: any, data?: CreateChannelPlacementGroupCommandOutput) => void
  ): void;
  createChannelPlacementGroup(
    args: CreateChannelPlacementGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudWatchAlarmTemplateCommand}
   */
  createCloudWatchAlarmTemplate(
    args: CreateCloudWatchAlarmTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateCloudWatchAlarmTemplateCommandOutput>;
  createCloudWatchAlarmTemplate(
    args: CreateCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  createCloudWatchAlarmTemplate(
    args: CreateCloudWatchAlarmTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudWatchAlarmTemplateGroupCommand}
   */
  createCloudWatchAlarmTemplateGroup(
    args: CreateCloudWatchAlarmTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateCloudWatchAlarmTemplateGroupCommandOutput>;
  createCloudWatchAlarmTemplateGroup(
    args: CreateCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  createCloudWatchAlarmTemplateGroup(
    args: CreateCloudWatchAlarmTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventBridgeRuleTemplateCommand}
   */
  createEventBridgeRuleTemplate(
    args: CreateEventBridgeRuleTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateEventBridgeRuleTemplateCommandOutput>;
  createEventBridgeRuleTemplate(
    args: CreateEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  createEventBridgeRuleTemplate(
    args: CreateEventBridgeRuleTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventBridgeRuleTemplateGroupCommand}
   */
  createEventBridgeRuleTemplateGroup(
    args: CreateEventBridgeRuleTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateEventBridgeRuleTemplateGroupCommandOutput>;
  createEventBridgeRuleTemplateGroup(
    args: CreateEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  createEventBridgeRuleTemplateGroup(
    args: CreateEventBridgeRuleTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInputCommand}
   */
  createInput(): Promise<CreateInputCommandOutput>;
  createInput(
    args: CreateInputCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateInputCommandOutput>;
  createInput(
    args: CreateInputCommandInput,
    cb: (err: any, data?: CreateInputCommandOutput) => void
  ): void;
  createInput(
    args: CreateInputCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateInputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInputSecurityGroupCommand}
   */
  createInputSecurityGroup(): Promise<CreateInputSecurityGroupCommandOutput>;
  createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateInputSecurityGroupCommandOutput>;
  createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void
  ): void;
  createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultiplexCommand}
   */
  createMultiplex(
    args: CreateMultiplexCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateMultiplexCommandOutput>;
  createMultiplex(
    args: CreateMultiplexCommandInput,
    cb: (err: any, data?: CreateMultiplexCommandOutput) => void
  ): void;
  createMultiplex(
    args: CreateMultiplexCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultiplexProgramCommand}
   */
  createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateMultiplexProgramCommandOutput>;
  createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void
  ): void;
  createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkCommand}
   */
  createNetwork(): Promise<CreateNetworkCommandOutput>;
  createNetwork(
    args: CreateNetworkCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateNetworkCommandOutput>;
  createNetwork(
    args: CreateNetworkCommandInput,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;
  createNetwork(
    args: CreateNetworkCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNodeCommand}
   */
  createNode(
    args: CreateNodeCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateNodeCommandOutput>;
  createNode(
    args: CreateNodeCommandInput,
    cb: (err: any, data?: CreateNodeCommandOutput) => void
  ): void;
  createNode(
    args: CreateNodeCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNodeRegistrationScriptCommand}
   */
  createNodeRegistrationScript(
    args: CreateNodeRegistrationScriptCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateNodeRegistrationScriptCommandOutput>;
  createNodeRegistrationScript(
    args: CreateNodeRegistrationScriptCommandInput,
    cb: (err: any, data?: CreateNodeRegistrationScriptCommandOutput) => void
  ): void;
  createNodeRegistrationScript(
    args: CreateNodeRegistrationScriptCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateNodeRegistrationScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnerInputCommand}
   */
  createPartnerInput(
    args: CreatePartnerInputCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreatePartnerInputCommandOutput>;
  createPartnerInput(
    args: CreatePartnerInputCommandInput,
    cb: (err: any, data?: CreatePartnerInputCommandOutput) => void
  ): void;
  createPartnerInput(
    args: CreatePartnerInputCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreatePartnerInputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSdiSourceCommand}
   */
  createSdiSource(): Promise<CreateSdiSourceCommandOutput>;
  createSdiSource(
    args: CreateSdiSourceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateSdiSourceCommandOutput>;
  createSdiSource(
    args: CreateSdiSourceCommandInput,
    cb: (err: any, data?: CreateSdiSourceCommandOutput) => void
  ): void;
  createSdiSource(
    args: CreateSdiSourceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateSdiSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSignalMapCommand}
   */
  createSignalMap(
    args: CreateSignalMapCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateSignalMapCommandOutput>;
  createSignalMap(
    args: CreateSignalMapCommandInput,
    cb: (err: any, data?: CreateSignalMapCommandOutput) => void
  ): void;
  createSignalMap(
    args: CreateSignalMapCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<CreateTagsCommandOutput>;
  createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  createTags(
    args: CreateTagsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelPlacementGroupCommand}
   */
  deleteChannelPlacementGroup(
    args: DeleteChannelPlacementGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteChannelPlacementGroupCommandOutput>;
  deleteChannelPlacementGroup(
    args: DeleteChannelPlacementGroupCommandInput,
    cb: (err: any, data?: DeleteChannelPlacementGroupCommandOutput) => void
  ): void;
  deleteChannelPlacementGroup(
    args: DeleteChannelPlacementGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudWatchAlarmTemplateCommand}
   */
  deleteCloudWatchAlarmTemplate(
    args: DeleteCloudWatchAlarmTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteCloudWatchAlarmTemplateCommandOutput>;
  deleteCloudWatchAlarmTemplate(
    args: DeleteCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  deleteCloudWatchAlarmTemplate(
    args: DeleteCloudWatchAlarmTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudWatchAlarmTemplateGroupCommand}
   */
  deleteCloudWatchAlarmTemplateGroup(
    args: DeleteCloudWatchAlarmTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteCloudWatchAlarmTemplateGroupCommandOutput>;
  deleteCloudWatchAlarmTemplateGroup(
    args: DeleteCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  deleteCloudWatchAlarmTemplateGroup(
    args: DeleteCloudWatchAlarmTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventBridgeRuleTemplateCommand}
   */
  deleteEventBridgeRuleTemplate(
    args: DeleteEventBridgeRuleTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteEventBridgeRuleTemplateCommandOutput>;
  deleteEventBridgeRuleTemplate(
    args: DeleteEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  deleteEventBridgeRuleTemplate(
    args: DeleteEventBridgeRuleTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventBridgeRuleTemplateGroupCommand}
   */
  deleteEventBridgeRuleTemplateGroup(
    args: DeleteEventBridgeRuleTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteEventBridgeRuleTemplateGroupCommandOutput>;
  deleteEventBridgeRuleTemplateGroup(
    args: DeleteEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  deleteEventBridgeRuleTemplateGroup(
    args: DeleteEventBridgeRuleTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInputCommand}
   */
  deleteInput(
    args: DeleteInputCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteInputCommandOutput>;
  deleteInput(
    args: DeleteInputCommandInput,
    cb: (err: any, data?: DeleteInputCommandOutput) => void
  ): void;
  deleteInput(
    args: DeleteInputCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInputSecurityGroupCommand}
   */
  deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteInputSecurityGroupCommandOutput>;
  deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void
  ): void;
  deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMultiplexCommand}
   */
  deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteMultiplexCommandOutput>;
  deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    cb: (err: any, data?: DeleteMultiplexCommandOutput) => void
  ): void;
  deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMultiplexProgramCommand}
   */
  deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteMultiplexProgramCommandOutput>;
  deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void
  ): void;
  deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkCommand}
   */
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteNetworkCommandOutput>;
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNodeCommand}
   */
  deleteNode(
    args: DeleteNodeCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteNodeCommandOutput>;
  deleteNode(
    args: DeleteNodeCommandInput,
    cb: (err: any, data?: DeleteNodeCommandOutput) => void
  ): void;
  deleteNode(
    args: DeleteNodeCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReservationCommand}
   */
  deleteReservation(
    args: DeleteReservationCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteReservationCommandOutput>;
  deleteReservation(
    args: DeleteReservationCommandInput,
    cb: (err: any, data?: DeleteReservationCommandOutput) => void
  ): void;
  deleteReservation(
    args: DeleteReservationCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduleCommand}
   */
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteScheduleCommandOutput>;
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSdiSourceCommand}
   */
  deleteSdiSource(
    args: DeleteSdiSourceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteSdiSourceCommandOutput>;
  deleteSdiSource(
    args: DeleteSdiSourceCommandInput,
    cb: (err: any, data?: DeleteSdiSourceCommandOutput) => void
  ): void;
  deleteSdiSource(
    args: DeleteSdiSourceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteSdiSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSignalMapCommand}
   */
  deleteSignalMap(
    args: DeleteSignalMapCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteSignalMapCommandOutput>;
  deleteSignalMap(
    args: DeleteSignalMapCommandInput,
    cb: (err: any, data?: DeleteSignalMapCommandOutput) => void
  ): void;
  deleteSignalMap(
    args: DeleteSignalMapCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountConfigurationCommand}
   */
  describeAccountConfiguration(): Promise<DescribeAccountConfigurationCommandOutput>;
  describeAccountConfiguration(
    args: DescribeAccountConfigurationCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeAccountConfigurationCommandOutput>;
  describeAccountConfiguration(
    args: DescribeAccountConfigurationCommandInput,
    cb: (err: any, data?: DescribeAccountConfigurationCommandOutput) => void
  ): void;
  describeAccountConfiguration(
    args: DescribeAccountConfigurationCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelPlacementGroupCommand}
   */
  describeChannelPlacementGroup(
    args: DescribeChannelPlacementGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeChannelPlacementGroupCommandOutput>;
  describeChannelPlacementGroup(
    args: DescribeChannelPlacementGroupCommandInput,
    cb: (err: any, data?: DescribeChannelPlacementGroupCommandOutput) => void
  ): void;
  describeChannelPlacementGroup(
    args: DescribeChannelPlacementGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputCommand}
   */
  describeInput(
    args: DescribeInputCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeInputCommandOutput>;
  describeInput(
    args: DescribeInputCommandInput,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;
  describeInput(
    args: DescribeInputCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputDeviceCommand}
   */
  describeInputDevice(
    args: DescribeInputDeviceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeInputDeviceCommandOutput>;
  describeInputDevice(
    args: DescribeInputDeviceCommandInput,
    cb: (err: any, data?: DescribeInputDeviceCommandOutput) => void
  ): void;
  describeInputDevice(
    args: DescribeInputDeviceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputDeviceThumbnailCommand}
   */
  describeInputDeviceThumbnail(
    args: DescribeInputDeviceThumbnailCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeInputDeviceThumbnailCommandOutput>;
  describeInputDeviceThumbnail(
    args: DescribeInputDeviceThumbnailCommandInput,
    cb: (err: any, data?: DescribeInputDeviceThumbnailCommandOutput) => void
  ): void;
  describeInputDeviceThumbnail(
    args: DescribeInputDeviceThumbnailCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeInputDeviceThumbnailCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputSecurityGroupCommand}
   */
  describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeInputSecurityGroupCommandOutput>;
  describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void
  ): void;
  describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiplexCommand}
   */
  describeMultiplex(
    args: DescribeMultiplexCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeMultiplexCommandOutput>;
  describeMultiplex(
    args: DescribeMultiplexCommandInput,
    cb: (err: any, data?: DescribeMultiplexCommandOutput) => void
  ): void;
  describeMultiplex(
    args: DescribeMultiplexCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiplexProgramCommand}
   */
  describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeMultiplexProgramCommandOutput>;
  describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void
  ): void;
  describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkCommand}
   */
  describeNetwork(
    args: DescribeNetworkCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeNetworkCommandOutput>;
  describeNetwork(
    args: DescribeNetworkCommandInput,
    cb: (err: any, data?: DescribeNetworkCommandOutput) => void
  ): void;
  describeNetwork(
    args: DescribeNetworkCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodeCommand}
   */
  describeNode(
    args: DescribeNodeCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeNodeCommandOutput>;
  describeNode(
    args: DescribeNodeCommandInput,
    cb: (err: any, data?: DescribeNodeCommandOutput) => void
  ): void;
  describeNode(
    args: DescribeNodeCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOfferingCommand}
   */
  describeOffering(
    args: DescribeOfferingCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeOfferingCommandOutput>;
  describeOffering(
    args: DescribeOfferingCommandInput,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  describeOffering(
    args: DescribeOfferingCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservationCommand}
   */
  describeReservation(
    args: DescribeReservationCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeReservationCommandOutput>;
  describeReservation(
    args: DescribeReservationCommandInput,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  describeReservation(
    args: DescribeReservationCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduleCommand}
   */
  describeSchedule(
    args: DescribeScheduleCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeScheduleCommandOutput>;
  describeSchedule(
    args: DescribeScheduleCommandInput,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;
  describeSchedule(
    args: DescribeScheduleCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSdiSourceCommand}
   */
  describeSdiSource(
    args: DescribeSdiSourceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeSdiSourceCommandOutput>;
  describeSdiSource(
    args: DescribeSdiSourceCommandInput,
    cb: (err: any, data?: DescribeSdiSourceCommandOutput) => void
  ): void;
  describeSdiSource(
    args: DescribeSdiSourceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeSdiSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThumbnailsCommand}
   */
  describeThumbnails(
    args: DescribeThumbnailsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<DescribeThumbnailsCommandOutput>;
  describeThumbnails(
    args: DescribeThumbnailsCommandInput,
    cb: (err: any, data?: DescribeThumbnailsCommandOutput) => void
  ): void;
  describeThumbnails(
    args: DescribeThumbnailsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: DescribeThumbnailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudWatchAlarmTemplateCommand}
   */
  getCloudWatchAlarmTemplate(
    args: GetCloudWatchAlarmTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<GetCloudWatchAlarmTemplateCommandOutput>;
  getCloudWatchAlarmTemplate(
    args: GetCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  getCloudWatchAlarmTemplate(
    args: GetCloudWatchAlarmTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudWatchAlarmTemplateGroupCommand}
   */
  getCloudWatchAlarmTemplateGroup(
    args: GetCloudWatchAlarmTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<GetCloudWatchAlarmTemplateGroupCommandOutput>;
  getCloudWatchAlarmTemplateGroup(
    args: GetCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  getCloudWatchAlarmTemplateGroup(
    args: GetCloudWatchAlarmTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventBridgeRuleTemplateCommand}
   */
  getEventBridgeRuleTemplate(
    args: GetEventBridgeRuleTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<GetEventBridgeRuleTemplateCommandOutput>;
  getEventBridgeRuleTemplate(
    args: GetEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: GetEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  getEventBridgeRuleTemplate(
    args: GetEventBridgeRuleTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: GetEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventBridgeRuleTemplateGroupCommand}
   */
  getEventBridgeRuleTemplateGroup(
    args: GetEventBridgeRuleTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<GetEventBridgeRuleTemplateGroupCommandOutput>;
  getEventBridgeRuleTemplateGroup(
    args: GetEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: GetEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  getEventBridgeRuleTemplateGroup(
    args: GetEventBridgeRuleTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: GetEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSignalMapCommand}
   */
  getSignalMap(
    args: GetSignalMapCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<GetSignalMapCommandOutput>;
  getSignalMap(
    args: GetSignalMapCommandInput,
    cb: (err: any, data?: GetSignalMapCommandOutput) => void
  ): void;
  getSignalMap(
    args: GetSignalMapCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: GetSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlertsCommand}
   */
  listAlerts(
    args: ListAlertsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListAlertsCommandOutput>;
  listAlerts(
    args: ListAlertsCommandInput,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;
  listAlerts(
    args: ListAlertsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelPlacementGroupsCommand}
   */
  listChannelPlacementGroups(
    args: ListChannelPlacementGroupsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListChannelPlacementGroupsCommandOutput>;
  listChannelPlacementGroups(
    args: ListChannelPlacementGroupsCommandInput,
    cb: (err: any, data?: ListChannelPlacementGroupsCommandOutput) => void
  ): void;
  listChannelPlacementGroups(
    args: ListChannelPlacementGroupsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListChannelPlacementGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudWatchAlarmTemplateGroupsCommand}
   */
  listCloudWatchAlarmTemplateGroups(): Promise<ListCloudWatchAlarmTemplateGroupsCommandOutput>;
  listCloudWatchAlarmTemplateGroups(
    args: ListCloudWatchAlarmTemplateGroupsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListCloudWatchAlarmTemplateGroupsCommandOutput>;
  listCloudWatchAlarmTemplateGroups(
    args: ListCloudWatchAlarmTemplateGroupsCommandInput,
    cb: (err: any, data?: ListCloudWatchAlarmTemplateGroupsCommandOutput) => void
  ): void;
  listCloudWatchAlarmTemplateGroups(
    args: ListCloudWatchAlarmTemplateGroupsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListCloudWatchAlarmTemplateGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudWatchAlarmTemplatesCommand}
   */
  listCloudWatchAlarmTemplates(): Promise<ListCloudWatchAlarmTemplatesCommandOutput>;
  listCloudWatchAlarmTemplates(
    args: ListCloudWatchAlarmTemplatesCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListCloudWatchAlarmTemplatesCommandOutput>;
  listCloudWatchAlarmTemplates(
    args: ListCloudWatchAlarmTemplatesCommandInput,
    cb: (err: any, data?: ListCloudWatchAlarmTemplatesCommandOutput) => void
  ): void;
  listCloudWatchAlarmTemplates(
    args: ListCloudWatchAlarmTemplatesCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListCloudWatchAlarmTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterAlertsCommand}
   */
  listClusterAlerts(
    args: ListClusterAlertsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListClusterAlertsCommandOutput>;
  listClusterAlerts(
    args: ListClusterAlertsCommandInput,
    cb: (err: any, data?: ListClusterAlertsCommandOutput) => void
  ): void;
  listClusterAlerts(
    args: ListClusterAlertsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListClusterAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  listClusters(
    args: ListClustersCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBridgeRuleTemplateGroupsCommand}
   */
  listEventBridgeRuleTemplateGroups(): Promise<ListEventBridgeRuleTemplateGroupsCommandOutput>;
  listEventBridgeRuleTemplateGroups(
    args: ListEventBridgeRuleTemplateGroupsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListEventBridgeRuleTemplateGroupsCommandOutput>;
  listEventBridgeRuleTemplateGroups(
    args: ListEventBridgeRuleTemplateGroupsCommandInput,
    cb: (err: any, data?: ListEventBridgeRuleTemplateGroupsCommandOutput) => void
  ): void;
  listEventBridgeRuleTemplateGroups(
    args: ListEventBridgeRuleTemplateGroupsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListEventBridgeRuleTemplateGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBridgeRuleTemplatesCommand}
   */
  listEventBridgeRuleTemplates(): Promise<ListEventBridgeRuleTemplatesCommandOutput>;
  listEventBridgeRuleTemplates(
    args: ListEventBridgeRuleTemplatesCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListEventBridgeRuleTemplatesCommandOutput>;
  listEventBridgeRuleTemplates(
    args: ListEventBridgeRuleTemplatesCommandInput,
    cb: (err: any, data?: ListEventBridgeRuleTemplatesCommandOutput) => void
  ): void;
  listEventBridgeRuleTemplates(
    args: ListEventBridgeRuleTemplatesCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListEventBridgeRuleTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputDevicesCommand}
   */
  listInputDevices(): Promise<ListInputDevicesCommandOutput>;
  listInputDevices(
    args: ListInputDevicesCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListInputDevicesCommandOutput>;
  listInputDevices(
    args: ListInputDevicesCommandInput,
    cb: (err: any, data?: ListInputDevicesCommandOutput) => void
  ): void;
  listInputDevices(
    args: ListInputDevicesCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListInputDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputDeviceTransfersCommand}
   */
  listInputDeviceTransfers(
    args: ListInputDeviceTransfersCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListInputDeviceTransfersCommandOutput>;
  listInputDeviceTransfers(
    args: ListInputDeviceTransfersCommandInput,
    cb: (err: any, data?: ListInputDeviceTransfersCommandOutput) => void
  ): void;
  listInputDeviceTransfers(
    args: ListInputDeviceTransfersCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListInputDeviceTransfersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputsCommand}
   */
  listInputs(): Promise<ListInputsCommandOutput>;
  listInputs(
    args: ListInputsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListInputsCommandOutput>;
  listInputs(
    args: ListInputsCommandInput,
    cb: (err: any, data?: ListInputsCommandOutput) => void
  ): void;
  listInputs(
    args: ListInputsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListInputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputSecurityGroupsCommand}
   */
  listInputSecurityGroups(): Promise<ListInputSecurityGroupsCommandOutput>;
  listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListInputSecurityGroupsCommandOutput>;
  listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void
  ): void;
  listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultiplexAlertsCommand}
   */
  listMultiplexAlerts(
    args: ListMultiplexAlertsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListMultiplexAlertsCommandOutput>;
  listMultiplexAlerts(
    args: ListMultiplexAlertsCommandInput,
    cb: (err: any, data?: ListMultiplexAlertsCommandOutput) => void
  ): void;
  listMultiplexAlerts(
    args: ListMultiplexAlertsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListMultiplexAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultiplexesCommand}
   */
  listMultiplexes(): Promise<ListMultiplexesCommandOutput>;
  listMultiplexes(
    args: ListMultiplexesCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListMultiplexesCommandOutput>;
  listMultiplexes(
    args: ListMultiplexesCommandInput,
    cb: (err: any, data?: ListMultiplexesCommandOutput) => void
  ): void;
  listMultiplexes(
    args: ListMultiplexesCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListMultiplexesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultiplexProgramsCommand}
   */
  listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListMultiplexProgramsCommandOutput>;
  listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void
  ): void;
  listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworksCommand}
   */
  listNetworks(): Promise<ListNetworksCommandOutput>;
  listNetworks(
    args: ListNetworksCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListNetworksCommandOutput>;
  listNetworks(
    args: ListNetworksCommandInput,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;
  listNetworks(
    args: ListNetworksCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(
    args: ListNodesCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListNodesCommandOutput>;
  listNodes(
    args: ListNodesCommandInput,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  listNodes(
    args: ListNodesCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingsCommand}
   */
  listOfferings(): Promise<ListOfferingsCommandOutput>;
  listOfferings(
    args: ListOfferingsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListOfferingsCommandOutput>;
  listOfferings(
    args: ListOfferingsCommandInput,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;
  listOfferings(
    args: ListOfferingsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReservationsCommand}
   */
  listReservations(): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  listReservations(
    args: ListReservationsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSdiSourcesCommand}
   */
  listSdiSources(): Promise<ListSdiSourcesCommandOutput>;
  listSdiSources(
    args: ListSdiSourcesCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListSdiSourcesCommandOutput>;
  listSdiSources(
    args: ListSdiSourcesCommandInput,
    cb: (err: any, data?: ListSdiSourcesCommandOutput) => void
  ): void;
  listSdiSources(
    args: ListSdiSourcesCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListSdiSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSignalMapsCommand}
   */
  listSignalMaps(): Promise<ListSignalMapsCommandOutput>;
  listSignalMaps(
    args: ListSignalMapsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListSignalMapsCommandOutput>;
  listSignalMaps(
    args: ListSignalMapsCommandInput,
    cb: (err: any, data?: ListSignalMapsCommandOutput) => void
  ): void;
  listSignalMaps(
    args: ListSignalMapsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListSignalMapsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVersionsCommand}
   */
  listVersions(): Promise<ListVersionsCommandOutput>;
  listVersions(
    args: ListVersionsCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<ListVersionsCommandOutput>;
  listVersions(
    args: ListVersionsCommandInput,
    cb: (err: any, data?: ListVersionsCommandOutput) => void
  ): void;
  listVersions(
    args: ListVersionsCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: ListVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseOfferingCommand}
   */
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<PurchaseOfferingCommandOutput>;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootInputDeviceCommand}
   */
  rebootInputDevice(
    args: RebootInputDeviceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<RebootInputDeviceCommandOutput>;
  rebootInputDevice(
    args: RebootInputDeviceCommandInput,
    cb: (err: any, data?: RebootInputDeviceCommandOutput) => void
  ): void;
  rebootInputDevice(
    args: RebootInputDeviceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: RebootInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectInputDeviceTransferCommand}
   */
  rejectInputDeviceTransfer(
    args: RejectInputDeviceTransferCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<RejectInputDeviceTransferCommandOutput>;
  rejectInputDeviceTransfer(
    args: RejectInputDeviceTransferCommandInput,
    cb: (err: any, data?: RejectInputDeviceTransferCommandOutput) => void
  ): void;
  rejectInputDeviceTransfer(
    args: RejectInputDeviceTransferCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: RejectInputDeviceTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartChannelPipelinesCommand}
   */
  restartChannelPipelines(
    args: RestartChannelPipelinesCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<RestartChannelPipelinesCommandOutput>;
  restartChannelPipelines(
    args: RestartChannelPipelinesCommandInput,
    cb: (err: any, data?: RestartChannelPipelinesCommandOutput) => void
  ): void;
  restartChannelPipelines(
    args: RestartChannelPipelinesCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: RestartChannelPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartChannelCommand}
   */
  startChannel(
    args: StartChannelCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StartChannelCommandOutput>;
  startChannel(
    args: StartChannelCommandInput,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;
  startChannel(
    args: StartChannelCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeleteMonitorDeploymentCommand}
   */
  startDeleteMonitorDeployment(
    args: StartDeleteMonitorDeploymentCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StartDeleteMonitorDeploymentCommandOutput>;
  startDeleteMonitorDeployment(
    args: StartDeleteMonitorDeploymentCommandInput,
    cb: (err: any, data?: StartDeleteMonitorDeploymentCommandOutput) => void
  ): void;
  startDeleteMonitorDeployment(
    args: StartDeleteMonitorDeploymentCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StartDeleteMonitorDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInputDeviceCommand}
   */
  startInputDevice(
    args: StartInputDeviceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StartInputDeviceCommandOutput>;
  startInputDevice(
    args: StartInputDeviceCommandInput,
    cb: (err: any, data?: StartInputDeviceCommandOutput) => void
  ): void;
  startInputDevice(
    args: StartInputDeviceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StartInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInputDeviceMaintenanceWindowCommand}
   */
  startInputDeviceMaintenanceWindow(
    args: StartInputDeviceMaintenanceWindowCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StartInputDeviceMaintenanceWindowCommandOutput>;
  startInputDeviceMaintenanceWindow(
    args: StartInputDeviceMaintenanceWindowCommandInput,
    cb: (err: any, data?: StartInputDeviceMaintenanceWindowCommandOutput) => void
  ): void;
  startInputDeviceMaintenanceWindow(
    args: StartInputDeviceMaintenanceWindowCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StartInputDeviceMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMonitorDeploymentCommand}
   */
  startMonitorDeployment(
    args: StartMonitorDeploymentCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StartMonitorDeploymentCommandOutput>;
  startMonitorDeployment(
    args: StartMonitorDeploymentCommandInput,
    cb: (err: any, data?: StartMonitorDeploymentCommandOutput) => void
  ): void;
  startMonitorDeployment(
    args: StartMonitorDeploymentCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StartMonitorDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMultiplexCommand}
   */
  startMultiplex(
    args: StartMultiplexCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StartMultiplexCommandOutput>;
  startMultiplex(
    args: StartMultiplexCommandInput,
    cb: (err: any, data?: StartMultiplexCommandOutput) => void
  ): void;
  startMultiplex(
    args: StartMultiplexCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StartMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link StartUpdateSignalMapCommand}
   */
  startUpdateSignalMap(
    args: StartUpdateSignalMapCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StartUpdateSignalMapCommandOutput>;
  startUpdateSignalMap(
    args: StartUpdateSignalMapCommandInput,
    cb: (err: any, data?: StartUpdateSignalMapCommandOutput) => void
  ): void;
  startUpdateSignalMap(
    args: StartUpdateSignalMapCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StartUpdateSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link StopChannelCommand}
   */
  stopChannel(
    args: StopChannelCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StopChannelCommandOutput>;
  stopChannel(
    args: StopChannelCommandInput,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;
  stopChannel(
    args: StopChannelCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInputDeviceCommand}
   */
  stopInputDevice(
    args: StopInputDeviceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StopInputDeviceCommandOutput>;
  stopInputDevice(
    args: StopInputDeviceCommandInput,
    cb: (err: any, data?: StopInputDeviceCommandOutput) => void
  ): void;
  stopInputDevice(
    args: StopInputDeviceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StopInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMultiplexCommand}
   */
  stopMultiplex(
    args: StopMultiplexCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<StopMultiplexCommandOutput>;
  stopMultiplex(
    args: StopMultiplexCommandInput,
    cb: (err: any, data?: StopMultiplexCommandOutput) => void
  ): void;
  stopMultiplex(
    args: StopMultiplexCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: StopMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link TransferInputDeviceCommand}
   */
  transferInputDevice(
    args: TransferInputDeviceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<TransferInputDeviceCommandOutput>;
  transferInputDevice(
    args: TransferInputDeviceCommandInput,
    cb: (err: any, data?: TransferInputDeviceCommandOutput) => void
  ): void;
  transferInputDevice(
    args: TransferInputDeviceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: TransferInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountConfigurationCommand}
   */
  updateAccountConfiguration(): Promise<UpdateAccountConfigurationCommandOutput>;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateAccountConfigurationCommandOutput>;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    cb: (err: any, data?: UpdateAccountConfigurationCommandOutput) => void
  ): void;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelClassCommand}
   */
  updateChannelClass(
    args: UpdateChannelClassCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateChannelClassCommandOutput>;
  updateChannelClass(
    args: UpdateChannelClassCommandInput,
    cb: (err: any, data?: UpdateChannelClassCommandOutput) => void
  ): void;
  updateChannelClass(
    args: UpdateChannelClassCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateChannelClassCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelPlacementGroupCommand}
   */
  updateChannelPlacementGroup(
    args: UpdateChannelPlacementGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateChannelPlacementGroupCommandOutput>;
  updateChannelPlacementGroup(
    args: UpdateChannelPlacementGroupCommandInput,
    cb: (err: any, data?: UpdateChannelPlacementGroupCommandOutput) => void
  ): void;
  updateChannelPlacementGroup(
    args: UpdateChannelPlacementGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCloudWatchAlarmTemplateCommand}
   */
  updateCloudWatchAlarmTemplate(
    args: UpdateCloudWatchAlarmTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateCloudWatchAlarmTemplateCommandOutput>;
  updateCloudWatchAlarmTemplate(
    args: UpdateCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  updateCloudWatchAlarmTemplate(
    args: UpdateCloudWatchAlarmTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCloudWatchAlarmTemplateGroupCommand}
   */
  updateCloudWatchAlarmTemplateGroup(
    args: UpdateCloudWatchAlarmTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateCloudWatchAlarmTemplateGroupCommandOutput>;
  updateCloudWatchAlarmTemplateGroup(
    args: UpdateCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  updateCloudWatchAlarmTemplateGroup(
    args: UpdateCloudWatchAlarmTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateClusterCommandOutput>;
  updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventBridgeRuleTemplateCommand}
   */
  updateEventBridgeRuleTemplate(
    args: UpdateEventBridgeRuleTemplateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateEventBridgeRuleTemplateCommandOutput>;
  updateEventBridgeRuleTemplate(
    args: UpdateEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  updateEventBridgeRuleTemplate(
    args: UpdateEventBridgeRuleTemplateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventBridgeRuleTemplateGroupCommand}
   */
  updateEventBridgeRuleTemplateGroup(
    args: UpdateEventBridgeRuleTemplateGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateEventBridgeRuleTemplateGroupCommandOutput>;
  updateEventBridgeRuleTemplateGroup(
    args: UpdateEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  updateEventBridgeRuleTemplateGroup(
    args: UpdateEventBridgeRuleTemplateGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInputCommand}
   */
  updateInput(
    args: UpdateInputCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateInputCommandOutput>;
  updateInput(
    args: UpdateInputCommandInput,
    cb: (err: any, data?: UpdateInputCommandOutput) => void
  ): void;
  updateInput(
    args: UpdateInputCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateInputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInputDeviceCommand}
   */
  updateInputDevice(
    args: UpdateInputDeviceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateInputDeviceCommandOutput>;
  updateInputDevice(
    args: UpdateInputDeviceCommandInput,
    cb: (err: any, data?: UpdateInputDeviceCommandOutput) => void
  ): void;
  updateInputDevice(
    args: UpdateInputDeviceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInputSecurityGroupCommand}
   */
  updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateInputSecurityGroupCommandOutput>;
  updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void
  ): void;
  updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMultiplexCommand}
   */
  updateMultiplex(
    args: UpdateMultiplexCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateMultiplexCommandOutput>;
  updateMultiplex(
    args: UpdateMultiplexCommandInput,
    cb: (err: any, data?: UpdateMultiplexCommandOutput) => void
  ): void;
  updateMultiplex(
    args: UpdateMultiplexCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMultiplexProgramCommand}
   */
  updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateMultiplexProgramCommandOutput>;
  updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void
  ): void;
  updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkCommand}
   */
  updateNetwork(
    args: UpdateNetworkCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateNetworkCommandOutput>;
  updateNetwork(
    args: UpdateNetworkCommandInput,
    cb: (err: any, data?: UpdateNetworkCommandOutput) => void
  ): void;
  updateNetwork(
    args: UpdateNetworkCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNodeCommand}
   */
  updateNode(
    args: UpdateNodeCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateNodeCommandOutput>;
  updateNode(
    args: UpdateNodeCommandInput,
    cb: (err: any, data?: UpdateNodeCommandOutput) => void
  ): void;
  updateNode(
    args: UpdateNodeCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNodeStateCommand}
   */
  updateNodeState(
    args: UpdateNodeStateCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateNodeStateCommandOutput>;
  updateNodeState(
    args: UpdateNodeStateCommandInput,
    cb: (err: any, data?: UpdateNodeStateCommandOutput) => void
  ): void;
  updateNodeState(
    args: UpdateNodeStateCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateNodeStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReservationCommand}
   */
  updateReservation(
    args: UpdateReservationCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateReservationCommandOutput>;
  updateReservation(
    args: UpdateReservationCommandInput,
    cb: (err: any, data?: UpdateReservationCommandOutput) => void
  ): void;
  updateReservation(
    args: UpdateReservationCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSdiSourceCommand}
   */
  updateSdiSource(
    args: UpdateSdiSourceCommandInput,
    options?: MediaLiveRequestOptions
  ): Promise<UpdateSdiSourceCommandOutput>;
  updateSdiSource(
    args: UpdateSdiSourceCommandInput,
    cb: (err: any, data?: UpdateSdiSourceCommandOutput) => void
  ): void;
  updateSdiSource(
    args: UpdateSdiSourceCommandInput,
    options: MediaLiveRequestOptions,
    cb: (err: any, data?: UpdateSdiSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduleCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeScheduleCommandOutput}.
   */
  paginateDescribeSchedule(
    args: DescribeScheduleCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeScheduleCommandOutput>;

  /**
   * @see {@link ListAlertsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAlertsCommandOutput}.
   */
  paginateListAlerts(
    args: ListAlertsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAlertsCommandOutput>;

  /**
   * @see {@link ListChannelPlacementGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelPlacementGroupsCommandOutput}.
   */
  paginateListChannelPlacementGroups(
    args: ListChannelPlacementGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelPlacementGroupsCommandOutput>;

  /**
   * @see {@link ListChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelsCommandOutput}.
   */
  paginateListChannels(
    args?: ListChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelsCommandOutput>;

  /**
   * @see {@link ListCloudWatchAlarmTemplateGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCloudWatchAlarmTemplateGroupsCommandOutput}.
   */
  paginateListCloudWatchAlarmTemplateGroups(
    args?: ListCloudWatchAlarmTemplateGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCloudWatchAlarmTemplateGroupsCommandOutput>;

  /**
   * @see {@link ListCloudWatchAlarmTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCloudWatchAlarmTemplatesCommandOutput}.
   */
  paginateListCloudWatchAlarmTemplates(
    args?: ListCloudWatchAlarmTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCloudWatchAlarmTemplatesCommandOutput>;

  /**
   * @see {@link ListClusterAlertsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClusterAlertsCommandOutput}.
   */
  paginateListClusterAlerts(
    args: ListClusterAlertsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClusterAlertsCommandOutput>;

  /**
   * @see {@link ListClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClustersCommandOutput}.
   */
  paginateListClusters(
    args?: ListClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClustersCommandOutput>;

  /**
   * @see {@link ListEventBridgeRuleTemplateGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventBridgeRuleTemplateGroupsCommandOutput}.
   */
  paginateListEventBridgeRuleTemplateGroups(
    args?: ListEventBridgeRuleTemplateGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventBridgeRuleTemplateGroupsCommandOutput>;

  /**
   * @see {@link ListEventBridgeRuleTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventBridgeRuleTemplatesCommandOutput}.
   */
  paginateListEventBridgeRuleTemplates(
    args?: ListEventBridgeRuleTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventBridgeRuleTemplatesCommandOutput>;

  /**
   * @see {@link ListInputDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInputDevicesCommandOutput}.
   */
  paginateListInputDevices(
    args?: ListInputDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInputDevicesCommandOutput>;

  /**
   * @see {@link ListInputDeviceTransfersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInputDeviceTransfersCommandOutput}.
   */
  paginateListInputDeviceTransfers(
    args: ListInputDeviceTransfersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInputDeviceTransfersCommandOutput>;

  /**
   * @see {@link ListInputsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInputsCommandOutput}.
   */
  paginateListInputs(
    args?: ListInputsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInputsCommandOutput>;

  /**
   * @see {@link ListInputSecurityGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInputSecurityGroupsCommandOutput}.
   */
  paginateListInputSecurityGroups(
    args?: ListInputSecurityGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInputSecurityGroupsCommandOutput>;

  /**
   * @see {@link ListMultiplexAlertsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMultiplexAlertsCommandOutput}.
   */
  paginateListMultiplexAlerts(
    args: ListMultiplexAlertsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMultiplexAlertsCommandOutput>;

  /**
   * @see {@link ListMultiplexesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMultiplexesCommandOutput}.
   */
  paginateListMultiplexes(
    args?: ListMultiplexesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMultiplexesCommandOutput>;

  /**
   * @see {@link ListMultiplexProgramsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMultiplexProgramsCommandOutput}.
   */
  paginateListMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMultiplexProgramsCommandOutput>;

  /**
   * @see {@link ListNetworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworksCommandOutput}.
   */
  paginateListNetworks(
    args?: ListNetworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworksCommandOutput>;

  /**
   * @see {@link ListNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNodesCommandOutput}.
   */
  paginateListNodes(
    args: ListNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNodesCommandOutput>;

  /**
   * @see {@link ListOfferingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOfferingsCommandOutput}.
   */
  paginateListOfferings(
    args?: ListOfferingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOfferingsCommandOutput>;

  /**
   * @see {@link ListReservationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReservationsCommandOutput}.
   */
  paginateListReservations(
    args?: ListReservationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReservationsCommandOutput>;

  /**
   * @see {@link ListSdiSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSdiSourcesCommandOutput}.
   */
  paginateListSdiSources(
    args?: ListSdiSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSdiSourcesCommandOutput>;

  /**
   * @see {@link ListSignalMapsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSignalMapsCommandOutput}.
   */
  paginateListSignalMaps(
    args?: ListSignalMapsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSignalMapsCommandOutput>;

  /**
   * @see {@link DescribeChannelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelCreated(
    args: DescribeChannelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeChannelCommandOutput>>;

  /**
   * @see {@link DescribeChannelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelDeleted(
    args: DescribeChannelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeChannelCommandOutput>>;

  /**
   * @see {@link DescribeChannelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelRunning(
    args: DescribeChannelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeChannelCommandOutput>>;

  /**
   * @see {@link DescribeChannelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelStopped(
    args: DescribeChannelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeChannelCommandOutput>>;

  /**
   * @see {@link DescribeChannelPlacementGroupCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelPlacementGroupAssigned(
    args: DescribeChannelPlacementGroupCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeChannelPlacementGroupCommandOutput>>;

  /**
   * @see {@link DescribeChannelPlacementGroupCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelPlacementGroupDeleted(
    args: DescribeChannelPlacementGroupCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeChannelPlacementGroupCommandOutput>>;

  /**
   * @see {@link DescribeChannelPlacementGroupCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelPlacementGroupUnassigned(
    args: DescribeChannelPlacementGroupCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeChannelPlacementGroupCommandOutput>>;

  /**
   * @see {@link DescribeClusterCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterCreated(
    args: DescribeClusterCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeClusterCommandOutput>>;

  /**
   * @see {@link DescribeClusterCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterDeleted(
    args: DescribeClusterCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeClusterCommandOutput>>;

  /**
   * @see {@link DescribeInputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInputAttached(
    args: DescribeInputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeInputCommandOutput>>;

  /**
   * @see {@link DescribeInputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInputDeleted(
    args: DescribeInputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeInputCommandOutput>>;

  /**
   * @see {@link DescribeInputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInputDetached(
    args: DescribeInputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeInputCommandOutput>>;

  /**
   * @see {@link DescribeMultiplexCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilMultiplexCreated(
    args: DescribeMultiplexCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeMultiplexCommandOutput>>;

  /**
   * @see {@link DescribeMultiplexCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilMultiplexDeleted(
    args: DescribeMultiplexCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeMultiplexCommandOutput>>;

  /**
   * @see {@link DescribeMultiplexCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilMultiplexRunning(
    args: DescribeMultiplexCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeMultiplexCommandOutput>>;

  /**
   * @see {@link DescribeMultiplexCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilMultiplexStopped(
    args: DescribeMultiplexCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeMultiplexCommandOutput>>;

  /**
   * @see {@link DescribeNodeCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilNodeDeregistered(
    args: DescribeNodeCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeNodeCommandOutput>>;

  /**
   * @see {@link DescribeNodeCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilNodeRegistered(
    args: DescribeNodeCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<DescribeNodeCommandOutput>>;

  /**
   * @see {@link GetSignalMapCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSignalMapCreated(
    args: GetSignalMapCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<GetSignalMapCommandOutput>>;

  /**
   * @see {@link GetSignalMapCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSignalMapMonitorDeleted(
    args: GetSignalMapCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<GetSignalMapCommandOutput>>;

  /**
   * @see {@link GetSignalMapCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSignalMapMonitorDeployed(
    args: GetSignalMapCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<GetSignalMapCommandOutput>>;

  /**
   * @see {@link GetSignalMapCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSignalMapUpdated(
    args: GetSignalMapCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaLive>, "client">
  ): Promise<WaiterResult<GetSignalMapCommandOutput>>;
}

/**
 * API for AWS Elemental MediaLive
 * @public
 */
export class MediaLive extends MediaLiveClient implements MediaLive {}
createAggregatedClient(commands, MediaLive, { paginators, waiters });
