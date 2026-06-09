// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptMarketplaceRegistrationCommandInput,
  type AcceptMarketplaceRegistrationCommandOutput,
  AcceptMarketplaceRegistrationCommand,
} from "./commands/AcceptMarketplaceRegistrationCommand";
import {
  type AssociateIamRoleToResourceCommandInput,
  type AssociateIamRoleToResourceCommandOutput,
  AssociateIamRoleToResourceCommand,
} from "./commands/AssociateIamRoleToResourceCommand";
import {
  type CreateAutonomousDatabaseBackupCommandInput,
  type CreateAutonomousDatabaseBackupCommandOutput,
  CreateAutonomousDatabaseBackupCommand,
} from "./commands/CreateAutonomousDatabaseBackupCommand";
import {
  type CreateAutonomousDatabaseCommandInput,
  type CreateAutonomousDatabaseCommandOutput,
  CreateAutonomousDatabaseCommand,
} from "./commands/CreateAutonomousDatabaseCommand";
import {
  type CreateAutonomousDatabaseWalletCommandInput,
  type CreateAutonomousDatabaseWalletCommandOutput,
  CreateAutonomousDatabaseWalletCommand,
} from "./commands/CreateAutonomousDatabaseWalletCommand";
import {
  type CreateCloudAutonomousVmClusterCommandInput,
  type CreateCloudAutonomousVmClusterCommandOutput,
  CreateCloudAutonomousVmClusterCommand,
} from "./commands/CreateCloudAutonomousVmClusterCommand";
import {
  type CreateCloudExadataInfrastructureCommandInput,
  type CreateCloudExadataInfrastructureCommandOutput,
  CreateCloudExadataInfrastructureCommand,
} from "./commands/CreateCloudExadataInfrastructureCommand";
import {
  type CreateCloudVmClusterCommandInput,
  type CreateCloudVmClusterCommandOutput,
  CreateCloudVmClusterCommand,
} from "./commands/CreateCloudVmClusterCommand";
import {
  type CreateOdbNetworkCommandInput,
  type CreateOdbNetworkCommandOutput,
  CreateOdbNetworkCommand,
} from "./commands/CreateOdbNetworkCommand";
import {
  type CreateOdbPeeringConnectionCommandInput,
  type CreateOdbPeeringConnectionCommandOutput,
  CreateOdbPeeringConnectionCommand,
} from "./commands/CreateOdbPeeringConnectionCommand";
import {
  type DeleteAutonomousDatabaseBackupCommandInput,
  type DeleteAutonomousDatabaseBackupCommandOutput,
  DeleteAutonomousDatabaseBackupCommand,
} from "./commands/DeleteAutonomousDatabaseBackupCommand";
import {
  type DeleteAutonomousDatabaseCommandInput,
  type DeleteAutonomousDatabaseCommandOutput,
  DeleteAutonomousDatabaseCommand,
} from "./commands/DeleteAutonomousDatabaseCommand";
import {
  type DeleteCloudAutonomousVmClusterCommandInput,
  type DeleteCloudAutonomousVmClusterCommandOutput,
  DeleteCloudAutonomousVmClusterCommand,
} from "./commands/DeleteCloudAutonomousVmClusterCommand";
import {
  type DeleteCloudExadataInfrastructureCommandInput,
  type DeleteCloudExadataInfrastructureCommandOutput,
  DeleteCloudExadataInfrastructureCommand,
} from "./commands/DeleteCloudExadataInfrastructureCommand";
import {
  type DeleteCloudVmClusterCommandInput,
  type DeleteCloudVmClusterCommandOutput,
  DeleteCloudVmClusterCommand,
} from "./commands/DeleteCloudVmClusterCommand";
import {
  type DeleteOdbNetworkCommandInput,
  type DeleteOdbNetworkCommandOutput,
  DeleteOdbNetworkCommand,
} from "./commands/DeleteOdbNetworkCommand";
import {
  type DeleteOdbPeeringConnectionCommandInput,
  type DeleteOdbPeeringConnectionCommandOutput,
  DeleteOdbPeeringConnectionCommand,
} from "./commands/DeleteOdbPeeringConnectionCommand";
import {
  type DisassociateIamRoleFromResourceCommandInput,
  type DisassociateIamRoleFromResourceCommandOutput,
  DisassociateIamRoleFromResourceCommand,
} from "./commands/DisassociateIamRoleFromResourceCommand";
import {
  type FailoverAutonomousDatabaseCommandInput,
  type FailoverAutonomousDatabaseCommandOutput,
  FailoverAutonomousDatabaseCommand,
} from "./commands/FailoverAutonomousDatabaseCommand";
import {
  type GetAutonomousDatabaseBackupCommandInput,
  type GetAutonomousDatabaseBackupCommandOutput,
  GetAutonomousDatabaseBackupCommand,
} from "./commands/GetAutonomousDatabaseBackupCommand";
import {
  type GetAutonomousDatabaseCommandInput,
  type GetAutonomousDatabaseCommandOutput,
  GetAutonomousDatabaseCommand,
} from "./commands/GetAutonomousDatabaseCommand";
import {
  type GetAutonomousDatabaseWalletDetailsCommandInput,
  type GetAutonomousDatabaseWalletDetailsCommandOutput,
  GetAutonomousDatabaseWalletDetailsCommand,
} from "./commands/GetAutonomousDatabaseWalletDetailsCommand";
import {
  type GetCloudAutonomousVmClusterCommandInput,
  type GetCloudAutonomousVmClusterCommandOutput,
  GetCloudAutonomousVmClusterCommand,
} from "./commands/GetCloudAutonomousVmClusterCommand";
import {
  type GetCloudExadataInfrastructureCommandInput,
  type GetCloudExadataInfrastructureCommandOutput,
  GetCloudExadataInfrastructureCommand,
} from "./commands/GetCloudExadataInfrastructureCommand";
import {
  type GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
  type GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput,
  GetCloudExadataInfrastructureUnallocatedResourcesCommand,
} from "./commands/GetCloudExadataInfrastructureUnallocatedResourcesCommand";
import {
  type GetCloudVmClusterCommandInput,
  type GetCloudVmClusterCommandOutput,
  GetCloudVmClusterCommand,
} from "./commands/GetCloudVmClusterCommand";
import { type GetDbNodeCommandInput, type GetDbNodeCommandOutput, GetDbNodeCommand } from "./commands/GetDbNodeCommand";
import {
  type GetDbServerCommandInput,
  type GetDbServerCommandOutput,
  GetDbServerCommand,
} from "./commands/GetDbServerCommand";
import {
  type GetOciOnboardingStatusCommandInput,
  type GetOciOnboardingStatusCommandOutput,
  GetOciOnboardingStatusCommand,
} from "./commands/GetOciOnboardingStatusCommand";
import {
  type GetOdbNetworkCommandInput,
  type GetOdbNetworkCommandOutput,
  GetOdbNetworkCommand,
} from "./commands/GetOdbNetworkCommand";
import {
  type GetOdbPeeringConnectionCommandInput,
  type GetOdbPeeringConnectionCommandOutput,
  GetOdbPeeringConnectionCommand,
} from "./commands/GetOdbPeeringConnectionCommand";
import {
  type InitializeServiceCommandInput,
  type InitializeServiceCommandOutput,
  InitializeServiceCommand,
} from "./commands/InitializeServiceCommand";
import {
  type ListAutonomousDatabaseBackupsCommandInput,
  type ListAutonomousDatabaseBackupsCommandOutput,
  ListAutonomousDatabaseBackupsCommand,
} from "./commands/ListAutonomousDatabaseBackupsCommand";
import {
  type ListAutonomousDatabaseCharacterSetsCommandInput,
  type ListAutonomousDatabaseCharacterSetsCommandOutput,
  ListAutonomousDatabaseCharacterSetsCommand,
} from "./commands/ListAutonomousDatabaseCharacterSetsCommand";
import {
  type ListAutonomousDatabaseClonesCommandInput,
  type ListAutonomousDatabaseClonesCommandOutput,
  ListAutonomousDatabaseClonesCommand,
} from "./commands/ListAutonomousDatabaseClonesCommand";
import {
  type ListAutonomousDatabasePeersCommandInput,
  type ListAutonomousDatabasePeersCommandOutput,
  ListAutonomousDatabasePeersCommand,
} from "./commands/ListAutonomousDatabasePeersCommand";
import {
  type ListAutonomousDatabasesCommandInput,
  type ListAutonomousDatabasesCommandOutput,
  ListAutonomousDatabasesCommand,
} from "./commands/ListAutonomousDatabasesCommand";
import {
  type ListAutonomousDatabaseVersionsCommandInput,
  type ListAutonomousDatabaseVersionsCommandOutput,
  ListAutonomousDatabaseVersionsCommand,
} from "./commands/ListAutonomousDatabaseVersionsCommand";
import {
  type ListAutonomousVirtualMachinesCommandInput,
  type ListAutonomousVirtualMachinesCommandOutput,
  ListAutonomousVirtualMachinesCommand,
} from "./commands/ListAutonomousVirtualMachinesCommand";
import {
  type ListCloudAutonomousVmClustersCommandInput,
  type ListCloudAutonomousVmClustersCommandOutput,
  ListCloudAutonomousVmClustersCommand,
} from "./commands/ListCloudAutonomousVmClustersCommand";
import {
  type ListCloudExadataInfrastructuresCommandInput,
  type ListCloudExadataInfrastructuresCommandOutput,
  ListCloudExadataInfrastructuresCommand,
} from "./commands/ListCloudExadataInfrastructuresCommand";
import {
  type ListCloudVmClustersCommandInput,
  type ListCloudVmClustersCommandOutput,
  ListCloudVmClustersCommand,
} from "./commands/ListCloudVmClustersCommand";
import {
  type ListDbNodesCommandInput,
  type ListDbNodesCommandOutput,
  ListDbNodesCommand,
} from "./commands/ListDbNodesCommand";
import {
  type ListDbServersCommandInput,
  type ListDbServersCommandOutput,
  ListDbServersCommand,
} from "./commands/ListDbServersCommand";
import {
  type ListDbSystemShapesCommandInput,
  type ListDbSystemShapesCommandOutput,
  ListDbSystemShapesCommand,
} from "./commands/ListDbSystemShapesCommand";
import {
  type ListGiVersionsCommandInput,
  type ListGiVersionsCommandOutput,
  ListGiVersionsCommand,
} from "./commands/ListGiVersionsCommand";
import {
  type ListOdbNetworksCommandInput,
  type ListOdbNetworksCommandOutput,
  ListOdbNetworksCommand,
} from "./commands/ListOdbNetworksCommand";
import {
  type ListOdbPeeringConnectionsCommandInput,
  type ListOdbPeeringConnectionsCommandOutput,
  ListOdbPeeringConnectionsCommand,
} from "./commands/ListOdbPeeringConnectionsCommand";
import {
  type ListSystemVersionsCommandInput,
  type ListSystemVersionsCommandOutput,
  ListSystemVersionsCommand,
} from "./commands/ListSystemVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RebootAutonomousDatabaseCommandInput,
  type RebootAutonomousDatabaseCommandOutput,
  RebootAutonomousDatabaseCommand,
} from "./commands/RebootAutonomousDatabaseCommand";
import {
  type RebootDbNodeCommandInput,
  type RebootDbNodeCommandOutput,
  RebootDbNodeCommand,
} from "./commands/RebootDbNodeCommand";
import {
  type RestoreAutonomousDatabaseCommandInput,
  type RestoreAutonomousDatabaseCommandOutput,
  RestoreAutonomousDatabaseCommand,
} from "./commands/RestoreAutonomousDatabaseCommand";
import {
  type ShrinkAutonomousDatabaseCommandInput,
  type ShrinkAutonomousDatabaseCommandOutput,
  ShrinkAutonomousDatabaseCommand,
} from "./commands/ShrinkAutonomousDatabaseCommand";
import {
  type StartAutonomousDatabaseCommandInput,
  type StartAutonomousDatabaseCommandOutput,
  StartAutonomousDatabaseCommand,
} from "./commands/StartAutonomousDatabaseCommand";
import {
  type StartDbNodeCommandInput,
  type StartDbNodeCommandOutput,
  StartDbNodeCommand,
} from "./commands/StartDbNodeCommand";
import {
  type StopAutonomousDatabaseCommandInput,
  type StopAutonomousDatabaseCommandOutput,
  StopAutonomousDatabaseCommand,
} from "./commands/StopAutonomousDatabaseCommand";
import {
  type StopDbNodeCommandInput,
  type StopDbNodeCommandOutput,
  StopDbNodeCommand,
} from "./commands/StopDbNodeCommand";
import {
  type SwitchoverAutonomousDatabaseCommandInput,
  type SwitchoverAutonomousDatabaseCommandOutput,
  SwitchoverAutonomousDatabaseCommand,
} from "./commands/SwitchoverAutonomousDatabaseCommand";
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
  type UpdateAutonomousDatabaseBackupCommandInput,
  type UpdateAutonomousDatabaseBackupCommandOutput,
  UpdateAutonomousDatabaseBackupCommand,
} from "./commands/UpdateAutonomousDatabaseBackupCommand";
import {
  type UpdateAutonomousDatabaseCommandInput,
  type UpdateAutonomousDatabaseCommandOutput,
  UpdateAutonomousDatabaseCommand,
} from "./commands/UpdateAutonomousDatabaseCommand";
import {
  type UpdateCloudExadataInfrastructureCommandInput,
  type UpdateCloudExadataInfrastructureCommandOutput,
  UpdateCloudExadataInfrastructureCommand,
} from "./commands/UpdateCloudExadataInfrastructureCommand";
import {
  type UpdateOdbNetworkCommandInput,
  type UpdateOdbNetworkCommandOutput,
  UpdateOdbNetworkCommand,
} from "./commands/UpdateOdbNetworkCommand";
import {
  type UpdateOdbPeeringConnectionCommandInput,
  type UpdateOdbPeeringConnectionCommandOutput,
  UpdateOdbPeeringConnectionCommand,
} from "./commands/UpdateOdbPeeringConnectionCommand";
import { OdbClient } from "./OdbClient";
import { paginateListAutonomousDatabaseBackups } from "./pagination/ListAutonomousDatabaseBackupsPaginator";
import { paginateListAutonomousDatabaseCharacterSets } from "./pagination/ListAutonomousDatabaseCharacterSetsPaginator";
import { paginateListAutonomousDatabaseClones } from "./pagination/ListAutonomousDatabaseClonesPaginator";
import { paginateListAutonomousDatabasePeers } from "./pagination/ListAutonomousDatabasePeersPaginator";
import { paginateListAutonomousDatabases } from "./pagination/ListAutonomousDatabasesPaginator";
import { paginateListAutonomousDatabaseVersions } from "./pagination/ListAutonomousDatabaseVersionsPaginator";
import { paginateListAutonomousVirtualMachines } from "./pagination/ListAutonomousVirtualMachinesPaginator";
import { paginateListCloudAutonomousVmClusters } from "./pagination/ListCloudAutonomousVmClustersPaginator";
import { paginateListCloudExadataInfrastructures } from "./pagination/ListCloudExadataInfrastructuresPaginator";
import { paginateListCloudVmClusters } from "./pagination/ListCloudVmClustersPaginator";
import { paginateListDbNodes } from "./pagination/ListDbNodesPaginator";
import { paginateListDbServers } from "./pagination/ListDbServersPaginator";
import { paginateListDbSystemShapes } from "./pagination/ListDbSystemShapesPaginator";
import { paginateListGiVersions } from "./pagination/ListGiVersionsPaginator";
import { paginateListOdbNetworks } from "./pagination/ListOdbNetworksPaginator";
import { paginateListOdbPeeringConnections } from "./pagination/ListOdbPeeringConnectionsPaginator";
import { paginateListSystemVersions } from "./pagination/ListSystemVersionsPaginator";

