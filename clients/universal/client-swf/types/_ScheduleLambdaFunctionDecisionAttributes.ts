/**
 * <p>Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.</p>
 */
export interface _ScheduleLambdaFunctionDecisionAttributes {
  /**
   * <p>A string that identifies the Lambda function execution in the event history.</p>
   */
  id: string;

  /**
   * <p>The name, or ARN, of the Lambda function to schedule.</p>
   */
  name: string;

  /**
   * <p>The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.</p>
   */
  control?: string;

  /**
   * <p>The optional input data to be supplied to the Lambda function.</p>
   */
  input?: string;

  /**
   * <p>The timeout value, in seconds, after which the Lambda function is considered to be failed once it has started. This can be any integer from 1-300 (1s-5m). If no value is supplied, than a default value of 300s is assumed.</p>
   */
  startToCloseTimeout?: string;
}

export type _UnmarshalledScheduleLambdaFunctionDecisionAttributes = _ScheduleLambdaFunctionDecisionAttributes;
