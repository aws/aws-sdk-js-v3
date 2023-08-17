// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { MobileClient, MobileClientConfig } from "./MobileClient";

const commands = {
  CreateProjectCommand,
  DeleteProjectCommand,
  DescribeBundleCommand,
  DescribeProjectCommand,
  ExportBundleCommand,
  ExportProjectCommand,
  ListBundlesCommand,
  ListProjectsCommand,
  UpdateProjectCommand,
};

export interface Mobile {
  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBundleCommand}
   */
  describeBundle(
    args: DescribeBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBundleCommandOutput>;
  describeBundle(args: DescribeBundleCommandInput, cb: (err: any, data?: DescribeBundleCommandOutput) => void): void;
  describeBundle(
    args: DescribeBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectCommand}
   */
  describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
  describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportBundleCommand}
   */
  exportBundle(args: ExportBundleCommandInput, options?: __HttpHandlerOptions): Promise<ExportBundleCommandOutput>;
  exportBundle(args: ExportBundleCommandInput, cb: (err: any, data?: ExportBundleCommandOutput) => void): void;
  exportBundle(
    args: ExportBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportProjectCommand}
   */
  exportProject(args: ExportProjectCommandInput, options?: __HttpHandlerOptions): Promise<ExportProjectCommandOutput>;
  exportProject(args: ExportProjectCommandInput, cb: (err: any, data?: ExportProjectCommandOutput) => void): void;
  exportProject(
    args: ExportProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBundlesCommand}
   */
  listBundles(args: ListBundlesCommandInput, options?: __HttpHandlerOptions): Promise<ListBundlesCommandOutput>;
  listBundles(args: ListBundlesCommandInput, cb: (err: any, data?: ListBundlesCommandOutput) => void): void;
  listBundles(
    args: ListBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBundlesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>
 *             AWS Mobile Service provides mobile app and website developers with capabilities
 *             required to configure AWS resources and bootstrap their developer desktop projects
 *             with the necessary SDKs, constants, tools and samples to make use of those resources.
 *         </p>
 */
export class Mobile extends MobileClient implements Mobile {}
createAggregatedClient(commands, Mobile);
