import * as _smithy from "@aws-sdk/smithy-client";
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
  export function isa(o: any): o is AccessDetail {
    return _smithy.isa(o, "AccessDetail");
  }
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
  export function isa(o: any): o is AccessKey {
    return _smithy.isa(o, "AccessKey");
  }
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
  export function isa(o: any): o is AccessKeyLastUsed {
    return _smithy.isa(o, "AccessKeyLastUsed");
  }
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
  export function isa(o: any): o is AccessKeyMetadata {
    return _smithy.isa(o, "AccessKeyMetadata");
  }
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
  export function isa(o: any): o is AddClientIDToOpenIDConnectProviderRequest {
    return _smithy.isa(o, "AddClientIDToOpenIDConnectProviderRequest");
  }
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
  export function isa(o: any): o is AddRoleToInstanceProfileRequest {
    return _smithy.isa(o, "AddRoleToInstanceProfileRequest");
  }
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
  export function isa(o: any): o is AddUserToGroupRequest {
    return _smithy.isa(o, "AddUserToGroupRequest");
  }
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
  export function isa(o: any): o is AttachGroupPolicyRequest {
    return _smithy.isa(o, "AttachGroupPolicyRequest");
  }
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
  export function isa(o: any): o is AttachRolePolicyRequest {
    return _smithy.isa(o, "AttachRolePolicyRequest");
  }
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
  export function isa(o: any): o is AttachUserPolicyRequest {
    return _smithy.isa(o, "AttachUserPolicyRequest");
  }
}

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
  export function isa(o: any): o is AttachedPermissionsBoundary {
    return _smithy.isa(o, "AttachedPermissionsBoundary");
  }
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
  export function isa(o: any): o is AttachedPolicy {
    return _smithy.isa(o, "AttachedPolicy");
  }
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
  export function isa(o: any): o is ChangePasswordRequest {
    return _smithy.isa(o, "ChangePasswordRequest");
  }
}

/**
 * <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
 */
export interface ConcurrentModificationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConcurrentModificationException";
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return _smithy.isa(o, "ConcurrentModificationException");
  }
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
  ContextKeyValues?: Array<string>;
}

