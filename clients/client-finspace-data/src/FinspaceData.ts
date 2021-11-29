import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateChangesetCommand,
  CreateChangesetCommandInput,
  CreateChangesetCommandOutput,
} from "./commands/CreateChangesetCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateDataViewCommand,
  CreateDataViewCommandInput,
  CreateDataViewCommandOutput,
} from "./commands/CreateDataViewCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  GetChangesetCommand,
  GetChangesetCommandInput,
  GetChangesetCommandOutput,
} from "./commands/GetChangesetCommand";
import { GetDatasetCommand, GetDatasetCommandInput, GetDatasetCommandOutput } from "./commands/GetDatasetCommand";
import { GetDataViewCommand, GetDataViewCommandInput, GetDataViewCommandOutput } from "./commands/GetDataViewCommand";
import {
  GetProgrammaticAccessCredentialsCommand,
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
} from "./commands/GetProgrammaticAccessCredentialsCommand";
import {
  GetWorkingLocationCommand,
  GetWorkingLocationCommandInput,
  GetWorkingLocationCommandOutput,
} from "./commands/GetWorkingLocationCommand";
import {
  ListChangesetsCommand,
  ListChangesetsCommandInput,
  ListChangesetsCommandOutput,
} from "./commands/ListChangesetsCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListDataViewsCommand,
  ListDataViewsCommandInput,
  ListDataViewsCommandOutput,
} from "./commands/ListDataViewsCommand";
import {
  UpdateChangesetCommand,
  UpdateChangesetCommandInput,
  UpdateChangesetCommandOutput,
} from "./commands/UpdateChangesetCommand";
import {
  UpdateDatasetCommand,
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
} from "./commands/UpdateDatasetCommand";
import { FinspaceDataClient } from "./FinspaceDataClient";

/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace.</p>
 */
