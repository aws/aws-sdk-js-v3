// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CancelSolNetworkOperationCommandInput,
  type CancelSolNetworkOperationCommandOutput,
  CancelSolNetworkOperationCommand,
} from "./commands/CancelSolNetworkOperationCommand";
import {
  type CreateSolFunctionPackageCommandInput,
  type CreateSolFunctionPackageCommandOutput,
  CreateSolFunctionPackageCommand,
} from "./commands/CreateSolFunctionPackageCommand";
import {
  type CreateSolNetworkInstanceCommandInput,
  type CreateSolNetworkInstanceCommandOutput,
  CreateSolNetworkInstanceCommand,
} from "./commands/CreateSolNetworkInstanceCommand";
import {
  type CreateSolNetworkPackageCommandInput,
  type CreateSolNetworkPackageCommandOutput,
  CreateSolNetworkPackageCommand,
} from "./commands/CreateSolNetworkPackageCommand";
import {
  type DeleteSolFunctionPackageCommandInput,
  type DeleteSolFunctionPackageCommandOutput,
  DeleteSolFunctionPackageCommand,
} from "./commands/DeleteSolFunctionPackageCommand";
import {
  type DeleteSolNetworkInstanceCommandInput,
  type DeleteSolNetworkInstanceCommandOutput,
  DeleteSolNetworkInstanceCommand,
} from "./commands/DeleteSolNetworkInstanceCommand";
import {
  type DeleteSolNetworkPackageCommandInput,
  type DeleteSolNetworkPackageCommandOutput,
  DeleteSolNetworkPackageCommand,
} from "./commands/DeleteSolNetworkPackageCommand";
import {
  type GetSolFunctionInstanceCommandInput,
  type GetSolFunctionInstanceCommandOutput,
  GetSolFunctionInstanceCommand,
} from "./commands/GetSolFunctionInstanceCommand";
import {
  type GetSolFunctionPackageCommandInput,
  type GetSolFunctionPackageCommandOutput,
  GetSolFunctionPackageCommand,
} from "./commands/GetSolFunctionPackageCommand";
import {
  type GetSolFunctionPackageContentCommandInput,
  type GetSolFunctionPackageContentCommandOutput,
  GetSolFunctionPackageContentCommand,
} from "./commands/GetSolFunctionPackageContentCommand";
import {
  type GetSolFunctionPackageDescriptorCommandInput,
  type GetSolFunctionPackageDescriptorCommandOutput,
  GetSolFunctionPackageDescriptorCommand,
} from "./commands/GetSolFunctionPackageDescriptorCommand";
import {
  type GetSolNetworkInstanceCommandInput,
  type GetSolNetworkInstanceCommandOutput,
  GetSolNetworkInstanceCommand,
} from "./commands/GetSolNetworkInstanceCommand";
import {
  type GetSolNetworkOperationCommandInput,
  type GetSolNetworkOperationCommandOutput,
  GetSolNetworkOperationCommand,
} from "./commands/GetSolNetworkOperationCommand";
import {
  type GetSolNetworkPackageCommandInput,
  type GetSolNetworkPackageCommandOutput,
  GetSolNetworkPackageCommand,
} from "./commands/GetSolNetworkPackageCommand";
import {
  type GetSolNetworkPackageContentCommandInput,
  type GetSolNetworkPackageContentCommandOutput,
  GetSolNetworkPackageContentCommand,
} from "./commands/GetSolNetworkPackageContentCommand";
import {
  type GetSolNetworkPackageDescriptorCommandInput,
  type GetSolNetworkPackageDescriptorCommandOutput,
  GetSolNetworkPackageDescriptorCommand,
} from "./commands/GetSolNetworkPackageDescriptorCommand";
import {
  type InstantiateSolNetworkInstanceCommandInput,
  type InstantiateSolNetworkInstanceCommandOutput,
  InstantiateSolNetworkInstanceCommand,
} from "./commands/InstantiateSolNetworkInstanceCommand";
import {
  type ListSolFunctionInstancesCommandInput,
  type ListSolFunctionInstancesCommandOutput,
  ListSolFunctionInstancesCommand,
} from "./commands/ListSolFunctionInstancesCommand";
import {
  type ListSolFunctionPackagesCommandInput,
  type ListSolFunctionPackagesCommandOutput,
  ListSolFunctionPackagesCommand,
} from "./commands/ListSolFunctionPackagesCommand";
import {
  type ListSolNetworkInstancesCommandInput,
  type ListSolNetworkInstancesCommandOutput,
  ListSolNetworkInstancesCommand,
} from "./commands/ListSolNetworkInstancesCommand";
import {
  type ListSolNetworkOperationsCommandInput,
  type ListSolNetworkOperationsCommandOutput,
  ListSolNetworkOperationsCommand,
} from "./commands/ListSolNetworkOperationsCommand";
import {
  type ListSolNetworkPackagesCommandInput,
  type ListSolNetworkPackagesCommandOutput,
  ListSolNetworkPackagesCommand,
} from "./commands/ListSolNetworkPackagesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutSolFunctionPackageContentCommandInput,
  type PutSolFunctionPackageContentCommandOutput,
  PutSolFunctionPackageContentCommand,
} from "./commands/PutSolFunctionPackageContentCommand";
import {
  type PutSolNetworkPackageContentCommandInput,
  type PutSolNetworkPackageContentCommandOutput,
  PutSolNetworkPackageContentCommand,
} from "./commands/PutSolNetworkPackageContentCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TerminateSolNetworkInstanceCommandInput,
  type TerminateSolNetworkInstanceCommandOutput,
  TerminateSolNetworkInstanceCommand,
} from "./commands/TerminateSolNetworkInstanceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateSolFunctionPackageCommandInput,
  type UpdateSolFunctionPackageCommandOutput,
  UpdateSolFunctionPackageCommand,
} from "./commands/UpdateSolFunctionPackageCommand";
import {
  type UpdateSolNetworkInstanceCommandInput,
  type UpdateSolNetworkInstanceCommandOutput,
  UpdateSolNetworkInstanceCommand,
} from "./commands/UpdateSolNetworkInstanceCommand";
import {
  type UpdateSolNetworkPackageCommandInput,
  type UpdateSolNetworkPackageCommandOutput,
  UpdateSolNetworkPackageCommand,
} from "./commands/UpdateSolNetworkPackageCommand";
import {
  type ValidateSolFunctionPackageContentCommandInput,
  type ValidateSolFunctionPackageContentCommandOutput,
  ValidateSolFunctionPackageContentCommand,
} from "./commands/ValidateSolFunctionPackageContentCommand";
import {
  type ValidateSolNetworkPackageContentCommandInput,
  type ValidateSolNetworkPackageContentCommandOutput,
  ValidateSolNetworkPackageContentCommand,
} from "./commands/ValidateSolNetworkPackageContentCommand";
import { paginateListSolFunctionInstances } from "./pagination/ListSolFunctionInstancesPaginator";
import { paginateListSolFunctionPackages } from "./pagination/ListSolFunctionPackagesPaginator";
import { paginateListSolNetworkInstances } from "./pagination/ListSolNetworkInstancesPaginator";
import { paginateListSolNetworkOperations } from "./pagination/ListSolNetworkOperationsPaginator";
import { paginateListSolNetworkPackages } from "./pagination/ListSolNetworkPackagesPaginator";
import { TnbClient } from "./TnbClient";

