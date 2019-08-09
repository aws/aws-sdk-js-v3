/**
 * <p>An object representing a target and its relative weight. Traffic is distributed across
 *          targets according to their relative weight. For example, a weighted target with a relative
 *          weight of 50 receives five times as much traffic as one with a relative weight of
 *          10.</p>
 */
export interface _WeightedTarget {
  /**
   * <p>The virtual node to associate with the weighted target.</p>
   */
  virtualNode: string;

  /**
   * <p>The relative weight of the weighted target.</p>
   */
  weight: number;
}

export type _UnmarshalledWeightedTarget = _WeightedTarget;