export class FinspaceData extends FinspaceDataClient {
  /**
   * <p>Creates a new Changeset in a FinSpace Dataset.</p>
   */
  public createChangeset(
    args: CreateChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChangesetCommandOutput>;
  public createChangeset(
    args: CreateChangesetCommandInput,
    cb: (err: any, data?: CreateChangesetCommandOutput) => void
  ): void;
  public createChangeset(
    args: CreateChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChangesetCommandOutput) => void
  ): void;
  public createChangeset(
    args: CreateChangesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChangesetCommandOutput) => void),
    cb?: (err: any, data?: CreateChangesetCommandOutput) => void
  ): Promise<CreateChangesetCommandOutput> | void {
    const command = new CreateChangesetCommand(args);
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
   * <p>Creates a new FinSpace Dataset.</p>
   */
  public createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  public createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetCommandOutput) => void
  ): Promise<CreateDatasetCommandOutput> | void {
    const command = new CreateDatasetCommand(args);
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
   * <p>Creates a Dataview for a Dataset.</p>
   */
  public createDataView(
    args: CreateDataViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataViewCommandOutput>;
  public createDataView(
    args: CreateDataViewCommandInput,
    cb: (err: any, data?: CreateDataViewCommandOutput) => void
  ): void;
  public createDataView(
    args: CreateDataViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataViewCommandOutput) => void
  ): void;
  public createDataView(
    args: CreateDataViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataViewCommandOutput) => void),
    cb?: (err: any, data?: CreateDataViewCommandOutput) => void
  ): Promise<CreateDataViewCommandOutput> | void {
    const command = new CreateDataViewCommand(args);
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
   * <p>Deletes a FinSpace Dataset.</p>
   */
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): Promise<DeleteDatasetCommandOutput> | void {
    const command = new DeleteDatasetCommand(args);
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
   * <p>Get information about a Changeset.</p>
   */
  public getChangeset(
    args: GetChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangesetCommandOutput>;
  public getChangeset(args: GetChangesetCommandInput, cb: (err: any, data?: GetChangesetCommandOutput) => void): void;
  public getChangeset(
    args: GetChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangesetCommandOutput) => void
  ): void;
  public getChangeset(
    args: GetChangesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChangesetCommandOutput) => void),
    cb?: (err: any, data?: GetChangesetCommandOutput) => void
  ): Promise<GetChangesetCommandOutput> | void {
    const command = new GetChangesetCommand(args);
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
   * <p>Returns information about a Dataset.</p>
   */
  public getDataset(args: GetDatasetCommandInput, options?: __HttpHandlerOptions): Promise<GetDatasetCommandOutput>;
  public getDataset(args: GetDatasetCommandInput, cb: (err: any, data?: GetDatasetCommandOutput) => void): void;
  public getDataset(
    args: GetDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatasetCommandOutput) => void
  ): void;
  public getDataset(
    args: GetDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatasetCommandOutput) => void),
    cb?: (err: any, data?: GetDatasetCommandOutput) => void
  ): Promise<GetDatasetCommandOutput> | void {
    const command = new GetDatasetCommand(args);
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
   * <p>Gets information about a Dataview.</p>
   */
  public getDataView(args: GetDataViewCommandInput, options?: __HttpHandlerOptions): Promise<GetDataViewCommandOutput>;
  public getDataView(args: GetDataViewCommandInput, cb: (err: any, data?: GetDataViewCommandOutput) => void): void;
  public getDataView(
    args: GetDataViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataViewCommandOutput) => void
  ): void;
  public getDataView(
    args: GetDataViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataViewCommandOutput) => void),
    cb?: (err: any, data?: GetDataViewCommandOutput) => void
  ): Promise<GetDataViewCommandOutput> | void {
    const command = new GetDataViewCommand(args);
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
   * <p>Request programmatic credentials to use with FinSpace SDK.</p>
   */
  public getProgrammaticAccessCredentials(
    args: GetProgrammaticAccessCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProgrammaticAccessCredentialsCommandOutput>;
  public getProgrammaticAccessCredentials(
    args: GetProgrammaticAccessCredentialsCommandInput,
    cb: (err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void
  ): void;
  public getProgrammaticAccessCredentials(
    args: GetProgrammaticAccessCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void
  ): void;
  public getProgrammaticAccessCredentials(
    args: GetProgrammaticAccessCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void),
    cb?: (err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void
  ): Promise<GetProgrammaticAccessCredentialsCommandOutput> | void {
    const command = new GetProgrammaticAccessCredentialsCommand(args);
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
   * <p>A temporary Amazon S3 location, where you can copy your files from a source location to stage or use
   *       as a scratch space in FinSpace notebook.</p>
   */
  public getWorkingLocation(
    args: GetWorkingLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkingLocationCommandOutput>;
  public getWorkingLocation(
    args: GetWorkingLocationCommandInput,
    cb: (err: any, data?: GetWorkingLocationCommandOutput) => void
  ): void;
  public getWorkingLocation(
    args: GetWorkingLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkingLocationCommandOutput) => void
  ): void;
  public getWorkingLocation(
    args: GetWorkingLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkingLocationCommandOutput) => void),
    cb?: (err: any, data?: GetWorkingLocationCommandOutput) => void
  ): Promise<GetWorkingLocationCommandOutput> | void {
    const command = new GetWorkingLocationCommand(args);
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
   * <p>Lists the FinSpace Changesets for a Dataset.</p>
   */
  public listChangesets(
    args: ListChangesetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangesetsCommandOutput>;
  public listChangesets(
    args: ListChangesetsCommandInput,
    cb: (err: any, data?: ListChangesetsCommandOutput) => void
  ): void;
  public listChangesets(
    args: ListChangesetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangesetsCommandOutput) => void
  ): void;
  public listChangesets(
    args: ListChangesetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChangesetsCommandOutput) => void),
    cb?: (err: any, data?: ListChangesetsCommandOutput) => void
  ): Promise<ListChangesetsCommandOutput> | void {
    const command = new ListChangesetsCommand(args);
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
   * <p>Lists all of the active Datasets that a user has access to.</p>
   */
  public listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  public listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetsCommandOutput) => void
  ): Promise<ListDatasetsCommandOutput> | void {
    const command = new ListDatasetsCommand(args);
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
   * <p>Lists all available Dataviews for a Dataset.</p>
   */
  public listDataViews(
    args: ListDataViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataViewsCommandOutput>;
  public listDataViews(
    args: ListDataViewsCommandInput,
    cb: (err: any, data?: ListDataViewsCommandOutput) => void
  ): void;
  public listDataViews(
    args: ListDataViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataViewsCommandOutput) => void
  ): void;
  public listDataViews(
    args: ListDataViewsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataViewsCommandOutput) => void),
    cb?: (err: any, data?: ListDataViewsCommandOutput) => void
  ): Promise<ListDataViewsCommandOutput> | void {
    const command = new ListDataViewsCommand(args);
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
   * <p>Updates a FinSpace Changeset.</p>
   */
  public updateChangeset(
    args: UpdateChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChangesetCommandOutput>;
  public updateChangeset(
    args: UpdateChangesetCommandInput,
    cb: (err: any, data?: UpdateChangesetCommandOutput) => void
  ): void;
  public updateChangeset(
    args: UpdateChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChangesetCommandOutput) => void
  ): void;
  public updateChangeset(
    args: UpdateChangesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChangesetCommandOutput) => void),
    cb?: (err: any, data?: UpdateChangesetCommandOutput) => void
  ): Promise<UpdateChangesetCommandOutput> | void {
    const command = new UpdateChangesetCommand(args);
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
   * <p>Updates a FinSpace Dataset.</p>
   */
  public updateDataset(
    args: UpdateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetCommandOutput>;
  public updateDataset(
    args: UpdateDatasetCommandInput,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;
  public updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;
  public updateDataset(
    args: UpdateDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatasetCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): Promise<UpdateDatasetCommandOutput> | void {
    const command = new UpdateDatasetCommand(args);
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
