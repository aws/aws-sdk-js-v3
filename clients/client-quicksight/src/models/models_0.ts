// smithy-typescript generated code
import type {
  ActionConnectorErrorType,
  ActionConnectorSearchFilterNameEnum,
  ActionConnectorType,
  AgentLifecycle,
  AgentOwnershipFilterAttribute,
  AgentStatus,
  AggType,
  AnalysisErrorType,
  AnchorOption,
  AuthorizationCodeGrantCredentialsSource,
  AxisBinding,
  CategoricalAggregationFunction,
  CategoryFilterMatchOperator,
  CategoryFilterSelectAllOptions,
  ClientCredentialsSource,
  ColumnRole,
  CommitMode,
  ComparisonOperator,
  ConnectionAuthType,
  ControlSortDirection,
  DashboardBehavior,
  DataLabelContent,
  DataLabelOverlap,
  DataLabelPosition,
  DataPrepSimpleAggregationFunctionType,
  DateAggregationFunction,
  DayOfTheWeek,
  DecalPatternType,
  DecalStyleType,
  DigitGroupingStyle,
  Edition,
  FilterNullOption,
  FilterOperator,
  FilterVisualScope,
  FontDecoration,
  FontStyle,
  FontWeightName,
  ImageCustomActionTrigger,
  LayoutElementType,
  LegendPosition,
  NegativeValueDisplayMode,
  NumberScale,
  NumericEqualityMatchOperator,
  NumericFilterSelectAllOptions,
  NumericSeparatorSymbol,
  PaperOrientation,
  PaperSize,
  ParameterValueType,
  QBusinessInsightsStatus,
  QueryExecutionMode,
  ReferenceLineLabelHorizontalPosition,
  ReferenceLineLabelVerticalPosition,
  ReferenceLinePatternType,
  ReferenceLineSeriesType,
  ReferenceLineValueLabelRelativePosition,
  RelativeDateType,
  RelativeFontSize,
  ResizeOption,
  ResourceStatus,
  SectionPageBreakStatus,
  SelectAllValueOptions,
  SelectedFieldOptions,
  SheetContentType,
  SheetControlDateTimePickerType,
  SheetControlListType,
  SheetControlSliderType,
  SheetImageScalingType,
  SheetLayoutGroupMemberType,
  SimpleAttributeAggregationFunction,
  SimpleNumericalAggregationFunction,
  SortDirection,
  SpecialValue,
  TargetVisualOptions,
  TimeGranularity,
  TopicTimeGranularity,
  URLTargetConfiguration,
  ValueWhenUnsetOption,
  Visibility,
  VisualCustomActionTrigger,
  VisualHighlightTrigger,
  WidgetStatus,
} from "./enums";

/**
 * The access control settings for a knowledge base. Use this structure to enable or disable document-level access control lists (ACLs) that filter query results based on the permissions from the source data connector.
 *
 * @public
 */
export interface AccessControlConfiguration {
  /**
   * Specifies whether ACLs are enabled for the knowledge base.
   *
   * This setting works together with the data source connector's ACL crawling. To enforce document-level access control end to end, set `isACLEnabled` to `true` and enable ACL crawling on the connector. For example, for an Amazon S3 data source, set `accessControlConfiguration.crawlAcl` to `true` in the connector template. For more information, see `KbTemplateConfiguration`. Enabling only one of the two settings does not produce a fully ACL-enforced knowledge base.
   *
   * @public
   */
  isACLEnabled?: boolean | undefined;
}

/**
 * The Quick Sight customizations associated with your Amazon Web Services account or a Quick Sight namespace in a specific Amazon Web Services Region.
 *
 * @public
 */
export interface AccountCustomization {
  /**
   * The default theme for this Quick Sight subscription.
   *
   * @public
   */
  DefaultTheme?: string | undefined;

  /**
   * The default email customization template.
   *
   * @public
   */
  DefaultEmailCustomizationTemplate?: string | undefined;
}

/**
 * A structure that contains the following account information elements:
 *
 * - Your Quick Sight account name.
 * - The edition of Quick Sight that your account is using.
 * - The notification email address that is associated with the Quick Sight account.
 * - The authentication type of the Quick Sight account.
 * - The status of the Quick Sight account's subscription.
 *
 * @public
 */
export interface AccountInfo {
  /**
   * The account name that you provided for the Amazon Quick Sight subscription in your Amazon Web Services account. You create this name when you sign up for Quick. It's unique over all of Amazon Web Services, and it appears only when users sign in.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The edition of your Quick Sight account.
   *
   * @public
   */
  Edition?: Edition | undefined;

  /**
   * The email address that will be used for Quick Sight to send notifications regarding your Amazon Web Services account or Quick Sight subscription.
   *
   * @public
   */
  NotificationEmail?: string | undefined;

  /**
   * The way that your Amazon Quick Sight account is authenticated.
   *
   * @public
   */
  AuthenticationType?: string | undefined;

  /**
   * The status of your account subscription.
   *
   * @public
   */
  AccountSubscriptionStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center instance.
   *
   * @public
   */
  IAMIdentityCenterInstanceArn?: string | undefined;
}

/**
 * The Quick Sight settings associated with your Amazon Web Services account.
 *
 * @public
 */
export interface AccountSettings {
  /**
   * The "account name" you provided for the Quick Sight subscription in your Amazon Web Services account. You create this name when you sign up for Quick Sight. It is unique in all of Amazon Web Services and it appears only when users sign in.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The edition of Quick Sight that you're currently subscribed to: Enterprise edition or Standard edition.
   *
   * @public
   */
  Edition?: Edition | undefined;

  /**
   * The default Quick Sight namespace for your Amazon Web Services account.
   *
   * @public
   */
  DefaultNamespace?: string | undefined;

  /**
   * The main notification email for your Quick Sight subscription.
   *
   * @public
   */
  NotificationEmail?: string | undefined;

  /**
   * A Boolean value that indicates whether public sharing is turned on for an Quick account. For more information about turning on public sharing, see [UpdatePublicSharingSettings](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html).
   *
   * @public
   */
  PublicSharingEnabled?: boolean | undefined;

  /**
   * A boolean value that determines whether or not an Quick Sight account can be deleted. A `True` value doesn't allow the account to be deleted and results in an error message if a user tries to make a `DeleteAccountSubsctiption` request. A `False` value will allow the ccount to be deleted.
   *
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * Read-only authentication metadata for API key-based connections, containing non-sensitive configuration details.
 *
 * @public
 */
export interface ReadAPIKeyConnectionMetadata {
  /**
   * The base endpoint URL for API key authentication.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The email address associated with the API key authentication.
   *
   * @public
   */
  Email?: string | undefined;
}

/**
 * Read-only configuration details for OAuth2 authorization code grant flow, including endpoints and client information.
 *
 * @public
 */
export interface ReadAuthorizationCodeGrantDetails {
  /**
   * The client identifier for the OAuth2 authorization code grant flow.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The authorization server endpoint used to obtain access tokens via the authorization code grant flow.
   *
   * @public
   */
  TokenEndpoint: string | undefined;

