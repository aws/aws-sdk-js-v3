import {
  _AccessKeyDetails,
  _UnmarshalledAccessKeyDetails
} from "./_AccessKeyDetails";
import {
  _InstanceDetails,
  _UnmarshalledInstanceDetails
} from "./_InstanceDetails";

/**
 * _Resource shape
 */
export interface _Resource {
  /**
   * <p>The IAM access key details (IAM user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding.</p>
   */
  AccessKeyDetails?: _AccessKeyDetails;

  /**
   * <p>The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding.</p>
   */
  InstanceDetails?: _InstanceDetails;

  /**
   * <p>The type of the AWS resource.</p>
   */
  ResourceType?: string;
}

export interface _UnmarshalledResource extends _Resource {
  /**
   * <p>The IAM access key details (IAM user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding.</p>
   */
  AccessKeyDetails?: _UnmarshalledAccessKeyDetails;

  /**
   * <p>The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding.</p>
   */
  InstanceDetails?: _UnmarshalledInstanceDetails;
}
