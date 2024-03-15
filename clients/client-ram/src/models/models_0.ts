// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RAMServiceException as __BaseException } from "./RAMServiceException";

/**
 * @public
 */
export interface AcceptResourceShareInvitationRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to accept.</p>
   * @public
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceShareAssociationType = {
  PRINCIPAL: "PRINCIPAL",
  RESOURCE: "RESOURCE",
} as const;

/**
 * @public
 */
export type ResourceShareAssociationType =
  (typeof ResourceShareAssociationType)[keyof typeof ResourceShareAssociationType];

/**
 * @public
 * @enum
 */
export const ResourceShareAssociationStatus = {
  ASSOCIATED: "ASSOCIATED",
  ASSOCIATING: "ASSOCIATING",
  DISASSOCIATED: "DISASSOCIATED",
  DISASSOCIATING: "DISASSOCIATING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ResourceShareAssociationStatus =
  (typeof ResourceShareAssociationStatus)[keyof typeof ResourceShareAssociationStatus];

/**
 * <p>Describes an association between a resource share and either a principal or a resource.</p>
 * @public
 */
export interface ResourceShareAssociation {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share.</p>
   * @public
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   * @public
   */
  resourceShareName?: string;

  /**
   * <p>The associated entity. This can be either of the following:</p>
   *          <ul>
   *             <li>
   *                <p>For a resource association, this is the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource.</p>
   *             </li>
   *             <li>
   *                <p>For principal associations, this is one of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>The ID of an Amazon Web Services account</p>
   *                   </li>
   *                   <li>
   *                      <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations</p>
   *                   </li>
   *                   <li>
   *                      <p>The ARN of an organizational unit (OU) in Organizations</p>
   *                   </li>
   *                   <li>
   *                      <p>The ARN of an IAM role</p>
   *                   </li>
   *                   <li>
   *                      <p>The ARN of an IAM user</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  associatedEntity?: string;

  /**
   * <p>The type of entity included in this association.</p>
   * @public
   */
  associationType?: ResourceShareAssociationType;

  /**
   * <p>The current status of the association.</p>
   * @public
   */
  status?: ResourceShareAssociationStatus;

  /**
   * <p>A message about the status of the association.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The date and time when the association was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the association was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Indicates whether the principal belongs to the same organization in Organizations as the
   *             Amazon Web Services account that owns the resource share.</p>
   * @public
   */
  external?: boolean;
}

/**
 * @public
 * @enum
 */
export const ResourceShareInvitationStatus = {
  ACCEPTED: "ACCEPTED",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ResourceShareInvitationStatus =
  (typeof ResourceShareInvitationStatus)[keyof typeof ResourceShareInvitationStatus];

/**
 * <p>Describes an invitation for an Amazon Web Services account to join a resource share.</p>
 * @public
 */
export interface ResourceShareInvitation {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation.</p>
   * @public
   */
  resourceShareInvitationArn?: string;

  /**
   * <p>The name of the resource share.</p>
   * @public
   */
  resourceShareName?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share</p>
   * @public
   */
  resourceShareArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that sent the invitation.</p>
   * @public
   */
  senderAccountId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that received the invitation.</p>
   * @public
   */
  receiverAccountId?: string;

  /**
   * <p>The date and time when the invitation was sent.</p>
   * @public
   */
  invitationTimestamp?: Date;

  /**
   * <p>The current status of the invitation.</p>
   * @public
   */
  status?: ResourceShareInvitationStatus;

  /**
   * @deprecated
   *
   * <p>To view the resources associated with a pending resource share invitation, use <a>ListPendingInvitationResources</a>.</p>
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the IAM user or role that received the invitation.</p>
   * @public
   */
  receiverArn?: string;
}

/**
 * @public
 */
export interface AcceptResourceShareInvitationResponse {
  /**
   * <p>An object that contains information about the specified invitation.</p>
   * @public
   */
  resourceShareInvitation?: ResourceShareInvitation;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
  }
}

/**
 * <p>The operation failed because the specified client token isn't valid.</p>
 * @public
 */
export class InvalidClientTokenException extends __BaseException {
  readonly name: "InvalidClientTokenException" = "InvalidClientTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientTokenException, __BaseException>) {
    super({
      name: "InvalidClientTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientTokenException.prototype);
  }
}

/**
 * <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 * @public
 */
export class MalformedArnException extends __BaseException {
  readonly name: "MalformedArnException" = "MalformedArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedArnException, __BaseException>) {
    super({
      name: "MalformedArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedArnException.prototype);
  }
}

/**
 * <p>The operation failed because the requested operation isn't permitted.</p>
 * @public
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
  }
}

/**
 * <p>The operation failed because the specified invitation was already accepted.</p>
 * @public
 */
export class ResourceShareInvitationAlreadyAcceptedException extends __BaseException {
  readonly name: "ResourceShareInvitationAlreadyAcceptedException" = "ResourceShareInvitationAlreadyAcceptedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationAlreadyAcceptedException, __BaseException>) {
    super({
      name: "ResourceShareInvitationAlreadyAcceptedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationAlreadyAcceptedException.prototype);
  }
}

/**
 * <p>The operation failed because the specified invitation was already rejected.</p>
 * @public
 */
export class ResourceShareInvitationAlreadyRejectedException extends __BaseException {
  readonly name: "ResourceShareInvitationAlreadyRejectedException" = "ResourceShareInvitationAlreadyRejectedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationAlreadyRejectedException, __BaseException>) {
    super({
      name: "ResourceShareInvitationAlreadyRejectedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationAlreadyRejectedException.prototype);
  }
}

/**
 * <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> for an invitation was not
 *             found.</p>
 * @public
 */
export class ResourceShareInvitationArnNotFoundException extends __BaseException {
  readonly name: "ResourceShareInvitationArnNotFoundException" = "ResourceShareInvitationArnNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationArnNotFoundException, __BaseException>) {
    super({
      name: "ResourceShareInvitationArnNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationArnNotFoundException.prototype);
  }
}

/**
 * <p>The operation failed because the specified invitation is past its expiration date and
 *             time.</p>
 * @public
 */
export class ResourceShareInvitationExpiredException extends __BaseException {
  readonly name: "ResourceShareInvitationExpiredException" = "ResourceShareInvitationExpiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationExpiredException, __BaseException>) {
    super({
      name: "ResourceShareInvitationExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationExpiredException.prototype);
  }
}

/**
 * <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 * @public
 */
export class ServerInternalException extends __BaseException {
  readonly name: "ServerInternalException" = "ServerInternalException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerInternalException, __BaseException>) {
    super({
      name: "ServerInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerInternalException.prototype);
  }
}

/**
 * <p>The operation failed because the service isn't available. Try again later.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface AssociateResourceShareRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add principals or resources
   *             to.</p>
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources that you want to share. This can be
   *                 <code>null</code> if you want to add only principals.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>Specifies a list of principals to whom you want to the resource share. This can be
   *                 <code>null</code> if you want to add only resources.</p>
   *          <p>What the principals can do with the resources in the share is determined by the RAM
   *             permissions that you associate with the resource share. See <a>AssociateResourceSharePermission</a>.</p>
   *          <p>You can include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   * @public
   */
  principals?: string[];

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies from which source accounts the service principal
   *             has access to the resources in this resource share.</p>
   * @public
   */
  sources?: string[];
}

/**
 * @public
 */
export interface AssociateResourceShareResponse {
  /**
   * <p>An array of objects that contain information about the associations.</p>
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The operation failed because a parameter you specified isn't valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The operation failed because the requested operation isn't valid for the resource
 *             share in its current state.</p>
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
  readonly name: "InvalidStateTransitionException" = "InvalidStateTransitionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
  }
}

/**
 * <p>The operation failed because it would exceed the limit for resource shares for your account. To
 *             view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the Service Quotas
 *                 console</a>.</p>
 * @public
 */
export class ResourceShareLimitExceededException extends __BaseException {
  readonly name: "ResourceShareLimitExceededException" = "ResourceShareLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareLimitExceededException, __BaseException>) {
    super({
      name: "ResourceShareLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareLimitExceededException.prototype);
  }
}

/**
 * <p>The operation failed because it exceeded the rate at which you are allowed to perform
 *             this operation. Please try again later.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The operation failed because a specified resource couldn't be found.</p>
 * @public
 */
export class UnknownResourceException extends __BaseException {
  readonly name: "UnknownResourceException" = "UnknownResourceException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownResourceException, __BaseException>) {
    super({
      name: "UnknownResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownResourceException.prototype);
  }
}

/**
 * @public
 */
export interface AssociateResourceSharePermissionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to which you want to add or replace
   *             permissions.</p>
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission to associate with the resource share.
   *             To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and
   *              then choose the name of the permission. The ARN is displayed on the detail page.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies whether the specified permission should replace the existing permission
   *             associated with the resource share. Use <code>true</code> to replace the current permissions. Use
   *                 <code>false</code> to add the permission to a resource share that currently doesn't
   *             have a permission. The default value is <code>false</code>.</p>
   *          <note>
   *             <p>A resource share can have only one permission per resource type. If a resource share already has a
   *                 permission for the specified resource type and you don't set <code>replace</code> to
   *                     <code>true</code> then the operation returns an error. This helps prevent
   *                 accidental overwriting of a permission.</p>
   *          </note>
   * @public
   */
  replace?: boolean;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies the version of the RAM permission to associate with the resource share. You can
   *             specify <i>only</i> the version that is currently set as the default
   *             version for the permission. If you also set the <code>replace</code> pararameter to
   *                 <code>true</code>, then this operation updates an outdated version of the permission
   *             to the current default version.</p>
   *          <note>
   *             <p>You don't need to specify this parameter because the default behavior is to use
   *                 the version that is currently set as the default version for the permission. This
   *                 parameter is supported for backwards compatibility.</p>
   *          </note>
   * @public
   */
  permissionVersion?: number;
}

/**
 * @public
 */
export interface AssociateResourceSharePermissionResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   * @public
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>A structure containing a tag. A tag is metadata that you can attach to your resources
 *             to help organize and categorize them. You can also use them to help you secure your
 *             resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources
 *                 using tags</a>.</p>
 *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
 *                 <i>Amazon Web Services General Reference Guide</i>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key, or name, attached to the tag. Every tag must have a key. Key names are case
   *             sensitive.</p>
   * @public
   */
  key?: string;

  /**
   * <p>The string value attached to the tag. The value can be an empty string. Key values are
   *             case sensitive.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 */
export interface CreatePermissionRequest {
  /**
   * <p>Specifies the name of the customer managed permission. The name must be unique within the
   *             Amazon Web Services Region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies the name of the resource type that this customer managed permission applies to.</p>
   *          <p>The format is
   *                     <code>
   *                <i><service-code></i>:<i><resource-type></i>
   *             </code>
   *             and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the
   *             string <code>ec2:subnet</code>. To see the list of valid values for this parameter,
   *             query the <a>ListResourceTypes</a> operation.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>A string in JSON format string that contains the following elements of a
   *             resource-based policy:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Effect</b>: must be set to
   *                     <code>ALLOW</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Action</b>: specifies the actions that are
   *                     allowed by this customer managed permission. The list must contain only actions that are supported by
   *                     the specified resource type. For a list of all actions supported by each
   *                     resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *                         <i>Identity and Access Management User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Condition</b>: (optional) specifies conditional
   *                     parameters that must evaluate to true when a user attempts an action for that
   *                     action to be allowed. For more information about the Condition element, see
   *                     <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM
   *                         policies: Condition element</a> in the <i>Identity and Access Management User
   *                     Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>This template can't include either the <code>Resource</code> or
   *             <code>Principal</code> elements. Those are both filled in by RAM when it instantiates
   *             the resource-based policy on each resource shared using this managed permission. The
   *             <code>Resource</code> comes from the ARN of the specific resource that you are sharing.
   *             The <code>Principal</code> comes from the list of identities added to the resource
   *             share.</p>
   * @public
   */
  policyTemplate: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies a list of one or more tag key and value pairs to attach to the
   *             permission.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const PermissionFeatureSet = {
  CREATED_FROM_POLICY: "CREATED_FROM_POLICY",
  PROMOTING_TO_STANDARD: "PROMOTING_TO_STANDARD",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type PermissionFeatureSet = (typeof PermissionFeatureSet)[keyof typeof PermissionFeatureSet];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;

/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * <p>Information about an RAM permission.</p>
 * @public
 */
export interface ResourceSharePermissionSummary {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission you want information about.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The version of the permission associated with this resource share.</p>
   * @public
   */
  version?: string;

  /**
   * <p>Specifies whether the version of the managed permission used by this resource share is the default version for
   *             this managed permission.</p>
   * @public
   */
  defaultVersion?: boolean;

  /**
   * <p>The name of this managed permission.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The type of resource to which this permission applies. This takes the form of:
   *                 <code>service-code</code>:<code>resource-code</code>, and is case-insensitive. For
   *             example, an Amazon EC2 Subnet would be represented by the string
   *             <code>ec2:subnet</code>.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The current status of the permission.</p>
   * @public
   */
  status?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the permission was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Specifies whether the managed permission associated with this resource share is the default managed permission for all
   *             resources of this resource type.</p>
   * @public
   */
  isResourceTypeDefault?: boolean;

  /**
   * <p>The type of managed permission. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_MANAGED</code> – Amazon Web Services created and manages this
   *                     managed permission. You can associate it with your resource shares, but you can't modify it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOMER_MANAGED</code> – You, or another principal in
   *                     your account created this managed permission. You can associate it with your resource shares and create
   *                     new versions that have different permissions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  permissionType?: PermissionType;

  /**
   * <p>Indicates what features are available for this resource share. This parameter can have one of
   *             the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDARD</b> – A resource share that supports all
   *                     functionality. These resource shares are visible to all principals you share the resource share with.
   *                     You can modify these resource shares in RAM using the console or APIs. This resource share might
   *                     have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CREATED_FROM_POLICY</b> – The customer
   *                     manually shared a resource by attaching a resource-based policy. That policy did
   *                     not match any existing managed permissions, so RAM created this customer managed permission automatically on the
   *                     customer's behalf based on the attached policy document. This type of resource share
   *                     is visible only to the Amazon Web Services account that created it. You can't modify it in
   *                     RAM unless you promote it. For more information,
   *                     see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PROMOTING_TO_STANDARD</b> – This
   *                     resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran
   *                     the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation
   *                     is still in progress. This value changes to <code>STANDARD</code> when
   *                     complete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  featureSet?: PermissionFeatureSet;

  /**
   * <p>A list of the tag key value pairs currently attached to the permission.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePermissionResponse {
  /**
   * <p>A structure with information about this customer managed permission.</p>
   * @public
   */
  permission?: ResourceSharePermissionSummary;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The operation failed because a policy you specified isn't valid.</p>
 * @public
 */
export class InvalidPolicyException extends __BaseException {
  readonly name: "InvalidPolicyException" = "InvalidPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyException, __BaseException>) {
    super({
      name: "InvalidPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyException.prototype);
  }
}

/**
 * <p>The operation failed because the policy template that you provided isn't valid.</p>
 * @public
 */
export class MalformedPolicyTemplateException extends __BaseException {
  readonly name: "MalformedPolicyTemplateException" = "MalformedPolicyTemplateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyTemplateException, __BaseException>) {
    super({
      name: "MalformedPolicyTemplateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyTemplateException.prototype);
  }
}

/**
 * <p>The operation failed because a permission with the specified name already exists in
 *             the requested Amazon Web Services Region. Choose a different name.</p>
 * @public
 */
export class PermissionAlreadyExistsException extends __BaseException {
  readonly name: "PermissionAlreadyExistsException" = "PermissionAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionAlreadyExistsException, __BaseException>) {
    super({
      name: "PermissionAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionAlreadyExistsException.prototype);
  }
}

/**
 * <p>The operation failed because it would exceed the maximum number of permissions you can
 *             create in each Amazon Web Services Region. To view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the
 *                 Service Quotas console</a>.</p>
 * @public
 */
export class PermissionLimitExceededException extends __BaseException {
  readonly name: "PermissionLimitExceededException" = "PermissionLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionLimitExceededException, __BaseException>) {
    super({
      name: "PermissionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface CreatePermissionVersionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission you're creating a new version for.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>A string in JSON format string that contains the following elements of a
   *             resource-based policy:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Effect</b>: must be set to
   *                     <code>ALLOW</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Action</b>: specifies the actions that are
   *                     allowed by this customer managed permission. The list must contain only actions that are supported by
   *                     the specified resource type. For a list of all actions supported by each
   *                     resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *                         <i>Identity and Access Management User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Condition</b>: (optional) specifies conditional
   *                     parameters that must evaluate to true when a user attempts an action for that
   *                     action to be allowed. For more information about the Condition element, see
   *                     <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM
   *                         policies: Condition element</a> in the <i>Identity and Access Management User
   *                     Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>This template can't include either the <code>Resource</code> or
   *             <code>Principal</code> elements. Those are both filled in by RAM when it instantiates
   *             the resource-based policy on each resource shared using this managed permission. The
   *             <code>Resource</code> comes from the ARN of the specific resource that you are sharing.
   *             The <code>Principal</code> comes from the list of identities added to the resource
   *             share.</p>
   * @public
   */
  policyTemplate: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const PermissionStatus = {
  ATTACHABLE: "ATTACHABLE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  UNATTACHABLE: "UNATTACHABLE",
} as const;

/**
 * @public
 */
export type PermissionStatus = (typeof PermissionStatus)[keyof typeof PermissionStatus];

/**
 * <p>Information about a RAM managed permission.</p>
 * @public
 */
export interface ResourceSharePermissionDetail {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of this RAM managed permission.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The version of the permission described in this response.</p>
   * @public
   */
  version?: string;

  /**
   * <p>Specifies whether the version of the permission represented in this response is the
   *             default version for this permission.</p>
   * @public
   */
  defaultVersion?: boolean;

  /**
   * <p>The name of this permission.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The resource type to which this permission applies.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The permission's effect and actions in JSON format. The <code>effect</code> indicates
   *             whether the specified actions are allowed or denied. The <code>actions</code> list the
   *             operations to which the principal is granted or denied access.</p>
   * @public
   */
  permission?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the permission was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Specifies whether the version of the permission represented in this response is the
   *             default version for all resources of this resource type.</p>
   * @public
   */
  isResourceTypeDefault?: boolean;

  /**
   * <p>The type of managed permission. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_MANAGED</code> – Amazon Web Services created and manages this
   *                     managed permission. You can associate it with your resource shares, but you can't modify it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOMER_MANAGED</code> – You, or another principal in
   *                     your account created this managed permission. You can associate it with your resource shares and create
   *                     new versions that have different permissions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  permissionType?: PermissionType;

  /**
   * <p>Indicates what features are available for this resource share. This parameter can have one of
   *             the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDARD</b> – A resource share that supports all
   *                     functionality. These resource shares are visible to all principals you share the resource share with.
   *                     You can modify these resource shares in RAM using the console or APIs. This resource share might
   *                     have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CREATED_FROM_POLICY</b> – The customer
   *                     manually shared a resource by attaching a resource-based policy. That policy did
   *                     not match any existing managed permissions, so RAM created this customer managed permission automatically on the
   *                     customer's behalf based on the attached policy document. This type of resource share
   *                     is visible only to the Amazon Web Services account that created it. You can't modify it in
   *                     RAM unless you promote it. For more information,
   *                     see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PROMOTING_TO_STANDARD</b> – This
   *                     resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran
   *                     the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation
   *                     is still in progress. This value changes to <code>STANDARD</code> when
   *                     complete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  featureSet?: PermissionFeatureSet;

  /**
   * <p>The current status of the association between the permission and the resource share.
   *             The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ATTACHABLE</code> – This permission or version can be associated
   *                 with resource shares.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNATTACHABLE</code> – This permission or version can't
   *                 currently be associated with resource shares.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> – This permission or version is in the process of
   *                     being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> – This permission or version is deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: PermissionStatus;

  /**
   * <p>The tag key and value pairs attached to the resource share.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePermissionVersionResponse {
  /**
   * <p>Information about a RAM managed permission.</p>
   * @public
   */
  permission?: ResourceSharePermissionDetail;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The operation failed because it would exceed the limit for the number of versions you
 *             can have for a permission. To view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the
 *                 Service Quotas console</a>.</p>
 * @public
 */
export class PermissionVersionsLimitExceededException extends __BaseException {
  readonly name: "PermissionVersionsLimitExceededException" = "PermissionVersionsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionVersionsLimitExceededException, __BaseException>) {
    super({
      name: "PermissionVersionsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionVersionsLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface CreateResourceShareRequest {
  /**
   * <p>Specifies the name of the resource share.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies a list of one or more ARNs of the resources to associate with the
   *             resource share.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>Specifies a list of one or more principals to associate with the resource share.</p>
   *          <p>You can include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   * @public
   */
  principals?: string[];

  /**
   * <p>Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to
   *             the resources associated with the resource share.</p>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>Specifies whether principals outside your organization in Organizations can be associated
   *             with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts
   *             that are <i>not</i> in your organization. A value of <code>false</code>
   *             only has meaning if your account is a member of an Amazon Web Services Organization. The default value
   *             is <code>true</code>.</p>
   * @public
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the RAM permission to associate with the resource share. If you do
   *             not specify an ARN for the permission, RAM automatically attaches the default version
   *             of the permission for each resource type. You can associate only one permission with
   *             each resource type included in the resource share.</p>
   * @public
   */
  permissionArns?: string[];

  /**
   * <p>Specifies from which source accounts the service principal
   *             has access to the resources in this resource share.</p>
   * @public
   */
  sources?: string[];
}

/**
 * @public
 * @enum
 */
export const ResourceShareFeatureSet = {
  CREATED_FROM_POLICY: "CREATED_FROM_POLICY",
  PROMOTING_TO_STANDARD: "PROMOTING_TO_STANDARD",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ResourceShareFeatureSet = (typeof ResourceShareFeatureSet)[keyof typeof ResourceShareFeatureSet];

/**
 * @public
 * @enum
 */
export const ResourceShareStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ResourceShareStatus = (typeof ResourceShareStatus)[keyof typeof ResourceShareStatus];

/**
 * <p>Describes a resource share in RAM.</p>
 * @public
 */
export interface ResourceShare {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share</p>
   * @public
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the resource share.</p>
   * @public
   */
  owningAccountId?: string;

  /**
   * <p>Indicates whether principals outside your organization in Organizations can be associated
   *             with a resource share.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>True</code> – the resource share can be shared with any
   *                     Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>False</code> – the resource share can be shared with only
   *                     accounts in the same organization as the account that owns the resource
   *                     share.</p>
   *             </li>
   *          </ul>
   * @public
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>The current status of the resource share.</p>
   * @public
   */
  status?: ResourceShareStatus;

  /**
   * <p>A message about the status of the resource share.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The tag key and value pairs attached to the resource share.</p>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>The date and time when the resource share was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the resource share was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Indicates what features are available for this resource share. This parameter can have one of
   *             the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDARD</b> – A resource share that supports all
   *                     functionality. These resource shares are visible to all principals you share the resource share with.
   *                     You can modify these resource shares in RAM using the console or APIs. This resource share might
   *                     have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CREATED_FROM_POLICY</b> – The customer
   *                     manually shared a resource by attaching a resource-based policy. That policy did
   *                     not match any existing managed permissions, so RAM created this customer managed permission automatically on the
   *                     customer's behalf based on the attached policy document. This type of resource share
   *                     is visible only to the Amazon Web Services account that created it. You can't modify it in
   *                     RAM unless you promote it. For more information,
   *                     see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PROMOTING_TO_STANDARD</b> – This
   *                     resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran
   *                     the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation
   *                     is still in progress. This value changes to <code>STANDARD</code> when
   *                     complete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  featureSet?: ResourceShareFeatureSet;
}

/**
 * @public
 */
export interface CreateResourceShareResponse {
  /**
   * <p>An object with information about the new resource share.</p>
   * @public
   */
  resourceShare?: ResourceShare;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The operation failed because it would exceed the limit for tags for your
 *             Amazon Web Services account.</p>
 * @public
 */
export class TagLimitExceededException extends __BaseException {
  readonly name: "TagLimitExceededException" = "TagLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
  }
}

/**
 * <p>The operation failed because the specified tag key is a reserved word and can't be
 *             used.</p>
 * @public
 */
export class TagPolicyViolationException extends __BaseException {
  readonly name: "TagPolicyViolationException" = "TagPolicyViolationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyViolationException, __BaseException>) {
    super({
      name: "TagPolicyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyViolationException.prototype);
  }
}

/**
 * @public
 */
export interface DeletePermissionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission that you want to delete.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeletePermissionResponse {
  /**
   * <p>A boolean that indicates whether the delete operations succeeded.</p>
   * @public
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>This operation is performed asynchronously, and this response parameter indicates the
   *             current status.</p>
   * @public
   */
  permissionStatus?: PermissionStatus;
}

/**
 * @public
 */
export interface DeletePermissionVersionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission with the version you want to delete.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies the version number to delete.</p>
   *          <p>You can't delete the default version for a customer managed permission.</p>
   *          <p>You can't delete a version if it's the only version of the permission. You must either
   *             first create another version, or delete the permission completely.</p>
   *          <p>You can't delete a version if it is attached to any resource shares. If the version is
   *             the default, you must first use <a>SetDefaultPermissionVersion</a> to set a
   *             different version as the default for the customer managed permission, and then use <a>AssociateResourceSharePermission</a> to update your resource shares to use
   *             the new default version.</p>
   * @public
   */
  permissionVersion: number | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeletePermissionVersionResponse {
  /**
   * <p>A boolean value that indicates whether the operation is successful.</p>
   * @public
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>This operation is performed asynchronously, and this response parameter indicates the
   *             current status.</p>
   * @public
   */
  permissionStatus?: PermissionStatus;
}

/**
 * @public
 */
export interface DeleteResourceShareRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to delete.</p>
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteResourceShareResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   * @public
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DisassociateResourceShareRequest {
  /**
   * <p>Specifies <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove resources or principals
   *             from.</p>
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for one or more resources that you want to remove from
   *             the resource share. After the operation runs, these resources are no longer shared with principals
   *             associated with the resource share.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>Specifies a list of one or more principals that no longer are to have access to the
   *             resources in this resource share.</p>
   *          <p>You can include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   * @public
   */
  principals?: string[];

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies from which source accounts the
   *             service principal no longer has access to the resources in this resource share.</p>
   * @public
   */
  sources?: string[];
}

/**
 * @public
 */
export interface DisassociateResourceShareResponse {
  /**
   * <p>An array of objects with information about the updated associations for this
   *             resource share.</p>
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DisassociateResourceSharePermissionRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove the managed permission from.</p>
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission to disassociate from the resource share. Changes to permissions take
   *             effect immediately.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DisassociateResourceSharePermissionResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   * @public
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface EnableSharingWithAwsOrganizationRequest {}

/**
 * @public
 */
export interface EnableSharingWithAwsOrganizationResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   * @public
   */
  returnValue?: boolean;
}

/**
 * @public
 */
export interface GetPermissionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission whose contents you want to retrieve.
   *             To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and
   *              then choose the name of the permission. The ARN is displayed on the detail page.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies the version number of the RAM permission to retrieve. If you don't specify
   *             this parameter, the operation retrieves the default version.</p>
   *          <p>To see the list of available versions, use <a>ListPermissionVersions</a>.</p>
   * @public
   */
  permissionVersion?: number;
}

/**
 * @public
 */
export interface GetPermissionResponse {
  /**
   * <p>An object with details about the permission.</p>
   * @public
   */
  permission?: ResourceSharePermissionDetail;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources whose policies you want to retrieve.</p>
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * <p>Specifies the principal.</p>
   * @public
   */
  principal?: string;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * <p>An array of resource policy documents in JSON format.</p>
   * @public
   */
  policies?: string[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> was not found.</p>
 * @public
 */
export class ResourceArnNotFoundException extends __BaseException {
  readonly name: "ResourceArnNotFoundException" = "ResourceArnNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceArnNotFoundException, __BaseException>) {
    super({
      name: "ResourceArnNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceArnNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface GetResourceShareAssociationsRequest {
  /**
   * <p>Specifies whether you want to retrieve the associations that involve a specified
   *             resource or principal.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRINCIPAL</code> – list the principals whose associations you
   *                     want to see.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE</code> – list the resources whose associations you want
   *                     to see.</p>
   *             </li>
   *          </ul>
   * @public
   */
  associationType: ResourceShareAssociationType | undefined;

  /**
   * <p>Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share whose associations you want to
   *             retrieve.</p>
   * @public
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource whose resource shares you want to retrieve.</p>
   *          <p>You cannot specify this parameter if the association type is
   *             <code>PRINCIPAL</code>.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an
   *             Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an
   *             individual IAM role or user.</p>
   *          <p>You cannot specify this parameter if the association type is
   *             <code>RESOURCE</code>.</p>
   * @public
   */
  principal?: string;

  /**
   * <p>Specifies that you want to retrieve only associations that have this status.</p>
   * @public
   */
  associationStatus?: ResourceShareAssociationStatus;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetResourceShareAssociationsResponse {
  /**
   * <p>An array of objects that contain the details about the associations.</p>
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetResourceShareInvitationsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share invitations you want information about.</p>
   * @public
   */
  resourceShareInvitationArns?: string[];

  /**
   * <p>Specifies that you want details about invitations only for the resource shares described by this
   *             list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *          </p>
   * @public
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetResourceShareInvitationsResponse {
  /**
   * <p>An array of objects that contain the details about the invitations.</p>
   * @public
   */
  resourceShareInvitations?: ResourceShareInvitation[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The operation failed because the specified value for <code>MaxResults</code> isn't
 *             valid.</p>
 * @public
 */
export class InvalidMaxResultsException extends __BaseException {
  readonly name: "InvalidMaxResultsException" = "InvalidMaxResultsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMaxResultsException, __BaseException>) {
    super({
      name: "InvalidMaxResultsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMaxResultsException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  OTHER_ACCOUNTS: "OTHER-ACCOUNTS",
  SELF: "SELF",
} as const;

/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * <p>A tag key and optional list of possible values that you can use to filter results for
 *             tagged resources.</p>
 * @public
 */
export interface TagFilter {
  /**
   * <p>The tag key. This must have a valid string value and can't be empty.</p>
   * @public
   */
  tagKey?: string;

  /**
   * <p>A list of zero or more tag values. If no values are provided, then the filter matches
   *             any tag with the specified key, regardless of its value.</p>
   * @public
   */
  tagValues?: string[];
}

/**
 * @public
 */
export interface GetResourceSharesRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of individual resource shares that you want information about.</p>
   * @public
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that have this
   *             status.</p>
   * @public
   */
  resourceShareStatus?: ResourceShareStatus;

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that match the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>SELF</code>
   *                   </b> – resource shares that your
   *                     account shares with other accounts</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OTHER-ACCOUNTS</code>
   *                   </b> – resource shares
   *                     that other accounts share with your account</p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * <p>Specifies the name of an individual resource share that you want to retrieve details
   *             about.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that match the
   *             specified tag keys and values.</p>
   * @public
   */
  tagFilters?: TagFilter[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want to retrieve details of only those resource shares that use the managed permission with
   *             this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  permissionArn?: string;

  /**
   * <p>Specifies that you want to retrieve details for only those resource shares that use the
   *             specified version of the managed permission.</p>
   * @public
   */
  permissionVersion?: number;
}

/**
 * @public
 */
export interface GetResourceSharesResponse {
  /**
   * <p>An array of objects that contain the information about the resource shares.</p>
   * @public
   */
  resourceShares?: ResourceShare[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceRegionScopeFilter = {
  ALL: "ALL",
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;

/**
 * @public
 */
export type ResourceRegionScopeFilter = (typeof ResourceRegionScopeFilter)[keyof typeof ResourceRegionScopeFilter];

/**
 * @public
 */
export interface ListPendingInvitationResourcesRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation. You can use <a>GetResourceShareInvitations</a> to find the ARN of the invitation.</p>
   * @public
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want the results to include only
   *             resources that have the specified scope.</p>
   *          <ul>
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
   *          <p>The default value is <code>ALL</code>.</p>
   * @public
   */
  resourceRegionScope?: ResourceRegionScopeFilter;
}

/**
 * @public
 * @enum
 */
export const ResourceRegionScope = {
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;

/**
 * @public
 */
export type ResourceRegionScope = (typeof ResourceRegionScope)[keyof typeof ResourceRegionScope];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  AVAILABLE: "AVAILABLE",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  PENDING: "PENDING",
  UNAVAILABLE: "UNAVAILABLE",
  ZONAL_RESOURCE_INACCESSIBLE: "ZONAL_RESOURCE_INACCESSIBLE",
} as const;

/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * <p>Describes a resource associated with a resource share in RAM.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The resource type. This takes the form of:
   *                 <code>service-code</code>:<code>resource-code</code>, and is case-insensitive. For
   *             example, an Amazon EC2 Subnet would be represented by the string
   *             <code>ec2:subnet</code>.</p>
   * @public
   */
  type?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share this resource is associated with.</p>
   * @public
   */
  resourceShareArn?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource group. This value is available only if the resource is
   *             part of a resource group.</p>
   * @public
   */
  resourceGroupArn?: string;

  /**
   * <p>The current status of the resource.</p>
   * @public
   */
  status?: ResourceStatus;

  /**
   * <p>A message about the status of the resource.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The date and time when the resource was associated with the resource share.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The date an time when the association between the resource and the resource share was
   *             last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Specifies the scope of visibility of this resource:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>REGIONAL</b> – The resource can be
   *                     accessed only by using requests that target the Amazon Web Services Region in which the
   *                     resource exists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>GLOBAL</b> – The resource can be accessed
   *                     from any Amazon Web Services Region.</p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceRegionScope?: ResourceRegionScope;
}

/**
 * @public
 */
export interface ListPendingInvitationResourcesResponse {
  /**
   * <p>An array of objects that contain the information about the resources included the
   *             specified resource share.</p>
   * @public
   */
  resources?: Resource[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The operation failed because a required input parameter is missing.</p>
 * @public
 */
export class MissingRequiredParameterException extends __BaseException {
  readonly name: "MissingRequiredParameterException" = "MissingRequiredParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameterException, __BaseException>) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
  }
}

/**
 * @public
 */
export interface ListPermissionAssociationsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission.</p>
   * @public
   */
  permissionArn?: string;

  /**
   * <p>Specifies that you want to list only those associations with resource shares that use this
   *             version of the managed permission. If you don't provide a value for this parameter, then the operation
   *             returns information about associations with resource shares that use any version of the
   *             managed permission.</p>
   * @public
   */
  permissionVersion?: number;

  /**
   * <p>Specifies that you want to list only those associations with resource shares that match this
   *             status.</p>
   * @public
   */
  associationStatus?: ResourceShareAssociationStatus;

  /**
   * <p>Specifies that you want to list only those associations with resource shares that include at
   *             least one resource of this resource type.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>Specifies that you want to list only those associations with resource shares that have a
   *                 <code>featureSet</code> with this value.</p>
   * @public
   */
  featureSet?: PermissionFeatureSet;

  /**
   * <p>When <code>true</code>, specifies that you want to list only those associations with
   *             resource shares that use the default version of the specified managed permission.</p>
   *          <p>When <code>false</code> (the default value), lists associations with resource shares that use
   *             any version of the specified managed permission.</p>
   * @public
   */
  defaultVersion?: boolean;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * <p>An object that describes a managed permission associated with a resource share.</p>
 * @public
 */
export interface AssociatedPermission {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the associated managed permission.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The version of the permission currently associated with the resource share.</p>
   * @public
   */
  permissionVersion?: string;

  /**
   * <p>Indicates whether the associated resource share is using the default version of the
   *             permission.</p>
   * @public
   */
  defaultVersion?: boolean;

  /**
   * <p>The resource type to which this permission applies.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The current status of the association between the permission and the resource share.
   *             The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ATTACHABLE</code> – This permission or version can be associated
   *                 with resource shares.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNATTACHABLE</code> – This permission or version can't
   *                 currently be associated with resource shares.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> – This permission or version is in the process of
   *                     being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> – This permission or version is deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string;

  /**
   * <p>Indicates what features are available for this resource share. This parameter can have one of
   *             the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>STANDARD</b> – A resource share that supports all
   *                     functionality. These resource shares are visible to all principals you share the resource share with.
   *                     You can modify these resource shares in RAM using the console or APIs. This resource share might
   *                     have been created by RAM, or it might have been <b>CREATED_FROM_POLICY</b> and then promoted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CREATED_FROM_POLICY</b> – The customer
   *                     manually shared a resource by attaching a resource-based policy. That policy did
   *                     not match any existing managed permissions, so RAM created this customer managed permission automatically on the
   *                     customer's behalf based on the attached policy document. This type of resource share
   *                     is visible only to the Amazon Web Services account that created it. You can't modify it in
   *                     RAM unless you promote it. For more information,
   *                     see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PROMOTING_TO_STANDARD</b> – This
   *                     resource share was originally <code>CREATED_FROM_POLICY</code>, but the customer ran
   *                     the <a>PromoteResourceShareCreatedFromPolicy</a> and that operation
   *                     is still in progress. This value changes to <code>STANDARD</code> when
   *                     complete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  featureSet?: PermissionFeatureSet;

  /**
   * <p>The date and time when the association between the permission and the resource share
   *             was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource share associated with this permission.</p>
   * @public
   */
  resourceShareArn?: string;
}

/**
 * @public
 */
export interface ListPermissionAssociationsResponse {
  /**
   * <p>A structure with information about this customer managed permission.</p>
   * @public
   */
  permissions?: AssociatedPermission[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const PermissionTypeFilter = {
  ALL: "ALL",
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;

/**
 * @public
 */
export type PermissionTypeFilter = (typeof PermissionTypeFilter)[keyof typeof PermissionTypeFilter];

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * <p>Specifies that you want to list only those permissions that apply to the specified
   *             resource type. This parameter is not case sensitive.</p>
   *          <p>For example, to list only permissions that apply to Amazon EC2 subnets, specify
   *                 <code>ec2:subnet</code>. You can use the <a>ListResourceTypes</a>
   *             operation to get the specific string required.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want to list only permissions of this type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – returns only Amazon Web Services managed permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCAL</code> – returns only customer managed permissions</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – returns both Amazon Web Services managed permissions and customer managed permissions.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify this parameter, the default is <code>All</code>.</p>
   * @public
   */
  permissionType?: PermissionTypeFilter;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * <p>An array of objects with information about the permissions.</p>
   * @public
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPermissionVersionsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission whose versions you want to list. You
   *             can use the <code>permissionVersion</code> parameter on the <a>AssociateResourceSharePermission</a> operation to specify a non-default
   *             version to attach.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListPermissionVersionsResponse {
  /**
   * <p>An array of objects that contain details for each of the available versions.</p>
   * @public
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPrincipalsRequest {
  /**
   * <p>Specifies that you want to list information for only resource shares that match the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>SELF</code>
   *                   </b> – principals that
   *                     your account is sharing resources with</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OTHER-ACCOUNTS</code>
   *                   </b> –
   *                     principals that are sharing resources with your account</p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * <p>Specifies that you want to list principal information for the resource share with the specified
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>Specifies that you want to list information for only the listed principals.</p>
   *          <p>You can include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example:
   *                         <code>organizations::123456789012:organization/o-exampleorgid</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an organizational unit (OU) in Organizations, for example:
   *                         <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM role, for example:
   *                         <code>iam::123456789012:role/rolename</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An ARN of an IAM user, for example:
   *                         <code>iam::123456789012user/username</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Not all resource types can be shared with IAM roles and users.
   *              For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *          </note>
   * @public
   */
  principals?: string[];

  /**
   * <p>Specifies that you want to list information for only principals associated with resource shares
   *             that include the specified resource type.</p>
   *          <p>For a list of valid values, query the <a>ListResourceTypes</a>
   *             operation.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>Specifies that you want to list information for only principals associated with the
   *             resource shares specified by a list the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Describes a principal for use with Resource Access Manager.</p>
 * @public
 */
export interface Principal {
  /**
   * <p>The ID of the principal that can be associated with a resource share.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource share the principal is associated with.</p>
   * @public
   */
  resourceShareArn?: string;

  /**
   * <p>The date and time when the principal was associated with the resource share.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the association between the resource share and the principal
   *             was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Indicates the relationship between the Amazon Web Services account the principal belongs to and the
   *             account that owns the resource share:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>True</code> – The two accounts belong to same
   *                     organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>False</code> – The two accounts do not belong to the same
   *                     organization.</p>
   *             </li>
   *          </ul>
   * @public
   */
  external?: boolean;
}

/**
 * @public
 */
export interface ListPrincipalsResponse {
  /**
   * <p>An array of objects that contain the details about the principals.</p>
   * @public
   */
  principals?: Principal[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReplacePermissionAssociationsWorkStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ReplacePermissionAssociationsWorkStatus =
  (typeof ReplacePermissionAssociationsWorkStatus)[keyof typeof ReplacePermissionAssociationsWorkStatus];

/**
 * @public
 */
export interface ListReplacePermissionAssociationsWorkRequest {
  /**
   * <p>A list of IDs. These values come from the <code>id</code>field of the
   *                 <code>replacePermissionAssociationsWork</code>structure returned by the <a>ReplacePermissionAssociations</a> operation. </p>
   * @public
   */
  workIds?: string[];

  /**
   * <p>Specifies that you want to see only the details about requests with a status that
   *             matches this value.</p>
   * @public
   */
  status?: ReplacePermissionAssociationsWorkStatus;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A structure that represents the background work that RAM performs when you invoke
 *             the <a>ReplacePermissionAssociations</a> operation.</p>
 * @public
 */
export interface ReplacePermissionAssociationsWork {
  /**
   * <p>The unique identifier for the background task associated with one <a>ReplacePermissionAssociations</a> request.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that this background task is replacing.</p>
   * @public
   */
  fromPermissionArn?: string;

  /**
   * <p>The version of the managed permission that this background task is replacing.</p>
   * @public
   */
  fromPermissionVersion?: string;

  /**
   * <p>The ARN of the managed permission that this background task is associating with the resource shares in place
   *             of the managed permission and version specified in <code>fromPermissionArn</code> and
   *                 <code>fromPermissionVersion</code>.</p>
   * @public
   */
  toPermissionArn?: string;

  /**
   * <p>The version of the managed permission that this background task is associating with the resource shares. This
   *             is always the version that is currently the default for this managed permission.</p>
   * @public
   */
  toPermissionVersion?: string;

  /**
   * <p>Specifies the current status of the background tasks for the specified ID. The output
   *             is one of the following strings:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ReplacePermissionAssociationsWorkStatus;

  /**
   * <p>Specifies the reason for a <code>FAILED</code> status. This field is present only when
   *             there <code>status</code> is <code>FAILED</code>.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The date and time when this asynchronous background task was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The date and time when the status of this background task was last updated.</p>
   * @public
   */
  lastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListReplacePermissionAssociationsWorkResponse {
  /**
   * <p>An array of data structures that provide details of the matching work IDs.</p>
   * @public
   */
  replacePermissionAssociationsWorks?: ReplacePermissionAssociationsWork[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The operation failed because the specified resource type isn't valid.</p>
 * @public
 */
export class InvalidResourceTypeException extends __BaseException {
  readonly name: "InvalidResourceTypeException" = "InvalidResourceTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceTypeException, __BaseException>) {
    super({
      name: "InvalidResourceTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceTypeException.prototype);
  }
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * <p>Specifies that you want to list only the resource shares that match the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>SELF</code>
   *                   </b> – resources that
   *                     your account shares with other accounts</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>OTHER-ACCOUNTS</code>
   *                   </b> –
   *                     resources that other accounts share with your account</p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * <p>Specifies that you want to list only the resource shares that are associated with the specified
   *             principal.</p>
   * @public
   */
  principal?: string;

  /**
   * <p>Specifies that you want to list only the resource shares that include resources of the specified
   *             resource type.</p>
   *          <p>For valid values, query the <a>ListResourceTypes</a> operation.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>Specifies that you want to list only the resource shares that include resources with the
   *             specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>Specifies that you want to list only resources in the resource shares identified by the
   *             specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  resourceShareArns?: string[];

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want the results to include only
   *             resources that have the specified scope.</p>
   *          <ul>
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
   *          <p>The default value is <code>ALL</code>.</p>
   * @public
   */
  resourceRegionScope?: ResourceRegionScopeFilter;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * <p>An array of objects that contain information about the resources.</p>
   * @public
   */
  resources?: Resource[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListResourceSharePermissionsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share for which you want to retrieve the associated
   *             permissions.</p>
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListResourceSharePermissionsResponse {
  /**
   * <p>An array of objects that describe the permissions associated with the resource share.</p>
   * @public
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListResourceTypesRequest {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
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
   * @public
   */
  maxResults?: number;

  /**
   * <p>Specifies that you want the results to include only
   *             resources that have the specified scope.</p>
   *          <ul>
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
   *          <p>The default value is <code>ALL</code>.</p>
   * @public
   */
  resourceRegionScope?: ResourceRegionScopeFilter;
}

/**
 * <p>Information about a shareable resource type and the Amazon Web Services service to which resources
 *             of that type belong.</p>
 * @public
 */
export interface ServiceNameAndResourceType {
  /**
   * <p>The type of the resource. This takes the form of:
   *                 <code>service-code</code>:<code>resource-code</code>, and is case-insensitive. For
   *             example, an Amazon EC2 Subnet would be represented by the string
   *             <code>ec2:subnet</code>.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The name of the Amazon Web Services service to which resources of this type belong.</p>
   * @public
   */
  serviceName?: string;

  /**
   * <p>Specifies the scope of visibility of resources of this type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>REGIONAL</b> – The resource can be
   *                     accessed only by using requests that target the Amazon Web Services Region in which the
   *                     resource exists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>GLOBAL</b> – The resource can be accessed
   *                     from any Amazon Web Services Region.</p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceRegionScope?: ResourceRegionScope;
}

/**
 * @public
 */
export interface ListResourceTypesResponse {
  /**
   * <p>An array of objects that contain information about the resource types that can be
   *             shared using RAM.</p>
   * @public
   */
  resourceTypes?: ServiceNameAndResourceType[];

  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PromotePermissionCreatedFromPolicyRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the <code>CREATED_FROM_POLICY</code> permission that you
   *             want to promote. You can get this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> by calling the <a>ListResourceSharePermissions</a> operation.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies a name for the promoted customer managed permission.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface PromotePermissionCreatedFromPolicyResponse {
  /**
   * <p>Information about an RAM permission.</p>
   * @public
   */
  permission?: ResourceSharePermissionSummary;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface PromoteResourceShareCreatedFromPolicyRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to promote.</p>
   * @public
   */
  resourceShareArn: string | undefined;
}

/**
 * @public
 */
export interface PromoteResourceShareCreatedFromPolicyResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   * @public
   */
  returnValue?: boolean;
}

/**
 * <p>There isn't an existing managed permission defined in RAM that has the same IAM permissions as
 *             the resource-based policy attached to the resource. You should first run <a>PromotePermissionCreatedFromPolicy</a> to create that managed permission.</p>
 * @public
 */
export class UnmatchedPolicyPermissionException extends __BaseException {
  readonly name: "UnmatchedPolicyPermissionException" = "UnmatchedPolicyPermissionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnmatchedPolicyPermissionException, __BaseException>) {
    super({
      name: "UnmatchedPolicyPermissionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnmatchedPolicyPermissionException.prototype);
  }
}

/**
 * @public
 */
export interface RejectResourceShareInvitationRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to reject.</p>
   * @public
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface RejectResourceShareInvitationResponse {
  /**
   * <p>An object that contains the details about the rejected invitation.</p>
   * @public
   */
  resourceShareInvitation?: ResourceShareInvitation;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface ReplacePermissionAssociationsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to replace.</p>
   * @public
   */
  fromPermissionArn: string | undefined;

  /**
   * <p>Specifies that you want to updated the permissions for only those resource shares that use the
   *             specified version of the managed permission.</p>
   * @public
   */
  fromPermissionVersion?: number;

  /**
   * <p>Specifies the ARN of the managed permission that you want to associate with resource
   *             shares in place of the one specified by <code>fromPerssionArn</code> and
   *                 <code>fromPermissionVersion</code>.</p>
   *          <p>The operation always associates the version that is currently the default for the
   *             specified managed permission.</p>
   * @public
   */
  toPermissionArn: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface ReplacePermissionAssociationsResponse {
  /**
   * <p>Specifies a data structure that you can use to track the asynchronous tasks that RAM
   *             performs to complete this operation. You can use the <a>ListReplacePermissionAssociationsWork</a> operation and pass the
   *                 <code>id</code> value returned in this structure.</p>
   * @public
   */
  replacePermissionAssociationsWork?: ReplacePermissionAssociationsWork;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface SetDefaultPermissionVersionRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission whose default version you want to change.</p>
   * @public
   */
  permissionArn: string | undefined;

  /**
   * <p>Specifies the version number that you want to designate as the default for customer managed permission. To
   *             see a list of all available version numbers, use <a>ListPermissionVersions</a>.</p>
   * @public
   */
  permissionVersion: number | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface SetDefaultPermissionVersionResponse {
  /**
   * <p>A boolean value that indicates whether the operation was successful.</p>
   * @public
   */
  returnValue?: boolean;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add tags to. You must specify
   *                 <i>either</i>
   *             <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.</p>
   * @public
   */
  resourceShareArn?: string;

  /**
   * <p>A list of one or more tag key and value pairs. The tag key must be present and not be
   *             an empty string. The tag value must be present but can be an empty string.</p>
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to add tags to. You must specify
   *                 <i>either</i>
   *             <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both.</p>
   * @public
   */
  resourceArn?: string;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove tags from. The tags are
   *             removed from the resource share, not the resources in the resource share. You must specify either
   *                 <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both.</p>
   * @public
   */
  resourceShareArn?: string;

  /**
   * <p>Specifies a list of one or more tag keys that you want to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;

  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to remove tags from. You must
   *             specify either <code>resourceArn</code>, or <code>resourceShareArn</code>, but not
   *             both.</p>
   * @public
   */
  resourceArn?: string;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateResourceShareRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to modify.</p>
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * <p>If specified, the new name that you want to attach to the resource share.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies whether principals outside your organization in Organizations can be associated
   *             with a resource share.</p>
   * @public
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateResourceShareResponse {
  /**
   * <p>Information about the resource share.</p>
   * @public
   */
  resourceShare?: ResourceShare;

  /**
   * <p>The idempotency identifier associated with this request. If you
   *              want to repeat the same operation in an idempotent manner then you must include this
   *              value in the <code>clientToken</code> request parameter of that later call. All other
   *              parameters must also have the same values that you used in the first call.</p>
   * @public
   */
  clientToken?: string;
}
