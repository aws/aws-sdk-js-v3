// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreatePipeCommandInput,
  type CreatePipeCommandOutput,
  CreatePipeCommand,
} from "./commands/CreatePipeCommand";
import {
  type DeletePipeCommandInput,
  type DeletePipeCommandOutput,
  DeletePipeCommand,
} from "./commands/DeletePipeCommand";
import {
  type DescribePipeCommandInput,
  type DescribePipeCommandOutput,
  DescribePipeCommand,
} from "./commands/DescribePipeCommand";
import { type ListPipesCommandInput, type ListPipesCommandOutput, ListPipesCommand } from "./commands/ListPipesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type StartPipeCommandInput, type StartPipeCommandOutput, StartPipeCommand } from "./commands/StartPipeCommand";
import { type StopPipeCommandInput, type StopPipeCommandOutput, StopPipeCommand } from "./commands/StopPipeCommand";
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
import {
  type UpdatePipeCommandInput,
  type UpdatePipeCommandOutput,
  UpdatePipeCommand,
} from "./commands/UpdatePipeCommand";
import { paginateListPipes } from "./pagination/ListPipesPaginator";
import { PipesClient } from "./PipesClient";

const commands = {
  CreatePipeCommand,
  DeletePipeCommand,
  DescribePipeCommand,
  ListPipesCommand,
  ListTagsForResourceCommand,
  StartPipeCommand,
  StopPipeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePipeCommand,
};
const paginators = {
  paginateListPipes,
};

export interface Pipes {
  /**
   * @see {@link CreatePipeCommand}
   */
  createPipe(
    args: CreatePipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipeCommandOutput>;
  createPipe(
    args: CreatePipeCommandInput,
    cb: (err: any, data?: CreatePipeCommandOutput) => void
  ): void;
  createPipe(
    args: CreatePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePipeCommand}
   */
  deletePipe(
    args: DeletePipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipeCommandOutput>;
  deletePipe(
    args: DeletePipeCommandInput,
    cb: (err: any, data?: DeletePipeCommandOutput) => void
  ): void;
  deletePipe(
    args: DeletePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePipeCommand}
   */
  describePipe(
    args: DescribePipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipeCommandOutput>;
  describePipe(
    args: DescribePipeCommandInput,
    cb: (err: any, data?: DescribePipeCommandOutput) => void
  ): void;
  describePipe(
    args: DescribePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipesCommand}
   */
  listPipes(): Promise<ListPipesCommandOutput>;
  listPipes(
    args: ListPipesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipesCommandOutput>;
  listPipes(
    args: ListPipesCommandInput,
    cb: (err: any, data?: ListPipesCommandOutput) => void
  ): void;
  listPipes(
    args: ListPipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipesCommandOutput) => void
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
   * @see {@link StartPipeCommand}
   */
  startPipe(
    args: StartPipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPipeCommandOutput>;
  startPipe(
    args: StartPipeCommandInput,
    cb: (err: any, data?: StartPipeCommandOutput) => void
  ): void;
  startPipe(
    args: StartPipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipeCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPipeCommand}
   */
  stopPipe(
    args: StopPipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPipeCommandOutput>;
  stopPipe(
    args: StopPipeCommandInput,
    cb: (err: any, data?: StopPipeCommandOutput) => void
  ): void;
  stopPipe(
    args: StopPipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPipeCommandOutput) => void
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
   * @see {@link UpdatePipeCommand}
   */
  updatePipe(
    args: UpdatePipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipeCommandOutput>;
  updatePipe(
    args: UpdatePipeCommandInput,
    cb: (err: any, data?: UpdatePipeCommandOutput) => void
  ): void;
  updatePipe(
    args: UpdatePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPipesCommandOutput}.
   */
  paginateListPipes(
    args?: ListPipesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPipesCommandOutput>;
}

/**
 * <p>Amazon EventBridge Pipes connects event sources to targets. Pipes reduces the need
 *          for specialized knowledge and integration code when developing event driven architectures.
 *          This helps ensures consistency across your company’s applications. With Pipes, the target
 *          can be any available EventBridge target. To set up a pipe, you select the event
 *          source, add optional event filtering, define optional enrichment, and select the target for
 *          the event data. </p>
 * @public
 */
export class Pipes extends PipesClient implements Pipes {}
createAggregatedClient(commands, Pipes, { paginators });
