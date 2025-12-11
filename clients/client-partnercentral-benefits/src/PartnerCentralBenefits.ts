// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AmendBenefitApplicationCommand,
  AmendBenefitApplicationCommandInput,
  AmendBenefitApplicationCommandOutput,
} from "./commands/AmendBenefitApplicationCommand";
import {
  AssociateBenefitApplicationResourceCommand,
  AssociateBenefitApplicationResourceCommandInput,
  AssociateBenefitApplicationResourceCommandOutput,
} from "./commands/AssociateBenefitApplicationResourceCommand";
import {
  CancelBenefitApplicationCommand,
  CancelBenefitApplicationCommandInput,
  CancelBenefitApplicationCommandOutput,
} from "./commands/CancelBenefitApplicationCommand";
import {
  CreateBenefitApplicationCommand,
  CreateBenefitApplicationCommandInput,
  CreateBenefitApplicationCommandOutput,
} from "./commands/CreateBenefitApplicationCommand";
import {
  DisassociateBenefitApplicationResourceCommand,
  DisassociateBenefitApplicationResourceCommandInput,
  DisassociateBenefitApplicationResourceCommandOutput,
} from "./commands/DisassociateBenefitApplicationResourceCommand";
import {
  GetBenefitAllocationCommand,
  GetBenefitAllocationCommandInput,
  GetBenefitAllocationCommandOutput,
} from "./commands/GetBenefitAllocationCommand";
import {
  GetBenefitApplicationCommand,
  GetBenefitApplicationCommandInput,
  GetBenefitApplicationCommandOutput,
} from "./commands/GetBenefitApplicationCommand";
import { GetBenefitCommand, GetBenefitCommandInput, GetBenefitCommandOutput } from "./commands/GetBenefitCommand";
import {
  ListBenefitAllocationsCommand,
  ListBenefitAllocationsCommandInput,
  ListBenefitAllocationsCommandOutput,
} from "./commands/ListBenefitAllocationsCommand";
import {
  ListBenefitApplicationsCommand,
  ListBenefitApplicationsCommandInput,
  ListBenefitApplicationsCommandOutput,
} from "./commands/ListBenefitApplicationsCommand";
import {
  ListBenefitsCommand,
  ListBenefitsCommandInput,
  ListBenefitsCommandOutput,
} from "./commands/ListBenefitsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RecallBenefitApplicationCommand,
  RecallBenefitApplicationCommandInput,
  RecallBenefitApplicationCommandOutput,
} from "./commands/RecallBenefitApplicationCommand";
import {
  SubmitBenefitApplicationCommand,
  SubmitBenefitApplicationCommandInput,
  SubmitBenefitApplicationCommandOutput,
} from "./commands/SubmitBenefitApplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBenefitApplicationCommand,
  UpdateBenefitApplicationCommandInput,
  UpdateBenefitApplicationCommandOutput,
} from "./commands/UpdateBenefitApplicationCommand";
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

