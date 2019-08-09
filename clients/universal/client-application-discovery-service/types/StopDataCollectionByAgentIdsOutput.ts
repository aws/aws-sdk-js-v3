import { _UnmarshalledAgentConfigurationStatus } from "./_AgentConfigurationStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopDataCollectionByAgentIdsOutput shape
 */
export interface StopDataCollectionByAgentIdsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the agents or connector that were instructed to stop collecting data. Information includes the agent/connector ID, a description of the operation performed, and whether the agent/connector configuration was updated.</p>
   */
  agentsConfigurationStatus?: Array<_UnmarshalledAgentConfigurationStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
