import { _Target, _UnmarshalledTarget } from "./_Target";

/**
 * <p>The target registered with the maintenance window.</p>
 */
export interface _MaintenanceWindowTarget {
  /**
   * <p>The ID of the maintenance window to register the target with.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the target.</p>
   */
  WindowTargetId?: string;

  /**
   * <p>The type of target that is being registered with the maintenance window.</p>
   */
  ResourceType?: "INSTANCE" | "RESOURCE_GROUP" | string;

  /**
   * <p>The targets, either instances or tags.</p> <p>Specify instances using the following format:</p> <p> <code>Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;</code> </p> <p>Tags are specified using the following format:</p> <p> <code>Key=&lt;tag name&gt;,Values=&lt;tag value&gt;</code>.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>A user-provided value that will be included in any CloudWatch events that are raised while running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The name for the maintenance window target.</p>
   */
  Name?: string;

  /**
   * <p>A description for the target.</p>
   */
  Description?: string;
}

export interface _UnmarshalledMaintenanceWindowTarget
  extends _MaintenanceWindowTarget {
  /**
   * <p>The targets, either instances or tags.</p> <p>Specify instances using the following format:</p> <p> <code>Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;</code> </p> <p>Tags are specified using the following format:</p> <p> <code>Key=&lt;tag name&gt;,Values=&lt;tag value&gt;</code>.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;
}
