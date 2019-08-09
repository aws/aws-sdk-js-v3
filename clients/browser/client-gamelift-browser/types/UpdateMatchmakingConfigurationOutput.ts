import { _UnmarshalledMatchmakingConfiguration } from "./_MatchmakingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface UpdateMatchmakingConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that describes the updated matchmaking configuration.</p>
   */
  Configuration?: _UnmarshalledMatchmakingConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
