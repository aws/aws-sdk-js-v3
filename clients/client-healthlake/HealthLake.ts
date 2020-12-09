import { HealthLakeClient } from "./HealthLakeClient";
import {
  CreateFHIRDatastoreCommand,
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
} from "./commands/CreateFHIRDatastoreCommand";
import {
  DeleteFHIRDatastoreCommand,
  DeleteFHIRDatastoreCommandInput,
  DeleteFHIRDatastoreCommandOutput,
} from "./commands/DeleteFHIRDatastoreCommand";
import {
  DescribeFHIRDatastoreCommand,
  DescribeFHIRDatastoreCommandInput,
  DescribeFHIRDatastoreCommandOutput,
} from "./commands/DescribeFHIRDatastoreCommand";
import {
  DescribeFHIRImportJobCommand,
  DescribeFHIRImportJobCommandInput,
  DescribeFHIRImportJobCommandOutput,
} from "./commands/DescribeFHIRImportJobCommand";
import {
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
} from "./commands/ListFHIRDatastoresCommand";
import {
  StartFHIRImportJobCommand,
  StartFHIRImportJobCommandInput,
  StartFHIRImportJobCommandOutput,
} from "./commands/StartFHIRImportJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon HealthLake is a HIPAA eligibile service that allows customers to store,
 *          transform, query, and analyze their data in a consistent fashion in the cloud.</p>
 */
export class HealthLake extends HealthLakeClient {
  /**
   * <p>Creates a datastore that can ingest and export FHIR data.</p>
   */
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFHIRDatastoreCommandOutput>;
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;
  public createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFHIRDatastoreCommandOutput) => void),
    cb?: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): Promise<CreateFHIRDatastoreCommandOutput> | void {
    const command = new CreateFHIRDatastoreCommand(args);
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
   * <p>Deletes a datastore. </p>
   */
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFHIRDatastoreCommandOutput>;
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;
  public deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFHIRDatastoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): Promise<DeleteFHIRDatastoreCommandOutput> | void {
    const command = new DeleteFHIRDatastoreCommand(args);
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
   * <p>Gets the properties associated with the FHIR datastore, including the datastore ID,
   *          datastore ARN, datastore name, datastore status, created at, datastore type version, and
   *          datastore endpoint.</p>
   */
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRDatastoreCommandOutput>;
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;
  public describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFHIRDatastoreCommandOutput) => void),
    cb?: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): Promise<DescribeFHIRDatastoreCommandOutput> | void {
    const command = new DescribeFHIRDatastoreCommand(args);
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
   * <p>Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the datastore.</p>
   */
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRImportJobCommandOutput>;
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;
  public describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFHIRImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): Promise<DescribeFHIRImportJobCommandOutput> | void {
    const command = new DescribeFHIRImportJobCommand(args);
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
   * <p>Lists all FHIR datastores that are in the user’s account, regardless of datastore
   *          status.</p>
   */
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFHIRDatastoresCommandOutput>;
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;
  public listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFHIRDatastoresCommandOutput) => void),
    cb?: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): Promise<ListFHIRDatastoresCommandOutput> | void {
    const command = new ListFHIRDatastoresCommand(args);
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
   * <p>Begins a FHIR Import job.</p>
   */
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFHIRImportJobCommandOutput>;
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;
  public startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFHIRImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): Promise<StartFHIRImportJobCommandOutput> | void {
    const command = new StartFHIRImportJobCommand(args);
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
