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
  type AddBridgeOutputsCommandInput,
  type AddBridgeOutputsCommandOutput,
  AddBridgeOutputsCommand,
} from "./commands/AddBridgeOutputsCommand";
import {
  type AddBridgeSourcesCommandInput,
  type AddBridgeSourcesCommandOutput,
  AddBridgeSourcesCommand,
} from "./commands/AddBridgeSourcesCommand";
import {
  type AddFlowMediaStreamsCommandInput,
  type AddFlowMediaStreamsCommandOutput,
  AddFlowMediaStreamsCommand,
} from "./commands/AddFlowMediaStreamsCommand";
import {
  type AddFlowOutputsCommandInput,
  type AddFlowOutputsCommandOutput,
  AddFlowOutputsCommand,
} from "./commands/AddFlowOutputsCommand";
import {
  type AddFlowSourcesCommandInput,
  type AddFlowSourcesCommandOutput,
  AddFlowSourcesCommand,
} from "./commands/AddFlowSourcesCommand";
import {
  type AddFlowVpcInterfacesCommandInput,
  type AddFlowVpcInterfacesCommandOutput,
  AddFlowVpcInterfacesCommand,
} from "./commands/AddFlowVpcInterfacesCommand";
import {
  type BatchGetRouterInputCommandInput,
  type BatchGetRouterInputCommandOutput,
  BatchGetRouterInputCommand,
} from "./commands/BatchGetRouterInputCommand";
import {
  type BatchGetRouterNetworkInterfaceCommandInput,
  type BatchGetRouterNetworkInterfaceCommandOutput,
  BatchGetRouterNetworkInterfaceCommand,
} from "./commands/BatchGetRouterNetworkInterfaceCommand";
import {
  type BatchGetRouterOutputCommandInput,
  type BatchGetRouterOutputCommandOutput,
  BatchGetRouterOutputCommand,
} from "./commands/BatchGetRouterOutputCommand";
import {
  type CreateBridgeCommandInput,
  type CreateBridgeCommandOutput,
  CreateBridgeCommand,
} from "./commands/CreateBridgeCommand";
import {
  type CreateFlowCommandInput,
  type CreateFlowCommandOutput,
  CreateFlowCommand,
} from "./commands/CreateFlowCommand";
import {
  type CreateGatewayCommandInput,
  type CreateGatewayCommandOutput,
  CreateGatewayCommand,
} from "./commands/CreateGatewayCommand";
import {
  type CreateRouterInputCommandInput,
  type CreateRouterInputCommandOutput,
  CreateRouterInputCommand,
} from "./commands/CreateRouterInputCommand";
import {
  type CreateRouterNetworkInterfaceCommandInput,
  type CreateRouterNetworkInterfaceCommandOutput,
  CreateRouterNetworkInterfaceCommand,
} from "./commands/CreateRouterNetworkInterfaceCommand";
import {
  type CreateRouterOutputCommandInput,
  type CreateRouterOutputCommandOutput,
  CreateRouterOutputCommand,
} from "./commands/CreateRouterOutputCommand";
import {
  type DeleteBridgeCommandInput,
  type DeleteBridgeCommandOutput,
  DeleteBridgeCommand,
} from "./commands/DeleteBridgeCommand";
import {
  type DeleteFlowCommandInput,
  type DeleteFlowCommandOutput,
  DeleteFlowCommand,
} from "./commands/DeleteFlowCommand";
import {
  type DeleteGatewayCommandInput,
  type DeleteGatewayCommandOutput,
  DeleteGatewayCommand,
} from "./commands/DeleteGatewayCommand";
import {
  type DeleteRouterInputCommandInput,
  type DeleteRouterInputCommandOutput,
  DeleteRouterInputCommand,
} from "./commands/DeleteRouterInputCommand";
import {
  type DeleteRouterNetworkInterfaceCommandInput,
  type DeleteRouterNetworkInterfaceCommandOutput,
  DeleteRouterNetworkInterfaceCommand,
} from "./commands/DeleteRouterNetworkInterfaceCommand";
import {
  type DeleteRouterOutputCommandInput,
  type DeleteRouterOutputCommandOutput,
  DeleteRouterOutputCommand,
} from "./commands/DeleteRouterOutputCommand";
import {
  type DeregisterGatewayInstanceCommandInput,
  type DeregisterGatewayInstanceCommandOutput,
  DeregisterGatewayInstanceCommand,
} from "./commands/DeregisterGatewayInstanceCommand";
import {
  type DescribeBridgeCommandInput,
  type DescribeBridgeCommandOutput,
  DescribeBridgeCommand,
} from "./commands/DescribeBridgeCommand";
import {
  type DescribeFlowCommandInput,
  type DescribeFlowCommandOutput,
  DescribeFlowCommand,
} from "./commands/DescribeFlowCommand";
import {
  type DescribeFlowSourceMetadataCommandInput,
  type DescribeFlowSourceMetadataCommandOutput,
  DescribeFlowSourceMetadataCommand,
} from "./commands/DescribeFlowSourceMetadataCommand";
import {
  type DescribeFlowSourceThumbnailCommandInput,
  type DescribeFlowSourceThumbnailCommandOutput,
  DescribeFlowSourceThumbnailCommand,
} from "./commands/DescribeFlowSourceThumbnailCommand";
import {
  type DescribeGatewayCommandInput,
  type DescribeGatewayCommandOutput,
  DescribeGatewayCommand,
} from "./commands/DescribeGatewayCommand";
import {
  type DescribeGatewayInstanceCommandInput,
  type DescribeGatewayInstanceCommandOutput,
  DescribeGatewayInstanceCommand,
} from "./commands/DescribeGatewayInstanceCommand";
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
  type GetRouterInputCommandInput,
  type GetRouterInputCommandOutput,
  GetRouterInputCommand,
} from "./commands/GetRouterInputCommand";
import {
  type GetRouterInputSourceMetadataCommandInput,
  type GetRouterInputSourceMetadataCommandOutput,
  GetRouterInputSourceMetadataCommand,
} from "./commands/GetRouterInputSourceMetadataCommand";
import {
  type GetRouterInputThumbnailCommandInput,
  type GetRouterInputThumbnailCommandOutput,
  GetRouterInputThumbnailCommand,
} from "./commands/GetRouterInputThumbnailCommand";
import {
  type GetRouterNetworkInterfaceCommandInput,
  type GetRouterNetworkInterfaceCommandOutput,
  GetRouterNetworkInterfaceCommand,
} from "./commands/GetRouterNetworkInterfaceCommand";
import {
  type GetRouterOutputCommandInput,
  type GetRouterOutputCommandOutput,
  GetRouterOutputCommand,
} from "./commands/GetRouterOutputCommand";
import {
  type GrantFlowEntitlementsCommandInput,
  type GrantFlowEntitlementsCommandOutput,
  GrantFlowEntitlementsCommand,
} from "./commands/GrantFlowEntitlementsCommand";
import {
  type ListBridgesCommandInput,
  type ListBridgesCommandOutput,
  ListBridgesCommand,
} from "./commands/ListBridgesCommand";
import {
  type ListEntitlementsCommandInput,
  type ListEntitlementsCommandOutput,
  ListEntitlementsCommand,
} from "./commands/ListEntitlementsCommand";
import { type ListFlowsCommandInput, type ListFlowsCommandOutput, ListFlowsCommand } from "./commands/ListFlowsCommand";
import {
  type ListGatewayInstancesCommandInput,
  type ListGatewayInstancesCommandOutput,
  ListGatewayInstancesCommand,
} from "./commands/ListGatewayInstancesCommand";
import {
  type ListGatewaysCommandInput,
  type ListGatewaysCommandOutput,
  ListGatewaysCommand,
} from "./commands/ListGatewaysCommand";
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
  type ListRouterInputsCommandInput,
  type ListRouterInputsCommandOutput,
  ListRouterInputsCommand,
} from "./commands/ListRouterInputsCommand";
import {
  type ListRouterNetworkInterfacesCommandInput,
  type ListRouterNetworkInterfacesCommandOutput,
  ListRouterNetworkInterfacesCommand,
} from "./commands/ListRouterNetworkInterfacesCommand";
import {
  type ListRouterOutputsCommandInput,
  type ListRouterOutputsCommandOutput,
  ListRouterOutputsCommand,
} from "./commands/ListRouterOutputsCommand";
import {
  type ListTagsForGlobalResourceCommandInput,
  type ListTagsForGlobalResourceCommandOutput,
  ListTagsForGlobalResourceCommand,
} from "./commands/ListTagsForGlobalResourceCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PurchaseOfferingCommandInput,
  type PurchaseOfferingCommandOutput,
  PurchaseOfferingCommand,
} from "./commands/PurchaseOfferingCommand";
import {
  type RemoveBridgeOutputCommandInput,
  type RemoveBridgeOutputCommandOutput,
  RemoveBridgeOutputCommand,
} from "./commands/RemoveBridgeOutputCommand";
import {
  type RemoveBridgeSourceCommandInput,
  type RemoveBridgeSourceCommandOutput,
  RemoveBridgeSourceCommand,
} from "./commands/RemoveBridgeSourceCommand";
import {
  type RemoveFlowMediaStreamCommandInput,
  type RemoveFlowMediaStreamCommandOutput,
  RemoveFlowMediaStreamCommand,
} from "./commands/RemoveFlowMediaStreamCommand";
import {
  type RemoveFlowOutputCommandInput,
  type RemoveFlowOutputCommandOutput,
  RemoveFlowOutputCommand,
} from "./commands/RemoveFlowOutputCommand";
import {
  type RemoveFlowSourceCommandInput,
  type RemoveFlowSourceCommandOutput,
  RemoveFlowSourceCommand,
} from "./commands/RemoveFlowSourceCommand";
import {
  type RemoveFlowVpcInterfaceCommandInput,
  type RemoveFlowVpcInterfaceCommandOutput,
  RemoveFlowVpcInterfaceCommand,
} from "./commands/RemoveFlowVpcInterfaceCommand";
import {
  type RestartRouterInputCommandInput,
  type RestartRouterInputCommandOutput,
  RestartRouterInputCommand,
} from "./commands/RestartRouterInputCommand";
import {
  type RestartRouterOutputCommandInput,
  type RestartRouterOutputCommandOutput,
  RestartRouterOutputCommand,
} from "./commands/RestartRouterOutputCommand";
import {
  type RevokeFlowEntitlementCommandInput,
  type RevokeFlowEntitlementCommandOutput,
  RevokeFlowEntitlementCommand,
} from "./commands/RevokeFlowEntitlementCommand";
import { type StartFlowCommandInput, type StartFlowCommandOutput, StartFlowCommand } from "./commands/StartFlowCommand";
import {
  type StartRouterInputCommandInput,
  type StartRouterInputCommandOutput,
  StartRouterInputCommand,
} from "./commands/StartRouterInputCommand";
import {
  type StartRouterOutputCommandInput,
  type StartRouterOutputCommandOutput,
  StartRouterOutputCommand,
} from "./commands/StartRouterOutputCommand";
import { type StopFlowCommandInput, type StopFlowCommandOutput, StopFlowCommand } from "./commands/StopFlowCommand";
import {
  type StopRouterInputCommandInput,
  type StopRouterInputCommandOutput,
  StopRouterInputCommand,
} from "./commands/StopRouterInputCommand";
import {
  type StopRouterOutputCommandInput,
  type StopRouterOutputCommandOutput,
  StopRouterOutputCommand,
} from "./commands/StopRouterOutputCommand";
import {
  type TagGlobalResourceCommandInput,
  type TagGlobalResourceCommandOutput,
  TagGlobalResourceCommand,
} from "./commands/TagGlobalResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TakeRouterInputCommandInput,
  type TakeRouterInputCommandOutput,
  TakeRouterInputCommand,
} from "./commands/TakeRouterInputCommand";
import {
  type UntagGlobalResourceCommandInput,
  type UntagGlobalResourceCommandOutput,
  UntagGlobalResourceCommand,
} from "./commands/UntagGlobalResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateBridgeCommandInput,
  type UpdateBridgeCommandOutput,
  UpdateBridgeCommand,
} from "./commands/UpdateBridgeCommand";
import {
  type UpdateBridgeOutputCommandInput,
  type UpdateBridgeOutputCommandOutput,
  UpdateBridgeOutputCommand,
} from "./commands/UpdateBridgeOutputCommand";
import {
  type UpdateBridgeSourceCommandInput,
  type UpdateBridgeSourceCommandOutput,
  UpdateBridgeSourceCommand,
} from "./commands/UpdateBridgeSourceCommand";
import {
  type UpdateBridgeStateCommandInput,
  type UpdateBridgeStateCommandOutput,
  UpdateBridgeStateCommand,
} from "./commands/UpdateBridgeStateCommand";
import {
  type UpdateFlowCommandInput,
  type UpdateFlowCommandOutput,
  UpdateFlowCommand,
} from "./commands/UpdateFlowCommand";
import {
  type UpdateFlowEntitlementCommandInput,
  type UpdateFlowEntitlementCommandOutput,
  UpdateFlowEntitlementCommand,
} from "./commands/UpdateFlowEntitlementCommand";
import {
  type UpdateFlowMediaStreamCommandInput,
  type UpdateFlowMediaStreamCommandOutput,
  UpdateFlowMediaStreamCommand,
} from "./commands/UpdateFlowMediaStreamCommand";
import {
  type UpdateFlowOutputCommandInput,
  type UpdateFlowOutputCommandOutput,
  UpdateFlowOutputCommand,
} from "./commands/UpdateFlowOutputCommand";
import {
  type UpdateFlowSourceCommandInput,
  type UpdateFlowSourceCommandOutput,
  UpdateFlowSourceCommand,
} from "./commands/UpdateFlowSourceCommand";
import {
  type UpdateGatewayInstanceCommandInput,
  type UpdateGatewayInstanceCommandOutput,
  UpdateGatewayInstanceCommand,
} from "./commands/UpdateGatewayInstanceCommand";
import {
  type UpdateRouterInputCommandInput,
  type UpdateRouterInputCommandOutput,
  UpdateRouterInputCommand,
} from "./commands/UpdateRouterInputCommand";
import {
  type UpdateRouterNetworkInterfaceCommandInput,
  type UpdateRouterNetworkInterfaceCommandOutput,
  UpdateRouterNetworkInterfaceCommand,
} from "./commands/UpdateRouterNetworkInterfaceCommand";
import {
  type UpdateRouterOutputCommandInput,
  type UpdateRouterOutputCommandOutput,
  UpdateRouterOutputCommand,
} from "./commands/UpdateRouterOutputCommand";
import { MediaConnectClient } from "./MediaConnectClient";
import type { NotFoundException } from "./models/errors";
import type { MediaConnectServiceException } from "./models/MediaConnectServiceException";
import { paginateListBridges } from "./pagination/ListBridgesPaginator";
import { paginateListEntitlements } from "./pagination/ListEntitlementsPaginator";
import { paginateListFlows } from "./pagination/ListFlowsPaginator";
import { paginateListGatewayInstances } from "./pagination/ListGatewayInstancesPaginator";
import { paginateListGateways } from "./pagination/ListGatewaysPaginator";
import { paginateListOfferings } from "./pagination/ListOfferingsPaginator";
import { paginateListReservations } from "./pagination/ListReservationsPaginator";
import { paginateListRouterInputs } from "./pagination/ListRouterInputsPaginator";
import { paginateListRouterNetworkInterfaces } from "./pagination/ListRouterNetworkInterfacesPaginator";
import { paginateListRouterOutputs } from "./pagination/ListRouterOutputsPaginator";
import { waitUntilFlowActive } from "./waiters/waitForFlowActive";
import { waitUntilFlowDeleted } from "./waiters/waitForFlowDeleted";
import { waitUntilFlowStandby } from "./waiters/waitForFlowStandby";
import { waitUntilInputActive } from "./waiters/waitForInputActive";
import { waitUntilInputDeleted } from "./waiters/waitForInputDeleted";
import { waitUntilInputStandby } from "./waiters/waitForInputStandby";
import { waitUntilOutputActive } from "./waiters/waitForOutputActive";
import { waitUntilOutputDeleted } from "./waiters/waitForOutputDeleted";
import { waitUntilOutputRouted } from "./waiters/waitForOutputRouted";
import { waitUntilOutputStandby } from "./waiters/waitForOutputStandby";
import { waitUntilOutputUnrouted } from "./waiters/waitForOutputUnrouted";

