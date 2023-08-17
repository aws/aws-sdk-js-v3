// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BillingconductorServiceException as __BaseException } from "./BillingconductorServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.
 *     </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A representation of a linked account.</p>
 */
export interface AccountAssociationsListElement {
  /**
   * @public
   * <p>The associating array of account IDs.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Billing Group Arn that the linked account is associated to.</p>
   */
  BillingGroupArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services account name.</p>
   */
  AccountName?: string;

  /**
   * @public
   * <p>The Amazon Web Services account email.</p>
   */
  AccountEmail?: string;
}

/**
 * @public
 * <p>The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.</p>
 */
export interface AccountGrouping {
  /**
   * @public
   * <p>The account IDs that make up the billing group. Account IDs must be a part of the consolidated billing family, and not associated with another billing group.</p>
   */
  LinkedAccountIds: string[] | undefined;

  /**
   * @public
   * <p>Specifies if this billing group will automatically associate newly added
   * Amazon Web Services accounts that join your consolidated billing family.</p>
   */
  AutoAssociate?: boolean;
}

/**
 * @public
 */
export interface AssociateAccountsInput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the billing group that associates the array of
   *       account IDs. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>
   *       The associating array of account IDs.
   *     </p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the billing group that associates the array of
   *       account IDs. </p>
   */
  Arn?: string;
}

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  PRICING_PLAN_ATTACHED_TO_BILLING_GROUP_DELETE_CONFLICT: "PRICING_PLAN_ATTACHED_TO_BILLING_GROUP_DELETE_CONFLICT",
  PRICING_RULE_ATTACHED_TO_PRICING_PLAN_DELETE_CONFLICT: "PRICING_RULE_ATTACHED_TO_PRICING_PLAN_DELETE_CONFLICT",
  PRICING_RULE_IN_PRICING_PLAN_CONFLICT: "PRICING_RULE_IN_PRICING_PLAN_CONFLICT",
  RESOURCE_NAME_CONFLICT: "RESOURCE_NAME_CONFLICT",
  WRITE_CONFLICT_RETRY: "WRITE_CONFLICT_RETRY",
} as const;

