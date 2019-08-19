/**
 * <p>Describes an enabled metric.</p>
 */
export interface _EnabledMetric {
  /**
   * <p>One of the following metrics:</p> <ul> <li> <p> <code>GroupMinSize</code> </p> </li> <li> <p> <code>GroupMaxSize</code> </p> </li> <li> <p> <code>GroupDesiredCapacity</code> </p> </li> <li> <p> <code>GroupInServiceInstances</code> </p> </li> <li> <p> <code>GroupPendingInstances</code> </p> </li> <li> <p> <code>GroupStandbyInstances</code> </p> </li> <li> <p> <code>GroupTerminatingInstances</code> </p> </li> <li> <p> <code>GroupTotalInstances</code> </p> </li> </ul>
   */
  Metric?: string;

  /**
   * <p>The granularity of the metric. The only valid value is <code>1Minute</code>.</p>
   */
  Granularity?: string;
}

export type _UnmarshalledEnabledMetric = _EnabledMetric;
