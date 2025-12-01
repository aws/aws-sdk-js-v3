// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddBridgeOutputsCommand,
  AddBridgeOutputsCommandInput,
  AddBridgeOutputsCommandOutput,
} from "./commands/AddBridgeOutputsCommand";
import {
  AddBridgeSourcesCommand,
  AddBridgeSourcesCommandInput,
  AddBridgeSourcesCommandOutput,
} from "./commands/AddBridgeSourcesCommand";
import {
  AddFlowMediaStreamsCommand,
  AddFlowMediaStreamsCommandInput,
  AddFlowMediaStreamsCommandOutput,
} from "./commands/AddFlowMediaStreamsCommand";
import {
  AddFlowOutputsCommand,
  AddFlowOutputsCommandInput,
  AddFlowOutputsCommandOutput,
} from "./commands/AddFlowOutputsCommand";
import {
  AddFlowSourcesCommand,
  AddFlowSourcesCommandInput,
  AddFlowSourcesCommandOutput,
} from "./commands/AddFlowSourcesCommand";
import {
  AddFlowVpcInterfacesCommand,
  AddFlowVpcInterfacesCommandInput,
  AddFlowVpcInterfacesCommandOutput,
} from "./commands/AddFlowVpcInterfacesCommand";
import {
  BatchGetRouterInputCommand,
  BatchGetRouterInputCommandInput,
  BatchGetRouterInputCommandOutput,
} from "./commands/BatchGetRouterInputCommand";
import {
  BatchGetRouterNetworkInterfaceCommand,
  BatchGetRouterNetworkInterfaceCommandInput,
  BatchGetRouterNetworkInterfaceCommandOutput,
} from "./commands/BatchGetRouterNetworkInterfaceCommand";
import {
  BatchGetRouterOutputCommand,
  BatchGetRouterOutputCommandInput,
  BatchGetRouterOutputCommandOutput,
} from "./commands/BatchGetRouterOutputCommand";
import {
  CreateBridgeCommand,
  CreateBridgeCommandInput,
  CreateBridgeCommandOutput,
} from "./commands/CreateBridgeCommand";
import { CreateFlowCommand, CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import {
  CreateGatewayCommand,
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
} from "./commands/CreateGatewayCommand";
import {
  CreateRouterInputCommand,
  CreateRouterInputCommandInput,
  CreateRouterInputCommandOutput,
} from "./commands/CreateRouterInputCommand";
import {
  CreateRouterNetworkInterfaceCommand,
  CreateRouterNetworkInterfaceCommandInput,
  CreateRouterNetworkInterfaceCommandOutput,
} from "./commands/CreateRouterNetworkInterfaceCommand";
import {
  CreateRouterOutputCommand,
  CreateRouterOutputCommandInput,
  CreateRouterOutputCommandOutput,
} from "./commands/CreateRouterOutputCommand";
import {
  DeleteBridgeCommand,
  DeleteBridgeCommandInput,
  DeleteBridgeCommandOutput,
} from "./commands/DeleteBridgeCommand";
import { DeleteFlowCommand, DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeleteRouterInputCommand,
  DeleteRouterInputCommandInput,
  DeleteRouterInputCommandOutput,
} from "./commands/DeleteRouterInputCommand";
import {
  DeleteRouterNetworkInterfaceCommand,
  DeleteRouterNetworkInterfaceCommandInput,
  DeleteRouterNetworkInterfaceCommandOutput,
} from "./commands/DeleteRouterNetworkInterfaceCommand";
import {
  DeleteRouterOutputCommand,
  DeleteRouterOutputCommandInput,
  DeleteRouterOutputCommandOutput,
} from "./commands/DeleteRouterOutputCommand";
import {
  DeregisterGatewayInstanceCommand,
  DeregisterGatewayInstanceCommandInput,
  DeregisterGatewayInstanceCommandOutput,
} from "./commands/DeregisterGatewayInstanceCommand";
import {
  DescribeBridgeCommand,
  DescribeBridgeCommandInput,
  DescribeBridgeCommandOutput,
} from "./commands/DescribeBridgeCommand";
import {
  DescribeFlowCommand,
  DescribeFlowCommandInput,
  DescribeFlowCommandOutput,
} from "./commands/DescribeFlowCommand";
import {
  DescribeFlowSourceMetadataCommand,
  DescribeFlowSourceMetadataCommandInput,
  DescribeFlowSourceMetadataCommandOutput,
} from "./commands/DescribeFlowSourceMetadataCommand";
import {
  DescribeFlowSourceThumbnailCommand,
  DescribeFlowSourceThumbnailCommandInput,
  DescribeFlowSourceThumbnailCommandOutput,
} from "./commands/DescribeFlowSourceThumbnailCommand";
import {
  DescribeGatewayCommand,
  DescribeGatewayCommandInput,
  DescribeGatewayCommandOutput,
} from "./commands/DescribeGatewayCommand";
import {
  DescribeGatewayInstanceCommand,
  DescribeGatewayInstanceCommandInput,
  DescribeGatewayInstanceCommandOutput,
} from "./commands/DescribeGatewayInstanceCommand";
import {
  DescribeOfferingCommand,
  DescribeOfferingCommandInput,
  DescribeOfferingCommandOutput,
} from "./commands/DescribeOfferingCommand";
import {
  DescribeReservationCommand,
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "./commands/DescribeReservationCommand";
import {
  GetRouterInputCommand,
  GetRouterInputCommandInput,
  GetRouterInputCommandOutput,
} from "./commands/GetRouterInputCommand";
import {
  GetRouterInputSourceMetadataCommand,
  GetRouterInputSourceMetadataCommandInput,
  GetRouterInputSourceMetadataCommandOutput,
} from "./commands/GetRouterInputSourceMetadataCommand";
import {
  GetRouterInputThumbnailCommand,
  GetRouterInputThumbnailCommandInput,
  GetRouterInputThumbnailCommandOutput,
} from "./commands/GetRouterInputThumbnailCommand";
import {
  GetRouterNetworkInterfaceCommand,
  GetRouterNetworkInterfaceCommandInput,
  GetRouterNetworkInterfaceCommandOutput,
} from "./commands/GetRouterNetworkInterfaceCommand";
import {
  GetRouterOutputCommand,
  GetRouterOutputCommandInput,
  GetRouterOutputCommandOutput,
} from "./commands/GetRouterOutputCommand";
import {
  GrantFlowEntitlementsCommand,
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput,
} from "./commands/GrantFlowEntitlementsCommand";
import { ListBridgesCommand, ListBridgesCommandInput, ListBridgesCommandOutput } from "./commands/ListBridgesCommand";
import {
  ListEntitlementsCommand,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput,
} from "./commands/ListEntitlementsCommand";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import {
  ListGatewayInstancesCommand,
  ListGatewayInstancesCommandInput,
  ListGatewayInstancesCommandOutput,
} from "./commands/ListGatewayInstancesCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "./commands/ListOfferingsCommand";
import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "./commands/ListReservationsCommand";
import {
  ListRouterInputsCommand,
  ListRouterInputsCommandInput,
  ListRouterInputsCommandOutput,
} from "./commands/ListRouterInputsCommand";
import {
  ListRouterNetworkInterfacesCommand,
  ListRouterNetworkInterfacesCommandInput,
  ListRouterNetworkInterfacesCommandOutput,
} from "./commands/ListRouterNetworkInterfacesCommand";
import {
  ListRouterOutputsCommand,
  ListRouterOutputsCommandInput,
  ListRouterOutputsCommandOutput,
} from "./commands/ListRouterOutputsCommand";
import {
  ListTagsForGlobalResourceCommand,
  ListTagsForGlobalResourceCommandInput,
  ListTagsForGlobalResourceCommandOutput,
} from "./commands/ListTagsForGlobalResourceCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PurchaseOfferingCommand,
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
} from "./commands/PurchaseOfferingCommand";
import {
  RemoveBridgeOutputCommand,
  RemoveBridgeOutputCommandInput,
  RemoveBridgeOutputCommandOutput,
} from "./commands/RemoveBridgeOutputCommand";
import {
  RemoveBridgeSourceCommand,
  RemoveBridgeSourceCommandInput,
  RemoveBridgeSourceCommandOutput,
} from "./commands/RemoveBridgeSourceCommand";
import {
  RemoveFlowMediaStreamCommand,
  RemoveFlowMediaStreamCommandInput,
  RemoveFlowMediaStreamCommandOutput,
} from "./commands/RemoveFlowMediaStreamCommand";
import {
  RemoveFlowOutputCommand,
  RemoveFlowOutputCommandInput,
  RemoveFlowOutputCommandOutput,
} from "./commands/RemoveFlowOutputCommand";
import {
  RemoveFlowSourceCommand,
  RemoveFlowSourceCommandInput,
  RemoveFlowSourceCommandOutput,
} from "./commands/RemoveFlowSourceCommand";
import {
  RemoveFlowVpcInterfaceCommand,
  RemoveFlowVpcInterfaceCommandInput,
  RemoveFlowVpcInterfaceCommandOutput,
} from "./commands/RemoveFlowVpcInterfaceCommand";
import {
  RestartRouterInputCommand,
  RestartRouterInputCommandInput,
  RestartRouterInputCommandOutput,
} from "./commands/RestartRouterInputCommand";
import {
  RestartRouterOutputCommand,
  RestartRouterOutputCommandInput,
  RestartRouterOutputCommandOutput,
} from "./commands/RestartRouterOutputCommand";
import {
  RevokeFlowEntitlementCommand,
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput,
} from "./commands/RevokeFlowEntitlementCommand";
import { StartFlowCommand, StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import {
  StartRouterInputCommand,
  StartRouterInputCommandInput,
  StartRouterInputCommandOutput,
} from "./commands/StartRouterInputCommand";
import {
  StartRouterOutputCommand,
  StartRouterOutputCommandInput,
  StartRouterOutputCommandOutput,
} from "./commands/StartRouterOutputCommand";
import { StopFlowCommand, StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import {
  StopRouterInputCommand,
  StopRouterInputCommandInput,
  StopRouterInputCommandOutput,
} from "./commands/StopRouterInputCommand";
import {
  StopRouterOutputCommand,
  StopRouterOutputCommandInput,
  StopRouterOutputCommandOutput,
} from "./commands/StopRouterOutputCommand";
import {
  TagGlobalResourceCommand,
  TagGlobalResourceCommandInput,
  TagGlobalResourceCommandOutput,
} from "./commands/TagGlobalResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TakeRouterInputCommand,
  TakeRouterInputCommandInput,
  TakeRouterInputCommandOutput,
} from "./commands/TakeRouterInputCommand";
import {
  UntagGlobalResourceCommand,
  UntagGlobalResourceCommandInput,
  UntagGlobalResourceCommandOutput,
} from "./commands/UntagGlobalResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBridgeCommand,
  UpdateBridgeCommandInput,
  UpdateBridgeCommandOutput,
} from "./commands/UpdateBridgeCommand";
import {
  UpdateBridgeOutputCommand,
  UpdateBridgeOutputCommandInput,
  UpdateBridgeOutputCommandOutput,
} from "./commands/UpdateBridgeOutputCommand";
import {
  UpdateBridgeSourceCommand,
  UpdateBridgeSourceCommandInput,
  UpdateBridgeSourceCommandOutput,
} from "./commands/UpdateBridgeSourceCommand";
import {
  UpdateBridgeStateCommand,
  UpdateBridgeStateCommandInput,
  UpdateBridgeStateCommandOutput,
} from "./commands/UpdateBridgeStateCommand";
import { UpdateFlowCommand, UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import {
  UpdateFlowEntitlementCommand,
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput,
} from "./commands/UpdateFlowEntitlementCommand";
import {
  UpdateFlowMediaStreamCommand,
  UpdateFlowMediaStreamCommandInput,
  UpdateFlowMediaStreamCommandOutput,
} from "./commands/UpdateFlowMediaStreamCommand";
import {
  UpdateFlowOutputCommand,
  UpdateFlowOutputCommandInput,
  UpdateFlowOutputCommandOutput,
} from "./commands/UpdateFlowOutputCommand";
import {
  UpdateFlowSourceCommand,
  UpdateFlowSourceCommandInput,
  UpdateFlowSourceCommandOutput,
} from "./commands/UpdateFlowSourceCommand";
import {
  UpdateGatewayInstanceCommand,
  UpdateGatewayInstanceCommandInput,
  UpdateGatewayInstanceCommandOutput,
} from "./commands/UpdateGatewayInstanceCommand";
import {
  UpdateRouterInputCommand,
  UpdateRouterInputCommandInput,
  UpdateRouterInputCommandOutput,
} from "./commands/UpdateRouterInputCommand";
import {
  UpdateRouterNetworkInterfaceCommand,
  UpdateRouterNetworkInterfaceCommandInput,
  UpdateRouterNetworkInterfaceCommandOutput,
} from "./commands/UpdateRouterNetworkInterfaceCommand";
import {
  UpdateRouterOutputCommand,
  UpdateRouterOutputCommandInput,
  UpdateRouterOutputCommandOutput,
} from "./commands/UpdateRouterOutputCommand";
import { MediaConnectClient } from "./MediaConnectClient";

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

export interface MediaConnect {
  /**
   * @see {@link AddBridgeOutputsCommand}
   */
  addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddBridgeOutputsCommandOutput>;
  addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    cb: (err: any, data?: AddBridgeOutputsCommandOutput) => void
  ): void;
  addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddBridgeOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddBridgeSourcesCommand}
   */
  addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddBridgeSourcesCommandOutput>;
  addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    cb: (err: any, data?: AddBridgeSourcesCommandOutput) => void
  ): void;
  addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddBridgeSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowMediaStreamsCommand}
   */
  addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowMediaStreamsCommandOutput>;
  addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void
  ): void;
  addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowOutputsCommand}
   */
  addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowOutputsCommandOutput>;
  addFlowOutputs(args: AddFlowOutputsCommandInput, cb: (err: any, data?: AddFlowOutputsCommandOutput) => void): void;
  addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowSourcesCommand}
   */
  addFlowSources(
    args: AddFlowSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowSourcesCommandOutput>;
  addFlowSources(args: AddFlowSourcesCommandInput, cb: (err: any, data?: AddFlowSourcesCommandOutput) => void): void;
  addFlowSources(
    args: AddFlowSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddFlowVpcInterfacesCommand}
   */
  addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowVpcInterfacesCommandOutput>;
  addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;
  addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRouterInputCommand}
   */
  batchGetRouterInput(
    args: BatchGetRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRouterInputCommandOutput>;
  batchGetRouterInput(
    args: BatchGetRouterInputCommandInput,
    cb: (err: any, data?: BatchGetRouterInputCommandOutput) => void
  ): void;
  batchGetRouterInput(
    args: BatchGetRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRouterNetworkInterfaceCommand}
   */
  batchGetRouterNetworkInterface(
    args: BatchGetRouterNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRouterNetworkInterfaceCommandOutput>;
  batchGetRouterNetworkInterface(
    args: BatchGetRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: BatchGetRouterNetworkInterfaceCommandOutput) => void
  ): void;
  batchGetRouterNetworkInterface(
    args: BatchGetRouterNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRouterOutputCommand}
   */
  batchGetRouterOutput(
    args: BatchGetRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRouterOutputCommandOutput>;
  batchGetRouterOutput(
    args: BatchGetRouterOutputCommandInput,
    cb: (err: any, data?: BatchGetRouterOutputCommandOutput) => void
  ): void;
  batchGetRouterOutput(
    args: BatchGetRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBridgeCommand}
   */
  createBridge(args: CreateBridgeCommandInput, options?: __HttpHandlerOptions): Promise<CreateBridgeCommandOutput>;
  createBridge(args: CreateBridgeCommandInput, cb: (err: any, data?: CreateBridgeCommandOutput) => void): void;
  createBridge(
    args: CreateBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowCommand}
   */
  createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
  createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
  createFlow(
    args: CreateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(args: CreateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<CreateGatewayCommandOutput>;
  createGateway(args: CreateGatewayCommandInput, cb: (err: any, data?: CreateGatewayCommandOutput) => void): void;
  createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouterInputCommand}
   */
  createRouterInput(
    args: CreateRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouterInputCommandOutput>;
  createRouterInput(
    args: CreateRouterInputCommandInput,
    cb: (err: any, data?: CreateRouterInputCommandOutput) => void
  ): void;
  createRouterInput(
    args: CreateRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouterNetworkInterfaceCommand}
   */
  createRouterNetworkInterface(
    args: CreateRouterNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouterNetworkInterfaceCommandOutput>;
  createRouterNetworkInterface(
    args: CreateRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: CreateRouterNetworkInterfaceCommandOutput) => void
  ): void;
  createRouterNetworkInterface(
    args: CreateRouterNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouterOutputCommand}
   */
  createRouterOutput(
    args: CreateRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouterOutputCommandOutput>;
  createRouterOutput(
    args: CreateRouterOutputCommandInput,
    cb: (err: any, data?: CreateRouterOutputCommandOutput) => void
  ): void;
  createRouterOutput(
    args: CreateRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBridgeCommand}
   */
  deleteBridge(args: DeleteBridgeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBridgeCommandOutput>;
  deleteBridge(args: DeleteBridgeCommandInput, cb: (err: any, data?: DeleteBridgeCommandOutput) => void): void;
  deleteBridge(
    args: DeleteBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowCommand}
   */
  deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
  deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
  deleteFlow(
    args: DeleteFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(args: DeleteGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(args: DeleteGatewayCommandInput, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouterInputCommand}
   */
  deleteRouterInput(
    args: DeleteRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouterInputCommandOutput>;
  deleteRouterInput(
    args: DeleteRouterInputCommandInput,
    cb: (err: any, data?: DeleteRouterInputCommandOutput) => void
  ): void;
  deleteRouterInput(
    args: DeleteRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouterNetworkInterfaceCommand}
   */
  deleteRouterNetworkInterface(
    args: DeleteRouterNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouterNetworkInterfaceCommandOutput>;
  deleteRouterNetworkInterface(
    args: DeleteRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: DeleteRouterNetworkInterfaceCommandOutput) => void
  ): void;
  deleteRouterNetworkInterface(
    args: DeleteRouterNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouterOutputCommand}
   */
  deleteRouterOutput(
    args: DeleteRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouterOutputCommandOutput>;
  deleteRouterOutput(
    args: DeleteRouterOutputCommandInput,
    cb: (err: any, data?: DeleteRouterOutputCommandOutput) => void
  ): void;
  deleteRouterOutput(
    args: DeleteRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterGatewayInstanceCommand}
   */
  deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterGatewayInstanceCommandOutput>;
  deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    cb: (err: any, data?: DeregisterGatewayInstanceCommandOutput) => void
  ): void;
  deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterGatewayInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBridgeCommand}
   */
  describeBridge(
    args: DescribeBridgeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBridgeCommandOutput>;
  describeBridge(args: DescribeBridgeCommandInput, cb: (err: any, data?: DescribeBridgeCommandOutput) => void): void;
  describeBridge(
    args: DescribeBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowCommand}
   */
  describeFlow(args: DescribeFlowCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFlowCommandOutput>;
  describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
  describeFlow(
    args: DescribeFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowSourceMetadataCommand}
   */
  describeFlowSourceMetadata(
    args: DescribeFlowSourceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowSourceMetadataCommandOutput>;
  describeFlowSourceMetadata(
    args: DescribeFlowSourceMetadataCommandInput,
    cb: (err: any, data?: DescribeFlowSourceMetadataCommandOutput) => void
  ): void;
  describeFlowSourceMetadata(
    args: DescribeFlowSourceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowSourceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowSourceThumbnailCommand}
   */
  describeFlowSourceThumbnail(
    args: DescribeFlowSourceThumbnailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowSourceThumbnailCommandOutput>;
  describeFlowSourceThumbnail(
    args: DescribeFlowSourceThumbnailCommandInput,
    cb: (err: any, data?: DescribeFlowSourceThumbnailCommandOutput) => void
  ): void;
  describeFlowSourceThumbnail(
    args: DescribeFlowSourceThumbnailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowSourceThumbnailCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayCommand}
   */
  describeGateway(
    args: DescribeGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayCommandOutput>;
  describeGateway(args: DescribeGatewayCommandInput, cb: (err: any, data?: DescribeGatewayCommandOutput) => void): void;
  describeGateway(
    args: DescribeGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayInstanceCommand}
   */
  describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayInstanceCommandOutput>;
  describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    cb: (err: any, data?: DescribeGatewayInstanceCommandOutput) => void
  ): void;
  describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOfferingCommand}
   */
  describeOffering(
    args: DescribeOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOfferingCommandOutput>;
  describeOffering(
    args: DescribeOfferingCommandInput,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  describeOffering(
    args: DescribeOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservationCommand}
   */
  describeReservation(
    args: DescribeReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservationCommandOutput>;
  describeReservation(
    args: DescribeReservationCommandInput,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  describeReservation(
    args: DescribeReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterInputCommand}
   */
  getRouterInput(
    args: GetRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouterInputCommandOutput>;
  getRouterInput(args: GetRouterInputCommandInput, cb: (err: any, data?: GetRouterInputCommandOutput) => void): void;
  getRouterInput(
    args: GetRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterInputSourceMetadataCommand}
   */
  getRouterInputSourceMetadata(
    args: GetRouterInputSourceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouterInputSourceMetadataCommandOutput>;
  getRouterInputSourceMetadata(
    args: GetRouterInputSourceMetadataCommandInput,
    cb: (err: any, data?: GetRouterInputSourceMetadataCommandOutput) => void
  ): void;
  getRouterInputSourceMetadata(
    args: GetRouterInputSourceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouterInputSourceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterInputThumbnailCommand}
   */
  getRouterInputThumbnail(
    args: GetRouterInputThumbnailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouterInputThumbnailCommandOutput>;
  getRouterInputThumbnail(
    args: GetRouterInputThumbnailCommandInput,
    cb: (err: any, data?: GetRouterInputThumbnailCommandOutput) => void
  ): void;
  getRouterInputThumbnail(
    args: GetRouterInputThumbnailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouterInputThumbnailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterNetworkInterfaceCommand}
   */
  getRouterNetworkInterface(
    args: GetRouterNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouterNetworkInterfaceCommandOutput>;
  getRouterNetworkInterface(
    args: GetRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: GetRouterNetworkInterfaceCommandOutput) => void
  ): void;
  getRouterNetworkInterface(
    args: GetRouterNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouterOutputCommand}
   */
  getRouterOutput(
    args: GetRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouterOutputCommandOutput>;
  getRouterOutput(args: GetRouterOutputCommandInput, cb: (err: any, data?: GetRouterOutputCommandOutput) => void): void;
  getRouterOutput(
    args: GetRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link GrantFlowEntitlementsCommand}
   */
  grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GrantFlowEntitlementsCommandOutput>;
  grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;
  grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBridgesCommand}
   */
  listBridges(): Promise<ListBridgesCommandOutput>;
  listBridges(args: ListBridgesCommandInput, options?: __HttpHandlerOptions): Promise<ListBridgesCommandOutput>;
  listBridges(args: ListBridgesCommandInput, cb: (err: any, data?: ListBridgesCommandOutput) => void): void;
  listBridges(
    args: ListBridgesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBridgesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitlementsCommand}
   */
  listEntitlements(): Promise<ListEntitlementsCommandOutput>;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitlementsCommandOutput>;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;
  listEntitlements(
    args: ListEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(): Promise<ListFlowsCommandOutput>;
  listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
  listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewayInstancesCommand}
   */
  listGatewayInstances(): Promise<ListGatewayInstancesCommandOutput>;
  listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewayInstancesCommandOutput>;
  listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    cb: (err: any, data?: ListGatewayInstancesCommandOutput) => void
  ): void;
  listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewayInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingsCommand}
   */
  listOfferings(): Promise<ListOfferingsCommandOutput>;
  listOfferings(args: ListOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingsCommandOutput>;
  listOfferings(args: ListOfferingsCommandInput, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
  listOfferings(
    args: ListOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReservationsCommand}
   */
  listReservations(): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  listReservations(
    args: ListReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRouterInputsCommand}
   */
  listRouterInputs(): Promise<ListRouterInputsCommandOutput>;
  listRouterInputs(
    args: ListRouterInputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRouterInputsCommandOutput>;
  listRouterInputs(
    args: ListRouterInputsCommandInput,
    cb: (err: any, data?: ListRouterInputsCommandOutput) => void
  ): void;
  listRouterInputs(
    args: ListRouterInputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRouterInputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRouterNetworkInterfacesCommand}
   */
  listRouterNetworkInterfaces(): Promise<ListRouterNetworkInterfacesCommandOutput>;
  listRouterNetworkInterfaces(
    args: ListRouterNetworkInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRouterNetworkInterfacesCommandOutput>;
  listRouterNetworkInterfaces(
    args: ListRouterNetworkInterfacesCommandInput,
    cb: (err: any, data?: ListRouterNetworkInterfacesCommandOutput) => void
  ): void;
  listRouterNetworkInterfaces(
    args: ListRouterNetworkInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRouterNetworkInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRouterOutputsCommand}
   */
  listRouterOutputs(): Promise<ListRouterOutputsCommandOutput>;
  listRouterOutputs(
    args: ListRouterOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRouterOutputsCommandOutput>;
  listRouterOutputs(
    args: ListRouterOutputsCommandInput,
    cb: (err: any, data?: ListRouterOutputsCommandOutput) => void
  ): void;
  listRouterOutputs(
    args: ListRouterOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRouterOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForGlobalResourceCommand}
   */
  listTagsForGlobalResource(
    args: ListTagsForGlobalResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForGlobalResourceCommandOutput>;
  listTagsForGlobalResource(
    args: ListTagsForGlobalResourceCommandInput,
    cb: (err: any, data?: ListTagsForGlobalResourceCommandOutput) => void
  ): void;
  listTagsForGlobalResource(
    args: ListTagsForGlobalResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForGlobalResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseOfferingCommand}
   */
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseOfferingCommandOutput>;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveBridgeOutputCommand}
   */
  removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveBridgeOutputCommandOutput>;
  removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    cb: (err: any, data?: RemoveBridgeOutputCommandOutput) => void
  ): void;
  removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveBridgeOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveBridgeSourceCommand}
   */
  removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveBridgeSourceCommandOutput>;
  removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    cb: (err: any, data?: RemoveBridgeSourceCommandOutput) => void
  ): void;
  removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveBridgeSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowMediaStreamCommand}
   */
  removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowMediaStreamCommandOutput>;
  removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void
  ): void;
  removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowOutputCommand}
   */
  removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowOutputCommandOutput>;
  removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;
  removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowSourceCommand}
   */
  removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowSourceCommandOutput>;
  removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;
  removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFlowVpcInterfaceCommand}
   */
  removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowVpcInterfaceCommandOutput>;
  removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;
  removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartRouterInputCommand}
   */
  restartRouterInput(
    args: RestartRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestartRouterInputCommandOutput>;
  restartRouterInput(
    args: RestartRouterInputCommandInput,
    cb: (err: any, data?: RestartRouterInputCommandOutput) => void
  ): void;
  restartRouterInput(
    args: RestartRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestartRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartRouterOutputCommand}
   */
  restartRouterOutput(
    args: RestartRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestartRouterOutputCommandOutput>;
  restartRouterOutput(
    args: RestartRouterOutputCommandInput,
    cb: (err: any, data?: RestartRouterOutputCommandOutput) => void
  ): void;
  restartRouterOutput(
    args: RestartRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestartRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeFlowEntitlementCommand}
   */
  revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeFlowEntitlementCommandOutput>;
  revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;
  revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowCommand}
   */
  startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
  startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
  startFlow(
    args: StartFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRouterInputCommand}
   */
  startRouterInput(
    args: StartRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRouterInputCommandOutput>;
  startRouterInput(
    args: StartRouterInputCommandInput,
    cb: (err: any, data?: StartRouterInputCommandOutput) => void
  ): void;
  startRouterInput(
    args: StartRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRouterOutputCommand}
   */
  startRouterOutput(
    args: StartRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRouterOutputCommandOutput>;
  startRouterOutput(
    args: StartRouterOutputCommandInput,
    cb: (err: any, data?: StartRouterOutputCommandOutput) => void
  ): void;
  startRouterOutput(
    args: StartRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFlowCommand}
   */
  stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
  stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
  stopFlow(
    args: StopFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRouterInputCommand}
   */
  stopRouterInput(
    args: StopRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRouterInputCommandOutput>;
  stopRouterInput(args: StopRouterInputCommandInput, cb: (err: any, data?: StopRouterInputCommandOutput) => void): void;
  stopRouterInput(
    args: StopRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRouterOutputCommand}
   */
  stopRouterOutput(
    args: StopRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRouterOutputCommandOutput>;
  stopRouterOutput(
    args: StopRouterOutputCommandInput,
    cb: (err: any, data?: StopRouterOutputCommandOutput) => void
  ): void;
  stopRouterOutput(
    args: StopRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRouterOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link TagGlobalResourceCommand}
   */
  tagGlobalResource(
    args: TagGlobalResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagGlobalResourceCommandOutput>;
  tagGlobalResource(
    args: TagGlobalResourceCommandInput,
    cb: (err: any, data?: TagGlobalResourceCommandOutput) => void
  ): void;
  tagGlobalResource(
    args: TagGlobalResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagGlobalResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TakeRouterInputCommand}
   */
  takeRouterInput(
    args: TakeRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TakeRouterInputCommandOutput>;
  takeRouterInput(args: TakeRouterInputCommandInput, cb: (err: any, data?: TakeRouterInputCommandOutput) => void): void;
  takeRouterInput(
    args: TakeRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TakeRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagGlobalResourceCommand}
   */
  untagGlobalResource(
    args: UntagGlobalResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagGlobalResourceCommandOutput>;
  untagGlobalResource(
    args: UntagGlobalResourceCommandInput,
    cb: (err: any, data?: UntagGlobalResourceCommandOutput) => void
  ): void;
  untagGlobalResource(
    args: UntagGlobalResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagGlobalResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeCommand}
   */
  updateBridge(args: UpdateBridgeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBridgeCommandOutput>;
  updateBridge(args: UpdateBridgeCommandInput, cb: (err: any, data?: UpdateBridgeCommandOutput) => void): void;
  updateBridge(
    args: UpdateBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeOutputCommand}
   */
  updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBridgeOutputCommandOutput>;
  updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    cb: (err: any, data?: UpdateBridgeOutputCommandOutput) => void
  ): void;
  updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeSourceCommand}
   */
  updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBridgeSourceCommandOutput>;
  updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    cb: (err: any, data?: UpdateBridgeSourceCommandOutput) => void
  ): void;
  updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBridgeStateCommand}
   */
  updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBridgeStateCommandOutput>;
  updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    cb: (err: any, data?: UpdateBridgeStateCommandOutput) => void
  ): void;
  updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowCommand}
   */
  updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
  updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
  updateFlow(
    args: UpdateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowEntitlementCommand}
   */
  updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowEntitlementCommandOutput>;
  updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;
  updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowMediaStreamCommand}
   */
  updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowMediaStreamCommandOutput>;
  updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void
  ): void;
  updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowOutputCommand}
   */
  updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowOutputCommandOutput>;
  updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;
  updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowSourceCommand}
   */
  updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowSourceCommandOutput>;
  updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;
  updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayInstanceCommand}
   */
  updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayInstanceCommandOutput>;
  updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    cb: (err: any, data?: UpdateGatewayInstanceCommandOutput) => void
  ): void;
  updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouterInputCommand}
   */
  updateRouterInput(
    args: UpdateRouterInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouterInputCommandOutput>;
  updateRouterInput(
    args: UpdateRouterInputCommandInput,
    cb: (err: any, data?: UpdateRouterInputCommandOutput) => void
  ): void;
  updateRouterInput(
    args: UpdateRouterInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouterInputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouterNetworkInterfaceCommand}
   */
  updateRouterNetworkInterface(
    args: UpdateRouterNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouterNetworkInterfaceCommandOutput>;
  updateRouterNetworkInterface(
    args: UpdateRouterNetworkInterfaceCommandInput,
    cb: (err: any, data?: UpdateRouterNetworkInterfaceCommandOutput) => void
  ): void;
  updateRouterNetworkInterface(
    args: UpdateRouterNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouterNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouterOutputCommand}
   */
  updateRouterOutput(
    args: UpdateRouterOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouterOutputCommandOutput>;
  updateRouterOutput(
    args: UpdateRouterOutputCommandInput,
    cb: (err: any, data?: UpdateRouterOutputCommandOutput) => void
  ): void;
  updateRouterOutput(
    args: UpdateRouterOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouterOutputCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the Elemental MediaConnect API reference. </p> <p>MediaConnect is a service that lets you ingest live video content into the cloud and distribute it to destinations all over the world, both inside and outside the Amazon Web Services cloud. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by MediaConnect. </p> <p>Use the following links to get started with the MediaConnect API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Operations.html">Actions</a>: An alphabetical list of all MediaConnect API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Types.html">Data types</a>: An alphabetical list of all MediaConnect data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul>
 * @public
 */
export class MediaConnect extends MediaConnectClient implements MediaConnect {}
createAggregatedClient(commands, MediaConnect);
