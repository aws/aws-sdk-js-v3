import { _GameProperty } from "./_GameProperty";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface CreateMatchmakingConfigurationInput {
  /**
   * <p>Unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket.</p>
   */
  Name: string;

  /**
   * <p>Meaningful description of the matchmaking configuration. </p>
   */
  Description?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to a game session queue and uniquely identifies it. Format is <code>arn:aws:gamelift:&lt;region&gt;:&lt;aws account&gt;:gamesessionqueue/&lt;queue name&gt;</code>. These queues are used when placing game sessions for matches that are created with this matchmaking configuration. Queues can be located in any region.</p>
   */
  GameSessionQueueArns: Array<string> | Iterable<string>;

  /**
   * <p>Maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed.</p>
   */
  RequestTimeoutSeconds: number;

  /**
   * <p>Length of time (in seconds) to wait for players to accept a proposed match. If any player rejects the match or fails to accept before the timeout, the ticket continues to look for an acceptable match.</p>
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>Flag that determines whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE.</p>
   */
  AcceptanceRequired: boolean;

  /**
   * <p>Unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use rule sets that are defined in the same region.</p>
   */
  RuleSetName: string;

  /**
   * <p>SNS topic ARN that is set up to receive matchmaking notifications.</p>
   */
  NotificationTarget?: string;

  /**
   * <p>Number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match.</p>
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to be added to all events related to this matchmaking configuration. </p>
   */
  CustomEventData?: string;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match. </p>
   */
  GameProperties?: Array<_GameProperty> | Iterable<_GameProperty>;

  /**
   * <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object that is created for a successful match.</p>
   */
  GameSessionData?: string;

  /**
   * <p>Method used to backfill game sessions created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have GameLift create a <a>StartMatchBackfill</a> request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-backfill.html"> Backfill Existing Games with FlexMatch</a>. </p>
   */
  BackfillMode?: "AUTOMATIC" | "MANUAL" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
