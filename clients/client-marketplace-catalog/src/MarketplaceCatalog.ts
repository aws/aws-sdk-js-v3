// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchDescribeEntitiesCommandInput,
  type BatchDescribeEntitiesCommandOutput,
  BatchDescribeEntitiesCommand,
} from "./commands/BatchDescribeEntitiesCommand";
import {
  type CancelChangeSetCommandInput,
  type CancelChangeSetCommandOutput,
  CancelChangeSetCommand,
} from "./commands/CancelChangeSetCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DescribeAssessmentCommandInput,
  type DescribeAssessmentCommandOutput,
  DescribeAssessmentCommand,
} from "./commands/DescribeAssessmentCommand";
import {
  type DescribeChangeSetCommandInput,
  type DescribeChangeSetCommandOutput,
  DescribeChangeSetCommand,
} from "./commands/DescribeChangeSetCommand";
import {
  type DescribeEntityCommandInput,
  type DescribeEntityCommandOutput,
  DescribeEntityCommand,
} from "./commands/DescribeEntityCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListAssessmentsCommandInput,
  type ListAssessmentsCommandOutput,
  ListAssessmentsCommand,
} from "./commands/ListAssessmentsCommand";
import {
  type ListChangeSetsCommandInput,
  type ListChangeSetsCommandOutput,
  ListChangeSetsCommand,
} from "./commands/ListChangeSetsCommand";
import {
  type ListEntitiesCommandInput,
  type ListEntitiesCommandOutput,
  ListEntitiesCommand,
} from "./commands/ListEntitiesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type StartChangeSetCommandInput,
  type StartChangeSetCommandOutput,
  StartChangeSetCommand,
} from "./commands/StartChangeSetCommand";
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
import { MarketplaceCatalogClient } from "./MarketplaceCatalogClient";
import { paginateDescribeAssessment } from "./pagination/DescribeAssessmentPaginator";
import { paginateListAssessments } from "./pagination/ListAssessmentsPaginator";
import { paginateListChangeSets } from "./pagination/ListChangeSetsPaginator";
import { paginateListEntities } from "./pagination/ListEntitiesPaginator";

const commands = {
  BatchDescribeEntitiesCommand,
  CancelChangeSetCommand,
  DeleteResourcePolicyCommand,
  DescribeAssessmentCommand,
  DescribeChangeSetCommand,
  DescribeEntityCommand,
  GetResourcePolicyCommand,
  ListAssessmentsCommand,
  ListChangeSetsCommand,
  ListEntitiesCommand,
  ListTagsForResourceCommand,
  PutResourcePolicyCommand,
  StartChangeSetCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateDescribeAssessment,
  paginateListAssessments,
  paginateListChangeSets,
  paginateListEntities,
};

export interface MarketplaceCatalog {
  /**
   * @see {@link BatchDescribeEntitiesCommand}
   */
  batchDescribeEntities(
    args: BatchDescribeEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeEntitiesCommandOutput>;
  batchDescribeEntities(
    args: BatchDescribeEntitiesCommandInput,
    cb: (err: any, data?: BatchDescribeEntitiesCommandOutput) => void
  ): void;
  batchDescribeEntities(
    args: BatchDescribeEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelChangeSetCommand}
   */
  cancelChangeSet(
    args: CancelChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelChangeSetCommandOutput>;
  cancelChangeSet(
    args: CancelChangeSetCommandInput,
    cb: (err: any, data?: CancelChangeSetCommandOutput) => void
  ): void;
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
   * @see {@link DescribeAssessmentCommand}
   */
  describeAssessment(
    args: DescribeAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssessmentCommandOutput>;
  describeAssessment(
    args: DescribeAssessmentCommandInput,
    cb: (err: any, data?: DescribeAssessmentCommandOutput) => void
  ): void;
  describeAssessment(
    args: DescribeAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssessmentCommandOutput) => void
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
  describeEntity(
    args: DescribeEntityCommandInput,
    cb: (err: any, data?: DescribeEntityCommandOutput) => void
  ): void;
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
   * @see {@link ListAssessmentsCommand}
   */
  listAssessments(
    args: ListAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentsCommandOutput>;
  listAssessments(
    args: ListAssessmentsCommandInput,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;
  listAssessments(
    args: ListAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChangeSetsCommand}
   */
  listChangeSets(
    args: ListChangeSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangeSetsCommandOutput>;
  listChangeSets(
    args: ListChangeSetsCommandInput,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;
  listChangeSets(
    args: ListChangeSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesCommand}
   */
  listEntities(
    args: ListEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesCommandOutput>;
  listEntities(
    args: ListEntitiesCommandInput,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;
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
  startChangeSet(
    args: StartChangeSetCommandInput,
    cb: (err: any, data?: StartChangeSetCommandOutput) => void
  ): void;
  startChangeSet(
    args: StartChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChangeSetCommandOutput) => void
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
   * @see {@link DescribeAssessmentCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAssessmentCommandOutput}.
   */
  paginateDescribeAssessment(
    args: DescribeAssessmentCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAssessmentCommandOutput>;

  /**
   * @see {@link ListAssessmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentsCommandOutput}.
   */
  paginateListAssessments(
    args: ListAssessmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentsCommandOutput>;

  /**
   * @see {@link ListChangeSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChangeSetsCommandOutput}.
   */
  paginateListChangeSets(
    args: ListChangeSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChangeSetsCommandOutput>;

  /**
   * @see {@link ListEntitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntitiesCommandOutput}.
   */
  paginateListEntities(
    args: ListEntitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntitiesCommandOutput>;
}

/**
 * <p>Catalog API actions allow you to manage your entities through list, describe, and
 *             update capabilities. An <i>entity</i> can be a product or an offer on AWS Marketplace. </p>
 *          <p>You can automate your entity update process by integrating the AWS Marketplace Catalog
 *             API with your AWS Marketplace product build or deployment pipelines. You can also create
 *             your own applications on top of the Catalog API to manage your products on AWS
 *             Marketplace.</p>
 * @public
 */
export class MarketplaceCatalog extends MarketplaceCatalogClient implements MarketplaceCatalog {}
createAggregatedClient(commands, MarketplaceCatalog, { paginators });
