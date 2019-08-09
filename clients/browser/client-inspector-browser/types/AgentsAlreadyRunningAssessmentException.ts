import { _UnmarshalledAgentAlreadyRunningAssessment } from "./_AgentAlreadyRunningAssessment";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You started an assessment run, but one of the instances is already participating in another assessment run.</p>
 */
export interface AgentsAlreadyRunningAssessmentException
  extends __ServiceException__<
    _AgentsAlreadyRunningAssessmentExceptionDetails
  > {
  name: "AgentsAlreadyRunningAssessmentException";
}

export interface _AgentsAlreadyRunningAssessmentExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p/>
   */
  agents: Array<_UnmarshalledAgentAlreadyRunningAssessment>;

  /**
   * <p/>
   */
  agentsTruncated: boolean;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean;
}
