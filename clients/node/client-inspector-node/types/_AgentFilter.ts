/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.</p>
 */
export interface _AgentFilter {
  /**
   * <p>The current health state of the agent. Values can be set to <b>HEALTHY</b> or <b>UNHEALTHY</b>.</p>
   */
  agentHealths:
    | Array<"HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string>
    | Iterable<"HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string>;

  /**
   * <p>The detailed health state of the agent. Values can be set to <b>IDLE</b>, <b>RUNNING</b>, <b>SHUTDOWN</b>, <b>UNHEALTHY</b>, <b>THROTTLED</b>, and <b>UNKNOWN</b>. </p>
   */
  agentHealthCodes:
    | Array<
        | "IDLE"
        | "RUNNING"
        | "SHUTDOWN"
        | "UNHEALTHY"
        | "THROTTLED"
        | "UNKNOWN"
        | string
      >
    | Iterable<
        | "IDLE"
        | "RUNNING"
        | "SHUTDOWN"
        | "UNHEALTHY"
        | "THROTTLED"
        | "UNKNOWN"
        | string
      >;
}

export interface _UnmarshalledAgentFilter extends _AgentFilter {
  /**
   * <p>The current health state of the agent. Values can be set to <b>HEALTHY</b> or <b>UNHEALTHY</b>.</p>
   */
  agentHealths: Array<"HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string>;

  /**
   * <p>The detailed health state of the agent. Values can be set to <b>IDLE</b>, <b>RUNNING</b>, <b>SHUTDOWN</b>, <b>UNHEALTHY</b>, <b>THROTTLED</b>, and <b>UNKNOWN</b>. </p>
   */
  agentHealthCodes: Array<
    | "IDLE"
    | "RUNNING"
    | "SHUTDOWN"
    | "UNHEALTHY"
    | "THROTTLED"
    | "UNKNOWN"
    | string
  >;
}