const commands = {
  AcceptMarketplaceRegistrationCommand,
  AssociateIamRoleToResourceCommand,
  CreateAutonomousDatabaseCommand,
  CreateAutonomousDatabaseBackupCommand,
  CreateAutonomousDatabaseWalletCommand,
  CreateCloudAutonomousVmClusterCommand,
  CreateCloudExadataInfrastructureCommand,
  CreateCloudVmClusterCommand,
  CreateOdbNetworkCommand,
  CreateOdbPeeringConnectionCommand,
  DeleteAutonomousDatabaseCommand,
  DeleteAutonomousDatabaseBackupCommand,
  DeleteCloudAutonomousVmClusterCommand,
  DeleteCloudExadataInfrastructureCommand,
  DeleteCloudVmClusterCommand,
  DeleteOdbNetworkCommand,
  DeleteOdbPeeringConnectionCommand,
  DisassociateIamRoleFromResourceCommand,
  FailoverAutonomousDatabaseCommand,
  GetAutonomousDatabaseCommand,
  GetAutonomousDatabaseBackupCommand,
  GetAutonomousDatabaseWalletDetailsCommand,
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
  ListAutonomousDatabaseBackupsCommand,
  ListAutonomousDatabaseCharacterSetsCommand,
  ListAutonomousDatabaseClonesCommand,
  ListAutonomousDatabasePeersCommand,
  ListAutonomousDatabasesCommand,
  ListAutonomousDatabaseVersionsCommand,
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
  RebootAutonomousDatabaseCommand,
  RebootDbNodeCommand,
  RestoreAutonomousDatabaseCommand,
  ShrinkAutonomousDatabaseCommand,
  StartAutonomousDatabaseCommand,
  StartDbNodeCommand,
  StopAutonomousDatabaseCommand,
  StopDbNodeCommand,
  SwitchoverAutonomousDatabaseCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAutonomousDatabaseCommand,
  UpdateAutonomousDatabaseBackupCommand,
  UpdateCloudExadataInfrastructureCommand,
  UpdateOdbNetworkCommand,
  UpdateOdbPeeringConnectionCommand,
};
const paginators = {
  paginateListAutonomousDatabaseBackups,
  paginateListAutonomousDatabaseCharacterSets,
  paginateListAutonomousDatabaseClones,
  paginateListAutonomousDatabasePeers,
  paginateListAutonomousDatabases,
  paginateListAutonomousDatabaseVersions,
  paginateListAutonomousVirtualMachines,
  paginateListCloudAutonomousVmClusters,
  paginateListCloudExadataInfrastructures,
  paginateListCloudVmClusters,
  paginateListDbNodes,
  paginateListDbServers,
  paginateListDbSystemShapes,
  paginateListGiVersions,
  paginateListOdbNetworks,
  paginateListOdbPeeringConnections,
  paginateListSystemVersions,
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
   * @see {@link AssociateIamRoleToResourceCommand}
   */
  associateIamRoleToResource(
    args: AssociateIamRoleToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIamRoleToResourceCommandOutput>;
  associateIamRoleToResource(
    args: AssociateIamRoleToResourceCommandInput,
    cb: (err: any, data?: AssociateIamRoleToResourceCommandOutput) => void
  ): void;
  associateIamRoleToResource(
    args: AssociateIamRoleToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIamRoleToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutonomousDatabaseCommand}
   */
  createAutonomousDatabase(): Promise<CreateAutonomousDatabaseCommandOutput>;
  createAutonomousDatabase(
    args: CreateAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutonomousDatabaseCommandOutput>;
  createAutonomousDatabase(
    args: CreateAutonomousDatabaseCommandInput,
    cb: (err: any, data?: CreateAutonomousDatabaseCommandOutput) => void
  ): void;
  createAutonomousDatabase(
    args: CreateAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutonomousDatabaseBackupCommand}
   */
  createAutonomousDatabaseBackup(
    args: CreateAutonomousDatabaseBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutonomousDatabaseBackupCommandOutput>;
  createAutonomousDatabaseBackup(
    args: CreateAutonomousDatabaseBackupCommandInput,
    cb: (err: any, data?: CreateAutonomousDatabaseBackupCommandOutput) => void
  ): void;
  createAutonomousDatabaseBackup(
    args: CreateAutonomousDatabaseBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutonomousDatabaseBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutonomousDatabaseWalletCommand}
   */
  createAutonomousDatabaseWallet(
    args: CreateAutonomousDatabaseWalletCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutonomousDatabaseWalletCommandOutput>;
  createAutonomousDatabaseWallet(
    args: CreateAutonomousDatabaseWalletCommandInput,
    cb: (err: any, data?: CreateAutonomousDatabaseWalletCommandOutput) => void
  ): void;
  createAutonomousDatabaseWallet(
    args: CreateAutonomousDatabaseWalletCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutonomousDatabaseWalletCommandOutput) => void
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
   * @see {@link DeleteAutonomousDatabaseCommand}
   */
  deleteAutonomousDatabase(
    args: DeleteAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutonomousDatabaseCommandOutput>;
  deleteAutonomousDatabase(
    args: DeleteAutonomousDatabaseCommandInput,
    cb: (err: any, data?: DeleteAutonomousDatabaseCommandOutput) => void
  ): void;
  deleteAutonomousDatabase(
    args: DeleteAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAutonomousDatabaseBackupCommand}
   */
  deleteAutonomousDatabaseBackup(
    args: DeleteAutonomousDatabaseBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutonomousDatabaseBackupCommandOutput>;
  deleteAutonomousDatabaseBackup(
    args: DeleteAutonomousDatabaseBackupCommandInput,
    cb: (err: any, data?: DeleteAutonomousDatabaseBackupCommandOutput) => void
  ): void;
  deleteAutonomousDatabaseBackup(
    args: DeleteAutonomousDatabaseBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutonomousDatabaseBackupCommandOutput) => void
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
   * @see {@link DisassociateIamRoleFromResourceCommand}
   */
  disassociateIamRoleFromResource(
    args: DisassociateIamRoleFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIamRoleFromResourceCommandOutput>;
  disassociateIamRoleFromResource(
    args: DisassociateIamRoleFromResourceCommandInput,
    cb: (err: any, data?: DisassociateIamRoleFromResourceCommandOutput) => void
  ): void;
  disassociateIamRoleFromResource(
    args: DisassociateIamRoleFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIamRoleFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverAutonomousDatabaseCommand}
   */
  failoverAutonomousDatabase(
    args: FailoverAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverAutonomousDatabaseCommandOutput>;
  failoverAutonomousDatabase(
    args: FailoverAutonomousDatabaseCommandInput,
    cb: (err: any, data?: FailoverAutonomousDatabaseCommandOutput) => void
  ): void;
  failoverAutonomousDatabase(
    args: FailoverAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutonomousDatabaseCommand}
   */
  getAutonomousDatabase(
    args: GetAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutonomousDatabaseCommandOutput>;
  getAutonomousDatabase(
    args: GetAutonomousDatabaseCommandInput,
    cb: (err: any, data?: GetAutonomousDatabaseCommandOutput) => void
  ): void;
  getAutonomousDatabase(
    args: GetAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutonomousDatabaseBackupCommand}
   */
  getAutonomousDatabaseBackup(
    args: GetAutonomousDatabaseBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutonomousDatabaseBackupCommandOutput>;
  getAutonomousDatabaseBackup(
    args: GetAutonomousDatabaseBackupCommandInput,
    cb: (err: any, data?: GetAutonomousDatabaseBackupCommandOutput) => void
  ): void;
  getAutonomousDatabaseBackup(
    args: GetAutonomousDatabaseBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutonomousDatabaseBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutonomousDatabaseWalletDetailsCommand}
   */
  getAutonomousDatabaseWalletDetails(
    args: GetAutonomousDatabaseWalletDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutonomousDatabaseWalletDetailsCommandOutput>;
  getAutonomousDatabaseWalletDetails(
    args: GetAutonomousDatabaseWalletDetailsCommandInput,
    cb: (err: any, data?: GetAutonomousDatabaseWalletDetailsCommandOutput) => void
  ): void;
  getAutonomousDatabaseWalletDetails(
    args: GetAutonomousDatabaseWalletDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutonomousDatabaseWalletDetailsCommandOutput) => void
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
  getDbNode(
    args: GetDbNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDbNodeCommandOutput>;
  getDbNode(
    args: GetDbNodeCommandInput,
    cb: (err: any, data?: GetDbNodeCommandOutput) => void
  ): void;
  getDbNode(
    args: GetDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDbNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbServerCommand}
   */
  getDbServer(
    args: GetDbServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDbServerCommandOutput>;
  getDbServer(
    args: GetDbServerCommandInput,
    cb: (err: any, data?: GetDbServerCommandOutput) => void
  ): void;
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
  getOdbNetwork(
    args: GetOdbNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOdbNetworkCommandOutput>;
  getOdbNetwork(
    args: GetOdbNetworkCommandInput,
    cb: (err: any, data?: GetOdbNetworkCommandOutput) => void
  ): void;
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
   * @see {@link ListAutonomousDatabaseBackupsCommand}
   */
  listAutonomousDatabaseBackups(
    args: ListAutonomousDatabaseBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutonomousDatabaseBackupsCommandOutput>;
  listAutonomousDatabaseBackups(
    args: ListAutonomousDatabaseBackupsCommandInput,
    cb: (err: any, data?: ListAutonomousDatabaseBackupsCommandOutput) => void
  ): void;
  listAutonomousDatabaseBackups(
    args: ListAutonomousDatabaseBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutonomousDatabaseBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutonomousDatabaseCharacterSetsCommand}
   */
  listAutonomousDatabaseCharacterSets(): Promise<ListAutonomousDatabaseCharacterSetsCommandOutput>;
  listAutonomousDatabaseCharacterSets(
    args: ListAutonomousDatabaseCharacterSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutonomousDatabaseCharacterSetsCommandOutput>;
  listAutonomousDatabaseCharacterSets(
    args: ListAutonomousDatabaseCharacterSetsCommandInput,
    cb: (err: any, data?: ListAutonomousDatabaseCharacterSetsCommandOutput) => void
  ): void;
  listAutonomousDatabaseCharacterSets(
    args: ListAutonomousDatabaseCharacterSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutonomousDatabaseCharacterSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutonomousDatabaseClonesCommand}
   */
  listAutonomousDatabaseClones(
    args: ListAutonomousDatabaseClonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutonomousDatabaseClonesCommandOutput>;
  listAutonomousDatabaseClones(
    args: ListAutonomousDatabaseClonesCommandInput,
    cb: (err: any, data?: ListAutonomousDatabaseClonesCommandOutput) => void
  ): void;
  listAutonomousDatabaseClones(
    args: ListAutonomousDatabaseClonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutonomousDatabaseClonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutonomousDatabasePeersCommand}
   */
  listAutonomousDatabasePeers(
    args: ListAutonomousDatabasePeersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutonomousDatabasePeersCommandOutput>;
  listAutonomousDatabasePeers(
    args: ListAutonomousDatabasePeersCommandInput,
    cb: (err: any, data?: ListAutonomousDatabasePeersCommandOutput) => void
  ): void;
  listAutonomousDatabasePeers(
    args: ListAutonomousDatabasePeersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutonomousDatabasePeersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutonomousDatabasesCommand}
   */
  listAutonomousDatabases(): Promise<ListAutonomousDatabasesCommandOutput>;
  listAutonomousDatabases(
    args: ListAutonomousDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutonomousDatabasesCommandOutput>;
  listAutonomousDatabases(
    args: ListAutonomousDatabasesCommandInput,
    cb: (err: any, data?: ListAutonomousDatabasesCommandOutput) => void
  ): void;
  listAutonomousDatabases(
    args: ListAutonomousDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutonomousDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutonomousDatabaseVersionsCommand}
   */
  listAutonomousDatabaseVersions(): Promise<ListAutonomousDatabaseVersionsCommandOutput>;
  listAutonomousDatabaseVersions(
    args: ListAutonomousDatabaseVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutonomousDatabaseVersionsCommandOutput>;
  listAutonomousDatabaseVersions(
    args: ListAutonomousDatabaseVersionsCommandInput,
    cb: (err: any, data?: ListAutonomousDatabaseVersionsCommandOutput) => void
  ): void;
  listAutonomousDatabaseVersions(
    args: ListAutonomousDatabaseVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutonomousDatabaseVersionsCommandOutput) => void
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
  listDbNodes(
    args: ListDbNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDbNodesCommandOutput>;
  listDbNodes(
    args: ListDbNodesCommandInput,
    cb: (err: any, data?: ListDbNodesCommandOutput) => void
  ): void;
  listDbNodes(
    args: ListDbNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbServersCommand}
   */
  listDbServers(
    args: ListDbServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDbServersCommandOutput>;
  listDbServers(
    args: ListDbServersCommandInput,
    cb: (err: any, data?: ListDbServersCommandOutput) => void
  ): void;
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
  listGiVersions(
    args: ListGiVersionsCommandInput,
    cb: (err: any, data?: ListGiVersionsCommandOutput) => void
  ): void;
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
  listOdbNetworks(
    args: ListOdbNetworksCommandInput,
    cb: (err: any, data?: ListOdbNetworksCommandOutput) => void
  ): void;
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
   * @see {@link RebootAutonomousDatabaseCommand}
   */
  rebootAutonomousDatabase(
    args: RebootAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootAutonomousDatabaseCommandOutput>;
  rebootAutonomousDatabase(
    args: RebootAutonomousDatabaseCommandInput,
    cb: (err: any, data?: RebootAutonomousDatabaseCommandOutput) => void
  ): void;
  rebootAutonomousDatabase(
    args: RebootAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDbNodeCommand}
   */
  rebootDbNode(
    args: RebootDbNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDbNodeCommandOutput>;
  rebootDbNode(
    args: RebootDbNodeCommandInput,
    cb: (err: any, data?: RebootDbNodeCommandOutput) => void
  ): void;
  rebootDbNode(
    args: RebootDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDbNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreAutonomousDatabaseCommand}
   */
  restoreAutonomousDatabase(
    args: RestoreAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreAutonomousDatabaseCommandOutput>;
  restoreAutonomousDatabase(
    args: RestoreAutonomousDatabaseCommandInput,
    cb: (err: any, data?: RestoreAutonomousDatabaseCommandOutput) => void
  ): void;
  restoreAutonomousDatabase(
    args: RestoreAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link ShrinkAutonomousDatabaseCommand}
   */
  shrinkAutonomousDatabase(
    args: ShrinkAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ShrinkAutonomousDatabaseCommandOutput>;
  shrinkAutonomousDatabase(
    args: ShrinkAutonomousDatabaseCommandInput,
    cb: (err: any, data?: ShrinkAutonomousDatabaseCommandOutput) => void
  ): void;
  shrinkAutonomousDatabase(
    args: ShrinkAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ShrinkAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAutonomousDatabaseCommand}
   */
  startAutonomousDatabase(
    args: StartAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAutonomousDatabaseCommandOutput>;
  startAutonomousDatabase(
    args: StartAutonomousDatabaseCommandInput,
    cb: (err: any, data?: StartAutonomousDatabaseCommandOutput) => void
  ): void;
  startAutonomousDatabase(
    args: StartAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDbNodeCommand}
   */
  startDbNode(
    args: StartDbNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDbNodeCommandOutput>;
  startDbNode(
    args: StartDbNodeCommandInput,
    cb: (err: any, data?: StartDbNodeCommandOutput) => void
  ): void;
  startDbNode(
    args: StartDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDbNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAutonomousDatabaseCommand}
   */
  stopAutonomousDatabase(
    args: StopAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAutonomousDatabaseCommandOutput>;
  stopAutonomousDatabase(
    args: StopAutonomousDatabaseCommandInput,
    cb: (err: any, data?: StopAutonomousDatabaseCommandOutput) => void
  ): void;
  stopAutonomousDatabase(
    args: StopAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDbNodeCommand}
   */
  stopDbNode(
    args: StopDbNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDbNodeCommandOutput>;
  stopDbNode(
    args: StopDbNodeCommandInput,
    cb: (err: any, data?: StopDbNodeCommandOutput) => void
  ): void;
  stopDbNode(
    args: StopDbNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDbNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverAutonomousDatabaseCommand}
   */
  switchoverAutonomousDatabase(
    args: SwitchoverAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwitchoverAutonomousDatabaseCommandOutput>;
  switchoverAutonomousDatabase(
    args: SwitchoverAutonomousDatabaseCommandInput,
    cb: (err: any, data?: SwitchoverAutonomousDatabaseCommandOutput) => void
  ): void;
  switchoverAutonomousDatabase(
    args: SwitchoverAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwitchoverAutonomousDatabaseCommandOutput) => void
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
   * @see {@link UpdateAutonomousDatabaseCommand}
   */
  updateAutonomousDatabase(
    args: UpdateAutonomousDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutonomousDatabaseCommandOutput>;
  updateAutonomousDatabase(
    args: UpdateAutonomousDatabaseCommandInput,
    cb: (err: any, data?: UpdateAutonomousDatabaseCommandOutput) => void
  ): void;
  updateAutonomousDatabase(
    args: UpdateAutonomousDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutonomousDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAutonomousDatabaseBackupCommand}
   */
  updateAutonomousDatabaseBackup(
    args: UpdateAutonomousDatabaseBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutonomousDatabaseBackupCommandOutput>;
  updateAutonomousDatabaseBackup(
    args: UpdateAutonomousDatabaseBackupCommandInput,
    cb: (err: any, data?: UpdateAutonomousDatabaseBackupCommandOutput) => void
  ): void;
  updateAutonomousDatabaseBackup(
    args: UpdateAutonomousDatabaseBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutonomousDatabaseBackupCommandOutput) => void
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

  /**
   * @see {@link UpdateOdbPeeringConnectionCommand}
   */
  updateOdbPeeringConnection(
    args: UpdateOdbPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOdbPeeringConnectionCommandOutput>;
  updateOdbPeeringConnection(
    args: UpdateOdbPeeringConnectionCommandInput,
    cb: (err: any, data?: UpdateOdbPeeringConnectionCommandOutput) => void
  ): void;
  updateOdbPeeringConnection(
    args: UpdateOdbPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOdbPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutonomousDatabaseBackupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutonomousDatabaseBackupsCommandOutput}.
   */
  paginateListAutonomousDatabaseBackups(
    args: ListAutonomousDatabaseBackupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutonomousDatabaseBackupsCommandOutput>;

  /**
   * @see {@link ListAutonomousDatabaseCharacterSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutonomousDatabaseCharacterSetsCommandOutput}.
   */
  paginateListAutonomousDatabaseCharacterSets(
    args?: ListAutonomousDatabaseCharacterSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutonomousDatabaseCharacterSetsCommandOutput>;

  /**
   * @see {@link ListAutonomousDatabaseClonesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutonomousDatabaseClonesCommandOutput}.
   */
  paginateListAutonomousDatabaseClones(
    args: ListAutonomousDatabaseClonesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutonomousDatabaseClonesCommandOutput>;

  /**
   * @see {@link ListAutonomousDatabasePeersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutonomousDatabasePeersCommandOutput}.
   */
  paginateListAutonomousDatabasePeers(
    args: ListAutonomousDatabasePeersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutonomousDatabasePeersCommandOutput>;

  /**
   * @see {@link ListAutonomousDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutonomousDatabasesCommandOutput}.
   */
  paginateListAutonomousDatabases(
    args?: ListAutonomousDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutonomousDatabasesCommandOutput>;

  /**
   * @see {@link ListAutonomousDatabaseVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutonomousDatabaseVersionsCommandOutput}.
   */
  paginateListAutonomousDatabaseVersions(
    args?: ListAutonomousDatabaseVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutonomousDatabaseVersionsCommandOutput>;

  /**
   * @see {@link ListAutonomousVirtualMachinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutonomousVirtualMachinesCommandOutput}.
   */
  paginateListAutonomousVirtualMachines(
    args: ListAutonomousVirtualMachinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutonomousVirtualMachinesCommandOutput>;

  /**
   * @see {@link ListCloudAutonomousVmClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCloudAutonomousVmClustersCommandOutput}.
   */
  paginateListCloudAutonomousVmClusters(
    args?: ListCloudAutonomousVmClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCloudAutonomousVmClustersCommandOutput>;

  /**
   * @see {@link ListCloudExadataInfrastructuresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCloudExadataInfrastructuresCommandOutput}.
   */
  paginateListCloudExadataInfrastructures(
    args?: ListCloudExadataInfrastructuresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCloudExadataInfrastructuresCommandOutput>;

  /**
   * @see {@link ListCloudVmClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCloudVmClustersCommandOutput}.
   */
  paginateListCloudVmClusters(
    args?: ListCloudVmClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCloudVmClustersCommandOutput>;

  /**
   * @see {@link ListDbNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbNodesCommandOutput}.
   */
  paginateListDbNodes(
    args: ListDbNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbNodesCommandOutput>;

  /**
   * @see {@link ListDbServersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbServersCommandOutput}.
   */
  paginateListDbServers(
    args: ListDbServersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbServersCommandOutput>;

  /**
   * @see {@link ListDbSystemShapesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbSystemShapesCommandOutput}.
   */
  paginateListDbSystemShapes(
    args?: ListDbSystemShapesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbSystemShapesCommandOutput>;

  /**
   * @see {@link ListGiVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGiVersionsCommandOutput}.
   */
  paginateListGiVersions(
    args?: ListGiVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGiVersionsCommandOutput>;

  /**
   * @see {@link ListOdbNetworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOdbNetworksCommandOutput}.
   */
  paginateListOdbNetworks(
    args?: ListOdbNetworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOdbNetworksCommandOutput>;

  /**
   * @see {@link ListOdbPeeringConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOdbPeeringConnectionsCommandOutput}.
   */
  paginateListOdbPeeringConnections(
    args?: ListOdbPeeringConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOdbPeeringConnectionsCommandOutput>;

  /**
   * @see {@link ListSystemVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSystemVersionsCommandOutput}.
   */
  paginateListSystemVersions(
    args: ListSystemVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSystemVersionsCommandOutput>;
}

/**
 * <p>Oracle Database@Amazon Web Services is an offering that enables you to access Oracle Exadata infrastructure managed by Oracle Cloud Infrastructure (OCI) inside Amazon Web Services data centers. You can migrate your Oracle Exadata workloads, establish low-latency connectivity with applications running on Amazon Web Services, and integrate with Amazon Web Services services. For example, you can run application servers in a Virtual Private Cloud (VPC) and access an Oracle Exadata system running in Oracle Database@Amazon Web Services. You can get started with Oracle Database@Amazon Web Services by using the familiar Amazon Web Services Management Console, APIs, or CLI.</p> <p>This interface reference for Oracle Database@Amazon Web Services contains documentation for a programming or command line interface that you can use to manage Oracle Database@Amazon Web Services. Oracle Database@Amazon Web Services is asynchronous, which means that some interfaces might require techniques such as polling or callback functions to determine when a command has been applied. The reference structure is as follows.</p> <p> <b>Oracle Database@Amazon Web Services API Reference</b> </p> <ul> <li> <p>For the alphabetical list of API actions, see <a href="https://docs.aws.amazon.com/odb/latest/APIReference/API_Operations.html">API Actions</a>.</p> </li> <li> <p>For the alphabetical list of data types, see <a href="https://docs.aws.amazon.com/odb/latest/APIReference/API_Types.html">Data Types</a>.</p> </li> <li> <p>For a list of common query parameters, see <a href="https://docs.aws.amazon.com/odb/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p> </li> <li> <p>For descriptions of the error codes, see <a href="https://docs.aws.amazon.com/odb/latest/APIReference/CommonErrors.html">Common Errors</a>.</p> </li> </ul>
 * @public
 */
export class Odb extends OdbClient implements Odb {}
createAggregatedClient(commands, Odb, { paginators });
