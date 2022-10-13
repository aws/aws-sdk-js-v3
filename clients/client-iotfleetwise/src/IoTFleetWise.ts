// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateVehicleFleetCommand,
  AssociateVehicleFleetCommandInput,
  AssociateVehicleFleetCommandOutput,
} from "./commands/AssociateVehicleFleetCommand";
import {
  BatchCreateVehicleCommand,
  BatchCreateVehicleCommandInput,
  BatchCreateVehicleCommandOutput,
} from "./commands/BatchCreateVehicleCommand";
import {
  BatchUpdateVehicleCommand,
  BatchUpdateVehicleCommandInput,
  BatchUpdateVehicleCommandOutput,
} from "./commands/BatchUpdateVehicleCommand";
import {
  CreateCampaignCommand,
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
} from "./commands/CreateCampaignCommand";
import {
  CreateDecoderManifestCommand,
  CreateDecoderManifestCommandInput,
  CreateDecoderManifestCommandOutput,
} from "./commands/CreateDecoderManifestCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateModelManifestCommand,
  CreateModelManifestCommandInput,
  CreateModelManifestCommandOutput,
} from "./commands/CreateModelManifestCommand";
import {
  CreateSignalCatalogCommand,
  CreateSignalCatalogCommandInput,
  CreateSignalCatalogCommandOutput,
} from "./commands/CreateSignalCatalogCommand";
import {
  CreateVehicleCommand,
  CreateVehicleCommandInput,
  CreateVehicleCommandOutput,
} from "./commands/CreateVehicleCommand";
import {
  DeleteCampaignCommand,
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput,
} from "./commands/DeleteCampaignCommand";
import {
  DeleteDecoderManifestCommand,
  DeleteDecoderManifestCommandInput,
  DeleteDecoderManifestCommandOutput,
} from "./commands/DeleteDecoderManifestCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteModelManifestCommand,
  DeleteModelManifestCommandInput,
  DeleteModelManifestCommandOutput,
} from "./commands/DeleteModelManifestCommand";
import {
  DeleteSignalCatalogCommand,
  DeleteSignalCatalogCommandInput,
  DeleteSignalCatalogCommandOutput,
} from "./commands/DeleteSignalCatalogCommand";
import {
  DeleteVehicleCommand,
  DeleteVehicleCommandInput,
  DeleteVehicleCommandOutput,
} from "./commands/DeleteVehicleCommand";
import {
  DisassociateVehicleFleetCommand,
  DisassociateVehicleFleetCommandInput,
  DisassociateVehicleFleetCommandOutput,
} from "./commands/DisassociateVehicleFleetCommand";
import { GetCampaignCommand, GetCampaignCommandInput, GetCampaignCommandOutput } from "./commands/GetCampaignCommand";
import {
  GetDecoderManifestCommand,
  GetDecoderManifestCommandInput,
  GetDecoderManifestCommandOutput,
} from "./commands/GetDecoderManifestCommand";
import { GetFleetCommand, GetFleetCommandInput, GetFleetCommandOutput } from "./commands/GetFleetCommand";
import {
  GetLoggingOptionsCommand,
  GetLoggingOptionsCommandInput,
  GetLoggingOptionsCommandOutput,
} from "./commands/GetLoggingOptionsCommand";
import {
  GetModelManifestCommand,
  GetModelManifestCommandInput,
  GetModelManifestCommandOutput,
} from "./commands/GetModelManifestCommand";
import {
  GetRegisterAccountStatusCommand,
  GetRegisterAccountStatusCommandInput,
  GetRegisterAccountStatusCommandOutput,
} from "./commands/GetRegisterAccountStatusCommand";
import {
  GetSignalCatalogCommand,
  GetSignalCatalogCommandInput,
  GetSignalCatalogCommandOutput,
} from "./commands/GetSignalCatalogCommand";
import { GetVehicleCommand, GetVehicleCommandInput, GetVehicleCommandOutput } from "./commands/GetVehicleCommand";
import {
  GetVehicleStatusCommand,
  GetVehicleStatusCommandInput,
  GetVehicleStatusCommandOutput,
} from "./commands/GetVehicleStatusCommand";
import {
  ImportDecoderManifestCommand,
  ImportDecoderManifestCommandInput,
  ImportDecoderManifestCommandOutput,
} from "./commands/ImportDecoderManifestCommand";
import {
  ImportSignalCatalogCommand,
  ImportSignalCatalogCommandInput,
  ImportSignalCatalogCommandOutput,
} from "./commands/ImportSignalCatalogCommand";
import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "./commands/ListCampaignsCommand";
import {
  ListDecoderManifestNetworkInterfacesCommand,
  ListDecoderManifestNetworkInterfacesCommandInput,
  ListDecoderManifestNetworkInterfacesCommandOutput,
} from "./commands/ListDecoderManifestNetworkInterfacesCommand";
import {
  ListDecoderManifestsCommand,
  ListDecoderManifestsCommandInput,
  ListDecoderManifestsCommandOutput,
} from "./commands/ListDecoderManifestsCommand";
import {
  ListDecoderManifestSignalsCommand,
  ListDecoderManifestSignalsCommandInput,
  ListDecoderManifestSignalsCommandOutput,
} from "./commands/ListDecoderManifestSignalsCommand";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListFleetsForVehicleCommand,
  ListFleetsForVehicleCommandInput,
  ListFleetsForVehicleCommandOutput,
} from "./commands/ListFleetsForVehicleCommand";
import {
  ListModelManifestNodesCommand,
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput,
} from "./commands/ListModelManifestNodesCommand";
import {
  ListModelManifestsCommand,
  ListModelManifestsCommandInput,
  ListModelManifestsCommandOutput,
} from "./commands/ListModelManifestsCommand";
import {
  ListSignalCatalogNodesCommand,
  ListSignalCatalogNodesCommandInput,
  ListSignalCatalogNodesCommandOutput,
} from "./commands/ListSignalCatalogNodesCommand";
import {
  ListSignalCatalogsCommand,
  ListSignalCatalogsCommandInput,
  ListSignalCatalogsCommandOutput,
} from "./commands/ListSignalCatalogsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVehiclesCommand,
  ListVehiclesCommandInput,
  ListVehiclesCommandOutput,
} from "./commands/ListVehiclesCommand";
import {
  ListVehiclesInFleetCommand,
  ListVehiclesInFleetCommandInput,
  ListVehiclesInFleetCommandOutput,
} from "./commands/ListVehiclesInFleetCommand";
import {
  PutLoggingOptionsCommand,
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
} from "./commands/PutLoggingOptionsCommand";
import {
  RegisterAccountCommand,
  RegisterAccountCommandInput,
  RegisterAccountCommandOutput,
} from "./commands/RegisterAccountCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCampaignCommand,
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput,
} from "./commands/UpdateCampaignCommand";
import {
  UpdateDecoderManifestCommand,
  UpdateDecoderManifestCommandInput,
  UpdateDecoderManifestCommandOutput,
} from "./commands/UpdateDecoderManifestCommand";
import { UpdateFleetCommand, UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateModelManifestCommand,
  UpdateModelManifestCommandInput,
  UpdateModelManifestCommandOutput,
} from "./commands/UpdateModelManifestCommand";
import {
  UpdateSignalCatalogCommand,
  UpdateSignalCatalogCommandInput,
  UpdateSignalCatalogCommandOutput,
} from "./commands/UpdateSignalCatalogCommand";
import {
  UpdateVehicleCommand,
  UpdateVehicleCommandInput,
  UpdateVehicleCommandOutput,
} from "./commands/UpdateVehicleCommand";
import { IoTFleetWiseClient } from "./IoTFleetWiseClient";

