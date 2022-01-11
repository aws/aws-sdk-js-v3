import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface AcceptResourceShareInvitationRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the invitation that you want to accept.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export namespace AcceptResourceShareInvitationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptResourceShareInvitationRequest): any => ({
    ...obj,
  });
}

export type ResourceShareAssociationType = "PRINCIPAL" | "RESOURCE";

export type ResourceShareAssociationStatus =
  | "ASSOCIATED"
  | "ASSOCIATING"
  | "DISASSOCIATED"
  | "DISASSOCIATING"
  | "FAILED";

/**
 * <p>Describes an association with a resource share and either a principal or a resource.</p>
 */
export interface ResourceShareAssociation {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>The associated entity. This can be either of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>For a resource association, this is the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource.</p>
   *             </li>
   *             <li>
   *                 <p>For principal associations, this is one of the following:</p>
   *                 <ul>
   *                   <li>
   *                         <p>The ID of an Amazon Web Services account</p>
   *                     </li>
   *                   <li>
   *                         <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations</p>
   *                     </li>
   *                   <li>
   *                         <p>The ARN of an organizational unit (OU) in Organizations</p>
   *                     </li>
   *                   <li>
   *                         <p>The ARN of an IAM role</p>
   *                     </li>
   *                   <li>
   *                         <p>The ARN of an IAM user</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  associatedEntity?: string;

  /**
   * <p>The type of entity included in this association.</p>
   */
  associationType?: ResourceShareAssociationType | string;

  /**
   * <p>The current status of the association.</p>
   */
  status?: ResourceShareAssociationStatus | string;

  /**
   * <p>A message about the status of the association.</p>
   */
  statusMessage?: string;

  /**
   * <p>The date and time when the association was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Indicates whether the principal belongs to the same organization in Organizations as the
   *             Amazon Web Services account that owns the resource share.</p>
   */
  external?: boolean;
}

export namespace ResourceShareAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShareAssociation): any => ({
    ...obj,
  });
}

export type ResourceShareInvitationStatus = "ACCEPTED" | "EXPIRED" | "PENDING" | "REJECTED";

/**
 * <p>Describes an invitation for an Amazon Web Services account to join a resource share.</p>
 */
export interface ResourceShareInvitation {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the invitation.</p>
   */
  resourceShareInvitationArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that sent the invitation.</p>
   */
  senderAccountId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that received the invitation.</p>
   */
  receiverAccountId?: string;

  /**
   * <p>The date and time when the invitation was sent.</p>
   */
  invitationTimestamp?: Date;

  /**
   * <p>The current status of the invitation.</p>
   */
  status?: ResourceShareInvitationStatus | string;

  /**
   * @deprecated
   *
   * <p>To view the resources associated with a pending resource share invitation, use <a>ListPendingInvitationResources</a>.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the IAM user or role that received the invitation.</p>
   */
  receiverArn?: string;
}

export namespace ResourceShareInvitation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShareInvitation): any => ({
    ...obj,
  });
}

export interface AcceptResourceShareInvitationResponse {
  /**
   * <p>An object that contains information about the specified invitation.</p>
   */
  resourceShareInvitation?: ResourceShareInvitation;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace AcceptResourceShareInvitationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptResourceShareInvitationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The client token input parameter was matched one used with a previous call to the
 *             operation, but at least one of the other input parameters is different from the previous
 *             call.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The client token is not valid.</p>
 */
export interface InvalidClientTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidClientTokenException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 */
export interface MalformedArnException extends __SmithyException, $MetadataBearer {
  name: "MalformedArnException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The requested operation is not permitted.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The specified invitation was already accepted.</p>
 */
export interface ResourceShareInvitationAlreadyAcceptedException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationAlreadyAcceptedException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The specified invitation was already rejected.</p>
 */
export interface ResourceShareInvitationAlreadyRejectedException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationAlreadyRejectedException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The specified Amazon Resource Name (ARN) for an invitation was not found.</p>
 */
export interface ResourceShareInvitationArnNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The specified invitation is expired.</p>
 */
export interface ResourceShareInvitationExpiredException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationExpiredException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export interface ServerInternalException extends __SmithyException, $MetadataBearer {
  name: "ServerInternalException";
  $fault: "server";
  message: string | undefined;
}

/**
 * <p>The service is not available.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message: string | undefined;
}

export interface AssociateResourceShareRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share that you want to add principals or resources
   *             to.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources that you want to share. This can be
   *                 <code>null</code> if you want to add only principals.</p>
   */
  resourceArns?: string[];

