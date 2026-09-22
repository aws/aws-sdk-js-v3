// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptInboundCrossClusterSearchConnectionCommandInput,
  type AcceptInboundCrossClusterSearchConnectionCommandOutput,
  AcceptInboundCrossClusterSearchConnectionCommand,
} from "./commands/AcceptInboundCrossClusterSearchConnectionCommand";
import { type AddTagsCommandInput, type AddTagsCommandOutput, AddTagsCommand } from "./commands/AddTagsCommand";
import {
  type AssociatePackageCommandInput,
  type AssociatePackageCommandOutput,
  AssociatePackageCommand,
} from "./commands/AssociatePackageCommand";
import {
  type AuthorizeVpcEndpointAccessCommandInput,
  type AuthorizeVpcEndpointAccessCommandOutput,
  AuthorizeVpcEndpointAccessCommand,
} from "./commands/AuthorizeVpcEndpointAccessCommand";
import {
  type CancelDomainConfigChangeCommandInput,
  type CancelDomainConfigChangeCommandOutput,
  CancelDomainConfigChangeCommand,
} from "./commands/CancelDomainConfigChangeCommand";
import {
  type CancelElasticsearchServiceSoftwareUpdateCommandInput,
  type CancelElasticsearchServiceSoftwareUpdateCommandOutput,
  CancelElasticsearchServiceSoftwareUpdateCommand,
} from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import {
  type CreateElasticsearchDomainCommandInput,
  type CreateElasticsearchDomainCommandOutput,
  CreateElasticsearchDomainCommand,
} from "./commands/CreateElasticsearchDomainCommand";
import {
  type CreateOutboundCrossClusterSearchConnectionCommandInput,
  type CreateOutboundCrossClusterSearchConnectionCommandOutput,
  CreateOutboundCrossClusterSearchConnectionCommand,
} from "./commands/CreateOutboundCrossClusterSearchConnectionCommand";
import {
  type CreatePackageCommandInput,
  type CreatePackageCommandOutput,
  CreatePackageCommand,
} from "./commands/CreatePackageCommand";
import {
  type CreateVpcEndpointCommandInput,
  type CreateVpcEndpointCommandOutput,
  CreateVpcEndpointCommand,
} from "./commands/CreateVpcEndpointCommand";
import {
  type DeleteElasticsearchDomainCommandInput,
  type DeleteElasticsearchDomainCommandOutput,
  DeleteElasticsearchDomainCommand,
} from "./commands/DeleteElasticsearchDomainCommand";
import {
  type DeleteElasticsearchServiceRoleCommandInput,
  type DeleteElasticsearchServiceRoleCommandOutput,
  DeleteElasticsearchServiceRoleCommand,
} from "./commands/DeleteElasticsearchServiceRoleCommand";
import {
  type DeleteInboundCrossClusterSearchConnectionCommandInput,
  type DeleteInboundCrossClusterSearchConnectionCommandOutput,
  DeleteInboundCrossClusterSearchConnectionCommand,
} from "./commands/DeleteInboundCrossClusterSearchConnectionCommand";
import {
  type DeleteOutboundCrossClusterSearchConnectionCommandInput,
  type DeleteOutboundCrossClusterSearchConnectionCommandOutput,
  DeleteOutboundCrossClusterSearchConnectionCommand,
} from "./commands/DeleteOutboundCrossClusterSearchConnectionCommand";
import {
  type DeletePackageCommandInput,
  type DeletePackageCommandOutput,
  DeletePackageCommand,
} from "./commands/DeletePackageCommand";
import {
  type DeleteVpcEndpointCommandInput,
  type DeleteVpcEndpointCommandOutput,
  DeleteVpcEndpointCommand,
} from "./commands/DeleteVpcEndpointCommand";
import {
  type DescribeDomainAutoTunesCommandInput,
  type DescribeDomainAutoTunesCommandOutput,
  DescribeDomainAutoTunesCommand,
} from "./commands/DescribeDomainAutoTunesCommand";
import {
  type DescribeDomainChangeProgressCommandInput,
  type DescribeDomainChangeProgressCommandOutput,
  DescribeDomainChangeProgressCommand,
} from "./commands/DescribeDomainChangeProgressCommand";
import {
  type DescribeElasticsearchDomainCommandInput,
  type DescribeElasticsearchDomainCommandOutput,
  DescribeElasticsearchDomainCommand,
} from "./commands/DescribeElasticsearchDomainCommand";
import {
  type DescribeElasticsearchDomainConfigCommandInput,
  type DescribeElasticsearchDomainConfigCommandOutput,
  DescribeElasticsearchDomainConfigCommand,
} from "./commands/DescribeElasticsearchDomainConfigCommand";
import {
  type DescribeElasticsearchDomainsCommandInput,
  type DescribeElasticsearchDomainsCommandOutput,
  DescribeElasticsearchDomainsCommand,
} from "./commands/DescribeElasticsearchDomainsCommand";
import {
  type DescribeElasticsearchInstanceTypeLimitsCommandInput,
  type DescribeElasticsearchInstanceTypeLimitsCommandOutput,
  DescribeElasticsearchInstanceTypeLimitsCommand,
} from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import {
  type DescribeInboundCrossClusterSearchConnectionsCommandInput,
  type DescribeInboundCrossClusterSearchConnectionsCommandOutput,
  DescribeInboundCrossClusterSearchConnectionsCommand,
} from "./commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import {
  type DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  type DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
  DescribeOutboundCrossClusterSearchConnectionsCommand,
} from "./commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import {
  type DescribePackagesCommandInput,
  type DescribePackagesCommandOutput,
  DescribePackagesCommand,
} from "./commands/DescribePackagesCommand";
import {
  type DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  type DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
  DescribeReservedElasticsearchInstanceOfferingsCommand,
} from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import {
  type DescribeReservedElasticsearchInstancesCommandInput,
  type DescribeReservedElasticsearchInstancesCommandOutput,
  DescribeReservedElasticsearchInstancesCommand,
} from "./commands/DescribeReservedElasticsearchInstancesCommand";
import {
  type DescribeVpcEndpointsCommandInput,
  type DescribeVpcEndpointsCommandOutput,
  DescribeVpcEndpointsCommand,
} from "./commands/DescribeVpcEndpointsCommand";
import {
  type DissociatePackageCommandInput,
  type DissociatePackageCommandOutput,
  DissociatePackageCommand,
} from "./commands/DissociatePackageCommand";
import {
  type GetCompatibleElasticsearchVersionsCommandInput,
  type GetCompatibleElasticsearchVersionsCommandOutput,
  GetCompatibleElasticsearchVersionsCommand,
} from "./commands/GetCompatibleElasticsearchVersionsCommand";
import {
  type GetPackageVersionHistoryCommandInput,
  type GetPackageVersionHistoryCommandOutput,
  GetPackageVersionHistoryCommand,
} from "./commands/GetPackageVersionHistoryCommand";
import {
  type GetUpgradeHistoryCommandInput,
  type GetUpgradeHistoryCommandOutput,
  GetUpgradeHistoryCommand,
} from "./commands/GetUpgradeHistoryCommand";
import {
  type GetUpgradeStatusCommandInput,
  type GetUpgradeStatusCommandOutput,
  GetUpgradeStatusCommand,
} from "./commands/GetUpgradeStatusCommand";
import {
  type ListDomainNamesCommandInput,
  type ListDomainNamesCommandOutput,
  ListDomainNamesCommand,
} from "./commands/ListDomainNamesCommand";
import {
  type ListDomainsForPackageCommandInput,
  type ListDomainsForPackageCommandOutput,
  ListDomainsForPackageCommand,
} from "./commands/ListDomainsForPackageCommand";
import {
  type ListElasticsearchInstanceTypesCommandInput,
  type ListElasticsearchInstanceTypesCommandOutput,
  ListElasticsearchInstanceTypesCommand,
} from "./commands/ListElasticsearchInstanceTypesCommand";
import {
  type ListElasticsearchVersionsCommandInput,
  type ListElasticsearchVersionsCommandOutput,
  ListElasticsearchVersionsCommand,
} from "./commands/ListElasticsearchVersionsCommand";
import {
  type ListPackagesForDomainCommandInput,
  type ListPackagesForDomainCommandOutput,
  ListPackagesForDomainCommand,
} from "./commands/ListPackagesForDomainCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type ListVpcEndpointAccessCommandInput,
  type ListVpcEndpointAccessCommandOutput,
  ListVpcEndpointAccessCommand,
} from "./commands/ListVpcEndpointAccessCommand";
import {
  type ListVpcEndpointsCommandInput,
  type ListVpcEndpointsCommandOutput,
  ListVpcEndpointsCommand,
} from "./commands/ListVpcEndpointsCommand";
import {
  type ListVpcEndpointsForDomainCommandInput,
  type ListVpcEndpointsForDomainCommandOutput,
  ListVpcEndpointsForDomainCommand,
} from "./commands/ListVpcEndpointsForDomainCommand";
import {
  type PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  type PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
  PurchaseReservedElasticsearchInstanceOfferingCommand,
} from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import {
  type RejectInboundCrossClusterSearchConnectionCommandInput,
  type RejectInboundCrossClusterSearchConnectionCommandOutput,
  RejectInboundCrossClusterSearchConnectionCommand,
} from "./commands/RejectInboundCrossClusterSearchConnectionCommand";
import {
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RemoveTagsCommand,
} from "./commands/RemoveTagsCommand";
import {
  type RevokeVpcEndpointAccessCommandInput,
  type RevokeVpcEndpointAccessCommandOutput,
  RevokeVpcEndpointAccessCommand,
} from "./commands/RevokeVpcEndpointAccessCommand";
import {
  type StartElasticsearchServiceSoftwareUpdateCommandInput,
  type StartElasticsearchServiceSoftwareUpdateCommandOutput,
  StartElasticsearchServiceSoftwareUpdateCommand,
} from "./commands/StartElasticsearchServiceSoftwareUpdateCommand";
import {
  type UpdateElasticsearchDomainConfigCommandInput,
  type UpdateElasticsearchDomainConfigCommandOutput,
  UpdateElasticsearchDomainConfigCommand,
} from "./commands/UpdateElasticsearchDomainConfigCommand";
import {
  type UpdatePackageCommandInput,
  type UpdatePackageCommandOutput,
  UpdatePackageCommand,
} from "./commands/UpdatePackageCommand";
import {
  type UpdateVpcEndpointCommandInput,
  type UpdateVpcEndpointCommandOutput,
  UpdateVpcEndpointCommand,
} from "./commands/UpdateVpcEndpointCommand";
import {
  type UpgradeElasticsearchDomainCommandInput,
  type UpgradeElasticsearchDomainCommandOutput,
  UpgradeElasticsearchDomainCommand,
} from "./commands/UpgradeElasticsearchDomainCommand";
import { ElasticsearchServiceClient } from "./ElasticsearchServiceClient";
import { paginateDescribeDomainAutoTunes } from "./pagination/DescribeDomainAutoTunesPaginator";
import {
  paginateDescribeInboundCrossClusterSearchConnections,
} from "./pagination/DescribeInboundCrossClusterSearchConnectionsPaginator";
import {
  paginateDescribeOutboundCrossClusterSearchConnections,
} from "./pagination/DescribeOutboundCrossClusterSearchConnectionsPaginator";
import { paginateDescribePackages } from "./pagination/DescribePackagesPaginator";
import {
  paginateDescribeReservedElasticsearchInstanceOfferings,
} from "./pagination/DescribeReservedElasticsearchInstanceOfferingsPaginator";
import {
  paginateDescribeReservedElasticsearchInstances,
} from "./pagination/DescribeReservedElasticsearchInstancesPaginator";
import { paginateGetPackageVersionHistory } from "./pagination/GetPackageVersionHistoryPaginator";
import { paginateGetUpgradeHistory } from "./pagination/GetUpgradeHistoryPaginator";
import { paginateListDomainsForPackage } from "./pagination/ListDomainsForPackagePaginator";
import { paginateListElasticsearchInstanceTypes } from "./pagination/ListElasticsearchInstanceTypesPaginator";
import { paginateListElasticsearchVersions } from "./pagination/ListElasticsearchVersionsPaginator";
import { paginateListPackagesForDomain } from "./pagination/ListPackagesForDomainPaginator";

