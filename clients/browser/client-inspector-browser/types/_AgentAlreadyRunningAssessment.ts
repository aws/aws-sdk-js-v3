/**
 * <p>Used in the exception error that is thrown if you start an assessment run for an assessment target that includes an EC2 instance that is already participating in another started assessment run.</p>
 */
export interface _AgentAlreadyRunningAssessment {
  /**
   * <p>ID of the agent that is running on an EC2 instance that is already participating in another started assessment run.</p>
   */
  agentId: string;

  /**
   * <p>The ARN of the assessment run that has already been started.</p>
   */
  assessmentRunArn: string;
}

export type _UnmarshalledAgentAlreadyRunningAssessment = _AgentAlreadyRunningAssessment;