  /**
   * <p>Specifies a list of principals to whom you want to the resource share. This can be
   *                 <code>null</code> if you want to add only resources.</p>
   *         <p>What the principals can do with the resources in the share is determined by the RAM
   *             permissions that you associate with the resource share. See <a>AssociateResourceSharePermission</a>.</p>
   *         <p>You can include the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   */
  principals?: string[];

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export namespace AssociateResourceShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceShareRequest): any => ({
    ...obj,
  });
}

export interface AssociateResourceShareResponse {
  /**
   * <p>An array of objects that contain information about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace AssociateResourceShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceShareResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A parameter is not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The requested state transition is not valid.</p>
 */
export interface InvalidStateTransitionException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>This request would exceed the limit for resource shares for your account.</p>
 */
export interface ResourceShareLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>You exceeded the rate at which you are allowed to perform this operation. Please try
 *             again later.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>A specified resource was not found.</p>
 */
export interface UnknownResourceException extends __SmithyException, $MetadataBearer {
  name: "UnknownResourceException";
  $fault: "client";
  message: string | undefined;
}

export interface AssociateResourceSharePermissionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share to which you want to add or replace
   *             permissions.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the RAM permission to associate with the resource share.
   *             To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and
   *              then choose the name of the permission. The ARN is displayed on the detail page.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies whether the specified permission should replace or add to the existing
   *             permission associated with the resource share. Use <code>true</code> to replace the current
   *             permissions. Use <code>false</code> to add the permission to the current permission. The
   *             default value is <code>false</code>.</p>
   *         <note>
   *             <p>A resource share can have only one permission per resource type. If a resource share already has a
   *                 permission for the specified resource type and you don't set <code>replace</code> to
   *                     <code>true</code> then the operation returns an error. This helps prevent
   *                 accidental overwriting of a permission.</p>
   *         </note>
   */
  replace?: boolean;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;

  /**
   * <p>Specifies the version of the RAM permission to associate with the resource share. If you don't
   *             specify this parameter, the operation uses the version designated as the default.</p>
   */
  permissionVersion?: number;
}

export namespace AssociateResourceSharePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceSharePermissionRequest): any => ({
    ...obj,
  });
}

export interface AssociateResourceSharePermissionResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace AssociateResourceSharePermissionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceSharePermissionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing a tag. A tag is metadata that you can attach to your resources
 *             to help organize and categorize them. You can also use them to help you secure your
 *             resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources
 *                 using tags</a>.</p>
 *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
 *                 <i>Amazon Web Services General Reference Guide</i>.</p>
 */
export interface Tag {
  /**
   * <p>The key, or name, attached to the tag. Every tag must have a key. Key names are case
   *             sensitive.</p>
   */
  key?: string;

  /**
   * <p>The string value attached to the tag. The value can be an empty string. Key values are
   *             case sensitive.</p>
   */
  value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateResourceShareRequest {
  /**
   * <p>Specifies the name of the resource share.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies a list of one or more ARNs of the resources to associate with the
   *             resource share.</p>
   */
  resourceArns?: string[];

  /**
   * <p>Specifies a list of one or more principals to associate with the resource share.</p>
   *         <p>You can include the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   */
  principals?: string[];

  /**
   * <p>Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to
   *             the resources associated with the resource share.</p>
   */
  tags?: Tag[];

  /**
   * <p>Specifies whether principals outside your organization in Organizations can be associated
   *             with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts
   *             that are <i>not</i> in your organization. A value of <code>false</code>
   *             only has meaning if your account is a member of an Amazon Web Services Organization. The default value
   *             is <code>true</code>.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the RAM permission to associate with the resource share. If you do
   *             not specify an ARN for the permission, RAM automatically attaches the default version
   *             of the permission for each resource type. You can associate only one permission with
   *             each resource type included in the resource share.</p>
   */
  permissionArns?: string[];
}

export namespace CreateResourceShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceShareRequest): any => ({
    ...obj,
  });
}

export type ResourceShareFeatureSet = "CREATED_FROM_POLICY" | "PROMOTING_TO_STANDARD" | "STANDARD";