const commands = {
  AcceptInboundCrossClusterSearchConnectionCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AuthorizeVpcEndpointAccessCommand,
  CancelDomainConfigChangeCommand,
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
const paginators = {
  paginateDescribeDomainAutoTunes,
  paginateDescribeInboundCrossClusterSearchConnections,
  paginateDescribeOutboundCrossClusterSearchConnections,
  paginateDescribePackages,
  paginateDescribeReservedElasticsearchInstanceOfferings,
  paginateDescribeReservedElasticsearchInstances,
  paginateGetPackageVersionHistory,
  paginateGetUpgradeHistory,
  paginateListDomainsForPackage,
  paginateListElasticsearchInstanceTypes,
  paginateListElasticsearchVersions,
  paginateListPackagesForDomain,
};

/**
 * @public
 */
export interface ElasticsearchServiceRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ElasticsearchService {
  /**
   * @see {@link AcceptInboundCrossClusterSearchConnectionCommand}
   */
  acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput>;
  acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<AddTagsCommandOutput>;
  addTags(
    args: AddTagsCommandInput,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  addTags(
    args: AddTagsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePackageCommand}
   */
  associatePackage(
    args: AssociatePackageCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<AssociatePackageCommandOutput>;
  associatePackage(
    args: AssociatePackageCommandInput,
    cb: (err: any, data?: AssociatePackageCommandOutput) => void
  ): void;
  associatePackage(
    args: AssociatePackageCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: AssociatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeVpcEndpointAccessCommand}
   */
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<AuthorizeVpcEndpointAccessCommandOutput>;
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    cb: (err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void
  ): void;
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDomainConfigChangeCommand}
   */
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<CancelDomainConfigChangeCommandOutput>;
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeCommandInput,
    cb: (err: any, data?: CancelDomainConfigChangeCommandOutput) => void
  ): void;
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: CancelDomainConfigChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelElasticsearchServiceSoftwareUpdateCommand}
   */
  cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput>;
  cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateElasticsearchDomainCommand}
   */
  createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<CreateElasticsearchDomainCommandOutput>;
  createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void
  ): void;
  createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOutboundCrossClusterSearchConnectionCommand}
   */
  createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput>;
  createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePackageCommand}
   */
  createPackage(
    args: CreatePackageCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<CreatePackageCommandOutput>;
  createPackage(
    args: CreatePackageCommandInput,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;
  createPackage(
    args: CreatePackageCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteElasticsearchDomainCommand}
   */
  deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DeleteElasticsearchDomainCommandOutput>;
  deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void
  ): void;
  deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteElasticsearchServiceRoleCommand}
   */
  deleteElasticsearchServiceRole(): Promise<DeleteElasticsearchServiceRoleCommandOutput>;
  deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DeleteElasticsearchServiceRoleCommandOutput>;
  deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void
  ): void;
  deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInboundCrossClusterSearchConnectionCommand}
   */
  deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput>;
  deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutboundCrossClusterSearchConnectionCommand}
   */
  deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput>;
  deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(
    args: DeletePackageCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DeletePackageCommandOutput>;
  deletePackage(
    args: DeletePackageCommandInput,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;
  deletePackage(
    args: DeletePackageCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DeleteVpcEndpointCommandOutput>;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainAutoTunesCommand}
   */
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeDomainAutoTunesCommandOutput>;
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void
  ): void;
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainChangeProgressCommand}
   */
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeDomainChangeProgressCommandOutput>;
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    cb: (err: any, data?: DescribeDomainChangeProgressCommandOutput) => void
  ): void;
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeDomainChangeProgressCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticsearchDomainCommand}
   */
  describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeElasticsearchDomainCommandOutput>;
  describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void
  ): void;
  describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticsearchDomainConfigCommand}
   */
  describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeElasticsearchDomainConfigCommandOutput>;
  describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void
  ): void;
  describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticsearchDomainsCommand}
   */
  describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeElasticsearchDomainsCommandOutput>;
  describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void
  ): void;
  describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticsearchInstanceTypeLimitsCommand}
   */
  describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput>;
  describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void
  ): void;
  describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundCrossClusterSearchConnectionsCommand}
   */
  describeInboundCrossClusterSearchConnections(): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput>;
  describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput>;
  describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommand}
   */
  describeOutboundCrossClusterSearchConnections(): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;
  describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;
  describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackagesCommand}
   */
  describePackages(): Promise<DescribePackagesCommandOutput>;
  describePackages(
    args: DescribePackagesCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribePackagesCommandOutput>;
  describePackages(
    args: DescribePackagesCommandInput,
    cb: (err: any, data?: DescribePackagesCommandOutput) => void
  ): void;
  describePackages(
    args: DescribePackagesCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribePackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommand}
   */
  describeReservedElasticsearchInstanceOfferings(): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;
  describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;
  describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void
  ): void;
  describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedElasticsearchInstancesCommand}
   */
  describeReservedElasticsearchInstances(): Promise<DescribeReservedElasticsearchInstancesCommandOutput>;
  describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeReservedElasticsearchInstancesCommandOutput>;
  describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void
  ): void;
  describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DescribeVpcEndpointsCommandOutput>;
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DissociatePackageCommand}
   */
  dissociatePackage(
    args: DissociatePackageCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<DissociatePackageCommandOutput>;
  dissociatePackage(
    args: DissociatePackageCommandInput,
    cb: (err: any, data?: DissociatePackageCommandOutput) => void
  ): void;
  dissociatePackage(
    args: DissociatePackageCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: DissociatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCompatibleElasticsearchVersionsCommand}
   */
  getCompatibleElasticsearchVersions(): Promise<GetCompatibleElasticsearchVersionsCommandOutput>;
  getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<GetCompatibleElasticsearchVersionsCommandOutput>;
  getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void
  ): void;
  getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPackageVersionHistoryCommand}
   */
  getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<GetPackageVersionHistoryCommandOutput>;
  getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void
  ): void;
  getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUpgradeHistoryCommand}
   */
  getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<GetUpgradeHistoryCommandOutput>;
  getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void
  ): void;
  getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUpgradeStatusCommand}
   */
  getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<GetUpgradeStatusCommandOutput>;
  getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void
  ): void;
  getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsForPackageCommand}
   */
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListDomainsForPackageCommandOutput>;
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void
  ): void;
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListElasticsearchInstanceTypesCommand}
   */
  listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListElasticsearchInstanceTypesCommandOutput>;
  listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void
  ): void;
  listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListElasticsearchVersionsCommand}
   */
  listElasticsearchVersions(): Promise<ListElasticsearchVersionsCommandOutput>;
  listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListElasticsearchVersionsCommandOutput>;
  listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void
  ): void;
  listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagesForDomainCommand}
   */
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListPackagesForDomainCommandOutput>;
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void
  ): void;
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointAccessCommand}
   */
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListVpcEndpointAccessCommandOutput>;
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    cb: (err: any, data?: ListVpcEndpointAccessCommandOutput) => void
  ): void;
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListVpcEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointsForDomainCommand}
   */
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<ListVpcEndpointsForDomainCommandOutput>;
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    cb: (err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void
  ): void;
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommand}
   */
  purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput>;
  purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void
  ): void;
  purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectInboundCrossClusterSearchConnectionCommand}
   */
  rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput>;
  rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<RemoveTagsCommandOutput>;
  removeTags(
    args: RemoveTagsCommandInput,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeVpcEndpointAccessCommand}
   */
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<RevokeVpcEndpointAccessCommandOutput>;
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    cb: (err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void
  ): void;
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link StartElasticsearchServiceSoftwareUpdateCommand}
   */
  startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput>;
  startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateElasticsearchDomainConfigCommand}
   */
  updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<UpdateElasticsearchDomainConfigCommandOutput>;
  updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void
  ): void;
  updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackageCommand}
   */
  updatePackage(
    args: UpdatePackageCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<UpdatePackageCommandOutput>;
  updatePackage(
    args: UpdatePackageCommandInput,
    cb: (err: any, data?: UpdatePackageCommandOutput) => void
  ): void;
  updatePackage(
    args: UpdatePackageCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: UpdatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<UpdateVpcEndpointCommandOutput>;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeElasticsearchDomainCommand}
   */
  upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    options?: ElasticsearchServiceRequestOptions
  ): Promise<UpgradeElasticsearchDomainCommandOutput>;
  upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void
  ): void;
  upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    options: ElasticsearchServiceRequestOptions,
    cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainAutoTunesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDomainAutoTunesCommandOutput}.
   */
  paginateDescribeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDomainAutoTunesCommandOutput>;

  /**
   * @see {@link DescribeInboundCrossClusterSearchConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInboundCrossClusterSearchConnectionsCommandOutput}.
   */
  paginateDescribeInboundCrossClusterSearchConnections(
    args?: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInboundCrossClusterSearchConnectionsCommandOutput>;

  /**
   * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput}.
   */
  paginateDescribeOutboundCrossClusterSearchConnections(
    args?: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;

  /**
   * @see {@link DescribePackagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePackagesCommandOutput}.
   */
  paginateDescribePackages(
    args?: DescribePackagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePackagesCommandOutput>;

  /**
   * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedElasticsearchInstanceOfferingsCommandOutput}.
   */
  paginateDescribeReservedElasticsearchInstanceOfferings(
    args?: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;

  /**
   * @see {@link DescribeReservedElasticsearchInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedElasticsearchInstancesCommandOutput}.
   */
  paginateDescribeReservedElasticsearchInstances(
    args?: DescribeReservedElasticsearchInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedElasticsearchInstancesCommandOutput>;

  /**
   * @see {@link GetPackageVersionHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetPackageVersionHistoryCommandOutput}.
   */
  paginateGetPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetPackageVersionHistoryCommandOutput>;

  /**
   * @see {@link GetUpgradeHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetUpgradeHistoryCommandOutput}.
   */
  paginateGetUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetUpgradeHistoryCommandOutput>;

  /**
   * @see {@link ListDomainsForPackageCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainsForPackageCommandOutput}.
   */
  paginateListDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainsForPackageCommandOutput>;

  /**
   * @see {@link ListElasticsearchInstanceTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListElasticsearchInstanceTypesCommandOutput}.
   */
  paginateListElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListElasticsearchInstanceTypesCommandOutput>;

  /**
   * @see {@link ListElasticsearchVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListElasticsearchVersionsCommandOutput}.
   */
  paginateListElasticsearchVersions(
    args?: ListElasticsearchVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListElasticsearchVersionsCommandOutput>;

  /**
   * @see {@link ListPackagesForDomainCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPackagesForDomainCommandOutput}.
   */
  paginateListPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPackagesForDomainCommandOutput>;
}

/**
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 * @public
 */
export class ElasticsearchService extends ElasticsearchServiceClient implements ElasticsearchService {}
createAggregatedClient(commands, ElasticsearchService, { paginators });
