import { _AwsIamConfig, _UnmarshalledAwsIamConfig } from "./_AwsIamConfig";

/**
 * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
 */
export interface _AuthorizationConfig {
  /**
   * <p>The authorization type required by the HTTP endpoint.</p> <ul> <li> <p> <b>AWS_IAM</b>: The authorization type is Sigv4.</p> </li> </ul>
   */
  authorizationType: "AWS_IAM" | string;

  /**
   * <p>The AWS IAM settings.</p>
   */
  awsIamConfig?: _AwsIamConfig;
}

export interface _UnmarshalledAuthorizationConfig extends _AuthorizationConfig {
  /**
   * <p>The AWS IAM settings.</p>
   */
  awsIamConfig?: _UnmarshalledAwsIamConfig;
}
