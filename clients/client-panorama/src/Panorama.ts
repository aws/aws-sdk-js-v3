// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateApplicationInstanceCommand,
  CreateApplicationInstanceCommandInput,
  CreateApplicationInstanceCommandOutput,
} from "./commands/CreateApplicationInstanceCommand";
import {
  CreateJobForDevicesCommand,
  CreateJobForDevicesCommandInput,
  CreateJobForDevicesCommandOutput,
} from "./commands/CreateJobForDevicesCommand";
import {
  CreateNodeFromTemplateJobCommand,
  CreateNodeFromTemplateJobCommandInput,
  CreateNodeFromTemplateJobCommandOutput,
} from "./commands/CreateNodeFromTemplateJobCommand";
import {
  CreatePackageCommand,
  CreatePackageCommandInput,
  CreatePackageCommandOutput,
} from "./commands/CreatePackageCommand";
import {
  CreatePackageImportJobCommand,
  CreatePackageImportJobCommandInput,
  CreatePackageImportJobCommandOutput,
} from "./commands/CreatePackageImportJobCommand";
import {
  DeleteDeviceCommand,
  DeleteDeviceCommandInput,
  DeleteDeviceCommandOutput,
} from "./commands/DeleteDeviceCommand";
import {
  DeletePackageCommand,
  DeletePackageCommandInput,
  DeletePackageCommandOutput,
} from "./commands/DeletePackageCommand";
import {
  DeregisterPackageVersionCommand,
  DeregisterPackageVersionCommandInput,
  DeregisterPackageVersionCommandOutput,
} from "./commands/DeregisterPackageVersionCommand";
import {
  DescribeApplicationInstanceCommand,
  DescribeApplicationInstanceCommandInput,
  DescribeApplicationInstanceCommandOutput,
} from "./commands/DescribeApplicationInstanceCommand";
import {
  DescribeApplicationInstanceDetailsCommand,
  DescribeApplicationInstanceDetailsCommandInput,
  DescribeApplicationInstanceDetailsCommandOutput,
} from "./commands/DescribeApplicationInstanceDetailsCommand";
import {
  DescribeDeviceCommand,
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
} from "./commands/DescribeDeviceCommand";
import {
  DescribeDeviceJobCommand,
  DescribeDeviceJobCommandInput,
  DescribeDeviceJobCommandOutput,
} from "./commands/DescribeDeviceJobCommand";
import {
  DescribeNodeCommand,
  DescribeNodeCommandInput,
  DescribeNodeCommandOutput,
} from "./commands/DescribeNodeCommand";
import {
  DescribeNodeFromTemplateJobCommand,
  DescribeNodeFromTemplateJobCommandInput,
  DescribeNodeFromTemplateJobCommandOutput,
} from "./commands/DescribeNodeFromTemplateJobCommand";
import {
  DescribePackageCommand,
  DescribePackageCommandInput,
  DescribePackageCommandOutput,
} from "./commands/DescribePackageCommand";
import {
  DescribePackageImportJobCommand,
  DescribePackageImportJobCommandInput,
  DescribePackageImportJobCommandOutput,
} from "./commands/DescribePackageImportJobCommand";
import {
  DescribePackageVersionCommand,
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "./commands/DescribePackageVersionCommand";
import {
  ListApplicationInstanceDependenciesCommand,
  ListApplicationInstanceDependenciesCommandInput,
  ListApplicationInstanceDependenciesCommandOutput,
} from "./commands/ListApplicationInstanceDependenciesCommand";
import {
  ListApplicationInstanceNodeInstancesCommand,
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput,
} from "./commands/ListApplicationInstanceNodeInstancesCommand";
import {
  ListApplicationInstancesCommand,
  ListApplicationInstancesCommandInput,
  ListApplicationInstancesCommandOutput,
} from "./commands/ListApplicationInstancesCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import {
  ListDevicesJobsCommand,
  ListDevicesJobsCommandInput,
  ListDevicesJobsCommandOutput,
} from "./commands/ListDevicesJobsCommand";
import {
  ListNodeFromTemplateJobsCommand,
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput,
} from "./commands/ListNodeFromTemplateJobsCommand";
import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import {
  ListPackageImportJobsCommand,
  ListPackageImportJobsCommandInput,
  ListPackageImportJobsCommandOutput,
} from "./commands/ListPackageImportJobsCommand";
import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "./commands/ListPackagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ProvisionDeviceCommand,
  ProvisionDeviceCommandInput,
  ProvisionDeviceCommandOutput,
} from "./commands/ProvisionDeviceCommand";
import {
  RegisterPackageVersionCommand,
  RegisterPackageVersionCommandInput,
  RegisterPackageVersionCommandOutput,
} from "./commands/RegisterPackageVersionCommand";
import {
  RemoveApplicationInstanceCommand,
  RemoveApplicationInstanceCommandInput,
  RemoveApplicationInstanceCommandOutput,
} from "./commands/RemoveApplicationInstanceCommand";
import {
  SignalApplicationInstanceNodeInstancesCommand,
  SignalApplicationInstanceNodeInstancesCommandInput,
  SignalApplicationInstanceNodeInstancesCommandOutput,
} from "./commands/SignalApplicationInstanceNodeInstancesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDeviceMetadataCommand,
  UpdateDeviceMetadataCommandInput,
  UpdateDeviceMetadataCommandOutput,
} from "./commands/UpdateDeviceMetadataCommand";
import { PanoramaClient, PanoramaClientConfig } from "./PanoramaClient";

