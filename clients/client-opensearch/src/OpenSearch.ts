// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointCommandInput,
  UpdateVpcEndpointCommandOutput,
} from "./commands/UpdateVpcEndpointCommand";
import {
  UpgradeDomainCommand,
  UpgradeDomainCommandInput,
  UpgradeDomainCommandOutput,
} from "./commands/UpgradeDomainCommand";
import { OpenSearchClient } from "./OpenSearchClient";

/**
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
export class OpenSearch extends OpenSearchClient {
  /**
   * <p>Allows the destination Amazon OpenSearch Service domain owner to accept an inbound
   *    cross-cluster search connection request. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
   *     for Amazon OpenSearch Service</a>.</p>
   */
  public acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInboundConnectionCommandOutput>;
  public acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    cb: (err: any, data?: AcceptInboundConnectionCommandOutput) => void
  ): void;
  public acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInboundConnectionCommandOutput) => void
  ): void;
  public acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptInboundConnectionCommandOutput) => void),
    cb?: (err: any, data?: AcceptInboundConnectionCommandOutput) => void
  ): Promise<AcceptInboundConnectionCommandOutput> | void {
    const command = new AcceptInboundConnectionCommand(args);
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
   * <p>Attaches tags to an existing Amazon OpenSearch Service domain. Tags are a set of
   *    case-sensitive key-value pairs. A domain can have up to 10 tags. For more information, see
   *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-awsresourcetagging.html">Tagging Amazon OpenSearch Service domains</a>.</p>
   */
  public addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  public addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  public addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsCommandOutput) => void),
    cb?: (err: any, data?: AddTagsCommandOutput) => void
  ): Promise<AddTagsCommandOutput> | void {
    const command = new AddTagsCommand(args);
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
   * <p>Associates a package with an Amazon OpenSearch Service domain. For more information, see
   *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages
   *     for Amazon OpenSearch Service</a>.</p>
   */
  public associatePackage(
    args: AssociatePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePackageCommandOutput>;
  public associatePackage(
    args: AssociatePackageCommandInput,
    cb: (err: any, data?: AssociatePackageCommandOutput) => void
  ): void;
  public associatePackage(
    args: AssociatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePackageCommandOutput) => void
  ): void;
  public associatePackage(
    args: AssociatePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociatePackageCommandOutput) => void),
    cb?: (err: any, data?: AssociatePackageCommandOutput) => void
  ): Promise<AssociatePackageCommandOutput> | void {
    const command = new AssociatePackageCommand(args);
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
   * <p>Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC
   *    endpoint.</p>
   */
  public authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeVpcEndpointAccessCommandOutput>;
  public authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    cb: (err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void
  ): void;
  public authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void
  ): void;
  public authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeVpcEndpointAccessCommandOutput) => void
  ): Promise<AuthorizeVpcEndpointAccessCommandOutput> | void {
    const command = new AuthorizeVpcEndpointAccessCommand(args);
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
   * <p>Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can
   *    only perform this operation before the <code>AutomatedUpdateDate</code> and when the domain's
   *     <code>UpdateStatus</code> is <code>PENDING_UPDATE</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in Amazon OpenSearch Service</a>.</p>
   */
  public cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelServiceSoftwareUpdateCommandOutput>;
  public cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: CancelServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelServiceSoftwareUpdateCommandOutput) => void),
    cb?: (err: any, data?: CancelServiceSoftwareUpdateCommandOutput) => void
  ): Promise<CancelServiceSoftwareUpdateCommandOutput> | void {
    const command = new CancelServiceSoftwareUpdateCommand(args);
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
   * <p>Creates an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>.</p>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
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
   * <p>Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain
   *    to a destination domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
   *     for Amazon OpenSearch Service</a>.</p>
   */
  public createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOutboundConnectionCommandOutput>;
  public createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    cb: (err: any, data?: CreateOutboundConnectionCommandOutput) => void
  ): void;
  public createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutboundConnectionCommandOutput) => void
  ): void;
  public createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOutboundConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateOutboundConnectionCommandOutput) => void
  ): Promise<CreateOutboundConnectionCommandOutput> | void {
    const command = new CreateOutboundConnectionCommand(args);
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
   * <p>Creates a package for use with Amazon OpenSearch Service domains. For more information, see
   *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
   */
  public createPackage(
    args: CreatePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackageCommandOutput>;
  public createPackage(
    args: CreatePackageCommandInput,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;
  public createPackage(
    args: CreatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;
  public createPackage(
    args: CreatePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePackageCommandOutput) => void),
    cb?: (err: any, data?: CreatePackageCommandOutput) => void
  ): Promise<CreatePackageCommandOutput> | void {
    const command = new CreatePackageCommand(args);
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
   * <p>Creates an Amazon OpenSearch Service-managed VPC endpoint.</p>
   */
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): Promise<CreateVpcEndpointCommandOutput> | void {
    const command = new CreateVpcEndpointCommand(args);
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
   * <p>Deletes an Amazon OpenSearch Service domain and all of its data. You can't recover a domain
   *    after you delete it.</p>
   */
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  public deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainCommandOutput) => void
  ): Promise<DeleteDomainCommandOutput> | void {
    const command = new DeleteDomainCommand(args);
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
   * <p>Allows the destination Amazon OpenSearch Service domain owner to delete an existing inbound
   *    cross-cluster search connection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
   *     for Amazon OpenSearch Service</a>.</p>
   */
  public deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInboundConnectionCommandOutput>;
  public deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    cb: (err: any, data?: DeleteInboundConnectionCommandOutput) => void
  ): void;
  public deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInboundConnectionCommandOutput) => void
  ): void;
  public deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInboundConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteInboundConnectionCommandOutput) => void
  ): Promise<DeleteInboundConnectionCommandOutput> | void {
    const command = new DeleteInboundConnectionCommand(args);
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
   * <p>Allows the source Amazon OpenSearch Service domain owner to delete an existing outbound
   *    cross-cluster search connection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
   *     for Amazon OpenSearch Service</a>.</p>
   */
  public deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutboundConnectionCommandOutput>;
  public deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    cb: (err: any, data?: DeleteOutboundConnectionCommandOutput) => void
  ): void;
  public deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutboundConnectionCommandOutput) => void
  ): void;
  public deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOutboundConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteOutboundConnectionCommandOutput) => void
  ): Promise<DeleteOutboundConnectionCommandOutput> | void {
    const command = new DeleteOutboundConnectionCommand(args);
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
   * <p>Deletes an Amazon OpenSearch Service package. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom
   *     packages for Amazon OpenSearch Service</a>.</p>
   */
  public deletePackage(
    args: DeletePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackageCommandOutput>;
  public deletePackage(
    args: DeletePackageCommandInput,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;
  public deletePackage(
    args: DeletePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;
  public deletePackage(
    args: DeletePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePackageCommandOutput) => void),
    cb?: (err: any, data?: DeletePackageCommandOutput) => void
  ): Promise<DeletePackageCommandOutput> | void {
    const command = new DeletePackageCommand(args);
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
   * <p>Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.</p>
   */
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointCommandOutput>;
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): Promise<DeleteVpcEndpointCommandOutput> | void {
    const command = new DeleteVpcEndpointCommand(args);
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
   * <p>Describes the domain configuration for the specified Amazon OpenSearch Service domain,
   *    including the domain ID, domain service endpoint, and domain ARN.</p>
   */
  public describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  public describeDomain(
    args: DescribeDomainCommandInput,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainCommandOutput) => void
  ): Promise<DescribeDomainCommandOutput> | void {
    const command = new DescribeDomainCommand(args);
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
   * <p>Returns the list of optimizations that Auto-Tune has made to an Amazon OpenSearch Service
   *    domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
   *     Service</a>.</p>
   */
  public describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainAutoTunesCommandOutput>;
  public describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void
  ): void;
  public describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void
  ): void;
  public describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainAutoTunesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void
  ): Promise<DescribeDomainAutoTunesCommandOutput> | void {
    const command = new DescribeDomainAutoTunesCommand(args);
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
   * <p>Returns information about the current blue/green deployment happening on an Amazon
   *    OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes.html">Making configuration changes in Amazon OpenSearch Service</a>.</p>
   */
  public describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainChangeProgressCommandOutput>;
  public describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    cb: (err: any, data?: DescribeDomainChangeProgressCommandOutput) => void
  ): void;
  public describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainChangeProgressCommandOutput) => void
  ): void;
  public describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainChangeProgressCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainChangeProgressCommandOutput) => void
  ): Promise<DescribeDomainChangeProgressCommandOutput> | void {
    const command = new DescribeDomainChangeProgressCommand(args);
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
   * <p>Returns the configuration of an Amazon OpenSearch Service domain.</p>
   */
  public describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainConfigCommandOutput>;
  public describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    cb: (err: any, data?: DescribeDomainConfigCommandOutput) => void
  ): void;
  public describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainConfigCommandOutput) => void
  ): void;
  public describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainConfigCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainConfigCommandOutput) => void
  ): Promise<DescribeDomainConfigCommandOutput> | void {
    const command = new DescribeDomainConfigCommand(args);
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
   * <p>Returns domain configuration information about the specified Amazon OpenSearch Service
   *    domains.</p>
   */
  public describeDomains(
    args: DescribeDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainsCommandOutput>;
  public describeDomains(
    args: DescribeDomainsCommandInput,
    cb: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): void;
  public describeDomains(
    args: DescribeDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): void;
  public describeDomains(
    args: DescribeDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): Promise<DescribeDomainsCommandOutput> | void {
    const command = new DescribeDomainsCommand(args);
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
   * <p>Describes the progress of a pre-update dry run analysis on an Amazon OpenSearch
   *    Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#dryrun">Determining whether a change will cause a blue/green deployment</a>.</p>
   */
  public describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDryRunProgressCommandOutput>;
  public describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    cb: (err: any, data?: DescribeDryRunProgressCommandOutput) => void
  ): void;
  public describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDryRunProgressCommandOutput) => void
  ): void;
  public describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDryRunProgressCommandOutput) => void),
    cb?: (err: any, data?: DescribeDryRunProgressCommandOutput) => void
  ): Promise<DescribeDryRunProgressCommandOutput> | void {
    const command = new DescribeDryRunProgressCommand(args);
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
   * <p>Lists all the inbound cross-cluster search connections for a destination (remote) Amazon
   *    OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
   *     for Amazon OpenSearch Service</a>.</p>
   */
  public describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInboundConnectionsCommandOutput>;
  public describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    cb: (err: any, data?: DescribeInboundConnectionsCommandOutput) => void
  ): void;
  public describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInboundConnectionsCommandOutput) => void
  ): void;
  public describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInboundConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeInboundConnectionsCommandOutput) => void
  ): Promise<DescribeInboundConnectionsCommandOutput> | void {
    const command = new DescribeInboundConnectionsCommand(args);
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
   * <p>Describes the instance count, storage, and master node limits for a given OpenSearch or
   *    Elasticsearch version and instance type.</p>
   */
  public describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceTypeLimitsCommandOutput>;
  public describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    cb: (err: any, data?: DescribeInstanceTypeLimitsCommandOutput) => void
  ): void;
  public describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceTypeLimitsCommandOutput) => void
  ): void;
  public describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceTypeLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceTypeLimitsCommandOutput) => void
  ): Promise<DescribeInstanceTypeLimitsCommandOutput> | void {
    const command = new DescribeInstanceTypeLimitsCommand(args);
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
   * <p>Lists all the outbound cross-cluster connections for a local (source) Amazon OpenSearch
   *    Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
   *     for Amazon OpenSearch Service</a>.</p>
   */
  public describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOutboundConnectionsCommandOutput>;
  public describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    cb: (err: any, data?: DescribeOutboundConnectionsCommandOutput) => void
  ): void;
  public describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOutboundConnectionsCommandOutput) => void
  ): void;
  public describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOutboundConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOutboundConnectionsCommandOutput) => void
  ): Promise<DescribeOutboundConnectionsCommandOutput> | void {
    const command = new DescribeOutboundConnectionsCommand(args);
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
   * <p>Describes all packages available to OpenSearch Service. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom
   *     packages for Amazon OpenSearch Service</a>.</p>
   */
  public describePackages(
    args: DescribePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackagesCommandOutput>;
  public describePackages(
    args: DescribePackagesCommandInput,
    cb: (err: any, data?: DescribePackagesCommandOutput) => void
  ): void;
  public describePackages(
    args: DescribePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackagesCommandOutput) => void
  ): void;
  public describePackages(
    args: DescribePackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePackagesCommandOutput) => void),
    cb?: (err: any, data?: DescribePackagesCommandOutput) => void
  ): Promise<DescribePackagesCommandOutput> | void {
    const command = new DescribePackagesCommand(args);
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
   * <p>Describes the available Amazon OpenSearch Service Reserved Instance offerings for a given
   *    Region. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ri.html">Reserved Instances in Amazon OpenSearch Service</a>.</p>
   */
  public describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstanceOfferingsCommandOutput>;
  public describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedInstanceOfferingsCommandOutput) => void
  ): void;
  public describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstanceOfferingsCommandOutput) => void
  ): void;
  public describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedInstanceOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedInstanceOfferingsCommandOutput) => void
  ): Promise<DescribeReservedInstanceOfferingsCommandOutput> | void {
    const command = new DescribeReservedInstanceOfferingsCommand(args);
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
   * <p>Describes the Amazon OpenSearch Service instances that you have reserved in a given Region.
   *    For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ri.html">Reserved Instances in Amazon OpenSearch
   *     Service</a>.</p>
   */
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesCommandOutput>;
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): Promise<DescribeReservedInstancesCommandOutput> | void {
    const command = new DescribeReservedInstancesCommand(args);
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
   * <p>Describes one or more Amazon OpenSearch Service-managed VPC endpoints.</p>
   */
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointsCommandOutput>;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): Promise<DescribeVpcEndpointsCommandOutput> | void {
    const command = new DescribeVpcEndpointsCommand(args);
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
   * <p>Removes a package from the specified Amazon OpenSearch Service domain. The package can't be
   *    in use with any OpenSearch index for the dissociation to succeed. The package is still available
   *    in OpenSearch Service for association later. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom
   *     packages for Amazon OpenSearch Service</a>.</p>
   */
  public dissociatePackage(
    args: DissociatePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DissociatePackageCommandOutput>;
  public dissociatePackage(
    args: DissociatePackageCommandInput,
    cb: (err: any, data?: DissociatePackageCommandOutput) => void
  ): void;
  public dissociatePackage(
    args: DissociatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DissociatePackageCommandOutput) => void
  ): void;
  public dissociatePackage(
    args: DissociatePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DissociatePackageCommandOutput) => void),
    cb?: (err: any, data?: DissociatePackageCommandOutput) => void
  ): Promise<DissociatePackageCommandOutput> | void {
    const command = new DissociatePackageCommand(args);
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
   * <p>Returns a map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
   *    to.</p>
   */
  public getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompatibleVersionsCommandOutput>;
  public getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleVersionsCommandOutput) => void
  ): void;
  public getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompatibleVersionsCommandOutput) => void
  ): void;
  public getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCompatibleVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetCompatibleVersionsCommandOutput) => void
  ): Promise<GetCompatibleVersionsCommandOutput> | void {
    const command = new GetCompatibleVersionsCommand(args);
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
   * <p>Returns a list of Amazon OpenSearch Service package versions, along with their creation time
   *    and commit message. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon
   *     OpenSearch Service</a>.</p>
   */
  public getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageVersionHistoryCommandOutput>;
  public getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void
  ): void;
  public getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void
  ): void;
  public getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPackageVersionHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void
  ): Promise<GetPackageVersionHistoryCommandOutput> | void {
    const command = new GetPackageVersionHistoryCommand(args);
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
   * <p>Retrieves the complete history of the last 10 upgrades performed on an Amazon OpenSearch
   *    Service domain.</p>
   */
  public getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUpgradeHistoryCommandOutput>;
  public getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void
  ): void;
  public getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void
  ): void;
  public getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUpgradeHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetUpgradeHistoryCommandOutput) => void
  ): Promise<GetUpgradeHistoryCommandOutput> | void {
    const command = new GetUpgradeHistoryCommand(args);
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
   * <p>Returns the most recent status of the last upgrade or upgrade eligibility check performed on
   *    an Amazon OpenSearch Service domain.</p>
   */
  public getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUpgradeStatusCommandOutput>;
  public getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void
  ): void;
  public getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void
  ): void;
  public getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUpgradeStatusCommandOutput) => void),
    cb?: (err: any, data?: GetUpgradeStatusCommandOutput) => void
  ): Promise<GetUpgradeStatusCommandOutput> | void {
    const command = new GetUpgradeStatusCommand(args);
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
   * <p>Returns the names of all Amazon OpenSearch Service domains owned by the current user in the
   *    active Region.</p>
   */
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainNamesCommandOutput>;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainNamesCommandOutput) => void),
    cb?: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): Promise<ListDomainNamesCommandOutput> | void {
    const command = new ListDomainNamesCommand(args);
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
   * <p>Lists all Amazon OpenSearch Service domains associated with a given package. For more
   *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon
   *     OpenSearch Service</a>.</p>
   */
  public listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsForPackageCommandOutput>;
  public listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void
  ): void;
  public listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void
  ): void;
  public listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsForPackageCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsForPackageCommandOutput) => void
  ): Promise<ListDomainsForPackageCommandOutput> | void {
    const command = new ListDomainsForPackageCommand(args);
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
   * <p>Lists all instance types and available features for a given OpenSearch or Elasticsearch
   *    version.</p>
   */
  public listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceTypeDetailsCommandOutput>;
  public listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    cb: (err: any, data?: ListInstanceTypeDetailsCommandOutput) => void
  ): void;
  public listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceTypeDetailsCommandOutput) => void
  ): void;
  public listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceTypeDetailsCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceTypeDetailsCommandOutput) => void
  ): Promise<ListInstanceTypeDetailsCommandOutput> | void {
    const command = new ListInstanceTypeDetailsCommand(args);
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
   * <p>Lists all packages associated with an Amazon OpenSearch Service domain. For more
   *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon
   *     OpenSearch Service</a>.</p>
   */
  public listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagesForDomainCommandOutput>;
  public listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void
  ): void;
  public listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void
  ): void;
  public listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPackagesForDomainCommandOutput) => void),
    cb?: (err: any, data?: ListPackagesForDomainCommandOutput) => void
  ): Promise<ListPackagesForDomainCommandOutput> | void {
    const command = new ListPackagesForDomainCommand(args);
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
   * <p>Returns all resource tags for an Amazon OpenSearch Service domain. For more information, see
   *    <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-awsresourcetagging.html">Tagging Amazon OpenSearch Service domains</a>.</p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
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
   * <p>Lists all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service
   *    supports.</p>
   */
  public listVersions(
    args: ListVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVersionsCommandOutput>;
  public listVersions(args: ListVersionsCommandInput, cb: (err: any, data?: ListVersionsCommandOutput) => void): void;
  public listVersions(
    args: ListVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVersionsCommandOutput) => void
  ): void;
  public listVersions(
    args: ListVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListVersionsCommandOutput) => void
  ): Promise<ListVersionsCommandOutput> | void {
    const command = new ListVersionsCommand(args);
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
   * <p>Retrieves information about each Amazon Web Services principal that is allowed to access a
   *    given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.</p>
   */
  public listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointAccessCommandOutput>;
  public listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    cb: (err: any, data?: ListVpcEndpointAccessCommandOutput) => void
  ): void;
  public listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointAccessCommandOutput) => void
  ): void;
  public listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVpcEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: ListVpcEndpointAccessCommandOutput) => void
  ): Promise<ListVpcEndpointAccessCommandOutput> | void {
    const command = new ListVpcEndpointAccessCommand(args);
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
   * <p>Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current Amazon Web Services account and Region.</p>
   */
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointsCommandOutput>;
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVpcEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): Promise<ListVpcEndpointsCommandOutput> | void {
    const command = new ListVpcEndpointsCommand(args);
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
   * <p>Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular
   *    domain.</p>
   */
  public listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointsForDomainCommandOutput>;
  public listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    cb: (err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void
  ): void;
  public listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void
  ): void;
  public listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void),
    cb?: (err: any, data?: ListVpcEndpointsForDomainCommandOutput) => void
  ): Promise<ListVpcEndpointsForDomainCommandOutput> | void {
    const command = new ListVpcEndpointsForDomainCommand(args);
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
   * <p>Allows you to purchase Amazon OpenSearch Service Reserved Instances.</p>
   */
  public purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedInstanceOfferingCommandOutput>;
  public purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedInstanceOfferingCommandOutput) => void
  ): void;
  public purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedInstanceOfferingCommandOutput) => void
  ): void;
  public purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseReservedInstanceOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseReservedInstanceOfferingCommandOutput) => void
  ): Promise<PurchaseReservedInstanceOfferingCommandOutput> | void {
    const command = new PurchaseReservedInstanceOfferingCommand(args);
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
   * <p>Allows the remote Amazon OpenSearch Service domain owner to reject an inbound cross-cluster
   *    connection request.</p>
   */
  public rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectInboundConnectionCommandOutput>;
  public rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    cb: (err: any, data?: RejectInboundConnectionCommandOutput) => void
  ): void;
  public rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectInboundConnectionCommandOutput) => void
  ): void;
  public rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectInboundConnectionCommandOutput) => void),
    cb?: (err: any, data?: RejectInboundConnectionCommandOutput) => void
  ): Promise<RejectInboundConnectionCommandOutput> | void {
    const command = new RejectInboundConnectionCommand(args);
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
   * <p>Removes the specified set of tags from an Amazon OpenSearch Service domain. For more
   *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains.html#managedomains-awsresorcetagging"> Tagging Amazon OpenSearch Service domains</a>.</p>
   */
  public removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  public removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsCommandOutput) => void
  ): Promise<RemoveTagsCommandOutput> | void {
    const command = new RemoveTagsCommand(args);
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
   * <p>Revokes access to an Amazon OpenSearch Service domain that was provided through an interface
   *    VPC endpoint.</p>
   */
  public revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeVpcEndpointAccessCommandOutput>;
  public revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    cb: (err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void
  ): void;
  public revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void
  ): void;
  public revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: RevokeVpcEndpointAccessCommandOutput) => void
  ): Promise<RevokeVpcEndpointAccessCommandOutput> | void {
    const command = new RevokeVpcEndpointAccessCommand(args);
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
   * <p>Schedules a service software update for an Amazon OpenSearch Service domain. For more
   *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in
   *     Amazon OpenSearch Service</a>.</p>
   */
  public startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartServiceSoftwareUpdateCommandOutput>;
  public startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: StartServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartServiceSoftwareUpdateCommandOutput) => void),
    cb?: (err: any, data?: StartServiceSoftwareUpdateCommandOutput) => void
  ): Promise<StartServiceSoftwareUpdateCommandOutput> | void {
    const command = new StartServiceSoftwareUpdateCommand(args);
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
   * <p>Modifies the cluster configuration of the specified Amazon OpenSearch Service domain.</p>
   */
  public updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainConfigCommandOutput>;
  public updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    cb: (err: any, data?: UpdateDomainConfigCommandOutput) => void
  ): void;
  public updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainConfigCommandOutput) => void
  ): void;
  public updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainConfigCommandOutput) => void
  ): Promise<UpdateDomainConfigCommandOutput> | void {
    const command = new UpdateDomainConfigCommand(args);
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
   * <p>Updates a package for use with Amazon OpenSearch Service domains. For more information, see
   *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
   */
  public updatePackage(
    args: UpdatePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePackageCommandOutput>;
  public updatePackage(
    args: UpdatePackageCommandInput,
    cb: (err: any, data?: UpdatePackageCommandOutput) => void
  ): void;
  public updatePackage(
    args: UpdatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageCommandOutput) => void
  ): void;
  public updatePackage(
    args: UpdatePackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePackageCommandOutput) => void),
    cb?: (err: any, data?: UpdatePackageCommandOutput) => void
  ): Promise<UpdatePackageCommandOutput> | void {
    const command = new UpdatePackageCommand(args);
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
   * <p>Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.</p>
   */
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcEndpointCommandOutput>;
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): Promise<UpdateVpcEndpointCommandOutput> | void {
    const command = new UpdateVpcEndpointCommand(args);
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
   * <p>Allows you to either upgrade your Amazon OpenSearch Service domain or perform an upgrade
   *    eligibility check to a compatible version of OpenSearch or Elasticsearch.</p>
   */
  public upgradeDomain(
    args: UpgradeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeDomainCommandOutput>;
  public upgradeDomain(
    args: UpgradeDomainCommandInput,
    cb: (err: any, data?: UpgradeDomainCommandOutput) => void
  ): void;
  public upgradeDomain(
    args: UpgradeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeDomainCommandOutput) => void
  ): void;
  public upgradeDomain(
    args: UpgradeDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpgradeDomainCommandOutput) => void),
    cb?: (err: any, data?: UpgradeDomainCommandOutput) => void
  ): Promise<UpgradeDomainCommandOutput> | void {
    const command = new UpgradeDomainCommand(args);
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
