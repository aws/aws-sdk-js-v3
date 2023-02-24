// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { RAMServiceException as __BaseException } from "./RAMServiceException";

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
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
}

export enum ResourceShareAssociationType {
  PRINCIPAL = "PRINCIPAL",
  RESOURCE = "RESOURCE",
}

export enum ResourceShareAssociationStatus {
  ASSOCIATED = "ASSOCIATED",
  ASSOCIATING = "ASSOCIATING",
  DISASSOCIATED = "DISASSOCIATED",
  DISASSOCIATING = "DISASSOCIATING",
  FAILED = "FAILED",
}

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
   *          <ul>
   *             <li>
   *                <p>For a resource association, this is the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource.</p>
   *             </li>
   *             <li>
   *                <p>For principal associations, this is one of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>The ID of an Amazon Web Services account</p>
   *                   </li>
   *                   <li>
   *                      <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations</p>
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

export enum ResourceShareInvitationStatus {
  ACCEPTED = "ACCEPTED",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

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

/**
 * <p>The client token input parameter was matched one used with a previous call to the
 *             operation, but at least one of the other input parameters is different from the previous
 *             call.</p>
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
 * <p>The client token is not valid.</p>
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
 * <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
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
 * <p>The requested operation is not permitted.</p>
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
 * <p>The specified invitation was already accepted.</p>
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
 * <p>The specified invitation was already rejected.</p>
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
 * <p>The specified Amazon Resource Name (ARN) for an invitation was not found.</p>
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
 * <p>The specified invitation is expired.</p>
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
 * <p>The service could not respond to the request due to an internal problem.</p>
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
 * <p>The service is not available.</p>
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
   *          <p>What the principals can do with the resources in the share is determined by the RAM
   *             permissions that you associate with the resource share. See <a>AssociateResourceSharePermission</a>.</p>
   *          <p>You can include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
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
   */
  clientToken?: string;
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

/**
 * <p>A parameter is not valid.</p>
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
 * <p>The requested state transition is not valid.</p>
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
 * <p>This request would exceed the limit for resource shares for your account.</p>
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
 * <p>You exceeded the rate at which you are allowed to perform this operation. Please try
 *             again later.</p>
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
 * <p>A specified resource was not found.</p>
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
   *          <note>
   *             <p>A resource share can have only one permission per resource type. If a resource share already has a
   *                 permission for the specified resource type and you don't set <code>replace</code> to
   *                     <code>true</code> then the operation returns an error. This helps prevent
   *                 accidental overwriting of a permission.</p>
   *          </note>
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
   */
  clientToken?: string;

  /**
   * <p>Specifies the version of the RAM permission to associate with the resource share. If you don't
   *             specify this parameter, the operation uses the version designated as the default. You
   *             can use the <a>ListPermissionVersions</a> operation to discover the available
   *             versions of a permission.</p>
   */
  permissionVersion?: number;
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

/**
 * <p>A structure containing a tag. A tag is metadata that you can attach to your resources
 *             to help organize and categorize them. You can also use them to help you secure your
 *             resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources
 *                 using tags</a>.</p>
 *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
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
   *          <p>You can include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
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
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
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

export enum ResourceShareFeatureSet {
  CREATED_FROM_POLICY = "CREATED_FROM_POLICY",
  PROMOTING_TO_STANDARD = "PROMOTING_TO_STANDARD",
  STANDARD = "STANDARD",
}

export enum ResourceShareStatus {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED_FROM_POLICY</code> - Indicates that the resource share was created from an
   *                     Identity and Access Management (IAM) resource-based permission policy attached to the resource.
   *                     This type of resource share is visible only to the Amazon Web Services account that created it. You
   *                     can't modify it in RAM unless you promote it. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROMOTING_TO_STANDARD</code> - The resource share is in the process of being
   *                     promoted. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code> - Indicates that the resource share was created in RAM using the
   *                     console or APIs. These resource shares are visible to all principals you share the resource share
   *                     with. You can modify these resource shares in RAM using the console or APIs.</p>
   *             </li>
   *          </ul>
   */
  featureSet?: ResourceShareFeatureSet | string;
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

/**
 * <p>The specified tag key is a reserved word and can't be used.</p>
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
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
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
   *          <p>You can include the following values:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account ID, for example: <code>123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
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
   */
  clientToken?: string;
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
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
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

export interface EnableSharingWithAwsOrganizationRequest {}

export interface EnableSharingWithAwsOrganizationResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   */
  returnValue?: boolean;
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

export interface GetPermissionResponse {
  /**
   * <p>An object that contains information about the permission.</p>
   */
  permission?: ResourceSharePermissionDetail;
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

/**
 * <p>The specified value for <code>NextToken</code> is not valid.</p>
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
 * <p>The specified Amazon Resource Name (ARN) was not found.</p>
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

export interface GetResourceShareAssociationsRequest {
  /**
   * <p>Specifies whether you want to retrieve the associations that involve a specified
   *             resource or principal.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRINCIPAL</code> – list the principals that are associated with
   *                     the specified resource share.</p>
   *             </li>
   *             <li>
   *                <p>
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
   *          <p>You cannot specify this parameter if the association type is
   *             <code>PRINCIPAL</code>.</p>
   */
  resourceArn?: string;