const commands = {
  CreateApplicationInstanceCommand,
  CreateJobForDevicesCommand,
  CreateNodeFromTemplateJobCommand,
  CreatePackageCommand,
  CreatePackageImportJobCommand,
  DeleteDeviceCommand,
  DeletePackageCommand,
  DeregisterPackageVersionCommand,
  DescribeApplicationInstanceCommand,
  DescribeApplicationInstanceDetailsCommand,
  DescribeDeviceCommand,
  DescribeDeviceJobCommand,
  DescribeNodeCommand,
  DescribeNodeFromTemplateJobCommand,
  DescribePackageCommand,
  DescribePackageImportJobCommand,
  DescribePackageVersionCommand,
  ListApplicationInstanceDependenciesCommand,
  ListApplicationInstanceNodeInstancesCommand,
  ListApplicationInstancesCommand,
  ListDevicesCommand,
  ListDevicesJobsCommand,
  ListNodeFromTemplateJobsCommand,
  ListNodesCommand,
  ListPackageImportJobsCommand,
  ListPackagesCommand,
  ListTagsForResourceCommand,
  ProvisionDeviceCommand,
  RegisterPackageVersionCommand,
  RemoveApplicationInstanceCommand,
  SignalApplicationInstanceNodeInstancesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDeviceMetadataCommand,
};

