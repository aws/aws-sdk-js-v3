// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { BillingClient } from "./BillingClient";
import {
  type AssociateSourceViewsCommandInput,
  type AssociateSourceViewsCommandOutput,
  AssociateSourceViewsCommand,
} from "./commands/AssociateSourceViewsCommand";
import {
  type CreateBillingViewCommandInput,
  type CreateBillingViewCommandOutput,
  CreateBillingViewCommand,
} from "./commands/CreateBillingViewCommand";
import {
  type DeleteBillingViewCommandInput,
  type DeleteBillingViewCommandOutput,
  DeleteBillingViewCommand,
} from "./commands/DeleteBillingViewCommand";
import {
  type DisassociateSourceViewsCommandInput,
  type DisassociateSourceViewsCommandOutput,
  DisassociateSourceViewsCommand,
} from "./commands/DisassociateSourceViewsCommand";
import {
  type GetBillingPreferencesCommandInput,
  type GetBillingPreferencesCommandOutput,
  GetBillingPreferencesCommand,
} from "./commands/GetBillingPreferencesCommand";
import {
  type GetBillingViewCommandInput,
  type GetBillingViewCommandOutput,
  GetBillingViewCommand,
} from "./commands/GetBillingViewCommand";
import {
  type GetCreditAllocationHistoryCommandInput,
  type GetCreditAllocationHistoryCommandOutput,
  GetCreditAllocationHistoryCommand,
} from "./commands/GetCreditAllocationHistoryCommand";
import {
  type GetCreditsCommandInput,
  type GetCreditsCommandOutput,
  GetCreditsCommand,
} from "./commands/GetCreditsCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListBillingViewsCommandInput,
  type ListBillingViewsCommandOutput,
  ListBillingViewsCommand,
} from "./commands/ListBillingViewsCommand";
import {
  type ListSourceViewsForBillingViewCommandInput,
  type ListSourceViewsForBillingViewCommandOutput,
  ListSourceViewsForBillingViewCommand,
} from "./commands/ListSourceViewsForBillingViewCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RedeemCreditsCommandInput,
  type RedeemCreditsCommandOutput,
  RedeemCreditsCommand,
} from "./commands/RedeemCreditsCommand";
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
  type UpdateBillingPreferencesCommandInput,
  type UpdateBillingPreferencesCommandOutput,
  UpdateBillingPreferencesCommand,
} from "./commands/UpdateBillingPreferencesCommand";
import {
  type UpdateBillingViewCommandInput,
  type UpdateBillingViewCommandOutput,
  UpdateBillingViewCommand,
} from "./commands/UpdateBillingViewCommand";
import { paginateGetCreditAllocationHistory } from "./pagination/GetCreditAllocationHistoryPaginator";
import { paginateListBillingViews } from "./pagination/ListBillingViewsPaginator";
import { paginateListSourceViewsForBillingView } from "./pagination/ListSourceViewsForBillingViewPaginator";

const commands = {
  AssociateSourceViewsCommand,
  CreateBillingViewCommand,
  DeleteBillingViewCommand,
  DisassociateSourceViewsCommand,
  GetBillingPreferencesCommand,
  GetBillingViewCommand,
  GetCreditAllocationHistoryCommand,
  GetCreditsCommand,
  GetResourcePolicyCommand,
  ListBillingViewsCommand,
  ListSourceViewsForBillingViewCommand,
  ListTagsForResourceCommand,
  RedeemCreditsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBillingPreferencesCommand,
  UpdateBillingViewCommand,
};
const paginators = {
  paginateGetCreditAllocationHistory,
  paginateListBillingViews,
  paginateListSourceViewsForBillingView,
};

