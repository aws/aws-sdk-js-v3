// smithy-typescript generated code
import {
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
  Industry,
  InvitationStatus,
  InvolvementTypeChangeReason,
  ListTasksSortName,
  MarketingSource,
  MarketSegment,
  NationalSecurity,
  OpportunityEngagementInvitationSortName,
  OpportunityOrigin,
  OpportunitySortName,
  OpportunityType,
  ParticipantType,
  PaymentFrequency,
  PrimaryNeedFromAws,
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
   * <p>The <code>CatalogType</code> parameter specifies the catalog associated with the engagement invitation. Accepted values are <code>AWS</code> and <code>Sandbox</code>, which determine the environment in which the engagement invitation is managed.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> The <code>Identifier</code> parameter in the <code>AcceptEngagementInvitationRequest</code> specifies the unique identifier of the <code>EngagementInvitation</code> to be accepted. Providing the correct identifier ensures that the intended invitation is accepted. </p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>Indicates an invalid value for a field.</p> <ul> <li> <p> <i>REQUIRED_FIELD_MISSING:</i> The request is missing a required field.</p> <p>Fix: Verify your request payload includes all required fields.</p> </li> <li> <p> <i>INVALID_ENUM_VALUE:</i> The enum field value isn't an accepted values.</p> <p>Fix: Check the documentation for the list of valid enum values, and update your request with a valid value.</p> </li> <li> <p> <i>INVALID_STRING_FORMAT:</i> The string format is invalid.</p> <p>Fix: Confirm that the string is in the expected format (For example: email address, date).</p> </li> <li> <p> <i>INVALID_VALUE:</i> The value isn't valid.</p> <p>Fix: Confirm that the value meets the expected criteria and is within the allowable range or set.</p> </li> <li> <p> <i>TOO_MANY_VALUES:</i> There are too many values in a field that expects fewer entries.</p> <p>Fix: Reduce the number of values to match the expected limit.</p> </li> <li> <p> <i>NOT_ENOUGH_VALUES:</i> There are not enough values in a field that expects more entries.</p> <p>Fix: Increase the number of values to match the expected threshold.</p> </li> <li> <p> <i>ACTION_NOT_PERMITTED:</i> The action isn't permitted due to current state or permissions.</p> <p>Fix: Verify that the action is appropriate for the current state, and that you have the necessary permissions to perform it.</p> </li> <li> <p> <i>DUPLICATE_KEY_VALUE:</i> The value in a field duplicates a value that must be unique.</p> <p>Fix: Verify that the value is unique and doesn't duplicate an existing value in the system.</p> </li> </ul>
 * @public
 */
export interface ValidationExceptionError {
  /**
   * <p>Specifies the field name with the invalid value.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>Specifies the detailed error message for the invalid field value.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Specifies the error code for the invalid field value.</p>
   * @public
   */
  Code: ValidationExceptionErrorCode | undefined;
}

/**
 * <p>Specifies the end <code>Customer</code>'s address details associated with the <code>Opportunity</code>.</p>
 * @public
 */
export interface Address {
  /**
   * <p>Specifies the end <code>Customer</code>'s city associated with the <code>Opportunity</code>.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s postal code associated with the <code>Opportunity</code>.</p>
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s state or region associated with the <code>Opportunity</code>.</p> <p>Valid values: <code>Alabama | Alaska | American Samoa | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | Dist. of Columbia | Federated States of Micronesia | Florida | Georgia | Guam | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Marshall Islands | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire | New Jersey | New Mexico | New York | North Carolina | North Dakota | Northern Mariana Islands | Ohio | Oklahoma | Oregon | Palau | Pennsylvania | Puerto Rico | Rhode Island | South Carolina | South Dakota | Tennessee | Texas | Utah | Vermont | Virginia | Virgin Islands | Washington | West Virginia | Wisconsin | Wyoming | APO/AE | AFO/FPO | FPO, AP</code> </p>
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s country associated with the <code>Opportunity</code>.</p>
   * @public
   */
  CountryCode?: CountryCode | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s street address associated with the <code>Opportunity</code>.</p>
   * @public
   */
  StreetAddress?: string | undefined;
}

/**
 * <p>Specifies the <code>Customer</code>'s account details associated with the <code>Opportunity</code>.</p>
 * @public
 */
export interface Account {
  /**
   * <p>Specifies the industry the end <code>Customer</code> belongs to that's associated with the <code>Opportunity</code>. It refers to the category or sector where the customer's business operates. This is a required field.</p>
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s industry associated with the <code>Opportunity</code>, when the selected value in the <code>Industry</code> field is <code>Other</code>.</p>
   * @public
   */
  OtherIndustry?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s company name associated with the <code>Opportunity</code>.</p>
   * @public
   */
  CompanyName: string | undefined;

  /**
   * <p>Specifies the end customer's company website URL associated with the <code>Opportunity</code>. This value is crucial to map the customer within the Amazon Web Services CRM system. This field is required in all cases except when the opportunity is related to national security.</p>
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * <p>Specifies the <code>Customer</code> Amazon Web Services account ID associated with the <code>Opportunity</code>.</p>
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s address details associated with the <code>Opportunity</code>.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>Indicates the <code>Customer</code> DUNS number, if available.</p>
   * @public
   */
  Duns?: string | undefined;
}

/**
 * <p>Contains the account details of the partner who received the Engagement Invitation, including the AWS account ID and company name.</p>
 * @public
 */
export interface AccountReceiver {
  /**
   * <p>Represents the alias of the partner account receiving the Engagement Invitation, making it easier to identify and track the recipient in reports or logs.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>Indicates the AWS account ID of the partner who received the Engagement Invitation. This is a unique identifier for managing engagements with specific AWS accounts.</p>
   * @public
   */
  AwsAccountId: string | undefined;
}

/**
 * <p>An object that contains an <code>Address</code> object's subset of fields.</p>
 * @public
 */
export interface AddressSummary {
  /**
   * <p>Specifies the end <code>Customer</code>'s city associated with the <code>Opportunity</code>.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s postal code associated with the <code>Opportunity</code>.</p>
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s state or region associated with the <code>Opportunity</code>.</p> <p>Valid values: <code>Alabama | Alaska | American Samoa | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | Dist. of Columbia | Federated States of Micronesia | Florida | Georgia | Guam | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Marshall Islands | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire | New Jersey | New Mexico | New York | North Carolina | North Dakota | Northern Mariana Islands | Ohio | Oklahoma | Oregon | Palau | Pennsylvania | Puerto Rico | Rhode Island | South Carolina | South Dakota | Tennessee | Texas | Utah | Vermont | Virginia | Virgin Islands | Washington | West Virginia | Wisconsin | Wyoming | APO/AE | AFO/FPO | FPO, AP</code> </p>
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s country associated with the <code>Opportunity</code>.</p>
   * @public
   */
  CountryCode?: CountryCode | undefined;
}

/**
 * <p>An object that contains an <code>Account</code>'s subset of fields.</p>
 * @public
 */
export interface AccountSummary {
  /**
   * <p>Specifies which industry the end <code>Customer</code> belongs to associated with the <code>Opportunity</code>. It refers to the category or sector that the customer's business operates in.</p> <p>To submit a value outside the picklist, use <code>Other</code>.</p> <p>Conditionally mandatory if <code>Other</code> is selected for Industry Vertical in LOVs.</p>
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s industry associated with the <code> Opportunity</code>, when the selected value in the <code>Industry</code> field is <code>Other</code>. This field is relevant when the customer's industry doesn't fall under the predefined picklist values and requires a custom description.</p>
   * @public
   */
  OtherIndustry?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s company name associated with the <code>Opportunity</code>.</p>
   * @public
   */
  CompanyName: string | undefined;

  /**
   * <p>Specifies the end customer's company website URL associated with the <code>Opportunity</code>. This value is crucial to map the customer within the Amazon Web Services CRM system.</p>
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * <p>Specifies the end <code>Customer</code>'s address details associated with the <code>Opportunity</code>.</p>
   * @public
   */
  Address?: AddressSummary | undefined;
}

/**
 * <p>Represents the contact details of the individual assigned to manage the opportunity within the partner organization. This helps to ensure that there is a point of contact for the opportunity's progress.</p>
 * @public
 */
export interface AssigneeContact {
  /**
   * <p>Provides the email address of the assignee. This email is used for communications and notifications related to the opportunity.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>Specifies the first name of the assignee managing the opportunity. The system automatically retrieves this value from the user profile by referencing the associated email address.</p>
   * @public
   */
  FirstName: string | undefined;

  /**
   * <p>Specifies the last name of the assignee managing the opportunity. The system automatically retrieves this value from the user profile by referencing the associated email address.</p>
   * @public
   */
  LastName: string | undefined;

  /**
   * <p>Specifies the contact phone number of the assignee responsible for the opportunity or engagement. This field enables direct communication for time-sensitive matters and facilitates coordination between AWS and partner teams.</p>
   * @public
   */
  Phone?: string | undefined;

  /**
   * <p>Specifies the business title of the assignee managing the opportunity. This helps clarify the individual's role and responsibilities within the organization. Use the value <code>PartnerAccountManager</code> to update details of the opportunity owner.</p>
   * @public
   */
  BusinessTitle: string | undefined;
}

/**
 * @public
 */
export interface AssignOpportunityRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunity is assigned in. Use <code>AWS</code> to assign real opportunities in the Amazon Web Services catalog, and <code>Sandbox</code> for testing in secure, isolated environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Requires the <code>Opportunity</code>'s unique identifier when you want to assign it to another user. Provide the correct identifier so the intended opportunity is reassigned.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Specifies the user or team member responsible for managing the assigned opportunity. This field identifies the <i>Assignee</i> based on the partner's internal team structure. Ensure that the email address is associated with a registered user in your Partner Central account.</p>
   * @public
   */
  Assignee: AssigneeContact | undefined;
}

/**
 * @public
 */
export interface AssociateOpportunityRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunity association is made in. Use <code>AWS</code> to associate opportunities in the Amazon Web Services catalog, and <code>Sandbox</code> for testing in secure, isolated environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Requires the <code>Opportunity</code>'s unique identifier when you want to associate it with a related entity. Provide the correct identifier so the intended opportunity is updated with the association.</p>
   * @public
   */
  OpportunityIdentifier: string | undefined;

  /**
   * <p>Specifies the entity type that you're associating with the <code> Opportunity</code>. This helps to categorize and properly process the association.</p>
   * @public
   */
  RelatedEntityType: RelatedEntityType | undefined;

  /**
   * <p>Requires the related entity's unique identifier when you want to associate it with the <code> Opportunity</code>. For Amazon Web Services Marketplace entities, provide the Amazon Resource Name (ARN). Use the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html"> Amazon Web Services Marketplace API</a> to obtain the ARN.</p>
   * @public
   */
  RelatedEntityIdentifier: string | undefined;
}

/**
 * <p>An object that contains a <code>Customer Partner</code>'s contact details.</p>
 * @public
 */
export interface Contact {
  /**
   * <p>The contact's email address associated with the <code>Opportunity</code>.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The contact's first name associated with the <code>Opportunity</code>.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The contact's last name associated with the <code>Opportunity</code>.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The partner contact's title (job title or role) associated with the <code>Opportunity</code>. <code>BusinessTitle</code> supports either <code>PartnerAccountManager</code> or <code>OpportunityOwner</code>.</p>
   * @public
   */
  BusinessTitle?: string | undefined;

  /**
   * <p>The contact's phone number associated with the <code>Opportunity</code>.</p>
   * @public
   */
  Phone?: string | undefined;
}

/**
 * <p>Represents the customer associated with the AWS opportunity. This field captures key details about the customer that are necessary for managing the opportunity.</p>
 * @public
 */
export interface AwsOpportunityCustomer {
  /**
   * <p>Provides a list of customer contacts involved in the opportunity. These contacts may include decision makers, influencers, and other stakeholders within the customer's organization.</p>
   * @public
   */
  Contacts?: Contact[] | undefined;
}

/**
 * Details for a specific optimization recommendation
 * @public
 */
export interface AwsProductOptimization {
  /**
   * Human-readable explanation of the optimization strategy
   * @public
   */
  Description: string | undefined;

  /**
   * Quantified cost savings achievable by implementing this optimization
   * @public
   */
  SavingsAmount: string | undefined;
}

/**
 * AWS services with program eligibility indicators (MAP, modernization pathways), cost estimates, and optimization recommendations.
 * @public
 */
export interface AwsProductDetails {
  /**
   * AWS Partner Central product identifier used for opportunity association
   * @public
   */
  ProductCode: string | undefined;

  /**
   * Pricing Calculator service code (links to original calculator URL)
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * List of program and pathway categories this product is eligible for
   * @public
   */
  Categories: string[] | undefined;

  /**
   * Baseline service cost before optimizations (may be null for AWS-sourced predictions)
   * @public
   */
  Amount?: string | undefined;

  /**
   * Service cost after applying optimizations (may be null for AWS-sourced predictions)
   * @public
   */
  OptimizedAmount?: string | undefined;

  /**
   * Service-specific cost reduction through optimizations (may be null for AWS-sourced predictions)
   * @public
   */
  PotentialSavingsAmount?: string | undefined;

  /**
   * List of specific optimization recommendations for this product
   * @public
   */
  Optimizations: AwsProductOptimization[] | undefined;
}

/**
 * Comprehensive spend analysis for a single source (AWS or Partner) including total amounts, optimization savings, program category breakdowns, and detailed product-level insights.
 * @public
 */
export interface AwsProductInsights {
  /**
   * ISO 4217 currency code (e.g., "USD") ensuring consistent representation across calculations
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;

  /**
   * Time period for spend amounts: "Monthly" or "Annually"
   * @public
   */
  Frequency: PaymentFrequency | undefined;

  /**
   * Total estimated spend for this source before optimizations
   * @public
   */
  TotalAmount?: string | undefined;

  /**
   * Total estimated spend after applying recommended optimizations
   * @public
   */
  TotalOptimizedAmount?: string | undefined;

  /**
   * Quantified savings achievable through implementing optimizations
   * @public
   */
  TotalPotentialSavingsAmount?: string | undefined;

  /**
   * Spend amounts mapped to AWS programs and modernization pathways
   * @public
   */
  TotalAmountByCategory: Record<string, string> | undefined;

  /**
   * Product-level details including costs and optimization recommendations
   * @public
   */
  AwsProducts: AwsProductDetails[] | undefined;
}

/**
 * Source-separated spend insights that provide independent analysis for AWS predictions and partner estimates
 * @public
 */
export interface AwsProductsSpendInsightsBySource {
  /**
   * Partner-sourced insights derived from Pricing Calculator URLs including detailed service costs and optimizations
   * @public
   */
  Partner?: AwsProductInsights | undefined;

  /**
   * AI-generated insights including recommended products from AWS
   * @public
   */
  AWS?: AwsProductInsights | undefined;
}

/**
 * <p>Contains insights provided by AWS for the opportunity, offering recommendations and analysis that can help the partner optimize their engagement and strategy.</p>
 * @public
 */
export interface AwsOpportunityInsights {
  /**
   * <p>Provides recommendations from AWS on the next best actions to take in order to move the opportunity forward and increase the likelihood of success.</p>
   * @public
   */
  NextBestActions?: string | undefined;

  /**
   * <p>Represents a score assigned by AWS to indicate the level of engagement and potential success for the opportunity. This score helps partners prioritize their efforts.</p>
   * @public
   */
  EngagementScore?: EngagementScore | undefined;

  /**
   * Source-separated spend insights that provide independent analysis for AWS predictions and partner estimates
   * @public
   */
  AwsProductsSpendInsightsBySource?: AwsProductsSpendInsightsBySource | undefined;
}

/**
 * <p>Tracks the history of next steps associated with the opportunity. This field captures the actions planned for the future and their timeline.</p>
 * @public
 */
export interface ProfileNextStepsHistory {
  /**
   * <p>Represents the details of the next step recorded, such as follow-up actions or decisions made. This field helps in tracking progress and ensuring alignment with project goals.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>Indicates the date and time when a particular next step was recorded or planned. This helps in managing the timeline for the opportunity.</p>
   * @public
   */
  Time: Date | undefined;
}

/**
 * <p>Tracks the lifecycle of the AWS opportunity, including stages such as qualification, validation, and closure. This field helps partners understand the current status and progression of the opportunity.</p>
 * @public
 */
export interface AwsOpportunityLifeCycle {
  /**
   * <p>Indicates the expected date by which the opportunity is projected to close. This field helps in planning resources and timelines for both the partner and AWS.</p>
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * <p>Indicates the reason why an opportunity was marked as <code>Closed Lost</code>. This helps in understanding the context behind the lost opportunity and aids in refining future strategies.</p>
   * @public
   */
  ClosedLostReason?: AwsClosedLostReason | undefined;

  /**
   * <p>Represents the current stage of the opportunity in its lifecycle, such as <code>Qualification</code>, <code>Validation</code>, or <code>Closed Won</code>. This helps in understanding the opportunity's progress.</p>
   * @public
   */
  Stage?: AwsOpportunityStage | undefined;

  /**
   * <p>Specifies the immediate next steps required to progress the opportunity. These steps are based on AWS guidance and the current stage of the opportunity.</p>
   * @public
   */
  NextSteps?: string | undefined;

  /**
   * <p>Provides a historical log of previous next steps that were taken to move the opportunity forward. This helps in tracking the decision-making process and identifying any delays or obstacles encountered.</p>
   * @public
   */
  NextStepsHistory?: ProfileNextStepsHistory[] | undefined;
}

/**
 * <p>Provides an estimate of the revenue that the partner is expected to generate from the opportunity. This information helps partners assess the financial value of the project.</p>
 * @public
 */
export interface ExpectedCustomerSpend {
  /**
   * <p>Represents the estimated monthly revenue that the partner expects to earn from the opportunity. This helps in forecasting financial returns.</p>
   * @public
   */
  Amount?: string | undefined;

  /**
   * <p>Indicates the currency in which the revenue estimate is provided. This helps in understanding the financial impact across different markets.</p>
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;

  /**
   * <p>Indicates how frequently the customer is expected to spend the projected amount. Only the value <code>Monthly</code> is allowed for the <code>Frequency</code> field, representing recurring monthly spend.</p>
   * @public
   */
  Frequency: PaymentFrequency | undefined;

