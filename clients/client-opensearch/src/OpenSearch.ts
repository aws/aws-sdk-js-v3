// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptInboundConnectionCommand,
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
} from "./commands/AcceptInboundConnectionCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  AssociatePackageCommand,
  AssociatePackageCommandInput,
  AssociatePackageCommandOutput,
} from "./commands/AssociatePackageCommand";
import {
  AuthorizeVpcEndpointAccessCommand,
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "./commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelServiceSoftwareUpdateCommand,
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelServiceSoftwareUpdateCommand";
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
  GetCompatibleVersionsCommand,
  GetCompatibleVersionsCommandInput,
  GetCompatibleVersionsCommandOutput,
} from "./commands/GetCompatibleVersionsCommand";
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
  StartServiceSoftwareUpdateCommand,
  StartServiceSoftwareUpdateCommandInput,
  StartServiceSoftwareUpdateCommandOutput,
} from "./commands/StartServiceSoftwareUpdateCommand";
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
  AddTagsCommand,
  AssociatePackageCommand,
  AuthorizeVpcEndpointAccessCommand,
  CancelServiceSoftwareUpdateCommand,
  CreateDomainCommand,
  CreateOutboundConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
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
  GetCompatibleVersionsCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
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
  RejectInboundConnectionCommand,
  RemoveTagsCommand,
  RevokeVpcEndpointAccessCommand,
  StartServiceSoftwareUpdateCommand,
  UpdateDomainConfigCommand,
  UpdatePackageCommand,
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
   * @see {@link GetCompatibleVersionsCommand}
   */
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
   * @see {@link ListDomainNamesCommand}
   */
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
 * @public
 * <p>Use the Amazon OpenSearch Service configuration API to create, configure, and manage
 *    OpenSearch Service domains.</p>
 *          <p>For sample code that uses the configuration API, see the <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/opensearch-configuration-samples.html">
 *                <i>Amazon OpenSearch Service Developer Guide</i>
 *             </a>. The guide also
 *    contains <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/request-signing.html">sample code</a> for
 *    sending signed HTTP requests to the OpenSearch APIs. The endpoint for configuration service
 *    requests is Region specific: es.<i>region</i>.amazonaws.com. For example,
 *    es.us-east-1.amazonaws.com. For a current list of supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#service-regions">Amazon Web Services
 *     service endpoints</a>.</p>
 */
export class OpenSearch extends OpenSearchClient implements OpenSearch {}
createAggregatedClient(commands, OpenSearch);
