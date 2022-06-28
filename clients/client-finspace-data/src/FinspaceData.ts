// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateUserToPermissionGroupCommand,
  AssociateUserToPermissionGroupCommandInput,
  AssociateUserToPermissionGroupCommandOutput,
} from "./commands/AssociateUserToPermissionGroupCommand";
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
  CreatePermissionGroupCommand,
  CreatePermissionGroupCommandInput,
  CreatePermissionGroupCommandOutput,
} from "./commands/CreatePermissionGroupCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  DeletePermissionGroupCommand,
  DeletePermissionGroupCommandInput,
  DeletePermissionGroupCommandOutput,
} from "./commands/DeletePermissionGroupCommand";
import { DisableUserCommand, DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import {
  DisassociateUserFromPermissionGroupCommand,
  DisassociateUserFromPermissionGroupCommandInput,
  DisassociateUserFromPermissionGroupCommandOutput,
} from "./commands/DisassociateUserFromPermissionGroupCommand";
import { EnableUserCommand, EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import {
  GetChangesetCommand,
  GetChangesetCommandInput,
  GetChangesetCommandOutput,
} from "./commands/GetChangesetCommand";
import { GetDatasetCommand, GetDatasetCommandInput, GetDatasetCommandOutput } from "./commands/GetDatasetCommand";
import { GetDataViewCommand, GetDataViewCommandInput, GetDataViewCommandOutput } from "./commands/GetDataViewCommand";
import {
  GetExternalDataViewAccessDetailsCommand,
  GetExternalDataViewAccessDetailsCommandInput,
  GetExternalDataViewAccessDetailsCommandOutput,
} from "./commands/GetExternalDataViewAccessDetailsCommand";
import {
  GetPermissionGroupCommand,
  GetPermissionGroupCommandInput,
  GetPermissionGroupCommandOutput,
} from "./commands/GetPermissionGroupCommand";
import {
  GetProgrammaticAccessCredentialsCommand,
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
} from "./commands/GetProgrammaticAccessCredentialsCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
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
  ListPermissionGroupsByUserCommand,
  ListPermissionGroupsByUserCommandInput,
  ListPermissionGroupsByUserCommandOutput,
} from "./commands/ListPermissionGroupsByUserCommand";
import {
  ListPermissionGroupsCommand,
  ListPermissionGroupsCommandInput,
  ListPermissionGroupsCommandOutput,
} from "./commands/ListPermissionGroupsCommand";
import {
  ListUsersByPermissionGroupCommand,
  ListUsersByPermissionGroupCommandInput,
  ListUsersByPermissionGroupCommandOutput,
} from "./commands/ListUsersByPermissionGroupCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ResetUserPasswordCommand,
  ResetUserPasswordCommandInput,
  ResetUserPasswordCommandOutput,
} from "./commands/ResetUserPasswordCommand";
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
import {
  UpdatePermissionGroupCommand,
  UpdatePermissionGroupCommandInput,
  UpdatePermissionGroupCommandOutput,
} from "./commands/UpdatePermissionGroupCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { FinspaceDataClient } from "./FinspaceDataClient";

/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace.</p>
 */
