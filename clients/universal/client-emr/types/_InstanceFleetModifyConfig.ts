/**
 * <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceFleetModifyConfig {
  /**
   * <p>A unique identifier for the instance fleet.</p>
   */
  InstanceFleetId: string;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet. For more information see <a>InstanceFleetConfig$TargetOnDemandCapacity</a>.</p>
   */
  TargetOnDemandCapacity?: number;

  /**
   * <p>The target capacity of Spot units for the instance fleet. For more information, see <a>InstanceFleetConfig$TargetSpotCapacity</a>.</p>
   */
  TargetSpotCapacity?: number;
}

export type _UnmarshalledInstanceFleetModifyConfig = _InstanceFleetModifyConfig;
