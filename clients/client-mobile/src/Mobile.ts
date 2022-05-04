// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DescribeBundleCommand,
  DescribeBundleCommandInput,
  DescribeBundleCommandOutput,
} from "./commands/DescribeBundleCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  ExportBundleCommand,
  ExportBundleCommandInput,
  ExportBundleCommandOutput,
} from "./commands/ExportBundleCommand";
import {
  ExportProjectCommand,
  ExportProjectCommandInput,
  ExportProjectCommandOutput,
} from "./commands/ExportProjectCommand";
import { ListBundlesCommand, ListBundlesCommandInput, ListBundlesCommandOutput } from "./commands/ListBundlesCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import { MobileClient } from "./MobileClient";

/**
 * <p>
 *             AWS Mobile Service provides mobile app and website developers with capabilities
 *             required to configure AWS resources and bootstrap their developer desktop projects
 *             with the necessary SDKs, constants, tools and samples to make use of those resources.
 *         </p>
 */
export class Mobile extends MobileClient {
  /**
   * <p>
   *             Creates an AWS Mobile Hub project.
   *         </p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
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
   * <p>
   *             Delets a project in AWS Mobile Hub.
   *         </p>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
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
   * <p>
   *             Get the bundle details for the requested bundle id.
   *         </p>
   */
  public describeBundle(
    args: DescribeBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBundleCommandOutput>;
  public describeBundle(
    args: DescribeBundleCommandInput,
    cb: (err: any, data?: DescribeBundleCommandOutput) => void
  ): void;
  public describeBundle(
    args: DescribeBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBundleCommandOutput) => void
  ): void;
  public describeBundle(
    args: DescribeBundleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBundleCommandOutput) => void),
    cb?: (err: any, data?: DescribeBundleCommandOutput) => void
  ): Promise<DescribeBundleCommandOutput> | void {
    const command = new DescribeBundleCommand(args);
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
   * <p>
   *             Gets details about a project in AWS Mobile Hub.
   *         </p>
   */
  public describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  public describeProject(
    args: DescribeProjectCommandInput,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProjectCommandOutput) => void),
    cb?: (err: any, data?: DescribeProjectCommandOutput) => void
  ): Promise<DescribeProjectCommandOutput> | void {
    const command = new DescribeProjectCommand(args);
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
   * <p>
   *             Generates customized software development kit (SDK) and or tool packages
   *             used to integrate mobile web or mobile app clients with backend AWS resources.
   *         </p>
   */
  public exportBundle(
    args: ExportBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportBundleCommandOutput>;
  public exportBundle(args: ExportBundleCommandInput, cb: (err: any, data?: ExportBundleCommandOutput) => void): void;
  public exportBundle(
    args: ExportBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportBundleCommandOutput) => void
  ): void;
  public exportBundle(
    args: ExportBundleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportBundleCommandOutput) => void),
    cb?: (err: any, data?: ExportBundleCommandOutput) => void
  ): Promise<ExportBundleCommandOutput> | void {
    const command = new ExportBundleCommand(args);
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
   * <p>
   *             Exports project configuration to a snapshot which can be downloaded and shared.
   *             Note that mobile app push credentials are encrypted in exported projects, so they
   *             can only be shared successfully within the same AWS account.
   *         </p>
   */
  public exportProject(
    args: ExportProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportProjectCommandOutput>;
  public exportProject(
    args: ExportProjectCommandInput,
    cb: (err: any, data?: ExportProjectCommandOutput) => void
  ): void;
  public exportProject(
    args: ExportProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportProjectCommandOutput) => void
  ): void;
  public exportProject(
    args: ExportProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportProjectCommandOutput) => void),
    cb?: (err: any, data?: ExportProjectCommandOutput) => void
  ): Promise<ExportProjectCommandOutput> | void {
    const command = new ExportProjectCommand(args);
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
   * <p>
   *             List all available bundles.
   *         </p>
   */
  public listBundles(args: ListBundlesCommandInput, options?: __HttpHandlerOptions): Promise<ListBundlesCommandOutput>;
  public listBundles(args: ListBundlesCommandInput, cb: (err: any, data?: ListBundlesCommandOutput) => void): void;
  public listBundles(
    args: ListBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBundlesCommandOutput) => void
  ): void;
  public listBundles(
    args: ListBundlesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBundlesCommandOutput) => void),
    cb?: (err: any, data?: ListBundlesCommandOutput) => void
  ): Promise<ListBundlesCommandOutput> | void {
    const command = new ListBundlesCommand(args);
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
   * <p>
   *             Lists projects in AWS Mobile Hub.
   *         </p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
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
   * <p>
   *             Update an existing project.
   *         </p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
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
