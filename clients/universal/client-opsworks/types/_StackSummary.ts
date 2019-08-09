import {
  _InstancesCount,
  _UnmarshalledInstancesCount
} from "./_InstancesCount";

/**
 * <p>Summarizes the number of layers, instances, and apps in a stack.</p>
 */
export interface _StackSummary {
  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The stack name.</p>
   */
  Name?: string;

  /**
   * <p>The stack's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The number of layers.</p>
   */
  LayersCount?: number;

  /**
   * <p>The number of apps.</p>
   */
  AppsCount?: number;

  /**
   * <p>An <code>InstancesCount</code> object with the number of instances in each status.</p>
   */
  InstancesCount?: _InstancesCount;
}

export interface _UnmarshalledStackSummary extends _StackSummary {
  /**
   * <p>An <code>InstancesCount</code> object with the number of instances in each status.</p>
   */
  InstancesCount?: _UnmarshalledInstancesCount;
}
