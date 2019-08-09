/**
 * <p>Information about an Automation failure.</p>
 */
export interface _FailureDetails {
  /**
   * <p>The stage of the Automation execution when the failure occurred. The stages include the following: InputValidation, PreVerification, Invocation, PostVerification.</p>
   */
  FailureStage?: string;

  /**
   * <p>The type of Automation failure. Failure types include the following: Action, Permission, Throttling, Verification, Internal.</p>
   */
  FailureType?: string;

  /**
   * <p>Detailed information about the Automation step failure.</p>
   */
  Details?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledFailureDetails extends _FailureDetails {
  /**
   * <p>Detailed information about the Automation step failure.</p>
   */
  Details?: { [key: string]: Array<string> };
}
