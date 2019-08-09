/**
 * <p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>
 */
export interface _Spend {
  /**
   * <p>The cost or usage amount that is associated with a budget forecast, actual spend, or budget threshold.</p>
   */
  Amount: string;

  /**
   * <p>The unit of measurement that is used for the budget forecast, actual spend, or budget threshold, such as dollars or GB.</p>
   */
  Unit: string;
}

export type _UnmarshalledSpend = _Spend;
