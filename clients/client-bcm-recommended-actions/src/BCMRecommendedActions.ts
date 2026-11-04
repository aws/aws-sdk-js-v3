// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { BCMRecommendedActionsClient } from "./BCMRecommendedActionsClient";
import {
  type ListRecommendedActionsCommandInput,
  type ListRecommendedActionsCommandOutput,
  ListRecommendedActionsCommand,
} from "./commands/ListRecommendedActionsCommand";
import { paginateListRecommendedActions } from "./pagination/ListRecommendedActionsPaginator";

const commands = {
  ListRecommendedActionsCommand,
};
const paginators = {
  paginateListRecommendedActions,
};

/**
 * @public
 */
export interface BCMRecommendedActionsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface BCMRecommendedActions {
  /**
   * @see {@link ListRecommendedActionsCommand}
   */
  listRecommendedActions(): Promise<ListRecommendedActionsCommandOutput>;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    options?: BCMRecommendedActionsRequestOptions
  ): Promise<ListRecommendedActionsCommandOutput>;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    cb: (err: any, data?: ListRecommendedActionsCommandOutput) => void
  ): void;
  listRecommendedActions(
    args: ListRecommendedActionsCommandInput,
    options: BCMRecommendedActionsRequestOptions,
    cb: (err: any, data?: ListRecommendedActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendedActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendedActionsCommandOutput}.
   */
  paginateListRecommendedActions(
    args?: ListRecommendedActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendedActionsCommandOutput>;
}

/**
 * You can use the Billing and Cost Management Recommended Actions API to programmatically query your best practices and recommendations to optimize your costs.
 *
 * The Billing and Cost Management Recommended Actions API provides the following endpoint:
 *
 * - https://bcm-recommended-actions.us-east-1.api.aws
 *
 * @public
 */
export class BCMRecommendedActions extends BCMRecommendedActionsClient implements BCMRecommendedActions {}
createAggregatedClient(commands, BCMRecommendedActions, { paginators });
