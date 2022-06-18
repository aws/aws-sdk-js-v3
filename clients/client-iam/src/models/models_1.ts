// smithy-typescript generated code
export enum AccessAdvisorUsageGranularityType {
  ACTION_LEVEL = "ACTION_LEVEL",
  SERVICE_LEVEL = "SERVICE_LEVEL",
}

export type StatusType = "Active" | "Inactive";

export type AssignmentStatusType = "Any" | "Assigned" | "Unassigned";

export enum PermissionsBoundaryAttachmentType {
  Policy = "PermissionsBoundaryPolicy",
}

/**
 * <p>Contains information about the last time that an IAM role was used. This includes the
 *          date and time and the Region in which the role was last used. Activity is only reported for
 *          the trailing 400 days. This period can be shorter if your Region began supporting these
 *          features within the last year. The role might have been used more than 400 days ago. For
 *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM User
 *          Guide</i>.</p>
 *          <p>This data type is returned as a response element in the <a>GetRole</a> and
 *             <a>GetAccountAuthorizationDetails</a> operations.</p>
 */
export interface RoleLastUsed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a> that the role was last used.</p>
   *          <p>This field is null if the role has not been used within the IAM tracking period. For
   *          more information about the tracking period, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM User Guide</i>.
   *       </p>
   */
  LastUsedDate?: Date;

  /**
   * <p>The name of the Amazon Web Services Region in which the role was last used.</p>
   */
  Region?: string;
}

export namespace RoleLastUsed {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoleLastUsed): any => ({
    ...obj,
  });
}

export enum ReportStateType {
  COMPLETE = "COMPLETE",
  INPROGRESS = "INPROGRESS",
  STARTED = "STARTED",
}

/**
 * <p>Contains information about an IAM policy, including the policy document.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface PolicyDetail {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The policy document.</p>
   */
  PolicyDocument?: string;
}

export namespace PolicyDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyDetail): any => ({
    ...obj,
  });
}

export type SummaryKeyType =
  | "AccessKeysPerUserQuota"
  | "AccountAccessKeysPresent"
  | "AccountMFAEnabled"
  | "AccountSigningCertificatesPresent"
  | "AttachedPoliciesPerGroupQuota"
  | "AttachedPoliciesPerRoleQuota"
  | "AttachedPoliciesPerUserQuota"
  | "GlobalEndpointTokenVersion"
  | "GroupPolicySizeQuota"
  | "Groups"
  | "GroupsPerUserQuota"
  | "GroupsQuota"
  | "MFADevices"
  | "MFADevicesInUse"
  | "Policies"
  | "PoliciesQuota"
  | "PolicySizeQuota"
  | "PolicyVersionsInUse"
  | "PolicyVersionsInUseQuota"
  | "ServerCertificates"
  | "ServerCertificatesQuota"
  | "SigningCertificatesPerUserQuota"
  | "UserPolicySizeQuota"
  | "Users"
  | "UsersQuota"
  | "VersionsPerPolicyQuota";

export type ReportFormatType = "text/csv";

export enum SortKeyType {
  LAST_AUTHENTICATED_TIME_ASCENDING = "LAST_AUTHENTICATED_TIME_ASCENDING",
  LAST_AUTHENTICATED_TIME_DESCENDING = "LAST_AUTHENTICATED_TIME_DESCENDING",
  SERVICE_NAMESPACE_ASCENDING = "SERVICE_NAMESPACE_ASCENDING",
  SERVICE_NAMESPACE_DESCENDING = "SERVICE_NAMESPACE_DESCENDING",
}

export type JobStatusType = "COMPLETED" | "FAILED" | "IN_PROGRESS";

/**
 * <p>Contains information about a server certificate without its certificate body,
 *          certificate chain, and private key.</p>
 *          <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a>
 *          operations. </p>
 */
export interface ServerCertificateMetadata {
  /**
   * <p> The path to the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p>The name that identifies the server certificate.</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p> The stable and unique string identifying the server certificate. For more information
   *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  ServerCertificateId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the server certificate. For more information
   *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date when the server certificate was uploaded.</p>
   */
  UploadDate?: Date;

  /**
   * <p>The date on which the certificate is set to expire.</p>
   */
  Expiration?: Date;
}

export namespace ServerCertificateMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerCertificateMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the most recent attempt to access an action within the
 *          service.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
 */
export interface TrackedActionLastAccessed {
  /**
   * <p>The name of the tracked action to which access was attempted. Tracked actions are
   *          actions that report activity to IAM.</p>
   */
  ActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   */
  LastAccessedEntity?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated entity most recently attempted to access the
   *          tracked service. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAccessedTime?: Date;

  /**
   * <p>The Region from which the authenticated entity (user or role) last attempted to access
   *          the tracked action. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAccessedRegion?: string;
}

export namespace TrackedActionLastAccessed {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrackedActionLastAccessed): any => ({
    ...obj,
  });
}

export enum PolicyOwnerEntityType {
  GROUP = "GROUP",
  ROLE = "ROLE",
  USER = "USER",
}

export enum DeletionTaskStatusType {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SUCCEEDED = "SUCCEEDED",
}

export type EncodingType = "PEM" | "SSH";

/**
 * <p>Contains information about an SSH public key.</p>
 *          <p>This data type is used as a response element in the <a>GetSSHPublicKey</a>
 *          and <a>UploadSSHPublicKey</a> operations. </p>
 */
export interface SSHPublicKey {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The MD5 message digest of the SSH public key.</p>
   */
  Fingerprint: string | undefined;

