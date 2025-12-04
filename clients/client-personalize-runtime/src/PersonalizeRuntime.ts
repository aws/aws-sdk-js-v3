// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetActionRecommendationsCommand,
  GetActionRecommendationsCommandInput,
  GetActionRecommendationsCommandOutput,
} from "./commands/GetActionRecommendationsCommand";
import {
  GetPersonalizedRankingCommand,
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput,
} from "./commands/GetPersonalizedRankingCommand";
import {
  GetRecommendationsCommand,
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
} from "./commands/GetRecommendationsCommand";
import { PersonalizeRuntimeClient } from "./PersonalizeRuntimeClient";

const commands = {
  GetActionRecommendationsCommand,
  GetPersonalizedRankingCommand,
  GetRecommendationsCommand,
};

export interface PersonalizeRuntime {
  /**
   * @see {@link GetActionRecommendationsCommand}
   */
  getActionRecommendations(): Promise<GetActionRecommendationsCommandOutput>;
  getActionRecommendations(
    args: GetActionRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActionRecommendationsCommandOutput>;
  getActionRecommendations(
    args: GetActionRecommendationsCommandInput,
    cb: (err: any, data?: GetActionRecommendationsCommandOutput) => void
  ): void;
  getActionRecommendations(
    args: GetActionRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActionRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPersonalizedRankingCommand}
   */
  getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPersonalizedRankingCommandOutput>;
  getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void
  ): void;
  getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationsCommand}
   */
  getRecommendations(): Promise<GetRecommendationsCommandOutput>;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationsCommandOutput>;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
}

/**
 * <p></p>
 * @public
 */
export class PersonalizeRuntime extends PersonalizeRuntimeClient implements PersonalizeRuntime {}
createAggregatedClient(commands, PersonalizeRuntime);