export type ResourceShareStatus = "ACTIVE" | "DELETED" | "DELETING" | "FAILED" | "PENDING";

/**
 * <p>Describes a resource share in RAM.</p>
 */
export interface ResourceShare {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource share.</p>
   */
  owningAccountId?: string;

  /**
   * <p>Indicates whether principals outside your organization in Organizations can be associated
   *             with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>The current status of the resource share.</p>
   */
  status?: ResourceShareStatus | string;

  /**
   * <p>A message about the status of the resource share.</p>
   */
  statusMessage?: string;

  /**
   * <p>The tag key and value pairs attached to the resource share.</p>
   */
  tags?: Tag[];

  /**
   * <p>The date and time when the resource share was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the resource share was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Indicates how the resource share was created. Possible values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CREATED_FROM_POLICY</code> - Indicates that the resource share was created from an
   *                     Identity and Access Management (IAM) resource-based permission policy attached to the resource.
   *                     This type of resource share is visible only to the Amazon Web Services account that created it. You
   *                     can't modify it in RAM unless you promote it. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PROMOTING_TO_STANDARD</code> - The resource share is in the process of being
   *                     promoted. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STANDARD</code> - Indicates that the resource share was created in RAM using the
   *                     console or APIs. These resource shares are visible to all principals you share the resource share
   *                     with. You can modify these resource shares in RAM using the console or APIs.</p>
   *             </li>
   *          </ul>
   */
  featureSet?: ResourceShareFeatureSet | string;
}

export namespace ResourceShare {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShare): any => ({
    ...obj,
  });
}

export interface CreateResourceShareResponse {
  /**
   * <p>An object with information about the new resource share.</p>
   */
  resourceShare?: ResourceShare;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace CreateResourceShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceShareResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified tag key is a reserved word and can't be used.</p>
 */
export interface TagPolicyViolationException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyViolationException";
  $fault: "client";
  message: string | undefined;
}

export interface DeleteResourceShareRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share to delete.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export namespace DeleteResourceShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceShareRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceShareResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace DeleteResourceShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceShareResponse): any => ({
    ...obj,
  });
}

export interface DisassociateResourceShareRequest {
  /**
   * <p>Specifies <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share that you want to remove resources from.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for one or more resources that you want to remove from
   *             the resource share. After the operation runs, these resources are no longer shared with principals
   *             outside of the Amazon Web Services account that created the resources.</p>
   */
  resourceArns?: string[];

  /**
   * <p>Specifies a list of one or more principals that no longer are to have access to the
   *             resources in this resource share.</p>
   *         <p>You can include the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   */
  principals?: string[];

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export namespace DisassociateResourceShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateResourceShareRequest): any => ({
    ...obj,
  });
}

export interface DisassociateResourceShareResponse {
  /**
   * <p>An array of objects that contain information about the updated associations for this
   *             resource share.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace DisassociateResourceShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateResourceShareResponse): any => ({
    ...obj,
  });
}

export interface DisassociateResourceSharePermissionRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share from which you want to disassociate a permission.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the permission to disassociate from the resource share. Changes to permissions
   *             take effect immediately.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export namespace DisassociateResourceSharePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateResourceSharePermissionRequest): any => ({
    ...obj,
  });
}

export interface DisassociateResourceSharePermissionResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace DisassociateResourceSharePermissionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateResourceSharePermissionResponse): any => ({
    ...obj,
  });
}

export interface EnableSharingWithAwsOrganizationRequest {}

export namespace EnableSharingWithAwsOrganizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSharingWithAwsOrganizationRequest): any => ({
    ...obj,
  });
}

export interface EnableSharingWithAwsOrganizationResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   */
  returnValue?: boolean;
}

export namespace EnableSharingWithAwsOrganizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSharingWithAwsOrganizationResponse): any => ({
    ...obj,
  });
}

export interface GetPermissionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the permission whose contents you want to retrieve.
   *             To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and
   *              then choose the name of the permission. The ARN is displayed on the detail page.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies identifier for the version of the RAM permission to retrieve. If you don't
   *             specify this parameter, the operation retrieves the default version.</p>
   */
  permissionVersion?: number;
}

export namespace GetPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an RAM permission.</p>
 */
export interface ResourceSharePermissionDetail {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of this RAM permission.</p>
   */
  arn?: string;

