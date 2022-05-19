// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { BillingconductorServiceException as __BaseException } from "./BillingconductorServiceException";

/**
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
 * <p>
 *             <i>
 *                <b>Amazon Web Services Billing Conductor is in beta release and is subject to change. Your use of Amazon Web Services Billing Conductor is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p> A representation of a linked account. </p>
 */
export interface AccountAssociationsListElement {
  /**
   * <p>
   *       The associating array of account IDs.
   *     </p>
   */
  AccountId?: string;

  /**
   * <p> The Billing Group Arn that the linked account is associated to. </p>
   */
  BillingGroupArn?: string;

  /**
   * <p>
   *       The Amazon Web Services account name.
   *     </p>
   */
  AccountName?: string;

  /**
   * <p>
   *       The Amazon Web Services account email.
   *     </p>
   */
  AccountEmail?: string;
}

export namespace AccountAssociationsListElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAssociationsListElement): any => ({
    ...obj,
    ...(obj.AccountName && { AccountName: SENSITIVE_STRING }),
    ...(obj.AccountEmail && { AccountEmail: SENSITIVE_STRING }),
  });
}

/**
 * <p>
 *      The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated family.
 *     </p>
 */
export interface AccountGrouping {
  /**
   * <p>
   *       The account IDs that make up the billing group. Account IDs must be a part of the consolidated billing family, and not associated with another billing group.
   *     </p>
   */
  LinkedAccountIds: string[] | undefined;
}

export namespace AccountGrouping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountGrouping): any => ({
    ...obj,
  });
}

export interface AssociateAccountsInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing group that associates the array of
   *       account IDs. </p>
   */
  Arn: string | undefined;

  /**
   * <p>
   *       The associating array of account IDs.
   *     </p>
   */
  AccountIds: string[] | undefined;
}

export namespace AssociateAccountsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAccountsInput): any => ({
    ...obj,
  });
}

export interface AssociateAccountsOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing group that associates the array of
   *       account IDs. </p>
   */
  Arn?: string;
}

export namespace AssociateAccountsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAccountsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Identifier of the resource in use.
   *     </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource in use.
   *     </p>
   */
  ResourceType: string | undefined;
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
  }
}

/**
 * <p>An unexpected error occurred while processing a request.
 *     </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
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
 * <p>The request references a resource that doesn't exist.
 *     </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Resource identifier that was not found.
   *     </p>
   */
  ResourceId: string | undefined;

  /**
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
 * <p>The request would cause a service limit to exceed.
 *     </p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Identifier of the resource affected.
   *     </p>
   */
  ResourceId?: string;

  /**
   * <p>Type of the resource affected.
   *     </p>
   */
  ResourceType?: string;

  /**
   * <p>The unique code identifier of the service limit that is being exceeded.
   *     </p>
   */
  LimitCode: string | undefined;

  /**
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
 * <p>The request was denied due to request throttling.
 *     </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
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
 * <p>The field's information of a request that resulted in an exception.
 *     </p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name.
   *     </p>
   */
  Name: string | undefined;

  /**
   * <p>The message describing why the field failed validation.
   *     </p>
   */
  Message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  ACCOUNTS_ALREADY_ASSOCIATED = "ACCOUNTS_ALREADY_ASSOCIATED",
  ACCOUNTS_NOT_ASSOCIATED = "ACCOUNTS_NOT_ASSOCIATED",
  CANNOT_PARSE = "CANNOT_PARSE",
  DUPLICATE_ACCOUNT = "DUPLICATE_ACCOUNT",
  DUPLICATE_PRICINGRULE_ARNS = "DUPLICATE_PRICINGRULE_ARNS",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  ILLEGAL_ACCOUNTS = "ILLEGAL_ACCOUNTS",
  ILLEGAL_BILLING_PERIOD = "ILLEGAL_BILLING_PERIOD",
  ILLEGAL_BILLING_PERIOD_RANGE = "ILLEGAL_BILLING_PERIOD_RANGE",
  ILLEGAL_CHARGE_DETAILS = "ILLEGAL_CHARGE_DETAILS",
  ILLEGAL_CUSTOMLINEITEM = "ILLEGAL_CUSTOMLINEITEM",
  ILLEGAL_CUSTOMLINEITEM_MODIFICATION = "ILLEGAL_CUSTOMLINEITEM_MODIFICATION",
  ILLEGAL_CUSTOMLINEITEM_UPDATE = "ILLEGAL_CUSTOMLINEITEM_UPDATE",
  ILLEGAL_EXPRESSION = "ILLEGAL_EXPRESSION",
  ILLEGAL_PRIMARY_ACCOUNT = "ILLEGAL_PRIMARY_ACCOUNT",
  ILLEGAL_RESOURCE_ARNS = "ILLEGAL_RESOURCE_ARNS",
  ILLEGAL_SCOPE = "ILLEGAL_SCOPE",
  ILLEGAL_SERVICE = "ILLEGAL_SERVICE",
  ILLEGAL_UPDATE_CHARGE_DETAILS = "ILLEGAL_UPDATE_CHARGE_DETAILS",
  INVALID_ARN = "INVALID_ARN",
  INVALID_BILLINGVIEW_ARN = "INVALID_BILLINGVIEW_ARN",
  INVALID_BILLING_GROUP_STATUS = "INVALID_BILLING_GROUP_STATUS",
  INVALID_TIME_RANGE = "INVALID_TIME_RANGE",
  MISMATCHED_BILLINGGROUP_ARN = "MISMATCHED_BILLINGGROUP_ARN",
  MISMATCHED_BILLINGVIEW_ARN = "MISMATCHED_BILLINGVIEW_ARN",
  MISMATCHED_CUSTOMLINEITEM_ARN = "MISMATCHED_CUSTOMLINEITEM_ARN",
  MISMATCHED_PRICINGPLAN_ARN = "MISMATCHED_PRICINGPLAN_ARN",
  MISMATCHED_PRICINGRULE_ARN = "MISMATCHED_PRICINGRULE_ARN",
  MISSING_BILLINGGROUP = "MISSING_BILLINGGROUP",
  MISSING_CUSTOMLINEITEM = "MISSING_CUSTOMLINEITEM",
  MISSING_LINKED_ACCOUNT_IDS = "MISSING_LINKED_ACCOUNT_IDS",
  MISSING_PRICINGPLAN = "MISSING_PRICINGPLAN",
  MISSING_PRICING_PLAN_ARN = "MISSING_PRICING_PLAN_ARN",
  MULTIPLE_LINKED_ACCOUNT_IDS = "MULTIPLE_LINKED_ACCOUNT_IDS",
  MULTIPLE_PRICING_PLAN_ARN = "MULTIPLE_PRICING_PLAN_ARN",
  OTHER = "OTHER",
  PRICINGRULES_ALREADY_ASSOCIATED = "PRICINGRULES_ALREADY_ASSOCIATED",
  PRICINGRULES_NOT_ASSOCIATED = "PRICINGRULES_NOT_ASSOCIATED",
  PRICINGRULES_NOT_EXIST = "PRICINGRULES_NOT_EXIST",
  PRIMARY_CANNOT_DISASSOCIATE = "PRIMARY_CANNOT_DISASSOCIATE",
  PRIMARY_NOT_ASSOCIATED = "PRIMARY_NOT_ASSOCIATED",
  TOO_MANY_ACCOUNTS_IN_REQUEST = "TOO_MANY_ACCOUNTS_IN_REQUEST",
  TOO_MANY_CUSTOMLINEITEMS_IN_REQUEST = "TOO_MANY_CUSTOMLINEITEMS_IN_REQUEST",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason the request's validation failed.
   *     </p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
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