  /**
   * <p>Specifies the name of the partner company that is expected to generate revenue from the opportunity. This field helps track the partner’s involvement in the opportunity. This field only accepts the value <code>AWS</code>. If any other value is provided, the system will automatically set it to <code>AWS</code>.</p>
   * @public
   */
  TargetCompany: string | undefined;

  /**
   * <p>A URL providing additional information or context about the spend estimation.</p>
   * @public
   */
  EstimationUrl?: string | undefined;
}

/**
 * <p>Captures details about the project associated with the opportunity, including objectives, scope, and customer requirements.</p>
 * @public
 */
export interface AwsOpportunityProject {
  /**
   * <p>Indicates the expected spending by the customer over the course of the project. This value helps partners and AWS estimate the financial impact of the opportunity. Use the <a href="https://calculator.aws/#/">AWS Pricing Calculator</a> to create an estimate of the customer’s total spend. If only annual recurring revenue (ARR) is available, distribute it across 12 months to provide an average monthly value.</p>
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;

  /**
   * AWS partition where the opportunity will be deployed. Possible values: 'aws-eusc' for AWS European Sovereign Cloud, `null` for all other partitions
   * @public
   */
  AwsPartition?: AwsPartition | undefined;
}

/**
 * <p>Represents other entities related to the AWS opportunity, such as AWS products, partner solutions, and marketplace offers. These associations help build a complete picture of the solution being sold.</p>
 * @public
 */
export interface AwsOpportunityRelatedEntities {
  /**
   * <p>Specifies the AWS products associated with the opportunity. This field helps track the specific products that are part of the proposed solution.</p>
   * @public
   */
  AwsProducts?: string[] | undefined;

  /**
   * <p>Specifies the partner solutions related to the opportunity. These solutions represent the partner's offerings that are being positioned as part of the overall AWS opportunity.</p>
   * @public
   */
  Solutions?: string[] | undefined;
}

/**
 * <p>Represents an Amazon Web Services team member for the engagement. This structure includes details such as name, email, and business title.</p>
 * @public
 */
export interface AwsTeamMember {
  /**
   * <p>Provides the Amazon Web Services team member's email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>Provides the Amazon Web Services team member's first name.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>Provides the Amazon Web Services team member's last name.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services team member's business title and indicates their organizational role.</p>
   * @public
   */
  BusinessTitle?: AwsMemberBusinessTitle | undefined;
}

/**
 * <p>Contains details about the customer associated with the Engagement Invitation, including company information and industry.</p>
 * @public
 */
export interface EngagementCustomer {
  /**
   * <p>Specifies the industry to which the customer’s company belongs. This field helps categorize the opportunity based on the customer’s business sector.</p>
   * @public
   */
  Industry: Industry | undefined;

  /**
   * <p>Represents the name of the customer’s company associated with the Engagement Invitation. This field is used to identify the customer.</p>
   * @public
   */
  CompanyName: string | undefined;

  /**
   * <p>Provides the website URL of the customer’s company. This field helps partners verify the legitimacy and size of the customer organization.</p>
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * <p>Indicates the country in which the customer’s company operates. This field is useful for understanding regional requirements or compliance needs.</p>
   * @public
   */
  CountryCode: CountryCode | undefined;
}

/**
 * <p>Provides comprehensive details about a customer project associated with an Engagement. This may include information such as project goals, timelines, and specific customer requirements. </p>
 * @public
 */
export interface EngagementCustomerProjectDetails {
  /**
   * <p>The title of the project.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>A description of the business problem the project aims to solve.</p>
   * @public
   */
  BusinessProblem: string | undefined;

  /**
   * <p>The target completion date for the customer's project.</p>
   * @public
   */
  TargetCompletionDate: string | undefined;
}

/**
 * <p>The CustomerProjects structure in Engagements offers a flexible framework for managing customer-project relationships. It supports multiple customers per Engagement and multiple projects per customer, while also allowing for customers without projects and projects without specific customers. </p> <p>All Engagement members have full visibility of customers and their associated projects, enabling the capture of relevant context even when project details are not fully defined. This structure also facilitates targeted invitations, allowing partners to focus on specific customers and their business problems when sending Engagement invitations. </p>
 * @public
 */
export interface CustomerProjectsContext {
  /**
   * <p>Contains details about the customer associated with the Engagement Invitation, including company information and industry.</p>
   * @public
   */
  Customer?: EngagementCustomer | undefined;

  /**
   * <p>Information about the customer project associated with the Engagement.</p>
   * @public
   */
  Project?: EngagementCustomerProjectDetails | undefined;
}

/**
 * <p>Contains detailed information about the customer associated with the lead, including company details, industry classification, and AWS maturity level. This information helps qualify and categorize the lead for appropriate engagement strategies.</p>
 * @public
 */
export interface LeadCustomer {
  /**
   * <p>Specifies the industry sector to which the lead customer's company belongs. This categorization helps in understanding the customer's business context and tailoring appropriate solutions.</p>
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * <p>The name of the lead customer's company. This field is essential for identifying and tracking the customer organization associated with the lead.</p>
   * @public
   */
  CompanyName: string | undefined;

  /**
   * <p>The website URL of the lead customer's company. This provides additional context about the customer organization and helps verify company legitimacy and size.</p>
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * <p>An object that contains an <code>Address</code> object's subset of fields.</p>
   * @public
   */
  Address: AddressSummary | undefined;

  /**
   * <p>Indicates the customer's level of experience and adoption with AWS services. This assessment helps determine the appropriate engagement approach and solution complexity.</p>
   * @public
   */
  AwsMaturity?: string | undefined;

  /**
   * <p>Specifies the market segment classification of the lead customer, such as enterprise, mid-market, or small business. This segmentation helps in targeting appropriate solutions and engagement strategies.</p>
   * @public
   */
  MarketSegment?: MarketSegment | undefined;
}

/**
 * <p>An object that contains a lead contact's details associated with the engagement. This provides contact information for individuals involved in lead-related activities.</p>
 * @public
 */
export interface LeadContact {
  /**
   * <p>The lead contact's business title or job role associated with the engagement.</p>
   * @public
   */
  BusinessTitle: string | undefined;

  /**
   * <p>The lead contact's email address associated with the engagement.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The lead contact's first name associated with the engagement.</p>
   * @public
   */
  FirstName: string | undefined;

  /**
   * <p>The lead contact's last name associated with the engagement.</p>
   * @public
   */
  LastName: string | undefined;

  /**
   * <p>The lead contact's phone number associated with the engagement.</p>
   * @public
   */
  Phone?: string | undefined;
}

/**
 * <p>Represents a specific interaction or touchpoint with a lead customer. This structure captures details about communications, meetings, or other engagement activities that help track the lead's progression and engagement history.</p>
 * @public
 */
export interface LeadInteraction {
  /**
   * <p>Specifies the type of source that generated the lead interaction, such as "Event", "Website", "Referral", or "Campaign". This categorization helps track lead generation effectiveness across different channels.</p>
   * @public
   */
  SourceType: string | undefined;

  /**
   * <p>The unique identifier of the specific source that generated the lead interaction. This ID provides traceability back to the original lead generation activity.</p>
   * @public
   */
  SourceId: string | undefined;

  /**
   * <p>The descriptive name of the source that generated the lead interaction, providing a human-readable identifier for the lead generation channel or activity.</p>
   * @public
   */
  SourceName: string | undefined;

  /**
   * <p>Describes the specific use case or business scenario discussed during the lead interaction. This helps categorize the customer's interests and potential solutions.</p>
   * @public
   */
  Usecase?: string | undefined;

  /**
   * <p>The date and time when the lead interaction occurred, in ISO 8601 format (UTC). This timestamp helps track the chronology of lead engagement activities.</p>
   * @public
   */
  InteractionDate?: Date | undefined;

  /**
   * <p>Describes the action taken by the customer during or as a result of the interaction, such as requesting information, scheduling a meeting, or expressing interest in a solution.</p>
   * @public
   */
  CustomerAction: string | undefined;

  /**
   * <p>Describes the business problem or challenge that the customer discussed during the interaction. This information helps qualify the lead and identify appropriate solutions.</p>
   * @public
   */
  BusinessProblem?: string | undefined;

  /**
   * <p>Contains contact information for the customer representative involved in the lead interaction, including their name, title, and contact details.</p>
   * @public
   */
  Contact: LeadContact | undefined;
}

/**
 * <p>Provides comprehensive details about a lead associated with an engagement. This structure contains information about lead qualification status, customer details, and interaction history to facilitate lead management and tracking within the engagement.</p>
 * @public
 */
export interface LeadContext {
  /**
   * <p>Indicates the current qualification status of the lead, such as whether it has been qualified, disqualified, or is still under evaluation. This helps track the lead's progression through the qualification process.</p>
   * @public
   */
  QualificationStatus?: string | undefined;

  /**
   * <p>Contains detailed information about the customer associated with the lead, including company information, contact details, and other relevant customer data.</p>
   * @public
   */
  Customer: LeadCustomer | undefined;

  /**
   * <p>An array of interactions that have occurred with the lead, providing a history of communications, meetings, and other engagement activities related to the lead.</p>
   * @public
   */
  Interactions: LeadInteraction[] | undefined;
}

/**
 * <p>Represents the payload of an Engagement context. The structure of this payload varies based on the context type specified in the EngagementContextDetails. </p>
 * @public
 */
export type EngagementContextPayload =
  | EngagementContextPayload.CustomerProjectMember
  | EngagementContextPayload.LeadMember
  | EngagementContextPayload.$UnknownMember;

/**
 * @public
 */
export namespace EngagementContextPayload {
  /**
   * <p>Contains detailed information about a customer project when the context type is "CustomerProject". This field is present only when the Type in EngagementContextDetails is set to "CustomerProject". </p>
   * @public
   */
  export interface CustomerProjectMember {
    CustomerProject: CustomerProjectsContext;
    Lead?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains detailed information about a lead when the context type is "Lead". This field is present only when the Type in EngagementContextDetails is set to "Lead".</p>
   * @public
   */
  export interface LeadMember {
    CustomerProject?: never;
    Lead: LeadContext;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CustomerProject?: never;
    Lead?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CustomerProject: (value: CustomerProjectsContext) => T;
    Lead: (value: LeadContext) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEngagementContextRequest {
  /**
   * <p>Specifies the catalog associated with the engagement context request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the engagement context is created in. Use <code>AWS</code> to create contexts in the production environment, and <code>Sandbox</code> for testing in secure, isolated environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the <code>Engagement</code> for which the context is being created. This parameter ensures the context is associated with the correct engagement and provides the necessary linkage between the engagement and its contextual information.</p>
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier provided by the client to ensure that the request is handled exactly once. This token helps prevent duplicate context creations and must not exceed sixty-four alphanumeric characters. Use a UUID or other unique string to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the type of context being created for the engagement. This field determines the structure and content of the context payload. Valid values include <code>CustomerProject</code> for customer project-related contexts. The type field ensures that the context is properly categorized and processed according to its intended purpose.</p>
   * @public
   */
  Type: EngagementContextType | undefined;

  /**
   * <p>Represents the payload of an Engagement context. The structure of this payload varies based on the context type specified in the EngagementContextDetails. </p>
   * @public
   */
  Payload: EngagementContextPayload | undefined;
}

/**
 * @public
 */
export interface CreateEngagementContextResponse {
  /**
   * <p>The unique identifier of the engagement to which the context was added. This ID confirms the successful association of the context with the specified engagement.</p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the engagement to which the context was added. This globally unique identifier can be used for cross-service references and IAM policies.</p>
   * @public
   */
  EngagementArn?: string | undefined;

  /**
   * <p>The timestamp indicating when the engagement was last modified as a result of adding the context, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z".</p>
   * @public
   */
  EngagementLastModifiedAt?: Date | undefined;

  /**
   * <p>The unique identifier assigned to the newly created engagement context. This ID can be used to reference the specific context within the engagement for future operations.</p>
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * <p>Provides detailed context information for an Engagement. This structure allows for specifying the type of context and its associated payload. </p>
 * @public
 */
export interface EngagementContextDetails {
  /**
   * <p>The unique identifier of the engagement context. This ID is used to reference and manage the specific context within the engagement.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Specifies the type of Engagement context. Valid values are "CustomerProject" or "Document", indicating whether the context relates to a customer project or a document respectively. </p>
   * @public
   */
  Type: EngagementContextType | undefined;

  /**
   * <p>Contains the specific details of the Engagement context. The structure of this payload varies depending on the Type field. </p>
   * @public
   */
  Payload?: EngagementContextPayload | undefined;
}

/**
 * @public
 */
export interface CreateEngagementRequest {
  /**
   * <p>The <code>CreateEngagementRequest$Catalog</code> parameter specifies the catalog related to the engagement. Accepted values are <code>AWS</code> and <code>Sandbox</code>, which determine the environment in which the engagement is managed.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The <code>CreateEngagementRequest$ClientToken</code> parameter specifies a unique, case-sensitive identifier to ensure that the request is handled exactly once. The value must not exceed sixty-four alphanumeric characters.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the title of the <code>Engagement</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>Provides a description of the <code>Engagement</code>.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The <code>Contexts</code> field is a required array of objects, with a maximum of 5 contexts allowed, specifying detailed information about customer projects associated with the Engagement. Each context object contains a <code>Type</code> field indicating the context type, which must be <code>CustomerProject</code> in this version, and a <code>Payload</code> field containing the <code>CustomerProject</code> details. The <code>CustomerProject</code> object is composed of two main components: <code>Customer</code> and <code>Project</code>. The <code>Customer</code> object includes information such as <code>CompanyName</code>, <code>WebsiteUrl</code>, <code>Industry</code>, and <code>CountryCode</code>, providing essential details about the customer. The <code>Project</code> object contains <code>Title</code>, <code>BusinessProblem</code>, and <code>TargetCompletionDate</code>, offering insights into the specific project associated with the customer. This structure allows comprehensive context to be included within the Engagement, facilitating effective collaboration between parties by providing relevant customer and project information.</p>
   * @public
   */
  Contexts?: EngagementContextDetails[] | undefined;
}

/**
 * @public
 */
export interface CreateEngagementResponse {
  /**
   * <p>Unique identifier assigned to the newly created engagement.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the engagement.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). For newly created engagements, this value matches the creation timestamp. Example: "2023-05-01T20:37:46Z".</p>
   * @public
   */
  ModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetEngagementRequest {
  /**
   * <p>Specifies the catalog related to the engagement request. Valid values are <code>AWS</code> and <code>Sandbox</code>.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Specifies the identifier of the Engagement record to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEngagementResponse {
  /**
   * <p>The unique resource identifier of the engagement retrieved.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the engagement retrieved.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The title of the engagement. It provides a brief, descriptive name for the engagement that is meaningful and easily recognizable.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>A more detailed description of the engagement. This provides additional context or information about the engagement's purpose or scope.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the Engagement was created, presented in ISO 8601 format (UTC). For example: "2023-05-01T20:37:46Z". This timestamp helps track the lifecycle of the Engagement.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The AWS account ID of the user who originally created the engagement. This field helps in tracking the origin of the engagement.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>Specifies the current count of members participating in the Engagement. This count includes all active members regardless of their roles or permissions within the Engagement.</p>
   * @public
   */
  MemberCount?: number | undefined;

  /**
   * <p>The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z". This helps track the most recent changes to the engagement.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The AWS account ID of the user who last modified the engagement. This field helps track who made the most recent changes to the engagement.</p>
   * @public
   */
  ModifiedBy?: string | undefined;

  /**
   * <p>A list of context objects associated with the engagement. Each context provides additional information related to the Engagement, such as customer projects or documents.</p>
   * @public
   */
  Contexts?: EngagementContextDetails[] | undefined;
}

/**
 * @public
 */
export interface ListEngagementMembersRequest {
  /**
   * <p>The catalog related to the request.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Identifier of the Engagement record to retrieve members from.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Engagement members are the participants in an Engagement, which is likely a collaborative project or business opportunity within the AWS partner network. Members can be different partner organizations or AWS accounts that are working together on a specific engagement. </p> <p>Each member is represented by their AWS Account ID, Company Name, and associated details. Members have a status within the Engagement (PENDING, ACCEPTED, REJECTED, or WITHDRAWN), indicating their current state of participation. Only existing members of an Engagement can view the list of other members. This implies a level of privacy and access control within the Engagement structure. </p>
 * @public
 */
export interface EngagementMember {
  /**
   * <p>The official name of the member's company or organization.</p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p>The URL of the member company's website. This offers a way to find more information about the member organization and serves as an additional identifier. </p>
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * <p>This is the unique identifier for the AWS account associated with the member organization. It's used for AWS-related operations and identity verification. </p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementMembersResponse {
  /**
   * <p> Provides a list of engagement members. </p>
   * @public
   */
  EngagementMemberList: EngagementMember[] | undefined;

  /**
   * <p>A pagination token used to retrieve the next set of results. If there are more results available than can be returned in a single response, this token will be present. Use this token in a subsequent request to retrieve the next page of results. If there are no more results, this value will be null. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies the sorting parameters for listing Engagements.</p>
 * @public
 */
export interface EngagementSort {
  /**
   * <p>The order in which to sort the results.</p>
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * <p>The field by which to sort the results.</p>
   * @public
   */
  SortBy: EngagementSortName | undefined;
}

/**
 * @public
 */
export interface ListEngagementsRequest {
  /**
   * <p> Specifies the catalog related to the request. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> A list of AWS account IDs. When specified, the response includes engagements created by these accounts. This filter is useful for finding engagements created by specific team members. </p>
   * @public
   */
  CreatedBy?: string[] | undefined;

  /**
   * <p>An array of strings representing AWS Account IDs. Use this to exclude engagements created by specific users. </p>
   * @public
   */
  ExcludeCreatedBy?: string[] | undefined;

  /**
   * <p>Filters engagements to include only those containing the specified context types, such as "CustomerProject" or "Lead". Use this to find engagements that have specific types of contextual information associated with them.</p>
   * @public
   */
  ContextTypes?: EngagementContextType[] | undefined;