export interface Billing {
  /**
   * @see {@link AssociateSourceViewsCommand}
   */
  associateSourceViews(
    args: AssociateSourceViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSourceViewsCommandOutput>;
  associateSourceViews(
    args: AssociateSourceViewsCommandInput,
    cb: (err: any, data?: AssociateSourceViewsCommandOutput) => void
  ): void;
  associateSourceViews(
    args: AssociateSourceViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSourceViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBillingViewCommand}
   */
  createBillingView(
    args: CreateBillingViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillingViewCommandOutput>;
  createBillingView(
    args: CreateBillingViewCommandInput,
    cb: (err: any, data?: CreateBillingViewCommandOutput) => void
  ): void;
  createBillingView(
    args: CreateBillingViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBillingViewCommand}
   */
  deleteBillingView(
    args: DeleteBillingViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBillingViewCommandOutput>;
  deleteBillingView(
    args: DeleteBillingViewCommandInput,
    cb: (err: any, data?: DeleteBillingViewCommandOutput) => void
  ): void;
  deleteBillingView(
    args: DeleteBillingViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSourceViewsCommand}
   */
  disassociateSourceViews(
    args: DisassociateSourceViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSourceViewsCommandOutput>;
  disassociateSourceViews(
    args: DisassociateSourceViewsCommandInput,
    cb: (err: any, data?: DisassociateSourceViewsCommandOutput) => void
  ): void;
  disassociateSourceViews(
    args: DisassociateSourceViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSourceViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillingPreferencesCommand}
   */
  getBillingPreferences(
    args: GetBillingPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillingPreferencesCommandOutput>;
  getBillingPreferences(
    args: GetBillingPreferencesCommandInput,
    cb: (err: any, data?: GetBillingPreferencesCommandOutput) => void
  ): void;
  getBillingPreferences(
    args: GetBillingPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillingPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillingViewCommand}
   */
  getBillingView(
    args: GetBillingViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillingViewCommandOutput>;
  getBillingView(
    args: GetBillingViewCommandInput,
    cb: (err: any, data?: GetBillingViewCommandOutput) => void
  ): void;
  getBillingView(
    args: GetBillingViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCreditAllocationHistoryCommand}
   */
  getCreditAllocationHistory(
    args: GetCreditAllocationHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCreditAllocationHistoryCommandOutput>;
  getCreditAllocationHistory(
    args: GetCreditAllocationHistoryCommandInput,
    cb: (err: any, data?: GetCreditAllocationHistoryCommandOutput) => void
  ): void;
  getCreditAllocationHistory(
    args: GetCreditAllocationHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCreditAllocationHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCreditsCommand}
   */
  getCredits(
    args: GetCreditsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCreditsCommandOutput>;
  getCredits(
    args: GetCreditsCommandInput,
    cb: (err: any, data?: GetCreditsCommandOutput) => void
  ): void;
  getCredits(
    args: GetCreditsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCreditsCommandOutput) => void
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
   * @see {@link ListBillingViewsCommand}
   */
  listBillingViews(): Promise<ListBillingViewsCommandOutput>;
  listBillingViews(
    args: ListBillingViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingViewsCommandOutput>;
  listBillingViews(
    args: ListBillingViewsCommandInput,
    cb: (err: any, data?: ListBillingViewsCommandOutput) => void
  ): void;
  listBillingViews(
    args: ListBillingViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceViewsForBillingViewCommand}
   */
  listSourceViewsForBillingView(
    args: ListSourceViewsForBillingViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceViewsForBillingViewCommandOutput>;
  listSourceViewsForBillingView(
    args: ListSourceViewsForBillingViewCommandInput,
    cb: (err: any, data?: ListSourceViewsForBillingViewCommandOutput) => void
  ): void;
  listSourceViewsForBillingView(
    args: ListSourceViewsForBillingViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceViewsForBillingViewCommandOutput) => void
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
   * @see {@link RedeemCreditsCommand}
   */
  redeemCredits(
    args: RedeemCreditsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RedeemCreditsCommandOutput>;
  redeemCredits(
    args: RedeemCreditsCommandInput,
    cb: (err: any, data?: RedeemCreditsCommandOutput) => void
  ): void;
  redeemCredits(
    args: RedeemCreditsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RedeemCreditsCommandOutput) => void
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
   * @see {@link UpdateBillingPreferencesCommand}
   */
  updateBillingPreferences(
    args: UpdateBillingPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillingPreferencesCommandOutput>;
  updateBillingPreferences(
    args: UpdateBillingPreferencesCommandInput,
    cb: (err: any, data?: UpdateBillingPreferencesCommandOutput) => void
  ): void;
  updateBillingPreferences(
    args: UpdateBillingPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillingPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBillingViewCommand}
   */
  updateBillingView(
    args: UpdateBillingViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillingViewCommandOutput>;
  updateBillingView(
    args: UpdateBillingViewCommandInput,
    cb: (err: any, data?: UpdateBillingViewCommandOutput) => void
  ): void;
  updateBillingView(
    args: UpdateBillingViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCreditAllocationHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCreditAllocationHistoryCommandOutput}.
   */
  paginateGetCreditAllocationHistory(
    args: GetCreditAllocationHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCreditAllocationHistoryCommandOutput>;

  /**
   * @see {@link ListBillingViewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillingViewsCommandOutput}.
   */
  paginateListBillingViews(
    args?: ListBillingViewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillingViewsCommandOutput>;

  /**
   * @see {@link ListSourceViewsForBillingViewCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourceViewsForBillingViewCommandOutput}.
   */
  paginateListSourceViewsForBillingView(
    args: ListSourceViewsForBillingViewCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourceViewsForBillingViewCommandOutput>;
}

/**
 * <p> You can use the Billing API to programatically list the billing views available to you for a given time period. A billing view represents a set of billing data. </p> <p>The Billing API provides the following endpoint:</p> <p> <code>https://billing.us-east-1.api.aws</code> </p>
 * @public
 */
export class Billing extends BillingClient implements Billing {}
createAggregatedClient(commands, Billing, { paginators });
