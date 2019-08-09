import { _UnmarshalledMatchmakingTicket } from "./_MatchmakingTicket";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface StartMatchBackfillOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Ticket representing the backfill matchmaking request. This object includes the information in the request, ticket status, and match results as generated during the matchmaking process.</p>
   */
  MatchmakingTicket?: _UnmarshalledMatchmakingTicket;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