  /**
   * <p>Filters engagements to exclude those containing the specified context types. Use this to find engagements that do not have certain types of contextual information, helping to narrow results based on context exclusion criteria.</p>
   * @public
   */
  ExcludeContextTypes?: EngagementContextType[] | undefined;

  /**
   * <p>Specifies the sorting parameters for listing Engagements.</p>
   * @public
   */
  Sort?: EngagementSort | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. This value is returned from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of strings representing engagement identifiers to retrieve.</p>
   * @public
   */
  EngagementIdentifier?: string[] | undefined;
}

/**
 * <p>An object that contains an <code>Engagement</code>'s subset of fields. </p>
 * @public
 */
export interface EngagementSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the created Engagement.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier for the Engagement.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The title of the Engagement.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The date and time when the Engagement was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The AWS Account ID of the Engagement creator.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The number of members in the Engagement.</p>
   * @public
   */
  MemberCount?: number | undefined;

  /**
   * <p>The timestamp indicating when the engagement was last modified, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z".</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The AWS account ID of the user who last modified the engagement. This field helps track who made the most recent changes to the engagement.</p>
   * @public
   */
  ModifiedBy?: string | undefined;

  /**
   * <p>An array of context types associated with the engagement, such as "CustomerProject" or "Lead". This provides a quick overview of the types of contexts included in the engagement.</p>
   * @public
   */
  ContextTypes?: EngagementContextType[] | undefined;
}

/**
 * @public
 */
export interface ListEngagementsResponse {
  /**
   * <p>An array of engagement summary objects.</p>
   * @public
   */
  EngagementSummaryList: EngagementSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. This field will be null if there are no more results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Defines the sorting parameters for listing tasks. This structure allows for specifying the field to sort by and the order of sorting. </p>
 * @public
 */
export interface ListTasksSortBase {
  /**
   * <p> Determines the order in which the sorted results are presented. </p>
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * <p> Specifies the field by which the task list should be sorted. </p>
   * @public
   */
  SortBy: ListTasksSortName | undefined;
}

/**
 * @public
 */
export interface ListEngagementByAcceptingInvitationTasksRequest {
  /**
   * <p> Use this parameter to control the number of items returned in each request, which can be useful for performance tuning and managing large result sets. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> Use this parameter for pagination when the result set spans multiple pages. This value is obtained from the NextToken field in the response of a previous call to this API. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the sorting criteria for the returned results. This allows you to order the tasks based on specific attributes. </p>
   * @public
   */
  Sort?: ListTasksSortBase | undefined;

  /**
   * <p> Specifies the catalog related to the request. Valid values are: </p> <ul> <li> <p> AWS: Retrieves the request from the production AWS environment. </p> </li> <li> <p> Sandbox: Retrieves the request from a sandbox environment used for testing or development purposes. </p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> Filters the tasks based on their current status. This allows you to focus on tasks in specific states. </p>
   * @public
   */
  TaskStatus?: TaskStatus[] | undefined;

  /**
   * <p> Filters tasks by the identifiers of the opportunities they created or are associated with. </p>
   * @public
   */
  OpportunityIdentifier?: string[] | undefined;

  /**
   * <p> Filters tasks by the identifiers of the engagement invitations they are processing. </p>
   * @public
   */
  EngagementInvitationIdentifier?: string[] | undefined;

  /**
   * <p> Filters tasks by their unique identifiers. Use this when you want to retrieve information about specific tasks. </p>
   * @public
   */
  TaskIdentifier?: string[] | undefined;
}

/**
 * <p> Specifies a subset of fields associated with tasks related to accepting an engagement invitation. </p>
 * @public
 */
export interface ListEngagementByAcceptingInvitationTaskSummary {
  /**
   * <p> Unique identifier of the task. </p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that uniquely identifies the task. </p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p> Task start timestamp. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> Status of the task. </p>
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * <p> Detailed message describing the failure and possible recovery steps. </p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p> A code pointing to the specific reason for the failure. </p>
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * <p> Unique identifier of opportunity that was created. </p>
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * <p> Unique identifier of the resource snapshot job that was created. </p>
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * <p> The unique identifier of the engagement invitation that was accepted. </p>
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementByAcceptingInvitationTasksResponse {
  /**
   * <p> An array of <code>EngagementByAcceptingInvitationTaskSummary</code> objects, each representing a task that matches the specified filters. The array may be empty if no tasks match the criteria. </p>
   * @public
   */
  TaskSummaries?: ListEngagementByAcceptingInvitationTaskSummary[] | undefined;

  /**
   * <p> A token used for pagination to retrieve the next page of results.If there are more results available, this field will contain a token that can be used in a subsequent API call to retrieve the next page. If there are no more results, this field will be null or an empty string. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The key-value pair assigned to a specified resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key in the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value in the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface StartEngagementByAcceptingInvitationTaskRequest {
  /**
   * <p>Specifies the catalog related to the task. Use <code>AWS</code> for production engagements and <code>Sandbox</code> for testing scenarios.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier provided by the client that helps to ensure the idempotency of the request. This can be a random or meaningful string but must be unique for each request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the unique identifier of the <code>EngagementInvitation</code> to be accepted. Providing the correct identifier helps ensure that the correct engagement is processed.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartEngagementByAcceptingInvitationTaskResponse {
  /**
   * <p>The unique identifier of the task, used to track the task’s progress.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task, used for tracking and managing the task within AWS.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The timestamp indicating when the task was initiated. The format follows RFC 3339 section 5.6.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Indicates the current status of the task.</p>
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * <p>If the task fails, this field contains a detailed message describing the failure and possible recovery steps.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Indicates the reason for task failure using an enumerated code.</p>
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * <p>Returns the original opportunity identifier passed in the request. This is the unique identifier for the opportunity.</p>
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * <p>The identifier of the Resource Snapshot Job created as part of this task.</p>
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * <p>Returns the identifier of the engagement invitation that was accepted and used to create the opportunity.</p>
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementFromOpportunityTasksRequest {
  /**
   * <p> Specifies the maximum number of results to return in a single page of the response.Use this parameter to control the number of items returned in each request, which can be useful for performance tuning and managing large result sets. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for requesting the next page of results. This value is obtained from the NextToken field in the response of a previous call to this API. Use this parameter for pagination when the result set spans multiple pages. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the sorting criteria for the returned results. This allows you to order the tasks based on specific attributes. </p>
   * @public
   */
  Sort?: ListTasksSortBase | undefined;

  /**
   * <p> Specifies the catalog related to the request. Valid values are: </p> <ul> <li> <p> AWS: Retrieves the request from the production AWS environment. </p> </li> <li> <p> Sandbox: Retrieves the request from a sandbox environment used for testing or development purposes. </p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> Filters the tasks based on their current status. This allows you to focus on tasks in specific states. </p>
   * @public
   */
  TaskStatus?: TaskStatus[] | undefined;

  /**
   * <p> Filters tasks by their unique identifiers. Use this when you want to retrieve information about specific tasks. </p>
   * @public
   */
  TaskIdentifier?: string[] | undefined;

  /**
   * <p> The identifier of the original opportunity associated with this task. </p>
   * @public
   */
  OpportunityIdentifier?: string[] | undefined;

  /**
   * <p> Filters tasks by the identifiers of the engagements they created or are associated with. </p>
   * @public
   */
  EngagementIdentifier?: string[] | undefined;
}

/**
 * <p> Provides a summary of a task related to creating an engagement from an opportunity. This structure contains key information about the task's status, associated identifiers, and any failure details. </p>
 * @public
 */
export interface ListEngagementFromOpportunityTaskSummary {
  /**
   * <p> A unique identifier for a specific task. </p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) uniquely identifying this task within AWS. This ARN can be used for referencing the task in other AWS services or APIs. </p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p> The timestamp indicating when the task was initiated, in RFC 3339 5.6 date-time format. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> The current status of the task. </p>
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * <p> A detailed message providing additional information about the task, especially useful in case of failures. This field may contain error details or other relevant information about the task's execution </p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p> A code indicating the specific reason for a task failure. This field is populated when the task status is FAILED and provides a categorized reason for the failure. </p>
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * <p> The unique identifier of the original Opportunity from which the Engagement is being created. This field helps track the source of the Engagement creation task. </p>
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * <p> The identifier of the resource snapshot job associated with this task, if a snapshot was created as part of the Engagement creation process. </p>
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * <p> The unique identifier of the engagement created as a result of the task. This field is populated when the task is completed successfully. </p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The unique identifier of the Engagement Invitation.</p>
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementFromOpportunityTasksResponse {
  /**
   * <p> TaskSummaries An array of TaskSummary objects containing details about each task. </p>
   * @public
   */
  TaskSummaries?: ListEngagementFromOpportunityTaskSummary[] | undefined;

  /**
   * <p> A token used for pagination to retrieve the next page of results. If there are more results available, this field will contain a token that can be used in a subsequent API call to retrieve the next page. If there are no more results, this field will be null or an empty string. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Indicates the level of AWS involvement in the opportunity. This field helps track AWS participation throughout the engagement, such as providing technical support, deal assistance, and sales support.</p>
 * @public
 */
export interface AwsSubmission {
  /**
   * <p>Specifies the type of AWS involvement in the opportunity, such as coselling, deal support, or technical consultation. This helps categorize the nature of AWS participation.</p>
   * @public
   */
  InvolvementType: SalesInvolvementType | undefined;

  /**
   * <p>Determines who can view AWS involvement in the opportunity. Typically, this field is set to <code>Full</code> for most cases, but it may be restricted based on special program requirements or confidentiality needs.</p>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * @public
 */
export interface StartEngagementFromOpportunityTaskRequest {
  /**
   * <p>Specifies the catalog in which the engagement is tracked. Acceptable values include <code>AWS</code> for production and <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique token provided by the client to help ensure the idempotency of the request. It helps prevent the same task from being performed multiple times.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique identifier of the opportunity from which the engagement task is to be initiated. This helps ensure that the task is applied to the correct opportunity.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Indicates the level of AWS involvement in the opportunity. This field helps track AWS participation throughout the engagement, such as providing technical support, deal assistance, and sales support.</p>
   * @public
   */
  AwsSubmission: AwsSubmission | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartEngagementFromOpportunityTaskResponse {
  /**
   * <p>The unique identifier of the task, used to track the task’s progress. This value follows a specific pattern: <code>^oit-[0-9a-z]\{13\}$</code>.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task, used for tracking and managing the task within AWS.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The timestamp indicating when the task was initiated. The format follows RFC 3339 section 5.6.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Indicates the current status of the task. Valid values include <code>IN_PROGRESS</code>, <code>COMPLETE</code>, and <code>FAILED</code>.</p>
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * <p>If the task fails, this field contains a detailed message describing the failure and possible recovery steps.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Indicates the reason for task failure using an enumerated code.</p>
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * <p>Returns the original opportunity identifier passed in the request, which is the unique identifier for the opportunity created in the partner’s system.</p>
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * <p>The identifier of the resource snapshot job created to add the opportunity resource snapshot to the Engagement. Only populated if TaskStatus is COMPLETE</p>
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * <p>The identifier of the newly created Engagement. Only populated if TaskStatus is COMPLETE.</p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The identifier of the new Engagement invitation. Only populated if TaskStatus is COMPLETE.</p>
   * @public
   */
  EngagementInvitationId?: string | undefined;
}

/**
 * <p>Contains customer information included in a lead invitation payload. This structure provides essential details about the customer to help partners evaluate the lead opportunity and determine their interest in engagement.</p>
 * @public
 */
export interface LeadInvitationCustomer {
  /**
   * <p>Specifies the industry sector of the customer company associated with the lead invitation. This categorization helps partners understand the customer's business context and assess solution fit.</p>
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * <p>The name of the customer company associated with the lead invitation. This field identifies the target organization for the lead engagement opportunity.</p>
   * @public
   */
  CompanyName: string | undefined;

  /**
   * <p>The website URL of the customer company. This provides additional context about the customer organization and helps partners verify company details and assess business size and legitimacy.</p>
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * <p>The country code indicating the geographic location of the customer company. This information helps partners understand regional requirements and assess their ability to serve the customer effectively.</p>
   * @public
   */
  CountryCode: CountryCode | undefined;

  /**
   * <p>Indicates the customer's level of experience and adoption with AWS services. This assessment helps partners understand the customer's cloud maturity and tailor their engagement approach accordingly.</p>
   * @public
   */
  AwsMaturity?: string | undefined;

  /**
   * <p>Specifies the market segment classification of the customer, such as enterprise, mid-market, or small business. This segmentation helps partners determine the appropriate solution complexity and engagement strategy.</p>
   * @public
   */
  MarketSegment?: MarketSegment | undefined;
}

/**
 * <p>Represents interaction details included in a lead invitation payload. This structure provides context about how the lead was generated and the customer's engagement history to help partners assess the opportunity quality.</p>
 * @public
 */
export interface LeadInvitationInteraction {
  /**
   * <p>Specifies the type of source that generated the lead interaction, such as "Event", "Website", or "Campaign". This helps partners understand the lead generation channel and assess lead quality based on the source type.</p>
   * @public
   */
  SourceType: string | undefined;

  /**
   * <p>The unique identifier of the specific source that generated the lead interaction. This provides traceability to the original lead generation activity for reference and follow-up purposes.</p>
   * @public
   */
  SourceId: string | undefined;

  /**
   * <p>The descriptive name of the source that generated the lead interaction. This human-readable identifier helps partners understand the specific lead generation channel or campaign that created the opportunity.</p>
   * @public
   */
  SourceName: string | undefined;

  /**
   * <p>Describes the specific use case or business scenario associated with the lead interaction. This information helps partners understand the customer's interests and potential solution requirements.</p>
   * @public
   */
  Usecase?: string | undefined;

  /**
   * <p>The business title or job role of the customer contact involved in the lead interaction. This helps partners identify the decision-making level and engagement approach for the lead.</p>
   * @public
   */
  ContactBusinessTitle: string | undefined;
}

/**
 * <p>Represents the data payload of an engagement invitation for a lead opportunity. This contains detailed information about the customer and interaction history that partners use to evaluate whether to accept the lead engagement invitation.</p>
 * @public
 */
export interface LeadInvitationPayload {
  /**
   * <p>Contains information about the customer associated with the lead invitation. This data helps partners understand the customer's profile, industry, and business context to assess the lead opportunity.</p>
   * @public
   */
  Customer: LeadInvitationCustomer | undefined;

  /**
   * <p>Describes the interaction details associated with the lead, including the source of the lead generation and customer engagement information. This context helps partners evaluate the lead quality and engagement approach.</p>
   * @public
   */
  Interaction: LeadInvitationInteraction | undefined;
}

/**
 * <p>Contains details about the project associated with the Engagement Invitation, including the business problem and expected outcomes.</p>
 * @public
 */
export interface ProjectDetails {
  /**
   * <p>Describes the business problem that the project aims to solve. This information is crucial for understanding the project’s goals and objectives.</p>
   * @public
   */
  BusinessProblem: string | undefined;

  /**
   * <p>Specifies the title of the project. This title helps partners quickly identify and understand the focus of the project.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>Specifies the estimated date of project completion. This field helps track the project timeline and manage expectations.</p>
   * @public
   */
  TargetCompletionDate: string | undefined;

  /**
   * <p>Contains revenue estimates for the partner related to the project. This field provides an idea of the financial potential of the opportunity for the partner.</p>
   * @public
   */
  ExpectedCustomerSpend: ExpectedCustomerSpend[] | undefined;
}

/**
 * <p>An object that contains the details of the sender-provided contact person for the <code>EngagementInvitation</code>.</p>
 * @public
 */
export interface SenderContact {
  /**
   * <p>The sender-provided contact's email address associated with the <code>EngagementInvitation</code>.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The sender-provided contact's last name associated with the <code>EngagementInvitation</code>.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The sender-provided contact's first name associated with the <code>EngagementInvitation</code>.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The sender-provided contact's title (job title or role) associated with the <code>EngagementInvitation</code>.</p>
   * @public
   */
  BusinessTitle?: string | undefined;

  /**
   * <p>The sender-provided contact's phone number associated with the <code>EngagementInvitation</code>.</p>
   * @public
   */
  Phone?: string | undefined;
}

/**
 * <p>Represents the data payload of an Engagement Invitation for a specific opportunity. This contains detailed information that partners use to evaluate the engagement.</p>
 * @public
 */
export interface OpportunityInvitationPayload {
  /**
   * <p>Represents the contact details of the AWS representatives involved in sending the Engagement Invitation. These contacts are opportunity stakeholders.</p>
   * @public
   */
  SenderContacts?: SenderContact[] | undefined;

  /**
   * <p>Outlines the responsibilities or expectations of the receiver in the context of the invitation.</p>
   * @public
   */
  ReceiverResponsibilities: ReceiverResponsibility[] | undefined;

  /**
   * <p>Contains information about the customer related to the opportunity in the Engagement Invitation. This data helps partners understand the customer’s profile and requirements.</p>
   * @public
   */
  Customer: EngagementCustomer | undefined;

  /**
   * <p>Describes the project details associated with the opportunity, including the customer’s needs and the scope of work expected to be performed.</p>
   * @public
   */
  Project: ProjectDetails | undefined;
}

/**
 * <p>Contains the data payload associated with the Engagement Invitation. This payload includes essential details related to the AWS opportunity and is used by partners to evaluate whether to accept or reject the engagement.</p>
 * @public
 */
export type Payload = Payload.LeadInvitationMember | Payload.OpportunityInvitationMember | Payload.$UnknownMember;

/**
 * @public
 */
export namespace Payload {
  /**
   * <p>Specifies the details of the opportunity invitation within the Engagement Invitation payload. This data helps partners understand the context, scope, and expected involvement for the opportunity from AWS.</p>
   * @public
   */
  export interface OpportunityInvitationMember {
    OpportunityInvitation: OpportunityInvitationPayload;
    LeadInvitation?: never;
    $unknown?: never;
  }