const commands = {
  AddBridgeOutputsCommand,
  AddBridgeSourcesCommand,
  AddFlowMediaStreamsCommand,
  AddFlowOutputsCommand,
  AddFlowSourcesCommand,
  AddFlowVpcInterfacesCommand,
  BatchGetRouterInputCommand,
  BatchGetRouterNetworkInterfaceCommand,
  BatchGetRouterOutputCommand,
  CreateBridgeCommand,
  CreateFlowCommand,
  CreateGatewayCommand,
  CreateRouterInputCommand,
  CreateRouterNetworkInterfaceCommand,
  CreateRouterOutputCommand,
  DeleteBridgeCommand,
  DeleteFlowCommand,
  DeleteGatewayCommand,
  DeleteRouterInputCommand,
  DeleteRouterNetworkInterfaceCommand,
  DeleteRouterOutputCommand,
  DeregisterGatewayInstanceCommand,
  DescribeBridgeCommand,
  DescribeFlowCommand,
  DescribeFlowSourceMetadataCommand,
  DescribeFlowSourceThumbnailCommand,
  DescribeGatewayCommand,
  DescribeGatewayInstanceCommand,
  DescribeOfferingCommand,
  DescribeReservationCommand,
  GetRouterInputCommand,
  GetRouterInputSourceMetadataCommand,
  GetRouterInputThumbnailCommand,
  GetRouterNetworkInterfaceCommand,
  GetRouterOutputCommand,
  GrantFlowEntitlementsCommand,
  ListBridgesCommand,
  ListEntitlementsCommand,
  ListFlowsCommand,
  ListGatewayInstancesCommand,
  ListGatewaysCommand,
  ListOfferingsCommand,
  ListReservationsCommand,
  ListRouterInputsCommand,
  ListRouterNetworkInterfacesCommand,
  ListRouterOutputsCommand,
  ListTagsForGlobalResourceCommand,
  ListTagsForResourceCommand,
  PurchaseOfferingCommand,
  RemoveBridgeOutputCommand,
  RemoveBridgeSourceCommand,
  RemoveFlowMediaStreamCommand,
  RemoveFlowOutputCommand,
  RemoveFlowSourceCommand,
  RemoveFlowVpcInterfaceCommand,
  RestartRouterInputCommand,
  RestartRouterOutputCommand,
  RevokeFlowEntitlementCommand,
  StartFlowCommand,
  StartRouterInputCommand,
  StartRouterOutputCommand,
  StopFlowCommand,
  StopRouterInputCommand,
  StopRouterOutputCommand,
  TagGlobalResourceCommand,
  TagResourceCommand,
  TakeRouterInputCommand,
  UntagGlobalResourceCommand,
  UntagResourceCommand,
  UpdateBridgeCommand,
  UpdateBridgeOutputCommand,
  UpdateBridgeSourceCommand,
  UpdateBridgeStateCommand,
  UpdateFlowCommand,
  UpdateFlowEntitlementCommand,
  UpdateFlowMediaStreamCommand,
  UpdateFlowOutputCommand,
  UpdateFlowSourceCommand,
  UpdateGatewayInstanceCommand,
  UpdateRouterInputCommand,
  UpdateRouterNetworkInterfaceCommand,
  UpdateRouterOutputCommand,
};
const paginators = {
  paginateListBridges,
  paginateListEntitlements,
  paginateListFlows,
  paginateListGatewayInstances,
  paginateListGateways,
  paginateListOfferings,
  paginateListReservations,
  paginateListRouterInputs,
  paginateListRouterNetworkInterfaces,
  paginateListRouterOutputs,
};
const waiters = {
  waitUntilFlowActive,
  waitUntilFlowStandby,
  waitUntilFlowDeleted,
  waitUntilInputActive,
  waitUntilInputStandby,
  waitUntilInputDeleted,
  waitUntilOutputActive,
  waitUntilOutputDeleted,
  waitUntilOutputRouted,
  waitUntilOutputStandby,
  waitUntilOutputUnrouted,
};

