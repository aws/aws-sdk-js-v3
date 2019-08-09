/**
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, and <code>RI_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
 */
export interface _CostTypes {
  /**
   * <p>Specifies whether a budget includes taxes.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeTax?: boolean;

  /**
   * <p>Specifies whether a budget includes subscriptions.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeSubscription?: boolean;

  /**
   * <p>Specifies whether a budget uses a blended rate.</p> <p>The default value is <code>false</code>.</p>
   */
  UseBlended?: boolean;

  /**
   * <p>Specifies whether a budget includes refunds.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeRefund?: boolean;

  /**
   * <p>Specifies whether a budget includes credits.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeCredit?: boolean;

  /**
   * <p>Specifies whether a budget includes upfront RI costs.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeUpfront?: boolean;

  /**
   * <p>Specifies whether a budget includes recurring fees such as monthly RI fees.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeRecurring?: boolean;

  /**
   * <p>Specifies whether a budget includes non-RI subscription costs.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeOtherSubscription?: boolean;

  /**
   * <p>Specifies whether a budget includes support subscription fees.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeSupport?: boolean;

  /**
   * <p>Specifies whether a budget includes discounts.</p> <p>The default value is <code>true</code>.</p>
   */
  IncludeDiscount?: boolean;

  /**
   * <p>Specifies whether a budget uses the amortized rate.</p> <p>The default value is <code>false</code>.</p>
   */
  UseAmortized?: boolean;
}

export type _UnmarshalledCostTypes = _CostTypes;
