// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  RevokeFlowEntitlementCommand,
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput,
} from "./commands/RevokeFlowEntitlementCommand";
import { StartFlowCommand, StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import { StopFlowCommand, StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
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
import { MediaConnectClient, MediaConnectClientConfig } from "./MediaConnectClient";

const commands = {
  AddBridgeOutputsCommand,
  AddBridgeSourcesCommand,
  AddFlowMediaStreamsCommand,
  AddFlowOutputsCommand,
  AddFlowSourcesCommand,
  AddFlowVpcInterfacesCommand,
  CreateBridgeCommand,
  CreateFlowCommand,
  CreateGatewayCommand,
  DeleteBridgeCommand,
  DeleteFlowCommand,
  DeleteGatewayCommand,
  DeregisterGatewayInstanceCommand,
  DescribeBridgeCommand,
  DescribeFlowCommand,
  DescribeGatewayCommand,
  DescribeGatewayInstanceCommand,
  DescribeOfferingCommand,
  DescribeReservationCommand,
  GrantFlowEntitlementsCommand,
  ListBridgesCommand,
  ListEntitlementsCommand,
  ListFlowsCommand,
  ListGatewayInstancesCommand,
  ListGatewaysCommand,
  ListOfferingsCommand,
  ListReservationsCommand,
  ListTagsForResourceCommand,
  PurchaseOfferingCommand,
  RemoveBridgeOutputCommand,
  RemoveBridgeSourceCommand,
  RemoveFlowMediaStreamCommand,
  RemoveFlowOutputCommand,
  RemoveFlowSourceCommand,
  RemoveFlowVpcInterfaceCommand,
  RevokeFlowEntitlementCommand,
  StartFlowCommand,
  StopFlowCommand,
  TagResourceCommand,
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
}

/**
 * @public
 * API for AWS Elemental MediaConnect
 */
export class MediaConnect extends MediaConnectClient implements MediaConnect {}
createAggregatedClient(commands, MediaConnect);
