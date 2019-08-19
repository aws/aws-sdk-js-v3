/**
 * <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
 */
export interface _SigningCertificate {
  /**
   * <p>The name of the user the signing certificate is associated with.</p>
   */
  UserName: string;

  /**
   * <p>The ID for the signing certificate.</p>
   */
  CertificateId: string;

  /**
   * <p>The contents of the signing certificate.</p>
   */
  CertificateBody: string;

  /**
   * <p>The status of the signing certificate. <code>Active</code> means that the key is valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: "Active" | "Inactive" | string;

  /**
   * <p>The date when the signing certificate was uploaded.</p>
   */
  UploadDate?: Date | string | number;
}

export interface _UnmarshalledSigningCertificate extends _SigningCertificate {
  /**
   * <p>The date when the signing certificate was uploaded.</p>
   */
  UploadDate?: Date;
}
