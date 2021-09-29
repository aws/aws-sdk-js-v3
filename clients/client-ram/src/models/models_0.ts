import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface AcceptResourceShareInvitationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
 * <p>Describes an association with a resource share.</p>
 */
export interface ResourceShareAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>The associated entity. For resource associations, this is the Amazon Resource Name
   *             (ARN) of the resource. For principal associations, this is one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>An Amazon Web Services account ID</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organization in Organizations</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organizational unit (OU) in Organizations</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM role</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM user</p>
   *             </li>
   *          </ul>
   */
  associatedEntity?: string;

  /**
   * <p>The association type.</p>
   */
  associationType?: ResourceShareAssociationType | string;

  /**
   * <p>The status of the association.</p>
   */
  status?: ResourceShareAssociationStatus | string;

  /**
   * <p>A message about the status of the association.</p>
   */
  statusMessage?: string;

  /**
   * <p>The time when the association was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the association was last updated.</p>
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
 * <p>Describes an invitation to join a resource share.</p>
 */
export interface ResourceShareInvitation {
  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
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
   * <p>The status of the invitation.</p>
   */
  status?: ResourceShareInvitationStatus | string;

  /**
   * @deprecated
   *
   * <p>To view the resources associated with a pending resource share invitation, use <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html">
   *                 ListPendingInvitationResources</a>.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM user or IAM role that received the
   *             invitation.</p>
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
   * <p>Information about the invitation.</p>
   */
  resourceShareInvitation?: ResourceShareInvitation;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
 * <p>A client token input parameter was reused with an operation, but at least one of the
 *             other input parameters is different from the previous call to the operation.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message: string | undefined;
}

export namespace IdempotentParameterMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>A client token is not valid.</p>
 */
export interface InvalidClientTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidClientTokenException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidClientTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClientTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 */
export interface MalformedArnException extends __SmithyException, $MetadataBearer {
  name: "MalformedArnException";
  $fault: "client";
  message: string | undefined;
}

export namespace MalformedArnException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MalformedArnException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation is not permitted.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  message: string | undefined;
}

export namespace OperationNotPermittedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationNotPermittedException): any => ({
    ...obj,
  });
}

/**
 * <p>The invitation was already accepted.</p>
 */
export interface ResourceShareInvitationAlreadyAcceptedException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationAlreadyAcceptedException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationAlreadyAcceptedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShareInvitationAlreadyAcceptedException): any => ({
    ...obj,
  });
}

/**
 * <p>The invitation was already rejected.</p>
 */
export interface ResourceShareInvitationAlreadyRejectedException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationAlreadyRejectedException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationAlreadyRejectedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShareInvitationAlreadyRejectedException): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
 */
export interface ResourceShareInvitationArnNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationArnNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShareInvitationArnNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The invitation is expired.</p>
 */
export interface ResourceShareInvitationExpiredException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationExpiredException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationExpiredException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShareInvitationExpiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export interface ServerInternalException extends __SmithyException, $MetadataBearer {
  name: "ServerInternalException";
  $fault: "server";
  message: string | undefined;
}

export namespace ServerInternalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerInternalException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is not available.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message: string | undefined;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

export interface AssociateResourceShareRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The principals to associate with the resource share. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>An Amazon Web Services account ID</p>
   *             </li>
   *             <li>
   *                 <p>An Amazon Resource Name (ARN) of an organization in Organizations</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organizational unit (OU) in Organizations</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM role</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM user</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Not all resource types can be shared with IAM roles and IAM users. For more
   *                 information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and IAM users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *         </note>
   */
  principals?: string[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested state transition is not valid.</p>
 */
export interface InvalidStateTransitionException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidStateTransitionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidStateTransitionException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource share exceeds the limit for your account.</p>
 */
export interface ResourceShareLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceShareLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A specified resource was not found.</p>
 */
export interface UnknownResourceException extends __SmithyException, $MetadataBearer {
  name: "UnknownResourceException";
  $fault: "client";
  message: string | undefined;
}

export namespace UnknownResourceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnknownResourceException): any => ({
    ...obj,
  });
}

export interface AssociateResourceSharePermissionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the RAM permission to associate with the
   *             resource share.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>Indicates whether the permission should replace the permissions that are currently
   *             associated with the resource share. Use <code>true</code> to replace the current permissions. Use
   *                 <code>false</code> to add the permission to the current permission.</p>
   */
  replace?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The version of the RAM permissions to associate with the resource share.</p>
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
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
 * <p>Information about a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  key?: string;

  /**
   * <p>The value of the tag.</p>
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
   * <p>The name of the resource share.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARNs of the resources to associate with the resource share.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The principals to associate with the resource share. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>An Amazon Web Services account ID</p>
   *             </li>
   *             <li>
   *                 <p>An Amazon Resource Name (ARN) of an organization in Organizations</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an organizational unit (OU) in Organizations</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM role</p>
   *             </li>
   *             <li>
   *                 <p>An ARN of an IAM user</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Not all resource types can be shared with IAM roles and IAM users. For more
   *                 information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and IAM users</a> in the <i>Resource Access Manager User
   *                     Guide</i>.</p>
   *         </note>
   */
  principals?: string[];

  /**
   * <p>One or more tags.</p>
   */
  tags?: Tag[];

  /**
   * <p>Indicates whether principals outside your organization in Organizations can be associated
   *             with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the permissions to associate with the resource share. If you
   *             do not specify an ARN for the permission, RAM automatically attaches the default
   *             version of the permission for each resource type. Only one permission can be associated
   *             with each resource type in a resource share.</p>
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
 * <p>Describes a resource share.</p>
 */
export interface ResourceShare {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
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
   * <p>The status of the resource share.</p>
   */
  status?: ResourceShareStatus | string;

  /**
   * <p>A message about the status of the resource share.</p>
   */
  statusMessage?: string;

  /**
   * <p>The tags for the resource share.</p>
   */
  tags?: Tag[];

  /**
   * <p>The time when the resource share was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the resource share was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>Indicates how the resource share was created. Possible values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CREATED_FROM_POLICY</code> - Indicates that the resource share was created from an
   *                     Amazon Web Services Identity and Access Management (Amazon Web Services IAM) policy attached to a resource.
   *                     These resource shares are visible only to the Amazon Web Services account that created it. They cannot
   *                     be modified in RAM.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PROMOTING_TO_STANDARD</code> - The resource share is in the process of being
   *                     promoted. For more information, see <a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STANDARD</code> - Indicates that the resource share was created in RAM using the
   *                     console or APIs. These resource shares are visible to all principals. They can
   *                     be modified in RAM.</p>
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
   * <p>Information about the resource share.</p>
   */
  resourceShare?: ResourceShare;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
 * <p>The specified tag is a reserved word and cannot be used.</p>
 */
export interface TagPolicyViolationException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyViolationException";
  $fault: "client";
  message: string | undefined;
}

export namespace TagPolicyViolationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagPolicyViolationException): any => ({
    ...obj,
  });
}