  /**
   * <p>Specifies the details of the lead invitation within the Engagement Invitation payload. This data helps partners understand the lead context, customer information, and interaction history for the lead opportunity from AWS.</p>
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
 * <p>Represents the entity that received the Engagement Invitation, including account and company details. This field is essential for tracking the partner who is being invited to collaborate.</p>
 * @public
 */
export type Receiver = Receiver.AccountMember | Receiver.$UnknownMember;

/**
 * @public
 */
export namespace Receiver {
  /**
   * <p>Specifies the AWS account of the partner who received the Engagement Invitation. This field is used to track the invitation recipient within the AWS ecosystem.</p>
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
 * <p> The Invitation structure represents an invitation exchanged between partners and AWS. It includes a message, receiver information, and a payload providing context for the invitation. </p>
 * @public
 */
export interface Invitation {
  /**
   * <p> A message accompanying the invitation. </p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Represents the entity that received the Engagement Invitation, including account and company details. This field is essential for tracking the partner who is being invited to collaborate.</p>
   * @public
   */
  Receiver: Receiver | undefined;

  /**
   * <p>Contains the data payload associated with the Engagement Invitation. This payload includes essential details related to the AWS opportunity and is used by partners to evaluate whether to accept or reject the engagement.</p>
   * @public
   */
  Payload: Payload | undefined;
}

/**
 * @public
 */
export interface CreateEngagementInvitationRequest {
  /**
   * <p> Specifies the catalog related to the engagement. Accepted values are <code>AWS</code> and <code>Sandbox</code>, which determine the environment in which the engagement is managed. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> Specifies a unique, client-generated UUID to ensure that the request is handled exactly once. This token helps prevent duplicate invitation creations. </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p> The unique identifier of the <code>Engagement</code> associated with the invitation. This parameter ensures the invitation is created within the correct <code>Engagement</code> context. </p>
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * <p> The <code>Invitation</code> object all information necessary to initiate an engagement invitation to a partner. It contains a personalized message from the sender, the invitation's receiver, and a payload. The <code>Payload</code> can be the <code>OpportunityInvitation</code>, which includes detailed structures for sender contacts, partner responsibilities, customer information, and project details. </p>
   * @public
   */
  Invitation: Invitation | undefined;
}

/**
 * @public
 */
export interface CreateEngagementInvitationResponse {
  /**
   * <p> Unique identifier assigned to the newly created engagement invitation. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that uniquely identifies the engagement invitation. </p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetEngagementInvitationRequest {
  /**
   * <p>Specifies the catalog associated with the request. The field accepts values from the predefined set: <code>AWS</code> for live operations or <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Specifies the unique identifier for the retrieved engagement invitation.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>The EngagementMemberSummary provides a snapshot of essential information about participants in an AWS Partner Central Engagement. This compact data structure encapsulates key details of each member, facilitating efficient collaboration and management within the Engagement. </p>
 * @public
 */
export interface EngagementMemberSummary {
  /**
   * <p>The official name of the member's company or organization.</p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p>The URL of the member company's website. This offers a way to find more information about the member organization and serves as an additional identifier. </p>
   * @public
   */
  WebsiteUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetEngagementInvitationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the engagement invitation.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of payload contained in the engagement invitation, indicating what data or context the payload covers.</p>
   * @public
   */
  PayloadType?: EngagementInvitationPayloadType | undefined;

  /**
   * <p>Unique identifier assigned to the engagement invitation being retrieved.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the engagement associated with this invitation.This ID links the invitation to its corresponding engagement.</p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The title of the engagement invitation, summarizing the purpose or objectives of the opportunity shared by AWS.</p>
   * @public
   */
  EngagementTitle?: string | undefined;

  /**
   * <p>The current status of the engagement invitation.</p>
   * @public
   */
  Status?: InvitationStatus | undefined;

  /**
   * <p>The date when the engagement invitation was sent to the partner.</p>
   * @public
   */
  InvitationDate?: Date | undefined;

  /**
   * <p>Indicates the date on which the engagement invitation will expire if not accepted by the partner.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>Specifies the AWS Account ID of the sender, which identifies the AWS team responsible for sharing the engagement invitation.</p>
   * @public
   */
  SenderAwsAccountId?: string | undefined;

  /**
   * <p>The name of the AWS organization or team that sent the engagement invitation.</p>
   * @public
   */
  SenderCompanyName?: string | undefined;

  /**
   * <p>Information about the partner organization or team that received the engagement invitation, including contact details and identifiers.</p>
   * @public
   */
  Receiver?: Receiver | undefined;

  /**
   * <p>Indicates the catalog from which the engagement invitation details are retrieved. This field helps in identifying the appropriate catalog (e.g., <code>AWS</code> or <code>Sandbox</code>) used in the request.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>If the engagement invitation was rejected, this field specifies the reason provided by the partner for the rejection.</p>
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * <p>Details of the engagement invitation payload, including specific data relevant to the invitation's contents, such as customer information and opportunity insights.</p>
   * @public
   */
  Payload?: Payload | undefined;

  /**
   * <p>The message sent to the invited partner when the invitation was created.</p>
   * @public
   */
  InvitationMessage?: string | undefined;

  /**
   * <p>The description of the engagement associated with this invitation.</p>
   * @public
   */
  EngagementDescription?: string | undefined;

  /**
   * <p>A list of active members currently part of the Engagement. This array contains a maximum of 10 members, each represented by an object with the following properties.</p> <ul> <li> <p>CompanyName: The name of the member's company.</p> </li> <li> <p>WebsiteUrl: The website URL of the member's company.</p> </li> </ul>
   * @public
   */
  ExistingMembers?: EngagementMemberSummary[] | undefined;
}

/**
 * <p>Defines sorting options for retrieving Engagement Invitations. Sorting can be done based on various criteria like the invitation date or status.</p>
 * @public
 */
export interface OpportunityEngagementInvitationSort {
  /**
   * <p>Defines the order in which the Engagement Invitations are sorted. The values can be <code>ASC</code> (ascending) or <code>DESC</code> (descending).</p>
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * <p>Specifies the field by which the Engagement Invitations are sorted. Common values include <code>InvitationDate</code> and <code>Status</code>.</p>
   * @public
   */
  SortBy: OpportunityEngagementInvitationSortName | undefined;
}

/**
 * @public
 */
export interface ListEngagementInvitationsRequest {
  /**
   * <p>Specifies the catalog from which to list the engagement invitations. Use <code>AWS</code> for production invitations or <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Specifies the maximum number of engagement invitations to return in the response. If more results are available, a pagination token will be provided.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token used to retrieve additional pages of results when the response to a previous request was truncated. Pass this token to continue listing invitations from where the previous call left off.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the sorting options for listing engagement invitations. Invitations can be sorted by fields such as <code>InvitationDate</code> or <code>Status</code> to help partners view results in their preferred order.</p>
   * @public
   */
  Sort?: OpportunityEngagementInvitationSort | undefined;

  /**
   * <p>Defines the type of payload associated with the engagement invitations to be listed. The attributes in this payload help decide on acceptance or rejection of the invitation.</p>
   * @public
   */
  PayloadType?: EngagementInvitationPayloadType[] | undefined;

  /**
   * <p>Specifies the type of participant for which to list engagement invitations. Identifies the role of the participant.</p>
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * <p> Status values to filter the invitations. </p>
   * @public
   */
  Status?: InvitationStatus[] | undefined;

  /**
   * <p> Retrieves a list of engagement invitation summaries based on specified filters. The ListEngagementInvitations operation allows you to view all invitations that you have sent or received. You must specify the ParticipantType to filter invitations where you are either the SENDER or the RECEIVER. Invitations will automatically expire if not accepted within 15 days. </p>
   * @public
   */
  EngagementIdentifier?: string[] | undefined;

  /**
   * <p> List of sender AWS account IDs to filter the invitations. </p>
   * @public
   */
  SenderAwsAccountId?: string[] | undefined;
}

/**
 * <p>Provides a summarized view of the Engagement Invitation, including details like the identifier, status, and sender. This summary helps partners track and manage AWS originated opportunities.</p>
 * @public
 */
export interface EngagementInvitationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Engagement Invitation. The ARN is a unique identifier that allows partners to reference the invitation in their system and manage its lifecycle.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Describes the type of payload associated with the Engagement Invitation, such as <code>Opportunity</code> or <code>MarketplaceOffer</code>. This helps partners understand the nature of the engagement request from AWS.</p>
   * @public
   */
  PayloadType?: EngagementInvitationPayloadType | undefined;

  /**
   * <p>Represents the unique identifier of the Engagement Invitation. This identifier is used to track the invitation and to manage responses like acceptance or rejection.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p> The identifier of the Engagement associated with this invitation. This links the invitation to its parent Engagement. </p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>Provides a short title or description of the Engagement Invitation. This title helps partners quickly identify and differentiate between multiple engagement opportunities.</p>
   * @public
   */
  EngagementTitle?: string | undefined;

  /**
   * <p>Represents the current status of the Engagement Invitation, such as <code>Pending</code>, <code>Accepted</code>, or <code>Rejected</code>. The status helps track the progress and response to the invitation.</p>
   * @public
   */
  Status?: InvitationStatus | undefined;

  /**
   * <p>Indicates the date when the Engagement Invitation was sent to the partner. This provides context for when the opportunity was shared and helps in tracking the timeline for engagement.</p>
   * @public
   */
  InvitationDate?: Date | undefined;

  /**
   * <p>Indicates the date and time when the Engagement Invitation will expire. After this date, the invitation can no longer be accepted, and the opportunity will be unavailable to the partner.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>Specifies the AWS account ID of the sender who initiated the Engagement Invitation. This allows the partner to identify the AWS entity or representative responsible for sharing the opportunity.</p>
   * @public
   */
  SenderAwsAccountId?: string | undefined;

  /**
   * <p>Indicates the name of the company or AWS division that sent the Engagement Invitation. This information is useful for partners to know which part of AWS is requesting engagement.</p>
   * @public
   */
  SenderCompanyName?: string | undefined;

  /**
   * <p>Specifies the partner company or individual that received the Engagement Invitation. This field is important for tracking who the invitation was sent to within the partner organization.</p>
   * @public
   */
  Receiver?: Receiver | undefined;

  /**
   * <p>Specifies the catalog in which the Engagement Invitation resides. This can be either the <code>AWS</code> or <code>Sandbox</code> catalog, indicating whether the opportunity is live or being tested.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Identifies the role of the caller in the engagement invitation.</p>
   * @public
   */
  ParticipantType?: ParticipantType | undefined;
}

/**
 * @public
 */
export interface ListEngagementInvitationsResponse {
  /**
   * <p>An array containing summaries of engagement invitations. Each summary includes information such as the invitation title, invitation date, and the current status of the invitation.</p>
   * @public
   */
  EngagementInvitationSummaries?: EngagementInvitationSummary[] | undefined;

  /**
   * <p>A pagination token returned when there are more results available than can be returned in a single call. Use this token to retrieve additional pages of engagement invitation summaries.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectEngagementInvitationRequest {
  /**
   * <p>This is the catalog that's associated with the engagement invitation. Acceptable values are <code>AWS</code> or <code>Sandbox</code>, and these values determine the environment in which the opportunity is managed.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>This is the unique identifier of the rejected <code>EngagementInvitation</code>. Providing the correct identifier helps to ensure that the intended invitation is rejected.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>This describes the reason for rejecting the engagement invitation, which helps AWS track usage patterns. Acceptable values include the following:</p> <ul> <li> <p> <i>Customer problem unclear:</i> The customer's problem isn't understood.</p> </li> <li> <p> <i>Next steps unclear:</i> The next steps required to proceed aren't understood.</p> </li> <li> <p> <i>Unable to support:</i> The partner is unable to provide support due to resource or capability constraints.</p> </li> <li> <p> <i>Duplicate of partner referral:</i> The opportunity is a duplicate of an existing referral.</p> </li> <li> <p> <i>Other:</i> Any reason not covered by other values.</p> </li> </ul>
   * @public
   */
  RejectionReason?: string | undefined;
}

/**
 * @public
 */
export interface GetSellingSystemSettingsRequest {
  /**
   * <p>Specifies the catalog in which the settings are defined. Acceptable values include <code>AWS</code> for production and <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;
}

/**
 * @public
 */
export interface GetSellingSystemSettingsResponse {
  /**
   * <p>Specifies the catalog in which the settings are defined. Acceptable values include <code>AWS</code> for production and <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Specifies the ARN of the IAM Role used for resource snapshot job executions.</p>
   * @public
   */
  ResourceSnapshotJobRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>An object that contains the customer's <code>Account</code> and <code>Contact</code>.</p>
 * @public
 */
export interface Customer {
  /**
   * <p>An object that contains the customer's account details.</p>
   * @public
   */
  Account?: Account | undefined;

  /**
   * <p>Represents the contact details for individuals associated with the customer of the <code>Opportunity</code>. This field captures relevant contacts, including decision-makers, influencers, and technical stakeholders within the customer organization. These contacts are key to progressing the opportunity.</p>
   * @public
   */
  Contacts?: Contact[] | undefined;
}

/**
 * <p>Read-only; shows the last 50 values and change dates for the <code>NextSteps</code> field.</p>
 * @public
 */
export interface NextStepsHistory {
  /**
   * <p>Indicates the step's execution details.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>Indicates the step execution time.</p>
   * @public
   */
  Time: Date | undefined;
}

/**
 * <p>An object that contains the <code>Opportunity</code> lifecycle's details.</p>
 * @public
 */
export interface LifeCycle {
  /**
   * <p>Specifies the current stage of the <code>Opportunity</code>'s lifecycle as it maps to Amazon Web Services stages from the current stage in the partner CRM. This field provides a translated value of the stage, and offers insight into the <code>Opportunity</code>'s progression in the sales cycle, according to Amazon Web Services definitions.</p> <note> <p>A lead and a prospect must be further matured to a <code>Qualified</code> opportunity before submission. Opportunities that were closed/lost before submission aren't suitable for submission.</p> </note> <p>The descriptions of each sales stage are:</p> <ul> <li> <p>Prospect: Amazon Web Services identifies the opportunity. It can be active (Comes directly from the end customer through a lead) or latent (Your account team believes it exists based on research, account plans, sales plays).</p> </li> <li> <p>Qualified: Your account team engaged with the customer to discuss viability and requirements. The customer agreed that the opportunity is real, of interest, and may solve business/technical needs.</p> </li> <li> <p>Technical Validation: All parties understand the implementation plan.</p> </li> <li> <p>Business Validation: Pricing was proposed, and all parties agree to the steps to close.</p> </li> <li> <p>Committed: The customer signed the contract, but Amazon Web Services hasn't started billing.</p> </li> <li> <p>Launched: The workload is complete, and Amazon Web Services has started billing.</p> </li> <li> <p>Closed Lost: The opportunity is lost, and there are no steps to move forward.</p> </li> </ul>
   * @public
   */
  Stage?: Stage | undefined;

  /**
   * <p>Specifies the reason code when an opportunity is marked as <i>Closed Lost</i>. When you select an appropriate reason code, you communicate the context for closing the <code>Opportunity</code>, and aid in accurate reports and analysis of opportunity outcomes. The possible values are:</p> <ul> <li> <p>Customer Deficiency: The customer lacked necessary resources or capabilities.</p> </li> <li> <p>Delay/Cancellation of Project: The project was delayed or canceled.</p> </li> <li> <p>Legal/Tax/Regulatory: Legal, tax, or regulatory issues prevented progress.</p> </li> <li> <p>Lost to Competitor—Google: The opportunity was lost to Google.</p> </li> <li> <p>Lost to Competitor—Microsoft: The opportunity was lost to Microsoft.</p> </li> <li> <p>Lost to Competitor—SoftLayer: The opportunity was lost to SoftLayer.</p> </li> <li> <p>Lost to Competitor—VMWare: The opportunity was lost to VMWare.</p> </li> <li> <p>Lost to Competitor—Other: The opportunity was lost to a competitor not listed above.</p> </li> <li> <p>No Opportunity: There was no opportunity to pursue.</p> </li> <li> <p>On Premises Deployment: The customer chose an on-premises solution.</p> </li> <li> <p>Partner Gap: The partner lacked necessary resources or capabilities.</p> </li> <li> <p>Price: The price was not competitive or acceptable to the customer.</p> </li> <li> <p>Security/Compliance: Security or compliance issues prevented progress.</p> </li> <li> <p>Technical Limitations: Technical limitations prevented progress.</p> </li> <li> <p>Customer Experience: Issues related to the customer's experience impacted the decision.</p> </li> <li> <p>Other: Any reason not covered by the other values.</p> </li> <li> <p>People/Relationship/Governance: Issues related to people, relationships, or governance.</p> </li> <li> <p>Product/Technology: Issues related to the product or technology.</p> </li> <li> <p>Financial/Commercial: Financial or commercial issues impacted the decision.</p> </li> </ul>
   * @public
   */
  ClosedLostReason?: ClosedLostReason | undefined;

  /**
   * <p>Specifies the upcoming actions or tasks for the <code>Opportunity</code>. Use this field to communicate with Amazon Web Services about the next actions required for the <code>Opportunity</code>.</p>
   * @public
   */
  NextSteps?: string | undefined;

