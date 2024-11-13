// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BillingClient, BillingClientConfig } from "./BillingClient";
import {
  ListBillingViewsCommand,
  ListBillingViewsCommandInput,
  ListBillingViewsCommandOutput,
} from "./commands/ListBillingViewsCommand";

const commands = {
  ListBillingViewsCommand,
};

export interface Billing {
  /**
   * @see {@link ListBillingViewsCommand}
   */
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
}

/**
 * <p>
 *         You can use the Billing API to programatically list the billing views available to you for a given time period. A billing view represents a set of billing data.
 *       </p>
 *          <p>The Billing API provides the following endpoint:</p>
 *          <p>
 *             <code>https://billing.us-east-1.api.aws</code>
 *          </p>
 * @public
 */
export class Billing extends BillingClient implements Billing {}
createAggregatedClient(commands, Billing);
