/**
 * <p>An object representing the AWS Cloud Map attribute information for your virtual node.</p>
 */
export interface _AwsCloudMapInstanceAttribute {
  /**
   * <p>The name of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service instance
   *          that contains the specified key and value is returned.</p>
   */
  key: string;

  /**
   * <p>The value of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service
   *          instance that contains the specified key and value is returned.</p>
   */
  value: string;
}

export type _UnmarshalledAwsCloudMapInstanceAttribute = _AwsCloudMapInstanceAttribute;
