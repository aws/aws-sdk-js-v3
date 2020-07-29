import { ElasticsearchServiceClient } from "./ElasticsearchServiceClient";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
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
  GetCompatibleElasticsearchVersionsCommand,
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
} from "./commands/GetCompatibleElasticsearchVersionsCommand";
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
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "./commands/ListElasticsearchInstanceTypesCommand";
import {
  ListElasticsearchVersionsCommand,
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "./commands/ListElasticsearchVersionsCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PurchaseReservedElasticsearchInstanceOfferingCommand,
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
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
  UpgradeElasticsearchDomainCommand,
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
} from "./commands/UpgradeElasticsearchDomainCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
