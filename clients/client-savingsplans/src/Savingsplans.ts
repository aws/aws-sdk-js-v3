// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type CreateSavingsPlanCommandInput,
  type CreateSavingsPlanCommandOutput,
  CreateSavingsPlanCommand,
} from "./commands/CreateSavingsPlanCommand";
import {
  type DeleteQueuedSavingsPlanCommandInput,
  type DeleteQueuedSavingsPlanCommandOutput,
  DeleteQueuedSavingsPlanCommand,
} from "./commands/DeleteQueuedSavingsPlanCommand";
import {
  type DescribeSavingsPlanRatesCommandInput,
  type DescribeSavingsPlanRatesCommandOutput,
  DescribeSavingsPlanRatesCommand,
} from "./commands/DescribeSavingsPlanRatesCommand";
import {
  type DescribeSavingsPlansCommandInput,
  type DescribeSavingsPlansCommandOutput,
  DescribeSavingsPlansCommand,
} from "./commands/DescribeSavingsPlansCommand";
import {
  type DescribeSavingsPlansOfferingRatesCommandInput,
  type DescribeSavingsPlansOfferingRatesCommandOutput,
  DescribeSavingsPlansOfferingRatesCommand,
} from "./commands/DescribeSavingsPlansOfferingRatesCommand";
import {
  type DescribeSavingsPlansOfferingsCommandInput,
  type DescribeSavingsPlansOfferingsCommandOutput,
  DescribeSavingsPlansOfferingsCommand,
} from "./commands/DescribeSavingsPlansOfferingsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ReturnSavingsPlanCommandInput,
  type ReturnSavingsPlanCommandOutput,
  ReturnSavingsPlanCommand,
} from "./commands/ReturnSavingsPlanCommand";
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
import { SavingsplansClient } from "./SavingsplansClient";

const commands = {
  CreateSavingsPlanCommand,
  DeleteQueuedSavingsPlanCommand,
  DescribeSavingsPlanRatesCommand,
  DescribeSavingsPlansCommand,
  DescribeSavingsPlansOfferingRatesCommand,
  DescribeSavingsPlansOfferingsCommand,
  ListTagsForResourceCommand,
  ReturnSavingsPlanCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

/**
 * @public
 */
export interface SavingsplansRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Savingsplans {
  /**
   * @see {@link CreateSavingsPlanCommand}
   */
  createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<CreateSavingsPlanCommandOutput>;
  createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void
  ): void;
  createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueuedSavingsPlanCommand}
   */
  deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<DeleteQueuedSavingsPlanCommandOutput>;
  deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void
  ): void;
  deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlanRatesCommand}
   */
  describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<DescribeSavingsPlanRatesCommandOutput>;
  describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void
  ): void;
  describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlansCommand}
   */
  describeSavingsPlans(): Promise<DescribeSavingsPlansCommandOutput>;
  describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<DescribeSavingsPlansCommandOutput>;
  describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void
  ): void;
  describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlansOfferingRatesCommand}
   */
  describeSavingsPlansOfferingRates(): Promise<DescribeSavingsPlansOfferingRatesCommandOutput>;
  describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<DescribeSavingsPlansOfferingRatesCommandOutput>;
  describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void
  ): void;
  describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSavingsPlansOfferingsCommand}
   */
  describeSavingsPlansOfferings(): Promise<DescribeSavingsPlansOfferingsCommandOutput>;
  describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<DescribeSavingsPlansOfferingsCommandOutput>;
  describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void
  ): void;
  describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ReturnSavingsPlanCommand}
   */
  returnSavingsPlan(
    args: ReturnSavingsPlanCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<ReturnSavingsPlanCommandOutput>;
  returnSavingsPlan(
    args: ReturnSavingsPlanCommandInput,
    cb: (err: any, data?: ReturnSavingsPlanCommandOutput) => void
  ): void;
  returnSavingsPlan(
    args: ReturnSavingsPlanCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: ReturnSavingsPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SavingsplansRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SavingsplansRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * <p>Savings Plans are a pricing model that offer significant savings on Amazon Web Services usage (for example, on Amazon EC2 instances). You commit to a consistent
 *          amount of usage per hour, in the specified currency, for a term of one or three years, and
 *          receive a lower price for that usage. For more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">Amazon Web Services
 *             Savings Plans User Guide</a>.</p>
 * @public
 */
export class Savingsplans extends SavingsplansClient implements Savingsplans {}
createAggregatedClient(commands, Savingsplans);
