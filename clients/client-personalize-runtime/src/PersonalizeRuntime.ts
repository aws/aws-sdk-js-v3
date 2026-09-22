// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetActionRecommendationsCommandInput,
  type GetActionRecommendationsCommandOutput,
  GetActionRecommendationsCommand,
} from "./commands/GetActionRecommendationsCommand";
import {
  type GetPersonalizedRankingCommandInput,
  type GetPersonalizedRankingCommandOutput,
  GetPersonalizedRankingCommand,
} from "./commands/GetPersonalizedRankingCommand";
import {
  type GetRecommendationsCommandInput,
  type GetRecommendationsCommandOutput,
  GetRecommendationsCommand,
} from "./commands/GetRecommendationsCommand";
import { PersonalizeRuntimeClient } from "./PersonalizeRuntimeClient";

const commands = {
  GetActionRecommendationsCommand,
  GetPersonalizedRankingCommand,
  GetRecommendationsCommand,
};

/**
 * @public
 */
export interface PersonalizeRuntimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PersonalizeRuntime {
  /**
   * @see {@link GetActionRecommendationsCommand}
   */
  getActionRecommendations(): Promise<GetActionRecommendationsCommandOutput>;
  getActionRecommendations(
    args: GetActionRecommendationsCommandInput,
    options?: PersonalizeRuntimeRequestOptions
  ): Promise<GetActionRecommendationsCommandOutput>;
  getActionRecommendations(
    args: GetActionRecommendationsCommandInput,
    cb: (err: any, data?: GetActionRecommendationsCommandOutput) => void
  ): void;
  getActionRecommendations(
    args: GetActionRecommendationsCommandInput,
    options: PersonalizeRuntimeRequestOptions,
    cb: (err: any, data?: GetActionRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPersonalizedRankingCommand}
   */
  getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    options?: PersonalizeRuntimeRequestOptions
  ): Promise<GetPersonalizedRankingCommandOutput>;
  getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void
  ): void;
  getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    options: PersonalizeRuntimeRequestOptions,
    cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationsCommand}
   */
  getRecommendations(): Promise<GetRecommendationsCommandOutput>;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: PersonalizeRuntimeRequestOptions
  ): Promise<GetRecommendationsCommandOutput>;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options: PersonalizeRuntimeRequestOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
}

/**
 * <p></p>
 * @public
 */
export class PersonalizeRuntime extends PersonalizeRuntimeClient implements PersonalizeRuntime {}
createAggregatedClient(commands, PersonalizeRuntime);
