import {
  _AutoScalingThresholds,
  _UnmarshalledAutoScalingThresholds
} from "./_AutoScalingThresholds";

/**
 * <p>Describes a layer's load-based auto scaling configuration.</p>
 */
export interface _LoadBasedAutoScalingConfiguration {
  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * <p>Whether load-based auto scaling is enabled for the layer.</p>
   */
  Enable?: boolean;

  /**
   * <p>An <code>AutoScalingThresholds</code> object that describes the upscaling configuration, which defines how and when AWS OpsWorks Stacks increases the number of instances.</p>
   */
  UpScaling?: _AutoScalingThresholds;

  /**
   * <p>An <code>AutoScalingThresholds</code> object that describes the downscaling configuration, which defines how and when AWS OpsWorks Stacks reduces the number of instances.</p>
   */
  DownScaling?: _AutoScalingThresholds;
}

export interface _UnmarshalledLoadBasedAutoScalingConfiguration
  extends _LoadBasedAutoScalingConfiguration {
  /**
   * <p>An <code>AutoScalingThresholds</code> object that describes the upscaling configuration, which defines how and when AWS OpsWorks Stacks increases the number of instances.</p>
   */
  UpScaling?: _UnmarshalledAutoScalingThresholds;

  /**
   * <p>An <code>AutoScalingThresholds</code> object that describes the downscaling configuration, which defines how and when AWS OpsWorks Stacks reduces the number of instances.</p>
   */
  DownScaling?: _UnmarshalledAutoScalingThresholds;
}
