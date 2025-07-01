// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptMarketplaceRegistrationCommand,
  AcceptMarketplaceRegistrationCommandInput,
  AcceptMarketplaceRegistrationCommandOutput,
} from "./commands/AcceptMarketplaceRegistrationCommand";
import {
  CreateCloudAutonomousVmClusterCommand,
  CreateCloudAutonomousVmClusterCommandInput,
  CreateCloudAutonomousVmClusterCommandOutput,
} from "./commands/CreateCloudAutonomousVmClusterCommand";
import {
  CreateCloudExadataInfrastructureCommand,
  CreateCloudExadataInfrastructureCommandInput,
  CreateCloudExadataInfrastructureCommandOutput,
} from "./commands/CreateCloudExadataInfrastructureCommand";
import {
  CreateCloudVmClusterCommand,
  CreateCloudVmClusterCommandInput,
  CreateCloudVmClusterCommandOutput,
} from "./commands/CreateCloudVmClusterCommand";
import {
  CreateOdbNetworkCommand,
  CreateOdbNetworkCommandInput,
  CreateOdbNetworkCommandOutput,
} from "./commands/CreateOdbNetworkCommand";
import {
  CreateOdbPeeringConnectionCommand,
  CreateOdbPeeringConnectionCommandInput,
  CreateOdbPeeringConnectionCommandOutput,
} from "./commands/CreateOdbPeeringConnectionCommand";
import {
  DeleteCloudAutonomousVmClusterCommand,
  DeleteCloudAutonomousVmClusterCommandInput,
  DeleteCloudAutonomousVmClusterCommandOutput,
} from "./commands/DeleteCloudAutonomousVmClusterCommand";
import {
  DeleteCloudExadataInfrastructureCommand,
  DeleteCloudExadataInfrastructureCommandInput,
  DeleteCloudExadataInfrastructureCommandOutput,
} from "./commands/DeleteCloudExadataInfrastructureCommand";
import {
  DeleteCloudVmClusterCommand,
  DeleteCloudVmClusterCommandInput,
  DeleteCloudVmClusterCommandOutput,
} from "./commands/DeleteCloudVmClusterCommand";
import {
  DeleteOdbNetworkCommand,
  DeleteOdbNetworkCommandInput,
  DeleteOdbNetworkCommandOutput,
} from "./commands/DeleteOdbNetworkCommand";
import {
  DeleteOdbPeeringConnectionCommand,
  DeleteOdbPeeringConnectionCommandInput,
  DeleteOdbPeeringConnectionCommandOutput,
} from "./commands/DeleteOdbPeeringConnectionCommand";
import {
  GetCloudAutonomousVmClusterCommand,
  GetCloudAutonomousVmClusterCommandInput,
  GetCloudAutonomousVmClusterCommandOutput,
} from "./commands/GetCloudAutonomousVmClusterCommand";
import {
  GetCloudExadataInfrastructureCommand,
  GetCloudExadataInfrastructureCommandInput,
  GetCloudExadataInfrastructureCommandOutput,
} from "./commands/GetCloudExadataInfrastructureCommand";
import {
  GetCloudExadataInfrastructureUnallocatedResourcesCommand,
  GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
  GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput,
} from "./commands/GetCloudExadataInfrastructureUnallocatedResourcesCommand";
import {
  GetCloudVmClusterCommand,
  GetCloudVmClusterCommandInput,
  GetCloudVmClusterCommandOutput,
} from "./commands/GetCloudVmClusterCommand";
import { GetDbNodeCommand, GetDbNodeCommandInput, GetDbNodeCommandOutput } from "./commands/GetDbNodeCommand";
import { GetDbServerCommand, GetDbServerCommandInput, GetDbServerCommandOutput } from "./commands/GetDbServerCommand";
import {
  GetOciOnboardingStatusCommand,
  GetOciOnboardingStatusCommandInput,
  GetOciOnboardingStatusCommandOutput,
} from "./commands/GetOciOnboardingStatusCommand";
import {
  GetOdbNetworkCommand,
  GetOdbNetworkCommandInput,
  GetOdbNetworkCommandOutput,
} from "./commands/GetOdbNetworkCommand";
import {
  GetOdbPeeringConnectionCommand,
  GetOdbPeeringConnectionCommandInput,
  GetOdbPeeringConnectionCommandOutput,
} from "./commands/GetOdbPeeringConnectionCommand";
import {
  InitializeServiceCommand,
  InitializeServiceCommandInput,
  InitializeServiceCommandOutput,
} from "./commands/InitializeServiceCommand";
import {
  ListAutonomousVirtualMachinesCommand,
  ListAutonomousVirtualMachinesCommandInput,
  ListAutonomousVirtualMachinesCommandOutput,
} from "./commands/ListAutonomousVirtualMachinesCommand";
import {
  ListCloudAutonomousVmClustersCommand,
  ListCloudAutonomousVmClustersCommandInput,
  ListCloudAutonomousVmClustersCommandOutput,
} from "./commands/ListCloudAutonomousVmClustersCommand";
import {
  ListCloudExadataInfrastructuresCommand,
  ListCloudExadataInfrastructuresCommandInput,
  ListCloudExadataInfrastructuresCommandOutput,
} from "./commands/ListCloudExadataInfrastructuresCommand";
import {
  ListCloudVmClustersCommand,
  ListCloudVmClustersCommandInput,
  ListCloudVmClustersCommandOutput,
} from "./commands/ListCloudVmClustersCommand";
import { ListDbNodesCommand, ListDbNodesCommandInput, ListDbNodesCommandOutput } from "./commands/ListDbNodesCommand";
import {
  ListDbServersCommand,
  ListDbServersCommandInput,
  ListDbServersCommandOutput,
} from "./commands/ListDbServersCommand";
import {
  ListDbSystemShapesCommand,
  ListDbSystemShapesCommandInput,
  ListDbSystemShapesCommandOutput,
} from "./commands/ListDbSystemShapesCommand";
import {
  ListGiVersionsCommand,
  ListGiVersionsCommandInput,
  ListGiVersionsCommandOutput,
} from "./commands/ListGiVersionsCommand";
import {
  ListOdbNetworksCommand,
  ListOdbNetworksCommandInput,
  ListOdbNetworksCommandOutput,
} from "./commands/ListOdbNetworksCommand";
import {
  ListOdbPeeringConnectionsCommand,
  ListOdbPeeringConnectionsCommandInput,
  ListOdbPeeringConnectionsCommandOutput,
} from "./commands/ListOdbPeeringConnectionsCommand";
import {
  ListSystemVersionsCommand,
  ListSystemVersionsCommandInput,
  ListSystemVersionsCommandOutput,
} from "./commands/ListSystemVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RebootDbNodeCommand,
  RebootDbNodeCommandInput,
  RebootDbNodeCommandOutput,
} from "./commands/RebootDbNodeCommand";
import { StartDbNodeCommand, StartDbNodeCommandInput, StartDbNodeCommandOutput } from "./commands/StartDbNodeCommand";
import { StopDbNodeCommand, StopDbNodeCommandInput, StopDbNodeCommandOutput } from "./commands/StopDbNodeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCloudExadataInfrastructureCommand,
  UpdateCloudExadataInfrastructureCommandInput,
  UpdateCloudExadataInfrastructureCommandOutput,
} from "./commands/UpdateCloudExadataInfrastructureCommand";
import {
  UpdateOdbNetworkCommand,
  UpdateOdbNetworkCommandInput,
  UpdateOdbNetworkCommandOutput,
} from "./commands/UpdateOdbNetworkCommand";
import { OdbClient, OdbClientConfig } from "./OdbClient";

