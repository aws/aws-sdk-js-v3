// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateSupportPermitCommandInput,
  type CreateSupportPermitCommandOutput,
  CreateSupportPermitCommand,
} from "./commands/CreateSupportPermitCommand";
import {
  type DeleteSupportPermitCommandInput,
  type DeleteSupportPermitCommandOutput,
  DeleteSupportPermitCommand,
} from "./commands/DeleteSupportPermitCommand";
import { type GetActionCommandInput, type GetActionCommandOutput, GetActionCommand } from "./commands/GetActionCommand";
import {
  type GetSupportPermitCommandInput,
  type GetSupportPermitCommandOutput,
  GetSupportPermitCommand,
} from "./commands/GetSupportPermitCommand";
import {
  type ListActionsCommandInput,
  type ListActionsCommandOutput,
  ListActionsCommand,
} from "./commands/ListActionsCommand";
import {
  type ListSupportPermitRequestsCommandInput,
  type ListSupportPermitRequestsCommandOutput,
  ListSupportPermitRequestsCommand,
} from "./commands/ListSupportPermitRequestsCommand";
import {
  type ListSupportPermitsCommandInput,
  type ListSupportPermitsCommandOutput,
  ListSupportPermitsCommand,
} from "./commands/ListSupportPermitsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RejectSupportPermitRequestCommandInput,
  type RejectSupportPermitRequestCommandOutput,
  RejectSupportPermitRequestCommand,
} from "./commands/RejectSupportPermitRequestCommand";
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
import { paginateListActions } from "./pagination/ListActionsPaginator";
import { paginateListSupportPermitRequests } from "./pagination/ListSupportPermitRequestsPaginator";
import { paginateListSupportPermits } from "./pagination/ListSupportPermitsPaginator";
import { SupportAuthZClient } from "./SupportAuthZClient";

const commands = {
  CreateSupportPermitCommand,
  DeleteSupportPermitCommand,
  GetActionCommand,
  GetSupportPermitCommand,
  ListActionsCommand,
  ListSupportPermitRequestsCommand,
  ListSupportPermitsCommand,
  ListTagsForResourceCommand,
  RejectSupportPermitRequestCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListActions,
  paginateListSupportPermitRequests,
  paginateListSupportPermits,
};

export interface SupportAuthZ {
  /**
   * @see {@link CreateSupportPermitCommand}
   */
  createSupportPermit(
    args: CreateSupportPermitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSupportPermitCommandOutput>;
  createSupportPermit(
    args: CreateSupportPermitCommandInput,
    cb: (err: any, data?: CreateSupportPermitCommandOutput) => void
  ): void;
  createSupportPermit(
    args: CreateSupportPermitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSupportPermitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSupportPermitCommand}
   */
  deleteSupportPermit(
    args: DeleteSupportPermitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSupportPermitCommandOutput>;
  deleteSupportPermit(
    args: DeleteSupportPermitCommandInput,
    cb: (err: any, data?: DeleteSupportPermitCommandOutput) => void
  ): void;
  deleteSupportPermit(
    args: DeleteSupportPermitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSupportPermitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetActionCommand}
   */
  getAction(
    args: GetActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActionCommandOutput>;
  getAction(
    args: GetActionCommandInput,
    cb: (err: any, data?: GetActionCommandOutput) => void
  ): void;
  getAction(
    args: GetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSupportPermitCommand}
   */
  getSupportPermit(
    args: GetSupportPermitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSupportPermitCommandOutput>;
  getSupportPermit(
    args: GetSupportPermitCommandInput,
    cb: (err: any, data?: GetSupportPermitCommandOutput) => void
  ): void;
  getSupportPermit(
    args: GetSupportPermitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSupportPermitCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionsCommand}
   */
  listActions(
    args: ListActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActionsCommandOutput>;
  listActions(
    args: ListActionsCommandInput,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;
  listActions(
    args: ListActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupportPermitRequestsCommand}
   */
  listSupportPermitRequests(): Promise<ListSupportPermitRequestsCommandOutput>;
  listSupportPermitRequests(
    args: ListSupportPermitRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportPermitRequestsCommandOutput>;
  listSupportPermitRequests(
    args: ListSupportPermitRequestsCommandInput,
    cb: (err: any, data?: ListSupportPermitRequestsCommandOutput) => void
  ): void;
  listSupportPermitRequests(
    args: ListSupportPermitRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportPermitRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupportPermitsCommand}
   */
  listSupportPermits(): Promise<ListSupportPermitsCommandOutput>;
  listSupportPermits(
    args: ListSupportPermitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportPermitsCommandOutput>;
  listSupportPermits(
    args: ListSupportPermitsCommandInput,
    cb: (err: any, data?: ListSupportPermitsCommandOutput) => void
  ): void;
  listSupportPermits(
    args: ListSupportPermitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportPermitsCommandOutput) => void
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
   * @see {@link RejectSupportPermitRequestCommand}
   */
  rejectSupportPermitRequest(
    args: RejectSupportPermitRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectSupportPermitRequestCommandOutput>;
  rejectSupportPermitRequest(
    args: RejectSupportPermitRequestCommandInput,
    cb: (err: any, data?: RejectSupportPermitRequestCommandOutput) => void
  ): void;
  rejectSupportPermitRequest(
    args: RejectSupportPermitRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectSupportPermitRequestCommandOutput) => void
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
   * @see {@link ListActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListActionsCommandOutput}.
   */
  paginateListActions(
    args: ListActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListActionsCommandOutput>;

  /**
   * @see {@link ListSupportPermitRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSupportPermitRequestsCommandOutput}.
   */
  paginateListSupportPermitRequests(
    args?: ListSupportPermitRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSupportPermitRequestsCommandOutput>;

  /**
   * @see {@link ListSupportPermitsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSupportPermitsCommandOutput}.
   */
  paginateListSupportPermits(
    args?: ListSupportPermitsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSupportPermitsCommandOutput>;
}

/**
 * <fullname>AWS Support Authorization</fullname> <p>AWS SupportAuthZ enables you to control and authorize the actions that AWS support operators can perform on your resources. You create cryptographically signed support permits specifying which actions operators can perform, on which resources, and under what time-window conditions. Permits are signed using a customer-managed AWS KMS key (ECC_NIST_P384, SIGN_VERIFY) to ensure non-repudiation.</p>
 * @public
 */
export class SupportAuthZ extends SupportAuthZClient implements SupportAuthZ {}
createAggregatedClient(commands, SupportAuthZ, { paginators });
