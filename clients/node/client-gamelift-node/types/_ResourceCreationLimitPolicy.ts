/**
 * <p>Policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example, with a policy of 10 new game sessions and a time period of 60 minutes, on receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p>
 */
export interface _ResourceCreationLimitPolicy {
  /**
   * <p>Maximum number of game sessions that an individual can create during the policy period. </p>
   */
  NewGameSessionsPerCreator?: number;

  /**
   * <p>Time span used in evaluating the resource creation limit policy. </p>
   */
  PolicyPeriodInMinutes?: number;
}

export type _UnmarshalledResourceCreationLimitPolicy = _ResourceCreationLimitPolicy;