export interface AssociatePricingRulesInput {
  /**
   * <p>
   *       The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * <p>
   *       The <code>PricingRuleArns</code> that are associated with the Pricing Plan.
   *     </p>
   */
  PricingRuleArns: string[] | undefined;
}

export namespace AssociatePricingRulesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePricingRulesInput): any => ({
    ...obj,
  });
}

export interface AssociatePricingRulesOutput {
  /**
   * <p>
   *       The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with.
   *     </p>
   */
  Arn?: string;
}

export namespace AssociatePricingRulesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePricingRulesOutput): any => ({
    ...obj,
  });
}

export enum AssociateResourceErrorReason {
  ILLEGAL_CUSTOMLINEITEM = "ILLEGAL_CUSTOMLINEITEM",
  INTERNAL_SERVER_EXCEPTION = "INTERNAL_SERVER_EXCEPTION",
  INVALID_ARN = "INVALID_ARN",
  SERVICE_LIMIT_EXCEEDED = "SERVICE_LIMIT_EXCEEDED",
}

/**
 * <p>
 *       A representation of a resource association error.
 *     </p>
 */
export interface AssociateResourceError {
  /**
   * <p>
   *      The reason the resource association failed.
   *     </p>
   */
  Message?: string;

  /**
   * <p>
   *       A static error code that used to classify the type of failure.
   *     </p>
   */
  Reason?: AssociateResourceErrorReason | string;
}

export namespace AssociateResourceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceError): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A resource association result for a percentage custom line item.
 *     </p>
 */
export interface AssociateResourceResponseElement {
  /**
   * <p>
   *       The resource ARN that was associated to the custom line item.
   *     </p>
   */
  Arn?: string;

  /**
   * <p>
   *       An <code>AssociateResourceError</code> that will populate if the resource association fails.
   *     </p>
   */
  Error?: AssociateResourceError;
}

export namespace AssociateResourceResponseElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateResourceResponseElement): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
 *     </p>
 */
export interface ComputationPreference {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the pricing plan used to compute the Amazon Web Services charges for a billing group.
   *     </p>
   */
  PricingPlanArn: string | undefined;
}

export namespace ComputationPreference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputationPreference): any => ({
    ...obj,
  });
}

export interface CreateBillingGroupInput {
  /**
   * <p>
   *       The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
   *     </p>
   */
  ClientToken?: string;

  /**
   * <p>
   *       The billing group name. The names must be unique.
   *     </p>
   */
  Name: string | undefined;

  /**
   * <p>
   *       The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated family.
   *     </p>
   */
  AccountGrouping: AccountGrouping | undefined;

  /**
   * <p>
   *       The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *     </p>
   */
  ComputationPreference: ComputationPreference | undefined;

  /**
   * <p> The account ID that serves as the main account in a billing group. </p>
   */
  PrimaryAccountId?: string;

  /**
   * <p>The billing group description.
   *     </p>
   */
  Description?: string;

  /**
   * <p> A map that contains tag keys and tag values that are attached to a billing group. This
   *       feature isn't available during the beta. </p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateBillingGroupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBillingGroupInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface CreateBillingGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created billing group. </p>
   */
  Arn?: string;
}

export namespace CreateBillingGroupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBillingGroupOutput): any => ({
    ...obj,
  });
}

export interface DeleteBillingGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group you're deleting.</p>
   */
  Arn: string | undefined;
}

export namespace DeleteBillingGroupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBillingGroupInput): any => ({
    ...obj,
  });
}

export interface DeleteBillingGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted billing group.</p>
   */
  Arn?: string;
}

export namespace DeleteBillingGroupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBillingGroupOutput): any => ({
    ...obj,
  });
}

export interface DisassociateAccountsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that the array of account IDs will
   *       disassociate from. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The array of account IDs to disassociate.
   *     </p>
   */
  AccountIds: string[] | undefined;
}

export namespace DisassociateAccountsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAccountsInput): any => ({
    ...obj,
  });
}

export interface DisassociateAccountsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that the array of account IDs is
   *       disassociated from. </p>
   */
  Arn?: string;
}

export namespace DisassociateAccountsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAccountsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The filter that specifies the billing groups and pricing plans to retrieve billing group information.
 *     </p>
 */
export interface ListBillingGroupsFilter {
  /**
   * <p>The list of billing group Amazon Resource Names (ARNs) to retrieve information. </p>
   */
  Arns?: string[];

  /**
   * <p>The pricing plan Amazon Resource Names (ARNs) to retrieve information. </p>
   */
  PricingPlan?: string;
}

export namespace ListBillingGroupsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupsFilter): any => ({
    ...obj,
  });
}

export interface ListBillingGroupsInput {
  /**
   * <p>The preferred billing period to get billing groups.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>The maximum number of billing groups to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token used on subsequent calls to get billing groups.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>A <code>ListBillingGroupsFilter</code> that specifies the billing group and pricing plan to retrieve billing group information.
   *     </p>
   */
  Filters?: ListBillingGroupsFilter;
}

export namespace ListBillingGroupsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupsInput): any => ({
    ...obj,
  });
}

export enum BillingGroupStatus {
  ACTIVE = "ACTIVE",
  PRIMARY_ACCOUNT_MISSING = "PRIMARY_ACCOUNT_MISSING",
}

/**
 * <p>A representation of a billing group.
 *     </p>
 */
export interface BillingGroupListElement {
  /**
   * <p>The billing group's name.
   *     </p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Number (ARN) that can be used to uniquely identify the billing group.
   *     </p>
   */
  Arn?: string;

