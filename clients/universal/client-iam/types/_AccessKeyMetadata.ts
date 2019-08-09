/**
 * <p>Contains information about an AWS access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
 */
export interface _AccessKeyMetadata {
  /**
   * <p>The name of the IAM user that the key is associated with.</p>
   */
  UserName?: string;

  /**
   * <p>The ID for this access key.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API calls; <code>Inactive</code> means it is not.</p>
   */
  Status?: "Active" | "Inactive" | string;

  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date | string | number;
}

export interface _UnmarshalledAccessKeyMetadata extends _AccessKeyMetadata {
  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date;
}
