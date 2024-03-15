// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import { GetWorkloadCommand, GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand";
import {
  ListDeploymentEventsCommand,
  ListDeploymentEventsCommandInput,
  ListDeploymentEventsCommandOutput,
} from "./commands/ListDeploymentEventsCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadDeploymentPatternsCommandInput,
  ListWorkloadDeploymentPatternsCommandOutput,
} from "./commands/ListWorkloadDeploymentPatternsCommand";
import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "./commands/ListWorkloadsCommand";
import { LaunchWizardClient, LaunchWizardClientConfig } from "./LaunchWizardClient";

const commands = {
  CreateDeploymentCommand,
  DeleteDeploymentCommand,
  GetDeploymentCommand,
  GetWorkloadCommand,
  ListDeploymentEventsCommand,
  ListDeploymentsCommand,
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadsCommand,
};

export interface LaunchWizard {
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
   * @see {@link GetWorkloadCommand}
   */
  getWorkload(args: GetWorkloadCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkloadCommandOutput>;
  getWorkload(args: GetWorkloadCommandInput, cb: (err: any, data?: GetWorkloadCommandOutput) => void): void;
  getWorkload(
    args: GetWorkloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentEventsCommand}
   */
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentEventsCommandOutput>;
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    cb: (err: any, data?: ListDeploymentEventsCommandOutput) => void
  ): void;
  listDeploymentEvents(
    args: ListDeploymentEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(): Promise<ListDeploymentsCommandOutput>;
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
   * @see {@link ListWorkloadDeploymentPatternsCommand}
   */
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadDeploymentPatternsCommandOutput>;
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    cb: (err: any, data?: ListWorkloadDeploymentPatternsCommandOutput) => void
  ): void;
  listWorkloadDeploymentPatterns(
    args: ListWorkloadDeploymentPatternsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadDeploymentPatternsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadsCommand}
   */
  listWorkloads(): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(args: ListWorkloadsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkloadsCommandOutput>;
  listWorkloads(args: ListWorkloadsCommandInput, cb: (err: any, data?: ListWorkloadsCommandOutput) => void): void;
  listWorkloads(
    args: ListWorkloadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadsCommandOutput) => void
  ): void;
}

/**
 * <p>Launch Wizard offers a guided way of sizing, configuring, and deploying Amazon Web Services resources for
 *          third party applications, such as Microsoft SQL Server Always On and HANA based SAP
 *          systems, without the need to manually identify and provision individual Amazon Web Services
 *          resources.</p>
 * @public
 */
export class LaunchWizard extends LaunchWizardClient implements LaunchWizard {}
createAggregatedClient(commands, LaunchWizard);
