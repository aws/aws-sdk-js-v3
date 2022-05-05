// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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

/**
 * <p></p>
 */
export class PersonalizeRuntime extends PersonalizeRuntimeClient {
  /**
   * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
   *       deemed the most likely item to be of interest to the user.</p>
   *          <note>
   *             <p>The solution backing the campaign must have been created using a recipe of type
   *         PERSONALIZED_RANKING.</p>
   *          </note>
   */
  public getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPersonalizedRankingCommandOutput>;
  public getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void
  ): void;
  public getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void
  ): void;
  public getPersonalizedRanking(
    args: GetPersonalizedRankingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPersonalizedRankingCommandOutput) => void),
    cb?: (err: any, data?: GetPersonalizedRankingCommandOutput) => void
  ): Promise<GetPersonalizedRankingCommandOutput> | void {
    const command = new GetPersonalizedRankingCommand(args);
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
   * <p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to
   *       create the solution backing the campaign as follows:</p>
   *          <ul>
   *             <li>
   *                <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p>
   *             </li>
   *             <li>
   *                <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Campaigns that are backed by a solution created using a recipe of type
   *         PERSONALIZED_RANKING use the  API.</p>
   *          </note>
   *          <p>
   *       For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender.
   *       For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>.
   *     </p>
   */
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationsCommandOutput>;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): Promise<GetRecommendationsCommandOutput> | void {
    const command = new GetRecommendationsCommand(args);
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
