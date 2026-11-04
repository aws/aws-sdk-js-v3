// smithy-typescript generated code
import type {
  AwsClosedLostReason,
  AwsFundingUsed,
  AwsMemberBusinessTitle,
  AwsOpportunityStage,
  AwsPartition,
  Channel,
  ClosedLostReason,
  CompetitorName,
  CountryCode,
  CurrencyCode,
  DeliveryModel,
  EngagementContextType,
  EngagementInvitationPayloadType,
  EngagementScore,
  EngagementSortName,
  ExpectedContractDurationTerm,
  Industry,
  InvitationStatus,
  InvolvementTypeChangeReason,
  ListTasksSortName,
  MarketingSource,
  NationalSecurity,
  OpportunityEngagementInvitationSortName,
  OpportunityOrigin,
  OpportunitySortName,
  OpportunityType,
  ParticipantType,
  PaymentFrequency,
  PrimaryNeedFromAws,
  ProspectingFromEngagementTaskSortName,
  ProspectingTaskStatus,
  ReasonCode,
  ReceiverResponsibility,
  RelatedEntityType,
  ResourceSnapshotJobStatus,
  ResourceType,
  RevenueModel,
  ReviewStatus,
  SalesActivity,
  SalesInvolvementType,
  SolutionSortName,
  SolutionStatus,
  SortBy,
  SortOrder,
  Stage,
  TaskStatus,
  ValidationExceptionErrorCode,
  Visibility,
} from "./enums";

/**
 * @public
 */
export interface AcceptEngagementInvitationRequest {
  /**
   * The `CatalogType` parameter specifies the catalog associated with the engagement invitation. Accepted values are `AWS` and `Sandbox`, which determine the environment in which the engagement invitation is managed.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The `Identifier` parameter in the `AcceptEngagementInvitationRequest` specifies the unique identifier of the `EngagementInvitation` to be accepted. Providing the correct identifier ensures that the intended invitation is accepted.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Indicates an invalid value for a field.
 *
 * - *REQUIRED_FIELD_MISSING:* The request is missing a required field.
 *
 *   Fix: Verify your request payload includes all required fields.
 * - *INVALID_ENUM_VALUE:* The enum field value isn't an accepted values.
 *
 *   Fix: Check the documentation for the list of valid enum values, and update your request with a valid value.
 * - *INVALID_STRING_FORMAT:* The string format is invalid.
 *
 *   Fix: Confirm that the string is in the expected format (For example: email address, date).
 * - *INVALID_VALUE:* The value isn't valid.
 *
 *   Fix: Confirm that the value meets the expected criteria and is within the allowable range or set.
 * - *TOO_MANY_VALUES:* There are too many values in a field that expects fewer entries.
 *
 *   Fix: Reduce the number of values to match the expected limit.
 * - *NOT_ENOUGH_VALUES:* There are not enough values in a field that expects more entries.
 *
 *   Fix: Increase the number of values to match the expected threshold.
 * - *ACTION_NOT_PERMITTED:* The action isn't permitted due to current state or permissions.
 *
 *   Fix: Verify that the action is appropriate for the current state, and that you have the necessary permissions to perform it.
 * - *DUPLICATE_KEY_VALUE:* The value in a field duplicates a value that must be unique.
 *
 *   Fix: Verify that the value is unique and doesn't duplicate an existing value in the system.
 *
 * @public
 */
export interface ValidationExceptionError {
  /**
   * Specifies the field name with the invalid value.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * Specifies the detailed error message for the invalid field value.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Specifies the error code for the invalid field value.
   *
   * @public
   */
  Code: ValidationExceptionErrorCode | undefined;
}

/**
 * Specifies the end `Customer`'s address details associated with the `Opportunity`.
 *
 * @public
 */
export interface Address {
  /**
   * Specifies the end `Customer`'s city associated with the `Opportunity`.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * Specifies the end `Customer`'s postal code associated with the `Opportunity`.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * Specifies the end `Customer`'s state or region associated with the `Opportunity`.
   *
   * Valid values: `Alabama | Alaska | American Samoa | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | Dist. of Columbia | Federated States of Micronesia | Florida | Georgia | Guam | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Marshall Islands | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire | New Jersey | New Mexico | New York | North Carolina | North Dakota | Northern Mariana Islands | Ohio | Oklahoma | Oregon | Palau | Pennsylvania | Puerto Rico | Rhode Island | South Carolina | South Dakota | Tennessee | Texas | Utah | Vermont | Virginia | Virgin Islands | Washington | West Virginia | Wisconsin | Wyoming | APO/AE | AFO/FPO | FPO, AP`
   *
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * Specifies the end `Customer`'s country associated with the `Opportunity`.
   *
   * @public
   */
  CountryCode?: CountryCode | undefined;

  /**
   * Specifies the end `Customer`'s street address associated with the `Opportunity`.
   *
   * @public
   */
  StreetAddress?: string | undefined;
}

/**
 * Specifies the `Customer`'s account details associated with the `Opportunity`.
 *
 * @public
 */
export interface Account {
  /**
   * Specifies the industry the end `Customer` belongs to that's associated with the `Opportunity`. It refers to the category or sector where the customer's business operates. This is a required field.
   *
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * Specifies the end `Customer`'s industry associated with the `Opportunity`, when the selected value in the `Industry` field is `Other`.
   *
   * @public
   */
  OtherIndustry?: string | undefined;

  /**
   * Specifies the end `Customer`'s company name associated with the `Opportunity`.
   *
   * @public
   */
  CompanyName: string | undefined;

  /**
   * Specifies the end customer's company website URL associated with the `Opportunity`. This value is crucial to map the customer within the Amazon Web Services CRM system. This field is required in all cases except when the opportunity is related to national security.
   *
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * Specifies the `Customer` Amazon Web Services account ID associated with the `Opportunity`.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * Specifies the end `Customer`'s address details associated with the `Opportunity`.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * Indicates the `Customer` DUNS number, if available.
   *
   * @public
   */
  Duns?: string | undefined;
}

/**
 * Contains the account details of the partner who received the Engagement Invitation, including the AWS account ID and company name.
 *
 * @public
 */
export interface AccountReceiver {
  /**
   * Represents the alias of the partner account receiving the Engagement Invitation, making it easier to identify and track the recipient in reports or logs.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * Indicates the AWS account ID of the partner who received the Engagement Invitation. This is a unique identifier for managing engagements with specific AWS accounts.
   *
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * An object that contains an `Address` object's subset of fields.
 *
 * @public
 */
export interface AddressSummary {
  /**
   * Specifies the end `Customer`'s city associated with the `Opportunity`.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * Specifies the end `Customer`'s postal code associated with the `Opportunity`.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * Specifies the end `Customer`'s state or region associated with the `Opportunity`.
   *
   * Valid values: `Alabama | Alaska | American Samoa | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | Dist. of Columbia | Federated States of Micronesia | Florida | Georgia | Guam | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Marshall Islands | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire | New Jersey | New Mexico | New York | North Carolina | North Dakota | Northern Mariana Islands | Ohio | Oklahoma | Oregon | Palau | Pennsylvania | Puerto Rico | Rhode Island | South Carolina | South Dakota | Tennessee | Texas | Utah | Vermont | Virginia | Virgin Islands | Washington | West Virginia | Wisconsin | Wyoming | APO/AE | AFO/FPO | FPO, AP`
   *
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * Specifies the end `Customer`'s country associated with the `Opportunity`.
   *
   * @public
   */
  CountryCode?: CountryCode | undefined;
}

/**
 * An object that contains an `Account`'s subset of fields.
 *
 * @public
 */
export interface AccountSummary {
  /**
   * Specifies which industry the end `Customer` belongs to associated with the `Opportunity`. It refers to the category or sector that the customer's business operates in.
   *
   * To submit a value outside the picklist, use `Other`.
   *
   * Conditionally mandatory if `Other` is selected for Industry Vertical in LOVs.
   *
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * Specifies the end `Customer`'s industry associated with the `Opportunity`, when the selected value in the `Industry` field is `Other`. This field is relevant when the customer's industry doesn't fall under the predefined picklist values and requires a custom description.
   *
   * @public
   */
  OtherIndustry?: string | undefined;

  /**
   * Specifies the end `Customer`'s company name associated with the `Opportunity`.
   *
   * @public
   */
  CompanyName: string | undefined;

  /**
   * Specifies the end customer's company website URL associated with the `Opportunity`. This value is crucial to map the customer within the Amazon Web Services CRM system.
   *
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * Specifies the end `Customer`'s address details associated with the `Opportunity`.
   *
   * @public
   */
  Address?: AddressSummary | undefined;
}

/**
 * Represents the contact details of the individual assigned to manage the opportunity within the partner organization. This helps to ensure that there is a point of contact for the opportunity's progress.
 *
 * @public
 */
export interface AssigneeContact {
  /**
   * Provides the email address of the assignee. This email is used for communications and notifications related to the opportunity.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * Specifies the first name of the assignee managing the opportunity. The system automatically retrieves this value from the user profile by referencing the associated email address.
   *
   * @public
   */
  FirstName: string | undefined;

  /**
   * Specifies the last name of the assignee managing the opportunity. The system automatically retrieves this value from the user profile by referencing the associated email address.
   *
   * @public
   */
  LastName: string | undefined;

  /**
   * Specifies the contact phone number of the assignee responsible for the opportunity or engagement. This field enables direct communication for time-sensitive matters and facilitates coordination between AWS and partner teams.
   *
   * @public
   */
  Phone?: string | undefined;

  /**
   * Specifies the business title of the assignee managing the opportunity. This helps clarify the individual's role and responsibilities within the organization. Use the value `PartnerAccountManager` to update details of the opportunity owner.
   *
   * @public
   */
  BusinessTitle: string | undefined;
}

/**
 * @public
 */
export interface AssignOpportunityRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunity is assigned in. Use `AWS` to assign real opportunities in the Amazon Web Services catalog, and `Sandbox` for testing in secure, isolated environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Requires the `Opportunity`'s unique identifier when you want to assign it to another user. Provide the correct identifier so the intended opportunity is reassigned.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Specifies the user or team member responsible for managing the assigned opportunity. This field identifies the *Assignee* based on the partner's internal team structure. Ensure that the email address is associated with a registered user in your Partner Central account.
   *
   * @public
   */
  Assignee: AssigneeContact | undefined;
}

/**
 * @public
 */
export interface AssociateOpportunityRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunity association is made in. Use `AWS` to associate opportunities in the Amazon Web Services catalog, and `Sandbox` for testing in secure, isolated environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Requires the `Opportunity`'s unique identifier when you want to associate it with a related entity. Provide the correct identifier so the intended opportunity is updated with the association.
   *
   * @public
   */
  OpportunityIdentifier: string | undefined;

  /**
   * Specifies the entity type that you're associating with the `Opportunity`. This helps to categorize and properly process the association.
   *
   * @public
   */
  RelatedEntityType: RelatedEntityType | undefined;

  /**
   * Requires the related entity's unique identifier when you want to associate it with the `Opportunity`. For Amazon Web Services Marketplace entities, provide the Amazon Resource Name (ARN). Use the [Amazon Web Services Marketplace API](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html) to obtain the ARN.
   *
   * @public
   */
  RelatedEntityIdentifier: string | undefined;
}

/**
 * An object that contains a `Customer Partner`'s contact details.
 *
 * @public
 */
export interface Contact {
  /**
   * The contact's email address associated with the `Opportunity`.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The contact's first name associated with the `Opportunity`.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The contact's last name associated with the `Opportunity`.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The partner contact's title (job title or role) associated with the `Opportunity`. `BusinessTitle` supports either `PartnerAccountManager` or `OpportunityOwner`.
   *
   * @public
   */
  BusinessTitle?: string | undefined;

  /**
   * The contact's phone number associated with the `Opportunity`.
   *
   * @public
   */
  Phone?: string | undefined;
}

/**
 * Represents the customer associated with the AWS opportunity. This field captures key details about the customer that are necessary for managing the opportunity.
 *
 * @public
 */
export interface AwsOpportunityCustomer {
  /**
   * Provides a list of customer contacts involved in the opportunity. These contacts may include decision makers, influencers, and other stakeholders within the customer's organization.
   *
   * @public
   */
  Contacts?: Contact[] | undefined;
}

/**
 * Specific optimization strategies partners can implement to reduce costs.
 *
 * @public
 */
export interface AwsProductOptimization {
  /**
   * Human-readable explanation of the optimization strategy.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Quantified cost savings achievable by implementing this optimization.
   *
   * @public
   */
  SavingsAmount: string | undefined;
}

/**
 * List of AWS services with program eligibility indicators (MAP, modernization pathways), cost estimates, and optimization recommendations.
 *
 * @public
 */
export interface AwsProductDetails {
  /**
   * AWS Partner Central product identifier used for opportunity association.
   *
   * @public
   */
  ProductCode: string | undefined;

  /**
   * Pricing Calculator service code.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * List of program and pathway categories this product is eligible for.
   *
   * @public
   */
  Categories: string[] | undefined;

  /**
   * Baseline service cost before optimizations.
   *
   * @public
   */
  Amount?: string | undefined;

  /**
   * Service cost after applying optimizations.
   *
   * @public
   */
  OptimizedAmount?: string | undefined;

  /**
   * Service-specific cost reduction through optimizations.
   *
   * @public
   */
  PotentialSavingsAmount?: string | undefined;

  /**
   * List of specific optimization recommendations for this product.
   *
   * @public
   */
  Optimizations: AwsProductOptimization[] | undefined;
}

/**
 * Comprehensive spend analysis for a single source (AWS or Partner) including total amounts, optimization savings, program category breakdowns, and detailed product-level insights.
 *
 * @public
 */
export interface AwsProductInsights {
  /**
   * ISO 4217 currency code. Supported values are `USD` and `EUR`. Returns `EUR` when the opportunity is in the `aws-eusc` (AWS European Sovereign Cloud) partition.
   *
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;

  /**
   * Time period for spend amounts.
   *
   * @public
   */
  Frequency: PaymentFrequency | undefined;

  /**
   * Total estimated spend for this source before optimizations.
   *
   * @public
   */
  TotalAmount?: string | undefined;

  /**
   * Total estimated spend after applying recommended optimizations.
   *
   * @public
   */
  TotalOptimizedAmount?: string | undefined;

  /**
   * Quantified savings achievable through implementing optimizations.
   *
   * @public
   */
  TotalPotentialSavingsAmount?: string | undefined;

  /**
   * Spend amounts mapped to AWS programs and modernization pathways.
   *
   * @public
   */
  TotalAmountByCategory: Record<string, string> | undefined;

  /**
   * Product-level details including costs and optimization recommendations.
   *
   * @public
   */
  AwsProducts: AwsProductDetails[] | undefined;
}

/**
 * Source-separated spend insights that provide independent analysis for AWS recommendations and partner estimates.
 *
 * @public
 */
export interface AwsProductsSpendInsightsBySource {
  /**
   * Partner-sourced insights derived from Pricing Calculator URLs.
   *
   * @public
   */
  Partner?: AwsProductInsights | undefined;

  /**
   * AI-generated insights including recommended products from AWS.
   *
   * @public
   */
  AWS?: AwsProductInsights | undefined;
}

/**
 * Opportunity quality score and trend.
 *
 * @public
 */
export interface OpportunityQuality {
  /**
   * Deal quality score based on opportunity content completeness and sales methodology criteria. Values range from 0 to 100.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * Direction of score change since last scoring iteration. Known values: `Improving`, `Declining`, `No Change`.
   *
   * @public
   */
  Trend?: string | undefined;
}

/**
 * A recommendation from an agent-driven source.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The recommendation source type. Known values: `OpportunityQuality`, `SolutionRecommendation`, `SpecialistRecommendation`.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * Human-readable recommendation text from this source.
   *
   * @public
   */
  Details: string | undefined;

  /**
   * Source-specific metadata as key-value pairs.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Contains insights provided by AWS for the opportunity, offering recommendations and analysis that can help the partner optimize their engagement and strategy.
 *
 * @public
 */
export interface AwsOpportunityInsights {
  /**
   * Provides recommendations from AWS on the next best actions to take in order to move the opportunity forward and increase the likelihood of success.
   *
   * @public
   */
  NextBestActions?: string | undefined;

  /**
   * Represents a score assigned by AWS to indicate the level of engagement and potential success for the opportunity. This score helps partners prioritize their efforts.
   *
   * @public
   */
  EngagementScore?: EngagementScore | undefined;

  /**
   * Source-separated spend insights that provide independent analysis for AWS recommendations and partner estimates.
   *
   * @public
   */
  AwsProductsSpendInsightsBySource?: AwsProductsSpendInsightsBySource | undefined;

  /**
   * Opportunity quality assessment. Null if not yet scored.
   *
   * @public
   */
  OpportunityQuality?: OpportunityQuality | undefined;

  /**
   * List of recommendations from various agent-driven sources.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * Tracks the history of next steps associated with the opportunity. This field captures the actions planned for the future and their timeline.
 *
 * @public
 */
export interface ProfileNextStepsHistory {
  /**
   * Represents the details of the next step recorded, such as follow-up actions or decisions made. This field helps in tracking progress and ensuring alignment with project goals.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * Indicates the date and time when a particular next step was recorded or planned. This helps in managing the timeline for the opportunity.
   *
   * @public
   */
  Time: Date | undefined;
}

/**
 * Tracks the lifecycle of the AWS opportunity, including stages such as qualification, validation, and closure. This field helps partners understand the current status and progression of the opportunity.
 *
 * @public
 */
export interface AwsOpportunityLifeCycle {
  /**
   * Indicates the expected date by which the opportunity is projected to close. This field helps in planning resources and timelines for both the partner and AWS.
   *
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * Indicates the reason why an opportunity was marked as `Closed Lost`. This helps in understanding the context behind the lost opportunity and aids in refining future strategies.
   *
   * @public
   */
  ClosedLostReason?: AwsClosedLostReason | undefined;

  /**
   * Represents the current stage of the opportunity in its lifecycle, such as `Qualification`, `Validation`, or `Closed Won`. This helps in understanding the opportunity's progress.
   *
   * @public
   */
  Stage?: AwsOpportunityStage | undefined;

  /**
   * Specifies the immediate next steps required to progress the opportunity. These steps are based on AWS guidance and the current stage of the opportunity.
   *
   * @public
   */
  NextSteps?: string | undefined;

  /**
   * Provides a historical log of previous next steps that were taken to move the opportunity forward. This helps in tracking the decision-making process and identifying any delays or obstacles encountered.
   *
   * @public
   */
  NextStepsHistory?: ProfileNextStepsHistory[] | undefined;
}

/**
 * Provides an estimate of the revenue that the partner is expected to generate from the opportunity. This information helps partners assess the financial value of the project.
 *
 * @public
 */
export interface ExpectedCustomerSpend {
  /**
   * Represents the estimated monthly revenue that the partner expects to earn from the opportunity. This helps in forecasting financial returns.
   *
   * @public
   */
  Amount?: string | undefined;

  /**
   * Indicates the currency in which the revenue estimate is provided. This helps in understanding the financial impact across different markets. Accepted values are `USD` (US Dollars) and `EUR` (Euros). If the AWS Partition is `aws-eusc` (AWS European Sovereign Cloud), the currency code must be `EUR`.
   *
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;

  /**
   * Indicates how frequently the customer is expected to spend the projected amount. Use `Monthly` for recurring monthly spend (required for `TargetCompany: "AWS"` entries). Use `None` for one-time deal value entries (required for `TargetCompany: "Self"` entries when providing Total Contract Value).
   *
   * @public
   */
  Frequency: PaymentFrequency | undefined;

