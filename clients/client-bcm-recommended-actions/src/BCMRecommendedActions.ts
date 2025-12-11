// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BCMRecommendedActionsClient } from "./BCMRecommendedActionsClient";
import {
  ListRecommendedActionsCommand,
  ListRecommendedActionsCommandInput,
  ListRecommendedActionsCommandOutput,
} from "./commands/ListRecommendedActionsCommand";

const commands = {
  ListRecommendedActionsCommand,
};

export interface BCMRecommendedActions {
  /**
   * @see {@link ListRecommendedActionsCommand}
   */
  listRecommendedActions(): Promise<ListRecommendedActionsCommandOutput>;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendedActionsCommandOutput>;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    cb: (err: any, data?: ListRecommendedActionsCommandOutput) => void
  ): void;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendedActionsCommandOutput) => void
  ): void;
}

/**
 * <p>You can use the Billing and Cost Management Recommended Actions API to programmatically query your best practices and recommendations to optimize your costs.</p> <p>The Billing and Cost Management Recommended Actions API provides the following endpoint:</p> <ul> <li> <p> https://bcm-recommended-actions.us-east-1.api.aws</p> </li> </ul>
 * @public
 */
export class BCMRecommendedActions extends BCMRecommendedActionsClient implements BCMRecommendedActions {}
createAggregatedClient(commands, BCMRecommendedActions);