  /**
   * <p>Specifies the date when Amazon Web Services expects to start significant billing, when the project finishes, and when it moves into production. This field informs the Amazon Web Services seller about when the opportunity launches and starts to incur Amazon Web Services usage.</p> <p>Ensure the <code>Target Close Date</code> isn't in the past.</p>
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * <p>Indicates the review status of an opportunity referred by a partner. This field is read-only and only applicable for partner referrals. The possible values are:</p> <ul> <li> <p>Pending Submission: Not submitted for validation (editable).</p> </li> <li> <p>Submitted: Submitted for validation, and Amazon Web Services hasn't reviewed it (read-only).</p> </li> <li> <p>In Review: Amazon Web Services is validating (read-only).</p> </li> <li> <p>Action Required: Issues that Amazon Web Services highlights need to be addressed. Partners should use the <code>UpdateOpportunity</code> API action to update the opportunity and helps to ensure that all required changes are made. Only the following fields are editable when the <code>Lifecycle.ReviewStatus</code> is <code>Action Required</code>:</p> <ul> <li> <p>Customer.Account.Address.City</p> </li> <li> <p>Customer.Account.Address.CountryCode</p> </li> <li> <p>Customer.Account.Address.PostalCode</p> </li> <li> <p>Customer.Account.Address.StateOrRegion</p> </li> <li> <p>Customer.Account.Address.StreetAddress</p> </li> <li> <p>Customer.Account.WebsiteUrl</p> </li> <li> <p>LifeCycle.TargetCloseDate</p> </li> <li> <p>Project.ExpectedMonthlyAWSRevenue.Amount</p> </li> <li> <p>Project.ExpectedMonthlyAWSRevenue.CurrencyCode</p> </li> <li> <p>Project.CustomerBusinessProblem</p> </li> <li> <p>PartnerOpportunityIdentifier</p> </li> </ul> <p>After updates, the opportunity re-enters the validation phase. This process repeats until all issues are resolved, and the opportunity's <code>Lifecycle.ReviewStatus</code> is set to <code>Approved</code> or <code>Rejected</code>.</p> </li> <li> <p>Approved: Validated and converted into the Amazon Web Services seller's pipeline (editable).</p> </li> <li> <p>Rejected: Disqualified (read-only).</p> </li> </ul>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * <p>Contains detailed feedback from Amazon Web Services when requesting additional information from partners. Provides specific guidance on what partners need to provide or clarify for opportunity validation, complementing the <code>ReviewStatusReason</code> field.</p>
   * @public
   */
  ReviewComments?: string | undefined;

  /**
   * <p>Code indicating the validation decision during the Amazon Web Services opportunity review. Applies when status is <code>Rejected</code> or <code>Action Required</code>. Used to document validation results for AWS Partner Referrals and indicate when additional information is needed from partners as part of the APN Customer Engagement (ACE) program.</p>
   * @public
   */
  ReviewStatusReason?: string | undefined;

  /**
   * <p>Captures a chronological record of the next steps or actions planned or taken for the current opportunity, along with the timestamp.</p>
   * @public
   */
  NextStepsHistory?: NextStepsHistory[] | undefined;
}

/**
 * <p>An object that contains marketing details for the <code>Opportunity</code>.</p>
 * @public
 */
export interface Marketing {
  /**
   * <p>Specifies the <code>Opportunity</code> marketing campaign code. The Amazon Web Services campaign code is a reference to specific marketing initiatives, promotions, or activities. This field captures the identifier used to track and categorize the <code>Opportunity</code> within marketing campaigns. If you don't have a campaign code, contact your Amazon Web Services point of contact to obtain one.</p>
   * @public
   */
  CampaignName?: string | undefined;

  /**
   * <p>Indicates if the <code>Opportunity</code> was sourced from an Amazon Web Services marketing activity. Use the value <code>Marketing Activity</code>. Use <code>None</code> if it's not associated with an Amazon Web Services marketing activity. This field helps Amazon Web Services track the return on marketing investments and enables better distribution of marketing budgets among partners.</p>
   * @public
   */
  Source?: MarketingSource | undefined;

  /**
   * <p>Specifies the marketing activity use case or purpose that led to the <code>Opportunity</code>'s creation or contact. This field captures the context or marketing activity's execution's intention and the direct correlation to the generated opportunity or contact. Must be empty when <code>Marketing.AWSFundingUsed = No</code>.</p> <p>Valid values: <code>AI/ML | Analytics | Application Integration | Blockchain | Business Applications | Cloud Financial Management | Compute | Containers | Customer Engagement | Databases | Developer Tools | End User Computing | Front End Web &amp; Mobile | Game Tech | IoT | Management &amp; Governance | Media Services | Migration &amp; Transfer | Networking &amp; Content Delivery | Quantum Technologies | Robotics | Satellite | Security | Serverless | Storage | VR &amp; AR</code> </p>
   * @public
   */
  UseCases?: string[] | undefined;

  /**
   * <p>Specifies the <code>Opportunity</code>'s channel that the marketing activity is associated with or was contacted through. This field provides information about the specific marketing channel that contributed to the generation of the lead or contact.</p>
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * <p>Indicates if the <code>Opportunity</code> is a marketing development fund (MDF) funded activity.</p>
   * @public
   */
  AwsFundingUsed?: AwsFundingUsed | undefined;
}

/**
 * <p>An object that contains the <code>Opportunity</code>'s project details.</p>
 * @public
 */
export interface Project {
  /**
   * <p>Specifies the deployment or consumption model for your solution or service in the <code>Opportunity</code>'s context. You can select multiple options.</p> <p>Options' descriptions from the <code>Delivery Model</code> field are:</p> <ul> <li> <p>SaaS or PaaS: Your Amazon Web Services based solution deployed as SaaS or PaaS in your Amazon Web Services environment.</p> </li> <li> <p>BYOL or AMI: Your Amazon Web Services based solution deployed as BYOL or AMI in the end customer's Amazon Web Services environment.</p> </li> <li> <p>Managed Services: The end customer's Amazon Web Services business management (For example: Consulting, design, implementation, billing support, cost optimization, technical support).</p> </li> <li> <p>Professional Services: Offerings to help enterprise end customers achieve specific business outcomes for enterprise cloud adoption (For example: Advisory or transformation planning).</p> </li> <li> <p>Resell: Amazon Web Services accounts and billing management for your customers.</p> </li> <li> <p>Other: Delivery model not described above.</p> </li> </ul>
   * @public
   */
  DeliveryModels?: DeliveryModel[] | undefined;

  /**
   * <p>Represents the estimated amount that the customer is expected to spend on AWS services related to the opportunity. This helps in evaluating the potential financial value of the opportunity for AWS.</p>
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;

  /**
   * <p>Specifies the <code>Opportunity</code>'s title or name.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Specifies the Amazon Partner Network (APN) program that influenced the <code>Opportunity</code>. APN programs refer to specific partner programs or initiatives that can impact the <code>Opportunity</code>.</p> <p>Valid values: <code>APN Immersion Days | APN Solution Space | ATO (Authority to Operate) | AWS Marketplace Campaign | IS Immersion Day SFID Program | ISV Workload Migration | Migration Acceleration Program | P3 | Partner Launch Initiative | Partner Opportunity Acceleration Funded | The Next Smart | VMware Cloud on AWS | Well-Architected | Windows | Workspaces/AppStream Accelerator Program | WWPS NDPP</code> </p>
   * @public
   */
  ApnPrograms?: string[] | undefined;

  /**
   * <p>Describes the problem the end customer has, and how the partner is helping. Utilize this field to provide a concise narrative that outlines the customer's business challenge or issue. Elaborate on how the partner's solution or offerings align to resolve the customer's business problem. Include relevant information about the partner's value proposition, unique selling points, and expertise to tackle the issue. Offer insights on how the proposed solution meets the customer's needs and provides value. Use concise language and precise descriptions to convey the context and significance of the <code>Opportunity</code>. The content in this field helps Amazon Web Services understand the nature of the <code>Opportunity</code> and the strategic fit of the partner's solution.</p>
   * @public
   */
  CustomerBusinessProblem?: string | undefined;

  /**
   * <p>Specifies the proposed solution focus or type of workload for the Opportunity. This field captures the primary use case or objective of the proposed solution, and provides context and clarity to the addressed workload.</p> <p>Valid values: <code>AI Machine Learning and Analytics | Archiving | Big Data: Data Warehouse/Data Integration/ETL/Data Lake/BI | Blockchain | Business Applications: Mainframe Modernization | Business Applications &amp; Contact Center | Business Applications &amp; SAP Production | Centralized Operations Management | Cloud Management Tools | Cloud Management Tools &amp; DevOps with Continuous Integration &amp; Continuous Delivery (CICD) | Configuration, Compliance &amp; Auditing | Connected Services | Containers &amp; Serverless | Content Delivery &amp; Edge Services | Database | Edge Computing/End User Computing | Energy | Enterprise Governance &amp; Controls | Enterprise Resource Planning | Financial Services | Healthcare and Life Sciences | High Performance Computing | Hybrid Application Platform | Industrial Software | IOT | Manufacturing, Supply Chain and Operations | Media &amp; High performance computing (HPC) | Migration/Database Migration | Monitoring, logging and performance | Monitoring &amp; Observability | Networking | Outpost | SAP | Security &amp; Compliance | Storage &amp; Backup | Training | VMC | VMWare | Web development &amp; DevOps</code> </p>
   * @public
   */
  CustomerUseCase?: string | undefined;

  /**
   * <p>Specifies the current opportunity's parent opportunity identifier.</p>
   * @public
   */
  RelatedOpportunityIdentifier?: string | undefined;

  /**
   * <p>Specifies the <code>Opportunity</code>'s sales activities conducted with the end customer. These activities help drive Amazon Web Services assignment priority.</p> <p>Valid values:</p> <ul> <li> <p>Initialized discussions with customer: Initial conversations with the customer to understand their needs and introduce your solution.</p> </li> <li> <p>Customer has shown interest in solution: After initial discussions, the customer is interested in your solution.</p> </li> <li> <p>Conducted POC/demo: You conducted a proof of concept (POC) or demonstration of the solution for the customer.</p> </li> <li> <p>In evaluation/planning stage: The customer is evaluating the solution and planning potential implementation.</p> </li> <li> <p>Agreed on solution to Business Problem: Both parties agree on how the solution addresses the customer's business problem.</p> </li> <li> <p>Completed Action Plan: A detailed action plan is complete and outlines the steps for implementation.</p> </li> <li> <p>Finalized Deployment Need: Both parties agree with and finalized the deployment needs.</p> </li> <li> <p>SOW Signed: Both parties signed a statement of work (SOW), and formalize the agreement and detail the project scope and deliverables.</p> </li> </ul>
   * @public
   */
  SalesActivities?: SalesActivity[] | undefined;

  /**
   * <p>Name of the <code>Opportunity</code>'s competitor (if any). Use <code>Other</code> to submit a value not in the picklist.</p>
   * @public
   */
  CompetitorName?: CompetitorName | undefined;

  /**
   * <p>Only allowed when <code>CompetitorNames</code> has <code>Other</code> selected.</p>
   * @public
   */
  OtherCompetitorNames?: string | undefined;

  /**
   * <p>Specifies the offered solution for the customer's business problem when the <code> RelatedEntityIdentifiers.Solutions</code> field value is <code>Other</code>.</p>
   * @public
   */
  OtherSolutionDescription?: string | undefined;

  /**
   * <p>Captures additional comments or information for the <code>Opportunity</code> that weren't captured in other fields.</p>
   * @public
   */
  AdditionalComments?: string | undefined;

  /**
   * AWS partition where the opportunity will be deployed. Possible values: 'aws-eusc' for AWS European Sovereign Cloud, `null` for all other partitions
   * @public
   */
  AwsPartition?: AwsPartition | undefined;
}

/**
 * <p>Specifies payments details.</p>
 * @public
 */
export interface MonetaryValue {
  /**
   * <p>Specifies the payment amount.</p>
   * @public
   */
  Amount: string | undefined;

  /**
   * <p>Specifies the payment currency.</p>
   * @public
   */
  CurrencyCode: CurrencyCode | undefined;
}

/**
 * <p>Specifies a customer's procurement terms details. Required only for partners in eligible programs.</p>
 * @public
 */
export interface SoftwareRevenue {
  /**
   * <p>Specifies the customer's intended payment type agreement or procurement method to acquire the solution or service outlined in the <code>Opportunity</code>.</p>
   * @public
   */
  DeliveryModel?: RevenueModel | undefined;

  /**
   * <p>Specifies the payment value (amount and currency).</p>
   * @public
   */
  Value?: MonetaryValue | undefined;

  /**
   * <p>Specifies the <code>Opportunity</code>'s customer engagement start date for the contract's effectiveness.</p>
   * @public
   */
  EffectiveDate?: string | undefined;

  /**
   * <p>Specifies the expiration date for the contract between the customer and Amazon Web Services partner. It signifies the termination date of the agreed-upon engagement period between both parties.</p>
   * @public
   */
  ExpirationDate?: string | undefined;
}

/**
 * @public
 */
export interface CreateOpportunityRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunity is created in. Use <code>AWS</code> to create opportunities in the Amazon Web Services catalog, and <code>Sandbox</code> for testing in secure, isolated environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Identifies the type of support the partner needs from Amazon Web Services.</p> <p>Valid values:</p> <ul> <li> <p>Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.</p> </li> <li> <p>Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.</p> </li> <li> <p>Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.</p> </li> <li> <p>Cosell—Pricing Assistance: Connect with an Amazon Web Services seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).</p> </li> <li> <p>Cosell—Technical Consultation: Connect with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.</p> </li> <li> <p>Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.</p> </li> <li> <p>Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).</p> </li> <li> <p>Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs Amazon Web Services RFx support.</p> </li> </ul>
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * <p>Indicates whether the <code>Opportunity</code> pertains to a national security project. This field must be set to <code>true</code> only when the customer's industry is <i>Government</i>. Additional privacy and security measures apply during the review and management process for opportunities marked as <code>NationalSecurity</code>.</p>
   * @public
   */
  NationalSecurity?: NationalSecurity | undefined;

  /**
   * <p>Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload to the partner.</p> <p>This field allows partners to link an opportunity to their CRM, which helps to ensure seamless integration and accurate synchronization between the Partner Central API and the partner's internal systems.</p>
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * <p>Specifies customer details associated with the <code>Opportunity</code>.</p>
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * <p>An object that contains project details for the <code>Opportunity</code>.</p>
   * @public
   */
  Project?: Project | undefined;

  /**
   * <p>Specifies the opportunity type as a renewal, new, or expansion.</p> <p>Opportunity types:</p> <ul> <li> <p>New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.</p> </li> <li> <p>Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.</p> </li> <li> <p>Expansion opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer.</p> </li> </ul>
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * <p>This object contains marketing details and is optional for an opportunity.</p>
   * @public
   */
  Marketing?: Marketing | undefined;

  /**
   * <p>Specifies details of a customer's procurement terms. This is required only for partners in eligible programs.</p>
   * @public
   */
  SoftwareRevenue?: SoftwareRevenue | undefined;

  /**
   * <p>Required to be unique, and should be unchanging, it can be randomly generated or a meaningful string.</p> <p>Default: None</p> <p>Best practice: To help ensure uniqueness and avoid conflicts, use a Universally Unique Identifier (UUID) as the <code>ClientToken</code>. You can use standard libraries from most programming languages to generate this. If you use the same client token, the API returns the following error: "Conflicting client token submitted for a new request body."</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>An object that contains lifecycle details for the <code>Opportunity</code>.</p>
   * @public
   */
  LifeCycle?: LifeCycle | undefined;

  /**
   * <p>Specifies the origin of the opportunity, indicating if it was sourced from Amazon Web Services or the partner. For all opportunities created with <code>Catalog: AWS</code>, this field must only be <code>Partner Referral</code>. However, when using <code>Catalog: Sandbox</code>, you can set this field to <code>AWS Referral</code> to simulate Amazon Web Services referral creation. This allows Amazon Web Services-originated flows testing in the sandbox catalog.</p>
   * @public
   */
  Origin?: OpportunityOrigin | undefined;