  /**
   * Specifies the entity associated with this spend entry. Use `AWS` for the system’s AWS Monthly Recurring Revenue (MRR) estimate. Use `Self` for the partner’s own deal value entry when providing Total Contract Value (TCV) for automatic MRR conversion. When `ExpectedContractDuration` is present on the Project, only `AWS` and `Self` are accepted. When `ExpectedContractDuration` is not present, only `AWS` is accepted and any other value will be automatically set to `AWS`.
   *
   * @public
   */
  TargetCompany: string | undefined;

  /**
   * A URL providing additional information or context about the spend estimation.
   *
   * @public
   */
  EstimationUrl?: string | undefined;
}

/**
 * Captures details about the project associated with the opportunity, including objectives, scope, and customer requirements.
 *
 * @public
 */
export interface AwsOpportunityProject {
  /**
   * Indicates the expected spending by the customer over the course of the project. This value helps partners and AWS estimate the financial impact of the opportunity. Use the [AWS Pricing Calculator](https://calculator.aws/#/) to create an estimate of the customer’s total spend. If only annual recurring revenue (ARR) is available, distribute it across 12 months to provide an average monthly value.
   *
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;

  /**
   * AWS partition where the opportunity will be deployed. Possible values: `aws-eusc` for AWS European Sovereign Cloud, `null` for all other partitions.
   *
   * @public
   */
  AwsPartition?: AwsPartition | undefined;
}

/**
 * Represents other entities related to the AWS opportunity, such as AWS products, partner solutions, and marketplace offers. These associations help build a complete picture of the solution being sold.
 *
 * @public
 */
export interface AwsOpportunityRelatedEntities {
  /**
   * Specifies the AWS products associated with the opportunity. This field helps track the specific products that are part of the proposed solution.
   *
   * @public
   */
  AwsProducts?: string[] | undefined;

  /**
   * Specifies the partner solutions related to the opportunity. These solutions represent the partner's offerings that are being positioned as part of the overall AWS opportunity.
   *
   * @public
   */
  Solutions?: string[] | undefined;

  /**
   * The AWS Marketplace solution ARNs associated with this opportunity.
   *
   * @public
   */
  AwsMarketplaceSolutions?: string[] | undefined;

  /**
   * The AWS Marketplace product ARNs associated with this opportunity.
   *
   * @public
   */
  AwsMarketplaceProducts?: string[] | undefined;
}

/**
 * Represents an Amazon Web Services team member for the engagement. This structure includes details such as name, email, and business title.
 *
 * @public
 */
export interface AwsTeamMember {
  /**
   * Provides the Amazon Web Services team member's email address.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * Provides the Amazon Web Services team member's first name.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * Provides the Amazon Web Services team member's last name.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * Specifies the Amazon Web Services team member's business title and indicates their organizational role.
   *
   * @public
   */
  BusinessTitle?: AwsMemberBusinessTitle | undefined;
}

/**
 * Specifies payments details.
 *
 * @public
 */
export interface MonetaryValue {
  /**
   * Specifies the payment amount.
   *
   * @public
   */
  Amount: string | undefined;

  /**
   * Specifies the payment currency. Accepted values are `USD` (US Dollars) and `EUR` (Euros). If the AWS Partition is `aws-eusc` (AWS European Sovereign Cloud), the currency code must be `EUR`.
   *
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;
}

/**
 * Seller-provided PARC deal terms for the opportunity, including commitment value, discount percentage, and contract dates.
 *
 * @public
 */
export interface AwsSoftwareRevenue {
  /**
   * Specifies payments details.
   *
   * @public
   */
  Value?: MonetaryValue | undefined;

  /**
   * Discount percentage offered on the software revenue. Percent convention: 15.00 means 15%.
   *
   * @public
   */
  Discount?: string | undefined;

  /**
   * Contract effective (start) date in YYYY-MM-DD format.
   *
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * Contract expiration (end) date in YYYY-MM-DD format.
   *
   * @public
   */
  ExpirationDate?: string | undefined;
}

/**
 * Provides a comprehensive view of AwsOpportunitySummaryFullView template.
 *
 * @public
 */
export interface AwsOpportunitySummaryFullView {
  /**
   * Identifier of the related partner opportunity.
   *
   * @public
   */
  RelatedOpportunityId?: string | undefined;

  /**
   * Source origin of the AWS opportunity.
   *
   * @public
   */
  Origin?: OpportunityOrigin | undefined;

  /**
   * Type of AWS involvement in the opportunity.
   *
   * @public
   */
  InvolvementType?: SalesInvolvementType | undefined;

  /**
   * Visibility level for the AWS opportunity.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * Tracks the lifecycle of the AWS opportunity, including stages such as qualification, validation, and closure. This field helps partners understand the current status and progression of the opportunity.
   *
   * @public
   */
  LifeCycle?: AwsOpportunityLifeCycle | undefined;

  /**
   * AWS team members involved in the opportunity.
   *
   * @public
   */
  OpportunityTeam?: AwsTeamMember[] | undefined;

  /**
   * Contains insights provided by AWS for the opportunity, offering recommendations and analysis that can help the partner optimize their engagement and strategy.
   *
   * @public
   */
  Insights?: AwsOpportunityInsights | undefined;

  /**
   * Reason for changes in AWS involvement type for the opportunity.
   *
   * @public
   */
  InvolvementTypeChangeReason?: InvolvementTypeChangeReason | undefined;

  /**
   * Represents other entities related to the AWS opportunity, such as AWS products, partner solutions, and marketplace offers. These associations help build a complete picture of the solution being sold.
   *
   * @public
   */
  RelatedEntityIds?: AwsOpportunityRelatedEntities | undefined;

  /**
   * Represents the customer associated with the AWS opportunity. This field captures key details about the customer that are necessary for managing the opportunity.
   *
   * @public
   */
  Customer?: AwsOpportunityCustomer | undefined;

  /**
   * Captures details about the project associated with the opportunity, including objectives, scope, and customer requirements.
   *
   * @public
   */
  Project?: AwsOpportunityProject | undefined;

  /**
   * Engagement classification for this opportunity. Read-only. Null before scoring. Known values: `AWS Field-engaged`, `Agent-engaged`, `Partner-led`.
   *
   * @public
   */
  CosellMotion?: string | undefined;

  /**
   * Seller-provided PARC deal terms: commitment value, discount, and contract dates.
   *
   * @public
   */
  SoftwareRevenue?: AwsSoftwareRevenue | undefined;
}

/**
 * Contains details about the customer associated with the Engagement Invitation, including company information and industry.
 *
 * @public
 */
export interface EngagementCustomer {
  /**
   * Specifies the industry to which the customer’s company belongs. This field helps categorize the opportunity based on the customer’s business sector.
   *
   * @public
   */
  Industry: Industry | undefined;

  /**
   * Represents the name of the customer’s company associated with the Engagement Invitation. This field is used to identify the customer.
   *
   * @public
   */
  CompanyName: string | undefined;

  /**
   * Provides the website URL of the customer’s company. This field helps partners verify the legitimacy and size of the customer organization.
   *
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * Indicates the country in which the customer’s company operates. This field is useful for understanding regional requirements or compliance needs.
   *
   * @public
   */
  CountryCode: CountryCode | undefined;
}

/**
 * Provides comprehensive details about a customer project associated with an Engagement. This may include information such as project goals, timelines, and specific customer requirements.
 *
 * @public
 */
export interface EngagementCustomerProjectDetails {
  /**
   * The title of the project.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * A description of the business problem the project aims to solve.
   *
   * @public
   */
  BusinessProblem: string | undefined;

  /**
   * The target completion date for the customer's project.
   *
   * @public
   */
  TargetCompletionDate: string | undefined;
}

/**
 * The CustomerProjects structure in Engagements offers a flexible framework for managing customer-project relationships. It supports multiple customers per Engagement and multiple projects per customer, while also allowing for customers without projects and projects without specific customers.
 *
 * All Engagement members have full visibility of customers and their associated projects, enabling the capture of relevant context even when project details are not fully defined. This structure also facilitates targeted invitations, allowing partners to focus on specific customers and their business problems when sending Engagement invitations.
 *
 * @public
 */
export interface CustomerProjectsContext {
  /**
   * Contains details about the customer associated with the Engagement Invitation, including company information and industry.
   *
   * @public
   */
  Customer?: EngagementCustomer | undefined;

  /**
   * Information about the customer project associated with the Engagement.
   *
   * @public
   */
  Project?: EngagementCustomerProjectDetails | undefined;
}

/**
 * The address information for a lead customer, including city, state or region, postal code, and country code.
 *
 * @public
 */
export interface LeadAddress {
  /**
   * The city of the lead customer's address.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The postal code of the lead customer's address.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * The state or region of the lead customer's address.
   *
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * The country code of the lead customer's address.
   *
   * @public
   */
  CountryCode?: string | undefined;
}

/**
 * Contains detailed information about the customer associated with the lead, including company details, industry classification, and AWS maturity level. This information helps qualify and categorize the lead for appropriate engagement strategies.
 *
 * @public
 */
export interface LeadCustomer {
  /**
   * Specifies the industry sector to which the lead customer's company belongs. This categorization helps in understanding the customer's business context and tailoring appropriate solutions.
   *
   * @public
   */
  Industry?: string | undefined;

  /**
   * The name of the lead customer's company. This field is essential for identifying and tracking the customer organization associated with the lead.
   *
   * @public
   */
  CompanyName: string | undefined;

  /**
   * The website URL of the lead customer's company. This provides additional context about the customer organization and helps verify company legitimacy and size.
   *
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * The address information for the lead customer.
   *
   * @public
   */
  Address?: LeadAddress | undefined;

  /**
   * Indicates the customer's level of experience and adoption with AWS services. This assessment helps determine the appropriate engagement approach and solution complexity.
   *
   * @public
   */
  AwsMaturity?: string | undefined;

  /**
   * Specifies the market segment classification of the lead customer, such as enterprise, mid-market, or small business. This segmentation helps in targeting appropriate solutions and engagement strategies.
   *
   * @public
   */
  MarketSegment?: string | undefined;
}

/**
 * Contains insights that AI generates for a lead. These insights provide automated analysis to help partners evaluate the lead quality and prioritize engagement efforts.
 *
 * @public
 */
export interface LeadInsights {
  /**
   * A score that indicates the lead's readiness for engagement. Valid values are `Low`, `Medium`, and `High`. Use this score to prioritize leads based on their likelihood of conversion.
   *
   * @public
   */
  LeadReadinessScore?: string | undefined;
}

/**
 * An object that contains a lead contact's details associated with the engagement. This provides contact information for individuals involved in lead-related activities.
 *
 * @public
 */
export interface LeadContact {
  /**
   * The lead contact's business title or job role associated with the engagement.
   *
   * @public
   */
  BusinessTitle: string | undefined;

  /**
   * The lead contact's email address associated with the engagement.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The lead contact's first name associated with the engagement.
   *
   * @public
   */
  FirstName: string | undefined;

  /**
   * The lead contact's last name associated with the engagement.
   *
   * @public
   */
  LastName: string | undefined;

  /**
   * The lead contact's phone number associated with the engagement.
   *
   * @public
   */
  Phone?: string | undefined;
}

/**
 * Represents a specific interaction or touchpoint with a lead customer. This structure captures details about communications, meetings, or other engagement activities that help track the lead's progression and engagement history.
 *
 * @public
 */
export interface LeadInteraction {
  /**
   * Specifies the type of source that generated the lead interaction, such as "Event", "Website", "Referral", or "Campaign". This categorization helps track lead generation effectiveness across different channels.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The unique identifier of the specific source that generated the lead interaction. This ID provides traceability back to the original lead generation activity.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The descriptive name of the source that generated the lead interaction, providing a human-readable identifier for the lead generation channel or activity.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * Describes the specific use case or business scenario discussed during the lead interaction. This helps categorize the customer's interests and potential solutions.
   *
   * @public
   */
  Usecase?: string | undefined;

  /**
   * The date and time when the lead interaction occurred, in ISO 8601 format (UTC). This timestamp helps track the chronology of lead engagement activities.
   *
   * @public
   */
  InteractionDate?: Date | undefined;

  /**
   * Describes the action taken by the customer during or as a result of the interaction, such as requesting information, scheduling a meeting, or expressing interest in a solution.
   *
   * @public
   */
  CustomerAction?: string | undefined;

  /**
   * Describes the business problem or challenge that the customer discussed during the interaction. This information helps qualify the lead and identify appropriate solutions.
   *
   * @public
   */
  BusinessProblem?: string | undefined;

  /**
   * Contains contact information for the customer representative involved in the lead interaction, including their name, title, and contact details.
   *
   * @public
   */
  Contact: LeadContact | undefined;
}

/**
 * Provides comprehensive details about a lead associated with an engagement. This structure contains information about lead qualification status, customer details, and interaction history to facilitate lead management and tracking within the engagement.
 *
 * @public
 */
export interface LeadContext {
  /**
   * Insights that AI generates and associates with the lead. These insights provide automated analysis such as lead readiness scoring to help partners assess the lead quality.
   *
   * @public
   */
  Insights?: LeadInsights | undefined;

  /**
   * Indicates the current qualification status of the lead, such as whether it has been qualified, disqualified, or is still under evaluation. This helps track the lead's progression through the qualification process.
   *
   * @public
   */
  QualificationStatus?: string | undefined;

  /**
   * Contains detailed information about the customer associated with the lead, including company information, contact details, and other relevant customer data.
   *
   * @public
   */
  Customer: LeadCustomer | undefined;

  /**
   * An array of interactions that have occurred with the lead, providing a history of communications, meetings, and other engagement activities related to the lead.
   *
   * @public
   */
  Interactions: LeadInteraction[] | undefined;
}

/**
 * Contains detailed information about the prospected customer account, including company identifiers, geographic classification, industry segmentation, and program eligibility.
 *
 * @public
 */
export interface ProspectingResultCustomer {
  /**
   * The name of the prospected customer account.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The geographic region classification of the prospected customer account.
   *
   * @public
   */
  Geo?: string | undefined;

  /**
   * The specific region of the prospected customer account.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The subregion classification of the prospected customer account.
   *
   * @public
   */
  SubRegion?: string | undefined;

  /**
   * The country code of the prospected customer account.
   *
   * @public
   */
  Country?: CountryCode | undefined;

  /**
   * The industry classification of the prospected customer account.
   *
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * The sub-industry classification of the prospected customer account. This provides more granular categorization within the primary industry.
   *
   * @public
   */
  SubIndustry?: string | undefined;

  /**
   * The market segment classification of the prospected customer account.
   *
   * @public
   */
  Segment?: string | undefined;

  /**
   * The company size classification of the prospected customer account.
   *
   * @public
   */
  CompanySize?: string | undefined;

  /**
   * A list of AWS Greenfield programs that the prospected customer is eligible for. Use this list to identify relevant go-to-market opportunities.
   *
   * @public
   */
  EligiblePrograms?: string[] | undefined;

  /**
   * A summary of publicly available information about the prospected customer. The system uses this summary to generate customer insights and inform engagement strategies.
   *
   * @public
   */
  PublicProfileSummary?: string | undefined;
}

/**
 * Contains insights that AI generates from the prospecting analysis. These insights include marketplace engagement scoring, solution fit assessments, and solution categorization for the prospected customer.
 *
 * @public
 */
export interface ProspectingInsights {
  /**
   * A score that indicates the prospected customer's level of engagement with AWS Marketplace. Valid values are `High`, `Medium`, and `Low`.
   *
   * @public
   */
  MarketplaceEngagementScore?: string | undefined;

  /**
   * A score that indicates how well the partner's solution fits the prospected customer's needs.
   *
   * @public
   */
  SolutionScore?: string | undefined;

  /**
   * The primary solution category classification for the prospected customer. This indicates the type of solution that best addresses their needs.
   *
   * @public
   */
  SolutionCategory?: string | undefined;

  /**
   * The solution sub-category classification for the prospected customer. This provides more granular categorization of the recommended solution type.
   *
   * @public
   */
  SolutionSubCategory?: string | undefined;
}

/**
 * Contains the prospecting data that AWS sources. This includes task execution details, customer account information, and insights that AI generates from the prospecting analysis.
 *
 * @public
 */
export interface ProspectingResultAws {
  /**
   * Contains details about the prospected customer account, including geographic, industry, and segment classifications.
   *
   * @public
   */
  Customer?: ProspectingResultCustomer | undefined;

  /**
   * Insights that AI generates from the prospecting analysis. These insights include engagement scores and solution fit assessments for the prospected customer.
   *
   * @public
   */
  Insights?: ProspectingInsights | undefined;

  /**
   * The timestamp when the prospecting result context was created. The format is ISO 8601 (UTC).
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp when the prospecting task completed processing. The format is ISO 8601 (UTC).
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The unique identifier of the prospecting task that generates this result.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the prospecting task. Use this ARN to track and manage the task within AWS.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The name that the user provides for the prospecting task that generates this result.
   *
   * @public
   */
  TaskName?: string | undefined;
}

/**
 * Contains the results of an autonomous prospecting job. This includes data and insights that AWS provides about a prospected customer account.
 *
 * @public
 */
export interface ProspectingResult {
  /**
   * Prospecting data and insights that AWS provides during the prospecting job. This includes customer details, task information, and scoring that AI generates.
   *
   * @public
   */
  Aws?: ProspectingResultAws | undefined;
}

/**
 * Represents the payload of an Engagement context. The structure of this payload varies based on the context type specified in the EngagementContextDetails.
 *
 * @public
 */
export type EngagementContextPayload =
  | EngagementContextPayload.CustomerProjectMember
  | EngagementContextPayload.LeadMember
  | EngagementContextPayload.ProspectingResultMember
  | EngagementContextPayload.$UnknownMember;

/**
 * @public
 */
export namespace EngagementContextPayload {
  /**
   * Contains detailed information about a customer project when the context type is "CustomerProject". This field is present only when the Type in EngagementContextDetails is set to "CustomerProject".
   *
   * @public
   */
  export interface CustomerProjectMember {
    CustomerProject: CustomerProjectsContext;
    Lead?: never;
    ProspectingResult?: never;
    $unknown?: never;
  }

  /**
   * Contains detailed information about a lead when the context type is "Lead". This field is present only when the Type in EngagementContextDetails is set to "Lead".
   *
   * @public
   */
  export interface LeadMember {
    CustomerProject?: never;
    Lead: LeadContext;
    ProspectingResult?: never;
    $unknown?: never;
  }

  /**
   * Contains prospecting result data with enriched insights. The system generates these insights when a partner runs an autonomous prospecting job on leads. This field appears only when the context type is "ProspectingResult".
   *
   * @public
   */
  export interface ProspectingResultMember {
    CustomerProject?: never;
    Lead?: never;
    ProspectingResult: ProspectingResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CustomerProject?: never;
    Lead?: never;
    ProspectingResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CustomerProject: (value: CustomerProjectsContext) => T;
    Lead: (value: LeadContext) => T;
    ProspectingResult: (value: ProspectingResult) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEngagementContextRequest {
  /**
   * Specifies the catalog associated with the engagement context request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the engagement context is created in. Use `AWS` to create contexts in the production environment, and `Sandbox` for testing in secure, isolated environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the `Engagement` for which the context is being created. This parameter ensures the context is associated with the correct engagement and provides the necessary linkage between the engagement and its contextual information.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier provided by the client to ensure that the request is handled exactly once. This token helps prevent duplicate context creations and must not exceed sixty-four alphanumeric characters. Use a UUID or other unique string to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the type of context being created for the engagement. This field determines the structure and content of the context payload. Valid values include `CustomerProject` for customer project-related contexts. The type field ensures that the context is properly categorized and processed according to its intended purpose.
   *
   * @public
   */
  Type: EngagementContextType | undefined;

  /**
   * Represents the payload of an Engagement context. The structure of this payload varies based on the context type specified in the EngagementContextDetails.
   *
   * @public
   */
  Payload: EngagementContextPayload | undefined;
}

/**
 * @public
 */
export interface CreateEngagementContextResponse {
  /**
   * The unique identifier of the engagement to which the context was added. This ID confirms the successful association of the context with the specified engagement.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the engagement to which the context was added. This globally unique identifier can be used for cross-service references and IAM policies.
   *
   * @public
   */
  EngagementArn?: string | undefined;