  /**
   * <p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an
   *             Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an
   *             individual IAM user or role.</p>
   *          <p>You cannot specify this parameter if the association type is
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

/**
 * <p>The specified value for <code>MaxResults</code> is not valid.</p>
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
   */
  resourceRegionScope?: ResourceRegionScopeFilter | string;
}

export enum ResourceRegionScope {
  GLOBAL = "GLOBAL",
  REGIONAL = "REGIONAL",
}

export enum ResourceStatus {
  AVAILABLE = "AVAILABLE",
  LIMIT_EXCEEDED = "LIMIT_EXCEEDED",
  PENDING = "PENDING",
  UNAVAILABLE = "UNAVAILABLE",
  ZONAL_RESOURCE_INACCESSIBLE = "ZONAL_RESOURCE_INACCESSIBLE",
}

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
   */
  resourceRegionScope?: ResourceRegionScope | string;
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

/**
 * <p>A required input parameter is missing.</p>
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

export interface ListPermissionVersionsRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the RAM permission whose versions you want to list. You
   *             can use the <code>permissionVersion</code> parameter on the <a>AssociateResourceSharePermission</a> operation to specify a non-default
   *             version to attach.</p>
   */
  permissionArn: string | undefined;

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

export interface ListPermissionVersionsResponse {
  /**
   * <p>An array of objects that contain details for each of the available versions.</p>
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
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>Specifies that you want to list principal information for the resource share with the specified
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a>.</p>
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
   *                <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of an organization in Organizations, for example:
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
   */
  principals?: string[];

