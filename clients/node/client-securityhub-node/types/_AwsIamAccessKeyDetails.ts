/**
 * <p>IAM access key details related to a finding.</p>
 */
export interface _AwsIamAccessKeyDetails {
  /**
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  UserName?: string;

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  Status?: "Active" | "Inactive" | string;

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  CreatedAt?: string;
}

export type _UnmarshalledAwsIamAccessKeyDetails = _AwsIamAccessKeyDetails;
