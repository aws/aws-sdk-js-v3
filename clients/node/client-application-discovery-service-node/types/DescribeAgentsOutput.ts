import { _UnmarshalledAgentInfo } from "./_AgentInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAgentsOutput shape
 */
export interface DescribeAgentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an agent/Connector ID. The output includes agent/Connector IDs, IP addresses, media access control (MAC) addresses, agent/Connector health, host name where the agent/Connector resides, and the version number of each agent/Connector.</p>
   */
  agentsInfo?: Array<_UnmarshalledAgentInfo>;

  /**
   * <p>Token to retrieve the next set of results. For example, if you specified 100 IDs for <code>DescribeAgentsRequest$agentIds</code> but set <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
