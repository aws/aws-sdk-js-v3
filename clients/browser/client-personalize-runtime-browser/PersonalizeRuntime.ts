import { PersonalizeRuntimeClient } from "./PersonalizeRuntimeClient";
import { GetPersonalizedRankingInput } from "./types/GetPersonalizedRankingInput";
import { GetPersonalizedRankingOutput } from "./types/GetPersonalizedRankingOutput";
import { GetRecommendationsInput } from "./types/GetRecommendationsInput";
import { GetRecommendationsOutput } from "./types/GetRecommendationsOutput";
import { InvalidInputException } from "./types/InvalidInputException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { GetPersonalizedRankingCommand } from "./commands/GetPersonalizedRankingCommand";
import { GetRecommendationsCommand } from "./commands/GetRecommendationsCommand";

export class PersonalizeRuntime extends PersonalizeRuntimeClient {
  /**
   * <p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPersonalizedRanking(
    args: GetPersonalizedRankingInput
  ): Promise<GetPersonalizedRankingOutput>;
  public getPersonalizedRanking(
    args: GetPersonalizedRankingInput,
    cb: (err: any, data?: GetPersonalizedRankingOutput) => void
  ): void;
  public getPersonalizedRanking(
    args: GetPersonalizedRankingInput,
    cb?: (err: any, data?: GetPersonalizedRankingOutput) => void
  ): Promise<GetPersonalizedRankingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPersonalizedRankingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of recommended items. The required input depends on the recipe type used to create the solution backing the campaign, as follows:</p> <ul> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> <li> <p>USER_PERSONALIZATION - <code>itemId</code> optional, <code>userId</code> required</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRecommendations(
    args: GetRecommendationsInput
  ): Promise<GetRecommendationsOutput>;
  public getRecommendations(
    args: GetRecommendationsInput,
    cb: (err: any, data?: GetRecommendationsOutput) => void
  ): void;
  public getRecommendations(
    args: GetRecommendationsInput,
    cb?: (err: any, data?: GetRecommendationsOutput) => void
  ): Promise<GetRecommendationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRecommendationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
