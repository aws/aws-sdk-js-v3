/**
 * <p>A code and name pair that represent a severity level that can be applied to a support case.</p>
 */
export interface _SeverityLevel {
  /**
   * <p>One of four values: "low," "medium," "high," and "urgent". These values correspond to response times returned to the caller in <code>severityLevel.name</code>. </p>
   */
  code?: string;

  /**
   * <p>The name of the severity level that corresponds to the severity level code.</p>
   */
  name?: string;
}

export type _UnmarshalledSeverityLevel = _SeverityLevel;