  /**
   * The authorization server endpoint used to obtain authorization codes from the resource owner.
   *
   * @public
   */
  AuthorizationEndpoint: string | undefined;
}

/**
 * Read-only credentials details for OAuth2 authorization code grant flow, containing non-sensitive configuration information.
 *
 * @public
 */
export type ReadAuthorizationCodeGrantCredentialsDetails =
  | ReadAuthorizationCodeGrantCredentialsDetails.ReadAuthorizationCodeGrantDetailsMember
  | ReadAuthorizationCodeGrantCredentialsDetails.$UnknownMember;

/**
 * @public
 */
export namespace ReadAuthorizationCodeGrantCredentialsDetails {
  /**
   * The read-only authorization code grant configuration details.
   *
   * @public
   */
  export interface ReadAuthorizationCodeGrantDetailsMember {
    ReadAuthorizationCodeGrantDetails: ReadAuthorizationCodeGrantDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ReadAuthorizationCodeGrantDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ReadAuthorizationCodeGrantDetails: (value: ReadAuthorizationCodeGrantDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Read-only metadata for OAuth2 authorization code grant authentication configuration.
 *
 * @public
 */
export interface ReadAuthorizationCodeGrantMetadata {
  /**
   * The base endpoint URL for the OAuth2 authorization code grant flow.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The redirect URL where the authorization server will send the user after authorization.
   *
   * @public
   */
  RedirectUrl: string | undefined;

  /**
   * The read-only credentials details for the authorization code grant flow.
   *
   * @public
   */
  ReadAuthorizationCodeGrantCredentialsDetails?: ReadAuthorizationCodeGrantCredentialsDetails | undefined;

  /**
   * The source of credentials for the authorization code grant flow.
   *
   * @public
   */
  AuthorizationCodeGrantCredentialsSource?: AuthorizationCodeGrantCredentialsSource | undefined;
}

/**
 * Read-only metadata for basic authentication connections, containing non-sensitive configuration details.
 *
 * @public
 */
export interface ReadBasicAuthConnectionMetadata {
  /**
   * The base endpoint URL for basic authentication.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The username used for basic authentication.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Read-only configuration details for OAuth2 client credentials grant flow, including client ID and token endpoint.
 *
 * @public
 */
export interface ReadClientCredentialsGrantDetails {
  /**
   * The client identifier for the OAuth2 client credentials grant flow.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The authorization server endpoint used to obtain access tokens via the client credentials grant flow.
   *
   * @public
   */
  TokenEndpoint: string | undefined;
}

/**
 * Read-only details for OAuth2 client credentials, containing non-sensitive configuration information.
 *
 * @public
 */
export type ReadClientCredentialsDetails =
  | ReadClientCredentialsDetails.ReadClientCredentialsGrantDetailsMember
  | ReadClientCredentialsDetails.$UnknownMember;

/**
 * @public
 */
export namespace ReadClientCredentialsDetails {
  /**
   * The read-only client credentials grant configuration details.
   *
   * @public
   */
  export interface ReadClientCredentialsGrantDetailsMember {
    ReadClientCredentialsGrantDetails: ReadClientCredentialsGrantDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ReadClientCredentialsGrantDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ReadClientCredentialsGrantDetails: (value: ReadClientCredentialsGrantDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Read-only metadata for OAuth2 client credentials grant authentication configuration.
 *
 * @public
 */
export interface ReadClientCredentialsGrantMetadata {
  /**
   * The base endpoint URL for the OAuth2 client credentials grant flow.
   *
   * @public
   */
  BaseEndpoint: string | undefined;

  /**
   * The read-only client credentials configuration details.
   *
   * @public
   */
  ReadClientCredentialsDetails?: ReadClientCredentialsDetails | undefined;

  /**
   * The source of client credentials for the OAuth2 client credentials grant flow.
   *
   * @public
   */
  ClientCredentialsSource?: ClientCredentialsSource | undefined;
}

/**
 * Read-only metadata for IAM-based connections, containing role and source ARN information.
 *
 * @public
 */
export interface ReadIamConnectionMetadata {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to assume for authentication.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source resource for IAM authentication.
   *
   * @public
   */
  SourceArn: string | undefined;
}

/**
 * Read-only metadata for connections that do not require authentication credentials.
 *
 * @public
 */
export interface ReadNoneConnectionMetadata {
  /**
   * The base endpoint URL for connections that do not require authentication.
   *
   * @public
   */
  BaseEndpoint: string | undefined;
}

/**
 * Read-only authentication metadata union containing non-sensitive configuration details for different authentication types.
 *
 * @public
 */
export type ReadAuthenticationMetadata =
  | ReadAuthenticationMetadata.ApiKeyConnectionMetadataMember
  | ReadAuthenticationMetadata.AuthorizationCodeGrantMetadataMember
  | ReadAuthenticationMetadata.BasicAuthConnectionMetadataMember
  | ReadAuthenticationMetadata.ClientCredentialsGrantMetadataMember
  | ReadAuthenticationMetadata.IamConnectionMetadataMember
  | ReadAuthenticationMetadata.NoneConnectionMetadataMember
  | ReadAuthenticationMetadata.$UnknownMember;

/**
 * @public
 */
export namespace ReadAuthenticationMetadata {
  /**
   * Read-only metadata for OAuth2 authorization code grant flow configuration.
   *
   * @public
   */
  export interface AuthorizationCodeGrantMetadataMember {
    AuthorizationCodeGrantMetadata: ReadAuthorizationCodeGrantMetadata;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * Read-only metadata for OAuth2 client credentials grant flow configuration.
   *
   * @public
   */
  export interface ClientCredentialsGrantMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata: ReadClientCredentialsGrantMetadata;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * Read-only metadata for basic authentication configuration.
   *
   * @public
   */
  export interface BasicAuthConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata: ReadBasicAuthConnectionMetadata;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * Read-only metadata for API key authentication configuration.
   *
   * @public
   */
  export interface ApiKeyConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata: ReadAPIKeyConnectionMetadata;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * Read-only metadata for connections that do not require authentication.
   *
   * @public
   */
  export interface NoneConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata: ReadNoneConnectionMetadata;
    IamConnectionMetadata?: never;
    $unknown?: never;
  }

  /**
   * Read-only metadata for IAM-based authentication configuration.
   *
   * @public
   */
  export interface IamConnectionMetadataMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata: ReadIamConnectionMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AuthorizationCodeGrantMetadata?: never;
    ClientCredentialsGrantMetadata?: never;
    BasicAuthConnectionMetadata?: never;
    ApiKeyConnectionMetadata?: never;
    NoneConnectionMetadata?: never;
    IamConnectionMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AuthorizationCodeGrantMetadata: (value: ReadAuthorizationCodeGrantMetadata) => T;
    ClientCredentialsGrantMetadata: (value: ReadClientCredentialsGrantMetadata) => T;
    BasicAuthConnectionMetadata: (value: ReadBasicAuthConnectionMetadata) => T;
    ApiKeyConnectionMetadata: (value: ReadAPIKeyConnectionMetadata) => T;
    NoneConnectionMetadata: (value: ReadNoneConnectionMetadata) => T;
    IamConnectionMetadata: (value: ReadIamConnectionMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Read-only authentication configuration containing non-sensitive authentication details for action connectors.
 *
 * @public
 */
export interface ReadAuthConfig {
  /**
   * The type of authentication being used (BASIC, API_KEY, OAUTH2_CLIENT_CREDENTIALS, or OAUTH2_AUTHORIZATION_CODE).
   *
   * @public
   */
  AuthenticationType: ConnectionAuthType | undefined;

  /**
   * The authentication metadata containing configuration details specific to the authentication type.
   *
   * @public
   */
  AuthenticationMetadata: ReadAuthenticationMetadata | undefined;
}

/**
 * Contains error information for an action connector that is in an error state.
 *
 * @public
 */
export interface ActionConnectorError {
  /**
   * The error message describing what went wrong with the action connector.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The type or category of the error.
   *
   * @public
   */
  Type?: ActionConnectorErrorType | undefined;
}

/**
 * Contains detailed information about an action connector, including its configuration, status, and enabled actions.
 *
 * @public
 */
export interface ActionConnector {
  /**
   * The Amazon Resource Name (ARN) of the action connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the action connector.
   *
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * The type of action connector.
   *
   * @public
   */
  Type: ActionConnectorType | undefined;

  /**
   * The name of the action connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The timestamp when the action connector was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time when the action connector was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * The current status of the action connector.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * Error information if the action connector is in an error state.
   *
   * @public
   */
  Error?: ActionConnectorError | undefined;

  /**
   * The description of the action connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The authentication configuration used to connect to the external service.
   *
   * @public
   */
  AuthenticationConfig?: ReadAuthConfig | undefined;

  /**
   * The list of actions that are enabled for this connector.
   *
   * @public
   */
  EnabledActions?: string[] | undefined;

  /**
   * The ARN of the VPC connection used for secure connectivity to the external service.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;
}

/**
 * A filter used to search for action connectors based on specific criteria.
 *
 * @public
 */
export interface ActionConnectorSearchFilter {
  /**
   * The name of the filter attribute (e.g., ACTION_CONNECTOR_NAME, ACTION_CONNECTOR_TYPE, QUICKSIGHT_VIEWER_OR_OWNER).
   *
   * @public
   */
  Name: ActionConnectorSearchFilterNameEnum | undefined;

  /**
   * The comparison operator to use for the filter (e.g., StringEquals, StringLike).
   *
   * @public
   */
  Operator: FilterOperator | undefined;

  /**
   * The value to compare against using the specified operator.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains summary information about an action connector, used in list and search operations.
 *
 * @public
 */
export interface ActionConnectorSummary {
  /**
   * The Amazon Resource Name (ARN) of the action connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the action connector.
   *
   * @public
   */
  ActionConnectorId: string | undefined;

  /**
   * The type of action connector (e.g., SALESFORCE, JIRA, CUSTOM, BEDROCK).
   *
   * @public
   */
  Type: ActionConnectorType | undefined;

  /**
   * The name of the action connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The date and time when the action connector was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The date and time when the action connector was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * The current status of the action connector.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * Error information if the action connector is in an error state.
   *
   * @public
   */
  Error?: ActionConnectorError | undefined;
}

/**
 * The active Identity and Access Management (IAM) policy assignment.
 *
 * @public
 */
export interface ActiveIAMPolicyAssignment {
  /**
   * A name for the IAM policy assignment.
   *
   * @public
   */
  AssignmentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * Additional notes that provide supplementary context for a column.
 *
 * @public
 */
export interface AdditionalNotes {
  /**
   * The additional notes text.
   *
   * @public
   */
  Text?: string | undefined;
}

/**
 * An ad hoc (one-time) filtering option.
 *
 * @public
 */
export interface AdHocFilteringOption {
  /**
   * Availability status.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The custom prompt interface configuration that defines how an agent's prompt is configured.
 *
 * @public
 */
export interface CustomPromptInterface {
  /**
   * The identifier of the model profile.
   *
   * @public
   */
  ModelProfileId: string | undefined;

  /**
   * The subscription identifier.
   *
   * @public
   */
  SubscriptionId: string | undefined;

  /**
   * The Amazon Web Services account ID for the Q Business service.
   *
   * @public
   */
  QbsAwsAccountId: string | undefined;

  /**
   * Instructions for the desired response length.
   *
   * @public
   */
  ResponseLength?: string | undefined;

  /**
   * Instructions for the desired output style.
   *
   * @public
   */
  OutputStyle?: string | undefined;

  /**
   * Instructions that define the agent's identity and persona.
   *
   * @public
   */
  Identity?: string | undefined;

  /**
   * Instructions for the desired tone of responses.
   *
   * @public
   */
  Tone?: string | undefined;

  /**
   * Custom instructions for the agent's behavior.
   *
   * @public
   */
  CustomInstructions?: string | undefined;

  /**
   * A summary of the custom prompt configuration.
   *
   * @public
   */
  promptSummary?: string | undefined;
}

/**
 * An agent resource in Amazon QuickSight that provides AI-powered conversational experiences.
 *
 * @public
 */
export interface Agent {
  /**
   * The Amazon Resource Names (ARNs) of the spaces attached to the agent.
   *
   * @public
   */
  Spaces?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the action connectors attached to the agent.
   *
   * @public
   */
  ActionConnectors?: string[] | undefined;

  /**
   * A description of the agent.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The icon identifier for the agent.
   *
   * @public
   */
  IconId?: string | undefined;

  /**
   * The name of the agent.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of starter prompts that are displayed to users when they begin interacting with the agent.
   *
   * @public
   */
  StarterPrompts?: string[] | undefined;

  /**
   * The welcome message that is displayed when a user starts a conversation with the agent.
   *
   * @public
   */
  WelcomeMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the agent.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the agent.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The lifecycle state of the agent. Valid values are `PREVIEW` and `PUBLISHED`.
   *
   * @public
   */
  AgentLifecycle: AgentLifecycle | undefined;

  /**
   * The status of the agent.
   *
   * @public
   */
  AgentStatus: AgentStatus | undefined;

  /**
   * The date and time that the agent was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The identity of the user who created the agent.
   *
   * @public
   */
  Creator: string | undefined;

  /**
   * The custom prompt interface configuration for the agent.
   *
   * @public
   */
  CustomPromptInterface?: CustomPromptInterface | undefined;

  /**
   * An error message associated with the agent, if applicable.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The date and time that the agent was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * A filter to apply when searching agents.
 *
 * @public
 */
export interface AgentSearchFilter {
  /**
   * The name of the field to filter on.
   *
   * @public
   */
  Name?: AgentOwnershipFilterAttribute | undefined;

  /**
   * The comparison operator to use for the filter.
   *
   * @public
   */
  Operator?: ComparisonOperator | undefined;

  /**
   * The value to filter on.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A summary of an agent, including its identifier, name, and metadata.
 *
 * @public
 */
export interface AgentSummary {
  /**
   * The Amazon Resource Name (ARN) of the agent.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the agent.
   *
   * @public
   */
  AgentId: string | undefined;

  /**
   * The name of the agent.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the agent.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that the agent was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time that the agent was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The icon identifier for the agent.
   *
   * @public
   */
  IconId?: string | undefined;
}

/**
 * The definition of an Agg function.
 *
 * @public
 */
export interface AggFunction {
  /**
   * The aggregation of an Agg function.
   *
   * @public
   */
  Aggregation?: AggType | undefined;

  /**
   * The aggregation parameters for an Agg function.
   *
   * @public
   */
  AggregationFunctionParameters?: Record<string, string> | undefined;

  /**
   * The period of an Agg function.
   *
   * @public
   */
  Period?: TopicTimeGranularity | undefined;

  /**
   * The period field for an Agg function.
   *
   * @public
   */
  PeriodField?: string | undefined;
}

/**
 * An aggregation function that concatenates values from multiple rows into a single string with a specified separator.
 *
 * @public
 */
export interface DataPrepListAggregationFunction {
  /**
   * The name of the column containing values to be concatenated.
   *
   * @public
   */
  InputColumnName?: string | undefined;

  /**
   * The string used to separate values in the concatenated result.
   *
   * @public
   */
  Separator: string | undefined;

  /**
   * Whether to include only distinct values in the concatenated result, removing duplicates.
   *
   * @public
   */
  Distinct: boolean | undefined;
}

/**
 * A simple aggregation function that performs standard statistical operations on a column.
 *
 * @public
 */
export interface DataPrepSimpleAggregationFunction {
  /**
   * The name of the column on which to perform the aggregation function.
   *
   * @public
   */
  InputColumnName?: string | undefined;

  /**
   * The type of aggregation function to perform, such as `COUNT`, `SUM`, `AVERAGE`, `MIN`, `MAX`, `MEDIAN`, `VARIANCE`, or `STANDARD_DEVIATION`.
   *
   * @public
   */
  FunctionType: DataPrepSimpleAggregationFunctionType | undefined;
}

/**
 * Defines the type of aggregation function to apply to data during data preparation, supporting simple and list aggregations.
 *
 * @public
 */
export interface DataPrepAggregationFunction {
  /**
   * A simple aggregation function such as `SUM`, `COUNT`, `AVERAGE`, `MIN`, `MAX`, `MEDIAN`, `VARIANCE`, or `STANDARD_DEVIATION`.
   *
   * @public
   */
  SimpleAggregation?: DataPrepSimpleAggregationFunction | undefined;

  /**
   * A list aggregation function that concatenates values from multiple rows into a single delimited string.
   *
   * @public
   */
  ListAggregation?: DataPrepListAggregationFunction | undefined;
}

/**
 * Defines an aggregation function to be applied to grouped data, creating a new column with the calculated result.
 *
 * @public
 */
export interface Aggregation {
  /**
   * The aggregation function to apply, such as `SUM`, `COUNT`, `AVERAGE`, `MIN`, `MAX`
   *
   * @public
   */
  AggregationFunction: DataPrepAggregationFunction | undefined;

  /**
   * The name for the new column that will contain the aggregated values.
   *
   * @public
   */
  NewColumnName: string | undefined;

  /**
   * A unique identifier for the new column that will contain the aggregated values.
   *
   * @public
   */
  NewColumnId: string | undefined;
}

/**
 * Maps a source column identifier to a target column identifier during transform operations.
 *
 * @public
 */
export interface DataSetColumnIdMapping {
  /**
   * Source column ID.
   *
   * @public
   */
  SourceColumnId: string | undefined;

  /**
   * Target column ID.
   *
   * @public
   */
  TargetColumnId: string | undefined;
}

/**
 * Specifies the source of data for a transform operation, including the source operation and column mappings.
 *
 * @public
 */
export interface TransformOperationSource {
  /**
   * The identifier of the transform operation that provides input data.
   *
   * @public
   */
  TransformOperationId: string | undefined;

  /**
   * The mappings between source column identifiers and target column identifiers for this transformation.
   *
   * @public
   */
  ColumnIdMappings?: DataSetColumnIdMapping[] | undefined;
}

/**
 * A transform operation that groups rows by specified columns and applies aggregation functions to calculate summary values.
 *
 * @public
 */
export interface AggregateOperation {
  /**
   * Alias for this operation.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The source transform operation that provides input data for the aggregation.
   *
   * @public
   */
  Source: TransformOperationSource | undefined;

  /**
   * The list of column names to group by when performing the aggregation. Rows with the same values in these columns will be grouped together.
   *
   * @public
   */
  GroupByColumnNames?: string[] | undefined;

  /**
   * The list of aggregation functions to apply to the grouped data, such as `SUM`, `COUNT`, or `AVERAGE`.
   *
   * @public
   */
  Aggregations: Aggregation[] | undefined;
}

/**
 * Aggregation for attributes.
 *
 * @public
 */
export interface AttributeAggregationFunction {
  /**
   * The built-in aggregation functions for attributes.
   *
   * - `UNIQUE_VALUE`: Returns the unique value for a field, aggregated by the dimension fields.
   *
   * @public
   */
  SimpleAttributeAggregation?: SimpleAttributeAggregationFunction | undefined;

  /**
   * Used by the `UNIQUE_VALUE` aggregation function. If there are multiple values for the field used by the aggregation, the value for this property will be returned instead. Defaults to '*'.
   *
   * @public
   */
  ValueForMultipleValues?: string | undefined;
}

/**
 * An aggregation based on the percentile of values in a dimension or measure.
 *
 * @public
 */
export interface PercentileAggregation {
  /**
   * The percentile value. This value can be any numeric constant 0–100. A percentile value of 50 computes the median value of the measure.
   *
   * @public
   */
  PercentileValue?: number | undefined;
}

/**
 * Aggregation for numerical values.
 *
 * @public
 */
export interface NumericalAggregationFunction {
  /**
   * Built-in aggregation functions for numerical values.
   *
   * - `SUM`: The sum of a dimension or measure.
   * - `AVERAGE`: The average of a dimension or measure.
   * - `MIN`: The minimum value of a dimension or measure.
   * - `MAX`: The maximum value of a dimension or measure.
   * - `COUNT`: The count of a dimension or measure.
   * - `DISTINCT_COUNT`: The count of distinct values in a dimension or measure.
   * - `VAR`: The variance of a dimension or measure.
   * - `VARP`: The partitioned variance of a dimension or measure.
   * - `STDEV`: The standard deviation of a dimension or measure.
   * - `STDEVP`: The partitioned standard deviation of a dimension or measure.
   * - `MEDIAN`: The median value of a dimension or measure.
   *
   * @public
   */
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction | undefined;

  /**
   * An aggregation based on the percentile of values in a dimension or measure.
   *
   * @public
   */
  PercentileAggregation?: PercentileAggregation | undefined;
}

/**
 * An aggregation function aggregates values from a dimension or measure.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface AggregationFunction {
  /**
   * Aggregation for numerical values.
   *
   * @public
   */
  NumericalAggregationFunction?: NumericalAggregationFunction | undefined;

  /**
   * Aggregation for categorical values.
   *
   * - `COUNT`: Aggregate by the total number of values, including duplicates.
   * - `DISTINCT_COUNT`: Aggregate by the total number of distinct values.
   *
   * @public
   */
  CategoricalAggregationFunction?: CategoricalAggregationFunction | undefined;

  /**
   * Aggregation for date values.
   *
   * - `COUNT`: Aggregate by the total number of values, including duplicates.
   * - `DISTINCT_COUNT`: Aggregate by the total number of distinct values.
   * - `MIN`: Select the smallest date value.
   * - `MAX`: Select the largest date value.
   *
   * @public
   */
  DateAggregationFunction?: DateAggregationFunction | undefined;

  /**
   * Aggregation for attributes.
   *
   * @public
   */
  AttributeAggregationFunction?: AttributeAggregationFunction | undefined;
}

/**
 * The definition of an `AggregationPartitionBy`.
 *
 * @public
 */
export interface AggregationPartitionBy {
  /**
   * The field Name for an `AggregationPartitionBy`.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * The `TimeGranularity` for an `AggregationPartitionBy`.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;
}

/**
 * A column of a data set.
 *
 * @public
 */
export interface ColumnIdentifier {
  /**
   * The data set that the column belongs to.
   *
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * The topic that the column belongs to.
   *
   * @public
   */
  TopicIdentifier?: string | undefined;

  /**
   * The name of the column.
   *
   * @public
   */
  ColumnName: string | undefined;
}

/**
 * The configuration options to sort aggregated values.
 *
 * @public
 */
export interface AggregationSortConfiguration {
  /**
   * The column that determines the sort order of aggregated values.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The sort direction of values.
   *
   * - `ASC`: Sort in ascending order.
   * - `DESC`: Sort in descending order.
   *
   * @public
   */
  SortDirection: SortDirection | undefined;

  /**
   * The function that aggregates the values in `Column`.
   *
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;
}

/**
 * An empty object that represents that the `AllSheets` option is the chosen value for the `FilterScopeConfiguration` parameter. This structure applies the filter to all visuals on all sheets of an Analysis, Dashboard, or Template.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface AllSheetsFilterScopeConfiguration {}

/**
 * The parameters for OpenSearch.
 *
 * @public
 */
export interface AmazonElasticsearchParameters {
  /**
   * The OpenSearch domain.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * The parameters for OpenSearch.
 *
 * @public
 */
export interface AmazonOpenSearchParameters {
  /**
   * The OpenSearch domain.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * The generative Q&A settings of an embedded Quick Sight console.
 *
 * @public
 */
export interface DataQnAConfigurations {
  /**
   * The generative Q&A settings of an embedded Quick Sight console.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The data story settings of an embedded Quick Sight console.
 *
 * @public
 */
export interface DataStoriesConfigurations {
  /**
   * The data story settings of an embedded Quick Sight console.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The executive summary settings of an embedded Quick Sight console or dashboard.
 *
 * @public
 */
export interface ExecutiveSummaryConfigurations {
  /**
   * The executive summary settings of an embedded Quick Sight console or dashboard.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The generative BI authoring settings of an embedded Quick Sight console.
 *
 * @public
 */
export interface GenerativeAuthoringConfigurations {
  /**
   * The generative BI authoring settings of an embedded Quick Sight console.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * A collection of Amazon Q feature configurations in an embedded Quick Sight console.
 *
 * @public
 */
export interface AmazonQInQuickSightConsoleConfigurations {
  /**
   * Adds generative Q&A capabilitiees to an embedded Quick Sight console.
   *
   * @public
   */
  DataQnA?: DataQnAConfigurations | undefined;

  /**
   * Adds the generative BI authoring experience to an embedded Quick Sight console.
   *
   * @public
   */
  GenerativeAuthoring?: GenerativeAuthoringConfigurations | undefined;

  /**
   * Adds the executive summaries feature to an embedded Quick Sight console.
   *
   * @public
   */
  ExecutiveSummary?: ExecutiveSummaryConfigurations | undefined;

  /**
   * Adds the data stories feature to an embedded Quick Sight console.
   *
   * @public
   */
  DataStories?: DataStoriesConfigurations | undefined;
}

/**
 * A collection of Amazon Q feature configurations in an embedded Quick Sight dashboard.
 *
 * @public
 */
export interface AmazonQInQuickSightDashboardConfigurations {
  /**
   * A generated executive summary of an embedded Quick Sight dashboard.
   *
   * @public
   */
  ExecutiveSummary?: ExecutiveSummaryConfigurations | undefined;
}

/**
 * An object, structure, or sub-structure of an analysis, template, or dashboard.
 *
 * @public
 */
export interface Entity {
  /**
   * The hierarchical path of the entity within the analysis, template, or dashboard definition tree.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * Analysis error.
 *
 * @public
 */
export interface AnalysisError {
  /**
   * The type of the analysis error.
   *
   * @public
   */
  Type?: AnalysisErrorType | undefined;

  /**
   * The message associated with the analysis error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Lists the violated entities that caused the analysis error
   *
   * @public
   */
  ViolatedEntities?: Entity[] | undefined;
}

/**
 * The navigation configuration for `CustomActionNavigationOperation`.
 *
 * @public
 */
export interface LocalNavigationConfiguration {
  /**
   * The sheet that is targeted for navigation in the same analysis.
   *
   * @public
   */
  TargetSheetId: string | undefined;
}

/**
 * The navigation operation that navigates between different sheets in the same analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface CustomActionNavigationOperation {
  /**
   * The configuration that chooses the navigation target.
   *
   * @public
   */
  LocalNavigationConfiguration?: LocalNavigationConfiguration | undefined;
}

/**
 * The customized parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface CustomParameterValues {
  /**
   * A list of string-type parameter values.
   *
   * @public
   */
  StringValues?: string[] | undefined;

  /**
   * A list of integer-type parameter values.
   *
   * @public
   */
  IntegerValues?: number[] | undefined;

  /**
   * A list of decimal-type parameter values.
   *
   * @public
   */
  DecimalValues?: number[] | undefined;

  /**
   * A list of datetime-type parameter values.
   *
   * @public
   */
  DateTimeValues?: Date[] | undefined;
}

/**
 * The configuration of custom values for the destination parameter in `DestinationParameterValueConfiguration`.
 *
 * @public
 */
export interface CustomValuesConfiguration {
  /**
   * Includes the null value in custom action parameter values.
   *
   * @public
   */
  IncludeNullValue?: boolean | undefined;

  /**
   * The customized parameter values.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  CustomValues: CustomParameterValues | undefined;
}

/**
 * The configuration of destination parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface DestinationParameterValueConfiguration {
  /**
   * The configuration of custom values for destination parameter in `DestinationParameterValueConfiguration`.
   *
   * @public
   */
  CustomValuesConfiguration?: CustomValuesConfiguration | undefined;

  /**
   * The configuration that selects all options.
   *
   * @public
   */
  SelectAllValueOptions?: SelectAllValueOptions | undefined;

  /**
   * The source parameter name of the destination parameter.
   *
   * @public
   */
  SourceParameterName?: string | undefined;

  /**
   * The source field ID of the destination parameter.
   *
   * @public
   */
  SourceField?: string | undefined;

  /**
   * A column of a data set.
   *
   * @public
   */
  SourceColumn?: ColumnIdentifier | undefined;
}

/**
 * The configuration of adding parameters in action.
 *
 * @public
 */
export interface SetParameterValueConfiguration {
  /**
   * The destination parameter name of the `SetParameterValueConfiguration`.
   *
   * @public
   */
  DestinationParameterName: string | undefined;

  /**
   * The configuration of destination parameter values.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  Value: DestinationParameterValueConfiguration | undefined;
}

/**
 * The set parameter operation that sets parameters in custom action.
 *
 * @public
 */
export interface CustomActionSetParametersOperation {
  /**
   * The parameter that determines the value configuration.
   *
   * @public
   */
  ParameterValueConfigurations: SetParameterValueConfiguration[] | undefined;
}

/**
 * The URL operation that opens a link to another webpage.
 *
 * @public
 */
export interface CustomActionURLOperation {
  /**
   * THe URL link of the `CustomActionURLOperation`.
   *
   * @public
   */
  URLTemplate: string | undefined;

  /**
   * The target of the `CustomActionURLOperation`.
   *
   * Valid values are defined as follows:
   *
   * - `NEW_TAB`: Opens the target URL in a new browser tab.
   * - `NEW_WINDOW`: Opens the target URL in a new browser window.
   * - `SAME_TAB`: Opens the target URL in the same browser tab.
   *
   * @public
   */
  URLTarget: URLTargetConfiguration | undefined;
}

/**
 * The operation that is defined by the custom action.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ImageCustomActionOperation {
  /**
   * The navigation operation that navigates between different sheets in the same analysis.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  NavigationOperation?: CustomActionNavigationOperation | undefined;

  /**
   * The URL operation that opens a link to another webpage.
   *
   * @public
   */
  URLOperation?: CustomActionURLOperation | undefined;

  /**
   * The set parameter operation that sets parameters in custom action.
   *
   * @public
   */
  SetParametersOperation?: CustomActionSetParametersOperation | undefined;
}

/**
 * A custom action defined on an image.
 *
 * @public
 */
export interface ImageCustomAction {
  /**
   * The ID of the custom action.
   *
   * @public
   */
  CustomActionId: string | undefined;

  /**
   * The name of the custom action.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the custom action.
   *
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * The trigger of the `VisualCustomAction`.
   *
   * Valid values are defined as follows:
   *
   * - `CLICK`: Initiates a custom action by a left pointer click on a data point.
   * - `MENU`: Initiates a custom action by right pointer click from the menu.
   *
   * @public
   */
  Trigger: ImageCustomActionTrigger | undefined;

  /**
   * A list of `ImageCustomActionOperations`.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  ActionOperations: ImageCustomActionOperation[] | undefined;
}

/**
 * The menu options for the interactions of an image.
 *
 * @public
 */
export interface ImageMenuOption {
  /**
   * The availability status of the image menu. If the value of this property is set to `ENABLED`, dashboard readers can interact with the image menu.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The general image interactions setup for image publish options.
 *
 * @public
 */
export interface ImageInteractionOptions {
  /**
   * The menu options for the image.
   *
   * @public
   */
  ImageMenuOption?: ImageMenuOption | undefined;
}

/**
 * Determines how the image is scaled
 *
 * @public
 */
export interface SheetImageScalingConfiguration {
  /**
   * The scaling option to use when fitting the image inside the container.
   *
   * Valid values are defined as follows:
   *
   * - `SCALE_TO_WIDTH`: The image takes up the entire width of the container. The image aspect ratio is preserved.
   * - `SCALE_TO_HEIGHT`: The image takes up the entire height of the container. The image aspect ratio is preserved.
   * - `SCALE_TO_CONTAINER`: The image takes up the entire width and height of the container. The image aspect ratio is not preserved.
   * - `SCALE_NONE`: The image is displayed in its original size and is not scaled to the container.
   *
   * @public
   */
  ScalingType?: SheetImageScalingType | undefined;
}

/**
 * The source of the static file that contains the image.
 *
 * @public
 */
export interface SheetImageStaticFileSource {
  /**
   * The ID of the static file that contains the image.
   *
   * @public
   */
  StaticFileId: string | undefined;
}

/**
 * The source of the image.
 *
 * @public
 */
export interface SheetImageSource {
  /**
   * The source of the static file that contains the image.
   *
   * @public
   */
  SheetImageStaticFileSource?: SheetImageStaticFileSource | undefined;
}

/**
 * The text that appears in the sheet image tooltip.
 *
 * @public
 */
export interface SheetImageTooltipText {
  /**
   * The plain text format.
   *
   * @public
   */
  PlainText?: string | undefined;
}

/**
 * The tooltip configuration for a sheet image.
 *
 * @public
 */
export interface SheetImageTooltipConfiguration {
  /**
   * The text that appears in the tooltip.
   *
   * @public
   */
  TooltipText?: SheetImageTooltipText | undefined;

  /**
   * The visibility of the tooltip.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * An image that is located on a sheet.
 *
 * @public
 */
export interface SheetImage {
  /**
   * The ID of the sheet image.
   *
   * @public
   */
  SheetImageId: string | undefined;

  /**
   * The source of the image.
   *
   * @public
   */
  Source: SheetImageSource | undefined;

  /**
   * Determines how the image is scaled.
   *
   * @public
   */
  Scaling?: SheetImageScalingConfiguration | undefined;

  /**
   * The tooltip to be shown when hovering over the image.
   *
   * @public
   */
  Tooltip?: SheetImageTooltipConfiguration | undefined;

  /**
   * The alt text for the image.
   *
   * @public
   */
  ImageContentAltText?: string | undefined;

  /**
   * The general image interactions setup for an image.
   *
   * @public
   */
  Interactions?: ImageInteractionOptions | undefined;

  /**
   * A list of custom actions that are configured for an image.
   *
   * @public
   */
  Actions?: ImageCustomAction[] | undefined;
}

/**
 * A *sheet*, which is an object that contains a set of visuals that are viewed together on one page in Quick Sight. Every analysis and dashboard contains at least one sheet. Each sheet contains at least one visualization widget, for example a chart, pivot table, or narrative insight. Sheets can be associated with other components, such as controls, filters, and so on.
 *
 * @public
 */
export interface Sheet {
  /**
   * The unique identifier associated with a sheet.
   *
   * @public
   */
  SheetId?: string | undefined;

  /**
   * The name of a sheet. This name is displayed on the sheet's tab in the Quick Sight console.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of images on a sheet.
   *
   * @public
   */
  Images?: SheetImage[] | undefined;
}

/**
 * Metadata structure for an analysis in Quick Sight
 *
 * @public
 */
export interface Analysis {
  /**
   * The ID of the analysis.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the analysis.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The descriptive name of the analysis.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Status associated with the analysis.
   *
   * @public
   */
  Status?: ResourceStatus | undefined;

  /**
   * Errors associated with the analysis.
   *
   * @public
   */
  Errors?: AnalysisError[] | undefined;

  /**
   * The ARNs of the datasets of the analysis.
   *
   * @public
   */
  DataSetArns?: string[] | undefined;

  /**
   * The ARNs of the topics associated with the analysis.
   *
   * @public
   */
  TopicArns?: string[] | undefined;

  /**
   * The ARN of the theme of the analysis.
   *
   * @public
   */
  ThemeArn?: string | undefined;

  /**
   * The time that the analysis was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time that the analysis was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A list of the associated sheets with the unique identifier and name of each sheet.
   *
   * @public
   */
  Sheets?: Sheet[] | undefined;
}

/**
 * The options that determine the sizing of the canvas used in a free-form layout.
 *
 * @public
 */
export interface FreeFormLayoutScreenCanvasSizeOptions {
  /**
   * The width that the view port will be optimized for when the layout renders.
   *
   * @public
   */
  OptimizedViewPortWidth: string | undefined;
}

/**
 * Configuration options for the canvas of a free-form layout.
 *
 * @public
 */
export interface FreeFormLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a free-form layout.
   *
   * @public
   */
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions | undefined;
}

/**
 * The options that determine the default settings of a free-form layout configuration.
 *
 * @public
 */
export interface DefaultFreeFormLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a free-form layout.
   *
   * @public
   */
  CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions | undefined;
}

/**
 * The options that determine the sizing of the canvas used in a grid layout.
 *
 * @public
 */
export interface GridLayoutScreenCanvasSizeOptions {
  /**
   * This value determines the layout behavior when the viewport is resized.
   *
   * - `FIXED`: A fixed width will be used when optimizing the layout. In the Quick Sight console, this option is called `Classic`.
   * - `RESPONSIVE`: The width of the canvas will be responsive and optimized to the view port. In the Quick Sight console, this option is called `Tiled`.
   *
   * @public
   */
  ResizeOption: ResizeOption | undefined;

  /**
   * The width that the view port will be optimized for when the layout renders.
   *
   * @public
   */
  OptimizedViewPortWidth?: string | undefined;
}

/**
 * Configuration options for the canvas of a grid layout.
 *
 * @public
 */
export interface GridLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a grid layout.
   *
   * @public
   */
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions | undefined;
}

/**
 * The options that determine the default settings for a grid layout configuration.
 *
 * @public
 */
export interface DefaultGridLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a grid layout.
   *
   * @public
   */
  CanvasSizeOptions: GridLayoutCanvasSizeOptions | undefined;
}

/**
 * The options that determine the default settings for interactive layout configuration.
 *
 * @public
 */
export interface DefaultInteractiveLayoutConfiguration {
  /**
   * The options that determine the default settings for a grid layout configuration.
   *
   * @public
   */
  Grid?: DefaultGridLayoutConfiguration | undefined;

  /**
   * The options that determine the default settings of a free-form layout configuration.
   *
   * @public
   */
  FreeForm?: DefaultFreeFormLayoutConfiguration | undefined;
}

/**
 * The configuration of spacing (often a margin or padding).
 *
 * @public
 */
export interface Spacing {
  /**
   * Define the top spacing.
   *
   * @public
   */
  Top?: string | undefined;

  /**
   * Define the bottom spacing.
   *
   * @public
   */
  Bottom?: string | undefined;

  /**
   * Define the left spacing.
   *
   * @public
   */
  Left?: string | undefined;

  /**
   * Define the right spacing.
   *
   * @public
   */
  Right?: string | undefined;
}

/**
 * The options for a paper canvas of a section-based layout.
 *
 * @public
 */
export interface SectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * The paper size that is used to define canvas dimensions.
   *
   * @public
   */
  PaperSize?: PaperSize | undefined;

  /**
   * The paper orientation that is used to define canvas dimensions. Choose one of the following options:
   *
   * - PORTRAIT
   * - LANDSCAPE
   *
   * @public
   */
  PaperOrientation?: PaperOrientation | undefined;

  /**
   * Defines the spacing between the canvas content and the top, bottom, left, and right edges.
   *
   * @public
   */
  PaperMargin?: Spacing | undefined;
}

/**
 * The options for the canvas of a section-based layout.
 *
 * @public
 */
export interface SectionBasedLayoutCanvasSizeOptions {
  /**
   * The options for a paper canvas of a section-based layout.
   *
   * @public
   */
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions | undefined;
}

/**
 * The options that determine the default settings for a section-based layout configuration.
 *
 * @public
 */
export interface DefaultSectionBasedLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a section-based layout.
   *
   * @public
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * The options that determine the default settings for a paginated layout configuration.
 *
 * @public
 */
export interface DefaultPaginatedLayoutConfiguration {
  /**
   * The options that determine the default settings for a section-based layout configuration.
   *
   * @public
   */
  SectionBased?: DefaultSectionBasedLayoutConfiguration | undefined;
}

/**
 * The configuration for default new sheet settings.
 *
 * @public
 */
export interface DefaultNewSheetConfiguration {
  /**
   * The options that determine the default settings for interactive layout configuration.
   *
   * @public
   */
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration | undefined;

  /**
   * The options that determine the default settings for a paginated layout configuration.
   *
   * @public
   */
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration | undefined;

  /**
   * The option that determines the sheet content type.
   *
   * @public
   */
  SheetContentType?: SheetContentType | undefined;
}

/**
 * The configuration for default analysis settings.
 *
 * @public
 */
export interface AnalysisDefaults {
  /**
   * The configuration for default new sheet settings.
   *
   * @public
   */
  DefaultNewSheetConfiguration: DefaultNewSheetConfiguration | undefined;
}

/**
 * The calculated field of an analysis.
 *
 * @public
 */
export interface CalculatedField {
  /**
   * The data set that is used in this calculated field.
   *
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * The topic that is used in this calculated field.
   *
   * @public
   */
  TopicIdentifier?: string | undefined;

  /**
   * The name of the calculated field.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The expression of the calculated field.
   *
   * @public
   */
  Expression: string | undefined;
}

/**
 * Determines the color that's applied to a particular data value in a column.
 *
 * @public
 */
export interface CustomColor {
  /**
   * The data value that the color is applied to.
   *
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * The color that is applied to the data value.
   *
   * @public
   */
  Color: string | undefined;

  /**
   * The value of a special data value.
   *
   * @public
   */
  SpecialValue?: SpecialValue | undefined;
}

/**
 * The color configurations for a column.
 *
 * @public
 */
export interface ColorsConfiguration {
  /**
   * A list of up to 50 custom colors.
   *
   * @public
   */
  CustomColors?: CustomColor[] | undefined;
}

/**
 * Decal settings for accessibility features that define visual patterns and styling for data elements.
 *
 * @public
 */
export interface DecalSettings {
  /**
   * Field value of the field that you are setting the decal pattern to. Applicable only for field level settings.
   *
   * @public
   */
  ElementValue?: string | undefined;

  /**
   * Visibility setting for the decal pattern.
   *
   * @public
   */
  DecalVisibility?: Visibility | undefined;

  /**
   * Color configuration for the decal pattern.
   *
   * @public
   */
  DecalColor?: string | undefined;

  /**
   * Type of pattern used for the decal, such as solid, diagonal, or circular patterns in various sizes.
   *
   * - `SOLID`: Solid fill pattern.
   * - `DIAGONAL_SMALL`: Small diagonal stripes pattern.
   * - `DIAGONAL_MEDIUM`: Medium diagonal stripes pattern.
   * - `DIAGONAL_LARGE`: Large diagonal stripes pattern.
   * - `DIAGONAL_OPPOSITE_SMALL`: Small cross-diagonal stripes pattern.
   * - `DIAGONAL_OPPOSITE_MEDIUM`: Medium cross-diagonal stripes pattern.
   * - `DIAGONAL_OPPOSITE_LARGE`: Large cross-diagonal stripes pattern.
   * - `CIRCLE_SMALL`: Small circle pattern.
   * - `CIRCLE_MEDIUM`: Medium circle pattern.
   * - `CIRCLE_LARGE`: Large circle pattern.
   * - `DIAMOND_SMALL`: Small diamonds pattern.
   * - `DIAMOND_MEDIUM`: Medium diamonds pattern.
   * - `DIAMOND_LARGE`: Large diamonds pattern.
   * - `DIAMOND_GRID_SMALL`: Small diamond grid pattern.
   * - `DIAMOND_GRID_MEDIUM`: Medium diamond grid pattern.
   * - `DIAMOND_GRID_LARGE`: Large diamond grid pattern.
   * - `CHECKERBOARD_SMALL`: Small checkerboard pattern.
   * - `CHECKERBOARD_MEDIUM`: Medium checkerboard pattern.
   * - `CHECKERBOARD_LARGE`: Large checkerboard pattern.
   * - `TRIANGLE_SMALL`: Small triangles pattern.
   * - `TRIANGLE_MEDIUM`: Medium triangles pattern.
   * - `TRIANGLE_LARGE`: Large triangles pattern.
   *
   * @public
   */
  DecalPatternType?: DecalPatternType | undefined;

  /**
   * Style type for the decal, which can be either manual or automatic. This field is only applicable for line series.
   *
   * - `Manual`: Apply manual line and marker configuration for line series.
   * - `Auto`: Apply automatic line and marker configuration for line series.
   *
   * @public
   */
  DecalStyleType?: DecalStyleType | undefined;
}

/**
 * Decal settings configuration for a column
 *
 * @public
 */
export interface DecalSettingsConfiguration {
  /**
   * A list of up to 50 decal settings.
   *
   * @public
   */
  CustomDecalSettings?: DecalSettings[] | undefined;
}

/**
 * The options that determine the null value format configuration.
 *
 * @public
 */
export interface NullValueFormatConfiguration {
  /**
   * Determines the null string of null values.
   *
   * @public
   */
  NullString: string | undefined;
}

/**
 * The option that determines the decimal places configuration.
 *
 * @public
 */
export interface DecimalPlacesConfiguration {
  /**
   * The values of the decimal places.
   *
   * @public
   */
  DecimalPlaces: number | undefined;
}

/**
 * The options that determine the negative value configuration.
 *
 * @public
 */
export interface NegativeValueConfiguration {
  /**
   * Determines the display mode of the negative value configuration.
   *
   * @public
   */
  DisplayMode: NegativeValueDisplayMode | undefined;
}

/**
 * The options that determine the thousands separator configuration.
 *
 * @public
 */
export interface ThousandSeparatorOptions {
  /**
   * Determines the thousands separator symbol.
   *
   * @public
   */
  Symbol?: NumericSeparatorSymbol | undefined;

  /**
   * Determines the visibility of the thousands separator.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * Determines the way numbers are styled to accommodate different readability standards. The `DEFAULT` value uses the standard international grouping system and groups numbers by the thousands. The `LAKHS` value uses the Indian numbering system and groups numbers by lakhs and crores.
   *
   * @public
   */
  GroupingStyle?: DigitGroupingStyle | undefined;
}

/**
 * The options that determine the numeric separator configuration.
 *
 * @public
 */
export interface NumericSeparatorConfiguration {
  /**
   * Determines the decimal separator.
   *
   * @public
   */
  DecimalSeparator?: NumericSeparatorSymbol | undefined;

  /**
   * The options that determine the thousands separator configuration.
   *
   * @public
   */
  ThousandsSeparator?: ThousandSeparatorOptions | undefined;
}

/**
 * The options that determine the currency display format configuration.
 *
 * @public
 */
export interface CurrencyDisplayFormatConfiguration {
  /**
   * Determines the prefix value of the currency format.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Determines the suffix value of the currency format.
   *
   * @public
   */
  Suffix?: string | undefined;

  /**
   * The options that determine the numeric separator configuration.
   *
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration | undefined;

  /**
   * Determines the symbol for the currency format.
   *
   * @public
   */
  Symbol?: string | undefined;

  /**
   * The option that determines the decimal places configuration.
   *
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration | undefined;

  /**
   * Determines the number scale value for the currency format.
   *
   * @public
   */
  NumberScale?: NumberScale | undefined;

  /**
   * The options that determine the negative value configuration.
   *
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration | undefined;

  /**
   * The options that determine the null value format configuration.
   *
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;
}

/**
 * The options that determine the number display format configuration.
 *
 * @public
 */
export interface NumberDisplayFormatConfiguration {
  /**
   * Determines the prefix value of the number format.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Determines the suffix value of the number format.
   *
   * @public
   */
  Suffix?: string | undefined;

  /**
   * The options that determine the numeric separator configuration.
   *
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration | undefined;

  /**
   * The option that determines the decimal places configuration.
   *
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration | undefined;

  /**
   * Determines the number scale value of the number format.
   *
   * @public
   */
  NumberScale?: NumberScale | undefined;

  /**
   * The options that determine the negative value configuration.
   *
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration | undefined;

  /**
   * The options that determine the null value format configuration.
   *
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;
}

/**
 * The options that determine the percentage display format configuration.
 *
 * @public
 */
export interface PercentageDisplayFormatConfiguration {
  /**
   * Determines the prefix value of the percentage format.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Determines the suffix value of the percentage format.
   *
   * @public
   */
  Suffix?: string | undefined;

  /**
   * The options that determine the numeric separator configuration.
   *
   * @public
   */
  SeparatorConfiguration?: NumericSeparatorConfiguration | undefined;

  /**
   * The option that determines the decimal places configuration.
   *
   * @public
   */
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration | undefined;

  /**
   * The options that determine the negative value configuration.
   *
   * @public
   */
  NegativeValueConfiguration?: NegativeValueConfiguration | undefined;

  /**
   * The options that determine the null value format configuration.
   *
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;
}

/**
 * The options that determine the numeric format configuration.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface NumericFormatConfiguration {
  /**
   * The options that determine the number display format configuration.
   *
   * @public
   */
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration | undefined;

  /**
   * The options that determine the currency display format configuration.
   *
   * @public
   */
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration | undefined;

  /**
   * The options that determine the percentage display format configuration.
   *
   * @public
   */
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration | undefined;
}

/**
 * Formatting configuration for `DateTime` fields.
 *
 * @public
 */
export interface DateTimeFormatConfiguration {
  /**
   * Determines the `DateTime` format.
   *
   * @public
   */
  DateTimeFormat?: string | undefined;

  /**
   * The options that determine the null value format configuration.
   *
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;

  /**
   * The formatting configuration for numeric `DateTime` fields.
   *
   * @public
   */
  NumericFormatConfiguration?: NumericFormatConfiguration | undefined;
}

/**
 * Formatting configuration for number fields.
 *
 * @public
 */
export interface NumberFormatConfiguration {
  /**
   * The options that determine the numeric format configuration.
   *
   * @public
   */
  FormatConfiguration?: NumericFormatConfiguration | undefined;
}

/**
 * Formatting configuration for string fields.
 *
 * @public
 */
export interface StringFormatConfiguration {
  /**
   * The options that determine the null value format configuration.
   *
   * @public
   */
  NullValueFormatConfiguration?: NullValueFormatConfiguration | undefined;

  /**
   * The formatting configuration for numeric strings.
   *
   * @public
   */
  NumericFormatConfiguration?: NumericFormatConfiguration | undefined;
}

/**
 * The formatting configuration for all types of field.
 *
 * @public
 */
export interface FormatConfiguration {
  /**
   * Formatting configuration for string fields.
   *
   * @public
   */
  StringFormatConfiguration?: StringFormatConfiguration | undefined;

  /**
   * Formatting configuration for number fields.
   *
   * @public
   */
  NumberFormatConfiguration?: NumberFormatConfiguration | undefined;

  /**
   * Formatting configuration for `DateTime` fields.
   *
   * @public
   */
  DateTimeFormatConfiguration?: DateTimeFormatConfiguration | undefined;
}

/**
 * The general configuration of a column.
 *
 * @public
 */
export interface ColumnConfiguration {
  /**
   * The column.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The format configuration of a column.
   *
   * @public
   */
  FormatConfiguration?: FormatConfiguration | undefined;

  /**
   * The role of the column.
   *
   * @public
   */
  Role?: ColumnRole | undefined;

  /**
   * The color configurations of the column.
   *
   * @public
   */
  ColorsConfiguration?: ColorsConfiguration | undefined;

  /**
   * Decal configuration of the column.
   *
   * @public
   */
  DecalSettingsConfiguration?: DecalSettingsConfiguration | undefined;
}

/**
 * A data set.
 *
 * @public
 */
export interface DataSetIdentifierDeclaration {
  /**
   * The identifier of the data set, typically the data set's name.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data set.
   *
   * @public
   */
  DataSetArn: string | undefined;
}

/**
 * A custom filter that filters based on a single value. This filter can be partially matched.
 *
 * @public
 */
export interface CustomFilterConfiguration {
  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * @public
   */
  MatchOperator: CategoryFilterMatchOperator | undefined;

  /**
   * The category value for the filter.
   *
   * This field is mutually exclusive to `ParameterName`.
   *
   * @public
   */
  CategoryValue?: string | undefined;

  /**
   * Select all of the values. Null is not the assigned value of select all.
   *
   * - `FILTER_ALL_VALUES`
   *
   * @public
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | undefined;

  /**
   * The parameter whose value should be used for the filter value.
   *
   * This field is mutually exclusive to `CategoryValue`.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption: FilterNullOption | undefined;
}

/**
 * A list of custom filter values.
 *
 * @public
 */
export interface CustomFilterListConfiguration {
  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * @public
   */
  MatchOperator: CategoryFilterMatchOperator | undefined;

  /**
   * The list of category values for the filter.
   *
   * @public
   */
  CategoryValues?: string[] | undefined;

  /**
   * Select all of the values. Null is not the assigned value of select all.
   *
   * - `FILTER_ALL_VALUES`
   *
   * @public
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption: FilterNullOption | undefined;
}

/**
 * A list of filter configurations.
 *
 * @public
 */
export interface FilterListConfiguration {
  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * @public
   */
  MatchOperator: CategoryFilterMatchOperator | undefined;

  /**
   * The list of category values for the filter.
   *
   * @public
   */
  CategoryValues?: string[] | undefined;

  /**
   * Select all of the values. Null is not the assigned value of select all.
   *
   * - `FILTER_ALL_VALUES`
   *
   * @public
   */
  SelectAllOptions?: CategoryFilterSelectAllOptions | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption?: FilterNullOption | undefined;
}

/**
 * The configuration for a `CategoryFilter`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface CategoryFilterConfiguration {
  /**
   * A list of filter configurations. In the Quick Sight console, this filter type is called a filter list.
   *
   * @public
   */
  FilterListConfiguration?: FilterListConfiguration | undefined;

  /**
   * A list of custom filter values. In the Quick Sight console, this filter type is called a custom filter list.
   *
   * @public
   */
  CustomFilterListConfiguration?: CustomFilterListConfiguration | undefined;

  /**
   * A custom filter that filters based on a single value. This filter can be partially matched.
   *
   * @public
   */
  CustomFilterConfiguration?: CustomFilterConfiguration | undefined;
}

/**
 * A control to display info icons for filters and parameters.
 *
 * @public
 */
export interface SheetControlInfoIconLabelOptions {
  /**
   * The visibility configuration of info icon label options.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The text content of info icon.
   *
   * @public
   */
  InfoIconText?: string | undefined;
}

/**
 * The option that determines the text display size.
 *
 * @public
 */
export interface FontSize {
  /**
   * The lexical name for the text size, proportional to its surrounding context.
   *
   * @public
   */
  Relative?: RelativeFontSize | undefined;

  /**
   * The font size that you want to use in px.
   *
   * @public
   */
  Absolute?: string | undefined;
}

/**
 * The option that determines the text display weight, or boldness.
 *
 * @public
 */
export interface FontWeight {
  /**
   * The lexical name for the level of boldness of the text display.
   *
   * @public
   */
  Name?: FontWeightName | undefined;
}

/**
 * Configures the display properties of the given text.
 *
 * @public
 */
export interface FontConfiguration {
  /**
   * The option that determines the text display size.
   *
   * @public
   */
  FontSize?: FontSize | undefined;

  /**
   * Determines the appearance of decorative lines on the text.
   *
   * @public
   */
  FontDecoration?: FontDecoration | undefined;

  /**
   * Determines the color of the text.
   *
   * @public
   */
  FontColor?: string | undefined;

  /**
   * The option that determines the text display weight, or boldness.
   *
   * @public
   */
  FontWeight?: FontWeight | undefined;

  /**
   * Determines the text display face that is inherited by the given font family.
   *
   * @public
   */
  FontStyle?: FontStyle | undefined;

  /**
   * The font family that you want to use.
   *
   * @public
   */
  FontFamily?: string | undefined;
}

/**
 * The share label options for the labels.
 *
 * @public
 */
export interface LabelOptions {
  /**
   * Determines whether or not the label is visible.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The font configuration of the label.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * The text for the label.
   *
   * @public
   */
  CustomLabel?: string | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface DateTimePickerControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * Customize how dates are formatted in controls.
   *
   * @public
   */
  DateTimeFormat?: string | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;

  /**
   * The helper text visibility of the `DateTimePickerControlDisplayOptions`.
   *
   * @public
   */
  HelperTextVisibility?: Visibility | undefined;

  /**
   * The date icon visibility of the `DateTimePickerControlDisplayOptions`.
   *
   * @public
   */
  DateIconVisibility?: Visibility | undefined;
}

/**
 * The default options that correspond to the filter control type of a `DateTimePicker`.
 *
 * @public
 */
export interface DefaultDateTimePickerControlOptions {
  /**
   * The date time picker type of the `DefaultDateTimePickerControlOptions`. Choose one of the following options:
   *
   * - `SINGLE_VALUED`: The filter condition is a fixed date.
   * - `DATE_RANGE`: The filter condition is a date time range.
   *
   * @public
   */
  Type?: SheetControlDateTimePickerType | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions | undefined;

  /**
   * The visibility configuration of the Apply button on a `DateTimePickerControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * The sort configuration for selectable values in a control.
 *
 * @public
 */
export interface SelectableValuesSort {
  /**
   * The sort direction for the selectable values. Choose one of the following options:
   *
   * - `ASC`: Sort in ascending order.
   * - `DESC`: Sort in descending order.
   * - `USER_DEFINED_ORDER`: Preserve the order in which the values were entered.
   *
   * @public
   */
  Direction: ControlSortDirection | undefined;
}

/**
 * The sort configuration for control values. This is a tagged union type. Specify either `SelectableValuesSort` or `ControlColumnSort`, but not both.
 *
 * @public
 */
export interface ControlSortConfiguration {
  /**
   * The sort configuration for user-specified values in the control. Use this option to sort values that are manually entered by users in a dropdown or list control.
   *
   * @public
   */
  SelectableValuesSort?: SelectableValuesSort | undefined;

  /**
   * The sort configuration for controls that are tied to a dataset column. Use this option to sort control values by an aggregate of a column.
   *
   * @public
   */
  ControlColumnSort?: AggregationSortConfiguration | undefined;
}

/**
 * The configuration of the `Select all` options in a list control.
 *
 * @public
 */
export interface ListControlSelectAllOptions {
  /**
   * The visibility configuration of the `Select all` options in a list control.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface DropDownControlDisplayOptions {
  /**
   * The configuration of the `Select all` options in a dropdown control.
   *
   * @public
   */
  SelectAllOptions?: ListControlSelectAllOptions | undefined;

  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * A list of selectable values that are used in a control.
 *
 * @public
 */
export interface FilterSelectableValues {
  /**
   * The values that are used in the `FilterSelectableValues`.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * The default options that correspond to the `Dropdown` filter control type.
 *
 * @public
 */
export interface DefaultFilterDropDownControlOptions {
  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: DropDownControlDisplayOptions | undefined;

  /**
   * The type of the `FilterDropDownControl`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from a dropdown menu.
   * - `SINGLE_SELECT`: The user can select a single entry from a dropdown menu.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * A list of selectable values that are used in a control.
   *
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;

  /**
   * The visibility configuration of the Apply button on a `FilterDropDownControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;
}

/**
 * The title format text configuration for a sheet control. This is a tagged union type. Specify either `PlainText` or `RichText`, but not both.
 *
 * @public
 */
export interface ControlTitleFormatText {
  /**
   * The plain text format of the title text.
   *
   * @public
   */
  PlainText?: string | undefined;

  /**
   * The rich text format of the title text.
   *
   * @public
   */
  RichText?: string | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface HierarchyFilterDropDownControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * The default options that correspond to the `HierarchyDropdown` filter control type.
 *
 * @public
 */
export interface DefaultHierarchyFilterDropDownControlOptions {
  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: HierarchyFilterDropDownControlDisplayOptions | undefined;

  /**
   * The type of the `DefaultHierarchyFilterDropDownControlOptions`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from a dropdown menu.
   * - `SINGLE_SELECT`: The user can select a single entry from a dropdown menu.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * The visibility configuration of the Apply button on a `HierarchyFilterDropDownControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * The configuration of the search options in a hierarchy list control.
 *
 * @public
 */
export interface HierarchyFilterListControlSearchOptions {
  /**
   * The visibility configuration of the search options in a hierarchy list control.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface HierarchyFilterListControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;

  /**
   * The configuration of the search options in a hierarchy list control.
   *
   * @public
   */
  SearchOptions?: HierarchyFilterListControlSearchOptions | undefined;
}

/**
 * The default options that correspond to the `HierarchyList` filter control type.
 *
 * @public
 */
export interface DefaultHierarchyFilterListControlOptions {
  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: HierarchyFilterListControlDisplayOptions | undefined;

  /**
   * The type of the `DefaultHierarchyFilterListControlOptions`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from the list.
   * - `SINGLE_SELECT`: The user can select a single entry from the list.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * The visibility configuration of the Apply button on a `HierarchyFilterListControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * The configuration of the search options in a list control.
 *
 * @public
 */
export interface ListControlSearchOptions {
  /**
   * The visibility configuration of the search options in a list control.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface ListControlDisplayOptions {
  /**
   * The configuration of the search options in a list control.
   *
   * @public
   */
  SearchOptions?: ListControlSearchOptions | undefined;

  /**
   * The configuration of the `Select all` options in a list control.
   *
   * @public
   */
  SelectAllOptions?: ListControlSelectAllOptions | undefined;

  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * The default options that correspond to the `List` filter control type.
 *
 * @public
 */
export interface DefaultFilterListControlOptions {
  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: ListControlDisplayOptions | undefined;

  /**
   * The type of the `DefaultFilterListControlOptions`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from the list.
   * - `SINGLE_SELECT`: The user can select a single entry from the list.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * A list of selectable values that are used in a control.
   *
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface RelativeDateTimeControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * Customize how dates are formatted in controls.
   *
   * @public
   */
  DateTimeFormat?: string | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * The default options that correspond to the `RelativeDateTime` filter control type.
 *
 * @public
 */
export interface DefaultRelativeDateTimeControlOptions {
  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: RelativeDateTimeControlDisplayOptions | undefined;

  /**
   * The visibility configuration of the Apply button on a `RelativeDateTimeControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface SliderControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * The default options that correspond to the `Slider` filter control type.
 *
 * @public
 */
export interface DefaultSliderControlOptions {
  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: SliderControlDisplayOptions | undefined;

  /**
   * The type of the `DefaultSliderControlOptions`. Choose one of the following options:
   *
   * - `SINGLE_POINT`: Filter against(equals) a single data point.
   * - `RANGE`: Filter data that is in a specified range.
   *
   * @public
   */
  Type?: SheetControlSliderType | undefined;

  /**
   * The larger value that is displayed at the right of the slider.
   *
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * The smaller value that is displayed at the left of the slider.
   *
   * @public
   */
  MinimumValue: number | undefined;

  /**
   * The number of increments that the slider bar is divided into.
   *
   * @public
   */
  StepSize: number | undefined;
}

/**
 * The configuration of the placeholder options in a text control.
 *
 * @public
 */
export interface TextControlPlaceholderOptions {
  /**
   * The visibility configuration of the placeholder options in a text control.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface TextAreaControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * The configuration of the placeholder options in a text area control.
   *
   * @public
   */
  PlaceholderOptions?: TextControlPlaceholderOptions | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * The default options that correspond to the `TextArea` filter control type.
 *
 * @public
 */
export interface DefaultTextAreaControlOptions {
  /**
   * The delimiter that is used to separate the lines in text.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions | undefined;
}

/**
 * The display options of a control.
 *
 * @public
 */
export interface TextFieldControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * @public
   */
  TitleOptions?: LabelOptions | undefined;

  /**
   * The configuration of the placeholder options in a text field control.
   *
   * @public
   */
  PlaceholderOptions?: TextControlPlaceholderOptions | undefined;

  /**
   * The configuration of info icon label options.
   *
   * @public
   */
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions | undefined;
}

/**
 * The default options that correspond to the `TextField` filter control type.
 *
 * @public
 */
export interface DefaultTextFieldControlOptions {
  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: TextFieldControlDisplayOptions | undefined;
}

/**
 * The option that corresponds to the control type of the filter.
 *
 * @public
 */
export interface DefaultFilterControlOptions {
  /**
   * The default options that correspond to the filter control type of a `DateTimePicker`.
   *
   * @public
   */
  DefaultDateTimePickerOptions?: DefaultDateTimePickerControlOptions | undefined;

  /**
   * The default options that correspond to the `List` filter control type.
   *
   * @public
   */
  DefaultListOptions?: DefaultFilterListControlOptions | undefined;

  /**
   * The default options that correspond to the `Dropdown` filter control type.
   *
   * @public
   */
  DefaultDropdownOptions?: DefaultFilterDropDownControlOptions | undefined;

  /**
   * The default options that correspond to the `TextField` filter control type.
   *
   * @public
   */
  DefaultTextFieldOptions?: DefaultTextFieldControlOptions | undefined;

  /**
   * The default options that correspond to the `TextArea` filter control type.
   *
   * @public
   */
  DefaultTextAreaOptions?: DefaultTextAreaControlOptions | undefined;

  /**
   * The default options that correspond to the `Slider` filter control type.
   *
   * @public
   */
  DefaultSliderOptions?: DefaultSliderControlOptions | undefined;

  /**
   * The default options that correspond to the `RelativeDateTime` filter control type.
   *
   * @public
   */
  DefaultRelativeDateTimeOptions?: DefaultRelativeDateTimeControlOptions | undefined;

  /**
   * The default options that correspond to the `HierarchyList` filter control type.
   *
   * @public
   */
  DefaultHierarchyList?: DefaultHierarchyFilterListControlOptions | undefined;

  /**
   * The default options that correspond to the `HierarchyDropdown` filter control type.
   *
   * @public
   */
  DefaultHierarchyDropdown?: DefaultHierarchyFilterDropDownControlOptions | undefined;
}

/**
 * The default configuration for all dependent controls of the filter.
 *
 * @public
 */
export interface DefaultFilterControlConfiguration {
  /**
   * The title of the `DefaultFilterControlConfiguration`. This title is shared by all controls that are tied to this filter.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The control option for the `DefaultFilterControlConfiguration`.
   *
   * @public
   */
  ControlOptions: DefaultFilterControlOptions | undefined;

  /**
   * The title text format configuration for the default filter control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A `CategoryFilter` filters text values.
 *
 * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the *Amazon Quick Suite User Guide*.
 *
 * @public
 */
export interface CategoryFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The configuration for a `CategoryFilter`.
   *
   * @public
   */
  Configuration: CategoryFilterConfiguration | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * One level of the drill-down path of a `HierarchyFilter`.
 *
 * @public
 */
export interface HierarchyFilterLevel {
  /**
   * The column that this level of the hierarchy drills down by. This column must belong to the same dataset as `HierarchyFilter$Column`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;
}

/**
 * A `CategoryInnerFilter` filters text values for the `NestedFilter`.
 *
 * @public
 */
export interface CategoryInnerFilter {
  /**
   * A column of a data set.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The configuration for a `CategoryFilter`.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  Configuration: CategoryFilterConfiguration | undefined;

  /**
   * The default configuration for all dependent controls of the filter.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * The `InnerFilter` defines the subset of data to be used with the `NestedFilter`.
 *
 * @public
 */
export interface InnerFilter {
  /**
   * A `CategoryInnerFilter` filters text values for the `NestedFilter`.
   *
   * @public
   */
  CategoryInnerFilter?: CategoryInnerFilter | undefined;
}

/**
 * A `NestedFilter` filters data with a subset of data that is defined by the nested inner filter.
 *
 * @public
 */
export interface NestedFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * A boolean condition to include or exclude the subset that is defined by the values of the nested inner filter.
   *
   * @public
   */
  IncludeInnerSet: boolean | undefined;

  /**
   * The `InnerFilter` defines the subset of data to be used with the `NestedFilter`.
   *
   * @public
   */
  InnerFilter: InnerFilter | undefined;
}

/**
 * A `NumericEqualityFilter` filters values that are equal to the specified value.
 *
 * @public
 */
export interface NumericEqualityFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The input value.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * Select all of the values. Null is not the assigned value of select all.
   *
   * - `FILTER_ALL_VALUES`
   *
   * @public
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | undefined;

  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * @public
   */
  MatchOperator: NumericEqualityMatchOperator | undefined;

  /**
   * The aggregation function of the filter.
   *
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;

  /**
   * The parameter whose value should be used for the filter value.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * The value input pf the numeric range filter.
 *
 * @public
 */
export interface NumericRangeFilterValue {
  /**
   * The static value of the numeric range filter.
   *
   * @public
   */
  StaticValue?: number | undefined;

  /**
   * The parameter that is used in the numeric range.
   *
   * @public
   */
  Parameter?: string | undefined;
}

/**
 * A `NumericRangeFilter` filters values that are within the value range.
 *
 * @public
 */
export interface NumericRangeFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * Determines whether the minimum value in the filter value range should be included in the filtered results.
   *
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * Determines whether the maximum value in the filter value range should be included in the filtered results.
   *
   * @public
   */
  IncludeMaximum?: boolean | undefined;

  /**
   * The minimum value for the filter value range.
   *
   * @public
   */
  RangeMinimum?: NumericRangeFilterValue | undefined;

  /**
   * The maximum value for the filter value range.
   *
   * @public
   */
  RangeMaximum?: NumericRangeFilterValue | undefined;

  /**
   * Select all of the values. Null is not the assigned value of select all.
   *
   * - `FILTER_ALL_VALUES`
   *
   * @public
   */
  SelectAllOptions?: NumericFilterSelectAllOptions | undefined;

  /**
   * The aggregation function of the filter.
   *
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * The date configuration of the filter.
 *
 * @public
 */
export interface AnchorDateConfiguration {
  /**
   * The options for the date configuration. Choose one of the options below:
   *
   * - `NOW`
   *
   * @public
   */
  AnchorOption?: AnchorOption | undefined;

  /**
   * The name of the parameter that is used for the anchor date configuration.
   *
   * @public
   */
  ParameterName?: string | undefined;
}

/**
 * The exclude period of `TimeRangeFilter` or `RelativeDatesFilter`.
 *
 * @public
 */
export interface ExcludePeriodConfiguration {
  /**
   * The amount or number of the exclude period.
   *
   * @public
   */
  Amount: number | undefined;

  /**
   * The granularity or unit (day, month, year) of the exclude period.
   *
   * @public
   */
  Granularity: TimeGranularity | undefined;

  /**
   * The status of the exclude period. Choose from the following options:
   *
   * - `ENABLED`
   * - `DISABLED`
   *
   * @public
   */
  Status?: WidgetStatus | undefined;
}

/**
 * A `RelativeDatesFilter` filters relative dates values.
 *
 * @public
 */
export interface RelativeDatesFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The date configuration of the filter.
   *
   * @public
   */
  AnchorDateConfiguration: AnchorDateConfiguration | undefined;

  /**
   * The minimum granularity (period granularity) of the relative dates filter.
   *
   * @public
   */
  MinimumGranularity?: TimeGranularity | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity: TimeGranularity | undefined;

  /**
   * The range date type of the filter. Choose one of the options below:
   *
   * - `PREVIOUS`
   * - `THIS`
   * - `LAST`
   * - `NOW`
   * - `NEXT`
   *
   * @public
   */
  RelativeDateType: RelativeDateType | undefined;

  /**
   * The date value of the filter.
   *
   * @public
   */
  RelativeDateValue?: number | undefined;

  /**
   * The parameter whose value should be used for the filter value.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * The configuration for the exclude period of the filter.
   *
   * @public
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * The rolling date configuration of a date time filter.
 *
 * @public
 */
export interface RollingDateConfiguration {
  /**
   * The data set that is used in the rolling date configuration.
   *
   * @public
   */
  DataSetIdentifier?: string | undefined;

  /**
   * The expression of the rolling date configuration.
   *
   * @public
   */
  Expression: string | undefined;
}

/**
 * A `TimeEqualityFilter` filters values that are equal to a given value.
 *
 * @public
 */
export interface TimeEqualityFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The value of a `TimeEquality` filter.
   *
   * This field is mutually exclusive to `RollingDate` and `ParameterName`.
   *
   * @public
   */
  Value?: Date | undefined;

  /**
   * The parameter whose value should be used for the filter value.
   *
   * This field is mutually exclusive to `Value` and `RollingDate`.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * The rolling date input for the `TimeEquality` filter.
   *
   * This field is mutually exclusive to `Value` and `ParameterName`.
   *
   * @public
   */
  RollingDate?: RollingDateConfiguration | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * The value of a time range filter.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface TimeRangeFilterValue {
  /**
   * The static input value.
   *
   * @public
   */
  StaticValue?: Date | undefined;

  /**
   * The rolling date input value.
   *
   * @public
   */
  RollingDate?: RollingDateConfiguration | undefined;

  /**
   * The parameter type input value.
   *
   * @public
   */
  Parameter?: string | undefined;
}

/**
 * A `TimeRangeFilter` filters values that are between two specified values.
 *
 * @public
 */
export interface TimeRangeFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * Determines whether the minimum value in the filter value range should be included in the filtered results.
   *
   * @public
   */
  IncludeMinimum?: boolean | undefined;

  /**
   * Determines whether the maximum value in the filter value range should be included in the filtered results.
   *
   * @public
   */
  IncludeMaximum?: boolean | undefined;

  /**
   * The minimum value for the filter value range.
   *
   * @public
   */
  RangeMinimumValue?: TimeRangeFilterValue | undefined;

  /**
   * The maximum value for the filter value range.
   *
   * @public
   */
  RangeMaximumValue?: TimeRangeFilterValue | undefined;

  /**
   * This option determines how null values should be treated when filtering data.
   *
   * - `ALL_VALUES`: Include null values in filtered results.
   * - `NULLS_ONLY`: Only include null values in filtered results.
   * - `NON_NULLS_ONLY`: Exclude null values from filtered results.
   *
   * @public
   */
  NullOption: FilterNullOption | undefined;

  /**
   * The exclude period of the time range filter.
   *
   * @public
   */
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * A `TopBottomFilter` filters values that are at the top or the bottom.
 *
 * @public
 */
export interface TopBottomFilter {
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * @public
   */
  FilterId: string | undefined;

  /**
   * The column that the filter is applied to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The number of items to include in the top bottom filter results.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The aggregation and sort configuration of the top bottom filter.
   *
   * @public
   */
  AggregationSortConfigurations: AggregationSortConfiguration[] | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * The parameter whose value should be used for the filter value.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The default configurations for the associated controls. This applies only for filters that are scoped to multiple sheets.
   *
   * @public
   */
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration | undefined;
}

/**
 * The filter that is applied to the options.
 *
 * @public
 */
export interface SheetVisualScopingConfiguration {
  /**
   * The selected sheet that the filter is applied to.
   *
   * @public
   */
  SheetId: string | undefined;

  /**
   * The scope of the applied entities. Choose one of the following options:
   *
   * - `ALL_VISUALS`
   * - `SELECTED_VISUALS`
   *
   * @public
   */
  Scope: FilterVisualScope | undefined;

  /**
   * The selected visuals that the filter is applied to.
   *
   * @public
   */
  VisualIds?: string[] | undefined;
}

/**
 * The configuration for applying a filter to specific sheets or visuals. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface SelectedSheetsFilterScopeConfiguration {
  /**
   * The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.
   *
   * @public
   */
  SheetVisualScopingConfigurations?: SheetVisualScopingConfiguration[] | undefined;
}

/**
 * The scope configuration for a `FilterGroup`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface FilterScopeConfiguration {
  /**
   * The configuration for applying a filter to specific sheets.
   *
   * @public
   */
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration | undefined;

  /**
   * The configuration that applies a filter to all sheets. When you choose `AllSheets` as the value for a `FilterScopeConfiguration`, this filter is applied to all visuals of all sheets in an Analysis, Dashboard, or Template. The `AllSheetsFilterScopeConfiguration` is chosen.
   *
   * @public
   */
  AllSheets?: AllSheetsFilterScopeConfiguration | undefined;
}

/**
 * Defines what initiates a highlight operation on a visual, such as a click or hover.
 *
 * @public
 */
export interface VisualHighlightOperation {
  /**
   * Specifies whether a highlight operation is initiated by a click or hover, or whether it's disabled.
   *
   * @public
   */
  Trigger: VisualHighlightTrigger | undefined;
}

/**
 * A list of custom actions applied to visuals in an analysis or sheet.
 *
 * @public
 */
export interface VisualCustomActionDefaults {
  /**
   * A list of highlight operations available for visuals in an analysis or sheet.
   *
   * @public
   */
  highlightOperation?: VisualHighlightOperation | undefined;
}

/**
 * The configuration for a customizable message displayed on a visual. Supports parameter substitution in text fields.
 *
 * @public
 */
export interface VisualMessageConfiguration {
  /**
   * Specifies whether the custom message is displayed on the visual. When set to `true`, the custom message appears in place of the default message. When set to `false` or omitted, the default message is displayed.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The title text of the message that is displayed on the visual.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Specifies whether the title of the message is displayed.
   *
   * @public
   */
  TitleVisibility?: Visibility | undefined;

  /**
   * The description text of the message that is displayed on the visual.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether the description of the message is displayed.
   *
   * @public
   */
  DescriptionVisibility?: Visibility | undefined;

  /**
   * The display text of the hyperlink that is shown in the message.
   *
   * @public
   */
  LinkText?: string | undefined;

  /**
   * The destination URL of the hyperlink that is shown in the message. Only valid `http`, `https`, and `mailto` URLs are supported.
   *
   * @public
   */
  LinkUrl?: string | undefined;

  /**
   * Specifies whether the hyperlink in the message is displayed.
   *
   * @public
   */
  LinkVisibility?: Visibility | undefined;
}

/**
 * The messages that are displayed on a visual under specific conditions, such as when the visual returns no data.
 *
 * @public
 */
export interface VisualMessages {
  /**
   * The message that is displayed on a visual when there is no data to display.
   *
   * @public
   */
  NoDataMessage?: VisualMessageConfiguration | undefined;
}

/**
 * An array of analysis level configurations.
 *
 * @public
 */
export interface AssetOptions {
  /**
   * Determines the timezone for the analysis.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Determines the week start day for an analysis.
   *
   * @public
   */
  WeekStart?: DayOfTheWeek | undefined;

  /**
   * Determines whether insight summaries from Amazon Q Business are allowed in Dashboard Q&A.
   *
   * @public
   */
  QBusinessInsightsStatus?: QBusinessInsightsStatus | undefined;

  /**
   * A list of dataset ARNS to exclude from Dashboard Q&A.
   *
   * @public
   */
  ExcludedDataSetArns?: string[] | undefined;

  /**
   * A list of visual custom actions for the analysis.
   *
   * @public
   */
  CustomActionDefaults?: VisualCustomActionDefaults | undefined;

  /**
   * The configuration options for the messages that are displayed on visuals in the analysis.
   *
   * @public
   */
  VisualMessages?: VisualMessages | undefined;
}

/**
 * Defines different defaults to the users or groups based on mapping.
 *
 * @public
 */
export interface DynamicDefaultValue {
  /**
   * The column that contains the username.
   *
   * @public
   */
  UserNameColumn?: ColumnIdentifier | undefined;

  /**
   * The column that contains the group name.
   *
   * @public
   */
  GroupNameColumn?: ColumnIdentifier | undefined;

  /**
   * The column that contains the default value of each user or group.
   *
   * @public
   */
  DefaultValueColumn: ColumnIdentifier | undefined;
}

/**
 * The default values of the `DateTimeParameterDeclaration`.
 *
 * @public
 */
export interface DateTimeDefaultValues {
  /**
   * The dynamic value of the `DataTimeDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * The static values of the `DataTimeDefaultValues`.
   *
   * @public
   */
  StaticValues?: Date[] | undefined;

  /**
   * The rolling date of the `DataTimeDefaultValues`. The date is determined from the dataset based on input expression.
   *
   * @public
   */
  RollingDate?: RollingDateConfiguration | undefined;
}

/**
 * A dataset parameter that is mapped to an analysis parameter.
 *
 * @public
 */
export interface MappedDataSetParameter {
  /**
   * A unique name that identifies a dataset within the analysis or dashboard.
   *
   * @public
   */
  DataSetIdentifier: string | undefined;

  /**
   * The name of the dataset parameter.
   *
   * @public
   */
  DataSetParameterName: string | undefined;
}

/**
 * The configuration that defines the default value of a `DateTime` parameter when a value has not been set.
 *
 * @public
 */
export interface DateTimeValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   *
   * - `RECOMMENDED`: The recommended value.
   * - `NULL`: The `NULL` value.
   *
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * @public
   */
  CustomValue?: Date | undefined;
}

/**
 * A parameter declaration for the `DateTime` data type.
 *
 * @public
 */
export interface DateTimeParameterDeclaration {
  /**
   * The name of the parameter that is being declared.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * @public
   */
  DefaultValues?: DateTimeDefaultValues | undefined;

  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * @public
   */
  TimeGranularity?: TimeGranularity | undefined;

  /**
   * The configuration that defines the default value of a `DateTime` parameter when a value has not been set.
   *
   * @public
   */
  ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration | undefined;

  /**
   * A list of dataset parameters that are mapped to an analysis parameter.
   *
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * The default values of the `DecimalParameterDeclaration`.
 *
 * @public
 */
export interface DecimalDefaultValues {
  /**
   * The dynamic value of the `DecimalDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * The static values of the `DecimalDefaultValues`.
   *
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * The configuration that defines the default value of a `Decimal` parameter when a value has not been set.
 *
 * @public
 */
export interface DecimalValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   *
   * - `RECOMMENDED`: The recommended value.
   * - `NULL`: The `NULL` value.
   *
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * @public
   */
  CustomValue?: number | undefined;
}

/**
 * A parameter declaration for the `Decimal` data type.
 *
 * @public
 */
export interface DecimalParameterDeclaration {
  /**
   * The value type determines whether the parameter is a single-value or multi-value parameter.
   *
   * @public
   */
  ParameterValueType: ParameterValueType | undefined;

  /**
   * The name of the parameter that is being declared.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * @public
   */
  DefaultValues?: DecimalDefaultValues | undefined;

  /**
   * The configuration that defines the default value of a `Decimal` parameter when a value has not been set.
   *
   * @public
   */
  ValueWhenUnset?: DecimalValueWhenUnsetConfiguration | undefined;

  /**
   * A list of dataset parameters that are mapped to an analysis parameter.
   *
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * The default values of the `IntegerParameterDeclaration`.
 *
 * @public
 */
export interface IntegerDefaultValues {
  /**
   * The dynamic value of the `IntegerDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * The static values of the `IntegerDefaultValues`.
   *
   * @public
   */
  StaticValues?: number[] | undefined;
}

/**
 * A parameter declaration for the `Integer` data type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface IntegerValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   *
   * - `RECOMMENDED`: The recommended value.
   * - `NULL`: The `NULL` value.
   *
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * @public
   */
  CustomValue?: number | undefined;
}

/**
 * A parameter declaration for the `Integer` data type.
 *
 * @public
 */
export interface IntegerParameterDeclaration {
  /**
   * The value type determines whether the parameter is a single-value or multi-value parameter.
   *
   * @public
   */
  ParameterValueType: ParameterValueType | undefined;

  /**
   * The name of the parameter that is being declared.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * @public
   */
  DefaultValues?: IntegerDefaultValues | undefined;

  /**
   * A parameter declaration for the `Integer` data type.
   *
   * @public
   */
  ValueWhenUnset?: IntegerValueWhenUnsetConfiguration | undefined;

  /**
   * A list of dataset parameters that are mapped to an analysis parameter.
   *
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * The default values of the `StringParameterDeclaration`.
 *
 * @public
 */
export interface StringDefaultValues {
  /**
   * The dynamic value of the `StringDefaultValues`. Different defaults displayed according to users, groups, and values mapping.
   *
   * @public
   */
  DynamicValue?: DynamicDefaultValue | undefined;

  /**
   * The static values of the `DecimalDefaultValues`.
   *
   * @public
   */
  StaticValues?: string[] | undefined;
}

/**
 * The configuration that defines the default value of a `String` parameter when a value has not been set.
 *
 * @public
 */
export interface StringValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   *
   * - `RECOMMENDED`: The recommended value.
   * - `NULL`: The `NULL` value.
   *
   * @public
   */
  ValueWhenUnsetOption?: ValueWhenUnsetOption | undefined;

  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * @public
   */
  CustomValue?: string | undefined;
}

/**
 * A parameter declaration for the `String` data type.
 *
 * @public
 */
export interface StringParameterDeclaration {
  /**
   * The value type determines whether the parameter is a single-value or multi-value parameter.
   *
   * @public
   */
  ParameterValueType: ParameterValueType | undefined;

  /**
   * The name of the parameter that is being declared.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * @public
   */
  DefaultValues?: StringDefaultValues | undefined;

  /**
   * The configuration that defines the default value of a `String` parameter when a value has not been set.
   *
   * @public
   */
  ValueWhenUnset?: StringValueWhenUnsetConfiguration | undefined;

  /**
   * A list of dataset parameters that are mapped to an analysis parameter.
   *
   * @public
   */
  MappedDataSetParameters?: MappedDataSetParameter[] | undefined;
}

/**
 * The declaration definition of a parameter.
 *
 * For more information, see [Parameters in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the *Amazon Quick Suite User Guide*.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ParameterDeclaration {
  /**
   * A parameter declaration for the `String` data type.
   *
   * @public
   */
  StringParameterDeclaration?: StringParameterDeclaration | undefined;

  /**
   * A parameter declaration for the `Decimal` data type.
   *
   * @public
   */
  DecimalParameterDeclaration?: DecimalParameterDeclaration | undefined;

  /**
   * A parameter declaration for the `Integer` data type.
   *
   * @public
   */
  IntegerParameterDeclaration?: IntegerParameterDeclaration | undefined;

  /**
   * A parameter declaration for the `DateTime` data type.
   *
   * @public
   */
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration | undefined;
}

/**
 * A structure that describes the query execution options.
 *
 * @public
 */
export interface QueryExecutionOptions {
  /**
   * A structure that describes the query execution mode.
   *
   * @public
   */
  QueryExecutionMode?: QueryExecutionMode | undefined;
}

/**
 * The source controls that are used in a `CascadingControlConfiguration`.
 *
 * @public
 */
export interface CascadingControlSource {
  /**
   * The source sheet control ID of a `CascadingControlSource`.
   *
   * @public
   */
  SourceSheetControlId?: string | undefined;

  /**
   * The column identifier that determines which column to look up for the source sheet control.
   *
   * @public
   */
  ColumnToMatch?: ColumnIdentifier | undefined;
}

/**
 * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
 *
 * @public
 */
export interface CascadingControlConfiguration {
  /**
   * A list of source controls that determine the values that are used in the current control.
   *
   * @public
   */
  SourceControls?: CascadingControlSource[] | undefined;
}

/**
 * A control from a filter that is scoped across more than one sheet. This represents your filter control on a sheet
 *
 * @public
 */
export interface FilterCrossSheetControl {
  /**
   * The ID of the `FilterCrossSheetControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The source filter ID of the `FilterCrossSheetControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;
}

/**
 * A control from a date filter that is used to specify date and time.
 *
 * @public
 */
export interface FilterDateTimePickerControl {
  /**
   * The ID of the `FilterDateTimePickerControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The title of the `FilterDateTimePickerControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source filter ID of the `FilterDateTimePickerControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions | undefined;

  /**
   * The type of the `FilterDropDownControl`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from a dropdown menu.
   * - `SINGLE_SELECT`: The user can select a single entry from a dropdown menu.
   *
   * @public
   */
  Type?: SheetControlDateTimePickerType | undefined;

  /**
   * The visibility configurationof the Apply button on a `DateTimePickerControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a dropdown list with buttons that are used to select a single value.
 *
 * @public
 */
export interface FilterDropDownControl {
  /**
   * The ID of the `FilterDropDownControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The title of the `FilterDropDownControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source filter ID of the `FilterDropDownControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The display options of the `FilterDropDownControl`.
   *
   * @public
   */
  DisplayOptions?: DropDownControlDisplayOptions | undefined;

  /**
   * The type of the `FilterDropDownControl`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from a dropdown menu.
   * - `SINGLE_SELECT`: The user can select a single entry from a dropdown menu.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * A list of selectable values that are used in a control.
   *
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;

  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;

  /**
   * The visibility configuration of the Apply button on a `FilterDropDownControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control from a hierarchy filter that displays the hierarchy as a dropdown list. You can expand a value to see and select the values beneath it, and select either a single value or multiple values.
 *
 * @public
 */
export interface HierarchyFilterDropDownControl {
  /**
   * The ID of the `HierarchyFilterDropDownControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The source filter ID of the `HierarchyFilterDropDownControl`. This must be the `FilterId` of a `HierarchyFilter`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The title of the `HierarchyFilterDropDownControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: HierarchyFilterDropDownControlDisplayOptions | undefined;

  /**
   * The type of the `HierarchyFilterDropDownControl`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from a dropdown menu.
   * - `SINGLE_SELECT`: The user can select a single entry from a dropdown menu.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * The visibility configuration of the Apply button on a `HierarchyFilterDropDownControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control from a hierarchy filter that displays the hierarchy as a list. You can expand a value to see and select the values beneath it, and select either a single value or multiple values.
 *
 * @public
 */
export interface HierarchyFilterListControl {
  /**
   * The ID of the `HierarchyFilterListControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The source filter ID of the `HierarchyFilterListControl`. This must be the `FilterId` of a `HierarchyFilter`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The title of the `HierarchyFilterListControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: HierarchyFilterListControlDisplayOptions | undefined;

  /**
   * The type of the `HierarchyFilterListControl`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from the list.
   * - `SINGLE_SELECT`: The user can select a single entry from the list.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * The visibility configuration of the Apply button on a `HierarchyFilterListControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
 *
 * @public
 */
export interface FilterListControl {
  /**
   * The ID of the `FilterListControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The title of the `FilterListControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source filter ID of the `FilterListControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: ListControlDisplayOptions | undefined;

  /**
   * The type of the `FilterListControl`. Choose one of the following options:
   *
   * - `MULTI_SELECT`: The user can select multiple entries from the list.
   * - `SINGLE_SELECT`: The user can select a single entry from the list.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * A list of selectable values that are used in a control.
   *
   * @public
   */
  SelectableValues?: FilterSelectableValues | undefined;

  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control from a date filter that is used to specify the relative date.
 *
 * @public
 */
export interface FilterRelativeDateTimeControl {
  /**
   * The ID of the `FilterTextAreaControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The title of the `FilterTextAreaControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source filter ID of the `FilterTextAreaControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: RelativeDateTimeControlDisplayOptions | undefined;

  /**
   * The visibility configuration of the Apply button on a `FilterRelativeDateTimeControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 *
 * @public
 */
export interface FilterSliderControl {
  /**
   * The ID of the `FilterSliderControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The title of the `FilterSliderControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source filter ID of the `FilterSliderControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: SliderControlDisplayOptions | undefined;

  /**
   * The type of the `FilterSliderControl`. Choose one of the following options:
   *
   * - `SINGLE_POINT`: Filter against(equals) a single data point.
   * - `RANGE`: Filter data that is in a specified range.
   *
   * @public
   */
  Type?: SheetControlSliderType | undefined;

  /**
   * The larger value that is displayed at the right of the slider.
   *
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * The smaller value that is displayed at the left of the slider.
   *
   * @public
   */
  MinimumValue: number | undefined;

  /**
   * The number of increments that the slider bar is divided into.
   *
   * @public
   */
  StepSize: number | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a text box that is used to enter multiple entries.
 *
 * @public
 */
export interface FilterTextAreaControl {
  /**
   * The ID of the `FilterTextAreaControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The title of the `FilterTextAreaControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source filter ID of the `FilterTextAreaControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The delimiter that is used to separate the lines in text.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a text box that is used to enter a single entry.
 *
 * @public
 */
export interface FilterTextFieldControl {
  /**
   * The ID of the `FilterTextFieldControl`.
   *
   * @public
   */
  FilterControlId: string | undefined;

  /**
   * The title of the `FilterTextFieldControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source filter ID of the `FilterTextFieldControl`.
   *
   * @public
   */
  SourceFilterId: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: TextFieldControlDisplayOptions | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * The control of a filter that is used to interact with a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface FilterControl {
  /**
   * A control from a date filter that is used to specify date and time.
   *
   * @public
   */
  DateTimePicker?: FilterDateTimePickerControl | undefined;

  /**
   * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
   *
   * @public
   */
  List?: FilterListControl | undefined;

  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * @public
   */
  Dropdown?: FilterDropDownControl | undefined;

  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * @public
   */
  TextField?: FilterTextFieldControl | undefined;

  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * @public
   */
  TextArea?: FilterTextAreaControl | undefined;

  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * @public
   */
  Slider?: FilterSliderControl | undefined;

  /**
   * A control from a date filter that is used to specify the relative date.
   *
   * @public
   */
  RelativeDateTime?: FilterRelativeDateTimeControl | undefined;

  /**
   * A control from a filter that is scoped across more than one sheet. This represents your filter control on a sheet
   *
   * @public
   */
  CrossSheet?: FilterCrossSheetControl | undefined;

  /**
   * A control from a hierarchy filter that displays the hierarchy as a list. You can expand a value to see and select the values beneath it, and select either a single value or multiple values.
   *
   * @public
   */
  HierarchyList?: HierarchyFilterListControl | undefined;

  /**
   * A control from a hierarchy filter that displays the hierarchy as a dropdown list. You can expand a value to see and select the values beneath it, and select either a single value or multiple values.
   *
   * @public
   */
  HierarchyDropdown?: HierarchyFilterDropDownControl | undefined;
}

/**
 * The background style configuration of a free-form layout element.
 *
 * @public
 */
export interface FreeFormLayoutElementBackgroundStyle {
  /**
   * The background visibility of a free-form layout element.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The background color of a free-form layout element.
   *
   * @public
   */
  Color?: string | undefined;
}

/**
 * The background style configuration of a free-form layout element.
 *
 * @public
 */
export interface FreeFormLayoutElementBorderStyle {
  /**
   * The border visibility of a free-form layout element.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The border color of a free-form layout element.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * The border width of a free-form layout element.
   *
   * @public
   */
  Width?: string | undefined;
}

/**
 * The configuration of loading animation in free-form layout.
 *
 * @public
 */
export interface LoadingAnimation {
  /**
   * The visibility configuration of `LoadingAnimation`.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The override configuration of the rendering rules of a sheet.
 *
 * @public
 */
export interface SheetElementConfigurationOverrides {
  /**
   * Determines whether or not the overrides are visible. Choose one of the following options:
   *
   * - `VISIBLE`
   * - `HIDDEN`
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The rendering rules of a sheet that uses a free-form layout.
 *
 * @public
 */
export interface SheetElementRenderingRule {
  /**
   * The expression of the rendering rules of a sheet.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The override configuration of the rendering rules of a sheet.
   *
   * @public
   */
  ConfigurationOverrides: SheetElementConfigurationOverrides | undefined;
}

/**
 * An element within a free-form layout.
 *
 * @public
 */
export interface FreeFormLayoutElement {
  /**
   * A unique identifier for an element within a free-form layout.
   *
   * @public
   */
  ElementId: string | undefined;

  /**
   * The type of element.
   *
   * @public
   */
  ElementType: LayoutElementType | undefined;

  /**
   * The x-axis coordinate of the element.
   *
   * @public
   */
  XAxisLocation: string | undefined;

  /**
   * The y-axis coordinate of the element.
   *
   * @public
   */
  YAxisLocation: string | undefined;

  /**
   * The width of an element within a free-form layout.
   *
   * @public
   */
  Width: string | undefined;

  /**
   * The height of an element within a free-form layout.
   *
   * @public
   */
  Height: string | undefined;

  /**
   * The visibility of an element within a free-form layout.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The rendering rules that determine when an element should be displayed within a free-form layout.
   *
   * @public
   */
  RenderingRules?: SheetElementRenderingRule[] | undefined;

  /**
   * The border style configuration of a free-form layout element.
   *
   * @public
   */
  BorderStyle?: FreeFormLayoutElementBorderStyle | undefined;

  /**
   * The border style configuration of a free-form layout element. This border style is used when the element is selected.
   *
   * @public
   */
  SelectedBorderStyle?: FreeFormLayoutElementBorderStyle | undefined;

  /**
   * The background style configuration of a free-form layout element.
   *
   * @public
   */
  BackgroundStyle?: FreeFormLayoutElementBackgroundStyle | undefined;

  /**
   * The loading animation configuration of a free-form layout element.
   *
   * @public
   */
  LoadingAnimation?: LoadingAnimation | undefined;

  /**
   * The border radius of a free-form layout element.
   *
   * @public
   */
  BorderRadius?: string | undefined;

  /**
   * The padding of a free-form layout element.
   *
   * @public
   */
  Padding?: string | undefined;
}

/**
 * A member of a sheet layout group.
 *
 * @public
 */
export interface SheetLayoutGroupMember {
  /**
   * The unique identifier of the group member.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the group member.
   *
   * @public
   */
  Type: SheetLayoutGroupMemberType | undefined;
}

/**
 * A group of elements within a sheet layout.
 *
 * @public
 */
export interface SheetLayoutGroup {
  /**
   * A unique identifier for the group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The members of the group.
   *
   * @public
   */
  Members: SheetLayoutGroupMember[] | undefined;
}

/**
 * The configuration of a free-form layout.
 *
 * @public
 */
export interface FreeFormLayoutConfiguration {
  /**
   * The elements that are included in a free-form layout.
   *
   * @public
   */
  Elements: FreeFormLayoutElement[] | undefined;

  /**
   * Configuration options for the canvas of a free-form layout.
   *
   * @public
   */
  CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions | undefined;

  /**
   * The groups that are included in a free-form layout.
   *
   * @public
   */
  Groups?: SheetLayoutGroup[] | undefined;
}

/**
 * The background style configuration of a grid layout element.
 *
 * @public
 */
export interface GridLayoutElementBackgroundStyle {
  /**
   * The background visibility of a grid layout element.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The background color of a grid layout element.
   *
   * @public
   */
  Color?: string | undefined;
}

/**
 * The border style configuration of a grid layout element.
 *
 * @public
 */
export interface GridLayoutElementBorderStyle {
  /**
   * The border visibility of a grid layout element.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The border color of a grid layout element.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * The border width of a grid layout element.
   *
   * @public
   */
  Width?: string | undefined;
}

/**
 * An element within a grid layout.
 *
 * @public
 */
export interface GridLayoutElement {
  /**
   * A unique identifier for an element within a grid layout.
   *
   * @public
   */
  ElementId: string | undefined;

  /**
   * The type of element.
   *
   * @public
   */
  ElementType: LayoutElementType | undefined;

  /**
   * The column index for the upper left corner of an element.
   *
   * @public
   */
  ColumnIndex?: number | undefined;

  /**
   * The width of a grid element expressed as a number of grid columns.
   *
   * @public
   */
  ColumnSpan: number | undefined;

  /**
   * The row index for the upper left corner of an element.
   *
   * @public
   */
  RowIndex?: number | undefined;

  /**
   * The height of a grid element expressed as a number of grid rows.
   *
   * @public
   */
  RowSpan: number | undefined;

  /**
   * The border style configuration of a grid layout element.
   *
   * @public
   */
  BorderStyle?: GridLayoutElementBorderStyle | undefined;

  /**
   * The border style configuration of a grid layout element. This border style is used when the element is selected.
   *
   * @public
   */
  SelectedBorderStyle?: GridLayoutElementBorderStyle | undefined;

  /**
   * The background style configuration of a grid layout element.
   *
   * @public
   */
  BackgroundStyle?: GridLayoutElementBackgroundStyle | undefined;

  /**
   * The configuration of loading animation in free-form layout.
   *
   * @public
   */
  LoadingAnimation?: LoadingAnimation | undefined;

  /**
   * The border radius of a grid layout element.
   *
   * @public
   */
  BorderRadius?: string | undefined;

  /**
   * The padding of a grid layout element.
   *
   * @public
   */
  Padding?: string | undefined;
}

/**
 * The configuration for a grid layout. Also called a tiled layout.
 *
 * Visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size.
 *
 * @public
 */
export interface GridLayoutConfiguration {
  /**
   * The elements that are included in a grid layout.
   *
   * @public
   */
  Elements: GridLayoutElement[] | undefined;

  /**
   * Configuration options for the canvas of a grid layout.
   *
   * @public
   */
  CanvasSizeOptions?: GridLayoutCanvasSizeOptions | undefined;
}

/**
 * The free-form layout configuration of a section.
 *
 * @public
 */
export interface FreeFormSectionLayoutConfiguration {
  /**
   * The elements that are included in the free-form layout.
   *
   * @public
   */
  Elements: FreeFormLayoutElement[] | undefined;
}

/**
 * The layout configuration of a section.
 *
 * @public
 */
export interface SectionLayoutConfiguration {
  /**
   * The free-form layout configuration of a section.
   *
   * @public
   */
  FreeFormLayout: FreeFormSectionLayoutConfiguration | undefined;
}

/**
 * The configuration of content in a body section.
 *
 * @public
 */
export interface BodySectionContent {
  /**
   * The layout configuration of a body section.
   *
   * @public
   */
  Layout?: SectionLayoutConfiguration | undefined;
}

/**
 * The configuration of a page break after a section.
 *
 * @public
 */
export interface SectionAfterPageBreak {
  /**
   * The option that enables or disables a page break at the end of a section.
   *
   * @public
   */
  Status?: SectionPageBreakStatus | undefined;
}

/**
 * The configuration of a page break for a section.
 *
 * @public
 */
export interface SectionPageBreakConfiguration {
  /**
   * The configuration of a page break after a section.
   *
   * @public
   */
  After?: SectionAfterPageBreak | undefined;
}

/**
 * The sort configuration for a column that is not used in a field well.
 *
 * @public
 */
export interface ColumnSort {
  /**
   * A column of a data set.
   *
   * @public
   */
  SortBy: ColumnIdentifier | undefined;

  /**
   * The sort direction.
   *
   * @public
   */
  Direction: SortDirection | undefined;

  /**
   * The aggregation function that is defined in the column sort.
   *
   * @public
   */
  AggregationFunction?: AggregationFunction | undefined;
}

/**
 * Describes the **Category** dataset column and constraints for the dynamic values used to repeat the contents of a section.
 *
 * @public
 */
export interface BodySectionDynamicCategoryDimensionConfiguration {
  /**
   * A column of a data set.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * Number of values to use from the column for repetition.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Sort criteria on the column values that you use for repetition.
   *
   * @public
   */
  SortByMetrics?: ColumnSort[] | undefined;
}

/**
 * Describes the **Numeric** dataset column and constraints for the dynamic values used to repeat the contents of a section.
 *
 * @public
 */
export interface BodySectionDynamicNumericDimensionConfiguration {
  /**
   * A column of a data set.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * Number of values to use from the column for repetition.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Sort criteria on the column values that you use for repetition.
   *
   * @public
   */
  SortByMetrics?: ColumnSort[] | undefined;
}

/**
 * Describes the dataset column and constraints for the dynamic values used to repeat the contents of a section. The dataset column is either **Category** or **Numeric** column configuration
 *
 * @public
 */
export interface BodySectionRepeatDimensionConfiguration {
  /**
   * Describes the **Category** dataset column and constraints around the dynamic values that will be used in repeating the section contents.
   *
   * @public
   */
  DynamicCategoryDimensionConfiguration?: BodySectionDynamicCategoryDimensionConfiguration | undefined;

  /**
   * Describes the **Numeric** dataset column and constraints around the dynamic values used to repeat the contents of a section.
   *
   * @public
   */
  DynamicNumericDimensionConfiguration?: BodySectionDynamicNumericDimensionConfiguration | undefined;
}

/**
 * The page break configuration to apply for each repeating instance.
 *
 * @public
 */
export interface BodySectionRepeatPageBreakConfiguration {
  /**
   * The configuration of a page break after a section.
   *
   * @public
   */
  After?: SectionAfterPageBreak | undefined;
}

/**
 * Describes the configurations that are required to declare a section as repeating.
 *
 * @public
 */
export interface BodySectionRepeatConfiguration {
  /**
   * List of `BodySectionRepeatDimensionConfiguration` values that describe the dataset column and constraints for the column used to repeat the contents of a section.
   *
   * @public
   */
  DimensionConfigurations?: BodySectionRepeatDimensionConfiguration[] | undefined;

  /**
   * Page break configuration to apply for each repeating instance.
   *
   * @public
   */
  PageBreakConfiguration?: BodySectionRepeatPageBreakConfiguration | undefined;

  /**
   * List of visuals to exclude from repetition in repeating sections. The visuals will render identically, and ignore the repeating configurations in all repeating instances.
   *
   * @public
   */
  NonRepeatingVisuals?: string[] | undefined;
}

/**
 * The options that style a section.
 *
 * @public
 */
export interface SectionStyle {
  /**
   * The height of a section.
   *
   * Heights can only be defined for header and footer sections. The default height margin is 0.5 inches.
   *
   * @public
   */
  Height?: string | undefined;

  /**
   * The spacing between section content and its top, bottom, left, and right edges.
   *
   * There is no padding by default.
   *
   * @public
   */
  Padding?: Spacing | undefined;
}

/**
 * The configuration of a body section.
 *
 * @public
 */
export interface BodySectionConfiguration {
  /**
   * The unique identifier of a body section.
   *
   * @public
   */
  SectionId: string | undefined;

  /**
   * The configuration of content in a body section.
   *
   * @public
   */
  Content: BodySectionContent | undefined;

  /**
   * The style options of a body section.
   *
   * @public
   */
  Style?: SectionStyle | undefined;

  /**
   * The configuration of a page break for a section.
   *
   * @public
   */
  PageBreakConfiguration?: SectionPageBreakConfiguration | undefined;

  /**
   * Describes the configurations that are required to declare a section as repeating.
   *
   * @public
   */
  RepeatConfiguration?: BodySectionRepeatConfiguration | undefined;
}

/**
 * The configuration of a header or footer section.
 *
 * @public
 */
export interface HeaderFooterSectionConfiguration {
  /**
   * The unique identifier of the header or footer section.
   *
   * @public
   */
  SectionId: string | undefined;

  /**
   * The layout configuration of the header or footer section.
   *
   * @public
   */
  Layout: SectionLayoutConfiguration | undefined;

  /**
   * The style options of a header or footer section.
   *
   * @public
   */
  Style?: SectionStyle | undefined;
}

/**
 * The configuration for a section-based layout.
 *
 * @public
 */
export interface SectionBasedLayoutConfiguration {
  /**
   * A list of header section configurations.
   *
   * @public
   */
  HeaderSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * A list of body section configurations.
   *
   * @public
   */
  BodySections: BodySectionConfiguration[] | undefined;

  /**
   * A list of footer section configurations.
   *
   * @public
   */
  FooterSections: HeaderFooterSectionConfiguration[] | undefined;

  /**
   * The options for the canvas of a section-based layout.
   *
   * @public
   */
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions | undefined;
}

/**
 * The configuration that determines what the type of layout will be used on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface LayoutConfiguration {
  /**
   * A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: `FIXED` or `RESPONSIVE`.
   *
   * @public
   */
  GridLayout?: GridLayoutConfiguration | undefined;

  /**
   * A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.
   *
   * @public
   */
  FreeFormLayout?: FreeFormLayoutConfiguration | undefined;

  /**
   * A section based layout organizes visuals into multiple sections and has customized header, footer and page break.
   *
   * @public
   */
  SectionBasedLayout?: SectionBasedLayoutConfiguration | undefined;
}

/**
 * A `Layout` defines the placement of elements within a sheet.
 *
 * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the *Amazon Quick Suite User Guide*.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface Layout {
  /**
   * The configuration that determines what the type of layout for a sheet.
   *
   * @public
   */
  Configuration: LayoutConfiguration | undefined;
}

/**
 * A control from a date parameter that specifies date and time.
 *
 * @public
 */
export interface ParameterDateTimePickerControl {
  /**
   * The ID of the `ParameterDateTimePickerControl`.
   *
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * The title of the `ParameterDateTimePickerControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The name of the `ParameterDateTimePickerControl`.
   *
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: DateTimePickerControlDisplayOptions | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A list of selectable values that are used in a control.
 *
 * @public
 */
export interface ParameterSelectableValues {
  /**
   * The values that are used in `ParameterSelectableValues`.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The column identifier that fetches values from the data set.
   *
   * @public
   */
  LinkToDataSetColumn?: ColumnIdentifier | undefined;
}

/**
 * A control to display a dropdown list with buttons that are used to select a single value.
 *
 * @public
 */
export interface ParameterDropDownControl {
  /**
   * The ID of the `ParameterDropDownControl`.
   *
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * The title of the `ParameterDropDownControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source parameter name of the `ParameterDropDownControl`.
   *
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: DropDownControlDisplayOptions | undefined;

  /**
   * The type parameter name of the `ParameterDropDownControl`.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * A list of selectable values that are used in a control.
   *
   * @public
   */
  SelectableValues?: ParameterSelectableValues | undefined;

  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;

  /**
   * The visibility configuration of the Apply button on a `ParameterDropDownControl`.
   *
   * @public
   */
  CommitMode?: CommitMode | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
 *
 * @public
 */
export interface ParameterListControl {
  /**
   * The ID of the `ParameterListControl`.
   *
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * The title of the `ParameterListControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source parameter name of the `ParameterListControl`.
   *
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: ListControlDisplayOptions | undefined;

  /**
   * The type of `ParameterListControl`.
   *
   * @public
   */
  Type?: SheetControlListType | undefined;

  /**
   * A list of selectable values that are used in a control.
   *
   * @public
   */
  SelectableValues?: ParameterSelectableValues | undefined;

  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * @public
   */
  CascadingControlConfiguration?: CascadingControlConfiguration | undefined;

  /**
   * The sort configuration for the values displayed in the control. Only one sort configuration can be applied per control.
   *
   * @public
   */
  ControlSortConfigurations?: ControlSortConfiguration[] | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 *
 * @public
 */
export interface ParameterSliderControl {
  /**
   * The ID of the `ParameterSliderControl`.
   *
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * The title of the `ParameterSliderControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source parameter name of the `ParameterSliderControl`.
   *
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: SliderControlDisplayOptions | undefined;

  /**
   * The larger value that is displayed at the right of the slider.
   *
   * @public
   */
  MaximumValue: number | undefined;

  /**
   * The smaller value that is displayed at the left of the slider.
   *
   * @public
   */
  MinimumValue: number | undefined;

  /**
   * The number of increments that the slider bar is divided into.
   *
   * @public
   */
  StepSize: number | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a text box that is used to enter multiple entries.
 *
 * @public
 */
export interface ParameterTextAreaControl {
  /**
   * The ID of the `ParameterTextAreaControl`.
   *
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * The title of the `ParameterTextAreaControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source parameter name of the `ParameterTextAreaControl`.
   *
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * The delimiter that is used to separate the lines in text.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: TextAreaControlDisplayOptions | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * A control to display a text box that is used to enter a single entry.
 *
 * @public
 */
export interface ParameterTextFieldControl {
  /**
   * The ID of the `ParameterTextFieldControl`.
   *
   * @public
   */
  ParameterControlId: string | undefined;

  /**
   * The title of the `ParameterTextFieldControl`.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The source parameter name of the `ParameterTextFieldControl`.
   *
   * @public
   */
  SourceParameterName: string | undefined;

  /**
   * The display options of a control.
   *
   * @public
   */
  DisplayOptions?: TextFieldControlDisplayOptions | undefined;

  /**
   * The title text format configuration for the control.
   *
   * @public
   */
  ControlTitleFormatText?: ControlTitleFormatText | undefined;
}

/**
 * The control of a parameter that users can interact with in a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface ParameterControl {
  /**
   * A control from a date parameter that specifies date and time.
   *
   * @public
   */
  DateTimePicker?: ParameterDateTimePickerControl | undefined;

  /**
   * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
   *
   * @public
   */
  List?: ParameterListControl | undefined;

  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * @public
   */
  Dropdown?: ParameterDropDownControl | undefined;

  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * @public
   */
  TextField?: ParameterTextFieldControl | undefined;

  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * @public
   */
  TextArea?: ParameterTextAreaControl | undefined;

  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * @public
   */
  Slider?: ParameterSliderControl | undefined;
}

/**
 * The configuration that determines the elements and canvas size options of sheet control.
 *
 * @public
 */
export interface SheetControlLayoutConfiguration {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * @public
   */
  GridLayout?: GridLayoutConfiguration | undefined;
}

/**
 * A grid layout to define the placement of sheet control.
 *
 * @public
 */
export interface SheetControlLayout {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * @public
   */
  Configuration: SheetControlLayoutConfiguration | undefined;
}

/**
 * The menu options for the interactions of a textbox.
 *
 * @public
 */
export interface TextBoxMenuOption {
  /**
   * The availability status of the textbox menu. If the value of this property is set to `ENABLED`, dashboard readers can interact with the textbox menu.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The general textbox interactions setup for textbox publish options.
 *
 * @public
 */
export interface TextBoxInteractionOptions {
  /**
   * The menu options for the textbox.
   *
   * @public
   */
  TextBoxMenuOption?: TextBoxMenuOption | undefined;
}

/**
 * A text box.
 *
 * @public
 */
export interface SheetTextBox {
  /**
   * The unique identifier for a text box. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have text boxes that share identifiers.
   *
   * @public
   */
  SheetTextBoxId: string | undefined;

  /**
   * The content that is displayed in the text box.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The general textbox interactions setup for a textbox.
   *
   * @public
   */
  Interactions?: TextBoxInteractionOptions | undefined;
}

/**
 * The configuration of selected fields in the`CustomActionFilterOperation`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface FilterOperationSelectedFieldsConfiguration {
  /**
   * Chooses the fields that are filtered in `CustomActionFilterOperation`.
   *
   * @public
   */
  SelectedFields?: string[] | undefined;

  /**
   * A structure that contains the options that choose which fields are filtered in the `CustomActionFilterOperation`.
   *
   * Valid values are defined as follows:
   *
   * - `ALL_FIELDS`: Applies the filter operation to all fields.
   *
   * @public
   */
  SelectedFieldOptions?: SelectedFieldOptions | undefined;

  /**
   * The selected columns of a dataset.
   *
   * @public
   */
  SelectedColumns?: ColumnIdentifier[] | undefined;
}

/**
 * The configuration of the same-sheet target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface SameSheetTargetVisualConfiguration {
  /**
   * A list of the target visual IDs that are located in the same sheet of the analysis.
   *
   * @public
   */
  TargetVisuals?: string[] | undefined;

  /**
   * The options that choose the target visual in the same sheet.
   *
   * Valid values are defined as follows:
   *
   * - `ALL_VISUALS`: Applies the filter operation to all visuals in the same sheet.
   *
   * @public
   */
  TargetVisualOptions?: TargetVisualOptions | undefined;
}

/**
 * The configuration of target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface FilterOperationTargetVisualsConfiguration {
  /**
   * The configuration of the same-sheet target visuals that you want to be filtered.
   *
   * @public
   */
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration | undefined;
}

/**
 * The filter operation that filters data included in a visual or in an entire sheet.
 *
 * @public
 */
export interface CustomActionFilterOperation {
  /**
   * The configuration that chooses the fields to be filtered.
   *
   * @public
   */
  SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration | undefined;

  /**
   * The configuration that chooses the target visuals to be filtered.
   *
   * @public
   */
  TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration | undefined;
}

/**
 * The operation that is defined by the custom action.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface VisualCustomActionOperation {
  /**
   * The filter operation that filters data included in a visual or in an entire sheet.
   *
   * @public
   */
  FilterOperation?: CustomActionFilterOperation | undefined;

  /**
   * The navigation operation that navigates between different sheets in the same analysis.
   *
   * @public
   */
  NavigationOperation?: CustomActionNavigationOperation | undefined;

  /**
   * The URL operation that opens a link to another webpage.
   *
   * @public
   */
  URLOperation?: CustomActionURLOperation | undefined;

  /**
   * The set parameter operation that sets parameters in custom action.
   *
   * @public
   */
  SetParametersOperation?: CustomActionSetParametersOperation | undefined;
}

/**
 * A custom action defined on a visual.
 *
 * @public
 */
export interface VisualCustomAction {
  /**
   * The ID of the `VisualCustomAction`.
   *
   * @public
   */
  CustomActionId: string | undefined;

  /**
   * The name of the `VisualCustomAction`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the `VisualCustomAction`.
   *
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * The trigger of the `VisualCustomAction`.
   *
   * Valid values are defined as follows:
   *
   * - `DATA_POINT_CLICK`: Initiates a custom action by a left pointer click on a data point.
   * - `DATA_POINT_MENU`: Initiates a custom action by right pointer click from the menu.
   *
   * @public
   */
  Trigger: VisualCustomActionTrigger | undefined;

  /**
   * A list of `VisualCustomActionOperations`.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * @public
   */
  ActionOperations: VisualCustomActionOperation[] | undefined;
}

/**
 * The options that determine how a date axis is displayed.
 *
 * @public
 */
export interface DateAxisOptions {
  /**
   * Determines whether or not missing dates are displayed.
   *
   * @public
   */
  MissingDateVisibility?: Visibility | undefined;
}

/**
 * The options that are saved for future extension.
 *
 * @public
 */
export interface AxisDisplayDataDrivenRange {}

/**
 * The minimum and maximum setup for an axis display range.
 *
 * @public
 */
export interface AxisDisplayMinMaxRange {
  /**
   * The minimum setup for an axis display range.
   *
   * @public
   */
  Minimum?: number | undefined;

  /**
   * The maximum setup for an axis display range.
   *
   * @public
   */
  Maximum?: number | undefined;
}

/**
 * The range setup of a numeric axis display range.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface AxisDisplayRange {
  /**
   * The minimum and maximum setup of an axis display range.
   *
   * @public
   */
  MinMax?: AxisDisplayMinMaxRange | undefined;

  /**
   * The data-driven setup of an axis display range.
   *
   * @public
   */
  DataDriven?: AxisDisplayDataDrivenRange | undefined;
}

/**
 * The liner axis scale setup.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface AxisLinearScale {
  /**
   * The step count setup of a linear axis.
   *
   * @public
   */
  StepCount?: number | undefined;

  /**
   * The step size setup of a linear axis.
   *
   * @public
   */
  StepSize?: number | undefined;
}

/**
 * The logarithmic axis scale setup.
 *
 * @public
 */
export interface AxisLogarithmicScale {
  /**
   * The base setup of a logarithmic axis scale.
   *
   * @public
   */
  Base?: number | undefined;
}

/**
 * The scale setup options for a numeric axis display.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface AxisScale {
  /**
   * The linear axis scale setup.
   *
   * @public
   */
  Linear?: AxisLinearScale | undefined;

  /**
   * The logarithmic axis scale setup.
   *
   * @public
   */
  Logarithmic?: AxisLogarithmicScale | undefined;
}

/**
 * The options for an axis with a numeric field.
 *
 * @public
 */
export interface NumericAxisOptions {
  /**
   * The scale setup of a numeric axis.
   *
   * @public
   */
  Scale?: AxisScale | undefined;

  /**
   * The range setup of a numeric axis.
   *
   * @public
   */
  Range?: AxisDisplayRange | undefined;
}

/**
 * The data options for an axis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface AxisDataOptions {
  /**
   * The options for an axis with a numeric field.
   *
   * @public
   */
  NumericAxisOptions?: NumericAxisOptions | undefined;

  /**
   * The options for an axis with a date field.
   *
   * @public
   */
  DateAxisOptions?: DateAxisOptions | undefined;
}

/**
 * The percent range in the visible range.
 *
 * @public
 */
export interface PercentVisibleRange {
  /**
   * The lower bound of the range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The top bound of the range.
   *
   * @public
   */
  To?: number | undefined;
}

/**
 * The range options for the data zoom scroll bar.
 *
 * @public
 */
export interface VisibleRangeOptions {
  /**
   * The percent range in the visible range.
   *
   * @public
   */
  PercentRange?: PercentVisibleRange | undefined;
}

/**
 * The visual display options for a data zoom scroll bar.
 *
 * @public
 */
export interface ScrollBarOptions {
  /**
   * The visibility of the data zoom scroll bar.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The visibility range for the data zoom scroll bar.
   *
   * @public
   */
  VisibleRange?: VisibleRangeOptions | undefined;
}

/**
 * The tick label options of an axis.
 *
 * @public
 */
export interface AxisTickLabelOptions {
  /**
   * Determines whether or not the axis ticks are visible.
   *
   * @public
   */
  LabelOptions?: LabelOptions | undefined;

  /**
   * The rotation angle of the axis tick labels.
   *
   * @public
   */
  RotationAngle?: number | undefined;
}

/**
 * The display options for the axis label.
 *
 * @public
 */
export interface AxisDisplayOptions {
  /**
   * The tick label options of an axis.
   *
   * @public
   */
  TickLabelOptions?: AxisTickLabelOptions | undefined;

  /**
   * Determines whether or not the axis line is visible.
   *
   * @public
   */
  AxisLineVisibility?: Visibility | undefined;

  /**
   * Determines whether or not the grid line is visible.
   *
   * @public
   */
  GridLineVisibility?: Visibility | undefined;

  /**
   * The data options for an axis.
   *
   * @public
   */
  DataOptions?: AxisDataOptions | undefined;

  /**
   * The scroll bar options for an axis.
   *
   * @public
   */
  ScrollbarOptions?: ScrollBarOptions | undefined;

  /**
   * The offset value that determines the starting placement of the axis within a visual's bounds.
   *
   * @public
   */
  AxisOffset?: string | undefined;
}

/**
 * The reference that specifies where the axis label is applied to.
 *
 * @public
 */
export interface AxisLabelReferenceOptions {
  /**
   * The field that the axis label is targeted to.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that the axis label is targeted to.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;
}

/**
 * The label options for a chart axis. You must specify the field that the label is targeted to.
 *
 * @public
 */
export interface AxisLabelOptions {
  /**
   * The font configuration of the axis label.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * The text for the axis label.
   *
   * @public
   */
  CustomLabel?: string | undefined;

  /**
   * The options that indicate which field the label belongs to.
   *
   * @public
   */
  ApplyTo?: AxisLabelReferenceOptions | undefined;
}

/**
 * The label options for an axis on a chart.
 *
 * @public
 */
export interface ChartAxisLabelOptions {
  /**
   * The visibility of an axis label on a chart. Choose one of the following options:
   *
   * - `VISIBLE`: Shows the axis.
   * - `HIDDEN`: Hides the axis.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The visibility configuration of the sort icon on a chart's axis label.
   *
   * @public
   */
  SortIconVisibility?: Visibility | undefined;

  /**
   * The label options for a chart axis.
   *
   * @public
   */
  AxisLabelOptions?: AxisLabelOptions[] | undefined;
}

/**
 * The contribution analysis visual display for a line, pie, or bar chart.
 *
 * @public
 */
export interface ContributionAnalysisDefault {
  /**
   * The measure field that is used in the contribution analysis.
   *
   * @public
   */
  MeasureFieldId: string | undefined;

  /**
   * The dimensions columns that are used in the contribution analysis, usually a list of `ColumnIdentifiers`.
   *
   * @public
   */
  ContributorDimensions: ColumnIdentifier[] | undefined;
}

/**
 * The option that specifies individual data values for labels.
 *
 * @public
 */
export interface DataPathLabelType {
  /**
   * The field ID of the field that the data label needs to be applied to.
   *
   * @public
   */
  FieldId?: string | undefined;

  /**
   * The actual value of the field that is labeled.
   *
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * The visibility of the data label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The field label type.
 *
 * @public
 */
export interface FieldLabelType {
  /**
   * Indicates the field that is targeted by the field label.
   *
   * @public
   */
  FieldId?: string | undefined;

  /**
   * The visibility of the field label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The maximum label of a data path label.
 *
 * @public
 */
export interface MaximumLabelType {
  /**
   * The visibility of the maximum label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The minimum label of a data path label.
 *
 * @public
 */
export interface MinimumLabelType {
  /**
   * The visibility of the minimum label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The range ends label type of a data path label.
 *
 * @public
 */
export interface RangeEndsLabelType {
  /**
   * The visibility of the range ends label.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * The option that determines the data label type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface DataLabelType {
  /**
   * Determines the label configuration for the entire field.
   *
   * @public
   */
  FieldLabelType?: FieldLabelType | undefined;

  /**
   * The option that specifies individual data values for labels.
   *
   * @public
   */
  DataPathLabelType?: DataPathLabelType | undefined;

  /**
   * Determines the label configuration for range end value in a visual.
   *
   * @public
   */
  RangeEndsLabelType?: RangeEndsLabelType | undefined;

  /**
   * Determines the label configuration for the minimum value in a visual.
   *
   * @public
   */
  MinimumLabelType?: MinimumLabelType | undefined;

  /**
   * Determines the label configuration for the maximum value in a visual.
   *
   * @public
   */
  MaximumLabelType?: MaximumLabelType | undefined;
}

/**
 * The options that determine the presentation of the data labels.
 *
 * @public
 */
export interface DataLabelOptions {
  /**
   * Determines the visibility of the data labels.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * Determines the visibility of the category field labels.
   *
   * @public
   */
  CategoryLabelVisibility?: Visibility | undefined;

  /**
   * Determines the visibility of the measure field labels.
   *
   * @public
   */
  MeasureLabelVisibility?: Visibility | undefined;

  /**
   * The option that determines the data label type.
   *
   * @public
   */
  DataLabelTypes?: DataLabelType[] | undefined;

  /**
   * Determines the position of the data labels.
   *
   * @public
   */
  Position?: DataLabelPosition | undefined;

  /**
   * Determines the content of the data labels.
   *
   * @public
   */
  LabelContent?: DataLabelContent | undefined;

  /**
   * Determines the font configuration of the data labels.
   *
   * @public
   */
  LabelFontConfiguration?: FontConfiguration | undefined;

  /**
   * Determines the color of the data labels.
   *
   * @public
   */
  LabelColor?: string | undefined;

  /**
   * Determines whether overlap is enabled or disabled for the data labels.
   *
   * @public
   */
  Overlap?: DataLabelOverlap | undefined;

  /**
   * Determines the visibility of the total.
   *
   * @public
   */
  TotalsVisibility?: Visibility | undefined;
}

/**
 * Border settings configuration for visual elements, including visibility, width, and color properties.
 *
 * @public
 */
export interface BorderSettings {
  /**
   * Visibility setting for the border.
   *
   * @public
   */
  BorderVisibility?: Visibility | undefined;

  /**
   * Width of the border. Valid range is from 1px to 8px.
   *
   * @public
   */
  BorderWidth?: string | undefined;

  /**
   * Color of the border.
   *
   * @public
   */
  BorderColor?: string | undefined;
}

/**
 * The options that determine the default presentation of all bar series in `BarChartVisual`.
 *
 * @public
 */
export interface BarChartDefaultSeriesSettings {
  /**
   * Decal settings for all bar series in the visual.
   *
   * @public
   */
  DecalSettings?: DecalSettings | undefined;

  /**
   * Border settings for all bar series in the visual.
   *
   * @public
   */
  BorderSettings?: BorderSettings | undefined;
}

/**
 * The dimension type field with categorical type columns..
 *
 * @public
 */
export interface CategoricalDimensionField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that is used in the `CategoricalDimensionField`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The custom hierarchy ID.
   *
   * @public
   */
  HierarchyId?: string | undefined;

  /**
   * The format configuration of the field.
   *
   * @public
   */
  FormatConfiguration?: StringFormatConfiguration | undefined;
}

/**
 * The dimension type field with date type columns.
 *
 * @public
 */
export interface DateDimensionField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that is used in the `DateDimensionField`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The date granularity of the `DateDimensionField`. Choose one of the following options:
   *
   * - `YEAR`
   * - `QUARTER`
   * - `MONTH`
   * - `WEEK`
   * - `DAY`
   * - `HOUR`
   * - `MINUTE`
   * - `SECOND`
   * - `MILLISECOND`
   *
   * @public
   */
  DateGranularity?: TimeGranularity | undefined;

  /**
   * The custom hierarchy ID.
   *
   * @public
   */
  HierarchyId?: string | undefined;

  /**
   * The format configuration of the field.
   *
   * @public
   */
  FormatConfiguration?: DateTimeFormatConfiguration | undefined;
}

/**
 * The dimension type field with numerical type columns.
 *
 * @public
 */
export interface NumericalDimensionField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that is used in the `NumericalDimensionField`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The custom hierarchy ID.
   *
   * @public
   */
  HierarchyId?: string | undefined;

  /**
   * The format configuration of the field.
   *
   * @public
   */
  FormatConfiguration?: NumberFormatConfiguration | undefined;
}

/**
 * The dimension type field.
 *
 * @public
 */
export interface DimensionField {
  /**
   * The dimension type field with numerical type columns.
   *
   * @public
   */
  NumericalDimensionField?: NumericalDimensionField | undefined;

  /**
   * The dimension type field with categorical type columns.
   *
   * @public
   */
  CategoricalDimensionField?: CategoricalDimensionField | undefined;

  /**
   * The dimension type field with date type columns.
   *
   * @public
   */
  DateDimensionField?: DateDimensionField | undefined;
}

/**
 * The table calculation measure field for pivot tables.
 *
 * @public
 */
export interface CalculatedMeasureField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The expression in the table calculation.
   *
   * @public
   */
  Expression: string | undefined;
}

/**
 * The measure type field with categorical type columns.
 *
 * @public
 */
export interface CategoricalMeasureField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that is used in the `CategoricalMeasureField`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The aggregation function of the measure field.
   *
   * @public
   */
  AggregationFunction?: CategoricalAggregationFunction | undefined;

  /**
   * The format configuration of the field.
   *
   * @public
   */
  FormatConfiguration?: StringFormatConfiguration | undefined;
}

/**
 * The measure type field with date type columns.
 *
 * @public
 */
export interface DateMeasureField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that is used in the `DateMeasureField`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The aggregation function of the measure field.
   *
   * @public
   */
  AggregationFunction?: DateAggregationFunction | undefined;

  /**
   * The format configuration of the field.
   *
   * @public
   */
  FormatConfiguration?: DateTimeFormatConfiguration | undefined;
}

/**
 * The measure type field with numerical type columns.
 *
 * @public
 */
export interface NumericalMeasureField {
  /**
   * The custom field ID.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * The column that is used in the `NumericalMeasureField`.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The aggregation function of the measure field.
   *
   * @public
   */
  AggregationFunction?: NumericalAggregationFunction | undefined;

  /**
   * The format configuration of the field.
   *
   * @public
   */
  FormatConfiguration?: NumberFormatConfiguration | undefined;
}

/**
 * The measure (metric) type field.
 *
 * @public
 */
export interface MeasureField {
  /**
   * The measure type field with numerical type columns.
   *
   * @public
   */
  NumericalMeasureField?: NumericalMeasureField | undefined;

  /**
   * The measure type field with categorical type columns.
   *
   * @public
   */
  CategoricalMeasureField?: CategoricalMeasureField | undefined;

  /**
   * The measure type field with date type columns.
   *
   * @public
   */
  DateMeasureField?: DateMeasureField | undefined;

  /**
   * The calculated measure field only used in pivot tables.
   *
   * @public
   */
  CalculatedMeasureField?: CalculatedMeasureField | undefined;
}

/**
 * The aggregated field wells of a bar chart.
 *
 * @public
 */
export interface BarChartAggregatedFieldWells {
  /**
   * The category (y-axis) field well of a bar chart.
   *
   * @public
   */
  Category?: DimensionField[] | undefined;

  /**
   * The value field wells of a bar chart. Values are aggregated by category.
   *
   * @public
   */
  Values?: MeasureField[] | undefined;

  /**
   * The color (group/color) field well of a bar chart.
   *
   * @public
   */
  Colors?: DimensionField[] | undefined;

  /**
   * The small multiples field well of a bar chart.
   *
   * @public
   */
  SmallMultiples?: DimensionField[] | undefined;
}

/**
 * The field wells of a `BarChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface BarChartFieldWells {
  /**
   * The aggregated field wells of a bar chart.
   *
   * @public
   */
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells | undefined;
}

/**
 * The context menu options for a visual's interactions.
 *
 * @public
 */
export interface ContextMenuOption {
  /**
   * The availability status of the context menu options. If the value of this property is set to `ENABLED`, dashboard readers can interact with the context menu.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The menu options for a visual.
 *
 * @public
 */
export interface VisualMenuOption {
  /**
   * The availaiblity status of a visual's menu options.
   *
   * @public
   */
  AvailabilityStatus?: DashboardBehavior | undefined;
}

/**
 * The general visual interactions setup for visual publish options
 *
 * @public
 */
export interface VisualInteractionOptions {
  /**
   * The on-visual menu options for a visual.
   *
   * @public
   */
  VisualMenuOption?: VisualMenuOption | undefined;

  /**
   * The context menu options for a visual.
   *
   * @public
   */
  ContextMenuOption?: ContextMenuOption | undefined;
}

/**
 * The options for the legend setup of a visual.
 *
 * @public
 */
export interface LegendOptions {
  /**
   * Determines whether or not the legend is visible.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The custom title for the legend.
   *
   * @public
   */
  Title?: LabelOptions | undefined;

  /**
   * The positions for the legend. Choose one of the following options:
   *
   * - `AUTO`
   * - `RIGHT`
   * - `BOTTOM`
   * - `LEFT`
   *
   * @public
   */
  Position?: LegendPosition | undefined;

  /**
   * The width of the legend. If this value is omitted, a default width is used when rendering.
   *
   * @public
   */
  Width?: string | undefined;

  /**
   * The height of the legend. If this value is omitted, a default height is used when rendering.
   *
   * @public
   */
  Height?: string | undefined;

  /**
   * Configures the display properties of the given text.
   *
   * @public
   */
  ValueFontConfiguration?: FontConfiguration | undefined;
}

/**
 * The dynamic configuration of the reference line data configuration.
 *
 * @public
 */
export interface ReferenceLineDynamicDataConfiguration {
  /**
   * The column that the dynamic data targets.
   *
   * @public
   */
  Column: ColumnIdentifier | undefined;

  /**
   * The aggregation function that is used in the dynamic data.
   *
   * @public
   */
  MeasureAggregationFunction?: AggregationFunction | undefined;

  /**
   * The calculation that is used in the dynamic data.
   *
   * @public
   */
  Calculation: NumericalAggregationFunction | undefined;
}

/**
 * The static data configuration of the reference line data configuration.
 *
 * @public
 */
export interface ReferenceLineStaticDataConfiguration {
  /**
   * The double input of the static data.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * The data configuration of the reference line.
 *
 * @public
 */
export interface ReferenceLineDataConfiguration {
  /**
   * The static data configuration of the reference line data configuration.
   *
   * @public
   */
  StaticConfiguration?: ReferenceLineStaticDataConfiguration | undefined;

  /**
   * The dynamic configuration of the reference line data configuration.
   *
   * @public
   */
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration | undefined;

  /**
   * The axis binding type of the reference line. Choose one of the following options:
   *
   * - `PrimaryY`
   * - `SecondaryY`
   *
   * @public
   */
  AxisBinding?: AxisBinding | undefined;

  /**
   * The series type of the reference line data configuration. Choose one of the following options:
   *
   * - `BAR`
   * - `LINE`
   *
   * @public
   */
  SeriesType?: ReferenceLineSeriesType | undefined;
}

/**
 * The configuration for a custom label on a `ReferenceLine`.
 *
 * @public
 */
export interface ReferenceLineCustomLabelConfiguration {
  /**
   * The string text of the custom label.
   *
   * @public
   */
  CustomLabel: string | undefined;
}

/**
 * The value label configuration of the label in a reference line.
 *
 * @public
 */
export interface ReferenceLineValueLabelConfiguration {
  /**
   * The relative position of the value label. Choose one of the following options:
   *
   * - `BEFORE_CUSTOM_LABEL`
   * - `AFTER_CUSTOM_LABEL`
   *
   * @public
   */
  RelativePosition?: ReferenceLineValueLabelRelativePosition | undefined;

  /**
   * The format configuration of the value label.
   *
   * @public
   */
  FormatConfiguration?: NumericFormatConfiguration | undefined;
}

/**
 * The label configuration of a reference line.
 *
 * @public
 */
export interface ReferenceLineLabelConfiguration {
  /**
   * The value label configuration of the label in a reference line.
   *
   * @public
   */
  ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration | undefined;

  /**
   * The custom label configuration of the label in a reference line.
   *
   * @public
   */
  CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration | undefined;

  /**
   * The font configuration of the label in a reference line.
   *
   * @public
   */
  FontConfiguration?: FontConfiguration | undefined;

  /**
   * The font color configuration of the label in a reference line.
   *
   * @public
   */
  FontColor?: string | undefined;

  /**
   * The horizontal position configuration of the label in a reference line. Choose one of the following options:
   *
   * - `LEFT`
   * - `CENTER`
   * - `RIGHT`
   *
   * @public
   */
  HorizontalPosition?: ReferenceLineLabelHorizontalPosition | undefined;

  /**
   * The vertical position configuration of the label in a reference line. Choose one of the following options:
   *
   * - `ABOVE`
   * - `BELOW`
   *
   * @public
   */
  VerticalPosition?: ReferenceLineLabelVerticalPosition | undefined;
}

/**
 * The style configuration of the reference line.
 *
 * @public
 */
export interface ReferenceLineStyleConfiguration {
  /**
   * The pattern type of the line style. Choose one of the following options:
   *
   * - `SOLID`
   * - `DASHED`
   * - `DOTTED`
   *
   * @public
   */
  Pattern?: ReferenceLinePatternType | undefined;

  /**
   * The hex color of the reference line.
   *
   * @public
   */
  Color?: string | undefined;
}

/**
 * The reference line visual display options.
 *
 * @public
 */
export interface ReferenceLine {
  /**
   * The status of the reference line. Choose one of the following options:
   *
   * - `ENABLE`
   * - `DISABLE`
   *
   * @public
   */
  Status?: WidgetStatus | undefined;

  /**
   * The data configuration of the reference line.
   *
   * @public
   */
  DataConfiguration: ReferenceLineDataConfiguration | undefined;

  /**
   * The style configuration of the reference line.
   *
   * @public
   */
  StyleConfiguration?: ReferenceLineStyleConfiguration | undefined;

  /**
   * The label configuration of the reference line.
   *
   * @public
   */
  LabelConfiguration?: ReferenceLineLabelConfiguration | undefined;
}

/**
 * Options that determine the presentation of a bar series in the visual.
 *
 * @public
 */
export interface BarChartSeriesSettings {
  /**
   * Decal settings for the bar series.
   *
   * @public
   */
  DecalSettings?: DecalSettings | undefined;

  /**
   * Border settings for the bar series.
   *
   * @public
   */
  BorderSettings?: BorderSettings | undefined;
}

/**
 * The data field series item configuration of a `BarChartVisual`.
 *
 * @public
 */
export interface DataFieldBarSeriesItem {
  /**
   * Field ID of the field that you are setting the series configuration for.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * Field value of the field that you are setting the series configuration for.
   *
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * Options that determine the presentation of bar series associated to the field.
   *
   * @public
   */
  Settings?: BarChartSeriesSettings | undefined;
}

/**
 * The field series item configuration of a `BarChartVisual`.
 *
 * @public
 */
export interface FieldBarSeriesItem {
  /**
   * Field ID of the field for which you are setting the series configuration.
   *
   * @public
   */
  FieldId: string | undefined;

  /**
   * Options that determine the presentation of bar series associated to the field.
   *
   * @public
   */
  Settings?: BarChartSeriesSettings | undefined;
}

/**
 * The series item configuration of a `BarChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 *
 * @public
 */
export interface BarSeriesItem {
  /**
   * The field series item configuration of a `BarChartVisual`.
   *
   * @public
   */
  FieldBarSeriesItem?: FieldBarSeriesItem | undefined;

  /**
   * The data field series item configuration of a `BarChartVisual`.
   *
   * @public
   */
  DataFieldBarSeriesItem?: DataFieldBarSeriesItem | undefined;
}
