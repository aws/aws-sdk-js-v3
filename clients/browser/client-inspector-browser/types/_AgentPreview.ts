/**
 * <p>Used as a response element in the <a>PreviewAgents</a> action.</p>
 */
export interface _AgentPreview {
  /**
   * <p>The hostname of the EC2 instance on which the Amazon Inspector Agent is installed.</p>
   */
  hostname?: string;

  /**
   * <p>The ID of the EC2 instance where the agent is installed.</p>
   */
  agentId: string;

  /**
   * <p>The Auto Scaling group for the EC2 instance where the agent is installed.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The health status of the Amazon Inspector Agent.</p>
   */
  agentHealth?: "HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string;

  /**
   * <p>The version of the Amazon Inspector Agent.</p>
   */
  agentVersion?: string;

  /**
   * <p>The operating system running on the EC2 instance on which the Amazon Inspector Agent is installed.</p>
   */
  operatingSystem?: string;

  /**
   * <p>The kernel version of the operating system running on the EC2 instance on which the Amazon Inspector Agent is installed.</p>
   */
  kernelVersion?: string;

  /**
   * <p>The IP address of the EC2 instance on which the Amazon Inspector Agent is installed.</p>
   */
  ipv4Address?: string;
}

export type _UnmarshalledAgentPreview = _AgentPreview;
