/**
 * <p>Configuration for the rollout of OTA updates.</p>
 */
export interface _AwsJobExecutionsRolloutConfig {
  /**
   * <p>The maximum number of OTA update job executions started per minute.</p>
   */
  maximumPerMinute?: number;
}

export type _UnmarshalledAwsJobExecutionsRolloutConfig = _AwsJobExecutionsRolloutConfig;
