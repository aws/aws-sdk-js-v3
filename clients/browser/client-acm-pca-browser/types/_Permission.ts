/**
 * <p>Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a>CreatePermission</a> action, removed with the <a>DeletePermission</a> action, and listed with the <a>ListPermissions</a> action.</p>
 */
export interface _Permission {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA from which the permission was issued.</p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The time at which the permission was created.</p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>The AWS service or entity that holds the permission. At this time, the only valid principal is <code>acm.amazonaws.com</code>.</p>
   */
  Principal?: string;

  /**
   * <p>The ID of the account that assigned the permission.</p>
   */
  SourceAccount?: string;

  /**
   * <p>The private CA actions that can be performed by the designated AWS service.</p>
   */
  Actions?:
    | Array<"IssueCertificate" | "GetCertificate" | "ListPermissions" | string>
    | Iterable<
        "IssueCertificate" | "GetCertificate" | "ListPermissions" | string
      >;

  /**
   * <p>The name of the policy that is associated with the permission.</p>
   */
  Policy?: string;
}

export interface _UnmarshalledPermission extends _Permission {
  /**
   * <p>The time at which the permission was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The private CA actions that can be performed by the designated AWS service.</p>
   */
  Actions?: Array<
    "IssueCertificate" | "GetCertificate" | "ListPermissions" | string
  >;
}
