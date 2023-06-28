// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { IoTFleetWiseClient, IoTFleetWiseClientConfig } from "./IoTFleetWiseClient";

const commands = {
  AssociateVehicleFleetCommand,
  BatchCreateVehicleCommand,
  BatchUpdateVehicleCommand,
  CreateCampaignCommand,
  CreateDecoderManifestCommand,
  CreateFleetCommand,
  CreateModelManifestCommand,
  CreateSignalCatalogCommand,
  CreateVehicleCommand,
  DeleteCampaignCommand,
  DeleteDecoderManifestCommand,
  DeleteFleetCommand,
  DeleteModelManifestCommand,
  DeleteSignalCatalogCommand,
  DeleteVehicleCommand,
  DisassociateVehicleFleetCommand,
  GetCampaignCommand,
  GetDecoderManifestCommand,
  GetFleetCommand,
  GetLoggingOptionsCommand,
  GetModelManifestCommand,
  GetRegisterAccountStatusCommand,
  GetSignalCatalogCommand,
  GetVehicleCommand,
  GetVehicleStatusCommand,
  ImportDecoderManifestCommand,
  ImportSignalCatalogCommand,
  ListCampaignsCommand,
  ListDecoderManifestNetworkInterfacesCommand,
  ListDecoderManifestsCommand,
  ListDecoderManifestSignalsCommand,
  ListFleetsCommand,
  ListFleetsForVehicleCommand,
  ListModelManifestNodesCommand,
  ListModelManifestsCommand,
  ListSignalCatalogNodesCommand,
  ListSignalCatalogsCommand,
  ListTagsForResourceCommand,
  ListVehiclesCommand,
  ListVehiclesInFleetCommand,
  PutLoggingOptionsCommand,
  RegisterAccountCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCampaignCommand,
  UpdateDecoderManifestCommand,
  UpdateFleetCommand,
  UpdateModelManifestCommand,
  UpdateSignalCatalogCommand,
  UpdateVehicleCommand,
};