const commands = {
  CancelSolNetworkOperationCommand,
  CreateSolFunctionPackageCommand,
  CreateSolNetworkInstanceCommand,
  CreateSolNetworkPackageCommand,
  DeleteSolFunctionPackageCommand,
  DeleteSolNetworkInstanceCommand,
  DeleteSolNetworkPackageCommand,
  GetSolFunctionInstanceCommand,
  GetSolFunctionPackageCommand,
  GetSolFunctionPackageContentCommand,
  GetSolFunctionPackageDescriptorCommand,
  GetSolNetworkInstanceCommand,
  GetSolNetworkOperationCommand,
  GetSolNetworkPackageCommand,
  GetSolNetworkPackageContentCommand,
  GetSolNetworkPackageDescriptorCommand,
  InstantiateSolNetworkInstanceCommand,
  ListSolFunctionInstancesCommand,
  ListSolFunctionPackagesCommand,
  ListSolNetworkInstancesCommand,
  ListSolNetworkOperationsCommand,
  ListSolNetworkPackagesCommand,
  ListTagsForResourceCommand,
  PutSolFunctionPackageContentCommand,
  PutSolNetworkPackageContentCommand,
  TagResourceCommand,
  TerminateSolNetworkInstanceCommand,
  UntagResourceCommand,
  UpdateSolFunctionPackageCommand,
  UpdateSolNetworkInstanceCommand,
  UpdateSolNetworkPackageCommand,
  ValidateSolFunctionPackageContentCommand,
  ValidateSolNetworkPackageContentCommand,
};
const paginators = {
  paginateListSolFunctionInstances,
  paginateListSolFunctionPackages,
  paginateListSolNetworkInstances,
  paginateListSolNetworkOperations,
  paginateListSolNetworkPackages,
};

