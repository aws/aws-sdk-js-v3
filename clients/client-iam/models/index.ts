import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An object that contains details about when a principal in the reported AWS Organizations entity
 *          last attempted to access an AWS service. A principal can be an IAM user, an IAM role,
 *          or the AWS account root user within the reported Organizations entity.</p>
 *          <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p>
 */
export interface AccessDetail {
  __type?: "AccessDetail";
  /**
   * <p>The path of the Organizations entity (root, organizational unit, or account) from which an
   *          authenticated principal last attempted to access the service. AWS does not report
   *          unauthenticated requests.</p>
   *          <p>This field is null if no principals (IAM users, IAM roles, or root users) in the
   *          reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  EntityPath?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated principal most recently attempted to access the
   *          service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
   *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedTime?: Date;

  /**
   * <p>The Region where the last service access attempt occurred.</p>
   *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
   *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  Region?: string;

  /**
   * <p>The name of the service in which access was attempted.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The namespace of the service in which access was attempted.</p>
   *          <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>The number of accounts with authenticated principals (root users, IAM users, and IAM
   *          roles) that attempted to access the service in the reporting period.</p>
   */
  TotalAuthenticatedEntities?: number;
}

export namespace AccessDetail {
  export const filterSensitiveLog = (obj: AccessDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDetail => __isa(o, "AccessDetail");
}

/**
 * <p>Contains information about an AWS access key.</p>
 *          <p> This data type is used as a response element in the <a>CreateAccessKey</a>
 *          and <a>ListAccessKeys</a> operations. </p>
 *          <note>
 *             <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first
 *             create an access key; you cannot recover the secret access key later. If you lose a
 *             secret access key, you must create a new access key.</p>
 *          </note>
 */
export interface AccessKey {
  __type?: "AccessKey";
  /**
   * <p>The ID for this access key.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The secret key used to sign requests.</p>
   */
  SecretAccessKey: string | undefined;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API
   *          calls, while <code>Inactive</code> means it is not. </p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The name of the IAM user that the access key is associated with.</p>
   */
  UserName: string | undefined;
}

export namespace AccessKey {
  export const filterSensitiveLog = (obj: AccessKey): any => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is AccessKey => __isa(o, "AccessKey");
}

/**
 * <p>Contains information about the last time an AWS access key was used since IAM began
 *          tracking this information on April 22, 2015.</p>
 *          <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
 */
export interface AccessKeyLastUsed {
  __type?: "AccessKeyLastUsed";
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the access key was most recently used. This field is null in the
   *          following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM began tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   */
  LastUsedDate: Date | undefined;

  /**
   * <p>The AWS Region where this access key was most recently used. The value for this field is
   *          "N/A" in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM began tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a> in the Amazon Web Services
   *          General Reference.</p>
   */
  Region: string | undefined;

  /**
   * <p>The name of the AWS service with which this access key was most recently used. The value
   *          of this field is "N/A" in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM started tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   */
  ServiceName: string | undefined;
}

export namespace AccessKeyLastUsed {
  export const filterSensitiveLog = (obj: AccessKeyLastUsed): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessKeyLastUsed =>
    __isa(o, "AccessKeyLastUsed");
}

/**
 * <p>Contains information about an AWS access key, without its secret key.</p>
 *          <p>This data type is used as a response element in the <a>ListAccessKeys</a>
 *          operation.</p>
 */
export interface AccessKeyMetadata {
  __type?: "AccessKeyMetadata";
  /**
   * <p>The ID for this access key.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API
   *          calls; <code>Inactive</code> means it is not.</p>
   */
  Status?: StatusType | string;

  /**
   * <p>The name of the IAM user that the key is associated with.</p>
   */
  UserName?: string;
}

export namespace AccessKeyMetadata {
  export const filterSensitiveLog = (obj: AccessKeyMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessKeyMetadata =>
    __isa(o, "AccessKeyMetadata");
}

export interface AddClientIDToOpenIDConnectProviderRequest {
  __type?: "AddClientIDToOpenIDConnectProviderRequest";
  /**
   * <p>The client ID (also known as audience) to add to the IAM OpenID Connect provider
   *          resource.</p>
   */
  ClientID: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider resource to
   *          add the client ID to. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   */
  OpenIDConnectProviderArn: string | undefined;
}

export namespace AddClientIDToOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (
    obj: AddClientIDToOpenIDConnectProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddClientIDToOpenIDConnectProviderRequest =>
    __isa(o, "AddClientIDToOpenIDConnectProviderRequest");
}

export interface AddRoleToInstanceProfileRequest {
  __type?: "AddRoleToInstanceProfileRequest";
  /**
   * <p>The name of the instance profile to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The name of the role to add.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace AddRoleToInstanceProfileRequest {
  export const filterSensitiveLog = (
    obj: AddRoleToInstanceProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddRoleToInstanceProfileRequest =>
    __isa(o, "AddRoleToInstanceProfileRequest");
}

export interface AddUserToGroupRequest {
  __type?: "AddUserToGroupRequest";
  /**
   * <p>The name of the group to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user to add.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace AddUserToGroupRequest {
  export const filterSensitiveLog = (obj: AddUserToGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddUserToGroupRequest =>
    __isa(o, "AddUserToGroupRequest");
}

export type AssignmentStatusType = "Any" | "Assigned" | "Unassigned";

/**
 * <p>Contains information about an attached permissions boundary.</p>
 *          <p>An attached permissions boundary is a managed policy that has been attached to a user or
 *          role to set the permissions boundary.</p>
 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
 *             Identities </a> in the <i>IAM User Guide</i>.</p>
 */
export interface AttachedPermissionsBoundary {
  __type?: "AttachedPermissionsBoundary";
  /**
   * <p> The ARN of the policy used to set the permissions boundary for the user or role.</p>
   */
  PermissionsBoundaryArn?: string;

  /**
   * <p> The permissions boundary usage type that indicates what type of IAM resource is used
   *          as the permissions boundary for an entity. This data type can only have a value of
   *             <code>Policy</code>.</p>
   */
  PermissionsBoundaryType?: PermissionsBoundaryAttachmentType | string;
}

export namespace AttachedPermissionsBoundary {
  export const filterSensitiveLog = (
    obj: AttachedPermissionsBoundary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachedPermissionsBoundary =>
    __isa(o, "AttachedPermissionsBoundary");
}

/**
 * <p>Contains information about an attached policy.</p>
 *          <p>An attached policy is a managed policy that has been attached to a user, group, or role.
 *          This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface AttachedPolicy {
  __type?: "AttachedPolicy";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  PolicyArn?: string;

  /**
   * <p>The friendly name of the attached policy.</p>
   */
  PolicyName?: string;
}

export namespace AttachedPolicy {
  export const filterSensitiveLog = (obj: AttachedPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachedPolicy =>
    __isa(o, "AttachedPolicy");
}

export interface AttachGroupPolicyRequest {
  __type?: "AttachGroupPolicyRequest";
  /**
   * <p>The name (friendly name, not ARN) of the group to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace AttachGroupPolicyRequest {
  export const filterSensitiveLog = (obj: AttachGroupPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachGroupPolicyRequest =>
    __isa(o, "AttachGroupPolicyRequest");
}

export interface AttachRolePolicyRequest {
  __type?: "AttachRolePolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) of the role to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace AttachRolePolicyRequest {
  export const filterSensitiveLog = (obj: AttachRolePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachRolePolicyRequest =>
    __isa(o, "AttachRolePolicyRequest");
}

export interface AttachUserPolicyRequest {
  __type?: "AttachUserPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) of the IAM user to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace AttachUserPolicyRequest {
  export const filterSensitiveLog = (obj: AttachUserPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachUserPolicyRequest =>
    __isa(o, "AttachUserPolicyRequest");
}

export interface ChangePasswordRequest {
  __type?: "ChangePasswordRequest";
  /**
   * <p>The new password. The new password must conform to the AWS account's password policy,
   *          if one exists.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of characters. That string can include almost any printable
   *     ASCII character from the space (\u0020) through the end of the ASCII character range (\u00FF).
   *     You can also include the tab (\u0009), line feed (\u000A), and carriage return (\u000D)
   *     characters. Any of these characters are valid in a password. However, many tools, such
   *     as the AWS Management Console, might restrict the ability to type certain characters because they have
   *     special meaning within that tool.</p>
   */
  NewPassword: string | undefined;

