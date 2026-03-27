// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateUserToPermissionGroupCommandInput,
  type AssociateUserToPermissionGroupCommandOutput,
  AssociateUserToPermissionGroupCommand,
} from "./commands/AssociateUserToPermissionGroupCommand";
import {
  type CreateChangesetCommandInput,
  type CreateChangesetCommandOutput,
  CreateChangesetCommand,
} from "./commands/CreateChangesetCommand";
import {
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetCommand,
} from "./commands/CreateDatasetCommand";
import {
  type CreateDataViewCommandInput,
  type CreateDataViewCommandOutput,
  CreateDataViewCommand,
} from "./commands/CreateDataViewCommand";
import {
  type CreatePermissionGroupCommandInput,
  type CreatePermissionGroupCommandOutput,
  CreatePermissionGroupCommand,
} from "./commands/CreatePermissionGroupCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetCommand,
} from "./commands/DeleteDatasetCommand";
import {
  type DeletePermissionGroupCommandInput,
  type DeletePermissionGroupCommandOutput,
  DeletePermissionGroupCommand,
} from "./commands/DeletePermissionGroupCommand";
import {
  type DisableUserCommandInput,
  type DisableUserCommandOutput,
  DisableUserCommand,
} from "./commands/DisableUserCommand";
import {
  type DisassociateUserFromPermissionGroupCommandInput,
  type DisassociateUserFromPermissionGroupCommandOutput,
  DisassociateUserFromPermissionGroupCommand,
} from "./commands/DisassociateUserFromPermissionGroupCommand";
import {
  type EnableUserCommandInput,
  type EnableUserCommandOutput,
  EnableUserCommand,
} from "./commands/EnableUserCommand";
import {
  type GetChangesetCommandInput,
  type GetChangesetCommandOutput,
  GetChangesetCommand,
} from "./commands/GetChangesetCommand";
import {
  type GetDatasetCommandInput,
  type GetDatasetCommandOutput,
  GetDatasetCommand,
} from "./commands/GetDatasetCommand";
import {
  type GetDataViewCommandInput,
  type GetDataViewCommandOutput,
  GetDataViewCommand,
} from "./commands/GetDataViewCommand";
import {
  type GetExternalDataViewAccessDetailsCommandInput,
  type GetExternalDataViewAccessDetailsCommandOutput,
  GetExternalDataViewAccessDetailsCommand,
} from "./commands/GetExternalDataViewAccessDetailsCommand";
import {
  type GetPermissionGroupCommandInput,
  type GetPermissionGroupCommandOutput,
  GetPermissionGroupCommand,
} from "./commands/GetPermissionGroupCommand";
import {
  type GetProgrammaticAccessCredentialsCommandInput,
  type GetProgrammaticAccessCredentialsCommandOutput,
  GetProgrammaticAccessCredentialsCommand,
} from "./commands/GetProgrammaticAccessCredentialsCommand";
import { type GetUserCommandInput, type GetUserCommandOutput, GetUserCommand } from "./commands/GetUserCommand";
import {
  type GetWorkingLocationCommandInput,
  type GetWorkingLocationCommandOutput,
  GetWorkingLocationCommand,
} from "./commands/GetWorkingLocationCommand";
import {
  type ListChangesetsCommandInput,
  type ListChangesetsCommandOutput,
  ListChangesetsCommand,
} from "./commands/ListChangesetsCommand";
import {
  type ListDatasetsCommandInput,
  type ListDatasetsCommandOutput,
  ListDatasetsCommand,
} from "./commands/ListDatasetsCommand";
import {
  type ListDataViewsCommandInput,
  type ListDataViewsCommandOutput,
  ListDataViewsCommand,
} from "./commands/ListDataViewsCommand";
import {
  type ListPermissionGroupsByUserCommandInput,
  type ListPermissionGroupsByUserCommandOutput,
  ListPermissionGroupsByUserCommand,
} from "./commands/ListPermissionGroupsByUserCommand";
import {
  type ListPermissionGroupsCommandInput,
  type ListPermissionGroupsCommandOutput,
  ListPermissionGroupsCommand,
} from "./commands/ListPermissionGroupsCommand";
import {
  type ListUsersByPermissionGroupCommandInput,
  type ListUsersByPermissionGroupCommandOutput,
  ListUsersByPermissionGroupCommand,
} from "./commands/ListUsersByPermissionGroupCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type ResetUserPasswordCommandInput,
  type ResetUserPasswordCommandOutput,
  ResetUserPasswordCommand,
} from "./commands/ResetUserPasswordCommand";
import {
  type UpdateChangesetCommandInput,
  type UpdateChangesetCommandOutput,
  UpdateChangesetCommand,
} from "./commands/UpdateChangesetCommand";
import {
  type UpdateDatasetCommandInput,
  type UpdateDatasetCommandOutput,
  UpdateDatasetCommand,
} from "./commands/UpdateDatasetCommand";
import {
  type UpdatePermissionGroupCommandInput,
  type UpdatePermissionGroupCommandOutput,
  UpdatePermissionGroupCommand,
} from "./commands/UpdatePermissionGroupCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import { FinspaceDataClient } from "./FinspaceDataClient";
import { paginateListChangesets } from "./pagination/ListChangesetsPaginator";
import { paginateListDatasets } from "./pagination/ListDatasetsPaginator";
import { paginateListDataViews } from "./pagination/ListDataViewsPaginator";
import { paginateListPermissionGroups } from "./pagination/ListPermissionGroupsPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";