  /**
   * <p>The version of the permission represented in this structure.</p>
   */
  version?: string;

  /**
   * <p>Specifies whether the version of the permission represented in this structure is the
   *             default version for this permission.</p>
   */
  defaultVersion?: boolean;

  /**
   * <p>The name of this permission.</p>
   */
  name?: string;

  /**
   * <p>The resource type to which this permission applies.</p>
   */
  resourceType?: string;

  /**
   * <p>The permission's effect and actions in JSON format. The <code>effect</code> indicates
   *             whether the specified actions are allowed or denied. The <code>actions</code> list the
   *             operations to which the principal is granted or denied access.</p>
   */
  permission?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the permission was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Specifies whether the version of the permission represented in this structure is the
   *             default version for all resources of this resource type.</p>
   */
  isResourceTypeDefault?: boolean;
}

export namespace ResourceSharePermissionDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceSharePermissionDetail): any => ({
    ...obj,
  });
}

export interface GetPermissionResponse {
  /**
   * <p>An object that contains information about the permission.</p>
   */
  permission?: ResourceSharePermissionDetail;
}

export namespace GetPermissionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPermissionResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources whose policies you want to retrieve.</p>
   */
  resourceArns: string[] | undefined;

  /**
   * <p>Specifies the principal.</p>
   */
  principal?: string;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;
}

export namespace GetResourcePoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePoliciesRequest): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesResponse {
  /**
   * <p>An array of resource policy documents in JSON format.</p>
   */
  policies?: string[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace GetResourcePoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePoliciesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified value for <code>NextToken</code> is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message: string | undefined;
}

/**
 * <p>The specified Amazon Resource Name (ARN) was not found.</p>
 */
export interface ResourceArnNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export interface GetResourceShareAssociationsRequest {
  /**
   * <p>Specifies whether you want to retrieve the associations that involve a specified
   *             resource or principal.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PRINCIPAL</code> – list the principals that are associated with
   *                     the specified resource share.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RESOURCE</code> – list the resources that are associated with the
   *                     specified resource share.</p>
   *             </li>
   *          </ul>
   */
  associationType: ResourceShareAssociationType | string | undefined;

  /**
   * <p>Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share whose associations you want to
   *             retrieve.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource whose resource shares you want to retrieve.</p>
   *         <p>You cannot specify this parameter if the association type is
   *             <code>PRINCIPAL</code>.</p>
   */
  resourceArn?: string;

  /**
   * <p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an
   *             Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an
   *             individual IAM user or role.</p>
   *         <p>You cannot specify this parameter if the association type is
   *             <code>RESOURCE</code>.</p>
   */
  principal?: string;

  /**
   * <p>Specifies that you want to retrieve only associations with this status.</p>
   */
  associationStatus?: ResourceShareAssociationStatus | string;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;
}

export namespace GetResourceShareAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceShareAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetResourceShareAssociationsResponse {
  /**
   * <p>An array of objects that contain the details about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace GetResourceShareAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceShareAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetResourceShareInvitationsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share invitations you want information about.</p>
   */
  resourceShareInvitationArns?: string[];

  /**
   * <p>Specifies that you want details about invitations only for the resource shares described by this
   *             list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *          </p>
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;
}

export namespace GetResourceShareInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceShareInvitationsRequest): any => ({
    ...obj,
  });
}

export interface GetResourceShareInvitationsResponse {
  /**
   * <p>An array of objects that contain the details about the invitations.</p>
   */
  resourceShareInvitations?: ResourceShareInvitation[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace GetResourceShareInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceShareInvitationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified value for <code>MaxResults</code> is not valid.</p>
 */
export interface InvalidMaxResultsException extends __SmithyException, $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  message: string | undefined;
}

export enum ResourceOwner {
  OTHER_ACCOUNTS = "OTHER-ACCOUNTS",
  SELF = "SELF",
}

/**
 * <p>A tag key and optional list of possible values that you can use to filter results for
 *             tagged resources.</p>
 */
export interface TagFilter {
  /**
   * <p>The tag key. This must have a valid string value and can't be empty.</p>
   */
  tagKey?: string;

  /**
   * <p>A list of zero or more tag values. If no values are provided, then the filter matches
   *             any tag with the specified key, regardless of its value.</p>
   */
  tagValues?: string[];
}

export namespace TagFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagFilter): any => ({
    ...obj,
  });
}

