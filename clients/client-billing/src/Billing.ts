// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

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
  type GetEnterpriseSupportChargeSummaryCommandInput,
  type GetEnterpriseSupportChargeSummaryCommandOutput,
  GetEnterpriseSupportChargeSummaryCommand,
} from "./commands/GetEnterpriseSupportChargeSummaryCommand";
import {
  type GetEnterpriseSupportContractDetailsCommandInput,
  type GetEnterpriseSupportContractDetailsCommandOutput,
  GetEnterpriseSupportContractDetailsCommand,
} from "./commands/GetEnterpriseSupportContractDetailsCommand";
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
  type ListBillingViewSegmentsCommandInput,
  type ListBillingViewSegmentsCommandOutput,
  ListBillingViewSegmentsCommand,
} from "./commands/ListBillingViewSegmentsCommand";
import {
  type ListEnterpriseSupportLinkedAccountChargesCommandInput,
  type ListEnterpriseSupportLinkedAccountChargesCommandOutput,
  ListEnterpriseSupportLinkedAccountChargesCommand,
} from "./commands/ListEnterpriseSupportLinkedAccountChargesCommand";
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
import { paginateListBillingViewSegments } from "./pagination/ListBillingViewSegmentsPaginator";
import { paginateListBillingViews } from "./pagination/ListBillingViewsPaginator";
import {
  paginateListEnterpriseSupportLinkedAccountCharges,
} from "./pagination/ListEnterpriseSupportLinkedAccountChargesPaginator";
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
  GetEnterpriseSupportChargeSummaryCommand,
  GetEnterpriseSupportContractDetailsCommand,
  GetResourcePolicyCommand,
  ListBillingViewsCommand,
  ListBillingViewSegmentsCommand,
  ListEnterpriseSupportLinkedAccountChargesCommand,
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
  paginateListBillingViewSegments,
  paginateListEnterpriseSupportLinkedAccountCharges,
  paginateListSourceViewsForBillingView,
};

/**
 * @public
 */