export class FinspaceData extends FinspaceDataClient {
  /**
   * <p>Adds a user account to a permission group to grant permissions for actions a user can perform in FinSpace.</p>
   */
  public associateUserToPermissionGroup(
    args: AssociateUserToPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserToPermissionGroupCommandOutput>;
  public associateUserToPermissionGroup(
    args: AssociateUserToPermissionGroupCommandInput,
    cb: (err: any, data?: AssociateUserToPermissionGroupCommandOutput) => void
  ): void;
  public associateUserToPermissionGroup(
    args: AssociateUserToPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserToPermissionGroupCommandOutput) => void
  ): void;
  public associateUserToPermissionGroup(
    args: AssociateUserToPermissionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateUserToPermissionGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociateUserToPermissionGroupCommandOutput) => void
  ): Promise<AssociateUserToPermissionGroupCommandOutput> | void {
    const command = new AssociateUserToPermissionGroupCommand(args);
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
   * <p>Creates a group of permissions for various actions that a user can perform in FinSpace.</p>
   */
  public createPermissionGroup(
    args: CreatePermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionGroupCommandOutput>;
  public createPermissionGroup(
    args: CreatePermissionGroupCommandInput,
    cb: (err: any, data?: CreatePermissionGroupCommandOutput) => void
  ): void;
  public createPermissionGroup(
    args: CreatePermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionGroupCommandOutput) => void
  ): void;
  public createPermissionGroup(
    args: CreatePermissionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePermissionGroupCommandOutput) => void),
    cb?: (err: any, data?: CreatePermissionGroupCommandOutput) => void
  ): Promise<CreatePermissionGroupCommandOutput> | void {
    const command = new CreatePermissionGroupCommand(args);
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
   * <p>Creates a new user in FinSpace.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
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
   * <p>Deletes a permission group. This action is irreversible.</p>
   */
  public deletePermissionGroup(
    args: DeletePermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionGroupCommandOutput>;
  public deletePermissionGroup(
    args: DeletePermissionGroupCommandInput,
    cb: (err: any, data?: DeletePermissionGroupCommandOutput) => void
  ): void;
  public deletePermissionGroup(
    args: DeletePermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionGroupCommandOutput) => void
  ): void;
  public deletePermissionGroup(
    args: DeletePermissionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePermissionGroupCommandOutput) => void),
    cb?: (err: any, data?: DeletePermissionGroupCommandOutput) => void
  ): Promise<DeletePermissionGroupCommandOutput> | void {
    const command = new DeletePermissionGroupCommand(args);
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
   * <p>Denies access to the FinSpace web application and API for the specified user.</p>
   */
  public disableUser(args: DisableUserCommandInput, options?: __HttpHandlerOptions): Promise<DisableUserCommandOutput>;
  public disableUser(args: DisableUserCommandInput, cb: (err: any, data?: DisableUserCommandOutput) => void): void;
  public disableUser(
    args: DisableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;
  public disableUser(
    args: DisableUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableUserCommandOutput) => void),
    cb?: (err: any, data?: DisableUserCommandOutput) => void
  ): Promise<DisableUserCommandOutput> | void {
    const command = new DisableUserCommand(args);
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
   * <p>Removes a user account from a permission group.</p>
   */
  public disassociateUserFromPermissionGroup(
    args: DisassociateUserFromPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserFromPermissionGroupCommandOutput>;
  public disassociateUserFromPermissionGroup(
    args: DisassociateUserFromPermissionGroupCommandInput,
    cb: (err: any, data?: DisassociateUserFromPermissionGroupCommandOutput) => void
  ): void;
  public disassociateUserFromPermissionGroup(
    args: DisassociateUserFromPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserFromPermissionGroupCommandOutput) => void
  ): void;
  public disassociateUserFromPermissionGroup(
    args: DisassociateUserFromPermissionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateUserFromPermissionGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociateUserFromPermissionGroupCommandOutput) => void
  ): Promise<DisassociateUserFromPermissionGroupCommandOutput> | void {
    const command = new DisassociateUserFromPermissionGroupCommand(args);
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
   * <p> Allows the specified user to access the FinSpace web application and API.</p>
   */
  public enableUser(args: EnableUserCommandInput, options?: __HttpHandlerOptions): Promise<EnableUserCommandOutput>;
  public enableUser(args: EnableUserCommandInput, cb: (err: any, data?: EnableUserCommandOutput) => void): void;
  public enableUser(
    args: EnableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableUserCommandOutput) => void
  ): void;
  public enableUser(
    args: EnableUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableUserCommandOutput) => void),
    cb?: (err: any, data?: EnableUserCommandOutput) => void
  ): Promise<EnableUserCommandOutput> | void {
    const command = new EnableUserCommand(args);
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
   * <p>Returns the credentials to access the external Dataview from an S3 location. To call this API:</p>
   *          <ul>
   *             <li>
   *                <p>You must retrieve the programmatic credentials.</p>
   *             </li>
   *             <li>
   *                <p>You must be a member of a FinSpace user group, where the dataset that you want to access has <code>Read Dataset Data</code> permissions.</p>
   *             </li>
   *          </ul>
   */
  public getExternalDataViewAccessDetails(
    args: GetExternalDataViewAccessDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExternalDataViewAccessDetailsCommandOutput>;
  public getExternalDataViewAccessDetails(
    args: GetExternalDataViewAccessDetailsCommandInput,
    cb: (err: any, data?: GetExternalDataViewAccessDetailsCommandOutput) => void
  ): void;
  public getExternalDataViewAccessDetails(
    args: GetExternalDataViewAccessDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExternalDataViewAccessDetailsCommandOutput) => void
  ): void;
  public getExternalDataViewAccessDetails(
    args: GetExternalDataViewAccessDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExternalDataViewAccessDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetExternalDataViewAccessDetailsCommandOutput) => void
  ): Promise<GetExternalDataViewAccessDetailsCommandOutput> | void {
    const command = new GetExternalDataViewAccessDetailsCommand(args);
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
   * <p>Retrieves the details of a specific permission group.</p>
   */
  public getPermissionGroup(
    args: GetPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPermissionGroupCommandOutput>;
  public getPermissionGroup(
    args: GetPermissionGroupCommandInput,
    cb: (err: any, data?: GetPermissionGroupCommandOutput) => void
  ): void;
  public getPermissionGroup(
    args: GetPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionGroupCommandOutput) => void
  ): void;
  public getPermissionGroup(
    args: GetPermissionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPermissionGroupCommandOutput) => void),
    cb?: (err: any, data?: GetPermissionGroupCommandOutput) => void
  ): Promise<GetPermissionGroupCommandOutput> | void {
    const command = new GetPermissionGroupCommand(args);
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
   * <p>Retrieves details for a specific user.</p>
   */
  public getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  public getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
  public getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  public getUser(
    args: GetUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserCommandOutput) => void),
    cb?: (err: any, data?: GetUserCommandOutput) => void
  ): Promise<GetUserCommandOutput> | void {
    const command = new GetUserCommand(args);
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
   * <p>Lists all available permission groups in FinSpace.</p>
   */
  public listPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionGroupsCommandOutput>;
  public listPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    cb: (err: any, data?: ListPermissionGroupsCommandOutput) => void
  ): void;
  public listPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionGroupsCommandOutput) => void
  ): void;
  public listPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionGroupsCommandOutput) => void
  ): Promise<ListPermissionGroupsCommandOutput> | void {
    const command = new ListPermissionGroupsCommand(args);
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
   * <p>Lists all the permission groups that are associated with a specific user account.</p>
   */
  public listPermissionGroupsByUser(
    args: ListPermissionGroupsByUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionGroupsByUserCommandOutput>;
  public listPermissionGroupsByUser(
    args: ListPermissionGroupsByUserCommandInput,
    cb: (err: any, data?: ListPermissionGroupsByUserCommandOutput) => void
  ): void;
  public listPermissionGroupsByUser(
    args: ListPermissionGroupsByUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionGroupsByUserCommandOutput) => void
  ): void;
  public listPermissionGroupsByUser(
    args: ListPermissionGroupsByUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionGroupsByUserCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionGroupsByUserCommandOutput) => void
  ): Promise<ListPermissionGroupsByUserCommandOutput> | void {
    const command = new ListPermissionGroupsByUserCommand(args);
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
   * <p>Lists all available user accounts in FinSpace.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
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
   * <p>Lists details of all the users in a specific permission group.</p>
   */
  public listUsersByPermissionGroup(
    args: ListUsersByPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersByPermissionGroupCommandOutput>;
  public listUsersByPermissionGroup(
    args: ListUsersByPermissionGroupCommandInput,
    cb: (err: any, data?: ListUsersByPermissionGroupCommandOutput) => void
  ): void;
  public listUsersByPermissionGroup(
    args: ListUsersByPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersByPermissionGroupCommandOutput) => void
  ): void;
  public listUsersByPermissionGroup(
    args: ListUsersByPermissionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersByPermissionGroupCommandOutput) => void),
    cb?: (err: any, data?: ListUsersByPermissionGroupCommandOutput) => void
  ): Promise<ListUsersByPermissionGroupCommandOutput> | void {
    const command = new ListUsersByPermissionGroupCommand(args);
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
   * <p>Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.</p>
   */
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetUserPasswordCommandOutput>;
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetUserPasswordCommandOutput) => void),
    cb?: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): Promise<ResetUserPasswordCommandOutput> | void {
    const command = new ResetUserPasswordCommand(args);
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

  /**
   * <p>Modifies the details of a permission group. You cannot modify a <code>permissionGroupID</code>.</p>
   */
  public updatePermissionGroup(
    args: UpdatePermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePermissionGroupCommandOutput>;
  public updatePermissionGroup(
    args: UpdatePermissionGroupCommandInput,
    cb: (err: any, data?: UpdatePermissionGroupCommandOutput) => void
  ): void;
  public updatePermissionGroup(
    args: UpdatePermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePermissionGroupCommandOutput) => void
  ): void;
  public updatePermissionGroup(
    args: UpdatePermissionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePermissionGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdatePermissionGroupCommandOutput) => void
  ): Promise<UpdatePermissionGroupCommandOutput> | void {
    const command = new UpdatePermissionGroupCommand(args);
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
   * <p>Modifies the details of the specified user account. You cannot update the <code>userId</code> for a user.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
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
