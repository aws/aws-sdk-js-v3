// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateDestinationCommand,
  CreateDestinationCommandInput,
  CreateDestinationCommandOutput,
} from "./commands/CreateDestinationCommand";
import { CreateSiteCommand, CreateSiteCommandInput, CreateSiteCommandOutput } from "./commands/CreateSiteCommand";
import {
  CreateWorkerCommand,
  CreateWorkerCommandInput,
  CreateWorkerCommandOutput,
} from "./commands/CreateWorkerCommand";
import {
  CreateWorkerFleetCommand,
  CreateWorkerFleetCommandInput,
  CreateWorkerFleetCommandOutput,
} from "./commands/CreateWorkerFleetCommand";
import {
  DeleteDestinationCommand,
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import { DeleteSiteCommand, DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import {
  DeleteWorkerCommand,
  DeleteWorkerCommandInput,
  DeleteWorkerCommandOutput,
} from "./commands/DeleteWorkerCommand";
import {
  DeleteWorkerFleetCommand,
  DeleteWorkerFleetCommandInput,
  DeleteWorkerFleetCommandOutput,
} from "./commands/DeleteWorkerFleetCommand";
import {
  GetDestinationCommand,
  GetDestinationCommandInput,
  GetDestinationCommandOutput,
} from "./commands/GetDestinationCommand";
import { GetSiteCommand, GetSiteCommandInput, GetSiteCommandOutput } from "./commands/GetSiteCommand";
import { GetWorkerCommand, GetWorkerCommandInput, GetWorkerCommandOutput } from "./commands/GetWorkerCommand";
import {
  GetWorkerFleetCommand,
  GetWorkerFleetCommandInput,
  GetWorkerFleetCommandOutput,
} from "./commands/GetWorkerFleetCommand";
import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "./commands/ListDestinationsCommand";
import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "./commands/ListSitesCommand";
import {
  ListWorkerFleetsCommand,
  ListWorkerFleetsCommandInput,
  ListWorkerFleetsCommandOutput,
} from "./commands/ListWorkerFleetsCommand";
import { ListWorkersCommand, ListWorkersCommandInput, ListWorkersCommandOutput } from "./commands/ListWorkersCommand";
import {
  UpdateDestinationCommand,
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
} from "./commands/UpdateDestinationCommand";
import { UpdateSiteCommand, UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import {
  UpdateWorkerCommand,
  UpdateWorkerCommandInput,
  UpdateWorkerCommandOutput,
} from "./commands/UpdateWorkerCommand";
import {
  UpdateWorkerFleetCommand,
  UpdateWorkerFleetCommandInput,
  UpdateWorkerFleetCommandOutput,
} from "./commands/UpdateWorkerFleetCommand";
import { IoTRoboRunnerClient, IoTRoboRunnerClientConfig } from "./IoTRoboRunnerClient";

const commands = {
  CreateDestinationCommand,
  CreateSiteCommand,
  CreateWorkerCommand,
  CreateWorkerFleetCommand,
  DeleteDestinationCommand,
  DeleteSiteCommand,
  DeleteWorkerCommand,
  DeleteWorkerFleetCommand,
  GetDestinationCommand,
  GetSiteCommand,
  GetWorkerCommand,
  GetWorkerFleetCommand,
  ListDestinationsCommand,
  ListSitesCommand,
  ListWorkerFleetsCommand,
  ListWorkersCommand,
  UpdateDestinationCommand,
  UpdateSiteCommand,
  UpdateWorkerCommand,
  UpdateWorkerFleetCommand,
};

export interface IoTRoboRunner {
  /**
   * @see {@link CreateDestinationCommand}
   */
  createDestination(
    args: CreateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDestinationCommandOutput>;
  createDestination(
    args: CreateDestinationCommandInput,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  createDestination(
    args: CreateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSiteCommand}
   */
  createSite(args: CreateSiteCommandInput, options?: __HttpHandlerOptions): Promise<CreateSiteCommandOutput>;
  createSite(args: CreateSiteCommandInput, cb: (err: any, data?: CreateSiteCommandOutput) => void): void;
  createSite(
    args: CreateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkerCommand}
   */
  createWorker(args: CreateWorkerCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkerCommandOutput>;
  createWorker(args: CreateWorkerCommandInput, cb: (err: any, data?: CreateWorkerCommandOutput) => void): void;
  createWorker(
    args: CreateWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkerFleetCommand}
   */
  createWorkerFleet(
    args: CreateWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerFleetCommandOutput>;
  createWorkerFleet(
    args: CreateWorkerFleetCommandInput,
    cb: (err: any, data?: CreateWorkerFleetCommandOutput) => void
  ): void;
  createWorkerFleet(
    args: CreateWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDestinationCommand}
   */
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDestinationCommandOutput>;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSiteCommand}
   */
  deleteSite(args: DeleteSiteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSiteCommandOutput>;
  deleteSite(args: DeleteSiteCommandInput, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
  deleteSite(
    args: DeleteSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkerCommand}
   */
  deleteWorker(args: DeleteWorkerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkerCommandOutput>;
  deleteWorker(args: DeleteWorkerCommandInput, cb: (err: any, data?: DeleteWorkerCommandOutput) => void): void;
  deleteWorker(
    args: DeleteWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkerFleetCommand}
   */
  deleteWorkerFleet(
    args: DeleteWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkerFleetCommandOutput>;
  deleteWorkerFleet(
    args: DeleteWorkerFleetCommandInput,
    cb: (err: any, data?: DeleteWorkerFleetCommandOutput) => void
  ): void;
  deleteWorkerFleet(
    args: DeleteWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDestinationCommand}
   */
  getDestination(
    args: GetDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDestinationCommandOutput>;
  getDestination(args: GetDestinationCommandInput, cb: (err: any, data?: GetDestinationCommandOutput) => void): void;
  getDestination(
    args: GetDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSiteCommand}
   */
  getSite(args: GetSiteCommandInput, options?: __HttpHandlerOptions): Promise<GetSiteCommandOutput>;
  getSite(args: GetSiteCommandInput, cb: (err: any, data?: GetSiteCommandOutput) => void): void;
  getSite(
    args: GetSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkerCommand}
   */
  getWorker(args: GetWorkerCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkerCommandOutput>;
  getWorker(args: GetWorkerCommandInput, cb: (err: any, data?: GetWorkerCommandOutput) => void): void;
  getWorker(
    args: GetWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkerFleetCommand}
   */
  getWorkerFleet(
    args: GetWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkerFleetCommandOutput>;
  getWorkerFleet(args: GetWorkerFleetCommandInput, cb: (err: any, data?: GetWorkerFleetCommandOutput) => void): void;
  getWorkerFleet(
    args: GetWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkerFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDestinationsCommand}
   */
  listDestinations(
    args: ListDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDestinationsCommandOutput>;
  listDestinations(
    args: ListDestinationsCommandInput,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  listDestinations(
    args: ListDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSitesCommand}
   */
  listSites(args: ListSitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSitesCommandOutput>;
  listSites(args: ListSitesCommandInput, cb: (err: any, data?: ListSitesCommandOutput) => void): void;
  listSites(
    args: ListSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSitesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkerFleetsCommand}
   */
  listWorkerFleets(
    args: ListWorkerFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkerFleetsCommandOutput>;
  listWorkerFleets(
    args: ListWorkerFleetsCommandInput,
    cb: (err: any, data?: ListWorkerFleetsCommandOutput) => void
  ): void;
  listWorkerFleets(
    args: ListWorkerFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkerFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkersCommand}
   */
  listWorkers(args: ListWorkersCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkersCommandOutput>;
  listWorkers(args: ListWorkersCommandInput, cb: (err: any, data?: ListWorkersCommandOutput) => void): void;
  listWorkers(
    args: ListWorkersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDestinationCommand}
   */
  updateDestination(
    args: UpdateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDestinationCommandOutput>;
  updateDestination(
    args: UpdateDestinationCommandInput,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  updateDestination(
    args: UpdateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSiteCommand}
   */
  updateSite(args: UpdateSiteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSiteCommandOutput>;
  updateSite(args: UpdateSiteCommandInput, cb: (err: any, data?: UpdateSiteCommandOutput) => void): void;
  updateSite(
    args: UpdateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkerCommand}
   */
  updateWorker(args: UpdateWorkerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkerCommandOutput>;
  updateWorker(args: UpdateWorkerCommandInput, cb: (err: any, data?: UpdateWorkerCommandOutput) => void): void;
  updateWorker(
    args: UpdateWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkerFleetCommand}
   */
  updateWorkerFleet(
    args: UpdateWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkerFleetCommandOutput>;
  updateWorkerFleet(
    args: UpdateWorkerFleetCommandInput,
    cb: (err: any, data?: UpdateWorkerFleetCommandOutput) => void
  ): void;
  updateWorkerFleet(
    args: UpdateWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkerFleetCommandOutput) => void
  ): void;
}

/**
 * @public
 * An example service, deployed with the Octane Service creator,
 * which will echo the string
 */
export class IoTRoboRunner extends IoTRoboRunnerClient implements IoTRoboRunner {}
createAggregatedClient(commands, IoTRoboRunner);
