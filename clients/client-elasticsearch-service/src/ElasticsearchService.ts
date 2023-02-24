// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { ElasticsearchServiceClient } from "./ElasticsearchServiceClient";

/**
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 */
export class ElasticsearchService extends ElasticsearchServiceClient {
  /**
   * <p>Allows the destination domain owner to accept an inbound cross-cluster search connection request.</p>
   */
  public acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput>;
  public acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public acceptInboundCrossClusterSearchConnection(
    args: AcceptInboundCrossClusterSearchConnectionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void),
    cb?: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void
  ): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput> | void {
    const command = new AcceptInboundCrossClusterSearchConnectionCommand(args);
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
   * <p>Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank">
   *           Tagging Amazon Elasticsearch Service Domains for more information.</a></p>
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
   * <p>Associates a package with an Amazon ES domain.</p>
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
   * <p>Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.</p>
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
   * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
   */
  public cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput>;
  public cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void),
    cb?: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> | void {
    const command = new CancelElasticsearchServiceSoftwareUpdateCommand(args);
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
   * <p>Creates a new Elasticsearch domain. For more information,
   *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
   */
  public createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateElasticsearchDomainCommandOutput>;
  public createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void
  ): void;
  public createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void
  ): void;
  public createElasticsearchDomain(
    args: CreateElasticsearchDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateElasticsearchDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void
  ): Promise<CreateElasticsearchDomainCommandOutput> | void {
    const command = new CreateElasticsearchDomainCommand(args);
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
   * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
   */
  public createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput>;
  public createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public createOutboundCrossClusterSearchConnection(
    args: CreateOutboundCrossClusterSearchConnectionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput> | void {
    const command = new CreateOutboundCrossClusterSearchConnectionCommand(args);
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
   * <p>Create a package for use with Amazon ES domains.</p>
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
   * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
   */
  public deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteElasticsearchDomainCommandOutput>;
  public deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void
  ): void;
  public deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void
  ): void;
  public deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteElasticsearchDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void
  ): Promise<DeleteElasticsearchDomainCommandOutput> | void {
    const command = new DeleteElasticsearchDomainCommand(args);
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
   * <p>Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.</p>
   */
  public deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteElasticsearchServiceRoleCommandOutput>;
  public deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void
  ): void;
  public deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void
  ): void;
  public deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void),
    cb?: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void
  ): Promise<DeleteElasticsearchServiceRoleCommandOutput> | void {
    const command = new DeleteElasticsearchServiceRoleCommand(args);
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
   * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
   */
  public deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput>;
  public deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public deleteInboundCrossClusterSearchConnection(
    args: DeleteInboundCrossClusterSearchConnectionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void
  ): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput> | void {
    const command = new DeleteInboundCrossClusterSearchConnectionCommand(args);
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
   * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</p>
   */
  public deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput>;
  public deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public deleteOutboundCrossClusterSearchConnection(
    args: DeleteOutboundCrossClusterSearchConnectionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void
  ): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput> | void {
    const command = new DeleteOutboundCrossClusterSearchConnectionCommand(args);
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
   * <p>Delete the package.</p>
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
   * <p>Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.</p>
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
   * <p>Returns information about the current blue/green deployment happening on a domain, including
   *         a change ID, status, and progress stages.</p>
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
   * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>
   */
  public describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchDomainCommandOutput>;
  public describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void
  ): void;
  public describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void
  ): void;
  public describeElasticsearchDomain(
    args: DescribeElasticsearchDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeElasticsearchDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void
  ): Promise<DescribeElasticsearchDomainCommandOutput> | void {
    const command = new DescribeElasticsearchDomainCommand(args);
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
   * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
   */
  public describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchDomainConfigCommandOutput>;
  public describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void
  ): void;
  public describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void
  ): void;
  public describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void),
    cb?: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void
  ): Promise<DescribeElasticsearchDomainConfigCommandOutput> | void {
    const command = new DescribeElasticsearchDomainConfigCommand(args);
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
   * <p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</p>
   */
  public describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchDomainsCommandOutput>;
  public describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void
  ): void;
  public describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void
  ): void;
  public describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void),
    cb?: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void
  ): Promise<DescribeElasticsearchDomainsCommandOutput> | void {
    const command = new DescribeElasticsearchDomainsCommand(args);
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
   * <p>
   *     Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion.
   *     When modifying existing Domain, specify the
   *     <code>
   *       <a>DomainName</a>
   *     </code>
   *     to know what Limits are supported for modifying.
   *   </p>
   */
  public describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput>;
  public describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void
  ): void;
  public describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void
  ): void;
  public describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void
  ): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> | void {
    const command = new DescribeElasticsearchInstanceTypeLimitsCommand(args);
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
   * <p>Lists all the inbound cross-cluster search connections for a destination domain.</p>
   */
  public describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput>;
  public describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  public describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  public describeInboundCrossClusterSearchConnections(
    args: DescribeInboundCrossClusterSearchConnectionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void
  ): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> | void {
    const command = new DescribeInboundCrossClusterSearchConnectionsCommand(args);
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
   * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
   */
  public describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;
  public describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  public describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void
  ): void;
  public describeOutboundCrossClusterSearchConnections(
    args: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void
  ): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> | void {
    const command = new DescribeOutboundCrossClusterSearchConnectionsCommand(args);
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
   * <p>Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.</p>
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
   * <p>Lists available reserved Elasticsearch instance offerings.</p>
   */
  public describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;
  public describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void
  ): void;
  public describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void
  ): void;
  public describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void
  ): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> | void {
    const command = new DescribeReservedElasticsearchInstanceOfferingsCommand(args);
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
   * <p>Returns information about reserved Elasticsearch instances for this account.</p>
   */
  public describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedElasticsearchInstancesCommandOutput>;
  public describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void
  ): void;
  public describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void
  ): void;
  public describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void
  ): Promise<DescribeReservedElasticsearchInstancesCommandOutput> | void {
    const command = new DescribeReservedElasticsearchInstancesCommand(args);
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
   * <p>Dissociates a package from the Amazon ES domain.</p>
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
   * <p>
   *         Returns a list of upgrade compatible Elastisearch versions.
   *         You can optionally pass a
   *         <code>
   *           <a>DomainName</a>
   *         </code>
   *         to get all upgrade compatible Elasticsearch versions for that specific domain.
   *       </p>
   */
  public getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompatibleElasticsearchVersionsCommandOutput>;
  public getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void
  ): void;
  public getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void
  ): void;
  public getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void
  ): Promise<GetCompatibleElasticsearchVersionsCommandOutput> | void {
    const command = new GetCompatibleElasticsearchVersionsCommand(args);
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
   * <p>Returns a list of versions of the package, along with their creation time and commit message.</p>
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
   * <p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</p>
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
   * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
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
   * <p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>
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
   * <p>Lists all Amazon ES domains associated with the package.</p>
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
   * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
   */
  public listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListElasticsearchInstanceTypesCommandOutput>;
  public listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void
  ): void;
  public listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void
  ): void;
  public listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void),
    cb?: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void
  ): Promise<ListElasticsearchInstanceTypesCommandOutput> | void {
    const command = new ListElasticsearchInstanceTypesCommand(args);
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
   * <p>List all supported Elasticsearch versions</p>
   */
  public listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListElasticsearchVersionsCommandOutput>;
  public listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void
  ): void;
  public listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void
  ): void;
  public listElasticsearchVersions(
    args: ListElasticsearchVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListElasticsearchVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void
  ): Promise<ListElasticsearchVersionsCommandOutput> | void {
    const command = new ListElasticsearchVersionsCommand(args);
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
   * <p>Lists all packages associated with the Amazon ES domain.</p>
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
   * <p>Returns all tags for the given Elasticsearch domain.</p>
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
   * <p>Retrieves information about each  principal that is allowed to access a
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
   * <p>Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.</p>
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
   * <p>Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain.</p>
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
   * <p>Allows you to purchase reserved Elasticsearch instances.</p>
   */
  public purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput>;
  public purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void
  ): void;
  public purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void
  ): void;
  public purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> | void {
    const command = new PurchaseReservedElasticsearchInstanceOfferingCommand(args);
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
   * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.</p>
   */
  public rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput>;
  public rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void
  ): void;
  public rejectInboundCrossClusterSearchConnection(
    args: RejectInboundCrossClusterSearchConnectionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void),
    cb?: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void
  ): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput> | void {
    const command = new RejectInboundCrossClusterSearchConnectionCommand(args);
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
   * <p>Removes the specified set of tags from the specified Elasticsearch domain.</p>
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
   * <p>Schedules a service software update for an Amazon ES domain.</p>
   */
  public startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput>;
  public startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): void;
  public startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void),
    cb?: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void
  ): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> | void {
    const command = new StartElasticsearchServiceSoftwareUpdateCommand(args);
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
   * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>
   */
  public updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateElasticsearchDomainConfigCommandOutput>;
  public updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void
  ): void;
  public updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void
  ): void;
  public updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void
  ): Promise<UpdateElasticsearchDomainConfigCommandOutput> | void {
    const command = new UpdateElasticsearchDomainConfigCommand(args);
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
   * <p>Updates a package for use with Amazon ES domains.</p>
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
   * <p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.</p>
   */
  public upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeElasticsearchDomainCommandOutput>;
  public upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void
  ): void;
  public upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void
  ): void;
  public upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void),
    cb?: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void
  ): Promise<UpgradeElasticsearchDomainCommandOutput> | void {
    const command = new UpgradeElasticsearchDomainCommand(args);
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