/**
 * <p>Amazon Web Services IoT FleetWise is a fully managed service that you can use to collect, model, and transfer
 *             vehicle data to the Amazon Web Services cloud at scale. With Amazon Web Services IoT FleetWise, you can standardize all of
 *             your vehicle data models, independent of the in-vehicle communication architecture, and
 *             define data collection rules to transfer only high-value data to the cloud.
 *             </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/">What is Amazon Web Services IoT FleetWise?</a> in the
 *                 <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 */
export class IoTFleetWise extends IoTFleetWiseClient {
  /**
   * <p> Adds, or associates, a vehicle with a fleet. </p>
   */
  public associateVehicleFleet(
    args: AssociateVehicleFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVehicleFleetCommandOutput>;
  public associateVehicleFleet(
    args: AssociateVehicleFleetCommandInput,
    cb: (err: any, data?: AssociateVehicleFleetCommandOutput) => void
  ): void;
  public associateVehicleFleet(
    args: AssociateVehicleFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVehicleFleetCommandOutput) => void
  ): void;
  public associateVehicleFleet(
    args: AssociateVehicleFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateVehicleFleetCommandOutput) => void),
    cb?: (err: any, data?: AssociateVehicleFleetCommandOutput) => void
  ): Promise<AssociateVehicleFleetCommandOutput> | void {
    const command = new AssociateVehicleFleetCommand(args);
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
   * <p> Creates a group, or batch, of vehicles. </p>
   *         <note>
   *             <p> You must specify a decoder manifest and a vehicle model (model manifest) for each
   *                 vehicle. </p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicles-cli.html">Create multiple
   *                 vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
   */
  public batchCreateVehicle(
    args: BatchCreateVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateVehicleCommandOutput>;
  public batchCreateVehicle(
    args: BatchCreateVehicleCommandInput,
    cb: (err: any, data?: BatchCreateVehicleCommandOutput) => void
  ): void;
  public batchCreateVehicle(
    args: BatchCreateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateVehicleCommandOutput) => void
  ): void;
  public batchCreateVehicle(
    args: BatchCreateVehicleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateVehicleCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateVehicleCommandOutput) => void
  ): Promise<BatchCreateVehicleCommandOutput> | void {
    const command = new BatchCreateVehicleCommand(args);
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
   * <p> Updates a group, or batch, of vehicles.</p>
   *         <note>
   *             <p> You must specify a decoder manifest and a vehicle model (model manifest) for each
   *                 vehicle. </p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/update-vehicles-cli.html">Update multiple
   *                 vehicles (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>. </p>
   */
  public batchUpdateVehicle(
    args: BatchUpdateVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateVehicleCommandOutput>;
  public batchUpdateVehicle(
    args: BatchUpdateVehicleCommandInput,
    cb: (err: any, data?: BatchUpdateVehicleCommandOutput) => void
  ): void;
  public batchUpdateVehicle(
    args: BatchUpdateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateVehicleCommandOutput) => void
  ): void;
  public batchUpdateVehicle(
    args: BatchUpdateVehicleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateVehicleCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateVehicleCommandOutput) => void
  ): Promise<BatchUpdateVehicleCommandOutput> | void {
    const command = new BatchUpdateVehicleCommand(args);
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
   * <p>Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software
   *             running in vehicles uses campaigns to decide how to collect and transfer data to the
   *             cloud. You create campaigns in the cloud. After you or your team approve campaigns,
   *             Amazon Web Services IoT FleetWise automatically deploys them to vehicles. </p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html">Collect and transfer data
   *                 with campaigns</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   */
  public createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  public createCampaign(
    args: CreateCampaignCommandInput,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCampaignCommandOutput) => void),
    cb?: (err: any, data?: CreateCampaignCommandOutput) => void
  ): Promise<CreateCampaignCommandOutput> | void {
    const command = new CreateCampaignCommand(args);
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
   * <p>Creates the decoder manifest associated with a model manifest. To create a decoder
   *             manifest, the following must be true:</p>
   *         <ul>
   *             <li>
   *                 <p>Every signal decoder has a unique name.</p>
   *             </li>
   *             <li>
   *                 <p>Each signal decoder is associated with a network interface.</p>
   *             </li>
   *             <li>
   *                 <p>Each network interface has a unique ID.</p>
   *             </li>
   *             <li>
   *                 <p>The signal decoders are specified in the model manifest.</p>
   *             </li>
   *          </ul>
   */
  public createDecoderManifest(
    args: CreateDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDecoderManifestCommandOutput>;
  public createDecoderManifest(
    args: CreateDecoderManifestCommandInput,
    cb: (err: any, data?: CreateDecoderManifestCommandOutput) => void
  ): void;
  public createDecoderManifest(
    args: CreateDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDecoderManifestCommandOutput) => void
  ): void;
  public createDecoderManifest(
    args: CreateDecoderManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDecoderManifestCommandOutput) => void),
    cb?: (err: any, data?: CreateDecoderManifestCommandOutput) => void
  ): Promise<CreateDecoderManifestCommandOutput> | void {
    const command = new CreateDecoderManifestCommand(args);
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
   * <p> Creates a fleet that represents a group of vehicles.
   *             </p>
   *         <note>
   *             <p>You must create both a signal catalog and vehicles before you can create a fleet.
   *             </p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleets.html">Fleets</a> in the
   *                 <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   */
  public createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  public createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  public createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetCommandOutput) => void
  ): Promise<CreateFleetCommandOutput> | void {
    const command = new CreateFleetCommand(args);
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
   * <p> Creates a vehicle model (model manifest) that specifies signals (attributes,
   *             branches, sensors, and actuators). </p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html">Vehicle models</a>
   *             in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   */
  public createModelManifest(
    args: CreateModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelManifestCommandOutput>;
  public createModelManifest(
    args: CreateModelManifestCommandInput,
    cb: (err: any, data?: CreateModelManifestCommandOutput) => void
  ): void;
  public createModelManifest(
    args: CreateModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelManifestCommandOutput) => void
  ): void;
  public createModelManifest(
    args: CreateModelManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateModelManifestCommandOutput) => void),
    cb?: (err: any, data?: CreateModelManifestCommandOutput) => void
  ): Promise<CreateModelManifestCommandOutput> | void {
    const command = new CreateModelManifestCommand(args);
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
   * <p> Creates a collection of standardized signals that can be reused to create vehicle
   *             models.</p>
   */
  public createSignalCatalog(
    args: CreateSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSignalCatalogCommandOutput>;
  public createSignalCatalog(
    args: CreateSignalCatalogCommandInput,
    cb: (err: any, data?: CreateSignalCatalogCommandOutput) => void
  ): void;
  public createSignalCatalog(
    args: CreateSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSignalCatalogCommandOutput) => void
  ): void;
  public createSignalCatalog(
    args: CreateSignalCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSignalCatalogCommandOutput) => void),
    cb?: (err: any, data?: CreateSignalCatalogCommandOutput) => void
  ): Promise<CreateSignalCatalogCommandOutput> | void {
    const command = new CreateSignalCatalogCommand(args);
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
   * <p> Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles
   *             created from the same vehicle model consist of the same signals inherited from the
   *             vehicle model.</p>
   *         <note>
   *             <p> If you have an existing Amazon Web Services IoT Thing, you can use Amazon Web Services IoT FleetWise to create a
   *                 vehicle and collect data from your thing. </p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-cli.html">Create a vehicle
   *                 (AWS CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   */
  public createVehicle(
    args: CreateVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVehicleCommandOutput>;
  public createVehicle(
    args: CreateVehicleCommandInput,
    cb: (err: any, data?: CreateVehicleCommandOutput) => void
  ): void;
  public createVehicle(
    args: CreateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVehicleCommandOutput) => void
  ): void;
  public createVehicle(
    args: CreateVehicleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVehicleCommandOutput) => void),
    cb?: (err: any, data?: CreateVehicleCommandOutput) => void
  ): Promise<CreateVehicleCommandOutput> | void {
    const command = new CreateVehicleCommand(args);
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
   * <p> Deletes a data collection campaign. Deleting a campaign suspends all data collection
   *             and removes it from any vehicles. </p>
   */
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommandOutput>;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCampaignCommandOutput) => void),
    cb?: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): Promise<DeleteCampaignCommandOutput> | void {
    const command = new DeleteCampaignCommand(args);
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
   * <p> Deletes a decoder manifest. You can't delete a decoder manifest if it has vehicles
   *             associated with it. </p>
   *         <note>
   *             <p>If the decoder manifest is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200
   *                 response with an empty body.</p>
   *         </note>
   */
  public deleteDecoderManifest(
    args: DeleteDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDecoderManifestCommandOutput>;
  public deleteDecoderManifest(
    args: DeleteDecoderManifestCommandInput,
    cb: (err: any, data?: DeleteDecoderManifestCommandOutput) => void
  ): void;
  public deleteDecoderManifest(
    args: DeleteDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDecoderManifestCommandOutput) => void
  ): void;
  public deleteDecoderManifest(
    args: DeleteDecoderManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDecoderManifestCommandOutput) => void),
    cb?: (err: any, data?: DeleteDecoderManifestCommandOutput) => void
  ): Promise<DeleteDecoderManifestCommandOutput> | void {
    const command = new DeleteDecoderManifestCommand(args);
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
   * <p> Deletes a fleet. Before you delete a fleet, all vehicles must be
   *             dissociated from the fleet. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/delete-fleet-cli.html">Delete a fleet (AWS
   *                 CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
   *         <note>
   *             <p>If the fleet is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response
   *                 with an empty body.</p>
   *         </note>
   */
  public deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  public deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetCommandOutput) => void
  ): Promise<DeleteFleetCommandOutput> | void {
    const command = new DeleteFleetCommand(args);
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
   * <p> Deletes a vehicle model (model manifest).</p>
   *         <note>
   *             <p>If the vehicle model is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200
   *                 response with an empty body.</p>
   *         </note>
   */
  public deleteModelManifest(
    args: DeleteModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelManifestCommandOutput>;
  public deleteModelManifest(
    args: DeleteModelManifestCommandInput,
    cb: (err: any, data?: DeleteModelManifestCommandOutput) => void
  ): void;
  public deleteModelManifest(
    args: DeleteModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelManifestCommandOutput) => void
  ): void;
  public deleteModelManifest(
    args: DeleteModelManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteModelManifestCommandOutput) => void),
    cb?: (err: any, data?: DeleteModelManifestCommandOutput) => void
  ): Promise<DeleteModelManifestCommandOutput> | void {
    const command = new DeleteModelManifestCommand(args);
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
   * <p> Deletes a signal catalog. </p>
   *         <note>
   *             <p>If the signal catalog is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200
   *                 response with an empty body.</p>
   *         </note>
   */
  public deleteSignalCatalog(
    args: DeleteSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSignalCatalogCommandOutput>;
  public deleteSignalCatalog(
    args: DeleteSignalCatalogCommandInput,
    cb: (err: any, data?: DeleteSignalCatalogCommandOutput) => void
  ): void;
  public deleteSignalCatalog(
    args: DeleteSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSignalCatalogCommandOutput) => void
  ): void;
  public deleteSignalCatalog(
    args: DeleteSignalCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSignalCatalogCommandOutput) => void),
    cb?: (err: any, data?: DeleteSignalCatalogCommandOutput) => void
  ): Promise<DeleteSignalCatalogCommandOutput> | void {
    const command = new DeleteSignalCatalogCommand(args);
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
   * <p> Deletes a vehicle and removes it from any campaigns.</p>
   *         <note>
   *             <p>If the vehicle is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response
   *                 with an empty body.</p>
   *         </note>
   */
  public deleteVehicle(
    args: DeleteVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVehicleCommandOutput>;
  public deleteVehicle(
    args: DeleteVehicleCommandInput,
    cb: (err: any, data?: DeleteVehicleCommandOutput) => void
  ): void;
  public deleteVehicle(
    args: DeleteVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVehicleCommandOutput) => void
  ): void;
  public deleteVehicle(
    args: DeleteVehicleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVehicleCommandOutput) => void),
    cb?: (err: any, data?: DeleteVehicleCommandOutput) => void
  ): Promise<DeleteVehicleCommandOutput> | void {
    const command = new DeleteVehicleCommand(args);
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
   * <p>Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a
   *             fleet doesn't delete the vehicle.</p>
   *         <note>
   *             <p>If the vehicle is successfully dissociated from a fleet, Amazon Web Services IoT FleetWise sends back an
   *                 HTTP 200 response with an empty body.</p>
   *         </note>
   */
  public disassociateVehicleFleet(
    args: DisassociateVehicleFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateVehicleFleetCommandOutput>;
  public disassociateVehicleFleet(
    args: DisassociateVehicleFleetCommandInput,
    cb: (err: any, data?: DisassociateVehicleFleetCommandOutput) => void
  ): void;
  public disassociateVehicleFleet(
    args: DisassociateVehicleFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateVehicleFleetCommandOutput) => void
  ): void;
  public disassociateVehicleFleet(
    args: DisassociateVehicleFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateVehicleFleetCommandOutput) => void),
    cb?: (err: any, data?: DisassociateVehicleFleetCommandOutput) => void
  ): Promise<DisassociateVehicleFleetCommandOutput> | void {
    const command = new DisassociateVehicleFleetCommand(args);
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
   * <p> Retrieves information about a campaign. </p>
   */
  public getCampaign(args: GetCampaignCommandInput, options?: __HttpHandlerOptions): Promise<GetCampaignCommandOutput>;
  public getCampaign(args: GetCampaignCommandInput, cb: (err: any, data?: GetCampaignCommandOutput) => void): void;
  public getCampaign(
    args: GetCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignCommandOutput) => void
  ): void;
  public getCampaign(
    args: GetCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCampaignCommandOutput) => void),
    cb?: (err: any, data?: GetCampaignCommandOutput) => void
  ): Promise<GetCampaignCommandOutput> | void {
    const command = new GetCampaignCommand(args);
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
   * <p> Retrieves information about a created decoder manifest. </p>
   */
  public getDecoderManifest(
    args: GetDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDecoderManifestCommandOutput>;
  public getDecoderManifest(
    args: GetDecoderManifestCommandInput,
    cb: (err: any, data?: GetDecoderManifestCommandOutput) => void
  ): void;
  public getDecoderManifest(
    args: GetDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDecoderManifestCommandOutput) => void
  ): void;
  public getDecoderManifest(
    args: GetDecoderManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDecoderManifestCommandOutput) => void),
    cb?: (err: any, data?: GetDecoderManifestCommandOutput) => void
  ): Promise<GetDecoderManifestCommandOutput> | void {
    const command = new GetDecoderManifestCommand(args);
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
   * <p> Retrieves information about a fleet. </p>
   */
  public getFleet(args: GetFleetCommandInput, options?: __HttpHandlerOptions): Promise<GetFleetCommandOutput>;
  public getFleet(args: GetFleetCommandInput, cb: (err: any, data?: GetFleetCommandOutput) => void): void;
  public getFleet(
    args: GetFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFleetCommandOutput) => void
  ): void;
  public getFleet(
    args: GetFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFleetCommandOutput) => void),
    cb?: (err: any, data?: GetFleetCommandOutput) => void
  ): Promise<GetFleetCommandOutput> | void {
    const command = new GetFleetCommand(args);
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
   * <p>Retrieves the logging options.</p>
   */
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggingOptionsCommandOutput>;
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): Promise<GetLoggingOptionsCommandOutput> | void {
    const command = new GetLoggingOptionsCommand(args);
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
   * <p> Retrieves information about a vehicle model (model manifest). </p>
   */
  public getModelManifest(
    args: GetModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelManifestCommandOutput>;
  public getModelManifest(
    args: GetModelManifestCommandInput,
    cb: (err: any, data?: GetModelManifestCommandOutput) => void
  ): void;
  public getModelManifest(
    args: GetModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelManifestCommandOutput) => void
  ): void;
  public getModelManifest(
    args: GetModelManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetModelManifestCommandOutput) => void),
    cb?: (err: any, data?: GetModelManifestCommandOutput) => void
  ): Promise<GetModelManifestCommandOutput> | void {
    const command = new GetModelManifestCommand(args);
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
   * <p> Retrieves information about the status of registering your Amazon Web Services account, IAM, and
   *             Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services
   *             Cloud. </p>
   *         <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html">Setting up Amazon Web Services IoT FleetWise</a>. </p>
   *         <note>
   *             <p>This API operation doesn't require input parameters.</p>
   *         </note>
   */
  public getRegisterAccountStatus(
    args: GetRegisterAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegisterAccountStatusCommandOutput>;
  public getRegisterAccountStatus(
    args: GetRegisterAccountStatusCommandInput,
    cb: (err: any, data?: GetRegisterAccountStatusCommandOutput) => void
  ): void;
  public getRegisterAccountStatus(
    args: GetRegisterAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegisterAccountStatusCommandOutput) => void
  ): void;
  public getRegisterAccountStatus(
    args: GetRegisterAccountStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegisterAccountStatusCommandOutput) => void),
    cb?: (err: any, data?: GetRegisterAccountStatusCommandOutput) => void
  ): Promise<GetRegisterAccountStatusCommandOutput> | void {
    const command = new GetRegisterAccountStatusCommand(args);
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
   * <p> Retrieves information about a signal catalog. </p>
   */
  public getSignalCatalog(
    args: GetSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSignalCatalogCommandOutput>;
  public getSignalCatalog(
    args: GetSignalCatalogCommandInput,
    cb: (err: any, data?: GetSignalCatalogCommandOutput) => void
  ): void;
  public getSignalCatalog(
    args: GetSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSignalCatalogCommandOutput) => void
  ): void;
  public getSignalCatalog(
    args: GetSignalCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSignalCatalogCommandOutput) => void),
    cb?: (err: any, data?: GetSignalCatalogCommandOutput) => void
  ): Promise<GetSignalCatalogCommandOutput> | void {
    const command = new GetSignalCatalogCommand(args);
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
   * <p> Retrieves information about a vehicle. </p>
   */
  public getVehicle(args: GetVehicleCommandInput, options?: __HttpHandlerOptions): Promise<GetVehicleCommandOutput>;
  public getVehicle(args: GetVehicleCommandInput, cb: (err: any, data?: GetVehicleCommandOutput) => void): void;
  public getVehicle(
    args: GetVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVehicleCommandOutput) => void
  ): void;
  public getVehicle(
    args: GetVehicleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVehicleCommandOutput) => void),
    cb?: (err: any, data?: GetVehicleCommandOutput) => void
  ): Promise<GetVehicleCommandOutput> | void {
    const command = new GetVehicleCommand(args);
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
   * <p> Retrieves information about the status of a vehicle with any associated campaigns.
   *         </p>
   */
  public getVehicleStatus(
    args: GetVehicleStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVehicleStatusCommandOutput>;
  public getVehicleStatus(
    args: GetVehicleStatusCommandInput,
    cb: (err: any, data?: GetVehicleStatusCommandOutput) => void
  ): void;
  public getVehicleStatus(
    args: GetVehicleStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVehicleStatusCommandOutput) => void
  ): void;
  public getVehicleStatus(
    args: GetVehicleStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVehicleStatusCommandOutput) => void),
    cb?: (err: any, data?: GetVehicleStatusCommandOutput) => void
  ): Promise<GetVehicleStatusCommandOutput> | void {
    const command = new GetVehicleStatusCommand(args);
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
   * <p> Creates a decoder manifest using your existing CAN DBC file from your local device.
   *         </p>
   */
  public importDecoderManifest(
    args: ImportDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDecoderManifestCommandOutput>;
  public importDecoderManifest(
    args: ImportDecoderManifestCommandInput,
    cb: (err: any, data?: ImportDecoderManifestCommandOutput) => void
  ): void;
  public importDecoderManifest(
    args: ImportDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDecoderManifestCommandOutput) => void
  ): void;
  public importDecoderManifest(
    args: ImportDecoderManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportDecoderManifestCommandOutput) => void),
    cb?: (err: any, data?: ImportDecoderManifestCommandOutput) => void
  ): Promise<ImportDecoderManifestCommandOutput> | void {
    const command = new ImportDecoderManifestCommand(args);
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
   * <p> Creates a signal catalog using your existing VSS formatted content from your local
   *             device. </p>
   */
  public importSignalCatalog(
    args: ImportSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSignalCatalogCommandOutput>;
  public importSignalCatalog(
    args: ImportSignalCatalogCommandInput,
    cb: (err: any, data?: ImportSignalCatalogCommandOutput) => void
  ): void;
  public importSignalCatalog(
    args: ImportSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSignalCatalogCommandOutput) => void
  ): void;
  public importSignalCatalog(
    args: ImportSignalCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportSignalCatalogCommandOutput) => void),
    cb?: (err: any, data?: ImportSignalCatalogCommandOutput) => void
  ): Promise<ImportSignalCatalogCommandOutput> | void {
    const command = new ImportSignalCatalogCommand(args);
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
   * <p> Lists information about created campaigns. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listCampaigns(
    args: ListCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCampaignsCommandOutput>;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCampaignsCommandOutput) => void),
    cb?: (err: any, data?: ListCampaignsCommandOutput) => void
  ): Promise<ListCampaignsCommandOutput> | void {
    const command = new ListCampaignsCommand(args);
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
   * <p> Lists the network interfaces specified in a decoder manifest. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listDecoderManifestNetworkInterfaces(
    args: ListDecoderManifestNetworkInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDecoderManifestNetworkInterfacesCommandOutput>;
  public listDecoderManifestNetworkInterfaces(
    args: ListDecoderManifestNetworkInterfacesCommandInput,
    cb: (err: any, data?: ListDecoderManifestNetworkInterfacesCommandOutput) => void
  ): void;
  public listDecoderManifestNetworkInterfaces(
    args: ListDecoderManifestNetworkInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDecoderManifestNetworkInterfacesCommandOutput) => void
  ): void;
  public listDecoderManifestNetworkInterfaces(
    args: ListDecoderManifestNetworkInterfacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDecoderManifestNetworkInterfacesCommandOutput) => void),
    cb?: (err: any, data?: ListDecoderManifestNetworkInterfacesCommandOutput) => void
  ): Promise<ListDecoderManifestNetworkInterfacesCommandOutput> | void {
    const command = new ListDecoderManifestNetworkInterfacesCommand(args);
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
   * <p> Lists decoder manifests. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listDecoderManifests(
    args: ListDecoderManifestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDecoderManifestsCommandOutput>;
  public listDecoderManifests(
    args: ListDecoderManifestsCommandInput,
    cb: (err: any, data?: ListDecoderManifestsCommandOutput) => void
  ): void;
  public listDecoderManifests(
    args: ListDecoderManifestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDecoderManifestsCommandOutput) => void
  ): void;
  public listDecoderManifests(
    args: ListDecoderManifestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDecoderManifestsCommandOutput) => void),
    cb?: (err: any, data?: ListDecoderManifestsCommandOutput) => void
  ): Promise<ListDecoderManifestsCommandOutput> | void {
    const command = new ListDecoderManifestsCommand(args);
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
   * <p> A list of information about signal decoders specified in a decoder manifest. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listDecoderManifestSignals(
    args: ListDecoderManifestSignalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDecoderManifestSignalsCommandOutput>;
  public listDecoderManifestSignals(
    args: ListDecoderManifestSignalsCommandInput,
    cb: (err: any, data?: ListDecoderManifestSignalsCommandOutput) => void
  ): void;
  public listDecoderManifestSignals(
    args: ListDecoderManifestSignalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDecoderManifestSignalsCommandOutput) => void
  ): void;
  public listDecoderManifestSignals(
    args: ListDecoderManifestSignalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDecoderManifestSignalsCommandOutput) => void),
    cb?: (err: any, data?: ListDecoderManifestSignalsCommandOutput) => void
  ): Promise<ListDecoderManifestSignalsCommandOutput> | void {
    const command = new ListDecoderManifestSignalsCommand(args);
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
   * <p> Retrieves information for each created fleet in an Amazon Web Services account. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  public listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  public listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListFleetsCommandOutput) => void
  ): Promise<ListFleetsCommandOutput> | void {
    const command = new ListFleetsCommand(args);
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
   * <p>Retrieves a list of IDs for all fleets that the vehicle is associated with.</p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listFleetsForVehicle(
    args: ListFleetsForVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetsForVehicleCommandOutput>;
  public listFleetsForVehicle(
    args: ListFleetsForVehicleCommandInput,
    cb: (err: any, data?: ListFleetsForVehicleCommandOutput) => void
  ): void;
  public listFleetsForVehicle(
    args: ListFleetsForVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsForVehicleCommandOutput) => void
  ): void;
  public listFleetsForVehicle(
    args: ListFleetsForVehicleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFleetsForVehicleCommandOutput) => void),
    cb?: (err: any, data?: ListFleetsForVehicleCommandOutput) => void
  ): Promise<ListFleetsForVehicleCommandOutput> | void {
    const command = new ListFleetsForVehicleCommand(args);
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
   * <p> Lists information about nodes specified in a vehicle model (model manifest). </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listModelManifestNodes(
    args: ListModelManifestNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelManifestNodesCommandOutput>;
  public listModelManifestNodes(
    args: ListModelManifestNodesCommandInput,
    cb: (err: any, data?: ListModelManifestNodesCommandOutput) => void
  ): void;
  public listModelManifestNodes(
    args: ListModelManifestNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelManifestNodesCommandOutput) => void
  ): void;
  public listModelManifestNodes(
    args: ListModelManifestNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListModelManifestNodesCommandOutput) => void),
    cb?: (err: any, data?: ListModelManifestNodesCommandOutput) => void
  ): Promise<ListModelManifestNodesCommandOutput> | void {
    const command = new ListModelManifestNodesCommand(args);
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
   * <p> Retrieves a list of vehicle models (model manifests). </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listModelManifests(
    args: ListModelManifestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelManifestsCommandOutput>;
  public listModelManifests(
    args: ListModelManifestsCommandInput,
    cb: (err: any, data?: ListModelManifestsCommandOutput) => void
  ): void;
  public listModelManifests(
    args: ListModelManifestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelManifestsCommandOutput) => void
  ): void;
  public listModelManifests(
    args: ListModelManifestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListModelManifestsCommandOutput) => void),
    cb?: (err: any, data?: ListModelManifestsCommandOutput) => void
  ): Promise<ListModelManifestsCommandOutput> | void {
    const command = new ListModelManifestsCommand(args);
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
   * <p> Lists of information about the signals (nodes) specified in a signal catalog. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listSignalCatalogNodes(
    args: ListSignalCatalogNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSignalCatalogNodesCommandOutput>;
  public listSignalCatalogNodes(
    args: ListSignalCatalogNodesCommandInput,
    cb: (err: any, data?: ListSignalCatalogNodesCommandOutput) => void
  ): void;
  public listSignalCatalogNodes(
    args: ListSignalCatalogNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSignalCatalogNodesCommandOutput) => void
  ): void;
  public listSignalCatalogNodes(
    args: ListSignalCatalogNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSignalCatalogNodesCommandOutput) => void),
    cb?: (err: any, data?: ListSignalCatalogNodesCommandOutput) => void
  ): Promise<ListSignalCatalogNodesCommandOutput> | void {
    const command = new ListSignalCatalogNodesCommand(args);
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
   * <p> Lists all the created signal catalogs in an Amazon Web Services account. </p>
   *         <p>You can use  to list information about
   *             each signal (node) specified in a signal catalog.</p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listSignalCatalogs(
    args: ListSignalCatalogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSignalCatalogsCommandOutput>;
  public listSignalCatalogs(
    args: ListSignalCatalogsCommandInput,
    cb: (err: any, data?: ListSignalCatalogsCommandOutput) => void
  ): void;
  public listSignalCatalogs(
    args: ListSignalCatalogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSignalCatalogsCommandOutput) => void
  ): void;
  public listSignalCatalogs(
    args: ListSignalCatalogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSignalCatalogsCommandOutput) => void),
    cb?: (err: any, data?: ListSignalCatalogsCommandOutput) => void
  ): Promise<ListSignalCatalogsCommandOutput> | void {
    const command = new ListSignalCatalogsCommand(args);
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
   * <p>Lists the tags (metadata) you have assigned to the resource.</p>
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
   * <p> Retrieves a list of summaries of created vehicles. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listVehicles(
    args: ListVehiclesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVehiclesCommandOutput>;
  public listVehicles(args: ListVehiclesCommandInput, cb: (err: any, data?: ListVehiclesCommandOutput) => void): void;
  public listVehicles(
    args: ListVehiclesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVehiclesCommandOutput) => void
  ): void;
  public listVehicles(
    args: ListVehiclesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVehiclesCommandOutput) => void),
    cb?: (err: any, data?: ListVehiclesCommandOutput) => void
  ): Promise<ListVehiclesCommandOutput> | void {
    const command = new ListVehiclesCommand(args);
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
   * <p> Retrieves a list of summaries of all vehicles associated with a fleet. </p>
   *         <note>
   *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
   *          </note>
   */
  public listVehiclesInFleet(
    args: ListVehiclesInFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVehiclesInFleetCommandOutput>;
  public listVehiclesInFleet(
    args: ListVehiclesInFleetCommandInput,
    cb: (err: any, data?: ListVehiclesInFleetCommandOutput) => void
  ): void;
  public listVehiclesInFleet(
    args: ListVehiclesInFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVehiclesInFleetCommandOutput) => void
  ): void;
  public listVehiclesInFleet(
    args: ListVehiclesInFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVehiclesInFleetCommandOutput) => void),
    cb?: (err: any, data?: ListVehiclesInFleetCommandOutput) => void
  ): Promise<ListVehiclesInFleetCommandOutput> | void {
    const command = new ListVehiclesInFleetCommand(args);
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
   * <p>Creates or updates the logging option.</p>
   */
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): Promise<PutLoggingOptionsCommandOutput> | void {
    const command = new PutLoggingOptionsCommand(args);
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
   * <p>Registers your Amazon Web Services account, IAM, and Amazon Timestream resources so Amazon Web Services IoT FleetWise can
   *             transfer your vehicle data to the Amazon Web Services Cloud. For more information, including
   *             step-by-step procedures, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html">Setting up
   *                 Amazon Web Services IoT FleetWise</a>. </p>
   *         <note>
   *             <p>An Amazon Web Services account is <b>not</b> the same thing as a "user
   *                 account". An <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html#intro-identity-users">Amazon Web Services user</a> is an identity that you create using Identity and Access Management (IAM) and
   *                 takes the form of either an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html">IAM user</a> or an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM role, both
   *                     with credentials</a>. A single Amazon Web Services account can, and typically does,
   *                 contain many users and roles.</p>
   *         </note>
   */
  public registerAccount(
    args: RegisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAccountCommandOutput>;
  public registerAccount(
    args: RegisterAccountCommandInput,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
  ): void;
  public registerAccount(
    args: RegisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
  ): void;
  public registerAccount(
    args: RegisterAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterAccountCommandOutput) => void),
    cb?: (err: any, data?: RegisterAccountCommandOutput) => void
  ): Promise<RegisterAccountCommandOutput> | void {
    const command = new RegisterAccountCommand(args);
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
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be
   *             used to manage a resource.</p>
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
   * <p>Removes the given tags (metadata) from the resource.</p>
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
   * <p> Updates a campaign. </p>
   */
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommandOutput>;
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCampaignCommandOutput) => void),
    cb?: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): Promise<UpdateCampaignCommandOutput> | void {
    const command = new UpdateCampaignCommand(args);
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
   * <p> Updates a decoder manifest.</p>
   *         <p>A decoder manifest can only be updated when the status is <code>DRAFT</code>. Only
   *                 <code>ACTIVE</code> decoder manifests can be associated with vehicles.</p>
   */
  public updateDecoderManifest(
    args: UpdateDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDecoderManifestCommandOutput>;
  public updateDecoderManifest(
    args: UpdateDecoderManifestCommandInput,
    cb: (err: any, data?: UpdateDecoderManifestCommandOutput) => void
  ): void;
  public updateDecoderManifest(
    args: UpdateDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDecoderManifestCommandOutput) => void
  ): void;
  public updateDecoderManifest(
    args: UpdateDecoderManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDecoderManifestCommandOutput) => void),
    cb?: (err: any, data?: UpdateDecoderManifestCommandOutput) => void
  ): Promise<UpdateDecoderManifestCommandOutput> | void {
    const command = new UpdateDecoderManifestCommand(args);
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
   * <p> Updates the description of an existing fleet. </p>
   *         <note>
   *             <p>If the fleet is successfully updated, Amazon Web Services IoT FleetWise sends back an HTTP 200 response
   *                 with an empty HTTP body.</p>
   *         </note>
   */
  public updateFleet(args: UpdateFleetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFleetCommandOutput>;
  public updateFleet(args: UpdateFleetCommandInput, cb: (err: any, data?: UpdateFleetCommandOutput) => void): void;
  public updateFleet(
    args: UpdateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;
  public updateFleet(
    args: UpdateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFleetCommandOutput) => void),
    cb?: (err: any, data?: UpdateFleetCommandOutput) => void
  ): Promise<UpdateFleetCommandOutput> | void {
    const command = new UpdateFleetCommand(args);
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
   * <p> Updates a vehicle model (model manifest). If created vehicles are associated with a
   *             vehicle model, it can't be updated.</p>
   */
  public updateModelManifest(
    args: UpdateModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelManifestCommandOutput>;
  public updateModelManifest(
    args: UpdateModelManifestCommandInput,
    cb: (err: any, data?: UpdateModelManifestCommandOutput) => void
  ): void;
  public updateModelManifest(
    args: UpdateModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelManifestCommandOutput) => void
  ): void;
  public updateModelManifest(
    args: UpdateModelManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateModelManifestCommandOutput) => void),
    cb?: (err: any, data?: UpdateModelManifestCommandOutput) => void
  ): Promise<UpdateModelManifestCommandOutput> | void {
    const command = new UpdateModelManifestCommand(args);
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
   * <p> Updates a signal catalog. </p>
   */
  public updateSignalCatalog(
    args: UpdateSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSignalCatalogCommandOutput>;
  public updateSignalCatalog(
    args: UpdateSignalCatalogCommandInput,
    cb: (err: any, data?: UpdateSignalCatalogCommandOutput) => void
  ): void;
  public updateSignalCatalog(
    args: UpdateSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSignalCatalogCommandOutput) => void
  ): void;
  public updateSignalCatalog(
    args: UpdateSignalCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSignalCatalogCommandOutput) => void),
    cb?: (err: any, data?: UpdateSignalCatalogCommandOutput) => void
  ): Promise<UpdateSignalCatalogCommandOutput> | void {
    const command = new UpdateSignalCatalogCommand(args);
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
   * <p> Updates a vehicle. </p>
   */
  public updateVehicle(
    args: UpdateVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVehicleCommandOutput>;
  public updateVehicle(
    args: UpdateVehicleCommandInput,
    cb: (err: any, data?: UpdateVehicleCommandOutput) => void
  ): void;
  public updateVehicle(
    args: UpdateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVehicleCommandOutput) => void
  ): void;
  public updateVehicle(
    args: UpdateVehicleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVehicleCommandOutput) => void),
    cb?: (err: any, data?: UpdateVehicleCommandOutput) => void
  ): Promise<UpdateVehicleCommandOutput> | void {
    const command = new UpdateVehicleCommand(args);
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
