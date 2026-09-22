// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AmendBenefitApplicationCommandInput,
  type AmendBenefitApplicationCommandOutput,
  AmendBenefitApplicationCommand,
} from "./commands/AmendBenefitApplicationCommand";
import {
  type AssociateBenefitApplicationResourceCommandInput,
  type AssociateBenefitApplicationResourceCommandOutput,
  AssociateBenefitApplicationResourceCommand,
} from "./commands/AssociateBenefitApplicationResourceCommand";
import {
  type CancelBenefitApplicationCommandInput,
  type CancelBenefitApplicationCommandOutput,
  CancelBenefitApplicationCommand,
} from "./commands/CancelBenefitApplicationCommand";
import {
  type CreateBenefitApplicationCommandInput,
  type CreateBenefitApplicationCommandOutput,
  CreateBenefitApplicationCommand,
} from "./commands/CreateBenefitApplicationCommand";
import {
  type DisassociateBenefitApplicationResourceCommandInput,
  type DisassociateBenefitApplicationResourceCommandOutput,
  DisassociateBenefitApplicationResourceCommand,
} from "./commands/DisassociateBenefitApplicationResourceCommand";
import {
  type GetBenefitAllocationCommandInput,
  type GetBenefitAllocationCommandOutput,
  GetBenefitAllocationCommand,
} from "./commands/GetBenefitAllocationCommand";
import {
  type GetBenefitApplicationCommandInput,
  type GetBenefitApplicationCommandOutput,
  GetBenefitApplicationCommand,
} from "./commands/GetBenefitApplicationCommand";
import {
  type GetBenefitCommandInput,
  type GetBenefitCommandOutput,
  GetBenefitCommand,
} from "./commands/GetBenefitCommand";
import {
  type ListBenefitAllocationsCommandInput,
  type ListBenefitAllocationsCommandOutput,
  ListBenefitAllocationsCommand,
} from "./commands/ListBenefitAllocationsCommand";
import {
  type ListBenefitApplicationsCommandInput,
  type ListBenefitApplicationsCommandOutput,
  ListBenefitApplicationsCommand,
} from "./commands/ListBenefitApplicationsCommand";
import {
  type ListBenefitsCommandInput,
  type ListBenefitsCommandOutput,
  ListBenefitsCommand,
} from "./commands/ListBenefitsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RecallBenefitApplicationCommandInput,
  type RecallBenefitApplicationCommandOutput,
  RecallBenefitApplicationCommand,
} from "./commands/RecallBenefitApplicationCommand";
import {
  type SubmitBenefitApplicationCommandInput,
  type SubmitBenefitApplicationCommandOutput,
  SubmitBenefitApplicationCommand,
} from "./commands/SubmitBenefitApplicationCommand";
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
  type UpdateBenefitApplicationCommandInput,
  type UpdateBenefitApplicationCommandOutput,
  UpdateBenefitApplicationCommand,
} from "./commands/UpdateBenefitApplicationCommand";
import { paginateListBenefitAllocations } from "./pagination/ListBenefitAllocationsPaginator";
import { paginateListBenefitApplications } from "./pagination/ListBenefitApplicationsPaginator";
import { paginateListBenefits } from "./pagination/ListBenefitsPaginator";
import { PartnerCentralBenefitsClient } from "./PartnerCentralBenefitsClient";

const commands = {
  AmendBenefitApplicationCommand,
  AssociateBenefitApplicationResourceCommand,
  CancelBenefitApplicationCommand,
  CreateBenefitApplicationCommand,
  DisassociateBenefitApplicationResourceCommand,
  GetBenefitCommand,
  GetBenefitAllocationCommand,
  GetBenefitApplicationCommand,
  ListBenefitAllocationsCommand,
  ListBenefitApplicationsCommand,
  ListBenefitsCommand,
  ListTagsForResourceCommand,
  RecallBenefitApplicationCommand,
  SubmitBenefitApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBenefitApplicationCommand,
};
const paginators = {
  paginateListBenefitAllocations,
  paginateListBenefitApplications,
  paginateListBenefits,
};

/**
 * @public
 */
