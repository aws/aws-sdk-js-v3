// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelChangeSetCommand,
  CancelChangeSetCommandInput,
  CancelChangeSetCommandOutput,
} from "./commands/CancelChangeSetCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
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
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
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
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
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
import { MarketplaceCatalogClient, MarketplaceCatalogClientConfig } from "./MarketplaceCatalogClient";

const commands = {
  CancelChangeSetCommand,
  DeleteResourcePolicyCommand,
  DescribeChangeSetCommand,
  DescribeEntityCommand,
  GetResourcePolicyCommand,
  ListChangeSetsCommand,
  ListEntitiesCommand,
  ListTagsForResourceCommand,
  PutResourcePolicyCommand,
  StartChangeSetCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface MarketplaceCatalog {
  /**
   * @see {@link CancelChangeSetCommand}
   */
  cancelChangeSet(
    args: CancelChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelChangeSetCommandOutput>;
  cancelChangeSet(args: CancelChangeSetCommandInput, cb: (err: any, data?: CancelChangeSetCommandOutput) => void): void;
  cancelChangeSet(
    args: CancelChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChangeSetCommand}
   */
  describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChangeSetCommandOutput>;
  describeChangeSet(
    args: DescribeChangeSetCommandInput,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;
  describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityCommand}
   */
  describeEntity(
    args: DescribeEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntityCommandOutput>;
  describeEntity(args: DescribeEntityCommandInput, cb: (err: any, data?: DescribeEntityCommandOutput) => void): void;
  describeEntity(
    args: DescribeEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChangeSetsCommand}
   */
  listChangeSets(
    args: ListChangeSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangeSetsCommandOutput>;
  listChangeSets(args: ListChangeSetsCommandInput, cb: (err: any, data?: ListChangeSetsCommandOutput) => void): void;
  listChangeSets(
    args: ListChangeSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesCommand}
   */
  listEntities(args: ListEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitiesCommandOutput>;
  listEntities(args: ListEntitiesCommandInput, cb: (err: any, data?: ListEntitiesCommandOutput) => void): void;
  listEntities(
    args: ListEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
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
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartChangeSetCommand}
   */
  startChangeSet(
    args: StartChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartChangeSetCommandOutput>;
  startChangeSet(args: StartChangeSetCommandInput, cb: (err: any, data?: StartChangeSetCommandOutput) => void): void;
  startChangeSet(
    args: StartChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChangeSetCommandOutput) => void
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
}

/**
 * @public
 * <p>Catalog API actions allow you to manage your entities through list, describe, and
 *             update capabilities. An entity can be a product or an offer on AWS Marketplace. </p>
 *          <p>You can automate your entity update process by integrating the AWS Marketplace Catalog
 *             API with your AWS Marketplace product build or deployment pipelines. You can also create
 *             your own applications on top of the Catalog API to manage your products on AWS
 *             Marketplace.</p>
 */
export class MarketplaceCatalog extends MarketplaceCatalogClient implements MarketplaceCatalog {}
createAggregatedClient(commands, MarketplaceCatalog);
