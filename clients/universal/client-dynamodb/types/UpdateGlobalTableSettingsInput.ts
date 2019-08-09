import { _AutoScalingSettingsUpdate } from "./_AutoScalingSettingsUpdate";
import { _GlobalTableGlobalSecondaryIndexSettingsUpdate } from "./_GlobalTableGlobalSecondaryIndexSettingsUpdate";
import { _ReplicaSettingsUpdate } from "./_ReplicaSettingsUpdate";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGlobalTableSettingsInput shape
 */
export interface UpdateGlobalTableSettingsInput {
  /**
   * <p>The name of the global table</p>
   */
  GlobalTableName: string;

  /**
   * <p>The billing mode of the global table. If <code>GlobalTableBillingMode</code> is not specified, the global table defaults to <code>PROVISIONED</code> capacity billing mode.</p>
   */
  GlobalTableBillingMode?: "PROVISIONED" | "PAY_PER_REQUEST" | string;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code> </p>
   */
  GlobalTableProvisionedWriteCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for managing provisioned write capacity for the global table.</p>
   */
  GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: _AutoScalingSettingsUpdate;

  /**
   * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
   */
  GlobalTableGlobalSecondaryIndexSettingsUpdate?:
    | Array<_GlobalTableGlobalSecondaryIndexSettingsUpdate>
    | Iterable<_GlobalTableGlobalSecondaryIndexSettingsUpdate>;

  /**
   * <p>Represents the settings for a global table in a Region that will be modified.</p>
   */
  ReplicaSettingsUpdate?:
    | Array<_ReplicaSettingsUpdate>
    | Iterable<_ReplicaSettingsUpdate>;

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
