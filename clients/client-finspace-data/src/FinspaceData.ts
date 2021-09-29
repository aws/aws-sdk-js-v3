import { FinspaceDataClient } from "./FinspaceDataClient";
import {
  CreateChangesetCommand,
  CreateChangesetCommandInput,
  CreateChangesetCommandOutput,
} from "./commands/CreateChangesetCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace environment.  </p>
 */
export class FinspaceData extends FinspaceDataClient {
  /**
   * <p>Creates a new changeset in a FinSpace dataset.</p>
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
   * <p>Request programmatic credentials to use with Habanero SDK.</p>
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
   * <p>A temporary Amazon S3 location to copy your files from a source location to stage or use
   *       as a scratch space in Habanero notebook.</p>
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
}