  /**
   * <p>Specifies that you want to list information for only principals associated with resource shares
   *             that include the specified resource type.</p>
   *          <p>For a list of valid values, query the <a>ListResourceTypes</a>
   *             operation.</p>
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

/**
 * <p>The specified resource type is not valid.</p>
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
   *          <p>For valid values, query the <a>ListResourceTypes</a> operation.</p>
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
   */
  resourceRegionScope?: ResourceRegionScopeFilter | string;
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
   */
  resourceRegionScope?: ResourceRegionScopeFilter | string;
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
   */
  resourceRegionScope?: ResourceRegionScope | string;
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

export interface PromoteResourceShareCreatedFromPolicyRequest {
  /**
   * <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share to promote.</p>
   */
  resourceShareArn: string | undefined;
}

export interface PromoteResourceShareCreatedFromPolicyResponse {
  /**
   * <p>A return value of <code>true</code> indicates that the request succeeded.
   *              A value of <code>false</code> indicates that the request failed.</p>
   */
  returnValue?: boolean;
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
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
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

/**
 * <p>This request would exceed the limit for tags for your account.</p>
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

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   */
  clientToken?: string;
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

/**
 * @internal
 */
export const AcceptResourceShareInvitationRequestFilterSensitiveLog = (
  obj: AcceptResourceShareInvitationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceShareAssociationFilterSensitiveLog = (obj: ResourceShareAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceShareInvitationFilterSensitiveLog = (obj: ResourceShareInvitation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptResourceShareInvitationResponseFilterSensitiveLog = (
  obj: AcceptResourceShareInvitationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceShareRequestFilterSensitiveLog = (obj: AssociateResourceShareRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceShareResponseFilterSensitiveLog = (obj: AssociateResourceShareResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceSharePermissionRequestFilterSensitiveLog = (
  obj: AssociateResourceSharePermissionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateResourceSharePermissionResponseFilterSensitiveLog = (
  obj: AssociateResourceSharePermissionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceShareRequestFilterSensitiveLog = (obj: CreateResourceShareRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceShareFilterSensitiveLog = (obj: ResourceShare): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceShareResponseFilterSensitiveLog = (obj: CreateResourceShareResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceShareRequestFilterSensitiveLog = (obj: DeleteResourceShareRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceShareResponseFilterSensitiveLog = (obj: DeleteResourceShareResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceShareRequestFilterSensitiveLog = (obj: DisassociateResourceShareRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceShareResponseFilterSensitiveLog = (obj: DisassociateResourceShareResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceSharePermissionRequestFilterSensitiveLog = (
  obj: DisassociateResourceSharePermissionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateResourceSharePermissionResponseFilterSensitiveLog = (
  obj: DisassociateResourceSharePermissionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSharingWithAwsOrganizationRequestFilterSensitiveLog = (
  obj: EnableSharingWithAwsOrganizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSharingWithAwsOrganizationResponseFilterSensitiveLog = (
  obj: EnableSharingWithAwsOrganizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPermissionRequestFilterSensitiveLog = (obj: GetPermissionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSharePermissionDetailFilterSensitiveLog = (obj: ResourceSharePermissionDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPermissionResponseFilterSensitiveLog = (obj: GetPermissionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePoliciesRequestFilterSensitiveLog = (obj: GetResourcePoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePoliciesResponseFilterSensitiveLog = (obj: GetResourcePoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceShareAssociationsRequestFilterSensitiveLog = (
  obj: GetResourceShareAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceShareAssociationsResponseFilterSensitiveLog = (
  obj: GetResourceShareAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceShareInvitationsRequestFilterSensitiveLog = (obj: GetResourceShareInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceShareInvitationsResponseFilterSensitiveLog = (
  obj: GetResourceShareInvitationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterFilterSensitiveLog = (obj: TagFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceSharesRequestFilterSensitiveLog = (obj: GetResourceSharesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceSharesResponseFilterSensitiveLog = (obj: GetResourceSharesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPendingInvitationResourcesRequestFilterSensitiveLog = (
  obj: ListPendingInvitationResourcesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPendingInvitationResourcesResponseFilterSensitiveLog = (
  obj: ListPendingInvitationResourcesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPermissionsRequestFilterSensitiveLog = (obj: ListPermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSharePermissionSummaryFilterSensitiveLog = (obj: ResourceSharePermissionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPermissionsResponseFilterSensitiveLog = (obj: ListPermissionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPermissionVersionsRequestFilterSensitiveLog = (obj: ListPermissionVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPermissionVersionsResponseFilterSensitiveLog = (obj: ListPermissionVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPrincipalsRequestFilterSensitiveLog = (obj: ListPrincipalsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrincipalFilterSensitiveLog = (obj: Principal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPrincipalsResponseFilterSensitiveLog = (obj: ListPrincipalsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesRequestFilterSensitiveLog = (obj: ListResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesResponseFilterSensitiveLog = (obj: ListResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceSharePermissionsRequestFilterSensitiveLog = (
  obj: ListResourceSharePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceSharePermissionsResponseFilterSensitiveLog = (
  obj: ListResourceSharePermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceTypesRequestFilterSensitiveLog = (obj: ListResourceTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceNameAndResourceTypeFilterSensitiveLog = (obj: ServiceNameAndResourceType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceTypesResponseFilterSensitiveLog = (obj: ListResourceTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromoteResourceShareCreatedFromPolicyRequestFilterSensitiveLog = (
  obj: PromoteResourceShareCreatedFromPolicyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromoteResourceShareCreatedFromPolicyResponseFilterSensitiveLog = (
  obj: PromoteResourceShareCreatedFromPolicyResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectResourceShareInvitationRequestFilterSensitiveLog = (
  obj: RejectResourceShareInvitationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectResourceShareInvitationResponseFilterSensitiveLog = (
  obj: RejectResourceShareInvitationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceShareRequestFilterSensitiveLog = (obj: UpdateResourceShareRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceShareResponseFilterSensitiveLog = (obj: UpdateResourceShareResponse): any => ({
  ...obj,
});
