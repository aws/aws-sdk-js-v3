// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateServiceRoleToAccountCommandInput,
  type AssociateServiceRoleToAccountCommandOutput,
  AssociateServiceRoleToAccountCommand,
} from "./commands/AssociateServiceRoleToAccountCommand";
import {
  type BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  type BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
  BatchAssociateClientDeviceWithCoreDeviceCommand,
} from "./commands/BatchAssociateClientDeviceWithCoreDeviceCommand";
import {
  type BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  type BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
  BatchDisassociateClientDeviceFromCoreDeviceCommand,
} from "./commands/BatchDisassociateClientDeviceFromCoreDeviceCommand";
import {
  type CancelDeploymentCommandInput,
  type CancelDeploymentCommandOutput,
  CancelDeploymentCommand,
} from "./commands/CancelDeploymentCommand";
import {
  type CreateComponentVersionCommandInput,
  type CreateComponentVersionCommandOutput,
  CreateComponentVersionCommand,
} from "./commands/CreateComponentVersionCommand";
import {
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentCommand,
} from "./commands/CreateDeploymentCommand";
import {
  type DeleteComponentCommandInput,
  type DeleteComponentCommandOutput,
  DeleteComponentCommand,
} from "./commands/DeleteComponentCommand";
import {
  type DeleteCoreDeviceCommandInput,
  type DeleteCoreDeviceCommandOutput,
  DeleteCoreDeviceCommand,
} from "./commands/DeleteCoreDeviceCommand";
import {
  type DeleteDeploymentCommandInput,
  type DeleteDeploymentCommandOutput,
  DeleteDeploymentCommand,
} from "./commands/DeleteDeploymentCommand";
import {
  type DescribeComponentCommandInput,
  type DescribeComponentCommandOutput,
  DescribeComponentCommand,
} from "./commands/DescribeComponentCommand";
import {
  type DisassociateServiceRoleFromAccountCommandInput,
  type DisassociateServiceRoleFromAccountCommandOutput,
  DisassociateServiceRoleFromAccountCommand,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import {
  type GetComponentCommandInput,
  type GetComponentCommandOutput,
  GetComponentCommand,
} from "./commands/GetComponentCommand";
import {
  type GetComponentVersionArtifactCommandInput,
  type GetComponentVersionArtifactCommandOutput,
  GetComponentVersionArtifactCommand,
} from "./commands/GetComponentVersionArtifactCommand";
import {
  type GetConnectivityInfoCommandInput,
  type GetConnectivityInfoCommandOutput,
  GetConnectivityInfoCommand,
} from "./commands/GetConnectivityInfoCommand";
import {
  type GetCoreDeviceCommandInput,
  type GetCoreDeviceCommandOutput,
  GetCoreDeviceCommand,
} from "./commands/GetCoreDeviceCommand";
import {
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentCommand,
} from "./commands/GetDeploymentCommand";
import {
  type GetServiceRoleForAccountCommandInput,
  type GetServiceRoleForAccountCommandOutput,
  GetServiceRoleForAccountCommand,
} from "./commands/GetServiceRoleForAccountCommand";
import {
  type ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  type ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
  ListClientDevicesAssociatedWithCoreDeviceCommand,
} from "./commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import {
  type ListComponentsCommandInput,
  type ListComponentsCommandOutput,
  ListComponentsCommand,
} from "./commands/ListComponentsCommand";
import {
  type ListComponentVersionsCommandInput,
  type ListComponentVersionsCommandOutput,
  ListComponentVersionsCommand,
} from "./commands/ListComponentVersionsCommand";
import {
  type ListCoreDevicesCommandInput,
  type ListCoreDevicesCommandOutput,
  ListCoreDevicesCommand,
} from "./commands/ListCoreDevicesCommand";
import {
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentsCommand,
} from "./commands/ListDeploymentsCommand";
import {
  type ListEffectiveDeploymentsCommandInput,
  type ListEffectiveDeploymentsCommandOutput,
  ListEffectiveDeploymentsCommand,
} from "./commands/ListEffectiveDeploymentsCommand";
import {
  type ListInstalledComponentsCommandInput,
  type ListInstalledComponentsCommandOutput,
  ListInstalledComponentsCommand,
} from "./commands/ListInstalledComponentsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ResolveComponentCandidatesCommandInput,
  type ResolveComponentCandidatesCommandOutput,
  ResolveComponentCandidatesCommand,
} from "./commands/ResolveComponentCandidatesCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateConnectivityInfoCommandInput,
  type UpdateConnectivityInfoCommandOutput,
  UpdateConnectivityInfoCommand,
} from "./commands/UpdateConnectivityInfoCommand";
import { GreengrassV2Client } from "./GreengrassV2Client";
import {
  paginateListClientDevicesAssociatedWithCoreDevice,
} from "./pagination/ListClientDevicesAssociatedWithCoreDevicePaginator";
import { paginateListComponents } from "./pagination/ListComponentsPaginator";
import { paginateListComponentVersions } from "./pagination/ListComponentVersionsPaginator";
import { paginateListCoreDevices } from "./pagination/ListCoreDevicesPaginator";
import { paginateListDeployments } from "./pagination/ListDeploymentsPaginator";
import { paginateListEffectiveDeployments } from "./pagination/ListEffectiveDeploymentsPaginator";
import { paginateListInstalledComponents } from "./pagination/ListInstalledComponentsPaginator";

