/**
 * <p>Fleet designated in a game session queue. Requests for new game sessions in the queue are fulfilled by starting a new game session on any destination configured for a queue. </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
 */
export interface _GameSessionQueueDestination {
  /**
   * <p>Amazon Resource Name (ARN) assigned to fleet or fleet alias. ARNs, which include a fleet ID or alias ID and a region name, provide a unique identifier across all regions. </p>
   */
  DestinationArn?: string;
}

export type _UnmarshalledGameSessionQueueDestination = _GameSessionQueueDestination;
