import { _UnmarshalledPrivateLinkConfig } from "./_PrivateLinkConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeAgentResponse</p>
 */
export interface DescribeAgentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent.</p>
   */
  AgentArn?: string;

  /**
   * <p>The name of the agent.</p>
   */
  Name?: string;

  /**
   * <p>The status of the agent. If the status is ONLINE, then the agent is configured properly and is available to use. The Running status is the normal running status for an agent. If the status is OFFLINE, the agent's VM is turned off or the agent is in an unhealthy state. When the issue that caused the unhealthy state is resolved, the agent returns to ONLINE status.</p>
   */
  Status?: "ONLINE" | "OFFLINE" | string;

  /**
   * <p>The time that the agent last connected to DataSyc.</p>
   */
  LastConnectionTime?: Date;

  /**
   * <p>The time that the agent was activated (that is, created in your account).</p>
   */
  CreationTime?: Date;

  /**
   * <p>The type of endpoint that your agent is connected to. If the endpoint is a VPC endpoint, the agent is not accessible over the public Internet. </p>
   */
  EndpointType?: "PUBLIC" | "PRIVATE_LINK" | string;

  /**
   * <p>The subnet and the security group that DataSync used to access a VPC endpoint.</p>
   */
  PrivateLinkConfig?: _UnmarshalledPrivateLinkConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