  /**
   * <p>The SSH public key.</p>
   */
  SSHPublicKeyBody: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be
   *          used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate?: Date;
}

export namespace SSHPublicKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SSHPublicKey): any => ({
    ...obj,
  });
}

export type PolicyUsageType = "PermissionsBoundary" | "PermissionsPolicy";

/**
 * <p>Contains information about a group that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyGroup {
  /**
   * <p>The name (friendly name, not ARN) identifying the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  GroupId?: string;
}

export namespace PolicyGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a role that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyRole {
  /**
   * <p>The name (friendly name, not ARN) identifying the role.</p>
   */
  RoleName?: string;

  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  RoleId?: string;
}

export namespace PolicyRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyRole): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a user that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyUser {
  /**
   * <p>The name (friendly name, not ARN) identifying the user.</p>
   */
  UserName?: string;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId?: string;
}

export namespace PolicyUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyUser): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an MFA device.</p>
 *          <p>This data type is used as a response element in the <a>ListMFADevices</a>
 *          operation.</p>
 */
export interface MFADevice {
  /**
   * <p>The user with whom the MFA device is associated.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>The date when the MFA device was enabled for the user.</p>
   */
  EnableDate: Date | undefined;
}

export namespace MFADevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MFADevice): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.</p>
 */
export interface OpenIDConnectProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   */
  Arn?: string;
}

export namespace OpenIDConnectProviderListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenIDConnectProviderListEntry): any => ({
    ...obj,
  });
}

export enum PolicyScopeType {
  AWS = "AWS",
  All = "All",
  Local = "Local",
}

export enum PolicyType {
  INLINE = "INLINE",
  MANAGED = "MANAGED",
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
 */
export interface PolicyGrantingServiceAccess {
  /**
   * <p>The policy name.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy type. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed
   *             policies and inline policies</a> in the
   *          <i>IAM User Guide</i>.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   */
  PolicyArn?: string;

  /**
   * <p>The type of entity (user or role) that used the policy to access the service to which
   *          the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityType?: PolicyOwnerEntityType | string;

  /**
   * <p>The name of the entity (user or role) to which the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityName?: string;
}

export namespace PolicyGrantingServiceAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyGrantingServiceAccess): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
 */
export interface ListPoliciesGrantingServiceAccessEntry {
  /**
   * <p>The namespace of the service that was accessed.</p>
   *          <p>To learn the service namespace of a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *             <i>Service Authorization Reference</i>. Choose the name of the service to
   *          view details for that service. In the first paragraph, find the service prefix. For
   *          example, <code>(service prefix: a4b)</code>. For more information about service namespaces,
   *          see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
   *             service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ServiceNamespace?: string;

  /**
   * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the
   *          policy.</p>
   */
  Policies?: PolicyGrantingServiceAccess[];
}

export namespace ListPoliciesGrantingServiceAccessEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPoliciesGrantingServiceAccessEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the list of SAML providers for this account.</p>
 */
export interface SAMLProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider.</p>
   */
  Arn?: string;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;
}

export namespace SAMLProviderListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAMLProviderListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Contains additional details about a service-specific credential.</p>
 */
export interface ServiceSpecificCredentialMetadata {
  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The generated user name for the service-specific credential.</p>
   */
  ServiceUserName: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   */
  ServiceName: string | undefined;
}

export namespace ServiceSpecificCredentialMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceSpecificCredentialMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an SSH public key, without the key's body or
 *          fingerprint.</p>
 *          <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a>
 *          operation.</p>
 */
export interface SSHPublicKeyMetadata {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be
   *          used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate: Date | undefined;
}

export namespace SSHPublicKeyMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SSHPublicKeyMetadata): any => ({
    ...obj,
  });
}

export enum GlobalEndpointTokenVersion {
  v1Token = "v1Token",
  v2Token = "v2Token",
}

export enum ContextKeyTypeEnum {
  BINARY = "binary",
  BINARY_LIST = "binaryList",
  BOOLEAN = "boolean",
  BOOLEAN_LIST = "booleanList",
  DATE = "date",
  DATE_LIST = "dateList",
  IP = "ip",
  IP_LIST = "ipList",
  NUMERIC = "numeric",
  NUMERIC_LIST = "numericList",
  STRING = "string",
  STRING_LIST = "stringList",
}

/**
 * <p>Contains the row and column of a location of a <code>Statement</code> element in a
 *          policy document.</p>
 *          <p>This data type is used as a member of the <code>
 *                <a>Statement</a>
 *             </code> type.</p>
 */
export interface Position {
  /**
   * <p>The line containing the specified position in the document.</p>
   */
  Line?: number;

  /**
   * <p>The column in the line containing the specified position in the document.</p>
   */
  Column?: number;
}

export namespace Position {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Position): any => ({
    ...obj,
  });
}

export enum PolicySourceType {
  AWS_MANAGED = "aws-managed",
  GROUP = "group",
  NONE = "none",
  RESOURCE = "resource",
  ROLE = "role",
  USER = "user",
  USER_MANAGED = "user-managed",
}
