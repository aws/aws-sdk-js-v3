/**
 * <p>Represents the minimum and maximum capacity for a scheduled action.</p>
 */
export interface _ScalableTargetAction {
  /**
   * <p>The minimum capacity.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum capacity.</p>
   */
  MaxCapacity?: number;
}

export type _UnmarshalledScalableTargetAction = _ScalableTargetAction;
