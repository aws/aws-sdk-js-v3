import { _Spend, _UnmarshalledSpend } from "./_Spend";

/**
 * <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, or RI units, and the <code>forecastedSpend</code> tracks how much you are predicted to spend if your current usage remains steady.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
 */
export interface _CalculatedSpend {
  /**
   * <p>The amount of cost, usage, or RI units that you have used.</p>
   */
  ActualSpend: _Spend;

  /**
   * <p>The amount of cost, usage, or RI units that you are forecasted to use.</p>
   */
  ForecastedSpend?: _Spend;
}

export interface _UnmarshalledCalculatedSpend extends _CalculatedSpend {
  /**
   * <p>The amount of cost, usage, or RI units that you have used.</p>
   */
  ActualSpend: _UnmarshalledSpend;

  /**
   * <p>The amount of cost, usage, or RI units that you are forecasted to use.</p>
   */
  ForecastedSpend?: _UnmarshalledSpend;
}