export interface BillingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Billing {
  /**
   * @see {@link AssociateSourceViewsCommand}
   */
  associateSourceViews(
    args: AssociateSourceViewsCommandInput,
    options?: BillingRequestOptions
  ): Promise<AssociateSourceViewsCommandOutput>;
  associateSourceViews(
    args: AssociateSourceViewsCommandInput,
    cb: (err: any, data?: AssociateSourceViewsCommandOutput) => void
  ): void;
  associateSourceViews(
    args: AssociateSourceViewsCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: AssociateSourceViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBillingViewCommand}
   */
  createBillingView(
    args: CreateBillingViewCommandInput,
    options?: BillingRequestOptions
  ): Promise<CreateBillingViewCommandOutput>;
  createBillingView(
    args: CreateBillingViewCommandInput,
    cb: (err: any, data?: CreateBillingViewCommandOutput) => void
  ): void;
  createBillingView(
    args: CreateBillingViewCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: CreateBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBillingViewCommand}
   */
  deleteBillingView(
    args: DeleteBillingViewCommandInput,
    options?: BillingRequestOptions
  ): Promise<DeleteBillingViewCommandOutput>;
  deleteBillingView(
    args: DeleteBillingViewCommandInput,
    cb: (err: any, data?: DeleteBillingViewCommandOutput) => void
  ): void;
  deleteBillingView(
    args: DeleteBillingViewCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: DeleteBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSourceViewsCommand}
   */
  disassociateSourceViews(
    args: DisassociateSourceViewsCommandInput,
    options?: BillingRequestOptions
  ): Promise<DisassociateSourceViewsCommandOutput>;
  disassociateSourceViews(
    args: DisassociateSourceViewsCommandInput,
    cb: (err: any, data?: DisassociateSourceViewsCommandOutput) => void
  ): void;
  disassociateSourceViews(
    args: DisassociateSourceViewsCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: DisassociateSourceViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillingPreferencesCommand}
   */
  getBillingPreferences(
    args: GetBillingPreferencesCommandInput,
    options?: BillingRequestOptions
  ): Promise<GetBillingPreferencesCommandOutput>;
  getBillingPreferences(
    args: GetBillingPreferencesCommandInput,
    cb: (err: any, data?: GetBillingPreferencesCommandOutput) => void
  ): void;
  getBillingPreferences(
    args: GetBillingPreferencesCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: GetBillingPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillingViewCommand}
   */
  getBillingView(
    args: GetBillingViewCommandInput,
    options?: BillingRequestOptions
  ): Promise<GetBillingViewCommandOutput>;
  getBillingView(
    args: GetBillingViewCommandInput,
    cb: (err: any, data?: GetBillingViewCommandOutput) => void
  ): void;
  getBillingView(
    args: GetBillingViewCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: GetBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCreditAllocationHistoryCommand}
   */
  getCreditAllocationHistory(
    args: GetCreditAllocationHistoryCommandInput,
    options?: BillingRequestOptions
  ): Promise<GetCreditAllocationHistoryCommandOutput>;
  getCreditAllocationHistory(
    args: GetCreditAllocationHistoryCommandInput,
    cb: (err: any, data?: GetCreditAllocationHistoryCommandOutput) => void
  ): void;
  getCreditAllocationHistory(
    args: GetCreditAllocationHistoryCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: GetCreditAllocationHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCreditsCommand}
   */
  getCredits(
    args: GetCreditsCommandInput,
    options?: BillingRequestOptions
  ): Promise<GetCreditsCommandOutput>;
  getCredits(
    args: GetCreditsCommandInput,
    cb: (err: any, data?: GetCreditsCommandOutput) => void
  ): void;
  getCredits(
    args: GetCreditsCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: GetCreditsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnterpriseSupportChargeSummaryCommand}
   */
  getEnterpriseSupportChargeSummary(
    args: GetEnterpriseSupportChargeSummaryCommandInput,
    options?: BillingRequestOptions
  ): Promise<GetEnterpriseSupportChargeSummaryCommandOutput>;
  getEnterpriseSupportChargeSummary(
    args: GetEnterpriseSupportChargeSummaryCommandInput,
    cb: (err: any, data?: GetEnterpriseSupportChargeSummaryCommandOutput) => void
  ): void;
  getEnterpriseSupportChargeSummary(
    args: GetEnterpriseSupportChargeSummaryCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: GetEnterpriseSupportChargeSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnterpriseSupportContractDetailsCommand}
   */
  getEnterpriseSupportContractDetails(
    args: GetEnterpriseSupportContractDetailsCommandInput,
    options?: BillingRequestOptions
  ): Promise<GetEnterpriseSupportContractDetailsCommandOutput>;
  getEnterpriseSupportContractDetails(
    args: GetEnterpriseSupportContractDetailsCommandInput,
    cb: (err: any, data?: GetEnterpriseSupportContractDetailsCommandOutput) => void
  ): void;
  getEnterpriseSupportContractDetails(
    args: GetEnterpriseSupportContractDetailsCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: GetEnterpriseSupportContractDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: BillingRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingViewsCommand}
   */
  listBillingViews(): Promise<ListBillingViewsCommandOutput>;
  listBillingViews(
    args: ListBillingViewsCommandInput,
    options?: BillingRequestOptions
  ): Promise<ListBillingViewsCommandOutput>;
  listBillingViews(
    args: ListBillingViewsCommandInput,
    cb: (err: any, data?: ListBillingViewsCommandOutput) => void
  ): void;
  listBillingViews(
    args: ListBillingViewsCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: ListBillingViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingViewSegmentsCommand}
   */
  listBillingViewSegments(): Promise<ListBillingViewSegmentsCommandOutput>;
  listBillingViewSegments(
    args: ListBillingViewSegmentsCommandInput,
    options?: BillingRequestOptions
  ): Promise<ListBillingViewSegmentsCommandOutput>;
  listBillingViewSegments(
    args: ListBillingViewSegmentsCommandInput,
    cb: (err: any, data?: ListBillingViewSegmentsCommandOutput) => void
  ): void;
  listBillingViewSegments(
    args: ListBillingViewSegmentsCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: ListBillingViewSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnterpriseSupportLinkedAccountChargesCommand}
   */
  listEnterpriseSupportLinkedAccountCharges(
    args: ListEnterpriseSupportLinkedAccountChargesCommandInput,
    options?: BillingRequestOptions
  ): Promise<ListEnterpriseSupportLinkedAccountChargesCommandOutput>;
  listEnterpriseSupportLinkedAccountCharges(
    args: ListEnterpriseSupportLinkedAccountChargesCommandInput,
    cb: (err: any, data?: ListEnterpriseSupportLinkedAccountChargesCommandOutput) => void
  ): void;
  listEnterpriseSupportLinkedAccountCharges(
    args: ListEnterpriseSupportLinkedAccountChargesCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: ListEnterpriseSupportLinkedAccountChargesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceViewsForBillingViewCommand}
   */
  listSourceViewsForBillingView(
    args: ListSourceViewsForBillingViewCommandInput,
    options?: BillingRequestOptions
  ): Promise<ListSourceViewsForBillingViewCommandOutput>;
  listSourceViewsForBillingView(
    args: ListSourceViewsForBillingViewCommandInput,
    cb: (err: any, data?: ListSourceViewsForBillingViewCommandOutput) => void
  ): void;
  listSourceViewsForBillingView(
    args: ListSourceViewsForBillingViewCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: ListSourceViewsForBillingViewCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: BillingRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RedeemCreditsCommand}
   */
  redeemCredits(
    args: RedeemCreditsCommandInput,
    options?: BillingRequestOptions
  ): Promise<RedeemCreditsCommandOutput>;
  redeemCredits(
    args: RedeemCreditsCommandInput,
    cb: (err: any, data?: RedeemCreditsCommandOutput) => void
  ): void;
  redeemCredits(
    args: RedeemCreditsCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: RedeemCreditsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: BillingRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: BillingRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBillingPreferencesCommand}
   */
  updateBillingPreferences(
    args: UpdateBillingPreferencesCommandInput,
    options?: BillingRequestOptions
  ): Promise<UpdateBillingPreferencesCommandOutput>;
  updateBillingPreferences(
    args: UpdateBillingPreferencesCommandInput,
    cb: (err: any, data?: UpdateBillingPreferencesCommandOutput) => void
  ): void;
  updateBillingPreferences(
    args: UpdateBillingPreferencesCommandInput,
    options: BillingRequestOptions,
    cb: (err: any, data?: UpdateBillingPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBillingViewCommand}
   */
  updateBillingView(
    args: UpdateBillingViewCommandInput,
    options?: BillingRequestOptions
  ): Promise<UpdateBillingViewCommandOutput>;
  updateBillingView(
    args: UpdateBillingViewCommandInput,
    cb: (err: any, data?: UpdateBillingViewCommandOutput) => void
  ): void;
  updateBillingView(
    args: UpdateBillingViewCommandInput,
    options: BillingRequestOptions,
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
   * @see {@link ListBillingViewSegmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillingViewSegmentsCommandOutput}.
   */
  paginateListBillingViewSegments(
    args?: ListBillingViewSegmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillingViewSegmentsCommandOutput>;

  /**
   * @see {@link ListEnterpriseSupportLinkedAccountChargesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnterpriseSupportLinkedAccountChargesCommandOutput}.
   */
  paginateListEnterpriseSupportLinkedAccountCharges(
    args: ListEnterpriseSupportLinkedAccountChargesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnterpriseSupportLinkedAccountChargesCommandOutput>;

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