  /**
   * <p>The billing group description.
   *     </p>
   */
  Description?: string;

  /**
   * <p>The account ID that serves as the main account in a billing group. </p>
   */
  PrimaryAccountId?: string;

  /**
   * <p>
   *       The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *     </p>
   */
  ComputationPreference?: ComputationPreference;

  /**
   * <p>The number of accounts in the particular billing group.
   *     </p>
   */
  Size?: number;

  /**
   * <p>
   *       The time the billing group was created.
   *     </p>
   */
  CreationTime?: number;

  /**
   * <p>
   *       The most recent time the billing group was modified.
   *     </p>
   */
  LastModifiedTime?: number;

  /**
   * <p>The billing group status. Only one of the valid values can be used.
   *     </p>
   */
  Status?: BillingGroupStatus | string;

  /**
   * <p>The reason why the billing group is in its current status.
   *     </p>
   */
  StatusReason?: string;
}

export namespace BillingGroupListElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BillingGroupListElement): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface ListBillingGroupsOutput {
  /**
   * <p>A list of <code>BillingGroupListElement</code> retrieved.
   *     </p>
   */
  BillingGroups?: BillingGroupListElement[];

  /**
   * <p>The pagination token used on subsequent calls to get billing groups.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListBillingGroupsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupsOutput): any => ({
    ...obj,
    ...(obj.BillingGroups && {
      BillingGroups: obj.BillingGroups.map((item) => BillingGroupListElement.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateBillingGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group being updated. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the billing group. The names must be unique to each billing group.
   *     </p>
   */
  Name?: string;

  /**
   * <p>The status of the billing group. Only one of the valid values can be used.
   *     </p>
   */
  Status?: BillingGroupStatus | string;

  /**
   * <p>
   *       The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *     </p>
   */
  ComputationPreference?: ComputationPreference;

  /**
   * <p>A description of the billing group.
   *     </p>
   */
  Description?: string;
}

export namespace UpdateBillingGroupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBillingGroupInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateBillingGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that was updated. </p>
   */
  Arn?: string;

  /**
   * <p>
   *       The name of the billing group. The names must be unique to each billing group.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       A description of the billing group.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The account ID that serves as the main account in a billing group.
   *     </p>
   */
  PrimaryAccountId?: string;

  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the pricing plan to compute Amazon Web Services charges for the
   *       billing group.
   *     </p>
   */
  PricingPlanArn?: string;

  /**
   * <p>
   *       The number of accounts in the particular billing group.
   *     </p>
   */
  Size?: number;

  /**
   * <p>
   *       The most recent time the billing group was modified.
   *     </p>
   */
  LastModifiedTime?: number;

  /**
   * <p>
   *       The status of the billing group. Only one of the valid values can be used.
   *     </p>
   */
  Status?: BillingGroupStatus | string;

  /**
   * <p>
   *       The reason why the billing group is in its current status.
   *     </p>
   */
  StatusReason?: string;
}

export namespace UpdateBillingGroupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBillingGroupOutput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

/**
 * <p>
 *       The billing period range in which the custom line item request will be applied.
 *     </p>
 */
export interface CustomLineItemBillingPeriodRange {
  /**
   * <p>
   *       The inclusive start billing period that defines a billing period range where a custom line is applied.
   *     </p>
   */
  InclusiveStartBillingPeriod: string | undefined;

  /**
   * <p>
   *       The inclusive end billing period that defines a billing period range where a custom line is applied.
   *     </p>
   */
  ExclusiveEndBillingPeriod: string | undefined;
}

export namespace CustomLineItemBillingPeriodRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomLineItemBillingPeriodRange): any => ({
    ...obj,
  });
}

export interface BatchAssociateResourcesToCustomLineItemInput {
  /**
   * <p>
   *       A percentage custom line item ARN to associate the resources to.
   *     </p>
   */
  TargetArn: string | undefined;

  /**
   * <p>
   *       A list containing the ARNs of the resources to be associated.
   *     </p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>
   *       The billing period range in which the custom line item request will be applied.
   *     </p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

export namespace BatchAssociateResourcesToCustomLineItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateResourcesToCustomLineItemInput): any => ({
    ...obj,
  });
}

export interface BatchAssociateResourcesToCustomLineItemOutput {
  /**
   * <p>
   *       A list of <code>AssociateResourceResponseElement</code> for each resource that's been associated to a percentage custom line item successfully.
   *     </p>
   */
  SuccessfullyAssociatedResources?: AssociateResourceResponseElement[];

  /**
   * <p>
   *       A list of <code>AssociateResourceResponseElement</code> for each resource that failed association to a percentage custom line item.
   *     </p>
   */
  FailedAssociatedResources?: AssociateResourceResponseElement[];
}

export namespace BatchAssociateResourcesToCustomLineItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateResourcesToCustomLineItemOutput): any => ({
    ...obj,
  });
}

export interface BatchDisassociateResourcesFromCustomLineItemInput {
  /**
   * <p>
   *       A percentage custom line item ARN to disassociate the resources from.
   *     </p>
   */
  TargetArn: string | undefined;

  /**
   * <p>
   *       A list containing the ARNs of resources to be disassociated.
   *     </p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>
   *       The billing period range in which the custom line item request will be applied.
   *     </p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

export namespace BatchDisassociateResourcesFromCustomLineItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateResourcesFromCustomLineItemInput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A resource disassociation result for a percentage custom line item.
 *     </p>
 */
export interface DisassociateResourceResponseElement {
  /**
   * <p>
   *       The resource ARN that was disassociated from the custom line item.
   *     </p>
   */
  Arn?: string;

  /**
   * <p>
   *       An <code>AssociateResourceError</code> shown if the resource disassociation fails.
   *     </p>
   */
  Error?: AssociateResourceError;
}

export namespace DisassociateResourceResponseElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateResourceResponseElement): any => ({
    ...obj,
  });
}

export interface BatchDisassociateResourcesFromCustomLineItemOutput {
  /**
   * <p>
   *       A list of <code>DisassociateResourceResponseElement</code> for each resource that's been disassociated from a percentage custom line item successfully.
   *     </p>
   */
  SuccessfullyDisassociatedResources?: DisassociateResourceResponseElement[];

  /**
   * <p>
   *       A list of <code>DisassociateResourceResponseElement</code> for each resource that failed disassociation from a percentage custom line item.
   *     </p>
   */
  FailedDisassociatedResources?: DisassociateResourceResponseElement[];
}

export namespace BatchDisassociateResourcesFromCustomLineItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateResourcesFromCustomLineItemOutput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of the charge details associated with a flat custom line item.
 *     </p>
 */
