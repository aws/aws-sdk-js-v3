// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { SavingsplansClient } from "./SavingsplansClient";

/**
 * <p>Savings Plans are a pricing model that offer significant savings on AWS usage (for
 *         example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD
 *         per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For
 *         more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.</p>
 */
export class Savingsplans extends SavingsplansClient {
  /**
   * <p>Creates a Savings Plan.</p>
   */
  public createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSavingsPlanCommandOutput>;
  public createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void
  ): void;
  public createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSavingsPlanCommandOutput) => void
  ): void;
  public createSavingsPlan(
    args: CreateSavingsPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSavingsPlanCommandOutput) => void),
    cb?: (err: any, data?: CreateSavingsPlanCommandOutput) => void
  ): Promise<CreateSavingsPlanCommandOutput> | void {
    const command = new CreateSavingsPlanCommand(args);
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
   * <p>Deletes the queued purchase for the specified Savings Plan.</p>
   */
  public deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueuedSavingsPlanCommandOutput>;
  public deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void
  ): void;
  public deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void
  ): void;
  public deleteQueuedSavingsPlan(
    args: DeleteQueuedSavingsPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteQueuedSavingsPlanCommandOutput) => void
  ): Promise<DeleteQueuedSavingsPlanCommandOutput> | void {
    const command = new DeleteQueuedSavingsPlanCommand(args);
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
   * <p>Describes the specified Savings Plans rates.</p>
   */
  public describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlanRatesCommandOutput>;
  public describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void
  ): void;
  public describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void
  ): void;
  public describeSavingsPlanRates(
    args: DescribeSavingsPlanRatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSavingsPlanRatesCommandOutput) => void
  ): Promise<DescribeSavingsPlanRatesCommandOutput> | void {
    const command = new DescribeSavingsPlanRatesCommand(args);
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
   * <p>Describes the specified Savings Plans.</p>
   */
  public describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlansCommandOutput>;
  public describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void
  ): void;
  public describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlansCommandOutput) => void
  ): void;
  public describeSavingsPlans(
    args: DescribeSavingsPlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSavingsPlansCommandOutput) => void),
    cb?: (err: any, data?: DescribeSavingsPlansCommandOutput) => void
  ): Promise<DescribeSavingsPlansCommandOutput> | void {
    const command = new DescribeSavingsPlansCommand(args);
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
   * <p>Describes the specified Savings Plans offering rates.</p>
   */
  public describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlansOfferingRatesCommandOutput>;
  public describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void
  ): void;
  public describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void
  ): void;
  public describeSavingsPlansOfferingRates(
    args: DescribeSavingsPlansOfferingRatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSavingsPlansOfferingRatesCommandOutput) => void
  ): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> | void {
    const command = new DescribeSavingsPlansOfferingRatesCommand(args);
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
   * <p>Describes the specified Savings Plans offerings.</p>
   */
  public describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSavingsPlansOfferingsCommandOutput>;
  public describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void
  ): void;
  public describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void
  ): void;
  public describeSavingsPlansOfferings(
    args: DescribeSavingsPlansOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSavingsPlansOfferingsCommandOutput) => void
  ): Promise<DescribeSavingsPlansOfferingsCommandOutput> | void {
    const command = new DescribeSavingsPlansOfferingsCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Adds the specified tags to the specified resource.</p>
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
   * <p>Removes the specified tags from the specified resource.</p>
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
}
