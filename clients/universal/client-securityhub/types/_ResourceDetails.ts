import {
  _AwsEc2InstanceDetails,
  _UnmarshalledAwsEc2InstanceDetails
} from "./_AwsEc2InstanceDetails";
import {
  _AwsS3BucketDetails,
  _UnmarshalledAwsS3BucketDetails
} from "./_AwsS3BucketDetails";
import {
  _AwsIamAccessKeyDetails,
  _UnmarshalledAwsIamAccessKeyDetails
} from "./_AwsIamAccessKeyDetails";
import {
  _ContainerDetails,
  _UnmarshalledContainerDetails
} from "./_ContainerDetails";

/**
 * <p>Additional details about a resource related to a finding.</p>
 */
export interface _ResourceDetails {
  /**
   * <p>Details about an Amazon EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: _AwsEc2InstanceDetails;

  /**
   * <p>Details about an Amazon S3 Bucket related to a finding.</p>
   */
  AwsS3Bucket?: _AwsS3BucketDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: _AwsIamAccessKeyDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: _ContainerDetails;

  /**
   * <p>Details about a resource that doesn't have a specific type defined.</p>
   */
  Other?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledResourceDetails extends _ResourceDetails {
  /**
   * <p>Details about an Amazon EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: _UnmarshalledAwsEc2InstanceDetails;

  /**
   * <p>Details about an Amazon S3 Bucket related to a finding.</p>
   */
  AwsS3Bucket?: _UnmarshalledAwsS3BucketDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: _UnmarshalledAwsIamAccessKeyDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: _UnmarshalledContainerDetails;

  /**
   * <p>Details about a resource that doesn't have a specific type defined.</p>
   */
  Other?: { [key: string]: string };
}
