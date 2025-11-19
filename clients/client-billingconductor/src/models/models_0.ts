// smithy-typescript generated code
import {
  AssociateResourceErrorReason,
  BillingGroupStatus,
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
} from "./enums";

/**
 * <p>A representation of a linked account.</p>
 * @public
 */
export interface AccountAssociationsListElement {
  /**
   * <p>The associating array of account IDs.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Billing Group Arn that the linked account is associated to.</p>
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account name.</p>
   * @public
   */
  AccountName?: string | undefined;

  /**
   * <p>The Amazon Web Services account email.</p>
   * @public
   */
  AccountEmail?: string | undefined;
}

/**
 * <p>The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.</p>
 * @public
 */
export interface AccountGrouping {
  /**
   * <p>The account IDs that make up the billing group. Account IDs must be a part of the consolidated billing family, and not associated with another billing group.</p>
   * @public
   */
  LinkedAccountIds: string[] | undefined;

  /**
   * <p>Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.</p>
   * @public
   */
  AutoAssociate?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing group that associates the array of account IDs. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p> The associating array of account IDs. </p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateAccountsOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing group that associates the array of account IDs. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The field's information of a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The message describing why the field failed validation.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface AssociatePricingRulesInput {
  /**
   * <p> The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p> The <code>PricingRuleArns</code> that are associated with the Pricing Plan. </p>
   * @public
   */
  PricingRuleArns: string[] | undefined;
}

/**
 * @public
 */