const commands = {
  AssociateUserToPermissionGroupCommand,
  CreateChangesetCommand,
  CreateDatasetCommand,
  CreateDataViewCommand,
  CreatePermissionGroupCommand,
  CreateUserCommand,
  DeleteDatasetCommand,
  DeletePermissionGroupCommand,
  DisableUserCommand,
  DisassociateUserFromPermissionGroupCommand,
  EnableUserCommand,
  GetChangesetCommand,
  GetDatasetCommand,
  GetDataViewCommand,
  GetExternalDataViewAccessDetailsCommand,
  GetPermissionGroupCommand,
  GetProgrammaticAccessCredentialsCommand,
  GetUserCommand,
  GetWorkingLocationCommand,
  ListChangesetsCommand,
  ListDatasetsCommand,
  ListDataViewsCommand,
  ListPermissionGroupsCommand,
  ListPermissionGroupsByUserCommand,
  ListUsersCommand,
  ListUsersByPermissionGroupCommand,
  ResetUserPasswordCommand,
  UpdateChangesetCommand,
  UpdateDatasetCommand,
  UpdatePermissionGroupCommand,
  UpdateUserCommand,
};
const paginators = {
  paginateListChangesets,
  paginateListDatasets,
  paginateListDataViews,
  paginateListPermissionGroups,
  paginateListUsers,
};

