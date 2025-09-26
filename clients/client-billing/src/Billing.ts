// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BillingClient, BillingClientConfig } from "./BillingClient";
import {
  AssociateSourceViewsCommand,
  AssociateSourceViewsCommandInput,
  AssociateSourceViewsCommandOutput,
} from "./commands/AssociateSourceViewsCommand";
import {
  CreateBillingViewCommand,
  CreateBillingViewCommandInput,
  CreateBillingViewCommandOutput,
} from "./commands/CreateBillingViewCommand";
import {
  DeleteBillingViewCommand,
  DeleteBillingViewCommandInput,
  DeleteBillingViewCommandOutput,
} from "./commands/DeleteBillingViewCommand";
import {
  DisassociateSourceViewsCommand,
  DisassociateSourceViewsCommandInput,
  DisassociateSourceViewsCommandOutput,
} from "./commands/DisassociateSourceViewsCommand";
import {
  GetBillingViewCommand,
  GetBillingViewCommandInput,
  GetBillingViewCommandOutput,
} from "./commands/GetBillingViewCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ListBillingViewsCommand,
  ListBillingViewsCommandInput,
  ListBillingViewsCommandOutput,
} from "./commands/ListBillingViewsCommand";
import {
  ListSourceViewsForBillingViewCommand,
  ListSourceViewsForBillingViewCommandInput,
  ListSourceViewsForBillingViewCommandOutput,
} from "./commands/ListSourceViewsForBillingViewCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBillingViewCommand,
  UpdateBillingViewCommandInput,
  UpdateBillingViewCommandOutput,
} from "./commands/UpdateBillingViewCommand";

const commands = {
  AssociateSourceViewsCommand,
  CreateBillingViewCommand,
  DeleteBillingViewCommand,
  DisassociateSourceViewsCommand,
  GetBillingViewCommand,
  GetResourcePolicyCommand,
  ListBillingViewsCommand,
  ListSourceViewsForBillingViewCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBillingViewCommand,
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
   * @see {@link GetBillingViewCommand}
   */
  getBillingView(
    args: GetBillingViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillingViewCommandOutput>;
  getBillingView(args: GetBillingViewCommandInput, cb: (err: any, data?: GetBillingViewCommandOutput) => void): void;
  getBillingView(
    args: GetBillingViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillingViewCommandOutput) => void
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
}

/**
 * <p> You can use the Billing API to programatically list the billing views available to you for a given time period. A billing view represents a set of billing data. </p> <p>The Billing API provides the following endpoint:</p> <p> <code>https://billing.us-east-1.api.aws</code> </p>
 * @public
 */
export class Billing extends BillingClient implements Billing {}
createAggregatedClient(commands, Billing);