/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>Identifier of the resource in use.
   *     </p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Type of the resource in use.
   *     </p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>Reason for the inconsistent state.
   *     </p>
   */
  Reason?: ConflictExceptionReason | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 * <p>An unexpected error occurred while processing a request.
 *     </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @public
   * <p>Number of seconds you can retry after the call.
   *     </p>
   */
  RetryAfterSeconds?: number;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * @public
 * <p>The request references a resource that doesn't exist.
 *     </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>Resource identifier that was not found.
   *     </p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Resource type that was not found.
   *     </p>
   */
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * <p>The request would cause a service limit to exceed.
 *     </p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>Identifier of the resource affected.
   *     </p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>Type of the resource affected.
   *     </p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The unique code identifier of the service limit that is being exceeded.
   *     </p>
   */
  LimitCode: string | undefined;

  /**
   * @public
   * <p>The unique code for the service of the limit that is being exceeded.
   *     </p>
   */
  ServiceCode: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.LimitCode = opts.LimitCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.
 *     </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>Number of seconds you can safely retry after the call.
   *     </p>
   */
  RetryAfterSeconds?: number;
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
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * @public
 * <p>The field's information of a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The field name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The message describing why the field failed validation.</p>
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  ACCOUNTS_ALREADY_ASSOCIATED: "ACCOUNTS_ALREADY_ASSOCIATED",
  ACCOUNTS_NOT_ASSOCIATED: "ACCOUNTS_NOT_ASSOCIATED",
  CANNOT_DELETE_AUTO_ASSOCIATE_BILLING_GROUP: "CANNOT_DELETE_AUTO_ASSOCIATE_BILLING_GROUP",
  CANNOT_PARSE: "CANNOT_PARSE",
  CUSTOM_LINE_ITEM_ASSOCIATION_EXISTS: "CUSTOM_LINE_ITEM_ASSOCIATION_EXISTS",
  DUPLICATE_ACCOUNT: "DUPLICATE_ACCOUNT",
  DUPLICATE_PRICINGRULE_ARNS: "DUPLICATE_PRICINGRULE_ARNS",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  ILLEGAL_ACCOUNTS: "ILLEGAL_ACCOUNTS",
  ILLEGAL_BILLING_ENTITY: "ILLEGAL_BILLING_ENTITY",
  ILLEGAL_BILLING_PERIOD: "ILLEGAL_BILLING_PERIOD",
  ILLEGAL_BILLING_PERIOD_RANGE: "ILLEGAL_BILLING_PERIOD_RANGE",
  ILLEGAL_CHARGE_DETAILS: "ILLEGAL_CHARGE_DETAILS",
  ILLEGAL_CHILD_ASSOCIATE_RESOURCE: "ILLEGAL_CHILD_ASSOCIATE_RESOURCE",
  ILLEGAL_CUSTOMLINEITEM: "ILLEGAL_CUSTOMLINEITEM",
  ILLEGAL_CUSTOMLINEITEM_MODIFICATION: "ILLEGAL_CUSTOMLINEITEM_MODIFICATION",
  ILLEGAL_CUSTOMLINEITEM_UPDATE: "ILLEGAL_CUSTOMLINEITEM_UPDATE",
  ILLEGAL_ENDED_BILLINGGROUP: "ILLEGAL_ENDED_BILLINGGROUP",
  ILLEGAL_EXPRESSION: "ILLEGAL_EXPRESSION",
  ILLEGAL_MODIFIER_PERCENTAGE: "ILLEGAL_MODIFIER_PERCENTAGE",
  ILLEGAL_OPERATION: "ILLEGAL_OPERATION",
  ILLEGAL_PRIMARY_ACCOUNT: "ILLEGAL_PRIMARY_ACCOUNT",
  ILLEGAL_RESOURCE_ARNS: "ILLEGAL_RESOURCE_ARNS",
  ILLEGAL_SCOPE: "ILLEGAL_SCOPE",
  ILLEGAL_SERVICE: "ILLEGAL_SERVICE",
  ILLEGAL_TIERING_INPUT: "ILLEGAL_TIERING_INPUT",
  ILLEGAL_TYPE: "ILLEGAL_TYPE",
  ILLEGAL_UPDATE_CHARGE_DETAILS: "ILLEGAL_UPDATE_CHARGE_DETAILS",
  ILLEGAL_USAGE_TYPE: "ILLEGAL_USAGE_TYPE",
  INVALID_ARN: "INVALID_ARN",
  INVALID_BILLINGVIEW_ARN: "INVALID_BILLINGVIEW_ARN",
  INVALID_BILLING_GROUP: "INVALID_BILLING_GROUP",
  INVALID_BILLING_GROUP_STATUS: "INVALID_BILLING_GROUP_STATUS",
  INVALID_BILLING_PERIOD_FOR_OPERATION: "INVALID_BILLING_PERIOD_FOR_OPERATION",
  INVALID_FILTER: "INVALID_FILTER",
  INVALID_SKU_COMBO: "INVALID_SKU_COMBO",
  INVALID_TIME_RANGE: "INVALID_TIME_RANGE",
  MISMATCHED_BILLINGGROUP_ARN: "MISMATCHED_BILLINGGROUP_ARN",
  MISMATCHED_BILLINGVIEW_ARN: "MISMATCHED_BILLINGVIEW_ARN",
  MISMATCHED_CUSTOMLINEITEM_ARN: "MISMATCHED_CUSTOMLINEITEM_ARN",
  MISMATCHED_PRICINGPLAN_ARN: "MISMATCHED_PRICINGPLAN_ARN",
  MISMATCHED_PRICINGRULE_ARN: "MISMATCHED_PRICINGRULE_ARN",
  MISSING_BILLINGGROUP: "MISSING_BILLINGGROUP",
  MISSING_CUSTOMLINEITEM: "MISSING_CUSTOMLINEITEM",
  MISSING_LINKED_ACCOUNT_IDS: "MISSING_LINKED_ACCOUNT_IDS",
  MISSING_PRICINGPLAN: "MISSING_PRICINGPLAN",
  MISSING_PRICING_PLAN_ARN: "MISSING_PRICING_PLAN_ARN",
  MULTIPLE_LINKED_ACCOUNT_IDS: "MULTIPLE_LINKED_ACCOUNT_IDS",
  MULTIPLE_PRICING_PLAN_ARN: "MULTIPLE_PRICING_PLAN_ARN",
  OTHER: "OTHER",
  PRICINGRULES_ALREADY_ASSOCIATED: "PRICINGRULES_ALREADY_ASSOCIATED",
  PRICINGRULES_NOT_ASSOCIATED: "PRICINGRULES_NOT_ASSOCIATED",
  PRICINGRULES_NOT_EXIST: "PRICINGRULES_NOT_EXIST",
  PRIMARY_CANNOT_DISASSOCIATE: "PRIMARY_CANNOT_DISASSOCIATE",
  PRIMARY_NOT_ASSOCIATED: "PRIMARY_NOT_ASSOCIATED",
  TOO_MANY_ACCOUNTS_IN_REQUEST: "TOO_MANY_ACCOUNTS_IN_REQUEST",
  TOO_MANY_AUTO_ASSOCIATE_BILLING_GROUPS: "TOO_MANY_AUTO_ASSOCIATE_BILLING_GROUPS",
  TOO_MANY_CUSTOMLINEITEMS_IN_REQUEST: "TOO_MANY_CUSTOMLINEITEMS_IN_REQUEST",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The reason the request's validation failed.
   *     </p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * @public
   * <p>The fields that caused the error, if applicable.
   *     </p>
   */
  Fields?: ValidationExceptionField[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

/**
 * @public
 */
export interface AssociatePricingRulesInput {
  /**
   * @public
   * <p>
   *       The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>
   *       The <code>PricingRuleArns</code> that are associated with the Pricing Plan.
   *     </p>
   */
  PricingRuleArns: string[] | undefined;
}

/**
 * @public
 */
export interface AssociatePricingRulesOutput {
  /**
   * @public
   * <p>
   *       The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with.
   *     </p>
   */
  Arn?: string;
}

/**
 * @public
 * @enum
 */
export const AssociateResourceErrorReason = {
  ILLEGAL_CUSTOMLINEITEM: "ILLEGAL_CUSTOMLINEITEM",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  INVALID_ARN: "INVALID_ARN",
  INVALID_BILLING_PERIOD_RANGE: "INVALID_BILLING_PERIOD_RANGE",
  SERVICE_LIMIT_EXCEEDED: "SERVICE_LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type AssociateResourceErrorReason =
  (typeof AssociateResourceErrorReason)[keyof typeof AssociateResourceErrorReason];

/**
 * @public
 * <p>A representation of a resource association error.</p>
 */
export interface AssociateResourceError {
  /**
   * @public
   * <p>The reason why the resource association failed.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>A static error code that's used to classify the type of failure.</p>
   */
  Reason?: AssociateResourceErrorReason | string;
}

/**
 * @public
 * <p>A resource association result for a percentage custom line item.</p>
 */
export interface AssociateResourceResponseElement {
  /**
   * @public
   * <p>The resource ARN that was associated to the custom line item.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An <code>AssociateResourceError</code> that will populate if the resource association fails.</p>
   */
  Error?: AssociateResourceError;
}

/**
 * @public
 * <p>The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.</p>
 */
export interface ComputationPreference {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the pricing plan that's used to compute the Amazon Web Services charges for a billing group. </p>
   */
  PricingPlanArn: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingGroupInput {
  /**
   * @public
   * <p>
   *       The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
   *     </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>
   *       The billing group name. The names must be unique.
   *     </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *       The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.
   *     </p>
   */
  AccountGrouping: AccountGrouping | undefined;

  /**
   * @public
   * <p>
   *       The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *     </p>
   */
  ComputationPreference: ComputationPreference | undefined;

  /**
   * @public
   * <p> The account ID that serves as the main account in a billing group. </p>
   */
  PrimaryAccountId?: string;

  /**
   * @public
   * <p>The description of the billing group. </p>
   */
  Description?: string;

  /**
   * @public
   * <p> A map that contains tag keys and tag values that are attached to a billing group. This
   *       feature isn't available during the beta. </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateBillingGroupOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created billing group. </p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DeleteBillingGroupInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the billing group that you're deleting.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillingGroupOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted billing group.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DisassociateAccountsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the billing group that the array of account IDs will
   *       disassociate from. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The array of account IDs to disassociate.
   *     </p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateAccountsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the billing group that the array of account IDs is
   *       disassociated from. </p>
   */
  Arn?: string;
}

/**
 * @public
 * @enum
 */
export const BillingGroupStatus = {
  ACTIVE: "ACTIVE",
  PRIMARY_ACCOUNT_MISSING: "PRIMARY_ACCOUNT_MISSING",
} as const;

/**
 * @public
 */
export type BillingGroupStatus = (typeof BillingGroupStatus)[keyof typeof BillingGroupStatus];

/**
 * @public
 * <p>The filter that specifies the billing groups and pricing plans to retrieve billing group information.</p>
 */
export interface ListBillingGroupsFilter {
  /**
   * @public
   * <p>The list of billing group Amazon Resource Names (ARNs) to retrieve information.</p>
   */
  Arns?: string[];

  /**
   * @public
   * <p>The pricing plan Amazon Resource Names (ARNs) to retrieve information.</p>
   */
  PricingPlan?: string;

  /**
   * @public
   * <p>
   *       A list of billing groups to retrieve their current status for a specific time range
   *     </p>
   */
  Statuses?: (BillingGroupStatus | string)[];

  /**
   * @public
   * <p>Specifies if this billing group will automatically associate newly added
   * Amazon Web Services accounts that join your consolidated billing family.</p>
   */
  AutoAssociate?: boolean;
}

/**
 * @public
 */
export interface ListBillingGroupsInput {
  /**
   * @public
   * <p>The preferred billing period to get billing groups.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>The maximum number of billing groups to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token that's used on subsequent calls to get billing groups.
   *     </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A <code>ListBillingGroupsFilter</code> that specifies the billing group and pricing plan to retrieve billing group information.
   *     </p>
   */
  Filters?: ListBillingGroupsFilter;
}

/**
 * @public
 * <p>Specifies if the billing group has the following
 * features enabled.</p>
 */
export interface ListBillingGroupAccountGrouping {
  /**
   * @public
   * <p>Specifies if this billing group will automatically associate newly added
   * Amazon Web Services accounts that join your consolidated billing family.</p>
   */
  AutoAssociate?: boolean;
}

/**
 * @public
 * <p>A representation of a billing group.</p>
 */
export interface BillingGroupListElement {
  /**
   * @public
   * <p>The name of the billing group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) that can be used to uniquely identify the billing group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The description of the billing group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The account ID that serves as the main account in a billing group.</p>
   */
  PrimaryAccountId?: string;

  /**
   * @public
   * <p>The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.</p>
   */
  ComputationPreference?: ComputationPreference;

  /**
   * @public
   * <p>The number of accounts in the particular billing group.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The time when the billing group was created.</p>
   */
  CreationTime?: number;

  /**
   * @public
   * <p>The most recent time when the billing group was modified.</p>
   */
  LastModifiedTime?: number;

  /**
   * @public
   * <p>The billing group status. Only one of the valid values can be used.</p>
   */
  Status?: BillingGroupStatus | string;

  /**
   * @public
   * <p>The reason why the billing group is in its current status.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Specifies if the billing group has automatic account
   * association (<code>AutoAssociate</code>) enabled.</p>
   */
  AccountGrouping?: ListBillingGroupAccountGrouping;
}

/**
 * @public
 */
export interface ListBillingGroupsOutput {
  /**
   * @public
   * <p>A list of <code>BillingGroupListElement</code> retrieved.
   *     </p>
   */
  BillingGroups?: BillingGroupListElement[];

  /**
   * @public
   * <p>The pagination token that's used on subsequent calls to get billing groups.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Specifies if the billing group has the following
 * features enabled.</p>
 */
export interface UpdateBillingGroupAccountGrouping {
  /**
   * @public
   * <p>Specifies if this billing group will automatically associate newly added
   * Amazon Web Services accounts that join your consolidated billing family.</p>
   */
  AutoAssociate?: boolean;
}

/**
 * @public
 */
export interface UpdateBillingGroupInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the billing group being updated. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The name of the billing group. The names must be unique to each billing group.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the billing group. Only one of the valid values can be used.
   *     </p>
   */
  Status?: BillingGroupStatus | string;

  /**
   * @public
   * <p>
   *       The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *     </p>
   */
  ComputationPreference?: ComputationPreference;

  /**
   * @public
   * <p>A description of the billing group.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies if the billing group has automatic account
   * association (<code>AutoAssociate</code>) enabled.</p>
   */
  AccountGrouping?: UpdateBillingGroupAccountGrouping;
}

/**
 * @public
 */
export interface UpdateBillingGroupOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the billing group that was updated. </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *       The name of the billing group. The names must be unique to each billing group.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       A description of the billing group.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       The account ID that serves as the main account in a billing group.
   *     </p>
   */
  PrimaryAccountId?: string;

  /**
   * @public
   * <p>
   *       The Amazon Resource Name (ARN) of the pricing plan to compute Amazon Web Services charges for the
   *       billing group.
   *     </p>
   */
  PricingPlanArn?: string;

  /**
   * @public
   * <p>
   *       The number of accounts in the particular billing group.
   *     </p>
   */
  Size?: number;

  /**
   * @public
   * <p> The most recent time when the billing group was modified. </p>
   */
  LastModifiedTime?: number;

  /**
   * @public
   * <p>
   *       The status of the billing group. Only one of the valid values can be used.
   *     </p>
   */
  Status?: BillingGroupStatus | string;

  /**
   * @public
   * <p>
   *       The reason why the billing group is in its current status.
   *     </p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Specifies if the billing group has automatic account
   * association (<code>AutoAssociate</code>) enabled.</p>
   */
  AccountGrouping?: UpdateBillingGroupAccountGrouping;
}

/**
 * @public
 * <p>The billing period range in which the custom line item request will be applied.</p>
 */
export interface CustomLineItemBillingPeriodRange {
  /**
   * @public
   * <p>The inclusive start billing period that defines a billing period range where a custom line is applied.</p>
   */
  InclusiveStartBillingPeriod: string | undefined;

  /**
   * @public
   * <p>The inclusive end billing period that defines a billing period range where a custom line is applied.</p>
   */
  ExclusiveEndBillingPeriod?: string;
}

/**
 * @public
 */
export interface BatchAssociateResourcesToCustomLineItemInput {
  /**
   * @public
   * <p>
   *       A percentage custom line item ARN to associate the resources to.
   *     </p>
   */
  TargetArn: string | undefined;

  /**
   * @public
   * <p>
   *       A list containing the ARNs of the resources to be associated.
   *     </p>
   */
  ResourceArns: string[] | undefined;

  /**
   * @public
   * <p>The billing period range in which the custom line item request will be applied.</p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

/**
 * @public
 */
export interface BatchAssociateResourcesToCustomLineItemOutput {
  /**
   * @public
   * <p>
   *       A list of <code>AssociateResourceResponseElement</code> for each resource that's been associated to a percentage custom line item successfully.
   *     </p>
   */
  SuccessfullyAssociatedResources?: AssociateResourceResponseElement[];

  /**
   * @public
   * <p>
   *       A list of <code>AssociateResourceResponseElement</code> for each resource that failed association to a percentage custom line item.
   *     </p>
   */
  FailedAssociatedResources?: AssociateResourceResponseElement[];
}

/**
 * @public
 */
export interface BatchDisassociateResourcesFromCustomLineItemInput {
  /**
   * @public
   * <p>
   *       A percentage custom line item ARN to disassociate the resources from.
   *     </p>
   */
  TargetArn: string | undefined;

  /**
   * @public
   * <p>
   *       A list containing the ARNs of resources to be disassociated.
   *     </p>
   */
  ResourceArns: string[] | undefined;

  /**
   * @public
   * <p>The billing period range in which the custom line item request will be applied.</p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

/**
 * @public
 * <p>A resource disassociation result for a percentage custom line item.</p>
 */
export interface DisassociateResourceResponseElement {
  /**
   * @public
   * <p>The resource ARN that was disassociated from the custom line item.
   *     </p>
   */
  Arn?: string;

  /**
   * @public
   * <p> An <code>AssociateResourceError</code> that's shown if the resource disassociation fails. </p>
   */
  Error?: AssociateResourceError;
}

/**
 * @public
 */
export interface BatchDisassociateResourcesFromCustomLineItemOutput {
  /**
   * @public
   * <p>
   *       A list of <code>DisassociateResourceResponseElement</code> for each resource that's been disassociated from a percentage custom line item successfully.
   *     </p>
   */
  SuccessfullyDisassociatedResources?: DisassociateResourceResponseElement[];

  /**
   * @public
   * <p>
   *       A list of <code>DisassociateResourceResponseElement</code> for each resource that failed disassociation from a percentage custom line item.
   *     </p>
   */
  FailedDisassociatedResources?: DisassociateResourceResponseElement[];
}

/**
 * @public
 * <p>A representation of the charge details that are associated with a flat custom line item.</p>
 */
export interface CustomLineItemFlatChargeDetails {
  /**
   * @public
   * <p>The custom line item's fixed charge value in USD.</p>
   */
  ChargeValue: number | undefined;
}

/**
 * @public
 * <p>A representation of the charge details that are associated with a percentage custom line item.</p>
 */
export interface CustomLineItemPercentageChargeDetails {
  /**
   * @public
   * <p>The custom line item's percentage value. This will be multiplied against the combined
   *         value of its associated resources to determine its charge value. </p>
   */
  PercentageValue: number | undefined;

  /**
   * @public
   * <p>A list of resource ARNs to associate to the percentage custom line item.</p>
   */
  AssociatedValues?: string[];
}

/**
 * @public
 * @enum
 */
export const CustomLineItemType = {
  CREDIT: "CREDIT",
  FEE: "FEE",
} as const;

/**
 * @public
 */
export type CustomLineItemType = (typeof CustomLineItemType)[keyof typeof CustomLineItemType];

/**
 * @public
 * <p>The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>.</p>
 */
export interface CustomLineItemChargeDetails {
  /**
   * @public
   * <p>A <code>CustomLineItemFlatChargeDetails</code> that describes the charge details of a flat
   *         custom line item.</p>
   */
  Flat?: CustomLineItemFlatChargeDetails;

  /**
   * @public
   * <p>A <code>CustomLineItemPercentageChargeDetails</code> that describes the charge details of a percentage custom line item.</p>
   */
  Percentage?: CustomLineItemPercentageChargeDetails;

  /**
   * @public
   * <p>The type of the custom line item that indicates whether the charge is a fee or credit.</p>
   */
  Type: CustomLineItemType | string | undefined;
}

/**
 * @public
 */
export interface CreateCustomLineItemInput {
  /**
   * @public
   * <p>
   *       The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
   *     </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>
   *       The name of the custom line item.
   *     </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *       The description of the custom line item. This is shown on the Bills page in association with the charge value.
   *     </p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that references the billing group where the custom line
   *       item applies to. </p>
   */
  BillingGroupArn: string | undefined;

  /**
   * @public
   * <p> A time range for which the custom line item is effective. </p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;

  /**
   * @public
   * <p> A map that contains tag keys and tag values that are attached to a custom line item. </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       A <code>CustomLineItemChargeDetails</code> that describes the charge details for a custom line item.
   *     </p>
   */
  ChargeDetails: CustomLineItemChargeDetails | undefined;
}

/**
 * @public
 */
export interface CreateCustomLineItemOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the created custom line item. </p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DeleteCustomLineItemInput {
  /**
   * @public
   * <p>
   *       The ARN of the custom line item to be deleted.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The billing period range in which the custom line item request will be applied.</p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

/**
 * @public
 */
export interface DeleteCustomLineItemOutput {
  /**
   * @public
   * <p>
   *       Then ARN of the deleted custom line item.
   *     </p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>A filter that specifies the custom line items and billing groups to retrieve FFLI information.</p>
 */
export interface ListCustomLineItemsFilter {
  /**
   * @public
   * <p>A list of custom line items to retrieve information.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>The billing group Amazon Resource Names (ARNs) to retrieve information.</p>
   */
  BillingGroups?: string[];

  /**
   * @public
   * <p>A list of custom line item ARNs to retrieve information.</p>
   */
  Arns?: string[];
}

/**
 * @public
 */
export interface ListCustomLineItemsInput {
  /**
   * @public
   * <p>
   *       The preferred billing period to get custom line items (FFLIs).
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>
   *       The maximum number of billing groups to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *       The pagination token that's used on subsequent calls to get custom line items (FFLIs).
   *     </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A <code>ListCustomLineItemsFilter</code> that specifies the custom line item names
   *       and/or billing group Amazon Resource Names (ARNs) to retrieve FFLI information.</p>
   */
  Filters?: ListCustomLineItemsFilter;
}

/**
 * @public
 * <p>
 *       A representation of the charge details that are associated with a flat custom line item.
 *     </p>
 */
export interface ListCustomLineItemFlatChargeDetails {
  /**
   * @public
   * <p>
   *       The custom line item's fixed charge value in USD.
   *     </p>
   */
  ChargeValue: number | undefined;
}

/**
 * @public
 * <p>
 *       A representation of the charge details that are associated with a percentage custom line item.
 *     </p>
 */
export interface ListCustomLineItemPercentageChargeDetails {
  /**
   * @public
   * <p>
   *       The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *     </p>
   */
  PercentageValue: number | undefined;
}

/**
 * @public
 * <p>
 *       A representation of the charge details of a custom line item.
 *     </p>
 */
export interface ListCustomLineItemChargeDetails {
  /**
   * @public
   * <p>
   *       A <code>ListCustomLineItemFlatChargeDetails</code> that describes the charge details of a flat custom line item.
   *     </p>
   */
  Flat?: ListCustomLineItemFlatChargeDetails;

  /**
   * @public
   * <p>
   *       A <code>ListCustomLineItemPercentageChargeDetails</code> that describes the charge details of a percentage custom line item.
   *     </p>
   */
  Percentage?: ListCustomLineItemPercentageChargeDetails;

  /**
   * @public
   * <p>
   *       The type of the custom line item that indicates whether the charge is a <code>fee</code> or <code>credit</code>.
   *     </p>
   */
  Type: CustomLineItemType | string | undefined;
}

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  CNY: "CNY",
  USD: "USD",
} as const;

/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * <p>A representation of a custom line item.</p>
 */
export interface CustomLineItemListElement {
  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) for custom line items.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The custom line item's name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A <code>ListCustomLineItemChargeDetails</code> that describes the charge details of a custom line item.</p>
   */
  ChargeDetails?: ListCustomLineItemChargeDetails;

  /**
   * @public
   * <p>The custom line item's charge value currency. Only one of the valid values can be used.</p>
   */
  CurrencyCode?: CurrencyCode | string;

  /**
   * @public
   * <p>The custom line item's description. This is shown on the Bills page in association with the charge value.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The product code that's associated with the custom line item.</p>
   */
  ProductCode?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.</p>
   */
  BillingGroupArn?: string;

  /**
   * @public
   * <p>The time created.</p>
   */
  CreationTime?: number;

  /**
   * @public
   * <p>The most recent time when the custom line item was modified.</p>
   */
  LastModifiedTime?: number;

  /**
   * @public
   * <p>The number of resources that are associated to the custom line item.</p>
   */
  AssociationSize?: number;
}

/**
 * @public
 */
export interface ListCustomLineItemsOutput {
  /**
   * @public
   * <p>
   *       A list of <code>FreeFormLineItemListElements</code> received.
   *     </p>
   */
  CustomLineItems?: CustomLineItemListElement[];

  /**
   * @public
   * <p>
   *       The pagination token that's used on subsequent calls to get custom line items (FFLIs).
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A billing period filter that specifies the custom line item versions to retrieve.</p>
 */
export interface ListCustomLineItemVersionsBillingPeriodRangeFilter {
  /**
   * @public
   * <p>The inclusive start billing period that defines a billing period range where  a custom line item version is applied.</p>
   */
  StartBillingPeriod?: string;

  /**
   * @public
   * <p>The exclusive end billing period that defines a billing period range where a  custom line item version is applied.</p>
   */
  EndBillingPeriod?: string;
}

/**
 * @public
 * <p>A filter that specifies the billing period range where the custom line item versions reside.</p>
 */
export interface ListCustomLineItemVersionsFilter {
  /**
   * @public
   * <p>The billing period range in which the custom line item version is applied.</p>
   */
  BillingPeriodRange?: ListCustomLineItemVersionsBillingPeriodRangeFilter;
}

/**
 * @public
 */
export interface ListCustomLineItemVersionsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the custom line item.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The maximum number of custom line item versions to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token that's used on subsequent calls to retrieve custom line item versions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A <code>ListCustomLineItemVersionsFilter</code> that specifies the billing period range in which the custom line item versions are applied.</p>
   */
  Filters?: ListCustomLineItemVersionsFilter;
}

/**
 * @public
 * <p>A representation of a custom line item version.</p>
 */
export interface CustomLineItemVersionListElement {
  /**
   * @public
   * <p>The name of the custom line item.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       A representation of the charge details of a custom line item.
   *     </p>
   */
  ChargeDetails?: ListCustomLineItemChargeDetails;

  /**
   * @public
   * <p>The charge value currency of the custom line item.</p>
   */
  CurrencyCode?: CurrencyCode | string;

  /**
   * @public
   * <p>The description of the custom line item.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The product code that’s associated with the custom line item.</p>
   */
  ProductCode?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the billing group that the custom line item applies to.</p>
   */
  BillingGroupArn?: string;

  /**
   * @public
   * <p>The time when the custom line item version was created.</p>
   */
  CreationTime?: number;

  /**
   * @public
   * <p>The most recent time that the custom line item version was modified.</p>
   */
  LastModifiedTime?: number;

  /**
   * @public
   * <p>The number of resources that are associated with the custom line item.</p>
   */
  AssociationSize?: number;

  /**
   * @public
   * <p>The start billing period of the custom line item version.</p>
   */
  StartBillingPeriod?: string;

  /**
   * @public
   * <p>The end billing period of the custom line item version.</p>
   */
  EndBillingPeriod?: string;

  /**
   * @public
   * <p>
   *       A list of custom line item Amazon Resource Names (ARNs) to retrieve information.
   *     </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *       The inclusive start time.
   *     </p>
   */
  StartTime?: number;
}

/**
 * @public
 */
export interface ListCustomLineItemVersionsOutput {
  /**
   * @public
   * <p>A list of <code>CustomLineItemVersionListElements</code> that are received.</p>
   */
  CustomLineItemVersions?: CustomLineItemVersionListElement[];

  /**
   * @public
   * <p>The pagination token that's used on subsequent calls to retrieve custom line item versions.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const CustomLineItemRelationship = {
  CHILD: "CHILD",
  PARENT: "PARENT",
} as const;

/**
 * @public
 */
export type CustomLineItemRelationship = (typeof CustomLineItemRelationship)[keyof typeof CustomLineItemRelationship];

/**
 * @public
 * <p>
 *       A filter that specifies the type of resource associations that should be retrieved for a custom line item.
 *     </p>
 */
export interface ListResourcesAssociatedToCustomLineItemFilter {
  /**
   * @public
   * <p>
   *       The type of relationship between the custom line item and the associated resource.
   *     </p>
   */
  Relationship?: CustomLineItemRelationship | string;
}

/**
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemInput {
  /**
   * @public
   * <p>
   *       The billing period for which the resource associations will be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>
   *       The ARN of the custom line item for which the resource associations will be listed.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>
   *       (Optional) The maximum number of resource associations to be retrieved.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> (Optional) The pagination token that's returned by a previous request. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   *       (Optional) A <code>ListResourcesAssociatedToCustomLineItemFilter</code> that can specify the types of resources that should be retrieved.
   *     </p>
   */
  Filters?: ListResourcesAssociatedToCustomLineItemFilter;
}

/**
 * @public
 * <p>
 *       A representation of a resource association for a custom line item.
 *     </p>
 */
export interface ListResourcesAssociatedToCustomLineItemResponseElement {
  /**
   * @public
   * <p>
   *       The ARN of the associated resource.
   *     </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *       The type of relationship between the custom line item and the associated resource.
   *     </p>
   */
  Relationship?: CustomLineItemRelationship | string;

  /**
   * @public
   * <p>The end billing period of the associated resource.</p>
   */
  EndBillingPeriod?: string;
}

/**
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemOutput {
  /**
   * @public
   * <p>
   *       The custom line item ARN for which the resource associations are listed.
   *     </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *       A list of <code>ListResourcesAssociatedToCustomLineItemResponseElement</code> for each resource association retrieved.
   *     </p>
   */
  AssociatedResources?: ListResourcesAssociatedToCustomLineItemResponseElement[];

  /**
   * @public
   * <p>
   *       The pagination token to be used in subsequent requests to retrieve additional results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       A representation of the new charge details that are associated with a flat custom line item.
 *     </p>
 */
export interface UpdateCustomLineItemFlatChargeDetails {
  /**
   * @public
   * <p>
   *       The custom line item's new fixed charge value in USD.
   *     </p>
   */
  ChargeValue: number | undefined;
}

/**
 * @public
 * <p>
 *       A representation of the new charge details that are associated with a percentage custom line item.
 *     </p>
 */
export interface UpdateCustomLineItemPercentageChargeDetails {
  /**
   * @public
   * <p>
   *       The custom line item's new percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *     </p>
   */
  PercentageValue: number | undefined;
}

/**
 * @public
 * <p>
 *       A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>.
 *     </p>
 */
export interface UpdateCustomLineItemChargeDetails {
  /**
   * @public
   * <p>
   *       An <code>UpdateCustomLineItemFlatChargeDetails</code> that describes the new charge details of a flat custom line item.
   *     </p>
   */
  Flat?: UpdateCustomLineItemFlatChargeDetails;

  /**
   * @public
   * <p>
   *       An <code>UpdateCustomLineItemPercentageChargeDetails</code> that describes the new charge details of a percentage custom line item.
   *     </p>
   */
  Percentage?: UpdateCustomLineItemPercentageChargeDetails;
}

/**
 * @public
 */
export interface UpdateCustomLineItemInput {
  /**
   * @public
   * <p>
   *       The ARN of the custom line item to be updated.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>
   *       The new name for the custom line item.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       The new line item description of the custom line item.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       A <code>ListCustomLineItemChargeDetails</code> containing the new charge details for the custom line item.
   *     </p>
   */
  ChargeDetails?: UpdateCustomLineItemChargeDetails;

  /**
   * @public
   * <p>The billing period range in which the custom line item request will be applied.</p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

/**
 * @public
 */
export interface UpdateCustomLineItemOutput {
  /**
   * @public
   * <p>
   *       The ARN of the successfully updated custom line item.
   *     </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *       The ARN of the billing group that the custom line item is applied to.
   *     </p>
   */
  BillingGroupArn?: string;

  /**
   * @public
   * <p>
   *       The name of the successfully updated custom line item.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       The description of the successfully updated custom line item.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       A <code>ListCustomLineItemChargeDetails</code> containing the charge details of the successfully updated custom line item.
   *     </p>
   */
  ChargeDetails?: ListCustomLineItemChargeDetails;

  /**
   * @public
   * <p> The most recent time when the custom line item was modified. </p>
   */
  LastModifiedTime?: number;

  /**
   * @public
   * <p>
   *       The number of resources that are associated to the custom line item.
   *     </p>
   */
  AssociationSize?: number;
}

/**
 * @public
 * <p>The filter on the account ID of the linked account, or any of the following:</p>
 *          <p>
 *             <code>MONITORED</code>: linked accounts that are associated to billing groups.</p>
 *          <p>
 *             <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p>
 *          <p>
 *             <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn.</p>
 */
export interface ListAccountAssociationsFilter {
  /**
   * @public
   * <p>
   *             <code>MONITORED</code>: linked accounts that are associated to billing groups.</p>
   *          <p>
   *             <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p>
   *          <p>
   *             <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn.</p>
   */
  Association?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID to filter on.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>
   *       The list of Amazon Web Services IDs to retrieve their associated billing group for a given time range.
   *     </p>
   */
  AccountIds?: string[];
}

/**
 * @public
 */
export interface ListAccountAssociationsInput {
  /**
   * @public
   * <p>
   *       The preferred billing period to get account associations.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>The filter on the account ID of the linked account, or any of the following:</p>
   *          <p>
   *             <code>MONITORED</code>: linked accounts that are associated to billing groups.</p>
   *          <p>
   *             <code>UNMONITORED</code>: linked accounts that aren't associated to billing groups.</p>
   *          <p>
   *             <code>Billing Group Arn</code>: linked accounts that are associated to the provided
   *       billing group Arn. </p>
   */
  Filters?: ListAccountAssociationsFilter;

  /**
   * @public
   * <p>
   *       The pagination token that's used on subsequent calls to retrieve accounts.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAccountAssociationsOutput {
  /**
   * @public
   * <p> The list of linked accounts in the payer account. </p>
   */
  LinkedAccounts?: AccountAssociationsListElement[];

  /**
   * @public
   * <p>
   *       The pagination token that's used on subsequent calls to get accounts.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The filter used to retrieve specific <code>BillingGroupCostReportElements</code>.</p>
 */
export interface ListBillingGroupCostReportsFilter {
  /**
   * @public
   * <p>The list of Amazon Resource Names (ARNs) used to filter billing groups to retrieve reports. </p>
   */
  BillingGroupArns?: string[];
}

/**
 * @public
 */
export interface ListBillingGroupCostReportsInput {
  /**
   * @public
   * <p>The preferred billing period for your report.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>The maximum number of reports to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token that's used on subsequent calls to get reports.
   *     </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A <code>ListBillingGroupCostReportsFilter</code> to specify billing groups to retrieve reports from.
   *     </p>
   */
  Filters?: ListBillingGroupCostReportsFilter;
}

/**
 * @public
 * <p>A summary report of actual Amazon Web Services charges and calculated Amazon Web Services charges, based on the associated pricing plan of a billing group.</p>
 */
export interface BillingGroupCostReportElement {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a billing group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The actual Amazon Web Services charges for the billing group.</p>
   */
  AWSCost?: string;

  /**
   * @public
   * <p>The hypothetical Amazon Web Services charges based on the associated pricing plan of a billing group.</p>
   */
  ProformaCost?: string;

  /**
   * @public
   * <p>The billing group margin.</p>
   */
  Margin?: string;

  /**
   * @public
   * <p>The percentage of billing group margin.</p>
   */
  MarginPercentage?: string;

  /**
   * @public
   * <p>The displayed currency.</p>
   */
  Currency?: string;
}

/**
 * @public
 */
export interface ListBillingGroupCostReportsOutput {
  /**
   * @public
   * <p>A list of <code>BillingGroupCostReportElement</code> retrieved.
   *     </p>
   */
  BillingGroupCostReports?: BillingGroupCostReportElement[];

  /**
   * @public
   * <p>The pagination token that's used on subsequent calls to get reports.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>
   *       The Amazon Resource Name (ARN) that identifies the resource to list the tags.
   *     </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>
   *       The tags for the resource.
   *     </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePricingPlanInput {
  /**
   * @public
   * <p>
   *       The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
   *     </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The name of the pricing plan. The names must be unique to each pricing plan. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the pricing plan. </p>
   */
  Description?: string;

  /**
   * @public
   * <p> A list of Amazon Resource Names (ARNs) that define the pricing plan parameters. </p>
   */
  PricingRuleArns?: string[];

  /**
   * @public
   * <p>
   *       A map that contains tag keys and tag values that are attached to a pricing plan.
   *     </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePricingPlanOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created pricing plan.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DeletePricingPlanInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pricing plan that you're deleting. </p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingPlanOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the deleted pricing plan. </p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DisassociatePricingRulesInput {
  /**
   * @public
   * <p> The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p> A list containing the Amazon Resource Name (ARN) of the pricing rules that will be
   *       disassociated. </p>
   */
  PricingRuleArns: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePricingRulesOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the pricing plan that the pricing rules successfully
   *       disassociated from. </p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve
 *           pricing plan information.</p>
 */
export interface ListPricingPlansFilter {
  /**
   * @public
   * <p>A list of pricing plan Amazon Resource Names (ARNs) to retrieve information.</p>
   */
  Arns?: string[];
}

/**
 * @public
 */
export interface ListPricingPlansInput {
  /**
   * @public
   * <p>The preferred billing period to get pricing plan.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>A <code>ListPricingPlansFilter</code> that specifies the Amazon Resource Name (ARNs)
   *       of pricing plans to retrieve pricing plans information.</p>
   */
  Filters?: ListPricingPlansFilter;

  /**
   * @public
   * <p>The maximum number of pricing plans to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token that's used on subsequent call to get pricing plans.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A representation of a pricing plan.</p>
 */
export interface PricingPlanListElement {
  /**
   * @public
   * <p>The name of a pricing plan.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The pricing plan Amazon Resource Names (ARN). This can be used to uniquely identify a pricing plan.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The pricing plan description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The pricing rules count that's currently associated with this pricing plan list element.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The time when the pricing plan was created.</p>
   */
  CreationTime?: number;

  /**
   * @public
   * <p>The most recent time when the pricing plan was modified.</p>
   */
  LastModifiedTime?: number;
}

/**
 * @public
 */
export interface ListPricingPlansOutput {
  /**
   * @public
   * <p>
   *       The billing period for which the described pricing plans are applicable.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>A list of <code>PricingPlanListElement</code> retrieved.
   *     </p>
   */
  PricingPlans?: PricingPlanListElement[];

  /**
   * @public
   * <p>The pagination token that's used on subsequent calls to get pricing plans.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPricingPlansAssociatedWithPricingRuleInput {
  /**
   * @public
   * <p>
   *       The pricing plan billing period for which associations will be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p> The pricing rule Amazon Resource Name (ARN) for which associations will be listed. </p>
   */
  PricingRuleArn: string | undefined;

  /**
   * @public
   * <p>
   *       The optional maximum number of pricing rule associations to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *       The optional pagination token returned by a previous call.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPricingPlansAssociatedWithPricingRuleOutput {
  /**
   * @public
   * <p>
   *       The pricing plan billing period for which associations will be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p> The pricing rule Amazon Resource Name (ARN) for which associations will be listed. </p>
   */
  PricingRuleArn?: string;

  /**
   * @public
   * <p>
   *       The list containing pricing plans that are associated with the requested pricing rule.
   *     </p>
   */
  PricingPlanArns?: string[];

  /**
   * @public
   * <p>
   *       The pagination token to be used on subsequent calls.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface UpdatePricingPlanInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pricing plan that you're updating. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The name of the pricing plan. The name must be unique to each pricing plan.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the pricing plan. </p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdatePricingPlanOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the updated pricing plan. </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *       The name of the pricing plan. The name must be unique to each pricing plan.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       The new description for the pricing rule.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       The pricing rules count that's currently associated with this pricing plan list.
   *     </p>
   */
  Size?: number;

  /**
   * @public
   * <p> The most recent time when the pricing plan was modified. </p>
   */
  LastModifiedTime?: number;
}

/**
 * @public
 * @enum
 */
export const PricingRuleScope = {
  BILLING_ENTITY: "BILLING_ENTITY",
  GLOBAL: "GLOBAL",
  SERVICE: "SERVICE",
  SKU: "SKU",
} as const;

/**
 * @public
 */
export type PricingRuleScope = (typeof PricingRuleScope)[keyof typeof PricingRuleScope];

/**
 * @public
 * <p>
 *       The possible Amazon Web Services Free Tier configurations.
 *     </p>
 */
export interface CreateFreeTierConfig {
  /**
   * @public
   * <p>
   *       Activate or deactivate Amazon Web Services Free Tier.
   *     </p>
   */
  Activated: boolean | undefined;
}

/**
 * @public
 * <p>
 *       The set of tiering configurations for the pricing rule.
 *     </p>
 */
export interface CreateTieringInput {
  /**
   * @public
   * <p>
   *       The possible Amazon Web Services Free Tier configurations.
   *     </p>
   */
  FreeTier: CreateFreeTierConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const PricingRuleType = {
  DISCOUNT: "DISCOUNT",
  MARKUP: "MARKUP",
  TIERING: "TIERING",
} as const;

/**
 * @public
 */
export type PricingRuleType = (typeof PricingRuleType)[keyof typeof PricingRuleType];

/**
 * @public
 */
export interface CreatePricingRuleInput {
  /**
   * @public
   * <p> The token that's needed to support idempotency. Idempotency isn't currently supported,
   *       but will be implemented in a future update. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>
   *       The pricing rule name. The names must be unique to each pricing rule.
   *     </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *       The pricing rule description.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p> The scope of pricing rule that indicates if it's globally applicable, or it's
   *       service-specific. </p>
   */
  Scope: PricingRuleScope | string | undefined;

  /**
   * @public
   * <p>
   *       The type of pricing rule.
   *     </p>
   */
  Type: PricingRuleType | string | undefined;

  /**
   * @public
   * <p> A percentage modifier that's applied on the public pricing rates. </p>
   */
  ModifierPercentage?: number;

  /**
   * @public
   * <p>
   *       If the <code>Scope</code> attribute is set to <code>SERVICE</code> or <code>SKU</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for.
   *     </p>
   */
  Service?: string;

  /**
   * @public
   * <p>
   *       A map that contains tag keys and tag values that are attached to a pricing rule.
   *     </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace.
   *     </p>
   */
  BillingEntity?: string;

  /**
   * @public
   * <p>
   *       The set of tiering configurations for the pricing rule.
   *     </p>
   */
  Tiering?: CreateTieringInput;

  /**
   * @public
   * <p>
   *       Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p>
   *          <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an<code> M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region.
   *
   *     </p>
   */
  UsageType?: string;

  /**
   * @public
   * <p>
   *       Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.</p>
   *          <p>
   *         If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
   */
  Operation?: string;
}

/**
 * @public
 */
export interface CreatePricingRuleOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the created pricing rule. </p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DeletePricingRuleInput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the pricing rule that you are deleting. </p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingRuleOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the deleted pricing rule. </p>
   */
  Arn?: string;
}

/**
 * @public
 * <p> The filter that specifies criteria that the pricing rules returned by the <code>ListPricingRules</code> API will adhere to.</p>
 */
export interface ListPricingRulesFilter {
  /**
   * @public
   * <p>A list containing the pricing rule Amazon Resource Names (ARNs) to include in the API response.</p>
   */
  Arns?: string[];
}

/**
 * @public
 */
export interface ListPricingRulesInput {
  /**
   * @public
   * <p>
   *       The preferred billing period to get the pricing plan.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p> A <code>DescribePricingRuleFilter</code> that specifies the Amazon Resource Name (ARNs)
   *       of pricing rules to retrieve pricing rules information. </p>
   */
  Filters?: ListPricingRulesFilter;

  /**
   * @public
   * <p>
   *       The maximum number of pricing rules to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *       The pagination token that's used on subsequent call to get pricing rules.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       The possible Amazon Web Services Free Tier configurations.
 *     </p>
 */
export interface FreeTierConfig {
  /**
   * @public
   * <p>
   *       Activate or deactivate Amazon Web Services Free Tier application.
   *     </p>
   */
  Activated: boolean | undefined;
}

/**
 * @public
 * <p>
 *       The set of tiering configurations for the pricing rule.
 *     </p>
 */
export interface Tiering {
  /**
   * @public
   * <p>
   *       The possible Amazon Web Services Free Tier configurations.
   *     </p>
   */
  FreeTier: FreeTierConfig | undefined;
}

/**
 * @public
 * <p>A representation of a pricing rule.</p>
 */
export interface PricingRuleListElement {
  /**
   * @public
   * <p>The name of a pricing rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) used to uniquely identify a pricing rule.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The pricing rule description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The scope of pricing rule that indicates if it is globally applicable, or if it is service-specific.</p>
   */
  Scope?: PricingRuleScope | string;

  /**
   * @public
   * <p>The type of pricing rule.</p>
   */
  Type?: PricingRuleType | string;

  /**
   * @public
   * <p>A percentage modifier applied on the public pricing rates.</p>
   */
  ModifierPercentage?: number;

  /**
   * @public
   * <p>If the <code>Scope</code> attribute is <code>SERVICE</code>, this attribute indicates which service the <code>PricingRule</code> is applicable for.</p>
   */
  Service?: string;

  /**
   * @public
   * <p>The pricing plans count that this pricing rule is associated with.</p>
   */
  AssociatedPricingPlanCount?: number;

  /**
   * @public
   * <p>The time when the pricing rule was created.</p>
   */
  CreationTime?: number;

  /**
   * @public
   * <p> The most recent time when the pricing rule was modified.</p>
   */
  LastModifiedTime?: number;

  /**
   * @public
   * <p>
   *       The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace.
   *     </p>
   */
  BillingEntity?: string;

  /**
   * @public
   * <p>
   *       The set of tiering configurations for the pricing rule.
   *     </p>
   */
  Tiering?: Tiering;

  /**
   * @public
   * <p>
   *       Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p>
   *          <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an<code> M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region.
   *
   *     </p>
   */
  UsageType?: string;

  /**
   * @public
   * <p>
   *       Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.</p>
   *          <p>
   *         If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
   */
  Operation?: string;
}

/**
 * @public
 */
export interface ListPricingRulesOutput {
  /**
   * @public
   * <p>
   *       The billing period for which the described pricing rules are applicable.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p>
   *       A list containing the described pricing rules.
   *     </p>
   */
  PricingRules?: PricingRuleListElement[];

  /**
   * @public
   * <p>
   *       The pagination token that's used on subsequent calls to get pricing rules.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPricingRulesAssociatedToPricingPlanInput {
  /**
   * @public
   * <p>
   *       The billing period for which the pricing rule associations are to be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the pricing plan for which associations are to be
   *       listed.</p>
   */
  PricingPlanArn: string | undefined;

  /**
   * @public
   * <p>The optional maximum number of pricing rule associations to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *       The optional pagination token returned by a previous call.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPricingRulesAssociatedToPricingPlanOutput {
  /**
   * @public
   * <p>
   *       The billing period for which the pricing rule associations are listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the pricing plan for which associations are
   *       listed.</p>
   */
  PricingPlanArn?: string;

  /**
   * @public
   * <p>
   *       A list containing pricing rules that are associated with the requested pricing plan.
   *     </p>
   */
  PricingRuleArns?: string[];

  /**
   * @public
   * <p>
   *       The pagination token to be used on subsequent calls.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       The possible Amazon Web Services Free Tier configurations.
 *     </p>
 */
export interface UpdateFreeTierConfig {
  /**
   * @public
   * <p>
   *       Activate or deactivate application of Amazon Web Services Free Tier.
   *     </p>
   */
  Activated: boolean | undefined;
}

/**
 * @public
 * <p>
 *       The set of tiering configurations for the pricing rule.
 *     </p>
 */
export interface UpdateTieringInput {
  /**
   * @public
   * <p>
   *       The possible Amazon Web Services Free Tier configurations.
   *     </p>
   */
  FreeTier: UpdateFreeTierConfig | undefined;
}

/**
 * @public
 */
export interface UpdatePricingRuleInput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the pricing rule to update. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>
   *       The new name of the pricing rule. The name must be unique to each pricing rule.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       The new description for the pricing rule.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       The new pricing rule type.
   *     </p>
   */
  Type?: PricingRuleType | string;

  /**
   * @public
   * <p>
   *       The new modifier to show pricing plan rates as a percentage.
   *     </p>
   */
  ModifierPercentage?: number;

  /**
   * @public
   * <p>
   *       The set of tiering configurations for the pricing rule.
   *     </p>
   */
  Tiering?: UpdateTieringInput;
}

/**
 * @public
 */
export interface UpdatePricingRuleOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the successfully updated pricing rule. </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *       The new name of the pricing rule. The name must be unique to each pricing rule.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       The new description for the pricing rule.
   *     </p>
   */
  Description?: string;

  /**
   * @public
   * <p> The scope of pricing rule that indicates if it's globally applicable, or it's
   *       service-specific. </p>
   */
  Scope?: PricingRuleScope | string;

  /**
   * @public
   * <p>
   *       The new pricing rule type.
   *     </p>
   */
  Type?: PricingRuleType | string;

  /**
   * @public
   * <p>
   *       The new modifier to show pricing plan rates as a percentage.
   *     </p>
   */
  ModifierPercentage?: number;

  /**
   * @public
   * <p>
   *       If the <code>Scope</code> attribute is set to <code>SERVICE</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for.
   *     </p>
   */
  Service?: string;

  /**
   * @public
   * <p>
   *       The pricing plans count that this pricing rule is associated with.
   *     </p>
   */
  AssociatedPricingPlanCount?: number;

  /**
   * @public
   * <p>
   *       The most recent time the pricing rule was modified.
   *     </p>
   */
  LastModifiedTime?: number;

  /**
   * @public
   * <p>
   *       The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace.
   *     </p>
   */
  BillingEntity?: string;

  /**
   * @public
   * <p>
   *       The set of tiering configurations for the pricing rule.
   *     </p>
   */
  Tiering?: UpdateTieringInput;

  /**
   * @public
   * <p>Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p>
   *          <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an <code>M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region.
   *     </p>
   */
  UsageType?: string;

  /**
   * @public
   * <p>Operation refers to the specific Amazon Web Services covered by this line item. This describes the specific usage of the line item.</p>
   *          <p>
   *       If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
   */
  Operation?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>
   *       The Amazon Resource Name (ARN) of the resource to which to add tags.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>
   *       The tags to add to the resource as a list of key-value pairs.
   *     </p>
   */
  Tags: Record<string, string> | undefined;
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
   * @public
   * <p>
   *       The Amazon Resource Name (ARN) of the resource to which to delete tags.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>
   *       The tags to delete from the resource as a list of key-value pairs.
   *     </p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AccountAssociationsListElementFilterSensitiveLog = (obj: AccountAssociationsListElement): any => ({
  ...obj,
  ...(obj.AccountName && { AccountName: SENSITIVE_STRING }),
  ...(obj.AccountEmail && { AccountEmail: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBillingGroupInputFilterSensitiveLog = (obj: CreateBillingGroupInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BillingGroupListElementFilterSensitiveLog = (obj: BillingGroupListElement): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListBillingGroupsOutputFilterSensitiveLog = (obj: ListBillingGroupsOutput): any => ({
  ...obj,
  ...(obj.BillingGroups && {
    BillingGroups: obj.BillingGroups.map((item) => BillingGroupListElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateBillingGroupInputFilterSensitiveLog = (obj: UpdateBillingGroupInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBillingGroupOutputFilterSensitiveLog = (obj: UpdateBillingGroupOutput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateCustomLineItemInputFilterSensitiveLog = (obj: CreateCustomLineItemInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCustomLineItemsFilterFilterSensitiveLog = (obj: ListCustomLineItemsFilter): any => ({
  ...obj,
  ...(obj.Names && { Names: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCustomLineItemsInputFilterSensitiveLog = (obj: ListCustomLineItemsInput): any => ({
  ...obj,
  ...(obj.Filters && { Filters: ListCustomLineItemsFilterFilterSensitiveLog(obj.Filters) }),
});

/**
 * @internal
 */
export const CustomLineItemListElementFilterSensitiveLog = (obj: CustomLineItemListElement): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCustomLineItemsOutputFilterSensitiveLog = (obj: ListCustomLineItemsOutput): any => ({
  ...obj,
  ...(obj.CustomLineItems && {
    CustomLineItems: obj.CustomLineItems.map((item) => CustomLineItemListElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CustomLineItemVersionListElementFilterSensitiveLog = (obj: CustomLineItemVersionListElement): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCustomLineItemVersionsOutputFilterSensitiveLog = (obj: ListCustomLineItemVersionsOutput): any => ({
  ...obj,
  ...(obj.CustomLineItemVersions && {
    CustomLineItemVersions: obj.CustomLineItemVersions.map((item) =>
      CustomLineItemVersionListElementFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateCustomLineItemInputFilterSensitiveLog = (obj: UpdateCustomLineItemInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateCustomLineItemOutputFilterSensitiveLog = (obj: UpdateCustomLineItemOutput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAccountAssociationsOutputFilterSensitiveLog = (obj: ListAccountAssociationsOutput): any => ({
  ...obj,
  ...(obj.LinkedAccounts && {
    LinkedAccounts: obj.LinkedAccounts.map((item) => AccountAssociationsListElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreatePricingPlanInputFilterSensitiveLog = (obj: CreatePricingPlanInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PricingPlanListElementFilterSensitiveLog = (obj: PricingPlanListElement): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPricingPlansOutputFilterSensitiveLog = (obj: ListPricingPlansOutput): any => ({
  ...obj,
  ...(obj.PricingPlans && {
    PricingPlans: obj.PricingPlans.map((item) => PricingPlanListElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdatePricingPlanInputFilterSensitiveLog = (obj: UpdatePricingPlanInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePricingPlanOutputFilterSensitiveLog = (obj: UpdatePricingPlanOutput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePricingRuleInputFilterSensitiveLog = (obj: CreatePricingRuleInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PricingRuleListElementFilterSensitiveLog = (obj: PricingRuleListElement): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPricingRulesOutputFilterSensitiveLog = (obj: ListPricingRulesOutput): any => ({
  ...obj,
  ...(obj.PricingRules && {
    PricingRules: obj.PricingRules.map((item) => PricingRuleListElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdatePricingRuleInputFilterSensitiveLog = (obj: UpdatePricingRuleInput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePricingRuleOutputFilterSensitiveLog = (obj: UpdatePricingRuleOutput): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});
