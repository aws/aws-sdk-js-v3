// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { PanoramaClient } from "./PanoramaClient";

/**
 * <fullname>AWS Panorama</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>This is the <i>AWS Panorama API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/panorama/latest/dev/panorama-welcome.html">What is AWS Panorama?</a> in the
 *         <i>AWS Panorama Developer Guide</i>.</p>
 */
export class Panorama extends PanoramaClient {
  /**
   * <p>Creates an application instance and deploys it to a device.</p>
   */
  public createApplicationInstance(
    args: CreateApplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationInstanceCommandOutput>;
  public createApplicationInstance(
    args: CreateApplicationInstanceCommandInput,
    cb: (err: any, data?: CreateApplicationInstanceCommandOutput) => void
  ): void;
  public createApplicationInstance(
    args: CreateApplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationInstanceCommandOutput) => void
  ): void;
  public createApplicationInstance(
    args: CreateApplicationInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationInstanceCommandOutput) => void
  ): Promise<CreateApplicationInstanceCommandOutput> | void {
    const command = new CreateApplicationInstanceCommand(args);
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
   * <p>Creates a job to run on a device. A job can update a device's software or reboot it.</p>
   */
  public createJobForDevices(
    args: CreateJobForDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobForDevicesCommandOutput>;
  public createJobForDevices(
    args: CreateJobForDevicesCommandInput,
    cb: (err: any, data?: CreateJobForDevicesCommandOutput) => void
  ): void;
  public createJobForDevices(
    args: CreateJobForDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobForDevicesCommandOutput) => void
  ): void;
  public createJobForDevices(
    args: CreateJobForDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobForDevicesCommandOutput) => void),
    cb?: (err: any, data?: CreateJobForDevicesCommandOutput) => void
  ): Promise<CreateJobForDevicesCommandOutput> | void {
    const command = new CreateJobForDevicesCommand(args);
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
   * <p>Creates a camera stream node.</p>
   */
  public createNodeFromTemplateJob(
    args: CreateNodeFromTemplateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNodeFromTemplateJobCommandOutput>;
  public createNodeFromTemplateJob(
    args: CreateNodeFromTemplateJobCommandInput,
    cb: (err: any, data?: CreateNodeFromTemplateJobCommandOutput) => void
  ): void;
  public createNodeFromTemplateJob(
    args: CreateNodeFromTemplateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodeFromTemplateJobCommandOutput) => void
  ): void;
  public createNodeFromTemplateJob(
    args: CreateNodeFromTemplateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNodeFromTemplateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateNodeFromTemplateJobCommandOutput) => void
  ): Promise<CreateNodeFromTemplateJobCommandOutput> | void {
    const command = new CreateNodeFromTemplateJobCommand(args);
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
   * <p>Creates a package and storage location in an Amazon S3 access point.</p>
   */
  public createPackage(
    args: CreatePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackageCommandOutput>;
  public createPackage(
    args: CreatePackageCommandInput,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;
  public createPackage(
    args: CreatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;
  public createPackage(
    args: CreatePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePackageCommandOutput) => void),
    cb?: (err: any, data?: CreatePackageCommandOutput) => void
  ): Promise<CreatePackageCommandOutput> | void {
    const command = new CreatePackageCommand(args);
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
   * <p>Imports a node package.</p>
   */
  public createPackageImportJob(
    args: CreatePackageImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackageImportJobCommandOutput>;
  public createPackageImportJob(
    args: CreatePackageImportJobCommandInput,
    cb: (err: any, data?: CreatePackageImportJobCommandOutput) => void
  ): void;
  public createPackageImportJob(
    args: CreatePackageImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackageImportJobCommandOutput) => void
  ): void;
  public createPackageImportJob(
    args: CreatePackageImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePackageImportJobCommandOutput) => void),
    cb?: (err: any, data?: CreatePackageImportJobCommandOutput) => void
  ): Promise<CreatePackageImportJobCommandOutput> | void {
    const command = new CreatePackageImportJobCommand(args);
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
   * <p>Deletes a device.</p>
   */
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceCommandOutput>;
  public deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeviceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): Promise<DeleteDeviceCommandOutput> | void {
    const command = new DeleteDeviceCommand(args);
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
   * <p>Deletes a package.</p>
   *          <note>
   *             <p>To delete a package, you need permission to call <code>s3:DeleteObject</code> in addition to permissions for
   *         the AWS Panorama API.</p>
   *          </note>
   */
  public deletePackage(
    args: DeletePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackageCommandOutput>;
  public deletePackage(
    args: DeletePackageCommandInput,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;
  public deletePackage(
    args: DeletePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;
  public deletePackage(
    args: DeletePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePackageCommandOutput) => void),
    cb?: (err: any, data?: DeletePackageCommandOutput) => void
  ): Promise<DeletePackageCommandOutput> | void {
    const command = new DeletePackageCommand(args);
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
   * <p>Deregisters a package version.</p>
   */
  public deregisterPackageVersion(
    args: DeregisterPackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterPackageVersionCommandOutput>;
  public deregisterPackageVersion(
    args: DeregisterPackageVersionCommandInput,
    cb: (err: any, data?: DeregisterPackageVersionCommandOutput) => void
  ): void;
  public deregisterPackageVersion(
    args: DeregisterPackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterPackageVersionCommandOutput) => void
  ): void;
  public deregisterPackageVersion(
    args: DeregisterPackageVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterPackageVersionCommandOutput) => void),
    cb?: (err: any, data?: DeregisterPackageVersionCommandOutput) => void
  ): Promise<DeregisterPackageVersionCommandOutput> | void {
    const command = new DeregisterPackageVersionCommand(args);
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
   * <p>Returns information about an application instance on a device.</p>
   */
  public describeApplicationInstance(
    args: DescribeApplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationInstanceCommandOutput>;
  public describeApplicationInstance(
    args: DescribeApplicationInstanceCommandInput,
    cb: (err: any, data?: DescribeApplicationInstanceCommandOutput) => void
  ): void;
  public describeApplicationInstance(
    args: DescribeApplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationInstanceCommandOutput) => void
  ): void;
  public describeApplicationInstance(
    args: DescribeApplicationInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationInstanceCommandOutput) => void
  ): Promise<DescribeApplicationInstanceCommandOutput> | void {
    const command = new DescribeApplicationInstanceCommand(args);
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
   * <p>Returns information about an application instance's configuration manifest.</p>
   */
  public describeApplicationInstanceDetails(
    args: DescribeApplicationInstanceDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationInstanceDetailsCommandOutput>;
  public describeApplicationInstanceDetails(
    args: DescribeApplicationInstanceDetailsCommandInput,
    cb: (err: any, data?: DescribeApplicationInstanceDetailsCommandOutput) => void
  ): void;
  public describeApplicationInstanceDetails(
    args: DescribeApplicationInstanceDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationInstanceDetailsCommandOutput) => void
  ): void;
  public describeApplicationInstanceDetails(
    args: DescribeApplicationInstanceDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationInstanceDetailsCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationInstanceDetailsCommandOutput) => void
  ): Promise<DescribeApplicationInstanceDetailsCommandOutput> | void {
    const command = new DescribeApplicationInstanceDetailsCommand(args);
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
   * <p>Returns information about a device.</p>
   */
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeviceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): Promise<DescribeDeviceCommandOutput> | void {
    const command = new DescribeDeviceCommand(args);
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
   * <p>Returns information about a device job.</p>
   */
  public describeDeviceJob(
    args: DescribeDeviceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceJobCommandOutput>;
  public describeDeviceJob(
    args: DescribeDeviceJobCommandInput,
    cb: (err: any, data?: DescribeDeviceJobCommandOutput) => void
  ): void;
  public describeDeviceJob(
    args: DescribeDeviceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceJobCommandOutput) => void
  ): void;
  public describeDeviceJob(
    args: DescribeDeviceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeviceJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeviceJobCommandOutput) => void
  ): Promise<DescribeDeviceJobCommandOutput> | void {
    const command = new DescribeDeviceJobCommand(args);
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
   * <p>Returns information about a node.</p>
   */
  public describeNode(
    args: DescribeNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodeCommandOutput>;
  public describeNode(args: DescribeNodeCommandInput, cb: (err: any, data?: DescribeNodeCommandOutput) => void): void;
  public describeNode(
    args: DescribeNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeCommandOutput) => void
  ): void;
  public describeNode(
    args: DescribeNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNodeCommandOutput) => void),
    cb?: (err: any, data?: DescribeNodeCommandOutput) => void
  ): Promise<DescribeNodeCommandOutput> | void {
    const command = new DescribeNodeCommand(args);
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
   * <p>Returns information about a job to create a camera stream node.</p>
   */
  public describeNodeFromTemplateJob(
    args: DescribeNodeFromTemplateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodeFromTemplateJobCommandOutput>;
  public describeNodeFromTemplateJob(
    args: DescribeNodeFromTemplateJobCommandInput,
    cb: (err: any, data?: DescribeNodeFromTemplateJobCommandOutput) => void
  ): void;
  public describeNodeFromTemplateJob(
    args: DescribeNodeFromTemplateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeFromTemplateJobCommandOutput) => void
  ): void;
  public describeNodeFromTemplateJob(
    args: DescribeNodeFromTemplateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNodeFromTemplateJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeNodeFromTemplateJobCommandOutput) => void
  ): Promise<DescribeNodeFromTemplateJobCommandOutput> | void {
    const command = new DescribeNodeFromTemplateJobCommand(args);
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
   * <p>Returns information about a package.</p>
   */
  public describePackage(
    args: DescribePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageCommandOutput>;
  public describePackage(
    args: DescribePackageCommandInput,
    cb: (err: any, data?: DescribePackageCommandOutput) => void
  ): void;
  public describePackage(
    args: DescribePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageCommandOutput) => void
  ): void;
  public describePackage(
    args: DescribePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePackageCommandOutput) => void),
    cb?: (err: any, data?: DescribePackageCommandOutput) => void
  ): Promise<DescribePackageCommandOutput> | void {
    const command = new DescribePackageCommand(args);
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
   * <p>Returns information about a package import job.</p>
   */
  public describePackageImportJob(
    args: DescribePackageImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageImportJobCommandOutput>;
  public describePackageImportJob(
    args: DescribePackageImportJobCommandInput,
    cb: (err: any, data?: DescribePackageImportJobCommandOutput) => void
  ): void;
  public describePackageImportJob(
    args: DescribePackageImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageImportJobCommandOutput) => void
  ): void;
  public describePackageImportJob(
    args: DescribePackageImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePackageImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribePackageImportJobCommandOutput) => void
  ): Promise<DescribePackageImportJobCommandOutput> | void {
    const command = new DescribePackageImportJobCommand(args);
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
   * <p>Returns information about a package version.</p>
   */
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageVersionCommandOutput>;
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;
  public describePackageVersion(
    args: DescribePackageVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePackageVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): Promise<DescribePackageVersionCommandOutput> | void {
    const command = new DescribePackageVersionCommand(args);
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
   * <p>Returns a list of application instance dependencies.</p>
   */
  public listApplicationInstanceDependencies(
    args: ListApplicationInstanceDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationInstanceDependenciesCommandOutput>;
  public listApplicationInstanceDependencies(
    args: ListApplicationInstanceDependenciesCommandInput,
    cb: (err: any, data?: ListApplicationInstanceDependenciesCommandOutput) => void
  ): void;
  public listApplicationInstanceDependencies(
    args: ListApplicationInstanceDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationInstanceDependenciesCommandOutput) => void
  ): void;
  public listApplicationInstanceDependencies(
    args: ListApplicationInstanceDependenciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationInstanceDependenciesCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationInstanceDependenciesCommandOutput) => void
  ): Promise<ListApplicationInstanceDependenciesCommandOutput> | void {
    const command = new ListApplicationInstanceDependenciesCommand(args);
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
   * <p>Returns a list of application node instances.</p>
   */
  public listApplicationInstanceNodeInstances(
    args: ListApplicationInstanceNodeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationInstanceNodeInstancesCommandOutput>;
  public listApplicationInstanceNodeInstances(
    args: ListApplicationInstanceNodeInstancesCommandInput,
    cb: (err: any, data?: ListApplicationInstanceNodeInstancesCommandOutput) => void
  ): void;
  public listApplicationInstanceNodeInstances(
    args: ListApplicationInstanceNodeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationInstanceNodeInstancesCommandOutput) => void
  ): void;
  public listApplicationInstanceNodeInstances(
    args: ListApplicationInstanceNodeInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationInstanceNodeInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationInstanceNodeInstancesCommandOutput) => void
  ): Promise<ListApplicationInstanceNodeInstancesCommandOutput> | void {
    const command = new ListApplicationInstanceNodeInstancesCommand(args);
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
   * <p>Returns a list of application instances.</p>
   */
  public listApplicationInstances(
    args: ListApplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationInstancesCommandOutput>;
  public listApplicationInstances(
    args: ListApplicationInstancesCommandInput,
    cb: (err: any, data?: ListApplicationInstancesCommandOutput) => void
  ): void;
  public listApplicationInstances(
    args: ListApplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationInstancesCommandOutput) => void
  ): void;
  public listApplicationInstances(
    args: ListApplicationInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationInstancesCommandOutput) => void
  ): Promise<ListApplicationInstancesCommandOutput> | void {
    const command = new ListApplicationInstancesCommand(args);
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
   * <p>Returns a list of devices.</p>
   */
  public listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  public listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  public listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListDevicesCommandOutput) => void
  ): Promise<ListDevicesCommandOutput> | void {
    const command = new ListDevicesCommand(args);
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
   * <p>Returns a list of jobs.</p>
   */
  public listDevicesJobs(
    args: ListDevicesJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicesJobsCommandOutput>;
  public listDevicesJobs(
    args: ListDevicesJobsCommandInput,
    cb: (err: any, data?: ListDevicesJobsCommandOutput) => void
  ): void;
  public listDevicesJobs(
    args: ListDevicesJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesJobsCommandOutput) => void
  ): void;
  public listDevicesJobs(
    args: ListDevicesJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicesJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDevicesJobsCommandOutput) => void
  ): Promise<ListDevicesJobsCommandOutput> | void {
    const command = new ListDevicesJobsCommand(args);
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
   * <p>Returns a list of camera stream node jobs.</p>
   */
  public listNodeFromTemplateJobs(
    args: ListNodeFromTemplateJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNodeFromTemplateJobsCommandOutput>;
  public listNodeFromTemplateJobs(
    args: ListNodeFromTemplateJobsCommandInput,
    cb: (err: any, data?: ListNodeFromTemplateJobsCommandOutput) => void
  ): void;
  public listNodeFromTemplateJobs(
    args: ListNodeFromTemplateJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodeFromTemplateJobsCommandOutput) => void
  ): void;
  public listNodeFromTemplateJobs(
    args: ListNodeFromTemplateJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNodeFromTemplateJobsCommandOutput) => void),
    cb?: (err: any, data?: ListNodeFromTemplateJobsCommandOutput) => void
  ): Promise<ListNodeFromTemplateJobsCommandOutput> | void {
    const command = new ListNodeFromTemplateJobsCommand(args);
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
   * <p>Returns a list of nodes.</p>
   */
  public listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
  public listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
  public listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;
  public listNodes(
    args: ListNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNodesCommandOutput) => void),
    cb?: (err: any, data?: ListNodesCommandOutput) => void
  ): Promise<ListNodesCommandOutput> | void {
    const command = new ListNodesCommand(args);
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
   * <p>Returns a list of package import jobs.</p>
   */
  public listPackageImportJobs(
    args: ListPackageImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageImportJobsCommandOutput>;
  public listPackageImportJobs(
    args: ListPackageImportJobsCommandInput,
    cb: (err: any, data?: ListPackageImportJobsCommandOutput) => void
  ): void;
  public listPackageImportJobs(
    args: ListPackageImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageImportJobsCommandOutput) => void
  ): void;
  public listPackageImportJobs(
    args: ListPackageImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPackageImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListPackageImportJobsCommandOutput) => void
  ): Promise<ListPackageImportJobsCommandOutput> | void {
    const command = new ListPackageImportJobsCommand(args);
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
   * <p>Returns a list of packages.</p>
   */
  public listPackages(
    args: ListPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagesCommandOutput>;
  public listPackages(args: ListPackagesCommandInput, cb: (err: any, data?: ListPackagesCommandOutput) => void): void;
  public listPackages(
    args: ListPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagesCommandOutput) => void
  ): void;
  public listPackages(
    args: ListPackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPackagesCommandOutput) => void),
    cb?: (err: any, data?: ListPackagesCommandOutput) => void
  ): Promise<ListPackagesCommandOutput> | void {
    const command = new ListPackagesCommand(args);
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
   * <p>Returns a list of tags for a resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Creates a device and returns a configuration archive. The configuration archive is a ZIP file that contains a
   *       provisioning certificate that is valid for 5 minutes. Name the configuration archive
   *           <code>certificates-omni_<i>device-name</i>.zip</code> and transfer it to the device within 5
   *       minutes. Use the included USB storage device and connect it to the USB 3.0 port next to the HDMI output.</p>
   */
  public provisionDevice(
    args: ProvisionDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionDeviceCommandOutput>;
  public provisionDevice(
    args: ProvisionDeviceCommandInput,
    cb: (err: any, data?: ProvisionDeviceCommandOutput) => void
  ): void;
  public provisionDevice(
    args: ProvisionDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionDeviceCommandOutput) => void
  ): void;
  public provisionDevice(
    args: ProvisionDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ProvisionDeviceCommandOutput) => void),
    cb?: (err: any, data?: ProvisionDeviceCommandOutput) => void
  ): Promise<ProvisionDeviceCommandOutput> | void {
    const command = new ProvisionDeviceCommand(args);
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
   * <p>Registers a package version.</p>
   */
  public registerPackageVersion(
    args: RegisterPackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterPackageVersionCommandOutput>;
  public registerPackageVersion(
    args: RegisterPackageVersionCommandInput,
    cb: (err: any, data?: RegisterPackageVersionCommandOutput) => void
  ): void;
  public registerPackageVersion(
    args: RegisterPackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterPackageVersionCommandOutput) => void
  ): void;
  public registerPackageVersion(
    args: RegisterPackageVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterPackageVersionCommandOutput) => void),
    cb?: (err: any, data?: RegisterPackageVersionCommandOutput) => void
  ): Promise<RegisterPackageVersionCommandOutput> | void {
    const command = new RegisterPackageVersionCommand(args);
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
   * <p>Removes an application instance.</p>
   */
  public removeApplicationInstance(
    args: RemoveApplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveApplicationInstanceCommandOutput>;
  public removeApplicationInstance(
    args: RemoveApplicationInstanceCommandInput,
    cb: (err: any, data?: RemoveApplicationInstanceCommandOutput) => void
  ): void;
  public removeApplicationInstance(
    args: RemoveApplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveApplicationInstanceCommandOutput) => void
  ): void;
  public removeApplicationInstance(
    args: RemoveApplicationInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveApplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: RemoveApplicationInstanceCommandOutput) => void
  ): Promise<RemoveApplicationInstanceCommandOutput> | void {
    const command = new RemoveApplicationInstanceCommand(args);
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
   * <p>Signal camera nodes to stop or resume.</p>
   */
  public signalApplicationInstanceNodeInstances(
    args: SignalApplicationInstanceNodeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SignalApplicationInstanceNodeInstancesCommandOutput>;
  public signalApplicationInstanceNodeInstances(
    args: SignalApplicationInstanceNodeInstancesCommandInput,
    cb: (err: any, data?: SignalApplicationInstanceNodeInstancesCommandOutput) => void
  ): void;
  public signalApplicationInstanceNodeInstances(
    args: SignalApplicationInstanceNodeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignalApplicationInstanceNodeInstancesCommandOutput) => void
  ): void;
  public signalApplicationInstanceNodeInstances(
    args: SignalApplicationInstanceNodeInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SignalApplicationInstanceNodeInstancesCommandOutput) => void),
    cb?: (err: any, data?: SignalApplicationInstanceNodeInstancesCommandOutput) => void
  ): Promise<SignalApplicationInstanceNodeInstancesCommandOutput> | void {
    const command = new SignalApplicationInstanceNodeInstancesCommand(args);
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
   * <p>Tags a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates a device's metadata.</p>
   */
  public updateDeviceMetadata(
    args: UpdateDeviceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceMetadataCommandOutput>;
  public updateDeviceMetadata(
    args: UpdateDeviceMetadataCommandInput,
    cb: (err: any, data?: UpdateDeviceMetadataCommandOutput) => void
  ): void;
  public updateDeviceMetadata(
    args: UpdateDeviceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceMetadataCommandOutput) => void
  ): void;
  public updateDeviceMetadata(
    args: UpdateDeviceMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeviceMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeviceMetadataCommandOutput) => void
  ): Promise<UpdateDeviceMetadataCommandOutput> | void {
    const command = new UpdateDeviceMetadataCommand(args);
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
