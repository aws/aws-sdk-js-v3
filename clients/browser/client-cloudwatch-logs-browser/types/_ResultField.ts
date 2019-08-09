/**
 * <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p>
 */
export interface _ResultField {
  /**
   * <p>The log event field.</p>
   */
  field?: string;

  /**
   * <p>The value of this field.</p>
   */
  value?: string;
}

export type _UnmarshalledResultField = _ResultField;