  /**
   * <p>Represents the internal team handling the opportunity. Specify collaborating members of this opportunity who are within the partner's organization.</p>
   * @public
   */
  OpportunityTeam?: Contact[] | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOpportunityResponse {
  /**
   * <p>Read-only, system-generated <code>Opportunity</code> unique identifier. Amazon Web Services creates this identifier, and it's used for all subsequent opportunity actions, such as updates, associations, and submissions. It helps to ensure that each opportunity is accurately tracked and managed.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner.</p>
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * <p> <code>DateTime</code> when the opportunity was last modified. When the <code>Opportunity</code> is created, its value is <code>CreatedDate</code>.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DisassociateOpportunityRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunity disassociation is made in. Use <code>AWS</code> to disassociate opportunities in the Amazon Web Services catalog, and <code>Sandbox</code> for testing in secure, isolated environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The opportunity's unique identifier for when you want to disassociate it from related entities. This identifier helps to ensure that the correct opportunity is updated.</p> <p>Validation: Ensure that the provided identifier corresponds to an existing opportunity in the Amazon Web Services system because incorrect identifiers result in an error and no changes are made.</p>
   * @public
   */
  OpportunityIdentifier: string | undefined;

  /**
   * <p>The type of the entity that you're disassociating from the opportunity. When you specify the entity type, it helps the system correctly process the disassociation request to ensure that the right connections are removed.</p> <p>Examples of entity types include Partner Solution, Amazon Web Services product, and Amazon Web Services Marketplaceoffer. Ensure that the value matches one of the expected entity types.</p> <p>Validation: Provide a valid entity type to help ensure successful disassociation. An invalid or incorrect entity type results in an error.</p>
   * @public
   */
  RelatedEntityType: RelatedEntityType | undefined;

  /**
   * <p>The related entity's identifier that you want to disassociate from the opportunity. Depending on the type of entity, this could be a simple identifier or an Amazon Resource Name (ARN) for entities managed through Amazon Web Services Marketplace.</p> <p>For Amazon Web Services Marketplace entities, use the Amazon Web Services Marketplace API to obtain the necessary ARNs. For guidance on retrieving these ARNs, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html"> Amazon Web Services MarketplaceUsing the Amazon Web Services Marketplace Catalog API</a>.</p> <p>Validation: Ensure the identifier or ARN is valid and corresponds to an existing entity. An incorrect or invalid identifier results in an error.</p>
   * @public
   */
  RelatedEntityIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAwsOpportunitySummaryRequest {
  /**
   * <p>Specifies the catalog in which the AWS Opportunity is located. Accepted values include <code>AWS</code> for production opportunities or <code>Sandbox</code> for testing purposes. The catalog determines which environment the opportunity data is pulled from.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier for the related partner opportunity. Use this field to correlate an AWS opportunity with its corresponding partner opportunity.</p>
   * @public
   */
  RelatedOpportunityIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAwsOpportunitySummaryResponse {
  /**
   * <p>Provides the unique identifier of the related partner opportunity, allowing partners to link the AWS Opportunity to their corresponding opportunity in their CRM system.</p>
   * @public
   */
  RelatedOpportunityId?: string | undefined;

  /**
   * <p>Specifies whether the AWS Opportunity originated from AWS or the partner. This helps distinguish between opportunities that were sourced by AWS and those referred by the partner.</p>
   * @public
   */
  Origin?: OpportunityOrigin | undefined;

  /**
   * <p>Specifies the type of involvement AWS has in the opportunity, such as direct cosell or advisory support. This field helps partners understand the role AWS plays in advancing the opportunity.</p>
   * @public
   */
  InvolvementType?: SalesInvolvementType | undefined;

  /**
   * <p>Defines the visibility level for the AWS Opportunity. Use <code>Full</code> visibility for most cases, while <code>Limited</code> visibility is reserved for special programs or sensitive opportunities.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>Contains lifecycle information for the AWS Opportunity, including review status, stage, and target close date. This field is crucial for partners to monitor the progression of the opportunity.</p>
   * @public
   */
  LifeCycle?: AwsOpportunityLifeCycle | undefined;

  /**
   * <p>Details the AWS opportunity team, including members involved. This information helps partners know who from AWS is engaged and what their role is.</p>
   * @public
   */
  OpportunityTeam?: AwsTeamMember[] | undefined;

  /**
   * <p>Provides insights into the AWS Opportunity, including engagement score and recommended actions that AWS suggests for the partner.</p>
   * @public
   */
  Insights?: AwsOpportunityInsights | undefined;

  /**
   * <p>Provides a reason for any changes in the involvement type of AWS in the opportunity. This field is used to track why the level of AWS engagement has changed from <code>For Visibility Only</code> to <code>Co-sell</code> offering transparency into the partnership dynamics.</p>
   * @public
   */
  InvolvementTypeChangeReason?: InvolvementTypeChangeReason | undefined;

  /**
   * <p>Lists related entity identifiers, such as AWS products or partner solutions, associated with the AWS Opportunity. These identifiers provide additional context and help partners understand which AWS services are involved.</p>
   * @public
   */
  RelatedEntityIds?: AwsOpportunityRelatedEntities | undefined;

  /**
   * <p>Provides details about the customer associated with the AWS Opportunity, including account information, industry, and other customer data. These details help partners understand the business context of the opportunity.</p>
   * @public
   */
  Customer?: AwsOpportunityCustomer | undefined;

  /**
   * <p>Provides details about the project associated with the AWS Opportunity, including the customer’s business problem, expected outcomes, and project scope. This information is crucial for understanding the broader context of the opportunity.</p>
   * @public
   */
  Project?: AwsOpportunityProject | undefined;

  /**
   * <p>Specifies the catalog in which the AWS Opportunity exists. This is the environment (e.g., <code>AWS</code> or <code>Sandbox</code>) where the opportunity is being managed.</p>
   * @public
   */
  Catalog: string | undefined;
}

/**
 * @public
 */
export interface GetOpportunityRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunity is fetched from. Use <code>AWS</code> to retrieve opportunities in the Amazon Web Services catalog, and <code>Sandbox</code> to retrieve opportunities in a secure, isolated testing environment.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Read-only, system generated <code>Opportunity</code> unique identifier.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>This field provides the associations' information for other entities with the opportunity. These entities include identifiers for <code>AWSProducts</code>, <code>Partner Solutions</code>, and <code>AWSMarketplaceOffers</code>.</p>
 * @public
 */
export interface RelatedEntityIdentifiers {
  /**
   * <p>Takes one value per opportunity. Each value is an Amazon Resource Name (ARN), in this format: <code>"offers": ["arn:aws:aws-marketplace:us-east-1:999999999999:AWSMarketplace/Offer/offer-sampleOffer32"]</code>.</p> <p>Use the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListEntities.html">ListEntities</a> action in the Marketplace Catalog APIs for a list of offers in the associated Marketplace seller account.</p>
   * @public
   */
  AwsMarketplaceOffers?: string[] | undefined;

  /**
   * <p>Enables the association of AWS Marketplace offer sets with the <code>Opportunity</code>. Offer sets allow grouping multiple related marketplace offers together for comprehensive solution packaging. Each value is an Amazon Resource Name (ARN) in this format: <code>arn:aws:aws-marketplace:us-east-1:999999999999:AWSMarketplace/OfferSet/offerset-sampleOfferSet32</code>.</p>
   * @public
   */
  AwsMarketplaceOfferSets?: string[] | undefined;

  /**
   * <p>Enables partner solutions or offerings' association with an opportunity. To associate a solution, provide the solution's unique identifier, which you can obtain with the <code>ListSolutions</code> operation.</p> <p>If the specific solution identifier is not available, you can use the value <code>Other</code> and provide details about the solution in the <code>otherSolutionOffered</code> field. But when the opportunity reaches the <code>Committed</code> stage or beyond, the <code>Other</code> value cannot be used, and a valid solution identifier must be provided.</p> <p>By associating the relevant solutions with the opportunity, you can communicate the offerings that are being considered or implemented to address the customer's business problem.</p>
   * @public
   */
  Solutions?: string[] | undefined;

  /**
   * <p>Enables the association of specific Amazon Web Services products with the <code>Opportunity</code>. Partners can indicate the relevant Amazon Web Services products for the <code>Opportunity</code>'s solution and align with the customer's needs. Returns multiple values separated by commas. For example, <code>"AWSProducts" : ["AmazonRedshift", "AWSAppFabric", "AWSCleanRooms"]</code>.</p> <p>Use the file with the list of Amazon Web Services products hosted on GitHub: <a href="https://github.com/aws-samples/partner-crm-integration-samples/blob/main/resources/aws_products.json"> Amazon Web Services products</a>.</p>
   * @public
   */
  AwsProducts?: string[] | undefined;
}

/**
 * @public
 */
export interface GetOpportunityResponse {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunity information is retrieved from. Use <code>AWS</code> to retrieve opportunities in the Amazon Web Services catalog, and <code>Sandbox</code> to retrieve opportunities in a secure and isolated testing environment.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Identifies the type of support the partner needs from Amazon Web Services.</p> <p>Valid values:</p> <ul> <li> <p>Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.</p> </li> <li> <p>Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.</p> </li> <li> <p>Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.</p> </li> <li> <p>Cosell—Pricing Assistance: Connect with an Amazon Web Services seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).</p> </li> <li> <p>Cosell—Technical Consultation: Connect with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.</p> </li> <li> <p>Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.</p> </li> <li> <p>Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).</p> </li> <li> <p>Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs Amazon Web Services RFx support.</p> </li> </ul>
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * <p>Indicates whether the <code>Opportunity</code> pertains to a national security project. This field must be set to <code>true</code> only when the customer's industry is <i>Government</i>. Additional privacy and security measures apply during the review and management process for opportunities marked as <code>NationalSecurity</code>.</p>
   * @public
   */
  NationalSecurity?: NationalSecurity | undefined;

  /**
   * <p>Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner.</p>
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * <p>Specifies details of the customer associated with the <code>Opportunity</code>.</p>
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * <p>An object that contains project details summary for the <code>Opportunity</code>.</p>
   * @public
   */
  Project?: Project | undefined;

  /**
   * <p>Specifies the opportunity type as renewal, new, or expansion.</p> <p>Opportunity types:</p> <ul> <li> <p>New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.</p> </li> <li> <p>Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, which helps to ensure service continuity.</p> </li> <li> <p>Expansion opportunity: Represents an opportunity to expand the scope of a customer's contract or subscription, either by adding new services or increasing the volume of existing services.</p> </li> </ul>
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * <p>An object that contains marketing details for the <code>Opportunity</code>.</p>
   * @public
   */
  Marketing?: Marketing | undefined;

  /**
   * <p>Specifies details of a customer's procurement terms. Required only for partners in eligible programs.</p>
   * @public
   */
  SoftwareRevenue?: SoftwareRevenue | undefined;

  /**
   * <p>Read-only, system generated <code>Opportunity</code> unique identifier.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the opportunity.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> <code>DateTime</code> when the opportunity was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p> <code>DateTime</code> when the <code>Opportunity</code> was last created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>Provides information about the associations of other entities with the opportunity. These entities include identifiers for <code>AWSProducts</code>, <code>Partner Solutions</code>, and <code>AWSMarketplaceOffers</code>.</p>
   * @public
   */
  RelatedEntityIdentifiers: RelatedEntityIdentifiers | undefined;

  /**
   * <p>An object that contains lifecycle details for the <code>Opportunity</code>.</p>
   * @public
   */
  LifeCycle?: LifeCycle | undefined;

  /**
   * <p>Represents the internal team handling the opportunity. Specify the members involved in collaborating on this opportunity within the partner's organization.</p>
   * @public
   */
  OpportunityTeam?: Contact[] | undefined;
}

/**
 * <p>Defines a filter to retrieve opportunities based on the last modified date. This filter is useful for tracking changes or updates to opportunities over time.</p>
 * @public
 */
export interface LastModifiedDate {
  /**
   * <p>Specifies the date after which the opportunities were modified. Use this filter to retrieve only those opportunities that were modified after a given timestamp.</p>
   * @public
   */
  AfterLastModifiedDate?: Date | undefined;

  /**
   * <p>Specifies the date before which the opportunities were modified. Use this filter to retrieve only those opportunities that were modified before a given timestamp.</p>
   * @public
   */
  BeforeLastModifiedDate?: Date | undefined;
}

/**
 * <p>Object that configures response sorting.</p>
 * @public
 */
export interface OpportunitySort {
  /**
   * <p>Sort order.</p> <p>Default: <code>Descending</code> </p>
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * <p>Field name to sort by.</p>
   * @public
   */
  SortBy: OpportunitySortName | undefined;
}

/**
 * @public
 */
export interface ListOpportunitiesRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunities are listed in. Use <code>AWS</code> for listing real opportunities in the Amazon Web Services catalog, and <code>Sandbox</code> for testing in secure, isolated environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Specifies the maximum number of results to return in a single call. This limits the number of opportunities returned in the response to avoid providing too many results at once.</p> <p>Default: 20</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An object that specifies how the response is sorted. The default <code>Sort.SortBy</code> value is <code>LastModifiedDate</code>.</p>
   * @public
   */
  Sort?: OpportunitySort | undefined;

  /**
   * <p>Filters the opportunities based on their last modified date. This filter helps retrieve opportunities that were updated after the specified date, allowing partners to track recent changes or updates.</p>
   * @public
   */
  LastModifiedDate?: LastModifiedDate | undefined;

  /**
   * <p>Filters the opportunities based on the opportunity identifier. This allows partners to retrieve specific opportunities by providing their unique identifiers, ensuring precise results.</p>
   * @public
   */
  Identifier?: string[] | undefined;

  /**
   * <p>Filters the opportunities based on their lifecycle stage. This filter allows partners to retrieve opportunities at various stages in the sales cycle, such as <code>Qualified</code>, <code>Technical Validation</code>, <code>Business Validation</code>, or <code>Closed Won</code>.</p>
   * @public
   */
  LifeCycleStage?: Stage[] | undefined;

  /**
   * <p>Filters the opportunities based on their current lifecycle approval status. Use this filter to retrieve opportunities with statuses such as <code>Pending Submission</code>, <code>In Review</code>, <code>Action Required</code>, or <code>Approved</code>.</p>
   * @public
   */
  LifeCycleReviewStatus?: ReviewStatus[] | undefined;

  /**
   * <p>Filters the opportunities based on the customer's company name. This allows partners to search for opportunities associated with a specific customer by matching the provided company name string.</p>
   * @public
   */
  CustomerCompanyName?: string[] | undefined;
}

/**
 * <p>An object that contains a <code>Customer</code> object's subset of fields.</p>
 * @public
 */
export interface CustomerSummary {
  /**
   * <p>An object that contains a customer's account details.</p>
   * @public
   */
  Account?: AccountSummary | undefined;
}

/**
 * <p>An object that contains a <code>LifeCycle</code> object's subset of fields.</p>
 * @public
 */
export interface LifeCycleSummary {
  /**
   * <p>Specifies the current stage of the <code>Opportunity</code>'s lifecycle as it maps to Amazon Web Services stages from the current stage in the partner CRM. This field provides a translated value of the stage, and offers insight into the <code>Opportunity</code>'s progression in the sales cycle, according to Amazon Web Services definitions.</p> <note> <p>A lead and a prospect must be further matured to a <code>Qualified</code> opportunity before submission. Opportunities that were closed/lost before submission aren't suitable for submission.</p> </note> <p>The descriptions of each sales stage are:</p> <ul> <li> <p>Prospect: Amazon Web Services identifies the opportunity. It can be active (Comes directly from the end customer through a lead) or latent (Your account team believes it exists based on research, account plans, sales plays).</p> </li> <li> <p>Qualified: Your account team engaged with the customer to discuss viability and understand requirements. The customer agreed that the opportunity is real, of interest, and may solve business/technical needs.</p> </li> <li> <p>Technical Validation: All parties understand the implementation plan.</p> </li> <li> <p>Business Validation: Pricing was proposed, and all parties agree to the steps to close.</p> </li> <li> <p>Committed: The customer signed the contract, but Amazon Web Services hasn't started billing.</p> </li> <li> <p>Launched: The workload is complete, and Amazon Web Services has started billing.</p> </li> <li> <p>Closed Lost: The opportunity is lost, and there are no steps to move forward.</p> </li> </ul>
   * @public
   */
  Stage?: Stage | undefined;

  /**
   * <p>Specifies the reason code when an opportunity is marked as <i>Closed Lost</i>. When you select an appropriate reason code, you communicate the context for closing the <code>Opportunity</code>, and aid in accurate reports and analysis of opportunity outcomes.</p>
   * @public
   */
  ClosedLostReason?: ClosedLostReason | undefined;

  /**
   * <p>Specifies the upcoming actions or tasks for the <code>Opportunity</code>. This field is utilized to communicate to Amazon Web Services the next actions required for the <code>Opportunity</code>.</p>
   * @public
   */
  NextSteps?: string | undefined;

  /**
   * <p>Specifies the date when Amazon Web Services expects to start significant billing, when the project finishes, and when it moves into production. This field informs the Amazon Web Services seller about when the opportunity launches and starts to incur Amazon Web Services usage.</p> <p>Ensure the <code>Target Close Date</code> isn't in the past.</p>
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * <p>Indicates the review status of a partner referred opportunity. This field is read-only and only applicable for partner referrals. Valid values:</p> <ul> <li> <p>Pending Submission: Not submitted for validation (editable).</p> </li> <li> <p>Submitted: Submitted for validation and not yet Amazon Web Services reviewed (read-only).</p> </li> <li> <p>In Review: Undergoing Amazon Web Services validation (read-only).</p> </li> <li> <p>Action Required: Address any issues Amazon Web Services highlights. Use the <code>UpdateOpportunity</code> API action to update the opportunity, and ensure you make all required changes. Only these fields are editable when the <code>Lifecycle.ReviewStatus</code> is <code>Action Required</code>:</p> <ul> <li> <p>Customer.Account.Address.City</p> </li> <li> <p>Customer.Account.Address.CountryCode</p> </li> <li> <p>Customer.Account.Address.PostalCode</p> </li> <li> <p>Customer.Account.Address.StateOrRegion</p> </li> <li> <p>Customer.Account.Address.StreetAddress</p> </li> <li> <p>Customer.Account.WebsiteUrl</p> </li> <li> <p>LifeCycle.TargetCloseDate</p> </li> <li> <p>Project.ExpectedCustomerSpend.Amount</p> </li> <li> <p>Project.ExpectedCustomerSpend.CurrencyCode</p> </li> <li> <p>Project.CustomerBusinessProblem</p> </li> <li> <p>PartnerOpportunityIdentifier</p> </li> </ul> <p>After updates, the opportunity re-enters the validation phase. This process repeats until all issues are resolved, and the opportunity's <code>Lifecycle.ReviewStatus</code> is set to <code>Approved</code> or <code>Rejected</code>.</p> </li> <li> <p>Approved: Validated and converted into the Amazon Web Services seller's pipeline (editable).</p> </li> <li> <p>Rejected: Disqualified (read-only).</p> </li> </ul>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * <p>Indicates why an opportunity was sent back for further details. Partners must take corrective action based on the <code>ReviewComments</code>.</p>
   * @public
   */
  ReviewComments?: string | undefined;

  /**
   * <p>Indicates the reason a specific decision was taken during the opportunity review process. This field combines the reasons for both disqualified and action required statuses, and provides clarity for why an opportunity was disqualified or required further action.</p>
   * @public
   */
  ReviewStatusReason?: string | undefined;
}

/**
 * <p>An object that contains a <code>Project</code> object's subset of fields.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>Specifies your solution or service's deployment or consumption model in the <code>Opportunity</code>'s context. You can select multiple options.</p> <p>Options' descriptions from the <code>Delivery Model</code> field are:</p> <ul> <li> <p>SaaS or PaaS: Your Amazon Web Services based solution deployed as SaaS or PaaS in your Amazon Web Services environment.</p> </li> <li> <p>BYOL or AMI: Your Amazon Web Services based solution deployed as BYOL or AMI in the end customer's Amazon Web Services environment.</p> </li> <li> <p>Managed Services: The end customer's Amazon Web Services business management (For example: Consulting, design, implementation, billing support, cost optimization, technical support).</p> </li> <li> <p>Professional Services: Offerings to help enterprise end customers achieve specific business outcomes for enterprise cloud adoption (For example: Advisory or transformation planning).</p> </li> <li> <p>Resell: Amazon Web Services accounts and billing management for your customers.</p> </li> <li> <p>Other: Delivery model not described above.</p> </li> </ul>
   * @public
   */
  DeliveryModels?: DeliveryModel[] | undefined;

  /**
   * <p>Provides a summary of the expected customer spend for the project, offering a high-level view of the potential financial impact.</p>
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;
}

/**
 * <p>An object that contains an <code>Opportunity</code>'s subset of fields.</p>
 * @public
 */
export interface OpportunitySummary {
  /**
   * <p>Specifies the catalog associated with the opportunity, either <code>AWS</code> or <code>Sandbox</code>. This indicates the environment in which the opportunity is managed.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Read-only, system-generated <code>Opportunity</code> unique identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the opportunity. This globally unique identifier can be used for IAM policies and cross-service references. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Specifies the <code>Opportunity</code>'s unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner. It allows partners to link an opportunity to their CRM.</p>
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * <p>Specifies opportunity type as a renewal, new, or expansion.</p> <p>Opportunity types:</p> <ul> <li> <p>New Opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.</p> </li> <li> <p>Renewal Opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.</p> </li> <li> <p>Expansion Opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer.</p> </li> </ul>
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * <p> <code>DateTime</code> when the <code>Opportunity</code> was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p> <code>DateTime</code> when the <code>Opportunity</code> was last created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>An object that contains the <code>Opportunity</code>'s lifecycle details.</p>
   * @public
   */
  LifeCycle?: LifeCycleSummary | undefined;