export interface DeleteResourceShareRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The principals.</p>
   */
  principals?: string[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the permission to disassociate from the resource share.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>Indicates whether the request succeeded.</p>
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
   * <p>The Amazon Resource Name (ARN) of the permission.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>The identifier for the version of the permission.</p>
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
   * <p>The Amazon Resource Name (ARN) of the permission.</p>
   */
  arn?: string;

  /**
   * <p>The identifier for the version of the permission.</p>
   */
  version?: string;

  /**
   * <p>Specifies whether the version of the permission is set to the default version for this
   *             permission.</p>
   */
  defaultVersion?: boolean;

  /**
   * <p>The name of the permission.</p>
   */
  name?: string;

  /**
   * <p>The resource type to which the permission applies.</p>
   */
  resourceType?: string;

  /**
   * <p>The permission's effect and actions in JSON format. The <code>effect</code> indicates
   *             whether the actions are allowed or denied. The <code>actions</code> list the API actions
   *             to which the principal is granted or denied access.</p>
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
   * <p>Specifies whether the version of the permission is set to the default version for this
   *             resource type.</p>
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
   * <p>Information about the permission.</p>
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
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns: string[] | undefined;

  /**
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>A key policy document, in JSON format.</p>
   */
  policies?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
 * <p>The specified value for NextToken is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon Resource Name (ARN) was not found.</p>
 */
export interface ResourceArnNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceArnNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceArnNotFoundException): any => ({
    ...obj,
  });
}

export interface GetResourceShareAssociationsRequest {
  /**
   * <p>The association type. Specify <code>PRINCIPAL</code> to list the principals that are
   *             associated with the specified resource share. Specify <code>RESOURCE</code> to list the resources
   *             that are associated with the specified resource share.</p>
   */
  associationType: ResourceShareAssociationType | string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if
   *             the association type is <code>PRINCIPAL</code>.</p>
   */
  resourceArn?: string;

  /**
   * <p>The principal. You cannot specify this parameter if the association type is
   *                 <code>RESOURCE</code>.</p>
   */
  principal?: string;

  /**
   * <p>The association status.</p>
   */
  associationStatus?: ResourceShareAssociationStatus | string;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
   * <p>The Amazon Resource Names (ARN) of the invitations.</p>
   */
  resourceShareInvitationArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>Information about the invitations.</p>
   */
  resourceShareInvitations?: ResourceShareInvitation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
 * <p>The specified value for MaxResults is not valid.</p>
 */
export interface InvalidMaxResultsException extends __SmithyException, $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidMaxResultsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidMaxResultsException): any => ({
    ...obj,
  });
}

export enum ResourceOwner {
  OTHER_ACCOUNTS = "OTHER-ACCOUNTS",
  SELF = "SELF",
}

/**
 * <p>Used to filter information based on tags.</p>
 */
export interface TagFilter {
  /**
   * <p>The tag key.</p>
   */
  tagKey?: string;

  /**
   * <p>The tag values.</p>
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
   * <p>The Amazon Resource Names (ARNs) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The status of the resource share.</p>
   */
  resourceShareStatus?: ResourceShareStatus | string;

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>One or more tag filters.</p>
   */
  tagFilters?: TagFilter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the RAM permission that is associated with the
   *             resource share.</p>
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
   * <p>Information about the resource shares.</p>
   */
  resourceShares?: ResourceShare[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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

export interface ListPendingInvitationResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace ListPendingInvitationResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPendingInvitationResourcesRequest): any => ({
    ...obj,
  });
}

export type ResourceStatus = "AVAILABLE" | "LIMIT_EXCEEDED" | "PENDING" | "UNAVAILABLE" | "ZONAL_RESOURCE_INACCESSIBLE";

/**
 * <p>Describes a resource associated with a resource share.</p>
 */
export interface Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The resource type.</p>
   */
  type?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource group. This value is returned only if
   *             the resource is a resource group.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The status of the resource.</p>
   */
  status?: ResourceStatus | string;

  /**
   * <p>A message about the status of the resource.</p>
   */
  statusMessage?: string;

  /**
   * <p>The time when the resource was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;
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
   * <p>Information about the resources included the resource share.</p>
   */
  resources?: Resource[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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

export namespace MissingRequiredParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MissingRequiredParameterException): any => ({
    ...obj,
  });
}

export interface ListPermissionsRequest {
  /**
   * <p>Specifies the resource type for which to list permissions. For example, to list only
   *             permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>.</p>
   */
  resourceType?: string;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
 * <p>Information about a permission that is associated with a resource share.</p>
 */
export interface ResourceSharePermissionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the permission.</p>
   */
  arn?: string;