  /**
   * The timestamp indicating when the engagement was last modified as a result of adding the context, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z".
   *
   * @public
   */
  EngagementLastModifiedAt?: Date | undefined;

  /**
   * The unique identifier assigned to the newly created engagement context. This ID can be used to reference the specific context within the engagement for future operations.
   *
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * Provides detailed context information for an Engagement. This structure allows for specifying the type of context and its associated payload.
 *
 * @public
 */
export interface EngagementContextDetails {
  /**
   * The unique identifier of the engagement context. This ID is used to reference and manage the specific context within the engagement.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Specifies the type of Engagement context. Valid values are "CustomerProject" or "Document", indicating whether the context relates to a customer project or a document respectively.
   *
   * @public
   */
  Type: EngagementContextType | undefined;

  /**
   * Contains the specific details of the Engagement context. The structure of this payload varies depending on the Type field.
   *
   * @public
   */
  Payload?: EngagementContextPayload | undefined;
}

/**
 * @public
 */
export interface CreateEngagementRequest {
  /**
   * The `CreateEngagementRequest$Catalog` parameter specifies the catalog related to the engagement. Accepted values are `AWS` and `Sandbox`, which determine the environment in which the engagement is managed.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The `CreateEngagementRequest$ClientToken` parameter specifies a unique, case-sensitive identifier to ensure that the request is handled exactly once. The value must not exceed sixty-four alphanumeric characters.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the title of the `Engagement`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Provides a description of the `Engagement`.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The `Contexts` field is a required array of objects, with a maximum of 5 contexts allowed, specifying detailed information about customer projects associated with the Engagement. Each context object contains a `Type` field indicating the context type, which must be `CustomerProject` in this version, and a `Payload` field containing the `CustomerProject` details. The `CustomerProject` object is composed of two main components: `Customer` and `Project`. The `Customer` object includes information such as `CompanyName`, `WebsiteUrl`, `Industry`, and `CountryCode`, providing essential details about the customer. The `Project` object contains `Title`, `BusinessProblem`, and `TargetCompletionDate`, offering insights into the specific project associated with the customer. This structure allows comprehensive context to be included within the Engagement, facilitating effective collaboration between parties by providing relevant customer and project information.
   *
   * @public
   */
  Contexts?: EngagementContextDetails[] | undefined;
}

/**
 * @public
 */
export interface CreateEngagementResponse {
  /**
   * Unique identifier assigned to the newly created engagement.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the engagement.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). For newly created engagements, this value matches the creation timestamp. Example: "2023-05-01T20:37:46Z".
   *
   * @public
   */
  ModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetEngagementRequest {
  /**
   * Specifies the catalog related to the engagement request. Valid values are `AWS` and `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies the identifier of the Engagement record to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEngagementResponse {
  /**
   * The unique resource identifier of the engagement retrieved.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the engagement retrieved.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The title of the engagement. It provides a brief, descriptive name for the engagement that is meaningful and easily recognizable.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * A more detailed description of the engagement. This provides additional context or information about the engagement's purpose or scope.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time when the Engagement was created, presented in ISO 8601 format (UTC). For example: "2023-05-01T20:37:46Z". This timestamp helps track the lifecycle of the Engagement.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The AWS account ID of the user who originally created the engagement. This field helps in tracking the origin of the engagement.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * Specifies the current count of members participating in the Engagement. This count includes all active members regardless of their roles or permissions within the Engagement.
   *
   * @public
   */
  MemberCount?: number | undefined;

  /**
   * The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z". This helps track the most recent changes to the engagement.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The AWS account ID of the user who last modified the engagement. This field helps track who made the most recent changes to the engagement.
   *
   * @public
   */
  ModifiedBy?: string | undefined;

  /**
   * A list of context objects associated with the engagement. Each context provides additional information related to the Engagement, such as customer projects or documents.
   *
   * @public
   */
  Contexts?: EngagementContextDetails[] | undefined;
}

/**
 * @public
 */
export interface ListEngagementMembersRequest {
  /**
   * The catalog related to the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Identifier of the Engagement record to retrieve members from.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Engagement members are the participants in an Engagement, which is likely a collaborative project or business opportunity within the AWS partner network. Members can be different partner organizations or AWS accounts that are working together on a specific engagement.
 *
 * Each member is represented by their AWS Account ID, Company Name, and associated details. Members have a status within the Engagement (PENDING, ACCEPTED, REJECTED, or WITHDRAWN), indicating their current state of participation. Only existing members of an Engagement can view the list of other members. This implies a level of privacy and access control within the Engagement structure.
 *
 * @public
 */
export interface EngagementMember {
  /**
   * The official name of the member's company or organization.
   *
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * The URL of the member company's website. This offers a way to find more information about the member organization and serves as an additional identifier.
   *
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * This is the unique identifier for the AWS account associated with the member organization. It's used for AWS-related operations and identity verification.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementMembersResponse {
  /**
   * Provides a list of engagement members.
   *
   * @public
   */
  EngagementMemberList: EngagementMember[] | undefined;

  /**
   * A pagination token used to retrieve the next set of results. If there are more results available than can be returned in a single response, this token will be present. Use this token in a subsequent request to retrieve the next page of results. If there are no more results, this value will be null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the sorting parameters for listing Engagements.
 *
 * @public
 */
export interface EngagementSort {
  /**
   * The order in which to sort the results.
   *
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * The field by which to sort the results.
   *
   * @public
   */
  SortBy: EngagementSortName | undefined;
}

/**
 * @public
 */
export interface ListEngagementsRequest {
  /**
   * Specifies the catalog related to the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A list of AWS account IDs. When specified, the response includes engagements created by these accounts. This filter is useful for finding engagements created by specific team members.
   *
   * @public
   */
  CreatedBy?: string[] | undefined;

  /**
   * An array of strings representing AWS Account IDs. Use this to exclude engagements created by specific users.
   *
   * @public
   */
  ExcludeCreatedBy?: string[] | undefined;

  /**
   * Filters engagements to include only those containing the specified context types, such as "CustomerProject" or "Lead". Use this to find engagements that have specific types of contextual information associated with them.
   *
   * @public
   */
  ContextTypes?: EngagementContextType[] | undefined;

  /**
   * Filters engagements to exclude those containing the specified context types. Use this to find engagements that do not have certain types of contextual information, helping to narrow results based on context exclusion criteria.
   *
   * @public
   */
  ExcludeContextTypes?: EngagementContextType[] | undefined;

  /**
   * Specifies the sorting parameters for listing Engagements.
   *
   * @public
   */
  Sort?: EngagementSort | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. This value is returned from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of strings representing engagement identifiers to retrieve.
   *
   * @public
   */
  EngagementIdentifier?: string[] | undefined;
}

/**
 * An object that contains an `Engagement`'s subset of fields.
 *
 * @public
 */
export interface EngagementSummary {
  /**
   * The Amazon Resource Name (ARN) of the created Engagement.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier for the Engagement.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The title of the Engagement.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The date and time when the Engagement was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The AWS Account ID of the Engagement creator.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The number of members in the Engagement.
   *
   * @public
   */
  MemberCount?: number | undefined;

  /**
   * The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z".
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The AWS account ID of the user who last modified the engagement. This field helps track who made the most recent changes to the engagement.
   *
   * @public
   */
  ModifiedBy?: string | undefined;

  /**
   * An array of context types associated with the engagement, such as "CustomerProject" or "Lead". This provides a quick overview of the types of contexts included in the engagement.
   *
   * @public
   */
  ContextTypes?: EngagementContextType[] | undefined;
}

/**
 * @public
 */
export interface ListEngagementsResponse {
  /**
   * An array of engagement summary objects.
   *
   * @public
   */
  EngagementSummaryList: EngagementSummary[] | undefined;

  /**
   * The token to retrieve the next set of results. This field will be null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines the sorting parameters for listing tasks. This structure allows for specifying the field to sort by and the order of sorting.
 *
 * @public
 */
export interface ListTasksSortBase {
  /**
   * Determines the order in which the sorted results are presented.
   *
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * Specifies the field by which the task list should be sorted.
   *
   * @public
   */
  SortBy: ListTasksSortName | undefined;
}

/**
 * @public
 */
export interface ListEngagementByAcceptingInvitationTasksRequest {
  /**
   * Use this parameter to control the number of items returned in each request, which can be useful for performance tuning and managing large result sets.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this parameter for pagination when the result set spans multiple pages. This value is obtained from the NextToken field in the response of a previous call to this API.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the sorting criteria for the returned results. This allows you to order the tasks based on specific attributes.
   *
   * @public
   */
  Sort?: ListTasksSortBase | undefined;

  /**
   * Specifies the catalog related to the request. Valid values are:
   *
   * - AWS: Retrieves the request from the production AWS environment.
   * - Sandbox: Retrieves the request from a sandbox environment used for testing or development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Filters the tasks based on their current status. This allows you to focus on tasks in specific states.
   *
   * @public
   */
  TaskStatus?: TaskStatus[] | undefined;

  /**
   * Filters tasks by the identifiers of the opportunities they created or are associated with.
   *
   * @public
   */
  OpportunityIdentifier?: string[] | undefined;

  /**
   * Filters tasks by the identifiers of the engagement invitations they are processing.
   *
   * @public
   */
  EngagementInvitationIdentifier?: string[] | undefined;

  /**
   * Filters tasks by their unique identifiers. Use this when you want to retrieve information about specific tasks.
   *
   * @public
   */
  TaskIdentifier?: string[] | undefined;
}

/**
 * Specifies a subset of fields associated with tasks related to accepting an engagement invitation.
 *
 * @public
 */
export interface ListEngagementByAcceptingInvitationTaskSummary {
  /**
   * Unique identifier of the task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the task.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * Task start timestamp.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Status of the task.
   *
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * Detailed message describing the failure and possible recovery steps.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A code pointing to the specific reason for the failure.
   *
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * Unique identifier of opportunity that was created.
   *
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * Unique identifier of the resource snapshot job that was created.
   *
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * The unique identifier of the engagement invitation that was accepted.
   *
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementByAcceptingInvitationTasksResponse {
  /**
   * An array of `EngagementByAcceptingInvitationTaskSummary` objects, each representing a task that matches the specified filters. The array may be empty if no tasks match the criteria.
   *
   * @public
   */
  TaskSummaries?: ListEngagementByAcceptingInvitationTaskSummary[] | undefined;

  /**
   * A token used for pagination to retrieve the next page of results.If there are more results available, this field will contain a token that can be used in a subsequent API call to retrieve the next page. If there are no more results, this field will be null or an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The key-value pair assigned to a specified resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key in the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value in the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface StartEngagementByAcceptingInvitationTaskRequest {
  /**
   * Specifies the catalog related to the task. Use `AWS` for production engagements and `Sandbox` for testing scenarios.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier provided by the client that helps to ensure the idempotency of the request. This can be a random or meaningful string but must be unique for each request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the unique identifier of the `EngagementInvitation` to be accepted. Providing the correct identifier helps ensure that the correct engagement is processed.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartEngagementByAcceptingInvitationTaskResponse {
  /**
   * The unique identifier of the task, used to track the task’s progress.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task, used for tracking and managing the task within AWS.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The timestamp indicating when the task was initiated. The format follows RFC 3339 section 5.6.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Indicates the current status of the task.
   *
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * If the task fails, this field contains a detailed message describing the failure and possible recovery steps.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Indicates the reason for task failure using an enumerated code.
   *
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * Returns the original opportunity identifier passed in the request. This is the unique identifier for the opportunity.
   *
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * The identifier of the Resource Snapshot Job created as part of this task.
   *
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * Returns the identifier of the engagement invitation that was accepted and used to create the opportunity.
   *
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementFromOpportunityTasksRequest {
  /**
   * Specifies the maximum number of results to return in a single page of the response.Use this parameter to control the number of items returned in each request, which can be useful for performance tuning and managing large result sets.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for requesting the next page of results. This value is obtained from the NextToken field in the response of a previous call to this API. Use this parameter for pagination when the result set spans multiple pages.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the sorting criteria for the returned results. This allows you to order the tasks based on specific attributes.
   *
   * @public
   */
  Sort?: ListTasksSortBase | undefined;

  /**
   * Specifies the catalog related to the request. Valid values are:
   *
   * - AWS: Retrieves the request from the production AWS environment.
   * - Sandbox: Retrieves the request from a sandbox environment used for testing or development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Filters the tasks based on their current status. This allows you to focus on tasks in specific states.
   *
   * @public
   */
  TaskStatus?: TaskStatus[] | undefined;

  /**
   * Filters tasks by their unique identifiers. Use this when you want to retrieve information about specific tasks.
   *
   * @public
   */
  TaskIdentifier?: string[] | undefined;

  /**
   * The identifier of the original opportunity associated with this task.
   *
   * @public
   */
  OpportunityIdentifier?: string[] | undefined;

  /**
   * Filters tasks by the identifiers of the engagements they created or are associated with.
   *
   * @public
   */
  EngagementIdentifier?: string[] | undefined;
}

/**
 * Provides a summary of a task related to creating an engagement from an opportunity. This structure contains key information about the task's status, associated identifiers, and any failure details.
 *
 * @public
 */
export interface ListEngagementFromOpportunityTaskSummary {
  /**
   * A unique identifier for a specific task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) uniquely identifying this task within AWS. This ARN can be used for referencing the task in other AWS services or APIs.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The timestamp indicating when the task was initiated, in RFC 3339 5.6 date-time format.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The current status of the task.
   *
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * A detailed message providing additional information about the task, especially useful in case of failures. This field may contain error details or other relevant information about the task's execution
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A code indicating the specific reason for a task failure. This field is populated when the task status is FAILED and provides a categorized reason for the failure.
   *
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * The unique identifier of the original Opportunity from which the Engagement is being created. This field helps track the source of the Engagement creation task.
   *
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * The identifier of the resource snapshot job associated with this task, if a snapshot was created as part of the Engagement creation process.
   *
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * The unique identifier of the engagement created as a result of the task. This field is populated when the task is completed successfully.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The unique identifier of the Engagement Invitation.
   *
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementFromOpportunityTasksResponse {
  /**
   * TaskSummaries An array of TaskSummary objects containing details about each task.
   *
   * @public
   */
  TaskSummaries?: ListEngagementFromOpportunityTaskSummary[] | undefined;

  /**
   * A token used for pagination to retrieve the next page of results. If there are more results available, this field will contain a token that can be used in a subsequent API call to retrieve the next page. If there are no more results, this field will be null or an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Indicates the level of AWS involvement in the opportunity. This field helps track AWS participation throughout the engagement, such as providing technical support, deal assistance, and sales support.
 *
 * @public
 */
export interface AwsSubmission {
  /**
   * Specifies the type of AWS involvement in the opportunity, such as coselling, deal support, or technical consultation. This helps categorize the nature of AWS participation.
   *
   * @public
   */
  InvolvementType: SalesInvolvementType | undefined;