  /**
   * <p>An object that contains the <code>Opportunity</code>'s customer details.</p>
   * @public
   */
  Customer?: CustomerSummary | undefined;

  /**
   * <p>An object that contains the <code>Opportunity</code>'s project details summary.</p>
   * @public
   */
  Project?: ProjectSummary | undefined;
}

/**
 * @public
 */
export interface ListOpportunitiesResponse {
  /**
   * <p>An array that contains minimal details for opportunities that match the request criteria. This summary view provides a quick overview of relevant opportunities.</p>
   * @public
   */
  OpportunitySummaries: OpportunitySummary[] | undefined;

  /**
   * <p>A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitOpportunityRequest {
  /**
   * <p>Specifies the catalog related to the request. Valid values are:</p> <ul> <li> <p>AWS: Submits the opportunity request from the production AWS environment.</p> </li> <li> <p>Sandbox: Submits the opportunity request from a sandbox environment used for testing or development purposes.</p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The identifier of the Opportunity previously created by partner and needs to be submitted.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Specifies the level of AWS sellers' involvement on the opportunity. Valid values:</p> <ul> <li> <p> <code>Co-sell</code>: Indicates the user wants to co-sell with AWS. Share the opportunity with AWS to receive deal assistance and support.</p> </li> <li> <p> <code>For Visibility Only</code>: Indicates that the user does not need support from AWS Sales Rep. Share this opportunity with AWS for visibility only, you will not receive deal assistance and support.</p> </li> </ul>
   * @public
   */
  InvolvementType: SalesInvolvementType | undefined;

  /**
   * <p>Determines whether to restrict visibility of the opportunity from AWS sales. Default value is Full. Valid values:</p> <ul> <li> <p> <code>Full</code>: The opportunity is fully visible to AWS sales.</p> </li> <li> <p> <code>Limited</code>: The opportunity has restricted visibility to AWS sales.</p> </li> </ul>
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * @public
 */
export interface UpdateOpportunityRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the opportunity is updated in. Use <code>AWS</code> to update real opportunities in the production environment, and <code>Sandbox</code> for testing in secure, isolated environments. When you use the <code>Sandbox</code> catalog, it allows you to simulate and validate your interactions with Amazon Web Services services without affecting live data or operations.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Identifies the type of support the partner needs from Amazon Web Services.</p> <p>Valid values:</p> <ul> <li> <p>Cosell—Architectural Validation: Confirmation from Amazon Web Services that the partner's proposed solution architecture is aligned with Amazon Web Services best practices and poses minimal architectural risks.</p> </li> <li> <p>Cosell—Business Presentation: Request Amazon Web Services seller's participation in a joint customer presentation.</p> </li> <li> <p>Cosell—Competitive Information: Access to Amazon Web Services competitive resources and support for the partner's proposed solution.</p> </li> <li> <p>Cosell—Pricing Assistance: Connect with an AWS seller for support situations where a partner may be receiving an upfront discount on a service (for example: EDP deals).</p> </li> <li> <p>Cosell—Technical Consultation: Connection with an Amazon Web Services Solutions Architect to address the partner's questions about the proposed solution.</p> </li> <li> <p>Cosell—Total Cost of Ownership Evaluation: Assistance with quoting different cost savings of proposed solutions on Amazon Web Services versus on-premises or a traditional hosting environment.</p> </li> <li> <p>Cosell—Deal Support: Request Amazon Web Services seller's support to progress the opportunity (for example: joint customer call, strategic positioning).</p> </li> <li> <p>Cosell—Support for Public Tender/RFx: Opportunity related to the public sector where the partner needs RFx support from Amazon Web Services.</p> </li> </ul>
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * <p>Specifies if the opportunity is associated with national security concerns. This flag is only applicable when the industry is <code>Government</code>. For national-security-related opportunities, validation and compliance rules may apply, impacting the opportunity's visibility and processing.</p>
   * @public
   */
  NationalSecurity?: NationalSecurity | undefined;

  /**
   * <p>Specifies the opportunity's unique identifier in the partner's CRM system. This value is essential to track and reconcile because it's included in the outbound payload sent back to the partner.</p>
   * @public
   */
  PartnerOpportunityIdentifier?: string | undefined;

  /**
   * <p>Specifies details of the customer associated with the <code>Opportunity</code>.</p>
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * <p>An object that contains project details summary for the <code>Opportunity</code>.</p>
   * @public
   */
  Project?: Project | undefined;

  /**
   * <p>Specifies the opportunity type as a renewal, new, or expansion.</p> <p>Opportunity types:</p> <ul> <li> <p>New opportunity: Represents a new business opportunity with a potential customer that's not previously engaged with your solutions or services.</p> </li> <li> <p>Renewal opportunity: Represents an opportunity to renew an existing contract or subscription with a current customer, ensuring continuity of service.</p> </li> <li> <p>Expansion opportunity: Represents an opportunity to expand the scope of an existing contract or subscription, either by adding new services or increasing the volume of existing services for a current customer.</p> </li> </ul>
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * <p>An object that contains marketing details for the <code>Opportunity</code>.</p>
   * @public
   */
  Marketing?: Marketing | undefined;

  /**
   * <p>Specifies details of a customer's procurement terms. Required only for partners in eligible programs.</p>
   * @public
   */
  SoftwareRevenue?: SoftwareRevenue | undefined;

  /**
   * <p> <code>DateTime</code> when the opportunity was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>Read-only, system generated <code>Opportunity</code> unique identifier.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>An object that contains lifecycle details for the <code>Opportunity</code>.</p>
   * @public
   */
  LifeCycle?: LifeCycle | undefined;
}

/**
 * @public
 */
export interface UpdateOpportunityResponse {
  /**
   * <p>Read-only, system generated <code>Opportunity</code> unique identifier.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p> <code>DateTime</code> when the opportunity was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListOpportunityFromEngagementTasksRequest {
  /**
   * <p>Specifies the maximum number of results to return in a single page of the response. Use this parameter to control the number of items returned in each request, which can be useful for performance tuning and managing large result sets.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for requesting the next page of results. This value is obtained from the NextToken field in the response of a previous call to this API. Use this parameter for pagination when the result set spans multiple pages.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Defines the sorting parameters for listing tasks. This structure allows for specifying the field to sort by and the order of sorting. </p>
   * @public
   */
  Sort?: ListTasksSortBase | undefined;

  /**
   * <p>Specifies the catalog related to the request. Valid values are <code>AWS</code> for production environments and <code>Sandbox</code> for testing or development purposes. The catalog determines which environment the task data is retrieved from.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Filters the tasks based on their current status. This allows you to focus on tasks in specific states. Valid values are <code>COMPLETE</code> for tasks that have finished successfully, <code>INPROGRESS</code> for tasks that are currently running, and <code>FAILED</code> for tasks that have encountered an error and failed to complete.</p>
   * @public
   */
  TaskStatus?: TaskStatus[] | undefined;

  /**
   * <p>Filters tasks by their unique identifiers. Use this when you want to retrieve information about specific tasks. Provide the task ID to get details about a particular opportunity creation task.</p>
   * @public
   */
  TaskIdentifier?: string[] | undefined;

  /**
   * <p>Filters tasks by the identifiers of the opportunities they created or are associated with. Use this to find tasks related to specific opportunity creation processes.</p>
   * @public
   */
  OpportunityIdentifier?: string[] | undefined;

  /**
   * <p>Filters tasks by the identifiers of the engagements from which opportunities are being created. Use this to find all opportunity creation tasks associated with a specific engagement.</p>
   * @public
   */
  EngagementIdentifier?: string[] | undefined;

  /**
   * <p>Filters tasks by the identifiers of the engagement contexts associated with the opportunity creation. Use this to find tasks related to specific contextual information within engagements that are being converted to opportunities.</p>
   * @public
   */
  ContextIdentifier?: string[] | undefined;
}

/**
 * <p>Provides a summary of a task related to creating an opportunity from an engagement. This structure contains key information about the task's status, associated identifiers, and any failure details for opportunity creation processes.</p>
 * @public
 */
export interface ListOpportunityFromEngagementTaskSummary {
  /**
   * <p>The unique identifier of the task for creating an opportunity from an engagement.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the task within AWS. This ARN can be used for referencing the task in other AWS services or APIs.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The timestamp indicating when the task was initiated, in RFC 3339 format.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The current status of the task. Valid values are COMPLETE, INPROGRESS, or FAILED.</p>
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * <p>A detailed message providing additional information about the task, especially useful in case of failures. This field may contain error details or other relevant information about the task's execution.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>A code indicating the specific reason for a task failure. This field is populated when the task status is FAILED and provides a categorized reason for the failure.</p>
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * <p>The unique identifier of the opportunity created as a result of the task. This field is populated when the task is completed successfully.</p>
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * <p>The identifier of the resource snapshot job associated with this task, if a snapshot was created as part of the opportunity creation process.</p>
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * <p>The unique identifier of the engagement from which the opportunity is being created. This field helps track the source of the opportunity creation task.</p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The unique identifier of the engagement context associated with the opportunity creation task. This links the task to specific contextual information within the engagement.</p>
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * @public
 */
export interface ListOpportunityFromEngagementTasksResponse {
  /**
   * <p>An array of <code>ListOpportunityFromEngagementTaskSummary</code> objects, each representing a task that matches the specified filters. The array may be empty if no tasks match the criteria.</p>
   * @public
   */
  TaskSummaries?: ListOpportunityFromEngagementTaskSummary[] | undefined;

