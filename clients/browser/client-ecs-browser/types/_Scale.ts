/**
 * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
 */
export interface _Scale {
  /**
   * <p>The value, specified as a percent total of a service's <code>desiredCount</code>, to scale the task set. Accepted values are numbers between 0 and 100.</p>
   */
  value?: number;

  /**
   * <p>The unit of measure for the scale value.</p>
   */
  unit?: "PERCENT" | string;
}

export type _UnmarshalledScale = _Scale;