/**
 * @public
 */
export interface MediaConnectRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MediaConnect {
  /**
   * @see {@link AddBridgeOutputsCommand}
   */
  addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<AddBridgeOutputsCommandOutput>;
  addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    cb: (err: any, data?: AddBridgeOutputsCommandOutput) => void
  ): void;
  addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: AddBridgeOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddBridgeSourcesCommand}
   */
  addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<AddBridgeSourcesCommandOutput>;
  addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    cb: (err: any, data?: AddBridgeSourcesCommandOutput) => void
  ): void;
  addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: AddBridgeSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowMediaStreamsCommand}
   */
  addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<AddFlowMediaStreamsCommandOutput>;
  addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void
  ): void;
  addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowOutputsCommand}
   */
  addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<AddFlowOutputsCommandOutput>;
  addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    cb: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): void;
  addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowSourcesCommand}
   */
  addFlowSources(
    args: AddFlowSourcesCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<AddFlowSourcesCommandOutput>;
  addFlowSources(
    args: AddFlowSourcesCommandInput,
    cb: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): void;
  addFlowSources(
    args: AddFlowSourcesCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowVpcInterfacesCommand}
   */
  addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<AddFlowVpcInterfacesCommandOutput>;
  addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;
  addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRouterInputCommand}
   */
  batchGetRouterInput(
    args: BatchGetRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<BatchGetRouterInputCommandOutput>;
  batchGetRouterInput(
    args: BatchGetRouterInputCommandInput,
    cb: (err: any, data?: BatchGetRouterInputCommandOutput) => void
  ): void;
  batchGetRouterInput(
    args: BatchGetRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: BatchGetRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRouterNetworkInterfaceCommand}
   */
  batchGetRouterNetworkInterface(
    args: BatchGetRouterNetworkInterfaceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<BatchGetRouterNetworkInterfaceCommandOutput>;
  batchGetRouterNetworkInterface(
    args: BatchGetRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: BatchGetRouterNetworkInterfaceCommandOutput) => void
  ): void;
  batchGetRouterNetworkInterface(
    args: BatchGetRouterNetworkInterfaceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: BatchGetRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRouterOutputCommand}
   */
  batchGetRouterOutput(
    args: BatchGetRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<BatchGetRouterOutputCommandOutput>;
  batchGetRouterOutput(
    args: BatchGetRouterOutputCommandInput,
    cb: (err: any, data?: BatchGetRouterOutputCommandOutput) => void
  ): void;
  batchGetRouterOutput(
    args: BatchGetRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: BatchGetRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBridgeCommand}
   */
  createBridge(
    args: CreateBridgeCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<CreateBridgeCommandOutput>;
  createBridge(
    args: CreateBridgeCommandInput,
    cb: (err: any, data?: CreateBridgeCommandOutput) => void
  ): void;
  createBridge(
    args: CreateBridgeCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: CreateBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowCommand}
   */
  createFlow(
    args: CreateFlowCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<CreateFlowCommandOutput>;
  createFlow(
    args: CreateFlowCommandInput,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
  createFlow(
    args: CreateFlowCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(
    args: CreateGatewayCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<CreateGatewayCommandOutput>;
  createGateway(
    args: CreateGatewayCommandInput,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  createGateway(
    args: CreateGatewayCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouterInputCommand}
   */
  createRouterInput(
    args: CreateRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<CreateRouterInputCommandOutput>;
  createRouterInput(
    args: CreateRouterInputCommandInput,
    cb: (err: any, data?: CreateRouterInputCommandOutput) => void
  ): void;
  createRouterInput(
    args: CreateRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: CreateRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouterNetworkInterfaceCommand}
   */
  createRouterNetworkInterface(
    args: CreateRouterNetworkInterfaceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<CreateRouterNetworkInterfaceCommandOutput>;
  createRouterNetworkInterface(
    args: CreateRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: CreateRouterNetworkInterfaceCommandOutput) => void
  ): void;
  createRouterNetworkInterface(
    args: CreateRouterNetworkInterfaceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: CreateRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouterOutputCommand}
   */
  createRouterOutput(
    args: CreateRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<CreateRouterOutputCommandOutput>;
  createRouterOutput(
    args: CreateRouterOutputCommandInput,
    cb: (err: any, data?: CreateRouterOutputCommandOutput) => void
  ): void;
  createRouterOutput(
    args: CreateRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: CreateRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBridgeCommand}
   */
  deleteBridge(
    args: DeleteBridgeCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DeleteBridgeCommandOutput>;
  deleteBridge(
    args: DeleteBridgeCommandInput,
    cb: (err: any, data?: DeleteBridgeCommandOutput) => void
  ): void;
  deleteBridge(
    args: DeleteBridgeCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DeleteBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowCommand}
   */
  deleteFlow(
    args: DeleteFlowCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DeleteFlowCommandOutput>;
  deleteFlow(
    args: DeleteFlowCommandInput,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
  deleteFlow(
    args: DeleteFlowCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouterInputCommand}
   */
  deleteRouterInput(
    args: DeleteRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DeleteRouterInputCommandOutput>;
  deleteRouterInput(
    args: DeleteRouterInputCommandInput,
    cb: (err: any, data?: DeleteRouterInputCommandOutput) => void
  ): void;
  deleteRouterInput(
    args: DeleteRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DeleteRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouterNetworkInterfaceCommand}
   */
  deleteRouterNetworkInterface(
    args: DeleteRouterNetworkInterfaceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DeleteRouterNetworkInterfaceCommandOutput>;
  deleteRouterNetworkInterface(
    args: DeleteRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: DeleteRouterNetworkInterfaceCommandOutput) => void
  ): void;
  deleteRouterNetworkInterface(
    args: DeleteRouterNetworkInterfaceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DeleteRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouterOutputCommand}
   */
  deleteRouterOutput(
    args: DeleteRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DeleteRouterOutputCommandOutput>;
  deleteRouterOutput(
    args: DeleteRouterOutputCommandInput,
    cb: (err: any, data?: DeleteRouterOutputCommandOutput) => void
  ): void;
  deleteRouterOutput(
    args: DeleteRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DeleteRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterGatewayInstanceCommand}
   */
  deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DeregisterGatewayInstanceCommandOutput>;
  deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    cb: (err: any, data?: DeregisterGatewayInstanceCommandOutput) => void
  ): void;
  deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DeregisterGatewayInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBridgeCommand}
   */
  describeBridge(
    args: DescribeBridgeCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeBridgeCommandOutput>;
  describeBridge(
    args: DescribeBridgeCommandInput,
    cb: (err: any, data?: DescribeBridgeCommandOutput) => void
  ): void;
  describeBridge(
    args: DescribeBridgeCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowCommand}
   */
  describeFlow(
    args: DescribeFlowCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeFlowCommandOutput>;
  describeFlow(
    args: DescribeFlowCommandInput,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;
  describeFlow(
    args: DescribeFlowCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowSourceMetadataCommand}
   */
  describeFlowSourceMetadata(
    args: DescribeFlowSourceMetadataCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeFlowSourceMetadataCommandOutput>;
  describeFlowSourceMetadata(
    args: DescribeFlowSourceMetadataCommandInput,
    cb: (err: any, data?: DescribeFlowSourceMetadataCommandOutput) => void
  ): void;
  describeFlowSourceMetadata(
    args: DescribeFlowSourceMetadataCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeFlowSourceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowSourceThumbnailCommand}
   */
  describeFlowSourceThumbnail(
    args: DescribeFlowSourceThumbnailCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeFlowSourceThumbnailCommandOutput>;
  describeFlowSourceThumbnail(
    args: DescribeFlowSourceThumbnailCommandInput,
    cb: (err: any, data?: DescribeFlowSourceThumbnailCommandOutput) => void
  ): void;
  describeFlowSourceThumbnail(
    args: DescribeFlowSourceThumbnailCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeFlowSourceThumbnailCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayCommand}
   */
  describeGateway(
    args: DescribeGatewayCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeGatewayCommandOutput>;
  describeGateway(
    args: DescribeGatewayCommandInput,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;
  describeGateway(
    args: DescribeGatewayCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayInstanceCommand}
   */
  describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeGatewayInstanceCommandOutput>;
  describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    cb: (err: any, data?: DescribeGatewayInstanceCommandOutput) => void
  ): void;
  describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeGatewayInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOfferingCommand}
   */
  describeOffering(
    args: DescribeOfferingCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeOfferingCommandOutput>;
  describeOffering(
    args: DescribeOfferingCommandInput,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  describeOffering(
    args: DescribeOfferingCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservationCommand}
   */
  describeReservation(
    args: DescribeReservationCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<DescribeReservationCommandOutput>;
  describeReservation(
    args: DescribeReservationCommandInput,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  describeReservation(
    args: DescribeReservationCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterInputCommand}
   */
  getRouterInput(
    args: GetRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<GetRouterInputCommandOutput>;
  getRouterInput(
    args: GetRouterInputCommandInput,
    cb: (err: any, data?: GetRouterInputCommandOutput) => void
  ): void;
  getRouterInput(
    args: GetRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: GetRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterInputSourceMetadataCommand}
   */
  getRouterInputSourceMetadata(
    args: GetRouterInputSourceMetadataCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<GetRouterInputSourceMetadataCommandOutput>;
  getRouterInputSourceMetadata(
    args: GetRouterInputSourceMetadataCommandInput,
    cb: (err: any, data?: GetRouterInputSourceMetadataCommandOutput) => void
  ): void;
  getRouterInputSourceMetadata(
    args: GetRouterInputSourceMetadataCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: GetRouterInputSourceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterInputThumbnailCommand}
   */
  getRouterInputThumbnail(
    args: GetRouterInputThumbnailCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<GetRouterInputThumbnailCommandOutput>;
  getRouterInputThumbnail(
    args: GetRouterInputThumbnailCommandInput,
    cb: (err: any, data?: GetRouterInputThumbnailCommandOutput) => void
  ): void;
  getRouterInputThumbnail(
    args: GetRouterInputThumbnailCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: GetRouterInputThumbnailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterNetworkInterfaceCommand}
   */
  getRouterNetworkInterface(
    args: GetRouterNetworkInterfaceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<GetRouterNetworkInterfaceCommandOutput>;
  getRouterNetworkInterface(
    args: GetRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: GetRouterNetworkInterfaceCommandOutput) => void
  ): void;
  getRouterNetworkInterface(
    args: GetRouterNetworkInterfaceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: GetRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterOutputCommand}
   */
  getRouterOutput(
    args: GetRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<GetRouterOutputCommandOutput>;
  getRouterOutput(
    args: GetRouterOutputCommandInput,
    cb: (err: any, data?: GetRouterOutputCommandOutput) => void
  ): void;
  getRouterOutput(
    args: GetRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: GetRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link GrantFlowEntitlementsCommand}
   */
  grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<GrantFlowEntitlementsCommandOutput>;
  grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;
  grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBridgesCommand}
   */
  listBridges(): Promise<ListBridgesCommandOutput>;
  listBridges(
    args: ListBridgesCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListBridgesCommandOutput>;
  listBridges(
    args: ListBridgesCommandInput,
    cb: (err: any, data?: ListBridgesCommandOutput) => void
  ): void;
  listBridges(
    args: ListBridgesCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListBridgesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitlementsCommand}
   */
  listEntitlements(): Promise<ListEntitlementsCommandOutput>;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListEntitlementsCommandOutput>;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewayInstancesCommand}
   */
  listGatewayInstances(): Promise<ListGatewayInstancesCommandOutput>;
  listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListGatewayInstancesCommandOutput>;
  listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    cb: (err: any, data?: ListGatewayInstancesCommandOutput) => void
  ): void;
  listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListGatewayInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingsCommand}
   */
  listOfferings(): Promise<ListOfferingsCommandOutput>;
  listOfferings(
    args: ListOfferingsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListOfferingsCommandOutput>;
  listOfferings(
    args: ListOfferingsCommandInput,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;
  listOfferings(
    args: ListOfferingsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReservationsCommand}
   */
  listReservations(): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  listReservations(
    args: ListReservationsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRouterInputsCommand}
   */
  listRouterInputs(): Promise<ListRouterInputsCommandOutput>;
  listRouterInputs(
    args: ListRouterInputsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListRouterInputsCommandOutput>;
  listRouterInputs(
    args: ListRouterInputsCommandInput,
    cb: (err: any, data?: ListRouterInputsCommandOutput) => void
  ): void;
  listRouterInputs(
    args: ListRouterInputsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListRouterInputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRouterNetworkInterfacesCommand}
   */
  listRouterNetworkInterfaces(): Promise<ListRouterNetworkInterfacesCommandOutput>;
  listRouterNetworkInterfaces(
    args: ListRouterNetworkInterfacesCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListRouterNetworkInterfacesCommandOutput>;
  listRouterNetworkInterfaces(
    args: ListRouterNetworkInterfacesCommandInput,
    cb: (err: any, data?: ListRouterNetworkInterfacesCommandOutput) => void
  ): void;
  listRouterNetworkInterfaces(
    args: ListRouterNetworkInterfacesCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListRouterNetworkInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRouterOutputsCommand}
   */
  listRouterOutputs(): Promise<ListRouterOutputsCommandOutput>;
  listRouterOutputs(
    args: ListRouterOutputsCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListRouterOutputsCommandOutput>;
  listRouterOutputs(
    args: ListRouterOutputsCommandInput,
    cb: (err: any, data?: ListRouterOutputsCommandOutput) => void
  ): void;
  listRouterOutputs(
    args: ListRouterOutputsCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListRouterOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForGlobalResourceCommand}
   */
  listTagsForGlobalResource(
    args: ListTagsForGlobalResourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListTagsForGlobalResourceCommandOutput>;
  listTagsForGlobalResource(
    args: ListTagsForGlobalResourceCommandInput,
    cb: (err: any, data?: ListTagsForGlobalResourceCommandOutput) => void
  ): void;
  listTagsForGlobalResource(
    args: ListTagsForGlobalResourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListTagsForGlobalResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseOfferingCommand}
   */
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<PurchaseOfferingCommandOutput>;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveBridgeOutputCommand}
   */
  removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RemoveBridgeOutputCommandOutput>;
  removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    cb: (err: any, data?: RemoveBridgeOutputCommandOutput) => void
  ): void;
  removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RemoveBridgeOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveBridgeSourceCommand}
   */
  removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RemoveBridgeSourceCommandOutput>;
  removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    cb: (err: any, data?: RemoveBridgeSourceCommandOutput) => void
  ): void;
  removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RemoveBridgeSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowMediaStreamCommand}
   */
  removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RemoveFlowMediaStreamCommandOutput>;
  removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void
  ): void;
  removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowOutputCommand}
   */
  removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RemoveFlowOutputCommandOutput>;
  removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;
  removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowSourceCommand}
   */
  removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RemoveFlowSourceCommandOutput>;
  removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;
  removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowVpcInterfaceCommand}
   */
  removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RemoveFlowVpcInterfaceCommandOutput>;
  removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;
  removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartRouterInputCommand}
   */
  restartRouterInput(
    args: RestartRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RestartRouterInputCommandOutput>;
  restartRouterInput(
    args: RestartRouterInputCommandInput,
    cb: (err: any, data?: RestartRouterInputCommandOutput) => void
  ): void;
  restartRouterInput(
    args: RestartRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RestartRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartRouterOutputCommand}
   */
  restartRouterOutput(
    args: RestartRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RestartRouterOutputCommandOutput>;
  restartRouterOutput(
    args: RestartRouterOutputCommandInput,
    cb: (err: any, data?: RestartRouterOutputCommandOutput) => void
  ): void;
  restartRouterOutput(
    args: RestartRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RestartRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeFlowEntitlementCommand}
   */
  revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<RevokeFlowEntitlementCommandOutput>;
  revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;
  revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowCommand}
   */
  startFlow(
    args: StartFlowCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<StartFlowCommandOutput>;
  startFlow(
    args: StartFlowCommandInput,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;
  startFlow(
    args: StartFlowCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRouterInputCommand}
   */
  startRouterInput(
    args: StartRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<StartRouterInputCommandOutput>;
  startRouterInput(
    args: StartRouterInputCommandInput,
    cb: (err: any, data?: StartRouterInputCommandOutput) => void
  ): void;
  startRouterInput(
    args: StartRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: StartRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRouterOutputCommand}
   */
  startRouterOutput(
    args: StartRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<StartRouterOutputCommandOutput>;
  startRouterOutput(
    args: StartRouterOutputCommandInput,
    cb: (err: any, data?: StartRouterOutputCommandOutput) => void
  ): void;
  startRouterOutput(
    args: StartRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: StartRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFlowCommand}
   */
  stopFlow(
    args: StopFlowCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<StopFlowCommandOutput>;
  stopFlow(
    args: StopFlowCommandInput,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;
  stopFlow(
    args: StopFlowCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRouterInputCommand}
   */
  stopRouterInput(
    args: StopRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<StopRouterInputCommandOutput>;
  stopRouterInput(
    args: StopRouterInputCommandInput,
    cb: (err: any, data?: StopRouterInputCommandOutput) => void
  ): void;
  stopRouterInput(
    args: StopRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: StopRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRouterOutputCommand}
   */
  stopRouterOutput(
    args: StopRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<StopRouterOutputCommandOutput>;
  stopRouterOutput(
    args: StopRouterOutputCommandInput,
    cb: (err: any, data?: StopRouterOutputCommandOutput) => void
  ): void;
  stopRouterOutput(
    args: StopRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: StopRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link TagGlobalResourceCommand}
   */
  tagGlobalResource(
    args: TagGlobalResourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<TagGlobalResourceCommandOutput>;
  tagGlobalResource(
    args: TagGlobalResourceCommandInput,
    cb: (err: any, data?: TagGlobalResourceCommandOutput) => void
  ): void;
  tagGlobalResource(
    args: TagGlobalResourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: TagGlobalResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TakeRouterInputCommand}
   */
  takeRouterInput(
    args: TakeRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<TakeRouterInputCommandOutput>;
  takeRouterInput(
    args: TakeRouterInputCommandInput,
    cb: (err: any, data?: TakeRouterInputCommandOutput) => void
  ): void;
  takeRouterInput(
    args: TakeRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: TakeRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagGlobalResourceCommand}
   */
  untagGlobalResource(
    args: UntagGlobalResourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UntagGlobalResourceCommandOutput>;
  untagGlobalResource(
    args: UntagGlobalResourceCommandInput,
    cb: (err: any, data?: UntagGlobalResourceCommandOutput) => void
  ): void;
  untagGlobalResource(
    args: UntagGlobalResourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UntagGlobalResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeCommand}
   */
  updateBridge(
    args: UpdateBridgeCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateBridgeCommandOutput>;
  updateBridge(
    args: UpdateBridgeCommandInput,
    cb: (err: any, data?: UpdateBridgeCommandOutput) => void
  ): void;
  updateBridge(
    args: UpdateBridgeCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeOutputCommand}
   */
  updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateBridgeOutputCommandOutput>;
  updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    cb: (err: any, data?: UpdateBridgeOutputCommandOutput) => void
  ): void;
  updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateBridgeOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeSourceCommand}
   */
  updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateBridgeSourceCommandOutput>;
  updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    cb: (err: any, data?: UpdateBridgeSourceCommandOutput) => void
  ): void;
  updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateBridgeSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeStateCommand}
   */
  updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateBridgeStateCommandOutput>;
  updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    cb: (err: any, data?: UpdateBridgeStateCommandOutput) => void
  ): void;
  updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateBridgeStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowCommand}
   */
  updateFlow(
    args: UpdateFlowCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateFlowCommandOutput>;
  updateFlow(
    args: UpdateFlowCommandInput,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
  updateFlow(
    args: UpdateFlowCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowEntitlementCommand}
   */
  updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateFlowEntitlementCommandOutput>;
  updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;
  updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowMediaStreamCommand}
   */
  updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateFlowMediaStreamCommandOutput>;
  updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void
  ): void;
  updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowOutputCommand}
   */
  updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateFlowOutputCommandOutput>;
  updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;
  updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowSourceCommand}
   */
  updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateFlowSourceCommandOutput>;
  updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;
  updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayInstanceCommand}
   */
  updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateGatewayInstanceCommandOutput>;
  updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    cb: (err: any, data?: UpdateGatewayInstanceCommandOutput) => void
  ): void;
  updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateGatewayInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouterInputCommand}
   */
  updateRouterInput(
    args: UpdateRouterInputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateRouterInputCommandOutput>;
  updateRouterInput(
    args: UpdateRouterInputCommandInput,
    cb: (err: any, data?: UpdateRouterInputCommandOutput) => void
  ): void;
  updateRouterInput(
    args: UpdateRouterInputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouterNetworkInterfaceCommand}
   */
  updateRouterNetworkInterface(
    args: UpdateRouterNetworkInterfaceCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateRouterNetworkInterfaceCommandOutput>;
  updateRouterNetworkInterface(
    args: UpdateRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: UpdateRouterNetworkInterfaceCommandOutput) => void
  ): void;
  updateRouterNetworkInterface(
    args: UpdateRouterNetworkInterfaceCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouterOutputCommand}
   */
  updateRouterOutput(
    args: UpdateRouterOutputCommandInput,
    options?: MediaConnectRequestOptions
  ): Promise<UpdateRouterOutputCommandOutput>;
  updateRouterOutput(
    args: UpdateRouterOutputCommandInput,
    cb: (err: any, data?: UpdateRouterOutputCommandOutput) => void
  ): void;
  updateRouterOutput(
    args: UpdateRouterOutputCommandInput,
    options: MediaConnectRequestOptions,
    cb: (err: any, data?: UpdateRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBridgesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBridgesCommandOutput}.
   */
  paginateListBridges(
    args?: ListBridgesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBridgesCommandOutput>;

  /**
   * @see {@link ListEntitlementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntitlementsCommandOutput}.
   */
  paginateListEntitlements(
    args?: ListEntitlementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntitlementsCommandOutput>;

  /**
   * @see {@link ListFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowsCommandOutput}.
   */
  paginateListFlows(
    args?: ListFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowsCommandOutput>;

  /**
   * @see {@link ListGatewayInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGatewayInstancesCommandOutput}.
   */
  paginateListGatewayInstances(
    args?: ListGatewayInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGatewayInstancesCommandOutput>;

  /**
   * @see {@link ListGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGatewaysCommandOutput}.
   */
  paginateListGateways(
    args?: ListGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGatewaysCommandOutput>;

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
   * @see {@link ListRouterInputsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRouterInputsCommandOutput}.
   */
  paginateListRouterInputs(
    args?: ListRouterInputsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRouterInputsCommandOutput>;

  /**
   * @see {@link ListRouterNetworkInterfacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRouterNetworkInterfacesCommandOutput}.
   */
  paginateListRouterNetworkInterfaces(
    args?: ListRouterNetworkInterfacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRouterNetworkInterfacesCommandOutput>;

  /**
   * @see {@link ListRouterOutputsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRouterOutputsCommandOutput}.
   */
  paginateListRouterOutputs(
    args?: ListRouterOutputsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRouterOutputsCommandOutput>;

  /**
   * @see {@link DescribeFlowCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFlowActive(
    args: DescribeFlowCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<DescribeFlowCommandOutput>>;

  /**
   * @see {@link DescribeFlowCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFlowStandby(
    args: DescribeFlowCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<DescribeFlowCommandOutput>>;

  /**
   * @see {@link DescribeFlowCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFlowDeleted(
    args: DescribeFlowCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<NotFoundException>>;

  /**
   * @see {@link GetRouterInputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInputActive(
    args: GetRouterInputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<GetRouterInputCommandOutput>>;

  /**
   * @see {@link GetRouterInputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInputStandby(
    args: GetRouterInputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<GetRouterInputCommandOutput>>;

  /**
   * @see {@link GetRouterInputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInputDeleted(
    args: GetRouterInputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<NotFoundException>>;

  /**
   * @see {@link GetRouterOutputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilOutputActive(
    args: GetRouterOutputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<GetRouterOutputCommandOutput>>;

  /**
   * @see {@link GetRouterOutputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilOutputDeleted(
    args: GetRouterOutputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<NotFoundException>>;

  /**
   * @see {@link GetRouterOutputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilOutputRouted(
    args: GetRouterOutputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<GetRouterOutputCommandOutput>>;

  /**
   * @see {@link GetRouterOutputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilOutputStandby(
    args: GetRouterOutputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<GetRouterOutputCommandOutput>>;

  /**
   * @see {@link GetRouterOutputCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilOutputUnrouted(
    args: GetRouterOutputCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaConnect>, "client">
  ): Promise<WaiterResult<GetRouterOutputCommandOutput>>;
}

/**
 * <p>Welcome to the Elemental MediaConnect API reference. </p> <p>MediaConnect is a service that lets you ingest live video content into the cloud and distribute it to destinations all over the world, both inside and outside the Amazon Web Services cloud. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by MediaConnect. </p> <p>Use the following links to get started with the MediaConnect API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Operations.html">Actions</a>: An alphabetical list of all MediaConnect API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Types.html">Data types</a>: An alphabetical list of all MediaConnect data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul>
 * @public
 */
export class MediaConnect extends MediaConnectClient implements MediaConnect {}
createAggregatedClient(commands, MediaConnect, { paginators, waiters });
