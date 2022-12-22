// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CancelChangeSetCommand,
  CancelChangeSetCommandInput,
  CancelChangeSetCommandOutput,
} from "./commands/CancelChangeSetCommand";
import {
  DescribeChangeSetCommand,
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput,
} from "./commands/DescribeChangeSetCommand";
import {
  DescribeEntityCommand,
  DescribeEntityCommandInput,
  DescribeEntityCommandOutput,
} from "./commands/DescribeEntityCommand";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "./commands/ListChangeSetsCommand";
import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "./commands/ListEntitiesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartChangeSetCommand,
  StartChangeSetCommandInput,
  StartChangeSetCommandOutput,
} from "./commands/StartChangeSetCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { MarketplaceCatalogClient } from "./MarketplaceCatalogClient";

/**
 * <p>Catalog API actions allow you to manage your entities through list, describe, and
 *             update capabilities. An entity can be a product or an offer on AWS Marketplace. </p>
 *         <p>You can automate your entity update process by integrating the AWS Marketplace Catalog
 *             API with your AWS Marketplace product build or deployment pipelines. You can also create
 *             your own applications on top of the Catalog API to manage your products on AWS
 *             Marketplace.</p>
 */
export class MarketplaceCatalog extends MarketplaceCatalogClient {
  /**
   * <p>Used to cancel an open change request. Must be sent before the status of the request
   *             changes to <code>APPLYING</code>, the final stage of completing your change request. You
   *             can describe a change during the 60-day request history retention period for API
   *             calls.</p>
   */
  public cancelChangeSet(
    args: CancelChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelChangeSetCommandOutput>;
  public cancelChangeSet(
    args: CancelChangeSetCommandInput,
    cb: (err: any, data?: CancelChangeSetCommandOutput) => void
  ): void;
  public cancelChangeSet(
    args: CancelChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelChangeSetCommandOutput) => void
  ): void;
  public cancelChangeSet(
    args: CancelChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelChangeSetCommandOutput) => void),
    cb?: (err: any, data?: CancelChangeSetCommandOutput) => void
  ): Promise<CancelChangeSetCommandOutput> | void {
    const command = new CancelChangeSetCommand(args);
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
   * <p>Provides information about a given change set.</p>
   */
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChangeSetCommandOutput>;
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChangeSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): Promise<DescribeChangeSetCommandOutput> | void {
    const command = new DescribeChangeSetCommand(args);
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
   * <p>Returns the metadata and content of the entity.</p>
   */
  public describeEntity(
    args: DescribeEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntityCommandOutput>;
  public describeEntity(
    args: DescribeEntityCommandInput,
    cb: (err: any, data?: DescribeEntityCommandOutput) => void
  ): void;
  public describeEntity(
    args: DescribeEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntityCommandOutput) => void
  ): void;
  public describeEntity(
    args: DescribeEntityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEntityCommandOutput) => void),
    cb?: (err: any, data?: DescribeEntityCommandOutput) => void
  ): Promise<DescribeEntityCommandOutput> | void {
    const command = new DescribeEntityCommand(args);
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
   * <p>Returns the list of change sets owned by the account being used to make the call. You
   *             can filter this list by providing any combination of <code>entityId</code>,
   *                 <code>ChangeSetName</code>, and status. If you provide more than one filter, the API
   *             operation applies a logical AND between the filters.</p>
   *         <p>You can describe a change during the 60-day request history retention period for API
   *             calls.</p>
   */
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangeSetsCommandOutput>;
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChangeSetsCommandOutput) => void),
    cb?: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): Promise<ListChangeSetsCommandOutput> | void {
    const command = new ListChangeSetsCommand(args);
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
   * <p>Provides the list of entities of a given type.</p>
   */
  public listEntities(
    args: ListEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesCommandOutput>;
  public listEntities(args: ListEntitiesCommandInput, cb: (err: any, data?: ListEntitiesCommandOutput) => void): void;
  public listEntities(
    args: ListEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;
  public listEntities(
    args: ListEntitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEntitiesCommandOutput) => void),
    cb?: (err: any, data?: ListEntitiesCommandOutput) => void
  ): Promise<ListEntitiesCommandOutput> | void {
    const command = new ListEntitiesCommand(args);
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
   * <p>Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Allows you to request changes for your entities. Within a single
   *                 <code>ChangeSet</code>, you can't start the same change type against the same entity
   *             multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities
   *             targeted by the different changes are locked until the change set has completed (either
   *             succeeded, cancelled, or failed). If you try to start a change set containing a change
   *             against an entity that is already locked, you will receive a
   *                 <code>ResourceInUseException</code> error.</p>
   *         <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same
   *             change type (<code>AddRevisions</code>) against the same entity
   *                 (<code>entity-id@1</code>).</p>
   *         <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>.</p>
   */
  public startChangeSet(
    args: StartChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartChangeSetCommandOutput>;
  public startChangeSet(
    args: StartChangeSetCommandInput,
    cb: (err: any, data?: StartChangeSetCommandOutput) => void
  ): void;
  public startChangeSet(
    args: StartChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChangeSetCommandOutput) => void
  ): void;
  public startChangeSet(
    args: StartChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartChangeSetCommandOutput) => void),
    cb?: (err: any, data?: StartChangeSetCommandOutput) => void
  ): Promise<StartChangeSetCommandOutput> | void {
    const command = new StartChangeSetCommand(args);
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
   * <p>Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
