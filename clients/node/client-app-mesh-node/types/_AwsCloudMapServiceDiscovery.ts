import {
  _AwsCloudMapInstanceAttribute,
  _UnmarshalledAwsCloudMapInstanceAttribute
} from "./_AwsCloudMapInstanceAttribute";

/**
 * <p>An object representing the AWS Cloud Map service discovery information for your virtual
 *          node.</p>
 */
export interface _AwsCloudMapServiceDiscovery {
  /**
   * <p>A string map that contains attributes with values that you can use to filter instances
   *          by any custom attribute that you specified when you registered the instance. Only instances
   *          that match all of the specified key/value pairs will be returned.</p>
   */
  attributes?:
    | Array<_AwsCloudMapInstanceAttribute>
    | Iterable<_AwsCloudMapInstanceAttribute>;

  /**
   * <p>The name of the AWS Cloud Map namespace to use.</p>
   */
  namespaceName: string;

  /**
   * <p>The name of the AWS Cloud Map service to use.</p>
   */
  serviceName: string;
}

export interface _UnmarshalledAwsCloudMapServiceDiscovery
  extends _AwsCloudMapServiceDiscovery {
  /**
   * <p>A string map that contains attributes with values that you can use to filter instances
   *          by any custom attribute that you specified when you registered the instance. Only instances
   *          that match all of the specified key/value pairs will be returned.</p>
   */
  attributes?: Array<_UnmarshalledAwsCloudMapInstanceAttribute>;
}