export interface FinspaceData {
  /**
   * @see {@link AssociateUserToPermissionGroupCommand}
   */
  associateUserToPermissionGroup(
    args: AssociateUserToPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserToPermissionGroupCommandOutput>;
  associateUserToPermissionGroup(
    args: AssociateUserToPermissionGroupCommandInput,
    cb: (err: any, data?: AssociateUserToPermissionGroupCommandOutput) => void
  ): void;
  associateUserToPermissionGroup(
    args: AssociateUserToPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserToPermissionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChangesetCommand}
   */
  createChangeset(
    args: CreateChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChangesetCommandOutput>;
  createChangeset(
    args: CreateChangesetCommandInput,
    cb: (err: any, data?: CreateChangesetCommandOutput) => void
  ): void;
  createChangeset(
    args: CreateChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChangesetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataViewCommand}
   */
  createDataView(
    args: CreateDataViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataViewCommandOutput>;
  createDataView(
    args: CreateDataViewCommandInput,
    cb: (err: any, data?: CreateDataViewCommandOutput) => void
  ): void;
  createDataView(
    args: CreateDataViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataViewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePermissionGroupCommand}
   */
  createPermissionGroup(
    args: CreatePermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionGroupCommandOutput>;
  createPermissionGroup(
    args: CreatePermissionGroupCommandInput,
    cb: (err: any, data?: CreatePermissionGroupCommandOutput) => void
  ): void;
  createPermissionGroup(
    args: CreatePermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionGroupCommand}
   */
  deletePermissionGroup(
    args: DeletePermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionGroupCommandOutput>;
  deletePermissionGroup(
    args: DeletePermissionGroupCommandInput,
    cb: (err: any, data?: DeletePermissionGroupCommandOutput) => void
  ): void;
  deletePermissionGroup(
    args: DeletePermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableUserCommand}
   */
  disableUser(
    args: DisableUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableUserCommandOutput>;
  disableUser(
    args: DisableUserCommandInput,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;
  disableUser(
    args: DisableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateUserFromPermissionGroupCommand}
   */
  disassociateUserFromPermissionGroup(
    args: DisassociateUserFromPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserFromPermissionGroupCommandOutput>;
  disassociateUserFromPermissionGroup(
    args: DisassociateUserFromPermissionGroupCommandInput,
    cb: (err: any, data?: DisassociateUserFromPermissionGroupCommandOutput) => void
  ): void;
  disassociateUserFromPermissionGroup(
    args: DisassociateUserFromPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserFromPermissionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableUserCommand}
   */
  enableUser(
    args: EnableUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableUserCommandOutput>;
  enableUser(
    args: EnableUserCommandInput,
    cb: (err: any, data?: EnableUserCommandOutput) => void
  ): void;
  enableUser(
    args: EnableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChangesetCommand}
   */
  getChangeset(
    args: GetChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangesetCommandOutput>;
  getChangeset(
    args: GetChangesetCommandInput,
    cb: (err: any, data?: GetChangesetCommandOutput) => void
  ): void;
  getChangeset(
    args: GetChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangesetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatasetCommand}
   */
  getDataset(
    args: GetDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatasetCommandOutput>;
  getDataset(
    args: GetDatasetCommandInput,
    cb: (err: any, data?: GetDatasetCommandOutput) => void
  ): void;
  getDataset(
    args: GetDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataViewCommand}
   */
  getDataView(
    args: GetDataViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataViewCommandOutput>;
  getDataView(
    args: GetDataViewCommandInput,
    cb: (err: any, data?: GetDataViewCommandOutput) => void
  ): void;
  getDataView(
    args: GetDataViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExternalDataViewAccessDetailsCommand}
   */
  getExternalDataViewAccessDetails(
    args: GetExternalDataViewAccessDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExternalDataViewAccessDetailsCommandOutput>;
  getExternalDataViewAccessDetails(
    args: GetExternalDataViewAccessDetailsCommandInput,
    cb: (err: any, data?: GetExternalDataViewAccessDetailsCommandOutput) => void
  ): void;
  getExternalDataViewAccessDetails(
    args: GetExternalDataViewAccessDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExternalDataViewAccessDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPermissionGroupCommand}
   */
  getPermissionGroup(
    args: GetPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPermissionGroupCommandOutput>;
  getPermissionGroup(
    args: GetPermissionGroupCommandInput,
    cb: (err: any, data?: GetPermissionGroupCommandOutput) => void
  ): void;
  getPermissionGroup(
    args: GetPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProgrammaticAccessCredentialsCommand}
   */
  getProgrammaticAccessCredentials(
    args: GetProgrammaticAccessCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProgrammaticAccessCredentialsCommandOutput>;
  getProgrammaticAccessCredentials(
    args: GetProgrammaticAccessCredentialsCommandInput,
    cb: (err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void
  ): void;
  getProgrammaticAccessCredentials(
    args: GetProgrammaticAccessCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProgrammaticAccessCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkingLocationCommand}
   */
  getWorkingLocation(): Promise<GetWorkingLocationCommandOutput>;
  getWorkingLocation(
    args: GetWorkingLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkingLocationCommandOutput>;
  getWorkingLocation(
    args: GetWorkingLocationCommandInput,
    cb: (err: any, data?: GetWorkingLocationCommandOutput) => void
  ): void;
  getWorkingLocation(
    args: GetWorkingLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkingLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChangesetsCommand}
   */
  listChangesets(
    args: ListChangesetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangesetsCommandOutput>;
  listChangesets(
    args: ListChangesetsCommandInput,
    cb: (err: any, data?: ListChangesetsCommandOutput) => void
  ): void;
  listChangesets(
    args: ListChangesetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangesetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataViewsCommand}
   */
  listDataViews(
    args: ListDataViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataViewsCommandOutput>;
  listDataViews(
    args: ListDataViewsCommandInput,
    cb: (err: any, data?: ListDataViewsCommandOutput) => void
  ): void;
  listDataViews(
    args: ListDataViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionGroupsCommand}
   */
  listPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionGroupsCommandOutput>;
  listPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    cb: (err: any, data?: ListPermissionGroupsCommandOutput) => void
  ): void;
  listPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionGroupsByUserCommand}
   */
  listPermissionGroupsByUser(
    args: ListPermissionGroupsByUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionGroupsByUserCommandOutput>;
  listPermissionGroupsByUser(
    args: ListPermissionGroupsByUserCommandInput,
    cb: (err: any, data?: ListPermissionGroupsByUserCommandOutput) => void
  ): void;
  listPermissionGroupsByUser(
    args: ListPermissionGroupsByUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionGroupsByUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersByPermissionGroupCommand}
   */
  listUsersByPermissionGroup(
    args: ListUsersByPermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersByPermissionGroupCommandOutput>;
  listUsersByPermissionGroup(
    args: ListUsersByPermissionGroupCommandInput,
    cb: (err: any, data?: ListUsersByPermissionGroupCommandOutput) => void
  ): void;
  listUsersByPermissionGroup(
    args: ListUsersByPermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersByPermissionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetUserPasswordCommand}
   */
  resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetUserPasswordCommandOutput>;
  resetUserPassword(
    args: ResetUserPasswordCommandInput,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;
  resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChangesetCommand}
   */
  updateChangeset(
    args: UpdateChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChangesetCommandOutput>;
  updateChangeset(
    args: UpdateChangesetCommandInput,
    cb: (err: any, data?: UpdateChangesetCommandOutput) => void
  ): void;
  updateChangeset(
    args: UpdateChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChangesetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetCommand}
   */
  updateDataset(
    args: UpdateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetCommandOutput>;
  updateDataset(
    args: UpdateDatasetCommandInput,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;
  updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePermissionGroupCommand}
   */
  updatePermissionGroup(
    args: UpdatePermissionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePermissionGroupCommandOutput>;
  updatePermissionGroup(
    args: UpdatePermissionGroupCommandInput,
    cb: (err: any, data?: UpdatePermissionGroupCommandOutput) => void
  ): void;
  updatePermissionGroup(
    args: UpdatePermissionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePermissionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChangesetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChangesetsCommandOutput}.
   */
  paginateListChangesets(
    args: ListChangesetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChangesetsCommandOutput>;

  /**
   * @see {@link ListDatasetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetsCommandOutput}.
   */
  paginateListDatasets(
    args?: ListDatasetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetsCommandOutput>;

  /**
   * @see {@link ListDataViewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataViewsCommandOutput}.
   */
  paginateListDataViews(
    args: ListDataViewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataViewsCommandOutput>;

  /**
   * @see {@link ListPermissionGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPermissionGroupsCommandOutput}.
   */
  paginateListPermissionGroups(
    args: ListPermissionGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPermissionGroupsCommandOutput>;

  /**
   * @see {@link ListUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsersCommandOutput}.
   */
  paginateListUsers(
    args: ListUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsersCommandOutput>;
}

/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace.</p>
 * @public
 */
export class FinspaceData extends FinspaceDataClient implements FinspaceData {}
createAggregatedClient(commands, FinspaceData, { paginators });
