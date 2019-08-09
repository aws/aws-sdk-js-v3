import { _UnmarshalledMatchmakingRuleSet } from "./_MatchmakingRuleSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface CreateMatchmakingRuleSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that describes the newly created matchmaking rule set.</p>
   */
  RuleSet: _UnmarshalledMatchmakingRuleSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