export interface CustomLineItemFlatChargeDetails {
  /**
   * <p>
   *       The custom line item's fixed charge value in USD.
   *     </p>
   */
  ChargeValue: number | undefined;
}

export namespace CustomLineItemFlatChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomLineItemFlatChargeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of the charge details associated with a percentage custom line item.
 *     </p>
 */
export interface CustomLineItemPercentageChargeDetails {
  /**
   * <p>
   *       The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *     </p>
   */
  PercentageValue: number | undefined;

  /**
   * <p>
   *       A list of resource ARNs to associate to the percentage custom line item.
   *     </p>
   */
  AssociatedValues?: string[];
}

export namespace CustomLineItemPercentageChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomLineItemPercentageChargeDetails): any => ({
    ...obj,
  });
}

export enum CustomLineItemType {
  CREDIT = "CREDIT",
  FEE = "FEE",
}

/**
 * <p>
 *       The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>.
 *     </p>
 */
export interface CustomLineItemChargeDetails {
  /**
   * <p>
   *       A <code>CustomLineItemFlatChargeDetails</code> that describes the charge details of a flat custom line item.
   *     </p>
   */
  Flat?: CustomLineItemFlatChargeDetails;

  /**
   * <p>
   *       A <code>CustomLineItemPercentageChargeDetails</code> that describes the charge details of a percentage custom line item.
   *     </p>
   */
  Percentage?: CustomLineItemPercentageChargeDetails;

  /**
   * <p>
   *       The type of the custom line item that indicates whether the charge is a fee or credit.
   *     </p>
   */
  Type: CustomLineItemType | string | undefined;
}

export namespace CustomLineItemChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomLineItemChargeDetails): any => ({
    ...obj,
  });
}

export interface CreateCustomLineItemInput {
  /**
   * <p>
   *       The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
   *     </p>
   */
  ClientToken?: string;

  /**
   * <p>
   *       The name of the custom line item.
   *     </p>
   */
  Name: string | undefined;

  /**
   * <p>
   *       The description of the custom line item. This is shown on the Bills page in association with the charge value.
   *     </p>
   */
  Description: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that references the billing group where the custom line
   *       item applies to. </p>
   */
  BillingGroupArn: string | undefined;

  /**
   * <p> A time range for which the custom line item is effective. </p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;

  /**
   * <p> A map that contains tag keys and tag values that are attached to a custom line item. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>
   *       A <code>CustomLineItemChargeDetails</code> that describes the charge details for a custom line item.
   *     </p>
   */
  ChargeDetails: CustomLineItemChargeDetails | undefined;
}

export namespace CreateCustomLineItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomLineItemInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface CreateCustomLineItemOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created custom line item. </p>
   */
  Arn?: string;
}

export namespace CreateCustomLineItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomLineItemOutput): any => ({
    ...obj,
  });
}

export interface DeleteCustomLineItemInput {
  /**
   * <p>
   *       The ARN of the custom line item to be deleted.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * <p>
   *       The billing period range in which the custom line item request will be applied.
   *     </p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

export namespace DeleteCustomLineItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomLineItemInput): any => ({
    ...obj,
  });
}

export interface DeleteCustomLineItemOutput {
  /**
   * <p>
   *       Then ARN of the deleted custom line item.
   *     </p>
   */
  Arn?: string;
}

export namespace DeleteCustomLineItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomLineItemOutput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A filter that specifies the custom line items and billing groups to retrieve FFLI information.
 *     </p>
 */
export interface ListCustomLineItemsFilter {
  /**
   * <p>
   *       A list of custom line items to retrieve information.
   *     </p>
   */
  Names?: string[];

  /**
   * <p> The billing group Amazon Resource Names (ARNs) to retrieve information. </p>
   */
  BillingGroups?: string[];

  /**
   * <p>
   *      A list of custom line item ARNs to retrieve information.
   *     </p>
   */
  Arns?: string[];
}

export namespace ListCustomLineItemsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomLineItemsFilter): any => ({
    ...obj,
    ...(obj.Names && { Names: SENSITIVE_STRING }),
  });
}

export interface ListCustomLineItemsInput {
  /**
   * <p>
   *       The preferred billing period to get custom line items (FFLIs).
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>
   *       The maximum number of billing groups to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       The pagination token used on subsequent calls to get custom line items (FFLIs).
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>A <code>ListCustomLineItemsFilter</code> that specifies the custom line item names
   *       and/or billing group Amazon Resource Names (ARNs) to retrieve FFLI information.</p>
   */
  Filters?: ListCustomLineItemsFilter;
}

export namespace ListCustomLineItemsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomLineItemsInput): any => ({
    ...obj,
    ...(obj.Filters && { Filters: ListCustomLineItemsFilter.filterSensitiveLog(obj.Filters) }),
  });
}

/**
 * <p>
 *       A representation of the charge details associated with a flat custom line item.
 *     </p>
 */
export interface ListCustomLineItemFlatChargeDetails {
  /**
   * <p>
   *       The custom line item's fixed charge value in USD.
   *     </p>
   */
  ChargeValue: number | undefined;
}

export namespace ListCustomLineItemFlatChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomLineItemFlatChargeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of the charge details associated with a percentage custom line item.
 *     </p>
 */
export interface ListCustomLineItemPercentageChargeDetails {
  /**
   * <p>
   *       The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *     </p>
   */
  PercentageValue: number | undefined;
}

export namespace ListCustomLineItemPercentageChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomLineItemPercentageChargeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of the charge details of a custom line item.
 *     </p>
 */
export interface ListCustomLineItemChargeDetails {
  /**
   * <p>
   *       A <code>ListCustomLineItemFlatChargeDetails</code> that describes the charge details of a flat custom line item.
   *     </p>
   */
  Flat?: ListCustomLineItemFlatChargeDetails;

  /**
   * <p>
   *       A <code>ListCustomLineItemPercentageChargeDetails</code> that describes the charge details of a percentage custom line item.
   *     </p>
   */
  Percentage?: ListCustomLineItemPercentageChargeDetails;

  /**
   * <p>
   *       The type of the custom line item that indicates whether the charge is a <code>fee</code> or <code>credit</code>.
   *     </p>
   */
  Type: CustomLineItemType | string | undefined;
}

export namespace ListCustomLineItemChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomLineItemChargeDetails): any => ({
    ...obj,
  });
}

export enum CurrencyCode {
  CNY = "CNY",
  USD = "USD",
}

/**
 * <p>
 *       A representation of a custom line item.
 *     </p>
 */