export interface GetResourceSharesRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of individual resource shares that you want information about.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that have this
   *             status.</p>
   */
  resourceShareStatus?: ResourceShareStatus | string;

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that match the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>SELF</code>
   *                   </b> – resources that you
   *                     are sharing</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>OTHER-ACCOUNTS</code>
   *                   </b> –
   *                     resources that other accounts share with you</p>
   *             </li>
   *          </ul>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>Specifies the name of an individual resource share that you want to retrieve details
   *             about.</p>
   */
  name?: string;

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that match the
   *             specified tag keys and values.</p>
   */
  tagFilters?: TagFilter[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that use the RAM
   *             permission with this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a>.</p>
   */
  permissionArn?: string;
}

export namespace GetResourceSharesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceSharesRequest): any => ({
    ...obj,
  });
}

export interface GetResourceSharesResponse {
  /**
   * <p>An array of objects that contain the information about the resource shares.</p>
   */
  resourceShares?: ResourceShare[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace GetResourceSharesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceSharesResponse): any => ({
    ...obj,
  });
}

export enum ResourceRegionScopeFilter {
  ALL = "ALL",
  GLOBAL = "GLOBAL",
  REGIONAL = "REGIONAL",
}

export interface ListPendingInvitationResourcesRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the invitation. You can use <a>GetResourceShareInvitations</a> to find the ARN of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want the results to include only
   *             resources that have the specified scope.</p>
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – the results include both global and
   *                     regional resources or resource types.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GLOBAL</code> – the results include only global
   *                     resources or resource types.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGIONAL</code> – the results include only regional
   *                     resources or resource types.</p>
   *             </li>
   *          </ul>
   *             <p>The default value is <code>ALL</code>.</p>
   */
  resourceRegionScope?: ResourceRegionScopeFilter | string;
}

export namespace ListPendingInvitationResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPendingInvitationResourcesRequest): any => ({
    ...obj,
  });
}

export enum ResourceRegionScope {
  GLOBAL = "GLOBAL",
  REGIONAL = "REGIONAL",
}

export type ResourceStatus = "AVAILABLE" | "LIMIT_EXCEEDED" | "PENDING" | "UNAVAILABLE" | "ZONAL_RESOURCE_INACCESSIBLE";

/**
 * <p>Describes a resource associated with a resource share in RAM.</p>
 */
export interface Resource {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The resource type. This takes the form of:
   *                 <code>service-code</code>:<code>resource-code</code>
   *          </p>
   */
  type?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share this resource is associated with.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource group. This value is available only if the resource is
   *             part of a resource group.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The current status of the resource.</p>
   */
  status?: ResourceStatus | string;

  /**
   * <p>A message about the status of the resource.</p>
   */
  statusMessage?: string;

  /**
   * <p>The date and time when the resource was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The date an time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Specifies the scope of visibility of this resource:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>REGIONAL</b> – The resource can be
   *                     accessed only by using requests that target the Amazon Web Services Region in which the
   *                     resource exists.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>GLOBAL</b> – The resource can be accessed
   *                     from any Amazon Web Services Region.</p>
   *             </li>
   *          </ul>
   */
  resourceRegionScope?: ResourceRegionScope | string;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

export interface ListPendingInvitationResourcesResponse {
  /**
   * <p>An array of objects that contain the information about the resources included the
   *             specified resource share.</p>
   */
  resources?: Resource[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace ListPendingInvitationResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPendingInvitationResourcesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A required input parameter is missing.</p>
 */
export interface MissingRequiredParameterException extends __SmithyException, $MetadataBearer {
  name: "MissingRequiredParameterException";
  $fault: "client";
  message: string | undefined;
}

export interface ListPermissionsRequest {
  /**
   * <p>Specifies that you want to list permissions for only the specified resource type. For
   *             example, to list only permissions that apply to EC2 subnets, specify
   *                 <code>ec2:Subnet</code>. You can use the <a>ListResourceTypes</a>
   *             operation to get the specific string required.</p>
   */
  resourceType?: string;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;
}

export namespace ListPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an RAM permission that is associated with a resource share and any of its
 *             resources of a specified type.</p>
 */
export interface ResourceSharePermissionSummary {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the permission you want information about.</p>
   */
  arn?: string;

  /**
   * <p>The version of the permission represented in this structure.</p>
   */
  version?: string;

  /**
   * <p>Specifies whether the version of the permission represented in this structure is the
   *             default version for this permission.</p>
   */
  defaultVersion?: boolean;

  /**
   * <p>The name of this permission.</p>
   */
  name?: string;

  /**
   * <p>The type of resource to which this permission applies.</p>
   */
  resourceType?: string;

  /**
   * <p>The current status of the permission.</p>
   */
  status?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the permission was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Specifies whether the version of the permission represented in this structure is the
   *             default version for all resources of this resource type.</p>
   */
  isResourceTypeDefault?: boolean;
}

export namespace ResourceSharePermissionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceSharePermissionSummary): any => ({
    ...obj,
  });
}

export interface ListPermissionsResponse {
  /**
   * <p>An array of objects with information about the permissions.</p>
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace ListPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPermissionsResponse): any => ({
    ...obj,
  });
}

export interface ListPrincipalsRequest {
  /**
   * <p>Specifies that you want to list information for only resource shares that match the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>SELF</code>
   *                   </b> – resources that you
   *                     are sharing</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>OTHER-ACCOUNTS</code>
   *                   </b> –
   *                     resources that other accounts share with you</p>
   *             </li>
   *          </ul>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>Specifies that you want to list principal information for the resource share with the specified
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a>.</p>
   */
  resourceArn?: string;

