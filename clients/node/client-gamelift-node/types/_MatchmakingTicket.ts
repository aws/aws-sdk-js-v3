import { _Player, _UnmarshalledPlayer } from "./_Player";
import {
  _GameSessionConnectionInfo,
  _UnmarshalledGameSessionConnectionInfo
} from "./_GameSessionConnectionInfo";

/**
 * <p>Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.</p>
 */
export interface _MatchmakingTicket {
  /**
   * <p>Unique identifier for a matchmaking ticket.</p>
   */
  TicketId?: string;

  /**
   * <p>Name of the <a>MatchmakingConfiguration</a> that is used with this ticket. Matchmaking configurations determine how players are grouped into a match and how a new game session is created for the match.</p>
   */
  ConfigurationName?: string;

  /**
   * <p>Current status of the matchmaking request.</p> <ul> <li> <p> <b>QUEUED</b> -- The matchmaking request has been received and is currently waiting to be processed.</p> </li> <li> <p> <b>SEARCHING</b> -- The matchmaking request is currently being processed. </p> </li> <li> <p> <b>REQUIRES_ACCEPTANCE</b> -- A match has been proposed and the players must accept the match (see <a>AcceptMatch</a>). This status is used only with requests that use a matchmaking configuration with a player acceptance requirement.</p> </li> <li> <p> <b>PLACING</b> -- The FlexMatch engine has matched players and is in the process of placing a new game session for the match.</p> </li> <li> <p> <b>COMPLETED</b> -- Players have been matched and a game session is ready to host the players. A ticket in this state contains the necessary connection information for players.</p> </li> <li> <p> <b>FAILED</b> -- The matchmaking request was not completed.</p> </li> <li> <p> <b>CANCELLED</b> -- The matchmaking request was canceled. This may be the result of a call to <a>StopMatchmaking</a> or a proposed match that one or more players failed to accept.</p> </li> <li> <p> <b>TIMED_OUT</b> -- The matchmaking request was not successful within the duration specified in the matchmaking configuration. </p> </li> </ul> <note> <p>Matchmaking requests that fail to successfully complete (statuses FAILED, CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket IDs.</p> </note>
   */
  Status?:
    | "CANCELLED"
    | "COMPLETED"
    | "FAILED"
    | "PLACING"
    | "QUEUED"
    | "REQUIRES_ACCEPTANCE"
    | "SEARCHING"
    | "TIMED_OUT"
    | string;

  /**
   * <p>Code to explain the current status. For example, a status reason may indicate when a ticket has returned to <code>SEARCHING</code> status after a proposed match fails to receive player acceptances.</p>
   */
  StatusReason?: string;

  /**
   * <p>Additional information about the current status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>Time stamp indicating when this matchmaking request stopped being processed due to success, failure, or cancellation. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>A set of <code>Player</code> objects, each representing a player to find matches for. Players are identified by a unique player ID and may include latency data for use during matchmaking. If the ticket is in status <code>COMPLETED</code>, the <code>Player</code> objects include the team the players were assigned to in the resulting match.</p>
   */
  Players?: Array<_Player> | Iterable<_Player>;

  /**
   * <p>Identifier and connection information of the game session created for the match. This information is added to the ticket only after the matchmaking request has been successfully completed.</p>
   */
  GameSessionConnectionInfo?: _GameSessionConnectionInfo;

  /**
   * <p>Average amount of time (in seconds) that players are currently waiting for a match. If there is not enough recent data, this property may be empty.</p>
   */
  EstimatedWaitTime?: number;
}

export interface _UnmarshalledMatchmakingTicket extends _MatchmakingTicket {
  /**
   * <p>Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when this matchmaking request stopped being processed due to success, failure, or cancellation. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  EndTime?: Date;

  /**
   * <p>A set of <code>Player</code> objects, each representing a player to find matches for. Players are identified by a unique player ID and may include latency data for use during matchmaking. If the ticket is in status <code>COMPLETED</code>, the <code>Player</code> objects include the team the players were assigned to in the resulting match.</p>
   */
  Players?: Array<_UnmarshalledPlayer>;

  /**
   * <p>Identifier and connection information of the game session created for the match. This information is added to the ticket only after the matchmaking request has been successfully completed.</p>
   */
  GameSessionConnectionInfo?: _UnmarshalledGameSessionConnectionInfo;
}