export interface AssociatePricingRulesOutput {
  /**
   * <p> The <code>PricingPlanArn</code> that the <code>PricingRuleArns</code> are associated with. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>A representation of a resource association error.</p>
 * @public
 */
export interface AssociateResourceError {
  /**
   * <p>The reason why the resource association failed.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>A static error code that's used to classify the type of failure.</p>
   * @public
   */
  Reason?: AssociateResourceErrorReason | undefined;
}

/**
 * <p>A resource association result for a percentage custom line item.</p>
 * @public
 */
export interface AssociateResourceResponseElement {
  /**
   * <p>The resource ARN that was associated to the custom line item.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An <code>AssociateResourceError</code> that will populate if the resource association fails.</p>
   * @public
   */
  Error?: AssociateResourceError | undefined;
}

/**
 * <p>The key-value pair that represents the attribute by which the <code>BillingGroupCostReportResults</code> are grouped. For example, if you want a service-level breakdown for Amazon Simple Storage Service (Amazon S3) of the billing group, the attribute will be a key-value pair of <code>"PRODUCT_NAME"</code> and <code>"S3"</code>.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The key in a key-value pair that describes the margin summary.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value in a key-value pair that describes the margin summary.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.</p>
 * @public
 */
export interface ComputationPreference {
  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan that's used to compute the Amazon Web Services charges for a billing group. </p>
   * @public
   */
  PricingPlanArn: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingGroupInput {
  /**
   * <p>A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p> The billing group name. The names must be unique. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family. </p>
   * @public
   */
  AccountGrouping: AccountGrouping | undefined;

  /**
   * <p> The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group. </p>
   * @public
   */
  ComputationPreference: ComputationPreference | undefined;

  /**
   * <p> The account ID that serves as the main account in a billing group. </p>
   * @public
   */
  PrimaryAccountId?: string | undefined;

  /**
   * <p>The description of the billing group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A map that contains tag keys and tag values that are attached to a billing group. This feature isn't available during the beta. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBillingGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created billing group. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillingGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that you're deleting.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillingGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted billing group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAccountsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that the array of account IDs will disassociate from. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The array of account IDs to disassociate. </p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateAccountsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that the array of account IDs is disassociated from. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The filter that specifies the billing groups and pricing plans to retrieve billing group information.</p>
 * @public
 */
export interface ListBillingGroupsFilter {
  /**
   * <p>The list of billing group Amazon Resource Names (ARNs) to retrieve information.</p>
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * <p>The pricing plan Amazon Resource Names (ARNs) to retrieve information.</p>
   * @public
   */
  PricingPlan?: string | undefined;

  /**
   * <p> A list of billing groups to retrieve their current status for a specific time range </p>
   * @public
   */
  Statuses?: BillingGroupStatus[] | undefined;

  /**
   * <p>Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.</p>
   * @public
   */
  AutoAssociate?: boolean | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsInput {
  /**
   * <p>The preferred billing period to get billing groups. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p>The maximum number of billing groups to retrieve. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that's used on subsequent calls to get billing groups. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A <code>ListBillingGroupsFilter</code> that specifies the billing group and pricing plan to retrieve billing group information. </p>
   * @public
   */
  Filters?: ListBillingGroupsFilter | undefined;
}

/**
 * <p>Specifies if the billing group has the following features enabled.</p>
 * @public
 */
export interface ListBillingGroupAccountGrouping {
  /**
   * <p>Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.</p>
   * @public
   */
  AutoAssociate?: boolean | undefined;
}

/**
 * <p>A representation of a billing group.</p>
 * @public
 */
export interface BillingGroupListElement {
  /**
   * <p>The name of the billing group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) that can be used to uniquely identify the billing group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the billing group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The account ID that serves as the main account in a billing group.</p>
   * @public
   */
  PrimaryAccountId?: string | undefined;

  /**
   * <p>The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.</p>
   * @public
   */
  ComputationPreference?: ComputationPreference | undefined;

  /**
   * <p>The number of accounts in the particular billing group.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The time when the billing group was created.</p>
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * <p>The most recent time when the billing group was modified.</p>
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * <p>The billing group status. Only one of the valid values can be used.</p>
   * @public
   */
  Status?: BillingGroupStatus | undefined;

  /**
   * <p>The reason why the billing group is in its current status.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Specifies if the billing group has automatic account association (<code>AutoAssociate</code>) enabled.</p>
   * @public
   */
  AccountGrouping?: ListBillingGroupAccountGrouping | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsOutput {
  /**
   * <p>A list of <code>BillingGroupListElement</code> retrieved. </p>
   * @public
   */
  BillingGroups?: BillingGroupListElement[] | undefined;

  /**
   * <p>The pagination token that's used on subsequent calls to get billing groups. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies if the billing group has the following features enabled.</p>
 * @public
 */
export interface UpdateBillingGroupAccountGrouping {
  /**
   * <p>Specifies if this billing group will automatically associate newly added Amazon Web Services accounts that join your consolidated billing family.</p>
   * @public
   */
  AutoAssociate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBillingGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group being updated. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the billing group. The names must be unique to each billing group. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the billing group. Only one of the valid values can be used. </p>
   * @public
   */
  Status?: BillingGroupStatus | undefined;

  /**
   * <p> The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group. </p>
   * @public
   */
  ComputationPreference?: ComputationPreference | undefined;

  /**
   * <p>A description of the billing group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies if the billing group has automatic account association (<code>AutoAssociate</code>) enabled.</p>
   * @public
   */
  AccountGrouping?: UpdateBillingGroupAccountGrouping | undefined;
}

/**
 * @public
 */
export interface UpdateBillingGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that was updated. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The name of the billing group. The names must be unique to each billing group. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> A description of the billing group. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The account ID that serves as the main account in a billing group. </p>
   * @public
   */
  PrimaryAccountId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan to compute Amazon Web Services charges for the billing group. </p>
   * @public
   */
  PricingPlanArn?: string | undefined;

  /**
   * <p> The number of accounts in the particular billing group. </p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p> The most recent time when the billing group was modified. </p>
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * <p> The status of the billing group. Only one of the valid values can be used. </p>
   * @public
   */
  Status?: BillingGroupStatus | undefined;

  /**
   * <p> The reason why the billing group is in its current status. </p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Specifies if the billing group has automatic account association (<code>AutoAssociate</code>) enabled.</p>
   * @public
   */
  AccountGrouping?: UpdateBillingGroupAccountGrouping | undefined;
}

/**
 * <p>The billing period range in which the custom line item request will be applied.</p>
 * @public
 */
export interface CustomLineItemBillingPeriodRange {
  /**
   * <p>The inclusive start billing period that defines a billing period range where a custom line is applied.</p>
   * @public
   */
  InclusiveStartBillingPeriod: string | undefined;

  /**
   * <p>The inclusive end billing period that defines a billing period range where a custom line is applied.</p>
   * @public
   */
  ExclusiveEndBillingPeriod?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourcesToCustomLineItemInput {
  /**
   * <p> A percentage custom line item ARN to associate the resources to. </p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p> A list containing the ARNs of the resources to be associated. </p>
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>The billing period range in which the custom line item request will be applied.</p>
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourcesToCustomLineItemOutput {
  /**
   * <p> A list of <code>AssociateResourceResponseElement</code> for each resource that's been associated to a percentage custom line item successfully. </p>
   * @public
   */
  SuccessfullyAssociatedResources?: AssociateResourceResponseElement[] | undefined;

  /**
   * <p> A list of <code>AssociateResourceResponseElement</code> for each resource that failed association to a percentage custom line item. </p>
   * @public
   */
  FailedAssociatedResources?: AssociateResourceResponseElement[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourcesFromCustomLineItemInput {
  /**
   * <p> A percentage custom line item ARN to disassociate the resources from. </p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p> A list containing the ARNs of resources to be disassociated. </p>
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>The billing period range in which the custom line item request will be applied.</p>
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * <p>A resource disassociation result for a percentage custom line item.</p>
 * @public
 */
export interface DisassociateResourceResponseElement {
  /**
   * <p>The resource ARN that was disassociated from the custom line item. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> An <code>AssociateResourceError</code> that's shown if the resource disassociation fails. </p>
   * @public
   */
  Error?: AssociateResourceError | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourcesFromCustomLineItemOutput {
  /**
   * <p> A list of <code>DisassociateResourceResponseElement</code> for each resource that's been disassociated from a percentage custom line item successfully. </p>
   * @public
   */
  SuccessfullyDisassociatedResources?: DisassociateResourceResponseElement[] | undefined;

  /**
   * <p> A list of <code>DisassociateResourceResponseElement</code> for each resource that failed disassociation from a percentage custom line item. </p>
   * @public
   */
  FailedDisassociatedResources?: DisassociateResourceResponseElement[] | undefined;
}

/**
 * <p>A representation of the charge details that are associated with a flat custom line item.</p>
 * @public
 */
export interface CustomLineItemFlatChargeDetails {
  /**
   * <p>The custom line item's fixed charge value in USD.</p>
   * @public
   */
  ChargeValue: number | undefined;
}

/**
 * <p>A representation of the line item filter for your custom line item. You can use line item filters to include or exclude specific resource values from the billing group's total cost. For example, if you create a custom line item and you want to filter out a value, such as Savings Plan discounts, you can update <code>LineItemFilter</code> to exclude it.</p>
 * @public
 */
export interface LineItemFilter {
  /**
   * <p>The attribute of the line item filter. This specifies what attribute that you can filter on.</p>
   * @public
   */
  Attribute: LineItemFilterAttributeName | undefined;

  /**
   * <p>The match criteria of the line item filter. This parameter specifies whether not to include the resource value from the billing group total cost.</p>
   * @public
   */
  MatchOption: MatchOption | undefined;

  /**
   * <p>The values of the line item filter. This specifies the values to filter on. Currently, you can only exclude Savings Plan discounts.</p>
   * @public
   */
  Values: LineItemFilterValue[] | undefined;
}

/**
 * <p>A representation of the charge details that are associated with a percentage custom line item.</p>
 * @public
 */
export interface CustomLineItemPercentageChargeDetails {
  /**
   * <p>The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value. </p>
   * @public
   */
  PercentageValue: number | undefined;

  /**
   * <p>A list of resource ARNs to associate to the percentage custom line item.</p>
   * @public
   */
  AssociatedValues?: string[] | undefined;
}

/**
 * <p>The charge details of a custom line item. It should contain only one of <code>Flat</code> or <code>Percentage</code>.</p>
 * @public
 */
export interface CustomLineItemChargeDetails {
  /**
   * <p>A <code>CustomLineItemFlatChargeDetails</code> that describes the charge details of a flat custom line item.</p>
   * @public
   */
  Flat?: CustomLineItemFlatChargeDetails | undefined;

  /**
   * <p>A <code>CustomLineItemPercentageChargeDetails</code> that describes the charge details of a percentage custom line item.</p>
   * @public
   */
  Percentage?: CustomLineItemPercentageChargeDetails | undefined;

  /**
   * <p>The type of the custom line item that indicates whether the charge is a fee or credit.</p>
   * @public
   */
  Type: CustomLineItemType | undefined;

  /**
   * <p>A representation of the line item filter.</p>
   * @public
   */
  LineItemFilters?: LineItemFilter[] | undefined;
}

/**
 * The presentation configuration of the custom line item
 * @public
 */
export interface PresentationObject {
  /**
   * This defines the service of where the custom line item is presented
   * @public
   */
  Service: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomLineItemInput {
  /**
   * <p>A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p> The name of the custom line item. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The description of the custom line item. This is shown on the Bills page in association with the charge value. </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to. </p>
   * @public
   */
  BillingGroupArn: string | undefined;

  /**
   * <p> A time range for which the custom line item is effective. </p>
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;

  /**
   * <p> A map that contains tag keys and tag values that are attached to a custom line item. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p> A <code>CustomLineItemChargeDetails</code> that describes the charge details for a custom line item. </p>
   * @public
   */
  ChargeDetails: CustomLineItemChargeDetails | undefined;

  /**
   * <p>The Amazon Web Services account in which this custom line item will be applied to.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The display settings of the custom line item
   * @public
   */
  ComputationRule?: ComputationRuleEnum | undefined;

  /**
   * The presentation configuration of the custom line item
   * @public
   */
  PresentationDetails?: PresentationObject | undefined;
}

/**
 * @public
 */
export interface CreateCustomLineItemOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created custom line item. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomLineItemInput {
  /**
   * <p> The ARN of the custom line item to be deleted. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The billing period range in which the custom line item request will be applied.</p>
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * @public
 */
export interface DeleteCustomLineItemOutput {
  /**
   * <p>The ARN of the deleted custom line item. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>A filter that specifies the custom line items and billing groups to retrieve FFLI information.</p>
 * @public
 */
export interface ListCustomLineItemsFilter {
  /**
   * <p>A list of custom line items to retrieve information.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The billing group Amazon Resource Names (ARNs) to retrieve information.</p>
   * @public
   */
  BillingGroups?: string[] | undefined;

  /**
   * <p>A list of custom line item ARNs to retrieve information.</p>
   * @public
   */
  Arns?: string[] | undefined;

  /**
   * <p>The Amazon Web Services accounts in which this custom line item will be applied to.</p>
   * @public
   */
  AccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemsInput {
  /**
   * <p> The preferred billing period to get custom line items (FFLIs). </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> The maximum number of billing groups to retrieve. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The pagination token that's used on subsequent calls to get custom line items (FFLIs). </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A <code>ListCustomLineItemsFilter</code> that specifies the custom line item names and/or billing group Amazon Resource Names (ARNs) to retrieve FFLI information.</p>
   * @public
   */
  Filters?: ListCustomLineItemsFilter | undefined;
}

/**
 * <p> A representation of the charge details that are associated with a flat custom line item. </p>
 * @public
 */
export interface ListCustomLineItemFlatChargeDetails {
  /**
   * <p> The custom line item's fixed charge value in USD. </p>
   * @public
   */
  ChargeValue: number | undefined;
}

/**
 * <p> A representation of the charge details that are associated with a percentage custom line item. </p>
 * @public
 */
export interface ListCustomLineItemPercentageChargeDetails {
  /**
   * <p> The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value. </p>
   * @public
   */
  PercentageValue: number | undefined;
}

/**
 * <p> A representation of the charge details of a custom line item. </p>
 * @public
 */
export interface ListCustomLineItemChargeDetails {
  /**
   * <p> A <code>ListCustomLineItemFlatChargeDetails</code> that describes the charge details of a flat custom line item. </p>
   * @public
   */
  Flat?: ListCustomLineItemFlatChargeDetails | undefined;

  /**
   * <p> A <code>ListCustomLineItemPercentageChargeDetails</code> that describes the charge details of a percentage custom line item. </p>
   * @public
   */
  Percentage?: ListCustomLineItemPercentageChargeDetails | undefined;

  /**
   * <p> The type of the custom line item that indicates whether the charge is a <code>fee</code> or <code>credit</code>. </p>
   * @public
   */
  Type: CustomLineItemType | undefined;

  /**
   * <p>A representation of the line item filter.</p>
   * @public
   */
  LineItemFilters?: LineItemFilter[] | undefined;
}

/**
 * <p>A representation of a custom line item.</p>
 * @public
 */
export interface CustomLineItemListElement {
  /**
   * <p>The Amazon Resource Names (ARNs) for custom line items.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The custom line item's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A <code>ListCustomLineItemChargeDetails</code> that describes the charge details of a custom line item.</p>
   * @public
   */
  ChargeDetails?: ListCustomLineItemChargeDetails | undefined;

  /**
   * <p>The custom line item's charge value currency. Only one of the valid values can be used.</p>
   * @public
   */
  CurrencyCode?: CurrencyCode | undefined;

  /**
   * <p>The custom line item's description. This is shown on the Bills page in association with the charge value.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The product code that's associated with the custom line item.</p>
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.</p>
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * <p>The time created.</p>
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * <p>The most recent time when the custom line item was modified.</p>
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * <p>The number of resources that are associated to the custom line item.</p>
   * @public
   */
  AssociationSize?: number | undefined;

  /**
   * <p>The Amazon Web Services account in which this custom line item will be applied to.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The display settings of the custom line item
   * @public
   */
  ComputationRule?: ComputationRuleEnum | undefined;

  /**
   * The presentation configuration of the custom line item
   * @public
   */
  PresentationDetails?: PresentationObject | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemsOutput {
  /**
   * <p> A list of <code>FreeFormLineItemListElements</code> received. </p>
   * @public
   */
  CustomLineItems?: CustomLineItemListElement[] | undefined;

  /**
   * <p> The pagination token that's used on subsequent calls to get custom line items (FFLIs). </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A billing period filter that specifies the custom line item versions to retrieve.</p>
 * @public
 */
export interface ListCustomLineItemVersionsBillingPeriodRangeFilter {
  /**
   * <p>The inclusive start billing period that defines a billing period range where a custom line item version is applied.</p>
   * @public
   */
  StartBillingPeriod?: string | undefined;

  /**
   * <p>The exclusive end billing period that defines a billing period range where a custom line item version is applied.</p>
   * @public
   */
  EndBillingPeriod?: string | undefined;
}

/**
 * <p>A filter that specifies the billing period range where the custom line item versions reside.</p>
 * @public
 */
export interface ListCustomLineItemVersionsFilter {
  /**
   * <p>The billing period range in which the custom line item version is applied.</p>
   * @public
   */
  BillingPeriodRange?: ListCustomLineItemVersionsBillingPeriodRangeFilter | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemVersionsInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the custom line item.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The maximum number of custom line item versions to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that's used on subsequent calls to retrieve custom line item versions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A <code>ListCustomLineItemVersionsFilter</code> that specifies the billing period range in which the custom line item versions are applied.</p>
   * @public
   */
  Filters?: ListCustomLineItemVersionsFilter | undefined;
}

/**
 * <p>A representation of a custom line item version.</p>
 * @public
 */
export interface CustomLineItemVersionListElement {
  /**
   * <p>The name of the custom line item.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> A representation of the charge details of a custom line item. </p>
   * @public
   */
  ChargeDetails?: ListCustomLineItemChargeDetails | undefined;

  /**
   * <p>The charge value currency of the custom line item.</p>
   * @public
   */
  CurrencyCode?: CurrencyCode | undefined;

  /**
   * <p>The description of the custom line item.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The product code that’s associated with the custom line item.</p>
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the billing group that the custom line item applies to.</p>
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * <p>The time when the custom line item version was created.</p>
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * <p>The most recent time that the custom line item version was modified.</p>
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * <p>The number of resources that are associated with the custom line item.</p>
   * @public
   */
  AssociationSize?: number | undefined;

  /**
   * <p>The start billing period of the custom line item version.</p>
   * @public
   */
  StartBillingPeriod?: string | undefined;

  /**
   * <p>The end billing period of the custom line item version.</p>
   * @public
   */
  EndBillingPeriod?: string | undefined;

  /**
   * <p> A list of custom line item Amazon Resource Names (ARNs) to retrieve information. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The inclusive start time. </p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The Amazon Web Services account in which this custom line item will be applied to.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The display settings of the custom line item
   * @public
   */
  ComputationRule?: ComputationRuleEnum | undefined;

  /**
   * The presentation configuration of the custom line item
   * @public
   */
  PresentationDetails?: PresentationObject | undefined;
}

/**
 * @public
 */
export interface ListCustomLineItemVersionsOutput {
  /**
   * <p>A list of <code>CustomLineItemVersionListElements</code> that are received.</p>
   * @public
   */
  CustomLineItemVersions?: CustomLineItemVersionListElement[] | undefined;

  /**
   * <p>The pagination token that's used on subsequent calls to retrieve custom line item versions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> A filter that specifies the type of resource associations that should be retrieved for a custom line item. </p>
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemFilter {
  /**
   * <p> The type of relationship between the custom line item and the associated resource. </p>
   * @public
   */
  Relationship?: CustomLineItemRelationship | undefined;
}

/**
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemInput {
  /**
   * <p> The billing period for which the resource associations will be listed. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> The ARN of the custom line item for which the resource associations will be listed. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p> (Optional) The maximum number of resource associations to be retrieved. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> (Optional) The pagination token that's returned by a previous request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> (Optional) A <code>ListResourcesAssociatedToCustomLineItemFilter</code> that can specify the types of resources that should be retrieved. </p>
   * @public
   */
  Filters?: ListResourcesAssociatedToCustomLineItemFilter | undefined;
}

/**
 * <p> A representation of a resource association for a custom line item. </p>
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemResponseElement {
  /**
   * <p> The ARN of the associated resource. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The type of relationship between the custom line item and the associated resource. </p>
   * @public
   */
  Relationship?: CustomLineItemRelationship | undefined;

  /**
   * <p>The end billing period of the associated resource.</p>
   * @public
   */
  EndBillingPeriod?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesAssociatedToCustomLineItemOutput {
  /**
   * <p> The custom line item ARN for which the resource associations are listed. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> A list of <code>ListResourcesAssociatedToCustomLineItemResponseElement</code> for each resource association retrieved. </p>
   * @public
   */
  AssociatedResources?: ListResourcesAssociatedToCustomLineItemResponseElement[] | undefined;

  /**
   * <p> The pagination token to be used in subsequent requests to retrieve additional results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> A representation of the new charge details that are associated with a flat custom line item. </p>
 * @public
 */
export interface UpdateCustomLineItemFlatChargeDetails {
  /**
   * <p> The custom line item's new fixed charge value in USD. </p>
   * @public
   */
  ChargeValue: number | undefined;
}

/**
 * <p> A representation of the new charge details that are associated with a percentage custom line item. </p>
 * @public
 */
export interface UpdateCustomLineItemPercentageChargeDetails {
  /**
   * <p> The custom line item's new percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value. </p>
   * @public
   */
  PercentageValue: number | undefined;
}

/**
 * <p> A representation of the new charge details of a custom line item. This should contain only one of <code>Flat</code> or <code>Percentage</code>. </p>
 * @public
 */
export interface UpdateCustomLineItemChargeDetails {
  /**
   * <p> An <code>UpdateCustomLineItemFlatChargeDetails</code> that describes the new charge details of a flat custom line item. </p>
   * @public
   */
  Flat?: UpdateCustomLineItemFlatChargeDetails | undefined;

  /**
   * <p> An <code>UpdateCustomLineItemPercentageChargeDetails</code> that describes the new charge details of a percentage custom line item. </p>
   * @public
   */
  Percentage?: UpdateCustomLineItemPercentageChargeDetails | undefined;

  /**
   * <p>A representation of the line item filter.</p>
   * @public
   */
  LineItemFilters?: LineItemFilter[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomLineItemInput {
  /**
   * <p> The ARN of the custom line item to be updated. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p> The new name for the custom line item. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The new line item description of the custom line item. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A <code>ListCustomLineItemChargeDetails</code> containing the new charge details for the custom line item. </p>
   * @public
   */
  ChargeDetails?: UpdateCustomLineItemChargeDetails | undefined;

  /**
   * <p>The billing period range in which the custom line item request will be applied.</p>
   * @public
   */
  BillingPeriodRange?: CustomLineItemBillingPeriodRange | undefined;
}

/**
 * @public
 */
export interface UpdateCustomLineItemOutput {
  /**
   * <p> The ARN of the successfully updated custom line item. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The ARN of the billing group that the custom line item is applied to. </p>
   * @public
   */
  BillingGroupArn?: string | undefined;

  /**
   * <p> The name of the successfully updated custom line item. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The description of the successfully updated custom line item. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A <code>ListCustomLineItemChargeDetails</code> containing the charge details of the successfully updated custom line item. </p>
   * @public
   */
  ChargeDetails?: ListCustomLineItemChargeDetails | undefined;

  /**
   * <p> The most recent time when the custom line item was modified. </p>
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * <p> The number of resources that are associated to the custom line item. </p>
   * @public
   */
  AssociationSize?: number | undefined;
}

/**
 * <p>A time range for which the margin summary is effective. The time range can be up to 12 months.</p>
 * @public
 */
export interface BillingPeriodRange {
  /**
   * <p>The inclusive start billing period that defines a billing period range for the margin summary.</p>
   * @public
   */
  InclusiveStartBillingPeriod: string | undefined;

  /**
   * <p>The exclusive end billing period that defines a billing period range for the margin summary. For example, if you choose a billing period that starts in October 2023 and ends in December 2023, the margin summary will only include data from October 2023 and November 2023.</p>
   * @public
   */
  ExclusiveEndBillingPeriod: string | undefined;
}

/**
 * @public
 */
export interface GetBillingGroupCostReportInput {
  /**
   * <p>The Amazon Resource Number (ARN) that uniquely identifies the billing group.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A time range for which the margin summary is effective. You can specify up to 12 months.</p>
   * @public
   */
  BillingPeriodRange?: BillingPeriodRange | undefined;

  /**
   * <p>A list of strings that specify the attributes that are used to break down costs in the margin summary reports for the billing group. For example, you can view your costs by the Amazon Web Services service name or the billing period.</p>
   * @public
   */
  GroupBy?: GroupByAttributeName[] | undefined;

  /**
   * <p>The maximum number of margin summary reports to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used on subsequent calls to get reports.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A paginated call to retrieve a list of summary reports of actual Amazon Web Services charges and the calculated Amazon Web Services charges, broken down by attributes.</p>
 * @public
 */
export interface BillingGroupCostReportResultElement {
  /**
   * <p>The Amazon Resource Number (ARN) that uniquely identifies the billing group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The actual Amazon Web Services charges for the billing group.</p>
   * @public
   */
  AWSCost?: string | undefined;

  /**
   * <p>The hypothetical Amazon Web Services charges based on the associated pricing plan of a billing group.</p>
   * @public
   */
  ProformaCost?: string | undefined;

  /**
   * <p>The billing group margin.</p>
   * @public
   */
  Margin?: string | undefined;

  /**
   * <p>The percentage of the billing group margin.</p>
   * @public
   */
  MarginPercentage?: string | undefined;

  /**
   * <p>The displayed currency.</p>
   * @public
   */
  Currency?: string | undefined;

  /**
   * <p>The list of key-value pairs that represent the attributes by which the <code>BillingGroupCostReportResults</code> are grouped. For example, if you want the Amazon S3 service-level breakdown of a billing group for November 2023, the attributes list will contain a key-value pair of <code>"PRODUCT_NAME"</code> and <code>"S3"</code> and a key-value pair of <code>"BILLING_PERIOD"</code> and <code>"Nov 2023"</code>.</p>
   * @public
   */
  Attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface GetBillingGroupCostReportOutput {
  /**
   * <p>The list of margin summary reports.</p>
   * @public
   */
  BillingGroupCostReportResults?: BillingGroupCostReportResultElement[] | undefined;

  /**
   * <p>The pagination token used on subsequent calls to get reports.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter on the account ID of the linked account, or any of the following:</p> <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn.</p>
 * @public
 */
export interface ListAccountAssociationsFilter {
  /**
   * <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn.</p>
   * @public
   */
  Association?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID to filter on.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p> The list of Amazon Web Services IDs to retrieve their associated billing group for a given time range. </p>
   * @public
   */
  AccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsInput {
  /**
   * <p> The preferred billing period to get account associations. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p>The filter on the account ID of the linked account, or any of the following:</p> <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that aren't associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided billing group Arn. </p>
   * @public
   */
  Filters?: ListAccountAssociationsFilter | undefined;

  /**
   * <p> The pagination token that's used on subsequent calls to retrieve accounts. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsOutput {
  /**
   * <p> The list of linked accounts in the payer account. </p>
   * @public
   */
  LinkedAccounts?: AccountAssociationsListElement[] | undefined;

  /**
   * <p> The pagination token that's used on subsequent calls to get accounts. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter used to retrieve specific <code>BillingGroupCostReportElements</code>.</p>
 * @public
 */
export interface ListBillingGroupCostReportsFilter {
  /**
   * <p>The list of Amazon Resource Names (ARNs) used to filter billing groups to retrieve reports. </p>
   * @public
   */
  BillingGroupArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupCostReportsInput {
  /**
   * <p>The preferred billing period for your report. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p>The maximum number of reports to retrieve. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that's used on subsequent calls to get reports. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A <code>ListBillingGroupCostReportsFilter</code> to specify billing groups to retrieve reports from. </p>
   * @public
   */
  Filters?: ListBillingGroupCostReportsFilter | undefined;
}

/**
 * <p>A summary report of actual Amazon Web Services charges and calculated Amazon Web Services charges, based on the associated pricing plan of a billing group.</p>
 * @public
 */
export interface BillingGroupCostReportElement {
  /**
   * <p>The Amazon Resource Name (ARN) of a billing group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The actual Amazon Web Services charges for the billing group.</p>
   * @public
   */
  AWSCost?: string | undefined;

  /**
   * <p>The hypothetical Amazon Web Services charges based on the associated pricing plan of a billing group.</p>
   * @public
   */
  ProformaCost?: string | undefined;

  /**
   * <p>The billing group margin.</p>
   * @public
   */
  Margin?: string | undefined;

  /**
   * <p>The percentage of billing group margin.</p>
   * @public
   */
  MarginPercentage?: string | undefined;

  /**
   * <p>The displayed currency.</p>
   * @public
   */
  Currency?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupCostReportsOutput {
  /**
   * <p>A list of <code>BillingGroupCostReportElement</code> retrieved. </p>
   * @public
   */
  BillingGroupCostReports?: BillingGroupCostReportElement[] | undefined;

  /**
   * <p>The pagination token that's used on subsequent calls to get reports. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the resource to list the tags. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> The tags for the resource. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePricingPlanInput {
  /**
   * <p>A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the pricing plan. The names must be unique to each pricing plan. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the pricing plan. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A list of Amazon Resource Names (ARNs) that define the pricing plan parameters. </p>
   * @public
   */
  PricingRuleArns?: string[] | undefined;

  /**
   * <p> A map that contains tag keys and tag values that are attached to a pricing plan. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePricingPlanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created pricing plan.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingPlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the pricing plan that you're deleting. </p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingPlanOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the deleted pricing plan. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePricingRulesInput {
  /**
   * <p> The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p> A list containing the Amazon Resource Name (ARN) of the pricing rules that will be disassociated. </p>
   * @public
   */
  PricingRuleArns: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePricingRulesOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan that the pricing rules successfully disassociated from. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The filter that specifies the Amazon Resource Names (ARNs) of pricing plans, to retrieve pricing plan information.</p>
 * @public
 */
export interface ListPricingPlansFilter {
  /**
   * <p>A list of pricing plan Amazon Resource Names (ARNs) to retrieve information.</p>
   * @public
   */
  Arns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansInput {
  /**
   * <p>The preferred billing period to get pricing plan. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p>A <code>ListPricingPlansFilter</code> that specifies the Amazon Resource Name (ARNs) of pricing plans to retrieve pricing plans information.</p>
   * @public
   */
  Filters?: ListPricingPlansFilter | undefined;

  /**
   * <p>The maximum number of pricing plans to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that's used on subsequent call to get pricing plans. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A representation of a pricing plan.</p>
 * @public
 */
export interface PricingPlanListElement {
  /**
   * <p>The name of a pricing plan.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The pricing plan Amazon Resource Names (ARN). This can be used to uniquely identify a pricing plan.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The pricing plan description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The pricing rules count that's currently associated with this pricing plan list element.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The time when the pricing plan was created.</p>
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * <p>The most recent time when the pricing plan was modified.</p>
   * @public
   */
  LastModifiedTime?: number | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansOutput {
  /**
   * <p> The billing period for which the described pricing plans are applicable. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p>A list of <code>PricingPlanListElement</code> retrieved. </p>
   * @public
   */
  PricingPlans?: PricingPlanListElement[] | undefined;

  /**
   * <p>The pagination token that's used on subsequent calls to get pricing plans. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansAssociatedWithPricingRuleInput {
  /**
   * <p> The pricing plan billing period for which associations will be listed. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> The pricing rule Amazon Resource Name (ARN) for which associations will be listed. </p>
   * @public
   */
  PricingRuleArn: string | undefined;

  /**
   * <p> The optional maximum number of pricing rule associations to retrieve. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The optional pagination token returned by a previous call. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingPlansAssociatedWithPricingRuleOutput {
  /**
   * <p> The pricing plan billing period for which associations will be listed. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> The pricing rule Amazon Resource Name (ARN) for which associations will be listed. </p>
   * @public
   */
  PricingRuleArn?: string | undefined;

  /**
   * <p> The list containing pricing plans that are associated with the requested pricing rule. </p>
   * @public
   */
  PricingPlanArns?: string[] | undefined;

  /**
   * <p> The pagination token to be used on subsequent calls. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the pricing plan that you're updating. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the pricing plan. The name must be unique to each pricing plan. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the pricing plan. </p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePricingPlanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pricing plan. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The name of the pricing plan. The name must be unique to each pricing plan. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The new description for the pricing rule. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The pricing rules count that's currently associated with this pricing plan list. </p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p> The most recent time when the pricing plan was modified. </p>
   * @public
   */
  LastModifiedTime?: number | undefined;
}

/**
 * <p> The possible Amazon Web Services Free Tier configurations. </p>
 * @public
 */
export interface CreateFreeTierConfig {
  /**
   * <p> Activate or deactivate Amazon Web Services Free Tier. </p>
   * @public
   */
  Activated: boolean | undefined;
}

/**
 * <p> The set of tiering configurations for the pricing rule. </p>
 * @public
 */
export interface CreateTieringInput {
  /**
   * <p> The possible Amazon Web Services Free Tier configurations. </p>
   * @public
   */
  FreeTier: CreateFreeTierConfig | undefined;
}

/**
 * @public
 */
export interface CreatePricingRuleInput {
  /**
   * <p>A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p> The pricing rule name. The names must be unique to each pricing rule. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The pricing rule description. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The scope of pricing rule that indicates if it's globally applicable, or it's service-specific. </p>
   * @public
   */
  Scope: PricingRuleScope | undefined;

  /**
   * <p> The type of pricing rule. </p>
   * @public
   */
  Type: PricingRuleType | undefined;

  /**
   * <p>A percentage modifier that's applied on the public pricing rates. Your entry will be rounded to the nearest 2 decimal places.</p>
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * <p> If the <code>Scope</code> attribute is set to <code>SERVICE</code> or <code>SKU</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for. </p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p> A map that contains tag keys and tag values that are attached to a pricing rule. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p> The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace. </p>
   * @public
   */
  BillingEntity?: string | undefined;

  /**
   * <p> The set of tiering configurations for the pricing rule. </p>
   * @public
   */
  Tiering?: CreateTieringInput | undefined;

  /**
   * <p> Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p> <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an<code> M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region. </p>
   * @public
   */
  UsageType?: string | undefined;

  /**
   * <p> Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.</p> <p> If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
   * @public
   */
  Operation?: string | undefined;
}

/**
 * @public
 */
export interface CreatePricingRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created pricing rule. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingRuleInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the pricing rule that you are deleting. </p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePricingRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the deleted pricing rule. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p> The filter that specifies criteria that the pricing rules returned by the <code>ListPricingRules</code> API will adhere to.</p>
 * @public
 */
export interface ListPricingRulesFilter {
  /**
   * <p>A list containing the pricing rule Amazon Resource Names (ARNs) to include in the API response.</p>
   * @public
   */
  Arns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesInput {
  /**
   * <p> The preferred billing period to get the pricing plan. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> A <code>DescribePricingRuleFilter</code> that specifies the Amazon Resource Name (ARNs) of pricing rules to retrieve pricing rules information. </p>
   * @public
   */
  Filters?: ListPricingRulesFilter | undefined;

  /**
   * <p> The maximum number of pricing rules to retrieve. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The pagination token that's used on subsequent call to get pricing rules. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> The possible Amazon Web Services Free Tier configurations. </p>
 * @public
 */
export interface FreeTierConfig {
  /**
   * <p> Activate or deactivate Amazon Web Services Free Tier application. </p>
   * @public
   */
  Activated: boolean | undefined;
}

/**
 * <p> The set of tiering configurations for the pricing rule. </p>
 * @public
 */
export interface Tiering {
  /**
   * <p> The possible Amazon Web Services Free Tier configurations. </p>
   * @public
   */
  FreeTier: FreeTierConfig | undefined;
}

/**
 * <p>A representation of a pricing rule.</p>
 * @public
 */
export interface PricingRuleListElement {
  /**
   * <p>The name of a pricing rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used to uniquely identify a pricing rule.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The pricing rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The scope of pricing rule that indicates if it is globally applicable, or if it is service-specific.</p>
   * @public
   */
  Scope?: PricingRuleScope | undefined;

  /**
   * <p>The type of pricing rule.</p>
   * @public
   */
  Type?: PricingRuleType | undefined;

  /**
   * <p>A percentage modifier applied on the public pricing rates.</p>
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * <p>If the <code>Scope</code> attribute is <code>SERVICE</code>, this attribute indicates which service the <code>PricingRule</code> is applicable for.</p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p>The pricing plans count that this pricing rule is associated with.</p>
   * @public
   */
  AssociatedPricingPlanCount?: number | undefined;

  /**
   * <p>The time when the pricing rule was created.</p>
   * @public
   */
  CreationTime?: number | undefined;

  /**
   * <p> The most recent time when the pricing rule was modified.</p>
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * <p> The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace. </p>
   * @public
   */
  BillingEntity?: string | undefined;

  /**
   * <p> The set of tiering configurations for the pricing rule. </p>
   * @public
   */
  Tiering?: Tiering | undefined;

  /**
   * <p> Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p> <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an<code> M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region. </p>
   * @public
   */
  UsageType?: string | undefined;

  /**
   * <p> Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item.</p> <p> If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
   * @public
   */
  Operation?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesOutput {
  /**
   * <p> The billing period for which the described pricing rules are applicable. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> A list containing the described pricing rules. </p>
   * @public
   */
  PricingRules?: PricingRuleListElement[] | undefined;

  /**
   * <p> The pagination token that's used on subsequent calls to get pricing rules. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesAssociatedToPricingPlanInput {
  /**
   * <p> The billing period for which the pricing rule associations are to be listed. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan for which associations are to be listed.</p>
   * @public
   */
  PricingPlanArn: string | undefined;

  /**
   * <p>The optional maximum number of pricing rule associations to retrieve.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The optional pagination token returned by a previous call. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPricingRulesAssociatedToPricingPlanOutput {
  /**
   * <p> The billing period for which the pricing rule associations are listed. </p>
   * @public
   */
  BillingPeriod?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the pricing plan for which associations are listed.</p>
   * @public
   */
  PricingPlanArn?: string | undefined;

  /**
   * <p> A list containing pricing rules that are associated with the requested pricing plan. </p>
   * @public
   */
  PricingRuleArns?: string[] | undefined;

  /**
   * <p> The pagination token to be used on subsequent calls. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> The possible Amazon Web Services Free Tier configurations. </p>
 * @public
 */
export interface UpdateFreeTierConfig {
  /**
   * <p> Activate or deactivate application of Amazon Web Services Free Tier. </p>
   * @public
   */
  Activated: boolean | undefined;
}

/**
 * <p> The set of tiering configurations for the pricing rule. </p>
 * @public
 */
export interface UpdateTieringInput {
  /**
   * <p> The possible Amazon Web Services Free Tier configurations. </p>
   * @public
   */
  FreeTier: UpdateFreeTierConfig | undefined;
}

/**
 * @public
 */
export interface UpdatePricingRuleInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the pricing rule to update. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p> The new name of the pricing rule. The name must be unique to each pricing rule. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The new description for the pricing rule. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The new pricing rule type. </p>
   * @public
   */
  Type?: PricingRuleType | undefined;

  /**
   * <p> The new modifier to show pricing plan rates as a percentage. Your entry will be rounded to the nearest 2 decimal places. </p>
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * <p> The set of tiering configurations for the pricing rule. </p>
   * @public
   */
  Tiering?: UpdateTieringInput | undefined;
}

/**
 * @public
 */
export interface UpdatePricingRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the successfully updated pricing rule. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The new name of the pricing rule. The name must be unique to each pricing rule. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The new description for the pricing rule. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The scope of pricing rule that indicates if it's globally applicable, or it's service-specific. </p>
   * @public
   */
  Scope?: PricingRuleScope | undefined;

  /**
   * <p> The new pricing rule type. </p>
   * @public
   */
  Type?: PricingRuleType | undefined;

  /**
   * <p> The new modifier to show pricing plan rates as a percentage. </p>
   * @public
   */
  ModifierPercentage?: number | undefined;

  /**
   * <p> If the <code>Scope</code> attribute is set to <code>SERVICE</code>, the attribute indicates which service the <code>PricingRule</code> is applicable for. </p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p> The pricing plans count that this pricing rule is associated with. </p>
   * @public
   */
  AssociatedPricingPlanCount?: number | undefined;

  /**
   * <p> The most recent time the pricing rule was modified. </p>
   * @public
   */
  LastModifiedTime?: number | undefined;

  /**
   * <p> The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace. </p>
   * @public
   */
  BillingEntity?: string | undefined;

  /**
   * <p> The set of tiering configurations for the pricing rule. </p>
   * @public
   */
  Tiering?: UpdateTieringInput | undefined;

  /**
   * <p>Usage type is the unit that each service uses to measure the usage of a specific type of resource.</p> <p>If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which usage type the <code>PricingRule</code> is modifying. For example, <code>USW2-BoxUsage:m2.2xlarge</code> describes an <code>M2 High Memory Double Extra Large</code> instance in the US West (Oregon) Region. </p>
   * @public
   */
  UsageType?: string | undefined;

  /**
   * <p>Operation refers to the specific Amazon Web Services covered by this line item. This describes the specific usage of the line item.</p> <p> If the <code>Scope</code> attribute is set to <code>SKU</code>, this attribute indicates which operation the <code>PricingRule</code> is modifying. For example, a value of <code>RunInstances:0202</code> indicates the operation of running an Amazon EC2 instance.</p>
   * @public
   */
  Operation?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource to which to add tags. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> The tags to add to the resource as a list of key-value pairs. </p>
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
   * <p> The Amazon Resource Name (ARN) of the resource to which to delete tags. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> The tags to delete from the resource as a list of key-value pairs. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