  /**
   * <p>Specifies that you want to list information for only the listed principals.</p>
   *         <p>You can include the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   */
  principals?: string[];

  /**
   * <p>Specifies that you want to list information for only principals associated with resource shares
   *             that include the specified resource type.</p>
   *         <p>For a list of valid values, query the <a>ListResourceTypes</a> operation.</p>
   */
  resourceType?: string;

  /**
   * <p>Specifies that you want to list information for only principals associated with the
   *             resource shares specified by a list the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;
}

export namespace ListPrincipalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrincipalsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a principal for use with Resource Access Manager.</p>
 */
export interface Principal {
  /**
   * <p>The ID of the principal.</p>
   */
  id?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of a resource share the principal is associated with.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The date and time when the principal was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Indicates whether the principal belongs to the same organization in Organizations as the
   *             Amazon Web Services account that owns the resource share.</p>
   */
  external?: boolean;
}

export namespace Principal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Principal): any => ({
    ...obj,
  });
}

export interface ListPrincipalsResponse {
  /**
   * <p>An array of objects that contain the details about the principals.</p>
   */
  principals?: Principal[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace ListPrincipalsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrincipalsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource type is not valid.</p>
 */
export interface InvalidResourceTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceTypeException";
  $fault: "client";
  message: string | undefined;
}

export interface ListResourcesRequest {
  /**
   * <p>Specifies that you want to list only the resource shares that match the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>SELF</code>
   *                   </b> – resources that you
   *                     are sharing</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>OTHER-ACCOUNTS</code>
   *                   </b> –
   *                     resources that other accounts share with you</p>
   *             </li>
   *          </ul>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>Specifies that you want to list only the resource shares that are associated with the specified
   *             principal.</p>
   */
  principal?: string;

  /**
   * <p>Specifies that you want to list only the resource shares that include resources of the specified
   *             resource type.</p>
   *         <p>For valid values, query the <a>ListResourceTypes</a> operation.</p>
   */
  resourceType?: string;

  /**
   * <p>Specifies that you want to list only the resource shares that include resources with the
   *             specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   */
  resourceArns?: string[];

  /**
   * <p>Specifies that you want to list only resources in the resource shares identified by the
   *             specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want the results to include only
   *             resources that have the specified scope.</p>
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – the results include both global and
   *                     regional resources or resource types.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GLOBAL</code> – the results include only global
   *                     resources or resource types.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGIONAL</code> – the results include only regional
   *                     resources or resource types.</p>
   *             </li>
   *          </ul>
   *             <p>The default value is <code>ALL</code>.</p>
   */
  resourceRegionScope?: ResourceRegionScopeFilter | string;
}

export namespace ListResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesRequest): any => ({
    ...obj,
  });
}

export interface ListResourcesResponse {
  /**
   * <p>An array of objects that contain information about the resources.</p>
   */
  resources?: Resource[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace ListResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesResponse): any => ({
    ...obj,
  });
}

export interface ListResourceSharePermissionsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share for which you want to retrieve the associated
   *             permissions.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;
}