export interface CustomLineItemListElement {
  /**
   * <p> The Amazon Resource Names (ARNs) for custom line items. </p>
   */
  Arn?: string;

  /**
   * <p>
   *       The custom line item's name.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       A <code>ListCustomLineItemChargeDetails</code> that describes the charge details of a custom line item.
   *     </p>
   */
  ChargeDetails?: ListCustomLineItemChargeDetails;

  /**
   * <p>
   *       The custom line item's charge value currency. Only one of the valid values can be used.
   *     </p>
   */
  CurrencyCode?: CurrencyCode | string;

  /**
   * <p>
   *       The custom line item's description. This is shown on the Bills page in association with the charge value.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The product code associated with the custom line item.
   *     </p>
   */
  ProductCode?: string;

  /**
   * <p> The Amazon Resource Name (ARN) that references the billing group where the custom line
   *       item applies to. </p>
   */
  BillingGroupArn?: string;

  /**
   * <p>
   *       The time created.
   *     </p>
   */
  CreationTime?: number;

  /**
   * <p>
   *       The most recent time the custom line item was modified.
   *     </p>
   */
  LastModifiedTime?: number;

  /**
   * <p>
   *       The number of resources that are associated to the custom line item.
   *     </p>
   */
  AssociationSize?: number;
}

export namespace CustomLineItemListElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomLineItemListElement): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface ListCustomLineItemsOutput {
  /**
   * <p>
   *       A list of <code>FreeFormLineItemListElements</code> received.
   *     </p>
   */
  CustomLineItems?: CustomLineItemListElement[];

  /**
   * <p>
   *       The pagination token used on subsequent calls to get custom line items (FFLIs).
   *     </p>
   */
  NextToken?: string;
}

export namespace ListCustomLineItemsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomLineItemsOutput): any => ({
    ...obj,
    ...(obj.CustomLineItems && {
      CustomLineItems: obj.CustomLineItems.map((item) => CustomLineItemListElement.filterSensitiveLog(item)),
    }),
  });
}

export enum CustomLineItemRelationship {
  CHILD = "CHILD",
  PARENT = "PARENT",
}

/**
 * <p>
 *       A filter that specifies the type of resource associations that should be retrieved for a custom line item.
 *     </p>
 */
export interface ListResourcesAssociatedToCustomLineItemFilter {
  /**
   * <p>
   *       The type of relationship between the custom line item and the associated resource.
   *     </p>
   */
  Relationship?: CustomLineItemRelationship | string;
}

export namespace ListResourcesAssociatedToCustomLineItemFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesAssociatedToCustomLineItemFilter): any => ({
    ...obj,
  });
}

export interface ListResourcesAssociatedToCustomLineItemInput {
  /**
   * <p>
   *       The billing period for which the resource associations will be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>
   *       The ARN of the custom line item for which the resource associations will be listed.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * <p>
   *       (Optional) The maximum number of resource associations to be retrieved.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       (Optional) The pagination token returned by a previous request.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>
   *       (Optional) A <code>ListResourcesAssociatedToCustomLineItemFilter</code> that can specify the types of resources that should be retrieved.
   *     </p>
   */
  Filters?: ListResourcesAssociatedToCustomLineItemFilter;
}

export namespace ListResourcesAssociatedToCustomLineItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesAssociatedToCustomLineItemInput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of a resource association for a custom line item.
 *     </p>
 */
export interface ListResourcesAssociatedToCustomLineItemResponseElement {
  /**
   * <p>
   *       The ARN of the associated resource.
   *     </p>
   */
  Arn?: string;

  /**
   * <p>
   *       The type of relationship between the custom line item and the associated resource.
   *     </p>
   */
  Relationship?: CustomLineItemRelationship | string;
}

export namespace ListResourcesAssociatedToCustomLineItemResponseElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesAssociatedToCustomLineItemResponseElement): any => ({
    ...obj,
  });
}

export interface ListResourcesAssociatedToCustomLineItemOutput {
  /**
   * <p>
   *       The custom line item ARN for which the resource associations are listed.
   *     </p>
   */
  Arn?: string;

  /**
   * <p>
   *       A list of <code>ListResourcesAssociatedToCustomLineItemResponseElement</code> for each resource association retrieved.
   *     </p>
   */
  AssociatedResources?: ListResourcesAssociatedToCustomLineItemResponseElement[];

  /**
   * <p>
   *       The pagination token to be used in subsequent requests to retrieve additional results.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListResourcesAssociatedToCustomLineItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesAssociatedToCustomLineItemOutput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of the new charge details associated with a flat custom line item.
 *     </p>
 */
export interface UpdateCustomLineItemFlatChargeDetails {
  /**
   * <p>
   *       The custom line item's new fixed charge value in USD.
   *     </p>
   */
  ChargeValue: number | undefined;
}

export namespace UpdateCustomLineItemFlatChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomLineItemFlatChargeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of the new charge details associated with a percentage custom line item.
 *     </p>
 */
export interface UpdateCustomLineItemPercentageChargeDetails {
  /**
   * <p>
   *       The custom line item's new percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *     </p>
   */
  PercentageValue: number | undefined;
}

export namespace UpdateCustomLineItemPercentageChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomLineItemPercentageChargeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>.
 *     </p>
 */
export interface UpdateCustomLineItemChargeDetails {
  /**
   * <p>
   *       An <code>UpdateCustomLineItemFlatChargeDetails</code> that describes the new charge details of a flat custom line item.
   *     </p>
   */
  Flat?: UpdateCustomLineItemFlatChargeDetails;

  /**
   * <p>
   *       An <code>UpdateCustomLineItemPercentageChargeDetails</code> that describes the new charge details of a percentage custom line item.
   *     </p>
   */
  Percentage?: UpdateCustomLineItemPercentageChargeDetails;
}

export namespace UpdateCustomLineItemChargeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomLineItemChargeDetails): any => ({
    ...obj,
  });
}

export interface UpdateCustomLineItemInput {
  /**
   * <p>
   *       The ARN of the custom line item to be updated.
   *     </p>
   */
  Arn: string | undefined;

  /**
   * <p>
   *       The new name for the custom line item.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       The new line item description of the custom line item.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       A <code>ListCustomLineItemChargeDetails</code> containing the new charge details for the custom line item.
   *     </p>
   */
  ChargeDetails?: UpdateCustomLineItemChargeDetails;

  /**
   * <p>
   *       The billing period range in which the custom line item request will be applied.
   *     </p>
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange;
}

export namespace UpdateCustomLineItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomLineItemInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdateCustomLineItemOutput {
  /**
   * <p>
   *       The ARN of the successfully updated custom line item.
   *     </p>
   */
  Arn?: string;

