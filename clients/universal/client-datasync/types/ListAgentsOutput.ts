import { _UnmarshalledAgentListEntry } from "./_AgentListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListAgentsResponse</p>
 */
export interface ListAgentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of agents in your account.</p>
   */
  Agents?: Array<_UnmarshalledAgentListEntry>;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list of agents.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