const commands = {
  AcceptMarketplaceRegistrationCommand,
  CreateCloudAutonomousVmClusterCommand,
  CreateCloudExadataInfrastructureCommand,
  CreateCloudVmClusterCommand,
  CreateOdbNetworkCommand,
  CreateOdbPeeringConnectionCommand,
  DeleteCloudAutonomousVmClusterCommand,
  DeleteCloudExadataInfrastructureCommand,
  DeleteCloudVmClusterCommand,
  DeleteOdbNetworkCommand,
  DeleteOdbPeeringConnectionCommand,
  GetCloudAutonomousVmClusterCommand,
  GetCloudExadataInfrastructureCommand,
  GetCloudExadataInfrastructureUnallocatedResourcesCommand,
  GetCloudVmClusterCommand,
  GetDbNodeCommand,
  GetDbServerCommand,
  GetOciOnboardingStatusCommand,
  GetOdbNetworkCommand,
  GetOdbPeeringConnectionCommand,
  InitializeServiceCommand,
  ListAutonomousVirtualMachinesCommand,
  ListCloudAutonomousVmClustersCommand,
  ListCloudExadataInfrastructuresCommand,
  ListCloudVmClustersCommand,
  ListDbNodesCommand,
  ListDbServersCommand,
  ListDbSystemShapesCommand,
  ListGiVersionsCommand,
  ListOdbNetworksCommand,
  ListOdbPeeringConnectionsCommand,
  ListSystemVersionsCommand,
  ListTagsForResourceCommand,
  RebootDbNodeCommand,
  StartDbNodeCommand,
  StopDbNodeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCloudExadataInfrastructureCommand,
  UpdateOdbNetworkCommand,
};