export interface PartnerCentralBenefits {
  /**
   * @see {@link AmendBenefitApplicationCommand}
   */
  amendBenefitApplication(
    args: AmendBenefitApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AmendBenefitApplicationCommandOutput>;
  amendBenefitApplication(
    args: AmendBenefitApplicationCommandInput,
    cb: (err: any, data?: AmendBenefitApplicationCommandOutput) => void
  ): void;
  amendBenefitApplication(
    args: AmendBenefitApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AmendBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateBenefitApplicationResourceCommand}
   */
  associateBenefitApplicationResource(
    args: AssociateBenefitApplicationResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBenefitApplicationResourceCommandOutput>;
  associateBenefitApplicationResource(
    args: AssociateBenefitApplicationResourceCommandInput,
    cb: (err: any, data?: AssociateBenefitApplicationResourceCommandOutput) => void
  ): void;
  associateBenefitApplicationResource(
    args: AssociateBenefitApplicationResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBenefitApplicationResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelBenefitApplicationCommand}
   */
  cancelBenefitApplication(
    args: CancelBenefitApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBenefitApplicationCommandOutput>;
  cancelBenefitApplication(
    args: CancelBenefitApplicationCommandInput,
    cb: (err: any, data?: CancelBenefitApplicationCommandOutput) => void
  ): void;
  cancelBenefitApplication(
    args: CancelBenefitApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBenefitApplicationCommand}
   */
  createBenefitApplication(
    args: CreateBenefitApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBenefitApplicationCommandOutput>;
  createBenefitApplication(
    args: CreateBenefitApplicationCommandInput,
    cb: (err: any, data?: CreateBenefitApplicationCommandOutput) => void
  ): void;
  createBenefitApplication(
    args: CreateBenefitApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateBenefitApplicationResourceCommand}
   */
  disassociateBenefitApplicationResource(
    args: DisassociateBenefitApplicationResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBenefitApplicationResourceCommandOutput>;
  disassociateBenefitApplicationResource(
    args: DisassociateBenefitApplicationResourceCommandInput,
    cb: (err: any, data?: DisassociateBenefitApplicationResourceCommandOutput) => void
  ): void;
  disassociateBenefitApplicationResource(
    args: DisassociateBenefitApplicationResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBenefitApplicationResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBenefitCommand}
   */
  getBenefit(args: GetBenefitCommandInput, options?: __HttpHandlerOptions): Promise<GetBenefitCommandOutput>;
  getBenefit(args: GetBenefitCommandInput, cb: (err: any, data?: GetBenefitCommandOutput) => void): void;
  getBenefit(
    args: GetBenefitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBenefitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBenefitAllocationCommand}
   */
  getBenefitAllocation(
    args: GetBenefitAllocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBenefitAllocationCommandOutput>;
  getBenefitAllocation(
    args: GetBenefitAllocationCommandInput,
    cb: (err: any, data?: GetBenefitAllocationCommandOutput) => void
  ): void;
  getBenefitAllocation(
    args: GetBenefitAllocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBenefitAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBenefitApplicationCommand}
   */
  getBenefitApplication(
    args: GetBenefitApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBenefitApplicationCommandOutput>;
  getBenefitApplication(
    args: GetBenefitApplicationCommandInput,
    cb: (err: any, data?: GetBenefitApplicationCommandOutput) => void
  ): void;
  getBenefitApplication(
    args: GetBenefitApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBenefitAllocationsCommand}
   */
  listBenefitAllocations(
    args: ListBenefitAllocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBenefitAllocationsCommandOutput>;
  listBenefitAllocations(
    args: ListBenefitAllocationsCommandInput,
    cb: (err: any, data?: ListBenefitAllocationsCommandOutput) => void
  ): void;
  listBenefitAllocations(
    args: ListBenefitAllocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBenefitAllocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBenefitApplicationsCommand}
   */
  listBenefitApplications(
    args: ListBenefitApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBenefitApplicationsCommandOutput>;
  listBenefitApplications(
    args: ListBenefitApplicationsCommandInput,
    cb: (err: any, data?: ListBenefitApplicationsCommandOutput) => void
  ): void;
  listBenefitApplications(
    args: ListBenefitApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBenefitApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBenefitsCommand}
   */
  listBenefits(args: ListBenefitsCommandInput, options?: __HttpHandlerOptions): Promise<ListBenefitsCommandOutput>;
  listBenefits(args: ListBenefitsCommandInput, cb: (err: any, data?: ListBenefitsCommandOutput) => void): void;
  listBenefits(
    args: ListBenefitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBenefitsCommandOutput) => void
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
   * @see {@link RecallBenefitApplicationCommand}
   */
  recallBenefitApplication(
    args: RecallBenefitApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecallBenefitApplicationCommandOutput>;
  recallBenefitApplication(
    args: RecallBenefitApplicationCommandInput,
    cb: (err: any, data?: RecallBenefitApplicationCommandOutput) => void
  ): void;
  recallBenefitApplication(
    args: RecallBenefitApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecallBenefitApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitBenefitApplicationCommand}
   */
  submitBenefitApplication(
    args: SubmitBenefitApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitBenefitApplicationCommandOutput>;
  submitBenefitApplication(
    args: SubmitBenefitApplicationCommandInput,
    cb: (err: any, data?: SubmitBenefitApplicationCommandOutput) => void
  ): void;
  submitBenefitApplication(
    args: SubmitBenefitApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitBenefitApplicationCommandOutput) => void
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
   * @see {@link UpdateBenefitApplicationCommand}
   */
  updateBenefitApplication(
    args: UpdateBenefitApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBenefitApplicationCommandOutput>;
  updateBenefitApplication(
    args: UpdateBenefitApplicationCommandInput,
    cb: (err: any, data?: UpdateBenefitApplicationCommandOutput) => void
  ): void;
  updateBenefitApplication(
    args: UpdateBenefitApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBenefitApplicationCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Partner Central Benefits Service provides APIs for managing partner benefits, applications, and allocations within the AWS Partner Network ecosystem.</p>
 * @public
 */
export class PartnerCentralBenefits extends PartnerCentralBenefitsClient implements PartnerCentralBenefits {}
createAggregatedClient(commands, PartnerCentralBenefits);