  /**
   * Determines who can view AWS involvement in the opportunity. Typically, this field is set to `Full` for most cases, but it may be restricted based on special program requirements or confidentiality needs.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * @public
 */
export interface StartEngagementFromOpportunityTaskRequest {
  /**
   * Specifies the catalog in which the engagement is tracked. Acceptable values include `AWS` for production and `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique token provided by the client to help ensure the idempotency of the request. It helps prevent the same task from being performed multiple times.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier of the opportunity from which the engagement task is to be initiated. This helps ensure that the task is applied to the correct opportunity.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Indicates the level of AWS involvement in the opportunity. This field helps track AWS participation throughout the engagement, such as providing technical support, deal assistance, and sales support.
   *
   * @public
   */
  AwsSubmission: AwsSubmission | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartEngagementFromOpportunityTaskResponse {
  /**
   * The unique identifier of the task, used to track the task’s progress. This value follows a specific pattern: `^oit-[0-9a-z]\{13\}$`.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task, used for tracking and managing the task within AWS.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The timestamp indicating when the task was initiated. The format follows RFC 3339 section 5.6.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Indicates the current status of the task. Valid values include `IN_PROGRESS`, `COMPLETE`, and `FAILED`.
   *
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * If the task fails, this field contains a detailed message describing the failure and possible recovery steps.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Indicates the reason for task failure using an enumerated code.
   *
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * Returns the original opportunity identifier passed in the request, which is the unique identifier for the opportunity created in the partner’s system.
   *
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * The identifier of the resource snapshot job created to add the opportunity resource snapshot to the Engagement. Only populated if TaskStatus is COMPLETE
   *
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * The identifier of the newly created Engagement. Only populated if TaskStatus is COMPLETE.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The identifier of the new Engagement invitation. Only populated if TaskStatus is COMPLETE.
   *
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * Contains customer information included in a lead invitation payload. This structure provides essential details about the customer to help partners evaluate the lead opportunity and determine their interest in engagement.
 *
 * @public
 */
export interface LeadInvitationCustomer {
  /**
   * Specifies the industry sector of the customer company associated with the lead invitation. This categorization helps partners understand the customer's business context and assess solution fit.
   *
   * @public
   */
  Industry?: string | undefined;

  /**
   * The name of the customer company associated with the lead invitation. This field identifies the target organization for the lead engagement opportunity.
   *
   * @public
   */
  CompanyName: string | undefined;

  /**
   * The website URL of the customer company. This provides additional context about the customer organization and helps partners verify company details and assess business size and legitimacy.
   *
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * The country code indicating the geographic location of the customer company. This information helps partners understand regional requirements and assess their ability to serve the customer effectively.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * Indicates the customer's level of experience and adoption with AWS services. This assessment helps partners understand the customer's cloud maturity and tailor their engagement approach accordingly.
   *
   * @public
   */
  AwsMaturity?: string | undefined;

  /**
   * Specifies the market segment classification of the customer, such as enterprise, mid-market, or small business. This segmentation helps partners determine the appropriate solution complexity and engagement strategy.
   *
   * @public
   */
  MarketSegment?: string | undefined;
}

/**
 * Represents interaction details included in a lead invitation payload. This structure provides context about how the lead was generated and the customer's engagement history to help partners assess the opportunity quality.
 *
 * @public
 */
export interface LeadInvitationInteraction {
  /**
   * Specifies the type of source that generated the lead interaction, such as "Event", "Website", or "Campaign". This helps partners understand the lead generation channel and assess lead quality based on the source type.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The unique identifier of the specific source that generated the lead interaction. This provides traceability to the original lead generation activity for reference and follow-up purposes.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The descriptive name of the source that generated the lead interaction. This human-readable identifier helps partners understand the specific lead generation channel or campaign that created the opportunity.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * Describes the specific use case or business scenario associated with the lead interaction. This information helps partners understand the customer's interests and potential solution requirements.
   *
   * @public
   */
  Usecase?: string | undefined;

  /**
   * The business title or job role of the customer contact involved in the lead interaction. This helps partners identify the decision-making level and engagement approach for the lead.
   *
   * @public
   */
  ContactBusinessTitle: string | undefined;
}

/**
 * Represents the data payload of an engagement invitation for a lead opportunity. This contains detailed information about the customer and interaction history that partners use to evaluate whether to accept the lead engagement invitation.
 *
 * @public
 */
export interface LeadInvitationPayload {
  /**
   * Contains information about the customer associated with the lead invitation. This data helps partners understand the customer's profile, industry, and business context to assess the lead opportunity.
   *
   * @public
   */
  Customer: LeadInvitationCustomer | undefined;

  /**
   * Describes the interaction details associated with the lead, including the source of the lead generation and customer engagement information. This context helps partners evaluate the lead quality and engagement approach.
   *
   * @public
   */
  Interaction: LeadInvitationInteraction | undefined;
}

/**
 * Contains details about the project associated with the Engagement Invitation, including the business problem and expected outcomes.
 *
 * @public
 */
export interface ProjectDetails {
  /**
   * Describes the business problem that the project aims to solve. This information is crucial for understanding the project’s goals and objectives.
   *
   * @public
   */
  BusinessProblem: string | undefined;

  /**
   * Specifies the title of the project. This title helps partners quickly identify and understand the focus of the project.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * Specifies the estimated date of project completion. This field helps track the project timeline and manage expectations.
   *
   * @public
   */
  TargetCompletionDate: string | undefined;

  /**
   * Contains revenue estimates for the partner related to the project. This field provides an idea of the financial potential of the opportunity for the partner.
   *
   * @public
   */
  ExpectedCustomerSpend: ExpectedCustomerSpend[] | undefined;
}

/**
 * An object that contains the details of the sender-provided contact person for the `EngagementInvitation`.
 *
 * @public
 */
export interface SenderContact {
  /**
   * The sender-provided contact's email address associated with the `EngagementInvitation`.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The sender-provided contact's last name associated with the `EngagementInvitation`.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The sender-provided contact's first name associated with the `EngagementInvitation`.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The sender-provided contact's title (job title or role) associated with the `EngagementInvitation`.
   *
   * @public
   */
  BusinessTitle?: string | undefined;

  /**
   * The sender-provided contact's phone number associated with the `EngagementInvitation`.
   *
   * @public
   */
  Phone?: string | undefined;
}

/**
 * Represents the data payload of an Engagement Invitation for a specific opportunity. This contains detailed information that partners use to evaluate the engagement.
 *
 * @public
 */
export interface OpportunityInvitationPayload {
  /**
   * Represents the contact details of the AWS representatives involved in sending the Engagement Invitation. These contacts are opportunity stakeholders.
   *
   * @public
   */
  SenderContacts?: SenderContact[] | undefined;

  /**
   * Outlines the responsibilities or expectations of the receiver in the context of the invitation.
   *
   * @public
   */
  ReceiverResponsibilities: ReceiverResponsibility[] | undefined;

  /**
   * Contains information about the customer related to the opportunity in the Engagement Invitation. This data helps partners understand the customer’s profile and requirements.
   *
   * @public
   */
  Customer: EngagementCustomer | undefined;

  /**
   * Describes the project details associated with the opportunity, including the customer’s needs and the scope of work expected to be performed.
   *
   * @public
   */
  Project: ProjectDetails | undefined;
}

/**
 * Contains the data payload associated with the Engagement Invitation. This payload includes essential details related to the AWS opportunity and is used by partners to evaluate whether to accept or reject the engagement.
 *
 * @public
 */
export type Payload =
  | Payload.LeadInvitationMember
  | Payload.OpportunityInvitationMember
  | Payload.$UnknownMember;

/**
 * @public
 */
export namespace Payload {
  /**
   * Specifies the details of the opportunity invitation within the Engagement Invitation payload. This data helps partners understand the context, scope, and expected involvement for the opportunity from AWS.
   *
   * @public
   */
  export interface OpportunityInvitationMember {
    OpportunityInvitation: OpportunityInvitationPayload;
    LeadInvitation?: never;
    $unknown?: never;
  }

  /**
   * Specifies the details of the lead invitation within the Engagement Invitation payload. This data helps partners understand the lead context, customer information, and interaction history for the lead opportunity from AWS.
   *
   * @public
   */
  export interface LeadInvitationMember {
    OpportunityInvitation?: never;
    LeadInvitation: LeadInvitationPayload;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OpportunityInvitation?: never;
    LeadInvitation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    OpportunityInvitation: (value: OpportunityInvitationPayload) => T;
    LeadInvitation: (value: LeadInvitationPayload) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents the entity that received the Engagement Invitation, including account and company details. This field is essential for tracking the partner who is being invited to collaborate.
 *
 * @public
 */
export type Receiver =
  | Receiver.AccountMember
  | Receiver.$UnknownMember;

/**
 * @public
 */
export namespace Receiver {
  /**
   * Specifies the AWS account of the partner who received the Engagement Invitation. This field is used to track the invitation recipient within the AWS ecosystem.
   *
   * @public
   */
  export interface AccountMember {
    Account: AccountReceiver;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Account?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Account: (value: AccountReceiver) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Invitation structure represents an invitation exchanged between partners and AWS. It includes a message, receiver information, and a payload providing context for the invitation.
 *
 * @public
 */
export interface Invitation {
  /**
   * A message accompanying the invitation.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Represents the entity that received the Engagement Invitation, including account and company details. This field is essential for tracking the partner who is being invited to collaborate.
   *
   * @public
   */
  Receiver: Receiver | undefined;

  /**
   * Contains the data payload associated with the Engagement Invitation. This payload includes essential details related to the AWS opportunity and is used by partners to evaluate whether to accept or reject the engagement.
   *
   * @public
   */
  Payload: Payload | undefined;
}

/**
 * @public
 */
export interface CreateEngagementInvitationRequest {
  /**
   * Specifies the catalog related to the engagement. Accepted values are `AWS` and `Sandbox`, which determine the environment in which the engagement is managed.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies a unique, client-generated UUID to ensure that the request is handled exactly once. This token helps prevent duplicate invitation creations.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier of the `Engagement` associated with the invitation. This parameter ensures the invitation is created within the correct `Engagement` context.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * The `Invitation` object all information necessary to initiate an engagement invitation to a partner. It contains a personalized message from the sender, the invitation's receiver, and a payload. The `Payload` can be the `OpportunityInvitation`, which includes detailed structures for sender contacts, partner responsibilities, customer information, and project details, or `LeadInvitation`, which includes structures for customer information and interaction details.
   *
   * @public
   */
  Invitation: Invitation | undefined;
}

/**
 * @public
 */
export interface CreateEngagementInvitationResponse {
  /**
   * Unique identifier assigned to the newly created engagement invitation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the engagement invitation.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetEngagementInvitationRequest {
  /**
   * Specifies the catalog associated with the request. The field accepts values from the predefined set: `AWS` for live operations or `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies the unique identifier for the retrieved engagement invitation.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * A subset of prospecting result data visible to invitation receivers. It includes customer account details and AI-generated insights.
 *
 * @public
 */
export interface InvitationProspectingResultAws {
  /**
   * The prospected customer account details, including geographic classification, industry segmentation, company size, and program eligibility.
   *
   * @public
   */
  Customer?: ProspectingResultCustomer | undefined;

  /**
   * The AI-generated insights from the prospecting analysis, including marketplace engagement scoring, solution fit assessments, and solution categorization.
   *
   * @public
   */
  Insights?: ProspectingInsights | undefined;
}

/**
 * Contains enrichment data for engagement invitations. You can view propensity scores, program eligibility, and lead readiness insights directly in the invitation, before you take action on the invitation.
 *
 * @public
 */
export interface EnrichmentContext {
  /**
   * The customer account data and propensity insights for the prospected account. It includes geographic, industry, and segment classifications, along with engagement and solution scoring.
   *
   * @public
   */
  ProspectingResultAws?: InvitationProspectingResultAws | undefined;

  /**
   * The AI-generated lead readiness score for this lead. Use this score to assess lead quality and prioritize engagement efforts.
   *
   * @public
   */
  LeadInsights?: LeadInsights | undefined;
}

/**
 * The EngagementMemberSummary provides a snapshot of essential information about participants in an AWS Partner Central Engagement. This compact data structure encapsulates key details of each member, facilitating efficient collaboration and management within the Engagement.
 *
 * @public
 */
export interface EngagementMemberSummary {
  /**
   * The official name of the member's company or organization.
   *
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * The URL of the member company's website. This offers a way to find more information about the member organization and serves as an additional identifier.
   *
   * @public
   */
  WebsiteUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetEngagementInvitationResponse {
  /**
   * The Amazon Resource Name (ARN) that identifies the engagement invitation.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of payload contained in the engagement invitation, indicating what data or context the payload covers.
   *
   * @public
   */
  PayloadType?: EngagementInvitationPayloadType | undefined;

  /**
   * Unique identifier assigned to the engagement invitation being retrieved.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the engagement associated with this invitation.This ID links the invitation to its corresponding engagement.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The title of the engagement invitation, summarizing the purpose or objectives of the opportunity shared by AWS.
   *
   * @public
   */
  EngagementTitle?: string | undefined;

  /**
   * The current status of the engagement invitation.
   *
   * @public
   */
  Status?: InvitationStatus | undefined;

  /**
   * The date when the engagement invitation was sent to the partner.
   *
   * @public
   */
  InvitationDate?: Date | undefined;

  /**
   * Indicates the date on which the engagement invitation will expire if not accepted by the partner.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * Specifies the AWS Account ID of the sender, which identifies the AWS team responsible for sharing the engagement invitation.
   *
   * @public
   */
  SenderAwsAccountId?: string | undefined;

  /**
   * The name of the AWS organization or team that sent the engagement invitation.
   *
   * @public
   */
  SenderCompanyName?: string | undefined;

  /**
   * Information about the partner organization or team that received the engagement invitation, including contact details and identifiers.
   *
   * @public
   */
  Receiver?: Receiver | undefined;

  /**
   * Indicates the catalog from which the engagement invitation details are retrieved. This field helps in identifying the appropriate catalog (e.g., `AWS` or `Sandbox`) used in the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * If the engagement invitation was rejected, this field specifies the reason provided by the partner for the rejection.
   *
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * Details of the engagement invitation payload, including specific data relevant to the invitation's contents, such as customer information and opportunity insights.
   *
   * @public
   */
  Payload?: Payload | undefined;

  /**
   * The message sent to the invited partner when the invitation was created.
   *
   * @public
   */
  InvitationMessage?: string | undefined;

  /**
   * The description of the engagement associated with this invitation.
   *
   * @public
   */
  EngagementDescription?: string | undefined;

  /**
   * A list of active members currently part of the Engagement. This array contains a maximum of 10 members, each represented by an object with the following properties.
   *
   * - CompanyName: The name of the member's company.
   * - WebsiteUrl: The website URL of the member's company.
   *
   * @public
   */
  ExistingMembers?: EngagementMemberSummary[] | undefined;

  /**
   * The enrichment data for the engagement associated with this invitation. You can view propensity scores, program eligibility, and lead readiness assessments before taking action on the invitation.
   *
   * @public
   */
  EnrichmentContext?: EnrichmentContext | undefined;
}

/**
 * Defines sorting options for retrieving Engagement Invitations. Sorting can be done based on various criteria like the invitation date or status.
 *
 * @public
 */
export interface OpportunityEngagementInvitationSort {
  /**
   * Defines the order in which the Engagement Invitations are sorted. The values can be `ASC` (ascending) or `DESC` (descending).
   *
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * Specifies the field by which the Engagement Invitations are sorted. Common values include `InvitationDate` and `Status`.
   *
   * @public
   */
  SortBy: OpportunityEngagementInvitationSortName | undefined;
}

/**
 * @public
 */
export interface ListEngagementInvitationsRequest {
  /**
   * Specifies the catalog from which to list the engagement invitations. Use `AWS` for production invitations or `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies the maximum number of engagement invitations to return in the response. If more results are available, a pagination token will be provided.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token used to retrieve additional pages of results when the response to a previous request was truncated. Pass this token to continue listing invitations from where the previous call left off.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the sorting options for listing engagement invitations. Invitations can be sorted by fields such as `InvitationDate` or `Status` to help partners view results in their preferred order.
   *
   * @public
   */
  Sort?: OpportunityEngagementInvitationSort | undefined;

  /**
   * Defines the type of payload associated with the engagement invitations to be listed. The attributes in this payload help decide on acceptance or rejection of the invitation.
   *
   * @public
   */
  PayloadType?: EngagementInvitationPayloadType[] | undefined;

  /**
   * Specifies the type of participant for which to list engagement invitations. Identifies the role of the participant.
   *
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * Status values to filter the invitations.
   *
   * @public
   */
  Status?: InvitationStatus[] | undefined;

  /**
   * Retrieves a list of engagement invitation summaries based on specified filters. The ListEngagementInvitations operation allows you to view all invitations that you have sent or received. You must specify the ParticipantType to filter invitations where you are either the SENDER or the RECEIVER. Invitations will automatically expire if not accepted within 15 days.
   *
   * @public
   */
  EngagementIdentifier?: string[] | undefined;

  /**
   * List of sender AWS account IDs to filter the invitations.
   *
   * @public
   */
  SenderAwsAccountId?: string[] | undefined;
}

/**
 * Provides a summarized view of the Engagement Invitation, including details like the identifier, status, and sender. This summary helps partners track and manage AWS originated opportunities.
 *
 * @public
 */
export interface EngagementInvitationSummary {
  /**
   * The Amazon Resource Name (ARN) of the Engagement Invitation. The ARN is a unique identifier that allows partners to reference the invitation in their system and manage its lifecycle.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Describes the type of payload associated with the Engagement Invitation, such as `Opportunity` or `MarketplaceOffer`. This helps partners understand the nature of the engagement request from AWS.
   *
   * @public
   */
  PayloadType?: EngagementInvitationPayloadType | undefined;

  /**
   * Represents the unique identifier of the Engagement Invitation. This identifier is used to track the invitation and to manage responses like acceptance or rejection.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the Engagement associated with this invitation. This links the invitation to its parent Engagement.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * Provides a short title or description of the Engagement Invitation. This title helps partners quickly identify and differentiate between multiple engagement opportunities.
   *
   * @public
   */
  EngagementTitle?: string | undefined;

  /**
   * Represents the current status of the Engagement Invitation, such as `Pending`, `Accepted`, or `Rejected`. The status helps track the progress and response to the invitation.
   *
   * @public
   */
  Status?: InvitationStatus | undefined;

  /**
   * Indicates the date when the Engagement Invitation was sent to the partner. This provides context for when the opportunity was shared and helps in tracking the timeline for engagement.
   *
   * @public
   */
  InvitationDate?: Date | undefined;

  /**
   * Indicates the date and time when the Engagement Invitation will expire. After this date, the invitation can no longer be accepted, and the opportunity will be unavailable to the partner.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * Specifies the AWS account ID of the sender who initiated the Engagement Invitation. This allows the partner to identify the AWS entity or representative responsible for sharing the opportunity.
   *
   * @public
   */
  SenderAwsAccountId?: string | undefined;

  /**
   * Indicates the name of the company or AWS division that sent the Engagement Invitation. This information is useful for partners to know which part of AWS is requesting engagement.
   *
   * @public
   */
  SenderCompanyName?: string | undefined;

  /**
   * Specifies the partner company or individual that received the Engagement Invitation. This field is important for tracking who the invitation was sent to within the partner organization.
   *
   * @public
   */
  Receiver?: Receiver | undefined;

  /**
   * Specifies the catalog in which the Engagement Invitation resides. This can be either the `AWS` or `Sandbox` catalog, indicating whether the opportunity is live or being tested.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Identifies the role of the caller in the engagement invitation.
   *
   * @public
   */
  ParticipantType?: ParticipantType | undefined;
}

/**
 * @public
 */
export interface ListEngagementInvitationsResponse {
  /**
   * An array containing summaries of engagement invitations. Each summary includes information such as the invitation title, invitation date, and the current status of the invitation.
   *
   * @public
   */
  EngagementInvitationSummaries?: EngagementInvitationSummary[] | undefined;

  /**
   * A pagination token returned when there are more results available than can be returned in a single call. Use this token to retrieve additional pages of engagement invitation summaries.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectEngagementInvitationRequest {
  /**
   * This is the catalog that's associated with the engagement invitation. Acceptable values are `AWS` or `Sandbox`, and these values determine the environment in which the opportunity is managed.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * This is the unique identifier of the rejected `EngagementInvitation`. Providing the correct identifier helps to ensure that the intended invitation is rejected.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * This describes the reason for rejecting the engagement invitation, which helps AWS track usage patterns. Acceptable values include the following:
   *
   * - *Customer problem unclear:* The customer's problem isn't understood.
   * - *Next steps unclear:* The next steps required to proceed aren't understood.
   * - *Unable to support:* The partner is unable to provide support due to resource or capability constraints.
   * - *Duplicate of partner referral:* The opportunity is a duplicate of an existing referral.
   * - *Other:* Any reason not covered by other values.
   *
   * @public
   */
  RejectionReason?: string | undefined;
}

/**
 * @public
 */
export interface GetSellingSystemSettingsRequest {
  /**
   * Specifies the catalog in which the settings are defined. Acceptable values include `AWS` for production and `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;
}

/**
 * @public
 */
export interface GetSellingSystemSettingsResponse {
  /**
   * Specifies the catalog in which the settings are defined. Acceptable values include `AWS` for production and `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies the ARN of the IAM Role used for resource snapshot job executions.
   *
   * @public
   */
  ResourceSnapshotJobRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.
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
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * An object that contains the customer's `Account` and `Contact`.
 *
 * @public
 */
export interface Customer {
  /**
   * An object that contains the customer's account details.
   *
   * @public
   */
  Account?: Account | undefined;

  /**
   * Represents the contact details for individuals associated with the customer of the `Opportunity`. This field captures relevant contacts, including decision-makers, influencers, and technical stakeholders within the customer organization. These contacts are key to progressing the opportunity.
   *
   * @public
   */
  Contacts?: Contact[] | undefined;
}

/**
 * Read-only; shows the last 50 values and change dates for the `NextSteps` field.
 *
 * @public
 */
export interface NextStepsHistory {
  /**
   * Indicates the step's execution details.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * Indicates the step execution time.
   *
   * @public
   */
  Time: Date | undefined;
}

/**
 * An object that contains the `Opportunity` lifecycle's details.
 *
 * @public
 */
export interface LifeCycle {
  /**
   * Specifies the current stage of the `Opportunity`'s lifecycle as it maps to Amazon Web Services stages from the current stage in the partner CRM. This field provides a translated value of the stage, and offers insight into the `Opportunity`'s progression in the sales cycle, according to Amazon Web Services definitions.
   *
   * > **Note:** A lead and a prospect must be further matured to a `Qualified` opportunity before submission. Opportunities that were closed/lost before submission aren't suitable for submission.
   *
   * The descriptions of each sales stage are:
   *
   * - Prospect: Amazon Web Services identifies the opportunity. It can be active (Comes directly from the end customer through a lead) or latent (Your account team believes it exists based on research, account plans, sales plays).
   * - Qualified: Your account team engaged with the customer to discuss viability and requirements. The customer agreed that the opportunity is real, of interest, and may solve business/technical needs.
   * - Technical Validation: All parties understand the implementation plan.
   * - Business Validation: Pricing was proposed, and all parties agree to the steps to close.
   * - Committed: The customer signed the contract, but Amazon Web Services hasn't started billing.
   * - Launched: The workload is complete, and Amazon Web Services has started billing.
   * - Closed Lost: The opportunity is lost, and there are no steps to move forward.
   *
   * @public
   */
  Stage?: Stage | undefined;

  /**
   * Specifies the reason code when an opportunity is marked as *Closed Lost*. When you select an appropriate reason code, you communicate the context for closing the `Opportunity`, and aid in accurate reports and analysis of opportunity outcomes. The possible values are:
   *
   * - Customer Deficiency: The customer lacked necessary resources or capabilities.
   * - Delay/Cancellation of Project: The project was delayed or canceled.
   * - Legal/Tax/Regulatory: Legal, tax, or regulatory issues prevented progress.
   * - Lost to Competitor—Google: The opportunity was lost to Google.
   * - Lost to Competitor—Microsoft: The opportunity was lost to Microsoft.
   * - Lost to Competitor—SoftLayer: The opportunity was lost to SoftLayer.
   * - Lost to Competitor—VMWare: The opportunity was lost to VMWare.
   * - Lost to Competitor—Other: The opportunity was lost to a competitor not listed above.
   * - No Opportunity: There was no opportunity to pursue.
   * - On Premises Deployment: The customer chose an on-premises solution.
   * - Partner Gap: The partner lacked necessary resources or capabilities.
   * - Price: The price was not competitive or acceptable to the customer.
   * - Security/Compliance: Security or compliance issues prevented progress.
   * - Technical Limitations: Technical limitations prevented progress.
   * - Customer Experience: Issues related to the customer's experience impacted the decision.
   * - Other: Any reason not covered by the other values.
   * - People/Relationship/Governance: Issues related to people, relationships, or governance.
   * - Product/Technology: Issues related to the product or technology.
   * - Financial/Commercial: Financial or commercial issues impacted the decision.
   *
   * @public
   */
  ClosedLostReason?: ClosedLostReason | undefined;

  /**
   * Specifies the upcoming actions or tasks for the `Opportunity`. Use this field to communicate with Amazon Web Services about the next actions required for the `Opportunity`.
   *
   * @public
   */
  NextSteps?: string | undefined;

  /**
   * Specifies the date when Amazon Web Services expects to start significant billing, when the project finishes, and when it moves into production. This field informs the Amazon Web Services seller about when the opportunity launches and starts to incur Amazon Web Services usage.
   *
   * Ensure the `Target Close Date` isn't in the past.
   *
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * Indicates the review status of an opportunity referred by a partner. This field is read-only and only applicable for partner referrals. The possible values are:
   *
   * - Pending Submission: Not submitted for validation (editable).
   * - Submitted: Submitted for validation, and Amazon Web Services hasn't reviewed it (read-only).
   * - In Review: Amazon Web Services is validating (read-only).
   * - Action Required: Issues that Amazon Web Services highlights need to be addressed. Partners should use the `UpdateOpportunity` API action to update the opportunity and helps to ensure that all required changes are made. Only the following fields are editable when the `Lifecycle.ReviewStatus` is `Action Required`:
   *
   *   - Customer.Account.Address.City
   *   - Customer.Account.Address.CountryCode
   *   - Customer.Account.Address.PostalCode
   *   - Customer.Account.Address.StateOrRegion
   *   - Customer.Account.Address.StreetAddress
   *   - Customer.Account.WebsiteUrl
   *   - LifeCycle.TargetCloseDate
   *   - Project.ExpectedMonthlyAWSRevenue.Amount
   *   - Project.ExpectedMonthlyAWSRevenue.CurrencyCode
   *   - Project.CustomerBusinessProblem
   *   - PartnerOpportunityIdentifier
   *
   *   After updates, the opportunity re-enters the validation phase. This process repeats until all issues are resolved, and the opportunity's `Lifecycle.ReviewStatus` is set to `Approved` or `Rejected`.
   * - Approved: Validated and converted into the Amazon Web Services seller's pipeline (editable).
   * - Rejected: Disqualified (read-only).
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * Contains detailed feedback from Amazon Web Services when requesting additional information from partners. Provides specific guidance on what partners need to provide or clarify for opportunity validation, complementing the `ReviewStatusReason` field.
   *
   * @public
   */
  ReviewComments?: string | undefined;

  /**
   * Code indicating the validation decision during the Amazon Web Services opportunity review. Applies when status is `Rejected` or `Action Required`. Used to document validation results for AWS Partner Referrals and indicate when additional information is needed from partners as part of the APN Customer Engagement (ACE) program.
   *
   * @public
   */
  ReviewStatusReason?: string | undefined;

  /**
   * Captures a chronological record of the next steps or actions planned or taken for the current opportunity, along with the timestamp.
   *
   * @public
   */
  NextStepsHistory?: NextStepsHistory[] | undefined;
}

/**
 * An object that contains marketing details for the `Opportunity`.
 *
 * @public
 */
export interface Marketing {
  /**
   * Specifies the `Opportunity` marketing campaign code. The Amazon Web Services campaign code is a reference to specific marketing initiatives, promotions, or activities. This field captures the identifier used to track and categorize the `Opportunity` within marketing campaigns. If you don't have a campaign code, contact your Amazon Web Services point of contact to obtain one.
   *
   * @public
   */
  CampaignName?: string | undefined;

  /**
   * Indicates if the `Opportunity` was sourced from an Amazon Web Services marketing activity. Use the value `Marketing Activity`. Use `None` if it's not associated with an Amazon Web Services marketing activity. This field helps Amazon Web Services track the return on marketing investments and enables better distribution of marketing budgets among partners.
   *
   * @public
   */
  Source?: MarketingSource | undefined;

  /**
   * Specifies the marketing activity use case or purpose that led to the `Opportunity`'s creation or contact. This field captures the context or marketing activity's execution's intention and the direct correlation to the generated opportunity or contact. Must be empty when `Marketing.AWSFundingUsed = No`.
   *
   * Valid values: `AI/ML | Analytics | Application Integration | Blockchain | Business Applications | Cloud Financial Management | Compute | Containers | Customer Engagement | Databases | Developer Tools | End User Computing | Front End Web & Mobile | Game Tech | IoT | Management & Governance | Media Services | Migration & Transfer | Networking & Content Delivery | Quantum Technologies | Robotics | Satellite | Security | Serverless | Storage | VR & AR`
   *
   * @public
   */
  UseCases?: string[] | undefined;

  /**
   * Specifies the `Opportunity`'s channel that the marketing activity is associated with or was contacted through. This field provides information about the specific marketing channel that contributed to the generation of the lead or contact.
   *
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * Indicates if the `Opportunity` is a marketing development fund (MDF) funded activity.
   *
   * @public
   */
  AwsFundingUsed?: AwsFundingUsed | undefined;
}

/**
 * The expected duration of a partner's contract with the customer. Used to convert Total Contract Value (TCV) to Monthly Recurring Revenue (MRR) for opportunity dealsizing calculations.
 *
 * @public
 */
export interface ExpectedContractDuration {
  /**
   * The unit of measurement for the contract duration value. Currently accepts only `Months`.
   *
   * @public
   */
  Term: ExpectedContractDurationTerm | undefined;

  /**
   * A String representation of the contract duration as an integer, expressed in the unit defined by `Term`. Valid values range from `1` to `144`.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An object that contains the `Opportunity`'s project details.
 *
 * @public
 */
export interface Project {
  /**
   * Specifies the deployment or consumption model for your solution or service in the `Opportunity`'s context. You can select multiple options.
   *
   * Options' descriptions from the `Delivery Model` field are:
   *
   * - SaaS or PaaS: Your Amazon Web Services based solution deployed as SaaS or PaaS in your Amazon Web Services environment.
   * - BYOL or AMI: Your Amazon Web Services based solution deployed as BYOL or AMI in the end customer's Amazon Web Services environment.
   * - Managed Services: The end customer's Amazon Web Services business management (For example: Consulting, design, implementation, billing support, cost optimization, technical support).
   * - Professional Services: Offerings to help enterprise end customers achieve specific business outcomes for enterprise cloud adoption (For example: Advisory or transformation planning).
   * - Resell: Amazon Web Services accounts and billing management for your customers.
   * - Other: Delivery model not described above.
   *
   * @public
   */
  DeliveryModels?: DeliveryModel[] | undefined;

  /**
   * Represents the estimated amount that the customer is expected to spend on AWS services related to the opportunity. This helps in evaluating the potential financial value of the opportunity for AWS.
   *
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;

  /**
   * Optional. The expected duration of the contract associated with this opportunity. Partners use this value alongside expected customer spend to convert Total Contract Value (TCV) into Monthly Recurring Revenue (MRR).
   *
   * @public
   */
  ExpectedContractDuration?: ExpectedContractDuration | undefined;

  /**
   * Specifies the `Opportunity`'s title or name.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Specifies the Amazon Partner Network (APN) program that influenced the `Opportunity`. APN programs refer to specific partner programs or initiatives that can impact the `Opportunity`.
   *
   * Valid values: `APN Immersion Days | APN Solution Space | ATO (Authority to Operate) | AWS Marketplace Campaign | IS Immersion Day SFID Program | ISV Workload Migration | Migration Acceleration Program | P3 | Partner Launch Initiative | Partner Opportunity Acceleration Funded | The Next Smart | VMware Cloud on AWS | Well-Architected | Windows | Workspaces/AppStream Accelerator Program | WWPS NDPP`
   *
   * @public
   */
  ApnPrograms?: string[] | undefined;

  /**
   * Describes the problem the end customer has, and how the partner is helping. Utilize this field to provide a concise narrative that outlines the customer's business challenge or issue. Elaborate on how the partner's solution or offerings align to resolve the customer's business problem. Include relevant information about the partner's value proposition, unique selling points, and expertise to tackle the issue. Offer insights on how the proposed solution meets the customer's needs and provides value. Use concise language and precise descriptions to convey the context and significance of the `Opportunity`. The content in this field helps Amazon Web Services understand the nature of the `Opportunity` and the strategic fit of the partner's solution.
   *
   * @public
   */
  CustomerBusinessProblem?: string | undefined;

  /**
   * Specifies the proposed solution focus or type of workload for the Opportunity. This field captures the primary use case or objective of the proposed solution, and provides context and clarity to the addressed workload.
   *
   * Valid values: `AI Machine Learning and Analytics | Archiving | Big Data: Data Warehouse/Data Integration/ETL/Data Lake/BI | Blockchain | Business Applications: Mainframe Modernization | Business Applications & Contact Center | Business Applications & SAP Production | Centralized Operations Management | Cloud Management Tools | Cloud Management Tools & DevOps with Continuous Integration & Continuous Delivery (CICD) | Configuration, Compliance & Auditing | Connected Services | Containers & Serverless | Content Delivery & Edge Services | Database | Edge Computing/End User Computing | Energy | Enterprise Governance & Controls | Enterprise Resource Planning | Financial Services | Healthcare and Life Sciences | High Performance Computing | Hybrid Application Platform | Industrial Software | IOT | Manufacturing, Supply Chain and Operations | Media & High performance computing (HPC) | Migration/Database Migration | Monitoring, logging and performance | Monitoring & Observability | Networking | Outpost | SAP | Security & Compliance | Storage & Backup | Training | VMC | VMWare | Web development & DevOps`
   *
   * @public
   */
  CustomerUseCase?: string | undefined;

  /**
   * Specifies the current opportunity's parent opportunity identifier.
   *
   * @public
   */
  RelatedOpportunityIdentifier?: string | undefined;

  /**
   * Specifies the `Opportunity`'s sales activities conducted with the end customer. These activities help drive Amazon Web Services assignment priority.
   *
   * Valid values:
   *
   * - Initialized discussions with customer: Initial conversations with the customer to understand their needs and introduce your solution.
   * - Customer has shown interest in solution: After initial discussions, the customer is interested in your solution.
   * - Conducted POC/demo: You conducted a proof of concept (POC) or demonstration of the solution for the customer.
   * - In evaluation/planning stage: The customer is evaluating the solution and planning potential implementation.
   * - Agreed on solution to Business Problem: Both parties agree on how the solution addresses the customer's business problem.
   * - Completed Action Plan: A detailed action plan is complete and outlines the steps for implementation.
   * - Finalized Deployment Need: Both parties agree with and finalized the deployment needs.
   * - SOW Signed: Both parties signed a statement of work (SOW), and formalize the agreement and detail the project scope and deliverables.
   *
   * @public
   */
  SalesActivities?: SalesActivity[] | undefined;

  /**
   * Name of the `Opportunity`'s competitor (if any). Use `Other` to submit a value not in the picklist.
   *
   * @public
   */
  CompetitorName?: CompetitorName | undefined;

  /**
   * Only allowed when `CompetitorNames` has `Other` selected.
   *
   * @public
   */
  OtherCompetitorNames?: string | undefined;

  /**
   * Specifies the offered solution for the customer's business problem when the `RelatedEntityIdentifiers.Solutions` field value is `Other`.
   *
   * @public
   */
  OtherSolutionDescription?: string | undefined;

  /**
   * Captures additional comments or information for the `Opportunity` that weren't captured in other fields.
   *
   * @public
   */
  AdditionalComments?: string | undefined;

  /**
   * AWS partition where the opportunity will be deployed. Possible values: `aws-eusc` for AWS European Sovereign Cloud, `null` for all other partitions.
   *
   * @public
   */
  AwsPartition?: AwsPartition | undefined;
}

/**
 * Specifies a customer's procurement terms details. Required only for partners in eligible programs.
 *
 * @public
 */
export interface SoftwareRevenue {
  /**
   * Specifies the customer's intended payment type agreement or procurement method to acquire the solution or service outlined in the `Opportunity`.
   *
   * @public
   */
  DeliveryModel?: RevenueModel | undefined;

  /**
   * Specifies the payment value (amount and currency).
   *
   * @public
   */
  Value?: MonetaryValue | undefined;

  /**
   * Specifies the `Opportunity`'s customer engagement start date for the contract's effectiveness.
   *
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * Specifies the expiration date for the contract between the customer and Amazon Web Services partner. It signifies the termination date of the agreed-upon engagement period between both parties.
   *
   * @public
   */
  ExpirationDate?: string | undefined;
}

/**
 * @public
 */
export interface CreateOpportunityRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunity is created in. Use `AWS` to create opportunities in the Amazon Web Services catalog, and `Sandbox` for testing in secure, isolated environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Identifies the type of support the partner needs from Amazon Web Services.
   *
   * Valid values:
   *
   * - Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.
   * - Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.
   * - Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.
   * - Cosell—Pricing Assistance: Connect with an Amazon Web Services seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).
   * - Cosell—Technical Consultation: Connect with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.
   * - Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.
   * - Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).
   * - Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs Amazon Web Services RFx support.
   *
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * Indicates whether the `Opportunity` pertains to a national security project. This field must be set to `true` only when the customer's industry is *Government*. Additional privacy and security measures apply during the review and management process for opportunities marked as `NationalSecurity`.
   *
   * @public
   */
  NationalSecurity?: NationalSecurity | undefined;

  /**
   * Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload to the partner.
   *
   * This field allows partners to link an opportunity to their CRM, which helps to ensure seamless integration and accurate synchronization between the Partner Central API and the partner's internal systems.
   *
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * Specifies customer details associated with the `Opportunity`.
   *
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * An object that contains project details for the `Opportunity`.
   *
   * @public
   */
  Project?: Project | undefined;

  /**
   * Specifies the opportunity type as a renewal, new, or expansion.
   *
   * Opportunity types:
   *
   * - New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.
   * - Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.
   * - Expansion opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer.
   *
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * This object contains marketing details and is optional for an opportunity.
   *
   * @public
   */
  Marketing?: Marketing | undefined;

  /**
   * Specifies details of a customer's procurement terms. This is required only for partners in eligible programs.
   *
   * @public
   */
  SoftwareRevenue?: SoftwareRevenue | undefined;

  /**
   * Required to be unique, and should be unchanging, it can be randomly generated or a meaningful string.
   *
   * Default: None
   *
   * Best practice: To help ensure uniqueness and avoid conflicts, use a Universally Unique Identifier (UUID) as the `ClientToken`. You can use standard libraries from most programming languages to generate this. If you use the same client token, the API returns the following error: "Conflicting client token submitted for a new request body."
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * An object that contains lifecycle details for the `Opportunity`.
   *
   * @public
   */
  LifeCycle?: LifeCycle | undefined;

  /**
   * Specifies the origin of the opportunity, indicating if it was sourced from Amazon Web Services or the partner. For all opportunities created with `Catalog: AWS`, this field must only be `Partner Referral`. However, when using `Catalog: Sandbox`, you can set this field to `AWS Referral` to simulate Amazon Web Services referral creation. This allows Amazon Web Services-originated flows testing in the sandbox catalog.
   *
   * @public
   */
  Origin?: OpportunityOrigin | undefined;

  /**
   * Represents the internal team handling the opportunity. Specify collaborating members of this opportunity who are within the partner's organization.
   *
   * @public
   */
  OpportunityTeam?: Contact[] | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOpportunityResponse {
  /**
   * Read-only, system-generated `Opportunity` unique identifier. Amazon Web Services creates this identifier, and it's used for all subsequent opportunity actions, such as updates, associations, and submissions. It helps to ensure that each opportunity is accurately tracked and managed.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner.
   *
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * `DateTime` when the opportunity was last modified. When the `Opportunity` is created, its value is `CreatedDate`.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DisassociateOpportunityRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunity disassociation is made in. Use `AWS` to disassociate opportunities in the Amazon Web Services catalog, and `Sandbox` for testing in secure, isolated environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The opportunity's unique identifier for when you want to disassociate it from related entities. This identifier helps to ensure that the correct opportunity is updated.
   *
   * Validation: Ensure that the provided identifier corresponds to an existing opportunity in the Amazon Web Services system because incorrect identifiers result in an error and no changes are made.
   *
   * @public
   */
  OpportunityIdentifier: string | undefined;

  /**
   * The type of the entity that you're disassociating from the opportunity. When you specify the entity type, it helps the system correctly process the disassociation request to ensure that the right connections are removed.
   *
   * Examples of entity types include Partner Solution, Amazon Web Services product, and Amazon Web Services Marketplaceoffer. Ensure that the value matches one of the expected entity types.
   *
   * Validation: Provide a valid entity type to help ensure successful disassociation. An invalid or incorrect entity type results in an error.
   *
   * @public
   */
  RelatedEntityType: RelatedEntityType | undefined;

  /**
   * The related entity's identifier that you want to disassociate from the opportunity. Depending on the type of entity, this could be a simple identifier or an Amazon Resource Name (ARN) for entities managed through Amazon Web Services Marketplace.
   *
   * For Amazon Web Services Marketplace entities, use the Amazon Web Services Marketplace API to obtain the necessary ARNs. For guidance on retrieving these ARNs, see [Amazon Web Services MarketplaceUsing the Amazon Web Services Marketplace Catalog API](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html).
   *
   * Validation: Ensure the identifier or ARN is valid and corresponds to an existing entity. An incorrect or invalid identifier results in an error.
   *
   * @public
   */
  RelatedEntityIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAwsOpportunitySummaryRequest {
  /**
   * Specifies the catalog in which the AWS Opportunity is located. Accepted values include `AWS` for production opportunities or `Sandbox` for testing purposes. The catalog determines which environment the opportunity data is pulled from.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier for the related partner opportunity. Use this field to correlate an AWS opportunity with its corresponding partner opportunity.
   *
   * @public
   */
  RelatedOpportunityIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAwsOpportunitySummaryResponse {
  /**
   * Provides the unique identifier of the related partner opportunity, allowing partners to link the AWS Opportunity to their corresponding opportunity in their CRM system.
   *
   * @public
   */
  RelatedOpportunityId?: string | undefined;

  /**
   * Specifies whether the AWS Opportunity originated from AWS or the partner. This helps distinguish between opportunities that were sourced by AWS and those referred by the partner.
   *
   * @public
   */
  Origin?: OpportunityOrigin | undefined;

  /**
   * Specifies the type of involvement AWS has in the opportunity, such as direct cosell or advisory support. This field helps partners understand the role AWS plays in advancing the opportunity.
   *
   * @public
   */
  InvolvementType?: SalesInvolvementType | undefined;

  /**
   * Defines the visibility level for the AWS Opportunity. Use `Full` visibility for most cases, while `Limited` visibility is reserved for special programs or sensitive opportunities.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * Contains lifecycle information for the AWS Opportunity, including review status, stage, and target close date. This field is crucial for partners to monitor the progression of the opportunity.
   *
   * @public
   */
  LifeCycle?: AwsOpportunityLifeCycle | undefined;

  /**
   * Details the AWS opportunity team, including members involved. This information helps partners know who from AWS is engaged and what their role is.
   *
   * @public
   */
  OpportunityTeam?: AwsTeamMember[] | undefined;

  /**
   * Provides insights into the AWS Opportunity, including engagement score and recommended actions that AWS suggests for the partner.
   *
   * @public
   */
  Insights?: AwsOpportunityInsights | undefined;

  /**
   * Provides a reason for any changes in the involvement type of AWS in the opportunity. This field is used to track why the level of AWS engagement has changed from `For Visibility Only` to `Co-sell` offering transparency into the partnership dynamics.
   *
   * @public
   */
  InvolvementTypeChangeReason?: InvolvementTypeChangeReason | undefined;

  /**
   * Lists related entity identifiers, such as AWS products or partner solutions, associated with the AWS Opportunity. These identifiers provide additional context and help partners understand which AWS services are involved.
   *
   * @public
   */
  RelatedEntityIds?: AwsOpportunityRelatedEntities | undefined;

  /**
   * Provides details about the customer associated with the AWS Opportunity, including account information, industry, and other customer data. These details help partners understand the business context of the opportunity.
   *
   * @public
   */
  Customer?: AwsOpportunityCustomer | undefined;

  /**
   * Provides details about the project associated with the AWS Opportunity, including the customer’s business problem, expected outcomes, and project scope. This information is crucial for understanding the broader context of the opportunity.
   *
   * @public
   */
  Project?: AwsOpportunityProject | undefined;

  /**
   * Engagement classification for this opportunity. Read-only. Null before scoring. Known values: `AWS Field-engaged`, `Agent-engaged`, `Partner-led`.
   *
   * @public
   */
  CosellMotion?: string | undefined;

  /**
   * Seller-provided PARC deal terms: commitment value, discount, and contract dates.
   *
   * @public
   */
  SoftwareRevenue?: AwsSoftwareRevenue | undefined;

  /**
   * Specifies the catalog in which the AWS Opportunity exists. This is the environment (e.g., `AWS` or `Sandbox`) where the opportunity is being managed.
   *
   * @public
   */
  Catalog: string | undefined;
}

/**
 * @public
 */
export interface GetOpportunityRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunity is fetched from. Use `AWS` to retrieve opportunities in the Amazon Web Services catalog, and `Sandbox` to retrieve opportunities in a secure, isolated testing environment.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Read-only, system generated `Opportunity` unique identifier.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * This field provides the associations' information for other entities with the opportunity. These entities include identifiers for `AWSProducts`, `Partner Solutions`, and `AWSMarketplaceOffers`.
 *
 * @public
 */
export interface RelatedEntityIdentifiers {
  /**
   * Takes one value per opportunity. Each value is an Amazon Resource Name (ARN), in this format: `"offers": ["arn:aws:aws-marketplace:us-east-1:999999999999:AWSMarketplace/Offer/offer-sampleOffer32"]`.
   *
   * Use the [ListEntities](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListEntities.html) action in the Marketplace Catalog APIs for a list of offers in the associated Marketplace seller account.
   *
   * @public
   */
  AwsMarketplaceOffers?: string[] | undefined;

  /**
   * Enables the association of AWS Marketplace offer sets with the `Opportunity`. Offer sets allow grouping multiple related marketplace offers together for comprehensive solution packaging. Each value is an Amazon Resource Name (ARN) in this format: `arn:aws:aws-marketplace:us-east-1:999999999999:AWSMarketplace/OfferSet/offerset-sampleOfferSet32`.
   *
   * @public
   */
  AwsMarketplaceOfferSets?: string[] | undefined;

  /**
   * Enables partner solutions or offerings' association with an opportunity. To associate a solution, provide the solution's unique identifier, which you can obtain with the `ListSolutions` operation.
   *
   * If the specific solution identifier is not available, you can use the value `Other` and provide details about the solution in the `otherSolutionOffered` field. But when the opportunity reaches the `Committed` stage or beyond, the `Other` value cannot be used, and a valid solution identifier must be provided.
   *
   * By associating the relevant solutions with the opportunity, you can communicate the offerings that are being considered or implemented to address the customer's business problem.
   *
   * @public
   */
  Solutions?: string[] | undefined;

  /**
   * Enables the association of specific Amazon Web Services products with the `Opportunity`. Partners can indicate the relevant Amazon Web Services products for the `Opportunity`'s solution and align with the customer's needs. Returns multiple values separated by commas. For example, `"AWSProducts" : ["AmazonRedshift", "AWSAppFabric", "AWSCleanRooms"]`.
   *
   * Use the file with the list of Amazon Web Services products hosted on GitHub: [Amazon Web Services products](https://github.com/aws-samples/partner-crm-integration-samples/blob/main/resources/aws_products.json).
   *
   * @public
   */
  AwsProducts?: string[] | undefined;

  /**
   * Specifies the AWS Marketplace solutions to associate with the `Opportunity`. Each value is an Amazon Resource Name (ARN) that identifies a solution listing in AWS Marketplace.
   *
   * @public
   */
  AwsMarketplaceSolutions?: string[] | undefined;

  /**
   * Specifies the AWS Marketplace products to associate with the `Opportunity`. Each value is an Amazon Resource Name (ARN) that identifies a product listing in AWS Marketplace.
   *
   * @public
   */
  AwsMarketplaceProducts?: string[] | undefined;
}

/**
 * @public
 */
export interface GetOpportunityResponse {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunity information is retrieved from. Use `AWS` to retrieve opportunities in the Amazon Web Services catalog, and `Sandbox` to retrieve opportunities in a secure and isolated testing environment.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Identifies the type of support the partner needs from Amazon Web Services.
   *
   * Valid values:
   *
   * - Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.
   * - Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.
   * - Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.
   * - Cosell—Pricing Assistance: Connect with an Amazon Web Services seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).
   * - Cosell—Technical Consultation: Connect with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.
   * - Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.
   * - Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).
   * - Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs Amazon Web Services RFx support.
   *
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * Indicates whether the `Opportunity` pertains to a national security project. This field must be set to `true` only when the customer's industry is *Government*. Additional privacy and security measures apply during the review and management process for opportunities marked as `NationalSecurity`.
   *
   * @public
   */
  NationalSecurity?: NationalSecurity | undefined;

  /**
   * Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner.
   *
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * Specifies details of the customer associated with the `Opportunity`.
   *
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * An object that contains project details summary for the `Opportunity`.
   *
   * @public
   */
  Project?: Project | undefined;

  /**
   * Specifies the opportunity type as renewal, new, or expansion.
   *
   * Opportunity types:
   *
   * - New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.
   * - Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, which helps to ensure service continuity.
   * - Expansion opportunity: Represents an opportunity to expand the scope of a customer's contract or subscription, either by adding new services or increasing the volume of existing services.
   *
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * An object that contains marketing details for the `Opportunity`.
   *
   * @public
   */
  Marketing?: Marketing | undefined;

  /**
   * Specifies details of a customer's procurement terms. Required only for partners in eligible programs.
   *
   * @public
   */
  SoftwareRevenue?: SoftwareRevenue | undefined;

  /**
   * Read-only, system generated `Opportunity` unique identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the opportunity.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * `DateTime` when the opportunity was last modified.
   *
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * `DateTime` when the `Opportunity` was last created.
   *
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * Provides information about the associations of other entities with the opportunity. These entities include identifiers for `AWSProducts`, `Partner Solutions`, and `AWSMarketplaceOffers`.
   *
   * @public
   */
  RelatedEntityIdentifiers: RelatedEntityIdentifiers | undefined;

  /**
   * An object that contains lifecycle details for the `Opportunity`.
   *
   * @public
   */
  LifeCycle?: LifeCycle | undefined;

  /**
   * Represents the internal team handling the opportunity. Specify the members involved in collaborating on this opportunity within the partner's organization.
   *
   * @public
   */
  OpportunityTeam?: Contact[] | undefined;
}

/**
 * Filter for opportunities based on creation date range.
 *
 * @public
 */
export interface CreatedDateFilter {
  /**
   * Filter opportunities created after this date.
   *
   * @public
   */
  AfterCreatedDate?: Date | undefined;

  /**
   * Filter opportunities created before this date.
   *
   * @public
   */
  BeforeCreatedDate?: Date | undefined;
}

/**
 * Defines a filter to retrieve opportunities based on the last modified date. This filter is useful for tracking changes or updates to opportunities over time.
 *
 * @public
 */
export interface LastModifiedDate {
  /**
   * Specifies the date after which the opportunities were modified. Use this filter to retrieve only those opportunities that were modified after a given timestamp.
   *
   * @public
   */
  AfterLastModifiedDate?: Date | undefined;

  /**
   * Specifies the date before which the opportunities were modified. Use this filter to retrieve only those opportunities that were modified before a given timestamp.
   *
   * @public
   */
  BeforeLastModifiedDate?: Date | undefined;
}

/**
 * Object that configures response sorting.
 *
 * @public
 */
export interface OpportunitySort {
  /**
   * Sort order.
   *
   * Default: `Descending`
   *
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * Field name to sort by.
   *
   * @public
   */
  SortBy: OpportunitySortName | undefined;
}

/**
 * Filters opportunities based on their target close date.
 *
 * @public
 */
export interface TargetCloseDateFilter {
  /**
   * Filters opportunities with a target close date after this date. Use the `YYYY-MM-DD` format.
   *
   * @public
   */
  AfterTargetCloseDate?: string | undefined;

  /**
   * Filters opportunities with a target close date before this date. Use the `YYYY-MM-DD` format.
   *
   * @public
   */
  BeforeTargetCloseDate?: string | undefined;
}

/**
 * @public
 */
export interface ListOpportunitiesRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunities are listed in. Use `AWS` for listing real opportunities in the Amazon Web Services catalog, and `Sandbox` for testing in secure, isolated environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies the maximum number of results to return in a single call. This limits the number of opportunities returned in the response to avoid providing too many results at once.
   *
   * Default: 20
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An object that specifies how the response is sorted. The default `Sort.SortBy` value is `LastModifiedDate`.
   *
   * @public
   */
  Sort?: OpportunitySort | undefined;

  /**
   * Filters the opportunities based on their last modified date. This filter helps retrieve opportunities that were updated after the specified date, allowing partners to track recent changes or updates.
   *
   * @public
   */
  LastModifiedDate?: LastModifiedDate | undefined;

  /**
   * Filters the opportunities based on the opportunity identifier. This allows partners to retrieve specific opportunities by providing their unique identifiers, ensuring precise results.
   *
   * @public
   */
  Identifier?: string[] | undefined;

  /**
   * Filters the opportunities based on their lifecycle stage. This filter allows partners to retrieve opportunities at various stages in the sales cycle, such as `Qualified`, `Technical Validation`, `Business Validation`, or `Closed Won`.
   *
   * @public
   */
  LifeCycleStage?: Stage[] | undefined;

  /**
   * Filters the opportunities based on their current lifecycle approval status. Use this filter to retrieve opportunities with statuses such as `Pending Submission`, `In Review`, `Action Required`, or `Approved`.
   *
   * @public
   */
  LifeCycleReviewStatus?: ReviewStatus[] | undefined;

  /**
   * Filters the opportunities based on the customer's company name. This allows partners to search for opportunities associated with a specific customer by matching the provided company name string.
   *
   * @public
   */
  CustomerCompanyName?: string[] | undefined;

  /**
   * Filter opportunities by creation date criteria.
   *
   * @public
   */
  CreatedDate?: CreatedDateFilter | undefined;

  /**
   * Filters opportunities based on their target close date. This filter helps retrieve opportunities with an expected close date before or after a specified date.
   *
   * @public
   */
  TargetCloseDate?: TargetCloseDateFilter | undefined;
}

/**
 * An object that contains a `Customer` object's subset of fields.
 *
 * @public
 */
export interface CustomerSummary {
  /**
   * An object that contains a customer's account details.
   *
   * @public
   */
  Account?: AccountSummary | undefined;
}

/**
 * An object that contains a `LifeCycle` object's subset of fields.
 *
 * @public
 */
export interface LifeCycleSummary {
  /**
   * Specifies the current stage of the `Opportunity`'s lifecycle as it maps to Amazon Web Services stages from the current stage in the partner CRM. This field provides a translated value of the stage, and offers insight into the `Opportunity`'s progression in the sales cycle, according to Amazon Web Services definitions.
   *
   * > **Note:** A lead and a prospect must be further matured to a `Qualified` opportunity before submission. Opportunities that were closed/lost before submission aren't suitable for submission.
   *
   * The descriptions of each sales stage are:
   *
   * - Prospect: Amazon Web Services identifies the opportunity. It can be active (Comes directly from the end customer through a lead) or latent (Your account team believes it exists based on research, account plans, sales plays).
   * - Qualified: Your account team engaged with the customer to discuss viability and understand requirements. The customer agreed that the opportunity is real, of interest, and may solve business/technical needs.
   * - Technical Validation: All parties understand the implementation plan.
   * - Business Validation: Pricing was proposed, and all parties agree to the steps to close.
   * - Committed: The customer signed the contract, but Amazon Web Services hasn't started billing.
   * - Launched: The workload is complete, and Amazon Web Services has started billing.
   * - Closed Lost: The opportunity is lost, and there are no steps to move forward.
   *
   * @public
   */
  Stage?: Stage | undefined;

  /**
   * Specifies the reason code when an opportunity is marked as *Closed Lost*. When you select an appropriate reason code, you communicate the context for closing the `Opportunity`, and aid in accurate reports and analysis of opportunity outcomes.
   *
   * @public
   */
  ClosedLostReason?: ClosedLostReason | undefined;

  /**
   * Specifies the upcoming actions or tasks for the `Opportunity`. This field is utilized to communicate to Amazon Web Services the next actions required for the `Opportunity`.
   *
   * @public
   */
  NextSteps?: string | undefined;

  /**
   * Specifies the date when Amazon Web Services expects to start significant billing, when the project finishes, and when it moves into production. This field informs the Amazon Web Services seller about when the opportunity launches and starts to incur Amazon Web Services usage.
   *
   * Ensure the `Target Close Date` isn't in the past.
   *
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * Indicates the review status of a partner referred opportunity. This field is read-only and only applicable for partner referrals. Valid values:
   *
   * - Pending Submission: Not submitted for validation (editable).
   * - Submitted: Submitted for validation and not yet Amazon Web Services reviewed (read-only).
   * - In Review: Undergoing Amazon Web Services validation (read-only).
   * - Action Required: Address any issues Amazon Web Services highlights. Use the `UpdateOpportunity` API action to update the opportunity, and ensure you make all required changes. Only these fields are editable when the `Lifecycle.ReviewStatus` is `Action Required`:
   *
   *   - Customer.Account.Address.City
   *   - Customer.Account.Address.CountryCode
   *   - Customer.Account.Address.PostalCode
   *   - Customer.Account.Address.StateOrRegion
   *   - Customer.Account.Address.StreetAddress
   *   - Customer.Account.WebsiteUrl
   *   - LifeCycle.TargetCloseDate
   *   - Project.ExpectedCustomerSpend.Amount
   *   - Project.ExpectedCustomerSpend.CurrencyCode
   *   - Project.CustomerBusinessProblem
   *   - PartnerOpportunityIdentifier
   *
   *   After updates, the opportunity re-enters the validation phase. This process repeats until all issues are resolved, and the opportunity's `Lifecycle.ReviewStatus` is set to `Approved` or `Rejected`.
   * - Approved: Validated and converted into the Amazon Web Services seller's pipeline (editable).
   * - Rejected: Disqualified (read-only).
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * Indicates why an opportunity was sent back for further details. Partners must take corrective action based on the `ReviewComments`.
   *
   * @public
   */
  ReviewComments?: string | undefined;

  /**
   * Indicates the reason a specific decision was taken during the opportunity review process. This field combines the reasons for both disqualified and action required statuses, and provides clarity for why an opportunity was disqualified or required further action.
   *
   * @public
   */
  ReviewStatusReason?: string | undefined;
}

/**
 * An object that contains a `Project` object's subset of fields.
 *
 * @public
 */
export interface ProjectSummary {
  /**
   * Specifies your solution or service's deployment or consumption model in the `Opportunity`'s context. You can select multiple options.
   *
   * Options' descriptions from the `Delivery Model` field are:
   *
   * - SaaS or PaaS: Your Amazon Web Services based solution deployed as SaaS or PaaS in your Amazon Web Services environment.
   * - BYOL or AMI: Your Amazon Web Services based solution deployed as BYOL or AMI in the end customer's Amazon Web Services environment.
   * - Managed Services: The end customer's Amazon Web Services business management (For example: Consulting, design, implementation, billing support, cost optimization, technical support).
   * - Professional Services: Offerings to help enterprise end customers achieve specific business outcomes for enterprise cloud adoption (For example: Advisory or transformation planning).
   * - Resell: Amazon Web Services accounts and billing management for your customers.
   * - Other: Delivery model not described above.
   *
   * @public
   */
  DeliveryModels?: DeliveryModel[] | undefined;

  /**
   * Provides a summary of the expected customer spend for the project, offering a high-level view of the potential financial impact.
   *
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;

  /**
   * Optional. The expected contract duration for this opportunity, representing the anticipated length of the contract in the unit specified by `Term`.
   *
   * @public
   */
  ExpectedContractDuration?: ExpectedContractDuration | undefined;
}

/**
 * An object that contains an `Opportunity`'s subset of fields.
 *
 * @public
 */
export interface OpportunitySummary {
  /**
   * Specifies the catalog associated with the opportunity, either `AWS` or `Sandbox`. This indicates the environment in which the opportunity is managed.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Read-only, system-generated `Opportunity` unique identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the opportunity. This globally unique identifier can be used for IAM policies and cross-service references.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Specifies the `Opportunity`'s unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner. It allows partners to link an opportunity to their CRM.
   *
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * Specifies opportunity type as a renewal, new, or expansion.
   *
   * Opportunity types:
   *
   * - New Opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.
   * - Renewal Opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.
   * - Expansion Opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer.
   *
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * `DateTime` when the `Opportunity` was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * `DateTime` when the `Opportunity` was last created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * An object that contains the `Opportunity`'s lifecycle details.
   *
   * @public
   */
  LifeCycle?: LifeCycleSummary | undefined;

  /**
   * An object that contains the `Opportunity`'s customer details.
   *
   * @public
   */
  Customer?: CustomerSummary | undefined;

  /**
   * An object that contains the `Opportunity`'s project details summary.
   *
   * @public
   */
  Project?: ProjectSummary | undefined;
}

/**
 * @public
 */
export interface ListOpportunitiesResponse {
  /**
   * An array that contains minimal details for opportunities that match the request criteria. This summary view provides a quick overview of relevant opportunities.
   *
   * @public
   */
  OpportunitySummaries: OpportunitySummary[] | undefined;

  /**
   * A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitOpportunityRequest {
  /**
   * Specifies the catalog related to the request. Valid values are:
   *
   * - AWS: Submits the opportunity request from the production AWS environment.
   * - Sandbox: Submits the opportunity request from a sandbox environment used for testing or development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The identifier of the Opportunity previously created by partner and needs to be submitted.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Specifies the level of AWS sellers' involvement on the opportunity. Valid values:
   *
   * - `Co-sell`: Indicates the user wants to co-sell with AWS. Share the opportunity with AWS to receive deal assistance and support.
   * - `For Visibility Only`: Indicates that the user does not need support from AWS Sales Rep. Share this opportunity with AWS for visibility only, you will not receive deal assistance and support.
   *
   * @public
   */
  InvolvementType: SalesInvolvementType | undefined;

  /**
   * Determines whether to restrict visibility of the opportunity from AWS sales. Default value is Full. Valid values:
   *
   * - `Full`: The opportunity is fully visible to AWS sales.
   * - `Limited`: The opportunity has restricted visibility to AWS sales.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * @public
 */
export interface UpdateOpportunityRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the opportunity is updated in. Use `AWS` to update real opportunities in the production environment, and `Sandbox` for testing in secure, isolated environments. When you use the `Sandbox` catalog, it allows you to simulate and validate your interactions with Amazon Web Services services without affecting live data or operations.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Identifies the type of support the partner needs from Amazon Web Services.
   *
   * Valid values:
   *
   * - Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.
   * - Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.
   * - Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.
   * - Cosell—Pricing Assistance: Connect with an AWS seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).
   * - Cosell—Technical Consultation: Connection with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.
   * - Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.
   * - Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).
   * - Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs RFx support from Amazon Web Services.
   *
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * Specifies if the opportunity is associated with national security concerns. This flag is only applicable when the industry is `Government`. For national-security-related opportunities, validation and compliance rules may apply, impacting the opportunity's visibility and processing.
   *
   * @public
   */
  NationalSecurity?: NationalSecurity | undefined;

  /**
   * Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner.
   *
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * Specifies details of the customer associated with the `Opportunity`.
   *
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * An object that contains project details summary for the `Opportunity`.
   *
   * @public
   */
  Project?: Project | undefined;

  /**
   * Specifies the opportunity type as a renewal, new, or expansion.
   *
   * Opportunity types:
   *
   * - New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.
   * - Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.
   * - Expansion opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer.
   *
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * An object that contains marketing details for the `Opportunity`.
   *
   * @public
   */
  Marketing?: Marketing | undefined;

  /**
   * Specifies details of a customer's procurement terms. Required only for partners in eligible programs.
   *
   * @public
   */
  SoftwareRevenue?: SoftwareRevenue | undefined;

  /**
   * `DateTime` when the opportunity was last modified.
   *
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * Read-only, system generated `Opportunity` unique identifier.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An object that contains lifecycle details for the `Opportunity`.
   *
   * @public
   */
  LifeCycle?: LifeCycle | undefined;
}

/**
 * @public
 */
export interface UpdateOpportunityResponse {
  /**
   * Read-only, system generated `Opportunity` unique identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * `DateTime` when the opportunity was last modified.
   *
   * @public
   */
  LastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListOpportunityFromEngagementTasksRequest {
  /**
   * Specifies the maximum number of results to return in a single page of the response. Use this parameter to control the number of items returned in each request, which can be useful for performance tuning and managing large result sets.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for requesting the next page of results. This value is obtained from the NextToken field in the response of a previous call to this API. Use this parameter for pagination when the result set spans multiple pages.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Defines the sorting parameters for listing tasks. This structure allows for specifying the field to sort by and the order of sorting.
   *
   * @public
   */
  Sort?: ListTasksSortBase | undefined;

  /**
   * Specifies the catalog related to the request. Valid values are `AWS` for production environments and `Sandbox` for testing or development purposes. The catalog determines which environment the task data is retrieved from.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Filters the tasks based on their current status. This allows you to focus on tasks in specific states. Valid values are `COMPLETE` for tasks that have finished successfully, `INPROGRESS` for tasks that are currently running, and `FAILED` for tasks that have encountered an error and failed to complete.
   *
   * @public
   */
  TaskStatus?: TaskStatus[] | undefined;

  /**
   * Filters tasks by their unique identifiers. Use this when you want to retrieve information about specific tasks. Provide the task ID to get details about a particular opportunity creation task.
   *
   * @public
   */
  TaskIdentifier?: string[] | undefined;

  /**
   * Filters tasks by the identifiers of the opportunities they created or are associated with. Use this to find tasks related to specific opportunity creation processes.
   *
   * @public
   */
  OpportunityIdentifier?: string[] | undefined;

  /**
   * Filters tasks by the identifiers of the engagements from which opportunities are being created. Use this to find all opportunity creation tasks associated with a specific engagement.
   *
   * @public
   */
  EngagementIdentifier?: string[] | undefined;

  /**
   * Filters tasks by the identifiers of the engagement contexts associated with the opportunity creation. Use this to find tasks related to specific contextual information within engagements that are being converted to opportunities.
   *
   * @public
   */
  ContextIdentifier?: string[] | undefined;
}

/**
 * Provides a summary of a task related to creating an opportunity from an engagement. This structure contains key information about the task's status, associated identifiers, and any failure details for opportunity creation processes.
 *
 * @public
 */
export interface ListOpportunityFromEngagementTaskSummary {
  /**
   * The unique identifier of the task for creating an opportunity from an engagement.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the task within AWS. This ARN can be used for referencing the task in other AWS services or APIs.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The timestamp indicating when the task was initiated, in RFC 3339 format.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The current status of the task. Valid values are COMPLETE, INPROGRESS, or FAILED.
   *
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * A detailed message providing additional information about the task, especially useful in case of failures. This field may contain error details or other relevant information about the task's execution.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A code indicating the specific reason for a task failure. This field is populated when the task status is FAILED and provides a categorized reason for the failure.
   *
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * The unique identifier of the opportunity created as a result of the task. This field is populated when the task is completed successfully.
   *
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * The identifier of the resource snapshot job associated with this task, if a snapshot was created as part of the opportunity creation process.
   *
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * The unique identifier of the engagement from which the opportunity is being created. This field helps track the source of the opportunity creation task.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The unique identifier of the engagement context associated with the opportunity creation task. This links the task to specific contextual information within the engagement.
   *
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * @public
 */
export interface ListOpportunityFromEngagementTasksResponse {
  /**
   * An array of `ListOpportunityFromEngagementTaskSummary` objects, each representing a task that matches the specified filters. The array may be empty if no tasks match the criteria.
   *
   * @public
   */
  TaskSummaries?: ListOpportunityFromEngagementTaskSummary[] | undefined;

  /**
   * A token used for pagination to retrieve the next page of results. If there are more results available, this field will contain a token that can be used in a subsequent API call to retrieve the next page. If there are no more results, this field will be null or an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartOpportunityFromEngagementTaskRequest {
  /**
   * Specifies the catalog in which the opportunity creation task is executed. Acceptable values include `AWS` for production and `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique token provided by the client to help ensure the idempotency of the request. It helps prevent the same task from being performed multiple times.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier of the engagement from which the opportunity creation task is to be initiated. This helps ensure that the task is applied to the correct engagement.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The unique identifier of the engagement context from which to create the opportunity. This specifies the specific contextual information within the engagement that will be used for opportunity creation.
   *
   * @public
   */
  ContextIdentifier: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartOpportunityFromEngagementTaskResponse {
  /**
   * The unique identifier of the task, used to track the task's progress.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task, used for tracking and managing the task within AWS.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The timestamp indicating when the task was initiated. The format follows RFC 3339 section 5.6.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Indicates the current status of the task.
   *
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * If the task fails, this field contains a detailed message describing the failure and possible recovery steps.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Indicates the reason for task failure using an enumerated code.
   *
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * The unique identifier of the opportunity created as a result of the task. This field is populated when the task is completed successfully.
   *
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * The identifier of the resource snapshot job created as part of the opportunity creation process.
   *
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * The unique identifier of the engagement from which the opportunity was created.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The unique identifier of the engagement context used to create the opportunity.
   *
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * Represents the request structure for retrieving the status and results of a prospecting task.
 *
 * @public
 */
export interface GetProspectingFromEngagementTaskRequest {
  /**
   * Specifies the catalog associated with the task. Specify `AWS` for production environments and `Sandbox` for testing and development purposes. The value must match the catalog used when the task was created.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the prospecting task to retrieve. This value is returned in the `TaskId` field of the `StartProspectingFromEngagementTask` response.
   *
   * @public
   */
  TaskIdentifier: string | undefined;
}

/**
 * Contains the result of processing a single engagement within a prospecting task. Each engagement is processed independently, so individual engagements can succeed or fail regardless of other engagements in the same task.
 *
 * @public
 */
export interface EngagementProspectingResult {
  /**
   * The unique identifier of the engagement that was processed.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * The identifier of the prospecting context created for this engagement. This field is only populated when the engagement was processed successfully (status is `COMPLETED`). Use this identifier to reference the prospecting context in subsequent operations.
   *
   * @public
   */
  EngagementContextId?: string | undefined;

  /**
   * The processing status of this specific engagement. Possible values are `PENDING`, `IN_PROGRESS`, `COMPLETED`, and `FAILED`.
   *
   * @public
   */
  Status: ProspectingTaskStatus | undefined;

  /**
   * An enumerated code indicating the reason this engagement failed to process. This field is only populated when `Status` is `FAILED`.
   *
   * @public
   */
  ReasonCode?: string | undefined;

  /**
   * A human-readable description of the failure for this engagement, including suggested recovery steps. This field is only populated when `Status` is `FAILED`.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Represents the response structure containing the full details of a prospecting task, including per-engagement processing results. Includes the `Status` field of each `EngagementProspectingResult` entry to determine individual outcomes.
 *
 * @public
 */
export interface GetProspectingFromEngagementTaskResponse {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  TaskArn: string | undefined;

  /**
   * The descriptive name of the task that you provided when you created it.
   *
   * @public
   */
  TaskName: string | undefined;

  /**
   * The timestamp indicating when the task was initiated. The format follows ISO 8601 date-time notation.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The timestamp indicating when the task finished processing. This field is absent if the task is still in progress. The format follows ISO 8601 date-time notation.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * An array of `EngagementProspectingResult` entries for each engagement in the task. Each entry contains the processing status. For successfully completed engagements, includes the prospecting context identifier. For failed engagements, includes an error code and message.
   *
   * @public
   */
  Engagements: EngagementProspectingResult[] | undefined;
}

/**
 * Specifies the sort configuration for `ListProspectingFromEngagementTasks`. Contains the field to sort by and the sort direction.
 *
 * @public
 */
export interface ProspectingFromEngagementTaskSort {
  /**
   * The direction in which to sort the results. Use `ASCENDING` to return the smallest or earliest values first, or `DESCENDING` to return the largest or most recent values first.
   *
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * The field by which to sort the returned tasks. Valid values: `StartTime` (task creation timestamp), `TaskName` (alphabetically by task name), and `FailedEngagementCount` (number of failed engagements).
   *
   * @public
   */
  SortBy: ProspectingFromEngagementTaskSortName | undefined;
}

/**
 * Represents the request structure for listing prospecting tasks. All filter parameters are optional. Results are paginated — uses `NextToken` from the response to retrieve subsequent pages.
 *
 * @public
 */
export interface ListProspectingFromEngagementTasksRequest {
  /**
   * Specifies the catalog to list tasks from. Specify `AWS` for production environments and `Sandbox` for testing and development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The maximum number of results to return in a single page. If additional results exist, the response includes a `NextToken` value for retrieving the next page. If omitted, the API uses a service-defined default page size.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from a previous call to this API. Include this value to retrieve the next page of results. If omitted, the first page is returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters the results to include only the tasks with the specified identifiers. Provide up to 10 task IDs to narrow the list to specific tasks. If omitted, tasks are not filtered by identifier.
   *
   * @public
   */
  TaskIdentifier?: string[] | undefined;

  /**
   * Filters the results to include only tasks with the specified names. Provide up to 10 task names to narrow the list. If omitted, tasks are not filtered by name.
   *
   * @public
   */
  TaskName?: string[] | undefined;

  /**
   * Filters tasks to include only those that started after the specified timestamp. Use this with `StartBefore` to define a start-time range for your query. The format follows ISO 8601 date-time notation.
   *
   * @public
   */
  StartAfter?: Date | undefined;

  /**
   * Filters tasks to include only those that started before the specified timestamp. Use this with `StartAfter` to define a start-time range for your query. The format follows ISO 8601 date-time notation.
   *
   * @public
   */
  StartBefore?: Date | undefined;

  /**
   * Specifies the field and order used to sort the returned tasks. If omitted, tasks are returned in the default sort order.
   *
   * @public
   */
  Sort?: ProspectingFromEngagementTaskSort | undefined;
}

/**
 * A summary of a single prospecting task, returned by `ListProspectingFromEngagementTasks`. Contains key metrics and status information without the full per-engagement detail available from `GetProspectingFromEngagementTask`.
 *
 * @public
 */
export interface ProspectingTaskSummary {
  /**
   * The unique identifier of the task. Use this value with `GetProspectingFromEngagementTask` to retrieve full task details.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  TaskArn: string | undefined;

  /**
   * The descriptive name of the task provided when it was created.
   *
   * @public
   */
  TaskName: string | undefined;

  /**
   * The timestamp indicating when the task was initiated. The format follows ISO 8601 date-time notation.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The timestamp indicating when the task finished processing. This field is absent if the task is still in progress. The format follows ISO 8601 date-time notation.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The total number of engagements included in the task.
   *
   * @public
   */
  TotalEngagementCount: number | undefined;

  /**
   * The number of engagements that have been successfully converted into prospecting leads.
   *
   * @public
   */
  CompletedEngagementCount: number | undefined;

  /**
   * The number of engagements that failed to be converted. Retrieve the full task details using `GetProspectingFromEngagementTask` for per-engagement error information.
   *
   * @public
   */
  FailedEngagementCount: number | undefined;
}

/**
 * Represents the response structure containing a paginated list of prospecting task summaries matching the request filters. Indicates through `NextToken` when additional results are available.
 *
 * @public
 */
export interface ListProspectingFromEngagementTasksResponse {
  /**
   * A pagination token used to retrieve the next page of results. If this field is present, pass its value as `NextToken` in the next call. If absent or empty, there are no further pages.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Prospecting task summaries matching the specified filters. Each summary includes the task identifier, name, status counters, and timing information. If no tasks match the filter criteria, the list is empty.
   *
   * @public
   */
  TaskSummaries: ProspectingTaskSummary[] | undefined;
}

/**
 * Represents the request structure for starting a prospecting task. Includes up to 100 engagement identifiers and a task name. Uses `ClientToken` to ensure idempotency.
 *
 * @public
 */
export interface StartProspectingFromEngagementTaskRequest {
  /**
   * Specifies the catalog in which the task is initiated. Specify `AWS` for production environments and `Sandbox` for testing and development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The list of engagement identifiers to include in this prospecting task. Each identifier must correspond to an existing engagement in the specified catalog. Maximum of 100 identifiers per task.
   *
   * @public
   */
  Identifiers: string[] | undefined;

  /**
   * A descriptive name for the task. This name helps identify the task in list and get operations. The name must contain 1 to 128 characters.
   *
   * @public
   */
  TaskName: string | undefined;

  /**
   * A unique, case-sensitive identifier provided by the client to ensure idempotency. Making the same request with the same `ClientToken` returns the same response without creating a duplicate task.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Represents the response structure returned when a prospecting task is successfully submitted. Contains the task identifier, ARN, and initial status. Uses `TaskId` with `GetProspectingFromEngagementTask` to poll for completion.
 *
 * @public
 */
export interface StartProspectingFromEngagementTaskResponse {
  /**
   * The list of engagement identifiers that were accepted into the task queue for processing. This list matches the identifiers provided in the request.
   *
   * @public
   */
  Identifiers: string[] | undefined;

  /**
   * The task name from the request.
   *
   * @public
   */
  TaskName: string | undefined;

  /**
   * A message providing additional context about the task's current state. When the task fails, this field contains a detailed description of the failure and suggested recovery steps. This field is only populated for tasks in a failed state.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * An enumerated code identifying the reason for task failure. This field is only populated when the task has failed. Use the corresponding `Message` field for a human-readable description of the failure.
   *
   * @public
   */
  ReasonCode?: string | undefined;

  /**
   * The timestamp indicating when the task was initiated. The format follows ISO 8601 date-time notation.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The unique identifier assigned to this task. Use this identifier with `GetProspectingFromEngagementTask` to retrieve task details and check status.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task. The ARN uniquely identifies the task across AWS and can be used for resource-level IAM policies.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The current status of the task. Possible values: `PENDING` (waiting to run), `IN_PROGRESS` (actively processing), `COMPLETED` (successfully processed), and `FAILED` (unrecoverable error).
   *
   * @public
   */
  TaskStatus: ProspectingTaskStatus | undefined;
}

/**
 * @public
 */
export interface PutSellingSystemSettingsRequest {
  /**
   * Specifies the catalog in which the settings will be updated. Acceptable values include `AWS` for production and `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies the ARN of the IAM Role used for resource snapshot job executions.
   *
   * @public
   */
  ResourceSnapshotJobRoleIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface PutSellingSystemSettingsResponse {
  /**
   * Specifies the catalog in which the settings are defined. Acceptable values include `AWS` for production and `Sandbox` for testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Specifies the ARN of the IAM Role used for resource snapshot job executions.
   *
   * @public
   */
  ResourceSnapshotJobRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotRequest {
  /**
   * Specifies the catalog where the snapshot is created. Valid values are `AWS` and `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the engagement associated with this snapshot. This field links the snapshot to a specific engagement context.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * Specifies the type of resource for which the snapshot is being created. This field determines the structure and content of the snapshot. Must be one of the supported resource types, such as: `Opportunity`.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * The unique identifier of the specific resource to be snapshotted. The format and constraints of this identifier depend on the `ResourceType` specified. For example: For `Opportunity` type, it will be an opportunity ID.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The name of the template that defines the schema for the snapshot. This template determines which subset of the resource data will be included in the snapshot. Must correspond to an existing and valid template for the specified `ResourceType`.
   *
   * @public
   */
  ResourceSnapshotTemplateIdentifier: string | undefined;

  /**
   * Specifies a unique, client-generated UUID to ensure that the request is handled exactly once. This token helps prevent duplicate snapshot creations.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotResponse {
  /**
   * Specifies the Amazon Resource Name (ARN) that uniquely identifies the snapshot created.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Specifies the revision number of the created snapshot. This field provides important information about the snapshot's place in the sequence of snapshots for the given resource.
   *
   * @public
   */
  Revision?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceSnapshotRequest {
  /**
   * Specifies the catalog related to the request. Valid values are:
   *
   * - AWS: Retrieves the snapshot from the production AWS environment.
   * - Sandbox: Retrieves the snapshot from a sandbox environment used for testing or development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the engagement associated with the snapshot. This field links the snapshot to a specific engagement context.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * Specifies the type of resource that was snapshotted. This field determines the structure and content of the snapshot payload. Valid value includes:`Opportunity`: For opportunity-related data.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * The unique identifier of the specific resource that was snapshotted. The format and constraints of this identifier depend on the ResourceType specified. For `Opportunity` type, it will be an `opportunity ID`
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * he name of the template that defines the schema for the snapshot. This template determines which subset of the resource data is included in the snapshot and must correspond to an existing and valid template for the specified `ResourceType`.
   *
   * @public
   */
  ResourceSnapshotTemplateIdentifier: string | undefined;

  /**
   * Specifies which revision of the snapshot to retrieve. If omitted returns the latest revision.
   *
   * @public
   */
  Revision?: number | undefined;
}

/**
 * Provides the lifecycle view of an opportunity resource shared through a snapshot.
 *
 * @public
 */
export interface LifeCycleForView {
  /**
   * The projected launch date of the opportunity shared through a snapshot.
   *
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * Defines the approval status of the opportunity shared through a snapshot.
   *
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * Defines the current stage of the opportunity shared through a snapshot.
   *
   * @public
   */
  Stage?: Stage | undefined;

  /**
   * Describes the next steps for the opportunity shared through a snapshot.
   *
   * @public
   */
  NextSteps?: string | undefined;
}

/**
 * Provides the project view of an opportunity resource shared through a snapshot.
 *
 * @public
 */
export interface ProjectView {
  /**
   * Describes the deployment or consumption model for the partner solution or offering. This field indicates how the project's solution will be delivered or implemented for the customer.
   *
   * @public
   */
  DeliveryModels?: DeliveryModel[] | undefined;

  /**
   * Provides information about the anticipated customer spend related to this project. This may include details such as amount, frequency, and currency of expected expenditure.
   *
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;

  /**
   * Optional. The expected contract duration for this opportunity, representing the anticipated length of the contract in the unit specified by `Term`.
   *
   * @public
   */
  ExpectedContractDuration?: ExpectedContractDuration | undefined;

  /**
   * Specifies the proposed solution focus or type of workload for the project.
   *
   * @public
   */
  CustomerUseCase?: string | undefined;

  /**
   * Lists the pre-sales activities that have occurred with the end-customer related to the opportunity. This field is conditionally mandatory when the project is qualified for Co-Sell and helps drive assignment priority on the AWS side. It provides insight into the engagement level with the customer.
   *
   * @public
   */
  SalesActivities?: SalesActivity[] | undefined;

  /**
   * Offers a description of other solutions if the standard solutions do not adequately cover the project's scope.
   *
   * @public
   */
  OtherSolutionDescription?: string | undefined;
}

/**
 * Provides a comprehensive view of an opportunity summary, including lifecycle information, team details, opportunity type, primary needs from AWS, and associated project information.
 *
 * @public
 */
export interface OpportunitySummaryView {
  /**
   * Specifies the opportunity type.
   *
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * Contains information about the opportunity's lifecycle, including its current stage, status, and important dates such as creation and last modification times.
   *
   * @public
   */
  Lifecycle?: LifeCycleForView | undefined;

  /**
   * Represents the internal team handling the opportunity. Specify the members involved in collaborating on an opportunity within the partner's organization.
   *
   * @public
   */
  OpportunityTeam?: Contact[] | undefined;

  /**
   * Identifies the type of support the partner needs from AWS.
   *
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * An object that contains the customer's `Account` and `Contact`.
   *
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * Contains summary information about the project associated with the opportunity, including project name, description, timeline, and other relevant details.
   *
   * @public
   */
  Project?: ProjectView | undefined;

  /**
   * This field provides the associations' information for other entities with the opportunity. These entities include identifiers for `AWSProducts`, `Partner Solutions`, and `AWSMarketplaceOffers`.
   *
   * @public
   */
  RelatedEntityIdentifiers?: RelatedEntityIdentifiers | undefined;
}

/**
 * Represents the payload of a resource snapshot. This structure is designed to accommodate different types of resource snapshots, currently supporting opportunity summaries.
 *
 * @public
 */
export type ResourceSnapshotPayload =
  | ResourceSnapshotPayload.AwsOpportunitySummaryFullViewMember
  | ResourceSnapshotPayload.OpportunitySummaryMember
  | ResourceSnapshotPayload.$UnknownMember;

/**
 * @public
 */
export namespace ResourceSnapshotPayload {
  /**
   * An object that contains an `opportunity`'s subset of fields.
   *
   * @public
   */
  export interface OpportunitySummaryMember {
    OpportunitySummary: OpportunitySummaryView;
    AwsOpportunitySummaryFullView?: never;
    $unknown?: never;
  }

  /**
   * Provides a comprehensive view of AwsOpportunitySummaryFullView template.
   *
   * @public
   */
  export interface AwsOpportunitySummaryFullViewMember {
    OpportunitySummary?: never;
    AwsOpportunitySummaryFullView: AwsOpportunitySummaryFullView;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OpportunitySummary?: never;
    AwsOpportunitySummaryFullView?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    OpportunitySummary: (value: OpportunitySummaryView) => T;
    AwsOpportunitySummaryFullView: (value: AwsOpportunitySummaryFullView) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetResourceSnapshotResponse {
  /**
   * The catalog in which the snapshot was created. Matches the Catalog specified in the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the resource snapshot.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The AWS account ID of the principal (user or role) who created the snapshot. This helps in tracking the origin of the snapshot.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The timestamp when the snapshot was created, in ISO 8601 format (e.g., "2023-06-01T14:30:00Z"). This allows for precise tracking of when the snapshot was taken.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The identifier of the engagement associated with this snapshot. Matches the EngagementIdentifier specified in the request.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The type of the resource that was snapshotted. Matches the ResourceType specified in the request.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The identifier of the specific resource that was snapshotted. Matches the ResourceIdentifier specified in the request.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The name of the view used for this snapshot. This is the same as the template name.
   *
   * @public
   */
  ResourceSnapshotTemplateName?: string | undefined;

  /**
   * The revision number of this snapshot. This is a positive integer that is sequential and unique within the context of a resource view.
   *
   * @public
   */
  Revision?: number | undefined;

  /**
   * Represents the payload of a resource snapshot. This structure is designed to accommodate different types of resource snapshots, currently supporting opportunity summaries.
   *
   * @public
   */
  Payload?: ResourceSnapshotPayload | undefined;

  /**
   * Target member accounts associated with the resource snapshot.
   *
   * @public
   */
  TargetMemberAccounts?: string[] | undefined;
}

/**
 * @public
 */
export interface ListEngagementResourceAssociationsRequest {
  /**
   * Specifies the catalog in which to search for engagement-resource associations. Valid Values: "AWS" or "Sandbox"
   *
   * - `AWS` for production environments.
   * - `Sandbox` for testing and development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Limits the number of results returned in a single call. Use this to control the number of results returned, especially useful for pagination.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used for pagination of results. Include this token in subsequent requests to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters the results to include only associations related to the specified engagement. Use this when you want to find all resources associated with a specific engagement.
   *
   * @public
   */
  EngagementIdentifier?: string | undefined;

  /**
   * Filters the results to include only associations with resources of the specified type.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Filters the results to include only associations with the specified resource. Varies depending on the resource type. Use this when you want to find all engagements associated with a specific resource.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * Filters the response to include only snapshots of resources owned by the specified AWS account ID. Use this when you want to find associations related to resources owned by a particular account.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * This provide a streamlined view of the relationships between engagements and resources. These summaries offer a crucial link between collaborative engagements and the specific resources involved, such as opportunities.These summaries are particularly valuable for partners navigating complex engagements with multiple resources. They enable quick insights into resource distribution across engagements, support efficient resource management, and help maintain a clear overview of collaborative activities.
 *
 * @public
 */
export interface EngagementResourceAssociationSummary {
  /**
   * Indicates the environment in which the resource and engagement exist.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique identifier for the engagement associated with the resource.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * Categorizes the type of resource associated with the engagement.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * A unique identifier for the specific resource. Varies depending on the resource type.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The AWS account ID of the entity that owns the resource. Identifies the account responsible for or having primary control over the resource.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementResourceAssociationsResponse {
  /**
   * A list of engagement-resource association summaries.
   *
   * @public
   */
  EngagementResourceAssociationSummaries: EngagementResourceAssociationSummary[] | undefined;

  /**
   * A token to retrieve the next set of results. Use this token in a subsequent request to retrieve additional results if the response was truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotsRequest {
  /**
   * Specifies the catalog related to the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The unique identifier of the engagement associated with the snapshots.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * Filters the response to include only snapshots of the specified resource type.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Filters the response to include only snapshots of the specified resource.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * Filters the response to include only snapshots created using the specified template.
   *
   * @public
   */
  ResourceSnapshotTemplateIdentifier?: string | undefined;

  /**
   * Filters the response to include only snapshots of resources owned by the specified AWS account.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * Provides a concise summary of a resource snapshot, including its unique identifier and version information. This structure is used to quickly reference and identify specific versions of resource snapshots.
 *
 * @public
 */
export interface ResourceSnapshotSummary {
  /**
   * The Amazon Resource Name (ARN) of the snapshot. This globally unique identifier can be used for cross-service references and in IAM policies.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The revision number of the snapshot. This integer value is incremented each time the snapshot is updated, allowing for version tracking of the resource snapshot.
   *
   * @public
   */
  Revision?: number | undefined;

  /**
   * The type of resource snapshotted.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The identifier of the specific resource snapshotted. The format might vary depending on the ResourceType.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The name of the template used to create the snapshot.
   *
   * @public
   */
  ResourceSnapshotTemplateName?: string | undefined;

  /**
   * The AWS account ID of the entity that owns the resource from which the snapshot was created.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotsResponse {
  /**
   * An array of resource snapshot summary objects.
   *
   * @public
   */
  ResourceSnapshotSummaries: ResourceSnapshotSummary[] | undefined;

  /**
   * The token to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotJobRequest {
  /**
   * Specifies the catalog in which to create the snapshot job. Valid values are `AWS` and `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A client-generated UUID used for idempotency check. The token helps prevent duplicate job creations.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the identifier of the engagement associated with the resource to be snapshotted.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * The type of resource for which the snapshot job is being created. Must be one of the supported resource types i.e. `Opportunity`
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * Specifies the identifier of the specific resource to be snapshotted. The format depends on the `ResourceType`.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * Specifies the name of the template that defines the schema for the snapshot.
   *
   * @public
   */
  ResourceSnapshotTemplateIdentifier: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotJobResponse {
  /**
   * The unique identifier for the created snapshot job.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created snapshot job.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSnapshotJobRequest {
  /**
   * Specifies the catalog from which to delete the snapshot job. Valid values are `AWS` and `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the resource snapshot job to be deleted.
   *
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSnapshotJobRequest {
  /**
   * Specifies the catalog related to the request. Valid values are:
   *
   * - AWS: Retrieves the snapshot job from the production AWS environment.
   * - Sandbox: Retrieves the snapshot job from a sandbox environment used for testing or development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the resource snapshot job to be retrieved. This identifier is crucial for pinpointing the specific job you want to query.
   *
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSnapshotJobResponse {
  /**
   * The catalog in which the snapshot job was created. This will match the Catalog specified in the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the snapshot job. This matches the ResourceSnapshotJobIdentifier provided in the request.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot job. This globally unique identifier can be used for resource-specific operations across AWS services.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the engagement associated with this snapshot job. This links the job to a specific engagement context.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The type of resource being snapshotted. This would have "Opportunity" as a value as it is dependent on the supported resource type.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The identifier of the specific resource being snapshotted. The format might vary depending on the ResourceType.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource being snapshotted. This provides a globally unique identifier for the resource across AWS.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The name of the template used for creating the snapshot. This is the same as the template name. It defines the structure and content of the snapshot.
   *
   * @public
   */
  ResourceSnapshotTemplateName?: string | undefined;

  /**
   * The date and time when the snapshot job was created in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z"
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The current status of the snapshot job. Valid values:
   *
   * - STOPPED: The job is not currently running.
   * - RUNNING: The job is actively executing.
   *
   * @public
   */
  Status?: ResourceSnapshotJobStatus | undefined;

  /**
   * The date and time of the last successful execution of the job, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z"
   *
   * @public
   */
  LastSuccessfulExecutionDate?: Date | undefined;

  /**
   * If the job has encountered any failures, this field contains the error message from the most recent failure. This can be useful for troubleshooting issues with the job.
   *
   * @public
   */
  LastFailure?: string | undefined;
}

/**
 * Defines the sorting parameters for listing resource snapshot jobs. This structure allows you to specify the field to sort by and the order of sorting.
 *
 * @public
 */
export interface SortObject {
  /**
   * Specifies the field by which to sort the resource snapshot jobs.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * Determines the order in which the sorted results are presented.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotJobsRequest {
  /**
   * Specifies the catalog related to the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The maximum number of results to return in a single call. If omitted, defaults to 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The identifier of the engagement to filter the response.
   *
   * @public
   */
  EngagementIdentifier?: string | undefined;

  /**
   * The status of the jobs to filter the response.
   *
   * @public
   */
  Status?: ResourceSnapshotJobStatus | undefined;

  /**
   * Configures the sorting of the response. If omitted, results are sorted by `CreatedDate` in descending order.
   *
   * @public
   */
  Sort?: SortObject | undefined;
}

/**
 * An object that contains a `Resource Snapshot Job`'s subset of fields.
 *
 * @public
 */
export interface ResourceSnapshotJobSummary {
  /**
   * The unique identifier for the resource snapshot job within the AWS Partner Central system. This ID is used for direct references to the job within the service.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the resource snapshot job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the Engagement.
   *
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * The current status of the snapshot job.
   *
   * Valid values:
   *
   * - STOPPED: The job is not currently running.
   * - RUNNING: The job is actively executing.
   *
   * @public
   */
  Status?: ResourceSnapshotJobStatus | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotJobsResponse {
  /**
   * An array of resource snapshot job summary objects.
   *
   * @public
   */
  ResourceSnapshotJobSummaries: ResourceSnapshotJobSummary[] | undefined;

  /**
   * The token to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartResourceSnapshotJobRequest {
  /**
   * Specifies the catalog related to the request. Valid values are:
   *
   * - AWS: Starts the request from the production AWS environment.
   * - Sandbox: Starts the request from a sandbox environment used for testing or development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The identifier of the resource snapshot job to start.
   *
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopResourceSnapshotJobRequest {
  /**
   * Specifies the catalog related to the request. Valid values are:
   *
   * - AWS: Stops the request from the production AWS environment.
   * - Sandbox: Stops the request from a sandbox environment used for testing or development purposes.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The identifier of the job to stop.
   *
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * Configures the solutions' response sorting that enables partners to order solutions based on specified attributes.
 *
 * @public
 */
export interface SolutionSort {
  /**
   * Specifies the sorting order, either `Ascending` or `Descending`. The default is `Descending`.
   *
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * Specifies the attribute to sort by, such as `Name`, `CreatedDate`, or `Status`.
   *
   * @public
   */
  SortBy: SolutionSortName | undefined;
}

/**
 * @public
 */
export interface ListSolutionsRequest {
  /**
   * Specifies the catalog associated with the request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the solutions are listed in. Use `AWS` to list solutions in the Amazon Web Services catalog, and `Sandbox` to list solutions in a secure and isolated testing environment.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results.
   *
   * Default: 20
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Object that configures sorting done on the response. Default `Sort.SortBy` is `Identifier`.
   *
   * @public
   */
  Sort?: SolutionSort | undefined;

  /**
   * Filters solutions based on their status. This filter helps partners manage their solution portfolios effectively.
   *
   * @public
   */
  Status?: SolutionStatus[] | undefined;

  /**
   * Filters the solutions based on their unique identifier. Use this filter to retrieve specific solutions by providing the solution's identifier for accurate results.
   *
   * @public
   */
  Identifier?: string[] | undefined;

  /**
   * Filters the solutions based on the category to which they belong. This allows partners to search for solutions within specific categories, such as `Software`, `Consulting`, or `Managed Services`.
   *
   * @public
   */
  Category?: string[] | undefined;

  /**
   * Filters results by AWS Marketplace solution ARN. You can provide up to 10 ARNs.
   *
   * @public
   */
  AwsMarketplaceSolutionArn?: string[] | undefined;
}

/**
 * Specifies minimal information for the solution offered to solve the customer's business problem.
 *
 * @public
 */
export interface SolutionBase {
  /**
   * Specifies the catalog in which the solution is hosted, either `AWS` or `Sandbox`. This helps partners differentiate between live solutions and those in testing environments.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Enables the association of solutions (offerings) to opportunities.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The SolutionBase structure provides essential information about a solution.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Specifies the solution name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the solution's current status, which indicates its state in the system. Valid values: `Active` | `Inactive` | `Draft`. The status helps partners and Amazon Web Services track the solution's lifecycle and availability. Filter for `Active` solutions for association to an opportunity.
   *
   * @public
   */
  Status: SolutionStatus | undefined;

  /**
   * Specifies the solution category, which helps to categorize and organize the solutions partners offer. Valid values: `Software Product` | `Consulting Service` | `Hardware Product` | `Communications Product` | `Professional Service` | `Managed Service` | `Value-Added Resale Amazon Web Services Service` | `Distribution Service` | `Training Service` | `Merger and Acquisition Advising Service`.
   *
   * @public
   */
  Category: string | undefined;

  /**
   * Indicates the solution creation date. This is useful to track and audit.
   *
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Marketplace solution associated with this partner solution.
   *
   * @public
   */
  AwsMarketplaceSolutionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSolutionsResponse {
  /**
   * An array with minimal details for solutions matching the request criteria.
   *
   * @public
   */
  SolutionSummaries: SolutionBase[] | undefined;

  /**
   * A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign.
   *
   * @public
   */
  Tags: Tag[] | undefined;
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
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.
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
 * Updates the context information for a lead with qualification status, customer details, and interaction data.
 *
 * @public
 */
export interface UpdateLeadContext {
  /**
   * The updated qualification status of the lead.
   *
   * @public
   */
  QualificationStatus?: string | undefined;

  /**
   * Updated customer information associated with the lead.
   *
   * @public
   */
  Customer: LeadCustomer | undefined;

  /**
   * Updated interaction details for the lead context.
   *
   * @public
   */
  Interaction?: LeadInteraction | undefined;

  /**
   * Insights that AI generates and associates with the lead. These insights provide automated analysis to help partners assess the lead quality and readiness.
   *
   * @public
   */
  Insights?: LeadInsights | undefined;
}

/**
 * Represents the updated payload of an engagement context. The structure of this payload varies based on the context type being updated.
 *
 * @public
 */
export type UpdateEngagementContextPayload =
  | UpdateEngagementContextPayload.CustomerProjectMember
  | UpdateEngagementContextPayload.LeadMember
  | UpdateEngagementContextPayload.ProspectingResultMember
  | UpdateEngagementContextPayload.$UnknownMember;

/**
 * @public
 */
export namespace UpdateEngagementContextPayload {
  /**
   * Contains updated information about a lead when the context type is "Lead". This field is present only when updating a lead context within the engagement.
   *
   * @public
   */
  export interface LeadMember {
    Lead: UpdateLeadContext;
    CustomerProject?: never;
    ProspectingResult?: never;
    $unknown?: never;
  }

  /**
   * The CustomerProjects structure in Engagements offers a flexible framework for managing customer-project relationships. It supports multiple customers per Engagement and multiple projects per customer, while also allowing for customers without projects and projects without specific customers.
   *
   * All Engagement members have full visibility of customers and their associated projects, enabling the capture of relevant context even when project details are not fully defined. This structure also facilitates targeted invitations, allowing partners to focus on specific customers and their business problems when sending Engagement invitations.
   *
   * @public
   */
  export interface CustomerProjectMember {
    Lead?: never;
    CustomerProject: CustomerProjectsContext;
    ProspectingResult?: never;
    $unknown?: never;
  }

  /**
   * Contains updated prospecting result data when the context type is "ProspectingResult". This field includes enriched data and insights that the system generates when a partner runs an autonomous prospecting job on leads.
   *
   * @public
   */
  export interface ProspectingResultMember {
    Lead?: never;
    CustomerProject?: never;
    ProspectingResult: ProspectingResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Lead?: never;
    CustomerProject?: never;
    ProspectingResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Lead: (value: UpdateLeadContext) => T;
    CustomerProject: (value: CustomerProjectsContext) => T;
    ProspectingResult: (value: ProspectingResult) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateEngagementContextRequest {
  /**
   * Specifies the catalog associated with the engagement context update request. This field takes a string value from a predefined list: `AWS` or `Sandbox`. The catalog determines which environment the engagement context is updated in.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the `Engagement` containing the context to be updated. This parameter ensures the context update is applied to the correct engagement.
   *
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * The unique identifier of the specific engagement context to be updated. This ensures that the correct context within the engagement is modified.
   *
   * @public
   */
  ContextIdentifier: string | undefined;

  /**
   * The timestamp when the engagement was last modified, used for optimistic concurrency control. This helps prevent conflicts when multiple users attempt to update the same engagement simultaneously.
   *
   * @public
   */
  EngagementLastModifiedAt: Date | undefined;

  /**
   * Specifies the type of context being updated within the engagement. This field determines the structure and content of the context payload being modified.
   *
   * @public
   */
  Type: EngagementContextType | undefined;

  /**
   * Contains the updated contextual information for the engagement. The structure of this payload varies based on the context type specified in the Type field.
   *
   * @public
   */
  Payload: UpdateEngagementContextPayload | undefined;
}

/**
 * @public
 */
export interface UpdateEngagementContextResponse {
  /**
   * The unique identifier of the engagement that was updated.
   *
   * @public
   */
  EngagementId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated engagement.
   *
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * The timestamp when the engagement context was last modified.
   *
   * @public
   */
  EngagementLastModifiedAt: Date | undefined;

  /**
   * The unique identifier of the engagement context that was updated.
   *
   * @public
   */
  ContextId: string | undefined;
}