export interface IoTFleetWise {
  /**
   * @see {@link AssociateVehicleFleetCommand}
   */
  associateVehicleFleet(
    args: AssociateVehicleFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVehicleFleetCommandOutput>;
  associateVehicleFleet(
    args: AssociateVehicleFleetCommandInput,
    cb: (err: any, data?: AssociateVehicleFleetCommandOutput) => void
  ): void;
  associateVehicleFleet(
    args: AssociateVehicleFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVehicleFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateVehicleCommand}
   */
  batchCreateVehicle(
    args: BatchCreateVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateVehicleCommandOutput>;
  batchCreateVehicle(
    args: BatchCreateVehicleCommandInput,
    cb: (err: any, data?: BatchCreateVehicleCommandOutput) => void
  ): void;
  batchCreateVehicle(
    args: BatchCreateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateVehicleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateVehicleCommand}
   */
  batchUpdateVehicle(
    args: BatchUpdateVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateVehicleCommandOutput>;
  batchUpdateVehicle(
    args: BatchUpdateVehicleCommandInput,
    cb: (err: any, data?: BatchUpdateVehicleCommandOutput) => void
  ): void;
  batchUpdateVehicle(
    args: BatchUpdateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateVehicleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCampaignCommand}
   */
  createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  createCampaign(args: CreateCampaignCommandInput, cb: (err: any, data?: CreateCampaignCommandOutput) => void): void;
  createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDecoderManifestCommand}
   */
  createDecoderManifest(
    args: CreateDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDecoderManifestCommandOutput>;
  createDecoderManifest(
    args: CreateDecoderManifestCommandInput,
    cb: (err: any, data?: CreateDecoderManifestCommandOutput) => void
  ): void;
  createDecoderManifest(
    args: CreateDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDecoderManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelManifestCommand}
   */
  createModelManifest(
    args: CreateModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelManifestCommandOutput>;
  createModelManifest(
    args: CreateModelManifestCommandInput,
    cb: (err: any, data?: CreateModelManifestCommandOutput) => void
  ): void;
  createModelManifest(
    args: CreateModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSignalCatalogCommand}
   */
  createSignalCatalog(
    args: CreateSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSignalCatalogCommandOutput>;
  createSignalCatalog(
    args: CreateSignalCatalogCommandInput,
    cb: (err: any, data?: CreateSignalCatalogCommandOutput) => void
  ): void;
  createSignalCatalog(
    args: CreateSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSignalCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVehicleCommand}
   */
  createVehicle(args: CreateVehicleCommandInput, options?: __HttpHandlerOptions): Promise<CreateVehicleCommandOutput>;
  createVehicle(args: CreateVehicleCommandInput, cb: (err: any, data?: CreateVehicleCommandOutput) => void): void;
  createVehicle(
    args: CreateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVehicleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommand}
   */
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommandOutput>;
  deleteCampaign(args: DeleteCampaignCommandInput, cb: (err: any, data?: DeleteCampaignCommandOutput) => void): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDecoderManifestCommand}
   */
  deleteDecoderManifest(
    args: DeleteDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDecoderManifestCommandOutput>;
  deleteDecoderManifest(
    args: DeleteDecoderManifestCommandInput,
    cb: (err: any, data?: DeleteDecoderManifestCommandOutput) => void
  ): void;
  deleteDecoderManifest(
    args: DeleteDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDecoderManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelManifestCommand}
   */
  deleteModelManifest(
    args: DeleteModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelManifestCommandOutput>;
  deleteModelManifest(
    args: DeleteModelManifestCommandInput,
    cb: (err: any, data?: DeleteModelManifestCommandOutput) => void
  ): void;
  deleteModelManifest(
    args: DeleteModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSignalCatalogCommand}
   */
  deleteSignalCatalog(
    args: DeleteSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSignalCatalogCommandOutput>;
  deleteSignalCatalog(
    args: DeleteSignalCatalogCommandInput,
    cb: (err: any, data?: DeleteSignalCatalogCommandOutput) => void
  ): void;
  deleteSignalCatalog(
    args: DeleteSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSignalCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVehicleCommand}
   */
  deleteVehicle(args: DeleteVehicleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVehicleCommandOutput>;
  deleteVehicle(args: DeleteVehicleCommandInput, cb: (err: any, data?: DeleteVehicleCommandOutput) => void): void;
  deleteVehicle(
    args: DeleteVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVehicleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateVehicleFleetCommand}
   */
  disassociateVehicleFleet(
    args: DisassociateVehicleFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateVehicleFleetCommandOutput>;
  disassociateVehicleFleet(
    args: DisassociateVehicleFleetCommandInput,
    cb: (err: any, data?: DisassociateVehicleFleetCommandOutput) => void
  ): void;
  disassociateVehicleFleet(
    args: DisassociateVehicleFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateVehicleFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignCommand}
   */
  getCampaign(args: GetCampaignCommandInput, options?: __HttpHandlerOptions): Promise<GetCampaignCommandOutput>;
  getCampaign(args: GetCampaignCommandInput, cb: (err: any, data?: GetCampaignCommandOutput) => void): void;
  getCampaign(
    args: GetCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDecoderManifestCommand}
   */
  getDecoderManifest(
    args: GetDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDecoderManifestCommandOutput>;
  getDecoderManifest(
    args: GetDecoderManifestCommandInput,
    cb: (err: any, data?: GetDecoderManifestCommandOutput) => void
  ): void;
  getDecoderManifest(
    args: GetDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDecoderManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFleetCommand}
   */
  getFleet(args: GetFleetCommandInput, options?: __HttpHandlerOptions): Promise<GetFleetCommandOutput>;
  getFleet(args: GetFleetCommandInput, cb: (err: any, data?: GetFleetCommandOutput) => void): void;
  getFleet(
    args: GetFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoggingOptionsCommand}
   */
  getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggingOptionsCommandOutput>;
  getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;
  getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelManifestCommand}
   */
  getModelManifest(
    args: GetModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelManifestCommandOutput>;
  getModelManifest(
    args: GetModelManifestCommandInput,
    cb: (err: any, data?: GetModelManifestCommandOutput) => void
  ): void;
  getModelManifest(
    args: GetModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegisterAccountStatusCommand}
   */
  getRegisterAccountStatus(
    args: GetRegisterAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegisterAccountStatusCommandOutput>;
  getRegisterAccountStatus(
    args: GetRegisterAccountStatusCommandInput,
    cb: (err: any, data?: GetRegisterAccountStatusCommandOutput) => void
  ): void;
  getRegisterAccountStatus(
    args: GetRegisterAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegisterAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSignalCatalogCommand}
   */
  getSignalCatalog(
    args: GetSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSignalCatalogCommandOutput>;
  getSignalCatalog(
    args: GetSignalCatalogCommandInput,
    cb: (err: any, data?: GetSignalCatalogCommandOutput) => void
  ): void;
  getSignalCatalog(
    args: GetSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSignalCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVehicleCommand}
   */
  getVehicle(args: GetVehicleCommandInput, options?: __HttpHandlerOptions): Promise<GetVehicleCommandOutput>;
  getVehicle(args: GetVehicleCommandInput, cb: (err: any, data?: GetVehicleCommandOutput) => void): void;
  getVehicle(
    args: GetVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVehicleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVehicleStatusCommand}
   */
  getVehicleStatus(
    args: GetVehicleStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVehicleStatusCommandOutput>;
  getVehicleStatus(
    args: GetVehicleStatusCommandInput,
    cb: (err: any, data?: GetVehicleStatusCommandOutput) => void
  ): void;
  getVehicleStatus(
    args: GetVehicleStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVehicleStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportDecoderManifestCommand}
   */
  importDecoderManifest(
    args: ImportDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDecoderManifestCommandOutput>;
  importDecoderManifest(
    args: ImportDecoderManifestCommandInput,
    cb: (err: any, data?: ImportDecoderManifestCommandOutput) => void
  ): void;
  importDecoderManifest(
    args: ImportDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDecoderManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportSignalCatalogCommand}
   */
  importSignalCatalog(
    args: ImportSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSignalCatalogCommandOutput>;
  importSignalCatalog(
    args: ImportSignalCatalogCommandInput,
    cb: (err: any, data?: ImportSignalCatalogCommandOutput) => void
  ): void;
  importSignalCatalog(
    args: ImportSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSignalCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCampaignsCommand}
   */
  listCampaigns(args: ListCampaignsCommandInput, options?: __HttpHandlerOptions): Promise<ListCampaignsCommandOutput>;
  listCampaigns(args: ListCampaignsCommandInput, cb: (err: any, data?: ListCampaignsCommandOutput) => void): void;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDecoderManifestNetworkInterfacesCommand}
   */
  listDecoderManifestNetworkInterfaces(
    args: ListDecoderManifestNetworkInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDecoderManifestNetworkInterfacesCommandOutput>;
  listDecoderManifestNetworkInterfaces(
    args: ListDecoderManifestNetworkInterfacesCommandInput,
    cb: (err: any, data?: ListDecoderManifestNetworkInterfacesCommandOutput) => void
  ): void;
  listDecoderManifestNetworkInterfaces(
    args: ListDecoderManifestNetworkInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDecoderManifestNetworkInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDecoderManifestsCommand}
   */
  listDecoderManifests(
    args: ListDecoderManifestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDecoderManifestsCommandOutput>;
  listDecoderManifests(
    args: ListDecoderManifestsCommandInput,
    cb: (err: any, data?: ListDecoderManifestsCommandOutput) => void
  ): void;
  listDecoderManifests(
    args: ListDecoderManifestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDecoderManifestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDecoderManifestSignalsCommand}
   */
  listDecoderManifestSignals(
    args: ListDecoderManifestSignalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDecoderManifestSignalsCommandOutput>;
  listDecoderManifestSignals(
    args: ListDecoderManifestSignalsCommandInput,
    cb: (err: any, data?: ListDecoderManifestSignalsCommandOutput) => void
  ): void;
  listDecoderManifestSignals(
    args: ListDecoderManifestSignalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDecoderManifestSignalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsForVehicleCommand}
   */
  listFleetsForVehicle(
    args: ListFleetsForVehicleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetsForVehicleCommandOutput>;
  listFleetsForVehicle(
    args: ListFleetsForVehicleCommandInput,
    cb: (err: any, data?: ListFleetsForVehicleCommandOutput) => void
  ): void;
  listFleetsForVehicle(
    args: ListFleetsForVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsForVehicleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelManifestNodesCommand}
   */
  listModelManifestNodes(
    args: ListModelManifestNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelManifestNodesCommandOutput>;
  listModelManifestNodes(
    args: ListModelManifestNodesCommandInput,
    cb: (err: any, data?: ListModelManifestNodesCommandOutput) => void
  ): void;
  listModelManifestNodes(
    args: ListModelManifestNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelManifestNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelManifestsCommand}
   */
  listModelManifests(
    args: ListModelManifestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelManifestsCommandOutput>;
  listModelManifests(
    args: ListModelManifestsCommandInput,
    cb: (err: any, data?: ListModelManifestsCommandOutput) => void
  ): void;
  listModelManifests(
    args: ListModelManifestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelManifestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSignalCatalogNodesCommand}
   */
  listSignalCatalogNodes(
    args: ListSignalCatalogNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSignalCatalogNodesCommandOutput>;
  listSignalCatalogNodes(
    args: ListSignalCatalogNodesCommandInput,
    cb: (err: any, data?: ListSignalCatalogNodesCommandOutput) => void
  ): void;
  listSignalCatalogNodes(
    args: ListSignalCatalogNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSignalCatalogNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSignalCatalogsCommand}
   */
  listSignalCatalogs(
    args: ListSignalCatalogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSignalCatalogsCommandOutput>;
  listSignalCatalogs(
    args: ListSignalCatalogsCommandInput,
    cb: (err: any, data?: ListSignalCatalogsCommandOutput) => void
  ): void;
  listSignalCatalogs(
    args: ListSignalCatalogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSignalCatalogsCommandOutput) => void
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
   * @see {@link ListVehiclesCommand}
   */
  listVehicles(args: ListVehiclesCommandInput, options?: __HttpHandlerOptions): Promise<ListVehiclesCommandOutput>;
  listVehicles(args: ListVehiclesCommandInput, cb: (err: any, data?: ListVehiclesCommandOutput) => void): void;
  listVehicles(
    args: ListVehiclesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVehiclesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVehiclesInFleetCommand}
   */
  listVehiclesInFleet(
    args: ListVehiclesInFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVehiclesInFleetCommandOutput>;
  listVehiclesInFleet(
    args: ListVehiclesInFleetCommandInput,
    cb: (err: any, data?: ListVehiclesInFleetCommandOutput) => void
  ): void;
  listVehiclesInFleet(
    args: ListVehiclesInFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVehiclesInFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLoggingOptionsCommand}
   */
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterAccountCommand}
   */
  registerAccount(
    args: RegisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAccountCommandOutput>;
  registerAccount(args: RegisterAccountCommandInput, cb: (err: any, data?: RegisterAccountCommandOutput) => void): void;
  registerAccount(
    args: RegisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
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
   * @see {@link UpdateCampaignCommand}
   */
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommandOutput>;
  updateCampaign(args: UpdateCampaignCommandInput, cb: (err: any, data?: UpdateCampaignCommandOutput) => void): void;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDecoderManifestCommand}
   */
  updateDecoderManifest(
    args: UpdateDecoderManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDecoderManifestCommandOutput>;
  updateDecoderManifest(
    args: UpdateDecoderManifestCommandInput,
    cb: (err: any, data?: UpdateDecoderManifestCommandOutput) => void
  ): void;
  updateDecoderManifest(
    args: UpdateDecoderManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDecoderManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCommand}
   */
  updateFleet(args: UpdateFleetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFleetCommandOutput>;
  updateFleet(args: UpdateFleetCommandInput, cb: (err: any, data?: UpdateFleetCommandOutput) => void): void;
  updateFleet(
    args: UpdateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelManifestCommand}
   */
  updateModelManifest(
    args: UpdateModelManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelManifestCommandOutput>;
  updateModelManifest(
    args: UpdateModelManifestCommandInput,
    cb: (err: any, data?: UpdateModelManifestCommandOutput) => void
  ): void;
  updateModelManifest(
    args: UpdateModelManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelManifestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSignalCatalogCommand}
   */
  updateSignalCatalog(
    args: UpdateSignalCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSignalCatalogCommandOutput>;
  updateSignalCatalog(
    args: UpdateSignalCatalogCommandInput,
    cb: (err: any, data?: UpdateSignalCatalogCommandOutput) => void
  ): void;
  updateSignalCatalog(
    args: UpdateSignalCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSignalCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVehicleCommand}
   */
  updateVehicle(args: UpdateVehicleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVehicleCommandOutput>;
  updateVehicle(args: UpdateVehicleCommandInput, cb: (err: any, data?: UpdateVehicleCommandOutput) => void): void;
  updateVehicle(
    args: UpdateVehicleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVehicleCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services IoT FleetWise is a fully managed service that you can use to collect, model, and transfer
 *             vehicle data to the Amazon Web Services cloud at scale. With Amazon Web Services IoT FleetWise, you can standardize all of
 *             your vehicle data models, independent of the in-vehicle communication architecture, and
 *             define data collection rules to transfer only high-value data to the cloud.
 *             </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/">What is Amazon Web Services IoT FleetWise?</a> in the
 *                 <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 */
export class IoTFleetWise extends IoTFleetWiseClient implements IoTFleetWise {}
createAggregatedClient(commands, IoTFleetWise);