export interface Tnb {
  /**
   * @see {@link CancelSolNetworkOperationCommand}
   */
  cancelSolNetworkOperation(
    args: CancelSolNetworkOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSolNetworkOperationCommandOutput>;
  cancelSolNetworkOperation(
    args: CancelSolNetworkOperationCommandInput,
    cb: (err: any, data?: CancelSolNetworkOperationCommandOutput) => void
  ): void;
  cancelSolNetworkOperation(
    args: CancelSolNetworkOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSolNetworkOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSolFunctionPackageCommand}
   */
  createSolFunctionPackage(): Promise<CreateSolFunctionPackageCommandOutput>;
  createSolFunctionPackage(
    args: CreateSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolFunctionPackageCommandOutput>;
  createSolFunctionPackage(
    args: CreateSolFunctionPackageCommandInput,
    cb: (err: any, data?: CreateSolFunctionPackageCommandOutput) => void
  ): void;
  createSolFunctionPackage(
    args: CreateSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolFunctionPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSolNetworkInstanceCommand}
   */
  createSolNetworkInstance(
    args: CreateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolNetworkInstanceCommandOutput>;
  createSolNetworkInstance(
    args: CreateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: CreateSolNetworkInstanceCommandOutput) => void
  ): void;
  createSolNetworkInstance(
    args: CreateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolNetworkInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSolNetworkPackageCommand}
   */
  createSolNetworkPackage(): Promise<CreateSolNetworkPackageCommandOutput>;
  createSolNetworkPackage(
    args: CreateSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolNetworkPackageCommandOutput>;
  createSolNetworkPackage(
    args: CreateSolNetworkPackageCommandInput,
    cb: (err: any, data?: CreateSolNetworkPackageCommandOutput) => void
  ): void;
  createSolNetworkPackage(
    args: CreateSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolNetworkPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSolFunctionPackageCommand}
   */
  deleteSolFunctionPackage(
    args: DeleteSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolFunctionPackageCommandOutput>;
  deleteSolFunctionPackage(
    args: DeleteSolFunctionPackageCommandInput,
    cb: (err: any, data?: DeleteSolFunctionPackageCommandOutput) => void
  ): void;
  deleteSolFunctionPackage(
    args: DeleteSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolFunctionPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSolNetworkInstanceCommand}
   */
  deleteSolNetworkInstance(
    args: DeleteSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolNetworkInstanceCommandOutput>;
  deleteSolNetworkInstance(
    args: DeleteSolNetworkInstanceCommandInput,
    cb: (err: any, data?: DeleteSolNetworkInstanceCommandOutput) => void
  ): void;
  deleteSolNetworkInstance(
    args: DeleteSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolNetworkInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSolNetworkPackageCommand}
   */
  deleteSolNetworkPackage(
    args: DeleteSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolNetworkPackageCommandOutput>;
  deleteSolNetworkPackage(
    args: DeleteSolNetworkPackageCommandInput,
    cb: (err: any, data?: DeleteSolNetworkPackageCommandOutput) => void
  ): void;
  deleteSolNetworkPackage(
    args: DeleteSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolNetworkPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolFunctionInstanceCommand}
   */
  getSolFunctionInstance(
    args: GetSolFunctionInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionInstanceCommandOutput>;
  getSolFunctionInstance(
    args: GetSolFunctionInstanceCommandInput,
    cb: (err: any, data?: GetSolFunctionInstanceCommandOutput) => void
  ): void;
  getSolFunctionInstance(
    args: GetSolFunctionInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolFunctionPackageCommand}
   */
  getSolFunctionPackage(
    args: GetSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionPackageCommandOutput>;
  getSolFunctionPackage(
    args: GetSolFunctionPackageCommandInput,
    cb: (err: any, data?: GetSolFunctionPackageCommandOutput) => void
  ): void;
  getSolFunctionPackage(
    args: GetSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolFunctionPackageContentCommand}
   */
  getSolFunctionPackageContent(
    args: GetSolFunctionPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionPackageContentCommandOutput>;
  getSolFunctionPackageContent(
    args: GetSolFunctionPackageContentCommandInput,
    cb: (err: any, data?: GetSolFunctionPackageContentCommandOutput) => void
  ): void;
  getSolFunctionPackageContent(
    args: GetSolFunctionPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionPackageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolFunctionPackageDescriptorCommand}
   */
  getSolFunctionPackageDescriptor(
    args: GetSolFunctionPackageDescriptorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionPackageDescriptorCommandOutput>;
  getSolFunctionPackageDescriptor(
    args: GetSolFunctionPackageDescriptorCommandInput,
    cb: (err: any, data?: GetSolFunctionPackageDescriptorCommandOutput) => void
  ): void;
  getSolFunctionPackageDescriptor(
    args: GetSolFunctionPackageDescriptorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionPackageDescriptorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolNetworkInstanceCommand}
   */
  getSolNetworkInstance(
    args: GetSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkInstanceCommandOutput>;
  getSolNetworkInstance(
    args: GetSolNetworkInstanceCommandInput,
    cb: (err: any, data?: GetSolNetworkInstanceCommandOutput) => void
  ): void;
  getSolNetworkInstance(
    args: GetSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolNetworkOperationCommand}
   */
  getSolNetworkOperation(
    args: GetSolNetworkOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkOperationCommandOutput>;
  getSolNetworkOperation(
    args: GetSolNetworkOperationCommandInput,
    cb: (err: any, data?: GetSolNetworkOperationCommandOutput) => void
  ): void;
  getSolNetworkOperation(
    args: GetSolNetworkOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolNetworkPackageCommand}
   */
  getSolNetworkPackage(
    args: GetSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkPackageCommandOutput>;
  getSolNetworkPackage(
    args: GetSolNetworkPackageCommandInput,
    cb: (err: any, data?: GetSolNetworkPackageCommandOutput) => void
  ): void;
  getSolNetworkPackage(
    args: GetSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolNetworkPackageContentCommand}
   */
  getSolNetworkPackageContent(
    args: GetSolNetworkPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkPackageContentCommandOutput>;
  getSolNetworkPackageContent(
    args: GetSolNetworkPackageContentCommandInput,
    cb: (err: any, data?: GetSolNetworkPackageContentCommandOutput) => void
  ): void;
  getSolNetworkPackageContent(
    args: GetSolNetworkPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkPackageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolNetworkPackageDescriptorCommand}
   */
  getSolNetworkPackageDescriptor(
    args: GetSolNetworkPackageDescriptorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkPackageDescriptorCommandOutput>;
  getSolNetworkPackageDescriptor(
    args: GetSolNetworkPackageDescriptorCommandInput,
    cb: (err: any, data?: GetSolNetworkPackageDescriptorCommandOutput) => void
  ): void;
  getSolNetworkPackageDescriptor(
    args: GetSolNetworkPackageDescriptorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkPackageDescriptorCommandOutput) => void
  ): void;

  /**
   * @see {@link InstantiateSolNetworkInstanceCommand}
   */
  instantiateSolNetworkInstance(
    args: InstantiateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InstantiateSolNetworkInstanceCommandOutput>;
  instantiateSolNetworkInstance(
    args: InstantiateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: InstantiateSolNetworkInstanceCommandOutput) => void
  ): void;
  instantiateSolNetworkInstance(
    args: InstantiateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InstantiateSolNetworkInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolFunctionInstancesCommand}
   */
  listSolFunctionInstances(): Promise<ListSolFunctionInstancesCommandOutput>;
  listSolFunctionInstances(
    args: ListSolFunctionInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolFunctionInstancesCommandOutput>;
  listSolFunctionInstances(
    args: ListSolFunctionInstancesCommandInput,
    cb: (err: any, data?: ListSolFunctionInstancesCommandOutput) => void
  ): void;
  listSolFunctionInstances(
    args: ListSolFunctionInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolFunctionInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolFunctionPackagesCommand}
   */
  listSolFunctionPackages(): Promise<ListSolFunctionPackagesCommandOutput>;
  listSolFunctionPackages(
    args: ListSolFunctionPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolFunctionPackagesCommandOutput>;
  listSolFunctionPackages(
    args: ListSolFunctionPackagesCommandInput,
    cb: (err: any, data?: ListSolFunctionPackagesCommandOutput) => void
  ): void;
  listSolFunctionPackages(
    args: ListSolFunctionPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolFunctionPackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolNetworkInstancesCommand}
   */
  listSolNetworkInstances(): Promise<ListSolNetworkInstancesCommandOutput>;
  listSolNetworkInstances(
    args: ListSolNetworkInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolNetworkInstancesCommandOutput>;
  listSolNetworkInstances(
    args: ListSolNetworkInstancesCommandInput,
    cb: (err: any, data?: ListSolNetworkInstancesCommandOutput) => void
  ): void;
  listSolNetworkInstances(
    args: ListSolNetworkInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolNetworkInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolNetworkOperationsCommand}
   */
  listSolNetworkOperations(): Promise<ListSolNetworkOperationsCommandOutput>;
  listSolNetworkOperations(
    args: ListSolNetworkOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolNetworkOperationsCommandOutput>;
  listSolNetworkOperations(
    args: ListSolNetworkOperationsCommandInput,
    cb: (err: any, data?: ListSolNetworkOperationsCommandOutput) => void
  ): void;
  listSolNetworkOperations(
    args: ListSolNetworkOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolNetworkOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolNetworkPackagesCommand}
   */
  listSolNetworkPackages(): Promise<ListSolNetworkPackagesCommandOutput>;
  listSolNetworkPackages(
    args: ListSolNetworkPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolNetworkPackagesCommandOutput>;
  listSolNetworkPackages(
    args: ListSolNetworkPackagesCommandInput,
    cb: (err: any, data?: ListSolNetworkPackagesCommandOutput) => void
  ): void;
  listSolNetworkPackages(
    args: ListSolNetworkPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolNetworkPackagesCommandOutput) => void
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
   * @see {@link PutSolFunctionPackageContentCommand}
   */
  putSolFunctionPackageContent(
    args: PutSolFunctionPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSolFunctionPackageContentCommandOutput>;
  putSolFunctionPackageContent(
    args: PutSolFunctionPackageContentCommandInput,
    cb: (err: any, data?: PutSolFunctionPackageContentCommandOutput) => void
  ): void;
  putSolFunctionPackageContent(
    args: PutSolFunctionPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSolFunctionPackageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSolNetworkPackageContentCommand}
   */
  putSolNetworkPackageContent(
    args: PutSolNetworkPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSolNetworkPackageContentCommandOutput>;
  putSolNetworkPackageContent(
    args: PutSolNetworkPackageContentCommandInput,
    cb: (err: any, data?: PutSolNetworkPackageContentCommandOutput) => void
  ): void;
  putSolNetworkPackageContent(
    args: PutSolNetworkPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSolNetworkPackageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateSolNetworkInstanceCommand}
   */
  terminateSolNetworkInstance(
    args: TerminateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateSolNetworkInstanceCommandOutput>;
  terminateSolNetworkInstance(
    args: TerminateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: TerminateSolNetworkInstanceCommandOutput) => void
  ): void;
  terminateSolNetworkInstance(
    args: TerminateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateSolNetworkInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSolFunctionPackageCommand}
   */
  updateSolFunctionPackage(
    args: UpdateSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSolFunctionPackageCommandOutput>;
  updateSolFunctionPackage(
    args: UpdateSolFunctionPackageCommandInput,
    cb: (err: any, data?: UpdateSolFunctionPackageCommandOutput) => void
  ): void;
  updateSolFunctionPackage(
    args: UpdateSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSolFunctionPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSolNetworkInstanceCommand}
   */
  updateSolNetworkInstance(
    args: UpdateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSolNetworkInstanceCommandOutput>;
  updateSolNetworkInstance(
    args: UpdateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: UpdateSolNetworkInstanceCommandOutput) => void
  ): void;
  updateSolNetworkInstance(
    args: UpdateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSolNetworkInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSolNetworkPackageCommand}
   */
  updateSolNetworkPackage(
    args: UpdateSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSolNetworkPackageCommandOutput>;
  updateSolNetworkPackage(
    args: UpdateSolNetworkPackageCommandInput,
    cb: (err: any, data?: UpdateSolNetworkPackageCommandOutput) => void
  ): void;
  updateSolNetworkPackage(
    args: UpdateSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSolNetworkPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateSolFunctionPackageContentCommand}
   */
  validateSolFunctionPackageContent(
    args: ValidateSolFunctionPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateSolFunctionPackageContentCommandOutput>;
  validateSolFunctionPackageContent(
    args: ValidateSolFunctionPackageContentCommandInput,
    cb: (err: any, data?: ValidateSolFunctionPackageContentCommandOutput) => void
  ): void;
  validateSolFunctionPackageContent(
    args: ValidateSolFunctionPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateSolFunctionPackageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateSolNetworkPackageContentCommand}
   */
  validateSolNetworkPackageContent(
    args: ValidateSolNetworkPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateSolNetworkPackageContentCommandOutput>;
  validateSolNetworkPackageContent(
    args: ValidateSolNetworkPackageContentCommandInput,
    cb: (err: any, data?: ValidateSolNetworkPackageContentCommandOutput) => void
  ): void;
  validateSolNetworkPackageContent(
    args: ValidateSolNetworkPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateSolNetworkPackageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolFunctionInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolFunctionInstancesCommandOutput}.
   */
  paginateListSolFunctionInstances(
    args?: ListSolFunctionInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolFunctionInstancesCommandOutput>;

  /**
   * @see {@link ListSolFunctionPackagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolFunctionPackagesCommandOutput}.
   */
  paginateListSolFunctionPackages(
    args?: ListSolFunctionPackagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolFunctionPackagesCommandOutput>;

  /**
   * @see {@link ListSolNetworkInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolNetworkInstancesCommandOutput}.
   */
  paginateListSolNetworkInstances(
    args?: ListSolNetworkInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolNetworkInstancesCommandOutput>;

  /**
   * @see {@link ListSolNetworkOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolNetworkOperationsCommandOutput}.
   */
  paginateListSolNetworkOperations(
    args?: ListSolNetworkOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolNetworkOperationsCommandOutput>;

  /**
   * @see {@link ListSolNetworkPackagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolNetworkPackagesCommandOutput}.
   */
  paginateListSolNetworkPackages(
    args?: ListSolNetworkPackagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolNetworkPackagesCommandOutput>;
}

/**
 * <p>
 *          Amazon Web Services Telco Network Builder (TNB) is a network automation service that helps
 *          you deploy and manage telecom networks. AWS TNB helps you with the lifecycle management of
 *          your telecommunication network functions throughout planning, deployment, and
 *          post-deployment activities.</p>
 * @public
 */
export class Tnb extends TnbClient implements Tnb {}
createAggregatedClient(commands, Tnb, { paginators });
