/**
 * <p>Represents a vault's notification configuration.</p>
 */
export interface _VaultNotificationConfig {
  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name (ARN).</p>
   */
  SNSTopic?: string;

  /**
   * <p>A list of one or more events for which Amazon Glacier will send a notification to the specified Amazon SNS topic.</p>
   */
  Events?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVaultNotificationConfig
  extends _VaultNotificationConfig {
  /**
   * <p>A list of one or more events for which Amazon Glacier will send a notification to the specified Amazon SNS topic.</p>
   */
  Events?: Array<string>;
}
