// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { PersonalizeRuntimeClient, PersonalizeRuntimeClientConfig } from "./PersonalizeRuntimeClient";

const commands = {
  GetPersonalizedRankingCommand,
  GetRecommendationsCommand,
};

export interface PersonalizeRuntime {
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
 * @public
 * <p></p>
 */
export class PersonalizeRuntime extends PersonalizeRuntimeClient implements PersonalizeRuntime {}
createAggregatedClient(commands, PersonalizeRuntime);