  /**
   * <p>
   *       The ARN of the billing group that the custom line item is applied to.
   *     </p>
   */
  BillingGroupArn?: string;

  /**
   * <p>
   *       The name of the successfully updated custom line item.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       The description of the successfully updated custom line item.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       A <code>ListCustomLineItemChargeDetails</code> containing the charge details of the successfully updated custom line item.
   *     </p>
   */
  ChargeDetails?: ListCustomLineItemChargeDetails;

  /**
   * <p>
   *       The most recent time the custom line item was modified.
   *     </p>
   */
  LastModifiedTime?: number;

  /**
   * <p>
   *       The number of resources that are associated to the custom line item.
   *     </p>
   */
  AssociationSize?: number;
}

export namespace UpdateCustomLineItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomLineItemOutput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

/**
 * <p>The filter on the account ID of the linked account, or any of the following:</p>
 *          <p>
 *             <code>MONITORED</code>: linked accounts that are associated to billing groups.</p>
 *          <p>
 *             <code>UNMONITORED</code>: linked accounts that are not associated to billing
 *       groups.</p>
 *          <p>
 *             <code>Billing Group Arn</code>: linked accounts that are associated to the provided
 *       Billing Group Arn. </p>
 */
export interface ListAccountAssociationsFilter {
  /**
   * <p>
   *             <code>MONITORED</code>: linked accounts that are associated to billing groups.</p>
   *          <p>
   *             <code>UNMONITORED</code>: linked accounts that are not associated to billing
   *       groups.</p>
   *          <p>
   *             <code>Billing Group Arn</code>: linked accounts that are associated to the provided
   *       Billing Group Arn. </p>
   */
  Association?: string;

  /**
   * <p>
   *       The Amazon Web Services account ID to filter on.
   *     </p>
   */
  AccountId?: string;
}

export namespace ListAccountAssociationsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountAssociationsFilter): any => ({
    ...obj,
  });
}

export interface ListAccountAssociationsInput {
  /**
   * <p>
   *       The preferred billing period to get account associations.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>The filter on the account ID of the linked account, or any of the following:</p>
   *          <p>
   *             <code>MONITORED</code>: linked accounts that are associated to billing groups.</p>
   *          <p>
   *             <code>UNMONITORED</code>: linked accounts that are not associated to billing
   *       groups.</p>
   *          <p>
   *             <code>Billing Group Arn</code>: linked accounts that are associated to the provided
   *       billing group Arn. </p>
   */
  Filters?: ListAccountAssociationsFilter;

  /**
   * <p>
   *       The pagination token used on subsequent calls to retrieve accounts.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListAccountAssociationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountAssociationsInput): any => ({
    ...obj,
  });
}

export interface ListAccountAssociationsOutput {
  /**
   * <p> The list of linked accounts in the payer account. </p>
   */
  LinkedAccounts?: AccountAssociationsListElement[];

  /**
   * <p>
   *       The pagination token used on subsequent calls to get accounts.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListAccountAssociationsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountAssociationsOutput): any => ({
    ...obj,
    ...(obj.LinkedAccounts && {
      LinkedAccounts: obj.LinkedAccounts.map((item) => AccountAssociationsListElement.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The filter used to retrieve specific <code>BillingGroupCostReportElements</code>.
 *     </p>
 */
export interface ListBillingGroupCostReportsFilter {
  /**
   * <p>The list of Amazon Resource Names (ARNs) used to filter billing groups to retrieve
   *       reports. </p>
   */
  BillingGroupArns?: string[];
}

export namespace ListBillingGroupCostReportsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupCostReportsFilter): any => ({
    ...obj,
  });
}

export interface ListBillingGroupCostReportsInput {
  /**
   * <p>The preferred billing period for your report.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>The maximum number of reports to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token used on subsequent calls to get reports.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>A <code>ListBillingGroupCostReportsFilter</code> to specify billing groups to retrieve reports from.
   *     </p>
   */
  Filters?: ListBillingGroupCostReportsFilter;
}

export namespace ListBillingGroupCostReportsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupCostReportsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary report of actual Amazon Web Services charges and calculated Amazon Web Services charges, based on the associated pricing plan of a billing group.
 *     </p>
 */
export interface BillingGroupCostReportElement {
  /**
   * <p>The Amazon Resource Name (ARN) of a billing group. </p>
   */
  Arn?: string;

  /**
   * <p>The actual Amazon Web Services charges for the billing group.
   *     </p>
   */
  AWSCost?: string;

  /**
   * <p>The hypothetical Amazon Web Services charges based on the associated pricing plan of a billing group.
   *     </p>
   */
  ProformaCost?: string;

  /**
   * <p>
   *       The billing group margin.
   *     </p>
   */
  Margin?: string;

  /**
   * <p>
   *       The percentage of billing group margin.
   *     </p>
   */
  MarginPercentage?: string;

  /**
   * <p>The displayed currency.
   *     </p>
   */
  Currency?: string;
}

export namespace BillingGroupCostReportElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BillingGroupCostReportElement): any => ({
    ...obj,
  });
}

export interface ListBillingGroupCostReportsOutput {
  /**
   * <p>A list of <code>BillingGroupCostReportElement</code> retrieved.
   *     </p>
   */
  BillingGroupCostReports?: BillingGroupCostReportElement[];

  /**
   * <p>The pagination token used on subsequent calls to get reports.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListBillingGroupCostReportsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupCostReportsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that identifies the resource to list the tags.
   *     </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>
   *       The tags for the resource.
   *     </p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface CreatePricingPlanInput {
  /**
   * <p>
   *       The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
   *     </p>
   */
  ClientToken?: string;

  /**
   * <p>The pricing plan name. The names must be unique to each pricing plan.
   *     </p>
   */
  Name: string | undefined;

  /**
   * <p>The pricing plan description.
   *     </p>
   */
  Description?: string;

  /**
   * <p> A list of Amazon Resource Names (ARNs) that define the pricing plan parameters. </p>
   */
  PricingRuleArns?: string[];

  /**
   * <p>
   *       A map that contains tag keys and tag values that are attached to a pricing plan.
   *     </p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreatePricingPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePricingPlanInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface CreatePricingPlanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created pricing plan.</p>
   */
  Arn?: string;
}

export namespace CreatePricingPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePricingPlanOutput): any => ({
    ...obj,
  });
}

export interface DeletePricingPlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the pricing plan you're deleting. </p>
   */
  Arn: string | undefined;
}

export namespace DeletePricingPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePricingPlanInput): any => ({
    ...obj,
  });
}

