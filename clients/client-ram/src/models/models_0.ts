// smithy-typescript generated code
import type {
  PermissionFeatureSet,
  PermissionStatus,
  PermissionType,
  PermissionTypeFilter,
  ReplacePermissionAssociationsWorkStatus,
  ResourceOwner,
  ResourceRegionScope,
  ResourceRegionScopeFilter,
  ResourceShareAssociationStatus,
  ResourceShareAssociationType,
  ResourceShareFeatureSet,
  ResourceShareInvitationStatus,
  ResourceShareStatus,
  ResourceStatus,
} from "./enums";

/**
 * @public
 */
export interface AcceptResourceShareInvitationRequest {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the invitation that you want to accept.
   *
   * @public
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Describes an association between a resource share and either a principal or a resource.
 *
 * @public
 */
export interface ResourceShareAssociation {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share.
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * The name of the resource share.
   *
   * @public
   */
  resourceShareName?: string | undefined;

  /**
   * The associated entity. This can be either of the following:
   *
   * - For a resource association, this is the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource.
   * - For principal associations, this is one of the following:
   *
   *   - The ID of an Amazon Web Services account
   *   - The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an organization in Organizations
   *   - The ARN of an organizational unit (OU) in Organizations
   *   - The ARN of an IAM role
   *   - The ARN of an IAM user
   *
   * @public
   */
  associatedEntity?: string | undefined;

  /**
   * The type of entity included in this association.
   *
   * @public
   */
  associationType?: ResourceShareAssociationType | undefined;

  /**
   * The current status of the association.
   *
   * @public
   */
  status?: ResourceShareAssociationStatus | undefined;

  /**
   * A message about the status of the association.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The date and time when the association was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The date and time when the association was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * Indicates whether the principal belongs to the same organization in Organizations as the Amazon Web Services account that owns the resource share.
   *
   * @public
   */
  external?: boolean | undefined;
}

/**
 * Describes an invitation for an Amazon Web Services account to join a resource share.
 *
 * @public
 */
export interface ResourceShareInvitation {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the invitation.
   *
   * @public
   */
  resourceShareInvitationArn?: string | undefined;

  /**
   * The name of the resource share.
   *
   * @public
   */
  resourceShareName?: string | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that sent the invitation.
   *
   * @public
   */
  senderAccountId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that received the invitation.
   *
   * @public
   */
  receiverAccountId?: string | undefined;

  /**
   * The date and time when the invitation was sent.
   *
   * @public
   */
  invitationTimestamp?: Date | undefined;

  /**
   * The current status of the invitation.
   *
   * @public
   */
  status?: ResourceShareInvitationStatus | undefined;

