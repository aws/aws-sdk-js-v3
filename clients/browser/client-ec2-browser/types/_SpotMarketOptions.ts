/**
 * <p>The options for Spot Instances.</p>
 */
export interface _SpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances. The default is the On-Demand price.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type. For <a>RunInstances</a>, persistent Spot Instance requests are only supported when <b>InstanceInterruptionBehavior</b> is set to either <code>hibernate</code> or <code>stop</code>.</p>
   */
  SpotInstanceType?: "one-time" | "persistent" | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request. For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date and time is reached. The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date | string | number;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: "hibernate" | "stop" | "terminate" | string;
}

export interface _UnmarshalledSpotMarketOptions extends _SpotMarketOptions {
  /**
   * <p>The end date of the request. For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date and time is reached. The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date;
}
