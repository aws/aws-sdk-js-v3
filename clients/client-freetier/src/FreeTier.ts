// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetFreeTierUsageCommand,
  GetFreeTierUsageCommandInput,
  GetFreeTierUsageCommandOutput,
} from "./commands/GetFreeTierUsageCommand";
import { FreeTierClient, FreeTierClientConfig } from "./FreeTierClient";

const commands = {
  GetFreeTierUsageCommand,
};

export interface FreeTier {
  /**
   * @see {@link GetFreeTierUsageCommand}
   */
  getFreeTierUsage(): Promise<GetFreeTierUsageCommandOutput>;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFreeTierUsageCommandOutput>;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    cb: (err: any, data?: GetFreeTierUsageCommandOutput) => void
  ): void;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFreeTierUsageCommandOutput) => void
  ): void;
}

/**
 * <p>You can use the Amazon Web Services Free Tier API to query programmatically your Free Tier usage data.</p>
 *          <p>Free Tier tracks your monthly usage data for all free tier offers that are associated with your
 *       Amazon Web Services account. You can use the Free Tier API to filter and show only the data that you want.</p>
 *          <p>Service endpoint</p>
 *          <p>The Free Tier API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>https://freetier.us-east-1.api.aws</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html">Using the Amazon Web Services Free Tier</a> in the <i>Billing User Guide</i>.</p>
 * @public
 */
export class FreeTier extends FreeTierClient implements FreeTier {}
createAggregatedClient(commands, FreeTier);