export interface Odb {
  /**
   * @see {@link AcceptMarketplaceRegistrationCommand}
   */
  acceptMarketplaceRegistration(
    args: AcceptMarketplaceRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptMarketplaceRegistrationCommandOutput>;
  acceptMarketplaceRegistration(
    args: AcceptMarketplaceRegistrationCommandInput,
    cb: (err: any, data?: AcceptMarketplaceRegistrationCommandOutput) => void
  ): void;
  acceptMarketplaceRegistration(
    args: AcceptMarketplaceRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptMarketplaceRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudAutonomousVmClusterCommand}
   */
  createCloudAutonomousVmCluster(
    args: CreateCloudAutonomousVmClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudAutonomousVmClusterCommandOutput>;
  createCloudAutonomousVmCluster(
    args: CreateCloudAutonomousVmClusterCommandInput,
    cb: (err: any, data?: CreateCloudAutonomousVmClusterCommandOutput) => void
  ): void;
  createCloudAutonomousVmCluster(
    args: CreateCloudAutonomousVmClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudAutonomousVmClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudExadataInfrastructureCommand}
   */
  createCloudExadataInfrastructure(
    args: CreateCloudExadataInfrastructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudExadataInfrastructureCommandOutput>;
  createCloudExadataInfrastructure(
    args: CreateCloudExadataInfrastructureCommandInput,
    cb: (err: any, data?: CreateCloudExadataInfrastructureCommandOutput) => void
  ): void;
  createCloudExadataInfrastructure(
    args: CreateCloudExadataInfrastructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudExadataInfrastructureCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudVmClusterCommand}
   */
  createCloudVmCluster(
    args: CreateCloudVmClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudVmClusterCommandOutput>;
  createCloudVmCluster(
    args: CreateCloudVmClusterCommandInput,
    cb: (err: any, data?: CreateCloudVmClusterCommandOutput) => void
  ): void;
  createCloudVmCluster(
    args: CreateCloudVmClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudVmClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOdbNetworkCommand}
   */
  createOdbNetwork(
    args: CreateOdbNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOdbNetworkCommandOutput>;
  createOdbNetwork(
    args: CreateOdbNetworkCommandInput,
    cb: (err: any, data?: CreateOdbNetworkCommandOutput) => void
  ): void;
  createOdbNetwork(
    args: CreateOdbNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOdbNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOdbPeeringConnectionCommand}
   */
  createOdbPeeringConnection(
    args: CreateOdbPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOdbPeeringConnectionCommandOutput>;
  createOdbPeeringConnection(
    args: CreateOdbPeeringConnectionCommandInput,
    cb: (err: any, data?: CreateOdbPeeringConnectionCommandOutput) => void
  ): void;
  createOdbPeeringConnection(
    args: CreateOdbPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOdbPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudAutonomousVmClusterCommand}
   */
  deleteCloudAutonomousVmCluster(
    args: DeleteCloudAutonomousVmClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudAutonomousVmClusterCommandOutput>;
  deleteCloudAutonomousVmCluster(
    args: DeleteCloudAutonomousVmClusterCommandInput,
    cb: (err: any, data?: DeleteCloudAutonomousVmClusterCommandOutput) => void
  ): void;
  deleteCloudAutonomousVmCluster(
    args: DeleteCloudAutonomousVmClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudAutonomousVmClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudExadataInfrastructureCommand}
   */
  deleteCloudExadataInfrastructure(
    args: DeleteCloudExadataInfrastructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudExadataInfrastructureCommandOutput>;
  deleteCloudExadataInfrastructure(
    args: DeleteCloudExadataInfrastructureCommandInput,
    cb: (err: any, data?: DeleteCloudExadataInfrastructureCommandOutput) => void
  ): void;
  deleteCloudExadataInfrastructure(
    args: DeleteCloudExadataInfrastructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudExadataInfrastructureCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudVmClusterCommand}
   */
  deleteCloudVmCluster(
    args: DeleteCloudVmClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudVmClusterCommandOutput>;
  deleteCloudVmCluster(
    args: DeleteCloudVmClusterCommandInput,
    cb: (err: any, data?: DeleteCloudVmClusterCommandOutput) => void
  ): void;
  deleteCloudVmCluster(
    args: DeleteCloudVmClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudVmClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOdbNetworkCommand}
   */
  deleteOdbNetwork(
    args: DeleteOdbNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOdbNetworkCommandOutput>;
  deleteOdbNetwork(
    args: DeleteOdbNetworkCommandInput,
    cb: (err: any, data?: DeleteOdbNetworkCommandOutput) => void
  ): void;
  deleteOdbNetwork(
    args: DeleteOdbNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOdbNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOdbPeeringConnectionCommand}
   */
  deleteOdbPeeringConnection(
    args: DeleteOdbPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOdbPeeringConnectionCommandOutput>;
  deleteOdbPeeringConnection(
    args: DeleteOdbPeeringConnectionCommandInput,
    cb: (err: any, data?: DeleteOdbPeeringConnectionCommandOutput) => void
  ): void;
  deleteOdbPeeringConnection(
    args: DeleteOdbPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOdbPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudAutonomousVmClusterCommand}
   */
  getCloudAutonomousVmCluster(
    args: GetCloudAutonomousVmClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudAutonomousVmClusterCommandOutput>;
  getCloudAutonomousVmCluster(
    args: GetCloudAutonomousVmClusterCommandInput,
    cb: (err: any, data?: GetCloudAutonomousVmClusterCommandOutput) => void
  ): void;
  getCloudAutonomousVmCluster(
    args: GetCloudAutonomousVmClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudAutonomousVmClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudExadataInfrastructureCommand}
   */
  getCloudExadataInfrastructure(
    args: GetCloudExadataInfrastructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudExadataInfrastructureCommandOutput>;
  getCloudExadataInfrastructure(
    args: GetCloudExadataInfrastructureCommandInput,
    cb: (err: any, data?: GetCloudExadataInfrastructureCommandOutput) => void
  ): void;
  getCloudExadataInfrastructure(
    args: GetCloudExadataInfrastructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudExadataInfrastructureCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudExadataInfrastructureUnallocatedResourcesCommand}
   */
  getCloudExadataInfrastructureUnallocatedResources(
    args: GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput>;
  getCloudExadataInfrastructureUnallocatedResources(
    args: GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
    cb: (err: any, data?: GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput) => void
  ): void;
  getCloudExadataInfrastructureUnallocatedResources(
    args: GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudVmClusterCommand}
   */
  getCloudVmCluster(
    args: GetCloudVmClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudVmClusterCommandOutput>;
  getCloudVmCluster(
    args: GetCloudVmClusterCommandInput,
    cb: (err: any, data?: GetCloudVmClusterCommandOutput) => void
  ): void;
  getCloudVmCluster(
    args: GetCloudVmClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudVmClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbNodeCommand}
   */
  getDbNode(args: GetDbNodeCommandInput, options?: __HttpHandlerOptions): Promise<GetDbNodeCommandOutput>;
  getDbNode(args: GetDbNodeCommandInput, cb: (err: any, data?: GetDbNodeCommandOutput) => void): void;
  getDbNode(
    args: GetDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDbNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbServerCommand}
   */
  getDbServer(args: GetDbServerCommandInput, options?: __HttpHandlerOptions): Promise<GetDbServerCommandOutput>;
  getDbServer(args: GetDbServerCommandInput, cb: (err: any, data?: GetDbServerCommandOutput) => void): void;
  getDbServer(
    args: GetDbServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDbServerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOciOnboardingStatusCommand}
   */
  getOciOnboardingStatus(): Promise<GetOciOnboardingStatusCommandOutput>;
  getOciOnboardingStatus(
    args: GetOciOnboardingStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOciOnboardingStatusCommandOutput>;
  getOciOnboardingStatus(
    args: GetOciOnboardingStatusCommandInput,
    cb: (err: any, data?: GetOciOnboardingStatusCommandOutput) => void
  ): void;
  getOciOnboardingStatus(
    args: GetOciOnboardingStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOciOnboardingStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOdbNetworkCommand}
   */
  getOdbNetwork(args: GetOdbNetworkCommandInput, options?: __HttpHandlerOptions): Promise<GetOdbNetworkCommandOutput>;
  getOdbNetwork(args: GetOdbNetworkCommandInput, cb: (err: any, data?: GetOdbNetworkCommandOutput) => void): void;
  getOdbNetwork(
    args: GetOdbNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOdbNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOdbPeeringConnectionCommand}
   */
  getOdbPeeringConnection(
    args: GetOdbPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOdbPeeringConnectionCommandOutput>;
  getOdbPeeringConnection(
    args: GetOdbPeeringConnectionCommandInput,
    cb: (err: any, data?: GetOdbPeeringConnectionCommandOutput) => void
  ): void;
  getOdbPeeringConnection(
    args: GetOdbPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOdbPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link InitializeServiceCommand}
   */
  initializeService(): Promise<InitializeServiceCommandOutput>;
  initializeService(
    args: InitializeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitializeServiceCommandOutput>;
  initializeService(
    args: InitializeServiceCommandInput,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;
  initializeService(
    args: InitializeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutonomousVirtualMachinesCommand}
   */
  listAutonomousVirtualMachines(
    args: ListAutonomousVirtualMachinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutonomousVirtualMachinesCommandOutput>;
  listAutonomousVirtualMachines(
    args: ListAutonomousVirtualMachinesCommandInput,
    cb: (err: any, data?: ListAutonomousVirtualMachinesCommandOutput) => void
  ): void;
  listAutonomousVirtualMachines(
    args: ListAutonomousVirtualMachinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutonomousVirtualMachinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudAutonomousVmClustersCommand}
   */
  listCloudAutonomousVmClusters(): Promise<ListCloudAutonomousVmClustersCommandOutput>;
  listCloudAutonomousVmClusters(
    args: ListCloudAutonomousVmClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudAutonomousVmClustersCommandOutput>;
  listCloudAutonomousVmClusters(
    args: ListCloudAutonomousVmClustersCommandInput,
    cb: (err: any, data?: ListCloudAutonomousVmClustersCommandOutput) => void
  ): void;
  listCloudAutonomousVmClusters(
    args: ListCloudAutonomousVmClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudAutonomousVmClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudExadataInfrastructuresCommand}
   */
  listCloudExadataInfrastructures(): Promise<ListCloudExadataInfrastructuresCommandOutput>;
  listCloudExadataInfrastructures(
    args: ListCloudExadataInfrastructuresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudExadataInfrastructuresCommandOutput>;
  listCloudExadataInfrastructures(
    args: ListCloudExadataInfrastructuresCommandInput,
    cb: (err: any, data?: ListCloudExadataInfrastructuresCommandOutput) => void
  ): void;
  listCloudExadataInfrastructures(
    args: ListCloudExadataInfrastructuresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudExadataInfrastructuresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudVmClustersCommand}
   */
  listCloudVmClusters(): Promise<ListCloudVmClustersCommandOutput>;
  listCloudVmClusters(
    args: ListCloudVmClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudVmClustersCommandOutput>;
  listCloudVmClusters(
    args: ListCloudVmClustersCommandInput,
    cb: (err: any, data?: ListCloudVmClustersCommandOutput) => void
  ): void;
  listCloudVmClusters(
    args: ListCloudVmClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudVmClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbNodesCommand}
   */
  listDbNodes(args: ListDbNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListDbNodesCommandOutput>;
  listDbNodes(args: ListDbNodesCommandInput, cb: (err: any, data?: ListDbNodesCommandOutput) => void): void;
  listDbNodes(
    args: ListDbNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbServersCommand}
   */
  listDbServers(args: ListDbServersCommandInput, options?: __HttpHandlerOptions): Promise<ListDbServersCommandOutput>;
  listDbServers(args: ListDbServersCommandInput, cb: (err: any, data?: ListDbServersCommandOutput) => void): void;
  listDbServers(
    args: ListDbServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbSystemShapesCommand}
   */
  listDbSystemShapes(): Promise<ListDbSystemShapesCommandOutput>;
  listDbSystemShapes(
    args: ListDbSystemShapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDbSystemShapesCommandOutput>;
  listDbSystemShapes(
    args: ListDbSystemShapesCommandInput,
    cb: (err: any, data?: ListDbSystemShapesCommandOutput) => void
  ): void;
  listDbSystemShapes(
    args: ListDbSystemShapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbSystemShapesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGiVersionsCommand}
   */
  listGiVersions(): Promise<ListGiVersionsCommandOutput>;
  listGiVersions(
    args: ListGiVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGiVersionsCommandOutput>;
  listGiVersions(args: ListGiVersionsCommandInput, cb: (err: any, data?: ListGiVersionsCommandOutput) => void): void;
  listGiVersions(
    args: ListGiVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGiVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOdbNetworksCommand}
   */
  listOdbNetworks(): Promise<ListOdbNetworksCommandOutput>;
  listOdbNetworks(
    args: ListOdbNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOdbNetworksCommandOutput>;
  listOdbNetworks(args: ListOdbNetworksCommandInput, cb: (err: any, data?: ListOdbNetworksCommandOutput) => void): void;
  listOdbNetworks(
    args: ListOdbNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOdbNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOdbPeeringConnectionsCommand}
   */
  listOdbPeeringConnections(): Promise<ListOdbPeeringConnectionsCommandOutput>;
  listOdbPeeringConnections(
    args: ListOdbPeeringConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOdbPeeringConnectionsCommandOutput>;
  listOdbPeeringConnections(
    args: ListOdbPeeringConnectionsCommandInput,
    cb: (err: any, data?: ListOdbPeeringConnectionsCommandOutput) => void
  ): void;
  listOdbPeeringConnections(
    args: ListOdbPeeringConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOdbPeeringConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSystemVersionsCommand}
   */
  listSystemVersions(
    args: ListSystemVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSystemVersionsCommandOutput>;
  listSystemVersions(
    args: ListSystemVersionsCommandInput,
    cb: (err: any, data?: ListSystemVersionsCommandOutput) => void
  ): void;
  listSystemVersions(
    args: ListSystemVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSystemVersionsCommandOutput) => void
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
   * @see {@link RebootDbNodeCommand}
   */
  rebootDbNode(args: RebootDbNodeCommandInput, options?: __HttpHandlerOptions): Promise<RebootDbNodeCommandOutput>;
  rebootDbNode(args: RebootDbNodeCommandInput, cb: (err: any, data?: RebootDbNodeCommandOutput) => void): void;
  rebootDbNode(
    args: RebootDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDbNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDbNodeCommand}
   */
  startDbNode(args: StartDbNodeCommandInput, options?: __HttpHandlerOptions): Promise<StartDbNodeCommandOutput>;
  startDbNode(args: StartDbNodeCommandInput, cb: (err: any, data?: StartDbNodeCommandOutput) => void): void;
  startDbNode(
    args: StartDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDbNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDbNodeCommand}
   */
  stopDbNode(args: StopDbNodeCommandInput, options?: __HttpHandlerOptions): Promise<StopDbNodeCommandOutput>;
  stopDbNode(args: StopDbNodeCommandInput, cb: (err: any, data?: StopDbNodeCommandOutput) => void): void;
  stopDbNode(
    args: StopDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDbNodeCommandOutput) => void
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
   * @see {@link UpdateCloudExadataInfrastructureCommand}
   */
  updateCloudExadataInfrastructure(
    args: UpdateCloudExadataInfrastructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudExadataInfrastructureCommandOutput>;
  updateCloudExadataInfrastructure(
    args: UpdateCloudExadataInfrastructureCommandInput,
    cb: (err: any, data?: UpdateCloudExadataInfrastructureCommandOutput) => void
  ): void;
  updateCloudExadataInfrastructure(
    args: UpdateCloudExadataInfrastructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCloudExadataInfrastructureCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOdbNetworkCommand}
   */
  updateOdbNetwork(
    args: UpdateOdbNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOdbNetworkCommandOutput>;
  updateOdbNetwork(
    args: UpdateOdbNetworkCommandInput,
    cb: (err: any, data?: UpdateOdbNetworkCommandOutput) => void
  ): void;
  updateOdbNetwork(
    args: UpdateOdbNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOdbNetworkCommandOutput) => void
  ): void;
}

/**
 * <p>Oracle Database@Amazon Web Services is an offering that enables you to access Oracle Exadata infrastructure managed by Oracle Cloud Infrastructure (OCI) inside Amazon Web Services data centers. You can migrate your Oracle Exadata workloads, establish low-latency connectivity with applications running on Amazon Web Services, and integrate with Amazon Web Services services. For example, you can run application servers in a virtual private cloud (VPC) and access an Oracle Exadata system running in Oracle Database@Amazon Web Services. You can get started with Oracle Database@Amazon Web Services by using the familiar Amazon Web Services Management Console, APIs, or CLI.</p> <p>This interface reference for Oracle Database@Amazon Web Services contains documentation for a programming or command line interface that you can use to manage Oracle Database@Amazon Web Services. Oracle Database@Amazon Web Services is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. The reference structure is as follows.</p> <note> <p>In this preview release documentation, the links in the "See Also" sections do not work.</p> </note> <p> <b>Oracle Database@Amazon Web Services API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see .</p> </li> <li> <p>For the alphabetical list of data types, see .</p> </li> <li> <p>For a list of common parameters, see <a>CommonParameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a>CommonErrors</a>.</p> </li> </ul>
 * @public
 */
export class Odb extends OdbClient implements Odb {}
createAggregatedClient(commands, Odb);
