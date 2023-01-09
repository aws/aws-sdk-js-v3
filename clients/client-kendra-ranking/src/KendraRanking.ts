// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { KendraRankingClient } from "./KendraRankingClient";

/**
 * <p>Amazon Kendra Intelligent Ranking uses Amazon Kendra
 *             semantic search capabilities to intelligently re-rank a search
 *             service's results.</p>
 */
export class KendraRanking extends KendraRankingClient {
  /**
   * <p>Creates a rescore execution plan. A rescore execution
   *             plan is an Amazon Kendra Intelligent Ranking resource
   *             used for provisioning the <code>Rescore</code> API. You set
   *             the number of capacity units that you require for
   *             Amazon Kendra Intelligent Ranking to rescore or re-rank
   *             a search service's results.</p>
   *          <p>For an example of using the
   *             <code>CreateRescoreExecutionPlan</code> API, including using
   *             the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically
   *                 ranking a search service's results</a>.</p>
   */
  public createRescoreExecutionPlan(
    args: CreateRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRescoreExecutionPlanCommandOutput>;
  public createRescoreExecutionPlan(
    args: CreateRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: CreateRescoreExecutionPlanCommandOutput) => void
  ): void;
  public createRescoreExecutionPlan(
    args: CreateRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRescoreExecutionPlanCommandOutput) => void
  ): void;
  public createRescoreExecutionPlan(
    args: CreateRescoreExecutionPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRescoreExecutionPlanCommandOutput) => void),
    cb?: (err: any, data?: CreateRescoreExecutionPlanCommandOutput) => void
  ): Promise<CreateRescoreExecutionPlanCommandOutput> | void {
    const command = new CreateRescoreExecutionPlanCommand(args);
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
   * <p>Deletes a rescore execution plan. A rescore execution
   *             plan is an Amazon Kendra Intelligent Ranking resource
   *             used for provisioning the <code>Rescore</code> API.</p>
   */
  public deleteRescoreExecutionPlan(
    args: DeleteRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRescoreExecutionPlanCommandOutput>;
  public deleteRescoreExecutionPlan(
    args: DeleteRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: DeleteRescoreExecutionPlanCommandOutput) => void
  ): void;
  public deleteRescoreExecutionPlan(
    args: DeleteRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRescoreExecutionPlanCommandOutput) => void
  ): void;
  public deleteRescoreExecutionPlan(
    args: DeleteRescoreExecutionPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRescoreExecutionPlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteRescoreExecutionPlanCommandOutput) => void
  ): Promise<DeleteRescoreExecutionPlanCommandOutput> | void {
    const command = new DeleteRescoreExecutionPlanCommand(args);
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
   * <p>Gets information about a rescore execution plan. A rescore
   *             execution plan is an Amazon Kendra Intelligent Ranking
   *             resource used for provisioning the <code>Rescore</code> API.</p>
   */
  public describeRescoreExecutionPlan(
    args: DescribeRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRescoreExecutionPlanCommandOutput>;
  public describeRescoreExecutionPlan(
    args: DescribeRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: DescribeRescoreExecutionPlanCommandOutput) => void
  ): void;
  public describeRescoreExecutionPlan(
    args: DescribeRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRescoreExecutionPlanCommandOutput) => void
  ): void;
  public describeRescoreExecutionPlan(
    args: DescribeRescoreExecutionPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRescoreExecutionPlanCommandOutput) => void),
    cb?: (err: any, data?: DescribeRescoreExecutionPlanCommandOutput) => void
  ): Promise<DescribeRescoreExecutionPlanCommandOutput> | void {
    const command = new DescribeRescoreExecutionPlanCommand(args);
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
   * <p>Lists your rescore execution plans. A rescore execution plan
   *             is an Amazon Kendra Intelligent Ranking resource used for
   *             provisioning the <code>Rescore</code> API.</p>
   */
  public listRescoreExecutionPlans(
    args: ListRescoreExecutionPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRescoreExecutionPlansCommandOutput>;
  public listRescoreExecutionPlans(
    args: ListRescoreExecutionPlansCommandInput,
    cb: (err: any, data?: ListRescoreExecutionPlansCommandOutput) => void
  ): void;
  public listRescoreExecutionPlans(
    args: ListRescoreExecutionPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRescoreExecutionPlansCommandOutput) => void
  ): void;
  public listRescoreExecutionPlans(
    args: ListRescoreExecutionPlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRescoreExecutionPlansCommandOutput) => void),
    cb?: (err: any, data?: ListRescoreExecutionPlansCommandOutput) => void
  ): Promise<ListRescoreExecutionPlansCommandOutput> | void {
    const command = new ListRescoreExecutionPlansCommand(args);
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
   * <p>Gets a list of tags associated with a specified resource.
   *             A rescore execution plan is an example of a resource that
   *             can have tags associated with it.</p>
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
   * <p>Rescores or re-ranks search results from a search service
   *             such as OpenSearch (self managed). You use the semantic search
   *             capabilities of Amazon Kendra Intelligent Ranking to
   *             improve the search service's results.</p>
   */
  public rescore(args: RescoreCommandInput, options?: __HttpHandlerOptions): Promise<RescoreCommandOutput>;
  public rescore(args: RescoreCommandInput, cb: (err: any, data?: RescoreCommandOutput) => void): void;
  public rescore(
    args: RescoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RescoreCommandOutput) => void
  ): void;
  public rescore(
    args: RescoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RescoreCommandOutput) => void),
    cb?: (err: any, data?: RescoreCommandOutput) => void
  ): Promise<RescoreCommandOutput> | void {
    const command = new RescoreCommand(args);
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
   * <p>Adds a specified tag to a specified rescore execution
   *             plan. A rescore execution plan is an Amazon Kendra
   *             Intelligent Ranking resource used for provisioning the
   *             <code>Rescore</code> API. If the tag already exists,
   *             the existing value is replaced with the new value.</p>
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
   * <p>Removes a tag from a rescore execution plan. A rescore
   *             execution plan is an Amazon Kendra Intelligent
   *             Ranking resource used for provisioning the
   *             <code>Rescore</code> operation.</p>
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

  /**
   * <p>Updates a rescore execution plan. A rescore execution plan
   *             is an Amazon Kendra Intelligent Ranking resource used for
   *             provisioning the <code>Rescore</code> API. You can update the
   *             number of capacity units you require for Amazon Kendra
   *             Intelligent Ranking to rescore or re-rank a search service's
   *             results.</p>
   */
  public updateRescoreExecutionPlan(
    args: UpdateRescoreExecutionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRescoreExecutionPlanCommandOutput>;
  public updateRescoreExecutionPlan(
    args: UpdateRescoreExecutionPlanCommandInput,
    cb: (err: any, data?: UpdateRescoreExecutionPlanCommandOutput) => void
  ): void;
  public updateRescoreExecutionPlan(
    args: UpdateRescoreExecutionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRescoreExecutionPlanCommandOutput) => void
  ): void;
  public updateRescoreExecutionPlan(
    args: UpdateRescoreExecutionPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRescoreExecutionPlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateRescoreExecutionPlanCommandOutput) => void
  ): Promise<UpdateRescoreExecutionPlanCommandOutput> | void {
    const command = new UpdateRescoreExecutionPlanCommand(args);
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
