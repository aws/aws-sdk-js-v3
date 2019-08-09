/**
 * <p>The AWS IAM configuration.</p>
 */
export interface _AwsIamConfig {
  /**
   * <p>The signing region for AWS IAM authorization.</p>
   */
  signingRegion?: string;

  /**
   * <p>The signing service name for AWS IAM authorization.</p>
   */
  signingServiceName?: string;
}

export type _UnmarshalledAwsIamConfig = _AwsIamConfig;