const commands = {
  AssociateServiceRoleToAccountCommand,
  BatchAssociateClientDeviceWithCoreDeviceCommand,
  BatchDisassociateClientDeviceFromCoreDeviceCommand,
  CancelDeploymentCommand,
  CreateComponentVersionCommand,
  CreateDeploymentCommand,
  DeleteComponentCommand,
  DeleteCoreDeviceCommand,
  DeleteDeploymentCommand,
  DescribeComponentCommand,
  DisassociateServiceRoleFromAccountCommand,
  GetComponentCommand,
  GetComponentVersionArtifactCommand,
  GetConnectivityInfoCommand,
  GetCoreDeviceCommand,
  GetDeploymentCommand,
  GetServiceRoleForAccountCommand,
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListComponentsCommand,
  ListComponentVersionsCommand,
  ListCoreDevicesCommand,
  ListDeploymentsCommand,
  ListEffectiveDeploymentsCommand,
  ListInstalledComponentsCommand,
  ListTagsForResourceCommand,
  ResolveComponentCandidatesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectivityInfoCommand,
};
const paginators = {
  paginateListClientDevicesAssociatedWithCoreDevice,
  paginateListComponents,
  paginateListComponentVersions,
  paginateListCoreDevices,
  paginateListDeployments,
  paginateListEffectiveDeployments,
  paginateListInstalledComponents,
};

/**
 * @public
 */
