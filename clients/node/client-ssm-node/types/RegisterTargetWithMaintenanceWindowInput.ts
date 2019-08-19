import { _Target } from "./_Target";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterTargetWithMaintenanceWindowInput shape
 */
export interface RegisterTargetWithMaintenanceWindowInput {
  /**
   * <p>The ID of the maintenance window the target should be registered with.</p>
   */
  WindowId: string;

  /**
   * <p>The type of target being registered with the maintenance window.</p>
   */
  ResourceType: "INSTANCE" | "RESOURCE_GROUP" | string;

  /**
   * <p>The targets to register with the maintenance window. In other words, the instances to run commands on when the maintenance window runs.</p> <p>You can specify targets using instance IDs, resource group names, or tags that have been applied to instances.</p> <p> <b>Example 1</b>: Specify instance IDs</p> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> <p> <b>Example 2</b>: Use tag key-pairs applied to instances</p> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> <p> <b>Example 3</b>: Use tag-keys applied to instances</p> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> <p> <b>Example 4</b>: Use resource group names</p> <p> <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> <p> <b>Example 5</b>: Use filters for resource group types</p> <p> <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> <note> <p>For <code>Key=resource-groups:ResourceTypeFilters</code>, specify resource types in the following format</p> <p> <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> </note> <p>For more information about these examples formats, including the best use case for each one, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-tutorial-targets-examples.html">Examples: Register Targets with a Maintenance Window</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Targets: Array<_Target> | Iterable<_Target>;

  /**
   * <p>User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>An optional name for the target.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the target.</p>
   */
  Description?: string;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
