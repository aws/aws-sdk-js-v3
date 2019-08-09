import {
  _MatchedPlayerSession,
  _UnmarshalledMatchedPlayerSession
} from "./_MatchedPlayerSession";

/**
 * <p>Connection information for the new game session that is created with matchmaking. (with <a>StartMatchmaking</a>). Once a match is set, the FlexMatch engine places the match and creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.</p>
 */
export interface _GameSessionConnectionInfo {
  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session and uniquely identifies it.</p>
   */
  GameSessionArn?: string;

  /**
   * <p>IP address of the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   */
  IpAddress?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   */
  Port?: number;

  /**
   * <p>Collection of player session IDs, one for each player ID that was included in the original matchmaking request. </p>
   */
  MatchedPlayerSessions?:
    | Array<_MatchedPlayerSession>
    | Iterable<_MatchedPlayerSession>;
}

export interface _UnmarshalledGameSessionConnectionInfo
  extends _GameSessionConnectionInfo {
  /**
   * <p>Collection of player session IDs, one for each player ID that was included in the original matchmaking request. </p>
   */
  MatchedPlayerSessions?: Array<_UnmarshalledMatchedPlayerSession>;
}