  /**
   * <p>The IAM user's current password.</p>
   */
  OldPassword: string | undefined;
}

export namespace ChangePasswordRequest {
  export const filterSensitiveLog = (obj: ChangePasswordRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
    ...(obj.OldPassword && { OldPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ChangePasswordRequest =>
    __isa(o, "ChangePasswordRequest");
}

/**
 * <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (
    obj: ConcurrentModificationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentModificationException =>
    __isa(o, "ConcurrentModificationException");
}

/**
 * <p>Contains information about a condition context key. It includes the name of the key and
 *          specifies the value (or values, if the context key supports multiple values) to use in the
 *          simulation. This information is used when evaluating the <code>Condition</code> elements of
 *          the input policies.</p>
 *          <p>This data type is used as an input parameter to <code>
 *                <a>SimulateCustomPolicy</a>
 *             </code> and <code>
 *                <a>SimulatePrincipalPolicy</a>
 *             </code>.</p>
 */
export interface ContextEntry {
  __type?: "ContextEntry";
  /**
   * <p>The full name of a condition context key, including the service prefix. For example,
   *             <code>aws:SourceIp</code> or <code>s3:VersionId</code>.</p>
   */
  ContextKeyName?: string;

  /**
   * <p>The data type of the value (or values) specified in the <code>ContextKeyValues</code>
   *          parameter.</p>
   */
  ContextKeyType?: ContextKeyTypeEnum | string;

  /**
   * <p>The value (or values, if the condition context key supports multiple values) to provide
   *          to the simulation when the key is referenced by a <code>Condition</code> element in an
   *          input policy.</p>
   */
  ContextKeyValues?: string[];
}

export namespace ContextEntry {
  export const filterSensitiveLog = (obj: ContextEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContextEntry => __isa(o, "ContextEntry");
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
  STRING_LIST = "stringList"
}

export interface CreateAccessKeyRequest {
  __type?: "CreateAccessKeyRequest";
  /**
   * <p>The name of the IAM user that the new key will belong to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace CreateAccessKeyRequest {
  export const filterSensitiveLog = (obj: CreateAccessKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAccessKeyRequest =>
    __isa(o, "CreateAccessKeyRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateAccessKey</a> request.
 *     </p>
 */
export interface CreateAccessKeyResponse {
  __type?: "CreateAccessKeyResponse";
  /**
   * <p>A structure with details about the access key.</p>
   */
  AccessKey: AccessKey | undefined;
}

export namespace CreateAccessKeyResponse {
  export const filterSensitiveLog = (obj: CreateAccessKeyResponse): any => ({
    ...obj,
    ...(obj.AccessKey && {
      AccessKey: AccessKey.filterSensitiveLog(obj.AccessKey)
    })
  });
  export const isa = (o: any): o is CreateAccessKeyResponse =>
    __isa(o, "CreateAccessKeyResponse");
}

export interface CreateAccountAliasRequest {
  __type?: "CreateAccountAliasRequest";
  /**
   * <p>The account alias to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of
   *     lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have
   *     two dashes in a row.</p>
   */
  AccountAlias: string | undefined;
}

export namespace CreateAccountAliasRequest {
  export const filterSensitiveLog = (obj: CreateAccountAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAccountAliasRequest =>
    __isa(o, "CreateAccountAliasRequest");
}

export interface CreateGroupRequest {
  __type?: "CreateGroupRequest";
  /**
   * <p>The name of the group to create. Do not include the path in this value.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  GroupName: string | undefined;

  /**
   * <p> The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGroupRequest =>
    __isa(o, "CreateGroupRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateGroup</a> request. </p>
 */
export interface CreateGroupResponse {
  __type?: "CreateGroupResponse";
  /**
   * <p>A structure containing details about the new group.</p>
   */
  Group: Group | undefined;
}

export namespace CreateGroupResponse {
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGroupResponse =>
    __isa(o, "CreateGroupResponse");
}

export interface CreateInstanceProfileRequest {
  __type?: "CreateInstanceProfileRequest";
  /**
   * <p>The name of the instance profile to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;
}

export namespace CreateInstanceProfileRequest {
  export const filterSensitiveLog = (
    obj: CreateInstanceProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateInstanceProfileRequest =>
    __isa(o, "CreateInstanceProfileRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateInstanceProfile</a> request.
 *     </p>
 */
export interface CreateInstanceProfileResponse {
  __type?: "CreateInstanceProfileResponse";
  /**
   * <p>A structure containing details about the new instance profile.</p>
   */
  InstanceProfile: InstanceProfile | undefined;
}

export namespace CreateInstanceProfileResponse {
  export const filterSensitiveLog = (
    obj: CreateInstanceProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateInstanceProfileResponse =>
    __isa(o, "CreateInstanceProfileResponse");
}

export interface CreateLoginProfileRequest {
  __type?: "CreateLoginProfileRequest";
  /**
   * <p>The new password for the user.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of characters. That string can include almost any printable
   *     ASCII character from the space (\u0020) through the end of the ASCII character range (\u00FF).
   *     You can also include the tab (\u0009), line feed (\u000A), and carriage return (\u000D)
   *     characters. Any of these characters are valid in a password. However, many tools, such
   *     as the AWS Management Console, might restrict the ability to type certain characters because they have
   *     special meaning within that tool.</p>
   */
  Password: string | undefined;

  /**
   * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;

  /**
   * <p>The name of the IAM user to create a password for. The user must already exist.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace CreateLoginProfileRequest {
  export const filterSensitiveLog = (obj: CreateLoginProfileRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateLoginProfileRequest =>
    __isa(o, "CreateLoginProfileRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateLoginProfile</a> request.
 *     </p>
 */
export interface CreateLoginProfileResponse {
  __type?: "CreateLoginProfileResponse";
  /**
   * <p>A structure containing the user name and password create date.</p>
   */
  LoginProfile: LoginProfile | undefined;
}

export namespace CreateLoginProfileResponse {
  export const filterSensitiveLog = (obj: CreateLoginProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLoginProfileResponse =>
    __isa(o, "CreateLoginProfileResponse");
}

export interface CreateOpenIDConnectProviderRequest {
  __type?: "CreateOpenIDConnectProviderRequest";
  /**
   * <p>A list of client IDs (also known as audiences). When a mobile or web app registers with
   *          an OpenID Connect provider, they establish a value that identifies the application. (This
   *          is the value that's sent as the <code>client_id</code> parameter on OAuth requests.)</p>
   *          <p>You can register multiple client IDs with the same provider. For example, you might have
   *          multiple applications that use the same OIDC provider. You cannot register more than 100
   *          client IDs with a single IAM OIDC provider.</p>
   *          <p>There is no defined format for a client ID. The
   *             <code>CreateOpenIDConnectProviderRequest</code> operation accepts client IDs up to 255
   *          characters long.</p>
   */
  ClientIDList?: string[];

  /**
   * <p>A list of server certificate thumbprints for the OpenID Connect (OIDC) identity
   *          provider's server certificates. Typically this list includes only one entry. However, IAM
   *          lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple
   *          thumbprints if the identity provider is rotating certificates.</p>
   *          <p>The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509
   *          certificate used by the domain where the OpenID Connect provider makes its keys available.
   *          It is always a 40-character string.</p>
   *          <p>You must provide at least one thumbprint when creating an IAM OIDC provider. For
   *          example, assume that the OIDC provider is <code>server.example.com</code> and the provider
   *          stores its keys at https://keys.server.example.com/openid-connect. In that case, the
   *          thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by
   *          https://keys.server.example.com.</p>
   *          <p>For more information about obtaining the OIDC provider's thumbprint, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/identity-providers-oidc-obtain-thumbprint.html">Obtaining the Thumbprint for an OpenID Connect Provider</a> in the <i>IAM
   *             User Guide</i>.</p>
   */
  ThumbprintList: string[] | undefined;

  /**
   * <p>The URL of the identity provider. The URL must begin with <code>https://</code> and
   *          should correspond to the <code>iss</code> claim in the provider's OpenID Connect ID tokens.
   *          Per the OIDC standard, path components are allowed but query parameters are not. Typically
   *          the URL consists of only a hostname, like <code>https://server.example.org</code> or
   *             <code>https://example.com</code>.</p>
   *          <p>You cannot register the same provider multiple times in a single AWS account. If you
   *          try to submit a URL that has already been used for an OpenID Connect provider in the AWS
   *          account, you will get an error.</p>
   */
  Url: string | undefined;
}

export namespace CreateOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (
    obj: CreateOpenIDConnectProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOpenIDConnectProviderRequest =>
    __isa(o, "CreateOpenIDConnectProviderRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateOpenIDConnectProvider</a>
 *       request. </p>
 */
export interface CreateOpenIDConnectProviderResponse {
  __type?: "CreateOpenIDConnectProviderResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is created.
   *          For more information, see <a>OpenIDConnectProviderListEntry</a>. </p>
   */
  OpenIDConnectProviderArn?: string;
}

export namespace CreateOpenIDConnectProviderResponse {
  export const filterSensitiveLog = (
    obj: CreateOpenIDConnectProviderResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOpenIDConnectProviderResponse =>
    __isa(o, "CreateOpenIDConnectProviderResponse");
}

export interface CreatePolicyRequest {
  __type?: "CreatePolicyRequest";
  /**
   * <p>A friendly description of the policy.</p>
   *          <p>Typically used to store information about the permissions defined in the policy. For
   *          example, "Grants access to production DynamoDB tables."</p>
   *          <p>The policy description is immutable. After a value is assigned, it cannot be
   *          changed.</p>
   */
  Description?: string;

  /**
   * <p>The path for the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The JSON policy document that you want to use as the content for the new policy.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The friendly name of the policy.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  PolicyName: string | undefined;
}

export namespace CreatePolicyRequest {
  export const filterSensitiveLog = (obj: CreatePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyRequest =>
    __isa(o, "CreatePolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>CreatePolicy</a> request.
 *     </p>
 */
export interface CreatePolicyResponse {
  __type?: "CreatePolicyResponse";
  /**
   * <p>A structure containing details about the new policy.</p>
   */
  Policy?: Policy;
}

export namespace CreatePolicyResponse {
  export const filterSensitiveLog = (obj: CreatePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyResponse =>
    __isa(o, "CreatePolicyResponse");
}

export interface CreatePolicyVersionRequest {
  __type?: "CreatePolicyVersionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy to which you want to add a new
   *          version.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The JSON policy document that you want to use as the content for this new version of the
   *          policy.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>Specifies whether to set this version as the policy's default version.</p>
   *          <p>When this parameter is <code>true</code>, the new policy version becomes the operative
   *          version. That is, it becomes the version that is in effect for the IAM users, groups, and
   *          roles that the policy is attached to.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  SetAsDefault?: boolean;
}

export namespace CreatePolicyVersionRequest {
  export const filterSensitiveLog = (obj: CreatePolicyVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyVersionRequest =>
    __isa(o, "CreatePolicyVersionRequest");
}

/**
 * <p>Contains the response to a successful <a>CreatePolicyVersion</a> request.
 *     </p>
 */
export interface CreatePolicyVersionResponse {
  __type?: "CreatePolicyVersionResponse";
  /**
   * <p>A structure containing details about the new policy version.</p>
   */
  PolicyVersion?: PolicyVersion;
}

export namespace CreatePolicyVersionResponse {
  export const filterSensitiveLog = (
    obj: CreatePolicyVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyVersionResponse =>
    __isa(o, "CreatePolicyVersionResponse");
}

export interface CreateRoleRequest {
  __type?: "CreateRoleRequest";
  /**
   * <p>The trust relationship policy document that grants an entity permission to assume the
   *          role.</p>
   *
   *          <p>In IAM, you must provide a JSON policy that has been converted to a string. However,
   *          for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or
   *          YAML format. AWS CloudFormation always converts a YAML policy to JSON format before
   *          submitting it to IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   *          <p> Upon success, the response includes
   *          the same trust policy in JSON format.</p>
   */
  AssumeRolePolicyDocument: string | undefined;

  /**
   * <p>A description of the role.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *          If you do not specify a value for this setting, the default maximum of one hour is applied.
   *          This setting can have a value from 1 hour to 12 hours.</p>
   *          <p>Anyone who assumes the role from the AWS CLI or API can use the
   *             <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI
   *          parameter to request a longer session. The <code>MaxSessionDuration</code> setting
   *          determines the maximum duration that can be requested using the
   *             <code>DurationSeconds</code> parameter. If users don't specify a value for the
   *             <code>DurationSeconds</code> parameter, their security credentials are valid for one
   *          hour by default. This applies when you use the <code>AssumeRole*</code> API operations or
   *          the <code>assume-role*</code> CLI operations but does not apply when you use those
   *          operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the role.</p>
   */
  PermissionsBoundary?: string;

  /**
   * <p>The name of the role to create.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  RoleName: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created role. Each tag consists of
   *       a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
   *         <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed number of tags per
   *         role, then the entire request fails and the role is not created.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateRoleRequest {
  export const filterSensitiveLog = (obj: CreateRoleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRoleRequest =>
    __isa(o, "CreateRoleRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateRole</a> request. </p>
 */
export interface CreateRoleResponse {
  __type?: "CreateRoleResponse";
  /**
   * <p>A structure containing details about the new role.</p>
   */
  Role: Role | undefined;
}

export namespace CreateRoleResponse {
  export const filterSensitiveLog = (obj: CreateRoleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRoleResponse =>
    __isa(o, "CreateRoleResponse");
}

export interface CreateSAMLProviderRequest {
  __type?: "CreateSAMLProviderRequest";
  /**
   * <p>The name of the provider to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  Name: string | undefined;

  /**
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *          document includes the issuer's name, expiration information, and keys that can be used to
   *          validate the SAML authentication response (assertions) that are received from the IdP. You
   *          must generate the metadata document using the identity management software that is used as
   *          your organization's IdP.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
   *             Federation</a> in the <i>IAM User Guide</i>
   *          </p>
   */
  SAMLMetadataDocument: string | undefined;
}

export namespace CreateSAMLProviderRequest {
  export const filterSensitiveLog = (obj: CreateSAMLProviderRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSAMLProviderRequest =>
    __isa(o, "CreateSAMLProviderRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateSAMLProvider</a> request.
 *     </p>
 */
export interface CreateSAMLProviderResponse {
  __type?: "CreateSAMLProviderResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the new SAML provider resource in IAM.</p>
   */
  SAMLProviderArn?: string;
}

export namespace CreateSAMLProviderResponse {
  export const filterSensitiveLog = (obj: CreateSAMLProviderResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSAMLProviderResponse =>
    __isa(o, "CreateSAMLProviderResponse");
}

export interface CreateServiceLinkedRoleRequest {
  __type?: "CreateServiceLinkedRoleRequest";
  /**
   * <p>The service principal for the AWS service to which this role is attached. You use a
   *          string similar to a URL but without the http:// in front. For example:
   *             <code>elasticbeanstalk.amazonaws.com</code>. </p>
   *          <p>Service principals are unique and case-sensitive. To find the exact service principal
   *          for your service-linked role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html">AWS Services That
   *             Work with IAM</a> in the <i>IAM User Guide</i>. Look for the
   *          services that have <b>Yes </b>in the <b>Service-Linked Role</b> column. Choose the <b>Yes</b>
   *          link to view the service-linked role documentation for that service.</p>
   */
  AWSServiceName: string | undefined;

  /**
   * <p></p>
   *          <p>A string that you provide, which is combined with the service-provided prefix to form
   *          the complete role name. If you make multiple requests for the same service, then you must
   *          supply a different <code>CustomSuffix</code> for each request. Otherwise the request fails
   *          with a duplicate role name error. For example, you could add <code>-1</code> or
   *             <code>-debug</code> to the suffix.</p>
   *          <p>Some services do not support the <code>CustomSuffix</code> parameter. If you provide an
   *          optional suffix and the operation fails, try the operation again without the suffix.</p>
   */
  CustomSuffix?: string;

  /**
   * <p>The description of the role.</p>
   */
  Description?: string;
}

export namespace CreateServiceLinkedRoleRequest {
  export const filterSensitiveLog = (
    obj: CreateServiceLinkedRoleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateServiceLinkedRoleRequest =>
    __isa(o, "CreateServiceLinkedRoleRequest");
}

export interface CreateServiceLinkedRoleResponse {
  __type?: "CreateServiceLinkedRoleResponse";
  /**
   * <p>A <a>Role</a> object that contains details about the newly created
   *          role.</p>
   */
  Role?: Role;
}

export namespace CreateServiceLinkedRoleResponse {
  export const filterSensitiveLog = (
    obj: CreateServiceLinkedRoleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateServiceLinkedRoleResponse =>
    __isa(o, "CreateServiceLinkedRoleResponse");
}

export interface CreateServiceSpecificCredentialRequest {
  __type?: "CreateServiceSpecificCredentialRequest";
  /**
   * <p>The name of the AWS service that is to be associated with the credentials. The service
   *          you specify here is the only service that can be accessed using these credentials.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The name of the IAM user that is to be associated with the credentials. The new
   *          service-specific credentials have the same permissions as the associated user except that
   *          they can be used only to access the specified service.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace CreateServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (
    obj: CreateServiceSpecificCredentialRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateServiceSpecificCredentialRequest =>
    __isa(o, "CreateServiceSpecificCredentialRequest");
}

export interface CreateServiceSpecificCredentialResponse {
  __type?: "CreateServiceSpecificCredentialResponse";
  /**
   * <p>A structure that contains information about the newly created service-specific
   *          credential.</p>
   *          <important>
   *             <p>This is the only time that the password for this credential set is available. It
   *             cannot be recovered later. Instead, you must reset the password with <a>ResetServiceSpecificCredential</a>.</p>
   *          </important>
   */
  ServiceSpecificCredential?: ServiceSpecificCredential;
}

export namespace CreateServiceSpecificCredentialResponse {
  export const filterSensitiveLog = (
    obj: CreateServiceSpecificCredentialResponse
  ): any => ({
    ...obj,
    ...(obj.ServiceSpecificCredential && {
      ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(
        obj.ServiceSpecificCredential
      )
    })
  });
  export const isa = (o: any): o is CreateServiceSpecificCredentialResponse =>
    __isa(o, "CreateServiceSpecificCredentialResponse");
}

export interface CreateUserRequest {
  __type?: "CreateUserRequest";
  /**
   * <p> The path for the user name. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the user.</p>
   */
  PermissionsBoundary?: string;

  /**
   * <p>A list of tags that you want to attach to the newly created user. Each tag consists of
   *       a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
   *         <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed number of tags per
   *         user, then the entire request fails and the user is not created.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the user to create.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  UserName: string | undefined;
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserRequest =>
    __isa(o, "CreateUserRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateUser</a> request. </p>
 */
export interface CreateUserResponse {
  __type?: "CreateUserResponse";
  /**
   * <p>A structure with details about the new IAM user.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserResponse =>
    __isa(o, "CreateUserResponse");
}

export interface CreateVirtualMFADeviceRequest {
  __type?: "CreateVirtualMFADeviceRequest";
  /**
   * <p> The path for the virtual MFA device. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA
   *          device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  VirtualMFADeviceName: string | undefined;
}

export namespace CreateVirtualMFADeviceRequest {
  export const filterSensitiveLog = (
    obj: CreateVirtualMFADeviceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateVirtualMFADeviceRequest =>
    __isa(o, "CreateVirtualMFADeviceRequest");
}

/**
 * <p>Contains the response to a successful <a>CreateVirtualMFADevice</a> request.
 *     </p>
 */
export interface CreateVirtualMFADeviceResponse {
  __type?: "CreateVirtualMFADeviceResponse";
  /**
   * <p>A structure containing details about the new virtual MFA device.</p>
   */
  VirtualMFADevice: VirtualMFADevice | undefined;
}

export namespace CreateVirtualMFADeviceResponse {
  export const filterSensitiveLog = (
    obj: CreateVirtualMFADeviceResponse
  ): any => ({
    ...obj,
    ...(obj.VirtualMFADevice && {
      VirtualMFADevice: VirtualMFADevice.filterSensitiveLog(
        obj.VirtualMFADevice
      )
    })
  });
  export const isa = (o: any): o is CreateVirtualMFADeviceResponse =>
    __isa(o, "CreateVirtualMFADeviceResponse");
}

/**
 * <p>The request was rejected because the most recent credential report has expired. To
 *       generate a new credential report, use <a>GenerateCredentialReport</a>. For more
 *       information about credential report expiration, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export interface CredentialReportExpiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "CredentialReportExpiredException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportExpiredException {
  export const filterSensitiveLog = (
    obj: CredentialReportExpiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CredentialReportExpiredException =>
    __isa(o, "CredentialReportExpiredException");
}

/**
 * <p>The request was rejected because the credential report does not exist. To generate a
 *       credential report, use <a>GenerateCredentialReport</a>.</p>
 */
export interface CredentialReportNotPresentException
  extends __SmithyException,
    $MetadataBearer {
  name: "CredentialReportNotPresentException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportNotPresentException {
  export const filterSensitiveLog = (
    obj: CredentialReportNotPresentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CredentialReportNotPresentException =>
    __isa(o, "CredentialReportNotPresentException");
}

/**
 * <p>The request was rejected because the credential report is still being
 *       generated.</p>
 */
export interface CredentialReportNotReadyException
  extends __SmithyException,
    $MetadataBearer {
  name: "CredentialReportNotReadyException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportNotReadyException {
  export const filterSensitiveLog = (
    obj: CredentialReportNotReadyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CredentialReportNotReadyException =>
    __isa(o, "CredentialReportNotReadyException");
}

export interface DeactivateMFADeviceRequest {
  __type?: "DeactivateMFADeviceRequest";
  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>The name of the user whose MFA device you want to deactivate.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DeactivateMFADeviceRequest {
  export const filterSensitiveLog = (obj: DeactivateMFADeviceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeactivateMFADeviceRequest =>
    __isa(o, "DeactivateMFADeviceRequest");
}

export interface DeleteAccessKeyRequest {
  __type?: "DeleteAccessKeyRequest";
  /**
   * <p>The access key ID for the access key ID and secret access key you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p>The name of the user whose access key pair you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace DeleteAccessKeyRequest {
  export const filterSensitiveLog = (obj: DeleteAccessKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAccessKeyRequest =>
    __isa(o, "DeleteAccessKeyRequest");
}

export interface DeleteAccountAliasRequest {
  __type?: "DeleteAccountAliasRequest";
  /**
   * <p>The name of the account alias to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of
   *     lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have
   *     two dashes in a row.</p>
   */
  AccountAlias: string | undefined;
}

export namespace DeleteAccountAliasRequest {
  export const filterSensitiveLog = (obj: DeleteAccountAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAccountAliasRequest =>
    __isa(o, "DeleteAccountAliasRequest");
}

/**
 * <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 */
export interface DeleteConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "DeleteConflictException";
  $fault: "client";
  message?: string;
}

export namespace DeleteConflictException {
  export const filterSensitiveLog = (obj: DeleteConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConflictException =>
    __isa(o, "DeleteConflictException");
}

export interface DeleteGroupPolicyRequest {
  __type?: "DeleteGroupPolicyRequest";
  /**
   * <p>The name (friendly name, not ARN) identifying the group that the policy is embedded
   *          in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name identifying the policy document to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace DeleteGroupPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteGroupPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupPolicyRequest =>
    __isa(o, "DeleteGroupPolicyRequest");
}

export interface DeleteGroupRequest {
  __type?: "DeleteGroupRequest";
  /**
   * <p>The name of the IAM group to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupRequest =>
    __isa(o, "DeleteGroupRequest");
}

export interface DeleteInstanceProfileRequest {
  __type?: "DeleteInstanceProfileRequest";
  /**
   * <p>The name of the instance profile to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;
}

export namespace DeleteInstanceProfileRequest {
  export const filterSensitiveLog = (
    obj: DeleteInstanceProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInstanceProfileRequest =>
    __isa(o, "DeleteInstanceProfileRequest");
}

export interface DeleteLoginProfileRequest {
  __type?: "DeleteLoginProfileRequest";
  /**
   * <p>The name of the user whose password you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DeleteLoginProfileRequest {
  export const filterSensitiveLog = (obj: DeleteLoginProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLoginProfileRequest =>
    __isa(o, "DeleteLoginProfileRequest");
}

export interface DeleteOpenIDConnectProviderRequest {
  __type?: "DeleteOpenIDConnectProviderRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource object to
   *          delete. You can get a list of OpenID Connect provider resource ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   */
  OpenIDConnectProviderArn: string | undefined;
}

export namespace DeleteOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (
    obj: DeleteOpenIDConnectProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteOpenIDConnectProviderRequest =>
    __isa(o, "DeleteOpenIDConnectProviderRequest");
}

export interface DeletePolicyRequest {
  __type?: "DeletePolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to delete.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace DeletePolicyRequest {
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePolicyRequest =>
    __isa(o, "DeletePolicyRequest");
}

export interface DeletePolicyVersionRequest {
  __type?: "DeletePolicyVersionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a
   *          version.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The policy version to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that
   *     consists of the lowercase letter 'v' followed by one or two digits, and optionally
   *     followed by a period '.' and a string of letters and digits.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  VersionId: string | undefined;
}

export namespace DeletePolicyVersionRequest {
  export const filterSensitiveLog = (obj: DeletePolicyVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePolicyVersionRequest =>
    __isa(o, "DeletePolicyVersionRequest");
}

export interface DeleteRolePermissionsBoundaryRequest {
  __type?: "DeleteRolePermissionsBoundaryRequest";
  /**
   * <p>The name (friendly name, not ARN) of the IAM role from which you want to remove the
   *          permissions boundary.</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteRolePermissionsBoundaryRequest {
  export const filterSensitiveLog = (
    obj: DeleteRolePermissionsBoundaryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRolePermissionsBoundaryRequest =>
    __isa(o, "DeleteRolePermissionsBoundaryRequest");
}

export interface DeleteRolePolicyRequest {
  __type?: "DeleteRolePolicyRequest";
  /**
   * <p>The name of the inline policy to delete from the specified IAM role.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) identifying the role that the policy is embedded
   *          in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteRolePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteRolePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRolePolicyRequest =>
    __isa(o, "DeleteRolePolicyRequest");
}

export interface DeleteRoleRequest {
  __type?: "DeleteRoleRequest";
  /**
   * <p>The name of the role to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteRoleRequest {
  export const filterSensitiveLog = (obj: DeleteRoleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRoleRequest =>
    __isa(o, "DeleteRoleRequest");
}

export interface DeleteSAMLProviderRequest {
  __type?: "DeleteSAMLProviderRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to delete.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace DeleteSAMLProviderRequest {
  export const filterSensitiveLog = (obj: DeleteSAMLProviderRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSAMLProviderRequest =>
    __isa(o, "DeleteSAMLProviderRequest");
}

export interface DeleteServerCertificateRequest {
  __type?: "DeleteServerCertificateRequest";
  /**
   * <p>The name of the server certificate you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;
}

export namespace DeleteServerCertificateRequest {
  export const filterSensitiveLog = (
    obj: DeleteServerCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteServerCertificateRequest =>
    __isa(o, "DeleteServerCertificateRequest");
}

export interface DeleteServiceLinkedRoleRequest {
  __type?: "DeleteServiceLinkedRoleRequest";
  /**
   * <p>The name of the service-linked role to be deleted.</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteServiceLinkedRoleRequest {
  export const filterSensitiveLog = (
    obj: DeleteServiceLinkedRoleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteServiceLinkedRoleRequest =>
    __isa(o, "DeleteServiceLinkedRoleRequest");
}

export interface DeleteServiceLinkedRoleResponse {
  __type?: "DeleteServiceLinkedRoleResponse";
  /**
   * <p>The deletion task identifier that you can use to check the status of the deletion. This
   *          identifier is returned in the format
   *             <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
   */
  DeletionTaskId: string | undefined;
}

export namespace DeleteServiceLinkedRoleResponse {
  export const filterSensitiveLog = (
    obj: DeleteServiceLinkedRoleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteServiceLinkedRoleResponse =>
    __isa(o, "DeleteServiceLinkedRoleResponse");
}

export interface DeleteServiceSpecificCredentialRequest {
  __type?: "DeleteServiceSpecificCredentialRequest";
  /**
   * <p>The unique identifier of the service-specific credential. You can get this value by
   *          calling <a>ListServiceSpecificCredentials</a>.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the IAM user associated with the service-specific credential. If this
   *          value is not specified, then the operation assumes the user whose credentials are used to
   *          call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace DeleteServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (
    obj: DeleteServiceSpecificCredentialRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteServiceSpecificCredentialRequest =>
    __isa(o, "DeleteServiceSpecificCredentialRequest");
}

export interface DeleteSigningCertificateRequest {
  __type?: "DeleteSigningCertificateRequest";
  /**
   * <p>The ID of the signing certificate to delete.</p>
   *          <p>The format of this parameter, as described by its <a href="http://wikipedia.org/wiki/regex">regex</a> pattern, is a string of characters
   *          that can be upper- or lower-cased letters or digits.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p>The name of the user the signing certificate belongs to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace DeleteSigningCertificateRequest {
  export const filterSensitiveLog = (
    obj: DeleteSigningCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSigningCertificateRequest =>
    __isa(o, "DeleteSigningCertificateRequest");
}

export interface DeleteSSHPublicKeyRequest {
  __type?: "DeleteSSHPublicKeyRequest";
  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DeleteSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: DeleteSSHPublicKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSSHPublicKeyRequest =>
    __isa(o, "DeleteSSHPublicKeyRequest");
}

export interface DeleteUserPermissionsBoundaryRequest {
  __type?: "DeleteUserPermissionsBoundaryRequest";
  /**
   * <p>The name (friendly name, not ARN) of the IAM user from which you want to remove the
   *          permissions boundary.</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserPermissionsBoundaryRequest {
  export const filterSensitiveLog = (
    obj: DeleteUserPermissionsBoundaryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserPermissionsBoundaryRequest =>
    __isa(o, "DeleteUserPermissionsBoundaryRequest");
}

export interface DeleteUserPolicyRequest {
  __type?: "DeleteUserPolicyRequest";
  /**
   * <p>The name identifying the policy document to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) identifying the user that the policy is embedded
   *          in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteUserPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserPolicyRequest =>
    __isa(o, "DeleteUserPolicyRequest");
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   * <p>The name of the user to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserRequest =>
    __isa(o, "DeleteUserRequest");
}

export interface DeleteVirtualMFADeviceRequest {
  __type?: "DeleteVirtualMFADeviceRequest";
  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the same as the ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   */
  SerialNumber: string | undefined;
}

export namespace DeleteVirtualMFADeviceRequest {
  export const filterSensitiveLog = (
    obj: DeleteVirtualMFADeviceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteVirtualMFADeviceRequest =>
    __isa(o, "DeleteVirtualMFADeviceRequest");
}

/**
 * <p>The reason that the service-linked role deletion failed.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
 */
export interface DeletionTaskFailureReasonType {
  __type?: "DeletionTaskFailureReasonType";
  /**
   * <p>A short description of the reason that the service-linked role deletion failed.</p>
   */
  Reason?: string;

  /**
   * <p>A list of objects that contains details about the service-linked role deletion failure,
   *          if that information is returned by the service. If the service-linked role has active
   *          sessions or if any resources that were used by the role have not been deleted from the
   *          linked service, the role can't be deleted. This parameter includes a list of the resources
   *          that are associated with the role and the Region in which the resources are being
   *          used.</p>
   */
  RoleUsageList?: RoleUsageType[];
}

export namespace DeletionTaskFailureReasonType {
  export const filterSensitiveLog = (
    obj: DeletionTaskFailureReasonType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletionTaskFailureReasonType =>
    __isa(o, "DeletionTaskFailureReasonType");
}

export enum DeletionTaskStatusType {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SUCCEEDED = "SUCCEEDED"
}

export interface DetachGroupPolicyRequest {
  __type?: "DetachGroupPolicyRequest";
  /**
   * <p>The name (friendly name, not ARN) of the IAM group to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace DetachGroupPolicyRequest {
  export const filterSensitiveLog = (obj: DetachGroupPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachGroupPolicyRequest =>
    __isa(o, "DetachGroupPolicyRequest");
}

export interface DetachRolePolicyRequest {
  __type?: "DetachRolePolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) of the IAM role to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace DetachRolePolicyRequest {
  export const filterSensitiveLog = (obj: DetachRolePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachRolePolicyRequest =>
    __isa(o, "DetachRolePolicyRequest");
}

export interface DetachUserPolicyRequest {
  __type?: "DetachUserPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) of the IAM user to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DetachUserPolicyRequest {
  export const filterSensitiveLog = (obj: DetachUserPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachUserPolicyRequest =>
    __isa(o, "DetachUserPolicyRequest");
}

/**
 * <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 */
export interface DuplicateCertificateException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateCertificateException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateCertificateException {
  export const filterSensitiveLog = (
    obj: DuplicateCertificateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateCertificateException =>
    __isa(o, "DuplicateCertificateException");
}

/**
 * <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 */
export interface DuplicateSSHPublicKeyException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateSSHPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateSSHPublicKeyException {
  export const filterSensitiveLog = (
    obj: DuplicateSSHPublicKeyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateSSHPublicKeyException =>
    __isa(o, "DuplicateSSHPublicKeyException");
}

export interface EnableMFADeviceRequest {
  __type?: "EnableMFADeviceRequest";
  /**
   * <p>An authentication code emitted by the device. </p>
   *          <p>The format for this parameter is a string of six digits.</p>
   *          <important>
   *             <p>Submit your request immediately after generating the authentication codes. If you
   *             generate the codes and then wait too long to submit the request, the MFA device
   *             successfully associates with the user but the MFA device becomes out of sync. This
   *             happens because time-based one-time passwords (TOTP) expire after a short period of
   *             time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p>
   *          </important>
   */
  AuthenticationCode1: string | undefined;

  /**
   * <p>A subsequent authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a string of six digits.</p>
   *          <important>
   *             <p>Submit your request immediately after generating the authentication codes. If you
   *             generate the codes and then wait too long to submit the request, the MFA device
   *             successfully associates with the user but the MFA device becomes out of sync. This
   *             happens because time-based one-time passwords (TOTP) expire after a short period of
   *             time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p>
   *          </important>
   */
  AuthenticationCode2: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>The name of the IAM user for whom you want to enable the MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace EnableMFADeviceRequest {
  export const filterSensitiveLog = (obj: EnableMFADeviceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableMFADeviceRequest =>
    __isa(o, "EnableMFADeviceRequest");
}

export type EncodingType = "PEM" | "SSH";

/**
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 */
export interface EntityAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace EntityAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: EntityAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EntityAlreadyExistsException =>
    __isa(o, "EntityAlreadyExistsException");
}

/**
 * <p>An object that contains details about when the IAM entities (users or roles) were last
 *          used in an attempt to access the specified AWS service.</p>
 *          <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p>
 */
export interface EntityDetails {
  __type?: "EntityDetails";
  /**
   * <p>The <code>EntityInfo</code> object that contains details about the entity (user or
   *          role).</p>
   */
  EntityInfo: EntityInfo | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the authenticated entity last attempted to access AWS. AWS does
   *          not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date;
}

export namespace EntityDetails {
  export const filterSensitiveLog = (obj: EntityDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is EntityDetails => __isa(o, "EntityDetails");
}

/**
 * <p>Contains details about the specified entity (user or role).</p>
 *          <p>This data type is an element of the <a>EntityDetails</a> object.</p>
 */
export interface EntityInfo {
  __type?: "EntityInfo";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The identifier of the entity (user or role).</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the entity (user or role).</p>
   */
  Name: string | undefined;

  /**
   * <p>The path to the entity (user or role). For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  Path?: string;

  /**
   * <p>The type of entity (user or role).</p>
   */
  Type: PolicyOwnerEntityType | string | undefined;
}

export namespace EntityInfo {
  export const filterSensitiveLog = (obj: EntityInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is EntityInfo => __isa(o, "EntityInfo");
}

/**
 * <p>The request was rejected because it referenced an entity that is temporarily
 *       unmodifiable, such as a user name that was deleted and then recreated. The error indicates
 *       that the request is likely to succeed if you try again after waiting several minutes. The
 *       error message describes the entity.</p>
 */
export interface EntityTemporarilyUnmodifiableException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityTemporarilyUnmodifiableException";
  $fault: "client";
  message?: string;
}

export namespace EntityTemporarilyUnmodifiableException {
  export const filterSensitiveLog = (
    obj: EntityTemporarilyUnmodifiableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EntityTemporarilyUnmodifiableException =>
    __isa(o, "EntityTemporarilyUnmodifiableException");
}

export enum EntityType {
  AWSManagedPolicy = "AWSManagedPolicy",
  Group = "Group",
  LocalManagedPolicy = "LocalManagedPolicy",
  Role = "Role",
  User = "User"
}

/**
 * <p>Contains information about the reason that the operation failed.</p>
 *          <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
 */
export interface ErrorDetails {
  __type?: "ErrorDetails";
  /**
   * <p>The error code associated with the operation failure.</p>
   */
  Code: string | undefined;

  /**
   * <p>Detailed information about the reason that the operation failed.</p>
   */
  Message: string | undefined;
}

export namespace ErrorDetails {
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorDetails => __isa(o, "ErrorDetails");
}

/**
 * <p>Contains the results of a simulation.</p>
 *          <p>This data type is used by the return parameter of <code>
 *                <a>SimulateCustomPolicy</a>
 *             </code> and <code>
 *                <a>SimulatePrincipalPolicy</a>
 *             </code>.</p>
 */
export interface EvaluationResult {
  __type?: "EvaluationResult";
  /**
   * <p>The name of the API operation tested on the indicated resource.</p>
   */
  EvalActionName: string | undefined;

  /**
   * <p>The result of the simulation.</p>
   */
  EvalDecision: PolicyEvaluationDecisionType | string | undefined;

  /**
   * <p>Additional details about the results of the evaluation decision. When there are both
   *          IAM policies and resource policies, this parameter explains how each set of policies
   *          contributes to the final evaluation decision. When simulating cross-account access to a
   *          resource, both the resource-based policy and the caller's IAM policy must grant access.
   *          See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_compare-resource-policies.html">How IAM Roles Differ from
   *             Resource-based Policies</a>
   *          </p>
   */
  EvalDecisionDetails?: {
    [key: string]: PolicyEvaluationDecisionType | string;
  };

  /**
   * <p>The ARN of the resource that the indicated API operation was tested on.</p>
   */
  EvalResourceName?: string;

  /**
   * <p>A list of the statements in the input policies that determine the result for this
   *          scenario. Remember that even if multiple statements allow the operation on the resource, if
   *          only one statement denies that operation, then the explicit deny overrides any allow. In
   *          addition, the deny statement is the only entry included in the result.</p>
   */
  MatchedStatements?: Statement[];

  /**
   * <p>A list of context keys that are required by the included input policies but that were
   *          not provided by one of the input parameters. This list is used when the resource in a
   *          simulation is "*", either explicitly, or when the <code>ResourceArns</code> parameter
   *          blank. If you include a list of resources, then any missing context values are instead
   *          included under the <code>ResourceSpecificResults</code> section. To discover the context
   *          keys used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: string[];

  /**
   * <p>A structure that details how Organizations and its service control policies affect the results of
   *          the simulation. Only applies if the simulated user's account is part of an
   *          organization.</p>
   */
  OrganizationsDecisionDetail?: OrganizationsDecisionDetail;

  /**
   * <p>The individual results of the simulation of the API operation specified in
   *          EvalActionName on each resource.</p>
   */
  ResourceSpecificResults?: ResourceSpecificResult[];
}

export namespace EvaluationResult {
  export const filterSensitiveLog = (obj: EvaluationResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is EvaluationResult =>
    __isa(o, "EvaluationResult");
}

/**
 * <p>Contains the response to a successful <a>GenerateCredentialReport</a>
 *       request. </p>
 */
export interface GenerateCredentialReportResponse {
  __type?: "GenerateCredentialReportResponse";
  /**
   * <p>Information about the credential report.</p>
   */
  Description?: string;

  /**
   * <p>Information about the state of the credential report.</p>
   */
  State?: ReportStateType | string;
}

export namespace GenerateCredentialReportResponse {
  export const filterSensitiveLog = (
    obj: GenerateCredentialReportResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GenerateCredentialReportResponse =>
    __isa(o, "GenerateCredentialReportResponse");
}

export interface GenerateOrganizationsAccessReportRequest {
  __type?: "GenerateOrganizationsAccessReportRequest";
  /**
   * <p>The path of the AWS Organizations entity (root, OU, or account). You can build an entity path using
   *          the known structure of your organization. For example, assume that your account ID is
   *             <code>123456789012</code> and its parent OU ID is <code>ou-rge0-awsabcde</code>. The
   *          organization root ID is <code>r-f6g7h8i9j0example</code> and your organization ID is
   *             <code>o-a1b2c3d4e5</code>. Your entity path is
   *             <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-rge0-awsabcde/123456789012</code>.</p>
   */
  EntityPath: string | undefined;

  /**
   * <p>The identifier of the AWS Organizations service control policy (SCP). This parameter is
   *          optional.</p>
   *          <p>This ID is used to generate information about when an account principal that is limited
   *          by the SCP attempted to access an AWS service.</p>
   */
  OrganizationsPolicyId?: string;
}

export namespace GenerateOrganizationsAccessReportRequest {
  export const filterSensitiveLog = (
    obj: GenerateOrganizationsAccessReportRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GenerateOrganizationsAccessReportRequest =>
    __isa(o, "GenerateOrganizationsAccessReportRequest");
}

export interface GenerateOrganizationsAccessReportResponse {
  __type?: "GenerateOrganizationsAccessReportResponse";
  /**
   * <p>The job identifier that you can use in the <a>GetOrganizationsAccessReport</a> operation.</p>
   */
  JobId?: string;
}

export namespace GenerateOrganizationsAccessReportResponse {
  export const filterSensitiveLog = (
    obj: GenerateOrganizationsAccessReportResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GenerateOrganizationsAccessReportResponse =>
    __isa(o, "GenerateOrganizationsAccessReportResponse");
}

export interface GenerateServiceLastAccessedDetailsRequest {
  __type?: "GenerateServiceLastAccessedDetailsRequest";
  /**
   * <p>The ARN of the IAM resource (user, group, role, or managed policy) used to generate
   *          information about when the resource was last used in an attempt to access an AWS
   *          service.</p>
   */
  Arn: string | undefined;
}

export namespace GenerateServiceLastAccessedDetailsRequest {
  export const filterSensitiveLog = (
    obj: GenerateServiceLastAccessedDetailsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GenerateServiceLastAccessedDetailsRequest =>
    __isa(o, "GenerateServiceLastAccessedDetailsRequest");
}

export interface GenerateServiceLastAccessedDetailsResponse {
  __type?: "GenerateServiceLastAccessedDetailsResponse";
  /**
   * <p>The job ID that you can use in the <a>GetServiceLastAccessedDetails</a> or
   *             <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
   */
  JobId?: string;
}

export namespace GenerateServiceLastAccessedDetailsResponse {
  export const filterSensitiveLog = (
    obj: GenerateServiceLastAccessedDetailsResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GenerateServiceLastAccessedDetailsResponse =>
    __isa(o, "GenerateServiceLastAccessedDetailsResponse");
}

export interface GetAccessKeyLastUsedRequest {
  __type?: "GetAccessKeyLastUsedRequest";
  /**
   * <p>The identifier of an access key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;
}

export namespace GetAccessKeyLastUsedRequest {
  export const filterSensitiveLog = (
    obj: GetAccessKeyLastUsedRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessKeyLastUsedRequest =>
    __isa(o, "GetAccessKeyLastUsedRequest");
}

/**
 * <p>Contains the response to a successful <a>GetAccessKeyLastUsed</a> request.
 *       It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned
 *       by the <a>ListAccessKeys</a> action.</p>
 */
export interface GetAccessKeyLastUsedResponse {
  __type?: "GetAccessKeyLastUsedResponse";
  /**
   * <p>Contains information about the last time the access key was used.</p>
   */
  AccessKeyLastUsed?: AccessKeyLastUsed;

  /**
   * <p>The name of the AWS IAM user that owns this access key.</p>
   *          <p></p>
   */
  UserName?: string;
}

export namespace GetAccessKeyLastUsedResponse {
  export const filterSensitiveLog = (
    obj: GetAccessKeyLastUsedResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccessKeyLastUsedResponse =>
    __isa(o, "GetAccessKeyLastUsedResponse");
}

export interface GetAccountAuthorizationDetailsRequest {
  __type?: "GetAccountAuthorizationDetailsRequest";
  /**
   * <p>A list of entity types used to filter the results. Only the entities that match the
   *          types you specify are included in the output. Use the value <code>LocalManagedPolicy</code>
   *          to include customer managed policies.</p>
   *          <p>The format for this parameter is a comma-separated (if more than one) list of strings.
   *          Each string value in the list must be one of the valid values listed below.</p>
   */
  Filter?: (EntityType | string)[];

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace GetAccountAuthorizationDetailsRequest {
  export const filterSensitiveLog = (
    obj: GetAccountAuthorizationDetailsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountAuthorizationDetailsRequest =>
    __isa(o, "GetAccountAuthorizationDetailsRequest");
}

/**
 * <p>Contains the response to a successful <a>GetAccountAuthorizationDetails</a>
 *       request. </p>
 */
export interface GetAccountAuthorizationDetailsResponse {
  __type?: "GetAccountAuthorizationDetailsResponse";
  /**
   * <p>A list containing information about IAM groups.</p>
   */
  GroupDetailList?: GroupDetail[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list containing information about managed policies.</p>
   */
  Policies?: ManagedPolicyDetail[];

  /**
   * <p>A list containing information about IAM roles.</p>
   */
  RoleDetailList?: RoleDetail[];

  /**
   * <p>A list containing information about IAM users.</p>
   */
  UserDetailList?: UserDetail[];
}

export namespace GetAccountAuthorizationDetailsResponse {
  export const filterSensitiveLog = (
    obj: GetAccountAuthorizationDetailsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountAuthorizationDetailsResponse =>
    __isa(o, "GetAccountAuthorizationDetailsResponse");
}

/**
 * <p>Contains the response to a successful <a>GetAccountPasswordPolicy</a>
 *       request. </p>
 */
export interface GetAccountPasswordPolicyResponse {
  __type?: "GetAccountPasswordPolicyResponse";
  /**
   * <p>A structure that contains details about the account's password policy.</p>
   */
  PasswordPolicy: PasswordPolicy | undefined;
}

export namespace GetAccountPasswordPolicyResponse {
  export const filterSensitiveLog = (
    obj: GetAccountPasswordPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountPasswordPolicyResponse =>
    __isa(o, "GetAccountPasswordPolicyResponse");
}

/**
 * <p>Contains the response to a successful <a>GetAccountSummary</a> request.
 *     </p>
 */
export interface GetAccountSummaryResponse {
  __type?: "GetAccountSummaryResponse";
  /**
   * <p>A set of key–value pairs containing information about IAM entity usage and
   *          IAM quotas.</p>
   */
  SummaryMap?: { [key: string]: number };
}

export namespace GetAccountSummaryResponse {
  export const filterSensitiveLog = (obj: GetAccountSummaryResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountSummaryResponse =>
    __isa(o, "GetAccountSummaryResponse");
}

export interface GetContextKeysForCustomPolicyRequest {
  __type?: "GetContextKeysForCustomPolicyRequest";
  /**
   * <p>A list of policies for which you want the list of context keys referenced in those
   *          policies. Each document is specified as a string containing the complete, valid JSON text
   *          of an IAM policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList: string[] | undefined;
}

export namespace GetContextKeysForCustomPolicyRequest {
  export const filterSensitiveLog = (
    obj: GetContextKeysForCustomPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContextKeysForCustomPolicyRequest =>
    __isa(o, "GetContextKeysForCustomPolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. </p>
 */
export interface GetContextKeysForPolicyResponse {
  __type?: "GetContextKeysForPolicyResponse";
  /**
   * <p>The list of context keys that are referenced in the input policies.</p>
   */
  ContextKeyNames?: string[];
}

export namespace GetContextKeysForPolicyResponse {
  export const filterSensitiveLog = (
    obj: GetContextKeysForPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContextKeysForPolicyResponse =>
    __isa(o, "GetContextKeysForPolicyResponse");
}

export interface GetContextKeysForPrincipalPolicyRequest {
  __type?: "GetContextKeysForPrincipalPolicyRequest";
  /**
   * <p>An optional list of additional policies for which you want the list of context keys that
   *          are referenced.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList?: string[];

  /**
   * <p>The ARN of a user, group, or role whose policies contain the context keys that you want
   *          listed. If you specify a user, the list includes context keys that are found in all
   *          policies that are attached to the user. The list also includes all groups that the user is
   *          a member of. If you pick a group or a role, then it includes only those context keys that
   *          are found in policies attached to that entity. Note that all parameters are shown in
   *          unencoded form here for clarity, but must be URL encoded to be included as a part of a real
   *          HTML request.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicySourceArn: string | undefined;
}

export namespace GetContextKeysForPrincipalPolicyRequest {
  export const filterSensitiveLog = (
    obj: GetContextKeysForPrincipalPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContextKeysForPrincipalPolicyRequest =>
    __isa(o, "GetContextKeysForPrincipalPolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>GetCredentialReport</a> request.
 *     </p>
 */
export interface GetCredentialReportResponse {
  __type?: "GetCredentialReportResponse";
  /**
   * <p>Contains the credential report. The report is Base64-encoded.</p>
   */
  Content?: Uint8Array;

  /**
   * <p> The date and time when the credential report was created, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>.</p>
   */
  GeneratedTime?: Date;

  /**
   * <p>The format (MIME type) of the credential report.</p>
   */
  ReportFormat?: ReportFormatType | string;
}

export namespace GetCredentialReportResponse {
  export const filterSensitiveLog = (
    obj: GetCredentialReportResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCredentialReportResponse =>
    __isa(o, "GetCredentialReportResponse");
}

export interface GetGroupPolicyRequest {
  __type?: "GetGroupPolicyRequest";
  /**
   * <p>The name of the group the policy is associated with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace GetGroupPolicyRequest {
  export const filterSensitiveLog = (obj: GetGroupPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupPolicyRequest =>
    __isa(o, "GetGroupPolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>GetGroupPolicy</a> request.
 *     </p>
 */
export interface GetGroupPolicyResponse {
  __type?: "GetGroupPolicyResponse";
  /**
   * <p>The group the policy is associated with.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using AWS
   *          CloudFormation templates can be formatted in YAML. AWS CloudFormation always converts a
   *          YAML policy to JSON format before submitting it to IAM.</p>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;
}

export namespace GetGroupPolicyResponse {
  export const filterSensitiveLog = (obj: GetGroupPolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupPolicyResponse =>
    __isa(o, "GetGroupPolicyResponse");
}

export interface GetGroupRequest {
  __type?: "GetGroupRequest";
  /**
   * <p>The name of the group.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace GetGroupRequest {
  export const filterSensitiveLog = (obj: GetGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupRequest =>
    __isa(o, "GetGroupRequest");
}

/**
 * <p>Contains the response to a successful <a>GetGroup</a> request. </p>
 */
export interface GetGroupResponse {
  __type?: "GetGroupResponse";
  /**
   * <p>A structure that contains details about the group.</p>
   */
  Group: Group | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of users in the group.</p>
   */
  Users: User[] | undefined;
}

export namespace GetGroupResponse {
  export const filterSensitiveLog = (obj: GetGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupResponse =>
    __isa(o, "GetGroupResponse");
}

export interface GetInstanceProfileRequest {
  __type?: "GetInstanceProfileRequest";
  /**
   * <p>The name of the instance profile to get information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;
}

export namespace GetInstanceProfileRequest {
  export const filterSensitiveLog = (obj: GetInstanceProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInstanceProfileRequest =>
    __isa(o, "GetInstanceProfileRequest");
}

/**
 * <p>Contains the response to a successful <a>GetInstanceProfile</a> request.
 *     </p>
 */
export interface GetInstanceProfileResponse {
  __type?: "GetInstanceProfileResponse";
  /**
   * <p>A structure containing details about the instance profile.</p>
   */
  InstanceProfile: InstanceProfile | undefined;
}

export namespace GetInstanceProfileResponse {
  export const filterSensitiveLog = (obj: GetInstanceProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInstanceProfileResponse =>
    __isa(o, "GetInstanceProfileResponse");
}

export interface GetLoginProfileRequest {
  __type?: "GetLoginProfileRequest";
  /**
   * <p>The name of the user whose login profile you want to retrieve.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace GetLoginProfileRequest {
  export const filterSensitiveLog = (obj: GetLoginProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLoginProfileRequest =>
    __isa(o, "GetLoginProfileRequest");
}

/**
 * <p>Contains the response to a successful <a>GetLoginProfile</a> request.
 *     </p>
 */
export interface GetLoginProfileResponse {
  __type?: "GetLoginProfileResponse";
  /**
   * <p>A structure containing the user name and password create date for the user.</p>
   */
  LoginProfile: LoginProfile | undefined;
}

export namespace GetLoginProfileResponse {
  export const filterSensitiveLog = (obj: GetLoginProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLoginProfileResponse =>
    __isa(o, "GetLoginProfileResponse");
}

export interface GetOpenIDConnectProviderRequest {
  __type?: "GetOpenIDConnectProviderRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the OIDC provider resource object in IAM to get
   *          information for. You can get a list of OIDC provider resource ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;
}

export namespace GetOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (
    obj: GetOpenIDConnectProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOpenIDConnectProviderRequest =>
    __isa(o, "GetOpenIDConnectProviderRequest");
}

/**
 * <p>Contains the response to a successful <a>GetOpenIDConnectProvider</a>
 *       request. </p>
 */
export interface GetOpenIDConnectProviderResponse {
  __type?: "GetOpenIDConnectProviderResponse";
  /**
   * <p>A list of client IDs (also known as audiences) that are associated with the specified
   *          IAM OIDC provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  ClientIDList?: string[];

  /**
   * <p>The date and time when the IAM OIDC provider resource object was created in the AWS
   *          account.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OIDC
   *          provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>. </p>
   */
  ThumbprintList?: string[];

  /**
   * <p>The URL that the IAM OIDC provider resource object is associated with. For more
   *          information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  Url?: string;
}

export namespace GetOpenIDConnectProviderResponse {
  export const filterSensitiveLog = (
    obj: GetOpenIDConnectProviderResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOpenIDConnectProviderResponse =>
    __isa(o, "GetOpenIDConnectProviderResponse");
}

export interface GetOrganizationsAccessReportRequest {
  __type?: "GetOrganizationsAccessReportRequest";
  /**
   * <p>The identifier of the request generated by the <a>GenerateOrganizationsAccessReport</a> operation.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The key that is used to sort the results. If you choose the namespace key, the results
   *          are returned in alphabetical order. If you choose the time key, the results are sorted
   *          numerically by the date and time.</p>
   */
  SortKey?: SortKeyType | string;
}

export namespace GetOrganizationsAccessReportRequest {
  export const filterSensitiveLog = (
    obj: GetOrganizationsAccessReportRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOrganizationsAccessReportRequest =>
    __isa(o, "GetOrganizationsAccessReportRequest");
}

export interface GetOrganizationsAccessReportResponse {
  __type?: "GetOrganizationsAccessReportResponse";
  /**
   * <p>An object that contains details about the most recent attempt to access the
   *          service.</p>
   */
  AccessDetails?: AccessDetail[];

  /**
   * <p>Contains information about the reason that the operation failed.</p>
   *          <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
   */
  ErrorDetails?: ErrorDetails;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *          of <code>IN_PROGRESS</code>.</p>
   */
  JobCompletionDate?: Date;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the report job was created.</p>
   */
  JobCreationDate: Date | undefined;

  /**
   * <p>The status of the job.</p>
   */
  JobStatus: JobStatusType | string | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>The number of services that the applicable SCPs allow account principals to
   *          access.</p>
   */
  NumberOfServicesAccessible?: number;

  /**
   * <p>The number of services that account principals are allowed but did not attempt to
   *          access.</p>
   */
  NumberOfServicesNotAccessed?: number;
}

export namespace GetOrganizationsAccessReportResponse {
  export const filterSensitiveLog = (
    obj: GetOrganizationsAccessReportResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOrganizationsAccessReportResponse =>
    __isa(o, "GetOrganizationsAccessReportResponse");
}

export interface GetPolicyRequest {
  __type?: "GetPolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the managed policy that you want information
   *          about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyRequest =>
    __isa(o, "GetPolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>GetPolicy</a> request. </p>
 */
export interface GetPolicyResponse {
  __type?: "GetPolicyResponse";
  /**
   * <p>A structure containing details about the policy.</p>
   */
  Policy?: Policy;
}

export namespace GetPolicyResponse {
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyResponse =>
    __isa(o, "GetPolicyResponse");
}

export interface GetPolicyVersionRequest {
  __type?: "GetPolicyVersionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the managed policy that you want information
   *          about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>Identifies the policy version to retrieve.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that
   *     consists of the lowercase letter 'v' followed by one or two digits, and optionally
   *     followed by a period '.' and a string of letters and digits.</p>
   */
  VersionId: string | undefined;
}

export namespace GetPolicyVersionRequest {
  export const filterSensitiveLog = (obj: GetPolicyVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyVersionRequest =>
    __isa(o, "GetPolicyVersionRequest");
}

/**
 * <p>Contains the response to a successful <a>GetPolicyVersion</a> request.
 *     </p>
 */
export interface GetPolicyVersionResponse {
  __type?: "GetPolicyVersionResponse";
  /**
   * <p>A structure containing details about the policy version.</p>
   */
  PolicyVersion?: PolicyVersion;
}

export namespace GetPolicyVersionResponse {
  export const filterSensitiveLog = (obj: GetPolicyVersionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyVersionResponse =>
    __isa(o, "GetPolicyVersionResponse");
}

export interface GetRolePolicyRequest {
  __type?: "GetRolePolicyRequest";
  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name of the role associated with the policy.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace GetRolePolicyRequest {
  export const filterSensitiveLog = (obj: GetRolePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRolePolicyRequest =>
    __isa(o, "GetRolePolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>GetRolePolicy</a> request.
 *     </p>
 */
export interface GetRolePolicyResponse {
  __type?: "GetRolePolicyResponse";
  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using AWS
   *          CloudFormation templates can be formatted in YAML. AWS CloudFormation always converts a
   *          YAML policy to JSON format before submitting it to IAM.</p>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The role the policy is associated with.</p>
   */
  RoleName: string | undefined;
}

export namespace GetRolePolicyResponse {
  export const filterSensitiveLog = (obj: GetRolePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRolePolicyResponse =>
    __isa(o, "GetRolePolicyResponse");
}

export interface GetRoleRequest {
  __type?: "GetRoleRequest";
  /**
   * <p>The name of the IAM role to get information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace GetRoleRequest {
  export const filterSensitiveLog = (obj: GetRoleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRoleRequest =>
    __isa(o, "GetRoleRequest");
}

/**
 * <p>Contains the response to a successful <a>GetRole</a> request. </p>
 */
export interface GetRoleResponse {
  __type?: "GetRoleResponse";
  /**
   * <p>A structure containing details about the IAM role.</p>
   */
  Role: Role | undefined;
}

export namespace GetRoleResponse {
  export const filterSensitiveLog = (obj: GetRoleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRoleResponse =>
    __isa(o, "GetRoleResponse");
}

export interface GetSAMLProviderRequest {
  __type?: "GetSAMLProviderRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to get
   *          information about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace GetSAMLProviderRequest {
  export const filterSensitiveLog = (obj: GetSAMLProviderRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSAMLProviderRequest =>
    __isa(o, "GetSAMLProviderRequest");
}

/**
 * <p>Contains the response to a successful <a>GetSAMLProvider</a> request.
 *     </p>
 */
export interface GetSAMLProviderResponse {
  __type?: "GetSAMLProviderResponse";
  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The XML metadata document that includes information about an identity provider.</p>
   */
  SAMLMetadataDocument?: string;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;
}

export namespace GetSAMLProviderResponse {
  export const filterSensitiveLog = (obj: GetSAMLProviderResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSAMLProviderResponse =>
    __isa(o, "GetSAMLProviderResponse");
}

export interface GetServerCertificateRequest {
  __type?: "GetServerCertificateRequest";
  /**
   * <p>The name of the server certificate you want to retrieve information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;
}

export namespace GetServerCertificateRequest {
  export const filterSensitiveLog = (
    obj: GetServerCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServerCertificateRequest =>
    __isa(o, "GetServerCertificateRequest");
}

/**
 * <p>Contains the response to a successful <a>GetServerCertificate</a> request.
 *     </p>
 */
export interface GetServerCertificateResponse {
  __type?: "GetServerCertificateResponse";
  /**
   * <p>A structure containing details about the server certificate.</p>
   */
  ServerCertificate: ServerCertificate | undefined;
}

export namespace GetServerCertificateResponse {
  export const filterSensitiveLog = (
    obj: GetServerCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServerCertificateResponse =>
    __isa(o, "GetServerCertificateResponse");
}

export interface GetServiceLastAccessedDetailsRequest {
  __type?: "GetServiceLastAccessedDetailsRequest";
  /**
   * <p>The ID of the request generated by the <a>GenerateServiceLastAccessedDetails</a> operation.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace GetServiceLastAccessedDetailsRequest {
  export const filterSensitiveLog = (
    obj: GetServiceLastAccessedDetailsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceLastAccessedDetailsRequest =>
    __isa(o, "GetServiceLastAccessedDetailsRequest");
}

export interface GetServiceLastAccessedDetailsResponse {
  __type?: "GetServiceLastAccessedDetailsResponse";
  /**
   * <p>An object that contains details about the reason the operation failed.</p>
   */
  Error?: ErrorDetails;

  /**
   * <p></p>
   *          <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *          of <code>IN_PROGRESS</code>.</p>
   */
  JobCompletionDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the report job was created.</p>
   */
  JobCreationDate: Date | undefined;

  /**
   * <p>The status of the job.</p>
   */
  JobStatus: JobStatusType | string | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p> A <code>ServiceLastAccessed</code> object that contains details about the most recent
   *          attempt to access the service.</p>
   */
  ServicesLastAccessed: ServiceLastAccessed[] | undefined;
}

export namespace GetServiceLastAccessedDetailsResponse {
  export const filterSensitiveLog = (
    obj: GetServiceLastAccessedDetailsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceLastAccessedDetailsResponse =>
    __isa(o, "GetServiceLastAccessedDetailsResponse");
}

export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  __type?: "GetServiceLastAccessedDetailsWithEntitiesRequest";
  /**
   * <p>The ID of the request generated by the <code>GenerateServiceLastAccessedDetails</code>
   *          operation.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The service namespace for an AWS service. Provide the service namespace to learn when
   *          the IAM entity last attempted to access the specified service.</p>
   *          <p>To learn the service namespace for a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string | undefined;
}

export namespace GetServiceLastAccessedDetailsWithEntitiesRequest {
  export const filterSensitiveLog = (
    obj: GetServiceLastAccessedDetailsWithEntitiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetServiceLastAccessedDetailsWithEntitiesRequest =>
    __isa(o, "GetServiceLastAccessedDetailsWithEntitiesRequest");
}

export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  __type?: "GetServiceLastAccessedDetailsWithEntitiesResponse";
  /**
   * <p>An <code>EntityDetailsList</code> object that contains details about when an IAM
   *          entity (user or role) used group or policy permissions in an attempt to access the
   *          specified AWS service.</p>
   */
  EntityDetailsList: EntityDetails[] | undefined;

  /**
   * <p>An object that contains details about the reason the operation failed.</p>
   */
  Error?: ErrorDetails;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *          of <code>IN_PROGRESS</code>.</p>
   */
  JobCompletionDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the report job was created.</p>
   */
  JobCreationDate: Date | undefined;

  /**
   * <p>The status of the job.</p>
   */
  JobStatus: JobStatusType | string | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace GetServiceLastAccessedDetailsWithEntitiesResponse {
  export const filterSensitiveLog = (
    obj: GetServiceLastAccessedDetailsWithEntitiesResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetServiceLastAccessedDetailsWithEntitiesResponse =>
    __isa(o, "GetServiceLastAccessedDetailsWithEntitiesResponse");
}

export interface GetServiceLinkedRoleDeletionStatusRequest {
  __type?: "GetServiceLinkedRoleDeletionStatusRequest";
  /**
   * <p>The deletion task identifier. This identifier is returned by the <a>DeleteServiceLinkedRole</a> operation in the format
   *             <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
   */
  DeletionTaskId: string | undefined;
}

export namespace GetServiceLinkedRoleDeletionStatusRequest {
  export const filterSensitiveLog = (
    obj: GetServiceLinkedRoleDeletionStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceLinkedRoleDeletionStatusRequest =>
    __isa(o, "GetServiceLinkedRoleDeletionStatusRequest");
}

export interface GetServiceLinkedRoleDeletionStatusResponse {
  __type?: "GetServiceLinkedRoleDeletionStatusResponse";
  /**
   * <p>An object that contains details about the reason the deletion failed.</p>
   */
  Reason?: DeletionTaskFailureReasonType;

  /**
   * <p>The status of the deletion.</p>
   */
  Status: DeletionTaskStatusType | string | undefined;
}

export namespace GetServiceLinkedRoleDeletionStatusResponse {
  export const filterSensitiveLog = (
    obj: GetServiceLinkedRoleDeletionStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetServiceLinkedRoleDeletionStatusResponse =>
    __isa(o, "GetServiceLinkedRoleDeletionStatusResponse");
}

export interface GetSSHPublicKeyRequest {
  __type?: "GetSSHPublicKeyRequest";
  /**
   * <p>Specifies the public key encoding format to use in the response. To retrieve the public
   *          key in ssh-rsa format, use <code>SSH</code>. To retrieve the public key in PEM format, use
   *             <code>PEM</code>.</p>
   */
  Encoding: EncodingType | string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace GetSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: GetSSHPublicKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSSHPublicKeyRequest =>
    __isa(o, "GetSSHPublicKeyRequest");
}

/**
 * <p>Contains the response to a successful <a>GetSSHPublicKey</a>
 *       request.</p>
 */
export interface GetSSHPublicKeyResponse {
  __type?: "GetSSHPublicKeyResponse";
  /**
   * <p>A structure containing details about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

export namespace GetSSHPublicKeyResponse {
  export const filterSensitiveLog = (obj: GetSSHPublicKeyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSSHPublicKeyResponse =>
    __isa(o, "GetSSHPublicKeyResponse");
}

export interface GetUserPolicyRequest {
  __type?: "GetUserPolicyRequest";
  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name of the user who the policy is associated with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace GetUserPolicyRequest {
  export const filterSensitiveLog = (obj: GetUserPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserPolicyRequest =>
    __isa(o, "GetUserPolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>GetUserPolicy</a> request.
 *     </p>
 */
export interface GetUserPolicyResponse {
  __type?: "GetUserPolicyResponse";
  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using AWS
   *          CloudFormation templates can be formatted in YAML. AWS CloudFormation always converts a
   *          YAML policy to JSON format before submitting it to IAM.</p>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The user the policy is associated with.</p>
   */
  UserName: string | undefined;
}

export namespace GetUserPolicyResponse {
  export const filterSensitiveLog = (obj: GetUserPolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserPolicyResponse =>
    __isa(o, "GetUserPolicyResponse");
}

export interface GetUserRequest {
  __type?: "GetUserRequest";
  /**
   * <p>The name of the user to get information about.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to the user making the
   *          request. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace GetUserRequest {
  export const filterSensitiveLog = (obj: GetUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserRequest =>
    __isa(o, "GetUserRequest");
}

/**
 * <p>Contains the response to a successful <a>GetUser</a> request. </p>
 */
export interface GetUserResponse {
  __type?: "GetUserResponse";
  /**
   * <p>A structure containing details about the IAM user.</p>
   *          <important>
   *             <p>Due to a service issue, password last used data does not include password use from
   *             May 3, 2018 22:50 PDT to May 23, 2018 14:08 PDT. This affects <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html">last
   *                sign-in</a> dates shown in the IAM console and password last used dates in the
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">IAM credential report</a>, and returned by this GetUser API. If users signed in
   *             during the affected time, the password last used date that is returned is the date the
   *             user last signed in before May 3, 2018. For users that signed in after May 23, 2018
   *             14:08 PDT, the returned password last used date is accurate.</p>
   *             <p>You can use password last used information to identify unused credentials for
   *             deletion. For example, you might delete users who did not sign in to AWS in the last 90
   *             days. In cases like this, we recommend that you adjust your evaluation window to include
   *             dates after May 23, 2018. Alternatively, if your users use access keys to access AWS
   *             programmatically you can refer to access key last used information because it is
   *             accurate for all dates. </p>
   *          </important>
   */
  User: User | undefined;
}

export namespace GetUserResponse {
  export const filterSensitiveLog = (obj: GetUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserResponse =>
    __isa(o, "GetUserResponse");
}

export enum GlobalEndpointTokenVersion {
  v1Token = "v1Token",
  v2Token = "v2Token"
}

/**
 * <p>Contains information about an IAM group entity.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGroups</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Group {
  __type?: "Group";
  /**
   * <p> The Amazon Resource Name (ARN) specifying the group. For more information about ARNs
   *          and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the group was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p> The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  GroupId: string | undefined;

  /**
   * <p>The friendly name that identifies the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj
  });
  export const isa = (o: any): o is Group => __isa(o, "Group");
}

/**
 * <p>Contains information about an IAM group, including all of the group's policies.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface GroupDetail {
  __type?: "GroupDetail";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>A list of the managed policies attached to the group.</p>
   */
  AttachedManagedPolicies?: AttachedPolicy[];

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the group was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  GroupId?: string;

  /**
   * <p>The friendly name that identifies the group.</p>
   */
  GroupName?: string;

  /**
   * <p>A list of the inline policies embedded in the group.</p>
   */
  GroupPolicyList?: PolicyDetail[];

  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;
}

export namespace GroupDetail {
  export const filterSensitiveLog = (obj: GroupDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is GroupDetail => __isa(o, "GroupDetail");
}

/**
 * <p>Contains information about an instance profile.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateInstanceProfile</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetInstanceProfile</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListInstanceProfiles</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListInstanceProfilesForRole</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface InstanceProfile {
  __type?: "InstanceProfile";
  /**
   * <p> The Amazon Resource Name (ARN) specifying the instance profile. For more information
   *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date when the instance profile was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p> The stable and unique string identifying the instance profile. For more information
   *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  InstanceProfileId: string | undefined;

  /**
   * <p>The name identifying the instance profile.</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p>The role associated with the instance profile.</p>
   */
  Roles: Role[] | undefined;
}

export namespace InstanceProfile {
  export const filterSensitiveLog = (obj: InstanceProfile): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceProfile =>
    __isa(o, "InstanceProfile");
}

/**
 * <p>The request was rejected because the authentication code was not recognized. The error
 *       message describes the specific error.</p>
 */
export interface InvalidAuthenticationCodeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAuthenticationCodeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAuthenticationCodeException {
  export const filterSensitiveLog = (
    obj: InvalidAuthenticationCodeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAuthenticationCodeException =>
    __isa(o, "InvalidAuthenticationCodeException");
}

/**
 * <p>The request was rejected because the certificate is invalid.</p>
 */
export interface InvalidCertificateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCertificateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidCertificateException {
  export const filterSensitiveLog = (
    obj: InvalidCertificateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCertificateException =>
    __isa(o, "InvalidCertificateException");
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInputException =>
    __isa(o, "InvalidInputException");
}

/**
 * <p>The request was rejected because the public key is malformed or otherwise
 *       invalid.</p>
 */
export interface InvalidPublicKeyException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPublicKeyException {
  export const filterSensitiveLog = (obj: InvalidPublicKeyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPublicKeyException =>
    __isa(o, "InvalidPublicKeyException");
}

/**
 * <p>The request was rejected because the type of user for the transaction was
 *       incorrect.</p>
 */
export interface InvalidUserTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidUserTypeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidUserTypeException {
  export const filterSensitiveLog = (obj: InvalidUserTypeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidUserTypeException =>
    __isa(o, "InvalidUserTypeException");
}

export type JobStatusType = "COMPLETED" | "FAILED" | "IN_PROGRESS";

/**
 * <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 */
export interface KeyPairMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "KeyPairMismatchException";
  $fault: "client";
  message?: string;
}

export namespace KeyPairMismatchException {
  export const filterSensitiveLog = (obj: KeyPairMismatchException): any => ({
    ...obj
  });
  export const isa = (o: any): o is KeyPairMismatchException =>
    __isa(o, "KeyPairMismatchException");
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       AWS account limits. The error message describes the limit exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListAccessKeysRequest {
  __type?: "ListAccessKeysRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the user.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace ListAccessKeysRequest {
  export const filterSensitiveLog = (obj: ListAccessKeysRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccessKeysRequest =>
    __isa(o, "ListAccessKeysRequest");
}

/**
 * <p>Contains the response to a successful <a>ListAccessKeys</a> request.
 *     </p>
 */
export interface ListAccessKeysResponse {
  __type?: "ListAccessKeysResponse";
  /**
   * <p>A list of objects containing metadata about the access keys.</p>
   */
  AccessKeyMetadata: AccessKeyMetadata[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAccessKeysResponse {
  export const filterSensitiveLog = (obj: ListAccessKeysResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccessKeysResponse =>
    __isa(o, "ListAccessKeysResponse");
}

export interface ListAccountAliasesRequest {
  __type?: "ListAccountAliasesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListAccountAliasesRequest {
  export const filterSensitiveLog = (obj: ListAccountAliasesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccountAliasesRequest =>
    __isa(o, "ListAccountAliasesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListAccountAliases</a> request.
 *     </p>
 */
export interface ListAccountAliasesResponse {
  __type?: "ListAccountAliasesResponse";
  /**
   * <p>A list of aliases associated with the account. AWS supports only one alias per
   *          account.</p>
   */
  AccountAliases: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAccountAliasesResponse {
  export const filterSensitiveLog = (obj: ListAccountAliasesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccountAliasesResponse =>
    __isa(o, "ListAccountAliasesResponse");
}

export interface ListAttachedGroupPoliciesRequest {
  __type?: "ListAttachedGroupPoliciesRequest";
  /**
   * <p>The name (friendly name, not ARN) of the group to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;
}

export namespace ListAttachedGroupPoliciesRequest {
  export const filterSensitiveLog = (
    obj: ListAttachedGroupPoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedGroupPoliciesRequest =>
    __isa(o, "ListAttachedGroupPoliciesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListAttachedGroupPolicies</a>
 *       request. </p>
 */
export interface ListAttachedGroupPoliciesResponse {
  __type?: "ListAttachedGroupPoliciesResponse";
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: AttachedPolicy[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAttachedGroupPoliciesResponse {
  export const filterSensitiveLog = (
    obj: ListAttachedGroupPoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedGroupPoliciesResponse =>
    __isa(o, "ListAttachedGroupPoliciesResponse");
}

export interface ListAttachedRolePoliciesRequest {
  __type?: "ListAttachedRolePoliciesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>The name (friendly name, not ARN) of the role to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace ListAttachedRolePoliciesRequest {
  export const filterSensitiveLog = (
    obj: ListAttachedRolePoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedRolePoliciesRequest =>
    __isa(o, "ListAttachedRolePoliciesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListAttachedRolePolicies</a>
 *       request. </p>
 */
export interface ListAttachedRolePoliciesResponse {
  __type?: "ListAttachedRolePoliciesResponse";
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: AttachedPolicy[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAttachedRolePoliciesResponse {
  export const filterSensitiveLog = (
    obj: ListAttachedRolePoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedRolePoliciesResponse =>
    __isa(o, "ListAttachedRolePoliciesResponse");
}

export interface ListAttachedUserPoliciesRequest {
  __type?: "ListAttachedUserPoliciesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>The name (friendly name, not ARN) of the user to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace ListAttachedUserPoliciesRequest {
  export const filterSensitiveLog = (
    obj: ListAttachedUserPoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedUserPoliciesRequest =>
    __isa(o, "ListAttachedUserPoliciesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListAttachedUserPolicies</a>
 *       request. </p>
 */
export interface ListAttachedUserPoliciesResponse {
  __type?: "ListAttachedUserPoliciesResponse";
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: AttachedPolicy[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAttachedUserPoliciesResponse {
  export const filterSensitiveLog = (
    obj: ListAttachedUserPoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedUserPoliciesResponse =>
    __isa(o, "ListAttachedUserPoliciesResponse");
}

export interface ListEntitiesForPolicyRequest {
  __type?: "ListEntitiesForPolicyRequest";
  /**
   * <p>The entity type to use for filtering the results.</p>
   *          <p>For example, when <code>EntityFilter</code> is <code>Role</code>, only the roles that
   *          are attached to the specified policy are returned. This parameter is optional. If it is not
   *          included, all attached entities (users, groups, and roles) are returned. The argument for
   *          this parameter must be one of the valid values listed below.</p>
   */
  EntityFilter?: EntityType | string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all entities.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the
   *          versions.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The policy usage method to use for filtering the results.</p>
   *          <p>To list only permissions policies,
   *             set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only the
   *          policies used to set permissions boundaries, set the value
   *             to <code>PermissionsBoundary</code>.</p>
   *          <p>This parameter is optional. If it is not included, all policies are returned. </p>
   */
  PolicyUsageFilter?: PolicyUsageType | string;
}

export namespace ListEntitiesForPolicyRequest {
  export const filterSensitiveLog = (
    obj: ListEntitiesForPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEntitiesForPolicyRequest =>
    __isa(o, "ListEntitiesForPolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>ListEntitiesForPolicy</a> request.
 *     </p>
 */
export interface ListEntitiesForPolicyResponse {
  __type?: "ListEntitiesForPolicyResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of IAM groups that the policy is attached to.</p>
   */
  PolicyGroups?: PolicyGroup[];

  /**
   * <p>A list of IAM roles that the policy is attached to.</p>
   */
  PolicyRoles?: PolicyRole[];

  /**
   * <p>A list of IAM users that the policy is attached to.</p>
   */
  PolicyUsers?: PolicyUser[];
}

export namespace ListEntitiesForPolicyResponse {
  export const filterSensitiveLog = (
    obj: ListEntitiesForPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEntitiesForPolicyResponse =>
    __isa(o, "ListEntitiesForPolicyResponse");
}

export interface ListGroupPoliciesRequest {
  __type?: "ListGroupPoliciesRequest";
  /**
   * <p>The name of the group to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListGroupPoliciesRequest {
  export const filterSensitiveLog = (obj: ListGroupPoliciesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupPoliciesRequest =>
    __isa(o, "ListGroupPoliciesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListGroupPolicies</a> request.
 *     </p>
 */
export interface ListGroupPoliciesResponse {
  __type?: "ListGroupPoliciesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of policy names.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyNames: string[] | undefined;
}

export namespace ListGroupPoliciesResponse {
  export const filterSensitiveLog = (obj: ListGroupPoliciesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupPoliciesResponse =>
    __isa(o, "ListGroupPoliciesResponse");
}

export interface ListGroupsForUserRequest {
  __type?: "ListGroupsForUserRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the user to list groups for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace ListGroupsForUserRequest {
  export const filterSensitiveLog = (obj: ListGroupsForUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupsForUserRequest =>
    __isa(o, "ListGroupsForUserRequest");
}

/**
 * <p>Contains the response to a successful <a>ListGroupsForUser</a> request.
 *     </p>
 */
export interface ListGroupsForUserResponse {
  __type?: "ListGroupsForUserResponse";
  /**
   * <p>A list of groups.</p>
   */
  Groups: Group[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListGroupsForUserResponse {
  export const filterSensitiveLog = (obj: ListGroupsForUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupsForUserResponse =>
    __isa(o, "ListGroupsForUserResponse");
}

export interface ListGroupsRequest {
  __type?: "ListGroupsRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *             <code>/division_abc/subdivision_xyz/</code> gets all groups whose path starts with
   *             <code>/division_abc/subdivision_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all groups. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;
}

export namespace ListGroupsRequest {
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupsRequest =>
    __isa(o, "ListGroupsRequest");
}

/**
 * <p>Contains the response to a successful <a>ListGroups</a> request. </p>
 */
export interface ListGroupsResponse {
  __type?: "ListGroupsResponse";
  /**
   * <p>A list of groups.</p>
   */
  Groups: Group[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListGroupsResponse {
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGroupsResponse =>
    __isa(o, "ListGroupsResponse");
}

export interface ListInstanceProfilesForRoleRequest {
  __type?: "ListInstanceProfilesForRoleRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the role to list instance profiles for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace ListInstanceProfilesForRoleRequest {
  export const filterSensitiveLog = (
    obj: ListInstanceProfilesForRoleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInstanceProfilesForRoleRequest =>
    __isa(o, "ListInstanceProfilesForRoleRequest");
}

/**
 * <p>Contains the response to a successful <a>ListInstanceProfilesForRole</a>
 *       request. </p>
 */
export interface ListInstanceProfilesForRoleResponse {
  __type?: "ListInstanceProfilesForRoleResponse";
  /**
   * <p>A list of instance profiles.</p>
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListInstanceProfilesForRoleResponse {
  export const filterSensitiveLog = (
    obj: ListInstanceProfilesForRoleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInstanceProfilesForRoleResponse =>
    __isa(o, "ListInstanceProfilesForRoleResponse");
}

export interface ListInstanceProfilesRequest {
  __type?: "ListInstanceProfilesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *             <code>/application_abc/component_xyz/</code> gets all instance profiles whose path
   *          starts with <code>/application_abc/component_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all instance profiles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;
}

export namespace ListInstanceProfilesRequest {
  export const filterSensitiveLog = (
    obj: ListInstanceProfilesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInstanceProfilesRequest =>
    __isa(o, "ListInstanceProfilesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListInstanceProfiles</a> request.
 *     </p>
 */
export interface ListInstanceProfilesResponse {
  __type?: "ListInstanceProfilesResponse";
  /**
   * <p>A list of instance profiles.</p>
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListInstanceProfilesResponse {
  export const filterSensitiveLog = (
    obj: ListInstanceProfilesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInstanceProfilesResponse =>
    __isa(o, "ListInstanceProfilesResponse");
}

export interface ListMFADevicesRequest {
  __type?: "ListMFADevicesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the user whose MFA devices you want to list.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace ListMFADevicesRequest {
  export const filterSensitiveLog = (obj: ListMFADevicesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMFADevicesRequest =>
    __isa(o, "ListMFADevicesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListMFADevices</a> request.
 *     </p>
 */
export interface ListMFADevicesResponse {
  __type?: "ListMFADevicesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>A list of MFA devices.</p>
   */
  MFADevices: MFADevice[] | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListMFADevicesResponse {
  export const filterSensitiveLog = (obj: ListMFADevicesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMFADevicesResponse =>
    __isa(o, "ListMFADevicesResponse");
}

export interface ListOpenIDConnectProvidersRequest {
  __type?: "ListOpenIDConnectProvidersRequest";
}

export namespace ListOpenIDConnectProvidersRequest {
  export const filterSensitiveLog = (
    obj: ListOpenIDConnectProvidersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOpenIDConnectProvidersRequest =>
    __isa(o, "ListOpenIDConnectProvidersRequest");
}

/**
 * <p>Contains the response to a successful <a>ListOpenIDConnectProviders</a>
 *       request. </p>
 */
export interface ListOpenIDConnectProvidersResponse {
  __type?: "ListOpenIDConnectProvidersResponse";
  /**
   * <p>The list of IAM OIDC provider resource objects defined in the AWS account.</p>
   */
  OpenIDConnectProviderList?: OpenIDConnectProviderListEntry[];
}

export namespace ListOpenIDConnectProvidersResponse {
  export const filterSensitiveLog = (
    obj: ListOpenIDConnectProvidersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOpenIDConnectProvidersResponse =>
    __isa(o, "ListOpenIDConnectProvidersResponse");
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
 */
export interface ListPoliciesGrantingServiceAccessEntry {
  __type?: "ListPoliciesGrantingServiceAccessEntry";
  /**
   * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the
   *          policy.</p>
   */
  Policies?: PolicyGrantingServiceAccess[];

  /**
   * <p>The namespace of the service that was accessed.</p>
   *          <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace?: string;
}

export namespace ListPoliciesGrantingServiceAccessEntry {
  export const filterSensitiveLog = (
    obj: ListPoliciesGrantingServiceAccessEntry
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesGrantingServiceAccessEntry =>
    __isa(o, "ListPoliciesGrantingServiceAccessEntry");
}

export interface ListPoliciesGrantingServiceAccessRequest {
  __type?: "ListPoliciesGrantingServiceAccessRequest";
  /**
   * <p>The ARN of the IAM identity (user, group, or role) whose policies you want to
   *          list.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>The service namespace for the AWS services whose policies you want to list.</p>
   *          <p>To learn the service namespace for a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespaces: string[] | undefined;
}

export namespace ListPoliciesGrantingServiceAccessRequest {
  export const filterSensitiveLog = (
    obj: ListPoliciesGrantingServiceAccessRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesGrantingServiceAccessRequest =>
    __isa(o, "ListPoliciesGrantingServiceAccessRequest");
}

export interface ListPoliciesGrantingServiceAccessResponse {
  __type?: "ListPoliciesGrantingServiceAccessResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your results were
   *          truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *          request parameter to retrieve more items. We recommend that you check
   *             <code>IsTruncated</code> after every call to ensure that you receive all your
   *          results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A <code>ListPoliciesGrantingServiceAccess</code> object that contains details about the
   *          permissions policies attached to the specified identity (user, group, or role).</p>
   */
  PoliciesGrantingServiceAccess:
    | ListPoliciesGrantingServiceAccessEntry[]
    | undefined;
}

export namespace ListPoliciesGrantingServiceAccessResponse {
  export const filterSensitiveLog = (
    obj: ListPoliciesGrantingServiceAccessResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesGrantingServiceAccessResponse =>
    __isa(o, "ListPoliciesGrantingServiceAccessResponse");
}

export interface ListPoliciesRequest {
  __type?: "ListPoliciesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>A flag to filter the results to only the attached policies.</p>
   *          <p>When <code>OnlyAttached</code> is <code>true</code>, the returned list contains only the
   *          policies that are attached to an IAM user, group, or role. When <code>OnlyAttached</code>
   *          is <code>false</code>, or when the parameter is not included, all policies are
   *          returned.</p>
   */
  OnlyAttached?: boolean;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>The policy usage method to use for filtering the results.</p>
   *          <p>To list only permissions policies,
   *             set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only the
   *          policies used to set permissions boundaries, set the value
   *             to <code>PermissionsBoundary</code>.</p>
   *          <p>This parameter is optional. If it is not included, all policies are returned. </p>
   */
  PolicyUsageFilter?: PolicyUsageType | string;

  /**
   * <p>The scope to use for filtering the results.</p>
   *          <p>To list only AWS managed policies, set <code>Scope</code> to <code>AWS</code>. To list
   *          only the customer managed policies in your AWS account, set <code>Scope</code> to
   *             <code>Local</code>.</p>
   *          <p>This parameter is optional. If it is not included, or if it is set to <code>All</code>,
   *          all policies are returned.</p>
   */
  Scope?: PolicyScopeType | string;
}

export namespace ListPoliciesRequest {
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesRequest =>
    __isa(o, "ListPoliciesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListPolicies</a> request.
 *     </p>
 */
export interface ListPoliciesResponse {
  __type?: "ListPoliciesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of policies.</p>
   */
  Policies?: Policy[];
}

export namespace ListPoliciesResponse {
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesResponse =>
    __isa(o, "ListPoliciesResponse");
}

export interface ListPolicyVersionsRequest {
  __type?: "ListPolicyVersionsRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the
   *          versions.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace ListPolicyVersionsRequest {
  export const filterSensitiveLog = (obj: ListPolicyVersionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPolicyVersionsRequest =>
    __isa(o, "ListPolicyVersionsRequest");
}

/**
 * <p>Contains the response to a successful <a>ListPolicyVersions</a> request.
 *     </p>
 */
export interface ListPolicyVersionsResponse {
  __type?: "ListPolicyVersionsResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of policy versions.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  Versions?: PolicyVersion[];
}

export namespace ListPolicyVersionsResponse {
  export const filterSensitiveLog = (obj: ListPolicyVersionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPolicyVersionsResponse =>
    __isa(o, "ListPolicyVersionsResponse");
}

export interface ListRolePoliciesRequest {
  __type?: "ListRolePoliciesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the role to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace ListRolePoliciesRequest {
  export const filterSensitiveLog = (obj: ListRolePoliciesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRolePoliciesRequest =>
    __isa(o, "ListRolePoliciesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListRolePolicies</a> request.
 *     </p>
 */
export interface ListRolePoliciesResponse {
  __type?: "ListRolePoliciesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of policy names.</p>
   */
  PolicyNames: string[] | undefined;
}

export namespace ListRolePoliciesResponse {
  export const filterSensitiveLog = (obj: ListRolePoliciesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRolePoliciesResponse =>
    __isa(o, "ListRolePoliciesResponse");
}

export interface ListRolesRequest {
  __type?: "ListRolesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *             <code>/application_abc/component_xyz/</code> gets all roles whose path starts with
   *             <code>/application_abc/component_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all roles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;
}

export namespace ListRolesRequest {
  export const filterSensitiveLog = (obj: ListRolesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRolesRequest =>
    __isa(o, "ListRolesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListRoles</a> request. </p>
 */
export interface ListRolesResponse {
  __type?: "ListRolesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of roles.</p>
   */
  Roles: Role[] | undefined;
}

export namespace ListRolesResponse {
  export const filterSensitiveLog = (obj: ListRolesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRolesResponse =>
    __isa(o, "ListRolesResponse");
}

export interface ListRoleTagsRequest {
  __type?: "ListRoleTagsRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) Use this only when paginating results to indicate the
   *     maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, it defaults to 100. Note that
   *     IAM might return fewer results, even when more results are available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the IAM role for which you want to see the list of tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace ListRoleTagsRequest {
  export const filterSensitiveLog = (obj: ListRoleTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoleTagsRequest =>
    __isa(o, "ListRoleTagsRequest");
}

export interface ListRoleTagsResponse {
  __type?: "ListRoleTagsResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can use the <code>Marker</code> request parameter to make a subsequent pagination request that retrieves more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when more results are available. Check <code>IsTruncated</code> after every call to ensure that you receive all of your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>The list of tags currently that is attached to the role. Each tag consists of a key
   *       name and an associated value. If no tags are attached to the specified role, the response
   *       contains an empty list.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace ListRoleTagsResponse {
  export const filterSensitiveLog = (obj: ListRoleTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoleTagsResponse =>
    __isa(o, "ListRoleTagsResponse");
}

export interface ListSAMLProvidersRequest {
  __type?: "ListSAMLProvidersRequest";
}

export namespace ListSAMLProvidersRequest {
  export const filterSensitiveLog = (obj: ListSAMLProvidersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSAMLProvidersRequest =>
    __isa(o, "ListSAMLProvidersRequest");
}

/**
 * <p>Contains the response to a successful <a>ListSAMLProviders</a> request.
 *     </p>
 */
export interface ListSAMLProvidersResponse {
  __type?: "ListSAMLProvidersResponse";
  /**
   * <p>The list of SAML provider resource objects defined in IAM for this AWS
   *          account.</p>
   */
  SAMLProviderList?: SAMLProviderListEntry[];
}

export namespace ListSAMLProvidersResponse {
  export const filterSensitiveLog = (obj: ListSAMLProvidersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSAMLProvidersResponse =>
    __isa(o, "ListSAMLProvidersResponse");
}

export interface ListServerCertificatesRequest {
  __type?: "ListServerCertificatesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p> The path prefix for filtering the results. For example:
   *             <code>/company/servercerts</code> would get all server certificates for which the path
   *          starts with <code>/company/servercerts</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all server certificates. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;
}

export namespace ListServerCertificatesRequest {
  export const filterSensitiveLog = (
    obj: ListServerCertificatesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServerCertificatesRequest =>
    __isa(o, "ListServerCertificatesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListServerCertificates</a> request.
 *     </p>
 */
export interface ListServerCertificatesResponse {
  __type?: "ListServerCertificatesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of server certificates.</p>
   */
  ServerCertificateMetadataList: ServerCertificateMetadata[] | undefined;
}

export namespace ListServerCertificatesResponse {
  export const filterSensitiveLog = (
    obj: ListServerCertificatesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServerCertificatesResponse =>
    __isa(o, "ListServerCertificatesResponse");
}

export interface ListServiceSpecificCredentialsRequest {
  __type?: "ListServiceSpecificCredentialsRequest";
  /**
   * <p>Filters the returned results to only those for the specified AWS service. If not
   *          specified, then AWS returns service-specific credentials for all services.</p>
   */
  ServiceName?: string;

  /**
   * <p>The name of the user whose service-specific credentials you want information about. If
   *          this value is not specified, then the operation assumes the user whose credentials are used
   *          to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace ListServiceSpecificCredentialsRequest {
  export const filterSensitiveLog = (
    obj: ListServiceSpecificCredentialsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServiceSpecificCredentialsRequest =>
    __isa(o, "ListServiceSpecificCredentialsRequest");
}

export interface ListServiceSpecificCredentialsResponse {
  __type?: "ListServiceSpecificCredentialsResponse";
  /**
   * <p>A list of structures that each contain details about a service-specific
   *          credential.</p>
   */
  ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[];
}

export namespace ListServiceSpecificCredentialsResponse {
  export const filterSensitiveLog = (
    obj: ListServiceSpecificCredentialsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServiceSpecificCredentialsResponse =>
    __isa(o, "ListServiceSpecificCredentialsResponse");
}

export interface ListSigningCertificatesRequest {
  __type?: "ListSigningCertificatesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the IAM user whose signing certificates you want to examine.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace ListSigningCertificatesRequest {
  export const filterSensitiveLog = (
    obj: ListSigningCertificatesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSigningCertificatesRequest =>
    __isa(o, "ListSigningCertificatesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListSigningCertificates</a>
 *       request. </p>
 */
export interface ListSigningCertificatesResponse {
  __type?: "ListSigningCertificatesResponse";
  /**
   * <p>A list of the user's signing certificate information.</p>
   */
  Certificates: SigningCertificate[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListSigningCertificatesResponse {
  export const filterSensitiveLog = (
    obj: ListSigningCertificatesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSigningCertificatesResponse =>
    __isa(o, "ListSigningCertificatesResponse");
}

export interface ListSSHPublicKeysRequest {
  __type?: "ListSSHPublicKeysRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the IAM user to list SSH public keys for. If none is specified, the
   *             <code>UserName</code> field is determined implicitly based on the AWS access key used
   *          to sign the request.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace ListSSHPublicKeysRequest {
  export const filterSensitiveLog = (obj: ListSSHPublicKeysRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSSHPublicKeysRequest =>
    __isa(o, "ListSSHPublicKeysRequest");
}

/**
 * <p>Contains the response to a successful <a>ListSSHPublicKeys</a>
 *       request.</p>
 */
export interface ListSSHPublicKeysResponse {
  __type?: "ListSSHPublicKeysResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of the SSH public keys assigned to IAM user.</p>
   */
  SSHPublicKeys?: SSHPublicKeyMetadata[];
}

export namespace ListSSHPublicKeysResponse {
  export const filterSensitiveLog = (obj: ListSSHPublicKeysResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSSHPublicKeysResponse =>
    __isa(o, "ListSSHPublicKeysResponse");
}

export interface ListUserPoliciesRequest {
  __type?: "ListUserPoliciesRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the user to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace ListUserPoliciesRequest {
  export const filterSensitiveLog = (obj: ListUserPoliciesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserPoliciesRequest =>
    __isa(o, "ListUserPoliciesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListUserPolicies</a> request.
 *     </p>
 */
export interface ListUserPoliciesResponse {
  __type?: "ListUserPoliciesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of policy names.</p>
   */
  PolicyNames: string[] | undefined;
}

export namespace ListUserPoliciesResponse {
  export const filterSensitiveLog = (obj: ListUserPoliciesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserPoliciesResponse =>
    __isa(o, "ListUserPoliciesResponse");
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p> The path prefix for filtering the results. For example:
   *             <code>/division_abc/subdivision_xyz/</code>, which would get all user names whose path
   *          starts with <code>/division_abc/subdivision_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all user names. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUsersRequest =>
    __isa(o, "ListUsersRequest");
}

/**
 * <p>Contains the response to a successful <a>ListUsers</a> request. </p>
 */
export interface ListUsersResponse {
  __type?: "ListUsersResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of users.</p>
   */
  Users: User[] | undefined;
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUsersResponse =>
    __isa(o, "ListUsersResponse");
}

export interface ListUserTagsRequest {
  __type?: "ListUserTagsRequest";
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) Use this only when paginating results to indicate the
   *     maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, it defaults to 100. Note that
   *     IAM might return fewer results, even when more results are available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the IAM user whose tags you want to see.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;
}

export namespace ListUserTagsRequest {
  export const filterSensitiveLog = (obj: ListUserTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserTagsRequest =>
    __isa(o, "ListUserTagsRequest");
}

export interface ListUserTagsResponse {
  __type?: "ListUserTagsResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can use the <code>Marker</code> request parameter to make a subsequent pagination request that retrieves more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when more results are available. Check <code>IsTruncated</code> after every call to ensure that you receive all of your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>The list of tags that are currently attached to the user. Each tag consists of a key
   *       name and an associated value. If no tags are attached to the specified user, the response
   *       contains an empty list.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace ListUserTagsResponse {
  export const filterSensitiveLog = (obj: ListUserTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserTagsResponse =>
    __isa(o, "ListUserTagsResponse");
}

export interface ListVirtualMFADevicesRequest {
  __type?: "ListVirtualMFADevicesRequest";
  /**
   * <p> The status (<code>Unassigned</code> or <code>Assigned</code>) of the devices to list.
   *          If you do not specify an <code>AssignmentStatus</code>, the operation defaults to
   *             <code>Any</code>, which lists both assigned and unassigned virtual MFA devices.,</p>
   */
  AssignmentStatus?: AssignmentStatusType | string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListVirtualMFADevicesRequest {
  export const filterSensitiveLog = (
    obj: ListVirtualMFADevicesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListVirtualMFADevicesRequest =>
    __isa(o, "ListVirtualMFADevicesRequest");
}

/**
 * <p>Contains the response to a successful <a>ListVirtualMFADevices</a> request.
 *     </p>
 */
export interface ListVirtualMFADevicesResponse {
  __type?: "ListVirtualMFADevicesResponse";
  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   *          the value to use for the <code>Marker</code> parameter in a subsequent pagination
   *          request.</p>
   */
  Marker?: string;

  /**
   * <p> The list of virtual MFA devices in the current account that match the
   *             <code>AssignmentStatus</code> value that was passed in the request.</p>
   */
  VirtualMFADevices: VirtualMFADevice[] | undefined;
}

export namespace ListVirtualMFADevicesResponse {
  export const filterSensitiveLog = (
    obj: ListVirtualMFADevicesResponse
  ): any => ({
    ...obj,
    ...(obj.VirtualMFADevices && {
      VirtualMFADevices: obj.VirtualMFADevices.map(item =>
        VirtualMFADevice.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is ListVirtualMFADevicesResponse =>
    __isa(o, "ListVirtualMFADevicesResponse");
}

/**
 * <p>Contains the user name and password create date for a user.</p>
 *          <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
 */
export interface LoginProfile {
  __type?: "LoginProfile";
  /**
   * <p>The date when the password for the user was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;

  /**
   * <p>The name of the user, which can be used for signing in to the AWS Management
   *          Console.</p>
   */
  UserName: string | undefined;
}

export namespace LoginProfile {
  export const filterSensitiveLog = (obj: LoginProfile): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoginProfile => __isa(o, "LoginProfile");
}

/**
 * <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 */
export interface MalformedCertificateException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedCertificateException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCertificateException {
  export const filterSensitiveLog = (
    obj: MalformedCertificateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MalformedCertificateException =>
    __isa(o, "MalformedCertificateException");
}

/**
 * <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 */
export interface MalformedPolicyDocumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedPolicyDocumentException";
  $fault: "client";
  message?: string;
}

export namespace MalformedPolicyDocumentException {
  export const filterSensitiveLog = (
    obj: MalformedPolicyDocumentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MalformedPolicyDocumentException =>
    __isa(o, "MalformedPolicyDocumentException");
}

/**
 * <p>Contains information about a managed policy, including the policy's ARN, versions, and
 *          the number of principal entities (users, groups, and roles) that the policy is attached
 *          to.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 *          <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface ManagedPolicyDetail {
  __type?: "ManagedPolicyDetail";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The number of principal entities (users, groups, and roles) that the policy is attached
   *          to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The identifier for the version of the policy that is set as the default (operative)
   *          version.</p>
   *          <p>For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>. </p>
   */
  DefaultVersionId?: string;

  /**
   * <p>A friendly description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>The path to the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The number of entities (users and roles) for which the policy is used as the permissions
   *          boundary. </p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>The stable and unique string identifying the policy.</p>
   *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  PolicyId?: string;

  /**
   * <p>The friendly name (not ARN) identifying the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>A list containing information about the versions of the policy.</p>
   */
  PolicyVersionList?: PolicyVersion[];

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was last updated.</p>
   *          <p>When a policy has only one version, this field contains the date and time when the
   *          policy was created. When a policy has more than one version, this field contains the date
   *          and time when the most recent policy version was created.</p>
   */
  UpdateDate?: Date;
}

export namespace ManagedPolicyDetail {
  export const filterSensitiveLog = (obj: ManagedPolicyDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManagedPolicyDetail =>
    __isa(o, "ManagedPolicyDetail");
}

/**
 * <p>Contains information about an MFA device.</p>
 *          <p>This data type is used as a response element in the <a>ListMFADevices</a>
 *          operation.</p>
 */
export interface MFADevice {
  __type?: "MFADevice";
  /**
   * <p>The date when the MFA device was enabled for the user.</p>
   */
  EnableDate: Date | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>The user with whom the MFA device is associated.</p>
   */
  UserName: string | undefined;
}

export namespace MFADevice {
  export const filterSensitiveLog = (obj: MFADevice): any => ({
    ...obj
  });
  export const isa = (o: any): o is MFADevice => __isa(o, "MFADevice");
}

/**
 * <p>The request was rejected because it referenced a resource entity that does not exist. The error
 *       message describes the resource.</p>
 */
export interface NoSuchEntityException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchEntityException";
  $fault: "client";
  message?: string;
}

export namespace NoSuchEntityException {
  export const filterSensitiveLog = (obj: NoSuchEntityException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchEntityException =>
    __isa(o, "NoSuchEntityException");
}

/**
 * <p>Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.</p>
 */
export interface OpenIDConnectProviderListEntry {
  __type?: "OpenIDConnectProviderListEntry";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;
}

export namespace OpenIDConnectProviderListEntry {
  export const filterSensitiveLog = (
    obj: OpenIDConnectProviderListEntry
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OpenIDConnectProviderListEntry =>
    __isa(o, "OpenIDConnectProviderListEntry");
}

/**
 * <p>Contains information about the effect that Organizations has on a policy simulation.</p>
 */
export interface OrganizationsDecisionDetail {
  __type?: "OrganizationsDecisionDetail";
  /**
   * <p>Specifies whether the simulated operation is allowed by the Organizations service control
   *          policies that impact the simulated user's account.</p>
   */
  AllowedByOrganizations?: boolean;
}

export namespace OrganizationsDecisionDetail {
  export const filterSensitiveLog = (
    obj: OrganizationsDecisionDetail
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrganizationsDecisionDetail =>
    __isa(o, "OrganizationsDecisionDetail");
}

/**
 * <p>Contains information about the account password policy.</p>
 *          <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
 */
export interface PasswordPolicy {
  __type?: "PasswordPolicy";
  /**
   * <p>Specifies whether IAM users are allowed to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * <p>Indicates whether passwords in the account expire. Returns true if
   *             <code>MaxPasswordAge</code> contains a value greater than 0. Returns false if
   *          MaxPasswordAge is 0 or not present.</p>
   */
  ExpirePasswords?: boolean;

  /**
   * <p>Specifies whether IAM users are prevented from setting a new password after their
   *          password has expired.</p>
   */
  HardExpiry?: boolean;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   */
  MaxPasswordAge?: number;

  /**
   * <p>Minimum length to require for IAM user passwords.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *          reusing.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * <p>Specifies whether to require lowercase characters for IAM user passwords.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * <p>Specifies whether to require numbers for IAM user passwords.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>Specifies whether to require symbols for IAM user passwords.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>Specifies whether to require uppercase characters for IAM user passwords.</p>
   */
  RequireUppercaseCharacters?: boolean;
}

export namespace PasswordPolicy {
  export const filterSensitiveLog = (obj: PasswordPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is PasswordPolicy =>
    __isa(o, "PasswordPolicy");
}

/**
 * <p>The request was rejected because the provided password did not meet the requirements
 *       imposed by the account password policy.</p>
 */
export interface PasswordPolicyViolationException
  extends __SmithyException,
    $MetadataBearer {
  name: "PasswordPolicyViolationException";
  $fault: "client";
  message?: string;
}

export namespace PasswordPolicyViolationException {
  export const filterSensitiveLog = (
    obj: PasswordPolicyViolationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PasswordPolicyViolationException =>
    __isa(o, "PasswordPolicyViolationException");
}

export enum PermissionsBoundaryAttachmentType {
  Policy = "PermissionsBoundaryPolicy"
}

/**
 * <p>Contains information about a managed policy.</p>
 *          <p>This data type is used as a response element in the <a>CreatePolicy</a>,
 *             <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface Policy {
  __type?: "Policy";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The number of entities (users, groups, and roles) that the policy is attached to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The identifier for the version of the policy that is set as the default version.</p>
   */
  DefaultVersionId?: string;

  /**
   * <p>A friendly description of the policy.</p>
   *          <p>This element is included in the response to the <a>GetPolicy</a> operation.
   *          It is not included in the response to the <a>ListPolicies</a> operation. </p>
   */
  Description?: string;

  /**
   * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>The path to the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The number of entities (users and roles) for which the policy is used to set the
   *          permissions boundary. </p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>The stable and unique string identifying the policy.</p>
   *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  PolicyId?: string;

  /**
   * <p>The friendly name (not ARN) identifying the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was last updated.</p>
   *          <p>When a policy has only one version, this field contains the date and time when the
   *          policy was created. When a policy has more than one version, this field contains the date
   *          and time when the most recent policy version was created.</p>
   */
  UpdateDate?: Date;
}

export namespace Policy {
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj
  });
  export const isa = (o: any): o is Policy => __isa(o, "Policy");
}

/**
 * <p>Contains information about an IAM policy, including the policy document.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface PolicyDetail {
  __type?: "PolicyDetail";
  /**
   * <p>The policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

export namespace PolicyDetail {
  export const filterSensitiveLog = (obj: PolicyDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyDetail => __isa(o, "PolicyDetail");
}

export enum PolicyEvaluationDecisionType {
  ALLOWED = "allowed",
  EXPLICIT_DENY = "explicitDeny",
  IMPLICIT_DENY = "implicitDeny"
}

/**
 * <p>The request failed because a provided policy could not be successfully evaluated. An
 *       additional detailed message indicates the source of the failure.</p>
 */
export interface PolicyEvaluationException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyEvaluationException";
  $fault: "server";
  message?: string;
}

export namespace PolicyEvaluationException {
  export const filterSensitiveLog = (obj: PolicyEvaluationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyEvaluationException =>
    __isa(o, "PolicyEvaluationException");
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
 */
export interface PolicyGrantingServiceAccess {
  __type?: "PolicyGrantingServiceAccess";
  /**
   * <p>The name of the entity (user or role) to which the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityName?: string;

  /**
   * <p>The type of entity (user or role) that used the policy to access the service to which
   *          the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityType?: PolicyOwnerEntityType | string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  PolicyArn?: string;

  /**
   * <p>The policy name.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy type. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed
   *             Policies and Inline Policies</a> in the
   *          <i>IAM User Guide</i>.</p>
   */
  PolicyType: PolicyType | string | undefined;
}

export namespace PolicyGrantingServiceAccess {
  export const filterSensitiveLog = (
    obj: PolicyGrantingServiceAccess
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyGrantingServiceAccess =>
    __isa(o, "PolicyGrantingServiceAccess");
}

/**
 * <p>Contains information about a group that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyGroup {
  __type?: "PolicyGroup";
  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  GroupId?: string;

  /**
   * <p>The name (friendly name, not ARN) identifying the group.</p>
   */
  GroupName?: string;
}

export namespace PolicyGroup {
  export const filterSensitiveLog = (obj: PolicyGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyGroup => __isa(o, "PolicyGroup");
}

/**
 * <p>The request failed because AWS service role policies can only be attached to the
 *       service-linked role for that service.</p>
 */
export interface PolicyNotAttachableException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyNotAttachableException";
  $fault: "client";
  message?: string;
}

export namespace PolicyNotAttachableException {
  export const filterSensitiveLog = (
    obj: PolicyNotAttachableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyNotAttachableException =>
    __isa(o, "PolicyNotAttachableException");
}

export enum PolicyOwnerEntityType {
  GROUP = "GROUP",
  ROLE = "ROLE",
  USER = "USER"
}

/**
 * <p>Contains information about a role that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyRole {
  __type?: "PolicyRole";
  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  RoleId?: string;

  /**
   * <p>The name (friendly name, not ARN) identifying the role.</p>
   */
  RoleName?: string;
}

export namespace PolicyRole {
  export const filterSensitiveLog = (obj: PolicyRole): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyRole => __isa(o, "PolicyRole");
}

export enum PolicyScopeType {
  AWS = "AWS",
  All = "All",
  Local = "Local"
}

export enum PolicySourceType {
  AWS_MANAGED = "aws-managed",
  GROUP = "group",
  NONE = "none",
  RESOURCE = "resource",
  ROLE = "role",
  USER = "user",
  USER_MANAGED = "user-managed"
}

export enum PolicyType {
  INLINE = "INLINE",
  MANAGED = "MANAGED"
}

export type PolicyUsageType = "PermissionsBoundary" | "PermissionsPolicy";

/**
 * <p>Contains information about a user that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyUser {
  __type?: "PolicyUser";
  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId?: string;

  /**
   * <p>The name (friendly name, not ARN) identifying the user.</p>
   */
  UserName?: string;
}

export namespace PolicyUser {
  export const filterSensitiveLog = (obj: PolicyUser): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyUser => __isa(o, "PolicyUser");
}

/**
 * <p>Contains information about a version of a managed policy.</p>
 *          <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyVersion {
  __type?: "PolicyVersion";
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy version was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The policy document.</p>
   *          <p>The policy document is returned in the response to the <a>GetPolicyVersion</a> and <a>GetAccountAuthorizationDetails</a> operations. It is not returned in
   *          the response to the <a>CreatePolicyVersion</a> or <a>ListPolicyVersions</a> operations. </p>
   *          <p>The policy document returned in this structure is URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding
   *          method to convert the policy back to plain JSON text. For example, if you use Java, you can
   *          use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *          the Java SDK. Other languages and SDKs provide similar functionality.</p>
   */
  Document?: string;

  /**
   * <p>Specifies whether the policy version is set as the policy's default version.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>The identifier for the policy version.</p>
   *          <p>Policy version identifiers always begin with <code>v</code> (always lowercase). When a
   *          policy is created, the first policy version is <code>v1</code>. </p>
   */
  VersionId?: string;
}

export namespace PolicyVersion {
  export const filterSensitiveLog = (obj: PolicyVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyVersion => __isa(o, "PolicyVersion");
}

/**
 * <p>Contains the row and column of a location of a <code>Statement</code> element in a
 *          policy document.</p>
 *          <p>This data type is used as a member of the <code>
 *                <a>Statement</a>
 *             </code> type.</p>
 */
export interface Position {
  __type?: "Position";
  /**
   * <p>The column in the line containing the specified position in the document.</p>
   */
  Column?: number;

  /**
   * <p>The line containing the specified position in the document.</p>
   */
  Line?: number;
}

export namespace Position {
  export const filterSensitiveLog = (obj: Position): any => ({
    ...obj
  });
  export const isa = (o: any): o is Position => __isa(o, "Position");
}

export interface PutGroupPolicyRequest {
  __type?: "PutGroupPolicyRequest";
  /**
   * <p>The name of the group to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace PutGroupPolicyRequest {
  export const filterSensitiveLog = (obj: PutGroupPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutGroupPolicyRequest =>
    __isa(o, "PutGroupPolicyRequest");
}

export interface PutRolePermissionsBoundaryRequest {
  __type?: "PutRolePermissionsBoundaryRequest";
  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the role.</p>
   */
  PermissionsBoundary: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) of the IAM role for which you want to set the
   *          permissions boundary.</p>
   */
  RoleName: string | undefined;
}

export namespace PutRolePermissionsBoundaryRequest {
  export const filterSensitiveLog = (
    obj: PutRolePermissionsBoundaryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRolePermissionsBoundaryRequest =>
    __isa(o, "PutRolePermissionsBoundaryRequest");
}

export interface PutRolePolicyRequest {
  __type?: "PutRolePolicyRequest";
  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name of the role to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace PutRolePolicyRequest {
  export const filterSensitiveLog = (obj: PutRolePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRolePolicyRequest =>
    __isa(o, "PutRolePolicyRequest");
}

export interface PutUserPermissionsBoundaryRequest {
  __type?: "PutUserPermissionsBoundaryRequest";
  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the user.</p>
   */
  PermissionsBoundary: string | undefined;

  /**
   * <p>The name (friendly name, not ARN) of the IAM user for which you want to set the
   *          permissions boundary.</p>
   */
  UserName: string | undefined;
}

export namespace PutUserPermissionsBoundaryRequest {
  export const filterSensitiveLog = (
    obj: PutUserPermissionsBoundaryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutUserPermissionsBoundaryRequest =>
    __isa(o, "PutUserPermissionsBoundaryRequest");
}

export interface PutUserPolicyRequest {
  __type?: "PutUserPolicyRequest";
  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name of the user to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace PutUserPolicyRequest {
  export const filterSensitiveLog = (obj: PutUserPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutUserPolicyRequest =>
    __isa(o, "PutUserPolicyRequest");
}

export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  __type?: "RemoveClientIDFromOpenIDConnectProviderRequest";
  /**
   * <p>The client ID (also known as audience) to remove from the IAM OIDC provider resource.
   *          For more information about client IDs, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  ClientID: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the client
   *          ID from. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;
}

export namespace RemoveClientIDFromOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (
    obj: RemoveClientIDFromOpenIDConnectProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RemoveClientIDFromOpenIDConnectProviderRequest =>
    __isa(o, "RemoveClientIDFromOpenIDConnectProviderRequest");
}

export interface RemoveRoleFromInstanceProfileRequest {
  __type?: "RemoveRoleFromInstanceProfileRequest";
  /**
   * <p>The name of the instance profile to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The name of the role to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace RemoveRoleFromInstanceProfileRequest {
  export const filterSensitiveLog = (
    obj: RemoveRoleFromInstanceProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveRoleFromInstanceProfileRequest =>
    __isa(o, "RemoveRoleFromInstanceProfileRequest");
}

export interface RemoveUserFromGroupRequest {
  __type?: "RemoveUserFromGroupRequest";
  /**
   * <p>The name of the group to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace RemoveUserFromGroupRequest {
  export const filterSensitiveLog = (obj: RemoveUserFromGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveUserFromGroupRequest =>
    __isa(o, "RemoveUserFromGroupRequest");
}

export type ReportFormatType = "text/csv";

/**
 * <p>The request failed because the maximum number of concurrent requests for this
 *     account are already running.</p>
 */
export interface ReportGenerationLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReportGenerationLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ReportGenerationLimitExceededException {
  export const filterSensitiveLog = (
    obj: ReportGenerationLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReportGenerationLimitExceededException =>
    __isa(o, "ReportGenerationLimitExceededException");
}

export enum ReportStateType {
  COMPLETE = "COMPLETE",
  INPROGRESS = "INPROGRESS",
  STARTED = "STARTED"
}

export interface ResetServiceSpecificCredentialRequest {
  __type?: "ResetServiceSpecificCredentialRequest";
  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the IAM user associated with the service-specific credential. If this
   *          value is not specified, then the operation assumes the user whose credentials are used to
   *          call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace ResetServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (
    obj: ResetServiceSpecificCredentialRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetServiceSpecificCredentialRequest =>
    __isa(o, "ResetServiceSpecificCredentialRequest");
}

export interface ResetServiceSpecificCredentialResponse {
  __type?: "ResetServiceSpecificCredentialResponse";
  /**
   * <p>A structure with details about the updated service-specific credential, including the
   *          new password.</p>
   *          <important>
   *             <p>This is the <b>only</b> time that you can access the
   *             password. You cannot recover the password later, but you can reset it again.</p>
   *          </important>
   */
  ServiceSpecificCredential?: ServiceSpecificCredential;
}

export namespace ResetServiceSpecificCredentialResponse {
  export const filterSensitiveLog = (
    obj: ResetServiceSpecificCredentialResponse
  ): any => ({
    ...obj,
    ...(obj.ServiceSpecificCredential && {
      ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(
        obj.ServiceSpecificCredential
      )
    })
  });
  export const isa = (o: any): o is ResetServiceSpecificCredentialResponse =>
    __isa(o, "ResetServiceSpecificCredentialResponse");
}

/**
 * <p>Contains the result of the simulation of a single API operation call on a single
 *          resource.</p>
 *          <p>This data type is used by a member of the <a>EvaluationResult</a> data
 *          type.</p>
 */
export interface ResourceSpecificResult {
  __type?: "ResourceSpecificResult";
  /**
   * <p>Additional details about the results of the evaluation decision. When there are both
   *          IAM policies and resource policies, this parameter explains how each set of policies
   *          contributes to the final evaluation decision. When simulating cross-account access to a
   *          resource, both the resource-based policy and the caller's IAM policy must grant
   *          access.</p>
   */
  EvalDecisionDetails?: {
    [key: string]: PolicyEvaluationDecisionType | string;
  };

  /**
   * <p>The result of the simulation of the simulated API operation on the resource specified in
   *             <code>EvalResourceName</code>.</p>
   */
  EvalResourceDecision: PolicyEvaluationDecisionType | string | undefined;

  /**
   * <p>The name of the simulated resource, in Amazon Resource Name (ARN) format.</p>
   */
  EvalResourceName: string | undefined;

  /**
   * <p>A list of the statements in the input policies that determine the result for this part
   *          of the simulation. Remember that even if multiple statements allow the operation on the
   *          resource, if <i>any</i> statement denies that operation, then the explicit
   *          deny overrides any allow. In addition, the deny statement is the only entry included in the
   *          result.</p>
   */
  MatchedStatements?: Statement[];

  /**
   * <p>A list of context keys that are required by the included input policies but that were
   *          not provided by one of the input parameters. This list is used when a list of ARNs is
   *          included in the <code>ResourceArns</code> parameter instead of "*". If you do not specify
   *          individual resources, by setting <code>ResourceArns</code> to "*" or by not including the
   *             <code>ResourceArns</code> parameter, then any missing context values are instead
   *          included under the <code>EvaluationResults</code> section. To discover the context keys
   *          used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or
   *             <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: string[];
}

export namespace ResourceSpecificResult {
  export const filterSensitiveLog = (obj: ResourceSpecificResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceSpecificResult =>
    __isa(o, "ResourceSpecificResult");
}

export interface ResyncMFADeviceRequest {
  __type?: "ResyncMFADeviceRequest";
  /**
   * <p>An authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   */
  AuthenticationCode1: string | undefined;

  /**
   * <p>A subsequent authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   */
  AuthenticationCode2: string | undefined;

  /**
   * <p>Serial number that uniquely identifies the MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>The name of the user whose MFA device you want to resynchronize.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace ResyncMFADeviceRequest {
  export const filterSensitiveLog = (obj: ResyncMFADeviceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResyncMFADeviceRequest =>
    __isa(o, "ResyncMFADeviceRequest");
}

/**
 * <p>Contains information about an IAM role. This structure is returned as a response
 *          element in several API operations that interact with roles.</p>
 */
export interface Role {
  __type?: "Role";
  /**
   * <p> The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and
   *          how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i> guide. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the role was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>A description of the role that you provide.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) for the specified role. Anyone who uses the
   *          AWS CLI, or API to assume the role can specify the duration using the optional
   *             <code>DurationSeconds</code> API parameter or <code>duration-seconds</code> CLI
   *          parameter.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p> The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  RoleId: string | undefined;

  /**
   * <p>Contains information about the last time that an IAM role was used. This includes the
   *          date and time and the Region in which the role was last used. Activity is only reported for
   *          the trailing 400 days. This period can be shorter if your Region began supporting these
   *          features within the last year. The role might have been used more than 400 days ago. For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User
   *          Guide</i>.</p>
   */
  RoleLastUsed?: RoleLastUsed;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace Role {
  export const filterSensitiveLog = (obj: Role): any => ({
    ...obj
  });
  export const isa = (o: any): o is Role => __isa(o, "Role");
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface RoleDetail {
  __type?: "RoleDetail";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>A list of managed policies attached to the role. These policies are the role's access
   *          (permissions) policies.</p>
   */
  AttachedManagedPolicies?: AttachedPolicy[];

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the role was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: InstanceProfile[];

  /**
   * <p>The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  RoleId?: string;

  /**
   * <p>Contains information about the last time that an IAM role was used. This includes the
   *          date and time and the Region in which the role was last used. Activity is only reported for
   *          the trailing 400 days. This period can be shorter if your Region began supporting these
   *          features within the last year. The role might have been used more than 400 days ago. For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User
   *          Guide</i>.</p>
   */
  RoleLastUsed?: RoleLastUsed;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;

  /**
   * <p>A list of inline policies embedded in the role. These policies are the role's access
   *          (permissions) policies.</p>
   */
  RolePolicyList?: PolicyDetail[];

  /**
   * <p>A list of tags that are attached to the specified role. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace RoleDetail {
  export const filterSensitiveLog = (obj: RoleDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is RoleDetail => __isa(o, "RoleDetail");
}

/**
 * <p>Contains information about the last time that an IAM role was used. This includes the
 *          date and time and the Region in which the role was last used. Activity is only reported for
 *          the trailing 400 days. This period can be shorter if your Region began supporting these
 *          features within the last year. The role might have been used more than 400 days ago. For
 *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User
 *          Guide</i>.</p>
 *          <p>This data type is returned as a response element in the <a>GetRole</a> and
 *             <a>GetAccountAuthorizationDetails</a> operations.</p>
 */
export interface RoleLastUsed {
  __type?: "RoleLastUsed";
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a> that the role was last used.</p>
   *          <p>This field is null if the role has not been used within the IAM tracking period. For
   *          more information about the tracking period, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User Guide</i>.
   *       </p>
   */
  LastUsedDate?: Date;

  /**
   * <p>The name of the AWS Region in which the role was last used.</p>
   */
  Region?: string;
}

export namespace RoleLastUsed {
  export const filterSensitiveLog = (obj: RoleLastUsed): any => ({
    ...obj
  });
  export const isa = (o: any): o is RoleLastUsed => __isa(o, "RoleLastUsed");
}

/**
 * <p>An object that contains details about how a service-linked role is used, if that
 *          information is returned by the service.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
 */
export interface RoleUsageType {
  __type?: "RoleUsageType";
  /**
   * <p>The name of the Region where the service-linked role is being used.</p>
   */
  Region?: string;

  /**
   * <p>The name of the resource that is using the service-linked role.</p>
   */
  Resources?: string[];
}

export namespace RoleUsageType {
  export const filterSensitiveLog = (obj: RoleUsageType): any => ({
    ...obj
  });
  export const isa = (o: any): o is RoleUsageType => __isa(o, "RoleUsageType");
}

/**
 * <p>Contains the list of SAML providers for this account.</p>
 */
export interface SAMLProviderListEntry {
  __type?: "SAMLProviderListEntry";
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;
}

export namespace SAMLProviderListEntry {
  export const filterSensitiveLog = (obj: SAMLProviderListEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is SAMLProviderListEntry =>
    __isa(o, "SAMLProviderListEntry");
}

/**
 * <p>Contains information about a server certificate.</p>
 *          <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
 */
export interface ServerCertificate {
  __type?: "ServerCertificate";
  /**
   * <p>The contents of the public key certificate.</p>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The contents of the public key certificate chain.</p>
   */
  CertificateChain?: string;

  /**
   * <p>The meta information of the server certificate, such as its name, path, ID, and
   *          ARN.</p>
   */
  ServerCertificateMetadata: ServerCertificateMetadata | undefined;
}

export namespace ServerCertificate {
  export const filterSensitiveLog = (obj: ServerCertificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServerCertificate =>
    __isa(o, "ServerCertificate");
}

/**
 * <p>Contains information about a server certificate without its certificate body,
 *          certificate chain, and private key.</p>
 *          <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a>
 *          operations. </p>
 */
export interface ServerCertificateMetadata {
  __type?: "ServerCertificateMetadata";
  /**
   * <p> The Amazon Resource Name (ARN) specifying the server certificate. For more information
   *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date on which the certificate is set to expire.</p>
   */
  Expiration?: Date;

  /**
   * <p> The path to the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p> The stable and unique string identifying the server certificate. For more information
   *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  ServerCertificateId: string | undefined;

  /**
   * <p>The name that identifies the server certificate.</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The date when the server certificate was uploaded.</p>
   */
  UploadDate?: Date;
}

export namespace ServerCertificateMetadata {
  export const filterSensitiveLog = (obj: ServerCertificateMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServerCertificateMetadata =>
    __isa(o, "ServerCertificateMetadata");
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 */
export interface ServiceFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  message?: string;
}

export namespace ServiceFailureException {
  export const filterSensitiveLog = (obj: ServiceFailureException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceFailureException =>
    __isa(o, "ServiceFailureException");
}

/**
 * <p>Contains details about the most recent attempt to access the service.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
 */
export interface ServiceLastAccessed {
  __type?: "ServiceLastAccessed";
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated entity most recently attempted to access the
   *          service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date;

  /**
   * <p>The ARN of the authenticated entity (user or role) that last attempted to access the
   *          service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedEntity?: string;

  /**
   * <p>The name of the service in which access was attempted.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The namespace of the service in which access was attempted.</p>
   *          <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>The total number of authenticated principals (root user, IAM users, or IAM roles)
   *          that have attempted to access the service.</p>
   *          <p>This field is null if no principals attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  TotalAuthenticatedEntities?: number;
}

export namespace ServiceLastAccessed {
  export const filterSensitiveLog = (obj: ServiceLastAccessed): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceLastAccessed =>
    __isa(o, "ServiceLastAccessed");
}

/**
 * <p>The specified service does not support service-specific credentials.</p>
 */
export interface ServiceNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceNotSupportedException";
  $fault: "client";
  message?: string;
}

export namespace ServiceNotSupportedException {
  export const filterSensitiveLog = (
    obj: ServiceNotSupportedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceNotSupportedException =>
    __isa(o, "ServiceNotSupportedException");
}

/**
 * <p>Contains the details of a service-specific credential.</p>
 */
export interface ServiceSpecificCredential {
  __type?: "ServiceSpecificCredential";
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The generated password for the service-specific credential.</p>
   */
  ServicePassword: string | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The generated user name for the service-specific credential. This value is generated by
   *          combining the IAM user's name combined with the ID number of the AWS account, as in
   *             <code>jane-at-123456789012</code>, for example. This value cannot be configured by the
   *          user.</p>
   */
  ServiceUserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   */
  UserName: string | undefined;
}

export namespace ServiceSpecificCredential {
  export const filterSensitiveLog = (obj: ServiceSpecificCredential): any => ({
    ...obj,
    ...(obj.ServicePassword && { ServicePassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ServiceSpecificCredential =>
    __isa(o, "ServiceSpecificCredential");
}

/**
 * <p>Contains additional details about a service-specific credential.</p>
 */
export interface ServiceSpecificCredentialMetadata {
  __type?: "ServiceSpecificCredentialMetadata";
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The generated user name for the service-specific credential.</p>
   */
  ServiceUserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   */
  UserName: string | undefined;
}

export namespace ServiceSpecificCredentialMetadata {
  export const filterSensitiveLog = (
    obj: ServiceSpecificCredentialMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceSpecificCredentialMetadata =>
    __isa(o, "ServiceSpecificCredentialMetadata");
}

export interface SetDefaultPolicyVersionRequest {
  __type?: "SetDefaultPolicyVersionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy whose default version you want to
   *          set.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The version of the policy to set as the default (operative) version.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  VersionId: string | undefined;
}

export namespace SetDefaultPolicyVersionRequest {
  export const filterSensitiveLog = (
    obj: SetDefaultPolicyVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetDefaultPolicyVersionRequest =>
    __isa(o, "SetDefaultPolicyVersionRequest");
}

export interface SetSecurityTokenServicePreferencesRequest {
  __type?: "SetSecurityTokenServicePreferencesRequest";
  /**
   * <p>The version of the global endpoint token. Version 1 tokens are valid only in AWS
   *          Regions that are available by default. These tokens do not work in manually enabled
   *          Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions.
   *          However, version 2 tokens are longer and might affect systems where you temporarily store
   *          tokens.</p>
   *          <p>For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating
   *             STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p>
   */
  GlobalEndpointTokenVersion: GlobalEndpointTokenVersion | string | undefined;
}

export namespace SetSecurityTokenServicePreferencesRequest {
  export const filterSensitiveLog = (
    obj: SetSecurityTokenServicePreferencesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetSecurityTokenServicePreferencesRequest =>
    __isa(o, "SetSecurityTokenServicePreferencesRequest");
}

/**
 * <p>Contains information about an X.509 signing certificate.</p>
 *          <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a>
 *          operations. </p>
 */
export interface SigningCertificate {
  __type?: "SigningCertificate";
  /**
   * <p>The contents of the signing certificate.</p>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The ID for the signing certificate.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p>The status of the signing certificate. <code>Active</code> means that the key is valid
   *          for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date when the signing certificate was uploaded.</p>
   */
  UploadDate?: Date;

  /**
   * <p>The name of the user the signing certificate is associated with.</p>
   */
  UserName: string | undefined;
}

export namespace SigningCertificate {
  export const filterSensitiveLog = (obj: SigningCertificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is SigningCertificate =>
    __isa(o, "SigningCertificate");
}

export interface SimulateCustomPolicyRequest {
  __type?: "SimulateCustomPolicyRequest";
  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *          evaluated against each resource. Each operation must include the service identifier, such
   *          as <code>iam:CreateUser</code>. This operation does not support using wildcards (*) in an
   *          action name.</p>
   */
  ActionNames: string[] | undefined;

  /**
   * <p>The ARN of the IAM user that you want to use as the simulated caller of the API
   *          operations. <code>CallerArn</code> is required if you include a <code>ResourcePolicy</code>
   *          so that the policy's <code>Principal</code> element has a value to use in evaluating the
   *          policy.</p>
   *          <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed
   *          role, federated user, or a service principal.</p>
   */
  CallerArn?: string;

  /**
   * <p>A list of context keys and corresponding values for the simulation to use. Whenever a
   *          context key is evaluated in one of the simulated IAM permissions policies, the
   *          corresponding value is supplied.</p>
   */
  ContextEntries?: ContextEntry[];

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>A list of policy documents to include in the simulation. Each document is specified as a
   *          string containing the complete, valid JSON text of an IAM policy. Do not include any
   *          resource-based policies in this parameter. Any resource-based policy must be submitted with
   *          the <code>ResourcePolicy</code> parameter. The policies cannot be "scope-down" policies,
   *          such as you could include in a call to <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetFederationToken.html">GetFederationToken</a> or one of the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AssumeRole.html">AssumeRole</a>
   *          API operations. In other words, do not use policies designed to restrict what a user can do
   *          while using the temporary credentials.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList: string[] | undefined;

  /**
   * <p>A list of ARNs of AWS resources to include in the simulation. If this parameter is not
   *          provided, then the value defaults to <code>*</code> (all resources). Each API in the
   *             <code>ActionNames</code> parameter is evaluated for each resource in this list. The
   *          simulation determines the access result (allowed or denied) of each combination and reports
   *          it in the response.</p>
   *          <p>The simulation does not automatically retrieve policies for the specified resources. If
   *          you want to include a resource policy in the simulation, then you must include the policy
   *          as a string in the <code>ResourcePolicy</code> parameter.</p>
   *          <p>If you include a <code>ResourcePolicy</code>, then it must be applicable to all of the
   *          resources included in the simulation or you receive an invalid input error.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ResourceArns?: string[];

  /**
   * <p>Specifies the type of simulation to run. Different API operations that support
   *          resource-based policies require different combinations of resources. By specifying the type
   *          of simulation to run, you enable the policy simulator to enforce the presence of the
   *          required resources to ensure reliable simulation results. If your simulation does not match
   *          one of the following scenarios, then you can omit this parameter. The following list shows
   *          each of the supported scenario values and the resources that you must define to run the
   *          simulation.</p>
   *          <p>Each of the EC2 scenarios requires that you specify instance, image, and security-group
   *          resources. If your scenario includes an EBS volume, then you must specify that volume as a
   *          resource. If the EC2 scenario includes VPC, then you must supply the network-interface
   *          resource. If it includes an IP subnet, then you must specify the subnet resource. For more
   *          information on the EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>
   *          in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security-group</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-EBS</b>
   *                </p>
   *                <p>instance, image, security-group, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore-Subnet</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface, subnet</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS-Subnet</b>
   *                </p>
   *                <p>instance, image, security-group, network-interface, subnet, volume</p>
   *             </li>
   *          </ul>
   */
  ResourceHandlingOption?: string;

  /**
   * <p>An ARN representing the AWS account ID that specifies the owner of any simulated
   *          resource that does not identify its owner in the resource ARN. Examples of resource ARNs
   *          include an S3 bucket or object. If <code>ResourceOwner</code> is specified, it is also used
   *          as the account owner of any <code>ResourcePolicy</code> included in the simulation. If the
   *             <code>ResourceOwner</code> parameter is not specified, then the owner of the resources
   *          and the resource policy defaults to the account of the identity provided in
   *             <code>CallerArn</code>. This parameter is required only if you specify a resource-based
   *          policy and account that owns the resource is different from the account that owns the
   *          simulated calling user <code>CallerArn</code>.</p>
   *          <p>The ARN for an account uses the following syntax:
   *                <code>arn:aws:iam::<i>AWS-account-ID</i>:root</code>. For example, to
   *          represent the account with the 112233445566 ID, use the following ARN:
   *             <code>arn:aws:iam::112233445566-ID:root</code>. </p>
   */
  ResourceOwner?: string;

  /**
   * <p>A resource-based policy to include in the simulation provided as a string. Each resource
   *          in the simulation is treated as if it had this policy attached. You can include only one
   *          resource-based policy in a simulation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  ResourcePolicy?: string;
}

export namespace SimulateCustomPolicyRequest {
  export const filterSensitiveLog = (
    obj: SimulateCustomPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SimulateCustomPolicyRequest =>
    __isa(o, "SimulateCustomPolicyRequest");
}

/**
 * <p>Contains the response to a successful <a>SimulatePrincipalPolicy</a> or
 *       <a>SimulateCustomPolicy</a> request.</p>
 */
export interface SimulatePolicyResponse {
  __type?: "SimulatePolicyResponse";
  /**
   * <p>The results of the simulation.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace SimulatePolicyResponse {
  export const filterSensitiveLog = (obj: SimulatePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SimulatePolicyResponse =>
    __isa(o, "SimulatePolicyResponse");
}

export interface SimulatePrincipalPolicyRequest {
  __type?: "SimulatePrincipalPolicyRequest";
  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *          evaluated for each resource. Each operation must include the service identifier, such as
   *             <code>iam:CreateUser</code>.</p>
   */
  ActionNames: string[] | undefined;

  /**
   * <p>The ARN of the IAM user that you want to specify as the simulated caller of the API
   *          operations. If you do not specify a <code>CallerArn</code>, it defaults to the ARN of the
   *          user that you specify in <code>PolicySourceArn</code>, if you specified a user. If you
   *          include both a <code>PolicySourceArn</code> (for example,
   *             <code>arn:aws:iam::123456789012:user/David</code>) and a <code>CallerArn</code> (for
   *          example, <code>arn:aws:iam::123456789012:user/Bob</code>), the result is that you simulate
   *          calling the API operations as Bob, as if Bob had David's policies.</p>
   *          <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed
   *          role, federated user, or a service principal.</p>
   *          <p>
   *             <code>CallerArn</code> is required if you include a <code>ResourcePolicy</code> and the
   *             <code>PolicySourceArn</code> is not the ARN for an IAM user. This is required so that
   *          the resource-based policy's <code>Principal</code> element has a value to use in evaluating
   *          the policy.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  CallerArn?: string;

  /**
   * <p>A list of context keys and corresponding values for the simulation to use. Whenever a
   *          context key is evaluated in one of the simulated IAM permissions policies, the
   *          corresponding value is supplied.</p>
   */
  ContextEntries?: ContextEntry[];

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>An optional list of additional policy documents to include in the simulation. Each
   *          document is specified as a string containing the complete, valid JSON text of an IAM
   *          policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of a user, group, or role whose policies you want to
   *          include in the simulation. If you specify a user, group, or role, the simulation includes
   *          all policies that are associated with that entity. If you specify a user, the simulation
   *          also includes all policies that are attached to any groups the user belongs to.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicySourceArn: string | undefined;

  /**
   * <p>A list of ARNs of AWS resources to include in the simulation. If this parameter is not
   *          provided, then the value defaults to <code>*</code> (all resources). Each API in the
   *             <code>ActionNames</code> parameter is evaluated for each resource in this list. The
   *          simulation determines the access result (allowed or denied) of each combination and reports
   *          it in the response.</p>
   *          <p>The simulation does not automatically retrieve policies for the specified resources. If
   *          you want to include a resource policy in the simulation, then you must include the policy
   *          as a string in the <code>ResourcePolicy</code> parameter.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ResourceArns?: string[];

  /**
   * <p>Specifies the type of simulation to run. Different API operations that support
   *          resource-based policies require different combinations of resources. By specifying the type
   *          of simulation to run, you enable the policy simulator to enforce the presence of the
   *          required resources to ensure reliable simulation results. If your simulation does not match
   *          one of the following scenarios, then you can omit this parameter. The following list shows
   *          each of the supported scenario values and the resources that you must define to run the
   *          simulation.</p>
   *          <p>Each of the EC2 scenarios requires that you specify instance, image, and security group
   *          resources. If your scenario includes an EBS volume, then you must specify that volume as a
   *          resource. If the EC2 scenario includes VPC, then you must supply the network interface
   *          resource. If it includes an IP subnet, then you must specify the subnet resource. For more
   *          information on the EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>
   *          in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security group</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-Classic-EBS</b>
   *                </p>
   *                <p>instance, image, security group, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security group, network interface</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS</b>
   *                </p>
   *                <p>instance, image, security group, network interface, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet, volume</p>
   *             </li>
   *          </ul>
   */
  ResourceHandlingOption?: string;

  /**
   * <p>An AWS account ID that specifies the owner of any simulated resource that does not
   *          identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or
   *          object. If <code>ResourceOwner</code> is specified, it is also used as the account owner of
   *          any <code>ResourcePolicy</code> included in the simulation. If the
   *             <code>ResourceOwner</code> parameter is not specified, then the owner of the resources
   *          and the resource policy defaults to the account of the identity provided in
   *             <code>CallerArn</code>. This parameter is required only if you specify a resource-based
   *          policy and account that owns the resource is different from the account that owns the
   *          simulated calling user <code>CallerArn</code>.</p>
   */
  ResourceOwner?: string;

  /**
   * <p>A resource-based policy to include in the simulation provided as a string. Each resource
   *          in the simulation is treated as if it had this policy attached. You can include only one
   *          resource-based policy in a simulation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  ResourcePolicy?: string;
}

export namespace SimulatePrincipalPolicyRequest {
  export const filterSensitiveLog = (
    obj: SimulatePrincipalPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SimulatePrincipalPolicyRequest =>
    __isa(o, "SimulatePrincipalPolicyRequest");
}

export enum SortKeyType {
  LAST_AUTHENTICATED_TIME_ASCENDING = "LAST_AUTHENTICATED_TIME_ASCENDING",
  LAST_AUTHENTICATED_TIME_DESCENDING = "LAST_AUTHENTICATED_TIME_DESCENDING",
  SERVICE_NAMESPACE_ASCENDING = "SERVICE_NAMESPACE_ASCENDING",
  SERVICE_NAMESPACE_DESCENDING = "SERVICE_NAMESPACE_DESCENDING"
}

/**
 * <p>Contains information about an SSH public key.</p>
 *          <p>This data type is used as a response element in the <a>GetSSHPublicKey</a>
 *          and <a>UploadSSHPublicKey</a> operations. </p>
 */
export interface SSHPublicKey {
  __type?: "SSHPublicKey";
  /**
   * <p>The MD5 message digest of the SSH public key.</p>
   */
  Fingerprint: string | undefined;

  /**
   * <p>The SSH public key.</p>
   */
  SSHPublicKeyBody: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key
   *          cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate?: Date;

  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string | undefined;
}

export namespace SSHPublicKey {
  export const filterSensitiveLog = (obj: SSHPublicKey): any => ({
    ...obj
  });
  export const isa = (o: any): o is SSHPublicKey => __isa(o, "SSHPublicKey");
}

/**
 * <p>Contains information about an SSH public key, without the key's body or
 *          fingerprint.</p>
 *          <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a>
 *          operation.</p>
 */
export interface SSHPublicKeyMetadata {
  __type?: "SSHPublicKeyMetadata";
  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key
   *          cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate: Date | undefined;

  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string | undefined;
}

export namespace SSHPublicKeyMetadata {
  export const filterSensitiveLog = (obj: SSHPublicKeyMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is SSHPublicKeyMetadata =>
    __isa(o, "SSHPublicKeyMetadata");
}

/**
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that
 *          determines the result of the simulation.</p>
 *          <p>This data type is used by the <code>MatchedStatements</code> member of the <code>
 *                <a>EvaluationResult</a>
 *             </code> type.</p>
 */
export interface Statement {
  __type?: "Statement";
  /**
   * <p>The row and column of the end of a <code>Statement</code> in an IAM policy.</p>
   */
  EndPosition?: Position;

  /**
   * <p>The identifier of the policy that was provided as an input.</p>
   */
  SourcePolicyId?: string;

  /**
   * <p>The type of the policy.</p>
   */
  SourcePolicyType?: PolicySourceType | string;

  /**
   * <p>The row and column of the beginning of the <code>Statement</code> in an IAM
   *          policy.</p>
   */
  StartPosition?: Position;
}

export namespace Statement {
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj
  });
  export const isa = (o: any): o is Statement => __isa(o, "Statement");
}

export type StatusType = "Active" | "Inactive";

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

/**
 * <p>A structure that represents user-provided metadata that can be associated with a
 *       resource such as an IAM user or role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key name that can be used to look up or retrieve the associated value. For example,
   *         <code>Department</code> or <code>Cost Center</code> are common choices.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value associated with this tag. For example, tags with a key name of
   *         <code>Department</code> could have values such as <code>Human Resources</code>,
   *         <code>Accounting</code>, and <code>Support</code>. Tags with a key name of <code>Cost
   *         Center</code> might have values that consist of the number associated with the different
   *       cost centers in your company. Typically, many resources have tags with the same key name but
   *       with different values.</p>
   *          <note>
   *             <p>AWS always interprets the tag <code>Value</code> as a single string. If you need to
   *         store an array, you can store comma-separated values in the string. However, you must
   *         interpret the value in your code.</p>
   *          </note>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagRoleRequest {
  __type?: "TagRoleRequest";
  /**
   * <p>The name of the role that you want to add tags to.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the role. Each tag consists of a key name
   *       and an associated value. You can specify this with a JSON string.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagRoleRequest {
  export const filterSensitiveLog = (obj: TagRoleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagRoleRequest =>
    __isa(o, "TagRoleRequest");
}

export interface TagUserRequest {
  __type?: "TagUserRequest";
  /**
   * <p>The list of tags that you want to attach to the user. Each tag consists of a key name
   *       and an associated value.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The name of the user that you want to add tags to.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;
}

export namespace TagUserRequest {
  export const filterSensitiveLog = (obj: TagUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagUserRequest =>
    __isa(o, "TagUserRequest");
}

/**
 * <p>The request was rejected because only the service that depends on the service-linked
 *       role can modify or delete the role on your behalf. The error message includes the name of the
 *       service that depends on this service-linked role. You must request the change through that
 *       service.</p>
 */
export interface UnmodifiableEntityException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnmodifiableEntityException";
  $fault: "client";
  message?: string;
}

export namespace UnmodifiableEntityException {
  export const filterSensitiveLog = (
    obj: UnmodifiableEntityException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnmodifiableEntityException =>
    __isa(o, "UnmodifiableEntityException");
}

/**
 * <p>The request was rejected because the public key encoding format is unsupported or
 *       unrecognized.</p>
 */
export interface UnrecognizedPublicKeyEncodingException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnrecognizedPublicKeyEncodingException";
  $fault: "client";
  message?: string;
}

export namespace UnrecognizedPublicKeyEncodingException {
  export const filterSensitiveLog = (
    obj: UnrecognizedPublicKeyEncodingException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnrecognizedPublicKeyEncodingException =>
    __isa(o, "UnrecognizedPublicKeyEncodingException");
}

export interface UntagRoleRequest {
  __type?: "UntagRoleRequest";
  /**
   * <p>The name of the IAM role from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified role.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagRoleRequest {
  export const filterSensitiveLog = (obj: UntagRoleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagRoleRequest =>
    __isa(o, "UntagRoleRequest");
}

export interface UntagUserRequest {
  __type?: "UntagUserRequest";
  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified user.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The name of the IAM user from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;
}

export namespace UntagUserRequest {
  export const filterSensitiveLog = (obj: UntagUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagUserRequest =>
    __isa(o, "UntagUserRequest");
}

export interface UpdateAccessKeyRequest {
  __type?: "UpdateAccessKeyRequest";
  /**
   * <p>The access key ID of the secret access key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p> The status you want to assign to the secret access key. <code>Active</code> means that
   *          the key can be used for API calls to AWS, while <code>Inactive</code> means that the key
   *          cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The name of the user whose key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace UpdateAccessKeyRequest {
  export const filterSensitiveLog = (obj: UpdateAccessKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAccessKeyRequest =>
    __isa(o, "UpdateAccessKeyRequest");
}

export interface UpdateAccountPasswordPolicyRequest {
  __type?: "UpdateAccountPasswordPolicyRequest";
  /**
   * <p> Allows all IAM users in your account to use the AWS Management Console to change their own
   *          passwords. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/HowToPwdIAMUser.html">Letting IAM Users Change Their Own
   *             Passwords</a> in the <i>IAM User Guide</i>.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that IAM users in the account do not
   *          automatically have permissions to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * <p>Prevents IAM users from setting a new password after their password has expired. The
   *          IAM user cannot be accessed until an administrator resets the password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that IAM users can change their passwords
   *          after they expire and continue to sign in as the user.</p>
   */
  HardExpiry?: boolean;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>0</code>. The result is that IAM user passwords never expire.</p>
   */
  MaxPasswordAge?: number;

  /**
   * <p>The minimum number of characters allowed in an IAM user password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>6</code>.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *          reusing.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>0</code>. The result is that IAM users are not prevented from reusing
   *          previous passwords.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one lowercase character
   *          from the ISO basic Latin alphabet (a to z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          lowercase character.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one numeric character (0 to
   *          9).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          numeric character.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one of the following
   *          non-alphanumeric characters:</p>
   *          <p>! @ # $ % ^ & * ( ) _ + - = [ ] { } | '</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          symbol character.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one uppercase character
   *          from the ISO basic Latin alphabet (A to Z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *          value of <code>false</code>. The result is that passwords do not require at least one
   *          uppercase character.</p>
   */
  RequireUppercaseCharacters?: boolean;
}

export namespace UpdateAccountPasswordPolicyRequest {
  export const filterSensitiveLog = (
    obj: UpdateAccountPasswordPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAccountPasswordPolicyRequest =>
    __isa(o, "UpdateAccountPasswordPolicyRequest");
}

export interface UpdateAssumeRolePolicyRequest {
  __type?: "UpdateAssumeRolePolicyRequest";
  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>The name of the role to update with the new policy.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace UpdateAssumeRolePolicyRequest {
  export const filterSensitiveLog = (
    obj: UpdateAssumeRolePolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAssumeRolePolicyRequest =>
    __isa(o, "UpdateAssumeRolePolicyRequest");
}

export interface UpdateGroupRequest {
  __type?: "UpdateGroupRequest";
  /**
   * <p>Name of the IAM group to update. If you're changing the name of the group, this is the
   *          original name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>New name for the IAM group. Only include this if changing the group's name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  NewGroupName?: string;

  /**
   * <p>New path for the IAM group. Only include this if changing the group's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGroupRequest =>
    __isa(o, "UpdateGroupRequest");
}

export interface UpdateLoginProfileRequest {
  __type?: "UpdateLoginProfileRequest";
  /**
   * <p>The new password for the specified IAM user.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   *          <p>However,
   *          the format can be further restricted by the account administrator by setting a password
   *          policy on the AWS account. For more information, see <a>UpdateAccountPasswordPolicy</a>.</p>
   */
  Password?: string;

  /**
   * <p>Allows this new password to be used only once by requiring the specified IAM user to
   *          set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;

  /**
   * <p>The name of the user whose password you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace UpdateLoginProfileRequest {
  export const filterSensitiveLog = (obj: UpdateLoginProfileRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateLoginProfileRequest =>
    __isa(o, "UpdateLoginProfileRequest");
}

export interface UpdateOpenIDConnectProviderThumbprintRequest {
  __type?: "UpdateOpenIDConnectProviderThumbprintRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which you
   *          want to update the thumbprint. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OpenID
   *          Connect provider. For more information, see <a>CreateOpenIDConnectProvider</a>.
   *       </p>
   */
  ThumbprintList: string[] | undefined;
}

export namespace UpdateOpenIDConnectProviderThumbprintRequest {
  export const filterSensitiveLog = (
    obj: UpdateOpenIDConnectProviderThumbprintRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UpdateOpenIDConnectProviderThumbprintRequest =>
    __isa(o, "UpdateOpenIDConnectProviderThumbprintRequest");
}

export interface UpdateRoleDescriptionRequest {
  __type?: "UpdateRoleDescriptionRequest";
  /**
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;
}

export namespace UpdateRoleDescriptionRequest {
  export const filterSensitiveLog = (
    obj: UpdateRoleDescriptionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRoleDescriptionRequest =>
    __isa(o, "UpdateRoleDescriptionRequest");
}

export interface UpdateRoleDescriptionResponse {
  __type?: "UpdateRoleDescriptionResponse";
  /**
   * <p>A structure that contains details about the modified role.</p>
   */
  Role?: Role;
}

export namespace UpdateRoleDescriptionResponse {
  export const filterSensitiveLog = (
    obj: UpdateRoleDescriptionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRoleDescriptionResponse =>
    __isa(o, "UpdateRoleDescriptionResponse");
}

export interface UpdateRoleRequest {
  __type?: "UpdateRoleRequest";
  /**
   * <p>The new description that you want to apply to the specified role.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *          If you do not specify a value for this setting, the default maximum of one hour is applied.
   *          This setting can have a value from 1 hour to 12 hours.</p>
   *          <p>Anyone who assumes the role from the AWS CLI or API can use the
   *             <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI
   *          parameter to request a longer session. The <code>MaxSessionDuration</code> setting
   *          determines the maximum duration that can be requested using the
   *             <code>DurationSeconds</code> parameter. If users don't specify a value for the
   *             <code>DurationSeconds</code> parameter, their security credentials are valid for one
   *          hour by default. This applies when you use the <code>AssumeRole*</code> API operations or
   *          the <code>assume-role*</code> CLI operations but does not apply when you use those
   *          operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The name of the role that you want to modify.</p>
   */
  RoleName: string | undefined;
}

export namespace UpdateRoleRequest {
  export const filterSensitiveLog = (obj: UpdateRoleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRoleRequest =>
    __isa(o, "UpdateRoleRequest");
}

export interface UpdateRoleResponse {
  __type?: "UpdateRoleResponse";
}

export namespace UpdateRoleResponse {
  export const filterSensitiveLog = (obj: UpdateRoleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRoleResponse =>
    __isa(o, "UpdateRoleResponse");
}

export interface UpdateSAMLProviderRequest {
  __type?: "UpdateSAMLProviderRequest";
  /**
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *          document includes the issuer's name, expiration information, and keys that can be used to
   *          validate the SAML authentication response (assertions) that are received from the IdP. You
   *          must generate the metadata document using the identity management software that is used as
   *          your organization's IdP.</p>
   */
  SAMLMetadataDocument: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to update.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace UpdateSAMLProviderRequest {
  export const filterSensitiveLog = (obj: UpdateSAMLProviderRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSAMLProviderRequest =>
    __isa(o, "UpdateSAMLProviderRequest");
}

/**
 * <p>Contains the response to a successful <a>UpdateSAMLProvider</a> request.
 *     </p>
 */
export interface UpdateSAMLProviderResponse {
  __type?: "UpdateSAMLProviderResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider that was updated.</p>
   */
  SAMLProviderArn?: string;
}

export namespace UpdateSAMLProviderResponse {
  export const filterSensitiveLog = (obj: UpdateSAMLProviderResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSAMLProviderResponse =>
    __isa(o, "UpdateSAMLProviderResponse");
}

export interface UpdateServerCertificateRequest {
  __type?: "UpdateServerCertificateRequest";
  /**
   * <p>The new path for the server certificate. Include this only if you are updating the
   *          server certificate's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>The new name for the server certificate. Include this only if you are updating the
   *          server certificate's name. The name of the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  NewServerCertificateName?: string;

  /**
   * <p>The name of the server certificate that you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;
}

export namespace UpdateServerCertificateRequest {
  export const filterSensitiveLog = (
    obj: UpdateServerCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateServerCertificateRequest =>
    __isa(o, "UpdateServerCertificateRequest");
}

export interface UpdateServiceSpecificCredentialRequest {
  __type?: "UpdateServiceSpecificCredentialRequest";
  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The status to be assigned to the service-specific credential.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The name of the IAM user associated with the service-specific credential. If you do
   *          not specify this value, then the operation assumes the user whose credentials are used to
   *          call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace UpdateServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (
    obj: UpdateServiceSpecificCredentialRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateServiceSpecificCredentialRequest =>
    __isa(o, "UpdateServiceSpecificCredentialRequest");
}

export interface UpdateSigningCertificateRequest {
  __type?: "UpdateSigningCertificateRequest";
  /**
   * <p>The ID of the signing certificate you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p> The status you want to assign to the certificate. <code>Active</code> means that the
   *          certificate can be used for API calls to AWS <code>Inactive</code> means that the
   *          certificate cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The name of the IAM user the signing certificate belongs to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace UpdateSigningCertificateRequest {
  export const filterSensitiveLog = (
    obj: UpdateSigningCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSigningCertificateRequest =>
    __isa(o, "UpdateSigningCertificateRequest");
}

export interface UpdateSSHPublicKeyRequest {
  __type?: "UpdateSSHPublicKeyRequest";
  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status to assign to the SSH public key. <code>Active</code> means that the key can
   *          be used for authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the
   *          key cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace UpdateSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: UpdateSSHPublicKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSSHPublicKeyRequest =>
    __isa(o, "UpdateSSHPublicKeyRequest");
}

export interface UpdateUserRequest {
  __type?: "UpdateUserRequest";
  /**
   * <p>New path for the IAM user. Include this parameter only if you're changing the user's
   *          path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  NewPath?: string;

  /**
   * <p>New name for the user. Include this parameter only if you're changing the user's
   *          name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  NewUserName?: string;

  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *          original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserRequest =>
    __isa(o, "UpdateUserRequest");
}

export interface UploadServerCertificateRequest {
  __type?: "UploadServerCertificateRequest";
  /**
   * <p>The contents of the public key certificate in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The contents of the certificate chain. This is typically a concatenation of the
   *          PEM-encoded public key certificates of the chain.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  CertificateChain?: string;

  /**
   * <p>The path for the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).
   *          This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   *          <note>
   *             <p> If you are uploading a server certificate specifically for use with Amazon
   *             CloudFront distributions, you must specify a path using the <code>path</code> parameter.
   *             The path must begin with <code>/cloudfront</code> and must include a trailing slash (for
   *             example, <code>/cloudfront/test/</code>).</p>
   *          </note>
   */
  Path?: string;

  /**
   * <p>The contents of the private key in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  PrivateKey: string | undefined;

  /**
   * <p>The name for the server certificate. Do not include the path in this value. The name of
   *          the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;
}

export namespace UploadServerCertificateRequest {
  export const filterSensitiveLog = (
    obj: UploadServerCertificateRequest
  ): any => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UploadServerCertificateRequest =>
    __isa(o, "UploadServerCertificateRequest");
}

/**
 * <p>Contains the response to a successful <a>UploadServerCertificate</a>
 *       request. </p>
 */
export interface UploadServerCertificateResponse {
  __type?: "UploadServerCertificateResponse";
  /**
   * <p>The meta information of the uploaded server certificate without its certificate body,
   *          certificate chain, and private key.</p>
   */
  ServerCertificateMetadata?: ServerCertificateMetadata;
}

export namespace UploadServerCertificateResponse {
  export const filterSensitiveLog = (
    obj: UploadServerCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadServerCertificateResponse =>
    __isa(o, "UploadServerCertificateResponse");
}

export interface UploadSigningCertificateRequest {
  __type?: "UploadSigningCertificateRequest";
  /**
   * <p>The contents of the signing certificate.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The name of the user the signing certificate is for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace UploadSigningCertificateRequest {
  export const filterSensitiveLog = (
    obj: UploadSigningCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadSigningCertificateRequest =>
    __isa(o, "UploadSigningCertificateRequest");
}

/**
 * <p>Contains the response to a successful <a>UploadSigningCertificate</a>
 *       request. </p>
 */
export interface UploadSigningCertificateResponse {
  __type?: "UploadSigningCertificateResponse";
  /**
   * <p>Information about the certificate.</p>
   */
  Certificate: SigningCertificate | undefined;
}

export namespace UploadSigningCertificateResponse {
  export const filterSensitiveLog = (
    obj: UploadSigningCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadSigningCertificateResponse =>
    __isa(o, "UploadSigningCertificateResponse");
}

export interface UploadSSHPublicKeyRequest {
  __type?: "UploadSSHPublicKeyRequest";
  /**
   * <p>The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. The
   *          minimum bit-length of the public key is 2048 bits. For example, you can generate a 2048-bit
   *          key, and the resulting PEM file is 1679 bytes long.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (\u0020) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through \u00FF)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (\u0009), line feed (\u000A), and
   *     carriage return (\u000D)</p>
   *             </li>
   *          </ul>
   */
  SSHPublicKeyBody: string | undefined;

  /**
   * <p>The name of the IAM user to associate the SSH public key with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace UploadSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: UploadSSHPublicKeyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadSSHPublicKeyRequest =>
    __isa(o, "UploadSSHPublicKeyRequest");
}

/**
 * <p>Contains the response to a successful <a>UploadSSHPublicKey</a>
 *       request.</p>
 */
export interface UploadSSHPublicKeyResponse {
  __type?: "UploadSSHPublicKeyResponse";
  /**
   * <p>Contains information about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

export namespace UploadSSHPublicKeyResponse {
  export const filterSensitiveLog = (obj: UploadSSHPublicKeyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadSSHPublicKeyResponse =>
    __isa(o, "UploadSSHPublicKeyResponse");
}

/**
 * <p>Contains information about an IAM user entity.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListUsers</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface User {
  __type?: "User";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs
   *          and how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user's password was last used to sign in to an AWS website. For
   *          a list of AWS websites that capture a user's last sign-in time, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Credential
   *             Reports</a> topic in the <i>IAM User Guide</i>. If a password is
   *          used more than once in a five-minute span, only the first use is returned in this field. If
   *          the field is null (no value), then it indicates that they never signed in with a password.
   *          This can be because:</p>
   *          <ul>
   *             <li>
   *                <p>The user never had a password.</p>
   *             </li>
   *             <li>
   *                <p>A password exists but has not been used since IAM started tracking this
   *                information on October 20, 2014.</p>
   *             </li>
   *          </ul>
   *          <p>A null value does not mean that the user <i>never</i> had a password.
   *          Also, if the user does not currently have a password but had one in the past, then this
   *          field contains the date and time the most recent password was used.</p>
   *          <p>This value is returned only in the <a>GetUser</a> and <a>ListUsers</a> operations. </p>
   */
  PasswordLastUsed?: Date;

  /**
   * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path: string | undefined;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the user.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are associated with the specified user. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The friendly name identifying the user.</p>
   */
  UserName: string | undefined;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj
  });
  export const isa = (o: any): o is User => __isa(o, "User");
}

/**
 * <p>Contains information about an IAM user, including all the user's policies and all the
 *          IAM groups the user is in.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface UserDetail {
  __type?: "UserDetail";
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>A list of the managed policies attached to the user.</p>
   */
  AttachedManagedPolicies?: AttachedPolicy[];

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of IAM groups that the user is in.</p>
   */
  GroupList?: string[];

  /**
   * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the user.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are associated with the specified user. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId?: string;

  /**
   * <p>The friendly name identifying the user.</p>
   */
  UserName?: string;

  /**
   * <p>A list of the inline policies embedded in the user.</p>
   */
  UserPolicyList?: PolicyDetail[];
}

export namespace UserDetail {
  export const filterSensitiveLog = (obj: UserDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserDetail => __isa(o, "UserDetail");
}

/**
 * <p>Contains information about a virtual MFA device.</p>
 */
export interface VirtualMFADevice {
  __type?: "VirtualMFADevice";
  /**
   * <p> The base32 seed defined as specified in <a href="https://tools.ietf.org/html/rfc3548.txt">RFC3548</a>. The <code>Base32StringSeed</code> is base64-encoded. </p>
   */
  Base32StringSeed?: Uint8Array;

  /**
   * <p>The date and time on which the virtual MFA device was enabled.</p>
   */
  EnableDate?: Date;

  /**
   * <p> A QR code PNG image that encodes
   *             <code>otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String</code>
   *          where <code>$virtualMFADeviceName</code> is one of the create call arguments.
   *             <code>AccountName</code> is the user name if set (otherwise, the account ID otherwise),
   *          and <code>Base32String</code> is the seed in base32 format. The <code>Base32String</code>
   *          value is base64-encoded. </p>
   */
  QRCodePNG?: Uint8Array;

  /**
   * <p>The serial number associated with <code>VirtualMFADevice</code>.</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>The IAM user associated with this virtual MFA device.</p>
   */
  User?: User;
}

export namespace VirtualMFADevice {
  export const filterSensitiveLog = (obj: VirtualMFADevice): any => ({
    ...obj,
    ...(obj.Base32StringSeed && { Base32StringSeed: SENSITIVE_STRING }),
    ...(obj.QRCodePNG && { QRCodePNG: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is VirtualMFADevice =>
    __isa(o, "VirtualMFADevice");
}
