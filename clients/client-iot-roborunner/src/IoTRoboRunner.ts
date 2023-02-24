// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { IoTRoboRunnerClient } from "./IoTRoboRunnerClient";

/**
 * An example service, deployed with the Octane Service creator,
 * which will echo the string
 */
export class IoTRoboRunner extends IoTRoboRunnerClient {
  /**
   * Grants permission to create a destination
   */
  public createDestination(
    args: CreateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDestinationCommandOutput>;
  public createDestination(
    args: CreateDestinationCommandInput,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  public createDestination(
    args: CreateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  public createDestination(
    args: CreateDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateDestinationCommandOutput) => void
  ): Promise<CreateDestinationCommandOutput> | void {
    const command = new CreateDestinationCommand(args);
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
   * Grants permission to create a site
   */
  public createSite(args: CreateSiteCommandInput, options?: __HttpHandlerOptions): Promise<CreateSiteCommandOutput>;
  public createSite(args: CreateSiteCommandInput, cb: (err: any, data?: CreateSiteCommandOutput) => void): void;
  public createSite(
    args: CreateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSiteCommandOutput) => void
  ): void;
  public createSite(
    args: CreateSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSiteCommandOutput) => void),
    cb?: (err: any, data?: CreateSiteCommandOutput) => void
  ): Promise<CreateSiteCommandOutput> | void {
    const command = new CreateSiteCommand(args);
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
   * Grants permission to create a worker
   */
  public createWorker(
    args: CreateWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerCommandOutput>;
  public createWorker(args: CreateWorkerCommandInput, cb: (err: any, data?: CreateWorkerCommandOutput) => void): void;
  public createWorker(
    args: CreateWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerCommandOutput) => void
  ): void;
  public createWorker(
    args: CreateWorkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkerCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkerCommandOutput) => void
  ): Promise<CreateWorkerCommandOutput> | void {
    const command = new CreateWorkerCommand(args);
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
   * Grants permission to create a worker fleet
   */
  public createWorkerFleet(
    args: CreateWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerFleetCommandOutput>;
  public createWorkerFleet(
    args: CreateWorkerFleetCommandInput,
    cb: (err: any, data?: CreateWorkerFleetCommandOutput) => void
  ): void;
  public createWorkerFleet(
    args: CreateWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerFleetCommandOutput) => void
  ): void;
  public createWorkerFleet(
    args: CreateWorkerFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkerFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkerFleetCommandOutput) => void
  ): Promise<CreateWorkerFleetCommandOutput> | void {
    const command = new CreateWorkerFleetCommand(args);
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
   * Grants permission to delete a destination
   */
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDestinationCommandOutput>;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): Promise<DeleteDestinationCommandOutput> | void {
    const command = new DeleteDestinationCommand(args);
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
   * Grants permission to delete a site
   */
  public deleteSite(args: DeleteSiteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSiteCommandOutput>;
  public deleteSite(args: DeleteSiteCommandInput, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
  public deleteSite(
    args: DeleteSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSiteCommandOutput) => void
  ): void;
  public deleteSite(
    args: DeleteSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSiteCommandOutput) => void),
    cb?: (err: any, data?: DeleteSiteCommandOutput) => void
  ): Promise<DeleteSiteCommandOutput> | void {
    const command = new DeleteSiteCommand(args);
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
   * Grants permission to delete a worker
   */
  public deleteWorker(
    args: DeleteWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkerCommandOutput>;
  public deleteWorker(args: DeleteWorkerCommandInput, cb: (err: any, data?: DeleteWorkerCommandOutput) => void): void;
  public deleteWorker(
    args: DeleteWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerCommandOutput) => void
  ): void;
  public deleteWorker(
    args: DeleteWorkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkerCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkerCommandOutput) => void
  ): Promise<DeleteWorkerCommandOutput> | void {
    const command = new DeleteWorkerCommand(args);
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
   * Grants permission to delete a worker fleet
   */
  public deleteWorkerFleet(
    args: DeleteWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkerFleetCommandOutput>;
  public deleteWorkerFleet(
    args: DeleteWorkerFleetCommandInput,
    cb: (err: any, data?: DeleteWorkerFleetCommandOutput) => void
  ): void;
  public deleteWorkerFleet(
    args: DeleteWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerFleetCommandOutput) => void
  ): void;
  public deleteWorkerFleet(
    args: DeleteWorkerFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkerFleetCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkerFleetCommandOutput) => void
  ): Promise<DeleteWorkerFleetCommandOutput> | void {
    const command = new DeleteWorkerFleetCommand(args);
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
   * Grants permission to get a destination
   */
  public getDestination(
    args: GetDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDestinationCommandOutput>;
  public getDestination(
    args: GetDestinationCommandInput,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
  public getDestination(
    args: GetDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
  public getDestination(
    args: GetDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDestinationCommandOutput) => void),
    cb?: (err: any, data?: GetDestinationCommandOutput) => void
  ): Promise<GetDestinationCommandOutput> | void {
    const command = new GetDestinationCommand(args);
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
   * Grants permission to get a site
   */
  public getSite(args: GetSiteCommandInput, options?: __HttpHandlerOptions): Promise<GetSiteCommandOutput>;
  public getSite(args: GetSiteCommandInput, cb: (err: any, data?: GetSiteCommandOutput) => void): void;
  public getSite(
    args: GetSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteCommandOutput) => void
  ): void;
  public getSite(
    args: GetSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSiteCommandOutput) => void),
    cb?: (err: any, data?: GetSiteCommandOutput) => void
  ): Promise<GetSiteCommandOutput> | void {
    const command = new GetSiteCommand(args);
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
   * Grants permission to get a worker
   */
  public getWorker(args: GetWorkerCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkerCommandOutput>;
  public getWorker(args: GetWorkerCommandInput, cb: (err: any, data?: GetWorkerCommandOutput) => void): void;
  public getWorker(
    args: GetWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkerCommandOutput) => void
  ): void;
  public getWorker(
    args: GetWorkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkerCommandOutput) => void),
    cb?: (err: any, data?: GetWorkerCommandOutput) => void
  ): Promise<GetWorkerCommandOutput> | void {
    const command = new GetWorkerCommand(args);
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
   * Grants permission to get a worker fleet
   */
  public getWorkerFleet(
    args: GetWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkerFleetCommandOutput>;
  public getWorkerFleet(
    args: GetWorkerFleetCommandInput,
    cb: (err: any, data?: GetWorkerFleetCommandOutput) => void
  ): void;
  public getWorkerFleet(
    args: GetWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkerFleetCommandOutput) => void
  ): void;
  public getWorkerFleet(
    args: GetWorkerFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkerFleetCommandOutput) => void),
    cb?: (err: any, data?: GetWorkerFleetCommandOutput) => void
  ): Promise<GetWorkerFleetCommandOutput> | void {
    const command = new GetWorkerFleetCommand(args);
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
   * Grants permission to list destinations
   */
  public listDestinations(
    args: ListDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDestinationsCommandOutput>;
  public listDestinations(
    args: ListDestinationsCommandInput,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  public listDestinations(
    args: ListDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  public listDestinations(
    args: ListDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListDestinationsCommandOutput) => void
  ): Promise<ListDestinationsCommandOutput> | void {
    const command = new ListDestinationsCommand(args);
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
   * Grants permission to list sites
   */
  public listSites(args: ListSitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSitesCommandOutput>;
  public listSites(args: ListSitesCommandInput, cb: (err: any, data?: ListSitesCommandOutput) => void): void;
  public listSites(
    args: ListSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSitesCommandOutput) => void
  ): void;
  public listSites(
    args: ListSitesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSitesCommandOutput) => void),
    cb?: (err: any, data?: ListSitesCommandOutput) => void
  ): Promise<ListSitesCommandOutput> | void {
    const command = new ListSitesCommand(args);
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
   * Grants permission to list worker fleets
   */
  public listWorkerFleets(
    args: ListWorkerFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkerFleetsCommandOutput>;
  public listWorkerFleets(
    args: ListWorkerFleetsCommandInput,
    cb: (err: any, data?: ListWorkerFleetsCommandOutput) => void
  ): void;
  public listWorkerFleets(
    args: ListWorkerFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkerFleetsCommandOutput) => void
  ): void;
  public listWorkerFleets(
    args: ListWorkerFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkerFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkerFleetsCommandOutput) => void
  ): Promise<ListWorkerFleetsCommandOutput> | void {
    const command = new ListWorkerFleetsCommand(args);
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
   * Grants permission to list workers
   */
  public listWorkers(args: ListWorkersCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkersCommandOutput>;
  public listWorkers(args: ListWorkersCommandInput, cb: (err: any, data?: ListWorkersCommandOutput) => void): void;
  public listWorkers(
    args: ListWorkersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkersCommandOutput) => void
  ): void;
  public listWorkers(
    args: ListWorkersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkersCommandOutput) => void),
    cb?: (err: any, data?: ListWorkersCommandOutput) => void
  ): Promise<ListWorkersCommandOutput> | void {
    const command = new ListWorkersCommand(args);
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
   * Grants permission to update a destination
   */
  public updateDestination(
    args: UpdateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDestinationCommandOutput>;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): Promise<UpdateDestinationCommandOutput> | void {
    const command = new UpdateDestinationCommand(args);
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
   * Grants permission to update a site
   */
  public updateSite(args: UpdateSiteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSiteCommandOutput>;
  public updateSite(args: UpdateSiteCommandInput, cb: (err: any, data?: UpdateSiteCommandOutput) => void): void;
  public updateSite(
    args: UpdateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteCommandOutput) => void
  ): void;
  public updateSite(
    args: UpdateSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSiteCommandOutput) => void),
    cb?: (err: any, data?: UpdateSiteCommandOutput) => void
  ): Promise<UpdateSiteCommandOutput> | void {
    const command = new UpdateSiteCommand(args);
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
   * Grants permission to update a worker
   */
  public updateWorker(
    args: UpdateWorkerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkerCommandOutput>;
  public updateWorker(args: UpdateWorkerCommandInput, cb: (err: any, data?: UpdateWorkerCommandOutput) => void): void;
  public updateWorker(
    args: UpdateWorkerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkerCommandOutput) => void
  ): void;
  public updateWorker(
    args: UpdateWorkerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkerCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkerCommandOutput) => void
  ): Promise<UpdateWorkerCommandOutput> | void {
    const command = new UpdateWorkerCommand(args);
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
   * Grants permission to update a worker fleet
   */
  public updateWorkerFleet(
    args: UpdateWorkerFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkerFleetCommandOutput>;
  public updateWorkerFleet(
    args: UpdateWorkerFleetCommandInput,
    cb: (err: any, data?: UpdateWorkerFleetCommandOutput) => void
  ): void;
  public updateWorkerFleet(
    args: UpdateWorkerFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkerFleetCommandOutput) => void
  ): void;
  public updateWorkerFleet(
    args: UpdateWorkerFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkerFleetCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkerFleetCommandOutput) => void
  ): Promise<UpdateWorkerFleetCommandOutput> | void {
    const command = new UpdateWorkerFleetCommand(args);
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
