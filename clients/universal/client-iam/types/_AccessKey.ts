/**
 * <p>Contains information about an AWS access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note>
 */
export interface _AccessKey {
  /**
   * <p>The name of the IAM user that the access key is associated with.</p>
   */
  UserName: string;

  /**
   * <p>The ID for this access key.</p>
   */
  AccessKeyId: string;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API calls, while <code>Inactive</code> means it is not. </p>
   */
  Status: "Active" | "Inactive" | string;

  /**
   * <p>The secret key used to sign requests.</p>
   */
  SecretAccessKey: string;

  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date | string | number;
}

export interface _UnmarshalledAccessKey extends _AccessKey {
  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date;
}
