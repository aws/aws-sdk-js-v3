/**
 * <p>An activity that computes an arithmetic expression using the message's attributes.</p>
 */
export interface _MathActivity {
  /**
   * <p>The name of the 'math' activity.</p>
   */
  name: string;

  /**
   * <p>The name of the attribute that contains the result of the math operation.</p>
   */
  attribute: string;

  /**
   * <p>An expression that uses one or more existing attributes and must return an integer value.</p>
   */
  math: string;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export type _UnmarshalledMathActivity = _MathActivity;
