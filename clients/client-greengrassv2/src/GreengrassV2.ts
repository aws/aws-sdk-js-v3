// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateServiceRoleToAccountCommand,
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "./commands/AssociateServiceRoleToAccountCommand";
import {
  BatchAssociateClientDeviceWithCoreDeviceCommand,
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
} from "./commands/BatchAssociateClientDeviceWithCoreDeviceCommand";
import {
  BatchDisassociateClientDeviceFromCoreDeviceCommand,
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
} from "./commands/BatchDisassociateClientDeviceFromCoreDeviceCommand";
import {
  CancelDeploymentCommand,
  CancelDeploymentCommandInput,
  CancelDeploymentCommandOutput,
} from "./commands/CancelDeploymentCommand";
import {
  CreateComponentVersionCommand,
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
} from "./commands/CreateComponentVersionCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import {
  DeleteCoreDeviceCommand,
  DeleteCoreDeviceCommandInput,
  DeleteCoreDeviceCommandOutput,
} from "./commands/DeleteCoreDeviceCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  DescribeComponentCommand,
  DescribeComponentCommandInput,
  DescribeComponentCommandOutput,
} from "./commands/DescribeComponentCommand";
import {
  DisassociateServiceRoleFromAccountCommand,
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import {
  GetComponentVersionArtifactCommand,
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
} from "./commands/GetComponentVersionArtifactCommand";
import {
  GetConnectivityInfoCommand,
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "./commands/GetConnectivityInfoCommand";
import {
  GetCoreDeviceCommand,
  GetCoreDeviceCommandInput,
  GetCoreDeviceCommandOutput,
} from "./commands/GetCoreDeviceCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetServiceRoleForAccountCommand,
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "./commands/GetServiceRoleForAccountCommand";
import {
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "./commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListComponentVersionsCommand,
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "./commands/ListComponentVersionsCommand";
import {
  ListCoreDevicesCommand,
  ListCoreDevicesCommandInput,
  ListCoreDevicesCommandOutput,
} from "./commands/ListCoreDevicesCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListEffectiveDeploymentsCommand,
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "./commands/ListEffectiveDeploymentsCommand";
import {
  ListInstalledComponentsCommand,
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "./commands/ListInstalledComponentsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResolveComponentCandidatesCommand,
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
} from "./commands/ResolveComponentCandidatesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommand,
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "./commands/UpdateConnectivityInfoCommand";
import { GreengrassV2Client, GreengrassV2ClientConfig } from "./GreengrassV2Client";

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

export interface GreengrassV2 {
  /**
   * @see {@link AssociateServiceRoleToAccountCommand}
   */
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceRoleToAccountCommandOutput>;
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;
  associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommand}
   */
  batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput>;
  batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    cb: (err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void
  ): void;
  batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommand}
   */
  batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput>;
  batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    cb: (err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void
  ): void;
  batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDeploymentCommand}
   */
  cancelDeployment(
    args: CancelDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDeploymentCommandOutput>;
  cancelDeployment(
    args: CancelDeploymentCommandInput,
    cb: (err: any, data?: CancelDeploymentCommandOutput) => void
  ): void;
  cancelDeployment(
    args: CancelDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComponentVersionCommand}
   */
  createComponentVersion(
    args: CreateComponentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentVersionCommandOutput>;
  createComponentVersion(
    args: CreateComponentVersionCommandInput,
    cb: (err: any, data?: CreateComponentVersionCommandOutput) => void
  ): void;
  createComponentVersion(
    args: CreateComponentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComponentCommand}
   */
  deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
  deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreDeviceCommand}
   */
  deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreDeviceCommandOutput>;
  deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void
  ): void;
  deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComponentCommand}
   */
  describeComponent(
    args: DescribeComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentCommandOutput>;
  describeComponent(
    args: DescribeComponentCommandInput,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;
  describeComponent(
    args: DescribeComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateServiceRoleFromAccountCommand}
   */
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;
  disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentCommand}
   */
  getComponent(args: GetComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentCommandOutput>;
  getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentVersionArtifactCommand}
   */
  getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentVersionArtifactCommandOutput>;
  getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void
  ): void;
  getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectivityInfoCommand}
   */
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectivityInfoCommandOutput>;
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;
  getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreDeviceCommand}
   */
  getCoreDevice(args: GetCoreDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetCoreDeviceCommandOutput>;
  getCoreDevice(args: GetCoreDeviceCommandInput, cb: (err: any, data?: GetCoreDeviceCommandOutput) => void): void;
  getCoreDevice(
    args: GetCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
  getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceRoleForAccountCommand}
   */
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceRoleForAccountCommandOutput>;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;
  getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClientDevicesAssociatedWithCoreDeviceCommand}
   */
  listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput>;
  listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    cb: (err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void
  ): void;
  listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentVersionsCommand}
   */
  listComponentVersions(
    args: ListComponentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentVersionsCommandOutput>;
  listComponentVersions(
    args: ListComponentVersionsCommandInput,
    cb: (err: any, data?: ListComponentVersionsCommandOutput) => void
  ): void;
  listComponentVersions(
    args: ListComponentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreDevicesCommand}
   */
  listCoreDevices(
    args: ListCoreDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreDevicesCommandOutput>;
  listCoreDevices(args: ListCoreDevicesCommandInput, cb: (err: any, data?: ListCoreDevicesCommandOutput) => void): void;
  listCoreDevices(
    args: ListCoreDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(args: ListDeploymentsCommandInput, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEffectiveDeploymentsCommand}
   */
  listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEffectiveDeploymentsCommandOutput>;
  listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void
  ): void;
  listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstalledComponentsCommand}
   */
  listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstalledComponentsCommandOutput>;
  listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void
  ): void;
  listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void
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
   * @see {@link ResolveComponentCandidatesCommand}
   */
  resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResolveComponentCandidatesCommandOutput>;
  resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void
  ): void;
  resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void
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
   * @see {@link UpdateConnectivityInfoCommand}
   */
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectivityInfoCommandOutput>;
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
  updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class GreengrassV2 extends GreengrassV2Client implements GreengrassV2 {}
createAggregatedClient(commands, GreengrassV2);
