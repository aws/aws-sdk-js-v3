// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptInboundConnectionCommand,
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
} from "./commands/AcceptInboundConnectionCommand";
import {
  AddDataSourceCommand,
  AddDataSourceCommandInput,
  AddDataSourceCommandOutput,
} from "./commands/AddDataSourceCommand";
import {
  AddDirectQueryDataSourceCommand,
  AddDirectQueryDataSourceCommandInput,
  AddDirectQueryDataSourceCommandOutput,
} from "./commands/AddDirectQueryDataSourceCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  AssociatePackageCommand,
  AssociatePackageCommandInput,
  AssociatePackageCommandOutput,
} from "./commands/AssociatePackageCommand";
import {
  AssociatePackagesCommand,
  AssociatePackagesCommandInput,
  AssociatePackagesCommandOutput,
} from "./commands/AssociatePackagesCommand";
import {
  AuthorizeVpcEndpointAccessCommand,
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "./commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelDomainConfigChangeCommand,
  CancelDomainConfigChangeCommandInput,
  CancelDomainConfigChangeCommandOutput,
} from "./commands/CancelDomainConfigChangeCommand";
import {
  CancelServiceSoftwareUpdateCommand,
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelServiceSoftwareUpdateCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateOutboundConnectionCommand,
  CreateOutboundConnectionCommandInput,
  CreateOutboundConnectionCommandOutput,
} from "./commands/CreateOutboundConnectionCommand";
import {
  CreatePackageCommand,
  CreatePackageCommandInput,
  CreatePackageCommandOutput,
} from "./commands/CreatePackageCommand";
import {
  CreateVpcEndpointCommand,
  CreateVpcEndpointCommandInput,
  CreateVpcEndpointCommandOutput,
} from "./commands/CreateVpcEndpointCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteDirectQueryDataSourceCommand,
  DeleteDirectQueryDataSourceCommandInput,
  DeleteDirectQueryDataSourceCommandOutput,
} from "./commands/DeleteDirectQueryDataSourceCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteInboundConnectionCommand,
  DeleteInboundConnectionCommandInput,
  DeleteInboundConnectionCommandOutput,
} from "./commands/DeleteInboundConnectionCommand";
import {
  DeleteOutboundConnectionCommand,
  DeleteOutboundConnectionCommandInput,
  DeleteOutboundConnectionCommandOutput,
} from "./commands/DeleteOutboundConnectionCommand";
import {
  DeletePackageCommand,
  DeletePackageCommandInput,
  DeletePackageCommandOutput,
} from "./commands/DeletePackageCommand";
import {
  DeleteVpcEndpointCommand,
  DeleteVpcEndpointCommandInput,
  DeleteVpcEndpointCommandOutput,
} from "./commands/DeleteVpcEndpointCommand";
import {
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "./commands/DescribeDomainAutoTunesCommand";
import {
  DescribeDomainChangeProgressCommand,
  DescribeDomainChangeProgressCommandInput,
  DescribeDomainChangeProgressCommandOutput,
} from "./commands/DescribeDomainChangeProgressCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
} from "./commands/DescribeDomainCommand";
import {
  DescribeDomainConfigCommand,
  DescribeDomainConfigCommandInput,
  DescribeDomainConfigCommandOutput,
} from "./commands/DescribeDomainConfigCommand";
import {
  DescribeDomainHealthCommand,
  DescribeDomainHealthCommandInput,
  DescribeDomainHealthCommandOutput,
} from "./commands/DescribeDomainHealthCommand";
import {
  DescribeDomainNodesCommand,
  DescribeDomainNodesCommandInput,
  DescribeDomainNodesCommandOutput,
} from "./commands/DescribeDomainNodesCommand";
import {
  DescribeDomainsCommand,
  DescribeDomainsCommandInput,
  DescribeDomainsCommandOutput,
} from "./commands/DescribeDomainsCommand";
import {
  DescribeDryRunProgressCommand,
  DescribeDryRunProgressCommandInput,
  DescribeDryRunProgressCommandOutput,
} from "./commands/DescribeDryRunProgressCommand";
import {
  DescribeInboundConnectionsCommand,
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput,
} from "./commands/DescribeInboundConnectionsCommand";
import {
  DescribeInstanceTypeLimitsCommand,
  DescribeInstanceTypeLimitsCommandInput,
  DescribeInstanceTypeLimitsCommandOutput,
} from "./commands/DescribeInstanceTypeLimitsCommand";
import {
  DescribeOutboundConnectionsCommand,
  DescribeOutboundConnectionsCommandInput,
  DescribeOutboundConnectionsCommandOutput,
} from "./commands/DescribeOutboundConnectionsCommand";
import {
  DescribePackagesCommand,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput,
} from "./commands/DescribePackagesCommand";
import {
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput,
} from "./commands/DescribeReservedInstanceOfferingsCommand";
import {
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "./commands/DescribeReservedInstancesCommand";
import {
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
import {
  DissociatePackageCommand,
  DissociatePackageCommandInput,
  DissociatePackageCommandOutput,
} from "./commands/DissociatePackageCommand";
import {
  DissociatePackagesCommand,
  DissociatePackagesCommandInput,
  DissociatePackagesCommandOutput,
} from "./commands/DissociatePackagesCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetCompatibleVersionsCommand,
  GetCompatibleVersionsCommandInput,
  GetCompatibleVersionsCommandOutput,
} from "./commands/GetCompatibleVersionsCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import {
  GetDefaultApplicationSettingCommand,
  GetDefaultApplicationSettingCommandInput,
  GetDefaultApplicationSettingCommandOutput,
} from "./commands/GetDefaultApplicationSettingCommand";
import {
  GetDirectQueryDataSourceCommand,
  GetDirectQueryDataSourceCommandInput,
  GetDirectQueryDataSourceCommandOutput,
} from "./commands/GetDirectQueryDataSourceCommand";
import {
  GetDomainMaintenanceStatusCommand,
  GetDomainMaintenanceStatusCommandInput,
  GetDomainMaintenanceStatusCommandOutput,
} from "./commands/GetDomainMaintenanceStatusCommand";
import {
  GetPackageVersionHistoryCommand,
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "./commands/GetPackageVersionHistoryCommand";
import {
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
} from "./commands/GetUpgradeHistoryCommand";
import {
  GetUpgradeStatusCommand,
  GetUpgradeStatusCommandInput,
  GetUpgradeStatusCommandOutput,
} from "./commands/GetUpgradeStatusCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListDirectQueryDataSourcesCommand,
  ListDirectQueryDataSourcesCommandInput,
  ListDirectQueryDataSourcesCommandOutput,
} from "./commands/ListDirectQueryDataSourcesCommand";
import {
  ListDomainMaintenancesCommand,
  ListDomainMaintenancesCommandInput,
  ListDomainMaintenancesCommandOutput,
} from "./commands/ListDomainMaintenancesCommand";
import {
  ListDomainNamesCommand,
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
} from "./commands/ListDomainNamesCommand";
import {
  ListDomainsForPackageCommand,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "./commands/ListDomainsForPackageCommand";
import {
  ListInstanceTypeDetailsCommand,
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
} from "./commands/ListInstanceTypeDetailsCommand";
import {
  ListPackagesForDomainCommand,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "./commands/ListPackagesForDomainCommand";
import {
  ListScheduledActionsCommand,
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "./commands/ListScheduledActionsCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "./commands/ListVersionsCommand";
import {
  ListVpcEndpointAccessCommand,
  ListVpcEndpointAccessCommandInput,
  ListVpcEndpointAccessCommandOutput,
} from "./commands/ListVpcEndpointAccessCommand";
import {
  ListVpcEndpointsCommand,
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput,
} from "./commands/ListVpcEndpointsCommand";
import {
  ListVpcEndpointsForDomainCommand,
  ListVpcEndpointsForDomainCommandInput,
  ListVpcEndpointsForDomainCommandOutput,
} from "./commands/ListVpcEndpointsForDomainCommand";
import {
  PurchaseReservedInstanceOfferingCommand,
  PurchaseReservedInstanceOfferingCommandInput,
  PurchaseReservedInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedInstanceOfferingCommand";
import {
  PutDefaultApplicationSettingCommand,
  PutDefaultApplicationSettingCommandInput,
  PutDefaultApplicationSettingCommandOutput,
} from "./commands/PutDefaultApplicationSettingCommand";
import {
  RejectInboundConnectionCommand,
  RejectInboundConnectionCommandInput,
  RejectInboundConnectionCommandOutput,
} from "./commands/RejectInboundConnectionCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RevokeVpcEndpointAccessCommand,
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
} from "./commands/RevokeVpcEndpointAccessCommand";
import {
  StartDomainMaintenanceCommand,
  StartDomainMaintenanceCommandInput,
  StartDomainMaintenanceCommandOutput,
} from "./commands/StartDomainMaintenanceCommand";
import {
  StartServiceSoftwareUpdateCommand,
  StartServiceSoftwareUpdateCommandInput,
  StartServiceSoftwareUpdateCommandOutput,
} from "./commands/StartServiceSoftwareUpdateCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateDirectQueryDataSourceCommand,
  UpdateDirectQueryDataSourceCommandInput,
  UpdateDirectQueryDataSourceCommandOutput,
} from "./commands/UpdateDirectQueryDataSourceCommand";
import {
  UpdateDomainConfigCommand,
  UpdateDomainConfigCommandInput,
  UpdateDomainConfigCommandOutput,
} from "./commands/UpdateDomainConfigCommand";
import {
  UpdatePackageCommand,
  UpdatePackageCommandInput,
  UpdatePackageCommandOutput,
} from "./commands/UpdatePackageCommand";
import {
  UpdatePackageScopeCommand,
  UpdatePackageScopeCommandInput,
  UpdatePackageScopeCommandOutput,
} from "./commands/UpdatePackageScopeCommand";
import {
  UpdateScheduledActionCommand,
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
} from "./commands/UpdateScheduledActionCommand";
import {
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointCommandInput,
  UpdateVpcEndpointCommandOutput,
} from "./commands/UpdateVpcEndpointCommand";
import {
  UpgradeDomainCommand,
  UpgradeDomainCommandInput,
  UpgradeDomainCommandOutput,
} from "./commands/UpgradeDomainCommand";
import { OpenSearchClient, OpenSearchClientConfig } from "./OpenSearchClient";

const commands = {
  AcceptInboundConnectionCommand,
  AddDataSourceCommand,
  AddDirectQueryDataSourceCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AssociatePackagesCommand,
  AuthorizeVpcEndpointAccessCommand,
  CancelDomainConfigChangeCommand,
  CancelServiceSoftwareUpdateCommand,
  CreateApplicationCommand,
  CreateDomainCommand,
  CreateOutboundConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
  DeleteApplicationCommand,
  DeleteDataSourceCommand,
  DeleteDirectQueryDataSourceCommand,
  DeleteDomainCommand,
  DeleteInboundConnectionCommand,
  DeleteOutboundConnectionCommand,
  DeletePackageCommand,
  DeleteVpcEndpointCommand,
  DescribeDomainCommand,
  DescribeDomainAutoTunesCommand,
  DescribeDomainChangeProgressCommand,
  DescribeDomainConfigCommand,
  DescribeDomainHealthCommand,
  DescribeDomainNodesCommand,
  DescribeDomainsCommand,
  DescribeDryRunProgressCommand,
  DescribeInboundConnectionsCommand,
  DescribeInstanceTypeLimitsCommand,
  DescribeOutboundConnectionsCommand,
  DescribePackagesCommand,
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstancesCommand,
  DescribeVpcEndpointsCommand,
  DissociatePackageCommand,
  DissociatePackagesCommand,
  GetApplicationCommand,
  GetCompatibleVersionsCommand,
  GetDataSourceCommand,
  GetDefaultApplicationSettingCommand,
  GetDirectQueryDataSourceCommand,
  GetDomainMaintenanceStatusCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  ListApplicationsCommand,
  ListDataSourcesCommand,
  ListDirectQueryDataSourcesCommand,
  ListDomainMaintenancesCommand,
  ListDomainNamesCommand,
  ListDomainsForPackageCommand,
  ListInstanceTypeDetailsCommand,
  ListPackagesForDomainCommand,
  ListScheduledActionsCommand,
  ListTagsCommand,
  ListVersionsCommand,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomainCommand,
  PurchaseReservedInstanceOfferingCommand,
  PutDefaultApplicationSettingCommand,
  RejectInboundConnectionCommand,
  RemoveTagsCommand,
  RevokeVpcEndpointAccessCommand,
  StartDomainMaintenanceCommand,
  StartServiceSoftwareUpdateCommand,
  UpdateApplicationCommand,
  UpdateDataSourceCommand,
  UpdateDirectQueryDataSourceCommand,
  UpdateDomainConfigCommand,
  UpdatePackageCommand,
  UpdatePackageScopeCommand,
  UpdateScheduledActionCommand,
  UpdateVpcEndpointCommand,
  UpgradeDomainCommand,
};

export interface OpenSearch {
  /**
   * @see {@link AcceptInboundConnectionCommand}
   */
  acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInboundConnectionCommandOutput>;
  acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    cb: (err: any, data?: AcceptInboundConnectionCommandOutput) => void
  ): void;
  acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInboundConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddDataSourceCommand}
   */
  addDataSource(args: AddDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<AddDataSourceCommandOutput>;
  addDataSource(args: AddDataSourceCommandInput, cb: (err: any, data?: AddDataSourceCommandOutput) => void): void;
  addDataSource(
    args: AddDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AddDirectQueryDataSourceCommand}
   */
  addDirectQueryDataSource(
    args: AddDirectQueryDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddDirectQueryDataSourceCommandOutput>;
  addDirectQueryDataSource(
    args: AddDirectQueryDataSourceCommandInput,
    cb: (err: any, data?: AddDirectQueryDataSourceCommandOutput) => void
  ): void;
  addDirectQueryDataSource(
    args: AddDirectQueryDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddDirectQueryDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePackageCommand}
   */
  associatePackage(
    args: AssociatePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePackageCommandOutput>;
  associatePackage(
    args: AssociatePackageCommandInput,
    cb: (err: any, data?: AssociatePackageCommandOutput) => void
  ): void;
  associatePackage(
    args: AssociatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePackagesCommand}
   */
  associatePackages(
    args: AssociatePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePackagesCommandOutput>;
  associatePackages(
    args: AssociatePackagesCommandInput,
    cb: (err: any, data?: AssociatePackagesCommandOutput) => void
  ): void;
  associatePackages(
    args: AssociatePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeVpcEndpointAccessCommand}
   */
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeVpcEndpointAccessCommandOutput>;
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    cb: (err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void
  ): void;
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDomainConfigChangeCommand}
   */
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDomainConfigChangeCommandOutput>;
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeCommandInput,
    cb: (err: any, data?: CancelDomainConfigChangeCommandOutput) => void
  ): void;
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDomainConfigChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelServiceSoftwareUpdateCommand}
   */
  cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelServiceSoftwareUpdateCommandOutput>;
  cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: CancelServiceSoftwareUpdateCommandOutput) => void
  ): void;
  cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelServiceSoftwareUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOutboundConnectionCommand}
   */
  createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOutboundConnectionCommandOutput>;
  createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    cb: (err: any, data?: CreateOutboundConnectionCommandOutput) => void
  ): void;
  createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutboundConnectionCommandOutput) => void
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
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectQueryDataSourceCommand}
   */
  deleteDirectQueryDataSource(
    args: DeleteDirectQueryDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectQueryDataSourceCommandOutput>;
  deleteDirectQueryDataSource(
    args: DeleteDirectQueryDataSourceCommandInput,
    cb: (err: any, data?: DeleteDirectQueryDataSourceCommandOutput) => void
  ): void;
  deleteDirectQueryDataSource(
    args: DeleteDirectQueryDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectQueryDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInboundConnectionCommand}
   */
  deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInboundConnectionCommandOutput>;
  deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    cb: (err: any, data?: DeleteInboundConnectionCommandOutput) => void
  ): void;
  deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInboundConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutboundConnectionCommand}
   */
  deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutboundConnectionCommandOutput>;
  deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    cb: (err: any, data?: DeleteOutboundConnectionCommandOutput) => void
  ): void;
  deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutboundConnectionCommandOutput) => void
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
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointCommandOutput>;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
  describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainAutoTunesCommand}
   */
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainAutoTunesCommandOutput>;
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void
  ): void;
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainChangeProgressCommand}
   */
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainChangeProgressCommandOutput>;
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    cb: (err: any, data?: DescribeDomainChangeProgressCommandOutput) => void
  ): void;
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainChangeProgressCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainConfigCommand}
   */
  describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainConfigCommandOutput>;
  describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    cb: (err: any, data?: DescribeDomainConfigCommandOutput) => void
  ): void;
  describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainHealthCommand}
   */
  describeDomainHealth(
    args: DescribeDomainHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainHealthCommandOutput>;
  describeDomainHealth(
    args: DescribeDomainHealthCommandInput,
    cb: (err: any, data?: DescribeDomainHealthCommandOutput) => void
  ): void;
  describeDomainHealth(
    args: DescribeDomainHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainNodesCommand}
   */
  describeDomainNodes(
    args: DescribeDomainNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainNodesCommandOutput>;
  describeDomainNodes(
    args: DescribeDomainNodesCommandInput,
    cb: (err: any, data?: DescribeDomainNodesCommandOutput) => void
  ): void;
  describeDomainNodes(
    args: DescribeDomainNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainsCommand}
   */
  describeDomains(
    args: DescribeDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainsCommandOutput>;
  describeDomains(args: DescribeDomainsCommandInput, cb: (err: any, data?: DescribeDomainsCommandOutput) => void): void;
  describeDomains(
    args: DescribeDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDryRunProgressCommand}
   */
  describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDryRunProgressCommandOutput>;
  describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    cb: (err: any, data?: DescribeDryRunProgressCommandOutput) => void
  ): void;
  describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDryRunProgressCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundConnectionsCommand}
   */
  describeInboundConnections(): Promise<DescribeInboundConnectionsCommandOutput>;
  describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInboundConnectionsCommandOutput>;
  describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    cb: (err: any, data?: DescribeInboundConnectionsCommandOutput) => void
  ): void;
  describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInboundConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceTypeLimitsCommand}
   */
  describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceTypeLimitsCommandOutput>;
  describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    cb: (err: any, data?: DescribeInstanceTypeLimitsCommandOutput) => void
  ): void;
  describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceTypeLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOutboundConnectionsCommand}
   */
  describeOutboundConnections(): Promise<DescribeOutboundConnectionsCommandOutput>;
  describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOutboundConnectionsCommandOutput>;
  describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    cb: (err: any, data?: DescribeOutboundConnectionsCommandOutput) => void
  ): void;
  describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOutboundConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackagesCommand}
   */
  describePackages(): Promise<DescribePackagesCommandOutput>;
  describePackages(
    args: DescribePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackagesCommandOutput>;
  describePackages(
    args: DescribePackagesCommandInput,
    cb: (err: any, data?: DescribePackagesCommandOutput) => void
  ): void;
  describePackages(
    args: DescribePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedInstanceOfferingsCommand}
   */
  describeReservedInstanceOfferings(): Promise<DescribeReservedInstanceOfferingsCommandOutput>;
  describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstanceOfferingsCommandOutput>;
  describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedInstanceOfferingsCommandOutput) => void
  ): void;
  describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstanceOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  describeReservedInstances(): Promise<DescribeReservedInstancesCommandOutput>;
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesCommandOutput>;
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointsCommandOutput>;
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DissociatePackageCommand}
   */
  dissociatePackage(
    args: DissociatePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DissociatePackageCommandOutput>;
  dissociatePackage(
    args: DissociatePackageCommandInput,
    cb: (err: any, data?: DissociatePackageCommandOutput) => void
  ): void;
  dissociatePackage(
    args: DissociatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DissociatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DissociatePackagesCommand}
   */
  dissociatePackages(
    args: DissociatePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DissociatePackagesCommandOutput>;
  dissociatePackages(
    args: DissociatePackagesCommandInput,
    cb: (err: any, data?: DissociatePackagesCommandOutput) => void
  ): void;
  dissociatePackages(
    args: DissociatePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DissociatePackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCompatibleVersionsCommand}
   */
  getCompatibleVersions(): Promise<GetCompatibleVersionsCommandOutput>;
  getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompatibleVersionsCommandOutput>;
  getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleVersionsCommandOutput) => void
  ): void;
  getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompatibleVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
  getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultApplicationSettingCommand}
   */
  getDefaultApplicationSetting(): Promise<GetDefaultApplicationSettingCommandOutput>;
  getDefaultApplicationSetting(
    args: GetDefaultApplicationSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultApplicationSettingCommandOutput>;
  getDefaultApplicationSetting(
    args: GetDefaultApplicationSettingCommandInput,
    cb: (err: any, data?: GetDefaultApplicationSettingCommandOutput) => void
  ): void;
  getDefaultApplicationSetting(
    args: GetDefaultApplicationSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultApplicationSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDirectQueryDataSourceCommand}
   */
  getDirectQueryDataSource(
    args: GetDirectQueryDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDirectQueryDataSourceCommandOutput>;
  getDirectQueryDataSource(
    args: GetDirectQueryDataSourceCommandInput,
    cb: (err: any, data?: GetDirectQueryDataSourceCommandOutput) => void
  ): void;
  getDirectQueryDataSource(
    args: GetDirectQueryDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDirectQueryDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainMaintenanceStatusCommand}
   */
  getDomainMaintenanceStatus(
    args: GetDomainMaintenanceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainMaintenanceStatusCommandOutput>;
  getDomainMaintenanceStatus(
    args: GetDomainMaintenanceStatusCommandInput,
    cb: (err: any, data?: GetDomainMaintenanceStatusCommandOutput) => void
  ): void;
  getDomainMaintenanceStatus(
    args: GetDomainMaintenanceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainMaintenanceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPackageVersionHistoryCommand}
   */
  getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageVersionHistoryCommandOutput>;
  getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void
  ): void;
  getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUpgradeHistoryCommand}
   */
  getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUpgradeHistoryCommandOutput>;
  getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void
  ): void;
  getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUpgradeStatusCommand}
   */
  getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUpgradeStatusCommandOutput>;
  getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void
  ): void;
  getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDirectQueryDataSourcesCommand}
   */
  listDirectQueryDataSources(): Promise<ListDirectQueryDataSourcesCommandOutput>;
  listDirectQueryDataSources(
    args: ListDirectQueryDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDirectQueryDataSourcesCommandOutput>;
  listDirectQueryDataSources(
    args: ListDirectQueryDataSourcesCommandInput,
    cb: (err: any, data?: ListDirectQueryDataSourcesCommandOutput) => void
  ): void;
  listDirectQueryDataSources(
    args: ListDirectQueryDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDirectQueryDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainMaintenancesCommand}
   */
  listDomainMaintenances(
    args: ListDomainMaintenancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainMaintenancesCommandOutput>;
  listDomainMaintenances(
    args: ListDomainMaintenancesCommandInput,
    cb: (err: any, data?: ListDomainMaintenancesCommandOutput) => void
  ): void;
  listDomainMaintenances(
    args: ListDomainMaintenancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainMaintenancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(args: ListDomainNamesCommandInput, cb: (err: any, data?: ListDomainNamesCommandOutput) => void): void;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsForPackageCommand}
   */
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsForPackageCommandOutput>;
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void
  ): void;
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceTypeDetailsCommand}
   */
  listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceTypeDetailsCommandOutput>;
  listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    cb: (err: any, data?: ListInstanceTypeDetailsCommandOutput) => void
  ): void;
  listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceTypeDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagesForDomainCommand}
   */
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagesForDomainCommandOutput>;
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void
  ): void;
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledActionsCommand}
   */
  listScheduledActions(
    args: ListScheduledActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledActionsCommandOutput>;
  listScheduledActions(
    args: ListScheduledActionsCommandInput,
    cb: (err: any, data?: ListScheduledActionsCommandOutput) => void
  ): void;
  listScheduledActions(
    args: ListScheduledActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVersionsCommand}
   */
  listVersions(): Promise<ListVersionsCommandOutput>;
  listVersions(args: ListVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListVersionsCommandOutput>;
  listVersions(args: ListVersionsCommandInput, cb: (err: any, data?: ListVersionsCommandOutput) => void): void;
  listVersions(
    args: ListVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointAccessCommand}
   */
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointAccessCommandOutput>;
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    cb: (err: any, data?: ListVpcEndpointAccessCommandOutput) => void
  ): void;
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointsForDomainCommand}
   */
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointsForDomainCommandOutput>;
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    cb: (err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void
  ): void;
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedInstanceOfferingCommand}
   */
  purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedInstanceOfferingCommandOutput>;
  purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedInstanceOfferingCommandOutput) => void
  ): void;
  purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedInstanceOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDefaultApplicationSettingCommand}
   */
  putDefaultApplicationSetting(
    args: PutDefaultApplicationSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDefaultApplicationSettingCommandOutput>;
  putDefaultApplicationSetting(
    args: PutDefaultApplicationSettingCommandInput,
    cb: (err: any, data?: PutDefaultApplicationSettingCommandOutput) => void
  ): void;
  putDefaultApplicationSetting(
    args: PutDefaultApplicationSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDefaultApplicationSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectInboundConnectionCommand}
   */
  rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectInboundConnectionCommandOutput>;
  rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    cb: (err: any, data?: RejectInboundConnectionCommandOutput) => void
  ): void;
  rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectInboundConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeVpcEndpointAccessCommand}
   */
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeVpcEndpointAccessCommandOutput>;
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    cb: (err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void
  ): void;
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDomainMaintenanceCommand}
   */
  startDomainMaintenance(
    args: StartDomainMaintenanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDomainMaintenanceCommandOutput>;
  startDomainMaintenance(
    args: StartDomainMaintenanceCommandInput,
    cb: (err: any, data?: StartDomainMaintenanceCommandOutput) => void
  ): void;
  startDomainMaintenance(
    args: StartDomainMaintenanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDomainMaintenanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartServiceSoftwareUpdateCommand}
   */
  startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartServiceSoftwareUpdateCommandOutput>;
  startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: StartServiceSoftwareUpdateCommandOutput) => void
  ): void;
  startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartServiceSoftwareUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDirectQueryDataSourceCommand}
   */
  updateDirectQueryDataSource(
    args: UpdateDirectQueryDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectQueryDataSourceCommandOutput>;
  updateDirectQueryDataSource(
    args: UpdateDirectQueryDataSourceCommandInput,
    cb: (err: any, data?: UpdateDirectQueryDataSourceCommandOutput) => void
  ): void;
  updateDirectQueryDataSource(
    args: UpdateDirectQueryDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectQueryDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainConfigCommand}
   */
  updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainConfigCommandOutput>;
  updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    cb: (err: any, data?: UpdateDomainConfigCommandOutput) => void
  ): void;
  updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackageCommand}
   */
  updatePackage(args: UpdatePackageCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePackageCommandOutput>;
  updatePackage(args: UpdatePackageCommandInput, cb: (err: any, data?: UpdatePackageCommandOutput) => void): void;
  updatePackage(
    args: UpdatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackageScopeCommand}
   */
  updatePackageScope(
    args: UpdatePackageScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePackageScopeCommandOutput>;
  updatePackageScope(
    args: UpdatePackageScopeCommandInput,
    cb: (err: any, data?: UpdatePackageScopeCommandOutput) => void
  ): void;
  updatePackageScope(
    args: UpdatePackageScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduledActionCommand}
   */
  updateScheduledAction(
    args: UpdateScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledActionCommandOutput>;
  updateScheduledAction(
    args: UpdateScheduledActionCommandInput,
    cb: (err: any, data?: UpdateScheduledActionCommandOutput) => void
  ): void;
  updateScheduledAction(
    args: UpdateScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcEndpointCommandOutput>;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeDomainCommand}
   */
  upgradeDomain(args: UpgradeDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpgradeDomainCommandOutput>;
  upgradeDomain(args: UpgradeDomainCommandInput, cb: (err: any, data?: UpgradeDomainCommandOutput) => void): void;
  upgradeDomain(
    args: UpgradeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeDomainCommandOutput) => void
  ): void;
}

/**
 * <p>Use the Amazon OpenSearch Service configuration API to create, configure, and manage
 *             OpenSearch Service domains. The endpoint for configuration service requests is Region
 *             specific: es.<i>region</i>.amazonaws.com. For example,
 *             es.us-east-1.amazonaws.com. For a current list of supported Regions and endpoints, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#service-regions">Amazon Web Services service endpoints</a>.</p>
 * @public
 */
export class OpenSearch extends OpenSearchClient implements OpenSearch {}
createAggregatedClient(commands, OpenSearch);
