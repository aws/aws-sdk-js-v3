import { _UnmarshalledMatchmakingTicket } from "./_MatchmakingTicket";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeMatchmakingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Collection of existing matchmaking ticket objects matching the request.</p>
   */
  TicketList?: Array<_UnmarshalledMatchmakingTicket>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
