// smithy-typescript generated code
import type {
  AssociateResourceErrorReason,
  BillingGroupStatus,
  BillingGroupType,
  ComputationRuleEnum,
  CurrencyCode,
  CustomLineItemRelationship,
  CustomLineItemType,
  GroupByAttributeName,
  LineItemFilterAttributeName,
  LineItemFilterValue,
  MatchOption,
  PricingRuleScope,
  PricingRuleType,
  SearchOption,
} from "./enums";

/**
 * A representation of a linked account.
 *
 * @public
 */
export interface AccountAssociationsListElement {
  /**
   * The associating array of account IDs.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Billing Group Arn that the linked account is associated to.
   *
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * The Amazon Web Services account name.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The Amazon Web Services account email.
   *
   * @public
   */
  AccountEmail?: string | undefined;
}

/**
 * The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.
 *
 * @public
 */
export interface AccountGrouping {
  /**
   * The account IDs that make up the billing group. Account IDs must be a part of the consolidated billing family, and not associated with another billing group.
   *
   * @public
   */
  LinkedAccountIds?: string[] | undefined;

  /**
   * Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.
   *
   * @public
   */
  AutoAssociate?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the transfer relationship owned by the Bill Transfer account (caller account). When specified, the PrimaryAccountId is no longer required.
   *
   * @public
   */
  ResponsibilityTransferArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsInput {
  /**
   * The Amazon Resource Name (ARN) of the billing group that associates the array of account IDs.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The associating array of account IDs.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsOutput {
  /**
   * The Amazon Resource Name (ARN) of the billing group that associates the array of account IDs.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The field's information of a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The message describing why the field failed validation.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface AssociatePricingRulesInput {
  /**
   * The `PricingPlanArn` that the `PricingRuleArns` are associated with.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The `PricingRuleArns` that are associated with the Pricing Plan.
   *
   * @public
   */
  PricingRuleArns: string[] | undefined;
}

/**
 * @public
 */
export interface AssociatePricingRulesOutput {
  /**
   * The `PricingPlanArn` that the `PricingRuleArns` are associated with.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * A representation of a resource association error.
 *
 * @public
 */
export interface AssociateResourceError {
  /**
   * The reason why the resource association failed.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A static error code that's used to classify the type of failure.
   *
   * @public
   */
  Reason?: AssociateResourceErrorReason | undefined;
}

/**
 * A resource association result for a percentage custom line item.
 *
 * @public
 */
export interface AssociateResourceResponseElement {
  /**
   * The resource ARN that was associated to the custom line item.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An `AssociateResourceError` that will populate if the resource association fails.
   *
   * @public
   */
  Error?: AssociateResourceError | undefined;
}

/**
 * The key-value pair that represents the attribute by which the `BillingGroupCostReportResults` are grouped. For example, if you want a service-level breakdown for Amazon Simple Storage Service (Amazon S3) of the billing group, the attribute will be a key-value pair of `"PRODUCT_NAME"` and `"S3"`.
 *
 * @public
 */
export interface Attribute {
  /**
   * The key in a key-value pair that describes the margin summary.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value in a key-value pair that describes the margin summary.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The auto billing group creation preference for a billing transfer. When the preference is enabled, Billing Conductor automatically creates an indirect billing transfer billing group, with the specified pricing plan, for each account that transfers its bill to the bill source account of the billing transfer.
 *
 * @public
 */
export interface AutoTransferBillingGroupCreationPreference {
  /**
   * Specifies whether Billing Conductor automatically creates billing groups for the billing transfer. The preference is disabled by default.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pricing plan to apply to the automatically created billing groups. This value is required when `Enabled` is `true`, and must be omitted when `Enabled` is `false`.
   *
   * @public
   */
  PricingPlanArn?: string | undefined;
}

/**
 * The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
 *
 * @public
 */
export interface ComputationPreference {
  /**
   * The Amazon Resource Name (ARN) of the pricing plan that's used to compute the Amazon Web Services charges for a billing group.
   *
   * @public
   */
  PricingPlanArn: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingGroupInput {
  /**
   * A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The billing group name. The names must be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.
   *
   * @public
   */
  AccountGrouping: AccountGrouping | undefined;

  /**
   * The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *
   * @public
   */
  ComputationPreference: ComputationPreference | undefined;

  /**
   * The account ID that serves as the main account in a billing group.
   *
   * @public
   */
  PrimaryAccountId?: string | undefined;

  /**
   * The description of the billing group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A map that contains tag keys and tag values that are attached to a billing group. This feature isn't available during the beta.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBillingGroupOutput {
  /**
   * The Amazon Resource Name (ARN) of the created billing group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillingGroupInput {
  /**
   * The Amazon Resource Name (ARN) of the billing group that you're deleting.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillingGroupOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted billing group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAccountsInput {
  /**
   * The Amazon Resource Name (ARN) of the billing group that the array of account IDs will disassociate from.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The array of account IDs to disassociate.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateAccountsOutput {
  /**
   * The Amazon Resource Name (ARN) of the billing group that the array of account IDs is disassociated from.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * A structure that defines string search parameters.
 *
 * @public
 */
export interface StringSearch {
  /**
   * The search option to be applied when performing the string search.
   *
   * @public
   */
  SearchOption: SearchOption | undefined;

  /**
   * The value to search for within the specified string field.
   *
   * @public
   */
  SearchValue: string | undefined;
}

/**
 * The filter that specifies the billing groups and pricing plans to retrieve billing group information.
 *
 * @public
 */
export interface ListBillingGroupsFilter {
  /**
   * The list of billing group Amazon Resource Names (ARNs) to retrieve information.
   *
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * The pricing plan Amazon Resource Names (ARNs) to retrieve information.
   *
   * @public
   */
  PricingPlan?: string | undefined;

  /**
   * A list of billing groups to retrieve their current status for a specific time range
   *
   * @public
   */
  Statuses?: BillingGroupStatus[] | undefined;

  /**
   * Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.
   *
   * @public
   */
  AutoAssociate?: boolean | undefined;

  /**
   * A list of primary account IDs to filter the billing groups.
   *
   * @public
   */
  PrimaryAccountIds?: string[] | undefined;

  /**
   * Filter billing groups by their type.
   *
   * @public
   */
  BillingGroupTypes?: BillingGroupType[] | undefined;

  /**
   * Filter billing groups by their names.
   *
   * @public
   */
  Names?: StringSearch[] | undefined;

  /**
   * Filter billing groups by their responsibility transfer ARNs.
   *
   * @public
   */
  ResponsibilityTransferArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsInput {
  /**
   * The preferred billing period to get billing groups.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The maximum number of billing groups to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used on subsequent calls to get billing groups.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A `ListBillingGroupsFilter` that specifies the billing group and pricing plan to retrieve billing group information.
   *
   * @public
   */
  Filters?: ListBillingGroupsFilter | undefined;
}

/**
 * Specifies if the billing group has the following features enabled.
 *
 * @public
 */
export interface ListBillingGroupAccountGrouping {
  /**
   * Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.
   *
   * @public
   */
  AutoAssociate?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the transfer relationship for the billing group.
   *
   * @public
   */
  ResponsibilityTransferArn?: string | undefined;
}

/**
 * A representation of a billing group.
 *
 * @public
 */
export interface BillingGroupListElement {
  /**
   * The name of the billing group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) that can be used to uniquely identify the billing group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description of the billing group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The account ID that serves as the main account in a billing group.
   *
   * @public
   */
  PrimaryAccountId?: string | undefined;

  /**
   * The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *
   * @public
   */
  ComputationPreference?: ComputationPreference | undefined;

  /**
   * The number of accounts in the particular billing group.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The time when the billing group was created.
   *
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * The most recent time when the billing group was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * The billing group status. Only one of the valid values can be used.
   *
   * @public
   */
  Status?: BillingGroupStatus | undefined;

  /**
   * The reason why the billing group is in its current status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Specifies if the billing group has automatic account association (`AutoAssociate`) enabled.
   *
   * @public
   */
  AccountGrouping?: ListBillingGroupAccountGrouping | undefined;

  /**
   * The type of billing group.
   *
   * @public
   */
  BillingGroupType?: BillingGroupType | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsOutput {
  /**
   * A list of `BillingGroupListElement` retrieved.
   *
   * @public
   */
  BillingGroups?: BillingGroupListElement[] | undefined;

  /**
   * The pagination token that's used on subsequent calls to get billing groups.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies if the billing group has the following features enabled.
 *
 * @public
 */
export interface UpdateBillingGroupAccountGrouping {
  /**
   * Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.
   *
   * @public
   */
  AutoAssociate?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the transfer relationship. Note: Modifications to the ResponsibilityTransferArn are not permitted for existing billing groups.
   *
   * @public
   */
  ResponsibilityTransferArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBillingGroupInput {
  /**
   * The Amazon Resource Name (ARN) of the billing group being updated.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the billing group. The names must be unique to each billing group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the billing group. Only one of the valid values can be used.
   *
   * @public
   */
  Status?: BillingGroupStatus | undefined;

  /**
   * The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
   *
   * @public
   */
  ComputationPreference?: ComputationPreference | undefined;

  /**
   * A description of the billing group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies if the billing group has automatic account association (`AutoAssociate`) enabled.
   *
   * @public
   */
  AccountGrouping?: UpdateBillingGroupAccountGrouping | undefined;
}

/**
 * @public
 */
export interface UpdateBillingGroupOutput {
  /**
   * The Amazon Resource Name (ARN) of the billing group that was updated.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the billing group. The names must be unique to each billing group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the billing group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The account ID that serves as the main account in a billing group.
   *
   * @public
   */
  PrimaryAccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pricing plan to compute Amazon Web Services charges for the billing group.
   *
   * @public
   */
  PricingPlanArn?: string | undefined;

  /**
   * The number of accounts in the particular billing group.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The most recent time when the billing group was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * The status of the billing group. Only one of the valid values can be used.
   *
   * @public
   */
  Status?: BillingGroupStatus | undefined;

  /**
   * The reason why the billing group is in its current status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Specifies if the billing group has automatic account association (`AutoAssociate`) enabled.
   *
   * @public
   */
  AccountGrouping?: UpdateBillingGroupAccountGrouping | undefined;
}

/**
 * The billing period range in which the custom line item request will be applied.
 *
 * @public
 */
export interface CustomLineItemBillingPeriodRange {
  /**
   * The inclusive start billing period that defines a billing period range where a custom line is applied.
   *
   * @public
   */
  InclusiveStartBillingPeriod: string | undefined;

  /**
   * The inclusive end billing period that defines a billing period range where a custom line is applied.
   *
   * @public
   */
  ExclusiveEndBillingPeriod?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourcesToCustomLineItemInput {
  /**
   * A percentage custom line item ARN to associate the resources to.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A list containing the ARNs of the resources to be associated.
   *
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * The billing period range in which the custom line item request will be applied.
   *
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourcesToCustomLineItemOutput {
  /**
   * A list of `AssociateResourceResponseElement` for each resource that's been associated to a percentage custom line item successfully.
   *
   * @public
   */
  SuccessfullyAssociatedResources?: AssociateResourceResponseElement[] | undefined;

  /**
   * A list of `AssociateResourceResponseElement` for each resource that failed association to a percentage custom line item.
   *
   * @public
   */
  FailedAssociatedResources?: AssociateResourceResponseElement[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourcesFromCustomLineItemInput {
  /**
   * A percentage custom line item ARN to disassociate the resources from.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A list containing the ARNs of resources to be disassociated.
   *
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * The billing period range in which the custom line item request will be applied.
   *
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * A resource disassociation result for a percentage custom line item.
 *
 * @public
 */
export interface DisassociateResourceResponseElement {
  /**
   * The resource ARN that was disassociated from the custom line item.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An `AssociateResourceError` that's shown if the resource disassociation fails.
   *
   * @public
   */
  Error?: AssociateResourceError | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourcesFromCustomLineItemOutput {
  /**
   * A list of `DisassociateResourceResponseElement` for each resource that's been disassociated from a percentage custom line item successfully.
   *
   * @public
   */
  SuccessfullyDisassociatedResources?: DisassociateResourceResponseElement[] | undefined;

  /**
   * A list of `DisassociateResourceResponseElement` for each resource that failed disassociation from a percentage custom line item.
   *
   * @public
   */
  FailedDisassociatedResources?: DisassociateResourceResponseElement[] | undefined;
}

/**
 * A representation of the charge details that are associated with a flat custom line item.
 *
 * @public
 */
export interface CustomLineItemFlatChargeDetails {
  /**
   * The custom line item's fixed charge value in USD.
   *
   * @public
   */
  ChargeValue: number | undefined;
}

/**
 * A representation of the line item filter for your custom line item. You can use line item filters to include or exclude specific resource values from the billing group's total cost. For example, if you create a custom line item and you want to filter out a value, such as Savings Plans discounts, you can update `LineItemFilter` to exclude it.
 *
 * @public
 */
export interface LineItemFilter {
  /**
   * The attribute of the line item filter. This specifies what attribute that you can filter on.
   *
   * @public
   */
  Attribute: LineItemFilterAttributeName | undefined;

  /**
   * The match criteria of the line item filter. This parameter specifies whether not to include the resource value from the billing group total cost.
   *
   * @public
   */
  MatchOption: MatchOption | undefined;

  /**
   * The values of the line item filter. This specifies the values to filter on. Currently, you can only exclude Savings Plans discounts.
   *
   * @public
   */
  Values?: LineItemFilterValue[] | undefined;

  /**
   * The values of the line item filter. This specifies the values to filter on.
   *
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * A representation of the charge details that are associated with a percentage custom line item.
 *
 * @public
 */
export interface CustomLineItemPercentageChargeDetails {
  /**
   * The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *
   * @public
   */
  PercentageValue: number | undefined;

  /**
   * A list of resource ARNs to associate to the percentage custom line item.
   *
   * @public
   */
  AssociatedValues?: string[] | undefined;
}

/**
 * The charge details of a custom line item. It should contain only one of `Flat` or `Percentage`.
 *
 * @public
 */
export interface CustomLineItemChargeDetails {
  /**
   * A `CustomLineItemFlatChargeDetails` that describes the charge details of a flat custom line item.
   *
   * @public
   */
  Flat?: CustomLineItemFlatChargeDetails | undefined;

  /**
   * A `CustomLineItemPercentageChargeDetails` that describes the charge details of a percentage custom line item.
   *
   * @public
   */
  Percentage?: CustomLineItemPercentageChargeDetails | undefined;

  /**
   * The type of the custom line item that indicates whether the charge is a fee or credit.
   *
   * @public
   */
  Type: CustomLineItemType | undefined;

  /**
   * A representation of the line item filter.
   *
   * @public
   */
  LineItemFilters?: LineItemFilter[] | undefined;
}

/**
 * An object that defines how custom line item charges are presented in the bill, containing specifications for service presentation.
 *
 * @public
 */
export interface PresentationObject {
  /**
   * The service under which the custom line item charges will be presented. Must be a string between 1 and 128 characters matching the pattern "`^[a-zA-Z0-9]+$`".
   *
   * @public
   */
  Service: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomLineItemInput {
  /**
   * A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the custom line item.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the custom line item. This is shown on the Bills page in association with the charge value.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
   *
   * @public
   */
  BillingGroupArn: string | undefined;

  /**
   * A time range for which the custom line item is effective.
   *
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;

  /**
   * A map that contains tag keys and tag values that are attached to a custom line item.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A `CustomLineItemChargeDetails` that describes the charge details for a custom line item.
   *
   * @public
   */
  ChargeDetails: CustomLineItemChargeDetails | undefined;

  /**
   * The Amazon Web Services account in which this custom line item will be applied to.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies how the custom line item charges are computed.
   *
   * @public
   */
  ComputationRule?: ComputationRuleEnum | undefined;

  /**
   * Details controlling how the custom line item charges are presented in the bill. Contains specifications for which service the charges will be shown under.
   *
   * @public
   */
  PresentationDetails?: PresentationObject | undefined;
}

/**
 * @public
 */
export interface CreateCustomLineItemOutput {
  /**
   * The Amazon Resource Name (ARN) of the created custom line item.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomLineItemInput {
  /**
   * The ARN of the custom line item to be deleted.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The billing period range in which the custom line item request will be applied.
   *
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * @public
 */
export interface DeleteCustomLineItemOutput {
  /**
   * The ARN of the deleted custom line item.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * A filter that specifies the custom line items and billing groups to retrieve FFLI information.
 *
 * @public
 */
export interface ListCustomLineItemsFilter {
  /**
   * A list of custom line items to retrieve information.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The billing group Amazon Resource Names (ARNs) to retrieve information.
   *
   * @public
   */
  BillingGroups?: string[] | undefined;

  /**
   * A list of custom line item ARNs to retrieve information.
   *
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * The Amazon Web Services accounts in which this custom line item will be applied to.
   *
   * @public
   */
  AccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemsInput {
  /**
   * The preferred billing period to get custom line items (FFLIs).
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The maximum number of billing groups to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used on subsequent calls to get custom line items (FFLIs).
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A `ListCustomLineItemsFilter` that specifies the custom line item names and/or billing group Amazon Resource Names (ARNs) to retrieve FFLI information.
   *
   * @public
   */
  Filters?: ListCustomLineItemsFilter | undefined;
}

/**
 * A representation of the charge details that are associated with a flat custom line item.
 *
 * @public
 */
export interface ListCustomLineItemFlatChargeDetails {
  /**
   * The custom line item's fixed charge value in USD.
   *
   * @public
   */
  ChargeValue: number | undefined;
}

/**
 * A representation of the charge details that are associated with a percentage custom line item.
 *
 * @public
 */
export interface ListCustomLineItemPercentageChargeDetails {
  /**
   * The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *
   * @public
   */
  PercentageValue: number | undefined;
}

/**
 * A representation of the charge details of a custom line item.
 *
 * @public
 */
export interface ListCustomLineItemChargeDetails {
  /**
   * A `ListCustomLineItemFlatChargeDetails` that describes the charge details of a flat custom line item.
   *
   * @public
   */
  Flat?: ListCustomLineItemFlatChargeDetails | undefined;

  /**
   * A `ListCustomLineItemPercentageChargeDetails` that describes the charge details of a percentage custom line item.
   *
   * @public
   */
  Percentage?: ListCustomLineItemPercentageChargeDetails | undefined;

  /**
   * The type of the custom line item that indicates whether the charge is a `fee` or `credit`.
   *
   * @public
   */
  Type: CustomLineItemType | undefined;

  /**
   * A representation of the line item filter.
   *
   * @public
   */
  LineItemFilters?: LineItemFilter[] | undefined;
}

/**
 * A representation of a custom line item.
 *
 * @public
 */
export interface CustomLineItemListElement {
  /**
   * The Amazon Resource Names (ARNs) for custom line items.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The custom line item's name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A `ListCustomLineItemChargeDetails` that describes the charge details of a custom line item.
   *
   * @public
   */
  ChargeDetails?: ListCustomLineItemChargeDetails | undefined;

  /**
   * The custom line item's charge value currency. Only one of the valid values can be used.
   *
   * @public
   */
  CurrencyCode?: CurrencyCode | undefined;

  /**
   * The custom line item's description. This is shown on the Bills page in association with the charge value.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The product code that's associated with the custom line item.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
   *
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * The time created.
   *
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * The most recent time when the custom line item was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * The number of resources that are associated to the custom line item.
   *
   * @public
   */
  AssociationSize?: number | undefined;

  /**
   * The Amazon Web Services account in which this custom line item will be applied to.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The computation rule that determines how the custom line item charges are computed and reflected in the bill.
   *
   * @public
   */
  ComputationRule?: ComputationRuleEnum | undefined;

  /**
   * Configuration details specifying how the custom line item charges are presented, including which service the charges are shown under.
   *
   * @public
   */
  PresentationDetails?: PresentationObject | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemsOutput {
  /**
   * A list of `FreeFormLineItemListElements` received.
   *
   * @public
   */
  CustomLineItems?: CustomLineItemListElement[] | undefined;

  /**
   * The pagination token that's used on subsequent calls to get custom line items (FFLIs).
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A billing period filter that specifies the custom line item versions to retrieve.
 *
 * @public
 */
export interface ListCustomLineItemVersionsBillingPeriodRangeFilter {
  /**
   * The inclusive start billing period that defines a billing period range where a custom line item version is applied.
   *
   * @public
   */
  StartBillingPeriod?: string | undefined;

  /**
   * The exclusive end billing period that defines a billing period range where a custom line item version is applied.
   *
   * @public
   */
  EndBillingPeriod?: string | undefined;
}

/**
 * A filter that specifies the billing period range where the custom line item versions reside.
 *
 * @public
 */
export interface ListCustomLineItemVersionsFilter {
  /**
   * The billing period range in which the custom line item version is applied.
   *
   * @public
   */
  BillingPeriodRange?: ListCustomLineItemVersionsBillingPeriodRangeFilter | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemVersionsInput {
  /**
   * The Amazon Resource Name (ARN) for the custom line item.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The maximum number of custom line item versions to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used on subsequent calls to retrieve custom line item versions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A `ListCustomLineItemVersionsFilter` that specifies the billing period range in which the custom line item versions are applied.
   *
   * @public
   */
  Filters?: ListCustomLineItemVersionsFilter | undefined;
}

/**
 * A representation of a custom line item version.
 *
 * @public
 */
export interface CustomLineItemVersionListElement {
  /**
   * The name of the custom line item.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A representation of the charge details of a custom line item.
   *
   * @public
   */
  ChargeDetails?: ListCustomLineItemChargeDetails | undefined;

  /**
   * The charge value currency of the custom line item.
   *
   * @public
   */
  CurrencyCode?: CurrencyCode | undefined;

  /**
   * The description of the custom line item.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The product code that’s associated with the custom line item.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the billing group that the custom line item applies to.
   *
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * The time when the custom line item version was created.
   *
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * The most recent time that the custom line item version was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * The number of resources that are associated with the custom line item.
   *
   * @public
   */
  AssociationSize?: number | undefined;

  /**
   * The start billing period of the custom line item version.
   *
   * @public
   */
  StartBillingPeriod?: string | undefined;

  /**
   * The end billing period of the custom line item version.
   *
   * @public
   */
  EndBillingPeriod?: string | undefined;

  /**
   * A list of custom line item Amazon Resource Names (ARNs) to retrieve information.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The inclusive start time.
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The Amazon Web Services account in which this custom line item will be applied to.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The computation rule for a specific version of a custom line item, determining how charges are computed and reflected in the bill.
   *
   * @public
   */
  ComputationRule?: ComputationRuleEnum | undefined;

  /**
   * Presentation configuration for a specific version of a custom line item, specifying how charges are displayed in the bill.
   *
   * @public
   */
  PresentationDetails?: PresentationObject | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemVersionsOutput {
  /**
   * A list of `CustomLineItemVersionListElements` that are received.
   *
   * @public
   */
  CustomLineItemVersions?: CustomLineItemVersionListElement[] | undefined;

  /**
   * The pagination token that's used on subsequent calls to retrieve custom line item versions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter that specifies the type of resource associations that should be retrieved for a custom line item.
 *
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemFilter {
  /**
   * The type of relationship between the custom line item and the associated resource.
   *
   * @public
   */
  Relationship?: CustomLineItemRelationship | undefined;
}

/**
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemInput {
  /**
   * The billing period for which the resource associations will be listed.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The ARN of the custom line item for which the resource associations will be listed.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * (Optional) The maximum number of resource associations to be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * (Optional) The pagination token that's returned by a previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * (Optional) A `ListResourcesAssociatedToCustomLineItemFilter` that can specify the types of resources that should be retrieved.
   *
   * @public
   */
  Filters?: ListResourcesAssociatedToCustomLineItemFilter | undefined;
}

/**
 * A representation of a resource association for a custom line item.
 *
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemResponseElement {
  /**
   * The ARN of the associated resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of relationship between the custom line item and the associated resource.
   *
   * @public
   */
  Relationship?: CustomLineItemRelationship | undefined;

  /**
   * The end billing period of the associated resource.
   *
   * @public
   */
  EndBillingPeriod?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemOutput {
  /**
   * The custom line item ARN for which the resource associations are listed.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A list of `ListResourcesAssociatedToCustomLineItemResponseElement` for each resource association retrieved.
   *
   * @public
   */
  AssociatedResources?: ListResourcesAssociatedToCustomLineItemResponseElement[] | undefined;

  /**
   * The pagination token to be used in subsequent requests to retrieve additional results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A representation of the new charge details that are associated with a flat custom line item.
 *
 * @public
 */
export interface UpdateCustomLineItemFlatChargeDetails {
  /**
   * The custom line item's new fixed charge value in USD.
   *
   * @public
   */
  ChargeValue: number | undefined;
}

/**
 * A representation of the new charge details that are associated with a percentage custom line item.
 *
 * @public
 */
export interface UpdateCustomLineItemPercentageChargeDetails {
  /**
   * The custom line item's new percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *
   * @public
   */
  PercentageValue: number | undefined;
}

/**
 * A representation of the new charge details of a custom line item. This should contain only one of `Flat` or `Percentage`.
 *
 * @public
 */
export interface UpdateCustomLineItemChargeDetails {
  /**
   * An `UpdateCustomLineItemFlatChargeDetails` that describes the new charge details of a flat custom line item.
   *
   * @public
   */
  Flat?: UpdateCustomLineItemFlatChargeDetails | undefined;

  /**
   * An `UpdateCustomLineItemPercentageChargeDetails` that describes the new charge details of a percentage custom line item.
   *
   * @public
   */
  Percentage?: UpdateCustomLineItemPercentageChargeDetails | undefined;

  /**
   * A representation of the line item filter.
   *
   * @public
   */
  LineItemFilters?: LineItemFilter[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomLineItemInput {
  /**
   * The ARN of the custom line item to be updated.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The new name for the custom line item.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new line item description of the custom line item.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A `ListCustomLineItemChargeDetails` containing the new charge details for the custom line item.
   *
   * @public
   */
  ChargeDetails?: UpdateCustomLineItemChargeDetails | undefined;

  /**
   * The billing period range in which the custom line item request will be applied.
   *
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * @public
 */
export interface UpdateCustomLineItemOutput {
  /**
   * The ARN of the successfully updated custom line item.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN of the billing group that the custom line item is applied to.
   *
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * The name of the successfully updated custom line item.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the successfully updated custom line item.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A `ListCustomLineItemChargeDetails` containing the charge details of the successfully updated custom line item.
   *
   * @public
   */
  ChargeDetails?: ListCustomLineItemChargeDetails | undefined;

  /**
   * The most recent time when the custom line item was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * The number of resources that are associated to the custom line item.
   *
   * @public
   */
  AssociationSize?: number | undefined;
}

/**
 * A time range for which the margin summary is effective. The time range can be up to 12 months.
 *
 * @public
 */
export interface BillingPeriodRange {
  /**
   * The inclusive start billing period that defines a billing period range for the margin summary.
   *
   * @public
   */
  InclusiveStartBillingPeriod: string | undefined;

  /**
   * The exclusive end billing period that defines a billing period range for the margin summary. For example, if you choose a billing period that starts in October 2023 and ends in December 2023, the margin summary will only include data from October 2023 and November 2023.
   *
   * @public
   */
  ExclusiveEndBillingPeriod: string | undefined;
}

/**
 * @public
 */
export interface GetBillingGroupCostReportInput {
  /**
   * The Amazon Resource Number (ARN) that uniquely identifies the billing group.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A time range for which the margin summary is effective. You can specify up to 12 months.
   *
   * @public
   */
  BillingPeriodRange?: BillingPeriodRange | undefined;

  /**
   * A list of strings that specify the attributes that are used to break down costs in the margin summary reports for the billing group. For example, you can view your costs by the Amazon Web Services service name or the billing period.
   *
   * @public
   */
  GroupBy?: GroupByAttributeName[] | undefined;

  /**
   * The maximum number of margin summary reports to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used on subsequent calls to get reports.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A paginated call to retrieve a list of summary reports of actual Amazon Web Services charges and the calculated Amazon Web Services charges, broken down by attributes.
 *
 * @public
 */
export interface BillingGroupCostReportResultElement {
  /**
   * The Amazon Resource Number (ARN) that uniquely identifies the billing group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The actual Amazon Web Services charges for the billing group.
   *
   * @public
   */
  AWSCost?: string | undefined;

  /**
   * The hypothetical Amazon Web Services charges based on the associated pricing plan of a billing group.
   *
   * @public
   */
  ProformaCost?: string | undefined;

  /**
   * The billing group margin.
   *
   * @public
   */
  Margin?: string | undefined;

  /**
   * The percentage of the billing group margin.
   *
   * @public
   */
  MarginPercentage?: string | undefined;

  /**
   * The displayed currency.
   *
   * @public
   */
  Currency?: string | undefined;

  /**
   * The list of key-value pairs that represent the attributes by which the `BillingGroupCostReportResults` are grouped. For example, if you want the Amazon S3 service-level breakdown of a billing group for November 2023, the attributes list will contain a key-value pair of `"PRODUCT_NAME"` and `"S3"` and a key-value pair of `"BILLING_PERIOD"` and `"Nov 2023"`.
   *
   * @public
   */
  Attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface GetBillingGroupCostReportOutput {
  /**
   * The list of margin summary reports.
   *
   * @public
   */
  BillingGroupCostReportResults?: BillingGroupCostReportResultElement[] | undefined;

  /**
   * The pagination token used on subsequent calls to get reports.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBillingTransferPreferenceInput {
  /**
   * The Amazon Resource Name (ARN) of the billing transfer whose preference you want to retrieve.
   *
   * @public
   */
  ResponsibilityTransferArn: string | undefined;
}

/**
 * @public
 */
export interface GetBillingTransferPreferenceOutput {
  /**
   * The Amazon Resource Name (ARN) of the billing transfer that the preference applies to.
   *
   * @public
   */
  ResponsibilityTransferArn: string | undefined;

  /**
   * The auto billing group creation preference for the billing transfer.
   *
   * @public
   */
  AutoBillingTransferBillingGroupCreation: AutoTransferBillingGroupCreationPreference | undefined;

  /**
   * The most recent time when the preference was modified. This value is empty if the preference has never been set for the billing transfer.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;
}

/**
 * The filter on the account ID of the linked account, or any of the following:
 *
 * `MONITORED`: linked accounts that are associated to billing groups.
 *
 * `UNMONITORED`: linked accounts that are not associated to billing groups.
 *
 * `Billing Group Arn`: linked accounts that are associated to the provided Billing Group Arn.
 *
 * @public
 */
export interface ListAccountAssociationsFilter {
  /**
   * `MONITORED`: linked accounts that are associated to billing groups.
   *
   * `UNMONITORED`: linked accounts that are not associated to billing groups.
   *
   * `Billing Group Arn`: linked accounts that are associated to the provided Billing Group Arn.
   *
   * @public
   */
  Association?: string | undefined;

  /**
   * The Amazon Web Services account ID to filter on.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The list of Amazon Web Services IDs to retrieve their associated billing group for a given time range.
   *
   * @public
   */
  AccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsInput {
  /**
   * The preferred billing period to get account associations.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The filter on the account ID of the linked account, or any of the following:
   *
   * `MONITORED`: linked accounts that are associated to billing groups.
   *
   * `UNMONITORED`: linked accounts that aren't associated to billing groups.
   *
   * `Billing Group Arn`: linked accounts that are associated to the provided billing group Arn.
   *
   * @public
   */
  Filters?: ListAccountAssociationsFilter | undefined;

  /**
   * The pagination token that's used on subsequent calls to retrieve accounts.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsOutput {
  /**
   * The list of linked accounts in the payer account.
   *
   * @public
   */
  LinkedAccounts?: AccountAssociationsListElement[] | undefined;

  /**
   * The pagination token that's used on subsequent calls to get accounts.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter used to retrieve specific `BillingGroupCostReportElements`.
 *
 * @public
 */
export interface ListBillingGroupCostReportsFilter {
  /**
   * The list of Amazon Resource Names (ARNs) used to filter billing groups to retrieve reports.
   *
   * @public
   */
  BillingGroupArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupCostReportsInput {
  /**
   * The preferred billing period for your report.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The maximum number of reports to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used on subsequent calls to get reports.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A `ListBillingGroupCostReportsFilter` to specify billing groups to retrieve reports from.
   *
   * @public
   */
  Filters?: ListBillingGroupCostReportsFilter | undefined;
}

/**
 * A summary report of actual Amazon Web Services charges and calculated Amazon Web Services charges, based on the associated pricing plan of a billing group.
 *
 * @public
 */
export interface BillingGroupCostReportElement {
  /**
   * The Amazon Resource Name (ARN) of a billing group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The actual Amazon Web Services charges for the billing group.
   *
   * @public
   */
  AWSCost?: string | undefined;

  /**
   * The hypothetical Amazon Web Services charges based on the associated pricing plan of a billing group.
   *
   * @public
   */
  ProformaCost?: string | undefined;

  /**
   * The billing group margin.
   *
   * @public
   */
  Margin?: string | undefined;

  /**
   * The percentage of billing group margin.
   *
   * @public
   */
  MarginPercentage?: string | undefined;

  /**
   * The displayed currency.
   *
   * @public
   */
  Currency?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupCostReportsOutput {
  /**
   * A list of `BillingGroupCostReportElement` retrieved.
   *
   * @public
   */
  BillingGroupCostReports?: BillingGroupCostReportElement[] | undefined;

  /**
   * The pagination token that's used on subsequent calls to get reports.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePricingPlanInput {
  /**
   * A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the pricing plan. The names must be unique to each pricing plan.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the pricing plan.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) that define the pricing plan parameters.
   *
   * @public
   */
  PricingRuleArns?: string[] | undefined;

  /**
   * A map that contains tag keys and tag values that are attached to a pricing plan.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePricingPlanOutput {
  /**
   * The Amazon Resource Name (ARN) of the created pricing plan.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingPlanInput {
  /**
   * The Amazon Resource Name (ARN) of the pricing plan that you're deleting.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingPlanOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted pricing plan.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePricingRulesInput {
  /**
   * The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list containing the Amazon Resource Name (ARN) of the pricing rules that will be disassociated.
   *
   * @public
   */
  PricingRuleArns: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePricingRulesOutput {
  /**
   * The Amazon Resource Name (ARN) of the pricing plan that the pricing rules successfully disassociated from.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve pricing plan information.
 *
 * @public
 */
export interface ListPricingPlansFilter {
  /**
   * A list of pricing plan Amazon Resource Names (ARNs) to retrieve information.
   *
   * @public
   */
  Arns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansInput {
  /**
   * The preferred billing period to get pricing plan.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * A `ListPricingPlansFilter` that specifies the Amazon Resource Name (ARNs) of pricing plans to retrieve pricing plans information.
   *
   * @public
   */
  Filters?: ListPricingPlansFilter | undefined;

  /**
   * The maximum number of pricing plans to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used on subsequent call to get pricing plans.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A representation of a pricing plan.
 *
 * @public
 */
export interface PricingPlanListElement {
  /**
   * The name of a pricing plan.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The pricing plan Amazon Resource Names (ARN). This can be used to uniquely identify a pricing plan.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The pricing plan description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The pricing rules count that's currently associated with this pricing plan list element.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The time when the pricing plan was created.
   *
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * The most recent time when the pricing plan was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansOutput {
  /**
   * The billing period for which the described pricing plans are applicable.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * A list of `PricingPlanListElement` retrieved.
   *
   * @public
   */
  PricingPlans?: PricingPlanListElement[] | undefined;

  /**
   * The pagination token that's used on subsequent calls to get pricing plans.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansAssociatedWithPricingRuleInput {
  /**
   * The pricing plan billing period for which associations will be listed.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The pricing rule Amazon Resource Name (ARN) for which associations will be listed.
   *
   * @public
   */
  PricingRuleArn: string | undefined;

  /**
   * The optional maximum number of pricing rule associations to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The optional pagination token returned by a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansAssociatedWithPricingRuleOutput {
  /**
   * The pricing plan billing period for which associations will be listed.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The pricing rule Amazon Resource Name (ARN) for which associations will be listed.
   *
   * @public
   */
  PricingRuleArn?: string | undefined;

  /**
   * The list containing pricing plans that are associated with the requested pricing rule.
   *
   * @public
   */
  PricingPlanArns?: string[] | undefined;

  /**
   * The pagination token to be used on subsequent calls.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanInput {
  /**
   * The Amazon Resource Name (ARN) of the pricing plan that you're updating.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the pricing plan. The name must be unique to each pricing plan.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the pricing plan.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanOutput {
  /**
   * The Amazon Resource Name (ARN) of the updated pricing plan.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the pricing plan. The name must be unique to each pricing plan.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new description for the pricing rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The pricing rules count that's currently associated with this pricing plan list.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The most recent time when the pricing plan was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;
}

/**
 * A custom tier for the pricing rule. Each custom tier applies a rate to the usage that falls within the tier's range.
 *
 * @public
 */
export interface CustomTier {
  /**
   * The inclusive start of the usage range that this tier applies to.
   *
   * @public
   */
  BeginRangeInclusive: number | undefined;

  /**
   * The exclusive end of the usage range that this tier applies to. If you don't specify a value, this tier applies to all usage that is greater than or equal to `BeginRangeInclusive`.
   *
   * @public
   */
  EndRangeExclusive?: number | undefined;

  /**
   * The rate that's applied to the usage that falls within this tier.
   *
   * @public
   */
  RateValue: number | undefined;
}

/**
 * The possible Amazon Web Services Free Tier configurations.
 *
 * @public
 */
export interface CreateFreeTierConfig {
  /**
   * Activate or deactivate Amazon Web Services Free Tier.
   *
   * @public
   */
  Activated: boolean | undefined;
}

/**
 * The set of tiering configurations for the pricing rule.
 *
 * @public
 */
export interface CreateTieringInput {
  /**
   * The possible Amazon Web Services Free Tier configurations.
   *
   * @public
   */
  FreeTier?: CreateFreeTierConfig | undefined;

  /**
   * The set of custom tiers for the pricing rule.
   *
   * @public
   */
  CustomTiers?: CustomTier[] | undefined;
}

/**
 * @public
 */
export interface CreatePricingRuleInput {
  /**
   * A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The pricing rule name. The names must be unique to each pricing rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The pricing rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The scope of pricing rule that indicates if it's globally applicable, or it's service-specific.
   *
   * @public
   */
  Scope: PricingRuleScope | undefined;

  /**
   * The type of pricing rule.
   *
   * @public
   */
  Type: PricingRuleType | undefined;

  /**
   * A percentage modifier that's applied on the public pricing rates. Your entry will be rounded to the nearest 2 decimal places.
   *
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * If the `Scope` attribute is set to `SERVICE` or `SKU`, the attribute indicates which service the `PricingRule` is applicable for.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * A map that contains tag keys and tag values that are attached to a pricing rule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace.
   *
   * @public
   */
  BillingEntity?: string | undefined;

  /**
   * The set of tiering configurations for the pricing rule.
   *
   * @public
   */
  Tiering?: CreateTieringInput | undefined;

  /**
   * Usage type is the unit that each service uses to measure the usage of a specific type of resource.
   *
   * If the `Scope` attribute is set to `SKU`, this attribute indicates which usage type the `PricingRule` is modifying. For example, `USW2-BoxUsage:m2.2xlarge` describes an`M2 High Memory Double Extra Large` instance in the US West (Oregon) Region.
   *
   * @public
   */
  UsageType?: string | undefined;

  /**
   * Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.
   *
   * If the `Scope` attribute is set to `SKU`, this attribute indicates which operation the `PricingRule` is modifying. For example, a value of `RunInstances:0202` indicates the operation of running an Amazon EC2 instance.
   *
   * @public
   */
  Operation?: string | undefined;
}

/**
 * @public
 */
export interface CreatePricingRuleOutput {
  /**
   * The Amazon Resource Name (ARN) of the created pricing rule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingRuleInput {
  /**
   * The Amazon Resource Name (ARN) of the pricing rule that you are deleting.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingRuleOutput {
  /**
   * The Amazon Resource Name (ARN) of the deleted pricing rule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The filter that specifies criteria that the pricing rules returned by the `ListPricingRules` API will adhere to.
 *
 * @public
 */
export interface ListPricingRulesFilter {
  /**
   * A list containing the pricing rule Amazon Resource Names (ARNs) to include in the API response.
   *
   * @public
   */
  Arns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesInput {
  /**
   * The preferred billing period to get the pricing plan.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * A `DescribePricingRuleFilter` that specifies the Amazon Resource Name (ARNs) of pricing rules to retrieve pricing rules information.
   *
   * @public
   */
  Filters?: ListPricingRulesFilter | undefined;

  /**
   * The maximum number of pricing rules to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that's used on subsequent call to get pricing rules.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The possible Amazon Web Services Free Tier configurations.
 *
 * @public
 */
export interface FreeTierConfig {
  /**
   * Activate or deactivate Amazon Web Services Free Tier application.
   *
   * @public
   */
  Activated: boolean | undefined;
}

/**
 * The set of tiering configurations for the pricing rule.
 *
 * @public
 */
export interface Tiering {
  /**
   * The possible Amazon Web Services Free Tier configurations.
   *
   * @public
   */
  FreeTier?: FreeTierConfig | undefined;

  /**
   * The set of custom tiers for the pricing rule.
   *
   * @public
   */
  CustomTiers?: CustomTier[] | undefined;
}

/**
 * A representation of a pricing rule.
 *
 * @public
 */
export interface PricingRuleListElement {
  /**
   * The name of a pricing rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) used to uniquely identify a pricing rule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The pricing rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The scope of pricing rule that indicates if it is globally applicable, or if it is service-specific.
   *
   * @public
   */
  Scope?: PricingRuleScope | undefined;

  /**
   * The type of pricing rule.
   *
   * @public
   */
  Type?: PricingRuleType | undefined;

  /**
   * A percentage modifier applied on the public pricing rates.
   *
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * If the `Scope` attribute is `SERVICE`, this attribute indicates which service the `PricingRule` is applicable for.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The pricing plans count that this pricing rule is associated with.
   *
   * @public
   */
  AssociatedPricingPlanCount?: number | undefined;

  /**
   * The time when the pricing rule was created.
   *
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * The most recent time when the pricing rule was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace.
   *
   * @public
   */
  BillingEntity?: string | undefined;

  /**
   * The set of tiering configurations for the pricing rule.
   *
   * @public
   */
  Tiering?: Tiering | undefined;

  /**
   * Usage type is the unit that each service uses to measure the usage of a specific type of resource.
   *
   * If the `Scope` attribute is set to `SKU`, this attribute indicates which usage type the `PricingRule` is modifying. For example, `USW2-BoxUsage:m2.2xlarge` describes an`M2 High Memory Double Extra Large` instance in the US West (Oregon) Region.
   *
   * @public
   */
  UsageType?: string | undefined;

  /**
   * Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.
   *
   * If the `Scope` attribute is set to `SKU`, this attribute indicates which operation the `PricingRule` is modifying. For example, a value of `RunInstances:0202` indicates the operation of running an Amazon EC2 instance.
   *
   * @public
   */
  Operation?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesOutput {
  /**
   * The billing period for which the described pricing rules are applicable.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * A list containing the described pricing rules.
   *
   * @public
   */
  PricingRules?: PricingRuleListElement[] | undefined;

  /**
   * The pagination token that's used on subsequent calls to get pricing rules.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesAssociatedToPricingPlanInput {
  /**
   * The billing period for which the pricing rule associations are to be listed.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pricing plan for which associations are to be listed.
   *
   * @public
   */
  PricingPlanArn: string | undefined;

  /**
   * The optional maximum number of pricing rule associations to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The optional pagination token returned by a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesAssociatedToPricingPlanOutput {
  /**
   * The billing period for which the pricing rule associations are listed.
   *
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pricing plan for which associations are listed.
   *
   * @public
   */
  PricingPlanArn?: string | undefined;

  /**
   * A list containing pricing rules that are associated with the requested pricing plan.
   *
   * @public
   */
  PricingRuleArns?: string[] | undefined;

  /**
   * The pagination token to be used on subsequent calls.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The possible Amazon Web Services Free Tier configurations.
 *
 * @public
 */
export interface UpdateFreeTierConfig {
  /**
   * Activate or deactivate application of Amazon Web Services Free Tier.
   *
   * @public
   */
  Activated: boolean | undefined;
}

/**
 * The set of tiering configurations for the pricing rule.
 *
 * @public
 */
export interface UpdateTieringInput {
  /**
   * The possible Amazon Web Services Free Tier configurations.
   *
   * @public
   */
  FreeTier?: UpdateFreeTierConfig | undefined;

  /**
   * The set of custom tiers for the pricing rule.
   *
   * @public
   */
  CustomTiers?: CustomTier[] | undefined;
}

/**
 * @public
 */
export interface UpdatePricingRuleInput {
  /**
   * The Amazon Resource Name (ARN) of the pricing rule to update.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The new name of the pricing rule. The name must be unique to each pricing rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new description for the pricing rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new pricing rule type.
   *
   * @public
   */
  Type?: PricingRuleType | undefined;

  /**
   * The new modifier to show pricing plan rates as a percentage. Your entry will be rounded to the nearest 2 decimal places.
   *
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * The set of tiering configurations for the pricing rule.
   *
   * @public
   */
  Tiering?: UpdateTieringInput | undefined;
}

/**
 * @public
 */
export interface UpdatePricingRuleOutput {
  /**
   * The Amazon Resource Name (ARN) of the successfully updated pricing rule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The new name of the pricing rule. The name must be unique to each pricing rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new description for the pricing rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The scope of pricing rule that indicates if it's globally applicable, or it's service-specific.
   *
   * @public
   */
  Scope?: PricingRuleScope | undefined;

  /**
   * The new pricing rule type.
   *
   * @public
   */
  Type?: PricingRuleType | undefined;

  /**
   * The new modifier to show pricing plan rates as a percentage.
   *
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * If the `Scope` attribute is set to `SERVICE`, the attribute indicates which service the `PricingRule` is applicable for.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The pricing plans count that this pricing rule is associated with.
   *
   * @public
   */
  AssociatedPricingPlanCount?: number | undefined;

  /**
   * The most recent time the pricing rule was modified.
   *
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace.
   *
   * @public
   */
  BillingEntity?: string | undefined;

  /**
   * The set of tiering configurations for the pricing rule.
   *
   * @public
   */
  Tiering?: UpdateTieringInput | undefined;

  /**
   * Usage type is the unit that each service uses to measure the usage of a specific type of resource.
   *
   * If the `Scope` attribute is set to `SKU`, this attribute indicates which usage type the `PricingRule` is modifying. For example, `USW2-BoxUsage:m2.2xlarge` describes an `M2 High Memory Double Extra Large` instance in the US West (Oregon) Region.
   *
   * @public
   */
  UsageType?: string | undefined;

  /**
   * Operation refers to the specific Amazon Web Services covered by this line item. This describes the specific usage of the line item.
   *
   * If the `Scope` attribute is set to `SKU`, this attribute indicates which operation the `PricingRule` is modifying. For example, a value of `RunInstances:0202` indicates the operation of running an Amazon EC2 instance.
   *
   * @public
   */
  Operation?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which to add tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to add to the resource as a list of key-value pairs.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource to which to delete tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to delete from the resource as a list of key-value pairs.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBillingTransferPreferenceInput {
  /**
   * A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the billing transfer whose preference you want to set.
   *
   * @public
   */
  ResponsibilityTransferArn: string | undefined;

  /**
   * The auto billing group creation preference to set for the billing transfer.
   *
   * @public
   */
  AutoBillingTransferBillingGroupCreation: AutoTransferBillingGroupCreationPreference | undefined;
}

/**
 * @public
 */
export interface UpdateBillingTransferPreferenceOutput {
  /**
   * The Amazon Resource Name (ARN) of the billing transfer that the preference applies to.
   *
   * @public
   */
  ResponsibilityTransferArn: string | undefined;

  /**
   * The updated auto billing group creation preference for the billing transfer.
   *
   * @public
   */
  AutoBillingTransferBillingGroupCreation: AutoTransferBillingGroupCreationPreference | undefined;

  /**
   * The most recent time when the preference was modified.
   *
   * @public
   */
  LastModifiedTime: number | undefined;
}