export interface DeletePricingPlanOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the deleted pricing plan. </p>
   */
  Arn?: string;
}

export namespace DeletePricingPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePricingPlanOutput): any => ({
    ...obj,
  });
}

export interface DisassociatePricingRulesInput {
  /**
   * <p> The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from. </p>
   */
  Arn: string | undefined;

  /**
   * <p> A list containing the Amazon Resource Name (ARN) of the pricing rules that will be
   *       disassociated. </p>
   */
  PricingRuleArns: string[] | undefined;
}

export namespace DisassociatePricingRulesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePricingRulesInput): any => ({
    ...obj,
  });
}

export interface DisassociatePricingRulesOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan that the pricing rules successfully
   *       disassociated from. </p>
   */
  Arn?: string;
}

export namespace DisassociatePricingRulesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePricingRulesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve
 *       pricing plan information. </p>
 */
export interface ListPricingPlansFilter {
  /**
   * <p>A list of pricing plan Amazon Resource Names (ARNs) to retrieve information. </p>
   */
  Arns?: string[];
}

export namespace ListPricingPlansFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingPlansFilter): any => ({
    ...obj,
  });
}

export interface ListPricingPlansInput {
  /**
   * <p>The preferred billing period to get pricing plan.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>A <code>ListPricingPlansFilter</code> that specifies the Amazon Resource Name (ARNs)
   *       of pricing plans to retrieve pricing plans information.</p>
   */
  Filters?: ListPricingPlansFilter;

  /**
   * <p>The maximum number of pricing plans to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token used on subsequent call to get pricing plans.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingPlansInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingPlansInput): any => ({
    ...obj,
  });
}

/**
 * <p>A representation of a pricing plan.
 *     </p>
 */
export interface PricingPlanListElement {
  /**
   * <p>The name of a pricing plan.
   *     </p>
   */
  Name?: string;

  /**
   * <p>The pricing plan Amazon Resource Names (ARN). This can be used to uniquely identify a
   *       pricing plan. </p>
   */
  Arn?: string;

  /**
   * <p>The pricing plan description.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *     The pricing rules count currently associated with this pricing plan list element.
   *     </p>
   */
  Size?: number;

  /**
   * <p>
   *       The time the pricing plan was created.
   *     </p>
   */
  CreationTime?: number;

  /**
   * <p>
   *       The most recent time the pricing plan was modified.
   *     </p>
   */
  LastModifiedTime?: number;
}

export namespace PricingPlanListElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PricingPlanListElement): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface ListPricingPlansOutput {
  /**
   * <p>
   *       The billing period for which the described pricing plans are applicable.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>A list of <code>PricingPlanListElement</code> retrieved.
   *     </p>
   */
  PricingPlans?: PricingPlanListElement[];

  /**
   * <p>The pagination token used on subsequent calls to get pricing plans.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingPlansOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingPlansOutput): any => ({
    ...obj,
    ...(obj.PricingPlans && {
      PricingPlans: obj.PricingPlans.map((item) => PricingPlanListElement.filterSensitiveLog(item)),
    }),
  });
}

export interface ListPricingPlansAssociatedWithPricingRuleInput {
  /**
   * <p>
   *       The pricing plan billing period for which associations will be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p> The pricing rule Amazon Resource Name (ARN) for which associations will be listed. </p>
   */
  PricingRuleArn: string | undefined;

  /**
   * <p>
   *       The optional maximum number of pricing rule associations to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       The optional pagination token returned by a previous call.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingPlansAssociatedWithPricingRuleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingPlansAssociatedWithPricingRuleInput): any => ({
    ...obj,
  });
}

export interface ListPricingPlansAssociatedWithPricingRuleOutput {
  /**
   * <p>
   *       The pricing plan billing period for which associations will be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p> The pricing rule Amazon Resource Name (ARN) for which associations will be listed. </p>
   */
  PricingRuleArn?: string;

  /**
   * <p>
   *       The list containing pricing plans associated with the requested pricing rule.
   *     </p>
   */
  PricingPlanArns?: string[];

  /**
   * <p>
   *       The pagination token to be used on subsequent calls.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingPlansAssociatedWithPricingRuleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingPlansAssociatedWithPricingRuleOutput): any => ({
    ...obj,
  });
}

export interface UpdatePricingPlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the pricing plan you're updating. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the pricing plan. The name must be unique to each pricing plan.
   *     </p>
   */
  Name?: string;

  /**
   * <p>The pricing plan description.
   *     </p>
   */
  Description?: string;
}

export namespace UpdatePricingPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePricingPlanInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdatePricingPlanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pricing plan. </p>
   */
  Arn?: string;

  /**
   * <p>
   *       The name of the pricing plan. The name must be unique to each pricing plan.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       The new description for the pricing rule.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The pricing rules count currently associated with this pricing plan list.
   *     </p>
   */
  Size?: number;

  /**
   * <p>
   *       The most recent time the pricing plan was modified.
   *     </p>
   */
  LastModifiedTime?: number;
}

export namespace UpdatePricingPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePricingPlanOutput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export enum PricingRuleScope {
  GLOBAL = "GLOBAL",
  SERVICE = "SERVICE",
}

export enum PricingRuleType {
  DISCOUNT = "DISCOUNT",
  MARKUP = "MARKUP",
}

export interface CreatePricingRuleInput {
  /**
   * <p>
   *       The token that is needed to support idempotency. Idempotency isn't currently supported, but will be implemented in a future update.
   *     </p>
   */
  ClientToken?: string;

  /**
   * <p>
   *       The pricing rule name. The names must be unique to each pricing rule.
   *     </p>
   */
  Name: string | undefined;

  /**
   * <p>
   *       The pricing rule description.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The scope of pricing rule that indicates if it is globally applicable, or is service-specific.
   *     </p>
   */
  Scope: PricingRuleScope | string | undefined;

  /**
   * <p>
   *       The type of pricing rule.
   *     </p>
   */
  Type: PricingRuleType | string | undefined;

  /**
   * <p>
   *       A percentage modifier applied on the public pricing rates.
   *     </p>
   */
  ModifierPercentage: number | undefined;

  /**
   * <p>
   *       If the <code>Scope</code> attribute is set to <code>SERVICE</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for.
   *     </p>
   */
  Service?: string;

  /**
   * <p>
   *       A map that contains tag keys and tag values that are attached to a pricing rule.
   *     </p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreatePricingRuleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePricingRuleInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface CreatePricingRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created pricing rule. </p>
   */
  Arn?: string;
}

export namespace CreatePricingRuleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePricingRuleOutput): any => ({
    ...obj,
  });
}