export interface GreengrassV2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface GreengrassV2 {
  /**
   * @see {@link AssociateServiceRoleToAccountCommand}
   */
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<AssociateServiceRoleToAccountCommandOutput>;
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommand}
   */
  batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput>;
  batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    cb: (err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void
  ): void;
  batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommand}
   */
  batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput>;
  batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    cb: (err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void
  ): void;
  batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDeploymentCommand}
   */
  cancelDeployment(
    args: CancelDeploymentCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<CancelDeploymentCommandOutput>;
  cancelDeployment(
    args: CancelDeploymentCommandInput,
    cb: (err: any, data?: CancelDeploymentCommandOutput) => void
  ): void;
  cancelDeployment(
    args: CancelDeploymentCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: CancelDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComponentVersionCommand}
   */
  createComponentVersion(): Promise<CreateComponentVersionCommandOutput>;
  createComponentVersion(
    args: CreateComponentVersionCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<CreateComponentVersionCommandOutput>;
  createComponentVersion(
    args: CreateComponentVersionCommandInput,
    cb: (err: any, data?: CreateComponentVersionCommandOutput) => void
  ): void;
  createComponentVersion(
    args: CreateComponentVersionCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: CreateComponentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComponentCommand}
   */
  deleteComponent(
    args: DeleteComponentCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<DeleteComponentCommandOutput>;
  deleteComponent(
    args: DeleteComponentCommandInput,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  deleteComponent(
    args: DeleteComponentCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreDeviceCommand}
   */
  deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<DeleteCoreDeviceCommandOutput>;
  deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void
  ): void;
  deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComponentCommand}
   */
  describeComponent(
    args: DescribeComponentCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<DescribeComponentCommandOutput>;
  describeComponent(
    args: DescribeComponentCommandInput,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;
  describeComponent(
    args: DescribeComponentCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateServiceRoleFromAccountCommand}
   */
  disassociateServiceRoleFromAccount(): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentCommand}
   */
  getComponent(
    args: GetComponentCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<GetComponentCommandOutput>;
  getComponent(
    args: GetComponentCommandInput,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;
  getComponent(
    args: GetComponentCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentVersionArtifactCommand}
   */
  getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<GetComponentVersionArtifactCommandOutput>;
  getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void
  ): void;
  getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectivityInfoCommand}
   */
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<GetConnectivityInfoCommandOutput>;
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreDeviceCommand}
   */
  getCoreDevice(
    args: GetCoreDeviceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<GetCoreDeviceCommandOutput>;
  getCoreDevice(
    args: GetCoreDeviceCommandInput,
    cb: (err: any, data?: GetCoreDeviceCommandOutput) => void
  ): void;
  getCoreDevice(
    args: GetCoreDeviceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: GetCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceRoleForAccountCommand}
   */
  getServiceRoleForAccount(): Promise<GetServiceRoleForAccountCommandOutput>;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<GetServiceRoleForAccountCommandOutput>;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClientDevicesAssociatedWithCoreDeviceCommand}
   */
  listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput>;
  listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    cb: (err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void
  ): void;
  listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(): Promise<ListComponentsCommandOutput>;
  listComponents(
    args: ListComponentsCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentVersionsCommand}
   */
  listComponentVersions(
    args: ListComponentVersionsCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListComponentVersionsCommandOutput>;
  listComponentVersions(
    args: ListComponentVersionsCommandInput,
    cb: (err: any, data?: ListComponentVersionsCommandOutput) => void
  ): void;
  listComponentVersions(
    args: ListComponentVersionsCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListComponentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreDevicesCommand}
   */
  listCoreDevices(): Promise<ListCoreDevicesCommandOutput>;
  listCoreDevices(
    args: ListCoreDevicesCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListCoreDevicesCommandOutput>;
  listCoreDevices(
    args: ListCoreDevicesCommandInput,
    cb: (err: any, data?: ListCoreDevicesCommandOutput) => void
  ): void;
  listCoreDevices(
    args: ListCoreDevicesCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListCoreDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEffectiveDeploymentsCommand}
   */
  listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListEffectiveDeploymentsCommandOutput>;
  listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void
  ): void;
  listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstalledComponentsCommand}
   */
  listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListInstalledComponentsCommandOutput>;
  listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void
  ): void;
  listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResolveComponentCandidatesCommand}
   */
  resolveComponentCandidates(): Promise<ResolveComponentCandidatesCommandOutput>;
  resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<ResolveComponentCandidatesCommandOutput>;
  resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void
  ): void;
  resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectivityInfoCommand}
   */
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options?: GreengrassV2RequestOptions
  ): Promise<UpdateConnectivityInfoCommandOutput>;
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options: GreengrassV2RequestOptions,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClientDevicesAssociatedWithCoreDeviceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClientDevicesAssociatedWithCoreDeviceCommandOutput}.
   */
  paginateListClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClientDevicesAssociatedWithCoreDeviceCommandOutput>;

  /**
   * @see {@link ListComponentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComponentsCommandOutput}.
   */
  paginateListComponents(
    args?: ListComponentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComponentsCommandOutput>;

  /**
   * @see {@link ListComponentVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComponentVersionsCommandOutput}.
   */
  paginateListComponentVersions(
    args: ListComponentVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComponentVersionsCommandOutput>;

  /**
   * @see {@link ListCoreDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCoreDevicesCommandOutput}.
   */
  paginateListCoreDevices(
    args?: ListCoreDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCoreDevicesCommandOutput>;

  /**
   * @see {@link ListDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentsCommandOutput}.
   */
  paginateListDeployments(
    args?: ListDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentsCommandOutput>;

  /**
   * @see {@link ListEffectiveDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEffectiveDeploymentsCommandOutput}.
   */
  paginateListEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEffectiveDeploymentsCommandOutput>;

  /**
   * @see {@link ListInstalledComponentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstalledComponentsCommandOutput}.
   */
  paginateListInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstalledComponentsCommandOutput>;
}

/**
 * <p>IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities
 *       to edge devices. This enables devices to collect and analyze data closer to the source of
 *       information, react autonomously to local events, and communicate securely with each other on
 *       local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data
 *       to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and
 *       deploy applications to fleets of edge devices for local operation.</p>
 *          <p>IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console.
 *       Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components,
 *       manage deployments, and core devices.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is IoT Greengrass?</a> in the
 *         <i>IoT Greengrass V2 Developer Guide</i>.</p>
 * @public
 */
export class GreengrassV2 extends GreengrassV2Client implements GreengrassV2 {}
createAggregatedClient(commands, GreengrassV2, { paginators });
