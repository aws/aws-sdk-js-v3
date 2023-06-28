// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateSavingsPlanCommand,
  CreateSavingsPlanCommandInput,
  CreateSavingsPlanCommandOutput,
} from "./commands/CreateSavingsPlanCommand";
import {
  DeleteQueuedSavingsPlanCommand,
  DeleteQueuedSavingsPlanCommandInput,
  DeleteQueuedSavingsPlanCommandOutput,
} from "./commands/DeleteQueuedSavingsPlanCommand";
import {
  DescribeSavingsPlanRatesCommand,
  DescribeSavingsPlanRatesCommandInput,
  DescribeSavingsPlanRatesCommandOutput,
} from "./commands/DescribeSavingsPlanRatesCommand";
import {
  DescribeSavingsPlansCommand,
  DescribeSavingsPlansCommandInput,
  DescribeSavingsPlansCommandOutput,
} from "./commands/DescribeSavingsPlansCommand";
import {
  DescribeSavingsPlansOfferingRatesCommand,
  DescribeSavingsPlansOfferingRatesCommandInput,
  DescribeSavingsPlansOfferingRatesCommandOutput,
} from "./commands/DescribeSavingsPlansOfferingRatesCommand";
import {
  DescribeSavingsPlansOfferingsCommand,
  DescribeSavingsPlansOfferingsCommandInput,
  DescribeSavingsPlansOfferingsCommandOutput,
} from "./commands/DescribeSavingsPlansOfferingsCommand";
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
import { SavingsplansClient, SavingsplansClientConfig } from "./SavingsplansClient";

const commands = {
  CreateSavingsPlanCommand,
  DeleteQueuedSavingsPlanCommand,
  DescribeSavingsPlanRatesCommand,
  DescribeSavingsPlansCommand,
  DescribeSavingsPlansOfferingRatesCommand,
  DescribeSavingsPlansOfferingsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface Savingsplans {
  /**
   * @see {@link CreateSavingsPlanCommand}
   */
  createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSavingsPlanCommandOutput>;
  createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void
  ): void;
  createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueuedSavingsPlanCommand}
   */
  deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueuedSavingsPlanCommandOutput>;
  deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void
  ): void;
  deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlanRatesCommand}
   */
  describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlanRatesCommandOutput>;
  describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void
  ): void;
  describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlansCommand}
   */
  describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlansCommandOutput>;
  describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void
  ): void;
  describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlansOfferingRatesCommand}
   */
  describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlansOfferingRatesCommandOutput>;
  describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void
  ): void;
  describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlansOfferingsCommand}
   */
  describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlansOfferingsCommandOutput>;
  describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void
  ): void;
  describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void
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
}

/**
 * @public
 * <p>Savings Plans are a pricing model that offer significant savings on AWS usage (for
 *         example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD
 *         per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For
 *         more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.</p>
 */
export class Savingsplans extends SavingsplansClient implements Savingsplans {}
createAggregatedClient(commands, Savingsplans);
