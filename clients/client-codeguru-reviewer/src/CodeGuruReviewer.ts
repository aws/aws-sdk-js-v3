// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import { CodeGuruReviewerClient } from "./CodeGuruReviewerClient";
import {
  AssociateRepositoryCommand,
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput,
} from "./commands/AssociateRepositoryCommand";
import {
  CreateCodeReviewCommand,
  CreateCodeReviewCommandInput,
  CreateCodeReviewCommandOutput,
} from "./commands/CreateCodeReviewCommand";
import {
  DescribeCodeReviewCommand,
  DescribeCodeReviewCommandInput,
  DescribeCodeReviewCommandOutput,
} from "./commands/DescribeCodeReviewCommand";
import {
  DescribeRecommendationFeedbackCommand,
  DescribeRecommendationFeedbackCommandInput,
  DescribeRecommendationFeedbackCommandOutput,
} from "./commands/DescribeRecommendationFeedbackCommand";
import {
  DescribeRepositoryAssociationCommand,
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput,
} from "./commands/DescribeRepositoryAssociationCommand";
import {
  DisassociateRepositoryCommand,
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput,
} from "./commands/DisassociateRepositoryCommand";
import {
  ListCodeReviewsCommand,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
} from "./commands/ListCodeReviewsCommand";
import {
  ListRecommendationFeedbackCommand,
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "./commands/ListRecommendationFeedbackCommand";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import {
  ListRepositoryAssociationsCommand,
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
} from "./commands/ListRepositoryAssociationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutRecommendationFeedbackCommand,
  PutRecommendationFeedbackCommandInput,
  PutRecommendationFeedbackCommandOutput,
} from "./commands/PutRecommendationFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { paginateListCodeReviews } from "./pagination/ListCodeReviewsPaginator";
import { paginateListRecommendationFeedback } from "./pagination/ListRecommendationFeedbackPaginator";
import { paginateListRecommendations } from "./pagination/ListRecommendationsPaginator";
import { paginateListRepositoryAssociations } from "./pagination/ListRepositoryAssociationsPaginator";
import { waitUntilCodeReviewCompleted } from "./waiters/waitForCodeReviewCompleted";
import { waitUntilRepositoryAssociationSucceeded } from "./waiters/waitForRepositoryAssociationSucceeded";

const commands = {
  AssociateRepositoryCommand,
  CreateCodeReviewCommand,
  DescribeCodeReviewCommand,
  DescribeRecommendationFeedbackCommand,
  DescribeRepositoryAssociationCommand,
  DisassociateRepositoryCommand,
  ListCodeReviewsCommand,
  ListRecommendationFeedbackCommand,
  ListRecommendationsCommand,
  ListRepositoryAssociationsCommand,
  ListTagsForResourceCommand,
  PutRecommendationFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListCodeReviews,
  paginateListRecommendationFeedback,
  paginateListRecommendations,
  paginateListRepositoryAssociations,
};
const waiters = {
  waitUntilCodeReviewCompleted,
  waitUntilRepositoryAssociationSucceeded,
};

export interface CodeGuruReviewer {
  /**
   * @see {@link AssociateRepositoryCommand}
   */
  associateRepository(
    args: AssociateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRepositoryCommandOutput>;
  associateRepository(
    args: AssociateRepositoryCommandInput,
    cb: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): void;
  associateRepository(
    args: AssociateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeReviewCommand}
   */
  createCodeReview(
    args: CreateCodeReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeReviewCommandOutput>;
  createCodeReview(
    args: CreateCodeReviewCommandInput,
    cb: (err: any, data?: CreateCodeReviewCommandOutput) => void
  ): void;
  createCodeReview(
    args: CreateCodeReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCodeReviewCommand}
   */
  describeCodeReview(
    args: DescribeCodeReviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeReviewCommandOutput>;
  describeCodeReview(
    args: DescribeCodeReviewCommandInput,
    cb: (err: any, data?: DescribeCodeReviewCommandOutput) => void
  ): void;
  describeCodeReview(
    args: DescribeCodeReviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeReviewCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecommendationFeedbackCommand}
   */
  describeRecommendationFeedback(
    args: DescribeRecommendationFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommendationFeedbackCommandOutput>;
  describeRecommendationFeedback(
    args: DescribeRecommendationFeedbackCommandInput,
    cb: (err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void
  ): void;
  describeRecommendationFeedback(
    args: DescribeRecommendationFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRepositoryAssociationCommand}
   */
  describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoryAssociationCommandOutput>;
  describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): void;
  describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateRepositoryCommand}
   */
  disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRepositoryCommandOutput>;
  disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): void;
  disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeReviewsCommand}
   */
  listCodeReviews(
    args: ListCodeReviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeReviewsCommandOutput>;
  listCodeReviews(
    args: ListCodeReviewsCommandInput,
    cb: (err: any, data?: ListCodeReviewsCommandOutput) => void
  ): void;
  listCodeReviews(
    args: ListCodeReviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeReviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationFeedbackCommand}
   */
  listRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationFeedbackCommandOutput>;
  listRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    cb: (err: any, data?: ListRecommendationFeedbackCommandOutput) => void
  ): void;
  listRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositoryAssociationsCommand}
   */
  listRepositoryAssociations(): Promise<ListRepositoryAssociationsCommandOutput>;
  listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoryAssociationsCommandOutput>;
  listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
  ): void;
  listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
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
   * @see {@link PutRecommendationFeedbackCommand}
   */
  putRecommendationFeedback(
    args: PutRecommendationFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRecommendationFeedbackCommandOutput>;
  putRecommendationFeedback(
    args: PutRecommendationFeedbackCommandInput,
    cb: (err: any, data?: PutRecommendationFeedbackCommandOutput) => void
  ): void;
  putRecommendationFeedback(
    args: PutRecommendationFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecommendationFeedbackCommandOutput) => void
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
   * @see {@link ListCodeReviewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeReviewsCommandOutput}.
   */
  paginateListCodeReviews(
    args: ListCodeReviewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeReviewsCommandOutput>;

  /**
   * @see {@link ListRecommendationFeedbackCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationFeedbackCommandOutput}.
   */
  paginateListRecommendationFeedback(
    args: ListRecommendationFeedbackCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationFeedbackCommandOutput>;

  /**
   * @see {@link ListRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationsCommandOutput}.
   */
  paginateListRecommendations(
    args: ListRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationsCommandOutput>;

  /**
   * @see {@link ListRepositoryAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRepositoryAssociationsCommandOutput}.
   */
  paginateListRepositoryAssociations(
    args?: ListRepositoryAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRepositoryAssociationsCommandOutput>;

  /**
   * @see {@link DescribeCodeReviewCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCodeReviewCompleted(
    args: DescribeCodeReviewCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<CodeGuruReviewer>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeRepositoryAssociationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRepositoryAssociationSucceeded(
    args: DescribeRepositoryAssociationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<CodeGuruReviewer>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a
 *          service that uses program analysis and machine learning to detect potential defects that
 *          are difficult for developers to find and recommends fixes in your Java and Python
 *          code.</p>
 *          <p>By proactively detecting and providing recommendations for addressing code defects and
 *          implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of
 *          your code base during the code review stage. For more information about CodeGuru Reviewer, see the
 *                <i>
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i>
 *          </p>
 *          <p>To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection
 *          between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For
 *          more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC
 *             endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User
 *          Guide</i>.</p>
 * @public
 */
export class CodeGuruReviewer extends CodeGuruReviewerClient implements CodeGuruReviewer {}
createAggregatedClient(commands, CodeGuruReviewer, { paginators, waiters });
