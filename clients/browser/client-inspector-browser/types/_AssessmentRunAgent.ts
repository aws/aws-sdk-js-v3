import {
  _TelemetryMetadata,
  _UnmarshalledTelemetryMetadata
} from "./_TelemetryMetadata";

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.</p>
 */
export interface _AssessmentRunAgent {
  /**
   * <p>The AWS account of the EC2 instance where the agent is installed.</p>
   */
  agentId: string;

  /**
   * <p>The ARN of the assessment run that is associated with the agent.</p>
   */
  assessmentRunArn: string;

  /**
   * <p>The current health state of the agent.</p>
   */
  agentHealth: "HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string;

  /**
   * <p>The detailed health state of the agent.</p>
   */
  agentHealthCode:
    | "IDLE"
    | "RUNNING"
    | "SHUTDOWN"
    | "UNHEALTHY"
    | "THROTTLED"
    | "UNKNOWN"
    | string;

  /**
   * <p>The description for the agent health code.</p>
   */
  agentHealthDetails?: string;

  /**
   * <p>The Auto Scaling group of the EC2 instance that is specified by the agent ID.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The Amazon Inspector application data metrics that are collected by the agent.</p>
   */
  telemetryMetadata: Array<_TelemetryMetadata> | Iterable<_TelemetryMetadata>;
}

export interface _UnmarshalledAssessmentRunAgent extends _AssessmentRunAgent {
  /**
   * <p>The Amazon Inspector application data metrics that are collected by the agent.</p>
   */
  telemetryMetadata: Array<_UnmarshalledTelemetryMetadata>;
}
