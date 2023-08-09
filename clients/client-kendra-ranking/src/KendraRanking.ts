// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateRescoreExecutionPlanCommand,
  CreateRescoreExecutionPlanCommandInput,
  CreateRescoreExecutionPlanCommandOutput,
} from "./commands/CreateRescoreExecutionPlanCommand";
import {
  DeleteRescoreExecutionPlanCommand,
  DeleteRescoreExecutionPlanCommandInput,
  DeleteRescoreExecutionPlanCommandOutput,
} from "./commands/DeleteRescoreExecutionPlanCommand";
import {
  DescribeRescoreExecutionPlanCommand,
  DescribeRescoreExecutionPlanCommandInput,
  DescribeRescoreExecutionPlanCommandOutput,
} from "./commands/DescribeRescoreExecutionPlanCommand";
import {
  ListRescoreExecutionPlansCommand,
  ListRescoreExecutionPlansCommandInput,
  ListRescoreExecutionPlansCommandOutput,
} from "./commands/ListRescoreExecutionPlansCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RescoreCommand, RescoreCommandInput, RescoreCommandOutput } from "./commands/RescoreCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateRescoreExecutionPlanCommand,
  UpdateRescoreExecutionPlanCommandInput,
  UpdateRescoreExecutionPlanCommandOutput,
} from "./commands/UpdateRescoreExecutionPlanCommand";
import { KendraRankingClient, KendraRankingClientConfig } from "./KendraRankingClient";

const commands = {
  CreateRescoreExecutionPlanCommand,
  DeleteRescoreExecutionPlanCommand,
  DescribeRescoreExecutionPlanCommand,
  ListRescoreExecutionPlansCommand,
  ListTagsForResourceCommand,
  RescoreCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateRescoreExecutionPlanCommand,
};

export interface KendraRanking {
  /**
   * @see {@link CreateRescoreExecutionPlanCommand}
   */
  createRescoreExecutionPlan(
    args: CreateRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRescoreExecutionPlanCommandOutput>;
  createRescoreExecutionPlan(
    args: CreateRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: CreateRescoreExecutionPlanCommandOutput) => void
  ): void;
  createRescoreExecutionPlan(
    args: CreateRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRescoreExecutionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRescoreExecutionPlanCommand}
   */
  deleteRescoreExecutionPlan(
    args: DeleteRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRescoreExecutionPlanCommandOutput>;
  deleteRescoreExecutionPlan(
    args: DeleteRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: DeleteRescoreExecutionPlanCommandOutput) => void
  ): void;
  deleteRescoreExecutionPlan(
    args: DeleteRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRescoreExecutionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRescoreExecutionPlanCommand}
   */
  describeRescoreExecutionPlan(
    args: DescribeRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRescoreExecutionPlanCommandOutput>;
  describeRescoreExecutionPlan(
    args: DescribeRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: DescribeRescoreExecutionPlanCommandOutput) => void
  ): void;
  describeRescoreExecutionPlan(
    args: DescribeRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRescoreExecutionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRescoreExecutionPlansCommand}
   */
  listRescoreExecutionPlans(
    args: ListRescoreExecutionPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRescoreExecutionPlansCommandOutput>;
  listRescoreExecutionPlans(
    args: ListRescoreExecutionPlansCommandInput,
    cb: (err: any, data?: ListRescoreExecutionPlansCommandOutput) => void
  ): void;
  listRescoreExecutionPlans(
    args: ListRescoreExecutionPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRescoreExecutionPlansCommandOutput) => void
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
   * @see {@link RescoreCommand}
   */
  rescore(args: RescoreCommandInput, options?: __HttpHandlerOptions): Promise<RescoreCommandOutput>;
  rescore(args: RescoreCommandInput, cb: (err: any, data?: RescoreCommandOutput) => void): void;
  rescore(
    args: RescoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RescoreCommandOutput) => void
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

  /**
   * @see {@link UpdateRescoreExecutionPlanCommand}
   */
  updateRescoreExecutionPlan(
    args: UpdateRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRescoreExecutionPlanCommandOutput>;
  updateRescoreExecutionPlan(
    args: UpdateRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: UpdateRescoreExecutionPlanCommandOutput) => void
  ): void;
  updateRescoreExecutionPlan(
    args: UpdateRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRescoreExecutionPlanCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Kendra Intelligent Ranking uses Amazon Kendra
 *             semantic search capabilities to intelligently re-rank a search
 *             service's results.</p>
 */
export class KendraRanking extends KendraRankingClient implements KendraRanking {}
createAggregatedClient(commands, KendraRanking);