  /**
   * <p>A token used for pagination to retrieve the next page of results. If there are more results available, this field will contain a token that can be used in a subsequent API call to retrieve the next page. If there are no more results, this field will be null or an empty string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartOpportunityFromEngagementTaskRequest {
  /**
   * <p>Specifies the catalog in which the opportunity creation task is executed. Acceptable values include <code>AWS</code> for production and <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique token provided by the client to help ensure the idempotency of the request. It helps prevent the same task from being performed multiple times.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique identifier of the engagement from which the opportunity creation task is to be initiated. This helps ensure that the task is applied to the correct engagement.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The unique identifier of the engagement context from which to create the opportunity. This specifies the specific contextual information within the engagement that will be used for opportunity creation.</p>
   * @public
   */
  ContextIdentifier: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartOpportunityFromEngagementTaskResponse {
  /**
   * <p>The unique identifier of the task, used to track the task's progress.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task, used for tracking and managing the task within AWS.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The timestamp indicating when the task was initiated. The format follows RFC 3339 section 5.6.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Indicates the current status of the task.</p>
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * <p>If the task fails, this field contains a detailed message describing the failure and possible recovery steps.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Indicates the reason for task failure using an enumerated code.</p>
   * @public
   */
  ReasonCode?: ReasonCode | undefined;

  /**
   * <p>The unique identifier of the opportunity created as a result of the task. This field is populated when the task is completed successfully.</p>
   * @public
   */
  OpportunityId?: string | undefined;

  /**
   * <p>The identifier of the resource snapshot job created as part of the opportunity creation process.</p>
   * @public
   */
  ResourceSnapshotJobId?: string | undefined;

  /**
   * <p>The unique identifier of the engagement from which the opportunity was created.</p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The unique identifier of the engagement context used to create the opportunity.</p>
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * @public
 */
export interface PutSellingSystemSettingsRequest {
  /**
   * <p>Specifies the catalog in which the settings will be updated. Acceptable values include <code>AWS</code> for production and <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Specifies the ARN of the IAM Role used for resource snapshot job executions.</p>
   * @public
   */
  ResourceSnapshotJobRoleIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface PutSellingSystemSettingsResponse {
  /**
   * <p>Specifies the catalog in which the settings are defined. Acceptable values include <code>AWS</code> for production and <code>Sandbox</code> for testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Specifies the ARN of the IAM Role used for resource snapshot job executions.</p>
   * @public
   */
  ResourceSnapshotJobRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotRequest {
  /**
   * <p> Specifies the catalog where the snapshot is created. Valid values are <code>AWS</code> and <code>Sandbox</code>. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> The unique identifier of the engagement associated with this snapshot. This field links the snapshot to a specific engagement context. </p>
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * <p> Specifies the type of resource for which the snapshot is being created. This field determines the structure and content of the snapshot. Must be one of the supported resource types, such as: <code>Opportunity</code>. </p>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p> The unique identifier of the specific resource to be snapshotted. The format and constraints of this identifier depend on the <code>ResourceType</code> specified. For example: For <code>Opportunity</code> type, it will be an opportunity ID. </p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p> The name of the template that defines the schema for the snapshot. This template determines which subset of the resource data will be included in the snapshot. Must correspond to an existing and valid template for the specified <code>ResourceType</code>. </p>
   * @public
   */
  ResourceSnapshotTemplateIdentifier: string | undefined;

  /**
   * <p> Specifies a unique, client-generated UUID to ensure that the request is handled exactly once. This token helps prevent duplicate snapshot creations. </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotResponse {
  /**
   * <p> Specifies the Amazon Resource Name (ARN) that uniquely identifies the snapshot created. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> Specifies the revision number of the created snapshot. This field provides important information about the snapshot's place in the sequence of snapshots for the given resource. </p>
   * @public
   */
  Revision?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceSnapshotRequest {
  /**
   * <p>Specifies the catalog related to the request. Valid values are:</p> <ul> <li> <p>AWS: Retrieves the snapshot from the production AWS environment.</p> </li> <li> <p>Sandbox: Retrieves the snapshot from a sandbox environment used for testing or development purposes.</p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the engagement associated with the snapshot. This field links the snapshot to a specific engagement context.</p>
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * <p>Specifies the type of resource that was snapshotted. This field determines the structure and content of the snapshot payload. Valid value includes:<code>Opportunity</code>: For opportunity-related data. </p>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p>The unique identifier of the specific resource that was snapshotted. The format and constraints of this identifier depend on the ResourceType specified. For <code>Opportunity</code> type, it will be an <code>opportunity ID</code> </p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>he name of the template that defines the schema for the snapshot. This template determines which subset of the resource data is included in the snapshot and must correspond to an existing and valid template for the specified <code>ResourceType</code>.</p>
   * @public
   */
  ResourceSnapshotTemplateIdentifier: string | undefined;

  /**
   * <p>Specifies which revision of the snapshot to retrieve. If omitted returns the latest revision.</p>
   * @public
   */
  Revision?: number | undefined;
}

/**
 * <p> Provides the lifecycle view of an opportunity resource shared through a snapshot. </p>
 * @public
 */
export interface LifeCycleForView {
  /**
   * <p> The projected launch date of the opportunity shared through a snapshot. </p>
   * @public
   */
  TargetCloseDate?: string | undefined;

  /**
   * <p> Defines the approval status of the opportunity shared through a snapshot. </p>
   * @public
   */
  ReviewStatus?: ReviewStatus | undefined;

  /**
   * <p> Defines the current stage of the opportunity shared through a snapshot. </p>
   * @public
   */
  Stage?: Stage | undefined;

  /**
   * <p> Describes the next steps for the opportunity shared through a snapshot. </p>
   * @public
   */
  NextSteps?: string | undefined;
}

/**
 * <p> Provides the project view of an opportunity resource shared through a snapshot. </p>
 * @public
 */
export interface ProjectView {
  /**
   * <p> Describes the deployment or consumption model for the partner solution or offering. This field indicates how the project's solution will be delivered or implemented for the customer. </p>
   * @public
   */
  DeliveryModels?: DeliveryModel[] | undefined;

  /**
   * <p> Provides information about the anticipated customer spend related to this project. This may include details such as amount, frequency, and currency of expected expenditure. </p>
   * @public
   */
  ExpectedCustomerSpend?: ExpectedCustomerSpend[] | undefined;

  /**
   * <p> Specifies the proposed solution focus or type of workload for the project. </p>
   * @public
   */
  CustomerUseCase?: string | undefined;

  /**
   * <p> Lists the pre-sales activities that have occurred with the end-customer related to the opportunity. This field is conditionally mandatory when the project is qualified for Co-Sell and helps drive assignment priority on the AWS side. It provides insight into the engagement level with the customer. </p>
   * @public
   */
  SalesActivities?: SalesActivity[] | undefined;

  /**
   * <p> Offers a description of other solutions if the standard solutions do not adequately cover the project's scope. </p>
   * @public
   */
  OtherSolutionDescription?: string | undefined;
}

/**
 * <p> Provides a comprehensive view of an opportunity summary, including lifecycle information, team details, opportunity type, primary needs from AWS, and associated project information. </p>
 * @public
 */
export interface OpportunitySummaryView {
  /**
   * <p> Specifies the opportunity type. </p>
   * @public
   */
  OpportunityType?: OpportunityType | undefined;

  /**
   * <p> Contains information about the opportunity's lifecycle, including its current stage, status, and important dates such as creation and last modification times. </p>
   * @public
   */
  Lifecycle?: LifeCycleForView | undefined;

  /**
   * <p> Represents the internal team handling the opportunity. Specify the members involved in collaborating on an opportunity within the partner's organization. </p>
   * @public
   */
  OpportunityTeam?: Contact[] | undefined;

  /**
   * <p> Identifies the type of support the partner needs from AWS. </p>
   * @public
   */
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[] | undefined;

  /**
   * <p>An object that contains the customer's <code>Account</code> and <code>Contact</code>.</p>
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * <p> Contains summary information about the project associated with the opportunity, including project name, description, timeline, and other relevant details. </p>
   * @public
   */
  Project?: ProjectView | undefined;

  /**
   * <p>This field provides the associations' information for other entities with the opportunity. These entities include identifiers for <code>AWSProducts</code>, <code>Partner Solutions</code>, and <code>AWSMarketplaceOffers</code>.</p>
   * @public
   */
  RelatedEntityIdentifiers?: RelatedEntityIdentifiers | undefined;
}

/**
 * <p> Represents the payload of a resource snapshot. This structure is designed to accommodate different types of resource snapshots, currently supporting opportunity summaries. </p>
 * @public
 */
export type ResourceSnapshotPayload =
  | ResourceSnapshotPayload.OpportunitySummaryMember
  | ResourceSnapshotPayload.$UnknownMember;

/**
 * @public
 */
export namespace ResourceSnapshotPayload {
  /**
   * <p> An object that contains an <code>opportunity</code>'s subset of fields. </p>
   * @public
   */
  export interface OpportunitySummaryMember {
    OpportunitySummary: OpportunitySummaryView;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OpportunitySummary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    OpportunitySummary: (value: OpportunitySummaryView) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetResourceSnapshotResponse {
  /**
   * <p>The catalog in which the snapshot was created. Matches the Catalog specified in the request.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource snapshot.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The AWS account ID of the principal (user or role) who created the snapshot. This helps in tracking the origin of the snapshot. </p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The timestamp when the snapshot was created, in ISO 8601 format (e.g., "2023-06-01T14:30:00Z"). This allows for precise tracking of when the snapshot was taken. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The identifier of the engagement associated with this snapshot. Matches the EngagementIdentifier specified in the request. </p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The type of the resource that was snapshotted. Matches the ResourceType specified in the request.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The identifier of the specific resource that was snapshotted. Matches the ResourceIdentifier specified in the request.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The name of the view used for this snapshot. This is the same as the template name.</p>
   * @public
   */
  ResourceSnapshotTemplateName?: string | undefined;

  /**
   * <p>The revision number of this snapshot. This is a positive integer that is sequential and unique within the context of a resource view.</p>
   * @public
   */
  Revision?: number | undefined;

  /**
   * <p> Represents the payload of a resource snapshot. This structure is designed to accommodate different types of resource snapshots, currently supporting opportunity summaries. </p>
   * @public
   */
  Payload?: ResourceSnapshotPayload | undefined;
}

/**
 * @public
 */
export interface ListEngagementResourceAssociationsRequest {
  /**
   * <p>Specifies the catalog in which to search for engagement-resource associations. Valid Values: "AWS" or "Sandbox"</p> <ul> <li> <p> <code>AWS</code> for production environments.</p> </li> <li> <p> <code>Sandbox</code> for testing and development purposes.</p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Limits the number of results returned in a single call. Use this to control the number of results returned, especially useful for pagination.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results. Include this token in subsequent requests to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filters the results to include only associations related to the specified engagement. Use this when you want to find all resources associated with a specific engagement.</p>
   * @public
   */
  EngagementIdentifier?: string | undefined;

  /**
   * <p> Filters the results to include only associations with resources of the specified type. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>Filters the results to include only associations with the specified resource. Varies depending on the resource type. Use this when you want to find all engagements associated with a specific resource.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>Filters the response to include only snapshots of resources owned by the specified AWS account ID. Use this when you want to find associations related to resources owned by a particular account. </p>
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * <p> This provide a streamlined view of the relationships between engagements and resources. These summaries offer a crucial link between collaborative engagements and the specific resources involved, such as opportunities.These summaries are particularly valuable for partners navigating complex engagements with multiple resources. They enable quick insights into resource distribution across engagements, support efficient resource management, and help maintain a clear overview of collaborative activities. </p>
 * @public
 */
export interface EngagementResourceAssociationSummary {
  /**
   * <p> Indicates the environment in which the resource and engagement exist. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> A unique identifier for the engagement associated with the resource. </p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p> Categorizes the type of resource associated with the engagement. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> A unique identifier for the specific resource. Varies depending on the resource type. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The AWS account ID of the entity that owns the resource. Identifies the account responsible for or having primary control over the resource. </p>
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListEngagementResourceAssociationsResponse {
  /**
   * <p> A list of engagement-resource association summaries. </p>
   * @public
   */
  EngagementResourceAssociationSummaries: EngagementResourceAssociationSummary[] | undefined;

  /**
   * <p> A token to retrieve the next set of results. Use this token in a subsequent request to retrieve additional results if the response was truncated. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotsRequest {
  /**
   * <p> Specifies the catalog related to the request. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> The maximum number of results to return in a single call. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The unique identifier of the engagement associated with the snapshots. </p>
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * <p> Filters the response to include only snapshots of the specified resource type. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> Filters the response to include only snapshots of the specified resource. </p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>Filters the response to include only snapshots created using the specified template.</p>
   * @public
   */
  ResourceSnapshotTemplateIdentifier?: string | undefined;

  /**
   * <p>Filters the response to include only snapshots of resources owned by the specified AWS account. </p>
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * <p> Provides a concise summary of a resource snapshot, including its unique identifier and version information. This structure is used to quickly reference and identify specific versions of resource snapshots. </p>
 * @public
 */
export interface ResourceSnapshotSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the snapshot. This globally unique identifier can be used for cross-service references and in IAM policies. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The revision number of the snapshot. This integer value is incremented each time the snapshot is updated, allowing for version tracking of the resource snapshot. </p>
   * @public
   */
  Revision?: number | undefined;

  /**
   * <p>The type of resource snapshotted.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The identifier of the specific resource snapshotted. The format might vary depending on the ResourceType. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The name of the template used to create the snapshot.</p>
   * @public
   */
  ResourceSnapshotTemplateName?: string | undefined;

  /**
   * <p>The AWS account ID of the entity that owns the resource from which the snapshot was created.</p>
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotsResponse {
  /**
   * <p> An array of resource snapshot summary objects. </p>
   * @public
   */
  ResourceSnapshotSummaries: ResourceSnapshotSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results. If there are no additional results, this value is null. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotJobRequest {
  /**
   * <p>Specifies the catalog in which to create the snapshot job. Valid values are <code>AWS</code> and <code> Sandbox</code>.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A client-generated UUID used for idempotency check. The token helps prevent duplicate job creations.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the identifier of the engagement associated with the resource to be snapshotted.</p>
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * <p>The type of resource for which the snapshot job is being created. Must be one of the supported resource types i.e. <code>Opportunity</code> </p>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p>Specifies the identifier of the specific resource to be snapshotted. The format depends on the <code> ResourceType</code>.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Specifies the name of the template that defines the schema for the snapshot.</p>
   * @public
   */
  ResourceSnapshotTemplateIdentifier: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceSnapshotJobResponse {
  /**
   * <p>The unique identifier for the created snapshot job.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created snapshot job.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSnapshotJobRequest {
  /**
   * <p> Specifies the catalog from which to delete the snapshot job. Valid values are <code>AWS</code> and <code>Sandbox</code>. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> The unique identifier of the resource snapshot job to be deleted. </p>
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSnapshotJobRequest {
  /**
   * <p>Specifies the catalog related to the request. Valid values are:</p> <ul> <li> <p> AWS: Retrieves the snapshot job from the production AWS environment. </p> </li> <li> <p> Sandbox: Retrieves the snapshot job from a sandbox environment used for testing or development purposes. </p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the resource snapshot job to be retrieved. This identifier is crucial for pinpointing the specific job you want to query. </p>
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSnapshotJobResponse {
  /**
   * <p>The catalog in which the snapshot job was created. This will match the Catalog specified in the request. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the snapshot job. This matches the ResourceSnapshotJobIdentifier provided in the request. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot job. This globally unique identifier can be used for resource-specific operations across AWS services. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the engagement associated with this snapshot job. This links the job to a specific engagement context. </p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The type of resource being snapshotted. This would have "Opportunity" as a value as it is dependent on the supported resource type.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The identifier of the specific resource being snapshotted. The format might vary depending on the ResourceType. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource being snapshotted. This provides a globally unique identifier for the resource across AWS. </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The name of the template used for creating the snapshot. This is the same as the template name. It defines the structure and content of the snapshot.</p>
   * @public
   */
  ResourceSnapshotTemplateName?: string | undefined;

  /**
   * <p>The date and time when the snapshot job was created in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z" </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The current status of the snapshot job. Valid values:</p> <ul> <li> <p>STOPPED: The job is not currently running.</p> </li> <li> <p>RUNNING: The job is actively executing.</p> </li> </ul>
   * @public
   */
  Status?: ResourceSnapshotJobStatus | undefined;

  /**
   * <p>The date and time of the last successful execution of the job, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z" </p>
   * @public
   */
  LastSuccessfulExecutionDate?: Date | undefined;

  /**
   * <p>If the job has encountered any failures, this field contains the error message from the most recent failure. This can be useful for troubleshooting issues with the job. </p>
   * @public
   */
  LastFailure?: string | undefined;
}

/**
 * <p> Defines the sorting parameters for listing resource snapshot jobs. This structure allows you to specify the field to sort by and the order of sorting. </p>
 * @public
 */
export interface SortObject {
  /**
   * <p> Specifies the field by which to sort the resource snapshot jobs. </p>
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * <p> Determines the order in which the sorted results are presented. </p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotJobsRequest {
  /**
   * <p> Specifies the catalog related to the request. </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p> The maximum number of results to return in a single call. If omitted, defaults to 50. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The identifier of the engagement to filter the response. </p>
   * @public
   */
  EngagementIdentifier?: string | undefined;

  /**
   * <p> The status of the jobs to filter the response. </p>
   * @public
   */
  Status?: ResourceSnapshotJobStatus | undefined;

  /**
   * <p> Configures the sorting of the response. If omitted, results are sorted by <code>CreatedDate</code> in descending order. </p>
   * @public
   */
  Sort?: SortObject | undefined;
}

/**
 * <p> An object that contains a <code>Resource Snapshot Job</code>'s subset of fields. </p>
 * @public
 */
export interface ResourceSnapshotJobSummary {
  /**
   * <p> The unique identifier for the resource snapshot job within the AWS Partner Central system. This ID is used for direct references to the job within the service. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the resource snapshot job. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the Engagement.</p>
   * @public
   */
  EngagementId?: string | undefined;

  /**
   * <p>The current status of the snapshot job.</p> <p>Valid values:</p> <ul> <li> <p> STOPPED: The job is not currently running. </p> </li> <li> <p> RUNNING: The job is actively executing. </p> </li> </ul>
   * @public
   */
  Status?: ResourceSnapshotJobStatus | undefined;
}

/**
 * @public
 */
export interface ListResourceSnapshotJobsResponse {
  /**
   * <p> An array of resource snapshot job summary objects. </p>
   * @public
   */
  ResourceSnapshotJobSummaries: ResourceSnapshotJobSummary[] | undefined;

  /**
   * <p> The token to retrieve the next set of results. If there are no additional results, this value is null. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartResourceSnapshotJobRequest {
  /**
   * <p>Specifies the catalog related to the request. Valid values are:</p> <ul> <li> <p>AWS: Starts the request from the production AWS environment.</p> </li> <li> <p>Sandbox: Starts the request from a sandbox environment used for testing or development purposes.</p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The identifier of the resource snapshot job to start.</p>
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopResourceSnapshotJobRequest {
  /**
   * <p>Specifies the catalog related to the request. Valid values are:</p> <ul> <li> <p>AWS: Stops the request from the production AWS environment.</p> </li> <li> <p>Sandbox: Stops the request from a sandbox environment used for testing or development purposes.</p> </li> </ul>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The identifier of the job to stop.</p>
   * @public
   */
  ResourceSnapshotJobIdentifier: string | undefined;
}

/**
 * <p>Configures the solutions' response sorting that enables partners to order solutions based on specified attributes.</p>
 * @public
 */
export interface SolutionSort {
  /**
   * <p>Specifies the sorting order, either <code>Ascending</code> or <code>Descending</code>. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder: SortOrder | undefined;

  /**
   * <p>Specifies the attribute to sort by, such as <code>Name</code>, <code>CreatedDate</code>, or <code>Status</code>.</p>
   * @public
   */
  SortBy: SolutionSortName | undefined;
}

/**
 * @public
 */
export interface ListSolutionsRequest {
  /**
   * <p>Specifies the catalog associated with the request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the solutions are listed in. Use <code>AWS</code> to list solutions in the Amazon Web Services catalog, and <code>Sandbox</code> to list solutions in a secure and isolated testing environment.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results.</p> <p>Default: 20</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Object that configures sorting done on the response. Default <code>Sort.SortBy</code> is <code>Identifier</code>.</p>
   * @public
   */
  Sort?: SolutionSort | undefined;

  /**
   * <p>Filters solutions based on their status. This filter helps partners manage their solution portfolios effectively.</p>
   * @public
   */
  Status?: SolutionStatus[] | undefined;

  /**
   * <p>Filters the solutions based on their unique identifier. Use this filter to retrieve specific solutions by providing the solution's identifier for accurate results.</p>
   * @public
   */
  Identifier?: string[] | undefined;

  /**
   * <p>Filters the solutions based on the category to which they belong. This allows partners to search for solutions within specific categories, such as <code>Software</code>, <code>Consulting</code>, or <code>Managed Services</code>.</p>
   * @public
   */
  Category?: string[] | undefined;
}

/**
 * <p>Specifies minimal information for the solution offered to solve the customer's business problem.</p>
 * @public
 */
export interface SolutionBase {
  /**
   * <p>Specifies the catalog in which the solution is hosted, either <code>AWS</code> or <code>Sandbox</code>. This helps partners differentiate between live solutions and those in testing environments.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Enables the association of solutions (offerings) to opportunities.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p> The SolutionBase structure provides essential information about a solution. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Specifies the solution name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the solution's current status, which indicates its state in the system. Valid values: <code>Active</code> | <code>Inactive</code> | <code>Draft</code>. The status helps partners and Amazon Web Services track the solution's lifecycle and availability. Filter for <code>Active</code> solutions for association to an opportunity.</p>
   * @public
   */
  Status: SolutionStatus | undefined;

  /**
   * <p>Specifies the solution category, which helps to categorize and organize the solutions partners offer. Valid values: <code>Software Product</code> | <code>Consulting Service</code> | <code>Hardware Product</code> | <code>Communications Product</code> | <code>Professional Service</code> | <code>Managed Service</code> | <code>Value-Added Resale Amazon Web Services Service</code> | <code>Distribution Service</code> | <code>Training Service</code> | <code>Merger and Acquisition Advising Service</code>.</p>
   * @public
   */
  Category: string | undefined;

  /**
   * <p>Indicates the solution creation date. This is useful to track and audit.</p>
   * @public
   */
  CreatedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListSolutionsResponse {
  /**
   * <p>An array with minimal details for solutions matching the request criteria.</p>
   * @public
   */
  SolutionSummaries: SolutionBase[] | undefined;

  /**
   * <p>A pagination token used to retrieve the next set of results in subsequent calls. This token is included in the response only if there are additional result pages available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Updates the context information for a lead with qualification status, customer details, and interaction data.</p>
 * @public
 */
export interface UpdateLeadContext {
  /**
   * <p>The updated qualification status of the lead.</p>
   * @public
   */
  QualificationStatus?: string | undefined;

  /**
   * <p>Updated customer information associated with the lead.</p>
   * @public
   */
  Customer: LeadCustomer | undefined;

  /**
   * <p>Updated interaction details for the lead context.</p>
   * @public
   */
  Interaction?: LeadInteraction | undefined;
}

/**
 * <p>Represents the updated payload of an engagement context. The structure of this payload varies based on the context type being updated.</p>
 * @public
 */
export type UpdateEngagementContextPayload =
  | UpdateEngagementContextPayload.CustomerProjectMember
  | UpdateEngagementContextPayload.LeadMember
  | UpdateEngagementContextPayload.$UnknownMember;

/**
 * @public
 */
export namespace UpdateEngagementContextPayload {
  /**
   * <p>Contains updated information about a lead when the context type is "Lead". This field is present only when updating a lead context within the engagement.</p>
   * @public
   */
  export interface LeadMember {
    Lead: UpdateLeadContext;
    CustomerProject?: never;
    $unknown?: never;
  }

  /**
   * <p>The CustomerProjects structure in Engagements offers a flexible framework for managing customer-project relationships. It supports multiple customers per Engagement and multiple projects per customer, while also allowing for customers without projects and projects without specific customers. </p> <p>All Engagement members have full visibility of customers and their associated projects, enabling the capture of relevant context even when project details are not fully defined. This structure also facilitates targeted invitations, allowing partners to focus on specific customers and their business problems when sending Engagement invitations. </p>
   * @public
   */
  export interface CustomerProjectMember {
    Lead?: never;
    CustomerProject: CustomerProjectsContext;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Lead?: never;
    CustomerProject?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Lead: (value: UpdateLeadContext) => T;
    CustomerProject: (value: CustomerProjectsContext) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateEngagementContextRequest {
  /**
   * <p>Specifies the catalog associated with the engagement context update request. This field takes a string value from a predefined list: <code>AWS</code> or <code>Sandbox</code>. The catalog determines which environment the engagement context is updated in.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the <code>Engagement</code> containing the context to be updated. This parameter ensures the context update is applied to the correct engagement.</p>
   * @public
   */
  EngagementIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the specific engagement context to be updated. This ensures that the correct context within the engagement is modified.</p>
   * @public
   */
  ContextIdentifier: string | undefined;

  /**
   * <p>The timestamp when the engagement was last modified, used for optimistic concurrency control. This helps prevent conflicts when multiple users attempt to update the same engagement simultaneously.</p>
   * @public
   */
  EngagementLastModifiedAt: Date | undefined;

  /**
   * <p>Specifies the type of context being updated within the engagement. This field determines the structure and content of the context payload being modified.</p>
   * @public
   */
  Type: EngagementContextType | undefined;

  /**
   * <p>Contains the updated contextual information for the engagement. The structure of this payload varies based on the context type specified in the Type field.</p>
   * @public
   */
  Payload: UpdateEngagementContextPayload | undefined;
}

/**
 * @public
 */
export interface UpdateEngagementContextResponse {
  /**
   * <p>The unique identifier of the engagement that was updated.</p>
   * @public
   */
  EngagementId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated engagement.</p>
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * <p>The timestamp when the engagement context was last modified.</p>
   * @public
   */
  EngagementLastModifiedAt: Date | undefined;

  /**
   * <p>The unique identifier of the engagement context that was updated.</p>
   * @public
   */
  ContextId: string | undefined;
}
