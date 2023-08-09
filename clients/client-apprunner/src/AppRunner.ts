// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppRunnerClient, AppRunnerClientConfig } from "./AppRunnerClient";
import {
  AssociateCustomDomainCommand,
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "./commands/AssociateCustomDomainCommand";
import {
  CreateAutoScalingConfigurationCommand,
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "./commands/CreateAutoScalingConfigurationCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateObservabilityConfigurationCommand,
  CreateObservabilityConfigurationCommandInput,
  CreateObservabilityConfigurationCommandOutput,
} from "./commands/CreateObservabilityConfigurationCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  CreateVpcConnectorCommand,
  CreateVpcConnectorCommandInput,
  CreateVpcConnectorCommandOutput,
} from "./commands/CreateVpcConnectorCommand";
import {
  CreateVpcIngressConnectionCommand,
  CreateVpcIngressConnectionCommandInput,
  CreateVpcIngressConnectionCommandOutput,
} from "./commands/CreateVpcIngressConnectionCommand";
import {
  DeleteAutoScalingConfigurationCommand,
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "./commands/DeleteAutoScalingConfigurationCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteObservabilityConfigurationCommand,
  DeleteObservabilityConfigurationCommandInput,
  DeleteObservabilityConfigurationCommandOutput,
} from "./commands/DeleteObservabilityConfigurationCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  DeleteVpcConnectorCommand,
  DeleteVpcConnectorCommandInput,
  DeleteVpcConnectorCommandOutput,
} from "./commands/DeleteVpcConnectorCommand";
import {
  DeleteVpcIngressConnectionCommand,
  DeleteVpcIngressConnectionCommandInput,
  DeleteVpcIngressConnectionCommandOutput,
} from "./commands/DeleteVpcIngressConnectionCommand";
import {
  DescribeAutoScalingConfigurationCommand,
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "./commands/DescribeAutoScalingConfigurationCommand";
import {
  DescribeCustomDomainsCommand,
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "./commands/DescribeCustomDomainsCommand";
import {
  DescribeObservabilityConfigurationCommand,
  DescribeObservabilityConfigurationCommandInput,
  DescribeObservabilityConfigurationCommandOutput,
} from "./commands/DescribeObservabilityConfigurationCommand";
import {
  DescribeServiceCommand,
  DescribeServiceCommandInput,
  DescribeServiceCommandOutput,
} from "./commands/DescribeServiceCommand";
import {
  DescribeVpcConnectorCommand,
  DescribeVpcConnectorCommandInput,
  DescribeVpcConnectorCommandOutput,
} from "./commands/DescribeVpcConnectorCommand";
import {
  DescribeVpcIngressConnectionCommand,
  DescribeVpcIngressConnectionCommandInput,
  DescribeVpcIngressConnectionCommandOutput,
} from "./commands/DescribeVpcIngressConnectionCommand";
import {
  DisassociateCustomDomainCommand,
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "./commands/DisassociateCustomDomainCommand";
import {
  ListAutoScalingConfigurationsCommand,
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "./commands/ListAutoScalingConfigurationsCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import {
  ListObservabilityConfigurationsCommand,
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput,
} from "./commands/ListObservabilityConfigurationsCommand";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "./commands/ListOperationsCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVpcConnectorsCommand,
  ListVpcConnectorsCommandInput,
  ListVpcConnectorsCommandOutput,
} from "./commands/ListVpcConnectorsCommand";
import {
  ListVpcIngressConnectionsCommand,
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput,
} from "./commands/ListVpcIngressConnectionsCommand";
import {
  PauseServiceCommand,
  PauseServiceCommandInput,
  PauseServiceCommandOutput,
} from "./commands/PauseServiceCommand";
import {
  ResumeServiceCommand,
  ResumeServiceCommandInput,
  ResumeServiceCommandOutput,
} from "./commands/ResumeServiceCommand";
import {
  StartDeploymentCommand,
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput,
} from "./commands/StartDeploymentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateServiceCommand,
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
} from "./commands/UpdateServiceCommand";
import {
  UpdateVpcIngressConnectionCommand,
  UpdateVpcIngressConnectionCommandInput,
  UpdateVpcIngressConnectionCommandOutput,
} from "./commands/UpdateVpcIngressConnectionCommand";

const commands = {
  AssociateCustomDomainCommand,
  CreateAutoScalingConfigurationCommand,
  CreateConnectionCommand,
  CreateObservabilityConfigurationCommand,
  CreateServiceCommand,
  CreateVpcConnectorCommand,
  CreateVpcIngressConnectionCommand,
  DeleteAutoScalingConfigurationCommand,
  DeleteConnectionCommand,
  DeleteObservabilityConfigurationCommand,
  DeleteServiceCommand,
  DeleteVpcConnectorCommand,
  DeleteVpcIngressConnectionCommand,
  DescribeAutoScalingConfigurationCommand,
  DescribeCustomDomainsCommand,
  DescribeObservabilityConfigurationCommand,
  DescribeServiceCommand,
  DescribeVpcConnectorCommand,
  DescribeVpcIngressConnectionCommand,
  DisassociateCustomDomainCommand,
  ListAutoScalingConfigurationsCommand,
  ListConnectionsCommand,
  ListObservabilityConfigurationsCommand,
  ListOperationsCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  ListVpcConnectorsCommand,
  ListVpcIngressConnectionsCommand,
  PauseServiceCommand,
  ResumeServiceCommand,
  StartDeploymentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateServiceCommand,
  UpdateVpcIngressConnectionCommand,
};

export interface AppRunner {
  /**
   * @see {@link AssociateCustomDomainCommand}
   */
  associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCustomDomainCommandOutput>;
  associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    cb: (err: any, data?: AssociateCustomDomainCommandOutput) => void
  ): void;
  associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCustomDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutoScalingConfigurationCommand}
   */
  createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoScalingConfigurationCommandOutput>;
  createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void
  ): void;
  createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateObservabilityConfigurationCommand}
   */
  createObservabilityConfiguration(
    args: CreateObservabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateObservabilityConfigurationCommandOutput>;
  createObservabilityConfiguration(
    args: CreateObservabilityConfigurationCommandInput,
    cb: (err: any, data?: CreateObservabilityConfigurationCommandOutput) => void
  ): void;
  createObservabilityConfiguration(
    args: CreateObservabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateObservabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
  createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcConnectorCommand}
   */
  createVpcConnector(
    args: CreateVpcConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcConnectorCommandOutput>;
  createVpcConnector(
    args: CreateVpcConnectorCommandInput,
    cb: (err: any, data?: CreateVpcConnectorCommandOutput) => void
  ): void;
  createVpcConnector(
    args: CreateVpcConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcIngressConnectionCommand}
   */
  createVpcIngressConnection(
    args: CreateVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcIngressConnectionCommandOutput>;
  createVpcIngressConnection(
    args: CreateVpcIngressConnectionCommandInput,
    cb: (err: any, data?: CreateVpcIngressConnectionCommandOutput) => void
  ): void;
  createVpcIngressConnection(
    args: CreateVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcIngressConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAutoScalingConfigurationCommand}
   */
  deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutoScalingConfigurationCommandOutput>;
  deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void
  ): void;
  deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteObservabilityConfigurationCommand}
   */
  deleteObservabilityConfiguration(
    args: DeleteObservabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObservabilityConfigurationCommandOutput>;
  deleteObservabilityConfiguration(
    args: DeleteObservabilityConfigurationCommandInput,
    cb: (err: any, data?: DeleteObservabilityConfigurationCommandOutput) => void
  ): void;
  deleteObservabilityConfiguration(
    args: DeleteObservabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObservabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
  deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcConnectorCommand}
   */
  deleteVpcConnector(
    args: DeleteVpcConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcConnectorCommandOutput>;
  deleteVpcConnector(
    args: DeleteVpcConnectorCommandInput,
    cb: (err: any, data?: DeleteVpcConnectorCommandOutput) => void
  ): void;
  deleteVpcConnector(
    args: DeleteVpcConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcIngressConnectionCommand}
   */
  deleteVpcIngressConnection(
    args: DeleteVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcIngressConnectionCommandOutput>;
  deleteVpcIngressConnection(
    args: DeleteVpcIngressConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcIngressConnectionCommandOutput) => void
  ): void;
  deleteVpcIngressConnection(
    args: DeleteVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcIngressConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingConfigurationCommand}
   */
  describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingConfigurationCommandOutput>;
  describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void
  ): void;
  describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomDomainsCommand}
   */
  describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomDomainsCommandOutput>;
  describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    cb: (err: any, data?: DescribeCustomDomainsCommandOutput) => void
  ): void;
  describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeObservabilityConfigurationCommand}
   */
  describeObservabilityConfiguration(
    args: DescribeObservabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeObservabilityConfigurationCommandOutput>;
  describeObservabilityConfiguration(
    args: DescribeObservabilityConfigurationCommandInput,
    cb: (err: any, data?: DescribeObservabilityConfigurationCommandOutput) => void
  ): void;
  describeObservabilityConfiguration(
    args: DescribeObservabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeObservabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceCommand}
   */
  describeService(
    args: DescribeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceCommandOutput>;
  describeService(args: DescribeServiceCommandInput, cb: (err: any, data?: DescribeServiceCommandOutput) => void): void;
  describeService(
    args: DescribeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcConnectorCommand}
   */
  describeVpcConnector(
    args: DescribeVpcConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcConnectorCommandOutput>;
  describeVpcConnector(
    args: DescribeVpcConnectorCommandInput,
    cb: (err: any, data?: DescribeVpcConnectorCommandOutput) => void
  ): void;
  describeVpcConnector(
    args: DescribeVpcConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcIngressConnectionCommand}
   */
  describeVpcIngressConnection(
    args: DescribeVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcIngressConnectionCommandOutput>;
  describeVpcIngressConnection(
    args: DescribeVpcIngressConnectionCommandInput,
    cb: (err: any, data?: DescribeVpcIngressConnectionCommandOutput) => void
  ): void;
  describeVpcIngressConnection(
    args: DescribeVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcIngressConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCustomDomainCommand}
   */
  disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCustomDomainCommandOutput>;
  disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    cb: (err: any, data?: DisassociateCustomDomainCommandOutput) => void
  ): void;
  disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCustomDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutoScalingConfigurationsCommand}
   */
  listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutoScalingConfigurationsCommandOutput>;
  listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    cb: (err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void
  ): void;
  listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(args: ListConnectionsCommandInput, cb: (err: any, data?: ListConnectionsCommandOutput) => void): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObservabilityConfigurationsCommand}
   */
  listObservabilityConfigurations(
    args: ListObservabilityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObservabilityConfigurationsCommandOutput>;
  listObservabilityConfigurations(
    args: ListObservabilityConfigurationsCommandInput,
    cb: (err: any, data?: ListObservabilityConfigurationsCommandOutput) => void
  ): void;
  listObservabilityConfigurations(
    args: ListObservabilityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObservabilityConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOperationsCommand}
   */
  listOperations(
    args: ListOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationsCommandOutput>;
  listOperations(args: ListOperationsCommandInput, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
  listOperations(
    args: ListOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
  listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
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
   * @see {@link ListVpcConnectorsCommand}
   */
  listVpcConnectors(
    args: ListVpcConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcConnectorsCommandOutput>;
  listVpcConnectors(
    args: ListVpcConnectorsCommandInput,
    cb: (err: any, data?: ListVpcConnectorsCommandOutput) => void
  ): void;
  listVpcConnectors(
    args: ListVpcConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcIngressConnectionsCommand}
   */
  listVpcIngressConnections(
    args: ListVpcIngressConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcIngressConnectionsCommandOutput>;
  listVpcIngressConnections(
    args: ListVpcIngressConnectionsCommandInput,
    cb: (err: any, data?: ListVpcIngressConnectionsCommandOutput) => void
  ): void;
  listVpcIngressConnections(
    args: ListVpcIngressConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcIngressConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseServiceCommand}
   */
  pauseService(args: PauseServiceCommandInput, options?: __HttpHandlerOptions): Promise<PauseServiceCommandOutput>;
  pauseService(args: PauseServiceCommandInput, cb: (err: any, data?: PauseServiceCommandOutput) => void): void;
  pauseService(
    args: PauseServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeServiceCommand}
   */
  resumeService(args: ResumeServiceCommandInput, options?: __HttpHandlerOptions): Promise<ResumeServiceCommandOutput>;
  resumeService(args: ResumeServiceCommandInput, cb: (err: any, data?: ResumeServiceCommandOutput) => void): void;
  resumeService(
    args: ResumeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeploymentCommand}
   */
  startDeployment(
    args: StartDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeploymentCommandOutput>;
  startDeployment(args: StartDeploymentCommandInput, cb: (err: any, data?: StartDeploymentCommandOutput) => void): void;
  startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
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
   * @see {@link UpdateServiceCommand}
   */
  updateService(args: UpdateServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceCommandOutput>;
  updateService(args: UpdateServiceCommandInput, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
  updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcIngressConnectionCommand}
   */
  updateVpcIngressConnection(
    args: UpdateVpcIngressConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcIngressConnectionCommandOutput>;
  updateVpcIngressConnection(
    args: UpdateVpcIngressConnectionCommandInput,
    cb: (err: any, data?: UpdateVpcIngressConnectionCommandOutput) => void
  ): void;
  updateVpcIngressConnection(
    args: UpdateVpcIngressConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcIngressConnectionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>App Runner</fullname>
 *          <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code
 *       to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to
 *       provision and configure Amazon Web Services resources.</p>
 *          <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations,
 *       high performance, scalability, and security.</p>
 *          <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>.
 *       For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p>
 *          <p>
 *        To install the Software Development Kits (SDKs), Integrated
 *       Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner
 *         endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 */
export class AppRunner extends AppRunnerClient implements AppRunner {}
createAggregatedClient(commands, AppRunner);