  /**
   * To view the resources associated with a pending resource share invitation, use ListPendingInvitationResources.
   *
   * @deprecated This member has been deprecated. Use ListPendingInvitationResources.
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[] | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IAM user or role that received the invitation.
   *
   * @public
   */
  receiverArn?: string | undefined;
}

/**
 * @public
 */
export interface AcceptResourceShareInvitationResponse {
  /**
   * An object that contains information about the specified invitation.
   *
   * @public
   */
  resourceShareInvitation?: ResourceShareInvitation | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourceShareRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share that you want to add principals or resources to.
   *
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * Specifies a list of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resources that you want to share. This can be `null` if you want to add only principals.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * Specifies a list of principals to whom you want to the resource share. This can be `null` if you want to add only resources.
   *
   * What the principals can do with the resources in the share is determined by the RAM permissions that you associate with the resource share. See AssociateResourceSharePermission.
   *
   * You can include the following values:
   *
   * - An Amazon Web Services account ID, for example: `123456789012`
   * - An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an organization in Organizations, for example: `organizations::123456789012:organization/o-exampleorgid`
   * - An ARN of an organizational unit (OU) in Organizations, for example: `organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123`
   * - An ARN of an IAM role, for example: `iam::123456789012:role/rolename`
   * - An ARN of an IAM user, for example: `iam::123456789012user/username`
   * - A service principal name, for example: `service-id.amazonaws.com`
   *
   * > **Note:** Not all resource types can be shared with IAM roles and users. For more information, see [Sharing with IAM roles and users](https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types) in the *Resource Access Manager User Guide*.
   *
   * @public
   */
  principals?: string[] | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies source constraints (accounts, ARNs, organization IDs, or organization paths) that limit when service principals can access resources in this resource share. When a service principal attempts to access a shared resource, validation is performed to ensure the request originates from one of the specified sources. This helps prevent confused deputy attacks by applying constraints on where service principals can access resources from.
   *
   * @public
   */
  sources?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateResourceShareResponse {
  /**
   * An array of objects that contain information about the associations.
   *
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[] | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourceSharePermissionRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share to which you want to add or replace permissions.
   *
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the ListPermissions operation or go to the [Permissions library](https://console.aws.amazon.com/ram/home#Permissions:) page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies whether the specified permission should replace the existing permission associated with the resource share. Use `true` to replace the current permissions. Use `false` to add the permission to a resource share that currently doesn't have a permission. The default value is `false`.
   *
   * > **Note:** A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set `replace` to `true` then the operation returns an error. This helps prevent accidental overwriting of a permission.
   *
   * @public
   */
  replace?: boolean | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the version of the RAM permission to associate with the resource share. You can specify *only* the version that is currently set as the default version for the permission. If you also set the `replace` pararameter to `true`, then this operation updates an outdated version of the permission to the current default version.
   *
   * > **Note:** You don't need to specify this parameter because the default behavior is to use the version that is currently set as the default version for the permission. This parameter is supported for backwards compatibility.
   *
   * @public
   */
  permissionVersion?: number | undefined;
}

/**
 * @public
 */
export interface AssociateResourceSharePermissionResponse {
  /**
   * A return value of `true` indicates that the request succeeded. A value of `false` indicates that the request failed.
   *
   * @public
   */
  returnValue?: boolean | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * A structure containing a tag. A tag is metadata that you can attach to your resources to help organize and categorize them. You can also use them to help you secure your resources. For more information, see [Controlling access to Amazon Web Services resources using tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html).
 *
 * For more information about tags, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The key, or name, attached to the tag. Every tag must have a key. Key names are case sensitive.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The string value attached to the tag. The value can be an empty string. Key values are case sensitive.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreatePermissionRequest {
  /**
   * Specifies the name of the customer managed permission. The name must be unique within the Amazon Web Services Region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the name of the resource type that this customer managed permission applies to.
   *
   * The format is `<service-code>:<resource-type>` and is case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string `ec2:Subnet`. To see the list of valid values for this parameter, query the ListResourceTypes operation. This value must match the display name of the resource (available in `ListResourceTypes`).
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * A string in JSON format string that contains the following elements of a resource-based policy:
   *
   * - **Effect**: must be set to `ALLOW`.
   * - **Action**: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see [Actions, resources, and condition keys for Amazon Web Services services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *Identity and Access Management User Guide*.
   * - **Condition**: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see [IAM policies: Condition element](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html) in the *Identity and Access Management User Guide*.
   *
   * This template can't include either the `Resource` or `Principal` elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The `Resource` comes from the ARN of the specific resource that you are sharing. The `Principal` comes from the list of identities added to the resource share.
   *
   * @public
   */
  policyTemplate: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies a list of one or more tag key and value pairs to attach to the permission.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Information about an RAM permission.
 *
 * @public
 */
export interface ResourceSharePermissionSummary {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the permission you want information about.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The version of the permission associated with this resource share.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies whether the version of the managed permission used by this resource share is the default version for this managed permission.
   *
   * @public
   */
  defaultVersion?: boolean | undefined;

  /**
   * The name of this managed permission.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of resource to which this permission applies. This takes the form of: `service-code`:`resource-code`, and is case-insensitive. For example, an Amazon EC2 Subnet would be represented by the string `ec2:subnet`.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The current status of the permission.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time when the permission was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The date and time when the permission was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * Specifies whether the managed permission associated with this resource share is the default managed permission for all resources of this resource type.
   *
   * @public
   */
  isResourceTypeDefault?: boolean | undefined;

  /**
   * The type of managed permission. This can be one of the following values:
   *
   * - `AWS_MANAGED` – Amazon Web Services created and manages this managed permission. You can associate it with your resource shares, but you can't modify it.
   * - `CUSTOMER_MANAGED` – You, or another principal in your account created this managed permission. You can associate it with your resource shares and create new versions that have different permissions.
   *
   * @public
   */
  permissionType?: PermissionType | undefined;

  /**
   * Indicates what features are available for this resource share. This parameter can have one of the following values:
   *
   * - **STANDARD** – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been **CREATED_FROM_POLICY** and then promoted.
   * - **CREATED_FROM_POLICY** – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see PromoteResourceShareCreatedFromPolicy.
   * - **PROMOTING_TO_STANDARD** – This resource share was originally `CREATED_FROM_POLICY`, but the customer ran the PromoteResourceShareCreatedFromPolicy and that operation is still in progress. This value changes to `STANDARD` when complete.
   *
   * @public
   */
  featureSet?: PermissionFeatureSet | undefined;

  /**
   * A list of the tag key value pairs currently attached to the permission.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePermissionResponse {
  /**
   * A structure with information about this customer managed permission.
   *
   * @public
   */
  permission?: ResourceSharePermissionSummary | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePermissionVersionRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the customer managed permission you're creating a new version for.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * A string in JSON format string that contains the following elements of a resource-based policy:
   *
   * - **Effect**: must be set to `ALLOW`.
   * - **Action**: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see [Actions, resources, and condition keys for Amazon Web Services services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *Identity and Access Management User Guide*.
   * - **Condition**: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see [IAM policies: Condition element](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html) in the *Identity and Access Management User Guide*.
   *
   * This template can't include either the `Resource` or `Principal` elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The `Resource` comes from the ARN of the specific resource that you are sharing. The `Principal` comes from the list of identities added to the resource share.
   *
   * @public
   */
  policyTemplate: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Information about a RAM managed permission.
 *
 * @public
 */
export interface ResourceSharePermissionDetail {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of this RAM managed permission.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The version of the permission described in this response.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies whether the version of the permission represented in this response is the default version for this permission.
   *
   * @public
   */
  defaultVersion?: boolean | undefined;

  /**
   * The name of this permission.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The resource type to which this permission applies.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The permission's effect and actions in JSON format. The `effect` indicates whether the specified actions are allowed or denied. The `actions` list the operations to which the principal is granted or denied access.
   *
   * @public
   */
  permission?: string | undefined;

  /**
   * The date and time when the permission was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The date and time when the permission was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * Specifies whether the version of the permission represented in this response is the default version for all resources of this resource type.
   *
   * @public
   */
  isResourceTypeDefault?: boolean | undefined;

  /**
   * The type of managed permission. This can be one of the following values:
   *
   * - `AWS_MANAGED` – Amazon Web Services created and manages this managed permission. You can associate it with your resource shares, but you can't modify it.
   * - `CUSTOMER_MANAGED` – You, or another principal in your account created this managed permission. You can associate it with your resource shares and create new versions that have different permissions.
   *
   * @public
   */
  permissionType?: PermissionType | undefined;

  /**
   * Indicates what features are available for this resource share. This parameter can have one of the following values:
   *
   * - **STANDARD** – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been **CREATED_FROM_POLICY** and then promoted.
   * - **CREATED_FROM_POLICY** – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see PromoteResourceShareCreatedFromPolicy.
   * - **PROMOTING_TO_STANDARD** – This resource share was originally `CREATED_FROM_POLICY`, but the customer ran the PromoteResourceShareCreatedFromPolicy and that operation is still in progress. This value changes to `STANDARD` when complete.
   *
   * @public
   */
  featureSet?: PermissionFeatureSet | undefined;

  /**
   * The current status of the association between the permission and the resource share. The following are the possible values:
   *
   * - `ATTACHABLE` – This permission or version can be associated with resource shares.
   * - `UNATTACHABLE` – This permission or version can't currently be associated with resource shares.
   * - `DELETING` – This permission or version is in the process of being deleted.
   * - `DELETED` – This permission or version is deleted.
   *
   * @public
   */
  status?: PermissionStatus | undefined;

  /**
   * The tag key and value pairs attached to the resource share.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePermissionVersionResponse {
  /**
   * Information about a RAM managed permission.
   *
   * @public
   */
  permission?: ResourceSharePermissionDetail | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The configuration of the resource share
 *
 * @public
 */
export interface ResourceShareConfiguration {
  /**
   * Specifies whether the consumer account retains access to the resource share after leaving the organization.
   *
   * @public
   */
  retainSharingOnAccountLeaveOrganization?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateResourceShareRequest {
  /**
   * Specifies the name of the resource share.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies a list of one or more ARNs of the resources to associate with the resource share.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * Specifies a list of one or more principals to associate with the resource share.
   *
   * You can include the following values:
   *
   * - An Amazon Web Services account ID, for example: `123456789012`
   * - An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an organization in Organizations, for example: `organizations::123456789012:organization/o-exampleorgid`
   * - An ARN of an organizational unit (OU) in Organizations, for example: `organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123`
   * - An ARN of an IAM role, for example: `iam::123456789012:role/rolename`
   * - An ARN of an IAM user, for example: `iam::123456789012user/username`
   * - A service principal name, for example: `service-id.amazonaws.com`
   *
   * > **Note:** Not all resource types can be shared with IAM roles and users. For more information, see [Sharing with IAM roles and users](https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types) in the *Resource Access Manager User Guide*.
   *
   * @public
   */
  principals?: string[] | undefined;

  /**
   * Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of `true` lets you share with individual Amazon Web Services accounts that are *not* in your organization. A value of `false` only has meaning if your account is a member of an Amazon Web Services Organization. The default value is `true`.
   *
   * @public
   */
  allowExternalPrincipals?: boolean | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
   *
   * @public
   */
  permissionArns?: string[] | undefined;

  /**
   * Specifies source constraints (accounts, ARNs, organization IDs, or organization paths) that limit when service principals can access resources in this resource share. When a service principal attempts to access a shared resource, validation is performed to ensure the request originates from one of the specified sources. This helps prevent confused deputy attacks by applying constraints on where service principals can access resources from.
   *
   * @public
   */
  sources?: string[] | undefined;

  /**
   * Specifies the configuration of this resource share.
   *
   * @public
   */
  resourceShareConfiguration?: ResourceShareConfiguration | undefined;
}

/**
 * Describes a resource share in RAM.
 *
 * @public
 */
export interface ResourceShare {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * The name of the resource share.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the resource share.
   *
   * @public
   */
  owningAccountId?: string | undefined;

  /**
   * Indicates whether principals outside your organization in Organizations can be associated with a resource share.
   *
   * - `True` – the resource share can be shared with any Amazon Web Services account.
   * - `False` – the resource share can be shared with only accounts in the same organization as the account that owns the resource share.
   *
   * @public
   */
  allowExternalPrincipals?: boolean | undefined;

  /**
   * The current status of the resource share.
   *
   * @public
   */
  status?: ResourceShareStatus | undefined;

  /**
   * A message about the status of the resource share.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The tag key and value pairs attached to the resource share.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The date and time when the resource share was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The date and time when the resource share was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * Indicates what features are available for this resource share. This parameter can have one of the following values:
   *
   * - **STANDARD** – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been **CREATED_FROM_POLICY** and then promoted.
   * - **CREATED_FROM_POLICY** – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see PromoteResourceShareCreatedFromPolicy.
   * - **PROMOTING_TO_STANDARD** – This resource share was originally `CREATED_FROM_POLICY`, but the customer ran the PromoteResourceShareCreatedFromPolicy and that operation is still in progress. This value changes to `STANDARD` when complete.
   *
   * @public
   */
  featureSet?: ResourceShareFeatureSet | undefined;

  /**
   * The configuration of the resource share
   *
   * @public
   */
  resourceShareConfiguration?: ResourceShareConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateResourceShareResponse {
  /**
   * An object with information about the new resource share.
   *
   * @public
   */
  resourceShare?: ResourceShare | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePermissionRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the customer managed permission that you want to delete.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePermissionResponse {
  /**
   * A boolean that indicates whether the delete operations succeeded.
   *
   * @public
   */
  returnValue?: boolean | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * This operation is performed asynchronously, and this response parameter indicates the current status.
   *
   * @public
   */
  permissionStatus?: PermissionStatus | undefined;
}

/**
 * @public
 */
export interface DeletePermissionVersionRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the permission with the version you want to delete.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies the version number to delete.
   *
   * You can't delete the default version for a customer managed permission.
   *
   * You can't delete a version if it's the only version of the permission. You must either first create another version, or delete the permission completely.
   *
   * You can't delete a version if it is attached to any resource shares. If the version is the default, you must first use SetDefaultPermissionVersion to set a different version as the default for the customer managed permission, and then use AssociateResourceSharePermission to update your resource shares to use the new default version.
   *
   * @public
   */
  permissionVersion: number | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePermissionVersionResponse {
  /**
   * A boolean value that indicates whether the operation is successful.
   *
   * @public
   */
  returnValue?: boolean | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * This operation is performed asynchronously, and this response parameter indicates the current status.
   *
   * @public
   */
  permissionStatus?: PermissionStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResourceShareRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share to delete.
   *
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceShareResponse {
  /**
   * A return value of `true` indicates that the request succeeded. A value of `false` indicates that the request failed.
   *
   * @public
   */
  returnValue?: boolean | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceShareRequest {
  /**
   * Specifies [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share that you want to remove resources or principals from.
   *
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * Specifies a list of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) for one or more resources that you want to remove from the resource share. After the operation runs, these resources are no longer shared with principals associated with the resource share.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * Specifies a list of one or more principals that no longer are to have access to the resources in this resource share.
   *
   * You can include the following values:
   *
   * - An Amazon Web Services account ID, for example: `123456789012`
   * - An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an organization in Organizations, for example: `organizations::123456789012:organization/o-exampleorgid`
   * - An ARN of an organizational unit (OU) in Organizations, for example: `organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123`
   * - An ARN of an IAM role, for example: `iam::123456789012:role/rolename`
   * - An ARN of an IAM user, for example: `iam::123456789012user/username`
   * - A service principal name, for example: `service-id.amazonaws.com`
   *
   * > **Note:** Not all resource types can be shared with IAM roles and users. For more information, see [Sharing with IAM roles and users](https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types) in the *Resource Access Manager User Guide*.
   *
   * @public
   */
  principals?: string[] | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies source constraints (accounts, ARNs, organization IDs, or organization paths) to remove from the resource share. This enables granular management of source constraints while maintaining service principal associations. At least one source must remain when service principals are present.
   *
   * @public
   */
  sources?: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceShareResponse {
  /**
   * An array of objects with information about the updated associations for this resource share.
   *
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[] | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceSharePermissionRequest {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share that you want to remove the managed permission from.
   *
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the managed permission to disassociate from the resource share. Changes to permissions take effect immediately.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceSharePermissionResponse {
  /**
   * A return value of `true` indicates that the request succeeded. A value of `false` indicates that the request failed.
   *
   * @public
   */
  returnValue?: boolean | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
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
   * A return value of `true` indicates that the request succeeded. A value of `false` indicates that the request failed.
   *
   * @public
   */
  returnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface GetPermissionRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the ListPermissions operation or go to the [Permissions library](https://console.aws.amazon.com/ram/home#Permissions:) page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies the version number of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.
   *
   * To see the list of available versions, use ListPermissionVersions.
   *
   * @public
   */
  permissionVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetPermissionResponse {
  /**
   * An object with details about the permission.
   *
   * @public
   */
  permission?: ResourceSharePermissionDetail | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resources whose policies you want to retrieve.
   *
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * Specifies the principal.
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * An array of resource policy documents in JSON format.
   *
   * @public
   */
  policies?: string[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceShareAssociationsRequest {
  /**
   * Specifies whether you want to retrieve the associations that involve a specified resource or principal.
   *
   * - `PRINCIPAL` – list the principals whose associations you want to see.
   * - `RESOURCE` – list the resources whose associations you want to see.
   *
   * @public
   */
  associationType: ResourceShareAssociationType | undefined;

  /**
   * Specifies a list of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share whose associations you want to retrieve.
   *
   * @public
   */
  resourceShareArns?: string[] | undefined;

  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a resource whose resource shares you want to retrieve.
   *
   * You cannot specify this parameter if the association type is `PRINCIPAL`.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an individual IAM role or user.
   *
   * You cannot specify this parameter if the association type is `RESOURCE`.
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * Specifies that you want to retrieve only associations that have this status.
   *
   * @public
   */
  associationStatus?: ResourceShareAssociationStatus | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceShareAssociationsResponse {
  /**
   * An array of objects that contain the details about the associations.
   *
   * @public
   */
  resourceShareAssociations?: ResourceShareAssociation[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceShareInvitationsRequest {
  /**
   * Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share invitations you want information about.
   *
   * @public
   */
  resourceShareInvitationArns?: string[] | undefined;

  /**
   * Specifies that you want details about invitations only for the resource shares described by this list of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)
   *
   * @public
   */
  resourceShareArns?: string[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceShareInvitationsResponse {
  /**
   * An array of objects that contain the details about the invitations.
   *
   * @public
   */
  resourceShareInvitations?: ResourceShareInvitation[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A tag key and optional list of possible values that you can use to filter results for tagged resources.
 *
 * > **Note:** Multiple tag filters are evaluated as an OR condition.
 *
 * @public
 */
export interface TagFilter {
  /**
   * The tag key. This must have a valid string value and can't be empty.
   *
   * @public
   */
  tagKey?: string | undefined;

  /**
   * A list of zero or more tag values. If no values are provided, then the filter matches any tag with the specified key, regardless of its value.
   *
   * @public
   */
  tagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface GetResourceSharesRequest {
  /**
   * Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of individual resource shares that you want information about.
   *
   * @public
   */
  resourceShareArns?: string[] | undefined;

  /**
   * Specifies that you want to retrieve details of only those resource shares that have this status.
   *
   * @public
   */
  resourceShareStatus?: ResourceShareStatus | undefined;

  /**
   * Specifies that you want to retrieve details of only those resource shares that match the following:
   *
   * - **`SELF`** – resource shares that your account shares with other accounts
   * - **`OTHER-ACCOUNTS`** – resource shares that other accounts share with your account
   *
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * Specifies the name of an individual resource share that you want to retrieve details about.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values.
   *
   * @public
   */
  tagFilters?: TagFilter[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to retrieve details of only those resource shares that use the managed permission with this [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  permissionArn?: string | undefined;

  /**
   * Specifies that you want to retrieve details for only those resource shares that use the specified version of the managed permission.
   *
   * @public
   */
  permissionVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceSharesResponse {
  /**
   * An array of objects that contain the information about the resource shares.
   *
   * @public
   */
  resourceShares?: ResourceShare[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPendingInvitationResourcesRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the invitation. You can use GetResourceShareInvitations to find the ARN of the invitation.
   *
   * @public
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want the results to include only resources that have the specified scope.
   *
   * - `ALL` – the results include both global and regional resources or resource types.
   * - `GLOBAL` – the results include only global resources or resource types.
   * - `REGIONAL` – the results include only regional resources or resource types.
   *
   * The default value is `ALL`.
   *
   * @public
   */
  resourceRegionScope?: ResourceRegionScopeFilter | undefined;
}

/**
 * Describes a resource associated with a resource share in RAM.
 *
 * @public
 */
export interface Resource {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The resource type. This takes the form of: `service-code`:`resource-code`, and is case-insensitive. For example, an Amazon EC2 Subnet would be represented by the string `ec2:subnet`.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share this resource is associated with.
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource group. This value is available only if the resource is part of a resource group.
   *
   * @public
   */
  resourceGroupArn?: string | undefined;

  /**
   * The current status of the resource.
   *
   * @public
   */
  status?: ResourceStatus | undefined;

  /**
   * A message about the status of the resource.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The date and time when the resource was associated with the resource share.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The date an time when the association between the resource and the resource share was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * Specifies the scope of visibility of this resource:
   *
   * - **REGIONAL** – The resource can be accessed only by using requests that target the Amazon Web Services Region in which the resource exists.
   * - **GLOBAL** – The resource can be accessed from any Amazon Web Services Region.
   *
   * @public
   */
  resourceRegionScope?: ResourceRegionScope | undefined;
}

/**
 * @public
 */
export interface ListPendingInvitationResourcesResponse {
  /**
   * An array of objects that contain the information about the resources included the specified resource share.
   *
   * @public
   */
  resources?: Resource[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionAssociationsRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the managed permission.
   *
   * @public
   */
  permissionArn?: string | undefined;

  /**
   * Specifies that you want to list only those associations with resource shares that use this version of the managed permission. If you don't provide a value for this parameter, then the operation returns information about associations with resource shares that use any version of the managed permission.
   *
   * @public
   */
  permissionVersion?: number | undefined;

  /**
   * Specifies that you want to list only those associations with resource shares that match this status.
   *
   * @public
   */
  associationStatus?: ResourceShareAssociationStatus | undefined;

  /**
   * Specifies that you want to list only those associations with resource shares that include at least one resource of this resource type.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * Specifies that you want to list only those associations with resource shares that have a `featureSet` with this value.
   *
   * @public
   */
  featureSet?: PermissionFeatureSet | undefined;

  /**
   * When `true`, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission.
   *
   * When `false` (the default value), lists associations with resource shares that use any version of the specified managed permission.
   *
   * @public
   */
  defaultVersion?: boolean | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object that describes a managed permission associated with a resource share.
 *
 * @public
 */
export interface AssociatedPermission {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the associated managed permission.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The version of the permission currently associated with the resource share.
   *
   * @public
   */
  permissionVersion?: string | undefined;

  /**
   * Indicates whether the associated resource share is using the default version of the permission.
   *
   * @public
   */
  defaultVersion?: boolean | undefined;

  /**
   * The resource type to which this permission applies.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The current status of the association between the permission and the resource share. The following are the possible values:
   *
   * - `ATTACHABLE` – This permission or version can be associated with resource shares.
   * - `UNATTACHABLE` – This permission or version can't currently be associated with resource shares.
   * - `DELETING` – This permission or version is in the process of being deleted.
   * - `DELETED` – This permission or version is deleted.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * Indicates what features are available for this resource share. This parameter can have one of the following values:
   *
   * - **STANDARD** – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been **CREATED_FROM_POLICY** and then promoted.
   * - **CREATED_FROM_POLICY** – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see PromoteResourceShareCreatedFromPolicy.
   * - **PROMOTING_TO_STANDARD** – This resource share was originally `CREATED_FROM_POLICY`, but the customer ran the PromoteResourceShareCreatedFromPolicy and that operation is still in progress. This value changes to `STANDARD` when complete.
   *
   * @public
   */
  featureSet?: PermissionFeatureSet | undefined;

  /**
   * The date and time when the association between the permission and the resource share was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a resource share associated with this permission.
   *
   * @public
   */
  resourceShareArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionAssociationsResponse {
  /**
   * A structure with information about this customer managed permission.
   *
   * @public
   */
  permissions?: AssociatedPermission[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * Specifies that you want to list only those permissions that apply to the specified resource type. This parameter is not case sensitive.
   *
   * For example, to list only permissions that apply to Amazon EC2 subnets, specify `ec2:subnet`. You can use the ListResourceTypes operation to get the specific string required.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want to list only permissions of this type:
   *
   * - `AWS` – returns only Amazon Web Services managed permissions.
   * - `LOCAL` – returns only customer managed permissions
   * - `ALL` – returns both Amazon Web Services managed permissions and customer managed permissions.
   *
   * If you don't specify this parameter, the default is `All`.
   *
   * @public
   */
  permissionType?: PermissionTypeFilter | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * An array of objects with information about the permissions.
   *
   * @public
   */
  permissions?: ResourceSharePermissionSummary[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionVersionsRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the RAM permission whose versions you want to list. You can use the `permissionVersion` parameter on the AssociateResourceSharePermission operation to specify a non-default version to attach.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPermissionVersionsResponse {
  /**
   * An array of objects that contain details for each of the available versions.
   *
   * @public
   */
  permissions?: ResourceSharePermissionSummary[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPrincipalsRequest {
  /**
   * Specifies that you want to list information for only resource shares that match the following:
   *
   * - **`SELF`** – principals that your account is sharing resources with
   * - **`OTHER-ACCOUNTS`** – principals that are sharing resources with your account
   *
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * Specifies that you want to list principal information for the resource share with the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * Specifies that you want to list information for only the listed principals.
   *
   * You can include the following values:
   *
   * - An Amazon Web Services account ID, for example: `123456789012`
   * - An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an organization in Organizations, for example: `organizations::123456789012:organization/o-exampleorgid`
   * - An ARN of an organizational unit (OU) in Organizations, for example: `organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123`
   * - An ARN of an IAM role, for example: `iam::123456789012:role/rolename`
   * - An ARN of an IAM user, for example: `iam::123456789012user/username`
   * - A service principal name, for example: `service-id.amazonaws.com`
   *
   * > **Note:** Not all resource types can be shared with IAM roles and users. For more information, see [Sharing with IAM roles and users](https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types) in the *Resource Access Manager User Guide*.
   *
   * @public
   */
  principals?: string[] | undefined;

  /**
   * Specifies that you want to list information for only principals associated with resource shares that include the specified resource type.
   *
   * For a list of valid values, query the ListResourceTypes operation.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * Specifies that you want to list information for only principals associated with the resource shares specified by a list the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  resourceShareArns?: string[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes a principal for use with Resource Access Manager.
 *
 * @public
 */
export interface Principal {
  /**
   * The ID of the principal that can be associated with a resource share.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a resource share the principal is associated with.
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * The date and time when the principal was associated with the resource share.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The date and time when the association between the resource share and the principal was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * Indicates the relationship between the Amazon Web Services account the principal belongs to and the account that owns the resource share:
   *
   * - `True` – The two accounts belong to same organization.
   * - `False` – The two accounts do not belong to the same organization.
   *
   * @public
   */
  external?: boolean | undefined;
}

/**
 * @public
 */
export interface ListPrincipalsResponse {
  /**
   * An array of objects that contain the details about the principals.
   *
   * @public
   */
  principals?: Principal[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplacePermissionAssociationsWorkRequest {
  /**
   * A list of IDs. These values come from the `id`field of the `replacePermissionAssociationsWork`structure returned by the ReplacePermissionAssociations operation.
   *
   * @public
   */
  workIds?: string[] | undefined;

  /**
   * Specifies that you want to see only the details about requests with a status that matches this value.
   *
   * @public
   */
  status?: ReplacePermissionAssociationsWorkStatus | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A structure that represents the background work that RAM performs when you invoke the ReplacePermissionAssociations operation.
 *
 * @public
 */
export interface ReplacePermissionAssociationsWork {
  /**
   * The unique identifier for the background task associated with one ReplacePermissionAssociations request.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the managed permission that this background task is replacing.
   *
   * @public
   */
  fromPermissionArn?: string | undefined;

  /**
   * The version of the managed permission that this background task is replacing.
   *
   * @public
   */
  fromPermissionVersion?: string | undefined;

  /**
   * The ARN of the managed permission that this background task is associating with the resource shares in place of the managed permission and version specified in `fromPermissionArn` and `fromPermissionVersion`.
   *
   * @public
   */
  toPermissionArn?: string | undefined;

  /**
   * The version of the managed permission that this background task is associating with the resource shares. This is always the version that is currently the default for this managed permission.
   *
   * @public
   */
  toPermissionVersion?: string | undefined;

  /**
   * Specifies the current status of the background tasks for the specified ID. The output is one of the following strings:
   *
   * - `IN_PROGRESS`
   * - `COMPLETED`
   * - `FAILED`
   *
   * @public
   */
  status?: ReplacePermissionAssociationsWorkStatus | undefined;

  /**
   * Specifies the reason for a `FAILED` status. This field is present only when there `status` is `FAILED`.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The date and time when this asynchronous background task was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The date and time when the status of this background task was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListReplacePermissionAssociationsWorkResponse {
  /**
   * An array of data structures that provide details of the matching work IDs.
   *
   * @public
   */
  replacePermissionAssociationsWorks?: ReplacePermissionAssociationsWork[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * Specifies that you want to list only the resource shares that match the following:
   *
   * - **`SELF`** – resources that your account shares with other accounts
   * - **`OTHER-ACCOUNTS`** – resources that other accounts share with your account
   *
   * @public
   */
  resourceOwner: ResourceOwner | undefined;

  /**
   * Specifies that you want to list only the resource shares that are associated with the specified principal.
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * Specifies that you want to list only the resource shares that include resources of the specified resource type.
   *
   * For valid values, query the ListResourceTypes operation.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * Specifies that you want to list only the resource shares that include resources with the specified [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * Specifies that you want to list only resources in the resource shares identified by the specified [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  resourceShareArns?: string[] | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want the results to include only resources that have the specified scope.
   *
   * - `ALL` – the results include both global and regional resources or resource types.
   * - `GLOBAL` – the results include only global resources or resource types.
   * - `REGIONAL` – the results include only regional resources or resource types.
   *
   * The default value is `ALL`.
   *
   * @public
   */
  resourceRegionScope?: ResourceRegionScopeFilter | undefined;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * An array of objects that contain information about the resources.
   *
   * @public
   */
  resources?: Resource[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSharePermissionsRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share for which you want to retrieve the associated permissions.
   *
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResourceSharePermissionsResponse {
  /**
   * An array of objects that describe the permissions associated with the resource share.
   *
   * @public
   */
  permissions?: ResourceSharePermissionSummary[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTypesRequest {
  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that you want the results to include only resources that have the specified scope.
   *
   * - `ALL` – the results include both global and regional resources or resource types.
   * - `GLOBAL` – the results include only global resources or resource types.
   * - `REGIONAL` – the results include only regional resources or resource types.
   *
   * The default value is `ALL`.
   *
   * @public
   */
  resourceRegionScope?: ResourceRegionScopeFilter | undefined;
}

/**
 * Information about a shareable resource type and the Amazon Web Services service to which resources of that type belong.
 *
 * @public
 */
export interface ServiceNameAndResourceType {
  /**
   * The type of the resource. This takes the form of: `service-code`:`resource-code`, and is case-insensitive. For example, an Amazon EC2 Subnet would be represented by the string `ec2:subnet`.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The name of the Amazon Web Services service to which resources of this type belong.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * Specifies the scope of visibility of resources of this type:
   *
   * - **REGIONAL** – The resource can be accessed only by using requests that target the Amazon Web Services Region in which the resource exists.
   * - **GLOBAL** – The resource can be accessed from any Amazon Web Services Region.
   *
   * @public
   */
  resourceRegionScope?: ResourceRegionScope | undefined;
}

/**
 * @public
 */
export interface ListResourceTypesResponse {
  /**
   * An array of objects that contain information about the resource types that can be shared using RAM.
   *
   * @public
   */
  resourceTypes?: ServiceNameAndResourceType[] | undefined;

  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceAssociationsRequest {
  /**
   * The Amazon Resource Names (ARNs) of the resource shares for which you want to retrieve source associations.
   *
   * @public
   */
  resourceShareArns?: string[] | undefined;

  /**
   * The identifier of the source for which you want to retrieve associations. This can be an account ID, Amazon Resource Name (ARN), organization ID, or organization path.
   *
   * @public
   */
  sourceId?: string | undefined;

  /**
   * The type of source for which you want to retrieve associations.
   *
   * @public
   */
  sourceType?: string | undefined;

  /**
   * The status of the source associations that you want to retrieve.
   *
   * @public
   */
  associationStatus?: ResourceShareAssociationStatus | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a source association in a resource share. Source associations control which sources can be used with service principals.
 *
 * @public
 */
export interface AssociatedSource {
  /**
   * The Amazon Resource Name (ARN) of the resource share that contains the source association.
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * The identifier of the source. This can be an account ID, Amazon Resource Name (ARN), organization ID, or organization path.
   *
   * @public
   */
  sourceId?: string | undefined;

  /**
   * The type of source.
   *
   * @public
   */
  sourceType?: string | undefined;

  /**
   * The current status of the source association.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The date and time when the source association was last updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The date and time when the source association was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * A message about the status of the source association.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceAssociationsResponse {
  /**
   * Information about the source associations.
   *
   * @public
   */
  sourceAssociations?: AssociatedSource[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PromotePermissionCreatedFromPolicyRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the `CREATED_FROM_POLICY` permission that you want to promote. You can get this [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) by calling the ListResourceSharePermissions operation.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies a name for the promoted customer managed permission.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PromotePermissionCreatedFromPolicyResponse {
  /**
   * Information about an RAM permission.
   *
   * @public
   */
  permission?: ResourceSharePermissionSummary | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PromoteResourceShareCreatedFromPolicyRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share to promote.
   *
   * @public
   */
  resourceShareArn: string | undefined;
}

/**
 * @public
 */
export interface PromoteResourceShareCreatedFromPolicyResponse {
  /**
   * A return value of `true` indicates that the request succeeded. A value of `false` indicates that the request failed.
   *
   * @public
   */
  returnValue?: boolean | undefined;
}

/**
 * @public
 */
export interface RejectResourceShareInvitationRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the invitation that you want to reject.
   *
   * @public
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectResourceShareInvitationResponse {
  /**
   * An object that contains the details about the rejected invitation.
   *
   * @public
   */
  resourceShareInvitation?: ResourceShareInvitation | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ReplacePermissionAssociationsRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the managed permission that you want to replace.
   *
   * @public
   */
  fromPermissionArn: string | undefined;

  /**
   * Specifies that you want to updated the permissions for only those resource shares that use the specified version of the managed permission.
   *
   * @public
   */
  fromPermissionVersion?: number | undefined;

  /**
   * Specifies the ARN of the managed permission that you want to associate with resource shares in place of the one specified by `fromPerssionArn` and `fromPermissionVersion`.
   *
   * The operation always associates the version that is currently the default for the specified managed permission.
   *
   * @public
   */
  toPermissionArn: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ReplacePermissionAssociationsResponse {
  /**
   * Specifies a data structure that you can use to track the asynchronous tasks that RAM performs to complete this operation. You can use the ListReplacePermissionAssociationsWork operation and pass the `id` value returned in this structure.
   *
   * @public
   */
  replacePermissionAssociationsWork?: ReplacePermissionAssociationsWork | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultPermissionVersionRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the customer managed permission whose default version you want to change.
   *
   * @public
   */
  permissionArn: string | undefined;

  /**
   * Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use ListPermissionVersions.
   *
   * @public
   */
  permissionVersion: number | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultPermissionVersionResponse {
  /**
   * A boolean value that indicates whether the operation was successful.
   *
   * @public
   */
  returnValue?: boolean | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share that you want to add tags to. You must specify *either* `resourceShareArn`, or `resourceArn`, but not both.
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string.
   *
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the managed permission that you want to add tags to. You must specify *either* `resourceArn`, or `resourceShareArn`, but not both.
   *
   * @public
   */
  resourceArn?: string | undefined;
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
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share. You must specify either `resourceShareArn`, or `resourceArn`, but not both.
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * Specifies a list of one or more tag keys that you want to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;

  /**
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the managed permission that you want to remove tags from. You must specify either `resourceArn`, or `resourceShareArn`, but not both.
   *
   * @public
   */
  resourceArn?: string | undefined;
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
   * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share that you want to modify.
   *
   * @public
   */
  resourceShareArn: string | undefined;

  /**
   * If specified, the new name that you want to attach to the resource share.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies whether principals outside your organization in Organizations can be associated with a resource share.
   *
   * @public
   */
  allowExternalPrincipals?: boolean | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceShareResponse {
  /**
   * Information about the resource share.
   *
   * @public
   */
  resourceShare?: ResourceShare | undefined;

  /**
   * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the `clientToken` request parameter of that later call. All other parameters must also have the same values that you used in the first call.
   *
   * @public
   */
  clientToken?: string | undefined;
}