  /**
   * <p>The identifier for the version of the permission.</p>
   */
  version?: string;

  /**
   * <p>Specifies whether the version of the permission is set to the default version for this
   *             permission.</p>
   */
  defaultVersion?: boolean;

  /**
   * <p>The name of the permission.</p>
   */
  name?: string;

  /**
   * <p>The type of resource to which the permission applies.</p>
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
   * <p>Specifies whether the version of the permission is set to the default version for this
   *             resource type.</p>
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
   * <p>Information about the permissions.</p>
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The principals.</p>
   */
  principals?: string[];

  /**
   * <p>The resource type.</p>
   *         <p>Valid values: <code>acm-pca:CertificateAuthority</code> | <code>appmesh:Mesh</code> | <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:LocalGatewayRouteTable</code> | <code>ec2:PrefixList</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>imagebuilder:ContainerRecipe</code> | <code>glue:Catalog</code> | <code>glue:Database</code> | <code>glue:Table</code> | <code>license-manager:LicenseConfiguration</code> I <code>network-firewall:FirewallPolicy</code> | <code>network-firewall:StatefulRuleGroup</code> | <code>network-firewall:StatelessRuleGroup</code> | <code>outposts:Outpost</code> | <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:FirewallRuleGroup</code> |<code>route53resolver:ResolverQueryLogConfig</code> | <code>route53resolver:ResolverRule</code> | <code>s3-outposts:Outpost</code> | <code>ssm-contacts:Contact</code> | <code>ssm-incidents:ResponsePlan</code>
   *          </p>
   */
  resourceType?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The time when the principal was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the association was last updated.</p>
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
   * <p>The principals.</p>
   */
  principals?: Principal[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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

export namespace InvalidResourceTypeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidResourceTypeException): any => ({
    ...obj,
  });
}

export interface ListResourcesRequest {
  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The resource type.</p>
   *         <p>Valid values: <code>acm-pca:CertificateAuthority</code> | <code>appmesh:Mesh</code> | <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:LocalGatewayRouteTable</code> | <code>ec2:PrefixList</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>imagebuilder:ContainerRecipe</code> | <code>glue:Catalog</code> | <code>glue:Database</code> | <code>glue:Table</code> | <code>license-manager:LicenseConfiguration</code> I <code>network-firewall:FirewallPolicy</code> | <code>network-firewall:StatefulRuleGroup</code> | <code>network-firewall:StatelessRuleGroup</code> | <code>outposts:Outpost</code> | <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:FirewallRuleGroup</code> |<code>route53resolver:ResolverQueryLogConfig</code> | <code>route53resolver:ResolverRule</code> | <code>s3-outposts:Outpost</code> | <code>ssm-contacts:Contact</code> | <code>ssm-incidents:ResponsePlan</code>
   *          </p>
   */
  resourceType?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;
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
   * <p>Information about the resources.</p>
   */
  resources?: Resource[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
   * <p>The permissions associated with the resource share.</p>
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;
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
 * <p>Information about the shareable resource types and the Amazon Web Services services to which they
 *             belong.</p>
 */
export interface ServiceNameAndResourceType {
  /**
   * <p>The shareable resource types.</p>
   */
  resourceType?: string;

  /**
   * <p>The name of the Amazon Web Services services to which the resources belong.</p>
   */
  serviceName?: string;
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
   * <p>The shareable resource types supported by RAM.</p>
   */
  resourceTypes?: ServiceNameAndResourceType[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource share to promote.</p>
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
   * <p>Indicates whether the request succeeded.</p>
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
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>Information about the invitation.</p>
   */
  resourceShareInvitation?: ResourceShareInvitation;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
 * <p>The requested tags exceed the limit for your account.</p>
 */
export interface TagLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace TagLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagLimitExceededException): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>One or more tags.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>Indicates whether principals outside your organization in Organizations can be associated
   *             with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
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
