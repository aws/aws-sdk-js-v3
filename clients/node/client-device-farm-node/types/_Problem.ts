import { _ProblemDetail, _UnmarshalledProblemDetail } from "./_ProblemDetail";
import { _Device, _UnmarshalledDevice } from "./_Device";

/**
 * <p>Represents a specific warning or failure.</p>
 */
export interface _Problem {
  /**
   * <p>Information about the associated run.</p>
   */
  run?: _ProblemDetail;

  /**
   * <p>Information about the associated job.</p>
   */
  job?: _ProblemDetail;

  /**
   * <p>Information about the associated suite.</p>
   */
  suite?: _ProblemDetail;

  /**
   * <p>Information about the associated test.</p>
   */
  test?: _ProblemDetail;

  /**
   * <p>Information about the associated device.</p>
   */
  device?: _Device;

  /**
   * <p>The problem's result.</p> <p>Allowed values include:</p> <ul> <li> <p>PENDING: A pending condition.</p> </li> <li> <p>PASSED: A passing condition.</p> </li> <li> <p>WARNED: A warning condition.</p> </li> <li> <p>FAILED: A failed condition.</p> </li> <li> <p>SKIPPED: A skipped condition.</p> </li> <li> <p>ERRORED: An error condition.</p> </li> <li> <p>STOPPED: A stopped condition.</p> </li> </ul>
   */
  result?:
    | "PENDING"
    | "PASSED"
    | "WARNED"
    | "FAILED"
    | "SKIPPED"
    | "ERRORED"
    | "STOPPED"
    | string;

  /**
   * <p>A message about the problem's result.</p>
   */
  message?: string;
}

export interface _UnmarshalledProblem extends _Problem {
  /**
   * <p>Information about the associated run.</p>
   */
  run?: _UnmarshalledProblemDetail;

  /**
   * <p>Information about the associated job.</p>
   */
  job?: _UnmarshalledProblemDetail;

  /**
   * <p>Information about the associated suite.</p>
   */
  suite?: _UnmarshalledProblemDetail;

  /**
   * <p>Information about the associated test.</p>
   */
  test?: _UnmarshalledProblemDetail;

  /**
   * <p>Information about the associated device.</p>
   */
  device?: _UnmarshalledDevice;
}