export interface Panorama {
  /**
   * @see {@link CreateApplicationInstanceCommand}
   */
  createApplicationInstance(
    args: CreateApplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationInstanceCommandOutput>;
  createApplicationInstance(
    args: CreateApplicationInstanceCommandInput,
    cb: (err: any, data?: CreateApplicationInstanceCommandOutput) => void
  ): void;
  createApplicationInstance(
    args: CreateApplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobForDevicesCommand}
   */
  createJobForDevices(
    args: CreateJobForDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobForDevicesCommandOutput>;
  createJobForDevices(
    args: CreateJobForDevicesCommandInput,
    cb: (err: any, data?: CreateJobForDevicesCommandOutput) => void
  ): void;
  createJobForDevices(
    args: CreateJobForDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobForDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNodeFromTemplateJobCommand}
   */
  createNodeFromTemplateJob(
    args: CreateNodeFromTemplateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNodeFromTemplateJobCommandOutput>;
  createNodeFromTemplateJob(
    args: CreateNodeFromTemplateJobCommandInput,
    cb: (err: any, data?: CreateNodeFromTemplateJobCommandOutput) => void
  ): void;
  createNodeFromTemplateJob(
    args: CreateNodeFromTemplateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodeFromTemplateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePackageCommand}
   */
  createPackage(args: CreatePackageCommandInput, options?: __HttpHandlerOptions): Promise<CreatePackageCommandOutput>;
  createPackage(args: CreatePackageCommandInput, cb: (err: any, data?: CreatePackageCommandOutput) => void): void;
  createPackage(
    args: CreatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePackageImportJobCommand}
   */
  createPackageImportJob(
    args: CreatePackageImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackageImportJobCommandOutput>;
  createPackageImportJob(
    args: CreatePackageImportJobCommandInput,
    cb: (err: any, data?: CreatePackageImportJobCommandOutput) => void
  ): void;
  createPackageImportJob(
    args: CreatePackageImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackageImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceCommand}
   */
  deleteDevice(args: DeleteDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceCommandOutput>;
  deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
  deleteDevice(
    args: DeleteDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(args: DeletePackageCommandInput, options?: __HttpHandlerOptions): Promise<DeletePackageCommandOutput>;
  deletePackage(args: DeletePackageCommandInput, cb: (err: any, data?: DeletePackageCommandOutput) => void): void;
  deletePackage(
    args: DeletePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterPackageVersionCommand}
   */
  deregisterPackageVersion(
    args: DeregisterPackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterPackageVersionCommandOutput>;
  deregisterPackageVersion(
    args: DeregisterPackageVersionCommandInput,
    cb: (err: any, data?: DeregisterPackageVersionCommandOutput) => void
  ): void;
  deregisterPackageVersion(
    args: DeregisterPackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterPackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationInstanceCommand}
   */
  describeApplicationInstance(
    args: DescribeApplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationInstanceCommandOutput>;
  describeApplicationInstance(
    args: DescribeApplicationInstanceCommandInput,
    cb: (err: any, data?: DescribeApplicationInstanceCommandOutput) => void
  ): void;
  describeApplicationInstance(
    args: DescribeApplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationInstanceDetailsCommand}
   */
  describeApplicationInstanceDetails(
    args: DescribeApplicationInstanceDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationInstanceDetailsCommandOutput>;
  describeApplicationInstanceDetails(
    args: DescribeApplicationInstanceDetailsCommandInput,
    cb: (err: any, data?: DescribeApplicationInstanceDetailsCommandOutput) => void
  ): void;
  describeApplicationInstanceDetails(
    args: DescribeApplicationInstanceDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationInstanceDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceCommand}
   */
  describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
  describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceJobCommand}
   */
  describeDeviceJob(
    args: DescribeDeviceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceJobCommandOutput>;
  describeDeviceJob(
    args: DescribeDeviceJobCommandInput,
    cb: (err: any, data?: DescribeDeviceJobCommandOutput) => void
  ): void;
  describeDeviceJob(
    args: DescribeDeviceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodeCommand}
   */
  describeNode(args: DescribeNodeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNodeCommandOutput>;
  describeNode(args: DescribeNodeCommandInput, cb: (err: any, data?: DescribeNodeCommandOutput) => void): void;
  describeNode(
    args: DescribeNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodeFromTemplateJobCommand}
   */
  describeNodeFromTemplateJob(
    args: DescribeNodeFromTemplateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodeFromTemplateJobCommandOutput>;
  describeNodeFromTemplateJob(
    args: DescribeNodeFromTemplateJobCommandInput,
    cb: (err: any, data?: DescribeNodeFromTemplateJobCommandOutput) => void
  ): void;
  describeNodeFromTemplateJob(
    args: DescribeNodeFromTemplateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeFromTemplateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackageCommand}
   */
  describePackage(
    args: DescribePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageCommandOutput>;
  describePackage(args: DescribePackageCommandInput, cb: (err: any, data?: DescribePackageCommandOutput) => void): void;
  describePackage(
    args: DescribePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackageImportJobCommand}
   */
  describePackageImportJob(
    args: DescribePackageImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageImportJobCommandOutput>;
  describePackageImportJob(
    args: DescribePackageImportJobCommandInput,
    cb: (err: any, data?: DescribePackageImportJobCommandOutput) => void
  ): void;
  describePackageImportJob(
    args: DescribePackageImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackageVersionCommand}
   */
  describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageVersionCommandOutput>;
  describePackageVersion(
    args: DescribePackageVersionCommandInput,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;
  describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationInstanceDependenciesCommand}
   */
  listApplicationInstanceDependencies(
    args: ListApplicationInstanceDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationInstanceDependenciesCommandOutput>;
  listApplicationInstanceDependencies(
    args: ListApplicationInstanceDependenciesCommandInput,
    cb: (err: any, data?: ListApplicationInstanceDependenciesCommandOutput) => void
  ): void;
  listApplicationInstanceDependencies(
    args: ListApplicationInstanceDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationInstanceDependenciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationInstanceNodeInstancesCommand}
   */
  listApplicationInstanceNodeInstances(
    args: ListApplicationInstanceNodeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationInstanceNodeInstancesCommandOutput>;
  listApplicationInstanceNodeInstances(
    args: ListApplicationInstanceNodeInstancesCommandInput,
    cb: (err: any, data?: ListApplicationInstanceNodeInstancesCommandOutput) => void
  ): void;
  listApplicationInstanceNodeInstances(
    args: ListApplicationInstanceNodeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationInstanceNodeInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationInstancesCommand}
   */
  listApplicationInstances(
    args: ListApplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationInstancesCommandOutput>;
  listApplicationInstances(
    args: ListApplicationInstancesCommandInput,
    cb: (err: any, data?: ListApplicationInstancesCommandOutput) => void
  ): void;
  listApplicationInstances(
    args: ListApplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesJobsCommand}
   */
  listDevicesJobs(
    args: ListDevicesJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicesJobsCommandOutput>;
  listDevicesJobs(args: ListDevicesJobsCommandInput, cb: (err: any, data?: ListDevicesJobsCommandOutput) => void): void;
  listDevicesJobs(
    args: ListDevicesJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodeFromTemplateJobsCommand}
   */
  listNodeFromTemplateJobs(
    args: ListNodeFromTemplateJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodeFromTemplateJobsCommandOutput>;
  listNodeFromTemplateJobs(
    args: ListNodeFromTemplateJobsCommandInput,
    cb: (err: any, data?: ListNodeFromTemplateJobsCommandOutput) => void
  ): void;
  listNodeFromTemplateJobs(
    args: ListNodeFromTemplateJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodeFromTemplateJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
  listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
  listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackageImportJobsCommand}
   */
  listPackageImportJobs(
    args: ListPackageImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageImportJobsCommandOutput>;
  listPackageImportJobs(
    args: ListPackageImportJobsCommandInput,
    cb: (err: any, data?: ListPackageImportJobsCommandOutput) => void
  ): void;
  listPackageImportJobs(
    args: ListPackageImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagesCommand}
   */
  listPackages(args: ListPackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListPackagesCommandOutput>;
  listPackages(args: ListPackagesCommandInput, cb: (err: any, data?: ListPackagesCommandOutput) => void): void;
  listPackages(
    args: ListPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagesCommandOutput) => void
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
   * @see {@link ProvisionDeviceCommand}
   */
  provisionDevice(
    args: ProvisionDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionDeviceCommandOutput>;
  provisionDevice(args: ProvisionDeviceCommandInput, cb: (err: any, data?: ProvisionDeviceCommandOutput) => void): void;
  provisionDevice(
    args: ProvisionDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterPackageVersionCommand}
   */
  registerPackageVersion(
    args: RegisterPackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterPackageVersionCommandOutput>;
  registerPackageVersion(
    args: RegisterPackageVersionCommandInput,
    cb: (err: any, data?: RegisterPackageVersionCommandOutput) => void
  ): void;
  registerPackageVersion(
    args: RegisterPackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterPackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveApplicationInstanceCommand}
   */
  removeApplicationInstance(
    args: RemoveApplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveApplicationInstanceCommandOutput>;
  removeApplicationInstance(
    args: RemoveApplicationInstanceCommandInput,
    cb: (err: any, data?: RemoveApplicationInstanceCommandOutput) => void
  ): void;
  removeApplicationInstance(
    args: RemoveApplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveApplicationInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link SignalApplicationInstanceNodeInstancesCommand}
   */
  signalApplicationInstanceNodeInstances(
    args: SignalApplicationInstanceNodeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SignalApplicationInstanceNodeInstancesCommandOutput>;
  signalApplicationInstanceNodeInstances(
    args: SignalApplicationInstanceNodeInstancesCommandInput,
    cb: (err: any, data?: SignalApplicationInstanceNodeInstancesCommandOutput) => void
  ): void;
  signalApplicationInstanceNodeInstances(
    args: SignalApplicationInstanceNodeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignalApplicationInstanceNodeInstancesCommandOutput) => void
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
   * @see {@link UpdateDeviceMetadataCommand}
   */
  updateDeviceMetadata(
    args: UpdateDeviceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceMetadataCommandOutput>;
  updateDeviceMetadata(
    args: UpdateDeviceMetadataCommandInput,
    cb: (err: any, data?: UpdateDeviceMetadataCommandOutput) => void
  ): void;
  updateDeviceMetadata(
    args: UpdateDeviceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceMetadataCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>AWS Panorama</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>This is the <i>AWS Panorama API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/panorama/latest/dev/panorama-welcome.html">What is AWS Panorama?</a> in the
 *         <i>AWS Panorama Developer Guide</i>.</p>
 */
export class Panorama extends PanoramaClient implements Panorama {}
createAggregatedClient(commands, Panorama);