export interface DeletePricingRuleInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the pricing rule you are deleting. </p>
   */
  Arn: string | undefined;
}

export namespace DeletePricingRuleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePricingRuleInput): any => ({
    ...obj,
  });
}

export interface DeletePricingRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the deleted pricing rule. </p>
   */
  Arn?: string;
}

export namespace DeletePricingRuleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePricingRuleOutput): any => ({
    ...obj,
  });
}

/**
 * <p> The filter that specifies criteria that the pricing rules returned by the
 *         <code>ListPricingRules</code> API will adhere to. </p>
 */
export interface ListPricingRulesFilter {
  /**
   * <p> A list containing the pricing rule Amazon Resource Names (ARNs) to include in the API
   *       response. </p>
   */
  Arns?: string[];
}

export namespace ListPricingRulesFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingRulesFilter): any => ({
    ...obj,
  });
}

export interface ListPricingRulesInput {
  /**
   * <p>
   *       The preferred billing period to get the pricing plan.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p> A <code>DescribePricingRuleFilter</code> that specifies the Amazon Resource Name (ARNs)
   *       of pricing rules to retrieve pricing rules information. </p>
   */
  Filters?: ListPricingRulesFilter;

  /**
   * <p>
   *       The maximum number of pricing rules to retrieve.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       The pagination token used on subsequent call to get pricing rules.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingRulesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingRulesInput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A representation of a pricing rule.
 *     </p>
 */
export interface PricingRuleListElement {
  /**
   * <p>
   *       The name of a pricing rule.
   *     </p>
   */
  Name?: string;

  /**
   * <p> The Amazon Resource Name (ARN) used to uniquely identify a pricing rule. </p>
   */
  Arn?: string;

  /**
   * <p>
   *       The pricing rule description.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The scope of pricing rule that indicates if it is globally applicable, or if it is service-specific.
   *     </p>
   */
  Scope?: PricingRuleScope | string;

  /**
   * <p>
   *       The type of pricing rule.
   *     </p>
   */
  Type?: PricingRuleType | string;

  /**
   * <p>
   *       A percentage modifier applied on the public pricing rates.
   *     </p>
   */
  ModifierPercentage?: number;

  /**
   * <p>
   *       If the <code>Scope</code> attribute is <code>SERVICE</code>, this attribute indicates which service the <code>PricingRule</code> is applicable for.
   *     </p>
   */
  Service?: string;

  /**
   * <p>
   *       The pricing plans count that this pricing rule is associated with.
   *     </p>
   */
  AssociatedPricingPlanCount?: number;

  /**
   * <p>
   *       The time the pricing rule was created.
   *     </p>
   */
  CreationTime?: number;

  /**
   * <p>
   *       The most recent time the pricing rule was modified.
   *     </p>
   */
  LastModifiedTime?: number;
}

export namespace PricingRuleListElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PricingRuleListElement): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface ListPricingRulesOutput {
  /**
   * <p>
   *       The billing period for which the described pricing rules are applicable.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p>
   *       A list containing the described pricing rules.
   *     </p>
   */
  PricingRules?: PricingRuleListElement[];

  /**
   * <p>
   *       The pagination token used on subsequent calls to get pricing rules.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingRulesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingRulesOutput): any => ({
    ...obj,
    ...(obj.PricingRules && {
      PricingRules: obj.PricingRules.map((item) => PricingRuleListElement.filterSensitiveLog(item)),
    }),
  });
}

export interface ListPricingRulesAssociatedToPricingPlanInput {
  /**
   * <p>
   *       The billing period for which the pricing rule associations are to be listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan for which associations are to be
   *       listed.</p>
   */
  PricingPlanArn: string | undefined;

  /**
   * <p>The optional maximum number of pricing rule associations to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       The optional pagination token returned by a previous call.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingRulesAssociatedToPricingPlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingRulesAssociatedToPricingPlanInput): any => ({
    ...obj,
  });
}

export interface ListPricingRulesAssociatedToPricingPlanOutput {
  /**
   * <p>
   *       The billing period for which the pricing rule associations are listed.
   *     </p>
   */
  BillingPeriod?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan for which associations are
   *       listed.</p>
   */
  PricingPlanArn?: string;

  /**
   * <p>
   *       A list containing pricing rules associated with the requested pricing plan.
   *     </p>
   */
  PricingRuleArns?: string[];

  /**
   * <p>
   *       The pagination token to be used on subsequent calls.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListPricingRulesAssociatedToPricingPlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPricingRulesAssociatedToPricingPlanOutput): any => ({
    ...obj,
  });
}

export interface UpdatePricingRuleInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the pricing rule to update. </p>
   */
  Arn: string | undefined;

  /**
   * <p>
   *       The new name of the pricing rule. The name must be unique to each pricing rule.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       The new description for the pricing rule.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The new pricing rule type.
   *     </p>
   */
  Type?: PricingRuleType | string;

  /**
   * <p>
   *       The new modifier to show pricing plan rates as a percentage.
   *     </p>
   */
  ModifierPercentage?: number;
}

export namespace UpdatePricingRuleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePricingRuleInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface UpdatePricingRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the successfully updated pricing rule. </p>
   */
  Arn?: string;

  /**
   * <p>
   *       The new name of the pricing rule. The name must be unique to each pricing rule.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       The new description for the pricing rule.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The scope of pricing rule that indicates if it is globally applicable, or is service-specific.
   *     </p>
   */
  Scope?: PricingRuleScope | string;

  /**
   * <p>
   *       The new pricing rule type.
   *     </p>
   */
  Type?: PricingRuleType | string;

  /**
   * <p>
   *       The new modifier to show pricing plan rates as a percentage.
   *     </p>
   */
  ModifierPercentage?: number;

  /**
   * <p>
   *       If the <code>Scope</code> attribute is set to <code>SERVICE</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for.
   *     </p>
   */
  Service?: string;

  /**
   * <p>
   *       The pricing plans count that this pricing rule is associated with.
   *     </p>
   */
  AssociatedPricingPlanCount?: number;

  /**
   * <p>
   *       The most recent time the pricing rule was modified.
   *     </p>
   */
  LastModifiedTime?: number;
}

export namespace UpdatePricingRuleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePricingRuleOutput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface TagResourceRequest {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the resource to which to add tags.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *       The tags to add to the resource as a list of key-value pairs.
   *     </p>
   */
  Tags: { [key: string]: string } | undefined;
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
   * <p>
   *       The Amazon Resource Name (ARN) of the resource to which to delete tags.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *       The tags to delete from the resource as a list of key-value pairs.
   *     </p>
   */
  TagKeys: string[] | undefined;
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
