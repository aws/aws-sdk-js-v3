// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { MediaConnectClient } from "./MediaConnectClient";

/**
 * @public
 * API for AWS Elemental MediaConnect
 */
export class MediaConnect extends MediaConnectClient {
  /**
   * @public
   * Adds outputs to an existing bridge.
   */
  public addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddBridgeOutputsCommandOutput>;
  public addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    cb: (err: any, data?: AddBridgeOutputsCommandOutput) => void
  ): void;
  public addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddBridgeOutputsCommandOutput) => void
  ): void;
  public addBridgeOutputs(
    args: AddBridgeOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddBridgeOutputsCommandOutput) => void),
    cb?: (err: any, data?: AddBridgeOutputsCommandOutput) => void
  ): Promise<AddBridgeOutputsCommandOutput> | void {
    const command = new AddBridgeOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Adds sources to an existing bridge.
   */
  public addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddBridgeSourcesCommandOutput>;
  public addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    cb: (err: any, data?: AddBridgeSourcesCommandOutput) => void
  ): void;
  public addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddBridgeSourcesCommandOutput) => void
  ): void;
  public addBridgeSources(
    args: AddBridgeSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddBridgeSourcesCommandOutput) => void),
    cb?: (err: any, data?: AddBridgeSourcesCommandOutput) => void
  ): Promise<AddBridgeSourcesCommandOutput> | void {
    const command = new AddBridgeSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
   */
  public addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowMediaStreamsCommandOutput>;
  public addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void
  ): void;
  public addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void
  ): void;
  public addFlowMediaStreams(
    args: AddFlowMediaStreamsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFlowMediaStreamsCommandOutput) => void),
    cb?: (err: any, data?: AddFlowMediaStreamsCommandOutput) => void
  ): Promise<AddFlowMediaStreamsCommandOutput> | void {
    const command = new AddFlowMediaStreamsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
   */
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowOutputsCommandOutput>;
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    cb: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): void;
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): void;
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFlowOutputsCommandOutput) => void),
    cb?: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): Promise<AddFlowOutputsCommandOutput> | void {
    const command = new AddFlowOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Adds Sources to flow
   */
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowSourcesCommandOutput>;
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    cb: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): void;
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): void;
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFlowSourcesCommandOutput) => void),
    cb?: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): Promise<AddFlowSourcesCommandOutput> | void {
    const command = new AddFlowSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Adds VPC interfaces to flow
   */
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowVpcInterfacesCommandOutput>;
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFlowVpcInterfacesCommandOutput) => void),
    cb?: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): Promise<AddFlowVpcInterfacesCommandOutput> | void {
    const command = new AddFlowVpcInterfacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Creates a new bridge. The request must include one source.
   */
  public createBridge(
    args: CreateBridgeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBridgeCommandOutput>;
  public createBridge(args: CreateBridgeCommandInput, cb: (err: any, data?: CreateBridgeCommandOutput) => void): void;
  public createBridge(
    args: CreateBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBridgeCommandOutput) => void
  ): void;
  public createBridge(
    args: CreateBridgeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBridgeCommandOutput) => void),
    cb?: (err: any, data?: CreateBridgeCommandOutput) => void
  ): Promise<CreateBridgeCommandOutput> | void {
    const command = new CreateBridgeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
   */
  public createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
  public createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
  public createFlow(
    args: CreateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
  public createFlow(
    args: CreateFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFlowCommandOutput) => void),
    cb?: (err: any, data?: CreateFlowCommandOutput) => void
  ): Promise<CreateFlowCommandOutput> | void {
    const command = new CreateFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Creates a new gateway. The request must include at least one network (up to 4).
   */
  public createGateway(
    args: CreateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayCommandOutput>;
  public createGateway(
    args: CreateGatewayCommandInput,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  public createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  public createGateway(
    args: CreateGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateGatewayCommandOutput) => void
  ): Promise<CreateGatewayCommandOutput> | void {
    const command = new CreateGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Deletes a bridge. Before you can delete a bridge, you must stop the bridge.
   */
  public deleteBridge(
    args: DeleteBridgeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBridgeCommandOutput>;
  public deleteBridge(args: DeleteBridgeCommandInput, cb: (err: any, data?: DeleteBridgeCommandOutput) => void): void;
  public deleteBridge(
    args: DeleteBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBridgeCommandOutput) => void
  ): void;
  public deleteBridge(
    args: DeleteBridgeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBridgeCommandOutput) => void),
    cb?: (err: any, data?: DeleteBridgeCommandOutput) => void
  ): Promise<DeleteBridgeCommandOutput> | void {
    const command = new DeleteBridgeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Deletes a flow. Before you can delete a flow, you must stop the flow.
   */
  public deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
  public deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
  public deleteFlow(
    args: DeleteFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
  public deleteFlow(
    args: DeleteFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFlowCommandOutput) => void),
    cb?: (err: any, data?: DeleteFlowCommandOutput) => void
  ): Promise<DeleteFlowCommandOutput> | void {
    const command = new DeleteFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Deletes a gateway. Before you can delete a gateway, you must deregister its instances and delete its bridges.
   */
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayCommandOutput>;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): Promise<DeleteGatewayCommandOutput> | void {
    const command = new DeleteGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Deregisters an instance. Before you deregister an instance, all bridges running on the instance must be stopped. If you want to deregister an instance without stopping the bridges, you must use the --force option.
   */
  public deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterGatewayInstanceCommandOutput>;
  public deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    cb: (err: any, data?: DeregisterGatewayInstanceCommandOutput) => void
  ): void;
  public deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterGatewayInstanceCommandOutput) => void
  ): void;
  public deregisterGatewayInstance(
    args: DeregisterGatewayInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterGatewayInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterGatewayInstanceCommandOutput) => void
  ): Promise<DeregisterGatewayInstanceCommandOutput> | void {
    const command = new DeregisterGatewayInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays the details of a bridge.
   */
  public describeBridge(
    args: DescribeBridgeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBridgeCommandOutput>;
  public describeBridge(
    args: DescribeBridgeCommandInput,
    cb: (err: any, data?: DescribeBridgeCommandOutput) => void
  ): void;
  public describeBridge(
    args: DescribeBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBridgeCommandOutput) => void
  ): void;
  public describeBridge(
    args: DescribeBridgeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBridgeCommandOutput) => void),
    cb?: (err: any, data?: DescribeBridgeCommandOutput) => void
  ): Promise<DescribeBridgeCommandOutput> | void {
    const command = new DescribeBridgeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
   */
  public describeFlow(
    args: DescribeFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowCommandOutput>;
  public describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
  public describeFlow(
    args: DescribeFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;
  public describeFlow(
    args: DescribeFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFlowCommandOutput) => void),
    cb?: (err: any, data?: DescribeFlowCommandOutput) => void
  ): Promise<DescribeFlowCommandOutput> | void {
    const command = new DescribeFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays the details of a gateway. The response includes the gateway ARN, name, and CIDR blocks, as well as details about the networks.
   */
  public describeGateway(
    args: DescribeGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayCommandOutput>;
  public describeGateway(
    args: DescribeGatewayCommandInput,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;
  public describeGateway(
    args: DescribeGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;
  public describeGateway(
    args: DescribeGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGatewayCommandOutput) => void),
    cb?: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): Promise<DescribeGatewayCommandOutput> | void {
    const command = new DescribeGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays the details of an instance.
   */
  public describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayInstanceCommandOutput>;
  public describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    cb: (err: any, data?: DescribeGatewayInstanceCommandOutput) => void
  ): void;
  public describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayInstanceCommandOutput) => void
  ): void;
  public describeGatewayInstance(
    args: DescribeGatewayInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGatewayInstanceCommandOutput) => void),
    cb?: (err: any, data?: DescribeGatewayInstanceCommandOutput) => void
  ): Promise<DescribeGatewayInstanceCommandOutput> | void {
    const command = new DescribeGatewayInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).
   */
  public describeOffering(
    args: DescribeOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOfferingCommandOutput>;
  public describeOffering(
    args: DescribeOfferingCommandInput,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  public describeOffering(
    args: DescribeOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  public describeOffering(
    args: DescribeOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOfferingCommandOutput) => void),
    cb?: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): Promise<DescribeOfferingCommandOutput> | void {
    const command = new DescribeOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).
   */
  public describeReservation(
    args: DescribeReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservationCommandOutput>;
  public describeReservation(
    args: DescribeReservationCommandInput,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  public describeReservation(
    args: DescribeReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  public describeReservation(
    args: DescribeReservationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservationCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservationCommandOutput) => void
  ): Promise<DescribeReservationCommandOutput> | void {
    const command = new DescribeReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Grants entitlements to an existing flow.
   */
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GrantFlowEntitlementsCommandOutput>;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GrantFlowEntitlementsCommandOutput) => void),
    cb?: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): Promise<GrantFlowEntitlementsCommandOutput> | void {
    const command = new GrantFlowEntitlementsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays a list of bridges that are associated with this account and an optionally specified Arn. This request returns a paginated result.
   */
  public listBridges(args: ListBridgesCommandInput, options?: __HttpHandlerOptions): Promise<ListBridgesCommandOutput>;
  public listBridges(args: ListBridgesCommandInput, cb: (err: any, data?: ListBridgesCommandOutput) => void): void;
  public listBridges(
    args: ListBridgesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBridgesCommandOutput) => void
  ): void;
  public listBridges(
    args: ListBridgesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBridgesCommandOutput) => void),
    cb?: (err: any, data?: ListBridgesCommandOutput) => void
  ): Promise<ListBridgesCommandOutput> | void {
    const command = new ListBridgesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
   */
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitlementsCommandOutput>;
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEntitlementsCommandOutput) => void),
    cb?: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): Promise<ListEntitlementsCommandOutput> | void {
    const command = new ListEntitlementsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays a list of flows that are associated with this account. This request returns a paginated result.
   */
  public listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
  public listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
  public listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  public listFlows(
    args: ListFlowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFlowsCommandOutput) => void),
    cb?: (err: any, data?: ListFlowsCommandOutput) => void
  ): Promise<ListFlowsCommandOutput> | void {
    const command = new ListFlowsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays a list of instances associated with the AWS account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
   */
  public listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewayInstancesCommandOutput>;
  public listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    cb: (err: any, data?: ListGatewayInstancesCommandOutput) => void
  ): void;
  public listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewayInstancesCommandOutput) => void
  ): void;
  public listGatewayInstances(
    args: ListGatewayInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewayInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListGatewayInstancesCommandOutput) => void
  ): Promise<ListGatewayInstancesCommandOutput> | void {
    const command = new ListGatewayInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays a list of gateways that are associated with this account. This request returns a paginated result.
   */
  public listGateways(
    args: ListGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewaysCommandOutput>;
  public listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListGatewaysCommandOutput) => void
  ): Promise<ListGatewaysCommandOutput> | void {
    const command = new ListGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays a list of all offerings that are available to this account in the current AWS Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.
   */
  public listOfferings(
    args: ListOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOfferingsCommandOutput>;
  public listOfferings(
    args: ListOfferingsCommandInput,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;
  public listOfferings(
    args: ListOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;
  public listOfferings(
    args: ListOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOfferingsCommandOutput) => void),
    cb?: (err: any, data?: ListOfferingsCommandOutput) => void
  ): Promise<ListOfferingsCommandOutput> | void {
    const command = new ListOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Displays a list of all reservations that have been purchased by this account in the current AWS Region. This list includes all reservations in all states (such as active and expired).
   */
  public listReservations(
    args: ListReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReservationsCommandOutput>;
  public listReservations(
    args: ListReservationsCommandInput,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  public listReservations(
    args: ListReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  public listReservations(
    args: ListReservationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReservationsCommandOutput) => void),
    cb?: (err: any, data?: ListReservationsCommandOutput) => void
  ): Promise<ListReservationsCommandOutput> | void {
    const command = new ListReservationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * List all tags on an AWS Elemental MediaConnect resource
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
   */
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseOfferingCommandOutput>;
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  public purchaseOffering(
    args: PurchaseOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): Promise<PurchaseOfferingCommandOutput> | void {
    const command = new PurchaseOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Removes an output from a bridge.
   */
  public removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveBridgeOutputCommandOutput>;
  public removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    cb: (err: any, data?: RemoveBridgeOutputCommandOutput) => void
  ): void;
  public removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveBridgeOutputCommandOutput) => void
  ): void;
  public removeBridgeOutput(
    args: RemoveBridgeOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveBridgeOutputCommandOutput) => void),
    cb?: (err: any, data?: RemoveBridgeOutputCommandOutput) => void
  ): Promise<RemoveBridgeOutputCommandOutput> | void {
    const command = new RemoveBridgeOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Removes a source from a bridge.
   */
  public removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveBridgeSourceCommandOutput>;
  public removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    cb: (err: any, data?: RemoveBridgeSourceCommandOutput) => void
  ): void;
  public removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveBridgeSourceCommandOutput) => void
  ): void;
  public removeBridgeSource(
    args: RemoveBridgeSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveBridgeSourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveBridgeSourceCommandOutput) => void
  ): Promise<RemoveBridgeSourceCommandOutput> | void {
    const command = new RemoveBridgeSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.
   */
  public removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowMediaStreamCommandOutput>;
  public removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void
  ): void;
  public removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void
  ): void;
  public removeFlowMediaStream(
    args: RemoveFlowMediaStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFlowMediaStreamCommandOutput) => void),
    cb?: (err: any, data?: RemoveFlowMediaStreamCommandOutput) => void
  ): Promise<RemoveFlowMediaStreamCommandOutput> | void {
    const command = new RemoveFlowMediaStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
   */
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowOutputCommandOutput>;
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFlowOutputCommandOutput) => void),
    cb?: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): Promise<RemoveFlowOutputCommandOutput> | void {
    const command = new RemoveFlowOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
   */
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowSourceCommandOutput>;
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFlowSourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): Promise<RemoveFlowSourceCommandOutput> | void {
    const command = new RemoveFlowSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
   */
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowVpcInterfaceCommandOutput>;
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void),
    cb?: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): Promise<RemoveFlowVpcInterfaceCommandOutput> | void {
    const command = new RemoveFlowVpcInterfaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
   */
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeFlowEntitlementCommandOutput>;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeFlowEntitlementCommandOutput) => void),
    cb?: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): Promise<RevokeFlowEntitlementCommandOutput> | void {
    const command = new RevokeFlowEntitlementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Starts a flow.
   */
  public startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
  public startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
  public startFlow(
    args: StartFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;
  public startFlow(
    args: StartFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFlowCommandOutput) => void),
    cb?: (err: any, data?: StartFlowCommandOutput) => void
  ): Promise<StartFlowCommandOutput> | void {
    const command = new StartFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Stops a flow.
   */
  public stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
  public stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
  public stopFlow(
    args: StopFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;
  public stopFlow(
    args: StopFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopFlowCommandOutput) => void),
    cb?: (err: any, data?: StopFlowCommandOutput) => void
  ): Promise<StopFlowCommandOutput> | void {
    const command = new StopFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Deletes specified tags from a resource.
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates the bridge
   */
  public updateBridge(
    args: UpdateBridgeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBridgeCommandOutput>;
  public updateBridge(args: UpdateBridgeCommandInput, cb: (err: any, data?: UpdateBridgeCommandOutput) => void): void;
  public updateBridge(
    args: UpdateBridgeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeCommandOutput) => void
  ): void;
  public updateBridge(
    args: UpdateBridgeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBridgeCommandOutput) => void),
    cb?: (err: any, data?: UpdateBridgeCommandOutput) => void
  ): Promise<UpdateBridgeCommandOutput> | void {
    const command = new UpdateBridgeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates an existing bridge output.
   */
  public updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBridgeOutputCommandOutput>;
  public updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    cb: (err: any, data?: UpdateBridgeOutputCommandOutput) => void
  ): void;
  public updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeOutputCommandOutput) => void
  ): void;
  public updateBridgeOutput(
    args: UpdateBridgeOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBridgeOutputCommandOutput) => void),
    cb?: (err: any, data?: UpdateBridgeOutputCommandOutput) => void
  ): Promise<UpdateBridgeOutputCommandOutput> | void {
    const command = new UpdateBridgeOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates an existing bridge source.
   */
  public updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBridgeSourceCommandOutput>;
  public updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    cb: (err: any, data?: UpdateBridgeSourceCommandOutput) => void
  ): void;
  public updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeSourceCommandOutput) => void
  ): void;
  public updateBridgeSource(
    args: UpdateBridgeSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBridgeSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateBridgeSourceCommandOutput) => void
  ): Promise<UpdateBridgeSourceCommandOutput> | void {
    const command = new UpdateBridgeSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates the bridge state
   */
  public updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBridgeStateCommandOutput>;
  public updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    cb: (err: any, data?: UpdateBridgeStateCommandOutput) => void
  ): void;
  public updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBridgeStateCommandOutput) => void
  ): void;
  public updateBridgeState(
    args: UpdateBridgeStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBridgeStateCommandOutput) => void),
    cb?: (err: any, data?: UpdateBridgeStateCommandOutput) => void
  ): Promise<UpdateBridgeStateCommandOutput> | void {
    const command = new UpdateBridgeStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates flow
   */
  public updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
  public updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
  public updateFlow(
    args: UpdateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
  public updateFlow(
    args: UpdateFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowCommandOutput) => void
  ): Promise<UpdateFlowCommandOutput> | void {
    const command = new UpdateFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
   */
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowEntitlementCommandOutput>;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowEntitlementCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): Promise<UpdateFlowEntitlementCommandOutput> | void {
    const command = new UpdateFlowEntitlementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates an existing media stream.
   */
  public updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowMediaStreamCommandOutput>;
  public updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void
  ): void;
  public updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void
  ): void;
  public updateFlowMediaStream(
    args: UpdateFlowMediaStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowMediaStreamCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowMediaStreamCommandOutput) => void
  ): Promise<UpdateFlowMediaStreamCommandOutput> | void {
    const command = new UpdateFlowMediaStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates an existing flow output.
   */
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowOutputCommandOutput>;
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowOutputCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): Promise<UpdateFlowOutputCommandOutput> | void {
    const command = new UpdateFlowOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates the source of a flow.
   */
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowSourceCommandOutput>;
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): Promise<UpdateFlowSourceCommandOutput> | void {
    const command = new UpdateFlowSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * Updates the configuration of an existing Gateway Instance.
   */
  public updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayInstanceCommandOutput>;
  public updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    cb: (err: any, data?: UpdateGatewayInstanceCommandOutput) => void
  ): void;
  public updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayInstanceCommandOutput) => void
  ): void;
  public updateGatewayInstance(
    args: UpdateGatewayInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayInstanceCommandOutput) => void
  ): Promise<UpdateGatewayInstanceCommandOutput> | void {
    const command = new UpdateGatewayInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