export namespace ContextEntry {
  export function isa(o: any): o is ContextEntry {
    return _smithy.isa(o, "ContextEntry");
  }
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
  export function isa(o: any): o is CreateAccessKeyRequest {
    return _smithy.isa(o, "CreateAccessKeyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateAccessKey</a> request.
 *     </p>
 */
export interface CreateAccessKeyResponse extends $MetadataBearer {
  __type?: "CreateAccessKeyResponse";
  /**
   * <p>A structure with details about the access key.</p>
   */
  AccessKey: AccessKey | undefined;
}

export namespace CreateAccessKeyResponse {
  export function isa(o: any): o is CreateAccessKeyResponse {
    return _smithy.isa(o, "CreateAccessKeyResponse");
  }
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
  export function isa(o: any): o is CreateAccountAliasRequest {
    return _smithy.isa(o, "CreateAccountAliasRequest");
  }
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
  export function isa(o: any): o is CreateGroupRequest {
    return _smithy.isa(o, "CreateGroupRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateGroup</a> request. </p>
 */
export interface CreateGroupResponse extends $MetadataBearer {
  __type?: "CreateGroupResponse";
  /**
   * <p>A structure containing details about the new group.</p>
   */
  Group: Group | undefined;
}

export namespace CreateGroupResponse {
  export function isa(o: any): o is CreateGroupResponse {
    return _smithy.isa(o, "CreateGroupResponse");
  }
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
  export function isa(o: any): o is CreateInstanceProfileRequest {
    return _smithy.isa(o, "CreateInstanceProfileRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateInstanceProfile</a> request.
 *     </p>
 */
export interface CreateInstanceProfileResponse extends $MetadataBearer {
  __type?: "CreateInstanceProfileResponse";
  /**
   * <p>A structure containing details about the new instance profile.</p>
   */
  InstanceProfile: InstanceProfile | undefined;
}

export namespace CreateInstanceProfileResponse {
  export function isa(o: any): o is CreateInstanceProfileResponse {
    return _smithy.isa(o, "CreateInstanceProfileResponse");
  }
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
  export function isa(o: any): o is CreateLoginProfileRequest {
    return _smithy.isa(o, "CreateLoginProfileRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateLoginProfile</a> request.
 *     </p>
 */
export interface CreateLoginProfileResponse extends $MetadataBearer {
  __type?: "CreateLoginProfileResponse";
  /**
   * <p>A structure containing the user name and password create date.</p>
   */
  LoginProfile: LoginProfile | undefined;
}

export namespace CreateLoginProfileResponse {
  export function isa(o: any): o is CreateLoginProfileResponse {
    return _smithy.isa(o, "CreateLoginProfileResponse");
  }
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
  ClientIDList?: Array<string>;

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
  ThumbprintList: Array<string> | undefined;

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
  export function isa(o: any): o is CreateOpenIDConnectProviderRequest {
    return _smithy.isa(o, "CreateOpenIDConnectProviderRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateOpenIDConnectProvider</a>
 *       request. </p>
 */
export interface CreateOpenIDConnectProviderResponse extends $MetadataBearer {
  __type?: "CreateOpenIDConnectProviderResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is created.
   *          For more information, see <a>OpenIDConnectProviderListEntry</a>. </p>
   */
  OpenIDConnectProviderArn?: string;
}

export namespace CreateOpenIDConnectProviderResponse {
  export function isa(o: any): o is CreateOpenIDConnectProviderResponse {
    return _smithy.isa(o, "CreateOpenIDConnectProviderResponse");
  }
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
  export function isa(o: any): o is CreatePolicyRequest {
    return _smithy.isa(o, "CreatePolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreatePolicy</a> request.
 *     </p>
 */
export interface CreatePolicyResponse extends $MetadataBearer {
  __type?: "CreatePolicyResponse";
  /**
   * <p>A structure containing details about the new policy.</p>
   */
  Policy?: Policy;
}

export namespace CreatePolicyResponse {
  export function isa(o: any): o is CreatePolicyResponse {
    return _smithy.isa(o, "CreatePolicyResponse");
  }
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
  export function isa(o: any): o is CreatePolicyVersionRequest {
    return _smithy.isa(o, "CreatePolicyVersionRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreatePolicyVersion</a> request.
 *     </p>
 */
export interface CreatePolicyVersionResponse extends $MetadataBearer {
  __type?: "CreatePolicyVersionResponse";
  /**
   * <p>A structure containing details about the new policy version.</p>
   */
  PolicyVersion?: PolicyVersion;
}

export namespace CreatePolicyVersionResponse {
  export function isa(o: any): o is CreatePolicyVersionResponse {
    return _smithy.isa(o, "CreatePolicyVersionResponse");
  }
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
  Tags?: Array<Tag>;
}

export namespace CreateRoleRequest {
  export function isa(o: any): o is CreateRoleRequest {
    return _smithy.isa(o, "CreateRoleRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateRole</a> request. </p>
 */
export interface CreateRoleResponse extends $MetadataBearer {
  __type?: "CreateRoleResponse";
  /**
   * <p>A structure containing details about the new role.</p>
   */
  Role: Role | undefined;
}

export namespace CreateRoleResponse {
  export function isa(o: any): o is CreateRoleResponse {
    return _smithy.isa(o, "CreateRoleResponse");
  }
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
  export function isa(o: any): o is CreateSAMLProviderRequest {
    return _smithy.isa(o, "CreateSAMLProviderRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateSAMLProvider</a> request.
 *     </p>
 */
export interface CreateSAMLProviderResponse extends $MetadataBearer {
  __type?: "CreateSAMLProviderResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the new SAML provider resource in IAM.</p>
   */
  SAMLProviderArn?: string;
}

export namespace CreateSAMLProviderResponse {
  export function isa(o: any): o is CreateSAMLProviderResponse {
    return _smithy.isa(o, "CreateSAMLProviderResponse");
  }
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
  export function isa(o: any): o is CreateServiceLinkedRoleRequest {
    return _smithy.isa(o, "CreateServiceLinkedRoleRequest");
  }
}

export interface CreateServiceLinkedRoleResponse extends $MetadataBearer {
  __type?: "CreateServiceLinkedRoleResponse";
  /**
   * <p>A <a>Role</a> object that contains details about the newly created
   *          role.</p>
   */
  Role?: Role;
}

export namespace CreateServiceLinkedRoleResponse {
  export function isa(o: any): o is CreateServiceLinkedRoleResponse {
    return _smithy.isa(o, "CreateServiceLinkedRoleResponse");
  }
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
  export function isa(o: any): o is CreateServiceSpecificCredentialRequest {
    return _smithy.isa(o, "CreateServiceSpecificCredentialRequest");
  }
}

export interface CreateServiceSpecificCredentialResponse
  extends $MetadataBearer {
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
  export function isa(o: any): o is CreateServiceSpecificCredentialResponse {
    return _smithy.isa(o, "CreateServiceSpecificCredentialResponse");
  }
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
  Tags?: Array<Tag>;

  /**
   * <p>The name of the user to create.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  UserName: string | undefined;
}

export namespace CreateUserRequest {
  export function isa(o: any): o is CreateUserRequest {
    return _smithy.isa(o, "CreateUserRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateUser</a> request. </p>
 */
export interface CreateUserResponse extends $MetadataBearer {
  __type?: "CreateUserResponse";
  /**
   * <p>A structure with details about the new IAM user.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  export function isa(o: any): o is CreateUserResponse {
    return _smithy.isa(o, "CreateUserResponse");
  }
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
  export function isa(o: any): o is CreateVirtualMFADeviceRequest {
    return _smithy.isa(o, "CreateVirtualMFADeviceRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>CreateVirtualMFADevice</a> request.
 *     </p>
 */
export interface CreateVirtualMFADeviceResponse extends $MetadataBearer {
  __type?: "CreateVirtualMFADeviceResponse";
  /**
   * <p>A structure containing details about the new virtual MFA device.</p>
   */
  VirtualMFADevice: VirtualMFADevice | undefined;
}

export namespace CreateVirtualMFADeviceResponse {
  export function isa(o: any): o is CreateVirtualMFADeviceResponse {
    return _smithy.isa(o, "CreateVirtualMFADeviceResponse");
  }
}

/**
 * <p>The request was rejected because the most recent credential report has expired. To
 *       generate a new credential report, use <a>GenerateCredentialReport</a>. For more
 *       information about credential report expiration, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export interface CredentialReportExpiredException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "CredentialReportExpiredException";
  name: "CredentialReportExpiredException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportExpiredException {
  export function isa(o: any): o is CredentialReportExpiredException {
    return _smithy.isa(o, "CredentialReportExpiredException");
  }
}

/**
 * <p>The request was rejected because the credential report does not exist. To generate a
 *       credential report, use <a>GenerateCredentialReport</a>.</p>
 */
export interface CredentialReportNotPresentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "CredentialReportNotPresentException";
  name: "CredentialReportNotPresentException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportNotPresentException {
  export function isa(o: any): o is CredentialReportNotPresentException {
    return _smithy.isa(o, "CredentialReportNotPresentException");
  }
}

/**
 * <p>The request was rejected because the credential report is still being
 *       generated.</p>
 */
export interface CredentialReportNotReadyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "CredentialReportNotReadyException";
  name: "CredentialReportNotReadyException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportNotReadyException {
  export function isa(o: any): o is CredentialReportNotReadyException {
    return _smithy.isa(o, "CredentialReportNotReadyException");
  }
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
  export function isa(o: any): o is DeactivateMFADeviceRequest {
    return _smithy.isa(o, "DeactivateMFADeviceRequest");
  }
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
  export function isa(o: any): o is DeleteAccessKeyRequest {
    return _smithy.isa(o, "DeleteAccessKeyRequest");
  }
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
  export function isa(o: any): o is DeleteAccountAliasRequest {
    return _smithy.isa(o, "DeleteAccountAliasRequest");
  }
}

/**
 * <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 */
export interface DeleteConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeleteConflictException";
  name: "DeleteConflictException";
  $fault: "client";
  message?: string;
}

export namespace DeleteConflictException {
  export function isa(o: any): o is DeleteConflictException {
    return _smithy.isa(o, "DeleteConflictException");
  }
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
  export function isa(o: any): o is DeleteGroupPolicyRequest {
    return _smithy.isa(o, "DeleteGroupPolicyRequest");
  }
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
  export function isa(o: any): o is DeleteGroupRequest {
    return _smithy.isa(o, "DeleteGroupRequest");
  }
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
  export function isa(o: any): o is DeleteInstanceProfileRequest {
    return _smithy.isa(o, "DeleteInstanceProfileRequest");
  }
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
  export function isa(o: any): o is DeleteLoginProfileRequest {
    return _smithy.isa(o, "DeleteLoginProfileRequest");
  }
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
  export function isa(o: any): o is DeleteOpenIDConnectProviderRequest {
    return _smithy.isa(o, "DeleteOpenIDConnectProviderRequest");
  }
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
  export function isa(o: any): o is DeletePolicyRequest {
    return _smithy.isa(o, "DeletePolicyRequest");
  }
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
  export function isa(o: any): o is DeletePolicyVersionRequest {
    return _smithy.isa(o, "DeletePolicyVersionRequest");
  }
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
  export function isa(o: any): o is DeleteRolePermissionsBoundaryRequest {
    return _smithy.isa(o, "DeleteRolePermissionsBoundaryRequest");
  }
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
  export function isa(o: any): o is DeleteRolePolicyRequest {
    return _smithy.isa(o, "DeleteRolePolicyRequest");
  }
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
  export function isa(o: any): o is DeleteRoleRequest {
    return _smithy.isa(o, "DeleteRoleRequest");
  }
}

export interface DeleteSAMLProviderRequest {
  __type?: "DeleteSAMLProviderRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to delete.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace DeleteSAMLProviderRequest {
  export function isa(o: any): o is DeleteSAMLProviderRequest {
    return _smithy.isa(o, "DeleteSAMLProviderRequest");
  }
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
  export function isa(o: any): o is DeleteSSHPublicKeyRequest {
    return _smithy.isa(o, "DeleteSSHPublicKeyRequest");
  }
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
  export function isa(o: any): o is DeleteServerCertificateRequest {
    return _smithy.isa(o, "DeleteServerCertificateRequest");
  }
}

export interface DeleteServiceLinkedRoleRequest {
  __type?: "DeleteServiceLinkedRoleRequest";
  /**
   * <p>The name of the service-linked role to be deleted.</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteServiceLinkedRoleRequest {
  export function isa(o: any): o is DeleteServiceLinkedRoleRequest {
    return _smithy.isa(o, "DeleteServiceLinkedRoleRequest");
  }
}

export interface DeleteServiceLinkedRoleResponse extends $MetadataBearer {
  __type?: "DeleteServiceLinkedRoleResponse";
  /**
   * <p>The deletion task identifier that you can use to check the status of the deletion. This
   *          identifier is returned in the format
   *             <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
   */
  DeletionTaskId: string | undefined;
}

export namespace DeleteServiceLinkedRoleResponse {
  export function isa(o: any): o is DeleteServiceLinkedRoleResponse {
    return _smithy.isa(o, "DeleteServiceLinkedRoleResponse");
  }
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
  export function isa(o: any): o is DeleteServiceSpecificCredentialRequest {
    return _smithy.isa(o, "DeleteServiceSpecificCredentialRequest");
  }
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
  export function isa(o: any): o is DeleteSigningCertificateRequest {
    return _smithy.isa(o, "DeleteSigningCertificateRequest");
  }
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
  export function isa(o: any): o is DeleteUserPermissionsBoundaryRequest {
    return _smithy.isa(o, "DeleteUserPermissionsBoundaryRequest");
  }
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
  export function isa(o: any): o is DeleteUserPolicyRequest {
    return _smithy.isa(o, "DeleteUserPolicyRequest");
  }
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
  export function isa(o: any): o is DeleteUserRequest {
    return _smithy.isa(o, "DeleteUserRequest");
  }
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
  export function isa(o: any): o is DeleteVirtualMFADeviceRequest {
    return _smithy.isa(o, "DeleteVirtualMFADeviceRequest");
  }
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
  RoleUsageList?: Array<RoleUsageType>;
}

export namespace DeletionTaskFailureReasonType {
  export function isa(o: any): o is DeletionTaskFailureReasonType {
    return _smithy.isa(o, "DeletionTaskFailureReasonType");
  }
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
  export function isa(o: any): o is DetachGroupPolicyRequest {
    return _smithy.isa(o, "DetachGroupPolicyRequest");
  }
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
  export function isa(o: any): o is DetachRolePolicyRequest {
    return _smithy.isa(o, "DetachRolePolicyRequest");
  }
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
  export function isa(o: any): o is DetachUserPolicyRequest {
    return _smithy.isa(o, "DetachUserPolicyRequest");
  }
}

/**
 * <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 */
export interface DuplicateCertificateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DuplicateCertificateException";
  name: "DuplicateCertificateException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateCertificateException {
  export function isa(o: any): o is DuplicateCertificateException {
    return _smithy.isa(o, "DuplicateCertificateException");
  }
}

/**
 * <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 */
export interface DuplicateSSHPublicKeyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DuplicateSSHPublicKeyException";
  name: "DuplicateSSHPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateSSHPublicKeyException {
  export function isa(o: any): o is DuplicateSSHPublicKeyException {
    return _smithy.isa(o, "DuplicateSSHPublicKeyException");
  }
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
  export function isa(o: any): o is EnableMFADeviceRequest {
    return _smithy.isa(o, "EnableMFADeviceRequest");
  }
}

/**
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 */
export interface EntityAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "EntityAlreadyExistsException";
  name: "EntityAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace EntityAlreadyExistsException {
  export function isa(o: any): o is EntityAlreadyExistsException {
    return _smithy.isa(o, "EntityAlreadyExistsException");
  }
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
  export function isa(o: any): o is EntityDetails {
    return _smithy.isa(o, "EntityDetails");
  }
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
  export function isa(o: any): o is EntityInfo {
    return _smithy.isa(o, "EntityInfo");
  }
}

/**
 * <p>The request was rejected because it referenced an entity that is temporarily
 *       unmodifiable, such as a user name that was deleted and then recreated. The error indicates
 *       that the request is likely to succeed if you try again after waiting several minutes. The
 *       error message describes the entity.</p>
 */
export interface EntityTemporarilyUnmodifiableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "EntityTemporarilyUnmodifiableException";
  name: "EntityTemporarilyUnmodifiableException";
  $fault: "client";
  message?: string;
}

export namespace EntityTemporarilyUnmodifiableException {
  export function isa(o: any): o is EntityTemporarilyUnmodifiableException {
    return _smithy.isa(o, "EntityTemporarilyUnmodifiableException");
  }
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
  export function isa(o: any): o is ErrorDetails {
    return _smithy.isa(o, "ErrorDetails");
  }
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
  MatchedStatements?: Array<Statement>;

  /**
   * <p>A list of context keys that are required by the included input policies but that were
   *          not provided by one of the input parameters. This list is used when the resource in a
   *          simulation is "*", either explicitly, or when the <code>ResourceArns</code> parameter
   *          blank. If you include a list of resources, then any missing context values are instead
   *          included under the <code>ResourceSpecificResults</code> section. To discover the context
   *          keys used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: Array<string>;

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
  ResourceSpecificResults?: Array<ResourceSpecificResult>;
}

export namespace EvaluationResult {
  export function isa(o: any): o is EvaluationResult {
    return _smithy.isa(o, "EvaluationResult");
  }
}

/**
 * <p>Contains the response to a successful <a>GenerateCredentialReport</a>
 *       request. </p>
 */
export interface GenerateCredentialReportResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GenerateCredentialReportResponse {
    return _smithy.isa(o, "GenerateCredentialReportResponse");
  }
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
  export function isa(o: any): o is GenerateOrganizationsAccessReportRequest {
    return _smithy.isa(o, "GenerateOrganizationsAccessReportRequest");
  }
}

export interface GenerateOrganizationsAccessReportResponse
  extends $MetadataBearer {
  __type?: "GenerateOrganizationsAccessReportResponse";
  /**
   * <p>The job identifier that you can use in the <a>GetOrganizationsAccessReport</a> operation.</p>
   */
  JobId?: string;
}

export namespace GenerateOrganizationsAccessReportResponse {
  export function isa(o: any): o is GenerateOrganizationsAccessReportResponse {
    return _smithy.isa(o, "GenerateOrganizationsAccessReportResponse");
  }
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
  export function isa(o: any): o is GenerateServiceLastAccessedDetailsRequest {
    return _smithy.isa(o, "GenerateServiceLastAccessedDetailsRequest");
  }
}

export interface GenerateServiceLastAccessedDetailsResponse
  extends $MetadataBearer {
  __type?: "GenerateServiceLastAccessedDetailsResponse";
  /**
   * <p>The job ID that you can use in the <a>GetServiceLastAccessedDetails</a> or
   *             <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
   */
  JobId?: string;
}

export namespace GenerateServiceLastAccessedDetailsResponse {
  export function isa(o: any): o is GenerateServiceLastAccessedDetailsResponse {
    return _smithy.isa(o, "GenerateServiceLastAccessedDetailsResponse");
  }
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
  export function isa(o: any): o is GetAccessKeyLastUsedRequest {
    return _smithy.isa(o, "GetAccessKeyLastUsedRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetAccessKeyLastUsed</a> request.
 *       It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned
 *       by the <a>ListAccessKeys</a> action.</p>
 */
export interface GetAccessKeyLastUsedResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetAccessKeyLastUsedResponse {
    return _smithy.isa(o, "GetAccessKeyLastUsedResponse");
  }
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
  Filter?: Array<EntityType | string>;

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
  export function isa(o: any): o is GetAccountAuthorizationDetailsRequest {
    return _smithy.isa(o, "GetAccountAuthorizationDetailsRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetAccountAuthorizationDetails</a>
 *       request. </p>
 */
export interface GetAccountAuthorizationDetailsResponse
  extends $MetadataBearer {
  __type?: "GetAccountAuthorizationDetailsResponse";
  /**
   * <p>A list containing information about IAM groups.</p>
   */
  GroupDetailList?: Array<GroupDetail>;

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
  Policies?: Array<ManagedPolicyDetail>;

  /**
   * <p>A list containing information about IAM roles.</p>
   */
  RoleDetailList?: Array<RoleDetail>;

  /**
   * <p>A list containing information about IAM users.</p>
   */
  UserDetailList?: Array<UserDetail>;
}

export namespace GetAccountAuthorizationDetailsResponse {
  export function isa(o: any): o is GetAccountAuthorizationDetailsResponse {
    return _smithy.isa(o, "GetAccountAuthorizationDetailsResponse");
  }
}

/**
 * <p>Contains the response to a successful <a>GetAccountPasswordPolicy</a>
 *       request. </p>
 */
export interface GetAccountPasswordPolicyResponse extends $MetadataBearer {
  __type?: "GetAccountPasswordPolicyResponse";
  /**
   * <p>A structure that contains details about the account's password policy.</p>
   */
  PasswordPolicy: PasswordPolicy | undefined;
}

export namespace GetAccountPasswordPolicyResponse {
  export function isa(o: any): o is GetAccountPasswordPolicyResponse {
    return _smithy.isa(o, "GetAccountPasswordPolicyResponse");
  }
}

/**
 * <p>Contains the response to a successful <a>GetAccountSummary</a> request.
 *     </p>
 */
export interface GetAccountSummaryResponse extends $MetadataBearer {
  __type?: "GetAccountSummaryResponse";
  /**
   * <p>A set of key–value pairs containing information about IAM entity usage and
   *          IAM quotas.</p>
   */
  SummaryMap?: { [key: string]: number };
}

export namespace GetAccountSummaryResponse {
  export function isa(o: any): o is GetAccountSummaryResponse {
    return _smithy.isa(o, "GetAccountSummaryResponse");
  }
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
  PolicyInputList: Array<string> | undefined;
}

export namespace GetContextKeysForCustomPolicyRequest {
  export function isa(o: any): o is GetContextKeysForCustomPolicyRequest {
    return _smithy.isa(o, "GetContextKeysForCustomPolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. </p>
 */
export interface GetContextKeysForPolicyResponse extends $MetadataBearer {
  __type?: "GetContextKeysForPolicyResponse";
  /**
   * <p>The list of context keys that are referenced in the input policies.</p>
   */
  ContextKeyNames?: Array<string>;
}

export namespace GetContextKeysForPolicyResponse {
  export function isa(o: any): o is GetContextKeysForPolicyResponse {
    return _smithy.isa(o, "GetContextKeysForPolicyResponse");
  }
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
  PolicyInputList?: Array<string>;

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
  export function isa(o: any): o is GetContextKeysForPrincipalPolicyRequest {
    return _smithy.isa(o, "GetContextKeysForPrincipalPolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetCredentialReport</a> request.
 *     </p>
 */
export interface GetCredentialReportResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetCredentialReportResponse {
    return _smithy.isa(o, "GetCredentialReportResponse");
  }
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
  export function isa(o: any): o is GetGroupPolicyRequest {
    return _smithy.isa(o, "GetGroupPolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetGroupPolicy</a> request.
 *     </p>
 */
export interface GetGroupPolicyResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetGroupPolicyResponse {
    return _smithy.isa(o, "GetGroupPolicyResponse");
  }
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
  export function isa(o: any): o is GetGroupRequest {
    return _smithy.isa(o, "GetGroupRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetGroup</a> request. </p>
 */
export interface GetGroupResponse extends $MetadataBearer {
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
  Users: Array<User> | undefined;
}

export namespace GetGroupResponse {
  export function isa(o: any): o is GetGroupResponse {
    return _smithy.isa(o, "GetGroupResponse");
  }
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
  export function isa(o: any): o is GetInstanceProfileRequest {
    return _smithy.isa(o, "GetInstanceProfileRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetInstanceProfile</a> request.
 *     </p>
 */
export interface GetInstanceProfileResponse extends $MetadataBearer {
  __type?: "GetInstanceProfileResponse";
  /**
   * <p>A structure containing details about the instance profile.</p>
   */
  InstanceProfile: InstanceProfile | undefined;
}

export namespace GetInstanceProfileResponse {
  export function isa(o: any): o is GetInstanceProfileResponse {
    return _smithy.isa(o, "GetInstanceProfileResponse");
  }
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
  export function isa(o: any): o is GetLoginProfileRequest {
    return _smithy.isa(o, "GetLoginProfileRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetLoginProfile</a> request.
 *     </p>
 */
export interface GetLoginProfileResponse extends $MetadataBearer {
  __type?: "GetLoginProfileResponse";
  /**
   * <p>A structure containing the user name and password create date for the user.</p>
   */
  LoginProfile: LoginProfile | undefined;
}

export namespace GetLoginProfileResponse {
  export function isa(o: any): o is GetLoginProfileResponse {
    return _smithy.isa(o, "GetLoginProfileResponse");
  }
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
  export function isa(o: any): o is GetOpenIDConnectProviderRequest {
    return _smithy.isa(o, "GetOpenIDConnectProviderRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetOpenIDConnectProvider</a>
 *       request. </p>
 */
export interface GetOpenIDConnectProviderResponse extends $MetadataBearer {
  __type?: "GetOpenIDConnectProviderResponse";
  /**
   * <p>A list of client IDs (also known as audiences) that are associated with the specified
   *          IAM OIDC provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  ClientIDList?: Array<string>;

  /**
   * <p>The date and time when the IAM OIDC provider resource object was created in the AWS
   *          account.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OIDC
   *          provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>. </p>
   */
  ThumbprintList?: Array<string>;

  /**
   * <p>The URL that the IAM OIDC provider resource object is associated with. For more
   *          information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  Url?: string;
}

export namespace GetOpenIDConnectProviderResponse {
  export function isa(o: any): o is GetOpenIDConnectProviderResponse {
    return _smithy.isa(o, "GetOpenIDConnectProviderResponse");
  }
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
  export function isa(o: any): o is GetOrganizationsAccessReportRequest {
    return _smithy.isa(o, "GetOrganizationsAccessReportRequest");
  }
}

export interface GetOrganizationsAccessReportResponse extends $MetadataBearer {
  __type?: "GetOrganizationsAccessReportResponse";
  /**
   * <p>An object that contains details about the most recent attempt to access the
   *          service.</p>
   */
  AccessDetails?: Array<AccessDetail>;

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
  export function isa(o: any): o is GetOrganizationsAccessReportResponse {
    return _smithy.isa(o, "GetOrganizationsAccessReportResponse");
  }
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
  export function isa(o: any): o is GetPolicyRequest {
    return _smithy.isa(o, "GetPolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetPolicy</a> request. </p>
 */
export interface GetPolicyResponse extends $MetadataBearer {
  __type?: "GetPolicyResponse";
  /**
   * <p>A structure containing details about the policy.</p>
   */
  Policy?: Policy;
}

export namespace GetPolicyResponse {
  export function isa(o: any): o is GetPolicyResponse {
    return _smithy.isa(o, "GetPolicyResponse");
  }
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
  export function isa(o: any): o is GetPolicyVersionRequest {
    return _smithy.isa(o, "GetPolicyVersionRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetPolicyVersion</a> request.
 *     </p>
 */
export interface GetPolicyVersionResponse extends $MetadataBearer {
  __type?: "GetPolicyVersionResponse";
  /**
   * <p>A structure containing details about the policy version.</p>
   */
  PolicyVersion?: PolicyVersion;
}

export namespace GetPolicyVersionResponse {
  export function isa(o: any): o is GetPolicyVersionResponse {
    return _smithy.isa(o, "GetPolicyVersionResponse");
  }
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
  export function isa(o: any): o is GetRolePolicyRequest {
    return _smithy.isa(o, "GetRolePolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetRolePolicy</a> request.
 *     </p>
 */
export interface GetRolePolicyResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetRolePolicyResponse {
    return _smithy.isa(o, "GetRolePolicyResponse");
  }
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
  export function isa(o: any): o is GetRoleRequest {
    return _smithy.isa(o, "GetRoleRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetRole</a> request. </p>
 */
export interface GetRoleResponse extends $MetadataBearer {
  __type?: "GetRoleResponse";
  /**
   * <p>A structure containing details about the IAM role.</p>
   */
  Role: Role | undefined;
}

export namespace GetRoleResponse {
  export function isa(o: any): o is GetRoleResponse {
    return _smithy.isa(o, "GetRoleResponse");
  }
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
  export function isa(o: any): o is GetSAMLProviderRequest {
    return _smithy.isa(o, "GetSAMLProviderRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetSAMLProvider</a> request.
 *     </p>
 */
export interface GetSAMLProviderResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetSAMLProviderResponse {
    return _smithy.isa(o, "GetSAMLProviderResponse");
  }
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
  export function isa(o: any): o is GetSSHPublicKeyRequest {
    return _smithy.isa(o, "GetSSHPublicKeyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetSSHPublicKey</a>
 *       request.</p>
 */
export interface GetSSHPublicKeyResponse extends $MetadataBearer {
  __type?: "GetSSHPublicKeyResponse";
  /**
   * <p>A structure containing details about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

export namespace GetSSHPublicKeyResponse {
  export function isa(o: any): o is GetSSHPublicKeyResponse {
    return _smithy.isa(o, "GetSSHPublicKeyResponse");
  }
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
  export function isa(o: any): o is GetServerCertificateRequest {
    return _smithy.isa(o, "GetServerCertificateRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetServerCertificate</a> request.
 *     </p>
 */
export interface GetServerCertificateResponse extends $MetadataBearer {
  __type?: "GetServerCertificateResponse";
  /**
   * <p>A structure containing details about the server certificate.</p>
   */
  ServerCertificate: ServerCertificate | undefined;
}

export namespace GetServerCertificateResponse {
  export function isa(o: any): o is GetServerCertificateResponse {
    return _smithy.isa(o, "GetServerCertificateResponse");
  }
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
  export function isa(o: any): o is GetServiceLastAccessedDetailsRequest {
    return _smithy.isa(o, "GetServiceLastAccessedDetailsRequest");
  }
}

export interface GetServiceLastAccessedDetailsResponse extends $MetadataBearer {
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
  ServicesLastAccessed: Array<ServiceLastAccessed> | undefined;
}

export namespace GetServiceLastAccessedDetailsResponse {
  export function isa(o: any): o is GetServiceLastAccessedDetailsResponse {
    return _smithy.isa(o, "GetServiceLastAccessedDetailsResponse");
  }
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
  export function isa(
    o: any
  ): o is GetServiceLastAccessedDetailsWithEntitiesRequest {
    return _smithy.isa(o, "GetServiceLastAccessedDetailsWithEntitiesRequest");
  }
}

export interface GetServiceLastAccessedDetailsWithEntitiesResponse
  extends $MetadataBearer {
  __type?: "GetServiceLastAccessedDetailsWithEntitiesResponse";
  /**
   * <p>An <code>EntityDetailsList</code> object that contains details about when an IAM
   *          entity (user or role) used group or policy permissions in an attempt to access the
   *          specified AWS service.</p>
   */
  EntityDetailsList: Array<EntityDetails> | undefined;

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
  export function isa(
    o: any
  ): o is GetServiceLastAccessedDetailsWithEntitiesResponse {
    return _smithy.isa(o, "GetServiceLastAccessedDetailsWithEntitiesResponse");
  }
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
  export function isa(o: any): o is GetServiceLinkedRoleDeletionStatusRequest {
    return _smithy.isa(o, "GetServiceLinkedRoleDeletionStatusRequest");
  }
}

export interface GetServiceLinkedRoleDeletionStatusResponse
  extends $MetadataBearer {
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
  export function isa(o: any): o is GetServiceLinkedRoleDeletionStatusResponse {
    return _smithy.isa(o, "GetServiceLinkedRoleDeletionStatusResponse");
  }
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
  export function isa(o: any): o is GetUserPolicyRequest {
    return _smithy.isa(o, "GetUserPolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetUserPolicy</a> request.
 *     </p>
 */
export interface GetUserPolicyResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetUserPolicyResponse {
    return _smithy.isa(o, "GetUserPolicyResponse");
  }
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
  export function isa(o: any): o is GetUserRequest {
    return _smithy.isa(o, "GetUserRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>GetUser</a> request. </p>
 */
export interface GetUserResponse extends $MetadataBearer {
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
  export function isa(o: any): o is GetUserResponse {
    return _smithy.isa(o, "GetUserResponse");
  }
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
  export function isa(o: any): o is Group {
    return _smithy.isa(o, "Group");
  }
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
  AttachedManagedPolicies?: Array<AttachedPolicy>;

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
  GroupPolicyList?: Array<PolicyDetail>;

  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;
}

export namespace GroupDetail {
  export function isa(o: any): o is GroupDetail {
    return _smithy.isa(o, "GroupDetail");
  }
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
  Roles: Array<Role> | undefined;
}

export namespace InstanceProfile {
  export function isa(o: any): o is InstanceProfile {
    return _smithy.isa(o, "InstanceProfile");
  }
}

/**
 * <p>The request was rejected because the authentication code was not recognized. The error
 *       message describes the specific error.</p>
 */
export interface InvalidAuthenticationCodeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidAuthenticationCodeException";
  name: "InvalidAuthenticationCodeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAuthenticationCodeException {
  export function isa(o: any): o is InvalidAuthenticationCodeException {
    return _smithy.isa(o, "InvalidAuthenticationCodeException");
  }
}

/**
 * <p>The request was rejected because the certificate is invalid.</p>
 */
export interface InvalidCertificateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidCertificateException";
  name: "InvalidCertificateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidCertificateException {
  export function isa(o: any): o is InvalidCertificateException {
    return _smithy.isa(o, "InvalidCertificateException");
  }
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 */
export interface InvalidInputException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidInputException";
  name: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return _smithy.isa(o, "InvalidInputException");
  }
}

/**
 * <p>The request was rejected because the public key is malformed or otherwise
 *       invalid.</p>
 */
export interface InvalidPublicKeyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidPublicKeyException";
  name: "InvalidPublicKeyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPublicKeyException {
  export function isa(o: any): o is InvalidPublicKeyException {
    return _smithy.isa(o, "InvalidPublicKeyException");
  }
}

/**
 * <p>The request was rejected because the type of user for the transaction was
 *       incorrect.</p>
 */
export interface InvalidUserTypeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidUserTypeException";
  name: "InvalidUserTypeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidUserTypeException {
  export function isa(o: any): o is InvalidUserTypeException {
    return _smithy.isa(o, "InvalidUserTypeException");
  }
}

/**
 * <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 */
export interface KeyPairMismatchException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "KeyPairMismatchException";
  name: "KeyPairMismatchException";
  $fault: "client";
  message?: string;
}

export namespace KeyPairMismatchException {
  export function isa(o: any): o is KeyPairMismatchException {
    return _smithy.isa(o, "KeyPairMismatchException");
  }
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       AWS account limits. The error message describes the limit exceeded.</p>
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
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
  export function isa(o: any): o is ListAccessKeysRequest {
    return _smithy.isa(o, "ListAccessKeysRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListAccessKeys</a> request.
 *     </p>
 */
export interface ListAccessKeysResponse extends $MetadataBearer {
  __type?: "ListAccessKeysResponse";
  /**
   * <p>A list of objects containing metadata about the access keys.</p>
   */
  AccessKeyMetadata: Array<AccessKeyMetadata> | undefined;

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
  export function isa(o: any): o is ListAccessKeysResponse {
    return _smithy.isa(o, "ListAccessKeysResponse");
  }
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
  export function isa(o: any): o is ListAccountAliasesRequest {
    return _smithy.isa(o, "ListAccountAliasesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListAccountAliases</a> request.
 *     </p>
 */
export interface ListAccountAliasesResponse extends $MetadataBearer {
  __type?: "ListAccountAliasesResponse";
  /**
   * <p>A list of aliases associated with the account. AWS supports only one alias per
   *          account.</p>
   */
  AccountAliases: Array<string> | undefined;

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
  export function isa(o: any): o is ListAccountAliasesResponse {
    return _smithy.isa(o, "ListAccountAliasesResponse");
  }
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
  export function isa(o: any): o is ListAttachedGroupPoliciesRequest {
    return _smithy.isa(o, "ListAttachedGroupPoliciesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListAttachedGroupPolicies</a>
 *       request. </p>
 */
export interface ListAttachedGroupPoliciesResponse extends $MetadataBearer {
  __type?: "ListAttachedGroupPoliciesResponse";
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: Array<AttachedPolicy>;

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
  export function isa(o: any): o is ListAttachedGroupPoliciesResponse {
    return _smithy.isa(o, "ListAttachedGroupPoliciesResponse");
  }
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
  export function isa(o: any): o is ListAttachedRolePoliciesRequest {
    return _smithy.isa(o, "ListAttachedRolePoliciesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListAttachedRolePolicies</a>
 *       request. </p>
 */
export interface ListAttachedRolePoliciesResponse extends $MetadataBearer {
  __type?: "ListAttachedRolePoliciesResponse";
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: Array<AttachedPolicy>;

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
  export function isa(o: any): o is ListAttachedRolePoliciesResponse {
    return _smithy.isa(o, "ListAttachedRolePoliciesResponse");
  }
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
  export function isa(o: any): o is ListAttachedUserPoliciesRequest {
    return _smithy.isa(o, "ListAttachedUserPoliciesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListAttachedUserPolicies</a>
 *       request. </p>
 */
export interface ListAttachedUserPoliciesResponse extends $MetadataBearer {
  __type?: "ListAttachedUserPoliciesResponse";
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: Array<AttachedPolicy>;

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
  export function isa(o: any): o is ListAttachedUserPoliciesResponse {
    return _smithy.isa(o, "ListAttachedUserPoliciesResponse");
  }
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
  export function isa(o: any): o is ListEntitiesForPolicyRequest {
    return _smithy.isa(o, "ListEntitiesForPolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListEntitiesForPolicy</a> request.
 *     </p>
 */
export interface ListEntitiesForPolicyResponse extends $MetadataBearer {
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
  PolicyGroups?: Array<PolicyGroup>;

  /**
   * <p>A list of IAM roles that the policy is attached to.</p>
   */
  PolicyRoles?: Array<PolicyRole>;

  /**
   * <p>A list of IAM users that the policy is attached to.</p>
   */
  PolicyUsers?: Array<PolicyUser>;
}

export namespace ListEntitiesForPolicyResponse {
  export function isa(o: any): o is ListEntitiesForPolicyResponse {
    return _smithy.isa(o, "ListEntitiesForPolicyResponse");
  }
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
  export function isa(o: any): o is ListGroupPoliciesRequest {
    return _smithy.isa(o, "ListGroupPoliciesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListGroupPolicies</a> request.
 *     </p>
 */
export interface ListGroupPoliciesResponse extends $MetadataBearer {
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
  PolicyNames: Array<string> | undefined;
}

export namespace ListGroupPoliciesResponse {
  export function isa(o: any): o is ListGroupPoliciesResponse {
    return _smithy.isa(o, "ListGroupPoliciesResponse");
  }
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
  export function isa(o: any): o is ListGroupsForUserRequest {
    return _smithy.isa(o, "ListGroupsForUserRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListGroupsForUser</a> request.
 *     </p>
 */
export interface ListGroupsForUserResponse extends $MetadataBearer {
  __type?: "ListGroupsForUserResponse";
  /**
   * <p>A list of groups.</p>
   */
  Groups: Array<Group> | undefined;

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
  export function isa(o: any): o is ListGroupsForUserResponse {
    return _smithy.isa(o, "ListGroupsForUserResponse");
  }
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
  export function isa(o: any): o is ListGroupsRequest {
    return _smithy.isa(o, "ListGroupsRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListGroups</a> request. </p>
 */
export interface ListGroupsResponse extends $MetadataBearer {
  __type?: "ListGroupsResponse";
  /**
   * <p>A list of groups.</p>
   */
  Groups: Array<Group> | undefined;

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
  export function isa(o: any): o is ListGroupsResponse {
    return _smithy.isa(o, "ListGroupsResponse");
  }
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
  export function isa(o: any): o is ListInstanceProfilesForRoleRequest {
    return _smithy.isa(o, "ListInstanceProfilesForRoleRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListInstanceProfilesForRole</a>
 *       request. </p>
 */
export interface ListInstanceProfilesForRoleResponse extends $MetadataBearer {
  __type?: "ListInstanceProfilesForRoleResponse";
  /**
   * <p>A list of instance profiles.</p>
   */
  InstanceProfiles: Array<InstanceProfile> | undefined;

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
  export function isa(o: any): o is ListInstanceProfilesForRoleResponse {
    return _smithy.isa(o, "ListInstanceProfilesForRoleResponse");
  }
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
  export function isa(o: any): o is ListInstanceProfilesRequest {
    return _smithy.isa(o, "ListInstanceProfilesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListInstanceProfiles</a> request.
 *     </p>
 */
export interface ListInstanceProfilesResponse extends $MetadataBearer {
  __type?: "ListInstanceProfilesResponse";
  /**
   * <p>A list of instance profiles.</p>
   */
  InstanceProfiles: Array<InstanceProfile> | undefined;

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
  export function isa(o: any): o is ListInstanceProfilesResponse {
    return _smithy.isa(o, "ListInstanceProfilesResponse");
  }
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
  export function isa(o: any): o is ListMFADevicesRequest {
    return _smithy.isa(o, "ListMFADevicesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListMFADevices</a> request.
 *     </p>
 */
export interface ListMFADevicesResponse extends $MetadataBearer {
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
  MFADevices: Array<MFADevice> | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListMFADevicesResponse {
  export function isa(o: any): o is ListMFADevicesResponse {
    return _smithy.isa(o, "ListMFADevicesResponse");
  }
}

export interface ListOpenIDConnectProvidersRequest {
  __type?: "ListOpenIDConnectProvidersRequest";
}

export namespace ListOpenIDConnectProvidersRequest {
  export function isa(o: any): o is ListOpenIDConnectProvidersRequest {
    return _smithy.isa(o, "ListOpenIDConnectProvidersRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListOpenIDConnectProviders</a>
 *       request. </p>
 */
export interface ListOpenIDConnectProvidersResponse extends $MetadataBearer {
  __type?: "ListOpenIDConnectProvidersResponse";
  /**
   * <p>The list of IAM OIDC provider resource objects defined in the AWS account.</p>
   */
  OpenIDConnectProviderList?: Array<OpenIDConnectProviderListEntry>;
}

export namespace ListOpenIDConnectProvidersResponse {
  export function isa(o: any): o is ListOpenIDConnectProvidersResponse {
    return _smithy.isa(o, "ListOpenIDConnectProvidersResponse");
  }
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
  Policies?: Array<PolicyGrantingServiceAccess>;

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
  export function isa(o: any): o is ListPoliciesGrantingServiceAccessEntry {
    return _smithy.isa(o, "ListPoliciesGrantingServiceAccessEntry");
  }
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
  ServiceNamespaces: Array<string> | undefined;
}

export namespace ListPoliciesGrantingServiceAccessRequest {
  export function isa(o: any): o is ListPoliciesGrantingServiceAccessRequest {
    return _smithy.isa(o, "ListPoliciesGrantingServiceAccessRequest");
  }
}

export interface ListPoliciesGrantingServiceAccessResponse
  extends $MetadataBearer {
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
    | Array<ListPoliciesGrantingServiceAccessEntry>
    | undefined;
}

export namespace ListPoliciesGrantingServiceAccessResponse {
  export function isa(o: any): o is ListPoliciesGrantingServiceAccessResponse {
    return _smithy.isa(o, "ListPoliciesGrantingServiceAccessResponse");
  }
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
  export function isa(o: any): o is ListPoliciesRequest {
    return _smithy.isa(o, "ListPoliciesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListPolicies</a> request.
 *     </p>
 */
export interface ListPoliciesResponse extends $MetadataBearer {
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
  Policies?: Array<Policy>;
}

export namespace ListPoliciesResponse {
  export function isa(o: any): o is ListPoliciesResponse {
    return _smithy.isa(o, "ListPoliciesResponse");
  }
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
  export function isa(o: any): o is ListPolicyVersionsRequest {
    return _smithy.isa(o, "ListPolicyVersionsRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListPolicyVersions</a> request.
 *     </p>
 */
export interface ListPolicyVersionsResponse extends $MetadataBearer {
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
  Versions?: Array<PolicyVersion>;
}

export namespace ListPolicyVersionsResponse {
  export function isa(o: any): o is ListPolicyVersionsResponse {
    return _smithy.isa(o, "ListPolicyVersionsResponse");
  }
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
  export function isa(o: any): o is ListRolePoliciesRequest {
    return _smithy.isa(o, "ListRolePoliciesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListRolePolicies</a> request.
 *     </p>
 */
export interface ListRolePoliciesResponse extends $MetadataBearer {
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
  PolicyNames: Array<string> | undefined;
}

export namespace ListRolePoliciesResponse {
  export function isa(o: any): o is ListRolePoliciesResponse {
    return _smithy.isa(o, "ListRolePoliciesResponse");
  }
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
  export function isa(o: any): o is ListRoleTagsRequest {
    return _smithy.isa(o, "ListRoleTagsRequest");
  }
}

export interface ListRoleTagsResponse extends $MetadataBearer {
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
  Tags: Array<Tag> | undefined;
}

export namespace ListRoleTagsResponse {
  export function isa(o: any): o is ListRoleTagsResponse {
    return _smithy.isa(o, "ListRoleTagsResponse");
  }
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
  export function isa(o: any): o is ListRolesRequest {
    return _smithy.isa(o, "ListRolesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListRoles</a> request. </p>
 */
export interface ListRolesResponse extends $MetadataBearer {
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
  Roles: Array<Role> | undefined;
}

export namespace ListRolesResponse {
  export function isa(o: any): o is ListRolesResponse {
    return _smithy.isa(o, "ListRolesResponse");
  }
}

export interface ListSAMLProvidersRequest {
  __type?: "ListSAMLProvidersRequest";
}

export namespace ListSAMLProvidersRequest {
  export function isa(o: any): o is ListSAMLProvidersRequest {
    return _smithy.isa(o, "ListSAMLProvidersRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListSAMLProviders</a> request.
 *     </p>
 */
export interface ListSAMLProvidersResponse extends $MetadataBearer {
  __type?: "ListSAMLProvidersResponse";
  /**
   * <p>The list of SAML provider resource objects defined in IAM for this AWS
   *          account.</p>
   */
  SAMLProviderList?: Array<SAMLProviderListEntry>;
}

export namespace ListSAMLProvidersResponse {
  export function isa(o: any): o is ListSAMLProvidersResponse {
    return _smithy.isa(o, "ListSAMLProvidersResponse");
  }
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
  export function isa(o: any): o is ListSSHPublicKeysRequest {
    return _smithy.isa(o, "ListSSHPublicKeysRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListSSHPublicKeys</a>
 *       request.</p>
 */
export interface ListSSHPublicKeysResponse extends $MetadataBearer {
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
  SSHPublicKeys?: Array<SSHPublicKeyMetadata>;
}

export namespace ListSSHPublicKeysResponse {
  export function isa(o: any): o is ListSSHPublicKeysResponse {
    return _smithy.isa(o, "ListSSHPublicKeysResponse");
  }
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
  export function isa(o: any): o is ListServerCertificatesRequest {
    return _smithy.isa(o, "ListServerCertificatesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListServerCertificates</a> request.
 *     </p>
 */
export interface ListServerCertificatesResponse extends $MetadataBearer {
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
  ServerCertificateMetadataList: Array<ServerCertificateMetadata> | undefined;
}

export namespace ListServerCertificatesResponse {
  export function isa(o: any): o is ListServerCertificatesResponse {
    return _smithy.isa(o, "ListServerCertificatesResponse");
  }
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
  export function isa(o: any): o is ListServiceSpecificCredentialsRequest {
    return _smithy.isa(o, "ListServiceSpecificCredentialsRequest");
  }
}

export interface ListServiceSpecificCredentialsResponse
  extends $MetadataBearer {
  __type?: "ListServiceSpecificCredentialsResponse";
  /**
   * <p>A list of structures that each contain details about a service-specific
   *          credential.</p>
   */
  ServiceSpecificCredentials?: Array<ServiceSpecificCredentialMetadata>;
}

export namespace ListServiceSpecificCredentialsResponse {
  export function isa(o: any): o is ListServiceSpecificCredentialsResponse {
    return _smithy.isa(o, "ListServiceSpecificCredentialsResponse");
  }
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
  export function isa(o: any): o is ListSigningCertificatesRequest {
    return _smithy.isa(o, "ListSigningCertificatesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListSigningCertificates</a>
 *       request. </p>
 */
export interface ListSigningCertificatesResponse extends $MetadataBearer {
  __type?: "ListSigningCertificatesResponse";
  /**
   * <p>A list of the user's signing certificate information.</p>
   */
  Certificates: Array<SigningCertificate> | undefined;

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
  export function isa(o: any): o is ListSigningCertificatesResponse {
    return _smithy.isa(o, "ListSigningCertificatesResponse");
  }
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
  export function isa(o: any): o is ListUserPoliciesRequest {
    return _smithy.isa(o, "ListUserPoliciesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListUserPolicies</a> request.
 *     </p>
 */
export interface ListUserPoliciesResponse extends $MetadataBearer {
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
  PolicyNames: Array<string> | undefined;
}

export namespace ListUserPoliciesResponse {
  export function isa(o: any): o is ListUserPoliciesResponse {
    return _smithy.isa(o, "ListUserPoliciesResponse");
  }
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
  export function isa(o: any): o is ListUserTagsRequest {
    return _smithy.isa(o, "ListUserTagsRequest");
  }
}

export interface ListUserTagsResponse extends $MetadataBearer {
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
  Tags: Array<Tag> | undefined;
}

export namespace ListUserTagsResponse {
  export function isa(o: any): o is ListUserTagsResponse {
    return _smithy.isa(o, "ListUserTagsResponse");
  }
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
  export function isa(o: any): o is ListUsersRequest {
    return _smithy.isa(o, "ListUsersRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListUsers</a> request. </p>
 */
export interface ListUsersResponse extends $MetadataBearer {
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
  Users: Array<User> | undefined;
}

export namespace ListUsersResponse {
  export function isa(o: any): o is ListUsersResponse {
    return _smithy.isa(o, "ListUsersResponse");
  }
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
  export function isa(o: any): o is ListVirtualMFADevicesRequest {
    return _smithy.isa(o, "ListVirtualMFADevicesRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>ListVirtualMFADevices</a> request.
 *     </p>
 */
export interface ListVirtualMFADevicesResponse extends $MetadataBearer {
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
  VirtualMFADevices: Array<VirtualMFADevice> | undefined;
}

export namespace ListVirtualMFADevicesResponse {
  export function isa(o: any): o is ListVirtualMFADevicesResponse {
    return _smithy.isa(o, "ListVirtualMFADevicesResponse");
  }
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
  export function isa(o: any): o is LoginProfile {
    return _smithy.isa(o, "LoginProfile");
  }
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
  export function isa(o: any): o is MFADevice {
    return _smithy.isa(o, "MFADevice");
  }
}

/**
 * <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 */
export interface MalformedCertificateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MalformedCertificateException";
  name: "MalformedCertificateException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCertificateException {
  export function isa(o: any): o is MalformedCertificateException {
    return _smithy.isa(o, "MalformedCertificateException");
  }
}

/**
 * <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 */
export interface MalformedPolicyDocumentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MalformedPolicyDocumentException";
  name: "MalformedPolicyDocumentException";
  $fault: "client";
  message?: string;
}

export namespace MalformedPolicyDocumentException {
  export function isa(o: any): o is MalformedPolicyDocumentException {
    return _smithy.isa(o, "MalformedPolicyDocumentException");
  }
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
  PolicyVersionList?: Array<PolicyVersion>;

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
  export function isa(o: any): o is ManagedPolicyDetail {
    return _smithy.isa(o, "ManagedPolicyDetail");
  }
}

/**
 * <p>The request was rejected because it referenced a resource entity that does not exist. The error
 *       message describes the resource.</p>
 */
export interface NoSuchEntityException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NoSuchEntityException";
  name: "NoSuchEntityException";
  $fault: "client";
  message?: string;
}

export namespace NoSuchEntityException {
  export function isa(o: any): o is NoSuchEntityException {
    return _smithy.isa(o, "NoSuchEntityException");
  }
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
  export function isa(o: any): o is OpenIDConnectProviderListEntry {
    return _smithy.isa(o, "OpenIDConnectProviderListEntry");
  }
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
  export function isa(o: any): o is OrganizationsDecisionDetail {
    return _smithy.isa(o, "OrganizationsDecisionDetail");
  }
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
  export function isa(o: any): o is PasswordPolicy {
    return _smithy.isa(o, "PasswordPolicy");
  }
}

/**
 * <p>The request was rejected because the provided password did not meet the requirements
 *       imposed by the account password policy.</p>
 */
export interface PasswordPolicyViolationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "PasswordPolicyViolationException";
  name: "PasswordPolicyViolationException";
  $fault: "client";
  message?: string;
}

export namespace PasswordPolicyViolationException {
  export function isa(o: any): o is PasswordPolicyViolationException {
    return _smithy.isa(o, "PasswordPolicyViolationException");
  }
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
  export function isa(o: any): o is Policy {
    return _smithy.isa(o, "Policy");
  }
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
  export function isa(o: any): o is PolicyDetail {
    return _smithy.isa(o, "PolicyDetail");
  }
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
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "PolicyEvaluationException";
  name: "PolicyEvaluationException";
  $fault: "server";
  message?: string;
}

export namespace PolicyEvaluationException {
  export function isa(o: any): o is PolicyEvaluationException {
    return _smithy.isa(o, "PolicyEvaluationException");
  }
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
  export function isa(o: any): o is PolicyGrantingServiceAccess {
    return _smithy.isa(o, "PolicyGrantingServiceAccess");
  }
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
  export function isa(o: any): o is PolicyGroup {
    return _smithy.isa(o, "PolicyGroup");
  }
}

/**
 * <p>The request failed because AWS service role policies can only be attached to the
 *       service-linked role for that service.</p>
 */
export interface PolicyNotAttachableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "PolicyNotAttachableException";
  name: "PolicyNotAttachableException";
  $fault: "client";
  message?: string;
}

export namespace PolicyNotAttachableException {
  export function isa(o: any): o is PolicyNotAttachableException {
    return _smithy.isa(o, "PolicyNotAttachableException");
  }
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
  export function isa(o: any): o is PolicyRole {
    return _smithy.isa(o, "PolicyRole");
  }
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
  export function isa(o: any): o is PolicyUser {
    return _smithy.isa(o, "PolicyUser");
  }
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
  export function isa(o: any): o is PolicyVersion {
    return _smithy.isa(o, "PolicyVersion");
  }
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
  export function isa(o: any): o is Position {
    return _smithy.isa(o, "Position");
  }
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
  export function isa(o: any): o is PutGroupPolicyRequest {
    return _smithy.isa(o, "PutGroupPolicyRequest");
  }
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
  export function isa(o: any): o is PutRolePermissionsBoundaryRequest {
    return _smithy.isa(o, "PutRolePermissionsBoundaryRequest");
  }
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
  export function isa(o: any): o is PutRolePolicyRequest {
    return _smithy.isa(o, "PutRolePolicyRequest");
  }
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
  export function isa(o: any): o is PutUserPermissionsBoundaryRequest {
    return _smithy.isa(o, "PutUserPermissionsBoundaryRequest");
  }
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
  export function isa(o: any): o is PutUserPolicyRequest {
    return _smithy.isa(o, "PutUserPolicyRequest");
  }
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
  export function isa(
    o: any
  ): o is RemoveClientIDFromOpenIDConnectProviderRequest {
    return _smithy.isa(o, "RemoveClientIDFromOpenIDConnectProviderRequest");
  }
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
  export function isa(o: any): o is RemoveRoleFromInstanceProfileRequest {
    return _smithy.isa(o, "RemoveRoleFromInstanceProfileRequest");
  }
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
  export function isa(o: any): o is RemoveUserFromGroupRequest {
    return _smithy.isa(o, "RemoveUserFromGroupRequest");
  }
}

export type ReportFormatType = "text/csv";

/**
 * <p>The request failed because the maximum number of concurrent requests for this
 *     account are already running.</p>
 */
export interface ReportGenerationLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ReportGenerationLimitExceededException";
  name: "ReportGenerationLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ReportGenerationLimitExceededException {
  export function isa(o: any): o is ReportGenerationLimitExceededException {
    return _smithy.isa(o, "ReportGenerationLimitExceededException");
  }
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
  export function isa(o: any): o is ResetServiceSpecificCredentialRequest {
    return _smithy.isa(o, "ResetServiceSpecificCredentialRequest");
  }
}

export interface ResetServiceSpecificCredentialResponse
  extends $MetadataBearer {
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
  export function isa(o: any): o is ResetServiceSpecificCredentialResponse {
    return _smithy.isa(o, "ResetServiceSpecificCredentialResponse");
  }
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
  MatchedStatements?: Array<Statement>;

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
  MissingContextValues?: Array<string>;
}

export namespace ResourceSpecificResult {
  export function isa(o: any): o is ResourceSpecificResult {
    return _smithy.isa(o, "ResourceSpecificResult");
  }
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
  export function isa(o: any): o is ResyncMFADeviceRequest {
    return _smithy.isa(o, "ResyncMFADeviceRequest");
  }
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
  Tags?: Array<Tag>;
}

export namespace Role {
  export function isa(o: any): o is Role {
    return _smithy.isa(o, "Role");
  }
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
  AttachedManagedPolicies?: Array<AttachedPolicy>;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the role was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: Array<InstanceProfile>;

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
  RolePolicyList?: Array<PolicyDetail>;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Array<Tag>;
}

export namespace RoleDetail {
  export function isa(o: any): o is RoleDetail {
    return _smithy.isa(o, "RoleDetail");
  }
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
  export function isa(o: any): o is RoleLastUsed {
    return _smithy.isa(o, "RoleLastUsed");
  }
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
  Resources?: Array<string>;
}

export namespace RoleUsageType {
  export function isa(o: any): o is RoleUsageType {
    return _smithy.isa(o, "RoleUsageType");
  }
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
  export function isa(o: any): o is SAMLProviderListEntry {
    return _smithy.isa(o, "SAMLProviderListEntry");
  }
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
  export function isa(o: any): o is SSHPublicKey {
    return _smithy.isa(o, "SSHPublicKey");
  }
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
  export function isa(o: any): o is SSHPublicKeyMetadata {
    return _smithy.isa(o, "SSHPublicKeyMetadata");
  }
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
  export function isa(o: any): o is ServerCertificate {
    return _smithy.isa(o, "ServerCertificate");
  }
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
  export function isa(o: any): o is ServerCertificateMetadata {
    return _smithy.isa(o, "ServerCertificateMetadata");
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 */
export interface ServiceFailureException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceFailureException";
  name: "ServiceFailureException";
  $fault: "server";
  message?: string;
}

export namespace ServiceFailureException {
  export function isa(o: any): o is ServiceFailureException {
    return _smithy.isa(o, "ServiceFailureException");
  }
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
  export function isa(o: any): o is ServiceLastAccessed {
    return _smithy.isa(o, "ServiceLastAccessed");
  }
}

/**
 * <p>The specified service does not support service-specific credentials.</p>
 */
export interface ServiceNotSupportedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceNotSupportedException";
  name: "ServiceNotSupportedException";
  $fault: "client";
  message?: string;
}

export namespace ServiceNotSupportedException {
  export function isa(o: any): o is ServiceNotSupportedException {
    return _smithy.isa(o, "ServiceNotSupportedException");
  }
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
  export function isa(o: any): o is ServiceSpecificCredential {
    return _smithy.isa(o, "ServiceSpecificCredential");
  }
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
  export function isa(o: any): o is ServiceSpecificCredentialMetadata {
    return _smithy.isa(o, "ServiceSpecificCredentialMetadata");
  }
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
  export function isa(o: any): o is SetDefaultPolicyVersionRequest {
    return _smithy.isa(o, "SetDefaultPolicyVersionRequest");
  }
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
  export function isa(o: any): o is SetSecurityTokenServicePreferencesRequest {
    return _smithy.isa(o, "SetSecurityTokenServicePreferencesRequest");
  }
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
  export function isa(o: any): o is SigningCertificate {
    return _smithy.isa(o, "SigningCertificate");
  }
}

export interface SimulateCustomPolicyRequest {
  __type?: "SimulateCustomPolicyRequest";
  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *          evaluated against each resource. Each operation must include the service identifier, such
   *          as <code>iam:CreateUser</code>. This operation does not support using wildcards (*) in an
   *          action name.</p>
   */
  ActionNames: Array<string> | undefined;

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
  ContextEntries?: Array<ContextEntry>;

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
  PolicyInputList: Array<string> | undefined;

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
  ResourceArns?: Array<string>;

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
  export function isa(o: any): o is SimulateCustomPolicyRequest {
    return _smithy.isa(o, "SimulateCustomPolicyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>SimulatePrincipalPolicy</a> or
 *       <a>SimulateCustomPolicy</a> request.</p>
 */
export interface SimulatePolicyResponse extends $MetadataBearer {
  __type?: "SimulatePolicyResponse";
  /**
   * <p>The results of the simulation.</p>
   */
  EvaluationResults?: Array<EvaluationResult>;

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
  export function isa(o: any): o is SimulatePolicyResponse {
    return _smithy.isa(o, "SimulatePolicyResponse");
  }
}

export interface SimulatePrincipalPolicyRequest {
  __type?: "SimulatePrincipalPolicyRequest";
  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *          evaluated for each resource. Each operation must include the service identifier, such as
   *             <code>iam:CreateUser</code>.</p>
   */
  ActionNames: Array<string> | undefined;

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
  ContextEntries?: Array<ContextEntry>;

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
  PolicyInputList?: Array<string>;

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
  ResourceArns?: Array<string>;

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
  export function isa(o: any): o is SimulatePrincipalPolicyRequest {
    return _smithy.isa(o, "SimulatePrincipalPolicyRequest");
  }
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
  export function isa(o: any): o is Statement {
    return _smithy.isa(o, "Statement");
  }
}

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
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
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
  Tags: Array<Tag> | undefined;
}

export namespace TagRoleRequest {
  export function isa(o: any): o is TagRoleRequest {
    return _smithy.isa(o, "TagRoleRequest");
  }
}

export interface TagUserRequest {
  __type?: "TagUserRequest";
  /**
   * <p>The list of tags that you want to attach to the user. Each tag consists of a key name
   *       and an associated value.</p>
   */
  Tags: Array<Tag> | undefined;

  /**
   * <p>The name of the user that you want to add tags to.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;
}

export namespace TagUserRequest {
  export function isa(o: any): o is TagUserRequest {
    return _smithy.isa(o, "TagUserRequest");
  }
}

/**
 * <p>The request was rejected because only the service that depends on the service-linked
 *       role can modify or delete the role on your behalf. The error message includes the name of the
 *       service that depends on this service-linked role. You must request the change through that
 *       service.</p>
 */
export interface UnmodifiableEntityException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnmodifiableEntityException";
  name: "UnmodifiableEntityException";
  $fault: "client";
  message?: string;
}

export namespace UnmodifiableEntityException {
  export function isa(o: any): o is UnmodifiableEntityException {
    return _smithy.isa(o, "UnmodifiableEntityException");
  }
}

/**
 * <p>The request was rejected because the public key encoding format is unsupported or
 *       unrecognized.</p>
 */
export interface UnrecognizedPublicKeyEncodingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnrecognizedPublicKeyEncodingException";
  name: "UnrecognizedPublicKeyEncodingException";
  $fault: "client";
  message?: string;
}

export namespace UnrecognizedPublicKeyEncodingException {
  export function isa(o: any): o is UnrecognizedPublicKeyEncodingException {
    return _smithy.isa(o, "UnrecognizedPublicKeyEncodingException");
  }
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
  TagKeys: Array<string> | undefined;
}

export namespace UntagRoleRequest {
  export function isa(o: any): o is UntagRoleRequest {
    return _smithy.isa(o, "UntagRoleRequest");
  }
}

export interface UntagUserRequest {
  __type?: "UntagUserRequest";
  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified user.</p>
   */
  TagKeys: Array<string> | undefined;

  /**
   * <p>The name of the IAM user from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;
}

export namespace UntagUserRequest {
  export function isa(o: any): o is UntagUserRequest {
    return _smithy.isa(o, "UntagUserRequest");
  }
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
  export function isa(o: any): o is UpdateAccessKeyRequest {
    return _smithy.isa(o, "UpdateAccessKeyRequest");
  }
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
  export function isa(o: any): o is UpdateAccountPasswordPolicyRequest {
    return _smithy.isa(o, "UpdateAccountPasswordPolicyRequest");
  }
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
  export function isa(o: any): o is UpdateAssumeRolePolicyRequest {
    return _smithy.isa(o, "UpdateAssumeRolePolicyRequest");
  }
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
  export function isa(o: any): o is UpdateGroupRequest {
    return _smithy.isa(o, "UpdateGroupRequest");
  }
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
  export function isa(o: any): o is UpdateLoginProfileRequest {
    return _smithy.isa(o, "UpdateLoginProfileRequest");
  }
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
  ThumbprintList: Array<string> | undefined;
}

export namespace UpdateOpenIDConnectProviderThumbprintRequest {
  export function isa(
    o: any
  ): o is UpdateOpenIDConnectProviderThumbprintRequest {
    return _smithy.isa(o, "UpdateOpenIDConnectProviderThumbprintRequest");
  }
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
  export function isa(o: any): o is UpdateRoleDescriptionRequest {
    return _smithy.isa(o, "UpdateRoleDescriptionRequest");
  }
}

export interface UpdateRoleDescriptionResponse extends $MetadataBearer {
  __type?: "UpdateRoleDescriptionResponse";
  /**
   * <p>A structure that contains details about the modified role.</p>
   */
  Role?: Role;
}

export namespace UpdateRoleDescriptionResponse {
  export function isa(o: any): o is UpdateRoleDescriptionResponse {
    return _smithy.isa(o, "UpdateRoleDescriptionResponse");
  }
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
  export function isa(o: any): o is UpdateRoleRequest {
    return _smithy.isa(o, "UpdateRoleRequest");
  }
}

export interface UpdateRoleResponse extends $MetadataBearer {
  __type?: "UpdateRoleResponse";
}

export namespace UpdateRoleResponse {
  export function isa(o: any): o is UpdateRoleResponse {
    return _smithy.isa(o, "UpdateRoleResponse");
  }
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
  export function isa(o: any): o is UpdateSAMLProviderRequest {
    return _smithy.isa(o, "UpdateSAMLProviderRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>UpdateSAMLProvider</a> request.
 *     </p>
 */
export interface UpdateSAMLProviderResponse extends $MetadataBearer {
  __type?: "UpdateSAMLProviderResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider that was updated.</p>
   */
  SAMLProviderArn?: string;
}

export namespace UpdateSAMLProviderResponse {
  export function isa(o: any): o is UpdateSAMLProviderResponse {
    return _smithy.isa(o, "UpdateSAMLProviderResponse");
  }
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
  export function isa(o: any): o is UpdateSSHPublicKeyRequest {
    return _smithy.isa(o, "UpdateSSHPublicKeyRequest");
  }
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
  export function isa(o: any): o is UpdateServerCertificateRequest {
    return _smithy.isa(o, "UpdateServerCertificateRequest");
  }
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
  export function isa(o: any): o is UpdateServiceSpecificCredentialRequest {
    return _smithy.isa(o, "UpdateServiceSpecificCredentialRequest");
  }
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
  export function isa(o: any): o is UpdateSigningCertificateRequest {
    return _smithy.isa(o, "UpdateSigningCertificateRequest");
  }
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
  export function isa(o: any): o is UpdateUserRequest {
    return _smithy.isa(o, "UpdateUserRequest");
  }
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
  export function isa(o: any): o is UploadSSHPublicKeyRequest {
    return _smithy.isa(o, "UploadSSHPublicKeyRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>UploadSSHPublicKey</a>
 *       request.</p>
 */
export interface UploadSSHPublicKeyResponse extends $MetadataBearer {
  __type?: "UploadSSHPublicKeyResponse";
  /**
   * <p>Contains information about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

export namespace UploadSSHPublicKeyResponse {
  export function isa(o: any): o is UploadSSHPublicKeyResponse {
    return _smithy.isa(o, "UploadSSHPublicKeyResponse");
  }
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
  export function isa(o: any): o is UploadServerCertificateRequest {
    return _smithy.isa(o, "UploadServerCertificateRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>UploadServerCertificate</a>
 *       request. </p>
 */
export interface UploadServerCertificateResponse extends $MetadataBearer {
  __type?: "UploadServerCertificateResponse";
  /**
   * <p>The meta information of the uploaded server certificate without its certificate body,
   *          certificate chain, and private key.</p>
   */
  ServerCertificateMetadata?: ServerCertificateMetadata;
}

export namespace UploadServerCertificateResponse {
  export function isa(o: any): o is UploadServerCertificateResponse {
    return _smithy.isa(o, "UploadServerCertificateResponse");
  }
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
  export function isa(o: any): o is UploadSigningCertificateRequest {
    return _smithy.isa(o, "UploadSigningCertificateRequest");
  }
}

/**
 * <p>Contains the response to a successful <a>UploadSigningCertificate</a>
 *       request. </p>
 */
export interface UploadSigningCertificateResponse extends $MetadataBearer {
  __type?: "UploadSigningCertificateResponse";
  /**
   * <p>Information about the certificate.</p>
   */
  Certificate: SigningCertificate | undefined;
}

export namespace UploadSigningCertificateResponse {
  export function isa(o: any): o is UploadSigningCertificateResponse {
    return _smithy.isa(o, "UploadSigningCertificateResponse");
  }
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
  Tags?: Array<Tag>;

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
  export function isa(o: any): o is User {
    return _smithy.isa(o, "User");
  }
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
  AttachedManagedPolicies?: Array<AttachedPolicy>;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of IAM groups that the user is in.</p>
   */
  GroupList?: Array<string>;

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
  Tags?: Array<Tag>;

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
  UserPolicyList?: Array<PolicyDetail>;
}

export namespace UserDetail {
  export function isa(o: any): o is UserDetail {
    return _smithy.isa(o, "UserDetail");
  }
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
  export function isa(o: any): o is VirtualMFADevice {
    return _smithy.isa(o, "VirtualMFADevice");
  }
}

export type AssignmentStatusType = "Any" | "Assigned" | "Unassigned";

export type EncodingType = "PEM" | "SSH";

export enum GlobalEndpointTokenVersion {
  v1Token = "v1Token",
  v2Token = "v2Token"
}

export type JobStatusType = "COMPLETED" | "FAILED" | "IN_PROGRESS";

export enum PolicyOwnerEntityType {
  GROUP = "GROUP",
  ROLE = "ROLE",
  USER = "USER"
}

export enum PolicyScopeType {
  AWS = "AWS",
  All = "All",
  Local = "Local"
}

export enum PolicyType {
  INLINE = "INLINE",
  MANAGED = "MANAGED"
}

export enum SortKeyType {
  LAST_AUTHENTICATED_TIME_ASCENDING = "LAST_AUTHENTICATED_TIME_ASCENDING",
  LAST_AUTHENTICATED_TIME_DESCENDING = "LAST_AUTHENTICATED_TIME_DESCENDING",
  SERVICE_NAMESPACE_ASCENDING = "SERVICE_NAMESPACE_ASCENDING",
  SERVICE_NAMESPACE_DESCENDING = "SERVICE_NAMESPACE_DESCENDING"
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