export namespace ListResourceSharePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceSharePermissionsRequest): any => ({
    ...obj,
  });
}

export interface ListResourceSharePermissionsResponse {
  /**
   * <p>An array of objects that describe the permissions associated with the resource share.</p>
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace ListResourceSharePermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceSharePermissionsResponse): any => ({
    ...obj,
  });
}

export interface ListResourceTypesRequest {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the total number of results that you want included on each page
   *              of the response. If you do not include this parameter, it defaults to a value that is
   *              specific to the operation. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null).
   *              Include the specified value as the <code>NextToken</code> request parameter in the next
   *              call to the operation to get the next part of the results. Note that the service might
   *              return fewer results than the maximum even when there are more results available. You
   *              should check <code>NextToken</code> after every operation to ensure that you receive all
   *              of the results.</p>
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want the results to include only
   *             resources that have the specified scope.</p>
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – the results include both global and
   *                     regional resources or resource types.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GLOBAL</code> – the results include only global
   *                     resources or resource types.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGIONAL</code> – the results include only regional
   *                     resources or resource types.</p>
   *             </li>
   *          </ul>
   *             <p>The default value is <code>ALL</code>.</p>
   */
  resourceRegionScope?: ResourceRegionScopeFilter | string;
}

export namespace ListResourceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a shareable resource type and the Amazon Web Services service to which resources
 *             of that type belong.</p>
 */
export interface ServiceNameAndResourceType {
  /**
   * <p>The type of the resource.</p>
   */
  resourceType?: string;

  /**
   * <p>The name of the Amazon Web Services service to which resources of this type belong.</p>
   */
  serviceName?: string;

  /**
   * <p>Specifies the scope of visibility of resources of this type:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>REGIONAL</b> – The resource can be
   *                     accessed only by using requests that target the Amazon Web Services Region in which the
   *                     resource exists.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>GLOBAL</b> – The resource can be accessed
   *                     from any Amazon Web Services Region.</p>
   *             </li>
   *          </ul>
   */
  resourceRegionScope?: ResourceRegionScope | string;
}

export namespace ServiceNameAndResourceType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNameAndResourceType): any => ({
    ...obj,
  });
}

export interface ListResourceTypesResponse {
  /**
   * <p>An array of objects that contain information about the resource types that can be
   *             shared using RAM.</p>
   */
  resourceTypes?: ServiceNameAndResourceType[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;
}

export namespace ListResourceTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceTypesResponse): any => ({
    ...obj,
  });
}

export interface PromoteResourceShareCreatedFromPolicyRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share to promote.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace PromoteResourceShareCreatedFromPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteResourceShareCreatedFromPolicyRequest): any => ({
    ...obj,
  });
}

export interface PromoteResourceShareCreatedFromPolicyResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   */
  returnValue?: boolean;
}

export namespace PromoteResourceShareCreatedFromPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteResourceShareCreatedFromPolicyResponse): any => ({
    ...obj,
  });
}

export interface RejectResourceShareInvitationRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the invitation that you want to reject.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export namespace RejectResourceShareInvitationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectResourceShareInvitationRequest): any => ({
    ...obj,
  });
}

export interface RejectResourceShareInvitationResponse {
  /**
   * <p>An object that contains the details about the rejected invitation.</p>
   */
  resourceShareInvitation?: ResourceShareInvitation;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace RejectResourceShareInvitationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectResourceShareInvitationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This request would exceed the limit for tags for your account.</p>
 */
export interface TagLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share that you want to add tags to.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>A list of one or more tag key and value pairs. The tag key must be present and not be
   *             an empty string. The tag value must be present but can be an empty string.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share that you want to remove tags from. The tags are
   *             removed from the resource share, not the resources in the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies a list of one or more tag keys that you want to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateResourceShareRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share that you want to modify.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>If specified, the new name that you want to attach to the resource share.</p>
   */
  name?: string;

  /**
   * <p>Specifies whether principals outside your organization in Organizations can be associated
   *             with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *              <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export namespace UpdateResourceShareRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceShareRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceShareResponse {
  /**
   * <p>Information about the resource share.</p>
   */
  resourceShare?: ResourceShare;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   */
  clientToken?: string;
}

export namespace UpdateResourceShareResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceShareResponse): any => ({
    ...obj,
  });
}
