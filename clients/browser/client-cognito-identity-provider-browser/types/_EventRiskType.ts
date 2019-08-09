/**
 * <p>The event risk type.</p>
 */
export interface _EventRiskType {
  /**
   * <p>The risk decision.</p>
   */
  RiskDecision?: "NoRisk" | "AccountTakeover" | "Block" | string;

  /**
   * <p>The risk level.</p>
   */
  RiskLevel?: "Low" | "Medium" | "High" | string;
}

export type _UnmarshalledEventRiskType = _EventRiskType;