export interface PartnerCentralBenefitsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PartnerCentralBenefits {
  /**
   * @see {@link AmendBenefitApplicationCommand}
   */
  amendBenefitApplication(
    args: AmendBenefitApplicationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<AmendBenefitApplicationCommandOutput>;
  amendBenefitApplication(
    args: AmendBenefitApplicationCommandInput,
    cb: (err: any, data?: AmendBenefitApplicationCommandOutput) => void
  ): void;
  amendBenefitApplication(
    args: AmendBenefitApplicationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: AmendBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateBenefitApplicationResourceCommand}
   */
  associateBenefitApplicationResource(
    args: AssociateBenefitApplicationResourceCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<AssociateBenefitApplicationResourceCommandOutput>;
  associateBenefitApplicationResource(
    args: AssociateBenefitApplicationResourceCommandInput,
    cb: (err: any, data?: AssociateBenefitApplicationResourceCommandOutput) => void
  ): void;
  associateBenefitApplicationResource(
    args: AssociateBenefitApplicationResourceCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: AssociateBenefitApplicationResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelBenefitApplicationCommand}
   */
  cancelBenefitApplication(
    args: CancelBenefitApplicationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<CancelBenefitApplicationCommandOutput>;
  cancelBenefitApplication(
    args: CancelBenefitApplicationCommandInput,
    cb: (err: any, data?: CancelBenefitApplicationCommandOutput) => void
  ): void;
  cancelBenefitApplication(
    args: CancelBenefitApplicationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: CancelBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBenefitApplicationCommand}
   */
  createBenefitApplication(
    args: CreateBenefitApplicationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<CreateBenefitApplicationCommandOutput>;
  createBenefitApplication(
    args: CreateBenefitApplicationCommandInput,
    cb: (err: any, data?: CreateBenefitApplicationCommandOutput) => void
  ): void;
  createBenefitApplication(
    args: CreateBenefitApplicationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: CreateBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateBenefitApplicationResourceCommand}
   */
  disassociateBenefitApplicationResource(
    args: DisassociateBenefitApplicationResourceCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<DisassociateBenefitApplicationResourceCommandOutput>;
  disassociateBenefitApplicationResource(
    args: DisassociateBenefitApplicationResourceCommandInput,
    cb: (err: any, data?: DisassociateBenefitApplicationResourceCommandOutput) => void
  ): void;
  disassociateBenefitApplicationResource(
    args: DisassociateBenefitApplicationResourceCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: DisassociateBenefitApplicationResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBenefitCommand}
   */
  getBenefit(
    args: GetBenefitCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<GetBenefitCommandOutput>;
  getBenefit(
    args: GetBenefitCommandInput,
    cb: (err: any, data?: GetBenefitCommandOutput) => void
  ): void;
  getBenefit(
    args: GetBenefitCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: GetBenefitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBenefitAllocationCommand}
   */
  getBenefitAllocation(
    args: GetBenefitAllocationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<GetBenefitAllocationCommandOutput>;
  getBenefitAllocation(
    args: GetBenefitAllocationCommandInput,
    cb: (err: any, data?: GetBenefitAllocationCommandOutput) => void
  ): void;
  getBenefitAllocation(
    args: GetBenefitAllocationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: GetBenefitAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBenefitApplicationCommand}
   */
  getBenefitApplication(
    args: GetBenefitApplicationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<GetBenefitApplicationCommandOutput>;
  getBenefitApplication(
    args: GetBenefitApplicationCommandInput,
    cb: (err: any, data?: GetBenefitApplicationCommandOutput) => void
  ): void;
  getBenefitApplication(
    args: GetBenefitApplicationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: GetBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBenefitAllocationsCommand}
   */
  listBenefitAllocations(
    args: ListBenefitAllocationsCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<ListBenefitAllocationsCommandOutput>;
  listBenefitAllocations(
    args: ListBenefitAllocationsCommandInput,
    cb: (err: any, data?: ListBenefitAllocationsCommandOutput) => void
  ): void;
  listBenefitAllocations(
    args: ListBenefitAllocationsCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: ListBenefitAllocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBenefitApplicationsCommand}
   */
  listBenefitApplications(
    args: ListBenefitApplicationsCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<ListBenefitApplicationsCommandOutput>;
  listBenefitApplications(
    args: ListBenefitApplicationsCommandInput,
    cb: (err: any, data?: ListBenefitApplicationsCommandOutput) => void
  ): void;
  listBenefitApplications(
    args: ListBenefitApplicationsCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: ListBenefitApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBenefitsCommand}
   */
  listBenefits(
    args: ListBenefitsCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<ListBenefitsCommandOutput>;
  listBenefits(
    args: ListBenefitsCommandInput,
    cb: (err: any, data?: ListBenefitsCommandOutput) => void
  ): void;
  listBenefits(
    args: ListBenefitsCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: ListBenefitsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RecallBenefitApplicationCommand}
   */
  recallBenefitApplication(
    args: RecallBenefitApplicationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<RecallBenefitApplicationCommandOutput>;
  recallBenefitApplication(
    args: RecallBenefitApplicationCommandInput,
    cb: (err: any, data?: RecallBenefitApplicationCommandOutput) => void
  ): void;
  recallBenefitApplication(
    args: RecallBenefitApplicationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: RecallBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitBenefitApplicationCommand}
   */
  submitBenefitApplication(
    args: SubmitBenefitApplicationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<SubmitBenefitApplicationCommandOutput>;
  submitBenefitApplication(
    args: SubmitBenefitApplicationCommandInput,
    cb: (err: any, data?: SubmitBenefitApplicationCommandOutput) => void
  ): void;
  submitBenefitApplication(
    args: SubmitBenefitApplicationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: SubmitBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBenefitApplicationCommand}
   */
  updateBenefitApplication(
    args: UpdateBenefitApplicationCommandInput,
    options?: PartnerCentralBenefitsRequestOptions
  ): Promise<UpdateBenefitApplicationCommandOutput>;
  updateBenefitApplication(
    args: UpdateBenefitApplicationCommandInput,
    cb: (err: any, data?: UpdateBenefitApplicationCommandOutput) => void
  ): void;
  updateBenefitApplication(
    args: UpdateBenefitApplicationCommandInput,
    options: PartnerCentralBenefitsRequestOptions,
    cb: (err: any, data?: UpdateBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBenefitAllocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBenefitAllocationsCommandOutput}.
   */
  paginateListBenefitAllocations(
    args: ListBenefitAllocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBenefitAllocationsCommandOutput>;

  /**
   * @see {@link ListBenefitApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBenefitApplicationsCommandOutput}.
   */
  paginateListBenefitApplications(
    args: ListBenefitApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBenefitApplicationsCommandOutput>;

  /**
   * @see {@link ListBenefitsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBenefitsCommandOutput}.
   */
  paginateListBenefits(
    args: ListBenefitsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBenefitsCommandOutput>;
}

/**
 * <p>AWS Partner Central Benefits Service provides APIs for managing partner benefits, applications, and allocations within the AWS Partner Network ecosystem.</p>
 * @public
 */
export class PartnerCentralBenefits extends PartnerCentralBenefitsClient implements PartnerCentralBenefits {}
createAggregatedClient(commands, PartnerCentralBenefits, { paginators });
