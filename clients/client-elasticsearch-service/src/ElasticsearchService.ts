// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptInboundCrossClusterSearchConnectionCommand,
  AcceptInboundCrossClusterSearchConnectionCommandInput,
  AcceptInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/AcceptInboundCrossClusterSearchConnectionCommand";
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
  CancelElasticsearchServiceSoftwareUpdateCommand,
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import {
  CreateElasticsearchDomainCommand,
  CreateElasticsearchDomainCommandInput,
  CreateElasticsearchDomainCommandOutput,
} from "./commands/CreateElasticsearchDomainCommand";
import {
  CreateOutboundCrossClusterSearchConnectionCommand,
  CreateOutboundCrossClusterSearchConnectionCommandInput,
  CreateOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/CreateOutboundCrossClusterSearchConnectionCommand";
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
  DeleteElasticsearchDomainCommand,
  DeleteElasticsearchDomainCommandInput,
  DeleteElasticsearchDomainCommandOutput,
} from "./commands/DeleteElasticsearchDomainCommand";
import {
  DeleteElasticsearchServiceRoleCommand,
  DeleteElasticsearchServiceRoleCommandInput,
  DeleteElasticsearchServiceRoleCommandOutput,
} from "./commands/DeleteElasticsearchServiceRoleCommand";
import {
  DeleteInboundCrossClusterSearchConnectionCommand,
  DeleteInboundCrossClusterSearchConnectionCommandInput,
  DeleteInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteInboundCrossClusterSearchConnectionCommand";
import {
  DeleteOutboundCrossClusterSearchConnectionCommand,
  DeleteOutboundCrossClusterSearchConnectionCommandInput,
  DeleteOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteOutboundCrossClusterSearchConnectionCommand";
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
  DescribeElasticsearchDomainCommand,
  DescribeElasticsearchDomainCommandInput,
  DescribeElasticsearchDomainCommandOutput,
} from "./commands/DescribeElasticsearchDomainCommand";
import {
  DescribeElasticsearchDomainConfigCommand,
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput,
} from "./commands/DescribeElasticsearchDomainConfigCommand";
import {
  DescribeElasticsearchDomainsCommand,
  DescribeElasticsearchDomainsCommandInput,
  DescribeElasticsearchDomainsCommandOutput,
} from "./commands/DescribeElasticsearchDomainsCommand";
import {
  DescribeElasticsearchInstanceTypeLimitsCommand,
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput,
} from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import {
  DescribeInboundCrossClusterSearchConnectionsCommand,
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import {
  DescribeOutboundCrossClusterSearchConnectionsCommand,
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import {
  DescribePackagesCommand,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput,
} from "./commands/DescribePackagesCommand";
import {
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import {
  DescribeReservedElasticsearchInstancesCommand,
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstancesCommand";
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
  GetCompatibleElasticsearchVersionsCommand,
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
} from "./commands/GetCompatibleElasticsearchVersionsCommand";
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
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "./commands/ListElasticsearchInstanceTypesCommand";
import {
  ListElasticsearchVersionsCommand,
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "./commands/ListElasticsearchVersionsCommand";
import {
  ListPackagesForDomainCommand,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "./commands/ListPackagesForDomainCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
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
  PurchaseReservedElasticsearchInstanceOfferingCommand,
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import {
  RejectInboundCrossClusterSearchConnectionCommand,
  RejectInboundCrossClusterSearchConnectionCommandInput,
  RejectInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/RejectInboundCrossClusterSearchConnectionCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RevokeVpcEndpointAccessCommand,
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
} from "./commands/RevokeVpcEndpointAccessCommand";
import {
  StartElasticsearchServiceSoftwareUpdateCommand,
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/StartElasticsearchServiceSoftwareUpdateCommand";
import {
  UpdateElasticsearchDomainConfigCommand,
  UpdateElasticsearchDomainConfigCommandInput,
  UpdateElasticsearchDomainConfigCommandOutput,
} from "./commands/UpdateElasticsearchDomainConfigCommand";
import {
  UpdatePackageCommand,
  UpdatePackageCommandInput,
  UpdatePackageCommandOutput,
} from "./commands/UpdatePackageCommand";
import {
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointCommandInput,
  UpdateVpcEndpointCommandOutput,
} from "./commands/UpdateVpcEndpointCommand";
import {
  UpgradeElasticsearchDomainCommand,
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
} from "./commands/UpgradeElasticsearchDomainCommand";
import { ElasticsearchServiceClient, ElasticsearchServiceClientConfig } from "./ElasticsearchServiceClient";

const commands = {
  AcceptInboundCrossClusterSearchConnectionCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AuthorizeVpcEndpointAccessCommand,
  CancelElasticsearchServiceSoftwareUpdateCommand,
  CreateElasticsearchDomainCommand,
  CreateOutboundCrossClusterSearchConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
  DeleteElasticsearchDomainCommand,
  DeleteElasticsearchServiceRoleCommand,
  DeleteInboundCrossClusterSearchConnectionCommand,
  DeleteOutboundCrossClusterSearchConnectionCommand,
  DeletePackageCommand,
  DeleteVpcEndpointCommand,
  DescribeDomainAutoTunesCommand,
  DescribeDomainChangeProgressCommand,
  DescribeElasticsearchDomainCommand,
  DescribeElasticsearchDomainConfigCommand,
  DescribeElasticsearchDomainsCommand,
  DescribeElasticsearchInstanceTypeLimitsCommand,
  DescribeInboundCrossClusterSearchConnectionsCommand,
  DescribeOutboundCrossClusterSearchConnectionsCommand,
  DescribePackagesCommand,
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  DescribeReservedElasticsearchInstancesCommand,
  DescribeVpcEndpointsCommand,
  DissociatePackageCommand,
  GetCompatibleElasticsearchVersionsCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  ListDomainNamesCommand,
  ListDomainsForPackageCommand,
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchVersionsCommand,
  ListPackagesForDomainCommand,
  ListTagsCommand,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomainCommand,
  PurchaseReservedElasticsearchInstanceOfferingCommand,
  RejectInboundCrossClusterSearchConnectionCommand,
  RemoveTagsCommand,
  RevokeVpcEndpointAccessCommand,
  StartElasticsearchServiceSoftwareUpdateCommand,
  UpdateElasticsearchDomainConfigCommand,
  UpdatePackageCommand,
  UpdateVpcEndpointCommand,
  UpgradeElasticsearchDomainCommand,
};

export interface ElasticsearchService {
  /**
   * @see {@link AcceptInboundCrossClusterSearchConnectionCommand}
   */
  acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput>;
  acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void
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
   * @see {@link CancelElasticsearchServiceSoftwareUpdateCommand}
   */
  cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput>;
  cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateElasticsearchDomainCommand}
   */
  createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateElasticsearchDomainCommandOutput>;
  createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void
  ): void;
  createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOutboundCrossClusterSearchConnectionCommand}
   */
  createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput>;
  createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void
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
   * @see {@link DeleteElasticsearchDomainCommand}
   */
  deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteElasticsearchDomainCommandOutput>;
  deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void
  ): void;
  deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteElasticsearchServiceRoleCommand}
   */
  deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteElasticsearchServiceRoleCommandOutput>;
  deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void
  ): void;
  deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInboundCrossClusterSearchConnectionCommand}
   */
  deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput>;
  deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutboundCrossClusterSearchConnectionCommand}
   */
  deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput>;
  deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void
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
   * @see {@link DescribeElasticsearchDomainCommand}
   */
  describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchDomainCommandOutput>;
  describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void
  ): void;
  describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticsearchDomainConfigCommand}
   */
  describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchDomainConfigCommandOutput>;
  describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void
  ): void;
  describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticsearchDomainsCommand}
   */
  describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchDomainsCommandOutput>;
  describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void
  ): void;
  describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticsearchInstanceTypeLimitsCommand}
   */
  describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput>;
  describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void
  ): void;
  describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundCrossClusterSearchConnectionsCommand}
   */
  describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput>;
  describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommand}
   */
  describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;
  describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void
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
   * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommand}
   */
  describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;
  describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void
  ): void;
  describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedElasticsearchInstancesCommand}
   */
  describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedElasticsearchInstancesCommandOutput>;
  describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void
  ): void;
  describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void
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
   * @see {@link GetCompatibleElasticsearchVersionsCommand}
   */
  getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompatibleElasticsearchVersionsCommandOutput>;
  getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void
  ): void;
  getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void
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
   * @see {@link ListElasticsearchInstanceTypesCommand}
   */
  listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListElasticsearchInstanceTypesCommandOutput>;
  listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void
  ): void;
  listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListElasticsearchVersionsCommand}
   */
  listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListElasticsearchVersionsCommandOutput>;
  listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void
  ): void;
  listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void
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
   * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommand}
   */
  purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput>;
  purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void
  ): void;
  purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectInboundCrossClusterSearchConnectionCommand}
   */
  rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput>;
  rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void
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
   * @see {@link StartElasticsearchServiceSoftwareUpdateCommand}
   */
  startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput>;
  startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateElasticsearchDomainConfigCommand}
   */
  updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateElasticsearchDomainConfigCommandOutput>;
  updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void
  ): void;
  updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void
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
   * @see {@link UpgradeElasticsearchDomainCommand}
   */
  upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeElasticsearchDomainCommandOutput>;
  upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void
  ): void;
  upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 */
export class ElasticsearchService extends ElasticsearchServiceClient implements ElasticsearchService {}
createAggregatedClient(commands, ElasticsearchService);
