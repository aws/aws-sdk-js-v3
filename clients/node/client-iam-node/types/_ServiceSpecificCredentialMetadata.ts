/**
 * <p>Contains additional details about a service-specific credential.</p>
 */
export interface _ServiceSpecificCredentialMetadata {
  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   */
  UserName: string;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: "Active" | "Inactive" | string;

  /**
   * <p>The generated user name for the service-specific credential.</p>
   */
  ServiceUserName: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date | string | number;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   */
  ServiceSpecificCredentialId: string;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   */
  ServiceName: string;
}

export interface _UnmarshalledServiceSpecificCredentialMetadata
  extends _ServiceSpecificCredentialMetadata {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date;
}
